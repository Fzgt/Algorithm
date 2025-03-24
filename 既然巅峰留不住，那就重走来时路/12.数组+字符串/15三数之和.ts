// 15. 三数之和
function threeSum(nums: number[]): number[][] {
    let ans = [];
    const len = nums.length;
    if (nums === null || len < 3) return [];
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return []; // 最小数大于0，三数和不可能为0
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 元素1去重
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                ans.push([nums[i], nums[l], nums[r]]);

                while (nums[l] === nums[l + 1]) l++; // 元素2去重
                while (nums[r] === nums[r - 1]) r--; // 元素3去重
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else if (sum > 0) r--;
        }
    }
    return ans;
};
