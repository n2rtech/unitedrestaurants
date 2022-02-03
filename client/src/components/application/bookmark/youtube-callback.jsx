import React, { Fragment, useMemo } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom'
const YoutubeCallback = (props) => {

  const token = localStorage.getItem("token");
  let query = new URLSearchParams(useLocation().search);
  const code = query.get("code")
  const history = useHistory()
  useMemo(() => {
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
      }).catch(error => console.log('Form submit error', error))

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