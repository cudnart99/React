import React, { useState } from "react";

function UseState() {
    const [Name, setName] = useState("Đức");
    const changeName = () => setName("Dương");
    return (
        <div>
            <h1>Đây là useState</h1>
            <p>Tên : {Name}</p>
            <button onClick = {changeName}>Cập nhật tên</button>
        </div>
    );
  }
  
  export default UseState;
  