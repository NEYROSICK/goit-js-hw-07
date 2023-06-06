import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryListEl.innerHTML = galleryMarkup;

const handleClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName != "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  const handleKeydown = (keyEvent) => {
    if (keyEvent.code === "Escape") {
      instance.close();
    }
    document.removeEventListener("keydown", handleKeydown);
  };

  document.addEventListener("keydown", handleKeydown);
};

galleryListEl.addEventListener("click", handleClick);
