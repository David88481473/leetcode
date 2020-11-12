/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let sentinel = new ListNode(0);
  sentinel.next = head;
  let temp = sentinel;
  let current = head;
  let next = head ? head.next : null;
  while (temp && current && next) {
      temp.next = next;
      current.next = next.next;
      next.next = current;
      temp = current;
      if (temp) current = temp.next;
      if (current) next = current.next;
  }
  return sentinel.next;
};