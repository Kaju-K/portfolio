menuButton = document.querySelector(".menu-button")
navigationBar = document.querySelector(".navigation-bar")
menuImage = document.getElementById("menu-image")

menuButton.addEventListener("click", () => {
    ["fa-bars", "fa-xmark"].map( img => menuImage.classList.toggle(img))
    navigationBar.classList.toggle("navigation-bar--active")
} )