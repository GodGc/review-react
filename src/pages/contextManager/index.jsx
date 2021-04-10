import React from 'react';
// 1. 创建context对象，暴露一个txt属性和修改txt属性的方法
const Manager = React.createContext({
    txt: "原生数据",
    changeTxt:()=>{}
});
export default Manager