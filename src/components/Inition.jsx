import React from "react";

export default function Inition(props) {
  return (
    <>
      {props.inition && (
        <div>
          <div className="cloud-container">
            <div className="cloud">
              <div className="cloud-fondo1"></div>
              <div className="cloud-fondo2"></div>
              <div className="cloud"></div>
              <span className="shadow"></span>
            </div>
            <div className="cloud-text">
              <p>Todos los gifs que queres,</p>
              <p>en un solo lugar.</p>
              <div className="cloud-text-shadow"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}