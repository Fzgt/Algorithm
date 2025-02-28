/**

说明：
写个转换函数，把一个JSON对象的key从下划线形式（Pascal）转换到小驼峰形式（Camel）
示例：
converter({"a_bc_def": 1}); // 返回 {"aBcDef": 1}
*/
function converter(obj) {
    // 将下划线形式的字符串转换为小驼峰形式
    function toCamelCase(str) {
        return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
    }

    // 创建一个新的对象，用于存放转换后的key-value对
    const newObj = {};

    // 遍历原始对象的key-value对
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 将key转换为小驼峰形式，并将其与对应的value添加到新对象中
            newObj[toCamelCase(key)] = obj[key];
        }
    }

    return newObj;
}

// 示例
console.log(converter({ "a_bc_def": 1 })); // 输出：{"aBcDef": 1}

// 这个converter函数首先定义了一个名为toCamelCase的内部函数，
// 用于将下划线形式的字符串转换为小驼峰形式。
// 接下来，converter函数创建了一个新的对象，用于存放转换后的key-value对。
// 然后，它遍历原始对象的key-value对，将key转换为小驼峰形式，并将其与对应的value添加到新对象中。
// 最后，converter函数返回新对象。