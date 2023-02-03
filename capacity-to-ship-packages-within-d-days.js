// const shipWithinDays = function (weights, days) {
//   let l = Math.max(...weights);
//   let r = weights.reduce((ac, e) => ac + e, 0);
//   while (l < r) {
//     const mid = Math.floor((l + r) / 2);
//     if (valid(mid)) {
//       r = mid;
//     } else l = mid + 1;
//   }

//   return l;

//   function valid(mid) {
//     let res = 1,
//       cur = 0;
//     for (let w of weights) {
//       if (cur + w > mid) {
//         cur = 0;
//         res++;
//       }
//       cur += w;
//     }
//     return res <= days;
//   }
// };

// capacity to ship packages within d days 2

const shipWithinDays = function (weights, D) {
  let left = 0,
    right = 0;
  for (let w of weights) {
    left = Math.max(left, w);
    right += w;
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2),
      need = 1,
      cur = 0;
    for (let w of weights) {
      if (cur + w > mid) {
        need += 1;
        cur = 0;
      }
      cur += w;
    }
    if (need > D) left = mid + 1;
    else right = mid;
  }
  return left;
};
