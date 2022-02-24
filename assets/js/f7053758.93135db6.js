"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[207],{9230:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var t=o(7462),a=o(3366),i=(o(7294),o(3905)),m=["components"],r={title:"docker-compose\u306e\u5177\u4f53\u4f8b"},s=void 0,p={unversionedId:"Docker/docker-compose-example",id:"Docker/docker-compose-example",isDocsHomePage:!1,title:"docker-compose\u306e\u5177\u4f53\u4f8b",description:"MySQL\u3068phpMyAdmin",source:"@site/docs/Docker/docker-compose-example.md",sourceDirName:"Docker",slug:"/Docker/docker-compose-example",permalink:"/knowledge/docs/Docker/docker-compose-example",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Docker/docker-compose-example.md",tags:[],version:"current",frontMatter:{title:"docker-compose\u306e\u5177\u4f53\u4f8b"},sidebar:"autoSidebar",previous:{title:"Top",permalink:"/knowledge/docs/top"},next:{title:"Flutter",permalink:"/knowledge/docs/flutter"}},d=[{value:"MySQL\u3068phpMyAdmin",id:"mysql\u3068phpmyadmin",children:[]}],c={toc:d};function l(e){var n=e.components,o=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mysql\u3068phpmyadmin"},"MySQL\u3068phpMyAdmin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\n\nservices:\n  mysql:\n    container_name: mysql\n    image: mysql:5.7.36\n    environment:\n      MYSQL_DATABASE: db_name\n      MYSQL_USER: local_user\n      MYSQL_PASSWORD: local_pass\n      MYSQL_ROOT_PASSWORD: admin\n    ports:\n      - '3306:3306'\n    volumes:\n      - db:/var/lib/mysql\n\n  phpmyadmin:\n    container_name: phpmyadmin\n    image: phpmyadmin/phpmyadmin:5.1.1\n    environment:\n      - PMA_HOST=mysql\n    depends_on:\n      - mysql\n    ports:\n      - '8080:80'\n\nvolumes:\n  db:\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ports"),"\u306e\u6307\u5b9a\u304c\u306a\u3044\u3068\u3001\u30b3\u30f3\u30c6\u30ca\u5916\u304b\u3089\u53c2\u7167\u3067\u304d\u306a\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volumes"),"\u3067\u6c38\u7d9a\u5316\u3057\u306a\u3044\u3068\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u518d\u8d77\u52d5\u3067DB\u304c\u6d88\u3048\u308b\u3002")))))}l.isMDXComponent=!0}}]);