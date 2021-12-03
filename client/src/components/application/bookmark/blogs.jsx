import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'


const Blogs = (props) => {


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Blogs" />
      <Container fluid={true}>
        <Card>
        <CardBody>
        <Row>
          <Col sm="6"></Col>
          <Col sm="6">
            <div class="pull-right">
              <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/dashboard/admin/add-blog`}>Add New</a>
            </div>
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
                     <td>Lorem Ipsum Doler</td>
                     <td className="text-right">
                       <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-blog`}>Edit</a> &nbsp;
                       <Button color="danger">Delete</Button>
                     </td>
                    </tr>
                    <tr>
                     <td>Lorem Ipsum Doler</td>
                     <td className="text-right">
                       <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-blog`}>Edit</a> &nbsp;
                       <Button color="danger">Delete</Button>
                     </td>
                    </tr>
                    <tr>
                     <td>Lorem Ipsum Doler</td>
                     <td className="text-right">
                       <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-blog`}>Edit</a> &nbsp;
                       <Button color="danger">Delete</Button>
                     </td>
                    </tr>
                    <tr>
                     <td>Lorem Ipsum Doler</td>
                     <td className="text-right">
                       <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-blog`}>Edit</a> &nbsp;
                       <Button color="danger">Delete</Button>
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

export default Blogs;