function dfs (horse, pos, target, cnt = 0) { // recursion
  if (pos > target) {
    console.log( `${horse}번 말은 도착하지 못했습니다.`);
    return -1
  } else if (target === pos) {
    console.log(horse + '번 말 ' + cnt + '회만에 도착');
    return cnt
  }
  dfs(horse, pos + horse, target, cnt + 1);
}

function logic(horses, target) {
  horses.forEach((el)=> {dfs(el, 0, target, 0);})
  // 말 번호, 도착했을 때 몇 회만에 갔는지 || 도착 못했으면 -1
}

const horses = [1, 2, 3];
const target = 10;
logic(horses, target);