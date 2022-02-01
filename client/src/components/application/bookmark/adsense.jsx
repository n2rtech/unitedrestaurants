import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Adsense = (props) => {

  const [details, setDetails] = useState([]);
  const [publisher_id, setPublisherID] = useState();
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const history = useHistory()
  useEffect(() => {

      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch("/api/google-adsense/"+`${user_id}`, config)
        .then(res => res.json())
        .then(
          (result) => {
            setDetails(result);
            setPublisherID(result.publisher_id);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(details);

    const OnChangePublisher = (event) => {
      setPublisherID(event.target.value);
    }

    const handleSubmit = event => {
      event.preventDefault();

      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };
        const bodyParameters = {
          publisher_id: publisher_id,
        };
        axios.put("/api/google-adsense/"+`${user_id}`,
          bodyParameters,
          config
        ) .then(response => {
          toast.success("Google adsesnse Id updated !")
            setTimeout(() => {
              window.location.reload();
            }, 1000);
        })
           .catch(error => console.log('Form submit error', error))
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Google Adsense" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Publisher ID"}</Label>
                <Input className="form-control" type="text"  value = {publisher_id} onChange = {OnChangePublisher} />
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

export default Adsense;