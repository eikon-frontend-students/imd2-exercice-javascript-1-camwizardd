var yellowPart = document.querySelector(".change-color");

function changeColor() {
  yellowPart.classList.add("is-active");
}

yellowPart.addEventListener("click", changeColor);

var orangePart = document.querySelector(".toggle-color");

function toggleColor() {
  orangePart.classList.toggle("is-active");
}

orangePart.addEventListener("click", toggleColor);

var pinkPart = document.querySelector(".trigger");
var redPart = document.querySelector(".target");

function triggerActive() {
  redPart.classList.toggle("is-active");
}

pinkPart.addEventListener("click", triggerActive);

var greenPart = document.querySelector(".trigger-all");

function triggerAll() {
  yellowPart.classList.toggle("is-active");
  orangePart.classList.toggle("is-active");
}

greenPart.addEventListener("click", triggerAll);

var bluePart = document.querySelector(".trigger-all-self");

function triggerAllSelf() {
  yellowPart.classList.toggle("is-active");
  orangePart.classList.toggle("is-active");
  bluePart.classList.toggle("is-active");
}

bluePart.addEventListener("click", triggerAllSelf);
