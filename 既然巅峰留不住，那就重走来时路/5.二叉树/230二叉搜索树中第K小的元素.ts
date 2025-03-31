// 230. 二叉搜索树中的第K小元素
function kthSmallest(root: TreeNode | null, k: number): number {
    let ans;

    const dfs = node => {
        if (!node) return false;
        if (dfs(node.left)) return true;

        if (--k === 0) {
            ans = node.val;
            return true;
        }

        return dfs(node.right);
    }

    dfs(root);
    return ans;
};

// var kthSmallest = function(root, k) {
//     // 定义一个变量ans用来存储第k小的值
//     let ans;
    
//     // 定义一个深度优先搜索(DFS)的辅助函数
//     const dfs = (node) => {
//         // 如果节点为空，返回false
//         if (!node) return false;
        
//         // 先递归遍历左子树，如果左子树中找到了第k小的元素，直接返回true结束搜索
//         if (dfs(node.left)) return true;
        
//         // 将k减1，表示已经访问了一个节点
//         // 如果k减到0，说明当前节点就是第k小的元素
//         if (--k === 0) {
//             // 将当前节点的值赋给ans
//             ans = node.val;
//             // 返回true表示已经找到答案，停止后续遍历
//             return true;
//         }
        
//         // 如果左子树和当前节点都不是第k小的元素，继续遍历右子树
//         return dfs(node.right);
//     };
    
//     // 从根节点开始执行DFS
//     dfs(root);
//     // 返回找到的第k小的元素
//     return ans;
// };