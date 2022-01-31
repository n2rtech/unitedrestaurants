import React, { Fragment , useEffect , useState } from "react";
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
import { CreditCard } from "../../../constant";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const PaymentMethod = props => {

  const [cardnumber,setCardnumber] = useState('')
  const [namecard,setNamecard] = useState('')
  const [expiry,setExpiry] = useState('')
  const [id,setId] = useState('') 

  const params = useParams();
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch("/api/payment-methods/"+`${params.id}` , config)
        .then(res => res.json())
        .then(
          (result) => {
            setCardnumber(result.card_number);
            setNamecard(result.name_on_card);
            setExpiry(result.expiry_date);
            setId(result.id);
          },
          (error) => {
            
          }
        )
    }, []);

    const onChangeCardnumber = (event) => {
      setCardnumber(event.target.value)
    }

    const onChangeNamecard = (event) => {
      setNamecard(event.target.value)
    }

    const onChangeExpiry = (event) => {
      setExpiry(event.target.value)
    }

    // Edit Api
  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        card_number: cardnumber,
        name_on_card: namecard,
        expiry: expiry,
        cvv: '0',
        user_id: user_id
      };
      axios.put(`/api/payment-methods/`+`${id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Payment Methods updated !")
          setTimeout(() => {
            window.location.reload();
          }, 1000);
      })
         .catch(error => console.log('Form submit error', error))

  };

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
                          type="text" onChange  = {onChangeCardnumber} value= {cardnumber}
                        />
                      </FormGroup>
                      <FormGroup>
                      <Label>{"Name on Card"}</Label>
                        <Input
                          className="form-control"
                          type="text" onChange  = {onChangeNamecard} value= {namecard}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>{"Expiry Date"}</Label>
                        <Input className="form-control"  onChange = {onChangeExpiry} type="date"  value= {expiry}/>
                      </FormGroup>
                      {/*<FormGroup>
                        <Label>{"CVV"}</Label>
                        <Input
                          className="form-control"
                          type="number"
                        />
                      </FormGroup>*/}
                      <FormGroup>
                        <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
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
