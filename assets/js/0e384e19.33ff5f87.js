"use strict";(self.webpackChunkgpe=self.webpackChunkgpe||[]).push([[671],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),s=r,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9881:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},p="\u306f\u3058\u3081\u306b",m={unversionedId:"intro",id:"intro",title:"\u306f\u3058\u3081\u306b",description:"\u672c\u30d7\u30ed\u30b0\u30e9\u30e0\u306fGross-Pitaevskii\u65b9\u7a0b\u5f0f(GPE)\u3092\u7528\u3044\u3066\u5e0c\u8584\u30dc\u30fc\u30b9\u6c17\u4f53\u306a\u3069\u3092\u5bfe\u8c61\u3068\u3057\u305f\u30dc\u30fc\u30b9\u30fb\u30a2\u30a4\u30f3\u30b7\u30e5\u30bf\u30a4\u30f3\u51dd\u7e2e\u4f53(BEC)\u306e\u30c0\u30a4\u30ca\u30df\u30af\u30b9\u3092\u8a08\u7b97\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3059\u308b\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/gpe-docusaurus/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial",permalink:"/gpe-docusaurus/docs/tutorial"}},d=[{value:"\u52d5\u4f5c\u74b0\u5883",id:"\u52d5\u4f5c\u74b0\u5883",children:[],level:2},{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u65b9\u6cd5",id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u65b9\u6cd5",children:[],level:2},{value:"\u30d3\u30eb\u30c9",id:"\u30d3\u30eb\u30c9",children:[],level:2},{value:"\u30d5\u30a1\u30a4\u30eb\u7fa4\u306e\u8aac\u660e",id:"\u30d5\u30a1\u30a4\u30eb\u7fa4\u306e\u8aac\u660e",children:[{value:"&quot;simulation&quot; \u30d5\u30a9\u30eb\u30c0",id:"simulation-\u30d5\u30a9\u30eb\u30c0",children:[],level:3},{value:"&quot;misc&quot; \u30d5\u30a9\u30eb\u30c0",id:"misc-\u30d5\u30a9\u30eb\u30c0",children:[],level:3}],level:2}],c={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,l.kt)("p",null,"\u672c\u30d7\u30ed\u30b0\u30e9\u30e0\u306fGross-Pitaevskii\u65b9\u7a0b\u5f0f(GPE)\u3092\u7528\u3044\u3066\u5e0c\u8584\u30dc\u30fc\u30b9\u6c17\u4f53\u306a\u3069\u3092\u5bfe\u8c61\u3068\u3057\u305f\u30dc\u30fc\u30b9\u30fb\u30a2\u30a4\u30f3\u30b7\u30e5\u30bf\u30a4\u30f3\u51dd\u7e2e\u4f53(BEC)\u306e\u30c0\u30a4\u30ca\u30df\u30af\u30b9\u3092\u8a08\u7b97\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3059\u308b\u3002"),(0,l.kt)("h2",{id:"\u52d5\u4f5c\u74b0\u5883"},"\u52d5\u4f5c\u74b0\u5883"),(0,l.kt)("p",null,"\u78ba\u8a8d\u3057\u3066\u3044\u308b\u52d5\u4f5c\u74b0\u5883\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3042\u308b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gfortran"),(0,l.kt)("td",{parentName:"tr",align:null},"9.3.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenMP"),(0,l.kt)("td",{parentName:"tr",align:null},"(comes with gfortran)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FFTW"),(0,l.kt)("td",{parentName:"tr",align:null},"3.3.9 (internal)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Silo"),(0,l.kt)("td",{parentName:"tr",align:null},"4.10.2")))),(0,l.kt)("h2",{id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u65b9\u6cd5"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u65b9\u6cd5"),(0,l.kt)("p",null,"GPE Solver\u3001\u304a\u3088\u3073\u30d7\u30ed\u30c3\u30c8\u7528\u5909\u63db\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"wget https://github.com/StellaContrail/gpe/archive/refs/heads/master.zip\nunzip master.zip\n")),(0,l.kt)("p",null,"\u89e3\u51cd\u3057\u305f\u30d5\u30a9\u30eb\u30c0\u306e\u4e2d\u306b\u306f\uff12\u3064\u306e\u30d5\u30a9\u30eb\u30c0\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u304c\u3001\u305d\u308c\u305e\u308c",(0,l.kt)("inlineCode",{parentName:"p"},"simulation"),"\u304cGPE Solver\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"misc"),"\u304c\u30d7\u30ed\u30c3\u30c8\u7528\u5909\u63db\u30d7\u30ed\u30b0\u30e9\u30e0(Silo Converter)\u3092\u6307\u3057\u3066\u3044\u308b\u3002"),(0,l.kt)("h2",{id:"\u30d3\u30eb\u30c9"},"\u30d3\u30eb\u30c9"),(0,l.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u30d3\u30eb\u30c9\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"simulation"),"\u3068",(0,l.kt)("inlineCode",{parentName:"p"},"misc"),"\u306e\u3069\u3061\u3089\u3067\u3082\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3002\n\u5404\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5165\u3063\u3066",(0,l.kt)("inlineCode",{parentName:"p"},"make"),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308c\u3070\u826f\u3044\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"cd master\n./simulation/make\n./misc/make\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Silo v4.10.2\u3067\u306f\u30e9\u30a4\u30d6\u30e9\u30ea\u30d5\u30a1\u30a4\u30eb",(0,l.kt)("inlineCode",{parentName:"p"},"silo.inc"),"\u304c\u56fa\u5b9a\u5f62\u5f0f\u3067\u66f8\u304b\u308c\u3066\u304a\u308a\u3001\u81ea\u7531\u5f62\u5f0f\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3068\u306f\u4e92\u63db\u6027\u304c\u306a\u3044\u3002\n\u30b3\u30f3\u30d1\u30a4\u30eb\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"silo.inc"),"\u5185\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"C"),"\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\u3067\u7f6e\u304d\u63db\u3048\u3066\u3084\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"))),(0,l.kt)("h2",{id:"\u30d5\u30a1\u30a4\u30eb\u7fa4\u306e\u8aac\u660e"},"\u30d5\u30a1\u30a4\u30eb\u7fa4\u306e\u8aac\u660e"),(0,l.kt)("h3",{id:"simulation-\u30d5\u30a9\u30eb\u30c0"},'"simulation" \u30d5\u30a9\u30eb\u30c0'),(0,l.kt)("p",null,"GPE Solver\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0"),(0,l.kt)("p",null,"GPE\u306e\u5b9a\u5e38\u72b6\u614b\u3084\u6642\u9593\u767a\u5c55\u3092\u8a08\u7b97\u3059\u308b\u3002\n(",(0,l.kt)("a",{parentName:"p",href:"https://stellacontrail.github.io/gpe-doxygen/gpe_solver/html/"},"GPE Solver\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u89e3\u8aac"),")"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"gpe.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30b0\u30e9\u30e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"setting.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7cfb\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u30e2\u30b8\u30e5\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mathf.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u5b66\u7684\u306a\u64cd\u4f5c\u3092\u307e\u3068\u3081\u305f\u30e2\u30b8\u30e5\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"io.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"File I/O\u64cd\u4f5c\u3092\u884c\u3046\u30e2\u30b8\u30e5\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"constants.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u5165\u51fa\u529b\u3092\u884c\u3046\u30e2\u30b8\u30e5\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"config.txt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"makefile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30d1\u30a4\u30eb\u7528\u30d5\u30a1\u30a4\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"plot.gnuplot"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30fc\u30bf\u53ef\u8996\u5316\u30b9\u30af\u30ea\u30d7\u30c8")))),(0,l.kt)("h3",{id:"misc-\u30d5\u30a9\u30eb\u30c0"},'"misc" \u30d5\u30a9\u30eb\u30c0'),(0,l.kt)("p",null,"Silo Converter\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0"),(0,l.kt)("p",null,"GPE Solver\u306b\u3088\u3063\u3066\u51fa\u529b\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092Silo\u5f62\u5f0f\u306b\u5909\u63db\u3057\u3066\u4fdd\u5b58\u3059\u308b\u3002\n(",(0,l.kt)("a",{parentName:"p",href:"https://stellacontrail.github.io/gpe-doxygen/silo_converter/html/"},"Silo Converter\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u89e3\u8aac"),")"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"silo_converter.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30b0\u30e9\u30e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mathf.f90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u5b66\u7684\u306a\u64cd\u4f5c\u3092\u307e\u3068\u3081\u305f\u30e2\u30b8\u30e5\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"makefile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30d1\u30a4\u30eb\u7528\u30d5\u30a1\u30a4\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"output"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u51fa\u529b\u5148\u30d5\u30a9\u30eb\u30c0")))))}u.isMDXComponent=!0}}]);