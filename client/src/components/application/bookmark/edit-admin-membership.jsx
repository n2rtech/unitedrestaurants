import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardBody, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditAdminMembership =  () =>  {
    const token = localStorage.getItem("token");
    const history = useHistory()
    const [content,setContent] = useState('content') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const params = useParams();
    const [packageData, setPackageData] = useState('');
    const [price, setPackagePrice] = useState({});
   useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/membership/'+`${params.id}`,config);
      setPackageData(result.data.name);
      setPackagePrice(result.data.price);
      setContent(result.data.description);
    };
    GetData();
  }, []);

  const ChangeName = (e) => {
    setPackageData(e.target.value);
  }
  
  const ChangePrice = (e) => {
    setPackagePrice(e.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        name: packageData,
        description: content,
        price: price

      };
      axios.put(`/api/membership/savepackage/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Page Content Updated!")
        setTimeout(() => {
          history.push('/dashboard/admin/admin-membership-package/');
      }, 1000);
      })
         .catch(error => console.log('Form submit error', error))

         

  };

    return (
            <Fragment>
                <Breadcrumb parent="Editors" title="Edit Membership"/>
                <Container fluid={true}>
                    <Row>
                      <Col sm="12">
                        <Card>
                          <CardBody>
                            <Form className="form theme-form">
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Membership Name"}</Label>
                                <Input className="form-control"  type="name" value = {packageData} onChange = {ChangeName}/>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Price"}</Label>
                                <Input className="form-control"  type="number" value = {price} onChange = {ChangePrice}/>
                              </FormGroup>
                              <CKEditors
                                  activeclassName="p10"
                                  content={content}
                                  events={{
                                      "change": onChange
                                  }}
                              />
                              <div className="m-t-20">
                                <Button color="primary" onClick = {handleSubmit}>{"Save"}</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

export default EditAdminMembership;