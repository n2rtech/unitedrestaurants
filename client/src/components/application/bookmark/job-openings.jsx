import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'
import {toast} from 'react-toastify';

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

    const handleDelete = (id) => {
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
        };

        axios.delete(`/api/jobs/`+`${id}`,config
        ) .then(response => toast.success("Deleted Jobs !")  )
           .catch(error => console.log('Form submit error', error))
      
    }

    // Add New jobs opening

    const handleSubmit = event => {
      event.preventDefault();
      
  
      toast.success("Add Jobs Opening from here");
  
    };


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
                <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/add-job-openings`} className="btn btn-primary">Add New</a>
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
                      <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/edit-job-openings/`+`${item.id}`} className="btn btn-success">Edit</a> &nbsp;
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