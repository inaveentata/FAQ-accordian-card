"use strict";
const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const element = e.target.parentElement;
    const sibiling = element.previousElementSibling;
    const parent = element.parentElement;
    const targetElement = parent.nextElementSibling;
    sibiling.classList.toggle("font-weight");
    targetElement.classList.toggle("show-height");
  });
});



