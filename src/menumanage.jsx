import React, { useEffect, useState } from "react";
import { apilink } from "./apiUrl";
import { EyeFill, PencilSquare, Trash2Fill } from "react-bootstrap-icons"
import axios from 'axios';

export default function Menumanage(){
     
    const [menumanage,setMenumanage] = useState([]);

    const getMenu = async ()=>{
      const menu =await axios.get(apilink);
      setMenumanage(menu.data);
    }

    const removeitem = async (id) =>{
        let deleteconfirm = window.confirm('Are you sure to delete the item ID number ' + id + ' in menu?');
        if (deleteconfirm)
        {
       await axios.delete(apilink+id);
       window.location.href='/managemenu';
    }
    }

    const viewitem = (id) =>{
        window.location.href='/viewmenu/'+id;
    }

    const edititem = (id)=>{
        window.location.href= '/menuupdate/'+id;
    }

    useEffect(()=>{
        getMenu();
    },[])

    return<>
<div className="content-wrap form-cover-out tbl-list-wrap">
        <h1 className="inner-page-head">Manage menu items</h1>
<table className="table table-striped table-bordered menu-table">
    <thead>
      <tr>
      <th>Menu Id</th>
        <th>Menu Name</th>
        <th>Menu Description</th>
        <th>Menu Price (in Rs.)</th>
        <th colSpan={2}>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
    menumanage.map((itm)=>
      <tr key={itm.id}>
        <td>{itm.id}</td>
        <td>{itm.menuitemname}</td>
        <td> {itm.menuitemdesc}</td>
        <td>{itm.menuitemprice}</td>
        <td colSpan={2}>
           
              <span  className="view-item"  title="View item" onClick={()=>viewitem(itm.id)}><EyeFill/> </span>
              <span  className="edit-item"  title="Edit item" onClick={()=>edititem(itm.id)}><PencilSquare/></span>
              <span  className="remove-item"  title="Remove item" onClick={()=>removeitem(itm.id)}><Trash2Fill/></span>
              
</td>        
      </tr>    
      )}   
    </tbody>
  </table>
  </div>
    </>
}