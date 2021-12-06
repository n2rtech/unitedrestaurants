import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import PaypalStandardMonthly from './paypalplans/paypalstandardmonthly.jsx'
import PaypalPremiumMonthly from './paypalplans/paypalstandardmonthly.jsx'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import { SimplePricingCard,BecomeMember, Standard, LorumIpsum, Purchase, Business,Premium,Extra,SignUp } from '../../../constant';
const VendorMembershipPackage = (props) => {
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
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">{"5.99"}</span><span className="duration">{"/mo"}</span></div>
                        <ul className="pricing-content">
                          <li>{"All what is included in Free Membership Package +"}</li>
                          <li>{"Business featured on appropriate departments"}</li>
                          <li>{"Get priority in search results"}</li>
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
                        <div className="pricingtable-signup"><PaypalStandardMonthly /></div>
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