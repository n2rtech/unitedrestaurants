import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
import axios from 'axios'

const AddUser = (props) => {

   const history = useHistory();
  const [username, setUserName] = useState()
  const [useremail, setUserEmail] = useState()
  const [userpassword, setUserPassword] = useState()
  const token = localStorage.getItem("token");

  const onChangeusername = (event) => {
    setUserName(event.target.value);
  }

  const onChangeuseremail = (event) => {
    setUserEmail(event.target.value);
  }

  const onChangeuserpassword = (event) => {
    setUserPassword(event.target.value);
  }

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

    };
    GetData();
  }, []);

  const roleChange = (event) => {
    setRoleDataAssign(event.target.value);
  }


  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };

      const bodyParameters = {
        name: username,
        first_name: username,
        last_name: '',
        email: useremail,
        password: userpassword,
        role_id: roleassign
      };
      axios.post(`/api/users/register/`,
        bodyParameters,
        config
      ) .then(response => {
        toast.success("User has been added !");
        setTimeout(function() {
          history.push("/dashboard/admin/users-list");
        }, 2500); 
      })
         .catch(error => console.log('Form submit error', error))
  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add User" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"User name"}</Label>
                <Input className="form-control" type="text"  onChange = {onChangeusername}  />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input type="email" className="form-control" onChange = {onChangeuseremail} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Password"}</Label>
                <Input type="text" className="form-control" onChange = {onChangeuserpassword}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlSelect9">{"Select Roles"}</Label>
                <Input type="select" name="select"  onChange = {roleChange} className="form-control digits" placeholder="Please select">
                {rolesData.length > 0 && rolesData.map((item , i ) => (
                  <option value = {item.id} selected = {roleassign == item.id} >{item.role_name}</option>
                ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit} >{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddUser;