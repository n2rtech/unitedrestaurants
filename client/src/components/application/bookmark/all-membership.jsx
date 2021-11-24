import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const AllMembership = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="All Membership" />
      <Container fluid={true}>
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
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-vendor`}>Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Krishna Mishra"}</td>
                    <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-vendor`}>Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Nurul Hasan"}</td>
                    <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-vendor`}>Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Ganesh Negi"}</td>
                    <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-vendor`}>Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Mohd Danish"}</td>
                    <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-vendor`}>Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Avinash Kumar"}</td>
                    <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-vendor`}>Edit</a>
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

export default AllMembership;