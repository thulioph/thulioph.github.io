(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},A7iQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("fLez"),a=function(){return r.data.site.siteMetadata}},BIJH:function(e,t,n){e.exports=n("GpOR")()},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Thulio Philipe, Senior Software Developer","description":"\\n    I have been working as a software developer for almost 10 years. I already worked with ad agencies, startups,software studios and also as a consultant, always focused on the Front-End side (UI). My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality I like to share my knowledge through <a href=\\"https://speakerdeck.com/thulioph\\">talks</a>, <a href=\\"https://medium.com/@thulioph_\\">articles</a> and all repositories on my <a href=\\"https://github.com/thulioph\\">Github</a> are open. My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality.\\n  ","author":"thulioph"}}}}')},GUKz:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},GpOR:function(e,t,n){"use strict";var r=n("GUKz");function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=r(t),p=r(n);if(l&&p){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=p)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==n.toString();var y=a(t);if((s=y.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=y[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},fLez:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"name":"Thulio Philipe","jobTitle":"Senior Software Developer","location":{"city":"Recife","country":"Brazil","link":""},"headline":"building software and changing the world","currentCompany":{"label":"ThoughtWorks","website":"https://www.thoughtworks.com/"},"title":"Thulio Philipe, Senior Software Developer","description":"\\n    I have been working as a software developer for almost 10 years. I already worked with ad agencies, startups,software studios and also as a consultant, always focused on the Front-End side (UI). My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality I like to share my knowledge through <a href=\\"https://speakerdeck.com/thulioph\\">talks</a>, <a href=\\"https://medium.com/@thulioph_\\">articles</a> and all repositories on my <a href=\\"https://github.com/thulioph\\">Github</a> are open. My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality.\\n  ","image":"https://avatars2.githubusercontent.com/u/2343288?s=460&u=34b95449c5414b41560dd5b41c97cf414bad8c8c&v=4","twitter":"@thulioph_","github":"thulioph","linkedin":"thulioph","extraSocial":{"stackOverflow":"https://stackoverflow.com/users/4008711/thulioph","codepen":"https://codepen.io/thulioph","codeSandBox":"https://codesandbox.io/u/thulioph","medium":"https://medium.com/@thulioph_"},"bio":{"summary":"I have been working with the web for one decade, acting through different layers and processes of software development. I started my journey as a designer but I quickly realized that the front-end was my passion. I like to work between the design and engineering teams, focusing on quality, security, performance, and usability. I am a multidisciplinary professional and creative who believes in continuous improvement and is passionate about challenging myself to leverage all expectations.","experience":"I easily engage with teams in different structures and styles, from AD agencies, software studios, consulting, and products. I already worked for industries in Telecommunications, Health services, Financial Services, Retail, Food Delivery, and Education.","toolbox":["Collaboration","Clean and direct communication","Solution Focused","Curiosity","Proactivity","Team-Oriented"],"longTerm":"I am looking for opportunities to collaborate with teams whose goal is to develop software to change the world."},"experience":[{"title":"Thoughtworks","period":"2019 - current","website":"https://www.thoughtworks.com/"},{"title":"Labcodes","period":"2016 - 2019","website":"https://labcodes.com.br/"},{"title":"Epitrack","period":"2014 - 2016","website":"https://www.epitrack.tech/"},{"title":"Guava Software","period":"2014 - 2014","website":"https://guava.software/"},{"title":"Bold Advertise Agency","period":"2014 - 2014","website":"https://www.boldcomunicacao.com.br/"}],"education":[{"title":"Web Apps","period":"2013 - 2015","field":"Specialization","website":"https://www.linkedin.com/school/unibratec/about/"},{"title":"Graphic Design","period":"2011 - 2013","field":"Btech","website":"https://www.linkedin.com/school/unibratec/about/"}]}}}}')},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,o,i,c=n("BIJH"),s=n.n(c),u=n("8+s/"),l=n.n(u),p=n("bmMU"),f=n.n(p),d=n("q1tI"),h=n.n(d),m=n("MgzW"),y=n.n(m),w="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",k="http-equiv",A="innerHTML",O="itemprop",S="name",I="property",P="rel",x="src",j="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",H="defer",N="encodeSpecialCharacters",R="onChangeClientState",F="titleTemplate",_=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),q=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,v.TITLE),n=$(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},Y=function(e){return $(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===P&&"canonical"===e[n].toLowerCase()||s===P&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;se(v.BODY,r),se(v.HTML,a),ce(p,f);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,o),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=pe(n,r),[h.a.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case g:return{toComponent:function(){return pe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(w,n,r),htmlAttributes:fe(g,a,r),link:fe(v.LINK,o,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,s,r),style:fe(v.STYLE,u,r),title:fe(v.TITLE,{title:p,titleAttributes:f},r)}},he=l()((function(e){return{baseTag:K([E,j],e),bodyAttributes:Z(w,e),defer:$(e,H),encode:$(e,N),htmlAttributes:Z(g,e),linkTags:Q(v.LINK,[P,E],e),metaTags:Q(v.META,[S,C,k,I,O],e),noscriptTags:Q(v.NOSCRIPT,[A],e),onChangeClientState:Y(e),scriptTags:Q(v.SCRIPT,[x,A],e),styleTags:Q(v.STYLE,[T],e),title:J(e),titleAttributes:Z(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),me=(a=he,i=o=function(e){function t(){return U(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return V({},a,((t={})[r.type]=i,t.titleAttributes=V({},o),t));case v.BODY:return V({},a,{bodyAttributes:V({},o)});case v.HTML:return V({},a,{htmlAttributes:V({},o)})}return V({},a,((n={})[r.type]=V({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},"sg+I":function(e,t,n){},sweJ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("A7iQ"),c=function(e){var t=e.width,n=e.height;return a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{width:t,height:n,viewBox:"0 0 53 53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("rect",{width:"52.9851",height:"52.9851",rx:"10",fill:"white"}),a.a.createElement("rect",{x:"1",y:"1",width:"50",height:"50",rx:"10",fill:"black"}),a.a.createElement("path",{d:"M24.6914 19.7852H19.4648V34H15.9492V19.7852H10.793V16.9375H24.6914V19.7852ZM30.2227 27.9883V34H26.707V16.9375H33.3633C34.6445 16.9375 35.7695 17.1719 36.7383 17.6406C37.7148 18.1094 38.4648 18.7773 38.9883 19.6445C39.5117 20.5039 39.7734 21.4844 39.7734 22.5859C39.7734 24.2578 39.1992 25.5781 38.0508 26.5469C36.9102 27.5078 35.3281 27.9883 33.3047 27.9883H30.2227ZM30.2227 25.1406H33.3633C34.293 25.1406 35 24.9219 35.4844 24.4844C35.9766 24.0469 36.2227 23.4219 36.2227 22.6094C36.2227 21.7734 35.9766 21.0977 35.4844 20.582C34.9922 20.0664 34.3125 19.8008 33.4453 19.7852H30.2227V25.1406Z",fill:"white"})))},s=function(e){var t=e.width,n=e.height;return a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{width:t,height:n,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M27.1875 7.47341C26.291 7.86394 25.3154 8.145 24.3105 8.25447C25.3538 7.62854 26.1351 6.63968 26.5078 5.47341C25.5288 6.06154 24.4563 6.47395 23.3379 6.69234C22.8704 6.18769 22.3051 5.78566 21.6771 5.5113C21.049 5.23694 20.3718 5.09614 19.6875 5.09767C16.9189 5.09767 14.6924 7.36394 14.6924 10.145C14.6924 10.5355 14.7393 10.9261 14.8154 11.3018C10.6699 11.0829 6.97266 9.08287 4.51465 6.02074C4.06677 6.79328 3.83207 7.67289 3.83496 8.56808C3.83496 10.3196 4.7168 11.8639 6.06152 12.7722C5.26906 12.7407 4.49514 12.5207 3.80273 12.1302V12.1923C3.80273 14.645 5.51953 16.6775 7.80762 17.145C7.378 17.2577 6.93606 17.3153 6.49219 17.3166C6.16699 17.3166 5.85937 17.2841 5.54883 17.2397C6.18164 19.2397 8.02441 20.6923 10.2188 20.7397C8.50195 22.0977 6.35156 22.8965 4.0166 22.8965C3.59766 22.8965 3.21094 22.8817 2.80957 22.8343C5.02441 24.2693 7.65234 25.0977 10.4824 25.0977C19.6699 25.0977 24.6973 17.4113 24.6973 10.7397C24.6973 10.5207 24.6973 10.3018 24.6826 10.0829C25.6553 9.36394 26.5078 8.47341 27.1875 7.47341Z",fill:"white"})))},u=function(e){var t=e.width,n=e.height;return a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{width:t,height:n,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M22.4813 5H4.08125C3.63875 5 3.28125 5.3575 3.28125 5.8V24.2C3.28125 24.6425 3.63875 25 4.08125 25H22.4813C22.9237 25 23.2812 24.6425 23.2812 24.2V5.8C23.2812 5.3575 22.9237 5 22.4813 5ZM9.21375 22.0425H6.24625V12.4975H9.21375V22.0425ZM7.73125 11.1925C7.39107 11.1925 7.05852 11.0916 6.77567 10.9026C6.49282 10.7136 6.27236 10.445 6.14218 10.1307C6.01199 9.81643 5.97793 9.47059 6.0443 9.13694C6.11067 8.8033 6.27448 8.49682 6.51503 8.25628C6.75557 8.01573 7.06205 7.85192 7.39569 7.78555C7.72934 7.71918 8.07518 7.75324 8.38947 7.88343C8.70375 8.01361 8.97238 8.23407 9.16138 8.51692C9.35037 8.79977 9.45125 9.13232 9.45125 9.4725C9.44875 10.4225 8.67875 11.1925 7.73125 11.1925ZM20.3238 22.0425H17.3587V17.4C17.3587 16.2925 17.3388 14.87 15.8163 14.87C14.2738 14.87 14.0363 16.075 14.0363 17.32V22.0425H11.0738V12.4975H13.9187V13.8025H13.9587C14.3537 13.0525 15.3213 12.26 16.7663 12.26C19.7713 12.26 20.3238 14.2375 20.3238 16.8075V22.0425Z",fill:"white"})))},l=function(e){var t=e.width,n=e.height;return a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{width:t,height:n,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M11.8761 6.23535C6.35048 6.23306 1.875 10.828 1.875 16.4993C1.875 20.984 4.67469 24.7963 8.57369 26.1963C9.09877 26.3317 9.01834 25.9485 9.01834 25.6868V23.9081C5.98627 24.273 5.86338 22.2119 5.66005 21.8677C5.24892 21.147 4.27697 20.9634 4.56744 20.6191C5.25786 20.2542 5.96169 20.7109 6.77725 21.948C7.36712 22.8454 8.51783 22.6939 9.10101 22.5447C9.22837 22.0054 9.50096 21.5234 9.87634 21.1493C6.73479 20.5709 5.42544 18.6017 5.42544 16.2606C5.42544 15.1245 5.78965 14.0802 6.50465 13.2379C6.04884 11.8493 6.5471 10.6604 6.61414 10.4837C7.91231 10.3643 9.26188 11.4385 9.3669 11.5234C10.1042 11.3191 10.9466 11.2113 11.8895 11.2113C12.8369 11.2113 13.6815 11.3237 14.4256 11.5303C14.678 11.3329 15.9293 10.4102 17.1359 10.5227C17.2007 10.6994 17.6878 11.8608 17.2588 13.231C17.9827 14.0756 18.3514 15.1291 18.3514 16.2675C18.3514 18.6131 17.0331 20.5847 13.8826 21.1539C14.1524 21.4265 14.3667 21.7516 14.5129 22.1102C14.659 22.4688 14.7342 22.8537 14.7339 23.2425V25.8245C14.7518 26.0311 14.7339 26.2354 15.0691 26.2354C19.0262 24.8651 21.875 21.0253 21.875 16.5016C21.875 10.828 17.3973 6.23535 11.8761 6.23535Z",fill:"white"})))},p=function(){var e=Object(i.a)(),t=e.twitter,n=e.github,r=e.linkedin,p=[{url:"https://twitter.com/"+t,value:"Twitter",icon:a.a.createElement(s,{width:30,height:30})},{url:"https://linkedin.com/in/"+r,value:"LinkedIn",icon:a.a.createElement(u,{width:30,height:30})},{url:"https://github.com/"+n,value:"Github",icon:a.a.createElement(l,{width:30,height:30})}];return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"logo"},a.a.createElement(o.Link,{to:"/"},a.a.createElement(c,{width:53,height:53}))),a.a.createElement("menu",{className:"menu"},a.a.createElement("ul",{className:"menu-links"},[{url:"/about",value:"About"},{url:"/#talks",value:"Talks"},{url:"/#projects",value:"Projects"},{url:"/writings",value:"Writings"}].map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("a",{href:e.url,title:e.value},e.value))})))),a.a.createElement("ul",{className:"social-links"},p.map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("a",{href:e.url,title:e.value,rel:"noopener noreferrer",target:"_blank"},e.icon))}))))))},f=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("footer",{className:"footer"},a.a.createElement("small",null,"made with ",a.a.createElement("span",null,"♥")," since"," ",a.a.createElement("a",{href:"https://web.archive.org/web/20130328062741/http://about.me/thulioph",rel:"noopener noreferrer",target:"_blank"},"2012"))))},d=(n("sg+I"),function(e){var t=e.children,n=e.noHeader;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"app"},!n&&a.a.createElement(p,null),a.a.createElement("main",{className:"content"},t),a.a.createElement(f,null)))});d.defaultProps={noHeader:!1};t.a=d},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,s=r.data.site,u=t||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=1dc921d01d6e70a2778fc7ab9300883edc8de929-aa15248ddce7af8dc7bb.js.map