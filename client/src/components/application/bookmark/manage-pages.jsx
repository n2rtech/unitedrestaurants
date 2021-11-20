import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
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
                          <td>{"About Us"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Privacy Policy"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Return Policy"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Terms of Service"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Contact Us"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Customer Service"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Technical Support"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
                          </td>
                      </tr>
                      <tr>
                          <td>{"Sales"}</td>
                          <td className="text-right">
                            <Button color="success">{"Edit"}</Button>
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

export default ManagePages;