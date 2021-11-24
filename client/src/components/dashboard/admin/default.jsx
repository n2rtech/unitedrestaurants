import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { Database, ShoppingBag, MessageCircle, UserPlus, Layers, ShoppingCart, DollarSign, ArrowDown, ArrowUp, CloudDrizzle } from 'react-feather';
import DatePicker from "react-datepicker";
import ApexCharts from 'react-apexcharts'
import CountUp from 'react-countup';
import { TotalVisitors,TotalVendors,MembershipsVendor,VendorAdded,SupendedVendors,AdminNotifications,CancelledMembers } from '../../../constant'
import ChartistChart from 'react-chartist';
import Knob from "knob";
import { Currentlysale, Marketvalue } from '../chartsData/apex-charts-data'
import { smallchart1data, smallchart1option, smallchart2data, smallchart2option, smallchart3data, smallchart3option, smallchart4data, smallchart4option } from '../chartsData/chartist-charts-data'
import { Send, Clock } from 'react-feather';
import {Dashboard,Summary,NewsUpdate,Appointment,Notification,MarketValue,Chat,New,Tomorrow,Yesterday,Daily,Weekly,Monthly,Store,Online,ReferralEarning,CashBalance,SalesForcasting,Purchase,Sales,SalesReturn,PurchaseRet,PurchaseOrderValue,ProductOrderValue,Pending,Yearly,Hot,Today,VenterLoren,Done,JohnLoren,Year,Month,Day,RightNow} from '../../../constant'


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

  useEffect(() => {
 
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
                    <h4 className="mb-0 counter"><CountUp end={325} /></h4><Database className="icon-bg" />
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
                    <h4 className="mb-0 counter"><CountUp end={120} /></h4><MessageCircle className="icon-bg" />
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
                    <h4 className="mb-0 counter"><CountUp end={205} />{"1"}</h4><UserPlus className="icon-bg" />
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
                    <h4 className="mb-0 counter"><CountUp end={25} /></h4><ShoppingBag className="icon-bg" />
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
                    <h4 className="mb-0 counter"><CountUp end={45} />{"1"}</h4><UserPlus className="icon-bg" />
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
                    <h4 className="mb-0 counter"><CountUp end={10} />{"1"}</h4><UserPlus className="icon-bg" />
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
                        <select className="button btn btn-primary">
                          <option>{Today}</option>
                          <option>{"All time"}</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="appointment-table table-responsive">
                      <table className="table table-bordernone">
                        <tbody>
                          <tr>
                            <td><img className="img-fluid img-40 rounded-circle mb-3" src={require("../../../assets/images/appointment/app-ent.jpg")} alt="" />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box"><span className="d-block">{VenterLoren}</span><span className="font-roboto">Now</span></td>
                            <td>
                              <p className="m-0 font-primary">{"28 Sept"}</p>
                            </td>
                          </tr>
                          <tr>
                            <td><img className="img-fluid img-40 rounded-circle" src={require("../../../assets/images/appointment/app-ent.jpg")} alt="" />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box"><span className="d-block">{JohnLoren}</span><span className="font-roboto">{"11:00"}</span></td>
                            <td>
                              <p className="m-0 font-primary">{"22 Sept"}</p>
                            </td>
                          </tr>
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