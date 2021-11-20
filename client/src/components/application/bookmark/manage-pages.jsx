import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../../../data/data.ts';


const ManagePages = (props) => {
const animatedComponents = makeAnimated();

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Manage Pages" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Row>
            <Col sm="6">
            &nbsp;
            </Col>
            <Col sm="6">
            <a href='#' className="btn btn-primary pull-right">{"Add New"}</a>
            </Col>
          </Row>
          <div className="table-responsive">
              <Table>
                  <thead>
                      <tr>
                          <th scope="col">{"Name"}</th>
                          <th scope="col">{"Action"}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th>{"About Us"}</th>
                          <td>{"Alexander"}</td>
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

export default ManagePages;