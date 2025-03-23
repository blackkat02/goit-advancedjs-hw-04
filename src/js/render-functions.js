import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import '../css/styles.css';
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
let lightbox;

const showInvalidDateToast = () => {
  iziToast.show({
    title: "Invalid Request",
    message: "Sorry, there are no images matching your search query. Please try again!",
    backgroundColor: "#ff6666",
    position: "topRight",
  });
};

function createPhotoCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    const card = document.createElement('div');
    card.classList.add('photo-card');
  
    card.innerHTML = `
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <span><b>Likes</b></span>
          <span>${likes}</span>
        </div>
        <div class="info-item">
          <span><b>Views</b></span>
          <span>${views}</span>
        </div>
        <div class="info-item">
          <span><b>Comments</b></span>
          <span>${comments}</span>
        </div>
        <div class="info-item">
          <span><b>Downloads</b></span>
          <span>${downloads}</span>
        </div>
      </div>
    `;
  
    gallery.appendChild(card);
  }
  
  function renderGallery(images) {
    gallery.innerHTML = "";
  
    images.forEach(image => {
      createPhotoCard(image);
    });
  
    if (!lightbox) {
      lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250
      });
    } else {
      lightbox.refresh();
    }
  }
 
  export { showInvalidDateToast, createPhotoCard, renderGallery, gallery };