import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import ImageUploader from 'react-images-upload';
import {SelectSingleImageUpload,MultipleImageUpload,ExampleSelect} from '../../../constant'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'


const AddCategory = (props) => {

const params = useParams();

const [image, setimage] = useState({ pictures: [] })
const [catData, setCatData] = useState([]);

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
          bodyParameters.set('image', image.pictureFiles[0]);
          bodyParameters.set('parent_id', parentCat);
          bodyParameters.set('description', catname);

          axios.post(`/api/categories/add`,
            bodyParameters,
            config
          ) .then(response => toast.success("Category updated !")  )
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