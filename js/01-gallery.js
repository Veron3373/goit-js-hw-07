import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  galleryEl: document.querySelector('.gallery'),
}
refs.galleryEl.addEventListener('click', clickImg)

//Сітка із картинок
let imageAll = []

function galleryImageAll(e) {
  galleryItems.map(({ preview, original, description }) => {
    return imageAll += `<div class="gallery__link"> 
    <img class="gallery__image" 
    src='${preview}'  
    data-source = '${original}' 
    alt = '${description}'>  
    </div>`
  })
    .join("");
  refs.galleryEl.insertAdjacentHTML('beforeend', (imageAll))
}
galleryImageAll()


//Реакція на клік

function clickImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  } else {
    const modal = e.target.dataset.source
    newModal(modal)
  }
}
//Створення модалки
let instance = {};
function newModal(url) {
  instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();
}


//Функція Escape
function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    instance.close();
  }
}



