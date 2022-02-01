import React, { Fragment,useState ,useEffect} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody } from 'reactstrap' 
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import axios from 'axios'

const VendorEcommerce = (props) => {
    // eslint-disable-next-line
    const[location,setlocation] = useState({ address: false,
      mapPosition: {
        lat: 18.5204, lng: 73.8567
        },
        markerPosition: {
        lat: 18.5204, lng: 73.8567
        }
    })

    const BasicMap = withScriptjs(
      withGoogleMap(
      props => (
        <GoogleMap google={props.google}
        defaultZoom={15}
        defaultCenter={{ lat: location.mapPosition.lat, lng: location.mapPosition.lng }}
        >
      </GoogleMap>
      )
      )
    );

    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        centerPadding: "5px",
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const[walletbalance,setWalletBallance] = useState()
    const token = localStorage.getItem("token");
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

console.log('walletbalance', walletbalance);

    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="Vendor Dashboard" />
            <Container fluid={true}>
            <Row className="size-column">
              <Col xl="7 xl-100" className="box-col-12 ">
                <Row className="dash-chart vendor-dashboard">
                  <Col xl="12" lg="12" md="6" className="box-col-6">
                    <Card className="o-hidden">
                      <CardBody>
                        <div className="ecommerce-widgets media">
                          <div className="media-body">
                            <h1 className="f-26 f-w-500 font-roboto color-maroon">{"Welcome back,"}</h1>
                            <h4 className="f-w-500 mb-0 f-26">{localStorage.getItem("name")}</h4>
                          </div>
                          <div className="ecommerce-box light-bg-primary"><i className="fa fa-heart" aria-hidden="true"></i></div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl="12" lg="12" md="6" className="box-col-6">
                    <Card className="o-hidden">
                      <CardBody>
                        <div className="media">
                          <div className="media-body">
                            <p className="f-w-500 font-roboto f-18">{"Amount in Wallet"}</p>
                            <div className="progress-box">
                              <h4 className="f-w-500 mb-0 f-26">{walletbalance == undefined ? '0' : walletbalance}</h4>
                            </div>
                          </div>
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

export default VendorEcommerce;