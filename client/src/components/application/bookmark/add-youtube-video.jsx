import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'

const AddVideoGallery = (props) => {
    const [videoname, setVideoname] = useState('')
    const [youtubelink, setYoutubelink] = useState('')
    const [desc, setDesc] = useState('')
    const [url, seturl] = useState('')
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const onChangeVideoname = (event) => {
      setVideoname(event.target.value);
    };

    const onChangeDesc = (event) => {
      setDesc(event.target.value);
    };

    const OnFileChange = (event) => {
      setYoutubelink(event.target.files[0])
    }

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
      
      toast.success('Please wait for confirmation.......');
      axios.post(`/api/youtubevideo/`, 
        bodyParameters,
        config
      ) .then(response => {
        console.log(response.data);
        seturl(response.data);
      }).catch(error => { toast.error('Please upload files or fill title and description') })


  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Video" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <h4>Note</h4>
          <p>If you already have any videos of your establishment, foods, staff, etc.. please share link here.
          To upload videos of parties you organised, promotions you are offering, foods, recipes etc. please follow these steps</p>
          <p>1- Subscribe to our channel here (<a target={`_blank`} href={`https://www.youtube.com/channel/UC_jrlE1FD8fLQIzHdKTJuaQ`} >https://www.youtube.com/channel/UC_jrlE1FD8fLQIzHdKTJuaQ</a>)</p>
          <p>2- Add title, description, select video</p>
          <p>3- Upload "Upload button should not be active on first click, for one time give message please subscribe to our youtube channel</p>
          <p></p>
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

          <CardBody>
            { url == '' ? '' : <Button color="primary" href={`//${url}`} target='_blank'>Please click here to verify youtube channel</Button>}
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddVideoGallery;