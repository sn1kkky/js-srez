document.querySelectorAll(".dropdown > a").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".dropdown-content").forEach((menu) => {
      if (menu !== this.nextElementSibling) {
        menu.style.display = "none";
      }
    });

    let dropdownMenu = this.nextElementSibling;
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  });
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-content").forEach((menu) => {
      menu.style.display = "none";
    });
  }
});
