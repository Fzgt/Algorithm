// 22. 括号生成
function generateParenthesis(n: number): string[] {
    const ans = [];

    const dfs = (lRemain, rRemain, str) => {
        if (str.length === 2 * n) return ans.push(str);
        if (lRemain > 0) dfs(lRemain - 1, rRemain, str + "(");
        if (lRemain < rRemain) dfs(lRemain, rRemain - 1, str + ")");
    }

    dfs(n, n, "");
    return ans;
};

// 下边 lRemain > 0 和 lRemain < rRemain 这两个条件可能会同时成立
// 这时候就会分出去两个分支递归