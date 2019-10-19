module.exports = function zeros(expression) {
  const numbers = expression.split('*');
  let zeros=0, 
  number;

  for (let i = 0; i < numbers.length; i++){
    number = numbers[i];
    if( number.includes("!!")){
      number = number.replace("!!", "");
      realNum = parseInt(number);
      for (let j = realNum; j>0; j = j-2){
        if (j%5 === 0){
          zeros++;
        };
        if (j%25 === 0){
          zeros++;
        }
      }
    } else {
      number = number.replace("!", "");
      realNum = parseInt(number);
      for (let z = realNum; z > 0; z = z - 1) {
        if (z % 5 === 0) {
          zeros++;
        };
        if (z % 25 === 0) {
          zeros++;
        }
      }
    }
  }
  
  function check(Num) {
    return Num.includes("!!") && parseInt(Num.replace("!!", ""))%2;
  }

  if (numbers.every(check)){
    zeros=0;
  };



return zeros;
}
 
  // your solution
