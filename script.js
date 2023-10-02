// side bar
const navbar = document.querySelector(".navbar-nav");
const hum = document.getElementById("hum");
hum.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// close menu
document.addEventListener("click", function (e) {
  if (!hum.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// prevent default
hum.addEventListener("click", function (e) {
  e.preventDefault();
});

// search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  searchBox.focus();
});

// close search form & shopping-cart
document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!spButton.contains(e.target) && !spCart.contains(e.target)) {
    spCart.classList.remove("active");
  }
});

// prevent default search button
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
});

// shopping-cart side bar
const spCart = document.querySelector(".shopping-cart");
const spButton = document.getElementById("shopping-cart-button");
spButton.addEventListener("click", function (e) {
  spCart.classList.toggle("active");
  e.preventDefault();
});

// modal box
const modalBox = document.querySelector(".modal");
const closeModal = document.querySelector(".close-icon");
const detailButtons = document.querySelectorAll(".item-detail-button");

// open modal box

detailButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    modalBox.style.display = "flex";
    e.preventDefault();
  });
});

// close
closeModal.addEventListener("click", function (e) {
  modalBox.style.display = "none";
  e.preventDefault();
});
