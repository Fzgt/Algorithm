// 560. 和为K的子数组 哈希+前缀和
function subarraySum(nums: number[], k: number): number {
    const mp = new Map();
    mp.set(0, 1); // 为了让pre-k=0的情况也能被计算到
    let count = 0, pre = 0;

    for (const x of nums) { // 这里的x主要用来计算pre
        pre += x;
        if (mp.has(pre - k)) { // 判断是否差值为k的前缀和存在
            count += mp.get(pre - k);
            // 之前出现过几次 就能组合多几种和为k的子数组，因为当前值和之前任意一个值的差值为k，都是一个新的子数组
        }

        mp.set(pre, (mp.get(pre) || 0) + 1)
    }
    return count;
};