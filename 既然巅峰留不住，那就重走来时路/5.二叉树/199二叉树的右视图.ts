/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// 199. 二叉树的右视图
function rightSideView(root: TreeNode | null): number[] {
    const ans = [];
    const dfs = (node, depth) => {
        if (!node) return;
        if (depth === ans.length) { // 这个深度首次访问
            ans.push(node.val);
        }
        dfs(node.right, depth + 1); // 先递归右子树，保证首次遇到的一定是最右边的节点
        dfs(node.left, depth + 1);
    }
    dfs(root, 0);
    return ans;
};