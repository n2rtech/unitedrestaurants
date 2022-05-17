import React,{useState,useEffect} from 'react';
import './css/header.css'
                      
const Logo = () => {
  const [logo, setLogo] = useState('');
  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+localStorage.getItem('token') }
    };
 
   fetch('/api/site-settings/getsettings' , config)
      .then(res => res.json())
      .then(
        (result) => {
          setLogo('/api/uploads/site/'+result.logo);
        },
        (error) => {
          
        }
      )

  }, []);

  const defaultlogo = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/assets/images/united-logo.png`;
  }


  return (
      <div className="Logo">
        <a href="/">
          <img src={logo} onError = {defaultlogo} alt="United Restaurants"/>
        </a>
      </div>
  );

}
export default Logo;
