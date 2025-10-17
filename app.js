const slides = document.querySelectorAll(".video-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

const toggleBtn = document.createElement("div");
toggleBtn.className = "menu-toggle";
toggleBtn.textContent = "☰";
document.querySelector(".nav").appendChild(toggleBtn);

const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const track = document.querySelector(".carousel-track");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

let scrollAmount = 0;
const scrollStep = 270;

btnRight.addEventListener("click", () => {
  track.scrollBy({ left: scrollStep, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  track.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Pronto te responderemos.");
  form.reset();
});
