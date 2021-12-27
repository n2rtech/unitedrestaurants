import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button , ExampleSelect} from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddUser = (props) => {


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add User" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"User name"}</Label>
                <Input className="form-control" type="text" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input type="email" className="form-control" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Password"}</Label>
                <Input type="text" className="form-control" />
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
                <Button  color="primary">{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddUser;