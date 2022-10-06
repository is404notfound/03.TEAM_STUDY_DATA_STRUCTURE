const MAX = 1_0;

function dfs (p, index, target = MAX, current) {
  if (current > target) {
    console.log('도착 못했습니다');
    return -1
  }
  if (target === current) {
    console.log(index + '회 만에 도착');
    return index
  }

  // 마이너스 조건이 있는 경우, 방문자 체크를 하지 않으면 콜스택 초과를 야기한다.
  dfs(p, index + 1, target, current + p); // 사람(2) 만큼 올라가는 로직
  dfs(p, index + 1, target, current - 1); // 사람(-1)만큼 내려가는 로직
}

function logic (p, target) {
  let cnt = 0;
  dfs(p, 0, target, 0);
  return cnt
}

logic(3, MAX);