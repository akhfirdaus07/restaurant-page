import Rawon from './images/menu/rawon.jpeg';
import Bakso from './images/menu/bakso.jpeg';
import Sate from './images/menu/sate.jpeg';
import Rendang from './images/menu/rendang.jpeg';

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
        createMenuItem(
            "Rawon",
            "Rawon utilizes the black keluak nut as the main seasoning, which gives a dark color and nutty flavor"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Bakso",
            "Bakso or baso is an Indonesian meatball, or a meat paste made from beef surimi."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Sate",
            "Sate is a Southeast Asian dish of seasoned, skewered and grilled meat, served with a sauce."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Rendang",
            "Rendang is made from beef (or occasionally beef liver, chicken, duck, mutton, water buffalo, or vegetables)."
        )
    );
    return menu;
}
  
function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    // const foodImage = document.createElement("img");
    // foodImage.src = `../src/images/menu/${name.toLowerCase()}.jpeg`;
    // foodImage.alt = `${name}`;

    const foodImage = new Image();
    if(name==`Rawon`) foodImage.src = Rawon;
    if(name==`Bakso`) foodImage.src = Bakso;
    if(name==`Sate`) foodImage.src = Sate;
    if(name==`Rendang`) foodImage.src = Rendang;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
}
  
function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}
  
export default loadMenu;