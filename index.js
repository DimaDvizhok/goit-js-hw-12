import{a as u,S as h,i as p}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";const y=s=>{const r={params:{key:"54348758-bba5af5a9365c42f0e38aa256",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return u.get("",r).then(o=>o.data.hits)},l=document.querySelector(".gallery"),a=document.querySelector(".loader");let c=new h(".gallery a",{captionsData:"alt",captionDelay:250});const b=s=>{var o;if(!l)return;const r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:m,comments:f,downloads:g})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${t}"
    />
  </a>
  <div class = "image-info-block">
    <div class = "image-info-block-part">
      <p class="bold">Likes</p>
      <p>${n}</p>
  </div>
    <div class = "image-info-block-part">
    <p class="bold">Views</p>
    <p>${m}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Comments</p>
    <p>${f}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Downloads</p>
    <p>${g}</p>
  </div>
</div>
</li>`).join("");l.innerHTML=r,(o=c==null?void 0:c.refresh)==null||o.call(c)},v=()=>{l&&(l.innerHTML="")},L=()=>{a==null||a.classList.remove("is-hidden")},S=()=>{a==null||a.classList.add("is-hidden")},d=document.querySelector(".form"),$=s=>{var i;s.preventDefault();const r=s.currentTarget,o=(i=r.elements["search-text"])==null?void 0:i.value.trim();if(!o){p.error({title:"Помилка",message:"Заповніть поле пошуку!",position:"topRight",timeout:3e3});return}v(),L(),y(o).then(e=>{e.length>0?b(e):p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}).catch(e=>{p.error({title:"Error",message:e.message,position:"topRight",timeout:3e3})}).finally(()=>{r.reset(),S()})};d==null||d.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
