!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequiredd77;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequiredd77=a),a.register("gyjzY",(function(n,r){e(n.exports,"FAV_COCKTAIL",(function(){return u})),e(n.exports,"btnAddFav",(function(){return d}));var o=a("bpxeT"),c=a("2TvXO"),i=a("i24Cx"),s=a("8Z7TE"),u="favourites_coctails";function d(t,e){return l.apply(this,arguments)}function l(){return(l=t(o)(t(c).mark((function e(n,r){var o,a,s,d,l,m,b,h;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.getCoctById)(n);case 3:o=t.sent.data,a=o.drinks[0],s=a.strDrink,d=a.strDrinkThumb,l=a.idDrink,m=JSON.parse(localStorage.getItem(u))||[],b={strDrink:s,strDrinkThumb:d,idDrink:l},h=0;case 8:if(!(h<m.length)){t.next=17;break}if(m[h].idDrink!==l){t.next=14;break}return m.splice(h,1),localStorage.setItem(u,JSON.stringify(m)),r?g():p(l),t.abrupt("return");case 14:h++,t.next=8;break;case 17:m.push(b),localStorage.setItem(u,JSON.stringify(m)),r?v():f(l),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),console.log(t.t0);case 25:case"end":return t.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function f(e){document.querySelector('button[data-favid="'.concat(e,'"]')).innerHTML='Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="'.concat(t(s),'#icon-heart_full"></use>\n          </svg>')}function p(e){document.querySelector('button[data-favid="'.concat(e,'"]')).innerHTML='Add to\n          <svg class="heart-icon" width="18" height="18">\n            <use href="'.concat(t(s),'#icon-Heart"></use>\n          </svg>')}function v(){document.querySelector(".modal__button--favorite").textContent="Remove from favorite"}function g(){document.querySelector(".modal__button--favorite").textContent="Add to favorite"}})),a.register("8Z7TE",(function(t,e){t.exports=a("aNJCr").getBundleURL("2i1er")+a("iE7OH").resolve("JQ8i3")})),a.register("i3SOf",(function(n,r){e(n.exports,"searchCoctById",(function(){return g}));var o=a("bpxeT"),c=a("8nrFW"),i=a("2TvXO"),s=a("i24Cx"),u=a("cXTzy"),d=a("gyjzY"),l=a("35hiA"),f=a("8Z7TE"),p=[],v=[];function g(t){return m.apply(this,arguments)}function m(){return(m=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getCoctById)(n);case 3:return b((r=e.sent.data).drinks),h.apply(void 0,t(c)(r.drinks).concat([p])),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function b(t){for(var e=1;e<=15;e++){if(null===t[0]["strIngredient"+e])return;if(v.push(t[0]["strIngredient"+e]),null===t[0]["strMeasure"+e])return p.push(t[0]["strIngredient"+e]);p.push(t[0]["strIngredient"+e]+" "+t[0]["strMeasure"+e])}}function h(e,n){var r=JSON.parse(localStorage.getItem(d.FAV_COCKTAIL))||[],o=e.strDrink,a=e.strDrinkThumb,c=e.strInstructions,i=e.idDrink,s=r.find((function(t){return t.strDrink===o}))?"Remove from favorite":"Add to favorite",u='\n<div class="backdrop">\n  <div class="modal">\n    <button type="button" aria-label="Close button" class="modal__close" >\n      <svg class="modal__icon" width="24" height="24">\n        <use href="'.concat(t(f),'#icon-close-burger"></use>\n      </svg>\n    </button>\n    <h2 class="coctail">').concat(o,'</h2>\n    <h3 class="coctail__instruction">INSTRUCTIONS:</h3>\n    <p class="coctail__description">').concat(c,'\n    </p>\n    <img class="coctail__img" src=').concat(a," alt=").concat(o,' />\n    <h4 class="ingredients">INGREDIENTS</h4>\n    <p class="ingredients__denominator">Per coctail</p>\n    <ul class="ingredients__list">\n       ').concat(n.map((function(t,e){return'<li class="ingredients__items" data-name="'.concat(v[e],'">✶ ').concat(t,"</li>")})).join(""),'\n    </ul>\n    <button\n      type="button"\n      class="button modal__button--favorite"\n      aria-label="').concat(s,'"\n      data-add="add" data-favid=').concat(i,"\n    >\n      ").concat(s,"\n    </button>\n  </div>\n</div>");document.body.insertAdjacentHTML("beforeend",u),document.querySelector(".modal__close").addEventListener("click",_),document.querySelector(".modal").addEventListener("click",y),document.querySelector(".ingredients__list").addEventListener("click",l.onClickIngr)}function _(t){document.querySelector(".modal__close").removeEventListener("click",_),document.querySelector(".modal").removeEventListener("click",u.cardBtnListenr),document.querySelector(".backdrop").remove(),p=[],v=[]}function y(t){t.target.dataset.add&&(0,d.btnAddFav)(t.target.dataset.favid,"modal")}})),a.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return n.default(t)||r.default(t)||c.default(t)||o.default()};var n=i(a("kMC0W")),r=i(a("7AJDX")),o=i(a("8CtQK")),c=i(a("auk6i"));function i(t){return t&&t.__esModule?t:{default:t}}})),a.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),a.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),a.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("cXTzy",(function(n,r){e(n.exports,"getListCard",(function(){return l})),e(n.exports,"renderMarkup",(function(){return v})),e(n.exports,"cardBtnListenr",(function(){return g}));var o=a("bpxeT"),c=a("2TvXO"),i=a("i24Cx"),s=a("gyjzY"),u=a("i3SOf"),d=a("8Z7TE");function l(){return f.apply(this,arguments)}function f(){return(f=t(o)(t(c).mark((function e(){var n;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.getRandCoctList)();case 3:n=t.sent.data,v(p(n.drinks)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return document.body.clientWidth<=767?t.splice(0,3):document.body.clientWidth>768&&document.body.clientWidth<1279?t.splice(0,6):document.body.clientWidth>1280?t.splice(0,9):void 0}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[],r=e.map((function(e){var r=e.strDrink,o=e.strDrinkThumb,a=e.idDrink,c=n.find((function(t){return t.idDrink===a}))?' <button class="button-add_to" data-favid='.concat(a,' data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="').concat(t(d),'#icon-heart_full"></use>\n          </svg>\n        </button>'):' <button class="button-add_to" data-favid='.concat(a,' data-add="add">\n          Add to\n          <svg class="heart-icon" width="18" height="18">\n            <use href="').concat(t(d),'#icon-Heart"></use>\n          </svg>\n        </button>');return'<li class="coctail-card">\n      <img class="img" src='.concat(o," alt=").concat(r,'/img>\n      <h3 class="coctail-card__name">').concat(r,'</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=').concat(a,' data-type="learn">Learn more</button>\n        ').concat(c,"\n      </div>\n    </li>")})).join("");document.querySelector(".coctails-list").innerHTML=r}function g(t){t.target.dataset.type&&(0,u.searchCoctById)(t.target.dataset.id),t.target.dataset.add&&(0,s.btnAddFav)(t.target.dataset.favid)}})),a("iE7OH").register(JSON.parse('{"2i1er":"f_coctail.f6835ddd.js","JQ8i3":"sprite.86d7718d.svg"}'))}();
//# sourceMappingURL=f_coctail.f6835ddd.js.map