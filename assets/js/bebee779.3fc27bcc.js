"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[784],{2540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"React Query"},s=void 0,p={unversionedId:"react-query",id:"react-query",isDocsHomePage:!1,title:"React Query",description:"Tips",source:"@site/docs/react-query.md",sourceDirName:".",slug:"/react-query",permalink:"/knowledge/docs/react-query",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/react-query.md",tags:[],version:"current",frontMatter:{title:"React Query"},sidebar:"autoSidebar",previous:{title:"npm",permalink:"/knowledge/docs/npm"},next:{title:"SEO",permalink:"/knowledge/docs/seo"}},u=[{value:"Tips",id:"tips",children:[{value:"Query\u306e\u4f9d\u5b58\u95a2\u4fc2",id:"query\u306e\u4f9d\u5b58\u95a2\u4fc2",children:[]},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf",children:[]},{value:"\u65b0\u305f\u306a\u30d5\u30a7\u30c3\u30c1\u4e2d\u306b\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8868\u793a",id:"\u65b0\u305f\u306a\u30d5\u30a7\u30c3\u30c1\u4e2d\u306b\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8868\u793a",children:[]},{value:"initialData\u3068placeholderData\u306e\u4f7f\u3044\u5206\u3051",id:"initialdata\u3068placeholderdata\u306e\u4f7f\u3044\u5206\u3051",children:[]},{value:"\u4e8b\u524d\u306b\u30af\u30a8\u30ea\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b",id:"\u4e8b\u524d\u306b\u30af\u30a8\u30ea\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b",children:[]},{value:"Query\u3067\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5909\u63db",id:"query\u3067\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5909\u63db",children:[]},{value:"\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6291\u5236",id:"\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6291\u5236",children:[]},{value:"QueryKey\u306e\u7ba1\u7406",id:"querykey\u306e\u7ba1\u7406",children:[]},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u307e\u305f\u306f\u7279\u5b9aQueryKey\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u307e\u305f\u306f\u7279\u5b9aquerykey\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",children:[]},{value:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u751f\u5b58\u671f\u9593",id:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u751f\u5b58\u671f\u9593",children:[]}]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"query\u306e\u4f9d\u5b58\u95a2\u4fc2"},"Query\u306e\u4f9d\u5b58\u95a2\u4fc2"),(0,i.kt)("p",null,"\u8907\u6570\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\u3092\u6271\u3046\u969b\u306b\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u305f\u305b\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3002\n\u4f8b\u3048\u3070\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u304b\u3089\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u6240\u5c5e\u3057\u3066\u3044\u308b\u90e8\u7f72\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u2026\u3068\u3044\u3063\u305f\u30b1\u30fc\u30b9\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u53ef\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185",title:"React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185"},"// \u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\nconst { data: account } = useQuery(['account', email], getAccountByEmail);\nconst accountId = account?.id\n\n// \u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u6240\u5c5e\u3059\u308b\u90e8\u7f72\u60c5\u5831\u3092\u53d6\u5f97\nconst { data: department } = useQuery(\n  ['departments', accountId],\n  getDepartmentsByAccount,\n  {\n    // \u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831(ID)\u304c\u53d6\u5f97\u3067\u304d\u308b\u307e\u3067\u3001\u3053\u306eQuery\u306f\u5b9f\u884c\u3055\u308c\u306a\u3044\n    enabled: !!accountId,\n  }\n)\n")),(0,i.kt)("h3",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf"),(0,i.kt)("p",null,"\u3044\u305a\u308c\u304b\u306e\u30d5\u30a7\u30c3\u30c1\u4e2d\u306b\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u305f\u3044\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"useIsFetching"),"\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u53ef\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {CircularProgress} from '@mui/material';\nimport React from 'react';\nimport {useIsFetching} from 'react-query';\n\nconst GlobalFetchingIndicator: React.FC = () => {\n  const isFetching = useIsFetching();\n\n  return isFetching ? (\n    <CircularProgress sx={{position: 'absolute', top: 10, right: 10}} size={24} />\n  ) : null;\n};\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5b9f\u88c5\u4f8b\u3067\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"mui"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3002"))),(0,i.kt)("h3",{id:"\u65b0\u305f\u306a\u30d5\u30a7\u30c3\u30c1\u4e2d\u306b\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8868\u793a"},"\u65b0\u305f\u306a\u30d5\u30a7\u30c3\u30c1\u4e2d\u306b\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8868\u793a"),(0,i.kt)("p",null,"SPA\u7b49\u3067\u30da\u30fc\u30b8\u3084\u4e00\u90e8\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5207\u66ff\u3048\u308b\u969b\u3001\u30d5\u30a7\u30c3\u30c1\u4e2d\u306f\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u3066\u304a\u304d\u305f\u3044\u30b1\u30fc\u30b9\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"keepPreviousData"),"\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u53ef\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185",title:"React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185"},"// isPreviousData\u304ctrue\u306a\u3089\u53e4\u3044data\u3092\u8fd4\u3057\u3066\u3044\u308b\nconst { data, isPreviousData } = useQuery(['page', page], getPageContents, {\n  keepPreviousData: true\n});\n")),(0,i.kt)("h3",{id:"initialdata\u3068placeholderdata\u306e\u4f7f\u3044\u5206\u3051"},"initialData\u3068placeholderData\u306e\u4f7f\u3044\u5206\u3051"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"initialData"),(0,i.kt)("p",{parentName:"li"},"\u671f\u5f85\u3059\u308b\u30af\u30a8\u30ea\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u3059\u3067\u306b\u30a2\u30d7\u30ea\u5074\u3067\u4fdd\u6301\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u4f7f\u7528\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"config.initialData"),"\u306b\u30c7\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u3001\u521d\u56de\u306e\u30ed\u30fc\u30c9\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"placeholderData"),(0,i.kt)("p",{parentName:"li"},"\u30af\u30a8\u30ea\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u5f85\u305f\u305a\u3001\u7591\u4f3c\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3078\u53cd\u6620\u3057\u305f\u3044\u5834\u5408\u306b\u4f7f\u7528\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"initialData"),"\u3068\u4f3c\u3066\u3044\u308b\u304c\u3001\u3053\u3061\u3089\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u306a\u3044\u3002\u3042\u304f\u307e\u3067\u30af\u30a8\u30ea\u306e\u5b9f\u884c\u7d50\u679c\u304c\u8fd4\u3063\u3066\u304f\u308b\u307e\u3067\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u4f7f\u3046\u4e00\u6642\u7684\u306a\u30c7\u30fc\u30bf\u3002"))),(0,i.kt)("h3",{id:"\u4e8b\u524d\u306b\u30af\u30a8\u30ea\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b"},"\u4e8b\u524d\u306b\u30af\u30a8\u30ea\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b"),(0,i.kt)("p",null,"\u5b9f\u884c\u3055\u308c\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30af\u30a8\u30ea\u3092\u4e88\u6e2c\u3067\u304d\u308b\u306e\u3067\u3042\u308c\u3070\u3001\u4e8b\u524d\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u3057\u3066\u304a\u304f\u3053\u3068\u3067UX\u3092\u5411\u4e0a\u3067\u304d\u308b\u3002\n\u4e8b\u524d\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u3059\u308b\u306b\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"prefetchQuery"),"\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185",title:"React\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185"},"const queryClient = useQueryClient();\nconst prefetchAccount = async () => {\n  await queryClient.prefetchQuery(['account', email], getAccountByEmail);\n};\n")),(0,i.kt)("h3",{id:"query\u3067\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5909\u63db"},"Query\u3067\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5909\u63db"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u306a\u3069\u3067\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5909\u63db\u3059\u308b\u624b\u6bb5\u306f\u6b21\u306e\u3068\u304a\u308a\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"queryFn"),"\u5185\u3067\u306e\u5909\u63db"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const getTodos = async (): Promise<Todo[]> => {\n  const res = await axios.get<Todo[]>('todos');\n  return res.data.map(todo => todo.name.toUpperCase());\n}\n\nexport const useGetTodos = () => useQuery('todos', getTodos);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3067\u5909\u63db"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const getTodos = async (): Promise<Todo[]> => {\n  const res = await axios.get<Todo[]>('todos');\n  return res.data;\n}\n\nexport const useGetTodos = () => {\n  const query = useQuery('todos', getTodos)\n\n  return {\n    ...query,\n    data: useMemo(\n      () => query.data?.map(todo => todo.name.toUpperCase()),\n      [query.data]\n    ),\n  }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u5909\u63db"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const getTodos = async (): Promise<Todo[]> => {\n  const res = await axios.get<Todo[]>('todos');\n  return res.data;\n}\n\nexport const useGetTodos = () => {\n  return useQuery('todos', getTodos, {\n    select: useCallback(\n      (data: Todo[]) => data.map(todo => todo.name.toUpperCase()),\n      []\n    ),\n  })\n}\n")))),(0,i.kt)("h3",{id:"\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6291\u5236"},"\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6291\u5236"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u3092\u4f7f\u3046\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching"),"\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u66f4\u65b0\u3055\u308c\u308b\u305f\u3073\u306b\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u3002"),(0,i.kt)("p",null,"\u3053\u308c\u3092\u6291\u5236\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u624b\u6bb5\u304c\u3042\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"notifyOnChangeProps"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3001\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u5bfe\u8c61\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=data\u304c\u66f4\u65b0\u3055\u308c\u305f\u6642\u3060\u3051\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",title:"data\u304c\u66f4\u65b0\u3055\u308c\u305f\u6642\u3060\u3051\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"},"const { data } = useQuery(['account', email], getAccountByEmail, {\n  notifyOnChangeProps: ['data'],\n});\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e0a\u8a18\u306e\u4f8b\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"error"),"\u306a\u3069\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u53cd\u6620\u3057\u305f\u3044\u5834\u5408\u306f\u90fd\u5ea6",(0,i.kt)("inlineCode",{parentName:"p"},"notifyOnChangeProps"),"\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u6b21\u306e\u3088\u3046\u306a\u30c7\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308b\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u30b3\u30b9\u30c8\u306e\u5897\u52a0"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u6f0f\u308c\u304c\u3042\u3063\u305f\u969b\u306b\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u4e0d\u5177\u5408\u304c\u767a\u751f"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"notifyOnChangeProps"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"'tracked'"),"\u3092\u6307\u5b9a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"'tracked'"),"\u306e\u6307\u5b9a\u306b\u3088\u308a\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8ffd\u8de1\u3057\u3001\u5fc5\u8981\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u66f4\u65b0\u3055\u308c\u305f\u6642\u306e\u307f\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=data\u3068isLoading\u304c\u66f4\u65b0\u3055\u308c\u305f\u6642\u3060\u3051\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",title:"data\u3068isLoading\u304c\u66f4\u65b0\u3055\u308c\u305f\u6642\u3060\u3051\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"},"const { data, isLoading } = useQuery(['account', email], getAccountByEmail, {\n  notifyOnChangeProps: 'tracked',\n});\n\nreturn (\n  <>\n    {isLoading && <p>Loading...</p>}\n    {data && <p>data.name</p>}\n  </>\n);\n")),(0,i.kt)("p",{parentName:"li"},"\u6b21\u306e\u3088\u3046\u306b\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u9069\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      notifyOnChangeProps: 'tracked',\n    },\n  },\n});\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Example />\n    </QueryClientProvider>\n  )\n}\n")))),(0,i.kt)("h3",{id:"querykey\u306e\u7ba1\u7406"},"QueryKey\u306e\u7ba1\u7406"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"queryClient.invalidateQueries"),"\u306a\u3069\u306e\u5f15\u6570\u306b\u6e21\u3059",(0,i.kt)("inlineCode",{parentName:"p"},"QueryKey"),"\u3092\u76f4\u5024\u3067\u6307\u5b9a\u3059\u308b\u3068\u3001\u7ba1\u7406\u304c\u7169\u96d1\u306b\u306a\u308b\u3002"),(0,i.kt)("p",null,"\u305d\u306e\u89e3\u6d88\u65b9\u6cd5\uff08\u7ba1\u7406\u624b\u6cd5\uff09\u306e1\u3064\u3068\u3057\u3066\u3001\u6b21\u306e\u3088\u3046\u306a",(0,i.kt)("inlineCode",{parentName:"p"},"QueryKey"),"\u306e\u30d5\u30a1\u30af\u30c8\u30ea\u304c\u3042\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export const todoKeys = {\n  all: ['todos'] as const,\n  lists: () => [...todoKeys.all, 'list'] as const,\n  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,\n  details: () => [...todoKeys.all, 'detail'] as const,\n  detail: (id: number) => [...todoKeys.details(), id] as const,\n}\n")),(0,i.kt)("h3",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u307e\u305f\u306f\u7279\u5b9aquerykey\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u307e\u305f\u306f\u7279\u5b9aQueryKey\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const queryClient = new QueryClient({\n  // \u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\n  defaultOptions: {\n    queries: {\n      staleTime: 1000 * 20,\n    },\n  },\n})\n\n// \u7279\u5b9aQueryKey\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\nqueryClient.setQueryDefaults(todoKeys.all, { staleTime: 1000 * 60 })\n")),(0,i.kt)("h3",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,i.kt)("p",null,"QueryClient\u306b\u6e21\u3059QueryCache\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u53ef\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const queryClient = new QueryClient({\n  queryCache: new QueryCache({\n    onError: (error) =>\n      // Error Handling\n  }),\n})\n")),(0,i.kt)("p",null,"Query\u306e\u72b6\u6cc1\u306b\u5fdc\u3058\u305f\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3082\u53ef\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const queryClient = new QueryClient({\n  queryCache: new QueryCache({\n    onError: (error, query) =>\n      // \u521d\u56de\u306e\u30d5\u30a7\u30c3\u30c1\u306b\u5931\u6557\u3057\u305f\u6642\u3060\u3051\u30a8\u30e9\u30fc\u51e6\u7406\n      if (query.state.data !== undefined) {\n        // Error Handling\n      }\n  }),\n})\n")),(0,i.kt)("h3",{id:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u751f\u5b58\u671f\u9593"},"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u751f\u5b58\u671f\u9593"),(0,i.kt)("p",null,"\u6b21\u306e2\u3064\u306f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u751f\u5b58\u671f\u9593\u304c\u7570\u306a\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"useMutation"),"\u306b\u6307\u5b9a\u3059\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess")),(0,i.kt)("p",{parentName:"li"},"\u5fc5\u305a\u30b3\u30fc\u30eb\u3055\u308c\u308b\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const usePostTodo = () => {\n  const queryClient = useQueryClient();\n  return useMutation(['todos'], {\n    onSuccess: () => {\n      queryClient.invalidateQueries(['todos', 'list'])\n    }\n  })\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"useMutation"),"\u3067\u53d6\u5f97\u3057\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"mutate"),"\u306b\u6307\u5b9a\u3059\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mutate"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070\u3001\u30b3\u30fc\u30eb\u3055\u308c\u308b\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const postTodo = usePostTodo();\npostTodo.mutate(\n  {title: 'new title'},\n  {\n    onSuccess: () => alert('Todo successfully added'),\n  }\n);\n")))))}c.isMDXComponent=!0}}]);