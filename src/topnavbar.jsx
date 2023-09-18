import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
return<>
          <div className="navbar-wrap">
         <NavLink to='/' >Home</NavLink> |
         <NavLink to='/menulist'>Menulist</NavLink> |
         <NavLink to='/managemenu'>Manage Menu</NavLink> |
        <NavLink to='/menuadd'>Menu Add</NavLink>
        {/* <NavLink to={'/menuupdate/1'}>Menu Update</NavLink> */}
        </div>
</>
}

