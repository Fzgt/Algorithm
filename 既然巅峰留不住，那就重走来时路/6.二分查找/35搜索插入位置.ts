// 35. 搜索插入位置 左侧二分
function searchInsert(nums: number[], target: number): number {
    const n = nums.length;
    let l = 0, r = n - 1, ans = n;
    while (l <= r) {
        let mid = ((r - l) >> 1) + l;
        if (nums[mid] >= target) { // >= target, 属于把target逼到左侧，暗示要往左侧插
            ans = mid; // 记录可能的插入位置
            r = mid - 1; // 找左侧边界
        }
        else l = mid + 1; // 往右侧部分查找
    }

    return ans;
};