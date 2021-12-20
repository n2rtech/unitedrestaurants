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


import { Container, Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import { Standard } from '../../../constant';
const VendorMembershipPackage = (props) => {

  const [cycle,setCycle] = useState();
  const [cycleamount,setAmount] = useState('0');
  const [interval,setInterval] = useState('');

  const onChangeCycle = (event) => {
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
  }

  const [premiumcycle,setPremiumCycle] = useState()
  const [premiumamount,setPremiumAmount] = useState('0');
  const [preinterval,setPreinterval] = useState('');

  const onChangePremiumCycle = (event) => {
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
  }


  const [activePlan, setActivePlan] = useState([]);
  const [planname, setPlanName] = useState('Free');

  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch('/api/vendors/active-plan/'+`${user_id}` , config)
        .then(res => res.json())
        .then(
          (result) => {
            setActivePlan(result);
            setPlanName(result.name);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(activePlan);


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
                          
                          <div className="pricingtable-signup"><Button color="primary" size="lg">Subscribe</Button></div>
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
                          
                          <div className="pricingtable-signup"><Button color="primary" size="lg" disabled>{"Active"}</Button></div> 
                          
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
                          
                          <div className="pricingtable-signup"><Button color="primary" size="lg" disabled>{"Active"}</Button></div> 
                          
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
