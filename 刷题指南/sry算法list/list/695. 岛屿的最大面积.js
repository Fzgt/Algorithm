/**
 * @param {number[][]} grid
 * @return {number}
 */
let g, n, m;
var maxAreaOfIsland = function (grid) {
    g = grid, n = grid.length, m = g[0].length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j]) {
                res = Math.max(res, dfs(i, j))
            }
        }
    }
    return res;
};

const dfs = (x, y) => {
    let res = 1;
    g[x][y] = 0; //避免重复计算 加过的点就删掉
    let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
        let a = x + dx[i], b = y + dy[i];
        if (a >= 0 && a < n && b >= 0 && b < m && g[a][b]) {
            res += dfs(a, b);
        }
    }
    return res;
}