"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[721],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||l[f]||c;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6048:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={title:"npm"},p=void 0,s={unversionedId:"npm",id:"npm",isDocsHomePage:!1,title:"npm",description:"scripts\u306e\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u524d\u306b\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a",source:"@site/docs/npm.md",sourceDirName:".",slug:"/npm",permalink:"/knowledge/docs/npm",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/npm.md",tags:[],version:"current",frontMatter:{title:"npm"},sidebar:"autoSidebar",previous:{title:"Next.js",permalink:"/knowledge/docs/nextjs"},next:{title:"React Query",permalink:"/knowledge/docs/react-query"}},u=[{value:"scripts\u306e\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u524d\u306b\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a",id:"scripts\u306e\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u524d\u306b\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"scripts\u306e\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u524d\u306b\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a"},"scripts\u306e\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u524d\u306b\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Linux / Mac"),"\u3068",(0,c.kt)("inlineCode",{parentName:"p"},"Windows"),"\u3067\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a\u65b9\u6cd5\u306b\u5dee\u7570\u304c\u3042\u308b\u305f\u3081\u3001",(0,c.kt)("inlineCode",{parentName:"p"},"cross-env"),"\u3092\u4f7f\u3063\u3066\u8a18\u8ff0\u3092\u7d71\u4e00\u3059\u308b\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=cross-env\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",title:"cross-env\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"npm i -D cross-env\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'"scripts": {\n  "debug": "cross-env NODE_OPTIONS=\'--inspect\' next dev",\n}\n')))}m.isMDXComponent=!0}}]);