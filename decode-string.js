function decode(string) {
  let multiply = [];
  let tempMulti = "";
  let repeatStr = [];
  let solution = "";
  for (let char of string) {
    if (!isNaN(char)) {
      tempMulti = `${tempMulti}${char}`;
    } else if (char === "[") {
      multiply.push(tempMulti);
      tempMulti = "";

      repeatStr.push(solution);
      solution = "";
    } else if (char === "]") {
      solution = repeatStr.pop() + solution.repeat(multiply.pop());
    } else {
      solution += char;
    }
  }

  return solution;
}

console.log(decode("3[a]2[bc]"));
