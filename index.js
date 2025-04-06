import{i as v,S as L,a as p}from"./assets/vendor-Epugobq5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const m=document.querySelector(".gallery"),S="We're sorry, but you've reached the end of search results.";let u;const h=t=>{v.show({title:"Alert",message:t,backgroundColor:"#ff6666",position:"topRight"})};function q(){const t=document.querySelector(".photo-card");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function w({webformatURL:t,largeImageURL:e,tags:n,likes:s,views:o,comments:r,downloads:a}){const d=document.createElement("li");d.classList.add("photo-card"),d.innerHTML=`
      <a href="${e}" class="gallery-link">
        <img src="${t}" alt="${n}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <span><b>Likes</b></span>
          <span>${s}</span>
        </div>
        <div class="info-item">
          <span><b>Views</b></span>
          <span>${o}</span>
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
    `,m.appendChild(d)}function E(t){i===1&&(m.innerHTML=""),t.forEach(e=>{w(e)}),f>i*g?P():(C(),h(S)),u?u.refresh():u=new L(".gallery a",{captionsData:"alt",captionDelay:250}),q()}const y=document.querySelector(".load-more-btn");function P(){y.classList.remove("is-hidden")}function C(){y.classList.add("is-hidden")}const $="49334918-ea87b03a35c8c75cd9fd8a30d";let l="",i=1,g=15,f=0;document.querySelector(".load-more-btn");const M="Sorry, there are no images matching your search query. Please try again!";p.defaults.baseURL="https://pixabay.com/api/";function c(t=!1){const e=document.querySelector(".js-loader");e.style.display=t?"block":"none"}function O(t){console.log("submit-start"),t.preventDefault(),c(!0),i=1;const e=t.target.querySelector("input[name='query']");if(!e||e.value.trim()===""){console.log("Поле пошуку порожнє!"),c(!1),e&&(e.value="");return}l=e.value.trim(),b(l)}function B(){if(c(!0),console.log("click-start"),l===""){c(!1),console.log("not query");return}i+=1,b(l)}function b(t){console.log("Шукаємо:",t),H(t).catch(e=>console.error("Помилка при отриманні фото:",e)).finally(()=>{c(!1);const e=document.querySelector("input[name='query']");e.value=""})}async function H(t){const e={key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:g};try{const s=(await p.get("/",{params:e})).data;if(f=s.totalHits,f===0){h(M);return}E(s.hits)}catch(n){throw console.error("Помилка при отриманні фото:",n),n}}const T=document.querySelector(".form"),k=document.querySelector(".load-more-btn");T.addEventListener("submit",O);k.addEventListener("click",B);
//# sourceMappingURL=index.js.map
