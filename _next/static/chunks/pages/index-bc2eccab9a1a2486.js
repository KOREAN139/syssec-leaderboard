(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2878)}])},9749:function(t,e,a){"use strict";function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,A=new Array(e);a<e;a++)A[a]=t[a];return A}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var A,i,n=[],r=!0,o=!1;try{for(a=a.call(t);!(r=(A=a.next()).done)&&(n.push(A.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"===typeof t)return A(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?A(t,e):void 0}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,a=t.sizes,A=t.unoptimized,o=void 0!==A&&A,s=t.priority,c=void 0!==s&&s,m=t.loading,f=t.lazyRoot,w=void 0===f?null:f,O=t.lazyBoundary,I=void 0===O?"200px":O,k=t.className,B=t.quality,N=t.width,Q=t.height,K=t.style,j=t.objectFit,G=t.objectPosition,V=t.onLoadingComplete,z=(t.onError,t.placeholder),L=void 0===z?"empty":z,T=t.blurDataURL,D=p(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),Y=l.useContext(h.ImageConfigContext),M=l.useMemo((function(){var t=E||Y||u.imageConfigDefault,e=r(t.deviceSizes).concat(r(t.imageSizes)).sort((function(t,e){return t-e})),a=t.deviceSizes.sort((function(t,e){return t-e}));return b({},t,{allSizes:e,deviceSizes:a})}),[Y]),W=D,F=a?"responsive":"intrinsic";"layout"in W&&(W.layout&&(F=W.layout),delete W.layout);var q=C;if("loader"in W){if(W.loader){var J=W.loader;q=function(t){t.config;var e=p(t,["config"]);return J(e)}}delete W.loader}var P="";if(function(t){return"object"===typeof t&&(y(t)||function(t){return void 0!==t.src}(t))}(e)){var H=y(e)?e.default:e;if(!H.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(T=T||H.blurDataURL,P=H.src,(!F||"fill"!==F)&&(Q=Q||H.height,N=N||H.width,!H.height||!H.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}e="string"===typeof e?e:P;var X=x(N),Z=x(Q),_=x(B),$=!c&&("lazy"===m||"undefined"===typeof m);(e.startsWith("data:")||e.startsWith("blob:"))&&(o=!0,$=!1);U.has(e)&&($=!1);var tt,et=n(l.useState(!1),2),at=et[0],At=et[1],it=n(g.useIntersection({rootRef:w,rootMargin:I,disabled:!$}),3),nt=it[0],rt=it[1],ot=it[2],st=!$||rt,ct={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},lt={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},dt=!1,ut={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:G};0;0;var gt=Object.assign({},K,"raw"===F?{aspectRatio:"".concat(X," / ").concat(Z)}:ut),ht="blur"!==L||at?{}:{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:G||"0% 0%"};if("fill"===F)ct.display="block",ct.position="absolute",ct.top=0,ct.left=0,ct.bottom=0,ct.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Z){var mt=Z/X,ft=isNaN(mt)?"100%":"".concat(100*mt,"%");"responsive"===F?(ct.display="block",ct.position="relative",dt=!0,lt.paddingTop=ft):"intrinsic"===F?(ct.display="inline-block",ct.position="relative",ct.maxWidth="100%",dt=!0,lt.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===F&&(ct.display="inline-block",ct.position="relative",ct.width=X,ct.height=Z)}else 0;var bt={src:R,srcSet:void 0,sizes:void 0};st&&(bt=S({config:M,src:e,unoptimized:o,layout:F,width:X,quality:_,sizes:a,loader:q}));var pt=e;0;var Et,Ut="imagesrcset",Rt="imagesizes";Ut="imageSrcSet",Rt="imageSizes";var wt=(i(Et={},Ut,bt.srcSet),i(Et,Rt,bt.sizes),Et),yt=l.default.useLayoutEffect,St=l.useRef(V),xt=l.useRef(e);l.useEffect((function(){St.current=V}),[V]),yt((function(){xt.current!==e&&(ot(),xt.current=e)}),[ot,e]);var Ct=b({isLazy:$,imgAttributes:bt,heightInt:Z,widthInt:X,qualityInt:_,layout:F,className:k,imgStyle:gt,blurStyle:ht,loading:m,config:M,unoptimized:o,placeholder:L,loader:q,srcString:pt,onLoadingCompleteRef:St,setBlurComplete:At,setIntersection:nt,isVisible:st},W);return l.default.createElement(l.default.Fragment,null,"raw"===F?l.default.createElement(v,Object.assign({},Ct)):l.default.createElement("span",{style:ct},dt?l.default.createElement("span",{style:lt},tt?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,l.default.createElement(v,Object.assign({},Ct))),c?l.default.createElement(d.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+bt.src+bt.srcSet+bt.sizes,rel:"preload",as:"image",href:bt.srcSet?void 0:bt.src},wt))):null)};var s,c,l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var A=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};A.get||A.set?Object.defineProperty(e,a,A):e[a]=t[a]}return e.default=t,e}(a(7294)),d=(s=a(3121))&&s.__esModule?s:{default:s},u=a(139),g=a(9246),h=a(8730),m=(a(670),a(2700));function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t){for(var e=arguments,a=function(a){var A=null!=e[a]?e[a]:{},i=Object.keys(A);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(A).filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable})))),i.forEach((function(e){f(t,e,A[e])}))},A=1;A<arguments.length;A++)a(A);return t}function p(t,e){if(null==t)return{};var a,A,i=function(t,e){if(null==t)return{};var a,A,i={},n=Object.keys(t);for(A=0;A<n.length;A++)a=n[A],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(A=0;A<n.length;A++)a=n[A],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var E={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},U=new Set,R=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(t){var e=t.config,a=t.src,A=t.width,i=t.quality;0;if(a.endsWith(".svg")&&!e.dangerouslyAllowSVG)return a;return"".concat(m.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(a),"&w=").concat(A,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,a=t.src,A=t.width,i=t.quality,n=new URL("".concat(e.path).concat(I(a))),r=n.searchParams;r.set("auto",r.get("auto")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||A.toString()),i&&r.set("q",i.toString());return n.href}],["cloudinary",function(t){var e=t.config,a=t.src,A=t.width,i=t.quality,n=["f_auto","c_limit","w_"+A,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(n).concat(I(a))}],["akamai",function(t){var e=t.config,a=t.src,A=t.width;return"".concat(e.path).concat(I(a),"?imwidth=").concat(A)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(t){return void 0!==t.default}function S(t){var e=t.config,a=t.src,A=t.unoptimized,i=t.layout,n=t.width,o=t.quality,s=t.sizes,c=t.loader;if(A)return{src:a,srcSet:void 0,sizes:void 0};var l=function(t,e,a,A){var i=t.deviceSizes,n=t.allSizes;if(A&&("fill"===a||"responsive"===a||"raw"===a)){for(var o,s=/(^|\s)(1?\d?\d)vw/g,c=[];o=s.exec(A);o)c.push(parseInt(o[2]));if(c.length){var l,d=.01*(l=Math).min.apply(l,r(c));return{widths:n.filter((function(t){return t>=i[0]*d})),kind:"w"}}return{widths:n,kind:"w"}}return"number"!==typeof e||"fill"===a||"responsive"===a?{widths:i,kind:"w"}:{widths:r(new Set([e,2*e].map((function(t){return n.find((function(e){return e>=t}))||n[n.length-1]})))),kind:"x"}}(e,n,i,s),d=l.widths,u=l.kind,g=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(t,A){return"".concat(c({config:e,src:a,quality:o,width:t})," ").concat("w"===u?t:A+1).concat(u)})).join(", "),src:c({config:e,src:a,quality:o,width:d[g]})}}function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function C(t){var e,a=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",A=w.get(a);if(A)return A(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(a))}function O(t,e,a,A,i,n){t&&t.src!==R&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(U.add(e),"blur"===A&&n(!0),null===i||void 0===i?void 0:i.current)){var a=t.naturalWidth,r=t.naturalHeight;i.current({naturalWidth:a,naturalHeight:r})}})))}var v=function(t){var e=t.imgAttributes,a=t.heightInt,A=t.widthInt,i=t.qualityInt,n=t.layout,r=t.className,o=t.imgStyle,s=t.blurStyle,c=t.isLazy,d=t.placeholder,u=t.loading,g=t.srcString,h=t.config,m=t.unoptimized,f=t.loader,E=t.onLoadingCompleteRef,U=t.setBlurComplete,R=t.setIntersection,w=t.onError,y=(t.isVisible,p(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},y,e,"raw"!==n||e.sizes?{}:{height:a,width:A},{decoding:"async","data-nimg":n,className:r,style:b({},o,s),ref:l.useCallback((function(t){R(t),(null===t||void 0===t?void 0:t.complete)&&O(t,g,0,d,E,U)}),[R,g,n,d,E,U]),onLoad:function(t){O(t.currentTarget,g,0,d,E,U)},onError:function(t){"blur"===d&&U(!0),w&&w(t)}})),(c||"blur"===d)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},y,S({config:h,src:g,unoptimized:m,layout:n,width:A,quality:i,sizes:e.sizes,loader:f}),"raw"!==n||e.sizes?{}:{height:a,width:A},{decoding:"async","data-nimg":n,style:o,className:r,loading:u||"lazy"}))))};function I(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,a){"use strict";function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,A=new Array(e);a<e;a++)A[a]=t[a];return A}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var A,i,n=[],r=!0,o=!1;try{for(a=a.call(t);!(r=(A=a.next()).done)&&(n.push(A.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return A(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,a=t.rootMargin,A=t.disabled||!o,l=n.useRef(),d=i(n.useState(!1),2),u=d[0],g=d[1],h=i(n.useState(e?e.current:null),2),m=h[0],f=h[1],b=n.useCallback((function(t){l.current&&(l.current(),l.current=void 0),A||u||t&&t.tagName&&(l.current=function(t,e,a){var A=function(t){var e,a={root:t.root||null,margin:t.rootMargin||""},A=c.find((function(t){return t.root===a.root&&t.margin===a.margin}));A?e=s.get(A):(e=s.get(a),c.push(a));if(e)return e;var i=new Map,n=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),a=t.isIntersecting||t.intersectionRatio>0;e&&a&&e(a)}))}),t);return s.set(a,e={id:a,observer:n,elements:i}),e}(a),i=A.id,n=A.observer,r=A.elements;return r.set(t,e),n.observe(t),function(){if(r.delete(t),n.unobserve(t),0===r.size){n.disconnect(),s.delete(i);var e=c.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&c.splice(e,1)}}}(t,(function(t){return t&&g(t)}),{root:m,rootMargin:a}))}),[A,m,a,u]),p=n.useCallback((function(){g(!1)}),[]);return n.useEffect((function(){if(!o&&!u){var t=r.requestIdleCallback((function(){return g(!0)}));return function(){return r.cancelIdleCallback(t)}}}),[u]),n.useEffect((function(){e&&f(e.current)}),[e]),[b,u,p]};var n=a(7294),r=a(4686),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},2878:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return R}});var A=a(5893),i=a(7160),n=a.n(i),r=a(5675),o=a.n(r),s=a(6212),c=a.n(s),l=a(2377),d=a.n(l),u=function(t){var e=t.children;return(0,A.jsx)("div",{className:d().container,children:e})},g=JSON.parse('{"W4":{"Anti_ydk":{"1":2,"2":5,"3":6,"4":15,"totalGames":28,"yakus":{"\ub9ac\uce58":11,"\ub3c4\ub77c":6,"\ub4b7\ub3c4\ub77c":11,"\uc774\ud398\ucf54":2,"\ud551\ud6c4":4,"\uc801\ub3c4\ub77c":3,"\ud0d5\uc57c\uc624":1,"\uba58\uc820\ucbd4\ubaa8":3,"\uc77c\ubc1c":2,"\uc5ed\ud328: \uc911":2,"\ub610\uc774\ub610\uc774":1,"\ud558\uc800\ub85c\uc5b4":1,"\uc5ed\ud328: \ubc1c":2,"\uc77c\uae30\ud1b5\uad00":1,"\ucc2c\ud0c0":1}},"gooma_c":{"1":11,"2":4,"3":7,"4":3,"totalGames":25,"yakus":{"\uc7a5\ud48d\ud328":4,"\uc790\ud48d\ud328":3,"\uc5ed\ud328: \ubc1c":2,"\ub9ac\uce58":10,"\uc77c\ubc1c":3,"\ub4b7\ub3c4\ub77c":10,"\ub3c4\ub77c":8,"\ud63c\uc77c\uc0c9":2,"\uc801\ub3c4\ub77c":8,"\uc77c\uae30\ud1b5\uad00":1,"\ud0d5\uc57c\uc624":6,"\uc0bc\uc0c9\ub3d9\uc21c":2,"\uc5ed\ud328: \uc911":1}},"doyouknowYDK":{"1":3,"2":2,"3":4,"4":5,"totalGames":14,"yakus":{"\uc7a5\ud48d\ud328":1,"\ud0d5\uc57c\uc624":6,"\uc801\ub3c4\ub77c":5,"\ub3c4\ub77c":3,"\uc5ed\ud328: \ubc1c":1,"\ub9ac\uce58":6,"\ub4b7\ub3c4\ub77c":6,"\ud551\ud6c4":2,"\uc5ed\ud328: \ubc31":1,"\uc774\ud398\ucf54":1,"\uba58\uc820\ucbd4\ubaa8":2}},"PigeonCrow":{"1":9,"2":14,"3":3,"4":1,"totalGames":27,"yakus":{"\uba58\uc820\ucbd4\ubaa8":4,"\ud551\ud6c4":7,"\ub9ac\uce58":16,"\ub4b7\ub3c4\ub77c":16,"\ub3c4\ub77c":8,"\uc801\ub3c4\ub77c":10,"\uc5ed\ud328: \ubc31":3,"\uc77c\ubc1c":2,"\uc790\ud48d\ud328":2,"\ub610\uc774\ub610\uc774":1,"\ud0d5\uc57c\uc624":4,"\uc5ed\ud328: \uc911":2,"\uc0bc\uc0c9\ub3d9\uc21c":1,"\uc774\ud398\ucf54":1}},"YDKjammer":{"1":0,"2":1,"3":1,"4":0,"totalGames":2,"yakus":{"\uc5ed\ud328: \ubc1c":1,"\ub9ac\uce58":1,"\ub4b7\ub3c4\ub77c":1}},"NolMalGong":{"1":1,"2":0,"3":1,"4":1,"totalGames":3,"yakus":{"\uc7a5\ud48d\ud328":1,"\uc790\ud48d\ud328":1,"\ub9ac\uce58":1,"\uc77c\ubc1c":1,"\ub3c4\ub77c":1,"\ub4b7\ub3c4\ub77c":1,"\ud0d5\uc57c\uc624":1,"\uc801\ub3c4\ub77c":1}},"green_green":{"1":3,"2":2,"3":7,"4":4,"totalGames":16,"yakus":{"\uc77c\uae30\ud1b5\uad00":1,"\uc5ed\ud328: \ubc1c":2,"\uc790\ud48d\ud328":4,"\uc801\ub3c4\ub77c":4,"\ub9ac\uce58":5,"\ub3c4\ub77c":2,"\ub4b7\ub3c4\ub77c":5,"\uc5ed\ud328: \uc911":2,"\uc7a5\ud48d\ud328":1,"\ud0d5\uc57c\uc624":1,"\uba58\uc820\ucbd4\ubaa8":2,"\ud551\ud6c4":1}},"YDKfuzzer":{"1":0,"2":1,"3":0,"4":0,"totalGames":1,"yakus":{"\ud0d5\uc57c\uc624":1,"\uba58\uc820\ucbd4\ubaa8":1,"\ub9ac\uce58":1,"\uc77c\ubc1c":1,"\ub4b7\ub3c4\ub77c":1}}}}'),h=JSON.parse('[{"yakumans":["\uad6d\uc0ac\ubb34\uc30d"],"hules":{"hand":["1m","9m","1p","9p","9s","1z","2z","2z","3z","4z","5z","6z","7z"],"huTile":"1s","qinjia":true,"doras":["4s"],"yiman":true,"count":1,"fans":[{"val":1,"yaku":"\uad6d\uc0ac\ubb34\uc30d"}],"fu":25,"pointRong":48000,"pointZimoXian":16000,"titleId":5,"pointSum":48000,"dadian":48000,"seat":0},"point":48000,"nickname":"doyouknowYDK","timestamp":1651921612}]'),m={"0s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/0s.c6ad395d.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAk0lEQVR42iWMSw6CMABEe/9zaKKggPwUEfxAW9pE0UiixmiI6BlwxdjK6s2bZIZExqBNZxPE5rDT1E5O5QHX6oy6aRQraCd8HqJwHdxvFwjfBQt8VS5C5KaB/ToBs6aggQci0xWECtl49Kd2UiwjcDWnjg3mWBBJDEI9F9y28Pq89bz/lLtNe2QUj/rZlSyHzLbfH2M2gdHCbvWgAAAAAElFTkSuQmCC"},"1s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/1s.8e3573fc.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoklEQVR42hXHSQqCUAAG4HfDjtAROoBXqEXRKkqQFk1iCWFtgggbFIfM3mS+V7ewlX+5+vjIbmZVB2eOo2vXjc2JkAL6oxFnCd5/RSFAtHrB2a/RMtpYeTZUWYBwTtG1Buj0DfSmQwhBQaRkuNx8jBYmXG8DRnOQ7J5g6zqw7SXMyRhBeAWJohBn/4Q0DpDEIfI8A2HsWWlVgD7SWpUSnNPvD+4Rgb5K8I1TAAAAAElFTkSuQmCC"},"2s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/2s.ec33fe9b.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAATlBMVEXV1dO3p6HW1dO3vrjAsavd393b3Nnb3Nja3Njb29nb29ja29ja29fb2tja2tja2tfY2djX2djY2NXIzsq1vra9rqmotKqeraGdrKGZqp2kGclqAAAABXRSTlP39/j+/kgjlaIAAAAzSURBVHjaDcS1AQAgEASwQx933X9RSBGwKSdDVV0VRLdDRPInJGQ99J8WZVhzyQJNNP4ALoQB45fQPjwAAAAASUVORK5CYII="},"3s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/3s.015b9575.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAk0lEQVR42iXIywqCQBiG4f/+L6BNK2lREWQ2WnSwAgN1RsVW5hxqFUm0t5VfTa5enpfWY6cN51OcFrPO1pqq+gpzNxCX/F9rkrKCUhUcdwT5qzUZLWGMxGAyhNY1rInnKbJSIMliiJJDFBzkbjwExxXerwb+IQDb+f1koY/m+cByz+BtGSiKo5YXKW5GdbbnJPp8AZ1ChUIKoIzQAAAAAElFTkSuQmCC"},"4s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/4s.8e1ebf3d.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAgElEQVR42iXMOw6CQBhF4fOPmABKqxUFW7dyCS6EYOkiDDDjPK5OrE5x81173G972/VtSlFNczS/b97mZVYsmaE/8d5WGnfAxRh4vhaUE8uvn7DjBORSEKIUIQlnGEN3BqBeuMrrEnLEzBFiLZWL1W/Av6VyhJ8uIyklTdcRE+ELZOxL1ZgOsr4AAAAASUVORK5CYII="},"5s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/5s.5beb7cc1.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAk0lEQVR42jXLzQqCQABF4Xn/56gWNSnjpPmfWrqQiNCoVahESE9gK0+6aHX5LhzhrxdDoiSBXI2J2jBbnK8XqntN27VUj5rZwokdVGDx6d/oSGNHNsKO90hHcjvEmK6BDqczPEY4oaZYLqbdMVu4qY/2FKWUKNfEz0KEFWgMz6R/dWz/eZqnQ1HmNM1zzMsTWZF+fzDmgQKUhWtUAAAAAElFTkSuQmCC"},"6s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/6s.918f2b9c.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAgklEQVR4nCXOwQrCMBAE0Nm2icH//wRPXkSwQotCPXhT8G+aNG3GiS57euwsY+PxMPtdCGShWWNLitFenzc75yCEmSHnFdbfr1zWhEKCAHzrYJdbzyiUaQhXcZhGbtwElYRN948XI7QiYb08DWfmkqv8/u59gD2e09y0rSpRlRQoTF8N8U1tuxGVwAAAAABJRU5ErkJggg=="},"7s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/7s.1dd8aa77.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAn0lEQVR4nA3BsQqCQBgH8P93HWq6iFLU3rPUczb1BrmXEBYOEaHgEOFUKNRgnqfXV/wo2qxby7YdGklmY0h3SlGWZ2w7Npq6hhsE0LoHFUXOlpQothEWqyUGAHS5ntl8DZqqgheGEGIE2h92fHuUGLselPpg7k9BxzThV/OGIAH+8xwPFCcx358lLGmhNwNm/gR0SpNW9dohIgaYpJDdDz2wSauvm/paAAAAAElFTkSuQmCC"},"8s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/8s.ea5c948f.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmUlEQVR42iXIQQuCMACG4f306BQRBVGXOhQpBEYpRDpnOXRlGmUQFHSLcv0FO/nl9PTyPoQZes6tBVxDL1TVk/R2xf35gJRZVfWEcoolXSE+RzCZBYc7IF64RWPUQk8bojlugwUMhB84POHhKz9V/b1fY2fWx9TU0NUGNdqcYlICDVzo6zk2OxtEHEWeXGJk71dxShOEUfj7A5mxfwasc2doAAAAAElFTkSuQmCC"},"9s":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/9s.302298a5.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAjklEQVR42j3K0Q6CIABGYd7/MdIZWKupVypaKgzEAsy2HsWu/GNr8+rsbB8pWbR22RlNdtruoVV44pcZdvH4eAf39rAvD9LrHodLBB3HSK4x6oGDTNagERxzy3ETDdRDgYhRgBYUJmVICxZAC2KeI6quhKtL8K6CNPIvk/wIQylYTne5Cj3Ai36ToXpS3x8ZpoDPprazZAAAAABJRU5ErkJggg=="},"0m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/0m.45d5f151.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAnklEQVR42hXKSwqCQACA4bluHSHaRBeJiDKiB0mvhUjvItLUGXUcRTqFrfyr7ccnNqNe5cwsnPm4du0pW6tfiTTTlO+STCdI74mKFUKFPo/dmmW3w+vgYnKNiKOA+9pmPxxwW9nIl4fQOqYwKafphPB6JoklwuQZnutgNRtoGWAK88Mi47ZcMG+3OI5HpP+pVFTpRCL9Z+1fTsgo+HwB/9iD9AZ1CWAAAAAASUVORK5CYII="},"1m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/1m.05807959.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAkUlEQVR42g3Nuw6CMBiA0e9vuYnBgck+vpOPYKKPYQhuRFYTEwQsUGxlP8mRy/lk4yTNvPdBBFmdm6R+1CHf5xACWmuG8UukJDB+OvphoOs6zNEQAazeE0cRxhiU0qgQoNjtsE2DnmbiJEHpTbyfLe31hspSRASFgOt70rLkVVX8lgWpqrvdtsxNU3DWSlwc5j+s/EC8Tp+FfQAAAABJRU5ErkJggg=="},"2m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/2m.1a7e0419.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmElEQVR42iWLSw6CMBgGe1k9gvE6LgyNUeLORMFX0RjlEaXQn1Kheglc8VnjcmYybOVNumDBsZl7fehz/JgpUrCvFk3bwL4tSFdgWisYQwjDNcRxB6LiL+PkilN0gBB7JOkNjKiEqUpEMw5ysTZur41Gug3gDQegRwbHTj41Lksf/ngEwaegUoIVRd5VSkJmcZ+dBWR+/3wBrWKFcxmKdbwAAAAASUVORK5CYII="},"3m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/3m.4ef088da.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmElEQVR42h3LywqCQBiG4e//HccDFGgRuujiW3UFlvcRUy1bFR2gNHTG4yS98C4f2m832pWeD1hLzNQaY+h4PtkwDDCOI+x02/VgKRhVWSDPMrwed3jCAWPqU5ZI0wTvokBV1+C+H7CKYyQA1lEEKSXYEQLf6w2XXQ4nCMB/TkAzcW+5wFMpDE0LUuqgBZPfGWM7rcmdzZsfoZlC/hLV8sQAAAAASUVORK5CYII="},"4m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/4m.439ccc4b.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAnElEQVR42g3LvQ6CMBhG4feDtnSwgBF/EgZHuW0n70C9CI2DQeKGOIoTQ1tqUxlOzvTQ6bDXjAtJhAAictYYap5NUErBWos4jqePYMH/cLte0HVvzPMMu6oC41wgzTIsC43VZg2RJGDee2zLEqLvkc9mYFIiihnDt32hPZ5BkwII0RTcMCApFvg8avhxBNX1XbOIpDMmOK2Jq9T+AevHOnr5RVhFAAAAAElFTkSuQmCC"},"5m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/5m.c40ca84a.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAnklEQVR42hXLWwqCQABG4VlsbSEK3IxdUIksyjIILbXsRbzg6MzoqO3CnvzL18P5iK2pvWMacPfG4J12uOrLnjDB0H5aMM4QxRFoSUG6TsJ7OFCUBXz/DikFCGMFLvYZ65UKyzoiTWMQzgs0FcNrayALnyhHXssKsXuDNp1A0Ayyrf+xqfA+mDDnMwT6Bnw8iyLvBaOgSTQkYQCaZ98fw+yDSkW3MGgAAAAASUVORK5CYII="},"6m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/6m.11ba7790.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmElEQVR42iWLTQqCQABG57J1hOgqUYuCahLC2kmohI3VJjBxdH6bjXSGaeXXgIu3eA8eSeja56cIgSE9UiR044lUEtZZCCnQf3uI4MQ5g3tZYLVcIM8u6LoGRGuBLE9B91swVsAYBSIEhw6wiOJd3sZoPhrVNcNhOoHmNYzVY3yeY8TzGRjdQXYcpG0br8LOq9dQPRh4U//+I8aEL3R3rJsAAAAASUVORK5CYII="},"7m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/7m.e3a1af5c.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmklEQVR42hXMMQ6CMBiG4V7WeAPjSYyOJJqWQXRjEHAgGgaEQEvbv1QT4iFw4jNd3unJy1IezfklRp6IJTtzpCKamSEL//GgkTB9JxhrwLwnaC3B+RH34gajFZhzFq+mxmG/Q9+3CIhZq+FJo4w5ZPVAQGz0Dk2RQaxXINlhfDuwkOqaINluUIoTbHgOg5zJKKi2XtpnCSW73x9mVoTQU5wd8AAAAABJRU5ErkJggg=="},"8m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/8m.82126cb0.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmElEQVR42iXKSw6CMBRG4S5Wt2DcjgPSxghxxgQZyMOYEIG09balVkPcA474xTj8Tg5L+W46JQJZLOYs5kjFbmJkCOEV4IPH+B7xM3OO8AwDOI/QdQ28t2DWEqq6RFWekecZpOzBiDQGo1Ef9qDmCusIbHg43JaDr1cwssPif7wcEyTbDQoRwdwVmNZysqSg2mZu6wJK9p8vnjWFT/GYzoUAAAAASUVORK5CYII="},"9m":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/9m.43b4a13b.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAnUlEQVR42iXLTQrCMBiE4VxWjyDeQvAEutAUlKJuuhBrsSouQktMvuavWjxFXXUMuJnFw7ws48v+lCYoDtvhvN8g44ueGWfQfTqISkCRgvMOrG0dtJaYz2cgkgjegFnbgBqF2/UCnqwhZf3Hd7AoI4gij3l8htajyo9IxiN4eiK8fMQ4j12KdDpByVewjQYjUr0zGroWQ30voZX8/gBLYISMixYIEgAAAABJRU5ErkJggg=="},"0p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/0p.63567352.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAk0lEQVR42lXMMQ6CMACF4V7buCl6DyZUJEEDIaaRSYJQJEAbWzTVeIo68aRuTN8b/jySeK5JQx808AZrsnENkUri+VDQb/1X9hKkoCfEawdlEiFeLcFSCtKyApm/RX4Mke136KoS5C5adPkF4XyGftz68wLhdYWrrQIfRXSAaG7Tz8hZgJ3pWPLGiJpBSTFYBW+/PzfBgXZOAHY3AAAAAElFTkSuQmCC"},"1p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/1p.25de2c49.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAm0lEQVR42h3KywqCQABG4Xl/kiAvKVIkFWaluUglxYpIXLWSaRoxROsdbOVf0+rjwCGRbXWJayPeLHuhaMI4Q/tu0byav4w/QMqSIc+vWG8dZNkFokmcHKArIyxUGfJQQhgFIMbEhGcauDkr+LMplLEGEoR7qNIArq5B+5073wPhnOF0TmHNLaTHBJzfQSgturqu8KzKXkhp8fkCjhl/LmMTDwYAAAAASUVORK5CYII="},"2p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/2p.74ee2387.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAi0lEQVR42iWMSw6CMABEe2atiWFluIkrQ5SWVkkNEeIB1FVTC7TxGLhiaOliMplPHlGn49TyAk95mVtWIGZiewv/83h93qvbwYI410NUJXZ0g6vk8H5IJeclsmwPKSs4F8pxtIhD09xXDzk961oizw9Q6paekcHYGZRuIQRLTGP0FISue8zmq2GM/i9nr4IbxmVqJgAAAABJRU5ErkJggg=="},"3p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/3p.839fbe11.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmUlEQVR42h3MXQqCQBhG4W+ztYGo3I7dKJSaeVGUUFBEWTQ0jeMM/mTkHuzKN/X+nIc29qw+rBbYOVYTujbWllmTkDGEFMiLDO+yQKITkOc5mIxHeIknqm8JpWJQFF3gOnMcwy2yVEF3Zbew6xnmcAD+uLVEDtJa9sVpH8JfuuhOUkqiqj69aRhTBIEPEjGv096SDWN3cM5+f/VAhDLXv/HNAAAAAElFTkSuQmCC"},"4p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/4p.87b90e7c.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAATlBMVEXT09G3p6HT09HV1dK7rafo6OXk5OHe4N7b3dvc3Nnb3NnY2djT09DPz8zOzszMzMnFxcLExMHDw8HBwb6+sKqvr6yrq6inp6SKiYeCgoCPy1YaAAAABXRSTlP39/j+/kgjlaIAAAAxSURBVHjaBYCFEYAgAAAfFenu/RflEP3rAqeVduQ9dyaOMiJW/tLgW2ieetapkN70XDD0AhetVknbAAAAAElFTkSuQmCC"},"5p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/5p.997aada0.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmElEQVR42h2MSw6CQBQE3431ADrgUVwYBn84YAIoiVtFfgGSpwtEvASuaBkXnUrXosiXy/6iNoh21qAZjJ/4weAno3k1mv9RGPpYmALeUcE05oiiEyiOr5ByBc/ZwrYt3JMbqPu0qLME1nQCrgq8uxaUjUId9vDWEq5ykOcpKAh8GIaAOzaFmOGsm2VZ9Gkag7keNKuq+P4Ai+Z/GAsmXcEAAAAASUVORK5CYII="},"6p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/6p.9b3ba735.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAiElEQVR42h3KuwrCQBCF4X3z6GqrBguxFbxhCCgWplKUgBDY7CWiri8Sq5zMTPXxH4667Fft/Zzjdso6tqBW7+8Hta1hvYUhuZWzBiOdQA8TjPUA3CpGejqD8PJi/NGzaRyuuw2K7Vqk5tEjn6fIlguRW4VgcZxNcEinIrU826p8oHqWHcnPfw/Gcn+4piVcnQAAAABJRU5ErkJggg=="},"7p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/7p.d0f4a266.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAn0lEQVR42g3OMQ6CMBgG0K+1QlmUxIlBogOKMTKIV3byCK7EgRjdDJuGG7DQFtr+sr/hsfvtqsIoklop4pyzcRi0WG53kshjkyTMe4++V1K0vy+edY1TUaAszwiDAKxpPqSMRlU9oLTCMc/BCQTXdbgc9lhYCzGfQzjr0L7eMM5hHcdI0xSCcYaZEOBEGI2Bc3aSzutVlknrPQnOpwGZP910S6FyCpN3AAAAAElFTkSuQmCC"},"8p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/8p.3f7b4049.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAASFBMVEXT09G4qKG3p6HT1NHBs622trTX2NfW2NfW1tTW1tPW1dPJy8nGyMa6urjCs66ZmZeYmJaTk5GRkI2QkI2Ojo2OjoyGhoWDgoC4nBOhAAAABnRSTlP39/f4/v7seb0jAAAAM0lEQVR42g3IxwHAIBADMCc0U4/O/puCnsJfdPngYooWYZzuQZlCsK5KeFnypu1GIJusLitIAdiZ5fv1AAAAAElFTkSuQmCC"},"9p":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/9p.52fe50c0.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAjUlEQVR4nCXMWw6CMBBG4X8KbRo3QCrLNzGgKzA+i41v6gYkwhIMl6mMY3g9+XLoVO8G572XRYQM0TyNI92fD7E2h0ZoBHMCVdVe2vYF5xx4ZmzLEhSvF0nMABEAQZbloPOxlk/fw1iLJSVsigJ0i418k0qs0vzlQeW76+BUsm5CCPqMzaDEqxLVJJDpB59kRk/tbDpcAAAAAElFTkSuQmCC"},"0z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/0z.0aa91ab5.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAQlBMVEXpkSrJk2/qkirvlSnOlG/1mS31mSj1mCjzmC30mCjzlynzlyjwlinulS3vlCjulCnulCjPlW71lQDzlADtkQftkAc6XMfeAAAABXRSTlP39/j+/kgjlaIAAAAxSURBVHjaFcTJAQAQDATAdYsrEvTfKuYxMOLF4OjSjR5y6OBUE7/LnwoxZqQ4gOaavStJAazHQ0qoAAAAAElFTkSuQmCC"},"1z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/1z.bfc9eb28.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAkElEQVR42h3Fyw2CQBRA0fvm52AdbEi0AynWlR34aYK4U+JSDAVAMoMjjMbkJEdOh31wK+8z+QdJ7ynKrb1n5yzLvGCsIYaI0pIxApfzkTlNWK1QIDy7F237oGmuZEBZaxnHga7rKIoC5xxqGAZijNT17n/f9xitNWVZktKH7XZDCBEjItH7ta+qKlvnJGemL+2mQafdLG9sAAAAAElFTkSuQmCC"},"2z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/2z.12c985dd.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAkklEQVR42h2OQQqCQBRA359GR3CbJ/HErTpCB0goaGUKktqmOkGBM2rOJL31e/DksN/Z2JjEex9ElMzT6KS5NSExBkQAcM6hJHgirbicTwyfN9FGoVZYS8prxeP5Iopj9DTNVFXNsniKY0GWbdEQ6NoOrTcYYxgGi/R9G6wd6Pv7an/J8xyp69KmafpfAsS5cfwBTEpKkJmHngQAAAAASUVORK5CYII="},"3z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/3z.9dc4baff.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42h3JMRKCMBBG4X/JBiJUIAV3kJEzW3kEL4BnUHsKrJgBJhuJEBlf+T66XS+i48Rs2xpo7+u9o8frGdL0AIQA1hrTNINpW2HnEdYKhmFAVVXgxXuIWLTtHUopFMURrFSEruuQZRmYGcYYRHGSYBwn9P37D1ozOCJC05yR5znq+gSAwCLi9mHKsgzL4sk59/kBSI09Ac9mfc8AAAAASUVORK5CYII="},"4z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/4z.80fb1f46.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAnUlEQVR4nA2NPQqDMBxHf38Fk0bFYwiKxSt36mi3HqA4FKU4aP1YPYBdTFoDSfO2Bw8e3a8XFTDGjTGWHFofXxrn0TLG4Bye52HfJWie31aIE7btAwIQRhFoWSarlERV3VAUBfI8c+Uy2qHv0bYvlOUZWZaD6vphu66D7/uI4xhpmoKa5ulGAZIkwbquECIETdOg3J0fWlvOOcld/v6UvUNaBnbuwwAAAABJRU5ErkJggg=="},"5z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/5z.e3a12186.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAPFBMVEXU1NK3p6HU1dLa2te7rKff4d/g4N3g4Nzg39zf39zd393e3tvb29na2tfZ2tfZ2dbX2dfX2Ne9rqi8rqiUjjT/AAAABXRSTlP39/j+/kgjlaIAAAAwSURBVHjaHcbHEQAgCATAM4OgGPrv1fDZWbgVt8NMNQ0YCRmsCH/Lld975twADeoPJyoBkrrH1OYAAAAASUVORK5CYII="},"6z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/6z.0dde8282.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlklEQVR42g3IvQ6CMBSG4e+cFmkciHr/i5PuDu7eBBIHBkhQSZXw1yLQ2rzLk5eup6OJ4li5dfXMTPP8s5TeU69UDGYBHzKjCSYPQUD5LPBtNCLBYCkk8qrA+XbBp2sgpQQvbsWjzLHbJqj0G93Qg1+6Rt1qqCiGmSzaMCnLUt/bgBALge1GQS7LbA/JXjnnPRPRYMbpDysUSwaN5bArAAAAAElFTkSuQmCC"},"7z":{src:"https://KOREAN139.github.io/syssec-leaderboard//_next/static/media/7z.7a7c6887.png",height:129,width:80,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42i3NzQqCQAAE4H3yiOgUnaIX6FQiigWSRHbKKOgHf/e33LaHsJOTSx6/YYYh2+WiiX0Hh7Xb7r0VrAnlFM+XQpWn0EbDmghBYT4am/EIokghJQfJ71ccXQfRfIZwOsHjfLJNhsRzEQwHuMU78M6E9/Mk8PE2NTr/Q10rXKIQWisIGxZl1kjJwKq8tSdFmX1/NkyF8ZMgEb4AAAAASUVORK5CYII="}},f=function(){var t=h.map((function(t){var e=t.yakumans,a=t.hules;return{yakumans:e,nickname:t.nickname,timestamp:t.timestamp,hand:a.hand,huTile:a.huTile}}));return(0,A.jsx)(u,{children:t.map((function(t,e){var a=t.yakumans,i=t.nickname,n=t.hand,r=t.huTile;return(0,A.jsx)("table",{className:c().board,children:(0,A.jsxs)("tbody",{children:[(0,A.jsx)("tr",{children:(0,A.jsx)("th",{colSpan:2,className:c().nickname,children:i})}),(0,A.jsxs)("tr",{className:c().yakuman,children:[(0,A.jsx)("td",{className:c().name,children:a.join("\n")}),(0,A.jsxs)("td",{className:c().hand,children:[n.map((function(t,e){return(0,A.jsx)(o(),{src:m[t],className:c().tile,height:"60%",width:"37%",objectFit:"contain",draggable:!1},"".concat(e,"-").concat(t))})),(0,A.jsx)(o(),{src:m[r],className:c().hutile,height:"60%",width:"60%",objectFit:"contain",draggable:!1})]})]})]})},"yakuman-".concat(e))}))})},b=a(473),p=a.n(b),E=function(){var t=function(){var t=g.W4,e=Object.keys(t).map((function(e){var a=t[e],A=a[1],i=a[2],n=a.totalGames;return{player:e,rank:0,firstRatio:A/n*100,upperSecondRatio:(A+i)/n*100,totalGames:n}}));return e.sort((function(t,e){return t.firstRatio==e.firstRatio?e.upperSecondRatio-t.upperSecondRatio:e.firstRatio-t.firstRatio})).forEach((function(t,e){return t.rank=e+1})),e}();return(0,A.jsx)(u,{children:(0,A.jsxs)("table",{className:p().board,children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{children:"\uc21c\uc704"}),(0,A.jsx)("td",{children:"\uc774\ub984"}),(0,A.jsxs)("td",{children:["1%",(0,A.jsx)("sup",{children:"*"})]}),(0,A.jsxs)("td",{children:["12%",(0,A.jsx)("sup",{children:"**"})]}),(0,A.jsx)("td",{children:"\uad6d\uc218"})]})}),(0,A.jsx)("tfoot",{children:(0,A.jsx)("tr",{children:(0,A.jsxs)("td",{colSpan:5,children:["* 1%: \uc804\uccb4 \uad6d\uc218 \uc911 1\uc704\ub97c \ud55c \uad6d\uc218\uc758 \ube44\uc728 ",(0,A.jsx)("br",{}),"** 12%: \uc804\uccb4 \uad6d\uc218 \uc911 1, 2\uc704\ub97c \ud55c \uad6d\uc218\uc758 \ube44\uc728"]})})}),(0,A.jsx)("tbody",{children:t.map((function(t){return(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{children:t.rank}),(0,A.jsx)("td",{className:p().nickname,children:t.player}),(0,A.jsx)("td",{children:+t.firstRatio.toFixed(1)}),(0,A.jsx)("td",{children:+t.upperSecondRatio.toFixed(1)}),(0,A.jsx)("td",{children:t.totalGames})]},"leader-table-".concat(t.rank))}))})]})})},U=a(7294),R=function(){var t=(0,U.useState)(0),e=t[0],a=t[1],i=(0,U.useState)(0),r=i[0],o=i[1],s=(0,U.useRef)(null);(0,U.useEffect)((function(){var t=function(){return document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px"))};return t(),window.addEventListener("resize",t,!1),function(){return window.removeEventListener("resize",t,!1)}}),[]);var c=(0,U.useCallback)((function(t){if(s.current){t.preventDefault(),t.stopPropagation();var A=s.current,i=t.target,n=i.scrollTop,c=window.innerHeight,l=0;r>n&&e>0&&n<e*c&&(l=-1),r<n&&e<1&&n>e*c&&(l=1),l&&(A.style.transform="translateY(-".concat(3*(e+l),"rem)"),i.scrollTo({top:(e+l)*c,behavior:"smooth"}),a(e+l)),o(n)}}),[s,e,r]);return(0,U.useEffect)((function(){var t=document.querySelector("main");if(t){var e=function(){return t.addEventListener("scroll",c,!1)},a=function(){return t.removeEventListener("scroll",c,!1)};return t.addEventListener("scroll",c,!1),t.addEventListener("touchstart",a,!1),t.addEventListener("touchend",e,!1),function(){t.removeEventListener("scroll",c,!1),t.removeEventListener("touchstart",a,!1),t.removeEventListener("touchend",e,!1)}}}),[c]),(0,A.jsxs)("div",{className:n().container,children:[(0,A.jsx)("div",{className:n().title,children:(0,A.jsxs)("h1",{ref:s,children:["4\uc778 \ub3d9\uc7a5 & 4\uc778 \ubc18\uc7a5 ",(0,A.jsx)("br",{}),"\uc5ed\ub9cc"]})}),(0,A.jsx)(E,{}),(0,A.jsx)(f,{})]})}},7160:function(t){t.exports={container:"Home_container__bCOhY",title:"Home_title__T09hD"}},473:function(t){t.exports={board:"Leaderboard_board__SDxmA",nickname:"Leaderboard_nickname__iKwlD"}},2377:function(t){t.exports={container:"TableContainer_container__q99DI"}},6212:function(t){t.exports={board:"YakumanBoard_board__RGdhb",nickname:"YakumanBoard_nickname__NswUD",yakuman:"YakumanBoard_yakuman__OJq0K",name:"YakumanBoard_name__e8AlR"}},5675:function(t,e,a){t.exports=a(9749)}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);