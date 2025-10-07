export function createContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("content");
  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  contact.appendChild(title);
  const email = document.createElement("p");
  email.textContent = "Email: contato@restaurant.com";
  contact.appendChild(email);
  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";
  contact.appendChild(phone);
  return contact;
}
