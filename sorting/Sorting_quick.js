function pivot_helper(arr, start=0, end=arr.length){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < end; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

function quick_sort(arr, left = 0, right = arr.length)  {
    if (left < right) {

        pivotIdx = pivot_helper(arr, left, right);
        quick_sort(arr, left, pivotIdx-1);
        quick_sort(arr, pivotIdx + 1, right);
    }
    return arr;
}

arr = [4, 5, 6, 7, 3, 9, 1, 20, 32, 1, 2, 3, 1, 6];

console.log(quick_sort(arr));