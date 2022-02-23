function arrayRotation(list, rotations) {
  for (let i = 0; i < rotations; i++) {
    let value = list[0];
    list.shift();
    list.push(value);
  }
  console.log(list.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
