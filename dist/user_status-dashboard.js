/*! For license information please see user_status-dashboard.js.LICENSE.txt */
!function(){var s,e={87109:function(s,e,n){"use strict";var r=n(20144),a=n(22200),o=n(9944),u=n(66164),i=n(16453),j=n(75925),c=n.n(j),l=n(93455),d=n.n(l),m=n(80351),f=n.n(m),p={name:"Dashboard",components:{NcAvatar:c(),DashboardWidget:u.Z,DashboardWidgetItem:u.v,NcEmptyContent:d()},data:function(){return{statuses:[],loading:!0}},computed:{items:function(){var s=this;return this.statuses.map((function(e){var n=e.icon||"",r=e.message||"";""===r&&("away"===e.status&&(r=t("user_status","Away")),"dnd"===e.status&&(r=t("user_status","Do not disturb")));var a,o=""!==e.icon?"".concat(n," ").concat(r):r;return a=null===e.icon&&""===r&&null===e.timestamp?"":null===e.icon&&""===r&&null!==e.timestamp?f()(e.timestamp,"X").fromNow():null!==e.timestamp?s.t("user_status","{status}, {timestamp}",{status:o,timestamp:f()(e.timestamp,"X").fromNow()},null,{escape:!1,sanitize:!1}):o,{mainText:e.displayName,subText:a,avatarUsername:e.userId}}))}},mounted:function(){try{this.statuses=(0,i.loadState)("user_status","dashboard_data"),this.loading=!1}catch(t){console.error(t)}}},h=n(93379),b=n.n(h),v=n(7795),g=n.n(v),y=n(90569),k=n.n(y),A=n(3565),w=n.n(A),x=n(19216),C=n.n(x),z=n(44589),_=n.n(z),O=n(77091),D={};D.styleTagTransform=_(),D.setAttributes=w(),D.insert=k().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=C(),b()(O.Z,D),O.Z&&O.Z.locals&&O.Z.locals;var T=(0,n(51900).Z)(p,(function(){var t=this,s=t._self._c;return s("DashboardWidget",{attrs:{id:"user-status_panel",items:t.items,loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[s("DashboardWidgetItem",{attrs:{"main-text":n.mainText,"sub-text":n.subText},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("NcAvatar",{staticClass:"item-avatar",attrs:{size:44,user:n.avatarUsername,"display-name":n.mainText,"show-user-status":!1,"show-user-status-compact":!1}})]},proxy:!0}],null,!0)})]}},{key:"empty-content",fn:function(){return[s("NcEmptyContent",{attrs:{id:"user_status-widget-empty-content"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("div",{staticClass:"icon-user-status"})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("user_status","No recent status changes"))+"\n\t\t")])]},proxy:!0}])})}),[],!1,null,null,null).exports;n.nc=btoa((0,a.getRequestToken)()),r.ZP.prototype.t=o.translate,r.ZP.prototype.n=o.translatePlural,r.ZP.prototype.OC=OC,r.ZP.prototype.OCA=OCA,document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard.register("user_status",(function(t){new(r.ZP.extend(T))({propsData:{}}).$mount(t)}))}))},77091:function(t,s,e){"use strict";var n=e(87537),r=e.n(n),a=e(23645),o=e.n(a)()(r());o.push([t.id,"#user_status-widget-empty-content{text-align:center;margin-top:5vh}#user_status-widget-empty-content .icon-user-status{width:64px;height:64px;background-size:64px;filter:var(--background-invert-if-dark)}","",{version:3,sources:["webpack://./apps/user_status/src/views/Dashboard.vue"],names:[],mappings:"AACA,kCACC,iBAAA,CACA,cAAA,CACA,oDACC,UAAA,CACA,WAAA,CACA,oBAAA,CACA,uCAAA",sourcesContent:["\n#user_status-widget-empty-content {\n\ttext-align: center;\n\tmargin-top: 5vh;\n\t.icon-user-status {\n\t\twidth: 64px;\n\t\theight: 64px;\n\t\tbackground-size: 64px;\n\t\tfilter: var(--background-invert-if-dark);\n\t}\n}\n"],sourceRoot:""}]),s.Z=o},46700:function(t,s,e){var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(t){var s=a(t);return e(s)}function a(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id=46700}},n={};function r(t){var s=n[t];if(void 0!==s)return s.exports;var a=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},s=[],r.O=function(t,e,n,a){if(!e){var o=1/0;for(c=0;c<s.length;c++){e=s[c][0],n=s[c][1],a=s[c][2];for(var u=!0,i=0;i<e.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](e[i])}))?e.splice(i--,1):(u=!1,a<o&&(o=a));if(u){s.splice(c--,1);var j=n();void 0!==j&&(t=j)}}return t}a=a||0;for(var c=s.length;c>0&&s[c-1][2]>a;c--)s[c]=s[c-1];s[c]=[e,n,a]},r.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(s,{a:s}),s},r.d=function(t,s){for(var e in s)r.o(s,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=7063,function(){r.b=document.baseURI||self.location.href;var t={7063:0};r.O.j=function(s){return 0===t[s]};var s=function(s,e){var n,a,o=e[0],u=e[1],i=e[2],j=0;if(o.some((function(s){return 0!==t[s]}))){for(n in u)r.o(u,n)&&(r.m[n]=u[n]);if(i)var c=i(r)}for(s&&s(e);j<o.length;j++)a=o[j],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(c)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}(),r.nc=void 0;var a=r.O(void 0,[7874],(function(){return r(87109)}));a=r.O(a)}();
//# sourceMappingURL=user_status-dashboard.js.map?v=454f871a0e40f44f0b24