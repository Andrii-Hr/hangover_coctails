!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequiredd77;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiredd77=a),a("iE7OH").register(JSON.parse('{"dlfMs":"f_coctail.444c4e5a.js","JQ8i3":"sprite.86d7718d.svg","cZvLb":"f_ingredients.a38e78ea.js"}'));var i=a("i24Cx"),o=a("5M7hj");const s="favourites_coctails";async function d(e,t,n){try{const{data:r}=await(0,i.getCoctById)(e),{strDrink:a,strDrinkThumb:d,idDrink:u}=r.drinks[0],f=document.querySelector(".modal__button--favorite"),g=JSON.parse(localStorage.getItem(s))||[],v={strDrink:a,strDrinkThumb:d,idDrink:u};for(let e=0;e<g.length;e++)if(g[e].idDrink===u)return g.splice(e,1),localStorage.setItem(s,JSON.stringify(g)),void(t?(l(f),n.innerHTML=o.favCardBtnAdd):c(u));g.push(v),localStorage.setItem(s,JSON.stringify(g)),t?(!function(e){e.textContent="Remove from favorite"}(f),n.innerHTML=o.favCardBtnRemove):function(e){document.querySelector(`button[data-favid="${e}"]`).innerHTML=o.favCardBtnRemove}(u)}catch(e){console.log(e)}}function c(e){document.querySelector(`button[data-favid="${e}"]`).innerHTML=o.favCardBtnAdd}function l(e){e.textContent="Add to favorite"}var u;u=a("aNJCr").getBundleURL("dlfMs")+a("iE7OH").resolve("JQ8i3");var f=a("g4tMw"),g=a("fmC3e");i=a("i24Cx"),i=a("i24Cx");document.querySelector(".js-main-coct");async function v(e){return console.log(),e.target.dataset.type?await h(e.target.dataset.id,e.target.nextElementSibling):e.target.dataset.add?await d(e.target.dataset.favid):void 0}var m=a("35hiA");let _=[],p=[],b="";async function h(t,n){try{b=n;const{data:r}=await(0,i.getCoctById)(t);return function(e=[]){for(let t=1;t<=15;t++){if(null===e[0]["strIngredient"+t])return;if(p.push(e[0]["strIngredient"+t]),null===e[0]["strMeasure"+t])return _.push(e[0]["strIngredient"+t]);_.push(e[0]["strIngredient"+t]+" "+e[0]["strMeasure"+t])}}(r.drinks),function(t,n){const r=JSON.parse(localStorage.getItem(s))||[],{strDrink:a,strDrinkThumb:i,strInstructions:o,idDrink:d}=t,c=r.find((e=>e.strDrink===a))?"Remove from favorite":"Add to favorite",l=`\n<div class="backdrop">\n  <div class="modal">\n    <button type="button" aria-label="Close button" class="modal__close" >\n      <svg class="modal__icon" width="24" height="24">\n        <use href="${e(u)}#icon-close-burger"></use>\n      </svg>\n    </button>\n    <h2 class="coctail">${a}</h2>\n    <h3 class="coctail__instruction">INSTRUCTIONS:</h3>\n    <p class="coctail__description">${o}\n    </p>\n    <img class="coctail__img" src=${i} alt=${a} />\n    <h4 class="ingredients">INGREDIENTS</h4>\n    <p class="ingredients__denominator">Per coctail</p>\n    <ul class="ingredients__list">\n       ${n.map(((e,t)=>`<li class="ingredients__items" data-name="${p[t]}">✶ ${e}</li>`)).join("")}\n    </ul>\n    <button\n      type="button"\n      class="button modal__button--favorite"\n      aria-label="${c}"\n      data-add="add" data-favid=${d}\n    >\n      ${c}\n    </button>\n  </div>\n</div>`;document.body.insertAdjacentHTML("beforeend",l),document.querySelector(".modal__close").addEventListener("click",L),document.querySelector(".modal").addEventListener("click",S),document.querySelector(".ingredients__list").addEventListener("click",m.onClickIngr)}(...r.drinks,_),r}catch(e){console.log(e)}}function L(e){document.querySelector(".modal__close").removeEventListener("click",L),document.querySelector(".modal").removeEventListener("click",v),document.querySelector(".backdrop").remove(),_=[],p=[]}async function S(e){if(e.target.dataset.add)return await d(e.target.dataset.favid,"modal",b)}o=a("5M7hj");var k=a("lnx82");const y=JSON.parse(localStorage.getItem(s))||[];function C(t=[]){const n=t.map((({strDrink:t,strDrinkThumb:n,idDrink:r})=>`<li class="coctail-card">\n      <img class="img" src=${n} alt=${t}/img>\n      <h3 class="coctail-card__name">${t}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${r} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${r} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(u)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");k.refCocktList.innerHTML=n}function H(){k.refCocktList.innerHTML=o.errorListFavCocktail}function M(){if(!(JSON.parse(localStorage.getItem(s))||[]).length)return H()}k.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;console.log(y);const n=y.filter((e=>e.strDrink.toLowerCase().includes(t.toLowerCase())));if(!n.length)return k.refCocktList.innerHTML=f.notFound;C(n)})),k.refCocktList.addEventListener("click",(async function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){const t=JSON.parse(localStorage.getItem(s))||[];for(let n=0;n<t.length;n++)if(t[n].idDrink===e)return t.splice(n,1),localStorage.setItem(s,JSON.stringify(t)),void M()}(e.target.dataset.favid),void e.target.parentNode.parentNode.remove();e.target.dataset.type&&await h(e.target.dataset.id)})),k.refHeaderJSMenu.addEventListener("mouseleave",(()=>{k.refHeaderFavBar.classList.remove("active")})),k.refHeaderFavLink.addEventListener("mouseenter",(()=>{k.refHeaderFavBar.classList.add("active")})),k.refHeaderMenuOpen.addEventListener("click",(()=>{k.refHeaderMobMenu.classList.toggle("open"),document.body.classList.toggle("overflow")})),k.refHeaderMenuClose.addEventListener("click",(()=>{k.refHeaderMobMenu.classList.toggle("open"),document.body.classList.toggle("overflow")})),(0,g.themeSwitcher)(),y.length?C(y):H()}();
//# sourceMappingURL=f_coctail.444c4e5a.js.map
