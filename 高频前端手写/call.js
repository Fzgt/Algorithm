Function.prototype._call = function(self, ...args) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function');
    }

    self = self || globalThis;
    self.fn = this;

    const res = self.fn(...args);
    delete self.fn;
    return res;
}