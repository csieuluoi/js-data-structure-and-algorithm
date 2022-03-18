// use linked list rather than array is more efficient 
// bz we don't need all the indexes of the array

// Stack implimentation using a singly linked list
// stack is last in first out

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push : O(1) 
    // it's actually unshift method in singly linked list this make pop O(1) time complexity 
    push(value){
        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;   
            this.first.next = temp;         
        }
        return ++this.size;
    }

    // pop O(1)
    pop(){
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
