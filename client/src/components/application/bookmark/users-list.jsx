import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'sweetalert2'
import Pagination from "react-js-pagination";

const Userslist = (props) => {

  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory()

  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);
  const [pagesCount, setPagesCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1); 
  const [size, setSize] = useState(20);
  
    useEffect(() => {
    
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token},
          params : {
        'page': 1,
        'size': size
      }

          };
  
    axios.get('/api/users/with/role' , config).then((result) => {
      setUsers(result.data.users);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    });
  
    }, []);
  
    console.log(users);

    const handlePageChange = (pageNumber) => {
    var config = {
      method: 'get',
      url: '/api/users/with/role',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
    .then(result=>{
      setUsers(result.data.users);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    });
  }

 // Delete functionality

 const handleDelete = (id) => {
  SweetAlert.fire({
    title: 'Are you sure?',
    text: "Once deleted, you will not be able to recover this user!",
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
  
        axios.delete(`/api/users/`+`${id}`,config
        ) .then(response => {
          toast.success("User Deleted !")
          setTimeout(() => {
            history.push('/dashboard/admin/users-list/');
          }, 1000);
        })
           .catch(error => console.log('Form submit error', error))
      
      SweetAlert.fire(
        'Deleted!',
        'Your User has been deleted.',
        'success'
      );
      setTimeout(() => {
                window.location.reload(false);
              }, 1000);
    }
    else {
      SweetAlert.fire(
        'User is safe!'
      )
    }
  })
}

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Users" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-user/`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Users Name"}</th>
                        <th scope="col">{"Users Email"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  {users.map((item , i) => 
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                   <td className="text-right">
                     <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-user/`+`${item.id}/`} className="btn btn-success">Edit</a> &nbsp;
                     <a className="btn btn-danger" onClick = {() => handleDelete(item.id)} >Delete</a> 
                   </td>
                  </tr>
                  )}
                </tbody>
              </Table>
              <div className="d-flex justify-content-center">
              <Pagination
              activePage={activePage}
              itemsCountPerPage={size}
              totalItemsCount={totalItemsCount}
              pageRangeDisplayed={pageRangeDisplayed}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              prevPageText="Prev"
              nextPageText="Next"
              lastPageText="Last"
              firstPageText="First"
              />
              </div>
            </div>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default Userslist;