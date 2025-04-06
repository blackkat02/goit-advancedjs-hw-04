import axios from 'axios';
import '../css/styles.css';
import { createPhotoCard, renderGallery, showIziToast, gallery, hideLoadMoreButton } from "./render-functions";

const API_KEY = "49334918-ea87b03a35c8c75cd9fd8a30d";
let query = "";
let page = 1;
let per_page = 15;
let dataTotalHits = 0;
const btnLoadMore = document.querySelector(".load-more-btn");
const messageEmpty = "Sorry, there are no images matching your search query. Please try again!";

axios.defaults.baseURL = "https://pixabay.com/api/";

function showLoader(isLoading = false) {
    const loader = document.querySelector(".js-loader");
    loader.style.display = isLoading ? "block" : "none";
}

function handleSearch(event) {
    console.log("submit-start");
    event.preventDefault();
    hideLoadMoreButton();
    showLoader(true);   
    page = 1;

    const input = event.target.querySelector("input[name='query']");
    if (!input || input.value.trim() === "") {
        console.log("Поле пошуку порожнє!");
        showLoader(false);
        if (input) {
            input.value = "";
        }
        return;
    }

    query = input.value.trim();
    performSearch(query);
}

function handleClick() {
    showLoader(true);
    console.log("click-start");
    if (query === "") {
        showLoader(false);
        console.log("not query");
        return
    }

    page += 1;

    performSearch(query);
}

function performSearch(query) {
    console.log("Шукаємо:", query);

    getPhotos(query)
        .catch((error) => console.error("Помилка при отриманні фото:", error))
        .finally(() => {
            showLoader(false);
            const input = document.querySelector("input[name='query']");
            input.value = "";
        });
}

async function getPhotos(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: page,
        per_page: per_page,
    };

    try {
        const response = await axios.get('/', { params });
        const data = response.data;

        dataTotalHits = data.totalHits;

        if (dataTotalHits === 0) {
            showIziToast(messageEmpty);
            gallery.innerHTML = "";
            return
        }

        renderGallery(data.hits);
    } catch (error) {
        console.error("Помилка при отриманні фото:", error);
        throw error;
    }
}

export { handleSearch, handleClick, dataTotalHits, gallery, page, per_page };