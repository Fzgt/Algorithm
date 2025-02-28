// 无重复字符串最长子串
var lengthOfLongestSubstring = function (str) {
    var window = {};
    var left = 0, right = 0;
    var res = 0;
    while (right < str.length) {
        var c = str[right];
        right++;
        if (window[c] !== undefined) { // window中已经有了c
            window[c]++;
        } else {
            window[c] = 1;
        }
        while (window[c] > 1) {
            var d = str[left];
            left++;
            window[d]--;
        }
        res = Math.max(res, right - left);
    }
    return res;
};

// 当 window[c] 值大于 1 时，说明窗口中存在重复字符，不符合条件，就该移动 left 缩小窗口了嘛。
// 唯一需要注意的是，在哪里更新结果 res 呢？我们要的是最长无重复子串，哪一个阶段可以保证窗口中的字符串是没有重复的呢？
// 这里和之前不一样，要在收缩窗口完成后更新 res，因为窗口收缩的 while 条件是存在重复元素，换句话说收缩完成后一定保证窗口
// 中没有重复嘛

var lengthOfLongestSubstring = function (str) {
    let subStr = '';
    let subLen = 0;
    for (let i = 0; i < str.length; i++) {
        if (subStr.indexOf(str[i]) > -1) { //存在重复
            subLen = subLen > subStr.length ? subLen : subStr.length;
            subStr += str[i];
            subStr = subStr.slice(subStr.indexOf(str[i]) + 1)
        } else { // 不重复
            subStr += str[i]
        }
        subLen = subLen > subStr.length ? subLen : subStr.length;
    }
    return subLen || str.length;
};