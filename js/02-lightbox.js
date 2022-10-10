import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery')
galleryEl.addEventListener('click', galleryImageAll)

//Сітка із картинок
let imageAll = []

function galleryImageAll(e) {
 galleryItems.map(({ preview, original, description }) => {
   return imageAll += `<a class="gallery__item" href="${original}">
   <img class="gallery__image" src='${preview}' alt='${description}'></a>`
  }).join("");
}
galleryImageAll()
galleryEl.insertAdjacentHTML('beforeend', (imageAll))

// Налаштування бібліотеки.
let lightbox = new SimpleLightbox(".gallery a", {
  enableKeyboard: true,
  showCounter: false,
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


