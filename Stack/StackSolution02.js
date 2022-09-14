function solution(s){
  const stack = [];

  for (i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      const popped = stack.pop();
      if (!popped) return false;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}