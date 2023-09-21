import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apilink } from "./apiUrl";

export default function Menuadd(){

    const [menudetails,SetMenuadd]=useState([]);
    const addref = useRef();
    const navigate = useNavigate();

    const handlechange = (e) =>{
       SetMenuadd((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const additem =async () =>{
        await axios.post(apilink,menudetails);
        addref.current.focus();
        navigate('/menulist');
    }
    return<>
       <div className="content-wrap form-cover-out">
        <h1 className="inner-page-head">Add menu items</h1>
        <div className="form-wrap">
        <form>
        <div className="form-control-group">
            <label>Menu name:</label>
            <input className="form-conrol" type='text' required name='menuitemname' ref={addref} placeholder="Enter food name" onChange={handlechange} />
        </div>
        <div className="form-control-group">
        <label>Menu Details:</label>
            <textarea className="form-conrol" type='text' name='menuitemdesc' maxLength="150" required placeholder="Enter food description" onChange={handlechange} />
        </div>
        <div className="form-control-group">
        <label>Menu price:</label>
            <input className="form-conrol" type='number' name='menuitemprice' required placeholder="Enter food price" onChange={handlechange} />
        </div>
        <div>
            <button type="button" className="form-btn" onClick={additem}>Add menu</button>
        </div>
        </form>
        </div>
        </div>
    </>
}