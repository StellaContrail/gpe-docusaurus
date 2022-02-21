"use strict";(self.webpackChunkgpe=self.webpackChunkgpe||[]).push([[554],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return u}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),d=l(t),u=s,N=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return t?n.createElement(N,i(i({ref:a},o),{},{components:t})):n.createElement(N,i({ref:a},o))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,i[1]=m;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6351:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return d}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),i=["components"],m={sidebar_position:2},p="Tutorial",l={unversionedId:"tutorial",id:"tutorial",title:"Tutorial",description:"\u672c\u30d7\u30ed\u30b0\u30e9\u30e0\u306fGPE\u306e\u6642\u9593\u767a\u5c55\u3092\u8a08\u7b97\u3059\u308bsimulation\u3001",source:"@site/docs/tutorial.md",sourceDirName:".",slug:"/tutorial",permalink:"/gpe-docusaurus/docs/tutorial",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/gpe-docusaurus/docs/intro"},next:{title:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6d41\u308c",permalink:"/gpe-docusaurus/docs/GPE Solver/flow"}},o=[{value:"Demo",id:"demo",children:[{value:"\u8a08\u7b97\u306e\u5b9f\u884c",id:"\u8a08\u7b97\u306e\u5b9f\u884c",children:[],level:3},{value:"\u7d50\u679c\u306e\u63cf\u753b",id:"\u7d50\u679c\u306e\u63cf\u753b",children:[],level:3},{value:"VisIt\u3067\u306e\u53ef\u8996\u5316",id:"visit\u3067\u306e\u53ef\u8996\u5316",children:[],level:3}],level:2}],c={toc:o};function d(e){var a=e.components,m=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,m,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"\u672c\u30d7\u30ed\u30b0\u30e9\u30e0\u306fGPE\u306e\u6642\u9593\u767a\u5c55\u3092\u8a08\u7b97\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"simulation"),"\u3001\n\u305d\u3057\u3066\u8a08\u7b97\u7d50\u679c\u3092VisIt\u7528\u306e\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),"\u306b\u5206\u3051\u3089\u308c\u308b\u3002"),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"\u52d5\u4f5c\u78ba\u8a8d\u3068\u3057\u3066\u30012\u6b21\u5143\u3067\u91cf\u5b50\u6e26\u304c\u7cfb\u306e\u4e2d\u5fc3\u306b\u5b58\u5728\u3057\u3066\u3044\u308b\u3088\u3046\u306a\u72b6\u614b\u3092\u6c42\u3081\u308b\u3002"),(0,r.kt)("h3",{id:"\u8a08\u7b97\u306e\u5b9f\u884c"},"\u8a08\u7b97\u306e\u5b9f\u884c"),(0,r.kt)("p",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u8a08\u7b97\u8a2d\u5b9a\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"simulation/config.txt"),"\u3067\u884c\u3046\u3002\n\u3053\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7de8\u96c6\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/simulation/config.txt"',title:'"/simulation/config.txt"'},"# Configuration\n200 200 1       # dimension\n12000           # particle number\n0.1             # space step\n0.001 0.004     # time step in imaginary/real time development\n0.3             # density = x*density_new + (1-x)*density_old in imaginary time development\n1               # calculate real time development (1:enabled, 0:disabled)\n1000 100        # max iterations / iterations to skip over when writing in real time development\n1               # predictor-corrector (1:enabled, 0:disabled)\n0.05            # dissipation parameter (typically 0~0.05)\n0.00 0.00       # cranking speed in imaginary/real time development\n0.00            # noise intensity of cranking speed (0~1, typically 0.01)\n8.5 200         # trap radius/strength\n0               # trap type (0:CYLINDER/CIRCLE, 1:HO, 2:BULK, 3:SPHERE)\n-1              # ratio of radius of the hole/core to the radius of the trap, R_core/R_trap (0.0/negative:disable)\n1               # initial vortex (1:enabled, 0:disabled)\n0.0 0.0         # initial vortex position (x, y)\n-1              # initial vortex circulation\n0               # pinning site (1:enabled, 0:disabled)\n0.0 0.0 0.0     # pinning site position (x, y, z)\n30 4            # pinning site strength/delta (higher for smaller in size)\n0               # pinning grid (0:None, 1:SC, 2:BCC)\n2.0             # pin separation distance (negative for automated tuning)\n11 66.6 4       # grid size (Odd number)/strength/delta\n-1              # dynamically created vortex (iteration; negative=disable)\n1.2 1.2         # dynamically created vortex position (x, y)\n-1              # dynamically created vortex circulation\n-1              # dynamically created sound wave (iteration; negative=disable)\n0.0 1.7 0.0     # dynamically created sound wave starting point (x, y, z)\n60 4            # dynamically created sound wave strength/delta (higher for smaller size)\n-1              # feedback is enabled from this iteration (negative=disable)\n0.06            # external spin-down torque (positive for spin-down)\n15.0            # moment of inertia of the container\n-1              # external spin-down torque is enabled from this iteration (negative=disable)\n")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u306f\u3001\u7cfb\u3092",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"200"),(0,r.kt)("mo",{parentName:"mrow"},"\xd7"),(0,r.kt)("mn",{parentName:"mrow"},"200")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"200 \\times 200")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"200"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"200"))))),"\u306e\u30e1\u30c3\u30b7\u30e5\u306b\u3001\u7a7a\u9593\u3068\u6642\u523b\u306e\u523b\u307f\u5e45\u3092\u305d\u308c\u305e\u308c",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0.2"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0.004")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta x = 0.2, \\Delta t = 0.004")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.2"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.004"))))),"\u306b\u8a2d\u5b9a\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"Config",src:t(3693).Z,width:"538",height:"397"})),(0,r.kt)("p",null,"\u9589\u3058\u8fbc\u3081\u30c8\u30e9\u30c3\u30d7\u306f\u5186\u5f62\u306e\u3082\u306e\u3092\u4eee\u5b9a\u3057\u3066\u304a\u308a\u3001\u534a\u5f84\u304c",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"R"),(0,r.kt)("mn",{parentName:"msub"},"0")),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"8.5")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R_0 = 8.5")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"8.5"))))),"\u306e\u5927\u304d\u3055\u3092\u6301\u3064\u3002\n\u91cf\u5b50\u6e26\u306f\u53f3\u56de\u308a\u306e\u5faa\u74b0\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u5bb9\u5668\u306e\u4e2d\u5fc3\u306b\u8a2d\u7f6e\u3055\u308c\u3066\u3044\u308b\u3002\n\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u66f8\u304d\u7d42\u3048\u305f\u3089\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3001\u4e0a\u8a18\u306e\u8a2d\u5b9a\u306e\u3082\u3068\u3067\u8a08\u7b97\u3092\u884c\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"cd ./master/simulation/\n./a.out\n")),(0,r.kt)("p",null,"\u8a08\u7b97\u306b\u306f\u6570\u5341\u5206\u304b\u304b\u308b\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u305f\u5f8c\u306b\u8a08\u7b97\u304c\u5b8c\u4e86\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title="bash"'}," OpenMP is valid.\n OpenMP is successfully initiated.\n FFTW_THREADS = 3, OMP_THREADS = 3, FFTW_CODE = 1\n OpenMPI is invalid.\n output folder: data_XXXXXX\nConfiguration ---------------------------------------------------\n Nx Ny Nz            (Dimension) = 200 200 1\n dh                 (Space step) = .1000000\n dt (IMAG) (REAL)    (Time step) = .0010000 .0040000\n 2xmax 2ymax 2zmax    (Box size) = 19.90 19.90 .00\n R0                (Trap radius) = 8.50\n Number of particles             = 2000\n------------------------------------------------------------------\n Imaginary time evolution\n    1000 iterations have passed, \u0394E=.00000000\n    2000 iterations have passed, \u0394E=.00000000\n    3000 iterations have passed, \u0394E=.00000000\n solution converged at iter=3000, \u0394E=.00000000\n calculation took 0 h 1 m 40 s\n - Number of particles = 2000.00\n - Chemical potential  = 11.97\n - Total energy        = 12580.69\n - <L_i>               = .00,.00,-1.00\n\n Real time evolution\n Iteration=0/1000 ( .00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=100/1000 ( 10.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=200/1000 ( 20.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=300/1000 ( 30.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=400/1000 ( 40.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=500/1000 ( 50.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=600/1000 ( 60.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=700/1000 ( 70.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=800/1000 ( 80.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=900/1000 ( 90.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n Iteration=1000/1000 ( 100.00% )  E=12580.69 N=2000.00 \u03a9=.00 Lx,Ly,Lz=.00,.00,-1.00\n calculation took 0 h 6 m 49 s\n - Number of particles = 2000.00\n - Chemical potential  = 11.97\n - Total energy        = 12580.69\n - <L_i>               = .00,.00,-1.00\n Saved data into: data_XXXXXX\n\n FFTW variables deallocated\n Temporal variables deallocated\n Simulation finished successfully\n")),(0,r.kt)("p",null,"\u3053\u3053\u3067\u30ed\u30b0\u306e\u4e0a\u90e8\u3068\u4e0b\u90e8\u306b\u305d\u308c\u305e\u308c\u66f8\u3044\u3066\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"data_XXXXXX"),"\u304c\u51fa\u529b\u30d5\u30a9\u30eb\u30c0\u3067\u3042\u308a\u3001\n\u5b9f\u884c\u3057\u305f\u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u968e\u5c64\u306b\u5b58\u5728\u3059\u308b\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"XXXXXX"),"\u306e\u90e8\u5206\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"HHmmss"),"\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u8a18\u8ff0\u3055\u308c\u3066\u304a\u308a\u3001\n\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u305f\u6642\u523b\u304c\u8a18\u9332\u3055\u308c\u308b\u3002"),(0,r.kt)("h3",{id:"\u7d50\u679c\u306e\u63cf\u753b"},"\u7d50\u679c\u306e\u63cf\u753b"),(0,r.kt)("p",null,"\u8a08\u7b97\u7d50\u679c\u306f\u30d0\u30a4\u30ca\u30ea\u3067\u51fa\u529b\u3055\u308c\u3066\u304a\u308a\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3055\u3048\u5b88\u308c\u3070gnuplot\u306a\u3069\u306e\u6c4e\u7528\u7684\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u3082\u51fa\u529b\u53ef\u80fd\u3067\u3042\u308b\u3002\n\u3057\u304b\u3057\u3001\u672c\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306fVisIt\u306b\u6700\u9069\u5316\u3055\u308c\u305fSilo\u3068\u3088\u3070\u308c\u308b\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\nVisIt\u3067\u306e\u8a08\u7b97\u7d50\u679c\u306e\u63cf\u753b\u3092\u884c\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"misc"),"\u30d5\u30a9\u30eb\u30c0\u5185\u306e\u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u3092\u5b9f\u884c\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="bash"',title:'"bash"'},"cd ./master/misc\n./a.out\n")),(0,r.kt)("p",null,"\u6b21\u306b\u5165\u529b\u304c\u6c42\u3081\u3089\u308c\u308b\u304c\u3001\u3053\u3053\u3067\u5148\u7a0b\u78ba\u8a8d\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"p"},"data_XXXXXX"),"\u3092\u5165\u529b\u3059\u308b\u3002\n\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u81ea\u52d5\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"data_XXXXXX"),"\u5185\u304b\u3089\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3001\n\u500b\u5225\u306e\u8a08\u7b97\u7d50\u679c\u306b\u5408\u3063\u305f\u5909\u63db\u51e6\u7406\u3092\u884c\u3046\u3002"),(0,r.kt)("p",null,"\u5909\u63db\u306f\u6b21\u306e\u3088\u3046\u306a\u30ed\u30b0\u3092\u51fa\u529b\u3057\u305f\u5f8c\u306b\u5b8c\u4e86\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Silo Converter ----------------------------\n converts simulation result into silo files\n\n Input filename?: data_XXXXXX\n Input folder set as ../simulation/data_XXXXXX/latest/\n Specified dimension is: 200x200x1\n Hit Enter to continue or Ctrl+C to exit...\n Processing the simulation result\n 0/10\n 10/10\n Finished\n Data saved into: ./output/data_XXXXXX\n Finalizing\n-------------------------------------------\n")),(0,r.kt)("p",null,"\u30ed\u30b0\u306e\u6700\u5f8c\u306b\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"./output/data_XXXXXX"),"\u304c\u5909\u63db\u5f8c\u306e\u30c7\u30fc\u30bf\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0\u3092\u6307\u3057\u3066\u3044\u308b\u3002\nVisIt\u3067\u63cf\u753b\u3059\u308b\u969b\u306b\u3053\u306e\u30d1\u30b9\u304c\u5fc5\u8981\u3068\u306a\u308b\u305f\u3081\u3001\u30e1\u30e2\u3057\u3066\u304a\u304f\u3002"),(0,r.kt)("h3",{id:"visit\u3067\u306e\u53ef\u8996\u5316"},"VisIt\u3067\u306e\u53ef\u8996\u5316"),(0,r.kt)("p",null,"VisIt\u3067\u8a08\u7b97\u7d50\u679c\u3092\u63cf\u753b\u3059\u308b\u3002\n\u4f7f\u7528\u3057\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306fVisIt v3.1.4\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,"VisIt\u3092\u7acb\u3061\u4e0a\u3052\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\uff12\u3064\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u3002\n\u5de6\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u4e0a\u90e8\u306b\u3042\u308b",(0,r.kt)("strong",{parentName:"p"},"Open"),"\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"Visit1",src:t(1589).Z,width:"1535",height:"1042"})),(0,r.kt)("p",null,"\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30e2\u30fc\u30c0\u30eb\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u3001\n\u63cf\u753b\u3059\u308b\u30c7\u30fc\u30bf\u307e\u3067\u306e\u30d1\u30b9\u3092\u805e\u3044\u3066\u304f\u308b\u3002\n\u3053\u3053\u3067\u5148\u7a0b\u5909\u63db\u3057\u305f\u30d5\u30a9\u30eb\u30c0\u306e\u30d1\u30b9\u3092\u6307\u5b9a\u3057\u3001",(0,r.kt)("strong",{parentName:"p"},"OK"),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"Visit2",src:t(2632).Z,width:"545",height:"467"})),(0,r.kt)("p",null,"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f\u306b\u4e26\u5217\u51e6\u7406\u3092\u7528\u3044\u308b\u304b\u3092\u805e\u304b\u308c\u308b\u304c\u9078\u629e\u306f\u3069\u3061\u3089\u3082\u3067\u3082\u3088\u3044\u3002\n\u6b21\u306b\u5de6\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u4e2d\u90e8\u304b\u3089",(0,r.kt)("strong",{parentName:"p"},"Add > Pseudocolor > density"),"\u3068\u9078\u629e\u3059\u308b\u3002\n\u6700\u5f8c\u306b",(0,r.kt)("strong",{parentName:"p"},"Draw"),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u53f3\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u8a08\u7b97\u7d50\u679c\u304c\u63cf\u753b\u3055\u308c\u308b\u3002"),(0,r.kt)("p",null,"\u63cf\u753b\u7d50\u679c\u306f\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3042\u308b\u3002\n",(0,r.kt)("img",{alt:"Density",src:t(6899).Z,width:"682",height:"681"})),(0,r.kt)("p",null,"\u307e\u305f\u3001\u5de6\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u3042\u308b",(0,r.kt)("strong",{parentName:"p"},"\u25b6"),"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3053\u3068\u3067\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u308b\u3002\n\u4eca\u56de\u306e\u8a08\u7b97\u3067\u306f1+1000/100=11 frames\u5206\u306e\u307f\u6642\u9593\u767a\u5c55\u304c\u307f\u3089\u308c\u308b\u3002"))}d.isMDXComponent=!0},6899:function(e,a,t){a.Z=t.p+"assets/images/density-a0bd4478576d20fa800cb1779a383e48.png"},3693:function(e,a,t){a.Z=t.p+"assets/images/system_config-1f7b52dd0d55eb21d304b18ee846ac9f.png"},1589:function(e,a,t){a.Z=t.p+"assets/images/visit_1-3d20ad48d17f603da7d02e0c681d4cc0.png"},2632:function(e,a,t){a.Z=t.p+"assets/images/visit_2-3153dfef5cd796baf1ac44cf8efc3527.png"}}]);