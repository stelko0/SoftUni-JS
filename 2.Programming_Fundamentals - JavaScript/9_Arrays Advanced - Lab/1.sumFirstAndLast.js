function sumFirstAndLast(nums){
  let first = Number(nums.shift());
  let last = Number(nums.pop());
  console.log(first + last);
}

sumFirstAndLast(['20', '30', '40']);