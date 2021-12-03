import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {CustomRadio,InlineCheckbox,CustomCheckbox, PrimaryState,BrandState,SuccessState,AnimatedCheckboxButtons,SquareCheckbox, Default,Disabled,Checked,RadioStates,CheckboxStates,SolidCheckbox,AnimatedRadioButtons,Option} from "../../../constant";
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './typeahead-one';
import axios from 'axios'
import { BasicDemo,MultipleSelections,CustomSelections,Remote } from "../../../constant";


const EditVendor = (props) => {

const multiple = false
    const [options,setOptions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    },[])

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Vendor" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <h5>Show in Hot deals</h5>
              <FormGroup className="m-checkbox-inline custom-radio-ml">
                <div className="radio radio-primary">
                  <Input id="radioinline2" type="radio" name="radio1" value="option1" defaultChecked />
                  <Label className="mb-0" for="radioinline1">No</Label>
                </div>
                <div className="radio radio-primary">
                  <Input id="radioinline2" type="radio" name="radio1" value="option1"  />
                  <Label className="mb-0" for="radioinline2">Yes</Label>
                </div>
              </FormGroup>
              <h5 className="m-t-30">Show in Featured Business</h5>
              <FormGroup className="m-checkbox-inline custom-radio-ml">
                <div className="radio radio-primary">
                  <Input id="radioinline1" type="radio" name="radio2" value="option1" defaultChecked />
                  <Label className="mb-0" for="radioinline1">No</Label>
                </div>
                <div className="radio radio-primary">
                  <Input id="radioinline1" type="radio" name="radio2" value="option1"  />
                  <Label className="mb-0" for="radioinline2">Yes</Label>
                </div>
              </FormGroup>
              <div>&nbsp;</div>
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
                <Typeahead
                  id="multiple-typeahead"
                  clearButton
                  defaultSelected={options.slice(0, 5)}
                  labelKey={"name"}
                  multiple
                  options={options}
                  placeholder="Choose categories..."
                />
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