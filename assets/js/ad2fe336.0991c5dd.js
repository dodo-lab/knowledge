"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[332],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),y=o,d=s["".concat(u,".").concat(y)]||s[y]||f[y]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4545:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"JavaScript Security"},u=void 0,l={unversionedId:"Security/javascript",id:"Security/javascript",title:"JavaScript Security",description:"CSP\u306e\u5f71\u97ff",source:"@site/docs/Security/javascript.md",sourceDirName:"Security",slug:"/Security/javascript",permalink:"/knowledge/docs/Security/javascript",draft:!1,tags:[],version:"current",frontMatter:{title:"JavaScript Security"},sidebar:"autoSidebar",previous:{title:"HTML5 Security",permalink:"/knowledge/docs/Security/html5"},next:{title:"Dart",permalink:"/knowledge/docs/dart"}},p={},f=[{value:"CSP\u306e\u5f71\u97ff",id:"csp\u306e\u5f71\u97ff",level:2}],s={toc:f};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"csp\u306e\u5f71\u97ff"},"CSP\u306e\u5f71\u97ff"),(0,i.kt)("p",null,"CSP\u3092\u5c0e\u5165\u3059\u308b\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30a4\u30f3\u30e9\u30a4\u30f3JavaScript\u3068eval\u95a2\u6570\u304c\u7121\u52b9\u306b\u306a\u308b\u3002"),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-eval"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-inline"),"\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u6709\u52b9\u306b\u3067\u304d\u308b\u3002"))}y.isMDXComponent=!0}}]);