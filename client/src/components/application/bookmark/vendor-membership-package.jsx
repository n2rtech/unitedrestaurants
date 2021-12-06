import React, { Fragment , useState } from 'react';
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
import { SimplePricingCard,BecomeMember, Standard, LorumIpsum, Purchase, Business,Premium,Extra,SignUp } from '../../../constant';
const VendorMembershipPackage = (props) => {

  const [cycle,setCycle] = useState('Monthly')
  const [amount,setAmount] = useState('5.99')

  const onChangeCycle = (event) => {
    setCycle(event.target.value);
    setAmount(event.target.value);
  }

  console.log('Cycle' , cycle);

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
                        <div className="pricingtable-signup"><Button color="primary" size="lg" disabled>{"Active"}</Button></div>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{Standard}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">
                        {(() => {
                          
                          if (cycle == 'Monthly') {
                            return (
                              5.99
                            )}  else if (cycle == 'Quarterly') {
                              return (
                                16.00
                              )
                            } else if (cycle == 'Yearly') {
                              return (
                                30.00
                              )
                            } else {
                              return (
                                65.00
                              )
                            }
                          })()}                          
                          </span><span className="duration">{"/mo"}</span></div>
                        <ul className="pricing-content">
                          <li>{"All what is included in Free Membership Package +"}</li>
                          <li>{"Business featured on appropriate departments"}</li>
                          <li>{"Get priority in search results"}</li>
                        </ul>
                        <FormGroup className="text-left">
                          <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                          <Input type="select" name="select" onChange = {onChangeCycle} className="form-control digits" defaultValue="1">
                            <option>{"Monthly"}</option>
                            <option>{"Quarterly"}</option>
                            <option>{"Half Yearly"}</option>
                            <option>{"Yearly"}</option>
                          </Input>
                        </FormGroup>
                        <div className="pricingtable-signup">
                        {(() => {
                          
                          if (cycle == 'Monthly') {
                            return (
                              <PaypalStandardMonthly/>
                            )}  else if (cycle == 'Quarterly') {
                              return (
                                <PaypalStandardQuarterly/>
                              )
                            } else if (cycle == 'Yearly') {
                              return (
                                <PaypalStandardYearly/>
                              )
                            } else {
                              return (
                                <PaypalStandardHalfyearly/>
                              )
                            }
                          })()}
                        </div>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{"Premium"}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">{"7.99"}</span><span className="duration">{"/mo"}</span></div>
                        <ul className="pricing-content">
                          <li>{"All what is included in Free & Standard membership + "}</li>
                          <li>{"Get Featured on Homepage in the country your business is located"}</li>
                        </ul>
                        <FormGroup className="text-left">
                          <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                          <Input type="select" name="select" className="form-control digits" defaultValue="1">
                            <option>{"Monthly"}</option>
                            <option>{"Quarterly"}</option>
                            <option>{"Half Yearly"}</option>
                            <option>{"Yearly"}</option>
                          </Input>
                        </FormGroup>
                        <div className="pricingtable-signup"><PaypalPremiumMonthly /></div>
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