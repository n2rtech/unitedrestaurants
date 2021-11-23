import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const JobOpenings = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Job Openings" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href="{#}" className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Job Name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Customer Support"}</td>
                    <td className="text-right">
                      <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/London/edit-job-openings`} className="btn btn-success">Edit</a> &nbsp;
                      <a href={"#"} className="btn btn-danger">Delete</a> 
                    </td>
                  </tr>
                  <tr>
                    <td>{"Hotel Manager"}</td>
                    <td className="text-right">
                      <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/London/edit-job-openings`} className="btn btn-success">Edit</a> &nbsp;
                      <a href={"#"} className="btn btn-danger">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{"House Keeping"}</td>
                    <td className="text-right">
                      <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/London/edit-job-openings`} className="btn btn-success">Edit</a> &nbsp;
                      <a href={"#"} className="btn btn-danger">Delete</a>
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

export default JobOpenings;