var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    return strs.reduce(getSameStr);
};

function getSameStr(a, b) {
    let res = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            res += a[i]
        } else {
            return res;
        }
    }
    return res;
}