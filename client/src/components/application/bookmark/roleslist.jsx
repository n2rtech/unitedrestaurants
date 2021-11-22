import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'

const RolesList = (props) => {
const multiple = false
    // const [options,setOptions] = useState([])

    // useEffect(() => {
    //     axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    // },[])

      
    const [rolesData, setRolesData] = useState([]);

    useEffect(() => {
    
        const config = {
            headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
            };
    
            
        fetch("/api/permissions" , config)
          .then(res => res.json())
          .then(
            (result) => {
              
              setRolesData(result);
            },
            (error) => {
              
            }
          )
      }, []);
    
    console.log(rolesData);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Roles List" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <div className="rolling">
            <h1>Role Name</h1>
            <span>Accounts Manager</span>
            <h2>Permissions</h2>
            <Typeahead
              id="multiple-typeahead"
              clearButton
              defaultSelected={rolesData.slice(0, 5)}
              labelKey={"perm_name"}
              multiple
              options={rolesData}
              placeholder="Choose a state..."
            />
            <div>&nbsp;</div>
            <Button color="primary" >Submit</Button>
          </div>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default RolesList;