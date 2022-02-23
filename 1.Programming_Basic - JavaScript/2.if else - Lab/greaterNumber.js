function greaterNumber(NumArr) {
  let first = Number(NumArr[0]);
  let second = Number(NumArr[1]);
  if (first > second) {
    console.log(first);
  }else{
    console.log(second);
  }
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);
greaterNumber(["-5", "5"]);