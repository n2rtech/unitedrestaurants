import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'sweetalert2'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

const VendorVideoGallery = (props) => {

  const [videoData, setVideoData] = useState([]);
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("id");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/youtubevideo/"+`${user_id}`, config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setVideoData(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(videoData);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Videos" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-youtube-video/`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Video Name"}</th>
                        <th scope="col">{"Description"}</th>
                        <th scope="col">{"Video"}</th>
                    </tr>
                </thead>
                <tbody>
                {videoData.map((item , i) => (
                  <tr key = {i}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td className="text-right">
                    <iframe width="300" height="200" src={`https://www.youtube.com/embed/${item.youtube_video_id}`}>
                      </iframe>
                      {/* <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-video-gallery/${item.id}`} className="btn btn-success">Edit</a> &nbsp;
                      <a className="btn btn-danger">Delete</a>  */}
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

export default VendorVideoGallery;