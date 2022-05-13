import React,{useState,useMemo,Fragment} from 'react';
import { Row, Col} from 'reactstrap'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function SaleItems() {

  const params = useParams();
  const id = `${params.id}`;

  const[saleItemsData,setSaleItemsData] = useState({})

  useMemo(() => {

    axios.get(`/api/sale-items/${id}`)
    .then((result_data) => {
      setSaleItemsData(result_data.data);
    });

  },[])

  return (
    <>
    {saleItemsData.content && saleItemsData.content.length ?
      <div className="details-left">
        <div className="menu-items newSaleItems">
          <h5>Items for Sale</h5>
          <Row>
            <Col sm="4">
              <div className="saleBox">
              <img src={`https://unitedrestaurants.com/api/uploads/banner/banner_1652102377378.jpeg`} style={{ width: "190px" }} />
                <h3>Kitchen Items & Crockery</h3>
                <p>Proin dapibus turpis vitae magna accumsan vitae molestie enim elementum quisque eget leo dictum elementum est id lobortis sapien vestibulum id sem</p>
              </div>
            </Col>
            <Col sm="4">
              <div className="saleBox">
              <img src={`https://unitedrestaurants.com/api/uploads/banner/banner_1652102377378.jpeg`} style={{ width: "190px" }} />
                <h3>Kitchen Items & Crockery</h3>
                <p>Proin dapibus turpis vitae magna accumsan vitae molestie enim elementum quisque eget leo dictum elementum est id lobortis sapien vestibulum id sem</p>
              </div>
            </Col>
            <Col sm="4">
              <div className="saleBox">
              <img src={`https://unitedrestaurants.com/api/uploads/banner/banner_1652102377378.jpeg`} style={{ width: "190px" }} />
                <h3>Kitchen Items & Crockery</h3>
                <p>Proin dapibus turpis vitae magna accumsan vitae molestie enim elementum quisque eget leo dictum elementum est id lobortis sapien vestibulum id sem</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      : '' }
    </>
  );
}


