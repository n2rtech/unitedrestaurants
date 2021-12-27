import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

const Userslist = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Users" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href={`${process.env.PUBLIC_URL}/dashboard/admin/add-user`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Users Name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Sergio Marquina"}</td>
                    <td className="text-right">
                     <a href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-user/`} className="btn btn-success">Edit</a> &nbsp;
                     <a className="btn btn-danger">Delete</a> 
                   </td>
                  </tr>
                  <tr>
                    <td>{"Silene Oliveira"}</td>
                    <td className="text-right">
                     <a href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-user/`} className="btn btn-success">Edit</a> &nbsp;
                     <a className="btn btn-danger">Delete</a> 
                   </td>
                  </tr>
                  <tr>
                    <td>{"Anibal Cortes"}</td>
                    <td className="text-right">
                     <a href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-user/`} className="btn btn-success">Edit</a> &nbsp;
                     <a className="btn btn-danger">Delete</a> 
                   </td>
                  </tr>
                  <tr>
                    <td>{"Raquel Murillo"}</td>
                    <td className="text-right">
                     <a href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-user/`} className="btn btn-success">Edit</a> &nbsp;
                     <a className="btn btn-danger">Delete</a> 
                   </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default Userslist;