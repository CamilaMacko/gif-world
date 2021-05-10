import React from "react";
import iconSearch from "../resources/svg/icon-search.svg";

export default function ButtonSearch(props) {
  return (
    <button onClick={props.buttonClickEvent} className="search-button">
      <img width="27px" src={iconSearch} alt="icon search" />
    </button>
  );
}