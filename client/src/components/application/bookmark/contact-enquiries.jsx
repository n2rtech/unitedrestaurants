import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Card, CardBody,Button, ButtonGroup } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import {toast} from 'react-toastify';
import axios from 'axios'

const ContactEnquiries = (props) => {

  const token = localStorage.getItem("token");
  const [InquiryData, setInquiryData] = useState([]);

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/contact-inquiry" , config)
    .then(res => res.json())
    .then(
      (result) => { 
        setInquiryData(result);
      },
      (error) => { 
      });
  }, []);

  const handleDelete = (id) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this Contact Inquiry!",
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
      
            axios.delete(`/api/contact-inquiry/`+`${id}`,config
            ) .then(response => {
              toast.success("Contact Inquiry Deleted !")
              setTimeout(() => {
                  window.location.reload();
              }, 1000);
            })
               .catch(error => console.log('Form submit error', error))

        SweetAlert.fire(
          'Deleted!',
          'Contact Inquiry has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Contact Inquiry is safe!'
        )
      }
    })
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Contact Enquiries" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <div className="table-responsive m-t-20">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Contact Inquiry Name"}</th>
                        <th scope="col">{"Email"}</th>
                        <th scope="col">{"phone Number"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                {InquiryData.map((Inquiry , i ) => (
                  <tr key={i}>
                    <td>{Inquiry.name}</td>
                    <td>{Inquiry.email}</td>
                    <td>{Inquiry.phone_number}</td>
                    <td className="text-right">
                    <ButtonGroup>
                      <a className="btn btn-info" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/view-contact-inquiry/${Inquiry.id}`}>View</a> &nbsp;
                      <Button color="danger" onClick={() => handleDelete(Inquiry.id)}>Delete</Button>
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

export default ContactEnquiries;