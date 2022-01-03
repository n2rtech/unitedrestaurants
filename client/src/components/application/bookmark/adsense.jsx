import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button , ExampleSelect} from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Adsense = (props) => {

  const [details, setDetails] = useState([]);
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const history = useHistory()
  useEffect(() => {

    console.log('USER ID : ', user_id);

      const items = { ...localStorage };
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch("/api/google-adsense/"+`${items.id}`, config)
        .then(res => res.json())
        .then(
          (result) => {
            setDetails(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(details);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Google Adsense" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Publisher ID"}</Label>
                <Input className="form-control" type="text" />
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

export default Adsense;