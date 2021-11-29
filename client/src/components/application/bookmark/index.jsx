import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import ImageUploader from 'react-images-upload';
import {SelectSingleImageUpload,MultipleImageUpload} from '../../../constant'


const GeneralSettings = (props) => {
  const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="General Settings" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
            <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Maintenance Mode</Label>
                <Row className="m-l-10">
                  <Col sm="1">
                    <div className="radio radio-primary">
                      <Input id="radio1" type="radio" name="radio1" value="option1" defaultChecked />
                      <Label for="radio1">{Option}<span className="digits"> {"No"}</span></Label>
                    </div>
                  </Col>
                  <Col sm="1">
                    <div className="radio radio-primary">
                      <Input id="radio1" type="radio" name="radio1" value="option1" />
                      <Label for="radio1">{Option}<span className="digits"> {"Yes"}</span></Label>
                    </div>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Site name</Label>
                <Input className="form-control"  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Phone Number</Label>
                <Input className="form-control"  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Address</Label>
                <Input type="textarea" className="form-control"  rows="2"/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Social media links</Label>
                <FormGroup><Input className="form-control"  type="name" placeholder="Facebook" /></FormGroup>
                <FormGroup><Input className="form-control"  type="name" placeholder="Twitter" /></FormGroup>
                <FormGroup><Input className="form-control"  type="name" placeholder="Google Plus" /></FormGroup>
                <FormGroup><Input className="form-control"  type="name" placeholder="Linkedin" /></FormGroup>
                <FormGroup><Input className="form-control"  type="name" placeholder="Instagram" /></FormGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Logo</Label>
                <ImageUploader
                  withIcon={false}
                  withPreview={true}
                  label=""
                  singleImage={true}
                  buttonText="Upload Image"
                  onChange={onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                  maxFileSize={1048576}
                  fileSizeError=" file size is too big"
                />
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

export default GeneralSettings;