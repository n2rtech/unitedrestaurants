import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


// add-promotion-coupon

const AddPromotionCoupon = (props) => {

  const [name, setName] = useState()
  const [coupon_code, setCouponCode] = useState()
  const [status, setStatus] = useState(1)
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const onChangename = (event) => {
    setName(event.target.value);
  };

  const onChangecode = (event) => {
    setCouponCode(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const [userStartDate, setUserStartDate] = useState(new Date())
  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios.get('/api/vendor-coupons/startdate/',config);
      if(result.data.length > 0) {
        setUserStartDate(result.data);
      }
    };
    GetData();
  }, []);



const history = useHistory()

const handleSubmit = event => {
  event.preventDefault();

  const config = {
    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      name: name,
      coupon_code: coupon_code,
      status: status
    };

    axios.post(`/api/coupons/add`,
      bodyParameters,
      config
    ) .then(response => {
      console.log(response);
      if(response.status == 203) {
        toast.error("FIll form correctly");
      } else {
        toast.success("Coupon / Deals Added !")
        setTimeout(() => {
          history.push('/dashboard/admin/promotions-discount/');
        }, 1000);
      }

    }  
    
    )
       .catch(error => console.log('Form submit error', error))
};

const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() ).padStart(1, "0");
  const mm = String(today.getMonth() +1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Coupons" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Coupon name"}</Label>
                <Input className="form-control" value = {name} onChange = {onChangename} type="text" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Coupon Code"}</Label>
                <Input className="form-control" value = {coupon_code} onChange = {onChangecode} type="text" />
              </FormGroup>
              <FormGroup>
              <Label>Status</Label>
              <Input type="select" name="select" className="form-control digits" onChange = {onChangeStatus} placeholder="Please Select">
                <option value="1">{"Enabled"}</option>
                <option value="0">{"Disabled"}</option>
              </Input>
            </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit} >{"Save"}</Button>
              </FormGroup>
             
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddPromotionCoupon;