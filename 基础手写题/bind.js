// old version:
// Function.prototype._bind = function(ctx) {
//     if (typeof this !== 'function') {
//         throw new Error('this is not a function');
//     }
//     var args = [...arguments].slice(1);
//     var fn = this;
//     return function Fn() {
//         return fn.apply(this instanceof Fn ? this : ctx, args.concat(...arguments))
//         // new Fn的时候会在底层把Fn的原型给新实例，再用call绑新实例去调用Fn，所以 新实例就是this，就会instanceof Fn为true
//     }
// }
// 完善版
Function.prototype._bind = function(ctx, ...bindArgs) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function');
    }
    const fn = this;

    function boundFn(...callArgs) {
        // 判断是否通过 new 调用
        return fn.apply(this instanceof boundFn ? this : ctx, [...bindArgs, ...callArgs]);
    }

    // 继承原函数的 prototype，保证 new 时能继承
    boundFn.prototype = Object.create(fn.prototype);

    return boundFn;
};

// new Fn(...) 的内部流程：

// 先创建一个新对象 obj，并设置 obj.__proto__ = Fn.prototype。

// 再调用 Fn.call(obj, ...)，此时 this = obj。

// 如果构造函数没有显式返回对象，就返回这个 obj。

// 为什么 this instanceof Fn 为 true：

// 因为 obj 的原型链指向 Fn.prototype。

// 所以在 Fn 内部，this 就是这个 obj，并且 this instanceof Fn === true。

// 原函数作为构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 先 bind 一部分参数
let BoundPerson = Person._bind(null, "Tom");

// 普通调用
BoundPerson(20); // this 指向 ctx=null → 严格模式下 undefined，非严格模式下 window

// 构造调用
let p = new BoundPerson(20);

console.log(p);               // Person { name: 'Tom', age: 20 }
console.log(p instanceof Person); // true
console.log(p instanceof BoundPerson); // true

// bind特点：
// 返回新函数
// 你可以多次调用，也可以在不同地方使用。而call和apply是立即执行。

// 可预置参数
// bind(obj, arg1) 会把 arg1 固定，每次调用不用重复传。

// this 永久绑定（除非 new）
// 即使 later 执行，this 仍然指向 obj。

// 可作为构造函数
// new boundGreet() 时 this 会指向新对象，而不是绑定的 obj。