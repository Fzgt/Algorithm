function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function defineGet() {
            console.log(`get key: ${key} value: ${value}`);
            return value;
        },
        set: function defineSet(newVal) {
            console.log(`set key: ${key} value: ${newVal}`);
            value = newVal;
        }
    });
}

function observe(data) {
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
}

let arr = ['yideng', 2, 3];
observe(arr);

arr[0] = 'didi';
arr[3] = 'Temu';
arr.unshift('Tencent');