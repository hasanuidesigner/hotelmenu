import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './topnavbar';
import Landpage from "./landpage";
import Menuadd from './menuadd';
import Menumanage from './menumanage';
import Menuupdate from './menuupdate'; 
import Viewmenuitem from "./viewmenu";
import Menulist from "./menulist";
import './App.css'

function App() { 

  return (
    <>
       
       <BrowserRouter basename='hotelmenu'>
        <Navbar/>
      <Routes>         
        <Route path="/" element={<Landpage/>} />
        <Route path="/menulist" element={<Menulist/>} />
        <Route path="/managemenu" element={<Menumanage/>} />
        <Route path="/menuadd" element={<Menuadd/>} />
        <Route path="/menuupdate/:id" element={<Menuupdate/>} />
        <Route path="/viewmenu/:id" element={<Viewmenuitem/>}/>
      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
