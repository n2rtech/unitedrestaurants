import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody,Button, ButtonGroup } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import SweetAlert from 'sweetalert2'
import Pagination from "react-js-pagination";

const Trash = (props) => {

  const token = localStorage.getItem("token");
  const [trashData, setTrashData] = useState([]);
  const [trashVendorData, setTrashVendorData] = useState([]);
  const [trashUserData, setTrashUserData]= useState([]);
  const [trashCountryData, setTrashCountryData] = useState([]);
  const [trashCategoryData, setTrashCategoryData] = useState([]);
  const [trashAccountsPaybleData, setTrashAccountsPaybleData] = useState([]);
  const [trashBlogData, setTrashBlogData] = useState([]);

  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(10);
  const [pagesCount, setPagesCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1); 
  const [size, setSize] = useState(25);

  useEffect(() => {

    var config = {
      method: 'get',
      url: '/api/trash/get-all/pagination',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': 1,
        'size': size
      }
    };

    axios(config)
    .then(
      (result) => { 
        setTrashData(result.data.vendors);
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
      url: '/api/trash/get-all/pagination',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
    .then(result=>{
      setTrashData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    });
  }

  const handleClick = (page,id) => {

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
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
        axios.get(`/api/trash/restore/${page}/${id}`,config) 
        .then(response => {
          toast.success(page+' is successfully Restored.');
          setTimeout(() => {
        window.location.reload();
      }, 1000);
        })
        .catch(error => console.log('Form submit error', error))
      }
      else {
        SweetAlert.fire(
          'Not Restored'
        )
      }
    });
  };

  const handleDelete = (page,id) => {

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
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
        axios.get(`/api/trash/delete/${page}/${id}`,config) 
        .then(response => {
          toast.success(page + 'is successfully deleted.');
          setTimeout(() => {
        window.location.reload();
      }, 1000);
        })
        .catch(error => console.log('Form submit error', error))
      }
      else {
        SweetAlert.fire(
          'Not deleted'
        )
      }
    });
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Trash" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Item name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                {trashData.map((vendor , i ) => (
                  <tr key={i}>
                    <td>{"Deleted"} {vendor.table_name} <b>{ vendor.name }</b></td>
                    <td className="text-right">
                    <ButtonGroup>
                      <Button color="success" onClick={() => handleClick(vendor.type,vendor.table_id)}>Restore</Button> &nbsp; 
                      <a className="btn btn-danger" onClick={() => handleDelete(vendor.type,vendor.table_id)}>Delete Permanently</a>
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

export default Trash;