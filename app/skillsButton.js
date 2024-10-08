allLogos = document.querySelectorAll(".skills-logos");
explanationTitle = document.querySelector(".skills-explanation-title");
explanation = document.querySelector(".skills-explanation");

defaultMessage = "Put your mouse over one of the skills to know a little bit more about it.";

descriptions = {
  html: "HTML is the standard markup language for documents designed to be displayed in a web browser.",
  css: "CSS is a style sheet language used for describing the presentation of a document written in a markup language",
  js: "JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  node: "Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.",
  python:
    "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
  react: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
  next: "Next.js is an open-source web development framework providing React-based web applications with server-side rendering and static website generation.",
  elixir: "Elixir is a dynamic, functional language for building scalable and maintainable applications.",
  mongodb:
    "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
  git: "GIT is a distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively.",
  github: "Github is an Internet hosting service for software development and version control using Git."
};

allLogos.forEach((logo) => {
  logo.addEventListener("mouseover", (e) => {
    logoName = e.target.dataset["logo"];
    explanationTitle.innerHTML = `${logoName.toUpperCase()}`;
    explanation.innerHTML = descriptions[logoName];
  });

  logo.addEventListener("mouseout", (e) => {
    explanationTitle.innerHTML = "";
    explanation.innerHTML = defaultMessage;
  });
});
