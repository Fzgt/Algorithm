const throttle = (fn, delay) => {
    let curTime = Date.now();

    return function (...args) {
        let context = this, nowTime = Date.now();

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args)
        }
    }
}

const throttle = (fn, delay) => {
    let curTime = Date.now();

    return function (...args) {
        let nowTime = Date.now();
        let ctx = this;

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(ctx, args);
        }
    }
}



const throttle = (fn, delay) => {
    let curTime = Date.now();

    return function (...args) {
        let context = this, nowTime = Date.now();

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args)
        }
    }
}



function throttle(fn, delay) {
    let curTime = Date.now();

    return function () {
        let context = this, args = arguments, nowTime = Date.now();

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args);
        }
    }
}

function throttle(fn, delay) {
    let curTime = Date.now();

    return function (...args) {
        let context = this;
        let nowTime = Date.now();

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args);
        }
    }
}

const throttle = (fn, delay) => {
    let curTime = Date.now();

    return function (...args) {
        let nowTime = Date.now();
        let context = this;

        if (nowTime - curTime > delay) {
            curTime = Date.now();
            fn.apply(context, args);
        }
    }
}