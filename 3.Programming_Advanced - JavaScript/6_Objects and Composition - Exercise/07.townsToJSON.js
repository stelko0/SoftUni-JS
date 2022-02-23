function solve(input) {
  let parser = (str) =>
    str
      .split('|')
      .filter((x) => x !== '')
      .map((x) => x.trim())
      .map((x) => (isNaN(x) ? x : Number(Number(x).toFixed(2))));
  let headings = parser(input[0]);

  return JSON.stringify(
    input.slice(1).map((x) => {
      let line = parser(x);
      return headings.reduce((row, heading, entry) => {
        row[heading] = line[entry];
        return row;
      }, {});
    })
  );
}
