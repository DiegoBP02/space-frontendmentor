const destinations = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const destImg = document.getElementById("image-destination");
const destName = document.getElementById("destination-name");
const destText = document.getElementById("destination-text");
const destDist = document.getElementById("destination-distance");
const destTrav = document.getElementById("destination-travel");

const moonBtn = document.getElementById("btnMoon");
const marsBtn = document.getElementById("btnMars");
const europaBtn = document.getElementById("btnEuropa");
const titanBtn = document.getElementById("btnTitan");

// starting item
let destCurrentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showDestination();
});

// show planet based on item
function showDestination() {
  const itemDestination = destinations[destCurrentItem];
  destImg.src = itemDestination.images.png;
  destName.textContent = itemDestination.name;
  destText.textContent = itemDestination.description;
  destDist.textContent = itemDestination.distance;
  destTrav.textContent = itemDestination.travel;
}

// buttons

moonBtn.addEventListener("click", function () {
  destCurrentItem = 0;
  showDestination();
  forEachBtnsDest();
  moonBtn.classList.add("active");
});

marsBtn.addEventListener("click", function () {
  destCurrentItem = 1;
  showDestination();
  forEachBtnsDest();
  marsBtn.classList.add("active");
});

europaBtn.addEventListener("click", function () {
  destCurrentItem = 2;
  showDestination();
  forEachBtnsDest();
  europaBtn.classList.add("active");
});

titanBtn.addEventListener("click", function () {
  destCurrentItem = 3;
  showDestination();
  forEachBtnsDest();
  titanBtn.classList.add("active");
});

const btnsDest = document.querySelectorAll(".btn-dest");

function forEachBtnsDest(btn) {
  btnsDest.forEach((btn) => {
    btn.classList.remove("active");
  });
}
