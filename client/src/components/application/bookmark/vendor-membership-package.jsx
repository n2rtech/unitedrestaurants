import React, { Fragment , useEffect, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'

import PaypalStandardMonthly from './paypalplans/paypalstandardmonthly.jsx'
import PaypalStandardQuarterly from './paypalplans/paypalstandardquarterly.jsx'
import PaypalStandardHalfyearly from './paypalplans/paypalstandardhalfyearly.jsx'
import PaypalStandardYearly from './paypalplans/paypalstandardyearly.jsx'

import PaypalPremiumMonthly from './paypalplans/paypalpremiummonthly.jsx'
import PaypalPremiumQuatertly from './paypalplans/paypalpremiumquarterly.jsx'
import PaypalPremiumHalfyearly from './paypalplans/paypalpremiumhalfyearly.jsx'
import PaypalPremiumYearly from './paypalplans/paypalpremiumyearly.jsx'


import { Container, Row, Col, Card, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import { Standard } from '../../../constant';
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const VendorMembershipPackage = (props) => {

  const [activePlan, setActivePlan] = useState([]);
  const [planname, setPlanName] = useState('Free');
  const [subscriptionid, setSubscriptionId] = useState('');

  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const country_id = localStorage.getItem("vendor_country_id");
  const [interval,setInterval] = useState('');
  const [intervalq,setIntervalq] = useState('');

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch('/api/vendors/active-plan/'+`${user_id}` , config)
        .then(res => res.json())
        .then(
          (result) => {
            setActivePlan(result);
            setPlanName(result.membership.name);
            setSubscriptionId(result.transaction.membership_subscription_id)
            setIntervalq(result.membership.interval)
            setAmountq(result.membership.price);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log("Subscription_id" ,subscriptionid);

  const [cycle,setCycle] = useState();
  const [cycleamount,setAmount] = useState('0');
  const [cycleamountq,setAmountq] = useState('0');


  const onChangeCycle = (event) => {

   if(planname == 'Free') {
    if (event.target.value == 'Monthly') {
      setAmount(5.99)
      setInterval('/monthly')
      setCycle(<PaypalStandardMonthly amount = {5.99} membership_id = {2} interval = {'Monthly'} currency = {'USD'}/>)
    }  
    else if (event.target.value == 'Quarterly') {
      setAmount(16.00)
      setInterval('/quaterly')
      setCycle(
        <PaypalStandardQuarterly amount = {16.00} membership_id = {4} interval = {'Quarterly'} currency = {'USD'}/>
      )
    } else if (event.target.value == 'Yearly') {
      setAmount(65.00)
      setInterval('/yearly')
      setCycle (
        <PaypalStandardYearly amount = {65.00} membership_id = {6} interval = {'Yearly'} currency = {'USD'}/>
      )
    } else {
      setAmount(30.00)
      setInterval('/half-yearly')
      setCycle (
        <PaypalStandardHalfyearly amount = {30.00} membership_id = {5} interval = {'HalfYearly'} currency = {'USD'}/>
      )
    }
   } else {
      SweetAlert.fire(
          'Alert!',
          'First Cancel Current Subscription Plan.',
          'warning'
      )
   }

     
  }

  const [premiumcycle,setPremiumCycle] = useState()
  const [premiumamount,setPremiumAmount] = useState('0');
  const [preinterval,setPreinterval] = useState('');

  const onChangePremiumCycle = (event) => {
    if(planname == 'Free') {
      if (event.target.value == 'Monthly') {
        setPremiumAmount(7.99)
        setPreinterval('/monthly')
        setPremiumCycle(<PaypalPremiumMonthly amount = {7.99} membership_id = {3} interval = {'Monthly'} currency = {'USD'}/>)
      }  
      else if (event.target.value == 'Quarterly') {
        setPremiumAmount(29.00)
        setPreinterval('/quarterly')
        setPremiumCycle(
          <PaypalPremiumQuatertly amount = {29.00} membership_id = {7} interval = {'Quarterly'} currency = {'USD'}/>
        )
      } else if (event.target.value == 'Yearly') {
        setPremiumAmount(90.00)
        setPreinterval('/yearly')
        setPremiumCycle (
          <PaypalPremiumYearly amount = {90.00} membership_id = {9} interval = {'Yearly'} currency = {'USD'}/>
        )
      } else {
        setPremiumAmount(43.00)
        setPreinterval('/half-yearly')
        setPremiumCycle (
          <PaypalPremiumHalfyearly amount = {43.00} membership_id = {8} interval = {'HalfYearly'} currency = {'USD'}/>
        )
      }
    } else {
      SweetAlert.fire(
        'Alert!',
        'First Cancel Current Subscription Plan.',
        'warning'
      )
    }
    
  }

    const HandleMembership = (event) => {

      if(planname == 'Free') {
        SweetAlert.fire({
          title: 'Are you sure?',
          text: "Once activated, your current subscriptions plan has been de-activated!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'cancel',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("id");
            const config = {
              headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
              };
      
              const bodyParameters = {
                membership_id: '1',
                membership_subscription_id: 'free',
                interval: 'free',
                price: 'free',
                country_id : country_id,
                comment: 'Free package'
              }
      
            axios.put('/api/vendor-membership/asign-to-user/'+`${user_id}`, bodyParameters ,config )
            .then(response => toast.success('Transaction Completed'))
            .catch(error => console.log('Form submit error', error))
            SweetAlert.fire(
              'Acivate!',
              'Free package Membeship has been activated.',
              'success'
            )
          }
        })
      } else {
        SweetAlert.fire(
          'Alert!',
          'First Cancel Current Subscription Plan.',
          'warning'
        )
      }
      
    }

    const CancelSubscription = (id) => {
      
      SweetAlert.fire({
        title: 'Are you sure?',
        text: "Once cacncel, your current subscriptions plan has been de-activated!",
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
                        membership_id: '1',
                        membership_subscription_id: 'free',
                        interval: 'free',
                        price: 0,
                        country_id: country_id,
                        comment: 'Free package'
                      }
              
                    axios.put('/api/vendor-membership/asign-to-user/'+`${user_id}`, bodyParameters ,config )
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
      <Breadcrumb parent="Price" title="Membership Package" />
      <Container fluid={true} >
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody className="row">
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{"Free"}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">{"0"}</span></div>
                        <ul className="pricing-content">
                          <li>{"Listing on the Website"}</li>
                          <li>{"Your Business Name"}</li>
                          <li>{"Store Address + Phone Number + Email + Social media links"}</li>
                          <li>{"Website Info and Link"}</li>
                          <li>{"Upload Business Images & Videos"}</li>
                          <li>{"Complete use of our platform"}</li>
                        </ul>
                        
                          { planname == 'Free' ? 
                          
                            <div className="pricingtable-signup"><Button color="primary" size="lg" disabled>{"Active"}</Button></div> 
                          
                            :
                          
                            <div className="pricingtable-signup"><Button color="primary" size="lg" onClick = {HandleMembership}>Included with paid plans</Button></div>
                          
                          }
                          
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{Standard}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">
                        {cycleamount}                          
                          </span><span className="duration">{interval}</span></div>
                        <ul className="pricing-content">
                          <li>{"All what is included in Free Membership Package +"}</li>
                          <li>{"Business featured on appropriate departments"}</li>
                          <li>{"Get priority in search results"}</li>
                        </ul>


                        <FormGroup className="text-left">
                          <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                          <Input type="select" name="select" onChange = {onChangeCycle} className="form-control digits" defaultValue="1">
                            <option>{"Select Cycle"}</option>
                            <option>{"Monthly"}</option>
                            <option>{"Quarterly"}</option>
                            <option>{"Half Yearly"}</option>
                            <option>{"Yearly"}</option>
                          </Input>
                        </FormGroup>
                        
                        <div className="pricingtable-signup">
                        {cycle}

                        { planname == 'Standard' ? 
                          
                          <div className="pricingtable-signup">
                              {"Selected Cycle"} : {intervalq}<br/>
                              {"Amount"} : {cycleamountq} <br/>
                             <Button color="primary" size="lg" disabled>{"Active"}</Button><br/>
                              
                             <br/>
                             <Button color="danger" size="lg" onClick={() => CancelSubscription(subscriptionid)}>{"cancel"}</Button>
                          </div> 
                          
                          :
                          
                          ''
                          }

                        </div>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{"Premium"}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">
                        {premiumamount}  
                          </span><span className="duration">{preinterval}</span></div>
                        <ul className="pricing-content">
                          <li>{"All what is included in Free & Standard membership + "}</li>
                          <li>{"Get Featured on Homepage in the country your business is located"}</li>
                        </ul>
                        <FormGroup className="text-left">
                          <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                          <Input type="select" name="select" onChange = {onChangePremiumCycle}  className="form-control digits" defaultValue="1">
                            <option>{"Select Cycle"}</option>
                            <option>{"Monthly"}</option>
                            <option>{"Quarterly"}</option>
                            <option>{"Half Yearly"}</option>
                            <option>{"Yearly"}</option>
                          </Input>
                        </FormGroup>
                        <div className="pricingtable-signup">
                        {premiumcycle}
                        { planname == 'Premium' ? 
                          
                          <div className="pricingtable-signup">
                              {"Selected Cycle"} : {intervalq}<br/>
                              {"Amount"} : {cycleamountq} <br/>
                             <Button color="primary" size="lg" disabled>{"Active"}</Button><br/>
                              
                             <br/>
                             <Button color="danger" size="lg" onClick={() => CancelSubscription(subscriptionid)}>{"cancel"}</Button>
                          </div> 
                          :
                          
                          ''
                          }

                        </div>
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
    </Fragment>
  );
}

export default VendorMembershipPackage;
