// 455. 分发饼干
function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let ans = 0;
    let index = s.length - 1;
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            ans++;
            index--;
        }
    }
    return ans;
};