import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody } from 'reactstrap'

const HotDealsVendors = (props) => {

  const token = localStorage.getItem("token");
  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/vendors/hot-deals" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setVendorData(result);
      },
      (error) => { 
      });
  }, []);

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
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-vendor/${vendor.id}`}>Edit</a>
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

export default HotDealsVendors;