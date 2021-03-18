import React, { useState } from "react";

export default function App() {
    let [color, setColor] = useState("red");

    return (
        <div>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <p style={{ color }}>Hello, world!</p>
            <ExpensiveTree />
            <div dangerouslySetInnerHTML={{__html: '<h1>wala</h1>'}}></div>
        </div>
    );
}

function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {
        // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
}
