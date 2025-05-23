document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.querySelector("#show-btn");
  const hiddenNav = document.querySelector(".header__hidden");
  const toggleIcon = document.querySelector("#toggle-icon");

  showBtn.addEventListener("click", () => {
    hiddenNav.classList.toggle("show");
    document.body.style.overflow = hiddenNav.classList.contains("show") ? "hidden" : "auto";

    if (toggleIcon.src.includes("icon-hamburger.svg")) {
      toggleIcon.src = "images/icon-close.svg";
    } else {
      toggleIcon.src = "images/icon-hamburger.svg";
    }
  });
});