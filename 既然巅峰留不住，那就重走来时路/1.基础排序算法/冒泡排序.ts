// 912. 排序数组 冒泡排序版 111
function sortArray(nums: number[]): number[] {
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
};