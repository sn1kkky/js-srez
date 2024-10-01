let phone = document.querySelector(".item-view");
let faqBlock = document.querySelector(".faq-block");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        phone.classList.add("show");
      } else {
        phone.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(faqBlock);
