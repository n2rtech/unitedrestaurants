import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {toast} from 'react-toastify';
import axios from 'axios'
import SweetAlert from 'sweetalert2'

const AccountsPayable = (props) => {

  const token = localStorage.getItem("token");
  const [accountsPayableData, setAccountsPayableData] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/accounts-payable" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setAccountsPayableData(result);
      },
      (error) => { 
      });
  }, []);

  const handleDelete = (id) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this Country!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
          
        const config = {
            headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
            };
      
            axios.delete(`/api/accounts-payable/`+`${id}`,config
            ) .then(response => {
              toast.success("Accounts Payable Deleted !")
              setTimeout(() => {
                  window.location.reload();
              }, 1000);
            })
               .catch(error => console.log('Form submit error', error))

        SweetAlert.fire(
          'Deleted!',
          'Accounts Payable has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Accounts Payable is safe!'
        )
      }
    })
  }

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
                {accountsPayableData.map((accPay , i ) => (
                  <tr key={i}>
                    <td>{accPay.name}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-payable/${accPay.id}`}>Edit</a> &nbsp;
                      <Button onClick={() => handleDelete(accPay.id)} color="danger">Delete</Button>
                    </ButtonGroup>                      
                    </td>
                  </tr>
                  ))}                  
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