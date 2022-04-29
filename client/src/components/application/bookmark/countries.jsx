import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, Button, ButtonGroup } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const Countries = (props) => {


  const token = localStorage.getItem("token");
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/countries" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setCountryData(result);
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
      
            axios.delete(`/api/countries/`+`${id}`,config
            ) .then(response => {
              toast.success("Image Deleted !")
              setTimeout(() => {
                  window.location.reload();
              }, 1000);
            })
               .catch(error => console.log('Form submit error', error))

        SweetAlert.fire(
          'Deleted!',
          'Country has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Country is safe!'
        )
      }
    })
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Countries" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Row>
              <Col sm="6"></Col>
              <Col sm="6">
                <div className="pull-right">
                  <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-countries/`}>Add New</a>
                </div>
              </Col>
            </Row>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Country"}</th>
                        <th scope="col">{"Code"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                {countryData.map((country , i ) => (
                  <tr key={i}>
                    <td>{country.name}</td>
                    <td>{country.code}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-countries/${country.id}/`}>Edit</a> &nbsp;
                      <Button color="danger" onClick={() => handleDelete(country.id)}>Delete</Button>
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

export default Countries;