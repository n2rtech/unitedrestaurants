import React, { Fragment , useState , useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody , Table} from 'reactstrap';
import {SampleCard} from '../../constant'


const  Sample = (props) => {

  const [vendorData, setVendorData] = useState([]);

useEffect(() => {

    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
        };

        
    fetch("/api/users/by-role/2" , config)
      .then(res => res.json())
      .then(
        (result) => {
          
          setVendorData(result);
        },
        (error) => {
          
        }
      )
  }, []);

console.log(vendorData);

    return (
         <Fragment>
         <Breadcrumb parent="Pages" title="Sample Page"/>
          <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Vendor List</h5>
                  </CardHeader>
                  <CardBody>
                  <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"Name"}</th>
                                            <th scope="col">{"Email"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {vendorData.map((item , i ) => (
                                         <tr>
                                              <th scope="row">{i}</th>
                                              <th scope="row">{item.name}</th>
                                              <th scope="row">{item.email}</th>
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
    );
}

export default Sample;