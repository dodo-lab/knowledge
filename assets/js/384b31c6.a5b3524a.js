"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[399],{6862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return k}});var a=n(7462),i=n(3366),p=(n(7294),n(3905)),r=["components"],o={title:"Next.js"},l=void 0,s={unversionedId:"nextjs",id:"nextjs",isDocsHomePage:!1,title:"Next.js",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",source:"@site/docs/nextjs.md",sourceDirName:".",slug:"/nextjs",permalink:"/knowledge/docs/nextjs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/nextjs.md",tags:[],version:"current",frontMatter:{title:"Next.js"},sidebar:"autoSidebar",previous:{title:"MySQL",permalink:"/knowledge/docs/mysql"},next:{title:"SEO",permalink:"/knowledge/docs/seo"}},d=[{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",children:[]},{value:"\u74b0\u5883\u5909\u6570",id:"\u74b0\u5883\u5909\u6570",children:[]},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u8a08\u6e2c",id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u8a08\u6e2c",children:[]},{value:"Tips",id:"tips",children:[]}],m={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app [project-name]\n\n# TypeScript\u306a\u3089\u3053\u3063\u3061\nnpx create-next-app [project-name] --typescript\n")),(0,p.kt)("h2",{id:"\u74b0\u5883\u5909\u6570"},"\u74b0\u5883\u5909\u6570"),(0,p.kt)("p",null,"\u6b21\u306e\u74b0\u5883\u5909\u6570\u306e\u5b9a\u7fa9\u7528\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3067\u3001\u5229\u7528\u53ef\u80fd\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},".env.development")),(0,p.kt)("p",{parentName:"li"},"\u958b\u767a\u74b0\u5883\u7528\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"next dev"),"\u3067\u6709\u52b9\u306b\u306a\u308b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},".env.production")),(0,p.kt)("p",{parentName:"li"},"\u672c\u756a\u74b0\u5883\u7528\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"next start"),"\u3067\u6709\u52b9\u306b\u306a\u308b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},".env.local")),(0,p.kt)("p",{parentName:"li"},"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u7528\u3067\u3001",(0,p.kt)("inlineCode",{parentName:"p"},".env.development"),"\u3084",(0,p.kt)("inlineCode",{parentName:"p"},".env.production"),"\u306e\u5185\u5bb9\u3092\u4e0a\u66f8\u304d\u3059\u308b\u3002\u305d\u306e\u305f\u3081\u3001",(0,p.kt)("inlineCode",{parentName:"p"},".gitignore"),"\u3067Git\u7ba1\u7406\u5bfe\u8c61\u5916\u306b\u3057\u3066\u304a\u304f\u3079\u304d\u3002"),(0,p.kt)("p",{parentName:"li"},"\u57fa\u672c\u7684\u306b\u306f",(0,p.kt)("inlineCode",{parentName:"p"},".env.development"),"\u3092\u30c1\u30fc\u30e0\u5185\u3067\u5171\u6709\u3057\u3066\u304a\u3051\u3070\u4e8b\u8db3\u308a\u308b\u306f\u305a\u3060\u304c\u3001\u500b\u4eba\u7684\u306b\u8a66\u3057\u305f\u3044\u3053\u3068\u304c\u3042\u308b\u969b\u306b\u6709\u7528\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},".env.test")),(0,p.kt)("p",{parentName:"li"},"\u30c6\u30b9\u30c8\u74b0\u5883\u7528\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u306b",(0,p.kt)("inlineCode",{parentName:"p"},"test"),"\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u6709\u52b9\u3002",(0,p.kt)("inlineCode",{parentName:"p"},".env.local"),"\u306b\u4e0a\u66f8\u304d\u3055\u308c\u306a\u3044\u7279\u5fb4\u304c\u3042\u308b\u3002"))),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u74b0\u5883\u5909\u6570\u306f\u57fa\u672c\u7684\u306b",(0,p.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u3084",(0,p.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\u3068\u3044\u3063\u305fSG\u306e\u30d3\u30eb\u30c9\uff0fSSR\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u53c2\u7167\u53ef\u80fd\u3002\n\u305f\u3060\u3057\u3001\u5909\u6570\u540d\u306e\u5148\u982d\u306b",(0,p.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_"),"\u3092\u4ed8\u4e0e\u3059\u308b\u3068\u30a4\u30f3\u30e9\u30a4\u30f3\u5c55\u958b\u3055\u308c\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u3082\u53c2\u7167\u53ef\u80fd\u306b\u306a\u308b\u3002"))),(0,p.kt)("h2",{id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u8a08\u6e2c"},"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u8a08\u6e2c"),(0,p.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306breportWebVitals\u95a2\u6570\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u3067\u8a08\u6e2c\u3002\n\u30ed\u30b0\u51fa\u529b\u3057\u3066\u3044\u308b\u304c\u3001\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9\u3078\u9001\u4fe1\u3057\u3066\u5f8c\u304b\u3089\u8ffd\u8de1\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=pages/_app.js",title:"pages/_app.js"},"export function reportWebVitals(metric) {\n  console.log(metric);\n}\n\nfunction CustomApp({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}\n\nexport default CustomApp;\n")),(0,p.kt)("p",null,"\u8a73\u7d30\u306f",(0,p.kt)("a",{parentName:"p",href:"https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/measuring-performance"},"\u516c\u5f0f"),"\u3092\u53c2\u7167\u3002"),(0,p.kt)("h2",{id:"tips"},"Tips"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\u306f\u30d3\u30eb\u30c9\u6642\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\u304c\u3001\u958b\u767a\u4e2d\uff08",(0,p.kt)("inlineCode",{parentName:"li"},"next dev"),"\uff09\u306b\u9650\u3063\u3066\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u3054\u3068\u306b\u5b9f\u884c\u3055\u308c\u308b\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4efb\u610f\u306e\u5834\u6240\u306b",(0,p.kt)("inlineCode",{parentName:"li"},"// @refresh reset"),"\u306e\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u308c\u308b\u3053\u3068\u3067\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3059\u308b\u305f\u3073\u306b\u5bfe\u8c61\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u72b6\u614b\u3092\u5f37\u5236\u7684\u306b\u30ea\u30bb\u30c3\u30c8\u3057\u3001\u518d\u30de\u30a6\u30f3\u30c8\u3055\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u3002")))}k.isMDXComponent=!0}}]);