function solve(...args) {
  const count = {};
  const result = args.map((е) => {
    count[typeof е] = (count[typeof е] || 0) + 1;
    return `${typeof е}: ${е}`;
  });

  result.forEach((е) => console.log(е));
  Object.entries(count)
    .sort((е, y) => y[1] - е[1])
    .map(([style, counts]) => console.log(`${style} = ${counts}`));
}

// Testing
solve('cat', 42, function () {
  console.log('Hello world!');
});

