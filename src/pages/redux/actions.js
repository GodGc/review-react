// const 定义保证actions.type的不变性
export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export function increment (){
  return { type: INCREMENT }
}

export function reset (){
  return { type: RESET }
}