import React from 'react'
import {Routes,Route,Link}  from 'react-router-dom'
import Navbar from '../compo/navbar'


const First = (props) => {
  return (
  
    <div className='movie-box'>
    <div>
           <img src={`/img/img1.jpg`} className='movie-img'></img>
   </div>

   <div className='movie-content'>
   <Navbar settitle={props.settitle}></Navbar>
   </div>
</div>
  
  )
}

export default First
