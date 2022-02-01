import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditJobOpenings = (props) => {

    const [jobname, setJobname] = useState()
    const [description, setDescription] = useState()
    const params = useParams();
    const token = localStorage.getItem("token");

    const onChangeJobname = (event) => {
      setJobname(event.target.value);
    };

    const onChangeDescription = (event) => {
      setDescription(event.target.value);
    };

    useEffect(() => {
      const GetData = async () => {
          const config = {
      headers: {'Authorization': 'JWT '+token }
    };
        const result = await axios('/api/jobs/'+`${params.id}`,config);
        setJobname(result.data.job_name)
        setDescription(result.data.job_description)
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
        job_name: jobname,
        job_description: description
      };
      axios.put(`/api/jobs/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Jobs updated !")
          setTimeout(() => {
            history.push('/dashboard/vendor/job-openings/');
          }, 1000);
      })
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

export default EditJobOpenings;