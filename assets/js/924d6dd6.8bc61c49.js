"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[75],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),s=o,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2280:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={title:"Electron"},p=void 0,c={unversionedId:"electron",id:"electron",title:"Electron",description:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210",source:"@site/docs/electron.md",sourceDirName:".",slug:"/electron",permalink:"/knowledge/docs/electron",draft:!1,tags:[],version:"current",frontMatter:{title:"Electron"},sidebar:"autoSidebar",previous:{title:"Dart",permalink:"/knowledge/docs/dart"},next:{title:"Flutter",permalink:"/knowledge/docs/flutter"}},u={},d=[{value:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210",id:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210",level:2},{value:"Tips",id:"tips",level:2},{value:"\u53cc\u65b9\u5411\u306eIPC\u901a\u4fe1\u306finvoke\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b",id:"\u53cc\u65b9\u5411\u306eipc\u901a\u4fe1\u306finvoke\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b",level:3}],m={toc:d};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210"},"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Electron Forge"),"\u3092\u5229\u7528\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"# Electron Forge\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\nnpm i -D @electron-forge/cli\n\n# Electron Forge\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\nnpx electron-forge import\n")),(0,i.kt)("p",null,"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"make"),"\u30b3\u30de\u30f3\u30c9\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u305d\u308c\u3092\u5b9f\u884c\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"npm run make\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"make"),"\u30b3\u30de\u30f3\u30c9\u304c\u6210\u529f\u3059\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"out"),"\u30d5\u30a9\u30eb\u30c0\u306b\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u308b\u3002"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"\u53cc\u65b9\u5411\u306eipc\u901a\u4fe1\u306finvoke\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b"},"\u53cc\u65b9\u5411\u306eIPC\u901a\u4fe1\u306finvoke\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b"),(0,i.kt)("p",null,"\u6b21\u306e\u65b9\u6cd5\u3067\u3082\u53cc\u65b9\u5411\u306eIPC\u901a\u4fe1\u306f\u53ef\u80fd\u3060\u304c\u3001\u305d\u308c\u305e\u308c\u30c7\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.send"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.on"),"\u306e\u7d44\u307f\u5408\u308f\u305b"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.invoke"),"\u3067\u3042\u308c\u30701\u56de\u306e\u3084\u308a\u3068\u308a\u3067\u53cc\u65b9\u5411\u306e\u901a\u4fe1\u304c\u53ef\u80fd\u3060\u304c\u3001\u4e0a\u8a18\u306e\u7d44\u307f\u5408\u308f\u305b\u3060\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.on"),"\u3067\u53d7\u4fe1\u7528\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u304c\u5fc5\u8981\u3068\u306a\u308b\u305f\u3081\u3001\u5197\u9577\u306b\u306a\u308b\u3002\n\u307e\u305f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.send"),"\u3067\u9001\u4fe1\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.on"),"\u3067\u53d7\u4fe1\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9023\u52d5\u3057\u3066\u3044\u308b\u4fdd\u8a3c\u304c\u306a\u3044\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer.sendSync")),(0,i.kt)("p",{parentName:"li"},"\u540c\u671f\u51e6\u7406\u306b\u306a\u308b\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u60aa\u304f\u306a\u308b\u3002"))))}s.isMDXComponent=!0}}]);