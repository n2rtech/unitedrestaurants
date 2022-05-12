import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody,Button, ButtonGroup } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'
import Pagination from "react-js-pagination";

const ContactEnquiries = (props) => {

  const token = localStorage.getItem("token");
  const [InquiryData, setInquiryData] = useState([]);

  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);
  const [pagesCount, setPagesCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1); 
  const [size, setSize] = useState(20);

  useEffect(() => {

    var config = {
      method: 'get',
      url: '/api/contact-inquiry',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': 1,
        'size': size
      }
    };

    axios(config)
    .then(
      (result) => { 
        setInquiryData(result.data.contactenquries);
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
      url: '/api/contact-inquiry',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
    .then(result=>{
      setInquiryData(result.data.contactenquries);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    });
  }

  const handleDelete = (id) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this Contact Inquiry!",
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
      
            axios.delete(`/api/contact-inquiry/`+`${id}`,config
            ) .then(response => {
              toast.success("Contact Inquiry Deleted !")
              setTimeout(() => {
                  window.location.reload();
              }, 1000);
            })
               .catch(error => console.log('Form submit error', error))

        SweetAlert.fire(
          'Deleted!',
          'Contact Inquiry has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Contact Inquiry is safe!'
        )
      }
    })
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Contact Enquiries" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Contact Inquiry Name"}</th>
                        <th scope="col">{"Email"}</th>
                        <th scope="col">{"phone Number"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                {InquiryData.map((Inquiry , i ) => (
                  <tr key={i}>
                    <td>{Inquiry.name}</td>
                    <td>{Inquiry.email}</td>
                    <td>{Inquiry.phone_number}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-info" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/view-contact-inquiry/${Inquiry.id}/`}>View</a> &nbsp;
                      <Button color="danger" onClick={() => handleDelete(Inquiry.id)}>Delete</Button>
                    </ButtonGroup>
                      
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

export default ContactEnquiries;