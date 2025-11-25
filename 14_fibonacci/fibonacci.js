const fibonacci = function fib(a) {
  if (a < 0) return "OOPS";
  if (a == 0) return 0;
  else if (a == 1) return 1;
  return fib(a - 1) + fib(a - 2);
};

// Do not edit below this line
module.exports = fibonacci;
