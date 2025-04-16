// 39. 组合总和
function combinationSum(candidates: number[], target: number): number[][] {
    const ans = [];

    const dfs = (index, path, sum) => {
        if (sum > target) return;
        if (sum === target) return ans.push(path.slice());

        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(i, path, sum + candidates[i]); // 允许重复使用 传i
            path.pop();
        }
    }
    dfs(0, [], 0);
    return ans;
};