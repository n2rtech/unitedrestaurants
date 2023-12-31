import React, { Fragment, useEffect ,useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {toast} from 'react-toastify';
import SweetAlert from 'sweetalert2'

const Categories = (props) => {

  const [generalData, setGeneralData] = useState([]);
  const [level1Data, setLevel1Data] = useState('');
  const [level2Data, setLevel2Data] = useState('');
  const [level3Data, setlevel3Data] = useState('');
  const token = localStorage.getItem("token");
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
  
          
      fetch("/api/categories" , config)
        .then(res => res.json())
        .then(
          (result) => {



              for (const [i, element] of result.entries()) {

                result[i].parent_1 = '';
                result[i].parent_2 = '';
                result[i].parent_3 = '';
                result[i].parent_4 = '';

              var parent = element.parent_category;

              if(parent){
                result[i].parent_1 = parent.name;
                if(parent.parent_category){
                  var nextparent = parent.parent_category; 

                  result[i].parent_2 = nextparent.name;

                  if(nextparent.parent_category){
                    var nextnextparent = nextparent.parent_category;

                     result[i].parent_3 = nextnextparent.name;

                    if(nextnextparent.parent_category){
                      var nectnextnextparent = nextnextparent.parent_category;
                       result[i].parent_4 = nectnextnextparent.name;
                    }

                  }

                }
              }

            }
            
              setGeneralData(result);
          },
          (error) => {
            
          }
        )
    }, []);


    const handleRemoveCategory = (id) => {
      SweetAlert.fire({
        title: 'Are you sure?',
        text: "Once deleted, you will not be able to recover this category id!",
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
    
            axios.delete('/api/categories/'+`${id}`,
              config
            ) .then(response => console.log('Deleted Successfully'))
               .catch(error => console.log('Delete error', error))
          SweetAlert.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
        else {
          SweetAlert.fire(
            'Category is safe!'
          )
        }
      })
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Categories" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Row>
            <Col sm="6">&nbsp;</Col>
            <Col sm="6">
              <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-category`} className="btn btn-primary pull-right">{"Add New"}</a>
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
                  <td>{item.name}   

                   { (item.parent_1) ? ' > '+item.parent_1 :''}
                   { (item.parent_2) ? ' > '+item.parent_2 :''}
                   { (item.parent_3) ? ' > '+item.parent_3 :''}
                   { (item.parent_4) ? ' > '+item.parent_4 :''}
           

                  </td>
                  <td className="text-right">
                    <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-category/${item.id}`}>Edit</a> &nbsp;
                    <Button color="danger" onClick={() => handleRemoveCategory(item.id)}>{"Delete"}</Button>
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