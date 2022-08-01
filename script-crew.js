const crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("crew-name");
const job = document.getElementById("crew-job");
const info = document.getElementById("crew-desc");

const firstBtn = document.getElementById("btnone");
const secondBtn = document.getElementById("btntwo");
const thirdBtn = document.getElementById("btnthree");
const fourthBtn = document.getElementById("btnfour");

// starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = crew[currentItem];
  img.src = item.images.png;
  author.textContent = item.name;
  job.textContent = item.role;
  info.textContent = item.bio;
}

// function randomPerson() {
//   currentItem++;
//   if (currentItem > crew.length - 1) {
//     currentItem = 0;
//   }
//   showPerson();
// }

// button match the current person

firstBtn.addEventListener("click", function () {
  currentItem = 0;
  showPerson();
  forEachBtns();
  firstBtn.classList.add("active");
});

secondBtn.addEventListener("click", function () {
  currentItem = 1;
  showPerson();
  forEachBtns();
  secondBtn.classList.add("active");
});

thirdBtn.addEventListener("click", function () {
  currentItem = 2;
  showPerson();
  forEachBtns();
  thirdBtn.classList.add("active");
});

fourthBtn.addEventListener("click", function () {
  currentItem = 3;
  showPerson();
  forEachBtns();
  fourthBtn.classList.add("active");
});

// setInterval(() => {
//   randomPerson();
// }, 500);

// buttons

const btns = document.querySelectorAll(".button-crew");

function forEachBtns(btn) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}
