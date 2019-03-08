// Reverse Integer
// EX.) 120 --> 21
// EX.) 123 --> 321
// EX.) -455 --> -554

const reverseInt = (num) => {
  let sign = Math.sign(num);

  let str = num.toString();

  let ans = '';

  for (let i = 0; i < str.length; i += 1) {
    ans = str[i] + ans;
  }
  let newNum = parseInt(ans);
  return newNum * sign;
}

console.log(reverseInt(-1245));

// const reversed = num.toString().split('').reverse().join('');
// return parseInt(reversed) * Math.sign(num);

// use parseInt() instead of Number()
