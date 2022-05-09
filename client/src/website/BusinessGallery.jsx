import React,{useState,useMemo} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios'
import {useParams} from 'react-router-dom'
import ShowMoreText from "react-show-more-text";

const BusinessGallery = () => {

  const params = useParams();
  const id = `${params.id}`;

  const[galleryData,setGalleryData] = useState([])

  useMemo(() => {

    axios.get(`/api/gallery/list/${id}`)
    .then((getData) => {
      setGalleryData(getData.data);                 
    });

  },[])

  return (
    <>
    { (galleryData && galleryData.length) ? 
      <Carousel autoPlay interval="3000" infiniteLoop showArrows="true">
      
      { (galleryData && galleryData.length) ? (galleryData).map((gallery , i) => (
        <div key={i}>
            <img src={`${process.env.PUBLIC_URL}/api/uploads/gallery/${gallery.image}`}/>
        </div>
        )) : ''}

      </Carousel>
      :
      <div>
            <img src={`${process.env.PUBLIC_URL}/api/uploads/banner/thumbnail.jpg`}/>
        </div>
      }
      </>
  );
}

export default BusinessGallery;