import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody } from 'reactstrap'
import Pagination from "react-js-pagination";
import axios from 'axios'

const HotDealsVendors = (props) => {

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
      url: '/api/vendors/with-paginate/hot-deals',
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
      url: '/api/vendors/with-paginate/hot-deals',
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


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Hot Deals Vendors" />
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
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-vendor/${vendor.id}/`}>Edit</a>
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

export default HotDealsVendors;