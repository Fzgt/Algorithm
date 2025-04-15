// 17. 电话号码的字母组合
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    const ans = [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

    const dfs = (path, i) => {
        if (path.length > digits.length - 1) {
            ans.push(path);
            return;
        }
        const letters = map[digits[i]]; // 取新的字母对应的字符串
        for (const letter of letters) {
            dfs(path + letter, i + 1); // 不用回溯 因为每个dfs都是新字符串，值传递
        }
    }

    dfs('', 0);
    return ans;
};

// 如何 '23' 的情况
// 两层递归就够了
// 第一层 选出来 a b c
// 第二层 用选出来的 a b c 去拼接 3 的字母 d e f
// 3 乘 3 得到九种结果，path.length 正好也等于2 结束递归