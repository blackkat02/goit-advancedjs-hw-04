// import axios from 'axios';
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import './css/styles.css';
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

// import { defineConfig } from 'vite';
// import css from 'css-loader';

// export default defineConfig({
//   plugins: [css()],
// });

const gallery = document.querySelector(".gallery");
const listener = document.querySelector("form");
const API_KEY = "49334918-ea87b03a35c8c75cd9fd8a30d";
let lightbox;

const showInvalidDateToast = () => {
  iziToast.show({
    title: "Invalid Date",
    message: "Please choose a date in the future",
    backgroundColor: "#ff6666",
    position: "topRight",
  });
};

function showLoader(isLoading = false) {
  const loader = document.getElementById("loader");
  loader.style.display = isLoading ? "block" : "none";
}

function handleSearch(event) {
  event.preventDefault(); // Спочатку зупиняємо стандартну поведінку форми
  showLoader(true); // Тепер показуємо лоадер

  const input = event.target.querySelector("input[name='query']");
  if (!input || input.value.trim() === "") {
    console.log("Поле пошуку порожнє!");
    showLoader(false);
    return;
  }

  const query = input.value.trim();
  console.log("Шукаємо:", query);

  getPhotos(query)
    .catch((error) => console.error("Помилка при отриманні фото:", error)) // Логування помилок
    .finally(() => {
      showLoader(false);
      input.value = ""; // Очищуємо поле після завершення запиту
    });
}


listener.addEventListener("submit", handleSearch);

const options = {
  key: API_KEY,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
};

function getPhotos(query) {
  const BASE_URL = "https://pixabay.com/api/";
  const url = `${BASE_URL}?${new URLSearchParams({ ...options, q: query })}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        console.log('Нічого не знайдено.');
        showInvalidDateToast();
        gallery.innerHTML = "";
        return;
      }

      data.hits.forEach(image => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;

        createPhotoCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads });
        renderGallery(data.hits)
      });
    })
    .catch(error => console.error("Помилка при отриманні даних:", error));
}

export { getPhotos };

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


// import { refs } from "./utils/consts.js";
// import { handleBookAdd } from "./handlers/form.js";

// refs.form.addEventListener("submit", handleBookAdd);