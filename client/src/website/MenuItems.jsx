import React,{useState,useMemo,Fragment} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'


export default function MenuItems() {

  const params = useParams();
  const id = `${params.id}`;

  const[menuItemsData,setMenuItemsData] = useState({})
  
  useMemo(() => {

    axios.get(`/api/menu-items/${id}`)
    .then((result_data) => {
      setMenuItemsData(result_data.data);
    });

  },[])

  
  return (
    <>
    {menuItemsData.content && menuItemsData.content.length ?
      <div className="details-left">
        <div className="menu-items">
          <h5>Menu Items</h5>
          <ul className="list-inline">
            <li dangerouslySetInnerHTML={{ __html: menuItemsData.content }} />
          </ul>
        </div>
      </div>
    : ''}
    </>
  );
}


