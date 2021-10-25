// クリック
// result部分のDOM取得

// 計算表示部分
const result = document.querySelector('.result');

/* 数字クリックした時の処理 */
function inputNum(int) {
  let object = document.querySelector('.result');
  object.value += int;
}

/* 液晶に表示 */
function calculate() {
  result.value = new Function("return " + result.value)();//returnはスペース空ける
}

/* クリアボタンを押す */
function clearNum() {
  result.value = '';
}
