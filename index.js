import{S as w,i as $,a as p}from"./assets/vendor-Epugobq5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const m=document.querySelector(".gallery");let u;const E=(t,e)=>{$.show({title:"Invalid Request",message:e,backgroundColor:"#ff6666",position:"topRight"})};function g({webformatURL:t,largeImageURL:e,tags:a,likes:n,views:o,comments:s,downloads:r}){const l=document.createElement("li");l.classList.add("photo-card"),l.innerHTML=`
      <a href="${e}" class="gallery-link">
        <img src="${t}" alt="${a}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <span><b>Likes</b></span>
          <span>${n}</span>
        </div>
        <div class="info-item">
          <span><b>Views</b></span>
          <span>${o}</span>
        </div>
        <div class="info-item">
          <span><b>Comments</b></span>
          <span>${s}</span>
        </div>
        <div class="info-item">
          <span><b>Downloads</b></span>
          <span>${r}</span>
        </div>
      </div>
    `,m.appendChild(l)}function P(t){i===1&&(m.innerHTML=""),t.forEach(e=>{g(e)}),f>i*y?T():(C(),E()),console.log(f),u?u.refresh():u=new w(".gallery a",{captionsData:"alt",captionDelay:250})}const h=document.querySelector(".load-more-btn");function T(){h.classList.remove("is-hidden")}function C(){h.classList.add("is-hidden")}const M="49334918-ea87b03a35c8c75cd9fd8a30d";let c="",i=1,y=15,f=0;document.querySelector(".load-more-btn");p.defaults.baseURL="https://pixabay.com/api/";function d(t=!1){const e=document.querySelector(".js-loader");e.style.display=t?"block":"none"}function O(t){console.log("submit-start"),t.preventDefault(),d(!0),i=1;const e=t.target.querySelector("input[name='query']");if(!e||e.value.trim()===""){console.log("Поле пошуку порожнє!"),d(!1),e&&(e.value="");return}c=e.value.trim(),b(c)}function k(){if(d(!0),console.log("click-start"),console.log(c),c===""){d(!1),console.log("not query");return}i+=1,b(c)}function b(t){console.log("Шукаємо:",t),H(t).catch(e=>console.error("Помилка при отриманні фото:",e)).finally(()=>{d(!1);const e=document.querySelector("input[name='query']");e.value="",console.log("ours:",t)})}async function H(t){const e={key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:y};try{const n=(await p.get("/",{params:e})).data;console.log(`"page:" ${i}`),console.log(`"data.hits:" ${n.hits}`),console.log(`Total images found: ${n.total}`),console.log(`Total accessible images: ${n.totalHits}`),f=n.totalHits,n.hits.forEach(o=>{const{webformatURL:s,largeImageURL:r,tags:l,likes:v,views:L,comments:S,downloads:q}=o;g({webformatURL:s,largeImageURL:r,tags:l,likes:v,views:L,comments:S,downloads:q})}),P(n.hits)}catch(a){throw console.error("Помилка при отриманні фото:",a),a}}const I=document.querySelector(".form"),R=document.querySelector(".load-more-btn");I.addEventListener("submit",O);R.addEventListener("click",k);
//# sourceMappingURL=index.js.map
