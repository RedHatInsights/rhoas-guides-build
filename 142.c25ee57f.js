(self.webpackChunkguides=self.webpackChunkguides||[]).push([[142],{1142:(e,t,n)=>{"use strict";n.r(t);var r=n(8121),a=n.n(r),i=n(1568),l=n.n(i),c=n(655),o=n(2606),u=function(e){return(0,c.mG)(void 0,void 0,Promise,(function(){var t;return(0,c.Jh)(this,(function(n){switch(n.label){case 0:return[4,fetch(e+"/webpack-assets.json").then((function(e){return e.json()}))];case 1:return t=n.sent(),[2,(Array.isArray(t[""].json)?t[""].json:[t[""].json]).filter((function(e){return e.endsWith(".quickstart.json")})).map((function(t){return t.startsWith("http")?t:e+"/"+t}))]}}))}))},s=function(e,t){return(0,c.mG)(void 0,void 0,void 0,(function(){var n,r,a;return(0,c.Jh)(this,(function(i){switch(i.label){case 0:return[4,u(e)];case 1:n=i.sent(),r=[],a=0,i.label=2;case 2:return a<n.length?[4,fetch(n[a]).then((function(e){return e.json().then((function(e){return r.push(e)}))}))]:[3,5];case 3:i.sent(),i.label=4;case 4:return a++,[3,2];case 5:return[2,r.filter((function(e){var n;return!(!t&&(null===(n=e.metadata.annotations)||void 0===n?void 0:n.draft))})).map((function(e){return function(e,t){var n,r=function(e){return null==e?void 0:e.replace(/\${(\w+)}/,(function(e,n){return t?t[n]:e}))};return e.spec.tasks=null===(n=e.spec.tasks)||void 0===n?void 0:n.map((function(e,t){var n,a,i,l,c,o,u,s,m,f,d,v,h,p,y,S;"string"==typeof e?(m=e,f={}):(m=e.proc,f=e,delete e.proc);var g="";if(m){var E=document.createElement("div");E.innerHTML=m,E.querySelectorAll(".imageblock.screencapture").forEach((function(e){var t;null===(t=e.parentElement)||void 0===t||t.removeChild(e)})),h=null===(n=E.querySelector("h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child"))||void 0===n?void 0:n.innerHTML.trim();var k=E.querySelector(".sectionbody");if((null==k?void 0:k.hasChildNodes())||(k=E.querySelector("article")),k)for(var b=0;b<k.children.length;b++){var w=k.children.item(b),T=null==w?void 0:w.querySelector(".heading,.title");if(T)switch(null===(a=null==T?void 0:T.textContent)||void 0===a?void 0:a.trim()){case"Procedure":d=null===(i=null==w?void 0:w.querySelector(":not(.heading):not(.title)"))||void 0===i?void 0:i.outerHTML.trim();break;case"Verification":v=null===(l=null==w?void 0:w.querySelector(":not(.heading):not(.title)"))||void 0===l?void 0:l.outerHTML.trim()}else d||(g+=null==w?void 0:w.innerHTML.trim())}y=null===(c=E.querySelector(".qs-summary.success"))||void 0===c?void 0:c.innerHTML.trim(),S=null===(o=E.querySelector(".qs-review.failed"))||void 0===o?void 0:o.innerHTML.trim(),p=null===(u=E.querySelector(".qs-summary.failed"))||void 0===u?void 0:u.innerHTML.trim()}return f.title=r(f.title||h),f.description=r(f.description||g+" "+d),f.review=f.review||{},f.review.instructions=r((null===(s=f.review)||void 0===s?void 0:s.instructions)||v||"Have you completed these steps?"),f.review.failedTaskHelp=r(f.review.failedTaskHelp||S||"This task isn’t verified yet. Try the task again."),f.summary=f.summary||{},f.summary.success=r(f.summary.success||y||"You have completed this task!"),f.summary.failed=r(f.summary.failed||p||"Try the steps again."),f})),e}(e)}))]}}))}))};const m=function(e){var t=e.children,n=e.basePath,i=e.showDrafts,l=(0,c._T)(e,["children","basePath","showDrafts"]),u=(0,o.useLocalStorage)("quickstartId",""),m=u[0],f=u[1],d=(0,o.useLocalStorage)("quickstarts",{}),v=d[0],h=d[1],p=(0,r.useState)(!1),y=p[0],S=p[1],g=(0,r.useState)([]),E=g[0],k=g[1];(0,r.useEffect)((function(){(0,c.mG)(void 0,void 0,void 0,(function(){var e;return(0,c.Jh)(this,(function(t){switch(t.label){case 0:return[4,s(n||"",i)];case 1:return e=t.sent(),console.log(e),k(e),S(!0),[2]}}))}))}),[n,i]);var b=(0,o.useValuesForQuickStartContext)({activeQuickStartID:m,setActiveQuickStartID:f,allQuickStartStates:v,setAllQuickStartStates:h,allQuickStarts:E});return y?a().createElement(o.QuickStartContext.Provider,{value:b},a().createElement(o.QuickStartDrawer,(0,c.pi)({},l),t)):a().createElement(a().Fragment,null)};var f=n(5399),d=function(e){var t=e.quickStarts,n=a().useContext(o.QuickStartContext),r=n.activeQuickStartID,i=n.allQuickStartStates,l=new URLSearchParams(window.location.search).get(o.QUICKSTART_SEARCH_FILTER_KEY)||"",c=function(e,t){return e.spec.displayName.localeCompare(t.spec.displayName)},u=(0,o.filterQuickStarts)(t,l,[],i).sort(c),s=a().useState(u),m=s[0],d=s[1],v=a().createElement(a().Fragment,null,a().createElement(f.PageSection,null,a().createElement(f.TextContent,null,a().createElement(f.Text,{component:"h2"},"Quick starts"),a().createElement(f.Text,{component:"p"},"Step-by-step instructions and tasks")),a().createElement(f.Gallery,{className:"co-quick-start-catalog__gallery",hasGutter:!0},t.filter((function(e){return!e.spec.type||"Documentation"!==e.spec.type.text})).map((function(e){var t=e.metadata.name;return a().createElement(f.GalleryItem,{key:t},a().createElement(o.QuickStartTile,{quickStart:e,isActive:t===r,status:(0,o.getQuickStartStatus)(i,t)}))})))),a().createElement(f.PageSection,null,a().createElement(f.Divider,null)),a().createElement(f.PageSection,null,a().createElement(f.TextContent,null,a().createElement(f.Text,{component:"h2"},"Documentation"),a().createElement(f.Text,{component:"p"},"Technical information for using the service")),a().createElement(f.Gallery,{className:"co-quick-start-catalog__gallery",hasGutter:!0},t.filter((function(e){var t;return"Documentation"===(null===(t=e.spec.type)||void 0===t?void 0:t.text)})).map((function(e){var t=e.metadata.name;return a().createElement(f.GalleryItem,{key:t},a().createElement(o.QuickStartTile,{quickStart:e,isActive:t===r,status:(0,o.getQuickStartStatus)(i,t)}))})))));return a().createElement(a().Fragment,null,a().createElement(f.PageSection,{variant:f.PageSectionVariants.light},a().createElement(f.TextContent,null,a().createElement(f.Text,{component:"h1"},"Resources"))),a().createElement(f.Divider,{component:"div"}),a().createElement(f.PageSection,{padding:{default:"noPadding"}},a().createElement(f.Toolbar,{usePageInsets:!0},a().createElement(f.ToolbarContent,null,a().createElement(o.QuickStartCatalogFilterSearchWrapper,{onSearchInputChange:function(e){var n=(0,o.filterQuickStarts)(t,e,[],i).sort(c);d(n)}}),a().createElement(o.QuickStartCatalogFilterCountWrapper,{quickStartsCount:m.length})))),a().createElement(f.Divider,{component:"div"}),0===m.length?a().createElement(f.PageSection,null,a().createElement(o.QuickStartCatalogEmptyState,{clearFilters:function(){(0,o.clearQuickStartFilters)(),d(t.sort(c))}})):m.length!==t.length?a().createElement(f.PageSection,null,a().createElement(o.QuickStartCatalog,{quickStarts:m})):v)};const v=function(){return a().createElement(o.QuickStartsLoader,null,(function(e,t){return t?a().createElement(d,{quickStarts:e}):a().createElement(o.LoadingBox,null)}))};const h=function(){var e=a().createElement(f.PageHeader,{logo:a().createElement("div",null,"Quick starts for MAS"),showNavToggle:!0,isNavOpen:!0}),t=a().createElement(f.Nav,{"aria-label":"Nav"},a().createElement(f.NavList,null,a().createElement(f.NavItem,{to:"/"},"Home"))),n=a().createElement(f.PageSidebar,{isNavOpen:!0,nav:t});return a().createElement(f.Page,{header:e,sidebar:n,isManagedSidebar:!0},a().createElement(v,null))};l().render(a().createElement((function(){return r.createElement(m,null,r.createElement(h,null))}),null),document.getElementById("root"))},655:(e,t,n)=>{"use strict";n.d(t,{pi:()=>r,_T:()=>a,mG:()=>i,Jh:()=>l,fl:()=>o});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function i(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{o(r.next(e))}catch(e){i(e)}}function c(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}o((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return l}function o(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}Object.create}}]);
//# sourceMappingURL=142.c25ee57f.js.map