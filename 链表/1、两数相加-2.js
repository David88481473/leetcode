/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  let carry = 0;
  const result = new ListNode(0); //记录链表头
  let current = result; //记录正在计算的位置
  while (cur1 !== null || cur2 !== null || carry !== 0) {
      let add = (cur1 ? cur1.val : 0) + (cur2 ? cur2.val : 0) + carry;
      let last = add % 10;
      carry = add >= 10 ? 1 : 0;
      current.next = new ListNode(last);
      current = current.next;
      if (cur1) cur1 = cur1.next;
      if (cur2) cur2 = cur2.next;
  }

  return result.next;
};