const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;let o=!0;function n(){o&&(d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,setTimeout(n,1e3))}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,o=!0,n()})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,o=!1}));
//# sourceMappingURL=01-color-switcher.d444b22d.js.map
