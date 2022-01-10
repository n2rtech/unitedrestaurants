import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {toast} from 'react-toastify';
import axios from 'axios'

const AddAccountsPayable = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const submitForm = (email,description) => {

    const userData = {
      name: name,
      description: description
    };

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    axios.post(`/api/accounts-payable`,
      userData,
      config
      ) .then(response => {
        toast.success("Account Payable added !")
      }).catch(error => console.log('Form submit error', error))
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add New List" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"List name"}</Label>
                <Input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" className="form-control" name="description" value={description} onChange={e => setDescription(e.target.value)} rows="3"/>
              </FormGroup>
              <FormGroup>
                <Button onClick={() => submitForm(name,description)} color="primary">{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddAccountsPayable;