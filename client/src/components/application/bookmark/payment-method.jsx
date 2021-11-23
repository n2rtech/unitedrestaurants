import React, { Fragment } from "react";
import Breadcrumb from '../../../layout/breadcrumb'
import {
  Container,
  Row,
  Label,
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
                       <Label>{"Card Number"}</Label>
                        <Input
                          className="form-control"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                      <Label>{"Name on Card"}</Label>
                        <Input
                          className="form-control"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>{"Expiry Date"}</Label>
                        <Input className="form-control" type="date" />
                      </FormGroup>
                      <FormGroup>
                        <Label>{"CVV"}</Label>
                        <Input
                          className="form-control"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button  color="primary">{"Save"}</Button>
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
