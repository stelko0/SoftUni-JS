function yardGreening(meters) {
  let total = meters * 7.61;
  let discount = total * 0.18;
  
  console.log(`The final price is: ${total - discount} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
yardGreening([550]);