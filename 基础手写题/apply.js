
Function.prototype.apply = (obj, ...args) => {
  if (typeof this !== 'function') {
    throw new Error('this is not a function');
  }
  let result = null;
  obj = obj || window;
  obj.fn = this;
  if (args.length) {
    result = obj.fn(args)
  } else {
    result = obj.fn()
  }
  delete obj.fn;
  return result;
}

Function.prototype.apply = (obj, ...args) => {
  if (typeof this !== 'function') {
    throw new Error('this is not a function');
  }
  let result = null;
  obj = obj || window;
  obj.fn = this;
  if (args.length) {
    result = obj.fn(args)
  } else {
    result = obj.fn()
  }
  delete obj.fn;
  return result;
}


