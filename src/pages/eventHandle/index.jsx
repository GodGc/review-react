import React, { useState, useEffect, Suspense } from "react";
const Order = React.lazy(() => import("../order"));
import ReactDOM from "react-dom";
import "./index.scss";
import Manager from "../contextManager";

function Welcome(props) {
    return <Manager.Consumer>
    {
        value=>{
            return <div>
                Hello, {value.txt}
            </div>
        }
    }
    </Manager.Consumer>
}

function EventHandle(props) {
    const data = 0;
    const number = [1, 2, 3, 4, 5, 6];
    const numberDom = number.map((n) => <p key={n}>{n}</p>);
    const [isGoing, setIsGoing] = useState(true);
    const [numberOfGuests, setNumberOfGuests] = useState(2);

    function handleInputChange(e) {
        const { name, checked = false, value = undefined } = e.target;
        if (name == "isGoing") {
            setIsGoing(checked);
        }
        if (name == "numberOfGuests") {
            setNumberOfGuests(value);
        }
    }
    return (
        <Manager.Consumer>
            {value=>{
                return <div className="txt-18">
                I'm on. {value.txt}
                <br />
                <ActionLink />
                <br />
                {data && <h1> 我是Hsoc9xGu</h1>}
                {numberDom}
                {number.map((n) => {
                    return <b key={n}>{n * 2}、</b>;
                })}
                <form>
                    <label>
                        参与:
                        <input name="isGoing" type="checkbox" checked={isGoing} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        来宾人数:
                        <input name="numberOfGuests" type="number" value={numberOfGuests} onChange={handleInputChange} />
                    </label>
                </form>
                {/* Suspense 组件是react内置的 */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Order />
                </Suspense>
            </div>
            }}
            
        </Manager.Consumer>
    );
}

function ActionLink() {
    // useState的返回值是一个数组：【0】- flag的值，【1】- 改变flag值的方法
    // 为方便，使用ES6解构的方式获取
    const [flag, setFlag] = useState(false);
    function handleClick(e) {
        e.preventDefault(); // e是一个合成事件
        console.log("The link was Clicked");

        // 改变flag值
        setFlag(!flag);
    }

    return (
        <a href="#" onClick={handleClick}>
            {flag ? "no Wraning" : "Wraning~"}
        </a>
    );
}

export default EventHandle;
