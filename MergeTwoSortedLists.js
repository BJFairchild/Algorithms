var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    var startNode;
    if (l1.val < l2.val) {
        startNode = l1;
        l1 = l1.next;
    } else {
        startNode = l2;
        l2 = l2.next;
    }
    var currentNode = startNode;
    
    while (l1 != null || l2 != null) {
        if (l1 == null) {
            currentNode.next = l2;
            break;
        }
        if (l2 == null) {
            currentNode.next = l1;
            break;
        }
        if (l1.val < l2.val) {
            currentNode.next = l1;
            currentNode = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            currentNode = l2;
            l2 = l2.next;
        }

    }
    return startNode;
};