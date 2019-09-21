import React from "react";

function SquareBox(props) {
  return (
    <button className="box" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default SquareBox;
