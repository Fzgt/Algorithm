
Function.prototype._apply = function (self, ...args) {
  if (typeof this !== 'function') {
    throw new Error('this is not a function');
  }
  self = self || globalThis;
  self.fn = this; // this是调用apply的函数, 挂到要指定的this也就是obj身上
  if (args) {
    result = self.fn(...args);
  } else {
    result = self.fn();
  }
  delete self.fn;
  return result;
}
