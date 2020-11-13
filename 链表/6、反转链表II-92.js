/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let left, right;
    let sentinel = new ListNode(0);
    sentinel.next = head;
    let tmp = sentinel;
    for (let i = 0; i <= n; i++) {
        if (i === m - 1) left = tmp;
        if (i === n) right = tmp;
        tmp = tmp.next;
    }
    let prev = right.next;
    let cur = left.next;
    while (cur !== right) {
        let tmp2 = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp2;
    }
    cur.next = prev;
    prev = cur;
    left.next = prev;
    return sentinel.next;
};