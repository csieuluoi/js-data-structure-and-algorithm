function binarySearch(sorted_arr, value){
  // add whatever parameters you deem necessary - good luck!
  var left = 0;
  var right = sorted_arr.length-1;
  var middle = Math.floor((left + right) / 2);
  while (sorted_arr[middle] !== value && start <= end ) {
    if (sorted_arr[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);

  }
  if (sorted_arr[middle] === value) {
    return middle;
  } else {
    return -1;
  }
}

arr = [1, 2, 3, 4, 5];
value = 3;

binarySearch(arr, value);