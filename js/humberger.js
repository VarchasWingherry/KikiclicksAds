let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let hamburgerMenu = document.querySelector(".upper-navbar .menu-bar");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Add this for mobile view
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
