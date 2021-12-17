import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'
import {toast} from 'react-toastify';
import SweetAlert from 'sweetalert2'


const JobOpenings = (props) => {

  const [jobsData, setJobsData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/jobs" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setJobsData(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(token);

    // Delete functionality
    // Add New jobs opening

    const handleSubmit = event => {
      event.preventDefault();
      
  
      toast.success("Add Jobs Opening from here");
  
    };

    const handleDelete = (id) => {
      SweetAlert.fire({
        title: 'Are you sure?',
        text: "Once deleted, you will not be able to recover this coupon!",
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
    
            axios.delete(`/api/jobs/`+`${id}`,config
            ) .then(response => toast.success("Deleted Jobs !")  )
               .catch(error => console.log('Form submit error', error))
          
          SweetAlert.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
        else {
          SweetAlert.fire(
            'Coupon is safe!'
          )
        }
      })
    }
  


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
                <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/add-job-openings/`} className="btn btn-primary">Add New</a>
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
                  {jobsData.map((item , i) => (
                    <tr key={i}>
                    <td>{item.job_name}</td>
                    <td className="text-right">
                      <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/edit-job-openings/`+`${item.id}/`} className="btn btn-success">Edit</a> &nbsp;
                      <a href={"#"} className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</a> 
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

export default JobOpenings;