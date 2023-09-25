import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeImg from './images/burger.png';
import { apilink } from "./apiUrl";
import axios from "axios";

export default function Landpage() {
  const [mnenulist, setMenulist] = useState([]);
  const [loader, setLoader] = useState(true)
  const [isloaded, setIsloaded] = useState(false)
  const getMenu = async () => {
    const menu = await axios.get(apilink).then(function (response) {
      setMenulist(response.data)
      setLoader(false)
      setIsloaded(true)
    }).catch(function (error) {
      // if (error.response) { 
      setLoader(false)
      setIsloaded(false);
      //  }

    });
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

            {
              (loader) ?
                <>
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </> : <>{
                  (isloaded) ?
                    <>
                      <div className="home-page-title">WHAT WE CAN GIVE TO OUR GUESTS</div>
                      {
                        (mnenulist.length > 0) ?
                          <>
                            <div className="home-page-menu-head">{mnenulist[0].menuitemname}</div>
                            <div className="home-page-menu-desc">{mnenulist[0].menuitemdesc}</div></>
                          :

                          <>
                            <div className="home-page-menu-head">Burger</div>
                            <div className="home-page-menu-desc">Burger is our all time special menu. You can order & get deliver at any time 24 X 7</div>
                          </>
                      }

                      <div className="home-page-more-btn"><Link to='menulist' className="more-btn">View more menu</Link></div>
                    </> : <>
                      {
                        (!isloaded) && <>
                          <div className="home-page-menu-desc" style={{ color: "red", backgroundColor: "white", textAlign: "center", borderRadius: "10px" }}> Sorry for the inconvinience caused. <br/>Some proplem to get data </div>
                        </>
                      }
                    </>
                }
                </>

            }

          </div>
        </div>
      </div>
    </div>
  </>
}