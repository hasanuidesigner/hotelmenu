import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeImg from './images/burger.png';
import { apilink } from "./apiUrl";
import axios from "axios";

export default function Landpage() {
  const [mnenulist, setMenulist] = useState([]);

  const getMenu = async () => {
    const menu = await axios.get(apilink+'/1');
    setMenulist(menu.data);
  }

  useEffect(() => {
    getMenu();
  }, []);

  return <> 
    <div className="home-body-bg">
      <div className="home-content-wrap">
        <div className="home-cnt-rht-out">
          <div className="home-cnt-rht">
            <img src={homeImg} alt="Food" />
          </div>
        </div>
        <div className="home-cnt-lft-out">
          <div className="home-cnt-lft">
            <div className="home-page-title">WHAT WE CAN GIVE TO OUR GUESTS</div>
             
                  <div className="home-page-menu-head">{mnenulist.menuitemname}</div>
                  <div className="home-page-menu-desc">{mnenulist.menuitemdesc}</div> 
            <div className="home-page-more-btn"><Link to='menulist' className="more-btn">View more menu</Link></div>
          </div>
        </div>
      </div>
    </div>
  </>
}