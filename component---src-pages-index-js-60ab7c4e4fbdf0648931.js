(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{A7iQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("kdJP"),r=function(){return n.data.site.siteMetadata}},Aw06:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.href,a=e.title,n=e.pubDate,l=e.target,i=void 0===l?"_self":l,o=e.lang,s=void 0===o?null:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",{href:t,title:a,rel:"noopener noreferrer",target:i},r.a.createElement("p",null,a," ",s&&r.a.createElement("span",{className:"post-lang"},s)),r.a.createElement("span",null,n))))}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("sweJ");a("gu/5"),a("eoYm");var i=function(e,t){return function(a){var n,l;function i(){return a.apply(this,arguments)||this}return l=a,(n=i).prototype=Object.create(l.prototype),n.prototype.constructor=n,n.__proto__=l,i.prototype.render=function(){var a=t.id,n=t.title,l=t.seeAll,i=l&&l.includes("http");return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:a,className:"section "+a},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},n&&r.a.createElement("h3",{className:"section-title"},n),r.a.createElement(e,this.props),l&&r.a.createElement("a",{className:"see-all",href:l,rel:"noopener noreferrer",target:i?"_blank":""},"see all")))))},i}(r.a.Component)},o=i((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Hi, I'm ","",r.a.createElement("div",{className:"crossed"},r.a.createElement("span",null,"Thulio Philipe"),", a.k.a")," ","",r.a.createElement("span",null,"thulioph"),"."),r.a.createElement("h4",null,"Consultant Developer at ","",r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.thoughtworks.com/",rel:"noopener noreferrer",target:"_blank"},"ThoughtWorks"))))}),{id:"hero"}),s=a("A7iQ"),c=i((function(){var e=Object(s.a)(),t=e.image,a=e.title,n=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",null,r.a.createElement("img",{src:t,alt:a})),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}))}),{id:"about"}),u=(a("y7hu"),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),m=function(e){var t=e.when,a=e.children;return t?r.a.createElement(u,null):a},h=a("Aw06"),p=a("zlMJ"),d=i((function(){var e=p.data.myDataNodes.talks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{when:!e||!e.length},r.a.createElement("ul",{className:"talks-list"},e&&e.map((function(e){var t=e.id,a=e.link,n=e.title,l=e.pubDate;return r.a.createElement(h.a,{key:t,href:a,title:n,pubDate:l})})))))}),{id:"talks",title:"Talks",seeAll:"https://speakerdeck.com/thulioph"}),g=a("rfs0"),f=a("HQ67"),w=i((function(){var e=g.data.myDataNodes.projects;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{when:!e||!e.length},e&&e.map((function(e){var t=e.id,a=e.title,n=e.description,l=e.link,i=e.mainImage,o=e.techStack;return r.a.createElement("aside",{className:"project-item",key:t},r.a.createElement("h5",{className:"project-title"},a),r.a.createElement("a",{href:l,title:a,rel:"noopener noreferrer",target:"_blank"},"view site"),r.a.createElement("div",{className:"project-image"},r.a.createElement("figure",null,r.a.createElement("img",{src:i,alt:a}))),r.a.createElement("div",{className:"stack-list"},r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{src:Object(f.b)(e),alt:e,title:e}))}))),r.a.createElement("p",null,n)))}))))}),{id:"projects",title:"Projects",seeAll:"https://github.com/thulioph"}),E=a("cU9q"),v=i((function(){var e=E.data,t=e.allMarkdownRemark.edges.map((function(e){var t=e.node;return{id:t.id,link:t.frontmatter.path,title:t.frontmatter.title,pubDate:t.frontmatter.date}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{when:!t||!t.length},r.a.createElement("ul",{className:"writings-list"},t&&t.map((function(e){var t=e.id,a=e.link,n=e.title,l=e.pubDate;return r.a.createElement(h.a,{key:t,href:a,title:n,pubDate:l})})))))}),{id:"writings",title:"Writings",seeAll:"writings"});t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o,null),r.a.createElement(c,null),r.a.createElement(d,null),r.a.createElement(w,null),r.a.createElement(v,null))}},cU9q:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"This article will show you a different way to create React components. We’ll discuss responsibilities, HOCs, functional components and Recompose. In React’s world, we have different patterns and ways to structure folders, files and manage…","id":"247d0db1-99b8-531b-8480-a9e0caaa2129","frontmatter":{"title":"Recompose","date":"Jun 8, 2020","path":"/writings/en/recompose","lang":"en"}}},{"node":{"excerpt":"Com a evolução de produtos digitais para web, é cada vez mais importante desenvolver um código que atenda a requisitos dinâmicos, permitindo a evolução na arquitetura do sistema para algo mais robusto ao mesmo tempo em que mantém um código simples e…","id":"af0b5e1e-050b-577d-8605-0ea06f301ffe","frontmatter":{"title":"Metodologia Ágil no Frontend","date":"Oct 16, 2019","path":"/writings/pt/frontend-agil","lang":"pt"}}},{"node":{"excerpt":"Pointed as an alternative to develop web applications, Vuejs is a framework which focuses on the view layer, helping the development of applications based on components. \\nIn this post I’ll show you the power of this tool. Before talking about it…","id":"aa022750-0fd2-55d4-b608-804c071accfa","frontmatter":{"title":"Web-Components with Vuejs","date":"Sep 20, 2018","path":"/writings/en/web-components-with-vuejs","lang":"en"}}}]}}}')},kdJP:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Thulio Philipe (thulioph)","description":"I\'m working as a developer for more than 8 years. I already worked with ad agencies, startups,software studios and also as a consultant, always focused on the Front-End side (UI). My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality I like to share my knowledge through <a href=\\"https://speakerdeck.com/thulioph\\">talks</a>, <a href=\\"https://medium.com/@thulioph_\\">articles</a> and all repositories on my <a href=\\"https://github.com/thulioph\\">Github</a> are open. My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality.","image":"https://avatars2.githubusercontent.com/u/2343288?s=460&u=34b95449c5414b41560dd5b41c97cf414bad8c8c&v=4","twitter":"@thulioph_","github":"thulioph","linkedin":"thulioph","extraSocial":{"openProcessing":"https://www.openprocessing.org/user/169834","stackOverflow":"https://stackoverflow.com/users/4008711/thulioph","soundCloud":"https://soundcloud.com/thulio-ph","unsplash":"https://unsplash.com/@thulioph","wakatime":"https://wakatime.com/@thulioph","lastFm":"https://www.last.fm/pt/user/Thulioph","genius":"https://genius.com/thulioph","goodReads":"https://goodreads.com/thulioph","strava":"https://www.strava.com/athletes/13011724","codepen":"https://codepen.io/thulioph","codeSandBox":"https://codesandbox.io/u/thulioph","medium":"https://medium.com/@thulioph_"}}}}}')},rfs0:function(e){e.exports=JSON.parse('{"data":{"myDataNodes":{"projects":[{"id":"1","title":"Twitter Realtime","description":"Display tweets location in realtime","link":"https://twitter-realtime.herokuapp.com/","mainImage":"https://raw.githubusercontent.com/thulioph/twitter-realtime/master/example.png","techStack":["angularjs","nodejs","css"]},{"id":"2","title":"WhoSampled Scrapper","description":"Samples information from an specific artist","link":"https://github.com/thulioph/whosampled-scraper","mainImage":"https://raw.githubusercontent.com/thulioph/whosampled-scraper/master/demo.gif","techStack":["nodejs","typescript"]},{"id":"3","title":"Greensock","description":"Icon animations using GreenSock","link":"https://greensock.netlify.com/","mainImage":"https://raw.githubusercontent.com/thulioph/greensock/master/demo.gif","techStack":["html","css","javascript"]}]}}}')},"sg+I":function(e,t,a){},sweJ:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("A7iQ"),o=function(e){var t=e.width,a=e.height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 53 53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{width:"52.9851",height:"52.9851",rx:"10",fill:"white"}),r.a.createElement("rect",{x:"1",y:"1",width:"50",height:"50",rx:"10",fill:"black"}),r.a.createElement("path",{d:"M24.6914 19.7852H19.4648V34H15.9492V19.7852H10.793V16.9375H24.6914V19.7852ZM30.2227 27.9883V34H26.707V16.9375H33.3633C34.6445 16.9375 35.7695 17.1719 36.7383 17.6406C37.7148 18.1094 38.4648 18.7773 38.9883 19.6445C39.5117 20.5039 39.7734 21.4844 39.7734 22.5859C39.7734 24.2578 39.1992 25.5781 38.0508 26.5469C36.9102 27.5078 35.3281 27.9883 33.3047 27.9883H30.2227ZM30.2227 25.1406H33.3633C34.293 25.1406 35 24.9219 35.4844 24.4844C35.9766 24.0469 36.2227 23.4219 36.2227 22.6094C36.2227 21.7734 35.9766 21.0977 35.4844 20.582C34.9922 20.0664 34.3125 19.8008 33.4453 19.7852H30.2227V25.1406Z",fill:"white"})))},s=function(e){var t=e.width,a=e.height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M27.1875 7.47341C26.291 7.86394 25.3154 8.145 24.3105 8.25447C25.3538 7.62854 26.1351 6.63968 26.5078 5.47341C25.5288 6.06154 24.4563 6.47395 23.3379 6.69234C22.8704 6.18769 22.3051 5.78566 21.6771 5.5113C21.049 5.23694 20.3718 5.09614 19.6875 5.09767C16.9189 5.09767 14.6924 7.36394 14.6924 10.145C14.6924 10.5355 14.7393 10.9261 14.8154 11.3018C10.6699 11.0829 6.97266 9.08287 4.51465 6.02074C4.06677 6.79328 3.83207 7.67289 3.83496 8.56808C3.83496 10.3196 4.7168 11.8639 6.06152 12.7722C5.26906 12.7407 4.49514 12.5207 3.80273 12.1302V12.1923C3.80273 14.645 5.51953 16.6775 7.80762 17.145C7.378 17.2577 6.93606 17.3153 6.49219 17.3166C6.16699 17.3166 5.85937 17.2841 5.54883 17.2397C6.18164 19.2397 8.02441 20.6923 10.2188 20.7397C8.50195 22.0977 6.35156 22.8965 4.0166 22.8965C3.59766 22.8965 3.21094 22.8817 2.80957 22.8343C5.02441 24.2693 7.65234 25.0977 10.4824 25.0977C19.6699 25.0977 24.6973 17.4113 24.6973 10.7397C24.6973 10.5207 24.6973 10.3018 24.6826 10.0829C25.6553 9.36394 26.5078 8.47341 27.1875 7.47341Z",fill:"white"})))},c=function(e){var t=e.width,a=e.height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M22.4813 5H4.08125C3.63875 5 3.28125 5.3575 3.28125 5.8V24.2C3.28125 24.6425 3.63875 25 4.08125 25H22.4813C22.9237 25 23.2812 24.6425 23.2812 24.2V5.8C23.2812 5.3575 22.9237 5 22.4813 5ZM9.21375 22.0425H6.24625V12.4975H9.21375V22.0425ZM7.73125 11.1925C7.39107 11.1925 7.05852 11.0916 6.77567 10.9026C6.49282 10.7136 6.27236 10.445 6.14218 10.1307C6.01199 9.81643 5.97793 9.47059 6.0443 9.13694C6.11067 8.8033 6.27448 8.49682 6.51503 8.25628C6.75557 8.01573 7.06205 7.85192 7.39569 7.78555C7.72934 7.71918 8.07518 7.75324 8.38947 7.88343C8.70375 8.01361 8.97238 8.23407 9.16138 8.51692C9.35037 8.79977 9.45125 9.13232 9.45125 9.4725C9.44875 10.4225 8.67875 11.1925 7.73125 11.1925ZM20.3238 22.0425H17.3587V17.4C17.3587 16.2925 17.3388 14.87 15.8163 14.87C14.2738 14.87 14.0363 16.075 14.0363 17.32V22.0425H11.0738V12.4975H13.9187V13.8025H13.9587C14.3537 13.0525 15.3213 12.26 16.7663 12.26C19.7713 12.26 20.3238 14.2375 20.3238 16.8075V22.0425Z",fill:"white"})))},u=function(e){var t=e.width,a=e.height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.8761 6.23535C6.35048 6.23306 1.875 10.828 1.875 16.4993C1.875 20.984 4.67469 24.7963 8.57369 26.1963C9.09877 26.3317 9.01834 25.9485 9.01834 25.6868V23.9081C5.98627 24.273 5.86338 22.2119 5.66005 21.8677C5.24892 21.147 4.27697 20.9634 4.56744 20.6191C5.25786 20.2542 5.96169 20.7109 6.77725 21.948C7.36712 22.8454 8.51783 22.6939 9.10101 22.5447C9.22837 22.0054 9.50096 21.5234 9.87634 21.1493C6.73479 20.5709 5.42544 18.6017 5.42544 16.2606C5.42544 15.1245 5.78965 14.0802 6.50465 13.2379C6.04884 11.8493 6.5471 10.6604 6.61414 10.4837C7.91231 10.3643 9.26188 11.4385 9.3669 11.5234C10.1042 11.3191 10.9466 11.2113 11.8895 11.2113C12.8369 11.2113 13.6815 11.3237 14.4256 11.5303C14.678 11.3329 15.9293 10.4102 17.1359 10.5227C17.2007 10.6994 17.6878 11.8608 17.2588 13.231C17.9827 14.0756 18.3514 15.1291 18.3514 16.2675C18.3514 18.6131 17.0331 20.5847 13.8826 21.1539C14.1524 21.4265 14.3667 21.7516 14.5129 22.1102C14.659 22.4688 14.7342 22.8537 14.7339 23.2425V25.8245C14.7518 26.0311 14.7339 26.2354 15.0691 26.2354C19.0262 24.8651 21.875 21.0253 21.875 16.5016C21.875 10.828 17.3973 6.23535 11.8761 6.23535Z",fill:"white"})))},m=function(){var e=Object(i.a)(),t=e.twitter,a=e.github,n=e.linkedin,m=[{url:"https://twitter.com/"+t,value:"Twitter",icon:r.a.createElement(s,{width:30,height:30})},{url:"https://linkedin.com/in/"+n,value:"LinkedIn",icon:r.a.createElement(c,{width:30,height:30})},{url:"https://github.com/"+a,value:"Github",icon:r.a.createElement(u,{width:30,height:30})}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"logo"},r.a.createElement(l.Link,{to:"/"},r.a.createElement(o,{width:53,height:53}))),r.a.createElement("menu",{className:"menu"},r.a.createElement("ul",{className:"menu-links"},[{url:"/#about",value:"About"},{url:"/#talks",value:"Talks"},{url:"/#projects",value:"Projects"},{url:"/#writings",value:"Writings"}].map((function(e){return r.a.createElement("li",{key:e.value},r.a.createElement("a",{href:e.url,title:e.value},e.value))})))),r.a.createElement("ul",{className:"social-links"},m.map((function(e){return r.a.createElement("li",{key:e.value},r.a.createElement("a",{href:e.url,title:e.value,rel:"noopener noreferrer",target:"_blank"},e.icon))}))))))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("small",null,"made with ",r.a.createElement("span",null,"♥")," since"," ",r.a.createElement("a",{href:"https://web.archive.org/web/20130328062741/http://about.me/thulioph",rel:"noopener noreferrer",target:"_blank"},"2012"))))},p=(a("sg+I"),function(e){var t=e.children,a=e.noHeader;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"app"},!a&&r.a.createElement(m,null),r.a.createElement("main",{className:"content"},t),r.a.createElement(h,null)))});p.defaultProps={noHeader:!1};t.a=p},"t+fG":function(e,t,a){var n=a("P8UN"),r=a("96qb"),l=a("ap2Z"),i=/"/g,o=function(e,t,a,n){var r=String(l(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},zlMJ:function(e){e.exports=JSON.parse('{"data":{"myDataNodes":{"talks":[{"id":"1","link":"https://speakerdeck.com/thulioph/css-na-era-dos-componentes","pubDate":"Dec 19, 2019","title":"css na era dos componentes"},{"id":"2","link":"https://speakerdeck.com/thulioph/recompose","pubDate":"Dec 1, 2018","title":"recompose"},{"id":"3","link":"https://speakerdeck.com/thulioph/styled-components","pubDate":"Aug 2, 2018","title":"styled components"}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-60ab7c4e4fbdf0648931.js.map