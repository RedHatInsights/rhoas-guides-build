(self.webpackChunkguides=self.webpackChunkguides||[]).push([[732],{1820:()=>{},1869:()=>{},5922:()=>{},6732:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(655),i=r(8121),o=r.n(i),a=r(4950),u=r(4555),l=(r(1869),r(5922),r(1820),r(6748)),c=function(e){return"function"==typeof e?e():e};const s=function(e){var t=e.children,r=e.showDrafts,s=e.appendTo,f=e.root,d=(0,n._T)(e,["children","showDrafts","appendTo","root"]),v=(0,a.useLocalStorage)("quickstartId",""),h=v[0],p=v[1],y=(0,a.useLocalStorage)("quickstarts",{}),m=y[0],b=y[1],w=(0,i.useState)(!1),S=w[0],k=w[1],g=(0,i.useState)([]),T=g[0],q=g[1],j=(0,l.useAssets)();(0,i.useEffect)((function(){(0,n.mG)(void 0,void 0,void 0,(function(){var e;return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return[4,(0,u.X)((null==j?void 0:j.getPath())||"",r)];case 1:return e=t.sent(),console.log(e),q(e),k(!0),[2]}}))}))}),[j,r]),(0,i.useEffect)((function(){f&&(h?c(f).classList.add("pf-m-expanded"):c(f).classList.remove("pf-m-expanded"))}),[f,h]);var O=(0,a.useValuesForQuickStartContext)({activeQuickStartID:h,setActiveQuickStartID:p,allQuickStartStates:m,setAllQuickStartStates:b,allQuickStarts:T});return S?o().createElement(a.QuickStartContext.Provider,{value:O},o().createElement(a.QuickStartDrawer,(0,n.pi)({appendTo:s},d),t)):o().createElement(o().Fragment,null,t)}},8988:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});var n=function(e,t){var r,n=function(e){return null==e?void 0:e.replace(/\${(\w+)}/,(function(e,r){return t?t[r]:e}))};return e.spec.tasks=null===(r=e.spec.tasks)||void 0===r?void 0:r.map((function(e,t){var r,i,o,a,u,l,c,s,f,d,v,h,p,y,m,b;"string"==typeof e?(f=e,d={}):(f=e.proc,d=e,delete e.proc);var w="";if(f){var S=document.createElement("div");S.innerHTML=f,S.querySelectorAll(".imageblock.screencapture").forEach((function(e){var t;null===(t=e.parentElement)||void 0===t||t.removeChild(e)})),p=null===(r=S.querySelector("h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child"))||void 0===r?void 0:r.innerHTML.trim();var k=S.querySelector(".sectionbody");if((null==k?void 0:k.hasChildNodes())||(k=S.querySelector("article")),k)for(var g=0;g<k.children.length;g++){var T=k.children.item(g),q=null==T?void 0:T.querySelector(".heading,.title");if(q)switch(null===(i=null==q?void 0:q.textContent)||void 0===i?void 0:i.trim()){case"Procedure":v=null===(o=null==T?void 0:T.querySelector(":not(.heading):not(.title)"))||void 0===o?void 0:o.outerHTML.trim();break;case"Verification":h=null===(a=null==T?void 0:T.querySelector(":not(.heading):not(.title)"))||void 0===a?void 0:a.outerHTML.trim()}else v||(w+=null==T?void 0:T.innerHTML.trim())}m=null===(u=S.querySelector(".qs-summary.success"))||void 0===u?void 0:u.innerHTML.trim(),b=null===(l=S.querySelector(".qs-review.failed"))||void 0===l?void 0:l.innerHTML.trim(),y=null===(c=S.querySelector(".qs-summary.failed"))||void 0===c?void 0:c.innerHTML.trim()}return d.title=n(d.title||p),d.description=n(d.description||w+" "+v),d.review=d.review||{},d.review.instructions=n((null===(s=d.review)||void 0===s?void 0:s.instructions)||h||"Have you completed these steps?"),d.review.failedTaskHelp=n(d.review.failedTaskHelp||b||"This task isn’t verified yet. Try the task again."),d.summary=d.summary||{},d.summary.success=n(d.summary.success||m||"You have completed this task!"),d.summary.failed=n(d.summary.failed||y||"Try the steps again."),d})),e}},4555:(e,t,r)=>{"use strict";r.d(t,{X:()=>a});var n=r(655),i=r(8988),o=function(e){return(0,n.mG)(void 0,void 0,Promise,(function(){var t;return(0,n.Jh)(this,(function(r){switch(r.label){case 0:return[4,fetch(e+"/webpack-assets.json").then((function(e){return e.json()}))];case 1:return t=r.sent(),[2,(Array.isArray(t[""].json)?t[""].json:[t[""].json]).filter((function(e){return e.endsWith(".quickstart.json")})).map((function(t){return t.startsWith("http")?t:e+"/"+t}))]}}))}))},a=function(e,t){return(0,n.mG)(void 0,void 0,void 0,(function(){var r,a,u;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return[4,o(e)];case 1:r=n.sent(),a=[],u=0,n.label=2;case 2:return u<r.length?[4,fetch(r[u]).then((function(e){return e.json().then((function(e){return a.push(e)}))}))]:[3,5];case 3:n.sent(),n.label=4;case 4:return u++,[3,2];case 5:return[2,a.filter((function(e){var r;return!(!t&&(null===(r=e.metadata.annotations)||void 0===r?void 0:r.draft))})).map((function(e){return(0,i.P)(e)}))]}}))}))}},655:(e,t,r)=>{"use strict";r.d(t,{pi:()=>n,_T:()=>i,mG:()=>o,Jh:()=>a,fl:()=>l});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function o(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}l((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}Object.create;function u(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function l(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}Object.create}}]);
//# sourceMappingURL=732.de202856.js.map