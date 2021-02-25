import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function EventHandle(props) {
    const data = 0;
    const number = [1,2,3,4,5,6];
    const numberDom = number.map(n=><p key={n}>{n}</p>)
    return (
        <div className="txt-18">
            I'm on.
            <br/>
            <ActionLink />
            <br/>
            {data && <h1> 我是Hsoc9xGu</h1>}
            {numberDom}
        </div>
    );
}

function ActionLink (){
    // useState的返回值是一个数组：【0】- flag的值，【1】- 改变flag值的方法
    // 为方便，使用ES6解构的方式获取
    const [flag, setFlag] = useState(false);
    function handleClick (e){
        e.preventDefault(); // e是一个合成事件
        console.log('The link was Clicked');

        // 改变flag值
        setFlag(!flag);
    }
    return (
        <a href="#" onClick={handleClick}>{flag?'no Wraning':'Wraning~'}</a>
    )
}



export default EventHandle;