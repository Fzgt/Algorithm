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

/**
 Do not return anything, modify root in-place instead.
 */
// 114. 二叉树展开为链表
function flatten(root: TreeNode | null): void {
    const list = [];
    preorderTraversal(root, list);
    for (let i = 1; i < list.length; i++) {
        const [prev, cur] = [list[i - 1], list[i]];
        prev.left = null;
        prev.right = cur;
    }
};

const preorderTraversal = (root, list) => {
    if (!root) return;
    list.push(root);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
}
