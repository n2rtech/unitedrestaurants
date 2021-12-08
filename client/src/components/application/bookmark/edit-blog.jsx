import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import CKEditors from "react-ckeditor-component";
import {BrowserRouter,Switch,Route,Redirect , useParams} from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from 'axios'
import ImageUploader from 'react-images-upload';
import {SelectSingleImageUpload,MultipleImageUpload} from '../../../constant'


const EditBlog = () => {

const token = localStorage.getItem("token");
const [image, setimage] = useState({ pictures: [] })
const onDrop = (pictureFiles, pictureDataURLs) => {
setimage({
    ...image, pictureFiles
});
}
const [content,setContent] = useState('') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const params = useParams();


    const [titleData, setTitleData] = useState({});
   useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/blogs/'+`${params.id}`,config);
      setTitleData(result.data);
      setContent(result.data.body);
    };
    GetData();
  }, []);

    const handleSubmit = event => {
      event.preventDefault();
  
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
        };
        const bodyParameters = {
          title: titleData.title,
          body: content
        };
        axios.put(`/api/pages/`+`${params.id}`,
          bodyParameters,
          config
        ) .then(response => toast.success("Page content updated !")  )
           .catch(error => console.log('Form submit error', error))

           
  
    };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Blog" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <h5>Show on Home page</h5>
          <FormGroup className="m-checkbox-inline custom-radio-ml">
            <div className="radio radio-primary">
              <Input id="radioinline2" type="radio" name="radio1" value="option1" defaultChecked />
              <Label className="mb-0" for="radioinline1">No</Label>
            </div>
            <div className="radio radio-primary">
              <Input id="radioinline2" type="radio" name="radio1" value="option1"  />
              <Label className="mb-0" for="radioinline2">Yes</Label>
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">{"Post Name"}</Label>
            <Input className="form-control"  type="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">{"Content"}</Label>
            <CKEditors
              activeclassName="p10"
              content={content}
              events={{
                  "change": onChange
              }}
            />
          </FormGroup>
          <FormGroup className="m-t-20">
            <Label htmlFor="exampleFormControlInput1">{"Blog Banner"}</Label>
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
          <Button color="success" className="m-t-20">{"Save"}</Button>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditBlog;