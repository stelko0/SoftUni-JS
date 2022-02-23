function solve(array) {
  let arr = [];
  let object = {
    add: (string) => arr.push(string),
    remove: (string) => (arr = arr.filter((x) => x !== string)),
    print: () => console.log(arr.join(',')),
  };
  array.forEach((x) => {
    let [command, value] = x.split(' ');
    object[command](value);
  });
}
