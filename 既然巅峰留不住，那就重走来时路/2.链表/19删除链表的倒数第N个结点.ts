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
// 19. 删除链表的倒数第N个结点
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let fast: ListNode | null = dummyNode;
    let slow: ListNode | null = dummyNode;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummyNode.next;
};