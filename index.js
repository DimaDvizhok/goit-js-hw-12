import{a as k,S as O,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const x=k.create({baseURL:"https://pixabay.com/api/"}),y=async(r,o)=>{const i={params:{key:"54348758-bba5af5a9365c42f0e38aa256",q:r,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}},{data:s}=await x.get("",i);return s},m=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".js-button");let l=new O(".gallery a",{captionsData:"alt",captionDelay:250});const h=r=>{var i;if(!m)return;const o=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:c,views:S,comments:q,downloads:$})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${t}"
    />
  </a>
  <div class = "image-info-block">
    <div class = "image-info-block-part">
      <p class="bold">Likes</p>
      <p>${c}</p>
  </div>
    <div class = "image-info-block-part">
    <p class="bold">Views</p>
    <p>${S}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Comments</p>
    <p>${q}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Downloads</p>
    <p>${$}</p>
  </div>
</div>
</li>`).join("");m.insertAdjacentHTML("beforeend",o),(i=l==null?void 0:l.refresh)==null||i.call(l)},P=()=>{m&&(m.innerHTML="")},b=()=>{n==null||n.classList.remove("is-hidden")},L=()=>{n==null||n.classList.add("is-hidden")},v=()=>{a==null||a.classList.remove("is-hidden")},w=()=>{a==null||a.classList.add("is-hidden")};let f=1,p=null,u=null;const g=document.querySelector(".form"),R=async r=>{var i;r.preventDefault(),w();const o=r.currentTarget;if(p=(i=o.elements["search-text"])==null?void 0:i.value.trim(),!p){d.error({title:"Помилка",message:"Заповніть поле пошуку!",position:"topRight",timeout:3e3});return}f=1,P(),b();try{const s=await y(p,f);if(u=s.totalHits,console.log(u),s.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}h(s.hits),u>15&&v()}catch(s){d.error({title:"Error",message:s.message,position:"topRight",timeout:3e3})}finally{o.reset(),L()}},D=async()=>{w(),b(),f+=1;try{const r=await y(p,f);h(r.hits),u>15&&v()}catch(r){d.error({title:"Error",message:r.message,position:"topRight",timeout:3e3})}finally{L()}};g==null||g.addEventListener("submit",R);a==null||a.addEventListener("click",D);
//# sourceMappingURL=index.js.map
