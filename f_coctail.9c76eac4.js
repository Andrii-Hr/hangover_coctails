function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequiredd77;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequiredd77=r),r("kyEFX").register(JSON.parse('{"cm6eq":"f_coctail.9c76eac4.js","7kCeP":"sprite.86d7718d.svg","jBXHn":"f_coctail.2171f969.js","1Mf1J":"f_coctail.78edefb7.js"}'));var i,o=r("87vAp");i=new URL(r("kyEFX").resolve("7kCeP"),import.meta.url).toString();var d=r("bNzKi");const c=document.querySelector(".js-add_f-coctail"),l=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[];c.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){const t=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[];for(let a=0;a<t.length;a++)if(t[a].idDrink===e)return t.splice(a,1),void localStorage.setItem(o.FAV_COCKTAIL,JSON.stringify(t))}(e.target.dataset.favid),void e.target.parentNode.parentNode.remove();if(e.target.dataset.type)return(0,d.searchCoctById)(e.target.dataset.id)})),l.length?function(t=[]){const a=t.map((({strDrink:t,strDrinkThumb:a,idDrink:n})=>`<li class="coctail-card">\n      <img class="img" src=${a} alt=${t}/img>\n      <h3 class="coctail-card__name">${t}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${n} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${n} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(i)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");c.innerHTML=a}(l):c.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>';
//# sourceMappingURL=f_coctail.9c76eac4.js.map
