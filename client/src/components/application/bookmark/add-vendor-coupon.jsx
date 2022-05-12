import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddVendorCoupon = (props) => {

  const [dealname, setDealname] = useState()
  const [description, setDescription] = useState()
  const [discount, setDiscount] = useState(0)
  const [startdate, setStartDate] = useState()
  const [enddate, setEndDate] = useState()
  const [starterrmsg, setStartErrMsg] = useState(false)
  const [enderrmsg, setEndErrMsg] = useState(false)
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
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
    if(userStartDate.length > 0) {
        userStartDate.some((item) => {
           if((item.start_date.replace(' 00:00:00','') < event.target.value || item.start_date.replace(' 00:00:00','') == event.target.value) && item.end_date.replace(' 00:00:00','') >= event.target.value) {
              setStartErrMsg(true);
              return true;
           } else {
              setStartErrMsg(false);
              setStartDate(event.target.value);
           }
        })
    } else {
      setStartDate(event.target.value);
    }
  }

  const onChangeEndDate = (event) => {
    if(userStartDate.length > 0) {
      userStartDate.some((item) => {
         if((item.start_date.replace(' 00:00:00','') < event.target.value || item.start_date.replace(' 00:00:00','') == event.target.value) && item.end_date.replace(' 00:00:00','') >= event.target.value) {
            setEndErrMsg(true);
            return true;
         } else {
            setEndErrMsg(false);
            setEndDate(event.target.value);
         }
      })
  } else {
    setEndDate(event.target.value);
  }
  }

  const [userStartDate, setUserStartDate] = useState(new Date())
  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios.get('/api/vendor-coupons/startdate/',config);
      if(result.data.length > 0) {
        setUserStartDate(result.data);
      }
    };
    GetData();
  }, []);



const history = useHistory()

const handleSubmit = event => {
  event.preventDefault();

  const config = {
    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      deal_name: dealname,
      deal_description: description,
      user_id : id,
      discount: discount,
      start_date: startdate,
      end_date: enddate,
      country_id: vendor_country_id
    };

    axios.post(`/api/vendor-coupons/`,
      bodyParameters,
      config
    ) .then(response => {
      console.log(response);
      if(response.status == 203) {
        toast.error("FIll form correctly");
      } else {
        toast.success("Coupon / Deals Added !")
        setTimeout(() => {
          history.push('/dashboard/vendor/vendor-coupon/');
        }, 1000);
      }

    }  
    
    )
       .catch(error => console.log('Form submit error', error))
};

const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() ).padStart(1, "0");
  const mm = String(today.getMonth() +1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
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
                <Input className="form-control digits" type="date" value = {startdate} onChange = {onChangeStartDate} min={disablePastDate()}/>
              </FormGroup>
              {starterrmsg && <div style = {{color: "red"}}>Warning : Already created deals date fall between this date, pick another date.</div>}
              <FormGroup>
                <Label>{"End Date"}</Label>
                <Input className="form-control digits" type="date" value = {enddate}  onChange = {onChangeEndDate} min={startdate}/>
              </FormGroup>
              {enderrmsg && <div style = {{color: "red"}}>Warning : Already created deals date fall between this date, pick another date.</div>}
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

export default AddVendorCoupon;