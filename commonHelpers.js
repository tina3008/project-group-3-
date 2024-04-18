import{A as g,a as q,S as y,N as f,K as b,P as k,i as O}from"./assets/vendor-c0604851.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();new g(".accordion-container",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0});document.addEventListener("click",function(e){const t=e.target.closest(".ac-trigger-about-me");if(!t)return;e.preventDefault();const o=t.querySelector(".icon-about-me use"),n=o.getAttribute("href");t.classList.contains("is-active")?o.setAttribute("href",n.replace("#icon-arrow-up","#icon-arrow-down")):o.setAttribute("href",n.replace("#icon-arrow-down","#icon-arrow-up")),t.classList.toggle("is-active")});const B="https://portfolio-js.b.goit.study/api";async function I(e){const o=`${B}/reviews`;try{return(await q.get(o)).data}catch(n){throw console.error("Error fetching images:",n),n}}const x=document.querySelector(".covers-container"),P=new IntersectionObserver(e=>{e.forEach(t=>{const o=t.target.querySelectorAll(".image-box-item");t.isIntersecting?o.forEach(n=>{n.classList.add("covers-animation")}):o.forEach(n=>{n.classList.remove("covers-animation")})})},{threshold:1});P.observe(x);new g(".faq-list-accordion-container",{duration:600,showMultiple:!0});const m=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?m.style.display="flex":m.style.display="none"});function T(){window.scrollTo({top:0,behavior:"smooth"})}m.addEventListener("click",T);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("profile-link"),t=document.getElementById("dropdown"),o=document.querySelectorAll(".menu-link-mobile");e.addEventListener("click",function(n){n.preventDefault(),N()}),o.forEach(function(n){n.addEventListener("click",function(r){p()})}),t.addEventListener("click",function(n){p()}),document.addEventListener("click",function(n){const r=n.target;!t.contains(r)&&!e.contains(r)&&p()})});function N(){const e=document.getElementById("profile"),t=document.getElementById("dropdown");e.classList.toggle("active"),t.classList.toggle("active"),t.classList.contains("active")?t.style.opacity=1:t.style.opacity=0}function p(){const e=document.getElementById("profile"),t=document.getElementById("dropdown");e.classList.remove("active"),t.classList.remove("active"),t.style.opacity=0}document.querySelector(".header-mobile-menu-open-btn");document.getElementById("profile-link");document.querySelector(".menu-container-mobile");document.getElementById("dropdown-mobile");const A=document.querySelector(".projects-section > .swiper"),i=document.querySelector(".next-btn"),c=document.querySelector(".prev-btn");new y(A,{modules:[f,b],navigation:{nextEl:i,prevEl:c},direction:"horizontal",centeredSlides:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1});const M=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(i.classList.contains("swiper-button-disabled")?(i.style.opacity="0.5",i.style.cursor="not-allowed"):(i.style.opacity="1",i.style.cursor="pointer"))})});M.observe(i,{attributes:!0});const V=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});V.observe(c,{attributes:!0});const E=document.querySelector(".reviews-list");function C(e,t,o,n){return`
     <li class="reviews-list-items swiper-slide" data-id="${e}">
     <img class="reviews-image" src="${o}" alt="Photo" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${t}</h3>
            <p class="reviews-main-text">${n}</p>
          </div>
        </li>
  `}function w(){const e='<p class="end-message">Not found</p>';E.insertAdjacentHTML("afterend",e)}function D(e){return e.map(({_id:t,author:o,avatar_url:n,review:r})=>C(t,o,n,r)).join("")}function j(e){const t=D(e);E.insertAdjacentHTML("beforeend",t)}const R=document.querySelector(".swiper.swiper-one"),l=document.querySelector(".button-next-svg"),a=document.querySelector(".button-prev"),U=new y(R,{modules:[f,b,k],navigation:{nextEl:l,prevEl:a},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:18},767:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});U.update();async function $(){try{const e=await I();e.length===0?w():j(e)}catch{O.error({color:"red",message:"❌ Sorry, there is an error. Please try again later!",position:"topRight"}),w()}}const H=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});H.observe(l,{attributes:!0});const W=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("swiper-button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});W.observe(a,{attributes:!0});$();const z=document.querySelector("#mobail-menu"),_=document.querySelectorAll('a[href^="#"]');for(let e of _)e.addEventListener("click",t=>{t.preventDefault(),z.classList.remove("is-open");const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});const v="my-cache-v1",F=["/src/img","/src/js","/src/partials","/src/index.html","/src/main.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(v).then(t=>(console.log("Opened cache"),t.addAll(F))))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.map(o=>{if(o!==v)return caches.delete(o)}))))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request).then(o=>{if(!o||o.status!==200||o.type!=="basic")return o;const n=o.clone();return caches.open(v).then(r=>{r.put(e.request,n)}),o})))});self.addEventListener("install",e=>{console.log("Service Worker installed")});self.addEventListener("activate",e=>{console.log("Service Worker activated")});self.addEventListener("fetch",e=>{console.log("Fetching:",e.request.url)});const K=document.querySelector(".swiper"),Y=document.querySelector(".swiper-next-button"),d=new y(K,{modules:[f,b],navigation:{nextEl:Y},loop:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:"auto"}}});d.update();const X=document.querySelector(".swiper-slide:first-child");X.style.backgroundColor="rgb(237, 59, 68)";d.on("slideChangeTransitionStart",()=>{const e=d.activeIndex,t=d.slides[e-1];t&&(t.style.backgroundColor="initial");const o=d.slides[e];o.style.backgroundColor="rgb(237, 59, 68)"});const G=document.querySelectorAll(".click-js"),J=document.querySelector(".backdrop");document.querySelector("body");G.forEach(e=>{e.addEventListener("click",L)});document.addEventListener("keydown",Q);function L(){const e=document.body,t=e.style.top;e.style.position="",e.style.top="",e.style.height="",e.style.overflowY="",window.scrollTo(0,parseInt(t||"0")*-1),J.classList.remove("is-open")}function Q(e){e.code==="Escape"&&L()}const Z=document.querySelector("#footer-form"),h=document.querySelector("#send-button");document.querySelector("#user-email");document.querySelector("body");Z.addEventListener("submit",e=>{e.preventDefault(),h.setAttribute("disabled",!0),h.style.opacity="0.7",document.querySelector("#footer-form").reset(),document.querySelector("#modal-open").classList.add("is-open"),document.documentElement.style.getPropertyValue("--scroll-y");const n=document.body;n.style.height="100vh",n.style.overflowY="hidden"});const S=document.querySelector("#mobail-menu"),ee=document.querySelector("#mobiail-btn"),te=document.querySelector("#burger"),oe=document.querySelector("body");te.addEventListener("click",e=>{e.preventDefault(),oe.classList.toggle(".visually-hidden"),S.classList.toggle("is-open")});ee.addEventListener("click",e=>{e.preventDefault(),S.classList.toggle("is-open")});
//# sourceMappingURL=commonHelpers.js.map
