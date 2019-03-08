// Longest Substring Without Repeating Characters

// find longest substring and return length of longest subString

// const strEx = 'abcabcbb';
// const obj = {
//  a: 2,
//  b: 4,
//  c: 2
// }

const cacheString = (s) => {
  let cache = {};
  let arr = []

  for (let i = 0; i < s.length; i += 1) {
    let val = s[i];
    if (!cache[val]) {
      cache[val] = 1;
      continue;
    }
      // get keys and put them in array and remove them from cache{}
      arr.push(Object.keys(cache).join(''));
      cache = {};
      cache[val] = 1
  }

  arr.push(Object.keys(cache).join(''));

  // arr has all the strings, now find the longest one
    let max = arr[0].length
    let maxIndex = 0

    for (let i = 0; i < arr.length; i += 1) {

      if (arr[i].length > max) {
        max = arr[i].length;
      }
    }

    return max;
}

console.log(cacheString('abcddasjfnlwop'));
