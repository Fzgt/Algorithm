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


const _throttle = (fn, delay) => {
    let curTime = Date.now();

    return function(...args) {
        let ctx = this;
        let nowTime = Date.now();

        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(ctx, args);
        }
    }
}