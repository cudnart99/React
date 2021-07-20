/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import UseState from "./components/UseState";
import Props from "./components/Props";
import State from "./components/State";
import ChangeState from "./components/changeState";
// import ChangeProps from "./components/ChangeProps";
import React_memo from "./components/React_memo";
import React, { useState } from "react";
import Callback from "./components/UseCallback";
import { useCallback } from "react";

function App() {
  // const [Id,setId] = useState(123); 
  const Hello = useCallback(() => {},[]);
  const [count ,setCount] = useState(0);
  return (
    <div>
      <Props name = "Đức"
             age = "20">
      Sinh viên :        
      </Props>

      <State />

      <ChangeState name = "Dương" 
      />

      {/* <ChangeProps /> */}

      <UseState />
      <hr/>
      <p>React.nemo</p>
      <p>Thay đổi state mà component ko bi render lại</p>
      <p>{count}</p>
      <button onClick = {() => setCount(count + 1)}>Tăng</button>
      <React_memo name ="Ben" />

      <Callback hello = {Hello} />

    </div>
  );
}

export default App;
