import React, { Fragment , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardBody, Form, FormGroup, Input, Label, Button} from 'reactstrap'

const EditAdminMembership =  () =>  {
    
    const [content,setContent] = useState('content') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
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
                                <Input className="form-control"  type="name" />
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Price"}</Label>
                                <Input className="form-control"  type="number" />
                              </FormGroup>
                              <CKEditors
                                  activeclassName="p10"
                                  content={content}
                                  events={{
                                      "change": onChange
                                  }}
                              />
                              <div className="m-t-20">
                                <Button color="primary">{"Save"}</Button>
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