import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom'
const YoutubeCallback = (props) => {

  const token = localStorage.getItem("token");
  const [vendorData, setVendorData] = useState([]);
  let query = new URLSearchParams(useLocation().search);
  const code = query.get("code")
  const history = useHistory()
  useEffect(() => {
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      code: code
    };
    axios.post(`/api/youtubevideo/oauth2callback/`,
      bodyParameters,
      config
      ) .then(response => {
        console.log('Submited Successfully');
        toast.success("video Uploaded Successfully!")
        history.push('/dashboard/vendor/vendor-youtube/');
      })
    .catch(error => console.log('Form submit error', error))

  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Hot Deals Vendors" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive">
              Please wait......you will be redirected....
            </div>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default YoutubeCallback;