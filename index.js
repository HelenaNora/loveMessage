let container = document.getElementById("container");
let yesBtn = document.getElementById("yBtn");
let noBtn = document.getElementById("nBtn");
let qBox = document.getElementById("qBox");
let ansBox = document.getElementById("ansBox");
//For Yes
yesBtn.addEventListener("click", function () {
  qBox.classList.add("d-none");
  ansBox.classList.remove("d-none");
});

//For No
const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.addEventListener("mouseover", function () {
  const i =
    Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
