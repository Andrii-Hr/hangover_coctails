!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequiredd77;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequiredd77=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("gyjzY",(function(r,n){e(r.exports,"FAV_COCKTAIL",(function(){return s})),e(r.exports,"btnAddFav",(function(){return f}));var o=i("bpxeT"),c=i("2TvXO"),u=i("i24Cx"),a=i("8Z7TE"),s="favourites_coctails";function f(e,t){return l.apply(this,arguments)}function l(){return(l=t(o)(t(c).mark((function e(r,n){var o,i,a,f,l,h,x,b;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.getCoctById)(r);case 3:o=e.sent.data,i=o.drinks[0],a=i.strDrink,f=i.strDrinkThumb,l=i.idDrink,h=JSON.parse(localStorage.getItem(s))||[],x={strDrink:a,strDrinkThumb:f,idDrink:l},b=0;case 8:if(!(b<h.length)){e.next=17;break}if(h[b].idDrink!==l){e.next=14;break}return h.splice(b,1),localStorage.setItem(s,JSON.stringify(h)),n?g():p(l),e.abrupt("return");case 14:b++,e.next=8;break;case 17:h.push(x),localStorage.setItem(s,JSON.stringify(h)),n?v():d(l),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function d(e){document.querySelector('button[data-favid="'.concat(e,'"]')).innerHTML='Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="'.concat(t(a),'#icon-heart_full"></use>\n          </svg>')}function p(e){document.querySelector('button[data-favid="'.concat(e,'"]')).innerHTML='Add to\n          <svg class="heart-icon" width="18" height="18">\n            <use href="'.concat(t(a),'#icon-Heart"></use>\n          </svg>')}function v(){document.querySelector(".modal__button--favorite").textContent="Remove from favorite"}function g(){document.querySelector(".modal__button--favorite").textContent="Add to favorite"}})),i.register("8Z7TE",(function(e,t){e.exports=i("aNJCr").getBundleURL("2i1er")+i("iE7OH").resolve("JQ8i3")})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"2i1er":"f_coctail.160b0166.js","JQ8i3":"sprite.86d7718d.svg"}'))}();
//# sourceMappingURL=f_coctail.160b0166.js.map