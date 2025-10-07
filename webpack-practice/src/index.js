// src/index.js
import "./styles.css";
import odinImage from "../odin.png";
import { greeting } from "./greeting.js";

console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;
const title = document.createElement("h1");
title.textContent = greeting;

document.body.appendChild(title);
document.body.appendChild(image);
