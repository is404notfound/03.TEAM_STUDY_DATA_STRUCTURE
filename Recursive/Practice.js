const MAX = 5;

/* 1부터 n까지 출력 */
function printRecursive(index = 1, target) {
  if (index > target) return;
  console.log(index);
  printRecursive(index + 1, MAX);
}