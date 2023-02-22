import './style.css';


function component(){
    const createH1=document.createElement('h1');
    const createImg=document.createElement('img');
    const createP=document.createElement('p');
    const content=document.querySelector('#content');

    createH1.innerHTML="Nusantara Restaurant";
    createImg.src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60";
    createP.innerHTML="The best restaurant in Indonesia!";

    content.appendChild(createH1)
    content.appendChild(createImg)
    content.appendChild(createP)
}

component();