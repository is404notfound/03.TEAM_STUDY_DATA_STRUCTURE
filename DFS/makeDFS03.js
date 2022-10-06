// Simple Visitor Check

const MAX = 1_00;
let isArrived = false; // 방문자 체크용

function dfs(horse, targetPositon, count, currentPositon) {
  if (isArrived) return;
  if ( 0 > currentPositon || currentPositon > targetPositon) {
    console.log(`${horse}번 말은 도착하지 못했습니다.`);
    return;
  }
  if (targetPositon === currentPositon) {
    isArrived = true;
    console.log(`${horse}번 말이 ${count}걸음 만에 도착하였습니다.`);
    return;
  }
  dfs(horse, targetPositon, count + 1, currentPositon + horse);
  dfs(horse, targetPositon, count + 1, currentPositon - 1);
}

function find(horse, targetPositon) {
  dfs(horse, targetPositon, 0, 0);
}

const horses = [2, 3, 4]; // 각각의 말은 -1씩 뒤로 이동할 수 있음
horses.forEach(horse=> find(horse, MAX));