import React, { Fragment , useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,Button,CardBody,Table} from 'reactstrap'
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
  
 var axios = require('axios');
    var qs = require('qs');

const Productlist = () => {

const [generalData, setGeneralData] = useState([]);

const [currentPage, setCurrentPage] = useState(1);

  const [activePage, setActivePage] = useState(0);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(1);  
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);
  const [pagesCount, setPagesCount] = useState(4);


useEffect(() => {

    var config = {
        method: 'get',
        url: '/api/permissions',
        headers: { 
            'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ', 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params : {
      'page': 1,
        'size': 4 
    }
    };

    axios(config)
    .then(function (response) {
        setGeneralData(response.data.tutorials);
        setItemsCountPerPage(4);  
        setTotalItemsCount(response.data.totalItems);  
        setActivePage(response.data.currentPage);
        setPagesCount(response.data.totalPages);
    })
    .catch(function (error) {
        
    });

}, []);


const handlePreviousClick = (e) => {
e.preventDefault();
    var config = {
        method: 'get',
        url: '/api/permissions',
        headers: { 
            'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ', 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params : {
      'page': activePage-1,
        'size': 4 
    }
    };

    axios(config)
    .then(function (response) {
        setGeneralData(response.data.tutorials);
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
        url: '/api/permissions',
        headers: { 
            'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ', 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params : {
      'page': activePage+1,
        'size': 4 
    }
    };

    axios(config)
    .then(function (response) {
        setGeneralData(response.data.tutorials);
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
        url: '/api/permissions',
        headers: { 
            'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ', 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params : {
      'page': pageNumber+1,
        'size': 4 
    }
    };

    axios(config)
    .then(function (response) {
        setGeneralData(response.data.tutorials);
        setItemsCountPerPage(4);  
        setTotalItemsCount(response.data.totalItems);  
        setActivePage(response.data.currentPage);
        setPagesCount(response.data.totalPages);
    })
    .catch(function (error) {
        
    });
}


  const handleDelete = () => {
        
    if (window.confirm(`Are you sure you want to delete:`)) {
        
    }
  };

  const handleEdit = () => {
      
        
  };

    return (
          <Fragment>
          <Breadcrumb parent="ECommerce" title="Product List"/>
          <Container fluid={true}>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                        <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Created at"}</th>
                                            <th scope="col">{"Updated at"}</th>
                                            <th scope="col">{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {generalData.map((item , i ) => (
                                         <tr key={i}>
                                              <th scope="row">{i}</th>
                                              <th scope="row">{item.perm_name}</th>
                                              <th scope="row">{item.perm_description}</th>
                                              <th scope="row">{item.createdAt}</th>
                                              <th scope="row">{item.updatedAt}</th>
                                              <th scope="row">
                                                    <Button color="primary" size="sm" onClick={handleEdit}><i className="fa fa-pencil"></i>Edit</Button>
                                                    <Button color="danger" size="sm" onClick={handleDelete}><i className="fa fa-trash"></i> Delete</Button>
                                              </th>
                                         </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Pagination>
                                <PaginationItem disabled={activePage <= 1}>
                                <PaginationLink onClick={handlePreviousClick} previous/></PaginationItem>
                                {[...Array(pagesCount)].map((page, i) => (                                    
                                    <PaginationItem page={activePage} cc={(i+1)} active={(i+1) === activePage} key={i}>
                                    <PaginationLink onClick={e => handlePageClick(e, i)}>
                                    {i + 1}
                                    </PaginationLink>
                                    </PaginationItem>
                                    ))}
                                <PaginationItem disabled={activePage === pagesCount}>
                                <PaginationLink onClick={handleNextClick} next /></PaginationItem>
                                </Pagination>

                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
           </Container>
           </Fragment>
    )

  }

export default Productlist


