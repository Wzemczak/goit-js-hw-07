import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </div>`;

  ul.appendChild(li);
});

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

ul.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
  }
});
