import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeImg from './images/burger.png';
import { apilink } from "./apiUrl";
import axios from "axios";


export default function Viewmenuitem() {
  const [mnenumanage, setMenumanage] = useState({});
  const [isloaded, setIsloaded] = useState(true)
  const getMenu = async (id) => {
    await axios.get(apilink + '/' + id).then(function (response) {
      setMenumanage(response.data)
      setIsloaded(false)
    });
  }

  const pathdir = useLocation();
  const pathid = pathdir.pathname.split('/')[2];

  useEffect(() => {
    getMenu(pathid);
  }, [pathid]);

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
              (isloaded) ? <>
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </> : <>{
                (mnenumanage) ?
                  <>
                    <div className="home-page-menu-head">{mnenumanage.menuitemname}</div>
                    <div className="home-page-menu-desc">{mnenumanage.menuitemdesc}</div>
                  </> :
                  <>
                    <div className="home-page-menu-head">Burger</div>
                    <div className="home-page-menu-desc">Burger is our all time special menu. You can order & get deliver at any time 24 X 7</div>
                  </>
              }</>
            }
            <div className="home-page-more-btn"><Link to='/managemenu' className="more-btn">Back to manage menu</Link></div>
          </div>
        </div>
      </div>
    </div>
  </>
}