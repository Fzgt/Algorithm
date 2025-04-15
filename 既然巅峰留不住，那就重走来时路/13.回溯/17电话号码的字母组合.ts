// 17. 电话号码的字母组合
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    const ans = [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

    const dfs = (path, i) => {
        if (i > digits.length - 1) {
            ans.push(path);
            return;
        }
        const letters = map[digits[i]];
        for (const letter of letters) {
            dfs(path + letter, i + 1); // 不用回溯 因为每个dfs都是新字符串，值传递
        }
    }

    dfs('', 0);
    return ans;
};