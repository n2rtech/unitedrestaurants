import React,{useState,useMemo,Fragment} from 'react';
import { Container, Row,Form, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap'
import './css/style.css'
                      
const SearchListing = () => {

  return (
      <div className="Homebanner">
        <Container>
          <Form className="browse">
            <Row>
              <div className="col-sm-3 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-cube"></i></InputGroupText></InputGroupAddon>
                  <Input type="select" name="select" className="form-control digits" placeholder="Please select categories">
                    <option>{"Please select category"}</option>
                    <option>{"Restaurants"}</option>
                    <option>{"Food Market"}</option>
                    <option>{"Beer & Alcohol"}</option>
                    <option>{"Services"}</option>
                    <option>{"Suppliers"}</option>
                    <option>{"Buy & Sell"}</option>
                  </Input>
                </InputGroup>
              </div>
              <div className="col-sm-4 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-institution"></i></InputGroupText></InputGroupAddon>
                  <Input className="form-control"  type="email" placeholder="Ex: food, restaurant" />
                </InputGroup>
              </div>
              <div className="col-sm-2 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-globe"></i></InputGroupText></InputGroupAddon>
                  <Input type="select" name="select" className="form-control digits" placeholder="Please Select">
                    <option>{"USA"}</option>
                    <option>{"CANADA"}</option>
                    <option>{"UK"}</option>
                    <option>{"ITALY"}</option>
                    <option>{"AUSTRALIA"}</option>
                    <option>{"SPAIN"}</option>
                  </Input>
                </InputGroup>
              </div>
              <div className="col-sm-2 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-map-marker"></i></InputGroupText></InputGroupAddon>
                  <Input type="select" name="select" className="form-control digits" defaultValue="Please Select">
                    <option>{"California"}</option>
                    <option>{"Los Angeles"}</option>
                    <option>{"Las Vegas"}</option>
                    <option>{"San Andreas"}</option>
                  </Input>
                </InputGroup>
              </div>
              <div className="col-sm-1">
                <Button color="primary"><i className="fa fa-search"></i></Button>
              </div>
            </Row>
          </Form>
        </Container>
      </div>
  );

}
export default SearchListing;
