const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const titleTech = document.getElementById("tech-title");
const descTech = document.getElementById("tech-desc");
const imgTech = document.getElementById("img-tech");

const btnTech1 = document.getElementById("btn1");
const btnTech2 = document.getElementById("btn2");
const btnTech3 = document.getElementById("btn3");

// starting item
let techCurrentItem = 0;

// load initial

window.addEventListener("DOMContentLoaded", function () {
  showTech();
});

// show technology based on item

function showTech() {
  let itemTech = technology[techCurrentItem];
  titleTech.textContent = itemTech.name;
  descTech.textContent = itemTech.description;
  imgTech.src = itemTech.images.portrait;
}

btnTech1.addEventListener("click", function () {
  techCurrentItem = 0;
  showTech();
  forEachBtnsTech();
  btnTech1.classList.add("active");
});

btnTech2.addEventListener("click", function () {
  techCurrentItem = 1;
  showTech();
  forEachBtnsTech();
  btnTech2.classList.add("active");
});

btnTech3.addEventListener("click", function () {
  techCurrentItem = 2;
  showTech();
  forEachBtnsTech();
  btnTech3.classList.add("active");
});

const btnsTech = document.querySelectorAll(".tech-btn");

function forEachBtnsTech(btn) {
  btnsTech.forEach((btn) => {
    btn.classList.remove("active");
  });
}
