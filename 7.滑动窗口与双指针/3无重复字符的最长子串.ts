// 3. 无重复字符的最长子串
function lengthOfLongestSubstring(str: string): number {
    let subStr = '';
    let subLen = 0;

    for (let i = 0; i < str.length; i++) {
        // 检查当前字符是否已存在于滑动窗口中
        if (subStr.indexOf(str[i]) > -1) {
            // 存在重复字符的情况

            // 更新最长子串长度
            subLen = Math.max(subLen, subStr.length);;

            // 将当前字符添加到子串中
            subStr += str[i];

            // 调整滑动窗口大小：从子串中删除重复字符及其之前的所有字符
            subStr = subStr.slice(subStr.indexOf(str[i]) + 1);
        } else {
            // 不存在重复字符, 直接将当前字符添加到滑动窗口中
            subStr += str[i];
        }

        // 每次操作后都更新最长子串长度
        // 确保在字符串结束时也能捕获到最长子串长度
        subLen = Math.max(subLen, subStr.length);;
    }

    return subLen;
};