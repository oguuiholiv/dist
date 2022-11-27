function ah(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function uh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),ch=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),hh=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),vh=Symbol.for("react.memo"),xh=Symbol.for("react.lazy"),nc=Symbol.iterator;function wh(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,Jd={};function zr(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Xd}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qd(){}qd.prototype=zr.prototype;function Ma(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Xd}var La=Ma.prototype=new qd;La.constructor=Ma;Zd(La,zr.prototype);La.isPureReactComponent=!0;var rc=Array.isArray,ef=Object.prototype.hasOwnProperty,ja={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:bo,type:e,key:i,ref:l,props:o,_owner:ja.current}}function Sh(e,t){return{$$typeof:bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function kh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oc=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kh(""+e.key):t.toString(36)}function hi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case bo:case ch:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Jl(l,0):r,rc(o)?(n="",e!=null&&(n=e.replace(oc,"$&/")+"/"),hi(o,t,n,"",function(u){return u})):o!=null&&(Fa(o)&&(o=Sh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(oc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",rc(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Jl(i,s);l+=hi(i,t,n,a,o)}else if(a=wh(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Jl(i,s++),l+=hi(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Go(e,t,n){if(e==null)return e;var r=[],o=0;return hi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},gi={transition:null},Eh={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:gi,ReactCurrentOwner:ja};Q.Children={map:Go,forEach:function(e,t,n){Go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Go(e,function(){t++}),t},toArray:function(e){return Go(e,function(t){return t})||[]},only:function(e){if(!Fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=zr;Q.Fragment=dh;Q.Profiler=ph;Q.PureComponent=Ma;Q.StrictMode=fh;Q.Suspense=yh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ja.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ef.call(t,a)&&!tf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:bo,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:hh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mh,_context:e},e.Consumer=e};Q.createElement=nf;Q.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:gh,render:e}};Q.isValidElement=Fa;Q.lazy=function(e){return{$$typeof:xh,_payload:{_status:-1,_result:e},_init:Ch}};Q.memo=function(e,t){return{$$typeof:vh,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=gi.transition;gi.transition={};try{e()}finally{gi.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Qe.current.useCallback(e,t)};Q.useContext=function(e){return Qe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Qe.current.useEffect(e,t)};Q.useId=function(){return Qe.current.useId()};Q.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Qe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};Q.useRef=function(e){return Qe.current.useRef(e)};Q.useState=function(e){return Qe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Qe.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(b);const ut=uh(b.exports),vr=ah({__proto__:null,default:ut},[b.exports]);var Os={},rf={exports:{}},dt={},of={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,D){var U=_.length;_.push(D);e:for(;0<U;){var ie=U-1>>>1,O=_[ie];if(0<o(O,D))_[ie]=D,_[U]=O,U=ie;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var D=_[0],U=_.pop();if(U!==D){_[0]=U;e:for(var ie=0,O=_.length,A=O>>>1;ie<A;){var N=2*(ie+1)-1,F=_[N],w=N+1,G=_[w];if(0>o(F,U))w<O&&0>o(G,F)?(_[ie]=G,_[w]=U,ie=w):(_[ie]=F,_[N]=U,ie=N);else if(w<O&&0>o(G,U))_[ie]=G,_[w]=U,ie=w;else break e}}return D}function o(_,D){var U=_.sortIndex-D.sortIndex;return U!==0?U:_.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,m=null,f=3,x=!1,y=!1,g=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=_)r(u),D.sortIndex=D.expirationTime,t(a,D);else break;D=n(u)}}function v(_){if(g=!1,h(_),!y)if(n(a)!==null)y=!0,Pe(S);else{var D=n(u);D!==null&&Se(v,D.startTime-_)}}function S(_,D){y=!1,g&&(g=!1,d(T),T=-1),x=!0;var U=f;try{for(h(D),m=n(a);m!==null&&(!(m.expirationTime>D)||_&&!H());){var ie=m.callback;if(typeof ie=="function"){m.callback=null,f=m.priorityLevel;var O=ie(m.expirationTime<=D);D=e.unstable_now(),typeof O=="function"?m.callback=O:m===n(a)&&r(a),h(D)}else r(a);m=n(a)}if(m!==null)var A=!0;else{var N=n(u);N!==null&&Se(v,N.startTime-D),A=!1}return A}finally{m=null,f=U,x=!1}}var $=!1,E=null,T=-1,L=5,z=-1;function H(){return!(e.unstable_now()-z<L)}function K(){if(E!==null){var _=e.unstable_now();z=_;var D=!0;try{D=E(!0,_)}finally{D?te():($=!1,E=null)}}else $=!1}var te;if(typeof c=="function")te=function(){c(K)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ue=me.port2;me.port1.onmessage=K,te=function(){ue.postMessage(null)}}else te=function(){C(K,0)};function Pe(_){E=_,$||($=!0,te())}function Se(_,D){T=C(function(){_(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Pe(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var U=f;f=D;try{return _()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var U=f;f=_;try{return D()}finally{f=U}},e.unstable_scheduleCallback=function(_,D,U){var ie=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,_){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=U+O,_={id:p++,callback:D,priorityLevel:_,startTime:U,expirationTime:O,sortIndex:-1},U>ie?(_.sortIndex=U,t(u,_),n(a)===null&&_===n(u)&&(g?(d(T),T=-1):g=!0,Se(v,U-ie))):(_.sortIndex=O,t(a,_),y||x||(y=!0,Pe(S))),_},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(_){var D=f;return function(){var U=f;f=D;try{return _.apply(this,arguments)}finally{f=U}}}})(lf);(function(e){e.exports=lf})(of);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=b.exports,ct=of.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,uo={};function Vn(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(uo[e]=t,e=0;e<t.length;e++)af.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=Object.prototype.hasOwnProperty,$h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},lc={};function Ph(e){return Ns.call(lc,e)?!0:Ns.call(ic,e)?!1:$h.test(e)?lc[e]=!0:(ic[e]=!0,!1)}function _h(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Th(e,t,n,r){if(t===null||typeof t>"u"||_h(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,Ba);Fe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,Ba);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,Ba);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ua(e,t,n,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Th(t,n,o,r)&&(n=null),r||o===null?Ph(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Wa=Symbol.for("react.forward_ref"),As=Symbol.for("react.suspense"),Is=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),sc=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,ql;function Kr(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var es=!1;function ts(e,t){if(!e||es)return"";es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{es=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kr(e):""}function zh(e){switch(e.tag){case 5:return Kr(e.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return e=ts(e.type,!1),e;case 11:return e=ts(e.type.render,!1),e;case 1:return e=ts(e.type,!0),e;default:return""}}function Ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Jn:return"Portal";case bs:return"Profiler";case Va:return"StrictMode";case As:return"Suspense";case Is:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case Wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:Ms(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return Ms(e(t))}catch{}}return null}function Rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ms(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oh(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yo(e){e._valueTracker||(e._valueTracker=Oh(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&Ua(e,"checked",t,!1)}function js(e,t){mf(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fs(e,t,n){(t!=="number"||bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Gr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function hf(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xo,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nh=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Nh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bh=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(bh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,fr=null,pr=null;function fc(e){if(e=Mo(e)){if(typeof Hs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=dl(t),Hs(e.stateNode,e.type,t))}}function wf(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Sf(){if(fr){var e=fr,t=pr;if(pr=fr=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function kf(e,t){return e(t)}function Cf(){}var ns=!1;function Ef(e,t,n){if(ns)return e(t,n);ns=!0;try{return kf(e,t,n)}finally{ns=!1,(fr!==null||pr!==null)&&(Cf(),Sf())}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ks=!1;if(Gt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Ks=!1}function Ah(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var qr=!1,Ai=null,Ii=!1,Gs=null,Ih={onError:function(e){qr=!0,Ai=e}};function Mh(e,t,n,r,o,i,l,s,a){qr=!1,Ai=null,Ah.apply(Ih,arguments)}function Lh(e,t,n,r,o,i,l,s,a){if(Mh.apply(this,arguments),qr){if(qr){var u=Ai;qr=!1,Ai=null}else throw Error(P(198));Ii||(Ii=!0,Gs=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(Wn(e)!==e)throw Error(P(188))}function jh(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return pc(o),e;if(i===r)return pc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Pf(e){return e=jh(e),e!==null?_f(e):null}function _f(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_f(e);if(t!==null)return t;e=e.sibling}return null}var Tf=ct.unstable_scheduleCallback,mc=ct.unstable_cancelCallback,Fh=ct.unstable_shouldYield,Dh=ct.unstable_requestPaint,Ce=ct.unstable_now,Bh=ct.unstable_getCurrentPriorityLevel,Ga=ct.unstable_ImmediatePriority,zf=ct.unstable_UserBlockingPriority,Mi=ct.unstable_NormalPriority,Uh=ct.unstable_LowPriority,Rf=ct.unstable_IdlePriority,sl=null,Lt=null;function Vh(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Kh,Wh=Math.log,Hh=Math.LN2;function Kh(e){return e>>>=0,e===0?32:31-(Wh(e)/Hh|0)|0}var Zo=64,Jo=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Qr(s):(i&=l,i!==0&&(r=Qr(i)))}else l=n&~o,l!==0?r=Qr(l):i!==0&&(r=Qr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Gh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Tt(i),s=1<<l,a=o[l];a===-1?((s&n)===0||(s&r)!==0)&&(o[l]=Gh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Of(){var e=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),e}function rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Yh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var le=0;function Nf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bf,Ya,Af,If,Mf,Ys=!1,qo=[],sn=null,an=null,un=null,po=new Map,mo=new Map,nn=[],Xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Mo(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zh(e,t,n,r,o){switch(t){case"focusin":return sn=Lr(sn,e,t,n,r,o),!0;case"dragenter":return an=Lr(an,e,t,n,r,o),!0;case"mouseover":return un=Lr(un,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return po.set(i,Lr(po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mo.set(i,Lr(mo.get(i)||null,e,t,n,r,o)),!0}return!1}function Lf(e){var t=Rn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=$f(n),t!==null){e.blockedOn=t,Mf(e.priority,function(){Af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=Mo(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function gc(e,t,n){yi(e)&&n.delete(t)}function Jh(){Ys=!1,sn!==null&&yi(sn)&&(sn=null),an!==null&&yi(an)&&(an=null),un!==null&&yi(un)&&(un=null),po.forEach(gc),mo.forEach(gc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,Jh)))}function ho(e){function t(o){return jr(o,e)}if(0<qo.length){jr(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&jr(sn,e),an!==null&&jr(an,e),un!==null&&jr(un,e),po.forEach(t),mo.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&nn.shift()}var mr=Zt.ReactCurrentBatchConfig,ji=!0;function qh(e,t,n,r){var o=le,i=mr.transition;mr.transition=null;try{le=1,Xa(e,t,n,r)}finally{le=o,mr.transition=i}}function e0(e,t,n,r){var o=le,i=mr.transition;mr.transition=null;try{le=4,Xa(e,t,n,r)}finally{le=o,mr.transition=i}}function Xa(e,t,n,r){if(ji){var o=Xs(e,t,n,r);if(o===null)ps(e,t,r,Fi,n),hc(e,r);else if(Zh(o,e,t,n,r))r.stopPropagation();else if(hc(e,r),t&4&&-1<Xh.indexOf(e)){for(;o!==null;){var i=Mo(o);if(i!==null&&bf(i),i=Xs(e,t,n,r),i===null&&ps(e,t,r,Fi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}var Fi=null;function Xs(e,t,n,r){if(Fi=null,e=Ka(r),e=Rn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bh()){case Ga:return 1;case zf:return 4;case Mi:case Uh:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var on=null,Za=null,vi=null;function Ff(){if(vi)return vi;var e,t=Za,n=t.length,r,o="value"in on?on.value:on.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return vi=o.slice(e,1<r?1-r:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function yc(){return!1}function ft(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ei:yc,this.isPropagationStopped=yc,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=ft(Rr),Io=xe({},Rr,{view:0,detail:0}),t0=ft(Io),os,is,Fr,al=xe({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(os=e.screenX-Fr.screenX,is=e.screenY-Fr.screenY):is=os=0,Fr=e),os)},movementY:function(e){return"movementY"in e?e.movementY:is}}),vc=ft(al),n0=xe({},al,{dataTransfer:0}),r0=ft(n0),o0=xe({},Io,{relatedTarget:0}),ls=ft(o0),i0=xe({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=ft(i0),s0=xe({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=ft(s0),u0=xe({},Rr,{data:0}),xc=ft(u0),c0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=f0[e])?!!t[e]:!1}function qa(){return p0}var m0=xe({},Io,{key:function(e){if(e.key){var t=c0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h0=ft(m0),g0=xe({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=ft(g0),y0=xe({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),v0=ft(y0),x0=xe({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=ft(x0),S0=xe({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=ft(S0),C0=[9,13,27,32],eu=Gt&&"CompositionEvent"in window,eo=null;Gt&&"documentMode"in document&&(eo=document.documentMode);var E0=Gt&&"TextEvent"in window&&!eo,Df=Gt&&(!eu||eo&&8<eo&&11>=eo),Sc=String.fromCharCode(32),kc=!1;function Bf(e,t){switch(e){case"keyup":return C0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function $0(e,t){switch(e){case"compositionend":return Uf(t);case"keypress":return t.which!==32?null:(kc=!0,Sc);case"textInput":return e=t.data,e===Sc&&kc?null:e;default:return null}}function P0(e,t){if(er)return e==="compositionend"||!eu&&Bf(e,t)?(e=Ff(),vi=Za=on=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Df&&t.locale!=="ko"?null:t.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_0[e.type]:t==="textarea"}function Vf(e,t,n,r){wf(r),t=Di(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var to=null,go=null;function T0(e){ep(e,0)}function ul(e){var t=rr(e);if(pf(t))return e}function z0(e,t){if(e==="change")return t}var Wf=!1;if(Gt){var ss;if(Gt){var as="oninput"in document;if(!as){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),as=typeof Ec.oninput=="function"}ss=as}else ss=!1;Wf=ss&&(!document.documentMode||9<document.documentMode)}function $c(){to&&(to.detachEvent("onpropertychange",Hf),go=to=null)}function Hf(e){if(e.propertyName==="value"&&ul(go)){var t=[];Vf(t,go,e,Ka(e)),Ef(T0,t)}}function R0(e,t,n){e==="focusin"?($c(),to=t,go=n,to.attachEvent("onpropertychange",Hf)):e==="focusout"&&$c()}function O0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(go)}function N0(e,t){if(e==="click")return ul(t)}function b0(e,t){if(e==="input"||e==="change")return ul(t)}function A0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:A0;function yo(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ns.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var n=Pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pc(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bi(e.document)}return t}function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I0(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_c(n,i);var l=_c(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M0=Gt&&"documentMode"in document&&11>=document.documentMode,tr=null,Zs=null,no=null,Js=!1;function Tc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||tr==null||tr!==bi(r)||(r=tr,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&yo(no,r)||(no=r,r=Di(Zs,"onSelect"),0<r.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},us={},Qf={};Gt&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function cl(e){if(us[e])return us[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return us[e]=t[n];return e}var Yf=cl("animationend"),Xf=cl("animationiteration"),Zf=cl("animationstart"),Jf=cl("transitionend"),qf=new Map,zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){qf.set(e,t),Vn(t,[e])}for(var cs=0;cs<zc.length;cs++){var ds=zc[cs],L0=ds.toLowerCase(),j0=ds[0].toUpperCase()+ds.slice(1);xn(L0,"on"+j0)}xn(Yf,"onAnimationEnd");xn(Xf,"onAnimationIteration");xn(Zf,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Jf,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Rc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lh(r,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Rc(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Rc(o,s,u),i=a}}}if(Ii)throw e=Gs,Ii=!1,Gs=null,e}function fe(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(tp(t,e,2,!1),n.add(r))}function fs(e,t,n){var r=0;t&&(r|=4),tp(n,e,r,t)}var ni="_reactListening"+Math.random().toString(36).slice(2);function vo(e){if(!e[ni]){e[ni]=!0,af.forEach(function(n){n!=="selectionchange"&&(F0.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ni]||(t[ni]=!0,fs("selectionchange",!1,t))}}function tp(e,t,n,r){switch(jf(t)){case 1:var o=qh;break;case 4:o=e0;break;default:o=Xa}n=o.bind(null,t,n,e),o=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Rn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ef(function(){var u=i,p=Ka(n),m=[];e:{var f=qf.get(e);if(f!==void 0){var x=Ja,y=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":x=h0;break;case"focusin":y="focus",x=ls;break;case"focusout":y="blur",x=ls;break;case"beforeblur":case"afterblur":x=ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=v0;break;case Yf:case Xf:case Zf:x=l0;break;case Jf:x=w0;break;case"scroll":x=t0;break;case"wheel":x=k0;break;case"copy":case"cut":case"paste":x=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=wc}var g=(t&4)!==0,C=!g&&e==="scroll",d=g?f!==null?f+"Capture":null:f;g=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,d!==null&&(v=fo(c,d),v!=null&&g.push(xo(c,v,h)))),C)break;c=c.return}0<g.length&&(f=new x(f,y,null,n,p),m.push({event:f,listeners:g}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==Ws&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Qt]))break e;if((x||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?Rn(y):null,y!==null&&(C=Wn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(g=vc,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=wc,v="onPointerLeave",d="onPointerEnter",c="pointer"),C=x==null?f:rr(x),h=y==null?f:rr(y),f=new g(v,c+"leave",x,n,p),f.target=C,f.relatedTarget=h,v=null,Rn(p)===u&&(g=new g(d,c+"enter",y,n,p),g.target=h,g.relatedTarget=C,v=g),C=v,x&&y)t:{for(g=x,d=y,c=0,h=g;h;h=Hn(h))c++;for(h=0,v=d;v;v=Hn(v))h++;for(;0<c-h;)g=Hn(g),c--;for(;0<h-c;)d=Hn(d),h--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=Hn(g),d=Hn(d)}g=null}else g=null;x!==null&&Oc(m,f,x,g,!1),y!==null&&C!==null&&Oc(m,C,y,g,!0)}}e:{if(f=u?rr(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var S=z0;else if(Cc(f))if(Wf)S=b0;else{S=O0;var $=R0}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=N0);if(S&&(S=S(e,u))){Vf(m,S,n,p);break e}$&&$(e,f,u),e==="focusout"&&($=f._wrapperState)&&$.controlled&&f.type==="number"&&Fs(f,"number",f.value)}switch($=u?rr(u):window,e){case"focusin":(Cc($)||$.contentEditable==="true")&&(tr=$,Zs=u,no=null);break;case"focusout":no=Zs=tr=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,Tc(m,n,p);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Tc(m,n,p)}var E;if(eu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else er?Bf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Df&&n.locale!=="ko"&&(er||T!=="onCompositionStart"?T==="onCompositionEnd"&&er&&(E=Ff()):(on=p,Za="value"in on?on.value:on.textContent,er=!0)),$=Di(u,T),0<$.length&&(T=new xc(T,e,null,n,p),m.push({event:T,listeners:$}),E?T.data=E:(E=Uf(n),E!==null&&(T.data=E)))),(E=E0?$0(e,n):P0(e,n))&&(u=Di(u,"onBeforeInput"),0<u.length&&(p=new xc("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=E))}ep(m,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Di(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fo(e,n),i!=null&&r.unshift(xo(e,i,o)),i=fo(e,t),i!=null&&r.push(xo(e,i,o))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=fo(n,i),a!=null&&l.unshift(xo(n,a,s))):o||(a=fo(n,i),a!=null&&l.push(xo(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var D0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(D0,`
`).replace(B0,"")}function ri(e,t,n){if(t=Nc(t),Nc(e)!==t&&n)throw Error(P(425))}function Bi(){}var qs=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(e){return bc.resolve(null).then(e).catch(W0)}:na;function W0(e){setTimeout(function(){throw e})}function ms(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ho(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ho(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),It="__reactFiber$"+Or,wo="__reactProps$"+Or,Qt="__reactContainer$"+Or,ra="__reactEvents$"+Or,H0="__reactListeners$"+Or,K0="__reactHandles$"+Or;function Rn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ac(e);e!==null;){if(n=e[It])return n;e=Ac(e)}return t}e=n,n=e.parentNode}return null}function Mo(e){return e=e[It]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function dl(e){return e[wo]||null}var oa=[],or=-1;function wn(e){return{current:e}}function pe(e){0>or||(e.current=oa[or],oa[or]=null,or--)}function de(e,t){or++,oa[or]=e.current,e.current=t}var vn={},He=wn(vn),et=wn(!1),Mn=vn;function wr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function Ui(){pe(et),pe(He)}function Ic(e,t,n){if(He.current!==vn)throw Error(P(168));de(He,t),de(et,n)}function np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Rh(e)||"Unknown",o));return xe({},n,r)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Mn=He.current,de(He,e),de(et,et.current),!0}function Mc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=np(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,pe(et),pe(He),de(He,e)):pe(et),de(et,n)}var Ut=null,fl=!1,hs=!1;function rp(e){Ut===null?Ut=[e]:Ut.push(e)}function G0(e){fl=!0,rp(e)}function Sn(){if(!hs&&Ut!==null){hs=!0;var e=0,t=le;try{var n=Ut;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,fl=!1}catch(o){throw Ut!==null&&(Ut=Ut.slice(e+1)),Tf(Ga,Sn),o}finally{le=t,hs=!1}}return null}var ir=[],lr=0,Wi=null,Hi=0,gt=[],yt=0,Ln=null,Vt=1,Wt="";function Tn(e,t){ir[lr++]=Hi,ir[lr++]=Wi,Wi=e,Hi=t}function op(e,t,n){gt[yt++]=Vt,gt[yt++]=Wt,gt[yt++]=Ln,Ln=e;var r=Vt;e=Wt;var o=32-Tt(r)-1;r&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Vt=1<<32-Tt(t)+o|n<<o|r,Wt=i+e}else Vt=1<<i|n<<o|r,Wt=e}function nu(e){e.return!==null&&(Tn(e,1),op(e,1,0))}function ru(e){for(;e===Wi;)Wi=ir[--lr],ir[lr]=null,Hi=ir[--lr],ir[lr]=null;for(;e===Ln;)Ln=gt[--yt],gt[yt]=null,Wt=gt[--yt],gt[yt]=null,Vt=gt[--yt],gt[yt]=null}var st=null,lt=null,ge=!1,_t=null;function ip(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Vt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(ge){var t=lt;if(t){var n=t;if(!Lc(e,t)){if(ia(e))throw Error(P(418));t=cn(n.nextSibling);var r=st;t&&Lc(e,t)?ip(r,n):(e.flags=e.flags&-4097|2,ge=!1,st=e)}}else{if(ia(e))throw Error(P(418));e.flags=e.flags&-4097|2,ge=!1,st=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function oi(e){if(e!==st)return!1;if(!ge)return jc(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=lt)){if(ia(e))throw lp(),Error(P(418));for(;t;)ip(e,t),t=cn(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?cn(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=lt;e;)e=cn(e.nextSibling)}function Sr(){lt=st=null,ge=!1}function ou(e){_t===null?_t=[e]:_t.push(e)}var Q0=Zt.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ki=wn(null),Gi=null,sr=null,iu=null;function lu(){iu=sr=Gi=null}function su(e){var t=Ki.current;pe(Ki),e._currentValue=t}function sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){Gi=e,iu=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qe=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Gi===null)throw Error(P(308));sr=e,Gi.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var On=null;function au(e){On===null?On=[e]:On.push(e)}function sp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,au(t)):(n.next=o.next,o.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Yt(e,n)}return o=r.interleaved,o===null?(t.next=t,au(r)):(t.next=o.next,o.next=t),r.interleaved=t,Yt(e,n)}function wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var o=e.updateQueue;tn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,p=u=a=null,s=i;do{var f=s.lane,x=s.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,g=s;switch(f=t,x=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){m=y.call(x,m,f);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,f=typeof y=="function"?y.call(x,m,f):y,f==null)break e;m=xe({},m,f);break e;case 2:tn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=x,a=m):p=p.next=x,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(p===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=m}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var up=new sf.Component().refs;function aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=pn(e),i=Ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(zt(t,e,o,r),wi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=pn(e),i=Ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(zt(t,e,o,r),wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=pn(e),o=Ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,r),t!==null&&(zt(t,e,r,n),wi(t,e,r))}};function Bc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(o,i):!0}function cp(e,t,n){var r=!1,o=vn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=tt(t)?Mn:He.current,r=t.contextTypes,i=(r=r!=null)?wr(e,o):vn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=up,uu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=tt(t)?Mn:He.current,o.context=wr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(aa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&pl.enqueueReplaceState(o,o.state,null),Qi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===up&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function dp(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=mn(d,c),d.index=0,d.sibling=null,d}function i(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,h,v){return c===null||c.tag!==6?(c=ks(h,d.mode,v),c.return=d,c):(c=o(c,h),c.return=d,c)}function a(d,c,h,v){var S=h.type;return S===qn?p(d,c,h.props.children,v,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===en&&Vc(S)===c.type)?(v=o(c,h.props),v.ref=Dr(d,c,h),v.return=d,v):(v=Pi(h.type,h.key,h.props,null,d.mode,v),v.ref=Dr(d,c,h),v.return=d,v)}function u(d,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Cs(h,d.mode,v),c.return=d,c):(c=o(c,h.children||[]),c.return=d,c)}function p(d,c,h,v,S){return c===null||c.tag!==7?(c=In(h,d.mode,v,S),c.return=d,c):(c=o(c,h),c.return=d,c)}function m(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ks(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qo:return h=Pi(c.type,c.key,c.props,null,d.mode,h),h.ref=Dr(d,null,c),h.return=d,h;case Jn:return c=Cs(c,d.mode,h),c.return=d,c;case en:var v=c._init;return m(d,v(c._payload),h)}if(Gr(c)||Ir(c))return c=In(c,d.mode,h,null),c.return=d,c;ii(d,c)}return null}function f(d,c,h,v){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(d,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qo:return h.key===S?a(d,c,h,v):null;case Jn:return h.key===S?u(d,c,h,v):null;case en:return S=h._init,f(d,c,S(h._payload),v)}if(Gr(h)||Ir(h))return S!==null?null:p(d,c,h,v,null);ii(d,h)}return null}function x(d,c,h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(h)||null,s(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return d=d.get(v.key===null?h:v.key)||null,a(c,d,v,S);case Jn:return d=d.get(v.key===null?h:v.key)||null,u(c,d,v,S);case en:var $=v._init;return x(d,c,h,$(v._payload),S)}if(Gr(v)||Ir(v))return d=d.get(h)||null,p(c,d,v,S,null);ii(c,v)}return null}function y(d,c,h,v){for(var S=null,$=null,E=c,T=c=0,L=null;E!==null&&T<h.length;T++){E.index>T?(L=E,E=null):L=E.sibling;var z=f(d,E,h[T],v);if(z===null){E===null&&(E=L);break}e&&E&&z.alternate===null&&t(d,E),c=i(z,c,T),$===null?S=z:$.sibling=z,$=z,E=L}if(T===h.length)return n(d,E),ge&&Tn(d,T),S;if(E===null){for(;T<h.length;T++)E=m(d,h[T],v),E!==null&&(c=i(E,c,T),$===null?S=E:$.sibling=E,$=E);return ge&&Tn(d,T),S}for(E=r(d,E);T<h.length;T++)L=x(E,d,T,h[T],v),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?T:L.key),c=i(L,c,T),$===null?S=L:$.sibling=L,$=L);return e&&E.forEach(function(H){return t(d,H)}),ge&&Tn(d,T),S}function g(d,c,h,v){var S=Ir(h);if(typeof S!="function")throw Error(P(150));if(h=S.call(h),h==null)throw Error(P(151));for(var $=S=null,E=c,T=c=0,L=null,z=h.next();E!==null&&!z.done;T++,z=h.next()){E.index>T?(L=E,E=null):L=E.sibling;var H=f(d,E,z.value,v);if(H===null){E===null&&(E=L);break}e&&E&&H.alternate===null&&t(d,E),c=i(H,c,T),$===null?S=H:$.sibling=H,$=H,E=L}if(z.done)return n(d,E),ge&&Tn(d,T),S;if(E===null){for(;!z.done;T++,z=h.next())z=m(d,z.value,v),z!==null&&(c=i(z,c,T),$===null?S=z:$.sibling=z,$=z);return ge&&Tn(d,T),S}for(E=r(d,E);!z.done;T++,z=h.next())z=x(E,d,T,z.value,v),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?T:z.key),c=i(z,c,T),$===null?S=z:$.sibling=z,$=z);return e&&E.forEach(function(K){return t(d,K)}),ge&&Tn(d,T),S}function C(d,c,h,v){if(typeof h=="object"&&h!==null&&h.type===qn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qo:e:{for(var S=h.key,$=c;$!==null;){if($.key===S){if(S=h.type,S===qn){if($.tag===7){n(d,$.sibling),c=o($,h.props.children),c.return=d,d=c;break e}}else if($.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===en&&Vc(S)===$.type){n(d,$.sibling),c=o($,h.props),c.ref=Dr(d,$,h),c.return=d,d=c;break e}n(d,$);break}else t(d,$);$=$.sibling}h.type===qn?(c=In(h.props.children,d.mode,v,h.key),c.return=d,d=c):(v=Pi(h.type,h.key,h.props,null,d.mode,v),v.ref=Dr(d,c,h),v.return=d,d=v)}return l(d);case Jn:e:{for($=h.key;c!==null;){if(c.key===$)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=o(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Cs(h,d.mode,v),c.return=d,d=c}return l(d);case en:return $=h._init,C(d,c,$(h._payload),v)}if(Gr(h))return y(d,c,h,v);if(Ir(h))return g(d,c,h,v);ii(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,h),c.return=d,d=c):(n(d,c),c=ks(h,d.mode,v),c.return=d,d=c),l(d)):n(d,c)}return C}var kr=dp(!0),fp=dp(!1),Lo={},jt=wn(Lo),So=wn(Lo),ko=wn(Lo);function Nn(e){if(e===Lo)throw Error(P(174));return e}function cu(e,t){switch(de(ko,t),de(So,e),de(jt,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bs(t,e)}pe(jt),de(jt,t)}function Cr(){pe(jt),pe(So),pe(ko)}function pp(e){Nn(ko.current);var t=Nn(jt.current),n=Bs(t,e.type);t!==n&&(de(So,e),de(jt,n))}function du(e){So.current===e&&(pe(jt),pe(So))}var ye=wn(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gs=[];function fu(){for(var e=0;e<gs.length;e++)gs[e]._workInProgressVersionPrimary=null;gs.length=0}var Si=Zt.ReactCurrentDispatcher,ys=Zt.ReactCurrentBatchConfig,jn=0,ve=null,ze=null,Ne=null,Xi=!1,ro=!1,Co=0,Y0=0;function Be(){throw Error(P(321))}function pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function mu(e,t,n,r,o,i){if(jn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?q0:e1,e=n(r,o),ro){i=0;do{if(ro=!1,Co=0,25<=i)throw Error(P(301));i+=1,Ne=ze=null,t.updateQueue=null,Si.current=t1,e=n(r,o)}while(ro)}if(Si.current=Zi,t=ze!==null&&ze.next!==null,jn=0,Ne=ze=ve=null,Xi=!1,t)throw Error(P(300));return e}function hu(){var e=Co!==0;return Co=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ve.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function St(){if(ze===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ne===null?ve.memoizedState:Ne.next;if(t!==null)Ne=t,ze=e;else{if(e===null)throw Error(P(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ne===null?ve.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Eo(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=St(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((jn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,ve.lanes|=p,Fn|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Rt(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,Fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xs(e){var t=St(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Rt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mp(){}function hp(e,t){var n=ve,r=St(),o=t(),i=!Rt(r.memoizedState,o);if(i&&(r.memoizedState=o,qe=!0),r=r.queue,gu(vp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,$o(9,yp.bind(null,n,r,o,t),void 0,null),Ae===null)throw Error(P(349));(jn&30)!==0||gp(n,t,o)}return o}function gp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yp(e,t,n,r){t.value=n,t.getSnapshot=r,xp(t)&&wp(e)}function vp(e,t,n){return n(function(){xp(t)&&wp(e)})}function xp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function wp(e){var t=Yt(e,1);t!==null&&zt(t,e,1,-1)}function Wc(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},t.queue=e,e=e.dispatch=J0.bind(null,ve,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sp(){return St().memoizedState}function ki(e,t,n,r){var o=Nt();ve.flags|=e,o.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function ml(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(ze!==null){var l=ze.memoizedState;if(i=l.destroy,r!==null&&pu(r,l.deps)){o.memoizedState=$o(t,n,i,r);return}}ve.flags|=e,o.memoizedState=$o(1|t,n,i,r)}function Hc(e,t){return ki(8390656,8,e,t)}function gu(e,t){return ml(2048,8,e,t)}function kp(e,t){return ml(4,2,e,t)}function Cp(e,t){return ml(4,4,e,t)}function Ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $p(e,t,n){return n=n!=null?n.concat([e]):null,ml(4,4,Ep.bind(null,t,e),n)}function yu(){}function Pp(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tp(e,t,n){return(jn&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n):(Rt(n,t)||(n=Of(),ve.lanes|=n,Fn|=n,e.baseState=!0),t)}function X0(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{le=n,ys.transition=r}}function zp(){return St().memoizedState}function Z0(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rp(e))Op(t,n);else if(n=sp(e,t,n,r),n!==null){var o=Ge();zt(n,e,r,o),Np(n,t,r)}}function J0(e,t,n){var r=pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rp(e))Op(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Rt(s,l)){var a=t.interleaved;a===null?(o.next=o,au(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=sp(e,t,o,r),n!==null&&(o=Ge(),zt(n,e,r,o),Np(n,t,r))}}function Rp(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Op(e,t){ro=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var Zi={readContext:wt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},q0={readContext:wt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,Ep.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z0.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Wc,useDebugValue:yu,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Wc(!1),t=e[0];return e=X0.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=Nt();if(ge){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ae===null)throw Error(P(349));(jn&30)!==0||gp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Hc(vp.bind(null,r,i,e),[e]),r.flags|=2048,$o(9,yp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Ae.identifierPrefix;if(ge){var n=Wt,r=Vt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Y0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e1={readContext:wt,useCallback:Pp,useContext:wt,useEffect:gu,useImperativeHandle:$p,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:_p,useReducer:vs,useRef:Sp,useState:function(){return vs(Eo)},useDebugValue:yu,useDeferredValue:function(e){var t=St();return Tp(t,ze.memoizedState,e)},useTransition:function(){var e=vs(Eo)[0],t=St().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:hp,useId:zp,unstable_isNewReconciler:!1},t1={readContext:wt,useCallback:Pp,useContext:wt,useEffect:gu,useImperativeHandle:$p,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:_p,useReducer:xs,useRef:Sp,useState:function(){return xs(Eo)},useDebugValue:yu,useDeferredValue:function(e){var t=St();return ze===null?t.memoizedState=e:Tp(t,ze.memoizedState,e)},useTransition:function(){var e=xs(Eo)[0],t=St().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:hp,useId:zp,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=zh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function bp(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,wa=r),ca(e,t)},n}function Ap(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ca(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Kc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=g1.bind(null,e,t,n),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var r1=Zt.ReactCurrentOwner,qe=!1;function Ke(e,t,n,r){t.child=e===null?fp(t,null,n,r):kr(t,e.child,n,r)}function Yc(e,t,n,r,o){n=n.render;var i=t.ref;return hr(t,o),r=mu(e,t,n,r,i,o),n=hu(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xt(e,t,o)):(ge&&n&&nu(t),t.flags|=1,Ke(e,t,r,o),t.child)}function Xc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!$u(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ip(e,t,i,r,o)):(e=Pi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(l,r)&&e.ref===t.ref)return Xt(e,t,o)}return t.flags|=1,e=mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ip(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(yo(i,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Xt(e,t,o)}return da(e,t,n,r,o)}function Mp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ur,it),it|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(ur,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(ur,it),it|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(ur,it),it|=r;return Ke(e,t,o,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function da(e,t,n,r,o){var i=tt(n)?Mn:He.current;return i=wr(t,i),hr(t,o),n=mu(e,t,n,r,i,o),r=hu(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xt(e,t,o)):(ge&&r&&nu(t),t.flags|=1,Ke(e,t,n,o),t.child)}function Zc(e,t,n,r,o){if(tt(n)){var i=!0;Vi(t)}else i=!1;if(hr(t,o),t.stateNode===null)Ci(e,t),cp(t,n,r),ua(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=tt(n)?Mn:He.current,u=wr(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Uc(t,l,r,u),tn=!1;var f=t.memoizedState;l.state=f,Qi(t,r,l,o),a=t.memoizedState,s!==r||f!==a||et.current||tn?(typeof p=="function"&&(aa(t,n,p,r),a=t.memoizedState),(s=tn||Bc(t,n,s,r,f,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ap(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:$t(t.type,s),l.props=u,m=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=wt(a):(a=tt(n)?Mn:He.current,a=wr(t,a));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||f!==a)&&Uc(t,l,r,a),tn=!1,f=t.memoizedState,l.state=f,Qi(t,r,l,o);var y=t.memoizedState;s!==m||f!==y||et.current||tn?(typeof x=="function"&&(aa(t,n,x,r),y=t.memoizedState),(u=tn||Bc(t,n,u,r,f,y,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return fa(e,t,n,r,i,o)}function fa(e,t,n,r,o,i){Lp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Mc(t,n,!1),Xt(e,t,i);r=t.stateNode,r1.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kr(t,e.child,null,i),t.child=kr(t,null,s,i)):Ke(e,t,s,i),t.memoizedState=r.state,o&&Mc(t,n,!0),t.child}function jp(e){var t=e.stateNode;t.pendingContext?Ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ic(e,t.context,!1),cu(e,t.containerInfo)}function Jc(e,t,n,r,o){return Sr(),ou(o),t.flags|=256,Ke(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var r=t.pendingProps,o=ye.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(ye,o&1),e===null)return la(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=yl(l,r,0,null),e=In(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ma(n),t.memoizedState=pa,e):vu(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return o1(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=mn(s,i):(i=In(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ma(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=pa,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vu(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function li(e,t,n,r){return r!==null&&ou(r),kr(t,e.child,null,n),e=vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ws(Error(P(422))),li(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=yl({mode:"visible",children:r.children},o,0,null),i=In(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&kr(t,e.child,null,l),t.child.memoizedState=ma(l),t.memoizedState=pa,i);if((t.mode&1)===0)return li(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=ws(i,r,void 0),li(e,t,l,r)}if(s=(l&e.childLanes)!==0,qe||s){if(r=Ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Yt(e,o),zt(r,e,o,-1))}return Eu(),r=ws(Error(P(421))),li(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=y1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,lt=cn(o.nextSibling),st=t,ge=!0,_t=null,e!==null&&(gt[yt++]=Vt,gt[yt++]=Wt,gt[yt++]=Ln,Vt=e.id,Wt=e.overflow,Ln=t),t=vu(t,r.children),t.flags|=4096,t)}function qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sa(e.return,t,n)}function Ss(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Dp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ke(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,n,t);else if(e.tag===19)qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ss(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ss(t,!0,n,null,i);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i1(e,t,n){switch(t.tag){case 3:jp(t),Sr();break;case 5:pp(t);break;case 1:tt(t.type)&&Vi(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;de(Ki,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Fp(e,t,n):(de(ye,ye.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Dp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return Xt(e,t,n)}var Bp,ha,Up,Vp;Bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ha=function(){};Up=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn(jt.current);var i=null;switch(n){case"input":o=Ls(e,o),r=Ls(e,r),i=[];break;case"select":o=xe({},o,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":o=Ds(e,o),r=Ds(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bi)}Us(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&fe("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function l1(e,t,n){var r=t.pendingProps;switch(ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return tt(t.type)&&Ui(),Ue(t),null;case 3:return r=t.stateNode,Cr(),pe(et),pe(He),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(Ca(_t),_t=null))),ha(e,t),Ue(t),null;case 5:du(t);var o=Nn(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ue(t),null}if(e=Nn(jt.current),oi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[wo]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(o=0;o<Yr.length;o++)fe(Yr[o],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ac(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":cc(r,i),fe("invalid",r)}Us(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ri(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ri(r.textContent,s,e),o=["children",""+s]):uo.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&fe("scroll",r)}switch(n){case"input":Yo(r),uc(r,i,!0);break;case"textarea":Yo(r),dc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[wo]=r,Bp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vs(n,r),n){case"dialog":fe("cancel",e),fe("close",e),o=r;break;case"iframe":case"object":case"embed":fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yr.length;o++)fe(Yr[o],e);o=r;break;case"source":fe("error",e),o=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=r;break;case"details":fe("toggle",e),o=r;break;case"input":ac(e,r),o=Ls(e,r),fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=xe({},r,{value:void 0}),fe("invalid",e);break;case"textarea":cc(e,r),o=Ds(e,r),fe("invalid",e);break;default:o=r}Us(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?xf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&yf(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&co(e,a):typeof a=="number"&&co(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&fe("scroll",e):a!=null&&Ua(e,i,a,l))}switch(n){case"input":Yo(e),uc(e,r,!1);break;case"textarea":Yo(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dr(e,!!r.multiple,i,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Nn(ko.current),Nn(jt.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ri(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ue(t),null;case 13:if(pe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lp(),Sr(),t.flags|=98560,i=!1;else if(i=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[It]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),i=!1}else _t!==null&&(Ca(_t),_t=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Re===0&&(Re=3):Eu())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Cr(),ha(e,t),e===null&&vo(t.stateNode.containerInfo),Ue(t),null;case 10:return su(t.type._context),Ue(t),null;case 17:return tt(t.type)&&Ui(),Ue(t),null;case 19:if(pe(ye),i=t.memoizedState,i===null)return Ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Br(i,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Yi(e),l!==null){for(t.flags|=128,Br(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ce()>$r&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ge)return Ue(t),null}else 2*Ce()-i.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ce(),t.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(it&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function s1(e,t){switch(ru(t),t.tag){case 1:return tt(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),pe(et),pe(He),fu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return du(t),null;case 13:if(pe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ye),null;case 4:return Cr(),null;case 10:return su(t.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var si=!1,We=!1,a1=typeof WeakSet=="function"?WeakSet:Set,I=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function ga(e,t,n){try{n()}catch(r){we(e,t,r)}}var ed=!1;function u1(e,t){if(qs=ji,e=Gf(),tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,m=e,f=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)f=m,m=x;for(;;){if(m===e)break t;if(f===n&&++u===o&&(s=l),f===i&&++p===r&&(a=l),(x=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},ji=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,C=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:$t(t.type,g),C);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){we(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=ed,ed=!1,y}function oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ga(t,n,i)}o=o.next}while(o!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[wo],delete t[ra],delete t[H0],delete t[K0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hp(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bi));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}var Le=null,Pt=!1;function qt(e,t,n){for(n=n.child;n!==null;)Kp(e,t,n),n=n.sibling}function Kp(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:We||ar(n,t);case 6:var r=Le,o=Pt;Le=null,qt(e,t,n),Le=r,Pt=o,Le!==null&&(Pt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Pt?(e=Le,n=n.stateNode,e.nodeType===8?ms(e.parentNode,n):e.nodeType===1&&ms(e,n),ho(e)):ms(Le,n.stateNode));break;case 4:r=Le,o=Pt,Le=n.stateNode.containerInfo,Pt=!0,qt(e,t,n),Le=r,Pt=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&ga(n,t,l),o=o.next}while(o!==r)}qt(e,t,n);break;case 1:if(!We&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,qt(e,t,n),We=r):qt(e,t,n);break;default:qt(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a1),t.forEach(function(r){var o=v1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Le=s.stateNode,Pt=!1;break e;case 3:Le=s.stateNode.containerInfo,Pt=!0;break e;case 4:Le=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if(Le===null)throw Error(P(160));Kp(i,l,o),Le=null,Pt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Ot(e),r&4){try{oo(3,e,e.return),hl(3,e)}catch(g){we(e,e.return,g)}try{oo(5,e,e.return)}catch(g){we(e,e.return,g)}}break;case 1:Et(t,e),Ot(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(Et(t,e),Ot(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{co(o,"")}catch(g){we(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&mf(o,i),Vs(s,l);var u=Vs(s,i);for(l=0;l<a.length;l+=2){var p=a[l],m=a[l+1];p==="style"?xf(o,m):p==="dangerouslySetInnerHTML"?yf(o,m):p==="children"?co(o,m):Ua(o,p,m,u)}switch(s){case"input":js(o,i);break;case"textarea":hf(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?dr(o,!!i.multiple,x,!1):f!==!!i.multiple&&(i.defaultValue!=null?dr(o,!!i.multiple,i.defaultValue,!0):dr(o,!!i.multiple,i.multiple?[]:"",!1))}o[wo]=i}catch(g){we(e,e.return,g)}}break;case 6:if(Et(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){we(e,e.return,g)}}break;case 3:if(Et(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(t.containerInfo)}catch(g){we(e,e.return,g)}break;case 4:Et(t,e),Ot(e);break;case 13:Et(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Su=Ce())),r&4&&nd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||p,Et(t,e),We=u):Et(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(I=e,p=e.child;p!==null;){for(m=I=p;I!==null;){switch(f=I,x=f.child,f.tag){case 0:case 11:case 14:case 15:oo(4,f,f.return);break;case 1:ar(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){we(r,n,g)}}break;case 5:ar(f,f.return);break;case 22:if(f.memoizedState!==null){od(m);continue}}x!==null?(x.return=f,I=x):od(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=vf("display",l))}catch(g){we(e,e.return,g)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){we(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Et(t,e),Ot(e),r&4&&nd(e);break;case 21:break;default:Et(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(co(o,""),r.flags&=-33);var i=td(e);xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=td(e);va(e,s,l);break;default:throw Error(P(161))}}catch(a){we(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c1(e,t,n){I=e,Qp(e)}function Qp(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||si;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||We;s=si;var u=We;if(si=l,(We=a)&&!u)for(I=o;I!==null;)l=I,a=l.child,l.tag===22&&l.memoizedState!==null?id(o):a!==null?(a.return=l,I=a):id(o);for(;i!==null;)I=i,Qp(i),i=i.sibling;I=o,si=s,We=u}rd(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,I=i):rd(e)}}function rd(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:We||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&ho(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}We||t.flags&512&&ya(t)}catch(f){we(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function od(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function id(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(a){we(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){we(t,o,a)}}var i=t.return;try{ya(t)}catch(a){we(t,i,a)}break;case 5:var l=t.return;try{ya(t)}catch(a){we(t,l,a)}}}catch(a){we(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var d1=Math.ceil,Ji=Zt.ReactCurrentDispatcher,xu=Zt.ReactCurrentOwner,xt=Zt.ReactCurrentBatchConfig,Z=0,Ae=null,$e=null,je=0,it=0,ur=wn(0),Re=0,Po=null,Fn=0,gl=0,wu=0,io=null,Je=null,Su=0,$r=1/0,Bt=null,qi=!1,wa=null,fn=null,ai=!1,ln=null,el=0,lo=0,Sa=null,Ei=-1,$i=0;function Ge(){return(Z&6)!==0?Ce():Ei!==-1?Ei:Ei=Ce()}function pn(e){return(e.mode&1)===0?1:(Z&2)!==0&&je!==0?je&-je:Q0.transition!==null?($i===0&&($i=Of()),$i):(e=le,e!==0||(e=window.event,e=e===void 0?16:jf(e.type)),e)}function zt(e,t,n,r){if(50<lo)throw lo=0,Sa=null,Error(P(185));Ao(e,n,r),((Z&2)===0||e!==Ae)&&(e===Ae&&((Z&2)===0&&(gl|=n),Re===4&&rn(e,je)),nt(e,r),n===1&&Z===0&&(t.mode&1)===0&&($r=Ce()+500,fl&&Sn()))}function nt(e,t){var n=e.callbackNode;Qh(e,t);var r=Li(e,e===Ae?je:0);if(r===0)n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mc(n),t===1)e.tag===0?G0(ld.bind(null,e)):rp(ld.bind(null,e)),V0(function(){(Z&6)===0&&Sn()}),n=null;else{switch(Nf(r)){case 1:n=Ga;break;case 4:n=zf;break;case 16:n=Mi;break;case 536870912:n=Rf;break;default:n=Mi}n=nm(n,Yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yp(e,t){if(Ei=-1,$i=0,(Z&6)!==0)throw Error(P(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Li(e,e===Ae?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=tl(e,r);else{t=r;var o=Z;Z|=2;var i=Zp();(Ae!==e||je!==t)&&(Bt=null,$r=Ce()+500,An(e,t));do try{m1();break}catch(s){Xp(e,s)}while(1);lu(),Ji.current=i,Z=o,$e!==null?t=0:(Ae=null,je=0,t=Re)}if(t!==0){if(t===2&&(o=Qs(e),o!==0&&(r=o,t=ka(e,o))),t===1)throw n=Po,An(e,0),rn(e,r),nt(e,Ce()),n;if(t===6)rn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!f1(o)&&(t=tl(e,r),t===2&&(i=Qs(e),i!==0&&(r=i,t=ka(e,i))),t===1))throw n=Po,An(e,0),rn(e,r),nt(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:zn(e,Je,Bt);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=Su+500-Ce(),10<t)){if(Li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=na(zn.bind(null,e,Je,Bt),t);break}zn(e,Je,Bt);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){e.timeoutHandle=na(zn.bind(null,e,Je,Bt),r);break}zn(e,Je,Bt);break;case 5:zn(e,Je,Bt);break;default:throw Error(P(329))}}}return nt(e,Ce()),e.callbackNode===n?Yp.bind(null,e):null}function ka(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=tl(e,t),e!==2&&(t=Je,Je=n,t!==null&&Ca(t)),e}function Ca(e){Je===null?Je=e:Je.push.apply(Je,e)}function f1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~wu,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function ld(e){if((Z&6)!==0)throw Error(P(327));gr();var t=Li(e,0);if((t&1)===0)return nt(e,Ce()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=ka(e,r))}if(n===1)throw n=Po,An(e,0),rn(e,t),nt(e,Ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Je,Bt),nt(e,Ce()),null}function ku(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&($r=Ce()+500,fl&&Sn())}}function Dn(e){ln!==null&&ln.tag===0&&(Z&6)===0&&gr();var t=Z;Z|=1;var n=xt.transition,r=le;try{if(xt.transition=null,le=1,e)return e()}finally{le=r,xt.transition=n,Z=t,(Z&6)===0&&Sn()}}function Cu(){it=ur.current,pe(ur)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U0(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:Cr(),pe(et),pe(He),fu();break;case 5:du(r);break;case 4:Cr();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:su(r.type._context);break;case 22:case 23:Cu()}n=n.return}if(Ae=e,$e=e=mn(e.current,null),je=it=t,Re=0,Po=null,wu=gl=Fn=0,Je=io=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}On=null}return e}function Xp(e,t){do{var n=$e;try{if(lu(),Si.current=Zi,Xi){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Xi=!1}if(jn=0,Ne=ze=ve=null,ro=!1,Co=0,xu.current=null,n===null||n.return===null){Re=1,Po=t,$e=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=je,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Gc(l);if(x!==null){x.flags&=-257,Qc(x,l,s,i,t),x.mode&1&&Kc(i,u,t),t=x,a=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(a),t.updateQueue=g}else y.add(a);break e}else{if((t&1)===0){Kc(i,u,t),Eu();break e}a=Error(P(426))}}else if(ge&&s.mode&1){var C=Gc(l);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),Qc(C,l,s,i,t),ou(Er(a,s));break e}}i=a=Er(a,s),Re!==4&&(Re=2),io===null?io=[i]:io.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=bp(i,a,t);Fc(i,d);break e;case 1:s=a;var c=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fn===null||!fn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ap(i,s,t);Fc(i,v);break e}}i=i.return}while(i!==null)}qp(n)}catch(S){t=S,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Zp(){var e=Ji.current;return Ji.current=Zi,e===null?Zi:e}function Eu(){(Re===0||Re===3||Re===2)&&(Re=4),Ae===null||(Fn&268435455)===0&&(gl&268435455)===0||rn(Ae,je)}function tl(e,t){var n=Z;Z|=2;var r=Zp();(Ae!==e||je!==t)&&(Bt=null,An(e,t));do try{p1();break}catch(o){Xp(e,o)}while(1);if(lu(),Z=n,Ji.current=r,$e!==null)throw Error(P(261));return Ae=null,je=0,Re}function p1(){for(;$e!==null;)Jp($e)}function m1(){for(;$e!==null&&!Fh();)Jp($e)}function Jp(e){var t=tm(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?qp(e):$e=t,xu.current=null}function qp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=l1(n,t,it),n!==null){$e=n;return}}else{if(n=s1(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Re===0&&(Re=5)}function zn(e,t,n){var r=le,o=xt.transition;try{xt.transition=null,le=1,h1(e,t,n,r)}finally{xt.transition=o,le=r}return null}function h1(e,t,n,r){do gr();while(ln!==null);if((Z&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Yh(e,i),e===Ae&&($e=Ae=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ai||(ai=!0,nm(Mi,function(){return gr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var l=le;le=1;var s=Z;Z|=4,xu.current=null,u1(e,n),Gp(n,e),I0(ea),ji=!!qs,ea=qs=null,e.current=n,c1(n),Dh(),Z=s,le=l,xt.transition=i}else e.current=n;if(ai&&(ai=!1,ln=e,el=o),i=e.pendingLanes,i===0&&(fn=null),Vh(n.stateNode),nt(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qi)throw qi=!1,e=wa,wa=null,e;return(el&1)!==0&&e.tag!==0&&gr(),i=e.pendingLanes,(i&1)!==0?e===Sa?lo++:(lo=0,Sa=e):lo=0,Sn(),null}function gr(){if(ln!==null){var e=Nf(el),t=xt.transition,n=le;try{if(xt.transition=null,le=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,el=0,(Z&6)!==0)throw Error(P(331));var o=Z;for(Z|=4,I=e.current;I!==null;){var i=I,l=i.child;if((I.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:oo(8,p,i)}var m=p.child;if(m!==null)m.return=p,I=m;else for(;I!==null;){p=I;var f=p.sibling,x=p.return;if(Wp(p),p===u){I=null;break}if(f!==null){f.return=x,I=f;break}I=x}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var C=g.sibling;g.sibling=null,g=C}while(g!==null)}}I=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,I=d;break e}I=i.return}}var c=e.current;for(I=c;I!==null;){l=I;var h=l.child;if((l.subtreeFlags&2064)!==0&&h!==null)h.return=l,I=h;else e:for(l=c;I!==null;){if(s=I,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(S){we(s,s.return,S)}if(s===l){I=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,I=v;break e}I=s.return}}if(Z=o,Sn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{le=n,xt.transition=t}}return!1}function sd(e,t,n){t=Er(n,t),t=bp(e,t,1),e=dn(e,t,1),t=Ge(),e!==null&&(Ao(e,1,t),nt(e,t))}function we(e,t,n){if(e.tag===3)sd(e,e,n);else for(;t!==null;){if(t.tag===3){sd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Er(n,e),e=Ap(t,e,1),t=dn(t,e,1),e=Ge(),t!==null&&(Ao(t,1,e),nt(t,e));break}}t=t.return}}function g1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(je&n)===n&&(Re===4||Re===3&&(je&130023424)===je&&500>Ce()-Su?An(e,0):wu|=n),nt(e,t)}function em(e,t){t===0&&((e.mode&1)===0?t=1:(t=Jo,Jo<<=1,(Jo&130023424)===0&&(Jo=4194304)));var n=Ge();e=Yt(e,t),e!==null&&(Ao(e,t,n),nt(e,n))}function y1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),em(e,n)}function v1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),em(e,n)}var tm;tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return qe=!1,i1(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,ge&&(t.flags&1048576)!==0&&op(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ci(e,t),e=t.pendingProps;var o=wr(t,He.current);hr(t,n),o=mu(null,t,r,e,o,n);var i=hu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,Vi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,uu(t),o.updater=pl,t.stateNode=o,o._reactInternals=t,ua(t,r,e,n),t=fa(null,t,r,!0,i,n)):(t.tag=0,ge&&i&&nu(t),Ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=w1(r),e=$t(r,e),o){case 0:t=da(null,t,r,e,n);break e;case 1:t=Zc(null,t,r,e,n);break e;case 11:t=Yc(null,t,r,e,n);break e;case 14:t=Xc(null,t,r,$t(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),da(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Zc(e,t,r,o,n);case 3:e:{if(jp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ap(e,t),Qi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Er(Error(P(423)),t),t=Jc(e,t,r,n,o);break e}else if(r!==o){o=Er(Error(P(424)),t),t=Jc(e,t,r,n,o);break e}else for(lt=cn(t.stateNode.containerInfo.firstChild),st=t,ge=!0,_t=null,n=fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===o){t=Xt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return pp(t),e===null&&la(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ta(r,o)?l=null:i!==null&&ta(r,i)&&(t.flags|=32),Lp(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&la(t),null;case 13:return Fp(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Yc(e,t,r,o,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,de(Ki,r._currentValue),r._currentValue=l,i!==null)if(Rt(i.value,l)){if(i.children===o.children&&!et.current){t=Xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ht(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),sa(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),sa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hr(t,n),o=wt(o),r=r(o),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,o=$t(r,t.pendingProps),o=$t(r.type,o),Xc(e,t,r,o,n);case 15:return Ip(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Ci(e,t),t.tag=1,tt(r)?(e=!0,Vi(t)):e=!1,hr(t,n),cp(t,r,o),ua(t,r,o,n),fa(null,t,r,!0,e,n);case 19:return Dp(e,t,n);case 22:return Mp(e,t,n)}throw Error(P(156,t.tag))};function nm(e,t){return Tf(e,t)}function x1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new x1(e,t,n,r)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w1(e){if(typeof e=="function")return $u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wa)return 11;if(e===Ha)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")$u(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qn:return In(n.children,o,i,t);case Va:l=8,o|=8;break;case bs:return e=vt(12,n,t,o|2),e.elementType=bs,e.lanes=i,e;case As:return e=vt(13,n,t,o),e.elementType=As,e.lanes=i,e;case Is:return e=vt(19,n,t,o),e.elementType=Is,e.lanes=i,e;case df:return yl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:l=10;break e;case cf:l=9;break e;case Wa:l=11;break e;case Ha:l=14;break e;case en:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=vt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function In(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function yl(e,t,n,r){return e=vt(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function ks(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rs(0),this.expirationTimes=rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Pu(e,t,n,r,o,i,l,s,a){return e=new S1(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=vt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(i),e}function k1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rm(e){if(!e)return vn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(tt(n))return np(e,n,t)}return t}function om(e,t,n,r,o,i,l,s,a){return e=Pu(n,r,!0,e,o,i,l,s,a),e.context=rm(null),n=e.current,r=Ge(),o=pn(n),i=Ht(r,o),i.callback=t!=null?t:null,dn(n,i,o),e.current.lanes=o,Ao(e,o,r),nt(e,r),e}function vl(e,t,n,r){var o=t.current,i=Ge(),l=pn(o);return n=rm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(o,t,l),e!==null&&(zt(e,o,l,i),wi(e,o,l)),l}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _u(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function C1(){return null}var im=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tu(e){this._internalRoot=e}xl.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));vl(e,t,null,null)};xl.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){vl(null,e,null,null)}),t[Qt]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=If();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&Lf(e)}};function zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function E1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=nl(l);i.call(u)}}var l=om(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=l,e[Qt]=l.current,vo(e.nodeType===8?e.parentNode:e),Dn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=nl(a);s.call(u)}}var a=Pu(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=a,e[Qt]=a.current,vo(e.nodeType===8?e.parentNode:e),Dn(function(){vl(t,a,n,r)}),a}function Sl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=nl(l);s.call(a)}}vl(t,l,e,o)}else l=E1(n,t,e,o,r);return nl(l)}bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Qa(t,n|1),nt(t,Ce()),(Z&6)===0&&($r=Ce()+500,Sn()))}break;case 13:Dn(function(){var r=Yt(e,1);if(r!==null){var o=Ge();zt(r,e,1,o)}}),_u(e,1)}};Ya=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ge();zt(t,e,134217728,n)}_u(e,134217728)}};Af=function(e){if(e.tag===13){var t=pn(e),n=Yt(e,t);if(n!==null){var r=Ge();zt(n,e,t,r)}_u(e,t)}};If=function(){return le};Mf=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};Hs=function(e,t,n){switch(t){case"input":if(js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=dl(r);if(!o)throw Error(P(90));pf(r),js(r,o)}}}break;case"textarea":hf(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};kf=ku;Cf=Dn;var $1={usingClientEntryPoint:!1,Events:[Mo,rr,dl,wf,Sf,ku]},Ur={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},P1={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{sl=ui.inject(P1),Lt=ui}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(t))throw Error(P(200));return k1(e,t,null,n)};dt.createRoot=function(e,t){if(!zu(e))throw Error(P(299));var n=!1,r="",o=im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pu(e,1,!1,null,null,n,!1,r,o),e[Qt]=t.current,vo(e.nodeType===8?e.parentNode:e),new Tu(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Pf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Dn(e)};dt.hydrate=function(e,t,n){if(!wl(t))throw Error(P(200));return Sl(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!zu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=im;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=om(t,null,e,1,n!=null?n:null,o,!1,i,l),e[Qt]=t.current,vo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xl(t)};dt.render=function(e,t,n){if(!wl(t))throw Error(P(200));return Sl(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!wl(e))throw Error(P(40));return e._reactRootContainer?(Dn(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};dt.unstable_batchedUpdates=ku;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Sl(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dt})(rf);var cd=rf.exports;Os.createRoot=cd.createRoot,Os.hydrateRoot=cd.hydrateRoot;var Ru={exports:{}},se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=Symbol.for("react.element"),Nu=Symbol.for("react.portal"),kl=Symbol.for("react.fragment"),Cl=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),$l=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),_1=Symbol.for("react.server_context"),_l=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),Ol=Symbol.for("react.lazy"),T1=Symbol.for("react.offscreen"),lm;lm=Symbol.for("react.module.reference");function kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ou:switch(e=e.type,e){case kl:case El:case Cl:case Tl:case zl:return e;default:switch(e=e&&e.$$typeof,e){case _1:case Pl:case _l:case Ol:case Rl:case $l:return e;default:return t}}case Nu:return t}}}se.ContextConsumer=Pl;se.ContextProvider=$l;se.Element=Ou;se.ForwardRef=_l;se.Fragment=kl;se.Lazy=Ol;se.Memo=Rl;se.Portal=Nu;se.Profiler=El;se.StrictMode=Cl;se.Suspense=Tl;se.SuspenseList=zl;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return kt(e)===Pl};se.isContextProvider=function(e){return kt(e)===$l};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ou};se.isForwardRef=function(e){return kt(e)===_l};se.isFragment=function(e){return kt(e)===kl};se.isLazy=function(e){return kt(e)===Ol};se.isMemo=function(e){return kt(e)===Rl};se.isPortal=function(e){return kt(e)===Nu};se.isProfiler=function(e){return kt(e)===El};se.isStrictMode=function(e){return kt(e)===Cl};se.isSuspense=function(e){return kt(e)===Tl};se.isSuspenseList=function(e){return kt(e)===zl};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kl||e===El||e===Cl||e===Tl||e===zl||e===T1||typeof e=="object"&&e!==null&&(e.$$typeof===Ol||e.$$typeof===Rl||e.$$typeof===$l||e.$$typeof===Pl||e.$$typeof===_l||e.$$typeof===lm||e.getModuleId!==void 0)};se.typeOf=kt;(function(e){e.exports=se})(Ru);function z1(e){function t(O,A,N,F,w){for(var G=0,R=0,J=0,q=0,ne,V,_e=0,De=0,Y,Oe=Y=ne=0,ee=0,Te=0,Pn=0,ke=0,Jt=N.length,_n=Jt-1,ot,B="",ce="",br="",Ar="",Ct;ee<Jt;){if(V=N.charCodeAt(ee),ee===_n&&R+q+J+G!==0&&(R!==0&&(V=R===47?10:47),q=J=G=0,Jt++,_n++),R+q+J+G===0){if(ee===_n&&(0<Te&&(B=B.replace(f,"")),0<B.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:B+=N.charAt(ee)}V=59}switch(V){case 123:for(B=B.trim(),ne=B.charCodeAt(0),Y=1,ke=++ee;ee<Jt;){switch(V=N.charCodeAt(ee)){case 123:Y++;break;case 125:Y--;break;case 47:switch(V=N.charCodeAt(ee+1)){case 42:case 47:e:{for(Oe=ee+1;Oe<_n;++Oe)switch(N.charCodeAt(Oe)){case 47:if(V===42&&N.charCodeAt(Oe-1)===42&&ee+2!==Oe){ee=Oe+1;break e}break;case 10:if(V===47){ee=Oe+1;break e}}ee=Oe}}break;case 91:V++;case 40:V++;case 34:case 39:for(;ee++<_n&&N.charCodeAt(ee)!==V;);}if(Y===0)break;ee++}switch(Y=N.substring(ke,ee),ne===0&&(ne=(B=B.replace(m,"").trim()).charCodeAt(0)),ne){case 64:switch(0<Te&&(B=B.replace(f,"")),V=B.charCodeAt(1),V){case 100:case 109:case 115:case 45:Te=A;break;default:Te=Pe}if(Y=t(A,Te,Y,V,w+1),ke=Y.length,0<_&&(Te=n(Pe,B,Pn),Ct=s(3,Y,Te,A,te,K,ke,V,w,F),B=Te.join(""),Ct!==void 0&&(ke=(Y=Ct.trim()).length)===0&&(V=0,Y="")),0<ke)switch(V){case 115:B=B.replace($,l);case 100:case 109:case 45:Y=B+"{"+Y+"}";break;case 107:B=B.replace(c,"$1 $2"),Y=B+"{"+Y+"}",Y=ue===1||ue===2&&i("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=B+Y,F===112&&(Y=(ce+=Y,""))}else Y="";break;default:Y=t(A,n(A,B,Pn),Y,F,w+1)}br+=Y,Y=Pn=Te=Oe=ne=0,B="",V=N.charCodeAt(++ee);break;case 125:case 59:if(B=(0<Te?B.replace(f,""):B).trim(),1<(ke=B.length))switch(Oe===0&&(ne=B.charCodeAt(0),ne===45||96<ne&&123>ne)&&(ke=(B=B.replace(" ",":")).length),0<_&&(Ct=s(1,B,A,O,te,K,ce.length,F,w,F))!==void 0&&(ke=(B=Ct.trim()).length)===0&&(B="\0\0"),ne=B.charCodeAt(0),V=B.charCodeAt(1),ne){case 0:break;case 64:if(V===105||V===99){Ar+=B+N.charAt(ee);break}default:B.charCodeAt(ke-1)!==58&&(ce+=o(B,ne,V,B.charCodeAt(2)))}Pn=Te=Oe=ne=0,B="",V=N.charCodeAt(++ee)}}switch(V){case 13:case 10:R===47?R=0:1+ne===0&&F!==107&&0<B.length&&(Te=1,B+="\0"),0<_*U&&s(0,B,A,O,te,K,ce.length,F,w,F),K=1,te++;break;case 59:case 125:if(R+q+J+G===0){K++;break}default:switch(K++,ot=N.charAt(ee),V){case 9:case 32:if(q+G+R===0)switch(_e){case 44:case 58:case 9:case 32:ot="";break;default:V!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:q+R+G===0&&(Te=Pn=1,ot="\f"+ot);break;case 108:if(q+R+G+me===0&&0<Oe)switch(ee-Oe){case 2:_e===112&&N.charCodeAt(ee-3)===58&&(me=_e);case 8:De===111&&(me=De)}break;case 58:q+R+G===0&&(Oe=ee);break;case 44:R+J+q+G===0&&(Te=1,ot+="\r");break;case 34:case 39:R===0&&(q=q===V?0:q===0?V:q);break;case 91:q+R+J===0&&G++;break;case 93:q+R+J===0&&G--;break;case 41:q+R+G===0&&J--;break;case 40:if(q+R+G===0){if(ne===0)switch(2*_e+3*De){case 533:break;default:ne=1}J++}break;case 64:R+J+q+G+Oe+Y===0&&(Y=1);break;case 42:case 47:if(!(0<q+G+J))switch(R){case 0:switch(2*V+3*N.charCodeAt(ee+1)){case 235:R=47;break;case 220:ke=ee,R=42}break;case 42:V===47&&_e===42&&ke+2!==ee&&(N.charCodeAt(ke+2)===33&&(ce+=N.substring(ke,ee+1)),ot="",R=0)}}R===0&&(B+=ot)}De=_e,_e=V,ee++}if(ke=ce.length,0<ke){if(Te=A,0<_&&(Ct=s(2,ce,Te,O,te,K,ke,F,w,F),Ct!==void 0&&(ce=Ct).length===0))return Ar+ce+br;if(ce=Te.join(",")+"{"+ce+"}",ue*me!==0){switch(ue!==2||i(ce,2)||(me=0),me){case 111:ce=ce.replace(v,":-moz-$1")+ce;break;case 112:ce=ce.replace(h,"::-webkit-input-$1")+ce.replace(h,"::-moz-$1")+ce.replace(h,":-ms-input-$1")+ce}me=0}}return Ar+ce+br}function n(O,A,N){var F=A.trim().split(C);A=F;var w=F.length,G=O.length;switch(G){case 0:case 1:var R=0;for(O=G===0?"":O[0]+" ";R<w;++R)A[R]=r(O,A[R],N).trim();break;default:var J=R=0;for(A=[];R<w;++R)for(var q=0;q<G;++q)A[J++]=r(O[q]+" ",F[R],N).trim()}return A}function r(O,A,N){var F=A.charCodeAt(0);switch(33>F&&(F=(A=A.trim()).charCodeAt(0)),F){case 38:return A.replace(d,"$1"+O.trim());case 58:return O.trim()+A.replace(d,"$1"+O.trim());default:if(0<1*N&&0<A.indexOf("\f"))return A.replace(d,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+A}function o(O,A,N,F){var w=O+";",G=2*A+3*N+4*F;if(G===944){O=w.indexOf(":",9)+1;var R=w.substring(O,w.length-1).trim();return R=w.substring(0,O).trim()+R+";",ue===1||ue===2&&i(R,1)?"-webkit-"+R+R:R}if(ue===0||ue===2&&!i(w,1))return w;switch(G){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(H,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return R=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+w+"-ms-flex-pack"+R+w;case 1005:return y.test(w)?w.replace(x,":-webkit-")+w.replace(x,":-moz-")+w:w;case 1e3:switch(R=w.substring(13).trim(),A=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(A)){case 226:R=w.replace(S,"tb");break;case 232:R=w.replace(S,"tb-rl");break;case 220:R=w.replace(S,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+R+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(A=(w=O).length-10,R=(w.charCodeAt(A)===33?w.substring(0,A):w).substring(O.indexOf(":",7)+1).trim(),G=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:w=w.replace(R,"-webkit-"+R)+";"+w;break;case 207:case 102:w=w.replace(R,"-webkit-"+(102<G?"inline-":"")+"box")+";"+w.replace(R,"-webkit-"+R)+";"+w.replace(R,"-ms-"+R+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return R=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+R+"-ms-flex-"+R+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(T,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(T,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(z.test(O)===!0)return(R=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?o(O.replace("stretch","fill-available"),A,N,F).replace(":fill-available",":stretch"):w.replace(R,"-webkit-"+R)+w.replace(R,"-moz-"+R.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,N+F===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+w}return w}function i(O,A){var N=O.indexOf(A===1?":":"{"),F=O.substring(0,A!==3?N:10);return N=O.substring(N+1,O.length-1),D(A!==2?F:F.replace(L,"$1"),N,A)}function l(O,A){var N=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return N!==A+";"?N.replace(E," or ($1)").substring(4):"("+A+")"}function s(O,A,N,F,w,G,R,J,q,ne){for(var V=0,_e=A,De;V<_;++V)switch(De=Se[V].call(p,O,_e,N,F,w,G,R,J,q,ne)){case void 0:case!1:case!0:case null:break;default:_e=De}if(_e!==A)return _e}function a(O){switch(O){case void 0:case null:_=Se.length=0;break;default:if(typeof O=="function")Se[_++]=O;else if(typeof O=="object")for(var A=0,N=O.length;A<N;++A)a(O[A]);else U=!!O|0}return a}function u(O){return O=O.prefix,O!==void 0&&(D=null,O?typeof O!="function"?ue=1:(ue=2,D=O):ue=0),u}function p(O,A){var N=O;if(33>N.charCodeAt(0)&&(N=N.trim()),ie=N,N=[ie],0<_){var F=s(-1,A,N,N,te,K,0,0,0,0);F!==void 0&&typeof F=="string"&&(A=F)}var w=t(Pe,N,A,0,0);return 0<_&&(F=s(-2,w,N,N,te,K,w.length,0,0,0),F!==void 0&&(w=F)),ie="",me=0,K=te=1,w}var m=/^\0+/g,f=/[\0\r\f]/g,x=/: */g,y=/zoo|gra/,g=/([,: ])(transform)/g,C=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,v=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,T=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,H=/([^-])(image-set\()/,K=1,te=1,me=0,ue=1,Pe=[],Se=[],_=0,D=null,U=0,ie="";return p.use=a,p.set=u,e!==void 0&&u(e),p}var R1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function sm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var O1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ea=sm(function(e){return O1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),am={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,bu=Me?Symbol.for("react.element"):60103,Au=Me?Symbol.for("react.portal"):60106,Nl=Me?Symbol.for("react.fragment"):60107,bl=Me?Symbol.for("react.strict_mode"):60108,Al=Me?Symbol.for("react.profiler"):60114,Il=Me?Symbol.for("react.provider"):60109,Ml=Me?Symbol.for("react.context"):60110,Iu=Me?Symbol.for("react.async_mode"):60111,Ll=Me?Symbol.for("react.concurrent_mode"):60111,jl=Me?Symbol.for("react.forward_ref"):60112,Fl=Me?Symbol.for("react.suspense"):60113,N1=Me?Symbol.for("react.suspense_list"):60120,Dl=Me?Symbol.for("react.memo"):60115,Bl=Me?Symbol.for("react.lazy"):60116,b1=Me?Symbol.for("react.block"):60121,A1=Me?Symbol.for("react.fundamental"):60117,I1=Me?Symbol.for("react.responder"):60118,M1=Me?Symbol.for("react.scope"):60119;function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bu:switch(e=e.type,e){case Iu:case Ll:case Nl:case Al:case bl:case Fl:return e;default:switch(e=e&&e.$$typeof,e){case Ml:case jl:case Bl:case Dl:case Il:return e;default:return t}}case Au:return t}}}function um(e){return pt(e)===Ll}ae.AsyncMode=Iu;ae.ConcurrentMode=Ll;ae.ContextConsumer=Ml;ae.ContextProvider=Il;ae.Element=bu;ae.ForwardRef=jl;ae.Fragment=Nl;ae.Lazy=Bl;ae.Memo=Dl;ae.Portal=Au;ae.Profiler=Al;ae.StrictMode=bl;ae.Suspense=Fl;ae.isAsyncMode=function(e){return um(e)||pt(e)===Iu};ae.isConcurrentMode=um;ae.isContextConsumer=function(e){return pt(e)===Ml};ae.isContextProvider=function(e){return pt(e)===Il};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bu};ae.isForwardRef=function(e){return pt(e)===jl};ae.isFragment=function(e){return pt(e)===Nl};ae.isLazy=function(e){return pt(e)===Bl};ae.isMemo=function(e){return pt(e)===Dl};ae.isPortal=function(e){return pt(e)===Au};ae.isProfiler=function(e){return pt(e)===Al};ae.isStrictMode=function(e){return pt(e)===bl};ae.isSuspense=function(e){return pt(e)===Fl};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nl||e===Ll||e===Al||e===bl||e===Fl||e===N1||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Dl||e.$$typeof===Il||e.$$typeof===Ml||e.$$typeof===jl||e.$$typeof===A1||e.$$typeof===I1||e.$$typeof===M1||e.$$typeof===b1)};ae.typeOf=pt;(function(e){e.exports=ae})(am);var Mu=am.exports,L1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lu={};Lu[Mu.ForwardRef]=F1;Lu[Mu.Memo]=cm;function dd(e){return Mu.isMemo(e)?cm:Lu[e.$$typeof]||L1}var D1=Object.defineProperty,B1=Object.getOwnPropertyNames,fd=Object.getOwnPropertySymbols,U1=Object.getOwnPropertyDescriptor,V1=Object.getPrototypeOf,pd=Object.prototype;function dm(e,t,n){if(typeof t!="string"){if(pd){var r=V1(t);r&&r!==pd&&dm(e,r,n)}var o=B1(t);fd&&(o=o.concat(fd(t)));for(var i=dd(e),l=dd(t),s=0;s<o.length;++s){var a=o[s];if(!j1[a]&&!(n&&n[a])&&!(l&&l[a])&&!(i&&i[a])){var u=U1(t,a);try{D1(e,a,u)}catch{}}}}return e}var W1=dm;function Mt(){return(Mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var md=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},$a=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ru.exports.typeOf(e)},rl=Object.freeze([]),hn=Object.freeze({});function _o(e){return typeof e=="function"}function hd(e){return e.displayName||e.name||"Component"}function ju(e){return e&&typeof e.styledComponentId=="string"}var Pr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Fu=typeof window<"u"&&"HTMLElement"in window,H1=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),K1={};function jo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var G1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&jo(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var s=i;s<l;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(n+1),u=0,p=r.length;u<p;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,s=i;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),_i=new Map,ol=new Map,so=1,ci=function(e){if(_i.has(e))return _i.get(e);for(;ol.has(so);)so++;var t=so++;return _i.set(e,t),ol.set(t,e),t},Q1=function(e){return ol.get(e)},Y1=function(e,t){t>=so&&(so=t+1),_i.set(e,t),ol.set(t,e)},X1="style["+Pr+'][data-styled-version="5.3.5"]',Z1=new RegExp("^"+Pr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),J1=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},q1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var s=l.match(Z1);if(s){var a=0|parseInt(s[1],10),u=s[2];a!==0&&(Y1(u,a),J1(e,u,s[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(l)}}},eg=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},fm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var a=s.childNodes,u=a.length;u>=0;u--){var p=a[u];if(p&&p.nodeType===1&&p.hasAttribute(Pr))return p}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Pr,"active"),r.setAttribute("data-styled-version","5.3.5");var l=eg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},tg=function(){function e(n){var r=this.element=fm(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,s=i.length;l<s;l++){var a=i[l];if(a.ownerNode===o)return a}jo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ng=function(){function e(n){var r=this.element=fm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),rg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),gd=Fu,og={isServer:!Fu,useCSSOMInjection:!H1},il=function(){function e(n,r,o){n===void 0&&(n=hn),r===void 0&&(r={}),this.options=Mt({},og,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Fu&&gd&&(gd=!1,function(i){for(var l=document.querySelectorAll(X1),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(Pr)!=="active"&&(q1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ci(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Mt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new rg(l):i?new tg(l):new ng(l),new G1(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ci(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(ci(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ci(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var s=Q1(l);if(s!==void 0){var a=n.names.get(s),u=r.getGroup(l);if(a&&u&&a.size){var p=Pr+".g"+l+'[id="'+s+'"]',m="";a!==void 0&&a.forEach(function(f){f.length>0&&(m+=f+",")}),i+=""+u+p+'{content:"'+m+`"}/*!sc*/
`}}}return i}(this)},e}(),ig=/(a)(d)/gi,yd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yd(t%52)+n;return(yd(t%52)+n).replace(ig,"$1-$2")}var cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pm=function(e){return cr(5381,e)};function mm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_o(n)&&!ju(n))return!1}return!0}var lg=pm("5.3.5"),sg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mm(t),this.componentId=n,this.baseHash=cr(lg,n),this.baseStyle=r,il.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Bn(this.rules,t,n,r).join(""),s=Pa(cr(this.baseHash,l)>>>0);if(!n.hasNameForId(o,s)){var a=r(l,"."+s,void 0,o);n.insertRules(o,s,a)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,p=cr(this.baseHash,r.hash),m="",f=0;f<u;f++){var x=this.rules[f];if(typeof x=="string")m+=x;else if(x){var y=Bn(x,t,n,r),g=Array.isArray(y)?y.join(""):y;p=cr(p,g+f),m+=g}}if(m){var C=Pa(p>>>0);if(!n.hasNameForId(o,C)){var d=r(m,"."+C,void 0,o);n.insertRules(o,C,d)}i.push(C)}}return i.join(" ")},e}(),ag=/^\s*\/\/.*$/gm,ug=[":","[",".","#"];function cg(e){var t,n,r,o,i=e===void 0?hn:e,l=i.options,s=l===void 0?hn:l,a=i.plugins,u=a===void 0?rl:a,p=new z1(s),m=[],f=function(g){function C(d){if(d)try{g(d+"}")}catch{}}return function(d,c,h,v,S,$,E,T,L,z){switch(d){case 1:if(L===0&&c.charCodeAt(0)===64)return g(c+";"),"";break;case 2:if(T===0)return c+"/*|*/";break;case 3:switch(T){case 102:case 112:return g(h[0]+c),"";default:return c+(z===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(C)}}}(function(g){m.push(g)}),x=function(g,C,d){return C===0&&ug.indexOf(d[n.length])!==-1||d.match(o)?g:"."+t};function y(g,C,d,c){c===void 0&&(c="&");var h=g.replace(ag,""),v=C&&d?d+" "+C+" { "+h+" }":h;return t=c,n=C,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(d||!C?"":C,v)}return p.use([].concat(u,[function(g,C,d){g===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,x))},f,function(g){if(g===-2){var C=m;return m=[],C}}])),y.hash=u.length?u.reduce(function(g,C){return C.name||jo(15),cr(g,C.name)},5381).toString():"",y}var hm=ut.createContext();hm.Consumer;var gm=ut.createContext(),dg=(gm.Consumer,new il),_a=cg();function ym(){return b.exports.useContext(hm)||dg}function vm(){return b.exports.useContext(gm)||_a}var fg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=_a);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return jo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=_a),this.name+t.hash},e}(),pg=/([A-Z])/,mg=/([A-Z])/g,hg=/^ms-/,gg=function(e){return"-"+e.toLowerCase()};function vd(e){return pg.test(e)?e.replace(mg,gg).replace(hg,"-ms-"):e}var xd=function(e){return e==null||e===!1||e===""};function Bn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,s=e.length;l<s;l+=1)(o=Bn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(xd(e))return"";if(ju(e))return"."+e.styledComponentId;if(_o(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Bn(a,t,n,r)}var u;return e instanceof fg?n?(e.inject(n,r),e.getName(r)):e:$a(e)?function p(m,f){var x,y,g=[];for(var C in m)m.hasOwnProperty(C)&&!xd(m[C])&&(Array.isArray(m[C])&&m[C].isCss||_o(m[C])?g.push(vd(C)+":",m[C],";"):$a(m[C])?g.push.apply(g,p(m[C],C)):g.push(vd(C)+": "+(x=C,(y=m[C])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||x in R1?String(y).trim():y+"px")+";"));return f?[f+" {"].concat(g,["}"]):g}(e):e.toString()}var wd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return _o(e)||$a(e)?wd(Bn(md(rl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:wd(Bn(md(e,n)))}var wm=function(e,t,n){return n===void 0&&(n=hn),e.theme!==n.theme&&e.theme||t||n.theme},yg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vg=/(^-|-$)/g;function Es(e){return e.replace(yg,"-").replace(vg,"")}var Sm=function(e){return Pa(pm(e)>>>0)};function di(e){return typeof e=="string"&&!0}var Ta=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},xg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function wg(e,t,n){var r=e[n];Ta(t)&&Ta(r)?km(r,t):e[n]=t}function km(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(Ta(l))for(var s in l)xg(s)&&wg(e,l[s],s)}return e}var Du=ut.createContext();Du.Consumer;var $s={};function Cm(e,t,n){var r=ju(e),o=!di(e),i=t.attrs,l=i===void 0?rl:i,s=t.componentId,a=s===void 0?function(c,h){var v=typeof c!="string"?"sc":Es(c);$s[v]=($s[v]||0)+1;var S=v+"-"+Sm("5.3.5"+v+$s[v]);return h?h+"-"+S:S}(t.displayName,t.parentComponentId):s,u=t.displayName,p=u===void 0?function(c){return di(c)?"styled."+c:"Styled("+hd(c)+")"}(e):u,m=t.displayName&&t.componentId?Es(t.displayName)+"-"+t.componentId:t.componentId||a,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(c,h,v){return e.shouldForwardProp(c,h,v)&&t.shouldForwardProp(c,h,v)}:e.shouldForwardProp);var y,g=new sg(n,m,r?e.componentStyle:void 0),C=g.isStatic&&l.length===0,d=function(c,h){return function(v,S,$,E){var T=v.attrs,L=v.componentStyle,z=v.defaultProps,H=v.foldedComponentIds,K=v.shouldForwardProp,te=v.styledComponentId,me=v.target,ue=function(F,w,G){F===void 0&&(F=hn);var R=Mt({},w,{theme:F}),J={};return G.forEach(function(q){var ne,V,_e,De=q;for(ne in _o(De)&&(De=De(R)),De)R[ne]=J[ne]=ne==="className"?(V=J[ne],_e=De[ne],V&&_e?V+" "+_e:V||_e):De[ne]}),[R,J]}(wm(S,b.exports.useContext(Du),z)||hn,S,T),Pe=ue[0],Se=ue[1],_=function(F,w,G,R){var J=ym(),q=vm(),ne=w?F.generateAndInjectStyles(hn,J,q):F.generateAndInjectStyles(G,J,q);return ne}(L,E,Pe),D=$,U=Se.$as||S.$as||Se.as||S.as||me,ie=di(U),O=Se!==S?Mt({},S,{},Se):S,A={};for(var N in O)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?A.as=O[N]:(K?K(N,Ea,U):!ie||Ea(N))&&(A[N]=O[N]));return S.style&&Se.style!==S.style&&(A.style=Mt({},S.style,{},Se.style)),A.className=Array.prototype.concat(H,te,_!==te?_:null,S.className,Se.className).filter(Boolean).join(" "),A.ref=D,b.exports.createElement(U,A)}(y,c,h,C)};return d.displayName=p,(y=ut.forwardRef(d)).attrs=f,y.componentStyle=g,y.displayName=p,y.shouldForwardProp=x,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):rl,y.styledComponentId=m,y.target=r?e.target:e,y.withComponent=function(c){var h=t.componentId,v=function($,E){if($==null)return{};var T,L,z={},H=Object.keys($);for(L=0;L<H.length;L++)T=H[L],E.indexOf(T)>=0||(z[T]=$[T]);return z}(t,["componentId"]),S=h&&h+"-"+(di(c)?c:Es(hd(c)));return Cm(c,Mt({},v,{attrs:f,componentId:S}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?km({},e.defaultProps,c):c}}),y.toString=function(){return"."+y.styledComponentId},o&&W1(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var za=function(e){return function t(n,r,o){if(o===void 0&&(o=hn),!Ru.exports.isValidElementType(r))return jo(1,String(r));var i=function(){return n(r,o,xm.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Mt({},o,{},l))},i.attrs=function(l){return t(n,r,Mt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(Cm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){za[e]=za(e)});var Sg=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=mm(n),il.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(Bn(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&il.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function kg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=xm.apply(void 0,[e].concat(n)),i="sc-global-"+Sm(JSON.stringify(o)),l=new Sg(o,i);function s(u){var p=ym(),m=vm(),f=b.exports.useContext(Du),x=b.exports.useRef(p.allocateGSInstance(i)).current;return p.server&&a(x,u,p,f,m),b.exports.useLayoutEffect(function(){if(!p.server)return a(x,u,p,f,m),function(){return l.removeStyles(x,p)}},[x,u,p,f,m]),null}function a(u,p,m,f,x){if(l.isStatic)l.renderStyles(u,K1,m,x);else{var y=Mt({},p,{theme:wm(p,f,s.defaultProps)});l.renderStyles(u,y,m,x)}}return ut.memo(s)}const mt=za,Cg=kg`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Inter', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
overflow: unset;
`,Ps="/shopdin/assets/fundo.c1fb885a.png",Eg="/shopdin/assets/cashback.62c9528c.png",$g="/shopdin/assets/iSocial.bb2d031c.png",Pg="/shopdin/assets/fComercio.38a8d9b5.png",_g=[{id:1,title:"GANHA CASHBACK",img:Eg},{id:2,title:"AJUDA UMA INSTITUI\xC7\xC3O SOCIAL LOCAL",img:$g},{id:3,title:"FORTALECE O COM\xC9RCIO LOCAL",img:Pg}];var Ul={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=b.exports,zg=Symbol.for("react.element"),Rg=Symbol.for("react.fragment"),Og=Object.prototype.hasOwnProperty,Ng=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bg={key:!0,ref:!0,__self:!0,__source:!0};function Em(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Og.call(t,r)&&!bg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:zg,type:e,key:i,ref:l,props:o,_owner:Ng.current}}Vl.Fragment=Rg;Vl.jsx=Em;Vl.jsxs=Em;(function(e){e.exports=Vl})(Ul);const Dt=Ul.exports.Fragment,k=Ul.exports.jsx,X=Ul.exports.jsxs,Ag=mt.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 120vh;
    background: url(${Ps});
    display: flex;
    flex-direction: column;
    .text {
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 12rem;
      color: white;
    }
    .text .title {
      font-size: 2.2rem;
    }
    .text .subtitle {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 80vh;
    background: url(${Ps});
    display: flex;
    flex-direction: column;
    .text {
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 12rem;
      color: white;
    }
    .text .title {
      font-size: max(1.6rem, 16px);
    }
    .text .subtitle {
      font-size: max(1.4rem, 14px);
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 92vh;
    background: url(${Ps});
    display: flex;
    flex-direction: column;
    .text {
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 12rem;
      color: black;
    }
    .text .title {
      font-size: max(1.1rem, 16px);
      text-align: center;
    }
    .text .subtitle {
      font-size:  max(0.9rem, 14px);
      text-align: center;
    }
  }
`,Ig=mt.ul`
@media screen and (min-width: 1024px) {
  margin-top: 5rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
}
 @media screen and (min-width: 768px) and (max-width: 1023px) {
  margin-top: 5rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
 }
 @media screen and (max-width: 767px){
  margin-top: 5rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
 }
`,Mg=mt.li`
@media screen and (min-width: 1024px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    border-radius: 15%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.4s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    color: white;
    text-transform: capitalize;
    text-align: center;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    border-radius: 15%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.4s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    color: white;
    text-transform: capitalize;
    text-align: center;
    font-size: 0.8rem;
  }
}
 @media screen and (max-width: 767px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    border-radius: 15%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.4s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    color: black;
    text-transform: capitalize;
    text-align: center;
    font-size: 0.8rem;
  }
 }
`,Lg=()=>k(Dt,{children:X(Ag,{id:"benf",children:[X("section",{className:"text",children:[k("h1",{className:"title",children:"Melhor que comprar \xE9 comprar com benef\xEDcios!"}),k("h2",{className:"subtitle",children:"em toda compra na shopdin voc\xEA:"})]}),X("section",{className:"images",children:[k(Ig,{children:_g.map(e=>X(Mg,{children:[k("img",{src:e.img,alt:""}),k("p",{children:e.title})]},e.id))}),k("hr",{})]})]})}),_s="/shopdin/assets/FundoCep.f2b9640b.png",jg="/shopdin/assets/manShopdin.3d05706b.png",Fg=mt.div`
  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
      url(${_s});
    background-position: center center;
    background-size: auto;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: white;
      text-transform: uppercase;
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 900;
    }
    .subtitle {
      margin-top: 1.8rem;
      color: white;
      text-transform: uppercase;
    }
    form {
      margin-top: 1rem;
    }
    form .uf {
      width: 5vw;
      height: 5vh;
      border: none;
      border-radius: 0.5rem;
    }
    form .cidade {
      width: 20vw;
      height: 5vh;
      border: none;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
    }
    .text {
      width: 30vw;
    }
    .images {
      width: 30vw;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 40vh;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
      url(${_s});
    background-position: center center;
    background-size: auto;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: white;
      text-transform: uppercase;
      font-size: max(1.4rem, 14px);
      font-family: "Inter", sans-serif;
      font-weight: 900;
    }
    .subtitle {
      margin-top: 1.8rem;
      font-size: max(0.8rem, 12px);
      color: white;
      text-transform: uppercase;
    }
    form {
      margin-top: 1rem;
    }
    form .uf {
      width: 6vw;
      height: 3vh;
      border: none;
      border-radius: 0.5rem;
    }
    form .cidade {
      width: 24vw;
      height: 3vh;
      border: none;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
    }
    .text {
      width: 40vw;
    }
    .images {
      width: 30vw;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 40vh;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
      url(${_s});
    background-position: center center;
    background-size: auto;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: white;
      text-transform: uppercase;
      font-size: max(1.1rem, 12px);
      font-family: "Inter", sans-serif;
      font-weight: 900;
    }
    .subtitle {
      margin-top: 1.8rem;
      font-size: max(0.7rem, 10px);
      color: white;
      text-transform: uppercase;
    }
    form {
      margin-top: 1rem;
    }
    form .uf {
      width: 6vw;
      height: 3vh;
      border: none;
      border-radius: 0.5rem;
    }
    form .cidade {
      width: 24vw;
      height: 3vh;
      border: none;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
    }
    .text {
      width: 40vw;
    }
    .images {
      width: 30vw;
      img {
        width: 100%;
      }
    }
  }
`,Dg=()=>k(Dt,{children:X(Fg,{id:"inicio",children:[X("div",{className:"text",children:[X("h2",{className:"title",children:["O primeiro shopping ",k("br",{})," do com\xE9rcio local, ",k("br",{})," na palma da sua"," ",k("br",{})," m\xE3o"]}),k("h3",{className:"subtitle",children:"Selecione sua cidade e aproveite as ofertas"}),X("form",{className:"localizacao",children:[k("input",{type:"",placeholder:"UF",name:"uf",id:"uf",className:"uf"}),k("input",{type:"",placeholder:"Cidade",name:"cidade",id:"cidade",className:"cidade"})]})]}),k("div",{className:"images",children:k("img",{src:jg,alt:"man"})})]})}),Bg="/shopdin/assets/img1.87be9323.png",Ug="/shopdin/assets/logo.45433ef2.png",Vg=mt.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .images {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40vw;
      .peoples {
        padding-top: 2rem;
        width: 100%;
      }
      .logo {
        width: 35%;
      }
    }
    .text {
      width: 40vw;
      padding-left: 6rem;
      padding-top: 4rem;
      color: blue;
      .title {
        font-size: 4rem;
        text-transform: uppercase;
      }
      .textContent {
        margin-top: 1.5rem;
        font-size: 1.85rem;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .images {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40vw;
      .peoples {
        padding-top: 2rem;
        padding-left: 2rem;
        width: 100%;
      }
      .logo {
        padding-left: 2rem;
        width: 35%;
      }
    }
    .text {
      width: 60vw;
      padding-left: 4rem;
      padding-top: 4rem;
      color: blue;
      .title {
        font-size: max(3rem, 22px);
        text-transform: uppercase;
      }
      .textContent {
        margin-top: 1rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    .images {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      .peoples {
        padding-top: 2rem;
        padding-right: 2rem;
        width: 40%;
      }
      .logo {
        padding-right: 2rem;
        width: 20%;
      }
    }
    .text {
      width: 60vw;
      padding-left: 6rem;
      padding-top: 4rem;
      color: blue;
      .title {
        font-size: 2rem;
        text-transform: uppercase;
      }
      .textContent {
        margin-top: 1rem;
      }
    }
  }
`,Wg=()=>X(Dt,{children:[k("hr",{}),X(Vg,{id:"about",children:[k("section",{className:"images",children:k("img",{src:Bg,className:"peoples",alt:""})}),X("section",{className:"text",children:[k("h1",{className:"title",children:"No Shopdin Tem, Quem Tem Economiza"}),k("p",{className:"textContent",children:"O Shopdin \xE9 o marketeplace do com\xE9rcio local e conectar pessoas \xE0 economia de tempo e dinheiro \xE9 o que acreditamos. Ajudamos vendedores, compradores, Ong\xB4s locais se conectar em uma plataforma digital simplificando o dia a dia no varejo \xE9 nossa miss\xE3o."})]})]})]});var $m={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sd=ut.createContext&&ut.createContext($m),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},gn.apply(this,arguments)},Hg=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Pm(e){return e&&e.map(function(t,n){return ut.createElement(t.tag,gn({key:n},t.attr),Pm(t.child))})}function Fo(e){return function(t){return k(Kg,{...gn({attr:gn({},e.attr)},t),children:Pm(e.child)})}}function Kg(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=Hg(e,["attr","size","title"]),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),X("svg",{...gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:gn(gn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),children:[i&&k("title",{children:i}),e.children]})};return Sd!==void 0?k(Sd.Consumer,{children:function(n){return t(n)}}):t($m)}function Gg(e){return Fo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Qg(e){return Fo({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Yg(e){return Fo({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"}}]})(e)}function Xg(e){return Fo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function Zg(e){return Fo({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)}const Jg=mt.div`
@media screen and (min-width: 1024px) {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;

  font-size: 1.4rem;
  hr {
    padding: 0;
    margin: 0;
    color: red;
    border: 2px solid red;
    height: 90%;
  }

  .primary {
    display: flex;
    flex-direction: column;
    width: 30vw;
    .icons{
      display: flex;
      flex-direction: column;
      margin-left: 5rem;
      font-size: 1.8rem;
      row-gap: 0.6rem;
    }
    .logo {
      width: 45%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .secondary {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    width: 30vw;
    padding-top: 2.5rem;
    h1 {
      color: red;
    }
    ul li {
      list-style: none;
      color: blue;
      padding-top: 0.6rem;
    }
  }
  .tertiary {
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    width: 30vw;
    text-transform: uppercase;
    h1 {
      color: red;
    }
    ul li {
      list-style: none;
      color: blue;
      padding-top: 0.6rem;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px){
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;

  font-size: max(1.2rem, 14px);
  hr {
    padding: 0;
    margin: 0;
    color: red;
    border: 2px solid red;
    height: 90%;
  }

  .primary {
    display: flex;
    flex-direction: column;
    width: 30vw;
    .icons{
      display: flex;
      flex-direction: column;
      margin-left: 5rem;
      font-size: max(1.8rem, 15px);
      row-gap: 0.6rem;
    }
    .logo {
      width: 45%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .secondary {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    width: 30vw;
    padding-top: 2.5rem;
    h1 {
      color: red;
    }
    ul li {
      list-style: none;
      color: blue;
      padding-top: 0.6rem;
    }
  }
  .tertiary {
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    width: 30vw;
    text-transform: uppercase;
    h1 {
      color: red;
    }
    ul li {
      list-style: none;
      color: blue;
      padding-top: 0.6rem;
    }
  }
}
@media screen and (max-width: 767px) {
  visibility: hidden;
  width: 100%;
  height: 0%;
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;

  font-size: max(0.8rem, 12px);
  hr {
    padding: 0;
    margin: 0;
    color: red;
    border: 2px solid red;
    height: 90%;
  }

  .primary {
    display: flex;
    flex-direction: column;
    width: 30vw;
    .icons{
      display: flex;
      flex-direction: column;
      margin-left: 5rem;
      font-size: max(1rem, 10px);
      row-gap: 0.6rem;
    }
    .logo {
      width: 45%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .secondary {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    width: 30vw;
    padding-top: 2.5rem;
    h1 {
      color: red;
    }
    ul li {
      list-style: none;
      color: blue;
      padding-top: 0.6rem;
    }
  }
  .tertiary {
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    width: 30vw;
    text-transform: uppercase;
    h1 {
      color: red;
    }
    ul li {
      list-style: none;
      color: blue;
      padding-top: 0.6rem;
    }
  }
}
  
`,qg=()=>k(Dt,{children:X(Jg,{children:[X("div",{className:"primary",children:[k("img",{src:Ug,alt:"logo",className:"logo"}),X("div",{className:"icons",children:[k(Qg,{}),k(Gg,{}),k(Xg,{}),k(Yg,{}),k(Zg,{})]})]}),k("hr",{}),X("div",{className:"secondary",children:[k("h1",{children:"institucional"}),X("ul",{children:[k("li",{children:"inicio"}),k("li",{children:"fa\xE7a seu pedido"}),k("li",{children:"sobre a shopdin"}),k("li",{children:"comunidade"}),k("li",{children:"nosso compromisso"}),k("li",{children:"transparencia"})]})]}),k("hr",{}),X("div",{className:"tertiary",children:[k("h1",{children:"nossos canais"}),X("ul",{children:[k("li",{children:"instagram"}),k("li",{children:"facebook"}),k("li",{children:"twitter"}),k("li",{children:"tiktok"}),k("li",{children:"email"}),k("li",{children:"site institucional"})]})]})]})}),ey=mt.footer`
@media screen and (min-width: 1024px){
  
width: 100%;
height: 10vh;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
p{
  color: white;
}
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  
width: 100%;
height: 10vh;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
p{
  color: white;
}
  
}
@media screen and (max-width: 767px) {
visibility: hidden;
width: 100%;
height: 0%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
p{
  color: white;
} 
}
`,ty=()=>k(Dt,{children:k(ey,{children:k("p",{children:"\xA92022 Shopdin - Todos os direitos reservados."})})}),ny={black:"#000",white:"#fff"},To=ny,ry={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Kn=ry,oy={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Gn=oy,iy={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Qn=iy,ly={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Yn=ly,sy={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Xn=sy,ay={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Vr=ay,uy={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},cy=uy;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function Ie(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function dy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function fy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var py=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=dy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ve="-ms-",ll="-moz-",re="-webkit-",_m="comm",Bu="rule",Uu="decl",my="@import",Tm="@keyframes",hy=Math.abs,Wl=String.fromCharCode,gy=Object.assign;function yy(e,t){return(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3)}function zm(e){return e.trim()}function vy(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function Ra(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function zo(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function Vu(e){return e.length}function fi(e,t){return t.push(e),e}function xy(e,t){return e.map(t).join("")}var Hl=1,_r=1,Rm=0,rt=0,Ee=0,Nr="";function Kl(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Hl,column:_r,length:l,return:""}}function Wr(e,t){return gy(Kl("",null,null,"",null,null,0),e,{length:-e.length},t)}function wy(){return Ee}function Sy(){return Ee=rt>0?Xe(Nr,--rt):0,_r--,Ee===10&&(_r=1,Hl--),Ee}function at(){return Ee=rt<Rm?Xe(Nr,rt++):0,_r++,Ee===10&&(_r=1,Hl++),Ee}function Ft(){return Xe(Nr,rt)}function Ti(){return rt}function Do(e,t){return zo(Nr,e,t)}function Ro(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Om(e){return Hl=_r=1,Rm=bt(Nr=e),rt=0,[]}function Nm(e){return Nr="",e}function zi(e){return zm(Do(rt-1,Oa(e===91?e+2:e===40?e+1:e)))}function ky(e){for(;(Ee=Ft())&&Ee<33;)at();return Ro(e)>2||Ro(Ee)>3?"":" "}function Cy(e,t){for(;--t&&at()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Do(e,Ti()+(t<6&&Ft()==32&&at()==32))}function Oa(e){for(;at();)switch(Ee){case e:return rt;case 34:case 39:e!==34&&e!==39&&Oa(Ee);break;case 40:e===41&&Oa(e);break;case 92:at();break}return rt}function Ey(e,t){for(;at()&&e+Ee!==47+10;)if(e+Ee===42+42&&Ft()===47)break;return"/*"+Do(t,rt-1)+"*"+Wl(e===47?e:at())}function $y(e){for(;!Ro(Ft());)at();return Do(e,rt)}function Py(e){return Nm(Ri("",null,null,null,[""],e=Om(e),0,[0],e))}function Ri(e,t,n,r,o,i,l,s,a){for(var u=0,p=0,m=l,f=0,x=0,y=0,g=1,C=1,d=1,c=0,h="",v=o,S=i,$=r,E=h;C;)switch(y=c,c=at()){case 40:if(y!=108&&E.charCodeAt(m-1)==58){Ra(E+=oe(zi(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:E+=zi(c);break;case 9:case 10:case 13:case 32:E+=ky(y);break;case 92:E+=Cy(Ti()-1,7);continue;case 47:switch(Ft()){case 42:case 47:fi(_y(Ey(at(),Ti()),t,n),a);break;default:E+="/"}break;case 123*g:s[u++]=bt(E)*d;case 125*g:case 59:case 0:switch(c){case 0:case 125:C=0;case 59+p:x>0&&bt(E)-m&&fi(x>32?Cd(E+";",r,n,m-1):Cd(oe(E," ","")+";",r,n,m-2),a);break;case 59:E+=";";default:if(fi($=kd(E,t,n,u,p,o,s,h,v=[],S=[],m),i),c===123)if(p===0)Ri(E,t,$,$,v,i,m,s,S);else switch(f){case 100:case 109:case 115:Ri(e,$,$,r&&fi(kd(e,$,$,0,0,o,s,h,o,v=[],m),S),o,S,m,s,r?v:S);break;default:Ri(E,$,$,$,[""],S,0,s,S)}}u=p=x=0,g=d=1,h=E="",m=l;break;case 58:m=1+bt(E),x=y;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&Sy()==125)continue}switch(E+=Wl(c),c*g){case 38:d=p>0?1:(E+="\f",-1);break;case 44:s[u++]=(bt(E)-1)*d,d=1;break;case 64:Ft()===45&&(E+=zi(at())),f=Ft(),p=m=bt(h=E+=$y(Ti())),c++;break;case 45:y===45&&bt(E)==2&&(g=0)}}return i}function kd(e,t,n,r,o,i,l,s,a,u,p){for(var m=o-1,f=o===0?i:[""],x=Vu(f),y=0,g=0,C=0;y<r;++y)for(var d=0,c=zo(e,m+1,m=hy(g=l[y])),h=e;d<x;++d)(h=zm(g>0?f[d]+" "+c:oe(c,/&\f/g,f[d])))&&(a[C++]=h);return Kl(e,t,n,o===0?Bu:s,a,u,p)}function _y(e,t,n){return Kl(e,t,n,_m,Wl(wy()),zo(e,2,-2),0)}function Cd(e,t,n,r){return Kl(e,t,n,Uu,zo(e,0,r),zo(e,r+1,-1),r)}function bm(e,t){switch(yy(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+ll+e+Ve+e+e;case 6828:case 4268:return re+e+Ve+e+e;case 6165:return re+e+Ve+"flex-"+e+e;case 5187:return re+e+oe(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+Ve+"flex-$1$2")+e;case 5443:return re+e+Ve+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return re+e+Ve+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return re+e+Ve+oe(e,"shrink","negative")+e;case 5292:return re+e+Ve+oe(e,"basis","preferred-size")+e;case 6060:return re+"box-"+oe(e,"-grow","")+re+e+Ve+oe(e,"grow","positive")+e;case 4554:return re+oe(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+Ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+ll+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ra(e,"stretch")?bm(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Xe(e,t+1)!==115)break;case 6444:switch(Xe(e,bt(e)-3-(~Ra(e,"!important")&&10))){case 107:return oe(e,":",":"+re)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+re+(Xe(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+Ve+"$2box$3")+e}break;case 5936:switch(Xe(e,t+11)){case 114:return re+e+Ve+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+Ve+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+Ve+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return re+e+Ve+e+e}return e}function yr(e,t){for(var n="",r=Vu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Ty(e,t,n,r){switch(e.type){case my:case Uu:return e.return=e.return||e.value;case _m:return"";case Tm:return e.return=e.value+"{"+yr(e.children,r)+"}";case Bu:e.value=e.props.join(",")}return bt(n=yr(e.children,r))?e.return=e.value+"{"+n+"}":""}function zy(e){var t=Vu(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Ry(e){return function(t){t.root||(t=t.return)&&e(t)}}function Oy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Uu:e.return=bm(e.value,e.length);break;case Tm:return yr([Wr(e,{value:oe(e.value,"@","@"+re)})],r);case Bu:if(e.length)return xy(e.props,function(o){switch(vy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yr([Wr(e,{props:[oe(o,/:(read-\w+)/,":"+ll+"$1")]})],r);case"::placeholder":return yr([Wr(e,{props:[oe(o,/:(plac\w+)/,":"+re+"input-$1")]}),Wr(e,{props:[oe(o,/:(plac\w+)/,":"+ll+"$1")]}),Wr(e,{props:[oe(o,/:(plac\w+)/,Ve+"input-$1")]})],r)}return""})}}var Ny=function(t,n,r){for(var o=0,i=0;o=i,i=Ft(),o===38&&i===12&&(n[r]=1),!Ro(i);)at();return Do(t,rt)},by=function(t,n){var r=-1,o=44;do switch(Ro(o)){case 0:o===38&&Ft()===12&&(n[r]=1),t[r]+=Ny(rt-1,n,r);break;case 2:t[r]+=zi(o);break;case 4:if(o===44){t[++r]=Ft()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Wl(o)}while(o=at());return t},Ay=function(t,n){return Nm(by(Om(t),n))},Ed=new WeakMap,Iy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ed.get(r))&&!o){Ed.set(t,!0);for(var i=[],l=Ay(n,i),s=r.props,a=0,u=0;a<l.length;a++)for(var p=0;p<s.length;p++,u++)t.props[u]=i[a]?l[a].replace(/&\f/g,s[p]):s[p]+" "+l[a]}}},My=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}},Ly=[Oy],jy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var C=g.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||Ly,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var C=g.getAttribute("data-emotion").split(" "),d=1;d<C.length;d++)i[C[d]]=!0;s.push(g)});var a,u=[Iy,My];{var p,m=[Ty,Ry(function(g){p.insert(g)})],f=zy(u.concat(o,m)),x=function(C){return yr(Py(C),f)};a=function(C,d,c,h){p=c,x(C?C+"{"+d.styles+"}":d.styles),h&&(y.inserted[d.name]=!0)}}var y={key:n,sheet:new py({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return y.sheet.hydrate(s),y},Fy=!0;function Dy(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Am=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Fy===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},By=function(t,n,r){Am(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Uy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Vy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wy=/[A-Z]|^ms/g,Hy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Im=function(t){return t.charCodeAt(1)===45},$d=function(t){return t!=null&&typeof t!="boolean"},Ts=sm(function(e){return Im(e)?e:e.replace(Wy,"-$&").toLowerCase()}),Pd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Hy,function(r,o,i){return At={name:o,styles:i,next:At},o})}return Vy[t]!==1&&!Im(t)&&typeof n=="number"&&n!==0?n+"px":n};function Oo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return At={name:n.name,styles:n.styles,next:At},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)At={name:r.name,styles:r.styles,next:At},r=r.next;var o=n.styles+";";return o}return Ky(e,t,n)}case"function":{if(e!==void 0){var i=At,l=n(e);return At=i,Oo(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Ky(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Oo(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":$d(l)&&(r+=Ts(i)+":"+Pd(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)$d(l[s])&&(r+=Ts(i)+":"+Pd(i,l[s])+";");else{var a=Oo(e,t,l);switch(i){case"animation":case"animationName":{r+=Ts(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var _d=/label:\s*([^\s;\n{]+)\s*(;|$)/g,At,Mm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";At=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Oo(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Oo(r,n,t[s]),o&&(i+=l[s]);_d.lastIndex=0;for(var a="",u;(u=_d.exec(i))!==null;)a+="-"+u[1];var p=Uy(i)+a;return{name:p,styles:i,next:At}},Lm=b.exports.createContext(typeof HTMLElement<"u"?jy({key:"css"}):null);Lm.Provider;var Gy=function(t){return b.exports.forwardRef(function(n,r){var o=b.exports.useContext(Lm);return t(n,o,r)})},Qy=b.exports.createContext({});vr["useInsertionEffect"]&&vr["useInsertionEffect"];vr["useInsertionEffect"]?vr["useInsertionEffect"]:b.exports.useLayoutEffect;function Yy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Mm(t)}var Wu=function(){var t=Yy.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Xy=Ea,Zy=function(t){return t!=="theme"},Td=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Xy:Zy},zd=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(l){return t.__emotion_forwardProp(l)&&i(l)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Jy=vr["useInsertionEffect"]?vr["useInsertionEffect"]:function(t){t()};function qy(e){Jy(e)}var ev=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Am(n,r,o),qy(function(){return By(n,r,o)}),null},tv=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,l;n!==void 0&&(i=n.label,l=n.target);var s=zd(t,n,r),a=s||Td(o),u=!a("as");return function(){var p=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&m.push("label:"+i+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{m.push(p[0][0]);for(var f=p.length,x=1;x<f;x++)m.push(p[x],p[0][x])}var y=Gy(function(g,C,d){var c=u&&g.as||o,h="",v=[],S=g;if(g.theme==null){S={};for(var $ in g)S[$]=g[$];S.theme=b.exports.useContext(Qy)}typeof g.className=="string"?h=Dy(C.registered,v,g.className):g.className!=null&&(h=g.className+" ");var E=Mm(m.concat(v),C.registered,S);h+=C.key+"-"+E.name,l!==void 0&&(h+=" "+l);var T=u&&s===void 0?Td(c):a,L={};for(var z in g)u&&z==="as"||T(z)&&(L[z]=g[z]);return L.className=h,L.ref=d,b.exports.createElement(b.exports.Fragment,null,b.exports.createElement(ev,{cache:C,serialized:E,isStringTag:typeof c=="string"}),b.exports.createElement(c,L))});return y.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=o,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(g,C){return e(g,j({},n,C,{shouldForwardProp:zd(y,C,!0)})).apply(void 0,m)},y}},nv=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Na=tv.bind();nv.forEach(function(e){Na[e]=Na(e)});const rv=Na;/** @license MUI v5.10.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ov(e,t){return rv(e,t)}const iv=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};function Xr(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Kt(e,t,n={clone:!0}){const r=n.clone?j({},e):e;return Xr(e)&&Xr(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(Xr(t[o])&&o in e&&Xr(e[o])?r[o]=Kt(e[o],t[o],n):r[o]=t[o])}),r}function Tr(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function be(e){if(typeof e!="string")throw new Error(Tr(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Rd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const lv=typeof window<"u"?b.exports.useLayoutEffect:b.exports.useEffect,sv=lv;function pi(e){const t=b.exports.useRef(e);return sv(()=>{t.current=e}),b.exports.useCallback((...n)=>(0,t.current)(...n),[])}function Oi(e,t){return b.exports.useMemo(()=>e==null&&t==null?null:n=>{Rd(e,n),Rd(t,n)},[e,t])}let Gl=!0,ba=!1,Od;const av={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function uv(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&av[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function cv(e){e.metaKey||e.altKey||e.ctrlKey||(Gl=!0)}function zs(){Gl=!1}function dv(){this.visibilityState==="hidden"&&ba&&(Gl=!0)}function fv(e){e.addEventListener("keydown",cv,!0),e.addEventListener("mousedown",zs,!0),e.addEventListener("pointerdown",zs,!0),e.addEventListener("touchstart",zs,!0),e.addEventListener("visibilitychange",dv,!0)}function pv(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Gl||uv(t)}function jm(){const e=b.exports.useCallback(o=>{o!=null&&fv(o.ownerDocument)},[]),t=b.exports.useRef(!1);function n(){return t.current?(ba=!0,window.clearTimeout(Od),Od=window.setTimeout(()=>{ba=!1},100),t.current=!1,!0):!1}function r(o){return pv(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function Fm(e,t){const n=j({},t);return Object.keys(e).forEach(r=>{n[r]===void 0&&(n[r]=e[r])}),n}function Ql(e,t,n){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,l)=>(l&&(i.push(t(l)),n&&n[l]&&i.push(n[l])),i),[]).join(" ")}),r}const Nd=e=>e,mv=()=>{let e=Nd;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Nd}}},hv=mv(),gv=hv,yv={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Bo(e,t,n="Mui"){const r=yv[t];return r?`${n}-${r}`:`${gv.generate(e)}-${t}`}function Uo(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Bo(e,o,n)}),r}function ao(e,t){return t?Kt(e,t,{clone:!1}):e}const Hu={xs:0,sm:600,md:900,lg:1200,xl:1536},bd={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Hu[e]}px)`};function kn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||bd;return t.reduce((l,s,a)=>(l[i.up(i.keys[a])]=n(t[a]),l),{})}if(typeof t=="object"){const i=r.breakpoints||bd;return Object.keys(t).reduce((l,s)=>{if(Object.keys(i.values||Hu).indexOf(s)!==-1){const a=i.up(s);l[a]=n(t[s],s)}else{const a=s;l[a]=t[a]}return l},{})}return n(t)}function vv(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function xv(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function No(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Ad(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=No(e,n)||r,t&&(o=t(o)),o}function M(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=l=>{if(l[t]==null)return null;const s=l[t],a=l.theme,u=No(a,r)||{};return kn(l,s,m=>{let f=Ad(u,o,m);return m===f&&typeof m=="string"&&(f=Ad(u,o,`${t}${m==="default"?"":be(m)}`,m)),n===!1?f:{[n]:f}})};return i.propTypes={},i.filterProps=[t],i}function Cn(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?ao(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function wv(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const Sv={m:"margin",p:"padding"},kv={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Id={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Cv=wv(e=>{if(e.length>2)if(Id[e])e=Id[e];else return[e];const[t,n]=e.split(""),r=Sv[t],o=kv[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Ev=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],$v=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Dm=[...Ev,...$v];function Vo(e,t,n,r){var o;const i=(o=No(e,t,!1))!=null?o:n;return typeof i=="number"?l=>typeof l=="string"?l:i*l:Array.isArray(i)?l=>typeof l=="string"?l:i[l]:typeof i=="function"?i:()=>{}}function Bm(e){return Vo(e,"spacing",8)}function Wo(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Pv(e,t){return n=>e.reduce((r,o)=>(r[o]=Wo(t,n),r),{})}function _v(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=Cv(n),i=Pv(o,r),l=e[n];return kn(e,l,i)}function Tv(e,t){const n=Bm(e.theme);return Object.keys(e).map(r=>_v(e,t,r,n)).reduce(ao,{})}function Yl(e){return Tv(e,Dm)}Yl.propTypes={};Yl.filterProps=Dm;function Ho(e){return typeof e!="number"?e:`${e}px solid`}const zv=M({prop:"border",themeKey:"borders",transform:Ho}),Rv=M({prop:"borderTop",themeKey:"borders",transform:Ho}),Ov=M({prop:"borderRight",themeKey:"borders",transform:Ho}),Nv=M({prop:"borderBottom",themeKey:"borders",transform:Ho}),bv=M({prop:"borderLeft",themeKey:"borders",transform:Ho}),Av=M({prop:"borderColor",themeKey:"palette"}),Iv=M({prop:"borderTopColor",themeKey:"palette"}),Mv=M({prop:"borderRightColor",themeKey:"palette"}),Lv=M({prop:"borderBottomColor",themeKey:"palette"}),jv=M({prop:"borderLeftColor",themeKey:"palette"}),Ku=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Vo(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Wo(t,r)});return kn(e,e.borderRadius,n)}return null};Ku.propTypes={};Ku.filterProps=["borderRadius"];const Fv=Cn(zv,Rv,Ov,Nv,bv,Av,Iv,Mv,Lv,jv,Ku),Um=Fv,Dv=M({prop:"displayPrint",cssProperty:!1,transform:e=>({"@media print":{display:e}})}),Bv=M({prop:"display"}),Uv=M({prop:"overflow"}),Vv=M({prop:"textOverflow"}),Wv=M({prop:"visibility"}),Hv=M({prop:"whiteSpace"}),Vm=Cn(Dv,Bv,Uv,Vv,Wv,Hv),Kv=M({prop:"flexBasis"}),Gv=M({prop:"flexDirection"}),Qv=M({prop:"flexWrap"}),Yv=M({prop:"justifyContent"}),Xv=M({prop:"alignItems"}),Zv=M({prop:"alignContent"}),Jv=M({prop:"order"}),qv=M({prop:"flex"}),e2=M({prop:"flexGrow"}),t2=M({prop:"flexShrink"}),n2=M({prop:"alignSelf"}),r2=M({prop:"justifyItems"}),o2=M({prop:"justifySelf"}),i2=Cn(Kv,Gv,Qv,Yv,Xv,Zv,Jv,qv,e2,t2,n2,r2,o2),Wm=i2,Gu=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Vo(e.theme,"spacing",8),n=r=>({gap:Wo(t,r)});return kn(e,e.gap,n)}return null};Gu.propTypes={};Gu.filterProps=["gap"];const Qu=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Vo(e.theme,"spacing",8),n=r=>({columnGap:Wo(t,r)});return kn(e,e.columnGap,n)}return null};Qu.propTypes={};Qu.filterProps=["columnGap"];const Yu=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Vo(e.theme,"spacing",8),n=r=>({rowGap:Wo(t,r)});return kn(e,e.rowGap,n)}return null};Yu.propTypes={};Yu.filterProps=["rowGap"];const l2=M({prop:"gridColumn"}),s2=M({prop:"gridRow"}),a2=M({prop:"gridAutoFlow"}),u2=M({prop:"gridAutoColumns"}),c2=M({prop:"gridAutoRows"}),d2=M({prop:"gridTemplateColumns"}),f2=M({prop:"gridTemplateRows"}),p2=M({prop:"gridTemplateAreas"}),m2=M({prop:"gridArea"}),h2=Cn(Gu,Qu,Yu,l2,s2,a2,u2,c2,d2,f2,p2,m2),Hm=h2,g2=M({prop:"color",themeKey:"palette"}),y2=M({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),v2=M({prop:"backgroundColor",themeKey:"palette"}),x2=Cn(g2,y2,v2),Km=x2,w2=M({prop:"position"}),S2=M({prop:"zIndex",themeKey:"zIndex"}),k2=M({prop:"top"}),C2=M({prop:"right"}),E2=M({prop:"bottom"}),$2=M({prop:"left"}),Gm=Cn(w2,S2,k2,C2,E2,$2),P2=M({prop:"boxShadow",themeKey:"shadows"}),Qm=P2;function En(e){return e<=1&&e!==0?`${e*100}%`:e}const _2=M({prop:"width",transform:En}),Ym=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o,i;return{maxWidth:((r=e.theme)==null||(o=r.breakpoints)==null||(i=o.values)==null?void 0:i[n])||Hu[n]||En(n)}};return kn(e,e.maxWidth,t)}return null};Ym.filterProps=["maxWidth"];const T2=M({prop:"minWidth",transform:En}),z2=M({prop:"height",transform:En}),R2=M({prop:"maxHeight",transform:En}),O2=M({prop:"minHeight",transform:En});M({prop:"size",cssProperty:"width",transform:En});M({prop:"size",cssProperty:"height",transform:En});const N2=M({prop:"boxSizing"}),b2=Cn(_2,Ym,T2,z2,R2,O2,N2),Xm=b2,A2=M({prop:"fontFamily",themeKey:"typography"}),I2=M({prop:"fontSize",themeKey:"typography"}),M2=M({prop:"fontStyle",themeKey:"typography"}),L2=M({prop:"fontWeight",themeKey:"typography"}),j2=M({prop:"letterSpacing"}),F2=M({prop:"textTransform"}),D2=M({prop:"lineHeight"}),B2=M({prop:"textAlign"}),U2=M({prop:"typography",cssProperty:!1,themeKey:"typography"}),V2=Cn(U2,A2,I2,M2,L2,j2,D2,B2,F2),Zm=V2,Md={borders:Um.filterProps,display:Vm.filterProps,flexbox:Wm.filterProps,grid:Hm.filterProps,positions:Gm.filterProps,palette:Km.filterProps,shadows:Qm.filterProps,sizing:Xm.filterProps,spacing:Yl.filterProps,typography:Zm.filterProps},Jm={borders:Um,display:Vm,flexbox:Wm,grid:Hm,positions:Gm,palette:Km,shadows:Qm,sizing:Xm,spacing:Yl,typography:Zm},W2=Object.keys(Md).reduce((e,t)=>(Md[t].forEach(n=>{e[n]=Jm[t]}),e),{});function H2(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function K2(e,t){return typeof e=="function"?e(t):e}function G2(e=Jm){const t=Object.keys(e).reduce((o,i)=>(e[i].filterProps.forEach(l=>{o[l]=e[i]}),o),{});function n(o,i,l){const s={[o]:i,theme:l},a=t[o];return a?a(s):{[o]:i}}function r(o){const{sx:i,theme:l={}}=o||{};if(!i)return null;function s(a){let u=a;if(typeof a=="function")u=a(l);else if(typeof a!="object")return a;if(!u)return null;const p=vv(l.breakpoints),m=Object.keys(p);let f=p;return Object.keys(u).forEach(x=>{const y=K2(u[x],l);if(y!=null)if(typeof y=="object")if(t[x])f=ao(f,n(x,y,l));else{const g=kn({theme:l},y,C=>({[x]:C}));H2(g,y)?f[x]=r({sx:y,theme:l}):f=ao(f,g)}else f=ao(f,n(x,y,l))}),xv(m,f)}return Array.isArray(i)?i.map(s):s(i)}return r}const qm=G2();qm.filterProps=["sx"];const Q2=qm,Y2=["sx"],X2=e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach(n=>{W2[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]}),t};function Z2(e){const{sx:t}=e,n=Ie(e,Y2),{systemProps:r,otherProps:o}=X2(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...l)=>{const s=t(...l);return Xr(s)?j({},r,s):r}:i=j({},r,t),j({},o,{sx:i})}function eh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=eh(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ze(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=eh(e))&&(r&&(r+=" "),r+=t);return r}const J2=["values","unit","step"],q2=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>j({},n,{[r.key]:r.val}),{})};function ex(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Ie(e,J2),i=q2(t),l=Object.keys(i);function s(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function a(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function u(f,x){const y=l.indexOf(x);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(y!==-1&&typeof t[l[y]]=="number"?t[l[y]]:x)-r/100}${n})`}function p(f){return l.indexOf(f)+1<l.length?u(f,l[l.indexOf(f)+1]):s(f)}function m(f){const x=l.indexOf(f);return x===0?s(l[1]):x===l.length-1?a(l[x]):u(f,l[l.indexOf(f)+1]).replace("@media","@media not all and")}return j({keys:l,values:i,up:s,down:a,between:u,only:p,not:m,unit:n},o)}const tx={borderRadius:4},nx=tx;function rx(e=8){if(e.mui)return e;const t=Bm({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const l=t(i);return typeof l=="number"?`${l}px`:l}).join(" ");return n.mui=!0,n}const ox=["breakpoints","palette","spacing","shape"];function Xu(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,l=Ie(e,ox),s=ex(n),a=rx(o);let u=Kt({breakpoints:s,direction:"ltr",components:{},palette:j({mode:"light"},r),spacing:a,shape:j({},nx,i)},l);return u=t.reduce((p,m)=>Kt(p,m),u),u}const ix=b.exports.createContext(null),lx=ix;function sx(){return b.exports.useContext(lx)}function ax(e){return Object.keys(e).length===0}function ux(e=null){const t=sx();return!t||ax(t)?e:t}const cx=Xu();function dx(e=cx){return ux(e)}const fx=["variant"];function Ld(e){return e.length===0}function th(e){const{variant:t}=e,n=Ie(e,fx);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=Ld(r)?e[o]:be(e[o]):r+=`${Ld(r)?o:be(o)}${be(e[o].toString())}`}),r}const px=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],mx=["theme"],hx=["theme"];function Hr(e){return Object.keys(e).length===0}function gx(e){return typeof e=="string"&&e.charCodeAt(0)>96}const yx=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,vx=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(o=>{const i=th(o.props);r[i]=o.style}),r},xx=(e,t,n,r)=>{var o,i;const{ownerState:l={}}=e,s=[],a=n==null||(o=n.components)==null||(i=o[r])==null?void 0:i.variants;return a&&a.forEach(u=>{let p=!0;Object.keys(u.props).forEach(m=>{l[m]!==u.props[m]&&e[m]!==u.props[m]&&(p=!1)}),p&&s.push(t[th(u.props)])}),s};function Ni(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const wx=Xu();function Sx(e={}){const{defaultTheme:t=wx,rootShouldForwardProp:n=Ni,slotShouldForwardProp:r=Ni,styleFunctionSx:o=Q2}=e,i=l=>{const s=Hr(l.theme)?t:l.theme;return o(j({},l,{theme:s}))};return i.__mui_systemSx=!0,(l,s={})=>{iv(l,v=>v.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:a,slot:u,skipVariantsResolver:p,skipSx:m,overridesResolver:f}=s,x=Ie(s,px),y=p!==void 0?p:u&&u!=="Root"||!1,g=m||!1;let C,d=Ni;u==="Root"?d=n:u?d=r:gx(l)&&(d=void 0);const c=ov(l,j({shouldForwardProp:d,label:C},x)),h=(v,...S)=>{const $=S?S.map(z=>typeof z=="function"&&z.__emotion_real!==z?H=>{let{theme:K}=H,te=Ie(H,mx);return z(j({theme:Hr(K)?t:K},te))}:z):[];let E=v;a&&f&&$.push(z=>{const H=Hr(z.theme)?t:z.theme,K=yx(a,H);if(K){const te={};return Object.entries(K).forEach(([me,ue])=>{te[me]=typeof ue=="function"?ue(j({},z,{theme:H})):ue}),f(z,te)}return null}),a&&!y&&$.push(z=>{const H=Hr(z.theme)?t:z.theme;return xx(z,vx(a,H),H,a)}),g||$.push(i);const T=$.length-S.length;if(Array.isArray(v)&&T>0){const z=new Array(T).fill("");E=[...v,...z],E.raw=[...v.raw,...z]}else typeof v=="function"&&v.__emotion_real!==v&&(E=z=>{let{theme:H}=z,K=Ie(z,hx);return v(j({theme:Hr(H)?t:H},K))});return c(E,...$)};return c.withConfig&&(h.withConfig=c.withConfig),h}}function kx(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Fm(t.components[n].defaultProps,r)}function Cx({props:e,name:t,defaultTheme:n}){const r=dx(n);return kx({theme:r,name:t,props:e})}function Zu(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function Ex(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Un(e){if(e.type)return e;if(e.charAt(0)==="#")return Un(Ex(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Tr(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(Tr(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function Xl(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function $x(e){e=Un(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),l=(u,p=(u+n/30)%12)=>o-i*Math.max(Math.min(p-3,9-p,1),-1);let s="rgb";const a=[Math.round(l(0)*255),Math.round(l(8)*255),Math.round(l(4)*255)];return e.type==="hsla"&&(s+="a",a.push(t[3])),Xl({type:s,values:a})}function jd(e){e=Un(e);let t=e.type==="hsl"?Un($x(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Px(e,t){const n=jd(e),r=jd(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Zr(e,t){return e=Un(e),t=Zu(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Xl(e)}function _x(e,t){if(e=Un(e),t=Zu(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Xl(e)}function Tx(e,t){if(e=Un(e),t=Zu(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Xl(e)}function zx(e,t){return j({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Rx=["mode","contrastThreshold","tonalOffset"],Fd={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:To.white,default:To.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Rs={text:{primary:To.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:To.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Dd(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Tx(e.main,o):t==="dark"&&(e.dark=_x(e.main,i)))}function Ox(e="light"){return e==="dark"?{main:Qn[200],light:Qn[50],dark:Qn[400]}:{main:Qn[700],light:Qn[400],dark:Qn[800]}}function Nx(e="light"){return e==="dark"?{main:Gn[200],light:Gn[50],dark:Gn[400]}:{main:Gn[500],light:Gn[300],dark:Gn[700]}}function bx(e="light"){return e==="dark"?{main:Kn[500],light:Kn[300],dark:Kn[700]}:{main:Kn[700],light:Kn[400],dark:Kn[800]}}function Ax(e="light"){return e==="dark"?{main:Yn[400],light:Yn[300],dark:Yn[700]}:{main:Yn[700],light:Yn[500],dark:Yn[900]}}function Ix(e="light"){return e==="dark"?{main:Xn[400],light:Xn[300],dark:Xn[700]}:{main:Xn[800],light:Xn[500],dark:Xn[900]}}function Mx(e="light"){return e==="dark"?{main:Vr[400],light:Vr[300],dark:Vr[700]}:{main:"#ed6c02",light:Vr[500],dark:Vr[900]}}function Lx(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Ie(e,Rx),i=e.primary||Ox(t),l=e.secondary||Nx(t),s=e.error||bx(t),a=e.info||Ax(t),u=e.success||Ix(t),p=e.warning||Mx(t);function m(g){return Px(g,Rs.text.primary)>=n?Rs.text.primary:Fd.text.primary}const f=({color:g,name:C,mainShade:d=500,lightShade:c=300,darkShade:h=700})=>{if(g=j({},g),!g.main&&g[d]&&(g.main=g[d]),!g.hasOwnProperty("main"))throw new Error(Tr(11,C?` (${C})`:"",d));if(typeof g.main!="string")throw new Error(Tr(12,C?` (${C})`:"",JSON.stringify(g.main)));return Dd(g,"light",c,r),Dd(g,"dark",h,r),g.contrastText||(g.contrastText=m(g.main)),g},x={dark:Rs,light:Fd};return Kt(j({common:j({},To),mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:l,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:s,name:"error"}),warning:f({color:p,name:"warning"}),info:f({color:a,name:"info"}),success:f({color:u,name:"success"}),grey:cy,contrastThreshold:n,getContrastText:m,augmentColor:f,tonalOffset:r},x[t]),o)}const jx=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Fx(e){return Math.round(e*1e5)/1e5}const Bd={textTransform:"uppercase"},Ud='"Roboto", "Helvetica", "Arial", sans-serif';function Dx(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Ud,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:l=400,fontWeightMedium:s=500,fontWeightBold:a=700,htmlFontSize:u=16,allVariants:p,pxToRem:m}=n,f=Ie(n,jx),x=o/14,y=m||(d=>`${d/u*x}rem`),g=(d,c,h,v,S)=>j({fontFamily:r,fontWeight:d,fontSize:y(c),lineHeight:h},r===Ud?{letterSpacing:`${Fx(v/c)}em`}:{},S,p),C={h1:g(i,96,1.167,-1.5),h2:g(i,60,1.2,-.5),h3:g(l,48,1.167,0),h4:g(l,34,1.235,.25),h5:g(l,24,1.334,0),h6:g(s,20,1.6,.15),subtitle1:g(l,16,1.75,.15),subtitle2:g(s,14,1.57,.1),body1:g(l,16,1.5,.15),body2:g(l,14,1.43,.15),button:g(s,14,1.75,.4,Bd),caption:g(l,12,1.66,.4),overline:g(l,12,2.66,1,Bd)};return Kt(j({htmlFontSize:u,pxToRem:y,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:l,fontWeightMedium:s,fontWeightBold:a},C),f,{clone:!1})}const Bx=.2,Ux=.14,Vx=.12;function he(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Bx})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ux})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Vx})`].join(",")}const Wx=["none",he(0,2,1,-1,0,1,1,0,0,1,3,0),he(0,3,1,-2,0,2,2,0,0,1,5,0),he(0,3,3,-2,0,3,4,0,0,1,8,0),he(0,2,4,-1,0,4,5,0,0,1,10,0),he(0,3,5,-1,0,5,8,0,0,1,14,0),he(0,3,5,-1,0,6,10,0,0,1,18,0),he(0,4,5,-2,0,7,10,1,0,2,16,1),he(0,5,5,-3,0,8,10,1,0,3,14,2),he(0,5,6,-3,0,9,12,1,0,3,16,2),he(0,6,6,-3,0,10,14,1,0,4,18,3),he(0,6,7,-4,0,11,15,1,0,4,20,3),he(0,7,8,-4,0,12,17,2,0,5,22,4),he(0,7,8,-4,0,13,19,2,0,5,24,4),he(0,7,9,-4,0,14,21,2,0,5,26,4),he(0,8,9,-5,0,15,22,2,0,6,28,5),he(0,8,10,-5,0,16,24,2,0,6,30,5),he(0,8,11,-5,0,17,26,2,0,6,32,5),he(0,9,11,-5,0,18,28,2,0,7,34,6),he(0,9,12,-6,0,19,29,2,0,7,36,6),he(0,10,13,-6,0,20,31,3,0,8,38,7),he(0,10,13,-6,0,21,33,3,0,8,40,7),he(0,10,14,-6,0,22,35,3,0,8,42,7),he(0,11,14,-7,0,23,36,3,0,9,44,8),he(0,11,15,-7,0,24,38,3,0,9,46,8)],Hx=Wx,Kx=["duration","easing","delay"],Gx={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Qx={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Vd(e){return`${Math.round(e)}ms`}function Yx(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Xx(e){const t=j({},Gx,e.easing),n=j({},Qx,e.duration);return j({getAutoHeightDuration:Yx,create:(o=["all"],i={})=>{const{duration:l=n.standard,easing:s=t.easeInOut,delay:a=0}=i;return Ie(i,Kx),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof l=="string"?l:Vd(l)} ${s} ${typeof a=="string"?a:Vd(a)}`).join(",")}},e,{easing:t,duration:n})}const Zx={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Jx=Zx,qx=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function ew(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,l=Ie(e,qx);if(e.vars)throw new Error(Tr(18));const s=Lx(r),a=Xu(e);let u=Kt(a,{mixins:zx(a.breakpoints,n),palette:s,shadows:Hx.slice(),typography:Dx(s,i),transitions:Xx(o),zIndex:j({},Jx)});return u=Kt(u,l),u=t.reduce((p,m)=>Kt(p,m),u),u}const tw=ew(),nh=tw;function Ko({props:e,name:t}){return Cx({props:e,name:t,defaultTheme:nh})}const rh=e=>Ni(e)&&e!=="classes",nw=Sx({defaultTheme:nh,rootShouldForwardProp:rh}),$n=nw;function Aa(e,t){return Aa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Aa(e,t)}function rw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Aa(e,t)}const Wd=ut.createContext(null);function ow(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ju(e,t){var n=function(i){return t&&b.exports.isValidElement(i)?t(i):i},r=Object.create(null);return e&&b.exports.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function iw(e,t){e=e||{},t=t||{};function n(p){return p in t?t[p]:e[p]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var l,s={};for(var a in t){if(r[a])for(l=0;l<r[a].length;l++){var u=r[a][l];s[r[a][l]]=n(u)}s[a]=n(a)}for(l=0;l<o.length;l++)s[o[l]]=n(o[l]);return s}function bn(e,t,n){return n[t]!=null?n[t]:e.props[t]}function lw(e,t){return Ju(e.children,function(n){return b.exports.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:bn(n,"appear",e),enter:bn(n,"enter",e),exit:bn(n,"exit",e)})})}function sw(e,t,n){var r=Ju(e.children),o=iw(t,r);return Object.keys(o).forEach(function(i){var l=o[i];if(!!b.exports.isValidElement(l)){var s=i in t,a=i in r,u=t[i],p=b.exports.isValidElement(u)&&!u.props.in;a&&(!s||p)?o[i]=b.exports.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:bn(l,"exit",e),enter:bn(l,"enter",e)}):!a&&s&&!p?o[i]=b.exports.cloneElement(l,{in:!1}):a&&s&&b.exports.isValidElement(u)&&(o[i]=b.exports.cloneElement(l,{onExited:n.bind(null,l),in:u.props.in,exit:bn(l,"exit",e),enter:bn(l,"enter",e)}))}}),o}var aw=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},uw={component:"div",childFactory:function(t){return t}},qu=function(e){rw(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var l=i.handleExited.bind(ow(i));return i.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var l=i.children,s=i.handleExited,a=i.firstRender;return{children:a?lw(o,s):sw(o,l,s),firstRender:!1}},n.handleExited=function(o,i){var l=Ju(this.props.children);o.key in l||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(s){var a=j({},s.children);return delete a[o.key],{children:a}}))},n.render=function(){var o=this.props,i=o.component,l=o.childFactory,s=Ie(o,["component","childFactory"]),a=this.state.contextValue,u=aw(this.state.children).map(l);return delete s.appear,delete s.enter,delete s.exit,i===null?k(Wd.Provider,{value:a,children:u}):k(Wd.Provider,{value:a,children:k(i,{...s,children:u})})},t}(ut.Component);qu.propTypes={};qu.defaultProps=uw;const cw=qu;function dw(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:l,in:s,onExited:a,timeout:u}=e,[p,m]=b.exports.useState(!1),f=Ze(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),x={width:l,height:l,top:-(l/2)+i,left:-(l/2)+o},y=Ze(n.child,p&&n.childLeaving,r&&n.childPulsate);return!s&&!p&&m(!0),b.exports.useEffect(()=>{if(!s&&a!=null){const g=setTimeout(a,u);return()=>{clearTimeout(g)}}},[a,s,u]),k("span",{className:f,style:x,children:k("span",{className:y})})}const fw=Uo("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ht=fw,pw=["center","classes","className"];let Zl=e=>e,Hd,Kd,Gd,Qd;const Ia=550,mw=80,hw=Wu(Hd||(Hd=Zl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gw=Wu(Kd||(Kd=Zl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),yw=Wu(Gd||(Gd=Zl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),vw=$n("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xw=$n(dw,{name:"MuiTouchRipple",slot:"Ripple"})(Qd||(Qd=Zl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),ht.rippleVisible,hw,Ia,({theme:e})=>e.transitions.easing.easeInOut,ht.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,ht.child,ht.childLeaving,gw,Ia,({theme:e})=>e.transitions.easing.easeInOut,ht.childPulsate,yw,({theme:e})=>e.transitions.easing.easeInOut),ww=b.exports.forwardRef(function(t,n){const r=Ko({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:l}=r,s=Ie(r,pw),[a,u]=b.exports.useState([]),p=b.exports.useRef(0),m=b.exports.useRef(null);b.exports.useEffect(()=>{m.current&&(m.current(),m.current=null)},[a]);const f=b.exports.useRef(!1),x=b.exports.useRef(null),y=b.exports.useRef(null),g=b.exports.useRef(null);b.exports.useEffect(()=>()=>{clearTimeout(x.current)},[]);const C=b.exports.useCallback(v=>{const{pulsate:S,rippleX:$,rippleY:E,rippleSize:T,cb:L}=v;u(z=>[...z,k(xw,{classes:{ripple:Ze(i.ripple,ht.ripple),rippleVisible:Ze(i.rippleVisible,ht.rippleVisible),ripplePulsate:Ze(i.ripplePulsate,ht.ripplePulsate),child:Ze(i.child,ht.child),childLeaving:Ze(i.childLeaving,ht.childLeaving),childPulsate:Ze(i.childPulsate,ht.childPulsate)},timeout:Ia,pulsate:S,rippleX:$,rippleY:E,rippleSize:T},p.current)]),p.current+=1,m.current=L},[i]),d=b.exports.useCallback((v={},S={},$)=>{const{pulsate:E=!1,center:T=o||S.pulsate,fakeElement:L=!1}=S;if((v==null?void 0:v.type)==="mousedown"&&f.current){f.current=!1;return}(v==null?void 0:v.type)==="touchstart"&&(f.current=!0);const z=L?null:g.current,H=z?z.getBoundingClientRect():{width:0,height:0,left:0,top:0};let K,te,me;if(T||v===void 0||v.clientX===0&&v.clientY===0||!v.clientX&&!v.touches)K=Math.round(H.width/2),te=Math.round(H.height/2);else{const{clientX:ue,clientY:Pe}=v.touches&&v.touches.length>0?v.touches[0]:v;K=Math.round(ue-H.left),te=Math.round(Pe-H.top)}if(T)me=Math.sqrt((2*H.width**2+H.height**2)/3),me%2===0&&(me+=1);else{const ue=Math.max(Math.abs((z?z.clientWidth:0)-K),K)*2+2,Pe=Math.max(Math.abs((z?z.clientHeight:0)-te),te)*2+2;me=Math.sqrt(ue**2+Pe**2)}v!=null&&v.touches?y.current===null&&(y.current=()=>{C({pulsate:E,rippleX:K,rippleY:te,rippleSize:me,cb:$})},x.current=setTimeout(()=>{y.current&&(y.current(),y.current=null)},mw)):C({pulsate:E,rippleX:K,rippleY:te,rippleSize:me,cb:$})},[o,C]),c=b.exports.useCallback(()=>{d({},{pulsate:!0})},[d]),h=b.exports.useCallback((v,S)=>{if(clearTimeout(x.current),(v==null?void 0:v.type)==="touchend"&&y.current){y.current(),y.current=null,x.current=setTimeout(()=>{h(v,S)});return}y.current=null,u($=>$.length>0?$.slice(1):$),m.current=S},[]);return b.exports.useImperativeHandle(n,()=>({pulsate:c,start:d,stop:h}),[c,d,h]),k(vw,j({className:Ze(ht.root,i.root,l),ref:g},s,{children:k(cw,{component:null,exit:!0,children:a})}))}),Sw=ww;function kw(e){return Bo("MuiButtonBase",e)}const Cw=Uo("MuiButtonBase",["root","disabled","focusVisible"]),Ew=Cw,$w=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Pw=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,l=Ql({root:["root",t&&"disabled",n&&"focusVisible"]},kw,o);return n&&r&&(l.root+=` ${r}`),l},_w=$n("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ew.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Tw=b.exports.forwardRef(function(t,n){const r=Ko({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:l,className:s,component:a="button",disabled:u=!1,disableRipple:p=!1,disableTouchRipple:m=!1,focusRipple:f=!1,LinkComponent:x="a",onBlur:y,onClick:g,onContextMenu:C,onDragLeave:d,onFocus:c,onFocusVisible:h,onKeyDown:v,onKeyUp:S,onMouseDown:$,onMouseLeave:E,onMouseUp:T,onTouchEnd:L,onTouchMove:z,onTouchStart:H,tabIndex:K=0,TouchRippleProps:te,touchRippleRef:me,type:ue}=r,Pe=Ie(r,$w),Se=b.exports.useRef(null),_=b.exports.useRef(null),D=Oi(_,me),{isFocusVisibleRef:U,onFocus:ie,onBlur:O,ref:A}=jm(),[N,F]=b.exports.useState(!1);u&&N&&F(!1),b.exports.useImperativeHandle(o,()=>({focusVisible:()=>{F(!0),Se.current.focus()}}),[]);const[w,G]=b.exports.useState(!1);b.exports.useEffect(()=>{G(!0)},[]);const R=w&&!p&&!u;b.exports.useEffect(()=>{N&&f&&!p&&w&&_.current.pulsate()},[p,f,N,w]);function J(W,ec,sh=m){return pi(tc=>(ec&&ec(tc),!sh&&_.current&&_.current[W](tc),!0))}const q=J("start",$),ne=J("stop",C),V=J("stop",d),_e=J("stop",T),De=J("stop",W=>{N&&W.preventDefault(),E&&E(W)}),Y=J("start",H),Oe=J("stop",L),ee=J("stop",z),Te=J("stop",W=>{O(W),U.current===!1&&F(!1),y&&y(W)},!1),Pn=pi(W=>{Se.current||(Se.current=W.currentTarget),ie(W),U.current===!0&&(F(!0),h&&h(W)),c&&c(W)}),ke=()=>{const W=Se.current;return a&&a!=="button"&&!(W.tagName==="A"&&W.href)},Jt=b.exports.useRef(!1),_n=pi(W=>{f&&!Jt.current&&N&&_.current&&W.key===" "&&(Jt.current=!0,_.current.stop(W,()=>{_.current.start(W)})),W.target===W.currentTarget&&ke()&&W.key===" "&&W.preventDefault(),v&&v(W),W.target===W.currentTarget&&ke()&&W.key==="Enter"&&!u&&(W.preventDefault(),g&&g(W))}),ot=pi(W=>{f&&W.key===" "&&_.current&&N&&!W.defaultPrevented&&(Jt.current=!1,_.current.stop(W,()=>{_.current.pulsate(W)})),S&&S(W),g&&W.target===W.currentTarget&&ke()&&W.key===" "&&!W.defaultPrevented&&g(W)});let B=a;B==="button"&&(Pe.href||Pe.to)&&(B=x);const ce={};B==="button"?(ce.type=ue===void 0?"button":ue,ce.disabled=u):(!Pe.href&&!Pe.to&&(ce.role="button"),u&&(ce["aria-disabled"]=u));const br=Oi(A,Se),Ar=Oi(n,br),Ct=j({},r,{centerRipple:i,component:a,disabled:u,disableRipple:p,disableTouchRipple:m,focusRipple:f,tabIndex:K,focusVisible:N}),lh=Pw(Ct);return X(_w,j({as:B,className:Ze(lh.root,s),ownerState:Ct,onBlur:Te,onClick:g,onContextMenu:ne,onFocus:Pn,onKeyDown:_n,onKeyUp:ot,onMouseDown:q,onMouseLeave:De,onMouseUp:_e,onDragLeave:V,onTouchEnd:Oe,onTouchMove:ee,onTouchStart:Y,ref:Ar,tabIndex:u?-1:K,type:ue},ce,Pe,{children:[l,R?k(Sw,j({ref:D,center:i},te)):null]}))}),zw=Tw;function Rw(e){return Bo("MuiTypography",e)}Uo("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Ow=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Nw=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:l}=e,s={root:["root",i,e.align!=="inherit"&&`align${be(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return Ql(s,Rw,l)},bw=$n("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${be(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>j({margin:0},t.variant&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Yd={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Aw={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Iw=e=>Aw[e]||e,Mw=b.exports.forwardRef(function(t,n){const r=Ko({props:t,name:"MuiTypography"}),o=Iw(r.color),i=Z2(j({},r,{color:o})),{align:l="inherit",className:s,component:a,gutterBottom:u=!1,noWrap:p=!1,paragraph:m=!1,variant:f="body1",variantMapping:x=Yd}=i,y=Ie(i,Ow),g=j({},i,{align:l,color:o,className:s,component:a,gutterBottom:u,noWrap:p,paragraph:m,variant:f,variantMapping:x}),C=a||(m?"p":x[f]||Yd[f])||"span",d=Nw(g);return k(bw,j({as:C,ref:n,ownerState:g,className:Ze(d.root,s)},y))}),Lw=Mw;function jw(e){return Bo("MuiButton",e)}const Fw=Uo("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),mi=Fw,Dw=b.exports.createContext({}),Bw=Dw,Uw=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Vw=["root"],Ww=e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:i,classes:l}=e,s={root:["root",i,`${i}${be(t)}`,`size${be(o)}`,`${i}Size${be(o)}`,t==="inherit"&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${be(o)}`],endIcon:["endIcon",`iconSize${be(o)}`]},a=Ql(s,jw,l);return j({},l,a)},oh=e=>j({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Hw=$n(zw,{shouldForwardProp:e=>rh(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${be(n.color)}`],t[`size${be(n.size)}`],t[`${n.variant}Size${be(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;return j({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":j({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:Zr(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zr(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zr(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":j({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${mi.focusVisible}`]:j({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${mi.disabled}`]:j({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="outlined"&&t.color==="secondary"&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${Zr(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${mi.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${mi.disabled}`]:{boxShadow:"none"}}),Kw=$n("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${be(n.size)}`]]}})(({ownerState:e})=>j({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},oh(e))),Gw=$n("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${be(n.size)}`]]}})(({ownerState:e})=>j({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},oh(e))),Qw=b.exports.forwardRef(function(t,n){const r=b.exports.useContext(Bw),o=Fm(r,t),i=Ko({props:o,name:"MuiButton"}),{children:l,color:s="primary",component:a="button",className:u,disabled:p=!1,disableElevation:m=!1,disableFocusRipple:f=!1,endIcon:x,focusVisibleClassName:y,fullWidth:g=!1,size:C="medium",startIcon:d,type:c,variant:h="text"}=i,v=Ie(i,Uw),S=j({},i,{color:s,component:a,disabled:p,disableElevation:m,disableFocusRipple:f,fullWidth:g,size:C,type:c,variant:h}),$=Ww(S),{root:E}=$,T=Ie($,Vw),L=d&&k(Kw,{className:T.startIcon,ownerState:S,children:d}),z=x&&k(Gw,{className:T.endIcon,ownerState:S,children:x});return X(Hw,j({ownerState:S,className:Ze(r.className,E,u),component:a,disabled:p,focusRipple:!f,focusVisibleClassName:Ze(T.focusVisible,y),ref:n,type:c},v,{classes:T,children:[L,l,z]}))}),Yw=Qw;function Xw(e){return Bo("MuiLink",e)}const Zw=Uo("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Jw=Zw,ih={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},qw=e=>ih[e]||e,eS=({theme:e,ownerState:t})=>{const n=qw(t.color),r=No(e,`palette.${n}`,!1)||t.color,o=No(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:Zr(r,.4)},tS=eS,nS=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],rS=e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${be(o)}`,n==="button"&&"button",r&&"focusVisible"]};return Ql(i,Xw,t)},oS=$n(Lw,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${be(n.underline)}`],n.component==="button"&&t.button]}})(({theme:e,ownerState:t})=>j({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&j({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:tS({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Jw.focusVisible}`]:{outline:"auto"}})),iS=b.exports.forwardRef(function(t,n){const r=Ko({props:t,name:"MuiLink"}),{className:o,color:i="primary",component:l="a",onBlur:s,onFocus:a,TypographyClasses:u,underline:p="always",variant:m="inherit",sx:f}=r,x=Ie(r,nS),{isFocusVisibleRef:y,onBlur:g,onFocus:C,ref:d}=jm(),[c,h]=b.exports.useState(!1),v=Oi(n,d),S=L=>{g(L),y.current===!1&&h(!1),s&&s(L)},$=L=>{C(L),y.current===!0&&h(!0),a&&a(L)},E=j({},r,{color:i,component:l,focusVisible:c,underline:p,variant:m}),T=rS(E);return k(oS,j({color:i,className:Ze(T.root,o),classes:u,component:l,onBlur:S,onFocus:$,ref:v,ownerState:E,variant:m,sx:[...Object.keys(ih).includes(i)?[]:[{color:i}],...Array.isArray(f)?f:[f]]},x))}),Zn=iS,lS="/shopdin/assets/logo2.5441ebaa.png",sS=mt.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 5em;
    background-color: #e48c4b;
    text-transform: uppercase;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 10vw;
    }
    Button {
      color: white;
      border-color: white;
      font-size: 1.2rem;
    }
    .btn-login {
      href {
        text-decoration: none;
        color: white;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 15vh;
    background-color: #e48c4b;
    text-transform: uppercase;
    font-size: max(0.8rem, 12px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 12vw;
    }
    Button {
      color: white;
      border-color: white;
      width: 14vw;
      font-size: max(0.8rem, 12px);
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
    width: 100%;
    height: 35vh;
    background-color: #e48c4b;
    text-transform: uppercase;
    font-size: max(0.8rem, 12px);

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    row-gap: 0.3rem;

    img {
      width: 14vw;
    }
    Button {
      color: white;
      border-color: white;
      width: 35vw;
      font-size: max(0.5rem, 12px);
      margin-bottom: 2rem;
    }
  }
`,aS=()=>(ut.useState(null),X(sS,{children:[k("img",{src:lS,alt:"logo"}),k(Zn,{href:"#inicio",color:"white",underline:"none",children:"In\xEDcio"}),k(Zn,{href:"#about",color:"white",underline:"none",children:"Sobre a Shopdin"}),k(Zn,{href:"#benf",color:"white",underline:"none",children:"Nosso Compromisso"}),k(Zn,{href:"#transparencia",color:"white",underline:"none",children:"Transpar\xEAncia"}),k(Zn,{href:"#parceiros",color:"white",underline:"none",children:"Comunidade"}),k(Zn,{href:"https://www.shopdin.com.br/",color:"white",underline:"none",children:k(Yw,{className:"btn-login",variant:"outlined",children:"Fa\xE7a seu pedido"})})]})),uS="/shopdin/assets/restaurantes.dd92274b.png",cS="/shopdin/assets/mercado.e37c5fdc.png",dS="/shopdin/assets/padaria.12e7f5e5.png",fS="/shopdin/assets/farmacia.c385ea42.png",pS="/shopdin/assets/calcados.b66950f2.png",mS="/shopdin/assets/otica.80818fd2.png",hS="/shopdin/assets/cosmeticos.6deff587.png",gS="/shopdin/assets/more.74e0502c.png",yS=[{id:1,title:"RESTAURANTES",img:uS,path:"/restaurantes"},{id:2,title:"MERCADO",img:cS,path:"/mercado"},{id:3,title:"PADARIA",img:dS,path:"/padaria"},{id:4,title:"FARM\xC1CIA",img:fS,path:"/farmacia"},{id:5,title:"CAL\xC7ADOS",img:pS,path:"/calcados"},{id:6,title:"\xD3TICAS",img:mS,path:"/oticas"},{id:7,title:"COSM\xC9TICOS",img:hS,path:"/cosmeticos"},{id:8,title:"E MUITO MAIS!",img:gS,path:"/more"}],vS=mt.div`
@media screen  and (min-width: 1024px){
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .text {
    text-align: center;
  }
  .title {
    padding-top: 0.8rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: blue;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .text {
    text-align: center;
  }
  .title {
    padding-top: 0.8rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: blue;
  }
}
@media screen and (max-width: 767px){
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  .text {
    text-align: center;
  }
  .title {
    padding-top: 0.8rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: blue;
  }
}
`,xS=mt.ul`
  @media screen and (min-width: 1024px) {
    margin-top: 5rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
    
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 5rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
  }
  @media screen and (max-width: 767px){
    margin-top: 3rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
  }
`,wS=mt.li`
@media screen and (min-width: 1024px) {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    border-radius: 15%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.4s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    color: black;
    text-transform: capitalize;
    text-align: center;
  }
  
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    border-radius: 15%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.4s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    color: black;
    text-transform: capitalize;
    text-align: center;
  }
}
@media screen and (max-width: 767px){
  
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    border-radius: 15%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.4s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    color: black;
    text-transform: capitalize;
    text-align: center;
  }
  
}
`,SS=()=>k(Dt,{children:X(vS,{children:[k("div",{className:"text",children:k("h1",{className:"title",children:"Clique e conhe\xE7a seu com\xE9rcio local!"})}),k("div",{className:"content",children:k(xS,{children:yS.map(e=>k(wS,{children:X("a",{children:[k("img",{src:e.img,alt:""}),k("p",{children:e.title})]})},e.id))})})]})}),kS="/shopdin/assets/entregador.202f15ad.png",CS="/shopdin/assets/parceiro.eb36c474.png",ES="/shopdin/assets/franqueado.b64e20a7.png",$S="/shopdin/assets/lojista.145f107a.png",PS=mt.div`
  @media screen and (min-width: 1024px) {
    overflow: hidden;
    width: 100%;
    height: 100%;

    .title {
      text-align: center;
      text-transform: uppercase;
      font-size: 2.2rem;
      color: blue;
      padding-top: 2rem;
    }

    .cards {
      display: flex;
      flex-direction: column;
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 2rem;

      .primary {
        width: 95vw;
        display: flex;
        justify-content: center;
        align-items: center;

        .one {
          width: 30vw;
          padding-top: 0.6rem;

          img {
            width: 80%;
          }
        }

        .two {
          width: 30vw;

          img {
            width: 80%;
          }
        }
      }
      .secondary-img {
        width: 93vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .three {
          width: 30vw;
          padding-top: 0.6rem;
          img {
            width: 90%;
          }
        }
        .four {
          width: 30vw;
          padding-top: 0.6rem;
          img {
            width: 90%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;

    .title {
      text-align: center;
      text-transform: uppercase;
      font-size: max(2rem, 16px);
      color: blue;
      padding-top: 2rem;
    }

    .cards {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 2rem;

      .primary {
        width: 95vw;
        display: flex;
        justify-content: center;
        align-items: center;

        .one {
          width: 30vw;
          padding-top: 0.6rem;

          img {
            width: 100%;
          }
        }

        .two {
          width: 30vw;

          img {
            width: 100%;
          }
        }

      }
      .secondary-img {
        width: 95vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .three {
          width: 32vw;
          padding-top: 0.6rem;
          img {
            width: 100%;
          }
        }
        .four {
          width: 32vw;
          padding-top: 0.6rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;

    .title {
      text-align: center;
      text-transform: uppercase;
      font-size: max(1.3rem, 12px);
      color: blue;
      padding-top: 2rem;
    }

    .cards {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 2rem;

      .primary {
        width: 95vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .one {
          width: 80vw;
          padding-top: 0.6rem;

          img {
            width: 100%;
          }
        }

        .two {
          width: 80vw;

          img {
            width: 100%;
          }
        }

      }
      .secondary-img {
        width: 95vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .three {
          width: 90vw;
          padding-top: 0.6rem;
          img {
            width: 100%;
          }
        }
        .four {
          width: 90vw;
          padding-top: 0.6rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`,_S=()=>k(Dt,{children:k(PS,{id:"parceiros",children:X("div",{className:"content",children:[k("h1",{className:"title",children:"Fa\xE7a parte da nossa comunidade!"}),X("div",{className:"cards",children:[X("div",{className:"primary",children:[k("div",{className:"one",children:k("a",{href:"#",children:k("img",{src:$S,alt:"franqueado"})})}),k("div",{className:"two",children:k("a",{href:"#",children:k("img",{src:CS,alt:"parceiro"})})})]}),X("div",{className:"secondary-img",children:[k("div",{className:"three",children:k("a",{href:"#",children:k("img",{src:ES,alt:"franqueado"})})}),k("div",{className:"four",children:k("a",{href:"#",children:k("img",{src:kS,alt:"entregador"})})})]}),k("div",{className:"secondary"})]})]})})}),TS="/shopdin/assets/iPhone.9eec2e35.png",zS=mt.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .mockup {
      padding-top: 4rem;
      width: 45%;
      img {
        width: 100%;
      }

      .botoes {
        button {
          width: auto;
          height: 5vh;
          font-size: max(0.8rem, 10px);
          margin-left: 0.4rem;
          border-radius: 0.4rem;
          border: none;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      .title {
        padding-top: 4rem;
        font-size: 2.2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: blue;
      }
      .youtube-video {
        padding-top: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .mockup {
      padding-top: 8rem;
      padding-left: 1rem;
      width: 45%;
      img {
        width: 95%;
      }

      .botoes {
        button {
          width: auto;
          height: 5vh;
          font-size: max(0.8rem, 10px);
          margin-left: 0.4rem;
          border-radius: 0.4rem;
          border: none;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      .title {
        padding-top: 4rem;
        font-size: 2.2rem;
        padding-left: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        color: blue;
      }
      .youtube-video {
        padding-top: 1.5rem;
        padding-left: 1rem;
        iframe {
          width: 95%;
          height: 35vh;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .mockup {
      padding-top: 2rem;
      width: 45%;
      img {
        width: 100%;
      }

      .botoes {
        button {
          width: auto;
          font-size: max(0.8rem, 10px);
          height: 5vh;
          margin-left: 0.4rem;
          border-radius: 0.4rem;
          border: none;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      .title {
        padding-top: 4rem;
        font-size: 2.2rem;
        padding-left: 0.6rem;
        text-transform: uppercase;
        font-weight: bold;
        color: blue;
      }
      .youtube-video {
        padding-top: 1.5rem;
        iframe {
          width: 100%;
          height: 30vh;
        }
      }
    }
  }
`,RS=()=>k(Dt,{children:X(zS,{id:"transparencia",children:[X("div",{className:"content",children:[k("h1",{className:"title",children:"Veja como \xE9 f\xE1cil e simples!"}),k("div",{className:"youtube-video",children:k("iframe",{width:"100%",height:400,src:"https://www.youtube.com/embed/CtL8IFcWOIw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]}),X("div",{className:"mockup",children:[k("img",{src:TS,alt:""}),X("div",{className:"botoes",children:[k("a",{href:"",children:k("button",{children:"PlayStore"})}),k("a",{href:"",children:k("button",{children:"AppStore"})})]})]})]})}),OS=()=>X(Dt,{children:[k(aS,{}),k(Dg,{}),k(SS,{}),k(Wg,{}),k(Lg,{}),k(RS,{}),k(_S,{}),k(qg,{}),k(ty,{})]}),NS=()=>k(Dt,{children:k(OS,{})});Os.createRoot(document.getElementById("root")).render(X(ut.StrictMode,{children:[k(Cg,{}),k(NS,{})]}));
