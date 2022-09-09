// 1. JS로 이차원 배열 만들기 (5 x 5)

// 1-1. 제출 1 : for
const makeArray1 = ()=> {
  let arr = new Array(5);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(5).fill(null);
  }

  return arr
}

// 1-2. 제출 2 : ES5
const makeArray2 = (i, j)=> {
  return Array.from(Array(i), ()=> Array(j).fill(null));
}

// 1-3. 제출 3 : 원시적인 방법
const makeArray3 = ()=> {
  return [
    [null, null, null, null, null]
    , [null, null, null, null, null]
    , [null, null, null, null, null]
    , [null, null, null, null, null]
    , [null, null, null, null, null]
  ];
}

//2. [1, 2, 3, 4, 5] 만들기

// 2-1. 제출
const array4 = Array(5).fill(1);

for (let i = 0; i < array4.length; i++) {
  array4[i] = array4[i] + i;
}

// 2-2. 이상적이라고 생각하는 방식
// from(), map() 차이 : From()은 배열을 만들면서 초기화, map()은 만든 후 값을 할당
const MAX_SIZE = 10_000 // 000단위로 적어주는 게 좋음
const array5 = Array.from(Array(MAX_SIZE), (_, i) => i + 1);

// 2-3.10*10 1~100까지
// 제출
const array6 = Array.from(Array(10), (_, i) => i + 1);

for (let i = 0; i < array6.length; i++) {
  array6[i] = Array.from(Array(10), (_, j) => (i * 10) + j + 1);
}

// 정석

