/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (map.get(numbers[i]) !== undefined) {
            return [map.get(numbers[i]), i];
        } else {
            map.set(target - numbers[i], i)
        }
    }
};
