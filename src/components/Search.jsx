import React, { useState, useEffect } from "react";

import photoSearch from "../resources/svg/photo-header.svg";

import useInputData from "../hooks/useInputData";

import InputSearch from "./InputSearch";
import ButtonSearch from "./ButtonSearch";
import IconLoading from "./IconLoading";
import Inition from "./Inition";
import Result from "./Result";

export default function Search(props) {
  const [inition, setInition] = useState(true); //main page image
  const [autoText, setAutoText] = useState([]);
  const [gifSearch, setGifSearch] = useState(false);
  const [gifs, setGifs] = useState([]); //Gif Array
  const [notFound, setNotFound] = useState(false);
  const [position, setPosition] = useState(-1);
  const [on, setOn] = useState([]);

  let inputGif = useInputData("");

  const moveMouse = () => {
    setPosition(-1);
    setOn([]);
  };

  const tecla = (e) => {
    if (e.key === "Enter") {
      inputGif.setInputChange(false);
      setGifSearch(true);
      setInition(false);
      setPosition(-1);
      setOn([]);
      if (on.length !== 0) {
        inputGif.setInputData(on.name);
      }
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      let cantidad = autoText.length;
      let modificador;

      if (e.key === "ArrowDown") {
        modificador = 1;
        if (position >= cantidad - 1) {
          setPosition(cantidad - 1);
          setOn(autoText[cantidad - 1]);
        }
        if (position <= 0) {
          setPosition(0);
          setOn(autoText[0]);
        }
      }
      if (e.key === "ArrowUp") {
        modificador = -1;
        if (position >= cantidad - 1) {
          setPosition(cantidad - 2);
          setOn(autoText[cantidad - 2]);
        }
        if (position <= -1) {
          setPosition(-1);
          setOn([]);
        }
      }
      if (-1 < position && position < cantidad - 1) {
        let n = position + modificador;
        setPosition(n);
        setOn(autoText[n]);
      }
    }
  };

  const clickCross = () => {
    inputGif.setInputData("");
    setAutoText([]);
    setPosition(-1);
    setOn([]);
  };

  const buttonClickEvent = (e) => {
    e.preventDefault();
    setGifSearch(true);
    inputGif.setInputChange(false);
    setInition(false);
    setAutoText([]);
    setPosition(-1);
    setOn([]);
  };

  useEffect(() => {
    if (inputGif.inputChange) {
      setPosition(-1);
      setOn([]);
    }
    if (inputGif.inputData.length !== 0 && inputGif.inputData.length < 50) {
      let petition = fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=dkm06sJUkuxK4rSHz6Qvc7LMHHFk2rNb&q=${inputGif.inputData}&limit=5&offset=0`
      );
      petition
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data === undefined) {
            setAutoText([]);
          } else {
            setAutoText(data.data);
          }
        });
    }
  }, [inputGif.inputData]);

  useEffect(() => {
    if (gifSearch) {
      setPosition(-1);
      setOn([]);
      setTimeout(() => {
        if (gifSearch) {
          let petition = fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=dkm06sJUkuxK4rSHz6Qvc7LMHHFk2rNb&q=${inputGif.inputData}&limit=12&offset=0&rating=g&lang=en`
          );
          petition
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              if (data === undefined) {
                setNotFound(true);
                inputGif.setInputData("");
              } else {
                setGifs(data.data);
                setGifSearch(false);
                inputGif.setInputChange(false);
              }
            });
        }
      }, 3000);
    }
    if (gifs.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [gifSearch]);

  return (
    <div>
      <div className="search-container display">
        <p className="search-title">
          ¡Inspirate y busca los mejores <span>GIFS</span>!
        </p>
        <img width="470px" src={photoSearch} alt="img search" />

        <form className="display" onSubmit={buttonClickEvent}>
          <InputSearch
            inputGif={inputGif}
            autoText={autoText}
            gifSearch={gifSearch}
            setGifSearch={setGifSearch}
            setInition={setInition}
            clickCross={clickCross}
            mode={props.mode}
            tecla={tecla}
            position={position}
            on={on}
            moveMouse={moveMouse}
          />
          <ButtonSearch buttonClickEvent={buttonClickEvent} />
        </form>
      </div>

      <IconLoading gifSearch={gifSearch} />

      <Inition inition={inition} />

      <Result
        notFound={notFound}
        inition={inition}
        gifSearch={gifSearch}
        gifs={gifs}
      />
    </div>
  );
}
