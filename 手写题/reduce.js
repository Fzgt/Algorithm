
// 实现reduce 简易版
// Array.prototype.myReduce = function (callback, initialValue) {
//     let accumulator = initialValue === undefined ? this[0] : initialValue;
//     const startIndex = initialValue === undefined ? 1 : 0;

//     for (let i = startIndex; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i], i, index);
//     }

//     return accumulator;
// }

// 简易版reduce
// reduce() 方法对数组中的每个元素按序执行一个提供的 reducer 函数，
// 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
// 1. 数组方法  2. 两两作用迭代  3.params: callback, initialValue(optional)
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator;
    let startIndex;
    if (!initialValue) {
        accumulator = this[0];
        startIndex = 1;
    } else {
        accumulator = initialValue;
        startIndex = 0;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumulator += callback(accumulator, this[i], i, this);
    }
    return accumulator;
}




// 求对象数组中值的和
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((accumulator, currentValue) => accumulator + currentValue.x, 0)
console.log(sum)



// 展开嵌套数组
const initialArr = [
    [0, 1],
    [2, 3],
    [4, 5],
];
// .reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// flattened 的值是 [0, 1, 2, 3, 4, 5]

const flattened =
    initialArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])




// 统计对象中值出现的次数
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
        ...allNames,
        [name]: currCount + 1,
    };
}, {});
// countedNames 的值是：
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }




// 数组去重
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        return [...accumulator, currentValue];
    }
    return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);
