import{a as $,S as k,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const O=$.create({baseURL:"https://pixabay.com/api/"}),y=15,b=async(r,o)=>{const i={params:{key:"54348758-bba5af5a9365c42f0e38aa256",q:r,page:o,per_page:y,image_type:"photo",orientation:"horizontal",safesearch:!0}},{data:t}=await O.get("",i);return t},m=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".js-button");let l=new k(".gallery a",{captionsData:"alt",captionDelay:250});const L=r=>{var i;if(!m)return;const o=r.map(({webformatURL:t,largeImageURL:e,tags:s,likes:c,views:q,comments:P,downloads:R})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${s}"
            />
          </a>
          <div class = "image-info-block">
            <div class = "image-info-block-part">
                <p class="bold">Likes</p>
                <p>${c}</p>
            </div>
            <div class = "image-info-block-part">
                <p class="bold">Views</p>
                <p>${q}</p>
            </div>
            <div class = "image-info-block-part">
                <p class="bold">Comments</p>
                <p>${P}</p>
            </div>
            <div class = "image-info-block-part">
                <p class="bold">Downloads</p>
                <p>${R}</p>
            </div>
          </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",o),(i=l==null?void 0:l.refresh)==null||i.call(l)},x=()=>{m&&(m.innerHTML="")},v=()=>{n==null||n.classList.remove("is-hidden")},w=()=>{n==null||n.classList.add("is-hidden")},S=()=>{a==null||a.classList.remove("is-hidden")},g=()=>{a==null||a.classList.add("is-hidden")};let u=1,p=null,h=null;const f=document.querySelector(".form"),B=async r=>{var i;r.preventDefault(),g();const o=r.currentTarget;if(p=(i=o.elements["search-text"])==null?void 0:i.value.trim(),!p){d.error({title:"Помилка",message:"Заповніть поле пошуку!",position:"topRight",timeout:3e3});return}u=1,x(),v();try{const t=await b(p,u);if(h=t.totalHits,t.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}L(t.hits),h>y&&S()}catch(t){d.error({title:"Error",message:t.message,position:"topRight",timeout:3e3})}finally{o.reset(),w()}},A=async()=>{g(),v(),u+=1;try{const{hits:r}=await b(p,u);L(r);const o=document.querySelector(".gallery-item");if(o){const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const i=Math.ceil(h/y);u>=i?(g(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight",timeout:3e3})):S()}catch(r){d.error({title:"Error",message:r.message,position:"topRight",timeout:3e3})}finally{w()}};f==null||f.addEventListener("submit",B);a==null||a.addEventListener("click",A);
//# sourceMappingURL=index.js.map
