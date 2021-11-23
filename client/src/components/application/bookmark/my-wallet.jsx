import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {BasicModal,Simple,StaticExample,NewMessage,SendMessage,ModalTitle,Close,SaveChanges,VerticallyCentered,TooltipsAndPopovers,UsingTheGrid,SizesModal,LargeModal,SmallModal,ScrollingLongContent,VaryingModalContent} from '../../../constant'





const MyWallet = (props) => {


const [VaryingContentone, setVaryingContentone] = useState(false);
const VaryingContentonetoggle = () => setVaryingContentone(!VaryingContentone);

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
                <h4 className="f-w-500 mb-0 f-26">{"$2300"}</h4>
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
                  <Input className="form-control" type="text"/>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
                  <Button color="primary" onClick={VaryingContentonetoggle}>{"Make Payment"}</Button>
            </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
}

export default MyWallet;