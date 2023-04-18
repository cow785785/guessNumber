let answer = Math.floor(Math.random() * 100);
const input = document.getElementById("num");
const button = document.getElementById("btn");
const textarea = document.getElementById("textarea");
const restartButton = document.getElementById("restart");
let range = [1, 100];
let guessedNumbers = [];
// console.log(answer);//直接看答案
button.addEventListener("click", function () {
  const guess = parseInt(input.value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    textarea.innerText = "無效猜測。請重新輸入";
    input.value = "";
    return;
  }
  if (guessedNumbers.includes(guess)) {
    textarea.innerText =
      "這個數字已經猜過了或不在範圍內！請輸入一個新的數字。" + range.join("~");
    return;
  }
  guessedNumbers.push(guess);
  if (guess === answer) {
    textarea.innerText = "恭喜！您猜對了。" + answer;
    input.value = "";
    button.disabled = true;
  } else if (guess < answer) {
    range[0] = guess;
    input.value=""
    textarea.innerText = "太小了！請再試一次。" + range.join("~");
  } else if (guess > answer) {
    range[1] = guess;
    input.value=""
    textarea.innerText = "太大了！請再試一次。" + range.join("~");
  }
});

//重新開始
restartButton.addEventListener("click", function() {
  input.value = null;
  answer = Math.floor(Math.random() * 100) + 1;
  range = [1, 100];
  guesses = [];
  textarea.innerText = "1~100";
  button.disabled = false;
  restartButton.style.display = "inline-block";
});