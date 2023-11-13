import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  return li;
}

function openModal(event) {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const modalInstance = basicLightbox.create(`
    <img src="${target.dataset.source}" alt="${target.alt}">
  `);

  modalInstance.show();

  function closeOnEscape(event) {
    if (event.code === "Escape") {
      modalInstance.close();
      document.removeEventListener("keydown", closeOnEscape);
    }
  }

  document.addEventListener("keydown", closeOnEscape);
}

ul.addEventListener("click", openModal);

galleryItems.map((item) => {
  const galleryItem = createGalleryItem(item);
  ul.appendChild(galleryItem);
});

console.log(galleryItems);
