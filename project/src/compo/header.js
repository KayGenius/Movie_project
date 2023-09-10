import React, { useContext } from "react";
import { Context } from "../App";

const Header = () => {
  let { setJoinModal, setLoginModal,User } = useContext(Context);
        console.log(User)
  return (


    <div className="header">
      <div className="header-left">Genius`s movieTrip</div>

      {User === ""?
      <div className="header-right">
        <button
          onClick={() => {
            setLoginModal(1);setJoinModal(0)
          }}
        >
          Log in
        </button>
        <button
          onClick={() => {
            setJoinModal(1);setLoginModal(0)
          }}
        >
          Sign up
        </button>
      </div>
      : <div className="header-right">
          <p className="header-right-welcome">{User.user_nick}님 환영합니다!</p>
    </div>
        }

    </div>
          


  );
};

export default Header;
