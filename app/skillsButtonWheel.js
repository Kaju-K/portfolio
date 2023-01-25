orbitLogos = document.querySelectorAll(".orbit-image")
centerImage = document.querySelector(".container-center-image")
centerText = document.querySelector(".center-text")

defaultMessage = "Click in one of the skills to know a little bit more about it."

descriptions = {
    "html": "HTML is the standard markup language for documents designed to be displayed in a web browser.",
    "css": "CSS is a style sheet language used for describing the presentation of a document written in a markup language",
    "js": "JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    "python": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
    "react": "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    "git": "GIT is a distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively.",
    "github": "Github is an Internet hosting service for software development and version control using Git."
}

orbitLogos.forEach( logo => {
    logo.addEventListener( "click", e => {
        logoName = e.target.dataset["logo"]
        if (logoName === "github") {
            centerImage.innerHTML = `<a href="https://github.com/Kaju-K" target="_blank"><img src="img/logo/${logoName}-logo.svg"` +  ` alt=${logoName} class="center-image"></a>`
        } else {
            centerImage.innerHTML = `<img src="img/logo/${logoName}-logo.svg"` +  ` alt=${logoName} class="center-image">`
        }
        centerText.innerHTML = descriptions[logoName]

    })
});

centerImage.addEventListener("click", e => {console.log(e)})
