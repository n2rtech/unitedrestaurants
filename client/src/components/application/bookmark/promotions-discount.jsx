import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const PromotionsDiscount = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Promotions/Discount" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Coupon Name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Yearly Discount"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-promotions-discount`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Bulk Purchase"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-promotions-discount`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Happy Hours"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-promotions-discount`}>Edit</a> &nbsp;
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

export default PromotionsDiscount;