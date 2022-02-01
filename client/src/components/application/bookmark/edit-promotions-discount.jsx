import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'

const EditPromotionsDiscount = (props) => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Coupon" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Coupon name"}</Label>
                <Input className="form-control"  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Coupon Code"}</Label>
                <Input className="form-control"  type="name" />
              </FormGroup>
              <FormGroup>
                <Button  color="primary">{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default EditPromotionsDiscount;