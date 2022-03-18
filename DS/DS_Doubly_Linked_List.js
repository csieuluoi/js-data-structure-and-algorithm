class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push to last position
    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    // pop last node
    pop(){
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
            this.length--;
        }
        return poppedNode;
        
    } 

    // shift: remove a node at first index
    shift (){
        if (!this.head) return undefined;
        var oldHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //unshift: add a node at first index
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    // get: get a node at a position
    get(index) {
        if (0 > index || index >= this.length) return null;
        var count = 0;
        var current;
        if (index < Math.floor(this.length/2)) {
            current = this.head;
            while(index != count){
                current = current.next;
                count++;
            }
        } else {
            count = this.length-1;
            current = this.tail;
            while(index != count){
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    // set: set the value of a node at a position
    set(index, val){
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        } 
        return false
    }

    // insert: insert a node into a position
    insert(index, val) {
        if (index >= this.length || index < 0) return false;
        if (index === this.length){
            this.push(val);
        } else if (index === 0) {
            this.unshift(val);
        } else {
            var newNode = new Node(val);
            var currentNode = this.get(index);
            var preNode = currentNode.prev;
            preNode.next = newNode;
            newNode.next = currentNode;
            newNode.prev = preNode;
            currentNode.prev = newNode;
            this.length++;
        }
        return true;
    }

    // remove: remove a node at a position
    remove(index) {
        if (index >= this.length || index < 0) return false;
        if (index === this.length){
            return this.pop();
        } else if (index === 0) {
            return this.shift();
        } else {
            var removedNode = this.get(index);
            var nextNode = removedNode.next;
            var preNode = removedNode.prev;
            preNode.next = nextNode;
            nextNode.prev = preNode;
            removedNode.prev = null;
            removedNode.next = null;
            this.length--;
            return removedNode;
        }
    }

    // reverse
    reverse() {
        if (!this.head) return undefined;
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        
        this.head = current;
        console.log(current);
        while (current) {
            var prev = current.prev;
            current.prev = current.next;
            current.next = prev;
            current = current.next;
        }
        
        return this;
    }


}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
// list.get(3);