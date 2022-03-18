// Big O of Hashed Tables:
// averate case: Insert O(1),  deletion O(1), access O(1)

// hash function
function hash(key, arrayLen){
    let total = 0;
    for (let i = 0; i < key.length; i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

function hash(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i=0; i<Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// arrayLen is prime number would help to reduce collisions 

// dealing with collisions
// 1. separate chaining
// storing together in a nested structure
// 2. Linear probing
// storing new data in the next empty position


// Hash table class
class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31; 
        for (let i = 0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // set - use separate chaining
    set (key, value){
        let index = this._hash(key);
        if (!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return index;
    }
    // get
    get(key){
        let index = this._hash(key);
        if (this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

//     // get all keys of the hash table
    keys(){
        let valuesArr = [];
        for (let i = 0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (let j = 0; j< this.keyMap[i].length; j++){
                    // preventing from adding duplicate values
                    if (!valuesArr.includes(this.keyMap[i][j][0])) {
                        valuesArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return valuesArr;
    }

    // get all values of the hash table
    values(){
        let valuesArr = [];
        for (let i = 0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (let j = 0; j< this.keyMap[i].length; j++){
                    // preventing from adding duplicate values
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}


let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")
