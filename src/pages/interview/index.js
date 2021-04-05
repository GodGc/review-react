let arr = [[-9,883, [0,9]], 1,2,3,4,5,[-1,3,[99]]]
function flat (arr){
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}

console.log(flat(arr))

function myInstanceOf(left, right){
    if(typeof left == null || typeof left != 'object') {
        return false
    }
    let rightProto = right.prototype;
    left = left.__proto__;
    console.log('left', left)
    while (true){
        if(left == null){
            return false;
        }
        if(left == rightProto){
            return true;
        }
        left = left.__proto__
    }
}

console.log(myInstanceOf(1, Object))


Function.prototype.myCall = function (ctx = window){
    ctx.fn = this;
    let args = [...arguments].splice(1); // 第一个参数是call指向，后面才是params
    let result = ctx.fn(...args);
    delete ctx.fn;
    return result;
}

let foo = {name: 'jack'}
function bar (age){
    console.log('name == ', this.name, age);
}
bar.myCall(foo, '17 years')


// compose
function compose (...fns){
    if(fns.length == 0) {
        return arg => arg
    }
    if(fns.length == 1){
        return fns[0]
    }

    // core-code
    return fns.reduce((pre, cur)=> {
        return (...args) => {
            return pre(cur(...args));
        }
    })
}

let a = (x)=> x.toUpperCase();
let b = (x) => x + '!';

let c = compose(a, b);
console.log(c('hello world'))