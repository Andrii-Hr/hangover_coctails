!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequiredd77;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequiredd77=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a("iE7OH").register(JSON.parse('{"jte2R":"f_ingredients.5fb9be39.js","JQ8i3":"sprite.86d7718d.svg","jdaXP":"f_coctail.7d351a71.js","1zkQe":"index.11a558ce.js"}'));var o,c=a("fi488");o=a("aNJCr").getBundleURL("jte2R")+a("iE7OH").resolve("JQ8i3");var s=a("g4tMw"),u=a("35hiA"),l=document.querySelector(".ingredients-list"),d=JSON.parse(localStorage.getItem(c.FAV_INGREDIENTS))||[];function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.map((function(e){var n=e.strIngredient,r=e.strType;return'<li class="ingredients-card">\n          <h3 class="ingredients__name">'.concat(n,'</h3>\n          <h5 class="ingredients__type">').concat(r,'</h5>\n          <div class="ingredients-card__options">\n            <button class="button-learn_more" data-name="').concat(n,'">Learn more</button>\n            <button class="button-remove" data-fav=').concat(n,'>\n              Remove\n              <svg class="heart-icon" width="18" height="18">\n                <use href="').concat(t(o),'#icon-heart_full" ></use>\n              </svg>\n            </button>\n          </div>\n        </li>')})).join("");l.innerHTML=n}document.querySelector(".header__input").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.finder.value.trim();if(!t)return;console.log(d);var n=d.filter((function(e){return e.strIngredient.toLowerCase().includes(t.toLowerCase())}));if(!n.length)return l.innerHTML=s.notFound;f(n)})),l.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;e.target.dataset.name&&(0,u.searchIngrByName)(e.target.dataset.name);e.target.dataset.fav&&(!function(e){for(var t=JSON.parse(localStorage.getItem(c.FAV_INGREDIENTS))||[],n=0;n<t.length;n++)if(t[n].strIngredient===e)return t.splice(n,1),void localStorage.setItem(c.FAV_INGREDIENTS,JSON.stringify(t))}(e.target.dataset.fav),e.target.parentNode.parentNode.remove())})),d.length?f(d):l.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>'}();
//# sourceMappingURL=f_ingredients.5fb9be39.js.map
