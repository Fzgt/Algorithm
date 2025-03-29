// 35. 搜索插入位置 左侧二分
function searchInsert(nums: number[], target: number): number {
    const n = nums.length;
    let l = 0, r = n - 1, ans = n;
    while (l <= r) {
        let mid = ((r - l) >> 1) + l;
        if (nums[mid] >= target) {
            ans = mid;
            r = mid - 1;
        }
        else l = mid + 1;
    }

    return ans;
};