function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequiredd77;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequiredd77=o),o.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"74G8i":"f_ingredients.8daf4af3.js","7kCeP":"sprite.86d7718d.svg","jBXHn":"f_coctail.a9142734.js"}'));var a,s=o("jCADl");a=new URL(o("kyEFX").resolve("7kCeP"),import.meta.url).toString();var l=o("gDQKf"),c=o("lmZ5B"),d=o("1dMoQ");const u=document.querySelector(".ingredients-list"),f=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];document.querySelector(".header__input").addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;console.log(f);const n=f.filter((e=>e.strIngredient.toLowerCase().includes(t.toLowerCase())));if(!n.length)return u.innerHTML=l.notFound;v(n)})),u.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;e.target.dataset.name&&(0,d.searchIngrByName)(e.target.dataset.name);e.target.dataset.fav&&(!function(e){const t=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];for(let n=0;n<t.length;n++)if(t[n].strIngredient===e)return t.splice(n,1),void localStorage.setItem(s.FAV_INGREDIENTS,JSON.stringify(t))}(e.target.dataset.fav),e.target.parentNode.parentNode.remove())}));let g=document.getElementById("themeSwitch");function v(e=[]){const n=e.map((({strIngredient:e,strType:n})=>`<li class="ingredients-card">\n          <h3 class="ingredients__name">${e}</h3>\n          <h5 class="ingredients__type">${n}</h5>\n          <div class="ingredients-card__options">\n            <button class="button-learn_more" data-name="${e}">Learn more</button>\n            <button class="button-remove" data-fav=${e}>\n              Remove\n              <svg class="heart-icon" width="18" height="18">\n                <use href="${t(a)}#icon-heart_full" ></use>\n              </svg>\n            </button>\n          </div>\n        </li>`)).join("");u.innerHTML=n}g&&((0,c.initTheme)(),g.addEventListener("change",(function(e){(0,c.resetTheme)()}))),f.length?v(f):u.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>';
//# sourceMappingURL=f_ingredients.8daf4af3.js.map
