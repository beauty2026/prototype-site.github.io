const panels = document.querySelectorAll(".panel");
const dotsContainer = document.querySelector(".dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let autoplayInterval;
let isPaused = false;

// Создаём точки
panels.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  document.querySelector(".panel.active")?.classList.remove("active");
  document.querySelector(".dot.active")?.classList.remove("active");

  panels[index].classList.add("active");
  dots[index].classList.add("active");
}

function next() {
  index = (index + 1) % panels.length;
  updateSlider();
}

function prev() {
  index = (index - 1 + panels.length) % panels.length;
  updateSlider();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

// -----------------------------
// АВТОПРОКРУТКА
// -----------------------------
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    if (!isPaused) next();
  }, 4000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay();

// -----------------------------
// ПАУЗА ПРИ НАВЕДЕНИИ
// -----------------------------
const sliderWrapper = document.querySelector(".accordion-3d-wrapper");

sliderWrapper.addEventListener("mouseenter", () => {
  isPaused = true;
});

sliderWrapper.addEventListener("mouseleave", () => {
  isPaused = false;
});

// -----------------------------
// СВАЙП НА МОБИЛЬНЫХ
// -----------------------------
let startX = 0;

sliderWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isPaused = true; // ставим на паузу при свайпе
});

sliderWrapper.addEventListener("touchmove", (e) => {
  const diff = e.touches[0].clientX - startX;

  if (diff > 50) {
    prev();
    startX = e.touches[0].clientX;
  }

  if (diff < -50) {
    next();
    startX = e.touches[0].clientX;
  }
});

sliderWrapper.addEventListener("touchend", () => {
  isPaused = false;
});
