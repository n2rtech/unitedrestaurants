import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'


const Categories = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Categories" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Row>
            <Col sm="6">&nbsp;</Col>
            <Col sm="6">
              <a href='#' className="btn btn-primary pull-right">{"Add New"}</a>
            </Col>
          </Row>
          <div className="table-responsive m-t-20">
            <Table>
              <thead>
                  <tr>
                      <th scope="col">{"Name"}</th>
                      <th scope="col" className="text-right">{"Action"}</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Restaurants"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Food Market"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Beer & Alcohol"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Services"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Suppliers"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Buy & Sell"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Jobs"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Videos"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
                  </td>
                </tr>
                <tr>
                  <td>{"Others"}</td>
                  <td className="text-right">
                    <Button color="success">{"Edit"}</Button> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
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

export default Categories;