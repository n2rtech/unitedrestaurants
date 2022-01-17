import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import SweetAlert from 'sweetalert2'

const Trash = (props) => {

  const token = localStorage.getItem("token");

  const [trashVendorData, setTrashVendorData] = useState([]);
  const [trashUserData, setTrashUserData]= useState([]);
  const [trashCountryData, setTrashCountryData] = useState([]);
  const [trashCategoryData, setTrashCategoryData] = useState([]);
  const [trashAccountsPaybleData, setTrashAccountsPaybleData] = useState([]);
  const [trashBlogData, setTrashBlogData] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/trash" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setTrashVendorData(result.vendors);
        setTrashUserData(result.users);
        setTrashCategoryData(result.categories);
        setTrashCountryData(result.country);
        setTrashAccountsPaybleData(result.accountpayables);
        setTrashBlogData(result.blogs);
      },
      (error) => { 
      });
  }, []);

  const handleClick = (page,id) => {

    SweetAlert.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        const token   = localStorage.getItem("token");
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
        axios.get(`/api/trash/restore/${page}/${id}`,config) 
        .then(response => {
          toast.success(page+' is successfully Restored.');
          setTimeout(() => {
        window.location.reload();
      }, 1000);
        })
        .catch(error => console.log('Form submit error', error))
      }
      else {
        SweetAlert.fire(
          'Not Restored'
        )
      }
    });
  };

  const handleDelete = (page,id) => {

    SweetAlert.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        const token   = localStorage.getItem("token");
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
        axios.get(`/api/trash/delete/${page}/${id}`,config) 
        .then(response => {
          toast.success(page + 'is successfully deleted.');
          setTimeout(() => {
        window.location.reload();
      }, 1000);
        })
        .catch(error => console.log('Form submit error', error))
      }
      else {
        SweetAlert.fire(
          'Not deleted'
        )
      }
    });
  }

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
                {trashVendorData.map((vendor , i ) => (
                  <tr key={i}>
                    <td>{"Deleted Vendor"} <b>{ vendor.name }</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick('vendor',vendor.id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete('vendor',vendor.id)}>Delete Permanently</a>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  ))}
                  {trashCountryData.map((country , i ) => (
                  <tr key={i}>
                    <td>{"Deleted Country "} <b>{ country.name }</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick('country',country.id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete('country',country.id)}>Delete Permanently</a>
                    </ButtonGroup>                      
                    </td>
                  </tr>
                  ))}
                  {trashCategoryData.map((category , i ) => (
                  <tr key={i}>
                    <td>{"Deleted Category"} <b>{ category.name }</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick('category',category.id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete('category',category.id)}>Delete Permanently</a>
                    </ButtonGroup>
                    </td>
                  </tr>
                  ))}
                  {trashUserData.map((user , i ) => (
                  <tr key={i}>
                    <td>{"Deleted User"} <b>{user.name}</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick('user',user.id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete('user',user.id)}>Delete Permanently</a>
                    </ButtonGroup>
                    </td>
                  </tr>
                  ))}
                  {trashAccountsPaybleData.map((accpay , i ) => (
                  <tr key={i}>
                    <td>{"Deleted Accounts Payable "} <b>{accpay.name}</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick('accountsPayable',accpay.id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete('accountsPayable',accpay.id)}>Delete Permanently</a>
                    </ButtonGroup>
                    </td>
                  </tr>
                  ))}
                  {trashBlogData.map((blog , i ) => (
                  <tr key={i}>
                    <td>{"Deleted Blogs"} <b>{blog.name}</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick('blog',blog.id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete('blog',blog.id)}>Delete Permanently</a>
                    </ButtonGroup>
                    </td>
                  </tr>
                  ))}
                  {/*<tr>
                    <td>{"Deleted Promotions Name"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success">Restore</Button> &nbsp; 
                      <a className="btn btn-danger">Delete Permanently</a>
                    </ButtonGroup>
                    </td>
                  </tr>*/}
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