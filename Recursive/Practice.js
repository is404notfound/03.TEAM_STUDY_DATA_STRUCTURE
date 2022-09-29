const MAX = 5;

/* 1부터 n까지 출력 */
function printRecursive(index = 1, target) {
  if (index > target) return;
  console.log(index);
  printRecursive(index + 1, MAX);
}

// printRecursive(1, MAX);

/* 1부터 n까지 역순으로 출력 */
function printReversed(index = 1, target) {
  if (target < index) return;
  console.log(target);
  printReversed(index, target - 1);
}

// printReversed(1, MAX);

/*두 수 사이의 홀수 출력*/
function printOddNumber(index = 1, target = MAX, res = []) {
  if (index > target) {
    console.log('result: ', res);
    return
  }
  (index % 2 !== 0) && res.push(index);
  printOddNumber(index + 1, MAX, res);
}

// printOddNumber(1, MAX, []);

/* 1부터 n까지의 합 */
function getTotal(index = 1, target = MAX, total = 0) {
  if (index > target) {
    console.log('total:: ', total);
    return
  }
  getTotal(index + 1, target, total + index);
}

// getTotal();

/* 팩토리얼 계산 */
function getFactorial(index = 1, target = MAX, result = 1) {
  if (index > target) {
    console.log('result:: ', result);
    return
  }
  getFactorial(index + 1, target, result * index);
}

// getFactorial();