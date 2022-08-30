//"racecar"

function palindrome(string) {
  let reverseString = "";

  for (let i = 0; i < string.length; i++) {
    reverseString = string[i] + reverseString;
  }
  return string === reverseString;
}

console.log(palindrome("racecar"));
console.log(palindrome("hello"));
