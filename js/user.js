let point1 = sessionStorage.getItem("result");
document.querySelector("#result").innerHTML = point1;
var startAgain = document.querySelector("#start-again");
startAgain.addEventListener("click", function () {
  location.href = "index.html";
});
