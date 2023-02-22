import './style.css';
import {createHeader, setActiveButton, createMain, createFooter} from './barebone.js';
import loadHome from './home';

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

initializeWebsite();