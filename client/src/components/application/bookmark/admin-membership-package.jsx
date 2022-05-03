import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody, Button, ButtonGroup } from 'reactstrap'
import axios from 'axios'
const AdminMembershipPackage = (props) => {

  const token = localStorage.getItem("token");
  const [membsershipPackage, setMembsershipPackage] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/membership" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        console.log()
        setMembsershipPackage(result);  
      },
      (error) => { 
      });
  }, []);



  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Membership Package" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Membership Name"}</th>
                        <th scope="col">{"Description"}</th>
                        <th scope="col">{"Interval"}</th>
                        <th scope="col">{"Price"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  {membsershipPackage && membsershipPackage.map((item , i) => (
                      <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.interval}</td>
                      <td>{item.price}</td>
                      <td className="text-right">
                      <ButtonGroup>
                        <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-admin-membership/${item.id}/`}>Edit</a> &nbsp;
                        {/* <Button color="danger">Delete</Button> */}
                      </ButtonGroup>
                        
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

export default AdminMembershipPackage;