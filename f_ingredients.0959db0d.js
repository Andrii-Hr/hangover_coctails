function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequiredd77;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiredd77=i),i("kyEFX").register(JSON.parse('{"74G8i":"f_ingredients.0959db0d.js","7kCeP":"sprite.3f5ac9d6.svg","aTofS":"f_ingredients.f9350511.js"}'));var a,o=i("alV1T"),s=i("jCADl");a=new URL(i("kyEFX").resolve("7kCeP"),import.meta.url).toString();var l=i("gDQKf"),d=i("lmZ5B"),f=i("1dMoQ"),g=i("goUyQ"),c=i("5zOW8"),u=i("gSRkr");const m=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];function p(t=[]){const n=t.map((({strIngredient:t,strType:n})=>`<li class="ingredients-card">\n          <h3 class="ingredients__name">${t}</h3>\n          <h5 class="ingredients__type">${n||"no info"}</h5>\n          <div class="ingredients-card__options">\n            <button class="button-learn_more" data-name="${t}">Learn more</button>\n            <button class="button-remove" data-fav="${t}">\n              Remove\n              <svg class="heart-icon" width="18" height="18">\n                <use href="${e(a)}#icon-heart_full" ></use>\n              </svg>\n            </button>\n          </div>\n        </li>`)).join("");c.refIngrList.innerHTML=n}function v(){c.refIngrList.innerHTML=u.errorListFavCocktail}function I(){if(!(JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[]).length)return v()}c.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;const n=m.filter((e=>e.strIngredient.toLowerCase().includes(t.toLowerCase())));if(c.refFormSearch.reset(),!n.length)return c.refIngrList.innerHTML=l.notFound;p(n)})),c.refIngrList.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;e.target.dataset.name&&(0,f.searchIngrByName)(e.target.dataset.name);e.target.dataset.fav&&(function(e){const t=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];for(let n=0;n<t.length;n++)if(t[n].strIngredient===e)return t.splice(n,1),localStorage.setItem(s.FAV_INGREDIENTS,JSON.stringify(t)),void I()}(e.target.dataset.fav),e.target.parentNode.parentNode.remove(),function(){const e=JSON.parse(localStorage.getItem(s.FAV_INGREDIENTS))||[];if(!e.length)return c.refIngrList.innerHTML=u.errorListFavCocktail;(0,g.initPagination)(e,p)}())})),(0,o.headerInit)(),(0,d.themeSwitcher)(),m.length?(0,g.initPagination)(m,p):v();
//# sourceMappingURL=f_ingredients.0959db0d.js.map