import React, { Fragment, useEffect ,useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, Button } from 'reactstrap'
import axios from 'axios'
import SweetAlert from 'sweetalert2'
import Pagination from "react-js-pagination";

const Categories = (props) => {

  const [generalData, setGeneralData] = useState([]);
  const token = localStorage.getItem("token");

  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(1);  
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);
  const [pagesCount, setPagesCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1); 
  const [size, setSize] = useState(20);

  useEffect(() => {

    var config = {
      method: 'get',
      url: '/api/categories/with-paginate/',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': 1,
        'size': size
      }
    };

    axios(config)
    .then(result=>{
      let newResult = result.data.categories;

      for (const [i, element] of newResult.entries()) {

        newResult[i].parent_1 = '';
        newResult[i].parent_2 = '';
        newResult[i].parent_3 = '';
        newResult[i].parent_4 = '';

        var parent = element.parent_category;

        if(parent){
          newResult[i].parent_1 = parent.name;
          if(parent.parent_category){
            var nextparent = parent.parent_category; 

            newResult[i].parent_2 = nextparent.name;

            if(nextparent.parent_category){
              var nextnextparent = nextparent.parent_category;

              newResult[i].parent_3 = nextnextparent.name;

              if(nextnextparent.parent_category){
                var nectnextnextparent = nextnextparent.parent_category;
                newResult[i].parent_4 = nectnextnextparent.name;
              }

            }

          }
        }

      }

      setGeneralData(newResult);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    },
    (error) => {

    }
    )
  }, []);


  const handlePageChange = (pageNumber) => {
    var config = {
      method: 'get',
      url: '/api/categories/with-paginate/',
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      params : {
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
    .then(result=>{

      let newResult = result.data.categories;

      for (const [i, element] of newResult.entries()) {

        newResult[i].parent_1 = '';
        newResult[i].parent_2 = '';
        newResult[i].parent_3 = '';
        newResult[i].parent_4 = '';

        var parent = element.parent_category;

        if(parent){
          newResult[i].parent_1 = parent.name;
          if(parent.parent_category){
            var nextparent = parent.parent_category; 

            newResult[i].parent_2 = nextparent.name;

            if(nextparent.parent_category){
              var nextnextparent = nextparent.parent_category;

              newResult[i].parent_3 = nextnextparent.name;

              if(nextnextparent.parent_category){
                var nectnextnextparent = nextnextparent.parent_category;
                newResult[i].parent_4 = nectnextnextparent.name;
              }

            }

          }
        }

      }


      setGeneralData(newResult);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    });
  }


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
            'Your Category has been deleted.',
            'success'
          );
          setTimeout(() => {
                window.location.reload(false);
              }, 1000);
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
              <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-category/`} className="btn btn-primary pull-right">{"Add New"}</a>
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
                  <td>   

                    { 
                      (item.parent_1) ? ((item.parent_2) ? ((item.parent_3) ? ((item.parent_4) ? 
                      item.parent_4+' > '+item.parent_3+' > '+item.parent_2+' > '+item.parent_1+' > '+item.name : 
                      item.parent_3+' > '+item.parent_2+' > '+item.parent_1+' > '+item.name
                      ) :
                       item.parent_2+' > '+item.parent_1+' > '+item.name ) : 
                       item.parent_1+' > '+item.name) :
                      item.name
                    }

                  </td>
                  <td className="text-right">
                    <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-category/${item.id}/`}>Edit</a> &nbsp;
                    <Button color="danger" onClick={() => handleRemoveCategory(item.id)}>{"Delete"}</Button>
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

export default Categories;