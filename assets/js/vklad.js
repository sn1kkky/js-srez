let tabBtns = document.querySelectorAll(".tab__btn");
let tabTexts = document.querySelectorAll(".tab__text");

tabBtns.forEach((item, index) => {
  item.addEventListener("click", function () {
    document.querySelector(".tab__btn.active").classList.remove("active");
    item.classList.add("active");

    document.querySelector(".tab__text.active").classList.remove("active");
    tabTexts[index].classList.add("active");
  });
});