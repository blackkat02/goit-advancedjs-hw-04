import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import '../css/styles.css';
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

import { dataTotalHits, page, per_page } from "./pixabay-api"

const gallery = document.querySelector(".gallery");
const messageEmpty = "Sorry, there are no images matching your search query. Please try again!";
const messageEnd = "We're sorry, but you've reached the end of search results."
let lightbox;

const showIziToast = (title, message) => {
  iziToast.show({
    title: "Invalid Request",
    message: message,
    backgroundColor: "#ff6666",
    position: "topRight",
  });
};

function createPhotoCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  const card = document.createElement("li");
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
  if (page === 1) {
    gallery.innerHTML = "";
  }

  images.forEach(image => {
    createPhotoCard(image);
  });

  if (dataTotalHits > (page * per_page)) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
    showIziToast();
  }
  
  console.log(dataTotalHits)

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250
    });
  } else {
    lightbox.refresh();
  }
};

const loadMoreBtn = document.querySelector('.load-more-btn');

// Функція для показу кнопки
function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

// Функція для приховування кнопки
function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}

export { createPhotoCard, renderGallery, gallery };