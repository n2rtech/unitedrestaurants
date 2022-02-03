import React, { Fragment, useState, useMemo } from 'react';
import man from '../../assets/images/dashboard/profile.jpg'
import { LogIn } from 'react-feather';
import { useHistory } from 'react-router-dom'
import { firebase_app } from '../../data/config'
import {useAuth0} from '@auth0/auth0-react'
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  translate,
} from 'react-switch-lang';

import {LogOut} from '../../constant'

import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';
import pt from '../../assets/i18n/pt.json';
import fr from '../../assets/i18n/fr.json';
import du from '../../assets/i18n/du.json';
import cn from '../../assets/i18n/cn.json';
import ae from '../../assets/i18n/ae.json';

setTranslations({ en, es, pt, fr, du, cn, ae });
setDefaultLanguage('en');
setLanguageCookie();

const Rightbar = (props) => {    

  
  const history = useHistory();
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('')
  
  // auth0 profile
  const {logout} = useAuth0()
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"))

  useMemo(() => {
    setProfile(localStorage.getItem('profileURL') || man);
    setName(localStorage.getItem('Name'))
    if(localStorage.getItem("layout_version") === "dark-only"){
     
    }
  }, []);

  const Logout_From_Firebase = () => {
    localStorage.removeItem('profileURL')
    localStorage.removeItem('token');
    firebase_app.auth().signOut()
    history.push(`${process.env.PUBLIC_URL}/login`)
  }

  const  Logout_From_Auth0 = () =>  {
    localStorage.removeItem("auth0_profile")
    localStorage.setItem("authenticated",false)
    history.push(`${process.env.PUBLIC_URL}/login`)
    logout()
  }

  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-header p-0">
        <ul className="nav-menus">
          <li className="profile-nav onhover-dropdown p-0">
            <div className="media profile-media">
              <img className="b-r-10" src={authenticated ? auth0_profile.picture : profile} alt="" />
              <div className="media-body"><span>{authenticated ? auth0_profile.name :  name}</span>
                <p className="mb-0 font-roboto">{localStorage.getItem("role")} <i className="middle fa fa-angle-down"></i></p>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              <li onClick={authenticated ? Logout_From_Auth0 : Logout_From_Firebase}><LogIn /><span>{LogOut}</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>

  );
}
export default translate(Rightbar);
