var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }  
  let array = [];
  while (x > 9) {
    array.push(x % 10);
    x = Math.floor(x / 10)
  }
  array.push(x);
  let j = array.length-1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[j]) {
        return false;
    }
    j-=1;
  }
  return true

};

console.log(isPalindrome(122))