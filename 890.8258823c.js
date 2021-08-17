/*! For license information please see 890.8258823c.js.LICENSE.txt */
"use strict";(self.webpackChunkguides=self.webpackChunkguides||[]).push([[890],{3890:(e,t,r)=>{r.r(t);var n=r(5418),a=r.n(n),o=r(6235),i=r.n(o),c=r(655),l=r(9793),u=function(e){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){var t;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,fetch(e+"/webpack-assets.json").then((function(e){return e.json()}))];case 1:return t=r.sent(),[2,(Array.isArray(t[""].json)?t[""].json:[t[""].json]).filter((function(e){return e.endsWith(".quickstart.json")})).map((function(t){return t.startsWith("http")?t:e+"/"+t}))]}}))}))},s=function(e,t){return(0,c.__awaiter)(void 0,void 0,void 0,(function(){var r,n,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return[4,u(e)];case 1:r=o.sent(),n=[],a=0,o.label=2;case 2:return a<r.length?[4,fetch(r[a]).then((function(e){return e.json().then((function(e){return n.push(e)}))}))]:[3,5];case 3:o.sent(),o.label=4;case 4:return a++,[3,2];case 5:return[2,n.filter((function(e){var r;return!(!t&&(null===(r=e.metadata.annotations)||void 0===r?void 0:r.draft))})).map((function(e){return function(e,t){var r,n=function(e){return null==e?void 0:e.replace(/\${(\w+)}/,(function(e,r){return t?t[r]:e}))};return e.spec.tasks=null===(r=e.spec.tasks)||void 0===r?void 0:r.map((function(e,t){var r,a,o,i,c,l,u,s,f,d,p,m,v,y,h,_;"string"==typeof e?(f=e,d={}):(f=e.proc,d=e,delete e.proc);var g="";if(f){var S=document.createElement("div");S.innerHTML=f,S.querySelectorAll(".imageblock.screencapture").forEach((function(e){var t;null===(t=e.parentElement)||void 0===t||t.removeChild(e)})),v=null===(r=S.querySelector("h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child"))||void 0===r?void 0:r.innerHTML.trim();var w=S.querySelector(".sectionbody");if((null==w?void 0:w.hasChildNodes())||(w=S.querySelector("article")),w)for(var b=0;b<w.children.length;b++){var k=w.children.item(b),E=null==k?void 0:k.querySelector(".heading,.title");if(E)switch(null===(a=null==E?void 0:E.textContent)||void 0===a?void 0:a.trim()){case"Procedure":p=null===(o=null==k?void 0:k.querySelector(":not(.heading):not(.title)"))||void 0===o?void 0:o.outerHTML.trim();break;case"Verification":m=null===(i=null==k?void 0:k.querySelector(":not(.heading):not(.title)"))||void 0===i?void 0:i.outerHTML.trim()}else p||(g+=null==k?void 0:k.innerHTML.trim())}h=null===(c=S.querySelector(".qs-summary.success"))||void 0===c?void 0:c.innerHTML.trim(),_=null===(l=S.querySelector(".qs-review.failed"))||void 0===l?void 0:l.innerHTML.trim(),y=null===(u=S.querySelector(".qs-summary.failed"))||void 0===u?void 0:u.innerHTML.trim()}return d.title=n(d.title||v),d.description=n(d.description||g+" "+p),d.review=d.review||{},d.review.instructions=n((null===(s=d.review)||void 0===s?void 0:s.instructions)||m||"Have you completed these steps?"),d.review.failedTaskHelp=n(d.review.failedTaskHelp||_||"This task isn’t verified yet. Try the task again."),d.summary=d.summary||{},d.summary.success=n(d.summary.success||h||"You have completed this task!"),d.summary.failed=n(d.summary.failed||y||"Try the steps again."),d})),e}(e)}))]}}))}))},f=r(4254),d=function(e){return"function"==typeof e?e():e};const p=function(e){var t=e.children,r=e.showDrafts,o=e.appendTo,i=e.root,u=(0,c.__rest)(e,["children","showDrafts","appendTo","root"]),p=(0,l.useLocalStorage)("quickstartId",""),m=p[0],v=p[1],y=(0,l.useLocalStorage)("quickstarts",{}),h=y[0],_=y[1],g=(0,n.useState)(!1),S=g[0],w=g[1],b=(0,n.useState)([]),k=b[0],E=b[1],T=(0,f.useAssets)();(0,n.useEffect)((function(){(0,c.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,s((null==T?void 0:T.getPath())||"",r)];case 1:return e=t.sent(),console.log(e),E(e),w(!0),[2]}}))}))}),[T,r]),(0,n.useEffect)((function(){i&&d(i)&&(m?d(i).classList.add("pf-m-expanded"):d(i).classList.remove("pf-m-expanded"))}),[i,m]);var x={activeQuickStartID:m,setActiveQuickStartID:v,allQuickStartStates:h,setAllQuickStartStates:_,allQuickStarts:k};return S?a().createElement(l.QuickStartContextProvider,{value:x},a().createElement(l.QuickStartDrawer,(0,c.__assign)({appendTo:o},u),t)):t};var m=r(8788),v=function(){var e=a().useContext(l.QuickStartContext),t=e.activeQuickStartID,r=e.allQuickStartStates,n=e.allQuickStarts,o=new URLSearchParams(window.location.search).get(l.QUICKSTART_SEARCH_FILTER_KEY)||"",i=function(e,t){var r,n,a=null===(r=e.metadata.annotations)||void 0===r?void 0:r.order,o=null===(n=t.metadata.annotations)||void 0===n?void 0:n.order;return a&&!o?-1:!a&&o?1:a||o?a&&o?a-o:0:e.spec.displayName.localeCompare(t.spec.displayName)},c=(0,l.filterQuickStarts)(n,o,[],r).sort(i),u=a().useState(c),s=u[0],f=u[1],d=a().createElement(a().Fragment,null,a().createElement(l.QuickStartCatalogSection,null,a().createElement(m.TextContent,null,a().createElement(m.Text,{component:"h2"},"Quick starts"),a().createElement(m.Text,{component:"p",className:"mk-catalog-sub"},"Step-by-step instructions and tasks")),a().createElement(m.Gallery,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},n.filter((function(e){return!e.spec.type||"Documentation"!==e.spec.type.text})).sort(i).map((function(e){var n=e.metadata.name;return a().createElement(m.GalleryItem,{key:n,className:"pfext-quick-start-catalog__gallery-item"},a().createElement(l.QuickStartTile,{quickStart:e,isActive:n===t,status:(0,l.getQuickStartStatus)(r,n)}))})))),a().createElement(l.QuickStartCatalogSection,null,a().createElement(m.Divider,null)),a().createElement(l.QuickStartCatalogSection,null,a().createElement(m.TextContent,null,a().createElement(m.Text,{component:"h2"},"Documentation"),a().createElement(m.Text,{component:"p",className:"mk-catalog-sub"},"Technical information for using the service")),a().createElement(m.Gallery,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},n.filter((function(e){var t;return"Documentation"===(null===(t=e.spec.type)||void 0===t?void 0:t.text)})).sort(i).map((function(e){var n=e.metadata.name;return a().createElement(m.GalleryItem,{key:n,className:"pfext-quick-start-catalog__gallery-item"},a().createElement(l.QuickStartTile,{quickStart:e,isActive:n===t,status:(0,l.getQuickStartStatus)(r,n)}))})))));return a().createElement(a().Fragment,null,a().createElement(l.QuickStartCatalogHeader,{title:"Resources"}),a().createElement(m.Divider,{component:"div"}),a().createElement(l.QuickStartCatalogToolbar,null,a().createElement(m.ToolbarContent,null,a().createElement(l.QuickStartCatalogFilterSearchWrapper,{onSearchInputChange:function(e){var t=(0,l.filterQuickStarts)(n,e,[],r).sort(i);f(t)}}),a().createElement(l.QuickStartCatalogFilterCountWrapper,{quickStartsCount:s.length}))),a().createElement(m.Divider,{component:"div"}),0===s.length?a().createElement(l.QuickStartCatalogEmptyState,{clearFilters:function(){f(n.sort(i))}}):s.length!==n.length?a().createElement(l.QuickStartCatalog,{quickStarts:s}):d)};const y=function(){return a().createElement(v,null)};const h=function(){var e=a().createElement(m.PageHeader,{logo:a().createElement("div",null,"Quick starts for MAS"),showNavToggle:!0,isNavOpen:!0}),t=a().createElement(m.Nav,{"aria-label":"Nav"},a().createElement(m.NavList,null,a().createElement(m.NavItem,{to:"/"},"Home"))),r=a().createElement(m.PageSidebar,{isNavOpen:!0,nav:t});return a().createElement(m.Page,{header:e,sidebar:r,isManagedSidebar:!0},a().createElement(y,null))};i().render(a().createElement((function(){return n.createElement(p,null,n.createElement(h,null))}),null),document.getElementById("root"))},655:(e,t,r)=>{r.r(t),r.d(t,{__extends:()=>a,__assign:()=>o,__rest:()=>i,__decorate:()=>c,__param:()=>l,__metadata:()=>u,__awaiter:()=>s,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>p,__values:()=>m,__read:()=>v,__spread:()=>y,__spreadArrays:()=>h,__spreadArray:()=>_,__await:()=>g,__asyncGenerator:()=>S,__asyncDelegator:()=>w,__asyncValues:()=>b,__makeTemplateObject:()=>k,__importStar:()=>T,__importDefault:()=>x,__classPrivateFieldGet:()=>O,__classPrivateFieldSet:()=>j});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function c(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}function l(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function c(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function h(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)n[a]=o[i];return n}function _(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function S(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),o=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=a[e](t)).value instanceof g?Promise.resolve(r.value.v).then(l,u):s(o[0][2],r)}catch(e){s(o[0][3],e)}var r}function l(e){c("next",e)}function u(e){c("throw",e)}function s(e,t){e(t),o.shift(),o.length&&c(o[0][0],o[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:g(e[n](t)),done:"return"===n}:a?a(t):t}:a}}function b(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=m(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return E(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function O(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function j(e,t,r,n,a){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?a.call(e,r):a?a.value=r:t.set(e,r),r}}}]);
//# sourceMappingURL=890.8258823c.js.map