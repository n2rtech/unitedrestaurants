import React,{useState,useMemo,Fragment} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function Offers() {

  
  const params = useParams();
  const id = `${params.id}`;

  const[couponsData,setCouponsData] = useState([])
  
  useMemo(() => {

    axios.get(`/api/vendor-coupons/list/${id}`)
    .then((result_data) => {
      setCouponsData(result_data.data);
    });


  },[])

  return (
    <>
    {(couponsData && couponsData.length) ?
      <div className="details-left">
        <div className="menu-items offers">
          <h5>Deals/Offer</h5>
          <ul className="list-unstyled">
          {couponsData.map((coupons , i ) => (
            <li key={i}><i className="fa fa-check"></i> {coupons.deal_name} : {coupons.deal_description}</li> 
          ))}
          </ul>
        </div>
      </div>
      : '' }
    </>
  );
}


