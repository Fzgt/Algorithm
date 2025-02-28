
// 柯里化（currying）是把接受多个参数的函数转变为接受一个单一参数的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。

function add(...args) {
    //求和
    return args.reduce((a, b) => a + b)
}

function currying(fn) {
    let args = []
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4)())  