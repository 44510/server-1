/*! For license information please see files_sharing-files_sharing_tab.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,i={48143:(e,t,r)=>{var i=r(20144),n=r(31352),a=r(77958),o=r(25108);var s=r(25108);var l=r(25108);r.nc=btoa((0,a.IH)()),window.OCA.Sharing||(window.OCA.Sharing={}),Object.assign(window.OCA.Sharing,{ShareSearch:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t="_state"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.results=[],o.debug("OCA.Sharing.ShareSearch initialized")}get state(){return this._state}addNewResult(e){return""!==e.displayName.trim()&&"function"==typeof e.handler?(this._state.results.push(e),!0):(o.error("Invalid search result provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ExternalLinkActions:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t="_state"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.actions=[],s.debug("OCA.Sharing.ExternalLinkActions initialized")}get state(){return this._state}registerAction(e){return OC.debug&&s.warn("OCA.Sharing.ExternalLinkActions is deprecated, use OCA.Sharing.ExternalShareAction instead"),"object"==typeof e&&e.icon&&e.name&&e.url?(this._state.actions.push(e),!0):(s.error("Invalid action provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ExternalShareActions:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t="_state"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.actions=[],l.debug("OCA.Sharing.ExternalShareActions initialized")}get state(){return this._state}registerAction(e){return"object"==typeof e&&"string"==typeof e.id&&"function"==typeof e.data&&Array.isArray(e.shareType)&&"object"==typeof e.handlers&&Object.values(e.handlers).every((e=>"function"==typeof e))?this._state.actions.findIndex((t=>t.id===e.id))>-1?(l.error(`An action with the same id ${e.id} already exists`,e),!1):(this._state.actions.push(e),!0):(l.error("Invalid action provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ShareTabSections:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t="_sections"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._sections=[]}registerSection(e){this._sections.push(e)}getSections(){return this._sections}}}),i.default.prototype.t=n.Iu,i.default.prototype.n=n.uN;let u=null;window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"sharing",name:(0,n.Iu)("files_sharing","Sharing"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-share-variant" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" /></svg>',async mount(e,t,n){const a=(await Promise.all([r.e(7874),r.e(3502)]).then(r.bind(r,27356))).default,o=i.default.extend(a);u&&u.$destroy(),u=new o({parent:n}),await u.update(t),u.$mount(e)},update(e){u.update(e)},destroy(){u.$destroy(),u=null}}))}))}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=i,e=[],a.O=(t,r,i,n)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],n=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,n<o&&(o=n));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,i,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{923:"2686613ba9d88601b889",3502:"8cce2a11a93d7db7e714",8321:"8442e3d18a58ee1f612a"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",a.l=(e,i,n,o)=>{if(t[e])t[e].push(i);else{var s,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+n),s.src=e),t[e]=[i];var f=(r,i)=>{s.onerror=s.onload=null,clearTimeout(v);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(i))),r)return r(i)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=7870,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={7870:0};a.f.j=(t,r)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=n);var o=a.p+a.u(t),s=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,i[1](s)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,o=r[0],s=r[1],l=r[2],u=0;if(o.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var c=l(a)}for(t&&t(r);u<o.length;u++)n=o[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var o=a.O(void 0,[7874],(()=>a(48143)));o=a.O(o)})();
//# sourceMappingURL=files_sharing-files_sharing_tab.js.map?v=f197d030357c4c9b7e1b