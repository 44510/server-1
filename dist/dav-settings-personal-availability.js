/*! For license information please see dav-settings-personal-availability.js.LICENSE.txt */
!function(){var e,n={19271:function(e,n,a){"use strict";var r=a(20144),o=a(9944),i=a(51796),l=a(16453),c=a(26932),s=a(81063),u=a(4820),d=a(56580),p=a.n(d),A=a(79753),v=a(22200),f=p()((function(t){return u.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",s.getPatcher().patch("request",u.default),s.createClient((0,A.generateRemoteUrl)("dav/".concat(t,"/").concat((0,v.getCurrentUser)().uid)))})),b=(0,a(17499).IY)().setApp("dav").detectUser().build(),m=a(7582);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function w(t,e,n,a,r,o,i){try{var l=t[o](i),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(a,r)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){w(o,a,r,i,l,"next",t)}function l(t){w(o,a,r,i,l,"throw",t)}i(void 0)}))}}function O(){return S.apply(this,arguments)}function S(){return(S=k(regeneratorRuntime.mark((function t(){var e,n,a,r,o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=f("calendars"),t.next=3,r.customRequest("inbox",{method:"PROPFIND",data:'<?xml version="1.0"?>\n\t\t\t<x0:propfind xmlns:x0="DAV:">\n\t\t\t  <x0:prop>\n\t\t\t\t<x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav"/>\n\t\t\t  </x0:prop>\n\t\t\t</x0:propfind>'});case 3:return o=t.sent,t.next=6,(0,m.parseXML)(o.data);case 6:if(l=t.sent){t.next=9;break}return t.abrupt("return",void 0);case 9:if(c=null==l||null===(e=l.multistatus)||void 0===e||null===(n=e.response[0])||void 0===n||null===(a=n.propstat)||void 0===a?void 0:a.prop["calendar-availability"]){t.next=12;break}return t.abrupt("return",void 0);case 12:return t.abrupt("return",(0,i.Xg)(c));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t,e){return P.apply(this,arguments)}function P(){return(P=k(regeneratorRuntime.mark((function t(e,n){var a,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=C(Object.keys(e).flatMap((function(t){return e[t].map((function(e){return x(x({},e),{},{day:t})}))}))),r=(0,i.ST)(a,n),b.debug("New availability ical created",{vavailability:r}),o=f("calendars"),t.next=6,o.customRequest("inbox",{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<x0:propertyupdate xmlns:x0="DAV:">\n\t\t\t  <x0:set>\n\t\t\t\t<x0:prop>\n\t\t\t\t  <x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav">'.concat(r,"</x1:calendar-availability>\n\t\t\t\t</x0:prop>\n\t\t\t  </x0:set>\n\t\t\t</x0:propertyupdate>")});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e,n,a,r,o,i){try{var l=t[o](i),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(a,r)}function D(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){j(o,a,r,i,l,"next",t)}function l(t){j(o,a,r,i,l,"throw",t)}i(void 0)}))}}function R(){return _.apply(this,arguments)}function _(){return(_=D(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.default.post((0,A.generateOcsUrl)("/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"dav",configKey:"user_status_automation"}),{configValue:"yes"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return $.apply(this,arguments)}function $(){return($=D(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.default.delete((0,A.generateOcsUrl)("/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"dav",configKey:"user_status_automation"}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var T=a(55586),z=a.n(T),U=a(10861),I=a.n(U),N=a(20571),M=a.n(N),F=a(13299),q=a.n(F),Z=a(31144),W=a.n(Z);function Y(t,e,n,a,r,o,i){try{var l=t[o](i),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(a,r)}function H(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){Y(o,a,r,i,l,"next",t)}function l(t){Y(o,a,r,i,l,"throw",t)}i(void 0)}))}}var K={name:"Availability",components:{NcButton:I(),NcCheckboxRadioSwitch:M(),CalendarAvailability:i.Dx,NcSettingsSection:q(),NcTimezonePicker:W()},data:function(){var t=z().determine();return{loading:!0,saving:!1,timezone:t?t.name():"UTC",slots:{MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]},automated:"yes"===(0,l.loadState)("dav","user_status_automation")}},mounted:function(){var e=this;return H(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O();case 3:(a=n.sent)?(r=a.slots,o=a.timezoneId,e.slots=r,o&&(e.timezone=o),console.info("availability loaded",e.slots,e.timezoneId)):(console.info("no availability is set"),e.slots={MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]}),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("could not load existing availability",n.t0),(0,c.x2)(t("dav","Failed to load availability"));case 11:return n.prev=11,e.loading=!1,n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})))()},methods:{save:function(){var e=this;return H(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.saving=!0,n.next=4,B(e.slots,e.timezone);case 4:if(!e.automated){n.next=9;break}return n.next=7,R();case 7:n.next=11;break;case 9:return n.next=11,E();case 11:(0,c.s$)(t("dav","Saved availability")),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.error("could not save availability",n.t0),(0,c.x2)(t("dav","Failed to save availability"));case 18:return n.prev=18,e.saving=!1,n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,14,18,21]])})))()}}},X=a(93379),V=a.n(X),L=a(7795),G=a.n(L),Q=a(90569),J=a.n(Q),tt=a(3565),et=a.n(tt),nt=a(19216),at=a.n(nt),rt=a(44589),ot=a.n(rt),it=a(69110),lt={};lt.styleTagTransform=ot(),lt.setAttributes=et(),lt.insert=J().bind(null,"head"),lt.domAPI=G(),lt.insertStyleElement=at(),V()(it.Z,lt),it.Z&&it.Z.locals&&it.Z.locals;var ct=(0,a(51900).Z)(K,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.$t("dav","Availability"),description:t.$t("dav","If you configure your working hours, other users will see when you are out of office when they book a meeting.")}},[e("div",{staticClass:"time-zone"},[e("strong",[t._v("\n\t\t\t"+t._s(t.$t("dav","Time zone:"))+"\n\t\t")]),t._v(" "),e("span",{staticClass:"time-zone-text"},[e("NcTimezonePicker",{model:{value:t.timezone,callback:function(e){t.timezone=e},expression:"timezone"}})],1)]),t._v(" "),e("CalendarAvailability",{attrs:{slots:t.slots,loading:t.loading,"l10n-to":t.$t("dav","to"),"l10n-delete-slot":t.$t("dav","Delete slot"),"l10n-empty-day":t.$t("dav","No working hours set"),"l10n-add-slot":t.$t("dav","Add slot"),"l10n-monday":t.$t("dav","Monday"),"l10n-tuesday":t.$t("dav","Tuesday"),"l10n-wednesday":t.$t("dav","Wednesday"),"l10n-thursday":t.$t("dav","Thursday"),"l10n-friday":t.$t("dav","Friday"),"l10n-saturday":t.$t("dav","Saturday"),"l10n-sunday":t.$t("dav","Sunday")},on:{"update:slots":function(e){t.slots=e}}}),t._v(" "),e("NcCheckboxRadioSwitch",{attrs:{checked:t.automated},on:{"update:checked":function(e){t.automated=e}}},[t._v("\n\t\t"+t._s(t.$t("dav",'Automatically set user status to "Do not disturb" outside of availability to mute all notifications.'))+"\n\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.loading||t.saving,type:"primary"},on:{click:t.save}},[t._v("\n\t\t"+t._s(t.$t("dav","Save"))+"\n\t")])],1)}),[],!1,null,"e90bacba",null).exports;r.ZP.prototype.$t=o.translate,new(r.ZP.extend(ct))({}).$mount("#settings-personal-availability")},69110:function(t,e,n){"use strict";var a=n(87537),r=n.n(a),o=n(23645),i=n.n(o)()(r());i.push([t.id,".availability-day[data-v-e90bacba]{padding:0 10px 0 10px;position:absolute}.availability-slots[data-v-e90bacba]{display:flex;white-space:nowrap}.availability-slot[data-v-e90bacba]{display:flex;flex-direction:row;align-items:center}.availability-slot-group[data-v-e90bacba]{display:flex;flex-direction:column}[data-v-e90bacba] .mx-input-wrapper{width:85px}[data-v-e90bacba] .mx-datepicker{width:97px}[data-v-e90bacba] .multiselect{border:1px solid var(--color-border-dark);width:120px}.time-zone[data-v-e90bacba]{padding:32px 12px 12px 0}.grid-table[data-v-e90bacba]{display:grid;margin-bottom:32px;grid-column-gap:24px;grid-row-gap:6px;grid-template-columns:min-content min-content min-content}.button[data-v-e90bacba]{align-self:flex-end}.label-weekday[data-v-e90bacba]{position:relative;display:inline-flex;padding-top:4px}.delete-slot[data-v-e90bacba]{background-color:rgba(0,0,0,0);border:none;padding-bottom:12px;opacity:.5}.delete-slot[data-v-e90bacba]:hover{opacity:1}.add-another[data-v-e90bacba]{background-color:rgba(0,0,0,0);border:none;opacity:.5;display:inline-flex;padding:0;margin:0;margin-bottom:3px}.add-another[data-v-e90bacba]:hover{opacity:1}.to-text[data-v-e90bacba]{padding-right:12px}.time-zone-text[data-v-e90bacba]{padding-left:22px}.empty-content[data-v-e90bacba]{color:var(--color-text-lighter);margin-top:4px}","",{version:3,sources:["webpack://./apps/dav/src/views/Availability.vue"],names:[],mappings:"AACA,mCACC,qBAAA,CACA,iBAAA,CAED,qCACC,YAAA,CACA,kBAAA,CAED,oCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAED,0CACC,YAAA,CACA,qBAAA,CAED,oCACC,UAAA,CAED,iCACC,UAAA,CAED,+BACC,yCAAA,CACA,WAAA,CAED,4BACC,wBAAA,CAED,6BACC,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,yDAAA,CAED,yBACC,mBAAA,CAED,gCACC,iBAAA,CACA,mBAAA,CACA,eAAA,CAED,8BACC,8BAAA,CACA,WAAA,CACA,mBAAA,CACA,UAAA,CACA,oCACC,SAAA,CAIF,8BACC,8BAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,SAAA,CACA,QAAA,CACA,iBAAA,CAEA,oCACC,SAAA,CAGF,0BACC,kBAAA,CAED,iCACC,iBAAA,CAED,gCACC,+BAAA,CACA,cAAA",sourcesContent:["\n.availability-day {\n\tpadding: 0 10px 0 10px;\n\tposition: absolute;\n}\n.availability-slots {\n\tdisplay: flex;\n\twhite-space: nowrap;\n}\n.availability-slot {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n}\n.availability-slot-group {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n::v-deep .mx-input-wrapper {\n\twidth: 85px;\n}\n::v-deep .mx-datepicker {\n\twidth: 97px;\n}\n::v-deep .multiselect {\n\tborder: 1px solid var(--color-border-dark);\n\twidth: 120px;\n}\n.time-zone {\n\tpadding: 32px 12px 12px 0;\n}\n.grid-table {\n\tdisplay: grid;\n\tmargin-bottom: 32px;\n\tgrid-column-gap: 24px;\n\tgrid-row-gap: 6px;\n\tgrid-template-columns: min-content min-content min-content;\n}\n.button {\n\talign-self: flex-end;\n}\n.label-weekday {\n\tposition: relative;\n\tdisplay: inline-flex;\n\tpadding-top: 4px;\n}\n.delete-slot {\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding-bottom: 12px;\n\topacity: .5;\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n\n.add-another {\n\tbackground-color: transparent;\n\tborder: none;\n\topacity: .5;\n\tdisplay: inline-flex;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-bottom: 3px;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n.to-text {\n\tpadding-right: 12px;\n}\n.time-zone-text{\n\tpadding-left: 22px;\n}\n.empty-content {\n\tcolor: var(--color-text-lighter);\n\tmargin-top: 4px;\n}\n\n"],sourceRoot:""}]),e.Z=i},69862:function(){},40964:function(){}},a={};function r(t){var e=a[t];if(void 0!==e)return e.exports;var o=a[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=n,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=function(t,n,a,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=3347,function(){r.b=document.baseURI||self.location.href;var t={3347:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var u=c(r)}for(e&&e(n);s<i.length;s++)o=i[s],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.nc=void 0;var o=r.O(void 0,[7874],(function(){return r(19271)}));o=r.O(o)}();
//# sourceMappingURL=dav-settings-personal-availability.js.map?v=a89d8d8f4b3cfb4b1066