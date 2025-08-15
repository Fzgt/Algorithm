Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('this is not a function');
  }
  // 如果 context 为 null/undefined，则指向全局对象
  context = context || globalThis;
  // 将当前函数挂到 context 上
  context.fn = this;
  // 调用函数并传入参数
  const result = context.fn(...args);
  // 删除临时属性
  delete context.fn;
  return result;
};

// 和apply的区别在于 执行self.fn时 其他一样