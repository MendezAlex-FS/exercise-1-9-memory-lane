(function () {
  const body = document.body;
  const modeSlider = document.querySelector("#mode-slider");
  const cards = document.querySelectorAll("[data-animated-card]");
  const sliderSpan = document.querySelector("[data-slider-span]");
  const hamburgerBtn = document.querySelector("#hamburger-btn");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (!modeSlider) return;

  let savedMode = localStorage.getItem("mode");

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const applyMobileMenus = () => {
    mobileMenu.classList = "";

    if (savedMode === "dark") {
      body.classList.add("dark-mode");
      mobileMenu.classList.add("dark");
      modeSlider.checked = true;
    } else {
      body.classList.remove("dark-mode");
      mobileMenu.classList.add("light");
      modeSlider.checked = false;
    }
  };
  applyMobileMenus();

  const applyCardAnimations = () => {
    cards.forEach(card => {
      if (body.classList.contains("dark-mode")) {
        card.classList.remove("animate-light");
        card.classList.add("animate-dark");
        sliderSpan.classList.remove("slider-light");
        sliderSpan.classList.add("slider-dark");
      } else {
        card.classList.remove("animate-dark");
        card.classList.add("animate-light");
        sliderSpan.classList.remove("slider-dark");
        sliderSpan.classList.add("slider-light");
      }
    });
  };

  modeSlider.addEventListener("change", () => {
    if (modeSlider.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
    savedMode = localStorage.getItem("mode");
    applyCardAnimations();
    applyMobileMenus();
  });
})();
