"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[887],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,T=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(T,l(l({ref:t},u),{},{components:n})):r.createElement(T,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"MySQL"},c=void 0,p={unversionedId:"mysql",id:"mysql",title:"MySQL",description:"Tips",source:"@site/docs/mysql.md",sourceDirName:".",slug:"/mysql",permalink:"/knowledge/docs/mysql",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/mysql.md",tags:[],version:"current",frontMatter:{title:"MySQL"},sidebar:"autoSidebar",previous:{title:"Flutter",permalink:"/knowledge/docs/flutter"},next:{title:"Next.js",permalink:"/knowledge/docs/nextjs"}},u={},s=[{value:"Tips",id:"tips",level:2},{value:"\u6587\u5b57\u30b3\u30fc\u30c9\u6307\u5b9a",id:"\u6587\u5b57\u30b3\u30fc\u30c9\u6307\u5b9a",level:3},{value:"DB\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a",id:"db\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a",level:4},{value:"\u30c6\u30fc\u30d6\u30eb\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a",id:"\u30c6\u30fc\u30d6\u30eb\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a",level:4},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u3054\u3068\u306b\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u3054\u3068\u306b\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a",level:4},{value:"\u30c6\u30fc\u30d6\u30eb\u304c\u306a\u3051\u308c\u3070\u4f5c\u6210",id:"\u30c6\u30fc\u30d6\u30eb\u304c\u306a\u3051\u308c\u3070\u4f5c\u6210",level:3},{value:"AUTO_INCREMENT\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a",id:"auto_increment\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"\u6587\u5b57\u30b3\u30fc\u30c9\u6307\u5b9a"},"\u6587\u5b57\u30b3\u30fc\u30c9\u6307\u5b9a"),(0,i.kt)("h4",{id:"db\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a"},"DB\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT CHARACTER SET"),"\u3067\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci\n")),(0,i.kt)("h4",{id:"\u30c6\u30fc\u30d6\u30eb\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a"},"\u30c6\u30fc\u30d6\u30eb\u4f5c\u6210\u6642\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT CHARSET"),"\u3067\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE category(\n  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,\n) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci\n")),(0,i.kt)("h4",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u3054\u3068\u306b\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u3054\u3068\u306b\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CHARACTER SET"),"\u3067\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u6307\u5b9a\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE category(\n  name VARCHAR(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,\n)\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL"),"\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"CHARACTER SET"),"\u306e\u5f8c\u306b\u8a18\u8ff0\u3057\u306a\u3044\u3068\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u306b\u306a\u308b\u3002"))),(0,i.kt)("h3",{id:"\u30c6\u30fc\u30d6\u30eb\u304c\u306a\u3051\u308c\u3070\u4f5c\u6210"},"\u30c6\u30fc\u30d6\u30eb\u304c\u306a\u3051\u308c\u3070\u4f5c\u6210"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS"),"\u3092\u4ed8\u4e0e\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS category(\n  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,\n)\n")),(0,i.kt)("h3",{id:"auto_increment\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a"},"AUTO_INCREMENT\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a"),(0,i.kt)("p",null,"\u30d5\u30a3\u30fc\u30eb\u30c9\u8a2d\u5b9a\u306e\u5f8c\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT = XXXX"),"\u3067\u6307\u5b9a\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS category(\n  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,\n) AUTO_INCREMENT = 1000000;\n")))}m.isMDXComponent=!0}}]);