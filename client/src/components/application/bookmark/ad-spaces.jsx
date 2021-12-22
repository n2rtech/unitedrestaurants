import React, { Fragment, useEffect , useState } from 'react';
import ImageUploader from 'react-images-upload';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col,FormGroup,  Card, CardHeader, CardBody, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'sweetalert2'


const AddSpaces = () => {

    const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }

  const [addspacesData, setAddspaces] = useState([]);
  const user_id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/ad-spaces" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setAddspaces(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(addspacesData);

    // ACTIVE PLAN 

  const [planname, setPlanName] = useState('');
 
   useEffect(() => {
   
       const config = {
           headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
       };
    
       fetch('/api/vendors/active-adds-plan/'+`${user_id}` , config)
         .then(res => res.json())
         .then(
           (result) => {
             setPlanName(result.membership);
           },
           (error) => {
             
           }
         )
     }, []);

     console.log('Plan Name : ' ,planname);


    // Delete functionality
    const handleDelete = (id) => {
        SweetAlert.fire({
          title: 'Are you sure?',
          text: "Once deleted, you will not be able to recover!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'cancel',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            const config = {
                headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
                };
          
                axios.delete(`/api/ad-spaces/`+`${id}`,config
                ) .then(response => {
                  toast.success("Deleted !")
                  setTimeout(() => {
                      window.location.reload();
                  }, 1000);
                })
                   .catch(error => console.log('Form submit error', error))
            
            SweetAlert.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
          else {
            SweetAlert.fire(
              'Coupon is safe!'
            )
          }
        })
      }

  const handleSubmit = event => {
    event.preventDefault();
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
        const bodyParameters = new FormData();
        bodyParameters.append('user_id', user_id);
        bodyParameters.append('link', '');

        for (let i = 0; i < (image.pictureFiles).length; i++) {
           bodyParameters.append('image', image.pictureFiles[i])
        }

      axios.post('/api/ad-spaces/',
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Submit")
        setTimeout(() => {
            window.location.reload();
        }, 1000);
      })
         .catch(error => console.log('Form submit error', error))

  };

    return (
        <Fragment>
            <Breadcrumb parent="Vendor" title="Ad Space" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Ad Running on website"}</h5>

                                { planname == null ? 'You don'+"'"+'t have any active membership to use this feature' : '' }
                            </CardHeader>
                            <CardBody>
                                <Row>
                                {addspacesData.map((item , i) => (
                                    <Col sm="4">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/adspaces/${item.image}`} />
                                        </div>
                                        
                                        <div className="text-center">
                                            <Button color="danger" onClick={() => handleDelete(item.id)} className="btn-pill">Delete Banner</Button>
                                        </div>
                                    </Col> 
                                ))}

                                        
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Upload Image"}</h5>
                            </CardHeader>
                            <CardBody>

                              {planname == null ? 
                              
                             ''
                              
                              : <ImageUploader
                                            withIcon={false}
                                            withPreview={true}
                                            label=""
                                            buttonText="Upload Image"
                                            onChange={onDrop}
                                            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                            maxFileSize={1048576}
                                            fileSizeError=" file size is too big"
                                        />}
                            
                            {planname == null ? <FormGroup>
                                    <Button  color="primary" onClick = {handleSubmit} disabled>{"Save"}</Button>
                                </FormGroup>
                              :
                              
                              <FormGroup>
                                    <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
                                </FormGroup>
                              
                              }
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </Fragment>
    );
}

export default AddSpaces;