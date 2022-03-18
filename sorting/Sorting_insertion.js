// iterative for swapping
function insertionSort(arr){
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i-1; j >=0 && arr[j]>currentVal; j--) {
            arr[j+1] = arr[j];

        }
        arr[j+1] = currentVal;
        console.log(arr);

    }
    return arr
}

// recursion for swapping
function insertionSort1(arr){
    var l = arr.length, i=1;
    for (var i = 1; i < arr.length; i++) {


        var currentVal = arr[i];
        function swap(i) {
            j = i-1;
            if (currentVal < arr[j] && j>=0) {
                arr[j+1] = arr[j];
                console.log(j);
                swap(j);
            }

        

        } 
        swap(i);
        arr[j+1] = currentVal; 
    }
    return arr
}

// insertionSort([2, 1, 9, 76, 4]);
insertionSort1([76, 75, 74, 50, 4, 5, 10, 23, 32]);