import React, { useState, Fragment,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, Table } from 'reactstrap';

const Search = (props) => {
  const [rolesData, setRolesData] = useState([]);

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
          };
  
          
      fetch("/api/roles" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setRolesData(result);
          },
          (error) => {
            
          }
        )
    }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Pages" title="Search Page" />
      <Container fluid={true} className="search-page">
        <Row>
          <Col sm="12">
            <Card>
              <div className="table-responsive">
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">{"#"}</th>
                            <th scope="col">{"Role Name"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col">{"Created At"}</th>
                            <th scope="col">{"Updated At"}</th>
                            <th scope="col">{"Action"}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rolesData.map((item , i ) => (
                         <tr>
                              <th scope="row">{i}</th>
                              <th scope="row">{item.role_name}</th>
                              <th scope="row">{item.role_description}</th>
                              <th scope="row">{item.createdAt}</th>
                              <th scope="row">{item.updatedAt}</th>
                              <th scope="row"><a href={`${process.env.PUBLIC_URL}/dashboard/admin/Dubai/roleslist`}><i className  ="fa fa-edit"></i></a></th>
                         </tr>
                        ))}
                    </tbody>
                </Table>
              </div>
            </Card>
            </Col>
            </Row>
            </Container>
    </Fragment>
  );
}

export default Search;