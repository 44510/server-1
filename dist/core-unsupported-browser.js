/*! For license information please see core-unsupported-browser.js.LICENSE.txt */
!function(){var n,t,e,r={92442:function(n,t,e){"use strict";var r,o=e(79753),i=e(20144),u=e(81655),s=e(31e3),a=e.n(s),c=e(77727),l=e.n(c),d=((0,u.ZI)({allowHigherVersions:!0,browsers:l()}),a()(l())),p=(0,e(62556).getBuilder)("core").clearOnLogout().persist().build(),f=e(45994),v=e(17499),b=null===(r=(0,f.ts)())?(0,v.IY)().setApp("core").build():(0,v.IY)().setApp("core").setUid(r.uid).build(),A=(e(48764).Buffer,"unsupported-browser-ignore"),w=((0,o.generateUrl)("/unsupported"),p.getItem(A),e(9944)),m=e(10861),g=e.n(m),y=e(93455),h=e.n(y),_=e(49298),C=e(48764).Buffer;function x(n,t,e,r,o,i,u){try{var s=n[i](u),a=s.value}catch(n){return void e(n)}s.done?t(a):Promise.resolve(a).then(r,o)}function O(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}b.debug("Supported browsers",{supportedBrowsers:d});var B={name:"UnsupportedBrowser",components:{Web:_.Z,NcButton:g(),NcEmptyContent:h()},data:function(){return{agents:{}}},computed:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},filteredSupportedBrowsers:function(){var n=this;return d.filter((function(t){return!!t&&(n.isMobile?n.isMobileBrowser(t):!n.isMobileBrowser(t))}))},formattedBrowsersList:function(){var n=this,t={};return this.filteredSupportedBrowsers.forEach((function(n){var e,r,o=(e=n.split(" "),r=2,function(n){if(Array.isArray(n))return n}(e)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],u=!0,s=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(n){s=!0,o=n}finally{try{u||null==e.return||e.return()}finally{if(s)throw o}}return i}}(e,r)||function(n,t){if(n){if("string"==typeof n)return O(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(n,t):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];(!t[i]||t[i]<parseFloat(u,10))&&(t[i]=parseFloat(u,10))})),Object.keys(t).map((function(e){var r,o;if(null===(r=n.agents[e])||void 0===r||!r.browser)return null;var i=t[e],u=null===(o=n.agents[e])||void 0===o?void 0:o.browser;return n.t("core","{name} version {version} and above",{name:u,version:i})})).filter((function(n){return null!==n}))}},beforeMount:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7874).then(e.t.bind(e,90614,19));case 2:r=n.sent,o=r.agents,t.agents=o;case 5:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function u(n){x(i,r,o,u,s,"next",n)}function s(n){x(i,r,o,u,s,"throw",n)}u(void 0)}))})()},methods:{t:w.translate,n:w.translatePlural,forceBrowsing:function(){p.setItem(A,!0);var n=new URLSearchParams(window.location.search);if(n.has("redirect_url")){var t=C.from(n.get("redirect_url"),"base64").toString()||"/";window.location=t}else window.location=(0,o.generateUrl)("/")},isMobileBrowser:function(n){return(n=n.toLowerCase()).includes("and_")||n.includes("android")||n.includes("ios_")||n.includes("mobile")||n.includes("_mob")||n.includes("samsung")}}},j=B,S=e(93379),P=e.n(S),k=e(7795),I=e.n(k),M=e(90569),U=e.n(M),E=e(3565),T=e.n(E),Z=e(19216),R=e.n(Z),$=e(44589),D=e.n($),F=e(94273),L={};L.styleTagTransform=D(),L.setAttributes=T(),L.insert=U().bind(null,"head"),L.domAPI=I(),L.insertStyleElement=R(),P()(F.Z,L),F.Z&&F.Z.locals&&F.Z.locals;var N=(0,e(51900).Z)(j,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content-unsupported-browser guest-box"},[e("NcEmptyContent",{scopedSlots:n._u([{key:"icon",fn:function(){return[e("Web")]},proxy:!0},{key:"action",fn:function(){return[e("div",[e("h2",[n._v("\n\t\t\t\t\t"+n._s(n.t("core","Your browser is not supported. Please upgrade to a newer version or a supported one."))+"\n\t\t\t\t")]),n._v(" "),e("NcButton",{staticClass:"content-unsupported-browser__continue",attrs:{type:"primary"},on:{click:n.forceBrowsing}},[n._v("\n\t\t\t\t\t"+n._s(n.t("core","Continue with this unsupported browser"))+"\n\t\t\t\t")])],1),n._v(" "),e("ul",{staticClass:"content-unsupported-browser__list"},[e("h3",[n._v(n._s(n.t("core","Supported versions")))]),n._v(" "),n._l(n.formattedBrowsersList,(function(t){return e("li",{key:t},[n._v("\n\t\t\t\t\t"+n._s(t)+"\n\t\t\t\t")])}))],2)]},proxy:!0}])},[n._v("\n\t\t"+n._s(n.t("core","This browser is not supported"))+"\n\t\t")])],1)}),[],!1,null,"5dfe50c8",null).exports;"true"===p.getItem(A)&&(window.location=(0,o.generateUrl)("/")),new i.ZP({el:"#unsupported-browser",name:"UnsupportedBrowserRoot",render:function(n){return n(N)}})},94273:function(n,t,e){"use strict";var r=e(87537),o=e.n(r),i=e(23645),u=e.n(i)()(o());u.push([n.id,".content-unsupported-browser[data-v-5dfe50c8]{display:flex;justify-content:center;width:400px;max-width:calc(90vw - 60px);margin:auto;padding:30px}.content-unsupported-browser .empty-content[data-v-5dfe50c8]{margin:0}.content-unsupported-browser .empty-content[data-v-5dfe50c8] .empty-content__icon{opacity:1}.content-unsupported-browser__continue[data-v-5dfe50c8]{display:block;margin:30px auto}.content-unsupported-browser__list[data-v-5dfe50c8]{margin-top:60px;margin-bottom:30px}.content-unsupported-browser__list li[data-v-5dfe50c8]{text-align:left}","",{version:3,sources:["webpack://./core/src/views/UnsupportedBrowser.vue"],names:[],mappings:"AA2KA,8CACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,2BAAA,CACA,WAAA,CACA,YARS,CAUT,6DACC,QAAA,CACA,kFACC,SAAA,CAIF,wDACC,aAAA,CACA,gBAAA,CAGD,oDACC,eAAA,CACA,kBAxBQ,CAyBR,uDACC,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$spacing: 30px;\n\n.content-unsupported-browser {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 400px;\n\tmax-width: calc(90vw - 2 * $spacing);\n\tmargin: auto;\n\tpadding: $spacing;\n\n\t.empty-content {\n\t\tmargin: 0;\n\t\t&::v-deep .empty-content__icon {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\t&__continue {\n\t\tdisplay: block;\n\t\tmargin: $spacing auto;\n\t}\n\n\t&__list {\n\t\tmargin-top: 2 * $spacing;\n\t\tmargin-bottom: $spacing;\n\t\tli {\n\t\t\ttext-align: left;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=u},72950:function(){}},o={};function i(n){var t=o[n];if(void 0!==t)return t.exports;var e=o[n]={id:n,loaded:!1,exports:{}};return r[n].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}i.m=r,i.amdD=function(){throw new Error("define cannot be used indirect")},i.amdO={},n=[],i.O=function(t,e,r,o){if(!e){var u=1/0;for(l=0;l<n.length;l++){e=n[l][0],r=n[l][1],o=n[l][2];for(var s=!0,a=0;a<e.length;a++)(!1&o||u>=o)&&Object.keys(i.O).every((function(n){return i.O[n](e[a])}))?e.splice(a--,1):(s=!1,o<u&&(u=o));if(s){n.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[e,r,o]},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,{a:t}),t},e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var u={};t=t||[null,e({}),e([]),e(e)];for(var s=2&r&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){u[t]=function(){return n[t]}}));return u.default=function(){return n},i.d(o,u),o},i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.e=function(){return Promise.resolve()},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},i.j=9315,function(){i.b=document.baseURI||self.location.href;var n={9315:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,o,u=e[0],s=e[1],a=e[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(a)var l=a(i)}for(t&&t(e);c<u.length;c++)o=u[c],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return i.O(l)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),i.nc=void 0;var u=i.O(void 0,[7874],(function(){return i(92442)}));u=i.O(u)}();
//# sourceMappingURL=core-unsupported-browser.js.map?v=9b5e2e69fd48785f2f41