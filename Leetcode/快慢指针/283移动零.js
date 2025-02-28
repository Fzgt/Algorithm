// 283.移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const removeElement = (nums, val) => {
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
}

const removeZero = (nums) => {
    let index = removeElement(nums, 0);
    for (;index < nums.length; index++) {
        nums[index] = 0
    }
    console.log(nums);
}

let nums = [0,1,0,3,12];
removeZero(nums);
