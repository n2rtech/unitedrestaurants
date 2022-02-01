import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input,Label, Button } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = (props) => {

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [phone_number, setPhoneNumber ] = useState('');
  const [message, setMessage ] = useState('');
  const [errors, setErrors] = useState('');
  
   const validateForm = () => {

    let errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors["name"] = "Field is Required!";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "Field is Required!";
    }

    if (!phone_number) {
      formIsValid = false;
      errors["phone_number"] = "Field is Required!";
    }

    if (!message) {
      formIsValid = false;
      errors["message"] = "Field is Required!";
    }

    setErrors(errors);
    return formIsValid;
  }


   const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = {};

    switch (name) {
      case 'name': 
      errors.name = 
      value.length < 1
      ? 'Field is Required!'
      : '';
      setName(value);
      break;


      case 'email': 
      errors.email = 
      value.length < 1
      ? 'Field is Required!'
      : '';
      setEmail(value);
      break;

      case 'phone_number': 
      errors.phone_number = 
      value.length < 1
      ? 'Field is Required!'
      : '';
      setPhoneNumber(value);
      break;

      case 'message': 
      errors.message = 
      value.length < 1
      ? 'Field is Required!'
      : '';
      setMessage(value);
      break;     

      default:
      break;
    }

    setErrors(errors);
  }

  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(validateForm(errors)) {
      const query = {
        name:name,
        phone_number:phone_number,
        message:message,
        email:email
      }

      axios.post('/api/contact-inquiry',query).then(res=>
      { 
        if (res.data.succeed === true) {
          setTimeout(() => {
            toast.success(res.data.message);
          }, 200);
          setName('');
          setPhoneNumber('');
          setEmail('');
          setMessage('');
          window.scrollTo(0, 0);
        }else{
          setError(res.data.message);
        } 
      }).catch((error) => {
        if (error.response) {
          setTimeout(() => {
            toast.error(error.response.data.error);
          }, 200);
        } 
      });
    }else{
      console.error('Invalid Form')
      return false;
    }
  }  

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>Contact Us</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row>
                 <Col sm="12">
                   <div className="contactform">
                     <Form>
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={name} onChange={handleChange} />
                        <div style={{color:'red'}}>{errors.name}</div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={email} onChange={handleChange} />
                        <div style={{color:'red'}}>{errors.email}</div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="phone_number">Phone Number</Label>
                        <Input type="number" name="phone_number" id="phone_number" value={phone_number} onChange={handleChange} />
                        <div style={{color:'red'}}>{errors.phone_number}</div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" rows="5" cols="5" name="message" id="exampleText" value={message} onChange={handleChange} />
                        <div style={{color:'red'}}>{errors.message}</div>
                      </FormGroup>
                      <Button onClick={handleSubmit}>Submit</Button>
                    </Form>
                   </div>
                 </Col>
               </Row>
          </Container>
          </div>
           <Footer />
        </Col>
        </Row>
      </Container>
      
  );
}

export default Contact;
