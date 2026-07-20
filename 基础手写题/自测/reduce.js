Array.prototype._reduce = function(callback, initialValue) {
    let sum;
    let idx;
    if (initialValue === undefined) {
        sum = this[0];
        idx = 1;
    } else {
        sum = initialValue;
        idx = 0;
    }
    for (let i = idx; i < this.length; i++) {
        sum = callback(sum, this[i], i, this);
    }
    return sum;
}