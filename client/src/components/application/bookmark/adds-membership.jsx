import React, { Fragment ,useEffect , useState} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import { SimplePricingCard,BecomeMember, Standard, LorumIpsum, Purchase, Business,Premium,Extra,SignUp } from '../../../constant';
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddsMembership = (props) => {

  const [membershipsData, setAddmemberships] = useState([]);
  const user_id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/membership" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setAddmemberships(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(membershipsData);

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
                          <h3>{"Bronze"}</h3>
                          <h1>{"$4.99"}<span className="duration">{"/mo"}</span></h1>
                          <h6 className="mb-0">{"Your ad will appear in all sections you are listed in in the country your business resides."}</h6>
                          <FormGroup className="text-left m-t-20">
                            <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                            <Input type="select" name="select" className="form-control digits" defaultValue="1">
                              <option>{"Monthly"}</option>
                              <option>{"Quarterly"}</option>
                              <option>{"Half Yearly"}</option>
                              <option>{"Yearly"}</option>
                            </Input>
                          </FormGroup>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
                      </Card>
                    </Col>
                    <Col xl="4" sm="4" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>{"Silver"}</h3>
                          <h1>{"$6.99"}<span className="duration">{"/mo"}</span></h1>
                          <h6 className="mb-0">{"All what is included in Bronze package +  Your ad will appear on homepage"}</h6>
                          <FormGroup className="text-left m-t-20">
                            <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                            <Input type="select" name="select" className="form-control digits" defaultValue="1">
                              <option>{"Monthly"}</option>
                              <option>{"Quarterly"}</option>
                              <option>{"Half Yearly"}</option>
                              <option>{"Yearly"}</option>
                            </Input>
                          </FormGroup>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
                      </Card>
                    </Col>
                    <Col xl="4" sm="4" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>{"Gold"}</h3>
                          <h1>{"$9.99"}<span className="duration">{"/mo"}</span></h1>
                          <h6 className="mb-0">{"All what is included in Bronze and Silver package +  Your ad will appear on homepage, every departments all over worldwide"}</h6>
                          <FormGroup className="text-left m-t-20">
                            <Label htmlFor="exampleFormControlSelect9">{"Select your plan"}</Label>
                            <Input type="select" name="select" className="form-control digits" defaultValue="1">
                              <option>{"Monthly"}</option>
                              <option>{"Quarterly"}</option>
                              <option>{"Half Yearly"}</option>
                              <option>{"Yearly"}</option>
                            </Input>
                          </FormGroup>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
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