import React from "react";
import { useState } from "react";

export default function ColorPicker(props) {
  // eslint-disable-next-line no-unused-vars
  const [color, setcolor] = useState({
    colors: ["red", "green", "blue", "#ccc"],
  });

  function showColor(Color) {
    return {
      backgroundColor: Color
    };
  }

  function setActiveColor(Color){
    props.onReceiveColor(Color);
  }

  var elmColors = color.colors.map((Color, index) => {
    return (
      <span
        style={showColor(Color)}
        className={props.color === Color ? "active boxColor" : "boxColor"}
        key={index}
        onClick={() => setActiveColor(Color)}
      ></span>
    );
  });

  return (
    <>
      <div>Color Picker</div>
      <div>{elmColors}</div>
    </>
  );
}
