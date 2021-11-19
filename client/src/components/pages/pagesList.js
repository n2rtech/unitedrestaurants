import React, { Fragment , useState , useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table,Button } from "reactstrap";
import { BasicTable,InverseTable,InverseTablePrimaryBackground,HoverableRows,ContextualClasses,TextBackgroundUtilities,TableHeadOptions,StripedRow,StripedRowInverseTable,Caption,ResponsiveTables,BreckpointSpecific } from "../../constant";
import axios from 'axios';  
import { useHistory, useLocation } from 'react-router-dom'


const PagesList = () => {

  const [pagesData, setGeneralData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

const getData = () => {
  const config = {
    headers: {'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ' }
  };
  axios.get(`/api/pages`,config)
  .then((getData) => {
    setGeneralData(getData.data);
  })
}

const onDelete = (id) => {  
  const config = {
    headers: {'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ' }
  };
  axios.delete('/api/pages/'+ id,config)  
  .then(() => {
    getData();
  }) 
};  


    return (
        <Fragment>
            <Breadcrumb parent="Tables" title="Basic Tables"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{BasicTable}</h5>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"Page Title"}</th>
                                            <th scope="col">{"Page Content"}</th>
                                            <th scope="col">{"Country"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {pagesData.map((page , i ) => (
                                        <tr key={i}>
                                            <th scope="row">{i+1}</th>
                                            <td>{page.title}</td>
                                            <td>{page.body}</td>
                                            <td><Button color="primary">Edit</Button><Button onClick={() => onDelete(page.id)} color="success">Delete</Button></td>
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
        };
        
export default PagesList;
