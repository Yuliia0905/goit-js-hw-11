import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function h(t){return`<li class="gallery-item">
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
    </li>`}function f(t){return t.map(h).join("")}function p(t){const r="44366879-bfb1deb33845459b9a36e6118",o="https://pixabay.com",i="/api/",e=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${o}${i}?${e}`;return fetch(s).then(l=>l.json())}const a="/goit-js-hw-11/assets/error-8da60983.svg",c=document.querySelector(".form"),m=document.querySelector(".gallery"),u=document.querySelector(".lds-roller"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",t=>{t.preventDefault(),m.innerHTML="";const r=t.target.elements.input.value.trim();if(r===""){n.error({position:"topRight",maxWidth:"360px",theme:"dark",messageColor:"white",iconUrl:a,message:"Please enter the data for the request"});return}y(),p(r).then(o=>{o.hits.length===0&&n.error({position:"topRight",maxWidth:"360px",theme:"dark",messageColor:"white",iconUrl:a,message:"Sorry, there are no images matching your search query. Please try again!"});const i=f(o.hits);m.innerHTML=i,g.refresh()}).catch(o=>console.log(o)).finally(()=>{L()}),c.reset()});function y(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
