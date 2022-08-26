// "hello" => "olleh"
// newString = ""
// newString = char + newString

function reverseString(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    newString = string[i] + newString;
  }
  return newString;
}

console.log(reverseString("hello"));
