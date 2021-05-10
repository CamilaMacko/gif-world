import React from "react";

import cross from "../resources/svg/cancel.svg";

export default function InputSearch(props) {
  return (
    <div onKeyDown={props.tecla} className="search-input">
      <input
        className={
          props.mode
            ? "user-input dark-text-color"
            : "user-input light-text-color"
        }
        value={props.inputGif.inputData}
        onChange={props.inputGif.manageChange}
        type="text"
        placeholder="Busca gifs"
      />
      {props.inputGif.inputData.length > 0 && (
        <img
          onClick={props.clickCross}
          className="cross"
          src={cross}
          alt="cross"
        />
      )}

      {props.autoText.length !== 0 &&
        props.inputGif.inputData.length > 0 &&
        props.gifSearch === false &&
        props.inputGif.inputChange && (
          <div
            className={
              props.mode
                ? "autocomplete-container-dark"
                : "autocomplete-container-light"
            }
          >
            <div onMouseMove={props.moveMouse}>
              {props.autoText.map((autoText, i) => {
                const manejar = () => {
                  props.inputGif.setInputChange(false);
                  props.inputGif.setInputData(autoText.name);
                  props.setGifSearch(true);
                  props.setInition(false);
                };
                return (
                  <p
                    key={i}
                    className={
                      props.on === autoText
                        ? `position ${
                            props.mode ? "position-dark" : "position-light"
                          }`
                        : null
                    }
                    onClick={manejar}
                  >
                    {autoText.name}
                  </p>
                );
              })}
            </div>
          </div>
        )}
    </div>
  );
}
