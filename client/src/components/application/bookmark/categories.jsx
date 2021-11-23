import React, { Fragment, useEffect ,useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const Categories = (props) => {

  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
          };
  
          
      fetch("/api/categories" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
              setGeneralData(result);
          },
          (error) => {
            
          }
        )
    }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Categories" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Row>
            <Col sm="6">&nbsp;</Col>
            <Col sm="6">
              <a href='#' className="btn btn-primary pull-right">{"Add New"}</a>
            </Col>
          </Row>
          <div className="table-responsive m-t-20">
            <Table>
              <thead>
                  <tr>
                      <th scope="col">{"Name"}</th>
                      <th scope="col" className="text-right">{"Action"}</th>
                  </tr>
              </thead>
              <tbody>
              {generalData.map((item , i ) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td className="text-right">
                    <a color="success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-category/${item.id}`}>Edit</a> &nbsp;
                    <Button color="danger">{"Delete"}</Button>
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

export default Categories;