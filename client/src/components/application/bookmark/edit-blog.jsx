import React, { Fragment, useMemo , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody, FormGroup, Input, Label, Button } from 'reactstrap'
import CKEditors from "react-ckeditor-component";
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from 'axios'
import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom'

const EditBlog = () => {
const history = useHistory()
const token = localStorage.getItem("token");
const [image, setimage] = useState({ pictures: [] })
const onDrop = (pictureFiles, pictureDataURLs) => {
setimage({
    ...image, pictureFiles
});
}
const [content,setContent] = useState('') 
const [titleData, setTitleData] = useState('');
const [showhome , setShowhome]  = useState('0');
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const OnChangeTitle = (event) => {
      setTitleData(event.target.value);
    }

    const onChangehome = (event) => {
      setShowhome(event.target.value)
    }

    const params = useParams();

    const [blogDetails, setBlogDetails] = useState([]);

    useMemo(() => {
    
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
          };
  
    axios.get('/api/blogs/'+`${params.id}` , config).then((response) => {
        setBlogDetails(response.data);
        setContent(response.data.content);
        setTitleData(response.data.name);
        setShowhome(response.data.show_on_home);
      });
  
    }, []);
  
    console.log('Blog Details',blogDetails);

    const handleSubmit = event => {
      event.preventDefault();
  
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };

          const bodyParameters = new FormData();
          bodyParameters.set('name', titleData);
          bodyParameters.set('content' , content);
          bodyParameters.set('show_on_home',showhome);
          if(image.pictureFiles) {
            bodyParameters.set('image', image.pictureFiles[0]);
          } else {
            bodyParameters.set('image', image.pictureFiles);
          }

        axios.put(`/api/blogs/`+`${params.id}`,
          bodyParameters,
          config
        ) .then(response => {
          toast.success("Blogs Updated !")
          setTimeout(() => {
            history.push('/dashboard/admin/blogs/');
          }, 1000);
        } )
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
              <Input id="no-home" type="radio" name = "radio1" value = "0" onChange = {onChangehome} checked={showhome==0} />
              <Label className="mb-0" for="no-home">No</Label>
            </div>
            <div className="radio radio-primary">
              <Input id="yes-home" type="radio" name = "radio1" value = "1"  onChange = {onChangehome} checked={showhome==1}/>
              <Label className="mb-0" for="yes-home">Yes</Label>
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">{"Post Name"}</Label>
            <Input className="form-control" value = {titleData} onChange = {OnChangeTitle} type="name" />
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
              {(blogDetails.image !== 0) ?
                <div>
                   <img className="img-thumbnail" src={`/api/uploads/blogs/${blogDetails.image}`} />
                </div>
                  : ''  
              }

          <FormGroup className="m-t-20">
            <Label htmlFor="exampleFormControlInput1">{"Blog Banner"}</Label>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              label=""
              singleImage={true}
              buttonText="Upload Image"
              onChange={onDrop}
              imgExtension={[".jpeg", ".jpg", ".gif", ".png", ".svg", ".webp"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            />
          </FormGroup>
          <Button color="success" onClick = {handleSubmit} className="m-t-20">{"Save"}</Button>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditBlog;