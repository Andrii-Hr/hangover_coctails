!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequiredd77;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequiredd77=r),r("iE7OH").register(JSON.parse('{"dlfMs":"f_coctail.54af8d14.js","JQ8i3":"sprite.86d7718d.svg","jdaXP":"f_coctail.310bfa14.js","2i1er":"f_coctail.95e861a2.js"}'));var i,o=r("gyjzY");i=r("aNJCr").getBundleURL("dlfMs")+r("iE7OH").resolve("JQ8i3");var c=r("g4tMw"),d=r("fmC3e"),l=document.querySelector(".js-add_f-coctail"),s=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[];document.querySelector(".header__input").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.finder.value.trim();if(!t)return;console.log(s);var n=s.filter((function(e){return e.strDrink.toLowerCase().includes(t.toLowerCase())}));if(!n.length)return l.innerHTML=c.notFound;f(n)})),l.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){for(var t=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[],n=0;n<t.length;n++)if(t[n].idDrink===e)return t.splice(n,1),void localStorage.setItem(o.FAV_COCKTAIL,JSON.stringify(t))}(e.target.dataset.favid),void e.target.parentNode.parentNode.remove()})),s.length?f(s):l.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>';var u=document.getElementById("themeSwitch");function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=t.map((function(t){var n=t.strDrink,a=t.strDrinkThumb,r=t.idDrink;return'<li class="coctail-card">\n      <img class="img" src='.concat(a," alt=").concat(n,'/img>\n      <h3 class="coctail-card__name">').concat(n,'</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=').concat(r,' data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=').concat(r,' data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="').concat(e(i),'#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>')})).join("");l.innerHTML=n}u&&((0,d.initTheme)(),u.addEventListener("change",(function(e){(0,d.resetTheme)()})))}();
//# sourceMappingURL=f_coctail.54af8d14.js.map
