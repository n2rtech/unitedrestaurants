import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody, Button, ButtonGroup } from 'reactstrap'

const AdminMembershipPackage = (props) => {

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
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Free"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-admin-membership/`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Standard"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-admin-membership/`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>{"Premium"}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-admin-membership/`}>Edit</a> &nbsp;
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                    </td>
                  </tr>
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