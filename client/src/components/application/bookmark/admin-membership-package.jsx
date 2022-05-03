import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody, Button, ButtonGroup } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import SweetAlert from 'sweetalert2'

const AdminMembershipPackage = (props) => {

  const token = localStorage.getItem("token");
  const [membershipData, setMembershipData] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/membership" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setMembershipData(result);
      },
      (error) => { 
      });
  }, []);



  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Membership Packages" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Membership Name"}</th>
                        <th scope="col">{"Membership Interval"}</th>
                        <th scope="col">{"Membership Price"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                {membershipData.map((membership , i ) => (
                  <tr key={i}>
                    <td>{membership.name}</td>
                    <td>{membership.interval}</td>
                    <td>{membership.price}</td>
                    <td className="text-right">
                    <ButtonGroup>
                    {
                      (membership.id == 1 || membership.id === 1) ?
                      <><a className="btn btn-success" disabled={true}>Edit</a> &nbsp;</>
                     : <><a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-admin-membership/${membership.id}`}>Edit</a> &nbsp;</>
                   }
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