parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y0Qs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=[{id:1,question:"Во время прелюдии я быстро возбуждаюсь",points:[4,3,2,1,0]},{id:2,question:"Занятия сексом с моим партнером очень возбуждают меня",points:[4,3,2,1,0]},{id:3,question:"Когда я занимаюсь сексом со своим партнером, я испытываю оргазм",points:[4,3,2,1,0]},{id:4,question:"У меня возникают трудности с сексуальным возбуждением",points:[0,1,2,3,4]},{id:5,question:"Во время полового акта я, кажется, теряю исходный уровень сексуального возбуждения",points:[0,1,2,3,4]},{id:6,question:"Для того чтобы испытать сексуальное возбуждение, мне требуется слишком много времени",points:[0,1,2,3,4]},{id:7,question:"Мне трудно сохранять сексуальное возбуждение",points:[0,1,2,3,4]},{id:8,question:"Секс наводит на меня скуку",points:[0,1,2,3,4]},{id:9,question:"Я быстро возбуждаюсь, когда мой партнер занимается со мной оральным сексом",points:[4,3,2,1,0]},{id:10,question:"Мысли о сексе действуют на меня возбуждающе",points:[4,3,2,1,0]},{id:11,question:"Я нахожу анальный секс очень приятным",points:[4,3,2,1,0]},{id:12,question:"Когда я занимаюсь сексом со своим партнером, меня легко возбудить прикосновениями",points:[4,3,2,1,0]},{id:13,question:"Я нахожу мастурбацию сексуально стимулирующей",points:[4,3,2,1,0]},{id:14,question:"Меня очень возбуждают поцелуи",points:[4,3,2,1,0]},{id:15,question:"Я очень быстро теряю сексуальное возбуждение",points:[0,1,2,3,4]},{id:16,question:"Даже когда я нахожусь в соответствующем настроении, у меня возникают трудности с сексуальным возбуждением",points:[4,3,2,1,0]},{id:17,question:"Меня возбуждают предварительные игры",points:[4,3,2,1,0]},{id:18,question:"Когда я занимаюсь сексом, требуется слишком много времени чтобы меня возбудить",points:[0,1,2,3,4]},{id:19,question:"Когда я доставляю удовольствие своему партнеру, меня это сексуально возбуждает",points:[4,3,2,1,0]},{id:20,question:"У меня возникают трудности с сохранением сексуального возбуждения",points:[0,1,2,3,4]},{id:21,question:"Я нахожу сексуальные отношения очень возбуждающими",points:[4,3,2,1,0]},{id:22,question:"Я считаю, что к началу полового контакта мой уровень сексуального возбуждения низкий",points:[0,1,2,3,4]},{id:23,question:"Даже когда я хочу заняться сексом, у меня возникают трудности с сексуальным возбуждением",points:[0,1,2,3,4]},{id:24,question:"Когда я занимаюсь со своим партнером оральным сексом, при этом я возбуждаюсь",points:[4,3,2,1,0]},{id:25,question:"В общем, сексуальные отношения удовлетворяют меня",points:[4,3,2,1,0]}],t=i;exports.default=t;
},{}],"Dyi7":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var u in e=arguments[r])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeResultUrl=exports.getRank=exports.getBestExciters=exports.parseResultFromQuery=exports.validateResult=exports.mapIndexesToPoints=void 0;var r=e(require("./questions"));function n(t){var e=t.map(function(t){return String(t)}).join("");return window.btoa(e).replace(/=/g,"")}function u(t){return window.atob(t).split("").map(function(t){return Number(t)})}function o(t){return r.default.map(function(e,r){return e.points[t[r]]})}function s(t){return null!==t&&25===t.length&&t.every(function(t){return Number.isInteger(t)&&t>=0&&t<=4})}function i(t){var e=new URLSearchParams(t).get("hash");if(null!==e){var r=u(e);if(s(r))return r}return null}function a(e){var n=r.default.map(function(r,n){return t(t({},r),{result:e[n]})});return n.sort(function(t,e){return e.result-t.result}),n.filter(function(t){return 0!==t.points[0]}).map(function(t){return t.question})}function l(t){var e=t.reduce(function(t,e){return t+e},0);return e<=25?1:e<=50?2:e<=75?3:4}function p(t){var e=n(t);return"https://artemymagarin.github.io/result?hash="+e}exports.mapIndexesToPoints=o,exports.validateResult=s,exports.parseResultFromQuery=i,exports.getBestExciters=a,exports.getRank=l,exports.makeResultUrl=p;
},{"./questions":"Y0Qs"}],"vH7R":[function(require,module,exports) {
"use strict";var t=require("./utils.ts");function e(t){return a(t)||o(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=[];function u(t){t.hidden=!0,t.setAttribute("aria-hidden",!0)}function d(t){t.hidden=!1,t.setAttribute("aria-hidden",!1)}function l(){var t=document.getElementById("start-button");e(document.querySelectorAll(".answer-button")).forEach(function(t){return t.addEventListener("click",f)}),t.addEventListener("click",s)}function s(){var t=document.getElementById("start-screen"),e=document.getElementById("question-screen");u(t),d(e),m(1),window.mixpanel&&mixpanel.track("test:start")}function m(t){document.querySelector(".counter__current").innerText=t,e(document.querySelectorAll(".question-block")).forEach(u),d(document.querySelector('.question-block[data-index="'.concat(t,'"]')))}function f(t){var e=Number(t.target.dataset.index||t.target.parentNode.dataset.index),n=document.querySelector('[name="answer-'.concat(e,'"]:checked'));n&&(c.push(n.value),e<25?m(e+1):y(c))}function y(e){var n=e.map(function(t){return Number(t)}),r=(0,t.mapIndexesToPoints)(n);window.mixpanel&&mixpanel.track("test:finish",{result:(0,t.getRank)(r)});var o=(0,t.makeResultUrl)(r);window.location.href=o}window.addEventListener("load",l);
},{"./utils.ts":"Dyi7"}]},{},["vH7R"], null)