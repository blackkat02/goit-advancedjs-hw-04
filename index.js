import"./assets/styles-EQ2dEGpi.js";import{i as g,S as y}from"./assets/vendor-CoygeA8O.js";const d=document.querySelector(".gallery"),v=document.querySelector("form"),b="49334918-ea87b03a35c8c75cd9fd8a30d";let l;const L=()=>{g.show({title:"Invalid Date",message:"Please choose a date in the future",backgroundColor:"#ff6666",position:"topRight"})};function c(a=!1){const t=document.getElementById("loader");t.style.display=a?"block":"none"}function w(a){a.preventDefault(),c(!0);const t=a.target.querySelector("input[name='query']");if(!t||t.value.trim()===""){console.log("Поле пошуку порожнє!"),c(!1);return}const n=t.value.trim();console.log("Шукаємо:",n),$(n).catch(e=>console.error("Помилка при отриманні фото:",e)).finally(()=>{c(!1),t.value=""})}v.addEventListener("submit",w);const S={key:b,image_type:"photo",orientation:"horizontal",safesearch:"true"};function $(a){const n=`https://pixabay.com/api/?${new URLSearchParams({...S,q:a})}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(e.hits.length===0){console.log("Нічого не знайдено."),L(),d.innerHTML="";return}e.hits.forEach(s=>{const{webformatURL:i,largeImageURL:r,tags:o,likes:h,views:u,comments:f,downloads:m}=s;p({webformatURL:i,largeImageURL:r,tags:o,likes:h,views:u,comments:f,downloads:m}),E(e.hits)})}).catch(e=>console.error("Помилка при отриманні даних:",e))}function p({webformatURL:a,largeImageURL:t,tags:n,likes:e,views:s,comments:i,downloads:r}){const o=document.createElement("div");o.classList.add("photo-card"),o.innerHTML=`
    <a href="${t}" class="gallery-link">
      <img src="${a}" alt="${n}" loading="lazy" />
    </a>
    <div class="info">
      <div class="info-item">
        <span><b>Likes</b></span>
        <span>${e}</span>
      </div>
      <div class="info-item">
        <span><b>Views</b></span>
        <span>${s}</span>
      </div>
      <div class="info-item">
        <span><b>Comments</b></span>
        <span>${i}</span>
      </div>
      <div class="info-item">
        <span><b>Downloads</b></span>
        <span>${r}</span>
      </div>
    </div>
  `,d.appendChild(o)}function E(a){d.innerHTML="",a.forEach(t=>{p(t)}),l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
