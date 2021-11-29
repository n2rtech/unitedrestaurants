import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const EditVendorCoupon = (props) => {

  const [dealname, setDealname] = useState()
  const [description, setDescription] = useState()
  const params = useParams();
  const token = localStorage.getItem("token");

  const onChangeDealname = (event) => {
    setDealname(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/vendor-coupons/'+`${params.id}`,config);
      setDealname(result.data.deal_name)
      setDescription(result.data.deal_description)
    };
    GetData();
  }, []);



// Edit Api
const history = useHistory()

const handleSubmit = event => {
  event.preventDefault();

  const config = {
    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      deal_name: dealname,
      deal_description: description
    };
    axios.put(`/api/vendor-coupons/`+`${params.id}`,
      bodyParameters,
      config
    ) .then(response => {
      toast.success("Successfully updated !")
        setTimeout(() => {
          history.push('/dashboard/vendor/vendor-coupon/');
        }, 1000);
    }  
    
    )
       .catch(error => console.log('Form submit error', error))


};

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Deals or Promotions" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Deal name"}</Label>
                <Input className="form-control" value = {dealname} onChange = {onChangeDealname} type="text" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" value = {description} onChange = {onChangeDescription}  className="form-control"  rows="3"/>
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

export default EditVendorCoupon;