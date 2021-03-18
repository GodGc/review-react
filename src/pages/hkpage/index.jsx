import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function test(){
    console.log('useEffect runing~')
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    test();
    return function cleanUp(){
        console.log('cleaning~~')
    }
  },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}