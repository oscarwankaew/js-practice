// () = true
// (}] = flase
// (){} = true

function parentheses(str) {
  let bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let heap = [];
  for (let char of str) {
    if (bracket[char]) {
      heap.push(bracket[char]);
    } else {
      if (heap.pop() !== char) {
        return false;
      }
    }
  }
  return !heap.length;
}

console.log(parentheses("([)]"));
