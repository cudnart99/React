import React from "react";

export default function Result(props) {
  function setStyle() {
    return {
      color: props.color,
      borderColor: props.color,
      fontSize: props.fontSize,
    };
  }

  return (
    <>
      <div>
        Size : {props.fontSize} - Color : {props.color}
      </div>
      <div style={setStyle()} id="content" className="m-10">
        Hello
      </div>
    </>
  );
}
