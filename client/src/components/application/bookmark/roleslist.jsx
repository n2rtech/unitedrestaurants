import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'
import { useParams } from "react-router-dom";

const RolesList = (props) => {
const multiple = false

const params = useParams();

    const [bookingData, setBookingData] = useState({});
   useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ' }
  };
      const result = await axios('/api/permissions/list',config);
      setBookingData(result.data);
    };
    GetData();
  }, []);
console.log(bookingData);

const [pername, setPername] = useState('')
const [selectedData, setSelectedData] = useState('')

const handleChange = (selectedOptions)  => {
  //console.log(selectedOptions);
  setPername(selectedOptions);
} 

const handleSubmit = event => {
  event.preventDefault();

const finalpername = pername.map((user) => { setSelectedData(user.id)  });
console.log(pername);

  // const config = {
  //   headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
  //   };
  //   const bodyParameters = {
  //     permissions: pername
  //   };
  //   axios.post(`/api/roles/permissions/`+`${params.id}`,
  //     bodyParameters,
  //     config
  //   ) .then(response => console.log('Submiited Successfully'))
  //      .catch(error => console.log('Form submit error', error))

};

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
              labelKey={"perm_name"}
              multiple
              onChange={handleChange}
              options={bookingData}
              placeholder="Choose a state..."
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