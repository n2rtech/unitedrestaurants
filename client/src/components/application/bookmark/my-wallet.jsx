import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import Paypalwallet from './paypalplans/paypalwallet.jsx'
import axios from 'axios'

const MyWallet = (props) => {


const [VaryingContentone, setVaryingContentone] = useState(false);
const VaryingContentonetoggle = () => setVaryingContentone(!VaryingContentone);

const [amount, setAmount] = useState();
const token = localStorage.getItem("token");
const [walletbalance, setWalletBallance] = useState();

const handleAmount = (event) => {
  setAmount(event.target.value);
}

useEffect(() => {
      const GetData = async () => {
      const config = {
        headers: {'Authorization': 'JWT '+token }
      };
      const user_id = localStorage.getItem("id");
      const result = await axios('/api/wallet/'+`${user_id}`,config);
      setWalletBallance(result.data.wallet_balance);
  };
  GetData();
}, []);


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="My Wallet" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <div className="media">
            <div className="media-body">
              <p className="f-w-500 font-roboto f-18">{"Amount in Wallet"}</p>
              <div className="progress-box">
                <h4 className="f-w-500 mb-0 f-26">{walletbalance}</h4>
              </div>
            </div>
          </div>
          <div>&nbsp;</div>
          <Button color="primary" onClick={VaryingContentonetoggle}>{"Add Money"}</Button>
        </CardBody>
        </Card>
        <Modal isOpen={VaryingContentone} toggle={VaryingContentonetoggle}>
           <ModalHeader toggle={VaryingContentonetoggle}>
            {"Add Money"}
           </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label className="col-form-label" for="recipient-name">{"Please enter the amount which you want to add"}</Label>
                  <Input className="form-control" onChange = {handleAmount} type="text"/>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
                  <Paypalwallet amount = {amount}/>
            </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
}

export default MyWallet;