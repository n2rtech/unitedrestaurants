import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import ImageUploader from 'react-images-upload';
import {SelectSingleImageUpload,MultipleImageUpload} from '../../../constant'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'


const EditCategory = (props) => {

const params = useParams();

const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureDataURLs
        });
    }

    const [catname,setCatname] = useState('') 
    const handleChange = (evt) => {
      setCatname(evt.target.value)
    }

    console.log(image.pictureDataURLs);

    useEffect(() => {
    
        const config = {
            headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
            };
       
        fetch("/api/categories/"+`${params.id}` , config)
          .then(res => res.json())
          .then(
            (result) => {
              
                setCatname(result.name);
            },
            (error) => {
              
            }
          )
      }, []);

      const handleSubmit = event => {
        event.preventDefault();
    
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
          };
          const bodyParameters = {
            name: catname,
            description: catname,
            image: 'save.png'
          };
          axios.put(`/api/categories/`+`${params.id}`,
            bodyParameters,
            config
          ) .then(response => toast.success("Category updated !")  )
             .catch(error => console.log('Form submit error', error))

      };

    console.log(catname);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Category" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Form className="form theme-form">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Category Name"}</Label>
              <Input className="form-control" value= {catname} onChange = {handleChange} type="name" placeholder={catname} />
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

export default EditCategory;