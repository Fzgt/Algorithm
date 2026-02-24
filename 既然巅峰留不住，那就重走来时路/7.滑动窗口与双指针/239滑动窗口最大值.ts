// 239. 滑动窗口最大值 滑动窗口+单调队列
function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque = []; // 双端队列存放窗口内的索引
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // i - k + 1 是窗口的左边界索引，i是右边界索引
        // 如果队首元素的索引小于窗口左边界索引，说明队首元素已经不在窗口内了
        if (deque.length && i - k + 1 > deque[0]) {
            deque.shift();
        }

        // 维护单调递减队列：移除所有小于当前元素的值
        while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop(); // 从后边删，是因为后边的是老元素
        }

        // 处理完递减队列后，将当前元素加入队列
        deque.push(i); // 这里是加入索引

        // i - k + 1代表窗口有k个元素，才可以收集结果
        if (i - k + 1 >= 0) {
            result.push(nums[deque[0]]);  // 每个有效窗口的队首元素即为最大值
        }
    }

    return result;
};

// 暴力解法：
// function maxSlidingWindow(nums: number[], k: number): number[] {
//     let ans: number[] = [];
//     for (let i = 0; i <= nums.length - k; i++) {
//         let max = -Infinity;
//         for (let j = i; j < i + k; j++) {
//             max = Math.max(max, nums[j]);
//         }
//         ans.push(max);
//     }
//     return ans;
// };