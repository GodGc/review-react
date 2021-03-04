import { func } from "prop-types";
import React from "react";
// React.forwardRef接收2个参数：props、ref；其中ref作为一个单独的参数存在的
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
        {props.children}
    </button>
));

// 1. 创建ref容器，用于承接需要转发出来的dom
const ref = React.createRef();
function Fancy(props) {
    function onClick() {
        console.log("ref", ref);
    }
    return [
        <FancyButton key="AA" ref={ref} onClick={onClick}>
            Click me!
        </FancyButton>,
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
    ];
}

export default Fancy;
