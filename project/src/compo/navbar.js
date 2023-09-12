import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import React from 'react'
import axios from "axios";
import { fas } from "@fortawesome/free-solid-svg-icons";




const Navbar = (props) => {

  let { User,Search,setSearch } = useContext(Context)

  return (
    <div className='navbar'>
      <div className='navbar-inputbox'>
        <input className='navbar-input' placeholder='제목을 입력하세요' onChange={(e)=>{if(e.target.value == undefined){return(setSearch(e.target.value))}}} ></input>

        <button class='navbar-input-btn' onClick={() => {
          if (User.user_id !== undefined) {
            return props.settitle(document.querySelector('.navbar-input').value)
          } else {
            return (alert('로그인하세요'))
          }

        }}>
          <img className='navbar-input-img' src='/img/search.png'></img>
        </button>

      </div>
    </div >
  )
}

export default Navbar;
