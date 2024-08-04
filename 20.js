// const s = "()[]{}";
const s = "([)]"
var isValid = function (s) {
  let valid = true;
  if (s.length % 2 !== 0) return (valid = false);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(stack);
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      console.log("pusched :", char , i);
    }
    // if (char [stack.length-1] === ")"  stack[stack.length-1] === "]"  stack[stack.length-1] === "}") return false
    else if (
      (char === ")" && stack[stack.length - 1] === "(") ||
      (char === "]" && stack[stack.length - 1] === "[") ||
      (char === "}" && stack[stack.length - 1] === "{")
    ) {
      console.log(i);
      stack.pop();
      valid = true;
    }
    // else if (
    //   (char === ")" && stack[stack.length - 1] !== "(") ||
    //   (char === "]" && stack[stack.length - 1] !== "[") ||
    //   (char === "}" && stack[stack.length - 1] !== "}")
    // )
    else valid = false;
    // else return false
  }
  return valid;
};

console.log(isValid(s));
