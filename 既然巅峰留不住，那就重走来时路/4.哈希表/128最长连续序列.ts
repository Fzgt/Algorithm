// 128. 最长连续序列
function longestConsecutive(nums: number[]): number {
    const set: Set<number> = new Set();

    for (const num of nums) {
        set.add(num);
    }

    let longestStreak = 0;

    for (const num of set) { // 用set遍历只遍历集合内的元素，set已经去重过了，用for循环超时

        let cur = num;
        let curStreak = 1;

        if (!set.has(num - 1)) { // 如果nums[i]小1的元素不存在，它就可以作为起始，这样可以少判断很多次

            while (set.has(cur + 1)) {
                cur = cur + 1;
                curStreak++;
            }

            longestStreak = Math.max(curStreak, longestStreak);
        }
    }

    return longestStreak;
};