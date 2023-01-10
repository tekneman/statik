"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,function(e){function g(e){return null==e?window:"[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e}function y(e){return e instanceof g(e).Element||e instanceof Element}function b(e){return e instanceof g(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof g(e).ShadowRoot||e instanceof ShadowRoot)}function v(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;return b(e)&&t&&(o=n.width/e.offsetWidth||1,r=n.height/e.offsetHeight||1),{width:a(n.width/o),height:a(n.height/r),top:a(n.top/r),right:a(n.right/o),bottom:a(n.bottom/r),left:a(n.left/o),x:a(n.left/o),y:a(n.top/r)}}function u(e){return{scrollLeft:(e=g(e)).pageXOffset,scrollTop:e.pageYOffset}}function w(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return((y(e)?e.ownerDocument:e.document)||window.document).documentElement}function m(e){return v(x(e)).left+u(e).scrollLeft}function O(e){return g(e).getComputedStyle(e)}function h(e){return e=O(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function E(e){var t=v(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function S(e){return"html"===w(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||x(e)}function A(e,t){var n;void 0===t&&(t=[]);var o=function e(t){return 0<=["html","body","#document"].indexOf(w(t))?t.ownerDocument.body:b(t)&&h(t)?t:e(S(t))}(e);return e=o===(null==(n=e.ownerDocument)?void 0:n.body),n=g(o),o=e?[n].concat(n.visualViewport||[],h(o)?o:[]):o,t=t.concat(o),e?t:t.concat(A(S(o)))}function r(e){return b(e)&&"fixed"!==O(e).position?e.offsetParent:null}function L(e){for(var t=g(e),n=r(e);n&&0<=["table","td","th"].indexOf(w(n))&&"static"===O(n).position;)n=r(n);if(n&&("html"===w(n)||"body"===w(n)&&"static"===O(n).position))return t;if(!n)e:{if(n=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),-1===navigator.userAgent.indexOf("Trident")||!b(e)||"fixed"!==O(e).position)for(e=S(e);b(e)&&["html","body"].indexOf(w(e))<0;){var o=O(e);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||n&&"filter"===o.willChange||n&&o.filter&&"none"!==o.filter){n=e;break e}e=e.parentNode}n=null}return n||t}function k(e){var n=new Map,o=new Set,r=[];return e.forEach(function(e){n.set(e.name,e)}),e.forEach(function(e){o.has(e.name)||function t(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){o.has(e)||(e=n.get(e))&&t(e)}),r.push(e)}(e)}),r}function j(e){return e.split("-")[0]}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n))do{if(t&&e.isSameNode(t))return!0}while(t=t.parentNode||t.host);return!1}function B(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function D(e,t){var n,o,r,i;return"viewport"===t?(t=g(e),o=x(e),t=t.visualViewport,n=o.clientWidth,o=o.clientHeight,i=r=0,t&&(n=t.width,o=t.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=t.offsetLeft,i=t.offsetTop)),e=B(e={width:n,height:o,x:r+m(e),y:i})):b(t)?((e=v(t)).top+=t.clientTop,e.left+=t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top):(i=x(e),e=x(i),n=u(i),t=null==(o=i.ownerDocument)?void 0:o.body,o=F(e.scrollWidth,e.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),r=F(e.scrollHeight,e.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),i=-n.scrollLeft+m(i),n=-n.scrollTop,"rtl"===O(t||e).direction&&(i+=F(e.clientWidth,t?t.clientWidth:0)-o),e=B({width:o,height:r,x:i,y:n})),e}function I(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function C(e){var t=e.reference,n=e.element,o=(e=e.placement)?j(e):null;e=e?e.split("-")[1]:null;var r=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(o){case"top":r={x:r,y:t.y-n.height};break;case"bottom":r={x:r,y:t.y+t.height};break;case"right":r={x:t.x+t.width,y:i};break;case"left":r={x:t.x-n.width,y:i};break;default:r={x:t.x,y:t.y}}if(null!=(o=o?I(o):null))switch(i="y"===o?"height":"width",e){case"start":r[o]-=t[i]/2-n[i]/2;break;case"end":r[o]+=t[i]/2-n[i]/2}return r}function M(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function P(n,e){return e.reduce(function(e,t){return e[t]=n,e},{})}function W(e,t){void 0===t&&(t={}),t=void 0===(t=(f=t).placement)?e.placement:t;var n,o,r,i,a,s,l=void 0===(d=f.boundary)?"clippingParents":d,c=void 0===(d=f.rootBoundary)?"viewport":d,d=void 0===(d=f.elementContext)?"popper":d,p=void 0!==(m=f.altBoundary)&&m,f=M("number"!=typeof(f=void 0===(f=f.padding)?0:f)?f:P(f,V)),u=e.elements.reference,m=e.rects.popper;n=y(p=e.elements[p?"popper"===d?"reference":"popper":d])?p:p.contextElement||x(e.elements.popper),r=c,o="clippingParents"===(o=l)?(a=A(S(i=n)),y(s=0<=["absolute","fixed"].indexOf(O(i).position)&&b(i)?L(i):i)?a.filter(function(e){return y(e)&&q(e,s)&&"body"!==w(e)}):[]):[].concat(o),(r=(r=[].concat(o,[r])).reduce(function(e,t){return t=D(n,t),e.top=F(t.top,e.top),e.right=N(t.right,e.right),e.bottom=N(t.bottom,e.bottom),e.left=F(t.left,e.left),e},D(n,r[0]))).width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,l=r,p=C({reference:c=v(u),element:m,strategy:"absolute",placement:t}),m=B(Object.assign({},m,p)),c="popper"===d?m:c;var h,g={top:l.top-c.top+f.top,bottom:c.bottom-l.bottom+f.bottom,left:l.left-c.left+f.left,right:c.right-l.right+f.right};return e=e.modifiersData.offset,"popper"===d&&e&&(h=e[t],Object.keys(g).forEach(function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";g[e]+=h[n]*t})),g}function T(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function t(e){void 0===e&&(e={});var t=e.defaultModifiers,p=void 0===t?[]:t,f=void 0===(e=e.defaultOptions)?X:e;return function(t,o,n){function r(){l.forEach(function(e){return e()}),l=[]}void 0===n&&(n=f);var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,f),modifiersData:{},elements:{reference:t,popper:o},attributes:{},styles:{}},l=[],c=!1,d={state:s,setOptions:function(e){return r(),s.options=Object.assign({},f,s.options,e),s.scrollParents={reference:y(t)?A(t):t.contextElement?A(t.contextElement):[],popper:A(o)},n=k(function(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}([].concat(p,s.options.modifiers))),e=_.reduce(function(e,t){return e.concat(n.filter(function(e){return e.phase===t}))},[]),s.orderedModifiers=e.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=void 0===(n=e.options)?{}:n;"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:d,options:n}),l.push(t||function(){}))}),d.update();var n},forceUpdate:function(){if(!c){var e,t,n=s.elements,o=n.reference;if(T(o,n=n.popper))for(s.rects={reference:function(e,t,n){void 0===n&&(n=!1);var o,r,i=b(t);(r=b(t))&&(o=(r=t.getBoundingClientRect()).height/t.offsetHeight||1,r=1!==(r.width/t.offsetWidth||1)||1!==o),o=r,r=x(t),e=v(e,o),o={scrollLeft:0,scrollTop:0};var a={x:0,y:0};return!i&&(i||n)||("body"===w(t)&&!h(r)||(o=t!==g(t)&&b(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:u(t)),b(t)?((a=v(t,!0)).x+=t.clientLeft,a.y+=t.clientTop):r&&(a.x=m(r))),{x:e.left+o.scrollLeft-a.x,y:e.top+o.scrollTop-a.y,width:e.width,height:e.height}}(o,L(n),"fixed"===s.options.strategy),popper:E(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}),o=0;o<s.orderedModifiers.length;o++)!0===s.reset?(s.reset=!1,o=-1):(n=(t=s.orderedModifiers[o]).fn,e=void 0===(e=t.options)?{}:e,t=t.name,"function"==typeof n&&(s=n({state:s,options:e,name:t,instance:d})||s))}},update:(i=function(){return new Promise(function(e){d.forceUpdate(),e(s)})},function(){return a=a||new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(i())})})}),destroy:function(){r(),c=!0}};return T(t,o)&&d.setOptions(n).then(function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)}),d}}function i(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,l=e.adaptive;e=void 0===(e=(t=e=!0===(e=e.roundOffsets)?(e=i.y,t=window.devicePixelRatio||1,{x:Y(Y(i.x*t)/t)||0,y:Y(Y(e*t)/t)||0}):"function"==typeof e?e(i):i).x)?0:e,t=void 0===(t=t.y)?0:t;var c,d,p,f=i.hasOwnProperty("x"),i=i.hasOwnProperty("y"),u="left",m="top",h=window;return l&&(d="clientHeight",p="clientWidth",(c=L(n))===g(n)&&"static"!==O(c=x(n)).position&&(d="scrollHeight",p="scrollWidth"),"top"===r&&(m="bottom",t-=c[d]-o.height,t*=s?1:-1),"left"===r&&(u="right",e-=c[p]-o.width,e*=s?1:-1)),n=Object.assign({position:a},l&&z),s?Object.assign({},n,((s={})[m]=i?"0":"",s[u]=f?"0":"",s.transform=(h.devicePixelRatio||1)<2?"translate("+e+"px, "+t+"px)":"translate3d("+e+"px, "+t+"px, 0)",s)):Object.assign({},n,((n={})[m]=i?t+"px":"",n[u]=f?e+"px":"",n.transform="",n))}function H(e){return e.replace(/left|right|bottom|top/g,function(e){return $[e]})}function R(e){return e.replace(/start|end/g,function(e){return J[e]})}function s(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function l(t){return["top","right","bottom","left"].some(function(e){return 0<=t[e]})}var a=Math.round,V=["top","bottom","right","left"],U=V.reduce(function(e,t){return e.concat([t+"-start",t+"-end"])},[]),G=[].concat(V,["auto"]).reduce(function(e,t){return e.concat([t,t+"-start",t+"-end"])},[]),_="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),F=Math.max,N=Math.min,Y=Math.round,X={placement:"bottom",modifiers:[],strategy:"absolute"},c={passive:!0},n={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=(e=e.options).scroll,r=void 0===o||o,i=void 0===(e=e.resize)||e,a=g(t.elements.popper),s=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&s.forEach(function(e){e.addEventListener("scroll",n.update,c)}),i&&a.addEventListener("resize",n.update,c),function(){r&&s.forEach(function(e){e.removeEventListener("scroll",n.update,c)}),i&&a.removeEventListener("resize",n.update,c)}},data:{}},d={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=C({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},z={top:"auto",right:"auto",bottom:"auto",left:"auto"},p={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state;e=void 0===(e=(o=e.options).gpuAcceleration)||e;var n=void 0===(n=o.adaptive)||n,o=void 0===(o=o.roundOffsets)||o;e={placement:j(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,i(Object.assign({},e,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:n,roundOffsets:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,i(Object.assign({},e,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},f={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var r=e.state;Object.keys(r.elements).forEach(function(e){var t=r.styles[e]||{},n=r.attributes[e]||{},o=r.elements[e];b(o)&&w(o)&&(Object.assign(o.style,t),Object.keys(n).forEach(function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var o=e.state,r={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,r.popper),o.styles=r,o.elements.arrow&&Object.assign(o.elements.arrow.style,r.arrow),function(){Object.keys(o.elements).forEach(function(e){var t=o.elements[e],n=o.attributes[e]||{};e=Object.keys((o.styles.hasOwnProperty(e)?o.styles:r)[e]).reduce(function(e,t){return e[t]="",e},{}),b(t)&&w(t)&&(Object.assign(t.style,e),Object.keys(n).forEach(function(e){t.removeAttribute(e)}))})}},requires:["computeStyles"]},Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var a=e.state,t=e.name,s=void 0===(e=e.options.offset)?[0,0]:e,n=(o=(e=G.reduce(function(e,t){var n=a.rects,o=j(t),r=0<=["left","top"].indexOf(o)?-1:1,n=(n=(i="function"==typeof s?s(Object.assign({},n,{placement:t})):s)[0])||0,i=((i=i[1])||0)*r,o=0<=["left","right"].indexOf(o)?{x:i,y:n}:{x:n,y:i};return e[t]=o,e},{}))[a.placement]).x,o=o.y;null!=a.modifiersData.popperOffsets&&(a.modifiersData.popperOffsets.x+=n,a.modifiersData.popperOffsets.y+=o),a.modifiersData[t]=e}},$={left:"right",right:"left",bottom:"top",top:"bottom"},J={start:"end",end:"start"},K={name:"flip",enabled:!0,phase:"main",fn:function(e){var n=e.state,t=e.options;if(e=e.name,!n.modifiersData[e]._skip){var o=void 0===(o=t.mainAxis)||o,r=void 0===(r=t.altAxis)||r,i=t.fallbackPlacements,a=t.padding,s=t.boundary,l=t.rootBoundary,c=t.altBoundary,d=void 0===(f=t.flipVariations)||f,p=t.allowedAutoPlacements,f=j(t=n.options.placement),i=i||(f!==t&&d?function(e){if("auto"===j(e))return[];var t=H(e);return[R(e),t,R(t)]}(t):[H(t)]),u=[t].concat(i).reduce(function(e,t){return e.concat("auto"===j(t)?function(n,e){void 0===e&&(e={});var o=e.boundary,r=e.rootBoundary,i=e.padding,t=e.flipVariations,a=e.allowedAutoPlacements,s=void 0===a?G:a,l=e.placement.split("-")[1];0===(t=(e=l?t?U:U.filter(function(e){return e.split("-")[1]===l}):V).filter(function(e){return 0<=s.indexOf(e)})).length&&(t=e);var c=t.reduce(function(e,t){return e[t]=W(n,{placement:t,boundary:o,rootBoundary:r,padding:i})[j(t)],e},{});return Object.keys(c).sort(function(e,t){return c[e]-c[t]})}(n,{placement:t,boundary:s,rootBoundary:l,padding:a,flipVariations:d,allowedAutoPlacements:p}):t)},[]),t=n.rects.reference;i=n.rects.popper;var m=new Map;f=!0;for(var h=u[0],g=0;g<u.length;g++){var y=u[g],b=j(y),v="start"===y.split("-")[1],w=0<=["top","bottom"].indexOf(b),x=w?"width":"height",O=W(n,{placement:y,boundary:s,rootBoundary:l,altBoundary:c,padding:a}),v=w?v?"right":"left":v?"bottom":"top";if(t[x]>i[x]&&(v=H(v)),x=H(v),w=[],o&&w.push(O[b]<=0),r&&w.push(O[v]<=0,O[x]<=0),w.every(function(e){return e})){h=y,f=!1;break}m.set(y,w)}if(f)for(o=function(t){var e=u.find(function(e){if(e=m.get(e))return e.slice(0,t).every(function(e){return e})});if(e)return h=e,"break"},r=d?3:1;0<r&&"break"!==o(r);r--);n.placement!==h&&(n.modifiersData[e]._skip=!0,n.placement=h,n.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Z={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var o=void 0===(i=n.mainAxis)||i,r=void 0!==(i=n.altAxis)&&i,i=void 0===(i=n.tether)||i,a=n.tetherOffset,s=void 0===a?0:a,l=W(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),n=j(t.placement),c=t.placement.split("-")[1],d=!c,p=I(n);n="x"===p?"y":"x",a=t.modifiersData.popperOffsets;var f,u,m,h,g,y,b,v,w,x=t.rects.reference,O=t.rects.popper,S="function"==typeof s?s(Object.assign({},t.rects,{placement:t.placement})):s,s={x:0,y:0};a&&((o||r)&&(v="y"===p?"top":"left",w="y"===p?"bottom":"right",f="y"===p?"height":"width",u=a[p],m=a[p]+l[v],h=a[p]-l[w],g=i?-O[f]/2:0,y=("start"===c?x:O)[f],c="start"===c?-O[f]:-x[f],O=t.elements.arrow,O=i&&O?E(O):{width:0,height:0},v=(b=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0})[v],w=b[w],O=F(0,N(x[f],O[f])),y=d?x[f]/2-g-O-v-S:y-O-v-S,x=d?-x[f]/2+g+O+w+S:c+O+w+S,d=t.elements.arrow&&L(t.elements.arrow),S=t.modifiersData.offset?t.modifiersData.offset[t.placement][p]:0,d=a[p]+y-S-(d?"y"===p?d.clientTop||0:d.clientLeft||0:0),x=a[p]+x-S,o&&(o=i?N(m,d):m,h=i?F(h,x):h,o=F(o,N(u,h)),a[p]=o,s[p]=o-u),r&&(o=(r=a[n])+l["x"===p?"top":"left"],l=r-l["x"===p?"bottom":"right"],o=i?N(o,d):o,i=i?F(l,x):l,i=F(o,N(r,i)),a[n]=i,s[n]=i-r)),t.modifiersData[e]=s)},requiresIfExists:["offset"]},ee={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,o,r,i=e.state,a=e.name,s=e.options,l=i.elements.arrow,c=i.modifiersData.popperOffsets,d=j(i.placement);e=I(d),d=0<=["left","right"].indexOf(d)?"height":"width",l&&c&&(s=M("number"!=typeof(s="function"==typeof(s=s.padding)?s(Object.assign({},i.rects,{placement:i.placement})):s)?s:P(s,V)),t=E(l),n="y"===e?"top":"left",o="y"===e?"bottom":"right",r=i.rects.reference[d]+i.rects.reference[e]-c[e]-i.rects.popper[d],c=c[e]-i.rects.reference[e],c=(l=(l=L(l))?"y"===e?l.clientHeight||0:l.clientWidth||0:0)/2-t[d]/2+(r/2-c/2),d=F(s[n],N(c,l-t[d]-s[o])),i.modifiersData[a]=((a={})[e]=d,a.centerOffset=d-c,a))},effect:function(e){var t=e.state;null!=(e=void 0===(e=e.options.element)?"[data-popper-arrow]":e)&&("string"!=typeof e||(e=t.elements.popper.querySelector(e)))&&q(t.elements.popper,e)&&(t.elements.arrow=e)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},te={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,i=W(t,{elementContext:"reference"}),a=W(t,{altBoundary:!0}),n=s(i,n),o=s(a,o,r),r=l(n),a=l(o);t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:o,isReferenceHidden:r,hasPopperEscaped:a},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":r,"data-popper-escaped":a})}},ne=t({defaultModifiers:[n,d,p,f]}),oe=[n,d,p,f,Q,K,Z,ee,te],re=t({defaultModifiers:oe});e.applyStyles=f,e.arrow=ee,e.computeStyles=p,e.createPopper=re,e.createPopperLite=ne,e.defaultModifiers=oe,e.detectOverflow=W,e.eventListeners=n,e.flip=K,e.hide=te,e.offset=Q,e.popperGenerator=t,e.popperOffsets=d,e.preventOverflow=Z,Object.defineProperty(e,"__esModule",{value:!0})});const d=document;d.addEventListener("DOMContentLoaded",function(e){Swal.mixin({customClass:{confirmButton:"btn btn-primary me-3",cancelButton:"btn btn-gray"},buttonsStyling:!1});var t,n=document.getElementById("theme-settings"),o=document.getElementById("theme-settings-expand");n&&(t=new bootstrap.Collapse(n,{show:!0,toggle:!1}),"true"===window.localStorage.getItem("settings_expanded")?(t.show(),o.classList.remove("show")):(t.hide(),o.classList.add("show")),n.addEventListener("hidden.bs.collapse",function(){o.classList.add("show"),window.localStorage.setItem("settings_expanded",!1)}),o.addEventListener("click",function(){o.classList.remove("show"),window.localStorage.setItem("settings_expanded",!0),setTimeout(function(){t.show()},300)}));var r={sm:540,md:720,lg:960,xl:1140},i=document.getElementById("sidebarMenu");i&&d.body.clientWidth<r.lg&&(i.addEventListener("shown.bs.collapse",function(){document.querySelector("body").style.position="fixed"}),i.addEventListener("hidden.bs.collapse",function(){document.querySelector("body").style.position="relative"}));var a=d.querySelector(".notification-bell");a&&a.addEventListener("shown.bs.dropdown",function(){a.classList.remove("unread")}),[].slice.call(d.querySelectorAll("[data-background]")).map(function(e){e.style.background="url("+e.getAttribute("data-background")+")"}),[].slice.call(d.querySelectorAll("[data-background-lg]")).map(function(e){document.body.clientWidth>r.lg&&(e.style.background="url("+e.getAttribute("data-background-lg")+")")}),[].slice.call(d.querySelectorAll("[data-background-color]")).map(function(e){e.style.background="url("+e.getAttribute("data-background-color")+")"}),[].slice.call(d.querySelectorAll("[data-color]")).map(function(e){e.style.color="url("+e.getAttribute("data-color")+")"});var s,l,c;[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)}),[].slice.call(d.querySelectorAll("[data-datepicker]")).map(function(e){return new Datepicker(e,{buttonClass:"btn"})});d.querySelector(".input-slider-container")&&[].slice.call(d.querySelectorAll(".input-slider-container")).map(function(e){var t=e.querySelector(":scope .input-slider"),n=t.getAttribute("id"),o=t.getAttribute("data-range-value-min"),r=t.getAttribute("data-range-value-max"),t=e.querySelector(":scope .range-slider-value"),e=t.getAttribute("id"),t=t.getAttribute("data-range-value-low"),n=d.getElementById(n);d.getElementById(e);noUiSlider.create(n,{start:[parseInt(t)],connect:[!0,!1],range:{min:[parseInt(o)],max:[parseInt(r)]}})}),d.getElementById("input-slider-range")&&(p=d.getElementById("input-slider-range"),n=d.getElementById("input-slider-range-value-low"),i=d.getElementById("input-slider-range-value-high"),s=[d,i],noUiSlider.create(p,{start:[parseInt(n.getAttribute("data-range-value-low")),parseInt(i.getAttribute("data-range-value-high"))],connect:!0,tooltips:!0,range:{min:parseInt(p.getAttribute("data-range-value-min")),max:parseInt(p.getAttribute("data-range-value-max"))}}),p.noUiSlider.on("update",function(e,t){s[t].textContent=e[t]})),d.querySelector(".ct-chart-sales-value")&&new Chartist.Line(".ct-chart-sales-value",{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[0,10,30,40,80,60,100]]},{low:0,showArea:!0,fullWidth:!0,plugins:[Chartist.plugins.tooltip()],axisX:{position:"end",showGrid:!0},axisY:{showGrid:!1,showLabel:!1,labelInterpolationFnc:function(e){return"$"+ +e+"k"}}}),d.querySelector(".ct-chart-ranking")&&new Chartist.Bar(".ct-chart-ranking",{labels:["Mon","Tue","Wed","Thu","Fri","Sat"],series:[[1,5,2,5,4,3],[2,3,4,8,1,2]]},{low:0,showArea:!0,plugins:[Chartist.plugins.tooltip()],axisX:{position:"end"},axisY:{showGrid:!1,showLabel:!1,offset:0}}).on("draw",function(e){"line"!==e.type&&"area"!==e.type||e.element.animate({d:{begin:2e3*e.index,dur:2e3,from:e.path.clone().scale(1,0).translate(0,e.chartRect.height()).stringify(),to:e.path.clone().stringify(),easing:Chartist.Svg.Easing.easeOutQuint}})}),d.querySelector(".ct-chart-traffic-share")&&(l={series:[70,20,10]},c=function(e,t){return e+t},new Chartist.Pie(".ct-chart-traffic-share",l,{labelInterpolationFnc:function(e){return Math.round(e/l.series.reduce(c)*100)+"%"},low:0,high:8,donut:!0,donutWidth:20,donutSolid:!0,fullWidth:!1,showLabel:!1,plugins:[Chartist.plugins.tooltip()]})),d.getElementById("loadOnClick")&&d.getElementById("loadOnClick").addEventListener("click",function(){var e=this,t=d.getElementById("extraContent"),n=d.getElementById("allLoadedText");e.classList.add("btn-loading"),e.setAttribute("disabled","true"),setTimeout(function(){t.style.display="block",e.style.display="none",n.style.display="block"},1500)});new SmoothScroll('a[href*="#"]',{speed:500,speedAsDuration:!0});d.querySelector(".current-year")&&(d.querySelector(".current-year").textContent=(new Date).getFullYear()),d.querySelector(".glide")&&new Glide(".glide",{type:"carousel",startAt:0,perView:3}).mount(),d.querySelector(".glide-testimonials")&&new Glide(".glide-testimonials",{type:"carousel",startAt:0,perView:1,autoplay:2e3}).mount(),d.querySelector(".glide-clients")&&new Glide(".glide-clients",{type:"carousel",startAt:0,perView:5,autoplay:2e3}).mount(),d.querySelector(".glide-news-widget")&&new Glide(".glide-news-widget",{type:"carousel",startAt:0,perView:1,autoplay:2e3}).mount(),d.querySelector(".glide-autoplay")&&new Glide(".glide-autoplay",{type:"carousel",startAt:0,perView:3,autoplay:2e3}).mount();var p=d.getElementById("billingSwitch");if(p){const f=new countUp.CountUp("priceStandard",99,{startVal:199}),u=new countUp.CountUp("pricePremium",199,{startVal:299});p.addEventListener("change",function(){billingSwitch.checked?(f.start(),u.start()):(f.reset(),u.reset())})}});