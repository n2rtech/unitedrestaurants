import React, { Fragment , useState } from 'react';
import { Container, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'

const premiumcoupon = (props) => {

  // const [coupon_code, setCouponCode] = useState('');

  const handlecoupon_code = (e) => {
    // setCouponCode(e.target.value);
  }

  const HandleCoupon = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+localStorage.getItem('token') }
      };

      const bodyParameters = {
        'coupon_code' : 'sd',
        'user_id' : localStorage.getItem('id')
      }

      axios.post(`/api/coupons/apply`,
        bodyParameters,
        config
      ) .then(response => {
            console.log("Response" , response);
      } )
         .catch(error => console.log('Form submit error', error))
    }



  return (
    <Fragment>
    <Container fluid={true}>
      <Card>
      <CardBody>
        <Form className="form theme-form">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Coupon Code"}</Label>
              <Input className="form-control" type="name" placeholder={'Enter Coupon Code'} />
            </FormGroup>
              <div className="text-center">
            <Button color="primary" onClick = {HandleCoupon}>{"Apply"}</Button>
          </div>
        </Form>
      </CardBody>
      </Card>
    </Container>
  </Fragment>
  );
}

export default premiumcoupon;
