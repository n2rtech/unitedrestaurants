import React,{useState,useMemo,Fragment} from 'react';
import './css/header.css'
                      
const Logo = () => {

  return (
      <div className="Logo">
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/united-logo.png`} alt="United Restaurants"/>
        </a>
      </div>
  );

}
export default Logo;
