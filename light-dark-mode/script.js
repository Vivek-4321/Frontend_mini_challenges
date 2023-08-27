const button = document.querySelector(".theme-toggle");

const body = document.body;

button.addEventListener("click", () => {
    console.log("clicked here......");
    body.classList.toggle("dark-theme");
});