import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddVideoGallery = (props) => {
    const [videoname, setVideoname] = useState('')
    const [youtubelink, setYoutubelink] = useState('')
    const [desc, setDesc] = useState('')

    const params = useParams();
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const onChangeVideoname = (event) => {
      setVideoname(event.target.value);
    };

    // const OnFileChange = (event) => {
    //   setYoutubelink(event.target.files[0].name);
    // };

    const onChangeDesc = (event) => {
      setDesc(event.target.value);
    };

    const OnFileChange = (event) => {
      //console.log(URL.createObjectURL(event.target.files[0]));
      setYoutubelink(event.target.files[0])

    }


    console.log(youtubelink);
  // Add Video Api
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };

        const bodyParameters = new FormData();
        bodyParameters.append('user_id', id);
        bodyParameters.append('video_name', videoname);
        bodyParameters.append('desc', desc);
        bodyParameters.append('image', youtubelink)
      

      axios.post(`/api/youtubevideo/`, 
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Video Added !")
          setTimeout(() => {
            history.push('/dashboard/vendor/add-youtube-video/');
          }, 1000);
      }).catch(error => { toast.error('Please upload files or fill title and description') })


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
                <Label htmlFor="exampleFormControlInput1">{"Video Description"}</Label>
                <Input className="form-control" value= {desc} onChange = {onChangeDesc} type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Video Upload"}</Label>
                <Input webkitdirectory  className="form-control" onChange = {OnFileChange} type="file" />
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