let numb = document.getElementById("number");
let result = document.getElementById("result");
let find = document.getElementById("find");

find.addEventListener("click", function () {
  let num = Number(numb.value);
  let evenNumbers = [];
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
      count++;
    }
  }

  result.innerHTML = evenNumbers;
  result.innerHTML += "<br><br> Total Even Numbers: " + count;
});
