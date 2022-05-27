"use strict";
const icons = document.querySelectorAll(".icon");
const questions = document.querySelectorAll(".h3");

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const element = e.target.parentElement;
    element.classList.toggle("flip-icon");
    const sibiling = element.previousElementSibling;
    sibiling.classList.toggle("font-weight");
    const parent = element.parentElement;
    const targetElement = parent.nextElementSibling;
    targetElement.classList.toggle("show-height");
  });
});

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const element = e.target;
    element.classList.toggle("font-weight");
    const flipIcon = element.nextElementSibling;
    flipIcon.classList.toggle("flip-icon");
    const parent = element.parentElement.parentElement;
    const lastChild = parent.lastElementChild;
    lastChild.classList.toggle("show-height");
  });
});
