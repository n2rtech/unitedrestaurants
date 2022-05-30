import React, { Fragment ,useEffect , useState} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import SweetAlert from 'sweetalert2'
import Paypalbuttonbronze from './advertisementpaypal/bronzepaypal.jsx'
import Paypalbuttonsilver from './advertisementpaypal/silverpaypal.jsx'
import Paypalbuttongold from './advertisementpaypal/goldpaypal.jsx'

const AddsMembership = (props) => {


  const [membershipsData, setAddmemberships] = useState([]);
  const user_id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/adds-membership" , config)
        .then(res => res.json())
        .then(
          (result) => {
            setAddmemberships(result);
          },
          (error) => {
            
          }
        )
    }, []);

  const [bronzecycle,setBronzeCycle] = useState('');
  const [silvercycle,setSilverCycle] = useState('');
  const [goldcycle,setGoldCycle] = useState('');
  
  const [bronzeinterval,setBronzeInterval]  = useState('/mo');
  const [bronzeprice,setBronzePrice]        = useState('4.99');
  const [silverinterval,setSilverInterval]  = useState('/mo');
  const [silverprice,setSilverPrice]        = useState('6.99');
  const [goldinterval,setGoldInterval]  = useState('/mo');
  const [goldprice,setGoldPrice]        = useState('9.99');
    
   
   const onChangeBronze = (event) => {
    if(planname === '') {
     if(event.target.value === 'Monthly') {
        getIdfromData('Monthly','bronze');
     } else if(event.target.value === 'Quarterly') {
        getIdfromData('Quarterly','bronze');
     } else if(event.target.value === 'Yearly') {
        getIdfromData('Yearly','bronze');
     } else {
        getIdfromData('HalfYearly','bronze');
     }
    } else {
      SweetAlert.fire(
        'Alert!',
        'First Cancel Current Subscription Plan.',
        'warning'
    )
    }
   }

   const onChangeSilver = (event) => {
     if(planname === '') {
        if(event.target.value === 'Monthly') {
            getIdfromData('Monthly','silver');
        } else if(event.target.value === 'Quarterly') {
            getIdfromData('Quarterly','silver');
        } else if(event.target.value === 'Yearly') {
            getIdfromData('Yearly','silver');
        } else {
            getIdfromData('HalfYearly','silver');
        }
     } else {
      SweetAlert.fire(
        'Alert!',
        'First Cancel Current Subscription Plan.',
        'warning'
    )
    }
  }

  const onChangeGold = (event) => {
    if(planname === '') {
        if(event.target.value === 'Monthly') {
            getIdfromData('Monthly','gold');
        } else if(event.target.value === 'Quarterly') {
            getIdfromData('Quarterly','gold');
        } else if(event.target.value === 'gold') {
            getIdfromData('Yearly','gold');
        } else {
            getIdfromData('HalfYearly','gold');
        }
    } else {
        SweetAlert.fire(
          'Alert!',
          'First Cancel Current Subscription Plan.',
          'warning'
        )
    }
  }

   const getIdfromData = (interval,type) => {
    membershipsData.map(
      item => {
        if(item.interval == interval && item.slug == type) {
          if(type == 'bronze') {
            setBronzeInterval('/'+item.interval)
            setBronzePrice(item.price)
            setBronzeCycle (
              <Paypalbuttonbronze planid = {item.plan_id} amount = {item.price} membership_id = {item.id} user_id = {user_id} interval = {item.interval} currency = {'USD'}/>
            )
          } else if(type == 'silver') {
            setSilverInterval('/'+item.interval)
            setSilverPrice(item.price)
            setSilverCycle (
              <Paypalbuttonsilver planid = {item.plan_id} amount = {item.price} membership_id = {item.id} user_id = {user_id} interval = {item.interval} currency = {'USD'}/>
            )
          } else {
            setGoldInterval('/'+item.interval)
            setGoldPrice(item.price)
            setGoldCycle (
              <Paypalbuttongold planid = {item.plan_id} amount = {item.price} membership_id = {item.id} user_id = {user_id} interval = {item.interval} currency = {'USD'}/>
            )
          }
         
        }
      }
    )
   }


   // ACTIVE PLAN 

   const [activePlan, setActivePlan] = useState([]);
   const [planname, setPlanName] = useState('');
   const [subscriptionid, setSubscriptionId] = useState('');
 
   useEffect(() => {
   
       const config = {
           headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
       };
    
       fetch('/api/vendors/active-adds-plan/'+`${user_id}` , config)
         .then(res => res.json())
         .then(
           (result) => {
             setActivePlan(result);
             if(result.membership != null) {
              setPlanName(result.membership.name);
              setSubscriptionId(result.transaction.membership_subscription_id)
             }
             
           },
           (error) => {
             
           }
         )
     }, []);

     console.log(activePlan);

     const CancelSubscription = (id) => {
      
      SweetAlert.fire({
        title: 'Are you sure?',
        text: "Once cancel, your current subscriptions plan has been de-activated!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          var client_id = 'AdHb0ADMHUAWykWQD-w8MBR3kupSvY7AXDVzaROrrMBZgAT0H4bfhnlXrywvplNb2chG4LC1zAbD7x7t';
          var secret = 'EMLe2XvwWWpke2ZYX9uW-SibKne2GR9x8N6e-xD8bZd6W8C8YdiuQIHxaTKh3rfOmiOxrUrwCbNevI9C';
          var basictoken = 'QWRIYjBBRE1IVUFXeWtXUUQtdzhNQlIza3VwU3ZZN0FYRFZ6YVJPcnJNQlpnQVQwSDRiZmhubFhyeXd2cGxOYjJjaEc0TEMxekFiRDd4N3Q6RU1MZTJYdndXV3BrZTJaWVg5dVctU2liS25lMkdSOXg4TjZlLXhEOGJaZDZXOEM4WWRpdVFJSHhhVEtoM3JmT21pT3hyVXJ3Q2JOZXZJOUM=';
          axios({
            url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/`+`${id}`+`/cancel`,
            method: 'post',
            headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' , 'Authorization': 'Basic '+basictoken },
            data: { "reason": "test -- Not satisfied with the service" }
          })
            .then(res => {
               if(res.status == '204') {
                            
                    const token = localStorage.getItem("token");
                    const user_id = localStorage.getItem("id");
                    const config = {
                      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
                      };
              
                      const bodyParameters = {
                        adds_membership_id: '',
                        membership_subscription_id: '',
                        interval: '',
                        price: 0,
                        comment: ''
                      }
              
                    axios.put('/api/adds-membership/asign-to-user/'+`${user_id}`, bodyParameters ,config )
                    .then(response => toast.success('Subscriptions is successfully canceled.'))
                    .catch(error => console.log('Form submit error', error))
               } else {
                SweetAlert.fire(
                  'Error'
                )
               }  
            });
        }
        else {
          SweetAlert.fire(
            'Not canceled'
          )
        }
      })
    }

  return (
    <Fragment>
      <Breadcrumb parent="Price" title="Adds Membership" />
      <Container fluid={true} >
            <Row>
              <Col sm="12">
                <Card>
                  <Row className="card-body pricing-content AddsMembership">
                  
                    <Col xl="4" sm="4" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>Bronze</h3>
                          <h1>{bronzeprice}<span className="duration">{bronzeinterval}</span></h1>
                          <h6 className="mb-0">Your ad will appear in all sections you are listed in in the country your business resides.</h6>
                          <FormGroup className="text-left m-t-20">
                            <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                            <Input type="select" name="select" onChange = {onChangeBronze} className="form-control digits" defaultValue="1">
                              <option>{"Select Cycle"}</option>
                              <option>{"Monthly"}</option>
                              <option>{"Quarterly"}</option>
                              <option>{"Half Yearly"}</option>
                              <option>{"Yearly"}</option>
                            </Input>
                          </FormGroup>
                        </CardBody>
                          {bronzecycle}

                          { planname == 'Bronze' ? 
                          
                          <div className="pricingtable-signup">
                             <Button color="primary" size="lg" disabled>{"Active"}</Button><br/><br/>
                             <Button color="danger" size="lg" onClick={() => CancelSubscription(subscriptionid)}>{"cancel"}</Button>
                          </div> 
                          
                          :              
                          ''
                          }


                      </Card>
                    </Col>


                    <Col xl="4" sm="4" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>Silver</h3>
                          <h1>{silverprice}<span className="duration">{silverinterval}</span></h1>
                          <h6 className="mb-0">All what is included in Bronze package + Your ad will appear on homepage</h6>
                          <FormGroup className="text-left m-t-20">
                            <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                            <Input type="select" name="select" onChange = {onChangeSilver} className="form-control digits" defaultValue="1">
                              <option>{"Select Cycle"}</option>
                              <option>{"Monthly"}</option>
                              <option>{"Quarterly"}</option>
                              <option>{"Half Yearly"}</option>
                              <option>{"Yearly"}</option>
                            </Input>
                          </FormGroup>
                        </CardBody>
                        {silvercycle}
                      </Card>
                    </Col>


                    <Col xl="4" sm="4" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>Gold</h3>
                          <h1>{goldprice}<span className="duration">{goldinterval}</span></h1>
                          <h6 className="mb-0">All what is included in Bronze and Silver package + Your ad will appear on homepage, every departments all over worldwide</h6>
                          <FormGroup className="text-left m-t-20">
                            <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                            <Input type="select" name="select" onChange = {onChangeGold} className="form-control digits" defaultValue="1">
                              <option>{"Select Cycle"}</option>
                              <option>{"Monthly"}</option>
                              <option>{"Quarterly"}</option>
                              <option>{"Half Yearly"}</option>
                              <option>{"Yearly"}</option>
                            </Input>
                          </FormGroup>
                        </CardBody>
                        {goldcycle}
                      </Card>
                    </Col>

                  
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
    </Fragment>
  );
}

export default AddsMembership;
