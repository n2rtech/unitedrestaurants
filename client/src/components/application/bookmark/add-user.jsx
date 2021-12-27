import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button , ExampleSelect} from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddUser = (props) => {

  const [username, setUserName] = useState()
  const [useremail, setUserEmail] = useState()
  const [userpassword, setUserPassword] = useState()
  const token = localStorage.getItem("token");

  const onChangeusername = (event) => {
    setUserName(event.target.value);
  }

  const onChangeuseremail = (event) => {
    setUserEmail(event.target.value);
  }

  const onChangeuserpassword = (event) => {
    setUserPassword(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };

      const bodyParameters = {
        name: username,
        first_name: username,
        lastname: '',
        email: useremail,
        password: userpassword
      };
      axios.post(`/api/users/register/`,
        bodyParameters,
        config
      ) .then(response => toast.success("User has been added !")  )
         .catch(error => console.log('Form submit error', error))
  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add User" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"User name"}</Label>
                <Input className="form-control" type="text"  onChange = {onChangeusername}  />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input type="email" className="form-control" onChange = {onChangeuseremail} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Password"}</Label>
                <Input type="text" className="form-control" onChange = {onChangeuserpassword}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlSelect9">{"Select Roles"}</Label>
                <Input type="select" name="select" className="form-control digits" placeholder="Please select">
                  <option>{"Full access"}</option>
                  <option>{"Accounts access"}</option>
                  <option>{"Content Management"}</option>
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

export default AddUser;