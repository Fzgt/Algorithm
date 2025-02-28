/**
 * 模拟实现 new 操作符
 * @param  {Function} ctor [构造函数]
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 */
function _new(constructor, ...args) {
    if (typeof constructor !== 'function') {
        throw 'params error';
    }

    const otherParams = Array.from(args);
    const newObj = Object.create(constructor.prototype);
    const excuteCtorResult = constructor.apply(newObj, otherParams);

    const isObject = typeof excuteCtorResult === 'object' && excuteCtorResult !== null;
    const isFunction = typeof excuteCtorResult === 'function';

    if (isObject || isFunction) {
        return excuteCtorResult;
    } else {
        return newObj;
    }
};

function _new(constructor, ...args) {
    if (typeof constructor !== 'function') {
        throw 'params error';
    }

    const otherParams = Array.from(args)
    const newObj = Object.create(constructor.prototype)
    const excuteCtorResult = constructor.apply(newObj, otherParams)

    const isObject = typeof excuteCtorResult === 'object' && excuteCtorResult !== null;
    const isFunction = typeof excuteCtorResult === 'function';

    if (isObject || isFunction) {
        return excuteCtorResult
    } else {
        return newObj
    }
}

function _new(constructor, ...args) {
    if (typeof constructor !== 'function') {
        throw 'params error';
    }

    const otherParams = Array.from(args);
    const newObj = Object.create(constructor.prototype);
    const res = constructor.apply(newObj, otherParams);

    const isObject = typeof res === 'object' && excuteCtorResult !== null;
    const isFunction = typeof res === 'function';

    if (isObject || isFunction) {
        return res;
    } else {
        return newObj;
    }

}



function Fn(name) {
    this.name = name;
};

const obj = _new(Fn, 'huxiao01');
console.log(obj.name);




