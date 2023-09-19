import React, { useEffect, useState } from "react";
import { apilink } from "./apiUrl";
import axios from 'axios';
import homeImg from './images/burger.png';

export default function Menulist(){
     
    const [menulist,setMenulist] = useState([]);
    const [srchmenu,setSrchmenu] = useState('');

    const getMenu = async ()=>{
      const menu =await axios.get(apilink);
      setMenulist(menu.data.hotelmenu);
    }

    useEffect(()=>{
        getMenu();
    },[])

    return<>
<div className="menu-gallery-wrap">
       <div className="list-ssrch-wrap"><h1 className="inner-page-head">List of menu items</h1> <span><input className="search-input" placeholder="Search menu item..." onChange={(e)=>setSrchmenu(e.target.value)} /></span></div> 
        <div className="menu-gallery-wrap-in">
        {
            menulist.filter((item)=>item.menuitemname.toLowerCase().includes(srchmenu)).map((item,key)=>(
                <div key={item.id} className="menu-gallery-item">
                  {/* <div className="thumb-img"><img src={homeImg} alt="Food"/></div> */}
                  <div>{item.menuitemname}</div>
                  <div>{item.menuitemdesc}</div>
                  <div>{item.menuitemprice}</div>
                 </div>
            ))
        }
        </div>
  </div>
    </>
}