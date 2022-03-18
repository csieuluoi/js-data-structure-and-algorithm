// recusive version => O(2^n)

function fibonacci(n){
    if (n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

// dynamic programing 
// O(n)

// // enter memoization
// // -> top down solution
// // since we still recusion, if n is too large, 
// // it would result in call stack size exceeded
// // the tabulated version would solve this.
// function fib(n, memo = []){
//     if (memo[n] !== undefined) return memo[n];
//     if (n<=2) return 1;
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res
// }

// or 
function fib(n, memo = [undefined, 1, 1]){
    if (memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res
}


// tabulated version
// -> bottom up solution
function fib_tab(n){
    if (i<=2) return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <=n; i++){

        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums;
}