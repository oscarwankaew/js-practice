function groupAnagrams(strings) {
  let cache = {};

  for (let string of strings) {
    let sortedKey = string.split("").sort().join("");
    !cache[sortedKey] ? (cache[sortedKey] = [string]) : cache[sortedKey].push(string);
  }
  return Object.values(cache);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
