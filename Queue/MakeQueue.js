/* HEAD를 비워놓지 않는 방식으로 Queue를 작성하기 */
const MAX = 3;
class MyQueue {
  constructor(size){
    if (size < 1) {
      console.log('최소 사이즈는 1 이상이어야 합니다.');
      return
    }
    this.array = new Array(size).fill(null);
    this.size = size;
    this.head = 0; // head를 안 비워둔 방법
    this.rear = 0;
  }
  myAdd (value) {
    if ((this.rear === this.head) && !!this.array[this.rear]) {
      console.log ('MyQ의 사이즈가 꽉 찼습니다.');
      return;
    }
    this.myIsEmpty() && this.myResetIdx();

    this.array[this.rear ++] = value;
    this.rear = this.rear % this.size;
  }
  myPoll () {
    if (this.myIsEmpty()) {
      console.log('MyQ가 비어있습니다');
      return;
    }

    const popped = this.array[this.head];
    this.array[this.head++] = null;
    this.head = this.head % this.size;
    return popped;
  }
  myIsEmpty () {
    return this.head === this.rear && !this.array[this.head];
  }
  myResetIdx() {
    this.head = 0;
    this.rear = 0;
  }
}

const Q = new MyQueue(MAX);