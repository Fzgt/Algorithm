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
// 98. 验证二叉搜索树
function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity);
};

const dfs = (root, lower, upper) => {
    if (!root) return true;
    if (root.val <= lower || root.val >= upper) return false;
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
}

// 注意root为null是返回true，因为是空树，不需要验证
// 递归验证左子树，左子树的上界为root.val，下界为lower
// 递归验证右子树，右子树的上界为upper，下界为root.val
// 如果左右子树都是二叉搜索树，且root.val在lower和upper之间，那么整个树是二叉搜索树

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。