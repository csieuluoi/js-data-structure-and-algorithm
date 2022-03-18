
function maxSubarraySum(arr, max_size){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length<max_size){
      return null
  }
  if (arr.length < 0) {
      return null
  }
  var sum = 0;
  for (let t = 0; t<max_size; t++) {
      sum+=arr[t];
  }
  var tmp_sum = sum;
  for (let i=1; i<arr.length-max_size+1; i++){
      tmp_sum = tmp_sum - arr[i-1] + arr[i+max_size-1];
      console.log(i);
      console.log(tmp_sum, sum);
      if (tmp_sum  > sum) {
          sum = tmp_sum;
      }
  }
  return sum
}

maxSubarraySum([100, 200, 300, 400], 2);