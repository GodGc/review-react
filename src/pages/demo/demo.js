function myInstanceOf (data){
    let a = {foo : 'bar'}
    // Symbol
    //  "[object object]" toString
    // || valueof - 
    let b = 123; // "123"

}


// 0.1 + 0.2 == ""

// num1 + num2 123456789.1 + 234567890.2

// array flat
function flatArray(arr) {
    return arr.reduce((pre, cur)=>{
        return pre.concat(Array.isArray(cur) ? flatArray(cur) : cur);
    }, [])
}

function compose(...fns){
    // 边界
    fns.reduce((pre, cur)=>{
        return (...arg)=>{ pre(cur(...arg))}
    })
}

// active && <Component /> 
// 10


const routerList = [];
const componentList = [];
// router
function navigateTo(path){
    if(!routerList.includes('path')) return;
    routerList.forEach(pathName=>{
        if(pathName === path){
            // 1. 
            // 2. 
        }
    })
}


// Promise
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('err')
 })
 
 promise.then(value => {
   console.log('resolve', value)
 }, reason => {
   console.log('reject', reason)
 })
 
 // 输出 resolve success 