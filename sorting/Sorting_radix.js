// getting a digit at a specific position
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// counting the number of digits
function digitCount(num){
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// get most digits
function mostDigits(nums){
    let maxDigits=0;
    for (let i=0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radix_sort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k=0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []) // a buckets of 10 emty array
        for (let i=0; i<nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets); // ...args is pretty much similar to **args in python
    }
    return nums;
}

radix_sort([302, 12, 323, 11, 4, 12, 1444, 23, 5]);