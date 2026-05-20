(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function ly(){if(a_)return Vo;a_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var s_;function cy(){return s_||(s_=1,vh.exports=ly()),vh.exports}var vt=cy(),xh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function uy(){if(r_)return he;r_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(z,$,gt){this.props=z,this.context=$,this.refs=M,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=x.prototype;function I(z,$,gt){this.props=z,this.context=$,this.refs=M,this.updater=gt||b}var L=I.prototype=new C;L.constructor=I,w(L,x.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function P(){}var N={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(z,$,gt){var Rt=gt.ref;return{$$typeof:o,type:z,key:$,ref:Rt!==void 0?Rt:null,props:gt}}function Z(z,$){return U(z.type,$,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function j(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(gt){return $[gt]})}var ot=/\/+/g;function ct(z,$){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):$.toString(36)}function X(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function($){z.status==="pending"&&(z.status="fulfilled",z.value=$)},function($){z.status==="pending"&&(z.status="rejected",z.reason=$)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,$,gt,Rt,Lt){var st=typeof z;(st==="undefined"||st==="boolean")&&(z=null);var St=!1;if(z===null)St=!0;else switch(st){case"bigint":case"string":case"number":St=!0;break;case"object":switch(z.$$typeof){case o:case t:St=!0;break;case S:return St=z._init,O(St(z._payload),$,gt,Rt,Lt)}}if(St)return Lt=Lt(z),St=Rt===""?"."+ct(z,0):Rt,H(Lt)?(gt="",St!=null&&(gt=St.replace(ot,"$&/")+"/"),O(Lt,$,gt,"",function(se){return se})):Lt!=null&&(G(Lt)&&(Lt=Z(Lt,gt+(Lt.key==null||z&&z.key===Lt.key?"":(""+Lt.key).replace(ot,"$&/")+"/")+St)),$.push(Lt)),1;St=0;var bt=Rt===""?".":Rt+":";if(H(z))for(var Ht=0;Ht<z.length;Ht++)Rt=z[Ht],st=bt+ct(Rt,Ht),St+=O(Rt,$,gt,st,Lt);else if(Ht=y(z),typeof Ht=="function")for(z=Ht.call(z),Ht=0;!(Rt=z.next()).done;)Rt=Rt.value,st=bt+ct(Rt,Ht++),St+=O(Rt,$,gt,st,Lt);else if(st==="object"){if(typeof z.then=="function")return O(X(z),$,gt,Rt,Lt);throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(z,$,gt){if(z==null)return z;var Rt=[],Lt=0;return O(z,Rt,"","",function(st){return $.call(gt,st,Lt++)}),Rt}function rt(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(gt){(z._status===0||z._status===-1)&&(z._status=1,z._result=gt)},function(gt){(z._status===0||z._status===-1)&&(z._status=2,z._result=gt)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var pt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Mt={map:B,forEach:function(z,$,gt){B(z,function(){$.apply(this,arguments)},gt)},count:function(z){var $=0;return B(z,function(){$++}),$},toArray:function(z){return B(z,function($){return $})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return he.Activity=v,he.Children=Mt,he.Component=x,he.Fragment=i,he.Profiler=l,he.PureComponent=I,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,he.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},he.cache=function(z){return function(){return z.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(z,$,gt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Rt=w({},z.props),Lt=z.key;if($!=null)for(st in $.key!==void 0&&(Lt=""+$.key),$)!T.call($,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&$.ref===void 0||(Rt[st]=$[st]);var st=arguments.length-2;if(st===1)Rt.children=gt;else if(1<st){for(var St=Array(st),bt=0;bt<st;bt++)St[bt]=arguments[bt+2];Rt.children=St}return U(z.type,Lt,Rt)},he.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},he.createElement=function(z,$,gt){var Rt,Lt={},st=null;if($!=null)for(Rt in $.key!==void 0&&(st=""+$.key),$)T.call($,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Lt[Rt]=$[Rt]);var St=arguments.length-2;if(St===1)Lt.children=gt;else if(1<St){for(var bt=Array(St),Ht=0;Ht<St;Ht++)bt[Ht]=arguments[Ht+2];Lt.children=bt}if(z&&z.defaultProps)for(Rt in St=z.defaultProps,St)Lt[Rt]===void 0&&(Lt[Rt]=St[Rt]);return U(z,st,Lt)},he.createRef=function(){return{current:null}},he.forwardRef=function(z){return{$$typeof:p,render:z}},he.isValidElement=G,he.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:rt}},he.memo=function(z,$){return{$$typeof:d,type:z,compare:$===void 0?null:$}},he.startTransition=function(z){var $=N.T,gt={};N.T=gt;try{var Rt=z(),Lt=N.S;Lt!==null&&Lt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(P,pt)}catch(st){pt(st)}finally{$!==null&&gt.types!==null&&($.types=gt.types),N.T=$}},he.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},he.use=function(z){return N.H.use(z)},he.useActionState=function(z,$,gt){return N.H.useActionState(z,$,gt)},he.useCallback=function(z,$){return N.H.useCallback(z,$)},he.useContext=function(z){return N.H.useContext(z)},he.useDebugValue=function(){},he.useDeferredValue=function(z,$){return N.H.useDeferredValue(z,$)},he.useEffect=function(z,$){return N.H.useEffect(z,$)},he.useEffectEvent=function(z){return N.H.useEffectEvent(z)},he.useId=function(){return N.H.useId()},he.useImperativeHandle=function(z,$,gt){return N.H.useImperativeHandle(z,$,gt)},he.useInsertionEffect=function(z,$){return N.H.useInsertionEffect(z,$)},he.useLayoutEffect=function(z,$){return N.H.useLayoutEffect(z,$)},he.useMemo=function(z,$){return N.H.useMemo(z,$)},he.useOptimistic=function(z,$){return N.H.useOptimistic(z,$)},he.useReducer=function(z,$,gt){return N.H.useReducer(z,$,gt)},he.useRef=function(z){return N.H.useRef(z)},he.useState=function(z){return N.H.useState(z)},he.useSyncExternalStore=function(z,$,gt){return N.H.useSyncExternalStore(z,$,gt)},he.useTransition=function(){return N.H.useTransition()},he.version="19.2.6",he}var o_;function np(){return o_||(o_=1,xh.exports=uy()),xh.exports}var Xe=np(),Sh={exports:{}},ko={},yh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function fy(){return l_||(l_=1,(function(o){function t(O,B){var rt=O.length;O.push(B);t:for(;0<rt;){var pt=rt-1>>>1,Mt=O[pt];if(0<l(Mt,B))O[pt]=B,O[rt]=Mt,rt=pt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],rt=O.pop();if(rt!==B){O[0]=rt;t:for(var pt=0,Mt=O.length,z=Mt>>>1;pt<z;){var $=2*(pt+1)-1,gt=O[$],Rt=$+1,Lt=O[Rt];if(0>l(gt,rt))Rt<Mt&&0>l(Lt,gt)?(O[pt]=Lt,O[Rt]=rt,pt=Rt):(O[pt]=gt,O[$]=rt,pt=$);else if(Rt<Mt&&0>l(Lt,rt))O[pt]=Lt,O[Rt]=rt,pt=Rt;else break t}}return B}function l(O,B){var rt=O.sortIndex-B.sortIndex;return rt!==0?rt:O.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],S=1,v=null,g=3,y=!1,b=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=O)s(d),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(d)}}function H(O){if(w=!1,L(O),!b)if(i(m)!==null)b=!0,P||(P=!0,j());else{var B=i(d);B!==null&&X(H,B.startTime-O)}}var P=!1,N=-1,T=5,U=-1;function Z(){return M?!0:!(o.unstable_now()-U<T)}function G(){if(M=!1,P){var O=o.unstable_now();U=O;var B=!0;try{t:{b=!1,w&&(w=!1,C(N),N=-1),y=!0;var rt=g;try{e:{for(L(O),v=i(m);v!==null&&!(v.expirationTime>O&&Z());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var Mt=pt(v.expirationTime<=O);if(O=o.unstable_now(),typeof Mt=="function"){v.callback=Mt,L(O),B=!0;break e}v===i(m)&&s(m),L(O)}else s(m);v=i(m)}if(v!==null)B=!0;else{var z=i(d);z!==null&&X(H,z.startTime-O),B=!1}}break t}finally{v=null,g=rt,y=!1}B=void 0}}finally{B?j():P=!1}}}var j;if(typeof I=="function")j=function(){I(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ct=ot.port2;ot.port1.onmessage=G,j=function(){ct.postMessage(null)}}else j=function(){x(G,0)};function X(O,B){N=x(function(){O(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var rt=g;g=B;try{return O()}finally{g=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var rt=g;g=O;try{return B()}finally{g=rt}},o.unstable_scheduleCallback=function(O,B,rt){var pt=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?pt+rt:pt):rt=pt,O){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=rt+Mt,O={id:S++,callback:B,priorityLevel:O,startTime:rt,expirationTime:Mt,sortIndex:-1},rt>pt?(O.sortIndex=rt,t(d,O),i(m)===null&&O===i(d)&&(w?(C(N),N=-1):w=!0,X(H,rt-pt))):(O.sortIndex=Mt,t(m,O),b||y||(b=!0,P||(P=!0,j()))),O},o.unstable_shouldYield=Z,o.unstable_wrapCallback=function(O){var B=g;return function(){var rt=g;g=B;try{return O.apply(this,arguments)}finally{g=rt}}}})(Mh)),Mh}var c_;function hy(){return c_||(c_=1,yh.exports=fy()),yh.exports}var Eh={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function dy(){if(u_)return Qn;u_=1;var o=np();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)d+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qn.createPortal=function(m,d){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,S)},Qn.flushSync=function(m){var d=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=S,s.d.f()}},Qn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Qn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Qn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var S=d.as,v=p(S,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;S==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):S==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Qn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var S=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Qn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var S=d.as,v=p(S,d.crossOrigin);s.d.L(m,S,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Qn.preloadModule=function(m,d){if(typeof m=="string")if(d){var S=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Qn.requestFormReset=function(m){s.d.r(m)},Qn.unstable_batchedUpdates=function(m,d){return m(d)},Qn.useFormState=function(m,d,S){return h.H.useFormState(m,d,S)},Qn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Qn.version="19.2.6",Qn}var f_;function py(){if(f_)return Eh.exports;f_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Eh.exports=dy(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function my(){if(h_)return ko;h_=1;var o=hy(),t=np(),i=py();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),I=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case I:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var X=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},pt=[],Mt=-1;function z(e){return{current:e}}function $(e){0>Mt||(e.current=pt[Mt],pt[Mt]=null,Mt--)}function gt(e,n){Mt++,pt[Mt]=e.current,e.current=n}var Rt=z(null),Lt=z(null),st=z(null),St=z(null);function bt(e,n){switch(gt(st,n),gt(Lt,e),gt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Rt),gt(Rt,e)}function Ht(){$(Rt),$(Lt),$(st)}function se(e){e.memoizedState!==null&&gt(St,e);var n=Rt.current,a=wg(n,e.type);n!==a&&(gt(Lt,e),gt(Rt,a))}function ne(e){Lt.current===e&&($(Rt),$(Lt)),St.current===e&&($(St),Bo._currentValue=rt)}var We,ge;function Se(e){if(We===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+ge}var we=!1;function ue(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var at=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){at=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var F=_.split(`
`),it=R.split(`
`);for(u=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(r===F.length||u===it.length)for(r=F.length-1,u=it.length-1;1<=r&&0<=u&&F[r]!==it[u];)u--;for(;1<=r&&0<=u;r--,u--)if(F[r]!==it[u]){if(r!==1||u!==1)do if(r--,u--,0>u||F[r]!==it[u]){var dt=`
`+F[r].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function vn(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return Se("Activity");default:return""}}function tn(e){try{var n="",a=null;do n+=vn(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var An=Object.prototype.hasOwnProperty,q=o.unstable_scheduleCallback,un=o.unstable_cancelCallback,pe=o.unstable_shouldYield,Fe=o.unstable_requestPaint,wt=o.unstable_now,cn=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,mt=o.unstable_LowPriority,Et=o.unstable_IdlePriority,Ct=o.log,Ot=o.unstable_setDisableYieldValue,ut=null,ft=null;function Pt(e){if(typeof Ct=="function"&&Ot(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ut,e)}catch{}}var It=Math.clz32?Math.clz32:Qt,Ut=Math.log,Dt=Math.LN2;function Qt(e){return e>>>=0,e===0?32:31-(Ut(e)/Dt|0)|0}var le=256,_e=262144,V=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=At(r):(_&=R,_!==0?u=At(_):a||(a=R&~e,a!==0&&(u=At(a))))):(R=r&~f,R!==0?u=At(R):_!==0?u=At(_):a||(a=r&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function jt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ie(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rn(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,F=e.expirationTimes,it=e.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-It(a),xt=1<<dt;R[dt]=0,F[dt]=-1;var at=it[dt];if(at!==null)for(it[dt]=null,dt=0;dt<at.length;dt++){var lt=at[dt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}r!==0&&Oe(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Oe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-It(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function si(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-It(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Hn(e,n){var a=n&-n;return a=(a&42)!==0?1:ta(a),(a&(e.suspendedLanes|n))!==0?0:a}function ta(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qt(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Qg(e.type))}function re(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Kt=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Kt,te="__reactProps$"+Kt,Pe="__reactContainer$"+Kt,Ge="__reactEvents$"+Kt,Te="__reactListeners$"+Kt,en="__reactHandles$"+Kt,wi="__reactResources$"+Kt,xn="__reactMarker$"+Kt;function Nn(e){delete e[Yt],delete e[te],delete e[Ge],delete e[Te],delete e[en]}function Vn(e){var n=e[Yt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pe]||a[Yt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Pg(e);e!==null;){if(a=e[Yt])return a;e=Pg(e)}return n}e=a,a=e.parentNode}return null}function Zn(e){if(e=e[Yt]||e[Pe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ri(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function En(e){var n=e[wi];return n||(n=e[wi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(e){e[xn]=!0}var ei=new Set,A={};function W(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(A[e]=n,e=0;e<n.length;e++)ei.add(n[e])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},Bt={};function Xt(e){return An.call(Bt,e)?!0:An.call(tt,e)?!1:et.test(e)?Bt[e]=!0:(tt[e]=!0,!1)}function zt(e,n,a){if(Xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Vt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ee(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ie(e){if(!e._valueTracker){var n=fe(e)?"checked":"value";e._valueTracker=ee(e,n,""+e[n])}}function dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function on(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qe=/[\n"\\]/g;function Ye(e){return e.replace(qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function kt(e,n,a,r,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?ye(e,_,Jt(n)):a!=null?ye(e,_,Jt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Jt(R):e.removeAttribute("name")}function Kn(e,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ie(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ie(e)}function ye(e,n,a){n==="number"&&on(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ln(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function mi(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function Hi(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(X(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ie(e)}function gi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var je=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||je.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&pn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&pn(e,f,n[f])}function ke(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Xa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var er=null,nr=null;function Ap(e){var n=Zn(e);if(n&&(e=n.stateNode)){var a=e[te]||null;t:switch(e=n.stateNode,n.type){case"input":if(kt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[te]||null;if(!u)throw Error(s(90));kt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&dn(r)}break t;case"textarea":mi(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ln(e,!!a.multiple,n,!1)}}}var gu=!1;function Rp(e,n,a){if(gu)return e(n,a);gu=!0;try{var r=e(n);return r}finally{if(gu=!1,(er!==null||nr!==null)&&(Zl(),er&&(n=er,e=nr,nr=er=null,Ap(n),e)))for(n=0;n<e.length;n++)Ap(e[n])}}function to(e,n){var a=e.stateNode;if(a===null)return null;var r=a[te]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(va)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){_u=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{_u=!1}var Wa=null,vu=null,cl=null;function wp(){if(cl)return cl;var e,n=vu,a=n.length,r,u="value"in Wa?Wa.value:Wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return cl=u.slice(e,1<r?1-r:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Cp(){return!1}function oi(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:Cp,this.isPropagationStopped=Cp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=oi(Ts),no=v({},Ts,{view:0,detail:0}),rx=oi(no),xu,Su,io,dl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(xu=e.screenX-io.screenX,Su=e.screenY-io.screenY):Su=xu=0,io=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Dp=oi(dl),ox=v({},dl,{dataTransfer:0}),lx=oi(ox),cx=v({},no,{relatedTarget:0}),yu=oi(cx),ux=v({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=oi(ux),hx=v({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=oi(hx),px=v({},Ts,{data:0}),Up=oi(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_x[e])?!!n[e]:!1}function Mu(){return vx}var xx=v({},no,{key:function(e){if(e.key){var n=mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sx=oi(xx),yx=v({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=oi(yx),Mx=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Ex=oi(Mx),bx=v({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=oi(bx),Ax=v({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=oi(Ax),wx=v({},Ts,{newState:0,oldState:0}),Cx=oi(wx),Dx=[9,13,27,32],Eu=va&&"CompositionEvent"in window,ao=null;va&&"documentMode"in document&&(ao=document.documentMode);var Ux=va&&"TextEvent"in window&&!ao,Lp=va&&(!Eu||ao&&8<ao&&11>=ao),Op=" ",Pp=!1;function Ip(e,n){switch(e){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function Nx(e,n){switch(e){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Pp=!0,Op);case"textInput":return e=n.data,e===Op&&Pp?null:e;default:return null}}function Lx(e,n){if(ir)return e==="compositionend"||!Eu&&Ip(e,n)?(e=wp(),cl=vu=Wa=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ox[e.type]:n==="textarea"}function Fp(e,n,a,r){er?nr?nr.push(r):nr=[r]:er=r,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var so=null,ro=null;function Px(e){yg(e,0)}function pl(e){var n=ri(e);if(dn(n))return e}function Gp(e,n){if(e==="change")return n}var Hp=!1;if(va){var bu;if(va){var Tu="oninput"in document;if(!Tu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Tu=typeof Vp.oninput=="function"}bu=Tu}else bu=!1;Hp=bu&&(!document.documentMode||9<document.documentMode)}function kp(){so&&(so.detachEvent("onpropertychange",Xp),ro=so=null)}function Xp(e){if(e.propertyName==="value"&&pl(ro)){var n=[];Fp(n,ro,e,mu(e)),Rp(Px,n)}}function Ix(e,n,a){e==="focusin"?(kp(),so=n,ro=a,so.attachEvent("onpropertychange",Xp)):e==="focusout"&&kp()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(ro)}function Bx(e,n){if(e==="click")return pl(n)}function Fx(e,n){if(e==="input"||e==="change")return pl(n)}function Gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _i=typeof Object.is=="function"?Object.is:Gx;function oo(e,n){if(_i(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!An.call(n,u)||!_i(e[u],n[u]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,n){var a=Wp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wp(a)}}function Yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=on(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=on(e.document)}return n}function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Hx=va&&"documentMode"in document&&11>=document.documentMode,ar=null,Ru=null,lo=null,wu=!1;function Zp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||ar==null||ar!==on(r)||(r=ar,"selectionStart"in r&&Au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&oo(lo,r)||(lo=r,r=nc(Ru,"onSelect"),0<r.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ar)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var sr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Cu={},Kp={};va&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Rs(e){if(Cu[e])return Cu[e];if(!sr[e])return e;var n=sr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return Cu[e]=n[a];return e}var Qp=Rs("animationend"),Jp=Rs("animationiteration"),$p=Rs("animationstart"),Vx=Rs("transitionrun"),kx=Rs("transitionstart"),Xx=Rs("transitioncancel"),tm=Rs("transitionend"),em=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function ki(e,n){em.set(e,n),W(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ci=[],rr=0,Uu=0;function gl(){for(var e=rr,n=Uu=rr=0;n<e;){var a=Ci[n];Ci[n++]=null;var r=Ci[n];Ci[n++]=null;var u=Ci[n];Ci[n++]=null;var f=Ci[n];if(Ci[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&nm(a,u,f)}}function _l(e,n,a,r){Ci[rr++]=e,Ci[rr++]=n,Ci[rr++]=a,Ci[rr++]=r,Uu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Nu(e,n,a,r){return _l(e,n,a,r),vl(e)}function ws(e,n){return _l(e,null,null,n),vl(e)}function nm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Uo)throw Uo=0,Vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var or={};function Wx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,n,a,r){return new Wx(e,n,a,r)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,n){var a=e.alternate;return a===null?(a=vi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function im(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")Lu(e)&&(_=1);else if(typeof e=="string")_=KS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=vi(31,a,n,u),e.elementType=U,e.lanes=f,e;case w:return Cs(a.children,u,f,n);case M:_=8,u|=24;break;case x:return e=vi(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case H:return e=vi(13,a,n,u),e.elementType=H,e.lanes=f,e;case P:return e=vi(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:_=10;break t;case C:_=9;break t;case L:_=11;break t;case N:_=14;break t;case T:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=vi(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Cs(e,n,a,r){return e=vi(7,e,r,n),e.lanes=a,e}function Ou(e,n,a){return e=vi(6,e,null,n),e.lanes=a,e}function am(e){var n=vi(18,null,null,0);return n.stateNode=e,n}function Pu(e,n,a){return n=vi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var sm=new WeakMap;function Di(e,n){if(typeof e=="object"&&e!==null){var a=sm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:tn(n)},sm.set(e,n),n)}return{value:e,source:n,stack:tn(n)}}var lr=[],cr=0,Sl=null,co=0,Ui=[],Ni=0,qa=null,na=1,ia="";function Sa(e,n){lr[cr++]=co,lr[cr++]=Sl,Sl=e,co=n}function rm(e,n,a){Ui[Ni++]=na,Ui[Ni++]=ia,Ui[Ni++]=qa,qa=e;var r=na;e=ia;var u=32-It(r)-1;r&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,na=1<<32-It(n)+u|a<<u|r,ia=f+e}else na=1<<f|a<<u|r,ia=e}function Iu(e){e.return!==null&&(Sa(e,1),rm(e,1,0))}function zu(e){for(;e===Sl;)Sl=lr[--cr],lr[cr]=null,co=lr[--cr],lr[cr]=null;for(;e===qa;)qa=Ui[--Ni],Ui[Ni]=null,ia=Ui[--Ni],Ui[Ni]=null,na=Ui[--Ni],Ui[Ni]=null}function om(e,n){Ui[Ni++]=na,Ui[Ni++]=ia,Ui[Ni++]=qa,na=n.id,ia=n.overflow,qa=e}var kn=null,fn=null,Ce=!1,Ya=null,Li=!1,Bu=Error(s(519));function ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(Di(n,e)),Bu}function lm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Yt]=e,n[te]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Ee(Lo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Kn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Hi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Tg(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=_a),n=!0):n=!1,n||ja(e,!0)}function cm(e){for(kn=e.return;kn;)switch(kn.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:kn=kn.return}}function ur(e){if(e!==kn)return!1;if(!Ce)return cm(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&fn&&ja(e),cm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));fn=Og(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));fn=Og(e)}else n===27?(n=fn,ls(e.type)?(e=lh,lh=null,fn=e):fn=n):fn=kn?Pi(e.stateNode.nextSibling):null;return!0}function Ds(){fn=kn=null,Ce=!1}function Fu(){var e=Ya;return e!==null&&(fi===null?fi=e:fi.push.apply(fi,e),Ya=null),e}function uo(e){Ya===null?Ya=[e]:Ya.push(e)}var Gu=z(null),Us=null,ya=null;function Za(e,n,a){gt(Gu,n._currentValue),n._currentValue=a}function Ma(e){e._currentValue=Gu.current,$(Gu)}function Hu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Vu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Hu(f.return,a,e),r||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Hu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function fr(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;_i(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===St.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Vu(n,e,a,r),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!_i(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Us=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xn(e){return um(Us,e)}function Ml(e,n){return Us===null&&Ns(e),um(e,n)}function um(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(s(308));ya=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ya=ya.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Yx=o.unstable_scheduleCallback,jx=o.unstable_NormalPriority,Rn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new qx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&Yx(jx,function(){e.controller.abort()})}var ho=null,Xu=0,hr=0,dr=null;function Zx(e,n){if(ho===null){var a=ho=[];Xu=0,hr=jf(),dr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Xu++,n.then(fm,fm),n}function fm(){if(--Xu===0&&ho!==null){dr!==null&&(dr.status="fulfilled");var e=ho;ho=null,hr=0,dr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Kx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var hm=O.S;O.S=function(e,n){Z0=wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zx(e,n),hm!==null&&hm(e,n)};var Ls=z(null);function Wu(){var e=Ls.current;return e!==null?e:ln.pooledCache}function El(e,n){n===null?gt(Ls,Ls.current):gt(Ls,n.pool)}function dm(){var e=Wu();return e===null?null:{parent:Rn._currentValue,pool:e}}var pr=Error(s(460)),qu=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_a,_a),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e;default:if(typeof n.status=="string")n.then(_a,_a);else{if(e=ln,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e}throw Ps=n,pr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,pr):a}}var Ps=null;function gm(){if(Ps===null)throw Error(s(459));var e=Ps;return Ps=null,e}function _m(e){if(e===pr||e===bl)throw Error(s(483))}var mr=null,po=0;function Al(e){var n=po;return po+=1,mr===null&&(mr=[]),mm(mr,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vm(e){function n(Q,k){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[k],Q.flags|=16):nt.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function r(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=xa(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<k?(Q.flags|=67108866,k):nt):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function _(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,k,nt,_t){return k===null||k.tag!==6?(k=Ou(nt,Q.mode,_t),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function F(Q,k,nt,_t){var ae=nt.type;return ae===w?dt(Q,k,nt.props.children,_t,nt.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&Os(ae)===k.type)?(k=u(k,nt.props),mo(k,nt),k.return=Q,k):(k=xl(nt.type,nt.key,nt.props,null,Q.mode,_t),mo(k,nt),k.return=Q,k)}function it(Q,k,nt,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Pu(nt,Q.mode,_t),k.return=Q,k):(k=u(k,nt.children||[]),k.return=Q,k)}function dt(Q,k,nt,_t,ae){return k===null||k.tag!==7?(k=Cs(nt,Q.mode,_t,ae),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function xt(Q,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ou(""+k,Q.mode,nt),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return nt=xl(k.type,k.key,k.props,null,Q.mode,nt),mo(nt,k),nt.return=Q,nt;case b:return k=Pu(k,Q.mode,nt),k.return=Q,k;case T:return k=Os(k),xt(Q,k,nt)}if(X(k)||j(k))return k=Cs(k,Q.mode,nt,null),k.return=Q,k;if(typeof k.then=="function")return xt(Q,Al(k),nt);if(k.$$typeof===I)return xt(Q,Ml(Q,k),nt);Rl(Q,k)}return null}function at(Q,k,nt,_t){var ae=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ae!==null?null:R(Q,k,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===ae?F(Q,k,nt,_t):null;case b:return nt.key===ae?it(Q,k,nt,_t):null;case T:return nt=Os(nt),at(Q,k,nt,_t)}if(X(nt)||j(nt))return ae!==null?null:dt(Q,k,nt,_t,null);if(typeof nt.then=="function")return at(Q,k,Al(nt),_t);if(nt.$$typeof===I)return at(Q,k,Ml(Q,nt),_t);Rl(Q,nt)}return null}function lt(Q,k,nt,_t,ae){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(nt)||null,R(k,Q,""+_t,ae);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?nt:_t.key)||null,F(k,Q,_t,ae);case b:return Q=Q.get(_t.key===null?nt:_t.key)||null,it(k,Q,_t,ae);case T:return _t=Os(_t),lt(Q,k,nt,_t,ae)}if(X(_t)||j(_t))return Q=Q.get(nt)||null,dt(k,Q,_t,ae,null);if(typeof _t.then=="function")return lt(Q,k,nt,Al(_t),ae);if(_t.$$typeof===I)return lt(Q,k,nt,Ml(k,_t),ae);Rl(k,_t)}return null}function Zt(Q,k,nt,_t){for(var ae=null,ze=null,$t=k,ve=k=0,Re=null;$t!==null&&ve<nt.length;ve++){$t.index>ve?(Re=$t,$t=null):Re=$t.sibling;var Be=at(Q,$t,nt[ve],_t);if(Be===null){$t===null&&($t=Re);break}e&&$t&&Be.alternate===null&&n(Q,$t),k=f(Be,k,ve),ze===null?ae=Be:ze.sibling=Be,ze=Be,$t=Re}if(ve===nt.length)return a(Q,$t),Ce&&Sa(Q,ve),ae;if($t===null){for(;ve<nt.length;ve++)$t=xt(Q,nt[ve],_t),$t!==null&&(k=f($t,k,ve),ze===null?ae=$t:ze.sibling=$t,ze=$t);return Ce&&Sa(Q,ve),ae}for($t=r($t);ve<nt.length;ve++)Re=lt($t,Q,ve,nt[ve],_t),Re!==null&&(e&&Re.alternate!==null&&$t.delete(Re.key===null?ve:Re.key),k=f(Re,k,ve),ze===null?ae=Re:ze.sibling=Re,ze=Re);return e&&$t.forEach(function(ds){return n(Q,ds)}),Ce&&Sa(Q,ve),ae}function oe(Q,k,nt,_t){if(nt==null)throw Error(s(151));for(var ae=null,ze=null,$t=k,ve=k=0,Re=null,Be=nt.next();$t!==null&&!Be.done;ve++,Be=nt.next()){$t.index>ve?(Re=$t,$t=null):Re=$t.sibling;var ds=at(Q,$t,Be.value,_t);if(ds===null){$t===null&&($t=Re);break}e&&$t&&ds.alternate===null&&n(Q,$t),k=f(ds,k,ve),ze===null?ae=ds:ze.sibling=ds,ze=ds,$t=Re}if(Be.done)return a(Q,$t),Ce&&Sa(Q,ve),ae;if($t===null){for(;!Be.done;ve++,Be=nt.next())Be=xt(Q,Be.value,_t),Be!==null&&(k=f(Be,k,ve),ze===null?ae=Be:ze.sibling=Be,ze=Be);return Ce&&Sa(Q,ve),ae}for($t=r($t);!Be.done;ve++,Be=nt.next())Be=lt($t,Q,ve,Be.value,_t),Be!==null&&(e&&Be.alternate!==null&&$t.delete(Be.key===null?ve:Be.key),k=f(Be,k,ve),ze===null?ae=Be:ze.sibling=Be,ze=Be);return e&&$t.forEach(function(oy){return n(Q,oy)}),Ce&&Sa(Q,ve),ae}function sn(Q,k,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var ae=nt.key;k!==null;){if(k.key===ae){if(ae=nt.type,ae===w){if(k.tag===7){a(Q,k.sibling),_t=u(k,nt.props.children),_t.return=Q,Q=_t;break t}}else if(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&Os(ae)===k.type){a(Q,k.sibling),_t=u(k,nt.props),mo(_t,nt),_t.return=Q,Q=_t;break t}a(Q,k);break}else n(Q,k);k=k.sibling}nt.type===w?(_t=Cs(nt.props.children,Q.mode,_t,nt.key),_t.return=Q,Q=_t):(_t=xl(nt.type,nt.key,nt.props,null,Q.mode,_t),mo(_t,nt),_t.return=Q,Q=_t)}return _(Q);case b:t:{for(ae=nt.key;k!==null;){if(k.key===ae)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(Q,k.sibling),_t=u(k,nt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,k);break}else n(Q,k);k=k.sibling}_t=Pu(nt,Q.mode,_t),_t.return=Q,Q=_t}return _(Q);case T:return nt=Os(nt),sn(Q,k,nt,_t)}if(X(nt))return Zt(Q,k,nt,_t);if(j(nt)){if(ae=j(nt),typeof ae!="function")throw Error(s(150));return nt=ae.call(nt),oe(Q,k,nt,_t)}if(typeof nt.then=="function")return sn(Q,k,Al(nt),_t);if(nt.$$typeof===I)return sn(Q,k,Ml(Q,nt),_t);Rl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(Q,k.sibling),_t=u(k,nt),_t.return=Q,Q=_t):(a(Q,k),_t=Ou(nt,Q.mode,_t),_t.return=Q,Q=_t),_(Q)):a(Q,k)}return function(Q,k,nt,_t){try{po=0;var ae=sn(Q,k,nt,_t);return mr=null,ae}catch($t){if($t===pr||$t===bl)throw $t;var ze=vi(29,$t,null,Q.mode);return ze.lanes=_t,ze.return=Q,ze}finally{}}}var Is=vm(!0),xm=vm(!1),Ka=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=vl(e),nm(e,null,a),n}return _l(e,r,n,a),vl(e)}function go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,si(e,a)}}function Zu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ku=!1;function _o(){if(Ku){var e=dr;if(e!==null)throw e}}function vo(e,n,a,r){Ku=!1;var u=e.updateQueue;Ka=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,it=F.next;F.next=null,_===null?f=it:_.next=it,_=F;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==_&&(R===null?dt.firstBaseUpdate=it:R.next=it,dt.lastBaseUpdate=F))}if(f!==null){var xt=u.baseState;_=0,dt=it=F=null,R=f;do{var at=R.lane&-536870913,lt=at!==R.lane;if(lt?(Ae&at)===at:(r&at)===at){at!==0&&at===hr&&(Ku=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Zt=e,oe=R;at=n;var sn=a;switch(oe.tag){case 1:if(Zt=oe.payload,typeof Zt=="function"){xt=Zt.call(sn,xt,at);break t}xt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=oe.payload,at=typeof Zt=="function"?Zt.call(sn,xt,at):Zt,at==null)break t;xt=v({},xt,at);break t;case 2:Ka=!0}}at=R.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(it=dt=lt,F=xt):dt=dt.next=lt,_|=at;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(F=xt),u.baseState=F,u.firstBaseUpdate=it,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),is|=_,e.lanes=_,e.memoizedState=xt}}function Sm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ym(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sm(a[e],n)}var gr=z(null),wl=z(0);function Mm(e,n){e=Ua,gt(wl,e),gt(gr,n),Ua=e|n.baseLanes}function Qu(){gt(wl,Ua),gt(gr,gr.current)}function Ju(){Ua=wl.current,$(gr),$(wl)}var xi=z(null),Oi=null;function $a(e){var n=e.alternate;gt(bn,bn.current&1),gt(xi,e),Oi===null&&(n===null||gr.current!==null||n.memoizedState!==null)&&(Oi=e)}function $u(e){gt(bn,bn.current),gt(xi,e),Oi===null&&(Oi=e)}function Em(e){e.tag===22?(gt(bn,bn.current),gt(xi,e),Oi===null&&(Oi=e)):ts()}function ts(){gt(bn,bn.current),gt(xi,xi.current)}function Si(e){$(xi),Oi===e&&(Oi=null),$(bn)}var bn=z(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,me=null,nn=null,wn=null,Dl=!1,_r=!1,zs=!1,Ul=0,xo=0,vr=null,Qx=0;function Sn(){throw Error(s(321))}function tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!_i(e[a],n[a]))return!1;return!0}function ef(e,n,a,r,u,f){return Ea=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?r0:_f,zs=!1,f=a(r,u),zs=!1,_r&&(f=Tm(n,a,r,u)),bm(e),f}function bm(e){O.H=Mo;var n=nn!==null&&nn.next!==null;if(Ea=0,wn=nn=me=null,Dl=!1,xo=0,vr=null,n)throw Error(s(300));e===null||Cn||(e=e.dependencies,e!==null&&yl(e)&&(Cn=!0))}function Tm(e,n,a,r){me=e;var u=0;do{if(_r&&(vr=null),xo=0,_r=!1,25<=u)throw Error(s(301));if(u+=1,wn=nn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=o0,f=n(a,r)}while(_r);return f}function Jx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?So(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(me.flags|=1024),n}function nf(){var e=Ul!==0;return Ul=0,e}function af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function sf(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}Ea=0,wn=nn=me=null,_r=!1,xo=Ul=0,vr=null}function ni(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?me.memoizedState=wn=e:wn=wn.next=e,wn}function Tn(){if(nn===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=wn===null?me.memoizedState:wn.next;if(n!==null)wn=n,nn=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},wn===null?me.memoizedState=wn=e:wn=wn.next=e}return wn}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var n=xo;return xo+=1,vr===null&&(vr=[]),e=mm(vr,e,n),n=me,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?r0:_f),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===I)return Xn(e)}throw Error(s(438,String(e)))}function rf(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Z;return n.index++,a}function ba(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=Tn();return of(n,nn,e)}function of(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,F=null,it=n,dt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Ae&xt)===xt:(Ea&xt)===xt){var at=it.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===hr&&(dt=!0);else if((Ea&at)===at){it=it.next,at===hr&&(dt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(R=F=xt,_=f):F=F.next=xt,me.lanes|=at,is|=at;xt=it.action,zs&&a(f,xt),f=it.hasEagerState?it.eagerState:a(f,xt)}else at={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(R=F=at,_=f):F=F.next=at,me.lanes|=xt,is|=xt;it=it.next}while(it!==null&&it!==n);if(F===null?_=f:F.next=R,!_i(f,e.memoizedState)&&(Cn=!0,dt&&(a=dr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=F,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function lf(e){var n=Tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);_i(f,n.memoizedState)||(Cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Am(e,n,a){var r=me,u=Tn(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!_i((nn||u).memoizedState,a);if(_&&(u.memoizedState=a,Cn=!0),u=u.queue,ff(Cm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||wn!==null&&wn.memoizedState.tag&1){if(r.flags|=2048,xr(9,{destroy:void 0},wm.bind(null,r,u,a,n),null),ln===null)throw Error(s(349));f||(Ea&127)!==0||Rm(r,n,a)}return a}function Rm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Nl(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,r){n.value=a,n.getSnapshot=r,Dm(n)&&Um(e)}function Cm(e,n,a){return a(function(){Dm(n)&&Um(e)})}function Dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!_i(e,a)}catch{return!0}}function Um(e){var n=ws(e,2);n!==null&&hi(n,e,2)}function cf(e){var n=ni();if(typeof e=="function"){var a=e;if(e=a(),zs){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},n}function Nm(e,n,a,r){return e.baseState=a,of(e,nn,typeof r=="function"?r:ba)}function $x(e,n,a,r,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,r),F=O.S;F!==null&&F(_,R),Om(e,n,R)}catch(it){uf(e,n,it)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),Om(e,n,f)}catch(it){uf(e,n,it)}}function Om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Pm(e,n,r)},function(r){return uf(e,n,r)}):Pm(e,n,a)}function Pm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lm(e,a)))}function uf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==r)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zm(e,n){return n}function Bm(e,n){if(Ce){var a=ln.formState;if(a!==null){t:{var r=me;if(Ce){if(fn){e:{for(var u=fn,f=Li;u.nodeType!==8;){if(!f){u=null;break e}if(u=Pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){fn=Pi(u.nextSibling),r=u.data==="F!";break t}}ja(r)}r=!1}r&&(n=a[0])}}return a=ni(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=r,a=i0.bind(null,me,r),r.dispatch=a,r=cf(!1),f=gf.bind(null,me,!1,r.queue),r=ni(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=$x.bind(null,me,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Fm(e){var n=Tn();return Gm(n,nn,e)}function Gm(e,n,a){if(n=of(e,n,zm)[0],e=Ol(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=So(n)}catch(_){throw _===pr?bl:_}else r=n;n=Tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,xr(9,{destroy:void 0},tS.bind(null,u,a),null)),[r,f,e]}function tS(e,n){e.action=n}function Hm(e){var n=Tn(),a=nn;if(a!==null)return Gm(n,a,e);Tn(),n=n.memoizedState,a=Tn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function xr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=Nl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Vm(){return Tn().memoizedState}function Pl(e,n,a,r){var u=ni();me.flags|=e,u.memoizedState=xr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Il(e,n,a,r){var u=Tn();r=r===void 0?null:r;var f=u.memoizedState.inst;nn!==null&&r!==null&&tf(r,nn.memoizedState.deps)?u.memoizedState=xr(n,f,a,r):(me.flags|=e,u.memoizedState=xr(1|n,f,a,r))}function km(e,n){Pl(8390656,8,e,n)}function ff(e,n){Il(2048,8,e,n)}function eS(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=Nl(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Xm(e){var n=Tn().memoizedState;return eS({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Wm(e,n){return Il(4,2,e,n)}function qm(e,n){return Il(4,4,e,n)}function Ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jm(e,n,a){a=a!=null?a.concat([e]):null,Il(4,4,Ym.bind(null,n,e),a)}function hf(){}function Zm(e,n){var a=Tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&tf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Km(e,n){var a=Tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&tf(n,r[1]))return r[0];if(r=e(),zs){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[r,n],r}function df(e,n,a){return a===void 0||(Ea&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Q0(),me.lanes|=e,is|=e,a)}function Qm(e,n,a,r){return _i(a,n)?a:gr.current!==null?(e=df(e,a,r),_i(e,n)||(Cn=!0),e):(Ea&42)===0||(Ea&1073741824)!==0&&(Ae&261930)===0?(Cn=!0,e.memoizedState=a):(e=Q0(),me.lanes|=e,is|=e,n)}function Jm(e,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,gf(e,!1,n,a);try{var F=u(),it=O.S;if(it!==null&&it(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=Kx(F,r);yo(e,n,dt,Ei(e))}else yo(e,n,r,Ei(e))}catch(xt){yo(e,n,{then:function(){},status:"rejected",reason:xt},Ei())}finally{B.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function nS(){}function pf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=$m(e).queue;Jm(e,u,n,rt,a===null?nS:function(){return t0(e),a(r)})}function $m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function t0(e){var n=$m(e);n.next===null&&(n=e.alternate.memoizedState),yo(e,n.next.queue,{},Ei())}function mf(){return Xn(Bo)}function e0(){return Tn().memoizedState}function n0(){return Tn().memoizedState}function iS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ei();e=Qa(a);var r=Ja(n,e,a);r!==null&&(hi(r,n,a),go(r,n,a)),n={cache:ku()},e.payload=n;return}n=n.return}}function aS(e,n,a){var r=Ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?a0(n,a):(a=Nu(e,n,a,r),a!==null&&(hi(a,e,r),s0(a,n,r)))}function i0(e,n,a){var r=Ei();yo(e,n,a,r)}function yo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))a0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,_i(R,_))return _l(e,n,u,0),ln===null&&gl(),!1}catch{}finally{}if(a=Nu(e,n,u,r),a!==null)return hi(a,e,r),s0(a,n,r),!0}return!1}function gf(e,n,a,r){if(r={lane:2,revertLane:jf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Nu(e,a,r,2),n!==null&&hi(n,e,2)}function zl(e){var n=e.alternate;return e===me||n!==null&&n===me}function a0(e,n){_r=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function s0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,si(e,a)}}var Mo={readContext:Xn,use:Ll,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};Mo.useEffectEvent=Sn;var r0={readContext:Xn,use:Ll,useCallback:function(e,n){return ni().memoizedState=[e,n===void 0?null:n],e},useContext:Xn,useEffect:km,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=ni();n=n===void 0?null:n;var r=e();if(zs){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=ni();if(a!==void 0){var u=a(n);if(zs){Pt(!0);try{a(n)}finally{Pt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=aS.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=ni();return e={current:e},n.memoizedState=e},useState:function(e){e=cf(e);var n=e.queue,a=i0.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,n){var a=ni();return df(a,e,n)},useTransition:function(){var e=cf(!1);return e=Jm.bind(null,me,e.queue,!0,!1),ni().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=me,u=ni();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ln===null)throw Error(s(349));(Ae&127)!==0||Rm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,km(Cm.bind(null,r,f,e),[e]),r.flags|=2048,xr(9,{destroy:void 0},wm.bind(null,r,f,a,n),null),a},useId:function(){var e=ni(),n=ln.identifierPrefix;if(Ce){var a=ia,r=na;a=(r&~(1<<32-It(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=ni();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:rf,useCacheRefresh:function(){return ni().memoizedState=iS.bind(null,me)},useEffectEvent:function(e){var n=ni(),a={impl:e};return n.memoizedState=a,function(){if((He&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:Xn,use:Ll,useCallback:Zm,useContext:Xn,useEffect:ff,useImperativeHandle:jm,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:Ol,useRef:Vm,useState:function(){return Ol(ba)},useDebugValue:hf,useDeferredValue:function(e,n){var a=Tn();return Qm(a,nn.memoizedState,e,n)},useTransition:function(){var e=Ol(ba)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Am,useId:e0,useHostTransitionStatus:mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,n){var a=Tn();return Nm(a,nn,e,n)},useMemoCache:rf,useCacheRefresh:n0};_f.useEffectEvent=Xm;var o0={readContext:Xn,use:Ll,useCallback:Zm,useContext:Xn,useEffect:ff,useImperativeHandle:jm,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:lf,useRef:Vm,useState:function(){return lf(ba)},useDebugValue:hf,useDeferredValue:function(e,n){var a=Tn();return nn===null?df(a,e,n):Qm(a,nn.memoizedState,e,n)},useTransition:function(){var e=lf(ba)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Am,useId:e0,useHostTransitionStatus:mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=Tn();return nn!==null?Nm(a,nn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:n0};o0.useEffectEvent=Xm;function vf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Ei(),u=Qa(r);u.payload=n,a!=null&&(u.callback=a),n=Ja(e,u,r),n!==null&&(hi(n,e,r),go(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Ei(),u=Qa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ja(e,u,r),n!==null&&(hi(n,e,r),go(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ei(),r=Qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ja(e,r,a),n!==null&&(hi(n,e,a),go(n,e,a))}};function l0(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!oo(a,r)||!oo(u,f):!0}function c0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&xf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function u0(e){ml(e)}function f0(e){console.error(e)}function h0(e){ml(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function d0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(e,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function p0(e){return e=Qa(e),e.tag=3,e}function m0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){d0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){d0(n,a,r),typeof u!="function"&&(as===null?as=new Set([this]):as.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function sS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&fr(n,a,u,!0),a=xi.current,a!==null){switch(a.tag){case 31:case 13:return Oi===null?Kl():a.alternate===null&&yn===0&&(yn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Wf(e,r,u)),!1;case 22:return a.flags|=65536,r===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Wf(e,r,u)),!1}throw Error(s(435,a.tag))}return Wf(e,r,u),Kl(),!1}if(Ce)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Bu&&(e=Error(s(422),{cause:r}),uo(Di(e,a)))):(r!==Bu&&(n=Error(s(423),{cause:r}),uo(Di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Di(r,a),u=Sf(e.stateNode,r,u),Zu(e,u),yn!==4&&(yn=2)),!1;var f=Error(s(520),{cause:r});if(f=Di(f,a),Do===null?Do=[f]:Do.push(f),yn!==4&&(yn=2),n===null)return!0;r=Di(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Sf(a.stateNode,r,e),Zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(as===null||!as.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=p0(u),m0(u,e,a,r),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),Cn=!1;function Wn(e,n,a,r){n.child=e===null?xm(n,null,a,r):Is(n,e.child,a,r)}function g0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return Ns(n),r=ef(e,n,a,_,f,u),R=nf(),e!==null&&!Cn?(af(e,n,u),Ta(e,n,u)):(Ce&&R&&Iu(n),n.flags|=1,Wn(e,n,r,u),n.child)}function _0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,v0(e,n,f,r,u)):(e=xl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Cf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(_,r)&&e.ref===n.ref)return Ta(e,n,u)}return n.flags|=1,e=xa(f,r),e.ref=n.ref,e.return=n,n.child=e}function v0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(oo(f,r)&&e.ref===n.ref)if(Cn=!1,n.pendingProps=r=f,Cf(e,u))(e.flags&131072)!==0&&(Cn=!0);else return n.lanes=e.lanes,Ta(e,n,u)}return Mf(e,n,a,r,u)}function x0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return S0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?Mm(n,f):Qu(),Em(n);else return r=n.lanes=536870912,S0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(El(n,f.cachePool),Mm(n,f),ts(),n.memoizedState=null):(e!==null&&El(n,null),Qu(),ts());return Wn(e,n,u,a),n.child}function Eo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function S0(e,n,a,r,u){var f=Wu();return f=f===null?null:{parent:Rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),Qu(),Em(n),e!==null&&fr(e,n,r,!0),n.childLanes=u,null}function Fl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function y0(e,n,a){return Is(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,Si(n),n.memoizedState=null,e}function rS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(r.mode==="hidden")return e=Fl(n,r),n.lanes=536870912,Eo(null,e);if($u(n),(e=fn)?(e=Lg(e,Li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qa!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=am(e),a.return=n,n.child=a,kn=n,fn=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return Fl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=y0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Cn||fr(e,n,a,!1),u=(a&e.childLanes)!==0,Cn||u){if(r=ln,r!==null&&(_=Hn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ws(e,_),hi(r,e,_),yf;Kl(),n=y0(e,n,a)}else e=f.treeContext,fn=Pi(_.nextSibling),kn=n,Ce=!0,Ya=null,Li=!1,e!==null&&om(n,e),n=Fl(n,r),n.flags|=4096;return n}return e=xa(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mf(e,n,a,r,u){return Ns(n),a=ef(e,n,a,r,void 0,u),r=nf(),e!==null&&!Cn?(af(e,n,u),Ta(e,n,u)):(Ce&&r&&Iu(n),n.flags|=1,Wn(e,n,a,u),n.child)}function M0(e,n,a,r,u,f){return Ns(n),n.updateQueue=null,a=Tm(n,r,a,u),bm(e),r=nf(),e!==null&&!Cn?(af(e,n,f),Ta(e,n,f)):(Ce&&r&&Iu(n),n.flags|=1,Wn(e,n,a,f),n.child)}function E0(e,n,a,r,u){if(Ns(n),n.stateNode===null){var f=or,_=a.contextType;typeof _=="object"&&_!==null&&(f=Xn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Yu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Xn(_):or,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(vf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&xf.enqueueReplaceState(f,f.state,null),vo(n,r,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,F=Bs(a,R);f.props=F;var it=f.context,dt=a.contextType;_=or,typeof dt=="object"&&dt!==null&&(_=Xn(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==_)&&c0(n,f,r,_),Ka=!1;var at=n.memoizedState;f.state=at,vo(n,r,f,u),_o(),it=n.memoizedState,R||at!==it||Ka?(typeof xt=="function"&&(vf(n,a,xt,r),it=n.memoizedState),(F=Ka||l0(n,a,F,r,at,it,_))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=_,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,ju(e,n),_=n.memoizedProps,dt=Bs(a,_),f.props=dt,xt=n.pendingProps,at=f.context,it=a.contextType,F=or,typeof it=="object"&&it!==null&&(F=Xn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||at!==F)&&c0(n,f,r,F),Ka=!1,at=n.memoizedState,f.state=at,vo(n,r,f,u),_o();var lt=n.memoizedState;_!==xt||at!==lt||Ka||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof R=="function"&&(vf(n,a,R,r),lt=n.memoizedState),(dt=Ka||l0(n,a,dt,r,at,lt,F)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=F,r=dt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Gl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Is(n,e.child,null,u),n.child=Is(n,null,a,u)):Wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ta(e,n,u),e}function b0(e,n,a,r){return Ds(),n.flags|=256,Wn(e,n,a,r),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:dm()}}function Tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Mi),e}function T0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(bn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?$a(n):ts(),(e=fn)?(e=Lg(e,Li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qa!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=am(e),a.return=n,n.child=a,kn=n,fn=null)):e=null,e===null)throw ja(n);return oh(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(ts(),u=n.mode,R=Hl({mode:"hidden",children:R},u),r=Cs(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=bf(a),r.childLanes=Tf(e,_,a),n.memoizedState=Ef,Eo(null,r)):($a(n),Af(n,R))}var F=e.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?($a(n),n.flags&=-257,n=Rf(e,n,a)):n.memoizedState!==null?(ts(),n.child=e.child,n.flags|=128,n=null):(ts(),R=r.fallback,u=n.mode,r=Hl({mode:"visible",children:r.children},u),R=Cs(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Is(n,e.child,null,a),r=n.child,r.memoizedState=bf(a),r.childLanes=Tf(e,_,a),n.memoizedState=Ef,n=Eo(null,r));else if($a(n),oh(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var it=_.dgst;_=it,r=Error(s(419)),r.stack="",r.digest=_,uo({value:r,source:null,stack:null}),n=Rf(e,n,a)}else if(Cn||fr(e,n,a,!1),_=(a&e.childLanes)!==0,Cn||_){if(_=ln,_!==null&&(r=Hn(_,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,ws(e,r),hi(_,e,r),yf;rh(R)||Kl(),n=Rf(e,n,a)}else rh(R)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,fn=Pi(R.nextSibling),kn=n,Ce=!0,Ya=null,Li=!1,e!==null&&om(n,e),n=Af(n,r.children),n.flags|=4096);return n}return u?(ts(),R=r.fallback,u=n.mode,F=e.child,it=F.sibling,r=xa(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,it!==null?R=xa(it,R):(R=Cs(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,Eo(null,r),r=n.child,R=e.child.memoizedState,R===null?R=bf(a):(u=R.cachePool,u!==null?(F=Rn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=dm(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=Tf(e,_,a),n.memoizedState=Ef,Eo(e.child,r)):($a(n),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Af(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=vi(22,e,null,n),e.lanes=0,e}function Rf(e,n,a){return Is(n,e.child,null,a),e=Af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function A0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Hu(e.return,n,a)}function wf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function R0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=bn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,gt(bn,_),Wn(e,n,r,a),r=Ce?co:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A0(e,a,n);else if(e.tag===19)A0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}wf(n,!0,a,null,f,r);break;case"together":wf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(fr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=xa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function oS(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Za(n,Rn,e.memoizedState.cache),Ds();break;case 27:case 5:se(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?($a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T0(e,n,a):($a(n),e=Ta(e,n,a),e!==null?e.sibling:null);$a(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(fr(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return R0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(bn,bn.current),r)break;return null;case 22:return n.lanes=0,x0(e,n,a,n.pendingProps);case 24:Za(n,Rn,e.memoizedState.cache)}return Ta(e,n,a)}function w0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Cf(e,a)&&(n.flags&128)===0)return Cn=!1,oS(e,n,a);Cn=(e.flags&131072)!==0}else Cn=!1,Ce&&(n.flags&1048576)!==0&&rm(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")Lu(e)?(r=Bs(e,r),n.tag=1,n=E0(null,n,e,r,a)):(n.tag=0,n=Mf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=g0(null,n,e,r,a);break t}else if(u===N){n.tag=14,n=_0(null,n,e,r,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Bs(r,n.pendingProps),E0(e,n,r,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,ju(e,n),vo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Za(n,Rn,r),r!==f.cache&&Vu(n,[Rn],a,!0),_o(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=b0(e,n,r,a);break t}else if(r!==u){u=Di(Error(s(424)),n),uo(u),n=b0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fn=Pi(e.firstChild),kn=n,Ce=!0,Ya=null,Li=!0,a=xm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ds(),r===u){n=Ta(e,n,a);break t}Wn(e,n,r,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=Fg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,r=ic(st.current).createElement(a),r[Yt]=n,r[te]=e,qn(r,a,e),Ve(r),n.stateNode=r):n.memoizedState=Fg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return se(n),e===null&&Ce&&(r=n.stateNode=Ig(n.type,n.pendingProps,st.current),kn=n,Li=!0,u=fn,ls(n.type)?(lh=u,fn=Pi(r.firstChild)):fn=u),Wn(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=r=fn)&&(r=zS(r,n.type,n.pendingProps,Li),r!==null?(n.stateNode=r,kn=n,fn=Pi(r.firstChild),Li=!1,u=!0):u=!1),u||ja(n)),se(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,ih(u,f)?r=null:_!==null&&ih(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(e,n,Jx,null,null,a),Bo._currentValue=u),Gl(e,n),Wn(e,n,r,a),n.child;case 6:return e===null&&Ce&&((e=a=fn)&&(a=BS(a,n.pendingProps,Li),a!==null?(n.stateNode=a,kn=n,fn=null,e=!0):e=!1),e||ja(n)),null;case 13:return T0(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Is(n,null,r,a):Wn(e,n,r,a),n.child;case 11:return g0(e,n,n.type,n.pendingProps,a);case 7:return Wn(e,n,n.pendingProps,a),n.child;case 8:return Wn(e,n,n.pendingProps.children,a),n.child;case 12:return Wn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Za(n,n.type,r.value),Wn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Ns(n),u=Xn(u),r=r(u),n.flags|=1,Wn(e,n,r,a),n.child;case 14:return _0(e,n,n.type,n.pendingProps,a);case 15:return v0(e,n,n.type,n.pendingProps,a);case 19:return R0(e,n,a);case 31:return rS(e,n,a);case 22:return x0(e,n,a,n.pendingProps);case 24:return Ns(n),r=Xn(Rn),e===null?(u=Wu(),u===null&&(u=ln,f=ku(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Yu(n),Za(n,Rn,u)):((e.lanes&a)!==0&&(ju(e,n),vo(n,null,null,a),_o()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Za(n,Rn,r)):(r=f.cache,Za(n,Rn,r),r!==u.cache&&Vu(n,[Rn],a,!0))),Wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Aa(e){e.flags|=4}function Df(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(eg())e.flags|=8192;else throw Ps=Tl,qu}else e.flags&=-16777217}function C0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xg(n))if(eg())e.flags|=8192;else throw Ps=Tl,qu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?yt():536870912,e.lanes|=n,Er|=n)}function bo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function hn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function lS(e,n,a){var r=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(n),null;case 1:return hn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ma(Rn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ur(n)?Aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),hn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Aa(n),f!==null?(hn(n),C0(n,f)):(hn(n),Df(n,u,null,r,a))):f?f!==e.memoizedState?(Aa(n),hn(n),C0(n,f)):(hn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Aa(n),hn(n),Df(n,u,e,r,a)),null;case 27:if(ne(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return hn(n),null}e=Rt.current,ur(n)?lm(n):(e=Ig(u,r,a),n.stateNode=e,Aa(n))}return hn(n),null;case 5:if(ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return hn(n),null}if(f=Rt.current,ur(n))lm(n);else{var _=ic(st.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[Yt]=n,f[te]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(qn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Aa(n)}}return hn(n),Df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,ur(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=kn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[Yt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Tg(e.nodeValue,a)),e||ja(n,!0)}else e=ic(e).createTextNode(r),e[Yt]=n,n.stateNode=e}return hn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=ur(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Yt]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Si(n),n):(Si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return hn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ur(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Yt]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Si(n),n):(Si(n),null)}return Si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),hn(n),null);case 4:return Ht(),e===null&&Jf(n.stateNode.containerInfo),hn(n),null;case 10:return Ma(n.type),hn(n),null;case 19:if($(bn),r=n.memoizedState,r===null)return hn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)bo(r,!1);else{if(yn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Cl(e),f!==null){for(n.flags|=128,bo(r,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)im(a,e),a=a.sibling;return gt(bn,bn.current&1|2),Ce&&Sa(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&wt()>Yl&&(n.flags|=128,u=!0,bo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ce)return hn(n),null}else 2*wt()-r.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=wt(),e.sibling=null,a=bn.current,gt(bn,u?a&1|2:a&1),Ce&&Sa(n,r.treeForkCount),e):(hn(n),null);case 22:case 23:return Si(n),Ju(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(hn(n),n.subtreeFlags&6&&(n.flags|=8192)):hn(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&$(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(Rn),hn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cS(e,n){switch(zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ma(Rn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ne(n),null;case 31:if(n.memoizedState!==null){if(Si(n),n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(bn),null;case 4:return Ht(),null;case 10:return Ma(n.type),null;case 22:case 23:return Si(n),Ju(),e!==null&&$(Ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ma(Rn),null;case 25:return null;default:return null}}function D0(e,n){switch(zu(n),n.tag){case 3:Ma(Rn),Ht();break;case 26:case 27:case 5:ne(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Si(n);break;case 13:Si(n);break;case 19:$(bn);break;case 10:Ma(n.type);break;case 22:case 23:Si(n),Ju(),e!==null&&$(Ls);break;case 24:Ma(Rn)}}function To(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Ke(n,n.return,R)}}function es(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var F=a,it=R;try{it()}catch(dt){Ke(u,F,dt)}}}r=r.next}while(r!==f)}}catch(dt){Ke(n,n.return,dt)}}function U0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ym(n,a)}catch(r){Ke(e,e.return,r)}}}function N0(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ke(e,n,r)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ke(e,n,u)}}function aa(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ke(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ke(e,n,u)}else a.current=null}function L0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ke(e,e.return,u)}}function Uf(e,n,a){try{var r=e.stateNode;US(r,e.type,a,n),r[te]=n}catch(u){Ke(e,e.return,u)}}function O0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ls(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ls(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=_a));else if(r!==4&&(r===27&&ls(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Lf(e,n,a),e=e.sibling;e!==null;)Lf(e,n,a),e=e.sibling}function kl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ls(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function P0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);qn(n,r,a),n[Yt]=e,n[te]=a}catch(f){Ke(e,e.return,f)}}var Ra=!1,Dn=!1,Of=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function uS(e,n){if(e=e.containerInfo,eh=uc,e=jp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,F=-1,it=0,dt=0,xt=e,at=null;e:for(;;){for(var lt;xt!==a||u!==0&&xt.nodeType!==3||(R=_+u),xt!==f||r!==0&&xt.nodeType!==3||(F=_+r),xt.nodeType===3&&(_+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)at=xt,xt=lt;for(;;){if(xt===e)break e;if(at===a&&++it===u&&(R=_),at===f&&++dt===r&&(F=_),(lt=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=lt}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},uc=!1,Bn=n;Bn!==null;)if(n=Bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Bn=e;else for(;Bn!==null;){switch(n=Bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Zt=Bs(a.type,u);e=r.getSnapshotBeforeUpdate(Zt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ke(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Bn=e;break}Bn=n.return}}function z0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(e,a),r&4&&To(5,a);break;case 1:if(Ca(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ke(a,a.return,_)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ke(a,a.return,_)}}r&64&&U0(a),r&512&&Ao(a,a.return);break;case 3:if(Ca(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(e,n)}catch(_){Ke(a,a.return,_)}}break;case 27:n===null&&r&4&&P0(a);case 26:case 5:Ca(e,a),n===null&&r&4&&L0(a),r&512&&Ao(a,a.return);break;case 12:Ca(e,a);break;case 31:Ca(e,a),r&4&&G0(e,a);break;case 13:Ca(e,a),r&4&&H0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xS.bind(null,a),FS(e,a))));break;case 22:if(r=a.memoizedState!==null||Ra,!r){n=n!==null&&n.memoizedState!==null||Dn,u=Ra;var f=Dn;Ra=r,(Dn=n)&&!f?Da(e,a,(a.subtreeFlags&8772)!==0):Ca(e,a),Ra=u,Dn=f}break;case 30:break;default:Ca(e,a)}}function B0(e){var n=e.alternate;n!==null&&(e.alternate=null,B0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Nn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mn=null,li=!1;function wa(e,n,a){for(a=a.child;a!==null;)F0(e,n,a),a=a.sibling}function F0(e,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Dn||aa(a,n),wa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dn||aa(a,n);var r=mn,u=li;ls(a.type)&&(mn=a.stateNode,li=!1),wa(e,n,a),Po(a.stateNode),mn=r,li=u;break;case 5:Dn||aa(a,n);case 6:if(r=mn,u=li,mn=null,wa(e,n,a),mn=r,li=u,mn!==null)if(li)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(a.stateNode)}catch(f){Ke(a,n,f)}else try{mn.removeChild(a.stateNode)}catch(f){Ke(a,n,f)}break;case 18:mn!==null&&(li?(e=mn,Ug(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ur(e)):Ug(mn,a.stateNode));break;case 4:r=mn,u=li,mn=a.stateNode.containerInfo,li=!0,wa(e,n,a),mn=r,li=u;break;case 0:case 11:case 14:case 15:es(2,a,n),Dn||es(4,a,n),wa(e,n,a);break;case 1:Dn||(aa(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&N0(a,n,r)),wa(e,n,a);break;case 21:wa(e,n,a);break;case 22:Dn=(r=Dn)||a.memoizedState!==null,wa(e,n,a),Dn=r;break;default:wa(e,n,a)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ur(e)}catch(a){Ke(n,n.return,a)}}}function H0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ur(e)}catch(a){Ke(n,n.return,a)}}function fS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I0),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=fS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=SS.bind(null,e,r);r.then(u,u)}})}function ci(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(ls(R.type)){mn=R.stateNode,li=!1;break t}break;case 5:mn=R.stateNode,li=!1;break t;case 3:case 4:mn=R.stateNode.containerInfo,li=!0;break t}R=R.return}if(mn===null)throw Error(s(160));F0(f,_,u),mn=null,li=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,e),n=n.sibling}var Xi=null;function V0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ci(n,e),ui(e),r&4&&(es(3,e,e.return),To(3,e),es(5,e,e.return));break;case 1:ci(n,e),ui(e),r&512&&(Dn||a===null||aa(a,a.return)),r&64&&Ra&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Xi;if(ci(n,e),ui(e),r&512&&(Dn||a===null||aa(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[xn]||f[Yt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),qn(f,r,a),f[Yt]=e,Ve(f),r=f;break t;case"link":var _=Vg("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=u.createElement(r),qn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=Vg("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=u.createElement(r),qn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[Yt]=e,Ve(f),r=f}e.stateNode=r}else kg(u,e.type,e.stateNode);else e.stateNode=Hg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?kg(u,e.type,e.stateNode):Hg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ci(n,e),ui(e),r&512&&(Dn||a===null||aa(a,a.return)),a!==null&&r&4&&Uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ci(n,e),ui(e),r&512&&(Dn||a===null||aa(a,a.return)),e.flags&32){u=e.stateNode;try{gi(u,"")}catch(Zt){Ke(e,e.return,Zt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Uf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Of=!0);break;case 6:if(ci(n,e),ui(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Zt){Ke(e,e.return,Zt)}}break;case 3:if(rc=null,u=Xi,Xi=ac(n.containerInfo),ci(n,e),Xi=u,ui(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(Zt){Ke(e,e.return,Zt)}Of&&(Of=!1,k0(e));break;case 4:r=Xi,Xi=ac(e.stateNode.containerInfo),ci(n,e),ui(e),Xi=r;break;case 12:ci(n,e),ui(e);break;case 31:ci(n,e),ui(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 13:ci(n,e),ui(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=wt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,it=Ra,dt=Dn;if(Ra=it||u,Dn=dt||F,ci(n,e),Dn=dt,Ra=it,ui(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Ra||Dn||Fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=F.stateNode;var xt=F.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Zt){Ke(F,F.return,Zt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Zt){Ke(F,F.return,Zt)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?Ng(lt,!0):Ng(F.stateNode,!1)}catch(Zt){Ke(F,F.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Xl(e,a))));break;case 19:ci(n,e),ui(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xl(e,r)));break;case 30:break;case 21:break;default:ci(n,e),ui(e)}}function ui(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(O0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Nf(e);kl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(gi(_,""),a.flags&=-33);var R=Nf(e);kl(e,R,_);break;case 3:case 4:var F=a.stateNode.containerInfo,it=Nf(e);Lf(e,it,F);break;default:throw Error(s(161))}}catch(dt){Ke(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function k0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;k0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)z0(e,n.alternate,n),n=n.sibling}function Fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:es(4,n,n.return),Fs(n);break;case 1:aa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&N0(n,n.return,a),Fs(n);break;case 27:Po(n.stateNode);case 26:case 5:aa(n,n.return),Fs(n);break;case 22:n.memoizedState===null&&Fs(n);break;case 30:Fs(n);break;default:Fs(n)}e=e.sibling}}function Da(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Da(u,f,a),To(4,f);break;case 1:if(Da(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ke(r,r.return,it)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Sm(F[u],R)}catch(it){Ke(r,r.return,it)}}a&&_&64&&U0(f),Ao(f,f.return);break;case 27:P0(f);case 26:case 5:Da(u,f,a),a&&r===null&&_&4&&L0(f),Ao(f,f.return);break;case 12:Da(u,f,a);break;case 31:Da(u,f,a),a&&_&4&&G0(u,f);break;case 13:Da(u,f,a),a&&_&4&&H0(u,f);break;case 22:f.memoizedState===null&&Da(u,f,a),Ao(f,f.return);break;case 30:break;default:Da(u,f,a)}n=n.sibling}}function Pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Wi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)X0(e,n,a,r),n=n.sibling}function X0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n,a,r),u&2048&&To(9,n);break;case 1:Wi(e,n,a,r);break;case 3:Wi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Wi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ke(n,n.return,F)}}else Wi(e,n,a,r);break;case 31:Wi(e,n,a,r);break;case 13:Wi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Wi(e,n,a,r):Ro(e,n):f._visibility&2?Wi(e,n,a,r):(f._visibility|=2,Sr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(_,n);break;case 24:Wi(e,n,a,r),u&2048&&If(n.alternate,n);break;default:Wi(e,n,a,r)}}function Sr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,F=r,it=_.flags;switch(_.tag){case 0:case 11:case 15:Sr(f,_,R,F,u),To(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?Sr(f,_,R,F,u):Ro(f,_):(dt._visibility|=2,Sr(f,_,R,F,u)),u&&it&2048&&Pf(_.alternate,_);break;case 24:Sr(f,_,R,F,u),u&&it&2048&&If(_.alternate,_);break;default:Sr(f,_,R,F,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:Ro(a,r),u&2048&&Pf(r.alternate,r);break;case 24:Ro(a,r),u&2048&&If(r.alternate,r);break;default:Ro(a,r)}n=n.sibling}}var wo=8192;function yr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)W0(e,n,a),e=e.sibling}function W0(e,n,a){switch(e.tag){case 26:yr(e,n,a),e.flags&wo&&e.memoizedState!==null&&QS(a,Xi,e.memoizedState,e.memoizedProps);break;case 5:yr(e,n,a);break;case 3:case 4:var r=Xi;Xi=ac(e.stateNode.containerInfo),yr(e,n,a),Xi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=wo,wo=16777216,yr(e,n,a),wo=r):yr(e,n,a));break;default:yr(e,n,a)}}function q0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Bn=r,j0(r,e)}q0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Y0(e),e=e.sibling}function Y0(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&es(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Co(e);break;default:Co(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Bn=r,j0(r,e)}q0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:es(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function j0(e,n){for(;Bn!==null;){var a=Bn;switch(a.tag){case 0:case 11:case 15:es(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Bn=r;else t:for(a=e;Bn!==null;){r=Bn;var u=r.sibling,f=r.return;if(B0(r),r===a){Bn=null;break t}if(u!==null){u.return=f,Bn=u;break t}Bn=f}}}var hS={getCacheForType:function(e){var n=Xn(Rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Xn(Rn).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,He=0,ln=null,Me=null,Ae=0,Ze=0,yi=null,ns=!1,Mr=!1,zf=!1,Ua=0,yn=0,is=0,Gs=0,Bf=0,Mi=0,Er=0,Do=null,fi=null,Ff=!1,ql=0,Z0=0,Yl=1/0,jl=null,as=null,On=0,ss=null,br=null,Na=0,Gf=0,Hf=null,K0=null,Uo=0,Vf=null;function Ei(){return(He&2)!==0&&Ae!==0?Ae&-Ae:O.T!==null?jf():qt()}function Q0(){if(Mi===0)if((Ae&536870912)===0||Ce){var e=_e;_e<<=1,(_e&3932160)===0&&(_e=262144),Mi=e}else Mi=536870912;return e=xi.current,e!==null&&(e.flags|=32),Mi}function hi(e,n,a){(e===ln&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(Tr(e,0),rs(e,Ae,Mi,!1)),ie(e,a),((He&2)===0||e!==ln)&&(e===ln&&((He&2)===0&&(Gs|=a),yn===4&&rs(e,Ae,Mi,!1)),sa(e))}function J0(e,n,a){if((He&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=r?gS(e,n):Xf(e,n,!0),f=r;do{if(u===0){Mr&&!r&&rs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!pS(a)){u=Xf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=e;u=Do;var F=R.current.memoizedState.isDehydrated;if(F&&(Tr(R,_).flags|=256),_=Xf(R,_,!1),_!==2){if(zf&&!F){R.errorRecoveryDisabledLanes|=f,Gs|=f,u=4;break t}f=fi,fi=u,f!==null&&(fi===null?fi=f:fi.push.apply(fi,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Tr(e,0),rs(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:rs(r,n,Mi,!ns);break t;case 2:fi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-wt(),10<u)){if(rs(r,n,Mi,!ns),ht(r,0,!0)!==0)break t;Na=n,r.timeoutHandle=Cg($0.bind(null,r,a,fi,jl,Ff,n,Mi,Gs,Er,ns,f,"Throttled",-0,0),u);break t}$0(r,a,fi,jl,Ff,n,Mi,Gs,Er,ns,f,null,-0,0)}}break}while(!0);sa(e)}function $0(e,n,a,r,u,f,_,R,F,it,dt,xt,at,lt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},W0(n,f,xt);var Zt=(f&62914560)===f?ql-wt():(f&4194048)===f?Z0-wt():0;if(Zt=JS(xt,Zt),Zt!==null){Na=f,e.cancelPendingCommit=Zt(og.bind(null,e,n,f,a,r,u,_,R,F,dt,xt,null,at,lt)),rs(e,f,_,!it);return}}og(e,n,f,a,r,u,_,R,F)}function pS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!_i(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rs(e,n,a,r){n&=~Bf,n&=~Gs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Oe(e,a,n)}function Zl(){return(He&6)===0?(No(0),!1):!0}function kf(){if(Me!==null){if(Ze===0)var e=Me.return;else e=Me,ya=Us=null,sf(e),mr=null,po=0,e=Me;for(;e!==null;)D0(e.alternate,e),e=e.return;Me=null}}function Tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,OS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Na=0,kf(),ln=e,Me=a=xa(e.current,null),Ae=n,Ze=0,yi=null,ns=!1,Mr=Ft(e,n),zf=!1,Er=Mi=Bf=Gs=is=yn=0,fi=Do=null,Ff=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-It(r),f=1<<u;n|=e[u],r&=~f}return Ua=n,gl(),a}function tg(e,n){me=null,O.H=Mo,n===pr||n===bl?(n=gm(),Ze=3):n===qu?(n=gm(),Ze=4):Ze=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yi=n,Me===null&&(yn=1,Bl(e,Di(n,e.current)))}function eg(){var e=xi.current;return e===null?!0:(Ae&4194048)===Ae?Oi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Oi:!1}function ng(){var e=O.H;return O.H=Mo,e===null?Mo:e}function ig(){var e=O.A;return O.A=hS,e}function Kl(){yn=4,ns||(Ae&4194048)!==Ae&&xi.current!==null||(Mr=!0),(is&134217727)===0&&(Gs&134217727)===0||ln===null||rs(ln,Ae,Mi,!1)}function Xf(e,n,a){var r=He;He|=2;var u=ng(),f=ig();(ln!==e||Ae!==n)&&(jl=null,Tr(e,n)),n=!1;var _=yn;t:do try{if(Ze!==0&&Me!==null){var R=Me,F=yi;switch(Ze){case 8:kf(),_=6;break t;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var it=Ze;if(Ze=0,yi=null,Ar(e,R,F,it),a&&Mr){_=0;break t}break;default:it=Ze,Ze=0,yi=null,Ar(e,R,F,it)}}mS(),_=yn;break}catch(dt){tg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ya=Us=null,He=r,O.H=u,O.A=f,Me===null&&(ln=null,Ae=0,gl()),_}function mS(){for(;Me!==null;)ag(Me)}function gS(e,n){var a=He;He|=2;var r=ng(),u=ig();ln!==e||Ae!==n?(jl=null,Yl=wt()+500,Tr(e,n)):Mr=Ft(e,n);t:do try{if(Ze!==0&&Me!==null){n=Me;var f=yi;e:switch(Ze){case 1:Ze=0,yi=null,Ar(e,n,f,1);break;case 2:case 9:if(pm(f)){Ze=0,yi=null,sg(n);break}n=function(){Ze!==2&&Ze!==9||ln!==e||(Ze=7),sa(e)},f.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:pm(f)?(Ze=0,yi=null,sg(n)):(Ze=0,yi=null,Ar(e,n,f,7));break;case 5:var _=null;switch(Me.tag){case 26:_=Me.memoizedState;case 5:case 27:var R=Me;if(_?Xg(_):R.stateNode.complete){Ze=0,yi=null;var F=R.sibling;if(F!==null)Me=F;else{var it=R.return;it!==null?(Me=it,Ql(it)):Me=null}break e}}Ze=0,yi=null,Ar(e,n,f,5);break;case 6:Ze=0,yi=null,Ar(e,n,f,6);break;case 8:kf(),yn=6;break t;default:throw Error(s(462))}}_S();break}catch(dt){tg(e,dt)}while(!0);return ya=Us=null,O.H=r,O.A=u,He=a,Me!==null?0:(ln=null,Ae=0,gl(),yn)}function _S(){for(;Me!==null&&!pe();)ag(Me)}function ag(e){var n=w0(e.alternate,e,Ua);e.memoizedProps=e.pendingProps,n===null?Ql(e):Me=n}function sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=M0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=M0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:sf(n);default:D0(a,n),n=Me=im(n,Ua),n=w0(a,n,Ua)}e.memoizedProps=e.pendingProps,n===null?Ql(e):Me=n}function Ar(e,n,a,r){ya=Us=null,sf(n),mr=null,po=0;var u=n.return;try{if(sS(e,u,n,a,Ae)){yn=1,Bl(e,Di(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;yn=1,Bl(e,Di(a,e.current)),Me=null;return}n.flags&32768?(Ce||r===1?e=!0:Mr||(Ae&536870912)!==0?e=!1:(ns=e=!0,(r===2||r===9||r===3||r===6)&&(r=xi.current,r!==null&&r.tag===13&&(r.flags|=16384))),rg(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){rg(n,ns);return}e=n.return;var a=lS(n.alternate,n,Ua);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);yn===0&&(yn=5)}function rg(e,n){do{var a=cS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);yn=6,Me=null}function og(e,n,a,r,u,f,_,R,F){e.cancelPendingCommit=null;do Jl();while(On!==0);if((He&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Uu,rn(e,a,f,_,R,F),e===ln&&(Me=ln=null,Ae=0),br=n,ss=e,Na=a,Gf=f,Hf=u,K0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yS(J,function(){return hg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=B.p,B.p=2,_=He,He|=4;try{uS(e,n,a)}finally{He=_,B.p=u,O.T=r}}On=1,lg(),cg(),ug()}}function lg(){if(On===1){On=0;var e=ss,n=br,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=He;He|=4;try{V0(n,e);var f=nh,_=jp(e.containerInfo),R=f.focusedElem,F=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Yp(R.ownerDocument.documentElement,R)){if(F!==null&&Au(R)){var it=F.start,dt=F.end;if(dt===void 0&&(dt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(dt,R.value.length);else{var xt=R.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),Zt=R.textContent.length,oe=Math.min(F.start,Zt),sn=F.end===void 0?oe:Math.min(F.end,Zt);!lt.extend&&oe>sn&&(_=sn,sn=oe,oe=_);var Q=qp(R,oe),k=qp(R,sn);if(Q&&k&&(lt.rangeCount!==1||lt.anchorNode!==Q.node||lt.anchorOffset!==Q.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var nt=xt.createRange();nt.setStart(Q.node,Q.offset),lt.removeAllRanges(),oe>sn?(lt.addRange(nt),lt.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),lt.addRange(nt))}}}}for(xt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var _t=xt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}uc=!!eh,nh=eh=null}finally{He=u,B.p=r,O.T=a}}e.current=n,On=2}}function cg(){if(On===2){On=0;var e=ss,n=br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=He;He|=4;try{z0(e,n.alternate,n)}finally{He=u,B.p=r,O.T=a}}On=3}}function ug(){if(On===4||On===3){On=0,Fe();var e=ss,n=br,a=Na,r=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,br=ss=null,fg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(as=null),Tt(a),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,B.p=u}}(Na&3)!==0&&Jl(),sa(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Vf?Uo++:(Uo=0,Vf=e):Uo=0,No(0)}}function fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function Jl(){return lg(),cg(),ug(),hg()}function hg(){if(On!==5)return!1;var e=ss,n=Gf;Gf=0;var a=Tt(Na),r=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=Hf,Hf=null;var f=ss,_=Na;if(On=0,br=ss=null,Na=0,(He&6)!==0)throw Error(s(331));var R=He;if(He|=4,Y0(f.current),X0(f,f.current,_,a),He=R,No(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{B.p=u,O.T=r,fg(e,n)}}function dg(e,n,a){n=Di(a,n),n=Sf(e.stateNode,n,2),e=Ja(e,n,2),e!==null&&(ie(e,2),sa(e))}function Ke(e,n,a){if(e.tag===3)dg(e,e,a);else for(;n!==null;){if(n.tag===3){dg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(as===null||!as.has(r))){e=Di(a,e),a=p0(2),r=Ja(n,a,2),r!==null&&(m0(a,r,n,e),ie(r,2),sa(r));break}}n=n.return}}function Wf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new dS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(zf=!0,u.add(a),e=vS.bind(null,e,n,a),n.then(e,e))}function vS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ln===e&&(Ae&a)===a&&(yn===4||yn===3&&(Ae&62914560)===Ae&&300>wt()-ql?(He&2)===0&&Tr(e,0):Bf|=a,Er===Ae&&(Er=0)),sa(e)}function pg(e,n){n===0&&(n=yt()),e=ws(e,n),e!==null&&(ie(e,n),sa(e))}function xS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),pg(e,a)}function SS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),pg(e,a)}function yS(e,n){return q(e,n)}var $l=null,Rr=null,qf=!1,tc=!1,Yf=!1,os=0;function sa(e){e!==Rr&&e.next===null&&(Rr===null?$l=Rr=e:Rr=Rr.next=e),tc=!0,qf||(qf=!0,ES())}function No(e,n){if(!Yf&&tc){Yf=!0;do for(var a=!1,r=$l;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,vg(r,f))}else f=Ae,f=ht(r,r===ln?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,vg(r,f));r=r.next}while(a);Yf=!1}}function MS(){mg()}function mg(){tc=qf=!1;var e=0;os!==0&&LS()&&(e=os);for(var n=wt(),a=null,r=$l;r!==null;){var u=r.next,f=gg(r,n);f===0?(r.next=null,a===null?$l=u:a.next=u,u===null&&(Rr=a)):(a=r,(e!==0||(f&3)!==0)&&(tc=!0)),r=u}On!==0&&On!==5||No(e),os!==0&&(os=0)}function gg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-It(f),R=1<<_,F=u[_];F===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Nt(R,n)):F<=n&&(e.expiredLanes|=R),f&=~R}if(n=ln,a=Ae,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&un(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&un(r),Tt(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=Et;break;default:a=J}return r=_g.bind(null,e),a=q(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&un(r),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(On!==0&&On!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var r=Ae;return r=ht(e,e===ln?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(J0(e,r,n),gg(e,wt()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function vg(e,n){if(Jl())return null;J0(e,n,!0)}function ES(){PS(function(){(He&6)!==0?q(D,MS):mg()})}function jf(){if(os===0){var e=hr;e===0&&(e=le,le<<=1,(le&261888)===0&&(le=256)),os=e}return os}function xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function Sg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function bS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=xg((u[te]||null).action),_=r.submitter;_&&(n=(n=_[te]||null)?xg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new hl("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(os!==0){var F=_?Sg(u,_):new FormData(u);pf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=_?Sg(u,_):new FormData(u),pf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],TS=Kf.toLowerCase(),AS=Kf[0].toUpperCase()+Kf.slice(1);ki(TS,"on"+AS)}ki(Qp,"onAnimationEnd"),ki(Jp,"onAnimationIteration"),ki($p,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(Vx,"onTransitionRun"),ki(kx,"onTransitionStart"),ki(Xx,"onTransitionCancel"),ki(tm,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],F=R.instance,it=R.currentTarget;if(R=R.listener,F!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=F}else for(_=0;_<r.length;_++){if(R=r[_],F=R.instance,it=R.currentTarget,R=R.listener,F!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=F}}}}function Ee(e,n){var a=n[Ge];a===void 0&&(a=n[Ge]=new Set);var r=e+"__bubble";a.has(r)||(Mg(n,e,2,!1),a.add(r))}function Qf(e,n,a){var r=0;n&&(r|=4),Mg(a,e,r,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[ec]){e[ec]=!0,ei.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Qf("selectionchange",!1,n))}}function Mg(e,n,a,r){switch(Qg(n)){case 2:var u=ey;break;case 8:u=ny;break;default:u=dh}a=u.bind(null,n,a,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function $f(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Vn(R),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){r=f=_;continue t}R=R.parentNode}}r=r.return}Rp(function(){var it=f,dt=mu(a),xt=[];t:{var at=em.get(e);if(at!==void 0){var lt=hl,Zt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":lt=Sx;break;case"focusin":Zt="focus",lt=yu;break;case"focusout":Zt="blur",lt=yu;break;case"beforeblur":case"afterblur":lt=yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ex;break;case Qp:case Jp:case $p:lt=fx;break;case tm:lt=Tx;break;case"scroll":case"scrollend":lt=rx;break;case"wheel":lt=Rx;break;case"copy":case"cut":case"paste":lt=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Np;break;case"toggle":case"beforetoggle":lt=Cx}var oe=(n&4)!==0,sn=!oe&&(e==="scroll"||e==="scrollend"),Q=oe?at!==null?at+"Capture":null:at;oe=[];for(var k=it,nt;k!==null;){var _t=k;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||Q===null||(_t=to(k,Q),_t!=null&&oe.push(Oo(k,_t,nt))),sn)break;k=k.return}0<oe.length&&(at=new lt(at,Zt,null,a,dt),xt.push({event:at,listeners:oe}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==pu&&(Zt=a.relatedTarget||a.fromElement)&&(Vn(Zt)||Zt[Pe]))break t;if((lt||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(Zt=a.relatedTarget||a.toElement,lt=it,Zt=Zt?Vn(Zt):null,Zt!==null&&(sn=c(Zt),oe=Zt.tag,Zt!==sn||oe!==5&&oe!==27&&oe!==6)&&(Zt=null)):(lt=null,Zt=it),lt!==Zt)){if(oe=Dp,_t="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Np,_t="onPointerLeave",Q="onPointerEnter",k="pointer"),sn=lt==null?at:ri(lt),nt=Zt==null?at:ri(Zt),at=new oe(_t,k+"leave",lt,a,dt),at.target=sn,at.relatedTarget=nt,_t=null,Vn(dt)===it&&(oe=new oe(Q,k+"enter",Zt,a,dt),oe.target=nt,oe.relatedTarget=sn,_t=oe),sn=_t,lt&&Zt)e:{for(oe=wS,Q=lt,k=Zt,nt=0,_t=Q;_t;_t=oe(_t))nt++;_t=0;for(var ae=k;ae;ae=oe(ae))_t++;for(;0<nt-_t;)Q=oe(Q),nt--;for(;0<_t-nt;)k=oe(k),_t--;for(;nt--;){if(Q===k||k!==null&&Q===k.alternate){oe=Q;break e}Q=oe(Q),k=oe(k)}oe=null}else oe=null;lt!==null&&Eg(xt,at,lt,oe,!1),Zt!==null&&sn!==null&&Eg(xt,sn,Zt,oe,!0)}}t:{if(at=it?ri(it):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var ze=Gp;else if(Bp(at))if(Hp)ze=Fx;else{ze=zx;var $t=Ix}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?it&&ke(it.elementType)&&(ze=Gp):ze=Bx;if(ze&&(ze=ze(e,it))){Fp(xt,ze,a,dt);break t}$t&&$t(e,at,it),e==="focusout"&&it&&at.type==="number"&&it.memoizedProps.value!=null&&ye(at,"number",at.value)}switch($t=it?ri(it):window,e){case"focusin":(Bp($t)||$t.contentEditable==="true")&&(ar=$t,Ru=it,lo=null);break;case"focusout":lo=Ru=ar=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Zp(xt,a,dt);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Zp(xt,a,dt)}var ve;if(Eu)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else ir?Ip(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(Lp&&a.locale!=="ko"&&(ir||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&ir&&(ve=wp()):(Wa=dt,vu="value"in Wa?Wa.value:Wa.textContent,ir=!0)),$t=nc(it,Re),0<$t.length&&(Re=new Up(Re,e,null,a,dt),xt.push({event:Re,listeners:$t}),ve?Re.data=ve:(ve=zp(a),ve!==null&&(Re.data=ve)))),(ve=Ux?Nx(e,a):Lx(e,a))&&(Re=nc(it,"onBeforeInput"),0<Re.length&&($t=new Up("onBeforeInput","beforeinput",null,a,dt),xt.push({event:$t,listeners:Re}),$t.data=ve)),bS(xt,e,it,a,dt)}yg(xt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=to(e,a),u!=null&&r.unshift(Oo(e,u,f)),u=to(e,n),u!=null&&r.push(Oo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function wS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eg(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,F=R.alternate,it=R.stateNode;if(R=R.tag,F!==null&&F===r)break;R!==5&&R!==26&&R!==27||it===null||(F=it,u?(it=to(a,f),it!=null&&_.unshift(Oo(a,it,F))):u||(it=to(a,f),it!=null&&_.push(Oo(a,it,F)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var CS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(CS,`
`).replace(DS,"")}function Tg(e,n){return n=bg(n),bg(e)===n}function an(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||gi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&gi(e,""+r);break;case"className":Vt(e,"class",r);break;case"tabIndex":Vt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(e,a,r);break;case"style":Vi(e,r,f);break;case"data":if(n!=="object"){Vt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=bs(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&an(e,n,"name",u.name,u,null),an(e,n,"formEncType",u.formEncType,u,null),an(e,n,"formMethod",u.formMethod,u,null),an(e,n,"formTarget",u.formTarget,u,null)):(an(e,n,"encType",u.encType,u,null),an(e,n,"method",u.method,u,null),an(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=bs(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=_a);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),zt(e,"popover",r);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":zt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ea.get(a)||a,zt(e,a,r))}}function th(e,n,a,r,u,f){switch(a){case"style":Vi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?gi(e,r):(typeof r=="number"||typeof r=="bigint")&&gi(e,""+r);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"onClick":r!=null&&(e.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[te]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):zt(e,a,r)}}}function qn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,f,_,a,null)}}u&&an(e,n,"srcSet",a.srcSet,a,null),r&&an(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=f=_=u=null,F=null,it=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":_=dt;break;case"checked":F=dt;break;case"defaultChecked":it=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:an(e,n,r,dt,a,null)}}Kn(e,f,R,F,it,_,u,!1);return;case"select":Ee("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:an(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?Ln(e,!!r,n,!1):a!=null&&Ln(e,!!r,a,!0);return;case"textarea":Ee("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:an(e,n,_,R,a,null)}Hi(e,r,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:an(e,n,F,r,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(r=0;r<Lo.length;r++)Ee(Lo[r],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(r=a[it],r!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,it,r,a,null)}return;default:if(ke(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&th(e,n,dt,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&an(e,n,R,r,a,null))}function US(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,F=null,it=null,dt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=xt;default:r.hasOwnProperty(lt)||an(e,n,lt,null,r,xt)}}for(var at in r){var lt=r[at];if(xt=a[at],r.hasOwnProperty(at)&&(lt!=null||xt!=null))switch(at){case"type":f=lt;break;case"name":u=lt;break;case"checked":it=lt;break;case"defaultChecked":dt=lt;break;case"value":_=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&an(e,n,at,lt,r,xt)}}kt(e,_,R,F,it,dt,f,u);return;case"select":lt=_=R=at=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":lt=F;default:r.hasOwnProperty(f)||an(e,n,f,null,r,F)}for(u in r)if(f=r[u],F=a[u],r.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":at=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==F&&an(e,n,u,f,r,F)}n=R,a=_,r=lt,at!=null?Ln(e,!!a,at,!1):!!r!=!!a&&(n!=null?Ln(e,!!a,n,!0):Ln(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:an(e,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&an(e,n,_,u,r,f)}mi(e,at,lt);return;case"option":for(var Zt in a)if(at=a[Zt],a.hasOwnProperty(Zt)&&at!=null&&!r.hasOwnProperty(Zt))switch(Zt){case"selected":e.selected=!1;break;default:an(e,n,Zt,null,r,at)}for(F in r)if(at=r[F],lt=a[F],r.hasOwnProperty(F)&&at!==lt&&(at!=null||lt!=null))switch(F){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:an(e,n,F,at,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)at=a[oe],a.hasOwnProperty(oe)&&at!=null&&!r.hasOwnProperty(oe)&&an(e,n,oe,null,r,at);for(it in r)if(at=r[it],lt=a[it],r.hasOwnProperty(it)&&at!==lt&&(at!=null||lt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:an(e,n,it,at,r,lt)}return;default:if(ke(n)){for(var sn in a)at=a[sn],a.hasOwnProperty(sn)&&at!==void 0&&!r.hasOwnProperty(sn)&&th(e,n,sn,void 0,r,at);for(dt in r)at=r[dt],lt=a[dt],!r.hasOwnProperty(dt)||at===lt||at===void 0&&lt===void 0||th(e,n,dt,at,r,lt);return}}for(var Q in a)at=a[Q],a.hasOwnProperty(Q)&&at!=null&&!r.hasOwnProperty(Q)&&an(e,n,Q,null,r,at);for(xt in r)at=r[xt],lt=a[xt],!r.hasOwnProperty(xt)||at===lt||at==null&&lt==null||an(e,n,xt,at,r,lt)}function Ag(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&Ag(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var F=a[r],it=F.startTime;if(it>R)break;var dt=F.transferSize,xt=F.initiatorType;dt&&Ag(xt)&&(F=F.responseEnd,_+=dt*(F<R?1:(R-it)/(F-it)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eh=null,nh=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ih(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function LS(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(e){return Dg.resolve(null).then(e).catch(IS)}:Cg;function IS(e){setTimeout(function(){throw e})}function ls(e){return e==="head"}function Ug(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Ur(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[xn]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);Ur(n)}function Ng(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),Nn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[xn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Pi(e.nextSibling),e===null)break}return null}function BS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pi(e.nextSibling),e===null))return null;return e}function Lg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pi(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function FS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var lh=null;function Og(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Pg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ig(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nn(e)}var Ii=new Map,zg=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var La=B.d;B.d={f:GS,r:HS,D:VS,C:kS,L:XS,m:WS,X:YS,S:qS,M:jS};function GS(){var e=La.f(),n=Zl();return e||n}function HS(e){var n=Zn(e);n!==null&&n.tag===5&&n.type==="form"?t0(n):La.r(e)}var wr=typeof document>"u"?null:document;function Bg(e,n,a){var r=wr;if(r&&typeof n=="string"&&n){var u=Ye(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),zg.has(u)||(zg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),qn(n,"link",e),Ve(n),r.head.appendChild(n)))}}function VS(e){La.D(e),Bg("dns-prefetch",e,null)}function kS(e,n){La.C(e,n),Bg("preconnect",e,n)}function XS(e,n,a){La.L(e,n,a);var r=wr;if(r&&e&&n){var u='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ye(a.imageSizes)+'"]')):u+='[href="'+Ye(e)+'"]';var f=u;switch(n){case"style":f=Cr(e);break;case"script":f=Dr(e)}Ii.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ii.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Io(f))||n==="script"&&r.querySelector(zo(f))||(n=r.createElement("link"),qn(n,"link",e),Ve(n),r.head.appendChild(n)))}}function WS(e,n){La.m(e,n);var a=wr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ye(r)+'"][href="'+Ye(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Dr(e)}if(!Ii.has(f)&&(e=v({rel:"modulepreload",href:e},n),Ii.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}r=a.createElement("link"),qn(r,"link",e),Ve(r),a.head.appendChild(r)}}}function qS(e,n,a){La.S(e,n,a);var r=wr;if(r&&e){var u=En(r).hoistableStyles,f=Cr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(Io(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ii.get(f))&&ch(e,a);var F=_=r.createElement("link");Ve(F),qn(F,"link",e),F._p=new Promise(function(it,dt){F.onload=it,F.onerror=dt}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function YS(e,n){La.X(e,n);var a=wr;if(a&&e){var r=En(a).hoistableScripts,u=Dr(e),f=r.get(u);f||(f=a.querySelector(zo(u)),f||(e=v({src:e,async:!0},n),(n=Ii.get(u))&&uh(e,n),f=a.createElement("script"),Ve(f),qn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function jS(e,n){La.M(e,n);var a=wr;if(a&&e){var r=En(a).hoistableScripts,u=Dr(e),f=r.get(u);f||(f=a.querySelector(zo(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Ii.get(u))&&uh(e,n),f=a.createElement("script"),Ve(f),qn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Fg(e,n,a,r){var u=(u=st.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Cr(a.href),a=En(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cr(a.href);var f=En(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Io(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ii.set(e,a),f||ZS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Dr(a),a=En(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Cr(e){return'href="'+Ye(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ZS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),qn(n,"link",a),Ve(n),e.head.appendChild(n))}function Dr(e){return'[src="'+Ye(e)+'"]'}function zo(e){return"script[async]"+e}function Hg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(r)return n.instance=r,Ve(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ve(r),qn(r,"style",u),sc(r,a.precedence,e),n.instance=r;case"stylesheet":u=Cr(a.href);var f=e.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,Ve(f),f;r=Gg(a),(u=Ii.get(u))&&ch(r,u),f=(e.ownerDocument||e).createElement("link"),Ve(f);var _=f;return _._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),qn(f,"link",r),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=Dr(a.src),(u=e.querySelector(zo(f)))?(n.instance=u,Ve(u),u):(r=a,(u=Ii.get(f))&&(r=v({},a),uh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ve(u),qn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,sc(r,a.precedence,e));return n.instance}function sc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Vg(e,n,a){if(rc===null){var r=new Map,u=rc=new Map;u.set(a,r)}else u=rc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[xn]||f[Yt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function kg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function KS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function QS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Cr(r.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ve(f);return}f=n.ownerDocument||n,r=Gg(r),(u=Ii.get(u))&&ch(r,u),f=f.createElement("link"),Ve(f);var _=f;_._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),qn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var fh=0;function JS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&fh===0&&(fh=62500*NS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>fh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach($S,e),lc=null,oc.call(e))}function $S(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var r=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=oc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:I,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function ty(e,n,a,r,u,f,_,R,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.hiddenUpdates=jt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Wg(e,n,a,r,u,f,_,R,F,it,dt,xt){return e=new ty(e,n,a,_,F,it,dt,xt,R),n=1,f===!0&&(n|=24),f=vi(3,null,null,n),e.current=f,f.stateNode=e,n=ku(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Yu(f),e}function qg(e){return e?(e=or,e):or}function Yg(e,n,a,r,u,f){u=qg(u),r.context===null?r.context=u:r.pendingContext=u,r=Qa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ja(e,r,n),a!==null&&(hi(a,e,n),go(a,e,n))}function jg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function hh(e,n){jg(e,n),(e=e.alternate)&&jg(e,n)}function Zg(e){if(e.tag===13||e.tag===31){var n=ws(e,67108864);n!==null&&hi(n,e,67108864),hh(e,67108864)}}function Kg(e){if(e.tag===13||e.tag===31){var n=Ei();n=ta(n);var a=ws(e,n);a!==null&&hi(a,e,n),hh(e,n)}}var uc=!0;function ey(e,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=2,dh(e,n,a,r)}finally{B.p=f,O.T=u}}function ny(e,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=8,dh(e,n,a,r)}finally{B.p=f,O.T=u}}function dh(e,n,a,r){if(uc){var u=ph(r);if(u===null)$f(e,n,r,fc,a),Jg(e,r);else if(ay(u,e,n,a,r))r.stopPropagation();else if(Jg(e,r),n&4&&-1<iy.indexOf(e)){for(;u!==null;){var f=Zn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=At(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var F=1<<31-It(_);R.entanglements[1]|=F,_&=~F}sa(f),(He&6)===0&&(Yl=wt()+500,No(0))}}break;case 31:case 13:R=ws(f,2),R!==null&&hi(R,f,2),Zl(),hh(f,2)}if(f=ph(r),f===null&&$f(e,n,r,fc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else $f(e,n,r,null,a)}}function ph(e){return e=mu(e),mh(e)}var fc=null;function mh(e){if(fc=null,e=Vn(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cn()){case D:return 2;case E:return 8;case J:case mt:return 32;case Et:return 268435456;default:return 32}default:return 32}}var gh=!1,cs=null,us=null,fs=null,Fo=new Map,Go=new Map,hs=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jg(e,n){switch(e){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Ho(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Zn(n),n!==null&&Zg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ay(e,n,a,r,u){switch(n){case"focusin":return cs=Ho(cs,e,n,a,r,u),!0;case"dragenter":return us=Ho(us,e,n,a,r,u),!0;case"mouseover":return fs=Ho(fs,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Ho(Fo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Ho(Go.get(f)||null,e,n,a,r,u)),!0}return!1}function $g(e){var n=Vn(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,re(e.priority,function(){Kg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,re(e.priority,function(){Kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);pu=r,a.target.dispatchEvent(r),pu=null}else return n=Zn(a),n!==null&&Zg(n),e.blockedOn=a,!1;n.shift()}return!0}function t_(e,n,a){hc(e)&&a.delete(n)}function sy(){gh=!1,cs!==null&&hc(cs)&&(cs=null),us!==null&&hc(us)&&(us=null),fs!==null&&hc(fs)&&(fs=null),Fo.forEach(t_),Go.forEach(t_)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,gh||(gh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sy)))}var pc=null;function e_(e){pc!==e&&(pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(mh(r||a)===null)continue;break}var f=Zn(a);f!==null&&(e.splice(n,3),n-=3,pf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Ur(e){function n(F){return dc(F,e)}cs!==null&&dc(cs,e),us!==null&&dc(us,e),fs!==null&&dc(fs,e),Fo.forEach(n),Go.forEach(n);for(var a=0;a<hs.length;a++){var r=hs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<hs.length&&(a=hs[0],a.blockedOn===null);)$g(a),a.blockedOn===null&&hs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[te]||null;if(typeof f=="function")_||e_(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[te]||null)R=_.formAction;else if(mh(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),e_(a)}}}function n_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _h(e){this._internalRoot=e}mc.prototype.render=_h.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Ei();Yg(a,r,e,n,null,null)},mc.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yg(e.current,2,null,e,null,null),Zl(),n[Pe]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=qt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<hs.length&&n!==0&&n<hs[a].priority;a++);hs.splice(a,0,e),a===0&&$g(e)}};var i_=t.version;if(i_!=="19.2.6")throw Error(s(527,i_,"19.2.6"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var ry={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ut=gc.inject(ry),ft=gc}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=u0,f=f0,_=h0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Wg(e,1,!1,null,null,a,r,null,u,f,_,n_),e[Pe]=n.current,Jf(e),new _h(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=u0,_=f0,R=h0,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Wg(e,1,!0,n,a??null,r,u,F,f,_,R,n_),n.context=qg(null),a=n.current,r=Ei(),r=ta(r),u=Qa(r),u.callback=null,Ja(a,u,r),a=r,n.current.lanes=a,ie(n,a),sa(n),e[Pe]=n.current,Jf(e),new mc(n)},ko.version="19.2.6",ko}var d_;function gy(){if(d_)return Sh.exports;d_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Sh.exports=my(),Sh.exports}var _y=gy(),gn=(o=>(o.Punch="punch",o.Grab="grab",o.Dodge="dodge",o))(gn||{}),Yn=(o=>(o.Menu="menu",o.Playing="playing",o.GameOver="game_over",o))(Yn||{});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="184",vy=0,p_=1,xy=2,qc=1,Sy=2,Jo=3,Ms=0,pi=1,Ji=2,Ga=0,qr=1,rd=2,m_=3,g_=4,yy=5,Ys=100,My=101,Ey=102,by=103,Ty=104,Ay=200,Ry=201,wy=202,Cy=203,od=204,ld=205,Dy=206,Uy=207,Ny=208,Ly=209,Oy=210,Py=211,Iy=212,zy=213,By=214,cd=0,ud=1,fd=2,jr=3,hd=4,dd=5,pd=6,md=7,bv=0,Fy=1,Gy=2,ha=0,Tv=1,Av=2,Rv=3,wv=4,Cv=5,Dv=6,Uv=7,Nv=300,Qs=301,Zr=302,bh=303,Th=304,cu=306,gd=1e3,Fa=1001,_d=1002,jn=1003,Hy=1004,_c=1005,ti=1006,Ah=1007,Zs=1008,Ri=1009,Lv=1010,Ov=1011,il=1012,ap=1013,pa=1014,ua=1015,Va=1016,sp=1017,rp=1018,al=1020,Pv=35902,Iv=35899,zv=1021,Bv=1022,$i=1023,ka=1026,Ks=1027,Fv=1028,op=1029,Js=1030,lp=1031,cp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,vd=35840,xd=35841,Sd=35842,yd=35843,Md=36196,Ed=37492,bd=37496,Td=37488,Ad=37489,tu=37490,Rd=37491,wd=37808,Cd=37809,Dd=37810,Ud=37811,Nd=37812,Ld=37813,Od=37814,Pd=37815,Id=37816,zd=37817,Bd=37818,Fd=37819,Gd=37820,Hd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,eu=36285,Yd=36286,Vy=3200,jd=0,ky=1,Ss="",Bi="srgb",nu="srgb-linear",iu="linear",Je="srgb",Nr=7680,__=519,Xy=512,Wy=513,qy=514,up=515,Yy=516,jy=517,fp=518,Zy=519,v_=35044,x_="300 es",fa=2e3,sl=2001;function Ky(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function au(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Qy(){const o=au("canvas");return o.style.display="block",o}const S_={};function y_(...o){const t="THREE."+o.shift();console.log(t,...o)}function Gv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ce(...o){o=Gv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Le(...o){o=Gv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Zd(...o){const t=o.join(" ");t in S_||(S_[t]=!0,ce(...o))}function Jy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const $y={[cd]:ud,[fd]:pd,[hd]:md,[jr]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:jr};class $s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Kd=180/Math.PI;function rl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Jn[o&255]+Jn[o>>8&255]+Jn[o>>16&255]+Jn[o>>24&255]+"-"+Jn[t&255]+Jn[t>>8&255]+"-"+Jn[t>>16&15|64]+Jn[t>>24&255]+"-"+Jn[i&63|128]+Jn[i>>8&255]+"-"+Jn[i>>16&255]+Jn[i>>24&255]+Jn[s&255]+Jn[s>>8&255]+Jn[s>>16&255]+Jn[s>>24&255]).toLowerCase()}function Ue(o,t,i){return Math.max(t,Math.min(i,o))}function tM(o,t){return(o%t+t)%t}function Rh(o,t,i){return(1-i)*o+i*t}function Xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function di(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const yp=class yp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yp.prototype.isVector2=!0;let Ne=yp;class Jr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],S=s[l+2],v=s[l+3],g=c[h+0],y=c[h+1],b=c[h+2],w=c[h+3];if(v!==w||m!==g||d!==y||S!==b){let M=m*g+d*y+S*b+v*w;M<0&&(g=-g,y=-y,b=-b,w=-w,M=-M);let x=1-p;if(M<.9995){const C=Math.acos(M),I=Math.sin(C);x=Math.sin(x*C)/I,p=Math.sin(p*C)/I,m=m*x+g*p,d=d*x+y*p,S=S*x+b*p,v=v*x+w*p}else{m=m*x+g*p,d=d*x+y*p,S=S*x+b*p,v=v*x+w*p;const C=1/Math.sqrt(m*m+d*d+S*S+v*v);m*=C,d*=C,S*=C,v*=C}}t[i]=m,t[i+1]=d,t[i+2]=S,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],S=s[l+3],v=c[h],g=c[h+1],y=c[h+2],b=c[h+3];return t[i]=p*b+S*v+m*y-d*g,t[i+1]=m*b+S*g+d*v-p*y,t[i+2]=d*b+S*y+p*g-m*v,t[i+3]=S*b-p*v-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),S=p(l/2),v=p(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*S*v+d*y*b,this._y=d*y*v-g*S*b,this._z=d*S*b+g*y*v,this._w=d*S*v-g*y*b;break;case"YXZ":this._x=g*S*v+d*y*b,this._y=d*y*v-g*S*b,this._z=d*S*b-g*y*v,this._w=d*S*v+g*y*b;break;case"ZXY":this._x=g*S*v-d*y*b,this._y=d*y*v+g*S*b,this._z=d*S*b+g*y*v,this._w=d*S*v-g*y*b;break;case"ZYX":this._x=g*S*v-d*y*b,this._y=d*y*v+g*S*b,this._z=d*S*b-g*y*v,this._w=d*S*v+g*y*b;break;case"YZX":this._x=g*S*v+d*y*b,this._y=d*y*v+g*S*b,this._z=d*S*b-g*y*v,this._w=d*S*v-g*y*b;break;case"XZY":this._x=g*S*v-d*y*b,this._y=d*y*v-g*S*b,this._z=d*S*b+g*y*v,this._w=d*S*v+g*y*b;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],S=i[6],v=i[10],g=s+p+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(S-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>v){const y=2*Math.sqrt(1+s-p-v);this._w=(S-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>v){const y=2*Math.sqrt(1+p-s-v);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+v-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,S=i._w;return this._x=s*S+h*p+l*d-c*m,this._y=l*S+h*m+c*p-s*d,this._z=c*S+h*d+s*m-l*p,this._w=h*S-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),S=Math.sin(d);m=Math.sin(m*d)/S,i=Math.sin(i*d)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mp=class Mp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(M_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(M_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),S=2*(p*i-c*l),v=2*(c*s-h*i);return this.x=i+m*d+h*v-p*S,this.y=s+m*S+p*d-c*v,this.z=l+m*v+c*S-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mp.prototype.isVector3=!0;let Y=Mp;const wh=new Y,M_=new Jr,Ep=class Ep{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=h,S[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],S=s[4],v=s[7],g=s[2],y=s[5],b=s[8],w=l[0],M=l[3],x=l[6],C=l[1],I=l[4],L=l[7],H=l[2],P=l[5],N=l[8];return c[0]=h*w+p*C+m*H,c[3]=h*M+p*I+m*P,c[6]=h*x+p*L+m*N,c[1]=d*w+S*C+v*H,c[4]=d*M+S*I+v*P,c[7]=d*x+S*L+v*N,c[2]=g*w+y*C+b*H,c[5]=g*M+y*I+b*P,c[8]=g*x+y*L+b*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],S=t[8];return i*h*S-i*p*d-s*c*S+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],S=t[8],v=S*h-p*d,g=p*m-S*c,y=d*c-h*m,b=i*v+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=v*w,t[1]=(l*d-S*s)*w,t[2]=(p*s-l*h)*w,t[3]=g*w,t[4]=(S*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=y*w,t[7]=(s*m-d*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Ch.makeScale(t,i)),this}rotate(t){return this.premultiply(Ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ep.prototype.isMatrix3=!0;let de=Ep;const Ch=new de,E_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const o={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Je&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ss?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[nu]:{primaries:t,whitePoint:s,transfer:iu,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:t,whitePoint:s,transfer:Je,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),o}const De=eM();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Lr;class nM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Lr===void 0&&(Lr=au("canvas")),Lr.width=t.width,Lr.height=t.height;const l=Lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=au("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ha(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ha(i[s]/255)*255):i[s]=Ha(i[s]);return{data:i,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iM=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Dh(l[h].image)):c.push(Dh(l[h]))}else c=Dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Dh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let aM=0;const Uh=new Y;class ai extends $s{constructor(t=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=Fa,l=Fa,c=ti,h=Zs,p=$i,m=Ri,d=ai.DEFAULT_ANISOTROPY,S=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=rl(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gd:t.x=t.x-Math.floor(t.x);break;case Fa:t.x=t.x<0?0:1;break;case _d:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gd:t.y=t.y-Math.floor(t.y);break;case Fa:t.y=t.y<0?0:1;break;case _d:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Nv;ai.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],S=m[4],v=m[8],g=m[1],y=m[5],b=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(S-g)<.01&&Math.abs(v-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(S+g)<.1&&Math.abs(v+w)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(d+1)/2,L=(y+1)/2,H=(x+1)/2,P=(S+g)/4,N=(v+w)/4,T=(b+M)/4;return I>L&&I>H?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=P/s,c=N/s):L>H?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=P/l,c=T/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=N/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(v-w)*(v-w)+(g-S)*(g-S));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(v-w)/C,this.z=(g-S)/C,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let Mn=bp;class sM extends $s{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Mn(0,0,t,i),this.scissorTest=!1,this.viewport=new Mn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ai(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class da extends sM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Hv extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=jn,this.minFilter=jn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=jn,this.minFilter=jn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(t,i,s,l,c,h,p,m,d,S,v,g,y,b,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,S,v,g,y,b,w,M)}set(t,i,s,l,c,h,p,m,d,S,v,g,y,b,w,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=S,x[10]=v,x[14]=g,x[3]=y,x[7]=b,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Or.setFromMatrixColumn(t,0).length(),c=1/Or.setFromMatrixColumn(t,1).length(),h=1/Or.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=h*S,y=h*v,b=p*S,w=p*v;i[0]=m*S,i[4]=-m*v,i[8]=d,i[1]=y+b*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=b+y*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*S,y=m*v,b=d*S,w=d*v;i[0]=g+w*p,i[4]=b*p-y,i[8]=h*d,i[1]=h*v,i[5]=h*S,i[9]=-p,i[2]=y*p-b,i[6]=w+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*S,y=m*v,b=d*S,w=d*v;i[0]=g-w*p,i[4]=-h*v,i[8]=b+y*p,i[1]=y+b*p,i[5]=h*S,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*S,y=h*v,b=p*S,w=p*v;i[0]=m*S,i[4]=b*d-y,i[8]=g*d+w,i[1]=m*v,i[5]=w*d+g,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*d,b=p*m,w=p*d;i[0]=m*S,i[4]=w-g*v,i[8]=b*v+y,i[1]=v,i[5]=h*S,i[9]=-p*S,i[2]=-d*S,i[6]=y*v+b,i[10]=g-w*v}else if(t.order==="XZY"){const g=h*m,y=h*d,b=p*m,w=p*d;i[0]=m*S,i[4]=-v,i[8]=d*S,i[1]=g*v+w,i[5]=h*S,i[9]=y*v-b,i[2]=b*v-y,i[6]=p*S,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oM,t,lM)}lookAt(t,i,s){const l=this.elements;return bi.subVectors(t,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),ps.crossVectors(s,bi),ps.lengthSq()===0&&(Math.abs(s.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),ps.crossVectors(s,bi)),ps.normalize(),vc.crossVectors(bi,ps),l[0]=ps.x,l[4]=vc.x,l[8]=bi.x,l[1]=ps.y,l[5]=vc.y,l[9]=bi.y,l[2]=ps.z,l[6]=vc.z,l[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],S=s[1],v=s[5],g=s[9],y=s[13],b=s[2],w=s[6],M=s[10],x=s[14],C=s[3],I=s[7],L=s[11],H=s[15],P=l[0],N=l[4],T=l[8],U=l[12],Z=l[1],G=l[5],j=l[9],ot=l[13],ct=l[2],X=l[6],O=l[10],B=l[14],rt=l[3],pt=l[7],Mt=l[11],z=l[15];return c[0]=h*P+p*Z+m*ct+d*rt,c[4]=h*N+p*G+m*X+d*pt,c[8]=h*T+p*j+m*O+d*Mt,c[12]=h*U+p*ot+m*B+d*z,c[1]=S*P+v*Z+g*ct+y*rt,c[5]=S*N+v*G+g*X+y*pt,c[9]=S*T+v*j+g*O+y*Mt,c[13]=S*U+v*ot+g*B+y*z,c[2]=b*P+w*Z+M*ct+x*rt,c[6]=b*N+w*G+M*X+x*pt,c[10]=b*T+w*j+M*O+x*Mt,c[14]=b*U+w*ot+M*B+x*z,c[3]=C*P+I*Z+L*ct+H*rt,c[7]=C*N+I*G+L*X+H*pt,c[11]=C*T+I*j+L*O+H*Mt,c[15]=C*U+I*ot+L*B+H*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],S=t[2],v=t[6],g=t[10],y=t[14],b=t[3],w=t[7],M=t[11],x=t[15],C=m*y-d*g,I=p*y-d*v,L=p*g-m*v,H=h*y-d*S,P=h*g-m*S,N=h*v-p*S;return i*(w*C-M*I+x*L)-s*(b*C-M*H+x*P)+l*(b*I-w*H+x*N)-c*(b*L-w*P+M*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],S=t[8],v=t[9],g=t[10],y=t[11],b=t[12],w=t[13],M=t[14],x=t[15],C=i*p-s*h,I=i*m-l*h,L=i*d-c*h,H=s*m-l*p,P=s*d-c*p,N=l*d-c*m,T=S*w-v*b,U=S*M-g*b,Z=S*x-y*b,G=v*M-g*w,j=v*x-y*w,ot=g*x-y*M,ct=C*ot-I*j+L*G+H*Z-P*U+N*T;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ct;return t[0]=(p*ot-m*j+d*G)*X,t[1]=(l*j-s*ot-c*G)*X,t[2]=(w*N-M*P+x*H)*X,t[3]=(g*P-v*N-y*H)*X,t[4]=(m*Z-h*ot-d*U)*X,t[5]=(i*ot-l*Z+c*U)*X,t[6]=(M*L-b*N-x*I)*X,t[7]=(S*N-g*L+y*I)*X,t[8]=(h*j-p*Z+d*T)*X,t[9]=(s*Z-i*j-c*T)*X,t[10]=(b*P-w*L+x*C)*X,t[11]=(v*L-S*P-y*C)*X,t[12]=(p*U-h*G-m*T)*X,t[13]=(i*G-s*U+l*T)*X,t[14]=(w*I-b*H-M*C)*X,t[15]=(S*H-v*I+g*C)*X,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,S=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,S*p+s,S*m-l*h,0,d*m-l*p,S*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,S=h+h,v=p+p,g=c*d,y=c*S,b=c*v,w=h*S,M=h*v,x=p*v,C=m*d,I=m*S,L=m*v,H=s.x,P=s.y,N=s.z;return l[0]=(1-(w+x))*H,l[1]=(y+L)*H,l[2]=(b-I)*H,l[3]=0,l[4]=(y-L)*P,l[5]=(1-(g+x))*P,l[6]=(M+C)*P,l[7]=0,l[8]=(b+I)*N,l[9]=(M-C)*N,l[10]=(1-(g+w))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Or.set(l[0],l[1],l[2]).length();const p=Or.set(l[4],l[5],l[6]).length(),m=Or.set(l[8],l[9],l[10]).length();c<0&&(h=-h),qi.copy(this);const d=1/h,S=1/p,v=1/m;return qi.elements[0]*=d,qi.elements[1]*=d,qi.elements[2]*=d,qi.elements[4]*=S,qi.elements[5]*=S,qi.elements[6]*=S,qi.elements[8]*=v,qi.elements[9]*=v,qi.elements[10]*=v,i.setFromRotationMatrix(qi),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=fa,m=!1){const d=this.elements,S=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,w;if(m)b=c/(h-c),w=h*c/(h-c);else if(p===fa)b=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===sl)b=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=S,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=fa,m=!1){const d=this.elements,S=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,w;if(m)b=1/(h-c),w=h/(h-c);else if(p===fa)b=-2/(h-c),w=-(h+c)/(h-c);else if(p===sl)b=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=S,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};lu.prototype.isMatrix4=!0;let _n=lu;const Or=new Y,qi=new _n,oM=new Y(0,0,0),lM=new Y(1,1,1),ps=new Y,vc=new Y,bi=new Y,T_=new _n,A_=new Jr;class Es{constructor(t=0,i=0,s=0,l=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],S=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ue(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Ue(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return T_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cM=0;const R_=new Y,Pr=new Jr,Oa=new _n,xc=new Y,Wo=new Y,uM=new Y,fM=new Jr,w_=new Y(1,0,0),C_=new Y(0,1,0),D_=new Y(0,0,1),U_={type:"added"},hM={type:"removed"},Ir={type:"childadded",child:null},Nh={type:"childremoved",child:null};class Gn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new Y,i=new Es,s=new Jr,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new _n},normalMatrix:{value:new de}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(Wo,xc,this.up):Oa.lookAt(xc,Wo,this.up),this.quaternion.setFromRotationMatrix(Oa),l&&(Oa.extractRotation(l.matrixWorld),Pr.setFromRotationMatrix(Oa),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hM),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,uM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,fM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,S=m.length;d<S;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),S=h(t.images),v=h(t.shapes),g=h(t.skeletons),y=h(t.animations),b=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const S=p[d];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new Y(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qi extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(d,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=S.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&g>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Qi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Oh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=tM(t,1),i=Ue(i,0,1),s=Ue(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Oh(h,c,t+1/3),this.g=Oh(h,c,t),this.b=Oh(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Bi){function s(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Bi){const s=Vv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bi){return De.workingToColorSpace($n.copy(this),t),Math.round(Ue($n.r*255,0,255))*65536+Math.round(Ue($n.g*255,0,255))*256+Math.round(Ue($n.b*255,0,255))}getHexString(t=Bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace($n.copy(this),i);const s=$n.r,l=$n.g,c=$n.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const S=(p+h)/2;if(p===h)m=0,d=0;else{const v=h-p;switch(d=S<=.5?v/(h+p):v/(2-h-p),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=S,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace($n.copy(this),i),t.r=$n.r,t.g=$n.g,t.b=$n.b,t}getStyle(t=Bi){De.workingToColorSpace($n.copy(this),t);const i=$n.r,s=$n.g,l=$n.b;return t!==Bi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+i,ms.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ms),t.getHSL(Sc);const s=Rh(ms.h,Sc.h,i),l=Rh(ms.s,Sc.s,i),c=Rh(ms.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new be;be.NAMES=Vv;class pp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new be(t),this.near=i,this.far=s}clone(){return new pp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pM extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yi=new Y,Pa=new Y,Ph=new Y,Ia=new Y,zr=new Y,Br=new Y,N_=new Y,Ih=new Y,zh=new Y,Bh=new Y,Fh=new Mn,Gh=new Mn,Hh=new Mn;class Fi{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Yi.subVectors(t,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Yi.subVectors(l,i),Pa.subVectors(s,i),Ph.subVectors(t,i);const h=Yi.dot(Yi),p=Yi.dot(Pa),m=Yi.dot(Ph),d=Pa.dot(Pa),S=Pa.dot(Ph),v=h*d-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(d*m-p*S)*g,b=(h*S-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,Ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ia.x),m.addScaledVector(h,Ia.y),m.addScaledVector(p,Ia.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Fh.setScalar(0),Gh.setScalar(0),Hh.setScalar(0),Fh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,s),Hh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Fh,c.x),h.addScaledVector(Gh,c.y),h.addScaledVector(Hh,c.z),h}static isFrontFacing(t,i,s,l){return Yi.subVectors(s,i),Pa.subVectors(t,i),Yi.cross(Pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Yi.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;zr.subVectors(l,s),Br.subVectors(c,s),Ih.subVectors(t,s);const m=zr.dot(Ih),d=Br.dot(Ih);if(m<=0&&d<=0)return i.copy(s);zh.subVectors(t,l);const S=zr.dot(zh),v=Br.dot(zh);if(S>=0&&v<=S)return i.copy(l);const g=m*v-S*d;if(g<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(zr,h);Bh.subVectors(t,c);const y=zr.dot(Bh),b=Br.dot(Bh);if(b>=0&&y<=b)return i.copy(c);const w=y*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Br,p);const M=S*b-y*v;if(M<=0&&v-S>=0&&y-b>=0)return N_.subVectors(c,l),p=(v-S)/(v-S+(y-b)),i.copy(l).addScaledVector(N_,p);const x=1/(M+w+g);return h=w*x,p=g*x,i.copy(s).addScaledVector(zr,h).addScaledVector(Br,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ol{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ji.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ji.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ji.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,ji):ji.fromBufferAttribute(c,h),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Mc.subVectors(this.max,qo),Fr.subVectors(t.a,qo),Gr.subVectors(t.b,qo),Hr.subVectors(t.c,qo),gs.subVectors(Gr,Fr),_s.subVectors(Hr,Gr),Hs.subVectors(Fr,Hr);let i=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-Hs.z,Hs.y,gs.z,0,-gs.x,_s.z,0,-_s.x,Hs.z,0,-Hs.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-Hs.y,Hs.x,0];return!Vh(i,Fr,Gr,Hr,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Vh(i,Fr,Gr,Hr,Mc))?!1:(Ec.crossVectors(gs,_s),i=[Ec.x,Ec.y,Ec.z],Vh(i,Fr,Gr,Hr,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ji=new Y,yc=new ol,Fr=new Y,Gr=new Y,Hr=new Y,gs=new Y,_s=new Y,Hs=new Y,qo=new Y,Mc=new Y,Ec=new Y,Vs=new Y;function Vh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Vs.fromArray(o,c);const p=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),d=i.dot(Vs),S=s.dot(Vs);if(Math.max(-Math.max(m,d,S),Math.min(m,d,S))>p)return!1}return!0}const Un=new Y,bc=new Ne;let mM=0;class Gi extends $s{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=v_,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix3(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix4(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyNormalMatrix(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.transformDirection(t),this.setXYZ(i,Un.x,Un.y,Un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=di(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=di(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=di(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=di(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=di(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=di(i,this.array),s=di(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=di(i,this.array),s=di(s,this.array),l=di(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=di(i,this.array),s=di(s,this.array),l=di(l,this.array),c=di(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==v_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class kv extends Gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Xv extends Gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $e extends Gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const gM=new ol,Yo=new Y,kh=new Y;class ll{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):gM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(kh)),this.expandByPoint(Yo.copy(t.center).sub(kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _M=0;const zi=new _n,Xh=new Gn,Vr=new Y,Ti=new ol,jo=new ol,Fn=new Y;class zn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ky(t)?Xv:kv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,i,s){return zi.makeTranslation(t,i,s),this.applyMatrix4(zi),this}scale(t,i,s){return zi.makeScale(t,i,s),this.applyMatrix4(zi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $e(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];jo.setFromBufferAttribute(p),this.morphTargetsRelative?(Fn.addVectors(Ti.min,jo.min),Ti.expandByPoint(Fn),Fn.addVectors(Ti.max,jo.max),Ti.expandByPoint(Fn)):(Ti.expandByPoint(jo.min),Ti.expandByPoint(jo.max))}Ti.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Fn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Fn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,S=p.count;d<S;d++)Fn.fromBufferAttribute(p,d),m&&(Vr.fromBufferAttribute(t,d),Fn.add(Vr)),l=Math.max(l,s.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new Y,m[T]=new Y;const d=new Y,S=new Y,v=new Y,g=new Ne,y=new Ne,b=new Ne,w=new Y,M=new Y;function x(T,U,Z){d.fromBufferAttribute(s,T),S.fromBufferAttribute(s,U),v.fromBufferAttribute(s,Z),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,U),b.fromBufferAttribute(c,Z),S.sub(d),v.sub(d),y.sub(g),b.sub(g);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(w.copy(S).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(S,-b.x).multiplyScalar(G),p[T].add(w),p[U].add(w),p[Z].add(w),m[T].add(M),m[U].add(M),m[Z].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,U=C.length;T<U;++T){const Z=C[T],G=Z.start,j=Z.count;for(let ot=G,ct=G+j;ot<ct;ot+=3)x(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const I=new Y,L=new Y,H=new Y,P=new Y;function N(T){H.fromBufferAttribute(l,T),P.copy(H);const U=p[T];I.copy(U),I.sub(H.multiplyScalar(H.dot(U))).normalize(),L.crossVectors(P,U);const G=L.dot(m[T])<0?-1:1;h.setXYZW(T,I.x,I.y,I.z,G)}for(let T=0,U=C.length;T<U;++T){const Z=C[T],G=Z.start,j=Z.count;for(let ot=G,ct=G+j;ot<ct;ot+=3)N(t.getX(ot+0)),N(t.getX(ot+1)),N(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Y,c=new Y,h=new Y,p=new Y,m=new Y,d=new Y,S=new Y,v=new Y;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(S),m.add(S),d.add(S),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Fn.fromBufferAttribute(t,i),Fn.normalize(),t.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(p,m){const d=p.array,S=p.itemSize,v=p.normalized,g=new d.constructor(m.length*S);let y=0,b=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*S;for(let x=0;x<S;x++)g[b++]=d[y++]}return new Gi(g,S,v)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let S=0,v=d.length;S<v;S++){const g=d[S],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],S=[];for(let v=0,g=d.length;v<g;v++){const y=d[v];S.push(y.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const S=l[d];this.setAttribute(d,S.clone(i))}const c=t.morphAttributes;for(const d in c){const S=[],v=c[d];for(let g=0,y=v.length;g<y;g++)S.push(v[g].clone(i));this.morphAttributes[d]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,S=h.length;d<S;d++){const v=h[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vM=0;class tr extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=qr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(s.blending=this.blending),this.side!==Ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==od&&(s.blendSrc=this.blendSrc),this.blendDst!==ld&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new Y,Wh=new Y,Tc=new Y,vs=new Y,qh=new Y,Ac=new Y,Yh=new Y;class uu{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Wh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),vs.copy(this.origin).sub(Wh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),p=vs.dot(this.direction),m=-vs.dot(Tc),d=vs.lengthSq(),S=Math.abs(1-h*h);let v,g,y,b;if(S>0)if(v=h*m-p,g=h*p-m,b=c*S,v>=0)if(g>=-b)if(g<=b){const w=1/S;v*=w,g*=w,y=v*(v+h*g+2*p)+g*(h*v+g+2*m)+d}else g=c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;else g=-c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;else g<=-b?(v=Math.max(0,-(-h*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+d):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(v=Math.max(0,-(h*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+d);else g=h>0?-c:c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wh).addScaledVector(Tc,g),y}intersectSphere(t,i){Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),S>=0?(c=(t.min.y-g.y)*S,h=(t.max.y-g.y)*S):(c=(t.max.y-g.y)*S,h=(t.min.y-g.y)*S),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,s,l,c){qh.subVectors(i,t),Ac.subVectors(s,t),Yh.crossVectors(qh,Ac);let h=this.direction.dot(Yh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;vs.subVectors(this.origin,t);const m=p*this.direction.dot(Ac.crossVectors(vs,Ac));if(m<0)return null;const d=p*this.direction.dot(qh.cross(vs));if(d<0||m+d>h)return null;const S=-p*vs.dot(Yh);return S<0?null:this.at(S/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ki extends tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const L_=new _n,ks=new uu,Rc=new ll,O_=new Y,wc=new Y,Cc=new Y,Dc=new Y,jh=new Y,Uc=new Y,P_=new Y,Nc=new Y;class Qe extends Gn{constructor(t=new zn,i=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Uc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const S=p[m],v=c[m];S!==0&&(jh.fromBufferAttribute(v,t),h?Uc.addScaledVector(jh,S):Uc.addScaledVector(jh.sub(i),S))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(Rc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Rc,O_)===null||ks.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(L_.copy(c).invert(),ks.copy(t.ray).applyMatrix4(L_),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],x=h[M.materialIndex],C=Math.max(M.start,y.start),I=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=C,H=I;L<H;L+=3){const P=p.getX(L),N=p.getX(L+1),T=p.getX(L+2);l=Lc(this,x,t,s,d,S,v,P,N,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=b,x=w;M<x;M+=3){const C=p.getX(M),I=p.getX(M+1),L=p.getX(M+2);l=Lc(this,h,t,s,d,S,v,C,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],x=h[M.materialIndex],C=Math.max(M.start,y.start),I=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=C,H=I;L<H;L+=3){const P=L,N=L+1,T=L+2;l=Lc(this,x,t,s,d,S,v,P,N,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=b,x=w;M<x;M+=3){const C=M,I=M+1,L=M+2;l=Lc(this,h,t,s,d,S,v,C,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xM(o,t,i,s,l,c,h,p){let m;if(t.side===pi?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===Ms,p),m===null)return null;Nc.copy(p),Nc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Nc);return d<i.near||d>i.far?null:{distance:d,point:Nc.clone(),object:o}}function Lc(o,t,i,s,l,c,h,p,m,d){o.getVertexPosition(p,wc),o.getVertexPosition(m,Cc),o.getVertexPosition(d,Dc);const S=xM(o,t,i,s,wc,Cc,Dc,P_);if(S){const v=new Y;Fi.getBarycoord(P_,wc,Cc,Dc,v),l&&(S.uv=Fi.getInterpolatedAttribute(l,p,m,d,v,new Ne)),c&&(S.uv1=Fi.getInterpolatedAttribute(c,p,m,d,v,new Ne)),h&&(S.normal=Fi.getInterpolatedAttribute(h,p,m,d,v,new Y),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Y,materialIndex:0};Fi.getNormal(wc,Cc,Dc,g.normal),S.face=g,S.barycoord=v}return S}class SM extends ai{constructor(t=null,i=1,s=1,l,c,h,p,m,d=jn,S=jn,v,g){super(null,h,p,m,d,S,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new Y,yM=new Y,MM=new de;class qs{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Zh.subVectors(s,i).cross(yM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Zh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||MM.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new ll,EM=new Ne(.5,.5),Oc=new Y;class mp{constructor(t=new qs,i=new qs,s=new qs,l=new qs,c=new qs,h=new qs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=fa,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],S=c[4],v=c[5],g=c[6],y=c[7],b=c[8],w=c[9],M=c[10],x=c[11],C=c[12],I=c[13],L=c[14],H=c[15];if(l[0].setComponents(d-h,y-S,x-b,H-C).normalize(),l[1].setComponents(d+h,y+S,x+b,H+C).normalize(),l[2].setComponents(d+p,y+v,x+w,H+I).normalize(),l[3].setComponents(d-p,y-v,x-w,H-I).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(d-m,y-g,x-M,H-L).normalize();else if(l[4].setComponents(d-m,y-g,x-M,H-L).normalize(),i===fa)l[5].setComponents(d+m,y+g,x+M,H+L).normalize();else if(i===sl)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=EM.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tl extends tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const su=new Y,ru=new Y,I_=new _n,Zo=new uu,Pc=new ll,Kh=new Y,z_=new Y;class bM extends Gn{constructor(t=new zn,i=new tl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ru.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=su.distanceTo(ru);t.setAttribute("lineDistance",new $e(s,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;I_.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(I_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,S=s.index,g=s.attributes.position;if(S!==null){const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let w=y,M=b-1;w<M;w+=d){const x=S.getX(w),C=S.getX(w+1),I=Ic(this,t,Zo,m,x,C,w);I&&i.push(I)}if(this.isLineLoop){const w=S.getX(b-1),M=S.getX(y),x=Ic(this,t,Zo,m,w,M,b-1);x&&i.push(x)}}else{const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let w=y,M=b-1;w<M;w+=d){const x=Ic(this,t,Zo,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=Ic(this,t,Zo,m,b-1,y,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Ic(o,t,i,s,l,c,h){const p=o.geometry.attributes.position;if(su.fromBufferAttribute(p,l),ru.fromBufferAttribute(p,c),i.distanceSqToSegment(su,ru,Kh,z_)>s)return;Kh.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Kh);if(!(d<t.near||d>t.far))return{distance:d,point:z_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const B_=new Y,F_=new Y;class Jc extends bM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)B_.fromBufferAttribute(i,l),F_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+B_.distanceTo(F_);t.setAttribute("lineDistance",new $e(s,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wv extends tr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const G_=new _n,Qd=new uu,zc=new ll,Bc=new Y;class TM extends Gn{constructor(t=new zn,i=new Wv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;G_.copy(l).invert(),Qd.copy(t.ray).applyMatrix4(G_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,v=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),y=Math.min(d.count,h.start+h.count);for(let b=g,w=y;b<w;b++){const M=d.getX(b);Bc.fromBufferAttribute(v,M),H_(Bc,M,m,l,t,i,this)}}else{const g=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=g,w=y;b<w;b++)Bc.fromBufferAttribute(v,b),H_(Bc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function H_(o,t,i,s,l,c,h){const p=Qd.distanceSqToPoint(o);if(p<i){const m=new Y;Qd.closestPointToPoint(o,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class qv extends ai{constructor(t=[],i=Qs,s,l,c,h,p,m,d,S){super(t,i,s,l,c,h,p,m,d,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kr extends ai{constructor(t,i,s=pa,l,c,h,p=jn,m=jn,d,S=ka,v=1){if(S!==ka&&S!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,h,p,m,S,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class AM extends Kr{constructor(t,i=pa,s=Qs,l,c,h=jn,p=jn,m,d=ka){const S={width:t,height:t,depth:1},v=[S,S,S,S,S,S];super(t,t,i,s,l,c,h,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yv extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ca extends zn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],S=[],v=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(S,3)),this.setAttribute("uv",new $e(v,2));function b(w,M,x,C,I,L,H,P,N,T,U){const Z=L/N,G=H/T,j=L/2,ot=H/2,ct=P/2,X=N+1,O=T+1;let B=0,rt=0;const pt=new Y;for(let Mt=0;Mt<O;Mt++){const z=Mt*G-ot;for(let $=0;$<X;$++){const gt=$*Z-j;pt[w]=gt*C,pt[M]=z*I,pt[x]=ct,d.push(pt.x,pt.y,pt.z),pt[w]=0,pt[M]=0,pt[x]=P>0?1:-1,S.push(pt.x,pt.y,pt.z),v.push($/N),v.push(1-Mt/T),B+=1}}for(let Mt=0;Mt<T;Mt++)for(let z=0;z<N;z++){const $=g+z+X*Mt,gt=g+z+X*(Mt+1),Rt=g+(z+1)+X*(Mt+1),Lt=g+(z+1)+X*Mt;m.push($,gt,Lt),m.push(gt,Rt,Lt),rt+=6}p.addGroup(y,rt,U),y+=rt,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gp extends zn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],p=[],m=[],d=new Y,S=new Ne;h.push(0,0,0),p.push(0,0,1),m.push(.5,.5);for(let v=0,g=3;v<=i;v++,g+=3){const y=s+v/i*l;d.x=t*Math.cos(y),d.y=t*Math.sin(y),h.push(d.x,d.y,d.z),p.push(0,0,1),S.x=(h[g]/t+1)/2,S.y=(h[g+1]/t+1)/2,m.push(S.x,S.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _p extends zn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const S=[],v=[],g=[],y=[];let b=0;const w=[],M=s/2;let x=0;C(),h===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(S),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(y,2));function C(){const L=new Y,H=new Y;let P=0;const N=(i-t)/s;for(let T=0;T<=c;T++){const U=[],Z=T/c,G=Z*(i-t)+t;for(let j=0;j<=l;j++){const ot=j/l,ct=ot*m+p,X=Math.sin(ct),O=Math.cos(ct);H.x=G*X,H.y=-Z*s+M,H.z=G*O,v.push(H.x,H.y,H.z),L.set(X,N,O).normalize(),g.push(L.x,L.y,L.z),y.push(ot,1-Z),U.push(b++)}w.push(U)}for(let T=0;T<l;T++)for(let U=0;U<c;U++){const Z=w[U][T],G=w[U+1][T],j=w[U+1][T+1],ot=w[U][T+1];(t>0||U!==0)&&(S.push(Z,G,ot),P+=3),(i>0||U!==c-1)&&(S.push(G,j,ot),P+=3)}d.addGroup(x,P,0),x+=P}function I(L){const H=b,P=new Ne,N=new Y;let T=0;const U=L===!0?t:i,Z=L===!0?1:-1;for(let j=1;j<=l;j++)v.push(0,M*Z,0),g.push(0,Z,0),y.push(.5,.5),b++;const G=b;for(let j=0;j<=l;j++){const ct=j/l*m+p,X=Math.cos(ct),O=Math.sin(ct);N.x=U*O,N.y=M*Z,N.z=U*X,v.push(N.x,N.y,N.z),g.push(0,Z,0),P.x=X*.5+.5,P.y=O*.5*Z+.5,y.push(P.x,P.y),b++}for(let j=0;j<l;j++){const ot=H+j,ct=G+j;L===!0?S.push(ct,ct+1,ot):S.push(ct+1,ct,ot),T+=3}d.addGroup(x,T,L===!0?1:2),x+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _p(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends _p{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,p=Math.PI*2){super(0,t,i,s,l,c,h,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:p}}static fromJSON(t){return new el(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Fc=new Y,Gc=new Y,Qh=new Y,Hc=new Fi;class Jh extends zn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Qc*i),h=t.getIndex(),p=t.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],S=["a","b","c"],v=new Array(3),g={},y=[];for(let b=0;b<m;b+=3){h?(d[0]=h.getX(b),d[1]=h.getX(b+1),d[2]=h.getX(b+2)):(d[0]=b,d[1]=b+1,d[2]=b+2);const{a:w,b:M,c:x}=Hc;if(w.fromBufferAttribute(p,d[0]),M.fromBufferAttribute(p,d[1]),x.fromBufferAttribute(p,d[2]),Hc.getNormal(Qh),v[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,v[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,v[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let C=0;C<3;C++){const I=(C+1)%3,L=v[C],H=v[I],P=Hc[S[C]],N=Hc[S[I]],T=`${L}_${H}`,U=`${H}_${L}`;U in g&&g[U]?(Qh.dot(g[U].normal)<=c&&(y.push(P.x,P.y,P.z),y.push(N.x,N.y,N.z)),g[U]=null):T in g||(g[T]={index0:d[C],index1:d[I],normal:Qh.clone()})}}for(const b in g)if(g[b]){const{index0:w,index1:M}=g[b];Fc.fromBufferAttribute(p,w),Gc.fromBufferAttribute(p,M),y.push(Fc.x,Fc.y,Fc.z),y.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new $e(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class fu extends zn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,S=m+1,v=t/p,g=i/m,y=[],b=[],w=[],M=[];for(let x=0;x<S;x++){const C=x*g-h;for(let I=0;I<d;I++){const L=I*v-c;b.push(L,-C,0),w.push(0,0,1),M.push(I/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let C=0;C<p;C++){const I=C+d*x,L=C+d*(x+1),H=C+1+d*(x+1),P=C+1+d*x;y.push(I,L,P),y.push(L,H,P)}this.setIndex(y),this.setAttribute("position",new $e(b,3)),this.setAttribute("normal",new $e(w,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.width,t.height,t.widthSegments,t.heightSegments)}}class ou extends zn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],S=[];let v=t;const g=(i-t)/l,y=new Y,b=new Ne;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const x=c+M/s*h;y.x=v*Math.cos(x),y.y=v*Math.sin(x),m.push(y.x,y.y,y.z),d.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,S.push(b.x,b.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let x=0;x<s;x++){const C=x+M,I=C,L=C+s+1,H=C+s+2,P=C+1;p.push(I,L,P),p.push(L,H,P)}}this.setIndex(p),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nl extends zn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const S=[],v=new Y,g=new Y,y=[],b=[],w=[],M=[];for(let x=0;x<=s;x++){const C=[],I=x/s;let L=0;x===0&&h===0?L=.5/i:x===s&&m===Math.PI&&(L=-.5/i);for(let H=0;H<=i;H++){const P=H/i;v.x=-t*Math.cos(l+P*c)*Math.sin(h+I*p),v.y=t*Math.cos(h+I*p),v.z=t*Math.sin(l+P*c)*Math.sin(h+I*p),b.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(P+L,1-I),C.push(d++)}S.push(C)}for(let x=0;x<s;x++)for(let C=0;C<i;C++){const I=S[x][C+1],L=S[x][C],H=S[x+1][C],P=S[x+1][C+1];(x!==0||h>0)&&y.push(I,L,P),(x!==s-1||m<Math.PI)&&y.push(L,H,P)}this.setIndex(y),this.setAttribute("position",new $e(b,3)),this.setAttribute("normal",new $e(w,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vp extends zn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],S=[],v=[],g=new Y,y=new Y,b=new Y;for(let w=0;w<=s;w++){const M=h+w/s*p;for(let x=0;x<=l;x++){const C=x/l*c;y.x=(t+i*Math.cos(M))*Math.cos(C),y.y=(t+i*Math.cos(M))*Math.sin(C),y.z=i*Math.sin(M),d.push(y.x,y.y,y.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),b.subVectors(y,g).normalize(),S.push(b.x,b.y,b.z),v.push(x/l),v.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const x=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,I=(l+1)*(w-1)+M,L=(l+1)*w+M;m.push(x,C,L),m.push(C,I,L)}this.setIndex(m),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(S,3)),this.setAttribute("uv",new $e(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Qr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(V_(l))l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(V_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ii(o){const t={};for(let i=0;i<o.length;i++){const s=Qr(o[i]);for(const l in s)t[l]=s[l]}return t}function V_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function RM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function jv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const wM={clone:Qr,merge:ii};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=RM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class UM extends ma{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ws extends tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NM extends tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class LM extends tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xp extends Gn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const $h=new _n,k_=new Y,X_=new Y;class Zv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;k_.setFromMatrixPosition(t.matrixWorld),i.position.copy(k_),X_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),$h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vc=new Y,kc=new Jr,ra=new Y;class Kv extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=fa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vc,kc,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,ra.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Vc,kc,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new Y,W_=new Ne,q_=new Ne;class Ai extends Kv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class OM extends Zv{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0}}class Y_ extends xp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new OM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Sp extends Kv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PM extends Zv{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IM extends xp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new PM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class zM extends xp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const kr=-90,Xr=1;class BM extends Gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(kr,Xr,t,i);l.layers=this.layers,this.add(l);const c=new Ai(kr,Xr,t,i);c.layers=this.layers,this.add(c);const h=new Ai(kr,Xr,t,i);h.layers=this.layers,this.add(h);const p=new Ai(kr,Xr,t,i);p.layers=this.layers,this.add(p);const m=new Ai(kr,Xr,t,i);m.layers=this.layers,this.add(m);const d=new Ai(kr,Xr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===fa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,S]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(v,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class FM extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const j_=new _n;class GM{constructor(t,i,s=0,l=1/0){this.ray=new uu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Le("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return j_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(j_),this}intersectObject(t,i=!0,s=[]){return Jd(t,this,s,i),s.sort(Z_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Jd(t[l],this,s,i);return s.sort(Z_),s}}function Z_(o,t){return o.distance-t.distance}function Jd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,p=c.length;h<p;h++)Jd(c[h],t,i,!0)}}class HM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Tp=class Tp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Tp.prototype.isMatrix2=!0;let K_=Tp;class Q_ extends Jc{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,h=t/i,p=t/2,m=[],d=[];for(let g=0,y=0,b=-p;g<=i;g++,b+=h){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const w=g===c?s:l;w.toArray(d,y),y+=3,w.toArray(d,y),y+=3,w.toArray(d,y),y+=3,w.toArray(d,y),y+=3}const S=new zn;S.setAttribute("position",new $e(m,3)),S.setAttribute("color",new $e(d,3));const v=new tl({vertexColors:!0,toneMapped:!1});super(S,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function J_(o,t,i,s){const l=VM(s);switch(i){case zv:return o*t;case Fv:return o*t/l.components*l.byteLength;case op:return o*t/l.components*l.byteLength;case Js:return o*t*2/l.components*l.byteLength;case lp:return o*t*2/l.components*l.byteLength;case Bv:return o*t*3/l.components*l.byteLength;case $i:return o*t*4/l.components*l.byteLength;case cp:return o*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xd:case yd:return Math.max(o,16)*Math.max(t,8)/4;case vd:case Sd:return Math.max(o,8)*Math.max(t,8)/2;case Md:case Ed:case Td:case Ad:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case bd:case tu:case Rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case eu:case Yd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VM(o){switch(o){case Ri:case Lv:return{byteLength:1,components:1};case il:case Ov:case Va:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case pa:case ap:case ua:return{byteLength:4,components:1};case Pv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function kM(o){const t=new WeakMap;function i(p,m){const d=p.array,S=p.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,S),p.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,d){const S=m.array,v=m.updateRanges;if(o.bindBuffer(d,p),v.length===0)o.bufferSubData(d,0,S);else{v.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<v.length;y++){const b=v[g],w=v[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,b=v.length;y<b;y++){const w=v[y];o.bufferSubData(d,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:XM,alphahash_pars_fragment:WM,alphamap_fragment:qM,alphamap_pars_fragment:YM,alphatest_fragment:jM,alphatest_pars_fragment:ZM,aomap_fragment:KM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:$M,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:yE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:IE,envmap_vertex:AE,fog_vertex:RE,fog_pars_vertex:wE,fog_fragment:CE,fog_pars_fragment:DE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:NE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:zE,lights_toon_pars_fragment:BE,lights_phong_fragment:FE,lights_phong_pars_fragment:GE,lights_physical_fragment:HE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:XE,lights_fragment_end:WE,lightprobes_pars_fragment:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:KE,map_fragment:QE,map_pars_fragment:JE,map_particle_fragment:$E,map_particle_pars_fragment:tb,metalnessmap_fragment:eb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:ab,morphnormal_vertex:sb,morphtarget_pars_vertex:rb,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:xb,premultiplied_alpha_fragment:Sb,project_vertex:yb,dithering_fragment:Mb,dithering_pars_fragment:Eb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Rb,shadowmap_vertex:wb,shadowmask_pars_fragment:Cb,skinbase_vertex:Db,skinning_pars_vertex:Ub,skinning_vertex:Nb,skinnormal_vertex:Lb,specularmap_fragment:Ob,specularmap_pars_fragment:Pb,tonemapping_fragment:Ib,tonemapping_pars_fragment:zb,transmission_fragment:Bb,transmission_pars_fragment:Fb,uv_pars_fragment:Gb,uv_pars_vertex:Hb,uv_vertex:Vb,worldpos_vertex:kb,background_vert:Xb,background_frag:Wb,backgroundCube_vert:qb,backgroundCube_frag:Yb,cube_vert:jb,cube_frag:Zb,depth_vert:Kb,depth_frag:Qb,distance_vert:Jb,distance_frag:$b,equirect_vert:t1,equirect_frag:e1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:a1,meshbasic_frag:s1,meshlambert_vert:r1,meshlambert_frag:o1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:u1,meshnormal_frag:f1,meshphong_vert:h1,meshphong_frag:d1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:_1,points_vert:v1,points_frag:x1,shadow_vert:S1,shadow_frag:y1,sprite_vert:M1,sprite_frag:E1},Gt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},la={basic:{uniforms:ii([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:ii([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:ii([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:ii([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:ii([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:ii([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:ii([Gt.points,Gt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:ii([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:ii([Gt.common,Gt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:ii([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:ii([Gt.sprite,Gt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:ii([Gt.common,Gt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:ii([Gt.lights,Gt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};la.physical={uniforms:ii([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Xc={r:0,b:0,g:0},b1=new _n,Jv=new de;Jv.set(-1,0,0,0,1,0,0,0,1);function T1(o,t,i,s,l,c){const h=new be(0);let p=l===!0?0:1,m,d,S=null,v=0,g=null;function y(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const L=C.backgroundBlurriness>0;I=t.get(I,L)}return I}function b(C){let I=!1;const L=y(C);L===null?M(h,p):L&&L.isColor&&(M(L,1),I=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,I){const L=y(I);L&&(L.isCubeTexture||L.mapping===cu)?(d===void 0&&(d=new Qe(new ca(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:Qr(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(H,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(b1.makeRotationFromEuler(I.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Jv),d.material.toneMapped=De.getTransfer(L.colorSpace)!==Je,(S!==L||v!==L.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,S=L,v=L.version,g=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Qe(new fu(2,2),new ma({name:"BackgroundMaterial",uniforms:Qr(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=De.getTransfer(L.colorSpace)!==Je,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(S!==L||v!==L.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,S=L,v=L.version,g=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,I){C.getRGB(Xc,jv(o)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,I,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,I=1){h.set(C),p=I,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(h,p)},render:b,addToRenderList:w,dispose:x}}function A1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(G,j,ot,ct,X){let O=!1;const B=v(G,ct,ot,j);c!==B&&(c=B,d(c.object)),O=y(G,ct,ot,X),O&&b(G,ct,ot,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,L(G,j,ot,ct),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function m(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function v(G,j,ot,ct){const X=ct.wireframe===!0;let O=s[j.id];O===void 0&&(O={},s[j.id]=O);const B=G.isInstancedMesh===!0?G.id:0;let rt=O[B];rt===void 0&&(rt={},O[B]=rt);let pt=rt[ot.id];pt===void 0&&(pt={},rt[ot.id]=pt);let Mt=pt[X];return Mt===void 0&&(Mt=g(m()),pt[X]=Mt),Mt}function g(G){const j=[],ot=[],ct=[];for(let X=0;X<i;X++)j[X]=0,ot[X]=0,ct[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ot,attributeDivisors:ct,object:G,attributes:{},index:null}}function y(G,j,ot,ct){const X=c.attributes,O=j.attributes;let B=0;const rt=ot.getAttributes();for(const pt in rt)if(rt[pt].location>=0){const z=X[pt];let $=O[pt];if($===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&($=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&($=G.instanceColor)),z===void 0||z.attribute!==$||$&&z.data!==$.data)return!0;B++}return c.attributesNum!==B||c.index!==ct}function b(G,j,ot,ct){const X={},O=j.attributes;let B=0;const rt=ot.getAttributes();for(const pt in rt)if(rt[pt].location>=0){let z=O[pt];z===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(z=G.instanceColor));const $={};$.attribute=z,z&&z.data&&($.data=z.data),X[pt]=$,B++}c.attributes=X,c.attributesNum=B,c.index=ct}function w(){const G=c.newAttributes;for(let j=0,ot=G.length;j<ot;j++)G[j]=0}function M(G){x(G,0)}function x(G,j){const ot=c.newAttributes,ct=c.enabledAttributes,X=c.attributeDivisors;ot[G]=1,ct[G]===0&&(o.enableVertexAttribArray(G),ct[G]=1),X[G]!==j&&(o.vertexAttribDivisor(G,j),X[G]=j)}function C(){const G=c.newAttributes,j=c.enabledAttributes;for(let ot=0,ct=j.length;ot<ct;ot++)j[ot]!==G[ot]&&(o.disableVertexAttribArray(ot),j[ot]=0)}function I(G,j,ot,ct,X,O,B){B===!0?o.vertexAttribIPointer(G,j,ot,X,O):o.vertexAttribPointer(G,j,ot,ct,X,O)}function L(G,j,ot,ct){w();const X=ct.attributes,O=ot.getAttributes(),B=j.defaultAttributeValues;for(const rt in O){const pt=O[rt];if(pt.location>=0){let Mt=X[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(Mt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(Mt=G.instanceColor)),Mt!==void 0){const z=Mt.normalized,$=Mt.itemSize,gt=t.get(Mt);if(gt===void 0)continue;const Rt=gt.buffer,Lt=gt.type,st=gt.bytesPerElement,St=Lt===o.INT||Lt===o.UNSIGNED_INT||Mt.gpuType===ap;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ht=bt.stride,se=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let ne=0;ne<pt.locationSize;ne++)x(pt.location+ne,bt.meshPerAttribute);G.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ne=0;ne<pt.locationSize;ne++)M(pt.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let ne=0;ne<pt.locationSize;ne++)I(pt.location+ne,$/pt.locationSize,Lt,z,Ht*st,(se+$/pt.locationSize*ne)*st,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<pt.locationSize;bt++)x(pt.location+bt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<pt.locationSize;bt++)M(pt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let bt=0;bt<pt.locationSize;bt++)I(pt.location+bt,$/pt.locationSize,Lt,z,$*st,$/pt.locationSize*bt*st,St)}}else if(B!==void 0){const z=B[rt];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(pt.location,z);break;case 3:o.vertexAttrib3fv(pt.location,z);break;case 4:o.vertexAttrib4fv(pt.location,z);break;default:o.vertexAttrib1fv(pt.location,z)}}}}C()}function H(){U();for(const G in s){const j=s[G];for(const ot in j){const ct=j[ot];for(const X in ct){const O=ct[X];for(const B in O)S(O[B].object),delete O[B];delete ct[X]}}delete s[G]}}function P(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const ot in j){const ct=j[ot];for(const X in ct){const O=ct[X];for(const B in O)S(O[B].object),delete O[B];delete ct[X]}}delete s[G.id]}function N(G){for(const j in s){const ot=s[j];for(const ct in ot){const X=ot[ct];if(X[G.id]===void 0)continue;const O=X[G.id];for(const B in O)S(O[B].object),delete O[B];delete X[G.id]}}}function T(G){for(const j in s){const ot=s[j],ct=G.isInstancedMesh===!0?G.id:0,X=ot[ct];if(X!==void 0){for(const O in X){const B=X[O];for(const rt in B)S(B[rt].object),delete B[rt];delete X[O]}delete ot[ct],Object.keys(ot).length===0&&delete s[j]}}}function U(){Z(),h=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:Z,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function R1(o,t,i){let s;function l(m){s=m}function c(m,d){o.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,S){S!==0&&(o.drawArraysInstanced(s,m,d,S),i.update(d,s,S))}function p(m,d,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,S);let g=0;for(let y=0;y<S;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function w1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==$i&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(N){const T=N===Va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Ri&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ua&&!T)}function m(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const S=m(d);S!==d&&(ce("WebGLRenderer:",d,"not supported, using",S,"instead."),d=S);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:L,maxSamples:H,samples:P}}function C1(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new qs,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=S(v,g,0)},this.setState=function(v,g,y){const b=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!l||b===null||b.length===0||c&&!M)c?S(null):d();else{const C=c?0:s,I=C*4;let L=x.clippingState||null;m.value=L,L=S(b,g,I,y);for(let H=0;H!==I;++H)L[H]=i[H];x.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(v,g,y,b){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const x=y+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<x)&&(M=new Float32Array(x));for(let I=0,L=y;I!==w;++I,L+=4)h.copy(v[I]).applyMatrix4(C,p),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const ys=4,$_=[.125,.215,.35,.446,.526,.582],js=20,D1=256,Ko=new Sp,tv=new be;let td=null,ed=0,nd=0,id=!1;const U1=new Y;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=U1}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Va,format:$i,colorSpace:nu,depthBuffer:!1},l=nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N1(c)),this._blurMaterial=O1(c,t,i),this._ggxMaterial=L1(c,t,i)}return l}_compileMaterial(t){const i=new Qe(new zn,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new Ai(90,1,i,s),d=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(tv),v.toneMapping=ha,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new ca,new Ki({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,x=!0):(M.color.copy(tv),x=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[I],c.y,c.z)):L===1?(m.up.set(0,0,d[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[I],c.z)):(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[I]));const H=this._cubeSize;Wr(l,L*H,I>2?H:0,H,H),v.setRenderTarget(l),x&&v.render(w,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Qs||t.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-S*S),g=0+d*1.25,y=v*g,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-ys?s-b+ys:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Wr(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Wr(t,M,x,3*w,2*w),l.setRenderTarget(t),l.render(p,Ko)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const S=3,v=this._lodMeshes[l];v.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*js-1),w=c/b,M=isFinite(c)?1+Math.floor(S*w):js;M>js&&ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const x=[];let C=0;for(let N=0;N<js;++N){const T=N/w,U=Math.exp(-T*T/2);x.push(U),N===0?C+=U:N<M&&(C+=2*U)}for(let N=0;N<x.length;N++)x[N]=x[N]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=b,g.mipInt.value=I-s;const L=this._sizeLods[l],H=3*L*(l>I-ys?l-I+ys:0),P=4*(this._cubeSize-L);Wr(i,H,P,3*L,2*L),m.setRenderTarget(i),m.render(v,Ko)}}function N1(o){const t=[],i=[],s=[];let l=o;const c=o-ys+1+$_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>o-ys?m=$_[h-o+ys-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),S=-d,v=1+d,g=[S,S,v,S,v,v,S,S,v,v,S,v],y=6,b=6,w=3,M=2,x=1,C=new Float32Array(w*b*y),I=new Float32Array(M*b*y),L=new Float32Array(x*b*y);for(let P=0;P<y;P++){const N=P%3*2/3-1,T=P>2?0:-1,U=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];C.set(U,w*b*P),I.set(g,M*b*P);const Z=[P,P,P,P,P,P];L.set(Z,x*b*P)}const H=new zn;H.setAttribute("position",new Gi(C,w)),H.setAttribute("uv",new Gi(I,M)),H.setAttribute("faceIndex",new Gi(L,x)),s.push(new Qe(H,null)),l>ys&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function nv(o,t,i){const s=new da(o,t,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Wr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function L1(o,t,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function O1(o,t,i){const s=new Float32Array(js),l=new Y(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function iv(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function av(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $v extends da{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ca(5,5,5),c=new ma({name:"CubemapFromEquirect",uniforms:Qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:pi,blending:Ga});c.uniforms.tEquirect.value=i;const h=new Qe(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=ti),new BM(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function P1(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===bh||y===Th)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new $v(b.height);return w.fromEquirectangularTexture(o,g),t.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,b=y===bh||y===Th,w=y===Qs||y===Zr;if(b||w){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new ev(o)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new ev(o)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",S),M.texture):null}}}return g}function p(g,y){return y===bh?g.mapping=Qs:y===Th&&(g.mapping=Zr),g}function m(g){let y=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&y++;return y===b}function d(g){const y=g.target;y.removeEventListener("dispose",d);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function S(g){const y=g.target;y.removeEventListener("dispose",S);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function I1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zd("WebGLRenderer: "+s+" extension not supported."),l}}}function z1(o,t,i,s){const l={},c=new WeakMap;function h(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],o.ARRAY_BUFFER)}function d(v){const g=[],y=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let I=0,L=C.length;I<L;I+=3){const H=C[I+0],P=C[I+1],N=C[I+2];g.push(H,P,P,N,N,H)}}else{const C=b.array;w=b.version;for(let I=0,L=C.length/3-1;I<L;I+=3){const H=I+0,P=I+1,N=I+2;g.push(H,P,P,N,N,H)}}const M=new(b.count>=65535?Xv:kv)(g,1);M.version=w;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function S(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:S}}function B1(o,t,i){let s;function l(v){s=v}let c,h;function p(v){c=v.type,h=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*h),i.update(g,s,1)}function d(v,g,y){y!==0&&(o.drawElementsInstanced(s,g,c,v*h,y),i.update(g,s,y))}function S(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let w=0;for(let M=0;M<y;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=S}function F1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Le("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function G1(o,t,i){const s=new WeakMap,l=new Mn;function c(h,p,m){const d=h.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let Z=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Z)};var y=Z;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let H=p.attributes.position.count*L,P=1;H>t.maxTextureSize&&(P=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const N=new Float32Array(H*P*4*v),T=new Hv(N,H,P,v);T.type=ua,T.needsUpdate=!0;const U=L*4;for(let G=0;G<v;G++){const j=x[G],ot=C[G],ct=I[G],X=H*P*4*G;for(let O=0;O<j.count;O++){const B=O*U;b===!0&&(l.fromBufferAttribute(j,O),N[X+B+0]=l.x,N[X+B+1]=l.y,N[X+B+2]=l.z,N[X+B+3]=0),w===!0&&(l.fromBufferAttribute(ot,O),N[X+B+4]=l.x,N[X+B+5]=l.y,N[X+B+6]=l.z,N[X+B+7]=0),M===!0&&(l.fromBufferAttribute(ct,O),N[X+B+8]=l.x,N[X+B+9]=l.y,N[X+B+10]=l.z,N[X+B+11]=ct.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ne(H,P)},s.set(p,g),p.addEventListener("dispose",Z)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function H1(o,t,i,s,l){let c=new WeakMap;function h(d){const S=l.render.frame,v=d.geometry,g=t.get(d,v);if(c.get(g)!==S&&(t.update(g),c.set(g,S)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==S&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,S))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==S&&(y.update(),c.set(y,S))}return g}function p(){c=new WeakMap}function m(d){const S=d.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:h,dispose:p}}const V1={[Tv]:"LINEAR_TONE_MAPPING",[Av]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[wv]:"ACES_FILMIC_TONE_MAPPING",[Dv]:"AGX_TONE_MAPPING",[Uv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function k1(o,t,i,s,l){const c=new da(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Kr(t,i):void 0}),h=new da(t,i,{type:Va,depthBuffer:!1,stencilBuffer:!1}),p=new zn;p.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new $e([0,2,0,0,2,0],2));const m=new UM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Qe(p,m),S=new Sp(-1,1,1,-1,0,1);let v=null,g=null,y=!1,b,w=null,M=[],x=!1;this.setSize=function(C,I){c.setSize(C,I),h.setSize(C,I);for(let L=0;L<M.length;L++){const H=M[L];H.setSize&&H.setSize(C,I)}},this.setEffects=function(C){M=C,x=M.length>0&&M[0].isRenderPass===!0;const I=c.width,L=c.height;for(let H=0;H<M.length;H++){const P=M[H];P.setSize&&P.setSize(I,L)}},this.begin=function(C,I){if(y||C.toneMapping===ha&&M.length===0)return!1;if(w=I,I!==null){const L=I.width,H=I.height;(c.width!==L||c.height!==H)&&this.setSize(L,H)}return x===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=ha,!0},this.hasRenderPass=function(){return x},this.end=function(C,I){C.toneMapping=b,y=!0;let L=c,H=h;for(let P=0;P<M.length;P++){const N=M[P];if(N.enabled!==!1&&(N.render(C,H,L,I),N.needsSwap!==!1)){const T=L;L=H,H=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},De.getTransfer(v)===Je&&(m.defines.SRGB_TRANSFER="");const P=V1[g];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(w),C.render(d,S),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const tx=new ai,$d=new Kr(1,1),ex=new Hv,nx=new rM,ix=new qv,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function $r(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(c,p)}return c}function Pn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function In(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function du(o,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function X1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function W1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;o.uniform2fv(this.addr,t),In(i,t)}}function q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pn(i,t))return;o.uniform3fv(this.addr,t),In(i,t)}}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;o.uniform4fv(this.addr,t),In(i,t)}}function j1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),In(i,t)}else{if(Pn(i,s))return;cv.set(s),o.uniformMatrix2fv(this.addr,!1,cv),In(i,s)}}function Z1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),In(i,t)}else{if(Pn(i,s))return;lv.set(s),o.uniformMatrix3fv(this.addr,!1,lv),In(i,s)}}function K1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),In(i,t)}else{if(Pn(i,s))return;ov.set(s),o.uniformMatrix4fv(this.addr,!1,ov),In(i,s)}}function Q1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function J1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;o.uniform2iv(this.addr,t),In(i,t)}}function $1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;o.uniform3iv(this.addr,t),In(i,t)}}function tT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;o.uniform4iv(this.addr,t),In(i,t)}}function eT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function nT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;o.uniform2uiv(this.addr,t),In(i,t)}}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;o.uniform3uiv(this.addr,t),In(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;o.uniform4uiv(this.addr,t),In(i,t)}}function sT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?($d.compareFunction=i.isReversedDepthBuffer()?fp:up,c=$d):c=tx,i.setTexture2D(t||c,l)}function rT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||nx,l)}function oT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ix,l)}function lT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ex,l)}function cT(o){switch(o){case 5126:return X1;case 35664:return W1;case 35665:return q1;case 35666:return Y1;case 35674:return j1;case 35675:return Z1;case 35676:return K1;case 5124:case 35670:return Q1;case 35667:case 35671:return J1;case 35668:case 35672:return $1;case 35669:case 35673:return tT;case 5125:return eT;case 36294:return nT;case 36295:return iT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(o,t){o.uniform1fv(this.addr,t)}function fT(o,t){const i=$r(t,this.size,2);o.uniform2fv(this.addr,i)}function hT(o,t){const i=$r(t,this.size,3);o.uniform3fv(this.addr,i)}function dT(o,t){const i=$r(t,this.size,4);o.uniform4fv(this.addr,i)}function pT(o,t){const i=$r(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mT(o,t){const i=$r(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gT(o,t){const i=$r(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _T(o,t){o.uniform1iv(this.addr,t)}function vT(o,t){o.uniform2iv(this.addr,t)}function xT(o,t){o.uniform3iv(this.addr,t)}function ST(o,t){o.uniform4iv(this.addr,t)}function yT(o,t){o.uniform1uiv(this.addr,t)}function MT(o,t){o.uniform2uiv(this.addr,t)}function ET(o,t){o.uniform3uiv(this.addr,t)}function bT(o,t){o.uniform4uiv(this.addr,t)}function TT(o,t,i){const s=this.cache,l=t.length,c=du(i,l);Pn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=$d:h=tx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function AT(o,t,i){const s=this.cache,l=t.length,c=du(i,l);Pn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||nx,c[h])}function RT(o,t,i){const s=this.cache,l=t.length,c=du(i,l);Pn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ix,c[h])}function wT(o,t,i){const s=this.cache,l=t.length,c=du(i,l);Pn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||ex,c[h])}function CT(o){switch(o){case 5126:return uT;case 35664:return fT;case 35665:return hT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return ST;case 5125:return yT;case 36294:return MT;case 36295:return ET;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return wT}}class DT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=cT(i.type)}}class UT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CT(i.type)}}class NT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function uv(o,t){o.seq.push(t),o.map[t.id]=t}function LT(o,t,i){const s=o.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),h=ad.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){uv(i,d===void 0?new DT(p,o,t):new UT(p,o,t));break}else{let v=i.map[p];v===void 0&&(v=new NT(p),uv(i,v)),i=v}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);LT(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function fv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const OT=37297;let PT=0;function IT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const hv=new de;function zT(o){De._getMatrix(hv,De.workingColorSpace,o);const t=`mat3( ${hv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case iu:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function dv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+IT(o.getShaderSource(t),p)}else return c}function BT(o,t){const i=zT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const FT={[Tv]:"Linear",[Av]:"Reinhard",[Rv]:"Cineon",[wv]:"ACESFilmic",[Dv]:"AgX",[Uv]:"Neutral",[Cv]:"Custom"};function GT(o,t){const i=FT[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Y;function HT(){De.getLuminanceCoefficients(Wc);const o=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function kT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function XT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function $o(o){return o!==""}function pv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(o){return o.replace(WT,YT)}const qT=new Map;function YT(o,t){let i=xe[t];if(i===void 0){const s=qT.get(t);if(s!==void 0)i=xe[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return tp(i)}const jT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(o){return o.replace(jT,ZT)}function ZT(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const KT={[qc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function QT(o){return KT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JT={[Qs]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function $T(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":JT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const tA={[Zr]:"ENVMAP_MODE_REFRACTION"};function eA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":tA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nA={[bv]:"ENVMAP_BLENDING_MULTIPLY",[Fy]:"ENVMAP_BLENDING_MIX",[Gy]:"ENVMAP_BLENDING_ADD"};function iA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":nA[o.combine]||"ENVMAP_BLENDING_NONE"}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function sA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=QT(i),d=$T(i),S=eA(i),v=iA(i),g=aA(i),y=VT(i),b=kT(c),w=l.createProgram();let M,x,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),x.length>0&&(x+=`
`)):(M=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ha?"#define TONE_MAPPING":"",i.toneMapping!==ha?xe.tonemapping_pars_fragment:"",i.toneMapping!==ha?GT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,BT("linearToOutputTexel",i.outputColorSpace),HT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=tp(h),h=pv(h,i),h=mv(h,i),p=tp(p),p=pv(p,i),p=mv(p,i),h=gv(h),p=gv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=C+M+h,L=C+x+p,H=fv(l,l.VERTEX_SHADER,I),P=fv(l,l.FRAGMENT_SHADER,L);l.attachShader(w,H),l.attachShader(w,P),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function N(G){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",ot=l.getShaderInfoLog(H)||"",ct=l.getShaderInfoLog(P)||"",X=j.trim(),O=ot.trim(),B=ct.trim();let rt=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,P);else{const Mt=dv(l,H,"vertex"),z=dv(l,P,"fragment");Le("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+Mt+`
`+z)}else X!==""?ce("WebGLProgram: Program Info Log:",X):(O===""||B==="")&&(pt=!1);pt&&(G.diagnostics={runnable:rt,programLog:X,vertexShader:{log:O,prefix:M},fragmentShader:{log:B,prefix:x}})}l.deleteShader(H),l.deleteShader(P),T=new $c(l,w),U=XT(l,w)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let U;this.getAttributes=function(){return U===void 0&&N(this),U};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(w,OT)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=P,this}let rA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new lA(t),i.set(t,s)),s}}class lA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function cA(o){return o===Js||o===tu||o===eu}function uA(o,t,i,s,l,c){const h=new dp,p=new oA,m=new Set,d=[],S=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,Z,G,j,ot){const ct=G.fog,X=j.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,rt=t.get(T.envMap||O,B),pt=rt&&rt.mapping===cu?rt.image.height:null,Mt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ce("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$=z!==void 0?z.length:0;let gt=0;X.morphAttributes.position!==void 0&&(gt=1),X.morphAttributes.normal!==void 0&&(gt=2),X.morphAttributes.color!==void 0&&(gt=3);let Rt,Lt,st,St;if(Mt){const ie=la[Mt];Rt=ie.vertexShader,Lt=ie.fragmentShader}else Rt=T.vertexShader,Lt=T.fragmentShader,p.update(T),st=p.getVertexShaderID(T),St=p.getFragmentShaderID(T);const bt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),se=j.isInstancedMesh===!0,ne=j.isBatchedMesh===!0,We=!!T.map,ge=!!T.matcap,Se=!!rt,we=!!T.aoMap,ue=!!T.lightMap,vn=!!T.bumpMap,tn=!!T.normalMap,An=!!T.displacementMap,q=!!T.emissiveMap,un=!!T.metalnessMap,pe=!!T.roughnessMap,Fe=T.anisotropy>0,wt=T.clearcoat>0,cn=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,mt=Fe&&!!T.anisotropyMap,Et=wt&&!!T.clearcoatMap,Ct=wt&&!!T.clearcoatNormalMap,Ot=wt&&!!T.clearcoatRoughnessMap,ut=D&&!!T.iridescenceMap,ft=D&&!!T.iridescenceThicknessMap,Pt=E&&!!T.sheenColorMap,It=E&&!!T.sheenRoughnessMap,Ut=!!T.specularMap,Dt=!!T.specularColorMap,Qt=!!T.specularIntensityMap,le=J&&!!T.transmissionMap,_e=J&&!!T.thicknessMap,V=!!T.gradientMap,At=!!T.alphaMap,ht=T.alphaTest>0,Ft=!!T.alphaHash,Nt=!!T.extensions;let yt=ha;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(yt=o.toneMapping);const jt={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:Rt,fragmentShader:Lt,defines:T.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ne,batchingColor:ne&&j._colorsTexture!==null,instancing:se,instancingColor:se&&j.instanceColor!==null,instancingMorph:se&&j.morphTexture!==null,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:ge,envMap:Se,envMapMode:Se&&rt.mapping,envMapCubeUVHeight:pt,aoMap:we,lightMap:ue,bumpMap:vn,normalMap:tn,displacementMap:An,emissiveMap:q,normalMapObjectSpace:tn&&T.normalMapType===ky,normalMapTangentSpace:tn&&T.normalMapType===jd,packedNormalMap:tn&&T.normalMapType===jd&&cA(T.normalMap.format),metalnessMap:un,roughnessMap:pe,anisotropy:Fe,anisotropyMap:mt,clearcoat:wt,clearcoatMap:Et,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ot,dispersion:cn,iridescence:D,iridescenceMap:ut,iridescenceThicknessMap:ft,sheen:E,sheenColorMap:Pt,sheenRoughnessMap:It,specularMap:Ut,specularColorMap:Dt,specularIntensityMap:Qt,transmission:J,transmissionMap:le,thicknessMap:_e,gradientMap:V,opaque:T.transparent===!1&&T.blending===qr&&T.alphaToCoverage===!1,alphaMap:At,alphaTest:ht,alphaHash:Ft,combine:T.combine,mapUv:We&&b(T.map.channel),aoMapUv:we&&b(T.aoMap.channel),lightMapUv:ue&&b(T.lightMap.channel),bumpMapUv:vn&&b(T.bumpMap.channel),normalMapUv:tn&&b(T.normalMap.channel),displacementMapUv:An&&b(T.displacementMap.channel),emissiveMapUv:q&&b(T.emissiveMap.channel),metalnessMapUv:un&&b(T.metalnessMap.channel),roughnessMapUv:pe&&b(T.roughnessMap.channel),anisotropyMapUv:mt&&b(T.anisotropyMap.channel),clearcoatMapUv:Et&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(T.sheenRoughnessMap.channel),specularMapUv:Ut&&b(T.specularMap.channel),specularColorMapUv:Dt&&b(T.specularColorMap.channel),specularIntensityMapUv:Qt&&b(T.specularIntensityMap.channel),transmissionMapUv:le&&b(T.transmissionMap.channel),thicknessMapUv:_e&&b(T.thicknessMap.channel),alphaMapUv:At&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(tn||Fe),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!X.attributes.uv&&(We||At),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&tn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:j.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:gt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:yt,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Je,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ji,flipSided:T.side===pi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)U.push(Z),U.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(x(U,T),C(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function C(T,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),U.packedNormalMap&&h.enable(22),U.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),U.numLightProbeGrids>0&&h.enable(22),T.push(h.mask)}function I(T){const U=y[T.type];let Z;if(U){const G=la[U];Z=wM.clone(G.uniforms)}else Z=T.uniforms;return Z}function L(T,U){let Z=S.get(U);return Z!==void 0?++Z.usedTimes:(Z=new sA(o,U,T,l),d.push(Z),S.set(U,Z)),Z}function H(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),S.delete(T.cacheKey),T.destroy()}}function P(T){p.remove(T)}function N(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:I,acquireProgram:L,releaseProgram:H,releaseShaderCache:P,programs:d,dispose:N}}function fA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function hA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function vv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,w,M,x){let C=o[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:b,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:x},o[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=b,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=x),t++,C}function m(g,y,b,w,M,x){const C=p(g,y,b,w,M,x);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function d(g,y,b,w,M,x){const C=p(g,y,b,w,M,x);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function S(g,y){i.length>1&&i.sort(g||hA),s.length>1&&s.sort(y||vv),l.length>1&&l.sort(y||vv)}function v(){for(let g=t,y=o.length;g<y;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:v,sort:S}}function dA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new xv,o.set(s,[h])):l>=c.length?(h=new xv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new be};break;case"SpotLight":i={position:new Y,direction:new Y,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=i,i}}}function mA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let gA=0;function _A(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function vA(o){const t=new pA,i=mA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Y);const l=new Y,c=new _n,h=new _n;function p(d){let S=0,v=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,b=0,w=0,M=0,x=0,C=0,I=0,L=0,H=0,P=0,N=0;d.sort(_A);for(let U=0,Z=d.length;U<Z;U++){const G=d[U],j=G.color,ot=G.intensity,ct=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Js?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=j.r*ot,v+=j.g*ot,g+=j.b*ot;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],ot);N++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,rt=i.get(G);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=X,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(j).multiplyScalar(ot),O.distance=ct,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const B=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,B.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[w]=B.matrix,G.castShadow){const rt=i.get(G);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=X,L++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(j).multiplyScalar(ot),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const B=G.shadow,rt=i.get(G);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,rt.shadowCameraNear=B.camera.near,rt.shadowCameraFar=B.camera.far,s.pointShadow[b]=rt,s.pointShadowMap[b]=X,s.pointShadowMatrix[b]=G.shadow.matrix,I++}s.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(ot),O.groundColor.copy(G.groundColor).multiplyScalar(ot),s.hemi[x]=O,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==I||T.numSpotShadows!==L||T.numSpotMaps!==H||T.numLightProbes!==N)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=L+H-P,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=N,T.directionalLength=y,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=I,T.numSpotShadows=L,T.numSpotMaps=H,T.numLightProbes=N,s.version=gA++)}function m(d,S){let v=0,g=0,y=0,b=0,w=0;const M=S.matrixWorldInverse;for(let x=0,C=d.length;x<C;x++){const I=d[x];if(I.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(I.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(I.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(I.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),b++}else if(I.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),g++}else if(I.isHemisphereLight){const L=s.hemi[w];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function Sv(o){const t=new vA(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function S(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:S,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function xA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new Sv(o),t.set(l,[p])):c>=h.length?(p=new Sv(o),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MA=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],EA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],yv=new _n,Qo=new Y,sd=new Y;function bA(o,t,i){let s=new mp;const l=new Ne,c=new Ne,h=new Mn,p=new NM,m=new LM,d={},S=i.maxTextureSize,v={[Ms]:pi,[pi]:Ms,[Ji]:Ji},g=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:SA,fragmentShader:yA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new zn;b.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Qe(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let x=this.type;this.render=function(P,N,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===Sy&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const U=o.getRenderTarget(),Z=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),j=o.state;j.setBlending(Ga),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ot=x!==this.type;ot&&N.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(X=>X.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,X=P.length;ct<X;ct++){const O=P[ct],B=O.shadow;if(B===void 0){ce("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const rt=B.getFrameExtents();l.multiply(rt),c.copy(B.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/rt.x),l.x=c.x*rt.x,B.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/rt.y),l.y=c.y*rt.y,B.mapSize.y=c.y));const pt=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=pt,B.map===null||ot===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Jo){if(O.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new da(l.x,l.y,{format:Js,type:Va,minFilter:ti,magFilter:ti,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Kr(l.x,l.y,ua),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=ka,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jn,B.map.depthTexture.magFilter=jn}else O.isPointLight?(B.map=new $v(l.x),B.map.depthTexture=new AM(l.x,pa)):(B.map=new da(l.x,l.y),B.map.depthTexture=new Kr(l.x,l.y,pa)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=ka,this.type===qc?(B.map.depthTexture.compareFunction=pt?fp:up,B.map.depthTexture.minFilter=ti,B.map.depthTexture.magFilter=ti):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jn,B.map.depthTexture.magFilter=jn);B.camera.updateProjectionMatrix()}const Mt=B.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Mt;z++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,z),o.clear();else{z===0&&(o.setRenderTarget(B.map),o.clear());const $=B.getViewport(z);h.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),j.viewport(h)}if(O.isPointLight){const $=B.camera,gt=B.matrix,Rt=O.distance||$.far;Rt!==$.far&&($.far=Rt,$.updateProjectionMatrix()),Qo.setFromMatrixPosition(O.matrixWorld),$.position.copy(Qo),sd.copy($.position),sd.add(MA[z]),$.up.copy(EA[z]),$.lookAt(sd),$.updateMatrixWorld(),gt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),yv.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(yv,$.coordinateSystem,$.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),L(N,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Jo&&C(B,T),B.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(U,Z,G)};function C(P,N){const T=t.update(w);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new da(l.x,l.y,{format:Js,type:Va})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,T,g,w,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,T,y,w,null)}function I(P,N,T,U){let Z=null;const G=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)Z=G;else if(Z=T.isPointLight===!0?m:p,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const j=Z.uuid,ot=N.uuid;let ct=d[j];ct===void 0&&(ct={},d[j]=ct);let X=ct[ot];X===void 0&&(X=Z.clone(),ct[ot]=X,N.addEventListener("dispose",H)),Z=X}if(Z.visible=N.visible,Z.wireframe=N.wireframe,U===Jo?Z.side=N.shadowSide!==null?N.shadowSide:N.side:Z.side=N.shadowSide!==null?N.shadowSide:v[N.side],Z.alphaMap=N.alphaMap,Z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,Z.map=N.map,Z.clipShadows=N.clipShadows,Z.clippingPlanes=N.clippingPlanes,Z.clipIntersection=N.clipIntersection,Z.displacementMap=N.displacementMap,Z.displacementScale=N.displacementScale,Z.displacementBias=N.displacementBias,Z.wireframeLinewidth=N.wireframeLinewidth,Z.linewidth=N.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const j=o.properties.get(Z);j.light=T}return Z}function L(P,N,T,U,Z){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Z===Jo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ot=t.update(P),ct=P.material;if(Array.isArray(ct)){const X=ot.groups;for(let O=0,B=X.length;O<B;O++){const rt=X[O],pt=ct[rt.materialIndex];if(pt&&pt.visible){const Mt=I(P,pt,U,Z);P.onBeforeShadow(o,P,N,T,ot,Mt,rt),o.renderBufferDirect(T,null,ot,Mt,P,rt),P.onAfterShadow(o,P,N,T,ot,Mt,rt)}}}else if(ct.visible){const X=I(P,ct,U,Z);P.onBeforeShadow(o,P,N,T,ot,X,null),o.renderBufferDirect(T,null,ot,X,P,null),P.onAfterShadow(o,P,N,T,ot,X,null)}}const j=P.children;for(let ot=0,ct=j.length;ot<ct;ot++)L(j[ot],N,T,U,Z)}function H(P){P.target.removeEventListener("dispose",H);for(const T in d){const U=d[T],Z=P.target.uuid;Z in U&&(U[Z].dispose(),delete U[Z])}}}function TA(o,t){function i(){let V=!1;const At=new Mn;let ht=null;const Ft=new Mn(0,0,0,0);return{setMask:function(Nt){ht!==Nt&&!V&&(o.colorMask(Nt,Nt,Nt,Nt),ht=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,yt,jt,ie,rn){rn===!0&&(Nt*=ie,yt*=ie,jt*=ie),At.set(Nt,yt,jt,ie),Ft.equals(At)===!1&&(o.clearColor(Nt,yt,jt,ie),Ft.copy(At))},reset:function(){V=!1,ht=null,Ft.set(-1,0,0,0)}}}function s(){let V=!1,At=!1,ht=null,Ft=null,Nt=null;return{setReversed:function(yt){if(At!==yt){const jt=t.get("EXT_clip_control");yt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),At=yt;const ie=Nt;Nt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(yt){yt?bt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(yt){ht!==yt&&!V&&(o.depthMask(yt),ht=yt)},setFunc:function(yt){if(At&&(yt=$y[yt]),Ft!==yt){switch(yt){case cd:o.depthFunc(o.NEVER);break;case ud:o.depthFunc(o.ALWAYS);break;case fd:o.depthFunc(o.LESS);break;case jr:o.depthFunc(o.LEQUAL);break;case hd:o.depthFunc(o.EQUAL);break;case dd:o.depthFunc(o.GEQUAL);break;case pd:o.depthFunc(o.GREATER);break;case md:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=yt}},setLocked:function(yt){V=yt},setClear:function(yt){Nt!==yt&&(Nt=yt,At&&(yt=1-yt),o.clearDepth(yt))},reset:function(){V=!1,ht=null,Ft=null,Nt=null,At=!1}}}function l(){let V=!1,At=null,ht=null,Ft=null,Nt=null,yt=null,jt=null,ie=null,rn=null;return{setTest:function(Oe){V||(Oe?bt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Oe){At!==Oe&&!V&&(o.stencilMask(Oe),At=Oe)},setFunc:function(Oe,si,Hn){(ht!==Oe||Ft!==si||Nt!==Hn)&&(o.stencilFunc(Oe,si,Hn),ht=Oe,Ft=si,Nt=Hn)},setOp:function(Oe,si,Hn){(yt!==Oe||jt!==si||ie!==Hn)&&(o.stencilOp(Oe,si,Hn),yt=Oe,jt=si,ie=Hn)},setLocked:function(Oe){V=Oe},setClear:function(Oe){rn!==Oe&&(o.clearStencil(Oe),rn=Oe)},reset:function(){V=!1,At=null,ht=null,Ft=null,Nt=null,yt=null,jt=null,ie=null,rn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let S={},v={},g={},y=new WeakMap,b=[],w=null,M=!1,x=null,C=null,I=null,L=null,H=null,P=null,N=null,T=new be(0,0,0),U=0,Z=!1,G=null,j=null,ot=null,ct=null,X=null;const O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,rt=0;const pt=o.getParameter(o.VERSION);pt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),B=rt>=1):pt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),B=rt>=2);let Mt=null,z={};const $=o.getParameter(o.SCISSOR_BOX),gt=o.getParameter(o.VIEWPORT),Rt=new Mn().fromArray($),Lt=new Mn().fromArray(gt);function st(V,At,ht,Ft){const Nt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(V,yt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<ht;jt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(At+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return yt}const St={};St[o.TEXTURE_2D]=st(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=st(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=st(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=st(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),bt(o.DEPTH_TEST),h.setFunc(jr),vn(!1),tn(p_),bt(o.CULL_FACE),we(Ga);function bt(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function Ht(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function se(V,At){return g[V]!==At?(o.bindFramebuffer(V,At),g[V]=At,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=At),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ne(V,At){let ht=b,Ft=!1;if(V){ht=y.get(At),ht===void 0&&(ht=[],y.set(At,ht));const Nt=V.textures;if(ht.length!==Nt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,jt=Nt.length;yt<jt;yt++)ht[yt]=o.COLOR_ATTACHMENT0+yt;ht.length=Nt.length,Ft=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(ht)}function We(V){return w!==V?(o.useProgram(V),w=V,!0):!1}const ge={[Ys]:o.FUNC_ADD,[My]:o.FUNC_SUBTRACT,[Ey]:o.FUNC_REVERSE_SUBTRACT};ge[by]=o.MIN,ge[Ty]=o.MAX;const Se={[Ay]:o.ZERO,[Ry]:o.ONE,[wy]:o.SRC_COLOR,[od]:o.SRC_ALPHA,[Oy]:o.SRC_ALPHA_SATURATE,[Ny]:o.DST_COLOR,[Dy]:o.DST_ALPHA,[Cy]:o.ONE_MINUS_SRC_COLOR,[ld]:o.ONE_MINUS_SRC_ALPHA,[Ly]:o.ONE_MINUS_DST_COLOR,[Uy]:o.ONE_MINUS_DST_ALPHA,[Py]:o.CONSTANT_COLOR,[Iy]:o.ONE_MINUS_CONSTANT_COLOR,[zy]:o.CONSTANT_ALPHA,[By]:o.ONE_MINUS_CONSTANT_ALPHA};function we(V,At,ht,Ft,Nt,yt,jt,ie,rn,Oe){if(V===Ga){M===!0&&(Ht(o.BLEND),M=!1);return}if(M===!1&&(bt(o.BLEND),M=!0),V!==yy){if(V!==x||Oe!==Z){if((C!==Ys||H!==Ys)&&(o.blendEquation(o.FUNC_ADD),C=Ys,H=Ys),Oe)switch(V){case qr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rd:o.blendFunc(o.ONE,o.ONE);break;case m_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case g_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Le("WebGLState: Invalid blending: ",V);break}else switch(V){case qr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case m_:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",V);break}I=null,L=null,P=null,N=null,T.set(0,0,0),U=0,x=V,Z=Oe}return}Nt=Nt||At,yt=yt||ht,jt=jt||Ft,(At!==C||Nt!==H)&&(o.blendEquationSeparate(ge[At],ge[Nt]),C=At,H=Nt),(ht!==I||Ft!==L||yt!==P||jt!==N)&&(o.blendFuncSeparate(Se[ht],Se[Ft],Se[yt],Se[jt]),I=ht,L=Ft,P=yt,N=jt),(ie.equals(T)===!1||rn!==U)&&(o.blendColor(ie.r,ie.g,ie.b,rn),T.copy(ie),U=rn),x=V,Z=!1}function ue(V,At){V.side===Ji?Ht(o.CULL_FACE):bt(o.CULL_FACE);let ht=V.side===pi;At&&(ht=!ht),vn(ht),V.blending===qr&&V.transparent===!1?we(Ga):we(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ft=V.stencilWrite;p.setTest(Ft),Ft&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function vn(V){G!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),G=V)}function tn(V){V!==vy?(bt(o.CULL_FACE),V!==j&&(V===p_?o.cullFace(o.BACK):V===xy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),j=V}function An(V){V!==ot&&(B&&o.lineWidth(V),ot=V)}function q(V,At,ht){V?(bt(o.POLYGON_OFFSET_FILL),(ct!==At||X!==ht)&&(ct=At,X=ht,h.getReversed()&&(At=-At),o.polygonOffset(At,ht))):Ht(o.POLYGON_OFFSET_FILL)}function un(V){V?bt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function pe(V){V===void 0&&(V=o.TEXTURE0+O-1),Mt!==V&&(o.activeTexture(V),Mt=V)}function Fe(V,At,ht){ht===void 0&&(Mt===null?ht=o.TEXTURE0+O-1:ht=Mt);let Ft=z[ht];Ft===void 0&&(Ft={type:void 0,texture:void 0},z[ht]=Ft),(Ft.type!==V||Ft.texture!==At)&&(Mt!==ht&&(o.activeTexture(ht),Mt=ht),o.bindTexture(V,At||St[V]),Ft.type=V,Ft.texture=At)}function wt(){const V=z[Mt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function cn(){try{o.compressedTexImage2D(...arguments)}catch(V){Le("WebGLState:",V)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(V){Le("WebGLState:",V)}}function E(){try{o.texSubImage2D(...arguments)}catch(V){Le("WebGLState:",V)}}function J(){try{o.texSubImage3D(...arguments)}catch(V){Le("WebGLState:",V)}}function mt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){Le("WebGLState:",V)}}function Et(){try{o.compressedTexSubImage3D(...arguments)}catch(V){Le("WebGLState:",V)}}function Ct(){try{o.texStorage2D(...arguments)}catch(V){Le("WebGLState:",V)}}function Ot(){try{o.texStorage3D(...arguments)}catch(V){Le("WebGLState:",V)}}function ut(){try{o.texImage2D(...arguments)}catch(V){Le("WebGLState:",V)}}function ft(){try{o.texImage3D(...arguments)}catch(V){Le("WebGLState:",V)}}function Pt(V){return v[V]!==void 0?v[V]:o.getParameter(V)}function It(V,At){v[V]!==At&&(o.pixelStorei(V,At),v[V]=At)}function Ut(V){Rt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Rt.copy(V))}function Dt(V){Lt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Lt.copy(V))}function Qt(V,At){let ht=d.get(At);ht===void 0&&(ht=new WeakMap,d.set(At,ht));let Ft=ht.get(V);Ft===void 0&&(Ft=o.getUniformBlockIndex(At,V.name),ht.set(V,Ft))}function le(V,At){const Ft=d.get(At).get(V);m.get(At)!==Ft&&(o.uniformBlockBinding(At,Ft,V.__bindingPointIndex),m.set(At,Ft))}function _e(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},Mt=null,z={},g={},y=new WeakMap,b=[],w=null,M=!1,x=null,C=null,I=null,L=null,H=null,P=null,N=null,T=new be(0,0,0),U=0,Z=!1,G=null,j=null,ot=null,ct=null,X=null,Rt.set(0,0,o.canvas.width,o.canvas.height),Lt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:bt,disable:Ht,bindFramebuffer:se,drawBuffers:ne,useProgram:We,setBlending:we,setMaterial:ue,setFlipSided:vn,setCullFace:tn,setLineWidth:An,setPolygonOffset:q,setScissorTest:un,activeTexture:pe,bindTexture:Fe,unbindTexture:wt,compressedTexImage2D:cn,compressedTexImage3D:D,texImage2D:ut,texImage3D:ft,pixelStorei:It,getParameter:Pt,updateUBOMapping:Qt,uniformBlockBinding:le,texStorage2D:Ct,texStorage3D:Ot,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:Ut,viewport:Dt,reset:_e}}function AA(o,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ne,S=new WeakMap,v=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return b?new OffscreenCanvas(D,E):au("canvas")}function M(D,E,J){let mt=1;const Et=cn(D);if((Et.width>J||Et.height>J)&&(mt=J/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ct=Math.floor(mt*Et.width),Ot=Math.floor(mt*Et.height);g===void 0&&(g=w(Ct,Ot));const ut=E?w(Ct,Ot):g;return ut.width=Ct,ut.height=Ot,ut.getContext("2d").drawImage(D,0,0,Ct,Ot),ce("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Ct+"x"+Ot+")."),ut}else return"data"in D&&ce("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),D;return D}function x(D){return D.generateMipmaps}function C(D){o.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,E,J,mt,Et,Ct=!1){if(D!==null){if(o[D]!==void 0)return o[D];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ot;mt&&(Ot=t.get("EXT_texture_norm16"),Ot||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=E;if(E===o.RED&&(J===o.FLOAT&&(ut=o.R32F),J===o.HALF_FLOAT&&(ut=o.R16F),J===o.UNSIGNED_BYTE&&(ut=o.R8),J===o.UNSIGNED_SHORT&&Ot&&(ut=Ot.R16_EXT),J===o.SHORT&&Ot&&(ut=Ot.R16_SNORM_EXT)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.R8UI),J===o.UNSIGNED_SHORT&&(ut=o.R16UI),J===o.UNSIGNED_INT&&(ut=o.R32UI),J===o.BYTE&&(ut=o.R8I),J===o.SHORT&&(ut=o.R16I),J===o.INT&&(ut=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ut=o.RG32F),J===o.HALF_FLOAT&&(ut=o.RG16F),J===o.UNSIGNED_BYTE&&(ut=o.RG8),J===o.UNSIGNED_SHORT&&Ot&&(ut=Ot.RG16_EXT),J===o.SHORT&&Ot&&(ut=Ot.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RG8UI),J===o.UNSIGNED_SHORT&&(ut=o.RG16UI),J===o.UNSIGNED_INT&&(ut=o.RG32UI),J===o.BYTE&&(ut=o.RG8I),J===o.SHORT&&(ut=o.RG16I),J===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),J===o.UNSIGNED_INT&&(ut=o.RGB32UI),J===o.BYTE&&(ut=o.RGB8I),J===o.SHORT&&(ut=o.RGB16I),J===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),J===o.UNSIGNED_INT&&(ut=o.RGBA32UI),J===o.BYTE&&(ut=o.RGBA8I),J===o.SHORT&&(ut=o.RGBA16I),J===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_SHORT&&Ot&&(ut=Ot.RGB16_EXT),J===o.SHORT&&Ot&&(ut=Ot.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const ft=Ct?iu:De.getTransfer(Et);J===o.FLOAT&&(ut=o.RGBA32F),J===o.HALF_FLOAT&&(ut=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ut=ft===Je?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Ot&&(ut=Ot.RGBA16_EXT),J===o.SHORT&&Ot&&(ut=Ot.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function H(D,E){let J;return D?E===null||E===pa||E===al?J=o.DEPTH24_STENCIL8:E===ua?J=o.DEPTH32F_STENCIL8:E===il&&(J=o.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pa||E===al?J=o.DEPTH_COMPONENT24:E===ua?J=o.DEPTH_COMPONENT32F:E===il&&(J=o.DEPTH_COMPONENT16),J}function P(D,E){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==jn&&D.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function N(D){const E=D.target;E.removeEventListener("dispose",N),U(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),G(E)}function U(D){const E=s.get(D);if(E.__webglInit===void 0)return;const J=D.source,mt=y.get(J);if(mt){const Et=mt[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&Z(D),Object.keys(mt).length===0&&y.delete(J)}s.remove(D)}function Z(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const J=D.source,mt=y.get(J);delete mt[E.__cacheKey],h.memory.textures--}function G(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let Et=0;Et<E.__webglFramebuffer[mt].length;Et++)o.deleteFramebuffer(E.__webglFramebuffer[mt][Et]);else o.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)o.deleteFramebuffer(E.__webglFramebuffer[mt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=D.textures;for(let mt=0,Et=J.length;mt<Et;mt++){const Ct=s.get(J[mt]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),h.memory.textures--),s.remove(J[mt])}s.remove(D)}let j=0;function ot(){j=0}function ct(){return j}function X(D){j=D}function O(){const D=j;return D>=l.maxTextures&&ce("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function B(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function rt(D,E){const J=s.get(D);if(D.isVideoTexture&&Fe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const mt=D.image;if(mt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,D,E);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function pt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ht(J,D,E);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function Mt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ht(J,D,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function z(D,E){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){se(J,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const $={[gd]:o.REPEAT,[Fa]:o.CLAMP_TO_EDGE,[_d]:o.MIRRORED_REPEAT},gt={[jn]:o.NEAREST,[Hy]:o.NEAREST_MIPMAP_NEAREST,[_c]:o.NEAREST_MIPMAP_LINEAR,[ti]:o.LINEAR,[Ah]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},Rt={[Xy]:o.NEVER,[Zy]:o.ALWAYS,[Wy]:o.LESS,[up]:o.LEQUAL,[qy]:o.EQUAL,[fp]:o.GEQUAL,[Yy]:o.GREATER,[jy]:o.NOTEQUAL};function Lt(D,E){if(E.type===ua&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===Ah||E.magFilter===_c||E.magFilter===Zs||E.minFilter===ti||E.minFilter===Ah||E.minFilter===_c||E.minFilter===Zs)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,$[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,$[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,$[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,gt[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,Rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jn||E.minFilter!==_c&&E.minFilter!==Zs||E.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function st(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",N));const mt=E.source;let Et=y.get(mt);Et===void 0&&(Et={},y.set(mt,Et));const Ct=B(E);if(Ct!==D.__cacheKey){Et[Ct]===void 0&&(Et[Ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Et[Ct].usedTimes++;const Ot=Et[D.__cacheKey];Ot!==void 0&&(Et[D.__cacheKey].usedTimes--,Ot.usedTimes===0&&Z(E)),D.__cacheKey=Ct,D.__webglTexture=Et[Ct].texture}return J}function St(D,E,J){return Math.floor(Math.floor(D/J)/E)}function bt(D,E,J,mt){const Ct=D.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,mt,E.data);else{Ct.sort((It,Ut)=>It.start-Ut.start);let Ot=0;for(let It=1;It<Ct.length;It++){const Ut=Ct[Ot],Dt=Ct[It],Qt=Ut.start+Ut.count,le=St(Dt.start,E.width,4),_e=St(Ut.start,E.width,4);Dt.start<=Qt+1&&le===_e&&St(Dt.start+Dt.count-1,E.width,4)===le?Ut.count=Math.max(Ut.count,Dt.start+Dt.count-Ut.start):(++Ot,Ct[Ot]=Dt)}Ct.length=Ot+1;const ut=i.getParameter(o.UNPACK_ROW_LENGTH),ft=i.getParameter(o.UNPACK_SKIP_PIXELS),Pt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let It=0,Ut=Ct.length;It<Ut;It++){const Dt=Ct[It],Qt=Math.floor(Dt.start/4),le=Math.ceil(Dt.count/4),_e=Qt%E.width,V=Math.floor(Qt/E.width),At=le,ht=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,_e,V,At,ht,J,mt,E.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ut),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(o.UNPACK_SKIP_ROWS,Pt)}}function Ht(D,E,J){let mt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=o.TEXTURE_3D);const Et=st(D,E),Ct=E.source;i.bindTexture(mt,D.__webglTexture,o.TEXTURE0+J);const Ot=s.get(Ct);if(Ct.version!==Ot.__version||Et===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ht=De.getPrimaries(De.workingColorSpace),Ft=E.colorSpace===Ss?null:De.getPrimaries(E.colorSpace),Nt=E.colorSpace===Ss||ht===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let ft=M(E.image,!1,l.maxTextureSize);ft=wt(E,ft);const Pt=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let Ut=L(E.internalFormat,Pt,It,E.normalized,E.colorSpace,E.isVideoTexture);Lt(mt,E);let Dt;const Qt=E.mipmaps,le=E.isVideoTexture!==!0,_e=Ot.__version===void 0||Et===!0,V=Ct.dataReady,At=P(E,ft);if(E.isDepthTexture)Ut=H(E.format===Ks,E.type),_e&&(le?i.texStorage2D(o.TEXTURE_2D,1,Ut,ft.width,ft.height):i.texImage2D(o.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Pt,It,null));else if(E.isDataTexture)if(Qt.length>0){le&&_e&&i.texStorage2D(o.TEXTURE_2D,At,Ut,Qt[0].width,Qt[0].height);for(let ht=0,Ft=Qt.length;ht<Ft;ht++)Dt=Qt[ht],le?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Pt,It,Dt.data):i.texImage2D(o.TEXTURE_2D,ht,Ut,Dt.width,Dt.height,0,Pt,It,Dt.data);E.generateMipmaps=!1}else le?(_e&&i.texStorage2D(o.TEXTURE_2D,At,Ut,ft.width,ft.height),V&&bt(E,ft,Pt,It)):i.texImage2D(o.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Pt,It,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){le&&_e&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Ut,Qt[0].width,Qt[0].height,ft.depth);for(let ht=0,Ft=Qt.length;ht<Ft;ht++)if(Dt=Qt[ht],E.format!==$i)if(Pt!==null)if(le){if(V)if(E.layerUpdates.size>0){const Nt=J_(Dt.width,Dt.height,E.format,E.type);for(const yt of E.layerUpdates){const jt=Dt.data.subarray(yt*Nt/Dt.data.BYTES_PER_ELEMENT,(yt+1)*Nt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,yt,Dt.width,Dt.height,1,Pt,jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Dt.width,Dt.height,ft.depth,Pt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,Ut,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Dt.width,Dt.height,ft.depth,Pt,It,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,Ut,Dt.width,Dt.height,ft.depth,0,Pt,It,Dt.data)}else{le&&_e&&i.texStorage2D(o.TEXTURE_2D,At,Ut,Qt[0].width,Qt[0].height);for(let ht=0,Ft=Qt.length;ht<Ft;ht++)Dt=Qt[ht],E.format!==$i?Pt!==null?le?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Pt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,Ut,Dt.width,Dt.height,0,Dt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Pt,It,Dt.data):i.texImage2D(o.TEXTURE_2D,ht,Ut,Dt.width,Dt.height,0,Pt,It,Dt.data)}else if(E.isDataArrayTexture)if(le){if(_e&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Ut,ft.width,ft.height,ft.depth),V)if(E.layerUpdates.size>0){const ht=J_(ft.width,ft.height,E.format,E.type);for(const Ft of E.layerUpdates){const Nt=ft.data.subarray(Ft*ht/ft.data.BYTES_PER_ELEMENT,(Ft+1)*ht/ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ft,ft.width,ft.height,1,Pt,It,Nt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Pt,It,ft.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,ft.width,ft.height,ft.depth,0,Pt,It,ft.data);else if(E.isData3DTexture)le?(_e&&i.texStorage3D(o.TEXTURE_3D,At,Ut,ft.width,ft.height,ft.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Pt,It,ft.data)):i.texImage3D(o.TEXTURE_3D,0,Ut,ft.width,ft.height,ft.depth,0,Pt,It,ft.data);else if(E.isFramebufferTexture){if(_e)if(le)i.texStorage2D(o.TEXTURE_2D,At,Ut,ft.width,ft.height);else{let ht=ft.width,Ft=ft.height;for(let Nt=0;Nt<At;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Ut,ht,Ft,0,Pt,It,null),ht>>=1,Ft>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const ht=o.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ft.parentNode!==ht){ht.appendChild(ft),v.add(E),ht.onpaint=ie=>{const rn=ie.changedElements;for(const Oe of v)rn.includes(Oe.image)&&(Oe.needsUpdate=!0)},ht.requestPaint();return}const Ft=0,Nt=o.RGBA,yt=o.RGBA,jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Ft,Nt,yt,jt,ft),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Qt.length>0){if(le&&_e){const ht=cn(Qt[0]);i.texStorage2D(o.TEXTURE_2D,At,Ut,ht.width,ht.height)}for(let ht=0,Ft=Qt.length;ht<Ft;ht++)Dt=Qt[ht],le?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Pt,It,Dt):i.texImage2D(o.TEXTURE_2D,ht,Ut,Pt,It,Dt);E.generateMipmaps=!1}else if(le){if(_e){const ht=cn(ft);i.texStorage2D(o.TEXTURE_2D,At,Ut,ht.width,ht.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,It,ft)}else i.texImage2D(o.TEXTURE_2D,0,Ut,Pt,It,ft);x(E)&&C(mt),Ot.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function se(D,E,J){if(E.image.length!==6)return;const mt=st(D,E),Et=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const Ct=s.get(Et);if(Et.version!==Ct.__version||mt===!0){i.activeTexture(o.TEXTURE0+J);const Ot=De.getPrimaries(De.workingColorSpace),ut=E.colorSpace===Ss?null:De.getPrimaries(E.colorSpace),ft=E.colorSpace===Ss||Ot===ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let yt=0;yt<6;yt++)!Pt&&!It?Ut[yt]=M(E.image[yt],!0,l.maxCubemapSize):Ut[yt]=It?E.image[yt].image:E.image[yt],Ut[yt]=wt(E,Ut[yt]);const Dt=Ut[0],Qt=c.convert(E.format,E.colorSpace),le=c.convert(E.type),_e=L(E.internalFormat,Qt,le,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,At=Ct.__version===void 0||mt===!0,ht=Et.dataReady;let Ft=P(E,Dt);Lt(o.TEXTURE_CUBE_MAP,E);let Nt;if(Pt){V&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,_e,Dt.width,Dt.height);for(let yt=0;yt<6;yt++){Nt=Ut[yt].mipmaps;for(let jt=0;jt<Nt.length;jt++){const ie=Nt[jt];E.format!==$i?Qt!==null?V?ht&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt,0,0,ie.width,ie.height,Qt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt,_e,ie.width,ie.height,0,ie.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt,0,0,ie.width,ie.height,Qt,le,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt,_e,ie.width,ie.height,0,Qt,le,ie.data)}}}else{if(Nt=E.mipmaps,V&&At){Nt.length>0&&Ft++;const yt=cn(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,_e,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(It){V?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ut[yt].width,Ut[yt].height,Qt,le,Ut[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_e,Ut[yt].width,Ut[yt].height,0,Qt,le,Ut[yt].data);for(let jt=0;jt<Nt.length;jt++){const rn=Nt[jt].image[yt].image;V?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt+1,0,0,rn.width,rn.height,Qt,le,rn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt+1,_e,rn.width,rn.height,0,Qt,le,rn.data)}}else{V?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Qt,le,Ut[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_e,Qt,le,Ut[yt]);for(let jt=0;jt<Nt.length;jt++){const ie=Nt[jt];V?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt+1,0,0,Qt,le,ie.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,jt+1,_e,Qt,le,ie.image[yt])}}}x(E)&&C(o.TEXTURE_CUBE_MAP),Ct.__version=Et.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ne(D,E,J,mt,Et,Ct){const Ot=c.convert(J.format,J.colorSpace),ut=c.convert(J.type),ft=L(J.internalFormat,Ot,ut,J.normalized,J.colorSpace),Pt=s.get(E),It=s.get(J);if(It.__renderTarget=E,!Pt.__hasExternalTextures){const Ut=Math.max(1,E.width>>Ct),Dt=Math.max(1,E.height>>Ct);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,Ct,ft,Ut,Dt,E.depth,0,Ot,ut,null):i.texImage2D(Et,Ct,ft,Ut,Dt,0,Ot,ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),pe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,Et,It.__webglTexture,0,un(E)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,Et,It.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function We(D,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const mt=E.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,Ct=H(E.stencilBuffer,Et),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;pe(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,un(E),Ct,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,un(E),Ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,D)}else{const mt=E.textures;for(let Et=0;Et<mt.length;Et++){const Ct=mt[Et],Ot=c.convert(Ct.format,Ct.colorSpace),ut=c.convert(Ct.type),ft=L(Ct.internalFormat,Ot,ut,Ct.normalized,Ct.colorSpace);pe(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,un(E),ft,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,un(E),ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ge(D,E,J){const mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(E.depthTexture);if(Et.__renderTarget=E,(!Et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),Et.__webglTexture===void 0){Et.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),Lt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Pt=c.convert(E.depthTexture.format),It=c.convert(E.depthTexture.type);let Ut;E.depthTexture.format===ka?Ut=o.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(Ut=o.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Ut,E.width,E.height,0,Pt,It,null)}}else rt(E.depthTexture,0);const Ct=Et.__webglTexture,Ot=un(E),ut=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,ft=E.depthTexture.format===Ks?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ka)pe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,ut,Ct,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,ft,ut,Ct,0);else if(E.depthTexture.format===Ks)pe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,ut,Ct,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,ft,ut,Ct,0);else throw new Error("Unknown depthTexture format")}function Se(D){const E=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const mt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=mt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let mt=0;mt<6;mt++)ge(E.__webglFramebuffer[mt],D,mt);else{const mt=D.texture.mipmaps;mt&&mt.length>0?ge(E.__webglFramebuffer[0],D,0):ge(E.__webglFramebuffer,D,0)}else if(J){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=o.createRenderbuffer(),We(E.__webglDepthbuffer[mt],D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}else{const mt=D.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),We(E.__webglDepthbuffer,D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function we(D,E,J){const mt=s.get(D);E!==void 0&&ne(mt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Se(D)}function ue(D){const E=D.texture,J=s.get(D),mt=s.get(E);D.addEventListener("dispose",T);const Et=D.textures,Ct=D.isWebGLCubeRenderTarget===!0,Ot=Et.length>1;if(Ot||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=E.version,h.memory.textures++),Ct){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let ft=0;ft<E.mipmaps.length;ft++)J.__webglFramebuffer[ut][ft]=o.createFramebuffer()}else J.__webglFramebuffer[ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)J.__webglFramebuffer[ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let ut=0,ft=Et.length;ut<ft;ut++){const Pt=s.get(Et[ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&pe(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<Et.length;ut++){const ft=Et[ut];J.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Pt=c.convert(ft.format,ft.colorSpace),It=c.convert(ft.type),Ut=L(ft.internalFormat,Pt,It,ft.normalized,ft.colorSpace,D.isXRRenderTarget===!0),Dt=un(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Ut,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ut,o.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),We(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),Lt(o.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)ne(J.__webglFramebuffer[ut][ft],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else ne(J.__webglFramebuffer[ut],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);x(E)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let ut=0,ft=Et.length;ut<ft;ut++){const Pt=Et[ut],It=s.get(Pt);let Ut=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,It.__webglTexture),Lt(Ut,Pt),ne(J.__webglFramebuffer,D,Pt,o.COLOR_ATTACHMENT0+ut,Ut,0),x(Pt)&&C(Ut)}i.unbindTexture()}else{let ut=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ut,mt.__webglTexture),Lt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)ne(J.__webglFramebuffer[ft],D,E,o.COLOR_ATTACHMENT0,ut,ft);else ne(J.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,ut,0);x(E)&&C(ut),i.unbindTexture()}D.depthBuffer&&Se(D)}function vn(D){const E=D.textures;for(let J=0,mt=E.length;J<mt;J++){const Et=E[J];if(x(Et)){const Ct=I(D),Ot=s.get(Et).__webglTexture;i.bindTexture(Ct,Ot),C(Ct),i.unbindTexture()}}}const tn=[],An=[];function q(D){if(D.samples>0){if(pe(D)===!1){const E=D.textures,J=D.width,mt=D.height;let Et=o.COLOR_BUFFER_BIT;const Ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=s.get(D),ut=E.length>1;if(ut)for(let Pt=0;Pt<E.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const ft=D.texture.mipmaps;ft&&ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const It=s.get(E[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,It,0)}o.blitFramebuffer(0,0,J,mt,0,0,J,mt,Et,o.NEAREST),m===!0&&(tn.length=0,An.length=0,tn.push(o.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tn.push(Ct),An.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,An)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ut)for(let Pt=0;Pt<E.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const It=s.get(E[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,It,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function un(D){return Math.min(l.maxSamples,D.samples)}function pe(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(D){const E=h.render.frame;S.get(D)!==E&&(S.set(D,E),D.update())}function wt(D,E){const J=D.colorSpace,mt=D.format,Et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==nu&&J!==Ss&&(De.getTransfer(J)===Je?(mt!==$i||Et!==Ri)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",J)),E}function cn(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=ot,this.getTextureUnits=ct,this.setTextureUnits=X,this.setTexture2D=rt,this.setTexture2DArray=pt,this.setTexture3D=Mt,this.setTextureCube=z,this.rebindTextures=we,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=vn,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function RA(o,t){function i(s,l=Ss){let c;const h=De.getTransfer(l);if(s===Ri)return o.UNSIGNED_BYTE;if(s===sp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Iv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lv)return o.BYTE;if(s===Ov)return o.SHORT;if(s===il)return o.UNSIGNED_SHORT;if(s===ap)return o.INT;if(s===pa)return o.UNSIGNED_INT;if(s===ua)return o.FLOAT;if(s===Va)return o.HALF_FLOAT;if(s===zv)return o.ALPHA;if(s===Bv)return o.RGB;if(s===$i)return o.RGBA;if(s===ka)return o.DEPTH_COMPONENT;if(s===Ks)return o.DEPTH_STENCIL;if(s===Fv)return o.RED;if(s===op)return o.RED_INTEGER;if(s===Js)return o.RG;if(s===lp)return o.RG_INTEGER;if(s===cp)return o.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(h===Je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vd||s===xd||s===Sd||s===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Md||s===Ed||s===bd||s===Td||s===Ad||s===tu||s===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Md||s===Ed)return h===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Td)return c.COMPRESSED_R11_EAC;if(s===Ad)return c.COMPRESSED_SIGNED_R11_EAC;if(s===tu)return c.COMPRESSED_RG11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===wd||s===Cd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===Id||s===zd||s===Bd||s===Fd||s===Gd||s===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===wd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return h===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===eu||s===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===eu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Yv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ma({vertexShader:wA,fragmentShader:CA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qe(new fu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends $s{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,S=null,v=null,g=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",M=new DA,x={},C=i.getContextAttributes();let I=null,L=null;const H=[],P=[],N=new Ne;let T=null;const U=new Ai;U.viewport=new Mn;const Z=new Ai;Z.viewport=new Mn;const G=[U,Z],j=new FM;let ot=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let St=H[st];return St===void 0&&(St=new Lh,H[st]=St),St.getTargetRaySpace()},this.getControllerGrip=function(st){let St=H[st];return St===void 0&&(St=new Lh,H[st]=St),St.getGripSpace()},this.getHand=function(st){let St=H[st];return St===void 0&&(St=new Lh,H[st]=St),St.getHandSpace()};function X(st){const St=P.indexOf(st.inputSource);if(St===-1)return;const bt=H[St];bt!==void 0&&(bt.update(st.inputSource,st.frame,d||h),bt.dispatchEvent({type:st.type,data:st.inputSource}))}function O(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let st=0;st<H.length;st++){const St=P[st];St!==null&&(P[st]=null,H[st].disconnect(St))}ot=null,ct=null,M.reset();for(const st in x)delete x[st];t.setRenderTarget(I),y=null,g=null,v=null,l=null,L=null,Lt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){p=st,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(st){d=st},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,se=null;C.depth&&(se=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=C.stencil?Ks:ka,Ht=C.stencil?al:pa);const ne={colorFormat:i.RGBA8,depthFormat:se,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ne),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new da(g.textureWidth,g.textureHeight,{format:$i,type:Ri,depthTexture:new Kr(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new da(y.framebufferWidth,y.framebufferHeight,{format:$i,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Lt.setContext(l),Lt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(st){for(let St=0;St<st.removed.length;St++){const bt=st.removed[St],Ht=P.indexOf(bt);Ht>=0&&(P[Ht]=null,H[Ht].disconnect(bt))}for(let St=0;St<st.added.length;St++){const bt=st.added[St];let Ht=P.indexOf(bt);if(Ht===-1){for(let ne=0;ne<H.length;ne++)if(ne>=P.length){P.push(bt),Ht=ne;break}else if(P[ne]===null){P[ne]=bt,Ht=ne;break}if(Ht===-1)break}const se=H[Ht];se&&se.connect(bt)}}const rt=new Y,pt=new Y;function Mt(st,St,bt){rt.setFromMatrixPosition(St.matrixWorld),pt.setFromMatrixPosition(bt.matrixWorld);const Ht=rt.distanceTo(pt),se=St.projectionMatrix.elements,ne=bt.projectionMatrix.elements,We=se[14]/(se[10]-1),ge=se[14]/(se[10]+1),Se=(se[9]+1)/se[5],we=(se[9]-1)/se[5],ue=(se[8]-1)/se[0],vn=(ne[8]+1)/ne[0],tn=We*ue,An=We*vn,q=Ht/(-ue+vn),un=q*-ue;if(St.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(un),st.translateZ(q),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),se[10]===-1)st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const pe=We+q,Fe=ge+q,wt=tn-un,cn=An+(Ht-un),D=Se*ge/Fe*pe,E=we*ge/Fe*pe;st.projectionMatrix.makePerspective(wt,cn,D,E,pe,Fe),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function z(st,St){St===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(St.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let St=st.near,bt=st.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),j.near=Z.near=U.near=St,j.far=Z.far=U.far=bt,(ot!==j.near||ct!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),ot=j.near,ct=j.far),j.layers.mask=st.layers.mask|6,U.layers.mask=j.layers.mask&-5,Z.layers.mask=j.layers.mask&-3;const Ht=st.parent,se=j.cameras;z(j,Ht);for(let ne=0;ne<se.length;ne++)z(se[ne],Ht);se.length===2?Mt(j,U,Z):j.projectionMatrix.copy(U.projectionMatrix),$(st,j,Ht)};function $(st,St,bt){bt===null?st.matrix.copy(St.matrixWorld):(st.matrix.copy(bt.matrixWorld),st.matrix.invert(),st.matrix.multiply(St.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Kd*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(st){m=st,g!==null&&(g.fixedFoveation=st),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(st){return x[st]};let gt=null;function Rt(st,St){if(S=St.getViewerPose(d||h),b=St,S!==null){const bt=S.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Ht=!1;bt.length!==j.cameras.length&&(j.cameras.length=0,Ht=!0);for(let ge=0;ge<bt.length;ge++){const Se=bt[ge];let we=null;if(y!==null)we=y.getViewport(Se);else{const vn=v.getViewSubImage(g,Se);we=vn.viewport,ge===0&&(t.setRenderTargetTextures(L,vn.colorTexture,vn.depthStencilTexture),t.setRenderTarget(L))}let ue=G[ge];ue===void 0&&(ue=new Ai,ue.layers.enable(ge),ue.viewport=new Mn,G[ge]=ue),ue.matrix.fromArray(Se.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Se.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(j.matrix.copy(ue.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ht===!0&&j.cameras.push(ue)}const se=l.enabledFeatures;if(se&&se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const ge=v.getDepthInformation(bt[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(se&&se.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let ge=0;ge<bt.length;ge++){const Se=bt[ge].camera;if(Se){let we=x[Se];we||(we=new Yv,x[Se]=we);const ue=v.getCameraImage(Se);we.sourceTexture=ue}}}}for(let bt=0;bt<H.length;bt++){const Ht=P[bt],se=H[bt];Ht!==null&&se!==void 0&&se.update(Ht,St,d||h)}gt&&gt(st,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),b=null}const Lt=new Qv;Lt.setAnimationLoop(Rt),this.setAnimationLoop=function(st){gt=st},this.dispose=function(){}}}const NA=new _n,ax=new de;ax.set(-1,0,0,0,1,0,0,0,1);function LA(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,jv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,C,I,L){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&y(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,C,I):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===pi&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===pi&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const C=t.get(x),I=C.envMap,L=C.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(L)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(ax),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,C,I){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*C,M.scale.value=I*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,C){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const C=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OA(o,t,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const L=I.program;s.uniformBlockBinding(C,L)}function d(C,I){let L=l[C.id];L===void 0&&(b(C),L=S(C),l[C.id]=L,C.addEventListener("dispose",M));const H=I.program;s.updateUBOMapping(C,H);const P=t.render.frame;c[C.id]!==P&&(g(C),c[C.id]=P)}function S(C){const I=v();C.__bindingPointIndex=I;const L=o.createBuffer(),H=C.__size,P=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,H,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,L),L}function v(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const I=l[C.id],L=C.uniforms,H=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let P=0,N=L.length;P<N;P++){const T=Array.isArray(L[P])?L[P]:[L[P]];for(let U=0,Z=T.length;U<Z;U++){const G=T[U];if(y(G,P,U,H)===!0){const j=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let ct=0;for(let X=0;X<ot.length;X++){const O=ot[X],B=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,j+ct,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):ArrayBuffer.isView(O)?G.__data.set(new O.constructor(O.buffer,O.byteOffset,G.__data.length)):(O.toArray(G.__data,ct),ct+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,I,L,H){const P=C.value,N=I+"_"+L;if(H[N]===void 0)return typeof P=="number"||typeof P=="boolean"?H[N]=P:ArrayBuffer.isView(P)?H[N]=P.slice():H[N]=P.clone(),!0;{const T=H[N];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return H[N]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(T.equals(P)===!1)return T.copy(P),!0}}return!1}function b(C){const I=C.uniforms;let L=0;const H=16;for(let N=0,T=I.length;N<T;N++){const U=Array.isArray(I[N])?I[N]:[I[N]];for(let Z=0,G=U.length;Z<G;Z++){const j=U[Z],ot=Array.isArray(j.value)?j.value:[j.value];for(let ct=0,X=ot.length;ct<X;ct++){const O=ot[ct],B=w(O),rt=L%H,pt=rt%B.boundary,Mt=rt+pt;L+=pt,Mt!==0&&H-Mt<B.storage&&(L+=H-Mt),j.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=B.storage}}}const P=L%H;return P>0&&(L+=H-P),C.__size=L,C.__cache={},this}function w(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",C),I}function M(C){const I=C.target;I.removeEventListener("dispose",M);const L=h.indexOf(I.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function x(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:x}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function IA(){return oa===null&&(oa=new SM(PA,16,16,Js,Va),oa.name="DFG_LUT",oa.minFilter=ti,oa.magFilter=ti,oa.wrapS=Fa,oa.wrapT=Fa,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class zA{constructor(t={}){const{canvas:i=Qy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=y,M=new Set([cp,lp,op]),x=new Set([Ri,pa,il,al,sp,rp]),C=new Uint32Array(4),I=new Int32Array(4),L=new Y;let H=null,P=null;const N=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let G=!1,j=null;this._outputColorSpace=Bi;let ot=0,ct=0,X=null,O=-1,B=null;const rt=new Mn,pt=new Mn;let Mt=null;const z=new be(0);let $=0,gt=i.width,Rt=i.height,Lt=1,st=null,St=null;const bt=new Mn(0,0,gt,Rt),Ht=new Mn(0,0,gt,Rt);let se=!1;const ne=new mp;let We=!1,ge=!1;const Se=new _n,we=new Y,ue=new Mn,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tn=!1;function An(){return X===null?Lt:1}let q=s;function un(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",ie,!1),q===null){const W="webgl2";if(q=un(W,A),q===null)throw un(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Le("WebGLRenderer: "+A.message),A}let pe,Fe,wt,cn,D,E,J,mt,Et,Ct,Ot,ut,ft,Pt,It,Ut,Dt,Qt,le,_e,V,At,ht;function Ft(){pe=new I1(q),pe.init(),V=new RA(q,pe),Fe=new w1(q,pe,t,V),wt=new TA(q,pe),Fe.reversedDepthBuffer&&g&&wt.buffers.depth.setReversed(!0),cn=new F1(q),D=new fA,E=new AA(q,pe,wt,D,Fe,V,cn),J=new P1(Z),mt=new kM(q),At=new A1(q,mt),Et=new z1(q,mt,cn,At),Ct=new H1(q,Et,mt,At,cn),Qt=new G1(q,Fe,E),It=new C1(D),Ot=new uA(Z,J,pe,Fe,At,It),ut=new LA(Z,D),ft=new dA,Pt=new xA(pe),Dt=new T1(Z,J,wt,Ct,b,m),Ut=new bA(Z,Ct,Fe),ht=new OA(q,cn,Fe,wt),le=new R1(q,pe,cn),_e=new B1(q,pe,cn),cn.programs=Ot.programs,Z.capabilities=Fe,Z.extensions=pe,Z.properties=D,Z.renderLists=ft,Z.shadowMap=Ut,Z.state=wt,Z.info=cn}Ft(),w!==Ri&&(U=new k1(w,i.width,i.height,l,c));const Nt=new UA(Z,q);this.xr=Nt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(A){A!==void 0&&(Lt=A,this.setSize(gt,Rt,!1))},this.getSize=function(A){return A.set(gt,Rt)},this.setSize=function(A,W,K=!0){if(Nt.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=A,Rt=W,i.width=Math.floor(A*Lt),i.height=Math.floor(W*Lt),K===!0&&(i.style.width=A+"px",i.style.height=W+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(gt*Lt,Rt*Lt).floor()},this.setDrawingBufferSize=function(A,W,K){gt=A,Rt=W,Lt=K,i.width=Math.floor(A*K),i.height=Math.floor(W*K),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===Ri){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(rt)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,W,K,et){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,W,K,et),wt.viewport(rt.copy(bt).multiplyScalar(Lt).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,W,K,et){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,W,K,et),wt.scissor(pt.copy(Ht).multiplyScalar(Lt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){wt.setScissorTest(se=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,K=!0){let et=0;if(A){let tt=!1;if(X!==null){const Bt=X.texture.format;tt=M.has(Bt)}if(tt){const Bt=X.texture.type,Xt=x.has(Bt),zt=Dt.getClearColor(),Vt=Dt.getClearAlpha(),Wt=zt.r,Jt=zt.g,fe=zt.b;Xt?(C[0]=Wt,C[1]=Jt,C[2]=fe,C[3]=Vt,q.clearBufferuiv(q.COLOR,0,C)):(I[0]=Wt,I[1]=Jt,I[2]=fe,I[3]=Vt,q.clearBufferiv(q.COLOR,0,I))}else et|=q.COLOR_BUFFER_BIT}W&&(et|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(et|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&q.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",ie,!1),Dt.dispose(),ft.dispose(),Pt.dispose(),D.dispose(),J.dispose(),Ct.dispose(),At.dispose(),ht.dispose(),Ot.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",qt),Nt.removeEventListener("sessionend",re),Kt.stop()};function yt(A){A.preventDefault(),y_("WebGLRenderer: Context Lost."),G=!0}function jt(){y_("WebGLRenderer: Context Restored."),G=!1;const A=cn.autoReset,W=Ut.enabled,K=Ut.autoUpdate,et=Ut.needsUpdate,tt=Ut.type;Ft(),cn.autoReset=A,Ut.enabled=W,Ut.autoUpdate=K,Ut.needsUpdate=et,Ut.type=tt}function ie(A){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rn(A){const W=A.target;W.removeEventListener("dispose",rn),Oe(W)}function Oe(A){si(A),D.remove(A)}function si(A){const W=D.get(A).programs;W!==void 0&&(W.forEach(function(K){Ot.releaseProgram(K)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,K,et,tt,Bt){W===null&&(W=vn);const Xt=tt.isMesh&&tt.matrixWorld.determinant()<0,zt=Vn(A,W,K,et,tt);wt.setMaterial(et,Xt);let Vt=K.index,Wt=1;if(et.wireframe===!0){if(Vt=Et.getWireframeAttribute(K),Vt===void 0)return;Wt=2}const Jt=K.drawRange,fe=K.attributes.position;let ee=Jt.start*Wt,Ie=(Jt.start+Jt.count)*Wt;Bt!==null&&(ee=Math.max(ee,Bt.start*Wt),Ie=Math.min(Ie,(Bt.start+Bt.count)*Wt)),Vt!==null?(ee=Math.max(ee,0),Ie=Math.min(Ie,Vt.count)):fe!=null&&(ee=Math.max(ee,0),Ie=Math.min(Ie,fe.count));const dn=Ie-ee;if(dn<0||dn===1/0)return;At.setup(tt,et,zt,K,Vt);let on,qe=le;if(Vt!==null&&(on=mt.get(Vt),qe=_e,qe.setIndex(on)),tt.isMesh)et.wireframe===!0?(wt.setLineWidth(et.wireframeLinewidth*An()),qe.setMode(q.LINES)):qe.setMode(q.TRIANGLES);else if(tt.isLine){let Ye=et.linewidth;Ye===void 0&&(Ye=1),wt.setLineWidth(Ye*An()),tt.isLineSegments?qe.setMode(q.LINES):tt.isLineLoop?qe.setMode(q.LINE_LOOP):qe.setMode(q.LINE_STRIP)}else tt.isPoints?qe.setMode(q.POINTS):tt.isSprite&&qe.setMode(q.TRIANGLES);if(tt.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))qe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Ye=tt._multiDrawStarts,kt=tt._multiDrawCounts,Kn=tt._multiDrawCount,ye=Vt?mt.get(Vt).bytesPerElement:1,Ln=D.get(et).currentProgram.getUniforms();for(let mi=0;mi<Kn;mi++)Ln.setValue(q,"_gl_DrawID",mi),qe.render(Ye[mi]/ye,kt[mi])}else if(tt.isInstancedMesh)qe.renderInstances(ee,dn,tt.count);else if(K.isInstancedBufferGeometry){const Ye=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,kt=Math.min(K.instanceCount,Ye);qe.renderInstances(ee,dn,kt)}else qe.render(ee,dn)};function Hn(A,W,K){A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=pi,A.needsUpdate=!0,en(A,W,K),A.side=Ms,A.needsUpdate=!0,en(A,W,K),A.side=Ji):en(A,W,K)}this.compile=function(A,W,K=null){K===null&&(K=A),P=Pt.get(K),P.init(W),T.push(P),K.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(P.pushLight(tt),tt.castShadow&&P.pushShadow(tt))}),A!==K&&A.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(P.pushLight(tt),tt.castShadow&&P.pushShadow(tt))}),P.setupLights();const et=new Set;return A.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Bt=tt.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){const zt=Bt[Xt];Hn(zt,K,tt),et.add(zt)}else Hn(Bt,K,tt),et.add(Bt)}),P=T.pop(),et},this.compileAsync=function(A,W,K=null){const et=this.compile(A,W,K);return new Promise(tt=>{function Bt(){if(et.forEach(function(Xt){D.get(Xt).currentProgram.isReady()&&et.delete(Xt)}),et.size===0){tt(A);return}setTimeout(Bt,10)}pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let ta=null;function Tt(A){ta&&ta(A)}function qt(){Kt.stop()}function re(){Kt.start()}const Kt=new Qv;Kt.setAnimationLoop(Tt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(A){ta=A,Nt.setAnimationLoop(A),A===null?Kt.stop():Kt.start()},Nt.addEventListener("sessionstart",qt),Nt.addEventListener("sessionend",re),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(A,W);const K=Nt.enabled===!0&&Nt.isPresenting===!0,et=U!==null&&(X===null||K)&&U.begin(Z,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(W),W=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,W,X),P=Pt.get(A,T.length),P.init(W),P.state.textureUnits=E.getTextureUnits(),T.push(P),Se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(Se,fa,W.reversedDepth),ge=this.localClippingEnabled,We=It.init(this.clippingPlanes,ge),H=ft.get(A,N.length),H.init(),N.push(H),Nt.enabled===!0&&Nt.isPresenting===!0){const Xt=Z.xr.getDepthSensingMesh();Xt!==null&&Yt(Xt,W,-1/0,Z.sortObjects)}Yt(A,W,0,Z.sortObjects),H.finish(),Z.sortObjects===!0&&H.sort(st,St),tn=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,tn&&Dt.addToRenderList(H,A),this.info.render.frame++,We===!0&&It.beginShadows();const tt=P.state.shadowsArray;if(Ut.render(tt,A,W),We===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&U.hasRenderPass())===!1){const Xt=H.opaque,zt=H.transmissive;if(P.setupLights(),W.isArrayCamera){const Vt=W.cameras;if(zt.length>0)for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const fe=Vt[Wt];Pe(Xt,zt,A,fe)}tn&&Dt.render(A);for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const fe=Vt[Wt];te(H,A,fe,fe.viewport)}}else zt.length>0&&Pe(Xt,zt,A,W),tn&&Dt.render(A),te(H,A,W)}X!==null&&ct===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),et&&U.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,W),At.resetDefaultState(),O=-1,B=null,T.pop(),T.length>0?(P=T[T.length-1],E.setTextureUnits(P.state.textureUnits),We===!0&&It.setGlobalState(Z.clippingPlanes,P.state.camera)):P=null,N.pop(),N.length>0?H=N[N.length-1]:H=null,j!==null&&j.renderEnd()};function Yt(A,W,K,et){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){et&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const Xt=Ct.update(A),zt=A.material;zt.visible&&H.push(A,Xt,zt,K,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const Xt=Ct.update(A),zt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ue.copy(Xt.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(zt)){const Vt=Xt.groups;for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const fe=Vt[Wt],ee=zt[fe.materialIndex];ee&&ee.visible&&H.push(A,Xt,ee,K,ue.z,fe)}}else zt.visible&&H.push(A,Xt,zt,K,ue.z,null)}}const Bt=A.children;for(let Xt=0,zt=Bt.length;Xt<zt;Xt++)Yt(Bt[Xt],W,K,et)}function te(A,W,K,et){const{opaque:tt,transmissive:Bt,transparent:Xt}=A;P.setupLightsView(K),We===!0&&It.setGlobalState(Z.clippingPlanes,K),et&&wt.viewport(rt.copy(et)),tt.length>0&&Ge(tt,W,K),Bt.length>0&&Ge(Bt,W,K),Xt.length>0&&Ge(Xt,W,K),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Pe(A,W,K,et){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[et.id]===void 0){const ee=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[et.id]=new da(1,1,{generateMipmaps:!0,type:ee?Va:Ri,minFilter:Zs,samples:Math.max(4,Fe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Bt=P.state.transmissionRenderTarget[et.id],Xt=et.viewport||rt;Bt.setSize(Xt.z*Z.transmissionResolutionScale,Xt.w*Z.transmissionResolutionScale);const zt=Z.getRenderTarget(),Vt=Z.getActiveCubeFace(),Wt=Z.getActiveMipmapLevel();Z.setRenderTarget(Bt),Z.getClearColor(z),$=Z.getClearAlpha(),$<1&&Z.setClearColor(16777215,.5),Z.clear(),tn&&Dt.render(K);const Jt=Z.toneMapping;Z.toneMapping=ha;const fe=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),P.setupLightsView(et),We===!0&&It.setGlobalState(Z.clippingPlanes,et),Ge(A,K,et),E.updateMultisampleRenderTarget(Bt),E.updateRenderTargetMipmap(Bt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ie=0,dn=W.length;Ie<dn;Ie++){const on=W[Ie],{object:qe,geometry:Ye,material:kt,group:Kn}=on;if(kt.side===Ji&&qe.layers.test(et.layers)){const ye=kt.side;kt.side=pi,kt.needsUpdate=!0,Te(qe,K,et,Ye,kt,Kn),kt.side=ye,kt.needsUpdate=!0,ee=!0}}ee===!0&&(E.updateMultisampleRenderTarget(Bt),E.updateRenderTargetMipmap(Bt))}Z.setRenderTarget(zt,Vt,Wt),Z.setClearColor(z,$),fe!==void 0&&(et.viewport=fe),Z.toneMapping=Jt}function Ge(A,W,K){const et=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,Bt=A.length;tt<Bt;tt++){const Xt=A[tt],{object:zt,geometry:Vt,group:Wt}=Xt;let Jt=Xt.material;Jt.allowOverride===!0&&et!==null&&(Jt=et),zt.layers.test(K.layers)&&Te(zt,W,K,Vt,Jt,Wt)}}function Te(A,W,K,et,tt,Bt){A.onBeforeRender(Z,W,K,et,tt,Bt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),tt.onBeforeRender(Z,W,K,et,A,Bt),tt.transparent===!0&&tt.side===Ji&&tt.forceSinglePass===!1?(tt.side=pi,tt.needsUpdate=!0,Z.renderBufferDirect(K,W,et,tt,A,Bt),tt.side=Ms,tt.needsUpdate=!0,Z.renderBufferDirect(K,W,et,tt,A,Bt),tt.side=Ji):Z.renderBufferDirect(K,W,et,tt,A,Bt),A.onAfterRender(Z,W,K,et,tt,Bt)}function en(A,W,K){W.isScene!==!0&&(W=vn);const et=D.get(A),tt=P.state.lights,Bt=P.state.shadowsArray,Xt=tt.state.version,zt=Ot.getParameters(A,tt.state,Bt,W,K,P.state.lightProbeGridArray),Vt=Ot.getProgramCacheKey(zt);let Wt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const Jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=J.get(A.envMap||et.environment,Jt),et.envMapRotation=et.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",rn),Wt=new Map,et.programs=Wt);let fe=Wt.get(Vt);if(fe!==void 0){if(et.currentProgram===fe&&et.lightsStateVersion===Xt)return xn(A,zt),fe}else zt.uniforms=Ot.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,K,zt),A.onBeforeCompile(zt,Z),fe=Ot.acquireProgram(zt,Vt),Wt.set(Vt,fe),et.uniforms=zt.uniforms;const ee=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ee.clippingPlanes=It.uniform),xn(A,zt),et.needsLights=ri(A),et.lightsStateVersion=Xt,et.needsLights&&(ee.ambientLightColor.value=tt.state.ambient,ee.lightProbe.value=tt.state.probe,ee.directionalLights.value=tt.state.directional,ee.directionalLightShadows.value=tt.state.directionalShadow,ee.spotLights.value=tt.state.spot,ee.spotLightShadows.value=tt.state.spotShadow,ee.rectAreaLights.value=tt.state.rectArea,ee.ltc_1.value=tt.state.rectAreaLTC1,ee.ltc_2.value=tt.state.rectAreaLTC2,ee.pointLights.value=tt.state.point,ee.pointLightShadows.value=tt.state.pointShadow,ee.hemisphereLights.value=tt.state.hemi,ee.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ee.spotLightMatrix.value=tt.state.spotLightMatrix,ee.spotLightMap.value=tt.state.spotLightMap,ee.pointShadowMatrix.value=tt.state.pointShadowMatrix),et.lightProbeGrid=P.state.lightProbeGridArray.length>0,et.currentProgram=fe,et.uniformsList=null,fe}function wi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=$c.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function xn(A,W){const K=D.get(A);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Nn(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(W.matrixWorld);for(let K=0,et=A.length;K<et;K++){const tt=A[K];if(tt.texture!==null&&tt.boundingBox.containsPoint(L))return tt}return null}function Vn(A,W,K,et,tt){W.isScene!==!0&&(W=vn),E.resetTextureUnits();const Bt=W.fog,Xt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,zt=X===null?Z.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:De.workingColorSpace,Vt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Wt=J.get(et.envMap||Xt,Vt),Jt=et.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,fe=!!K.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),ee=!!K.morphAttributes.position,Ie=!!K.morphAttributes.normal,dn=!!K.morphAttributes.color;let on=ha;et.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(on=Z.toneMapping);const qe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ye=qe!==void 0?qe.length:0,kt=D.get(et),Kn=P.state.lights;if(We===!0&&(ge===!0||A!==B)){const ke=A===B&&et.id===O;It.setState(et,A,ke)}let ye=!1;et.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Kn.state.version||kt.outputColorSpace!==zt||tt.isBatchedMesh&&kt.batching===!1||!tt.isBatchedMesh&&kt.batching===!0||tt.isBatchedMesh&&kt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&kt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&kt.instancing===!1||!tt.isInstancedMesh&&kt.instancing===!0||tt.isSkinnedMesh&&kt.skinning===!1||!tt.isSkinnedMesh&&kt.skinning===!0||tt.isInstancedMesh&&kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&kt.instancingMorph===!1&&tt.morphTexture!==null||kt.envMap!==Wt||et.fog===!0&&kt.fog!==Bt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==It.numPlanes||kt.numIntersection!==It.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==fe||kt.morphTargets!==ee||kt.morphNormals!==Ie||kt.morphColors!==dn||kt.toneMapping!==on||kt.morphTargetsCount!==Ye||!!kt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,kt.__version=et.version);let Ln=kt.currentProgram;ye===!0&&(Ln=en(et,W,tt),j&&et.isNodeMaterial&&j.onUpdateProgram(et,Ln,kt));let mi=!1,Hi=!1,gi=!1;const je=Ln.getUniforms(),pn=kt.uniforms;if(wt.useProgram(Ln.program)&&(mi=!0,Hi=!0,gi=!0),et.id!==O&&(O=et.id,Hi=!0),kt.needsLights){const ke=Nn(P.state.lightProbeGridArray,tt);kt.lightProbeGrid!==ke&&(kt.lightProbeGrid=ke,Hi=!0)}if(mi||B!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(q,"projectionMatrix",A.projectionMatrix),je.setValue(q,"viewMatrix",A.matrixWorldInverse);const ea=je.map.cameraPosition;ea!==void 0&&ea.setValue(q,we.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&je.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&je.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Hi=!0,gi=!0)}if(kt.needsLights&&(Kn.state.directionalShadowMap.length>0&&je.setValue(q,"directionalShadowMap",Kn.state.directionalShadowMap,E),Kn.state.spotShadowMap.length>0&&je.setValue(q,"spotShadowMap",Kn.state.spotShadowMap,E),Kn.state.pointShadowMap.length>0&&je.setValue(q,"pointShadowMap",Kn.state.pointShadowMap,E)),tt.isSkinnedMesh){je.setOptional(q,tt,"bindMatrix"),je.setOptional(q,tt,"bindMatrixInverse");const ke=tt.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),je.setValue(q,"boneTexture",ke.boneTexture,E))}tt.isBatchedMesh&&(je.setOptional(q,tt,"batchingTexture"),je.setValue(q,"batchingTexture",tt._matricesTexture,E),je.setOptional(q,tt,"batchingIdTexture"),je.setValue(q,"batchingIdTexture",tt._indirectTexture,E),je.setOptional(q,tt,"batchingColorTexture"),tt._colorsTexture!==null&&je.setValue(q,"batchingColorTexture",tt._colorsTexture,E));const Vi=K.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Qt.update(tt,K,Ln),(Hi||kt.receiveShadow!==tt.receiveShadow)&&(kt.receiveShadow=tt.receiveShadow,je.setValue(q,"receiveShadow",tt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=IA()),Hi){if(je.setValue(q,"toneMappingExposure",Z.toneMappingExposure),kt.needsLights&&Zn(pn,gi),Bt&&et.fog===!0&&ut.refreshFogUniforms(pn,Bt),ut.refreshMaterialUniforms(pn,et,Lt,Rt,P.state.transmissionRenderTarget[A.id]),kt.needsLights&&kt.lightProbeGrid){const ke=kt.lightProbeGrid;pn.probesSH.value=ke.texture,pn.probesMin.value.copy(ke.boundingBox.min),pn.probesMax.value.copy(ke.boundingBox.max),pn.probesResolution.value.copy(ke.resolution)}$c.upload(q,wi(kt),pn,E)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&($c.upload(q,wi(kt),pn,E),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&je.setValue(q,"center",tt.center),je.setValue(q,"modelViewMatrix",tt.modelViewMatrix),je.setValue(q,"normalMatrix",tt.normalMatrix),je.setValue(q,"modelMatrix",tt.matrixWorld),et.uniformsGroups!==void 0){const ke=et.uniformsGroups;for(let ea=0,Xa=ke.length;ea<Xa;ea++){const bs=ke[ea];ht.update(bs,Ln),ht.bind(bs,Ln)}}return Ln}function Zn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ri(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return ct},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,K){const et=D.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=W,D.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:K,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const K=D.get(A);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const En=q.createFramebuffer();this.setRenderTarget=function(A,W=0,K=0){X=A,ot=W,ct=K;let et=null,tt=!1,Bt=!1;if(A){const zt=D.get(A);if(zt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(q.FRAMEBUFFER,zt.__webglFramebuffer),rt.copy(A.viewport),pt.copy(A.scissor),Mt=A.scissorTest,wt.viewport(rt),wt.scissor(pt),wt.setScissorTest(Mt),O=-1;return}else if(zt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(zt.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&D.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Bt=!0);const Wt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?et=Wt[W][K]:et=Wt[W],tt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?et=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[K]:et=Wt,rt.copy(A.viewport),pt.copy(A.scissor),Mt=A.scissorTest}else rt.copy(bt).multiplyScalar(Lt).floor(),pt.copy(Ht).multiplyScalar(Lt).floor(),Mt=se;if(K!==0&&(et=En),wt.bindFramebuffer(q.FRAMEBUFFER,et)&&wt.drawBuffers(A,et),wt.viewport(rt),wt.scissor(pt),wt.setScissorTest(Mt),tt){const zt=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,K)}else if(Bt){const zt=W;for(let Vt=0;Vt<A.textures.length;Vt++){const Wt=D.get(A.textures[Vt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,K,zt)}}else if(A!==null&&K!==0){const zt=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,zt.__webglTexture,K)}O=-1},this.readRenderTargetPixels=function(A,W,K,et,tt,Bt,Xt,zt=0){if(!(A&&A.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Vt=Vt[Xt]),Vt){wt.bindFramebuffer(q.FRAMEBUFFER,Vt);try{const Wt=A.textures[zt],Jt=Wt.format,fe=Wt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+zt),!Fe.textureFormatReadable(Jt)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(fe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-et&&K>=0&&K<=A.height-tt&&q.readPixels(W,K,et,tt,V.convert(Jt),V.convert(fe),Bt)}finally{const Wt=X!==null?D.get(X).__webglFramebuffer:null;wt.bindFramebuffer(q.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,W,K,et,tt,Bt,Xt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Vt=Vt[Xt]),Vt)if(W>=0&&W<=A.width-et&&K>=0&&K<=A.height-tt){wt.bindFramebuffer(q.FRAMEBUFFER,Vt);const Wt=A.textures[zt],Jt=Wt.format,fe=Wt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+zt),!Fe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ee),q.bufferData(q.PIXEL_PACK_BUFFER,Bt.byteLength,q.STREAM_READ),q.readPixels(W,K,et,tt,V.convert(Jt),V.convert(fe),0);const Ie=X!==null?D.get(X).__webglFramebuffer:null;wt.bindFramebuffer(q.FRAMEBUFFER,Ie);const dn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Jy(q,dn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ee),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Bt),q.deleteBuffer(ee),q.deleteSync(dn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,K=0){const et=Math.pow(2,-K),tt=Math.floor(A.image.width*et),Bt=Math.floor(A.image.height*et),Xt=W!==null?W.x:0,zt=W!==null?W.y:0;E.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,K,0,0,Xt,zt,tt,Bt),wt.unbindTexture()};const Ve=q.createFramebuffer(),ei=q.createFramebuffer();this.copyTextureToTexture=function(A,W,K=null,et=null,tt=0,Bt=0){let Xt,zt,Vt,Wt,Jt,fe,ee,Ie,dn;const on=A.isCompressedTexture?A.mipmaps[Bt]:A.image;if(K!==null)Xt=K.max.x-K.min.x,zt=K.max.y-K.min.y,Vt=K.isBox3?K.max.z-K.min.z:1,Wt=K.min.x,Jt=K.min.y,fe=K.isBox3?K.min.z:0;else{const pn=Math.pow(2,-tt);Xt=Math.floor(on.width*pn),zt=Math.floor(on.height*pn),A.isDataArrayTexture?Vt=on.depth:A.isData3DTexture?Vt=Math.floor(on.depth*pn):Vt=1,Wt=0,Jt=0,fe=0}et!==null?(ee=et.x,Ie=et.y,dn=et.z):(ee=0,Ie=0,dn=0);const qe=V.convert(W.format),Ye=V.convert(W.type);let kt;W.isData3DTexture?(E.setTexture3D(W,0),kt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),kt=q.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),kt=q.TEXTURE_2D),wt.activeTexture(q.TEXTURE0),wt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),wt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),wt.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Kn=wt.getParameter(q.UNPACK_ROW_LENGTH),ye=wt.getParameter(q.UNPACK_IMAGE_HEIGHT),Ln=wt.getParameter(q.UNPACK_SKIP_PIXELS),mi=wt.getParameter(q.UNPACK_SKIP_ROWS),Hi=wt.getParameter(q.UNPACK_SKIP_IMAGES);wt.pixelStorei(q.UNPACK_ROW_LENGTH,on.width),wt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,on.height),wt.pixelStorei(q.UNPACK_SKIP_PIXELS,Wt),wt.pixelStorei(q.UNPACK_SKIP_ROWS,Jt),wt.pixelStorei(q.UNPACK_SKIP_IMAGES,fe);const gi=A.isDataArrayTexture||A.isData3DTexture,je=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const pn=D.get(A),Vi=D.get(W),ke=D.get(pn.__renderTarget),ea=D.get(Vi.__renderTarget);wt.bindFramebuffer(q.READ_FRAMEBUFFER,ke.__webglFramebuffer),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let Xa=0;Xa<Vt;Xa++)gi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,tt,fe+Xa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(W).__webglTexture,Bt,dn+Xa)),q.blitFramebuffer(Wt,Jt,Xt,zt,ee,Ie,Xt,zt,q.DEPTH_BUFFER_BIT,q.NEAREST);wt.bindFramebuffer(q.READ_FRAMEBUFFER,null),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(tt!==0||A.isRenderTargetTexture||D.has(A)){const pn=D.get(A),Vi=D.get(W);wt.bindFramebuffer(q.READ_FRAMEBUFFER,Ve),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,ei);for(let ke=0;ke<Vt;ke++)gi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,pn.__webglTexture,tt,fe+ke):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,pn.__webglTexture,tt),je?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Vi.__webglTexture,Bt,dn+ke):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Vi.__webglTexture,Bt),tt!==0?q.blitFramebuffer(Wt,Jt,Xt,zt,ee,Ie,Xt,zt,q.COLOR_BUFFER_BIT,q.NEAREST):je?q.copyTexSubImage3D(kt,Bt,ee,Ie,dn+ke,Wt,Jt,Xt,zt):q.copyTexSubImage2D(kt,Bt,ee,Ie,Wt,Jt,Xt,zt);wt.bindFramebuffer(q.READ_FRAMEBUFFER,null),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else je?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(kt,Bt,ee,Ie,dn,Xt,zt,Vt,qe,Ye,on.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(kt,Bt,ee,Ie,dn,Xt,zt,Vt,qe,on.data):q.texSubImage3D(kt,Bt,ee,Ie,dn,Xt,zt,Vt,qe,Ye,on):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Bt,ee,Ie,Xt,zt,qe,Ye,on.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Bt,ee,Ie,on.width,on.height,qe,on.data):q.texSubImage2D(q.TEXTURE_2D,Bt,ee,Ie,Xt,zt,qe,Ye,on);wt.pixelStorei(q.UNPACK_ROW_LENGTH,Kn),wt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ye),wt.pixelStorei(q.UNPACK_SKIP_PIXELS,Ln),wt.pixelStorei(q.UNPACK_SKIP_ROWS,mi),wt.pixelStorei(q.UNPACK_SKIP_IMAGES,Hi),Bt===0&&W.generateMipmaps&&q.generateMipmap(kt),wt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){ot=0,ct=0,X=null,wt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}class BA{constructor(){this.ctx=null,this.droneOscs=[],this.mainGain=null}initCtx(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.mainGain=this.ctx.createGain(),this.mainGain.gain.setValueAtTime(.4,this.ctx.currentTime),this.mainGain.connect(this.ctx.destination))}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playPunch(){if(this.initCtx(),!this.ctx||!this.mainGain)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(150,t),i.frequency.exponentialRampToValueAtTime(40,t+.15),s.gain.setValueAtTime(.8,t),s.gain.exponentialRampToValueAtTime(.01,t+.15),i.connect(s),s.connect(this.mainGain),i.start(t),i.stop(t+.16)}playSlice(){if(this.initCtx(),!this.ctx||!this.mainGain)return;const t=this.ctx.currentTime,i=this.ctx.sampleRate*.15,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let m=0;m<i;m++)l[m]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=s;const h=this.ctx.createBiquadFilter();h.type="highpass",h.frequency.setValueAtTime(1e3,t),h.frequency.exponentialRampToValueAtTime(200,t+.12);const p=this.ctx.createGain();p.gain.setValueAtTime(.5,t),p.gain.exponentialRampToValueAtTime(.01,t+.15),c.connect(h),h.connect(p),p.connect(this.mainGain),c.start(t),c.stop(t+.16)}playGrab(){if(this.initCtx(),!this.ctx||!this.mainGain)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(587.33,t),i.frequency.setValueAtTime(880,t+.05),s.type="sine",s.frequency.setValueAtTime(1174.66,t),l.gain.setValueAtTime(.5,t),l.gain.exponentialRampToValueAtTime(.01,t+.35),i.connect(l),s.connect(l),l.connect(this.mainGain),i.start(t),s.start(t),i.stop(t+.4),s.stop(t+.4)}playDodge(){if(this.initCtx(),!this.ctx||!this.mainGain)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(80,t),i.frequency.linearRampToValueAtTime(180,t+.1),i.frequency.exponentialRampToValueAtTime(30,t+.25),s.gain.setValueAtTime(.6,t),s.gain.linearRampToValueAtTime(.8,t+.05),s.gain.exponentialRampToValueAtTime(.01,t+.25),i.connect(s),s.connect(this.mainGain),i.start(t),i.stop(t+.26)}playError(){if(this.initCtx(),!this.ctx||!this.mainGain)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(120,t),i.frequency.setValueAtTime(90,t+.1),s.gain.setValueAtTime(.4,t),s.gain.exponentialRampToValueAtTime(.01,t+.25),i.connect(s),s.connect(this.mainGain),i.start(t),i.stop(t+.26)}playCombo(){if(this.initCtx(),!this.ctx||!this.mainGain)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(261.63,t),i.frequency.setValueAtTime(329.63,t+.06),i.frequency.setValueAtTime(392,t+.12),i.frequency.setValueAtTime(523.25,t+.18),i.frequency.setValueAtTime(659.25,t+.24),s.gain.setValueAtTime(.6,t),s.gain.exponentialRampToValueAtTime(.01,t+.4),i.connect(s),s.connect(this.mainGain),i.start(t),i.stop(t+.45)}startDrone(){}stopDrone(){}}const Zi=new BA,FA=({gameState:o,onStatsUpdate:t,onGameOver:i})=>{const s=Xe.useRef(null),l=Xe.useRef({score:0,combo:0,maxCombo:0,health:5,hasDodged:!1}),[c,h]=Xe.useState(!1),[p,m]=Xe.useState(!1),d=Xe.useRef(null),S=Xe.useRef(null),v=Xe.useRef(null),g=Xe.useRef([]),y=Xe.useRef(new Map),b=Xe.useRef(0),w=Xe.useRef(0),M=Xe.useRef(!1),x=Xe.useRef({x:0,y:0}),C=Xe.useRef(0),I=Xe.useRef(0),L=Xe.useRef(null);Xe.useEffect(()=>{navigator.xr&&navigator.xr.isSessionSupported("immersive-vr").then(N=>{h(N)})},[]);const H=N=>{const T=N(l.current);l.current=T,t({...T}),T.health<=0&&o===Yn.Playing&&(Zi.playError(),i(T.score))};Xe.useEffect(()=>{o===Yn.Playing?(Zi.startDrone(),l.current={score:0,combo:0,maxCombo:0,health:5,hasDodged:!1},t({...l.current}),g.current=[],y.current.forEach(N=>{var T;(T=d.current)==null||T.remove(N)}),y.current.clear()):Zi.stopDrone()},[o]),Xe.useEffect(()=>{if(!s.current)return;const N=new pM;d.current=N,N.background=new be("#f5f3ff"),N.fog=new pp("#f5f3ff",18,55);const T=new Ai(70,s.current.clientWidth/s.current.clientHeight,.1,100);T.position.set(0,1.7,3.2),T.lookAt(0,1.1,-5),S.current=T;const U=new zA({antialias:!0,alpha:!1});U.setSize(s.current.clientWidth,s.current.clientHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.xr.enabled=!0,U.domElement.className="w-full h-full absolute top-0 left-0 block container-canvas",s.current.appendChild(U.domElement),v.current=U;const Z=new zM("#ffffff",.82);N.add(Z);const G=new IM("#ffffff",.6);G.position.set(5,10,5),N.add(G);const j=new Y_("#ec4899",5,20);j.position.set(-3,2,-2),N.add(j);const ot=new Y_("#3b82f6",5,15);ot.position.set(3,1,-3),N.add(ot);const ct=280,X=new zn,O=new Float32Array(ct*3),B=new Float32Array(ct*3);for(let Tt=0;Tt<ct;Tt++)O[Tt*3]=(Math.random()-.5)*16,O[Tt*3+1]=Math.random()*6,O[Tt*3+2]=(Math.random()-.6)*25,B[Tt*3]=.8+Math.random()*.2,B[Tt*3+1]=.72+Math.random()*.15,B[Tt*3+2]=.95+Math.random()*.05;X.setAttribute("position",new Gi(O,3)),X.setAttribute("color",new Gi(B,3));const rt=new Wv({size:.12,vertexColors:!0,transparent:!0,opacity:.8,blending:rd}),pt=new TM(X,rt);N.add(pt);const Mt=new Qi,z=["#a855f7","#ec4899","#3b82f6"];for(let Tt=0;Tt<8;Tt++){const qt=new ou(3.2,3.25,64),re=new Ki({color:z[Tt%z.length],side:Ji,transparent:!0,opacity:.35-Tt*.04}),Kt=new Qe(qt,re);Kt.position.set(0,1.6,-2-Tt*3.5),Mt.add(Kt)}N.add(Mt);const $=new Qi,gt=["#a855f7","#ec4899","#3b82f6"];for(let Tt=-3;Tt>=-30;Tt-=4.5){const qt=new ca(.25,6,.25),re=new Ws({color:gt[Math.abs(Math.round(Tt))%gt.length],roughness:.1,metalness:.1,transparent:!0,opacity:.35,emissive:gt[Math.abs(Math.round(Tt))%gt.length],emissiveIntensity:.5,fog:!1}),Kt=new Qe(qt,re);Kt.position.set(-3.5,3,Tt);const Yt=new Jh(qt),te=new tl({color:gt[Math.abs(Math.round(Tt))%gt.length],fog:!1}),Pe=new Jc(Yt,te);Kt.add(Pe),$.add(Kt);const Ge=new Ws({color:gt[(Math.abs(Math.round(Tt))+1)%gt.length],roughness:.1,metalness:.1,transparent:!0,opacity:.35,emissive:gt[(Math.abs(Math.round(Tt))+1)%gt.length],emissiveIntensity:.5,fog:!1}),Te=new Qe(qt,Ge);Te.position.set(3.5,3,Tt);const en=new Jh(qt),wi=new tl({color:gt[(Math.abs(Math.round(Tt))+1)%gt.length],fog:!1}),xn=new Jc(en,wi);Te.add(xn),$.add(Te)}N.add($);const Rt=new Qi,Lt=new el(8,12,4),st=new Ki({color:"#c084fc",transparent:!0,opacity:.45,wireframe:!0,fog:!1}),St=new Qe(Lt,st);St.position.set(-8,3.5,-28),Rt.add(St);const bt=new el(10,15,4),Ht=new Ki({color:"#f472b6",transparent:!0,opacity:.4,wireframe:!0,fog:!1}),se=new Qe(bt,Ht);se.position.set(8,4.5,-26),Rt.add(se),N.add(Rt);const ne=new Qi,We=new gp(5,64),ge=new Ki({color:"#f43f5e",transparent:!0,opacity:.65,side:Ji,fog:!1}),Se=new Qe(We,ge);Se.position.set(0,2.5,-29),ne.add(Se);for(let Tt=0;Tt<5;Tt++){const qt=new ca(11,.08+Tt*.03,.2),re=new Ki({color:"#f5f3ff",fog:!1}),Kt=new Qe(qt,re);Kt.position.set(0,-.8+Tt*.9,-28.9),ne.add(Kt)}N.add(ne);const we=new Q_(100,100,"#a855f7","#c084fc");we.position.y=0,we.material&&"fog"in we.material&&(we.material.fog=!1),N.add(we);const ue=new Q_(100,100,"#ec4899","#f472b6");ue.position.y=4,ue.material&&"fog"in ue.material&&(ue.material.fog=!1),N.add(ue);const vn=new ca(4,.1,4),tn=new Ws({color:"#fdf2f8",roughness:.1,metalness:.1,transparent:!0,opacity:.7}),An=new Qe(vn,tn);An.position.set(0,-.05,0),N.add(An);const q=new ou(1.6,1.65,64),un=new Ki({color:"#3b82f6",transparent:!0,opacity:.4}),pe=new Qe(q,un);pe.rotation.x=Math.PI/2,pe.position.set(0,.02,0),N.add(pe);const Fe=new GM;let wt=0,cn=0;const D=U.xr.getController(0);N.add(D);const E=U.xr.getController(1);N.add(E);const J=U.xr.getHand(0);N.add(J);const mt=U.xr.getHand(1);N.add(mt);const Et=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"],Ct=new Map,Ot=(Tt,qt,re)=>{const Kt=new nl(.012,8,8),Yt=new Ws({color:qt,roughness:.1,metalness:.1,transparent:!0,opacity:.85,emissive:qt,emissiveIntensity:1.5}),te=[];Et.forEach(Pe=>{const Ge=Tt.joints?Tt.joints[Pe]:null;if(Ge){const Te=new Qe(Kt,Yt);Ge.add(Te),te.push(Te)}}),Ct.set(re,te)};Ot(J,"#3b82f6","left"),Ot(mt,"#ec4899","right");const ut=new nl(.07,16,16),ft=Tt=>{const qt=new Ws({color:Tt,roughness:0,metalness:0,transparent:!0,opacity:.8,emissive:Tt,emissiveIntensity:1.2});return new Qe(ut,qt)},Pt=U.xr.getControllerGrip(0),It=ft("#3b82f6");Pt.add(It),N.add(Pt);const Ut=U.xr.getControllerGrip(1),Dt=ft("#ec4899");Ut.add(Dt),N.add(Ut);const Qt={left:{curr:new Y,prev:new Y,velocity:new Y},right:{curr:new Y,prev:new Y,velocity:new Y}};let le=!1,_e=!1;D.addEventListener("selectstart",()=>{le=!0}),D.addEventListener("selectend",()=>{le=!1}),E.addEventListener("selectstart",()=>{_e=!0}),E.addEventListener("selectend",()=>{_e=!1});const V=()=>{m(!0)},At=()=>{m(!1)};U.xr.addEventListener("sessionstart",V),U.xr.addEventListener("sessionend",At);const ht=()=>{if(l.current.health<=0)return;const Tt=[gn.Punch,gn.Grab,gn.Dodge],qt=Tt[Math.floor(Math.random()*Tt.length)],re=`${Date.now()}-${Math.random()}`,Kt=[-1.3,0,1.3],Yt=Kt[Math.floor(Math.random()*Kt.length)],te=1+Math.random()*1.3,Pe=-22;let Ge="#000";qt===gn.Punch&&(Ge="#f43f5e"),qt===gn.Grab&&(Ge="#3b82f6"),qt===gn.Dodge&&(Ge="#10b981");const Te=2.2+Math.min(l.current.score*.03,3.2)+cn*.3,en=qt===gn.Dodge?1.6:.38,wi={id:re,type:qt,position:{x:Yt,y:te,z:Pe},velocity:{x:0,y:0,z:Te},speed:Te,size:en,spawnTime:Date.now(),duration:Math.abs(Pe)/Te,isHit:!1,isMissed:!1,angle:Math.random()*Math.PI*2,color:Ge};let xn;if(qt===gn.Dodge){const Nn=new ca(1.6,3.2,.4),Vn=new Ws({color:Ge,roughness:.1,metalness:0,transparent:!0,opacity:.45,emissive:Ge,emissiveIntensity:.6});xn=new Qe(Nn,Vn);const Zn=new Jh(Nn),ri=new tl({color:"#10b981",linewidth:3}),En=new Jc(Zn,ri);xn.add(En);const Ve=new el(.12,.25,4),ei=new Ki({color:"#ffffff"}),A=new Qe(Ve,ei);A.position.set(-.3,.5,.21),A.rotation.z=Math.PI/2;const W=new Qe(Ve,ei);W.position.set(.3,.5,.21),W.rotation.z=-Math.PI/2,xn.add(A),xn.add(W),xn.position.set(Yt,1.6,Pe)}else{const Nn=new Qi,Vn=new nl(en,32,32),Zn=new Ws({color:Ge,roughness:.05,metalness:.1,transparent:!0,opacity:.55,emissive:Ge,emissiveIntensity:.8}),ri=new Qe(Vn,Zn);if(Nn.add(ri),qt===gn.Punch){const En=new ca(.18,.18,.18),Ve=new Ki({color:"#ffffff",wireframe:!0}),ei=new Qe(En,Ve);Nn.add(ei)}else if(qt===gn.Grab){const En=new vp(.12,.03,8,16),Ve=new Ki({color:"#ffffff"}),ei=new Qe(En,Ve);ei.rotation.x=Math.PI/3,Nn.add(ei)}Nn.position.set(Yt,te,Pe),xn=Nn}N.add(xn),y.current.set(re,xn),g.current.push(wi)},Ft=Tt=>{if(o!==Yn.Playing)return;M.current=!0,I.current=Date.now();const qt=U.domElement.getBoundingClientRect(),re=(Tt.clientX-qt.left)/qt.width*2-1,Kt=-((Tt.clientY-qt.top)/qt.height)*2+1;x.current={x:re,y:Kt},Fe.setFromCamera(new Ne(re,Kt),T);const Yt=g.current.filter(Te=>!Te.isHit&&!Te.isMissed),te=[],Pe=new Map;Yt.forEach(Te=>{const en=y.current.get(Te.id);en&&(te.push(en),Pe.set(en,Te))});const Ge=Fe.intersectObjects(te,!0);if(Ge.length>0){let Te=Ge[0].object;for(;Te&&!Pe.has(Te);)Te=Te.parent;if(Te){const en=Pe.get(Te);en.type===gn.Punch?ie(en):en.type===gn.Grab&&(L.current=en.id,Zi.playGrab(),ie(en))}}},Nt=Tt=>{if(o!==Yn.Playing)return;const qt=U.domElement.getBoundingClientRect(),re=(Tt.clientX-qt.left)/qt.width*2-1,Kt=-((Tt.clientY-qt.top)/qt.height)*2+1,Yt=re-x.current.x,te=Kt-x.current.y,Pe=Math.sqrt(Yt*Yt+te*te);M.current&&(C.current=Pe/(Date.now()-I.current||1)),x.current={x:re,y:Kt}},yt=()=>{M.current=!1,L.current=null},jt=Tt=>{if(o!==Yn.Playing)return;Tt.key==="a"||Tt.key==="A"||Tt.key==="ArrowLeft"?w.current=-1.3:Tt.key==="d"||Tt.key==="D"||Tt.key==="ArrowRight"?w.current=1.3:(Tt.key==="s"||Tt.key==="S"||Tt.key==="ArrowDown"||Tt.key==="f"||Tt.key==="F")&&(w.current=0);const qt=g.current.filter(re=>!re.isHit&&!re.isMissed&&re.position.z>-4.5&&re.position.z<-.2);if(qt.length>0){if(Tt.key==="1"){const re=qt.find(Kt=>Kt.type===gn.Punch);re&&ie(re)}else if(Tt.key==="2"){const re=qt.find(Kt=>Kt.type===gn.Grab);re&&ie(re)}}},ie=Tt=>{if(Tt.isHit||Tt.isMissed||Tt.position.z<-9)return;Tt.isHit=!0;const qt=y.current.get(Tt.id);if(qt){qt instanceof Qi&&qt.children.forEach(Kt=>{if(Kt instanceof Qe&&Kt.material){const Yt=Kt.material;Yt.emissive&&typeof Yt.emissive.set=="function"&&Yt.emissive.set("#ffffff"),Yt.emissiveIntensity!==void 0&&(Yt.emissiveIntensity=4)}});const re=setInterval(()=>{qt.scale.x>.05?qt.scale.subScalar(.1):(clearInterval(re),N.remove(qt),y.current.delete(Tt.id))},16)}Tt.type===gn.Punch&&Zi.playPunch(),Tt.type===gn.Grab&&Zi.playGrab(),H(re=>{const Kt=re.combo+1,Yt=Math.max(re.maxCombo,Kt),te=100+Math.min(re.combo*10,1e3);return Kt>0&&Kt%10===0&&Zi.playCombo(),{...re,score:re.score+te,combo:Kt,maxCombo:Yt}})},rn=Tt=>{if(Tt.isMissed||Tt.isHit)return;Tt.isMissed=!0;const qt=y.current.get(Tt.id);if(qt){qt instanceof Qi&&qt.children.forEach(Kt=>{if(Kt instanceof Qe&&Kt.material){const Yt=Kt.material;Yt.color&&typeof Yt.color.set=="function"&&Yt.color.set("#ef4444"),Yt.emissive&&typeof Yt.emissive.set=="function"&&Yt.emissive.set("#ef4444"),Yt.transparent=!0}});const re=setInterval(()=>{qt.position.y>-2?(qt.position.y-=.15,qt.position.z+=.05):(clearInterval(re),N.remove(qt),y.current.delete(Tt.id))},16)}Tt.type!==gn.Dodge&&(Zi.playError(),H(re=>({...re,combo:0,health:Math.max(0,re.health-1)})))};window.addEventListener("mousedown",Ft),window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",yt),window.addEventListener("keydown",jt);const Oe=new HM,si=()=>{const Tt=Oe.getDelta(),qt=Date.now(),re=Math.max(3400-l.current.score*.08,2400);if(o===Yn.Playing&&qt-wt>re&&(ht(),wt=qt),b.current+=(w.current-b.current)*12*Tt,T.position.set(b.current,1.7,3.2),T.lookAt(b.current,1.1,-5),U.xr.isPresenting){const Yt=U.xr.getCamera();b.current=Yt.position.x}if(U.xr.isPresenting&&U.xr.getSession()){const te=new Y;let Pe=!1,Ge=!1;const Te=J,en=Te.joints?Te.joints.wrist:null,wi=Te.joints?Te.joints["index-finger-tip"]:null,xn=Te.joints?Te.joints["thumb-tip"]:null;if(en&&wi&&xn){const K=new Y().setFromMatrixPosition(en.matrixWorld);if(K.lengthSq()>.001){Ge=!0,te.copy(K);const et=new Y().setFromMatrixPosition(wi.matrixWorld),tt=new Y().setFromMatrixPosition(xn.matrixWorld);Pe=et.distanceTo(tt)<.032}}const Nn=Ct.get("left");Ge?(It.visible=!1,Nn&&Nn.forEach(K=>{K.visible=!0})):(te.copy(D.position),Pe=le,It.visible=!0,Nn&&Nn.forEach(K=>{K.visible=!1}));const Vn=new Y;let Zn=!1,ri=!1;const En=mt,Ve=En.joints?En.joints.wrist:null,ei=En.joints?En.joints["index-finger-tip"]:null,A=En.joints?En.joints["thumb-tip"]:null;if(Ve&&ei&&A){const K=new Y().setFromMatrixPosition(Ve.matrixWorld);if(K.lengthSq()>.001){ri=!0,Vn.copy(K);const et=new Y().setFromMatrixPosition(ei.matrixWorld),tt=new Y().setFromMatrixPosition(A.matrixWorld);Zn=et.distanceTo(tt)<.032}}const W=Ct.get("right");ri?(Dt.visible=!1,W&&W.forEach(K=>{K.visible=!0})):(Vn.copy(E.position),Zn=_e,Dt.visible=!0,W&&W.forEach(K=>{K.visible=!1})),Qt.left.prev.copy(Qt.left.curr),Qt.left.curr.copy(te),Qt.left.velocity.subVectors(Qt.left.curr,Qt.left.prev).divideScalar(Tt||.016),Qt.right.prev.copy(Qt.right.curr),Qt.right.curr.copy(Vn),Qt.right.velocity.subVectors(Qt.right.curr,Qt.right.prev).divideScalar(Tt||.016),g.current.forEach(K=>{if(K.isHit||K.isMissed)return;const et=y.current.get(K.id);if(!et)return;const tt=new Y().setFromMatrixPosition(et.matrixWorld),Bt=tt.distanceTo(te),Xt=tt.distanceTo(Vn),zt=K.type===gn.Dodge?1:.45;if(K.type===gn.Dodge){const Vt=tt.z;Vt>-.5&&Vt<.5&&(Math.abs(b.current-tt.x)<.8?rn(K):!K.isHit&&!K.isMissed&&(K.isHit=!0,Zi.playDodge(),H(Jt=>({...Jt,score:Jt.score+150,combo:Jt.combo+1}))))}else{const Vt=Bt<zt,Wt=Xt<zt;if(Vt||Wt){const Jt=Vt?Qt.left.velocity:Qt.right.velocity,fe=Vt?Pe:Zn;K.type===gn.Punch?Jt.length()>1.2&&ie(K):K.type===gn.Grab&&fe&&ie(K)}}})}for(let Yt=g.current.length-1;Yt>=0;Yt--){const te=g.current[Yt],Pe=y.current.get(te.id);if(Pe){if(te.position.z+=te.velocity.z*Tt,Pe.position.z=te.position.z,te.angle+=1.8*Tt,Pe.rotation.y=te.angle*.45,te.type!==gn.Dodge&&(Pe.rotation.x=te.angle*.2),!U.xr.isPresenting&&te.type===gn.Dodge){const Ge=te.position.z;Ge>-.6&&Ge<.6&&(Math.abs(b.current-te.position.x)<.8?rn(te):!te.isHit&&!te.isMissed&&(te.isHit=!0,Zi.playDodge(),H(en=>({...en,score:en.score+150,combo:en.combo+1}))))}te.position.z>2&&!te.isHit&&!te.isMissed&&rn(te)}}const Kt=pt.geometry.attributes.position.array;for(let Yt=0;Yt<ct;Yt++)Kt[Yt*3+2]+=.8*Tt,Kt[Yt*3+1]+=Math.sin(qt*.001+Yt)*.08*Tt,Kt[Yt*3+2]>3&&(Kt[Yt*3+2]=-22,Kt[Yt*3]=(Math.random()-.5)*16,Kt[Yt*3+1]=Math.random()*6);pt.geometry.attributes.position.needsUpdate=!0,U.render(N,T)};U.setAnimationLoop(si);const Hn=()=>{if(!s.current||!U||!T)return;const Tt=s.current.clientWidth,qt=s.current.clientHeight;T.aspect=Tt/qt,T.updateProjectionMatrix(),U.setSize(Tt,qt)},ta=new ResizeObserver(()=>Hn());return ta.observe(s.current),window.addEventListener("resize",Hn),()=>{if(ta.disconnect(),window.removeEventListener("resize",Hn),window.removeEventListener("mousedown",Ft),window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",yt),window.removeEventListener("keydown",jt),U.setAnimationLoop(null),U.xr.removeEventListener("sessionstart",V),U.xr.removeEventListener("sessionend",At),s.current&&U.domElement)try{s.current.removeChild(U.domElement)}catch{}N.children.forEach(Tt=>{var qt,re;Tt instanceof Qe&&((qt=Tt.geometry)==null||qt.dispose(),Array.isArray(Tt.material)?Tt.material.forEach(Kt=>Kt.dispose()):(re=Tt.material)==null||re.dispose())}),Zi.stopDrone()}},[o]);const P=async()=>{if(!(!c||!v.current))try{const N={optionalFeatures:["local-floor","hand-tracking"]},T=await navigator.xr.requestSession("immersive-vr",N);v.current.xr.setSession(T)}catch(N){console.error("Failed to initiate WebXR VR session: ",N),alert("Could not start VR session. Check your headset connection or WebXR browser permissions.")}};return vt.jsxs("div",{id:"game-canvas-wrapper",className:"fixed inset-0 w-screen h-screen z-10 overflow-hidden select-none pointer-events-none",children:[vt.jsx("div",{ref:s,className:"w-full h-full absolute inset-0 z-0 bg-slate-50 pointer-events-auto"}),c&&o===Yn.Playing&&vt.jsxs("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2",children:[vt.jsxs("button",{onClick:P,className:"px-6 py-3 bg-white/20 backdrop-blur-md border border-white/40 shadow-lg text-indigo-950 font-medium rounded-full hover:bg-white/30 transition duration-300 pointer-events-auto flex items-center gap-2",children:[vt.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse"}),p?"VR SESSION ACTIVE":"ENTER VR ARCADE MAP"]}),!p&&vt.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#a855f7]/80 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20",children:"SUPPORTS OCULUS QUEST HAND-TRACKING"})]}),o===Yn.Playing&&vt.jsxs("div",{className:"absolute top-20 left-1/2 transform -translate-x-1/2 z-10 bg-white/40 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-slate-800 flex items-center gap-5 select-none pointer-events-none",children:[vt.jsxs("div",{className:"flex items-center gap-1.5",children:[vt.jsx("span",{className:"bg-white px-2 py-0.5 rounded border shadow-xs text-xs font-bold text-indigo-600",children:"A"}),vt.jsx("span",{className:"bg-white px-2 py-0.5 rounded border shadow-xs text-xs font-bold text-indigo-600",children:"D"}),vt.jsx("span",{children:"Dodge Left / Right"})]}),vt.jsx("div",{className:"w-px h-3 bg-indigo-200"}),vt.jsxs("div",{className:"flex items-center gap-1.5",children:[vt.jsx("span",{className:"bg-white px-2 py-0.5 rounded border shadow-xs text-xs font-bold text-indigo-600",children:"Click"}),vt.jsx("span",{children:"Punch Red"})]})]})]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Mv=o=>{const t=HA(o);return t.charAt(0).toUpperCase()+t.slice(1)},sx=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),VA=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=Xe.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>Xe.createElement("svg",{ref:m,...kA,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:sx("lucide",l),...!c&&!VA(p)&&{"aria-hidden":"true"},...p},[...h.map(([d,S])=>Xe.createElement(d,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=(o,t)=>{const i=Xe.forwardRef(({className:s,...l},c)=>Xe.createElement(XA,{ref:c,iconNode:t,className:sx(`lucide-${GA(Mv(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Mv(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qA=ga("eye",WA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],jA=ga("hand",YA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],KA=ga("info",ZA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ev=ga("play",QA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$A=ga("refresh-cw",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],eR=ga("rotate-ccw",tR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],iR=ga("shield",nR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ep=ga("sparkles",aR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],rR=ga("trophy",sR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],lR=ga("zap",oR),cR=()=>{const o=[{color:"bg-rose-100 border-rose-300 text-rose-600",glow:"shadow-rose-100/50",label:"Punch",target:"Red Object",symbol:"Wireframe Fist",vr:"Strike target with high velocity (hand movement > 1.2 m/s)",desktop:"Click directly on the incoming red target",icon:vt.jsx(lR,{className:"w-5 h-5"})},{color:"bg-blue-100 border-blue-300 text-blue-600",glow:"shadow-blue-100/50",label:"Grab",target:"Blue Object",symbol:"Inner Torus Ring",vr:"Hold down the grab trigger / squeeze grip when touching target",desktop:"Hold down click or click active blue target in strike zone",icon:vt.jsx(jA,{className:"w-5 h-5"})},{color:"bg-emerald-100 border-emerald-300 text-emerald-600",glow:"shadow-emerald-100/50",label:"Dodge",target:"Green Prism",symbol:"Direction Arrows",vr:"Physical body shift - lean left or right to avoid the prism",desktop:"Press A / D keys (or Left / Right Arrow keys) to slide camera",icon:vt.jsx(iR,{className:"w-5 h-5"})}];return vt.jsxs("div",{id:"rules-screen-container",className:"flex flex-col gap-5 text-slate-800 animate-fadeIn select-none pb-6",children:[vt.jsxs("div",{className:"p-4 bg-purple-50/50 border border-purple-200/50 rounded-2xl text-center shadow-xs",children:[vt.jsxs("p",{className:"text-xs font-semibold tracking-wider text-purple-600 uppercase flex items-center justify-center gap-1.5",children:[vt.jsx(ep,{className:"w-4 h-4 text-purple-500"}),"Color + Symbol = Reaction Code"]}),vt.jsx("p",{className:"text-sm mt-1 text-slate-600 font-medium",children:"Correct reactions increase your score and build an active combo multipliers. Mistakes, incorrect triggers, or missed targets cause health damage!"})]}),vt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:o.map((t,i)=>vt.jsx("div",{id:`action-${t.label.toLowerCase()}`,className:`p-4 rounded-3xl border bg-white/75 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${t.glow}`,children:vt.jsxs("div",{children:[vt.jsxs("div",{className:"flex items-center justify-between mb-3",children:[vt.jsxs("span",{className:`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border flex items-center gap-1.5 ${t.color}`,children:[t.icon,t.label]}),vt.jsx("span",{className:"text-[11px] font-mono font-medium text-slate-400",children:t.target})]}),vt.jsx("div",{className:"mb-4",children:vt.jsxs("p",{className:"text-sm font-semibold text-slate-700",children:["Indicators: ",vt.jsx("span",{className:"text-slate-900 font-bold",children:t.symbol})]})}),vt.jsxs("div",{className:"space-y-2 mt-2 pt-2 border-t border-slate-100",children:[vt.jsxs("div",{children:[vt.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-indigo-500 font-bold block mb-0.5",children:"Desktop Controls"}),vt.jsx("p",{className:"text-xs text-slate-600 leading-relaxed font-medium",children:t.desktop})]}),vt.jsx("div",{className:"mt-2 text-slate-100 h-px bg-slate-100"}),vt.jsxs("div",{children:[vt.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-purple-500 font-bold block mb-0.5",children:"VR Hands & Controllers"}),vt.jsx("p",{className:"text-xs text-slate-600 leading-relaxed font-medium",children:t.vr})]})]})]})},i))}),vt.jsxs("div",{className:"p-4 bg-blue-50/50 border border-blue-250/50 rounded-2xl flex gap-3 shadow-xs",children:[vt.jsx("div",{className:"p-2 bg-blue-500/10 text-blue-600 rounded-xl h-fit",children:vt.jsx(qA,{className:"w-5 h-5 animate-pulse"})}),vt.jsxs("div",{children:[vt.jsx("h4",{className:"text-xs font-bold tracking-wider text-blue-600 uppercase",children:"PRO VR EXPERIENCE"}),vt.jsxs("p",{className:"text-xs mt-0.5 text-slate-600 leading-relaxed font-medium",children:["WebXR VR mode is integrated. Simply load Neon Reflex on any VR-capable web browser (like Oculus Quest browser) and click ",vt.jsx("strong",{children:'"Enter VR Arcade Map"'}),". Physical camera/headset location coordinates are synchronized with green dodging meshes!"]})]})]})]})};function uR(){const[o,t]=Xe.useState(Yn.Menu),[i,s]=Xe.useState("play"),[l,c]=Xe.useState({score:0,combo:0,maxCombo:0,health:5,hasDodged:!1}),[h,p]=Xe.useState(0);Xe.useEffect(()=>{const y=localStorage.getItem("neon_reflex_high_score");y&&p(parseInt(y,10))},[]);const m=y=>{c(y)},d=y=>{t(Yn.GameOver),y>h&&(p(y),localStorage.setItem("neon_reflex_high_score",y.toString()))},S=()=>{t(Yn.Playing)},v=()=>{t(Yn.Playing)},g=()=>{t(Yn.Menu),s("play")};return vt.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden font-sans",style:{background:"radial-gradient(circle at 50% 50%, #fdfbfb 0%, #ebedee 100%)"},children:[vt.jsx(FA,{gameState:o,onStatsUpdate:m,onGameOver:d}),vt.jsxs("div",{className:"absolute inset-0 pointer-events-none select-none z-5",children:[vt.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] bg-sky-200/50"}),vt.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-pink-100/60"}),vt.jsx("div",{className:"absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full blur-[80px] bg-indigo-100/45"})]}),o===Yn.Menu&&vt.jsx("div",{className:"absolute z-30 inset-0 flex items-center justify-center p-4 bg-slate-900/5/10 backdrop-blur-xs",children:vt.jsxs("div",{className:"bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[32px] max-w-2xl w-full p-6 md:p-8 relative animate-fadeIn flex flex-col max-h-[92vh]",children:[vt.jsxs("div",{className:"text-center mb-6",children:[vt.jsx("div",{className:"mx-auto w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-200/50 mb-3 animate-float",children:vt.jsx(ep,{className:"w-6 h-6"})}),vt.jsx("h1",{className:"text-4xl font-extralight tracking-[0.15em] text-slate-800 uppercase font-sans",children:"NEON REFLEX"}),vt.jsx("p",{className:"text-xs uppercase tracking-widest font-bold text-slate-450 mt-1",children:"VR + DESKTOP REACTION ARCADE"})]}),vt.jsxs("div",{className:"flex bg-slate-200/40 p-1 rounded-full border border-white/40 mb-6 w-full max-w-md mx-auto",children:[vt.jsxs("button",{onClick:()=>s("play"),className:`flex-1 py-2 text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${i==="play"?"bg-white text-slate-800 shadow-sm border border-slate-100":"text-slate-650 hover:text-slate-900"}`,children:[vt.jsx(Ev,{className:"w-3.5 h-3.5"}),"Play Survival"]}),vt.jsxs("button",{onClick:()=>s("rules"),className:`flex-1 py-2 text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${i==="rules"?"bg-white text-slate-800 shadow-sm border border-slate-100":"text-slate-650 hover:text-slate-900"}`,children:[vt.jsx(KA,{className:"w-3.5 h-3.5"}),"Rules & Controls"]})]}),vt.jsx("div",{className:"flex-1 overflow-y-auto min-h-0",children:i==="play"?vt.jsxs("div",{className:"flex flex-col items-center justify-center text-center py-4 animate-fadeIn",children:[vt.jsxs("div",{className:"p-6 bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl max-w-xs w-full mb-8 shadow-xs",children:[vt.jsx(rR,{className:"w-8 h-8 text-amber-500 mx-auto mb-2 animate-pulse"}),vt.jsx("span",{className:"text-[10px] font-bold text-slate-450 uppercase tracking-widest block",children:"PERSONAL BEST"}),vt.jsx("span",{className:"text-4xl font-light text-slate-800 tracking-tight block mt-0.5",children:h.toLocaleString()})]}),vt.jsx("p",{className:"text-sm text-slate-600 max-w-sm mb-6 leading-relaxed font-light",children:"Test your rhythm and reaction speed! Slicing, punching, grabbing, and dodging incoming targets in perfect synchronization."}),vt.jsxs("button",{onClick:S,className:"px-8 py-4 bg-slate-800 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:bg-slate-950 transition-all duration-300 flex items-center gap-2",children:[vt.jsx(Ev,{className:"w-4 h-4 fill-white"}),"START REFLEX SURVIVAL"]}),vt.jsx("p",{className:"text-[10px] text-slate-450 mt-4 font-mono uppercase tracking-wider",children:"COMPATIBLE WITH STANDARD WEBXR HEADSETS & PC"})]}):vt.jsx(cR,{})}),vt.jsx("div",{className:"text-center pt-4 border-t border-slate-200/40 mt-4",children:vt.jsx("span",{className:"text-[10px] text-slate-450 font-mono",children:"NEON REFLEX v1.0.4 • GITHUB PAGES STABLE"})})]})}),o===Yn.Playing&&vt.jsxs("div",{className:"absolute inset-0 pointer-events-none select-none z-20 flex flex-col justify-between p-6",children:[vt.jsxs("header",{className:"relative z-20 p-2 flex justify-between items-start w-full",children:[vt.jsxs("div",{className:"bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl p-4 px-8 shadow-sm flex items-center space-x-12",children:[vt.jsxs("div",{className:"flex flex-col",children:[vt.jsx("span",{className:"text-[10px] uppercase tracking-widest text-slate-500 font-bold",children:"Reflex Score"}),vt.jsx("span",{className:"text-3xl font-light text-slate-800 tracking-tight",children:l.score.toLocaleString()})]}),vt.jsx("div",{className:"h-10 w-[1px] bg-slate-200"}),vt.jsxs("div",{className:"flex flex-col",children:[vt.jsxs("span",{className:"text-[10px] uppercase tracking-widest text-pink-500 font-bold",children:["Combo x",l.combo]}),vt.jsx("div",{className:"h-1.5 w-24 bg-slate-100 rounded-full mt-2 overflow-hidden",children:vt.jsx("div",{className:"h-full bg-pink-400 transition-all duration-300",style:{width:`${Math.min(l.combo/40*100,100)}%`}})})]})]}),vt.jsxs("div",{className:"bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl p-4 px-6 shadow-sm flex flex-col items-center",children:[vt.jsx("span",{className:"text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2",children:"Vitality"}),vt.jsx("div",{className:"flex space-x-2",children:[...Array(5)].map((y,b)=>vt.jsx("div",{className:`w-4 h-4 rounded-full transition-all duration-300 ${b<l.health?"bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]":"bg-slate-200"}`},b))})]})]}),vt.jsxs("div",{className:"w-full flex justify-between items-end pb-2",children:[vt.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:block",children:"WebXR Active | Standard Controller/Mouse Hand Tracking Sync"}),vt.jsx("button",{onClick:g,className:"px-5 py-2.5 bg-white/30 backdrop-blur-xl border border-white/55 text-[10px] uppercase tracking-widest font-bold text-slate-600 rounded-xl hover:text-slate-900 pointer-events-auto shadow-xs hover:bg-white/50 transition-colors",children:"Back to Menu"})]})]}),o===Yn.GameOver&&vt.jsx("div",{className:"absolute z-35 inset-0 flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-md",children:vt.jsxs("div",{className:"bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[32px] max-w-md w-full p-6 md:p-8 relative text-center animate-fadeIn",children:[vt.jsx("div",{className:"mx-auto w-12 h-12 rounded-2xl bg-rose-50 border border-rose-150 flex items-center justify-center text-rose-500 mb-4 animate-float",children:vt.jsx(eR,{className:"w-6 h-6"})}),vt.jsx("h2",{className:"text-3xl font-extralight tracking-tight text-slate-800 uppercase",children:"SURVIVAL COMPLETE"}),vt.jsx("p",{className:"text-xs text-slate-400 font-mono uppercase tracking-widest mt-1",children:"Arcade results"}),vt.jsxs("div",{className:"my-6 grid grid-cols-2 gap-3",children:[vt.jsxs("div",{className:"bg-white/40 border border-white/50 p-3 rounded-2xl shadow-xs",children:[vt.jsx("span",{className:"text-[10px] font-bold text-slate-400 tracking-wider block uppercase",children:"FINAL SCORE"}),vt.jsx("span",{className:"text-2xl font-light text-slate-800 tracking-tight",children:l.score.toLocaleString()})]}),vt.jsxs("div",{className:"bg-white/40 border border-white/50 p-3 rounded-2xl shadow-xs",children:[vt.jsx("span",{className:"text-[10px] font-bold text-slate-400 tracking-wider block uppercase",children:"MAX STREAK"}),vt.jsx("span",{className:"text-2xl font-light text-slate-800 tracking-tight",children:l.maxCombo})]})]}),l.score>=h&&l.score>0&&vt.jsxs("div",{className:"mb-6 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-800 text-[10px] uppercase tracking-wider font-bold flex items-center justify-center gap-1.5",children:[vt.jsx(ep,{className:"w-4 h-4 text-emerald-500 animate-pulse"}),"NEW RECORD CONGRATULATIONS!"]}),vt.jsxs("div",{className:"flex flex-col gap-2.5",children:[vt.jsxs("button",{onClick:v,className:"w-full py-3.5 bg-slate-800 hover:bg-slate-950 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition duration-300 flex items-center justify-center gap-2",children:[vt.jsx($A,{className:"w-4 h-4"}),"PLAY SURVIVAL AGAIN"]}),vt.jsx("button",{onClick:g,className:"w-full py-3 bg-white/45 hover:bg-white/60 text-slate-700 border border-slate-200 font-bold text-xs uppercase tracking-widest rounded-xl transition duration-300",children:"BACK TO MAIN MENU"})]})]})})]})}_y.createRoot(document.getElementById("root")).render(vt.jsx(Xe.StrictMode,{children:vt.jsx(uR,{})}));
