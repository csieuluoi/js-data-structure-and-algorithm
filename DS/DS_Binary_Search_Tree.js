// when to use BFS or DFS 
// Time complexity is the same for both strategy
// when the tree is wide -> DFS would be more memory efficient

// when to use different orders of DFS
// in order => remain the order of the tree (eg: -> sorted array)
// pre order => use to export a tree structure so that easily to be reconstructed or copied
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // insert 
    insert(value){
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } 
        var current = this.root;
        while(true){
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null){
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } 
        }
    }


    // find
    find(value){
        if (this.root === null) return false;
        var current = this.root, found = false;
        while (current && !found){
            if (current.value > value){
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
    // Tree traversal
    // Breadth First Search
    //          10
    //      6       15
    //   1    7  11     17

    // ==> [10, 6, 15, 1, 7, 11, 17]     
    BFS(){
        var node = this.root,
            data = [],
            queue = []; 
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data; 
    }
    

    // Depth First Search - PreOrder
    //          10
    //      6       15
    //   1    7  11     17

    //==> [10, 6, 1, 7, 15, 11, 17]

    DFS_PreOrder(){
        var current = this.root,
            data = [];
        function traverse(node){
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);           
        }
        traverse(current)
        return data;
    }

    // Depth First Search - PostOrder
    //          10
    //      6       15
    //   1    7  11     17

    //==> [1, 7, 6, 11, 17, 15, 10]

    DFS_PostOrder(){
        var current = this.root,
            data = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);   
            data.push(node.value);        
        }
        traverse(current)
        return data;
    }

    // Depth First Search - InOrder
    //          10
    //      6       15
    //   1    7  11     17

    //==> [1, 6, 7, 10, 11, 15, 17]

    DFS_InOrder(){
        var current = this.root,
            data = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            data.push(node.value);        
            if (node.right) traverse(node.right);   
        }
        traverse(current)
        return data;
    }
}

var tree = new BinarySearchTree()
arr = [4, 2, 5, 7, 3, 8, 9, 1]
for (let i = 0; i< arr.length; i++){
    tree.insert(arr[i]);
}
