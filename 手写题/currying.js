function add (...args) {
    return args.reduce((a,b) => a + b);
}

function currying (fn) {
    let arr = [];
    return function curryFn (...args) {
        if (args.length !== 0) {
            arr = arr.concat(args);
            return curryFn;
        } else {
            const result = fn.apply(this, arr);
            arr = [];
            return result;
        }
    }
};

const curryAdd = currying(add);
console.log(curryAdd(21,2)(23)());