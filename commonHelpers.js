import{S as m,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function d(t){return`<li class="gallery-item">
      <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image"></a>
        <ul class="info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${t.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${t.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${t.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${t.downloads}</p>
          </li>
        </ul>
    </li>`}function f(t){return t.map(d).join("")}function p(t){const r="44366879-bfb1deb33845459b9a36e6118",o="https://pixabay.com",i="/api/",e=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${o}${i}?${e}`;return fetch(s).then(l=>l.json())}const n=document.querySelector(".form"),a=document.querySelector(".gallery"),c=document.querySelector(".lds-roller"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",t=>{t.preventDefault(),a.innerHTML="";const r=t.target.elements.input.value.trim();if(r===""){u.error({position:"topRight",maxWidth:"360px",theme:"dark",messageColor:"white",iconUrl:"../img/error.svg",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(),p(r).then(o=>{const i=f(o.hits);a.innerHTML=i,h.refresh()}).catch(o=>console.log(o)).finally(()=>{y()}),n.reset()});function g(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
