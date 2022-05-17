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


  useEffect(() => {
    
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
        };


  axios.get(`/api/sale-items/${params.id}`)
  .then((getData) => {
    SetSales(getData.data);
    setName(getData.data.name);
    setContent(getData.data.content)
    setCatImage(getData.data.image)
  });
  }, []);
      
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
                                    <Button color="primary">{"Save"}</Button>
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