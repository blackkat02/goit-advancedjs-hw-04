import{i as g,S as y}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery");let l;const b=()=>{g.show({title:"Invalid Request",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ff6666",position:"topRight"})};function d({webformatURL:n,largeImageURL:t,tags:s,likes:o,views:e,comments:r,downloads:a}){const i=document.createElement("li");i.classList.add("photo-card"),i.innerHTML=`
      <a href="${t}" class="gallery-link">
        <img src="${n}" alt="${s}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <span><b>Likes</b></span>
          <span>${o}</span>
        </div>
        <div class="info-item">
          <span><b>Views</b></span>
          <span>${e}</span>
        </div>
        <div class="info-item">
          <span><b>Comments</b></span>
          <span>${r}</span>
        </div>
        <div class="info-item">
          <span><b>Downloads</b></span>
          <span>${a}</span>
        </div>
      </div>
    `,u.appendChild(i)}function v(n){u.innerHTML="",n.forEach(t=>{d(t)}),l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250})}const L="49334918-ea87b03a35c8c75cd9fd8a30d",w={key:L,image_type:"photo",orientation:"horizontal",safesearch:"true"};function c(n=!1){const t=document.querySelector(".js-loader");t.style.display=n?"block":"none"}function S(n){console.log("banana-start"),n.preventDefault(),c(!0);const t=n.target.querySelector("input[name='query']");if(!t||t.value.trim()===""){console.log("Поле пошуку порожнє!"),c(!1),t.value="";return}const s=t.value.trim();console.log("Шукаємо:",s),q(s).catch(o=>console.error("Помилка при отриманні фото:",o)).finally(()=>{c(!1),t.value=""})}function q(n){const s=`https://pixabay.com/api/?${new URLSearchParams({...w,q:n})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}).then(o=>{if(o.hits.length===0){console.log("Нічого не знайдено."),u.innerHTML="",b();return}o.hits.forEach(e=>{const{webformatURL:r,largeImageURL:a,tags:i,likes:f,views:p,comments:m,downloads:h}=e;d({webformatURL:r,largeImageURL:a,tags:i,likes:f,views:p,comments:m,downloads:h}),v(o.hits)})}).catch(o=>console.error("Помилка при отриманні даних:",o))}const P=document.querySelector(".form");P.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
