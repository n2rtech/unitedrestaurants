import React,{useState,useMemo} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const BusinessGallery = () => {


  return (
      <Carousel autoPlay interval="3000" infiniteLoop showArrows="true">
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/h5.jpeg`}/>
        </div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/h5.jpeg`}/>
        </div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/h5.jpeg`}/>
        </div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/h5.jpeg`}/>
        </div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/h5.jpeg`}/>
        </div>
      </Carousel>
  );
}

export default BusinessGallery;