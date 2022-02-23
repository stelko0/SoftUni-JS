function add(number) {
  let temp = 0;

  function recursive(x) {
    temp += x;

    return recursive;
  }
  recursive.toString = () => temp;
  return recursive(number);
}

console.log(add(1));
console.log(add(1)(6)(-3));
