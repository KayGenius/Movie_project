import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import $ from "jquery";
import axios from "axios";
const Modal = (props) => {
  let { setJoinModal } = useContext(Context);



function Join(){
    if ($('.Id').val() !== "") {
      console.log(' 안녕')
      axios.post('api/signup', { id: $('.Id').val(), pw: $('.Pw').val(), nick: $('.Nick').val() }).then((result)=>{if(result != undefined){alert('가입완료')}})
    }
  }




  return (
    <div className="modal">
      <button
        className="modal-close"
        onClick={() => {
          return setJoinModal(0);
        }}
      >
        X
      </button>
      <p>
        ID <br />
        <input className="modal-input Id" />
      </p>
      <p>
        PW <br />
        <input className="modal-input Pw" type="password" />
      </p>
      <p>
        NickName <br />
        <input className="modal-input Nick" />
      </p>

      <p className="modal-button-box">
        <button className="modal-button" type='submit'  onClick={Join}>Join</button>
      </p>
    </div>
  );
};

export default Modal;
