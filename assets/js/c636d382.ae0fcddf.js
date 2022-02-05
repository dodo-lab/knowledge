"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[150],{1145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],l={title:"VPS"},o=void 0,d={unversionedId:"vsp",id:"vsp",isDocsHomePage:!1,title:"VPS",description:"Node.js\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",source:"@site/docs/vsp.md",sourceDirName:".",slug:"/vsp",permalink:"/knowledge/docs/vsp",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/vsp.md",tags:[],version:"current",frontMatter:{title:"VPS"},sidebar:"autoSidebar",previous:{title:"SEO",permalink:"/knowledge/docs/seo"}},p=[{value:"Node.js\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"nodejs\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"Let&#39;s Encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210",id:"lets-encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nodejs\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Node.js\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl -sL https://rpm.nodesource.com/setup_16.x | bash -\nsudo yum install -y nodejs\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Node\u3092\u5b9f\u884c\u3057\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"version 'GLIBC_2.18' not found"),"\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u51fa\u305f\u3089\u3001GLIBC_2.18\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\uff06\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo su\nyum install -y unzip wget gcc\ncd /tmp\nwget https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz\ncd glibc-2.18 && mkdir build\ncd build\n../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin\nmake && make install\n")))),(0,r.kt)("h2",{id:"lets-encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"},"Let's Encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Certbot\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo yum install epel-release\nsudo yum install certbot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"certbot certonly --standalone -d www.example.com\n")),(0,r.kt)("p",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u5f8c\u306b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u5165\u529b\u3084\u3001\u5229\u7528\u898f\u7d04\u3078\u306e\u540c\u610f\u304c\u6c42\u3081\u3089\u308c\u308b\u305f\u3081\u3001\u9069\u5b9c\u5bfe\u5fdc\u3059\u308b\u3002"),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u4e0b\u8a18\u9805\u76ee\u3092\u30c1\u30a7\u30c3\u30af\u3002"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"80\u30dd\u30fc\u30c8\u3084443\u30dd\u30fc\u30c8\u304c\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u3084\u30b5\u30fc\u30d3\u30b9\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u8a72\u5f53\u306e\u30d7\u30ed\u30bb\u30b9\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u4e00\u6642\u505c\u6b62\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"80\u30dd\u30fc\u30c8\u3084443\u30dd\u30fc\u30c8\u304c\u30d5\u30a1\u30a4\u30a2\u30fc\u30a6\u30a9\u30fc\u30eb\u3067\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u8a72\u5f53\u30dd\u30fc\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b")))))))}m.isMDXComponent=!0}}]);