import React from "react";

import logo from "../resources/svg/logo.svg";

export default function Header(props) {
  return (
    <div className="header-container display">
      <img src={logo} alt="logo" />
      <button
        onClick={props.changeMode}
        className={props.mode ? "header-button dark" : "header-button light"}
      >
        Modo {props.mode ? "Light" : "Dark"}
      </button>
    </div>
  );
}