import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const AllVendors = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="All Vendors" />
      <Container fluid={true}>
          <Row>
            <Col sm="4">
              <Card>
                <CardBody>
                  <h3>Filter by:</h3>
                  <Form className="form theme-form">
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput">{"Name"}</Label>
                      <Input className="form-control"  type="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                      <Input className="form-control"  type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                      <Input className="form-control"  type="tel" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">{"Country"}</Label>
                      <Input type="select" name="select" className="form-control digits" defaultValue="United Kingdom">
                        <option>{"United States"}</option>
                        <option>{"Canada"}</option>
                        <option>{"Italy"}</option>
                        <option>{"Australia"}</option>
                        <option>{"Spain"}</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Button color="primary">{"Filter Results"}</Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col sm="8">
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <Table>
                      <thead>
                          <tr>
                              <th scope="col">{"Business Name"}</th>
                              <th scope="col" className="text-right">{"Action"}</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{"Mohd Sohrab Khan"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button> &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>{"Krishna Mishra"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button> &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>{"Nurul Hasan"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button> &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>{"Ganesh Negi"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button> &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>{"Mohd Danish"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button> &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>{"Avinash Kumar"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button> &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Container>
    </Fragment>
  );
}

export default AllVendors;