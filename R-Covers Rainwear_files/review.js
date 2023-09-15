if (window.template == 'index' && Shopify.shop == '7needs.myshopify.com') {} else {
if(!window.jQuery || (typeof jQuery === 'undefined')){
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
} 

var main_url = "https://evmreviews.expertvillagemedia.com/product_review/";
var shop_add = Shopify.shop;
var evm_url = window.location.href;
var evm_url_val = "ZXZt";
if (evm_url.includes("evm-chk-c")) {
	evm_url_val = evm_url.substring(evm_url.indexOf("?evm-chk-c=")+11);
}
var evm_o_id = 0;
var evm_type = 0;
if (evm_url.includes("reminder_type")) {
	evm_url_data = evm_url.substring(evm_url.indexOf("&reminder_type=")+15);
	var evm_split = evm_url_data.split("{_}");
	evm_o_id = evm_split[0];
	evm_type = evm_split[1];
}
// var main_url = "https://evmreviewstaging.expertvillagemedia.com/product_review/";
/* ********************* start integration in wiser app ********************* */
var evm_avg_id = '';
var timesRun = 0;
var interval = setInterval(function() {
	timesRun += 1;
	if(timesRun === 2){
		clearInterval(interval);
	}
	var class_name = $(".evm-review-rating-avg")[0];
	if ($(".evm-review-rating-avg")[0]){
		$.each($('.evm-review-rating-avg'), function (index, item) {
			if(evm_avg_id.indexOf($(item).attr('evm-data-product-id')) != -1){} else { evm_avg_id += $(item).attr('evm-data-product-id')+","; }
		});

		evm_avg_id = evm_avg_id.replace(/,\s*$/, "");
		var evm_avg_id_arr = evm_avg_id.split(",");
		$.ajax({
			url: main_url+"frontend/review/get_avg_review_rating",
			type: "POST",
			data: { shop_address : shop_add, evm_avg_id :  JSON.stringify(evm_avg_id) },
			success: function(res) {
				var obj = $.parseJSON(res);
				$.each(obj.html_data, function(product_id, val) {
					evm_avg_id_arr = $.grep(evm_avg_id_arr, function(value) {
					  return value != product_id;
					});
					$.each($('.evm-review-rating-avg'), function (inner_key, inner_item) {
						if ($(inner_item).attr('evm-data-product-id') == product_id) {
							$(inner_item).html(val.evm_rating_html);
						} else {
							$.each(evm_avg_id_arr, function(id_key, p_id_no_r) {
								if ($(inner_item).attr('evm-data-product-id') == p_id_no_r) {
									$(inner_item).html('<span class="no_reviews"><span class="evm-clr" style="font-size: 20px;">☆☆☆☆☆ <span class="no_rev_text" style="font-size: 15px;">No reviews</span> </span></span>');
								};
							});
						}
					});
				});
				$('footer, .footer').append(obj.style);
			}
		})
	}
}, 1000);

/* ********************* end integration in wiser app ********************* */
// $.noConflict();
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var EvmPageURL = window.location.href;
var evmShop = getParameterByName('reviews', EvmPageURL);
/*var evm_date = new Date();
var evm_month = evm_date.getMonth()+1;
var evm_day = evm_date.getDate();
var evm_output = evm_date.getFullYear() + '-' +
(evm_month<10 ? '0' : '') + evm_month + '-' +
(evm_day<10 ? '0' : '') + evm_day;*/
	if (shop_add == "alondras-imports.myshopify.com") {
		var productId     = $("#expert_leave_review").attr("data-product-id-evm");
		var productName   = $("#expert_leave_review").attr("data-product-name--evm");
		var productHandle = $("#expert_leave_review").attr("data-product-handle-evm");
	} else {
		var productId     = $("#expert_leave_review").attr("data-product-id");
		var productName   = $("#expert_leave_review").attr("data-product-name");
		var productHandle = $("#expert_leave_review").attr("data-product-handle");
	}
	
	var evm_all_rev   = $("#evm_all_reviews").attr("data-evm-all-reviews");

// if ( typeof productId !== "undefined") {

if (typeof evm_all_rev === 'undefined' || evm_all_rev == '') evm_all_rev = '';

if (typeof productId === 'undefined' || productId == '') productId = '';
if (typeof productName === 'undefined' || productName == '') productName = '';

// ajax_data(shop_add, productId, 1, '', '', evm_all_rev);
if (typeof productHandle === 'undefined' || productHandle == '') productHandle = '';

// $("head").append('<link href="'+main_url+'assets/css/frontend/product_review_style.css" rel="stylesheet" type="text/css" media="all" />');
// $("head").append('https://code.jquery.com/jquery-3.2.1.slim.min.js');
// var class_name === 'check-out-temlate';
var class_name = $('body').attr('class');
if (typeof class_name === 'undefined') { class_name = 'check-out-temlate'; }
if (!class_name.includes("template-index")) {
	$("head").append('<script type="text/javascript" src="'+main_url+'assets/js/1.3.3_evm_slider.js"></script>');
}

/******************** reviews widget on product ********************/
$("#evm_reviews_widget").append("<div class='evm-prev-badge'><span id='evmstars'></span><span id='evm_num_of_reviews'></span></div>");

function getStars(rating) {
  rating = Math.round(rating * 2) / 2;
  let output = [];
  for (var i = rating; i >= 1; i--)
    output.push('<i class="evm_font evmfa-star" id="evm-fullstars"></i>&nbsp;');
  if (i == .5)
    output.push('<i class="evm_font evmfa-star-half-o" id="evm-halfstars"></i>&nbsp;');
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="evm_font evmfa-star-o" id="evm-emptystars"></i>&nbsp;');
  return output.join('');
} /* end of function */


$("#evm_reviews_widget").click(function() {
  $('html, body').animate({
    scrollTop: $('.evm-rev_header').offset().top
  }, 500);
});

var add_temp = "";
if (shop_add == "testimonials-product-reviews-demo-store.myshopify.com") {
	add_temp = '<span id="or_sign" style="font-size: 18px;"> | </span><label style="margin: 0px; padding: 0px; line-height: 50px;" class="evm_tab_review_app" id="three_temp_2" for="review_radio">Template 2</label>';
}

if (evm_all_rev != '') {
	$("#evm_all_reviews").html('<p style="text-align: center; font-size: 24px; max-width: 1170px;margin: auto;">All Reviews</p><div style="font-size: 16px; max-width: 1170px; margin: auto; padding: 0 10px 10px 10px;"><div style="padding: 0 0 10px 0;border-bottom: 1px solid #ddd;" class="evm_p_r_powered_by"><span class="evm_all_reviews_show" style="float: left; margin: 0;">Reviews</span><p style="float:right"><span class="remove_powered_by">Powered By</span><a href="https://apps.shopify.com/evm-testimonials-showcase?utm_source=reviews-widget&utm_medium=frontend&utm_campaign=Poweredby" target="_blank"><img class="rev_logo remove_powered_by"src="'+main_url+'images/rev_logo.png"></a></p></div><div class="panels pr_tabs_content" id="evm_pro-slider"><ul id="show_product_reviews"></ul></div>');
} else {
	var q_name = "Question";
	var q_placeholder_name  = "Enter your name";
	var q_placeholder_email = "Enter your email";
	var q_label             = "Question";
	var q_placeholder_que   = "Please enter your question...";
	var q_submit_btn        = "Submit Question";
	if (shop_add == "unverfalscht.myshopify.com") {
		q_placeholder_name  = "Dein name";
		q_placeholder_email = "Dein Email";
		q_label             = "Frage";
		q_placeholder_que   = "Bitte geben Sie Ihre Frage ein";
		q_submit_btn        = "Frage senden";
	}

	var evm_star_html = "<div class='evm-star-rating'> <input type='radio' id='star5' name='ratings' value='5' checked /> <label for='star5' class='star'></label> <input type='radio' id='star4' name='ratings' value='4' /> <label for='star4' class='star'></label> <input type='radio' id='star3' name='ratings' value='3' /> <label for='star3' class='star'></label> <input type='radio' id='star2' name='ratings' value='2' /> <label for='star2' class='star'></label> <input type='radio' id='star1' name='ratings' value='1' /> <label for='star1' class='star'></label> </div>";
		
	/*var evm_star_html = "<fieldset class='fieldset_rating'><input type='hidden' id='evm_star_selected' value='5' name='evm_star_selected'> <input type='radio'id='star1'name='ratings'value='1'/> <label id='evm_lbl_1' class='evm_full_label'for='star1'title='1 star'> </label> <input type='radio'id='star2'name='ratings'value='2'/> <label id='evm_lbl_2' class='evm_full_label'for='star2'title='2 stars'> </label> <input type='radio'id='star3'name='ratings'value='3'/> <label id='evm_lbl_3' class='evm_full_label'for='star3'title='3 stars'> </label> <input type='radio'id='star4'name='ratings'value='4'/> <label id='evm_lbl_4' class='evm_full_label'for='star4'title='4 stars'> </label> <input type='radio'id='star5'name='ratings'value='5' checked /> <label id='evm_lbl_5' class='evm_full_label'for='star5'title='5 stars'> </label> </fieldset>";*/

	$("#expert_leave_review").html("<div id='evmLoadingDiv'style='display: none;'></div><div class='evmcontent-main'id='exp_rev_sec'style='z-index: 9; display:none;'><div class='evmgrid-container'><div class='reviewtitle_heading'></div><div class='evm-rev_header'><div class='evm_revtop_header'><div class='evm_p_r_powered_by'><span class='remove_powered_by'>Powered By</span><a href='https://apps.shopify.com/evm-testimonials-showcase?utm_source=reviews-widget&utm_medium=frontend&utm_campaign=Poweredby' target='_blank'><img class='rev_logo remove_powered_by'src='"+main_url+"images/rev_logo.png'></a><hr></div><div class='overall_left'><p class='evm_star_base_filter'><i class='evm_font evmfa-star'></i><i class='evm_font evmfa-star'></i><i class='evm_font evmfa-star'></i><i class='evm_font evmfa-star'></i><i class='evm_font evmfa-star'></i></p><div class='evm-rev_title review_count'><span></span></div></div><div class='star_right'><div class='star_inner'onclick='evm_star_filters(this,5, true);'><span class='evm_star_text'>5 <span class='trns_star'>Star</span></span><div class='progress_container'><span class='progress_container_star_5'></span></div><span class='evm_total_review_count_5'>(0)</span></div><div class='star_inner'onclick='evm_star_filters(this,4, true);'><span class='evm_star_text'>4 <span class='trns_star'>Star</span></span><div class='progress_container'><span class='progress_container_star_4'></span></div><span class='evm_total_review_count_4'>(0)</span></div><div class='star_inner'onclick='evm_star_filters(this,3, true);'><span class='evm_star_text'>3 <span class='trns_star'>Star</span></span><div class='progress_container'><span class='progress_container_star_3'></span></div><span class='evm_total_review_count_3'>(0)</span></div><div class='star_inner'onclick='evm_star_filters(this,2, true);'><span class='evm_star_text'>2 <span class='trns_star'>Star</span></span><div class='progress_container'><span class='progress_container_star_2'></span></div><span class='evm_total_review_count_2'>(0)</span></div><div class='star_inner'onclick='evm_star_filters(this,1, true );'><span class='evm_star_text'>1 <span class='trns_star'>Star</span></span><div class='progress_container'><span class='progress_container_star_1'></span></div><span class='evm_total_review_count_1'>(0)</span></div></div><div class='evm_revtop_right'><div class='text-left'id='change_btn'><button id='review_form_button'class='btn-evm-review leave'>Write a Review</button></div><form autocomplete='off'enctype='multipart/form-data'method='POST'class='evmMostRecent'><input name='utf8'type='hidden'value='✓'><div class='evm_m_r_d'><label><select id='sortBy'onchange='ajax_data(shop_add,productId,this.value)'class='evm-review-form-control mostrecent'><option value='1' id='trns_see_all_revs'>See All Reviews</option><option value='1' id='trns_most_recent'>Most Recent</option><option value='2' id='trns_highest_rating'>Highest Rating</option><option value='3' id='trns_lowest_rating'>Lowest Rating</option></select></label></div></form></div></div><div class='reviews-controls'><div class='reviews-controls__aggregate'><div id='evm_summary_stars'></div><div class='rating-basic__star-rating -size-large h-ml1'id='starshow'></div></div></div><div id='evm-product-review-loader'style='display:none;'><div align='center'id='loaderImg'><div align='center'class='cssload-fond'><div class='cssload-container-general'><div class='cssload-internal'><div class='cssload-ballcolor cssload-ball_1'></div></div><div class='cssload-internal'><div class='cssload-ballcolor cssload-ball_2'></div></div><div class='cssload-internal'><div class='cssload-ballcolor cssload-ball_3'></div></div><div class='cssload-internal'><div class='cssload-ballcolor cssload-ball_4'></div></div></div></div></div></div><div id='evm-review-show_msg'></div><div id='review_new_form'style='display:none;'><div id='post-review-box'><div class='col-md-12'style='margin: 20px 0px 0px 0px;'><form autocomplete='off'id='review_form'name='review_form'method='post'enctype='multipart/form-data'><input type='hidden'name='product_id'id='product_id'value='"+ productId + "'><input type='hidden'name='evm_o_id'id='evm_o_id'value='"+ evm_o_id + "'><input type='hidden'name='evm_type'id='evm_type'value='"+ evm_type + "'><input type='hidden'name='evm_chk_c' id='evm_chk_c' value='"+evm_url_val+"'><input type='hidden'name='product_name'id='product_name'value='"+ productName + "'><input type='hidden'name='product_handle'id='product_handle'value='"+ productHandle + "'><input type='hidden'name='shop_address'id='shop_address'value='" + shop_add + "'><div class='evm-review-form-group'><label class='evmrev_label' id='trns_rating'>Rating</label><p class='stars'>"+evm_star_html+"</p></div><div class='evm-review-form-group evm_form_half'><label for='name'class='evmrev_label' id='trns_name'>Name</label><input type='hidden'name='shop_domain'id='shop_domain'value='" + window.location.hostname + "'><input id='client_name'name='client_name'type='text'placeholder='Enter your name'class='evm-review-form-control'><div id='div1'></div></div><div class='evm-review-form-group evm_form_half'><label class='evmrev_label' id='trns_email'>Email</label><input id='client_email'name='client_email'type='email'placeholder='Enter your email'class='evm-review-form-control'><div id='div2'></div></div><div class='evm-review-form-group evm_form_half'><label class='evmrev_label' id='trns_review_title'>Review Title(Optional)</label><input id='review_title'name='review_title'type='text'placeholder='Give your review title'class='evm-review-form-control'></div><div class='evm-review-form-group evm-file-upload evm_hide_img_fld evm_form_half'><label class='evmrev_label' id='trns_upload_picture'>Upload a picture of your product(Optional)</label><div class='evm-file-select'><div class='evm-file-select-button'id='evmfileName'>Choose File</div><div class='evm-file-select-name'id='evmnoFile'>No file chosen...</div><input type='file'name='client_pic'accept='image/*'id='client_pic'class='evm-review-form-control'></div></div><div class='evm-review-form-group'><label class='evmrev_label' id='trns_review_desc'>Review</label><textarea class='evm-review-form-control'id='review_description'name='review_description'placeholder='Please enter your feedback here...'rows='5'></textarea><br></div><div class='evm-review-form-group'id='change_btn_submit'><button type='submit'id='submit_review'class='btn-evm-review leave'>Submit Review</button><div id='evm-review-loading'style='padding-top: 15px;'></div><br></div></form></div></div></div></div></div><div class='first_write_rev_div'></div><div class='tab_wrapper'><ul style='padding: 0;' class='pr_tabs'><label style='margin:0;border-bottom:2px solid #212b36;padding: 0;line-height: 50px;' class='evm_tab_review_app'id='one'for='review_radio'><span id='total_data'>0 Reviews</span></label>"+add_temp+"<span id='or_sign' style='font-size: 18px;'> | </span><label style='margin: 0;padding: 0;line-height: 50px;' class='evm_tab_review_app' id='Q_and_A'><span class='evm_q_a_text'>Q&A</span> <span id='evm_show_count'></span></label><label style='margin:0 0 10px 0' class='evm_tab_review_app'id='two'for='que_radio'>Ask a Question</label></ul><div class='panels pr_tabs_content' id='evm_pro-slider'><div id='evm_tab_ques_ans' style='display: none;float: left; width: 100%;'><form id='questionsAnswers' method='POST' autocomplete='off'><div class='evm-review-form-group evm_form_half'><label for='u_name'class='evmrev_label'>Name</label><input id='u_name'name='u_name'type='text'placeholder='"+q_placeholder_name+"'class='evm-review-form-control'></div><div class='evm-review-form-group evm_form_half'><label for='u_email'class='evmrev_label'>Email</label><input id='u_email'name='u_email'type='email'placeholder='"+q_placeholder_email+"'class='evm-review-form-control'></div><div class='evm-review-form-group evm_form_half'><label for='u_question'class='evmrev_label'>"+q_label+"</label><textarea class='evm-review-form-control'id='u_question'name='u_question'placeholder='"+q_placeholder_que+"'rows='5'></textarea></div><div id='evm_success' style='margin: 0 0 10px 0;' style='display: none'></div><div class='evm-review-form-group evm_form_half'><button type='submit' id='ques_ans_submit' class='btn-evm-review leave'>"+q_submit_btn+"</button></div></form></div><ul class='' id='show_product_reviews'></ul><ul class='' id='show_product_reviews_2' style='display:none'></ul><div style='display:none' id='questionAnsHTML'></div></div></div></div></div>");
}
// <div id='evm_pro-slider' class='evm_pro-carousel evm_pro-theme'><ul id='show_product_reviews' class='evm_panel_review_app' style='display:none'></ul></div>

$(document.body).append("<div id='evmMyModalImg' class='evm_modal'> <span class='evm_modal_close'>&times;</span> <img class='evm_modal-content' id='evm_show_img_Modal'></div>");
$("body").append('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />');
/* ******************** */
if($("#expert_leave_review").length != 0 || $("#evm_all_reviews").length) {
	ajax_data(shop_add, productId, 1, '', '', evm_all_rev);
}
$('.evm_tab_review_app').on('click', function() {
	let currentTab = $(this).attr('id');

	if (currentTab == "one") {
		$('.vpb_show_more_or_the_end').show();
		$('#evm_tab_ques_ans').hide();
		$('#show_product_reviews').show();
		$('#questionAnsHTML').hide();
		$('#show_product_reviews_2').hide();
		$('#one').css("border-bottom", "2px solid #212b36");
		$('#Q_and_A').css("border-bottom", "");
		$('#three_temp_2').css("border-bottom", "");
	} else if (currentTab == "Q_and_A") {
		$('.vpb_show_more_or_the_end').hide();
		$('#show_product_reviews').hide();
		$('#evm_tab_ques_ans').hide();
		$('#questionAnsHTML').show();
		$('#one').css("border-bottom", "");
		$('#show_product_reviews_2').hide();
		$('#three_temp_2').css("border-bottom", "");
		$('#Q_and_A').css("border-bottom", "2px solid #212b36");
		// $('#space_hide').css("border-bottom", "");
	} else if (currentTab == 'two') {
		// $('#evm_tab_ques_ans').hide();
		$('.vpb_show_more_or_the_end').hide();
		$('#one').css("border-bottom", "");
		$('#Q_and_A').css("border-bottom", "");
		$('#show_product_reviews').hide();
		$('#questionAnsHTML').hide();
		$('#show_product_reviews_2').hide();
		$('#evm_tab_ques_ans').slideToggle(1000);
		$('#three_temp_2').css("border-bottom", "");
		// return false;
	} else if (currentTab == 'three_temp_2') {
		$('.vpb_show_more_or_the_end').show();
		$('#evm_tab_ques_ans').hide();
		$('#show_product_reviews').hide();
		$('#show_product_reviews_2').show();
		$('#questionAnsHTML').hide();
		$('#Q_and_A').css("border-bottom", "");
		$('#one').css("border-bottom", "");
		$('#three_temp_2').css("border-bottom", "2px solid #212b36");
	}
	return false;
});
/* ******************** */

/******************** show reviews and review form ********************/
var evm_star_load  = '';
var evm_param_load = '';
var span_count     = '';
// var evm_star_no;
var evm_star_load_short_by = 1;
function evm_star_filters(obj, evm_star, param) {
	$(".evmreviews_section").hide('slow');
	// $('.star_inner').removeClass('evmStarFilters');
	// $(obj).addClass('evmStarFilters');

	span_count = $('.evm_total_review_count_'+evm_star).text();
	span_count = span_count.split("(");
	span_count = span_count[1].split(")");
	span_count = span_count[0];
	evm_star_load  = evm_star;
	evm_param_load = param;
	evm_star_load_short_by = '';
  // $("#grid").html("<div class='evmloader_sortby'><div class='evm_loading_spi_sort'><i class='fa fa-circle-o-notch fa-spin' style='font-size:30px;'></i></div></div>");
  ajax_data(shop_add, productId, evm_star, param);
}

/* masonry */
// $("head").append('<link href="'+main_url+'assets/evm_masonry/evm_component_style.css" rel="stylesheet" type="text/css" media="all" />');
// $("head").append('<link href="'+main_url+'assets/evm_masonry/default.css" rel="stylesheet" type="text/css" media="all" />');
if (shop_add == "mysupercells.myshopify.com") {} else {
	$("head").append('<script type="text/javascript" src="'+main_url+'assets/evm_masonry/masonry.pkgd.min.js"></script>');
}
/* masonry */
/* get cookie */
function evmGetDataSet(r_id) {
	var getDataCookie = "; " + document.cookie;
	var evm_parts = getDataCookie.split("; " + r_id + "=");
	var arr_val = evm_parts.pop().split(";").shift();
	var l_d_val = arr_val.split(",");
	if (l_d_val[2] == 'like') return 'like'; else if ( l_d_val[2] == 'dislike' ) return 'dislike'; else return 'no';
}
/* end get cookie */

var flags = 0;
var old_total;
var owl_item_evm_width;
var review_display_old;
var total_old;
var load_more_set_old;
var reviews_per_page_old;
var review_form_title_font_color_old;
var review_form_title_bg_old;
$('#sortBy').on('change', function() {
	evm_star_load_short_by  = $(this).val();
	evm_param_load = '';
	span_count     = '';
});
function ajax_data(shop_name, product_id, sortBy, param = '', offset_get_data='', evm_all_rev = '' ) {
	$(".evmreviews_section").hide('slow');
  var progress_container_star_1 = progress_container_star_2 = progress_container_star_3 = progress_container_star_4 = progress_container_star_5 = 0;
  var frontendurl = main_url+"frontend/review/evmProductReview";
  $.ajax({
    url     : frontendurl,
    data    : { shop_name : shop_name, product_id : product_id, sortBy : sortBy, filter_by_star : param, offset_get_data : offset_get_data, evm_all_rev : evm_all_rev },
    jsonp   : "evmcallback",
    dataType: "jsonp",
    async   : true,
    cache   : false,
    success:function(data) {
      if (data.review_enable==1) {
      	$(".review_wrap .fit_reviews span").text(data.total_rev_footer);
      	$("head").append('<link href="'+main_url+'assets/css/frontend/product_review_style.css" rel="stylesheet" type="text/css" media="all" />');
        if(data.msg=='notfound') {
	        $("#show_product_reviews").html("<h4  style='color: #329EFC;font-weight: normal; padding-top: 16px;margin-top: 16px;text-align: center;'>No Reviews.</h4>");
	        $("#expert_leave_review").hide();
	        return true;
      }
      /* question answer */
      if(data.app_plan < 6)
      {
      	 $('#two').css('display', 'none');
      	 $('#Q_and_A').css('display', 'none');
      }
      if (data.quesAns == 0) {
      	$('#two').css('display', 'none');
      	$('#Q_and_A').css('display', 'none');
      	$('#or_sign').css('display', 'none');
    	  $('#evm_show_count').text('(0)');
      } else {
	      $('#questionAnsHTML').html(data.questionAnsHTML);
	      $('#evm_show_count').text('('+data.ques_ans_cnt+')');
      }
      /* question answer */
      /******************** if setting is not in admin ********************/
      $("#exp_rev_sec").show();
      $("#evm-product-review-loader").hide();
      
      // $("#total_data").html('');
      if (data.remove_powered_by == 1) $('.remove_powered_by').hide();
      var total                   = data.total;
      var records                 = data.records;
      var per_page_records        = data.per_page_records;
      var enablePhotosReviews     = data.enablePhotosReviews;
      var automaticMailOnOff      = data.automaticMailOnOff;
      var enableReplyToReviews    = data.enableReplyToReviews;
      var settingdata             = data.setting_data;
      var setting_records         = settingdata['setting_option'];
      var json                    = JSON.parse(settingdata);
      // var overall_rating          = json.overall_rating;
      var overall_rating_text_clr = json.overall_rating_text_clr;
      var review_star_icon        = json.review_star_icon;
      var review_star_hvr_clr     = json.review_star_hvr_clr;
      // var review_form_title       = json.review_form_title;
      var review_form_submit_btn  = json.review_form_submit_btn;
      var reviews_per_page        = json.reviews_per_page;
      var review_form_title_bg    = json.review_form_title_bg;
      var load_more_set           = json.load_more_set;
      var starNumber              = data.overall_rating; 
      var select_template         = json.select_template;
      var review_display          = json.review_display;
      // var slider_autoplay      = json.slider_autoplay;
      var readmore_status         = json.readmore_status;
      var char_limit              = json.char_limit;
      var evm_appd 				  = 0;
      if (typeof review_star_hvr_clr === "undefined") review_star_hvr_clr = "ffd340"; 
      if(evm_appd == 0) {
      	evm_appd = 1;
      	var evms_star_style = "<style>.evm-star-rating {display:flex; float:left;flex-direction: row-reverse; } .evm-star-rating input {display:none; } .evm-star-rating label {color:#ccc; cursor:pointer; } .evm-star-rating :checked ~ label {color:#"+review_star_icon+"; } .evm-star-rating label:hover, .evm-star-rating label:hover ~ label {color:#"+review_star_hvr_clr+"; }</style>";
      	$("#review_form").append(evms_star_style);
      }

      if (json.review_title_heading == json.trns_rev_heading || typeof json.trns_rev_heading === 'undefined') var review_title_heading = json.review_title_heading; else var review_title_heading = json.trns_rev_heading;
      if (typeof json.overall_rating == json.trns_rev_overall_rating || typeof json.trns_rev_overall_rating === 'undefined') var overall_rating  = json.overall_rating; else var overall_rating  = json.trns_rev_overall_rating;
      if (typeof json.review_form_title == json.trns_rev_title || typeof json.trns_rev_title === 'undefined') var review_form_title  = json.review_form_title; else var review_form_title  = json.trns_rev_title;
      if (typeof json.review_text == json.trns_rev_review_text || typeof json.trns_rev_review_text === 'undefined') var review_text  = json.review_text; else var review_text  = json.trns_rev_review_text;
      if (typeof json.write_first_rev == json.trns_rev_write_first_rev || typeof json.trns_rev_write_first_rev === 'undefined') var write_first_rev  = json.write_first_rev; else var write_first_rev  = json.trns_rev_write_first_rev;
      if (typeof review_text === 'undefined') {
      	review_text = 'Reviews';
      }

      if (data.app_plan>=6) {
	      if (typeof json.trns_rating === 'undefined' || json.trns_rating == '') { var trns_rating = 'Rating'; } else { var trns_rating = json.trns_rating; }
	      if (typeof json.trns_name === 'undefined' || json.trns_name == '') { var trns_name = 'Name'; } else { var trns_name = json.trns_name; }
	      if (typeof json.trns_name_placeholder === 'undefined' || json.trns_name_placeholder == '') { var trns_name_placeholder = 'Enter your name'; } else { var trns_name_placeholder = json.trns_name_placeholder; }
	      if (typeof json.trns_email === 'undefined' || json.trns_email == '') { var trns_email = 'Email'; } else { var trns_email = json.trns_email; }
	      if (typeof json.trns_email_placeholder === 'undefined' || json.trns_email_placeholder == '') { var trns_email_placeholder = 'Enter your email'; } else { var trns_email_placeholder = json.trns_email_placeholder; }
	      if (typeof json.trns_review_title === 'undefined' || json.trns_review_title == '') { var trns_review_title = 'Review Title(Optional)'; } else { var trns_review_title = json.trns_review_title; }
	      if (typeof json.trns_review_title_placeholder === 'undefined' || json.trns_review_title_placeholder == '') { var trns_review_title_placeholder = 'Give your review title'; } else { var trns_review_title_placeholder = json.trns_review_title_placeholder; }
	      if (typeof json.trns_upload_picture === 'undefined' || json.trns_upload_picture == '') { var trns_upload_picture = 'Upload a picture of your product(Optional)'; } else { var trns_upload_picture = json.trns_upload_picture; }
	      if (typeof json.trns_review_desc === 'undefined' || json.trns_review_desc == '') { var trns_review_desc = 'Review'; } else { var trns_review_desc = json.trns_review_desc; }
	      if (typeof json.trns_review_desc_placeholder === 'undefined' || json.trns_review_desc_placeholder == '') { var trns_review_desc_placeholder = 'Please enter your feedback here...'; } else { var trns_review_desc_placeholder = json.trns_review_desc_placeholder; }

	      if (typeof json.review_form_submit_btn == json.trns_rev_submit_btn || typeof json.trns_rev_submit_btn === 'undefined') var review_form_submit_btn = json.review_form_submit_btn; else var review_form_submit_btn = json.trns_rev_submit_btn;

				$('#trns_rating').text(trns_rating);
				$('#trns_name').text(trns_name);
				$('#client_name').attr('placeholder',trns_name_placeholder);
				$('#trns_email').text(trns_email);
				$('#client_email').attr('placeholder',trns_email_placeholder);
				$('#trns_review_title').text(trns_review_title);
				$('#review_title').attr('placeholder', trns_review_title_placeholder);
				$('#trns_upload_picture').text(trns_upload_picture);
				$('#trns_review_desc').text(trns_review_desc);
				$('#review_description').attr('placeholder', trns_review_desc_placeholder);
				/* filter text */
				if (typeof json.trns_star === 'undefined' || json.trns_star == '') { var trns_star = 'Star'; } else { var trns_star = json.trns_star; }
				if (typeof json.trns_see_all_revs === 'undefined' || json.trns_see_all_revs == '') { var trns_see_all_revs = 'See All Reviews'; } else { var trns_see_all_revs = json.trns_see_all_revs; }
				if (typeof json.trns_most_recent === 'undefined' || json.trns_most_recent == '') { var trns_most_recent = 'Most Recent'; } else { var trns_most_recent = json.trns_most_recent; }
				if (typeof json.trns_highest_rating === 'undefined' || json.trns_highest_rating == '') { var trns_highest_rating = 'Highest Rating'; } else { var trns_highest_rating = json.trns_highest_rating; }
				if (typeof json.trns_lowest_rating === 'undefined' || json.trns_lowest_rating == '') { var trns_lowest_rating = 'Lowest Rating'; } else { var trns_lowest_rating = json.trns_lowest_rating; }
				$('.trns_star').text(trns_star);
				$('#trns_see_all_revs').text(trns_see_all_revs);
				$('#trns_most_recent').text(trns_most_recent);
				$('#trns_highest_rating').text(trns_highest_rating);
				$('#trns_lowest_rating').text(trns_lowest_rating);
			}

      var no_of_columns_desk      = json.no_of_columns_desk;
      var no_of_columns_mob       = json.no_of_columns_mob;
      var position_rev_heading    = json.position_rev_heading;
      var position_arrows         = json.position_arrows;
      // var grid_width           = 100/no_of_columns_desk;
      // var gridwidth                         = 100/no_of_columns_mob;
      var review_form_submit_btn_bg         = json.review_form_submit_btn_bg;
      var review_form_title_font_color      = json.review_form_title_font_color;
      var review_form_submit_btn_font_color = json.review_form_submit_btn_font_color;

    	if (flags==1 && review_display == 'slider') {
    		var evm_append_data = ".evm_wrapper_slider";
    		$(".evm_wrapper_slider").html('');
    		var evm_wrapper_slider_w = parseInt(( total * 2 ) * owl_item_evm_width);
    		$('.evm_wrapper_slider').css('width', evm_wrapper_slider_w+'px');
    	} else {
    		var evm_append_data = "#show_product_reviews";
    		$("#show_product_reviews").html('');
	      
	      if (shop_add == "testimonials-product-reviews-demo-store.myshopify.com") { $("#show_product_reviews_2").html(''); }
    	}

    	$('#ques_ans_submit').css('background-color', '#'+review_form_submit_btn_bg);
    	$('#ques_ans_submit').css('border-color', '#'+review_form_submit_btn_bg);
    	$('#ques_ans_submit').css('color', '#'+review_form_submit_btn_font_color);
    	if (data.app_plan <= 5 ) {
    		$('#two').css('display', 'none');
    		$('#Q_and_A').css('display', 'none');
    		$('#or_sign').css('display', 'none');
    	}
    	// $('#ques_ans_submit').text(review_form_submit_btn);

      $("#change_btn_submit").html("<button type='submit' id='submit_review' class='btn-evm-review leave' style='border-color:#"+review_form_submit_btn_bg+"; background-color:#"+review_form_submit_btn_bg+"; color:#"+review_form_submit_btn_font_color+";'>"+review_form_submit_btn+"</button>");
      $("#change_btn").html("<button id='review_form_button' class='btn-evm-review leave' style='border-color: #"+review_form_title_bg+"; background-color:#"+review_form_title_bg+";color:#"+review_form_title_font_color+";'>"+review_form_title+"</button>");
      $("#review_form_button").click(function() {$("#review_new_form").slideToggle(1000);});

      for(var i = 0; i < records.length; i++) {
     		if(records[i]['rating'] === '1') {
        	progress_container_star_1++;
        } else if(records[i]['rating'] === '2') {
        	progress_container_star_2++;
        } else if(records[i]['rating'] === '3') {
        	progress_container_star_3++;
        } else if(records[i]['rating'] === '4') {
        	progress_container_star_4++;
        } else if(records[i]['rating'] ==='5') {
        	progress_container_star_5++;
        }
      }

      for(var i = 0; i < per_page_records.length; i++) {
      	if(per_page_records[i]['rating'] === '1') {
        	var rating_show = '<i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i>';
        } else if(per_page_records[i]['rating'] === '2') {
        	var rating_show = '<i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i>';
        } else if(per_page_records[i]['rating'] === '3') {
        	var rating_show = '<i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i>';
        } else if(per_page_records[i]['rating'] === '4') {
        	var rating_show = '<i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i></i><i class="evm_font evmfa-star" style="color:#DFE3E8"></i>';
        } else if(per_page_records[i]['rating'] ==='5') {
        	var rating_show = '<i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i><i class="evm_font evmfa-star" style="color:#'+review_star_icon+'"></i>';
        }

        var reviewer_name        = per_page_records[i]['client_name'];
        var first_letter         = reviewer_name.charAt(0);
        var reviewer_rating      = per_page_records[i]['rating'];
        var dateAr               = per_page_records[i]['review_date'].split(' ');
        var reviewer_date        = dateAr[0];
        if (shop_add == "bouncy-bee.myshopify.com") reviewer_date = dateAr[0].split("-").reverse().join("/");	

        var reviewer_picture     = per_page_records[i]['client_pic'];
        
        if (per_page_records[i]['review_title'] == null || per_page_records[i]['review_title'] == '' || per_page_records[i]['review_title'] == 'null') var reviewer_title = ''; else var reviewer_title = per_page_records[i]['review_title'];
        if (per_page_records[i]['review_description'] == null || per_page_records[i]['review_description'] == '' || per_page_records[i]['review_description'] == 'null') {
        	var reviewer_description = '';
        } else {
        	var revReply = '';
        	if (enableReplyToReviews == 1) {
	        	if (per_page_records[i]['revReply'] != '') {
	        		if (shop_add == "testimonials-product-reviews-demo-store.myshopify.com") {
	        			revReply = "<div style='padding: 10px; margin-top: 10px; border-top: 3px solid #ddd; background: #f2f2f2; border-radius: 3px;' class='evm-reviews-wrapper 1'><p style='margin: 0 0 10px 0;'>Reply:</p>"+per_page_records[i]['revReply']+"</div>";
	        		} else {
	        			var revReplyName = shop_add.substr(0, shop_add.indexOf('.'));
	        			if (shop_add == "bouncy-bee.myshopify.com") {
	        				revReplyName = "Bambee";
	        			}
	        			revReply = "<div style='padding: 10px; margin-top: 10px; border-top: 3px solid #ddd; background: #f2f2f2; border-radius: 3px;' class='evm-reviews-wrapper 2'><p style='margin: 0 0 10px 0;'>"+revReplyName+" replied:</p>"+per_page_records[i]['revReply']+"</div>";
	        		}
	        	}
        	}

         var reviewer_description = "<div class='evm-reviews-wrapper'><div class='evm-content-review review_des_more_"+i+"'>"+per_page_records[i]['review_description']+"</div></div>"+revReply+"";
         }

        //if grid view
        var reviewer_picture_img_div = '';

        /* home page slider */
        var evm_grid_col = "";
        if(evm_all_rev == 'evm_all_reviews') {
        	if (total==0) $("#evm_all_reviews").css('display', 'none'); 
        	$('.evm_all_reviews_show').text(total + ' ' + review_text);
	      	if(reviewer_picture !== '') {
              var evm_reviewer_picture = '"'+reviewer_picture+'"';

          	// 	if (reviewer_picture.indexOf('.jpg') > -1) reviewer_picture = reviewer_picture.replace('.jpg?', '.jpg?');
            	// else if (reviewer_picture.indexOf('.jpeg') > -1) reviewer_picture = reviewer_picture.replace('.jpeg?', '.jpeg?');
            	// else reviewer_picture = reviewer_picture.replace('.png?', '.png?');
            	if (enablePhotosReviews=='1') {
              	reviewer_picture_img_div = "<div class='evm-product-img-sec'><img onclick='evm_img_modal("+evm_reviewer_picture+")' class='evmMyImg' id='evmMyImg' src='"+reviewer_picture+"'></div>";
              }
              var evm_img_empty = 'evm_img_temp_2';
            } else {
              reviewer_picture_img_div = '';
              var evm_img_empty = 'evm_no_img_temp_2';
            }
            
            /* cookie code */
            var evm_old_like = evm_old_dislike = '';
						var  evmGetCookieSet = evmGetDataSet( '_like_dislike_value_'+per_page_records[i]['id'] );
						if (evmGetCookieSet=='like') evm_old_like = 'style="pointer-events: none; color: #83B6DD;"'; else if (evmGetCookieSet=='dislike') evm_old_dislike = 'style="pointer-events: none; color: #83B6DD;"';
            /* end cookie code */

            $("#show_product_reviews").append("<li id='"+i+"' class='evmreviews_section template2 "+ evm_grid_col +"'><div class='evm-reviews-content' id='load_more_reviews' style=''>"+reviewer_picture_img_div+"<div class='evm-reviews-regular-box "+evm_img_empty+"'><div class='reviews_left_sec'> <span class='evm-reviews-icon-profile'> "+first_letter+" </span><div class='evm-reviews-header-element'> <div class='name_date'><label class='evm-user-name'>"+reviewer_name+"</label> <label class='evm-reviews-date'>"+reviewer_date+"</label></div><span class='evm-reviews-stars'> <span class='rating-star pull-left'>"+rating_show+"</span> </span></div></div><div class='evm-main_text'><div class='evm-review-content-title'>"+reviewer_title+"</div><div class='clear'></div>"+reviewer_description+"<div class='evm_fw'><div class='like_dislike'> <span>Was this helpful?</span><div class='like "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_like+" data-like-count='1,"+btoa(per_page_records[i]['id'])+",like'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i><span class='evm_l_d_count like_count_"+per_page_records[i]['id']+"'>" +per_page_records[i]['like_count']+"</span></div><div class='dislike "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_dislike+" data-like-count='0,"+btoa(per_page_records[i]['id'])+",dislike'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i><span class='evm_l_d_count dislike_count_"+per_page_records[i]['id']+"'>"+per_page_records[i]['dislike_count']+"</span></div></div></div></div></div></div></li>");

	    }
        /* end home page slider */
        else if(review_display == "slider" || typeof review_display == 'undefined') {
          if(select_template == "template_one" || typeof select_template =='undefined') {
          	if(reviewer_picture !== '') {
              var evm_reviewer_picture = '"'+reviewer_picture+'"';
              if (enablePhotosReviews=='1') {
              	reviewer_picture_img_div = "<div class='evm-reviews-user-img'><img onclick='evm_img_modal("+evm_reviewer_picture+")' class='evmMyImg' id='evmMyImg' src='"+reviewer_picture+"'></div>";
              }
            } else {
              reviewer_picture_img_div = '';
            }
            if (flags==1) { var owl_item_evm = '<div class="owl-item_evm" style="width:'+owl_item_evm_width+'px">'; var close_div = '</div>'; } else { var owl_item_evm = ''; var close_div = ''; }
            
            /* cookie code */
            var evm_old_like = evm_old_dislike = '';
						var  evmGetCookieSet = evmGetDataSet( '_like_dislike_value_'+per_page_records[i]['id'] );
						if (evmGetCookieSet=='like') evm_old_like = 'style="pointer-events: none; color: #83B6DD;"'; else if (evmGetCookieSet=='dislike') evm_old_dislike = 'style="pointer-events: none; color: #83B6DD;"';
            /* end cookie code */
            if (data.verifiedBuyer == 0) var verifiedBuyer = 'style="display: none"'; else var verifiedBuyer = 'style=""';
            $(evm_append_data).append(owl_item_evm+"<li class='evmreviews_section template1'><div class='evm-reviews-content' id='load_more_reviews' style=''><div class='evm-reviews-regular-box'><div class='reviews_left_sec'> <span class='evm-reviews-icon-profile'> <span class='notranslate'><label class='evm-reviews-user-letter'>"+first_letter+"</label> <img "+verifiedBuyer+"class='evm_verifird_sign' src='"+main_url+"assets/evm_verified.svg'></span></span><div class='evm-reviews-header-element'> <label class='evm-user-name'>"+reviewer_name+"</label><div "+verifiedBuyer+" class='verified pull-left'> <span class='evm-user-title'>Verified Buyer</span></div><div class='clear'></div> <span class='evm-reviews-stars'> <span class='rating-star pull-left'>"+rating_show+"</span> </span></div><div class='evm-reviews-created'> <label class='evm-reviews-date'>"+reviewer_date+"</label></div></div><div class='review_right_sec'><div class='clear'></div><div class='evm-main_text'><div class='evm-review-content-title'>"+reviewer_title+"</div><div class='clear'></div>"+reviewer_description+" <div class='evm_img_outer'>"+reviewer_picture_img_div+"<div class='like_dislike'> <span>Was this helpful?</span><div class='like "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_like+" data-like-count='1,"+btoa(per_page_records[i]['id'])+",like'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i><span class='evm_l_d_count like_count_"+per_page_records[i]['id']+"'>" +per_page_records[i]['like_count']+"</span></div><div class='dislike "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_dislike+" data-like-count='0,"+btoa(per_page_records[i]['id'])+",dislike'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i><span class='evm_l_d_count dislike_count_"+per_page_records[i]['id']+"'>"+per_page_records[i]['dislike_count']+"</span></div></div></div></div></div></div></div></li>"+close_div);
            
            
          } else if(select_template == "template_two") {
          	if(reviewer_picture !== '') {
              var evm_reviewer_picture = '"'+reviewer_picture+'"';
            	if (enablePhotosReviews=='1') {
            		reviewer_picture_img_div = "<div class='evm-product-img-sec'><img onclick='evm_img_modal("+evm_reviewer_picture+")' class='evmMyImg' id='evmMyImg' src='"+reviewer_picture+"'></div>";
            	}
              var evm_img_empty = 'evm_img_temp_2';
            } else {
              reviewer_picture_img_div = '';
              var evm_img_empty = 'evm_no_img_temp_2';
            }
            if (flags==1) { var owl_item_evm = '<div class="owl-item_evm" style="width:'+owl_item_evm_width+'px">'; var close_div = '</div>'; } else { var owl_item_evm = ''; var close_div = ''; }

            /* cookie code */
            var evm_old_like = evm_old_dislike = '';
						var  evmGetCookieSet = evmGetDataSet( '_like_dislike_value_'+per_page_records[i]['id'] );
						if (evmGetCookieSet=='like') evm_old_like = 'style="pointer-events: none; color: #83B6DD;"'; else if (evmGetCookieSet=='dislike') evm_old_dislike = 'style="pointer-events: none; color: #83B6DD;"';
            /* end cookie code */

            $(evm_append_data).append(owl_item_evm+"<li class='evmreviews_section template2'><div class='evm-reviews-content' id='load_more_reviews' style=''>"+reviewer_picture_img_div+"<div class='evm-reviews-regular-box "+evm_img_empty+"'><div class='reviews_left_sec'> <span class='evm-reviews-icon-profile'> "+first_letter+" </span><div class='evm-reviews-header-element'> <div class='name_date'><label class='evm-user-name'>"+reviewer_name+"</label> <label class='evm-reviews-date'>"+reviewer_date+"</label></div><span class='evm-reviews-stars'> <span class='rating-star pull-left'>"+rating_show+"</span> </span></div></div><div class='evm-main_text'><div class='evm-review-content-title'>"+reviewer_title+"</div><div class='clear'></div>"+reviewer_description+"<div class='evm_fw'><div class='like_dislike'> <span>Was this helpful?</span><div class='like "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_like+" data-like-count='1,"+btoa(per_page_records[i]['id'])+",like'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i><span class='evm_l_d_count like_count_"+per_page_records[i]['id']+"'>" +per_page_records[i]['like_count']+"</span></div><div class='dislike "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_dislike+" data-like-count='0,"+btoa(per_page_records[i]['id'])+",dislike'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i><span class='evm_l_d_count dislike_count_"+per_page_records[i]['id']+"'>"+per_page_records[i]['dislike_count']+"</span></div></div></div></div></div></div></li>");
          }
        } else {
        	// if (no_of_columns_desk==2) var evm_grid_col = "evm_grid2col";
        	// else if (no_of_columns_desk==3) var evm_grid_col = "evm_grid3col";
        	// else if (no_of_columns_desk==4) var evm_grid_col = "evm_grid4col";
        	// else var evm_grid_col = "evm_grid1col";

        	// $(".evm_pro_customNavigation").css("display","none");
        	if(select_template == "template_one" || typeof select_template =='undefined') {

        		if (shop_add == "testimonials-product-reviews-demo-store.myshopify.com") {
        			if(reviewer_picture !== '') {
              var evm_reviewer_picture = '"'+reviewer_picture+'"';

          	// 	if (reviewer_picture.indexOf('.jpg') > -1) reviewer_picture = reviewer_picture.replace('.jpg?', '.jpg?');
            	// else if (reviewer_picture.indexOf('.jpeg') > -1) reviewer_picture = reviewer_picture.replace('.jpeg?', '.jpeg?');
            	// else reviewer_picture = reviewer_picture.replace('.png?', '.png?');
            	if (enablePhotosReviews=='1') {
              	reviewer_picture_img_div = "<div class='evm-product-img-sec'><img onclick='evm_img_modal("+evm_reviewer_picture+")' class='evmMyImg' id='evmMyImg' src='"+reviewer_picture+"'></div>";
              }
              var evm_img_empty = 'evm_img_temp_2';
            } else {
              reviewer_picture_img_div = '';
              var evm_img_empty = 'evm_no_img_temp_2';
            }
            
            /* cookie code */
            var evm_old_like = evm_old_dislike = '';
						var  evmGetCookieSet = evmGetDataSet( '_like_dislike_value_'+per_page_records[i]['id'] );
						if (evmGetCookieSet=='like') evm_old_like = 'style="pointer-events: none; color: #83B6DD;"'; else if (evmGetCookieSet=='dislike') evm_old_dislike = 'style="pointer-events: none; color: #83B6DD;"';
            /* end cookie code */

            $("#show_product_reviews_2").append("<li id='"+i+"' class='evmreviews_section template2 "+ evm_grid_col +"'><div class='evm-reviews-content' id='load_more_reviews' style=''>"+reviewer_picture_img_div+"<div class='evm-reviews-regular-box "+evm_img_empty+"'><div class='reviews_left_sec'> <span class='evm-reviews-icon-profile'> "+first_letter+" </span><div class='evm-reviews-header-element'> <div class='name_date'><label class='evm-user-name'>"+reviewer_name+"</label> <label class='evm-reviews-date'>"+reviewer_date+"</label></div><span class='evm-reviews-stars'> <span class='rating-star pull-left'>"+rating_show+"</span> </span></div></div><div class='evm-main_text'><div class='evm-review-content-title'>"+reviewer_title+"</div><div class='clear'></div>"+reviewer_description+"<div class='evm_fw'><div class='like_dislike'> <span>Was this helpful?</span><div class='like "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_like+" data-like-count='1,"+btoa(per_page_records[i]['id'])+",like'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i><span class='evm_l_d_count like_count_"+per_page_records[i]['id']+"'>" +per_page_records[i]['like_count']+"</span></div><div class='dislike "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_dislike+" data-like-count='0,"+btoa(per_page_records[i]['id'])+",dislike'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i><span class='evm_l_d_count dislike_count_"+per_page_records[i]['id']+"'>"+per_page_records[i]['dislike_count']+"</span></div></div></div></div></div></div></li>");
        		}
          	if(reviewer_picture !== '') {
              var evm_reviewer_picture = '"'+reviewer_picture+'"';
              if (enablePhotosReviews=='1') {
              	reviewer_picture_img_div = "<div class='evm-reviews-user-img'><img onclick='evm_img_modal("+evm_reviewer_picture+")' class='evmMyImg' id='evmMyImg' src='"+reviewer_picture+"'></div>";
              }
            } else {
              reviewer_picture_img_div = '';
            }

            /* cookie code */
            var evm_old_like = evm_old_dislike = '';
						var  evmGetCookieSet = evmGetDataSet( '_like_dislike_value_'+per_page_records[i]['id'] );
						if (evmGetCookieSet=='like') evm_old_like = 'style="pointer-events: none; color: #83B6DD;"'; else if (evmGetCookieSet=='dislike') evm_old_dislike = 'style="pointer-events: none; color: #83B6DD;"';
            /* end cookie code */
            if (data.verifiedBuyer == 0) var verifiedBuyer = 'style="display: none"'; else var verifiedBuyer = 'style=""';
            
            $("#show_product_reviews").append("<li class='evmreviews_section template1"+ evm_grid_col +"'><div class='evm-reviews-content' id='load_more_reviews' style=''><div class='evm-reviews-regular-box'><div class='reviews_left_sec'> <span class='evm-reviews-icon-profile'><span class='notranslate'><label class='evm-reviews-user-letter'>"+first_letter+"</label> <img "+verifiedBuyer+" class='evm_verifird_sign' src='"+main_url+"assets/evm_verified.svg'></span></span><div class='evm-reviews-header-element'> <label class='evm-user-name'>"+reviewer_name+"</label><div "+verifiedBuyer+" class='verified pull-left'> <span class='evm-user-title'>Verified Buyer</span></div><div class='clear'></div> <span class='evm-reviews-stars'> <span class='rating-star pull-left'>"+rating_show+"</span> </span></div><div class='evm-reviews-created'> <label class='evm-reviews-date'>"+reviewer_date+"</label></div></div><div class='review_right_sec'><div class='clear'></div><div class='evm-main_text'><div class='evm-review-content-title'>"+reviewer_title+"</div><div class='clear'></div>"+reviewer_description+" <div class='evm_img_outer'>"+reviewer_picture_img_div+"<div class='like_dislike'> <span>Was this helpful?</span><div class='like "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_like+" data-like-count='1,"+btoa(per_page_records[i]['id'])+",like'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i><span class='evm_l_d_count like_count_"+per_page_records[i]['id']+"'>" +per_page_records[i]['like_count']+"</span></div><div class='dislike "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_dislike+" data-like-count='0,"+btoa(per_page_records[i]['id'])+",dislike'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i><span class='evm_l_d_count dislike_count_"+per_page_records[i]['id']+"'>"+per_page_records[i]['dislike_count']+"</span></div></div></div></div></div></div></div></li>");

            

          } else if(select_template == "template_two") {
          	if(reviewer_picture !== '') {
              var evm_reviewer_picture = '"'+reviewer_picture+'"';

          	// 	if (reviewer_picture.indexOf('.jpg') > -1) reviewer_picture = reviewer_picture.replace('.jpg?', '.jpg?');
            	// else if (reviewer_picture.indexOf('.jpeg') > -1) reviewer_picture = reviewer_picture.replace('.jpeg?', '.jpeg?');
            	// else reviewer_picture = reviewer_picture.replace('.png?', '.png?');
            	if (enablePhotosReviews=='1') {
              	reviewer_picture_img_div = "<div class='evm-product-img-sec'><img onclick='evm_img_modal("+evm_reviewer_picture+")' class='evmMyImg' id='evmMyImg' src='"+reviewer_picture+"'></div>";
              }
              var evm_img_empty = 'evm_img_temp_2';
            } else {
              reviewer_picture_img_div = '';
              var evm_img_empty = 'evm_no_img_temp_2';
            }
            
            /* cookie code */
            var evm_old_like = evm_old_dislike = '';
						var  evmGetCookieSet = evmGetDataSet( '_like_dislike_value_'+per_page_records[i]['id'] );
						if (evmGetCookieSet=='like') evm_old_like = 'style="pointer-events: none; color: #83B6DD;"'; else if (evmGetCookieSet=='dislike') evm_old_dislike = 'style="pointer-events: none; color: #83B6DD;"';
            /* end cookie code */

            $("#show_product_reviews").append("<li id='"+i+"' class='evmreviews_section template2 "+ evm_grid_col +"'><div class='evm-reviews-content' id='load_more_reviews' style=''>"+reviewer_picture_img_div+"<div class='evm-reviews-regular-box "+evm_img_empty+"'><div class='reviews_left_sec'> <span class='evm-reviews-icon-profile'> "+first_letter+" </span><div class='evm-reviews-header-element'> <div class='name_date'><label class='evm-user-name'>"+reviewer_name+"</label> <label class='evm-reviews-date'>"+reviewer_date+"</label></div><span class='evm-reviews-stars'> <span class='rating-star pull-left'>"+rating_show+"</span> </span></div></div><div class='evm-main_text'><div class='evm-review-content-title'>"+reviewer_title+"</div><div class='clear'></div>"+reviewer_description+"<div class='evm_fw'><div class='like_dislike'> <span>Was this helpful?</span><div class='like "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_like+" data-like-count='1,"+btoa(per_page_records[i]['id'])+",like'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i><span class='evm_l_d_count like_count_"+per_page_records[i]['id']+"'>" +per_page_records[i]['like_count']+"</span></div><div class='dislike "+per_page_records[i]['id']+" evm_like_reviews' "+evm_old_dislike+" data-like-count='0,"+btoa(per_page_records[i]['id'])+",dislike'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i><span class='evm_l_d_count dislike_count_"+per_page_records[i]['id']+"'>"+per_page_records[i]['dislike_count']+"</span></div></div></div></div></div></div></li>");
          }
        }
        

        if(readmore_status == "enable" && review_display == "slider") {
          var showChar = char_limit;
          var ellipsestext = "...";
          var moretext = "Read More";
          var lesstext = "Hide";
          $('.review_des_more_'+i).each(function() {
            var content = $(this).html();
            if(content.length > showChar) {
              var c = content.substr(0, showChar);
              var h = content.substr(showChar, content.length - showChar);
              var html = c + "<span class='evm_more_des'>" + ellipsestext+ "&nbsp;</span><span class='evm-morecontent'><span>" + h + "</span>&nbsp;&nbsp;<a href='' class='read_morelink_"+i+"'>" + moretext + "</a></span>";
              $(this).html(html);
            }
          });

          $('.read_morelink_'+i).click(function(){
            if($(this).hasClass("less")) {
              $(this).removeClass("less");
              $(this).html(moretext);
              $(this).parent().prev().css("display", "inline");
	            $(this).prev().css("display", "none");
            } else {
              $(this).addClass("less");
              $(this).html(lesstext);
	            $(this).parent().prev().css("display", "none");
	            $(this).prev().css("display", "contents");
            }
            return false;
          });
        }
      }

      if(total >0) {
      	
      	if(review_display == "slider" && evm_all_rev =='') {
      		if (position_arrows == 'hide_arrows') var navigation = false; else var navigation = true;
      		$("div.evmreviews_section").css('display', 'block');
	        if(json.slider_autoplay == 1) var autoPlay = true; else var autoPlay = false;
	        if (shop_add == "aemorph-ntb.myshopify.com") {
	        	$("#show_product_reviews").owlCarousel({
	           	items             : 2,
	           	itemsDesktop      : [1000,2],
	           	itemsDesktopSmall : [980,2],
	           	itemsTablet       : [768,2],
	           	itemsMobile       : [767,1],
	           	pagination        : true,
	           	paginationSpeed   : 1000,
	           	rewind            : true,
	           	navigation        : navigation,
	           	navigationText    : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	           	autoPlay          : autoPlay,
	           	pagination        : false,
	           	mouseDrag         : true,
	            touchDrag         : true
	          });
	        } else {
	          $("#show_product_reviews").owlCarousel({
	           	items             : 3,
	           	itemsDesktop      : [1000,3],
	           	itemsDesktopSmall : [980,3],
	           	itemsTablet       : [768,2],
	           	itemsMobile       : [767,1],
	           	pagination        : true,
	           	paginationSpeed   : 1000,
	           	rewind            : true,
	           	navigation        : navigation,
	           	navigationText    : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	           	autoPlay          : autoPlay,
	           	pagination        : false,
	           	mouseDrag         : true,
	            touchDrag         : true
	          });
	        }
        }

        // $(".first_write_rev_div").css("margin-top","0px");
        // $(".first_write_rev_div").css("margin-bottom","0px");
        $("#evm-prev-badge__text").append(total);
        // review_display_old   = review_display;
        // load_more_set_old    = load_more_set;
        // total_old            = total;
        // reviews_per_page_old = reviews_per_page;
        // load_more_set_old    = load_more_set;
        // review_form_title_font_color_old    = review_form_title_font_color;
        // review_form_title_bg_old    = review_form_title_bg;

        /* load more option */
        var loadMore = 'Load More';
        if (shop_add == "mypodsbluetooth2.myshopify.com") { loadMore = 'Voir plus'; }
        if(load_more_set != "0" && total>reviews_per_page) {
        	if (evm_star_load != '' && evm_param_load != '' && $('#show_product_reviews li').length == span_count) {} else {
	        	if (review_display == "grid" && $('#show_product_reviews li').length != total) {
	        		$('center').remove();

	        		$(".panels.pr_tabs_content").append("<center><div class='vpb_show_more_or_the_end' align='center'><span class='loadMore' data-offset='"+parseInt(parseInt(per_page_records.length) + parseInt(reviews_per_page)) +"' id='loadMore' style='border-color: #"+review_form_title_bg+"; background-color:#"+review_form_title_bg+";color:#"+review_form_title_font_color+";'>"+loadMore+"</span></div></center>");
	        	}
	        }
        }

      	if(review_display == "grid") {
        	$(function () {
        		$('.loadMore').on('click', function (e) {
        			e.preventDefault();

        			$(".loadMore").fadeOut('slow');
        			var offset_get_data = $(this).attr('data-offset');
        			if (evm_star_load != '' && evm_param_load != '') {
        				var evm_star_no = evm_star_load;
        				evm_param   = evm_param_load;
        			} else {
        				var evm_star_no = evm_star_load_short_by;
        				evm_param   = '';
        			}
        			ajax_data(shop_add, productId, evm_star_no, evm_param, offset_get_data, evm_all_rev);
        			if ( parseInt(offset_get_data + reviews_per_page) >= total) {
        				$(".loadMore").fadeOut('slow');
        			}
        		});
        	});
        }
        /* End load more option */

        if (flags==0) {							
        	if(review_display == "slider") {
          	if (position_arrows == "left") {
							$(".evm_owl_controls_slider").addClass('evm_arrows_bottom_left');
						} else if (position_arrows == "right") {
							$(".evm_owl_controls_slider").addClass('evm_arrows_bottom_right');
						} else if (position_arrows == "center") {
							$(".evm_owl_controls_slider").addClass('evm_arrows_bottom_center');
						} else if (position_arrows == "top_left") {
							$("#show_product_reviews .evmreviews_section").addClass('evm_arrows_top');
							$(".evm_owl_controls_slider").addClass('evm_arrows_top_left');
						} else if (position_arrows == "top_right") {
							$("#show_product_reviews .evmreviews_section").addClass('evm_arrows_top');
							$(".evm_owl_controls_slider").addClass('evm_arrows_top_right');
						} else if (position_arrows == "top_center") {
							$("#show_product_reviews .evmreviews_section").addClass('evm_arrows_top');
							$(".evm_owl_controls_slider").addClass('evm_arrows_top_center');
						}
					} else {
						if (no_of_columns_desk==2) $('#show_product_reviews').addClass('evm_grid_items2');
          	else if (no_of_columns_desk==3) $('#show_product_reviews').addClass('evm_grid_items3');
          	else if (no_of_columns_desk==4) $('#show_product_reviews').addClass('evm_grid_items4');
						else $('#show_product_reviews').addClass('evm_grid_items');
					}

        	owl_item_evm_width = $(".owl-item_evm").width();
          $("#total_data").html(total+ " " + review_text);
           if (typeof overall_rating!=="undefined" && typeof overall_rating_text_clr!=="undefined") {
            $(".evm-rev_title").html("<span id='evm-rev_title'>"+overall_rating+" "+starNumber+"</span>");
            $('#evm-rev_title').css({'color' : '#'+overall_rating_text_clr});
          } else {
            $(".evm-rev_title").html("<span id='evm-rev_title'> Overall Rating "+starNumber+"</span>");
            $('#evm-rev_title').css({'color' : '#'+overall_rating_text_clr});
          }
          $('.evm_star_base_filter').css({'color': '#'+review_star_icon});

          if($('#evmstars').length){
        		document.getElementById("evmstars").innerHTML = getStars(starNumber);
        		$("#evm_num_of_reviews").html(total+" " + review_text);
        		if(total === '1'){
        			$("#evm_num_of_reviews").html(total+" " + review_text);
        		}
        		$('div#starshow').css({"color":"#"+review_star_icon});
        		$('span#evmstars').css({"color":"#"+review_star_icon});
        		// $('#evm_reviews_widget').css({'width': '300px'});
          } 
					
					$(".reviewtitle_heading").css("text-align",position_rev_heading);
					$(".reviewtitle_heading").html(review_title_heading);
					$(".evm_pro_customNavigation a").remove();
					// if (total!='') {
					// 	$(".evm_pro_customNavigation").append("<a class='evm_pro_prev'><i class='fa fa-angle-left' aria-hidden='true'></i></a><a class='evm_pro_next'><i class='fa fa-angle-right' aria-hidden='true'></i></a>");
					// }

          var totalNoOfStar = parseInt(progress_container_star_5*5) + parseInt(progress_container_star_4*4) + parseInt(progress_container_star_3*3) + parseInt(progress_container_star_2*2)+ parseInt (progress_container_star_1);
          evm_star_pecent( 'progress_container_star_5', progress_container_star_5, totalNoOfStar, 5, 'evm_total_review_count_5' );
          evm_star_pecent( 'progress_container_star_4', progress_container_star_4, totalNoOfStar, 4, 'evm_total_review_count_4' );
          evm_star_pecent( 'progress_container_star_3', progress_container_star_3, totalNoOfStar, 3, 'evm_total_review_count_3' );
          evm_star_pecent( 'progress_container_star_2', progress_container_star_2, totalNoOfStar, 2, 'evm_total_review_count_2' );
          evm_star_pecent( 'progress_container_star_1', progress_container_star_1, totalNoOfStar, 1, 'evm_total_review_count_1' );
        }
 		  } else {
        $(".first_write_rev_div").html("<button id='firstreview' class='btn-evm-review leave' style='border-color: #"+review_form_title_bg+"; background-color:#"+review_form_title_bg+";color:#"+review_form_title_font_color+";'>"+ write_first_rev +"</button>");
    		$("#evm_num_of_reviews").html(write_first_rev);
    		// $('#evm_reviews_widget').css({'width': '167px', 'float' : 'right'});
    		$('.evm_star_base_filter').css({'color': '#'+review_star_icon});
    		$('.star_inner').css({'pointer-events': 'none'});
    		$("#total_data").html("0 " + review_text);
        $("#firstreview").click(function(){
          $("#review_new_form").slideToggle(1000);
        });
        $("#evmnoreviews").hide();
        var no_reviews = "No reviews yet";
          $("#starshow").hide();
          // $("#evm_summary_stars").html("<div class='rating-basic__star-rating -size-large h-ml1' id='starshow'><i class='evm_font evmfa-star-o'></i><i class='evm_font evmfa-star-o'></i><i class='evm_font evmfa-star-o'></i><i class='evm_font evmfa-star-o'></i><i class='evm_font evmfa-star-o'></i></div>");

          if (typeof overall_rating!=="undefined" && typeof overall_rating_text_clr!=="undefined") {
            $(".evm-rev_title").html("<span id='evm-rev_title'>"+overall_rating+" "+starNumber+"</span>");
            $('#evm-rev_title').css({'color' : '#'+overall_rating_text_clr});
          } else {
            $(".evm-rev_title").html("<span id='evm-rev_title'> Overall Rating "+starNumber+"</span>");
            $('#evm-rev_title').css({'color' : '#'+overall_rating_text_clr});
          }

          $(".reviewtitle_heading").css("text-align",position_rev_heading);
					$(".reviewtitle_heading").html(review_title_heading);
        }

		  } else {
		  	$("#expert_leave_review").hide();
		  }
		  flags = 1;

		  if(review_display == "slider") {
          	if (position_arrows == "left") {
							$(".evm_owl_controls_slider").addClass('evm_arrows_bottom_left');
						} else if (position_arrows == "right") {
							$(".evm_owl_controls_slider").addClass('evm_arrows_bottom_right');
						} else if (position_arrows == "center") {
							$(".evm_owl_controls_slider").addClass('evm_arrows_bottom_center');
						} else if (position_arrows == "top_left") {
							$("#show_product_reviews .evmreviews_section").addClass('evm_arrows_top');
							$(".evm_owl_controls_slider").addClass('evm_arrows_top_left');
						} else if (position_arrows == "top_right") {
							$("#show_product_reviews .evmreviews_section").addClass('evm_arrows_top');
							$(".evm_owl_controls_slider").addClass('evm_arrows_top_right');
						} else if (position_arrows == "top_center") {
							$("#show_product_reviews .evmreviews_section").addClass('evm_arrows_top');
							$(".evm_owl_controls_slider").addClass('evm_arrows_top_center');
						}
					}

					// /* =========== if admin test review view ================== */
					if (EvmPageURL !='' && atob(evmShop) == 'evm_reviews') {
						$('#evm_reviews_widget').trigger('click');
					}
					// /* ============================= */

	if (review_display=='grid' && total != '') {

		/*!
		 * imagesLoaded v3.0.2
		 * JavaScript is all like "You images are done yet or what?"
		 */

		( function( window ) {

		'use strict';

		var $ = window.jQuery;
		var console = window.console;
		var hasConsole = typeof console !== 'undefined';

		// -------------------------- helpers -------------------------- //

		// extend objects
		function extend( a, b ) {
		  for ( var prop in b ) {
		    a[ prop ] = b[ prop ];
		  }
		  return a;
		}

		var objToString = Object.prototype.toString;
		function isArray( obj ) {
		  return objToString.call( obj ) === '[object Array]';
		}

		// turn element or nodeList into an array
		function makeArray( obj ) {
		  var ary = [];
		  if ( isArray( obj ) ) {
		    // use object if already an array
		    ary = obj;
		  } else if ( typeof obj.length === 'number' ) {
		    // convert nodeList to array
		    for ( var i=0, len = obj.length; i < len; i++ ) {
		      ary.push( obj[i] );
		    }
		  } else {
		    // array of single index
		    ary.push( obj );
		  }
		  return ary;
		}

		// --------------------------  -------------------------- //

		function defineImagesLoaded( EventEmitter, eventie ) {

		  /**
		   * @param {Array, Element, NodeList, String} elem
		   * @param {Object or Function} options - if function, use as callback
		   * @param {Function} onAlways - callback function
		   */
		  function ImagesLoaded( elem, options, onAlways ) {
		    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
		    if ( !( this instanceof ImagesLoaded ) ) {
		      return new ImagesLoaded( elem, options );
		    }
		    // use elem as selector string
		    if ( typeof elem === 'string' ) {
		      elem = document.querySelectorAll( elem );
		    }

		    this.elements = makeArray( elem );
		    this.options = extend( {}, this.options );

		    if ( typeof options === 'function' ) {
		      onAlways = options;
		    } else {
		      extend( this.options, options );
		    }

		    if ( onAlways ) {
		      this.on( 'always', onAlways );
		    }

		    this.getImages();

		    if ( $ ) {
		      // add jQuery Deferred object
		      this.jqDeferred = new $.Deferred();
		    }

		    // HACK check async to allow time to bind listeners
		    var _this = this;
		    setTimeout( function() {
		      _this.check();
		    });
		  }

		  ImagesLoaded.prototype = new EventEmitter();

		  ImagesLoaded.prototype.options = {};

		  ImagesLoaded.prototype.getImages = function() {
		    this.images = [];

		    // filter & find items if we have an item selector
		    for ( var i=0, len = this.elements.length; i < len; i++ ) {
		      var elem = this.elements[i];
		      // filter siblings
		      if ( elem.nodeName === 'IMG' ) {
		        this.addImage( elem );
		      }
		      // find children
		      var childElems = elem.querySelectorAll('img');
		      // concat childElems to filterFound array
		      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
		        var img = childElems[j];
		        this.addImage( img );
		      }
		    }
		  };

		  /**
		   * @param {Image} img
		   */
		  ImagesLoaded.prototype.addImage = function( img ) {
		    var loadingImage = new LoadingImage( img );
		    this.images.push( loadingImage );
		  };

		  ImagesLoaded.prototype.check = function() {
		    var _this = this;
		    var checkedCount = 0;
		    var length = this.images.length;
		    this.hasAnyBroken = false;
		    // complete if no images
		    if ( !length ) {
		      this.complete();
		      return;
		    }

		    function onConfirm( image, message ) {
		      if ( _this.options.debug && hasConsole ) {
		        console.log( 'confirm', image, message );
		      }
		      _this.progress( image );
		      checkedCount++;
		      if ( checkedCount === length ) {
		        _this.complete();
		      }
		      return true; // bind once
		    }

		    for ( var i=0; i < length; i++ ) {
		      var loadingImage = this.images[i];
		      loadingImage.on( 'confirm', onConfirm );
		      loadingImage.check();
		    }
		  };

		  ImagesLoaded.prototype.progress = function( image ) {
		    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
		    this.emit( 'progress', this, image );
		    if ( this.jqDeferred ) {
		      this.jqDeferred.notify( this, image );
		    }
		  };

		  ImagesLoaded.prototype.complete = function() {
		    var eventName = this.hasAnyBroken ? 'fail' : 'done';
		    this.isComplete = true;
		    this.emit( eventName, this );
		    this.emit( 'always', this );
		    if ( this.jqDeferred ) {
		      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
		      this.jqDeferred[ jqMethod ]( this );
		    }
		  };

		  // -------------------------- jquery -------------------------- //

		  if ( $ ) {
		    $.fn.imagesLoaded = function( options, callback ) {
		      var instance = new ImagesLoaded( this, options, callback );
		      return instance.jqDeferred.promise( $(this) );
		    };
		  }


		  // --------------------------  -------------------------- //

		  var cache = {};

		  function LoadingImage( img ) {
		    this.img = img;
		  }

		  LoadingImage.prototype = new EventEmitter();

		  LoadingImage.prototype.check = function() {
		    // first check cached any previous images that have same src
		    var cached = cache[ this.img.src ];
		    if ( cached ) {
		      this.useCached( cached );
		      return;
		    }
		    // add this to cache
		    cache[ this.img.src ] = this;

		    // If complete is true and browser supports natural sizes,
		    // try to check for image status manually.
		    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
		      // report based on naturalWidth
		      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
		      return;
		    }

		    // If none of the checks above matched, simulate loading on detached element.
		    var proxyImage = this.proxyImage = new Image();
		    eventie.bind( proxyImage, 'load', this );
		    eventie.bind( proxyImage, 'error', this );
		    proxyImage.src = this.img.src;
		  };

		  LoadingImage.prototype.useCached = function( cached ) {
		    if ( cached.isConfirmed ) {
		      this.confirm( cached.isLoaded, 'cached was confirmed' );
		    } else {
		      var _this = this;
		      cached.on( 'confirm', function( image ) {
		        _this.confirm( image.isLoaded, 'cache emitted confirmed' );
		        return true; // bind once
		      });
		    }
		  };

		  LoadingImage.prototype.confirm = function( isLoaded, message ) {
		    this.isConfirmed = true;
		    this.isLoaded = isLoaded;
		    this.emit( 'confirm', this, message );
		  };

		  // trigger specified handler for event type
		  LoadingImage.prototype.handleEvent = function( event ) {
		    var method = 'on' + event.type;
		    if ( this[ method ] ) {
		      this[ method ]( event );
		    }
		  };

		  LoadingImage.prototype.onload = function() {
		    this.confirm( true, 'onload' );
		    this.unbindProxyEvents();
		  };

		  LoadingImage.prototype.onerror = function() {
		    this.confirm( false, 'onerror' );
		    this.unbindProxyEvents();
		  };

		  LoadingImage.prototype.unbindProxyEvents = function() {
		    eventie.unbind( this.proxyImage, 'load', this );
		    eventie.unbind( this.proxyImage, 'error', this );
		  };

		  // -----  ----- //

		  return ImagesLoaded;
		}

		// -------------------------- transport -------------------------- //

		if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( [
		      'eventEmitter',
		      'eventie'
		    ],
		    defineImagesLoaded );
		} else {
		  // browser global
		  window.imagesLoaded = defineImagesLoaded(
		    window.EventEmitter,
		    window.eventie
		  );
		}

		})( window );

		/*!
		 * classie - class helper functions
		 * from bonzo https://github.com/ded/bonzo
		 * 
		 * classie.has( elem, 'my-class' ) -> true/false
		 * classie.add( elem, 'my-new-class' )
		 * classie.remove( elem, 'my-unwanted-class' )
		 * classie.toggle( elem, 'my-class' )
		 */

		/*jshint browser: true, strict: true, undef: true */
		/*global define: false */

		( function( window ) {

		'use strict';

		// class helper functions from bonzo https://github.com/ded/bonzo

		function classReg( className ) {
		  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    elem.classList.add( c );
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  hasClass = function( elem, c ) {
		    return classReg( c ).test( elem.className );
		  };
		  addClass = function( elem, c ) {
		    if ( !hasClass( elem, c ) ) {
		      elem.className = elem.className + ' ' + c;
		    }
		  };
		  removeClass = function( elem, c ) {
		    elem.className = elem.className.replace( classReg( c ), ' ' );
		  };
		}

		function toggleClass( elem, c ) {
		  var fn = hasClass( elem, c ) ? removeClass : addClass;
		  fn( elem, c );
		}

		var classie = {
		  // full names
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass,
		  toggleClass: toggleClass,
		  // short names
		  has: hasClass,
		  add: addClass,
		  remove: removeClass,
		  toggle: toggleClass
		};

		// transport
		if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( classie );
		} else {
		  // browser global
		  window.classie = classie;
		}

		})( window );



		/**
		 * animOnScroll.js v1.0.0
		 * http://www.codrops.com
		 *
		 * Licensed under the MIT license.
		 * http://www.opensource.org/licenses/mit-license.php
		 * 
		 * Copyright 2013, Codrops
		 * http://www.codrops.com
		 */
		;( function( window ) {
			
			'use strict';
			
			var docElem = window.document.documentElement;

			function getViewportH() {
				var client = docElem['clientHeight'],
					inner = window['innerHeight'];
				
				if( client < inner )
					return inner;
				else
					return client;
			}

			function scrollY() {
				return window.pageYOffset || docElem.scrollTop;
			}

			// http://stackoverflow.com/a/5598797/989439
			function getOffset( el ) {
				var offsetTop = 0, offsetLeft = 0;
				do {
					if ( !isNaN( el.offsetTop ) ) {
						offsetTop += el.offsetTop;
					}
					if ( !isNaN( el.offsetLeft ) ) {
						offsetLeft += el.offsetLeft;
					}
				} while( el = el.offsetParent )

				return {
					top : offsetTop,
					left : offsetLeft
				}
			}

			function inViewport( el, h ) {
				var elH = el.offsetHeight,
					scrolled = scrollY(),
					viewed = scrolled + getViewportH(),
					elTop = getOffset(el).top,
					elBottom = elTop + elH,
					// if 0, the element is considered in the viewport as soon as it enters.
					// if 1, the element is considered in the viewport only when it's fully inside
					// value in percentage (1 >= h >= 0)
					h = h || 0;

				return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
			}

			function extend( a, b ) {
				for( var key in b ) { 
					if( b.hasOwnProperty( key ) ) {
						a[key] = b[key];
					}
				}
				return a;
			}

			function AnimOnScroll( el, options ) {	
				this.el = el;
				this.options = extend( this.defaults, options );
				this._init();
			}

			AnimOnScroll.prototype = {
				defaults : {
					// Minimum and a maximum duration of the animation (random value is chosen)
					minDuration : 0,
					maxDuration : 0,
					// The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
					// if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport. 
					// If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
					viewportFactor : 0
				},
				_init : function() {
					this.items = Array.prototype.slice.call( document.querySelectorAll( '#' + this.el.id + ' > li' ) );
					this.itemsCount = this.items.length;
					this.itemsRenderedCount = 0;
					this.didScroll = false;

					var self = this;

					imagesLoaded( this.el, function() {
						
						// initialize masonry
						new Masonry( self.el, {
							itemSelector: 'li',
							transitionDuration : 0
						} );
						
						if( Modernizr.cssanimations ) {
							// the items already shown...
							self.items.forEach( function( el, i ) {
								if( inViewport( el ) ) {
									self._checkTotalRendered();
									classie.add( el, 'shown' );
								}
							} );

							// animate on scroll the items inside the viewport
							window.addEventListener( 'scroll', function() {
								self._onScrollFn();
							}, false );
							window.addEventListener( 'resize', function() {
								self._resizeHandler();
							}, false );
						}

					});
				},
				_onScrollFn : function() {
					var self = this;
					if( !this.didScroll ) {
						this.didScroll = true;
						setTimeout( function() { self._scrollPage(); }, 60 );
					}
				},
				_scrollPage : function() {
					var self = this;
					this.items.forEach( function( el, i ) {
						if( !classie.has( el, 'shown' ) && !classie.has( el, 'animate' ) && inViewport( el, self.options.viewportFactor ) ) {
							setTimeout( function() {
								var perspY = scrollY() + getViewportH() / 2;
								self.el.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
								self.el.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
								self.el.style.perspectiveOrigin = '50% ' + perspY + 'px';

								self._checkTotalRendered();

								if( self.options.minDuration && self.options.maxDuration ) {
									var randDuration = ( Math.random() * ( self.options.maxDuration - self.options.minDuration ) + self.options.minDuration ) + 's';
									el.style.WebkitAnimationDuration = randDuration;
									el.style.MozAnimationDuration = randDuration;
									el.style.animationDuration = randDuration;
								}
								
								classie.add( el, 'animate' );
							}, 25 );
						}
					});
					this.didScroll = false;
				},
				_resizeHandler : function() {
					var self = this;
					function delayed() {
						self._scrollPage();
						self.resizeTimeout = null;
					}
					if ( this.resizeTimeout ) {
						clearTimeout( this.resizeTimeout );
					}
					this.resizeTimeout = setTimeout( delayed, 1000 );
				},
				_checkTotalRendered : function() {
					++this.itemsRenderedCount;
					if( this.itemsRenderedCount === this.itemsCount ) {
						window.removeEventListener( 'scroll', this._onScrollFn );
					}
				}
			}

			// add to global namespace
			window.AnimOnScroll = AnimOnScroll;

		} )( window );

		/* ====================== */
		new AnimOnScroll( document.getElementById( 'show_product_reviews' ), {
			minDuration : 0.4,
			maxDuration : 0.7,
			viewportFactor : 0.2
		} );
      }
		}
	});
}

var ratings = 5;
$('input[name=ratings]').on('click', function() {
	ratings = $(this).val();
	$('input[name=ratings]').each(function(i,v){
		var lbl_id = i+1;
		if (ratings >= $(this).val()) {
			$("#evm_lbl_"+lbl_id).css("color", "#ffc400");
		} else{
			$("#evm_lbl_"+lbl_id).css("color", "#ddd");
		}
	});
})


$("#review_form").on("submit",function(e){
  e.preventDefault();
  e.stopPropagation();
  console.log('review submitted');
  $("#submit_review").attr('disabled', true);
  $("#submit_review").css('opacity', '0.7');
  var client_name        = $("#client_name").val();
  var client_email       = $("#client_email").val(); 
  var shop_domain        = $("#shop_domain").val();
  var review_title       = $("#review_title").val(); 
  var review_description = $("#review_description").val();  
  var client_pic         = $("#client_pic").val();
  if(client_name == '' || client_email == '' || review_description == '' || ratings == 0){
    $("#client_name").css('border-color','#C0363A'); 
    $("#client_email").css('border-color','#C0363A');
    $("#review_description").css('border-color','#C0363A'); 
    // $(".fieldset_rating").css('border','1px solid #c0363a');
    $("#submit_review").attr('disabled', false);
    $("#submit_review").css('opacity', '');
  }else{
    $('#evmLoadingDiv').show();
    $('#submit_review').html("<i class='evm_font fa-spinner fa-pulse fa-3x fa-fw' style='font-size:36px;'></i>");
    $.ajax({
      url: main_url+"frontend/review/review_submit",
      type: "POST",
      data: new FormData($('#review_form')[0]),
      contentType: false,
      cache: false,
      processData:false,
      crossDomain: true,
      dataType: 'html',
      async: false, 
      success: function(res) {
        var obj = $.parseJSON(res);
        if (obj.success=='success') {
          $('html, body').animate({ scrollTop: $('div.evm-rev_header').offset().top}, 500);
          $('#review_form')[0].reset();
          $('#client_pic').val('');
          $('#evmnoFile').text('');
          $("#submit_review").html("Submit Review");
          $("#submit_review").css('opacity', '');
          $("#submit_review").attr('disabled', false);
          $('#evm-review-loading').hide();
          $("#review_new_form").hide();
          $("#evm-review-show_msg").html("<div id='evm-review-notification' class='evm-review-notification'></div>");
          $('#evm-review-notification').html("<h4  style='font-weight: normal; margin: 50px 0 0; color: black; border-radius: 4px; padding: 15px 0; background: rgba(0, 0, 0, 0.03137254901960784);'>"+obj.msg+"</h4>");
          $("#evm-review-notification").fadeOut(6000);
          $("#client_name").css('border-color','#ccc'); 
          $("#client_email").css('border-color','#ccc');
          $("#review_description").css('border-color','#ccc');          
          // $(".fieldset_rating > label").css('border-color','#ccc');
        }
        $('#evmLoadingDiv').hide();
      }
    });
  }
});

/* questionsAnswers */
$("#questionsAnswers").on("submit",function(e) {
	e.preventDefault();
  var u_name       = $("#u_name").val();
  var u_email      = $("#u_email").val(); 
  var u_question   = $("#u_question").val();
  var product_id   = $("#product_id").val();
  var product_name = $("#product_name").val();
  if (u_name == '' || u_email == '' || u_question == '') {
  	$("#u_name").css('border-color','#C0363A');
  	$("#u_email").css('border-color','#C0363A');
  	$("#u_question").css('border-color','#C0363A');
  	return false;
  }
  $.ajax({
  	url: main_url+"frontend/review/questionsAnswers",
  	type: "POST",
  	data: { shop_address : shop_add, u_name : u_name, u_email : u_email, u_question : u_question, product_id : product_id, product_name : product_name },
  	success: function(res) {
  		var obj = $.parseJSON(res);
  		if (obj.success=='success') {
  			$('#questionsAnswers')[0].reset();
  			$("#questionsAnswers input").css('border-color','#ccc');
  			$('#evm_success').text(obj.msg);
  			$('#evm_success').show();
  			setTimeout(function() { $('#evm_success').hide(); $('#evm_tab_ques_ans').hide('slow'); }, 3000);  		}
  	}
  });
});
/* end questionsAnswers */
if(typeof Shopify.Checkout!="undefined" && (Shopify.Checkout.page=="thank_you" || Shopify.Checkout.page=="checkout_one_thank_you")) {
	var order_name = document.getElementsByClassName("os-order-number")[0].innerHTML; 
	// var product_name = document.getElementsByClassName("product__description__name order-summary__emphasis")[0].innerHTML;
	var clientemail  = Shopify.checkout.email;
	var order_id     = Shopify.checkout.order_id;
	if (Shopify.checkout.shipping_address != null) {
		var shipping_address_firstname = Shopify.checkout.shipping_address.first_name;
	}	else {
		var shipping_address_firstname = Shopify.checkout.billing_address.first_name;
	}
	if (shipping_address_firstname == '') shipping_address_firstname = Shopify.checkout.shipping_address.last_name;
	
	var productid = '';
	$.each( Shopify.checkout.line_items, function( index, value ){
		if ((Shopify.checkout.line_items.length - 1) != index) {
		 	productid += value.product_id+ ',';
		} else {
		 	productid += value.product_id;			
		}
	});
	function email_sendto_customer(){
		var finalData = { shop_add : shop_add, shop_domain : window.location.hostname, Product_id : productid, Client_email : clientemail, Client_name : shipping_address_firstname, order_name : order_name, order_id : order_id };
		var frontendurls =   main_url+"frontend/review/email_sendto_customer";
		$.ajax({
			url      : frontendurls,
			data     : finalData,
			dataType : "jsonp",
			jsonp    : "evmcallback",
			success:function(data){}
		});
	}
	email_sendto_customer()
}


function evm_img_modal(evmMyImg) {
  var modal = document.getElementById("evmMyModalImg");
  var modalImg = document.getElementById("evm_show_img_Modal");
    modal.style.display = "block";
    modalImg.src = evmMyImg;
  var span = document.getElementsByClassName("evm_modal_close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }
}
function evm_star_pecent(progress_container_star__all, progress_container_star_count, totalNoOfStar, star_no, evm_ttl_class='') {
  var percent_total = (((progress_container_star_count/totalNoOfStar)*100) * star_no);
  $("."+progress_container_star__all).css("width", percent_total+"%");
  $("."+evm_ttl_class).text('('+progress_container_star_count+')');
  if (progress_container_star_count<=0) {
  	$("."+progress_container_star__all).parent().parent().css('pointer-events', 'none');
  }
}

jQuery(document).ready(function($) {
	$('#client_pic').bind('change', function () {
		var filename = $("#client_pic").val();
		if (/^\s*$/.test(filename)) {
			$(".evm-file-upload").removeClass('active');
			$("#evmnoFile").text("No file chosen..."); 
		} else {
			$(".evm-file-upload").addClass('active');
			$("#evmnoFile").text(filename.replace("C:\\fakepath\\", "")); 
		}
	});

	/* evm_like_reviews */
	$(document).on('click', '.evm_like_reviews', function(e) {
		e.preventDefault();
		var data_like_count = $(this).attr('data-like-count');
		var split_data  = data_like_count.split(',');
	
		var getDataCookie = "; " + document.cookie;
	  var evm_parts = getDataCookie.split("; " + '_like_dislike_value_'+atob(split_data[1]) + "=");
	  var arr_val = evm_parts.pop().split(";").shift();
	  var l_d_val = arr_val.split(",");
	  if (l_d_val == '') {
	  	var condition = 1;
 		  if (split_data[2] == 'like' ) $('.like.'+atob(split_data[1])).css({"pointer-events" : "none", "color" : "#83B6DD"}); else $('.dislike.'+atob(split_data[1])).css({"pointer-events" : "none", "color" : "#83B6DD"});
  	} else {
  		var condition = 0;
 		  if (split_data[2] == 'like' ) {
 		  	$('.like.'+atob(split_data[1])).css({"pointer-events" : "none", "color" : "#83B6DD"});
 		  	$('.dislike.'+atob(split_data[1])).css({"pointer-events" : "", "color" : ""});
 		  } else {
 		  	$('.dislike.'+atob(split_data[1])).css({"pointer-events" : "none", "color" : "#83B6DD"});
 		  	$('.like.'+atob(split_data[1])).css({"pointer-events" : "", "color" : ""});
 		  }
  	}
	  if (split_data[1] != '') {
			var final_data  = { condition : condition, shop_address : Shopify.shop, key : btoa(split_data[2]), r_id : split_data[1], like_value : btoa(split_data[0]) };
	  	var d = new Date();
		  d.setTime(d.getTime() + (30* 24 * 60 * 60 * 1000));
		  var expires = "expires=" + d.toUTCString();
		  var c_key = '_like_dislike_value_'+atob(split_data[1]);
		  document.cookie =  c_key + "=" + data_like_count + ";" + expires + ";path=/";
			$.ajax({
	      url: main_url+"frontend/review/evm_like_dislike",
	      type: "POST",
	      data: final_data,
	      success: function(res) {
	      	var obj_res = JSON.parse(res);
	      	$('.like_count_'+atob(split_data[1])).text(obj_res.total_like);
	      	$('.dislike_count_'+atob(split_data[1])).text(obj_res.total_dislike);
	      }
	    });
	  }
	});
});
}