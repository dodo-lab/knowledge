"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[713],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),g=u(a),c=r,f=g["".concat(s,".").concat(c)]||g[c]||o[c]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9225:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return o}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],d={title:"Dart"},s=void 0,u={unversionedId:"dart",id:"dart",title:"Dart",description:"Tips",source:"@site/docs/dart.md",sourceDirName:".",slug:"/dart",permalink:"/knowledge/docs/dart",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/dart.md",tags:[],version:"current",frontMatter:{title:"Dart"},sidebar:"autoSidebar",previous:{title:"docker-compose\u306e\u5177\u4f53\u4f8b",permalink:"/knowledge/docs/Docker/docker-compose-example"},next:{title:"Flutter",permalink:"/knowledge/docs/flutter"}},p={},o=[{value:"Tips",id:"tips",level:2},{value:"assert\u52d5\u4f5c\u306e\u74b0\u5883\u5dee\u7570",id:"assert\u52d5\u4f5c\u306e\u74b0\u5883\u5dee\u7570",level:3},{value:"late\u306e\u521d\u671f\u5316",id:"late\u306e\u521d\u671f\u5316",level:3},{value:"\u5f15\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e\u975e\u63a8\u5968\u4e8b\u9805",id:"\u5f15\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e\u975e\u63a8\u5968\u4e8b\u9805",level:3},{value:"\u623b\u308a\u5024\u3092\u6307\u5b9a\u3057\u306a\u3044\u95a2\u6570",id:"\u623b\u308a\u5024\u3092\u6307\u5b9a\u3057\u306a\u3044\u95a2\u6570",level:3},{value:"\u578b\u306e\u691c\u8a3c",id:"\u578b\u306e\u691c\u8a3c",level:3},{value:"Style",id:"style",level:3},{value:"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044Effective Dart: Usage",id:"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044effective-dart-usage",level:3},{value:"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044Effective Dart: Design",id:"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044effective-dart-design",level:3}],g={toc:o};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"assert\u52d5\u4f5c\u306e\u74b0\u5883\u5dee\u7570"},(0,i.kt)("a",{parentName:"h3",href:"https://dart.dev/guides/language/language-tour#assert"},"assert"),"\u52d5\u4f5c\u306e\u74b0\u5883\u5dee\u7570"),(0,i.kt)("p",null,"\u672c\u756a\u74b0\u5883\u3067\u306f\u7121\u8996\u3055\u308c\u308b\u3002\u958b\u767a\u74b0\u5883\u3067\u306f\u3001\u6761\u4ef6\u304c\u507d\u306e\u5834\u5408\u306b\u4f8b\u5916\u3092\u30b9\u30ed\u30fc\u3059\u308b\u3002"),(0,i.kt)("h3",{id:"late\u306e\u521d\u671f\u5316"},(0,i.kt)("a",{parentName:"h3",href:"https://dart.dev/guides/language/language-tour#late-variables"},"late"),"\u306e\u521d\u671f\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"late String userName = _loadUserName();\n")),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u3088\u3046\u306b\u3001\u5ba3\u8a00\u3068\u540c\u6642\u306b\u521d\u671f\u5316\u3059\u308b\u3088\u3046\u306a\u30b3\u30fc\u30c9\u306e\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"userName"),"\u304c\u6700\u521d\u306b\u4f7f\u308f\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u521d\u671f\u5316\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"_loadUserName()"),"\u304c\u5b9f\u884c\uff09\u3055\u308c\u308b\u3002"),(0,i.kt)("h3",{id:"\u5f15\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e\u975e\u63a8\u5968\u4e8b\u9805"},"\u5f15\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e\u975e\u63a8\u5968\u4e8b\u9805"),(0,i.kt)("p",null,"\u5f15\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u53e4\u3044\u8a18\u8ff0\u306e\u30b3\u30fc\u30c9\u3067\u306f",(0,i.kt)("inlineCode",{parentName:"p"},":"),"\uff08\u30b3\u30ed\u30f3\uff09\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u5834\u5408\u304c\u3042\u308b\u3002\u73fe\u5728\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"="),"\u304c\u63a8\u5968\u3055\u308c\u3066\u304a\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},":"),"\u306f\u975e\u30b5\u30dd\u30fc\u30c8\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002"),(0,i.kt)("h3",{id:"\u623b\u308a\u5024\u3092\u6307\u5b9a\u3057\u306a\u3044\u95a2\u6570"},"\u623b\u308a\u5024\u3092\u6307\u5b9a\u3057\u306a\u3044\u95a2\u6570"),(0,i.kt)("p",null,"\u623b\u308a\u5024\u3092\u6307\u5b9a\u3057\u306a\u3044\u95a2\u6570\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3092\u8fd4\u5374\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"foo() {}\nassert(foo() == null);\n")),(0,i.kt)("h3",{id:"\u578b\u306e\u691c\u8a3c"},"\u578b\u306e\u691c\u8a3c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object is Type"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"object.runtimeType == Type"),"\u306e2\u30d1\u30bf\u30fc\u30f3\u3067\u578b\u306e\u691c\u8a3c\u304c\u53ef\u80fd\u3060\u304c\u3001\u524d\u8005\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"object is Type"),"\uff09\u306e\u65b9\u304c\u3088\u308a\u5b89\u5168\u306b\u691c\u8a3c\u53ef\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"if (p is Point) {\n  print('The type of p is Point');\n}\n")),(0,i.kt)("h3",{id:"style"},"Style"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"class"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"enum"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"typedef"),"\u306a\u3069\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"UpperCamelCase"),"\u3092\u4f7f\u3046")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5909\u6570\u3001\u5b9a\u6570\u3001\u95a2\u6570\u306a\u3069\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"lowerCamelCase"),"\u3092\u4f7f\u3046")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3001\u30d5\u30a1\u30a4\u30eb\u540d\u306a\u3069\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"lowercase_with_underscores"),"\u3092\u4f7f\u3046")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"lowercase_with_underscores"),"\u3092\u4f7f\u3046"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:math' as math;\nimport 'package:angular_components/angular_components' as angular_components;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u672a\u4f7f\u7528\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"__"),"\u3068\u5b9a\u7fa9\u3059\u308b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"futureObj.then((_) {\n  // callback\n})\n")))),(0,i.kt)("h3",{id:"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044effective-dart-usage"},"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044",(0,i.kt)("a",{parentName:"h3",href:"https://dart.dev/guides/language/effective-dart/usage"},"Effective Dart: Usage")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#do-use-strings-in-part-of-directives"},(0,i.kt)("inlineCode",{parentName:"a"},"part of"),"\u3092\u4f7f\u3046\u5834\u5408\u306f\u76f8\u5bfe\u30d1\u30b9\u3067\u6307\u5b9a\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#prefer-using--to-convert-null-to-a-boolean-value"},"null\u3092boolean\u306b\u5909\u63db\u3059\u308b\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"a"},"??"),"\u3092\u4f7f\u3046")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#avoid-late-variables-if-you-need-to-check-whether-they-are-initialized"},"\u521d\u671f\u5316\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306a\u3089",(0,i.kt)("inlineCode",{parentName:"a"},"late"),"\u3092\u4f7f\u308f\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#avoid-late-variables-if-you-need-to-check-whether-they-are-initialized"},"nullable\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306b\u30b3\u30d4\u30fc\u3057\u3066\u3001\u578b\u63a8\u8ad6\u3092\u3055\u305b\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#dont-use-listfrom-unless-you-intend-to-change-the-type-of-the-result"},"\u578b\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u306a\u3051\u308c\u3070",(0,i.kt)("inlineCode",{parentName:"a"},"List.from()"),"\u3092\u4f7f\u7528\u3057\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#dont-use-cast-when-a-nearby-operation-will-do"},"Generics\u306a\u3069\u3067\u6e08\u3080\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"a"},"cast()"),"\u3092\u4f7f\u308f\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#avoid-using-cast"},"\u53ef\u80fd\u306a\u9650\u308a",(0,i.kt)("inlineCode",{parentName:"a"},"cast()"),"\u3092\u4f7f\u308f\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#do-follow-a-consistent-rule-for-var-and-final-on-local-variables"},(0,i.kt)("inlineCode",{parentName:"a"},"var"),"\u3068",(0,i.kt)("inlineCode",{parentName:"a"},"final"),"\u306b\u4e00\u8cab\u6027\u3092\u6301\u305f\u305b\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#avoid-storing-what-you-can-calculate"},"\u8a08\u7b97\u3067\u304d\u308b\u3082\u306e\u3092\u30e1\u30f3\u30d0\u3068\u3057\u3066\u4fdd\u6301\u3057\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#do-initialize-fields-at-their-declaration-when-possible"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306b\u4f9d\u5b58\u3057\u306a\u3044\u306e\u3067\u3042\u308c\u3070\u3001\u5ba3\u8a00\u6642\u306b\u521d\u671f\u5316\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#dont-use-late-when-a-constructor-initializer-list-will-do"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u521d\u671f\u5316\u30ea\u30b9\u30c8\u3067\u5341\u5206\u306a\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"late"),"\u3092\u4f7f\u7528\u3057\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#dont-discard-errors-from-catches-without-on-clauses"},(0,i.kt)("inlineCode",{parentName:"a"},"catch"),"\u3057\u305f\u30a8\u30e9\u30fc\u3092\u9069\u5207\u306b\u51e6\u7406\u3057\u3001\u4e0d\u7528\u610f\u306b\u7834\u68c4\u3057\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#do-throw-objects-that-implement-error-only-for-programmatic-errors"},"\u30d7\u30ed\u30b0\u30e9\u30e0\u4e0a\u306e\u30a8\u30e9\u30fc\u306e\u5834\u5408\u306e\u307f\u3001Error\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30b9\u30ed\u30fc\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#prefer-asyncawait-over-using-raw-futures"},(0,i.kt)("inlineCode",{parentName:"a"},"Future"),"\u3092\u305d\u306e\u307e\u307e\u4f7f\u308f\u305a\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"async/await"),"\u3092\u4f7f\u3063\u3066\u53ef\u8aad\u6027\u3092\u4e0a\u3052\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#prefer-asyncawait-over-using-raw-futures"},"\u6709\u7528\u306a\u52b9\u679c\u304c\u306a\u3044\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"a"},"async"),"\u3092\u4f7f\u308f\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#consider-using-higher-order-methods-to-transform-a-stream"},(0,i.kt)("inlineCode",{parentName:"a"},"stream"),"\u3092\u5909\u63db\u3059\u308b\u305f\u3081\u306b\u9ad8\u968e\u95a2\u6570\u3092\u5229\u7528\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#avoid-using-completer-directly"},(0,i.kt)("inlineCode",{parentName:"a"},"Completer"),"\u3092\u76f4\u63a5\u4f7f\u308f\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/usage#do-test-for-futuret-when-disambiguating-a-futureort-whose-type-argument-could-be-object"},(0,i.kt)("inlineCode",{parentName:"a"},"FutureOr<T>"),"\u306e\u578b\u3092\u660e\u78ba\u306b\u3059\u308b\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"is Future<T>"),"\u3067\u691c\u8a3c\u3059\u308b"))),(0,i.kt)("h3",{id:"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044effective-dart-design"},"linter\u3067\u691c\u77e5\u3067\u304d\u306a\u3044",(0,i.kt)("a",{parentName:"h3",href:"https://dart.dev/guides/language/effective-dart/design"},"Effective Dart: Design")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#prefer-making-declarations-private"},"\u5fc5\u8981\u3067\u306a\u3044\u9650\u308a\u5ba3\u8a00\u306f",(0,i.kt)("inlineCode",{parentName:"a"},"private"),"\u306b\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#consider-declaring-multiple-classes-in-the-same-library"},"1\u3064\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u8907\u6570\u306e\u30af\u30e9\u30b9\u3092\u542b\u3081\u308b\u3053\u3068\u3092\u691c\u8a0e\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-extending-a-class-that-isnt-intended-to-be-subclassed"},"\u30b5\u30d6\u30af\u30e9\u30b9\u5316\u3059\u308b\u3053\u3068\u3092\u610f\u56f3\u3057\u3066\u3044\u306a\u3044\u3001\u3082\u3057\u304f\u306f\u4e0d\u660e\u306a\u30af\u30e9\u30b9\u306e\u7d99\u627f\u306f\u907f\u3051\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-document-if-your-class-supports-being-extended"},"\u30af\u30e9\u30b9\u304c\u7d99\u627f\u53ef\u80fd\u304b\u6587\u66f8\u5316\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-implementing-a-class-that-isnt-intended-to-be-an-interface"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3068\u610f\u56f3\u3067\u304d\u306a\u3044\u30af\u30e9\u30b9\u306e\u5b9f\u88c5\u3092\u907f\u3051\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-document-if-your-class-supports-being-used-as-an-interface"},"\u30af\u30e9\u30b9\u304c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u304b\u3092\u6587\u66f8\u5316\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#consider-making-your-constructor-const-if-the-class-supports-it"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092",(0,i.kt)("inlineCode",{parentName:"a"},"const"),"\u306b\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-use-getters-for-operations-that-conceptually-access-properties"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u64cd\u4f5c\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"getter"),"\u3092\u4f7f\u7528\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-using-runtime-type-tests-to-fake-overloading"},"\u30aa\u30fc\u30d0\u30fc\u30ed\u30fc\u30c9\u3092\u3054\u307e\u304b\u3059\u305f\u3081\u306b\u5b9f\u884c\u6642\u306e\u578b\u30c6\u30b9\u30c8\u306e\u4f7f\u7528\u3092\u907f\u3051\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers"},"\u521d\u671f\u5316\u5b50\u3092\u3082\u305f\u306a\u3044",(0,i.kt)("inlineCode",{parentName:"a"},"late final"),"\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u907f\u3051\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-returning-nullable-future-stream-and-collection-types"},"nullable\u306a",(0,i.kt)("inlineCode",{parentName:"a"},"Future"),"\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"Stream"),"\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"collection"),"\u3092\u8fd4\u3055\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-annotate-return-types-on-function-declarations"},"\u95a2\u6570\u5ba3\u8a00\u306b\u306f\u623b\u308a\u5024\u306e\u578b\u3092\u5fc5\u305a\u8a18\u8ff0\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-annotate-parameter-types-on-function-declarations"},"\u95a2\u6570\u5ba3\u8a00\u306e\u5f15\u6570\u306e\u578b\u306f\u5fc5\u305a\u8a18\u8ff0\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-write-type-arguments-on-generic-invocations-that-arent-inferred"},"\u63a8\u8ad6\u3055\u308c\u306a\u3044Generics\u306e\u547c\u3073\u51fa\u3057\u306f\u578b\u3092\u8a18\u8ff0\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#dont-write-type-arguments-on-generic-invocations-that-are-inferred"},"\u63a8\u8ad6\u53ef\u80fd\u306aGenerics\u306e\u547c\u3073\u51fa\u3057\u306b\u306f\u578b\u3092\u8a18\u8ff0\u3057\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-writing-incomplete-generic-types"},"\u4e0d\u5b8c\u5168\u306a\u6c4e\u7528\u578b\u3092\u8a18\u8ff0\u3057\u306a\u3044")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-annotate-with-dynamic-instead-of-letting-inference-fail"},"\u63a8\u8ad6\u5931\u6557\u3067\u306f\u306a\u304f\u3001dynamic\u3092\u660e\u8a18\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#prefer-signatures-in-function-type-annotations"},"\u5f15\u6570\u3068\u3057\u3066\u95a2\u6570\u3092\u53d7\u3051\u53d6\u308b\u5834\u5408\u3001\u53d7\u3051\u53d6\u308b\u95a2\u6570\u306e\u5f15\u6570\u3084\u623b\u308a\u5024\u3092\u660e\u8a18\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking"},"\u3042\u3089\u3086\u308b\u578b\u3092\u53d7\u3051\u53d6\u308a\u305f\u3044\u6642\u306f",(0,i.kt)("inlineCode",{parentName:"a"},"dynamic"),"\u3067\u306f\u306a\u304f\u3001",(0,i.kt)("inlineCode",{parentName:"a"},"Object"),"\u3092\u691c\u8a0e\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-use-futurevoid-as-the-return-type-of-asynchronous-members-that-do-not-produce-values"},"\u5024\u3092\u8fd4\u3055\u306a\u3044\u975e\u540c\u671f\u95a2\u6570\u306e\u623b\u308a\u5024\u306f",(0,i.kt)("inlineCode",{parentName:"a"},"Future<void>"),"\u3068\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-using-futureort-as-a-return-type"},"\u623b\u308a\u5024\u306e\u578b\u3068\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"a"},"FutureOr<T>"),"\u306e\u4f7f\u7528\u3092\u907f\u3051\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-optional-positional-parameters-if-the-user-may-want-to-omit-earlier-parameters"},"\u5f15\u6570\u3092\u7701\u7565\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u5834\u5408\u3001\u540d\u524d\u4ed8\u304d\u5f15\u6570\u306b\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#avoid-mandatory-parameters-that-accept-a-special-no-argument-value"},(0,i.kt)("inlineCode",{parentName:"a"},"null"),"\u3084\u7a7a\u6587\u5b57\u306a\u3069\u3092\u53d7\u3051\u5165\u308c\u308b\u5fc5\u9808\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u907f\u3051\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-use-inclusive-start-and-exclusive-end-parameters-to-accept-a-range"},"\u7bc4\u56f2\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001\u958b\u59cb\u3068\u7d42\u4e86\u3092\u542b\u3080\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/guides/language/effective-dart/design#do-make-your--operator-obey-the-mathematical-rules-of-equality"},(0,i.kt)("inlineCode",{parentName:"a"},"=="),"\u6f14\u7b97\u5b50\u306f\u6570\u5b66\u7684\u306a\u7b49\u4fa1\u95a2\u4fc2\u306b\u5f93\u3046"))))}c.isMDXComponent=!0}}]);