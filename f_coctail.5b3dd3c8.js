function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequiredd77;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequiredd77=r),r("kyEFX").register(JSON.parse('{"cm6eq":"f_coctail.5b3dd3c8.js","7kCeP":"sprite.3f5ac9d6.svg","5dExv":"f_ingredients.40b662bf.js"}'));var o,i=r("aEubW");o=new URL(r("kyEFX").resolve("7kCeP"),import.meta.url).toString();var s=r("5zOW8"),c=r("gSRkr");async function d(t,n,a){try{const{data:r}=await(0,i.getCoctById)(t),{strDrink:d,strDrinkThumb:g,idDrink:v}=r.drinks[0],m=document.querySelector(".modal__button--favorite"),_=JSON.parse(localStorage.getItem("favourites_coctails"))||[],b={strDrink:d,strDrinkThumb:g,idDrink:v};for(let e=0;e<_.length;e++)if(_[e].idDrink===v)return _.splice(e,1),localStorage.setItem("favourites_coctails",JSON.stringify(_)),void(n?(u(m),f(v),a.innerHTML=c.favCardBtnAdd):l(v));_.push(b),localStorage.setItem("favourites_coctails",JSON.stringify(_)),n?(!function(e){e.textContent="Remove from favorite"}(m),function(t){if(!!document.querySelector(".f-coctails")){const{strDrink:n,strDrinkThumb:a,idDrink:r}=t,i=`<li class="coctail-card">\n      <img class="img" src=${a} alt=${n}/img>\n      <h3 class="coctail-card__name">${n}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${r} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${r} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(o)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`;s.refCocktList.insertAdjacentHTML("beforeend",i)}}(b),a.innerHTML=c.favCardBtnRemove):function(e){document.querySelector(`button[data-favid="${e}"]`).innerHTML=c.favCardBtnRemove}(v)}catch(e){console.log(e)}}function l(e){document.querySelector(`button[data-favid="${e}"]`).innerHTML=c.favCardBtnAdd}function u(e){e.textContent="Add to favorite"}function f(e){!!document.querySelector(".f-coctails")&&document.querySelector(`button[data-favid="${e}"]`).parentElement.parentElement.remove()}var g=r("gDQKf"),v=r("lmZ5B");i=r("aEubW"),i=r("aEubW");document.querySelector(".js-main-coct");async function m(e){return console.log(),e.target.dataset.type?await S(e.target.dataset.id,e.target.nextElementSibling):e.target.dataset.add?await d(e.target.dataset.favid):void 0}var _=r("1dMoQ");let b=[],p=[],h="";async function S(t,n){try{h=n;const{data:a}=await(0,i.getCoctById)(t);return function(e=[]){for(let t=1;t<=15;t++){if(null===e[0]["strIngredient"+t])return;if(p.push(e[0]["strIngredient"+t]),null===e[0]["strMeasure"+t])return b.push(e[0]["strIngredient"+t]);b.push(e[0]["strIngredient"+t]+" "+e[0]["strMeasure"+t])}}(a.drinks),function(t,n){const a=JSON.parse(localStorage.getItem("favourites_coctails"))||[],{strDrink:r,strDrinkThumb:i,strInstructions:s,idDrink:c}=t,d=a.find((e=>e.strDrink===r))?"Remove from favorite":"Add to favorite",l=`\n<div class="backdrop">\n  <div class="modal">\n    <button type="button" aria-label="Close button" class="modal__close" >\n      <svg class="modal__icon" width="24" height="24">\n        <use href="${e(o)}#icon-close-burger"></use>\n      </svg>\n    </button>\n    <h2 class="coctail">${r}</h2>\n    <h3 class="coctail__instruction">INSTRUCTIONS:</h3>\n    <p class="coctail__description">${s}\n    </p>\n    <img class="coctail__img" src=${i} alt=${r} />\n    <h4 class="ingredients">INGREDIENTS</h4>\n    <p class="ingredients__denominator">Per coctail</p>\n    <ul class="ingredients__list">\n       ${n.map(((e,t)=>`<li class="ingredients__items" data-name="${p[t]}">✶ ${e}</li>`)).join("")}\n    </ul>\n    <button\n      type="button"\n      class="button modal__button--favorite"\n      aria-label="${d}"\n      data-add="add" data-favid=${c}\n    >\n      ${d}\n    </button>\n  </div>\n</div>`;document.body.insertAdjacentHTML("beforeend",l),document.querySelector(".modal__close").addEventListener("click",k),document.querySelector(".modal").addEventListener("click",y),document.querySelector(".ingredients__list").addEventListener("click",_.onClickIngr)}(...a.drinks,b),a}catch(e){console.log(e)}}function k(e){document.querySelector(".modal__close").removeEventListener("click",k),document.querySelector(".modal").removeEventListener("click",m),document.querySelector(".backdrop").remove(),b=[],p=[]}async function y(e){if(e.target.dataset.add)return await d(e.target.dataset.favid,"modal",h)}c=r("gSRkr");var L=r("goUyQ");s=r("5zOW8");const E=JSON.parse(localStorage.getItem("favourites_coctails"))||[];function $(t=[]){const n=t.map((({strDrink:t,strDrinkThumb:n,idDrink:a})=>`<li class="coctail-card">\n      <img class="img" src=${n} alt=${t}/img>\n      <h3 class="coctail-card__name">${t}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${a} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${a} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(o)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");s.refCocktList.innerHTML=n}function w(){s.refCocktList.innerHTML=c.errorListFavCocktail}function H(){if(!(JSON.parse(localStorage.getItem("favourites_coctails"))||[]).length)return w()}s.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;console.log(E);const n=E.filter((e=>e.strDrink.toLowerCase().includes(t.toLowerCase())));if(!n.length)return s.refCocktList.innerHTML=g.notFound;$(n)})),s.refCocktList.addEventListener("click",(async function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){const t=JSON.parse(localStorage.getItem("favourites_coctails"))||[];for(let n=0;n<t.length;n++)if(t[n].idDrink===e)return t.splice(n,1),localStorage.setItem("favourites_coctails",JSON.stringify(t)),void H()}(e.target.dataset.favid),e.target.parentNode.parentNode.remove(),newArr=JSON.parse(localStorage.getItem("favourites_coctails"))||[],void(0,L.initPagination)(newArr,$);e.target.dataset.type&&await S(e.target.dataset.id,e.target.nextElementSibling)})),s.refHeaderJSMenu.addEventListener("mouseleave",(()=>{s.refHeaderFavBar.classList.remove("active")})),s.refHeaderFavLink.addEventListener("mouseenter",(()=>{s.refHeaderFavBar.classList.add("active")})),s.refHeaderMenuOpen.addEventListener("click",(()=>{s.refHeaderMobMenu.classList.toggle("open"),s.refHeaderSwitcher.classList.toggle("open"),document.body.classList.toggle("overflow")})),s.refHeaderMenuClose.addEventListener("click",(()=>{s.refHeaderMobMenu.classList.toggle("open"),s.refHeaderSwitcher.classList.toggle("open"),document.body.classList.toggle("overflow")})),(0,v.themeSwitcher)(),E.length?(0,L.initPagination)(E,$):w();
//# sourceMappingURL=f_coctail.5b3dd3c8.js.map
