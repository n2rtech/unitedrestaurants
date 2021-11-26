import React, { Fragment, useEffect , useState } from 'react';
import ImageUploader from 'react-images-upload';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col,FormGroup , Button , Card, CardHeader, CardBody } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const VendorPhotogallery = () => {

    const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }

  const [galleryData, setGalleryData] = useState([]);
  const user_id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/gallery" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setGalleryData(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(galleryData);

       // Delete functionality

   const handleDelete = (id) => {
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };

      axios.delete(`/api/gallery/`+`${id}`,config
      ) .then(response => {
        toast.success("Video Deleted !")
        setTimeout(() => {
          history.push('/dashboard/vendor/vendor-photogallery/');
        }, 1000);
      })
         .catch(error => console.log('Form submit error', error))
    
  }

  const handleSubmit = event => {
      console.log('images',image);
    event.preventDefault();
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
        const bodyParameters = new FormData();
        bodyParameters.set('user_id', user_id);
        bodyParameters.set('image', image.pictures.pictureFiles);

      axios.post('/api/gallery/',
        bodyParameters,
        config
      ) .then(response => toast.success("Gallery Images Added !"))
         .catch(error => console.log('Form submit error', error))

  };

    return (
        <Fragment>
            <Breadcrumb parent="Vendor" title="Photo Gallery" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Images in Gallery"}</h5>
                            </CardHeader>
                            <CardBody>
                                {galleryData.map((item , i) => (
                                <Row key = {i}>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                            <a className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</a> 
                                        </div>
                                    </Col>                               
                                </Row> 
                                ))}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Upload Images"}</h5>
                            </CardHeader>
                            <CardBody>
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
                                <FormGroup>
                                    <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default VendorPhotogallery;