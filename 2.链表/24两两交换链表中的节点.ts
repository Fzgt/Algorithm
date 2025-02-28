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
// 24. 两两交换链表中的节点
function swapPairs(head: ListNode | null): ListNode | null {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let prev = dummyNode;
    while (prev.next !== null && prev.next.next !== null) {
        let node1 = prev.next;
        let node2 = prev.next.next;

        prev.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        prev = node1;
    }
    return dummyNode.next;
};