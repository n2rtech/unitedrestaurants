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
              options={bookingData}
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