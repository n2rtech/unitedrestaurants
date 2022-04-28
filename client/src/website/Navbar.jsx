import React,{useState,useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './css/navbar.css'
import axios from 'axios';

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [menusData, setMenusData] = useState([]);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    useEffect(() => {

      (async () => {
        axios.get(`/api/categories/listAndSubCategory`)
        .then((result_data) => {
          const result = result_data.data;
          setMenusData(result);
        }); 
      })();
      

    }, []);

    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    const addDefaultSrc = (ev) => {
      ev.target.src = `${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`;
    }


    return (
    <header className="header__middle">
      <div className="header__middle__menus">
          <nav className="main-nav " >
            {isResponsiveclose === true ? <> 
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
            </> : <> 
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
            </>}
          <ul className={boxClass.join(' ')}>
            {menusData && menusData.length ? menusData.map((menu,i) => (
              <li key={i} onClick={toggleSubmenu} activeclassname='is-active' className="menu-item sub__menus__arrows" > 
                <a href={`${process.env.PUBLIC_URL}/BusinessListing/${menu.id}`}> 
                  <img style={{height:"50px"}} onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/categories/${menu.image}`} alt="Menu-Icon"/> 
                  {menu.name} 
                  {menu.children && menu.children.length ? <FiChevronDown /> : ''  }
                </a>
                {menu.children && menu.children.length ?
                  <ul className={boxClassSubMenu.join(' ')} > 
                  {menu.children.map((submenu,index) => (
                    <li key={index} ><a onClick={toggleClass} activeclassname='is-active'  href={`${process.env.PUBLIC_URL}/BusinessListing/${submenu.id}`}> {submenu.name} </a> </li>
                    ))}
                  </ul>
                  : '' 
                }
              </li>
            ))
            : '' }              
          </ul>
        </nav>     
      </div>   
    </header>
    )
}
export default Navbarmenu;