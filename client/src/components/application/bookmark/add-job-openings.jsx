import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'

const AddJobOpenings = (props) => {

    const [jobname, setJobname] = useState()
    const [description, setDescription] = useState()
    const params = useParams();
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const onChangeJobname = (event) => {
      setJobname(event.target.value);
    };

    const onChangeDescription = (event) => {
      setDescription(event.target.value);
    };

  // Edit Api

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
      };
      const bodyParameters = {
        job_name: jobname,
        job_description: description,
        user_id: id
      };
      axios.post(`/api/jobs/`,
        bodyParameters,
        config
      ) .then(response => toast.success("Jobs Added !")  )
         .catch(error => console.log('Form submit error', error))

  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Job Details" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Job name"}</Label>
                <Input className="form-control" value = {jobname}  onChange = {onChangeJobname} type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" className="form-control" value = {description} onChange = {onChangeDescription} rows="3"/>
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddJobOpenings;