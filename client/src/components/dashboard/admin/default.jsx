import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { Database, ShoppingBag, MessageCircle, UserPlus } from 'react-feather';
import CountUp from 'react-countup';
import { TotalVendors,MembershipsVendor,VendorAdded,SupendedVendors } from '../../../constant'
import Knob from "knob";
import { Today } from '../../../constant'

const AdminDefault = (props) => {

  const [daytimes,setDayTimes] = useState()
  const today = new Date()
  const curHr = today.getHours()
  const curMi = today.getMinutes()
  const [meridiem,setMeridiem] = useState("AM")
  // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setDate(date)
  };

  const token = localStorage.getItem("token");
  const [totalVendors, setTotalVendors] = useState(0);
  const [totalVendorData, setTotalVendorData] = useState([]);
  const [totalMembershipVendors, setTotalMembershipVendors] = useState(0);
  const [totalSuspendedVendors, setTotalSuspendedVendors] = useState(0);
  const [totalFeaturedVendors, setTotalFeaturedVendors] = useState(0);
  const [totalAddspaceVendors, setTotalAddspaceVendors] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);

   const [selectedClient,setSelectedClient] = useState([]);


  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch("/api/vendors/new?search=all" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalVendorData(result);
      },
      (error) => {
      });

    fetch("/api/vendors/count/all" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalVendors(result.count);
      },
      (error) => {
      });


    fetch("/api/vendors/count/membership" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalMembershipVendors(result.count);
      },
      (error) => {
      });


    fetch("/api/vendors/count/suspended" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalSuspendedVendors(result.count);
      },
      (error) => {
      });


    fetch("/api/vendors/count/featured" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalFeaturedVendors(result.count);
      },
      (error) => {
      });


    fetch("/api/vendors/count/add-space" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalAddspaceVendors(result.count);
      },
      (error) => {
      });


    fetch("/api/vendors/count/messages" , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalMessages(result.count);
      },
      (error) => {
      });
 
    if (curHr < 12) {
      setDayTimes('Good Morning')
    }else if (curHr < 18) {
      setDayTimes('Good Afternoon')
    }else {
      setDayTimes('Good Evening')
    }

    if(curHr >= 12){
     setMeridiem('PM')
    }else{
      setMeridiem('AM')
    }
    
    var ordervalue1 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      width: 65,
      fgColor: "#7366ff",
      readOnly: false,
      dynamicDraw: true,
      tickColorizeValues: true,
      bgColor: '#eef5fb',
      lineCap: 'round',
      displayPrevious: false
    })
    //document.getElementById('ordervalue1').appendChild(ordervalue1);

    var ordervalue2 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      fgColor: "#7366ff",
      readOnly: false,
      width: 65,
      dynamicDraw: true,
      lineCap: 'round',
      displayPrevious: false
    })
    //document.getElementById('ordervalue2').appendChild(ordervalue2);

    // eslint-disable-next-line
  }, [])


  const handleSelectChange = e => {
    var type = e.target.value;
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token },
    };

    fetch(`/api/vendors/new?search=${type}` , config)
    .then(res => res.json())
    .then(
      (result) => {
        setTotalVendorData(result);
      },
      (error) => {
      });
  }

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="adminDash">
        <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><Database /></div>
                  <div className="media-body"><span className="m-0">{TotalVendors}</span>
                    <h4 className="mb-0 counter"><CountUp end={totalVendors} /></h4><Database className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-secondary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><MessageCircle /></div>
                  <div className="media-body"><span className="m-0">{MembershipsVendor}</span>
                    <h4 className="mb-0 counter"><CountUp end={totalMembershipVendors} /></h4><MessageCircle className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><UserPlus /></div>
                  <div className="media-body"><span className="m-0">{SupendedVendors}</span>
                    <h4 className="mb-0 counter"><CountUp end={totalSuspendedVendors} /></h4><UserPlus className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
           <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <div className="bg-secondary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><ShoppingBag /></div>
                  <div className="media-body"><span className="m-0">{"Featured Vendors"}</span>
                    <h4 className="mb-0 counter"><CountUp end={totalFeaturedVendors} /></h4><ShoppingBag className="icon-bg" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><UserPlus /></div>
                  <div className="media-body"><span className="m-0">{"Ad space vendors"}</span>
                    <h4 className="mb-0 counter"><CountUp end={totalAddspaceVendors} /></h4><UserPlus className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-secondary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><UserPlus /></div>
                  <div className="media-body"><span className="m-0">Messages</span>
                    <h4 className="mb-0 counter"><CountUp end={totalMessages} /></h4><UserPlus className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4 xl-100" className="appointment-sec box-col-6">
            <Row>
              <Col xl="12" className="appointment">
                <Card>
                  <CardHeader className="card-no-border">
                    <div className="header-top">
                          <h5 className="m-0">{VendorAdded}</h5>
                      <div className="card-header-right-icon">
                        <select onChange={handleSelectChange} className="button btn btn-primary">
                          <option value="today">{Today}</option>
                          <option selected value="all">{"All time"}</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="appointment-table table-responsive">
                      <table className="table table-bordernone">
                        <tbody>
                        {totalVendorData.map((vendor , i ) => (
                          <tr>
                            <td><img className="img-fluid img-40 rounded-circle mb-3" src={require("../../../assets/images/appointment/app-ent.jpg")} alt="" />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box"><span className="d-block">{vendor.name}</span><span className="font-roboto">{vendor.createdAt}</span></td>
                            <td>
                              <p className="m-0 font-primary">{vendor.createdAt}</p>
                            </td>
                          </tr>
                          ))}
                          
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default AdminDefault;