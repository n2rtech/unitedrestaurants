import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import ImageUploader from 'react-images-upload';
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditSalesItems = (props) => {

  const history = useHistory();
  const params = useParams();
  const [content,setContent] = useState('')
  const [name,setName] = useState('')
  const [id,setId] = useState('') 
  const [image, setimage] = useState({ pictures: [] , pictureFiles: [] })
  const [catImage,setCatImage] = useState('');

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

  const [sales , SetSales] = useState();
  const token = localStorage.getItem('token');

  useEffect(() => {
    
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token}
        };


  axios.get(`/api/sale-items/${params.id}`)
  .then((getData) => {
    SetSales(getData.data);
    setName(getData.data.name);
    setContent(getData.data.content)
    setCatImage(getData.data.image)
  });
  }, []);

  const HandleSave = (event) => {
    event.preventDefault();
    
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      
      const bodyParameters = new FormData();
      bodyParameters.set('name', name);
      bodyParameters.set('content', content);
      bodyParameters.set('user_id', localStorage.getItem('id'));
      if(image.pictureFiles) {
        bodyParameters.set('image', image.pictureFiles[0]);
      } else {
        bodyParameters.set('image', image.pictureFiles);
      }

      axios.put(`/api/sale-items/`+`${params.id}`,
        bodyParameters,
        config
        ).then(response => {
          toast.success("Sales Item updated !")
          setTimeout(() => {
            history.push('/dashboard/vendor/all-sale-items/');
          }, 1000);
        }
      ).catch(error => console.log('Form submit error', error))

  }
      
  return (
    <Fragment>
                <Breadcrumb parent="Editors" title="Edit Sale Item"/>
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

                                <Label htmlFor="exampleFormControlInput1">{"Image"}</Label>
                                {(catImage != '') ? 
                                  <img className="img-thumbnail" height = "100px" width = "400px" src={`/api/uploads/salesitems/${catImage}`} />
                                : ''  
                                }
                                
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
                                    <Button color="primary" onClick = { HandleSave }>{"Save"}</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
  );
}

export default EditSalesItems;