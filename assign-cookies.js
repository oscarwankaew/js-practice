function assignCookie(g, s) {
  let solution = 0;
  let greedIndex = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let cookieSize of s) {
    if (cookieSize >= g[greedIndex]) {
      solution++;
      greedIndex++;
    }
  }

  return solution;
}

console.log(assignCookie([1, 2, 3], [1, 1]));
