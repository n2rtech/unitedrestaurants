import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'


const Trash = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Trash" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Item name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Deleted Vendor name"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="danger">Restore</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Deleted Country Name"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="danger">Restore</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Deleted Pages"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="danger">Restore</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Deleted User"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="danger">Restore</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Deleted Promotions"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="danger">Restore</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Deleted item name"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="danger">Restore</Button>
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

export default Trash;