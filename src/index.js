module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  
for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (bracketsConfig[j][0] === stack[stack.length - 2] && bracketsConfig[j][1] === str[i]) {
            stack.pop();
            stack.pop();  
        }
    }
}

return stack.length ? false : true;

}
