import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody,Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddVideoGallery = (props) => {

    const [videoname, setVideoname] = useState()
    const [youtubelink, setYoutubelink] = useState()
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const [mode, setMode] = useState(0);
    const [upload, setUpload] = useState(false);
    const [linkvideo, setLinkvideo] = useState(true);
    const [loading, setLoading] = useState(false);

    const onChangeVideoname = (event) => {
      setVideoname(event.target.value);
    };

    const onChangeYoutubelink = (event) => {
      setUploadYoutubelink(event.target.value);
    };

    const onChangeMode = (event) => {
      if(event.target.value == 1) {
        setUpload(true);
        setLinkvideo(false);
      } 

      if(event.target.value == 0) { 
        setUpload(false);
        setLinkvideo(true);
      }
      setMode(event.target.value);
    }

  // Add Video Api
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        video_name: uploadvideoname,
        youtube_link: uploadyoutubelink,
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

  const [uploadvideoname, setUploadVideoname] = useState('')
  const [uploadyoutubelink, setUploadYoutubelink] = useState('')
  const [desc, setDesc] = useState('')
  const [url, seturl] = useState('')
  const uploadid = localStorage.getItem("id");

  const onChangeVideonameupload = (event) => {
    setUploadVideoname(event.target.value);
  };

  const onChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  const OnFileChange = (event) => {
    setYoutubelink(event.target.files[0])
  }

  const handleSubmitUpload = event => {
  event.preventDefault();
  setLoading(true);
  const config = {
    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };

      const bodyParameters = new FormData();
      bodyParameters.append('user_id', id);
      bodyParameters.append('video_name', videoname);
      bodyParameters.append('desc', desc);
      bodyParameters.append('image', youtubelink)
    
    axios.post(`/api/youtubevideo/save/`, 
      bodyParameters,
      config
    ) .then(response => {
        setLoading(false);
        if(response.data.msg) {
          toast.success('Uploaded Video Successfully')
          setTimeout(history.push('/dashboard/vendor/vendor-videogallery/'), 1000);
        }
    }).catch(error => { toast.error('Please upload files or fill title and description') })
};


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Video" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
             
                <FormGroup className="m-checkbox-inline custom-radio-ml">
                    <div className="radio radio-primary">
                      <Input id="no-featured" type="radio" onChange={onChangeMode} value='0' name="radio2" checked={mode == 0} />
                      <Label className="mb-0" for="no-featured"> Youtube video</Label>
                    </div>
                    <div className="radio radio-primary">
                    <Input id="yes-featured" type="radio" onChange={onChangeMode} value='1' name="radio2" checked={mode == 1}  />
                    <Label className="mb-0" for="yes-featured"> Upload video</Label>
                    </div>
                </FormGroup>

                      { loading && <img src={`${process.env.PUBLIC_URL}/api/uploads/banner/loader.gif`}/> }       

                {
                  upload && 
                  <div>
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
                        <Button  color="primary" onClick = {handleSubmitUpload}>{"Save"}</Button>
                      </FormGroup>
                    </Form>
                  
        
                  {/* <CardBody>
                    { url == '' ? '' : <Button color="primary" href={`//${url}`} target='_blank'>Please click here to verify youtube channel</Button>}
                  </CardBody> */}

                  </div>
              
                }

          {linkvideo && <div>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Video name"}</Label>
                <Input className="form-control" value= {uploadvideoname} onChange = {onChangeVideonameupload} type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Youtube link"}</Label>
                <Input className="form-control" value= {uploadyoutubelink}  onChange = {onChangeYoutubelink}  type="name" />
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
              </FormGroup>
              </div> 
          }
            </Form>
         
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddVideoGallery;