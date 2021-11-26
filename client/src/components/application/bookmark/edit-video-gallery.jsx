import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditVideoGallery = (props) => {

    const [videoname, setVideoname] = useState()
    const [youtubelink, setYoutubelink] = useState()
    const [video, setVideo] = useState()
    const params = useParams();
    const token = localStorage.getItem("token");

    const onChangeVideoname = (event) => {
      setVideoname(event.target.value);
    };

    const onChangeYoutubelink = (event) => {
      setYoutubelink(event.target.value);
    };

    useEffect(() => {
      const GetData = async () => {
          const config = {
      headers: {'Authorization': 'JWT '+token }
    };
        const result = await axios('/api/video-gallery/'+`${params.id}`,config);
        setVideo(result.data)
        setVideoname(result.data.video_name)
        setYoutubelink(result.data.youtube_link)
      };
      GetData();
    }, []);



  // Edit Api
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
      };
      const bodyParameters = {
        video_name: videoname,
        youtube_link: youtubelink
      };
      axios.put(`/api/video-gallery/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Jobs updated !")
          setTimeout(() => {
            history.push('/dashboard/vendor/vendor-videogallery/');
          }, 1000);
      }  
      
      )
         .catch(error => console.log('Form submit error', error))


  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Video" />
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

export default EditVideoGallery;