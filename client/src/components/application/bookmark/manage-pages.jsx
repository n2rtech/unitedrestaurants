import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'


const ManagePages = (props) => {

  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
          };
  
          
      fetch("/api/pages" , config)
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
                  {generalData.map((item , i ) => (
                       <tr>
                       <td>{item.title}</td>
                       <td className="text-right">
                         <a color="success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-page/${item.id}`}>Edit</a>
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

export default ManagePages;