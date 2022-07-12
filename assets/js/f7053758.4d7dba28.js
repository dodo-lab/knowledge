"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[207],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9230:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"docker-compose\u306e\u5177\u4f53\u4f8b"},p=void 0,l={unversionedId:"Docker/docker-compose-example",id:"Docker/docker-compose-example",title:"docker-compose\u306e\u5177\u4f53\u4f8b",description:"MySQL\u3068phpMyAdmin",source:"@site/docs/Docker/docker-compose-example.md",sourceDirName:"Docker",slug:"/Docker/docker-compose-example",permalink:"/knowledge/docs/Docker/docker-compose-example",draft:!1,tags:[],version:"current",frontMatter:{title:"docker-compose\u306e\u5177\u4f53\u4f8b"},sidebar:"autoSidebar",previous:{title:"Top",permalink:"/knowledge/docs/top"},next:{title:"HTML5 Security",permalink:"/knowledge/docs/Security/html5"}},m={},s=[{value:"MySQL\u3068phpMyAdmin",id:"mysql\u3068phpmyadmin",level:2}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mysql\u3068phpmyadmin"},"MySQL\u3068phpMyAdmin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\n\nservices:\n  mysql:\n    container_name: mysql\n    image: mysql:5.7.36\n    environment:\n      MYSQL_DATABASE: db_name\n      MYSQL_USER: local_user\n      MYSQL_PASSWORD: local_pass\n      MYSQL_ROOT_PASSWORD: admin\n    ports:\n      - '3306:3306'\n    volumes:\n      - db:/var/lib/mysql\n\n  phpmyadmin:\n    container_name: phpmyadmin\n    image: phpmyadmin/phpmyadmin:5.1.1\n    environment:\n      - PMA_HOST=mysql\n    depends_on:\n      - mysql\n    ports:\n      - '8080:80'\n\nvolumes:\n  db:\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ports"),"\u306e\u6307\u5b9a\u304c\u306a\u3044\u3068\u3001\u30b3\u30f3\u30c6\u30ca\u5916\u304b\u3089\u53c2\u7167\u3067\u304d\u306a\u3044\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volumes"),"\u3067\u6c38\u7d9a\u5316\u3057\u306a\u3044\u3068\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u518d\u8d77\u52d5\u3067DB\u304c\u6d88\u3048\u308b\u3002")))))}d.isMDXComponent=!0}}]);