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