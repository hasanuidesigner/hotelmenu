import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeImg from './images/burger.png';
import { apilink } from "./apiUrl";
import axios from "axios";


export default function Viewmenuitem() {
  const [mnenumanage,setMenumanage] = useState({});

  const getMenu = async (id)=>{
    const menu =await axios.get(apilink+'/'+id);
    setMenumanage(menu.data);    
  }

  const pathdir = useLocation();
    const pathid = pathdir.pathname.split('/')[2]; 

  useEffect(()=>{
    getMenu(pathid);
  },[pathid]);

  return <> 
    <div className="home-body-bg">
          <div className="home-content-wrap">
          <div className="home-cnt-rht-out">
              <div className="home-cnt-rht">
               <img src={homeImg} alt="Food"/>
              </div>
            </div>
            <div className="home-cnt-lft-out">
              <div className="home-cnt-lft">
                <div className="home-page-title">WHAT WE CAN GIVE TO OUR GUESTS</div>
                <div className="home-page-menu-head">{mnenumanage.menuitemname}</div>
                <div className="home-page-menu-desc">{mnenumanage.menuitemdesc}</div>
                <div className="home-page-more-btn"><Link to='/managemenu' className="more-btn">Back to manage menu</Link></div>
              </div>
            </div>
          </div>
    </div>
  </>
}