function TrRemove() {
  let removeTr = document.querySelectorAll("tr");
  for (let i = 0; i < removeTr.length; i++) {
    if (!removeTr[i].classList.contains("trHeader")) {
      removeTr[i].remove();
    }
  }
}

sordDown.addEventListener("click", function() {
  var sortArr = users.slice();
  sortArr.sort((prev, next) => prev.balance - next.balance);
  TrRemove();
  TableBody(sortArr);
});

sordUp.addEventListener("click", function() {
  var sortArr = users.slice();
  sortArr.sort((prev, next) => next.balance - prev.balance);
  TrRemove();
  TableBody(sortArr);
});
// sordUp.addEventListener("click", () => console.log("hello Up"));
