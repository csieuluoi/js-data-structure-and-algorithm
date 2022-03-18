// Write a Min Binary Heap - lower number means higher priority
// Each node has a val and a priority. Use the priority to build the heap

// Enqueue method accepts a value and priority, 
// makes a new node, and puts it in the right spot based off of its priority

// Dequeue method removes root element, 
// return it and rearranges heap using priority

// class Node{
//     constructor(val, priority) {
//         this.val = val;
//         this.priority = priority;
// //         this.insertTime = Date.now();
//     }
// }
// class PriorityQueue{
//     constructor(){
//         this.values = [];
//     }

//     // insert
//     enqueue(val, priority){
//         var newNode = new Node(val, priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }

//     // Bubble up
//     bubbleUp() {
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx]
//             if (element.priority >= parent.priority) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }

//     // extract max -  remove root in a max heap
//     dequeue(){
//         const min = this.values[0];
//         const end = this.values.pop();
//         if (this.values.length > 0){
//             this.values[0] = end;
//             // trickle down
//             this.sinkDown();
//         }
//         return min;
//     }

//     // bubble down
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true) {
//             let leftChildIdx = 2*idx + 1;
//             let rightChildIdx = 2*idx + 2;
//             let leftChild, rightChild;
//             let swap = null;
//             // check if the element is larger than left child or right child,
//             // also check if element is larger than both, if it is, swap element to the larger child
//             if (leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if (leftChild.priority < element.priority){
//                     swap = leftChildIdx;
//                 }
//             }
//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if (
//                     (swap === null && rightChild.priority > element.priority) || 
//                     (swap != null && rightChild.priority < leftChild.priority)
//                 ) {
//                     swap = rightChildIdx;    
//                 }
//             }
//             // if there's no appropriate child, break
//             if (swap == null) break;
//             // if there 're any child that appropriate, do the swap
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }

// }


class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

arr = [5, 1, 4, 2, 3];
arr1 = ["common cold", "gunshot wound", "high fever", "broken arm", "glass in foot"]
let ER = new PriorityQueue();

for (let i =0; i < arr.length; i++){
    ER.enqueue(arr1[i], arr[i]);
}
