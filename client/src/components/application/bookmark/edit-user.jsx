import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button , ExampleSelect} from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Edituser = (props) => {

  const [useremail, setUserEmail] = useState()
  const [username, setUserName] = useState()
  const [usermobile, setUserMobile] = useState()
  const params = useParams();
  const token = localStorage.getItem("token");

  const onChangeUseremail = (event) => {
    setUserEmail(event.target.value);
  };

  const onChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const onChangeUsermobile = (event) => {
    setUserMobile(event.target.value);
  };

  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/users/'+`${params.id}`,config);
      setUserEmail(result.data.email)
      setUserName(result.data.name)
      setUserMobile(result.data.phone)
    };
    GetData();
  }, []);

  // Roles
  const [rolesData, setRolesData] = useState({});
  const [roleassign, setRoleDataAssign] = useState();

  useEffect(() => {
    const GetData = async () => {
      const config = {
        headers: {'Authorization': 'JWT '+token }
      };
      const result = await axios('/api/roles',config);
      setRolesData(result.data);

      const resultRole = await axios(`/api/users/`+`${params.id}`,config);
      setRoleDataAssign(resultRole.data.role_id);
    };
    GetData();
  }, []);

    
  const roleChange = (event) => {
    setRoleDataAssign(event.target.value);
  }

  console.log('Roles' , roleassign);

  // Edit Api
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        email: useremail,
        password: '',
        name: username,
        role_id: roleassign,
        phone: usermobile
      };
      axios.put(`/api/users/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("User updated !")
          setTimeout(() => {
            history.push('/dashboard/admin/users-list/');
          }, 1000);
      }  
      
      )
         .catch(error => console.log('Form submit error', error))


  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit user" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"User name"}</Label>
                <Input className="form-control" type="text" value = {username} onChange = {onChangeUsername} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input type="email" className="form-control" value = {useremail} onChange = {onChangeUseremail} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Mobile"}</Label>
                <Input type="text" className="form-control" value = {usermobile} onChange = {onChangeUsermobile} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlSelect9">{"Select Roles"}</Label>
                <Input type="select" name="select" onChange = {roleChange} className="form-control digits" placeholder="Please select">
                {rolesData.length > 0 && rolesData.map((item , i ) => (
                  <option value = {item.id} selected = {roleassign == item.id} >{item.role_name}</option>
                ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default Edituser;