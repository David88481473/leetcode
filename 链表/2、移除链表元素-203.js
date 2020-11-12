/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let sentinel = new ListNode(0); //哨兵节点主要目的是使链表标准化，如使链表永不为空、永不无头、简化插入和删除
  sentinel.next = head;
  let prev = sentinel;
  let current = head;
  while (current) {
      if (current.val === val) {
          prev.next = current.next;
      } else {
          prev = current;
      }
      current = current.next;
  }
  return sentinel.next;
};