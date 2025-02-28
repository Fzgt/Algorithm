/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    const len = nums.length;
    let start = 0;
    let ans = 0;
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            start = i;
        }
        ans = Math.max(ans, i - start + 1)
    }
    return ans;
};