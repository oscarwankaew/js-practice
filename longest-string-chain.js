function longestStringChain(words) {
  let cache = {};
  words.sort((a, b) => a.length - b.length);

  let max = 0;

  for (let word of words) {
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
      let subword = word.slice(0, i) + word.slice(i + 1);
      longest = Math.max(longest, (cache[subword] || 0) + 1);
    }

    cache[word] = longest;
    max = Math.max(max, longest);
  }

  return max;
}

console.log(longestStringChain(["a", "b", "ba", "bca", "bda", "bdca"]));
