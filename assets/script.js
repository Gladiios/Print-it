const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments nécessaires dans le HTML
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const banner = document.getElementById("banner");
const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");

// Slide courante
let currentSlide = 0;
let dot = 0;

// fonction pour mettre à jour la slide
function updateSlides() {
  bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  // Fais changer la tagline en même temps que l'image
  bannerTagLine.innerHTML = slides[currentSlide].tagLine;
}

// fonction pour mettre à jour le point sélectionné
function updateSelectedDot() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dotElement, index) => {
    if (index === currentSlide) {
      dotElement.classList.add("dot_selected");
    } else {
      dotElement.classList.remove("dot_selected");
    }
  });
}

updateSlides();

arrowLeft.addEventListener("click", () => {
  // calcul de la position de la slide precedente
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  // maj dot
  updateSelectedDot();

  // proke fonction pour mise a jour affichage
  updateSlides();
});

arrowRight.addEventListener("click", () => {
  // calcul de la position de la slide suivante
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  // maj dot
  updateSelectedDot();

  // proke fonction pour mise a jour affichage
  updateSlides();
});
