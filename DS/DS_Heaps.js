// implementtation using an array

// O(logn) for insert / removal
// O(n) for search

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    // insert
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    // Bubble up
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx]
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    // extract max -  remove root in a max heap
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = end;
            // trickle down
            this.sinkDown();
        }
        return max;
    }

    // bubble down
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild, rightChild;
            let swap = null;
            // check if the element is larger than left child or right child,
            // also check if element is larger than both, if it is, swap element to the larger child
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || 
                    (swap != null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;    
                }
            }
            // if there's no appropriate child, break
            if (swap == null) break;
            // if there 're any child that appropriate, do the swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

arr = [41, 38, 33, 18, 27, 12];
let heap = new MaxBinaryHeap();

for (let i =0; i < arr.length; i++){
    heap.insert(arr[i]);
}


// Heap_sort => O(nlog(n)) since removal take O(log(n))
sorted_arr = [];
while(heap.values.length > 0){
    sorted_arr.push(heap.extractMax());
}

console.log(sorted_arr);


