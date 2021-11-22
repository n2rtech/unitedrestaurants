import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './typeahead-one';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const RolesList = (props) => {
const multiple = false
    const [options,setOptions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    },[])

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Roles List" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <div className="rolling">
            <h1>Role Name</h1>
            <span>Accounts Manager</span>
            <h2>Permissions</h2>
            <Typeahead
              id="multiple-typeahead"
              clearButton
              defaultSelected={options.slice(0, 5)}
              labelKey={"name"}
              multiple
              options={options}
              placeholder="Choose a state..."
            />
            <div>&nbsp;</div>
            <Button color="primary">Submit</Button>
          </div>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default RolesList;