import React, { Fragment , useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardHeader,CardBody, Button} from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const MenuItems =  () =>  {
    
    const [content,setContent] = useState('')
    const [id,setId] = useState('') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const params = useParams();
    const token = localStorage.getItem("token");
    const history = useHistory()
    useEffect(() => {
    
        const config = {
            headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };
     
        fetch("/api/menu-items/"+`${params.id}` , config)
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
      axios.put(`/api/menu-items/`+`${id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("Menu Items updated !")
          setTimeout(() => {
            history.push('/dashboard/vendor/menu-items/'+`${params.id}`);
          }, 1000);
      })
         .catch(error => console.log('Form submit error', error))

  };

    return (
            <Fragment>
                <Breadcrumb parent="Editors" title="Menu Items"/>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{"List your menu items in the box"}</h5>
                                </CardHeader>
                                <CardBody>
                                    <CKEditors
                                        activeclassName="p10"
                                        content={content}
                                        events={{
                                            "change": onChange
                                        }}
                                    />
                                    <div className="m-t-20">
                                    <Button color="primary" onClick = {handleSubmit} >{"Save"}</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

export default MenuItems;