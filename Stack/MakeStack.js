class MyStack {
  constructor (size) {
    this.size = size;
    this.index = 0;
    this.area = Array(size).fill(null);
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
    this.index --;
    this.area[this.index] = null;
    //     this.area[--this.index] = null
  }

  myPeak () {
    return this.area[this.index - 1];
  }

  myIsEmpty () {
    return this.index === 0 && this.area[this.index] === null;
  }
}

let stack = new MyStack(3);

stack.myPush('first');
stack.myPush('second');
stack.myPop();
console.log('peak: ', stack.myPeak());
console.log('result status:', stack);
