import{S as c,N as l,K as a,P as d}from"./assets/vendor-0d4de1a9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector(".swiper"),p=document.querySelector(".button-next-svg"),f=document.querySelector(".button-prev"),m=new c(u,{modules:[l,a,d],navigation:{nextEl:p,prevEl:f},direction:"horizontal",spaceBetween:22,autoHeight:!1,autoWidth:!1,centeredSlides:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto"},767:{slidesPerView:2},1439:{slidesPerView:4}}});m.update();document.getElementById("profile-link").addEventListener("click",function(i){i.preventDefault(),document.getElementById("profile").classList.toggle("active");const o=document.getElementById("dropdown");o.classList.contains("active")?(o.classList.remove("active"),o.style.opacity=0):(o.classList.add("active"),setTimeout(()=>{o.style.opacity=1},10))});
//# sourceMappingURL=commonHelpers.js.map
