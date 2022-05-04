import React,{useState,useEffect} from 'react';
import './css/header.css'

const HeaderSocial = () => {
  const [logo, setLogo] = useState([]);
  const [socialdata, setSocialData] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
        async function getResult() {
          await fetch('/api/site-settings/getsettings' , config)
          .then(res => res.json())
          .then(
            (result) => {  
              setLogo('/api/uploads/site/'+result.logo);
              setSocialData(result);
            },
            (error) => {
              
            }
            )
        }
        getResult();
  }, []);
  return (
      <ul className="list-inline">
        <li>Find us on:</li>
        <li> <a href={`//${socialdata.facebook_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a></li>
        <li> <a href={`//${socialdata.twitter_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square"></i></a></li>
        <li> <a href={`//${socialdata.google_plus_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus-square"></i></a></li>
        <li> <a href={`//${socialdata.linkedin_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a></li>
        <li> <a href={`//${socialdata.instagram_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
      </ul>
  );

}
export default HeaderSocial;
