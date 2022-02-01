import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Table } from 'reactstrap'

const ManagePages = (props) => {

  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
  
          
      fetch("/api/pages" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
              setGeneralData(result);
          },
          (error) => {
            
          }
        )
    }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Manage Pages" />
      <Container fluid={true}>
        <Card>
        <CardBody>
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
                       <tr>
                       <td>{item.title}</td>
                       <td className="text-right">
                         <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-page/${item.id}/`}>Edit</a>
                       </td>
                   </tr>
                  ))}
                  </tbody>
              </Table>
          </div>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default ManagePages;