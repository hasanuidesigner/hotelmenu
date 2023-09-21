import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
return<>
          <div className="navbar-wrap">           
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/' ><i className="bi bi-stars"></i> Glitter star restaurant</NavLink>
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list"></i>
    </button>
    <div className="collapse navbar-collapse drop-mbl-menu" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <NavLink to='/' className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='menulist' className="nav-link">Menulist</NavLink>
        </li> 
        <li className="nav-item">
        <NavLink to='managemenu' className="nav-link">Manage Menu</NavLink>
        </li> 
        <li className="nav-item">
        <NavLink to='menuadd' className="nav-link">Menu Add</NavLink>
        </li> 
      </ul>
      
    </div></div>
  </div>
</nav>

        </div>
</>
}

