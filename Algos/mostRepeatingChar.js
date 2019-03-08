// find most repeating char
const strEx = 'abcabcbb';
// const obj = {
//  a: 2,
//  b: 4,
//  c: 2
// }

const cacheString = (str) => {
  let obj = {}
  for (let i = 0; i < str.length; i += 1) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
      continue;
    }
    obj[str[i]] += 1
  }
  return obj;
}

const mostLetter = (val) => {
  let newObj = cacheString(strEx);
  let maxKey = '';
  let maxVal = -Infinity;
  for (let key in newObj) {
    const val = newObj[key]
    if (val > maxVal) {
      maxVal = val;
      maxKey = key;
    }
  }
  return maxKey;
}

console.log(mostLetter(strEx));
