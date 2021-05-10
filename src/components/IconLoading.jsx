import React from "react";
import iconLoading from "../resources/svg/loading.svg";

export default function IconLoading(props) {
  return (
    <>
      {props.gifSearch && (
        <div className="loading-container">
          <img
            width="100px"
            height="100px"
            src={iconLoading}
            alt="icon loading"
          />
        </div>
      )}
    </>
  );
}