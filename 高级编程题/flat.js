// 不使用数组的 arr.flat() API，自己实现一个数组拍平函数，需要支持任意层级

const arr = ['hi', ['hello', 1], 2, [3, [4, [5]]]]
function flat(list, depth = 1) {
    //...
}
flat(arr);
// 默认展开一层
// ["hi","hello",1,2,3,[4,[5]]]
flat(arr, 3);
// 第二个参数支持控制层级
// ['hi', 'hello', 1, 2, 3, 4, 5]

// 可以使用递归实现数组拍平函数，具体思路如下：

// 遍历数组中的每个元素，如果元素是数组，则递归调用拍平函数，否则将元素加入结果数组中。
// 在递归调用拍平函数时，传入的深度参数减1，并将结果数组传递给递归函数，递归函数将返回拍平后的数组。
// 如果传入的深度参数小于或等于0，则直接将当前数组加入结果数组中。

// 在实现时需要注意的是，我们在递归调用拍平函数时，将深度参数减1传递给递归函数，
// 这样每递归一层深度就减1，当深度为0时就不再递归，直接将当前数组加入结果数组中。
// 此外，我们使用扩展运算符 ... 将递归函数返回的数组展开后再加入结果数组中，
// 这样可以避免将数组作为一个整体加入结果数组中，从而达到拍平的目的。

// function flat(list, depth = 1) {
//     const result = [];
//     for (const item of list) {
//         if (Array.isArray(item) && depth > 0) {
//             result.push(...flat(item, depth - 1));
//         } else {
//             result.push(item);
//         }
//     }
//     return result;
// }

function flat(list, depth = 1) {
    const result = [];
    for (const item of list) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flat(item, depth - 1))
        } else {
            result.push(item)
        }
    }
    return result;
}
