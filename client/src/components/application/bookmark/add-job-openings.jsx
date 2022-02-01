import React, { Fragment , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddJobOpenings = (props) => {

    const [jobname, setJobname] = useState()
    const [description, setDescription] = useState()
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const history = useHistory()

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
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        job_name: jobname,
        job_description: description,
        user_id: id
      };
      axios.post(`/api/jobs/`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Jobs Added !")
        setTimeout(() => {
          history.push('/dashboard/vendor/job-openings/');
        }, 1000);
      } )
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