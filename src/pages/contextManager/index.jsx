import React from 'react';
// 1. 创建context对象，暴露一个txt属性和修改txt属性的方法
const Manager = React.createContext({
    txt: "hi~",
    changeTxt:()=>{}
});
export default Manager