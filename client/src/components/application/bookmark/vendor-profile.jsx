import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'
import ImageUploader from 'react-images-upload';

const VendorProfile = (props) => {
  const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }


 const multiple = false
    const [options,setOptions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    },[])

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [managername, setManagerName] = useState()
    const [manageremail, setManagerEmail] = useState()
    const [phone, setPhone] = useState()
    const [fax, setFax] = useState()
    const [address, setAddress] = useState()
    const [websitelink, setWebsitelink] = useState()
    const [fblink, setFblink] = useState()
    const [instalink, setInstalink] = useState()
    const [youtubelink, setYoutubelink] = useState()

    const onChangeName = (event) => {
      setName(event.target.value);
    };

    const onChangeEmail = (event) => {
      setEmail(event.target.value);
    };

    const onChangeManagerEmail = (event) => {
      setManagerEmail(event.target.value);
    };
    const onChangeManagerName = (event) => {
      setManagerName(event.target.value);
    };
    const onChangePhone = (event) => {
      setPhone(event.target.value);
    };
    const onChangefax = (event) => {
      setFax(event.target.value);
    };

    const onChangeaddress = (event) => {
      setAddress(event.target.value);
    };

    const onChangewebsitelink = (event) => {
      setWebsitelink(event.target.value);
    };

    const onChangeFblink = (event) => {
      setFblink(event.target.value);
    };

    const onChangeInstalink = (event) => {
      setInstalink(event.target.value);
    };

    const onChangeYoutubelink = (event) => {
      setYoutubelink(event.target.value);
    };

    const [profileData, setProfileData] = useState({});
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    useEffect(() => {
      const GetData = async () => {
          const config = {
      headers: {'Authorization': 'JWT '+token }
    };
        const result = await axios('/api/profile/'+`${id}`,config);
        setProfileData(result.data);
        setName(result.data.business_name)
        setEmail(result.data.business_email)
        setManagerName(result.data.manager_name)
        setManagerEmail(result.data.manager_email)
        setPhone(result.data.phone_number)
        setFax(result.data.fax)
        setAddress(result.data.address)
        setWebsitelink(result.data.website_link)
        setFblink(result.data.facebook)
        setInstalink(result.data.instagram)
        setYoutubelink(result.data.youtube)
      };
      GetData();
    }, []);
    


  console.log(profileData);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Business Profile" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Form className="form theme-form">
          <Row>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Name"}</Label>
                <Input className="form-control" value= {name}  onChange={onChangeName} type="name" placeholder="" />
              </FormGroup>
            </Col>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Email"}</Label>
                <Input className="form-control" value={email} onChange={onChangeEmail} type="email" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Owner/Manager Name"}</Label>
                <Input className="form-control"  value={managername} onChange = {onChangeManagerName} type="name" placeholder="" />
              </FormGroup>
            </Col>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Owner/Manager Email"}</Label>
                <Input className="form-control"  value={manageremail} onChange= {onChangeManagerEmail} type="email" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xl="6" sm="12">
              <FormGroup>
               <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
               <Input className="form-control"  value={phone}  onChange={onChangePhone} type="tel" placeholder="" />
              </FormGroup>
            </Col>
            <Col xl="6" sm="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Fax"}</Label>
                <Input className="form-control"  value={fax} onChange={onChangefax} type="name" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
            <FormGroup>
               <Label htmlFor="exampleFormControlInput1">{"Address"}</Label>
               <Input type="textarea" className="form-control" value={address} onChange={onChangeaddress} rows="3"/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Please select categories that best describe your business"}</Label>
              <Typeahead
                  id="multiple-typeahead"
                  clearButton
                  defaultSelected={options.slice(0, 5)}
                  labelKey={"name"}
                  multiple
                  options={options}
                  placeholder="Select..."
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Website Link"}</Label>
              <Input className="form-control"  value={websitelink} onChange= {onChangewebsitelink}type="name" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Media Links"}</Label>
              <Input className="form-control"  value={fblink} onChange={onChangeFblink} type="name" placeholder="Facebook" />
              <div>&nbsp;</div>
              <Input className="form-control"  value={instalink} onChange={onChangeInstalink} type="name" placeholder="Instagram" />
              <div>&nbsp;</div>
              <Input className="form-control"  value={youtubelink} onChange={onChangeYoutubelink} type="name" placeholder="Youtube" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Business banner"}</Label>
              <ImageUploader
                withIcon={false}
                withPreview={true}
                label=""
                buttonText="Upload"
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                maxFileSize={1048576}
                fileSizeError=" file size is too big"
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary">{"Save"}</Button>
            </div>
          </Form>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default VendorProfile;