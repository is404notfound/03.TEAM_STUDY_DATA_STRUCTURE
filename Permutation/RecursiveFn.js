// 01
function recursive (cnt) {
  // 대소 비교를 작성할 때에는 다른 사람이 읽기 편하도록 ㅎ
  if (3 <= cnt && cnt < 5) {
    return
  }
  console.log(cnt);
  recursive(cnt + 1);
}

// 02 원시 값을 파라미터로 전달해도, 기존의 원시 값은 영향이 없다 (call by value)
let origin = 0;
function checkIsChange (value) { // value 값이 원시인지 참조인지 알수 없음
  value = 1;
}
checkIsChange(origin);
console.log(origin); // result : 0

// 03 배열은 참조형, 참조형은 주소를 넘겨주기 때문에 변경이 된다
const alphabet = ['A', 'B']; // 배열은 참조형, 주소를 던짐
function swapAlphabet (arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}
swapAlphabet(alphabet);
console.log(alphabet); // result : ['B', 'A']

// 04 Permutation
const originArr = Array(3).fill().map((_, i)=> i + 1);

function permutation (originArr, res, target = originArr.length, deep = 0) {
  // return conditon
  if (deep === target) {
    console.log('initialize', res, originArr.slice(0,3));
    res.push(originArr.slice(0, target));
    return
  }

  // recursive
  for (let i = deep; i < target; i ++) {
    swap(originArr, deep, i);
    permutation(originArr, res, target, deep + 1);
    swap(originArr, deep, i);
  }
}

function swap (originArr, prev, next) {
  console.log('before swap', originArr, prev, next); // 맨 처음 자신과의 swap이 일어남
  const temp = originArr[prev];
  originArr[prev] = originArr[next];
  originArr[next] = temp;
  console.log('swapped', originArr);
}

function getPermutationList (originArr) {
  const res = [];
  permutation(originArr, res);
  return res;
}

const result = getPermutationList(originArr);
console.log('****result', result);