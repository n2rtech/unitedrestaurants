import React,{useState,useMemo,Fragment} from 'react';
import './css/header.css'
                      
const HeaderSocial = () => {

  return (
      <ul className="list-inline">
        <li>Find us on:</li>
        <li><a href={`/`} target="_blank"><i className="fa fa-facebook-square"></i></a></li>
        <li><a href={`/`} target="_blank"><i className="fa fa-twitter-square"></i></a></li>
        <li><a href={`/`} target="_blank"><i className="fa fa-google-plus-square"></i></a></li>
        <li><a href={`/`} target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
        <li><a href={`/`} target="_blank"><i className="fa fa-youtube-square"></i></a></li>
        <li><a href={`/`} target="_blank"><i className="fa fa-instagram"></i></a></li>
      </ul>
  );

}
export default HeaderSocial;
