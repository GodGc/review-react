import React, { useState, useMemo, useEffect } from "react";

export default function App() {
    let [color, setColor] = useState("red");
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Memo Father render')
    })

    // 使用useMemo对某些逻辑进行memoreized
    const memoChildA = useMemo(()=>ChildA({count}), [count])
    return (
        <div>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <p style={{ color }}>Hello, world!</p>
            <ExpensiveTree />
            <div dangerouslySetInnerHTML={{__html: '<h1>wala</h1>'}}></div>
            {/* <ChildA count={count} /> */}
            {memoChildA}
        </div>
    );
}

function ChildA ({count}){
    console.log('ChildA render')
    return (
        <div>count: {count}</div>
    )
}

function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {
        // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
}
