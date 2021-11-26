import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddVideoGallery = (props) => {

    const [videoname, setVideoname] = useState()
    const [youtubelink, setYoutubelink] = useState()
    const [video, setVideo] = useState()
    const params = useParams();
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const onChangeVideoname = (event) => {
      setVideoname(event.target.value);
    };

    const onChangeYoutubelink = (event) => {
      setYoutubelink(event.target.value);
    };

  // Add Video Api
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        video_name: videoname,
        youtube_link: youtubelink,
        user_id : id
      };
      axios.post(`/api/video-gallery/`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Video Added !")
          setTimeout(() => {
            history.push('/dashboard/vendor/vendor-videogallery/');
          }, 1000);
      }  
      
      )
         .catch(error => console.log('Form submit error', error))


  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Video" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Video name"}</Label>
                <Input className="form-control" value= {videoname} onChange = {onChangeVideoname} type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Youtube link"}</Label>
                <Input className="form-control" value= {youtubelink}  onChange = {onChangeYoutubelink}  type="name" />
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddVideoGallery;