function solve(first, second) {
  let firstNum = Number(first);
  let secondNum = Number(second);
  let firstF = factoriel(firstNum);
  let secondF = factoriel(secondNum);
  let difference = divideNum(firstF, secondF);
  console.log(difference.toFixed(2));

  function factoriel(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  function divideNum(firstF, secondF) {
    let result = firstF / secondF;
    return result;
  }
}
