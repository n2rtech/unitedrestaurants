import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody } from 'reactstrap'
import Pagination from "react-js-pagination";
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const SuspendedVendors = (props) => {

  const token = localStorage.getItem("token");
  const [vendorData, setVendorData] = useState([]);

   const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);
  const [pagesCount, setPagesCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1); 
  const [size, setSize] = useState(20);

  useEffect(() => {

    var config = {
      method: 'get',
      url: '/api/vendors/with-paginate/suspended',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': 1,
        'size': size
      }
    };

    axios(config)
    .then(
      (result) => { 
        setVendorData(result.data.vendors);
        setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      },
      (error) => { 
      });
  }, []);


  const handlePageChange = (pageNumber) => {
    var config = {
      method: 'get',
      url: '/api/vendors/with-paginate/suspended',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
    .then(result=>{
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    });
  }

  const handleApprove = (id) => {
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
        const user_id = localStorage.getItem("id");
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
        axios.get('/api/vendors/approve/'+`${id}` ,config )
        .then(response => {
          toast.success('Vendor is successfully Approved.');
          setTimeout(function(){
          window.location.reload(false);
        }, 1500);
        })
        .catch(error => console.log('Form submit error', error))
      }
      else {
        SweetAlert.fire(
          'Not Approved'
        )
      }
    })
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Suspended Vendors" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Business Name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  {vendorData.map((vendor , i ) => (
                  <tr key={i}>
                    <td>{vendor.name}</td>
                    <td className="text-right">
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-vendor/${vendor.id}`}>Edit</a>
                      <a className="btn btn-primary" onClick={() => handleApprove(vendor.id)}>Approve</a>
                    </td>
                  </tr>
                  ))}
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

export default SuspendedVendors;