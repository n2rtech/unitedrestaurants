import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'

const RolesList = (props) => {

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