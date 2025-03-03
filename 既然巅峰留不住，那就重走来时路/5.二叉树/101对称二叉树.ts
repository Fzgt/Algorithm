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
// 101. 对称二叉树
function isSymmetric(root: TreeNode | null): boolean {
    return check(root.left, root.right);
};

const check = (l: TreeNode | null, r: TreeNode | null): boolean => {
    if (!l && !r) return true; // 这一行必须在上边，因为如果l和r都是null，那么l.val和r.val会return false, 但是这个时候应该return true
    if (!l || !r) return false;
    // 每次先检查两侧根节点是否相等，再递归检查左侧树的左节点和右侧树的右节点，左侧树的右节点和右侧树的左节点
    // 有一个不等就返回false，所以这里用&&
    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left);
}