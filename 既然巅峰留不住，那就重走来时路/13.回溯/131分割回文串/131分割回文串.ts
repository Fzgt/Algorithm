// 131. 分割回文串
function partition(s: string): string[][] {
    const ans = [];

    const dfs = (path, start) => {
        if (start === s.length) return ans.push(path.slice());

        for (let i = start; i < s.length; i++) {
            if (isPali(s, start, i)) {
                path.push(s.substring(start, i + 1));
                dfs(path, i + 1);
                path.pop();
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