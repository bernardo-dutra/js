// src/home.js
import restaurantImage from "../odin.png"; // Vamos adicionar uma imagem para o restaurante

export function createHomePage() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-content");

  const title = document.createElement("h2");
  title.textContent = "Bem-vindo ao Sabor Divino!";

  const image = document.createElement("img");
  image.src = restaurantImage;
  image.alt = "Interior do Restaurante Sabor Divino";
  image.classList.add("main-image");

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Experimente a autêntica culinária que aquece o coração. Nossos pratos são preparados com os ingredientes mais frescos e uma paixão pela gastronomia. Venha nos visitar e tenha uma experiência inesquecível!";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "Horário de Funcionamento: Terça a Domingo, das 18h às 23h.";

  homeDiv.appendChild(title);
  homeDiv.appendChild(image);
  homeDiv.appendChild(paragraph);
  homeDiv.appendChild(paragraph2);

  return homeDiv;
}
