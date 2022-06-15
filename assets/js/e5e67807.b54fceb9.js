"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[321],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,i(i({ref:t},o),{},{components:a})):n.createElement(k,i({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6256:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={title:"VPS"},m=void 0,s={unversionedId:"vps",id:"vps",title:"VPS",description:"Node.js\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",source:"@site/docs/vps.md",sourceDirName:".",slug:"/vps",permalink:"/knowledge/docs/vps",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/vps.md",tags:[],version:"current",frontMatter:{title:"VPS"},sidebar:"autoSidebar",previous:{title:"TypeScript",permalink:"/knowledge/docs/typescript"}},o={},d=[{value:"Node.js\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"nodejs\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Let&#39;s Encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210",id:"lets-encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210",level:2},{value:"Certbot\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"certbot\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"\u8a3c\u660e\u66f8\u3092\u4f5c\u6210",id:"\u8a3c\u660e\u66f8\u3092\u4f5c\u6210",level:3},{value:"\u8a3c\u660e\u66f8\u306e\u66f4\u65b0",id:"\u8a3c\u660e\u66f8\u306e\u66f4\u65b0",level:3},{value:"MySQL\u306e\u5c0e\u5165",id:"mysql\u306e\u5c0e\u5165",level:2},{value:"MySQL\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"mysql\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"MySQL\u306e\u8d77\u52d5",id:"mysql\u306e\u8d77\u52d5",level:3},{value:"root\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5909\u66f4",id:"root\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5909\u66f4",level:3},{value:"\u521d\u671f\u8a2d\u5b9a",id:"\u521d\u671f\u8a2d\u5b9a",level:3},{value:"phpMyAdmin\u306e\u5c0e\u5165",id:"phpmyadmin\u306e\u5c0e\u5165",level:2},{value:"phpMyAdmin\u3092\u542b\u3081\u5fc5\u8981\u306a\u3082\u306e\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"phpmyadmin\u3092\u542b\u3081\u5fc5\u8981\u306a\u3082\u306e\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"phpMyAdmin\u306e\u8a2d\u5b9a",id:"phpmyadmin\u306e\u8a2d\u5b9a",level:3},{value:"Apache\u3092\u518d\u8d77\u52d5",id:"apache\u3092\u518d\u8d77\u52d5",level:3},{value:"puppeteer\u306e\u4f9d\u5b58\u95a2\u4fc2\u89e3\u6d88",id:"puppeteer\u306e\u4f9d\u5b58\u95a2\u4fc2\u89e3\u6d88",level:2},{value:"Next.js\u306e\u6c38\u7d9a\u5316",id:"nextjs\u306e\u6c38\u7d9a\u5316",level:2}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"nodejs\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Node.js\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo curl -sL https://rpm.nodesource.com/setup_16.x | bash -\nsudo yum install -y nodejs\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Node\u3092\u5b9f\u884c\u3057\u3066",(0,l.kt)("inlineCode",{parentName:"p"},"version 'GLIBC_2.18' not found"),"\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u51fa\u305f\u3089\u3001GLIBC_2.18\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\uff06\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo su\nyum install -y unzip wget gcc\ncd /tmp\nwget https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz\ncd glibc-2.18 && mkdir build\ncd build\n../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin\nmake && make install\n")))),(0,l.kt)("h2",{id:"lets-encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"},"Let's Encrypt\u3067\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"),(0,l.kt)("p",null,"\u30c9\u30e1\u30a4\u30f3\u306f\u4eee\u3067",(0,l.kt)("inlineCode",{parentName:"p"},"www.example.com"),"\u3068\u3059\u308b\u3002"),(0,l.kt)("h3",{id:"certbot\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Certbot\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo yum install epel-release\nsudo yum install certbot\n")),(0,l.kt)("h3",{id:"\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"},"\u8a3c\u660e\u66f8\u3092\u4f5c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"certbot certonly --standalone -d www.example.com\n")),(0,l.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u5f8c\u306b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u5165\u529b\u3084\u3001\u5229\u7528\u898f\u7d04\u3078\u306e\u540c\u610f\u304c\u6c42\u3081\u3089\u308c\u308b\u305f\u3081\u3001\u9069\u5b9c\u5bfe\u5fdc\u3059\u308b\u3002\n\u6210\u529f\u3057\u305f\u3089\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/www.example.com/"),"\u306b\u5404\u7a2e\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u308b\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fullchain.pem"),"\u3092\u4e2d\u9593\u8a3c\u660e\u66f8\u3092\u9023\u7d50\u3057\u305f\u8a3c\u660e\u66f8\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"privkey.pem"),"\u3092\u79d8\u5bc6\u9375\u3068\u3057\u3066\u6271\u3046\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/www.example.com"),"\u914d\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u5b9f\u4f53\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/archive/www.example.com"),"\u306b\u3042\u308b\u3002"))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u4e0b\u8a18\u9805\u76ee\u3092\u30c1\u30a7\u30c3\u30af\u3002"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"80\u30dd\u30fc\u30c8\u3084443\u30dd\u30fc\u30c8\u304c\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u3084\u30b5\u30fc\u30d3\u30b9\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u8a72\u5f53\u306e\u30d7\u30ed\u30bb\u30b9\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u4e00\u6642\u505c\u6b62\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"80\u30dd\u30fc\u30c8\u3084443\u30dd\u30fc\u30c8\u304c\u30d5\u30a1\u30a4\u30a2\u30fc\u30a6\u30a9\u30fc\u30eb\u3067\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u8a72\u5f53\u30dd\u30fc\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b")))),(0,l.kt)("h3",{id:"\u8a3c\u660e\u66f8\u306e\u66f4\u65b0"},"\u8a3c\u660e\u66f8\u306e\u66f4\u65b0"),(0,l.kt)("p",null,"Let's Encrypt\u306e\u8a3c\u660e\u66f8\u306e\u6709\u52b9\u671f\u9650\u306f3\u304b\u6708\u306e\u305f\u3081\u3001\u5b9a\u671f\u7684\u306a\u66f4\u65b0\u304c\u5fc5\u8981\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"certbot renew\n")),(0,l.kt)("p",null,"\u6210\u529f\u3057\u305f\u3089\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/www.example.com"),"\u306e\u8a3c\u660e\u66f8\u3068\u79d8\u5bc6\u9375\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u308b\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u518d\u8d77\u52d5\u3092\u5b9f\u65bd\u3002"),(0,l.kt)("h2",{id:"mysql\u306e\u5c0e\u5165"},"MySQL\u306e\u5c0e\u5165"),(0,l.kt)("h3",{id:"mysql\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"MySQL\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6700\u65b0\u306eGPG\u30ad\u30fc\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MySQL\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo rpm -Uvh http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm\nsudo yum -y install mysql-community-server\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MySQL\u306e\u8a2d\u5b9a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-conf",metastring:"title=/etc/my.cnf",title:"/etc/my.cnf"},"[mysqld]\ninnodb_autoinc_lock_mode=0\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf"),"\u304c\u7121\u3044\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"mysql --help | grep my.cnf"),"\u3092\u5b9f\u884c\u3057\u3001\u6700\u521d\u306b\u30d2\u30c3\u30c8\u3057\u305f",(0,l.kt)("inlineCode",{parentName:"p"},"my.cnf"),"\u3092\u4fee\u6b63\u3059\u308b\u3002"))),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0a\u8a18\u8a2d\u5b9a\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u843d\u3061\u308b\u305f\u3081\u3001\u5fc5\u8981\u3067\u306a\u3051\u308c\u3070\u8a2d\u5b9a\u3057\u306a\u3044\u65b9\u304c\u826f\u3044\u3002\n\u4eca\u56de\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT IGNORE"),"\u3067",(0,l.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT"),"\u3092\u52a0\u7b97\u3057\u305f\u304f\u306a\u3044\u305f\u3081\u3001\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u3002"))))),(0,l.kt)("h3",{id:"mysql\u306e\u8d77\u52d5"},"MySQL\u306e\u8d77\u52d5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MySQL\u8d77\u52d5"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"systemctl start mysqld.service\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MySQL\u81ea\u52d5\u8d77\u52d5\u8a2d\u5b9a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"systemctl enable mysqld.service\n")))),(0,l.kt)("h3",{id:"root\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5909\u66f4"},"root\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5909\u66f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5909\u66f4"),(0,l.kt)("p",{parentName:"li"},"\u307e\u305a\u521d\u671f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},'cat /var/log/mysqld.log | grep "A temporary password"\n')),(0,l.kt)("p",{parentName:"li"},"\u6b21\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"mysql -u root -p\n# \u30d1\u30b9\u30ef\u30fc\u30c9\u5165\u529b\u3092\u6c42\u3081\u3089\u308c\u308b\u305f\u3081\u3001\u78ba\u8a8d\u3057\u305f\u521d\u671f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\nset password for root@localhost=password('\u30d1\u30b9\u30ef\u30fc\u30c9');\n")))),(0,l.kt)("h3",{id:"\u521d\u671f\u8a2d\u5b9a"},"\u521d\u671f\u8a2d\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DB\u306e\u4f5c\u6210"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"create database [DB\u540d];\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u30e6\u30fc\u30b6\u30fc\u306e\u4f5c\u6210"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"create user 'user_name'@'localhost' IDENTIFIED BY 'password';\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u30e6\u30fc\u30b6\u30fc\u306e\u6a29\u9650\u3092\u4f5c\u6210\u3057\u305fDB\u306e\u307f\u306b\u7d5e\u308b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"grant select, update on [DB\u540d].* to 'user_name'@'localhost' identified by 'password';\n")))),(0,l.kt)("h2",{id:"phpmyadmin\u306e\u5c0e\u5165"},"phpMyAdmin\u306e\u5c0e\u5165"),(0,l.kt)("h3",{id:"phpmyadmin\u3092\u542b\u3081\u5fc5\u8981\u306a\u3082\u306e\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"phpMyAdmin\u3092\u542b\u3081\u5fc5\u8981\u306a\u3082\u306e\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo rpm --import https://rpms.remirepo.net/RPM-GPG-KEY-remi\nsudo yum install yum-utils https://rpms.remirepo.net/enterprise/remi-release-7.rpm\nsudo yum --enablerepo=remi,remi-php73 install php-7.3.33-1.el7.remi\nsudo yum -y install --enablerepo=remi,remi-php73 php-mbstring php-xmlphp-pdo php-mysqlnd\nsudo yum --enablerepo=remi,remi-php73 install phpMyAdmin\n")),(0,l.kt)("h3",{id:"phpmyadmin\u306e\u8a2d\u5b9a"},"phpMyAdmin\u306e\u8a2d\u5b9a"),(0,l.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3059\u308bIP\u30a2\u30c9\u30ec\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff",metastring:"conf title=/etc/httpd/conf.d/phpMyAdmin.conf",conf:!0,title:"/etc/httpd/conf.d/phpMyAdmin.conf"},"<Directory /usr/share/phpMyAdmin/>\n   AddDefaultCharset UTF-8\n\n   Require local\n+  Require ip [\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308bIP]\n</Directory>\n")),(0,l.kt)("h3",{id:"apache\u3092\u518d\u8d77\u52d5"},"Apache\u3092\u518d\u8d77\u52d5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"systemctl restart httpd\n")),(0,l.kt)("h2",{id:"puppeteer\u306e\u4f9d\u5b58\u95a2\u4fc2\u89e3\u6d88"},"puppeteer\u306e\u4f9d\u5b58\u95a2\u4fc2\u89e3\u6d88"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"sudo yum install -y alsa-lib.x86_64 atk.x86_64 cups-libs.x86_64 gtk3.x86_64 ipa-gothic-fonts libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXrandr.x86_64 libXScrnSaver.x86_64 libXtst.x86_64 pango.x86_64 xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-fonts-cyrillic xorg-x11-fonts-misc xorg-x11-fonts-Type1 xorg-x11-utils\n")),(0,l.kt)("p",null,"\u8a73\u7d30\u306f",(0,l.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix"},"\u516c\u5f0f"),"\u3092\u53c2\u7167\u3002"),(0,l.kt)("h2",{id:"nextjs\u306e\u6c38\u7d9a\u5316"},"Next.js\u306e\u6c38\u7d9a\u5316"),(0,l.kt)("p",null,"Next.js\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u76e3\u8996\u3057\u3001\u30d7\u30ed\u30bb\u30b9\u304c\u7570\u5e38\u72b6\u614b\u306b\u306a\u3063\u305f\u3089\u81ea\u52d5\u7684\u306b\u518d\u8d77\u52d5\u3092\u3055\u305b\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PM2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"npm i -g pm2\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Next.js\u3092\u8d77\u52d5\uff08\u6c38\u7d9a\u5316\uff09"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"npm start"),"\u3067Next.js\u304c\u8d77\u52d5\u3059\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3059\u308b\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},'pm2 start npm --name "\u30a2\u30d7\u30ea\u540d" -- start\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Next.js\u306e\u505c\u6b62"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"pm2 stop \u30a2\u30d7\u30ea\u540d\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Next.js\u306e\u30ed\u30b0\u78ba\u8a8d"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"pm2 log \u30a2\u30d7\u30ea\u540d\n\n# \u30ed\u30b0\u306e\u8868\u793a\u884c\u6570\u3092\u5897\u3084\u3059\npm2 log \u30a2\u30d7\u30ea\u540d --line 100\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Next.js\u306e\u72b6\u614b\u78ba\u8a8d"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30b3\u30de\u30f3\u30c9\u5b9f\u884c",title:"\u30b3\u30de\u30f3\u30c9\u5b9f\u884c"},"pm2 show \u30a2\u30d7\u30ea\u540d\n")))))}u.isMDXComponent=!0}}]);