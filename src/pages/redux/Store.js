import { createStore, combineReducers,applyMiddleware } from "redux";
// 在redux中进行网络请求
import thunk from "redux-thunk";
import dataReducer from './dataReducer'

// const 定义保证actions.type的不变性
const INCREMENT = "INCREMENT";
const RESET = "RESET";

// start
const initialState = {
    count: 0,
    txt: 'helo',
    data: {testData: 99889}
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case INCREMENT:
            return { // 返回的state 会被Store 用来更新
                ...state,
                count: state.count +1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}


// 创建一个中轴系统store
// minddleware 的执行时机是在 disptach之后，reducer触发之前
// redux-thunk 会检查dispatch的是否是一个函数，如果是一个函数 => 执行，不是函数，放过执行后续
export const Store = createStore(combineReducers({normal: reducer, dataReducer}), applyMiddleware(thunk));
