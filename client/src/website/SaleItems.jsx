import React,{useState,useEffect} from 'react';
import { Row, Col} from 'reactstrap'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function SaleItems() {

  const params = useParams();
  const id = `${params.id}`;

  const[saleItemsData,setSaleItemsData] = useState([])

  useEffect(() => {

    axios.get(`/api/sale-items/${id}`)
    .then((result_data) => {
      setSaleItemsData(result_data.data);
    });

  },[])

  console.log("Sales Items", saleItemsData.length);

  return (
    <>
    {saleItemsData && saleItemsData.length > 0 ?
      <div className="details-left">
        <div className="menu-items newSaleItems">
          <h5>Items for Sale</h5>
          <Row>
            {saleItemsData && saleItemsData.map((item,index) => (
                <Col sm="4" key = {index}>
                <div className="saleBox">
                  { item.image  ?   <img src={`http://localhost:3000/api/uploads/salesitems/${item.image}`} style={{ width: "190px" }} /> : 
                  
                  <img src={`https://unitedrestaurants.com/api/uploads/banner/thumbnail.jpg`} style={{ width: "190px" }} /> }
               
                  <h3>{item.name}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      : '' }
    </>
  );
}


