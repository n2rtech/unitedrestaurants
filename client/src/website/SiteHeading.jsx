import React,{useState,useMemo,Fragment} from 'react';
import './css/style.css'
                      
const SiteHeading = () => {

  return (
      <div className="mainCaption">
        <img src={`${process.env.PUBLIC_URL}/assets/images/united-text.png`} alt="United Restaurants"/>
        <h3>Discounts and Advertising Platform</h3>
        <h4>Save more, directly order from the store</h4>
      </div>
  );

}
export default SiteHeading;
