/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/**
 * 可以先遍历得到长度，再找到L-N
 * 本解法采用双指针
 */
var removeNthFromEnd = function(head, n) {
  let sentinel = new ListNode(0);
  sentinel.next = head;
  let first = head;
  let second = sentinel;
  for (let i = 0; i < n; i++) {
      first = first.next;
  }
  while (first) {
      first = first.next;
      second = second.next;
  }
  let target = second.next;
  second.next = target.next;
  return sentinel.next;
};