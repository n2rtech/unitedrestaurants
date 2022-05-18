import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const EditPromotionsDiscount = (props) => {
  const history = useHistory()
  const params = useParams();
  const [name, setName] = useState();
  const [code, setCouponCode] = useState();
  const [status, setStatus] = useState();
  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+localStorage.getItem('token') }
  };
      const result = await axios.get('/api/coupons/list/'+`${params.id}`,config);
      console.log("result", result);
      if(result) {
        setName(result.data.name);
        setCouponCode(result.data.code);
        setStatus(result.data.status);
      }
    };
    GetData();
  }, []);

  const onChangename = (event) => {
    setName(event.target.value);
  };

  const onChangecode = (event) => {
    setCouponCode(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+localStorage.getItem('token') }
      };
      const bodyParameters = {
        name: name,
        coupon_code: code,
        status: status
      };

      console.log('Body Parameters' , bodyParameters);
  
      axios.put(`/api/coupons/update/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => {
        console.log(response);
        if(response.status == 203) {
          toast.error("FIll form correctly");
        } else {
          toast.success("Coupons Updated !")
          setTimeout(() => {
            history.push('/dashboard/admin/promotions-discount/');
          }, 1000);
        }
  
      }  
      
      )
         .catch(error => console.log('Form submit error', error))
  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Coupon" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Coupon name"}</Label>
                <Input className="form-control"  type="name" value={name} onChange = {onChangename}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Coupon Code"}</Label>
                <Input className="form-control"  type="name" value={code} onChange = {onChangecode}/>
              </FormGroup>
              <FormGroup>
              <Label>Status</Label>
              <Input type="select" name="select" className="form-control digits" onChange = {onChangeStatus} placeholder="Please Select">
                
                <option value="0" selected={status === 0}>{"Disabled"}</option>
                <option value="1" selected={status === 1}>{"Enabled"}</option>

              </Input>
            </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick ={handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default EditPromotionsDiscount;