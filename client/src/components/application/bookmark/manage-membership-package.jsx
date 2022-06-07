import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, Row, Button , Col, CardBody, ButtonGroup } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const ManageMembershipPackage = (props) => {

  const [plansData, setPlansData] = useState([]);
  const token = localStorage.getItem("token");
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

  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/vendor-membership/plan-list" , config)
        .then(res => res.json())
        .then(
          (result) => {
            setPlansData(result);
          },
          (error) => {}
        )

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

    console.log(plansData);

    const HandleActivate = (plan_id,id) => {
      setLoading(true)
      const basictoken = (mode == 1) ? Testbasictoken : Livebasictoken;
       axios({
        url: `${Url}/v1/billing/plans/`+`${plan_id}`+`/activate`,
        method: 'post',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' , 'Authorization': 'Basic '+basictoken },
      })
        .then(res => {
           if(res.status == '204') {
                setLoading(false)                          
                const token = localStorage.getItem("token");
                const config = {
                  headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
                  };

                axios.put('/api/vendor-membership/activate-plan/'+`${id}` ,config )
                .then(response => {
                  toast.success('PLan is activated.');
                  setTimeout(function(){
                    window.location.reload();
                 }, 1000);
                })
                .catch(error => console.log('Form submit error', error))
           } else {
            SweetAlert.fire(
              'Paypal Error'
            )
           }  
        });
    }

    const [isLoading, setLoading] = useState(false)

    const HandleDeactivate = (plan_id,id) => {

      setLoading(true)
      const basictoken = (mode == 1) ? Testbasictoken : Livebasictoken;
      //var basictoken = 'QWRIYjBBRE1IVUFXeWtXUUQtdzhNQlIza3VwU3ZZN0FYRFZ6YVJPcnJNQlpnQVQwSDRiZmhubFhyeXd2cGxOYjJjaEc0TEMxekFiRDd4N3Q6RU1MZTJYdndXV3BrZTJaWVg5dVctU2liS25lMkdSOXg4TjZlLXhEOGJaZDZXOEM4WWRpdVFJSHhhVEtoM3JmT21pT3hyVXJ3Q2JOZXZJOUM=';
      axios({
        url: `${Url}/v1/billing/plans/`+`${plan_id}`+`/deactivate`,
        method: 'post',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' , 'Authorization': 'Basic '+basictoken },
      })
        .then(res => {
           if(res.status == '204') {  
                setLoading(false)                    
                const token = localStorage.getItem("token");
                const config = {
                  headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
                  };
          
                axios.put('/api/vendor-membership/deactivate-plan/'+`${id}` ,config )
                .then(response => 
                  {
                    toast.success('PLan is de activated.')
                    setTimeout(function(){
                      window.location.reload();
                   }, 1000);
                  })
                  
                 
                .catch(error => console.log('Form submit error', error))
           } else {
            SweetAlert.fire(
              'Paypal Error'
            )
           }  
        });
    }


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Membership Packages" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row>
            <Col sm="6">&nbsp;</Col>
            <Col sm="6">
              <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-package/`} className="btn btn-primary pull-right">{"Add New"}</a>
            </Col>
          </Row>
            <div class="loaderclass"> {isLoading ? <img src={`${process.env.PUBLIC_URL}/assets/images/loader.gif`} /> : ''} </div>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Membership Name"}</th>
                        <th scope="col">{"Description"}</th>
                        <th scope="col">{"Membership Interval"}</th>
                        <th scope="col">{"Membership Price"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>

                    {plansData && plansData.map((item , i) => (
                         <tr key={i}>
                         <td>{item.name}</td>
                         <td>{item.description}</td>
                         <td>{item.interval}</td>
                         <td>{item.price}</td>
                         <td className="text-right">
                         <ButtonGroup>
                           {/* <Button color="btn btn-success" disabled = {item.name === 'Free' ? true : false} href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-admin-membership/${item.id}`}>Edit</Button> &nbsp; */}
                           <Button color="success" disabled = {item.status == 1 ? true : false} onClick={() => HandleActivate(item.plan_id,item.id)}>Activate</Button>&nbsp;
                           <Button color="danger" disabled = {item.status == 0 ? true : false} onClick={() => HandleDeactivate(item.plan_id,item.id)}>De-activate</Button>
                         </ButtonGroup>                          
                         </td>
                       </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default ManageMembershipPackage;