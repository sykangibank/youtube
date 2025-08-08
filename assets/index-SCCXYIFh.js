(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();var vc={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=Symbol.for("react.transitional.element"),Hf=Symbol.for("react.fragment");function bc(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var l in e)l!=="key"&&(a[l]=e[l])}else a=e;return e=a.ref,{$$typeof:jf,type:t,key:n,ref:e!==void 0?e:null,props:a}}xi.Fragment=Hf;xi.jsx=bc;xi.jsxs=bc;vc.exports=xi;var S=vc.exports,wc={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.transitional.element"),Uf=Symbol.for("react.portal"),_f=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),qf=Symbol.for("react.consumer"),Yf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Vf=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Ys=Symbol.iterator;function Zf(t){return t===null||typeof t!="object"?null:(t=Ys&&t[Ys]||t["@@iterator"],typeof t=="function"?t:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ac=Object.assign,Ec={};function an(t,e,a){this.props=t,this.context=e,this.refs=Ec,this.updater=a||Sc}an.prototype.isReactComponent={};an.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};an.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cc(){}Cc.prototype=an.prototype;function Uo(t,e,a){this.props=t,this.context=e,this.refs=Ec,this.updater=a||Sc}var _o=Uo.prototype=new Cc;_o.constructor=Uo;Ac(_o,an.prototype);_o.isPureReactComponent=!0;var Gs=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},Rc=Object.prototype.hasOwnProperty;function zo(t,e,a,n,l,i){return a=i.ref,{$$typeof:Ho,type:t,key:e,ref:a!==void 0?a:null,props:i}}function Qf(t,e){return zo(t.type,e,void 0,void 0,void 0,t.props)}function Lo(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function Kf(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Is=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kf(""+t.key):e.toString(36)}function Vs(){}function Xf(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Vs,Vs):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function wa(t,e,a,n,l){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Ho:case Uf:u=!0;break;case Tc:return u=t._init,wa(u(t._payload),e,a,n,l)}}if(u)return l=l(t),u=n===""?"."+tu(t,0):n,Gs(l)?(a="",u!=null&&(a=u.replace(Is,"$&/")+"/"),wa(l,e,a,"",function(r){return r})):l!=null&&(Lo(l)&&(l=Qf(l,a+(l.key==null||t&&t.key===l.key?"":(""+l.key).replace(Is,"$&/")+"/")+u)),e.push(l)),1;u=0;var o=n===""?".":n+":";if(Gs(t))for(var s=0;s<t.length;s++)n=t[s],i=o+tu(n,s),u+=wa(n,e,a,i,l);else if(s=Zf(t),typeof s=="function")for(t=s.call(t),s=0;!(n=t.next()).done;)n=n.value,i=o+tu(n,s++),u+=wa(n,e,a,i,l);else if(i==="object"){if(typeof t.then=="function")return wa(Xf(t),e,a,n,l);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function El(t,e,a){if(t==null)return t;var n=[],l=0;return wa(t,n,"","",function(i){return e.call(a,i,l++)}),n}function Jf(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zs=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Wf(){}k.Children={map:El,forEach:function(t,e,a){El(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!Lo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};k.Component=an;k.Fragment=_f;k.Profiler=Lf;k.PureComponent=Uo;k.StrictMode=zf;k.Suspense=If;k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J;k.__COMPILER_RUNTIME={__proto__:null,c:function(t){return J.H.useMemoCache(t)}};k.cache=function(t){return function(){return t.apply(null,arguments)}};k.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=Ac({},t.props),l=t.key,i=void 0;if(e!=null)for(u in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(l=""+e.key),e)!Rc.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(n[u]=e[u]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var o=Array(u),s=0;s<u;s++)o[s]=arguments[s+2];n.children=o}return zo(t.type,l,void 0,void 0,i,n)};k.createContext=function(t){return t={$$typeof:Yf,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:qf,_context:t},t};k.createElement=function(t,e,a){var n,l={},i=null;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)Rc.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(l[n]=e[n]);var u=arguments.length-2;if(u===1)l.children=a;else if(1<u){for(var o=Array(u),s=0;s<u;s++)o[s]=arguments[s+2];l.children=o}if(t&&t.defaultProps)for(n in u=t.defaultProps,u)l[n]===void 0&&(l[n]=u[n]);return zo(t,i,void 0,void 0,null,l)};k.createRef=function(){return{current:null}};k.forwardRef=function(t){return{$$typeof:Gf,render:t}};k.isValidElement=Lo;k.lazy=function(t){return{$$typeof:Tc,_payload:{_status:-1,_result:t},_init:Jf}};k.memo=function(t,e){return{$$typeof:Vf,type:t,compare:e===void 0?null:e}};k.startTransition=function(t){var e=J.T,a={};J.T=a;try{var n=t(),l=J.S;l!==null&&l(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Wf,Zs)}catch(i){Zs(i)}finally{J.T=e}};k.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()};k.use=function(t){return J.H.use(t)};k.useActionState=function(t,e,a){return J.H.useActionState(t,e,a)};k.useCallback=function(t,e){return J.H.useCallback(t,e)};k.useContext=function(t){return J.H.useContext(t)};k.useDebugValue=function(){};k.useDeferredValue=function(t,e){return J.H.useDeferredValue(t,e)};k.useEffect=function(t,e,a){var n=J.H;if(typeof a=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(t,e)};k.useId=function(){return J.H.useId()};k.useImperativeHandle=function(t,e,a){return J.H.useImperativeHandle(t,e,a)};k.useInsertionEffect=function(t,e){return J.H.useInsertionEffect(t,e)};k.useLayoutEffect=function(t,e){return J.H.useLayoutEffect(t,e)};k.useMemo=function(t,e){return J.H.useMemo(t,e)};k.useOptimistic=function(t,e){return J.H.useOptimistic(t,e)};k.useReducer=function(t,e,a){return J.H.useReducer(t,e,a)};k.useRef=function(t){return J.H.useRef(t)};k.useState=function(t){return J.H.useState(t)};k.useSyncExternalStore=function(t,e,a){return J.H.useSyncExternalStore(t,e,a)};k.useTransition=function(){return J.H.useTransition()};k.version="19.1.0";wc.exports=k;var v=wc.exports,Oc={exports:{}},Bi={},Mc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,j){var B=R.length;R.push(j);t:for(;0<B;){var et=B-1>>>1,rt=R[et];if(0<l(rt,j))R[et]=j,R[B]=rt,B=et;else break t}}function a(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var j=R[0],B=R.pop();if(B!==j){R[0]=B;t:for(var et=0,rt=R.length,Tl=rt>>>1;et<Tl;){var Sl=2*(et+1)-1,$i=R[Sl],Pe=Sl+1,Al=R[Pe];if(0>l($i,B))Pe<rt&&0>l(Al,$i)?(R[et]=Al,R[Pe]=B,et=Pe):(R[et]=$i,R[Sl]=B,et=Sl);else if(Pe<rt&&0>l(Al,B))R[et]=Al,R[Pe]=B,et=Pe;else break t}}return j}function l(R,j){var B=R.sortIndex-j.sortIndex;return B!==0?B:R.id-j.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,o=u.now();t.unstable_now=function(){return u.now()-o}}var s=[],r=[],f=1,g=null,d=3,p=!1,T=!1,w=!1,E=!1,h=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;function y(R){for(var j=a(r);j!==null;){if(j.callback===null)n(r);else if(j.startTime<=R)n(r),j.sortIndex=j.expirationTime,e(s,j);else break;j=a(r)}}function A(R){if(w=!1,y(R),!T)if(a(s)!==null)T=!0,M||(M=!0,Ee());else{var j=a(r);j!==null&&Pi(A,j.startTime-R)}}var M=!1,C=-1,O=5,z=-1;function N(){return E?!0:!(t.unstable_now()-z<O)}function bt(){if(E=!1,M){var R=t.unstable_now();z=R;var j=!0;try{t:{T=!1,w&&(w=!1,c(C),C=-1),p=!0;var B=d;try{e:{for(y(R),g=a(s);g!==null&&!(g.expirationTime>R&&N());){var et=g.callback;if(typeof et=="function"){g.callback=null,d=g.priorityLevel;var rt=et(g.expirationTime<=R);if(R=t.unstable_now(),typeof rt=="function"){g.callback=rt,y(R),j=!0;break e}g===a(s)&&n(s),y(R)}else n(s);g=a(s)}if(g!==null)j=!0;else{var Tl=a(r);Tl!==null&&Pi(A,Tl.startTime-R),j=!1}}break t}finally{g=null,d=B,p=!1}j=void 0}}finally{j?Ee():M=!1}}}var Ee;if(typeof m=="function")Ee=function(){m(bt)};else if(typeof MessageChannel<"u"){var qs=new MessageChannel,Bf=qs.port2;qs.port1.onmessage=bt,Ee=function(){Bf.postMessage(null)}}else Ee=function(){h(bt,0)};function Pi(R,j){C=h(function(){R(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var B=d;d=j;try{return R()}finally{d=B}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=d;d=R;try{return j()}finally{d=B}},t.unstable_scheduleCallback=function(R,j,B){var et=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?et+B:et):B=et,R){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=B+rt,R={id:f++,callback:j,priorityLevel:R,startTime:B,expirationTime:rt,sortIndex:-1},B>et?(R.sortIndex=B,e(r,R),a(s)===null&&R===a(r)&&(w?(c(C),C=-1):w=!0,Pi(A,B-et))):(R.sortIndex=rt,e(s,R),T||p||(T=!0,M||(M=!0,Ee()))),R},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(R){var j=d;return function(){var B=d;d=j;try{return R.apply(this,arguments)}finally{d=B}}}})(Dc);Mc.exports=Dc;var Ff=Mc.exports,Nc={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf=v;function kc(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ce(){}var Tt={d:{f:Ce,r:function(){throw Error(kc(522))},D:Ce,C:Ce,L:Ce,m:Ce,X:Ce,S:Ce,M:Ce},p:0,findDOMNode:null},$f=Symbol.for("react.portal");function tm(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$f,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var Rn=Pf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ji(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;St.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(kc(299));return tm(t,e,null,a)};St.flushSync=function(t){var e=Rn.T,a=Tt.p;try{if(Rn.T=null,Tt.p=2,t)return t()}finally{Rn.T=e,Tt.p=a,Tt.d.f()}};St.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Tt.d.C(t,e))};St.prefetchDNS=function(t){typeof t=="string"&&Tt.d.D(t)};St.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=ji(a,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Tt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:l,fetchPriority:i}):a==="script"&&Tt.d.X(t,{crossOrigin:n,integrity:l,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};St.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=ji(e.as,e.crossOrigin);Tt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Tt.d.M(t)};St.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=ji(a,e.crossOrigin);Tt.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};St.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=ji(e.as,e.crossOrigin);Tt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Tt.d.m(t)};St.requestFormReset=function(t){Tt.d.r(t)};St.unstable_batchedUpdates=function(t,e){return t(e)};St.useFormState=function(t,e,a){return Rn.H.useFormState(t,e,a)};St.useFormStatus=function(){return Rn.H.useHostTransitionStatus()};St.version="19.1.0";function xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc)}catch(t){console.error(t)}}xc(),Nc.exports=St;var em=Nc.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=Ff,Bc=v,am=em;function b(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Hc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qs(t){if(al(t)!==t)throw Error(b(188))}function nm(t){var e=t.alternate;if(!e){if(e=al(t),e===null)throw Error(b(188));return e!==t?null:t}for(var a=t,n=e;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return Qs(l),t;if(i===n)return Qs(l),e;i=i.sibling}throw Error(b(188))}if(a.return!==n.return)a=l,n=i;else{for(var u=!1,o=l.child;o;){if(o===a){u=!0,a=l,n=i;break}if(o===n){u=!0,n=l,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,n=l;break}if(o===n){u=!0,n=i,a=l;break}o=o.sibling}if(!u)throw Error(b(189))}}if(a.alternate!==n)throw Error(b(190))}if(a.tag!==3)throw Error(b(188));return a.stateNode.current===a?t:e}function Uc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Uc(t),e!==null)return e;t=t.sibling}return null}var K=Object.assign,lm=Symbol.for("react.element"),Cl=Symbol.for("react.transitional.element"),Tn=Symbol.for("react.portal"),Ea=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),_u=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),zc=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),qo=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),qu=Symbol.for("react.activity"),um=Symbol.for("react.memo_cache_sentinel"),Ks=Symbol.iterator;function dn(t){return t===null||typeof t!="object"?null:(t=Ks&&t[Ks]||t["@@iterator"],typeof t=="function"?t:null)}var om=Symbol.for("react.client.reference");function Yu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===om?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ea:return"Fragment";case _u:return"Profiler";case _c:return"StrictMode";case zu:return"Suspense";case Lu:return"SuspenseList";case qu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Tn:return"Portal";case ce:return(t.displayName||"Context")+".Provider";case zc:return(t._context.displayName||"Context")+".Consumer";case qo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yo:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case Me:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}var Sn=Array.isArray,D=Bc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=am.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,na={pending:!1,data:null,method:null,action:null},Gu=[],Ca=-1;function ae(t){return{current:t}}function ft(t){0>Ca||(t.current=Gu[Ca],Gu[Ca]=null,Ca--)}function W(t,e){Ca++,Gu[Ca]=t.current,t.current=e}var Pt=ae(null),Yn=ae(null),ze=ae(null),ei=ae(null);function ai(t,e){switch(W(ze,e),W(Yn,t),W(Pt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Pr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Pr(e),t=ef(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ft(Pt),W(Pt,t)}function Va(){ft(Pt),ft(Yn),ft(ze)}function Iu(t){t.memoizedState!==null&&W(ei,t);var e=Pt.current,a=ef(e,t.type);e!==a&&(W(Yn,t),W(Pt,a))}function ni(t){Yn.current===t&&(ft(Pt),ft(Yn)),ei.current===t&&(ft(ei),Fn._currentValue=na)}var Vu=Object.prototype.hasOwnProperty,Go=st.unstable_scheduleCallback,eu=st.unstable_cancelCallback,sm=st.unstable_shouldYield,rm=st.unstable_requestPaint,$t=st.unstable_now,cm=st.unstable_getCurrentPriorityLevel,Lc=st.unstable_ImmediatePriority,qc=st.unstable_UserBlockingPriority,li=st.unstable_NormalPriority,hm=st.unstable_LowPriority,Yc=st.unstable_IdlePriority,dm=st.log,fm=st.unstable_setDisableYieldValue,nl=null,xt=null;function je(t){if(typeof dm=="function"&&fm(t),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(nl,t)}catch{}}var Bt=Math.clz32?Math.clz32:pm,mm=Math.log,gm=Math.LN2;function pm(t){return t>>>=0,t===0?32:31-(mm(t)/gm|0)|0}var Rl=256,Ol=4194304;function ta(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Hi(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var l=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~i,n!==0?l=ta(n):(u&=o,u!==0?l=ta(u):a||(a=o&~t,a!==0&&(l=ta(a))))):(o=n&~i,o!==0?l=ta(o):u!==0?l=ta(u):a||(a=n&~t,a!==0&&(l=ta(a)))),l===0?0:e!==0&&e!==l&&!(e&i)&&(i=l&-l,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:l}function ll(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ym(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(){var t=Rl;return Rl<<=1,!(Rl&4194048)&&(Rl=256),t}function Ic(){var t=Ol;return Ol<<=1,!(Ol&62914560)&&(Ol=4194304),t}function au(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function il(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vm(t,e,a,n,l,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,s=t.expirationTimes,r=t.hiddenUpdates;for(a=u&~a;0<a;){var f=31-Bt(a),g=1<<f;o[f]=0,s[f]=-1;var d=r[f];if(d!==null)for(r[f]=null,f=0;f<d.length;f++){var p=d[f];p!==null&&(p.lane&=-536870913)}a&=~g}n!==0&&Vc(t,n,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Vc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Bt(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Zc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Bt(a),l=1<<n;l&e|t[n]&e&&(t[n]|=e),a&=~l}}function Io(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vo(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Qc(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:df(t.type))}function bm(t,e){var a=q.p;try{return q.p=t,e()}finally{q.p=a}}var Je=Math.random().toString(36).slice(2),yt="__reactFiber$"+Je,Rt="__reactProps$"+Je,nn="__reactContainer$"+Je,Zu="__reactEvents$"+Je,wm="__reactListeners$"+Je,Tm="__reactHandles$"+Je,Xs="__reactResources$"+Je,ul="__reactMarker$"+Je;function Zo(t){delete t[yt],delete t[Rt],delete t[Zu],delete t[wm],delete t[Tm]}function Ra(t){var e=t[yt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[nn]||a[yt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=ec(t);t!==null;){if(a=t[yt])return a;t=ec(t)}return e}t=a,a=t.parentNode}return null}function ln(t){if(t=t[yt]||t[nn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function An(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(b(33))}function Ua(t){var e=t[Xs];return e||(e=t[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ht(t){t[ul]=!0}var Kc=new Set,Xc={};function ma(t,e){Za(t,e),Za(t+"Capture",e)}function Za(t,e){for(Xc[t]=e,t=0;t<e.length;t++)Kc.add(e[t])}var Sm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Js={},Ws={};function Am(t){return Vu.call(Ws,t)?!0:Vu.call(Js,t)?!1:Sm.test(t)?Ws[t]=!0:(Js[t]=!0,!1)}function ql(t,e,a){if(Am(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ml(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ue(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var nu,Fs;function Ta(t){if(nu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||"",Fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nu+t+Fs}var lu=!1;function iu(t,e){if(!t||lu)return"";lu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(p){var d=p}Reflect.construct(t,[],g)}else{try{g.call()}catch(p){d=p}t.call(g.prototype)}}else{try{throw Error()}catch(p){d=p}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var s=u.split(`
`),r=o.split(`
`);for(l=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;if(n===s.length||l===r.length)for(n=s.length-1,l=r.length-1;1<=n&&0<=l&&s[n]!==r[l];)l--;for(;1<=n&&0<=l;n--,l--)if(s[n]!==r[l]){if(n!==1||l!==1)do if(n--,l--,0>l||s[n]!==r[l]){var f=`
`+s[n].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=n&&0<=l);break}}}finally{lu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ta(a):""}function Em(t){switch(t.tag){case 26:case 27:case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return iu(t.type,!1);case 11:return iu(t.type.render,!1);case 1:return iu(t.type,!0);case 31:return Ta("Activity");default:return""}}function Ps(t){try{var e="";do e+=Em(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cm(t){var e=Jc(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ii(t){t._valueTracker||(t._valueTracker=Cm(t))}function Wc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Jc(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function ui(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rm=/[\n"\\]/g;function Yt(t){return t.replace(Rm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Qu(t,e,a,n,l,i,u,o){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+zt(e)):t.value!==""+zt(e)&&(t.value=""+zt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Ku(t,u,zt(e)):a!=null?Ku(t,u,zt(a)):n!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+zt(o):t.removeAttribute("name")}function Fc(t,e,a,n,l,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+zt(a):"",e=e!=null?""+zt(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function Ku(t,e,a){e==="number"&&ui(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _a(t,e,a,n){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&n&&(t[a].defaultSelected=!0)}else{for(a=""+zt(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Pc(t,e,a){if(e!=null&&(e=""+zt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+zt(a):""}function $c(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(b(92));if(Sn(n)){if(1<n.length)throw Error(b(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=zt(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Qa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $s(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||Om.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function th(t,e,a){if(e!=null&&typeof e!="object")throw Error(b(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in e)n=e[l],e.hasOwnProperty(l)&&a[l]!==n&&$s(t,l,n)}else for(var i in e)e.hasOwnProperty(i)&&$s(t,i,e[i])}function Qo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(t){return Dm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Xu=null;function Ko(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,za=null;function tr(t){var e=ln(t);if(e&&(t=e.stateNode)){var a=t[Rt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Qu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var l=n[Rt]||null;if(!l)throw Error(b(90));Qu(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Wc(n)}break t;case"textarea":Pc(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&_a(t,!!a.multiple,e,!1)}}}var uu=!1;function eh(t,e,a){if(uu)return t(e,a);uu=!0;try{var n=t(e);return n}finally{if(uu=!1,(Oa!==null||za!==null)&&(Zi(),Oa&&(e=Oa,t=za,za=Oa=null,tr(e),t)))for(e=0;e<t.length;e++)tr(t[e])}}function Gn(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Rt]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(b(231,e,typeof a));return a}var ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(ve)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{Ju=!1}var He=null,Xo=null,Gl=null;function ah(){if(Gl)return Gl;var t,e=Xo,a=e.length,n,l="value"in He?He.value:He.textContent,i=l.length;for(t=0;t<a&&e[t]===l[t];t++);var u=a-t;for(n=1;n<=u&&e[a-n]===l[i-n];n++);return Gl=l.slice(t,1<n?1-n:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function er(){return!1}function Ot(t){function e(a,n,l,i,u){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dl:er,this.isPropagationStopped=er,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=Ot(ga),ol=K({},ga,{view:0,detail:0}),Nm=Ot(ol),ou,su,mn,_i=K({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mn&&(mn&&t.type==="mousemove"?(ou=t.screenX-mn.screenX,su=t.screenY-mn.screenY):su=ou=0,mn=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:su}}),ar=Ot(_i),km=K({},_i,{dataTransfer:0}),xm=Ot(km),Bm=K({},ol,{relatedTarget:0}),ru=Ot(Bm),jm=K({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=Ot(jm),Um=K({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_m=Ot(Um),zm=K({},ga,{data:0}),nr=Ot(zm),Lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ym[t])?!!e[t]:!1}function Jo(){return Gm}var Im=K({},ol,{key:function(t){if(t.key){var e=Lm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vm=Ot(Im),Zm=K({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lr=Ot(Zm),Qm=K({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),Km=Ot(Qm),Xm=K({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=Ot(Xm),Wm=K({},_i,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=Ot(Wm),Pm=K({},ga,{newState:0,oldState:0}),$m=Ot(Pm),tg=[9,13,27,32],Wo=ve&&"CompositionEvent"in window,On=null;ve&&"documentMode"in document&&(On=document.documentMode);var eg=ve&&"TextEvent"in window&&!On,nh=ve&&(!Wo||On&&8<On&&11>=On),ir=" ",ur=!1;function lh(t,e){switch(t){case"keyup":return tg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ma=!1;function ag(t,e){switch(t){case"compositionend":return ih(e);case"keypress":return e.which!==32?null:(ur=!0,ir);case"textInput":return t=e.data,t===ir&&ur?null:t;default:return null}}function ng(t,e){if(Ma)return t==="compositionend"||!Wo&&lh(t,e)?(t=ah(),Gl=Xo=He=null,Ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nh&&e.locale!=="ko"?null:e.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lg[t.type]:e==="textarea"}function uh(t,e,a,n){Oa?za?za.push(n):za=[n]:Oa=n,e=Ei(e,"onChange"),0<e.length&&(a=new Ui("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Mn=null,In=null;function ig(t){Pd(t,0)}function zi(t){var e=An(t);if(Wc(e))return t}function sr(t,e){if(t==="change")return e}var oh=!1;if(ve){var cu;if(ve){var hu="oninput"in document;if(!hu){var rr=document.createElement("div");rr.setAttribute("oninput","return;"),hu=typeof rr.oninput=="function"}cu=hu}else cu=!1;oh=cu&&(!document.documentMode||9<document.documentMode)}function cr(){Mn&&(Mn.detachEvent("onpropertychange",sh),In=Mn=null)}function sh(t){if(t.propertyName==="value"&&zi(In)){var e=[];uh(e,In,t,Ko(t)),eh(ig,e)}}function ug(t,e,a){t==="focusin"?(cr(),Mn=e,In=a,Mn.attachEvent("onpropertychange",sh)):t==="focusout"&&cr()}function og(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zi(In)}function sg(t,e){if(t==="click")return zi(e)}function rg(t,e){if(t==="input"||t==="change")return zi(e)}function cg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:cg;function Vn(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Vu.call(e,l)||!Ut(t[l],e[l]))return!1}return!0}function hr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dr(t,e){var a=hr(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hr(a)}}function rh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ch(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ui(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ui(t.document)}return e}function Fo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var hg=ve&&"documentMode"in document&&11>=document.documentMode,Da=null,Wu=null,Dn=null,Fu=!1;function fr(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||Da==null||Da!==ui(n)||(n=Da,"selectionStart"in n&&Fo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dn&&Vn(Dn,n)||(Dn=n,n=Ei(Wu,"onSelect"),0<n.length&&(e=new Ui("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Da)))}function $e(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Na={animationend:$e("Animation","AnimationEnd"),animationiteration:$e("Animation","AnimationIteration"),animationstart:$e("Animation","AnimationStart"),transitionrun:$e("Transition","TransitionRun"),transitionstart:$e("Transition","TransitionStart"),transitioncancel:$e("Transition","TransitionCancel"),transitionend:$e("Transition","TransitionEnd")},du={},hh={};ve&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete Na.animationend.animation,delete Na.animationiteration.animation,delete Na.animationstart.animation),"TransitionEvent"in window||delete Na.transitionend.transition);function pa(t){if(du[t])return du[t];if(!Na[t])return t;var e=Na[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in hh)return du[t]=e[a];return t}var dh=pa("animationend"),fh=pa("animationiteration"),mh=pa("animationstart"),dg=pa("transitionrun"),fg=pa("transitionstart"),mg=pa("transitioncancel"),gh=pa("transitionend"),ph=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Xt(t,e){ph.set(t,e),ma(e,[t])}var mr=new WeakMap;function Gt(t,e){if(typeof t=="object"&&t!==null){var a=mr.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ps(e)},mr.set(t,e),e)}return{value:t,source:e,stack:Ps(e)}}var _t=[],ka=0,Po=0;function Li(){for(var t=ka,e=Po=ka=0;e<t;){var a=_t[e];_t[e++]=null;var n=_t[e];_t[e++]=null;var l=_t[e];_t[e++]=null;var i=_t[e];if(_t[e++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&yh(a,l,i)}}function qi(t,e,a,n){_t[ka++]=t,_t[ka++]=e,_t[ka++]=a,_t[ka++]=n,Po|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function $o(t,e,a,n){return qi(t,e,a,n),oi(t)}function un(t,e){return qi(t,null,null,e),oi(t)}function yh(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=t.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-Bt(a),t=i.hiddenUpdates,n=t[l],n===null?t[l]=[e]:n.push(e),e.lane=a|536870912),i):null}function oi(t){if(50<Ln)throw Ln=0,wo=null,Error(b(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var xa={};function gg(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,a,n){return new gg(t,e,a,n)}function ts(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ge(t,e){var a=t.alternate;return a===null?(a=kt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function vh(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Vl(t,e,a,n,l,i){var u=0;if(n=t,typeof t=="function")ts(t)&&(u=1);else if(typeof t=="string")u=yp(t,a,Pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case qu:return t=kt(31,a,e,l),t.elementType=qu,t.lanes=i,t;case Ea:return la(a.children,l,i,e);case _c:u=8,l|=24;break;case _u:return t=kt(12,a,e,l|2),t.elementType=_u,t.lanes=i,t;case zu:return t=kt(13,a,e,l),t.elementType=zu,t.lanes=i,t;case Lu:return t=kt(19,a,e,l),t.elementType=Lu,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case im:case ce:u=10;break t;case zc:u=9;break t;case qo:u=11;break t;case Yo:u=14;break t;case Me:u=16,n=null;break t}u=29,a=Error(b(130,t===null?"null":typeof t,"")),n=null}return e=kt(u,a,e,l),e.elementType=t,e.type=n,e.lanes=i,e}function la(t,e,a,n){return t=kt(7,t,n,e),t.lanes=a,t}function fu(t,e,a){return t=kt(6,t,null,e),t.lanes=a,t}function mu(t,e,a){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ba=[],ja=0,si=null,ri=0,Lt=[],qt=0,ia=null,he=1,de="";function ea(t,e){Ba[ja++]=ri,Ba[ja++]=si,si=t,ri=e}function bh(t,e,a){Lt[qt++]=he,Lt[qt++]=de,Lt[qt++]=ia,ia=t;var n=he;t=de;var l=32-Bt(n)-1;n&=~(1<<l),a+=1;var i=32-Bt(e)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,he=1<<32-Bt(e)+l|a<<l|n,de=i+t}else he=1<<i|a<<l|n,de=t}function es(t){t.return!==null&&(ea(t,1),bh(t,1,0))}function as(t){for(;t===si;)si=Ba[--ja],Ba[ja]=null,ri=Ba[--ja],Ba[ja]=null;for(;t===ia;)ia=Lt[--qt],Lt[qt]=null,de=Lt[--qt],Lt[qt]=null,he=Lt[--qt],Lt[qt]=null}var wt=null,$=null,L=!1,ua=null,Wt=!1,$u=Error(b(519));function ca(t){var e=Error(b(418,""));throw Zn(Gt(e,t)),$u}function gr(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[yt]=t,e[Rt]=n,a){case"dialog":H("cancel",e),H("close",e);break;case"iframe":case"object":case"embed":H("load",e);break;case"video":case"audio":for(a=0;a<Xn.length;a++)H(Xn[a],e);break;case"source":H("error",e);break;case"img":case"image":case"link":H("error",e),H("load",e);break;case"details":H("toggle",e);break;case"input":H("invalid",e),Fc(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),ii(e);break;case"select":H("invalid",e);break;case"textarea":H("invalid",e),$c(e,n.value,n.defaultValue,n.children),ii(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||tf(e.textContent,a)?(n.popover!=null&&(H("beforetoggle",e),H("toggle",e)),n.onScroll!=null&&H("scroll",e),n.onScrollEnd!=null&&H("scrollend",e),n.onClick!=null&&(e.onclick=Xi),e=!0):e=!1,e||ca(t)}function pr(t){for(wt=t.return;wt;)switch(wt.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:wt=wt.return}}function gn(t){if(t!==wt)return!1;if(!L)return pr(t),L=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ro(t.type,t.memoizedProps)),a=!a),a&&$&&ca(t),pr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){$=Kt(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}$=null}}else e===27?(e=$,We(t.type)?(t=Do,Do=null,$=t):$=e):$=wt?Kt(t.stateNode.nextSibling):null;return!0}function sl(){$=wt=null,L=!1}function yr(){var t=ua;return t!==null&&(Ct===null?Ct=t:Ct.push.apply(Ct,t),ua=null),t}function Zn(t){ua===null?ua=[t]:ua.push(t)}var to=ae(null),ya=null,fe=null;function Ne(t,e,a){W(to,e._currentValue),e._currentValue=a}function pe(t){t._currentValue=to.current,ft(to)}function eo(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function ao(t,e,a,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=l;for(var s=0;s<e.length;s++)if(o.context===e[s]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),eo(i.return,a,t),n||(u=null);break t}i=o.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(b(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),eo(u,a,t),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function rl(t,e,a,n){t=null;for(var l=e,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(b(387));if(u=u.memoizedProps,u!==null){var o=l.type;Ut(l.pendingProps.value,u.value)||(t!==null?t.push(o):t=[o])}}else if(l===ei.current){if(u=l.alternate,u===null)throw Error(b(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Fn):t=[Fn])}l=l.return}t!==null&&ao(e,t,a,n),e.flags|=262144}function ci(t){for(t=t.firstContext;t!==null;){if(!Ut(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ha(t){ya=t,fe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return wh(ya,t)}function Nl(t,e){return ya===null&&ha(t),wh(t,e)}function wh(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},fe===null){if(t===null)throw Error(b(308));fe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fe=fe.next=e;return a}var pg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},yg=st.unstable_scheduleCallback,vg=st.unstable_NormalPriority,ut={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ns(){return{controller:new pg,data:new Map,refCount:0}}function cl(t){t.refCount--,t.refCount===0&&yg(vg,function(){t.controller.abort()})}var Nn=null,no=0,Ka=0,La=null;function bg(t,e){if(Nn===null){var a=Nn=[];no=0,Ka=Rs(),La={status:"pending",value:void 0,then:function(n){a.push(n)}}}return no++,e.then(vr,vr),e}function vr(){if(--no===0&&Nn!==null){La!==null&&(La.status="fulfilled");var t=Nn;Nn=null,Ka=0,La=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function wg(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var br=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&bg(t,e),br!==null&&br(t,e)};var oa=ae(null);function ls(){var t=oa.current;return t!==null?t:Q.pooledCache}function Zl(t,e){e===null?W(oa,oa.current):W(oa,e.pool)}function Th(){var t=ls();return t===null?null:{parent:ut._currentValue,pool:t}}var hl=Error(b(460)),Sh=Error(b(474)),Yi=Error(b(542)),lo={then:function(){}};function wr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kl(){}function Ah(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(kl,kl),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sr(t),t;default:if(typeof e.status=="string")e.then(kl,kl);else{if(t=Q,t!==null&&100<t.shellSuspendCounter)throw Error(b(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=n}},function(n){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sr(t),t}throw kn=e,hl}}var kn=null;function Tr(){if(kn===null)throw Error(b(459));var t=kn;return kn=null,t}function Sr(t){if(t===hl||t===Yi)throw Error(b(483))}var De=!1;function is(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function io(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Le(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function qe(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,G&2){var l=n.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),n.pending=e,e=oi(t),yh(t,null,a),e}return qi(t,n,e,a),oi(t)}function xn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Zc(t,a)}}function gu(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?l=i=e:i=i.next=e}else l=i=e;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var uo=!1;function Bn(){if(uo){var t=La;if(t!==null)throw t}}function jn(t,e,a,n){uo=!1;var l=t.updateQueue;De=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var s=o,r=s.next;s.next=null,u===null?i=r:u.next=r,u=s;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==u&&(o===null?f.firstBaseUpdate=r:o.next=r,f.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;u=0,f=r=s=null,o=i;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(_&d)===d:(n&d)===d){d!==0&&d===Ka&&(uo=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var T=t,w=o;d=e;var E=a;switch(w.tag){case 1:if(T=w.payload,typeof T=="function"){g=T.call(E,g,d);break t}g=T;break t;case 3:T.flags=T.flags&-65537|128;case 0:if(T=w.payload,d=typeof T=="function"?T.call(E,g,d):T,d==null)break t;g=K({},g,d);break t;case 2:De=!0}}d=o.callback,d!==null&&(t.flags|=64,p&&(t.flags|=8192),p=l.callbacks,p===null?l.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(r=f=p,s=g):f=f.next=p,u|=d;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;p=o,o=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);f===null&&(s=g),l.baseState=s,l.firstBaseUpdate=r,l.lastBaseUpdate=f,i===null&&(l.shared.lanes=0),Xe|=u,t.lanes=u,t.memoizedState=g}}function Eh(t,e){if(typeof t!="function")throw Error(b(191,t));t.call(e)}function Ch(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Eh(a[t],e)}var Xa=ae(null),hi=ae(0);function Ar(t,e){t=Te,W(hi,t),W(Xa,e),Te=t|e.baseLanes}function oo(){W(hi,Te),W(Xa,Xa.current)}function us(){Te=hi.current,ft(Xa),ft(hi)}var Qe=0,x=null,V=null,lt=null,di=!1,qa=!1,da=!1,fi=0,Qn=0,Ya=null,Tg=0;function at(){throw Error(b(321))}function os(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ut(t[a],e[a]))return!1;return!0}function ss(t,e,a,n,l,i){return Qe=i,x=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?ad:nd,da=!1,i=a(n,l),da=!1,qa&&(i=Oh(e,a,n,l)),Rh(t),i}function Rh(t){D.H=mi;var e=V!==null&&V.next!==null;if(Qe=0,lt=V=x=null,di=!1,Qn=0,Ya=null,e)throw Error(b(300));t===null||dt||(t=t.dependencies,t!==null&&ci(t)&&(dt=!0))}function Oh(t,e,a,n){x=t;var l=0;do{if(qa&&(Ya=null),Qn=0,qa=!1,25<=l)throw Error(b(301));if(l+=1,lt=V=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Mg,i=e(a,n)}while(qa);return i}function Sg(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?dl(e):e,t=t.useState()[0],(V!==null?V.memoizedState:null)!==t&&(x.flags|=1024),e}function rs(){var t=fi!==0;return fi=0,t}function cs(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function hs(t){if(di){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}di=!1}Qe=0,lt=V=x=null,qa=!1,Qn=fi=0,Ya=null}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?x.memoizedState=lt=t:lt=lt.next=t,lt}function it(){if(V===null){var t=x.alternate;t=t!==null?t.memoizedState:null}else t=V.next;var e=lt===null?x.memoizedState:lt.next;if(e!==null)lt=e,V=t;else{if(t===null)throw x.alternate===null?Error(b(467)):Error(b(310));V=t,t={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},lt===null?x.memoizedState=lt=t:lt=lt.next=t}return lt}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(t){var e=Qn;return Qn+=1,Ya===null&&(Ya=[]),t=Ah(Ya,t,e),e=x,(lt===null?e.memoizedState:lt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?ad:nd),t}function Gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dl(t);if(t.$$typeof===ce)return vt(t)}throw Error(b(438,String(t)))}function fs(t){var e=null,a=x.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=x.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ds(),x.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=um;return e.index++,a}function be(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=it();return ms(e,V,t)}function ms(t,e,a){var n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=a;var l=t.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}e.baseQueue=l=i,n.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var o=u=null,s=null,r=e,f=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(_&g)===g:(Qe&g)===g){var d=r.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Ka&&(f=!0);else if((Qe&d)===d){r=r.next,d===Ka&&(f=!0);continue}else g={lane:0,revertLane:r.revertLane,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(o=s=g,u=i):s=s.next=g,x.lanes|=d,Xe|=d;g=r.action,da&&a(i,g),i=r.hasEagerState?r.eagerState:a(i,g)}else d={lane:g,revertLane:r.revertLane,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(o=s=d,u=i):s=s.next=d,x.lanes|=g,Xe|=g;r=r.next}while(r!==null&&r!==e);if(s===null?u=i:s.next=o,!Ut(i,t.memoizedState)&&(dt=!0,f&&(a=La,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=s,n.lastRenderedState=i}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function pu(t){var e=it(),a=e.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=t;var n=a.dispatch,l=a.pending,i=e.memoizedState;if(l!==null){a.pending=null;var u=l=l.next;do i=t(i,u.action),u=u.next;while(u!==l);Ut(i,e.memoizedState)||(dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,n]}function Mh(t,e,a){var n=x,l=it(),i=L;if(i){if(a===void 0)throw Error(b(407));a=a()}else a=e();var u=!Ut((V||l).memoizedState,a);u&&(l.memoizedState=a,dt=!0),l=l.queue;var o=kh.bind(null,n,l,t);if(fl(2048,8,o,[t]),l.getSnapshot!==e||u||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Ja(9,Ii(),Nh.bind(null,n,l,a,e),null),Q===null)throw Error(b(349));i||Qe&124||Dh(n,e,a)}return a}function Dh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=x.updateQueue,e===null?(e=ds(),x.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Nh(t,e,a,n){e.value=a,e.getSnapshot=n,xh(e)&&Bh(t)}function kh(t,e,a){return a(function(){xh(e)&&Bh(t)})}function xh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ut(t,a)}catch{return!0}}function Bh(t){var e=un(t,2);e!==null&&Ht(e,t,2)}function so(t){var e=At();if(typeof t=="function"){var a=t;if(t=a(),da){je(!0);try{a()}finally{je(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:be,lastRenderedState:t},e}function jh(t,e,a,n){return t.baseState=a,ms(t,V,typeof n=="function"?n:be)}function Ag(t,e,a,n,l){if(Vi(t))throw Error(b(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};D.T!==null?a(!0):i.isTransition=!1,n(i),a=e.pending,a===null?(i.next=e.pending=i,Hh(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Hh(t,e){var a=e.action,n=e.payload,l=t.state;if(e.isTransition){var i=D.T,u={};D.T=u;try{var o=a(l,n),s=D.S;s!==null&&s(u,o),Er(t,e,o)}catch(r){ro(t,e,r)}finally{D.T=i}}else try{i=a(l,n),Er(t,e,i)}catch(r){ro(t,e,r)}}function Er(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Cr(t,e,n)},function(n){return ro(t,e,n)}):Cr(t,e,a)}function Cr(t,e,a){e.status="fulfilled",e.value=a,Uh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Hh(t,a)))}function ro(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Uh(e),e=e.next;while(e!==n)}t.action=null}function Uh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function _h(t,e){return e}function Rr(t,e){if(L){var a=Q.formState;if(a!==null){t:{var n=x;if(L){if($){e:{for(var l=$,i=Wt;l.nodeType!==8;){if(!i){l=null;break e}if(l=Kt(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){$=Kt(l.nextSibling),n=l.data==="F!";break t}}ca(n)}n=!1}n&&(e=a[0])}}return a=At(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:e},a.queue=n,a=$h.bind(null,x,n),n.dispatch=a,n=so(!1),i=vs.bind(null,x,!1,n.queue),n=At(),l={state:e,dispatch:null,action:t,pending:null},n.queue=l,a=Ag.bind(null,x,l,i,a),l.dispatch=a,n.memoizedState=t,[e,a,!1]}function Or(t){var e=it();return zh(e,V,t)}function zh(t,e,a){if(e=ms(t,e,_h)[0],t=Ql(be)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=dl(e)}catch(u){throw u===hl?Yi:u}else n=e;e=it();var l=e.queue,i=l.dispatch;return a!==e.memoizedState&&(x.flags|=2048,Ja(9,Ii(),Eg.bind(null,l,a),null)),[n,i,t]}function Eg(t,e){t.action=e}function Mr(t){var e=it(),a=V;if(a!==null)return zh(e,a,t);it(),e=e.memoizedState,a=it();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Ja(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=x.updateQueue,e===null&&(e=ds(),x.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Ii(){return{destroy:void 0,resource:void 0}}function Lh(){return it().memoizedState}function Kl(t,e,a,n){var l=At();n=n===void 0?null:n,x.flags|=t,l.memoizedState=Ja(1|e,Ii(),a,n)}function fl(t,e,a,n){var l=it();n=n===void 0?null:n;var i=l.memoizedState.inst;V!==null&&n!==null&&os(n,V.memoizedState.deps)?l.memoizedState=Ja(e,i,a,n):(x.flags|=t,l.memoizedState=Ja(1|e,i,a,n))}function Dr(t,e){Kl(8390656,8,t,e)}function qh(t,e){fl(2048,8,t,e)}function Yh(t,e){return fl(4,2,t,e)}function Gh(t,e){return fl(4,4,t,e)}function Ih(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vh(t,e,a){a=a!=null?a.concat([t]):null,fl(4,4,Ih.bind(null,e,t),a)}function gs(){}function Zh(t,e){var a=it();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&os(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Qh(t,e){var a=it();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&os(e,n[1]))return n[0];if(n=t(),da){je(!0);try{t()}finally{je(!1)}}return a.memoizedState=[n,e],n}function ps(t,e,a){return a===void 0||Qe&1073741824?t.memoizedState=e:(t.memoizedState=a,t=Ud(),x.lanes|=t,Xe|=t,a)}function Kh(t,e,a,n){return Ut(a,e)?a:Xa.current!==null?(t=ps(t,a,n),Ut(t,e)||(dt=!0),t):Qe&42?(t=Ud(),x.lanes|=t,Xe|=t,e):(dt=!0,t.memoizedState=a)}function Xh(t,e,a,n,l){var i=q.p;q.p=i!==0&&8>i?i:8;var u=D.T,o={};D.T=o,vs(t,!1,e,a);try{var s=l(),r=D.S;if(r!==null&&r(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=wg(s,n);Hn(t,e,f,jt(t))}else Hn(t,e,n,jt(t))}catch(g){Hn(t,e,{then:function(){},status:"rejected",reason:g},jt())}finally{q.p=i,D.T=u}}function Cg(){}function co(t,e,a,n){if(t.tag!==5)throw Error(b(476));var l=Jh(t).queue;Xh(t,l,e,na,a===null?Cg:function(){return Wh(t),a(n)})}function Jh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:na,baseState:na,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:be,lastRenderedState:na},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:be,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Wh(t){var e=Jh(t).next.queue;Hn(t,e,{},jt())}function ys(){return vt(Fn)}function Fh(){return it().memoizedState}function Ph(){return it().memoizedState}function Rg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=jt();t=Le(a);var n=qe(e,t,a);n!==null&&(Ht(n,e,a),xn(n,e,a)),e={cache:ns()},t.payload=e;return}e=e.return}}function Og(t,e,a){var n=jt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vi(t)?td(e,a):(a=$o(t,e,a,n),a!==null&&(Ht(a,t,n),ed(a,e,n)))}function $h(t,e,a){var n=jt();Hn(t,e,a,n)}function Hn(t,e,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vi(t))td(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,o=i(u,a);if(l.hasEagerState=!0,l.eagerState=o,Ut(o,u))return qi(t,e,l,0),Q===null&&Li(),!1}catch{}finally{}if(a=$o(t,e,l,n),a!==null)return Ht(a,t,n),ed(a,e,n),!0}return!1}function vs(t,e,a,n){if(n={lane:2,revertLane:Rs(),action:n,hasEagerState:!1,eagerState:null,next:null},Vi(t)){if(e)throw Error(b(479))}else e=$o(t,a,n,2),e!==null&&Ht(e,t,2)}function Vi(t){var e=t.alternate;return t===x||e!==null&&e===x}function td(t,e){qa=di=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function ed(t,e,a){if(a&4194048){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Zc(t,a)}}var mi={readContext:vt,use:Gi,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at},ad={readContext:vt,use:Gi,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:Dr,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Kl(4194308,4,Ih.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){Kl(4,2,t,e)},useMemo:function(t,e){var a=At();e=e===void 0?null:e;var n=t();if(da){je(!0);try{t()}finally{je(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=At();if(a!==void 0){var l=a(e);if(da){je(!0);try{a(e)}finally{je(!1)}}}else l=e;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=Og.bind(null,x,t),[n.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:function(t){t=so(t);var e=t.queue,a=$h.bind(null,x,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:gs,useDeferredValue:function(t,e){var a=At();return ps(a,t,e)},useTransition:function(){var t=so(!1);return t=Xh.bind(null,x,t.queue,!0,!1),At().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=x,l=At();if(L){if(a===void 0)throw Error(b(407));a=a()}else{if(a=e(),Q===null)throw Error(b(349));_&124||Dh(n,e,a)}l.memoizedState=a;var i={value:a,getSnapshot:e};return l.queue=i,Dr(kh.bind(null,n,i,t),[t]),n.flags|=2048,Ja(9,Ii(),Nh.bind(null,n,i,a,e),null),a},useId:function(){var t=At(),e=Q.identifierPrefix;if(L){var a=de,n=he;a=(n&~(1<<32-Bt(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=fi++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Tg++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ys,useFormState:Rr,useActionState:Rr,useOptimistic:function(t){var e=At();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=vs.bind(null,x,!0,a),a.dispatch=e,[t,e]},useMemoCache:fs,useCacheRefresh:function(){return At().memoizedState=Rg.bind(null,x)}},nd={readContext:vt,use:Gi,useCallback:Zh,useContext:vt,useEffect:qh,useImperativeHandle:Vh,useInsertionEffect:Yh,useLayoutEffect:Gh,useMemo:Qh,useReducer:Ql,useRef:Lh,useState:function(){return Ql(be)},useDebugValue:gs,useDeferredValue:function(t,e){var a=it();return Kh(a,V.memoizedState,t,e)},useTransition:function(){var t=Ql(be)[0],e=it().memoizedState;return[typeof t=="boolean"?t:dl(t),e]},useSyncExternalStore:Mh,useId:Fh,useHostTransitionStatus:ys,useFormState:Or,useActionState:Or,useOptimistic:function(t,e){var a=it();return jh(a,V,t,e)},useMemoCache:fs,useCacheRefresh:Ph},Mg={readContext:vt,use:Gi,useCallback:Zh,useContext:vt,useEffect:qh,useImperativeHandle:Vh,useInsertionEffect:Yh,useLayoutEffect:Gh,useMemo:Qh,useReducer:pu,useRef:Lh,useState:function(){return pu(be)},useDebugValue:gs,useDeferredValue:function(t,e){var a=it();return V===null?ps(a,t,e):Kh(a,V.memoizedState,t,e)},useTransition:function(){var t=pu(be)[0],e=it().memoizedState;return[typeof t=="boolean"?t:dl(t),e]},useSyncExternalStore:Mh,useId:Fh,useHostTransitionStatus:ys,useFormState:Mr,useActionState:Mr,useOptimistic:function(t,e){var a=it();return V!==null?jh(a,V,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:fs,useCacheRefresh:Ph},Ga=null,Kn=0;function xl(t){var e=Kn;return Kn+=1,Ga===null&&(Ga=[]),Ah(Ga,t,e)}function pn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bl(t,e){throw e.$$typeof===lm?Error(b(525)):(t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nr(t){var e=t._init;return e(t._payload)}function ld(t){function e(h,c){if(t){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function a(h,c){if(!t)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function n(h){for(var c=new Map;h!==null;)h.key!==null?c.set(h.key,h):c.set(h.index,h),h=h.sibling;return c}function l(h,c){return h=ge(h,c),h.index=0,h.sibling=null,h}function i(h,c,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=67108866,c):m):(h.flags|=67108866,c)):(h.flags|=1048576,c)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function o(h,c,m,y){return c===null||c.tag!==6?(c=fu(m,h.mode,y),c.return=h,c):(c=l(c,m),c.return=h,c)}function s(h,c,m,y){var A=m.type;return A===Ea?f(h,c,m.props.children,y,m.key):c!==null&&(c.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Me&&Nr(A)===c.type)?(c=l(c,m.props),pn(c,m),c.return=h,c):(c=Vl(m.type,m.key,m.props,null,h.mode,y),pn(c,m),c.return=h,c)}function r(h,c,m,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=mu(m,h.mode,y),c.return=h,c):(c=l(c,m.children||[]),c.return=h,c)}function f(h,c,m,y,A){return c===null||c.tag!==7?(c=la(m,h.mode,y,A),c.return=h,c):(c=l(c,m),c.return=h,c)}function g(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=fu(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Cl:return m=Vl(c.type,c.key,c.props,null,h.mode,m),pn(m,c),m.return=h,m;case Tn:return c=mu(c,h.mode,m),c.return=h,c;case Me:var y=c._init;return c=y(c._payload),g(h,c,m)}if(Sn(c)||dn(c))return c=la(c,h.mode,m,null),c.return=h,c;if(typeof c.then=="function")return g(h,xl(c),m);if(c.$$typeof===ce)return g(h,Nl(h,c),m);Bl(h,c)}return null}function d(h,c,m,y){var A=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return A!==null?null:o(h,c,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cl:return m.key===A?s(h,c,m,y):null;case Tn:return m.key===A?r(h,c,m,y):null;case Me:return A=m._init,m=A(m._payload),d(h,c,m,y)}if(Sn(m)||dn(m))return A!==null?null:f(h,c,m,y,null);if(typeof m.then=="function")return d(h,c,xl(m),y);if(m.$$typeof===ce)return d(h,c,Nl(h,m),y);Bl(h,m)}return null}function p(h,c,m,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(m)||null,o(c,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cl:return h=h.get(y.key===null?m:y.key)||null,s(c,h,y,A);case Tn:return h=h.get(y.key===null?m:y.key)||null,r(c,h,y,A);case Me:var M=y._init;return y=M(y._payload),p(h,c,m,y,A)}if(Sn(y)||dn(y))return h=h.get(m)||null,f(c,h,y,A,null);if(typeof y.then=="function")return p(h,c,m,xl(y),A);if(y.$$typeof===ce)return p(h,c,m,Nl(c,y),A);Bl(c,y)}return null}function T(h,c,m,y){for(var A=null,M=null,C=c,O=c=0,z=null;C!==null&&O<m.length;O++){C.index>O?(z=C,C=null):z=C.sibling;var N=d(h,C,m[O],y);if(N===null){C===null&&(C=z);break}t&&C&&N.alternate===null&&e(h,C),c=i(N,c,O),M===null?A=N:M.sibling=N,M=N,C=z}if(O===m.length)return a(h,C),L&&ea(h,O),A;if(C===null){for(;O<m.length;O++)C=g(h,m[O],y),C!==null&&(c=i(C,c,O),M===null?A=C:M.sibling=C,M=C);return L&&ea(h,O),A}for(C=n(C);O<m.length;O++)z=p(C,h,O,m[O],y),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?O:z.key),c=i(z,c,O),M===null?A=z:M.sibling=z,M=z);return t&&C.forEach(function(bt){return e(h,bt)}),L&&ea(h,O),A}function w(h,c,m,y){if(m==null)throw Error(b(151));for(var A=null,M=null,C=c,O=c=0,z=null,N=m.next();C!==null&&!N.done;O++,N=m.next()){C.index>O?(z=C,C=null):z=C.sibling;var bt=d(h,C,N.value,y);if(bt===null){C===null&&(C=z);break}t&&C&&bt.alternate===null&&e(h,C),c=i(bt,c,O),M===null?A=bt:M.sibling=bt,M=bt,C=z}if(N.done)return a(h,C),L&&ea(h,O),A;if(C===null){for(;!N.done;O++,N=m.next())N=g(h,N.value,y),N!==null&&(c=i(N,c,O),M===null?A=N:M.sibling=N,M=N);return L&&ea(h,O),A}for(C=n(C);!N.done;O++,N=m.next())N=p(C,h,O,N.value,y),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?O:N.key),c=i(N,c,O),M===null?A=N:M.sibling=N,M=N);return t&&C.forEach(function(Ee){return e(h,Ee)}),L&&ea(h,O),A}function E(h,c,m,y){if(typeof m=="object"&&m!==null&&m.type===Ea&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Cl:t:{for(var A=m.key;c!==null;){if(c.key===A){if(A=m.type,A===Ea){if(c.tag===7){a(h,c.sibling),y=l(c,m.props.children),y.return=h,h=y;break t}}else if(c.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Me&&Nr(A)===c.type){a(h,c.sibling),y=l(c,m.props),pn(y,m),y.return=h,h=y;break t}a(h,c);break}else e(h,c);c=c.sibling}m.type===Ea?(y=la(m.props.children,h.mode,y,m.key),y.return=h,h=y):(y=Vl(m.type,m.key,m.props,null,h.mode,y),pn(y,m),y.return=h,h=y)}return u(h);case Tn:t:{for(A=m.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(h,c.sibling),y=l(c,m.children||[]),y.return=h,h=y;break t}else{a(h,c);break}else e(h,c);c=c.sibling}y=mu(m,h.mode,y),y.return=h,h=y}return u(h);case Me:return A=m._init,m=A(m._payload),E(h,c,m,y)}if(Sn(m))return T(h,c,m,y);if(dn(m)){if(A=dn(m),typeof A!="function")throw Error(b(150));return m=A.call(m),w(h,c,m,y)}if(typeof m.then=="function")return E(h,c,xl(m),y);if(m.$$typeof===ce)return E(h,c,Nl(h,m),y);Bl(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(a(h,c.sibling),y=l(c,m),y.return=h,h=y):(a(h,c),y=fu(m,h.mode,y),y.return=h,h=y),u(h)):a(h,c)}return function(h,c,m,y){try{Kn=0;var A=E(h,c,m,y);return Ga=null,A}catch(C){if(C===hl||C===Yi)throw C;var M=kt(29,C,null,h.mode);return M.lanes=y,M.return=h,M}finally{}}}var Wa=ld(!0),id=ld(!1),Vt=ae(null),te=null;function ke(t){var e=t.alternate;W(ot,ot.current&1),W(Vt,t),te===null&&(e===null||Xa.current!==null||e.memoizedState!==null)&&(te=t)}function ud(t){if(t.tag===22){if(W(ot,ot.current),W(Vt,t),te===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(te=t)}}else xe()}function xe(){W(ot,ot.current),W(Vt,Vt.current)}function me(t){ft(Vt),te===t&&(te=null),ft(ot)}var ot=ae(0);function gi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Mo(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function yu(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:K({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ho={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=jt(),l=Le(n);l.payload=e,a!=null&&(l.callback=a),e=qe(t,l,n),e!==null&&(Ht(e,t,n),xn(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=jt(),l=Le(n);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=qe(t,l,n),e!==null&&(Ht(e,t,n),xn(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=jt(),n=Le(a);n.tag=2,e!=null&&(n.callback=e),e=qe(t,n,a),e!==null&&(Ht(e,t,a),xn(e,t,a))}};function kr(t,e,a,n,l,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,u):e.prototype&&e.prototype.isPureReactComponent?!Vn(a,n)||!Vn(l,i):!0}function xr(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&ho.enqueueReplaceState(e,e.state,null)}function fa(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=K({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var pi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function od(t){pi(t)}function sd(t){console.error(t)}function rd(t){pi(t)}function yi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Br(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function fo(t,e,a){return a=Le(a),a.tag=3,a.payload={element:null},a.callback=function(){yi(t,e)},a}function cd(t){return t=Le(t),t.tag=3,t}function hd(t,e,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){Br(e,a,n)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Br(e,a,n),typeof l!="function"&&(Ye===null?Ye=new Set([this]):Ye.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Dg(t,e,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&rl(e,a,l,!0),a=Vt.current,a!==null){switch(a.tag){case 13:return te===null?To():a.alternate===null&&tt===0&&(tt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===lo?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Mu(t,n,l)),!1;case 22:return a.flags|=65536,n===lo?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Mu(t,n,l)),!1}throw Error(b(435,a.tag))}return Mu(t,n,l),To(),!1}if(L)return e=Vt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,n!==$u&&(t=Error(b(422),{cause:n}),Zn(Gt(t,a)))):(n!==$u&&(e=Error(b(423),{cause:n}),Zn(Gt(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=Gt(n,a),l=fo(t.stateNode,n,l),gu(t,l),tt!==4&&(tt=2)),!1;var i=Error(b(520),{cause:n});if(i=Gt(i,a),zn===null?zn=[i]:zn.push(i),tt!==4&&(tt=2),e===null)return!0;n=Gt(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=fo(a.stateNode,n,t),gu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ye===null||!Ye.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=cd(l),hd(l,t,a,n),gu(a,l),!1}a=a.return}while(a!==null);return!1}var dd=Error(b(461)),dt=!1;function mt(t,e,a,n){e.child=t===null?id(e,null,a,n):Wa(e,t.child,a,n)}function jr(t,e,a,n,l){a=a.render;var i=e.ref;if("ref"in n){var u={};for(var o in n)o!=="ref"&&(u[o]=n[o])}else u=n;return ha(e),n=ss(t,e,a,u,i,l),o=rs(),t!==null&&!dt?(cs(t,e,l),we(t,e,l)):(L&&o&&es(e),e.flags|=1,mt(t,e,n,l),e.child)}function Hr(t,e,a,n,l){if(t===null){var i=a.type;return typeof i=="function"&&!ts(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,fd(t,e,i,n,l)):(t=Vl(a.type,null,n,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!bs(t,l)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(u,n)&&t.ref===e.ref)return we(t,e,l)}return e.flags|=1,t=ge(i,n),t.ref=e.ref,t.return=e,e.child=t}function fd(t,e,a,n,l){if(t!==null){var i=t.memoizedProps;if(Vn(i,n)&&t.ref===e.ref)if(dt=!1,e.pendingProps=n=i,bs(t,l))t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,we(t,e,l)}return mo(t,e,a,n,l)}function md(t,e,a){var n=e.pendingProps,l=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if(e.flags&128){if(n=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;e.childLanes=i&~n}else e.childLanes=0,e.child=null;return Ur(t,e,n,a)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(e,i!==null?i.cachePool:null),i!==null?Ar(e,i):oo(),ud(e);else return e.lanes=e.childLanes=536870912,Ur(t,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(Zl(e,i.cachePool),Ar(e,i),xe(),e.memoizedState=null):(t!==null&&Zl(e,null),oo(),xe());return mt(t,e,l,a),e.child}function Ur(t,e,a,n){var l=ls();return l=l===null?null:{parent:ut._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&Zl(e,null),oo(),ud(e),t!==null&&rl(t,e,n,!0),null}function Xl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(b(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function mo(t,e,a,n,l){return ha(e),a=ss(t,e,a,n,void 0,l),n=rs(),t!==null&&!dt?(cs(t,e,l),we(t,e,l)):(L&&n&&es(e),e.flags|=1,mt(t,e,a,l),e.child)}function _r(t,e,a,n,l,i){return ha(e),e.updateQueue=null,a=Oh(e,n,a,l),Rh(t),n=rs(),t!==null&&!dt?(cs(t,e,i),we(t,e,i)):(L&&n&&es(e),e.flags|=1,mt(t,e,a,i),e.child)}function zr(t,e,a,n,l){if(ha(e),e.stateNode===null){var i=xa,u=a.contextType;typeof u=="object"&&u!==null&&(i=vt(u)),i=new a(n,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ho,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=n,i.state=e.memoizedState,i.refs={},is(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?vt(u):xa,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(yu(e,a,u,n),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ho.enqueueReplaceState(i,i.state,null),jn(e,n,i,l),Bn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,s=fa(a,o);i.props=s;var r=i.context,f=a.contextType;u=xa,typeof f=="object"&&f!==null&&(u=vt(f));var g=a.getDerivedStateFromProps;f=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||r!==u)&&xr(e,i,n,u),De=!1;var d=e.memoizedState;i.state=d,jn(e,n,i,l),Bn(),r=e.memoizedState,o||d!==r||De?(typeof g=="function"&&(yu(e,a,g,n),r=e.memoizedState),(s=De||kr(e,a,s,n,d,r,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=r),i.props=n,i.state=r,i.context=u,n=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,io(t,e),u=e.memoizedProps,f=fa(a,u),i.props=f,g=e.pendingProps,d=i.context,r=a.contextType,s=xa,typeof r=="object"&&r!==null&&(s=vt(r)),o=a.getDerivedStateFromProps,(r=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==g||d!==s)&&xr(e,i,n,s),De=!1,d=e.memoizedState,i.state=d,jn(e,n,i,l),Bn();var p=e.memoizedState;u!==g||d!==p||De||t!==null&&t.dependencies!==null&&ci(t.dependencies)?(typeof o=="function"&&(yu(e,a,o,n),p=e.memoizedState),(f=De||kr(e,a,f,n,d,p,s)||t!==null&&t.dependencies!==null&&ci(t.dependencies))?(r||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,p,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,p,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=p),i.props=n,i.state=p,i.context=s,n=f):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),n=!1)}return i=n,Xl(t,e),n=(e.flags&128)!==0,i||n?(i=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&n?(e.child=Wa(e,t.child,null,l),e.child=Wa(e,null,a,l)):mt(t,e,a,l),e.memoizedState=i.state,t=e.child):t=we(t,e,l),t}function Lr(t,e,a,n){return sl(),e.flags|=256,mt(t,e,a,n),e.child}var vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bu(t){return{baseLanes:t,cachePool:Th()}}function wu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=It),t}function gd(t,e,a){var n=e.pendingProps,l=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(ot.current&2)!==0),u&&(l=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(L){if(l?ke(e):xe(),L){var o=$,s;if(s=o){t:{for(s=o,o=Wt;s.nodeType!==8;){if(!o){o=null;break t}if(s=Kt(s.nextSibling),s===null){o=null;break t}}o=s}o!==null?(e.memoizedState={dehydrated:o,treeContext:ia!==null?{id:he,overflow:de}:null,retryLane:536870912,hydrationErrors:null},s=kt(18,null,null,0),s.stateNode=o,s.return=e,e.child=s,wt=e,$=null,s=!0):s=!1}s||ca(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Mo(o)?e.lanes=32:e.lanes=536870912,null;me(e)}return o=n.children,n=n.fallback,l?(xe(),l=e.mode,o=vi({mode:"hidden",children:o},l),n=la(n,l,a,null),o.return=e,n.return=e,o.sibling=n,e.child=o,l=e.child,l.memoizedState=bu(a),l.childLanes=wu(t,u,a),e.memoizedState=vu,n):(ke(e),go(e,o))}if(s=t.memoizedState,s!==null&&(o=s.dehydrated,o!==null)){if(i)e.flags&256?(ke(e),e.flags&=-257,e=Tu(t,e,a)):e.memoizedState!==null?(xe(),e.child=t.child,e.flags|=128,e=null):(xe(),l=n.fallback,o=e.mode,n=vi({mode:"visible",children:n.children},o),l=la(l,o,a,null),l.flags|=2,n.return=e,l.return=e,n.sibling=l,e.child=n,Wa(e,t.child,null,a),n=e.child,n.memoizedState=bu(a),n.childLanes=wu(t,u,a),e.memoizedState=vu,e=l);else if(ke(e),Mo(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var r=u.dgst;u=r,n=Error(b(419)),n.stack="",n.digest=u,Zn({value:n,source:null,stack:null}),e=Tu(t,e,a)}else if(dt||rl(t,e,a,!1),u=(a&t.childLanes)!==0,dt||u){if(u=Q,u!==null&&(n=a&-a,n=n&42?1:Io(n),n=n&(u.suspendedLanes|a)?0:n,n!==0&&n!==s.retryLane))throw s.retryLane=n,un(t,n),Ht(u,t,n),dd;o.data==="$?"||To(),e=Tu(t,e,a)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,$=Kt(o.nextSibling),wt=e,L=!0,ua=null,Wt=!1,t!==null&&(Lt[qt++]=he,Lt[qt++]=de,Lt[qt++]=ia,he=t.id,de=t.overflow,ia=e),e=go(e,n.children),e.flags|=4096);return e}return l?(xe(),l=n.fallback,o=e.mode,s=t.child,r=s.sibling,n=ge(s,{mode:"hidden",children:n.children}),n.subtreeFlags=s.subtreeFlags&65011712,r!==null?l=ge(r,l):(l=la(l,o,a,null),l.flags|=2),l.return=e,n.return=e,n.sibling=l,e.child=n,n=l,l=e.child,o=t.child.memoizedState,o===null?o=bu(a):(s=o.cachePool,s!==null?(r=ut._currentValue,s=s.parent!==r?{parent:r,pool:r}:s):s=Th(),o={baseLanes:o.baseLanes|a,cachePool:s}),l.memoizedState=o,l.childLanes=wu(t,u,a),e.memoizedState=vu,n):(ke(e),a=t.child,t=a.sibling,a=ge(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function go(t,e){return e=vi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vi(t,e){return t=kt(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tu(t,e,a){return Wa(e,t.child,null,a),t=go(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qr(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),eo(t.return,e,a)}function Su(t,e,a,n,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function pd(t,e,a){var n=e.pendingProps,l=n.revealOrder,i=n.tail;if(mt(t,e,n.children,a),n=ot.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qr(t,a,e);else if(t.tag===19)qr(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(W(ot,n),l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&gi(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Su(e,!1,l,a,i);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&gi(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Su(e,!0,a,null,i);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function we(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Xe|=e.lanes,!(a&e.childLanes))if(t!==null){if(rl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,a=ge(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ge(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function bs(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&ci(t)))}function Ng(t,e,a){switch(e.tag){case 3:ai(e,e.stateNode.containerInfo),Ne(e,ut,t.memoizedState.cache),sl();break;case 27:case 5:Iu(e);break;case 4:ai(e,e.stateNode.containerInfo);break;case 10:Ne(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(ke(e),e.flags|=128,null):a&e.child.childLanes?gd(t,e,a):(ke(e),t=we(t,e,a),t!==null?t.sibling:null);ke(e);break;case 19:var l=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(rl(t,e,a,!1),n=(a&e.childLanes)!==0),l){if(n)return pd(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(ot,ot.current),n)break;return null;case 22:case 23:return e.lanes=0,md(t,e,a);case 24:Ne(e,ut,t.memoizedState.cache)}return we(t,e,a)}function yd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)dt=!0;else{if(!bs(t,a)&&!(e.flags&128))return dt=!1,Ng(t,e,a);dt=!!(t.flags&131072)}else dt=!1,L&&e.flags&1048576&&bh(e,ri,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,l=n._init;if(n=l(n._payload),e.type=n,typeof n=="function")ts(n)?(t=fa(n,t),e.tag=1,e=zr(null,e,n,t,a)):(e.tag=0,e=mo(null,e,n,t,a));else{if(n!=null){if(l=n.$$typeof,l===qo){e.tag=11,e=jr(null,e,n,t,a);break t}else if(l===Yo){e.tag=14,e=Hr(null,e,n,t,a);break t}}throw e=Yu(n)||n,Error(b(306,e,""))}}return e;case 0:return mo(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,l=fa(n,e.pendingProps),zr(t,e,n,l,a);case 3:t:{if(ai(e,e.stateNode.containerInfo),t===null)throw Error(b(387));n=e.pendingProps;var i=e.memoizedState;l=i.element,io(t,e),jn(e,n,null,a);var u=e.memoizedState;if(n=u.cache,Ne(e,ut,n),n!==i.cache&&ao(e,[ut],a,!0),Bn(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Lr(t,e,n,a);break t}else if(n!==l){l=Gt(Error(b(424)),e),Zn(l),e=Lr(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($=Kt(t.firstChild),wt=e,L=!0,ua=null,Wt=!0,a=id(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(sl(),n===l){e=we(t,e,a);break t}mt(t,e,n,a)}e=e.child}return e;case 26:return Xl(t,e),t===null?(a=nc(e.type,null,e.pendingProps,null))?e.memoizedState=a:L||(a=e.type,t=e.pendingProps,n=Ci(ze.current).createElement(a),n[yt]=e,n[Rt]=t,pt(n,a,t),ht(n),e.stateNode=n):e.memoizedState=nc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Iu(e),t===null&&L&&(n=e.stateNode=nf(e.type,e.pendingProps,ze.current),wt=e,Wt=!0,l=$,We(e.type)?(Do=l,$=Kt(n.firstChild)):$=l),mt(t,e,e.pendingProps.children,a),Xl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&L&&((l=n=$)&&(n=lp(n,e.type,e.pendingProps,Wt),n!==null?(e.stateNode=n,wt=e,$=Kt(n.firstChild),Wt=!1,l=!0):l=!1),l||ca(e)),Iu(e),l=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,n=i.children,Ro(l,i)?n=null:u!==null&&Ro(l,u)&&(e.flags|=32),e.memoizedState!==null&&(l=ss(t,e,Sg,null,null,a),Fn._currentValue=l),Xl(t,e),mt(t,e,n,a),e.child;case 6:return t===null&&L&&((t=a=$)&&(a=ip(a,e.pendingProps,Wt),a!==null?(e.stateNode=a,wt=e,$=null,t=!0):t=!1),t||ca(e)),null;case 13:return gd(t,e,a);case 4:return ai(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Wa(e,null,n,a):mt(t,e,n,a),e.child;case 11:return jr(t,e,e.type,e.pendingProps,a);case 7:return mt(t,e,e.pendingProps,a),e.child;case 8:return mt(t,e,e.pendingProps.children,a),e.child;case 12:return mt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Ne(e,e.type,n.value),mt(t,e,n.children,a),e.child;case 9:return l=e.type._context,n=e.pendingProps.children,ha(e),l=vt(l),n=n(l),e.flags|=1,mt(t,e,n,a),e.child;case 14:return Hr(t,e,e.type,e.pendingProps,a);case 15:return fd(t,e,e.type,e.pendingProps,a);case 19:return pd(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=vi(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=ge(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return md(t,e,a);case 24:return ha(e),n=vt(ut),t===null?(l=ls(),l===null&&(l=Q,i=ns(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),e.memoizedState={parent:n,cache:l},is(e),Ne(e,ut,l)):(t.lanes&a&&(io(t,e),jn(e,null,null,a),Bn()),l=t.memoizedState,i=e.memoizedState,l.parent!==n?(l={parent:n,cache:n},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ne(e,ut,n)):(n=i.cache,Ne(e,ut,n),n!==l.cache&&ao(e,[ut],a,!0))),mt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(b(156,e.tag))}function oe(t){t.flags|=4}function Yr(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!of(e)){if(e=Vt.current,e!==null&&((_&4194048)===_?te!==null:(_&62914560)!==_&&!(_&536870912)||e!==te))throw kn=lo,Sh;t.flags|=8192}}function jl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ic():536870912,t.lanes|=e,Fa|=e)}function yn(t,e){if(!L)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function F(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function kg(t,e,a){var n=e.pendingProps;switch(as(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return F(e),null;case 1:return F(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),pe(ut),Va(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(gn(e)?oe(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yr())),F(e),null;case 26:return a=e.memoizedState,t===null?(oe(e),a!==null?(F(e),Yr(e,a)):(F(e),e.flags&=-16777217)):a?a!==t.memoizedState?(oe(e),F(e),Yr(e,a)):(F(e),e.flags&=-16777217):(t.memoizedProps!==n&&oe(e),F(e),e.flags&=-16777217),null;case 27:ni(e),a=ze.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&oe(e);else{if(!n){if(e.stateNode===null)throw Error(b(166));return F(e),null}t=Pt.current,gn(e)?gr(e):(t=nf(l,n,a),e.stateNode=t,oe(e))}return F(e),null;case 5:if(ni(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&oe(e);else{if(!n){if(e.stateNode===null)throw Error(b(166));return F(e),null}if(t=Pt.current,gn(e))gr(e);else{switch(l=Ci(ze.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}t[yt]=e,t[Rt]=n;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(pt(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&oe(e)}}return F(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&oe(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(b(166));if(t=ze.current,gn(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,l=wt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[yt]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||tf(t.nodeValue,a)),t||ca(e)}else t=Ci(t).createTextNode(n),t[yt]=e,e.stateNode=t}return F(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=gn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(b(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));l[yt]=e}else sl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;F(e),l=!1}else l=yr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(me(e),e):(me(e),null)}if(me(e),e.flags&128)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),jl(e,e.updateQueue),F(e),null;case 4:return Va(),t===null&&Os(e.stateNode.containerInfo),F(e),null;case 10:return pe(e.type),F(e),null;case 19:if(ft(ot),l=e.memoizedState,l===null)return F(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)yn(l,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=gi(t),i!==null){for(e.flags|=128,yn(l,!1),t=i.updateQueue,e.updateQueue=t,jl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)vh(a,t),a=a.sibling;return W(ot,ot.current&1|2),e.child}t=t.sibling}l.tail!==null&&$t()>wi&&(e.flags|=128,n=!0,yn(l,!1),e.lanes=4194304)}else{if(!n)if(t=gi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,jl(e,t),yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!L)return F(e),null}else 2*$t()-l.renderingStartTime>wi&&a!==536870912&&(e.flags|=128,n=!0,yn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=$t(),e.sibling=null,t=ot.current,W(ot,n?t&1|2:t&1),e):(F(e),null);case 22:case 23:return me(e),us(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?a&536870912&&!(e.flags&128)&&(F(e),e.subtreeFlags&6&&(e.flags|=8192)):F(e),a=e.updateQueue,a!==null&&jl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&ft(oa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),pe(ut),F(e),null;case 25:return null;case 30:return null}throw Error(b(156,e.tag))}function xg(t,e){switch(as(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pe(ut),Va(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ni(e),null;case 13:if(me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));sl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(ot),null;case 4:return Va(),null;case 10:return pe(e.type),null;case 22:case 23:return me(e),us(),t!==null&&ft(oa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return pe(ut),null;case 25:return null;default:return null}}function vd(t,e){switch(as(e),e.tag){case 3:pe(ut),Va();break;case 26:case 27:case 5:ni(e);break;case 4:Va();break;case 13:me(e);break;case 19:ft(ot);break;case 10:pe(e.type);break;case 22:case 23:me(e),us(),t!==null&&ft(oa);break;case 24:pe(ut)}}function ml(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&t)===t){n=void 0;var i=a.create,u=a.inst;n=i(),u.destroy=n}a=a.next}while(a!==l)}}catch(o){Z(e,e.return,o)}}function Ke(t,e,a){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&t)===t){var u=n.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,l=e;var s=a,r=o;try{r()}catch(f){Z(l,s,f)}}}n=n.next}while(n!==i)}}catch(f){Z(e,e.return,f)}}function bd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ch(e,a)}catch(n){Z(t,t.return,n)}}}function wd(t,e,a){a.props=fa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Z(t,e,n)}}function Un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(l){Z(t,e,l)}}function Ft(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Z(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Z(t,e,l)}else a.current=null}function Td(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Z(t,t.return,l)}}function Au(t,e,a){try{var n=t.stateNode;$g(n,t.type,a,e),n[Rt]=e}catch(l){Z(t,t.return,l)}}function Sd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&We(t.type)||t.tag===4}function Eu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Sd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&We(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function po(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Xi));else if(n!==4&&(n===27&&We(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(po(t,e,a),t=t.sibling;t!==null;)po(t,e,a),t=t.sibling}function bi(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&We(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bi(t,e,a),t=t.sibling;t!==null;)bi(t,e,a),t=t.sibling}function Ad(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);pt(e,n,a),e[yt]=t,e[Rt]=a}catch(i){Z(t,t.return,i)}}var re=!1,nt=!1,Cu=!1,Gr=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Bg(t,e){if(t=t.containerInfo,Eo=Di,t=ch(t),Fo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,o=-1,s=-1,r=0,f=0,g=t,d=null;e:for(;;){for(var p;g!==a||l!==0&&g.nodeType!==3||(o=u+l),g!==i||n!==0&&g.nodeType!==3||(s=u+n),g.nodeType===3&&(u+=g.nodeValue.length),(p=g.firstChild)!==null;)d=g,g=p;for(;;){if(g===t)break e;if(d===a&&++r===l&&(o=u),d===i&&++f===n&&(s=u),(p=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=p}a=o===-1||s===-1?null:{start:o,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Co={focusedElem:t,selectionRange:a},Di=!1,ct=e;ct!==null;)if(e=ct,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ct=t;else for(;ct!==null;){switch(e=ct,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,a=e,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var T=fa(a.type,l,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(T,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(w){Z(a,a.return,w)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Oo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(b(163))}if(t=e.sibling,t!==null){t.return=e.return,ct=t;break}ct=e.return}}function Ed(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Re(t,a),n&4&&ml(5,a);break;case 1:if(Re(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){Z(a,a.return,u)}else{var l=fa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Z(a,a.return,u)}}n&64&&bd(a),n&512&&Un(a,a.return);break;case 3:if(Re(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ch(t,e)}catch(u){Z(a,a.return,u)}}break;case 27:e===null&&n&4&&Ad(a);case 26:case 5:Re(t,a),e===null&&n&4&&Td(a),n&512&&Un(a,a.return);break;case 12:Re(t,a);break;case 13:Re(t,a),n&4&&Od(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Gg.bind(null,a),up(t,a))));break;case 22:if(n=a.memoizedState!==null||re,!n){e=e!==null&&e.memoizedState!==null||nt,l=re;var i=nt;re=n,(nt=e)&&!i?Oe(t,a,(a.subtreeFlags&8772)!==0):Re(t,a),re=l,nt=i}break;case 30:break;default:Re(t,a)}}function Cd(t){var e=t.alternate;e!==null&&(t.alternate=null,Cd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Zo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var X=null,Et=!1;function se(t,e,a){for(a=a.child;a!==null;)Rd(t,e,a),a=a.sibling}function Rd(t,e,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(nl,a)}catch{}switch(a.tag){case 26:nt||Ft(a,e),se(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nt||Ft(a,e);var n=X,l=Et;We(a.type)&&(X=a.stateNode,Et=!1),se(t,e,a),qn(a.stateNode),X=n,Et=l;break;case 5:nt||Ft(a,e);case 6:if(n=X,l=Et,X=null,se(t,e,a),X=n,Et=l,X!==null)if(Et)try{(X.nodeType===9?X.body:X.nodeName==="HTML"?X.ownerDocument.body:X).removeChild(a.stateNode)}catch(i){Z(a,e,i)}else try{X.removeChild(a.stateNode)}catch(i){Z(a,e,i)}break;case 18:X!==null&&(Et?(t=X,tc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),tl(t)):tc(X,a.stateNode));break;case 4:n=X,l=Et,X=a.stateNode.containerInfo,Et=!0,se(t,e,a),X=n,Et=l;break;case 0:case 11:case 14:case 15:nt||Ke(2,a,e),nt||Ke(4,a,e),se(t,e,a);break;case 1:nt||(Ft(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&wd(a,e,n)),se(t,e,a);break;case 21:se(t,e,a);break;case 22:nt=(n=nt)||a.memoizedState!==null,se(t,e,a),nt=n;break;default:se(t,e,a)}}function Od(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tl(t)}catch(a){Z(e,e.return,a)}}function jg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Gr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Gr),e;default:throw Error(b(435,t.tag))}}function Ru(t,e){var a=jg(t);e.forEach(function(n){var l=Ig.bind(null,t,n);a.has(n)||(a.add(n),n.then(l,l))})}function Mt(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=t,u=e,o=u;t:for(;o!==null;){switch(o.tag){case 27:if(We(o.type)){X=o.stateNode,Et=!1;break t}break;case 5:X=o.stateNode,Et=!1;break t;case 3:case 4:X=o.stateNode.containerInfo,Et=!0;break t}o=o.return}if(X===null)throw Error(b(160));Rd(i,u,l),X=null,Et=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Md(e,t),e=e.sibling}var Qt=null;function Md(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mt(e,t),Dt(t),n&4&&(Ke(3,t,t.return),ml(3,t),Ke(5,t,t.return));break;case 1:Mt(e,t),Dt(t),n&512&&(nt||a===null||Ft(a,a.return)),n&64&&re&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Qt;if(Mt(e,t),Dt(t),n&512&&(nt||a===null||Ft(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ul]||i[yt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),pt(i,n,a),i[yt]=t,ht(i),n=i;break t;case"link":var u=ic("link","href",l).get(n+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break e}}i=l.createElement(n),pt(i,n,a),l.head.appendChild(i);break;case"meta":if(u=ic("meta","content",l).get(n+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break e}}i=l.createElement(n),pt(i,n,a),l.head.appendChild(i);break;default:throw Error(b(468,n))}i[yt]=t,ht(i),n=i}t.stateNode=n}else uc(l,t.type,t.stateNode);else t.stateNode=lc(l,n,t.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?uc(l,t.type,t.stateNode):lc(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Au(t,t.memoizedProps,a.memoizedProps)}break;case 27:Mt(e,t),Dt(t),n&512&&(nt||a===null||Ft(a,a.return)),a!==null&&n&4&&Au(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Mt(e,t),Dt(t),n&512&&(nt||a===null||Ft(a,a.return)),t.flags&32){l=t.stateNode;try{Qa(l,"")}catch(p){Z(t,t.return,p)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,Au(t,l,a!==null?a.memoizedProps:l)),n&1024&&(Cu=!0);break;case 6:if(Mt(e,t),Dt(t),n&4){if(t.stateNode===null)throw Error(b(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(p){Z(t,t.return,p)}}break;case 3:if(Fl=null,l=Qt,Qt=Ri(e.containerInfo),Mt(e,t),Qt=l,Dt(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(p){Z(t,t.return,p)}Cu&&(Cu=!1,Dd(t));break;case 4:n=Qt,Qt=Ri(t.stateNode.containerInfo),Mt(e,t),Dt(t),Qt=n;break;case 12:Mt(e,t),Dt(t);break;case 13:Mt(e,t),Dt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Es=$t()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 22:l=t.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,r=re,f=nt;if(re=r||l,nt=f||s,Mt(e,t),nt=f,re=r,Dt(t),n&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(a===null||s||re||nt||aa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){s=a=e;try{if(i=s.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=s.stateNode;var g=s.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(p){Z(s,s.return,p)}}}else if(e.tag===6){if(a===null){s=e;try{s.stateNode.nodeValue=l?"":s.memoizedProps}catch(p){Z(s,s.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ru(t,a))));break;case 19:Mt(e,t),Dt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 30:break;case 21:break;default:Mt(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Sd(n)){a=n;break}n=n.return}if(a==null)throw Error(b(160));switch(a.tag){case 27:var l=a.stateNode,i=Eu(t);bi(t,i,l);break;case 5:var u=a.stateNode;a.flags&32&&(Qa(u,""),a.flags&=-33);var o=Eu(t);bi(t,o,u);break;case 3:case 4:var s=a.stateNode.containerInfo,r=Eu(t);po(t,r,s);break;default:throw Error(b(161))}}catch(f){Z(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Dd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Re(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ed(t,e.alternate,e),e=e.sibling}function aa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ke(4,e,e.return),aa(e);break;case 1:Ft(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&wd(e,e.return,a),aa(e);break;case 27:qn(e.stateNode);case 26:case 5:Ft(e,e.return),aa(e);break;case 22:e.memoizedState===null&&aa(e);break;case 30:aa(e);break;default:aa(e)}t=t.sibling}}function Oe(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,l=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Oe(l,i,a),ml(4,i);break;case 1:if(Oe(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(r){Z(n,n.return,r)}if(n=i,l=n.updateQueue,l!==null){var o=n.stateNode;try{var s=l.shared.hiddenCallbacks;if(s!==null)for(l.shared.hiddenCallbacks=null,l=0;l<s.length;l++)Eh(s[l],o)}catch(r){Z(n,n.return,r)}}a&&u&64&&bd(i),Un(i,i.return);break;case 27:Ad(i);case 26:case 5:Oe(l,i,a),a&&n===null&&u&4&&Td(i),Un(i,i.return);break;case 12:Oe(l,i,a);break;case 13:Oe(l,i,a),a&&u&4&&Od(l,i);break;case 22:i.memoizedState===null&&Oe(l,i,a),Un(i,i.return);break;case 30:break;default:Oe(l,i,a)}e=e.sibling}}function ws(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&cl(a))}function Ts(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&cl(t))}function Jt(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nd(t,e,a,n),e=e.sibling}function Nd(t,e,a,n){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Jt(t,e,a,n),l&2048&&ml(9,e);break;case 1:Jt(t,e,a,n);break;case 3:Jt(t,e,a,n),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&cl(t)));break;case 12:if(l&2048){Jt(t,e,a,n),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){Z(e,e.return,s)}}else Jt(t,e,a,n);break;case 13:Jt(t,e,a,n);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?Jt(t,e,a,n):_n(t,e):i._visibility&2?Jt(t,e,a,n):(i._visibility|=2,Sa(t,e,a,n,(e.subtreeFlags&10256)!==0)),l&2048&&ws(u,e);break;case 24:Jt(t,e,a,n),l&2048&&Ts(e.alternate,e);break;default:Jt(t,e,a,n)}}function Sa(t,e,a,n,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,u=e,o=a,s=n,r=u.flags;switch(u.tag){case 0:case 11:case 15:Sa(i,u,o,s,l),ml(8,u);break;case 23:break;case 22:var f=u.stateNode;u.memoizedState!==null?f._visibility&2?Sa(i,u,o,s,l):_n(i,u):(f._visibility|=2,Sa(i,u,o,s,l)),l&&r&2048&&ws(u.alternate,u);break;case 24:Sa(i,u,o,s,l),l&&r&2048&&Ts(u.alternate,u);break;default:Sa(i,u,o,s,l)}e=e.sibling}}function _n(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,l=n.flags;switch(n.tag){case 22:_n(a,n),l&2048&&ws(n.alternate,n);break;case 24:_n(a,n),l&2048&&Ts(n.alternate,n);break;default:_n(a,n)}e=e.sibling}}var En=8192;function va(t){if(t.subtreeFlags&En)for(t=t.child;t!==null;)kd(t),t=t.sibling}function kd(t){switch(t.tag){case 26:va(t),t.flags&En&&t.memoizedState!==null&&bp(Qt,t.memoizedState,t.memoizedProps);break;case 5:va(t);break;case 3:case 4:var e=Qt;Qt=Ri(t.stateNode.containerInfo),va(t),Qt=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=En,En=16777216,va(t),En=e):va(t));break;default:va(t)}}function xd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];ct=n,jd(n,t)}xd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bd(t),t=t.sibling}function Bd(t){switch(t.tag){case 0:case 11:case 15:vn(t),t.flags&2048&&Ke(9,t,t.return);break;case 3:vn(t);break;case 12:vn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Jl(t)):vn(t);break;default:vn(t)}}function Jl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];ct=n,jd(n,t)}xd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ke(8,e,e.return),Jl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(e));break;default:Jl(e)}t=t.sibling}}function jd(t,e){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Ke(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:cl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ct=n;else t:for(a=t;ct!==null;){n=ct;var l=n.sibling,i=n.return;if(Cd(n),n===a){ct=null;break t}if(l!==null){l.return=i,ct=l;break t}ct=i}}}var Hg={getCacheForType:function(t){var e=vt(ut),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Ug=typeof WeakMap=="function"?WeakMap:Map,G=0,Q=null,U=null,_=0,Y=0,Nt=null,Ue=!1,on=!1,Ss=!1,Te=0,tt=0,Xe=0,sa=0,As=0,It=0,Fa=0,zn=null,Ct=null,yo=!1,Es=0,wi=1/0,Ti=null,Ye=null,gt=0,Ge=null,Pa=null,Ia=0,vo=0,bo=null,Hd=null,Ln=0,wo=null;function jt(){if(G&2&&_!==0)return _&-_;if(D.T!==null){var t=Ka;return t!==0?t:Rs()}return Qc()}function Ud(){It===0&&(It=!(_&536870912)||L?Gc():536870912);var t=Vt.current;return t!==null&&(t.flags|=32),It}function Ht(t,e,a){(t===Q&&(Y===2||Y===9)||t.cancelPendingCommit!==null)&&($a(t,0),_e(t,_,It,!1)),il(t,a),(!(G&2)||t!==Q)&&(t===Q&&(!(G&2)&&(sa|=a),tt===4&&_e(t,_,It,!1)),ne(t))}function _d(t,e,a){if(G&6)throw Error(b(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||ll(t,e),l=n?Lg(t,e):Ou(t,e,!0),i=n;do{if(l===0){on&&!n&&_e(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!_g(a)){l=Ou(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var o=t;l=zn;var s=o.current.memoizedState.isDehydrated;if(s&&($a(o,u).flags|=256),u=Ou(o,u,!1),u!==2){if(Ss&&!s){o.errorRecoveryDisabledLanes|=i,sa|=i,l=4;break t}i=Ct,Ct=l,i!==null&&(Ct===null?Ct=i:Ct.push.apply(Ct,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){$a(t,0),_e(t,e,0,!0);break}t:{switch(n=t,i=l,i){case 0:case 1:throw Error(b(345));case 4:if((e&4194048)!==e)break;case 6:_e(n,e,It,!Ue);break t;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(b(329))}if((e&62914560)===e&&(l=Es+300-$t(),10<l)){if(_e(n,e,It,!Ue),Hi(n,0,!0)!==0)break t;n.timeoutHandle=af(Ir.bind(null,n,a,Ct,Ti,yo,e,It,sa,Fa,Ue,i,2,-0,0),l);break t}Ir(n,a,Ct,Ti,yo,e,It,sa,Fa,Ue,i,0,-0,0)}}break}while(!0);ne(t)}function Ir(t,e,a,n,l,i,u,o,s,r,f,g,d,p){if(t.timeoutHandle=-1,g=e.subtreeFlags,(g&8192||(g&16785408)===16785408)&&(Wn={stylesheets:null,count:0,unsuspend:vp},kd(e),g=wp(),g!==null)){t.cancelPendingCommit=g(Zr.bind(null,t,e,i,a,n,l,u,o,s,f,1,d,p)),_e(t,i,u,!r);return}Zr(t,e,i,a,n,l,u,o,s)}function _g(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!Ut(i(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _e(t,e,a,n){e&=~As,e&=~sa,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var l=e;0<l;){var i=31-Bt(l),u=1<<i;n[i]=-1,l&=~u}a!==0&&Vc(t,a,e)}function Zi(){return G&6?!0:(gl(0),!1)}function Cs(){if(U!==null){if(Y===0)var t=U.return;else t=U,fe=ya=null,hs(t),Ga=null,Kn=0,t=U;for(;t!==null;)vd(t.alternate,t),t=t.return;U=null}}function $a(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ep(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Cs(),Q=t,U=a=ge(t.current,null),_=e,Y=0,Nt=null,Ue=!1,on=ll(t,e),Ss=!1,Fa=It=As=sa=Xe=tt=0,Ct=zn=null,yo=!1,e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var l=31-Bt(n),i=1<<l;e|=t[l],n&=~i}return Te=e,Li(),a}function zd(t,e){x=null,D.H=mi,e===hl||e===Yi?(e=Tr(),Y=3):e===Sh?(e=Tr(),Y=4):Y=e===dd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Nt=e,U===null&&(tt=1,yi(t,Gt(e,t.current)))}function Ld(){var t=D.H;return D.H=mi,t===null?mi:t}function qd(){var t=D.A;return D.A=Hg,t}function To(){tt=4,Ue||(_&4194048)!==_&&Vt.current!==null||(on=!0),!(Xe&134217727)&&!(sa&134217727)||Q===null||_e(Q,_,It,!1)}function Ou(t,e,a){var n=G;G|=2;var l=Ld(),i=qd();(Q!==t||_!==e)&&(Ti=null,$a(t,e)),e=!1;var u=tt;t:do try{if(Y!==0&&U!==null){var o=U,s=Nt;switch(Y){case 8:Cs(),u=6;break t;case 3:case 2:case 9:case 6:Vt.current===null&&(e=!0);var r=Y;if(Y=0,Nt=null,Ha(t,o,s,r),a&&on){u=0;break t}break;default:r=Y,Y=0,Nt=null,Ha(t,o,s,r)}}zg(),u=tt;break}catch(f){zd(t,f)}while(!0);return e&&t.shellSuspendCounter++,fe=ya=null,G=n,D.H=l,D.A=i,U===null&&(Q=null,_=0,Li()),u}function zg(){for(;U!==null;)Yd(U)}function Lg(t,e){var a=G;G|=2;var n=Ld(),l=qd();Q!==t||_!==e?(Ti=null,wi=$t()+500,$a(t,e)):on=ll(t,e);t:do try{if(Y!==0&&U!==null){e=U;var i=Nt;e:switch(Y){case 1:Y=0,Nt=null,Ha(t,e,i,1);break;case 2:case 9:if(wr(i)){Y=0,Nt=null,Vr(e);break}e=function(){Y!==2&&Y!==9||Q!==t||(Y=7),ne(t)},i.then(e,e);break t;case 3:Y=7;break t;case 4:Y=5;break t;case 7:wr(i)?(Y=0,Nt=null,Vr(e)):(Y=0,Nt=null,Ha(t,e,i,7));break;case 5:var u=null;switch(U.tag){case 26:u=U.memoizedState;case 5:case 27:var o=U;if(!u||of(u)){Y=0,Nt=null;var s=o.sibling;if(s!==null)U=s;else{var r=o.return;r!==null?(U=r,Qi(r)):U=null}break e}}Y=0,Nt=null,Ha(t,e,i,5);break;case 6:Y=0,Nt=null,Ha(t,e,i,6);break;case 8:Cs(),tt=6;break t;default:throw Error(b(462))}}qg();break}catch(f){zd(t,f)}while(!0);return fe=ya=null,D.H=n,D.A=l,G=a,U!==null?0:(Q=null,_=0,Li(),tt)}function qg(){for(;U!==null&&!sm();)Yd(U)}function Yd(t){var e=yd(t.alternate,t,Te);t.memoizedProps=t.pendingProps,e===null?Qi(t):U=e}function Vr(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=_r(a,e,e.pendingProps,e.type,void 0,_);break;case 11:e=_r(a,e,e.pendingProps,e.type.render,e.ref,_);break;case 5:hs(e);default:vd(a,e),e=U=vh(e,Te),e=yd(a,e,Te)}t.memoizedProps=t.pendingProps,e===null?Qi(t):U=e}function Ha(t,e,a,n){fe=ya=null,hs(e),Ga=null,Kn=0;var l=e.return;try{if(Dg(t,l,e,a,_)){tt=1,yi(t,Gt(a,t.current)),U=null;return}}catch(i){if(l!==null)throw U=l,i;tt=1,yi(t,Gt(a,t.current)),U=null;return}e.flags&32768?(L||n===1?t=!0:on||_&536870912?t=!1:(Ue=t=!0,(n===2||n===9||n===3||n===6)&&(n=Vt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Gd(e,t)):Qi(e)}function Qi(t){var e=t;do{if(e.flags&32768){Gd(e,Ue);return}t=e.return;var a=kg(e.alternate,e,Te);if(a!==null){U=a;return}if(e=e.sibling,e!==null){U=e;return}U=e=t}while(e!==null);tt===0&&(tt=5)}function Gd(t,e){do{var a=xg(t.alternate,t);if(a!==null){a.flags&=32767,U=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){U=t;return}U=t=a}while(t!==null);tt=6,U=null}function Zr(t,e,a,n,l,i,u,o,s){t.cancelPendingCommit=null;do Ki();while(gt!==0);if(G&6)throw Error(b(327));if(e!==null){if(e===t.current)throw Error(b(177));if(i=e.lanes|e.childLanes,i|=Po,vm(t,a,i,u,o,s),t===Q&&(U=Q=null,_=0),Pa=e,Ge=t,Ia=a,vo=i,bo=l,Hd=n,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Vg(li,function(){return Kd(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,e.subtreeFlags&13878||n){n=D.T,D.T=null,l=q.p,q.p=2,u=G,G|=4;try{Bg(t,e,a)}finally{G=u,q.p=l,D.T=n}}gt=1,Id(),Vd(),Zd()}}function Id(){if(gt===1){gt=0;var t=Ge,e=Pa,a=(e.flags&13878)!==0;if(e.subtreeFlags&13878||a){a=D.T,D.T=null;var n=q.p;q.p=2;var l=G;G|=4;try{Md(e,t);var i=Co,u=ch(t.containerInfo),o=i.focusedElem,s=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&rh(o.ownerDocument.documentElement,o)){if(s!==null&&Fo(o)){var r=s.start,f=s.end;if(f===void 0&&(f=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(f,o.value.length);else{var g=o.ownerDocument||document,d=g&&g.defaultView||window;if(d.getSelection){var p=d.getSelection(),T=o.textContent.length,w=Math.min(s.start,T),E=s.end===void 0?w:Math.min(s.end,T);!p.extend&&w>E&&(u=E,E=w,w=u);var h=dr(o,w),c=dr(o,E);if(h&&c&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==c.node||p.focusOffset!==c.offset)){var m=g.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),w>E?(p.addRange(m),p.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),p.addRange(m))}}}}for(g=[],p=o;p=p.parentNode;)p.nodeType===1&&g.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<g.length;o++){var y=g[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Di=!!Eo,Co=Eo=null}finally{G=l,q.p=n,D.T=a}}t.current=e,gt=2}}function Vd(){if(gt===2){gt=0;var t=Ge,e=Pa,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=D.T,D.T=null;var n=q.p;q.p=2;var l=G;G|=4;try{Ed(t,e.alternate,e)}finally{G=l,q.p=n,D.T=a}}gt=3}}function Zd(){if(gt===4||gt===3){gt=0,rm();var t=Ge,e=Pa,a=Ia,n=Hd;e.subtreeFlags&10256||e.flags&10256?gt=5:(gt=0,Pa=Ge=null,Qd(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Ye=null),Vo(a),e=e.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=D.T,l=q.p,q.p=2,D.T=null;try{for(var i=t.onRecoverableError,u=0;u<n.length;u++){var o=n[u];i(o.value,{componentStack:o.stack})}}finally{D.T=e,q.p=l}}Ia&3&&Ki(),ne(t),l=t.pendingLanes,a&4194090&&l&42?t===wo?Ln++:(Ln=0,wo=t):Ln=0,gl(0)}}function Qd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,cl(e)))}function Ki(t){return Id(),Vd(),Zd(),Kd()}function Kd(){if(gt!==5)return!1;var t=Ge,e=vo;vo=0;var a=Vo(Ia),n=D.T,l=q.p;try{q.p=32>a?32:a,D.T=null,a=bo,bo=null;var i=Ge,u=Ia;if(gt=0,Pa=Ge=null,Ia=0,G&6)throw Error(b(331));var o=G;if(G|=4,Bd(i.current),Nd(i,i.current,u,a),G=o,gl(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(nl,i)}catch{}return!0}finally{q.p=l,D.T=n,Qd(t,e)}}function Qr(t,e,a){e=Gt(a,e),e=fo(t.stateNode,e,2),t=qe(t,e,2),t!==null&&(il(t,2),ne(t))}function Z(t,e,a){if(t.tag===3)Qr(t,t,a);else for(;e!==null;){if(e.tag===3){Qr(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ye===null||!Ye.has(n))){t=Gt(a,t),a=cd(2),n=qe(e,a,2),n!==null&&(hd(a,n,e,t),il(n,2),ne(n));break}}e=e.return}}function Mu(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new Ug;var l=new Set;n.set(e,l)}else l=n.get(e),l===void 0&&(l=new Set,n.set(e,l));l.has(a)||(Ss=!0,l.add(a),t=Yg.bind(null,t,e,a),e.then(t,t))}function Yg(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Q===t&&(_&a)===a&&(tt===4||tt===3&&(_&62914560)===_&&300>$t()-Es?!(G&2)&&$a(t,0):As|=a,Fa===_&&(Fa=0)),ne(t)}function Xd(t,e){e===0&&(e=Ic()),t=un(t,e),t!==null&&(il(t,e),ne(t))}function Gg(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Xd(t,a)}function Ig(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(b(314))}n!==null&&n.delete(e),Xd(t,a)}function Vg(t,e){return Go(t,e)}var Si=null,Aa=null,So=!1,Ai=!1,Du=!1,ra=0;function ne(t){t!==Aa&&t.next===null&&(Aa===null?Si=Aa=t:Aa=Aa.next=t),Ai=!0,So||(So=!0,Qg())}function gl(t,e){if(!Du&&Ai){Du=!0;do for(var a=!1,n=Si;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,o=n.pingedLanes;i=(1<<31-Bt(42|t)+1)-1,i&=l&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Kr(n,i))}else i=_,i=Hi(n,n===Q?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(i&3)||ll(n,i)||(a=!0,Kr(n,i));n=n.next}while(a);Du=!1}}function Zg(){Jd()}function Jd(){Ai=So=!1;var t=0;ra!==0&&(tp()&&(t=ra),ra=0);for(var e=$t(),a=null,n=Si;n!==null;){var l=n.next,i=Wd(n,e);i===0?(n.next=null,a===null?Si=l:a.next=l,l===null&&(Aa=a)):(a=n,(t!==0||i&3)&&(Ai=!0)),n=l}gl(t)}function Wd(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Bt(i),o=1<<u,s=l[u];s===-1?(!(o&a)||o&n)&&(l[u]=ym(o,e)):s<=e&&(t.expiredLanes|=o),i&=~o}if(e=Q,a=_,a=Hi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Y===2||Y===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&eu(n),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||ll(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&eu(n),Vo(a)){case 2:case 8:a=qc;break;case 32:a=li;break;case 268435456:a=Yc;break;default:a=li}return n=Fd.bind(null,t),a=Go(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&eu(n),t.callbackPriority=2,t.callbackNode=null,2}function Fd(t,e){if(gt!==0&&gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ki()&&t.callbackNode!==a)return null;var n=_;return n=Hi(t,t===Q?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(_d(t,n,e),Wd(t,$t()),t.callbackNode!=null&&t.callbackNode===a?Fd.bind(null,t):null)}function Kr(t,e){if(Ki())return null;_d(t,e,!0)}function Qg(){ap(function(){G&6?Go(Lc,Zg):Jd()})}function Rs(){return ra===0&&(ra=Gc()),ra}function Xr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yl(""+t)}function Jr(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Kg(t,e,a,n,l){if(e==="submit"&&a&&a.stateNode===l){var i=Xr((l[Rt]||null).action),u=n.submitter;u&&(e=(e=u[Rt]||null)?Xr(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var o=new Ui("action","action",null,n,l);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ra!==0){var s=u?Jr(l,u):new FormData(l);co(a,{pending:!0,data:s,method:l.method,action:i},null,s)}}else typeof i=="function"&&(o.preventDefault(),s=u?Jr(l,u):new FormData(l),co(a,{pending:!0,data:s,method:l.method,action:i},i,s))},currentTarget:l}]})}}for(var Nu=0;Nu<Pu.length;Nu++){var ku=Pu[Nu],Xg=ku.toLowerCase(),Jg=ku[0].toUpperCase()+ku.slice(1);Xt(Xg,"on"+Jg)}Xt(dh,"onAnimationEnd");Xt(fh,"onAnimationIteration");Xt(mh,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(dg,"onTransitionRun");Xt(fg,"onTransitionStart");Xt(mg,"onTransitionCancel");Xt(gh,"onTransitionEnd");Za("onMouseEnter",["mouseout","mouseover"]);Za("onMouseLeave",["mouseout","mouseover"]);Za("onPointerEnter",["pointerout","pointerover"]);Za("onPointerLeave",["pointerout","pointerover"]);ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xn));function Pd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],l=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var u=n.length-1;0<=u;u--){var o=n[u],s=o.instance,r=o.currentTarget;if(o=o.listener,s!==i&&l.isPropagationStopped())break t;i=o,l.currentTarget=r;try{i(l)}catch(f){pi(f)}l.currentTarget=null,i=s}else for(u=0;u<n.length;u++){if(o=n[u],s=o.instance,r=o.currentTarget,o=o.listener,s!==i&&l.isPropagationStopped())break t;i=o,l.currentTarget=r;try{i(l)}catch(f){pi(f)}l.currentTarget=null,i=s}}}}function H(t,e){var a=e[Zu];a===void 0&&(a=e[Zu]=new Set);var n=t+"__bubble";a.has(n)||($d(e,t,2,!1),a.add(n))}function xu(t,e,a){var n=0;e&&(n|=4),$d(a,t,n,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Os(t){if(!t[Hl]){t[Hl]=!0,Kc.forEach(function(a){a!=="selectionchange"&&(Wg.has(a)||xu(a,!1,t),xu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,xu("selectionchange",!1,e))}}function $d(t,e,a,n){switch(df(e)){case 2:var l=Ap;break;case 8:l=Ep;break;default:l=ks}a=l.bind(null,e,a,t),l=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Bu(t,e,a,n,l){var i=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var o=n.stateNode.containerInfo;if(o===l)break;if(u===4)for(u=n.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;o!==null;){if(u=Ra(o),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){n=i=u;continue t}o=o.parentNode}}n=n.return}eh(function(){var r=i,f=Ko(a),g=[];t:{var d=ph.get(t);if(d!==void 0){var p=Ui,T=t;switch(t){case"keypress":if(Il(a)===0)break t;case"keydown":case"keyup":p=Vm;break;case"focusin":T="focus",p=ru;break;case"focusout":T="blur",p=ru;break;case"beforeblur":case"afterblur":p=ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Km;break;case dh:case fh:case mh:p=Hm;break;case gh:p=Jm;break;case"scroll":case"scrollend":p=Nm;break;case"wheel":p=Fm;break;case"copy":case"cut":case"paste":p=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lr;break;case"toggle":case"beforetoggle":p=$m}var w=(e&4)!==0,E=!w&&(t==="scroll"||t==="scrollend"),h=w?d!==null?d+"Capture":null:d;w=[];for(var c=r,m;c!==null;){var y=c;if(m=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||m===null||h===null||(y=Gn(c,h),y!=null&&w.push(Jn(c,y,m))),E)break;c=c.return}0<w.length&&(d=new p(d,T,null,a,f),g.push({event:d,listeners:w}))}}if(!(e&7)){t:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&a!==Xu&&(T=a.relatedTarget||a.fromElement)&&(Ra(T)||T[nn]))break t;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(T=a.relatedTarget||a.toElement,p=r,T=T?Ra(T):null,T!==null&&(E=al(T),w=T.tag,T!==E||w!==5&&w!==27&&w!==6)&&(T=null)):(p=null,T=r),p!==T)){if(w=ar,y="onMouseLeave",h="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=lr,y="onPointerLeave",h="onPointerEnter",c="pointer"),E=p==null?d:An(p),m=T==null?d:An(T),d=new w(y,c+"leave",p,a,f),d.target=E,d.relatedTarget=m,y=null,Ra(f)===r&&(w=new w(h,c+"enter",T,a,f),w.target=m,w.relatedTarget=E,y=w),E=y,p&&T)e:{for(w=p,h=T,c=0,m=w;m;m=ba(m))c++;for(m=0,y=h;y;y=ba(y))m++;for(;0<c-m;)w=ba(w),c--;for(;0<m-c;)h=ba(h),m--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break e;w=ba(w),h=ba(h)}w=null}else w=null;p!==null&&Wr(g,d,p,w,!1),T!==null&&E!==null&&Wr(g,E,T,w,!0)}}t:{if(d=r?An(r):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=sr;else if(or(d))if(oh)A=rg;else{A=og;var M=ug}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Qo(r.elementType)&&(A=sr):A=sg;if(A&&(A=A(t,r))){uh(g,A,a,f);break t}M&&M(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Ku(d,"number",d.value)}switch(M=r?An(r):window,t){case"focusin":(or(M)||M.contentEditable==="true")&&(Da=M,Wu=r,Dn=null);break;case"focusout":Dn=Wu=Da=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,fr(g,a,f);break;case"selectionchange":if(hg)break;case"keydown":case"keyup":fr(g,a,f)}var C;if(Wo)t:{switch(t){case"compositionstart":var O="onCompositionStart";break t;case"compositionend":O="onCompositionEnd";break t;case"compositionupdate":O="onCompositionUpdate";break t}O=void 0}else Ma?lh(t,a)&&(O="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(O="onCompositionStart");O&&(nh&&a.locale!=="ko"&&(Ma||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ma&&(C=ah()):(He=f,Xo="value"in He?He.value:He.textContent,Ma=!0)),M=Ei(r,O),0<M.length&&(O=new nr(O,t,null,a,f),g.push({event:O,listeners:M}),C?O.data=C:(C=ih(a),C!==null&&(O.data=C)))),(C=eg?ag(t,a):ng(t,a))&&(O=Ei(r,"onBeforeInput"),0<O.length&&(M=new nr("onBeforeInput","beforeinput",null,a,f),g.push({event:M,listeners:O}),M.data=C)),Kg(g,t,r,a,f)}Pd(g,e)})}function Jn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ei(t,e){for(var a=e+"Capture",n=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Gn(t,a),l!=null&&n.unshift(Jn(t,l,i)),l=Gn(t,e),l!=null&&n.push(Jn(t,l,i))),t.tag===3)return n;t=t.return}return[]}function ba(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wr(t,e,a,n,l){for(var i=e._reactName,u=[];a!==null&&a!==n;){var o=a,s=o.alternate,r=o.stateNode;if(o=o.tag,s!==null&&s===n)break;o!==5&&o!==26&&o!==27||r===null||(s=r,l?(r=Gn(a,i),r!=null&&u.unshift(Jn(a,r,s))):l||(r=Gn(a,i),r!=null&&u.push(Jn(a,r,s)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var Fg=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function Fr(t){return(typeof t=="string"?t:""+t).replace(Fg,`
`).replace(Pg,"")}function tf(t,e){return e=Fr(e),Fr(t)===e}function Xi(){}function I(t,e,a,n,l,i){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Qa(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Qa(t,""+n);break;case"className":Ml(t,"class",n);break;case"tabIndex":Ml(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(t,a,n);break;case"style":th(t,n,i);break;case"data":if(e!=="object"){Ml(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Yl(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&I(t,e,"name",l.name,l,null),I(t,e,"formEncType",l.formEncType,l,null),I(t,e,"formMethod",l.formMethod,l,null),I(t,e,"formTarget",l.formTarget,l,null)):(I(t,e,"encType",l.encType,l,null),I(t,e,"method",l.method,l,null),I(t,e,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Yl(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Xi);break;case"onScroll":n!=null&&H("scroll",t);break;case"onScrollEnd":n!=null&&H("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(b(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(b(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Yl(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":H("beforetoggle",t),H("toggle",t),ql(t,"popover",n);break;case"xlinkActuate":ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ue(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ue(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ue(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ue(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ql(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mm.get(a)||a,ql(t,a,n))}}function Ao(t,e,a,n,l,i){switch(a){case"style":th(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(b(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(b(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Qa(t,n):(typeof n=="number"||typeof n=="bigint")&&Qa(t,""+n);break;case"onScroll":n!=null&&H("scroll",t);break;case"onScrollEnd":n!=null&&H("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),i=t[Rt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,l);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):ql(t,a,n)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":H("error",t),H("load",t);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:I(t,e,i,u,a,null)}}l&&I(t,e,"srcSet",a.srcSet,a,null),n&&I(t,e,"src",a.src,a,null);return;case"input":H("invalid",t);var o=i=u=l=null,s=null,r=null;for(n in a)if(a.hasOwnProperty(n)){var f=a[n];if(f!=null)switch(n){case"name":l=f;break;case"type":u=f;break;case"checked":s=f;break;case"defaultChecked":r=f;break;case"value":i=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(b(137,e));break;default:I(t,e,n,f,a,null)}}Fc(t,i,o,s,r,u,l,!1),ii(t);return;case"select":H("invalid",t),n=u=i=null;for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":n=o;default:I(t,e,l,o,a,null)}e=i,a=u,t.multiple=!!n,e!=null?_a(t,!!n,e,!1):a!=null&&_a(t,!!n,a,!0);return;case"textarea":H("invalid",t),i=l=n=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":n=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(b(91));break;default:I(t,e,u,o,a,null)}$c(t,n,l,i),ii(t);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(n=a[s],n!=null))switch(s){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:I(t,e,s,n,a,null)}return;case"dialog":H("beforetoggle",t),H("toggle",t),H("cancel",t),H("close",t);break;case"iframe":case"object":H("load",t);break;case"video":case"audio":for(n=0;n<Xn.length;n++)H(Xn[n],t);break;case"image":H("error",t),H("load",t);break;case"details":H("toggle",t);break;case"embed":case"source":case"link":H("error",t),H("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in a)if(a.hasOwnProperty(r)&&(n=a[r],n!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:I(t,e,r,n,a,null)}return;default:if(Qo(e)){for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!==void 0&&Ao(t,e,f,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&I(t,e,o,n,a,null))}function $g(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,o=null,s=null,r=null,f=null;for(p in a){var g=a[p];if(a.hasOwnProperty(p)&&g!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=g;default:n.hasOwnProperty(p)||I(t,e,p,null,n,g)}}for(var d in n){var p=n[d];if(g=a[d],n.hasOwnProperty(d)&&(p!=null||g!=null))switch(d){case"type":i=p;break;case"name":l=p;break;case"checked":r=p;break;case"defaultChecked":f=p;break;case"value":u=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(b(137,e));break;default:p!==g&&I(t,e,d,p,n,g)}}Qu(t,u,o,s,r,f,i,l);return;case"select":p=u=o=d=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":p=s;default:n.hasOwnProperty(i)||I(t,e,i,null,n,s)}for(l in n)if(i=n[l],s=a[l],n.hasOwnProperty(l)&&(i!=null||s!=null))switch(l){case"value":d=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==s&&I(t,e,l,i,n,s)}e=o,a=u,n=p,d!=null?_a(t,!!a,d,!1):!!n!=!!a&&(e!=null?_a(t,!!a,e,!0):_a(t,!!a,a?[]:"",!1));return;case"textarea":p=d=null;for(o in a)if(l=a[o],a.hasOwnProperty(o)&&l!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:I(t,e,o,null,n,l)}for(u in n)if(l=n[u],i=a[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":d=l;break;case"defaultValue":p=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(b(91));break;default:l!==i&&I(t,e,u,l,n,i)}Pc(t,d,p);return;case"option":for(var T in a)if(d=a[T],a.hasOwnProperty(T)&&d!=null&&!n.hasOwnProperty(T))switch(T){case"selected":t.selected=!1;break;default:I(t,e,T,null,n,d)}for(s in n)if(d=n[s],p=a[s],n.hasOwnProperty(s)&&d!==p&&(d!=null||p!=null))switch(s){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:I(t,e,s,d,n,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)d=a[w],a.hasOwnProperty(w)&&d!=null&&!n.hasOwnProperty(w)&&I(t,e,w,null,n,d);for(r in n)if(d=n[r],p=a[r],n.hasOwnProperty(r)&&d!==p&&(d!=null||p!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(b(137,e));break;default:I(t,e,r,d,n,p)}return;default:if(Qo(e)){for(var E in a)d=a[E],a.hasOwnProperty(E)&&d!==void 0&&!n.hasOwnProperty(E)&&Ao(t,e,E,void 0,n,d);for(f in n)d=n[f],p=a[f],!n.hasOwnProperty(f)||d===p||d===void 0&&p===void 0||Ao(t,e,f,d,n,p);return}}for(var h in a)d=a[h],a.hasOwnProperty(h)&&d!=null&&!n.hasOwnProperty(h)&&I(t,e,h,null,n,d);for(g in n)d=n[g],p=a[g],!n.hasOwnProperty(g)||d===p||d==null&&p==null||I(t,e,g,d,n,p)}var Eo=null,Co=null;function Ci(t){return t.nodeType===9?t:t.ownerDocument}function Pr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ef(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ro(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=null;function tp(){var t=window.event;return t&&t.type==="popstate"?t===ju?!1:(ju=t,!0):(ju=null,!1)}var af=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,$r=typeof Promise=="function"?Promise:void 0,ap=typeof queueMicrotask=="function"?queueMicrotask:typeof $r<"u"?function(t){return $r.resolve(null).then(t).catch(np)}:af;function np(t){setTimeout(function(){throw t})}function We(t){return t==="head"}function tc(t,e){var a=e,n=0,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<n&&8>n){a=n;var u=t.ownerDocument;if(a&1&&qn(u.documentElement),a&2&&qn(u.body),a&4)for(a=u.head,qn(a),u=a.firstChild;u;){var o=u.nextSibling,s=u.nodeName;u[ul]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=o}}if(l===0){t.removeChild(i),tl(e);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=i}while(a);tl(e)}function Oo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oo(a),Zo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lp(t,e,a,n){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ul])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Kt(t.nextSibling),t===null)break}return null}function ip(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Kt(t.nextSibling),t===null))return null;return t}function Mo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function up(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Kt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Do=null;function ec(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function nf(t,e,a){switch(e=Ci(a),t){case"html":if(t=e.documentElement,!t)throw Error(b(452));return t;case"head":if(t=e.head,!t)throw Error(b(453));return t;case"body":if(t=e.body,!t)throw Error(b(454));return t;default:throw Error(b(451))}}function qn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Zo(t)}var Zt=new Map,ac=new Set;function Ri(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ae=q.d;q.d={f:op,r:sp,D:rp,C:cp,L:hp,m:dp,X:mp,S:fp,M:gp};function op(){var t=Ae.f(),e=Zi();return t||e}function sp(t){var e=ln(t);e!==null&&e.tag===5&&e.type==="form"?Wh(e):Ae.r(t)}var sn=typeof document>"u"?null:document;function lf(t,e,a){var n=sn;if(n&&typeof e=="string"&&e){var l=Yt(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),ac.has(l)||(ac.add(l),t={rel:t,crossOrigin:a,href:e},n.querySelector(l)===null&&(e=n.createElement("link"),pt(e,"link",t),ht(e),n.head.appendChild(e)))}}function rp(t){Ae.D(t),lf("dns-prefetch",t,null)}function cp(t,e){Ae.C(t,e),lf("preconnect",t,e)}function hp(t,e,a){Ae.L(t,e,a);var n=sn;if(n&&t&&e){var l='link[rel="preload"][as="'+Yt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Yt(a.imageSizes)+'"]')):l+='[href="'+Yt(t)+'"]';var i=l;switch(e){case"style":i=tn(t);break;case"script":i=rn(t)}Zt.has(i)||(t=K({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Zt.set(i,t),n.querySelector(l)!==null||e==="style"&&n.querySelector(pl(i))||e==="script"&&n.querySelector(yl(i))||(e=n.createElement("link"),pt(e,"link",t),ht(e),n.head.appendChild(e)))}}function dp(t,e){Ae.m(t,e);var a=sn;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Yt(n)+'"][href="'+Yt(t)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=rn(t)}if(!Zt.has(i)&&(t=K({rel:"modulepreload",href:t},e),Zt.set(i,t),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(i)))return}n=a.createElement("link"),pt(n,"link",t),ht(n),a.head.appendChild(n)}}}function fp(t,e,a){Ae.S(t,e,a);var n=sn;if(n&&t){var l=Ua(n).hoistableStyles,i=tn(t);e=e||"default";var u=l.get(i);if(!u){var o={loading:0,preload:null};if(u=n.querySelector(pl(i)))o.loading=5;else{t=K({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Zt.get(i))&&Ms(t,a);var s=u=n.createElement("link");ht(s),pt(s,"link",t),s._p=new Promise(function(r,f){s.onload=r,s.onerror=f}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Wl(u,e,n)}u={type:"stylesheet",instance:u,count:1,state:o},l.set(i,u)}}}function mp(t,e){Ae.X(t,e);var a=sn;if(a&&t){var n=Ua(a).hoistableScripts,l=rn(t),i=n.get(l);i||(i=a.querySelector(yl(l)),i||(t=K({src:t,async:!0},e),(e=Zt.get(l))&&Ds(t,e),i=a.createElement("script"),ht(i),pt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function gp(t,e){Ae.M(t,e);var a=sn;if(a&&t){var n=Ua(a).hoistableScripts,l=rn(t),i=n.get(l);i||(i=a.querySelector(yl(l)),i||(t=K({src:t,async:!0,type:"module"},e),(e=Zt.get(l))&&Ds(t,e),i=a.createElement("script"),ht(i),pt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function nc(t,e,a,n){var l=(l=ze.current)?Ri(l):null;if(!l)throw Error(b(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=tn(a.href),a=Ua(l).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=tn(a.href);var i=Ua(l).hoistableStyles,u=i.get(t);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=l.querySelector(pl(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Zt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zt.set(t,a),i||pp(l,t,a,u.state))),e&&n===null)throw Error(b(528,""));return u}if(e&&n!==null)throw Error(b(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=rn(a),a=Ua(l).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,t))}}function tn(t){return'href="'+Yt(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function uf(t){return K({},t,{"data-precedence":t.precedence,precedence:null})}function pp(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),pt(e,"link",a),ht(e),t.head.appendChild(e))}function rn(t){return'[src="'+Yt(t)+'"]'}function yl(t){return"script[async]"+t}function lc(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(n)return e.instance=n,ht(n),n;var l=K({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),ht(n),pt(n,"style",l),Wl(n,a.precedence,t),e.instance=n;case"stylesheet":l=tn(a.href);var i=t.querySelector(pl(l));if(i)return e.state.loading|=4,e.instance=i,ht(i),i;n=uf(a),(l=Zt.get(l))&&Ms(n,l),i=(t.ownerDocument||t).createElement("link"),ht(i);var u=i;return u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),pt(i,"link",n),e.state.loading|=4,Wl(i,a.precedence,t),e.instance=i;case"script":return i=rn(a.src),(l=t.querySelector(yl(i)))?(e.instance=l,ht(l),l):(n=a,(l=Zt.get(i))&&(n=K({},a),Ds(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),ht(l),pt(l,"link",n),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(b(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(n=e.instance,e.state.loading|=4,Wl(n,a.precedence,t));return e.instance}function Wl(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var o=n[u];if(o.dataset.precedence===e)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Ms(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ds(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Fl=null;function ic(t,e,a){if(Fl===null){var n=new Map,l=Fl=new Map;l.set(a,n)}else l=Fl,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var i=a[l];if(!(i[ul]||i[yt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var o=n.get(u);o?o.push(i):n.set(u,[i])}}return n}function uc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function yp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function of(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Wn=null;function vp(){}function bp(t,e,a){if(Wn===null)throw Error(b(475));var n=Wn;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=tn(a.href),i=t.querySelector(pl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Oi.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=i,ht(i);return}i=t.ownerDocument||t,a=uf(a),(l=Zt.get(l))&&Ms(a,l),i=i.createElement("link"),ht(i);var u=i;u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),pt(i,"link",a),e.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(n.count++,e=Oi.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function wp(){if(Wn===null)throw Error(b(475));var t=Wn;return t.stylesheets&&t.count===0&&No(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&No(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Oi(){if(this.count--,this.count===0){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mi=null;function No(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mi=new Map,e.forEach(Tp,t),Mi=null,Oi.call(t))}function Tp(t,e){if(!(e.state.loading&4)){var a=Mi.get(t);if(a)var n=a.get(null);else{a=new Map,Mi.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),n=u)}n&&a.set(null,n)}l=e.instance,u=l.getAttribute("data-precedence"),i=a.get(u)||n,i===n&&a.set(null,l),a.set(u,l),this.count++,n=Oi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Fn={$$typeof:ce,Provider:null,Consumer:null,_currentValue:na,_currentValue2:na,_threadCount:0};function Sp(t,e,a,n,l,i,u,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function sf(t,e,a,n,l,i,u,o,s,r,f,g){return t=new Sp(t,e,a,u,o,s,r,g),e=1,i===!0&&(e|=24),i=kt(3,null,null,e),t.current=i,i.stateNode=t,e=ns(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:e},is(i),t}function rf(t){return t?(t=xa,t):xa}function cf(t,e,a,n,l,i){l=rf(l),n.context===null?n.context=l:n.pendingContext=l,n=Le(e),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=qe(t,n,e),a!==null&&(Ht(a,t,e),xn(a,t,e))}function oc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ns(t,e){oc(t,e),(t=t.alternate)&&oc(t,e)}function hf(t){if(t.tag===13){var e=un(t,67108864);e!==null&&Ht(e,t,67108864),Ns(t,67108864)}}var Di=!0;function Ap(t,e,a,n){var l=D.T;D.T=null;var i=q.p;try{q.p=2,ks(t,e,a,n)}finally{q.p=i,D.T=l}}function Ep(t,e,a,n){var l=D.T;D.T=null;var i=q.p;try{q.p=8,ks(t,e,a,n)}finally{q.p=i,D.T=l}}function ks(t,e,a,n){if(Di){var l=ko(n);if(l===null)Bu(t,e,n,Ni,a),sc(t,n);else if(Rp(l,t,e,a,n))n.stopPropagation();else if(sc(t,n),e&4&&-1<Cp.indexOf(t)){for(;l!==null;){var i=ln(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ta(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var s=1<<31-Bt(u);o.entanglements[1]|=s,u&=~s}ne(i),!(G&6)&&(wi=$t()+500,gl(0))}}break;case 13:o=un(i,2),o!==null&&Ht(o,i,2),Zi(),Ns(i,2)}if(i=ko(n),i===null&&Bu(t,e,n,Ni,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Bu(t,e,n,null,a)}}function ko(t){return t=Ko(t),xs(t)}var Ni=null;function xs(t){if(Ni=null,t=Ra(t),t!==null){var e=al(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Hc(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ni=t,null}function df(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cm()){case Lc:return 2;case qc:return 8;case li:case hm:return 32;case Yc:return 268435456;default:return 32}default:return 32}}var xo=!1,Ie=null,Ve=null,Ze=null,Pn=new Map,$n=new Map,Be=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sc(t,e){switch(t){case"focusin":case"focusout":Ie=null;break;case"dragenter":case"dragleave":Ve=null;break;case"mouseover":case"mouseout":Ze=null;break;case"pointerover":case"pointerout":Pn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(e.pointerId)}}function bn(t,e,a,n,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},e!==null&&(e=ln(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Rp(t,e,a,n,l){switch(e){case"focusin":return Ie=bn(Ie,t,e,a,n,l),!0;case"dragenter":return Ve=bn(Ve,t,e,a,n,l),!0;case"mouseover":return Ze=bn(Ze,t,e,a,n,l),!0;case"pointerover":var i=l.pointerId;return Pn.set(i,bn(Pn.get(i)||null,t,e,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,$n.set(i,bn($n.get(i)||null,t,e,a,n,l)),!0}return!1}function ff(t){var e=Ra(t.target);if(e!==null){var a=al(e);if(a!==null){if(e=a.tag,e===13){if(e=Hc(a),e!==null){t.blockedOn=e,bm(t.priority,function(){if(a.tag===13){var n=jt();n=Io(n);var l=un(a,n);l!==null&&Ht(l,a,n),Ns(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ko(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Xu=n,a.target.dispatchEvent(n),Xu=null}else return e=ln(a),e!==null&&hf(e),t.blockedOn=a,!1;e.shift()}return!0}function rc(t,e,a){Pl(t)&&a.delete(e)}function Op(){xo=!1,Ie!==null&&Pl(Ie)&&(Ie=null),Ve!==null&&Pl(Ve)&&(Ve=null),Ze!==null&&Pl(Ze)&&(Ze=null),Pn.forEach(rc),$n.forEach(rc)}function Ul(t,e){t.blockedOn===e&&(t.blockedOn=null,xo||(xo=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Op)))}var _l=null;function cc(t){_l!==t&&(_l=t,st.unstable_scheduleCallback(st.unstable_NormalPriority,function(){_l===t&&(_l=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],l=t[e+2];if(typeof n!="function"){if(xs(n||a)===null)continue;break}var i=ln(a);i!==null&&(t.splice(e,3),e-=3,co(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function tl(t){function e(s){return Ul(s,t)}Ie!==null&&Ul(Ie,t),Ve!==null&&Ul(Ve,t),Ze!==null&&Ul(Ze,t),Pn.forEach(e),$n.forEach(e);for(var a=0;a<Be.length;a++){var n=Be[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Be.length&&(a=Be[0],a.blockedOn===null);)ff(a),a.blockedOn===null&&Be.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],u=l[Rt]||null;if(typeof i=="function")u||cc(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Rt]||null)o=u.formAction;else if(xs(l)!==null)continue}else o=u.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),cc(a)}}}function Bs(t){this._internalRoot=t}Ji.prototype.render=Bs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));var a=e.current,n=jt();cf(a,n,t,e,null,null)};Ji.prototype.unmount=Bs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cf(t.current,2,null,t,null,null),Zi(),e[nn]=null}};function Ji(t){this._internalRoot=t}Ji.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Be.length&&e!==0&&e<Be[a].priority;a++);Be.splice(a,0,t),a===0&&ff(t)}};var hc=Bc.version;if(hc!=="19.1.0")throw Error(b(527,hc,"19.1.0"));q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=nm(e),t=t!==null?Uc(t):null,t=t===null?null:t.stateNode,t};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{nl=zl.inject(Mp),xt=zl}catch{}}Bi.createRoot=function(t,e){if(!jc(t))throw Error(b(299));var a=!1,n="",l=od,i=sd,u=rd,o=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=sf(t,1,!1,null,null,a,n,l,i,u,o,null),t[nn]=e.current,Os(t),new Bs(e)};Bi.hydrateRoot=function(t,e,a){if(!jc(t))throw Error(b(299));var n=!1,l="",i=od,u=sd,o=rd,s=null,r=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(s=a.unstable_transitionCallbacks),a.formState!==void 0&&(r=a.formState)),e=sf(t,1,!0,e,a??null,n,l,i,u,o,s,r),e.context=rf(null),a=e.current,n=jt(),n=Io(n),l=Le(n),l.callback=null,qe(a,l,n),a=n,e.current.lanes=a,il(e,a),ne(e),t[nn]=e.current,Os(t),new Ji(e)};Bi.version="19.1.0";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(t){console.error(t)}}mf(),Oc.exports=Bi;var Dp=Oc.exports;/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var dc="popstate";function Np(t={}){function e(n,l){let{pathname:i,search:u,hash:o}=n.location;return Bo("",{pathname:i,search:u,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function a(n,l){return typeof l=="string"?l:el(l)}return xp(e,a,null,t)}function P(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ee(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kp(){return Math.random().toString(36).substring(2,10)}function fc(t,e){return{usr:t.state,key:t.key,idx:e}}function Bo(t,e,a=null,n){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?cn(e):e,state:a,key:e&&e.key||n||kp()}}function el({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function cn(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let n=t.indexOf("?");n>=0&&(e.search=t.substring(n),t=t.substring(0,n)),t&&(e.pathname=t)}return e}function xp(t,e,a,n={}){let{window:l=document.defaultView,v5Compat:i=!1}=n,u=l.history,o="POP",s=null,r=f();r==null&&(r=0,u.replaceState({...u.state,idx:r},""));function f(){return(u.state||{idx:null}).idx}function g(){o="POP";let E=f(),h=E==null?null:E-r;r=E,s&&s({action:o,location:w.location,delta:h})}function d(E,h){o="PUSH";let c=Bo(w.location,E,h);r=f()+1;let m=fc(c,r),y=w.createHref(c);try{u.pushState(m,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;l.location.assign(y)}i&&s&&s({action:o,location:w.location,delta:1})}function p(E,h){o="REPLACE";let c=Bo(w.location,E,h);r=f();let m=fc(c,r),y=w.createHref(c);u.replaceState(m,"",y),i&&s&&s({action:o,location:w.location,delta:0})}function T(E){return Bp(E)}let w={get action(){return o},get location(){return t(l,u)},listen(E){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(dc,g),s=E,()=>{l.removeEventListener(dc,g),s=null}},createHref(E){return e(l,E)},createURL:T,encodeLocation(E){let h=T(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(E){return u.go(E)}};return w}function Bp(t,e=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),P(a,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:el(t);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=a+n),new URL(n,a)}function gf(t,e,a="/"){return jp(t,e,a,!1)}function jp(t,e,a,n){let l=typeof e=="string"?cn(e):e,i=Se(l.pathname||"/",a);if(i==null)return null;let u=pf(t);Hp(u);let o=null;for(let s=0;o==null&&s<u.length;++s){let r=Qp(i);o=Vp(u[s],r,n)}return o}function pf(t,e=[],a=[],n=""){let l=(i,u,o)=>{let s={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:u,route:i};s.relativePath.startsWith("/")&&(P(s.relativePath.startsWith(n),`Absolute route path "${s.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(n.length));let r=ye([n,s.relativePath]),f=a.concat(s);i.children&&i.children.length>0&&(P(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${r}".`),pf(i.children,e,f,r)),!(i.path==null&&!i.index)&&e.push({path:r,score:Gp(r,i.index),routesMeta:f})};return t.forEach((i,u)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,u);else for(let s of yf(i.path))l(i,u,s)}),e}function yf(t){let e=t.split("/");if(e.length===0)return[];let[a,...n]=e,l=a.endsWith("?"),i=a.replace(/\?$/,"");if(n.length===0)return l?[i,""]:[i];let u=yf(n.join("/")),o=[];return o.push(...u.map(s=>s===""?i:[i,s].join("/"))),l&&o.push(...u),o.map(s=>t.startsWith("/")&&s===""?"/":s)}function Hp(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:Ip(e.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}var Up=/^:[\w-]+$/,_p=3,zp=2,Lp=1,qp=10,Yp=-2,mc=t=>t==="*";function Gp(t,e){let a=t.split("/"),n=a.length;return a.some(mc)&&(n+=Yp),e&&(n+=zp),a.filter(l=>!mc(l)).reduce((l,i)=>l+(Up.test(i)?_p:i===""?Lp:qp),n)}function Ip(t,e){return t.length===e.length&&t.slice(0,-1).every((n,l)=>n===e[l])?t[t.length-1]-e[e.length-1]:0}function Vp(t,e,a=!1){let{routesMeta:n}=t,l={},i="/",u=[];for(let o=0;o<n.length;++o){let s=n[o],r=o===n.length-1,f=i==="/"?e:e.slice(i.length)||"/",g=ki({path:s.relativePath,caseSensitive:s.caseSensitive,end:r},f),d=s.route;if(!g&&r&&a&&!n[n.length-1].route.index&&(g=ki({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!g)return null;Object.assign(l,g.params),u.push({params:l,pathname:ye([i,g.pathname]),pathnameBase:Wp(ye([i,g.pathnameBase])),route:d}),g.pathnameBase!=="/"&&(i=ye([i,g.pathnameBase]))}return u}function ki(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,n]=Zp(t.path,t.caseSensitive,t.end),l=e.match(a);if(!l)return null;let i=l[0],u=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:n.reduce((r,{paramName:f,isOptional:g},d)=>{if(f==="*"){let T=o[d]||"";u=i.slice(0,i.length-T.length).replace(/(.)\/+$/,"$1")}const p=o[d];return g&&!p?r[f]=void 0:r[f]=(p||"").replace(/%2F/g,"/"),r},{}),pathname:i,pathnameBase:u,pattern:t}}function Zp(t,e=!1,a=!0){ee(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,o,s)=>(n.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),n]}function Qp(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ee(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Se(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,n=t.charAt(a);return n&&n!=="/"?null:t.slice(a)||"/"}function Kp(t,e="/"){let{pathname:a,search:n="",hash:l=""}=typeof t=="string"?cn(t):t;return{pathname:a?a.startsWith("/")?a:Xp(a,e):e,search:Fp(n),hash:Pp(l)}}function Xp(t,e){let a=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?a.length>1&&a.pop():l!=="."&&a.push(l)}),a.length>1?a.join("/"):"/"}function Hu(t,e,a,n){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jp(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function vf(t){let e=Jp(t);return e.map((a,n)=>n===e.length-1?a.pathname:a.pathnameBase)}function bf(t,e,a,n=!1){let l;typeof t=="string"?l=cn(t):(l={...t},P(!l.pathname||!l.pathname.includes("?"),Hu("?","pathname","search",l)),P(!l.pathname||!l.pathname.includes("#"),Hu("#","pathname","hash",l)),P(!l.search||!l.search.includes("#"),Hu("#","search","hash",l)));let i=t===""||l.pathname==="",u=i?"/":l.pathname,o;if(u==null)o=a;else{let g=e.length-1;if(!n&&u.startsWith("..")){let d=u.split("/");for(;d[0]==="..";)d.shift(),g-=1;l.pathname=d.join("/")}o=g>=0?e[g]:"/"}let s=Kp(l,o),r=u&&u!=="/"&&u.endsWith("/"),f=(i||u===".")&&a.endsWith("/");return!s.pathname.endsWith("/")&&(r||f)&&(s.pathname+="/"),s}var ye=t=>t.join("/").replace(/\/\/+/g,"/"),Wp=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Fp=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Pp=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $p(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var wf=["POST","PUT","PATCH","DELETE"];new Set(wf);var ty=["GET",...wf];new Set(ty);var hn=v.createContext(null);hn.displayName="DataRouter";var Wi=v.createContext(null);Wi.displayName="DataRouterState";v.createContext(!1);var Tf=v.createContext({isTransitioning:!1});Tf.displayName="ViewTransition";var ey=v.createContext(new Map);ey.displayName="Fetchers";var ay=v.createContext(null);ay.displayName="Await";var le=v.createContext(null);le.displayName="Navigation";var vl=v.createContext(null);vl.displayName="Location";var ie=v.createContext({outlet:null,matches:[],isDataRoute:!1});ie.displayName="Route";var js=v.createContext(null);js.displayName="RouteError";function ny(t,{relative:e}={}){P(bl(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:n}=v.useContext(le),{hash:l,pathname:i,search:u}=wl(t,{relative:e}),o=i;return a!=="/"&&(o=i==="/"?a:ye([a,i])),n.createHref({pathname:o,search:u,hash:l})}function bl(){return v.useContext(vl)!=null}function Fe(){return P(bl(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(vl).location}var Sf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Af(t){v.useContext(le).static||v.useLayoutEffect(t)}function ly(){let{isDataRoute:t}=v.useContext(ie);return t?yy():iy()}function iy(){P(bl(),"useNavigate() may be used only in the context of a <Router> component.");let t=v.useContext(hn),{basename:e,navigator:a}=v.useContext(le),{matches:n}=v.useContext(ie),{pathname:l}=Fe(),i=JSON.stringify(vf(n)),u=v.useRef(!1);return Af(()=>{u.current=!0}),v.useCallback((s,r={})=>{if(ee(u.current,Sf),!u.current)return;if(typeof s=="number"){a.go(s);return}let f=bf(s,JSON.parse(i),l,r.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ye([e,f.pathname])),(r.replace?a.replace:a.push)(f,r.state,r)},[e,a,i,l,t])}v.createContext(null);function Ef(){let{matches:t}=v.useContext(ie),e=t[t.length-1];return e?e.params:{}}function wl(t,{relative:e}={}){let{matches:a}=v.useContext(ie),{pathname:n}=Fe(),l=JSON.stringify(vf(a));return v.useMemo(()=>bf(t,JSON.parse(l),n,e==="path"),[t,l,n,e])}function uy(t,e){return Cf(t,e)}function Cf(t,e,a,n){var h;P(bl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=v.useContext(le),{matches:i}=v.useContext(ie),u=i[i.length-1],o=u?u.params:{},s=u?u.pathname:"/",r=u?u.pathnameBase:"/",f=u&&u.route;{let c=f&&f.path||"";Rf(s,!f||c.endsWith("*")||c.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c==="/"?"*":`${c}/*`}">.`)}let g=Fe(),d;if(e){let c=typeof e=="string"?cn(e):e;P(r==="/"||((h=c.pathname)==null?void 0:h.startsWith(r)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${r}" but pathname "${c.pathname}" was given in the \`location\` prop.`),d=c}else d=g;let p=d.pathname||"/",T=p;if(r!=="/"){let c=r.replace(/^\//,"").split("/");T="/"+p.replace(/^\//,"").split("/").slice(c.length).join("/")}let w=gf(t,{pathname:T});ee(f||w!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ee(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=hy(w&&w.map(c=>Object.assign({},c,{params:Object.assign({},o,c.params),pathname:ye([r,l.encodeLocation?l.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?r:ye([r,l.encodeLocation?l.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),i,a,n);return e&&E?v.createElement(vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},E):E}function oy(){let t=py(),e=$p(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:i},"ErrorBoundary")," or"," ",v.createElement("code",{style:i},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},e),a?v.createElement("pre",{style:l},a):null,u)}var sy=v.createElement(oy,null),ry=class extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?v.createElement(ie.Provider,{value:this.props.routeContext},v.createElement(js.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cy({routeContext:t,match:e,children:a}){let n=v.useContext(hn);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),v.createElement(ie.Provider,{value:t},a)}function hy(t,e=[],a=null,n=null){if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let l=t,i=a==null?void 0:a.errors;if(i!=null){let s=l.findIndex(r=>r.route.id&&(i==null?void 0:i[r.route.id])!==void 0);P(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),l=l.slice(0,Math.min(l.length,s+1))}let u=!1,o=-1;if(a)for(let s=0;s<l.length;s++){let r=l[s];if((r.route.HydrateFallback||r.route.hydrateFallbackElement)&&(o=s),r.route.id){let{loaderData:f,errors:g}=a,d=r.route.loader&&!f.hasOwnProperty(r.route.id)&&(!g||g[r.route.id]===void 0);if(r.route.lazy||d){u=!0,o>=0?l=l.slice(0,o+1):l=[l[0]];break}}}return l.reduceRight((s,r,f)=>{let g,d=!1,p=null,T=null;a&&(g=i&&r.route.id?i[r.route.id]:void 0,p=r.route.errorElement||sy,u&&(o<0&&f===0?(Rf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,T=null):o===f&&(d=!0,T=r.route.hydrateFallbackElement||null)));let w=e.concat(l.slice(0,f+1)),E=()=>{let h;return g?h=p:d?h=T:r.route.Component?h=v.createElement(r.route.Component,null):r.route.element?h=r.route.element:h=s,v.createElement(cy,{match:r,routeContext:{outlet:s,matches:w,isDataRoute:a!=null},children:h})};return a&&(r.route.ErrorBoundary||r.route.errorElement||f===0)?v.createElement(ry,{location:a.location,revalidation:a.revalidation,component:p,error:g,children:E(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):E()},null)}function Hs(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dy(t){let e=v.useContext(hn);return P(e,Hs(t)),e}function fy(t){let e=v.useContext(Wi);return P(e,Hs(t)),e}function my(t){let e=v.useContext(ie);return P(e,Hs(t)),e}function Us(t){let e=my(t),a=e.matches[e.matches.length-1];return P(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function gy(){return Us("useRouteId")}function py(){var n;let t=v.useContext(js),e=fy("useRouteError"),a=Us("useRouteError");return t!==void 0?t:(n=e.errors)==null?void 0:n[a]}function yy(){let{router:t}=dy("useNavigate"),e=Us("useNavigate"),a=v.useRef(!1);return Af(()=>{a.current=!0}),v.useCallback(async(l,i={})=>{ee(a.current,Sf),a.current&&(typeof l=="number"?t.navigate(l):await t.navigate(l,{fromRouteId:e,...i}))},[t,e])}var gc={};function Rf(t,e,a){!e&&!gc[t]&&(gc[t]=!0,ee(!1,a))}v.memo(vy);function vy({routes:t,future:e,state:a}){return Cf(t,void 0,a,e)}function Cn(t){P(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function by({basename:t="/",children:e=null,location:a,navigationType:n="POP",navigator:l,static:i=!1}){P(!bl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),o=v.useMemo(()=>({basename:u,navigator:l,static:i,future:{}}),[u,l,i]);typeof a=="string"&&(a=cn(a));let{pathname:s="/",search:r="",hash:f="",state:g=null,key:d="default"}=a,p=v.useMemo(()=>{let T=Se(s,u);return T==null?null:{location:{pathname:T,search:r,hash:f,state:g,key:d},navigationType:n}},[u,s,r,f,g,d,n]);return ee(p!=null,`<Router basename="${u}"> is not able to match the URL "${s}${r}${f}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:v.createElement(le.Provider,{value:o},v.createElement(vl.Provider,{children:e,value:p}))}function wy({children:t,location:e}){return uy(jo(t),e)}function jo(t,e=[]){let a=[];return v.Children.forEach(t,(n,l)=>{if(!v.isValidElement(n))return;let i=[...e,l];if(n.type===v.Fragment){a.push.apply(a,jo(n.props.children,i));return}P(n.type===Cn,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!n.props.index||!n.props.children,"An index route cannot have child routes.");let u={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=jo(n.props.children,i)),a.push(u)}),a}var $l="get",ti="application/x-www-form-urlencoded";function Fi(t){return t!=null&&typeof t.tagName=="string"}function Ty(t){return Fi(t)&&t.tagName.toLowerCase()==="button"}function Sy(t){return Fi(t)&&t.tagName.toLowerCase()==="form"}function Ay(t){return Fi(t)&&t.tagName.toLowerCase()==="input"}function Ey(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Cy(t,e){return t.button===0&&(!e||e==="_self")&&!Ey(t)}var Ll=null;function Ry(){if(Ll===null)try{new FormData(document.createElement("form"),0),Ll=!1}catch{Ll=!0}return Ll}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(t){return t!=null&&!Oy.has(t)?(ee(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ti}"`),null):t}function My(t,e){let a,n,l,i,u;if(Sy(t)){let o=t.getAttribute("action");n=o?Se(o,e):null,a=t.getAttribute("method")||$l,l=Uu(t.getAttribute("enctype"))||ti,i=new FormData(t)}else if(Ty(t)||Ay(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=t.getAttribute("formaction")||o.getAttribute("action");if(n=s?Se(s,e):null,a=t.getAttribute("formmethod")||o.getAttribute("method")||$l,l=Uu(t.getAttribute("formenctype"))||Uu(o.getAttribute("enctype"))||ti,i=new FormData(o,t),!Ry()){let{name:r,type:f,value:g}=t;if(f==="image"){let d=r?`${r}.`:"";i.append(`${d}x`,"0"),i.append(`${d}y`,"0")}else r&&i.append(r,g)}}else{if(Fi(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=$l,n=null,l=ti,u=t}return i&&l==="text/plain"&&(u=i,i=void 0),{action:n,method:a.toLowerCase(),encType:l,formData:i,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _s(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dy(t,e,a){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname=`_root.${a}`:e&&Se(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${a}`,n}async function Ny(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ky(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function xy(t,e,a){let n=await Promise.all(t.map(async l=>{let i=e.routes[l.route.id];if(i){let u=await Ny(i,a);return u.links?u.links():[]}return[]}));return Uy(n.flat(1).filter(ky).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function pc(t,e,a,n,l,i){let u=(s,r)=>a[r]?s.route.id!==a[r].route.id:!0,o=(s,r)=>{var f;return a[r].pathname!==s.pathname||((f=a[r].route.path)==null?void 0:f.endsWith("*"))&&a[r].params["*"]!==s.params["*"]};return i==="assets"?e.filter((s,r)=>u(s,r)||o(s,r)):i==="data"?e.filter((s,r)=>{var g;let f=n.routes[s.route.id];if(!f||!f.hasLoader)return!1;if(u(s,r)||o(s,r))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((g=a[0])==null?void 0:g.params)||{},nextUrl:new URL(t,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function By(t,e,{includeHydrateFallback:a}={}){return jy(t.map(n=>{let l=e.routes[n.route.id];if(!l)return[];let i=[l.module];return l.clientActionModule&&(i=i.concat(l.clientActionModule)),l.clientLoaderModule&&(i=i.concat(l.clientLoaderModule)),a&&l.hydrateFallbackModule&&(i=i.concat(l.hydrateFallbackModule)),l.imports&&(i=i.concat(l.imports)),i}).flat(1))}function jy(t){return[...new Set(t)]}function Hy(t){let e={},a=Object.keys(t).sort();for(let n of a)e[n]=t[n];return e}function Uy(t,e){let a=new Set;return new Set(e),t.reduce((n,l)=>{let i=JSON.stringify(Hy(l));return a.has(i)||(a.add(i),n.push({key:i,link:l})),n},[])}function Of(){let t=v.useContext(hn);return _s(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function _y(){let t=v.useContext(Wi);return _s(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var zs=v.createContext(void 0);zs.displayName="FrameworkContext";function Mf(){let t=v.useContext(zs);return _s(t,"You must render this element inside a <HydratedRouter> element"),t}function zy(t,e){let a=v.useContext(zs),[n,l]=v.useState(!1),[i,u]=v.useState(!1),{onFocus:o,onBlur:s,onMouseEnter:r,onMouseLeave:f,onTouchStart:g}=e,d=v.useRef(null);v.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let w=h=>{h.forEach(c=>{u(c.isIntersecting)})},E=new IntersectionObserver(w,{threshold:.5});return d.current&&E.observe(d.current),()=>{E.disconnect()}}},[t]),v.useEffect(()=>{if(n){let w=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(w)}}},[n]);let p=()=>{l(!0)},T=()=>{l(!1),u(!1)};return a?t!=="intent"?[i,d,{}]:[i,d,{onFocus:wn(o,p),onBlur:wn(s,T),onMouseEnter:wn(r,p),onMouseLeave:wn(f,T),onTouchStart:wn(g,p)}]:[!1,d,{}]}function wn(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function Ly({page:t,...e}){let{router:a}=Of(),n=v.useMemo(()=>gf(a.routes,t,a.basename),[a.routes,t,a.basename]);return n?v.createElement(Yy,{page:t,matches:n,...e}):null}function qy(t){let{manifest:e,routeModules:a}=Mf(),[n,l]=v.useState([]);return v.useEffect(()=>{let i=!1;return xy(t,e,a).then(u=>{i||l(u)}),()=>{i=!0}},[t,e,a]),n}function Yy({page:t,matches:e,...a}){let n=Fe(),{manifest:l,routeModules:i}=Mf(),{basename:u}=Of(),{loaderData:o,matches:s}=_y(),r=v.useMemo(()=>pc(t,e,s,l,n,"data"),[t,e,s,l,n]),f=v.useMemo(()=>pc(t,e,s,l,n,"assets"),[t,e,s,l,n]),g=v.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let T=new Set,w=!1;if(e.forEach(h=>{var m;let c=l.routes[h.route.id];!c||!c.hasLoader||(!r.some(y=>y.route.id===h.route.id)&&h.route.id in o&&((m=i[h.route.id])!=null&&m.shouldRevalidate)||c.hasClientLoader?w=!0:T.add(h.route.id))}),T.size===0)return[];let E=Dy(t,u,"data");return w&&T.size>0&&E.searchParams.set("_routes",e.filter(h=>T.has(h.route.id)).map(h=>h.route.id).join(",")),[E.pathname+E.search]},[u,o,n,l,r,e,t,i]),d=v.useMemo(()=>By(f,l),[f,l]),p=qy(f);return v.createElement(v.Fragment,null,g.map(T=>v.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),d.map(T=>v.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),p.map(({key:T,link:w})=>v.createElement("link",{key:T,...w})))}function Gy(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var Df=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Df&&(window.__reactRouterVersion="7.7.0")}catch{}function Iy({basename:t,children:e,window:a}){let n=v.useRef();n.current==null&&(n.current=Np({window:a,v5Compat:!0}));let l=n.current,[i,u]=v.useState({action:l.action,location:l.location}),o=v.useCallback(s=>{v.startTransition(()=>u(s))},[u]);return v.useLayoutEffect(()=>l.listen(o),[l,o]),v.createElement(by,{basename:t,children:e,location:i.location,navigationType:i.action,navigator:l})}var Nf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=v.forwardRef(function({onClick:e,discover:a="render",prefetch:n="none",relative:l,reloadDocument:i,replace:u,state:o,target:s,to:r,preventScrollReset:f,viewTransition:g,...d},p){let{basename:T}=v.useContext(le),w=typeof r=="string"&&Nf.test(r),E,h=!1;if(typeof r=="string"&&w&&(E=r,Df))try{let z=new URL(window.location.href),N=r.startsWith("//")?new URL(z.protocol+r):new URL(r),bt=Se(N.pathname,T);N.origin===z.origin&&bt!=null?r=bt+N.search+N.hash:h=!0}catch{ee(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let c=ny(r,{relative:l}),[m,y,A]=zy(n,d),M=Ky(r,{replace:u,state:o,target:s,preventScrollReset:f,relative:l,viewTransition:g});function C(z){e&&e(z),z.defaultPrevented||M(z)}let O=v.createElement("a",{...d,...A,href:E||c,onClick:h||i?e:C,ref:Gy(p,y),target:s,"data-discover":!w&&a==="render"?"true":void 0});return m&&!w?v.createElement(v.Fragment,null,O,v.createElement(Ly,{page:c})):O});en.displayName="Link";var Vy=v.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:n="",end:l=!1,style:i,to:u,viewTransition:o,children:s,...r},f){let g=wl(u,{relative:r.relative}),d=Fe(),p=v.useContext(Wi),{navigator:T,basename:w}=v.useContext(le),E=p!=null&&Py(g)&&o===!0,h=T.encodeLocation?T.encodeLocation(g).pathname:g.pathname,c=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;a||(c=c.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&w&&(m=Se(m,w)||m);const y=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let A=c===h||!l&&c.startsWith(h)&&c.charAt(y)==="/",M=m!=null&&(m===h||!l&&m.startsWith(h)&&m.charAt(h.length)==="/"),C={isActive:A,isPending:M,isTransitioning:E},O=A?e:void 0,z;typeof n=="function"?z=n(C):z=[n,A?"active":null,M?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let N=typeof i=="function"?i(C):i;return v.createElement(en,{...r,"aria-current":O,className:z,ref:f,style:N,to:u,viewTransition:o},typeof s=="function"?s(C):s)});Vy.displayName="NavLink";var Zy=v.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:n,replace:l,state:i,method:u=$l,action:o,onSubmit:s,relative:r,preventScrollReset:f,viewTransition:g,...d},p)=>{let T=Wy(),w=Fy(o,{relative:r}),E=u.toLowerCase()==="get"?"get":"post",h=typeof o=="string"&&Nf.test(o),c=m=>{if(s&&s(m),m.defaultPrevented)return;m.preventDefault();let y=m.nativeEvent.submitter,A=(y==null?void 0:y.getAttribute("formmethod"))||u;T(y||m.currentTarget,{fetcherKey:e,method:A,navigate:a,replace:l,state:i,relative:r,preventScrollReset:f,viewTransition:g})};return v.createElement("form",{ref:p,method:E,action:w,onSubmit:n?s:c,...d,"data-discover":!h&&t==="render"?"true":void 0})});Zy.displayName="Form";function Qy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kf(t){let e=v.useContext(hn);return P(e,Qy(t)),e}function Ky(t,{target:e,replace:a,state:n,preventScrollReset:l,relative:i,viewTransition:u}={}){let o=ly(),s=Fe(),r=wl(t,{relative:i});return v.useCallback(f=>{if(Cy(f,e)){f.preventDefault();let g=a!==void 0?a:el(s)===el(r);o(t,{replace:g,state:n,preventScrollReset:l,relative:i,viewTransition:u})}},[s,o,r,a,n,e,t,l,i,u])}var Xy=0,Jy=()=>`__${String(++Xy)}__`;function Wy(){let{router:t}=kf("useSubmit"),{basename:e}=v.useContext(le),a=gy();return v.useCallback(async(n,l={})=>{let{action:i,method:u,encType:o,formData:s,body:r}=My(n,e);if(l.navigate===!1){let f=l.fetcherKey||Jy();await t.fetch(f,a,l.action||i,{preventScrollReset:l.preventScrollReset,formData:s,body:r,formMethod:l.method||u,formEncType:l.encType||o,flushSync:l.flushSync})}else await t.navigate(l.action||i,{preventScrollReset:l.preventScrollReset,formData:s,body:r,formMethod:l.method||u,formEncType:l.encType||o,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[t,e,a])}function Fy(t,{relative:e}={}){let{basename:a}=v.useContext(le),n=v.useContext(ie);P(n,"useFormAction must be used inside a RouteContext");let[l]=n.matches.slice(-1),i={...wl(t||".",{relative:e})},u=Fe();if(t==null){i.search=u.search;let o=new URLSearchParams(i.search),s=o.getAll("index");if(s.some(f=>f==="")){o.delete("index"),s.filter(g=>g).forEach(g=>o.append("index",g));let f=o.toString();i.search=f?`?${f}`:""}}return(!t||t===".")&&l.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:ye([a,i.pathname])),el(i)}function Py(t,e={}){let a=v.useContext(Tf);P(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=kf("useViewTransitionState"),l=wl(t,{relative:e.relative});if(!a.isTransitioning)return!1;let i=Se(a.currentLocation.pathname,n)||a.currentLocation.pathname,u=Se(a.nextLocation.pathname,n)||a.nextLocation.pathname;return ki(l.pathname,u)!=null||ki(l.pathname,i)!=null}const xf=({items:t})=>{const e=n=>n.id&&typeof n.id=="object"&&n.id.videoId?n.id.videoId:n.id&&typeof n.id=="string"?n.id:"unknown",a=n=>{const l=new Date(n),u=Math.abs(new Date-l),o=Math.floor(u/(1e3*60*60*24));return o===0?"오늘":o===1?"1일 전":o<7?`${o}일 전`:o<30?`${Math.floor(o/7)}주 전`:o<365?`${Math.floor(o/30)}개월 전`:`${Math.floor(o/365)}년 전`};return S.jsx(S.Fragment,{children:t.map((n,l)=>S.jsx(en,{to:`/Videos/watch/${e(n)}`,state:{videoData:n},className:"block group cursor-pointer",children:S.jsxs("div",{className:"bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors",children:[S.jsx("div",{className:"relative aspect-video bg-gray-800",children:S.jsx("img",{src:n.snippet.thumbnails.high.url,alt:n.snippet.title,className:"w-full h-full object-cover rounded-lg"})}),S.jsxs("div",{className:"p-3",children:[S.jsx("h3",{className:"text-white text-sm font-medium line-clamp-2 mb-1 group-hover:text-gray-200",children:n.snippet.title}),S.jsx("p",{className:"text-gray-400 text-sm mb-1 hover:text-white",children:n.snippet.channelTitle}),S.jsx("p",{className:"text-gray-400 text-sm",children:a(n.snippet.publishedAt)})]})]})},l))})},$y=[{kind:"youtube#searchResult",etag:"sLCOefK0WLy2mPq9tumkpnNOjVA",id:{kind:"youtube#video",videoId:"OTWYsXF99iY"},snippet:{publishedAt:"2022-09-24T11:30:05Z",channelId:"UCg-p3lQIqmhh7gHpyaOmOiQ",title:"British Highschoolers try School Lunch in Korea!!",description:"While visiting Korea and having the time of their lives, we also wanted to give the boys an experience of what the lives of High ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/OTWYsXF99iY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/OTWYsXF99iY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/OTWYsXF99iY/hqdefault.jpg",width:480,height:360}},channelTitle:"영국남자 Korean Englishman",liveBroadcastContent:"none",publishTime:"2022-09-24T11:30:05Z"}},{kind:"youtube#searchResult",etag:"JXvNUyqCr1dsDul2c9Z1oJhO-hQ",id:{kind:"youtube#video",videoId:"xNkMbGrUdqU"},snippet:{publishedAt:"2022-09-23T14:38:06Z",channelId:"UCpjOmwiy88a9EV3Rv8ukJgw",title:"대한민국 VS 코스타리카 : 하나은행 초청 축구국가대표팀 친선경기 하이라이트 - 2022.09.23",description:"대한민국 VS 코스타리카 : 하나은행 초청 축구국가대표팀 친선경기 하이라이트 - 2022.09.23 #대한축구협회 공식 채널 대한민국 축구 ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/xNkMbGrUdqU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/xNkMbGrUdqU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/xNkMbGrUdqU/hqdefault.jpg",width:480,height:360}},channelTitle:"KFATV_대한민국 축구 국가대표팀",liveBroadcastContent:"none",publishTime:"2022-09-23T14:38:06Z"}},{kind:"youtube#searchResult",etag:"yteWjK0XHj2lht_OqEfGI3-pq00",id:{kind:"youtube#video",videoId:"IrRFh1dLRQM"},snippet:{publishedAt:"2022-09-23T13:40:20Z",channelId:"UCjn-VbcIkAeXQKCmLJV8YwQ",title:"코스타리카전 하이라이트 | 2022 축구 국가대표 평가전 대한민국 vs 코스타리카 하이라이트 | 디지털 독점 생중계 | 쿠팡플레이 | 쿠팡",description:"대한민국 2 - 2 코스타리카 2022 축구 국가대표 평가전 하이라이트 더 보고 싶다면? 지금 쿠팡플레이에서 확인하기!",thumbnails:{default:{url:"https://i.ytimg.com/vi/IrRFh1dLRQM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/IrRFh1dLRQM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/IrRFh1dLRQM/hqdefault.jpg",width:480,height:360}},channelTitle:"쿠팡플레이 Coupang Play",liveBroadcastContent:"none",publishTime:"2022-09-23T13:40:20Z"}},{kind:"youtube#searchResult",etag:"BIEhp-00sfG0HabrdNAj83L5bYM",id:{kind:"youtube#video",videoId:"mPq9PAZM43M"},snippet:{publishedAt:"2022-09-23T13:57:34Z",channelId:"UCY_WNRa7H0P420fJkOFovtQ",title:"South Korea vs Costa Rica 2-2 ( Friendlies ) 23/09/2022",description:"South Korea vs Costa Rica 2-2 ( Friendlies ) 23/09/2022 1-0 H. Hee-chan 28' 2-0 J. Bennette 41' 2-1 J. Bennette 64' 2-2 S.",thumbnails:{default:{url:"https://i.ytimg.com/vi/mPq9PAZM43M/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/mPq9PAZM43M/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/mPq9PAZM43M/hqdefault.jpg",width:480,height:360}},channelTitle:"DEL PIERO 10",liveBroadcastContent:"none",publishTime:"2022-09-23T13:57:34Z"}},{kind:"youtube#searchResult",etag:"0TAGfPgdMc6n8zlJxeXJ-wM6CBw",id:{kind:"youtube#video",videoId:"Ko1bqasNDls"},snippet:{publishedAt:"2018-12-16T12:47:18Z",channelId:"UCFMkPeE8jiPirJMv9kttuIg",title:"South Korea 4K. Interesting Facts About South Korea",description:"South Korea is one of the most developed countries today. Lets take a tour of Korea and see modern Korean cities. Seoul, Busan ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/Ko1bqasNDls/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Ko1bqasNDls/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Ko1bqasNDls/hqdefault.jpg",width:480,height:360}},channelTitle:"CoolVision",liveBroadcastContent:"none",publishTime:"2018-12-16T12:47:18Z"}},{kind:"youtube#searchResult",etag:"-WBBf5ZALtk3cXr0FsaI5CPciVk",id:{kind:"youtube#video",videoId:"Y_KWTkEqG2o"},snippet:{publishedAt:"2022-09-25T20:07:51Z",channelId:"UCKJtYrlWaF3G0LIneEKoPew",title:"Night Shift With the Hardest Tournament In Korea | Uprising Korea 2022: The ATP Fight Companion",description:"TEKKEN7 #Aris #TWT2022 Aris had to tap out due to the time, check out Top 3 on https://www.twitch.tv/videos/1600697972 ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/Y_KWTkEqG2o/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Y_KWTkEqG2o/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Y_KWTkEqG2o/hqdefault.jpg",width:480,height:360}},channelTitle:"Avoiding The Puddle",liveBroadcastContent:"none",publishTime:"2022-09-25T20:07:51Z"}},{kind:"youtube#searchResult",etag:"WMrM2ghOy8F-mEdAiP1lX0p0dek",id:{kind:"youtube#video",videoId:"cXX5J3rHjHk"},snippet:{publishedAt:"2022-09-25T03:09:45Z",channelId:"UCtKKtyxOmmt60A2-pp0B1cw",title:"There are some things about Korea in the Tower of London?, Tower of London, Queen, AMWF, Couple",description:"toweroflondon #queenelizabeth #amwf.",thumbnails:{default:{url:"https://i.ytimg.com/vi/cXX5J3rHjHk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/cXX5J3rHjHk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/cXX5J3rHjHk/hqdefault.jpg",width:480,height:360}},channelTitle:"브리티쉬 새댁 : BRITISH WIFE",liveBroadcastContent:"none",publishTime:"2022-09-25T03:09:45Z"}},{kind:"youtube#searchResult",etag:"VhPanuQC4a0QcSr88ZmWldTTvnE",id:{kind:"youtube#video",videoId:"poHTA94-BeY"},snippet:{publishedAt:"2022-09-21T15:00:28Z",channelId:"UCn8zNIfYAQNdrFRrr8oibKw",title:"What North Korea Doesn’t Want You To See | Super Users",description:"Blogger Jacob Bogle often receives this warning, “State-sponsored actors are attempting to hack into your account.” It's all ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/poHTA94-BeY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/poHTA94-BeY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/poHTA94-BeY/hqdefault.jpg",width:480,height:360}},channelTitle:"VICE",liveBroadcastContent:"none",publishTime:"2022-09-21T15:00:28Z"}},{kind:"youtube#searchResult",etag:"rGmZBOTYAjhr2P9WvyJ0nH9N-dU",id:{kind:"youtube#video",videoId:"yICHjopBVT0"},snippet:{publishedAt:"2022-09-23T13:40:34Z",channelId:"UC83jt4dlz1Gjl58fzQrrKZg",title:"US aircraft carrier arrives at naval base in South Korea&#39;s Busan",description:"US aircraft carrier USS Ronald Reagan has arrived at a naval base in South Korea's southern port city of Busan. Officials in Seoul ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/yICHjopBVT0/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/yICHjopBVT0/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/yICHjopBVT0/hqdefault.jpg",width:480,height:360}},channelTitle:"CNA",liveBroadcastContent:"none",publishTime:"2022-09-23T13:40:34Z"}},{kind:"youtube#searchResult",etag:"47b4-JmLcO11LACaUuRS7IK72K4",id:{kind:"youtube#video",videoId:"udtN3czhkA8"},snippet:{publishedAt:"2022-09-24T23:00:31Z",channelId:"UCa-DreapaYm4Roo0CfUBGQg",title:"bye seoul ✨ a day of my life in korea ☕ cafe hopping in daejeon, a little trip out of seoul vlog",description:"Head to https://squarespace.com/caricakes to save 10% off your first purchase of a website or domain using code CARICAKES ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/udtN3czhkA8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/udtN3czhkA8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/udtN3czhkA8/hqdefault.jpg",width:480,height:360}},channelTitle:"cari cakes",liveBroadcastContent:"none",publishTime:"2022-09-24T23:00:31Z"}},{kind:"youtube#searchResult",etag:"g9BlAPsYE79_C_3JgqCGB_AEpWQ",id:{kind:"youtube#video",videoId:"3P1CnWI62Ik"},snippet:{publishedAt:"2020-07-30T05:46:28Z",channelId:"UChhOtjq-3QyyLmP2jv9amrg",title:"Feel the Rhythm of KOREA: SEOUL",description:"Enjoy wonderful attractions of South Korea with a lively, rhythmic sound! Korean Tourism Organization collaborated with an ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/3P1CnWI62Ik/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/3P1CnWI62Ik/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/3P1CnWI62Ik/hqdefault.jpg",width:480,height:360}},channelTitle:"Imagine Your Korea",liveBroadcastContent:"none",publishTime:"2020-07-30T05:46:28Z"}},{kind:"youtube#searchResult",etag:"ru_YTz8hyk0F8R8wB7T09knh_jI",id:{kind:"youtube#video",videoId:"4uqoz7xIf6o"},snippet:{publishedAt:"2022-09-23T12:58:56Z",channelId:"UCydi_iDuARZqbC0vYpGhfsQ",title:"South Korea vs Costa Rica 2-2 Extеndеd Hіghlіghts &amp; Gоals 2022 HD",description:"Korea#CostaRica#SoonGoal.",thumbnails:{default:{url:"https://i.ytimg.com/vi/4uqoz7xIf6o/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/4uqoz7xIf6o/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/4uqoz7xIf6o/hqdefault.jpg",width:480,height:360}},channelTitle:"tahahahahahbarame",liveBroadcastContent:"none",publishTime:"2022-09-23T12:58:56Z"}},{kind:"youtube#searchResult",etag:"GbelpdHsiy3KHvkC7zhm4QQWdzg",id:{kind:"youtube#video",videoId:"UDlWtkvFYLU"},snippet:{publishedAt:"2022-09-24T23:18:39Z",channelId:"UCO0akufu9MOzyz3nvGIXAAw",title:"North Korea fires ballistic missile towards the Sea of Japan",description:"South Korea's Joint Chiefs of Staff have announced North Korea has fired an unspecified ballistic missile towards the sea of ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/UDlWtkvFYLU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/UDlWtkvFYLU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/UDlWtkvFYLU/hqdefault.jpg",width:480,height:360}},channelTitle:"Sky News Australia",liveBroadcastContent:"none",publishTime:"2022-09-24T23:18:39Z"}},{kind:"youtube#searchResult",etag:"YAH595UCgwnGgeFIzORsPSGF1Z8",id:{kind:"youtube#video",videoId:"eVFMDMpY36o"},snippet:{publishedAt:"2020-11-21T04:43:42Z",channelId:"UCkIom4UP_2D0DXuG92vd_KQ",title:"【Seoul】 Travel Guide - Top 10 Seoul | Korea Travel | Asia Travel | Travel at home",description:"Follow us to the most beautiful places in Seoul! Have an amazing trip at home. In this video, we'll cover more than Top ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/eVFMDMpY36o/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/eVFMDMpY36o/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/eVFMDMpY36o/hqdefault.jpg",width:480,height:360}},channelTitle:"Before Your Trip",liveBroadcastContent:"none",publishTime:"2020-11-21T04:43:42Z"}},{kind:"youtube#searchResult",etag:"rAcCkuleJdI7Kwgus5cR7yUnVyo",id:{kind:"youtube#video",videoId:"rXDoqD7FjQw"},snippet:{publishedAt:"2022-09-22T16:33:25Z",channelId:"UC_gUM8rL-Lrg6O3adPW9K1g",title:"WION Fineprint | North Korea denies sending arms to Russia amid Ukraine war",description:"North Korea denied sending weapons to Russia, accusing the United States of spreading rumours about such a sale to tarnish ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/rXDoqD7FjQw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/rXDoqD7FjQw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/rXDoqD7FjQw/hqdefault.jpg",width:480,height:360}},channelTitle:"WION",liveBroadcastContent:"none",publishTime:"2022-09-22T16:33:25Z"}},{kind:"youtube#searchResult",etag:"ybHTGc970cUMrjeGLj8LSnXOzbA",id:{kind:"youtube#video",videoId:"X5q0Fd_KV1w"},snippet:{publishedAt:"2022-09-23T11:09:06Z",channelId:"UC925y3Dn61A7MBXGZJWNX9A",title:"MOVING IN KOREA (+ grocery shopping)",description:"BGM sources BGM President https://www.youtube.com/c/bgmpresident 별 헤는 다락방 Starry Attic ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/X5q0Fd_KV1w/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/X5q0Fd_KV1w/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/X5q0Fd_KV1w/hqdefault.jpg",width:480,height:360}},channelTitle:"KrisTells Vlogs",liveBroadcastContent:"none",publishTime:"2022-09-23T11:09:06Z"}},{kind:"youtube#searchResult",etag:"Fko1jl6ZczSFvLyX69dkEe9R4nI",id:{kind:"youtube#video",videoId:"OIGBoo2QbFM"},snippet:{publishedAt:"2022-09-23T09:15:00Z",channelId:"UC91JExDefknFHQ5Lqp-g_Jg",title:"[ENG] 무슨 노래 듣고 계세요? 고려대편 What Song Are You listening To? Korea University",description:'고려대학교에서 사람들에게 물어봤습니다. "무슨 노래 듣고 계세요?" *본 영상에서 인터뷰에 응해주신 모든 분들께는 유튜브 촬영 ...',thumbnails:{default:{url:"https://i.ytimg.com/vi/OIGBoo2QbFM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/OIGBoo2QbFM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/OIGBoo2QbFM/hqdefault.jpg",width:480,height:360}},channelTitle:"복코s",liveBroadcastContent:"none",publishTime:"2022-09-23T09:15:00Z"}},{kind:"youtube#searchResult",etag:"dNwGFbxrh_ZK1kG7ax2X3Byi57I",id:{kind:"youtube#video",videoId:"jejLBWMsyHk"},snippet:{publishedAt:"2022-07-27T13:28:04Z",channelId:"UCg-p3lQIqmhh7gHpyaOmOiQ",title:"Pack your bags boys! You&#39;re going to KOREA!!!",description:"A year after a handshake and a promise… the British High schoolers are finally coming on a School Trip to Korea! 7 students.",thumbnails:{default:{url:"https://i.ytimg.com/vi/jejLBWMsyHk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/jejLBWMsyHk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/jejLBWMsyHk/hqdefault.jpg",width:480,height:360}},channelTitle:"영국남자 Korean Englishman",liveBroadcastContent:"none",publishTime:"2022-07-27T13:28:04Z"}},{kind:"youtube#searchResult",etag:"QUOydUauRWhJhZ_1YBT7uIpreM8",id:{kind:"youtube#video",videoId:"4usmpuMP7R4"},snippet:{publishedAt:"2022-09-23T18:17:27Z",channelId:"UC8p1vwvWtl6T73JiExfWs1g",title:"U.S. aircraft carrier arrives in South Korea for first time since 2018",description:"An American aircraft carrier has arrived in South Korea for the first time in almost five years. The U.S. and South Korean navies will ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/4usmpuMP7R4/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/4usmpuMP7R4/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/4usmpuMP7R4/hqdefault.jpg",width:480,height:360}},channelTitle:"CBS News",liveBroadcastContent:"none",publishTime:"2022-09-23T18:17:27Z"}},{kind:"youtube#searchResult",etag:"l8khr7AUrmkyRXFla0D5kQShrp0",id:{kind:"youtube#video",videoId:"o70MzTHHNbI"},snippet:{publishedAt:"2018-10-22T18:59:58Z",channelId:"UCFMkPeE8jiPirJMv9kttuIg",title:"Seoul South Korea 4K .City - Sights - People",description:"Lets take a tour to Seoul South Korea. One of the largest cities in the world renowned for its architecture, technical advancements ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/o70MzTHHNbI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/o70MzTHHNbI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/o70MzTHHNbI/hqdefault.jpg",width:480,height:360}},channelTitle:"CoolVision",liveBroadcastContent:"none",publishTime:"2018-10-22T18:59:58Z"}},{kind:"youtube#searchResult",etag:"DIgkkmzdS-cUUr86ruCcsXgRG6M",id:{kind:"youtube#video",videoId:"P2lhXFe8C1k"},snippet:{publishedAt:"2022-09-24T07:50:00Z",channelId:"UCxHoBXkY88Tb8z1Ssj6CWsQ",title:"যৌথ সামরিক মহড়ায় দক্ষিণ কোরিয়া-যুক্তরাষ্ট্র | USA | South Korea | North Korea | Somoy TV",description:"jointexercises #usaandsouthkorea #usa #USaircraft #southkorea #northkorea #somoytv The United States is going to conduct ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/P2lhXFe8C1k/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/P2lhXFe8C1k/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/P2lhXFe8C1k/hqdefault.jpg",width:480,height:360}},channelTitle:"SOMOY TV",liveBroadcastContent:"none",publishTime:"2022-09-24T07:50:00Z"}},{kind:"youtube#searchResult",etag:"N6qCh0kjYbXxXqUHIP2huk-Qync",id:{kind:"youtube#video",videoId:"0YZxpzrANXM"},snippet:{publishedAt:"2022-09-09T09:33:00Z",channelId:"UCtyltqstMm6iKnkk2Y9Zt8A",title:"We went to KOREA to meet BTS 💜 Staying at KOREA&#39;S First Robot Hotel",description:"ROBOTS, TECHNOLOGY AUR BHOT SARA DHAMAAL #KOREA SUBSCRIBE!!! . . Read my travel stories: ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/0YZxpzrANXM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/0YZxpzrANXM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/0YZxpzrANXM/hqdefault.jpg",width:480,height:360}},channelTitle:"Wanderers Hub",liveBroadcastContent:"none",publishTime:"2022-09-09T09:33:00Z"}},{kind:"youtube#searchResult",etag:"36aoMmq9pwSNJc9UVSAIqhkwLc4",id:{kind:"youtube#video",videoId:"Wfu846Gb6Vk"},snippet:{publishedAt:"2022-09-23T13:30:08Z",channelId:"UCttQf1sGLn5wZaaqoHam1-w",title:"The First Ever Safari Zone in South Korea is INSANE, BECAUSE... - Pokemon GO",description:"After not being able to attend any in-person events for over 2 years, finally this is not just the first Safari Zone to happen in South ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/Wfu846Gb6Vk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Wfu846Gb6Vk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Wfu846Gb6Vk/hqdefault.jpg",width:480,height:360}},channelTitle:"BrandonTan91",liveBroadcastContent:"none",publishTime:"2022-09-23T13:30:08Z"}},{kind:"youtube#searchResult",etag:"m17Pfamo3CmEYNqg7OyGhtrf8Cg",id:{kind:"youtube#video",videoId:"gwzO4fPkDEk"},snippet:{publishedAt:"2022-09-23T14:14:56Z",channelId:"UC5klUqmlo9G8U5iaQ53ogIA",title:"Announcing my new album, and arriving in South Korea",description:"It's my first time in South Korea and I'm absolutely loving it. I also announced my new album Future eForever in this video. If you'd ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/gwzO4fPkDEk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/gwzO4fPkDEk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/gwzO4fPkDEk/hqdefault.jpg",width:480,height:360}},channelTitle:"Jonathan Ogden",liveBroadcastContent:"none",publishTime:"2022-09-23T14:14:56Z"}},{kind:"youtube#searchResult",etag:"3DXONSxKDfA-3Yzj9QeyGmz_fb8",id:{kind:"youtube#video",videoId:"x6AHuxqt1U0"},snippet:{publishedAt:"2022-09-22T02:00:09Z",channelId:"UCNrRJm0gWx69f8Ybdnsi23A",title:"shopping in korea vlog 🇰🇷 shoes &amp; accessories haul from Gotomall Underground Shopping Center",description:"come shopping with me! shoes & accessories haul from Gotomall Underground shopping center in Seoul. 고투몰 지하 상가 ...",thumbnails:{default:{url:"https://i.ytimg.com/vi/x6AHuxqt1U0/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/x6AHuxqt1U0/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/x6AHuxqt1U0/hqdefault.jpg",width:480,height:360}},channelTitle:"sassyinkorea",liveBroadcastContent:"none",publishTime:"2022-09-22T02:00:09Z"}}],t0={items:$y},e0=[{kind:"youtube#video",etag:"MIl-Q4sYqh8lRN0hl_SLPKqFleE",id:"gHzuabZUd6c",snippet:{publishedAt:"2022-09-24T19:59:59Z",channelId:"UCX6OQ3DkcsbYNE6H8uQQuVA",title:"Survive 100 Days In Circle, Win $500,000",description:`🤑 Sign up for Venmo and use the code MRBEAST to get $20 (no code needed if signing up on desktop). Get Venmo → http://venmo.me/mrbeast 

New Merch - https://shopmrbeast.com/

SUBSCRIBE OR I TAKE YOUR DOG
╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ 
╠╗║╚╝║║╠╗║╚╣║║║║║═╣
╚═╩══╩═╩═╩═╩╝╚╩═╩═╝

----------------------------------------------------------------
follow all of these or i will kick you
• Facebook - https://www.facebook.com/MrBeast6000/
• Twitter - https://twitter.com/MrBeast
•  Instagram - https://www.instagram.com/mrbeast
•  Im Hiring! - https://www.mrbeastjobs.com/
--------------------------------------------------------------------

Get Cash Machine by Oliver Tree here: https://lickd.lnk.to/niQ4VsID!mrbeast
License ID: r5Rqad9DRze
Get this and other songs for your next YouTube video at https://lickd.co`,thumbnails:{default:{url:"https://i.ytimg.com/vi/gHzuabZUd6c/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/gHzuabZUd6c/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/gHzuabZUd6c/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/gHzuabZUd6c/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/gHzuabZUd6c/maxresdefault.jpg",width:1280,height:720}},channelTitle:"MrBeast",categoryId:"24",liveBroadcastContent:"none",localized:{title:"Survive 100 Days In Circle, Win $500,000",description:`🤑 Sign up for Venmo and use the code MRBEAST to get $20 (no code needed if signing up on desktop). Get Venmo → http://venmo.me/mrbeast 

New Merch - https://shopmrbeast.com/

SUBSCRIBE OR I TAKE YOUR DOG
╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ 
╠╗║╚╝║║╠╗║╚╣║║║║║═╣
╚═╩══╩═╩═╩═╩╝╚╩═╩═╝

----------------------------------------------------------------
follow all of these or i will kick you
• Facebook - https://www.facebook.com/MrBeast6000/
• Twitter - https://twitter.com/MrBeast
•  Instagram - https://www.instagram.com/mrbeast
•  Im Hiring! - https://www.mrbeastjobs.com/
--------------------------------------------------------------------

Get Cash Machine by Oliver Tree here: https://lickd.lnk.to/niQ4VsID!mrbeast
License ID: r5Rqad9DRze
Get this and other songs for your next YouTube video at https://lickd.co`},defaultAudioLanguage:"en-US"}},{kind:"youtube#video",etag:"nxfx3OYN21gCrUy-KykL2pTpUnw",id:"qeo9iorAPj8",snippet:{publishedAt:"2022-09-25T14:00:33Z",channelId:"UCnmGIkw-KdI0W5siakKPKog",title:"I Built a Survival Shelter",description:`i am survival
shopify free trial - https://shopify.com/ryantrahan
howdy howdy pre-order - https://howdyhowdy.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/qeo9iorAPj8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/qeo9iorAPj8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/qeo9iorAPj8/hqdefault.jpg",width:480,height:360}},channelTitle:"Ryan Trahan",tags:["Ryan","Trahan","survival shelter","I built","solo overnight","overnight","solo"],categoryId:"24",liveBroadcastContent:"none",localized:{title:"I Built a Survival Shelter",description:`i am survival
shopify free trial - https://shopify.com/ryantrahan
howdy howdy pre-order - https://howdyhowdy.com`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"Y-jXkUqgkSqvWahz1-B_J73OPT4",id:"HkDfIclJoHA",snippet:{publishedAt:"2022-09-25T15:00:20Z",channelId:"UCto7D1L-MiRoOziCXK9uT5Q",title:"I Broke Astroneer in Half Using Dynamite and Trains",description:`Download and play One Punch Man - The Strongest NOW! https://bit.ly/OPMLGIO and don't forget to use my code OPMTS. Join over 1 million players to fight alongside Saitama and be a hero for fun!

JOIN MY STREAMS! ► https://www.twitch.tv/letsgameitout

Merch!  ► http://bit.ly/LetsGameItOutStore

Subscribe if you enjoy! ► http://bit.ly/letsgameitout_show

Twitter ► https://twitter.com/letsgameitout
Facebook ► https://www.facebook.com/letsgameitout

Want more LGIO?!

More Simulator Mayhem ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRzn3ja4BfqYUForg0p-p5wi

Funny Tycoon Games ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRwf14QPGmfDXCQQrDs860ig

The Finest One-Offs ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRwKf72d6spk7fSHhwwYuQu1

Some Truly Bizarre Games  ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRyM5mUsHwPN0PH6UVNfeNl2

#LetsGameItOut #Survival #Astroneer

I Broke Astroneer in Half Using Dynamite and Trains - Let's Game It Out

----------

Check it out on Steam ► https://store.steampowered.com/app/361420/ASTRONEER/

More about Astroneer (from Steam):

Explore and reshape distant worlds! Astroneer is set during the 25th century Intergalactic Age of Discovery, where Astroneers explore the frontiers of outer space, risking their lives in harsh environments to unearth rare discoveries and unlock the mysteries of the universe.

In this space sandbox adventure, players can work together to build custom bases above or below ground, create vehicles to explore a vast solar system, and use terrain to create anything they can imagine. A player’s creativity and ingenuity are the key to thriving on exciting planetary adventures! In Astroneer you can:
Reshape the ground under your feet as though it were made of clay.

In Astroneer, players use their deform tool to dig, collect, shape and build anything they wish. Use this ability to dig to the center of the planet, build a ramp into the sky, or make megaliths just by using terrain!
Survive on and explore carefully crafted planets that can be entirely deformed and traversed.

Our vast solar system includes 7 wondrous planets that players can travel between and explore every inch of, from the entire spherical surface, through treacherous layers of caves, all the way down to the mysterious core. Each of those planets has unique and challenging surface and cave biomes that offer a multitude of challenges for players on their journey.
Snap together components and objects to build bases and vehicles.

Items that Astroneers craft and find in the world can all be snapped and connected together to create unique creations for any situation. Customize and decorate your bases, vehicles, and Astroneer.
Play with friends in 4 player online drop-in/drop-out co-op.

Astroneer is better with friends. Group up with other players and work together to create massive industrial bases or to create fun games in the extensive creative sandbox.
Discover and uncover the mysteries of the solar system.

Once Astroneers are ready, they may choose to attempt to understand and possibly harness the power behind mysterious structures found in the world.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/HkDfIclJoHA/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/HkDfIclJoHA/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/HkDfIclJoHA/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/HkDfIclJoHA/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/HkDfIclJoHA/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Let's Game It Out",tags:["let's game it out","lets game it out","let game it out","let'sgameitout","letsgameitout","letgameitout","game it out","gameitout","lgio","josh let's game it out","let's game it out josh","lgio josh","josh lgio","let's game it out simulator","josh simulator","funny moments","astroneer","astroneer game","astroneer lgio","lets game it out astroneer","let's game it out astroneer","broke the game","broke astroneer","hydroneer game"],categoryId:"20",liveBroadcastContent:"none",localized:{title:"I Broke Astroneer in Half Using Dynamite and Trains",description:`Download and play One Punch Man - The Strongest NOW! https://bit.ly/OPMLGIO and don't forget to use my code OPMTS. Join over 1 million players to fight alongside Saitama and be a hero for fun!

JOIN MY STREAMS! ► https://www.twitch.tv/letsgameitout

Merch!  ► http://bit.ly/LetsGameItOutStore

Subscribe if you enjoy! ► http://bit.ly/letsgameitout_show

Twitter ► https://twitter.com/letsgameitout
Facebook ► https://www.facebook.com/letsgameitout

Want more LGIO?!

More Simulator Mayhem ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRzn3ja4BfqYUForg0p-p5wi

Funny Tycoon Games ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRwf14QPGmfDXCQQrDs860ig

The Finest One-Offs ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRwKf72d6spk7fSHhwwYuQu1

Some Truly Bizarre Games  ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRyM5mUsHwPN0PH6UVNfeNl2

#LetsGameItOut #Survival #Astroneer

I Broke Astroneer in Half Using Dynamite and Trains - Let's Game It Out

----------

Check it out on Steam ► https://store.steampowered.com/app/361420/ASTRONEER/

More about Astroneer (from Steam):

Explore and reshape distant worlds! Astroneer is set during the 25th century Intergalactic Age of Discovery, where Astroneers explore the frontiers of outer space, risking their lives in harsh environments to unearth rare discoveries and unlock the mysteries of the universe.

In this space sandbox adventure, players can work together to build custom bases above or below ground, create vehicles to explore a vast solar system, and use terrain to create anything they can imagine. A player’s creativity and ingenuity are the key to thriving on exciting planetary adventures! In Astroneer you can:
Reshape the ground under your feet as though it were made of clay.

In Astroneer, players use their deform tool to dig, collect, shape and build anything they wish. Use this ability to dig to the center of the planet, build a ramp into the sky, or make megaliths just by using terrain!
Survive on and explore carefully crafted planets that can be entirely deformed and traversed.

Our vast solar system includes 7 wondrous planets that players can travel between and explore every inch of, from the entire spherical surface, through treacherous layers of caves, all the way down to the mysterious core. Each of those planets has unique and challenging surface and cave biomes that offer a multitude of challenges for players on their journey.
Snap together components and objects to build bases and vehicles.

Items that Astroneers craft and find in the world can all be snapped and connected together to create unique creations for any situation. Customize and decorate your bases, vehicles, and Astroneer.
Play with friends in 4 player online drop-in/drop-out co-op.

Astroneer is better with friends. Group up with other players and work together to create massive industrial bases or to create fun games in the extensive creative sandbox.
Discover and uncover the mysteries of the solar system.

Once Astroneers are ready, they may choose to attempt to understand and possibly harness the power behind mysterious structures found in the world.`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"HjRYXOsX5n_6GyPJTnsPRv6wmMw",id:"IxWSdUxb1ns",snippet:{publishedAt:"2022-09-25T02:10:18Z",channelId:"UCXwRxm0zS0jBNTMOVI6xZJw",title:"Tropical Storm Ian update: Cone shifts west with rapid intensification expected | Recorded 7pm 9/25",description:`Tropical Storm Ian continues to move through the Caribbean on its way to the Gulf of Mexico. On its current track, the system is expected to have an impact on the Gulf Coast next week.\r
\r
More: https://www.khou.com/article/weather/hurricane/tracking-ian/285-46790bce-7189-49e5-adab-0b9516b971a4

Subscribe to the KHOU 11 News YouTube Channel | https://bit.ly/2GCgSZ0

KHOU Stands for Houston is our brand promise to celebrate everyday heroes, hold the powerful accountable and honor the core values of honesty and reliability. 

Follow KHOU 11 News on social!
FACEBOOK: https://www.facebook.com/khou11
TWITTER: https://www.twitter.com/khou
INSTAGRAM: https://www.instagram.com/khou11

Visit our website: https://www.khou11.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/IxWSdUxb1ns/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/IxWSdUxb1ns/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/IxWSdUxb1ns/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/IxWSdUxb1ns/sddefault.jpg",width:640,height:480}},channelTitle:"KHOU 11",tags:["weather","tropical storm ian","tropical storm ian 2022","hurricane season","tracking the tropics","tropical storm","tropical storm ian path","tropics update","hurricane ian","tropical storm in 2022 path","tropical storm in philippines 2022","tropical storm in texas 2022","tropical storm in miami 2022","hurricane season 2022 update"],categoryId:"25",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"Tropical Storm Ian update: Cone shifts west with rapid intensification expected | Recorded 7pm 9/25",description:`Tropical Storm Ian continues to move through the Caribbean on its way to the Gulf of Mexico. On its current track, the system is expected to have an impact on the Gulf Coast next week.\r
\r
More: https://www.khou.com/article/weather/hurricane/tracking-ian/285-46790bce-7189-49e5-adab-0b9516b971a4

Subscribe to the KHOU 11 News YouTube Channel | https://bit.ly/2GCgSZ0

KHOU Stands for Houston is our brand promise to celebrate everyday heroes, hold the powerful accountable and honor the core values of honesty and reliability. 

Follow KHOU 11 News on social!
FACEBOOK: https://www.facebook.com/khou11
TWITTER: https://www.twitter.com/khou
INSTAGRAM: https://www.instagram.com/khou11

Visit our website: https://www.khou11.com`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"stIFYVpXZI_ujKQ81fQ9rUAwDPI",id:"zwa7NzNBQig",snippet:{publishedAt:"2022-09-23T04:00:19Z",channelId:"UCmlkznD61Olu82oYGFr8gxg",title:"GloRilla, Cardi B - Tomorrow 2 (Official Music Video)",description:`Stream #Tomorrow2' here: 
https://GloRilla.lnk.to/Tomorrow2

Follow #GloRilla:
Instagram: https://www.instagram.com/glorillapimp/
TikTok: https://www.tiktok.com/t/ZTR6WV6SC/
Facebook: https://www.facebook.com/gloyaltygirl
Twitter: https://twitter.com/GloTheofficial
Follow #CardiB:
Instagram: https://www.instagram.com/iamcardib/
TikTok: https://www.tiktok.com/@iamcardib
Facebook: https://www.facebook.com/cardib
Twitter: https://twitter.com/iamcardib/

#Tomorrow2 #GloRilla #CardiB

Music video by GloRilla, Cardi B performing Tomorrow 2. © 2022 CMG Enterprises/Interscope Records

http://vevo.ly/JKU3ao`,thumbnails:{default:{url:"https://i.ytimg.com/vi/zwa7NzNBQig/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/zwa7NzNBQig/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/zwa7NzNBQig/hqdefault.jpg",width:480,height:360}},channelTitle:"GloRillaVEVO",tags:["GloRilla","Cardi","Tomorrow","CMG/Interscope","Records","Hip","Hop"],categoryId:"10",liveBroadcastContent:"none",localized:{title:"GloRilla, Cardi B - Tomorrow 2 (Official Music Video)",description:`Stream #Tomorrow2' here: 
https://GloRilla.lnk.to/Tomorrow2

Follow #GloRilla:
Instagram: https://www.instagram.com/glorillapimp/
TikTok: https://www.tiktok.com/t/ZTR6WV6SC/
Facebook: https://www.facebook.com/gloyaltygirl
Twitter: https://twitter.com/GloTheofficial
Follow #CardiB:
Instagram: https://www.instagram.com/iamcardib/
TikTok: https://www.tiktok.com/@iamcardib
Facebook: https://www.facebook.com/cardib
Twitter: https://twitter.com/iamcardib/

#Tomorrow2 #GloRilla #CardiB

Music video by GloRilla, Cardi B performing Tomorrow 2. © 2022 CMG Enterprises/Interscope Records

http://vevo.ly/JKU3ao`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"HUXR4I9qqqflX1qTmrBrKKom9r4",id:"4fikvcuirtY",snippet:{publishedAt:"2022-09-25T11:07:59Z",channelId:"UCS_hnpJLQTvBkqALgapi_4g",title:"BLACKPINK(블랙핑크) - Shut Down @인기가요 inkigayo 20220925",description:`BLACKPINK - Shut Down #SBSInkigayo_EP1155
블랙핑크 - Shut Down #BLACKPINK #ShutDown

SBS Inkigayo(인기가요) is a Korean music program broadcast by SBS. 

The show features some of K-pop artists’ performance every Sunday.
Check out this week’s Inkigayo Line up and meet your favorite artist!
🔗bit.ly/3epKoUp`,thumbnails:{default:{url:"https://i.ytimg.com/vi/4fikvcuirtY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/4fikvcuirtY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/4fikvcuirtY/hqdefault.jpg",width:480,height:360}},channelTitle:"스브스케이팝 X INKIGAYO",tags:["Inkigayo","인기가요직캠","안방1열직캠","스브스케이팝","스브스 직캠","인기가요","인가","음방","음악방송","블랙핑크","BLACKPINK","Shut Down","블랙핑크 컴백","블랙핑크 정규","블랙핑크 인기가요","블랙핑크 인가","블랙핑크 무대","블랙핑크 안무","블랙핑크 직캠","블랙핑크 페이스캠","블랙핑크 풀캠","블랙핑크 신곡","핑크베놈","셧다운","지수","제니","로제","리사","JISOO","JENNIE","ROSÉ","LISA"],categoryId:"24",liveBroadcastContent:"none",defaultLanguage:"ko",localized:{title:"BLACKPINK(블랙핑크) - Shut Down @인기가요 inkigayo 20220925",description:`BLACKPINK - Shut Down #SBSInkigayo_EP1155
블랙핑크 - Shut Down #BLACKPINK #ShutDown

SBS Inkigayo(인기가요) is a Korean music program broadcast by SBS. 

The show features some of K-pop artists’ performance every Sunday.
Check out this week’s Inkigayo Line up and meet your favorite artist!
🔗bit.ly/3epKoUp`},defaultAudioLanguage:"ko"}},{kind:"youtube#video",etag:"aJDlNO4a2o0IYTaqZO46baXoRLo",id:"gl3bY6vME4w",snippet:{publishedAt:"2022-09-25T14:01:28Z",channelId:"UC6107grRI4m0o2-emgoDnAA",title:"It Sinks FAST! Patrol With the US Coast Guard in Destin, FL - Smarter Every Day 277",description:`Go to https://brilliant.org/smartereveryday to sign up for free & the first 200 people get 20% off an annual premium subscription

Click here if you're interested in subscribing: http://bit.ly/Subscribe2SED
⇊  Click below for more links!  ⇊
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
GET SMARTER SECTION
(The Coast Guard didn't ask me to put their recruiting page here, but I thought it was appropriate)

https://www.gocoastguard.com/Careers?gclid=Cj0KCQjw1bqZBhDXARIsANTjCPIF8Y1AwlmPJLcUkprbugczXgWDv3RLvDVQpO04ILQy90-vTWlzcskaAr_qEALw_wcB

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Tweet Ideas to me at:
http://twitter.com/smartereveryday

Smarter Every Day on Facebook
https://www.facebook.com/SmarterEveryDay

Smarter Every Day on Patreon
http://www.patreon.com/smartereveryday

Smarter Every Day On Instagram
http://www.instagram.com/smartereveryday

Smarter Every Day SubReddit
http://www.reddit.com/r/smartereveryday

Ambiance, audio and musicy things by: Gordon McGladdery 
https://www.ashellinthepit.com/
http://ashellinthepit.bandcamp.com/

If you feel like this video was worth your time and added value to your life, please SHARE THE VIDEO!

If you REALLY liked it, feel free to pitch a few dollars Smarter Every Day by becoming a Patron.
http://www.patreon.com/smartereveryday

Warm Regards,

Destin`,thumbnails:{default:{url:"https://i.ytimg.com/vi/gl3bY6vME4w/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/gl3bY6vME4w/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/gl3bY6vME4w/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/gl3bY6vME4w/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/gl3bY6vME4w/maxresdefault.jpg",width:1280,height:720}},channelTitle:"SmarterEveryDay",tags:["Smarter","Every","Day","Science","Physics","Destin","Sandlin","Education","Math","Smarter Every Day","experiment","nature","demonstration","slow","motion","slow motion","education","math","science","science education","what is science","Physics of","projects","experiments","science projects","Coast Guard","US Coast Guard","Rescue Patrol","Patrol","Boating","Rescue","Boat Rescue","Sinking Boat","Boat Wreck","Police"],categoryId:"28",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"It Sinks FAST! Patrol With the US Coast Guard in Destin, FL - Smarter Every Day 277",description:`Go to https://brilliant.org/smartereveryday to sign up for free & the first 200 people get 20% off an annual premium subscription

Click here if you're interested in subscribing: http://bit.ly/Subscribe2SED
⇊  Click below for more links!  ⇊
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
GET SMARTER SECTION
(The Coast Guard didn't ask me to put their recruiting page here, but I thought it was appropriate)

https://www.gocoastguard.com/Careers?gclid=Cj0KCQjw1bqZBhDXARIsANTjCPIF8Y1AwlmPJLcUkprbugczXgWDv3RLvDVQpO04ILQy90-vTWlzcskaAr_qEALw_wcB

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Tweet Ideas to me at:
http://twitter.com/smartereveryday

Smarter Every Day on Facebook
https://www.facebook.com/SmarterEveryDay

Smarter Every Day on Patreon
http://www.patreon.com/smartereveryday

Smarter Every Day On Instagram
http://www.instagram.com/smartereveryday

Smarter Every Day SubReddit
http://www.reddit.com/r/smartereveryday

Ambiance, audio and musicy things by: Gordon McGladdery 
https://www.ashellinthepit.com/
http://ashellinthepit.bandcamp.com/

If you feel like this video was worth your time and added value to your life, please SHARE THE VIDEO!

If you REALLY liked it, feel free to pitch a few dollars Smarter Every Day by becoming a Patron.
http://www.patreon.com/smartereveryday

Warm Regards,

Destin`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"JdAev6BnoQqiNsFN707WEJqGjFQ",id:"ph3DDl8fDcQ",snippet:{publishedAt:"2022-09-24T23:19:05Z",channelId:"UCepPGz8AVCbggMl3BvboaBA",title:"Brewstew - Scariest Roller Coasters",description:`And of course, the video about when I actually did get stuck on a roller coaster
https://www.youtube.com/watch?v=nXvo1oRqCfE

Merch Store:
https://teespring.com/stores/brewstew

Special Thanks to the people that support me on Patreon!
https://www.patreon.com/brewstew

Brewstew.com

Fan Mail:
P.O. Box 1
Lambertville, MI
48144

Music:
Hidden Agenda Kevin MacLeod (incompetech.com) 
Licensed under Creative Commons: By Attribution 3.0
http://creativecommons.org/licenses/b...

End Music by Mark Jay

Sound Effects:
http://www.freesfx.co.uk/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/ph3DDl8fDcQ/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/ph3DDl8fDcQ/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/ph3DDl8fDcQ/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/ph3DDl8fDcQ/sddefault.jpg",width:640,height:480}},channelTitle:"brewstewfilms",tags:["brewstew","roller coaster","rollercoaster","cedar point","sandusky","cartoon","flash animation","animation","magnum","millennium force","top thrill dragster","amusement park","theme park","stick figure","storytime","funny story","scariest","scariest roller coasters","tallest roller coasters"],categoryId:"23",liveBroadcastContent:"none",localized:{title:"Brewstew - Scariest Roller Coasters",description:`And of course, the video about when I actually did get stuck on a roller coaster
https://www.youtube.com/watch?v=nXvo1oRqCfE

Merch Store:
https://teespring.com/stores/brewstew

Special Thanks to the people that support me on Patreon!
https://www.patreon.com/brewstew

Brewstew.com

Fan Mail:
P.O. Box 1
Lambertville, MI
48144

Music:
Hidden Agenda Kevin MacLeod (incompetech.com) 
Licensed under Creative Commons: By Attribution 3.0
http://creativecommons.org/licenses/b...

End Music by Mark Jay

Sound Effects:
http://www.freesfx.co.uk/`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"nauZXQoffTcfP0DdnGs1BSR2vhY",id:"H2fHTJZqaKA",snippet:{publishedAt:"2022-09-24T17:00:07Z",channelId:"UCSUf5_EPEfl4zlBKZHkZdmw",title:"The Insane Story Of The Most Dangerous Movie Ever Made",description:`Thanks to ExpressVPN for sponsoring this video! Go to https://expressvpn.com/dannygonzalez and find out how you can get 3 months of ExpressVPN free!

edited by Jake Mayer https://www.instagram.com/jakeshotfriend/

MERCH ► http://dannygonzalez.store

Follow Me
SECOND CHANNEL ► https://www.youtube.com/c/2Danny2Furious
GAMING CHANNEL ► https://www.youtube.com/channel/UC2mQG51F8wu7njF84D-49cA
INSTAGRAM ► https://www.instagram.com/dannygonzalez/
TWITTER ► https://twitter.com/dannygonzalez
TWITCH ► https://twitch.tv/dannygoonzalez
SPOTIFY ► https://open.spotify.com/artist/6pDkmNhHCLh7YEb3sXceOs?si=8ZpMgF41SoufOS1UZ4vbkg

Submit a video topic https://forms.gle/VNa9Tq6Ncok8RWjN9`,thumbnails:{default:{url:"https://i.ytimg.com/vi/H2fHTJZqaKA/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/H2fHTJZqaKA/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/H2fHTJZqaKA/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/H2fHTJZqaKA/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/H2fHTJZqaKA/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Danny Gonzalez",tags:["danny gonzalez","funny","commentary","comedy","react","reaction","reacting","awful","humor"],categoryId:"23",liveBroadcastContent:"none",localized:{title:"The Insane Story Of The Most Dangerous Movie Ever Made",description:`Thanks to ExpressVPN for sponsoring this video! Go to https://expressvpn.com/dannygonzalez and find out how you can get 3 months of ExpressVPN free!

edited by Jake Mayer https://www.instagram.com/jakeshotfriend/

MERCH ► http://dannygonzalez.store

Follow Me
SECOND CHANNEL ► https://www.youtube.com/c/2Danny2Furious
GAMING CHANNEL ► https://www.youtube.com/channel/UC2mQG51F8wu7njF84D-49cA
INSTAGRAM ► https://www.instagram.com/dannygonzalez/
TWITTER ► https://twitter.com/dannygonzalez
TWITCH ► https://twitch.tv/dannygoonzalez
SPOTIFY ► https://open.spotify.com/artist/6pDkmNhHCLh7YEb3sXceOs?si=8ZpMgF41SoufOS1UZ4vbkg

Submit a video topic https://forms.gle/VNa9Tq6Ncok8RWjN9`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"4Y7YhK_DpXQ5Bzl1Bp0L6tLk3ig",id:"jCNzL74ESkM",snippet:{publishedAt:"2022-09-25T03:09:52Z",channelId:"UCD9nZ3qeRGbPuHJaJduiQxA",title:"Tropical Storm Ian 11 p.m. update",description:`Tropical Storm Ian 11 p.m. update

Subscribe to WESH on YouTube now for more: http://bit.ly/1dqr14j

Get more Orlando news: http://www.wesh.com
Like us: http://facebook.com/wesh2news
Follow us: http://twitter.com/wesh
Instagram: https://www.instagram.com/wesh2/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/jCNzL74ESkM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/jCNzL74ESkM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/jCNzL74ESkM/hqdefault.jpg",width:480,height:360}},channelTitle:"WESH 2 News",tags:["Orlando"],categoryId:"25",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"Tropical Storm Ian 11 p.m. update",description:`Tropical Storm Ian 11 p.m. update

Subscribe to WESH on YouTube now for more: http://bit.ly/1dqr14j

Get more Orlando news: http://www.wesh.com
Like us: http://facebook.com/wesh2news
Follow us: http://twitter.com/wesh
Instagram: https://www.instagram.com/wesh2/`}}},{kind:"youtube#video",etag:"orSTHabSKIljws9_Le6Zbh55uP8",id:"_snnKw-EywM",snippet:{publishedAt:"2022-09-24T14:00:51Z",channelId:"UCRijo3ddMTht_IHyNSNXpNQ",title:"Archery World Records",description:`Our most INSANE world records yet!! Special thanks to Bass Pro Shops for sponsoring this video! Head to http://basspro.com/ for all your outdoor needs!
► Thanks for subscribing! - http://bit.ly/SubDudePerfect

► Watch more Archery Trick Shots from James: https://www.youtube.com/c/JamesJeanoutdoor

Click HERE to get your copy of 2023 Guinness World Record Book: 
► https://www.guinnessworldrecords.com/products/books/guinness-world-records-2023

Sail to the Bahamas w/ us on the DUDE PERFECT CRUISE! ► https://www.dudeperfectcruise.com/

Music by Knives At Sea: "Come and Get It"
► INSTAGRAM: @knivesatsea
► APPLE MUSIC: https://music.apple.com/gb/artist/knives-at-sea/1495302840
► SPOTIFY: https://open.spotify.com/artist/2VZYuo718BYqHH2WW9qfNh?si=VK5i_4znQsCBsIfPkuAYSw
► YOUTUBE: https://www.youtube.com/knivesatsea

NEXT LEVEL STUFF 
-------------------------------------------
🎒 NEW Merch - http://bit.ly/DPStore
📱 Text us - (469) 205-7005
🔔 Hit the bell next to Subscribe so you don't miss a video!
👨🏻‍💻 Watch our newest vids! - http://bit.ly/NewDPVids
📕 Read our Book - "101 Tips, Tricks and Cool Stuff" - https://bit.ly/NewDPBook

Follow our Instagrams so we can be best friends 
-------------------------------------------
🏆 http://Instagram.com/DudePerfect
🧔🏻 http://Instagram.com/TylerNToney
👱🏻‍♂️ http://Instagram.com/Cody_Jones_
🙋🏻‍♂️ http://Instagram.com/CobyCotton
👨‍🦰 http://Instagram.com/GarrettHilbert
⛹🏻‍♂️ http://Instagram.com/CoryCotton
-------------------------------------------
“Come and Get It”
Performed by Knives at Sea
Courtesy of Ninja Tune Production Music
Written by Ozzie Rodgers
© Ninja Tune Production Music
-------------------------------------------
Bonus points if you're still reading this! 
Comment: What world record we should break next?

Click here to learn more about Dude Perfect:
http://bit.ly/AboutDudePerfect

As always...Go Big and God Bless!
- Your friends at Dude Perfect

Business or Media, please contact us at: 
Dude@DudePerfect.com

------------

5 Best Friends and a Panda.
If you like Sports + Comedy, come join the Dude Perfect team!

Best known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! 

Pound it 👊🏻 Noggin 🙇🏻‍♂️ 
- Dude Perfect`,thumbnails:{default:{url:"https://i.ytimg.com/vi/_snnKw-EywM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/_snnKw-EywM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/_snnKw-EywM/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/_snnKw-EywM/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/_snnKw-EywM/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Dude Perfect",tags:["dude perfect","dude perfect stereotypes","dude perfect water bottle flip","bottle flip","water bottle flip","dude perfect bottle flip","dude perfect basketball","dp","dude perfect world record","edition","nerf","trick shots","trick shot","family","ping pong","bowling","clean","family friendly","bubble wrap","soccer","football","spinner","spinners","fidget spinners","dude","archery","world","records","bow","and","arrow","james","jean","michael","empric","guiness","record","mirror","curve","curving arrow","viral","trending","target","longest"],categoryId:"17",liveBroadcastContent:"none",localized:{title:"Archery World Records",description:`Our most INSANE world records yet!! Special thanks to Bass Pro Shops for sponsoring this video! Head to http://basspro.com/ for all your outdoor needs!
► Thanks for subscribing! - http://bit.ly/SubDudePerfect

► Watch more Archery Trick Shots from James: https://www.youtube.com/c/JamesJeanoutdoor

Click HERE to get your copy of 2023 Guinness World Record Book: 
► https://www.guinnessworldrecords.com/products/books/guinness-world-records-2023

Sail to the Bahamas w/ us on the DUDE PERFECT CRUISE! ► https://www.dudeperfectcruise.com/

Music by Knives At Sea: "Come and Get It"
► INSTAGRAM: @knivesatsea
► APPLE MUSIC: https://music.apple.com/gb/artist/knives-at-sea/1495302840
► SPOTIFY: https://open.spotify.com/artist/2VZYuo718BYqHH2WW9qfNh?si=VK5i_4znQsCBsIfPkuAYSw
► YOUTUBE: https://www.youtube.com/knivesatsea

NEXT LEVEL STUFF 
-------------------------------------------
🎒 NEW Merch - http://bit.ly/DPStore
📱 Text us - (469) 205-7005
🔔 Hit the bell next to Subscribe so you don't miss a video!
👨🏻‍💻 Watch our newest vids! - http://bit.ly/NewDPVids
📕 Read our Book - "101 Tips, Tricks and Cool Stuff" - https://bit.ly/NewDPBook

Follow our Instagrams so we can be best friends 
-------------------------------------------
🏆 http://Instagram.com/DudePerfect
🧔🏻 http://Instagram.com/TylerNToney
👱🏻‍♂️ http://Instagram.com/Cody_Jones_
🙋🏻‍♂️ http://Instagram.com/CobyCotton
👨‍🦰 http://Instagram.com/GarrettHilbert
⛹🏻‍♂️ http://Instagram.com/CoryCotton
-------------------------------------------
“Come and Get It”
Performed by Knives at Sea
Courtesy of Ninja Tune Production Music
Written by Ozzie Rodgers
© Ninja Tune Production Music
-------------------------------------------
Bonus points if you're still reading this! 
Comment: What world record we should break next?

Click here to learn more about Dude Perfect:
http://bit.ly/AboutDudePerfect

As always...Go Big and God Bless!
- Your friends at Dude Perfect

Business or Media, please contact us at: 
Dude@DudePerfect.com

------------

5 Best Friends and a Panda.
If you like Sports + Comedy, come join the Dude Perfect team!

Best known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! 

Pound it 👊🏻 Noggin 🙇🏻‍♂️ 
- Dude Perfect`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"ySyzMyfQu_Ni67yoOYwEfVtduIs",id:"oDjbH-b4WHw",snippet:{publishedAt:"2022-09-25T14:00:32Z",channelId:"UCGnSHwhOAczNqhGDiYt0Q8g",title:"i became a cowboy for 24 hours",description:"howdy merch pre-order - https://howdyhowdy.com",thumbnails:{default:{url:"https://i.ytimg.com/vi/oDjbH-b4WHw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/oDjbH-b4WHw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/oDjbH-b4WHw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/oDjbH-b4WHw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/oDjbH-b4WHw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"ryan trahan",tags:["ryan trahan","gamerboy ryan"],categoryId:"24",liveBroadcastContent:"none",localized:{title:"i became a cowboy for 24 hours",description:"howdy merch pre-order - https://howdyhowdy.com"}}},{kind:"youtube#video",etag:"NirlHZgQzRQmaQvgX274Alv1dus",id:"yTL_-OR-etM",snippet:{publishedAt:"2022-09-25T15:00:01Z",channelId:"UCLkAepWjdylmXSltofFvsYQ",title:"Me, Myself, and Jimin ‘ID : Chaos’ Mood Sampler",description:`Me, Myself, and Jimin ‘ID : Chaos’ Mood Sampler
#Photo_Folio #Jimin #BTS #방탄소년단

Artist & Creator : Jimin

Production : Artist Contents Studio (HYBE 360)
Contents Creative : Bang Woo Jung
Photo-Folio Creative : ​Kim Su Rin
Contents Director : ​Jang Jeong In
Contents Coordinator: Sung Jang Soon
Contents Editor : Kim Su Rin, Kim Bom Saem

CONTENTS PRODUCTION : PLAY COMPANY corp.
Camera : Lee Jae Woong, Kim Dae Yong (PLAY COMPANY), Jang Hey Min, Jeong Ji Won (HYBE 360)
PD : Lee So Jin, Kim Yun Su, Sunu Yun Jun
AD : Lee Eun Jin
Video Edit : Sunu Yun Jun


Connect with BTS: 
https://ibighit.com/bts 
http://twitter.com/BTS_bighit
http://twitter.com/BTS_twt 
http://www.facebook.com/bangtan.official 
https://www.youtube.com/user/BANGTANTV 
http://instagram.com/BTS.bighitofficial 
https://channels.vlive.tv/FE619 
https://www.tiktok.com/@bts_official_bighit
https://weverse.onelink.me/qt3S/94808190
https://www.weibo.com/BTSbighit
https://www.weibo.com/BTSmembers 
http://i.youku.com/btsofficial 
http://btsblog.ibighit.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/yTL_-OR-etM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/yTL_-OR-etM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/yTL_-OR-etM/hqdefault.jpg",width:480,height:360}},channelTitle:"BANGTANTV",tags:["방탄소년단","BTS","BANGTAN","알엠","RM","슈가","SUGA","제이홉","jhope","지민","정국","k-pop","방탄","j-hope","Jung Kook","Jimin","BTS V","Jin"],categoryId:"10",liveBroadcastContent:"none",defaultLanguage:"ko",localized:{title:"Me, Myself, and Jimin ‘ID : Chaos’ Mood Sampler",description:`Me, Myself, and Jimin ‘ID : Chaos’ Mood Sampler
#Photo_Folio #Jimin #BTS #방탄소년단

Artist & Creator : Jimin

Production : Artist Contents Studio (HYBE 360)
Contents Creative : Bang Woo Jung
Photo-Folio Creative : ​Kim Su Rin
Contents Director : ​Jang Jeong In
Contents Coordinator: Sung Jang Soon
Contents Editor : Kim Su Rin, Kim Bom Saem

CONTENTS PRODUCTION : PLAY COMPANY corp.
Camera : Lee Jae Woong, Kim Dae Yong (PLAY COMPANY), Jang Hey Min, Jeong Ji Won (HYBE 360)
PD : Lee So Jin, Kim Yun Su, Sunu Yun Jun
AD : Lee Eun Jin
Video Edit : Sunu Yun Jun


Connect with BTS: 
https://ibighit.com/bts 
http://twitter.com/BTS_bighit
http://twitter.com/BTS_twt 
http://www.facebook.com/bangtan.official 
https://www.youtube.com/user/BANGTANTV 
http://instagram.com/BTS.bighitofficial 
https://channels.vlive.tv/FE619 
https://www.tiktok.com/@bts_official_bighit
https://weverse.onelink.me/qt3S/94808190
https://www.weibo.com/BTSbighit
https://www.weibo.com/BTSmembers 
http://i.youku.com/btsofficial 
http://btsblog.ibighit.com`},defaultAudioLanguage:"ko"}},{kind:"youtube#video",etag:"dYJUtHcRwqbLwQS6mZRrf6ax8bA",id:"0Anx3VQ2dcc",snippet:{publishedAt:"2022-09-23T19:00:00Z",channelId:"UCircJf-FlToBNjuy9xG-i5A",title:"The Death Tunnel of Waverly Hills Sanatorium • Ghost Files",description:`This one is for you.

CONTENT WARNING: This video contains content that some might find disturbing. Viewer discretion is advised.  

Possible triggers: mentions of emotional/physical distress, death by suicide.

Bloopers! Behind the scenes looks! Other exclusive content available at:
https://www.patreon.com/watcher/

WATCHER MERCH:
https://watcherstore.com/

CREATED BY
 Ryan Bergara

PRODUCER
Lizzie Lockard

DIRECTOR
Mark Celestino 

EDITOR
Anthony Frederick

HOSTED BY
Ryan Bergara
Shane Madej

ASSISTANT DIRECTOR
TJ Marchbank

PRODUCTION SUPERVISOR
Brittney Lee

PRODUCTION COORDINATOR
Carter Lau

RESEARCHER
Alaina Rook

GRIP & ELECTRIC
Jay Tran 

SOUND
Ben Forman

DIT
 Adam Ung

PRODUCTION DESIGNER
Billy Jett

STUDIO CONCEPT ARTIST
Megan Ho

POST PRODUCTION SUPERVISOR
Sam Young

CREATIVE DIRECTOR OF POST PRODUCTION
Anthony Frederick

ADDITIONAL EDITING
Sam Young

ASSISTANT EDITOR
Frank Parker

PARANORMAL FOOTAGE COMBER
Rebecca Castaneda

GRAPHIC ARTIST
Nicholas Lai

MOTION GRAPHICS ARTIST
Mark Celestino

ILLUSTRATOR
Mollie Ong

MOTION GRAPHICS CONSULTANTS
Dynamic Fox Films

LOGO DESIGN BY
Jennet Liaw

SPECIAL THANKS
Waverly Hills Sanitorium
James Ashenden
Kaitlyn Dodson & Marion Burgess
Deanna & Mark Erskine
Rhiannon Graf

SPECIAL THANKS
Joanna Mackens
Sydney Owen
Jess Porter
Braxtyn Rapp
Anna Rogers

HEAD OF DEVELOPMENT
Katie LeBlanc

HEAD OF PRODUCTION
Lizzie Lockard

EXECUTIVE PRODUCERS
Ryan Bergara
Shane Madej
Steven Lim 
Katie LeBlanc

Social
http://www.instagram.com/wearewatcher
http://www.twitter.com/wearewatcher
https://www.facebook.com/watcherentertainment
https://wearewatcher.tumblr.com/

Business Inquiries: 
hello@watcherentertainment.com

Music Provided by Audio Network
SFX by Audioblocks
Watcher Logo Designed by Jennet Liaw
Watcher Logo Sound Design by Yuta Endo (@yuuutaendo)

Watcher. A network from Steven Lim, Ryan Bergara, and Shane Madej.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/0Anx3VQ2dcc/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/0Anx3VQ2dcc/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/0Anx3VQ2dcc/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/0Anx3VQ2dcc/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/0Anx3VQ2dcc/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Watcher",categoryId:"24",liveBroadcastContent:"none",localized:{title:"The Death Tunnel of Waverly Hills Sanatorium • Ghost Files",description:`This one is for you.

CONTENT WARNING: This video contains content that some might find disturbing. Viewer discretion is advised.  

Possible triggers: mentions of emotional/physical distress, death by suicide.

Bloopers! Behind the scenes looks! Other exclusive content available at:
https://www.patreon.com/watcher/

WATCHER MERCH:
https://watcherstore.com/

CREATED BY
 Ryan Bergara

PRODUCER
Lizzie Lockard

DIRECTOR
Mark Celestino 

EDITOR
Anthony Frederick

HOSTED BY
Ryan Bergara
Shane Madej

ASSISTANT DIRECTOR
TJ Marchbank

PRODUCTION SUPERVISOR
Brittney Lee

PRODUCTION COORDINATOR
Carter Lau

RESEARCHER
Alaina Rook

GRIP & ELECTRIC
Jay Tran 

SOUND
Ben Forman

DIT
 Adam Ung

PRODUCTION DESIGNER
Billy Jett

STUDIO CONCEPT ARTIST
Megan Ho

POST PRODUCTION SUPERVISOR
Sam Young

CREATIVE DIRECTOR OF POST PRODUCTION
Anthony Frederick

ADDITIONAL EDITING
Sam Young

ASSISTANT EDITOR
Frank Parker

PARANORMAL FOOTAGE COMBER
Rebecca Castaneda

GRAPHIC ARTIST
Nicholas Lai

MOTION GRAPHICS ARTIST
Mark Celestino

ILLUSTRATOR
Mollie Ong

MOTION GRAPHICS CONSULTANTS
Dynamic Fox Films

LOGO DESIGN BY
Jennet Liaw

SPECIAL THANKS
Waverly Hills Sanitorium
James Ashenden
Kaitlyn Dodson & Marion Burgess
Deanna & Mark Erskine
Rhiannon Graf

SPECIAL THANKS
Joanna Mackens
Sydney Owen
Jess Porter
Braxtyn Rapp
Anna Rogers

HEAD OF DEVELOPMENT
Katie LeBlanc

HEAD OF PRODUCTION
Lizzie Lockard

EXECUTIVE PRODUCERS
Ryan Bergara
Shane Madej
Steven Lim 
Katie LeBlanc

Social
http://www.instagram.com/wearewatcher
http://www.twitter.com/wearewatcher
https://www.facebook.com/watcherentertainment
https://wearewatcher.tumblr.com/

Business Inquiries: 
hello@watcherentertainment.com

Music Provided by Audio Network
SFX by Audioblocks
Watcher Logo Designed by Jennet Liaw
Watcher Logo Sound Design by Yuta Endo (@yuuutaendo)

Watcher. A network from Steven Lim, Ryan Bergara, and Shane Madej.`},defaultAudioLanguage:"en-US"}},{kind:"youtube#video",etag:"3wdKF0kEDJrlfpo-5lWzBoIL6CM",id:"Ag-909TI-XY",snippet:{publishedAt:"2022-09-24T15:00:06Z",channelId:"UCJLZe_NoiG0hT7QCX_9vmqw",title:"I made your worst video ideas",description:`Get Honey for FREE today ▸ https://joinhoney.com/ididathing
Honey finds coupons with one click. Thanks to Honey for sponsoring!

Twitter: https://twitter.com/ididathing1
Discord: https://discord.gg/mppfmHW
Patreon: https://www.patreon.com/user?u=13180179`,thumbnails:{default:{url:"https://i.ytimg.com/vi/Ag-909TI-XY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Ag-909TI-XY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Ag-909TI-XY/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/Ag-909TI-XY/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/Ag-909TI-XY/maxresdefault.jpg",width:1280,height:720}},channelTitle:"I did a thing",tags:["science","education","comedy","i did a thing","mythbusters"],categoryId:"24",liveBroadcastContent:"none",localized:{title:"I made your worst video ideas",description:`Get Honey for FREE today ▸ https://joinhoney.com/ididathing
Honey finds coupons with one click. Thanks to Honey for sponsoring!

Twitter: https://twitter.com/ididathing1
Discord: https://discord.gg/mppfmHW
Patreon: https://www.patreon.com/user?u=13180179`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"wFjIof_dmkAXXSykJy8tsNF2pOs",id:"b48AN_8wokU",snippet:{publishedAt:"2022-09-24T18:40:00Z",channelId:"UChmpTxQ0Gp8KEJKsqzeg9Lg",title:"Stranger Things Season 4 Bloopers | Netflix",description:`These bloopers could single-handedly save me from Vecna. Season 4 bloopers have officially dropped. Watch Stranger Things, only on Netflix.\r
\r
SUBSCRIBE: http://bit.ly/29qBUt7\r
\r
About Netflix:\r
Netflix is the world's leading streaming entertainment service with 221 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any Internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\r
\r
Stranger Things Season 4 Bloopers | Netflix\r
https://youtube.com/Netflix\r
\r
Divided by distance but ever determined, our scattered friends face a frightening future. But it's only the beginning. The beginning of the end.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/b48AN_8wokU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/b48AN_8wokU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/b48AN_8wokU/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/b48AN_8wokU/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/b48AN_8wokU/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Stranger Things",tags:["bloopers","caleb mclaughlin","charlie heaton","chief hopper","david harbour","dustin","eleven","finn wolfhard","gaten matarazzo","hopper","joe keery","jonathan byers","joyce byers","lucas sinclair","max stranger things","maya hawke","mike wheeler","millie bobby brown","nancy wheeler","natalia dyer","noah schnapp","robin stranger things","sadie sink","season 4 bloopers","st","st4","st4 bloopers","steve harrington","stranger things","stranger things 4","will byers","winona ryder"],categoryId:"24",liveBroadcastContent:"none",localized:{title:"Stranger Things Season 4 Bloopers | Netflix",description:`These bloopers could single-handedly save me from Vecna. Season 4 bloopers have officially dropped. Watch Stranger Things, only on Netflix.\r
\r
SUBSCRIBE: http://bit.ly/29qBUt7\r
\r
About Netflix:\r
Netflix is the world's leading streaming entertainment service with 221 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any Internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\r
\r
Stranger Things Season 4 Bloopers | Netflix\r
https://youtube.com/Netflix\r
\r
Divided by distance but ever determined, our scattered friends face a frightening future. But it's only the beginning. The beginning of the end.`},defaultAudioLanguage:"en-US"}},{kind:"youtube#video",etag:"_5nHjG3VGuWQkVokmR0zFchLlbw",id:"_HaOfHYsFNo",snippet:{publishedAt:"2022-09-25T03:33:29Z",channelId:"UCVnjt9mMx46gMUeTtONXimQ",title:"Homes washed out to sea as Fiona slams Canada",description:"The hurricane that wreaked havoc in Puerto Rico and the Carribbean, is now classified as a post-tropical cyclone.",thumbnails:{default:{url:"https://i.ytimg.com/vi/_HaOfHYsFNo/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/_HaOfHYsFNo/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/_HaOfHYsFNo/hqdefault.jpg",width:480,height:360}},channelTitle:"KENS 5: Your San Antonio News Source",tags:["severe-weather","weather"],categoryId:"25",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"Homes washed out to sea as Fiona slams Canada",description:"The hurricane that wreaked havoc in Puerto Rico and the Carribbean, is now classified as a post-tropical cyclone."},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"yIO8nK9SPddkBJztqEXFTqR6FP0",id:"NpdLgWVQIAM",snippet:{publishedAt:"2022-09-25T09:48:25Z",channelId:"UCnI3TuOg8D3SCRPW8ET4EAg",title:"Eliud Kipchoge Crushes The Marathon WORLD RECORD! || 2022 Berlin Marathon",description:`The GOAT is back and he's here to stay.
====================================
*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS`,thumbnails:{default:{url:"https://i.ytimg.com/vi/NpdLgWVQIAM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/NpdLgWVQIAM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/NpdLgWVQIAM/hqdefault.jpg",width:480,height:360}},channelTitle:"Total Running Productions",tags:["2022 berlin marathon","berlin marathon kipchoge","kipchoge world record","eliud kipchoge world record berlin","berlin world record","berlin","berlin marathon","kipchoge","eliud world record","kipchoge record marathon","marathon berlin 2022","2022 berlin marathon race","world record 2022 berlin"],categoryId:"17",liveBroadcastContent:"none",localized:{title:"Eliud Kipchoge Crushes The Marathon WORLD RECORD! || 2022 Berlin Marathon",description:`The GOAT is back and he's here to stay.
====================================
*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"EbXHfhddRpd6OajIfywDHVHb9UU",id:"etbOmO9WJJI",snippet:{publishedAt:"2022-09-24T00:51:15Z",channelId:"UCYtNSrfGdXooZYu_hkq18_w",title:"Emotional Roger Federer's farewell interview in FULL 😢 | Laver Cup 2022 Moments",description:`I'm not crying, you're crying... Tennis great Roger Federer was in tears as he gave his final interview as a professional player following his Men's Doubles loss in the Laver Cup this morning. 

Download beIN SPORTS CONNECT now to catch LIVE sporting action: https://bein.onelink.me/bApY/beinYT 
Instagram: https://www.instagram.com/beinsportsasia/
Facebook: https://www.facebook.com/beinsportsasia`,thumbnails:{default:{url:"https://i.ytimg.com/vi/etbOmO9WJJI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/etbOmO9WJJI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/etbOmO9WJJI/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/etbOmO9WJJI/sddefault.jpg",width:640,height:480}},channelTitle:"beIN SPORTS Asia",tags:["Federer retires","Laver Cup","Roger Federer","Tennis"],categoryId:"17",liveBroadcastContent:"none",localized:{title:"Emotional Roger Federer's farewell interview in FULL 😢 | Laver Cup 2022 Moments",description:`I'm not crying, you're crying... Tennis great Roger Federer was in tears as he gave his final interview as a professional player following his Men's Doubles loss in the Laver Cup this morning. 

Download beIN SPORTS CONNECT now to catch LIVE sporting action: https://bein.onelink.me/bApY/beinYT 
Instagram: https://www.instagram.com/beinsportsasia/
Facebook: https://www.facebook.com/beinsportsasia`}}},{kind:"youtube#video",etag:"jJl65I6xkJA_9_3CH48Pu81paGw",id:"nXiyZ-cetBs",snippet:{publishedAt:"2022-09-25T15:00:23Z",channelId:"UCiifkYAs_bq1pt_zbNAzYGg",title:"Black Adam | Darkness | DC",description:`#BlackAdam in theaters on October 21. 

Subscribe To DC: https://bit.ly/3vDk4Ox 
#DC #DCComics

Connect with DC Online: 
Follow DC on INSTAGRAM: https://bit.ly/3Sls2p4 
Like DC on FACEBOOK: https://bit.ly/3oQVPs2 
Follow DC on TWITTER: https://bit.ly/3oTsD3S 
Visit the DC WEBSITE: https://www.dc.com/ 
Subscribe to DC UNIVERSE INFINITE: https://bit.ly/3zAJZqX 
The official home of Batman, Superman, Wonder Woman, Green Lantern, The Flash and the rest of The World's Greatest Super Heroes!`,thumbnails:{default:{url:"https://i.ytimg.com/vi/nXiyZ-cetBs/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/nXiyZ-cetBs/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/nXiyZ-cetBs/hqdefault.jpg",width:480,height:360}},channelTitle:"DC",categoryId:"24",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"Black Adam | Darkness | DC",description:`#BlackAdam in theaters on October 21. 

Subscribe To DC: https://bit.ly/3vDk4Ox 
#DC #DCComics

Connect with DC Online: 
Follow DC on INSTAGRAM: https://bit.ly/3Sls2p4 
Like DC on FACEBOOK: https://bit.ly/3oQVPs2 
Follow DC on TWITTER: https://bit.ly/3oTsD3S 
Visit the DC WEBSITE: https://www.dc.com/ 
Subscribe to DC UNIVERSE INFINITE: https://bit.ly/3zAJZqX 
The official home of Batman, Superman, Wonder Woman, Green Lantern, The Flash and the rest of The World's Greatest Super Heroes!`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"RAYIWuECRquHn9915kHKpfY7mYM",id:"QgGe6fsbbIw",snippet:{publishedAt:"2022-09-25T09:27:35Z",channelId:"UCv-GNHtqM97EaU_i7gN_Ikw",title:"I SCORED IN SIDEMEN CHARITY MATCH (Goals & Highlights REACTION)",description:`I SCORED IN SIDEMEN CHARITY MATCH (Goals & Highlights REACTION)

Subscribe: https://bit.ly/2PGvXfx | 🔔Make sure to enable ALL push notifications!🔔\r
Watch the NEWEST videos: https://bit.ly/2PzaVSY\r
\r
\r
Follow Chunkz :\r
Instagram: https://instagram.com/chunkz_en/\r
Twitter: https://twitter.com/Chunkz_EN\r
SnapChat: https://snapchat.com/add/Spicegg\r
\r
\r
Watch more Chunkz :\r
1V1 RAP BATTLE: https://bit.ly/2RY6Ar1\r
COOKING WITH CHUNKZ: https://bit.ly/2pWEXlc\r
2V2 RAP BATTLE: https://bit.ly/2RYtyOH\r
Latest Videos: https://bit.ly/2PzaVSY\r
Popular Videos: https://bit.ly/2yGdppi`,thumbnails:{default:{url:"https://i.ytimg.com/vi/QgGe6fsbbIw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/QgGe6fsbbIw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/QgGe6fsbbIw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/QgGe6fsbbIw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/QgGe6fsbbIw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Chunkz",tags:["Chunkz Entertainment","comedy","family friendly","Funny Challenges Fun"],categoryId:"24",liveBroadcastContent:"none",localized:{title:"I SCORED IN SIDEMEN CHARITY MATCH (Goals & Highlights REACTION)",description:`I SCORED IN SIDEMEN CHARITY MATCH (Goals & Highlights REACTION)

Subscribe: https://bit.ly/2PGvXfx | 🔔Make sure to enable ALL push notifications!🔔\r
Watch the NEWEST videos: https://bit.ly/2PzaVSY\r
\r
\r
Follow Chunkz :\r
Instagram: https://instagram.com/chunkz_en/\r
Twitter: https://twitter.com/Chunkz_EN\r
SnapChat: https://snapchat.com/add/Spicegg\r
\r
\r
Watch more Chunkz :\r
1V1 RAP BATTLE: https://bit.ly/2RY6Ar1\r
COOKING WITH CHUNKZ: https://bit.ly/2pWEXlc\r
2V2 RAP BATTLE: https://bit.ly/2RYtyOH\r
Latest Videos: https://bit.ly/2PzaVSY\r
Popular Videos: https://bit.ly/2yGdppi`},defaultAudioLanguage:"en-GB"}},{kind:"youtube#video",etag:"EBL5vmjUAsK2RGpz78Dii33Rog0",id:"Y-GEACeX744",snippet:{publishedAt:"2022-09-24T05:07:32Z",channelId:"UCoLrcjPV5PbUrUyXq5mjc_A",title:"A historic evening for Albert Pujols! He crushes home runs No. 699 AND 700 for his career!",description:`Albert Pujols makes history.

Don't forget to subscribe! https://www.youtube.com/mlb

Follow us elsewhere too:
Twitter: https://twitter.com/MLB
Instagram: https://www.instagram.com/mlb/
Facebook: https://www.facebook.com/mlb
TikTok: https://www.tiktok.com/share/user/6569247715560456198

Check out MLB.com daily to watch the MLB.TV Free Game of the Day! https://mlb.com/freegame

Visit our site for all baseball news, stats and scores! https://www.mlb.com/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/Y-GEACeX744/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Y-GEACeX744/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Y-GEACeX744/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/Y-GEACeX744/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/Y-GEACeX744/maxresdefault.jpg",width:1280,height:720}},channelTitle:"MLB",tags:["mlb","baseball","sports","mlb highlights","sports highlights","baseball highlights"],categoryId:"17",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"A historic evening for Albert Pujols! He crushes home runs No. 699 AND 700 for his career!",description:`Albert Pujols makes history.

Don't forget to subscribe! https://www.youtube.com/mlb

Follow us elsewhere too:
Twitter: https://twitter.com/MLB
Instagram: https://www.instagram.com/mlb/
Facebook: https://www.facebook.com/mlb
TikTok: https://www.tiktok.com/share/user/6569247715560456198

Check out MLB.com daily to watch the MLB.TV Free Game of the Day! https://mlb.com/freegame

Visit our site for all baseball news, stats and scores! https://www.mlb.com/`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"ll4yQvZzgeHCfaWHh8PRoxAP0wE",id:"_V-a3hzl97g",snippet:{publishedAt:"2022-09-25T11:15:30Z",channelId:"UChR1Yn7YpVrnP-SbsWtjuBA",title:"FIFA 23 Barcelona Career Mode EP1...",description:`FIFA 23 IS HERE! It's time to bring Barcelona back to top in FIFA 23!
This video is brought to you by the EA Creator Network.

Get your PSN/Xbox Gift Cards...use 's2g10' for 10% discount!
https://s2g.shop

It's free to LIKE the video so..SMASH that LIKE button!
SUBSCRIBE for daily FIFA 23 content!

►MoreS2G - https://www.youtube.com/channel/UCw9rjdrpHa7mzNrWVJoaPgw
►Twitch - https://www.twitch.tv/thereals2g
►Twitter - https://twitter.com/OfficialS2G
►Instagram - https://www.instagram.com/officials2g

Email for Business Enquiries :-
S2G@DigitalSportsMgmt.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/_V-a3hzl97g/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/_V-a3hzl97g/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/_V-a3hzl97g/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/_V-a3hzl97g/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/_V-a3hzl97g/maxresdefault.jpg",width:1280,height:720}},channelTitle:"S2G",tags:["Barcelona career mode","fifa 23 career mode","fifa 23","Barca career mode"],categoryId:"20",liveBroadcastContent:"none",defaultLanguage:"en-GB",localized:{title:"FIFA 23 Barcelona Career Mode EP1...",description:`FIFA 23 IS HERE! It's time to bring Barcelona back to top in FIFA 23!
This video is brought to you by the EA Creator Network.

Get your PSN/Xbox Gift Cards...use 's2g10' for 10% discount!
https://s2g.shop

It's free to LIKE the video so..SMASH that LIKE button!
SUBSCRIBE for daily FIFA 23 content!

►MoreS2G - https://www.youtube.com/channel/UCw9rjdrpHa7mzNrWVJoaPgw
►Twitch - https://www.twitch.tv/thereals2g
►Twitter - https://twitter.com/OfficialS2G
►Instagram - https://www.instagram.com/officials2g

Email for Business Enquiries :-
S2G@DigitalSportsMgmt.com`},defaultAudioLanguage:"en"}},{kind:"youtube#video",etag:"k5Clv3cr-eoiQ6ZwiNkQegLnAOE",id:"rhctf92wgqU",snippet:{publishedAt:"2022-09-24T16:00:14Z",channelId:"UC_Av98lDjf5KvFib5elhpYg",title:"PUNTO 40 AÑO 2077 - Rauw Alejandro x Baby Rasta (Official Video)",description:`Rauw Alejandro x Baby Rasta 
PUNTO 40 (Official Video)

Suscríbete al canal: https://goo.gl/Cqxmma

Sigue a Rauw:
Instagram: https://www.instagram.com/rauwalejandro
Facebook: https://www.facebook.com/rauwalejandro 
Twitter: https://twitter.com/rauwalejandro

Apple Music: https://RauwA.lnk.to/PUNTO40/applemusic 
Spotify: https://RauwA.lnk.to/PUNTO40/spotify 
Amazon: https://RauwA.lnk.to/PUNTO40/amazonmusicstreaming 
YouTube: https://RauwA.lnk.to/PUNTO40/youtube 
iTunes: https://RauwA.lnk.to/PUNTO40/itunes 
Deezer: https://RauwA.lnk.to/PUNTO40/deezer 
TikTok: https://RauwA.lnk.to/PUNTO40/tiktokusemysound 
Pandora: https://RauwA.lnk.to/PUNTO40/pandora

Letra: 

Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para

Tengo una punto cuarenta 

Cuarenta
Cuarenta
Cuarenta
Cuarenta

Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para

Ra’ Rauw
No me la hagas usar
Tengo una punto cuarenta
Y una gata pa’ perreaL 
Que con ese culo 
En lo oscuro, te revienta
Guayando con esa mini tu estás abusando
Bellaqueando
Estamos ignorando lo que está pasando
Baby, tu si estás más dura
Que la de ayer
Tírame la señal 
Si te quieres perder
Por ahí comentan
Que mal me quieren ver
Envidiosos, ¿dónde están?
Que no se dejan ver

No me la hagan usar
Tengo una punto cuarenta y es para
Yo la quiero usar
Tengo una punto cuarenta y es para
No me la hagas usar
Tengo una punto cuarenta y es para
Yo la quiero usar
Tengo una punto cuarenta y es para
Tengo una punto cuarenta 
Tengo una punto cuarenta y es para
No me la hagan usar
Tengo una punto cuarenta y es para
Tengo una punto cuarenta 
Tengo una punto cuarenta y es para
No me la hagan usar
Tengo una punto cuarenta y es para

Yo, de nadie nunca me voy a dejar
Esta noche la vamo’ a formar
Somos los favoritos de la gente
Y ellos no mienten
No me odien
Si estoy con ella
Tengo la más bella (yeah, yeah)
Yo, sí que puede que los borre
Si la tocan a ella
Yo mato por ella (ah, ah)
Quiero darte en four en la silla
Pon la rodilla
Y olvídate que te voy a dar con el reloj 
Sin las manecillas
Tu estas bien pilla, shipete
Le gustan los billetes
Y en un día fueron 5 veces
Le cure la garganta 
Y no fue con los teces
Ella se lo merece
Porque esta sabrosa 
Crujiente, como tempura
Se desaparece conmigo
No hay cobertura
Si le doy de la pura
Pura calentura

Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
No sé si podemos matarte
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta 

Ra’ Rauw
Cuarenta
Rauw Alejandro
Baby Rasta
Cuarenta
Nosotros somos influyentes de la música
Cuarenta
Anoten
Cuarenta
Kenobi
Mr NaisGai
Dimelo Colla
The Mother Fokin Senseis


#RauwAlejandro #BabyRasta #Punto40

(C) 2022 Sony Music Entertainment US Latin LLC/Duars Entertainment, Inc.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/rhctf92wgqU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/rhctf92wgqU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/rhctf92wgqU/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/rhctf92wgqU/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/rhctf92wgqU/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Rauw Alejandro",tags:["rauw alejandro","rauw","rauw alejandro 2020","rauw alejandro letra","rauw alejandro 2021","duars entertainment","alejandro","rauw alejandro videos","duars","letra rauw alejandro","rauw alejandro new","rauwalejandro","ra rauw","rauw 2020","rauw alejandro new song","punto 40",".40","baby rasta"],categoryId:"10",liveBroadcastContent:"none",localized:{title:"PUNTO 40 AÑO 2077 - Rauw Alejandro x Baby Rasta (Official Video)",description:`Rauw Alejandro x Baby Rasta 
PUNTO 40 (Official Video)

Suscríbete al canal: https://goo.gl/Cqxmma

Sigue a Rauw:
Instagram: https://www.instagram.com/rauwalejandro
Facebook: https://www.facebook.com/rauwalejandro 
Twitter: https://twitter.com/rauwalejandro

Apple Music: https://RauwA.lnk.to/PUNTO40/applemusic 
Spotify: https://RauwA.lnk.to/PUNTO40/spotify 
Amazon: https://RauwA.lnk.to/PUNTO40/amazonmusicstreaming 
YouTube: https://RauwA.lnk.to/PUNTO40/youtube 
iTunes: https://RauwA.lnk.to/PUNTO40/itunes 
Deezer: https://RauwA.lnk.to/PUNTO40/deezer 
TikTok: https://RauwA.lnk.to/PUNTO40/tiktokusemysound 
Pandora: https://RauwA.lnk.to/PUNTO40/pandora

Letra: 

Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para

Tengo una punto cuarenta 

Cuarenta
Cuarenta
Cuarenta
Cuarenta

Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para

Ra’ Rauw
No me la hagas usar
Tengo una punto cuarenta
Y una gata pa’ perreaL 
Que con ese culo 
En lo oscuro, te revienta
Guayando con esa mini tu estás abusando
Bellaqueando
Estamos ignorando lo que está pasando
Baby, tu si estás más dura
Que la de ayer
Tírame la señal 
Si te quieres perder
Por ahí comentan
Que mal me quieren ver
Envidiosos, ¿dónde están?
Que no se dejan ver

No me la hagan usar
Tengo una punto cuarenta y es para
Yo la quiero usar
Tengo una punto cuarenta y es para
No me la hagas usar
Tengo una punto cuarenta y es para
Yo la quiero usar
Tengo una punto cuarenta y es para
Tengo una punto cuarenta 
Tengo una punto cuarenta y es para
No me la hagan usar
Tengo una punto cuarenta y es para
Tengo una punto cuarenta 
Tengo una punto cuarenta y es para
No me la hagan usar
Tengo una punto cuarenta y es para

Yo, de nadie nunca me voy a dejar
Esta noche la vamo’ a formar
Somos los favoritos de la gente
Y ellos no mienten
No me odien
Si estoy con ella
Tengo la más bella (yeah, yeah)
Yo, sí que puede que los borre
Si la tocan a ella
Yo mato por ella (ah, ah)
Quiero darte en four en la silla
Pon la rodilla
Y olvídate que te voy a dar con el reloj 
Sin las manecillas
Tu estas bien pilla, shipete
Le gustan los billetes
Y en un día fueron 5 veces
Le cure la garganta 
Y no fue con los teces
Ella se lo merece
Porque esta sabrosa 
Crujiente, como tempura
Se desaparece conmigo
No hay cobertura
Si le doy de la pura
Pura calentura

Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
No sé si podemos matarte
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta
Tengo una punto cuarenta y es para
Tengo una punto cuarenta y es para
Tengo una punto cuarenta 

Ra’ Rauw
Cuarenta
Rauw Alejandro
Baby Rasta
Cuarenta
Nosotros somos influyentes de la música
Cuarenta
Anoten
Cuarenta
Kenobi
Mr NaisGai
Dimelo Colla
The Mother Fokin Senseis


#RauwAlejandro #BabyRasta #Punto40

(C) 2022 Sony Music Entertainment US Latin LLC/Duars Entertainment, Inc.`},defaultAudioLanguage:"es"}},{kind:"youtube#video",etag:"M75tigxhQNHI84300gy1nvdJJgw",id:"qUTALdx7F1c",snippet:{publishedAt:"2022-09-25T11:00:21Z",channelId:"UCke6I9N4KfC968-yRcd5YRg",title:"Among Us Fall Guys Mod",description:`We play Among Us Fall Guys in Modded Among Us! 

☞  Subscribe & click the bell 
Subscribe ➡ https://www.youtube.com/user/SSundee?sub_confirmation=1

=== ϟ || Friends || ϟ ===
⭑ @Nicovald 
⭑@helloiamkate 
⭑ @PatP 
⭑ @Biffle 
⭑ @Lookumz 
⭑ @Zud 
⭑ @Sigils 
⭑ @Henwy 

Mod By https://doublejump.com

• Video Editor ► Russell
https://www.youtube.com/russelledits

• Thumbnail Maker ► Flash
https://www.youtube.com/channel/UCLy01oVLarj7RNQm52jnGKw

• Animator ► David
https://www.youtube.com/channel/UCxSSIQevKsx2bFc_Gn4WAMg?view_as=subscriber

• Discord: https://discord.gg/ssundee

​​• Music by Ninety9 ► LivesTobu - Such Fun
Video Link: https://www.youtube.com/watch?v=d3Oc26AFDdU
Channel: https://99l.tv/Subscribe
Download the album! https://99l.tv/Levelup-i

#ssundee #amongus  #gaming 

Thanks for watching!`,thumbnails:{default:{url:"https://i.ytimg.com/vi/qUTALdx7F1c/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/qUTALdx7F1c/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/qUTALdx7F1c/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/qUTALdx7F1c/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/qUTALdx7F1c/maxresdefault.jpg",width:1280,height:720}},channelTitle:"SSundee",categoryId:"20",liveBroadcastContent:"none",localized:{title:"Among Us Fall Guys Mod",description:`We play Among Us Fall Guys in Modded Among Us! 

☞  Subscribe & click the bell 
Subscribe ➡ https://www.youtube.com/user/SSundee?sub_confirmation=1

=== ϟ || Friends || ϟ ===
⭑ @Nicovald 
⭑@helloiamkate 
⭑ @PatP 
⭑ @Biffle 
⭑ @Lookumz 
⭑ @Zud 
⭑ @Sigils 
⭑ @Henwy 

Mod By https://doublejump.com

• Video Editor ► Russell
https://www.youtube.com/russelledits

• Thumbnail Maker ► Flash
https://www.youtube.com/channel/UCLy01oVLarj7RNQm52jnGKw

• Animator ► David
https://www.youtube.com/channel/UCxSSIQevKsx2bFc_Gn4WAMg?view_as=subscriber

• Discord: https://discord.gg/ssundee

​​• Music by Ninety9 ► LivesTobu - Such Fun
Video Link: https://www.youtube.com/watch?v=d3Oc26AFDdU
Channel: https://99l.tv/Subscribe
Download the album! https://99l.tv/Levelup-i

#ssundee #amongus  #gaming 

Thanks for watching!`},defaultAudioLanguage:"en"}}],a0={items:e0},n0=[{kind:"youtube#searchResult",etag:"nS3vqio_P8GR5WMo5JvusdtH69c",id:{kind:"youtube#video",videoId:"YWkumZQYP1U"},snippet:{publishedAt:"2022-08-22T11:26:24Z",channelId:"UCq3hT5JPPKy87JGbDls_5BQ",title:"THE LAST OF US Trailer Breakdown | Easter Eggs, Plot Theories And Reaction | HBO Max",description:`THE LAST OF US Trailer Breakdown | Easter Eggs, Plot Theories And Reaction. We breakdown and explain the new TLOU HBO Max trailer and go over how it ties in with the game, the characters and also little details in it.

#TheLastOfUs #LastOfUs #TLOU #Trailer #TrailerBreakdown #HBOMax #HBO #VideoGames 

If you enjoyed this video then please subscribe to the channel https://www.youtube.com/channel/UCq3hT5JPPKy87JGbDls_5BQ?sub_confirmation=1

If You Want To Help Support The Channel So I Can Make More Videos Like This Please Donate Here:
https://www.youtube.com/channel/UCq3hT5JPPKy87JGbDls_5BQ/join

Check out our #shorts channel here HEAVY SPOILERS CLIPS - https://www.youtube.com/channel/UCe48Fl2G6dB6HHYA982fkRA?sub_confirmation=1

Get some awesome Heavy Spoilers show clothes, phonecases and accessories at - http://shopzeroedition.com/collections/heavy-spoilers-merch

*Check out our BEST new videos below*
*House Of The Dragon Episode 1 Breakdown* - https://www.youtube.com/watch?v=wcN_XnTIKVE
*SHE HULK Episode 1 Breakdown* - https://www.youtube.com/watch?v=cqnfg1pRKAQ
*Better Call Saul Season 6 Ending Explained* - https://www.youtube.com/watch?v=aOtn9AWxbbs
*Westworld Season 4 Episode 8 Breakdown* - https://www.youtube.com/watch?v=cMlKQPc-cKM
*Prey 2 Predictions* - https://www.youtube.com/watch?v=EvTn1IcVAvU
*Sandman Ending Explained* - https://www.youtube.com/watch?v=J4Guf3aHTGs


/* ----- SOCIAL MEDIA ----- */

Follow Us On Social Media At:
Website - https://heavyspoilers.com/
TikTok - https://www.tiktok.com/@heavyspoilers?lang=en
Twitter - https://twitter.com/heavyspoilers
Instagram - https://www.instagram.com/heavyspoilers/
Facebook - https://www.facebook.com/DeffinitionMC/

Follow our team at - 
Host Paul - https://twitter.com/heavyspoilers
Host Jared - https://twitter.com/JaredBuckendahl
Editor Steesh - https://twitter.com/SteeshHaggie
Editor Matt - https://twitter.com/SuperHeroNexus


/* ----- VIDEO INFORMATION ----- */

Welcome to the Heavy Spoilers show I'm your host Paul and who else is here FOOOOOUUUUURRR The Last Of Us Teaser Trailer.

Little Golf Joke there and I tell you, we can look back and laugh now but at the time, ffff, dear me.

Anyway the new show looks incredible and throughout this video I wanna go through the trailer frame by frame and talk about all the details in it.

There will be some major spoilers here in terms of what happens in the game though so if you haven't checked it out then check out now.

If you enjoy this video then please hit the thumbs up button and also don't forget to subscribe for videos like this every day.

With that out the way, thank you for clicking this, now let's get into The Last Of Us.

-

Ok so the teaser opens in the Winter with Joel and Ellie crossing a bridge. This instantly lets us know that things will be changed up from the original game as though the setting is the same, the circumstances aren't.

The entire first game took place roughly over the space of a year with us getting several seasons all denoting certain themes and time periods. 

During this point in the original release, Joel was actually recovering from falling on some Rebarb and Ellie was out hunting for medicine and food whilst he was resting up.

Here she came across David who seemed like a good Samaritan that was just trying to help her out. He was however revealed to be the leader of a group of cannibals and he was also probably a nonce.


Music By - PSiMiTAR
► Youtube Subscribe - https://www.youtube.com/user/IamSteesh?sub_confirmation=1
► Instrumentals - https://www.youtube.com/watch?v=nUFhME-rGtc&list=PLheoTHb8ecX76eFcGiH2mEPIZLK0ETeMb
► Twitter - https://twitter.com/steeshhaggie
► Instagram - https://www.instagram.com/steeshhaggie/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/YWkumZQYP1U/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/YWkumZQYP1U/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/YWkumZQYP1U/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/YWkumZQYP1U/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/YWkumZQYP1U/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Heavy Spoilers",liveBroadcastContent:"none",publishTime:"2022-08-22T11:26:24Z"}},{kind:"youtube#searchResult",etag:"Nj_k9OXixR0VkCrL-JCn90Ym-ss",id:{kind:"youtube#video",videoId:"-eRz-00DcT0"},snippet:{publishedAt:"2022-09-27T01:08:07Z",channelId:"UC7v3-2K1N84V67IF-WTRG-Q",title:"The Last of Us | Official Teaser | HBO Max (My Thoughts)",description:`HBO's live action THE LAST OF US series has an official Teaser, and here are my thoughts on it!

Watch the teaser here: https://www.youtube.com/watch?v=rBRRDpQ0yc0&ab_channel=HBOMax

#TheLastOfUs`,thumbnails:{default:{url:"https://i.ytimg.com/vi/-eRz-00DcT0/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/-eRz-00DcT0/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/-eRz-00DcT0/hqdefault.jpg",width:480,height:360}},channelTitle:"Jeremy Jahns",liveBroadcastContent:"none",publishTime:"2022-09-27T01:08:07Z"}},{kind:"youtube#searchResult",etag:"i588cnJykfKRSnL_52XFNGuCr_8",id:{kind:"youtube#video",videoId:"V79Y3cU_Swo"},snippet:{publishedAt:"2022-08-26T11:36:04Z",channelId:"UC3DOMNPaR3_YihbzMsOJKQw",title:"HOUSE OF THE DRAGON Cast Shares Incredible Audition Stories With Matt Smith, Milly Alcock & More",description:`"House Of The Dragon" Stars Reveal Their Audition Stories And How They Landed Their Roles | Behind The Scenes Interview With Matt Smith, Paddy Considine, Emmy D'Arcy, Milly Alcock, Olivia Cooke, Steve Toussaint, Emily Carey & Eve Best | Making Of Talk | Funny Cast Moments | HBO Original Series 2022 (USA) | Sky Exclusive Series (GER, UK, FR, A, SU)  | HBO MAX | WOW | Genre: Fantasy Action, Drama |  A̲̲b̲̲o̲̲n̲̲n̲̲i̲̲e̲̲r̲̲e̲̲n̲/Subscribe ➢ http://bit.ly/2ncNY5W | (OT: HOUSE OF THE DRAGON ) SEASON 2 ALREADY CONFIRMED AND COMING END OF 2023

ＫＥＹ ＦＡＣＴＳ:
🔑 Release Date 21.08.2022 (HBO | HBO MAX)
🔑 Release Date 22.08.2022 (SKY | WOW)
🔑 Duration: 10 Episodes in 1 Season
🔑 US-Link: www.hbo.com/house-of-the-dragon
🔑 EU-Link: www.sky.de/serien/house-of-the-dragon

P L O T:
The story of the House Targaryen set 200 years before the events of Game of Thrones (2011).

ＣＡＳＴ:  
❌ Paddy Considine (King Viserys Targaryen)
❌ Olivia Cooke (Alicent Hightower)
❌ Emma D'Arcy (Princess Rhaenyra Targaryen)
❌ Matt Smith (Prince Daemon Targaryen)
❌ Steve Toussaint (Lord Corlys Velaryon)
❌ Eve Best (Princess Rhaenys Velaryon)
❌ Rhys Ifans (Otto Hightower)
❌ Sonoya Mizuno (Mysaria)
❌ Eve Best (Princess Rhaenys Velaryon)
❌ Milly Alcock (Young Rhaenyra Targaryen)
❌ Emily Carey (Young Alicent Hightower)
❌ Fabien Frankel (Ser Criston Cole)
❌ Ryan Corr (Ser Harwin 'Breakbones' Strong)
❌ Jefferson Hall (Lord Jason Lannister)
❌ David Horovitch (Grand Maester Mellos)
❌ Graham McTavish (Ser Harrold Westerling)
❌ Matthew Needham (Larys Strong)
❌ Bill Paterson(Lord Lyman Beesbury)
❌ Gavin Spokes (Lord Lyonel Strong)
❌ Alexis Raben (Talya)

D I R E C T O R: 
❌ Miguel Sapochnik
❌ Greg Yaitanes
❌ Clare Kilner
❌ Geeta Vasant Patel

S C R I P T:
❌ Ryan J. Condal
❌ George R.R. Martin
❌ Sara Hess
❌ Charmaine De Grate
❌ Gabe Fonseca
❌ Kevin Lau
❌ Ira Parker
❌ Eileen Shim

📺 No HBO Max yet??Then click here for the free trial month (can be cancelled at any time): http://nflx.it/2otXYJ1

❗️ http:// amzn.to are Affiliate Links. If you buy something through them, nothing changes for you, but you support my work.

❗️ http:// amzn.to sind Affiliate Links. Wenn ihr darüber etwas kauft ändert sich für euch nichts, ihr unterstützt jedoch meine Arbeit. | Trailer: Promotional use only.

 ❗️Trailer: Promotional Use Only. | All Rights Reserved. | Trailer property of HBO & SKY |

#houseofthedragon #interview #behindthescenes`,thumbnails:{default:{url:"https://i.ytimg.com/vi/V79Y3cU_Swo/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/V79Y3cU_Swo/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/V79Y3cU_Swo/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/V79Y3cU_Swo/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/V79Y3cU_Swo/maxresdefault.jpg",width:1280,height:720}},channelTitle:"STREAM WARS",liveBroadcastContent:"none",publishTime:"2022-08-26T11:36:04Z"}},{kind:"youtube#searchResult",etag:"TF6_eTHVoca3qcVXNd5aICp-eig",id:{kind:"youtube#video",videoId:"hxNKzJ1oZ40"},snippet:{publishedAt:"2022-09-26T16:47:09Z",channelId:"UCLdPUOIBv-O0mTWtUBaQNtg",title:"The Absolutely Insane Update on Cyberpunk 2077",description:`Today we talk about Cyberpunk 2077's insane new playcount. Following the release of Cyberpunk Edgerunners, Cyberpunk 2077 has been hitting insane new player numbers and many fans are questioning what future updates and DLC for Cyberpunk may entail. 

Get Cyberpunk 2077 with my affiliate link: https://af.gog.com/game/cyberpunk_2077?as=1716164547
\r
Merch: https://juicehead.net/\r
Twitter: https://twitter.com/JuiceHead33\r
Discord: https://discord.gg/jzhzrhm

Sources:

1 Million Players Per Day: https://twitter.com/CyberpunkGame/status/1572601419789897728
Hothead Gig Gameplay: https://www.youtube.com/watch?v=WHU4j4bYYoQ
Multiplayer in the Credits: https://old.reddit.com/r/cyberpunkgame/comments/xkzt7i/what_multiplayer/
Cyberpunk Steam Best Seller: https://old.reddit.com/r/LowSodiumCyberpunk/comments/xnlh6v/cyberpunk_2077_is_now_the_1_seller_on_steam/
CDPR Reactions:
https://twitter.com/tostspender/status/1574040458749267969
https://twitter.com/JakubWu/status/1573708799373983745
https://twitter.com/PaweSasko/status/1574044965075927043
Cyberpunk 2077 Bugs: https://www.youtube.com/watch?v=CqEMEjJj4hs
Cyberpunk 2077 Police Chase: https://www.youtube.com/watch?v=Gl_-_pds5k8
Cyberpunk 2077 Ray Tracing Overdrive: https://www.nvidia.com/en-us/geforce/news/dlss3-supports-over-35-games-apps/
Police Chase and Vehicle Combat Mod: https://www.nexusmods.com/cyberpunk2077/mods/3815

Thumbnail: https://www.nexusmods.com/cyberpunk2077/images/25043
Author - gunshyghosts

#Cyberpunk2077 #CyberpunkUpdate #CyberpunkLeak`,thumbnails:{default:{url:"https://i.ytimg.com/vi/hxNKzJ1oZ40/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/hxNKzJ1oZ40/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/hxNKzJ1oZ40/hqdefault.jpg",width:480,height:360}},channelTitle:"JuiceHead",liveBroadcastContent:"none",publishTime:"2022-09-26T16:47:09Z"}},{kind:"youtube#searchResult",etag:"hCMYe5b8uXEC-kW4Eny9m8kyMMQ",id:{kind:"youtube#video",videoId:"qGLHDqcV-Pg"},snippet:{publishedAt:"2022-09-20T18:31:06Z",channelId:"UCo5E9pEhK_9kWG7-5HHcyRg",title:"WI v. Jeffrey Dahmer (1992): Victim Tracy Edwards Testifies",description:`WI v. DAHMER (1992): Tracy Edwards, who escaped from Jeffrey Dahmer, takes the stand.

A new Netflix documentary "Monster: The Jeffrey Dahmer Story" explores the gruesome story of Jeffrey Dahmer. Court TV cameras were inside the Wisconsin courtroom in 1992, where a jury was tasked to decide whether Dahmer, who pleaded guilty to the murders and dismemberment of 15 boys and men, should be sentenced to life in prison or admitted to a mental institution.

Watch the FULL TRIAL of WI v. #JeffreyDahmer (1992) on #CourtTV Trials #OnDemand 
https://www.courttv.com/trials/wi-v-dahmer-1992/

WATCH COURT TV LIVE:
  https://www.courttv.com/title/court-tv-live-stream-web/?trk=YouTube 

WATCH TRIALS ON DEMAND:
 https://www.courttv.com/programming/trial-archives/?trk=YouTube 

WHERE TO WATCH:   
https://www.courttv.com/where-to-watch/?trk=YouTube`,thumbnails:{default:{url:"https://i.ytimg.com/vi/qGLHDqcV-Pg/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/qGLHDqcV-Pg/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/qGLHDqcV-Pg/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/qGLHDqcV-Pg/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/qGLHDqcV-Pg/maxresdefault.jpg",width:1280,height:720}},channelTitle:"COURT TV",liveBroadcastContent:"none",publishTime:"2022-09-20T18:31:06Z"}},{kind:"youtube#searchResult",etag:"j4N1OmWpxRagXJ1_d8xG62wL0iw",id:{kind:"youtube#video",videoId:"pk9v3m7Slv8"},snippet:{publishedAt:"2022-09-24T12:50:18Z",channelId:"UCBa659QWEk1AI4Tg--mrJ2A",title:"I thought the treadmill crane was fictional.",description:`The treadwheel crane, or treadmill crane, sounds like something from Astérix or the Flintstones. But at Guédelon in France, not only do they have one: they're using it to help build their brand new castle. ▪ More about Guédelon: https://www.guedelon.fr/

Camera: Simon Gillouin
Editor: Michelle Martin https://twitter.com/mrsmmartin
Producer: Axel Zeiliger https://block8production.com

I'm at https://tomscott.com\r
on Twitter at https://twitter.com/tomscott\r
on Facebook at https://facebook.com/tomscott\r
and on Instagram as tomscottgo`,thumbnails:{default:{url:"https://i.ytimg.com/vi/pk9v3m7Slv8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/pk9v3m7Slv8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/pk9v3m7Slv8/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/pk9v3m7Slv8/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/pk9v3m7Slv8/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Tom Scott",liveBroadcastContent:"none",publishTime:"2022-09-24T12:50:18Z"}},{kind:"youtube#searchResult",etag:"rdE4oZMYywVfDfI-k8WsIc8vSRk",id:{kind:"youtube#video",videoId:"FJNnSlTZE9E"},snippet:{publishedAt:"2022-08-30T23:16:57Z",channelId:"UCSFy-1JrpZf0tFlRZfo-Rvw",title:"The failure of feminist Hollywood",description:`Thanks to Established Titles for sponsoring today's video. They are now running a Labor Day Sale! Go to https://establishedtitles.com/Sydney to get an additional 10% off on any purchase with code SYDNEY!

Links:
The article that made me angry: https://gamerant.com/she-hulk-sex-positive-vibes-jessica-gao/

Batgirl: https://www.ign.com/articles/the-batgirl-cancellation-why-it-happened-the-social-media-fallout-and-more

Batwoman: https://www.cbr.com/batwoman-cancelled-what-went-wrong/

Find me:
Subscribestar: https://www.subscribestar.com/sydney-watson
Gab: https://gab.com/sydneywatson 
Facebook: https://www.facebook.com/sydneywatsonofficial 
Twitter: https://twitter.com/sydneylwatson 
Instagram: https://www.instagram.com/sydneywatson__ 

Sign up to my email list (I promise not to harass you haha): https://www.sydneywatson.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/FJNnSlTZE9E/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/FJNnSlTZE9E/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/FJNnSlTZE9E/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/FJNnSlTZE9E/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/FJNnSlTZE9E/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Sydney Watson",liveBroadcastContent:"none",publishTime:"2022-08-30T23:16:57Z"}},{kind:"youtube#searchResult",etag:"Nb9CTpSsgFvr-1QJQkyQJdecrEg",id:{kind:"youtube#video",videoId:"xPhFM00noJM"},snippet:{publishedAt:"2022-09-23T01:23:27Z",channelId:"UCx-KWLTKlB83hDI6UKECtJQ",title:"Matt Smith, a man of many talents #shorts",description:`A new episode of House of the Dragon is streaming Sunday night on HBO via HBO Max. 

About HBO Max:
HBO Max is WarnerBrosDiscovery’s direct-to-consumer offering with 10,000 hours of curated premium content. HBO Max offers powerhouse programming for everyone in the home, bringing together HBO, a robust slate of new original series, key third-party licensed programs and movies, and fan favorites from WarnerMedia’s rich library including Warner Bros., New Line, DC, CNN, TNT, TBS, truTV, Turner Classic Movies, Cartoon Network, Adult Swim, Crunchyroll, Rooster Teeth, Looney Tunes and more. #HBOMax #WarnerBrosDiscovery 

SUBSCRIBE TO HBO MAX
http://bit.ly/HBOMaxYouTube

GET HBO MAX
https://itsh.bo/ways-to-get

MORE HBO MAX
HBO Max: https://hbom.ax/YT 
Follow HBO Max on Instagram: http://bit.ly/HBOMaxInstagram
Follow HBO Max on TikTok: https://hbom.ax/HBOMaxTT
Follow HBO Max on Twitter: http://bit.ly/HBOMaxTwitter 
Like HBO Max on Facebook: http://bit.ly/HBOMaxFacebook`,thumbnails:{default:{url:"https://i.ytimg.com/vi/xPhFM00noJM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/xPhFM00noJM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/xPhFM00noJM/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/xPhFM00noJM/sddefault.jpg",width:640,height:480}},channelTitle:"HBO Max",liveBroadcastContent:"none",publishTime:"2022-09-23T01:23:27Z"}},{kind:"youtube#searchResult",etag:"hyYq22s3qaE5mYcdX2keW-frSGc",id:{kind:"youtube#video",videoId:"bntzdxHIixE"},snippet:{publishedAt:"2022-09-21T15:23:23Z",channelId:"UCx-KWLTKlB83hDI6UKECtJQ",title:"Emma D'Arcy & Olivia Cooke Get To Know Me | House of the Dragon | HBO Max",description:`House of the Dragon stars Emma D’Arcy and Olivia Cooke get to know each other as they ask and answer a series of personal and show related questions. 

Stream House of The Dragon on HBO Max.

About HBO Max:
HBO Max is WarnerBrosDiscovery’s direct-to-consumer offering with 10,000 hours of curated premium content. HBO Max offers powerhouse programming for everyone in the home, bringing together HBO, a robust slate of new original series, key third-party licensed programs and movies, and fan favorites from WarnerMedia’s rich library including Warner Bros., New Line, DC, CNN, TNT, TBS, truTV, Turner Classic Movies, Cartoon Network, Adult Swim, Crunchyroll, Rooster Teeth, Looney Tunes and more. #HBOMax #WarnerBrosDiscovery 

SUBSCRIBE TO HBO MAX
http://bit.ly/HBOMaxYouTube

GET HBO MAX
https://itsh.bo/ways-to-get

MORE HBO MAX
HBO Max: https://hbom.ax/YT 
Follow HBO Max on Instagram: http://bit.ly/HBOMaxInstagram
Follow HBO Max on TikTok: https://hbom.ax/HBOMaxTT
Follow HBO Max on Twitter: http://bit.ly/HBOMaxTwitter 
Like HBO Max on Facebook: http://bit.ly/HBOMaxFacebook`,thumbnails:{default:{url:"https://i.ytimg.com/vi/bntzdxHIixE/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/bntzdxHIixE/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/bntzdxHIixE/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/bntzdxHIixE/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/bntzdxHIixE/maxresdefault.jpg",width:1280,height:720}},channelTitle:"HBO Max",liveBroadcastContent:"none",publishTime:"2022-09-21T15:23:23Z"}},{kind:"youtube#searchResult",etag:"lCqfgmV6QTf23fRWgNk76blNtoE",id:{kind:"youtube#video",videoId:"D7C8Pz-3IQ4"},snippet:{publishedAt:"2022-06-09T23:15:06Z",channelId:"UCCV8Mj59PZkf3ON_U8q4n7g",title:"The Last of Us Part I | Original VS Remake | Trailer Graphics Comparison | Analista De Bits",description:`Buy at Instant-Gaming through this affiliate link for any platform and you will help the channel a lot!
https://www.instant-gaming.com/es/?igr=analistadebits`,thumbnails:{default:{url:"https://i.ytimg.com/vi/D7C8Pz-3IQ4/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/D7C8Pz-3IQ4/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/D7C8Pz-3IQ4/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/D7C8Pz-3IQ4/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/D7C8Pz-3IQ4/maxresdefault.jpg",width:1280,height:720}},channelTitle:"ElAnalistaDeBits",liveBroadcastContent:"none",publishTime:"2022-06-09T23:15:06Z"}},{kind:"youtube#searchResult",etag:"XVczdwkCYEgcELcQC-UyPJz1-y8",id:{kind:"youtube#video",videoId:"NzaAY0Ob-Ek"},snippet:{publishedAt:"2022-07-24T17:19:03Z",channelId:"UC5cvKVbmzNSJgM-rbtyg1lg",title:"Black Panther: Wakanda Forever | Official Teaser - EMOTIONAL REACTION!!!",description:`WOW! WE HAVE NO WORDS!! WHAT DO YOU THINK?! ARE YOU EXCITED TO SEE THIS?!

ORIGINAL TRAILER: https://www.youtube.com/watch?v=RlOB3UALvrQ&t

WAKANDA FOREVER - 11.11.22
Wakanda Forever Prologue – New Music Releases July 25 – Pre-Save/Pre-Add Now: https://presave.umusic.com/bpwfp

#WAKANDAFOREVER #MARVEL #CHADWICK`,thumbnails:{default:{url:"https://i.ytimg.com/vi/NzaAY0Ob-Ek/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/NzaAY0Ob-Ek/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/NzaAY0Ob-Ek/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/NzaAY0Ob-Ek/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/NzaAY0Ob-Ek/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Creative Eye",liveBroadcastContent:"none",publishTime:"2022-07-24T17:19:03Z"}},{kind:"youtube#searchResult",etag:"a2Azua8ELHfnsPhobcIvHe9bzD4",id:{kind:"youtube#video",videoId:"pVyJ7D3dnys"},snippet:{publishedAt:"2022-07-16T06:11:22Z",channelId:"UCwBV-eg1dAkzrdjqJfyEj0w",title:"NEW MOVIE TRAILERS 2022 (July)",description:`Upcoming Movies That Can Be Found In This Trailer Compilation:

0:00 - NEW MOVIE TRAILERS 2022
0:05 - Secret Headquarters Trailer (2022) Owen Wilson
1:53 - Five Days At Memorial Trailer 2 (2022) Apple TV
4:06 - LOTR: The Rings Of Power Trailer 2 (2022) Final
6:27 - Hot  Seat Trailer (2022) Mel Gibson, Action
8:00 - Orphan: First Kill Trailer (2022) Horror/Thriller
10:10 - The Nan Movie Trailer (2022) Comedy
11:45 - The Moderator Trailer (2022) Action
13:05 - Prey For The Devil Trailer (2022) Horror
15:27 - Spin Me Round Trailer (2022) Aubrey Plaza
17:28 - Shazam 2 Trailer (2022) Teaser
17:44 - Black Adam Trailer 2 (2022) Teaser
18:01 - The Munsters (2022) Rob Zombie
20:24 - CHUCKY Season 2 Trailer (2022) Teaser
20:38 - Underground Monster Trailer (2022) Sci-Fi
21:55 - SPAWN 2 Trailer (2022) Teaser (Thumbnail)
24:01 - Amsterdam Trailer (2022) Christian Bale
26:35 - Emily The Criminal Trailer (2022) Aubrey Plaza
28:36 - Honor Society Trailer (2022)
30:43 -  Metronomicon Trailer (2022) Digital Motion Painting 

NEW MOVIE TRAILERS 2022 (July)
© 2022 
All audiovisual content are the © copyright of their respective owners.

-------
For Movie News, Spoilers & Leaks:
https://www.MovieGasm.com
-------
Guest Writers, Sponsorships, and Guest posts are welcome @ Team MG.
- Do Follow Links allowed for quality post. Contact: Editor-In-Chief@MovieGasm.com
-------
#movie #trailer #movietrailers #moviegasm`,thumbnails:{default:{url:"https://i.ytimg.com/vi/pVyJ7D3dnys/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/pVyJ7D3dnys/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/pVyJ7D3dnys/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/pVyJ7D3dnys/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/pVyJ7D3dnys/maxresdefault.jpg",width:1280,height:720}},channelTitle:"MovieGasm.com",liveBroadcastContent:"none",publishTime:"2022-07-16T06:11:22Z"}},{kind:"youtube#searchResult",etag:"oTZbEz-ZgJPKSezyf7YC7DRRr14",id:{kind:"youtube#video",videoId:"rCRCG9VkPYk"},snippet:{publishedAt:"2022-09-25T19:50:08Z",channelId:"UCIHdDJ0tjn_3j-FS7s_X1kQ",title:"Reaction to Andrew Tate’s Interview - Why Did Millions Spend 5 Hours Watching It?",description:`In today's video, Patrick Bet-David reacts to the Andrew Tate interview and discusses why all people should have a chance to be heard. 

Check out the new home for all things Valuetainment! https://valuetainment.com

Subscribe for weekly videos http://bit.ly/2aPEwD4 

Recommended Video: 
10 Reasons To Love Capitalism: https://youtu.be/Al-B8ZMz4DM

To reach the Valuetainment team you can email: info@valuetainment.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/rCRCG9VkPYk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/rCRCG9VkPYk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/rCRCG9VkPYk/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/rCRCG9VkPYk/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/rCRCG9VkPYk/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Valuetainment",liveBroadcastContent:"none",publishTime:"2022-09-25T19:50:08Z"}},{kind:"youtube#searchResult",etag:"_Ox2ut_Ct8WStP0tSmG06LYYXmU",id:{kind:"youtube#video",videoId:"d-JNdLyAEYI"},snippet:{publishedAt:"2022-09-26T18:04:40Z",channelId:"UCAXR2zenCwvRIyQd9ydtfaA",title:"The Last of Us Trailer REACTION - HBO 2023 - Pedro Pascal",description:`The Last of Us today! Beyond The Trailer reaction & review 2023! HBO, HBO Max! Pedro Pascal is Joel! Based on the Naughty Dog video games!
http://bit.ly/subscribeBTT

The Last of Us Trailer REACTION today! Beyond The Trailer host Grace Randolph's reaction & review of the official teaser trailer for The Last of Us based on the video games coming to HBO and HBO Max in 2023! Pedro Pascal is Joel, Bella Ramsey is Ellie! Share your own reaction to the official teaser trailer for The Last of Us before you see each full episode in 2023!  And be sure to make Beyond The Trailer your first stop for movie and entertainment news here on YouTube today!

Interact with host & creator Grace Randolph!
Twitter: http://bit.ly/GraceOnTwitter

#TheLastOfUs #HBO #PedroPascal`,thumbnails:{default:{url:"https://i.ytimg.com/vi/d-JNdLyAEYI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/d-JNdLyAEYI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/d-JNdLyAEYI/hqdefault.jpg",width:480,height:360}},channelTitle:"Beyond The Trailer",liveBroadcastContent:"none",publishTime:"2022-09-26T18:04:40Z"}},{kind:"youtube#searchResult",etag:"WQ269fTWZsw0xL5dEN3EXIyAXWs",id:{kind:"youtube#video",videoId:"l-bSjWqvt_E"},snippet:{publishedAt:"2022-09-24T16:19:48Z",channelId:"UCyQ6Uu4AmbB6ZS5xsnFA93w",title:"ISHOWSPEED HIGHLIGHTS IN THE SIDEMEN CHARITY MATCH",description:"#ishowspeed #viral #sidemen",thumbnails:{default:{url:"https://i.ytimg.com/vi/l-bSjWqvt_E/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/l-bSjWqvt_E/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/l-bSjWqvt_E/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/l-bSjWqvt_E/sddefault.jpg",width:640,height:480}},channelTitle:"YOURFAVORITEPLUG",liveBroadcastContent:"none",publishTime:"2022-09-24T16:19:48Z"}},{kind:"youtube#searchResult",etag:"DcP8DeZGxfTxaG-AqSzszsQPJGw",id:{kind:"youtube#video",videoId:"2nnkF9jffdY"},snippet:{publishedAt:"2022-09-26T22:32:01Z",channelId:"UCq6VFHwMzcMXbuKyG7SQYIg",title:"Dumbest Thing I've Ever Seen",description:`This is the greatest silly mistake of All Time
Merch https://moistglobal.com/
I stream every day https://www.twitch.tv/moistcr1tikal`,thumbnails:{default:{url:"https://i.ytimg.com/vi/2nnkF9jffdY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/2nnkF9jffdY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/2nnkF9jffdY/hqdefault.jpg",width:480,height:360}},channelTitle:"penguinz0",liveBroadcastContent:"none",publishTime:"2022-09-26T22:32:01Z"}},{kind:"youtube#searchResult",etag:"YpzPfZf56vL6ZrKSunvSC9kK6S4",id:{kind:"youtube#video",videoId:"WVkcmA7tC_g"},snippet:{publishedAt:"2022-09-26T06:44:49Z",channelId:"UCDiFRMQWpcp8_KD4vwIVicw",title:"House Of The Dragon Episode 6 FULL Breakdown and Game Of Thrones Easter Eggs",description:`House Of The Dragon Episode 6. Game Of Thrones Easter Eggs, Dance Of The Dragons, Aegon II, New Dragons, Vhagar, Ending Explained & Episode 7 ► https://bit.ly/AwesomeSubscribe
House Of The Dragon Episode 7 Trailer https://www.youtube.com/watch?v=xjRA6_p7ZcI&list=PLOIeYdZ3QczxGuSDE8NtOuthqbKFChC0q&index=1
House Of The Dragon Episode 5 https://www.youtube.com/watch?v=-f_lK17-088&list=PLOIeYdZ3QczxGuSDE8NtOuthqbKFChC0q&index=1
House Of The Dragon Dance Of The Dragons https://www.youtube.com/watch?v=m3rV0oaKuN4&list=PLOIeYdZ3QczxGuSDE8NtOuthqbKFChC0q&index=1
Loki Season 2 Trailer https://www.youtube.com/watch?v=E7_0PU3jkUg&list=PLOIeYdZ3QczwWT3yd94Xc6n-ooI85uV_u&index=1&t=0s
Marvel Secret Invasion Trailer https://www.youtube.com/watch?v=Kd-2nciUU-k&list=PLOIeYdZ3QczwWT3yd94Xc6n-ooI85uV_u&index=1
Black Panther Wakanda Forever Trailer https://www.youtube.com/watch?v=GFVKCPnmUN8&list=PLOIeYdZ3QczwWT3yd94Xc6n-ooI85uV_u&index=1
Guardians of the Galaxy 3 Trailer https://www.youtube.com/watch?v=WS1S8XKNCIk&list=PLOIeYdZ3QczwWT3yd94Xc6n-ooI85uV_u&index=1
Emergency Awesome New Videos https://www.youtube.com/watch?v=FeOfhzu7ZdY&list=PLOIeYdZ3QczxQXxyV_2D8kuEs_QsuQIyJ&index=7

House of the Dragon Episode 1 - Episode 10 Finale https://www.youtube.com/watch?v=KhqMOEzFu-Q&list=PLOIeYdZ3QczxGuSDE8NtOuthqbKFChC0q&index=1
Game Of Thrones Episodes https://www.youtube.com/watch?v=6yt4zOmjFHs&list=PLOIeYdZ3Qczy79AfbfCgys2YwI8g6zD16&index=13

Covering Full House Of the Dragon Episode 6 Breakdown. The Princess and The Queen. Game Of Thrones Easter Eggs and References Explained. Aftermath of House Of The Dragon Episode 5 Rhaenyra Wedding to Laenor Velaryon. New Dragons Vhagar, Meleys and Seasmoke Explained. Game Of Thrones Red Wedding and Joffrey Purple Wedding Easter Eggs.

Why King Viserys Targaryen is Dying. Aegon II Targaryen Explained and new scenes. Aegon II and brother Aemond Targaryen. Aegon vs Rhaenyra and Iron Throne. Daemon and Rhaenyra Explained. House Of The Dragon Episode 6 Time Jump with older Rhaenyra and Alicent actresses explained. Harrenhal Explained, Aegon and Valyria Explained.

Rhaenyra and Harwin Strong, Rhaenyra and Criston Cole Explained. The House of the Dragon Trailer also has footage covering  future episodes through the middle of the season including Episode 7, Episode 8, Episode 9, and Episode 10 Finale. Aegon's Conquest. New Characters, Game of Thrones History and Lore. New House of The Dragon Intro Scene, New Titles.

Dance of The Dragons Trailer and A Song of Ice And Fire Book Easter Eggs. Jon Snow Daenerys Targaryen Family History and Lore. George RR Martin involvement explained. Game Of Thrones, A Song of Ice And Fire Books it's based on.  And the House of the Dragon Game of Thrones Episode Timeline.

Black Panther 2 Trailer, Avengers 5 Kang Dynasty Trailer, Avengers 6 Secret Wars Trailer, Thunderbolts Trailer, Ant-Man 3 Trailer, Deadpool 3, Fantastic Four Teaser and videos from Disney Plus Day.

My House of the Dragon Episode 7 Trailer video will post next! Full House Of The Dragon Episode 7 video next sun. Rick and Morty Season 6 Episode 4 video tues!

Twitch Channel https://twitch.tv/emergencyawesome
Twitter  https://twitter.com/awesomemergency
Facebook  https://facebook.com/emergencyawesome
Instagram  https://instagram.com/emergencyawesome
Tumblr  https://robotchallenger.com
My Website https://emergencyawesome.com

:: Video Playlists For Shows ::

New Emergency Awesome Videos https://www.youtube.com/playlist?list=PLOIeYdZ3QczxQXxyV_2D8kuEs_QsuQIyJ
House of The Dragon Episodes https://www.youtube.com/playlist?list=PLOIeYdZ3QczxqJeNeCsF_ghizcTS9nM4X
Loki Episodes https://www.youtube.com/playlist?list=PLOIeYdZ3Qczy8mUNqHU-35xtTd-JpJU3l
The Mandalorian Episodes https://www.youtube.com/playlist?list=PLOIeYdZ3QczzsN78nOjS-ABHwKaB7KONW
Game of Thrones Episodes https://www.youtube.com/playlist?list=SPOIeYdZ3QczxGuSDE8NtOuthqbKFChC0q
Marvel Movies and Avengers https://www.youtube.com/playlist?list=PLOIeYdZ3QczwWT3yd94Xc6n-ooI85uV_u
Rick and Morty Season 6 Episodes https://www.youtube.com/playlist?list=PLOIeYdZ3Qczyvx-lFYzOv9s6bOv7b9wYR
Avatar The Last Airbender Episodes https://www.youtube.com/playlist?list=PLOIeYdZ3Qczx-z2jyyX4naSnE1A8d0hkC
The Witcher Season 3 Episodes Netflix https://www.youtube.com/playlist?list=PLOIeYdZ3QczyRsUjubTL0CQyPIu1g9OtV
The Boys Season 3 Episodes https://www.youtube.com/playlist?list=PLOIeYdZ3Qczw-KMQyuCrxcxV3mSQWTAdR
Spider Man Videos https://www.youtube.com/playlist?list=PLOIeYdZ3QczzbRhRiGhj3-MaZ_24kadOy
The Batman and DC Movies https://www.youtube.com/playlist?list=PLOIeYdZ3QczwCLH9RIm-7ui56ameRYmdQ
Justice League Snyder Cut Videos https://www.youtube.com/playlist?list=PLOIeYdZ3QczwCLH9RIm-7ui56ameRYmdQ
Star Wars Movies https://www.youtube.com/playlist?list=PLOIeYdZ3QczztMg8cT1WS0P8ATv-MhUEJ


THANKS FOR WATCHING!!`,thumbnails:{default:{url:"https://i.ytimg.com/vi/WVkcmA7tC_g/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/WVkcmA7tC_g/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/WVkcmA7tC_g/hqdefault.jpg",width:480,height:360}},channelTitle:"Emergency Awesome",liveBroadcastContent:"none",publishTime:"2022-09-26T06:44:49Z"}},{kind:"youtube#searchResult",etag:"SUv8b5qvcZ1xaEMaaEGxYbA57Q0",id:{kind:"youtube#video",videoId:"3oToves5uPg"},snippet:{publishedAt:"2022-08-11T18:10:37Z",channelId:"UCz1GPotHecuLngiLuY739QQ",title:"‘House of the Dragon’ Cast on Dragon Riding, Family Conflict, and the ‘Game of Thrones’ Legacy",description:`In creating a prequel to one of the most popular TV series of all time, ‘House of the Dragon’ producers faced an ambitious task. ‘Game of Thrones,’ based on George R.R. Martin’s ‘Song of Ice and Fire’ fantasy novel series, wowed audiences worldwide during its run, ending in 2019 after eight seasons. The prequel series tells another story of the fight for the Iron Throne: that of Targaryen vs. Targaryen and dragon vs. dragon 200 years before the events of the Emmy-winning original series. Cast members Matt Smith, Paddy Considine, Olivia Cooke, Emma D’Arcy, Fabien Frankel, Milly Alcock, Steve Toussaint, Eve Best, and Graham McTavish join co-showrunners and executive producers Ryan Condal and Miguel Sapochnik to speak with Rotten Tomatoes correspondent Nikki Novak about their epic undertaking. ‘House of the Dragon’ premieres on Sunday, August 21 on HBO.

► Learn more: https://www.rottentomatoes.com/tv/house_of_the_dragon?cmp=RTTV_YouTube_Desc 
 
Subscribe to the channel and click the bell icon to be notified of new videos: http://bit.ly/2qTF6ZY  
 
00:00 Matt Smith and Paddy Considine
05:37 Olivia Cooke and Emma D’Arcy
11:46 Ryan Condal and Miguel Sapochnik
19:19 Fabien Frankel and Milly Alcock
23:54 Steve Toussaint and Eve Best
28:19 Graham McTavish

Music: 
Courtesy of Extreme Music 
 
Watch More: 
► Rotten Tomatoes Originals: http://bit.ly/2D3sipV  
► Fresh New Clips: https://bit.ly/3mJePrv  
► Hot New Trailers: http://bit.ly/2qThrsF  
► New TV This Week: https://bit.ly/3Or3I2w  
 
Rotten Tomatoes TV delivers Fresh TV at a click! Discover the best trailers, clips, sneak peeks, and binge guides for shows you love and the upcoming series and TV movies that should be on your radar.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/3oToves5uPg/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/3oToves5uPg/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/3oToves5uPg/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/3oToves5uPg/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/3oToves5uPg/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Rotten Tomatoes TV",liveBroadcastContent:"none",publishTime:"2022-08-11T18:10:37Z"}},{kind:"youtube#searchResult",etag:"_OFO8b_ZCPqMOtSx6JzdatHwVvY",id:{kind:"youtube#video",videoId:"LLlkID9IpAM"},snippet:{publishedAt:"2022-05-09T06:06:58Z",channelId:"UCq3hT5JPPKy87JGbDls_5BQ",title:"AVATAR 2: The Way Of Water Official Trailer Breakdown | Easter Eggs, Hidden Details And Plot Details",description:`AVATAR 2: The Way Of Water Official Trailer Breakdown | Easter Eggs, Hidden Details And Things You Missed. We breakdown the new Avatar 2 trailer from Disney. We also recap the first film, discuss the cast, plot and everything we know so far.

#Avatar #TheWayOfWater #Avatar2 #Trailer #TrailerBreakdown #ThingsYouMissed #EasterEggs #Disney #AvatarTheWayOfWater

If you enjoyed this video then please subscribe to the channel https://www.youtube.com/channel/UCq3hT5JPPKy87JGbDls_5BQ?sub_confirmation=1

If You Want To Help Support The Channel So I Can Make More Videos Like This Please Donate Here:
https://www.youtube.com/channel/UCq3hT5JPPKy87JGbDls_5BQ/join

Get some awesome Heavy Spoilers show clothes, phonecases and accessories at - https://teespring.com/en-GB/stores/deffinitions-store

*Check out our BEST new videos below*
*Doctor Strange In The Multiverse Of Madness Ending Explained* - https://www.youtube.com/watch?v=BO8NpFbzxeI
*Moon Knight Episode 6 Breakdown* - https://www.youtube.com/watch?v=1-t4YyXlMN0
*Jane Foster Thor Explained* - https://www.youtube.com/watch?v=ylcSxMraeOM
*Thor Love And Thunder Trailer Breakdown* - https://www.youtube.com/watch?v=c73h1u1Zjvo
*Every Easter Egg In The Batman* - https://www.youtube.com/watch?v=4mDmv8I1U1Y
*Fantastic Beasts The Secrets Of Dumbledore* - https://www.youtube.com/watch?v=b1_zVsJMBiU


/* ----- SOCIAL MEDIA ----- */

Follow Me On Social Media At:
Website - https://heavyspoilers.com/
TikTok - https://www.tiktok.com/@heavyspoilers?lang=en
Twitter - https://twitter.com/heavyspoilers
Instagram - https://www.instagram.com/heavyspoilers/
Facebook - https://www.facebook.com/DeffinitionMC/


/* ----- VIDEO INFORMATION ----- */

0:00 Avatar Recap
4:17 Avatar 2 Trailer Breakdown

Welcome to the Heavy Spoilers show, I'm your host Paul and I'm blue daba dee daba die because Disney have just dropped the first trailer for Avatar 2.

The first movie released all the way back in 2009 and the several sequels that we're getting on the film have remained a closely guarded secret since then. The film was a box office phenomenon that's pretty much remained as the highest grossing film of all time for the 13 years since it's release. Avengers Endgame managed to snatch the crown back from it only for the inevitable to happen and it once more regained it's spot at the top.

However, there hasn't really been that much hype for it and I have to admit that I wasn't that interested. I think I'd probably only seen the movie at the cinema when it released and then maybe watched it once more at home. I always remembered it being kinda mid with a heavy reliance on the 3D that kinda lost it's appeal once you removed that. However I actually went back at the weekend and rewatched the film and I have to say that I was wrong and it definitely stands on it's own two feet even without the technology behind it. The movie really captivated me and I think it stands on it's own two feet without needing to strap massive glasses onto your head sometimes over your glasses.

Now I'm guessing a lot of you are in the same boat as me where you haven't watched the movie since it released so if you need a quick catch up then the next part of the video is for you. I've left timecodes below if you just wanna skip to the trailer stuff but we start off in the far distant future of 2154. The world is almost a barren wasteland due to humanity using up all of Earth's natural resources and it now looks like a night out in Glasgow.

Early on we meet Jake Sully, an ex marine who was left paralysed after a combat mission he was on went awry. Jakes brother was part of the Avatar programme which allowed someone to control a host body through their consciouness so that humans could interact with the locals on any planet they landed on by looking like them. However Jakes brother died and due to the Avatars taking genetic material from the person piloting them they needed a match which came in the form of Jake, his twin brothers twin...brother.

Keep up yeah.

Anyway along with the Resources Development Administration or RDA for short they headed out to the Planet Pandora. Attempting to obtain a special element called Unobtanium...which...yeah I forgot it was called that.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/LLlkID9IpAM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/LLlkID9IpAM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/LLlkID9IpAM/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/LLlkID9IpAM/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/LLlkID9IpAM/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Heavy Spoilers",liveBroadcastContent:"none",publishTime:"2022-05-09T06:06:58Z"}},{kind:"youtube#searchResult",etag:"GMSpnev5QC8DO5hM0HZSSGZWddU",id:{kind:"youtube#video",videoId:"0mv0dAwPqCs"},snippet:{publishedAt:"2022-08-30T15:48:40Z",channelId:"UC9PBzalIcEQCsiIkq36PyUA",title:"The Last of Us Part 1 - PlayStation 5 - The Digital Foundry Tech Review",description:`A contentious release for many, with Naughty Dog remaking a PlayStation 3 classic that already has an impressive PS4 Pro version that runs beautifully on PS5... so what's actually different with The Last of Us Part 1? What we're actually looking at here is a comprehensive revamp of the game's visuals and immersiveness with many intriguing changes, upgrades, revamps and improvements. John Linneman has the full story in an expansive 50-minute edit.

Join the DF Patreon for pristine video downloads, behind the scenes content, early access to DF Retro, early access to DF Direct Weekly and much, much more: https://bit.ly/3jEGjvx

Subscribe for more Digital Foundry: http://bit.ly/DFSubscribe

Want some DF-branded tee-shirts, mugs, hoodies or pullovers? Check out our store: https://bit.ly/2BqRTt0`,thumbnails:{default:{url:"https://i.ytimg.com/vi/0mv0dAwPqCs/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/0mv0dAwPqCs/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/0mv0dAwPqCs/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/0mv0dAwPqCs/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/0mv0dAwPqCs/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Digital Foundry",liveBroadcastContent:"none",publishTime:"2022-08-30T15:48:40Z"}},{kind:"youtube#searchResult",etag:"VAfTwrZSxAE-YCYwQI00aYENM1k",id:{kind:"youtube#video",videoId:"PovgboSu7C8"},snippet:{publishedAt:"2022-08-18T09:10:37Z",channelId:"UCQfKpN66UN8d5Z15gFV9PGQ",title:"House of the Dragon Cast: Real-Life Partners Revealed |⭐ OSSA",description:`House of the Dragon has become one of the most anticipated series since the end of Game of Thrones. In the prequel, the creators will fully concentrate on the history of the Targaryens family, who are about to make the most terrible scandal. In the meantime, everyone is languishing in anticipation of the first episodes of the OSSA has prepared for you a piece of information about the main cast of House of the Dragon, so get ready to find out all about the actors who are going to immerse you in the atmosphere of the Game of Thrones again!

Why didn't fans envision Matt Smith as Prince Daemon, and how did he convince everyone that he was the perfect fit for the hell-raising brother Daemon? How did Emma D'Arcy conquer the creators of the series, Ryan Condal and Miguel Sapochnik, and then take her role as Princess Rhaenyra? What do we already know about King Viserys Targaryen, and what can we tell you about Paddy Considine, who will play him on screen? What else does Paddy Considine (King Viserys Targaryen) do besides acting, and why did his children not know for a long time that their dad was an actor? What do Cersei Lannister and Olivia Cooke's character Alicent Hightower have in common, who was the actress's favorite Game of Thrones character? Why would Harry Potter and Marvel fans be surprised to see Rhys Ifans as Otto Hightower, and what about Rhys' personal life? Why is Eva Best (Rhaenys Velaryon) not really called Eva, and in which films and series can you meet the actress? What was Steve Toussaint (Lord Corlys Velaryon) planning to be before he discovered acting, and why does he hide his personal life? What is known about Fabien Frankel (Ser Criston Cole), and what did Sonoya Mizuno (Mysaria) want to be in her youth?

Find out all about the cast and characters of the new Dragon House series right now in this new OSSA'm video!

Chapters:
00:00 - Intro
00:29 - Paddy Considine as King Viserys Targaryen
01:44 - Olivia Cooke as Alicent Hightower
03:27 - Rhys Ifans as Otto Hightower
04:36 - Eve Best as Princess Rhaenys Velaryon
05:41 - Steve Toussaint as Lord Corlys Velaryon
06:35 - Fabien Frankel as Ser Criston Cole
06:59 - Sonoya Mizuno as Mysaria
07:44 - Emma D’Arcy as Princess Rhaenyra
08:53 - Matt Smith as Prince Daemon

🎁 Join the OSSA'm Squad to get access to perks:
https://www.youtube.com/channel/UCQfKpN66UN8d5Z15gFV9PGQ/join

💛 OSSA on Instagram: https://www.instagram.com/ossa.tv/
💜 OSSA on TikTok: https://www.tiktok.com/@ossa_tv
💙 OSSA on facebook: https://www.facebook.com/OSSA-937878333055503/

⭐OSSA is the best source for entertainment news about the celebrities we love.
⭐Our YouTube channel dishes up celebrity news and gossip on the stars you admire the most. From popular TV hosts to Hollywood golden age actresses, from the royal family members to western movies acting legends.

SUBSCRIBE to our channel to watch more amazing videos about celebs!`,thumbnails:{default:{url:"https://i.ytimg.com/vi/PovgboSu7C8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/PovgboSu7C8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/PovgboSu7C8/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/PovgboSu7C8/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/PovgboSu7C8/maxresdefault.jpg",width:1280,height:720}},channelTitle:"OSSA",liveBroadcastContent:"none",publishTime:"2022-08-18T09:10:37Z"}},{kind:"youtube#searchResult",etag:"UEYlQOEVErT15th40e6jLS7xGU0",id:{kind:"youtube#video",videoId:"afIMsmSssw8"},snippet:{publishedAt:"2022-09-26T17:11:26Z",channelId:"UCGmnsW623G1r-Chmo5RB4Yw",title:"Did I Post This?",description:`BUY TICKETS: https://misfitsboxing.com/
Discord: https://discord.gg/ksi
BUY MY SONG HERE: https://lnk.to/NotOverYet/itunes
Stream / download the remix here: https://lnk.to/NOY-Remix`,thumbnails:{default:{url:"https://i.ytimg.com/vi/afIMsmSssw8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/afIMsmSssw8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/afIMsmSssw8/hqdefault.jpg",width:480,height:360}},channelTitle:"JJ Olatunji",liveBroadcastContent:"none",publishTime:"2022-09-26T17:11:26Z"}},{kind:"youtube#searchResult",etag:"3bBisNgwRfvnd-iRy0woxFWoZ-o",id:{kind:"youtube#video",videoId:"1O7XfVaHz9g"},snippet:{publishedAt:"2022-08-22T00:44:52Z",channelId:"UCLJvwQ-173AlbFt7zvPl-CQ",title:"FINALLY!! HBO Max THE LAST OF US FOOTAGE Reaction!",description:`We finally get a look at Pedro Pascal as the legendary Joel from The Last of Us and I gotta, say...so far he's got me convinced! Bella Ramsey as Ellie though...might need a little more convincing for me but fingers crossed HBO Max does really good job with this video game to series adaptation. We've also got an exciting cast here with Nick Offerman as Bill and Anna Torv as Tess!
____________________

Reaction Gear: https://amzn.to/2QgTwk2 (affiliate)
____________________
OTHER REACTIONS YOU'LL ENJOY!
• Last of Us HBO Cast | Pedro Pascal Livestream: https://www.youtube.com/watch?v=rEZy5v9fyZk
• Black Panther: WAKANDA FOREVER Teaser Reaction: https://youtu.be/t1AjLb0FoTo
• She-Hulk: Attorney At Law 1x1 Reaction: https://youtu.be/1bgIaqeJXzA
• BLACK ADAM Comic Con Sneak Peak: https://youtu.be/S1O2dU2Sfkc
• I AM GROOT Trailer: https://youtu.be/QN7lYTp40OY
• SHAZAM! Fury of the Gods Trailer: https://youtu.be/qW-b1Aeolx8
• John Wick Chapter 4 Trailer: https://youtu.be/zHyjjUFjbqI
• Star Wars Jedi Survivor: https://youtu.be/Fhn6bvnC2mw 
• Ms Marvel 1x1 Reaction: https://youtu.be/iC7Gst7nyfg
• Thor Love & Thunder Trailer Reaction: https://youtu.be/Nb8yiqkfOUg
• She-Hulk Trailer Reaction: https://youtu.be/PIhKALA_eUM
• Mission Impossible 7 Reaction: https://youtu.be/9M2rhufQu2I
• Thor Love and Thunder Teaser Reaction: https://youtu.be/Fx3WDOSxmIw
• Moon Knight 1x5 Reaction: https://youtu.be/3VANJKtLTj8
• Ms Marvel Trailer Reaction: https://youtu.be/W5Qrjbd5JY4
• The Batman Non-Spoiler Review: https://youtu.be/8mU5TEAx6io
• Moon Knight Official Trailer: https://youtu.be/TCmx6zqgP34
• Moon Knight Official Trailer Breakdown: https://youtu.be/tJnUg5WTkV0
 • Oscar Isaac & Ethan Hawke's Reaction to Moon Knight Trailer: https://youtu.be/1dMoF343kNY
• Moon Knight 73 Easter Eggs: https://youtu.be/8F9RvbzRsjs
• Doctor Strange Multiverse of Madness Teaser Breakdown & Easter Eggs: 
https://youtu.be/IHdWkWNbeNo
• Watched DOCTOR STRANGE MULTIVERSE OF MADNESS Trailer in 0.25 Speed: https://youtu.be/5VDauxIJhBY
• DOCTOR STRANGE 2 Scarlet Witch ERASED X-Men & Mutants?! https://youtu.be/q8SW7REkWkE
• Spider-Man Across the Spider-Verse: https://youtu.be/sM-H9u29Vtw
• Andrew & Tobey React to Spider-man No Way Home Trailer 2: https://youtu.be/ZHyi4OagT_Q
• Spider-man No Way Home "Redemption" https://youtu.be/qCbVBfnEU1U
• How Spider-man Far From Home Should Have Ended: https://youtu.be/4Mw7wX7SzBo
• Eternals Movie Premiere Vlog & Non-Spoiler Review: https://youtu.be/iECkKKmDsLo
• Avengers Gag Reel: https://youtu.be/D0QeQLzLlgc
• Venom Pitch Meeting Reaction: https://youtu.be/XEQhPuyLPv8

Trailer Link:
https://www.youtube.com/watch?v=kWsY3DlLdIA

___________________________________________________

SOCIAL MEDIA:
~JABS~
YouTube, Twitter, Instagram: @GETJaby

___________________________________________________

SHORT FILMS PLAYLIST:
https://www.youtube.com/playlist?list=PL34B19BA788E18384

Click here to subscribe and know when the next video drops:
http://www.youtube.com/subscription_center?add_user=jabykoay

Thanks for watching!!!

__________________________________________________

Credit of my favorite movie reviews song:
Highlight Reel Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

Song used during intro:
Acid Jazz Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

Song used during intro:
Your Call High Quality by Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

Song Used During Outro:
Easy Jam Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/

#thelastofus #lastofus #tlou`,thumbnails:{default:{url:"https://i.ytimg.com/vi/1O7XfVaHz9g/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/1O7XfVaHz9g/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/1O7XfVaHz9g/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/1O7XfVaHz9g/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/1O7XfVaHz9g/maxresdefault.jpg",width:1280,height:720}},channelTitle:"GETJaby",liveBroadcastContent:"none",publishTime:"2022-08-22T00:44:52Z"}},{kind:"youtube#searchResult",etag:"-80eGyYlv7aO0oHqItGbeJ3tH_o",id:{kind:"youtube#video",videoId:"0YOl7SLjnpw"},snippet:{publishedAt:"2022-09-09T22:22:08Z",channelId:"UCQzdMyuz0Lf4zo4uGcEujFw",title:"House of the Dragon | S1 EP4: Inside the Episode (HBO)",description:"Ryan Condal, director Clare Kilner, Emily Carey (Alicent Hightower) and more hone in on the motivation behind Daemon’s advances towards Rhaenyra, approaching intimate scenes, and the fractures in Rhaenyra and Alicent's friendship.",thumbnails:{default:{url:"https://i.ytimg.com/vi/0YOl7SLjnpw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/0YOl7SLjnpw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/0YOl7SLjnpw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/0YOl7SLjnpw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/0YOl7SLjnpw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"GameofThrones",liveBroadcastContent:"none",publishTime:"2022-09-09T22:22:08Z"}}],l0={items:n0},i0=[{kind:"youtube#channel",etag:"vXzqU0oVDLdk4SQxVthbMCu9y6s",id:"UCx-KWLTKlB83hDI6UKECtJQ",snippet:{title:"HBO Max",description:"HBO Max is the premium streaming platform that bundles together all of HBO with even more of your favorite movies and TV shows from Warner Bros. Discovery, New Line, DC, CNN, TNT, TBS, truTV, Turner Classic Movies, Cartoon Network, Adult Swim, Crunchyroll, Rooster Teeth, Looney Tunes, and much more. Enjoy all of this, plus an exciting lineup of new original programming with Max Originals, all in one place.",customUrl:"@hbomax",publishedAt:"2019-07-03T14:47:23Z",thumbnails:{default:{url:"https://yt3.ggpht.com/TcXFMFkDeUN8pDqZ-2WShXiG6lXtpoRG2kfRMg3Nd9g947mESyRYqlWtwcoy9FyjiiLVLaTd=s88-c-k-c0x00ffffff-no-rj",width:88,height:88},medium:{url:"https://yt3.ggpht.com/TcXFMFkDeUN8pDqZ-2WShXiG6lXtpoRG2kfRMg3Nd9g947mESyRYqlWtwcoy9FyjiiLVLaTd=s240-c-k-c0x00ffffff-no-rj",width:240,height:240},high:{url:"https://yt3.ggpht.com/TcXFMFkDeUN8pDqZ-2WShXiG6lXtpoRG2kfRMg3Nd9g947mESyRYqlWtwcoy9FyjiiLVLaTd=s800-c-k-c0x00ffffff-no-rj",width:800,height:800}},localized:{title:"HBO Max",description:"HBO Max is the premium streaming platform that bundles together all of HBO with even more of your favorite movies and TV shows from Warner Bros. Discovery, New Line, DC, CNN, TNT, TBS, truTV, Turner Classic Movies, Cartoon Network, Adult Swim, Crunchyroll, Rooster Teeth, Looney Tunes, and much more. Enjoy all of this, plus an exciting lineup of new original programming with Max Originals, all in one place."},country:"US"}}],u0={items:i0},Ls=(t="search",e="")=>{const a="AIzaSyAyLrEMf1crUJYbAUNNFD1W28hAobzDRVs",[n,l]=v.useState(!0),[i,u]=v.useState([]),[o,s]=v.useState(null),r=f=>{switch(f){case"search":return t0.items||[];case"popular":return a0.items||[];case"related":return l0.items||[];case"channel":return u0.items||[];default:return[]}};return v.useEffect(()=>{const f=async()=>{try{l(!0),s(null);let g="";switch(t){case"search":g=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${e}&key=${a}`;break;case"popular":g=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${a}`;break;case"related":g=`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${e}&type=video&order=relevance&maxResults=10&key=${a}`;break;case"channel":g=`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${e}&key=${a}`;break;default:throw new Error(`Invalid search type: ${t}`)}const d=await fetch(g);if(!d.ok)throw new Error(`API Error: ${d.status}`);const p=await d.json();u(p.items||[])}catch(g){console.log("API 호출 오류:",g),console.log(`Fallback to ${t} test data dut to error`),u(r(t))}finally{l(!1)}};if(t==="search"&&!e){l(!1);return}if(t==="channel"&&!e){l(!1);return}if(t==="related"&&!e){l(!1);return}f()},[t,e,a]),{videos:i,loading:n,error:o}},yc=()=>{const{videos:t,loading:e,error:a}=Ls("popular");return e?S.jsx("div",{className:"flex justify-center items-center h-64 text-gray-400",children:"로딩중..."}):a?S.jsxs("div",{className:"flex justify-center items-center h-64 text-red-400",children:["에러가 발생했습니다: ",a]}):S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsx("h1",{className:"text-2xl font-medium text-white mb-6",children:"추천 동영상"}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:S.jsx(xf,{items:t})})]})},o0=()=>{const[t,e]=v.useState("");return S.jsx(S.Fragment,{children:S.jsxs("header",{className:"flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-700",children:[S.jsx("div",{className:"flex items-center space-x-6",children:S.jsxs(en,{to:"/",className:"flex items-center space-x-2",children:[S.jsx("div",{className:"w-8 h-8 bg-red-600 rounded flex items-center justify-center",children:S.jsx("span",{className:"text-white font-bold text-sm",children:"YT"})}),S.jsx("span",{className:"text-white text-xl font-medium",children:"YouTube"})]})}),S.jsx("div",{className:"flex items-center max-w-2xl flex-1 mx-8",children:S.jsxs("div",{className:"flex w-full",children:[S.jsx("input",{className:"flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500",type:"text",value:t,onChange:a=>{e(a.target.value)},placeholder:"검색"}),S.jsx(en,{to:`/Videos/${t}`,className:"px-6 py-2 bg-gray-700 border border-gray-600 border-l-0 rounded-r-full hover:bg-gray-600 transition-colors",children:S.jsx("svg",{className:"w-5 h-5 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})})]})}),S.jsx("div",{className:"w-32"})]})})},s0=()=>{const{keyword:t}=Ef(),{videos:e,loading:a,error:n}=Ls("search",t);return a?S.jsx("div",{className:"flex justify-center items-center h-64 text-gray-400",children:"로딩중..."}):n?S.jsxs("div",{className:"flex justify-center items-center h-64 text-red-400",children:["에러가 발생했습니다: ",n]}):S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("h2",{className:"text-2xl font-medium text-white mb-6",children:["'",t,"' 검색 결과"]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:S.jsx(xf,{items:e})})]})},r0=()=>{var u,o;const{id:t}=Ef(),a=(u=Fe().state)==null?void 0:u.videoData,{videos:n,loading:l,error:i}=Ls("related",(o=a==null?void 0:a.snippet)==null?void 0:o.channelId);return console.log("Video ID:",t),console.log("Video Data:",a),console.log("Related Videos:",n),S.jsx("div",{className:"max-w-7xl mx-auto",children:S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[S.jsxs("div",{className:"lg:col-span-2",children:[S.jsx("div",{className:"aspect-video bg-black rounded-lg mb-4 overflow-hidden",children:S.jsx("iframe",{src:`https://www.youtube.com/embed/${t}?autoplay=1`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"w-full h-full"})}),a&&S.jsxs("div",{className:"space-y-4",children:[S.jsx("h1",{className:"text-xl font-medium text-white",children:a.snippet.title}),S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center space-x-4",children:[S.jsx("div",{className:"w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center",children:S.jsx("span",{className:"text-white text-sm font-medium",children:a.snippet.channelTitle.charAt(0)})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-white font-medium",children:a.snippet.channelTitle}),S.jsx("p",{className:"text-gray-400 text-sm",children:new Date(a.snippet.publishedAt).toLocaleDateString()})]})]}),S.jsxs("div",{className:"flex space-x-2",children:[S.jsx("button",{className:"px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors",children:"👍 좋아요"}),S.jsx("button",{className:"px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors",children:"공유"})]})]}),S.jsx("div",{className:"bg-gray-800 rounded-lg p-4",children:S.jsx("p",{className:"text-gray-300 text-sm whitespace-pre-wrap",children:a.snippet.description||"설명이 없습니다."})})]})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsx("h2",{className:"text-lg font-medium text-white",children:"관련 동영상"}),l&&S.jsx("div",{className:"text-gray-400 text-sm",children:"관련 동영상을 불러오는 중..."}),i&&S.jsx("div",{className:"text-red-400 text-sm",children:"관련 동영상을 불러올 수 없습니다."}),!l&&!i&&n.length>0&&S.jsx("div",{className:"space-y-3",children:S.jsx(c0,{items:n})})]})]})})},c0=({items:t})=>{const e=n=>n.id&&typeof n.id=="object"&&n.id.videoId?n.id.videoId:n.id&&typeof n.id=="string"?n.id:"unknown",a=n=>{const l=new Date(n),u=Math.abs(new Date-l),o=Math.floor(u/(1e3*60*60*24));return o===0?"오늘":o===1?"1일 전":o<7?`${o}일 전`:o<30?`${Math.floor(o/7)}주 전`:o<365?`${Math.floor(o/30)}개월 전`:`${Math.floor(o/365)}년 전`};return S.jsx(S.Fragment,{children:t.slice(0,20).map((n,l)=>{var i;return S.jsx(en,{to:`/Videos/watch/${e(n)}`,state:{videoData:n},className:"block",children:S.jsxs("div",{className:"flex space-x-3 hover:bg-gray-800 p-2 rounded-lg transition-colors cursor-pointer",children:[S.jsx("div",{className:"flex-shrink-0",children:S.jsx("img",{src:((i=n.snippet.thumbnails.medium)==null?void 0:i.url)||n.snippet.thumbnails.high.url,alt:n.snippet.title,className:"w-40 h-24 object-cover rounded-lg"})}),S.jsxs("div",{className:"flex-1 min-w-0",children:[S.jsx("h3",{className:"text-white text-sm font-medium line-clamp-2 mb-1",children:n.snippet.title}),S.jsx("p",{className:"text-gray-400 text-xs mb-1",children:n.snippet.channelTitle}),S.jsx("p",{className:"text-gray-400 text-xs",children:a(n.snippet.publishedAt)})]})]})},l)})})};function h0(){return S.jsx("div",{className:"min-h-screen bg-gray-900",children:S.jsxs(Iy,{basename:"/youtube",children:[S.jsx(o0,{}),S.jsx("main",{className:"p-6",children:S.jsxs(wy,{children:[S.jsx(Cn,{path:"/",element:S.jsx(yc,{})}),S.jsx(Cn,{path:"/Videos",element:S.jsx(yc,{})}),S.jsx(Cn,{path:"/Videos/:keyword",element:S.jsx(s0,{})}),S.jsx(Cn,{path:"/Videos/watch/:id",element:S.jsx(r0,{})})]})})]})})}Dp.createRoot(document.getElementById("root")).render(S.jsx(h0,{}));
