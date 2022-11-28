allLogos = document.querySelectorAll(".skills-logos")
explanationTitle = document.querySelector(".skills-explanation-title")
explanation = document.querySelector(".skills-explanation")

defaultMessage = "Put your mouse over one of the skills to know a little bit more about it."

descriptions = {
    "html": "It is the standard markup language for documents designed to be displayed in a web browser.",
    "css": "It is a style sheet language used for describing the presentation of a document written in a markup language",
    "js": "It is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    "python": "It is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
}

allLogos.forEach( (logo) => {
    logo.addEventListener( "mouseover", (e) => {
        logoName = e.target.dataset["logo"];
        explanationTitle.innerHTML = `${logoName.toUpperCase()}`;
        explanation.innerHTML = descriptions[logoName];
    });

    logo.addEventListener( "mouseout", (e) => {
        explanationTitle.innerHTML = "";
        explanation.innerHTML = defaultMessage;
    });
});
