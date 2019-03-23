// find most repeating char

const maxChar = (arr) => {
  let newArr = arr[0].split('');
  let obj = {};

  for (let i = 0; i < newArr.length; i += 1) {
    if (!obj[newArr[i]]) {
      obj[newArr[i]] = 1;
    } else {
      obj[newArr[i]] += 1;
    }
  }

  let max = -Infinity;
  let maxCharacter = '';

  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxCharacter = key;
    }
  }
  return maxCharacter;
};

console.log(maxChar(['Maritza']));
console.log(maxChar(['abcabcbb']));
