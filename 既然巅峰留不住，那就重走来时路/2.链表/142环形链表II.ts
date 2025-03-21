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
// 142. 环形链表 II
function detectCycle(head: ListNode | null): ListNode | null {
    const visited = new Set();
    while (head) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};

// 进入一个环就会一直在里边循环，所以不存在多个环，只要找到环的入口就行了