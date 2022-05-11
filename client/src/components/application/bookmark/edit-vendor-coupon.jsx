import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody,Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams , useHistory } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'

const EditVendorCoupon = (props) => {

  const [dealname, setDealname] = useState()
  const [description, setDescription] = useState()
  const [discount, setDiscount] = useState(0)
  const [startdate, setStartDate] = useState()
  const [enddate, setEndDate] = useState()
  const [coupon_id , setCouponid] = useState();
  const params = useParams();
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const vendor_country_id = localStorage.getItem("vendor_country_id");

  const onChangeDealname = (event) => {
    setDealname(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };

  const onChangeStartDate = (event) => {
    setStartDate(event.target.value);
  }

  const onChangeEndDate = (event) => {
    setEndDate(event.target.value);
  }

  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/vendor-coupons/'+`${params.id}`,config);
      setDealname(result.data.deal_name)
      setCouponid(result.data.id)
      setDescription(result.data.deal_description)
      setDiscount(result.data.discount)
      setStartDate(result.data.start_date.replace(' 00:00:00',''))
      setEndDate(result.data.end_date.replace(' 00:00:00',''))
    };
    GetData();
  }, []);



// Edit Api
const history = useHistory()

const handleSubmit = event => {
  event.preventDefault();

  const config = {
    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      deal_name: dealname,
      deal_description: description,
      discount: discount,
      start_date: startdate,
      end_date: enddate,
      coupon_id: coupon_id,
      user_id: user_id,
      country_id: vendor_country_id

    };
    axios.put(`/api/vendor-coupons/`+`${params.id}`,
      bodyParameters,
      config
    ) .then(response => {
      toast.success("Successfully updated !")
        setTimeout(() => {
          history.push('/dashboard/vendor/vendor-coupon/');
        }, 1000);
    }  
    
    )
       .catch(error => console.log('Form submit error', error))


};

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Deals or Promotions" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Deal name"}</Label>
                <Input className="form-control" value = {dealname} onChange = {onChangeDealname} type="text" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" value = {description} onChange = {onChangeDescription}  className="form-control"  rows="3"/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Discount Percentage"}</Label>
                <Input type="text" className="form-control" value = {discount} onChange = {onChangeDiscount}   />
              </FormGroup>
              <FormGroup>
                <Label>{"Start Date"}</Label>
                <Input className="form-control digits" type="date" value = {startdate} onChange = {onChangeStartDate} />
              </FormGroup>
              <FormGroup>
                <Label>{"End Date"}</Label>
                <Input className="form-control digits" type="date" value = {enddate}  onChange = {onChangeEndDate}  min={startdate}/>
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

export default EditVendorCoupon;