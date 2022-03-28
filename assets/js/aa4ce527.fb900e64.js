"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[87],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Flutter"},p=void 0,s={unversionedId:"flutter",id:"flutter",title:"Flutter",description:"\u30b3\u30de\u30f3\u30c9",source:"@site/docs/flutter.md",sourceDirName:".",slug:"/flutter",permalink:"/knowledge/docs/flutter",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/flutter.md",tags:[],version:"current",frontMatter:{title:"Flutter"},sidebar:"autoSidebar",previous:{title:"Dart",permalink:"/knowledge/docs/dart"},next:{title:"Linux",permalink:"/knowledge/docs/linux"}},u={},m=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2},{value:"\u30ea\u30f3\u30af",id:"\u30ea\u30f3\u30af",level:2},{value:"Tips",id:"tips",level:2},{value:"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9",id:"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9",level:3},{value:"JSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u30b3\u30fc\u30c9\u306e\u81ea\u52d5\u751f\u6210",id:"json\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u30b3\u30fc\u30c9\u306e\u81ea\u52d5\u751f\u6210",level:3},{value:"Provider\u3068ChangeNotifierProvider\u306e\u4f7f\u3044\u5206\u3051",id:"provider\u3068changenotifierprovider\u306e\u4f7f\u3044\u5206\u3051",level:3},{value:"context.watch()\u3068context.read()\u306e\u4f7f\u3044\u5206\u3051",id:"contextwatch\u3068contextread\u306e\u4f7f\u3044\u5206\u3051",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"flutter pub get\n")))),(0,i.kt)("h2",{id:"\u30ea\u30f3\u30af"},"\u30ea\u30f3\u30af"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/"},"Flutter Docs")),(0,i.kt)("p",{parentName:"li"},"Flutter\u516c\u5f0f\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://flutter.github.io/samples/#"},"Flutter Samples")),(0,i.kt)("p",{parentName:"li"},"Flutter\u306e\u30b5\u30f3\u30d7\u30eb\u96c6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/"},"pub.dev")),(0,i.kt)("p",{parentName:"li"},"Flutter\u516c\u5f0f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Solido/awesome-flutter"},"Awesome Flutter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://dart.dev/codelabs/dart-cheatsheet"},"Dart cheatsheet codelab"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://material.io/components?platform=flutter"},"Material Design")))),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9"},"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9"),(0,i.kt)("p",null,"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u5236\u5fa1\u306bDart\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"Isolate"),"\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u308b\u304c\u3001Flutter\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"compute"),"\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u5f15\u6570\u306b\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u3067\u5b9f\u884c\u3059\u308b\u95a2\u6570\u3001\u7b2c\u4e8c\u5f15\u6570\u306b\u95a2\u6570\u306e\u5f15\u6570\u3092\u6307\u5b9a\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/foundation.dart';\n\ncompute(function, params);\n")),(0,i.kt)("h3",{id:"json\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u30b3\u30fc\u30c9\u306e\u81ea\u52d5\u751f\u6210"},"JSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u30b3\u30fc\u30c9\u306e\u81ea\u52d5\u751f\u6210"),(0,i.kt)("p",null,"JSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u30b3\u30fc\u30c9\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u3001\u307e\u305a\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"json_serializable"),"\u3092\u7d44\u307f\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"yaml title=pubspec.yaml",yaml:!0,title:"pubspec.yaml"},"dependencies:\n+ json_annotation: <version>\n\ndev_dependencies:\n+ build_runner: <version>\n+ json_serializable: <version>\n")),(0,i.kt)("p",null,"\u81ea\u52d5\u751f\u6210\u306e\u5143\u3068\u306a\u308b\u30af\u30e9\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=user.dart",title:"user.dart"},"import 'package:json_annotation/json_annotation.dart';\n\n// User\u30af\u30e9\u30b9\u304b\u3089\u81ea\u52d5\u751f\u6210\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb\npart 'user.g.dart';\n\n// \u3053\u306e\u30af\u30e9\u30b9\u304cJSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3092\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u660e\u793a\u3059\u308b\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3.\n@JsonSerializable()\nclass User {\n  User(this.name, this.email);\n\n  String name;\n  String email;\n}\n")),(0,i.kt)("p",null,"\u6b21\u306e\u3044\u305a\u308c\u304b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30d3\u30eb\u30c9\u3057\u3001JSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u306e\u30b3\u30fc\u30c9\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flutter pub run build_runner build")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flutter pub run build_runner watch"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f8c\u8005\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"watch"),"\u306e\u65b9\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u3092\u76e3\u8996\u3057\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u81ea\u52d5\u7684\u306b\u30d3\u30eb\u30c9\u3057\u3066\u304f\u308c\u308b\u3002"))),(0,i.kt)("p",null,"\u81ea\u52d5\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=user.g.dart",title:"user.g.dart"},"// GENERATED CODE - DO NOT MODIFY BY HAND\n\npart of 'user.dart';\n\n// **************************************************************************\n// JsonSerializableGenerator\n// **************************************************************************\n\nUser _$UserFromJson(Map<String, dynamic> json) => User(\n      json['name'] as String,\n      json['email'] as String,\n    );\n\nMap<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{\n      'name': instance.name,\n      'email': instance.email,\n    };\n")),(0,i.kt)("p",null,"JSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u306eprivate\u306a\u30d8\u30eb\u30d1\u30fc\u95a2\u6570\u304c\u81ea\u52d5\u751f\u6210\u3055\u308c\u305f\u306e\u3067\u3001\u305d\u308c\u3092\u5229\u7528\u3057\u305f\u95a2\u6570\u3092User\u30af\u30e9\u30b9\u306b\u5b9f\u88c5\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"dart title=user.dart",dart:!0,title:"user.dart"},"import 'package:json_annotation/json_annotation.dart';\n\n// User\u30af\u30e9\u30b9\u304b\u3089\u81ea\u52d5\u751f\u6210\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb\npart 'user.g.dart';\n\n// \u3053\u306e\u30af\u30e9\u30b9\u304cJSON\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3092\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u660e\u793a\u3059\u308b\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3.\n@JsonSerializable()\nclass User {\n  User(this.name, this.email);\n\n  String name;\n  String email;\n\n+ // \u81ea\u52d5\u751f\u6210\u3055\u308c\u305f_$UserFromJson\u95a2\u6570\u306bJSON\u30c7\u30fc\u30bf\u3092\u6e21\u3057\u3001\u65b0\u3057\u3044User\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b.\n+ factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);\n\n+ // \u81ea\u52d5\u751f\u6210\u3055\u308c\u305f_$UserToJson\u95a2\u6570\u3067User\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089JSON\u5f62\u5f0f\u3078\u5909\u63db\u3059\u308b.\n+ Map<String, dynamic> toJson() => _$UserToJson(this);\n}\n")),(0,i.kt)("h3",{id:"provider\u3068changenotifierprovider\u306e\u4f7f\u3044\u5206\u3051"},"Provider\u3068ChangeNotifierProvider\u306e\u4f7f\u3044\u5206\u3051"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provider"),(0,i.kt)("p",{parentName:"li"},"\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u3001\u5b50\u8981\u7d20\u306b\u53d7\u3051\u6e21\u3059\u3060\u3051\u3067\u826f\u3044\u5834\u5408\u306b\u5229\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ChangeNotifierProvider"),(0,i.kt)("p",{parentName:"li"},"\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306b\u5229\u7528\u3002"))),(0,i.kt)("h3",{id:"contextwatch\u3068contextread\u306e\u4f7f\u3044\u5206\u3051"},"context.watch()\u3068context.read()\u306e\u4f7f\u3044\u5206\u3051"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"context.watch()"),(0,i.kt)("p",{parentName:"li"},"\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30fc\u30bf\u3092\u5143\u306bUI\u3092\u69cb\u7bc9\u3059\u308b\u5834\u5408\u306b\u5229\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"context.read()"),(0,i.kt)("p",{parentName:"li"},"\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30fc\u30bf\u3092\u5143\u306bUI\u69cb\u7bc9\u4ee5\u5916\u306e\u5236\u5fa1\u3092\u3059\u308b\u5834\u5408\u306b\u5229\u7528\u3002"))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"context.read()"),"\u3067\u554f\u984c\u306a\u3044\u30d1\u30bf\u30fc\u30f3\u306b\u304a\u3044\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"context.watch()"),"\u3092\u4f7f\u3063\u3066\u3057\u307e\u3046\u3068\u3001\u4e0d\u5fc5\u8981\u306a\u518d\u63cf\u753b\u304c\u884c\u308f\u308c\u3066\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u4f4e\u4e0b\u306b\u7e4b\u304c\u308b\u3002"))))}d.isMDXComponent=!0}}]);