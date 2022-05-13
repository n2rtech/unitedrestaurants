import React, { Fragment , useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
// import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardHeader,CardBody, Button,FormGroup, Label, Input} from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import Dropzone from 'react-dropzone-uploader';

const SaleItems =  () =>  {

    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    const handleChangeStatus = ({ meta, file }, status) => {
    }
    
    const [content,setContent] = useState('')
    const [id,setId] = useState('') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const token = localStorage.getItem("token");
    useEffect(() => {

        const items = { ...localStorage };

        const config = {
            headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };
     
        fetch("/api/sale-items/"+`${items.id}` , config)
          .then(res => res.json())
          .then(
            (result) => {
                setContent(result.content);
                setId(result.id);
            },
            (error) => {
              
            }
          )
      }, []);
  
      console.log(content);

  // Edit Api
  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        content: content,
      };
      axios.put(`/api/sale-items/`+`${id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Sale Items updated !")
          setTimeout(() => {
            window.location.reload();
          }, 1000);
      })
         .catch(error => console.log('Form submit error', error))

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
                                    <Input className="form-control"  type="name" placeholder="Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Item Description</Label>
                                    <Input type="textarea" className="form-control"  rows="3"/>
                                </FormGroup>
                                <FormGroup>
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            styles={{
                                                dropzone: { height: 200 },
                                                dropzoneActive: { borderColor: 'green' },
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                    {/*<CKEditors
                                        activeclassName="p10"
                                        content={content}
                                        events={{
                                            "change": onChange
                                        }}
                                    />*/}
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