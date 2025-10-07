// Usamos uma IIFE (Immediately Invoked Function Expression) para encapsular o código
// e evitar poluir o escopo global.
(function () {
  // =================================================
  // 1. ESTADO DA APLICAÇÃO (STATE)
  // =================================================
  // Centralizamos os dados da aplicação aqui.
  const myLibrary = [];

  // =================================================
  // 2. ELEMENTOS DO DOM
  // =================================================
  // Buscamos todos os elementos que vamos manipular uma única vez.
  const bookContainer = document.getElementById('book-container');
  const addBookButton = document.getElementById('add-book');
  const removeAllButton = document.getElementById('remove-all-books'); // Nome mais claro
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('close-modal');
  const bookForm = document.getElementById('book-form'); // Pegamos o form para o evento 'submit'

  // =================================================
  // 3. CLASSES E FUNÇÕES DE LÓGICA
  // =================================================

  // Usando 'class' (sintaxe mais moderna para construtores)
  class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }

  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBooks();
  }

  function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
  }

  function clearLibrary() {
    myLibrary.length = 0;
    renderBooks();
  }

  // =================================================
  // 4. FUNÇÕES DE RENDERIZAÇÃO (MANIPULAÇÃO DO DOM)
  // =================================================

  function renderBooks() {
    // Limpa a visualização atual
    bookContainer.innerHTML = '';

    if (myLibrary.length === 0) {
      bookContainer.innerHTML = '<p>Sua biblioteca está vazia. Adicione um livro!</p>';
      return;
    }

    myLibrary.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      // Usamos um data-attribute para identificar o livro pelo seu índice
      bookDiv.dataset.index = index;

      bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Autor: ${book.author}</p>
        <p>Páginas: ${book.pages}</p>
        <p>Status: ${book.read ? 'Lido' : 'Não Lido'}</p>
        <button class="remove-book">Remover</button>
      `;
      bookContainer.appendChild(bookDiv);
    });
  }

  // =================================================
  // 5. EVENT LISTENERS (CONTROLADORES)
  // =================================================

  function handleFormSubmit(event) {
    // Previne o recarregamento padrão da página
    event.preventDefault();

    // Pegamos os valores do formulário
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const pages = event.target.elements.pages.value;
    const read = event.target.elements.read.checked;

    if (title && author && pages) {
      addBookToLibrary(title, author, pages, read);
      modal.classList.add('hidden'); // Fecha o modal
      bookForm.reset(); // Limpa todos os campos do formulário
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  // --- Delegação de Eventos para remoção ---
  // Adicionamos UM listener no container pai em vez de vários nos botões
  bookContainer.addEventListener('click', (event) => {
    // Verificamos se o elemento clicado foi um botão de remover
    if (event.target.classList.contains('remove-book')) {
      const bookDiv = event.target.closest('.book'); // Encontra o elemento 'pai' com a classe '.book'
      const index = bookDiv.dataset.index;
      removeBook(index);
    }
  });

  // --- Listeners para o Modal ---
  addBookButton.addEventListener('click', () => modal.classList.remove('hidden'));
  closeModalButton.addEventListener('click', () => modal.classList.add('hidden'));
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // --- Listener para o formulário ---
  bookForm.addEventListener('submit', handleFormSubmit);

  // --- Listener para limpar a biblioteca ---
  // Renomeei a variável no HTML de 'remove-book' para 'remove-all-books' para evitar confusão
  if (removeAllButton) {
    removeAllButton.addEventListener('click', clearLibrary);
  }


  // =================================================
  // 6. INICIALIZAÇÃO
  // =================================================
  // Renderiza os livros pela primeira vez quando a página carrega.
  renderBooks();

})(); // Fim da IIFE