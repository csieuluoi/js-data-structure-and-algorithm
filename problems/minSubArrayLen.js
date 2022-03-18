function minSubArrayLen (arr, number) {
    if (arr.length < 0) {
        return null
    }
    var sum = 0;
    var len = 0
    var minlen = arr.length+1;
    var j = 0;
    var i = 0;
    while(i<=arr.length) {
        if (sum < number) {
            sum += arr[i];
            i++;
        }
        else {
            sum = sum - arr[j];
            len = i-j;
            j += 1;
            if (len == 1){
                return 1
            }
            if (len < minlen) {
                minlen = len;
            }
            
        } 
        
    }
    if (minlen > arr.length) {
        return 0
    } else{
        return minlen
    }
}
minSubArrayLen ([3, 1, 7, 11, 2, 9, 8, 21, 19], 52)