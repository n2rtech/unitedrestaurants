import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb';
import { Table, Container, Row, Col, Card, CardBody , Button } from 'reactstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import SweetAlert from 'sweetalert2';
import { useHistory } from 'react-router-dom'

const AllSaleItems = (props) => {
  const history = useHistory();
  const [salesData, setSalesData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/sale-items/list/"+localStorage.getItem('id') , config)
        .then(res => res.json())
        .then(
          (result) => {
            setSalesData(result);
          },
          (error) => {}
        )
    }, []);


    const handleDelete = (id) => {
      SweetAlert.fire({
        title: 'Are you sure?',
        text: "Once deleted, you will not be able to recover this sales item!",
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
    
            axios.delete(`/api/sale-items/delete/`+`${id}`,config
            ) .then(response => {
              toast.success("Deleted Sales Items !")  
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            })
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
      <Breadcrumb parent="Apps" title="Sale items" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/sale-items/`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Item Name"}</th>
                        <th scope="col">{"Item Description"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  { salesData.map((item,i) => (
                      <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.content}</td>
                      <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-sales-items/${item.id}/`}>Edit</a> &nbsp;
                       <Button color="danger" onClick={() => handleDelete(item.id)}>{"Delete"}</Button>
                      </td>
                    </tr>
                  ))   
                  }
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AllSaleItems;