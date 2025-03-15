// 3. 无重复字符的最长子串 双指针+滑动窗口
function lengthOfLongestSubstring(str: string): number {
    let ans = 0, l = 0;
    const map = new Map();

    for (let r = 0; r < str.length; r++) {
        const cur = str[r];
        map.set(cur, (map.get(cur) || 0) + 1);

        while (map.get(cur) > 1) { // 只要有重复字符，就从左边l++一直找到删掉
            const leftVal = str[l];
            map.set(leftVal, map.get(leftVal) - 1);
            l++;
        }

        ans = Math.max(ans, r - l + 1);
    }

    return ans;
};