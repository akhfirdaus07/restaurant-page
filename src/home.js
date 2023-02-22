import chefImg from './images/chef.jpg';

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    // const chefImage = document.createElement("img");
    // chefImage.src = "../src/images/chef.jpg";
    // chefImage.alt = "Chef";

    const myIcon = new Image();
    myIcon.src = chefImg;

    home.appendChild(createParagraph("Welcome to Indonesia Restaurant!"));
    home.appendChild(createParagraph("Are you ready?"));
    home.appendChild(myIcon);
    home.appendChild(createParagraph("Order online or visit us!"));
  
    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;