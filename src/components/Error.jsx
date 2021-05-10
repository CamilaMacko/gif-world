import React from "react";

export default function Error(props) {
  return (
    <>
      {props.notFound && props.inition === false && props.gifSearch === false && (
        <div className="container-error">
          <div className="error">
            <div>
              <p>Lo siento :( ,</p>
              <p>no se han encontrado resultados para tu búsqueda.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}