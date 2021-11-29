import React, { Fragment , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardHeader,CardBody, Button} from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const MenuItems =  () =>  {
    
    const [content,setContent] = useState('content') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

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

export default MenuItems;