function reverseArray(array){
  for(let i = 0; i < array.length / 2; i++){
    let originalArray = array[i];
    let prevIndex = array.length - 1 - i;
    array[i] = array[prevIndex];
    array[prevIndex] = originalArray
  }
  console.log(array.join(' '));
}