window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return"pfx"==b?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.inputtypes=function(a){for(var e,f,h,d=0,i=a.length;i>d;d++)k.setAttribute("type",f=a[d]),e="text"!==k.type,e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&"textfield"!==h.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,g.removeChild(k)):/^(search|tel)$/.test(f)||(e=/^(url|email)$/.test(f)?k.checkValidity&&k.checkValidity()===!1:k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var x,A,d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",n=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},v=[],w=v.slice,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z={}.hasOwnProperty;A=D(z,"undefined")||D(z.call,"undefined")?function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")}:function(a,b){return z.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if("function"!=typeof c)throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return H("flexWrap")},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},s.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};for(var J in s)A(s,J)&&(x=J.toLowerCase(),e[x]=s[J](),v.push((e[x]?"":"no-")+x));return e.input||I(),e.addTest=function(a,b){if("object"==typeof a)for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{if(a=a.toLowerCase(),e[a]!==c)return e;b="function"==typeof b?b():b,"undefined"!=typeof f&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),!function(a,b,c){"use strict";function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(){var b;T=!1,W=a.devicePixelRatio,U={},V={},b=(W||1)*D.xQuant,D.uT||(D.maxX=Math.max(1.3,D.maxX),b=Math.min(b,D.maxX),v.DPR=b),X.width=Math.max(a.innerWidth||0,B.clientWidth),X.height=Math.max(a.innerHeight||0,B.clientHeight),X.vw=X.width/100,X.vh=X.height/100,X.em=v.getEmValue(),X.rem=X.em,p=D.lazyFactor/2,p=p*b+p,r=.1*b,m=.5+.2*b,n=.5+.25*b,q=b+1.3,(o=X.width>X.height)||(p*=.9),J&&(p*=.9)}function f(a,b,c){var d=b*Math.pow(a,2);return o||(d/=1.3),a+=d,a>c}function g(a){if(!a.getBoundingClientRect)return!0;var b,c,d,e,f=a.getBoundingClientRect();return!!((b=f.bottom)>=-9&&(e=f.top)<=X.height+9&&(c=f.right)>=-9&&(d=f.left)<=X.height+9&&(b||c||d||e))}function h(a){var b,c=v.getSet(a),d=!1;"pending"!=c&&(d=!0,c&&(b=v.setRes(c),d=v.applySetCandidate(b,a))),a[v.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[v.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=v.makeUrl(b),a[v.ns].curSrc=b,a[v.ns].curCan=d,d.res||cb(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=v.parseSet(b),a=v.makeUrl(a),c=0;c<e.length;c++)if(a==v.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[v.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}b.createElement("picture");var m,n,o,p,q,r,s,t,u,v={},w=function(){},x=b.createElement("img"),y=x.getAttribute,z=x.setAttribute,A=x.removeAttribute,B=b.documentElement,C={},D={xQuant:1,lazyFactor:.4,maxX:2},E="data-risrc",F=E+"set",G="webkitBackfaceVisibility"in B.style,H=navigator.userAgent,I=/AppleWebKit/i.test(H),J=/rident/.test(H)||/ecko/.test(H)&&H.match(/rv\:(\d+)/)&&RegExp.$1>35,K=0,L="currentSrc",M=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,O=/^([\+eE\d\.]+)(w|x)$/,P=/\s*\d+h\s*/,Q=a.respimgCFG,R=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),S="font-size:100%!important;",T=!0,U={},V={},W=a.devicePixelRatio,X={px:1,"in":96},Y=b.createElement("a"),Z=!1,$=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},_=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d||!1):a.detachEvent&&a.detachEvent("on"+b,c)},ab=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},bb=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=ab(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(b,d){var e;if(!(b in U))if(U[b]=!1,d&&(e=b.match(a)))U[b]=e[1]*X[e[2]];else try{U[b]=new Function("e",c(b))(X)}catch(f){}return U[b]}}(),cb=function(a,b){return a.w?(a.cWidth=v.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.x,a},db=function(a){var c,d,e,f=a||{};if(f.elements&&1==f.elements.nodeType&&("IMG"==f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||v.qsa(f.context||b,f.reevaluate||f.reparse?v.sel:v.selShort),e=c.length){for(v.setupRun(f),Z=!0,d=0;e>d;d++)K++,6>K&&!c[d].complete&&K++,v.fillImg(c[d],f);v.teardownRun(f),K++}},eb=function(){var a=function(){_(this,"load",a),_(this,"error",a),v.fillImgs({elements:[this]})};return function(b){_(b,"load",a),_(b,"error",a),$(b,"error",a),$(b,"load",a)}}(),fb=ab(function(a){var b=[1,"x"],c=d(a||"");return c&&(c=c.replace(P,""),b=c.match(O)?[1*RegExp.$1,RegExp.$2]:!1),b});L in x||(L="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("ri"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=D,v.supSrcset&&(v.sel+=",img["+F+"]"),v.DPR=W||1,v.u=X,v.types=C,t=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=ab(function(a){return Y.href=a,Y.href}),v.qsa=function(a,b){return a.querySelectorAll(b)},v.matchesMedia=function(){return v.matchesMedia=a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(a){return!a||matchMedia(a).matches}:v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(a){return a?bb(a):!0},v.calcLength=function(a){var b=bb(a,!0)||!1;return 0>b&&(b=!1),b},v.supportsType=function(a){return a?C[a]:!0},v.parseSize=ab(function(a){var b=(a||"").match(N);return{media:b&&b[1],length:b&&b[2]}}),v.parseSet=function(a){if(!a.cands){var b,c,d,e,f,g,h=a.srcset;for(a.cands=[];h;)h=h.replace(/^\s+/g,""),b=h.search(/\s/g),d=null,-1!=b?(c=h.slice(0,b),e=c.charAt(c.length-1),","!=e&&c||(c=c.replace(/,+$/,""),d=""),h=h.slice(b+1),null==d&&(f=h.indexOf(","),-1!=f?(d=h.slice(0,f),h=h.slice(f+1)):(d=h,h=""))):(c=h,h=""),c&&(d=fb(d))&&(g={url:c.replace(/^,+/,""),set:a},g[d[1]]=d[0],"x"==d[1]&&1==d[0]&&(a.has1x=!0),a.cands.push(g))}return a.cands},v.getEmValue=function(){var a;if(!s&&(a=b.body)){var c=b.createElement("div"),d=B.style.cssText,e=a.style.cssText;c.style.cssText=R,B.style.cssText=S,a.style.cssText=S,a.appendChild(c),s=c.offsetWidth,a.removeChild(c),s=parseFloat(s,10),B.style.cssText=d,a.style.cssText=e}return s||16},v.calcListLength=function(a){if(!(a in V)||D.uT){var b,c,e,f,g,h,i=d(a).split(/\s*,\s*/),j=!1;for(g=0,h=i.length;h>g&&(b=i[g],c=v.parseSize(b),e=c.length,f=c.media,!e||!v.matchesMedia(f)||(j=v.calcLength(e))===!1);g++);V[a]=j?j:X.width}return V[a]},v.setRes=function(a){var b;if(a){b=v.parseSet(a);for(var c=0,d=b.length;d>c;c++)cb(b[c],a.sizes)}return b},v.setRes.res=cb,v.applySetCandidate=function(a,b){if(a.length){var c,d,e,h,k,l,o,s,t,u,w,x,z,A=b[v.ns],B=!0,C=p,D=r;if(s=A.curSrc||b[L],t=A.curCan||j(b,s,a[0].set),d=v.DPR,z=t&&t.res,!o&&s&&(x=J&&!b.complete&&t&&z>d,x||t&&!(q>z)||(t&&d>z&&z>m&&(n>z&&(C*=.87,D+=.04*d),t.res+=C*Math.pow(z-D,2)),u=!A.pic||t&&t.set==a[0].set,t&&u&&t.res>=d?o=t:I||b.complete||!y.call(b,"src")||b.lazyload||J&&!(4>K)||!u&&g(b)||(o=t,w=s,B="L",eb(b)))),!o)for(z&&(t.res=t.res-(t.res-z)/2),a.sort(i),l=a.length,o=a[l-1],e=0;l>e;e++)if(c=a[e],c.res>=d){h=e-1,o=a[h]&&(k=c.res-d)&&(x||s!=v.makeUrl(c.url))&&f(a[h].res,k,d)?a[h]:c;break}return z&&(t.res=z),o&&(w=v.makeUrl(o.url),A.curSrc=w,A.curCan=o,w!=s&&v.setSrc(b,o),v.setSize(b)),B}},v.setSrc=function(a,b){var c;a.src=b.url,G&&(c=a.style.zoom,a.style.zoom="0.999",a.style.zoom=c)},v.getSet=function(a){var b,c,d,e=!1,f=a[v.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&v.matchesMedia(c.media)&&(d=v.supportsType(c.type))){"pending"==d&&(c=d),e=c;break}return e},v.parseSets=function(a,b,d){var e,f,g,h,i="PICTURE"==b.nodeName.toUpperCase(),j=a[v.ns];(j.src===c||d.src)&&(j.src=y.call(a,"src"),j.src?z.call(a,E,j.src):A.call(a,E)),(j.srcset===c||!v.supSrcset||a.srcset||d.srcset)&&(e=y.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:y.call(a,"sizes")},j.sets.push(f),g=(t||j.src)&&M.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,x:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!v.supSrcset||g),h&&v.supSrcset&&!j.supported&&(e?(z.call(a,F,e),a.srcset=""):A.call(a,F)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!=v.makeUrl(j.src))&&(null==j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},v.fillImg=function(a,b){var c,d,e=b.reparse||b.reevaluate;if(a[v.ns]||(a[v.ns]={}),d=a[v.ns],"L"==d.evaled&&a.complete&&(d.evaled=!1),e||!d.evaled){if(!d.parsed||b.reparse){if(c=a.parentNode,!c)return;v.parseSets(a,c,b)}d.supported?d.evaled=!0:h(a)}},v.setupRun=function(a){(!Z||a.reevaluate||T)&&(e(),a.elements||a.context||clearTimeout(u))},a.HTMLPictureElement?(db=w,v.fillImg=w):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";h=setTimeout(e,"loading"==a?200:999),b.body&&(c=c||d.test(a),v.fillImgs(),c&&(K+=6,clearTimeout(h)))},f=function(){v.fillImgs({reevaluate:!0})},g=function(){clearTimeout(u),T=!0,u=setTimeout(f,99)},h=setTimeout(e,b.body?9:99);$(a,"resize",g),$(b,"readystatechange",e)}(),v.respimage=db,v.fillImgs=db,v.teardownRun=w,db._=v,a.respimage=db,a.respimgCFG={ri:v,push:function(a){var b=a.shift();"function"==typeof v[b]?v[b].apply(v,a):(D[b]=a[0],Z&&v.fillImgs({reevaluate:!0}))}};for(;Q&&Q.length;)a.respimgCFG.push(Q.shift())}(window,document),!function(a,b){a.lazySizes=b(a,a.document),"function"==typeof define&&define.amd&&define(a.lazySizes)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},h=function(a,b){g(a,b)||(a.className+=" "+b)},i=function(a,b){var c;(c=g(a,b))&&(a.className=a.className.replace(c," "))},j=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&j(a,b),f.forEach(function(c){a[d](c,b)})},k=function(a,c,d){var e=b.createEvent("Event");return e.initEvent(c,!0,!0),e.details=d||{},a.dispatchEvent(e),e},l=function(b,c){var d,e;a.HTMLPictureElement||(a.picturefill?picturefill({reevaluate:!0,reparse:!0,elements:[b]}):a.respimage?(c&&(e=c.srcset&&"srcset"||c.src&&"src")&&(d=b[respimage._.ns],d&&d[e]!=c[e]&&b.getAttribute(e)==c[e]&&(d[e]=void 0)),respimage({reparse:!0,elements:[b]})):c&&c.src&&(b.src=c.src))},m=function(a,b){return getComputedStyle(a,null)[b]},n=function(a,d){for(var e=a.offsetWidth;e<c.minSize&&d&&d!=b.body&&!a._lazysizesWidth;)e=d.offsetWidth,d=d.parentNode;return e},o=function(a){var c,d,e=function(){c&&(c=!1,a())},f=function(){clearInterval(d),b.hidden||(e(),d=setInterval(e,66))};return b.addEventListener("visibilitychange",f),f(),function(a){c=!0,a===!0&&e()}},p=function(){var f,n,p,r,s,t,u,v,w,x,y,z,A=navigator.userAgent,B=a.HTMLPictureElement&&A.match(/hrome\/(\d+)/)&&40==RegExp.$1,C=/webkit/i.test(A),D=/^img$/i,E=/^iframe$/i,F=-2,G=F,H=F,I=F,J=!0,K=0,L=0,M=0,N=function(a){L--,a&&a.target&&j(a.target,N),(!a||0>L||!a.target)&&(L=0)},O=function(a,c){var e,f=a,g="hidden"!=m(a,"visibility");for(w-=c,z+=c,x-=c,y+=c;g&&(f=f.offsetParent)&&f!=d&&f!=b.body;)g=r&&4>L||(m(f,"opacity")||1)>0,g&&"visible"!=m(f,"overflow")&&(e=f.getBoundingClientRect(),g=y>e.left-1&&x<e.right+1&&z>e.top-1&&w<e.bottom+1);return g},P=function(){var a,b,d,e,g,h,i,j=f.length,k=Date.now(),l=M;if(J||U(),j){for(;j>l&&f[l];l++,M++)if((h=f[l].getAttribute("data-expand"))&&(e=1*h)||(e=I),!(L>6&&(!h||"src"in f[l])))if(L>3&&e>F&&(e=F),i!==e&&(u=innerWidth+e,v=innerHeight+e,g=-1*e,i=e),a=f[l].getBoundingClientRect(),(z=a.bottom)>=g&&(w=a.top)<=v&&(y=a.right)>=g&&(x=a.left)<=u&&(z||y||x||w)&&(r&&I==G&&3>L&&4>K&&!h||O(f[l],e)))M--,k+=2,T(f[l]),d=!0;else{if(!t&&Date.now()-k>3)return M++,t=!0,void Q();!d&&r&&!b&&3>L&&4>K&&(n[0]||c.preloadAfterLoad)&&(n[0]||!h&&(z||y||x||w||"auto"!=f[l].getAttribute(c.sizesAttr)))&&(b=n[0]||f[l])}M=0,t=!1,K++,H>I&&2>L&&K>4?(I=H,K=0,Q()):I!=G&&(I=G),b&&!d&&T(b)}},Q=o(P),R=function(a){h(a.target,c.loadedClass),i(a.target,c.loadingClass),j(a.target,R)},S=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},T=function(a,b){var d,f,m,n,o,p,t,u,v,w,x,y=a.currentSrc||a.src,z=D.test(a.nodeName),A=a.getAttribute(c.sizesAttr)||a.getAttribute("sizes"),F="auto"==A;if(!F&&(C||r)||!z||!y||a.complete||g(a,c.errorClass)){if(!(v=k(a,"lazybeforeunveil",{force:!!b})).defaultPrevented){if(A&&(F?q.updateElem(a,!0):a.setAttribute("sizes",A)),p=a.getAttribute(c.srcsetAttr),o=a.getAttribute(c.srcAttr),z&&(t=a.parentNode,u=e.test(t.nodeName||"")),w=v.details.firesLoad||"src"in a&&(p||o||u),w&&(L++,j(a,N,!0),clearTimeout(s),s=setTimeout(N,3e3)),u)for(d=t.getElementsByTagName("source"),f=0,m=d.length;m>f;f++)(x=c.customMedia[d[f].getAttribute("media")])&&d[f].setAttribute("media",x),n=d[f].getAttribute(c.srcsetAttr),n&&d[f].setAttribute("srcset",n);p?(a.setAttribute("srcset",p),B&&A&&a.removeAttribute("src")):o&&(E.test(a.nodeName)?S(a,o):a.setAttribute("src",o)),c.addClasses&&(h(a,c.loadingClass),j(a,R,!0))}setTimeout(function(){"auto"==A&&h(a,c.autosizesClass),(p||u)&&l(a,{srcset:p,src:o}),i(a,c.lazyClass),(!w||a.complete&&y==(a.currentSrc||a.src))&&(w&&N(v),c.addClasses&&R(v)),a=null})}},U=function(){p&&!J&&(G=Math.max(Math.min(c.expand||c.threshold||120,300),9),H=4*G),J=!0},V=function(){p=!0,J=!1},W=function(){r=!0,V(),Q(!0)},X=function(){f=b.getElementsByClassName(c.lazyClass),n=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),c.scroll&&addEventListener("scroll",Q,!0),addEventListener("resize",function(){J=!1,Q()}),a.MutationObserver?new MutationObserver(Q).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",Q,!0),d.addEventListener("DOMAttrModified",Q,!0)),addEventListener("hashchange",Q,!0),["transitionstart","transitionend","load","focus","mouseover","animationend","click"].forEach(function(a){b.addEventListener(a,Q,!0)}),(r=/d$|^c/.test(b.readyState))||(addEventListener("load",W),b.addEventListener("DOMContentLoaded",Q)),setTimeout(V,666),Q()};return{init:X,checkElems:Q,unveil:T}}(),q=function(){var a,d=function(a,b){var c,d,f,g,h,i=a.parentNode;if(i&&(c=n(a,i),h=k(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!h.defaultPrevented&&(c=h.details.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),e.test(i.nodeName||""))for(d=i.getElementsByTagName("source"),f=0,g=d.length;g>f;f++)d[f].setAttribute("sizes",c);h.details.dataAttr||l(a,h.details)}},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},g=o(f),h=function(){a=b.getElementsByClassName(c.autosizesClass),addEventListener("resize",g)};return{init:h,checkElems:g,updateElem:d}}(),r=function(){r.i||(r.i=!0,q.init(),p.init())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",scroll:!0,autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",addClasses:!0,minSize:50,customMedia:{},init:!0};c=a.lazySizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,d.init&&setTimeout(r)}(),{cfg:c,autoSizer:q,loader:p,init:r,updateAllSizes:q.updateElems,updateAllLazy:p.checkElems,unveilLazy:p.unveil,uS:q.updateElem,uP:l,aC:h,rC:i,hC:g,fire:k,gW:n}}});