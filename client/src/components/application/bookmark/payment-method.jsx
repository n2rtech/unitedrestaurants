import React, { Fragment } from "react";
import Breadcrumb from '../../../layout/breadcrumb'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import { CreditCard, DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit, COD, EMI, BankName, SelectCard, SelectDuration,NetBanking } from "../../../constant";

const PaymentMethod = props => {
  return (
    <Fragment>
      <Breadcrumb parent="Ecommerce" title="Payment Details" />
      <Container fluid={true} className="credit-card">
        <Row>
          <Col xl="8" className="box-col-12 xl-100">
            <Card className="height-equal credit-form">
              <CardHeader className="py-4">
                <h5>{CreditCard}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="7">
                    <Form className="theme-form mega-form">
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Card number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="date" />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Full Name"
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col md="5" className="text-center">
                    <img
                      className="img-fluid"
                      src={require("../../../assets/images/ecommerce/card.png")}
                      alt=""
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          
          
          
          
        </Row>
      </Container>
    </Fragment>
  );
};

export default PaymentMethod;
