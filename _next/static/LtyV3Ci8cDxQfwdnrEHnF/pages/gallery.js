(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"29EK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return n("dmCw")}])},GBY4:function(e,t,n){"use strict";(function(t){var r=n("RA0T"),o=n("nFlj"),s=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,i=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function c(e){return(e||"").toString().replace(i,"")}var u=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function p(e){var n,r=("undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{}).location||{},o={},a=typeof(e=e||r);if("blob:"===e.protocol)o=new f(unescape(e.pathname),{});else if("string"===a)for(n in o=new f(e,{}),l)delete o[n];else if("object"===a){for(n in e)n in l||(o[n]=e[n]);void 0===o.slashes&&(o.slashes=s.test(e.href))}return o}function h(e){e=c(e);var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function f(e,t,n){if(e=c(e),!(this instanceof f))return new f(e,t,n);var s,a,i,l,m,d,v=u.slice(),y=typeof t,g=this,w=0;for("object"!==y&&"string"!==y&&(n=t,t=null),n&&"function"!==typeof n&&(n=o.parse),t=p(t),s=!(a=h(e||"")).protocol&&!a.slashes,g.slashes=a.slashes||s&&t.slashes,g.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(v[3]=[/(.*)/,"pathname"]);w<v.length;w++)"function"!==typeof(l=v[w])?(i=l[0],d=l[1],i!==i?g[d]=e:"string"===typeof i?~(m=e.indexOf(i))&&("number"===typeof l[2]?(g[d]=e.slice(0,m),e=e.slice(m+l[2])):(g[d]=e.slice(m),e=e.slice(0,m))):(m=i.exec(e))&&(g[d]=m[1],e=e.slice(0,m.index)),g[d]=g[d]||s&&l[3]&&t[d]||"",l[4]&&(g[d]=g[d].toLowerCase())):e=l(e);n&&(g.query=n(g.query)),s&&t.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==t.pathname)&&(g.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,o=n[r-1],s=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(s=!0),n.splice(r,1),a--);return s&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}(g.pathname,t.pathname)),r(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(l=g.auth.split(":"),g.username=l[0]||"",g.password=l[1]||""),g.origin=g.protocol&&g.host&&"file:"!==g.protocol?g.protocol+"//"+g.host:"null",g.href=g.toString()}f.prototype={set:function(e,t,n){var s=this;switch(e){case"query":"string"===typeof t&&t.length&&(t=(n||o.parse)(t)),s[e]=t;break;case"port":s[e]=t,r(t,s.protocol)?t&&(s.host=s.hostname+":"+t):(s.host=s.hostname,s[e]="");break;case"hostname":s[e]=t,s.port&&(t+=":"+s.port),s.host=t;break;case"host":s[e]=t,/:\d+$/.test(t)?(t=t.split(":"),s.port=t.pop(),s.hostname=t.join(":")):(s.hostname=t,s.port="");break;case"protocol":s.protocol=t.toLowerCase(),s.slashes=!n;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";s[e]=t.charAt(0)!==a?a+t:t}else s[e]=t;break;default:s[e]=t}for(var i=0;i<u.length;i++){var c=u[i];c[4]&&(s[c[1]]=s[c[1]].toLowerCase())}return s.origin=s.protocol&&s.host&&"file:"!==s.protocol?s.protocol+"//"+s.host:"null",s.href=s.toString(),s},toString:function(e){e&&"function"===typeof e||(e=o.stringify);var t,n=this,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var s=r+(n.slashes?"//":"");return n.username&&(s+=n.username,n.password&&(s+=":"+n.password),s+="@"),s+=n.host+n.pathname,(t="object"===typeof n.query?e(n.query):n.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(s+=n.hash),s}},f.extractProtocol=h,f.location=p,f.trimLeft=c,f.qs=o,e.exports=f}).call(this,n("yLpj"))},RA0T:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},dmCw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("o0o1"),o=n.n(r),s=n("HaE+"),a=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),u=n("md7G"),l=n("foSv"),p=n("q1tI"),h=n.n(p),f=n("nOHt"),m=n.n(f),d=n("CafY"),v=n("vcXL"),y=(n("YFqc"),n("GBY4"),n("s534")),g=h.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var b=function(e){Object(c.a)(n,e);var t=w(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={domainList:r.props.domainList,searchString:""},r}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({searchString:e.target.value})}},{key:"navigateToDomainPage",value:function(e){console.log("hihi"),m.a.push("/website/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props.domainList,n=this.state.searchString.trim().toLowerCase();return n.length>0&&(t=t.filter((function(e){return e.name.toLowerCase().match(n)})),console.log("domainList",t)),g(d.a,null,g("div",{className:"columns is-vcentered is-centered is-multiline"},g("div",{className:"column has-text-centered is-one-quarter"},g("input",{className:"input is-primary",type:"text",value:this.state.searchString,onChange:function(t){return e.handleChange(t)}})),g("div",{className:"column has-text-centered is-four-fifths"},g("div",{className:"columns is-desktop is-vcentered is-centered is-multiline"},t.map((function(t){var n=t.name,r=t.screenshotURL;return g("div",{key:n,onClick:function(){return e.navigateToDomainPage(n)},className:"column has-text-centered is-one-quarter fade-in clickable"},g("img",{className:"is-full",src:r}),g("label",null,n))}))))))}}],[{key:"getInitialProps",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(y.a);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{domainList:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(p.Component)},nFlj:function(e,t,n){"use strict";var r,o=Object.prototype.hasOwnProperty;function s(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return null}}t.stringify=function(e,t){t=t||"";var n,s,a=[];for(s in"string"!==typeof t&&(t="?"),e)if(o.call(e,s)){if((n=e[s])||null!==n&&n!==r&&!isNaN(n)||(n=""),s=encodeURIComponent(s),n=encodeURIComponent(n),null===s||null===n)continue;a.push(s+"="+n)}return a.length?t+a.join("&"):""},t.parse=function(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);){var o=s(t[1]),a=s(t[2]);null===o||null===a||o in r||(r[o]=a)}return r}}},[["29EK",1,2,6,5,3,0,4,7]]]);