/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 234. 回文链表
function isPalindrome(head: ListNode | null): boolean {
    const vals = [];
    while (head) { // 不能写head.next，不然少判断
        vals.push(head.val);
        head = head.next;
    }

    for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
        if (vals[i] !== vals[j]) return false;
    }

    return true;
};