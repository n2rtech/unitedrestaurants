import React, { Fragment , useEffect, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'

import PaypalStandard from "./paypalplans/paypalstandard.jsx"
import PaypalPremium from "./paypalplans/paypalpremium.jsx"

import { Container, Row, Col, Card, CardBody, Button, Form ,FormGroup, Label, Input } from 'reactstrap'
import { Standard } from '../../../constant';
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const VendorMembershipPackage = (props) => {

  const [plansDataPremium, setPlansDataPremium] = useState([]);
  const [plansDataStandard, setPlansDataStandard] = useState([]);
  const [activePlan, setActivePlan] = useState([]);
  const [planname, setPlanName] = useState('Free');
  const [subscriptionid, setSubscriptionId] = useState('');
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const country_id = localStorage.getItem("vendor_country_id");
  const [interval,setInterval] = useState('');
  const [intervalq,setIntervalq] = useState('');
  const [couponapplied,setCouponApplied] = useState(false);
  const [standardcouponapplied, setStandardCouponapplied] = useState(false);
  const [coupon_code, setCouponCode] = useState('');
  const [testclient_id, setTestClientid] = useState('')
  const [testsecret, setTestSecret] = useState('')
  const [liveclient_id, setLiveClientid] = useState('')
  const [livesecret, setLiveSecret] = useState('')
  const fetch = require('node-fetch');
  const [mode, setMode] = useState('');
  const TestclientIdAndSecret = `${testclient_id}:${testsecret}`;
  const LiveclientIdAndSecret = `${liveclient_id}:${livesecret}`;
  const Testbasictoken = Buffer.from(TestclientIdAndSecret).toString('base64')
  const Livebasictoken = Buffer.from(LiveclientIdAndSecret).toString('base64')
  const [Url , setUrl] = useState('');
  const basictoken = '';
  
    const handlecoupon_code = (e) => {
      setCouponCode(e.target.value);
    }

  const HandleCouponPremium = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+localStorage.getItem('token') }
      };

      const bodyParameters = {
        'coupon_code' : coupon_code,
        'coupon_id' : PremiumCoupon_id,
        'user_id' : localStorage.getItem('id')
      }

      axios.post(`/api/coupons/apply`,
        bodyParameters,
        config
      ) .then(response => {
        console.info("Response" , response);
        console.info("Response Length" , response.data.length);
            if(response.data.length == 0) {
              SweetAlert.fire(
                'Alert!',
                'Coupon is not found / exists',
                'warning'
            )
            } 

            if(response.data.length > 0) {
              SweetAlert.fire(
                'Success',
                'Coupon Applied',
                'success'
              )

             setCouponApplied(true);
             setPremiumCoupon(false);

            }
            
      } )
         .catch(error => console.log('Form submit error', error))
    }

    const HandleCouponStandard = event => {
  
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+localStorage.getItem('token') }
        };
  
        const bodyParameters = {
          'coupon_code' : coupon_code,
          'coupon_id' : StandardCoupon_id,
          'user_id' : localStorage.getItem('id')
        }
  
        axios.post(`/api/coupons/apply`,
          bodyParameters,
          config
        ) .then(response => {
              if(response.data.length == 0) {
                SweetAlert.fire(
                  'Alert!',
                  'Coupon is not found / exists',
                  'warning'
              )
              } 
  
              if(response.data.length > 0) {
                SweetAlert.fire(
                  'Success',
                  'Coupon Applied',
                  'success'
                )
  
               setStandardCouponapplied(true);
               setStandardCoupon(false);
  
              }
              
        } )
           .catch(error => console.log('Form submit error', error))
      }

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch('/api/vendors/active-plan/'+`${user_id}` , config)
        .then(res => res.json())
        .then(
          (result) => {
            setActivePlan(result);
            
            if(result.membership) {
              setPlanName(result.membership.plan_type);
              setIntervalq(result.membership.interval)
              setAmountq(result.membership.price);
            }
            if(result.transaction){
                setSubscriptionId(result.transaction.membership_subscription_id)
            }
           
          },
          (error) => {
            
          }
        )


      fetch("/api/vendor-membership/plan-list-array" , config)
      .then(res => res.json())
      .then(
        (result) => {
          setPlansDataStandard(result.standard);
          setPlansDataPremium(result.premium);
        },
        (error) => {}
      )

      axios.get(`/api/paypal/`,
            config
            ).then(result => {
              if(result.data[0].mode == 1) {
                setUrl("https://api-m.sandbox.paypal.com/");
                setTestClientid(result.data[0].testclient_id);
                setTestSecret(result.data[0].testsecret);
              } else {
                setUrl("https://api-m.paypal.com/");
                setLiveClientid(result.data[0].liveclient_id);
                setLiveSecret(result.data[0].livesecret);
              }  
              setMode(result.data[0].mode);
            }
          ).catch(error => console.log('Form submit error', error))

    }, []);

  const [cycle,setCycle] = useState();
  const [cycleamount,setAmount] = useState('0');
  const [cycleamountq,setAmountq] = useState('0');
  const [StandardCoupon_id,setStandardCoupon_id] = useState(0);
  const [StandardCoupons,setStandardCoupon] = useState(false);
  const [StandardwithCoupons,setStandardwithCoupon] = useState(false);
  const [PremiumwithCoupons,setPremiumwithCoupons] = useState(false);
  
  const onChangeCycle = (event) => {

   if(planname === 'Free') {
    if(event.target[event.target.selectedIndex].getAttribute('data1-discount') == 1) {
      setStandardCoupon(true);
      setStandardwithCoupon(false);
      setStandardCoupon_id(event.target[event.target.selectedIndex].getAttribute('data1-coupon_id'));
      setAmount(event.target[event.target.selectedIndex].getAttribute('data1-price').replace('.0000','.00'))
      setInterval(event.target[event.target.selectedIndex].getAttribute('data1-interval'))
      setCycle(<PaypalStandard plan_id = {event.target[event.target.selectedIndex].getAttribute('data1-plan_id')} amount = {event.target[event.target.selectedIndex].getAttribute('data1-price')} membership_id = {event.target[event.target.selectedIndex].getAttribute('data1-id')} interval = {event.target[event.target.selectedIndex].getAttribute('data1-interval')} currency = {'USD'}/>)
     } else {
      setStandardCoupon(false);
      setStandardwithCoupon(true);
      setStandardCoupon_id(event.target[event.target.selectedIndex].getAttribute('data1-coupon_id'));
      setAmount(event.target[event.target.selectedIndex].getAttribute('data1-price').replace('.0000','.00'))
      setInterval(event.target[event.target.selectedIndex].getAttribute('data1-interval'))
      setCycle(<PaypalStandard plan_id = {event.target[event.target.selectedIndex].getAttribute('data1-plan_id')} amount = {event.target[event.target.selectedIndex].getAttribute('data1-price')} membership_id = {event.target[event.target.selectedIndex].getAttribute('data1-id')} interval = {event.target[event.target.selectedIndex].getAttribute('data1-interval')} currency = {'USD'}/>)
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
  const [PremiumCoupon_id,setPremiumCoupon_id] = useState(0);
  const [preinterval,setPreinterval] = useState('');
  const [PremiumCoupons,setPremiumCoupon] = useState(false);

  const onChangePremiumCycle = (event) => {
    if(planname === 'Free') {

        if(event.target[event.target.selectedIndex].getAttribute('data-discount') == 1) {
          setPremiumCoupon(true);
          setPremiumwithCoupons(false);
          setPremiumCoupon_id(event.target[event.target.selectedIndex].getAttribute('data-coupon_id') );
          setPremiumAmount(event.target[event.target.selectedIndex].getAttribute('data-price').replace('.0000','.00'))
          setPreinterval(event.target[event.target.selectedIndex].getAttribute('data-interval'))
          setPremiumCycle(<PaypalPremium plan_id = {event.target[event.target.selectedIndex].getAttribute('data-plan_id')} amount = {event.target[event.target.selectedIndex].getAttribute('data-price')} membership_id = {event.target[event.target.selectedIndex].getAttribute('data-id')} interval = {event.target[event.target.selectedIndex].getAttribute('data-interval')} currency = {'USD'}/>)    
        } else {
          setPremiumCoupon(false);
          setPremiumwithCoupons(true);
          setPremiumCoupon_id(event.target[event.target.selectedIndex].getAttribute('data-coupon_id') );
          setPremiumAmount(event.target[event.target.selectedIndex].getAttribute('data-price').replace('.0000','.00'))
          setPreinterval(event.target[event.target.selectedIndex].getAttribute('data-interval'))
          setPremiumCycle(<PaypalPremium plan_id = {event.target[event.target.selectedIndex].getAttribute('data-plan_id')} amount = {event.target[event.target.selectedIndex].getAttribute('data-price')} membership_id = {event.target[event.target.selectedIndex].getAttribute('data-id')} interval = {event.target[event.target.selectedIndex].getAttribute('data-interval')} currency = {'USD'}/>)    
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
      const basictoken = (mode == 1) ? Testbasictoken : Livebasictoken;
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
          axios({
            url: `${Url}/v1/billing/subscriptions/`+`${id}`+`/cancel`,
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
                        
                          { planname === 'Free' ? 
                            <div className="pricingtable-signup"><Button color="primary" disabled>{"Active"}</Button></div> 
                            :
                            <div className="pricingtable-signup"><Button color="primary" onClick = {HandleMembership}>Included with paid plans</Button></div>
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
                            {plansDataStandard && plansDataStandard.map((item , i) => (
                                 <option value={item.interval} 
                                 data1-price={item.price}
                                 data1-id={item.id}
                                 data1-interval={item.interval}
                                 data1-plan_id={item.plan_id}
                                 data1-discount = {item.discount}
                                 data1-coupon_id = {item.discount_coupon_id}
                                 >{item.interval} {item.discount == 1 ? '( Discount )' : '' }</option>
                            ))}
                          </Input>
                        </FormGroup>

                        {StandardCoupons && 

                          <CardBody>
                          <Form className="form theme-form">
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput1">{"Coupon Code"}</Label>
                                <Input className="form-control" type="name" placeholder={'Enter Coupon Code'} onChange = {handlecoupon_code}/>
                              </FormGroup>
                                <div className="text-center">
                              <Button color="primary" onClick = {() => HandleCouponStandard()}>{"Apply"}</Button>
                            </div>
                          </Form>
                          </CardBody>

                          }
                                                  
                        <div className="pricingtable-signup">
                        {standardcouponapplied && cycle} 
                        {StandardwithCoupons && cycle}
                        { planname === 'standard' ? 
                          <div className="pricingtable-signup">
                              {"Selected Cycle"} : {intervalq}<br/>
                              {"Amount"} : {cycleamountq} <br/>
                             <Button color="primary" size="lg" disabled>{"Active"}</Button><br/> 
                             <br/>
                             <Button color="danger" onClick={() => CancelSubscription(subscriptionid)}>{"cancel"}</Button>
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
                            {plansDataPremium && plansDataPremium.map((item , i) => (
                                 <option value={item.interval} 
                                 data-price={item.price}
                                 data-id={item.id}
                                 data-interval={item.interval}
                                 data-plan_id={item.plan_id}
                                 data-discount = {item.discount}
                                 data-coupon_id = {item.discount_coupon_id}
                                 >{item.interval} {item.discount == 1 ? '( Discount )' : '' }</option>
                            ))}
                          </Input>
                        </FormGroup>
                        {PremiumCoupons && 

                            <CardBody>
                            <Form className="form theme-form">
                                <FormGroup>
                                  <Label htmlFor="exampleFormControlInput1">{"Coupon Code"}</Label>
                                  <Input className="form-control" type="name" placeholder={'Enter Coupon Code'} onChange = {handlecoupon_code}/>
                                </FormGroup>
                                  <div className="text-center">
                                <Button color="primary" onClick = {HandleCouponPremium}>{"Apply"}</Button>
                              </div>
                            </Form>
                          </CardBody>
                        
                        }

                        
                        <div className="pricingtable-signup">
                        {couponapplied && premiumcycle} 
                        {PremiumwithCoupons && premiumcycle}
                        { planname === 'premium' ? 
                          
                          <div className="pricingtable-signup">
                              {"Selected Cycle"} : {intervalq}<br/>
                              {"Amount"} : {cycleamountq} <br/>
                             <Button color="primary" disabled>{"Active"}</Button><br/>
                              
                             <br/>
                             <Button color="danger" onClick={() => CancelSubscription(subscriptionid)}>{"Cancel"}</Button>
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
