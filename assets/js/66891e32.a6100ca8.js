"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[41],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),v=a,d=m["".concat(c,".").concat(v)]||m[v]||s[v]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3701:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"React Native"},c=void 0,p={unversionedId:"react-native",id:"react-native",title:"React Native",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",source:"@site/docs/react-native.md",sourceDirName:".",slug:"/react-native",permalink:"/knowledge/docs/react-native",draft:!1,tags:[],version:"current",frontMatter:{title:"React Native"},sidebar:"autoSidebar",previous:{title:"npm",permalink:"/knowledge/docs/npm"},next:{title:"React Query",permalink:"/knowledge/docs/react-query"}},u={},s=[{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",level:2},{value:"Tips",id:"tips",level:2},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u3092\u6271\u3046\u969b\u306e\u6ce8\u610f",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u3092\u6271\u3046\u969b\u306e\u6ce8\u610f",level:3}],m={toc:s};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"npx react-native init [project-name]\n\n# TypeScript\u306f\u3053\u3063\u3061\nnpx react-native init [project-name] --template react-native-template-typescript\n")),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u3092\u6271\u3046\u969b\u306e\u6ce8\u610f"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u3092\u6271\u3046\u969b\u306e\u6ce8\u610f"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306eBack\u30ad\u30fc\u3067\u30a2\u30d7\u30ea\u3092\u7d42\u4e86\u3055\u305b\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u72b6\u614b\u306b\u306a\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"onDestroy"),"\u304c\u5b9f\u884c\u3055\u308c\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30bb\u30b9\u306f\u6b8b\u3063\u305f\u307e\u307e")),(0,i.kt)("p",null,"\u6b21\u56de\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306bReact\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3059\u3079\u3066\u30de\u30a6\u30f3\u30c8\u3057\u76f4\u3055\u308c\u308b\u304c\u3001\u30d7\u30ed\u30bb\u30b9\u304c\u6b8b\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u306f\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u3002"),(0,i.kt)("p",null,"\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3001\u305d\u306e\u52d5\u4f5c\u304c\u4e0d\u5177\u5408\u306b\u7e4b\u304c\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3067\u56de\u907f\u53ef\u80fd\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30d7\u30ed\u30bb\u30b9\u3092\u7d42\u4e86\u3059\u308b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MainActivity.java",title:"MainActivity.java"},"@Override\npublic void invokeDefaultOnBackPressed() {\n  System.exit(0);\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u72b6\u614b\u306b\u3059\u308b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MainActivity.java",title:"MainActivity.java"},"@Override\npublic void invokeDefaultOnBackPressed() {\n  if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {\n    if (!moveTaskToBack(false)) {\n      super.invokeDefaultOnBackPressed();\n    }\n    return;\n  }\n\n  super.invokeDefaultOnBackPressed();\n}\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8a73\u7d30\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/pull/15378"},"expo-template-bare-minimum\u306e\u5bfe\u7b56"),"\u3092\u53c2\u7167\u3002"))))))}v.isMDXComponent=!0}}]);