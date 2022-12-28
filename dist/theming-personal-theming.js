/*! For license information please see theming-personal-theming.js.LICENSE.txt */
!function(){"use strict";var e,n={2274:function(e,n,r){var a=r(20144),o=r(79753),i=r(79954),c=r(4820),s=r(20571),u=r.n(s),l=r(13299),d=r.n(l),g=r(80419),p=r(82675),m=r(20296),h=r.n(m),f=r(69867),A=r.n(f),b=r(15168),v=r.n(b),k=r(1082),C=r.n(k),_=(r(97248),r(26932)),y=r(45994);function w(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){w(o,r,a,i,c,"next",e)}function c(e){w(o,r,a,i,c,"throw",e)}i(void 0)}))}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=(0,i.j)("theming","backgroundImage"),I=(0,i.j)("theming","shippedBackgrounds"),B=(0,i.j)("theming","themingDefaultBackground"),D=(0,i.j)("theming","defaultShippedBackground"),j=function(e){return(0,o.generateFilePath)("theming","","img/background/")+e},E=(0,_.fn)(t("theming","Select a background from your files")).setMultiSelect(!1).setModal(!0).setType(1).setMimeTypeFilter(["image/png","image/gif","image/jpeg","image/svg+xml","image/svg"]).build(),P={name:"BackgroundSettings",directives:{Tooltip:v()},components:{Check:g.default,Close:p.default,NcColorPicker:A()},data:function(){return{loading:!1,Theming:(0,i.j)("theming","data",{}),backgroundImage:S}},computed:{shippedBackgrounds:function(){var e=this;return Object.keys(I).map((function(e){return{name:e,url:j(e),preview:j("preview/"+e),details:I[e]}})).filter((function(t){return!(!e.isGlobalBackgroundDeleted&&!e.isGlobalBackgroundDefault)||t.name!==D}))},isGlobalBackgroundDefault:function(){return!!B},isGlobalBackgroundDeleted:function(){return"backgroundColor"===B}},methods:{invertTextColor:function(e){return this.calculateLuma(e)>.6},calculateLuma:function(e){var t,n,r=(t=this.hexToRGB(e),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return(.2126*r[0]+.7152*r[1]+.0722*r[2])/255},hexToRGB:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null},update:function(e){var t=this;return x(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.backgroundImage=e.backgroundImage,t.Theming.color=e.backgroundColor,t.$emit("update:background"),t.loading=!1;case 4:case"end":return n.stop()}}),n)})))()},setDefault:function(){var e=this;return x(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading="default",t.next=3,c.default.post((0,o.generateUrl)("/apps/theming/background/default"));case 3:n=t.sent,e.update(n.data);case 5:case"end":return t.stop()}}),t)})))()},setShipped:function(e){var t=this;return x(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=e,n.next=3,c.default.post((0,o.generateUrl)("/apps/theming/background/shipped"),{value:e});case 3:r=n.sent,t.update(r.data);case 5:case"end":return n.stop()}}),n)})))()},setFile:function(e){var t=arguments,n=this;return x(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.length>1&&void 0!==t[1]?t[1]:null,n.loading="custom",r.next=4,c.default.post((0,o.generateUrl)("/apps/theming/background/custom"),{value:e,color:a});case 4:i=r.sent,n.update(i.data);case 6:case"end":return r.stop()}}),r)})))()},removeBackground:function(){var e=this;return x(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading="remove",t.next=3,c.default.delete((0,o.generateUrl)("/apps/theming/background/custom"));case 3:n=t.sent,e.update(n.data);case 5:case"end":return t.stop()}}),t)})))()},pickColor:function(e){var t=this;return x(regeneratorRuntime.mark((function n(){var r,a,i,s,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading="color",s=(null==e||null===(r=e.target)||void 0===r||null===(a=r.dataset)||void 0===a?void 0:a.color)||(null===(i=t.Theming)||void 0===i?void 0:i.color)||"#0082c9",n.next=4,c.default.post((0,o.generateUrl)("/apps/theming/background/color"),{color:s});case 4:u=n.sent,t.update(u.data);case 6:case"end":return n.stop()}}),n)})))()},debouncePickColor:h()((function(){this.pickColor.apply(this,arguments)}),200),pickFile:function(){var e=this;return x(regeneratorRuntime.mark((function t(){var n,r,a,i,s,u,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.pick();case 2:return n=t.sent,e.loading="custom",r=null,a=null,t.prev=6,s=(0,o.generateRemoteUrl)("dav/files/"+(0,y.ts)().uid+n),t.next=10,c.default.get(s,{responseType:"blob"});case 10:return r=t.sent,u=URL.createObjectURL(r.data),t.next=14,e.getColorPaletteFromBlob(u);case 14:l=t.sent,a=null==l||null===(i=l.DarkVibrant)||void 0===i?void 0:i.hex,e.setFile(n,a),console.debug("Extracted colour",a,"from custom image",n,l),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(6),e.setFile(n),console.error("Unable to extract colour from custom image",{error:t.t0,path:n,response:r,color:a});case 24:case"end":return t.stop()}}),t,null,[[6,20]])})))()},getColorPaletteFromBlob:function(e){return new Promise((function(t,n){new(C())(e).getPalette((function(e,r){e&&n(e),t(r)}))}))}}},O=P,R=r(93379),U=r.n(R),G=r(7795),Z=r.n(G),F=r(90569),q=r.n(F),L=r(3565),N=r.n(L),M=r(19216),$=r.n(M),z=r(44589),W=r.n(z),K=r(19877),Y={};Y.styleTagTransform=W(),Y.setAttributes=N(),Y.insert=q().bind(null,"head"),Y.domAPI=Z(),Y.insertStyleElement=$(),U()(K.Z,Y),K.Z&&K.Z.locals&&K.Z.locals;var H=r(51900),V=(0,H.Z)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"background-selector",attrs:{"data-user-theming-background-settings":""}},[t("button",{staticClass:"background background__filepicker",class:{"icon-loading":"custom"===e.loading,"background--active":"custom"===e.backgroundImage},attrs:{"data-color-bright":e.invertTextColor(e.Theming.color),"data-user-theming-background-custom":"",tabindex:"0"},on:{click:e.pickFile}},[e._v("\n\t\t"+e._s(e.t("theming","Custom background"))+"\n\t\t"),t("Check",{attrs:{size:44}})],1),e._v(" "),t("button",{staticClass:"background background__default",class:{"icon-loading":"default"===e.loading,"background--active":"default"===e.backgroundImage},style:{"--border-color":e.Theming.defaultColor},attrs:{"data-color-bright":e.invertTextColor(e.Theming.defaultColor),"data-user-theming-background-default":"",tabindex:"0"},on:{click:e.setDefault}},[e._v("\n\t\t"+e._s(e.t("theming","Default background"))+"\n\t\t"),t("Check",{attrs:{size:44}})],1),e._v(" "),t("NcColorPicker",{on:{input:e.debouncePickColor},model:{value:e.Theming.color,callback:function(t){e.$set(e.Theming,"color",t)},expression:"Theming.color"}},[t("button",{staticClass:"background background__color",style:{backgroundColor:e.Theming.color,"--border-color":e.Theming.color},attrs:{"data-color":e.Theming.color,"data-color-bright":e.invertTextColor(e.Theming.color),"data-user-theming-background-color":"",tabindex:"0"}},[e._v("\n\t\t\t"+e._s(e.t("theming","Change color"))+"\n\t\t")])]),e._v(" "),e._l(e.shippedBackgrounds,(function(n){return t("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.details.attribution,expression:"shippedBackground.details.attribution"}],key:n.name,staticClass:"background background__shipped",class:{"icon-loading":e.loading===n.name,"background--active":e.backgroundImage===n.name},style:{backgroundImage:"url("+n.preview+")","--border-color":n.details.primary_color},attrs:{"data-color-bright":"dark"===n.details.theming,"data-user-theming-background-shipped":n.name,tabindex:"0"},on:{click:function(t){return e.setShipped(n.name)}}},[t("Check",{attrs:{size:44}})],1)})),e._v(" "),t("button",{staticClass:"background background__delete",attrs:{"data-user-theming-background-clear":"",tabindex:"0"},on:{click:e.removeBackground}},[e._v("\n\t\t"+e._s(e.t("theming","Remove background"))+"\n\t\t"),t("Close",{attrs:{size:32}})],1)],2)}),[],!1,null,"35d0c635",null).exports,Q={name:"ItemPreview",components:{NcCheckboxRadioSwitch:u()},props:{enforced:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},theme:{type:Object,required:!0},type:{type:String,default:""},unique:{type:Boolean,default:!1}},computed:{switchType:function(){return this.unique?"switch":"radio"},name:function(){return this.unique?null:this.type},img:function(){return(0,o.generateFilePath)("theming","img",this.theme.id+".jpg")},checked:{get:function(){return this.selected},set:function(e){console.debug("Changed theme",this.theme.id,e),this.unique?this.$emit("change",{enabled:!0===e,id:this.theme.id}):this.$emit("change",{enabled:!0,id:this.theme.id})}}},methods:{onToggle:function(){"radio"!==this.switchType?this.checked=!this.checked:this.checked=!0}}},J=r(71473),X={};X.styleTagTransform=W(),X.setAttributes=N(),X.insert=q().bind(null,"head"),X.domAPI=Z(),X.insertStyleElement=$(),U()(J.Z,X),J.Z&&J.Z.locals&&J.Z.locals;var ee=(0,H.Z)(Q,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"theming__preview",class:"theming__preview--"+e.theme.id},[t("div",{staticClass:"theming__preview-image",style:{backgroundImage:"url("+e.img+")"},on:{click:e.onToggle}}),e._v(" "),t("div",{staticClass:"theming__preview-description"},[t("h3",[e._v(e._s(e.theme.title))]),e._v(" "),t("p",[e._v(e._s(e.theme.description))]),e._v(" "),e.enforced?t("span",{staticClass:"theming__preview-warning",attrs:{role:"note"}},[e._v("\n\t\t\t"+e._s(e.t("theming","Theme selection is enforced"))+"\n\t\t")]):e._e(),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"theming__preview-toggle",attrs:{checked:e.checked,disabled:e.enforced,name:e.name,type:e.switchType},on:{"update:checked":function(t){e.checked=t}}},[e._v("\n\t\t\t"+e._s(e.theme.enableLabel)+"\n\t\t")])],1)])}),[],!1,null,"37ca8ab2",null).exports;function te(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){te(o,r,a,i,c,"next",e)}function c(e){te(o,r,a,i,c,"throw",e)}i(void 0)}))}}function re(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=(0,i.j)("theming","themes",[]),ie=(0,i.j)("theming","enforceTheme",""),ce=(0,i.j)("theming","shortcutsDisabled",!1),se=(0,i.j)("theming","isUserThemingDisabled");console.debug("Available themes",oe);var ue={name:"UserThemes",components:{ItemPreview:ee,NcCheckboxRadioSwitch:u(),NcSettingsSection:d(),BackgroundSettings:V},data:function(){return{availableThemes:oe,enforceTheme:ie,shortcutsDisabled:ce,isUserThemingDisabled:se}},computed:{themes:function(){return this.availableThemes.filter((function(e){return 1===e.type}))},fonts:function(){return this.availableThemes.filter((function(e){return 2===e.type}))},selectedTheme:function(){return this.themes.find((function(e){return!0===e.enabled}))||this.themes[0]},description:function(){return t("theming","Universal access is very important to us. We follow web standards and check to make everything usable also without mouse, and assistive software such as screenreaders. We aim to be compliant with the {guidelines}Web Content Accessibility Guidelines{linkend} 2.1 on AA level, with the high contrast theme even on AAA level.").replace("{guidelines}",this.guidelinesLink).replace("{linkend}","</a>")},guidelinesLink:function(){return'<a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noreferrer nofollow">'},descriptionDetail:function(){return t("theming","If you find any issues, do not hesitate to report them on {issuetracker}our issue tracker{linkend}. And if you want to get involved, come join {designteam}our design team{linkend}!").replace("{issuetracker}",this.issuetrackerLink).replace("{designteam}",this.designteamLink).replace(/\{linkend\}/g,"</a>")},issuetrackerLink:function(){return'<a target="_blank" href="https://github.com/nextcloud/server/issues/" rel="noreferrer nofollow">'},designteamLink:function(){return'<a target="_blank" href="https://nextcloud.com/design" rel="noreferrer nofollow">'}},watch:{shortcutsDisabled:function(e){this.changeShortcutsDisabled(e)}},methods:{refreshGlobalStyles:function(){re(document.head.querySelectorAll("link.theme")).forEach((function(e){var t=new URL(e.href);t.searchParams.set("v",Date.now());var n=e.cloneNode();n.href=t.toString(),n.onload=function(){return e.remove()},document.head.append(n)}))},updateBackground:function(e){this.background="custom"===e.type||"default"===e.type?e.type:e.value,this.refreshGlobalStyles()},changeTheme:function(e){var t=e.enabled,n=e.id;this.themes.forEach((function(e){e.id===n&&t?e.enabled=!0:e.enabled=!1})),this.updateBodyAttributes(),this.selectItem(t,n)},changeFont:function(e){var t=e.enabled,n=e.id;this.fonts.forEach((function(e){e.id===n&&t?e.enabled=!0:e.enabled=!1})),this.updateBodyAttributes(),this.selectItem(t,n)},changeShortcutsDisabled:function(e){return ne(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,(0,c.default)({url:(0,o.generateOcsUrl)("apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"theming",configKey:"shortcuts_disabled"}),data:{configValue:"yes"},method:"POST"});case 3:t.next=7;break;case 5:return t.next=7,(0,c.default)({url:(0,o.generateOcsUrl)("apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"theming",configKey:"shortcuts_disabled"}),method:"DELETE"});case 7:case"end":return t.stop()}}),t)})))()},updateBodyAttributes:function(){var e=this.themes.filter((function(e){return!0===e.enabled})).map((function(e){return e.id})),t=this.fonts.filter((function(e){return!0===e.enabled})).map((function(e){return e.id}));this.themes.forEach((function(e){document.body.toggleAttribute("data-theme-".concat(e.id),e.enabled)})),this.fonts.forEach((function(e){document.body.toggleAttribute("data-theme-".concat(e.id),e.enabled)})),document.body.setAttribute("data-themes",[].concat(re(e),re(t)).join(","))},selectItem:function(e,n){return ne(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!e){r.next=6;break}return r.next=4,(0,c.default)({url:(0,o.generateOcsUrl)("apps/theming/api/v1/theme/{themeId}/enable",{themeId:n}),method:"PUT"});case 4:r.next=8;break;case 6:return r.next=8,(0,c.default)({url:(0,o.generateOcsUrl)("apps/theming/api/v1/theme/{themeId}",{themeId:n}),method:"DELETE"});case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.error(r.t0,r.t0.response),OC.Notification.showTemporary(t("theming",r.t0.response.data.ocs.meta.message+". Unable to apply the setting."));case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},le=r(10959),de={};de.styleTagTransform=W(),de.setAttributes=N(),de.insert=q().bind(null,"head"),de.domAPI=Z(),de.insertStyleElement=$(),U()(le.Z,de),le.Z&&le.Z.locals&&le.Z.locals;var ge=(0,H.Z)(ue,(function(){var e=this,t=e._self._c;return t("section",[t("NcSettingsSection",{staticClass:"theming",attrs:{title:e.t("theming","Appearance and accessibility"),"limit-width":!1}},[t("p",{domProps:{innerHTML:e._s(e.description)}}),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.descriptionDetail)}}),e._v(" "),t("div",{staticClass:"theming__preview-list"},e._l(e.themes,(function(n){return t("ItemPreview",{key:n.id,attrs:{enforced:n.id===e.enforceTheme,selected:e.selectedTheme.id===n.id,theme:n,unique:1===e.themes.length,type:"theme"},on:{change:e.changeTheme}})})),1),e._v(" "),t("div",{staticClass:"theming__preview-list"},e._l(e.fonts,(function(n){return t("ItemPreview",{key:n.id,attrs:{selected:n.enabled,theme:n,unique:1===e.fonts.length,type:"font"},on:{change:e.changeFont}})})),1)]),e._v(" "),t("NcSettingsSection",{attrs:{title:e.t("theming","Keyboard shortcuts")}},[t("p",[e._v(e._s(e.t("theming","In some cases keyboard shortcuts can interfere with accessibility tools. In order to allow focusing on your tool correctly you can disable all keyboard shortcuts here. This will also disable all available shortcuts in apps.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"theming__preview-toggle",attrs:{checked:e.shortcutsDisabled,name:"shortcuts_disabled",type:"switch"},on:{"update:checked":function(t){e.shortcutsDisabled=t},change:e.changeShortcutsDisabled}},[e._v("\n\t\t\t"+e._s(e.t("theming","Disable all keyboard shortcuts"))+"\n\t\t")])],1),e._v(" "),t("NcSettingsSection",{staticClass:"background",attrs:{title:e.t("theming","Background"),"data-user-theming-background-disabled":""}},[e.isUserThemingDisabled?[t("p",[e._v(e._s(e.t("theming","Customization has been disabled by your administrator")))])]:[t("p",[e._v(e._s(e.t("theming","Set a custom background")))]),e._v(" "),t("BackgroundSettings",{staticClass:"background__grid",on:{"update:background":e.refreshGlobalStyles}})]],2)],1)}),[],!1,null,"39686eeb",null).exports;function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}a.ZP.prototype.OC=OC,a.ZP.prototype.t=t;var me=new(a.ZP.extend(ge));me.$mount("#theming"),me.$on("update:background",(function(){var e;(e=document.head.querySelectorAll("link.theme"),function(e){if(Array.isArray(e))return pe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){var t=new URL(e.href);t.searchParams.set("v",Date.now());var n=e.cloneNode();n.href=t.toString(),n.onload=function(){return e.remove()},document.head.append(n)}))}))},10959:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,".theming p[data-v-39686eeb]{max-width:800px}.theming[data-v-39686eeb] a{font-weight:bold}.theming[data-v-39686eeb] a:hover,.theming[data-v-39686eeb] a:focus{text-decoration:underline}.theming__preview-list[data-v-39686eeb]{--gap: 30px;display:grid;margin-top:var(--gap);column-gap:var(--gap);row-gap:var(--gap);grid-template-columns:1fr 1fr}.background__grid[data-v-39686eeb]{margin-top:30px}@media(max-width: 1440px){.theming__preview-list[data-v-39686eeb]{display:flex;flex-direction:column}}","",{version:3,sources:["webpack://./apps/theming/src/UserThemes.vue"],names:[],mappings:"AAGC,4BACC,eAAA,CAID,4BACC,gBAAA,CAEA,oEAEC,yBAAA,CAIF,wCACC,WAAA,CAEA,YAAA,CACA,qBAAA,CACA,qBAAA,CACA,kBAAA,CACA,6BAAA,CAKD,mCACC,eAAA,CAIF,0BACC,wCACC,YAAA,CACA,qBAAA,CAAA",sourcesContent:["\n.theming {\n\t// Limit width of settings sections for readability\n\tp {\n\t\tmax-width: 800px;\n\t}\n\n\t// Proper highlight for links and focus feedback\n\t&::v-deep a {\n\t\tfont-weight: bold;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n\n\t&__preview-list {\n\t\t--gap: 30px;\n\n\t\tdisplay: grid;\n\t\tmargin-top: var(--gap);\n\t\tcolumn-gap: var(--gap);\n\t\trow-gap: var(--gap);\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n}\n\n.background {\n\t&__grid {\n\t\tmargin-top: 30px;\n\t}\n}\n\n@media (max-width: 1440px) {\n\t.theming__preview-list {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n"],sourceRoot:""}]),t.Z=i},19877:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,".background-selector[data-v-35d0c635]{display:flex;flex-wrap:wrap;justify-content:center}.background-selector .background[data-v-35d0c635]{overflow:hidden;width:176px;height:96px;margin:8px;text-align:center;border:2px solid var(--color-main-background);border-radius:var(--border-radius-large);background-position:center center;background-size:cover}.background-selector .background__filepicker.background--active[data-v-35d0c635]{color:#fff;background-image:var(--image-background)}.background-selector .background__default[data-v-35d0c635]{background-color:var(--color-primary-default);background-image:var(--image-background-default)}.background-selector .background__filepicker[data-v-35d0c635],.background-selector .background__default[data-v-35d0c635],.background-selector .background__color[data-v-35d0c635]{border-color:var(--color-border)}.background-selector .background__color[data-v-35d0c635]{color:var(--color-primary-text);background-color:var(--color-primary-default)}.background-selector .background__default[data-v-35d0c635],.background-selector .background__shipped[data-v-35d0c635]{color:#fff}.background-selector .background[data-color-bright][data-v-35d0c635]{color:#000}.background-selector .background--active[data-v-35d0c635],.background-selector .background[data-v-35d0c635]:hover,.background-selector .background[data-v-35d0c635]:focus{border:2px solid var(--border-color, var(--color-primary)) !important}.background-selector .background span[data-v-35d0c635]{margin:4px}.background-selector .background__filepicker span[data-v-35d0c635],.background-selector .background__default span[data-v-35d0c635],.background-selector .background__shipped span[data-v-35d0c635]{display:none}.background-selector .background--active:not(.icon-loading) span[data-v-35d0c635]{display:block !important}","",{version:3,sources:["webpack://./apps/theming/src/components/BackgroundSettings.vue"],names:[],mappings:"AACA,sCACC,YAAA,CACA,cAAA,CACA,sBAAA,CAEA,kDACC,eAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,6CAAA,CACA,wCAAA,CACA,iCAAA,CACA,qBAAA,CAGC,iFACC,UAAA,CACA,wCAAA,CAIF,2DACC,6CAAA,CACA,gDAAA,CAGD,kLACC,gCAAA,CAGD,yDACC,+BAAA,CACA,6CAAA,CAID,sHAEC,UAAA,CAID,qEACC,UAAA,CAGD,0KAIC,qEAAA,CAID,uDACC,UAAA,CAGD,mMAGC,YAAA,CAGD,kFACC,wBAAA",sourcesContent:["\n.background-selector {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\n\t.background {\n\t\toverflow: hidden;\n\t\twidth: 176px;\n\t\theight: 96px;\n\t\tmargin: 8px;\n\t\ttext-align: center;\n\t\tborder: 2px solid var(--color-main-background);\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-position: center center;\n\t\tbackground-size: cover;\n\n\t\t&__filepicker {\n\t\t\t&.background--active {\n\t\t\t\tcolor: white;\n\t\t\t\tbackground-image: var(--image-background);\n\t\t\t}\n\t\t}\n\n\t\t&__default {\n\t\t\tbackground-color: var(--color-primary-default);\n\t\t\tbackground-image: var(--image-background-default);\n\t\t}\n\n\t\t&__filepicker, &__default, &__color {\n\t\t\tborder-color: var(--color-border);\n\t\t}\n\n\t\t&__color {\n\t\t\tcolor: var(--color-primary-text);\n\t\t\tbackground-color: var(--color-primary-default);\n\t\t}\n\n\t\t// Over a background image\n\t\t&__default,\n\t\t&__shipped {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t// Text and svg icon dark on bright background\n\t\t&[data-color-bright] {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t&--active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t// Use theme color primary, see inline css variable in template\n\t\t\tborder: 2px solid var(--border-color, var(--color-primary)) !important;\n\t\t}\n\n\t\t// Icon\n\t\tspan {\n\t\t\tmargin: 4px;\n\t\t}\n\n\t\t&__filepicker span,\n\t\t&__default span,\n\t\t&__shipped span {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t&--active:not(.icon-loading) span {\n\t\t\tdisplay: block !important;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=i},71473:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,".theming__preview[data-v-37ca8ab2]{--ratio: 16;position:relative;display:flex;justify-content:flex-start;max-width:800px}.theming__preview[data-v-37ca8ab2],.theming__preview *[data-v-37ca8ab2]{user-select:none}.theming__preview-image[data-v-37ca8ab2]{flex-basis:calc(16px*var(--ratio));flex-shrink:0;height:calc(10px*var(--ratio));margin-right:var(--gap);cursor:pointer;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:top left;background-size:cover}.theming__preview-description[data-v-37ca8ab2]{display:flex;flex-direction:column}.theming__preview-description label[data-v-37ca8ab2]{padding:12px 0}.theming__preview--default[data-v-37ca8ab2]{grid-column:span 2}.theming__preview-warning[data-v-37ca8ab2]{color:var(--color-warning)}@media(max-width: 682.6666666667px){.theming__preview[data-v-37ca8ab2]{flex-direction:column}.theming__preview-image[data-v-37ca8ab2]{margin:0}}","",{version:3,sources:["webpack://./apps/theming/src/components/ItemPreview.vue"],names:[],mappings:"AACA,mCAEC,WAAA,CAEA,iBAAA,CACA,YAAA,CACA,0BAAA,CACA,eAAA,CAEA,wEAEC,gBAAA,CAGD,yCACC,kCAAA,CACA,aAAA,CACA,8BAAA,CACA,uBAAA,CACA,cAAA,CACA,kCAAA,CACA,2BAAA,CACA,4BAAA,CACA,qBAAA,CAGD,+CACC,YAAA,CACA,qBAAA,CAEA,qDACC,cAAA,CAIF,4CACC,kBAAA,CAGD,2CACC,0BAAA,CAIF,oCACC,mCACC,qBAAA,CAEA,yCACC,QAAA,CAAA",sourcesContent:["\n.theming__preview {\n\t// We make previews on 16/10 screens\n\t--ratio: 16;\n\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tmax-width: 800px;\n\n\t&,\n\t* {\n\t\tuser-select: none;\n\t}\n\n\t&-image {\n\t\tflex-basis: calc(16px * var(--ratio));\n\t\tflex-shrink: 0;\n\t\theight: calc(10px * var(--ratio));\n\t\tmargin-right: var(--gap);\n\t\tcursor: pointer;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: top left;\n\t\tbackground-size: cover;\n\t}\n\n\t&-description {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tlabel {\n\t\t\tpadding: 12px 0;\n\t\t}\n\t}\n\n\t&--default {\n\t\tgrid-column: span 2;\n\t}\n\n\t&-warning {\n\t\tcolor: var(--color-warning);\n\t}\n}\n\n@media (max-width: (1024px / 1.5)) {\n\t.theming__preview {\n\t\tflex-direction: column;\n\n\t\t&-image {\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=i}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=n,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},e=[],a.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.j=1474,function(){a.b=document.baseURI||self.location.href;var e={1474:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],c=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var l=s(a)}for(t&&t(n);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),a.nc=void 0;var o=a.O(void 0,[7874],(function(){return a(2274)}));o=a.O(o)}();
//# sourceMappingURL=theming-personal-theming.js.map?v=1c520dd8204d09f430b5