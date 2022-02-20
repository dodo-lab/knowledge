"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[784],{2540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],c={title:"React Query"},s=void 0,u={unversionedId:"react-query",id:"react-query",isDocsHomePage:!1,title:"React Query",description:"Tips",source:"@site/docs/react-query.md",sourceDirName:".",slug:"/react-query",permalink:"/knowledge/docs/react-query",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/react-query.md",tags:[],version:"current",frontMatter:{title:"React Query"},sidebar:"autoSidebar",previous:{title:"npm",permalink:"/knowledge/docs/npm"},next:{title:"SEO",permalink:"/knowledge/docs/seo"}},d=[{value:"Tips",id:"tips",children:[{value:"Query\u306e\u4f9d\u5b58\u95a2\u4fc2",id:"query\u306e\u4f9d\u5b58\u95a2\u4fc2",children:[]},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf",children:[]}]}],l={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("h3",{id:"query\u306e\u4f9d\u5b58\u95a2\u4fc2"},"Query\u306e\u4f9d\u5b58\u95a2\u4fc2"),(0,r.kt)("p",null,"\u8907\u6570\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),"\u3092\u6271\u3046\u969b\u306b\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u305f\u305b\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3002\n\u4f8b\u3048\u3070\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u304b\u3089\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u6240\u5c5e\u3057\u3066\u3044\u308b\u90e8\u7f72\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u2026\u3068\u3044\u3063\u305f\u30b1\u30fc\u30b9\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"enabled"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u53ef\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185",title:"React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185"},"// \u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\nconst { data: account } = useQuery(['account', email], getAccountByEmail);\nconst accountId = account?.id\n\n// \u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u6240\u5c5e\u3059\u308b\u90e8\u7f72\u60c5\u5831\u3092\u53d6\u5f97\nconst { data: department } = useQuery(\n  ['departments', accountId],\n  getDepartmentsByAccount,\n  {\n    // \u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831(ID)\u304c\u53d6\u5f97\u3067\u304d\u308b\u307e\u3067\u3001\u3053\u306eQuery\u306f\u5b9f\u884c\u3055\u308c\u306a\u3044\n    enabled: !!accountId,\n  }\n)\n")),(0,r.kt)("h3",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf"),(0,r.kt)("p",null,"\u3044\u305a\u308c\u304b\u306e\u30d5\u30a7\u30c3\u30c1\u4e2d\u306b\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u305f\u3044\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"useIsFetching"),"\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u53ef\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {CircularProgress} from '@mui/material';\nimport React from 'react';\nimport {useIsFetching} from 'react-query';\n\nconst GlobalFetchingIndicator: React.FC = () => {\n  const isFetching = useIsFetching();\n\n  return isFetching ? (\n    <CircularProgress sx={{position: 'absolute', top: 10, right: 10}} size={24} />\n  ) : null;\n};\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5b9f\u88c5\u4f8b\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"mui"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3002"))))}p.isMDXComponent=!0}}]);