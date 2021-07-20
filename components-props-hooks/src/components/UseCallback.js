import React from "react";

function Callback() {
    console.log("re-render");
    return (
        <div>
            <hr/>
            <p>
                useCallback
            </p>
        </div>
    );
  }
  
  export default React.memo(Callback);
  