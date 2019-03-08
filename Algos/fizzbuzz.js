// numbers 1 - 100
//  multiples of three = FIZZ
// multiples of five = BUZZ
// multiples of fifteen = FIZZBUZZ

const fizzBuzz = (num) => {
  if (num % 3 === 0) {
    console.log("FIZZ");
  }
  if (num % 5 === 0) {
    console.log("BUZZ");
  }
  if (num % 15 === 0) {
    console.log("FIZZBUZZ");
  }
  return num;
}

fizzBuzz(30);
