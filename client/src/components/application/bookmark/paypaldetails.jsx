import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody,Form, FormGroup, Input, Label, Button } from 'reactstrap'
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import {toast} from 'react-toastify';

const Paypaldetails = (props) => {
  const token = localStorage.getItem("token");
  const [mode, setMode] = useState("");
  const [testclient_id, setTestClientid] = useState("");
  const [testsecret, setTestSecret] = useState("");
  const [liveclient_id, setLiveClientid] = useState("");
  const [livesecret, setLiveSecret] = useState("");

  const [testMode, setTestMode] = useState(true);
  const [liveMode, setLiveMode] = useState(false);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/paypal" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setMode(result[0].mode);
        setTestClientid(result[0].testclient_id);
        setTestSecret(result[0].testsecret);
        setLiveClientid(result[0].liveclient_id);
        setLiveSecret(result[0].livesecret);
        if(result[0].mode == 0) {
          setTestMode(false);
          setLiveMode(true);
        } else {
          setTestMode(true);
          setLiveMode(false);
        }
      },
      (error) => { 
      });
  }, []);

    const onChangeMode = (event) => {
      setMode(event.target.value);
      if(event.target.value == 0) {
        setTestMode(false);
        setLiveMode(true);
      } else {
        setTestMode(true);
        setLiveMode(false);
      }
    }

    const handleSubmit = event => {
      event.preventDefault();

      const bodyParameters = {
        mode: mode,
        testsecret: testsecret,
        testclient_id: testclient_id,
        livesecret: livesecret,
        liveclient_id: liveclient_id
      }

      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      };

      axios.put('/api/paypal/',
        bodyParameters,
        config
        ) .then(response => toast.success("Paypal updated !"))
      .catch(error => console.log('Form submit error', error))

    };


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Paypal Settings" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <Label htmlFor="exampleFormControlInput1">Test Mode</Label>
                <FormGroup className="m-checkbox-inline custom-radio-ml">
                    <div className="radio radio-primary">
                      <Input id="no-featured" type="radio" onChange={onChangeMode} value='0' name="radio2" checked={mode==0} />
                      <Label className="mb-0" for="no-featured">No</Label>
                    </div>
                    <div className="radio radio-primary">
                    <Input id="yes-featured" type="radio" onChange={onChangeMode} value='1' name="radio2" checked={mode==1}  />
                    <Label className="mb-0" for="yes-featured">Yes</Label>
                    </div>
                </FormGroup>
                {testMode && 
                    <> 
                      <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">Test Client Id</Label>
                      <Input className="form-control" value={testclient_id} onChange={e => setTestClientid(e.target.value)}  type="text" />
                      </FormGroup>
                      <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">Test Secret</Label>
                      <Input className="form-control" value={testsecret} onChange={e => setTestSecret(e.target.value)}  type="text" />
                      </FormGroup>
                      <FormGroup>
                      <Button  color="primary" onClick={handleSubmit}>{"Save"}</Button>
                      </FormGroup>
                    </> 
                 }

                {liveMode && 
                    <> 
                      <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">Live Client Id</Label>
                      <Input className="form-control" value={liveclient_id} onChange={e => setLiveClientid(e.target.value)}  type="text" />
                      </FormGroup>
                      <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">Live Secret</Label>
                      <Input className="form-control" value={livesecret} onChange={e => setLiveSecret(e.target.value)}  type="text" />
                      </FormGroup>
                      <FormGroup>
                      <Button  color="primary" onClick={handleSubmit}>{"Save"}</Button>
                      </FormGroup>
                    </> 
                 }

            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default Paypaldetails;