import { createStore } from "redux";

// const 定义保证actions.type的不变性
const INCREMENT = "INCREMENT";
const RESET = "RESET";

function increment (){
  return { type: INCREMENT }
}

function reset (){
  return { type: RESET }
}


// start
const initialState = {
    count: 0,
    txt: 'helo',
    data: {testData: 99889}
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case "INCREMENT":
            return {
                ...state,
                count: state.count +1
            }
        case "RESET":
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

// 创建一个中轴系统store
export const Store = createStore(reducer);