// 131. 分割回文串
function partition(s: string): string[][] {
    const ans = [];

    const dfs = (path, start) => {
        if (start === s.length) {
            return ans.push(path.slice());
        }

        for (let i = start; i < s.length; i++) { // 一整轮for固定用一个start给isPali函数，切出来的子串是s[start...i]
            if (isPali(s, start, i)) {
                path.push(s.substring(start, i + 1));
                dfs(path, i + 1); // 进到循环，说start到i是回文串，接下来就从i+1开始继续找下一个回文串
                path.pop(); // 有好几个递归分支，这里pop多次 回到当前分支的某个状态的path，继续找下一个回文串
            }
        }
    }

    dfs([], 0);
    return ans;
};

const isPali = (s, l, r) => {
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}