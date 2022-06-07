import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'sweetalert2'
import { Player, ControlBar } from 'video-react';

const VendorVideoGallery = (props) => {

  const [videoData, setVideoData] = useState([]);
  const [videoDataupload, setVideoDataUpload] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
   
      fetch("/api/video-gallery" , config)
        .then(res => res.json())
        .then(
          (result) => {
            
            setVideoData(result);
          },
          (error) => {
            
          }
        )

        fetch("/api/youtubevideo/"+`${localStorage.getItem('id')}`, config)
        .then(res => res.json())
        .then(
          (result) => {
            setVideoDataUpload(result);
          },
          (error) => {
            
          }
        )

    }, []);

    console.log(videoData);

   // Delete functionality

  const handleDelete = (id) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this coupon!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
    
          axios.delete(`/api/video-gallery/`+`${id}`,config
          ) .then(response => {
            toast.success("Video Deleted !")
            setTimeout(() => {
              history.push('/dashboard/vendor/vendor-videogallery/');
            }, 1000);
          })
             .catch(error => console.log('Form submit error', error))
        
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Coupon is safe!'
        )
      }
    })
  }


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
                <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-video-gallery/`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Video Name"}</th>
                        <td>{"Link / Description"}</td>
                        <th scope="col" className="text-right">{"Action / Video"}</th>
                    </tr>
                </thead>
                <tbody>
                {videoData.map((item , i) => (
                  <tr key = {i}>
                    <td>{item.video_name}</td>
                    <td>{item.youtube_link}</td>
                    <td className="text-right">
                      <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-video-gallery/${item.id}/`} className="btn btn-success">Edit</a> &nbsp;
                      <a className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</a> 
                    </td>
                  </tr>
                ))}
                {videoDataupload.map((item , i) => (
                  <tr key = {i}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td className="text-right">
                    <Player>
                        <source src={`${process.env.PUBLIC_URL}/api/uploads/youtubevideo/${item.video_link}`} />
                        <ControlBar autoHide={false} />
                    </Player>
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