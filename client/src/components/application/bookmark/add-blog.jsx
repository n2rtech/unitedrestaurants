import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import CKEditors from "react-ckeditor-component";
import {BrowserRouter,Switch,Route,Redirect , useParams} from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from 'axios'

const AddBlog = () => {
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
    headers: {'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ' }
  };
      const result = await axios('/api/pages/'+`${params.id}`,config);
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
      <Breadcrumb parent="Apps" title="Add Blog" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <CKEditors
              activeclassName="p10"
              content={content}
              events={{
                  "change": onChange
              }}
          />
          <Button color="success" className="m-t-20">{"Save"}</Button>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default AddBlog;