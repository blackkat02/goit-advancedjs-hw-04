const listener = document.querySelector("form");

import { handleSearch } from "./js/pixabay-api.js";

listener.addEventListener("submit", handleSearch);