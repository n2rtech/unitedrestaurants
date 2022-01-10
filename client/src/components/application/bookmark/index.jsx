import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import ImageUploader from 'react-images-upload';
import {SelectSingleImageUpload,MultipleImageUpload} from '../../../constant'
import axios from 'axios';
import {toast} from 'react-toastify';

const GeneralSettings = (props) => {
  const [image, setimage] = useState({ pictures: [] })
const token = localStorage.getItem("token");
  const [siteSettingData, setSiteSettingData] = useState({});

  const [maintenanceMode, setMaintenanceMode] = useState("");
  const [siteName, setSiteName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [facebookLinks, setFacebookLinks] = useState("");
  const [twitterLinks, setTwitterLinks] = useState("");
  const [googlePlusLinks, setGooglePlusLinks] = useState("");
  const [linkedinLinks, setLinkedinLinks] = useState("");
  const [instagramLinks, setInstagramLinks] = useState("");

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/site-settings" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setSiteSettingData(result);
        setMaintenanceMode(result.maintenance_mode);
        setSiteName(result.site_name);
        setPhoneNumber(result.phone_number);
        setAddress(result.address);
        setFacebookLinks(result.facebook_links);
        setTwitterLinks(result.twitter_links);
        setGooglePlusLinks(result.google_plus_links);
        setLinkedinLinks(result.linkedin_links);
        setInstagramLinks(result.instagram_links);
      },
      (error) => { 
      });
  }, []);

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }

    const onChangeMode = (event) => {
      setMaintenanceMode(event.target.value);
    }


    const handleSubmit = event => {
      event.preventDefault();

      const bodyParameters = new FormData();
      bodyParameters.set('maintenance_mode',maintenanceMode);
      bodyParameters.set('site_name',siteName);
      bodyParameters.set('phone_number',phoneNumber);
      bodyParameters.set('address',address);
      bodyParameters.set('facebook_links',facebookLinks);
      bodyParameters.set('twitter_links',twitterLinks);
      bodyParameters.set('google_plus_links',googlePlusLinks);
      bodyParameters.set('linkedin_links',linkedinLinks);
      bodyParameters.set('instagram_links',instagramLinks);

      if(image.pictureFiles) {
        bodyParameters.set('logo', image.pictureFiles[0]);
      } else {
        bodyParameters.set('logo', image.pictureFiles);
      }

      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
      };

      axios.put('/api/site-settings/',
        bodyParameters,
        config
        ) .then(response => toast.success("Profile updated !"))
      .catch(error => console.log('Form submit error', error))

    };


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="General Settings" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
            <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Maintenance Mode</Label>
                <Row className="m-l-10">
                  <Col sm="1">
                    <div className="radio radio-primary">
                      <Input id="radio1" type="radio" onChange={onChangeMode} data-test={maintenanceMode} name="radio1" value="no" checked ={maintenanceMode == 'no'} />
                      <Label for="radio1">{Option}<span className="digits"> {"No"}</span></Label>
                    </div>
                  </Col>
                  <Col sm="1">
                    <div className="radio radio-primary">
                      <Input id="radio2" type="radio" onChange={onChangeMode} name="radio1" value="yes" data-test={maintenanceMode} checked ={maintenanceMode == 'yes'} />
                      <Label for="radio2">{Option}<span className="digits"> {"Yes"}</span></Label>
                    </div>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Site name</Label>
                <Input className="form-control" value={siteName} onChange={e => setSiteName(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Phone Number</Label>
                <Input className="form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Address</Label>
                <Input type="textarea" className="form-control" value={address} onChange={e => setAddress(e.target.value)}  rows="2"/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Social media links</Label>
                <FormGroup><Input className="form-control"  type="text" value={facebookLinks} onChange={e => setFacebookLinks(e.target.value)} placeholder="Facebook" /></FormGroup>
                <FormGroup><Input className="form-control"  type="text" value={twitterLinks} onChange={e => setTwitterLinks(e.target.value)} placeholder="Twitter" /></FormGroup>
                <FormGroup><Input className="form-control"  type="text" value={googlePlusLinks} onChange={e => setGooglePlusLinks(e.target.value)} placeholder="Google Plus" /></FormGroup>
                <FormGroup><Input className="form-control"  type="text" value={linkedinLinks} onChange={e => setLinkedinLinks(e.target.value)} placeholder="Linkedin" /></FormGroup>
                <FormGroup><Input className="form-control"  type="text" value={instagramLinks} onChange={e => setInstagramLinks(e.target.value)} placeholder="Instagram" /></FormGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">Logo</Label>
                {(siteSettingData.logo != 0) ? 
                  <img className="img-thumbnail" src={`/api/uploads/site/${siteSettingData.logo}`} />
                  : ''  
                }
                <ImageUploader
                  withIcon={false}
                  withPreview={true}
                  label=""
                  singleImage={true}
                  buttonText="Upload Image"
                  onChange={onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                  maxFileSize={1048576}
                  fileSizeError=" file size is too big"
                />
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick={handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default GeneralSettings;