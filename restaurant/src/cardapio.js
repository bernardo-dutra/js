// src/cardapio.js
import cardapioData from "./cardapio.json"; // Importa os dados do JSON

export function createMenuPage() {
  const cardapioDiv = document.createElement("div");
  cardapioDiv.classList.add("cardapio-content");

  const title = document.createElement("h2");
  title.textContent = "Nosso Cardápio";
  cardapioDiv.appendChild(title);

  for (const categoria in cardapioData) {
    const categoriaTitle = document.createElement("h3");
    categoriaTitle.textContent = categoria;
    cardapioDiv.appendChild(categoriaTitle);

    const list = document.createElement("ul");
    cardapioDiv.appendChild(list);

    const pratos = cardapioData[categoria];
    // Itera sobre os pratos dentro de cada categoria
    for (const nomePrato in pratos) {
      const item = pratos[nomePrato];

      const listItem = document.createElement("li");

      const nomeDiv = document.createElement("div");
      nomeDiv.classList.add("prato-nome");
      nomeDiv.textContent = `${nomePrato} - ${item.preco}`;

      const descDiv = document.createElement("div");
      descDiv.classList.add("prato-descricao");
      descDiv.textContent = item.descricao;

      listItem.appendChild(nomeDiv);
      listItem.appendChild(descDiv);
      list.appendChild(listItem);
    }
  }

  return cardapioDiv;
}
