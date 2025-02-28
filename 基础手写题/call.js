Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('this is not a function')
  }

  context.fn = this;

  let res = context.fn(...args)
  delete context.fn
  return res;
}