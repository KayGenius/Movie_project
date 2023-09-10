import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import axios from "axios";
import $ from "jquery";

const Loginmodal = () => {
  let { setJoinModal, setLoginModal, setUser } = useContext(Context);


  function Login() {
    if ($('.Id').val() !== "") {
      axios.post('api/login', { id: $('.Id').val(), pw: $('.Pw').val() }).then((result) => { if (result != undefined) { alert('로그인완료'); setUser(result.data[0]) };setLoginModal(0) })
    }
  }



  return (
    <div className="modal">
      <button
        className="modal-close"
        onClick={() => {
          return setLoginModal(0);
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

      <p className="modal-button-box">
        <button className="modal-button" onClick={Login}>Together us</button>
      </p>
    </div>
  );
};

export default Loginmodal;
