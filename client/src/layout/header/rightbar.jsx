import React, { Fragment, useState, useEffect } from 'react';
import man from '../../assets/images/dashboard/profile.jpg'
import { FileText, LogIn, Mail, User, MessageSquare, Bell, Minimize, Search, ShoppingCart, Minus, Plus, X } from 'react-feather';
import { useHistory } from 'react-router-dom'
import { firebase_app } from '../../data/config'
import {useAuth0} from '@auth0/auth0-react'
import Bookmark from "../../layout/bookmark"
import {Link} from 'react-router-dom'
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';

import {English,Deutsch,Español,Français,Português,简体中文,Notification,DeliveryProcessing,OrderComplete,TicketsGenerated,DeliveryComplete,CheckAllNotification,ViewAll,MessageBox,EricaHughes,KoriThomas,Admin,Account,Inbox,Taskboard,LogOut,AinChavez,CheckOut,ShopingBag,OrderTotal,GoToShopingBag} from '../../constant'

import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';
import pt from '../../assets/i18n/pt.json';
import fr from '../../assets/i18n/fr.json';
import du from '../../assets/i18n/du.json';
import cn from '../../assets/i18n/cn.json';
import ae from '../../assets/i18n/ae.json';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';

setTranslations({ en, es, pt, fr, du, cn, ae });
setDefaultLanguage('en');
setLanguageCookie();

const Rightbar = (props) => {    

  
  const history = useHistory();
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('')
  const [searchresponsive, setSearchresponsive] = useState(false)
  const [langdropdown, setLangdropdown] = useState(false)
  const [moonlight, setMoonlight] = useState(false)
  const [selected, setSelected] = useState("en")
  const [cartDropdown, setCartDropDown] = useState(false)
  const [notificationDropDown, setNotificationDropDown] = useState(false)
  const [chatDropDown, setChatDropDown] = useState(false)
  
  // auth0 profile
  const {logout} = useAuth0()
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"))

  const handleSetLanguage = (key) => {
    setLanguage(key);
    setSelected(key)
  };

  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || man);
    setName(localStorage.getItem('Name'))
    if(localStorage.getItem("layout_version") === "dark-only"){
      setMoonlight(true)
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

  const RedirectToChats = () => {
    history.push(`${process.env.PUBLIC_URL}/app/chat-app`)
  }

  const RedirectToCart = () => {
    history.push(`${process.env.PUBLIC_URL}/app/ecommerce/cart`)
  }

  const UserMenuRedirect = (redirect) => {
    history.push(redirect)
  }

  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.add("open");
      document.querySelector(".more_lang").classList.remove("active");
    } else {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.remove("open");
    }
  }

  const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language)
    } else {
      setLangdropdown(!language)
    }
  }

  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light)
      document.body.className = "light"
      localStorage.setItem('layout_version', 'light');
    } else {
      setMoonlight(!light)
      document.body.className = "dark-only"
      localStorage.setItem('layout_version', 'dark-only');
    }
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
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile`)}><User /><span>{Account} </span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/email-app`)}><Mail /><span>{Inbox}</span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/todo-app/todo`)}><FileText /><span>{Taskboard}</span></li>
              <li onClick={authenticated ? Logout_From_Auth0 : Logout_From_Firebase}><LogIn /><span>{LogOut}</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>

  );
}
export default translate(Rightbar);
