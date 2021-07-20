import React from "react";

function React_memo(props) {
    console.log("render ",props.name);
    return (
        <div>
           Name : {props.name};
        </div>
    );
  }
  
  export default React.memo(React_memo);
  