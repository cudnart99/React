import React from "react";

export default function SizeSetting(props) {
  function changeSize(value) {
    props.onReceiveFontSize(value);
  }
  return (
    <>
      <div>Size : {props.fontSize}</div>
      <div>
        <button onClick={() => changeSize(2)}>Tăng</button>
        <button onClick={() => changeSize(-2)}>Giảm</button>
      </div>
    </>
  );
}
