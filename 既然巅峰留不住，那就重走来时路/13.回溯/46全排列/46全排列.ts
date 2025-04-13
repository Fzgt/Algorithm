// 46. 全排列
function permute(nums: number[]): number[][] {
    const ans = [];
    const used = {};

    const dfs = path => {
        if (path.length === nums.length) {
            ans.push(path.slice());
            return;
        }
        for (const num of nums) {
            if (used[num]) continue;
            path.push(num);
            used[num] = true;

            dfs(path);

            path.pop();
            used[num] = false;
        }
    }

    dfs([]);
    return ans;
};