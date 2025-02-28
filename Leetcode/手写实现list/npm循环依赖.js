// 实现一个方法，检查一个 npm 包的依赖项中有没有存在循环依赖。

// 不用考虑版本，只考虑包名即可
// 入参 pkgs 为项目中所有的依赖（包括子依赖）
// 返回 boolean
// pkg 数据结构即为 package.json 内容的数组, 如有三个包 a、b、c 则入参为：
// [
//     {
//         "name": "a",
//         "dependencies": {
//             "b": "^1.0.0"
//         }
//     },
//     {
//         "name": "b",
//         "dependencies": {
//             "c": "^1.0.0"
//         }
//     },
//     {
//         "name": "c",
//         "dependencies": {
//             "a": "^1.0.0"
//         }
//     }
// ]


// 可以使用深度优先搜索（DFS）算法来检查 npm 包的依赖项中是否存在循环依赖。具体思路如下：

// 遍历所有的依赖项，为每个依赖项创建一个 visited 对象，用于记录该依赖项是否已经被访问过。
// 对于每个依赖项，进行 DFS 遍历，检查其依赖项中是否存在循环依赖。具体实现时，我们可以在 DFS 遍历时传入一个栈，用来记录当前遍历的路径，每次遍历时检查是否已经访问过该依赖项，如果已经访问过，则说明存在循环依赖。
// 如果遍历完所有依赖项都没有发现循环依赖，则返回 false，否则返回 true。
function hasCircularDependencies(pkgs) {
    const visited = {};
    const stack = [];

    function dfs(pkg) {
        visited[pkg.name] = true;
        stack.push(pkg.name);

        if (pkg.dependencies) {
            for (const depName of Object.keys(pkg.dependencies)) {
                if (!visited[depName]) {
                    const dep = pkgs.find(p => p.name === depName);
                    if (dfs(dep)) {
                        return true;
                    }
                } else if (stack.includes(depName)) {
                    return true;
                }
            }
        }

        stack.pop();
        return false;
    }

    for (const pkg of pkgs) {
        if (!visited[pkg.name]) {
            if (dfs(pkg)) {
                return true;
            }
        }
    }

    return false;
}