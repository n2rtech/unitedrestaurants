import React,{useState,useMemo,Fragment} from 'react';
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
        <div className="menu-items offers">
          <h5>Items for Sale</h5>
          <ul className="list-unstyled">
          <div dangerouslySetInnerHTML={{ __html: saleItemsData.content }} />
          </ul>
        </div>
      </div>
      : '' }
    </>
  );
}


