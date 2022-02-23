function getFibonator() {
  let numbers = [0, 0];

  return () => {
    let result = numbers[0] + numbers[1];
    numbers = [numbers[1], numbers[1] + numbers[0] || 1];
    return result || 1;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
