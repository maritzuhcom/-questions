// const reverse = (str) => {
//   let arr = str.split('');
//   let ans = []
//   arr.map((char) => {
//     ans = char + ans;
//     return ans;
//   });
//   return ans
// }
// console.log(reverse('hello'));

const reverse = (str) => {
  let arr = str.split('');
  return arr.reduce((ans, char) => {
    ans = char + ans;
    return ans;
  },[]);
}

console.log(reverse('hello'));
