import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'
import ImageUploader from 'react-images-upload';
import {toast} from 'react-toastify';

const VendorProfile = (props) => {
  const [multiSelections, setMultiSelections] = useState([]);
  const multiple = false
  const [options,setOptions] = useState([])
  const token = localStorage.getItem("token");
  const vendor_id  = localStorage.getItem("id");
  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/categories/list',config);
      setOptions(result.data);
    };
    GetData();
  }, []);

  console.log('Categories',options);

  const [image, setimage] = useState({ pictures: [] , pictureFiles: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [managername, setManagerName] = useState()
    const [manageremail, setManagerEmail] = useState()
    const [phone, setPhone] = useState()
    const [fax, setFax] = useState()
    const [address, setAddress] = useState()
    const [websitelink, setWebsitelink] = useState()
    const [fblink, setFblink] =  useState()
    const [instalink, setInstalink] = useState()
    const [youtubelink, setYoutubelink] = useState()
    const [aboutbusiness, setAboutBusiness] = useState()
    const [categories, setCategory] = useState()

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

    const onChangeAboutbusiness = (event) => {
      setAboutBusiness(event.target.value);
    };

    const [profileData, setProfileData] = useState({});
    const id = localStorage.getItem("id");

    const [flagData, setFlagData] = useState({});

    useEffect(() => {
      const GetData = async () => {
          const config = {
      headers: {'Authorization': 'JWT '+token }
    };
        const result = await axios('/api/vendors/profile/'+`${id}`,config);
        setFlagData(result.data);
      };
      GetData();
    }, []);

    useEffect(() => {
      const GetData = async () => {
          const config = {
      headers: {'Authorization': 'JWT '+token }
    };

    console.log('flagdata' , flagData);

    if(flagData != '') {
      const result = await axios('/api/vendors/profile/'+`${id}`,config);
        if(result.data.categories == null){
          axios('/api/vendors/'+`${id}`).then(response => {
            axios('/api/categories/get/'+response.data.category_id).then(response1 => {
              setMultiSelections(response1.data)
            })
          })

        }else{
          const cates = await axios.post('/api/categories/getByIds/',{categories:JSON.parse(result.data.categories)});
          setMultiSelections(cates.data)
        }
        setProfileData(result.data);
        setName(result.data.business_name)
        setEmail(result.data.business_email)
        setPhone(result.data.mobile)
        setAddress(result.data.address)
        setManagerName(result.data.manager_name)
        setManagerEmail(result.data.manager_email)
        setWebsitelink(result.data.website_link)
        setFblink(result.data.facebook)
        setInstalink(result.data.instagram)
        setYoutubelink(result.data.youtube)
        setFax(result.data.fax)
        setAboutBusiness(result.data.about_business)
    } else {
      const result = await axios('/api/vendors/'+`${id}`,config);
        setProfileData(result.data);
        setName(result.data.name)
        setEmail(result.data.email)
        setPhone(result.data.mobile)
        setAddress(result.data.address)
    }
        
      };
      GetData();
    }, []);

    console.log('profiledata',profileData);


    // Update details query

    const handleSubmit = event => {
      event.preventDefault();


// Category Array
var categories_arr = [];

const categorys = multiSelections.map((user) => {
  categories_arr.indexOf(user.id) === -1 ? categories_arr.push(user.id) : console.log("This item already exists");
});
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };
          const bodyParameters = new FormData();
          bodyParameters.set('business_name', name);
          bodyParameters.set('business_email' , email);
          bodyParameters.set('manager_name',managername);
          bodyParameters.set('manager_email' , manageremail);
          bodyParameters.set('phone', phone);
          bodyParameters.set('fax', fax);
          console.log('Image', image);
          console.log('Image Length', image.pictureFiles.length);
          if(image.pictureFiles.length != 0) {
            bodyParameters.set('banner', image.pictureFiles[0]);
          } else {
            bodyParameters.set('banner', image.pictureFiles);
          } 
          bodyParameters.set('address', address);
          bodyParameters.set('about_business', aboutbusiness);
          bodyParameters.set('categories', JSON.stringify(categories_arr));
          bodyParameters.set('website_link', websitelink);
          bodyParameters.set('facebook', fblink);
          bodyParameters.set('instagram' , instalink);
          bodyParameters.set('youtube' , youtubelink);
          var profile_id = profileData.id;
        axios.put('/api/vendors/profile/'+`${id}`,
          bodyParameters,
          config
        ) .then(response => toast.success("Profile updated !"))
           .catch(error => console.log('Form submit error', error))
  
    };

    const addDefaultImage = (event) => {
      event.target.src = `${process.env.PUBLIC_URL}/assets/images/blog/user.png`;
    }

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
                <Input className="form-control" value={manageremail} onChange= {onChangeManagerEmail} type="email" placeholder="" />
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
            <Label htmlFor="exampleFormControlInput1">{"About Business"}</Label>
            <Input type="textarea" className="form-control" onChange = {onChangeAboutbusiness} value={aboutbusiness} rows="3"/>
          </FormGroup>
            <FormGroup>
               <Label htmlFor="exampleFormControlInput1">{"Address"}</Label>
               <Input type="textarea" className="form-control" value={address} onChange={onChangeaddress} rows="3"/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Please select categories that best describe your business"}</Label>
              <Typeahead
                  id="multiple-typeahead"
                  clearButton
                  labelKey={'name'}
                  multiple
                  onChange={setMultiSelections}
                  options={options}
                  selected={multiSelections}
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
            {/*<FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Business banner"}</Label>
              {(profileData.banner != 0) ? 
                <img className="img-thumbnail" src={`/api/uploads/banner/${profileData.banner}`} />
              : ''  
              }
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
            </FormGroup>*/}
            <div className="text-center">
              <Button color="primary" onClick={handleSubmit}>{"Save"}</Button>
            </div>
          </Form>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default VendorProfile;