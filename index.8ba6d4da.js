!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequiredd77;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequiredd77=i),i.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("35hiA",(function(t,r){e(t.exports,"onClickIngr",(function(){return l})),e(t.exports,"searchIngrByName",(function(){return f}));var o=i("bpxeT"),s=i("2TvXO"),a=i("8bKXr"),c=i("i24Cx"),u=i("fi488");function l(e){return d.apply(this,arguments)}function d(){return(d=n(o)(n(s).mark((function e(t){var r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.dataset.name,e.next=3,f(r);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=n(o)(n(s).mark((function e(t){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getIngrByName)(t);case 2:p(e.sent.data.ingredients[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){var t=JSON.parse(localStorage.getItem(u.FAV_INGREDIENTS))||[],r=e.strIngredient,o=e.strDescription,i=e.strAlcohol,s=e.strABV,c=e.strType,l=t.find((function(e){return e.strIngredient===r}))?"Remove from favorite":"Add to favorite",d='<div class="backdrop--ingredient" >\n  <div class="modal--ingredient">\n    <button type="button" aria-label="Close button" class="modal__close js_modal-ingr">\n      <svg class="modal__icon" width="24" height="24">\n        <use href="'.concat(n(a),'#icon-close-burger"></use>\n      </svg>\n    </button>\n    <h2 class="ingredient">').concat(r,'</h2>\n    <h3 class="ingredient__sort">').concat(c||"no info",'</h3>\n    <div class="line"></div>\n    <p class="ingredient__description">\n      ').concat(o||"sorry, but we not information about this ingredient...",'\n    </p>\n    <ul class="ingredient__list">\n      <li class="ingredient__items">✶ Alcohol: ').concat(i,'</li>\n      <li class="ingredient__items">✶ Alcohol by volume: ').concat(s||"no information",'</li>\n    </ul>\n    <button\n      type="button"\n      class="button js-mod-ingr-add modal__button--favorite--ingredients"\n      aria-label="').concat(l,'" data-name="').concat(r,'"\n    >\n      ').concat(l,"\n    </button>\n  </div>\n</div>");document.body.insertAdjacentHTML("beforeend",d),document.querySelector(".js_modal-ingr").addEventListener("click",v),document.querySelector(".js-mod-ingr-add").addEventListener("click",m)}function v(){document.querySelector(".js_modal-ingr").removeEventListener("click",v),document.querySelector(".js-mod-ingr-add").removeEventListener("click",m),document.querySelector(".backdrop--ingredient").remove()}function m(e){(0,u.addBtnFavIngr)(e.target.dataset.name)}})),i.register("8bKXr",(function(e,n){e.exports=i("aNJCr").getBundleURL("1zkQe")+i("iE7OH").resolve("JQ8i3")})),i.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),i.register("fi488",(function(t,r){e(t.exports,"FAV_INGREDIENTS",(function(){return c})),e(t.exports,"addBtnFavIngr",(function(){return u}));var o=i("bpxeT"),s=i("2TvXO"),a=i("i24Cx"),c="favourites_ingredients";function u(e){return l.apply(this,arguments)}function l(){return(l=n(o)(n(s).mark((function e(t){var r,o,i,u,l,g,p,v,m,h;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.getIngrByName)(t);case 3:r=e.sent.data,o=r.ingredients[0],i=o.strIngredient,u=o.strDescription,l=o.strAlcohol,g=o.strABV,p=o.strType,v=JSON.parse(localStorage.getItem(c))||[],m={strIngredient:i,strDescription:u,strAlcohol:l,strABV:g,strType:p},h=0;case 8:if(!(h<v.length)){e.next=17;break}if(v[h].strIngredient!==i){e.next=14;break}return v.splice(h,1),localStorage.setItem(c,JSON.stringify(v)),f(),e.abrupt("return");case 14:h++,e.next=8;break;case 17:d(),v.push(m),localStorage.setItem(c,JSON.stringify(v)),console.log(r.ingredients[0]),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}function d(){document.querySelector(".js-mod-ingr-add").textContent="Remove from favorite"}function f(){document.querySelector(".js-mod-ingr-add").textContent="Add to favorite"}})),i("iE7OH").register(JSON.parse('{"1zkQe":"index.8ba6d4da.js","JQ8i3":"sprite.86d7718d.svg"}'))}();
//# sourceMappingURL=index.8ba6d4da.js.map