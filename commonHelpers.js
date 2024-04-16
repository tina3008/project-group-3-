import{A as h,a as S,S as m,N as f,K as y,P as k,i as O}from"./assets/vendor-c0604851.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();new h(".accordion-container",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0});const B="https://portfolio-js.b.goit.study/api";async function x(e){const o=`${B}/reviews`;try{return(await S.get(o)).data}catch(r){throw console.error("Error fetching images:",r),r}}const I=document.querySelector(".covers-container"),P=new IntersectionObserver(e=>{e.forEach(t=>{const o=t.target.querySelectorAll(".image-box-item");t.isIntersecting?o.forEach(r=>{r.classList.add("covers-animation")}):o.forEach(r=>{r.classList.remove("covers-animation")})})},{threshold:1});P.observe(I);new h(".faq-list-accordion-container",{duration:600,showMultiple:!0});document.addEventListener("click",function(e){const t=e.target.closest(".ac-trigger");if(!t)return;e.preventDefault();const o=t.closest(".ac"),r=t.querySelector("use");o.classList.contains("is-active")?r.setAttribute("href","../img/faq-svg/faq.svg#icon-arrow-up"):r.setAttribute("href","../img/faq-svg/faq.svg#icon-arrow-down")});const T=document.querySelectorAll(".ac.faq-item");T.forEach(function(e,t){(t+1)%2===0&&(e.style.paddingLeft="20px")});const p=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?p.style.display="flex":p.style.display="none"});function N(){window.scrollTo({top:0,behavior:"smooth"})}p.addEventListener("click",N);document.getElementById("profile-link").addEventListener("click",function(e){e.preventDefault(),document.getElementById("profile").classList.toggle("active");const t=document.getElementById("dropdown");t.classList.contains("active")?(t.classList.remove("active"),t.style.opacity=0):(t.classList.add("active"),setTimeout(()=>{t.style.opacity=1},10))});document.querySelector(".header-mobile-menu-open-btn");document.getElementById("profile-link");document.querySelector(".menu-container-mobile");document.getElementById("dropdown-mobile");const g=document.querySelector(".projects-section > .swiper"),i=document.querySelector(".next-btn"),c=document.querySelector(".prev-btn");console.log(g);new m(g,{modules:[f,y],navigation:{nextEl:i,prevEl:c},direction:"horizontal",centeredSlides:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1});const A=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(i.classList.contains("swiper-button-disabled")?(i.style.opacity="0.5",i.style.cursor="not-allowed"):(i.style.opacity="1",i.style.cursor="pointer"))})});A.observe(i,{attributes:!0});const V=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});V.observe(c,{attributes:!0});const E=document.querySelector(".reviews-list");function M(e,t,o,r){return`
     <li class="reviews-list-items swiper-slide" data-id="${e}">
     <img class="reviews-image" src="${o}" alt="Photo" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${t}</h3>
            <p class="reviews-main-text">${r}</p>
          </div>
        </li>
  `}function w(){const e='<p class="end-message">Not found</p>';E.insertAdjacentHTML("afterend",e)}function C(e){return e.map(({_id:t,author:o,avatar_url:r,review:s})=>M(t,o,r,s)).join("")}function D(e){const t=C(e);E.insertAdjacentHTML("beforeend",t)}const U=document.querySelector(".swiper.swiper-one"),l=document.querySelector(".button-next-svg"),a=document.querySelector(".button-prev"),j=new m(U,{modules:[f,y,k],navigation:{nextEl:l,prevEl:a},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto",spaceBetween:18},767:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});j.update();async function R(){try{const e=await x();e.length===0?w():D(e)}catch{O.error({color:"red",message:"❌ Sorry, there is an error. Please try again later!",position:"topRight"}),w()}}const $=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});$.observe(l,{attributes:!0});const z=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("swiper-button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});z.observe(a,{attributes:!0});R();const H=document.querySelectorAll('a[href^="#"]');for(let e of H)e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});const v="my-cache-v1",W=["/src/img","/src/js","/src/partials","/src/index.html","/src/main.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(v).then(t=>(console.log("Opened cache"),t.addAll(W))))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.map(o=>{if(o!==v)return caches.delete(o)}))))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request).then(o=>{if(!o||o.status!==200||o.type!=="basic")return o;const r=o.clone();return caches.open(v).then(s=>{s.put(e.request,r)}),o})))});self.addEventListener("install",e=>{console.log("Service Worker installed")});self.addEventListener("activate",e=>{console.log("Service Worker activated")});self.addEventListener("fetch",e=>{console.log("Fetching:",e.request.url)});const _=document.querySelector(".swiper"),F=document.querySelector(".swiper-next-button"),d=new m(_,{modules:[f,y],navigation:{nextEl:F},loop:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:"auto"}}});d.update();const K=document.querySelector(".swiper-slide:first-child");K.style.backgroundColor="rgb(237, 59, 68)";d.on("slideChangeTransitionStart",()=>{const e=d.activeIndex,t=d.slides[e-1];t&&(t.style.backgroundColor="initial");const o=d.slides[e];o.style.backgroundColor="rgb(237, 59, 68)"});const X=document.querySelectorAll(".click-js"),G=document.querySelector(".backdrop");X.forEach(e=>{e.addEventListener("click",L)});document.addEventListener("keydown",J);function L(){G.classList.remove("is-open")}function J(e){e.code==="Escape"&&L()}const Q=document.querySelector("#footer-form"),b=document.querySelector("#send-button");document.querySelector("#user-email");Q.addEventListener("submit",e=>{e.preventDefault(),b.setAttribute("disabled",!0),b.style.opacity="0.7",document.querySelector("#footer-form").reset(),document.querySelector("#modal-open").classList.add("is-open")});const q=document.querySelector("#mobail-menu"),Y=document.querySelector("#mobiail-btn"),Z=document.querySelector("#burger");Z.addEventListener("click",e=>{e.preventDefault(),q.classList.toggle("is-open")});Y.addEventListener("click",e=>{e.preventDefault(),q.classList.toggle("is-open")});
//# sourceMappingURL=commonHelpers.js.map
