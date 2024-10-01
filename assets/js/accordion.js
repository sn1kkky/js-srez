document.querySelectorAll(".faq-card").forEach((card) => {
  card.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      document.querySelectorAll(".faq-card").forEach((card) => {
        card.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});
