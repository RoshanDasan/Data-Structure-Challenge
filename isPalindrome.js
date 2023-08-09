function isPalindrome(x) {
  let temp = x;
  let rem,
    rev = 0;

  while (x > 0) {
    rem = x % 10;
    x = parseInt(x / 10);
    rev = rev * 10 + rem;
  }

  if (temp == rev) {
    return true;
  }

  return false;
}

let ans = isPalindrome(212);
console.log(ans);
