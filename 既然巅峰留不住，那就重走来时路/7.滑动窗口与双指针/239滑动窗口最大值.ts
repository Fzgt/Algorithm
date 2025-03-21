// 239. 滑动窗口最大值 滑动窗口+单调队列
function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque = []; // 双端队列存放窗口内的索引
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 如果超出窗口范围，移除队首元素
        if (deque.length && i - k + 1 > deque[0]) {
            deque.shift();
        }

        // 维护单调递减队列：移除所有小于当前元素的值
        while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop(); // 从后边删，是因为后边的是老元素
        }

        // 处理完递减队列后，将当前元素加入队列
        deque.push(i); // 这里是加入索引

        // 每次循环都要收集结果，除非窗口不存在
        // i是窗口右边界，窗口长度i-k+1大于等于0，移项后即i>=k-1
        if (i >= k - 1) {
            result.push(nums[deque[0]]);  // 每个有效窗口的队首元素即为最大值
        }
    }

    return result;
};