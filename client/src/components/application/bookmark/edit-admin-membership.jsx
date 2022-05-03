import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardBody, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const EditAdminMembership =  () =>  {
    

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setDescription(newContent)
  }

  const params = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    fetch("/api/membership/"+`${params.id}` , config)
    .then(res => res.json())
    .then(
      (result) => {              
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
      },
      (error) => {
      })

  }, []);


  const submitForm = () => {

    const userData = {
      name: name,
      price: price,
      description: description
    };

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    axios.put(`/api/membership/${params.id}`,
      userData,
      config
      ) .then(response => {
        toast.success("Accounts Payable updated !");
        setTimeout(function() {
          history.push("/dashboard/admin/admin-membership-package");
        }, 1500); 
      })
      .catch(error => console.log('Form submit error', error))
    }



    return (
            <Fragment>
                <Breadcrumb parent="Editors" title="Edit Membership"/>
                <Container fluid={true}>
                    <Row>
                      <Col sm="12">
                        <Card>
                          <CardBody>
                            <Form className="form theme-form">
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Membership Name"}</Label>
                                <Input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}  type="text" />
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Price"}</Label>
                                <Input className="form-control" name="price" value={price} onChange={e => setPrice(e.target.value)}  type="number" />
                              </FormGroup>
                              <CKEditors
                                  activeclassName="p10"
                                  content={description}
                                  events={{
                                      "change": onChange
                                  }}
                              />
                              <div className="m-t-20">
                                <Button onClick={() => submitForm()} color="primary">{"Save"}</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

export default EditAdminMembership;