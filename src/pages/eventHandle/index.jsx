import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function EventHandle(props) {
    return (
        <div className="txt-18">
            I'm on.

            <ActionLink />
        </div>
    );
}

function ActionLink (){
    function handleClick (e){
        e.preventDefault(); // e是一个合成事件
        console.log('The link was Clicked')
    }
    return (
        <a href="#" onClick={handleClick}>LINK A</a>
    )
}



export default EventHandle;