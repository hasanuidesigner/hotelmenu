import React, { useEffect, useState } from "react";
import { apilink } from "./apiUrl";
import axios from 'axios';
//import homeImg from './images/burger.png';

export default function Menulist() {

  const [menulist, setMenulist] = useState([]);
  const [srchmenu, setSrchmenu] = useState('');

  const getMenu = async () => {
    const menu = await axios.get(apilink);
    setMenulist(menu.data);
  }

  useEffect(() => {
    getMenu();
  }, [])

  return <>
    <div className="menu-gallery-wrap">
      <div className="list-ssrch-wrap">
        <h1 className="inner-page-head">List of menu items</h1>
        {  (menulist.length > 0) &&
        <span><input className="search-input" placeholder="Search menu name..." onChange={(e) => setSrchmenu(e.target.value)} /></span> }
      </div>

      <div className="menu-gallery-wrap-in">
        <div className="menu-gallery-head">
          <div>Item name</div>
          <div>About item</div>
          <div>Price (in $)</div>
        </div> 
        {         
          (menulist.length > 0 && menulist.filter((item) => item.menuitemname.toLowerCase().includes(srchmenu)).length > 0) ?
            menulist.filter((item) => item.menuitemname.toLowerCase().includes(srchmenu)).map((item, key) => (
              <div key={item.id} className="menu-gallery-item">
                {/* <div className="thumb-img"><img src={homeImg} alt="Food"/></div> */}
                <div>{item.menuitemname}</div>
                <div>{item.menuitemdesc}</div>
                <div>{item.menuitemprice}</div>
              </div>
            )) : <div className="no-item-msg">No items in table</div>
        }
      </div>

    </div>
  </>
}