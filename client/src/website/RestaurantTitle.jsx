import React,{useState,useMemo,Fragment} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function RestaurantTitle() {

  const params = useParams();
  const id = `${params.id}`;

  const[vendorProfileData,setVendorProfileData] = useState({})
  const[vendorAboutBusiness,setVendorAboutBusiness] = useState('')
  const [showMore, setShowMore] = useState(false);

  useMemo(() => {

    axios.get(`/api/vendors/profile/${id}`)
    .then((result_data) => {
      setVendorProfileData(result_data.data);
      setVendorAboutBusiness(result_data.data.about_business);
    });

  },[])

  return (
    <>
    <h1>{vendorProfileData.business_name}</h1>
    <p className="Rdescription"> {showMore ? vendorAboutBusiness : `${vendorAboutBusiness.substring(0, 400)}`+'...'} <a onClick={() => setShowMore(!showMore)}>{showMore ? " Show Less" : ((vendorAboutBusiness && vendorAboutBusiness.length > 200) ? " Show More" : '')}</a></p>
      </>
  );
}


