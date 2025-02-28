// 数组中第K个最大元素
const findKLargest = (nums, k) => {
    if (k > nums.length) {
        return -1
    }
    nums.sort((a, b) => a - b)
    return nums[k - 1];
}

let arr = [1, 22, 3];
// console.log(findKLargest(arr, 2))

// let nums = [2, 34, 1, 23, 56];
// nums.sort((a, b) => a - b)
// console.log(nums)