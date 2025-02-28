/**
 * @param {number[]} nums
 * @return {number}
 */

const longestConsecutive = (nums) => {
    let start = 0;
    let ans = 0;
    let len = nums.length;
    nums.sort((a, b) => a - b)
    nums = Array.from(new Set(nums))
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] !== nums[i - 1] + 1) {
            start = i;
        }
        ans = Math.max(ans, i - start + 1)
    }
    return ans
}