function averagePair(arr, val){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0){
      return false
  }
  var j = arr.length-1;
  var i = 0;

  while(i<j) {

    if ((arr[i] + arr[j]) == val*2){
        return true
    } else if ((arr[i] + arr[j]) < val*2) {
        i++;
        console.log("i plus 1");
    } else {
        j--;
    }
}

return false
}

arr = [1, 3, 3, 5, 6, 7, 10, 12, 19];
val = 8;
averagePair(arr, val)