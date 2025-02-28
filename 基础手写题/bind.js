Function.prototype.bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('this is not a func')
  }
  let fn = this;
  // 执行新函数 如果this是被新函数new出来的就用this 不然就用当时bind传入的
  return function Fn() {
    let obj = this instanceof Fn ? this : context;
    return fn.apply(obj, ...arguments)
  }
}

