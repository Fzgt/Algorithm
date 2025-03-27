// 392. 判断子序列
function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) return true;

    let i = 0;
    for (const char of t) {
        if (s[i] === char && ++i === s.length) {
            return true;
        }
    }

    return false;
};