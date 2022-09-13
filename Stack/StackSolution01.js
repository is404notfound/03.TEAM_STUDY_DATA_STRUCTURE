// Question - https://school.programmers.co.kr/learn/courses/30/lessons/12906
  
function solution(arr)
{
  const MAX = 1_000_000;
  let answer = [];
  const stack = new Stack(MAX);


  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      stack.myPush(arr[i]);
      continue;
    }
    if (arr[i] === stack.myPeak()) continue;
    stack.myPush(arr[i]);
  }

  answer = stack.area.filter((item)=> { return item === 0 || item } );

  return answer;
}

class Stack {
  constructor (size) {
    this.area = Array(size).fill(null);
    this.index = 0;
    this.size = size;
  }

  myPush (val) {
    if (this.size === this.index) {
      throw new Error('The stack is full!');
      return
    }
    this.area[this.index] = val;
    this.index ++;
  }

  myPop () {
    if (this.myIsEmpty()) {
      throw new Error('The stack is empty!');
      return
    }
    this.area[--this.index] = null
  }

  myPeak () {
    return this.area[this.index - 1];
  }

  myIsEmpty () {
    return this.index === 0 && this.area[this.index] === null;
  }
}