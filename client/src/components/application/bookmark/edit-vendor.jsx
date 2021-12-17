import React, { Fragment, useRef ,useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-toastify';

const EditVendor = (props) => {
const ref = useRef();
const params = useParams();	
const token = localStorage.getItem("token");
const [options,setOptions] = useState([])
const [name , setName] = useState();
const [Email , setEmail] = useState();
const [Mobile , setMobile] = useState();
const [Address , setAddress] = useState();
const [Country , setCountry] = useState();
const [Featured , setFeatured] = useState();
const [Hotdeals , setHotdeals] = useState('0');
const [category_id , setCategory] = useState('0');

  useEffect(() => {
  const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
        };

	axios.get('/api/categories/' , config).then((response) => {
		setOptions(response.data);
	  });

  }, []);
  console.log(options);


  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeMobile = (event) => {
    setMobile(event.target.value);
  }

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  const onChangefeatured = (event) => {
    setFeatured(event.target.value);
  }

  const onChangehotdeals = (event) => {
    setHotdeals(event.target.value);
  }

  const onChangeCategory = (selectedOptions) => {
    if(selectedOptions.length != 0) {
      setCategory(selectedOptions[0].id);
    } else {
      setCategory('');
    }
  }

  const handleParentChange = (evt) => {
      setCategory(evt.target.value)
    }

  const [details , setDetails] = useState();
  useEffect(() => {
    
  const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
        };

  axios.get('/api/vendors/'+`${params.id}` , config).then((response) => {
      setDetails(response.data);
      setName(response.data[0].name);
      setEmail(response.data[0].email);
      setMobile(response.data[0].mobile);
      setAddress(response.data[0].address);
      setCountry(response.data[0].country_id);
      setCategory(response.data[0].category_id);
      setFeatured(response.data[0].featured_business);
      setHotdeals(response.data[0].hot_deal);
    });

  }, []);

  const [singleSelections, setSingleSelections] = useState([]);
  
  const [cat , setCat] = useState();
  useEffect(() => {
    const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
          };
  
    axios.get('/api/categories/1' , config).then((response) => {
      setCat(response.data.name);
      });
  
    }, []);
  
  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      
      const bodyParameters = {
        name: name,
        email: Email,
        mobile: Mobile,
        address: Address,
        country_id: 5,
        category_id: category_id,
        featured_business: Featured,
        hot_deals: Hotdeals,
      };

        console.log('BODY PARAMETERS',bodyParameters);

      axios.put(`/api/vendors/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => toast.success("Vendor details are updated !")  )
         .catch(error => console.log('Form submit error', error))

  };

console.log('Mobile' , cat);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Vendor" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <h5>Show in Hot deals</h5>
              <FormGroup className="m-checkbox-inline custom-radio-ml">
              { (Hotdeals == 0) ?
              <div>
                <div className="radio radio-primary">
                  <Input id="no-deals" type="radio"  onChange={onChangehotdeals} value="0" name="radio1" defaultChecked />
                  <Label className="mb-0" for="no-deals">No</Label>
                </div>
                <div className="radio radio-primary">
                  <Input id="yes-deals" type="radio" onChange={onChangehotdeals} value="1"  name="radio1" />
                  <Label className="mb-0" for="yes-deals">Yes</Label>
                </div>
              </div>
                : 
                <div>
                <div className="radio radio-primary">
                  <Input id="no-deals" type="radio"  onChange={onChangehotdeals} value="0" name="radio1" />
                  <Label className="mb-0" for="no-deals">No</Label>
                </div>
                <div className="radio radio-primary">
                  <Input id="yes-deals" type="radio" onChange={onChangehotdeals} value="1"  name="radio1" defaultChecked/>
                  <Label className="mb-0" for="yes-deals">Yes</Label>
                </div>
                </div>
                
                }
              </FormGroup>
              <h5 className="m-t-30">Show in Featured Business</h5>
              <FormGroup className="m-checkbox-inline custom-radio-ml">
              { (Featured == 0) ? 
              
              <div>
                <div className="radio radio-primary">
                  <Input id="no-featured" type="radio" onChange={onChangefeatured} value="0" name="radio2" defaultChecked/>
                  <Label className="mb-0" for="no-featured">No</Label>
                </div>

                <div className="radio radio-primary">
                <Input id="yes-featured" type="radio" onChange={onChangefeatured} value="1" name="radio2" />
                <Label className="mb-0" for="yes-featured">Yes</Label>
                </div>
                </div>
              
              :  
              
              <div>
                <div className="radio radio-primary">
                  <Input id="no-featured" type="radio" onChange={onChangefeatured} value="0" name="radio2" />
                  <Label className="mb-0" for="no-featured">No</Label>
                </div>
                  <div className="radio radio-primary">
                  <Input id="yes-featured" type="radio" onChange={onChangefeatured} value="1" name="radio2" defaultChecked/>
                  <Label className="mb-0" for="yes-featured">Yes</Label>
                  </div>
                 </div> 
              }
                
               
              </FormGroup>
              <div>&nbsp;</div>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput">{"Business Name"}</Label>
                <Input className="form-control"  onChange = {onChangeName} value={name} type="name" placeholder="Mohd Sohrab Khan" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input className="form-control" onChange = {onChangeEmail}  value={Email}  type="email" placeholder="sohrab@n2rtechnologies.com" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                <Input className="form-control"  onChange = {onChangeMobile}  value={Mobile}  type="tel" placeholder="8090895865" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Address"}</Label>
                <Input className="form-control"  onChange = {onChangeAddress}  value={Address} type="name" placeholder="C6, Sector 7, Noida" />
              </FormGroup>

              <FormGroup>
            <Label htmlFor="exampleFormControlSelect9">Parent category(if any?)</Label>
            <Input type="select" name="select" onChange={handleParentChange}  className="form-control digits" value={category_id} defaultValue={category_id}>
            <option value="">{"Select, if you want to make as a subcategory"}</option>
            {options.map((country , i ) => (
                <Fragment key={i}>
                  <option selected={country.id == category_id} value={country.id}>{country.name}</option>
                </Fragment>
                ))}
            </Input>
            </FormGroup>

              {/*<FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Listed"}</Label>
                <Typeahead
                  id="public-typeahead"
                  clearButton
                  defaultSelected={options.slice(0, 1)}
                  labelKey={"name"}
                  onChange={onChangeCategory}                  
                  onInputChange={handleInputChange}
                  options={options}
                  ref={ref}
                  placeholder={cat}
                />
              </FormGroup>*/}
              <FormGroup>
                <Button color="primary" onClick = {handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditVendor;