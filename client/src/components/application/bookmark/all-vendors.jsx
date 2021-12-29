import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, ButtonGroup, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const AllVendors = (props) => {
  const token = localStorage.getItem("token");
  const [vendorData, setVendorData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const [filterName, setFilterName] = useState('');  
  const [filterEmail, setFilterEmail] = useState('');  
  const [filterMobile, setFilterMobile] = useState('');  
  const [filterCountry, setFilterCountry] = useState(''); 

  const [currentPage, setCurrentPage] = useState(1); 

  const [activePage, setActivePage] = useState(0);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(1);  
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);
  const [pagesCount, setPagesCount] = useState(4);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': 1,
        'size': 4 
      }
    };

    fetch("/api/vendors" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        console.log()
        setVendorData(result); 
        // setVendorData(result.tutorials); 
        setTotalItemsCount(result.totalItems);  
        setActivePage(result.currentPage);
        setPagesCount(result.totalPages);
      },
      (error) => { 
      });
    axios.get(`/api/Countries/list`)
    .then((getData) => {
      setCountryData(getData.data);
    });
  }, []);


const handleNameChange = e => {
    const filterName = e.target.value;
    setFilterName(filterName);
  };

  const handleCountryChange = e => {
    const filterCountry = e.target.value;
    setFilterCountry(filterCountry);
  };

  const handleEmailChange = e => {
    const filterEmail = e.target.value;
    setFilterEmail(filterEmail);
  };

  const handleMobileChange = e => {
    const filterMobile = e.target.value;
    setFilterMobile(filterMobile);
  };


  const resetFilter = () => {
   setFilterName("");
   setFilterEmail("");
   setFilterMobile("");
   setFilterCountry("");
   const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
   axios.get('/api/vendors',config)
   .then(result=>{
     setVendorData(result.data); 
     // setVendorData(result.data.tutorials); 
     setTotalItemsCount(result.data.totalItems);  
     setActivePage(result.data.currentPage);
     setPagesCount(result.data.totalPages);  
   }); 
 }

  const findByFilter = () => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };

    axios(`/api/vendors?name=${filterName}&email=${filterEmail}&mobile=${filterMobile}&country=${filterCountry}`,config)
    .then(result => {
      // setVendorData(result.data.tutorials); 
      setVendorData(result.data); 
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage+1);
      setPagesCount(result.data.totalPages);
    })
    .catch(e => {
      console.log(e);
    });
  };



  const handlePreviousClick = (e) => {
    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/users/by-role/2',
      headers: { 
        'Authorization': 'JWT '+token, 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'page': activePage-1,
        'size': 4 
      }
    };

    axios(config)
    .then(function (response) {
      setVendorData(response.data.tutorials);
      setItemsCountPerPage(4);  
      setTotalItemsCount(response.data.totalItems);  
      setActivePage(response.data.currentPage);
      setPagesCount(response.data.totalPages);
    })
    .catch(function (error) {

    });
  }


  const handleNextClick = (e) => {

    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/users/by-role/2',
      headers: { 
        'Authorization': 'JWT '+token, 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'page': activePage+1,
        'size': 4 
      }
    };

    axios(config)
    .then(function (response) {
      setVendorData(response.data.tutorials);
      setItemsCountPerPage(4);  
      setTotalItemsCount(response.data.totalItems);  
      setActivePage(response.data.currentPage);
      setPagesCount(response.data.totalPages);
    })
    .catch(function (error) {

    });
  }

  const handlePageClick = (e, pageNumber) => {
    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/users/by-role/2',
      headers: { 
        'Authorization': 'JWT '+token, 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'page': pageNumber+1,
        'size': 4 
      }
    };

    axios(config)
    .then(function (response) {
      setVendorData(response.data.tutorials);
      setItemsCountPerPage(4);  
      setTotalItemsCount(response.data.totalItems);  
      setActivePage(response.data.currentPage);
      setPagesCount(response.data.totalPages);
    })
    .catch(function (error) {

    });
  }

  const handleSuspend = (id) => {
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
        axios.get('/api/vendors/suspend/'+`${id}` ,config )
        .then(response => toast.success('Vendor is successfully suspended.'))
        .catch(error => console.log('Form submit error', error))
      }
      else {
        SweetAlert.fire(
          'Not Suspended'
        )
      }
    })
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="All Vendors" />
      <Container fluid={true}>
          <Row>
            <Col sm="4">
              <Card>
                <CardBody>
                  <h3>Filter by:</h3>
                  <Form className="form theme-form">
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput">{"Name"}</Label>
                      <Input className="form-control" name="name" onChange={handleNameChange} type="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                      <Input className="form-control" name="email" onChange={handleEmailChange} type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                      <Input className="form-control" name="mobile" onChange={handleMobileChange} type="tel" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">{"Country"}</Label>
                      <Input type="select" name="country" onChange={handleCountryChange} className="form-control digits" defaultValue="">
                      <option value="">Please Select Country</option>
                      {countryData.map((country , i ) => (
                        <Fragment key={i}>
                        <option value={country.id}>{country.name}</option>
                        </Fragment>
                        ))}
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <ButtonGroup>
                        <Button onClick={findByFilter} color="primary">{"Filter"}</Button> &nbsp; 
                        <Button onClick={resetFilter} color="danger">Reset</Button>
                      </ButtonGroup>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col sm="8">
              <Card>
                <CardBody>
                <Row>
                  <Col sm="6">&nbsp;</Col>
                  <Col sm="6">
                    <div className="pull-right">
                      <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-vendor/`}>Add New</a>
                    </div>
                  </Col>
                </Row>
                  <div className="table-responsive m-t-20">
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
                            <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-vendor/${vendor.id}/`}>Edit</a> &nbsp; 
                            <a className="btn btn-danger" onClick={() => handleSuspend(vendor.id)}>Suspend</a>
                          </td>
                        </tr>
                       ))}
                      </tbody>
                    </Table>
                    {/*<Pagination>
                    <PaginationItem disabled={activePage <= 1}>
                    <PaginationLink onClick={handlePreviousClick} previous/></PaginationItem>
                    {[...Array(pagesCount)].map((page, i) => (                                    
                      <PaginationItem page={activePage} cc={(i+1)} active={(i+1) === activePage} key={i}>
                      <PaginationLink disabled={(i+1) === activePage} onClick={e => handlePageClick(e, i)}>
                      {i + 1}
                      </PaginationLink>
                      </PaginationItem>
                      ))}
                    <PaginationItem disabled={activePage === pagesCount}>
                    <PaginationLink onClick={handleNextClick} next /></PaginationItem>
                    </Pagination>*/}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Container>
    </Fragment>
  );
}

export default AllVendors;