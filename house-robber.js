function rob(houses) {
  if (!houses.length) {
    return 0;
  }
  if (houses.length === 1) {
    return houses[0];
  }
  if (houses.length === 2) {
    return Math.max(houses[0], houses[1]);
  }

  for (let i = 2; i < houses.length; i++) {
    houses[i] = Math.max(houses[i - 2] + houses[i], (houses[i - 3] || 0) + houses[i]);
  }

  return Math.max(houses[houses.length - 1], houses[houses.length - 2]);
}

console.log(rob([2, 7, 9, 3, 1]));
