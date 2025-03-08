// 15. 三数之和
function threeSum(nums: number[]): number[][] {
    let ans = [];
    const len = nums.length
    if (nums === null || len < 3) return ans
    nums.sort((a, b) => a - b) //升序排列
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break
        //如果最小元素大于0 那不可能出现三数之和为0
        if (i > 0 && nums[i] === nums[i - 1]) continue // 如果两个元素值相同 跳下一轮
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                ans.push([nums[i], nums[l], nums[r]])
                // push完还要去保证下一个nums[l]和当前加到答案里的不一样。否则属于相同情况。
                while (nums[l] === nums[l + 1]) l++;
                //只要下个元素和这个相等l就++，因为nums[l] nums[r]已经被加到答案里，排除相同情况
                while (nums[r] === nums[r - 1]) r--;
                l++; //因为上边l++之后即使不再进while循环，得到的值还是一个和nums[l]相等的值，所以再加一次
                r--;
            }
            // l 和 r 处理完继续下次while循环找sum=0的情况
            else if (sum < 0) l++
            else if (sum > 0) r--
        }
    }
    return ans
};
