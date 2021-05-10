import React from "react";

export default function Gif(props) {
  return (
    <div className="result-container">
      <p>Resultado de la búsqueda:</p>
      <div className="gifs-container">
        {props.gifs.map((gif, i) => {
          return (
            <div key={i}>
              <a href={gif.images.preview_webp.url}>
                <img className="gif" src={gif.images.preview_webp.url} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
