import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeImg from './images/burger.png';
import { apilink } from "./apiUrl";
import axios from "axios";

export default function Landpage() {
  const [mnenulist, setMenulist] = useState([]); 
  const getMenu = async () => {
    const menu = await axios.get(apilink);
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
            {
              (mnenulist.length > 0) ?
                <>
                  <div className="home-page-menu-head">{mnenulist[0].menuitemname}</div>
                  <div className="home-page-menu-desc">{mnenulist[0].menuitemdesc}</div>
                </> :
                <>
                  <div className="home-page-menu-head">Burger</div>
                  <div className="home-page-menu-desc">Burger is our all time special menu. You can order & get deliver at any time 24 X 7</div>
                </>
            }
            <div className="home-page-more-btn"><Link to='menulist' className="more-btn">View more menu</Link></div>
          </div>
        </div>
      </div>
    </div>
  </>
}