import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditors from "react-ckeditor-component";
import {Container,Row,Col,Card,CardBody, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditAdminMembership =  () =>  {
    const token = localStorage.getItem("token");
    const history = useHistory()
    const [content,setContent] = useState('content') 
    const fetch = require('node-fetch');
    const [testclient_id, setTestClientid] = useState('')
    const [testsecret, setTestSecret] = useState('')
    const TestclientIdAndSecret = `${testclient_id}:${testsecret}`;
    const Testbasictoken = Buffer.from(TestclientIdAndSecret).toString('base64')

    const [liveclient_id, setLiveClientid] = useState('')
    const [livesecret, setLiveSecret] = useState('')
    const [mode, setMode] = useState('')
    const LiveclientIdAndSecret = `${liveclient_id}:${livesecret}`;
    const Livebasictoken = Buffer.from(LiveclientIdAndSecret).toString('base64')
    const [Url , setUrl] = useState('');
    const [get_plan_id , setGetPlanId] = useState('');

    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const params = useParams();
    const [packageData, setPackageData] = useState('');
    const [price, setPackagePrice] = useState({});
   useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/membership/'+`${params.id}`,config);
      setPackageData(result.data.name);
      setPackagePrice(result.data.price);
      setContent(result.data.description);
      setGetPlanId(result.data.plan_id);
    };
    GetData();
    const config = {
      headers: {'Authorization': 'JWT '+token }
    };
        axios.get(`/api/paypal/`,
          config
          ).then(result => {
            if(result.data[0].mode == 1) {
              setUrl("https://api-m.sandbox.paypal.com/");
              setTestClientid(result.data[0].testclient_id);
            } else {
              setUrl("https://api-m.paypal.com/");
              setLiveClientid(result.data[0].liveclient_id);
              setLiveSecret(result.data[0].livesecret);
            }
            setMode(result.data[0].mode);
          }
        ).catch(error => console.log('Form submit error', error))

  }, []);

  const ChangeName = (e) => {
    setPackageData(e.target.value);
  }
  
  const ChangePrice = (e) => {
    setPackagePrice(e.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      const bodyParameters = {
        name: packageData,
        description: content,
        price: price
      };

      const basictoken = (mode == 1) ? Testbasictoken : Livebasictoken;
      console.log(basictoken);

      axios({
        url: `${Url}v1/billing/plans/${get_plan_id}/update-pricing-schemes`,
        method: 'post',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' , 'Authorization': 'Basic '+  basictoken},
        data: { 
          // let today = new Date()
          // today.toISOString().split('T')[0];
            "pricing_schemes": [
              {
                "billing_cycle_sequence": 1,
                "pricing_scheme": {
                  "fixed_price": {
                    "value": price,
                    "currency_code": "USD"
                  }
                }
              }
            ],
         }
      })
        .then(res => {

          console.log(res.status);
           
          if(res.status == 204) {
            const token = localStorage.getItem("token");
            const config = {
              headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
              };
      
              axios.put(`/api/membership/savepackage/`+`${params.id}`,
              bodyParameters,
              config
            ) .then(response => {
              toast.success("Page Content Updated!")
              setTimeout(() => {
                history.push('/dashboard/admin/manage-packages/');
            }, 1000);
            })
               .catch(error => console.log('Form submit error', error))
          }


        }).catch(error => toast.error("Authorization failed due to insufficient permissions ! Please contact to admin allow permissions from papyal business account"))



     
  };

    return (
            <Fragment>
                <Breadcrumb parent="Editors" title="Edit Membership"/>
                <Container fluid={true}>
                    <Row>
                      <Col sm="12">
                        <Card>
                          <CardBody>
                            <Form className="form theme-form">
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Membership Name"}</Label>
                                <Input className="form-control"  type="name" value = {packageData} onChange = {ChangeName}/>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="exampleFormControlInput">{"Price"}</Label>
                                <Input className="form-control"  type="number" value = {price} onChange = {ChangePrice}/>
                                
                              </FormGroup>
                              
                              <CKEditors
                                  activeclassName="p10"
                                  content={content}
                                  events={{
                                      "change": onChange
                                  }}
                              />
                              <div className="m-t-20">
                                <Button color="primary" onClick = {handleSubmit}>{"Save"}</Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

export default EditAdminMembership;