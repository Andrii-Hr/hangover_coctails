!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequiredd77;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequiredd77=r),r("iE7OH").register(JSON.parse('{"dlfMs":"f_coctail.1af3e431.js","JQ8i3":"sprite.86d7718d.svg","jdaXP":"f_coctail.10394a5d.js","2i1er":"f_coctail.160b0166.js"}'));var i,o=r("gyjzY");i=r("aNJCr").getBundleURL("dlfMs")+r("iE7OH").resolve("JQ8i3");var c=document.querySelector(".js-add_f-coctail"),d=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[];c.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){for(var t=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[],a=0;a<t.length;a++)if(t[a].idDrink===e)return t.splice(a,1),void localStorage.setItem(o.FAV_COCKTAIL,JSON.stringify(t))}(e.target.dataset.favid),void e.target.parentNode.parentNode.remove()})),d.length?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=t.map((function(t){var a=t.strDrink,n=t.strDrinkThumb,r=t.idDrink;return'<li class="coctail-card">\n      <img class="img" src='.concat(n," alt=").concat(a,'/img>\n      <h3 class="coctail-card__name">').concat(a,'</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=').concat(r,' data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=').concat(r,' data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="').concat(e(i),'#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>')})).join("");c.innerHTML=a}(d):c.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>'}();
//# sourceMappingURL=f_coctail.1af3e431.js.map
