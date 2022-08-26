// 1 1 2 3 5 8 13 21 ...

// var x = 1;
// var y = 1;
// var count = 3;

// var next = x + y;
// x = y;
// y = next;

function fib(n) {
  if (n < 3) {
    return 1;
  }
  var x = 1;
  var y = 1;
  var count = 3;

  while (count <= n) {
    var next = x + y;
    x = y;
    y = next;
    count++;
  }
  return next;
}

console.log(fib(1));
