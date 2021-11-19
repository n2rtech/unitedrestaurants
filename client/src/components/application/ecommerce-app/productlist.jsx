import React, { Fragment , useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,Button,CardBody,Table} from 'reactstrap'

const Productlist = () => {

const [generalData, setGeneralData] = useState([]);

useEffect(() => {

    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
        };

        
    fetch("/api/permissions" , config)
      .then(res => res.json())
      .then(
        (result) => {
          
            setGeneralData(result);
        },
        (error) => {
          
        }
      )
  }, []);

  const handleDelete = () => {
        
    if (window.confirm(`Are you sure you want to delete:`)) {
        
    }
  };

  const handleEdit = () => {
      
        
    // const config = {
    //     headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    //     };
    //     const bodyParameters = {
    //       perm_name: pername,
    //       perm_description : perdesc
    //     };
    //     axios.put(`/api/permissions`,
    //       bodyParameters,
    //       config
    //     ) .then(response => console.log('Submiited Successfully'))
    //        .catch(error => console.log('Form submit error', error))
  };


console.log(generalData);

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
                                         <tr>
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


