"use strict";(self.webpackChunkgpe=self.webpackChunkgpe||[]).push([[994],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,u=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(u,r(r({ref:e},o),{},{components:t})):n.createElement(u,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},6247:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return o},toc:function(){return c},default:function(){return k}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),r=["components"],p={sidebar_position:1},i="\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6d41\u308c",l={unversionedId:"GPE Solver/flow",id:"GPE Solver/flow",title:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6d41\u308c",description:"GPE Solver\u306e\u57fa\u672c\u7684\u306a\u52d5\u4f5c\u306e\u6d41\u308c\u3092\u8aac\u660e\u3059\u308b\u3002",source:"@site/docs/GPE Solver/flow.md",sourceDirName:"GPE Solver",slug:"/GPE Solver/flow",permalink:"/gpe-docusaurus/docs/GPE Solver/flow",editUrl:"https://github.com/StellaContrail/gpe-docusaurus/docs/GPE Solver/flow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/gpe-docusaurus/docs/tutorial"},next:{title:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",permalink:"/gpe-docusaurus/docs/GPE Solver/config"}},o={},c=[{value:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8",id:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Solve steady state",id:"solve-steady-state",level:3},{value:"Solve time development",id:"solve-time-development",level:3},{value:"Finalization",id:"finalization",level:3}],N={toc:c};function k(a){var e=a.components,p=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},N,p,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6d41\u308c"},"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6d41\u308c"),(0,m.kt)("p",null,"GPE Solver\u306e\u57fa\u672c\u7684\u306a\u52d5\u4f5c\u306e\u6d41\u308c\u3092\u8aac\u660e\u3059\u308b\u3002"),(0,m.kt)("h2",{id:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8"},"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8"),(0,m.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6d41\u308c\u3067\u5b9f\u884c\u3055\u308c\u308b\u3002\n",(0,m.kt)("img",{loading:"lazy",alt:"Flowchart",src:t(1865).Z,width:"747",height:"601"})),(0,m.kt)("h3",{id:"initialization"},"Initialization"),(0,m.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u306f\u3001\u7cfb\u306e\u5916\u5834\u30dd\u30c6\u30f3\u30b7\u30e3\u30eb\u306e\u8a2d\u5b9a\u3084trial wavefunction\u306e\u8a2d\u5b9a\u306a\u3069\u3092\u884c\u3046\u3002"),(0,m.kt)("p",null,"\u307e\u305a",(0,m.kt)("inlineCode",{parentName:"p"},"config.txt"),"\u3088\u308a\u8a2d\u5b9a\u3092\u8aad\u307f\u8fbc\u307f\u3001allocatable variables\u3092\u30e1\u30e2\u30ea\u306b\u5272\u308a\u5f53\u3066\u308b\u3002\n\u305d\u306e\u5f8c\u3001\u5916\u5834\u30dd\u30c6\u30f3\u30b7\u30e3\u30eb/trial wavefunction/\u4f4d\u76f8\u306e\u56de\u8ee2\uff08\u91cf\u5b50\u6e26\u306e\u751f\u6210\uff09\u306a\u3069\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u3001\n\u5b9a\u5e38\u72b6\u614b\u3092\u89e3\u304f\u969b\u306e\u8a08\u7b97\u74b0\u5883\u3092\u6574\u3048\u308b\u3002"),(0,m.kt)("p",null,"\u8a08\u7b97\u7d50\u679c\u3092\u683c\u7d0d\u3059\u308b\u30d5\u30a9\u30eb\u30c0\u306f\u3053\u306e\u6642\u70b9\u3067\u4f5c\u6210\u3055\u308c\u3001\n\u30d5\u30a9\u30eb\u30c0\u540d\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"data_HHmmss"),"\u3068\u3044\u3046\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3001\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u4f5c\u6210\u3055\u308c\u308b\u3002\n\u307e\u305f\u3001\u3053\u306e\u3068\u304d\u306b\u5916\u5834\u30dd\u30c6\u30f3\u30b7\u30e3\u30eb\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"potential.bin"),"\u3001\ntrial wavefunction\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"wf_trial.bin"),"\u3068\u3044\u3046\u540d\u3067\u4fdd\u5b58\u3055\u308c\u308b\u3002\n\u307e\u305f\u3001\u8aad\u307f\u8fbc\u3093\u3060\u8a2d\u5b9a\u30c7\u30fc\u30bf\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"config.dat"),"\u3068\u3057\u3066ASCII\u5f62\u5f0f\u3067\u30b3\u30d4\u30fc\u3055\u308c\u3066\u3044\u308b\u3002"),(0,m.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"\u5916\u5834\u30dd\u30c6\u30f3\u30b7\u30e3\u30eb\u306e\u30c7\u30fc\u30bf\u306f\u3053\u306e\u6642\u306b",(0,m.kt)("strong",{parentName:"p"},"\u4e00\u5ea6\u3060\u3051"),"\u751f\u6210\u3055\u308c\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u5b9f\u6642\u9593\u767a\u5c55\u306a\u3069\u3067\u5f8c\u5929\u7684\u306b\u5909\u5316\u3057\u305f\u5916\u5834\u30dd\u30c6\u30f3\u30b7\u30e3\u30eb\u306e\u69d8\u5b50\u306a\u3069\u306f\u8a18\u9332\u3055\u308c\u306a\u3044\u3002"))),(0,m.kt)("h3",{id:"solve-steady-state"},"Solve steady state"),(0,m.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u306f\u3001\u7cfb\u306e\u865a\u6642\u9593\u767a\u5c55\u3092\u884c\u3063\u3066\u5b9a\u5e38\u72b6\u614b\u306e\u89e3\u3092\u6c42\u3081\u308b\u3002"),(0,m.kt)("p",null,"\u307e\u305a\u7cfb\u3092\u6642\u9593\u767a\u5c55\u3055\u305b\u308b\u30b5\u30d6\u30eb\u30fc\u30c1\u30f3\u3067\u3042\u308b",(0,m.kt)("inlineCode",{parentName:"p"},"evolve()"),"\u3092\u547c\u3073\u51fa\u3057\u3001\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,m.kt)("mi",{parentName:"mrow"},"\u03c4")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta \\tau")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"))))),"\u3060\u3051\u865a\u6642\u9593\u65b9\u5411\u306b\u6642\u9593\u767a\u5c55\u3055\u305b\u308b\u3002\n\u5404\u6642\u523b\u30b9\u30c6\u30c3\u30d7\u3067\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"energy_imag.bin"),"\u306b\u7cfb\u306e\u72b6\u614b\u91cf\u304c\u8a18\u9332\u3055\u308c\u308b\u3002"),(0,m.kt)("p",null,"\u7cfb\u304c\u5b9a\u5e38\u72b6\u614b\u306b\u53ce\u675f\u3057\u305f\u306e\u304b\u3092\u5224\u65ad\u3059\u308b\u305f\u3081\u3001\n\u305d\u306e\u76f4\u5f8c\u306b\u53ce\u675f\u6761\u4ef6\u3068\u7cfb\u306e\u72b6\u614b\u304c\u7167\u3089\u3057\u5408\u308f\u3055\u308c\u308b\u3002\n\u3053\u306e\u3068\u304d\u53ce\u675f\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5834\u5408\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u7d50\u679c\u306e\u51fa\u529b\u3078\u3068\u79fb\u884c\u3059\u308b\u3002\n\u53ce\u675f\u3057\u306a\u3044\u5834\u5408\u306f\u865a\u6642\u523b",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"\u03c4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"\u03c4"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\tau, \\tau - 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"\u306b\u304a\u3051\u308b\u5bc6\u5ea6\u3092\u6df7\u305c\u3066\n\u3055\u3089\u306a\u308b\u865a\u6642\u9593\u767a\u5c55\u3092\u884c\u3046\u3002"),(0,m.kt)("p",null,"\u89e3\u306e\u632f\u52d5\u3092\u6291\u3048\u308b\u305f\u3081\u306b\u306f\u3001\u7cfb\u306e\u30b9\u30c6\u30c3\u30d7\u3054\u3068\u306e\u5909\u5316\u3092\u5fae\u5c0f\u306b\u6291\u3048\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\n\u65b9\u6cd5\u8ad6\u3068\u3057\u3066\u306f",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,m.kt)("mi",{parentName:"mrow"},"\u03c4")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta \\tau")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"))))),"\u3092\u5c0f\u3055\u304f\u3059\u308b\u65b9\u6cd5\u3001\u305d\u3057\u3066\u5bc6\u5ea6\u3092\u6df7\u305c\u308b\u65b9\u6cd5\u304c\u3042\u308b\u3002\n\u3053\u3053\u3067\u306f\u5f8c\u8005\u306e\u624b\u7d9a\u304d\u3092\u884c\u3063\u3066\u304a\u308a\u3001\u865a\u6642\u523b",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"\u03c4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"\u03c4"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\tau, \\tau - 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"\u306b\u304a\u3051\u308b\u5bc6\u5ea6\u3092\u6df7\u305c\u3066\u3044\u308b\u3002\n\u7cfb\u306e\u72b6\u614b\u304c\u53ce\u675f\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u7cfb\u306f\u3055\u3089\u306a\u308b\u865a\u6642\u9593\u767a\u5c55\u3092\u884c\u3046\u3002"),(0,m.kt)("p",null,"\u865a\u6642\u9593\u767a\u5c55\u3067\u6c42\u3081\u305f\u89e3\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"wf_imag.bin"),"\u3001\u304a\u3088\u3073",(0,m.kt)("inlineCode",{parentName:"p"},"wf_imag_raw.bin"),"\u306b\u4fdd\u5b58\u3055\u308c\u308b\u3002\n\u524d\u8005\u306fSilo Converter\u3067\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306e\u5f62\u5f0f\u306b\u306a\u3063\u3066\u304a\u308a\u3001\n\u5f8c\u8005\u306fFortran\u3067\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306e\u5f62\u5f0f\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),(0,m.kt)("h3",{id:"solve-time-development"},"Solve time development"),(0,m.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u306f\u3001\u7cfb\u306e\u5b9f\u6642\u9593\u767a\u5c55\u3092\u884c\u3063\u3066\u5404\u6642\u523b\u30b9\u30c6\u30c3\u30d7\u306e\u7cfb\u306e\u72b6\u614b\u3092\u51fa\u529b\u3059\u308b\u3002"),(0,m.kt)("p",null,"\u307e\u305a\u7cfb\u3092\u6642\u9593\u767a\u5c55\u3055\u305b\u308b\u30b5\u30d6\u30eb\u30fc\u30c1\u30f3\u3067\u3042\u308b",(0,m.kt)("inlineCode",{parentName:"p"},"evolve()"),"\u3092\u547c\u3073\u51fa\u3057\u3001\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta t")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),"\u3060\u3051\u5b9f\u6642\u9593\u65b9\u5411\u306b\u6642\u9593\u767a\u5c55\u3055\u305b\u308b\u3002\n\u865a\u6642\u9593\u767a\u5c55\u3068\u7570\u306a\u308b\u70b9\u306f\u3001Feedback\u52b9\u679c\u3084\u56de\u8ee2\u89d2\u901f\u5ea6",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Omega")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u03a9"))))),"\u3092\u9010\u6b21\u7684\u306b\u66f4\u65b0\u3057\u3066\u3044\u308b\u3068\u3044\u3046\u70b9\u3067\u3042\u308b\u3002"),(0,m.kt)("p",null,"\u5404\u6642\u523b\u30b9\u30c6\u30c3\u30d7\u3067\u306f",(0,m.kt)("inlineCode",{parentName:"p"},"energy_real.bin"),"\u306b\u7cfb\u306e\u72b6\u614b\u91cf\u304c\u8a18\u9332\u3055\u308c\u3001\n",(0,m.kt)("inlineCode",{parentName:"p"},"wf_real/frame_XXX.bin"),"\u306b\u79e9\u5e8f\u95a2\u6570\u306e\u30c7\u30fc\u30bf\u304c\u3001\n",(0,m.kt)("inlineCode",{parentName:"p"},"flux_real/frame_XXX.bin"),"\u306b\u78ba\u7387\u6d41\u5bc6\u5ea6\u306e\u30c7\u30fc\u30bf\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u3002"),(0,m.kt)("h3",{id:"finalization"},"Finalization"),(0,m.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u306f\u3001Initialization\u3067\u5272\u308a\u5f53\u3066\u305fallocatable variables\u3092\u30e1\u30e2\u30ea\u304b\u3089\u89e3\u653e\u3059\u308b\u3002"))}k.isMDXComponent=!0},1865:function(a,e,t){e.Z=t.p+"assets/images/flowchart-8b718a0ca9dc011ba4b10e43951275c4.png"}}]);