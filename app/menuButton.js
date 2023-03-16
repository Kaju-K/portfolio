menuButton = document.querySelector(".menu-button")
navigationBar = document.querySelector(".navigation-bar")
menuImage = document.getElementById("menu-image")
navigationLinks = document.querySelectorAll(".navigation-bar__links")

const windowWidth = window.innerWidth

menuButton.addEventListener("click", () => {
    ["fa-bars", "fa-xmark"].map( img => menuImage.classList.toggle(img))
    navigationBar.classList.toggle("navigation-bar--active")
} )

if (windowWidth < 900) {
    navigationLinks.forEach(link => {
        link.addEventListener("click", event => {
            ["fa-bars", "fa-xmark"].map( img => menuImage.classList.toggle(img))
            navigationBar.classList.toggle("navigation-bar--active")
        })
    });
}