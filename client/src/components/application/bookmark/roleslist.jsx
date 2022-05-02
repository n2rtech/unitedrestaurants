import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody,Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom'

const RolesList = (props) => {

  const params = useParams();

  const [multiSelections, setMultiSelections] = useState([]);

  const [permissionsData, setPermissionsData] = useState({});
  const [roleData, setRoleData] = useState({});
  const token = localStorage.getItem("token");
  const history = useHistory()
  
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

  const handleSubmit = event => {
    event.preventDefault();

    var array = [];

    multiSelections.map((user) => {
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
        toast.success("Permissions Assigned to role!")
        setTimeout(() => {
          history.push('/pages/roles/');
      }, 1000);
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