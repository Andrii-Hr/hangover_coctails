function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequiredd77;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},e.parcelRequiredd77=i),i("kyEFX").register(JSON.parse('{"cm6eq":"f_coctail.b2d7b0c5.js","7kCeP":"sprite.86d7718d.svg","jBXHn":"f_coctail.555e697f.js","1Mf1J":"f_coctail.4baa6e5a.js"}'));var r,s=i("87vAp");r=new URL(i("kyEFX").resolve("7kCeP"),import.meta.url).toString();const o=document.querySelector(".js-add_f-coctail"),c=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];o.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(t){const e=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];for(let n=0;n<e.length;n++)if(e[n].idDrink===t)return e.splice(n,1),void localStorage.setItem(s.FAV_COCKTAIL,JSON.stringify(e))}(e.target.dataset.favid),void e.target.parentNode.parentNode.remove();if(e.target.dataset.type)return async function(e){try{const{data:n}=await getCoctById(e);return function(t=[]){for(let e=1;e<=15;e++){if(null===t[0]["strIngredient"+e])return;if(d.push(t[0]["strIngredient"+e]),null===t[0]["strMeasure"+e])return l.push(t[0]["strIngredient"+e]);l.push(t[0]["strIngredient"+e]+" "+t[0]["strMeasure"+e])}}(n.drinks),function(e,n){const a=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[],{strDrink:i,strDrinkThumb:o,strInstructions:c,idDrink:l}=e,u=a.find((t=>t.strDrink===i))?"Remove from favorite":"Add to favorite",f=`\n<div class="backdrop">\n  <div class="modal">\n    <button type="button" aria-label="Close button" class="modal__close" >\n      <svg class="modal__icon" width="24" height="24">\n        <use href="${t(r)}#icon-close-burger"></use>\n      </svg>\n    </button>\n    <h2 class="coctail">${i}</h2>\n    <h3 class="coctail__instruction">INSTRUCTIONS:</h3>\n    <p class="coctail__description">${c}\n    </p>\n    <img class="coctail__img" src=${o} alt=${i} />\n    <h4 class="ingredients">INGREDIENTS</h4>\n    <p class="ingredients__denominator">Per coctail</p>\n    <ul class="ingredients__list">\n       ${n.map(((t,e)=>`<li class="ingredients__items" data-name="${d[e]}">✶ ${t}</li>`)).join("")}\n    </ul>\n    <button\n      type="button"\n      class="button modal__button--favorite"\n      aria-label="${u}"\n      data-add="add" data-favid=${l}\n    >\n      ${u}\n    </button>\n  </div>\n</div>`;document.body.insertAdjacentHTML("beforeend",f)}(...n.drinks,l),n}catch(t){console.log(t)}}(e.target.dataset.id)}));let l=[],d=[];c.length?function(e=[]){const n=e.map((({strDrink:e,strDrinkThumb:n,idDrink:a})=>`<li class="coctail-card">\n      <img class="img" src=${n} alt=${e}/img>\n      <h3 class="coctail-card__name">${e}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${a} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${a} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${t(r)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");o.innerHTML=n}(c):o.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>';
//# sourceMappingURL=f_coctail.b2d7b0c5.js.map
