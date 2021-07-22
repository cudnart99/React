import React from 'react'

export default function Hof() {
    // function waitAndRun(ms,func){
    //     setTimeout(func,ms);
    // }


    // currying
    function waitAndRun(ms){
        return function (func){
            setTimeout(func,ms); 
        }
    }

    function run(){
        console.log('Run');
    }

    waitAndRun(2000)(run); // Higher-orders function

    return (
        <div>
            
        </div>
    );
}
