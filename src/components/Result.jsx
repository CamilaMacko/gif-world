import React from "react";

import Gifs from "./Gifs";
import Error from "./Error";

export default function Result(props) {
  return (
    <>
      {props.gifSearch === false && props.notFound === false && (
        <Gifs gifs={props.gifs} />
      )}
      <Error
        notFound={props.notFound}
        inition={props.inition}
        gifSearch={props.gifSearch}
      />
    </>
  );
}