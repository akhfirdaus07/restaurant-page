function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
        createMenuItem(
            "Rawon",
            "Rawon is an Indonesian beef soup. Originating from East Java, rawon utilizes the black keluak nut as the main seasoning, which gives a dark color and nutty flavor to the soup. "
        )
    );
    menu.appendChild(
        createMenuItem(
            "Bakso",
            "Bakso or baso is an Indonesian meatball, or a meat paste made from beef surimi. Its texture is similar to the Chinese beef ball, fish ball, or pork ball. The word bakso may refer to a single meatball or the complete dish of meatball soup."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Sate",
            "Satay, or sate in Indonesian spelling, is a Southeast Asian dish of seasoned, skewered and grilled meat, served with a sauce. The earliest preparations of satay is believed to have originated in Java island, but has spread to almost anywhere in Indonesia, where it has become a national dish. "
        )
    );
    menu.appendChild(
        createMenuItem(
            "Rendang",
            "Rendang is made from beef (or occasionally beef liver, chicken, duck, mutton, water buffalo, or vegetables like jackfruit or cassava). Chicken or duck rendang also contains tamarind and is usually not cooked for as long as beef rendang."
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
  
    const foodImage = document.createElement("img");
    foodImage.src = `../src/images/menu/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;
  
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