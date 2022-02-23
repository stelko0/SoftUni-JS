function solve(n, k){
    const array = [1];
    for (let i = 1; i < n; i++) {
      array.push(array.slice(-k).reduce((a, b) => a + b, 0));
    }
    return array;
}

solve(6, 3)