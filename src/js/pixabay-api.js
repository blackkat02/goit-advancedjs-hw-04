import '../css/styles.css';
import { createPhotoCard, renderGallery, showInvalidDateToast, gallery } from "./render-functions";

const API_KEY = "49334918-ea87b03a35c8c75cd9fd8a30d";
const options = {
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
};

function showLoader(isLoading = false) {
    const loader = document.querySelector(".js-loader");
    loader.style.display = isLoading ? "block" : "none";
}

function handleSearch(event) {
    console.log("banana-start")
    event.preventDefault();
    showLoader(true);

    const input = event.target.querySelector("input[name='query']");
    if (!input || input.value.trim() === "") {
        console.log("Поле пошуку порожнє!");
        showLoader(false);
        input.value = "";

        return;
    }

    const query = input.value.trim();
    console.log("Шукаємо:", query);

    getPhotos(query)
        .catch((error) => console.error("Помилка при отриманні фото:", error))
        .finally(() => {
            showLoader(false);
            input.value = "";
        });
}

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
                gallery.innerHTML = "";
                showInvalidDateToast();
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

export { handleSearch, getPhotos };