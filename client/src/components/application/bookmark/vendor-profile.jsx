import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './typeahead-one';
import axios from 'axios'
import { BasicDemo,MultipleSelections,CustomSelections,Remote } from "../../../constant";



const VendorProfile = (props) => {
 const multiple = false
    const [options,setOptions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    },[])

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Category" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Form className="form theme-form">
          <Row>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Name"}</Label>
                <Input className="form-control"  type="name" placeholder="" />
              </FormGroup>
            </Col>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Email"}</Label>
                <Input className="form-control"  type="email" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Owner/Manager Name"}</Label>
                <Input className="form-control"  type="name" placeholder="" />
              </FormGroup>
            </Col>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Owner/Manager Email"}</Label>
                <Input className="form-control"  type="email" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xl="6" sm="12">
              <FormGroup>
               <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
               <Input className="form-control"  type="tel" placeholder="" />
              </FormGroup>
            </Col>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Fax"}</Label>
                <Input className="form-control"  type="name" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
            <FormGroup>
               <Label htmlFor="exampleFormControlInput1">{"Address"}</Label>
               <Input type="textarea" className="form-control"  rows="3"/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Please select categories that best describe your business"}</Label>
              <Typeahead
                  id="multiple-typeahead"
                  clearButton
                  defaultSelected={options.slice(0, 5)}
                  labelKey={"name"}
                  multiple
                  options={options}
                  placeholder="Select..."
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Website Link"}</Label>
              <Input className="form-control"  type="name" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Media Links"}</Label>
              <Input className="form-control"  type="name" placeholder="Facebook" />
              <div>&nbsp;</div>
              <Input className="form-control"  type="name" placeholder="Instagram" />
              <div>&nbsp;</div>
              <Input className="form-control"  type="name" placeholder="Youtube" />
            </FormGroup>
            <div className="text-center">
              <Button color="primary">{"Save"}</Button>
            </div>
          </Form>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default VendorProfile;