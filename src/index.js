import './style.css';
import bgImageSrc from './bg-image.png';
import createFooter from './footer';


// function component(){
//     const bgImage = new Image();
//     bgImage.src = bgImageSrc;

//     const createH1=document.createElement('h1');
//     const createH4=document.createElement('h4');
//     const content=document.querySelector('#content');

//     createH1.innerHTML="Nusantara Restaurant";
//     createH4.innerHTML="The best restaurant in Indonesia!";

//     content.appendChild(createH1)
//     content.appendChild(createH4)
// }




// component();

function initializeWebsite() {
    const content = document.getElementById("content");

    // content.appendChild(createHeader());
    // content.appendChild(createMain());
    content.appendChild(createFooter());

    // setActiveButton(document.querySelector(".button-nav"));
    // loadHome();
}

initializeWebsite();