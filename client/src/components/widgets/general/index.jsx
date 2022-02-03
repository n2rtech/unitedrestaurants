import React, { useState, Fragment,useEffect } from 'react'
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Input, Label, Form, FormGroup } from 'reactstrap'
import {PermissionForm ,PermissionName,PermissionDesc, SEND_IT} from "../../../constant";
import axios from 'axios'

const General = () => {

  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/general.json`).then(res => setGeneralData(res.data.result))
  },[])

  const [pername, setPername] = useState('')
  const [perdesc, setPerdesc] = useState('')

  const handlePernameChange = event => {
    setPername(event.target.value)
  };

  const handlePerdescChange = event => {
    setPerdesc(event.target.value)
  };
  

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
      };
      const bodyParameters = {
        perm_name: pername,
        perm_description : perdesc
      };
      axios.post(`/api/permissions`,
        bodyParameters,
        config
      ) .then(response => console.log('Submiited Successfully'))
         .catch(error => console.log('Form submit error', error))

  };
  return (
    <Fragment>
      <Breadcrumb parent="Widgets" title="General" />
      <Container fluid={true}>
        <Row>  
          <Col sm="12" lg="12" xl="12" md="12" className="xl-100 box-col-12">
            <Card className="height-equal">
              <CardHeader>
                <h5>{PermissionForm}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form">
                  <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
                  <FormGroup>
                    <Label for="exampleInputName">{PermissionName}</Label>
                    <Input className="form-control" id="permission_name" name="pername" onChange={handlePernameChange} type="text" placeholder="Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleInputName">{PermissionDesc}</Label>
                    <textarea className="form-control textarea" rows="3" cols="50"  onChange={handlePerdescChange} id="permission_description" name="perdesc" placeholder="Description"></textarea>
                  </FormGroup>
                  <div className="text-sm-right">
                    <Button onClick={handleSubmit} className="btn btn-primary-gradien">{SEND_IT}</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default General
