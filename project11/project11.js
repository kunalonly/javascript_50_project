const faqtoggle = document.querySelectorAll(".faq-toggle");

faqtoggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
