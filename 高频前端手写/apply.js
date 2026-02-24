Function.prototype._apply = (self, ...args) => {
    if (typeof this !== 'function') {
        throw new Error('params is not correct');
    }
    
    self = self || globalThis;
    self.fn = this;
    let ans;

    if (args.length) {
        ans = self.fn(args);
    } else {
        ans = self.fn();
    }
    delete self.fn;
    return ans;
}