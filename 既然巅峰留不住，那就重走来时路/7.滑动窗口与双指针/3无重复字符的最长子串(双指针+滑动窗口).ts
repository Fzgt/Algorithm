// 3. 无重复字符的最长子串 双指针+滑动窗口
function lengthOfLongestSubstring(s: string): number {
    let ans = 0, l = 0;
    const map = new Map<string, number>();

    for (let r = 0; r < s.length; r++) {
        let cur = s[r];
        map.set(cur, (map.get(cur) || 0) + 1);

        while (map.get(cur) > 1) { // 只要有重复字符，就从左边l++一直找到删掉
            let left = s[l];
            map.set(left, map.get(left) - 1);
            l++;
        }

        ans = Math.max(ans, r - l + 1);
    }

    return ans;
};