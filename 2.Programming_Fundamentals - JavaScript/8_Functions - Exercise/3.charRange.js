function chars(one, two) {
  let first = one.charCodeAt(0);
  let second = two.charCodeAt(0);

  let array = [];
  for (let i = Math.min(first, second) + 1; i < Math.max(first, second); i++) {
    let char = String.fromCharCode(i);
    array.push(char);
  }
  return array.join(' ');
}

console.log(chars('a', 'd'));
