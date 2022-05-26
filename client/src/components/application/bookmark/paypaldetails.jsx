import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody,Form, FormGroup, Input, Label, Button } from 'reactstrap'
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import {toast} from 'react-toastify';

const Paypaldetails = (props) => {
  const token = localStorage.getItem("token");
  const [mode, setMode] = useState("");
  const [client_id, setClientid] = useState("");
  const [secret, setSecret] = useState("");

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/paypal" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setMode(result[0].mode);
        setClientid(result[0].client_id);
        setSecret(result[0].secret);
      },
      (error) => { 
      });
  }, []);

    const onChangeMode = (event) => {
      setMode(event.target.value);
    }

    const handleSubmit = event => {
      event.preventDefault();

      const bodyParameters = {
        mode: mode,
        secret: secret,
        client_id: client_id
      }

      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      };

      axios.put('/api/paypal/',
        bodyParameters,
        config
        ) .then(response => toast.success("Profile updated !"))
      .catch(error => console.log('Form submit error', error))

    };


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Paypal Settings" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
            <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Test Mode</Label>
                <Row className="m-l-10">
                  <Col sm="1">
                    <div className="radio radio-primary">
                      <Input id="radio2" type="radio" onChange={onChangeMode} name="radio1" value="1" data-test={mode} checked ={mode === 1} />
                      <Label for="radio2">{Option}<span className="digits"> {"Yes"}</span></Label>
                    </div>
                  </Col>
                  <Col sm="1">
                    <div className="radio radio-primary">
                      <Input id="radio1" type="radio" onChange={onChangeMode} data-test={mode} name="radio1" value="0" checked ={mode === 0} />
                      <Label for="radio1">{Option}<span className="digits"> {"No"}</span></Label>
                    </div>
                  </Col>
                  
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Client Id</Label>
                <Input className="form-control" value={client_id} onChange={e => setClientid(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Secret</Label>
                <Input className="form-control" value={secret} onChange={e => setSecret(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick={handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default Paypaldetails;