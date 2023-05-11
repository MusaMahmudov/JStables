let arr = document.getElementsByTagName("li");
let div = document.getElementsByClassName("info");
function change(e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("white")) {
      arr[i].classList.remove("white");
      div[i].classList.add("hide");
    }
  }
  e.target.classList.add("white");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("white")) {
      div[i].classList.remove("hide");
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", change);
}
