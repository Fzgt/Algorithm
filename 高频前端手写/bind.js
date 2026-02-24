Function.prototype._bind = function(ctx, ...bindArgs) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function');
    }

    const fn = this;
    
    function boundFn (...boundArgs) {
        return fn.apply(this instanceof boundFn ? this : ctx, [...bindArgs, ...boundArgs]);
    }

    boundFn.prototype = Object.create(fn.prototype);
    return boundFn;
}


function hello(name, saysomething) {
    console.log("hello", name, saysomething);
}

const saySthToUTS = hello._bind(null, 'UTS');
saySthToUTS('welcome back');

const obj = new saySthToUTS('congrats');
console.log(obj);