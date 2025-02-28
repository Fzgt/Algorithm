function createObj(obj) {
    function fn() { };
    fn.prototype = obj;
    return new fn();
}

function createObj(obj) {
    function fn() { };
    fn.prototype = obj;
    return new fn();
}

const tempObj = createObj({
    data: {
        name: 'huxiao',
        age: 26
    }
});

console.log(tempObj.data);

// function createObj(prototype) {
//     function fn() { }
//     fn.prototype = prototype;
//     return new fn();
// }