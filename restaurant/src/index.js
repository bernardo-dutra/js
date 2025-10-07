// src/index.js
import "./styles.css";
import { createHomePage } from "./home.js";
import { createContactPage } from "./contato.js";
import { createMenuPage } from "./cardapio.js";

function LoadPage(page) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(page());
}

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");


document.addEventListener("DOMContentLoaded", () => LoadPage(createHomePage));
homeButton.addEventListener("click", () => LoadPage(createHomePage));
menuButton.addEventListener("click", () => LoadPage(createMenuPage));
contactButton.addEventListener("click", () => LoadPage(createContactPage));
