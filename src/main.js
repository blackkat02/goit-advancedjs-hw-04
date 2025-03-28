const listenerSubmit = document.querySelector(".form");
const listenerClick = document.querySelector(".load-more-btn")

import { handleSearch, handleClick } from "./js/pixabay-api.js";

listenerSubmit.addEventListener("submit", handleSearch);
listenerClick.addEventListener("click", handleClick);