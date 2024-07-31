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
 var reverse = function(head){
        var current = head;
        var previous = null;
        var nextNode = head.next;
        while(current){
            nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        head = previous;
        return head;
}
var removeNthFromEnd = function(head, n) {
    if(head == null){
        return;
    }
    else if(head.next == null){
        head = null;
        return head;
    }
    else if(head.next.next == null && n == 1){
        head.next=null;
        return head;
    }
    else if(head.next.next == null && n == 2){
        var temp = head;
        head = head.next;
        temp = null;
        return head;
    }
    else if (n == 1){
        head = reverse(head);
        var current = head;
        head = head.next
        current = null;
        head = reverse(head);
        return head;
    }
    else{
        head = reverse(head);
        var current = head;
        for(var i = 0; i < n-2; i++){
            current = current.next;
        }
        var temp = current;
        temp = current.next;
        current.next = current.next.next;
        temp = null;
        head = reverse(head);
        return head;
    }
};
