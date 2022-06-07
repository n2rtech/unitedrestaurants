import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import ImageUploader from 'react-images-upload';
import {ExampleSelect} from '../../../constant'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddPackage = (props) => {

const history = useHistory();
const [price, setPrice] = useState(0)
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [cycle,setCycle] = useState('');
const [plantype,setPlanType] = useState('');
const [cpcode , setCouponCode] = useState('');
const [dischide , setDiscounthide] = useState(false)
const [discvalue , setDiscvalue] = useState(0)
const [Url , setUrl] = useState('');

const [coupons, setCoupons] = useState([]);
const token = localStorage.getItem("token");
const [mode, setMode] = useState('');
const fetch = require('node-fetch');

const [testclient_id, setTestClientid] = useState('')
const [testsecret, setTestSecret] = useState('')

const TestclientIdAndSecret = `${testclient_id}:${testsecret}`;
const Testbasictoken = Buffer.from(TestclientIdAndSecret).toString('base64')


const [liveclient_id, setLiveClientid] = useState('')
const [livesecret, setLiveSecret] = useState('')
const LiveclientIdAndSecret = `${liveclient_id}:${livesecret}`;
const Livebasictoken = Buffer.from(LiveclientIdAndSecret).toString('base64')

  useEffect(() => {

      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/coupons" , config)
        .then(res => res.json())
        .then(
          (result) => {
            setCoupons(result);
          },
          (error) => {}
        )

          axios.get(`/api/paypal/`,
            config
            ).then(result => {
              if(result.data[0].mode === 1) {
                setUrl("https://api-m.sandbox.paypal.com/");
                setTestClientid(result.data[0].testclient_id);
                setTestSecret(result.data[0].testsecret);
              } else {
                setUrl("https://api-m.paypal.com/");
                setLiveClientid(result.data[0].liveclient_id);
                setLiveSecret(result.data[0].livesecret);
              }
              setMode(result.data[0].mode);
            }
          ).catch(error => console.log('Form submit error', error))

    }, []);
    
function cycle_name(cycle) {
  if(cycle == 'month') {
    return 'MONTH';
  } else if(cycle == 'quarterly') {
    return 'MONTH';
  } else if(cycle == 'halfyearly') {
    return 'MONTH';
  } else {
    return 'YEAR';
  }
}

function calculate_total_cycles(cycle) {
  if(cycle == 'month') {
    return 12;
  } else if(cycle == 'quarterly') {
    return 3;
  } else if(cycle == 'halfyearly') {
    return 6;
  } else {
    return 1
  }
}

    const handlePrice = (evt) => {
      setPrice(evt.target.value)
    }

    const handleName = (evt) => {
      setName(evt.target.value)
    }

    const handleDescription = (evt) => {
      setDescription(evt.target.value)
    }

    const handleOptions = (evt) => {
      setCycle(evt.target.value)
    }

    const handlePlans = (e) => {
      setPlanType(e.target.value)
    }

    const handleCoupons = (e) => {
      setCouponCode(e.target.value)
    }

    const handledisc = (e) => {
      if(e.target.value == 0) {
        setDiscounthide(false)
        setDiscvalue(0)
      } else {
        setDiscounthide(true)
        setDiscvalue(1)
      }
    }


      const handleSubmit = event => {
        event.preventDefault();

          if(plantype == '' || name == '' || description == '' || cycle == '' || price == '') {
            toast.error("Please fill form carefully!")
          } else {
              console.log("Mode" , Url);
        
              const token = localStorage.getItem("token");
              const config = {
                headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
                };
        
                const bodyParameters = {
                  name: name,
                  description: description,
                  discount: discvalue,
                  plan_type: plantype
                }    
              axios.post('/api/vendor-membership/checkplans/', bodyParameters ,config )
              .then(response => {
                if(response.data.error) {
                  toast.error(response.data.error);
                } else {

                  const basictoken = (mode == 1) ? Testbasictoken : Livebasictoken;
                            
            axios({
              url: `${Url}v1/billing/plans/`,
              method: 'post',
              headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' , 'Authorization': 'Basic '+  basictoken},
              data: { 
  
                  "product_id" : "united123456",
                  "name": name,
                  "description" : description,
                  "billing_cycles": [
                    {
                      "frequency": {
                        "interval_unit": cycle_name(cycle),
                        "interval_count": 1
                      },
                      "tenure_type": "REGULAR",
                      "sequence": 1,
                      "total_cycles": calculate_total_cycles(cycle),
                      "pricing_scheme": {
                        "fixed_price": {
                          "value": price,
                          "currency_code": "USD"
                        }
                      }
                    }
                  ],
                  "payment_preferences": {
                    "auto_bill_outstanding": true,
                    "setup_fee": {
                      "value": "0",
                      "currency_code": "USD"
                    },
                    "setup_fee_failure_action": "CONTINUE",
                    "payment_failure_threshold": 3
                  },
                  "taxes": {
                    "percentage": "0",
                    "inclusive": false
                  }
  
               }
            })
              .then(res => {
                 
                if(res.status == 201) {
                  const token = localStorage.getItem("token");
                  const user_id = localStorage.getItem("id");
                  const config = {
                    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
                    };
            
                    const bodyParameters = {
                      name: res.data.name,
                      description: res.data.description,
                      create_time: res.data.create_time,
                      product_id: res.data.product_id,
                      plan_id: res.data.id,
                      plan_type: plantype,
                      interval: cycle,
                      price: price,
                      user_id:user_id,
                      discount: discvalue,
                      coupon_id: cpcode
                    }
            
                  axios.post('/api/vendor-membership/plan-save/', bodyParameters ,config )
                  .then(response => {
                    if(response.data.error) {
                      toast.error(response.data.error);
                    } else {
                      toast.success(response.data.msg);
                      setTimeout(() => {
                      history.push('/dashboard/admin/manage-packages/');
                    }, 1000);
                    }
                  }
                ).catch(error => console.log('Form submit error', error))
                } 
              })
            }
              }
            ).catch(error => console.log('Form submit error', error))


          }
      };
      

  

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Membership Package" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <Form className="form theme-form">
          <FormGroup>
              <Label>Plan type</Label>
              <Input type="select" name="plan_type" className="form-control digits" onChange = {handlePlans} placeholder="Please Select">
                <option>Select Plan Type</option>
                <option value="standard">{"Standard"}</option>
                <option value="premium">{"Premium"}</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Plan Name"}</Label>
              <Input className="form-control" onChange = {handleName} type="name" placeholder={'Enter Plan Name'} />
            </FormGroup>
            <FormGroup>
              <Label>Discount</Label>
              <Input type="select" name="select" className="form-control digits" onChange = {handledisc} placeholder="Please Select">
                <option>Select Coupons</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Input>
            </FormGroup>
            {dischide && 
                          <FormGroup id="couponhide">
                            <Label>Discount Coupons</Label>
                            <Input type="select" name="select" className="form-control digits" onChange = {handleCoupons} placeholder="Please Select">
                              <option>Select Coupons</option>
                              {coupons && coupons.map((cp,i) => (
                                <option value={cp.id}>{cp.name}</option>
                              ))}
                            </Input>
                          </FormGroup>
            }
            <FormGroup>
            <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
            <Input type="textarea" className="form-control" onChange = {handleDescription} rows="3"/>
          </FormGroup> 
            <FormGroup>
              <Label>Billing Cycle</Label>
              <Input type="select" name="select" className="form-control digits" onChange = {handleOptions} placeholder="Please Select">
                <option>Select Options</option>
                <option value="month">{"Monthly"}</option>
                <option value="quarterly">{"Quarterly"}</option>
                <option value="halfyearly">{"Half Yearly"}</option>
                <option value="yearly">{"Yearly"}</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{"Plan Price"}</Label>
              <Input className="form-control" onChange = {handlePrice} type="name" placeholder={'Enter Plan Price'} />
            </FormGroup>
            <div className="text-center">
              <Button color="primary" onClick = {handleSubmit} >{"Save"}</Button>
            </div>
          </Form>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default AddPackage;