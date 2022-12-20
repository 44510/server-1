/*! For license information please see updatenotification-updatenotification.js.LICENSE.txt */
!function(){"use strict";var e,a={90465:function(e,a,i){var o=i(20144),s=i(79753),r=i(32996),p=i.n(r),c=i(98266),l=i.n(c),d=i(13299),u=i.n(d),h=i(57290),f=i.n(h),v=i(34741),A=i(2649),g=i.n(A),m=i(4820),C=i(16453),b=i(26932),w=i(20296),_=i.n(w);function U(t,e,n,a,i,o,s){try{var r=t[o](s),p=r.value}catch(t){return void n(t)}r.done?e(p):Promise.resolve(p).then(a,i)}var y=(0,i(17499).IY)().setApp("updatenotification").detectUser().build();v.VTooltip.options.defaultHtml=!1;var k={name:"UpdateNotification",components:{NcMultiselect:l(),NcPopoverMenu:p(),NcSettingsSection:u(),NcNoteCard:f()},directives:{ClickOutside:g(),tooltip:v.VTooltip},data:function(){return{loadingGroups:!1,newVersionString:"",lastCheckedDate:"",isUpdateChecked:!1,webUpdaterEnabled:!0,isWebUpdaterRecommended:!0,updaterEnabled:!0,versionIsEol:!1,downloadLink:"",isNewVersionAvailable:!1,hasValidSubscription:!1,updateServerURL:"",changelogURL:"",whatsNewData:[],currentChannel:"",channels:[],notifyGroups:"",groups:[],isDefaultUpdateServerURL:!0,enableChangeWatcher:!1,availableAppUpdates:[],missingAppUpdates:[],appStoreFailed:!1,appStoreDisabled:!1,isListFetched:!1,hideMissingUpdates:!1,hideAvailableUpdates:!0,openedWhatsNew:!1,openedUpdateChannelMenu:!1}},computed:{newVersionAvailableString:function(){return t("updatenotification","A new version is available: <strong>{newVersionString}</strong>",{newVersionString:this.newVersionString})},noteDelayedStableString:function(){return t("updatenotification","Note that after a new release the update only shows up after the first minor release or later. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found. Learn more about updates and release channels at {link}").replace("{link}",'<a href="https://nextcloud.com/release-channels/">https://nextcloud.com/release-channels/</a>')},lastCheckedOnString:function(){return t("updatenotification","Checked on {lastCheckedDate}",{lastCheckedDate:this.lastCheckedDate})},statusText:function(){return this.isListFetched?this.appStoreDisabled?t("updatenotification","Please make sure your config.php does not set <samp>appstoreenabled</samp> to false."):this.appStoreFailed?t("updatenotification","Could not connect to the App Store or no updates have been returned at all. Search manually for updates or make sure your server has access to the internet and can connect to the App Store."):0===this.missingAppUpdates.length?t("updatenotification","<strong>All</strong> apps have a compatible version for this Nextcloud version available.",this):n("updatenotification","<strong>%n</strong> app has no compatible version for this Nextcloud version available.","<strong>%n</strong> apps have no compatible version for this Nextcloud version available.",this.missingAppUpdates.length):t("updatenotification","Checking apps for compatible versions")},whatsNew:function(){if(0===this.whatsNewData.length)return null;var e=[];for(var n in this.whatsNewData)e[n]={icon:"icon-checkmark",longtext:this.whatsNewData[n]};return this.changelogURL&&e.push({href:this.changelogURL,text:t("updatenotification","View changelog"),icon:"icon-link",target:"_blank",action:""}),e},channelList:function(){var e=[];return e.push({text:t("updatenotification","Enterprise"),longtext:t("updatenotification","For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package."),icon:"icon-star",active:"enterprise"===this.currentChannel,disabled:!this.hasValidSubscription,action:this.changeReleaseChannelToEnterprise}),e.push({text:t("updatenotification","Stable"),longtext:t("updatenotification","The most recent stable version. It is suited for regular use and will always update to the latest major version."),icon:"icon-checkmark",active:"stable"===this.currentChannel,action:this.changeReleaseChannelToStable}),e.push({text:t("updatenotification","Beta"),longtext:t("updatenotification","A pre-release version only for testing new features, not for production environments."),icon:"icon-category-customization",active:"beta"===this.currentChannel,action:this.changeReleaseChannelToBeta}),this.isNonDefaultChannel&&e.push({text:this.currentChannel,icon:"icon-rename",active:!0}),e},isNonDefaultChannel:function(){return"enterprise"!==this.currentChannel&&"stable"!==this.currentChannel&&"beta"!==this.currentChannel},localizedChannelName:function(){switch(this.currentChannel){case"enterprise":return t("updatenotification","Enterprise");case"stable":return t("updatenotification","Stable");case"beta":return t("updatenotification","Beta");default:return this.currentChannel}}},watch:{notifyGroups:function(t){if(this.enableChangeWatcher){var e=this.notifyGroups.map((function(t){return t.id}));OCP.AppConfig.setValue("updatenotification","notify_groups",JSON.stringify(e))}else this.enableChangeWatcher=!0},isNewVersionAvailable:function(){var t=this;this.isNewVersionAvailable&&m.default.get((0,s.generateOcsUrl)("apps/updatenotification/api/v1/applist/{newVersion}",{newVersion:this.newVersion})).then((function(e){var n=e.data;t.availableAppUpdates=n.ocs.data.available,t.missingAppUpdates=n.ocs.data.missing,t.isListFetched=!0,t.appStoreFailed=!1})).catch((function(e){var n=e.data;t.availableAppUpdates=[],t.missingAppUpdates=[],t.appStoreDisabled=n.ocs.data.appstore_disabled,t.isListFetched=!0,t.appStoreFailed=!0}))}},beforeMount:function(){var t=(0,C.loadState)("updatenotification","data");this.newVersion=t.newVersion,this.newVersionString=t.newVersionString,this.lastCheckedDate=t.lastChecked,this.isUpdateChecked=t.isUpdateChecked,this.webUpdaterEnabled=t.webUpdaterEnabled,this.isWebUpdaterRecommended=t.isWebUpdaterRecommended,this.updaterEnabled=t.updaterEnabled,this.downloadLink=t.downloadLink,this.isNewVersionAvailable=t.isNewVersionAvailable,this.updateServerURL=t.updateServerURL,this.currentChannel=t.currentChannel,this.channels=t.channels,this.notifyGroups=t.notifyGroups,this.isDefaultUpdateServerURL=t.isDefaultUpdateServerURL,this.versionIsEol=t.versionIsEol,this.hasValidSubscription=t.hasValidSubscription,t.changes&&t.changes.changelogURL&&(this.changelogURL=t.changes.changelogURL),t.changes&&t.changes.whatsNew&&(t.changes.whatsNew.admin&&(this.whatsNewData=this.whatsNewData.concat(t.changes.whatsNew.admin)),this.whatsNewData=this.whatsNewData.concat(t.changes.whatsNew.regular))},mounted:function(){this.searchGroup()},methods:{searchGroup:_()(function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadingGroups=!0,t.prev=1,t.next=4,m.default.get((0,s.generateOcsUrl)("cloud/groups/details"),{search:e,limit:20,offset:0});case 4:n=t.sent,this.groups=n.data.ocs.data.groups.sort((function(t,e){return t.displayname.localeCompare(e.displayname)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),y.error("Could not fetch groups",t.t0);case 11:return t.prev=11,this.loadingGroups=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[1,8,11,14]])})),function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){U(o,a,i,s,r,"next",t)}function r(t){U(o,a,i,s,r,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),500),clickUpdaterButton:function(){m.default.get((0,s.generateUrl)("/apps/updatenotification/credentials")).then((function(t){var e=t.data,n=document.createElement("form");n.setAttribute("method","post"),n.setAttribute("action",(0,s.getRootUrl)()+"/updater/");var a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name","updater-secret-input"),a.setAttribute("value",e),n.appendChild(a),document.body.appendChild(n),n.submit()}))},changeReleaseChannelToEnterprise:function(){this.changeReleaseChannel("enterprise")},changeReleaseChannelToStable:function(){this.changeReleaseChannel("stable")},changeReleaseChannelToBeta:function(){this.changeReleaseChannel("beta")},changeReleaseChannel:function(t){this.currentChannel=t,m.default.post((0,s.generateUrl)("/apps/updatenotification/channel"),{channel:this.currentChannel}).then((function(t){var e=t.data;(0,b.s$)(e.data.message)})),this.openedUpdateChannelMenu=!1},toggleUpdateChannelMenu:function(){this.openedUpdateChannelMenu=!this.openedUpdateChannelMenu},toggleHideMissingUpdates:function(){this.hideMissingUpdates=!this.hideMissingUpdates},toggleHideAvailableUpdates:function(){this.hideAvailableUpdates=!this.hideAvailableUpdates},toggleMenu:function(){this.openedWhatsNew=!this.openedWhatsNew},closeUpdateChannelMenu:function(){this.openedUpdateChannelMenu=!1},hideMenu:function(){this.openedWhatsNew=!1}}},x=k,N=i(93379),S=i.n(N),E=i(7795),D=i.n(E),M=i(90569),L=i.n(M),R=i(3565),V=i.n(R),T=i(19216),O=i.n(T),P=i(44589),G=i.n(P),B=i(37485),W={};W.styleTagTransform=G(),W.setAttributes=V(),W.insert=L().bind(null,"head"),W.domAPI=D(),W.insertStyleElement=O(),S()(B.Z,W),B.Z&&B.Z.locals&&B.Z.locals;var F=i(48659),Z={};Z.styleTagTransform=G(),Z.setAttributes=V(),Z.insert=L().bind(null,"head"),Z.domAPI=D(),Z.insertStyleElement=O(),S()(F.Z,Z),F.Z&&F.Z.locals&&F.Z.locals;var j=(0,i(51900).Z)(x,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{id:"updatenotification",title:t.t("updatenotification","Update")}},[e("div",{staticClass:"update"},[t.isNewVersionAvailable?[t.versionIsEol?e("NcNoteCard",{attrs:{type:"warning"}},[t._v("\n\t\t\t\t"+t._s(t.t("updatenotification","The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible."))+"\n\t\t\t")]):t._e(),t._v(" "),e("p",[e("span",{domProps:{innerHTML:t._s(t.newVersionAvailableString)}}),e("br"),t._v(" "),t.isListFetched?t._e():e("span",{staticClass:"icon icon-loading-small"}),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.statusText)}})]),t._v(" "),t.missingAppUpdates.length?[e("h3",{on:{click:t.toggleHideMissingUpdates}},[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Apps missing compatible version"))+"\n\t\t\t\t\t"),t.hideMissingUpdates?t._e():e("span",{staticClass:"icon icon-triangle-n"}),t._v(" "),t.hideMissingUpdates?e("span",{staticClass:"icon icon-triangle-s"}):t._e()]),t._v(" "),t.hideMissingUpdates?t._e():e("ul",{staticClass:"applist"},t._l(t.missingAppUpdates,(function(n,a){return e("li",{key:a},[e("a",{attrs:{href:"https://apps.nextcloud.com/apps/"+n.appId,title:t.t("settings","View in store")}},[t._v(t._s(n.appName)+" ↗")])])})),0)]:t._e(),t._v(" "),t.availableAppUpdates.length?[e("h3",{on:{click:t.toggleHideAvailableUpdates}},[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Apps with compatible version"))+"\n\t\t\t\t\t"),t.hideAvailableUpdates?t._e():e("span",{staticClass:"icon icon-triangle-n"}),t._v(" "),t.hideAvailableUpdates?e("span",{staticClass:"icon icon-triangle-s"}):t._e()]),t._v(" "),t.hideAvailableUpdates?t._e():e("ul",{staticClass:"applist"},t._l(t.availableAppUpdates,(function(n,a){return e("li",{key:a},[e("a",{attrs:{href:"https://apps.nextcloud.com/apps/"+n.appId,title:t.t("settings","View in store")}},[t._v(t._s(n.appName)+" ↗")])])})),0)]:t._e(),t._v(" "),!t.isWebUpdaterRecommended&&t.updaterEnabled&&t.webUpdaterEnabled?[e("h3",{staticClass:"warning"},[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Please note that the web updater is not recommended with more than 100 users! Please use the command line updater instead!"))+"\n\t\t\t\t")])]:t._e(),t._v(" "),e("div",[t.updaterEnabled&&t.webUpdaterEnabled?e("a",{staticClass:"button primary",attrs:{href:"#"},on:{click:t.clickUpdaterButton}},[t._v(t._s(t.t("updatenotification","Open updater")))]):t._e(),t._v(" "),t.downloadLink?e("a",{staticClass:"button",class:{hidden:!t.updaterEnabled},attrs:{href:t.downloadLink}},[t._v(t._s(t.t("updatenotification","Download now")))]):t._e(),t._v(" "),t.updaterEnabled&&!t.webUpdaterEnabled?e("span",[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Please use the command line updater to update."))+"\n\t\t\t\t")]):t._e(),t._v(" "),t.whatsNew?e("div",{staticClass:"whatsNew"},[e("div",{staticClass:"toggleWhatsNew"},[e("a",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMenu,expression:"hideMenu"}],staticClass:"button",on:{click:t.toggleMenu}},[t._v(t._s(t.t("updatenotification","What's new?")))]),t._v(" "),e("div",{staticClass:"popovermenu",class:{"menu-center":!0,open:t.openedWhatsNew}},[e("NcPopoverMenu",{attrs:{menu:t.whatsNew}})],1)])]):t._e()])]:t.isUpdateChecked?[t._v("\n\t\t\t"+t._s(t.t("updatenotification","Your version is up to date."))+"\n\t\t\t"),e("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.lastCheckedOnString,expression:"lastCheckedOnString",modifiers:{auto:!0}}],staticClass:"icon-info svg"})]:[t._v("\n\t\t\t"+t._s(t.t("updatenotification","The update check is not yet finished. Please refresh the page."))+"\n\t\t")],t._v(" "),t.isDefaultUpdateServerURL?t._e():[e("p",{staticClass:"topMargin"},[e("em",[t._v(t._s(t.t("updatenotification","A non-default update server is in use to be checked for updates:"))+" "),e("code",[t._v(t._s(t.updateServerURL))])])])]],2),t._v(" "),e("div",[t._v("\n\t\t"+t._s(t.t("updatenotification","You can change the update channel below which also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page."))+"\n\t")]),t._v(" "),e("h3",{staticClass:"update-channel-selector"},[t._v("\n\t\t"+t._s(t.t("updatenotification","Update channel:"))+"\n\t\t"),e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeUpdateChannelMenu,expression:"closeUpdateChannelMenu"}],staticClass:"update-menu"},[e("span",{staticClass:"icon-update-menu",on:{click:t.toggleUpdateChannelMenu}},[t._v("\n\t\t\t\t"+t._s(t.localizedChannelName)+"\n\t\t\t\t"),e("span",{staticClass:"icon-triangle-s"})]),t._v(" "),e("div",{staticClass:"popovermenu menu menu-center",class:{"show-menu":t.openedUpdateChannelMenu}},[e("NcPopoverMenu",{attrs:{menu:t.channelList}})],1)])]),t._v(" "),e("span",{staticClass:"msg",attrs:{id:"channel_save_msg"}}),e("br"),t._v(" "),e("p",[e("em",[t._v(t._s(t.t("updatenotification","You can always update to a newer version. But you can never downgrade to a more stable version.")))]),e("br"),t._v(" "),e("em",{domProps:{innerHTML:t._s(t.noteDelayedStableString)}})]),t._v(" "),e("p",{attrs:{id:"oca_updatenotification_groups"}},[t._v("\n\t\t"+t._s(t.t("updatenotification","Notify members of the following groups about available updates:"))+"\n\t\t"),e("NcMultiselect",{attrs:{options:t.groups,multiple:!0,searchable:!0,label:"displayname",loading:t.loadingGroups,"show-no-options":!1,"close-on-select":!1,"track-by":"id","tag-width":75},on:{"search-change":t.searchGroup},model:{value:t.notifyGroups,callback:function(e){t.notifyGroups=e},expression:"notifyGroups"}}),e("br"),t._v(" "),"daily"===t.currentChannel||"git"===t.currentChannel?e("em",[t._v(t._s(t.t("updatenotification","Only notifications for app updates are available.")))]):t._e(),t._v(" "),"daily"===t.currentChannel?e("em",[t._v(t._s(t.t("updatenotification","The selected update channel makes dedicated notifications for the server obsolete.")))]):t._e(),t._v(" "),"git"===t.currentChannel?e("em",[t._v(t._s(t.t("updatenotification","The selected update channel does not support updates of the server.")))]):t._e()],1)])}),[],!1,null,"e918afa2",null).exports;o.ZP.mixin({methods:{t:function(t,e,n,a,i){return OC.L10N.translate(t,e,n,a,i)},n:function(t,e,n,a,i,o){return OC.L10N.translatePlural(t,e,n,a,i,o)}}}),new o.ZP({el:"#updatenotification",render:function(t){return t(j)}})},37485:function(t,e,n){var a=n(87537),i=n.n(a),o=n(23645),s=n.n(o)()(i());s.push([t.id,"#updatenotification>*[data-v-e918afa2]{max-width:900px}#updatenotification div.update[data-v-e918afa2],#updatenotification p[data-v-e918afa2]:not(.inlineblock){margin-bottom:25px}#updatenotification h2.inlineblock[data-v-e918afa2]{margin-top:25px}#updatenotification h3[data-v-e918afa2]{cursor:pointer}#updatenotification h3 .icon[data-v-e918afa2]{cursor:pointer}#updatenotification h3[data-v-e918afa2]:first-of-type{margin-top:0}#updatenotification h3.update-channel-selector[data-v-e918afa2]{display:inline-block;cursor:inherit}#updatenotification .icon[data-v-e918afa2]{display:inline-block;margin-bottom:-3px}#updatenotification .icon-triangle-s[data-v-e918afa2],#updatenotification .icon-triangle-n[data-v-e918afa2]{opacity:.5}#updatenotification .whatsNew[data-v-e918afa2]{display:inline-block}#updatenotification .toggleWhatsNew[data-v-e918afa2]{position:relative}#updatenotification .popovermenu[data-v-e918afa2]{margin-top:5px;width:300px}#updatenotification .popovermenu p[data-v-e918afa2]{margin-bottom:0;width:100%}#updatenotification .applist[data-v-e918afa2]{margin-bottom:25px}#updatenotification .update-menu[data-v-e918afa2]{position:relative;cursor:pointer;margin-left:3px;display:inline-block}#updatenotification .update-menu .icon-update-menu[data-v-e918afa2]{cursor:inherit}#updatenotification .update-menu .icon-update-menu .icon-triangle-s[data-v-e918afa2]{display:inline-block;vertical-align:middle;cursor:inherit;opacity:1}#updatenotification .update-menu .popovermenu[data-v-e918afa2]{display:none;top:28px}#updatenotification .update-menu .popovermenu.show-menu[data-v-e918afa2]{display:block}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/UpdateNotification.vue"],names:[],mappings:"AAEC,uCACC,eAAA,CAGD,yGAEC,kBAAA,CAED,oDACC,eAAA,CAED,wCACC,cAAA,CACA,8CACC,cAAA,CAED,sDACC,YAAA,CAED,gEACC,oBAAA,CACA,cAAA,CAGF,2CACC,oBAAA,CACA,kBAAA,CAED,4GACC,UAAA,CAED,+CACC,oBAAA,CAED,qDACC,iBAAA,CAED,kDAKC,cAAA,CACA,WAAA,CALA,oDACC,eAAA,CACA,UAAA,CAKF,8CACC,kBAAA,CAGD,kDACC,iBAAA,CACA,cAAA,CACA,eAAA,CACA,oBAAA,CACA,oEACC,cAAA,CACA,qFACC,oBAAA,CACA,qBAAA,CACA,cAAA,CACA,SAAA,CAGF,+DACC,YAAA,CACA,QAAA,CACA,yEACC,aAAA",sourcesContent:["\n#updatenotification {\n\t& > * {\n\t\tmax-width: 900px;\n\t}\n\n\tdiv.update,\n\tp:not(.inlineblock) {\n\t\tmargin-bottom: 25px;\n\t}\n\th2.inlineblock {\n\t\tmargin-top: 25px;\n\t}\n\th3 {\n\t\tcursor: pointer;\n\t\t.icon {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t&:first-of-type {\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t&.update-channel-selector {\n\t\t\tdisplay: inline-block;\n\t\t\tcursor: inherit;\n\t\t}\n\t}\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: -3px;\n\t}\n\t.icon-triangle-s, .icon-triangle-n {\n\t\topacity: 0.5;\n\t}\n\t.whatsNew {\n\t\tdisplay: inline-block;\n\t}\n\t.toggleWhatsNew {\n\t\tposition: relative;\n\t}\n\t.popovermenu {\n\t\tp {\n\t\t\tmargin-bottom: 0;\n\t\t\twidth: 100%;\n\t\t}\n\t\tmargin-top: 5px;\n\t\twidth: 300px;\n\t}\n\t.applist {\n\t\tmargin-bottom: 25px;\n\t}\n\n\t.update-menu {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tmargin-left: 3px;\n\t\tdisplay: inline-block;\n\t\t.icon-update-menu {\n\t\t\tcursor: inherit;\n\t\t\t.icon-triangle-s {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tvertical-align: middle;\n\t\t\t\tcursor: inherit;\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t\t.popovermenu {\n\t\t\tdisplay: none;\n\t\t\ttop: 28px;\n\t\t\t&.show-menu {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),e.Z=s},48659:function(t,e,n){var a=n(87537),i=n.n(a),o=n(23645),s=n.n(o)()(i());s.push([t.id,"#updatenotification .popovermenu{margin-top:5px;width:300px}#updatenotification .popovermenu p{margin-top:5px;width:100%}#updatenotification .update-menu .icon-star:hover,#updatenotification .update-menu .icon-star:focus{background-image:var(--icon-starred)}#updatenotification .topMargin{margin-top:15px}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/UpdateNotification.vue"],names:[],mappings:"AAEA,iCAKC,cAAA,CACA,WAAA,CALA,mCACC,cAAA,CACA,UAAA,CAMF,oGAEC,oCAAA,CAED,+BACC,eAAA",sourcesContent:["\n/* override needed to make menu wider */\n#updatenotification .popovermenu {\n\tp {\n\t\tmargin-top: 5px;\n\t\twidth: 100%;\n\t}\n\tmargin-top: 5px;\n\twidth: 300px;\n}\n/* override needed to replace yellow hover state with a dark one */\n#updatenotification .update-menu .icon-star:hover,\n#updatenotification .update-menu .icon-star:focus {\n\tbackground-image: var(--icon-starred);\n}\n#updatenotification .topMargin {\n\tmargin-top: 15px;\n}\n"],sourceRoot:""}]),e.Z=s}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return a[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=a,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=function(t,n,a,i){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],i=e[l][2];for(var r=!0,p=0;p<n.length;p++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[p])}))?n.splice(p--,1):(r=!1,i<s&&(s=i));if(r){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,a,i]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},o.j=7292,function(){o.b=document.baseURI||self.location.href;var t={7292:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,s=n[0],r=n[1],p=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(p)var l=p(o)}for(e&&e(n);c<s.length;c++)i=s[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.nc=void 0;var s=o.O(void 0,[7874],(function(){return o(90465)}));s=o.O(s)}();
//# sourceMappingURL=updatenotification-updatenotification.js.map?v=6655e086f30fa0b4776f