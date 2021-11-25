import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const AccountsPayable = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Accounts Payable" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Row>
              <Col sm="6"></Col>
              <Col sm="6">
                <div className="pull-right">
                  <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/dashboard/admin/add-payable`}>Add New</a>
                </div>
              </Col>
            </Row>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"List Name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Staff payments"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Tech support payments"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Utility payments"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Other puchases"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Tax payments"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Service providers payments"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
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

export default AccountsPayable;