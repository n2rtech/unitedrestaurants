import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import CKEditors from "react-ckeditor-component";
import { CKEditorExample } from "../../../constant";


const EditPage = () => {
const [content,setContent] = useState('content') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Page" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <h4 className="m-b-20">About Us</h4>
          <CKEditors
              activeclassName="p10"
              content={content}
              events={{
                  "change": onChange
              }}
          />
          <Button color="success" className="m-t-20">{"Save"}</Button>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditPage;