import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import ImageUploader from 'react-images-upload';
import {ExampleSelect} from '../../../constant'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddCategory = (props) => {

const history = useHistory();
const [image, setimage] = useState({ pictures: [] , pictureFiles: [] })
const [catData, setCatData] = useState([]);
const [status,setStatus] = useState(0);
const [topMenu,setTopMenu] = useState(0);

    const onDrop = (pictureFiles) => {
        setimage({
            ...image, pictureFiles
        });
    }

    const [catname,setCatname] = useState('') 
    const [parentCat,setParentCat] = useState('') 
    const handleChange = (evt) => {
      setCatname(evt.target.value)
    }

    const handleParentChange = (evt) => {
      setParentCat(evt.target.value)
    }

    const handleStatusChange = (evt) => {
      setStatus(evt.target.value)
    }

    const handleTopMenuChange = (evt) => {
      setTopMenu(evt.target.value)
    }

    useEffect(() => {

      axios.get(`/api/categories/all`)
      .then((getData) => {
        setCatData(getData.data);
      });
    
      }, []);

      const handleSubmit = event => {
        event.preventDefault();

        console.log(image.pictureFiles);
        console.log(image.pictureFiles[0]);

        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
          };

          const bodyParameters = new FormData();
          bodyParameters.set('name', catname);
          if(image.pictureFiles.length != 0) {
            bodyParameters.set('image', image.pictureFiles[0]);
          } else {
            bodyParameters.set('image', image.pictureFiles);
          } 
          bodyParameters.set('parent_id', parentCat);
          bodyParameters.set('description', catname);
          bodyParameters.set('top_menu', topMenu);
          bodyParameters.set('status', status);

          axios.post(`/api/categories/add`,
            bodyParameters,
            config
          ) .then(response => {
            toast.success("Category updated !")  
            setTimeout(() => {
              history.push('/dashboard/admin/categories/');
            }, 1000);
          })
 
             .catch(error => console.log('Form submit error', error))

      };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Category" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Form className="form theme-form">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Category Name"}</Label>
              <Input className="form-control" onChange = {handleChange} type="name" placeholder={'Enter Category Name'} />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="exampleFormControlSelect9">{ExampleSelect}</Label>
            <Input type="select" name="select" onChange={handleParentChange} className="form-control digits" defaultValue="Please select parent category">
            <option value="">{"Please select parent category"}</option>
            {catData.map((country , i ) => (
                <Fragment key={i}>
                  <option value={country.id}>{country.name}</option>
                </Fragment>
                ))}
            </Input>
            </FormGroup>
            <FormGroup>
              <Label>Status</Label>
              <Input type="select" name="select" className="form-control digits" onChange = {handleStatusChange} placeholder="Please Select">
                <option value="0" checked = {status == 0}>{"Disabled"}</option>
                <option value="1" checked = {status == 1} >{"Enabled"}</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Display in Top Menu</Label>
              <div className="radio radio-primary m-l-20">
                <Input id="no-top" type="radio" value="0" name="radio2" checked = {topMenu == 0} onChange= {handleTopMenuChange}/>
                <Label className="mb-10" for="no-top">No</Label>
              </div>
              <div className="radio radio-primary m-l-20">
                <Input id="yes-menu" type="radio" value="1" name="radio2" checked = {topMenu == 1} onChange = {handleTopMenuChange}/>
                <Label className="mb-10" for="yes-menu">Yes</Label>
              </div>
            </FormGroup>
            <FormGroup>
              <ImageUploader
                  withIcon={false}
                  withPreview={true}
                  label=""
                  buttonText="Upload Image/Icon"
                  onChange={onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                  maxFileSize={1048576}
                  fileSizeError=" file size is too big"
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary" onClick = {handleSubmit} >{"Save"}</Button>
            </div>
          </Form>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default AddCategory;