import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import DownloadLink from "react-download-link";
import {toast} from 'react-toastify';
import moment from 'moment';
const Backup = (props) => {

  const [msg, setMessagefile] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/backup/sqlfilepath", config)
        .then(res => res.json())
        .then(
          (result) => {
            setMessagefile(result.message);
          },
          (error) => {
            
          }
        )
    }, []);
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
    const  getDataFromURL = (url) => new Promise((resolve, reject) => {
      setTimeout(() => {
          fetch(url , config)
              .then(response => response.text())
              .then(data => {
                console.log("DATA" ,data);
                  resolve(data)
              });
      });
       }, 2000);


    const handlebackup = () => {
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };
 
      fetch("/api/backup/", config)
        .then(res => res.json())
        .then(
          (result) => {
            toast.success("Downloaded Database backup Successfully!");
            window.location.reload(false);
          },
          (error) => {
            
          }
        )
    }   


  const [records, setRecords] = useState([]);
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/backup/sqlrecords", config)
        .then(res => res.json())
        .then(
          (result) => {
            setRecords(result[0].createdAt);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log("Records" , records);


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Backup" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row>
            <Col sm="6">&nbsp;</Col>
            <Col sm="6">
              <div class="pull-right">
                <Button color="primary" onClick = {handlebackup}>Backup Database</Button>
              </div>
            </Col>
          </Row>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Name"}</th>
                        <th scope="col">{"Date Added"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"united-restaurants.sql"}</td>
                    <td>{moment(records).format("DD-MM-YYYY")}</td>
                    <td className="text-right">
                      <DownloadLink
                          label="Download"
                          filename="united-restaurants.sql"
                          exportFile={() => Promise.resolve(getDataFromURL ('/api/backup/sqlfile/'))}
                      />
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

export default Backup;