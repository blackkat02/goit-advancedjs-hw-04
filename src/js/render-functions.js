import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import '../css/styles.css';
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

import { dataTotalHits, page, per_page } from "./pixabay-api"

const gallery = document.querySelector(".gallery");

const messageEnd = "We're sorry, but you've reached the end of search results."
let lightbox;

const showIziToast = (message) => {
  iziToast.show({
    title: "Alert",
    message: message,
    backgroundColor: "#ff6666",
    position: "topRight",
  });
};

function smoothScroll() {
  const card = document.querySelector('.photo-card');
  if (!card) return;

  const cardHeight = card.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

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
    showIziToast(messageEnd);
  }

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250
    });
  } else {
    lightbox.refresh();
  }

  smoothScroll();
};

const loadMoreBtn = document.querySelector('.load-more-btn');

function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}

export { createPhotoCard, renderGallery, showIziToast, gallery };