// piece of data - val
// reference to next node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push method to insert new node 
    // O(1)
    push(val){
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next=newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    
    // pop out the last node
    // traverse through the list
    // O(n)
    pop(){
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while (current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        } 

        return current
    }   
    // shift the head 
    // O(1)
    shift(){
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        } 
        return currentHead;
    }

    // unshift - add node at first position
    // O(1)
    unshift(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

    }

    // get value at a specific position
    // O(n)
    get(i){
        if (i < 0 || i >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter!== i){
            current = current.next;
            counter ++;
        }

        return current;
    }
    // set/change value of a node at specific position
    // O(n)
    set(i, val){
        var foundNode = this.get(i);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false
    }
    // insert into a position a node with value given
    // O(n)
    insert(i, val){
        if (i===this.length){
            this.push(val);
            return true;
        } else if (i===0){
            this.unshift(val);
            return true
        } else if (i<this.length){
            var newNode = new Node(val);
            var prevNode = this.get(i);
            var temp = prevNode.next;
            newNode.next = temp;
            prevNode.next = newNode;
            this.length++;
            return true
        }
        return false
    }

    // remove a node at a position
    // O(n)
    remove(i) {
        if (i<0 || i>=this.length) return undefined;
        if (i === 0) return this.shift();
        if (i === this.length - 1) return this.pop();
        var previousNode = this.get(i-1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        
        return removed;
    }
    // print a linked list
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    // reversing the linked list
    // O(n)
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for (var i = 0; i<this.length; i ++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
//             this.print( );
        }
        return this;
    }
}


// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next  = new Node("you");


var first = new SinglyLinkedList();
first.push("Hello");
first.push("there");
first.push("how");
first.push("are");
first.push("you");
console.log(first);