import React, { Fragment , useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
// import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardHeader,CardBody, Button,FormGroup, Label, Input} from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom'

const SaleItems =  () =>  {
    const history = useHistory();
    const [content,setContent] = useState('')
    const [name,setName] = useState('')
    const [id,setId] = useState('') 
    const [image, setimage] = useState({ pictures: [] , pictureFiles: [] })

    const onChangeContent = (evt) => {
        setContent(evt.target.value)
    }
   
    const onChangeName = (evt) => {
        setName(evt.target.value)
    }

    const onDrop = (pictureFiles) => {
        setimage({
            ...image, pictureFiles
        });
    }

    const token = localStorage.getItem("token");

      const handleSubmit = event => {
        event.preventDefault();

        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };

          const bodyParameters = new FormData();
          bodyParameters.set('name', name);
          if(image.pictureFiles.length !== 0) {
            bodyParameters.set('image', image.pictureFiles[0]);
          } else {
            bodyParameters.set('image', image.pictureFiles);
          } 
          bodyParameters.set('content', content);
          bodyParameters.set('user_id', localStorage.getItem('id'));
          
          axios.post(`/api/sale-items/add`,
            bodyParameters,
            config
          ).then(response => {
            toast.success("Sales Item updated !")  
            setTimeout(() => {
              history.push('/dashboard/vendor/all-sale-items/');
            }, 1000);
          }).catch(error => console.log('Form submit error', error))

      };

    return (
            <Fragment>
                <Breadcrumb parent="Editors" title="Sale Item"/>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">Item name</Label>
                                    <Input className="form-control"  type="name" onChange = {onChangeName} value = {name} placeholder="Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Item Description</Label>
                                    <Input type="textarea" className="form-control"  onChange = {onChangeContent} value = {content} rows="3"/>
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
                                    <div className="m-t-20">
                                    <Button onClick = {handleSubmit} color="primary">{"Save"}</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

export default SaleItems;