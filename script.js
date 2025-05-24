let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const indicators = document.querySelector(".indicators");

// Créer les points de facon dynamique
images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.addEventListener("click", () => showSlide(i));
  indicators.appendChild(dot);
});

const dots = indicators.querySelectorAll("div");

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

function showNextSlide() {
  showSlide(index + 1);
}

function showPrevSlide() {
  showSlide(index - 1);
}

function updateIndicators() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

setInterval(showNextSlide, 5000);
showSlide(0); // Initialiser le slider
