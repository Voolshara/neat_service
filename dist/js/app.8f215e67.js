(function(){"use strict";var e={2243:function(e,n,t){var o=t(9242),i=t(3396);function a(e,n,t,o,a,r){const s=(0,i.up)("NavBar"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s),(0,i.Wm)(u)])}var r=t.p+"img/logo_full.bffffa2a.png";const s={key:0,class:"NavBar-mobile animate__animated animate__fadeInDown"},u=(0,i._)("img",{class:"Logo",src:r,alt:""},null,-1),c=(0,i._)("div",{class:"menu-icon-element"},null,-1),l=(0,i._)("div",{class:"menu-icon-element"},null,-1),d=(0,i._)("div",{class:"menu-icon-element"},null,-1),f=[c,l,d],v=(0,i._)("div",{class:"menu-icon-element-black"},null,-1),m=(0,i._)("div",{class:"menu-icon-element-black"},null,-1),p=(0,i._)("div",{class:"menu-icon-element-black"},null,-1),h=[v,m,p],b={key:2,class:"MenuDropDown-container"},g={key:1,class:"NavBar animate__animated animate__fadeInDown"},w=(0,i._)("img",{class:"Logo",src:r,alt:""},null,-1),k={key:0,class:"Nav Nav-white"},_={key:1,class:"Nav Nav-black"};function y(e,n,t,o,a,r){const c=(0,i.up)("router-link"),l=(0,i.up)("AdditionalNav");return r.isMobile()?((0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(c,{to:"/"},{default:(0,i.w5)((()=>[u])),_:1}),this.$store.state.IsColorNavBlack?((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:n[0]||(n[0]=(...e)=>r.openMenu&&r.openMenu(...e)),class:"menu-icon"},f)):((0,i.wg)(),(0,i.iD)("div",{key:1,onClick:n[1]||(n[1]=(...e)=>r.openMenu&&r.openMenu(...e)),class:"menu-icon"},h)),a.isOpenMenu?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(l)])):(0,i.kq)("",!0)])):((0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)(c,{to:"/"},{default:(0,i.w5)((()=>[w])),_:1}),this.$store.state.IsColorNavBlack?((0,i.wg)(),(0,i.iD)("div",k,[(0,i.Wm)(c,{to:"/dev",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("Разработка")])),_:1}),(0,i.Wm)(c,{to:"/position",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("Системы позиционирования")])),_:1}),(0,i.Wm)(c,{to:"/iot",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("IoT")])),_:1}),(0,i.Wm)(c,{to:"/about",class:"special"},{default:(0,i.w5)((()=>[(0,i.Uk)("Контакты")])),_:1})])):((0,i.wg)(),(0,i.iD)("div",_,[(0,i.Wm)(c,{to:"/dev",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("Разработка")])),_:1}),(0,i.Wm)(c,{to:"/position",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("Системы позиционирования")])),_:1}),(0,i.Wm)(c,{to:"/iot",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("IoT")])),_:1}),(0,i.Wm)(c,{to:"/about",class:"special-white"},{default:(0,i.w5)((()=>[(0,i.Uk)("Контакты")])),_:1})]))]))}const N=e=>((0,i.dD)("data-v-7c3c7b88"),e=e(),(0,i.Cn)(),e),C={class:"NavDropDown"},O=N((()=>(0,i._)("div",{class:"topSpace"},null,-1))),D={class:"NavContainer"};function M(e,n,t,o,a,r){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",C,[O,(0,i._)("div",D,[(0,i.Wm)(s,{to:"/dev",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("Разработка")])),_:1}),(0,i.Wm)(s,{to:"/position",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("Системы позиционирования")])),_:1}),(0,i.Wm)(s,{to:"/iot",class:"base"},{default:(0,i.w5)((()=>[(0,i.Uk)("IoT")])),_:1}),(0,i.Wm)(s,{to:"/about",class:"special"},{default:(0,i.w5)((()=>[(0,i.Uk)("Контакты")])),_:1})])])}var W={name:"AdditionalNav"},B=t(89);const A=(0,B.Z)(W,[["render",M],["__scopeId","data-v-7c3c7b88"]]);var E=A,T={name:"NavBar",components:{AdditionalNav:E},data(){return{windowHeight:window.innerHeight,isOpenMenu:!1}},mounted(){this.$nextTick((()=>{window.addEventListener("resize",this.onResize)}))},beforeUnmount(){window.removeEventListener("resize",this.onResize)},methods:{onResize(){this.windowHeight=window.innerHeight},openMenu(){this.isOpenMenu=!this.isOpenMenu},isMobile(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}};const U=(0,B.Z)(T,[["render",y]]);var I=U,S={name:"App",components:{NavBar:I}};const j=(0,B.Z)(S,[["render",a]]);var P=j,L=t(2483);const x=[{path:"/",component:()=>t.e(208).then(t.bind(t,2208))},{path:"/dev",component:()=>t.e(171).then(t.bind(t,9890))},{path:"/position",component:()=>t.e(651).then(t.bind(t,8651))},{path:"/iot",component:()=>t.e(459).then(t.bind(t,2060))},{path:"/about",component:()=>t.e(715).then(t.bind(t,6715))}],z=(0,L.p7)({history:(0,L.PO)(),routes:x});var H=z,Z=t(65),F=t(6026),q=t(9408);const R=(0,Z.MT)({state(){return{IsColorNavBlack:!0}},mutations:{SetBlackNav(e){e.IsColorNavBlack=!0},SetWhiteNav(e){e.IsColorNavBlack=!1}}}),$=(0,o.ri)(P);$.use(H),$.use(R),$.use(F.Z),$.use(q.Z),$.mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,a){if(!o){var r=1/0;for(l=0;l<e.length;l++){o=e[l][0],i=e[l][1],a=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<r&&(r=a));if(s){e.splice(l--,1);var c=i();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,i,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{171:"8cdd45c0",208:"05edffde",459:"93f80fad",651:"e5b7a3bc",715:"5b387470"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{171:"41311d18",459:"2c0919f9"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="neat_service:";t.l=function(o,i,a,r){if(e[o])e[o].push(i);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=o),e[o]=[i];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(v);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)t();else{var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=n,document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=t[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===n))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){i=r[o],a=i.getAttribute("data-href");if(a===e||a===n)return i}},o=function(o){return new Promise((function(i,a){var r=t.miniCssF(o),s=t.p+r;if(n(r,s))return i();e(o,s,i,a)}))},i={143:0};t.f.miniCss=function(e,n){var t={171:1,459:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=o(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=a);var r=t.p+t.u(n),s=new Error,u=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,i[1](s)}};t.l(r,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,a,r=o[0],s=o[1],u=o[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(u)var l=u(t)}for(n&&n(o);c<r.length;c++)a=r[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkneat_service"]=self["webpackChunkneat_service"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2243)}));o=t.O(o)})();
//# sourceMappingURL=app.8f215e67.js.map