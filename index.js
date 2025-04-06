import{i as L,S,a as m}from"./assets/vendor-Epugobq5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const p=document.querySelector(".gallery"),q="We're sorry, but you've reached the end of search results.";let u;const h=t=>{L.show({title:"Alert",message:t,backgroundColor:"#ff6666",position:"topRight"})};function w(){const t=document.querySelector(".photo-card");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function E({webformatURL:t,largeImageURL:e,tags:n,likes:s,views:o,comments:r,downloads:a}){const d=document.createElement("li");d.classList.add("photo-card"),d.innerHTML=`
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
    `,p.appendChild(d)}function P(t){i===1&&(p.innerHTML=""),t.forEach(e=>{E(e)}),f>i*b?C():(g(),h(q)),u?u.refresh():u=new S(".gallery a",{captionsData:"alt",captionDelay:250}),w()}const y=document.querySelector(".load-more-btn");function C(){y.classList.remove("is-hidden")}function g(){y.classList.add("is-hidden")}const M="49334918-ea87b03a35c8c75cd9fd8a30d";let l="",i=1,b=15,f=0;document.querySelector(".load-more-btn");const $="Sorry, there are no images matching your search query. Please try again!";m.defaults.baseURL="https://pixabay.com/api/";function c(t=!1){const e=document.querySelector(".js-loader");e.style.display=t?"block":"none"}function H(t){console.log("submit-start"),t.preventDefault(),g(),c(!0),i=1;const e=t.target.querySelector("input[name='query']");if(!e||e.value.trim()===""){console.log("Поле пошуку порожнє!"),c(!1),e&&(e.value="");return}l=e.value.trim(),v(l)}function O(){if(c(!0),console.log("click-start"),l===""){c(!1),console.log("not query");return}i+=1,v(l)}function v(t){console.log("Шукаємо:",t),T(t).catch(e=>console.error("Помилка при отриманні фото:",e)).finally(()=>{c(!1);const e=document.querySelector("input[name='query']");e.value=""})}async function T(t){const e={key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:b};try{const s=(await m.get("/",{params:e})).data;if(f=s.totalHits,f===0){h($),p.innerHTML="";return}P(s.hits)}catch(n){throw console.error("Помилка при отриманні фото:",n),n}}const B=document.querySelector(".form"),k=document.querySelector(".load-more-btn");B.addEventListener("submit",H);k.addEventListener("click",O);
//# sourceMappingURL=index.js.map
