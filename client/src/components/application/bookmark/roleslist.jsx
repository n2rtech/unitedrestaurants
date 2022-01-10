import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';

const RolesList = (props) => {
  const multiple = false

  const params = useParams();

  const [multiSelections, setMultiSelections] = useState([]);

  const [permissionsData, setPermissionsData] = useState({});
  const [roleData, setRoleData] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const GetData = async () => {
      const config = {
        headers: {'Authorization': 'JWT '+token }
      };
      const result = await axios('/api/permissions/list',config);
      setPermissionsData(result.data);

      const resultRole = await axios(`/api/roles/`+`${params.id}`,config);
      setRoleData(resultRole.data);
      setMultiSelections(resultRole.data.permissions);


    };
    GetData();
  }, []);

  const [pername, setPername] = useState('')


  const handleSubmit = event => {
    event.preventDefault();

    var array = [];

    const finalpername = multiSelections.map((user) => {
      array.indexOf(user.id) === -1 ? array.push(user.id) : console.log("This item already exists");
    });

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      permissions: array
    };
    axios.post(`/api/roles/permissions/`+`${params.id}`,
      bodyParameters,
      config
      ) .then(response => {
        console.log('Submited Successfully');
        toast.success("Permissions Assigned to role!")
      })
    .catch(error => console.log('Form submit error', error))

  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Roles List" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <div className="rolling">
            <h1>Role Name</h1>
            <h6>{roleData.role_name}</h6>
            <h2>Permissions</h2>
            <Typeahead
              id="multiple-typeahead"
              clearButton
              labelKey={"perm_name"}
              multiple
              onChange={setMultiSelections}
              options={permissionsData}
              selected={multiSelections}
              placeholder="Choose permissions..."
            />
            <div>&nbsp;</div>
            <Button color="primary" onClick = {handleSubmit}>Submit</Button>
          </div>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default RolesList;