function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  var i = str1.length - 1;
  var j = str2.length - 1;
  while (j>=0) {
      
      if (str1[i] == str2[j]) {
          i--; j--;
      } else {
          j--;
      }
      if (i<0){
          return true
      } 
  }
  return false
}

isSubsequence("hello", "hello world");