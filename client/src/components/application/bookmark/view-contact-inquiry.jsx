import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import { useParams } from "react-router-dom";

const ViewContactInquiry = (props) => {

  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    fetch("/api/contact-inquiry/"+`${params.id}` , config)
    .then(res => res.json())
    .then(
      (result) => {              
        setData(result);
      },
      (error) => {
      })

  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="View Contact Inquiry" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Name"}</Label>
                <Input readOnly className="form-control" name="name" value={data.name}  type="text" />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input readOnly className="form-control" name="code" value={data.email} type="text" />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                <Input readOnly className="form-control" name="code" value={data.phone_number} type="text" />
              </FormGroup>

              <FormGroup>
              <Label htmlFor="exampleFormControlInput1">Message</Label>
              <Input readOnly className="form-control" type="textarea" rows="5" cols="5" name="message" id="exampleText" value={data.message} />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default ViewContactInquiry;