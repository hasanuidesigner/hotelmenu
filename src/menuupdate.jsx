import axios from "axios";
import { apilink } from "./apiUrl";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function Menuupdate(){

    const [menuitem,setMenuitem] = useState([]);
    const [menudetails,SetMenuadd]=useState([]);
    const navigate = useNavigate();
    const updateitem = async (id)=>{
        await axios.put(apilink+'/'+id,menudetails); 
        navigate('/managemenu');
    }
    const handlechange = (e) =>{
        e.preventDefault();
        SetMenuadd({...menudetails,[e.target.name]:e.target.value});
     }
    const getitem = async (id)=>{
      const edtitm =  await axios.get(apilink+'/'+id);
       setMenuitem(edtitm.data);
       SetMenuadd({...edtitm.data});
    }     
    const pathdir = useLocation();
    const pathid = pathdir.pathname.split('/')[2];
 
    useEffect(()=>{
        getitem(pathid);
    },[pathid]);

    return<>  
    {JSON.stringify(menuitem)} <br/>
    {JSON.stringify(menudetails)}
    <div className="content-wrap form-cover-out">
        <h1 className="inner-page-head">Edit menu items</h1>
        <div className="form-wrap">
        <form>
        <div className="form-control-group">
            <label className="lbl-shw">{menudetails.id}</label>
         </div>
        <div className="form-control-group">
            <label>Menu name:</label>
            <input className="form-conrol" type='text' name="menuitemname" required defaultValue={menudetails.menuitemname} placeholder="Enter food name" onChange={handlechange} /> 
        </div>
        <div className="form-control-group">
        <label>Menu Details:</label>            
            <textarea className="form-conrol" type='text' name="menuitemdesc" required maxLength="150" defaultValue={menudetails.menuitemdesc} placeholder="Enter food description" onChange={handlechange} />
        </div>
        <div className="form-control-group">
        <label>Menu price:</label>
            <input className="form-conrol" type='number' name="menuitemprice" required defaultValue={menudetails.menuitemprice} placeholder="Enter food price" onChange={handlechange} />
        </div>
        <div>
        <button className="form-btn" type="button" onClick={()=>updateitem(menudetails.id)}>Update item</button>
        </div>
        </form>
        </div>
        </div>
             


 
        
    </>
}