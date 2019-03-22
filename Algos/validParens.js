function isValid(str) {
  const obj = {
    parens: 0,
    brackets: 0,
    curly: 0,
    order: []
  }

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        obj.parens += 1;
        obj.order.push('(');
        break;
      case ')':
        obj.parens += -1;
        if (obj.order.pop() !== '(') {
          return false
        }
        break;
      case '[':
        obj.brackets += 1;
        obj.order.push('[');
        break;
      case ']':
        obj.brackets += -1;
        if (obj.order.pop() !== '[') {
          return false
        }
        break;
      case '{':
        obj.curly += 1;
        obj.order.push('{');
        break;
      case '}':
        obj.curly += -1;
        if (obj.order.pop() !== '{') {
          return false
        }
        break;
    }
  }

  if (obj.parens === 0 && obj.brackets === 0 && obj.curly === 0) {
    return true
  }

  return false
}

console.log(isValid('({[]})[[[]]]'));

// --iterate through str
// make object to keep count of open and closed parans to equal 0
