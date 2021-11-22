import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const EditVendor = (props) => {
const animatedComponents = makeAnimated();

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Vendor" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput">{"Business Name"}</Label>
                <Input className="form-control"  type="name" placeholder="Mohd Sohrab Khan" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input className="form-control"  type="email" placeholder="sohrab@n2rtechnologies.com" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                <Input className="form-control"  type="tel" placeholder="8090895865" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Address"}</Label>
                <Input className="form-control"  type="name" placeholder="C6, Sector 7, Noida" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Country"}</Label>
                <Input className="form-control"  type="name" placeholder="United Kingdom" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Listed"}</Label>
                
              </FormGroup>
              <FormGroup>
                <Button color="primary">{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditVendor;