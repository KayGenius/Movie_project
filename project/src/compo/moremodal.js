import React, { useContext, useEffect } from "react";
import { Context } from "../App";



const MoreModal = () => {
    let {data,setMoreModal} =useContext(Context)

  return (
    <div className="moremodal_box">
            
            <p><button className='moremodal_btn'onClick={()=>setMoreModal(0)}>X</button></p>
            <h2>줄거리</h2>
            <p className="moremodal_content">{data.overview}</p>   
    </div>
  );
};

export default MoreModal;
