(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bs={exports:{}},vi={},ws={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),Uc=Symbol.for("react.portal"),Wc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),Qc=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Zc=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),$o=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Es=Object.assign,Ds={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Ds,this.updater=n||ks}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=gn.prototype;function Zr(e,t,n){this.props=e,this.context=t,this.refs=Ds,this.updater=n||ks}var eo=Zr.prototype=new Cs;eo.constructor=Zr;Es(eo,gn.prototype);eo.isPureReactComponent=!0;var Go=Array.isArray,Ts=Object.prototype.hasOwnProperty,to={current:null},Ss={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,t,n){var a,i={},r=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)Ts.call(t,a)&&!Ss.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:ra,type:e,key:r,ref:o,props:i,_owner:to.current}}function np(e,t){return{$$typeof:ra,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function no(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra}function ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jo=/\/+/g;function Ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):t.toString(36)}function Ra(e,t,n,a,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ra:case Uc:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+Ai(o,0):a,Go(i)?(n="",e!=null&&(n=e.replace(Jo,"$&/")+"/"),Ra(i,t,n,"",function(c){return c})):i!=null&&(no(i)&&(i=np(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",Go(e))for(var l=0;l<e.length;l++){r=e[l];var s=a+Ai(r,l);o+=Ra(r,t,n,s,i)}else if(s=tp(e),typeof s=="function")for(e=s.call(e),l=0;!(r=e.next()).done;)r=r.value,s=a+Ai(r,l++),o+=Ra(r,t,n,s,i);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(e,t,n){if(e==null)return e;var a=[],i=0;return Ra(e,a,"","",function(r){return t.call(n,r,i++)}),a}function ip(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Fa={transition:null},rp={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:to};function As(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:pa,forEach:function(e,t,n){pa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pa(e,function(){t++}),t},toArray:function(e){return pa(e,function(t){return t})||[]},only:function(e){if(!no(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=gn;M.Fragment=Wc;M.Profiler=$c;M.PureComponent=Zr;M.StrictMode=Kc;M.Suspense=Xc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;M.act=As;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Es({},e.props),i=e.key,r=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=to.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ts.call(t,s)&&!Ss.hasOwnProperty(s)&&(a[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:ra,type:e.type,key:i,ref:r,props:a,_owner:o}};M.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gc,_context:e},e.Consumer=e};M.createElement=Bs;M.createFactory=function(e){var t=Bs.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Qc,render:e}};M.isValidElement=no;M.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:ip}};M.memo=function(e,t){return{$$typeof:Zc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Fa.transition;Fa.transition={};try{e()}finally{Fa.transition=t}};M.unstable_act=As;M.useCallback=function(e,t){return pe.current.useCallback(e,t)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return pe.current.useEffect(e,t)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return pe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.3.1";ws.exports=M;var k=ws.exports;const op=Yc(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=k,sp=Symbol.for("react.element"),dp=Symbol.for("react.fragment"),cp=Object.prototype.hasOwnProperty,pp=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,up={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,n){var a,i={},r=null,o=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)cp.call(t,a)&&!up.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:sp,type:e,key:r,ref:o,props:i,_owner:pp.current}}vi.Fragment=dp;vi.jsx=Rs;vi.jsxs=Rs;bs.exports=vi;var d=bs.exports,ir={},Fs={exports:{}},ke={},Ps={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,D){var A=x.length;x.push(D);e:for(;0<A;){var P=A-1>>>1,z=x[P];if(0<i(z,D))x[P]=D,x[A]=z,A=P;else break e}}function n(x){return x.length===0?null:x[0]}function a(x){if(x.length===0)return null;var D=x[0],A=x.pop();if(A!==D){x[0]=A;e:for(var P=0,z=x.length,Ot=z>>>1;P<Ot;){var qe=2*(P+1)-1,qt=x[qe],Dt=qe+1,ca=x[Dt];if(0>i(qt,A))Dt<z&&0>i(ca,qt)?(x[P]=ca,x[Dt]=A,P=Dt):(x[P]=qt,x[qe]=A,P=qe);else if(Dt<z&&0>i(ca,A))x[P]=ca,x[Dt]=A,P=Dt;else break e}}return D}function i(x,D){var A=x.sortIndex-D.sortIndex;return A!==0?A:x.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],u=1,y=null,m=3,g=!1,h=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var D=n(c);D!==null;){if(D.callback===null)a(c);else if(D.startTime<=x)a(c),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(c)}}function b(x){if(E=!1,f(x),!h)if(n(s)!==null)h=!0,Ht(C);else{var D=n(c);D!==null&&Et(b,D.startTime-x)}}function C(x,D){h=!1,E&&(E=!1,v(R),R=-1),g=!0;var A=m;try{for(f(D),y=n(s);y!==null&&(!(y.expirationTime>D)||x&&!O());){var P=y.callback;if(typeof P=="function"){y.callback=null,m=y.priorityLevel;var z=P(y.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?y.callback=z:y===n(s)&&a(s),f(D)}else a(s);y=n(s)}if(y!==null)var Ot=!0;else{var qe=n(c);qe!==null&&Et(b,qe.startTime-D),Ot=!1}return Ot}finally{y=null,m=A,g=!1}}var S=!1,B=null,R=-1,Y=5,I=-1;function O(){return!(e.unstable_now()-I<Y)}function wt(){if(B!==null){var x=e.unstable_now();I=x;var D=!0;try{D=B(!0,x)}finally{D?kt():(S=!1,B=null)}}else S=!1}var kt;if(typeof p=="function")kt=function(){p(wt)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,et=jt.port2;jt.port1.onmessage=wt,kt=function(){et.postMessage(null)}}else kt=function(){_(wt,0)};function Ht(x){B=x,S||(S=!0,kt())}function Et(x,D){R=_(function(){x(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,Ht(C))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var A=m;m=D;try{return x()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,D){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var A=m;m=x;try{return D()}finally{m=A}},e.unstable_scheduleCallback=function(x,D,A){var P=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?P+A:P):A=P,x){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,x={id:u++,callback:D,priorityLevel:x,startTime:A,expirationTime:z,sortIndex:-1},A>P?(x.sortIndex=A,t(c,x),n(s)===null&&x===n(c)&&(E?(v(R),R=-1):E=!0,Et(b,A-P))):(x.sortIndex=z,t(s,x),h||g||(h=!0,Ht(C))),x},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(x){var D=m;return function(){var A=m;m=D;try{return x.apply(this,arguments)}finally{m=A}}}})(Is);Ps.exports=Is;var vp=Ps.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=k,we=vp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ms=new Set,qn={};function zt(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(qn[e]=t,e=0;e<t.length;e++)Ms.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rr=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qo={},Xo={};function yp(e){return rr.call(Xo,e)?!0:rr.call(Qo,e)?!1:fp.test(e)?Xo[e]=!0:(Qo[e]=!0,!1)}function gp(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hp(e,t,n,a){if(t===null||typeof t>"u"||gp(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,a,i,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,io);ie[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,io);ie[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,io);ie[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ro(e,t,n,a){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hp(t,n,i,a)&&(n=null),a||i===null?yp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Ze=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),oo=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),_s=Symbol.for("react.context"),lo=Symbol.for("react.forward_ref"),lr=Symbol.for("react.suspense"),sr=Symbol.for("react.suspense_list"),so=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),zs=Symbol.for("react.offscreen"),Zo=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Ri;function Bn(e){if(Ri===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ri=t&&t[1]||""}return`
`+Ri+e}var Fi=!1;function Pi(e,t){if(!e||Fi)return"";Fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var a=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){a=c}e.call(t.prototype)}else{try{throw Error()}catch(c){a=c}e()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),r=a.stack.split(`
`),o=i.length-1,l=r.length-1;1<=o&&0<=l&&i[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==r[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Fi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bn(e):""}function xp(e){switch(e.tag){case 5:return Bn(e.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return e=Pi(e.type,!1),e;case 11:return e=Pi(e.type.render,!1),e;case 1:return e=Pi(e.type,!0),e;default:return""}}function dr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Yt:return"Portal";case or:return"Profiler";case oo:return"StrictMode";case lr:return"Suspense";case sr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _s:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case lo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case so:return t=e.displayName||null,t!==null?t:dr(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return dr(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dr(t);case 8:return t===oo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wp(e){var t=Ns(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function va(e){e._valueTracker||(e._valueTracker=wp(e))}function js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ns(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cr(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function el(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hs(e,t){t=t.checked,t!=null&&ro(e,"checked",t,!1)}function pr(e,t){Hs(e,t);var n=yt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ur(e,t.type,n):t.hasOwnProperty("defaultValue")&&ur(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ur(e,t,n){(t!=="number"||qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function nn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(An(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Os(e,t){var n=yt(t.value),a=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function al(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,Vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Ys(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var Ep=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fr(e,t){if(t){if(Ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function yr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gr=null;function co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,an=null,rn=null;function il(e){if(e=sa(e)){if(typeof hr!="function")throw Error(w(280));var t=e.stateNode;t&&(t=hi(t),hr(e.stateNode,e.type,t))}}function Ws(e){an?rn?rn.push(e):rn=[e]:an=e}function Ks(){if(an){var e=an,t=rn;if(rn=an=null,il(e),t)for(e=0;e<t.length;e++)il(t[e])}}function $s(e,t){return e(t)}function Gs(){}var Ii=!1;function Js(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return $s(e,t,n)}finally{Ii=!1,(an!==null||rn!==null)&&(Gs(),Ks())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var a=hi(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var xr=!1;if(Ge)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){xr=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{xr=!1}function Dp(e,t,n,a,i,r,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Mn=!1,Va=null,Ya=!1,br=null,Cp={onError:function(e){Mn=!0,Va=e}};function Tp(e,t,n,a,i,r,o,l,s){Mn=!1,Va=null,Dp.apply(Cp,arguments)}function Sp(e,t,n,a,i,r,o,l,s){if(Tp.apply(this,arguments),Mn){if(Mn){var c=Va;Mn=!1,Va=null}else throw Error(w(198));Ya||(Ya=!0,br=c)}}function Nt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rl(e){if(Nt(e)!==e)throw Error(w(188))}function Bp(e){var t=e.alternate;if(!t){if(t=Nt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return rl(i),e;if(r===a)return rl(i),t;r=r.sibling}throw Error(w(188))}if(n.return!==a.return)n=i,a=r;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,a=r;break}if(l===a){o=!0,a=i,n=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===n){o=!0,n=r,a=i;break}if(l===a){o=!0,a=r,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==a)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Xs(e){return e=Bp(e),e!==null?Zs(e):null}function Zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zs(e);if(t!==null)return t;e=e.sibling}return null}var ed=we.unstable_scheduleCallback,ol=we.unstable_cancelCallback,Ap=we.unstable_shouldYield,Rp=we.unstable_requestPaint,J=we.unstable_now,Fp=we.unstable_getCurrentPriorityLevel,po=we.unstable_ImmediatePriority,td=we.unstable_UserBlockingPriority,Ua=we.unstable_NormalPriority,Pp=we.unstable_LowPriority,nd=we.unstable_IdlePriority,mi=null,He=null;function Ip(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:_p,Mp=Math.log,Lp=Math.LN2;function _p(e){return e>>>=0,e===0?32:31-(Mp(e)/Lp|0)|0}var fa=64,ya=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?a=Rn(l):(r&=o,r!==0&&(a=Rn(r)))}else o=n&~i,o!==0?a=Rn(o):r!==0&&(a=Rn(r));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,r=t&-t,i>=r||i===16&&(r&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Me(t),i=1<<n,a|=e[n],t&=~i;return a}function zp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Np(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-Me(r),l=1<<o,s=i[o];s===-1?(!(l&n)||l&a)&&(i[o]=zp(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}}function wr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ad(){var e=fa;return fa<<=1,!(fa&4194240)&&(fa=64),e}function Mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Me(n),r=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~r}}function uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Me(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var N=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rd,vo,od,ld,sd,kr=!1,ga=[],st=null,dt=null,ct=null,Un=new Map,Wn=new Map,it=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ll(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function kn(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=sa(t),t!==null&&vo(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,n,a,i){switch(t){case"focusin":return st=kn(st,e,t,n,a,i),!0;case"dragenter":return dt=kn(dt,e,t,n,a,i),!0;case"mouseover":return ct=kn(ct,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return Un.set(r,kn(Un.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Wn.set(r,kn(Wn.get(r)||null,e,t,n,a,i)),!0}return!1}function dd(e){var t=St(e.target);if(t!==null){var n=Nt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qs(n),t!==null){e.blockedOn=t,sd(e.priority,function(){od(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Er(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);gr=a,n.target.dispatchEvent(a),gr=null}else return t=sa(n),t!==null&&vo(t),e.blockedOn=n,!1;t.shift()}return!0}function sl(e,t,n){Pa(e)&&n.delete(t)}function qp(){kr=!1,st!==null&&Pa(st)&&(st=null),dt!==null&&Pa(dt)&&(dt=null),ct!==null&&Pa(ct)&&(ct=null),Un.forEach(sl),Wn.forEach(sl)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,kr||(kr=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,qp)))}function Kn(e){function t(i){return En(i,e)}if(0<ga.length){En(ga[0],e);for(var n=1;n<ga.length;n++){var a=ga[n];a.blockedOn===e&&(a.blockedOn=null)}}for(st!==null&&En(st,e),dt!==null&&En(dt,e),ct!==null&&En(ct,e),Un.forEach(t),Wn.forEach(t),n=0;n<it.length;n++)a=it[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)dd(n),n.blockedOn===null&&it.shift()}var on=Ze.ReactCurrentBatchConfig,Ka=!0;function Vp(e,t,n,a){var i=N,r=on.transition;on.transition=null;try{N=1,mo(e,t,n,a)}finally{N=i,on.transition=r}}function Yp(e,t,n,a){var i=N,r=on.transition;on.transition=null;try{N=4,mo(e,t,n,a)}finally{N=i,on.transition=r}}function mo(e,t,n,a){if(Ka){var i=Er(e,t,n,a);if(i===null)Yi(e,t,a,$a,n),ll(e,a);else if(Op(i,e,t,n,a))a.stopPropagation();else if(ll(e,a),t&4&&-1<Hp.indexOf(e)){for(;i!==null;){var r=sa(i);if(r!==null&&rd(r),r=Er(e,t,n,a),r===null&&Yi(e,t,a,$a,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else Yi(e,t,a,null,n)}}var $a=null;function Er(e,t,n,a){if($a=null,e=co(a),e=St(e),e!==null)if(t=Nt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $a=e,null}function cd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fp()){case po:return 1;case td:return 4;case Ua:case Pp:return 16;case nd:return 536870912;default:return 16}default:return 16}}var ot=null,fo=null,Ia=null;function pd(){if(Ia)return Ia;var e,t=fo,n=t.length,a,i="value"in ot?ot.value:ot.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[r-a];a++);return Ia=i.slice(e,1<a?1-a:void 0)}function Ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function dl(){return!1}function Ee(e){function t(n,a,i,r,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ha:dl,this.isPropagationStopped=dl,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Ee(hn),la=$({},hn,{view:0,detail:0}),Up=Ee(la),Li,_i,Dn,fi=$({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(Li=e.screenX-Dn.screenX,_i=e.screenY-Dn.screenY):_i=Li=0,Dn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),cl=Ee(fi),Wp=$({},fi,{dataTransfer:0}),Kp=Ee(Wp),$p=$({},la,{relatedTarget:0}),zi=Ee($p),Gp=$({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=Ee(Gp),Qp=$({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=Ee(Qp),Zp=$({},hn,{data:0}),pl=Ee(Zp),eu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nu[e])?!!t[e]:!1}function go(){return au}var iu=$({},la,{key:function(e){if(e.key){var t=eu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:go,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ru=Ee(iu),ou=$({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=Ee(ou),lu=$({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:go}),su=Ee(lu),du=$({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cu=Ee(du),pu=$({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uu=Ee(pu),vu=[9,13,27,32],ho=Ge&&"CompositionEvent"in window,Ln=null;Ge&&"documentMode"in document&&(Ln=document.documentMode);var mu=Ge&&"TextEvent"in window&&!Ln,ud=Ge&&(!ho||Ln&&8<Ln&&11>=Ln),vl=" ",ml=!1;function vd(e,t){switch(e){case"keyup":return vu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function fu(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(ml=!0,vl);case"textInput":return e=t.data,e===vl&&ml?null:e;default:return null}}function yu(e,t){if(Wt)return e==="compositionend"||!ho&&vd(e,t)?(e=pd(),Ia=fo=ot=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var gu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gu[e.type]:t==="textarea"}function fd(e,t,n,a){Ws(a),t=Ga(t,"onChange"),0<t.length&&(n=new yo("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var _n=null,$n=null;function hu(e){Td(e,0)}function yi(e){var t=Gt(e);if(js(t))return e}function xu(e,t){if(e==="change")return t}var yd=!1;if(Ge){var Ni;if(Ge){var ji="oninput"in document;if(!ji){var yl=document.createElement("div");yl.setAttribute("oninput","return;"),ji=typeof yl.oninput=="function"}Ni=ji}else Ni=!1;yd=Ni&&(!document.documentMode||9<document.documentMode)}function gl(){_n&&(_n.detachEvent("onpropertychange",gd),$n=_n=null)}function gd(e){if(e.propertyName==="value"&&yi($n)){var t=[];fd(t,$n,e,co(e)),Js(hu,t)}}function bu(e,t,n){e==="focusin"?(gl(),_n=t,$n=n,_n.attachEvent("onpropertychange",gd)):e==="focusout"&&gl()}function wu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi($n)}function ku(e,t){if(e==="click")return yi(t)}function Eu(e,t){if(e==="input"||e==="change")return yi(t)}function Du(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Du;function Gn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!rr.call(t,i)||!_e(e[i],t[i]))return!1}return!0}function hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xl(e,t){var n=hl(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hl(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xd(){for(var e=window,t=qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qa(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cu(e){var t=xd(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(a!==null&&xo(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,r=Math.min(a.start,i);a=a.end===void 0?r:Math.min(a.end,i),!e.extend&&r>a&&(i=a,a=r,r=i),i=xl(n,r);var o=xl(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),r>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tu=Ge&&"documentMode"in document&&11>=document.documentMode,Kt=null,Dr=null,zn=null,Cr=!1;function bl(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cr||Kt==null||Kt!==qa(a)||(a=Kt,"selectionStart"in a&&xo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),zn&&Gn(zn,a)||(zn=a,a=Ga(Dr,"onSelect"),0<a.length&&(t=new yo("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Kt)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Hi={},bd={};Ge&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function gi(e){if(Hi[e])return Hi[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bd)return Hi[e]=t[n];return e}var wd=gi("animationend"),kd=gi("animationiteration"),Ed=gi("animationstart"),Dd=gi("transitionend"),Cd=new Map,wl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Cd.set(e,t),zt(t,[e])}for(var Oi=0;Oi<wl.length;Oi++){var qi=wl[Oi],Su=qi.toLowerCase(),Bu=qi[0].toUpperCase()+qi.slice(1);ht(Su,"on"+Bu)}ht(wd,"onAnimationEnd");ht(kd,"onAnimationIteration");ht(Ed,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Dd,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Au=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function kl(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Sp(a,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==r&&i.isPropagationStopped())break e;kl(i,l,c),r=s}else for(o=0;o<a.length;o++){if(l=a[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==r&&i.isPropagationStopped())break e;kl(i,l,c),r=s}}}if(Ya)throw e=br,Ya=!1,br=null,e}function q(e,t){var n=t[Rr];n===void 0&&(n=t[Rr]=new Set);var a=e+"__bubble";n.has(a)||(Sd(t,e,2,!1),n.add(a))}function Vi(e,t,n){var a=0;t&&(a|=4),Sd(n,e,a,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[ba]){e[ba]=!0,Ms.forEach(function(n){n!=="selectionchange"&&(Au.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,Vi("selectionchange",!1,t))}}function Sd(e,t,n,a){switch(cd(t)){case 1:var i=Vp;break;case 4:i=Yp;break;default:i=mo}n=i.bind(null,t,n,e),i=void 0,!xr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yi(e,t,n,a,i){var r=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=St(l),o===null)return;if(s=o.tag,s===5||s===6){a=r=o;continue e}l=l.parentNode}}a=a.return}Js(function(){var c=r,u=co(n),y=[];e:{var m=Cd.get(e);if(m!==void 0){var g=yo,h=e;switch(e){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":g=ru;break;case"focusin":h="focus",g=zi;break;case"focusout":h="blur",g=zi;break;case"beforeblur":case"afterblur":g=zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=su;break;case wd:case kd:case Ed:g=Jp;break;case Dd:g=cu;break;case"scroll":g=Up;break;case"wheel":g=uu;break;case"copy":case"cut":case"paste":g=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ul}var E=(t&4)!==0,_=!E&&e==="scroll",v=E?m!==null?m+"Capture":null:m;E=[];for(var p=c,f;p!==null;){f=p;var b=f.stateNode;if(f.tag===5&&b!==null&&(f=b,v!==null&&(b=Yn(p,v),b!=null&&E.push(Qn(p,b,f)))),_)break;p=p.return}0<E.length&&(m=new g(m,h,null,n,u),y.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==gr&&(h=n.relatedTarget||n.fromElement)&&(St(h)||h[Je]))break e;if((g||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=c,h=h?St(h):null,h!==null&&(_=Nt(h),h!==_||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=c),g!==h)){if(E=cl,b="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(E=ul,b="onPointerLeave",v="onPointerEnter",p="pointer"),_=g==null?m:Gt(g),f=h==null?m:Gt(h),m=new E(b,p+"leave",g,n,u),m.target=_,m.relatedTarget=f,b=null,St(u)===c&&(E=new E(v,p+"enter",h,n,u),E.target=f,E.relatedTarget=_,b=E),_=b,g&&h)t:{for(E=g,v=h,p=0,f=E;f;f=Vt(f))p++;for(f=0,b=v;b;b=Vt(b))f++;for(;0<p-f;)E=Vt(E),p--;for(;0<f-p;)v=Vt(v),f--;for(;p--;){if(E===v||v!==null&&E===v.alternate)break t;E=Vt(E),v=Vt(v)}E=null}else E=null;g!==null&&El(y,m,g,E,!1),h!==null&&_!==null&&El(y,_,h,E,!0)}}e:{if(m=c?Gt(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var C=xu;else if(fl(m))if(yd)C=Eu;else{C=wu;var S=bu}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=ku);if(C&&(C=C(e,c))){fd(y,C,n,u);break e}S&&S(e,m,c),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&ur(m,"number",m.value)}switch(S=c?Gt(c):window,e){case"focusin":(fl(S)||S.contentEditable==="true")&&(Kt=S,Dr=c,zn=null);break;case"focusout":zn=Dr=Kt=null;break;case"mousedown":Cr=!0;break;case"contextmenu":case"mouseup":case"dragend":Cr=!1,bl(y,n,u);break;case"selectionchange":if(Tu)break;case"keydown":case"keyup":bl(y,n,u)}var B;if(ho)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Wt?vd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ud&&n.locale!=="ko"&&(Wt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Wt&&(B=pd()):(ot=u,fo="value"in ot?ot.value:ot.textContent,Wt=!0)),S=Ga(c,R),0<S.length&&(R=new pl(R,e,null,n,u),y.push({event:R,listeners:S}),B?R.data=B:(B=md(n),B!==null&&(R.data=B)))),(B=mu?fu(e,n):yu(e,n))&&(c=Ga(c,"onBeforeInput"),0<c.length&&(u=new pl("onBeforeInput","beforeinput",null,n,u),y.push({event:u,listeners:c}),u.data=B))}Td(y,t)})}function Qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ga(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Yn(e,n),r!=null&&a.unshift(Qn(e,r,i)),r=Yn(e,t),r!=null&&a.push(Qn(e,r,i))),e=e.return}return a}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function El(e,t,n,a,i){for(var r=t._reactName,o=[];n!==null&&n!==a;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===a)break;l.tag===5&&c!==null&&(l=c,i?(s=Yn(n,r),s!=null&&o.unshift(Qn(n,s,l))):i||(s=Yn(n,r),s!=null&&o.push(Qn(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ru=/\r\n?/g,Fu=/\u0000|\uFFFD/g;function Dl(e){return(typeof e=="string"?e:""+e).replace(Ru,`
`).replace(Fu,"")}function wa(e,t,n){if(t=Dl(t),Dl(e)!==t&&n)throw Error(w(425))}function Ja(){}var Tr=null,Sr=null;function Br(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ar=typeof setTimeout=="function"?setTimeout:void 0,Pu=typeof clearTimeout=="function"?clearTimeout:void 0,Cl=typeof Promise=="function"?Promise:void 0,Iu=typeof queueMicrotask=="function"?queueMicrotask:typeof Cl<"u"?function(e){return Cl.resolve(null).then(e).catch(Mu)}:Ar;function Mu(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Kn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Kn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),je="__reactFiber$"+xn,Xn="__reactProps$"+xn,Je="__reactContainer$"+xn,Rr="__reactEvents$"+xn,Lu="__reactListeners$"+xn,_u="__reactHandles$"+xn;function St(e){var t=e[je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tl(e);e!==null;){if(n=e[je])return n;e=Tl(e)}return t}e=n,n=e.parentNode}return null}function sa(e){return e=e[je]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function hi(e){return e[Xn]||null}var Fr=[],Jt=-1;function xt(e){return{current:e}}function V(e){0>Jt||(e.current=Fr[Jt],Fr[Jt]=null,Jt--)}function H(e,t){Jt++,Fr[Jt]=e.current,e.current=t}var gt={},se=xt(gt),fe=xt(!1),Pt=gt;function pn(e,t){var n=e.type.contextTypes;if(!n)return gt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in n)i[r]=t[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Qa(){V(fe),V(se)}function Sl(e,t,n){if(se.current!==gt)throw Error(w(168));H(se,t),H(fe,n)}function Bd(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(w(108,bp(e)||"Unknown",i));return $({},n,a)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=se.current,H(se,e),H(fe,fe.current),!0}function Bl(e,t,n){var a=e.stateNode;if(!a)throw Error(w(169));n?(e=Bd(e,t,Pt),a.__reactInternalMemoizedMergedChildContext=e,V(fe),V(se),H(se,e)):V(fe),H(fe,n)}var Ue=null,xi=!1,Wi=!1;function Ad(e){Ue===null?Ue=[e]:Ue.push(e)}function zu(e){xi=!0,Ad(e)}function bt(){if(!Wi&&Ue!==null){Wi=!0;var e=0,t=N;try{var n=Ue;for(N=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ue=null,xi=!1}catch(i){throw Ue!==null&&(Ue=Ue.slice(e+1)),ed(po,bt),i}finally{N=t,Wi=!1}}return null}var Qt=[],Xt=0,Za=null,ei=0,De=[],Ce=0,It=null,We=1,Ke="";function Ct(e,t){Qt[Xt++]=ei,Qt[Xt++]=Za,Za=e,ei=t}function Rd(e,t,n){De[Ce++]=We,De[Ce++]=Ke,De[Ce++]=It,It=e;var a=We;e=Ke;var i=32-Me(a)-1;a&=~(1<<i),n+=1;var r=32-Me(t)+i;if(30<r){var o=i-i%5;r=(a&(1<<o)-1).toString(32),a>>=o,i-=o,We=1<<32-Me(t)+i|n<<i|a,Ke=r+e}else We=1<<r|n<<i|a,Ke=e}function bo(e){e.return!==null&&(Ct(e,1),Rd(e,1,0))}function wo(e){for(;e===Za;)Za=Qt[--Xt],Qt[Xt]=null,ei=Qt[--Xt],Qt[Xt]=null;for(;e===It;)It=De[--Ce],De[Ce]=null,Ke=De[--Ce],De[Ce]=null,We=De[--Ce],De[Ce]=null}var be=null,xe=null,U=!1,Ie=null;function Fd(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Al(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,xe=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:We,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,xe=null,!0):!1;default:return!1}}function Pr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ir(e){if(U){var t=xe;if(t){var n=t;if(!Al(e,t)){if(Pr(e))throw Error(w(418));t=pt(n.nextSibling);var a=be;t&&Al(e,t)?Fd(a,n):(e.flags=e.flags&-4097|2,U=!1,be=e)}}else{if(Pr(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,be=e}}}function Rl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function ka(e){if(e!==be)return!1;if(!U)return Rl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Br(e.type,e.memoizedProps)),t&&(t=xe)){if(Pr(e))throw Pd(),Error(w(418));for(;t;)Fd(e,t),t=pt(t.nextSibling)}if(Rl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=be?pt(e.stateNode.nextSibling):null;return!0}function Pd(){for(var e=xe;e;)e=pt(e.nextSibling)}function un(){xe=be=null,U=!1}function ko(e){Ie===null?Ie=[e]:Ie.push(e)}var Nu=Ze.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var a=n.stateNode}if(!a)throw Error(w(147,e));var i=a,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var l=i.refs;o===null?delete l[r]:l[r]=o},t._stringRef=r,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fl(e){var t=e._init;return t(e._payload)}function Id(e){function t(v,p){if(e){var f=v.deletions;f===null?(v.deletions=[p],v.flags|=16):f.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function a(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=ft(v,p),v.index=0,v.sibling=null,v}function r(v,p,f){return v.index=f,e?(f=v.alternate,f!==null?(f=f.index,f<p?(v.flags|=2,p):f):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,p,f,b){return p===null||p.tag!==6?(p=Zi(f,v.mode,b),p.return=v,p):(p=i(p,f),p.return=v,p)}function s(v,p,f,b){var C=f.type;return C===Ut?u(v,p,f.props.children,b,f.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nt&&Fl(C)===p.type)?(b=i(p,f.props),b.ref=Cn(v,p,f),b.return=v,b):(b=Oa(f.type,f.key,f.props,null,v.mode,b),b.ref=Cn(v,p,f),b.return=v,b)}function c(v,p,f,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=er(f,v.mode,b),p.return=v,p):(p=i(p,f.children||[]),p.return=v,p)}function u(v,p,f,b,C){return p===null||p.tag!==7?(p=Ft(f,v.mode,b,C),p.return=v,p):(p=i(p,f),p.return=v,p)}function y(v,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zi(""+p,v.mode,f),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return f=Oa(p.type,p.key,p.props,null,v.mode,f),f.ref=Cn(v,null,p),f.return=v,f;case Yt:return p=er(p,v.mode,f),p.return=v,p;case nt:var b=p._init;return y(v,b(p._payload),f)}if(An(p)||bn(p))return p=Ft(p,v.mode,f,null),p.return=v,p;Ea(v,p)}return null}function m(v,p,f,b){var C=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:l(v,p,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ua:return f.key===C?s(v,p,f,b):null;case Yt:return f.key===C?c(v,p,f,b):null;case nt:return C=f._init,m(v,p,C(f._payload),b)}if(An(f)||bn(f))return C!==null?null:u(v,p,f,b,null);Ea(v,f)}return null}function g(v,p,f,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(f)||null,l(p,v,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ua:return v=v.get(b.key===null?f:b.key)||null,s(p,v,b,C);case Yt:return v=v.get(b.key===null?f:b.key)||null,c(p,v,b,C);case nt:var S=b._init;return g(v,p,f,S(b._payload),C)}if(An(b)||bn(b))return v=v.get(f)||null,u(p,v,b,C,null);Ea(p,b)}return null}function h(v,p,f,b){for(var C=null,S=null,B=p,R=p=0,Y=null;B!==null&&R<f.length;R++){B.index>R?(Y=B,B=null):Y=B.sibling;var I=m(v,B,f[R],b);if(I===null){B===null&&(B=Y);break}e&&B&&I.alternate===null&&t(v,B),p=r(I,p,R),S===null?C=I:S.sibling=I,S=I,B=Y}if(R===f.length)return n(v,B),U&&Ct(v,R),C;if(B===null){for(;R<f.length;R++)B=y(v,f[R],b),B!==null&&(p=r(B,p,R),S===null?C=B:S.sibling=B,S=B);return U&&Ct(v,R),C}for(B=a(v,B);R<f.length;R++)Y=g(B,v,R,f[R],b),Y!==null&&(e&&Y.alternate!==null&&B.delete(Y.key===null?R:Y.key),p=r(Y,p,R),S===null?C=Y:S.sibling=Y,S=Y);return e&&B.forEach(function(O){return t(v,O)}),U&&Ct(v,R),C}function E(v,p,f,b){var C=bn(f);if(typeof C!="function")throw Error(w(150));if(f=C.call(f),f==null)throw Error(w(151));for(var S=C=null,B=p,R=p=0,Y=null,I=f.next();B!==null&&!I.done;R++,I=f.next()){B.index>R?(Y=B,B=null):Y=B.sibling;var O=m(v,B,I.value,b);if(O===null){B===null&&(B=Y);break}e&&B&&O.alternate===null&&t(v,B),p=r(O,p,R),S===null?C=O:S.sibling=O,S=O,B=Y}if(I.done)return n(v,B),U&&Ct(v,R),C;if(B===null){for(;!I.done;R++,I=f.next())I=y(v,I.value,b),I!==null&&(p=r(I,p,R),S===null?C=I:S.sibling=I,S=I);return U&&Ct(v,R),C}for(B=a(v,B);!I.done;R++,I=f.next())I=g(B,v,R,I.value,b),I!==null&&(e&&I.alternate!==null&&B.delete(I.key===null?R:I.key),p=r(I,p,R),S===null?C=I:S.sibling=I,S=I);return e&&B.forEach(function(wt){return t(v,wt)}),U&&Ct(v,R),C}function _(v,p,f,b){if(typeof f=="object"&&f!==null&&f.type===Ut&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ua:e:{for(var C=f.key,S=p;S!==null;){if(S.key===C){if(C=f.type,C===Ut){if(S.tag===7){n(v,S.sibling),p=i(S,f.props.children),p.return=v,v=p;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nt&&Fl(C)===S.type){n(v,S.sibling),p=i(S,f.props),p.ref=Cn(v,S,f),p.return=v,v=p;break e}n(v,S);break}else t(v,S);S=S.sibling}f.type===Ut?(p=Ft(f.props.children,v.mode,b,f.key),p.return=v,v=p):(b=Oa(f.type,f.key,f.props,null,v.mode,b),b.ref=Cn(v,p,f),b.return=v,v=b)}return o(v);case Yt:e:{for(S=f.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(v,p.sibling),p=i(p,f.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=er(f,v.mode,b),p.return=v,v=p}return o(v);case nt:return S=f._init,_(v,p,S(f._payload),b)}if(An(f))return h(v,p,f,b);if(bn(f))return E(v,p,f,b);Ea(v,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,f),p.return=v,v=p):(n(v,p),p=Zi(f,v.mode,b),p.return=v,v=p),o(v)):n(v,p)}return _}var vn=Id(!0),Md=Id(!1),ti=xt(null),ni=null,Zt=null,Eo=null;function Do(){Eo=Zt=ni=null}function Co(e){var t=ti.current;V(ti),e._currentValue=t}function Mr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){ni=e,Eo=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(ni===null)throw Error(w(308));Zt=e,ni.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Bt=null;function To(e){Bt===null?Bt=[e]:Bt.push(e)}function Ld(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,To(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qe(e,a)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,L&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Qe(e,n)}return i=a.interleaved,i===null?(t.next=t,To(a)):(t.next=i.next,i.next=t),a.interleaved=t,Qe(e,n)}function La(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,uo(e,n)}}function Pl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?i=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,a){var i=e.updateQueue;at=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?r=c:o.next=c,o=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(r!==null){var y=i.baseState;o=0,u=c=s=null,l=r;do{var m=l.lane,g=l.eventTime;if((a&m)===m){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,E=l;switch(m=t,g=n,E.tag){case 1:if(h=E.payload,typeof h=="function"){y=h.call(g,y,m);break e}y=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=E.payload,m=typeof h=="function"?h.call(g,y,m):h,m==null)break e;y=$({},y,m);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=g,s=y):u=u.next=g,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(u===null&&(s=y),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else r===null&&(i.shared.lanes=0);Lt|=o,e.lanes=o,e.memoizedState=y}}function Il(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(w(191,i));i.call(a)}}}var da={},Oe=xt(da),Zn=xt(da),ea=xt(da);function At(e){if(e===da)throw Error(w(174));return e}function Bo(e,t){switch(H(ea,t),H(Zn,e),H(Oe,da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mr(t,e)}V(Oe),H(Oe,t)}function mn(){V(Oe),V(Zn),V(ea)}function zd(e){At(ea.current);var t=At(Oe.current),n=mr(t,e.type);t!==n&&(H(Zn,e),H(Oe,n))}function Ao(e){Zn.current===e&&(V(Oe),V(Zn))}var W=xt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=[];function Ro(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var _a=Ze.ReactCurrentDispatcher,$i=Ze.ReactCurrentBatchConfig,Mt=0,K=null,X=null,ee=null,ri=!1,Nn=!1,ta=0,ju=0;function re(){throw Error(w(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function Po(e,t,n,a,i,r){if(Mt=r,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_a.current=e===null||e.memoizedState===null?Vu:Yu,e=n(a,i),Nn){r=0;do{if(Nn=!1,ta=0,25<=r)throw Error(w(301));r+=1,ee=X=null,t.updateQueue=null,_a.current=Uu,e=n(a,i)}while(Nn)}if(_a.current=oi,t=X!==null&&X.next!==null,Mt=0,ee=X=K=null,ri=!1,t)throw Error(w(300));return e}function Io(){var e=ta!==0;return ta=0,e}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?K.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(X===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?K.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?K.memoizedState=ee=e:ee=ee.next=e}return ee}function na(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var a=X,i=a.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}a.baseQueue=i=r,n.pending=null}if(i!==null){r=i.next,a=a.baseState;var l=o=null,s=null,c=r;do{var u=c.lane;if((Mt&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var y={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=y,o=a):s=s.next=y,K.lanes|=u,Lt|=u}c=c.next}while(c!==null&&c!==r);s===null?o=a:s.next=l,_e(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=s,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do r=i.lane,K.lanes|=r,Lt|=r,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);_e(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Nd(){}function jd(e,t){var n=K,a=Ae(),i=t(),r=!_e(a.memoizedState,i);if(r&&(a.memoizedState=i,me=!0),a=a.queue,Mo(qd.bind(null,n,a,e),[e]),a.getSnapshot!==t||r||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,aa(9,Od.bind(null,n,a,i,t),void 0,null),te===null)throw Error(w(349));Mt&30||Hd(n,t,i)}return i}function Hd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Od(e,t,n,a){t.value=n,t.getSnapshot=a,Vd(t)&&Yd(e)}function qd(e,t,n){return n(function(){Vd(t)&&Yd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function Yd(e){var t=Qe(e,1);t!==null&&Le(t,e,1,-1)}function Ml(e){var t=Ne();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t.queue=e,e=e.dispatch=qu.bind(null,K,e),[t.memoizedState,e]}function aa(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Ud(){return Ae().memoizedState}function za(e,t,n,a){var i=Ne();K.flags|=e,i.memoizedState=aa(1|t,n,void 0,a===void 0?null:a)}function bi(e,t,n,a){var i=Ae();a=a===void 0?null:a;var r=void 0;if(X!==null){var o=X.memoizedState;if(r=o.destroy,a!==null&&Fo(a,o.deps)){i.memoizedState=aa(t,n,r,a);return}}K.flags|=e,i.memoizedState=aa(1|t,n,r,a)}function Ll(e,t){return za(8390656,8,e,t)}function Mo(e,t){return bi(2048,8,e,t)}function Wd(e,t){return bi(4,2,e,t)}function Kd(e,t){return bi(4,4,e,t)}function $d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){return n=n!=null?n.concat([e]):null,bi(4,4,$d.bind(null,t,e),n)}function Lo(){}function Jd(e,t){var n=Ae();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Fo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Qd(e,t){var n=Ae();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Fo(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Xd(e,t,n){return Mt&21?(_e(n,t)||(n=ad(),K.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Hu(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var a=$i.transition;$i.transition={};try{e(!1),t()}finally{N=n,$i.transition=a}}function Zd(){return Ae().memoizedState}function Ou(e,t,n){var a=mt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Ld(e,t,n,a),n!==null){var i=ce();Le(n,e,a,i),nc(n,t,a)}}function qu(e,t,n){var a=mt(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,l=r(o,n);if(i.hasEagerState=!0,i.eagerState=l,_e(l,o)){var s=t.interleaved;s===null?(i.next=i,To(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Ld(e,t,i,a),n!==null&&(i=ce(),Le(n,e,a,i),nc(n,t,a))}}function ec(e){var t=e.alternate;return e===K||t!==null&&t===K}function tc(e,t){Nn=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,uo(e,n)}}var oi={readContext:Be,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Vu={readContext:Be,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Ll,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,za(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var n=Ne();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Ne();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Ou.bind(null,K,e),[a.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:Ml,useDebugValue:Lo,useDeferredValue:function(e){return Ne().memoizedState=e},useTransition:function(){var e=Ml(!1),t=e[0];return e=Hu.bind(null,e[1]),Ne().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=K,i=Ne();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Mt&30||Hd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Ll(qd.bind(null,a,r,e),[e]),a.flags|=2048,aa(9,Od.bind(null,a,r,n,t),void 0,null),n},useId:function(){var e=Ne(),t=te.identifierPrefix;if(U){var n=Ke,a=We;n=(a&~(1<<32-Me(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=ta++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ju++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yu={readContext:Be,useCallback:Jd,useContext:Be,useEffect:Mo,useImperativeHandle:Gd,useInsertionEffect:Wd,useLayoutEffect:Kd,useMemo:Qd,useReducer:Gi,useRef:Ud,useState:function(){return Gi(na)},useDebugValue:Lo,useDeferredValue:function(e){var t=Ae();return Xd(t,X.memoizedState,e)},useTransition:function(){var e=Gi(na)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:jd,useId:Zd,unstable_isNewReconciler:!1},Uu={readContext:Be,useCallback:Jd,useContext:Be,useEffect:Mo,useImperativeHandle:Gd,useInsertionEffect:Wd,useLayoutEffect:Kd,useMemo:Qd,useReducer:Ji,useRef:Ud,useState:function(){return Ji(na)},useDebugValue:Lo,useDeferredValue:function(e){var t=Ae();return X===null?t.memoizedState=e:Xd(t,X.memoizedState,e)},useTransition:function(){var e=Ji(na)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:jd,useId:Zd,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Lr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ce(),i=mt(e),r=$e(a,i);r.payload=t,n!=null&&(r.callback=n),t=ut(e,r,i),t!==null&&(Le(t,e,i,a),La(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ce(),i=mt(e),r=$e(a,i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ut(e,r,i),t!==null&&(Le(t,e,i,a),La(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),a=mt(e),i=$e(n,a);i.tag=2,t!=null&&(i.callback=t),t=ut(e,i,a),t!==null&&(Le(t,e,a,n),La(t,e,a))}};function _l(e,t,n,a,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,a)||!Gn(i,r):!0}function ac(e,t,n){var a=!1,i=gt,r=t.contextType;return typeof r=="object"&&r!==null?r=Be(r):(i=ye(t)?Pt:se.current,a=t.contextTypes,r=(a=a!=null)?pn(e,i):gt),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),t}function zl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function _r(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},So(e);var r=t.contextType;typeof r=="object"&&r!==null?i.context=Be(r):(r=ye(t)?Pt:se.current,i.context=pn(e,r)),i.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Lr(e,t,r,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),ai(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",a=t;do n+=xp(a),a=a.return;while(a);var i=n}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:i,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zr(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wu=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){si||(si=!0,Kr=a),zr(e,t)},n}function rc(e,t,n){n=$e(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){zr(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){zr(e,t),typeof a!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Nl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Wu;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=ov.bind(null,e,t,n),t.then(e,e))}function jl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hl(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Ku=Ze.ReactCurrentOwner,me=!1;function de(e,t,n,a){t.child=e===null?Md(t,null,n,a):vn(t,e.child,n,a)}function Ol(e,t,n,a,i){n=n.render;var r=t.ref;return ln(t,i),a=Po(e,t,n,a,r,i),n=Io(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&n&&bo(t),t.flags|=1,de(e,t,a,i),t.child)}function ql(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Vo(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,oc(e,t,r,a,i)):(e=Oa(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&i)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(o,a)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Gn(r,a)&&e.ref===t.ref)if(me=!1,t.pendingProps=a=r,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Nr(e,t,n,a,i)}function lc(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(tn,he),he|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(tn,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:n,H(tn,he),he|=a}else r!==null?(a=r.baseLanes|n,t.memoizedState=null):a=n,H(tn,he),he|=a;return de(e,t,i,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nr(e,t,n,a,i){var r=ye(n)?Pt:se.current;return r=pn(t,r),ln(t,i),n=Po(e,t,n,a,r,i),a=Io(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&a&&bo(t),t.flags|=1,de(e,t,n,i),t.child)}function Vl(e,t,n,a,i){if(ye(n)){var r=!0;Xa(t)}else r=!1;if(ln(t,i),t.stateNode===null)Na(e,t),ac(t,n,a),_r(t,n,a,i),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=ye(n)?Pt:se.current,c=pn(t,c));var u=n.getDerivedStateFromProps,y=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||s!==c)&&zl(t,o,a,c),at=!1;var m=t.memoizedState;o.state=m,ai(t,a,o,i),s=t.memoizedState,l!==a||m!==s||fe.current||at?(typeof u=="function"&&(Lr(t,n,u,a),s=t.memoizedState),(l=at||_l(t,n,l,a,m,s,c))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=s),o.props=a,o.state=s,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,_d(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Fe(t.type,l),o.props=c,y=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=ye(n)?Pt:se.current,s=pn(t,s));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||m!==s)&&zl(t,o,a,s),at=!1,m=t.memoizedState,o.state=m,ai(t,a,o,i);var h=t.memoizedState;l!==y||m!==h||fe.current||at?(typeof g=="function"&&(Lr(t,n,g,a),h=t.memoizedState),(c=at||_l(t,n,c,a,m,h,s)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,h,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,h,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=h),o.props=a,o.state=h,o.context=s,a=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return jr(e,t,n,a,r,i)}function jr(e,t,n,a,i,r){sc(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&Bl(t,n,!1),Xe(e,t,r);a=t.stateNode,Ku.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=vn(t,e.child,null,r),t.child=vn(t,null,l,r)):de(e,t,l,r),t.memoizedState=a.state,i&&Bl(t,n,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?Sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sl(e,t.context,!1),Bo(e,t.containerInfo)}function Yl(e,t,n,a,i){return un(),ko(i),t.flags|=256,de(e,t,n,a),t.child}var Hr={dehydrated:null,treeContext:null,retryLane:0};function Or(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var a=t.pendingProps,i=W.current,r=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(W,i&1),e===null)return Ir(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,r?(a=t.mode,r=t.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Di(o,a,0,null),e=Ft(e,a,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Or(n),t.memoizedState=Hr,e):_o(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $u(e,t,o,a,l,i,n);if(r){r=a.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=s,t.deletions=null):(a=ft(i,s),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?r=ft(l,r):(r=Ft(r,o,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,o=e.child.memoizedState,o=o===null?Or(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~n,t.memoizedState=Hr,a}return r=e.child,e=r.sibling,a=ft(r,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function _o(e,t){return t=Di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Da(e,t,n,a){return a!==null&&ko(a),vn(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $u(e,t,n,a,i,r,o){if(n)return t.flags&256?(t.flags&=-257,a=Qi(Error(w(422))),Da(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=a.fallback,i=t.mode,a=Di({mode:"visible",children:a.children},i,0,null),r=Ft(r,i,o,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,t.mode&1&&vn(t,e.child,null,o),t.child.memoizedState=Or(o),t.memoizedState=Hr,r);if(!(t.mode&1))return Da(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,r=Error(w(419)),a=Qi(r,a,void 0),Da(e,t,o,a)}if(l=(o&e.childLanes)!==0,me||l){if(a=te,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,Qe(e,i),Le(a,e,i,-1))}return qo(),a=Qi(Error(w(421))),Da(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=lv.bind(null,e),i._reactRetry=t,null):(e=r.treeContext,xe=pt(i.nextSibling),be=t,U=!0,Ie=null,e!==null&&(De[Ce++]=We,De[Ce++]=Ke,De[Ce++]=It,We=e.id,Ke=e.overflow,It=t),t=_o(t,a.children),t.flags|=4096,t)}function Ul(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Mr(e.return,t,n)}function Xi(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function pc(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(de(e,t,a.children,n),a=W.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ul(e,n,t);else if(e.tag===19)Ul(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(H(W,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xi(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xi(t,!0,n,null,r);break;case"together":Xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gu(e,t,n){switch(t.tag){case 3:dc(t),un();break;case 5:zd(t);break;case 1:ye(t.type)&&Xa(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;H(ti,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(H(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):(H(W,W.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);H(W,W.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return pc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(W,W.current),a)break;return null;case 22:case 23:return t.lanes=0,lc(e,t,n)}return Xe(e,t,n)}var uc,qr,vc,mc;uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qr=function(){};vc=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,At(Oe.current);var r=null;switch(n){case"input":i=cr(e,i),a=cr(e,a),r=[];break;case"select":i=$({},i,{value:void 0}),a=$({},a,{value:void 0}),r=[];break;case"textarea":i=vr(e,i),a=vr(e,a),r=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ja)}fr(n,a);var o;n=null;for(c in i)if(!a.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qn.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in a){var s=a[c];if(l=i!=null?i[c]:void 0,a.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(r||(r=[]),r.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(r=r||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&q("scroll",e),r||l===s||(r=[])):(r=r||[]).push(c,s))}n&&(r=r||[]).push("style",n);var c=r;(t.updateQueue=c)&&(t.flags|=4)}};mc=function(e,t,n,a){n!==a&&(t.flags|=4)};function Tn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ju(e,t,n){var a=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&Qa(),oe(t),null;case 3:return a=t.stateNode,mn(),V(fe),V(se),Ro(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Jr(Ie),Ie=null))),qr(e,t),oe(t),null;case 5:Ao(t);var i=At(ea.current);if(n=t.type,e!==null&&t.stateNode!=null)vc(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=At(Oe.current),ka(t)){a=t.stateNode,n=t.type;var r=t.memoizedProps;switch(a[je]=t,a[Xn]=r,e=(t.mode&1)!==0,n){case"dialog":q("cancel",a),q("close",a);break;case"iframe":case"object":case"embed":q("load",a);break;case"video":case"audio":for(i=0;i<Fn.length;i++)q(Fn[i],a);break;case"source":q("error",a);break;case"img":case"image":case"link":q("error",a),q("load",a);break;case"details":q("toggle",a);break;case"input":el(a,r),q("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},q("invalid",a);break;case"textarea":nl(a,r),q("invalid",a)}fr(n,r),i=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?a.textContent!==l&&(r.suppressHydrationWarning!==!0&&wa(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&wa(a.textContent,l,e),i=["children",""+l]):qn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",a)}switch(n){case"input":va(a),tl(a,r,!0);break;case"textarea":va(a),al(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Ja)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[je]=t,e[Xn]=a,uc(e,t,!1,!1),t.stateNode=e;e:{switch(o=yr(n,a),n){case"dialog":q("cancel",e),q("close",e),i=a;break;case"iframe":case"object":case"embed":q("load",e),i=a;break;case"video":case"audio":for(i=0;i<Fn.length;i++)q(Fn[i],e);i=a;break;case"source":q("error",e),i=a;break;case"img":case"image":case"link":q("error",e),q("load",e),i=a;break;case"details":q("toggle",e),i=a;break;case"input":el(e,a),i=cr(e,a),q("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=$({},a,{value:void 0}),q("invalid",e);break;case"textarea":nl(e,a),i=vr(e,a),q("invalid",e);break;default:i=a}fr(n,i),l=i;for(r in l)if(l.hasOwnProperty(r)){var s=l[r];r==="style"?Us(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vs(e,s)):r==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Vn(e,s):typeof s=="number"&&Vn(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(qn.hasOwnProperty(r)?s!=null&&r==="onScroll"&&q("scroll",e):s!=null&&ro(e,r,s,o))}switch(n){case"input":va(e),tl(e,a,!1);break;case"textarea":va(e),al(e);break;case"option":a.value!=null&&e.setAttribute("value",""+yt(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?nn(e,!!a.multiple,r,!1):a.defaultValue!=null&&nn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ja)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(w(166));if(n=At(ea.current),At(Oe.current),ka(t)){if(a=t.stateNode,n=t.memoizedProps,a[je]=t,(r=a.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:wa(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wa(a.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[je]=t,t.stateNode=a}return oe(t),null;case 13:if(V(W),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&xe!==null&&t.mode&1&&!(t.flags&128))Pd(),un(),t.flags|=98560,r=!1;else if(r=ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(w(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(w(317));r[je]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),r=!1}else Ie!==null&&(Jr(Ie),Ie=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):qo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return mn(),qr(e,t),e===null&&Jn(t.stateNode.containerInfo),oe(t),null;case 10:return Co(t.type._context),oe(t),null;case 17:return ye(t.type)&&Qa(),oe(t),null;case 19:if(V(W),r=t.memoizedState,r===null)return oe(t),null;if(a=(t.flags&128)!==0,o=r.rendering,o===null)if(a)Tn(r,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ii(e),o!==null){for(t.flags|=128,Tn(r,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)r=n,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(W,W.current&1|2),t.child}e=e.sibling}r.tail!==null&&J()>yn&&(t.flags|=128,a=!0,Tn(r,!1),t.lanes=4194304)}else{if(!a)if(e=ii(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!U)return oe(t),null}else 2*J()-r.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,a=!0,Tn(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=J(),t.sibling=null,n=W.current,H(W,a?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Oo(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?he&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Qu(e,t){switch(wo(t),t.tag){case 1:return ye(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),V(fe),V(se),Ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(V(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(W),null;case 4:return mn(),null;case 10:return Co(t.type._context),null;case 22:case 23:return Oo(),null;case 24:return null;default:return null}}var Ca=!1,le=!1,Xu=typeof WeakSet=="function"?WeakSet:Set,T=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){G(e,t,a)}else n.current=null}function Vr(e,t,n){try{n()}catch(a){G(e,t,a)}}var Wl=!1;function Zu(e,t){if(Tr=Ka,e=xd(),xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,c=0,u=0,y=e,m=null;t:for(;;){for(var g;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==r||a!==0&&y.nodeType!==3||(s=o+a),y.nodeType===3&&(o+=y.nodeValue.length),(g=y.firstChild)!==null;)m=y,y=g;for(;;){if(y===e)break t;if(m===n&&++c===i&&(l=o),m===r&&++u===a&&(s=o),(g=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sr={focusedElem:e,selectionRange:n},Ka=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var E=h.memoizedProps,_=h.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?E:Fe(t.type,E),_);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){G(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return h=Wl,Wl=!1,h}function jn(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&Vr(t,n,r)}i=i.next}while(i!==a)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Yr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[je],delete t[Xn],delete t[Rr],delete t[Lu],delete t[_u])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function Kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ur(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ja));else if(a!==4&&(e=e.child,e!==null))for(Ur(e,t,n),e=e.sibling;e!==null;)Ur(e,t,n),e=e.sibling}function Wr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Wr(e,t,n),e=e.sibling;e!==null;)Wr(e,t,n),e=e.sibling}var ne=null,Pe=!1;function tt(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:le||en(n,t);case 6:var a=ne,i=Pe;ne=null,tt(e,t,n),ne=a,Pe=i,ne!==null&&(Pe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Pe?(e=ne,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),Kn(e)):Ui(ne,n.stateNode));break;case 4:a=ne,i=Pe,ne=n.stateNode.containerInfo,Pe=!0,tt(e,t,n),ne=a,Pe=i;break;case 0:case 11:case 14:case 15:if(!le&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var r=i,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&Vr(n,t,o),i=i.next}while(i!==a)}tt(e,t,n);break;case 1:if(!le&&(en(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){G(n,t,l)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(le=(a=le)||n.memoizedState!==null,tt(e,t,n),le=a):tt(e,t,n);break;default:tt(e,t,n)}}function $l(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xu),t.forEach(function(a){var i=sv.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var r=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Pe=!1;break e;case 3:ne=l.stateNode.containerInfo,Pe=!0;break e;case 4:ne=l.stateNode.containerInfo,Pe=!0;break e}l=l.return}if(ne===null)throw Error(w(160));gc(r,o,i),ne=null,Pe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hc(t,e),t=t.sibling}function hc(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),ze(e),a&4){try{jn(3,e,e.return),ki(3,e)}catch(E){G(e,e.return,E)}try{jn(5,e,e.return)}catch(E){G(e,e.return,E)}}break;case 1:Re(t,e),ze(e),a&512&&n!==null&&en(n,n.return);break;case 5:if(Re(t,e),ze(e),a&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Vn(i,"")}catch(E){G(e,e.return,E)}}if(a&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,o=n!==null?n.memoizedProps:r,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&Hs(i,r),yr(l,o);var c=yr(l,r);for(o=0;o<s.length;o+=2){var u=s[o],y=s[o+1];u==="style"?Us(i,y):u==="dangerouslySetInnerHTML"?Vs(i,y):u==="children"?Vn(i,y):ro(i,u,y,c)}switch(l){case"input":pr(i,r);break;case"textarea":Os(i,r);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?nn(i,!!r.multiple,g,!1):m!==!!r.multiple&&(r.defaultValue!=null?nn(i,!!r.multiple,r.defaultValue,!0):nn(i,!!r.multiple,r.multiple?[]:"",!1))}i[Xn]=r}catch(E){G(e,e.return,E)}}break;case 6:if(Re(t,e),ze(e),a&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(E){G(e,e.return,E)}}break;case 3:if(Re(t,e),ze(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(E){G(e,e.return,E)}break;case 4:Re(t,e),ze(e);break;case 13:Re(t,e),ze(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(jo=J())),a&4&&$l(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||u,Re(t,e),le=c):Re(t,e),ze(e),a&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(T=e,u=e.child;u!==null;){for(y=T=u;T!==null;){switch(m=T,g=m.child,m.tag){case 0:case 11:case 14:case 15:jn(4,m,m.return);break;case 1:en(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){a=m,n=m.return;try{t=a,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(E){G(a,n,E)}}break;case 5:en(m,m.return);break;case 22:if(m.memoizedState!==null){Jl(y);continue}}g!==null?(g.return=m,T=g):Jl(y)}u=u.sibling}e:for(u=null,y=e;;){if(y.tag===5){if(u===null){u=y;try{i=y.stateNode,c?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=y.stateNode,s=y.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ys("display",o))}catch(E){G(e,e.return,E)}}}else if(y.tag===6){if(u===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(E){G(e,e.return,E)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;u===y&&(u=null),y=y.return}u===y&&(u=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Re(t,e),ze(e),a&4&&$l(e);break;case 21:break;default:Re(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var a=n;break e}n=n.return}throw Error(w(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Vn(i,""),a.flags&=-33);var r=Kl(e);Wr(e,r,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Kl(e);Ur(e,l,o);break;default:throw Error(w(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ev(e,t,n){T=e,xc(e)}function xc(e,t,n){for(var a=(e.mode&1)!==0;T!==null;){var i=T,r=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Ca;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||le;l=Ca;var c=le;if(Ca=o,(le=s)&&!c)for(T=i;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?Ql(i):s!==null?(s.return=o,T=s):Ql(i);for(;r!==null;)T=r,xc(r),r=r.sibling;T=i,Ca=l,le=c}Gl(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,T=r):Gl(e)}}function Gl(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ki(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!le)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Il(t,r,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Il(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var y=u.dehydrated;y!==null&&Kn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Yr(t)}catch(m){G(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Jl(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ql(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(s){G(t,n,s)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(s){G(t,i,s)}}var r=t.return;try{Yr(t)}catch(s){G(t,r,s)}break;case 5:var o=t.return;try{Yr(t)}catch(s){G(t,o,s)}}}catch(s){G(t,t.return,s)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var tv=Math.ceil,li=Ze.ReactCurrentDispatcher,zo=Ze.ReactCurrentOwner,Se=Ze.ReactCurrentBatchConfig,L=0,te=null,Q=null,ae=0,he=0,tn=xt(0),Z=0,ia=null,Lt=0,Ei=0,No=0,Hn=null,ve=null,jo=0,yn=1/0,Ye=null,si=!1,Kr=null,vt=null,Ta=!1,lt=null,di=0,On=0,$r=null,ja=-1,Ha=0;function ce(){return L&6?J():ja!==-1?ja:ja=J()}function mt(e){return e.mode&1?L&2&&ae!==0?ae&-ae:Nu.transition!==null?(Ha===0&&(Ha=ad()),Ha):(e=N,e!==0||(e=window.event,e=e===void 0?16:cd(e.type)),e):1}function Le(e,t,n,a){if(50<On)throw On=0,$r=null,Error(w(185));oa(e,n,a),(!(L&2)||e!==te)&&(e===te&&(!(L&2)&&(Ei|=n),Z===4&&rt(e,ae)),ge(e,a),n===1&&L===0&&!(t.mode&1)&&(yn=J()+500,xi&&bt()))}function ge(e,t){var n=e.callbackNode;Np(e,t);var a=Wa(e,e===te?ae:0);if(a===0)n!==null&&ol(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&ol(n),t===1)e.tag===0?zu(Xl.bind(null,e)):Ad(Xl.bind(null,e)),Iu(function(){!(L&6)&&bt()}),n=null;else{switch(id(a)){case 1:n=po;break;case 4:n=td;break;case 16:n=Ua;break;case 536870912:n=nd;break;default:n=Ua}n=Sc(n,bc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bc(e,t){if(ja=-1,Ha=0,L&6)throw Error(w(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var a=Wa(e,e===te?ae:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=ci(e,a);else{t=a;var i=L;L|=2;var r=kc();(te!==e||ae!==t)&&(Ye=null,yn=J()+500,Rt(e,t));do try{iv();break}catch(l){wc(e,l)}while(!0);Do(),li.current=r,L=i,Q!==null?t=0:(te=null,ae=0,t=Z)}if(t!==0){if(t===2&&(i=wr(e),i!==0&&(a=i,t=Gr(e,i))),t===1)throw n=ia,Rt(e,0),rt(e,a),ge(e,J()),n;if(t===6)rt(e,a);else{if(i=e.current.alternate,!(a&30)&&!nv(i)&&(t=ci(e,a),t===2&&(r=wr(e),r!==0&&(a=r,t=Gr(e,r))),t===1))throw n=ia,Rt(e,0),rt(e,a),ge(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(w(345));case 2:Tt(e,ve,Ye);break;case 3:if(rt(e,a),(a&130023424)===a&&(t=jo+500-J(),10<t)){if(Wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ar(Tt.bind(null,e,ve,Ye),t);break}Tt(e,ve,Ye);break;case 4:if(rt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-Me(a);r=1<<o,o=t[o],o>i&&(i=o),a&=~r}if(a=i,a=J()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*tv(a/1960))-a,10<a){e.timeoutHandle=Ar(Tt.bind(null,e,ve,Ye),a);break}Tt(e,ve,Ye);break;case 5:Tt(e,ve,Ye);break;default:throw Error(w(329))}}}return ge(e,J()),e.callbackNode===n?bc.bind(null,e):null}function Gr(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=ci(e,t),e!==2&&(t=ve,ve=n,t!==null&&Jr(t)),e}function Jr(e){ve===null?ve=e:ve.push.apply(ve,e)}function nv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!_e(r(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~No,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),a=1<<n;e[n]=-1,t&=~a}}function Xl(e){if(L&6)throw Error(w(327));sn();var t=Wa(e,0);if(!(t&1))return ge(e,J()),null;var n=ci(e,t);if(e.tag!==0&&n===2){var a=wr(e);a!==0&&(t=a,n=Gr(e,a))}if(n===1)throw n=ia,Rt(e,0),rt(e,t),ge(e,J()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,ve,Ye),ge(e,J()),null}function Ho(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(yn=J()+500,xi&&bt())}}function _t(e){lt!==null&&lt.tag===0&&!(L&6)&&sn();var t=L;L|=1;var n=Se.transition,a=N;try{if(Se.transition=null,N=1,e)return e()}finally{N=a,Se.transition=n,L=t,!(L&6)&&bt()}}function Oo(){he=tn.current,V(tn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pu(n)),Q!==null)for(n=Q.return;n!==null;){var a=n;switch(wo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Qa();break;case 3:mn(),V(fe),V(se),Ro();break;case 5:Ao(a);break;case 4:mn();break;case 13:V(W);break;case 19:V(W);break;case 10:Co(a.type._context);break;case 22:case 23:Oo()}n=n.return}if(te=e,Q=e=ft(e.current,null),ae=he=t,Z=0,ia=null,No=Ei=Lt=0,ve=Hn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,r=n.pending;if(r!==null){var o=r.next;r.next=i,a.next=o}n.pending=a}Bt=null}return e}function wc(e,t){do{var n=Q;try{if(Do(),_a.current=oi,ri){for(var a=K.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ri=!1}if(Mt=0,ee=X=K=null,Nn=!1,ta=0,zo.current=null,n===null||n.return===null){Z=1,ia=t,Q=null;break}e:{var r=e,o=n.return,l=n,s=t;if(t=ae,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,y=u.tag;if(!(u.mode&1)&&(y===0||y===11||y===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=jl(o);if(g!==null){g.flags&=-257,Hl(g,o,l,r,t),g.mode&1&&Nl(r,c,t),t=g,s=c;var h=t.updateQueue;if(h===null){var E=new Set;E.add(s),t.updateQueue=E}else h.add(s);break e}else{if(!(t&1)){Nl(r,c,t),qo();break e}s=Error(w(426))}}else if(U&&l.mode&1){var _=jl(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Hl(_,o,l,r,t),ko(fn(s,l));break e}}r=s=fn(s,l),Z!==4&&(Z=2),Hn===null?Hn=[r]:Hn.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var v=ic(r,s,t);Pl(r,v);break e;case 1:l=s;var p=r.type,f=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vt===null||!vt.has(f)))){r.flags|=65536,t&=-t,r.lanes|=t;var b=rc(r,l,t);Pl(r,b);break e}}r=r.return}while(r!==null)}Dc(n)}catch(C){t=C,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function kc(){var e=li.current;return li.current=oi,e===null?oi:e}function qo(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Lt&268435455)&&!(Ei&268435455)||rt(te,ae)}function ci(e,t){var n=L;L|=2;var a=kc();(te!==e||ae!==t)&&(Ye=null,Rt(e,t));do try{av();break}catch(i){wc(e,i)}while(!0);if(Do(),L=n,li.current=a,Q!==null)throw Error(w(261));return te=null,ae=0,Z}function av(){for(;Q!==null;)Ec(Q)}function iv(){for(;Q!==null&&!Ap();)Ec(Q)}function Ec(e){var t=Tc(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Dc(e):Q=t,zo.current=null}function Dc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qu(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Q=null;return}}else if(n=Ju(n,t,he),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Z===0&&(Z=5)}function Tt(e,t,n){var a=N,i=Se.transition;try{Se.transition=null,N=1,rv(e,t,n,a)}finally{Se.transition=i,N=a}return null}function rv(e,t,n,a){do sn();while(lt!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(jp(e,r),e===te&&(Q=te=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,Sc(Ua,function(){return sn(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Se.transition,Se.transition=null;var o=N;N=1;var l=L;L|=4,zo.current=null,Zu(e,n),hc(n,e),Cu(Sr),Ka=!!Tr,Sr=Tr=null,e.current=n,ev(n),Rp(),L=l,N=o,Se.transition=r}else e.current=n;if(Ta&&(Ta=!1,lt=e,di=i),r=e.pendingLanes,r===0&&(vt=null),Ip(n.stateNode),ge(e,J()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=Kr,Kr=null,e;return di&1&&e.tag!==0&&sn(),r=e.pendingLanes,r&1?e===$r?On++:(On=0,$r=e):On=0,bt(),null}function sn(){if(lt!==null){var e=id(di),t=Se.transition,n=N;try{if(Se.transition=null,N=16>e?16:e,lt===null)var a=!1;else{if(e=lt,lt=null,di=0,L&6)throw Error(w(331));var i=L;for(L|=4,T=e.current;T!==null;){var r=T,o=r.child;if(T.flags&16){var l=r.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(T=c;T!==null;){var u=T;switch(u.tag){case 0:case 11:case 15:jn(8,u,r)}var y=u.child;if(y!==null)y.return=u,T=y;else for(;T!==null;){u=T;var m=u.sibling,g=u.return;if(fc(u),u===c){T=null;break}if(m!==null){m.return=g,T=m;break}T=g}}}var h=r.alternate;if(h!==null){var E=h.child;if(E!==null){h.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}T=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,T=o;else e:for(;T!==null;){if(r=T,r.flags&2048)switch(r.tag){case 0:case 11:case 15:jn(9,r,r.return)}var v=r.sibling;if(v!==null){v.return=r.return,T=v;break e}T=r.return}}var p=e.current;for(T=p;T!==null;){o=T;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,T=f;else e:for(o=p;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ki(9,l)}}catch(C){G(l,l.return,C)}if(l===o){T=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,T=b;break e}T=l.return}}if(L=i,bt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(mi,e)}catch{}a=!0}return a}finally{N=n,Se.transition=t}}return!1}function Zl(e,t,n){t=fn(n,t),t=ic(e,t,1),e=ut(e,t,1),t=ce(),e!==null&&(oa(e,1,t),ge(e,t))}function G(e,t,n){if(e.tag===3)Zl(e,e,n);else for(;t!==null;){if(t.tag===3){Zl(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vt===null||!vt.has(a))){e=fn(n,e),e=rc(t,e,1),t=ut(t,e,1),e=ce(),t!==null&&(oa(t,1,e),ge(t,e));break}}t=t.return}}function ov(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ae&n)===n&&(Z===4||Z===3&&(ae&130023424)===ae&&500>J()-jo?Rt(e,0):No|=n),ge(e,t)}function Cc(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=ce();e=Qe(e,t),e!==null&&(oa(e,t,n),ge(e,n))}function lv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function sv(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(w(314))}a!==null&&a.delete(t),Cc(e,n)}var Tc;Tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Gu(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Rd(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Na(e,t),e=t.pendingProps;var i=pn(t,se.current);ln(t,n),i=Po(null,t,a,e,i,n);var r=Io();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(a)?(r=!0,Xa(t)):r=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,So(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,_r(t,a,e,n),t=jr(null,t,a,!0,r,n)):(t.tag=0,U&&r&&bo(t),de(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=cv(a),e=Fe(a,e),i){case 0:t=Nr(null,t,a,e,n);break e;case 1:t=Vl(null,t,a,e,n);break e;case 11:t=Ol(null,t,a,e,n);break e;case 14:t=ql(null,t,a,Fe(a.type,e),n);break e}throw Error(w(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Fe(a,i),Nr(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Fe(a,i),Vl(e,t,a,i,n);case 3:e:{if(dc(t),e===null)throw Error(w(387));a=t.pendingProps,r=t.memoizedState,i=r.element,_d(e,t),ai(t,a,null,n);var o=t.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){i=fn(Error(w(423)),t),t=Yl(e,t,a,n,i);break e}else if(a!==i){i=fn(Error(w(424)),t),t=Yl(e,t,a,n,i);break e}else for(xe=pt(t.stateNode.containerInfo.firstChild),be=t,U=!0,Ie=null,n=Md(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),a===i){t=Xe(e,t,n);break e}de(e,t,a,n)}t=t.child}return t;case 5:return zd(t),e===null&&Ir(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,o=i.children,Br(a,i)?o=null:r!==null&&Br(a,r)&&(t.flags|=32),sc(e,t),de(e,t,o,n),t.child;case 6:return e===null&&Ir(t),null;case 13:return cc(e,t,n);case 4:return Bo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vn(t,null,a,n):de(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Fe(a,i),Ol(e,t,a,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,r=t.memoizedProps,o=i.value,H(ti,a._currentValue),a._currentValue=o,r!==null)if(_e(r.value,o)){if(r.children===i.children&&!fe.current){t=Xe(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var s=l.firstContext;s!==null;){if(s.context===a){if(r.tag===1){s=$e(-1,n&-n),s.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Mr(r.return,n,t),l.lanes|=n;break}s=s.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mr(o,n,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,ln(t,n),i=Be(i),a=a(i),t.flags|=1,de(e,t,a,n),t.child;case 14:return a=t.type,i=Fe(a,t.pendingProps),i=Fe(a.type,i),ql(e,t,a,i,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Fe(a,i),Na(e,t),t.tag=1,ye(a)?(e=!0,Xa(t)):e=!1,ln(t,n),ac(t,a,i),_r(t,a,i,n),jr(null,t,a,!0,e,n);case 19:return pc(e,t,n);case 22:return lc(e,t,n)}throw Error(w(156,t.tag))};function Sc(e,t){return ed(e,t)}function dv(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,a){return new dv(e,t,n,a)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cv(e){if(typeof e=="function")return Vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lo)return 11;if(e===so)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oa(e,t,n,a,i,r){var o=2;if(a=e,typeof e=="function")Vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ut:return Ft(n.children,i,r,t);case oo:o=8,i|=8;break;case or:return e=Te(12,n,t,i|2),e.elementType=or,e.lanes=r,e;case lr:return e=Te(13,n,t,i),e.elementType=lr,e.lanes=r,e;case sr:return e=Te(19,n,t,i),e.elementType=sr,e.lanes=r,e;case zs:return Di(n,i,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:o=10;break e;case _s:o=9;break e;case lo:o=11;break e;case so:o=14;break e;case nt:o=16,a=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(o,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Ft(e,t,n,a){return e=Te(7,e,a,t),e.lanes=n,e}function Di(e,t,n,a){return e=Te(22,e,a,t),e.elementType=zs,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function er(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pv(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yo(e,t,n,a,i,r,o,l,s){return e=new pv(e,t,n,l,s),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Te(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},So(r),e}function uv(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Bc(e){if(!e)return gt;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return Bd(e,n,t)}return t}function Ac(e,t,n,a,i,r,o,l,s){return e=Yo(n,a,!0,e,i,r,o,l,s),e.context=Bc(null),n=e.current,a=ce(),i=mt(n),r=$e(a,i),r.callback=t??null,ut(n,r,i),e.current.lanes=i,oa(e,i,a),ge(e,a),e}function Ci(e,t,n,a){var i=t.current,r=ce(),o=mt(i);return n=Bc(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(r,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ut(i,t,o),e!==null&&(Le(e,i,o,r),La(e,i,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function es(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uo(e,t){es(e,t),(e=e.alternate)&&es(e,t)}function vv(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wo(e){this._internalRoot=e}Ti.prototype.render=Wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ci(e,t,null,null)};Ti.prototype.unmount=Wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){Ci(null,e,null,null)}),t[Je]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&dd(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ts(){}function mv(e,t,n,a,i){if(i){if(typeof a=="function"){var r=a;a=function(){var c=pi(o);r.call(c)}}var o=Ac(t,a,e,0,null,!1,!1,"",ts);return e._reactRootContainer=o,e[Je]=o.current,Jn(e.nodeType===8?e.parentNode:e),_t(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var c=pi(s);l.call(c)}}var s=Yo(e,0,!1,null,null,!1,!1,"",ts);return e._reactRootContainer=s,e[Je]=s.current,Jn(e.nodeType===8?e.parentNode:e),_t(function(){Ci(t,s,n,a)}),s}function Bi(e,t,n,a,i){var r=n._reactRootContainer;if(r){var o=r;if(typeof i=="function"){var l=i;i=function(){var s=pi(o);l.call(s)}}Ci(t,o,e,i)}else o=mv(n,t,e,i,a);return pi(o)}rd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(uo(t,n|1),ge(t,J()),!(L&6)&&(yn=J()+500,bt()))}break;case 13:_t(function(){var a=Qe(e,1);if(a!==null){var i=ce();Le(a,e,1,i)}}),Uo(e,1)}};vo=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=ce();Le(t,e,134217728,n)}Uo(e,134217728)}};od=function(e){if(e.tag===13){var t=mt(e),n=Qe(e,t);if(n!==null){var a=ce();Le(n,e,t,a)}Uo(e,t)}};ld=function(){return N};sd=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};hr=function(e,t,n){switch(t){case"input":if(pr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=hi(a);if(!i)throw Error(w(90));js(a),pr(a,i)}}}break;case"textarea":Os(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};$s=Ho;Gs=_t;var fv={usingClientEntryPoint:!1,Events:[sa,Gt,hi,Ws,Ks,Ho]},Sn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yv={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xs(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{mi=Sa.inject(yv),He=Sa}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(t))throw Error(w(200));return uv(e,t,null,n)};ke.createRoot=function(e,t){if(!Ko(e))throw Error(w(299));var n=!1,a="",i=Rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yo(e,1,!1,null,null,n,!1,a,i),e[Je]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Wo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Xs(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return _t(e)};ke.hydrate=function(e,t,n){if(!Si(t))throw Error(w(200));return Bi(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Ko(e))throw Error(w(405));var a=n!=null&&n.hydratedSources||null,i=!1,r="",o=Rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ac(t,null,e,1,n??null,i,!1,r,o),e[Je]=t.current,Jn(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ti(t)};ke.render=function(e,t,n){if(!Si(t))throw Error(w(200));return Bi(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Si(e))throw Error(w(40));return e._reactRootContainer?(_t(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};ke.unstable_batchedUpdates=Ho;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Si(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Bi(e,t,n,!1,a)};ke.version="18.3.1-next-f1338f8080-20240426";function Fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)}catch(e){console.error(e)}}Fc(),Fs.exports=ke;var gv=Fs.exports,ns=gv;ir.createRoot=ns.createRoot,ir.hydrateRoot=ns.hydrateRoot;const Ve={employee:{name:"John Doe",role:"Software Engineer",initials:"JD",empId:"EMP-10042",dept:"Senior Software Engineer · Engineering",dash:"dash-employee",isITAdmin:!1,email:"john.doe@company.com",password:"emp123"},manager:{name:"Sarah Mitchell",role:"VP Engineering",initials:"SM",empId:"EMP-10001",dept:"VP Engineering · Leadership",dash:"dash-manager",isITAdmin:!1,email:"sarah.mitchell@company.com",password:"mgr123"},hr:{name:"Anita Patel",role:"HR Admin",initials:"AP",empId:"EMP-10010",dept:"HR Admin · People & Culture",dash:"dash-hr",isITAdmin:!1,email:"anita.patel@company.com",password:"hr123"},payroll:{name:"Vivek Shah",role:"Payroll Admin",initials:"VS",empId:"EMP-10015",dept:"Payroll Admin · Finance",dash:"dash-payroll",isITAdmin:!1,email:"vivek.shah@company.com",password:"pay123"},leadership:{name:"Rajesh Kumar",role:"CEO",initials:"RK",empId:"EMP-10000",dept:"Chief Executive Officer",dash:"dash-leadership",isITAdmin:!1,email:"rajesh.kumar@company.com",password:"ceo123"},itadmin:{name:"Ravi Kumar",role:"IT Admin",initials:"RK",empId:"EMP-10020",dept:"IT Administrator · Technology",dash:"dash-itadmin",isITAdmin:!0,email:"ravi.kumar@company.com",password:"it123"}},hv=[{title:"Main",items:[{page:"dashboard",label:"Home",icon:"home"},{page:"tasks",label:"To Do",icon:"tasks",badge:{text:"5",className:"amber"}}]},{title:"Self Service",items:[{page:"attendance",label:"Attendance Info",icon:"attendance"},{page:"leave",label:"Leave",icon:"leave"},{page:"payroll",label:"Salary",icon:"payroll"},{page:"taxdocs",label:"Tax Documents",icon:"taxdocs"},{page:"documents",label:"Documents",icon:"documents"}]},{title:"Organization",items:[{page:"people",label:"People",icon:"people"},{page:"requests",label:"Expense Claim",icon:"requests"},{page:"helpdesk",label:"Help Desk",icon:"helpdesk",badge:{text:"2",className:""}},{page:"reports",label:"Reports",icon:"reports",reportsOnly:!0}]}];function Pc(){const e=new Date().getHours();return e<12?"Good morning":e<17?"Good afternoon":"Good evening"}function Pn(){const e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["January","February","March","April","May","June","July","August","September","October","November","December"];return`${t[e.getDay()]}, ${n[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}function xv(e,t,n){if(e==="dashboard"){const i={employee:`Here's what's happening at work today — ${Pn()}`,manager:`Team overview and pending approvals — ${Pn()}`,hr:`Workforce management and HR operations — ${Pn()}`,payroll:"Manage salary, payroll runs, and compliance",leadership:"Organization-wide metrics and strategic insights",itadmin:`System management, ticket approvals, and user access — ${Pn()}`};return{main:`${Pc()}, ${n}! 👋`,sub:i[t]||i.employee}}return{profile:{main:"Employee Information",sub:"View and manage your personal, address, bank and passport details"},tasks:{main:"Task Center",sub:"All your pending actions, approvals, and reminders"},leave:{main:"Leave Management",sub:"Apply, track, and manage your leaves"},attendance:{main:"Attendance Info",sub:""},payroll:{main:"Salary & Payslips",sub:"View payslips, salary structure, CTC breakdown and bank details"},documents:{main:"Document Center",sub:""},people:{main:"People",sub:"Organisation chart, employee directory and onboarding tracker"},taxdocs:{main:"Tax Documents",sub:"View and manage your tax certificates and declarations"},helpdesk:{main:"Help Desk",sub:"Create and track support tickets. IT Admin approves all tickets."},requests:{main:"Expense Claim",sub:""},reports:{main:"Reports & Analytics",sub:""}}[e]||{main:"PeopleFlow HRMS",sub:""}}const bv=[["employee","Employee"],["manager","Manager"],["hr","HR Admin"],["payroll","Payroll Admin"],["leadership","Leadership"],["itadmin","IT Admin"]];function wv(){return d.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}function kv({selectedRole:e,email:t,password:n,onRoleChange:a,onEmailChange:i,onPasswordChange:r,onLogin:o,darkMode:l}){const s=l?{background:"#1E2130",boxShadow:"0 20px 60px rgba(0,0,0,0.6)",border:"1px solid #2D3248"}:{background:"#FFFFFF",boxShadow:"0 20px 60px rgba(0,0,0,0.3)",border:"1px solid rgba(13,148,136,0.12)"},c="var(--text-primary)",u="var(--text-secondary)",y=l?{width:"100%",padding:"9px 12px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",fontSize:"12.5px",fontFamily:"var(--font)",outline:"none",color:"var(--text-primary)",background:"var(--bg)"}:{width:"100%",padding:"9px 12px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",fontSize:"12.5px",fontFamily:"var(--font)",outline:"none",color:"var(--text-primary)",background:"var(--bg)"};return d.jsxs("div",{id:"loginScreen",style:{minHeight:"100vh",display:"flex",background:"radial-gradient(ellipse at 62% 50%, #0F7E85 0%, #095356 35%, #042C2C 65%, #010D0D 100%)",alignItems:"center",justifyContent:"center",padding:"24px",flexDirection:"column"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"26px"},children:[d.jsx("div",{style:{width:"36px",height:"36px",background:"var(--primary)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(wv,{})}),d.jsx("span",{style:{fontSize:"16px",fontWeight:600,color:"#FFFFFF"},children:"PeopleFlow HRMS"})]}),d.jsxs("div",{style:{borderRadius:"var(--radius-lg)",padding:"28px",width:"100%",maxWidth:"372px",...s},className:"login-card",children:[d.jsx("div",{className:"login-title",style:{color:c,marginBottom:"3px"},children:"Sign in to your account"}),d.jsx("div",{className:"login-sub",style:{color:u,marginBottom:"22px"},children:"Enter your credentials to continue"}),d.jsxs("div",{className:"login-form-group",children:[d.jsx("label",{className:"login-label",style:{color:u},children:"Login ID / Email"}),d.jsx("input",{className:"login-input",id:"loginEmail",type:"text",placeholder:"john.doe@company.com",value:t,onChange:m=>i(m.target.value),style:y})]}),d.jsxs("div",{className:"login-form-group",children:[d.jsx("label",{className:"login-label",style:{color:u},children:"Password"}),d.jsx("input",{className:"login-input",id:"loginPassword",type:"password",placeholder:"Enter password",value:n,onChange:m=>r(m.target.value),style:y})]}),d.jsxs("div",{className:"login-roles",children:[d.jsx("div",{className:"login-label",style:{color:u,marginBottom:"10px"},children:"Login as"}),d.jsx("div",{className:"login-role-chips",id:"roleChips",style:{justifyContent:"flex-start"},children:bv.map(([m,g])=>d.jsx("div",{className:`role-chip ${e===m?"selected":""}`,onClick:()=>a(m,Ve[m]),style:{cursor:"pointer"},children:g},m))})]}),d.jsx("button",{className:"login-btn",onClick:o,children:"Sign In"}),d.jsx("div",{style:{textAlign:"center",marginTop:"16px",fontSize:"10.5px",color:l?"var(--text-secondary)":"#94A3B8"},children:"Select a role above — credentials are auto-filled"})]})]})}function Ev({name:e}){const t={className:"nav-svg",viewBox:"0 0 24 24"};switch(e){case"home":return d.jsxs("svg",{...t,children:[d.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),d.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]});case"tasks":return d.jsxs("svg",{...t,children:[d.jsx("polyline",{points:"9 11 12 14 22 4"}),d.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]});case"attendance":return d.jsxs("svg",{...t,children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polyline",{points:"12 6 12 12 16 14"})]});case"leave":return d.jsxs("svg",{...t,children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),d.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),d.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),d.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]});case"payroll":return d.jsxs("svg",{...t,children:[d.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),d.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),d.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]});case"taxdocs":return d.jsxs("svg",{...t,children:[d.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),d.jsx("polyline",{points:"14 2 14 8 20 8"})]});case"documents":return d.jsx("svg",{...t,children:d.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})});case"people":return d.jsxs("svg",{...t,children:[d.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]});case"requests":return d.jsx("svg",{...t,children:d.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})});case"helpdesk":return d.jsxs("svg",{...t,children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]});case"reports":return d.jsxs("svg",{...t,children:[d.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),d.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),d.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]});default:return null}}function Dv(){return d.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}function Cv(){return d.jsx("div",{style:{width:"30px",height:"30px",background:"linear-gradient(135deg,#14B8A6,#0F766E)",borderRadius:"7px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 2px 6px rgba(13,148,136,0.35)"},children:d.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"}),d.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]})})}function Tv({currentPage:e,currentRole:t,onNavigate:n}){const a=["hr","payroll","leadership"].includes(t);return d.jsxs("nav",{className:"sidebar",id:"appSidebar",children:[d.jsxs("div",{className:"sidebar-logo",children:[d.jsx(Cv,{}),d.jsxs("div",{children:[d.jsx("div",{className:"logo-text",children:"PeopleFlow"}),d.jsx("div",{className:"logo-sub",children:"HRMS Platform"})]})]}),hv.map(i=>d.jsxs("div",{className:"nav-section",children:[d.jsx("div",{className:"nav-section-title",children:i.title}),i.items.filter(r=>!r.reportsOnly||a).map(r=>{const o=e===r.page;return d.jsxs("div",{className:`nav-item ${o?"active":""}`,onClick:()=>n(r.page),"data-page":r.page,children:[d.jsx("span",{className:"nav-icon",children:d.jsx(Ev,{name:r.icon})}),d.jsx("span",{children:r.label}),r.badge?d.jsx("span",{className:`nav-badge ${r.badge.className||""}`,children:r.badge.text}):null]},r.page)})]},i.title))]})}function Sv(){return d.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[d.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function Bv(){return d.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"})]})}function Av(){return d.jsx("svg",{id:"darkModeIcon-moon",width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}function Rv(){return d.jsxs("svg",{id:"darkModeIcon-sun",width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),d.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),d.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),d.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),d.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),d.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),d.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),d.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}function Fv(){return d.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[d.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),d.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function Pv(){return d.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[d.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d.jsx("polyline",{points:"7 10 12 15 17 10"}),d.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}function Iv(){return d.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})}function Mv({user:e,open:t,onLogout:n,onToggleDarkMode:a,darkMode:i,onNavigate:r,onShowToast:o,onClose:l}){const s=()=>{l&&l()};return d.jsxs("div",{className:`profile-dropdown ${t?"show":""}`,id:"profileDropdown",children:[d.jsxs("div",{className:"pd-header",children:[d.jsx("div",{className:"pd-avatar",id:"pdAvatar",children:e.initials}),d.jsxs("div",{children:[d.jsx("div",{className:"pd-name",id:"pdName",children:e.name}),d.jsx("div",{className:"pd-role",id:"pdRole",children:e.role}),d.jsx("div",{className:"pd-emp",id:"pdEmp",children:e.empId})]})]}),d.jsxs("div",{className:"pd-body",children:[d.jsxs("div",{className:"pd-item",onClick:()=>{s(),r==null||r("profile")},children:[d.jsx("span",{className:"pd-icon",children:d.jsx(Sv,{})}),"View My Profile"]}),d.jsxs("div",{className:"pd-item",onClick:()=>{s(),o==null||o("Settings coming soon","info")},children:[d.jsx("span",{className:"pd-icon",children:d.jsx(Bv,{})}),"Account Settings"]}),d.jsxs("div",{className:"pd-item",onClick:()=>{a==null||a(),s()},id:"darkModeMenuItem",children:[d.jsx("span",{className:"pd-icon",children:i?d.jsx(Rv,{}):d.jsx(Av,{})}),d.jsx("span",{id:"darkModeLabel",children:i?"Light Mode":"Dark Mode"})]}),d.jsx("div",{className:"pd-divider"}),d.jsxs("div",{className:"pd-item",onClick:()=>{s(),o==null||o("Change password email sent","info")},children:[d.jsx("span",{className:"pd-icon",children:d.jsx(Fv,{})}),"Change Password"]}),d.jsxs("div",{className:"pd-item",onClick:()=>{s(),o==null||o("Downloading payslip...","info")},children:[d.jsx("span",{className:"pd-icon",children:d.jsx(Pv,{})}),"Download Latest Payslip"]}),d.jsx("div",{className:"pd-divider"}),d.jsxs("div",{className:"pd-item pd-logout",onClick:n,children:[d.jsx("span",{className:"pd-icon",children:d.jsx(Iv,{})}),"Sign Out"]})]})]})}function Lv({headerCopy:e,user:t,showNotif:n,onToggleNotif:a,showProfile:i,onToggleProfile:r,onLogout:o,onToggleDarkMode:l,darkMode:s,onNavigate:c,onShowToast:u,onCloseProfile:y}){const m=k.useRef(null);return d.jsxs("header",{className:"header",children:[d.jsxs("div",{className:"header-greeting",id:"headerGreeting",children:[d.jsx("div",{className:"header-greeting-main",id:"headerGreetingMain",children:e.main}),d.jsx("div",{className:"header-greeting-sub",id:"headerGreetingSub",children:e.sub})]}),d.jsxs("div",{className:"header-actions",children:[d.jsxs("div",{className:"icon-btn",onClick:a,title:"Notifications",style:{position:"relative"},children:[d.jsx(Dv,{}),d.jsx("span",{className:"notif-dot"})]}),d.jsxs("div",{className:"header-profile",id:"headerProfileWrapper",style:{position:"relative"},ref:m,children:[d.jsxs("div",{className:"header-user-group",onClick:r,tabIndex:0,role:"button",title:"My Profile",children:[d.jsx("div",{className:"header-avatar",id:"headerAvatar",children:t.initials}),d.jsxs("div",{className:"header-user-info",id:"headerUserInfo",children:[d.jsx("div",{className:"header-user-name",id:"headerUserName",children:t.name}),d.jsx("div",{className:"header-user-role",id:"headerUserRole",children:t.role})]})]}),d.jsx(Mv,{user:t,open:i,onLogout:o,onToggleDarkMode:l,darkMode:s,onNavigate:c,onShowToast:u,onClose:y})]})]})]})}const _v=[{unread:!0,text:"<b>March Payslip</b> is now available for download",time:"Today, 9:00 AM"},{unread:!0,text:"Your leave request has been <b>approved</b> by Sarah Mitchell",time:"Yesterday, 4:30 PM"},{unread:!1,text:"Ticket <b>#TKT-2601</b> has been escalated due to SLA breach",time:"Mar 31, 2026"},{unread:!1,text:"Holiday reminder: <b>Good Friday</b> on April 18",time:"Mar 30, 2026"}];function zv({open:e}){return d.jsxs("div",{className:`notif-panel ${e?"show":""}`,id:"notifPanel",children:[d.jsxs("div",{className:"notif-header",children:[d.jsx("div",{className:"notif-header-title",children:"🔔 Notifications"}),d.jsx("span",{style:{fontSize:"11px",color:"var(--primary)",cursor:"pointer"},children:"Mark all read"})]}),_v.map((t,n)=>d.jsxs("div",{className:`notif-item ${t.unread?"unread":""}`,children:[d.jsx("div",{className:"notif-dot2",style:t.unread?void 0:{background:"transparent"}}),d.jsxs("div",{children:[d.jsx("div",{className:"notif-text",dangerouslySetInnerHTML:{__html:t.text}}),d.jsx("div",{className:"notif-time",children:t.time})]})]},n))]})}function as({toasts:e}){return d.jsx("div",{className:"toast-container",id:"toastContainer",children:e.map(t=>d.jsxs("div",{className:`toast ${t.type||"info"}`,children:[d.jsx("span",{children:t.icon}),d.jsx("span",{children:t.message})]},t.id))})}const Ic=`// Draw org chart connector lines using SVG, measuring actual node positions
        function drawOrgConnectors() {
          var wrap = document.getElementById('orgTreeWrap');
          var svg  = document.getElementById('orgConnectorSvg');
          if (!wrap || !svg) return;

          var wrapRect = wrap.getBoundingClientRect();

          function nodeCenter(id) {
            var el = document.getElementById(id);
            if (!el) return null;
            var r = el.getBoundingClientRect();
            return {
              x:      r.left - wrapRect.left + r.width  / 2,
              top:    r.top  - wrapRect.top,
              bottom: r.top  - wrapRect.top  + r.height,
              left:   r.left - wrapRect.left,
              right:  r.left - wrapRect.left + r.width
            };
          }

          var stroke = '#CBD5E1';
          var sw     = '1.5';
          var lines  = [];

          var ceo = nodeCenter('orgNode_ceo');
          var sm  = nodeCenter('orgNode_sm');
          var ap  = nodeCenter('orgNode_ap');
          var vr  = nodeCenter('orgNode_vr');
          var jd  = nodeCenter('orgNode_jd');
          var as_ = nodeCenter('orgNode_as');
          var pn  = nodeCenter('orgNode_pn');
          var nj  = nodeCenter('orgNode_nj');
          var rs  = nodeCenter('orgNode_rs');

          if (!ceo || !sm || !ap || !vr || !jd || !as_ || !pn || !nj || !rs) return;

          // ── Level 0→1: CEO down to horizontal bus, then up to each VP ──
          var midY_01 = ceo.bottom + (sm.top - ceo.bottom) / 2;

          // Vertical drop from CEO
          lines.push('M ' + ceo.x + ' ' + ceo.bottom + ' L ' + ceo.x + ' ' + midY_01);
          // Horizontal bus spanning sm.x → vr.x
          lines.push('M ' + sm.x + ' ' + midY_01 + ' L ' + vr.x + ' ' + midY_01);
          // Vertical rise to each VP
          [sm, ap, vr].forEach(function(vp) {
            lines.push('M ' + vp.x + ' ' + midY_01 + ' L ' + vp.x + ' ' + vp.top);
          });

          // ── Level 1→2: Each VP down to its children ──
          var midY_12 = sm.bottom + (jd.top - sm.bottom) / 2;

          // — Engineering: SM → JD, AS, PN —
          lines.push('M ' + sm.x + ' ' + sm.bottom + ' L ' + sm.x + ' ' + midY_12);
          // Horizontal bus JD.x → PN.x
          lines.push('M ' + jd.x + ' ' + midY_12 + ' L ' + pn.x + ' ' + midY_12);
          [jd, as_, pn].forEach(function(leaf) {
            lines.push('M ' + leaf.x + ' ' + midY_12 + ' L ' + leaf.x + ' ' + leaf.top);
          });

          // — HR: AP → NJ —
          lines.push('M ' + ap.x + ' ' + ap.bottom + ' L ' + ap.x + ' ' + midY_12);
          lines.push('M ' + ap.x + ' ' + midY_12   + ' L ' + nj.x + ' ' + midY_12);
          lines.push('M ' + nj.x + ' ' + midY_12   + ' L ' + nj.x + ' ' + nj.top);

          // — Finance: VR → RS —
          lines.push('M ' + vr.x + ' ' + vr.bottom + ' L ' + vr.x + ' ' + midY_12);
          lines.push('M ' + vr.x + ' ' + midY_12   + ' L ' + rs.x + ' ' + midY_12);
          lines.push('M ' + rs.x + ' ' + midY_12   + ' L ' + rs.x + ' ' + rs.top);

          // Update SVG height to cover full tree
          svg.style.height = (wrap.offsetHeight) + 'px';

          // Build single <path> for all lines
          var pathEl = svg.querySelector('path.org-lines');
          if (!pathEl) {
            pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathEl.setAttribute('class', 'org-lines');
            pathEl.setAttribute('fill', 'none');
            pathEl.setAttribute('stroke', stroke);
            pathEl.setAttribute('stroke-width', sw);
            svg.appendChild(pathEl);
          }
          pathEl.setAttribute('d', lines.join(' '));
        }

        // Draw on page load and whenever the org chart tab is shown
        document.addEventListener('DOMContentLoaded', function() {
          setTimeout(drawOrgConnectors, 120);
        });
        // Re-draw when org chart tab is clicked
        document.addEventListener('click', function(e) {
          if (e.target && (e.target.textContent || '').trim() === 'Org Chart') {
            setTimeout(drawOrgConnectors, 120);
          }
        });
        // Also re-draw on window resize
        window.addEventListener('resize', drawOrgConnectors);`,Mc=`// ===================================================
// UNIFIED GREETING HEADER — Utility Functions
// ===================================================

/**
 * getGreeting()
 * Returns time-based salutation based on user's local clock.
 * 00:00–11:59 → "Good morning"
 * 12:00–16:59 → "Good afternoon"
 * 17:00–23:59 → "Good evening"
 */
function getGreeting() {
  var hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

/**
 * getFormattedDate()
 * Returns today's date formatted as: "Thursday, April 2, 2026"
 */
function getFormattedDate() {
  var now = new Date();
  var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
}

/**
 * updateGreetingHeader(firstName)
 * Reusable function: updates the unified header greeting
 * with a dynamic salutation, the user's first name, and today's date.
 * Call this after login and on role switch.
 * @param {string} firstName - User's first name (e.g. "John")
 */
function updateGreetingHeader(firstName) {
  var mainEl = document.getElementById('headerGreetingMain');
  var subEl  = document.getElementById('headerGreetingSub');
  if (mainEl) mainEl.textContent = getGreeting() + ', ' + firstName + '! 👋';
  if (subEl)  subEl.textContent  = "Here's what's happening at work today \\u2014 " + getFormattedDate();
}

// ===== ROLE CONFIG =====
const roleConfig = {
  employee:   { name: 'John Doe',      role: 'Software Engineer',  initials: 'JD', empId: 'EMP-10042', dept: 'Senior Software Engineer · Engineering', dash: 'dash-employee',   isITAdmin: false, email: 'john.doe@company.com',     password: 'emp123' },
  manager:    { name: 'Sarah Mitchell', role: 'VP Engineering',     initials: 'SM', empId: 'EMP-10001', dept: 'VP Engineering · Leadership',            dash: 'dash-manager',    isITAdmin: false, email: 'sarah.mitchell@company.com', password: 'mgr123' },
  hr:         { name: 'Anita Patel',   role: 'HR Admin',           initials: 'AP', empId: 'EMP-10010', dept: 'HR Admin · People & Culture',             dash: 'dash-hr',         isITAdmin: false, email: 'anita.patel@company.com',    password: 'hr123'  },
  payroll:    { name: 'Vivek Shah',    role: 'Payroll Admin',      initials: 'VS', empId: 'EMP-10015', dept: 'Payroll Admin · Finance',                 dash: 'dash-payroll',    isITAdmin: false, email: 'vivek.shah@company.com',     password: 'pay123' },
  leadership: { name: 'Rajesh Kumar',  role: 'CEO',                initials: 'RK', empId: 'EMP-10000', dept: 'Chief Executive Officer',                 dash: 'dash-leadership', isITAdmin: false, email: 'rajesh.kumar@company.com',   password: 'ceo123' },
  itadmin:    { name: 'Ravi Kumar',    role: 'IT Admin',           initials: 'RK', empId: 'EMP-10020', dept: 'IT Administrator · Technology',           dash: 'dash-itadmin',    isITAdmin: true,  email: 'ravi.kumar@company.com',     password: 'it123'  }
};

let currentRole = 'employee';
let selectedLoginRole = 'employee';

// Pre-fill default role credentials on load
(function() {
  var cfg = roleConfig['employee'];
  if (cfg) {
    var emailEl = document.getElementById('loginEmail');
    var pwEl = document.getElementById('loginPassword');
    if (emailEl) emailEl.value = cfg.email;
    if (pwEl) pwEl.value = cfg.password;
  }
})();

// ===== LOGIN ROLE SELECTOR =====
function selectRole(role, el) {
  selectedLoginRole = role;
  document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  var cfg = roleConfig[role];
  if (cfg) {
    document.getElementById('loginEmail').value = cfg.email;
    document.getElementById('loginPassword').value = cfg.password;
  }
}

// ===== LOGIN =====
function doLogin() {
  var pw = document.getElementById('loginPassword').value.trim();
  var em = document.getElementById('loginEmail').value.trim().toLowerCase();
  if (!pw) { alert('Please enter your password.'); return; }
  var matched = null;
  var keys = Object.keys(roleConfig);
  for (var i = 0; i < keys.length; i++) {
    var c = roleConfig[keys[i]];
    if (c.password === pw && (!em || c.email.toLowerCase() === em)) {
      matched = keys[i]; break;
    }
  }
  if (!matched) { alert('Wrong password. Please try again.'); return; }
  currentRole = matched;
  selectedLoginRole = matched;
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'flex';
  applyRole(currentRole);
  showToast('Welcome, ' + roleConfig[matched].name + '!', 'success');
}

// ===== LOGOUT =====
function doLogout() {
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('selected'));
  document.querySelector('.role-chip').classList.add('selected');
  selectedLoginRole = 'employee';
  var cfg = roleConfig['employee'];
  if (cfg) {
    document.getElementById('loginEmail').value = cfg.email;
    document.getElementById('loginPassword').value = cfg.password;
  }
  toggleProfileDropdown(true);
  showToast('Signed out successfully', 'info');
}


// ===== APPLY ROLE =====
function applyRole(role) {
  const config = roleConfig[role] || roleConfig.employee;
  // Update header user info (name + role beside avatar)
  const headerUserName = document.getElementById('headerUserName');
  const headerUserRole = document.getElementById('headerUserRole');
  if (headerUserName) headerUserName.textContent = config.name;
  if (headerUserRole) headerUserRole.textContent = config.role;
  // Update header avatar
  document.getElementById('headerAvatar').textContent = config.initials;
  // Update profile dropdown
  document.getElementById('pdAvatar').textContent = config.initials;
  document.getElementById('pdName').textContent = config.name;
  document.getElementById('pdRole').textContent = config.role;
  document.getElementById('pdEmp').textContent = config.empId;
  // Update profile page
  document.getElementById('profilePic').textContent = config.initials;
  document.getElementById('profileName').textContent = config.name;
  document.getElementById('profileDept').textContent = config.dept;
  document.getElementById('profileEmpId').textContent = config.empId;
  // Update payslip header
  var payslipEmpInfo = document.getElementById('payslipEmpInfo');
  var payslipDesignation = document.getElementById('payslipDesignation');
  if (payslipEmpInfo) payslipEmpInfo.textContent = config.empId + ' · ' + config.name;
  if (payslipDesignation) payslipDesignation.textContent = config.dept.split(' · ')[0];
  // Greeting — update unified header
  updateGreetingHeader(config.name.split(' ')[0]);
  // Show/hide IT Admin queue tab in helpdesk
  const adminQueueTab = document.getElementById('adminQueueTab');
  if (adminQueueTab) adminQueueTab.style.display = config.isITAdmin ? 'block' : 'none';

  // ---- ROLE-BASED VISIBILITY ----
  const isHR = (role === 'hr');
  const isManager = (role === 'manager');
  const canApprove = isHR || isManager;

  // HR Checklist: only HR Admin
  const hrChecklistTab = document.getElementById('hrChecklistTab');
  if (hrChecklistTab) hrChecklistTab.style.display = isHR ? 'block' : 'none';

  // Approval Tasks tab: show for manager and HR, but block table for employees
  const approvalTasksTab = document.getElementById('approvalTasksTab');
  if (approvalTasksTab) approvalTasksTab.style.display = canApprove ? 'block' : 'none';

  // Show/hide access denied vs table inside approval-tasks-content
  const approvalAccessDenied = document.getElementById('approvalAccessDenied');
  const approvalTasksTable = document.getElementById('approvalTasksTable');
  if (approvalAccessDenied) approvalAccessDenied.style.display = canApprove ? 'none' : 'block';
  if (approvalTasksTable) approvalTasksTable.style.display = canApprove ? 'block' : 'none';

  // Leave Approval tab: only HR and Manager
  const leaveApprovalTab = document.getElementById('leaveApprovalTab');
  if (leaveApprovalTab) leaveApprovalTab.style.display = canApprove ? 'block' : 'none';

  // Approval Queue tab in Request Hub: HR only
  const approvalQueueTab = document.getElementById('approvalQueueTab');
  if (approvalQueueTab) approvalQueueTab.style.display = isHR ? 'block' : 'none';

  // ---- REPORTS ACCESS CONTROL ----
  // Accessible to: HR Admin, Payroll Admin, Leadership only
  // Blocked for: Employee, Manager, IT Admin
  const canSeeReports = (role === 'hr' || role === 'payroll' || role === 'leadership');
  const reportsNavItem = document.getElementById('reportsNavItem');
  if (reportsNavItem) reportsNavItem.style.display = canSeeReports ? 'flex' : 'none';

  // ---- PEOPLE MODULE: HR-ONLY RULES ----

  // 1. Status column in Employee Directory: HR only
  const dirStatusTh = document.getElementById('dirStatusTh');
  if (dirStatusTh) dirStatusTh.style.display = isHR ? 'table-cell' : 'none';
  document.querySelectorAll('.dir-status-cell').forEach(function(td) {
    td.style.display = isHR ? 'table-cell' : 'none';
  });

  // 2. Onboarding tab: visible to all, but content gated to HR only
  const onboardingAccessDenied = document.getElementById('onboardingAccessDenied');
  const onboardingContent      = document.getElementById('onboardingContent');
  if (onboardingAccessDenied) onboardingAccessDenied.style.display = isHR ? 'none' : 'block';
  if (onboardingContent)      onboardingContent.style.display      = isHR ? 'block' : 'none';
  // Hide the Onboarding tab button entirely for non-HR users
  const onboardingTabBtn = document.getElementById('onboardingTabBtn');
  if (onboardingTabBtn) onboardingTabBtn.style.display = isHR ? '' : 'none';

  // Employee Report card: HR only
  const employeeReportCard = document.getElementById('employeeReportCard');
  if (employeeReportCard) employeeReportCard.style.display = isHR ? 'block' : 'none';

  // Show correct dashboard
  Object.values(roleConfig).forEach(r => {
    const el = document.getElementById(r.dash);
    if (el) el.style.display = 'none';
  });
  const dashEl = document.getElementById(config.dash);
  if (dashEl) dashEl.style.display = 'block';
  // ── Manager scope tabs: show only for manager, reset to Me on every role change ──
  scopeSwitch('leave', 'me', document.querySelector('#leaveScopeTabs .tab'));
  scopeSwitch('att',   'me', document.querySelector('#attendanceScopeTabs .tab'));
  var leaveScopeTabs = document.getElementById('leaveScopeTabs');
  var attScopeTabs   = document.getElementById('attendanceScopeTabs');
  if (leaveScopeTabs) leaveScopeTabs.style.display = canApprove ? 'flex' : 'none';
  if (attScopeTabs)   attScopeTabs.style.display   = canApprove ? 'flex' : 'none';
  // Populate team dropdowns with role-appropriate people list
  populateTeamDropdowns(role);

  navigate('dashboard');
}

// ===== NAVIGATION =====
function navigate(pageId, navItem) {
  // ---- REPORTS ACCESS GUARD ----
  if (pageId === 'reports') {
    const canSeeReports = (currentRole === 'hr' || currentRole === 'payroll' || currentRole === 'leadership');
    if (!canSeeReports) {
      showToast('Access denied — Reports are restricted to HR, Payroll & Leadership.', 'error');
      return;
    }
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (navItem) {
    navItem.classList.add('active');
  } else {
    const found = document.querySelector('[data-page="' + pageId + '"]');
    if (found) found.classList.add('active');
  }
  const titles = {
    dashboard: 'Home / Overview',
    tasks: 'Task Center / My Tasks',
    profile: 'Employee Profile',
    leave: 'Leave Management',
    attendance: 'Attendance Info / My Attendance',
    payroll: 'Salary / Payslip & Details',
    documents: 'Document Center',
    people: 'People Module',
    taxdocs: 'Tax Documents',
    helpdesk: 'Help Desk',
    requests: 'Expense Claim',
    reports: 'Reports & Analytics'
  };

  // ── Update unified header based on page ──
  const pageHeaders = {
    profile:    { main: 'Employee Information', sub: 'View and manage your personal, address, bank and passport details' },
    tasks:      { main: 'Task Center',        sub: 'All your pending actions, approvals, and reminders' },
    leave:      { main: 'Leave Management',   sub: 'Apply, track, and manage your leaves' },
    attendance: { main: 'Attendance Info',    sub: '' },
    payroll:    { main: 'Salary & Payslips',  sub: 'View payslips, salary structure, CTC breakdown and bank details' },
    documents:  { main: 'Document Center',    sub: '' },
    people:     { main: 'People',             sub: 'Organisation chart, employee directory and onboarding tracker' },
    taxdocs:    { main: 'Tax Documents', sub: 'View and manage your tax certificates and declarations' },
    helpdesk:   { main: 'Help Desk',          sub: 'Create and track support tickets. IT Admin approves all tickets.' },
    requests:   { main: 'Expense Claim',      sub: '' },
    reports:    { main: 'Reports & Analytics',sub: '' }
  };

  const mainEl = document.getElementById('headerGreetingMain');
  const subEl  = document.getElementById('headerGreetingSub');

  if (pageId === 'dashboard') {
    // Restore the personalised greeting on Home
    const cfg = roleConfig[currentRole] || roleConfig.employee;
    const firstName = cfg.name.split(' ')[0];
    if (mainEl) mainEl.textContent = getGreeting() + ', ' + firstName + '! 👋';
    // Role-specific subtitles (sourced from the former page-header <p> of each dashboard)
    const dashSubs = {
      employee:   "Here\\u2019s what\\u2019s happening at work today \\u2014 " + getFormattedDate(),
      manager:    "Team overview and pending approvals \\u2014 " + getFormattedDate(),
      hr:         "Workforce management and HR operations \\u2014 " + getFormattedDate(),
      payroll:    "Manage salary, payroll runs, and compliance",
      leadership: "Organization-wide metrics and strategic insights",
      itadmin:    "System management, ticket approvals, and user access \\u2014 " + getFormattedDate()
    };
    if (subEl) subEl.textContent = dashSubs[currentRole] || dashSubs.employee;
  } else if (pageHeaders[pageId]) {
    if (mainEl) mainEl.textContent = pageHeaders[pageId].main;
    if (subEl)  subEl.textContent  = pageHeaders[pageId].sub;
  }

  // headerTitle removed — greeting header is now the unified global header
  // Close profile dropdown on navigate
  const pd = document.getElementById('profileDropdown');
  if (pd) pd.classList.remove('show');

  // Re-draw org chart connectors when navigating to people page
  if (pageId === 'people' && typeof drawOrgConnectors === 'function') {
    setTimeout(drawOrgConnectors, 120);
  }
}

// ===== TAB SWITCHING =====
function switchTab(tabEl, contentId) {
  if (tabEl) {
    const siblings = tabEl.closest('.tabs') ? tabEl.closest('.tabs').querySelectorAll('.tab') : [];
    siblings.forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');
  }
  const content = document.getElementById(contentId);
  if (content) {
    const parentEl = content.parentElement;
    Array.from(parentEl.children).forEach(child => {
      if (child.id && child.id !== contentId && !child.classList.contains('tabs') && !child.classList.contains('page-header') && !child.classList.contains('card') && !child.classList.contains('it-admin-notice')) {
        child.style.display = 'none';
      }
    });
    content.style.display = 'block';
  }
}

// ===== NAVIGATE TO HOLIDAYS TAB =====
function navigateToHolidays() {
  navigate('leave');
  setTimeout(function() {
    var tabEl = document.getElementById('holidaysTab');
    switchTab(tabEl, 'holidays-tab');
    renderHolidayCalendar();
  }, 80);
}

// ===== PROFILE DROPDOWN =====
function toggleProfileDropdown(forceClose) {
  const pd = document.getElementById('profileDropdown');
  if (forceClose) { pd.classList.remove('show'); return; }
  pd.classList.toggle('show');
  if (pd.classList.contains('show')) {
    setTimeout(() => {
      document.addEventListener('click', function closeDD(e) {
        if (!document.getElementById('headerProfileWrapper').contains(e.target)) {
          pd.classList.remove('show');
          document.removeEventListener('click', closeDD);
        }
      });
    }, 10);
  }
}

// ===== NOTIFICATIONS =====
function toggleNotif() {
  const panel = document.getElementById('notifPanel');
  panel.classList.toggle('show');
  // Close profile dropdown
  document.getElementById('profileDropdown').classList.remove('show');
  if (panel.classList.contains('show')) {
    setTimeout(() => {
      document.addEventListener('click', function closePanel(e) {
        if (!panel.contains(e.target) && !e.target.closest('[onclick="toggleNotif()"]')) {
          panel.classList.remove('show');
          document.removeEventListener('click', closePanel);
        }
      });
    }, 10);
  }
}

// ===== TOASTS =====
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const icons = { success: '', error: '❌', info: 'ℹ️', warning: '' };
  toast.innerHTML = '<span>' + (icons[type] || 'ℹ️') + '</span><span>' + msg + '</span>';
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateX(100%)'; toast.style.transition='all 0.3s'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ===== HOLIDAY CALENDAR =====
var calCurrentYear = 2026;
var calCurrentMonth = 3; // 0-indexed, 3 = April

var holidays2026 = {
  '2026-01-26': { name: 'Republic Day', type: 'national' },
  '2026-04-14': { name: 'Dr. Ambedkar Jayanti', type: 'national' },
  '2026-04-18': { name: 'Good Friday', type: 'other' },
  '2026-08-15': { name: 'Independence Day', type: 'national' },
  '2026-10-02': { name: 'Gandhi Jayanti', type: 'national' }
};

function renderHolidayCalendar() {
  var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var label = document.getElementById('calMonthLabel');
  if (label) label.textContent = monthNames[calCurrentMonth] + ' ' + calCurrentYear;
  var container = document.getElementById('calDays');
  if (!container) return;
  container.innerHTML = '';
  var firstDay = new Date(calCurrentYear, calCurrentMonth, 1).getDay();
  var daysInMonth = new Date(calCurrentYear, calCurrentMonth + 1, 0).getDate();
  var today = new Date();
  for (var i = 0; i < firstDay; i++) {
    var empty = document.createElement('div');
    container.appendChild(empty);
  }
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = calCurrentYear + '-' + String(calCurrentMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var dayOfWeek = new Date(calCurrentYear, calCurrentMonth, d).getDay();
    var isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    var holiday = holidays2026[dateStr];
    var isToday = (today.getFullYear() === calCurrentYear && today.getMonth() === calCurrentMonth && today.getDate() === d);
    var cell = document.createElement('div');
    cell.style.cssText = 'border-radius:6px;padding:5px 2px;text-align:center;font-size:11.5px;font-weight:600;min-height:40px;position:relative;cursor:default;transition:all 0.15s;user-select:none;';
    if (holiday) {
      var isNational = holiday.type === 'national';
      cell.style.background   = isNational ? '#DCFCE7' : '#EDE9FE';
      cell.style.border       = isNational ? '1px solid #16A34A' : '1px solid #7C3AED';
      cell.style.color        = isNational ? '#15803D' : '#5B21B6';
      cell.style.cursor       = 'pointer';
      cell.title = holiday.name;
      cell.innerHTML =
        '<div style="font-size:12px;font-weight:700;line-height:1;">' + d + '</div>' +
        '<div style="font-size:7.5px;margin-top:3px;line-height:1.2;font-weight:500;padding:0 1px;word-break:break-word;">' + holiday.name + '</div>';
      cell.onmouseover = function() {
        this.style.transform = 'scale(1.04)';
        this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
        this.style.zIndex = '2';
      };
      cell.onmouseout = function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
        this.style.zIndex = '1';
      };
    } else if (isWeekend) {
      cell.style.background = '#F1F5F9';
      cell.style.color = '#94A3B8';
      cell.innerHTML = '<div style="font-size:12px;font-weight:500;line-height:1;">' + d + '</div>';
    } else {
      cell.style.background = 'var(--surface)';
      cell.style.border = '1px solid var(--border)';
      cell.style.color = 'var(--text-secondary)';
      cell.innerHTML = '<div style="font-size:12px;font-weight:500;line-height:1;">' + d + '</div>';
      cell.onmouseover = function() { this.style.background = '#F8FAFB'; };
      cell.onmouseout  = function() { this.style.background = 'var(--surface)'; };
    }
    if (isToday) {
      cell.style.background    = 'var(--primary)';
      cell.style.border        = '1px solid var(--primary-hover)';
      cell.style.color         = 'white';
      cell.style.boxShadow     = '0 2px 8px rgba(13,148,136,0.35)';
    }
    container.appendChild(cell);
  }
}

function changeCalMonth(dir) {
  calCurrentMonth += dir;
  if (calCurrentMonth > 11) {   calCurrentMonth = 11; calCurrentYear--;
  }
  renderHolidayCalendar();
}

// Auto-render holiday calendar when tab clicked
document.addEventListener('click', function(e) {
  if (e.target && e.target.textContent && e.target.textContent.trim() === 'Holidays') {
    setTimeout(renderHolidayCalendar, 50);
  }
  // Close task date range popover if click is outside
  var pop = document.getElementById('taskDRPopover');
  var compact = document.getElementById('taskDRCompact');
  if (pop && pop.classList.contains('open') && compact && !compact.contains(e.target)) {
    pop.classList.remove('open');
    var btn = document.getElementById('taskDRTrigger');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});

// ===== ATTENDANCE CALENDAR =====
var attCalYear  = new Date().getFullYear();
var attCalMonth = new Date().getMonth(); // 0-indexed, matches current real month

// Attendance data for demo
var attData = {
  '2026-04-01': { status: 'present',  in: '09:15 AM', out: '06:30 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-02': { status: 'present',  in: '09:05 AM', out: '06:22 PM', hrs: '9h 17m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-03': { status: 'present',  in: '09:30 AM', out: '06:10 PM', hrs: '8h 40m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-04': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-05': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-06': { status: 'present',  in: '09:26 AM', out: '06:53 PM', hrs: '9h 27m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-07': { status: 'late',     in: '10:45 AM', out: '06:30 PM', hrs: '7h 45m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-08': { status: 'absent',   in: '—',        out: '—',        hrs: '—',      shift: '10:00 to 19:00 (GEN)' },
  '2026-04-09': { status: 'present',  in: '09:00 AM', out: '06:00 PM', hrs: '9h 00m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-10': { status: 'absent',   in: '—',        out: '—',        hrs: '—',      shift: '10:00 to 19:00 (GEN)' },
  '2026-04-11': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-12': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-13': { status: 'present',  in: '09:22 AM', out: '06:28 PM', hrs: '9h 06m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-14': { status: 'leave',    in: '—',        out: '—',        hrs: '—',      shift: 'Public Holiday' },
  '2026-04-15': { status: 'present',  in: '09:18 AM', out: '06:20 PM', hrs: '9h 02m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-16': { status: 'present',  in: '09:05 AM', out: '06:10 PM', hrs: '9h 05m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-17': { status: 'present',  in: '09:22 AM', out: '06:18 PM', hrs: '8h 56m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-18': { status: 'leave',    in: '—',        out: '—',        hrs: '—',      shift: 'Good Friday' },
  '2026-04-19': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-20': { status: 'present',  in: '09:18 AM', out: '06:20 PM', hrs: '9h 02m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-21': { status: 'present',  in: '09:15 AM', out: '06:30 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-22': { status: 'present',  in: '09:08 AM', out: '06:22 PM', hrs: '9h 14m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-23': { status: 'present',  in: '09:30 AM', out: '06:00 PM', hrs: '8h 30m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-24': { status: 'present',  in: '09:12 AM', out: '06:28 PM', hrs: '9h 16m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-25': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-26': { status: 'weekend',  in: '—',        out: '—',        hrs: '—',      shift: '—' },
  '2026-04-27': { status: 'present',  in: '09:10 AM', out: '06:25 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-28': { status: 'present',  in: '09:20 AM', out: '06:35 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-29': { status: 'present',  in: '09:15 AM', out: '06:30 PM', hrs: '9h 15m', shift: '10:00 to 19:00 (GEN)' },
  '2026-04-30': { status: 'present',  in: '09:10 AM', out: '06:20 PM', hrs: '9h 10m', shift: '10:00 to 19:00 (GEN)' }
};

var statusStyles = {
  present: { bg: '#E8F5EE', border: '#2DB77B', color: '#1A7A50', dot: '#2DB77B', label: 'Present' },
  late:    { bg: '#FEF9EE', border: '#F59E0B', color: '#8A5A00', dot: '#F59E0B', label: 'Late' },
  absent:  { bg: '#FFF0F0', border: '#F03E3E', color: '#C92A2A', dot: '#F03E3E', label: 'Absent' },
  leave:   { bg: '#E8EEFF', border: '#3B5BDB', color: '#0F766E', dot: '#3B5BDB', label: 'Holiday' },
  weekend: { bg: '#F8F9FB', border: '#E3E7EE', color: '#9BA3AF', dot: '#D1D5DB', label: 'Off' }
};

function renderAttCalendar() {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var lbl = document.getElementById('attCalMonthLabel');
  if (lbl) lbl.textContent = months[attCalMonth] + ' ' + attCalYear;
  var container = document.getElementById('attCalDays');
  if (!container) return;
  container.innerHTML = '';
  var firstDay = new Date(attCalYear, attCalMonth, 1).getDay();
  var daysInMonth = new Date(attCalYear, attCalMonth + 1, 0).getDate();
  var today = new Date();
  // Blank slots before first day
  for (var i = 0; i < firstDay; i++) {
    container.appendChild(document.createElement('div'));
  }
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = attCalYear + '-' + String(attCalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var rec = attData[dateStr];
    var dayOfWeek = new Date(attCalYear, attCalMonth, d).getDay(); // 0=Sun, 6=Sat
    var isActualWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    var isHoliday = !!holidays2026[dateStr];

    // Determine effective status:
    // 1. Use attData record if present
    // 2. Else if it's a configured public holiday → treat as 'leave'
    // 3. Else if it's Sat/Sun → 'weekend'
    // 4. Else (future/no-data weekday) → 'nodata' (neutral, not weekend)
    var effectiveStatus;
    if (rec) {
      effectiveStatus = rec.status;
    } else if (isHoliday) {
      effectiveStatus = 'leave';
    } else if (isActualWeekend) {
      effectiveStatus = 'weekend';
    } else {
      effectiveStatus = 'nodata';
    }

    var nodataStyle = { bg: '#F8F9FB', border: '#E3E7EE', color: '#C0C8D8', dot: '#E3E7EE', label: '' };
    var st = statusStyles[effectiveStatus] || nodataStyle;

    var isToday = (today.getFullYear()===attCalYear && today.getMonth()===attCalMonth && today.getDate()===d);
    var cell = document.createElement('div');
    cell.setAttribute('data-date', dateStr);
    cell.style.cssText = 'border-radius:4px;padding:4px 3px;text-align:center;cursor:pointer;transition:all 0.12s;border:1px solid ' + st.border + ';background:' + st.bg + ';position:relative;min-height:42px;';
    if (isToday) { cell.style.outline = '2px solid #3B5BDB'; cell.style.outlineOffset = '1px'; }

    var statusShort = '';
    if (effectiveStatus === 'present') statusShort = 'P';
    else if (effectiveStatus === 'absent') statusShort = 'A';
    else if (effectiveStatus === 'late') statusShort = 'L';
    else if (effectiveStatus === 'leave') statusShort = 'H';
    else if (effectiveStatus === 'weekend') statusShort = 'O';
    // nodata → no short label

    var shiftLabel = rec ? rec.shift.split(' ')[0] : (isHoliday ? holidays2026[dateStr].name.split(' ')[0] : '');

    cell.innerHTML =
      '<div style="font-size:11px;font-weight:400;color:' + st.color + ';line-height:1;">' + d + '</div>' +
      (statusShort ? '<div style="font-size:10px;font-weight:500;color:' + st.color + ';margin-top:3px;">' + statusShort + '</div>' : '') +
      '<div style="font-size:8px;color:var(--text-tertiary);margin-top:1px;letter-spacing:0.3px;">' + shiftLabel + '</div>';

    var recForDetail = rec || (isHoliday ? { status: 'leave', in: '—', out: '—', hrs: '—', shift: holidays2026[dateStr].name } : null);
    var stForDetail = statusStyles[effectiveStatus] || nodataStyle;
    cell.onclick = (function(ds, r, s) {
      return function() { showAttDayDetail(ds, r, s); };
    })(dateStr, recForDetail, stForDetail);
    cell.onmouseover = function() { this.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'; };
    cell.onmouseout  = function() { this.style.boxShadow = 'none'; };
    container.appendChild(cell);
  }
}

function showAttDayDetail(dateStr, rec, st) {
  var panel = document.getElementById('attDayDetailContent');
  if (!panel) return;
  var parts = dateStr.split('-');
  var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
  var dayName = dayNames[d.getDay()];
  var dateLabel = monthNames[parseInt(parts[1])-1] + ' ' + parts[2] + ', ' + parts[0];
  if (!rec) {
    panel.innerHTML = '<div style="text-align:center;padding:30px 0;color:var(--text-muted);"><div style="font-size:30px;margin-bottom:8px;"></div><div style="font-size:12.5px;font-weight:600;">No data for this date</div></div>';
    return;
  }
  var statusBadgeColor = st.border;
  panel.innerHTML =
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--border);">' +
      '<div style="width:38px;height:38px;border-radius:8px;background:' + st.bg + ';border:1.5px solid ' + st.border + ';display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">' +
        '<div style="font-size:14px;font-weight:600;color:' + st.color + ';line-height:1;">' + parts[2] + '</div>' +
        '<div style="font-size:8px;font-weight:500;color:' + st.color + ';">' + dayName.substring(0,3).toUpperCase() + '</div>' +
      '</div>' +
      '<div>' +
        '<div style="font-size:12px;font-weight:500;color:var(--text-primary);">' + dayName + ', ' + dateLabel + '</div>' +
        '<div style="font-size:11px;color:var(--text-muted);margin-top:1px;">Shift: ' + rec.shift + '</div>' +
      '</div>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Punch In</div>' +
        '<div style="font-size:13px;font-weight:500;color:var(--text-primary);">' + rec.in + '</div>' +
      '</div>' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Punch Out</div>' +
        '<div style="font-size:13px;font-weight:500;color:var(--text-primary);">' + rec.out + '</div>' +
      '</div>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Work Hours</div>' +
        '<div style="font-size:13px;font-weight:500;color:var(--primary);">' + rec.hrs + '</div>' +
      '</div>' +
      '<div style="background:var(--bg);border-radius:6px;padding:8px;text-align:center;">' +
        '<div style="font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Status</div>' +
        '<div style="font-size:12px;font-weight:500;color:' + st.color + ';">' + st.label + '</div>' +
      '</div>' +
    '</div>' +
    (rec.status !== 'weekend' && rec.status !== 'leave' && rec.status !== 'absent' ?
      '<div style="background:var(--primary-muted);border-radius:6px;padding:8px;font-size:11px;color:var(--primary-hover);">on ' + dateLabel + ' at 06:23</div>' :
      (rec.status === 'absent' ? '<div style="background:var(--danger-light);border-radius:6px;padding:8px;font-size:11px;color:#991B1B;">Marked Absent — <span style="cursor:pointer;text-decoration:underline;" onclick="switchTab(document.querySelector(\\'[onclick*=att-reg-tab]\\'),\\'att-reg-tab\\')">Apply Regularization</span></div>' : '')
    );
}

function attChangeMonth(dir) {
  attCalMonth += dir;
  if (attCalMonth > 11) { attCalMonth = 0; attCalYear++; }
  if (attCalMonth < 0)  { attCalMonth = 11; attCalYear--; }
  renderAttCalendar();
  updatePenaltyDaysCount();
  updateAvgWorkHours();
  // Sync the month/year dropdowns with the current calendar position
  var mSel = document.getElementById('attMonthFilter');
  var ySel = document.getElementById('attYearFilter');
  if (mSel) mSel.value = String(attCalMonth);
  if (ySel) ySel.value = String(attCalYear);
  // Reset detail panel
  var panel = document.getElementById('attDayDetailContent');
  if (panel) panel.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--text-tertiary);"><div style="font-size:13px;">Click a date to view details</div></div>';
}

// Auto-render attendance calendar when attendance page is shown
var _origNavigate = navigate;
navigate = function(pageId, navItem) {
  _origNavigate(pageId, navItem);
  if (pageId === 'attendance') { setTimeout(function(){ renderAttCalendar(); updatePenaltyDaysCount(); updateAvgWorkHours(); }, 50); }
};

// ===== SALARY HISTORY =====
var salaryHistoryData = {
  2026: [
    { month: 'March 2026',    gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'February 2026', gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'January 2026',  gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' }
  ],
  2025: [
    { month: 'December 2025', gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'November 2025', gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'October 2025',  gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'September 2025',gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'August 2025',   gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'July 2025',     gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'June 2025',     gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'May 2025',      gross: '₹1,28,500', deductions: '₹23,400', net: '₹1,05,100' },
    { month: 'April 2025',    gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' }
  ],
  2024: [
    { month: 'March 2025',    gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'February 2025', gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'January 2025',  gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'December 2024', gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'November 2024', gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'October 2024',  gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'September 2024',gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'August 2024',   gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'July 2024',     gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'June 2024',     gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'May 2024',      gross: '₹1,15,000', deductions: '₹21,200', net: '₹93,800' },
    { month: 'April 2024',    gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' }
  ],
  2023: [
    { month: 'March 2024',    gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'February 2024', gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'January 2024',  gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'December 2023', gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'November 2023', gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'October 2023',  gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'September 2023',gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'August 2023',   gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'July 2023',     gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' },
    { month: 'June 2023',     gross: '₹1,00,000', deductions: '₹18,500', net: '₹81,500' }
  ]
};

function renderSalaryHistory() {
  var sel = document.getElementById('historyYearSelect');
  if (!sel) return;
  var year = parseInt(sel.value);
  var rows = salaryHistoryData[year] || [];
  var fyLabel = year === 2026 ? 'FY 2025-26' : year === 2025 ? 'FY 2024-25' : year === 2024 ? 'FY 2023-24' : 'FY 2022-23';
  var html = '<div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;padding:6px 12px;background:var(--bg);border-radius:6px;">' + fyLabel + ' — ' + rows.length + ' records</div>';
  if (rows.length === 0) {
    html += '<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:13px;">No records found for this year.</div>';
  } else {
    html += '<table style="table-layout:fixed;width:100%;"><thead><tr><th style="padding:6px 11px;">Month</th><th style="padding:6px 11px;">Gross Pay</th><th style="padding:6px 11px;">Deductions</th><th style="padding:6px 11px;">Net Pay</th><th style="padding:6px 11px;">Action</th></tr></thead><tbody>';
    rows.forEach(function(r) {
      html += '<tr><td style="padding:5px 11px;"><b>' + r.month + '</b></td><td style="padding:5px 11px;">' + r.gross + '</td><td style="padding:5px 11px;color:var(--danger)">' + r.deductions + '</td><td style="padding:5px 11px;font-weight:500;color:var(--primary)">' + r.net + '</td><td style="padding:5px 11px;"><button class="btn-sm" style="font-size:10.5px;padding:2px 9px;" onclick="showToast(\\'Downloading ' + r.month + ' payslip...\\',\\'info\\')">Download</button></td></tr>';
    });
    html += '</tbody></table>';
  }
  document.getElementById('salaryHistoryTable').innerHTML = html;
}

function downloadAllHistory() {
  var sel = document.getElementById('historyYearSelect');
  var year = sel ? sel.value : '2026';
  var fyLabel = year === '2026' ? 'FY 2025-26' : year === '2025' ? 'FY 2024-25' : year === '2024' ? 'FY 2023-24' : 'FY 2022-23';
  showToast('Downloading all payslips for ' + fyLabel + '...', 'info');
}

// ===== SALARY STRUCTURE YEAR-WISE =====
var salaryStructureData = {
  2026: { ctc: '₹18,00,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹75,000',  annual: '₹9,00,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹30,000',  annual: '₹3,60,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹18,500',  annual: '₹2,22,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹9,000',  annual: '-₹1,08,000',  danger: true },
    { comp: 'Net Take-Home',        monthly: '₹1,05,100',annual: '₹12,61,200',  danger: false, bold: true, net: true }
  ]},
  2025: { ctc: '₹15,60,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹65,000',  annual: '₹7,80,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹26,000',  annual: '₹3,12,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹19,000',  annual: '₹2,28,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹7,800',  annual: '-₹93,600',    danger: true },
    { comp: 'Net Take-Home',        monthly: '₹93,800',  annual: '₹11,25,600',  danger: false, bold: true, net: true }
  ]},
  2024: { ctc: '₹13,80,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹57,500',  annual: '₹6,90,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹23,000',  annual: '₹2,76,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹14,500',  annual: '₹1,74,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹6,900',  annual: '-₹82,800',    danger: true },
    { comp: 'Net Take-Home',        monthly: '₹81,500',  annual: '₹9,78,000',   danger: false, bold: true, net: true }
  ]},
  2023: { ctc: '₹12,00,000', rows: [
    { comp: 'Basic Salary',         monthly: '₹50,000',  annual: '₹6,00,000',   danger: false, bold: true },
    { comp: 'HRA',                  monthly: '₹20,000',  annual: '₹2,40,000',   danger: false },
    { comp: 'Conveyance Allowance', monthly: '₹5,000',   annual: '₹60,000',     danger: false },
    { comp: 'Special Allowance',    monthly: '₹12,500',  annual: '₹1,50,000',   danger: false },
    { comp: 'PF Deduction',         monthly: '-₹6,000',  annual: '-₹72,000',    danger: true },
    { comp: 'Net Take-Home',        monthly: '₹68,500',  annual: '₹8,22,000',   danger: false, bold: true, net: true }
  ]}
};

function renderSalaryStructure() {
  var sel = document.getElementById('salaryStructureYearSelect');
  if (!sel) return;
  var year = parseInt(sel.value);
  var data = salaryStructureData[year];
  if (!data) return;
  var ctcEl = document.getElementById('salaryStructureCtcValue');
  if (ctcEl) ctcEl.textContent = data.ctc;
  var tbl = document.getElementById('salaryStructureTable');
  if (!tbl) return;
  var html = '<table><thead><tr><th>Component</th><th>Monthly</th><th>Annual</th></tr></thead><tbody>';
  data.rows.forEach(function(r) {
    var dc = r.danger ? 'color:var(--danger)' : (r.net ? 'color:var(--primary)' : '');
    var fw = (r.bold || r.net) ? 'font-weight:700' : '';
    var st = [dc, fw].filter(Boolean).join(';');
    html += '<tr style="' + fw + '"><td' + (r.danger ? ' style="color:var(--danger)"' : '') + '>' + (r.bold && !r.net ? '<b>' : '') + r.comp + (r.bold && !r.net ? '</b>' : '') + '</td><td style="' + st + '">' + r.monthly + '</td><td style="' + st + '">' + r.annual + '</td></tr>';
  });
  html += '</tbody></table>';
  tbl.innerHTML = html;
}

// Auto-render on tab switch
document.addEventListener('click', function(e) {
  if (e.target && e.target.textContent) {
    var txt = e.target.textContent.trim();
    if (txt === 'History') { setTimeout(renderSalaryHistory, 60); }
    if (txt === 'Salary Structure') { setTimeout(renderSalaryStructure, 60); }
  }
});

// ===== BANK DETAILS =====
function toggleBankEdit(show) {
  document.getElementById('bankViewMode').style.display = show ? 'none' : 'block';
  document.getElementById('bankEditMode').style.display = show ? 'block' : 'none';
}

function submitBankEdit() {
  var accNo  = document.getElementById('bankAccNo') ? document.getElementById('bankAccNo').value.trim() : '';
  var ifsc   = document.getElementById('bankIFSC') ? document.getElementById('bankIFSC').value.trim() : '';
  var reason = document.getElementById('bankReason') ? document.getElementById('bankReason').value.trim() : '';
  if (!ifsc) { showToast('Please enter the IFSC code.', 'error'); return; }
  if (!reason) { showToast('Please provide a reason for the change.', 'error'); return; }
  toggleBankEdit(false);
  showToast('Bank details update request submitted for approval.', 'success');
}


// ===== PUNCH FLOW =====
// State: 'in' = not yet punched in, 'out' = punched in (waiting for punch out)
var punchState = 'in';
var punchInTime = null;
var punchOutTime = null;
var midnightResetTimer = null;
var punchDoneForToday = false; // once punched out, block re-punch-in same day

function formatTime12(date) {
  var h = date.getHours(), m = date.getMinutes();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return h + ':' + String(m).padStart(2,'0') + ' ' + ampm;
}

function updatePunchUI() {
  var btn = document.getElementById('punchBtn');
  var statusEl = document.getElementById('punchStatus');
  if (!btn) return;
  if (punchState === 'in') {
    // Ready to punch in (or locked for the day)
    if (punchDoneForToday) {
      btn.textContent = 'Punch In';
      btn.style.background = '#94A3B8';
      btn.style.cursor = 'not-allowed';
      btn.style.opacity = '0.65';
      btn.onmouseover = null; btn.onmouseout = null;
    } else {
      btn.textContent = 'Punch In';
      btn.style.background = '#3B5BDB';
      btn.style.cursor = 'pointer';
      btn.style.opacity = '1';
      btn.onmouseover = function(){ this.style.background = '#0F766E'; };
      btn.onmouseout  = function(){ this.style.background = '#3B5BDB'; };
    }
    if (statusEl) {
      if (punchOutTime) {
        statusEl.textContent = 'Punched out at ' + formatTime12(punchOutTime);
        statusEl.style.color = '#C92A2A';
      } else {
        statusEl.textContent = '';
      }
    }
  } else {
    // Punched in — show Punch Out
    btn.textContent = 'Punch Out';
    btn.style.background = '#2F9E44';
    btn.onmouseover = function(){ this.style.background = '#1A6E34'; };
    btn.onmouseout  = function(){ this.style.background = '#2F9E44'; };
    if (statusEl && punchInTime) {
      statusEl.textContent = 'Punched in at ' + formatTime12(punchInTime);
      statusEl.style.color = '#2F9E44';
    }
  }
}

function scheduleMidnightReset() {
  if (midnightResetTimer) clearTimeout(midnightResetTimer);
  var now = new Date();
  var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  var msUntilMidnight = midnight - now;
  midnightResetTimer = setTimeout(function() {
    // If still punched in at midnight, auto punch-out and record
    if (punchState === 'out' && punchInTime) {
      var eod = new Date();
      var todayKey = getTodayKey();
      if (attData[todayKey]) {
        attData[todayKey].out = formatTime12(eod);
        attData[todayKey].hrs = calcHrs(punchInTime, eod);
      }
    }
    punchState = 'in';
    punchInTime = null;
    punchOutTime = null;
    midnightResetTimer = null;
    punchDoneForToday = false; // new day — allow punch-in again
    updatePunchUI();
    showToast('New day started. Punch In to begin attendance.', 'info');
  }, msUntilMidnight);
}

function getTodayKey() {
  var now = new Date();
  return now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2,'0') + '-' +
    String(now.getDate()).padStart(2,'0');
}

function calcHrs(inDate, outDate) {
  var diffMs = outDate - inDate;
  var h = Math.floor(diffMs / 3600000);
  var m = Math.floor((diffMs % 3600000) / 60000);
  return h + 'h ' + String(m).padStart(2,'0') + 'm';
}

function handlePunch() {
  var now = new Date();
  var todayKey = getTodayKey();

  if (punchState === 'in') {
    // ── PUNCH IN ──
    if (punchDoneForToday) { showToast('You have already completed your attendance for today.', 'info'); return; }
    punchInTime = now;
    punchOutTime = null;
    punchState = 'out';

    // Determine status: late if after 10:00 AM
    var isLate = (now.getHours() > 10) || (now.getHours() === 10 && now.getMinutes() > 0);

    // Write into attData
    attData[todayKey] = {
      status: isLate ? 'late' : 'present',
      in: formatTime12(now),
      out: '—',
      hrs: 'In Progress',
      shift: '10:00 to 19:00 (GEN)'
    };

    updatePunchUI();
    showToast('Punched in at ' + formatTime12(now), 'success');
    scheduleMidnightReset();

    // Refresh calendar and detail panel if attendance page is visible
    refreshAttendanceIfVisible(todayKey);

  } else {
    // ── PUNCH OUT ──
    punchOutTime = now;
    punchState = 'in';
    if (midnightResetTimer) { clearTimeout(midnightResetTimer); midnightResetTimer = null; }

    var duration = punchInTime ? calcHrs(punchInTime, now) : '—';

    // Update attData record
    if (attData[todayKey]) {
      attData[todayKey].out = formatTime12(now);
      attData[todayKey].hrs = duration;
    }

    punchDoneForToday = true;
    updatePunchUI();
    showToast('Punched out at ' + formatTime12(now) + ' — Total: ' + duration + '. Punch-in disabled for today.', 'info');

    // Refresh calendar and detail panel if attendance page is visible
    refreshAttendanceIfVisible(todayKey);
  }
}

function refreshAttendanceIfVisible(todayKey) {
  var attPage = document.getElementById('page-attendance');
  if (attPage && attPage.classList.contains('active')) {
    renderAttCalendar();
    // Re-show today's detail panel with updated data
    var rec = attData[todayKey];
    if (rec) {
      var st = statusStyles[rec.status] || statusStyles.present;
      showAttDayDetail(todayKey, rec, st);
    }
  }
}

// ===== LIVE CLOCK =====
function updateLiveClock() {
  var now = new Date();
  var h = String(now.getHours()).padStart(2,'0');
  var m = String(now.getMinutes()).padStart(2,'0');
  var s = String(now.getSeconds()).padStart(2,'0');
  var clockEl = document.getElementById('liveClock');
  if (clockEl) clockEl.textContent = h + ':' + m + ':' + s;
  var ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  var h12 = now.getHours() % 12 || 12;
  var timeStr = h12 + ':' + m + ':' + s + ' ' + ampm;
  var clockEl2 = document.getElementById('liveClockHeader');
  if (clockEl2) clockEl2.textContent = timeStr;
}

setInterval(updateLiveClock, 1000);
updateLiveClock();

// Init on load
window.addEventListener('DOMContentLoaded', function() {
  updatePunchUI();
  renderSalaryStructure();
  // Initialize greeting header with default employee first name
  updateGreetingHeader('John');
  var defaultChip = document.querySelector('.role-chip.selected');
  if (!defaultChip) {
    var first = document.querySelector('.role-chip');
    if (first) first.classList.add('selected');
  }
  initPersonalTab();

  // ── Default filter: Pending ─────────────────────────────────────
  // Expense Claim panel
  var reqPendingBtn = document.querySelector('#reqFilterSegment .task-seg-btn[data-value="pending"]');
  if (reqPendingBtn) filterMyRequests('pending', reqPendingBtn);

  // My Leaves panel
  var myLeavePendingBtn = document.querySelector('#myLeaveFilterSegment .task-seg-btn[data-value="pending"]');
  if (myLeavePendingBtn) filterMyLeaves('pending', myLeavePendingBtn);

  // My Team's Leave History
  var teamLeavePendingBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn[data-value="pending"]');
  if (teamLeavePendingBtn) filterTeamLeaves('pending', teamLeavePendingBtn);
});

// ===== PERSONAL DETAILS TAB =====

function initPersonalTab() {
  // Set DOB max = today (no future dates)
  var today = new Date();
  var todayStr = today.toISOString().split('T')[0];
  var dobEl = document.getElementById('pd_dob');
  if (dobEl) dobEl.setAttribute('max', todayStr);

  // Set passport issue max = today
  var piEl = document.getElementById('pd_passportIssue');
  if (piEl) piEl.setAttribute('max', todayStr);
}

// Collect all editable personal-tab fields (bank fields are read-only — excluded)
var _personalEditableIds = [
  'pd_firstName','pd_middleName','pd_lastName','pd_dob','pd_gender',
  'pd_nationality','pd_bloodGroup',
  'pd_mobile','pd_altMobile',
  'pd_emergencyContact','pd_emergencyName','pd_emergencyRelation',
  'pd_passportNumber','pd_passportIssue','pd_passportExpiry',
  'pd_currFlat','pd_currBuilding','pd_currStreet','pd_currLandmark','pd_currCity','pd_currState','pd_currPin','pd_currCountry',
  'pd_permFlat','pd_permBuilding','pd_permStreet','pd_permLandmark','pd_permCity','pd_permState','pd_permPin','pd_permCountry'
];

function enablePersonalEdit() {
  // Only enable on personal-tab
  // Switch to personal tab first
  var personalTab = document.querySelector('[onclick*="personal-tab"]');
  if (personalTab) { switchTab(personalTab, 'personal-tab'); }

  _personalEditableIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.disabled = false; el.classList.remove('input-error','input-success'); }
  });

  // Enable checkbox
  var chk = document.getElementById('sameAsCurrentChk');
  if (chk) chk.disabled = false;

  // Show save bar
  var bar = document.getElementById('personalSaveBar');
  if (bar) bar.style.display = 'flex';

  document.getElementById('personalSaveStatus').textContent = '';
  showToast('Edit mode enabled — make your changes and save.', 'info');
}

function cancelPersonalEdit() {
  _personalEditableIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.disabled = true; el.classList.remove('input-error','input-success'); }
  });
  var chk = document.getElementById('sameAsCurrentChk');
  if (chk) { chk.disabled = true; chk.checked = false; }

  // Re-enable perm fields if they were locked by copy
  togglePermFields(false);

  var bar = document.getElementById('personalSaveBar');
  if (bar) bar.style.display = 'none';

  // Clear all error messages
  document.querySelectorAll('.field-error').forEach(function(e){ e.classList.remove('show'); });
  showToast('Edit cancelled.', 'info');
}

function handleCopyAddress(checked) {
  if (checked) {
    // Copy current → permanent (all sub-fields)
    var map = {
      pd_permFlat:     'pd_currFlat',
      pd_permBuilding: 'pd_currBuilding',
      pd_permStreet:   'pd_currStreet',
      pd_permLandmark: 'pd_currLandmark',
      pd_permCity:     'pd_currCity',
      pd_permPin:      'pd_currPin',
      pd_permCountry:  'pd_currCountry'
    };
    Object.keys(map).forEach(function(perm) {
      var src = document.getElementById(map[perm]);
      var dst = document.getElementById(perm);
      if (src && dst) dst.value = src.value;
    });
    // State select
    var srcState = document.getElementById('pd_currState');
    var dstState = document.getElementById('pd_permState');
    if (srcState && dstState) dstState.value = srcState.value;

    togglePermFields(true);
    showToast('Permanent address copied from current address.', 'success');
  } else {
    togglePermFields(false);
  }
}

function togglePermFields(locked) {
  var ids = ['pd_permFlat','pd_permBuilding','pd_permStreet','pd_permLandmark','pd_permCity','pd_permState','pd_permPin','pd_permCountry'];
  ids.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.disabled = locked;
  });
}

// ── Validation helpers ──
function showFieldError(id, msg) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.add('input-error');
  var err = document.getElementById('err_' + id.replace('pd_',''));
  if (err) { err.textContent = msg || err.textContent; err.classList.add('show'); }
}
function clearFieldError(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('input-error');
  var err = document.getElementById('err_' + id.replace('pd_',''));
  if (err) err.classList.remove('show');
}

function validatePersonalDetails() {
  var valid = true;

  // First Name
  var fn = document.getElementById('pd_firstName');
  if (!fn || !fn.value.trim()) { showFieldError('pd_firstName'); valid = false; }
  else clearFieldError('pd_firstName');

  // Last Name
  var ln = document.getElementById('pd_lastName');
  if (!ln || !ln.value.trim()) { showFieldError('pd_lastName'); valid = false; }
  else clearFieldError('pd_lastName');

  // DOB — required, not in future
  var dob = document.getElementById('pd_dob');
  if (!dob || !dob.value) { showFieldError('pd_dob', 'Date of birth is required.'); valid = false; }
  else {
    var dobDate = new Date(dob.value);
    var today = new Date(); today.setHours(0,0,0,0);
    if (dobDate >= today) { showFieldError('pd_dob', 'Date of birth cannot be today or a future date.'); valid = false; }
    else clearFieldError('pd_dob');
  }

  // Mobile Number — required
  var mob = document.getElementById('pd_mobile');
  if (!mob || !mob.value.trim()) { showFieldError('pd_mobile'); valid = false; }
  else clearFieldError('pd_mobile');

  // Passport — optional, but if filled validate
  var pn = document.getElementById('pd_passportNumber');
  if (pn && pn.value.trim()) {
    if (!/^[A-Z][0-9]{7}$|^[A-Z]{1,2}[0-9]{6,10}$/.test(pn.value.trim().toUpperCase())) {
      showFieldError('pd_passportNumber', 'Enter a valid passport number (6–12 characters).'); valid = false;
    } else clearFieldError('pd_passportNumber');
  } else clearFieldError('pd_passportNumber');

  // Passport dates — if issue filled, must not be future
  var pi = document.getElementById('pd_passportIssue');
  var pe = document.getElementById('pd_passportExpiry');
  if (pi && pi.value) {
    var issueDate = new Date(pi.value);
    var now = new Date(); now.setHours(0,0,0,0);
    if (issueDate > now) { showFieldError('pd_passportIssue'); valid = false; }
    else clearFieldError('pd_passportIssue');
    if (pe && pe.value) {
      var expiryDate = new Date(pe.value);
      if (expiryDate <= issueDate) { showFieldError('pd_passportExpiry', 'Expiry must be after issue date.'); valid = false; }
      else clearFieldError('pd_passportExpiry');
    }
  } else {
    clearFieldError('pd_passportIssue');
  }

  // Current Address — flat, building, street, city, state, pin
  var cf = document.getElementById('pd_currFlat');
  if (!cf || !cf.value.trim()) { showFieldError('pd_currFlat'); valid = false; }
  else clearFieldError('pd_currFlat');

  var cb = document.getElementById('pd_currBuilding');
  if (!cb || !cb.value.trim()) { showFieldError('pd_currBuilding'); valid = false; }
  else clearFieldError('pd_currBuilding');

  var cs = document.getElementById('pd_currStreet');
  if (!cs || !cs.value.trim()) { showFieldError('pd_currStreet'); valid = false; }
  else clearFieldError('pd_currStreet');

  var cc = document.getElementById('pd_currCity');
  if (!cc || !cc.value.trim()) { showFieldError('pd_currCity'); valid = false; }
  else clearFieldError('pd_currCity');

  var cst = document.getElementById('pd_currState');
  if (!cst || !cst.value) { showFieldError('pd_currState'); valid = false; }
  else clearFieldError('pd_currState');

  var cp = document.getElementById('pd_currPin');
  if (!cp || !/^\\d{6}$/.test(cp.value.trim())) { showFieldError('pd_currPin', 'PIN must be a 6-digit number.'); valid = false; }
  else clearFieldError('pd_currPin');

  // Emergency Contact Number — required
  var ec = document.getElementById('pd_emergencyContact');
  if (!ec || !ec.value.trim()) { showFieldError('pd_emergencyContact'); valid = false; }
  else clearFieldError('pd_emergencyContact');

  return valid;
}

// Navigate to Salary panel → Bank Details tab (from Profile Bank Details section)
function navigateToSalaryBankDetails() {
  navigate('payroll');
  var bankTab = document.querySelector('[onclick*="bank-details-tab"]');
  if (bankTab) switchTab(bankTab, 'bank-details-tab');
}

function savePersonalDetails() {
  var statusEl = document.getElementById('personalSaveStatus');
  statusEl.textContent = 'Validating…';

  if (!validatePersonalDetails()) {
    statusEl.textContent = 'Please fix the errors above.';
    statusEl.style.color = 'var(--danger)';
    showToast('Please fix the highlighted errors.', 'error');
    return;
  }

  // All valid — lock fields, hide bar
  statusEl.textContent = '';
  _personalEditableIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.disabled = true; el.classList.remove('input-error','input-success'); }
  });
  var chk = document.getElementById('sameAsCurrentChk');
  if (chk) chk.disabled = true;

  var bar = document.getElementById('personalSaveBar');
  if (bar) bar.style.display = 'none';

  showToast('Personal details saved successfully!', 'success');
}

// ══════════════════════════════════════════════════════════════
// TEAM SCOPE FEATURE — Me / My Team filter for Leave & Attendance
// Applies only to Manager and HR roles.
// Employee role: unaffected (scope tabs hidden, Me view shown as-is)
// ══════════════════════════════════════════════════════════════

// ── Static team data per role ──────────────────────────────────
var teamData = {
  manager: [
    { id: 'amit',  name: 'Amit Sharma',  title: 'Software Engineer',     dept: 'Engineering' },
    { id: 'priya', name: 'Priya Nair',   title: 'Frontend Developer',    dept: 'Engineering' },
    { id: 'rahul', name: 'Rahul Singh',  title: 'QA Engineer',           dept: 'Engineering' },
    { id: 'deepa', name: 'Deepa Verma',  title: 'DevOps Engineer',       dept: 'Engineering' }
  ],
  hr: [
    { id: 'sarah',  name: 'Sarah Mitchell', title: 'VP Engineering',     dept: 'Leadership'  },
    { id: 'vivek',  name: 'Vivek Shah',     title: 'Payroll Admin',      dept: 'Finance'     },
    { id: 'rajesh', name: 'Rajesh Kumar',   title: 'CEO',                dept: 'Leadership'  }
  ]
};

// ── Leave balances per person (keyed by id) ────────────────────
var leavePersonData = {
  amit:   { el: 8,  sl: 5,  cl: 2, co: 1, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Mar 1',  to: 'Mar 2',  days: 2, status: 'Approved', fromISO: '2026-03-01' },
    { type: 'Sick Leave',   from: 'Feb 10', to: 'Feb 10', days: 1, status: 'Approved', fromISO: '2026-02-10' }
  ]},
  priya:  { el: 14, sl: 7,  cl: 3, co: 0, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Casual Leave', from: 'Mar 15', to: 'Mar 15', days: 1, status: 'Approved', fromISO: '2026-03-15' }
  ]},
  rahul:  { el: 5,  sl: 3,  cl: 1, co: 2, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Apr 10', to: 'Apr 12', days: 3, status: 'Pending',  fromISO: '2026-04-10' },
    { type: 'Casual Leave', from: 'Feb 20', to: 'Feb 20', days: 1, status: 'Approved', fromISO: '2026-02-20' }
  ]},
  deepa:  { el: 11, sl: 6,  cl: 3, co: 1, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Sick Leave',   from: 'Apr 8',  to: 'Apr 8',  days: 1, status: 'Pending',  fromISO: '2026-04-08' }
  ]},
  sarah:  { el: 10, sl: 8,  cl: 4, co: 2, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Jan 20', to: 'Jan 21', days: 2, status: 'Approved', fromISO: '2026-01-20' }
  ]},
  vivek:  { el: 9,  sl: 6,  cl: 3, co: 1, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Casual Leave', from: 'Mar 5',  to: 'Mar 5',  days: 1, status: 'Approved', fromISO: '2026-03-05' }
  ]},
  rajesh: { el: 12, sl: 10, cl: 5, co: 3, elTotal: 12, slTotal: 6, clTotal: 6, coTotal: 2, history: [
    { type: 'Earned Leave', from: 'Dec 24', to: 'Dec 26', days: 3, status: 'Approved', fromISO: '2025-12-24' }
  ]}
};

// ── Attendance data per person ─────────────────────────────────
var attPersonData = {
  amit:   { today: { status:'Present', in:'09:52', out:'—', hrs:'In Progress' }, monthly: { wd:22, present:20, absent:2, late:1, avg:'08:12', pct:'90.9%', pctBadge:'green' } },
  priya:  { today: { status:'Present', in:'09:45', out:'—', hrs:'In Progress' }, monthly: { wd:22, present:22, absent:0, late:0, avg:'08:30', pct:'100%',  pctBadge:'green' } },
  rahul:  { today: { status:'On Leave',in:'—',    out:'—', hrs:'—'           }, monthly: { wd:22, present:18, absent:4, late:3, avg:'07:58', pct:'81.8%', pctBadge:'amber' } },
  deepa:  { today: { status:'Late',   in:'10:32', out:'—', hrs:'In Progress' }, monthly: { wd:22, present:21, absent:1, late:4, avg:'08:05', pct:'95.5%', pctBadge:'green' } },
  sarah:  { today: { status:'Present', in:'09:00', out:'18:30', hrs:'09:30'  }, monthly: { wd:22, present:21, absent:1, late:0, avg:'09:10', pct:'95.5%', pctBadge:'green' } },
  vivek:  { today: { status:'Present', in:'09:15', out:'—', hrs:'In Progress'}, monthly: { wd:22, present:20, absent:2, late:2, avg:'08:40', pct:'90.9%', pctBadge:'green' } },
  rajesh: { today: { status:'Present', in:'08:45', out:'18:00', hrs:'09:15'  }, monthly: { wd:22, present:22, absent:0, late:0, avg:'09:05', pct:'100%',  pctBadge:'green' } }
};

// ── Currently selected person per panel ───────────────────────
var selectedPerson = { leave: null, att: null };

// ── Config map for each panel ──────────────────────────────────
var panelCfg = {
  leave: {
    tabs:        'leaveScopeTabs',
    meView:      'leaveMeView',
    teamView:    'leaveTeamView',
    dropWrap:    'leaveTeamDropdownWrap',
    searchInput: 'leavePersonSearch',
    dropdown:    'leavePersonDropdown',
    chip:        'leaveSelectedChip',
    chipName:    'leaveSelectedName'
  },
  att: {
    tabs:        'attendanceScopeTabs',
    meView:      'attendanceMeView',
    teamView:    'attendanceTeamView',
    dropWrap:    'attTeamDropdownWrap',
    searchInput: 'attPersonSearch',
    dropdown:    'attPersonDropdown',
    chip:        'attSelectedChip',
    chipName:    'attSelectedName'
  }
};

// ── scopeSwitch: toggle Me / My Team ──────────────────────────
function scopeSwitch(panelKey, scope, tabEl) {
  var cfg = panelCfg[panelKey];
  if (!cfg) return;

  // Update tab active state
  var tabsEl = document.getElementById(cfg.tabs);
  if (tabsEl) tabsEl.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
  if (tabEl) tabEl.classList.add('active');

  // Toggle Me / Team views
  var meEl   = document.getElementById(cfg.meView);
  var teamEl = document.getElementById(cfg.teamView);
  if (meEl)   meEl.style.display   = (scope === 'me')   ? '' : 'none';
  if (teamEl) teamEl.style.display = (scope === 'team') ? '' : 'none';

  // Show / hide dropdown wrap
  var dw = document.getElementById(cfg.dropWrap);
  if (dw) dw.style.display = (scope === 'team') ? '' : 'none';

  // Hide chip when switching back to Me
  if (scope === 'me') {
    var chip = document.getElementById(cfg.chip);
    if (chip) chip.style.display = 'none';
    selectedPerson[panelKey] = null;
  }
}

// ── populateTeamDropdowns: called from applyRole ───────────────
function populateTeamDropdowns(role) {
  // Reset selections
  selectedPerson = { leave: null, att: null };
  // Clear search inputs
  ['leavePersonSearch','attPersonSearch'].forEach(function(id){
    var el = document.getElementById(id); if (el) el.value = '';
  });
  // Hide chips
  ['leaveSelectedChip','attSelectedChip'].forEach(function(id){
    var el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  // Hide team data blocks
  var ltp = document.getElementById('leaveTeamPrompt');
  var ltc = document.getElementById('leaveTeamCards');
  var atp = document.getElementById('attTeamPrompt');
  var atb = document.getElementById('attTeamBlocks');
  if (ltp) ltp.style.display = '';
  if (ltc) ltc.style.display = 'none';
  if (atp) atp.style.display = '';
  if (atb) atb.style.display = 'none';
}

// ── openTeamDropdown: render list and show ─────────────────────
function openTeamDropdown(panelKey) {
  renderDropdownList(panelKey, '');
  var cfg = panelCfg[panelKey];
  var dd = document.getElementById(cfg.dropdown);
  if (dd) dd.style.display = 'block';

  // Close on outside click (once)
  setTimeout(function(){
    document.addEventListener('click', function _close(e){
      var wrap = document.getElementById(cfg.dropWrap);
      if (wrap && !wrap.contains(e.target)) {
        if (dd) dd.style.display = 'none';
        document.removeEventListener('click', _close);
      }
    });
  }, 0);
}

// ── filterTeamDropdown: filter list on keyup ───────────────────
function filterTeamDropdown(panelKey) {
  var cfg = panelCfg[panelKey];
  var input = document.getElementById(cfg.searchInput);
  var q = input ? input.value.toLowerCase() : '';
  renderDropdownList(panelKey, q);
  var dd = document.getElementById(cfg.dropdown);
  if (dd) dd.style.display = 'block';
}

// ── renderDropdownList: build dropdown items ───────────────────
function renderDropdownList(panelKey, query) {
  var cfg = panelCfg[panelKey];
  var dd = document.getElementById(cfg.dropdown);
  if (!dd) return;

  var people = teamData[currentRole] || [];
  var filtered = people.filter(function(p){
    return !query || p.name.toLowerCase().indexOf(query) !== -1;
  });

  if (filtered.length === 0) {
    dd.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-tertiary);">No results</div>';
    return;
  }

  dd.innerHTML = filtered.map(function(p){
    return '<div onclick="selectTeamPerson(\\'' + panelKey + '\\',\\'' + p.id + '\\',\\'' + p.name + '\\')" '
      + 'style="padding:8px 12px;font-size:12.5px;cursor:pointer;transition:background 0.1s;" '
      + 'onmouseover="this.style.background=\\'var(--primary-muted)\\'" '
      + 'onmouseout="this.style.background=\\'\\'">'
      + '<div style="font-weight:500;color:var(--text-primary);">' + p.name + '</div>'
      + '<div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">' + p.title + ' · ' + p.dept + '</div>'
      + '</div>';
  }).join('');
}

// ── selectTeamPerson: called when a person is clicked ─────────
function selectTeamPerson(panelKey, personId, personName) {
  var cfg = panelCfg[panelKey];
  selectedPerson[panelKey] = personId;

  // Update search input and chip
  var input = document.getElementById(cfg.searchInput);
  if (input) input.value = personName;
  var chip = document.getElementById(cfg.chip);
  var chipName = document.getElementById(cfg.chipName);
  if (chipName) chipName.textContent = personName;
  if (chip) chip.style.display = 'flex';

  // Close dropdown
  var dd = document.getElementById(cfg.dropdown);
  if (dd) dd.style.display = 'none';

  // Render data for selected person
  if (panelKey === 'leave') renderLeaveTeamData();
  if (panelKey === 'att')   renderAttTeamData();
}

// ── clearTeamSelection: × button on chip ──────────────────────
function clearTeamSelection(panelKey) {
  var cfg = panelCfg[panelKey];
  selectedPerson[panelKey] = null;
  var input = document.getElementById(cfg.searchInput);
  if (input) input.value = '';
  var chip = document.getElementById(cfg.chip);
  if (chip) chip.style.display = 'none';

  if (panelKey === 'leave') {
    var ltp = document.getElementById('leaveTeamPrompt');
    var ltc = document.getElementById('leaveTeamCards');
    if (ltp) ltp.style.display = '';
    if (ltc) ltc.style.display = 'none';
  }
  if (panelKey === 'att') {
    var atp = document.getElementById('attTeamPrompt');
    var atb = document.getElementById('attTeamBlocks');
    if (atp) atp.style.display = '';
    if (atb) atb.style.display = 'none';
  }
}

// ── renderLeaveTeamData: update leave cards + table ───────────
function renderLeaveTeamData() {
  var pid = selectedPerson.leave;
  var data = pid ? leavePersonData[pid] : null;

  var prompt = document.getElementById('leaveTeamPrompt');
  var cards  = document.getElementById('leaveTeamCards');
  if (!data) {
    if (prompt) prompt.style.display = '';
    if (cards)  cards.style.display  = 'none';
    return;
  }
  if (prompt) prompt.style.display = 'none';
  if (cards)  cards.style.display  = '';

  // Balance cards
  var balanceEl = document.getElementById('leaveTeamBalanceCards');
  if (balanceEl) {
    balanceEl.innerHTML =
      '<div class="leave-card" style="border-left:3px solid #0D9488;">'
        + '<div class="leave-card-icon" style="background:#F0FDFA;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#0D9488;white-space:nowrap;">' + data.el + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.elTotal + '</span></div><div class="leave-label">Earned Leave</div></div></div>'
      + '<div class="leave-card" style="border-left:3px solid #0EA5E9;">'
        + '<div class="leave-card-icon" style="background:#F0F9FF;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#0EA5E9;white-space:nowrap;">' + data.sl + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.slTotal + '</span></div><div class="leave-label">Sick Leave</div></div></div>'
      + '<div class="leave-card" style="border-left:3px solid #D97706;">'
        + '<div class="leave-card-icon" style="background:#FFFBEB;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#D97706;white-space:nowrap;">' + data.cl + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.clTotal + '</span></div><div class="leave-label">Casual Leave</div></div></div>'
      + '<div class="leave-card" style="border-left:3px solid #7C3AED;">'
        + '<div class="leave-card-icon" style="background:#F5F3FF;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div>'
        + '<div class="leave-card-body"><div class="leave-value" style="color:#7C3AED;white-space:nowrap;">' + data.co + '<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/' + data.coTotal + '</span></div><div class="leave-label">Comp-Off</div></div></div>';
  }

  // History table
  var tbody = document.getElementById('leaveTeamTableBody');
  if (tbody) {
    tbody.innerHTML = data.history.map(function(r){
      var badgeClass = r.status === 'Approved' ? 'green' : (r.status === 'Pending' ? 'amber' : 'red');
      var actionBtn  = r.status === 'Pending'
        ? '<button class="approve-btn approve" onclick="showToast(\\'Leave approved!\\',\\'success\\')">Approve</button> '
          + '<button class="approve-btn reject" onclick="showToast(\\'Leave rejected\\',\\'error\\')">Reject</button>'
        : '—';
      var dateAttr = r.fromISO ? ' data-leave-date="' + r.fromISO + '"' : '';
      return '<tr data-leave-status="' + r.status.toLowerCase() + '"' + dateAttr + '><td>' + r.type + '</td><td>' + r.from + '</td><td>' + r.to + '</td><td>' + r.days
        + '</td><td><span class="badge ' + badgeClass + '">' + r.status + '</span></td><td>' + actionBtn + '</td></tr>';
    }).join('');
    // Clear date range pickers and reset button state for the newly loaded person
    var drFrom = document.getElementById('teamLeaveDRFrom');
    var drTo   = document.getElementById('teamLeaveDRTo');
    if (drFrom) drFrom.value = '';
    if (drTo)   drTo.value   = '';
    var drPill    = document.getElementById('teamLeaveDRActivePill');
    var drClearB  = document.getElementById('teamLeaveDRClearBtn');
    var drTrigger = document.getElementById('teamLeaveDRTrigger');
    var drPop     = document.getElementById('teamLeaveDRPopover');
    var drLabel   = document.getElementById('teamLeaveDRBtnLabel');
    if (drPill)    { drPill.textContent = ''; drPill.style.display = 'none'; }
    if (drClearB)  drClearB.style.display = 'none';
    if (drTrigger) drTrigger.classList.remove('active');
    if (drPop)     drPop.classList.remove('open');
    if (drLabel)   drLabel.style.display = '';
    // Update filter counts and reset segment to All
    updateTeamLeaveFilterCounts(data.history);
    // Apply whichever filter is currently active (stays on All for fresh load)
    var activeBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn.active');
    filterTeamLeaves(activeBtn ? activeBtn.getAttribute('data-value') : 'all', activeBtn);
  }
}

// ── renderAttTeamData: update Today + Monthly blocks ──────────
function renderAttTeamData() {
  var pid  = selectedPerson.att;
  var data = pid ? attPersonData[pid] : null;

  var prompt = document.getElementById('attTeamPrompt');
  var blocks = document.getElementById('attTeamBlocks');
  if (!data) {
    if (prompt) prompt.style.display = '';
    if (blocks) blocks.style.display = 'none';
    return;
  }
  if (prompt) prompt.style.display = 'none';
  if (blocks) blocks.style.display = '';

  var td = data.today;
  var statusBadge = td.status === 'Present' ? 'green' : (td.status === 'On Leave' ? 'amber' : 'red');

  // Today stat mini-cards
  var todayCards = document.getElementById('attTodayCards');
  if (todayCards) {
    todayCards.innerHTML =
      '<div style="background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<div style="font-size:12px;font-weight:600;color:var(--primary);">' + td.in + '</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">In Time</div></div>'
      + '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<div style="font-size:12px;font-weight:600;color:var(--text-primary);">' + td.out + '</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Out Time</div></div>'
      + '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<div style="font-size:12px;font-weight:600;color:var(--text-primary);">' + td.hrs + '</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Work Hrs</div></div>'
      + '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;">'
        + '<span class="badge ' + statusBadge + '">' + td.status + '</span><div style="font-size:10px;color:var(--text-secondary);margin-top:4px;">Status</div></div>';
  }

  // Today table row
  var todayRow = document.getElementById('attTodayRow');
  var people   = teamData[currentRole] || [];
  var person   = people.find(function(p){ return p.id === pid; }) || { name: pid };
  if (todayRow) {
    todayRow.innerHTML = '<tr><td><b>' + person.name + '</b></td>'
      + '<td><span class="badge ' + statusBadge + '">' + td.status + '</span></td>'
      + '<td>' + td.in + '</td><td>' + td.out + '</td><td>' + td.hrs + '</td></tr>';
  }

  // Monthly row
  var md = data.monthly;
  var monthlyRow = document.getElementById('attMonthlyRow');
  if (monthlyRow) {
    monthlyRow.innerHTML = '<tr>'
      + '<td>' + md.wd + '</td><td>' + md.present + '</td><td>' + md.absent + '</td>'
      + '<td>' + md.late + '</td><td>' + md.avg + '</td>'
      + '<td><span class="badge ' + md.pctBadge + '">' + md.pct + '</span></td></tr>';
  }
}
// ===== TAX DOCS FY FILTER =====
function filterTaxDocsByFY(fy) {
  var fys = ['2025-26', '2024-25', '2023-24'];
  fys.forEach(function(y) {
    var el = document.getElementById('taxdocs-fy-' + y);
    if (el) el.style.display = (y === fy) ? '' : 'none';
  });
  var title = document.getElementById('taxdocs-main-title');
  if (title) title.textContent = 'Tax Documents — FY ' + fy;
}

// ===== DARK MODE TOGGLE =====
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  const label = document.getElementById('darkModeLabel');
  if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  try { localStorage.setItem('pf-theme', isDark ? 'dark' : 'light'); } catch(e) {}
}
// Restore theme on load
(function() {
  try {
    if (localStorage.getItem('pf-theme') === 'dark') {
      document.documentElement.classList.add('dark');
      var label = document.getElementById('darkModeLabel');
      if (label) label.textContent = 'Light Mode';
    }
  } catch(e) {}
})();
// ===== HELPDESK STATUS FILTER =====
// ===== HELP DESK FILTERS =====

// Core status filter — called by both segment control and date-clear restore
function filterHelpDeskTickets(status) {
  // Clear date picker when status filter is applied
  var datePicker = document.getElementById('hdDateFilter');
  if (datePicker) datePicker.value = '';

  var cards = document.querySelectorAll('#my-tickets-tab .ticket-card');
  var visible = 0;
  cards.forEach(function(card) {
    var s = card.getAttribute('data-hd-status');
    // 'open' matches both 'open' (formerly in-progress & escalated)
    var show = (status === 'all') || (s === status);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  var empty = document.getElementById('hdFilter-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}

// Segmented control handler — updates active pill, then delegates to core filter
function segFilterHD(value, btn) {
  document.querySelectorAll('#hdFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-hd-value') === value);
  });
  filterHelpDeskTickets(value);
}

// Date picker filter — shows tickets raised on the selected date; clear restores status filter
function filterHDByDate(selectedDate) {
  var cards = document.querySelectorAll('#my-tickets-tab .ticket-card');
  if (!selectedDate) {
    // Restore whichever segment is currently active
    var activeBtn = document.querySelector('#hdFilterSegment .task-seg-btn.active');
    var activeVal = activeBtn ? activeBtn.getAttribute('data-hd-value') : 'open';
    filterHelpDeskTickets(activeVal);
    return;
  }
  // Deactivate all segment buttons while date filter is active
  document.querySelectorAll('#hdFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  var visible = 0;
  cards.forEach(function(card) {
    var raised = card.getAttribute('data-hd-raised');
    var show = (raised === selectedDate);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  var empty = document.getElementById('hdFilter-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}

// ===== TASK FILTER =====
function filterMyTasks(statusFilter) {
  // When status changes, clear the date filter so they don't conflict
  var dateInput = document.getElementById('taskDateFilter');
  if (dateInput) dateInput.value = '';

  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(card) {
    var s = card.getAttribute('data-status');
    var show = (statusFilter === 'all') || (s === statusFilter);
    card.style.display = show ? '' : 'none';
  });
}

// Segmented control handler — scoped to #taskFilterSegment, syncs hidden select
function segFilterMyTasks(value, btn) {
  // Update hidden select for backward compat
  var sel = document.getElementById('taskFilterSelect');
  if (sel) sel.value = value;
  // Update active state only on To Do segment buttons (scoped)
  document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-value') === value);
  });
  filterMyTasks(value);
}

function filterMyTasksByDate(selectedDate) {
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  if (!selectedDate) {
    // No date selected — restore the current status filter
    var sel = document.getElementById('taskFilterSelect');
    filterMyTasks(sel ? sel.value : 'open');
    return;
  }
  // Deactivate To Do segment buttons when filtering by date
  document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b) { b.classList.remove('active'); });
  // Show any card whose due date matches, regardless of status
  cards.forEach(function(card) {
    var due = card.getAttribute('data-due');
    card.style.display = (due === selectedDate) ? '' : 'none';
  });
}

// Initialise: show only open tasks on load
document.addEventListener('DOMContentLoaded', function() {
  filterMyTasks('open');
  // Set min date for due date picker to today
  var today = new Date().toISOString().split('T')[0];
  var dd = document.getElementById('nt_dueDate');
  if (dd) dd.min = today;
});

// ===== LEAVE CC (NOTIFICATION ONLY — no approval logic) =====
var lvCCList = [];

function lvRenderCCTags() {
  var container = document.getElementById('lv_cc_tags');
  if (!container) return;
  container.innerHTML = '';
  lvCCList.forEach(function(name, idx) {
    var tag = document.createElement('span');
    tag.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:2px 7px;border-radius:10px;font-size:11px;font-weight:500;cursor:default;white-space:nowrap;'
      + 'background:var(--primary-muted);border:1px solid var(--primary-border);color:var(--primary);';
    tag.innerHTML = name
      + '<button onclick="lvRemoveCC('+idx+')" style="background:none;border:none;cursor:pointer;padding:0;line-height:1;font-size:12px;color:inherit;margin-left:1px;" title="Remove">×</button>';
    container.appendChild(tag);
  });
}

function lvAddCC(val) {
  var v = val.trim().replace(/,$/,'').trim();
  if (!v || lvCCList.indexOf(v) !== -1) return;
  lvCCList.push(v);
  lvRenderCCTags();
}

function lvRemoveCC(idx) {
  lvCCList.splice(idx, 1);
  lvRenderCCTags();
}

function lvCCKeydown(e) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    var input = document.getElementById('lv_cc_input');
    if (input && input.value.trim()) { lvAddCC(input.value); input.value = ''; }
  } else if (e.key === 'Backspace') {
    var input = document.getElementById('lv_cc_input');
    if (input && input.value === '' && lvCCList.length > 0) {
      lvCCList.pop(); lvRenderCCTags();
    }
  }
}

function lvCCInput(e) {
  var input = e.target;
  if (input.value.endsWith(')')) { lvAddCC(input.value); input.value = ''; }
}

// Focus styles for leave CC wrap
document.addEventListener('DOMContentLoaded', function() {
  var inp = document.getElementById('lv_cc_input');
  var wrap = document.getElementById('lv_cc_wrap');
  if (inp && wrap) {
    inp.addEventListener('focus', function(){ wrap.style.borderColor='var(--primary)'; wrap.style.boxShadow='0 0 0 2px rgba(13,148,136,0.15)'; });
    inp.addEventListener('blur',  function(){ wrap.style.borderColor='var(--border)';  wrap.style.boxShadow=''; });
  }
});

// ===== NEW TASK FEATURE =====

// CC tag management
var ntCCList = [];
var ntManagerHRTerms = ['manager','hr','admin'];

function ntIsApprover(name) {
  var lower = name.toLowerCase();
  return ntManagerHRTerms.some(function(t){ return lower.indexOf(t) !== -1; });
}

function ntUpdateApprovalNotice() {
  var hasApprover = ntCCList.some(ntIsApprover);
  var notice = document.getElementById('nt_approval_notice');
  if (notice) notice.style.display = hasApprover ? 'flex' : 'none';
}

function ntRenderCCTags() {
  var container = document.getElementById('nt_cc_tags');
  if (!container) return;
  container.innerHTML = '';
  ntCCList.forEach(function(name, idx) {
    var isApprover = ntIsApprover(name);
    var tag = document.createElement('span');
    tag.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:2px 7px;border-radius:10px;font-size:11px;font-weight:500;cursor:default;white-space:nowrap;'
      + (isApprover ? 'background:var(--warning-muted);border:1px solid #FDE68A;color:var(--warning);'
                    : 'background:var(--primary-muted);border:1px solid var(--primary-border);color:var(--primary);');
    tag.innerHTML = name
      + '<button onclick="ntRemoveCC('+idx+')" style="background:none;border:none;cursor:pointer;padding:0;line-height:1;font-size:12px;color:inherit;margin-left:1px;" title="Remove">×</button>';
    container.appendChild(tag);
  });
  ntUpdateApprovalNotice();
}

function ntAddCC(val) {
  var v = val.trim().replace(/,$/,'').trim();
  if (!v || ntCCList.indexOf(v) !== -1) return;
  ntCCList.push(v);
  ntRenderCCTags();
}

function ntRemoveCC(idx) {
  ntCCList.splice(idx, 1);
  ntRenderCCTags();
}

function ntCCKeydown(e) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    var input = document.getElementById('nt_cc_input');
    if (input && input.value.trim()) { ntAddCC(input.value); input.value = ''; }
  } else if (e.key === 'Backspace') {
    var input = document.getElementById('nt_cc_input');
    if (input && input.value === '' && ntCCList.length > 0) {
      ntCCList.pop(); ntRenderCCTags();
    }
  }
}

function ntCCInput(e) {
  var input = e.target;
  // Auto-add if user selected from datalist (ends with closing paren)
  if (input.value.endsWith(')')) {
    ntAddCC(input.value); input.value = '';
  }
}

// CC wrap focus styles
document.addEventListener('DOMContentLoaded', function() {
  var inp = document.getElementById('nt_cc_input');
  var wrap = document.getElementById('nt_cc_wrap');
  if (inp && wrap) {
    inp.addEventListener('focus', function(){ wrap.style.borderColor='var(--primary)'; wrap.style.boxShadow='0 0 0 2px rgba(13,148,136,0.15)'; });
    inp.addEventListener('blur',  function(){ wrap.style.borderColor='var(--border)'; wrap.style.boxShadow=''; });
  }
  // Initialise Help Desk: show open tickets by default
  filterHelpDeskTickets('open');
});

// Priority radio visual update
function ntPrioChange() {
  var colorMap = { low: 'var(--success)', medium: 'var(--warning)', high: 'var(--danger)' };
  var ids = { low: 'nt_prio_low_lbl', medium: 'nt_prio_med_lbl', high: 'nt_prio_high_lbl' };
  // Reset all to secondary
  Object.keys(ids).forEach(function(v) {
    var el = document.getElementById(ids[v]);
    if (el) el.style.color = 'var(--text-secondary)';
  });
  // Highlight selected
  var selected = document.querySelector('input[name="nt_priority"]:checked');
  if (selected && ids[selected.value]) {
    var el = document.getElementById(ids[selected.value]);
    if (el) el.style.color = colorMap[selected.value];
  }
}

// Description word counter
function ntDescCount() {
  var ta = document.getElementById('nt_description');
  var counter = document.getElementById('nt_desc_count');
  var errLimit = document.getElementById('nt_err_desc_limit');
  if (!ta || !counter) return;
  var words = ta.value.trim() === '' ? 0 : ta.value.trim().split(/\\s+/).length;
  counter.textContent = words + ' / 1000 words';
  counter.style.color = words > 1000 ? 'var(--danger)' : 'var(--text-tertiary)';
  if (errLimit) errLimit.style.display = words > 1000 ? '' : 'none';
}

// File upload
function ntDragOver(e) {
  e.preventDefault();
  var dz = document.getElementById('nt_drop_zone');
  if (dz) { dz.style.borderColor='var(--primary)'; dz.style.background='var(--primary-muted)'; }
}
function ntDragLeave(e) {
  var dz = document.getElementById('nt_drop_zone');
  if (dz) { dz.style.borderColor='var(--border)'; dz.style.background='var(--bg)'; }
}
function ntDrop(e) {
  e.preventDefault();
  ntDragLeave(e);
  var file = e.dataTransfer && e.dataTransfer.files[0];
  if (file) ntShowFile(file);
}
function ntFileSelected(e) {
  var file = e.target.files[0];
  if (file) ntShowFile(file);
}
function ntShowFile(file) {
  var info = document.getElementById('nt_file_info');
  var name = document.getElementById('nt_file_name');
  var size = document.getElementById('nt_file_size');
  if (info) info.style.display = 'flex';
  if (name) name.textContent = file.name;
  if (size) size.textContent = (file.size / 1024).toFixed(1) + ' KB';
}
function ntClearFile() {
  var info = document.getElementById('nt_file_info');
  var input = document.getElementById('nt_file_input');
  if (info) info.style.display = 'none';
  if (input) input.value = '';
}

// Validate + Save
function ntSave() {
  var valid = true;
  var nameEl = document.getElementById('nt_taskName');
  var nameErr = document.getElementById('nt_err_taskName');
  var descEl = document.getElementById('nt_description');
  var descErr = document.getElementById('nt_err_desc');
  var descLimitErr = document.getElementById('nt_err_desc_limit');

  // Task name
  if (!nameEl || !nameEl.value.trim()) {
    if (nameErr) nameErr.style.display = '';
    if (nameEl) { nameEl.classList.add('input-error'); nameEl.focus(); }
    valid = false;
  } else {
    if (nameErr) nameErr.style.display = 'none';
    if (nameEl) nameEl.classList.remove('input-error');
  }

  // Description
  var descWords = (descEl && descEl.value.trim()) ? descEl.value.trim().split(/\\s+/).length : 0;
  if (!descEl || !descEl.value.trim()) {
    if (descErr) descErr.style.display = '';
    if (descEl) descEl.classList.add('input-error');
    valid = false;
  } else if (descWords > 1000) {
    if (descLimitErr) descLimitErr.style.display = '';
    if (descEl) descEl.classList.add('input-error');
    valid = false;
  } else {
    if (descErr) descErr.style.display = 'none';
    if (descLimitErr) descLimitErr.style.display = 'none';
    if (descEl) descEl.classList.remove('input-error');
  }

  if (!valid) return;

  // Determine if needs approval
  var hasApprover = ntCCList.some(ntIsApprover);
  var msg = hasApprover
    ? 'Task saved! It will be routed for approval on completion.'
    : 'Task created successfully!';
  showToast(msg, 'success');
  ntReset();
  // Switch back to My Tasks tab
  var myTasksTab = document.querySelector('.tab[onclick*="my-tasks-content"]');
  if (myTasksTab) switchTab(myTasksTab, 'my-tasks-content');
}

// Cancel — discard and go back to My Tasks
function ntCancel() {
  ntReset();
  var myTasksTab = document.querySelector('.tab[onclick*="my-tasks-content"]');
  if (myTasksTab) switchTab(myTasksTab, 'my-tasks-content');
}

// Reset form to defaults
function ntReset() {
  var f = ['nt_taskName','nt_description','nt_dueDate'];
  f.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var assignee = document.getElementById('nt_assignee');
  if (assignee) assignee.value = 'me';
  ntCCList = [];
  ntRenderCCTags();
  // Reset priority to Low
  var lowRadio = document.querySelector('input[name="nt_priority"][value="low"]');
  if (lowRadio) { lowRadio.checked = true; ntPrioChange(); }
  // Reset word counter
  var counter = document.getElementById('nt_desc_count');
  if (counter) counter.textContent = '0 / 1000 words';
  // Clear errors
  ['nt_err_taskName','nt_err_desc','nt_err_desc_limit'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display='none';
  });
  ['nt_taskName','nt_description'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.classList.remove('input-error');
  });
  ntClearFile();
  ntUpdateApprovalNotice();
}

// ── Requests Filter Functions ──────────────────────────────────────
function filterMyRequests(status, btn) {
  // Update segment buttons
  document.querySelectorAll('#reqFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  // Clear date filter
  var dateFilter = document.getElementById('reqDateFilter');
  if (dateFilter) dateFilter.value = '';
  // Filter cards
  var cards = document.querySelectorAll('#req-cards-wrap .card');
  cards.forEach(function(card) {
    var cardStatus = card.getAttribute('data-req-status') || '';
    if (status === 'all' || cardStatus === status) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterReqByDate(selectedDate) {
  if (!selectedDate) {
    // Restore active filter
    var activeBtn = document.querySelector('#reqFilterSegment .task-seg-btn.active');
    var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
    filterMyRequests(status, activeBtn);
    return;
  }
  var cards = document.querySelectorAll('#req-cards-wrap .card');
  cards.forEach(function(card) {
    var cardDate = card.getAttribute('data-req-date') || '';
    card.style.display = (cardDate === selectedDate) ? '' : 'none';
  });
}

// ── Edit Request Modal ─────────────────────────────────────────────
// ── Edit Ticket Modal: Help Desk ──────────────────────────────────

function openEditHdModal(tktNum, category, priority, subject, description, raisedDate, status) {
  // Populate ticket number
  document.getElementById('editHdNum').textContent = '#' + tktNum;

  // Category
  var catSel = document.getElementById('editHdCategory');
  if (catSel) {
    for (var i = 0; i < catSel.options.length; i++) {
      if (catSel.options[i].text === category) { catSel.selectedIndex = i; break; }
    }
  }

  // Priority
  var priSel = document.getElementById('editHdPriority');
  if (priSel) {
    for (var j = 0; j < priSel.options.length; j++) {
      if (priSel.options[j].text === priority) { priSel.selectedIndex = j; break; }
    }
  }

  // Subject, description, date
  var subjEl = document.getElementById('editHdSubject');
  if (subjEl) subjEl.value = subject || '';
  var descEl = document.getElementById('editHdDescription');
  if (descEl) descEl.value = description || '';
  var dateEl = document.getElementById('editHdDate');
  if (dateEl) dateEl.value = raisedDate || '';

  // Reset attachment label
  document.getElementById('editHdAttachLabel').textContent = 'Upload supporting document';
  var fileInput = document.getElementById('editHdAttachment');
  if (fileInput) fileInput.value = '';

  // Status badge
  var statusEl = document.getElementById('editHdStatus');
  if (statusEl) statusEl.textContent = status || '';

  // Open modal
  document.getElementById('editHdModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEditHdModal() {
  document.getElementById('editHdModal').classList.remove('open');
  document.body.style.overflow = '';
}

function saveEditHd() {
  var subject = document.getElementById('editHdSubject').value.trim();
  if (!subject) { showToast('Subject is required.', 'error'); return; }
  closeEditHdModal();
  showToast('Ticket updated successfully!', 'success');
}

function openEditReqModal(reqNum, reqType, reqTitle, reqAmount, reqDate, reqStatus) {
  document.getElementById('editReqNum').textContent = reqNum;
  var typeSelect = document.getElementById('editReqType');
  if (typeSelect) {
    for (var i = 0; i < typeSelect.options.length; i++) {
      if (typeSelect.options[i].text === reqType) { typeSelect.selectedIndex = i; break; }
    }
  }
  var titleEl = document.getElementById('editReqTitle');
  if (titleEl) titleEl.value = reqTitle || '';
  var amountEl = document.getElementById('editReqAmount');
  if (amountEl) amountEl.value = reqAmount || '';
  var dateEl = document.getElementById('editReqDate');
  if (dateEl) dateEl.value = reqDate || '';
  var statusEl = document.getElementById('editReqStatus');
  if (statusEl) statusEl.textContent = reqStatus || '';
  document.getElementById('editReqAttachLabel').textContent = 'Upload Receipt or Invoice';
  document.getElementById('editReqModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEditReqModal() {
  document.getElementById('editReqModal').classList.remove('open');
  document.body.style.overflow = '';
}

function saveEditReq() {
  var amount = document.getElementById('editReqAmount').value;
  var attachment = document.getElementById('editReqAttachment').files[0];
  if (!amount || parseFloat(amount) <= 0) {
    showToast('Amount is required.', 'error'); return;
  }
  if (!attachment) {
    showToast('Please attach a receipt or invoice.', 'error'); return;
  }
  closeEditReqModal();
  showToast('Request updated successfully!', 'success');
}

// ── Raise Request Form Validation & Submit ─────────────────────────
// Auto-generate claim number on page load / tab open
var _reqClaimCounter = 1045;
function generateClaimNumber() {
  _reqClaimCounter++;
  var num = 'CLM-' + _reqClaimCounter;
  var el = document.getElementById('raiseClaimNumText');
  if (el) el.textContent = num;
  var el2 = document.getElementById('claimTypeFormNum');
  if (el2) el2.textContent = num;
  return num;
}
// Generate on first view of tab
(function() {
  var tab = document.querySelector('[onclick*="raise-request-tab"]');
  if (tab) {
    var orig = tab.getAttribute('onclick');
    tab.setAttribute('onclick', orig + '; generateClaimNumber();');
  }
})();

// ── Claim Type Page routing (Change 5) ───────────────
var _claimTypeConfig = {
  travel:  { emoji: '✈️',  label: 'Travel Claim' },
  general: { emoji: '🧾', label: 'General Claim' },
  misc:    { emoji: '📋', label: 'Miscellaneous Claim' }
};

// Shared subcategory list for all claim types
var _claimSubcategoryOptions = [
  'Business Promotion','Conveyance Exp','Daily Allowance','Fuel Exp',
  'Internet Exp','Others','Refreshment Exp','Telephone Exp','Travelling Exp'
];

var _activeClaimType = '';
var _claimMode = 'single';
var _multiClaimRowCounter = 0;

function selectClaimTypeCard(type) {
  // Highlight selected card
  ['travel','general','misc'].forEach(function(t) {
    var card = document.getElementById('claimCard_' + t);
    if (!card) return;
    if (t === type) {
      card.style.borderColor = 'var(--primary)';
      card.style.background  = 'var(--primary-muted)';
    } else {
      card.style.borderColor = 'var(--border)';
      card.style.background  = 'var(--surface)';
    }
  });
  _activeClaimType = type;

  // Show the form section
  var sec = document.getElementById('claimFormSection');
  if (sec) sec.style.display = '';

  // Default to single mode
  setClaimMode('single');

  // Scroll into view
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetClaimTypeSelector() {
  _activeClaimType = '';
  ['travel','general','misc'].forEach(function(t) {
    var card = document.getElementById('claimCard_' + t);
    if (card) { card.style.borderColor = 'var(--border)'; card.style.background = 'var(--surface)'; }
  });
  var sec = document.getElementById('claimFormSection');
  if (sec) sec.style.display = 'none';
  // Reset single form
  var fields = ['sc_subcategory','sc_amount','sc_date','sc_from','sc_to','sc_purpose','sc_client','sc_description'];
  fields.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var lbl = document.getElementById('sc_receiptLabel');
  if(lbl) lbl.textContent = 'Upload receipt (PDF, JPG, PNG)';
  var inp = document.getElementById('sc_receipt');
  if(inp) inp.value='';
  // Hide travel fields
  var tf = document.getElementById('sc_travelFields');
  if(tf) tf.style.display = 'none';
  // Clear multi rows
  var mr = document.getElementById('multiClaimRows');
  if(mr) mr.innerHTML = '';
  _multiClaimRowCounter = 0;
  updateMultiClaimTotal();
}

function setClaimMode(mode) {
  _claimMode = mode;
  var singleBtn = document.getElementById('modeSingleBtn');
  var multiBtn  = document.getElementById('modeMultiBtn');
  var singleForm = document.getElementById('singleClaimForm');
  var multiForm  = document.getElementById('multiClaimForm');

  if (mode === 'single') {
    if(singleBtn){ singleBtn.style.background='var(--primary)'; singleBtn.style.color='white'; }
    if(multiBtn) { multiBtn.style.background='var(--bg)'; multiBtn.style.color='var(--text-secondary)'; }
    if(singleForm) singleForm.style.display = '';
    if(multiForm)  multiForm.style.display  = 'none';
  } else {
    if(multiBtn) { multiBtn.style.background='var(--primary)'; multiBtn.style.color='white'; }
    if(singleBtn){ singleBtn.style.background='var(--bg)'; singleBtn.style.color='var(--text-secondary)'; }
    if(singleForm) singleForm.style.display = 'none';
    if(multiForm)  multiForm.style.display  = '';
    // Add first row if empty
    var mr = document.getElementById('multiClaimRows');
    if(mr && mr.children.length === 0) addMultiClaimRow();
  }
}

function onSingleSubcategoryChange(sub) {
  var tf = document.getElementById('sc_travelFields');
  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  if(tf) tf.style.display = (travelSubs.indexOf(sub) !== -1) ? 'block' : 'none';
  // Clear travel fields when hiding
  if(travelSubs.indexOf(sub) === -1) {
    var f = document.getElementById('sc_from'); if(f) f.value='';
    var t = document.getElementById('sc_to');   if(t) t.value='';
  }
}

function addMultiClaimRow() {
  _multiClaimRowCounter++;
  var idx = _multiClaimRowCounter;
  var container = document.getElementById('multiClaimRows');
  if(!container) return;

  var row = document.createElement('div');
  row.id = 'mcRow_' + idx;
  row.style.cssText = 'border:1px solid var(--border);border-radius:var(--radius);padding:12px 14px;background:var(--bg);position:relative;';

  row.innerHTML = \`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <span style="font-size:11px;font-weight:600;color:var(--text-tertiary);font-family:var(--mono);">Claim #\${idx}</span>
      <button onclick="removeMultiClaimRow(\${idx})" title="Remove" style="width:22px;height:22px;border-radius:5px;border:1px solid var(--border);background:var(--danger-muted);color:var(--danger);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:9px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div class="form-group" style="margin:0;">
          <div class="form-label">Subcategory <span style="color:var(--danger)">*</span></div>
          <select class="form-input" id="mc_sub_\${idx}" onchange="onMCSubChange(\${idx},this.value)">
            <option value="">— Select —</option>
            <option>Business Promotion</option><option>Conveyance Exp</option>
            <option>Daily Allowance</option><option>Fuel Exp</option>
            <option>Internet Exp</option><option>Others</option>
            <option>Refreshment Exp</option><option>Telephone Exp</option>
            <option>Travelling Exp</option>
          </select>
        </div>
        <div class="form-group" style="margin:0;">
          <div class="form-label">Amount (₹) <span style="color:var(--danger)">*</span></div>
          <input class="form-input" id="mc_amount_\${idx}" type="number" min="0.01" step="0.01" placeholder="₹ 0.00" oninput="updateMultiClaimTotal()">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div class="form-group" style="margin:0;">
          <div class="form-label">Date <span style="color:var(--danger)">*</span></div>
          <input class="form-input" id="mc_date_\${idx}" type="date">
        </div>
        <div class="form-group" style="margin:0;">
          <div class="form-label">Description</div>
          <input class="form-input" id="mc_desc_\${idx}" type="text" placeholder="Optional description">
        </div>
      </div>
      <!-- Travel extra fields (Travel From / Travel To only) -->
      <div id="mc_travelFields_\${idx}" style="display:none;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div class="form-group" style="margin:0;"><div class="form-label">Travel From <span style="color:var(--danger)">*</span></div><input class="form-input" id="mc_from_\${idx}" placeholder="e.g. Bangalore"></div>
          <div class="form-group" style="margin:0;"><div class="form-label">Travel To <span style="color:var(--danger)">*</span></div><input class="form-input" id="mc_to_\${idx}" placeholder="e.g. Mumbai"></div>
        </div>
      </div>
      <!-- Receipt upload -->
      <div class="form-group" style="margin:0;">
        <div class="form-label">Receipt</div>
        <label class="file-upload-label" for="mc_receipt_\${idx}" style="padding:6px 10px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <span id="mc_receiptLabel_\${idx}">Upload receipt</span>
        </label>
        <input type="file" id="mc_receipt_\${idx}" style="display:none" accept=".pdf,.jpg,.jpeg,.png"
          onchange="document.getElementById('mc_receiptLabel_\${idx}').textContent=this.files[0]?this.files[0].name:'Upload receipt'">
      </div>
    </div>\`;

  container.appendChild(row);
}

function onMCSubChange(idx, sub) {
  var tf = document.getElementById('mc_travelFields_' + idx);
  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  if(tf) tf.style.display = (travelSubs.indexOf(sub) !== -1) ? 'block' : 'none';
  if(travelSubs.indexOf(sub) === -1) {
    var f = document.getElementById('mc_from_'+idx); if(f) f.value='';
    var t = document.getElementById('mc_to_'+idx);   if(t) t.value='';
  }
}

function removeMultiClaimRow(idx) {
  var row = document.getElementById('mcRow_' + idx);
  if(row) row.remove();
  updateMultiClaimTotal();
}

function updateMultiClaimTotal() {
  var total = 0;
  document.querySelectorAll('#multiClaimRows input[type="number"]').forEach(function(inp){
    var v = parseFloat(inp.value);
    if(!isNaN(v) && v > 0) total += v;
  });
  var el = document.getElementById('multiClaimTotal');
  if(el) el.textContent = '₹ ' + total.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function submitSingleClaim() {
  var sub  = document.getElementById('sc_subcategory').value;
  var amt  = document.getElementById('sc_amount').value;
  var dt   = document.getElementById('sc_date').value;

  if(!sub)  { showToast('Please select a Subcategory.','error'); return; }
  if(!amt || parseFloat(amt) <= 0) { showToast('Please enter a valid positive Amount.','error'); return; }
  if(!dt)   { showToast('Please select a valid Claim Date.','error'); return; }

  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  if(travelSubs.indexOf(sub) !== -1) {
    var from = document.getElementById('sc_from').value.trim();
    var to   = document.getElementById('sc_to').value.trim();
    if(!from) { showToast('Travel From is required for this expense type.','error'); return; }
    if(!to)   { showToast('Travel To is required for this expense type.','error'); return; }
  }

  var claimNum = document.getElementById('raiseClaimNumText') ? document.getElementById('raiseClaimNumText').textContent : 'CLM-1045';
  showToast('Claim ' + claimNum + ' submitted successfully!', 'success');
  resetClaimTypeSelector();
  generateClaimNumber();
}

function submitMultiClaim() {
  var rows = document.querySelectorAll('#multiClaimRows > div');
  if(rows.length === 0) { showToast('Please add at least one claim row.','error'); return; }
  var valid = true;
  var travelSubs = ['Travelling Exp', 'Fuel Exp', 'Others'];
  rows.forEach(function(row) {
    var id = row.id.replace('mcRow_','');
    if(!document.getElementById('mc_sub_'+id).value)    { valid=false; }
    var a = document.getElementById('mc_amount_'+id).value;
    if(!a || parseFloat(a)<=0) { valid=false; }
    if(!document.getElementById('mc_date_'+id).value)   { valid=false; }
    var sub = document.getElementById('mc_sub_'+id).value;
    if(travelSubs.indexOf(sub) !== -1) {
      if(!document.getElementById('mc_from_'+id).value.trim())    valid=false;
      if(!document.getElementById('mc_to_'+id).value.trim())      valid=false;
    }
  });
  if(!valid) { showToast('Please fill all required fields in every claim row.','error'); return; }
  var claimNum = document.getElementById('raiseClaimNumText') ? document.getElementById('raiseClaimNumText').textContent : 'CLM-1045';
  showToast(rows.length + ' claim(s) submitted under ' + claimNum + ' successfully!', 'success');
  resetClaimTypeSelector();
  generateClaimNumber();
}

function openClaimTypePage(type) {
  // Legacy function — delegate to new card selector
  selectClaimTypeCard(type);
}

function closeClaimTypePage() {
  resetClaimTypeSelector();
}

// ── IT Declaration header FY switch (Change 1) ───────
function switchITDeclHeaderFY(val) {
  var titleEl  = document.getElementById('itDeclCardTitle');
  var badgeEl  = document.getElementById('itDeclStatusBadge');
  var formCard = document.querySelector('#taxdocs-itdecl-tab .card:last-of-type');

  // Also sync the inner form dropdown if present
  var innerSel = document.getElementById('itDeclFYSelect');

  if (val === '2025-26') {
    if (titleEl) titleEl.textContent = 'IT Declaration — FY 2025-26';
    if (badgeEl) { badgeEl.textContent = 'Pending Submission'; badgeEl.className = 'badge amber'; }
    if (innerSel) { innerSel.value = 'current'; switchITDeclFY('current'); }
  } else {
    if (titleEl) titleEl.textContent = 'IT Declaration — FY ' + val;
    if (badgeEl) { badgeEl.textContent = 'Submitted'; badgeEl.className = 'badge green'; }
    if (innerSel) { innerSel.value = val; switchITDeclFY(val); }
    showToast('Viewing FY ' + val + ' IT Declaration (read-only)', 'info');
  }
}

// ── Proof of Investment header FY switch ───────────
function switchPOIHeaderFY(val) {
  var titleEl = document.getElementById('poiCardTitle');
  var badgeEl = document.getElementById('poiStatusBadge');
  var poiContent = document.getElementById('taxdocs-poi-tab');

  if (val === '2025-26') {
    if (titleEl) titleEl.textContent = 'Proof of Investment — FY 2025-26';
    if (badgeEl) { badgeEl.textContent = '2 Pending'; badgeEl.className = 'badge red'; }
    // Restore current FY content visibility
    if (poiContent) {
      var uploadCard = poiContent.querySelector('.card:last-of-type');
      if (uploadCard) uploadCard.style.display = '';
      var submittedCard = poiContent.querySelector('.card:nth-of-type(2)');
      if (submittedCard) submittedCard.style.display = '';
    }
  } else {
    if (titleEl) titleEl.textContent = 'Proof of Investment — FY ' + val;
    if (badgeEl) { badgeEl.textContent = 'Submitted'; badgeEl.className = 'badge green'; }
    // Hide upload card for previous FY (read-only view)
    if (poiContent) {
      var uploadCard = poiContent.querySelector('.card:last-of-type');
      if (uploadCard) uploadCard.style.display = 'none';
    }
    showToast('Viewing FY ' + val + ' Proof of Investment (read-only)', 'info');
  }
}

function enableRaiseClaimEdit() {
  showToast('Form is now editable', 'info');
}

function saveReqFormDraft() {
  showToast('Draft saved — ' + (document.getElementById('raiseClaimNumText') ? document.getElementById('raiseClaimNumText').textContent : 'CLM-1045'), 'success');
}

function saveDraftEditReq() {
  showToast('Draft saved successfully', 'success');
  closeEditReqModal();
}

function submitReqForm() {
  // Legacy — delegate to new single claim submit
  submitSingleClaim();
}

function handleReqAttach(input) {
  var label = document.getElementById('reqAttachLabel');
  if (label) label.textContent = input.files[0] ? input.files[0].name : 'Upload Receipt or Invoice';
}
// ── Date Range Filter: To Do Panel ────────────────────────────────
function toggleTaskDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('taskDRPopover');
  var btn = document.getElementById('taskDRTrigger');
  var isOpen = pop.classList.contains('open');
  // Close all other popovers first
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyTaskDateRangeFromPopover() {
  var pop = document.getElementById('taskDRPopover');
  var btn = document.getElementById('taskDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyTaskDateRange();
}
function applyTaskDateRange() {
  var from = document.getElementById('taskDRFrom').value;
  var to   = document.getElementById('taskDRTo').value;
  if (!from && !to) { clearTaskDateRange(); return; }

  // Update button state — show only the clear (✕) button, never show the date pill text
  var pill   = document.getElementById('taskDRActivePill');
  var clearB = document.getElementById('taskDRClearBtn');
  var triggerBtn = document.getElementById('taskDRTrigger');
  if (pill) { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB) clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');

  // Clear the single-date picker and deactivate segment buttons
  var singlePicker = document.getElementById('taskDateFilter');
  if (singlePicker) singlePicker.value = '';
  document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999); // inclusive

  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(card) {
    var due = card.getAttribute('data-due');
    if (!due) { card.style.display = 'none'; return; }
    var d = new Date(due);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    card.style.display = inRange ? '' : 'none';
  });
}

function clearTaskDateRange() {
  document.getElementById('taskDRFrom').value = '';
  document.getElementById('taskDRTo').value   = '';
  // Reset button visual state
  var pill   = document.getElementById('taskDRActivePill');
  var clearB = document.getElementById('taskDRClearBtn');
  var triggerBtn = document.getElementById('taskDRTrigger');
  var pop    = document.getElementById('taskDRPopover');
  if (pill)  { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB) clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)   pop.classList.remove('open');
  // Restore active status filter
  var sel = document.getElementById('taskFilterSelect');
  var activeBtn = document.querySelector('#taskFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : (sel ? sel.value : 'open');
  filterMyTasks(status);
}

// ── Date Range Filter: Help Desk Panel ────────────────────────────
function toggleHDDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('hdDRPopover');
  var btn = document.getElementById('hdDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyHDDateRangeFromPopover() {
  var pop = document.getElementById('hdDRPopover');
  var btn = document.getElementById('hdDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyHDDateRange();
}
function applyHDDateRange() {
  var from = document.getElementById('hdDRFrom').value;
  var to   = document.getElementById('hdDRTo').value;
  if (!from && !to) { clearHDDateRange(); return; }

  // Update button state — show only the clear (✕) button, hide label text
  var pill       = document.getElementById('hdDRActivePill');
  var clearB     = document.getElementById('hdDRClearBtn');
  var triggerBtn = document.getElementById('hdDRTrigger');
  var btnLabel   = document.getElementById('hdDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)  btnLabel.style.display = 'none';

  // Clear single-date picker and deactivate segment buttons
  var singlePicker = document.getElementById('hdDateFilter');
  if (singlePicker) singlePicker.value = '';
  document.querySelectorAll('#hdFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var cards = document.querySelectorAll('#my-tickets-tab .ticket-card');
  var visible = 0;
  cards.forEach(function(card) {
    var raised = card.getAttribute('data-hd-raised');
    if (!raised) { card.style.display = 'none'; return; }
    var d = new Date(raised);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    card.style.display = inRange ? '' : 'none';
    if (inRange) visible++;
  });

  var empty = document.getElementById('hdFilter-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}

function clearHDDateRange() {
  document.getElementById('hdDRFrom').value = '';
  document.getElementById('hdDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('hdDRActivePill');
  var clearB     = document.getElementById('hdDRClearBtn');
  var triggerBtn = document.getElementById('hdDRTrigger');
  var pop        = document.getElementById('hdDRPopover');
  var btnLabel   = document.getElementById('hdDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)       pop.classList.remove('open');
  if (btnLabel)  btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#hdFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-hd-value') : 'open';
  filterHelpDeskTickets(status);
}

// ── Status Filter: My Leaves ────────────────────────────────────
function filterMyLeaves(status, btn) {
  // Update segment active state
  document.querySelectorAll('#myLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');

  // Filter table rows
  var rows = document.querySelectorAll('#myLeaveTableBody tr');
  rows.forEach(function(row) {
    var rowStatus = (row.getAttribute('data-leave-status') || '').toLowerCase();
    row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
  });
}

// ── Status Filter: Team Leaves ───────────────────────────────────
function filterTeamLeaves(status, btn) {
  // Update segment active state
  document.querySelectorAll('#teamLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');

  // Filter rendered table rows (renderLeaveTeamData injects data-leave-status)
  var rows = document.querySelectorAll('#leaveTeamTableBody tr');
  rows.forEach(function(row) {
    var rowStatus = (row.getAttribute('data-leave-status') || '').toLowerCase();
    row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
  });
}

// ── Helper: update team leave filter counts ──────────────────────
function updateTeamLeaveFilterCounts(historyArr) {
  var total    = historyArr.length;
  var pending  = historyArr.filter(function(r){ return r.status === 'Pending';  }).length;
  var approved = historyArr.filter(function(r){ return r.status === 'Approved'; }).length;
  var allEl  = document.getElementById('teamLeaveCount_all');
  var penEl  = document.getElementById('teamLeaveCount_pending');
  var appEl  = document.getElementById('teamLeaveCount_approved');
  if (allEl)  allEl.textContent  = total;
  if (penEl)  penEl.textContent  = pending;
  if (appEl)  appEl.textContent  = approved;
  // Reset segment to "Pending" active whenever new person is loaded
  document.querySelectorAll('#teamLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-value') === 'pending');
  });
  // Apply pending filter so rows update immediately
  var pendingBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn[data-value="pending"]');
  filterTeamLeaves('pending', pendingBtn);
}

// ── Date Range Filter: My Leaves ─────────────────────────────────
// ── Date Range Filter: My Leaves ─────────────────────────────────
function toggleMyLeaveDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('myLeaveDRPopover');
  var btn = document.getElementById('myLeaveDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyMyLeaveDRFromPopover() {
  var pop = document.getElementById('myLeaveDRPopover');
  var btn = document.getElementById('myLeaveDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyMyLeaveDR();
}
function applyMyLeaveDR() {
  var from = document.getElementById('myLeaveDRFrom').value;
  var to   = document.getElementById('myLeaveDRTo').value;
  if (!from && !to) { clearMyLeaveDR(); return; }

  // Update button state — show only the clear (✕) button, hide label text
  var pill       = document.getElementById('myLeaveDRActivePill');
  var clearB     = document.getElementById('myLeaveDRClearBtn');
  var triggerBtn = document.getElementById('myLeaveDRTrigger');
  var btnLabel   = document.getElementById('myLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)   btnLabel.style.display = 'none';

  // Deactivate status segment while date range is active
  document.querySelectorAll('#myLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var rows = document.querySelectorAll('#myLeaveTableBody tr');
  rows.forEach(function(row) {
    var dateAttr = row.getAttribute('data-leave-date');
    if (!dateAttr) { row.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    row.style.display = inRange ? '' : 'none';
  });
}

function clearMyLeaveDR() {
  document.getElementById('myLeaveDRFrom').value = '';
  document.getElementById('myLeaveDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('myLeaveDRActivePill');
  var clearB     = document.getElementById('myLeaveDRClearBtn');
  var triggerBtn = document.getElementById('myLeaveDRTrigger');
  var pop        = document.getElementById('myLeaveDRPopover');
  var btnLabel   = document.getElementById('myLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)        pop.classList.remove('open');
  if (btnLabel)   btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#myLeaveFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterMyLeaves(status, activeBtn);
}

// ── Date Range Filter: Team Leaves ────────────────────────────────
// ── Date Range Filter: Team Leaves ────────────────────────────────
function toggleTeamLeaveDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('teamLeaveDRPopover');
  var btn = document.getElementById('teamLeaveDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyTeamLeaveDRFromPopover() {
  var pop = document.getElementById('teamLeaveDRPopover');
  var btn = document.getElementById('teamLeaveDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyTeamLeaveDR();
}
function applyTeamLeaveDR() {
  var from = document.getElementById('teamLeaveDRFrom').value;
  var to   = document.getElementById('teamLeaveDRTo').value;
  if (!from && !to) { clearTeamLeaveDR(); return; }

  // Update button state — show only the clear (✕) button, hide label text
  var pill       = document.getElementById('teamLeaveDRActivePill');
  var clearB     = document.getElementById('teamLeaveDRClearBtn');
  var triggerBtn = document.getElementById('teamLeaveDRTrigger');
  var btnLabel   = document.getElementById('teamLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)   btnLabel.style.display = 'none';

  // Deactivate status segment while date range is active
  document.querySelectorAll('#teamLeaveFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var rows = document.querySelectorAll('#leaveTeamTableBody tr');
  rows.forEach(function(row) {
    var dateAttr = row.getAttribute('data-leave-date');
    if (!dateAttr) { row.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    row.style.display = inRange ? '' : 'none';
  });
}

function clearTeamLeaveDR() {
  document.getElementById('teamLeaveDRFrom').value = '';
  document.getElementById('teamLeaveDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('teamLeaveDRActivePill');
  var clearB     = document.getElementById('teamLeaveDRClearBtn');
  var triggerBtn = document.getElementById('teamLeaveDRTrigger');
  var pop        = document.getElementById('teamLeaveDRPopover');
  var btnLabel   = document.getElementById('teamLeaveDRBtnLabel');
  if (pill)       { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)     clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)        pop.classList.remove('open');
  if (btnLabel)   btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#teamLeaveFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterTeamLeaves(status, activeBtn);
}

// ── Date Range Filter: Expense Claim Panel ────────────────────────
function toggleReqDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('reqDRPopover');
  var btn = document.getElementById('reqDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyReqDateRangeFromPopover() {
  var pop = document.getElementById('reqDRPopover');
  var btn = document.getElementById('reqDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyReqDateRange();
}
function applyReqDateRange() {
  var from = document.getElementById('reqDRFrom').value;
  var to   = document.getElementById('reqDRTo').value;
  if (!from && !to) { clearReqDateRange(); return; }

  // Update button state — show only the clear (✕) button, hide label text
  var pill       = document.getElementById('reqDRActivePill');
  var clearB     = document.getElementById('reqDRClearBtn');
  var triggerBtn = document.getElementById('reqDRTrigger');
  var btnLabel   = document.getElementById('reqDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)  btnLabel.style.display = 'none';

  // Clear single-date picker and deactivate segment buttons
  var singlePicker = document.getElementById('reqDateFilter');
  if (singlePicker) singlePicker.value = '';
  document.querySelectorAll('#reqFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var cards = document.querySelectorAll('#req-cards-wrap .card');
  cards.forEach(function(card) {
    var dateAttr = card.getAttribute('data-req-date');
    if (!dateAttr) { card.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    card.style.display = inRange ? '' : 'none';
  });
}

function clearReqDateRange() {
  document.getElementById('reqDRFrom').value = '';
  document.getElementById('reqDRTo').value   = '';
  // Reset button visual state
  var pill       = document.getElementById('reqDRActivePill');
  var clearB     = document.getElementById('reqDRClearBtn');
  var triggerBtn = document.getElementById('reqDRTrigger');
  var pop        = document.getElementById('reqDRPopover');
  var btnLabel   = document.getElementById('reqDRBtnLabel');
  if (pill)      { pill.textContent = ''; pill.style.display = 'none'; }
  if (clearB)    clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)       pop.classList.remove('open');
  if (btnLabel)  btnLabel.style.display = '';
  // Restore active status filter
  var activeBtn = document.querySelector('#reqFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterMyRequests(status, activeBtn);
}

// ===== EDIT TASK MODAL =====
var _editingTaskCard = null; // reference to the card being edited

// ════════════════════════════════════════════════════════
//  V74 NEW FEATURE FUNCTIONS
// ════════════════════════════════════════════════════════

// ── 1b: Task Dropdown selector ────────────────────────
// ── Searchable All Tasks Dropdown ────────────────────────────────
function toggleTaskDropdown() {
  var menu    = document.getElementById('taskDropdownMenu');
  var trigger = document.getElementById('taskDropdownTrigger');
  var search  = document.getElementById('taskDropdownSearch');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeTaskDropdown();
  } else {
    menu.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    if (search) { search.value = ''; filterTaskDropdownOptions(''); search.focus(); }
  }
}

function closeTaskDropdown() {
  var menu    = document.getElementById('taskDropdownMenu');
  var trigger = document.getElementById('taskDropdownTrigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
}

function filterTaskDropdownOptions(q) {
  var query = q.trim().toLowerCase();
  var opts  = document.querySelectorAll('#taskDropdownList .tf-search-opt');
  var anyVisible = false;
  opts.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    var show = !query || txt.indexOf(query) !== -1;
    opt.classList.toggle('hidden', !show);
    if (show) anyVisible = true;
  });
  var empty = document.getElementById('taskDropdownEmpty');
  if (empty) empty.style.display = anyVisible ? 'none' : '';
}

function selectTaskDropdownOpt(opt) {
  var value = opt.getAttribute('data-value');
  var label = value ? opt.textContent.trim() : 'All Tasks';
  // Update selected styling
  document.querySelectorAll('#taskDropdownList .tf-search-opt').forEach(function(o) {
    o.classList.toggle('selected', o === opt);
  });
  // Update trigger label
  var lbl = document.getElementById('taskDropdownLabel');
  if (lbl) lbl.textContent = label;
  closeTaskDropdown();
  // Call existing filter function — no change to logic
  applyTaskDropdownFilter(value);
}

function taskDropdownKeydown(e) {
  if (e.key === 'Escape') closeTaskDropdown();
}

// Close on outside click
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('taskDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeTaskDropdown();
});

// ── Helper: get selected value from a tf-search-list ─────────────
function _getDropdownValue(listId) {
  var sel = document.querySelector('#' + listId + ' .tf-search-opt.selected');
  return sel ? sel.getAttribute('data-value') : '';
}

// ── Searchable All Reviews Dropdown (Review Section) ─────────────
function toggleReviewTypeDropdown() {
  var menu    = document.getElementById('reviewTypeDropdownMenu');
  var trigger = document.getElementById('reviewTypeDropdownTrigger');
  var search  = document.getElementById('reviewTypeDropdownSearch');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeReviewTypeDropdown();
  } else {
    // Close other dropdowns
    closeTaskDropdown(); closeApprovalTypeDropdown();
    menu.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    if (search) { search.value = ''; filterReviewTypeDropdownOptions(''); search.focus(); }
  }
}
function closeReviewTypeDropdown() {
  var menu    = document.getElementById('reviewTypeDropdownMenu');
  var trigger = document.getElementById('reviewTypeDropdownTrigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
}
function filterReviewTypeDropdownOptions(q) {
  var query = q.trim().toLowerCase();
  var opts  = document.querySelectorAll('#reviewTypeDropdownList .tf-search-opt');
  var anyVisible = false;
  opts.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    var show = !query || txt.indexOf(query) !== -1;
    opt.classList.toggle('hidden', !show);
    if (show) anyVisible = true;
  });
  var empty = document.getElementById('reviewTypeDropdownEmpty');
  if (empty) empty.style.display = anyVisible ? 'none' : '';
}
function selectReviewTypeDropdownOpt(opt) {
  var value = opt.getAttribute('data-value');
  var label = value ? opt.textContent.trim() : 'All Reviews';
  document.querySelectorAll('#reviewTypeDropdownList .tf-search-opt').forEach(function(o) {
    o.classList.toggle('selected', o === opt);
  });
  var lbl = document.getElementById('reviewTypeDropdownLabel');
  if (lbl) lbl.textContent = label;
  closeReviewTypeDropdown();
  filterReviewsByType(value);
}
function reviewTypeDropdownKeydown(e) {
  if (e.key === 'Escape') closeReviewTypeDropdown();
}
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('reviewTypeDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeReviewTypeDropdown();
});

// ── Searchable All Types Dropdown (Approval Tasks) ────────────────
function toggleApprovalTypeDropdown() {
  var menu    = document.getElementById('approvalTypeDropdownMenu');
  var trigger = document.getElementById('approvalTypeDropdownTrigger');
  var search  = document.getElementById('approvalTypeDropdownSearch');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeApprovalTypeDropdown();
  } else {
    // Close other dropdowns
    closeTaskDropdown(); closeReviewTypeDropdown();
    menu.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    if (search) { search.value = ''; filterApprovalTypeDropdownOptions(''); search.focus(); }
  }
}
function closeApprovalTypeDropdown() {
  var menu    = document.getElementById('approvalTypeDropdownMenu');
  var trigger = document.getElementById('approvalTypeDropdownTrigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
}
function filterApprovalTypeDropdownOptions(q) {
  var query = q.trim().toLowerCase();
  var opts  = document.querySelectorAll('#approvalTypeDropdownList .tf-search-opt');
  var anyVisible = false;
  opts.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    var show = !query || txt.indexOf(query) !== -1;
    opt.classList.toggle('hidden', !show);
    if (show) anyVisible = true;
  });
  var empty = document.getElementById('approvalTypeDropdownEmpty');
  if (empty) empty.style.display = anyVisible ? 'none' : '';
}
function selectApprovalTypeDropdownOpt(opt) {
  var value = opt.getAttribute('data-value');
  var label = value ? opt.textContent.trim() : 'All Types';
  document.querySelectorAll('#approvalTypeDropdownList .tf-search-opt').forEach(function(o) {
    o.classList.toggle('selected', o === opt);
  });
  var lbl = document.getElementById('approvalTypeDropdownLabel');
  if (lbl) lbl.textContent = label;
  closeApprovalTypeDropdown();
  filterApprovalsByType(value);
}
function approvalTypeDropdownKeydown(e) {
  if (e.key === 'Escape') closeApprovalTypeDropdown();
}
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('approvalTypeDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeApprovalTypeDropdown();
});

function applyTaskDropdownFilter(taskId) {
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(c) {
    if (!taskId || c.getAttribute('data-task-id') === taskId) {
      c.style.display = '';
    } else {
      c.style.display = 'none';
    }
  });
}

// ── 1c: Priority filter ───────────────────────────────
function applyTaskPriorityFilter(priority) {
  var statusSel = document.getElementById('taskFilterSelect');
  var currentStatus = statusSel ? statusSel.value : 'all';
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  cards.forEach(function(c) {
    var statusMatch = (currentStatus === 'all') || (c.getAttribute('data-status') === currentStatus);
    var priorityMatch = !priority || (c.getAttribute('data-task-priority') === priority);
    c.style.display = (statusMatch && priorityMatch) ? '' : 'none';
  });
}

// ── 1d: Sort tasks ────────────────────────────────────
// Task creation order encoded by TASK-NNN id (lower = older)
var _taskPriorityOrder = { high: 0, medium: 1, low: 2 };
function applyTaskSort(sortVal) {
  var wrap = document.getElementById('my-tasks-content');
  var cards = Array.from(wrap.querySelectorAll('.task-card'));
  cards.sort(function(a, b) {
    if (sortVal === 'recent') {
      // Default: descending by TASK id (highest number = most recently created)
      var idA = parseInt((a.getAttribute('data-task-id') || '0').replace('TASK-', ''));
      var idB = parseInt((b.getAttribute('data-task-id') || '0').replace('TASK-', ''));
      return idB - idA;
    }
    if (sortVal === 'due_asc' || sortVal === 'due_desc') {
      var dA = a.getAttribute('data-due') || '9999-99-99';
      var dB = b.getAttribute('data-due') || '9999-99-99';
      if (!a.getAttribute('data-due')) dA = sortVal === 'due_asc' ? '9999-99-99' : '0000-00-00';
      if (!b.getAttribute('data-due')) dB = sortVal === 'due_asc' ? '9999-99-99' : '0000-00-00';
      return sortVal === 'due_asc' ? dA.localeCompare(dB) : dB.localeCompare(dA);
    }
    if (sortVal === 'priority_high' || sortVal === 'priority_low') {
      var pA = _taskPriorityOrder[a.getAttribute('data-task-priority')] !== undefined ? _taskPriorityOrder[a.getAttribute('data-task-priority')] : 9;
      var pB = _taskPriorityOrder[b.getAttribute('data-task-priority')] !== undefined ? _taskPriorityOrder[b.getAttribute('data-task-priority')] : 9;
      return sortVal === 'priority_high' ? pA - pB : pB - pA;
    }
    return 0;
  });
  // Re-append in sorted order (preserves filter visibility)
  var filterWrap = document.getElementById('taskFilterWrap');
  cards.forEach(function(c) { wrap.appendChild(c); });
  // Make sure filter wrap stays first
  if (filterWrap) wrap.insertBefore(filterWrap, wrap.firstChild);
}

// Apply default sort (Recently Created) on page load
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    applyTaskSort('recent');
    // Change 6: Set attendance month/year dropdowns to actual current month/year
    var now = new Date();
    var curMonth = now.getMonth();
    var curYear  = now.getFullYear();
    var mSel = document.getElementById('attMonthFilter');
    var ySel = document.getElementById('attYearFilter');
    if (mSel) mSel.value = String(curMonth);
    if (ySel) {
      // Add current year option if not already present
      var found = false;
      for (var i = 0; i < ySel.options.length; i++) {
        if (parseInt(ySel.options[i].value) === curYear) { ySel.selectedIndex = i; found = true; break; }
      }
      if (!found) {
        var opt = document.createElement('option');
        opt.value = String(curYear); opt.textContent = String(curYear); opt.selected = true;
        ySel.appendChild(opt);
      }
    }
  });
})();

// ── 2: Attendance Month/Year filter ──────────────────
function applyAttMonthYearFilter() {
  var monthSel = document.getElementById('attMonthFilter');
  var yearSel  = document.getElementById('attYearFilter');
  if (!monthSel || !yearSel) return;
  var m = parseInt(monthSel.value);
  var y = parseInt(yearSel.value);
  attCalMonth = m;
  attCalYear  = y;
  renderAttCalendar();
  updatePenaltyDaysCount();
  updateAvgWorkHours();
}

function resetAttMonthYearFilter() {
  var now = new Date();
  var curMonth = now.getMonth();
  var curYear  = now.getFullYear();
  var monthSel = document.getElementById('attMonthFilter');
  var yearSel  = document.getElementById('attYearFilter');
  if (monthSel) monthSel.value = String(curMonth);
  if (yearSel)  yearSel.value  = String(curYear);
  attCalMonth = curMonth;
  attCalYear  = curYear;
  renderAttCalendar();
  updatePenaltyDaysCount();
  updateAvgWorkHours();
}

// ── Compute and display Avg Work Hours for the selected month ──────────────
function updateAvgWorkHours() {
  var valEl = document.getElementById('avgWorkHrsValue');
  var tagEl = document.getElementById('avgWorkHrsTag');
  if (!valEl || !tagEl) return;

  var daysInMonth = new Date(attCalYear, attCalMonth + 1, 0).getDate();
  var totalMinutes = 0;
  var workingDays = 0; // days with actual hour data (present or late with hrs)

  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = attCalYear + '-' + String(attCalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var rec = attData[dateStr];
    if (!rec) continue;
    if ((rec.status === 'present' || rec.status === 'late') && rec.hrs && rec.hrs !== '—' && rec.hrs !== 'In Progress') {
      // Parse "Xh Ym" format
      var hrsStr = rec.hrs;
      var hMatch = hrsStr.match(/(\\d+)h/);
      var mMatch = hrsStr.match(/(\\d+)m/);
      var h = hMatch ? parseInt(hMatch[1]) : 0;
      var m = mMatch ? parseInt(mMatch[1]) : 0;
      totalMinutes += h * 60 + m;
      workingDays++;
    }
  }

  if (workingDays === 0) {
    valEl.textContent = '—';
    tagEl.textContent = 'No data';
    tagEl.style.background = '#F1F5F9';
    tagEl.style.color = '#64748B';
    return;
  }

  var avgMins = Math.round(totalMinutes / workingDays);
  var avgH = Math.floor(avgMins / 60);
  var avgM = avgMins % 60;
  var avgLabel = avgH + 'h ' + String(avgM).padStart(2,'0') + 'm';
  valEl.textContent = avgLabel;

  // Contextual tag: colour-code vs 9h standard
  var stdMins = 9 * 60;
  var diff = avgMins - stdMins;
  if (diff >= 0) {
    tagEl.style.background = '#F0FDF4'; tagEl.style.color = '#0D9488';
    tagEl.textContent = '+' + Math.floor(diff/60) + 'h ' + String(Math.abs(diff%60)).padStart(2,'0') + 'm vs std';
  } else {
    tagEl.style.background = '#FFF0F0'; tagEl.style.color = '#C92A2A';
    var absDiff = Math.abs(diff);
    tagEl.textContent = '-' + Math.floor(absDiff/60) + 'h ' + String(absDiff%60).padStart(2,'0') + 'm vs std';
  }
}

// Count absent days in current displayed month and update Penalty Days box
function updatePenaltyDaysCount() {
  var absentCount = 0;
  var daysInMonth = new Date(attCalYear, attCalMonth + 1, 0).getDate();
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = attCalYear + '-' + String(attCalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    if (attData[dateStr] && attData[dateStr].status === 'absent') {
      absentCount++;
    }
  }
  var valEl  = document.getElementById('penaltyDaysValue');
  var tagEl  = document.getElementById('penaltyDaysTag');
  if (valEl) valEl.textContent = absentCount;
  if (tagEl) {
    if (absentCount === 0) {
      tagEl.style.background = '#F0FDF4'; tagEl.style.color = '#0D9488';
      tagEl.textContent = 'All Clear';
    } else {
      tagEl.style.background = '#FFF0F0'; tagEl.style.color = '#C92A2A';
      tagEl.textContent = absentCount + ' Absent Day' + (absentCount !== 1 ? 's' : '');
    }
  }
}

// ── 3: Sandwich / Consecutive Leave Rule ─────────────
function checkSandwichLeave() {
  var fromEl = document.getElementById('leaveFromDate');
  var toEl   = document.getElementById('leaveToDate');
  var warn   = document.getElementById('sandwichWarning');
  var block  = document.getElementById('consecutiveLeaveBlock');
  if (!fromEl || !toEl || !warn || !block) return;

  warn.style.display  = 'none';
  block.style.display = 'none';

  var from = fromEl.value ? new Date(fromEl.value) : null;
  var to   = toEl.value   ? new Date(toEl.value)   : null;
  if (!from || !to || to < from) return;

  // Count actual calendar days (inclusive)
  var msPerDay = 86400000;
  var totalCalDays = Math.round((to - from) / msPerDay) + 1;

  // Check if span crosses weekend
  var crossesWeekend = false;
  for (var d = new Date(from); d <= to; d = new Date(d.getTime() + msPerDay)) {
    if (d.getDay() === 0 || d.getDay() === 6) { crossesWeekend = true; break; }
  }

  // Sandwich: leave spans across weekend
  if (crossesWeekend && totalCalDays > 2) {
    warn.style.display = 'flex';
  }

  // Block exactly 3 consecutive working-day leaves (sandwich case restriction)
  // Count working days (Mon–Fri) in range
  var workingDays = 0;
  for (var d2 = new Date(from); d2 <= to; d2 = new Date(d2.getTime() + msPerDay)) {
    if (d2.getDay() !== 0 && d2.getDay() !== 6) workingDays++;
  }
  if (workingDays === 3 && crossesWeekend) {
    block.style.display = 'flex';
    warn.style.display  = 'none'; // Show block warning only
  }
}

function submitLeaveWithSandwichCheck() {
  var block = document.getElementById('consecutiveLeaveBlock');
  if (block && block.style.display !== 'none') {
    showToast('Cannot apply 3 consecutive leaves (Sandwich Rule). Please adjust dates or contact HR.', 'error');
    return;
  }
  showToast('Leave request submitted!', 'success');
}

// ── 4: Tax Regime Toggle ─────────────────────────────
var _currentRegime = 'old';
function selectTaxRegime(regime) {
  _currentRegime = regime;
  var formCard = document.querySelector('#taxdocs-itdecl-tab .card:last-of-type');
  // Sync the summary card dropdown if it exists
  var dropdown = document.getElementById('taxRegimeDropdown');
  if (dropdown) dropdown.value = (regime === 'old') ? 'Old Regime' : 'New Regime';

  if (regime === 'old') {
    if (formCard) formCard.style.display = '';
  } else {
    if (formCard) formCard.style.display = 'none';
    showToast('New Regime selected — no deductions applicable. Standard deduction of ₹75,000 applies.', 'info');
  }
}

// ── 5: IT Declaration — Previous FY data filter ──────
var _itDeclPrevData = {
  '2024-25': { ppf: 65000, elss: 25000, lic: 20000, nsc: 0, health_self: 15000, health_par: 0, rent: 22000, hlint: 0, nps: 50000, edu: 0, don: 0 },
  '2023-24': { ppf: 60000, elss: 20000, lic: 18000, nsc: 0, health_self: 12000, health_par: 0, rent: 20000, hlint: 0, nps: 40000, edu: 0, don: 0 },
  '2022-23': { ppf: 50000, elss: 15000, lic: 15000, nsc: 0, health_self: 10000, health_par: 0, rent: 18000, hlint: 0, nps: 30000, edu: 0, don: 0 }
};

function switchITDeclFY(val) {
  var notice     = document.getElementById('itDeclPrevNotice');
  var labelEl    = document.getElementById('itDeclPrevFYLabel');
  var inputs     = document.querySelectorAll('#taxdocs-itdecl-tab .card:last-of-type input[type="number"], #taxdocs-itdecl-tab .card:last-of-type input[type="text"]');
  var submitBtn  = document.querySelector('#taxdocs-itdecl-tab .card:last-of-type .btn-sm.primary');

  if (val === 'current') {
    if (notice) notice.style.display = 'none';
    // Restore current FY values
    var cur = [72000, 30000, 23000, 0, 18000, 0, 25000, 'ABCDE1234F', 0, 0, 0, 0];
    inputs.forEach(function(inp, i) { if (cur[i] !== undefined) inp.value = cur[i]; inp.disabled = false; });
    if (submitBtn) submitBtn.disabled = false;
  } else {
    var data = _itDeclPrevData[val];
    if (!data) return;
    if (notice) { notice.style.display = 'flex'; }
    if (labelEl) labelEl.textContent = 'FY ' + val;
    var vals = [data.ppf, data.elss, data.lic, data.nsc, data.health_self, data.health_par, data.rent, '', 0, data.hlint, data.nps, data.edu, data.don];
    inputs.forEach(function(inp, i) { if (vals[i] !== undefined) inp.value = vals[i]; inp.disabled = true; });
    if (submitBtn) submitBtn.disabled = true;
    showToast('Viewing previous FY ' + val + ' data (read-only)', 'info');
  }
}

// ── Run penalty count on attendance page open ─────────
document.addEventListener('DOMContentLoaded', function() {
  // Also init penalty count when attendance page first renders
  updatePenaltyDaysCount();
  updateAvgWorkHours();
  // Apply default task sort
  applyTaskSort('recent');
});

// ════════════════════════════════════════════════════
//  V76 NEW FEATURE FUNCTIONS
// ════════════════════════════════════════════════════

// ════════════════════════════════════════════════════
// Called from "Add / Edit Spouse & Children" button inside Family Details tab
function openFamilyEditFromTab() { openFamilyModal(); }

// Save bar for Father/Mother fields in Family Details tab
function saveFamilyTabParents() { showToast('Family details saved successfully!', 'success'); }

//  V77 — MARITAL STATUS + FAMILY DETAILS MODAL
// ════════════════════════════════════════════════════

var _familyData = null; // stores saved family details
var _familyChildCount = 0; // tracks child rows in modal

// Called when any marital status radio is changed
function handleMaritalChange(val) {
  if (val === 'Married') {
    openFamilyModal();
  }
  // Update the display badge
  var disp = document.getElementById('maritalStatusDisplay');
  if (disp) disp.textContent = val;
}

// Open the family details modal
function openFamilyModal() {
  var modal = document.getElementById('familyModal');
  if (!modal) return;

  // Pre-fill if data was previously saved
  if (_familyData) {
    setVal('fm_spouseFirstName', _familyData.spouseFirstName);
    setVal('fm_spouseLastName',  _familyData.spouseLastName);
    setVal('fm_spouseDob',       _familyData.spouseDob);
    setVal('fm_spouseOccupation',_familyData.spouseOccupation);
    setVal('fm_spouseMobile',    _familyData.spouseMobile);
    setVal('fm_spouseDependent', _familyData.spouseDependent);
    // Restore child rows
    var container = document.getElementById('familyModalChildrenRows');
    if (container) container.innerHTML = '';
    _familyChildCount = 0;
    (_familyData.children || []).forEach(function(c) {
      addFamilyChildRow();
      var idx = _familyChildCount;
      setVal('fm_child' + idx + '_name',   c.name);
      setVal('fm_child' + idx + '_dob',    c.dob);
      setVal('fm_child' + idx + '_gender', c.gender);
    });
  } else {
    // Fresh modal — clear fields and add one child row
    ['fm_spouseFirstName','fm_spouseLastName','fm_spouseDob','fm_spouseOccupation','fm_spouseMobile','fm_spouseDependent'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
    });
    var container = document.getElementById('familyModalChildrenRows');
    if (container) container.innerHTML = '';
    _familyChildCount = 0;
    addFamilyChildRow(); // start with one empty child row
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFamilyModal() {
  var modal = document.getElementById('familyModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';

  // If user opened modal by clicking Married but cancels without saving,
  // revert radio to Single
  if (!_familyData) {
    var singleRadio = document.getElementById('ms_single');
    if (singleRadio) { singleRadio.checked = true; }
    var disp = document.getElementById('maritalStatusDisplay');
    if (disp) disp.textContent = 'Single';
  }
}

// Add a child row inside the modal
function addFamilyChildRow() {
  _familyChildCount++;
  var idx = _familyChildCount;
  var container = document.getElementById('familyModalChildrenRows');
  if (!container) return;
  var row = document.createElement('div');
  row.id = 'fm_childRow_' + idx;
  row.style.cssText = 'background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;position:relative;';
  row.innerHTML =
    '<div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:8px;">Child ' + idx + '</div>' +
    '<button onclick="removeFamilyChildRow(' + idx + ')" style="position:absolute;top:10px;right:10px;background:none;border:none;cursor:pointer;font-size:13px;color:var(--text-tertiary);" title="Remove">✕</button>' +
    '<div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;">' +
      '<div class="form-group"><div class="form-label">Full Name</div>' +
        '<input id="fm_child' + idx + '_name" class="form-input" placeholder="Child\\'s full name"></div>' +
      '<div class="form-group"><div class="form-label">Date of Birth</div>' +
        '<input id="fm_child' + idx + '_dob" class="form-input" type="date" style="cursor:pointer;"></div>' +
      '<div class="form-group"><div class="form-label">Gender</div>' +
        '<select id="fm_child' + idx + '_gender" class="form-input">' +
          '<option value="">— Select —</option><option>Male</option><option>Female</option><option>Other</option>' +
        '</select></div>' +
    '</div>';
  container.appendChild(row);
}

function removeFamilyChildRow(idx) {
  var row = document.getElementById('fm_childRow_' + idx);
  if (row) row.remove();
}

// Save family details from modal → display in Family Details tab
function saveFamilyDetails() {
  // Collect spouse data
  var spouse = {
    firstName:  getVal('fm_spouseFirstName'),
    lastName:   getVal('fm_spouseLastName'),
    dob:        getVal('fm_spouseDob'),
    occupation: getVal('fm_spouseOccupation'),
    mobile:     getVal('fm_spouseMobile'),
    dependent:  getVal('fm_spouseDependent')
  };

  // Collect all child rows
  var children = [];
  var rows = document.querySelectorAll('#familyModalChildrenRows > div[id^="fm_childRow_"]');
  rows.forEach(function(row) {
    var idx = row.id.replace('fm_childRow_', '');
    var name   = getVal('fm_child' + idx + '_name');
    var dob    = getVal('fm_child' + idx + '_dob');
    var gender = getVal('fm_child' + idx + '_gender');
    if (name || dob || gender) {
      children.push({ name: name, dob: dob, gender: gender });
    }
  });

  // Get marital status
  var selectedRadio = document.querySelector('input[name="pd_maritalStatus"]:checked');
  var maritalStatus = selectedRadio ? selectedRadio.value : 'Married';

  // Store data
  _familyData = {
    maritalStatus:   maritalStatus,
    spouseFirstName: spouse.firstName,
    spouseLastName:  spouse.lastName,
    spouseDob:       spouse.dob,
    spouseOccupation:spouse.occupation,
    spouseMobile:    spouse.mobile,
    spouseDependent: spouse.dependent,
    children:        children
  };

  // Populate Family Details tab display fields
  setVal('fd_spouseFirstName',  spouse.firstName);
  setVal('fd_spouseLastName',   spouse.lastName);
  setVal('fd_spouseDob',        spouse.dob);
  setVal('fd_spouseOccupation', spouse.occupation);
  setVal('fd_spouseMobile',     spouse.mobile);
  setVal('fd_spouseDependent',  spouse.dependent);

  // Marital status badge in Family tab
  var badge = document.getElementById('familyMaritalBadge');
  if (badge) badge.textContent = maritalStatus;

  // Render children in Family tab
  var childDisplay = document.getElementById('familyChildrenDisplay');
  var noChild = document.getElementById('familyNoChildren');
  if (childDisplay) {
    childDisplay.innerHTML = '';
    if (children.length > 0) {
      if (noChild) noChild.style.display = 'none';
      children.forEach(function(c, i) {
        var block = document.createElement('div');
        block.style.cssText = 'background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;';
        block.innerHTML =
          '<div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:8px;">Child ' + (i+1) + '</div>' +
          '<div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;">' +
            '<div class="form-group"><div class="form-label">Full Name</div><input class="form-input" value="' + escHtml(c.name) + '" disabled></div>' +
            '<div class="form-group"><div class="form-label">Date of Birth</div><input class="form-input" type="date" value="' + escHtml(c.dob) + '" disabled style="cursor:default;"></div>' +
            '<div class="form-group"><div class="form-label">Gender</div><input class="form-input" value="' + escHtml(c.gender) + '" disabled></div>' +
          '</div>';
        childDisplay.appendChild(block);
      });
    } else {
      if (noChild) noChild.style.display = 'block';
    }
  }

  // Show Spouse/Children sections directly in the merged Family Details tab
  var spouseSection   = document.getElementById('familySpouseSection');
  var childrenSection = document.getElementById('familyChildrenSection');
  if (spouseSection)   spouseSection.style.display   = (maritalStatus === 'Married') ? '' : 'none';
  if (childrenSection) childrenSection.style.display = (children.length > 0) ? '' : 'none';

  // Update marital status badge in Family Details tab
  var badge = document.getElementById('familyMaritalBadge');
  if (badge) badge.textContent = maritalStatus;

  // Update marital status display badge in personal tab
  var statusDisp = document.getElementById('maritalStatusDisplay');
  if (statusDisp) { statusDisp.textContent = maritalStatus; statusDisp.style.display = 'inline-flex'; }

  closeFamilyModal();
  showToast('Family details saved successfully!', 'success');

  // Auto-navigate to Family Details tab
  var familyTabBtn = document.querySelector('[onclick*="family-tab"]');
  if (familyTabBtn) switchTab(familyTabBtn, 'family-tab');
}

// Helper: get value from a form element
function getVal(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
// Helper: set value on a form element
function setVal(id, val) {
  var el = document.getElementById(id);
  if (el) el.value = val || '';
}
// Helper: escape HTML for safe insertion
function escHtml(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Change 2: Sub-Category Dropdown for Claim Types ──
var _claimSubCategories = {
  travel:     { hint: 'Select the specific travel sub-type', options: ['Fuel / Petrol', 'Flight Ticket', 'Train / Bus Ticket', 'Cab / Auto / Taxi', 'Hotel / Accommodation', 'Toll / Parking', 'Other Travel'] },
  meal:       { hint: 'Select the meal expense sub-type',   options: ['Client Meal', 'Team Lunch', 'Team Dinner', 'Working Meal (Overtime)', 'Conference Meal', 'Other Meal'] },
  office:     { hint: 'Select the office expense sub-type', options: ['Stationery / Paper', 'Computer Peripheral', 'Software / License', 'Furniture', 'Printing / Photocopying', 'Courier / Postage', 'Other Office Supply'] },
  medical:    { hint: 'Select the medical expense sub-type',options: ['Doctor Consultation', 'Medicines / Pharmacy', 'Diagnostic Tests / Lab', 'Hospital Admission', 'Dental Treatment', 'Vision / Spectacles', 'Other Medical'] },
  healthcare: { hint: 'Select the healthcare sub-type',    options: ['Health Insurance Premium', 'Wellness / Gym Membership', 'Preventive Health Check', 'Mental Health', 'Other Healthcare'] },
  education:  { hint: 'Select the education expense sub-type', options: ['Online Course / Certification', 'College / University Fee', 'Books / Study Material', 'Conference / Seminar', 'Professional Exam Fee', 'Other Education'] },
  misc:       { hint: 'Select the miscellaneous sub-type',  options: ['Laundry / Dry Cleaning', 'Communication / Internet', 'Event / Conference Fee', 'Donation / Charity', 'Subscription', 'Other Miscellaneous'] }
};

function populateClaimSubCategory(type) {
  var sel  = document.getElementById('claimSubCategorySelect');
  var hint = document.getElementById('claimSubCategoryHint');
  if (!sel) return;
  sel.innerHTML = '<option value="">— Select Sub-Category —</option>';
  var config = _claimSubCategories[type];
  if (!config) return;
  config.options.forEach(function(opt) {
    var o = document.createElement('option');
    o.value = opt; o.textContent = opt;
    sel.appendChild(o);
  });
  if (hint) hint.textContent = config.hint;
}

// ── Change 3: IT Declaration Cancel + Submit ──────────
function submitITDeclaration() {
  var panEl  = document.getElementById('hra_landlordPAN');
  var rentEl = document.getElementById('hra_monthlyRent');
  // Change 4 validation: annual rent > ₹1,00,000 → PAN required
  if (rentEl && panEl) {
    var annualRent = parseFloat(rentEl.value || 0) * 12;
    if (annualRent > 100000 && !panEl.value.trim()) {
      document.getElementById('landlordPANHint').style.display = 'block';
      panEl.style.borderColor = 'var(--danger)';
      panEl.focus();
      showToast('Landlord PAN is mandatory when annual rent exceeds ₹1,00,000', 'error');
      return;
    }
  }
  showToast('IT Declaration submitted successfully!', 'success');
}

function cancelITDeclaration() {
  // Clear all number inputs in the IT declaration form
  var inputs = document.querySelectorAll('#taxdocs-itdecl-tab .card:last-of-type input[type="number"]');
  inputs.forEach(function(inp) { inp.value = ''; });
  // Clear text inputs (Landlord PAN)
  var textInputs = document.querySelectorAll('#taxdocs-itdecl-tab .card:last-of-type input[type="text"]');
  textInputs.forEach(function(inp) { inp.value = ''; });
  // Reset PAN validation state
  var panHint = document.getElementById('landlordPANHint');
  var panEl   = document.getElementById('hra_landlordPAN');
  if (panHint) panHint.style.display = 'none';
  if (panEl)   panEl.style.borderColor = '';
  showToast('IT Declaration cancelled — data discarded', 'info');
}

// ── Change 4: Landlord PAN mandatory check ────────────
function checkLandlordPANRequired() {
  var rentEl  = document.getElementById('hra_monthlyRent');
  var panEl   = document.getElementById('hra_landlordPAN');
  var labelEl = document.getElementById('landlordPANLabel');
  var hintEl  = document.getElementById('landlordPANHint');
  if (!rentEl || !panEl) return;
  var annualRent = parseFloat(rentEl.value || 0) * 12;
  if (annualRent > 100000) {
    if (labelEl) labelEl.innerHTML = 'Landlord PAN <span style="color:var(--danger)">*</span> <span style="font-size:10px;color:var(--amber);font-weight:500;">(mandatory — annual rent &gt; ₹1,00,000)</span>';
    if (hintEl && !panEl.value.trim()) hintEl.style.display = 'block';
    panEl.setAttribute('required', 'required');
    panEl.style.borderColor = panEl.value.trim() ? '' : 'var(--amber)';
  } else {
    if (labelEl) labelEl.textContent = 'Landlord PAN';
    if (hintEl)  hintEl.style.display = 'none';
    panEl.removeAttribute('required');
    panEl.style.borderColor = '';
  }
}

// ════════════════════════════════════════════════════════════════
//  EMPLOYMENT HISTORY — Editable + Approval Workflow
// ════════════════════════════════════════════════════════════════

// ── Data store ──
var empHistData = {
  records: [
    { id: 1, company: 'PeopleFlow Technologies', designation: 'Senior Software Engineer', department: 'Engineering', from: '2023-04-01', to: '',        ctc: '18 LPA', isCurrent: true,  status: 'approved' },
    { id: 2, company: 'PeopleFlow Technologies', designation: 'Software Engineer',        department: 'Engineering', from: '2021-06-01', to: '2023-03-31', ctc: '12 LPA', isCurrent: false, status: 'approved' }
  ],
  pendingSnapshot: null,   // { records: [...], requestedAt: Date }
  mode: 'view',            // 'view' | 'edit'
  nextId: 3
};

// ── Utility: format date ──
function empFmtDate(val) {
  if (!val) return 'Present';
  var d = new Date(val + 'T00:00:00');
  if (isNaN(d)) return val;
  return d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}

// ── Utility: deep-clone records ──
function empCloneRecords(recs) {
  return recs.map(function(r) { return Object.assign({}, r); });
}

// ── CTC mask HTML (for view mode) ──
function empCTCCellHtml(ctcVal) {
  return '<div class="ctc-cell" data-visible="false">' +
    '<span class="ctc-text"><span class="ctc-mask">***</span><span class="ctc-value" hidden>₹' + ctcVal + '</span></span>' +
    '<button type="button" class="ctc-reveal-btn" onclick="toggleRowCTC(this)" aria-label="Show CTC" aria-pressed="false" title="Show CTC">' +
    getCTCIcon(false) + '</button></div>';
}

// ── Status badge HTML ──
function empStatusBadge(status) {
  if (status === 'pending')  return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:var(--warning-muted);color:var(--warning);border:1px solid #FDE68A;">⏳ Pending</span>';
  if (status === 'approved') return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:var(--success-muted);color:var(--success);border:1px solid #A7F3D0;">✓ Approved</span>';
  if (status === 'rejected') return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:var(--danger-muted);color:var(--danger);border:1px solid #FECACA;">✕ Rejected</span>';
  return '';
}

// ── Render table ──
function renderEmpHistTable() {
  var tbody = document.getElementById('empHistTableBody');
  if (!tbody) return;
  var isEdit = empHistData.mode === 'edit';
  var hasPending = empHistData.records.some(function(r) { return r.status === 'pending'; });

  // Status column header visibility
  var statusTh = document.getElementById('empHistStatusTh');
  if (statusTh) statusTh.style.display = (isEdit ? 'none' : '');

  tbody.innerHTML = '';

  empHistData.records.forEach(function(rec, idx) {
    var tr = document.createElement('tr');
    tr.style.cssText = 'border-bottom:1px solid var(--border-subtle);transition:background 0.12s;';
    tr.onmouseover = function() { this.style.background = 'var(--bg)'; };
    tr.onmouseout  = function() { this.style.background = ''; };

    var tdStyle = 'padding:10px 12px;vertical-align:middle;font-size:13px;color:var(--text-primary);';
    var inputStyle = 'width:100%;padding:5px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12.5px;font-family:var(--font);color:var(--text-primary);background:var(--surface);outline:none;min-width:100px;transition:border-color 0.14s;';

    if (isEdit) {
      // ── EDIT MODE: show inputs ──
      var isCurrentChecked = rec.isCurrent ? 'checked' : '';
      tr.innerHTML =
        '<td style="' + tdStyle + 'min-width:140px;">' +
          '<input type="text" data-field="company" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.company + '" placeholder="Company name *" style="' + inputStyle + '">' +
          '<span class="emp-err" id="empErr_company_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Required</span>' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:140px;">' +
          '<input type="text" data-field="designation" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.designation + '" placeholder="Designation *" style="' + inputStyle + '">' +
          '<span class="emp-err" id="empErr_designation_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Required</span>' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:120px;">' +
          '<input type="text" data-field="department" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.department + '" placeholder="Department" style="' + inputStyle + '">' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:140px;">' +
          '<input type="month" data-field="from" data-id="' + rec.id + '" class="emp-hist-input" value="' + (rec.from ? rec.from.substring(0,7) : '') + '" style="' + inputStyle + 'cursor:pointer;">' +
          '<span class="emp-err" id="empErr_from_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Required</span>' +
        '</td>' +
        '<td style="' + tdStyle + 'min-width:160px;">' +
          '<label style="display:flex;align-items:center;gap:5px;font-size:11.5px;color:var(--text-secondary);margin-bottom:4px;cursor:pointer;">' +
            '<input type="checkbox" data-field="isCurrent" data-id="' + rec.id + '" class="emp-hist-input" ' + isCurrentChecked + ' style="accent-color:var(--primary);cursor:pointer;"> Currently working here' +
          '</label>' +
          '<input type="month" data-field="to" data-id="' + rec.id + '" class="emp-hist-input" value="' + (rec.to ? rec.to.substring(0,7) : '') + '" style="' + inputStyle + 'cursor:pointer;' + (rec.isCurrent ? 'display:none;' : '') + '">' +
          '<span class="emp-err" id="empErr_to_' + rec.id + '" style="display:none;font-size:10.5px;color:var(--danger);">Must be after start date</span>' +
        '</td>' +
        '<td class="ctc-cell-col" style="' + tdStyle + 'min-width:100px;">' +
          '<input type="text" data-field="ctc" data-id="' + rec.id + '" class="emp-hist-input" value="' + rec.ctc + '" placeholder="e.g. 12 LPA" style="' + inputStyle + '">' +
        '</td>' +
        '<td style="' + tdStyle + 'text-align:center;">' +
          (empHistData.records.length > 1
            ? '<button onclick="removeEmpHistRow(' + rec.id + ')" title="Remove row" style="background:none;border:none;cursor:pointer;color:var(--danger);padding:3px;border-radius:4px;" onmouseover="this.style.background=\\'var(--danger-muted)\\'" onmouseout="this.style.background=\\'none\\'">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>'
            : '<span style="color:var(--text-tertiary);font-size:11px;">—</span>') +
        '</td>';
    } else {
      // ── VIEW MODE: read-only ──
      var isPending = rec.status === 'pending';
      var rowBg = isPending ? 'background:var(--warning-muted);' : '';
      tr.style.cssText += rowBg;
      tr.innerHTML =
        '<td style="' + tdStyle + '">' +
          '<span style="font-weight:' + (rec.isCurrent ? '600' : '400') + ';">' + rec.company + '</span>' +
          (rec.isCurrent ? '<span style="display:inline-flex;margin-left:6px;font-size:10px;font-weight:600;padding:1px 6px;border-radius:20px;background:var(--primary-muted);color:var(--primary);border:1px solid var(--primary-border);">Current</span>' : '') +
        '</td>' +
        '<td style="' + tdStyle + '">' + rec.designation + '</td>' +
        '<td style="' + tdStyle + '">' + rec.department + '</td>' +
        '<td style="' + tdStyle + 'font-family:var(--mono);font-size:12px;">' + empFmtDate(rec.from) + '</td>' +
        '<td style="' + tdStyle + 'font-family:var(--mono);font-size:12px;">' + (rec.isCurrent ? '<span style="color:var(--primary);font-weight:600;">Present</span>' : empFmtDate(rec.to)) + '</td>' +
        '<td class="ctc-cell-col" style="' + tdStyle + '">' + empCTCCellHtml(rec.ctc) + '</td>' +
        '<td style="' + tdStyle + '">' + empStatusBadge(rec.status) + '</td>';
    }

    tbody.appendChild(tr);

    // Attach live event listeners after inject
    if (isEdit) {
      tr.querySelectorAll('.emp-hist-input').forEach(function(inp) {
        inp.addEventListener('input', function() { syncEmpHistField(inp); });
        inp.addEventListener('change', function() { syncEmpHistField(inp); });
        inp.addEventListener('focus', function() { inp.style.borderColor = 'var(--primary)'; inp.style.boxShadow = '0 0 0 2px rgba(13,148,136,0.15)'; });
        inp.addEventListener('blur',  function() { inp.style.borderColor = ''; inp.style.boxShadow = ''; });
      });
    }
  });
}

// ── Sync input change to data ──
function syncEmpHistField(inp) {
  var id    = parseInt(inp.dataset.id);
  var field = inp.dataset.field;
  var rec   = empHistData.records.find(function(r) { return r.id === id; });
  if (!rec) return;

  if (inp.type === 'checkbox') {
    rec[field] = inp.checked;
    // Toggle "to" date field
    var toInput = inp.closest('tr').querySelector('[data-field="to"]');
    if (toInput) toInput.style.display = inp.checked ? 'none' : '';
    if (inp.checked) rec.to = '';
  } else if (inp.type === 'month') {
    rec[field] = inp.value ? inp.value + '-01' : '';
  } else {
    rec[field] = inp.value.trim();
  }
}

// ── Enter edit mode ──
function startEmpHistEdit() {
  // Check if there's already a pending request
  var hasPending = empHistData.records.some(function(r) { return r.status === 'pending'; });
  if (hasPending) {
    showToast('A pending approval request already exists. Please wait for HR Admin to review.', 'warning');
    return;
  }
  empHistData._editSnapshot = empCloneRecords(empHistData.records);
  empHistData.mode = 'edit';
  // Show/hide buttons
  document.getElementById('empHistEditBtn').style.display  = 'none';
  document.getElementById('empHistSaveBtn').style.display  = 'flex';
  document.getElementById('empHistCancelBtn').style.display = '';
  document.getElementById('empHistAddRowWrap').style.display = '';
  renderEmpHistTable();
  showToast('Edit mode enabled. Make your changes and submit for approval.', 'info');
}

// ── Cancel edit ──
function cancelEmpHistEdit() {
  if (empHistData._editSnapshot) {
    empHistData.records = empHistData._editSnapshot;
  }
  empHistData.mode = 'view';
  document.getElementById('empHistEditBtn').style.display  = '';
  document.getElementById('empHistSaveBtn').style.display  = 'none';
  document.getElementById('empHistCancelBtn').style.display = 'none';
  document.getElementById('empHistAddRowWrap').style.display = 'none';
  renderEmpHistTable();
  showToast('Changes discarded', 'info');
}

// ── Add new row ──
function addEmpHistRow() {
  empHistData.records.push({ id: empHistData.nextId++, company: '', designation: '', department: '', from: '', to: '', ctc: '', isCurrent: false, status: 'approved' });
  renderEmpHistTable();
}

// ── Remove row ──
function removeEmpHistRow(id) {
  if (empHistData.records.length <= 1) return;
  empHistData.records = empHistData.records.filter(function(r) { return r.id !== id; });
  renderEmpHistTable();
}

// ── Validate ──
function validateEmpHistRecords() {
  var valid = true;
  empHistData.records.forEach(function(rec) {
    // Company
    var compErr = document.getElementById('empErr_company_' + rec.id);
    if (!rec.company) { if (compErr) compErr.style.display = ''; valid = false; }
    else { if (compErr) compErr.style.display = 'none'; }
    // Designation
    var desErr = document.getElementById('empErr_designation_' + rec.id);
    if (!rec.designation) { if (desErr) desErr.style.display = ''; valid = false; }
    else { if (desErr) desErr.style.display = 'none'; }
    // From date
    var fromErr = document.getElementById('empErr_from_' + rec.id);
    if (!rec.from) { if (fromErr) fromErr.style.display = ''; valid = false; }
    else { if (fromErr) fromErr.style.display = 'none'; }
    // To date (if not current)
    var toErr = document.getElementById('empErr_to_' + rec.id);
    if (!rec.isCurrent) {
      if (!rec.to || rec.to <= rec.from) { if (toErr) toErr.style.display = ''; valid = false; }
      else { if (toErr) toErr.style.display = 'none'; }
    } else {
      if (toErr) toErr.style.display = 'none';
    }
  });
  return valid;
}

// ── Submit for Approval ──
function submitEmpHistForApproval() {
  if (!validateEmpHistRecords()) {
    showToast('Please fix validation errors before submitting.', 'error');
    return;
  }
  // Mark all edited records as pending
  empHistData.records.forEach(function(r) { r.status = 'pending'; });
  empHistData.pendingSnapshot = { records: empCloneRecords(empHistData.records), requestedAt: new Date() };
  empHistData.mode = 'view';
  // Restore original approved data for display while pending
  var original = empHistData._editSnapshot || [];
  var pendingMap = {};
  empHistData.records.forEach(function(r) { pendingMap[r.id] = r; });
  // Keep pending status but show old values visually — combine:
  // For simplicity, show pending badge and notify HR
  document.getElementById('empHistEditBtn').style.display  = '';
  document.getElementById('empHistSaveBtn').style.display  = 'none';
  document.getElementById('empHistCancelBtn').style.display = 'none';
  document.getElementById('empHistAddRowWrap').style.display = 'none';
  // Show pending banner
  var banner = document.getElementById('empHistPendingBanner');
  if (banner) { banner.style.display = 'flex'; }
  renderEmpHistTable();
  showToast('Update request submitted to HR Admin for approval.', 'success');
  // Simulate HR Admin notification (demo button appears)
  showHRAdminDemoNotice();
}

// ── Demo: Show HR Admin review notice ──
function showHRAdminDemoNotice() {
  var wrap = document.getElementById('empHistHeaderActions');
  if (!wrap) return;
  // Remove existing demo btn
  var existing = document.getElementById('empHistHRReviewBtn');
  if (existing) existing.remove();
  var btn = document.createElement('button');
  btn.id = 'empHistHRReviewBtn';
  btn.className = 'quick-btn';
  btn.style.cssText = 'font-size:11.5px;background:#7C3AED;border-color:#7C3AED;color:#fff;display:flex;align-items:center;gap:5px;';
  btn.title = 'Demo: Open HR Admin Review Panel';
  btn.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> HR Admin Review';
  btn.onclick = openEmpHistAdminModal;
  wrap.appendChild(btn);
}

// ── Open HR Admin modal ──
function openEmpHistAdminModal() {
  if (!empHistData.pendingSnapshot) return;
  var modal = document.getElementById('empHistAdminModal');
  if (!modal) return;
  modal.style.display = 'flex';

  // Date
  var dateEl = document.getElementById('empHistAdminReqDate');
  if (dateEl && empHistData.pendingSnapshot.requestedAt) {
    dateEl.textContent = empHistData.pendingSnapshot.requestedAt.toLocaleString('en-IN', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  }

  // Build diff
  var tbody = document.getElementById('empHistAdminDiffBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  var original  = empHistData._editSnapshot || [];
  var proposed  = empHistData.pendingSnapshot.records;
  var fields    = [
    { key:'company',     label:'Company Name' },
    { key:'designation', label:'Designation' },
    { key:'department',  label:'Department' },
    { key:'from',        label:'From' },
    { key:'to',          label:'To' },
    { key:'ctc',         label:'CTC' }
  ];

  proposed.forEach(function(newRec, idx) {
    var oldRec = original.find(function(r) { return r.id === newRec.id; }) || {};
    fields.forEach(function(f) {
      var oldVal = f.key === 'from' || f.key === 'to' ? empFmtDate(oldRec[f.key]) : (oldRec[f.key] || '—');
      var newVal = f.key === 'from' || f.key === 'to' ? empFmtDate(newRec[f.key]) : (newRec[f.key] || '—');
      var changed = oldVal !== newVal;
      var tr = document.createElement('tr');
      tr.style.background = changed ? 'rgba(251,191,36,0.07)' : '';
      tr.innerHTML =
        '<td style="padding:7px 12px;border:1px solid var(--border);font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">' + (idx + 1) + '</td>' +
        '<td style="padding:7px 12px;border:1px solid var(--border);font-size:12px;font-weight:500;color:var(--text-secondary);">' + f.label + '</td>' +
        '<td style="padding:7px 12px;border:1px solid var(--border);font-size:12px;color:var(--text-primary);">' + oldVal + '</td>' +
        '<td style="padding:7px 12px;border:1px solid var(--border);font-size:12px;color:' + (changed ? 'var(--warning)' : 'var(--text-primary)') + ';font-weight:' + (changed ? '600' : '400') + ';">' +
          (changed ? '<span style="margin-right:4px;">→</span>' : '') + newVal +
        '</td>';
      tbody.appendChild(tr);
    });
  });

  // Reset reject state
  var reasonWrap = document.getElementById('empHistAdminRejectReasonWrap');
  if (reasonWrap) reasonWrap.style.display = 'none';
  var confirmBtn = document.getElementById('empHistAdminConfirmRejectBtn');
  if (confirmBtn) confirmBtn.style.display = 'none';
  var toggleBtn = document.getElementById('empHistAdminRejectToggleBtn');
  if (toggleBtn) toggleBtn.style.display = '';
  var reasonInput = document.getElementById('empHistAdminRejectReason');
  if (reasonInput) reasonInput.value = '';
  var errEl = document.getElementById('empHistAdminRejectErr');
  if (errEl) errEl.style.display = 'none';
}

function closeEmpHistAdminModal() {
  var modal = document.getElementById('empHistAdminModal');
  if (modal) modal.style.display = 'none';
}

function toggleRejectReasonBox() {
  var wrap = document.getElementById('empHistAdminRejectReasonWrap');
  var confirmBtn = document.getElementById('empHistAdminConfirmRejectBtn');
  var toggleBtn  = document.getElementById('empHistAdminRejectToggleBtn');
  if (!wrap) return;
  var isShown = wrap.style.display !== 'none';
  wrap.style.display = isShown ? 'none' : '';
  if (confirmBtn) confirmBtn.style.display = isShown ? 'none' : '';
  if (toggleBtn)  toggleBtn.style.display  = isShown ? '' : 'none';
}

// ── HR Admin: Approve ──
function hrApproveEmpHist() {
  if (!empHistData.pendingSnapshot) return;
  // Apply proposed changes
  empHistData.records = empHistData.pendingSnapshot.records.map(function(r) {
    return Object.assign({}, r, { status: 'approved' });
  });
  empHistData.pendingSnapshot = null;
  empHistData._editSnapshot   = null;
  // Hide banners
  var pendingBanner = document.getElementById('empHistPendingBanner');
  if (pendingBanner) pendingBanner.style.display = 'none';
  // Remove HR admin demo button
  var demoBtn = document.getElementById('empHistHRReviewBtn');
  if (demoBtn) demoBtn.remove();
  closeEmpHistAdminModal();
  renderEmpHistTable();
  showToast('Employment history update approved and applied.', 'success');
}

// ── HR Admin: Reject ──
function hrRejectEmpHist() {
  var reasonEl = document.getElementById('empHistAdminRejectReason');
  var errEl    = document.getElementById('empHistAdminRejectErr');
  var reason   = reasonEl ? reasonEl.value.trim() : '';
  if (!reason) {
    if (errEl) errEl.style.display = '';
    return;
  }
  if (errEl) errEl.style.display = 'none';
  // Revert to snapshot
  if (empHistData._editSnapshot) {
    empHistData.records = empHistData._editSnapshot.map(function(r) {
      return Object.assign({}, r, { status: 'rejected' });
    });
  }
  empHistData.pendingSnapshot = null;
  empHistData._editSnapshot   = null;
  // Hide pending banner, show rejection banner
  var pendingBanner = document.getElementById('empHistPendingBanner');
  if (pendingBanner) pendingBanner.style.display = 'none';
  var rejBanner = document.getElementById('empHistRejectedBanner');
  if (rejBanner) { rejBanner.style.display = 'flex'; }
  var msgEl = document.getElementById('empHistRejectionMsg');
  if (msgEl) msgEl.textContent = 'Reason: "' + reason + '". Existing records remain active.';
  // Remove HR admin demo button
  var demoBtn = document.getElementById('empHistHRReviewBtn');
  if (demoBtn) demoBtn.remove();
  closeEmpHistAdminModal();
  // Reset rejected status back to approved for display (keep old data)
  empHistData.records.forEach(function(r) { r.status = 'approved'; });
  renderEmpHistTable();
  showToast('Employment history update request rejected.', 'error');
}

function dismissRejectionBanner() {
  var banner = document.getElementById('empHistRejectedBanner');
  if (banner) banner.style.display = 'none';
}

// ── Init on DOMContentLoaded ──
document.addEventListener('DOMContentLoaded', function() {
  renderEmpHistTable();
});

// ── Also render when switching to the tab ──
var _origSwitchTab = window.switchTab;
if (typeof _origSwitchTab === 'function') {
  window.switchTab = function(el, tabId) {
    _origSwitchTab(el, tabId);
    if (tabId === 'history-tab') renderEmpHistTable();
  };
}

// ── Change 5: Enable Spouse & Children fields on edit ─
// Patch enablePersonalEdit to also enable spouse/children fields
var _origEnablePersonalEdit = window.enablePersonalEdit;
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var orig = window.enablePersonalEdit;
    if (typeof orig === 'function') {
      window.enablePersonalEdit = function() {
        orig();
        // Also enable spouse & children fields
        var spouseChildIds = [
          'pd_spouseFirstName','pd_spouseLastName','pd_spouseDob','pd_spouseOccupation','pd_spouseMobile','pd_spouseDependent',
          'pd_child1Name','pd_child1Dob','pd_child1Gender',
          'pd_child2Name','pd_child2Dob','pd_child2Gender'
        ];
        spouseChildIds.forEach(function(id) {
          var el = document.getElementById(id);
          if (el) el.disabled = false;
        });
        var addBtn = document.getElementById('addChildBtn');
        if (addBtn) addBtn.disabled = false;
      };
    }
  });
})();

// ── Directory Search & Filter (First Name + Department + Status) ──
function filterDirectory() {
  var searchVal = (document.getElementById('dirSearchInput') ? document.getElementById('dirSearchInput').value : '').toLowerCase().trim();
  var deptVal   = (document.getElementById('dirDeptFilter')  ? document.getElementById('dirDeptFilter').value  : '').toLowerCase().trim();
  var statusVal = (document.getElementById('dirStatusFilter') ? document.getElementById('dirStatusFilter').value : '').toLowerCase().trim();
  var rows = document.querySelectorAll('#dirTableBody tr');
  rows.forEach(function(row) {
    var firstName = (row.getAttribute('data-firstname') || '').toLowerCase();
    var dept      = (row.getAttribute('data-dept')      || '').toLowerCase();
    var status    = (row.getAttribute('data-status')    || '').toLowerCase();
    var nameMatch   = !searchVal || firstName.indexOf(searchVal) === 0;
    var deptMatch   = !deptVal   || dept === deptVal;
    var statusMatch = !statusVal || status === statusVal;
    row.style.display = (nameMatch && deptMatch && statusMatch) ? '' : 'none';
  });
}

// ── CTC Column Toggle (Employment History tab) ──
function getCTCIcon(isVisible) {
  if (isVisible) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"></path>' +
      '<circle cx="12" cy="12" r="3"></circle>' +
      '</svg>';
  }

  return '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>' +
    '<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>' +
    '<path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>' +
    '<line x1="1" y1="1" x2="23" y2="23"></line>' +
    '</svg>';
}

function toggleRowCTC(button) {
  var cell = button.closest('.ctc-cell');
  if (!cell) return;

  var mask = cell.querySelector('.ctc-mask');
  var value = cell.querySelector('.ctc-value');
  var isVisible = cell.getAttribute('data-visible') === 'true';
  var nextVisible = !isVisible;

  cell.setAttribute('data-visible', nextVisible ? 'true' : 'false');

  if (mask) mask.hidden = nextVisible;
  if (value) value.hidden = !nextVisible;

  button.innerHTML = getCTCIcon(nextVisible);
  button.setAttribute('aria-pressed', String(nextVisible));
  button.setAttribute('aria-label', nextVisible ? 'Hide CTC' : 'Show CTC');
  button.setAttribute('title', nextVisible ? 'Hide CTC' : 'Show CTC');
}

function openEditTaskModal(card) {
  _editingTaskCard = card;

  // Read data from card's data attributes
  var taskId    = card.getAttribute('data-task-id') || '';
  var taskName  = card.querySelector('.task-title') ? card.querySelector('.task-title').textContent.trim() : '';
  var dueAttr   = card.getAttribute('data-due') || '';
  var priority  = card.getAttribute('data-task-priority') || 'low';
  var desc      = card.getAttribute('data-task-desc') || '';
  var assignee  = card.getAttribute('data-task-assignee') || 'me';

  // Populate modal fields
  document.getElementById('et_taskId').textContent    = taskId;
  document.getElementById('et_taskName').value        = taskName;
  document.getElementById('et_dueDate').value         = dueAttr;
  document.getElementById('et_description').value     = desc;

  // Priority radios
  var prioInputs = document.querySelectorAll('input[name="et_priority"]');
  prioInputs.forEach(function(r) {
    r.checked = (r.value === priority);
  });

  // Assignee
  var assigneeEl = document.getElementById('et_assignee');
  if (assigneeEl) {
    for (var i = 0; i < assigneeEl.options.length; i++) {
      if (assigneeEl.options[i].value === assignee) { assigneeEl.selectedIndex = i; break; }
    }
  }

  // Clear errors
  ['et_err_taskName','et_err_desc'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  ['et_taskName','et_description'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('input-error');
  });

  document.getElementById('editTaskModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() { document.getElementById('et_taskName').focus(); }, 80);
}

function closeEditTaskModal() {
  document.getElementById('editTaskModal').classList.remove('open');
  document.body.style.overflow = '';
  _editingTaskCard = null;
}

function saveEditTask() {
  var nameEl = document.getElementById('et_taskName');
  var descEl = document.getElementById('et_description');
  var nameErr = document.getElementById('et_err_taskName');
  var descErr = document.getElementById('et_err_desc');
  var valid = true;

  // Validate name
  if (!nameEl.value.trim()) {
    nameErr.style.display = ''; nameEl.classList.add('input-error');
    nameEl.focus(); valid = false;
  } else {
    nameErr.style.display = 'none'; nameEl.classList.remove('input-error');
  }

  // Validate description
  if (!descEl.value.trim()) {
    descErr.style.display = ''; descEl.classList.add('input-error');
    valid = false;
  } else {
    descErr.style.display = 'none'; descEl.classList.remove('input-error');
  }

  if (!valid) return;

  if (_editingTaskCard) {
    // Update task card title
    var titleEl = _editingTaskCard.querySelector('.task-title');
    if (titleEl) titleEl.textContent = nameEl.value.trim();

    // Update data attributes
    _editingTaskCard.setAttribute('data-task-desc', descEl.value.trim());
    _editingTaskCard.setAttribute('data-due', document.getElementById('et_dueDate').value);
    var selPrio = document.querySelector('input[name="et_priority"]:checked');
    if (selPrio) _editingTaskCard.setAttribute('data-task-priority', selPrio.value);
    var assigneeEl = document.getElementById('et_assignee');
    if (assigneeEl) _editingTaskCard.setAttribute('data-task-assignee', assigneeEl.value);

    // Update due date display in task-meta
    var dueEl = _editingTaskCard.querySelector('.task-due');
    var newDue = document.getElementById('et_dueDate').value;
    if (dueEl && newDue) {
      var d = new Date(newDue);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      dueEl.textContent = 'Due: ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }

    // Update priority badge in task-meta
    var prioEl = _editingTaskCard.querySelector('.priority-badge');
    if (prioEl && selPrio) {
      prioEl.className = 'priority-badge ' + selPrio.value;
      prioEl.textContent = selPrio.value.charAt(0).toUpperCase() + selPrio.value.slice(1);
    }
  }

  showToast('Task updated successfully!', 'success');
  closeEditTaskModal();
}

// ===== TASK SEARCH =====
function filterMyTasksBySearch(query) {
  var q = query.trim().toLowerCase();
  var cards = document.querySelectorAll('#my-tasks-content .task-card');
  var visible = 0;
  cards.forEach(function(card) {
    var title = (card.querySelector('.task-title') || {}).textContent || '';
    var id    = (card.getAttribute('data-task-id') || '').toLowerCase();
    var desc  = (card.getAttribute('data-task-desc') || '').toLowerCase();
    var show  = !q || title.toLowerCase().indexOf(q) !== -1 || id.indexOf(q) !== -1 || desc.indexOf(q) !== -1;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  // Reset segment active state when searching
  if (q) {
    document.querySelectorAll('#taskFilterSegment .task-seg-btn').forEach(function(b){ b.classList.remove('active'); });
  } else {
    // Restore default open filter when search is cleared
    segFilterMyTasks('open', document.querySelector('#taskFilterSegment .task-seg-btn[data-value="open"]'));
  }
}

// ===== LEAVE HOLIDAY CALENDAR =====
var lvcalYear  = new Date().getFullYear();
var lvcalMonth = new Date().getMonth();
var lvcalTarget = 'from'; // 'from' or 'to'

function openLeaveCalendar(target) {
  lvcalTarget = target;
  // Position popup near the clicked input
  var inputId = target === 'from' ? 'leaveFromDate' : 'leaveToDate';
  var inp = document.getElementById(inputId);
  var popup = document.getElementById('leaveCalPopup');
  if (!inp || !popup) return;
  var rect = inp.getBoundingClientRect();
  popup.style.top  = (rect.bottom + window.scrollY + 4) + 'px';
  popup.style.left = (rect.left  + window.scrollX) + 'px';
  popup.style.display = 'block';
  // Parse currently set date to init month
  var curVal = inp.value;
  if (curVal && curVal.match(/^\\d{4}-\\d{2}-\\d{2}$/)) {
    var parts = curVal.split('-');
    lvcalYear  = parseInt(parts[0]);
    lvcalMonth = parseInt(parts[1]) - 1;
  } else {
    lvcalYear  = new Date().getFullYear();
    lvcalMonth = new Date().getMonth();
  }
  renderLeaveCalendar();
}

function closeLeaveCalendar() {
  var popup = document.getElementById('leaveCalPopup');
  if (popup) popup.style.display = 'none';
}

function lvcalChangeMonth(dir) {
  lvcalMonth += dir;
  if (lvcalMonth > 11) { lvcalMonth = 0; lvcalYear++; }
  if (lvcalMonth < 0)  { lvcalMonth = 11; lvcalYear--; }
  renderLeaveCalendar();
}

function renderLeaveCalendar() {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var lbl = document.getElementById('lvcalMonthLabel');
  if (lbl) lbl.textContent = months[lvcalMonth] + ' ' + lvcalYear;
  var container = document.getElementById('lvcalDays');
  if (!container) return;
  container.innerHTML = '';
  var firstDay    = new Date(lvcalYear, lvcalMonth, 1).getDay();
  var daysInMonth = new Date(lvcalYear, lvcalMonth + 1, 0).getDate();
  var today       = new Date(); today.setHours(0,0,0,0);
  // Blank slots
  for (var i = 0; i < firstDay; i++) container.appendChild(document.createElement('div'));
  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr   = lvcalYear + '-' + String(lvcalMonth + 1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var dayOfWeek = new Date(lvcalYear, lvcalMonth, d).getDay();
    var isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    var holiday   = (typeof holidays2026 !== 'undefined') ? holidays2026[dateStr] : null;
    var isToday   = (new Date(lvcalYear, lvcalMonth, d).getTime() === today.getTime());
    var cell = document.createElement('div');
    cell.style.cssText = 'border-radius:5px;padding:4px 2px;text-align:center;font-size:11.5px;font-weight:600;min-height:30px;cursor:pointer;transition:all 0.12s;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center;';
    if (isToday) {
      cell.style.background = 'var(--primary)'; cell.style.color = 'white'; cell.style.border = '1px solid var(--primary-hover)';
    } else if (holiday) {
      var isNat = holiday.type === 'national';
      cell.style.background = isNat ? '#DCFCE7' : '#EDE9FE';
      cell.style.border     = isNat ? '1px solid #16A34A' : '1px solid #7C3AED';
      cell.style.color      = isNat ? '#15803D' : '#5B21B6';
      cell.title = holiday.name;
    } else if (isWeekend) {
      cell.style.background = '#F1F5F9'; cell.style.color = '#94A3B8'; cell.style.border = '1px solid #CBD5E1';
    } else {
      cell.style.background = 'var(--surface)'; cell.style.border = '1px solid var(--border)'; cell.style.color = 'var(--text-secondary)';
    }
    cell.innerHTML = '<div>' + d + '</div>';
    if (holiday) cell.innerHTML += '<div style="font-size:7px;line-height:1.1;margin-top:1px;overflow:hidden;max-width:38px;word-break:break-word;">' + holiday.name + '</div>';
    (function(ds, c) {
      c.onclick = function() {
        var inp = document.getElementById(lvcalTarget === 'from' ? 'leaveFromDate' : 'leaveToDate');
        if (inp) { inp.value = ds; checkSandwichLeave(); }
        closeLeaveCalendar();
      };
      c.onmouseover = function() { if (!isToday) this.style.opacity = '0.78'; };
      c.onmouseout  = function() { this.style.opacity = '1'; };
    })(dateStr, cell);
    container.appendChild(cell);
  }
}

// Close calendar on outside click
document.addEventListener('click', function(e) {
  var popup = document.getElementById('leaveCalPopup');
  if (popup && popup.style.display === 'block') {
    var fromInp = document.getElementById('leaveFromDate');
    var toInp   = document.getElementById('leaveToDate');
    if (!popup.contains(e.target) && e.target !== fromInp && e.target !== toInp) {
      closeLeaveCalendar();
    }
  }
});

// =====================================================================
//  REVIEW SECTION FILTER BAR
// =====================================================================

function _getRvRows() {
  return document.querySelectorAll('#reviewUnifiedList [data-rv-status]');
}

function _applyRvFilters() {
  var statusBtn = document.querySelector('#reviewFilterSegment .task-seg-btn.active');
  var status    = statusBtn ? statusBtn.getAttribute('data-rv-value') : 'all';
  var type      = _getDropdownValue('reviewTypeDropdownList') || '';
  var priority  = (document.getElementById('reviewPriorityFilter') || {}).value || '';
  var fromVal   = (document.getElementById('reviewDRFrom') || {}).value || '';
  var toVal     = (document.getElementById('reviewDRTo')   || {}).value || '';
  var fromDate  = fromVal ? new Date(fromVal) : null;
  var toDate    = toVal   ? new Date(toVal)   : null;
  if (toDate) toDate.setHours(23,59,59,999);

  _getRvRows().forEach(function(row) {
    var rs = row.getAttribute('data-rv-status')   || '';
    var rt = row.getAttribute('data-rv-type')     || '';
    var rp = row.getAttribute('data-rv-priority') || '';
    var rd = row.getAttribute('data-rv-due')      || '';
    var show = true;
    if (status !== 'all' && rs !== status)  show = false;
    if (type     && rt !== type)            show = false;
    if (priority && rp !== priority)        show = false;
    if (fromDate || toDate) {
      var d = rd ? new Date(rd) : null;
      if (!d || (fromDate && d < fromDate) || (toDate && d > toDate)) show = false;
    }
    row.style.display = show ? '' : 'none';
  });
}

function segFilterReviews(value, btn) {
  document.querySelectorAll('#reviewFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-rv-value') === value);
  });
  _applyRvFilters();
}
function filterReviewsByType(v)     { _applyRvFilters(); }
function filterReviewsByPriority(v) { _applyRvFilters(); }
function sortReviews(v)             { /* visual only — data is static */ }

function toggleReviewDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('reviewDRPopover');
  var btn = document.getElementById('reviewDRTrigger');
  if (!pop) return;
  var isOpen = pop.style.display !== 'none';
  document.querySelectorAll('[id$="DRPopover"]').forEach(function(p){ p.style.display='none'; });
  if (!isOpen) { pop.style.display='block'; if(btn) btn.setAttribute('aria-expanded','true'); }
  else         {                             if(btn) btn.setAttribute('aria-expanded','false'); }
}
function applyReviewDRFromPopover() {
  var pop = document.getElementById('reviewDRPopover');
  var btn = document.getElementById('reviewDRTrigger');
  if (pop) pop.style.display = 'none';
  if (btn) btn.setAttribute('aria-expanded','false');
  var from = (document.getElementById('reviewDRFrom')||{}).value || '';
  var to   = (document.getElementById('reviewDRTo')  ||{}).value || '';
  var clearB  = document.getElementById('reviewDRClearBtn');
  var trigger = document.getElementById('reviewDRTrigger');
  var label   = document.getElementById('reviewDRBtnLabel');
  if (from || to) {
    if (clearB)  clearB.style.display  = '';
    if (trigger) trigger.classList.add('active');
    if (label)   label.style.display   = 'none';
  }
  _applyRvFilters();
}
function clearReviewDateRange() {
  var ids = ['reviewDRFrom','reviewDRTo'];
  ids.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var pop     = document.getElementById('reviewDRPopover');
  var clearB  = document.getElementById('reviewDRClearBtn');
  var trigger = document.getElementById('reviewDRTrigger');
  var label   = document.getElementById('reviewDRBtnLabel');
  if (pop)     pop.style.display  = 'none';
  if (clearB)  clearB.style.display  = 'none';
  if (trigger) { trigger.classList.remove('active'); trigger.setAttribute('aria-expanded','false'); }
  if (label)   label.style.display   = '';
  _applyRvFilters();
}

// =====================================================================
//  APPROVAL TASKS FILTER BAR
// =====================================================================

function _getApRows() {
  return document.querySelectorAll('#approvalTableBody tr[data-ap-status]');
}

function _applyApFilters() {
  var statusBtn = document.querySelector('#approvalFilterSegment .task-seg-btn.active');
  var status    = statusBtn ? statusBtn.getAttribute('data-ap-value') : 'all';
  var type      = _getDropdownValue('approvalTypeDropdownList') || '';
  var priority  = (document.getElementById('approvalPriorityFilter') || {}).value || '';
  var fromVal   = (document.getElementById('approvalDRFrom') || {}).value || '';
  var toVal     = (document.getElementById('approvalDRTo')   || {}).value || '';
  var fromDate  = fromVal ? new Date(fromVal) : null;
  var toDate    = toVal   ? new Date(toVal)   : null;
  if (toDate) toDate.setHours(23,59,59,999);

  _getApRows().forEach(function(row) {
    var rs = row.getAttribute('data-ap-status')   || '';
    var rt = row.getAttribute('data-ap-type')     || '';
    var rp = row.getAttribute('data-ap-priority') || '';
    var rd = row.getAttribute('data-ap-date')     || '';
    var show = true;
    if (status !== 'all' && rs !== status)  show = false;
    if (type     && rt !== type)            show = false;
    if (priority && rp !== priority)        show = false;
    if (fromDate || toDate) {
      var d = rd ? new Date(rd) : null;
      if (!d || (fromDate && d < fromDate) || (toDate && d > toDate)) show = false;
    }
    row.style.display = show ? '' : 'none';
  });
}

function segFilterApprovals(value, btn) {
  document.querySelectorAll('#approvalFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-ap-value') === value);
  });
  _applyApFilters();
}
function filterApprovalsByType(v)     { _applyApFilters(); }
function filterApprovalsByPriority(v) { _applyApFilters(); }
function sortApprovals(v)             { /* visual only — data is static */ }

function toggleApprovalDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('approvalDRPopover');
  var btn = document.getElementById('approvalDRTrigger');
  if (!pop) return;
  var isOpen = pop.style.display !== 'none';
  document.querySelectorAll('[id$="DRPopover"]').forEach(function(p){ p.style.display='none'; });
  if (!isOpen) { pop.style.display='block'; if(btn) btn.setAttribute('aria-expanded','true'); }
  else         {                             if(btn) btn.setAttribute('aria-expanded','false'); }
}
function applyApprovalDRFromPopover() {
  var pop = document.getElementById('approvalDRPopover');
  var btn = document.getElementById('approvalDRTrigger');
  if (pop) pop.style.display = 'none';
  if (btn) btn.setAttribute('aria-expanded','false');
  var from = (document.getElementById('approvalDRFrom')||{}).value || '';
  var to   = (document.getElementById('approvalDRTo')  ||{}).value || '';
  var clearB  = document.getElementById('approvalDRClearBtn');
  var trigger = document.getElementById('approvalDRTrigger');
  var label   = document.getElementById('approvalDRBtnLabel');
  if (from || to) {
    if (clearB)  clearB.style.display  = '';
    if (trigger) trigger.classList.add('active');
    if (label)   label.style.display   = 'none';
  }
  _applyApFilters();
}
function clearApprovalDateRange() {
  var ids = ['approvalDRFrom','approvalDRTo'];
  ids.forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var pop     = document.getElementById('approvalDRPopover');
  var clearB  = document.getElementById('approvalDRClearBtn');
  var trigger = document.getElementById('approvalDRTrigger');
  var label   = document.getElementById('approvalDRBtnLabel');
  if (pop)     pop.style.display     = 'none';
  if (clearB)  clearB.style.display  = 'none';
  if (trigger) { trigger.classList.remove('active'); trigger.setAttribute('aria-expanded','false'); }
  if (label)   label.style.display   = '';
  _applyApFilters();
}

// Close both new popovers on outside click
document.addEventListener('click', function(e) {
  ['reviewDRPopover','approvalDRPopover'].forEach(function(id) {
    var pop = document.getElementById(id);
    var compactId = id === 'reviewDRPopover' ? 'reviewDRCompact' : 'approvalDRCompact';
    var compact = document.getElementById(compactId);
    if (pop && pop.style.display !== 'none' && compact && !compact.contains(e.target)) {
      pop.style.display = 'none';
      var btn = document.getElementById(id.replace('Popover','Trigger'));
      if (btn) btn.setAttribute('aria-expanded','false');
    }
  });
});

// ── Leave Approval Tab: Status Filter ────────────────────────────
function filterLeaveApprovals(status, btn) {
  document.querySelectorAll('#leaveApprovalFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  var rows = document.querySelectorAll('#leaveApprovalTableBody tr');
  rows.forEach(function(row) {
    var rowStatus = (row.getAttribute('data-la-status') || '').toLowerCase();
    row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
  });
}

// ── Leave Approval Tab: Date Range (popover, matches My Leaves) ───
function toggleLeaveApprovalDRPopover(e) {
  e.stopPropagation();
  var pop = document.getElementById('leaveApprovalDRPopover');
  var btn = document.getElementById('leaveApprovalDRTrigger');
  var isOpen = pop.classList.contains('open');
  document.querySelectorAll('[id$="DRPopover"].open').forEach(function(p) { p.classList.remove('open'); });
  if (!isOpen) {
    pop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    btn.setAttribute('aria-expanded', 'false');
  }
}
function applyLeaveApprovalDRFromPopover() {
  var pop = document.getElementById('leaveApprovalDRPopover');
  var btn = document.getElementById('leaveApprovalDRTrigger');
  pop.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  applyLeaveApprovalDR();
}
function applyLeaveApprovalDR() {
  var from = document.getElementById('leaveApprovalDRFrom').value;
  var to   = document.getElementById('leaveApprovalDRTo').value;
  if (!from && !to) { clearLeaveApprovalDR(); return; }

  var clearB     = document.getElementById('leaveApprovalDRClearBtn');
  var triggerBtn = document.getElementById('leaveApprovalDRTrigger');
  var btnLabel   = document.getElementById('leaveApprovalDRBtnLabel');
  if (clearB)     clearB.style.display = '';
  if (triggerBtn) triggerBtn.classList.add('active');
  if (btnLabel)   btnLabel.style.display = 'none';

  document.querySelectorAll('#leaveApprovalFilterSegment .task-seg-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var fromDate = from ? new Date(from) : null;
  var toDate   = to   ? new Date(to)   : null;
  if (toDate) toDate.setHours(23, 59, 59, 999);

  var rows = document.querySelectorAll('#leaveApprovalTableBody tr');
  rows.forEach(function(row) {
    var dateAttr = row.getAttribute('data-la-date');
    if (!dateAttr) { row.style.display = 'none'; return; }
    var d = new Date(dateAttr);
    var inRange = (!fromDate || d >= fromDate) && (!toDate || d <= toDate);
    row.style.display = inRange ? '' : 'none';
  });
}
function clearLeaveApprovalDR() {
  document.getElementById('leaveApprovalDRFrom').value = '';
  document.getElementById('leaveApprovalDRTo').value   = '';
  var clearB     = document.getElementById('leaveApprovalDRClearBtn');
  var triggerBtn = document.getElementById('leaveApprovalDRTrigger');
  var pop        = document.getElementById('leaveApprovalDRPopover');
  var btnLabel   = document.getElementById('leaveApprovalDRBtnLabel');
  if (clearB)     clearB.style.display = 'none';
  if (triggerBtn) triggerBtn.classList.remove('active');
  if (pop)        pop.classList.remove('open');
  if (btnLabel)   btnLabel.style.display = '';
  var activeBtn = document.querySelector('#leaveApprovalFilterSegment .task-seg-btn.active');
  var status = activeBtn ? activeBtn.getAttribute('data-value') : 'all';
  filterLeaveApprovals(status, activeBtn);
}`;function is(e,t){if(document.querySelector(`script[data-peopleflow-exact-script="${t}"]`))return;const n=document.createElement("script");n.type="text/javascript",n.dataset.peopleflowExactScript=t,n.text=e,document.body.appendChild(n)}function rs(){return k.useEffect(()=>{window.__peopleflowExactScriptsLoaded||(window.__peopleflowExactScriptsLoaded=!0,is(Ic,"script-1"),is(Mc,"script-2"),window.setTimeout(()=>{document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0})),window.dispatchEvent(new Event("load"))},0))},[]),null}const Lc=`<!-- ==================== LOGIN PAGE ==================== -->
<div id="loginScreen" style="min-height:100vh;display:flex;background:radial-gradient(ellipse at 60% 50%, #0F7E85 0%, #095356 35%, #042C2C 65%, #010D0D 100%);align-items:center;justify-content:center;padding:24px;flex-direction:column;gap:16px;">
  <div style="display:flex;align-items:center;gap:9px;margin-bottom:4px;">
    <div style="width:30px;height:30px;background:var(--primary);border-radius:6px;display:flex;align-items:center;justify-content:center;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    </div>
    <span style="font-size:14px;font-weight:600;color:rgba(255,255,255,0.92);letter-spacing:-0.2px;text-shadow:0 1px 4px rgba(0,0,0,0.3);">PeopleFlow HRMS</span>
  </div>
  <div style="background:#ffffff;border-radius:12px;padding:32px 30px;width:100%;max-width:370px;box-shadow:0 8px 40px rgba(0,0,0,0.45),0 0 0 1px rgba(15,126,133,0.2);border:1px solid rgba(255,255,255,0.12);">
    <div style="margin-bottom:24px;">
      <div style="font-size:16px;font-weight:600;color:var(--text-primary);margin-bottom:3px;letter-spacing:-0.3px;">Sign in to your account</div>
      <div style="font-size:11.5px;color:var(--text-secondary);">Enter your credentials to continue</div>
    </div>
    <div style="margin-bottom:13px;">
      <label style="font-size:11.5px;font-weight:500;color:var(--text-secondary);display:block;margin-bottom:4px;">Login ID / Email</label>
      <input id="loginEmail" type="text" placeholder="john.doe@company.com" class="login-input" onfocus="this.style.borderColor='var(--primary)';this.style.background='#fff'" onblur="this.style.borderColor='var(--border)';this.style.background='var(--bg)'">
    </div>
    <div style="margin-bottom:18px;">
      <label style="font-size:11.5px;font-weight:500;color:var(--text-secondary);display:block;margin-bottom:4px;">Password</label>
      <input id="loginPassword" type="password" placeholder="Enter password" class="login-input" onfocus="this.style.borderColor='var(--primary)';this.style.background='#fff'" onblur="this.style.borderColor='var(--border)';this.style.background='var(--bg)'">
    </div>
    <div style="margin-bottom:18px;">
      <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);display:block;margin-bottom:7px;">Login as</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;" id="roleChips">
        <div class="role-chip selected" onclick="selectRole('employee',this)">Employee</div>
        <div class="role-chip" onclick="selectRole('manager',this)">Manager</div>
        <div class="role-chip" onclick="selectRole('hr',this)">HR Admin</div>
        <div class="role-chip" onclick="selectRole('payroll',this)">Payroll Admin</div>
        <div class="role-chip" onclick="selectRole('leadership',this)">Leadership</div>
        <div class="role-chip" onclick="selectRole('itadmin',this)">IT Admin</div>
      </div>
    </div>
    <button onclick="doLogin()" class="login-btn">Sign In</button>
    <div style="text-align:center;margin-top:16px;font-size:10.5px;color:#94A3B8;letter-spacing:0.2px;">
      Select a role above — credentials are auto-filled
    </div>
  </div>
</div>

<!-- ==================== MAIN APP ==================== -->
<div class="app" id="mainApp" style="display:none;">

<!-- ===== SIDEBAR ===== -->
<nav class="sidebar" id="appSidebar">
  <div class="sidebar-logo">
    <div style="width:30px;height:30px;background:linear-gradient(135deg,#14B8A6,#0F766E);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 6px rgba(13,148,136,0.35);">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    </div>
    <div>
      <div class="logo-text">PeopleFlow</div>
      <div class="logo-sub">HRMS Platform</div>
    </div>
  </div>

  <div class="nav-section">
    <div class="nav-section-title">Main</div>
    <div class="nav-item active" onclick="navigate('dashboard',this)" data-page="dashboard">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span><span>Home</span>
    </div>
    <div class="nav-item" onclick="navigate('tasks',this)" data-page="tasks">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><span>To Do</span>
      <span class="nav-badge amber">5</span>
    </div>
  </div>

  <div class="nav-section">
    <div class="nav-section-title">Self Service</div>
    <div class="nav-item" onclick="navigate('attendance',this)" data-page="attendance">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span><span>Attendance Info</span>
    </div>
    <div class="nav-item" onclick="navigate('leave',this)" data-page="leave">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span><span>Leave</span>
    </div>
    <div class="nav-item" onclick="navigate('payroll',this)" data-page="payroll">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span><span>Salary</span>
    </div>
    <div class="nav-item" onclick="navigate('taxdocs',this)" data-page="taxdocs">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span><span>Tax Documents</span>
    </div>
    <div class="nav-item" onclick="navigate('documents',this)" data-page="documents">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span><span>Documents</span>
    </div>
  </div>

  <div class="nav-section">
    <div class="nav-section-title">Organization</div>
    <div class="nav-item" onclick="navigate('people',this)" data-page="people">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span><span>People</span>
    </div>
    <div class="nav-item" onclick="navigate('requests',this)" data-page="requests">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><span>Expense Claim</span>
    </div>
    <div class="nav-item" onclick="navigate('helpdesk',this)" data-page="helpdesk">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span><span>Help Desk</span>
      <span class="nav-badge">2</span>
    </div>
    <div class="nav-item" id="reportsNavItem" onclick="navigate('reports',this)" data-page="reports">
      <span class="nav-icon"><svg class="nav-svg" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></span><span>Reports</span>
    </div>
  </div>

  <!-- Sidebar footer intentionally empty; user name/role moved to header -->
</nav>

<!-- ===== MAIN ===== -->
<div class="main">
  <!-- Header -->
  <header class="header">
    <!-- Unified Greeting Header Component -->
    <div class="header-greeting" id="headerGreeting">
      <div class="header-greeting-main" id="headerGreetingMain">Good morning, John! 👋</div>
      <div class="header-greeting-sub" id="headerGreetingSub">Here's what's happening at work today — Thursday, April 2, 2026</div>
    </div>
    <div class="header-actions">
      <div class="icon-btn" onclick="toggleNotif()" title="Notifications" style="position:relative;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <span class="notif-dot"></span>
      </div>
      <!-- Profile Avatar + Name/Role — single clickable group with dropdown -->
      <div class="header-profile" id="headerProfileWrapper" style="position:relative;">
        <div class="header-user-group"
             onclick="toggleProfileDropdown()"
             tabindex="0"
             role="button"
             title="My Profile"
             aria-haspopup="true"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleProfileDropdown();}">
          <div class="header-avatar" id="headerAvatar">JD</div>
          <div class="header-user-info" id="headerUserInfo">
            <div class="header-user-name" id="headerUserName">John Doe</div>
            <div class="header-user-role" id="headerUserRole">Software Engineer</div>
          </div>
        </div>
        <div class="profile-dropdown" id="profileDropdown">
          <div class="pd-header">
            <div class="pd-avatar" id="pdAvatar">JD</div>
            <div>
              <div class="pd-name" id="pdName">John Doe</div>
              <div class="pd-role" id="pdRole">Software Engineer</div>
              <div class="pd-emp" id="pdEmp">EMP-10042</div>
            </div>
          </div>
          <div class="pd-body">
            <div class="pd-item" onclick="toggleProfileDropdown(true);navigate('profile')">
              <span class="pd-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>View My Profile
            </div>
            <div class="pd-item" onclick="toggleProfileDropdown(true);showToast('Settings coming soon','info')">
              <span class="pd-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg></span>Account Settings
            </div>
            <div class="pd-item" onclick="toggleDarkMode();toggleProfileDropdown(true);" id="darkModeMenuItem">
              <span class="pd-icon">
                <svg id="darkModeIcon-moon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <svg id="darkModeIcon-sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </span>
              <span id="darkModeLabel">Dark Mode</span>
            </div>
            <div class="pd-divider"></div>
            <div class="pd-item" onclick="toggleProfileDropdown(true);showToast('Change password email sent','info')">
              <span class="pd-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>Change Password
            </div>
            <div class="pd-item" onclick="toggleProfileDropdown(true);showToast('Downloading payslip...','info')">
              <span class="pd-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></span>Download Latest Payslip
            </div>
            <div class="pd-divider"></div>
            <div class="pd-item pd-logout" onclick="doLogout()">
              <span class="pd-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></span>Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- ==================== DASHBOARD PAGE ==================== -->
  <div class="page active" id="page-dashboard">
    <!-- Employee Dashboard -->
    <div id="dash-employee">
      <!-- 4 cards in one row: Live Clock · Attendance, Days Present, Pending Tasks, Open Tickets -->
      <div class="leave-type-grid" style="grid-template-columns:1.1fr 1fr 1fr 1fr;margin-bottom:16px;">
        <!-- Live Clock card — matches leave-card height/padding via padding:0;overflow:hidden -->
        <div class="card" style="padding:0;overflow:hidden;align-self:stretch;">
          <div style="background:linear-gradient(135deg,#F0FDFA 0%,#F0F9FF 100%);border-bottom:1px solid var(--primary-border);padding:9px 11px;display:flex;align-items:center;justify-content:space-between;height:50px;box-sizing:border-box;">
            <div style="min-width:0;flex:1;">
              <div style="font-size:8.5px;font-weight:600;color:var(--primary);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;line-height:1;white-space:nowrap;">Live Clock · Attendance</div>
              <div id="liveClock" style="font-family:var(--font);font-size:10.5px;font-weight:500;color:var(--text-primary);letter-spacing:normal;line-height:1;white-space:nowrap;">09:15:32</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0;margin-left:6px;">
              <button id="punchBtn" onclick="handlePunch()" style="background:var(--primary);color:white;border:none;border-radius:6px;font-size:11px;font-family:var(--font);cursor:pointer;font-weight:600;box-shadow:0 2px 8px rgba(13,148,136,0.25);transition:background 0.14s ease;white-space:nowrap;">Punch In</button>
              <div id="punchStatus" style="font-size:9.5px;color:var(--text-tertiary);text-align:right;height:12px;min-height:12px;max-height:12px;line-height:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;"></div>
            </div>
          </div>
          <div style="padding:5px 11px;display:flex;gap:0;align-items:center;">
            <div style="flex:1;min-width:0;overflow:hidden;"><div style="font-size:8.5px;color:var(--text-tertiary);margin-bottom:1px;line-height:1;white-space:nowrap;">SHIFT</div><div style="font-size:10.5px;font-weight:500;color:var(--text-primary);line-height:1;white-space:nowrap;">10:00 – 19:00</div></div>
            <div style="width:1px;background:var(--border-subtle);align-self:stretch;flex-shrink:0;"></div>
            <div style="flex:1;padding-left:8px;min-width:0;overflow:hidden;"><div style="font-size:8.5px;color:var(--text-tertiary);margin-bottom:1px;line-height:1;white-space:nowrap;">ATTENDANCE</div><div style="font-size:10.5px;font-weight:600;color:#10B981;line-height:1;white-space:nowrap;">95.6%</div></div>
          </div>
        </div>
        <!-- Days Present -->
        <div class="leave-card" onclick="navigate('attendance')" style="cursor:pointer;border-left:3px solid #0D9488;">
          <div class="leave-card-icon" style="background:#F0FDFA;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div class="leave-card-body">
            <div class="leave-value" style="color:#0D9488;">22</div>
            <div class="leave-label">Days Present</div>
          </div>
        </div>
        <!-- Pending Tasks -->
        <div class="leave-card" onclick="navigate('tasks')" style="cursor:pointer;border-left:3px solid #F59E0B;">
          <div class="leave-card-icon" style="background:#FFFBEB;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <div class="leave-card-body">
            <div class="leave-value" style="color:#F59E0B;">5</div>
            <div class="leave-label">Pending Tasks</div>
            <span class="leave-card-tag" style="background:#FFFBEB;color:#F59E0B;">2 overdue</span>
          </div>
        </div>
        <!-- Open Tickets -->
        <div class="leave-card" onclick="navigate('helpdesk')" style="cursor:pointer;border-left:3px solid #0EA5E9;">
          <div class="leave-card-icon" style="background:#F0F9FF;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div class="leave-card-body">
            <div class="leave-value" style="color:#0EA5E9;">2</div>
            <div class="leave-label">Open Tickets</div>
            <span class="leave-card-tag" style="background:#F0F9FF;color:#0EA5E9;">1 in progress</span>
          </div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px;">
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);margin-bottom:10px;">Quick Links</div>
          <div onclick="navigate('leave');showToast('Leave form opened','success')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span style="font-size:13px;color:var(--text-primary);">Apply Leave</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('requests');showToast('Request form opened','success')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span style="font-size:13px;color:var(--text-primary);">Expense Claim</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('payroll')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span style="font-size:13px;color:var(--text-primary);">View Payslip</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('helpdesk')" style="display:flex;align-items:center;gap:9px;padding:7px 0;cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span style="font-size:13px;color:var(--text-primary);">Raise Ticket</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <!-- Upcoming Events card -->
        <div class="card">
          <div class="section-header" style="margin-bottom:10px;">
            <div style="font-size:13px;color:var(--text-secondary);font-weight:400;">Upcoming Events</div>
            <button class="view-all-holidays-btn" onclick="navigate('tasks')">
              View All
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:var(--primary-muted);color:var(--primary);padding:5px 8px;border-radius:5px;font-size:10px;font-weight:600;min-width:38px;text-align:center;line-height:1.4;flex-shrink:0;">APR<br>10</div>
              <div style="min-width:0;">
                <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Q1 Performance Review</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Self-assessment submission deadline</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:var(--primary-muted);color:var(--primary);padding:5px 8px;border-radius:5px;font-size:10px;font-weight:600;min-width:38px;text-align:center;line-height:1.4;flex-shrink:0;">APR<br>15</div>
              <div style="min-width:0;">
                <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Town Hall Meeting</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">All-hands virtual session, 3:00 PM</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:var(--primary-muted);color:var(--primary);padding:5px 8px;border-radius:5px;font-size:10px;font-weight:600;min-width:38px;text-align:center;line-height:1.4;flex-shrink:0;">APR<br>22</div>
              <div style="min-width:0;">
                <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Training: Workplace Safety</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Mandatory for all employees</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Upcoming Holidays card -->
        <div class="card">
          <div class="section-header" style="margin-bottom:10px;">
            <div style="font-size:13px;color:var(--text-secondary);font-weight:400;">Upcoming Holidays</div>
            <button
              class="view-all-holidays-btn"
              onclick="navigateToHolidays()"
              title="View all holidays"
              aria-label="View all holidays in Leave panel"
            >
              View All
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:#FFFBEB;color:#D97706;padding:5px 8px;border-radius:5px;font-size:10px;font-weight:600;min-width:38px;text-align:center;line-height:1.4;flex-shrink:0;">APR<br>14</div>
              <div style="min-width:0;">
                <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Dr. Ambedkar Jayanti</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">National public holiday</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:#FFFBEB;color:#D97706;padding:5px 8px;border-radius:5px;font-size:10px;font-weight:600;min-width:38px;text-align:center;line-height:1.4;flex-shrink:0;">APR<br>18</div>
              <div style="min-width:0;">
                <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Good Friday</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">National public holiday</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:#FFFBEB;color:#D97706;padding:5px 8px;border-radius:5px;font-size:10px;font-weight:600;min-width:38px;text-align:center;line-height:1.4;flex-shrink:0;">MAY<br>1</div>
              <div style="min-width:0;">
                <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Labour Day</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">National public holiday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="section-header" style="margin-bottom:10px;"><div style="font-size:13px;color:var(--text-secondary);">Recent Notifications</div><button class="view-all-holidays-btn" onclick="toggleNotif()">View All <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button></div>
          <div style="display:flex;flex-direction:column;gap:0;">
            <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid var(--border-subtle);"><div style="width:6px;height:6px;background:var(--primary);border-radius:50%;margin-top:5px;flex-shrink:0;"></div><div><div style="font-size:13px;color:var(--text-primary);">March Payslip is available for download</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Today, 9:00 AM</div></div></div>
            <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid var(--border-subtle);"><div style="width:6px;height:6px;background:var(--primary);border-radius:50%;margin-top:5px;flex-shrink:0;"></div><div><div style="font-size:13px;color:var(--text-primary);">Leave request approved by Sarah Mitchell</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Yesterday, 4:30 PM</div></div></div>
            <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid var(--border-subtle);"><div style="width:6px;height:6px;border-radius:50%;margin-top:5px;flex-shrink:0;"></div><div><div style="font-size:13px;color:var(--text-primary);">Ticket #TKT-2601 escalated due to SLA breach</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Mar 31, 2026</div></div></div>
            <div style="display:flex;gap:12px;padding:7px 0;"><div style="width:6px;height:6px;background:#7C3AED;border-radius:50%;margin-top:5px;flex-shrink:0;"></div><div><div style="font-size:13px;color:var(--text-primary);">Document Submission Overdue — Aadhaar copy pending</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">1 Doc pending</div></div></div>
          </div>
        </div>
        <!-- Action Centre Card (replaces My Tasks) -->
        <div class="card" style="display:flex;flex-direction:column;gap:0;">
          <!-- Card Header -->
          <div class="section-header" style="margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:6px;">
              <div style="width:6px;height:6px;background:var(--primary);border-radius:50%;"></div>
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Action Centre</div>
            </div>
            <button class="view-all-holidays-btn" onclick="navigate('requests');showToast('Action Centre opened','info')">View All <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
          </div>

          <!-- Row 1: Absent Days Pending Justification -->
          <div onclick="navigate('attendance');showToast('Attendance regularization panel opened','info')" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.background='var(--border-subtle)';this.style.borderRadius='5px';this.style.paddingLeft='4px'" onmouseout="this.style.background='';this.style.borderRadius='';this.style.paddingLeft='0'">
            <div style="width:28px;height:28px;border-radius:6px;background:#FFF5F5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="16" x2="15" y2="16"/></svg>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;">Absent Days — Justification Pending</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">2 days awaiting manager approval</div>
            </div>
            <span style="font-size:11px;font-weight:600;color:#DC2626;background:#FFF5F5;padding:2px 8px;border-radius:4px;white-space:nowrap;">2 Pending</span>
          </div>

          <!-- Row 2: Regularization for Missed Punch -->
          <div onclick="navigate('attendance');showToast('Regularization form opened','info')" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.background='var(--border-subtle)';this.style.borderRadius='5px';this.style.paddingLeft='4px'" onmouseout="this.style.background='';this.style.borderRadius='';this.style.paddingLeft='0'">
            <div style="width:28px;height:28px;border-radius:6px;background:#FFFBEB;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;">Regularize Missed Punch-In/Out</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">Apr 17 — no punch-out recorded</div>
            </div>
            <span style="font-size:11px;font-weight:600;color:#D97706;background:#FFFBEB;padding:2px 8px;border-radius:4px;white-space:nowrap;">1 Open</span>
          </div>

          <!-- Row 3: Leave Balance Expiring Soon -->
          <div onclick="navigate('leave');showToast('Leave balance details opened','info')" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.background='var(--border-subtle)';this.style.borderRadius='5px';this.style.paddingLeft='4px'" onmouseout="this.style.background='';this.style.borderRadius='';this.style.paddingLeft='0'">
            <div style="width:28px;height:28px;border-radius:6px;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;">Leave Balance Lapsing — Q1 Carry</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">3 days lapse on Apr 30 — plan now</div>
            </div>
            <span style="font-size:11px;font-weight:600;color:var(--primary);background:var(--primary-muted);padding:2px 8px;border-radius:4px;white-space:nowrap;">3 Days</span>
          </div>

          <!-- Row 5: Upcoming Mandatory Training -->
          <div onclick="navigate('training');showToast('Training schedule opened','info')" style="display:flex;align-items:center;gap:10px;padding:7px 0;cursor:pointer;transition:var(--ease);" onmouseover="this.style.background='var(--border-subtle)';this.style.borderRadius='5px';this.style.paddingLeft='4px'" onmouseout="this.style.background='';this.style.borderRadius='';this.style.paddingLeft='0'">
            <div style="width:28px;height:28px;border-radius:6px;background:#F0F9FF;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:12.5px;color:var(--text-primary);font-weight:500;">Mandatory Training Due</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">Workplace Safety — Apr 22, not enrolled</div>
            </div>
            <span style="font-size:11px;font-weight:600;color:#0EA5E9;background:#F0F9FF;padding:2px 8px;border-radius:4px;white-space:nowrap;">Enroll</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Manager Dashboard -->
    <div id="dash-manager" style="display:none">
      <div class="stats-grid">
        <div class="stat-card blue"><div class="stat-icon blue"></div><div class="stat-value">18</div><div class="stat-label">Team Size</div><div class="stat-change neutral">Direct reports</div></div>
        <div class="stat-card green"><div class="stat-icon green"></div><div class="stat-value">16</div><div class="stat-label">Present Today</div><div class="stat-change up">↑ 88.9% attendance</div></div>
        <div class="stat-card red"><div class="stat-icon red"></div><div class="stat-value">2</div><div class="stat-label">Absent Member</div><div class="stat-change down">Unplanned absences</div></div>
        <div class="stat-card red"><div class="stat-icon red"></div><div class="stat-value">2</div><div class="stat-label">On Leave Today</div><div class="stat-change neutral">Planned absences</div></div>
      </div>
      <div style="display:grid;grid-template-columns:200px 1fr;gap:12px;align-items:start;">
        <!-- Quick Links -->
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);margin-bottom:10px;">Quick Links</div>
          <div onclick="navigate('tasks');showToast('Approval queue opened','info')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Review Approvals</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('attendance')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Team Attendance</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('people')" style="display:flex;align-items:center;gap:9px;padding:7px 0;cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Team Directory</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <!-- Pending Approvals card -->
        <div class="card">
          <div class="section-header"><div class="card-title">Pending Approvals</div><span class="badge red">3 Pending</span></div>
          <table>
            <thead><tr><th>Employee</th><th>Request Type</th><th>Details</th><th>Date</th><th>Priority</th><th>Actions</th></tr></thead>
            <tbody>
              <tr><td><b>Amit Sharma</b></td><td><span class="badge blue">Leave</span></td><td>Earned Leave — 3 days</td><td>Apr 5–7</td><td><span class="priority-badge high">High</span></td><td><button class="approve-btn approve" onclick="showToast('Leave approved!','success')">Approve</button> <button class="approve-btn reject" onclick="showToast('Leave rejected','error')">Reject</button></td></tr>
              <tr><td><b>Priya Nair</b></td><td><span class="badge purple">Expense</span></td><td>Travel Reimbursement ₹2,400</td><td>Apr 2</td><td><span class="priority-badge medium">Medium</span></td><td><button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button> <button class="approve-btn reject">Reject</button></td></tr>
              <tr><td><b>Rahul Singh</b></td><td><span class="badge green">WFH</span></td><td>Work from Home</td><td>Apr 4</td><td><span class="priority-badge low">Low</span></td><td><button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button> <button class="approve-btn reject">Reject</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Summary Section — Manager -->
      <div style="margin-top:14px;">
        <div style="font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:10px;display:flex;align-items:center;gap:7px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--primary)"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Summary
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <!-- Resignations -->
          <div class="card" style="padding:10px 12px;">
            <div class="section-header" style="margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>
                <div style="font-size:11.5px;font-weight:600;color:var(--text-primary);">Resignations</div>
              </div>
              <span class="badge red">2 Active</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:0;">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border-subtle);">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Arjun Mehta</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Engineering · Last day: Apr 30, 2026</div>
                </div>
                <span class="badge amber">Notice Period</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Sneha Kapoor</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Design · Last day: May 15, 2026</div>
                </div>
                <span class="badge amber">Notice Period</span>
              </div>
            </div>
          </div>
          <!-- Who is on Leave -->
          <div class="card" style="padding:10px 12px;">
            <div class="section-header" style="margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div style="font-size:11.5px;font-weight:600;color:var(--text-primary);">Who is on Leave</div>
              </div>
              <span class="badge green">2 Today</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:0;">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border-subtle);">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Amit Sharma</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Earned Leave · Apr 14–16, 2026</div>
                </div>
                <span class="badge green">Approved</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Meera Patel</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Sick Leave · Apr 14, 2026</div>
                </div>
                <span class="badge green">Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- HR Admin Dashboard -->
    <div id="dash-hr" style="display:none">
      <div class="stats-grid">
        <div class="stat-card blue"><div class="stat-icon blue"></div><div class="stat-value">320</div><div class="stat-label">Total Employees</div><div class="stat-change up">↑ 8 new this month</div></div>
        <div class="stat-card amber"><div class="stat-icon amber"></div><div class="stat-value">6</div><div class="stat-label">Pending Approvals</div><div class="stat-change down">Requires action</div></div>

        <div class="stat-card red"><div class="stat-icon red"></div><div class="stat-value">3</div><div class="stat-label">Compliance Alerts</div><div class="stat-change down">Requires action</div></div>
      </div>
      <div style="display:grid;grid-template-columns:200px 1fr 1fr;gap:12px;">
        <!-- Quick Links -->
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);margin-bottom:10px;">Quick Links</div>
          <div onclick="navigate('people');showToast('Employee form opened','success')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Add Employee</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('people')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Employee List</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="showToast('Payroll report opened','info')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">HR Reports</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('people')" style="display:flex;align-items:center;gap:9px;padding:7px 0;cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Onboarding</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <div class="card">
          <div class="card-title" style="margin-bottom:14px">Employee Statistics</div>
          <div class="chart-bar">
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:65%;background:linear-gradient(180deg,#14B8A6,#5EEAD4);"></div><div class="chart-bar-label">Jan</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:72%;background:linear-gradient(180deg,#14B8A6,#5EEAD4);"></div><div class="chart-bar-label">Feb</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:80%;background:linear-gradient(180deg,#10B981,#34D399);"></div><div class="chart-bar-label">Mar</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:88%;background:linear-gradient(180deg,#3B5BDB,#3B5BDB);"></div><div class="chart-bar-label">Apr</div></div>
          </div>
          <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;">
            <span class="badge blue">Engineering · 85</span>
            <span class="badge purple">Sales · 62</span>
            <span class="badge green">HR · 18</span>
            <span class="badge amber">Finance · 24</span>
          </div>
        </div>
        <div class="card">
          <div class="card-title" style="margin-bottom:14px">Recruitment Status</div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)"><span style="font-size:12.5px;font-weight:600">New Positions</span><span class="badge red">12 Open</span></div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)"><span style="font-size:12.5px;font-weight:600">New Applications</span><span class="badge blue">4 New</span></div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)"><span style="font-size:12.5px;font-weight:600">Attrition Rate</span><span class="badge amber">5.2%</span></div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0"><span style="font-size:12.5px;font-weight:600">Pending Onboarding</span><span class="badge purple">3 Pending</span></div>
        </div>
      </div>

      <!-- Summary Section — HR Admin -->
      <div style="margin-top:14px;">
        <div style="font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:10px;display:flex;align-items:center;gap:7px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--primary)"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Summary
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <!-- Resignations -->
          <div class="card" style="padding:10px 12px;">
            <div class="section-header" style="margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>
                <div style="font-size:11.5px;font-weight:600;color:var(--text-primary);">Resignations</div>
              </div>
              <span class="badge red">2 Active</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:0;">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border-subtle);">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Arjun Mehta</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Engineering · Last day: Apr 30, 2026</div>
                </div>
                <span class="badge amber">Notice Period</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Sneha Kapoor</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Design · Last day: May 15, 2026</div>
                </div>
                <span class="badge amber">Notice Period</span>
              </div>
            </div>
          </div>
          <!-- Who is on Leave -->
          <div class="card" style="padding:10px 12px;">
            <div class="section-header" style="margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div style="font-size:11.5px;font-weight:600;color:var(--text-primary);">Who is on Leave</div>
              </div>
              <span class="badge green">2 Today</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:0;">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border-subtle);">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Amit Sharma</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Earned Leave · Apr 14–16, 2026</div>
                </div>
                <span class="badge green">Approved</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;">
                <div>
                  <div style="font-size:11.5px;font-weight:500;color:var(--text-primary);">Meera Patel</div>
                  <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:1px;">Sick Leave · Apr 14, 2026</div>
                </div>
                <span class="badge green">Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payroll Admin Dashboard -->
    <div id="dash-payroll" style="display:none">
      <div class="stats-grid">
        <div class="stat-card indigo"><div class="stat-icon indigo"></div><div class="stat-value">₹43L</div><div class="stat-label">Monthly Payroll Cost</div><div class="stat-change up">↑ 2.3% vs last month</div></div>
        <div class="stat-card green"><div class="stat-icon green"></div><div class="stat-value">312</div><div class="stat-label">Payslips Generated</div><div class="stat-change neutral">8 pending</div></div>
        <div class="stat-card amber"><div class="stat-icon amber"></div><div class="stat-value">In Review</div><div class="stat-label">Payroll Status</div><div class="stat-change neutral">Awaiting approval</div></div>
        <div class="stat-card red"><div class="stat-icon red"></div><div class="stat-value">2</div><div class="stat-label">Errors Detected</div><div class="stat-change down">Resolve before finalize</div></div>
      </div>
      <div style="display:grid;grid-template-columns:200px 1fr;gap:12px;align-items:start;">
        <!-- Quick Links -->
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);margin-bottom:10px;">Quick Links</div>
          <div onclick="showToast('Payroll run initiated','success')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Run Payroll</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Lock Attendance</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="showToast('Bank file generated','success')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Generate Bank File</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="navigate('reports')" style="display:flex;align-items:center;gap:9px;padding:7px 0;cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Payroll Reports</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <!-- Payroll workflow card -->
        <div class="card">
          <div class="section-header"><div class="card-title">Payroll Run — April 2026</div><span class="badge amber">In Progress</span></div>
          <div class="workflow-steps">
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Attendance Lock</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Data Validation</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle active">3</div><div class="wf-label">Calculation</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">4</div><div class="wf-label">HR Review</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">5</div><div class="wf-label">Finalize</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">6</div><div class="wf-label">Bank Transfer</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leadership Dashboard -->
    <div id="dash-leadership" style="display:none">
      <div class="stats-grid">
        <div class="stat-card blue"><div class="stat-icon blue"></div><div class="metric-big">1,250</div><div class="metric-label">Total Workforce</div><div class="metric-change" style="color:var(--primary)">↑ 4.2% YoY growth</div></div>
        <div class="stat-card indigo"><div class="stat-icon indigo"></div><div class="metric-big">₹4.3Cr</div><div class="metric-label">Monthly Payroll</div><div class="metric-change" style="color:var(--text-muted)">↑ 2.1% vs last month</div></div>
        <div class="stat-card red"><div class="stat-icon red"></div><div class="metric-big">8.1%</div><div class="metric-label">Attrition Rate</div><div class="metric-change" style="color:var(--danger)">↑ 1.2% this quarter</div></div>
        <div class="stat-card green"><div class="stat-icon green"></div><div class="metric-big">15%</div><div class="metric-label">Revenue Growth</div><div class="metric-change" style="color:var(--primary)">↑ Strong performance</div></div>
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="card-title" style="margin-bottom:16px">Headcount Trend</div>
          <div class="chart-bar">
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:50%;background:linear-gradient(180deg,#14B8A6,#5EEAD4);"></div><div class="chart-bar-label">Q1'25</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:62%;background:linear-gradient(180deg,#14B8A6,#5EEAD4);"></div><div class="chart-bar-label">Q2'25</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:74%;background:linear-gradient(180deg,#3B5BDB,#3B5BDB);"></div><div class="chart-bar-label">Q3'25</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:85%;background:linear-gradient(180deg,#3B5BDB,#3B5BDB);"></div><div class="chart-bar-label">Q4'25</div></div>
            <div class="chart-bar-item"><div class="chart-bar-fill" style="height:92%;background:linear-gradient(180deg,#10B981,#34D399);"></div><div class="chart-bar-label">Q1'26</div></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title" style="margin-bottom:16px">Payroll Cost by Dept</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>Engineering</span><b>₹1.8Cr</b></div><div class="progress-bar"><div class="progress-fill" style="width:85%;background:var(--primary)"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>Sales & Marketing</span><b>₹92L</b></div><div class="progress-bar"><div class="progress-fill" style="width:62%;background:var(--primary)"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>Operations</span><b>₹74L</b></div><div class="progress-bar"><div class="progress-fill" style="width:48%;background:#D97706"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>Finance & HR</span><b>₹38L</b></div><div class="progress-bar"><div class="progress-fill" style="width:30%;background:var(--purple)"></div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- IT Admin Dashboard -->
    <div id="dash-itadmin" style="display:none">
      <div class="stats-grid">
        <div class="stat-card red"><div class="stat-icon red"></div><div class="stat-value">5</div><div class="stat-label">Open IT Tickets</div><div class="stat-change down">2 critical</div></div>
        <div class="stat-card amber"><div class="stat-icon amber"></div><div class="stat-value">3</div><div class="stat-label">Pending Approvals</div><div class="stat-change down">Awaiting IT sign-off</div></div>
        <div class="stat-card green"><div class="stat-icon green"></div><div class="stat-value">12</div><div class="stat-label">Resolved Today</div><div class="stat-change up">↑ 94% SLA met</div></div>
        <div class="stat-card indigo"><div class="stat-icon indigo"></div><div class="stat-value">320</div><div class="stat-label">Active Users</div><div class="stat-change neutral">3 access requests</div></div>
      </div>
      <div style="display:grid;grid-template-columns:200px 1fr;gap:12px;align-items:start;">
        <!-- Quick Links -->
        <div class="card" style="padding:14px 16px;">
          <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);margin-bottom:10px;">Quick Links</div>
          <div onclick="navigate('helpdesk');showToast('Helpdesk queue opened','info')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">Review Tickets</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="showToast('User management opened','info')" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">User Access</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div onclick="showToast('System report generated','success')" style="display:flex;align-items:center;gap:9px;padding:7px 0;cursor:pointer;transition:var(--ease);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color=''">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;color:var(--primary)"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span style="font-size:12.5px;color:var(--text-primary);">System Reports</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto;color:var(--text-tertiary)"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <!-- Helpdesk Queue card -->
        <div class="card">
          <div class="section-header"><div class="card-title">Helpdesk Queue — Requires IT Approval</div><div style="display:flex;gap:8px;"><span class="badge red">2 Open</span><span class="badge amber">3 In Progress</span></div></div>
          <table>
            <thead><tr><th>Ticket #</th><th>Raised By</th><th>Category</th><th>Subject</th><th>Priority</th><th>SLA</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2605</span></td><td>Meera Patel</td><td>IT Support</td><td>VPN access issue</td><td><span class="priority-badge high">High</span></td><td style="color:#D97706">6h left</td><td><span class="badge amber">Open</span></td><td><button class="btn-sm success" onclick="showToast('Ticket approved & assigned!','success')">Approve</button></td></tr>
              <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2604</span></td><td>John Doe</td><td>IT Support</td><td>Keyboard not working</td><td><span class="priority-badge medium">Medium</span></td><td style="color:#D97706">4h left</td><td><span class="badge amber">In Progress</span></td><td><button class="btn-sm" onclick="showToast('Ticket closed','success')">Close</button></td></tr>
              <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2601</span></td><td>John Doe</td><td>Payroll</td><td>Payslip not available</td><td><span class="priority-badge high">High</span></td><td style="color:var(--danger)">Breached</td><td><span class="badge red">Escalated</span></td><td><button class="btn-sm" onclick="showToast('Escalation handled','info')">Resolve</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== TASKS PAGE ==================== -->
  <div class="page" id="page-tasks">
    <div class="tabs" style="display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;">
        <div class="tab active" onclick="switchTab(this,'my-tasks-content')">My Tasks (5)</div>
        <div class="tab" id="approvalTasksTab" onclick="switchTab(this,'approval-tasks-content')">Approval Tasks (3)</div>
        <div class="tab" id="hrChecklistTab" style="display:none;" onclick="switchTab(this,'hr-tasks-content')">HR Checklist</div>
        <div class="tab" id="reviewSectionTab" onclick="switchTab(this,'review-section-content')">Review Section</div>
      </div>
      <div id="newTaskTab" style="padding-right:4px;">
        <button class="btn-sm primary" onclick="document.querySelectorAll('#page-tasks .tabs .tab').forEach(function(t){t.classList.remove('active');});switchTab(null,'new-task-content');" style="font-size:12px;padding:5px 14px;display:flex;align-items:center;gap:5px;">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Task
        </button>
      </div>
    </div>
    <div id="my-tasks-content">
      <div id="taskFilterWrap">
        <div class="task-filter-left">
          <!-- SHOW label + status pills -->
          <span class="task-filter-label">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Show
          </span>
          <div id="taskFilterSegment" role="group" aria-label="Task status filter">
            <button class="task-seg-btn" data-value="all" onclick="segFilterMyTasks('all',this)">
              All <span class="task-seg-count" id="segCount_all">5</span>
            </button>
            <button class="task-seg-btn active" data-value="open" onclick="segFilterMyTasks('open',this)">
              Open <span class="task-seg-count" id="segCount_open">3</span>
            </button>
            <button class="task-seg-btn" data-value="closed" onclick="segFilterMyTasks('closed',this)">
              Closed <span class="task-seg-count" id="segCount_closed">2</span>
            </button>
          </div>
          <!-- Hidden select for backward compat -->
          <select id="taskFilterSelect" onchange="filterMyTasks(this.value)" style="display:none;">
            <option value="all">All (5)</option>
            <option value="open" selected>Open (3)</option>
            <option value="closed">Closed (2)</option>
          </select>

          <div class="tf-divider"></div>

          <!-- All Tasks — searchable dropdown -->
          <div class="tf-search-select" id="taskDropdownWrap">
            <button type="button" class="tf-search-trigger" id="taskDropdownTrigger"
              onclick="toggleTaskDropdown()" aria-haspopup="listbox" aria-expanded="false" aria-controls="taskDropdownMenu">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span class="tf-search-label" id="taskDropdownLabel">All Tasks</span>
              <svg class="tf-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="tf-search-dropdown" id="taskDropdownMenu" role="listbox" aria-label="Select task">
              <div class="tf-search-input-wrap">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" class="tf-search-inner" id="taskDropdownSearch"
                  placeholder="Search tasks…" autocomplete="off"
                  oninput="filterTaskDropdownOptions(this.value)"
                  onkeydown="taskDropdownKeydown(event)">
              </div>
              <div class="tf-search-list" id="taskDropdownList">
                <div class="tf-search-opt selected" data-value="" role="option" onclick="selectTaskDropdownOpt(this)">All Tasks</div>
                <div class="tf-search-opt" data-value="TASK-001" role="option" onclick="selectTaskDropdownOpt(this)">TASK-001 · Annual Self-Review</div>
                <div class="tf-search-opt" data-value="TASK-002" role="option" onclick="selectTaskDropdownOpt(this)">TASK-002 · Travel Expense</div>
                <div class="tf-search-opt" data-value="TASK-003" role="option" onclick="selectTaskDropdownOpt(this)">TASK-003 · Emergency Contact</div>
                <div class="tf-search-opt" data-value="TASK-004" role="option" onclick="selectTaskDropdownOpt(this)">TASK-004 · Upload PAN Card</div>
                <div class="tf-search-opt" data-value="TASK-005" role="option" onclick="selectTaskDropdownOpt(this)">TASK-005 · Acknowledge Policy</div>
                <div class="tf-search-empty" id="taskDropdownEmpty" style="display:none;">No tasks found</div>
              </div>
            </div>
          </div>

          <div class="tf-divider"></div>

          <!-- All Priorities dropdown -->
          <select id="taskPriorityFilter" class="tf-select" onchange="applyTaskPriorityFilter(this.value)" title="Filter by priority" aria-label="Filter by priority">
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <div class="tf-divider"></div>

          <!-- Sort -->
          <select id="taskSortSelect" class="tf-select" onchange="applyTaskSort(this.value)" title="Sort tasks" aria-label="Sort tasks">
            <option value="recent" selected>Recently Created</option>
            <option value="due_asc">Due Date ↑</option>
            <option value="due_desc">Due Date ↓</option>
            <option value="priority_high">Priority: High First</option>
            <option value="priority_low">Priority: Low First</option>
          </select>

          <div class="tf-divider"></div>

          <!-- Date Range — compact icon trigger with popover -->
          <div class="tf-dr-compact" id="taskDRCompact">
            <button class="tf-dr-icon-btn" id="taskDRTrigger" onclick="toggleTaskDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="taskDRPopover">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span id="taskDRBtnLabel">Date Range</span>
              <span id="taskDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
            </button>
            <!-- Clear button — only visible when a date filter is active -->
            <button class="tf-dr-clear-icon" id="taskDRClearBtn" onclick="clearTaskDateRange()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <!-- Popover -->
            <div id="taskDRPopover" role="dialog" aria-label="Date range filter">
              <div class="tf-pop-title">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Filter by Date Range
              </div>
              <div class="tf-pop-row">
                <label class="tf-pop-label" for="taskDRFrom">From Date</label>
                <input type="date" id="taskDRFrom" class="tf-pop-input" aria-label="From date">
              </div>
              <div class="tf-pop-row">
                <label class="tf-pop-label" for="taskDRTo">To Date</label>
                <input type="date" id="taskDRTo" class="tf-pop-input" aria-label="To date">
              </div>
              <div class="tf-pop-actions">
                <button class="tf-pop-apply" onclick="applyTaskDateRangeFromPopover()">Apply</button>
                <button class="tf-pop-reset" onclick="clearTaskDateRange()">Reset</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Legacy hidden date input -->
        <input type="date" id="taskDateFilter" title="Filter by due date" onchange="filterMyTasksByDate(this.value)" style="display:none;">
      </div>
      <div class="task-card" data-status="open" data-due="2026-04-07" data-task-id="TASK-001" data-task-priority="high" data-task-assignee="me" data-task-desc="Complete the annual self-assessment form before the deadline. Submit via HR portal.">
        <div class="task-id-row">
          <span class="task-id-chip">TASK-001</span>
          <button class="task-edit-btn" onclick="openEditTaskModal(this.closest('.task-card'))">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit
          </button>
        </div>
        <div class="task-title">Complete Annual Performance Self-Review</div>
        <div class="task-meta"><div class="task-due">Due: Apr 7, 2026</div><div class="priority-badge high">High</div><span class="badge red">Pending</span></div>
      </div>
      <div class="task-card" data-status="open" data-due="2026-04-05" data-task-id="TASK-002" data-task-priority="medium" data-task-assignee="me" data-task-desc="Submit the March travel expense reimbursement form with receipts attached.">
        <div class="task-id-row">
          <span class="task-id-chip">TASK-002</span>
          <button class="task-edit-btn" onclick="openEditTaskModal(this.closest('.task-card'))">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit
          </button>
        </div>
        <div class="task-title">Submit Travel Expense Reimbursement (March)</div>
        <div class="task-meta"><div class="task-due">Due: Apr 5, 2026</div><div class="priority-badge medium">Medium</div><span class="badge amber">Pending</span></div>
      </div>
      <div class="task-card" data-status="open" data-due="2026-04-10" data-task-id="TASK-003" data-task-priority="low" data-task-assignee="me" data-task-desc="Update the emergency contact information in the HR portal.">
        <div class="task-id-row">
          <span class="task-id-chip">TASK-003</span>
          <button class="task-edit-btn" onclick="openEditTaskModal(this.closest('.task-card'))">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit
          </button>
        </div>
        <div class="task-title">Update Emergency Contact Information</div>
        <div class="task-meta"><div class="task-due">Due: Apr 10, 2026</div><div class="priority-badge low">Low</div><span class="badge amber">Pending</span></div>
      </div>
      <div class="task-card" data-status="closed" data-due="" data-task-id="TASK-004" data-task-priority="low" data-task-assignee="me" data-task-desc="Upload PAN card document to the employee document portal." data-completed="2026-04-02" style="opacity:0.7">
        <div class="task-id-row">
          <span class="task-id-chip">TASK-004</span>
          <button class="task-edit-btn" onclick="openEditTaskModal(this.closest('.task-card'))">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit
          </button>
        </div>
        <div class="task-title" style="text-decoration:line-through">Upload PAN Card Document</div>
        <div class="task-meta"><span class="badge green">Completed</span><div class="task-due" style="color:var(--success);font-size:10.5px;">✓ Completed: Apr 2, 2026</div></div>
      </div>
      <div class="task-card" data-status="closed" data-due="" data-task-id="TASK-005" data-task-priority="low" data-task-assignee="me" data-task-desc="Read and acknowledge the updated company policy document." data-completed="2026-04-03" style="opacity:0.7">
        <div class="task-id-row">
          <span class="task-id-chip">TASK-005</span>
          <button class="task-edit-btn" onclick="openEditTaskModal(this.closest('.task-card'))">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit
          </button>
        </div>
        <div class="task-title" style="text-decoration:line-through">Acknowledge Policy Update</div>
        <div class="task-meta"><span class="badge green">Completed</span><div class="task-due" style="color:var(--success);font-size:10.5px;">✓ Completed: Apr 3, 2026</div></div>
      </div>
    </div>
    <!-- ==================== NEW TASK PANEL ==================== -->
    <div id="new-task-content" style="display:none">
      <div class="card" style="max-width:720px;">
        <div style="margin-bottom:18px;">
          <div style="font-size:13.5px;font-weight:600;color:var(--text-primary);margin-bottom:3px;">Create New Task</div>
          <div style="font-size:11.5px;color:var(--text-secondary);">Fill in the details below. Fields marked <span style="color:var(--danger);font-weight:600;">*</span> are required.</div>
        </div>

        <!-- Task Name -->
        <div class="form-group" style="margin-bottom:13px;">
          <div class="form-label">Task Name <span style="color:var(--danger)">*</span></div>
          <input type="text" id="nt_taskName" class="form-input" placeholder="Enter task name" maxlength="200">
          <span class="field-error" id="nt_err_taskName" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">Task name is required.</span>
        </div>

        <!-- Assignee + CC row -->
        <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin-bottom:13px;">
          <div class="form-group">
            <div class="form-label">Assignee</div>
            <select id="nt_assignee" class="form-input">
              <option value="me" selected>Me (John Doe)</option>
              <option value="amit">Amit Sharma</option>
              <option value="priya">Priya Nair</option>
              <option value="rahul">Rahul Singh</option>
              <option value="meera">Meera Patel</option>
            </select>
          </div>
          <div class="form-group">
            <div class="form-label">
              CC
              <span style="font-size:10px;font-weight:400;color:var(--text-tertiary);margin-left:4px;">(Manager/HR → triggers approval on completion)</span>
            </div>
            <div id="nt_cc_wrap" style="border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);min-height:34px;padding:3px 8px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;cursor:text;transition:var(--ease);" onclick="document.getElementById('nt_cc_input').focus()">
              <div id="nt_cc_tags" style="display:contents;"></div>
              <input type="text" id="nt_cc_input" list="nt_cc_options" placeholder="Add user…" style="border:none;outline:none;background:transparent;font-size:12.5px;font-family:var(--font);color:var(--text-primary);min-width:90px;flex:1;padding:3px 0;" onkeydown="ntCCKeydown(event)" oninput="ntCCInput(event)">
              <datalist id="nt_cc_options">
                <option value="Amit Sharma (Manager)">
                <option value="Priya Nair (HR)">
                <option value="Rahul Singh">
                <option value="Meera Patel">
                <option value="Sunita HR Admin (HR)">
              </datalist>
            </div>
            <div style="font-size:10.5px;color:var(--text-tertiary);margin-top:3px;">Press <kbd style="font-family:var(--mono);background:var(--border-subtle);border:1px solid var(--border);border-radius:3px;padding:0 3px;font-size:9.5px;">Enter</kbd> or <kbd style="font-family:var(--mono);background:var(--border-subtle);border:1px solid var(--border);border-radius:3px;padding:0 3px;font-size:9.5px;">,</kbd> to add</div>
          </div>
        </div>

        <!-- Priority + Due Date row -->
        <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin-bottom:13px;">
          <div class="form-group">
            <div class="form-label">Priority</div>
            <div style="display:flex;align-items:center;gap:14px;margin-top:6px;">
              <label id="nt_prio_low_lbl" class="nt-prio-label" style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;font-weight:500;color:var(--success);transition:var(--ease);">
                <input type="radio" name="nt_priority" value="low" checked onchange="ntPrioChange()" style="accent-color:var(--success);width:13px;height:13px;cursor:pointer;margin:0;"> Low
              </label>
              <label id="nt_prio_med_lbl" class="nt-prio-label" style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;font-weight:500;color:var(--text-secondary);transition:var(--ease);">
                <input type="radio" name="nt_priority" value="medium" onchange="ntPrioChange()" style="accent-color:var(--warning);width:13px;height:13px;cursor:pointer;margin:0;"> Medium
              </label>
              <label id="nt_prio_high_lbl" class="nt-prio-label" style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;font-weight:500;color:var(--text-secondary);transition:var(--ease);">
                <input type="radio" name="nt_priority" value="high" onchange="ntPrioChange()" style="accent-color:var(--danger);width:13px;height:13px;cursor:pointer;margin:0;"> High
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label">Due Date</div>
            <input type="date" id="nt_dueDate" class="form-input" style="cursor:pointer;">
          </div>
        </div>

        <!-- Description -->
        <div class="form-group" style="margin-bottom:13px;">
          <div class="form-label" style="display:flex;justify-content:space-between;align-items:center;">
            <span>Description <span style="color:var(--danger)">*</span></span>
            <span id="nt_desc_count" style="font-size:10.5px;font-weight:400;color:var(--text-tertiary);">0 / 1000 words</span>
          </div>
          <textarea id="nt_description" class="form-input" rows="3" placeholder="Describe the task in detail…" style="resize:vertical;min-height:60px;" oninput="ntDescCount()"></textarea>
          <span class="field-error" id="nt_err_desc" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">Description is required.</span>
          <span id="nt_err_desc_limit" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">Description exceeds 1000 word limit.</span>
        </div>

        <!-- Attachment -->
        <div class="form-group" style="margin-bottom:14px;">
          <div class="form-label">Attachment <span style="font-size:10px;font-weight:400;color:var(--text-tertiary);">(Optional)</span></div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <button type="button" onclick="document.getElementById('nt_file_input').click()" style="display:inline-flex;align-items:center;gap:5px;padding:5px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);font-size:12px;font-weight:500;color:var(--text-secondary);cursor:pointer;font-family:var(--font);transition:var(--ease);" onmouseover="this.style.borderColor='var(--primary)';this.style.color='var(--primary)';this.style.background='var(--primary-muted)';" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-secondary)';this.style.background='var(--bg)';">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              Attach file
            </button>
            <div id="nt_file_info" style="display:none;align-items:center;gap:6px;padding:4px 9px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
              <span id="nt_file_name" style="font-size:11.5px;color:var(--text-primary);max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"></span>
              <span id="nt_file_size" style="font-size:11px;color:var(--text-tertiary);white-space:nowrap;"></span>
              <button onclick="ntClearFile()" style="background:none;border:none;cursor:pointer;padding:1px;display:flex;align-items:center;color:var(--text-tertiary);" title="Remove">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>
          <input type="file" id="nt_file_input" style="display:none;" onchange="ntFileSelected(event)">
        </div>

        <!-- CC approval notice (shown dynamically) -->
        <div id="nt_approval_notice" style="display:none;margin-bottom:14px;padding:9px 12px;background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius-sm);display:none;align-items:center;gap:8px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span style="font-size:11.5px;color:var(--warning);">This task will be <strong>routed for approval</strong> upon completion because a Manager/HR is in the CC list.</span>
        </div>

        <!-- Action buttons -->
        <div style="display:flex;gap:8px;justify-content:flex-start;padding-top:4px;border-top:1px solid var(--border-subtle);">
          <button class="quick-btn primary" onclick="ntSave()" style="padding:7px 18px;font-size:12.5px;">Save Task</button>
          <button class="quick-btn outline" onclick="ntCancel()" style="padding:7px 18px;font-size:12.5px;">Cancel</button>
        </div>
      </div>
    </div>
    <!-- ==================== /NEW TASK PANEL ==================== -->

    <!-- ==================== REVIEW SECTION PANEL ==================== -->
    <div id="review-section-content" style="display:none">

      <!-- Filter Bar — identical layout/classes to My Tasks filter bar -->
      <div id="reviewFilterWrap" style="display:flex;align-items:center;gap:0;margin-bottom:14px;flex-wrap:nowrap;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:5px 10px;box-shadow:var(--shadow-xs);overflow:visible;position:relative;z-index:20;">
        <div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;flex:1;min-width:0;">

          <!-- SHOW label -->
          <span style="display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;white-space:nowrap;flex-shrink:0;margin-right:8px;">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Show
          </span>

          <!-- Status segmented control -->
          <div id="reviewFilterSegment" role="group" aria-label="Review status filter" style="display:inline-flex;align-items:center;background:var(--border-subtle);border:1px solid var(--border);border-radius:20px;padding:3px;gap:2px;box-shadow:var(--shadow-xs);flex-shrink:0;">
            <button class="task-seg-btn active" data-rv-value="all" onclick="segFilterReviews('all',this)">
              All <span class="task-seg-count" id="rvCount_all">5</span>
            </button>
            <button class="task-seg-btn" data-rv-value="pending" onclick="segFilterReviews('pending',this)">
              Pending <span class="task-seg-count" id="rvCount_pending">3</span>
            </button>
            <button class="task-seg-btn" data-rv-value="completed" onclick="segFilterReviews('completed',this)">
              Completed <span class="task-seg-count" id="rvCount_completed">2</span>
            </button>
          </div>

          <div class="tf-divider"></div>

          <!-- All Reviews — searchable dropdown -->
          <div class="tf-search-select" id="reviewTypeDropdownWrap">
            <button type="button" class="tf-search-trigger" id="reviewTypeDropdownTrigger"
              onclick="toggleReviewTypeDropdown()" aria-haspopup="listbox" aria-expanded="false" aria-controls="reviewTypeDropdownMenu">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span class="tf-search-label" id="reviewTypeDropdownLabel">All Reviews</span>
              <svg class="tf-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="tf-search-dropdown" id="reviewTypeDropdownMenu" role="listbox" aria-label="Select review type">
              <div class="tf-search-input-wrap">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" class="tf-search-inner" id="reviewTypeDropdownSearch"
                  placeholder="Search reviews…" autocomplete="off"
                  oninput="filterReviewTypeDropdownOptions(this.value)"
                  onkeydown="reviewTypeDropdownKeydown(event)">
              </div>
              <div class="tf-search-list" id="reviewTypeDropdownList">
                <div class="tf-search-opt selected" data-value="" role="option" onclick="selectReviewTypeDropdownOpt(this)">All Reviews</div>
                <div class="tf-search-opt" data-value="performance" role="option" onclick="selectReviewTypeDropdownOpt(this)">Performance Review</div>
                <div class="tf-search-opt" data-value="probation" role="option" onclick="selectReviewTypeDropdownOpt(this)">Probation Review</div>
                <div class="tf-search-opt" data-value="checkin" role="option" onclick="selectReviewTypeDropdownOpt(this)">Mid-Year Check-In</div>
                <div class="tf-search-empty" id="reviewTypeDropdownEmpty" style="display:none;">No results found</div>
              </div>
            </div>
          </div>

          <div class="tf-divider"></div>

          <!-- Priority select -->
          <select id="reviewPriorityFilter" class="tf-select" onchange="filterReviewsByPriority(this.value)" title="Filter by priority" aria-label="Filter by priority">
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <div class="tf-divider"></div>

          <!-- Sort select -->
          <select id="reviewSortSelect" class="tf-select" onchange="sortReviews(this.value)" title="Sort reviews" aria-label="Sort reviews">
            <option value="due_asc" selected>Due Date ↑</option>
            <option value="due_desc">Due Date ↓</option>
            <option value="name_asc">Name A–Z</option>
            <option value="priority_high">Priority: High First</option>
          </select>

          <div class="tf-divider"></div>

          <!-- Date Range -->
          <div class="tf-dr-compact" id="reviewDRCompact">
            <button class="tf-dr-icon-btn" id="reviewDRTrigger" onclick="toggleReviewDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="reviewDRPopover">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span id="reviewDRBtnLabel">Date Range</span>
              <span id="reviewDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
            </button>
            <button class="tf-dr-clear-icon" id="reviewDRClearBtn" onclick="clearReviewDateRange()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <!-- Popover -->
            <div id="reviewDRPopover" role="dialog" aria-label="Date range filter" style="position:absolute;top:calc(100% + 8px);left:0;right:auto;z-index:9999;background:var(--surface);border:1px solid var(--border);border-radius:8px;box-shadow:0 8px 18px rgba(15,23,42,0.10);padding:8px 10px;width:186px;display:none;animation:fadeDropDown 0.14s ease;">
              <div class="tf-pop-title">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Filter by Date Range
              </div>
              <div class="tf-pop-row">
                <label class="tf-pop-label" for="reviewDRFrom">From Date</label>
                <input type="date" id="reviewDRFrom" class="tf-pop-input" aria-label="From date">
              </div>
              <div class="tf-pop-row">
                <label class="tf-pop-label" for="reviewDRTo">To Date</label>
                <input type="date" id="reviewDRTo" class="tf-pop-input" aria-label="To date">
              </div>
              <div class="tf-pop-actions">
                <button class="tf-pop-apply" onclick="applyReviewDRFromPopover()">Apply</button>
                <button class="tf-pop-reset" onclick="clearReviewDateRange()">Reset</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- /Review Filter Bar -->

      <!-- Unified Reviews List -->
      <div id="reviewUnifiedList" style="display:flex;flex-direction:column;gap:0;">

        <!-- RV-001 · Pending · High -->
        <div class="task-card" data-rv-status="pending" data-rv-priority="high" data-rv-type="performance" data-rv-due="2026-04-25">
          <div class="task-id-row">
            <span class="task-id-chip">RV-001</span>
            <button class="task-edit-btn" onclick="showToast('Opening review for Amit Sharma...','info')">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>
              Start Review
            </button>
          </div>
          <div class="task-title" style="display:flex;align-items:center;gap:8px;">
            <div style="width:26px;height:26px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:var(--primary);flex-shrink:0;">AS</div>
            Amit Sharma — Q1 Performance Review
          </div>
          <div class="task-meta">
            <div class="task-due">Due: Apr 25, 2026</div>
            <span class="priority-badge high">High</span>
            <span class="badge amber">Pending</span>
          </div>
        </div>

        <!-- RV-002 · Pending · Medium -->
        <div class="task-card" data-rv-status="pending" data-rv-priority="medium" data-rv-type="checkin" data-rv-due="2026-04-28">
          <div class="task-id-row">
            <span class="task-id-chip">RV-002</span>
            <button class="task-edit-btn" onclick="showToast('Opening review for Priya Nair...','info')">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>
              Start Review
            </button>
          </div>
          <div class="task-title" style="display:flex;align-items:center;gap:8px;">
            <div style="width:26px;height:26px;border-radius:50%;background:#EDE9FE;display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:#7C3AED;flex-shrink:0;">PN</div>
            Priya Nair — Mid-Year Check-In
          </div>
          <div class="task-meta">
            <div class="task-due">Due: Apr 28, 2026</div>
            <span class="priority-badge medium">Medium</span>
            <span class="badge amber">Pending</span>
          </div>
        </div>

        <!-- RV-003 · Pending · Low -->
        <div class="task-card" data-rv-status="pending" data-rv-priority="low" data-rv-type="probation" data-rv-due="2026-04-30">
          <div class="task-id-row">
            <span class="task-id-chip">RV-003</span>
            <button class="task-edit-btn" onclick="showToast('Opening review for Rahul Singh...','info')">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>
              Start Review
            </button>
          </div>
          <div class="task-title" style="display:flex;align-items:center;gap:8px;">
            <div style="width:26px;height:26px;border-radius:50%;background:var(--success-muted);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:var(--success);flex-shrink:0;">RS</div>
            Rahul Singh — Probation Review
          </div>
          <div class="task-meta">
            <div class="task-due">Due: Apr 30, 2026</div>
            <span class="priority-badge low">Low</span>
            <span class="badge amber">Pending</span>
          </div>
        </div>

        <!-- RV-004 · Completed -->
        <div class="task-card" data-rv-status="completed" data-rv-priority="medium" data-rv-type="performance" data-rv-due="2026-04-10" style="opacity:0.75;">
          <div class="task-id-row">
            <span class="task-id-chip">RV-004</span>
            <button class="task-edit-btn" onclick="showToast('Viewing review for Meera Patel...','info')">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View
            </button>
          </div>
          <div class="task-title" style="display:flex;align-items:center;gap:8px;text-decoration:line-through;">
            <div style="width:26px;height:26px;border-radius:50%;background:var(--accent-muted);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:var(--accent);flex-shrink:0;">MP</div>
            Meera Patel — Annual Performance Review
          </div>
          <div class="task-meta">
            <span class="badge green">Completed</span>
            <div class="task-due" style="color:var(--success);font-size:10.5px;">✓ Submitted: Apr 10, 2026</div>
          </div>
        </div>

        <!-- RV-005 · Completed -->
        <div class="task-card" data-rv-status="completed" data-rv-priority="low" data-rv-type="performance" data-rv-due="2026-04-03" style="opacity:0.75;">
          <div class="task-id-row">
            <span class="task-id-chip">RV-005</span>
            <button class="task-edit-btn" onclick="showToast('Viewing review for Deepa Verma...','info')">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View
            </button>
          </div>
          <div class="task-title" style="display:flex;align-items:center;gap:8px;text-decoration:line-through;">
            <div style="width:26px;height:26px;border-radius:50%;background:#FEF3C7;display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:#D97706;flex-shrink:0;">DV</div>
            Deepa Verma — Q4 Self-Assessment Review
          </div>
          <div class="task-meta">
            <span class="badge green">Completed</span>
            <div class="task-due" style="color:var(--success);font-size:10.5px;">✓ Submitted: Apr 3, 2026</div>
          </div>
        </div>

      </div>
    </div>
    <!-- ==================== /REVIEW SECTION PANEL ==================== -->

    <div id="approval-tasks-content" style="display:none">
      <!-- Shown only to manager/hr -->
      <div id="approvalAccessDenied" style="display:none;padding:32px;text-align:center;color:var(--text-muted);">
        <div style="font-size:36px;margin-bottom:12px;"></div>
        <div style="font-size:15px;font-weight:500;color:var(--text);margin-bottom:6px;">Access Restricted</div>
        <div style="font-size:13px;">Only Managers and HR Admins can approve tasks.</div>
      </div>
      <div id="approvalTasksTable">

        <!-- Filter Bar — identical layout/classes to My Tasks filter bar -->
        <div id="approvalFilterWrap" style="display:flex;align-items:center;gap:0;margin-bottom:14px;flex-wrap:nowrap;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:5px 10px;box-shadow:var(--shadow-xs);overflow:visible;position:relative;z-index:20;">
          <div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;flex:1;min-width:0;">

            <!-- SHOW label -->
            <span style="display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;white-space:nowrap;flex-shrink:0;margin-right:8px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              Show
            </span>

            <!-- Status segmented control -->
            <div id="approvalFilterSegment" role="group" aria-label="Approval status filter" style="display:inline-flex;align-items:center;background:var(--border-subtle);border:1px solid var(--border);border-radius:20px;padding:3px;gap:2px;box-shadow:var(--shadow-xs);flex-shrink:0;">
              <button class="task-seg-btn active" data-ap-value="all" onclick="segFilterApprovals('all',this)">
                All <span class="task-seg-count" id="apCount_all">3</span>
              </button>
              <button class="task-seg-btn" data-ap-value="pending" onclick="segFilterApprovals('pending',this)">
                Pending <span class="task-seg-count" id="apCount_pending">3</span>
              </button>
              <button class="task-seg-btn" data-ap-value="approved" onclick="segFilterApprovals('approved',this)">
                Approved <span class="task-seg-count" id="apCount_approved">0</span>
              </button>
            </div>

            <div class="tf-divider"></div>

            <!-- All Types — searchable dropdown -->
            <div class="tf-search-select" id="approvalTypeDropdownWrap">
              <button type="button" class="tf-search-trigger" id="approvalTypeDropdownTrigger"
                onclick="toggleApprovalTypeDropdown()" aria-haspopup="listbox" aria-expanded="false" aria-controls="approvalTypeDropdownMenu">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span class="tf-search-label" id="approvalTypeDropdownLabel">All Types</span>
                <svg class="tf-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="tf-search-dropdown" id="approvalTypeDropdownMenu" role="listbox" aria-label="Select request type">
                <div class="tf-search-input-wrap">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input type="text" class="tf-search-inner" id="approvalTypeDropdownSearch"
                    placeholder="Search types…" autocomplete="off"
                    oninput="filterApprovalTypeDropdownOptions(this.value)"
                    onkeydown="approvalTypeDropdownKeydown(event)">
                </div>
                <div class="tf-search-list" id="approvalTypeDropdownList">
                  <div class="tf-search-opt selected" data-value="" role="option" onclick="selectApprovalTypeDropdownOpt(this)">All Types</div>
                  <div class="tf-search-opt" data-value="Leave" role="option" onclick="selectApprovalTypeDropdownOpt(this)">Leave</div>
                  <div class="tf-search-opt" data-value="Expense" role="option" onclick="selectApprovalTypeDropdownOpt(this)">Expense</div>
                  <div class="tf-search-opt" data-value="WFH" role="option" onclick="selectApprovalTypeDropdownOpt(this)">WFH</div>
                  <div class="tf-search-empty" id="approvalTypeDropdownEmpty" style="display:none;">No results found</div>
                </div>
              </div>
            </div>

            <div class="tf-divider"></div>

            <!-- Priority select -->
            <select id="approvalPriorityFilter" class="tf-select" onchange="filterApprovalsByPriority(this.value)" title="Filter by priority" aria-label="Filter by priority">
              <option value="">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <div class="tf-divider"></div>

            <!-- Sort select -->
            <select id="approvalSortSelect" class="tf-select" onchange="sortApprovals(this.value)" title="Sort approvals" aria-label="Sort approvals">
              <option value="recent" selected>Recently Created</option>
              <option value="priority_high">Priority: High First</option>
              <option value="priority_low">Priority: Low First</option>
            </select>

            <div class="tf-divider"></div>

            <!-- Date Range -->
            <div class="tf-dr-compact" id="approvalDRCompact">
              <button class="tf-dr-icon-btn" id="approvalDRTrigger" onclick="toggleApprovalDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="approvalDRPopover">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span id="approvalDRBtnLabel">Date Range</span>
                <span id="approvalDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
              </button>
              <button class="tf-dr-clear-icon" id="approvalDRClearBtn" onclick="clearApprovalDateRange()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <!-- Popover -->
              <div id="approvalDRPopover" role="dialog" aria-label="Date range filter" style="position:absolute;top:calc(100% + 8px);left:0;right:auto;z-index:9999;background:var(--surface);border:1px solid var(--border);border-radius:8px;box-shadow:0 8px 18px rgba(15,23,42,0.10);padding:8px 10px;width:186px;display:none;animation:fadeDropDown 0.14s ease;">
                <div class="tf-pop-title">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Filter by Date Range
                </div>
                <div class="tf-pop-row">
                  <label class="tf-pop-label" for="approvalDRFrom">From Date</label>
                  <input type="date" id="approvalDRFrom" class="tf-pop-input" aria-label="From date">
                </div>
                <div class="tf-pop-row">
                  <label class="tf-pop-label" for="approvalDRTo">To Date</label>
                  <input type="date" id="approvalDRTo" class="tf-pop-input" aria-label="To date">
                </div>
                <div class="tf-pop-actions">
                  <button class="tf-pop-apply" onclick="applyApprovalDRFromPopover()">Apply</button>
                  <button class="tf-pop-reset" onclick="clearApprovalDateRange()">Reset</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- /Approval Filter Bar -->

        <div class="card">
          <table>
            <thead><tr><th>Employee</th><th>Request Type</th><th>Details</th><th>Date</th><th>Priority</th><th>Actions</th></tr></thead>
            <tbody id="approvalTableBody">
              <tr data-ap-status="pending" data-ap-type="Leave" data-ap-priority="high" data-ap-date="2026-04-05"><td><b>Amit Sharma</b></td><td><span class="badge blue">Leave</span></td><td>Earned Leave — 3 days</td><td>Apr 5–7</td><td><span class="priority-badge high">High</span></td><td><button class="approve-btn approve" onclick="showToast('Leave approved!','success')">Approve</button> <button class="approve-btn reject" onclick="showToast('Leave rejected','error')">Reject</button></td></tr>
              <tr data-ap-status="pending" data-ap-type="Expense" data-ap-priority="medium" data-ap-date="2026-04-02"><td><b>Priya Nair</b></td><td><span class="badge purple">Expense</span></td><td>Travel Reimbursement ₹2,400</td><td>Apr 2</td><td><span class="priority-badge medium">Medium</span></td><td><button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button> <button class="approve-btn reject">Reject</button></td></tr>
              <tr data-ap-status="pending" data-ap-type="WFH" data-ap-priority="low" data-ap-date="2026-04-04"><td><b>Rahul Singh</b></td><td><span class="badge green">WFH</span></td><td>Work from Home</td><td>Apr 4</td><td><span class="priority-badge low">Low</span></td><td><button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button> <button class="approve-btn reject">Reject</button></td></tr>
            </tbody>
          </table>
        </div>
      </div><!-- end approvalTasksTable -->
    </div>
    <div id="hr-tasks-content" style="display:none">
      <div class="card">
        <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:12.5px;font-weight:600">Onboarding Progress</span><b style="font-size:13px">75%</b></div><div class="progress-bar"><div class="progress-fill" style="width:75%;background:var(--primary)"></div></div></div>
        <div class="checklist-item"><div class="check-icon done"></div><div><div class="check-title">Send offer letter to new hires (8)</div><div class="check-sub">Completed March 28</div></div></div>
        <div class="checklist-item"><div class="check-icon done"></div><div><div class="check-title">Set up employee accounts</div><div class="check-sub">Completed March 29</div></div></div>
        <div class="checklist-item"><div class="check-icon inprogress"></div><div><div class="check-title">Assign reporting managers</div><div class="check-sub">3 of 8 pending</div></div></div>
        <div class="checklist-item"><div class="check-icon pending"></div><div><div class="check-title">Document collection drive</div><div class="check-sub">Due April 5</div></div></div>
        <div class="checklist-item"><div class="check-icon pending"></div><div><div class="check-title">Payroll setup for new employees</div><div class="check-sub">Due April 10</div></div></div>
      </div>
    </div>
  </div>

  <!-- ==================== PROFILE PAGE ==================== -->
  <div class="page" id="page-profile">
    <div class="profile-header">
      <div class="profile-pic" id="profilePic">JD</div>
      <div>
        <div class="profile-name" id="profileName">John Doe</div>
        <div class="profile-role" id="profileDept">Senior Software Engineer · Engineering</div>
        <div class="profile-tags">
          <span class="profile-tag" id="profileEmpId">EMP-10042</span>
          <span class="profile-tag">Bangalore</span>
          <span class="profile-tag" style="background:rgba(59,91,219,0.1);border-color:rgba(59,91,219,0.2);color:var(--primary);">Active</span>
        </div>
      </div>
      <div style="margin-left:auto">
        <button class="quick-btn outline" onclick="enablePersonalEdit()">Edit Profile</button>
      </div>
    </div>
    <div class="card">
      <div class="tabs">
        <div class="tab active" onclick="switchTab(this,'personal-tab')">Personal Details</div>
        <div class="tab" onclick="switchTab(this,'family-tab')">Family Details</div>
        <div class="tab" onclick="switchTab(this,'job-tab')">Job Details</div>
        <div class="tab" onclick="switchTab(this,'history-tab')">Employment History</div>
      </div>
      <div id="personal-tab">

        <!-- ── Section 1: Basic Info ── -->
        <div class="profile-section-header" style="margin-top:4px;margin-bottom:14px;">
          <div class="profile-section-icon" style="background:#F0FDFA;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <span class="profile-section-title">Basic Information</span>
        </div>

        <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
          <div class="form-group">
            <div class="form-label">First Name <span style="color:var(--danger)">*</span></div>
            <input id="pd_firstName" class="form-input" value="John" disabled>
            <span class="field-error" id="err_firstName">First name is required.</span>
          </div>
          <div class="form-group">
            <div class="form-label">Middle Name <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
            <input id="pd_middleName" class="form-input" placeholder="Enter middle name" disabled>
          </div>
          <div class="form-group">
            <div class="form-label">Last Name <span style="color:var(--danger)">*</span></div>
            <input id="pd_lastName" class="form-input" value="Doe" disabled>
            <span class="field-error" id="err_lastName">Last name is required.</span>
          </div>
        </div>

        <div class="form-grid" style="margin-top:13px;grid-template-columns:1fr 1fr 1fr;">
          <div class="form-group">
            <div class="form-label">Date of Birth <span style="color:var(--danger)">*</span></div>
            <input id="pd_dob" class="form-input" type="date" value="1992-03-15" max="" disabled
              style="cursor:pointer;">
            <span class="field-error" id="err_dob">Please select a valid date of birth.</span>
          </div>
          <div class="form-group">
            <div class="form-label">Gender</div>
            <select id="pd_gender" class="form-input" disabled>
              <option value="Male" selected>Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div class="form-group">
            <div class="form-label">Nationality</div>
            <input id="pd_nationality" class="form-input" value="Indian" disabled>
          </div>
          <div class="form-group">
            <div class="form-label">Blood Group</div>
            <select id="pd_bloodGroup" class="form-input" disabled>
              <option value="O+" selected>O+</option>
              <option value="O-">O−</option>
              <option value="A+">A+</option>
              <option value="A-">A−</option>
              <option value="B+">B+</option>
              <option value="B-">B−</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB−</option>
            </select>
          </div>
          <!-- Marital Status — radio buttons -->
          <div class="form-group" style="grid-column:1/-1;">
            <div class="form-label">Marital Status</div>
            <div id="maritalRadioGroup" style="display:flex;align-items:center;gap:20px;margin-top:6px;flex-wrap:wrap;">
              <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:12.5px;color:var(--text-secondary);">
                <input type="radio" id="ms_single"   name="pd_maritalStatus" value="Single"   checked onchange="handleMaritalChange(this.value)" style="accent-color:var(--primary);width:14px;height:14px;cursor:pointer;">
                Single
              </label>
              <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:12.5px;color:var(--text-secondary);">
                <input type="radio" id="ms_married"  name="pd_maritalStatus" value="Married"  onchange="handleMaritalChange(this.value)" style="accent-color:var(--primary);width:14px;height:14px;cursor:pointer;">
                Married
              </label>
              <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:12.5px;color:var(--text-secondary);">
                <input type="radio" id="ms_divorced" name="pd_maritalStatus" value="Divorced" onchange="handleMaritalChange(this.value)" style="accent-color:var(--primary);width:14px;height:14px;cursor:pointer;">
                Divorced
              </label>
              <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:12.5px;color:var(--text-secondary);">
                <input type="radio" id="ms_widowed"  name="pd_maritalStatus" value="Widowed"  onchange="handleMaritalChange(this.value)" style="accent-color:var(--primary);width:14px;height:14px;cursor:pointer;">
                Widowed
              </label>
              <!-- Displayed saved value when not in edit mode -->
              <span id="maritalStatusDisplay" style="display:none;font-size:12.5px;font-weight:500;color:var(--text-primary);padding:4px 12px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:20px;">Single</span>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label">Mobile Number <span style="color:var(--danger)">*</span></div>
            <input id="pd_mobile" class="form-input" value="+91 98765 43210" disabled
              inputmode="tel" maxlength="15">
            <span class="field-error" id="err_mobile">Mobile number is required.</span>
          </div>
          <div class="form-group">
            <div class="form-label">Alternate Mobile Number <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
            <input id="pd_altMobile" class="form-input" placeholder="Enter alternate mobile" disabled
              inputmode="tel" maxlength="15">
          </div>
          <div class="form-group">
            <div class="form-label">Emergency Contact Number <span style="color:var(--danger)">*</span></div>
            <input id="pd_emergencyContact" class="form-input" placeholder="Enter emergency contact number" disabled
              inputmode="tel" maxlength="15">
            <span class="field-error" id="err_emergencyContact">Emergency contact number is required.</span>
          </div>
          <div class="form-group">
            <div class="form-label">Emergency Contact Name</div>
            <input id="pd_emergencyName" class="form-input" placeholder="Name of emergency contact" disabled>
          </div>
          <div class="form-group">
            <div class="form-label">Relationship</div>
            <select id="pd_emergencyRelation" class="form-input" disabled>
              <option value="">— Select —</option>
              <option value="Spouse">Spouse</option>
              <option value="Parent">Parent</option>
              <option value="Sibling">Sibling</option>
              <option value="Child">Child</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <!-- ── Section 2: Address Details (moved up from slot 4) ── -->
        <div class="profile-section">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#F0F9FF;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span class="profile-section-title">Address Details</span>
          </div>

          <!-- Current Address -->
          <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:8px;">Current Address</div>
            <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
              <div class="form-group">
                <div class="form-label">Flat / Unit No. <span style="color:var(--danger)">*</span></div>
                <input id="pd_currFlat" class="form-input" value="Flat 302" disabled placeholder="e.g. Flat 4B, Door No. 12">
                <span class="field-error" id="err_currFlat">Flat / Unit No. is required.</span>
              </div>
              <div class="form-group" style="grid-column:2/-1;">
                <div class="form-label">Building / Society / Apartment <span style="color:var(--danger)">*</span></div>
                <input id="pd_currBuilding" class="form-input" value="Green Valley Apts" disabled placeholder="e.g. Sunrise Towers, Brigade Residency">
                <span class="field-error" id="err_currBuilding">Building / Society name is required.</span>
              </div>
              <div class="form-group" style="grid-column:1/-1;">
                <div class="form-label">Street / Area / Locality <span style="color:var(--danger)">*</span></div>
                <input id="pd_currStreet" class="form-input" value="Koramangala" disabled placeholder="e.g. MG Road, Koramangala 5th Block">
                <span class="field-error" id="err_currStreet">Street / Area is required.</span>
              </div>
              <div class="form-group" style="grid-column:1/-1;">
                <div class="form-label">Landmark <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
                <input id="pd_currLandmark" class="form-input" placeholder="e.g. Near Forum Mall, Opposite SBI Bank" disabled>
              </div>
              <div class="form-group">
                <div class="form-label">City <span style="color:var(--danger)">*</span></div>
                <input id="pd_currCity" class="form-input" value="Bangalore" disabled>
                <span class="field-error" id="err_currCity">City is required.</span>
              </div>
              <div class="form-group">
                <div class="form-label">State <span style="color:var(--danger)">*</span></div>
                <select id="pd_currState" class="form-input" disabled>
                  <option value="">— Select State —</option>
                  <option value="Karnataka" selected>Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Other">Other</option>
                </select>
                <span class="field-error" id="err_currState">Please select a state.</span>
              </div>
              <div class="form-group">
                <div class="form-label">PIN Code <span style="color:var(--danger)">*</span></div>
                <input id="pd_currPin" class="form-input" value="560034" disabled maxlength="6"
                  style="font-family:var(--mono);" inputmode="numeric">
                <span class="field-error" id="err_currPin">Enter a valid 6-digit PIN code.</span>
              </div>
              <div class="form-group">
                <div class="form-label">Country</div>
                <input id="pd_currCountry" class="form-input" value="India" disabled>
              </div>
            </div>
          </div>

          <!-- Permanent Address -->
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.7px;">Permanent Address</div>
              <label class="copy-addr-row" style="margin-bottom:0;" id="copyAddrLabel">
                <input type="checkbox" id="sameAsCurrentChk" onchange="handleCopyAddress(this.checked)" disabled>
                <span>Same as current address</span>
              </label>
            </div>
            <div id="permAddressFields" class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
              <div class="form-group">
                <div class="form-label">Flat / Unit No.</div>
                <input id="pd_permFlat" class="form-input" placeholder="e.g. Flat 4B, Door No. 12" disabled>
              </div>
              <div class="form-group" style="grid-column:2/-1;">
                <div class="form-label">Building / Society / Apartment</div>
                <input id="pd_permBuilding" class="form-input" placeholder="e.g. Sunrise Towers, Brigade Residency" disabled>
              </div>
              <div class="form-group" style="grid-column:1/-1;">
                <div class="form-label">Street / Area / Locality</div>
                <input id="pd_permStreet" class="form-input" placeholder="e.g. MG Road, Koramangala 5th Block" disabled>
              </div>
              <div class="form-group" style="grid-column:1/-1;">
                <div class="form-label">Landmark <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
                <input id="pd_permLandmark" class="form-input" placeholder="e.g. Near Forum Mall, Opposite SBI Bank" disabled>
              </div>
              <div class="form-group">
                <div class="form-label">City</div>
                <input id="pd_permCity" class="form-input" placeholder="Enter city" disabled>
              </div>
              <div class="form-group">
                <div class="form-label">State</div>
                <select id="pd_permState" class="form-input" disabled>
                  <option value="">— Select State —</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <div class="form-label">PIN Code</div>
                <input id="pd_permPin" class="form-input" placeholder="6-digit PIN" disabled
                  maxlength="6" style="font-family:var(--mono);" inputmode="numeric">
              </div>
              <div class="form-group">
                <div class="form-label">Country</div>
                <input id="pd_permCountry" class="form-input" value="India" disabled>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Section 3: Bank Details (moved down from slot 2) ── -->
        <div class="profile-section">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#FFFBEB;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <span class="profile-section-title">Bank Details</span>
            <span class="profile-section-badge">Salary credited to this account</span>
            <button class="btn-sm" style="margin-left:auto;" onclick="navigateToSalaryBankDetails()" title="Edit bank details in Salary panel">Edit Bank Details</button>
          </div>
          <div style="background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius-sm);padding:8px 11px;font-size:11.5px;color:#92400E;margin-bottom:13px;display:flex;align-items:center;gap:7px;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Changes to bank details require HR approval before taking effect.
          </div>
          <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
            <div class="form-group">
              <div class="form-label">Account Holder Name <span style="color:var(--danger)">*</span></div>
              <input id="pd_bankHolderName" class="form-input" value="John Doe" disabled>
              <span class="field-error" id="err_bankHolderName">Account holder name is required.</span>
            </div>
            <div class="form-group">
              <div class="form-label">Bank Name <span style="color:var(--danger)">*</span></div>
              <select id="pd_bankName" class="form-input" disabled>
                <option value="">— Select Bank —</option>
                <option value="HDFC Bank" selected>HDFC Bank</option>
                <option value="State Bank of India">State Bank of India</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="Axis Bank">Axis Bank</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Canara Bank">Canara Bank</option>
                <option value="Other">Other</option>
              </select>
              <span class="field-error" id="err_bankName">Please select a bank.</span>
            </div>
            <div class="form-group">
              <div class="form-label">Account Number <span style="color:var(--danger)">*</span></div>
              <input id="pd_accountNumber" class="form-input" value="XXXX XXXX 4521" disabled
                style="font-family:var(--mono);letter-spacing:0.5px;" maxlength="20" autocomplete="off">
              <span class="field-error" id="err_accountNumber">Enter a valid account number.</span>
            </div>
            <div class="form-group">
              <div class="form-label">IFSC Code <span style="color:var(--danger)">*</span></div>
              <input id="pd_ifsc" class="form-input" value="HDFC0001234" disabled
                style="font-family:var(--mono);letter-spacing:0.5px;text-transform:uppercase;" maxlength="11"
                oninput="this.value=this.value.toUpperCase()">
              <span class="field-error" id="err_ifsc">Enter a valid 11-character IFSC code.</span>
            </div>
          </div>
        </div>

        <!-- ── Section 4: Passport Details (moved down from slot 3) ── -->
        <div class="profile-section">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#EDE9FE;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 12h8"/><path d="M8 8h8"/><path d="M8 16h4"/></svg>
            </div>
            <span class="profile-section-title">Passport Details</span>
            <span class="profile-section-badge">Optional</span>
          </div>
          <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
            <div class="form-group">
              <div class="form-label">Passport Number</div>
              <input id="pd_passportNumber" class="form-input" placeholder="e.g. A1234567" disabled
                maxlength="12" oninput="this.value=this.value.toUpperCase()">
              <span class="field-error" id="err_passportNumber">Enter a valid passport number (6–12 characters).</span>
            </div>
            <div class="form-group">
              <div class="form-label">Issue Date</div>
              <input id="pd_passportIssue" class="form-input" type="date" disabled max="">
              <span class="field-error" id="err_passportIssue">Issue date cannot be in the future.</span>
            </div>
            <div class="form-group">
              <div class="form-label">Expiry Date</div>
              <input id="pd_passportExpiry" class="form-input" type="date" disabled>
              <span class="field-error" id="err_passportExpiry">Expiry date must be after issue date.</span>
            </div>
          </div>
        </div>

        <!-- ── Save / Cancel bar ── -->
        <div class="personal-save-bar" id="personalSaveBar" style="display:none;">
          <button class="quick-btn primary" onclick="savePersonalDetails()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Save Changes
          </button>
          <button class="quick-btn outline" onclick="cancelPersonalEdit()">Cancel</button>
          <span id="personalSaveStatus" style="font-size:11.5px;color:var(--text-tertiary);margin-left:4px;"></span>
        </div>

      </div>

      <!-- ==================== PARENTS DETAILS TAB ==================== -->
      <!-- ==================== FAMILY DETAILS TAB ==================== -->
      <div id="family-tab" style="display:none">

        <!-- ── Section: Father's Details ── -->
        <div class="profile-section" style="margin-bottom:20px;">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#FDF2F8;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9D174D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span class="profile-section-title">Father's Details</span>
          </div>
          <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
            <div class="form-group">
              <div class="form-label">First Name</div>
              <input id="pd_fatherFirstName" class="form-input" placeholder="Enter first name" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Middle Name <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
              <input id="pd_fatherMiddleName" class="form-input" placeholder="Enter middle name" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Last Name</div>
              <input id="pd_fatherLastName" class="form-input" placeholder="Enter last name" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Date of Birth</div>
              <input id="pd_fatherDob" class="form-input" type="date" disabled style="cursor:pointer;">
            </div>
            <div class="form-group">
              <div class="form-label">Occupation</div>
              <input id="pd_fatherOccupation" class="form-input" placeholder="e.g. Retired, Businessman" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Mobile Number</div>
              <input id="pd_fatherMobile" class="form-input" placeholder="Enter mobile number" disabled inputmode="tel" maxlength="15">
            </div>
            <div class="form-group">
              <div class="form-label">Email Address <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
              <input id="pd_fatherEmail" class="form-input" placeholder="Enter email address" disabled type="email">
            </div>
            <div class="form-group">
              <div class="form-label">Nationality</div>
              <input id="pd_fatherNationality" class="form-input" value="Indian" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Is Dependent?</div>
              <select id="pd_fatherDependent" class="form-input" disabled>
                <option value="">— Select —</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <!-- ── Section: Mother's Details ── -->
        <div class="profile-section" style="margin-bottom:20px;">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#FDF2F8;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9D174D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <span class="profile-section-title">Mother's Details</span>
          </div>
          <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
            <div class="form-group">
              <div class="form-label">First Name</div>
              <input id="pd_motherFirstName" class="form-input" placeholder="Enter first name" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Middle Name <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
              <input id="pd_motherMiddleName" class="form-input" placeholder="Enter middle name" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Last Name</div>
              <input id="pd_motherLastName" class="form-input" placeholder="Enter last name" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Date of Birth</div>
              <input id="pd_motherDob" class="form-input" type="date" disabled style="cursor:pointer;">
            </div>
            <div class="form-group">
              <div class="form-label">Occupation</div>
              <input id="pd_motherOccupation" class="form-input" placeholder="e.g. Homemaker, Teacher" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Mobile Number</div>
              <input id="pd_motherMobile" class="form-input" placeholder="Enter mobile number" disabled inputmode="tel" maxlength="15">
            </div>
            <div class="form-group">
              <div class="form-label">Email Address <span style="color:var(--text-tertiary);font-weight:400;">(Optional)</span></div>
              <input id="pd_motherEmail" class="form-input" placeholder="Enter email address" disabled type="email">
            </div>
            <div class="form-group">
              <div class="form-label">Nationality</div>
              <input id="pd_motherNationality" class="form-input" value="Indian" disabled>
            </div>
            <div class="form-group">
              <div class="form-label">Is Dependent?</div>
              <select id="pd_motherDependent" class="form-input" disabled>
                <option value="">— Select —</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <!-- ── Divider ── -->
        <div style="height:1px;background:var(--border);margin:4px 0 20px;"></div>

        <!-- ── Marital Status + Spouse / Children (from modal) ── -->

        <!-- Marital Status badge row (always visible) -->
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:12px 16px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span style="font-size:12.5px;font-weight:600;color:var(--primary);">Marital Status:</span>
          <span id="familyMaritalBadge" style="font-size:12.5px;font-weight:700;color:var(--text-primary);">—</span>
          <button class="btn-sm" style="margin-left:auto;font-size:11px;" onclick="openFamilyEditFromTab()">✏️ Add / Edit Spouse &amp; Children</button>
        </div>

        <!-- Spouse section (hidden until Married is saved) -->
        <div class="profile-section" id="familySpouseSection" style="display:none;margin-bottom:18px;">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#FDF2F8;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9D174D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <span class="profile-section-title">Spouse Details</span>
          </div>
          <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
            <div class="form-group"><div class="form-label">First Name</div><input id="fd_spouseFirstName" class="form-input" disabled></div>
            <div class="form-group"><div class="form-label">Last Name</div><input id="fd_spouseLastName" class="form-input" disabled></div>
            <div class="form-group"><div class="form-label">Date of Birth</div><input id="fd_spouseDob" class="form-input" type="date" disabled style="cursor:default;"></div>
            <div class="form-group"><div class="form-label">Occupation</div><input id="fd_spouseOccupation" class="form-input" disabled></div>
            <div class="form-group"><div class="form-label">Mobile Number</div><input id="fd_spouseMobile" class="form-input" disabled></div>
            <div class="form-group"><div class="form-label">Is Dependent?</div>
              <select id="fd_spouseDependent" class="form-input" disabled>
                <option value="">— Select —</option><option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Children section (hidden until data saved) -->
        <div class="profile-section" id="familyChildrenSection" style="display:none;margin-top:0;">
          <div class="profile-section-header">
            <div class="profile-section-icon" style="background:#EFF6FF;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span class="profile-section-title">Children Details</span>
          </div>
          <div id="familyChildrenDisplay" style="display:flex;flex-direction:column;gap:14px;"></div>
          <div id="familyNoChildren" style="font-size:12px;color:var(--text-tertiary);padding:8px 0;">No children details added.</div>
        </div>

        <!-- Save bar for Father / Mother fields -->
        <div style="display:flex;align-items:center;gap:10px;padding:16px 0 0;margin-top:8px;border-top:1px solid var(--border-subtle);">
          <button class="quick-btn primary" onclick="saveFamilyTabParents()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Save Changes
          </button>
          <button class="quick-btn outline" onclick="showToast('Changes discarded','info')">Cancel</button>
        </div>

      </div>

      <div id="job-tab" style="display:none">
        <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;">
          <div class="form-group"><div class="form-label">Employee ID</div><input class="form-input" value="EMP-10042" disabled></div>
          <div class="form-group"><div class="form-label">Designation</div><input class="form-input" value="Senior Software Engineer" disabled></div>
          <div class="form-group"><div class="form-label">Department</div><input class="form-input" value="Engineering" disabled></div>
          <div class="form-group"><div class="form-label">Reporting Manager</div><input class="form-input" value="Sarah Mitchell" disabled></div>
          <div class="form-group"><div class="form-label">Date of Joining</div><input class="form-input" value="June 15, 2021" disabled></div>
          <div class="form-group"><div class="form-label">Employment Type</div><input class="form-input" value="Full Time" disabled></div>
          <div class="form-group"><div class="form-label">Work Email</div><input class="form-input" value="john.doe@peopleflow.com" disabled></div>
        </div>
      </div>
      <div id="history-tab" style="display:none">

        <!-- ── Employment History Header ── -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--border-subtle);">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:28px;height:28px;border-radius:7px;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
            </div>
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Employment History</div>
              <div style="font-size:11px;color:var(--text-tertiary);">Your previous and current employment records</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;" id="empHistHeaderActions">
            <!-- Edit button — visible in view mode -->
            <button id="empHistEditBtn" class="quick-btn outline" onclick="startEmpHistEdit()" style="font-size:12px;display:flex;align-items:center;gap:5px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Edit
            </button>
            <!-- Save & Cancel — visible in edit mode -->
            <button id="empHistSaveBtn" class="quick-btn primary" onclick="submitEmpHistForApproval()" style="font-size:12px;display:none;align-items:center;gap:5px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Submit for Approval
            </button>
            <button id="empHistCancelBtn" class="quick-btn outline" onclick="cancelEmpHistEdit()" style="font-size:12px;display:none;">Cancel</button>
          </div>
        </div>

        <!-- ── Pending Approval Banner (shown when any record is pending) ── -->
        <div id="empHistPendingBanner" style="display:none;margin-bottom:14px;padding:10px 14px;background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius);display:none;align-items:center;gap:10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div style="flex:1;min-width:0;">
            <span style="font-size:12px;font-weight:600;color:var(--warning);">Changes Pending Approval</span>
            <span style="font-size:11.5px;color:var(--text-secondary);margin-left:6px;">Your update request has been sent to HR Admin. Active data shown below until approved.</span>
          </div>
        </div>

        <!-- ── Rejection Banner (shown when record is rejected) ── -->
        <div id="empHistRejectedBanner" style="display:none;margin-bottom:14px;padding:10px 14px;background:var(--danger-muted);border:1px solid #FECACA;border-radius:var(--radius);align-items:center;gap:10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <div style="flex:1;min-width:0;">
            <span style="font-size:12px;font-weight:600;color:var(--danger);">Update Request Rejected</span>
            <span id="empHistRejectionMsg" style="font-size:11.5px;color:var(--text-secondary);margin-left:6px;">Your changes were not approved by HR Admin. Existing records remain active.</span>
          </div>
          <button onclick="dismissRejectionBanner()" style="background:none;border:none;cursor:pointer;color:var(--text-tertiary);font-size:16px;line-height:1;padding:0 2px;">&times;</button>
        </div>

        <!-- ── Employment Records Table ── -->
        <div style="overflow-x:auto;">
          <table id="empHistTable" style="width:100%;border-collapse:collapse;">
            <thead>
              <tr>
                <th style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;">Company Name</th>
                <th style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;">Designation</th>
                <th style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;">Department</th>
                <th style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;">From</th>
                <th style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;">To</th>
                <th class="ctc-cell-col" style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;">CTC</th>
                <th style="text-align:left;padding:9px 12px;font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid var(--border);background:var(--bg);white-space:nowrap;" id="empHistStatusTh">Status</th>
              </tr>
            </thead>
            <tbody id="empHistTableBody">
              <!-- rows rendered by JS -->
            </tbody>
          </table>
        </div>

        <!-- ── Add Record button (edit mode only) ── -->
        <div id="empHistAddRowWrap" style="display:none;margin-top:12px;">
          <button class="btn-sm" onclick="addEmpHistRow()" style="font-size:11.5px;display:flex;align-items:center;gap:5px;color:var(--primary);border-color:var(--primary-border);background:var(--primary-muted);">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Employment Record
          </button>
        </div>

      </div>

      <!-- ==================== HR ADMIN APPROVAL MODAL ==================== -->
      <div id="empHistAdminModal" role="dialog" aria-modal="true" aria-labelledby="empHistAdminModalTitle"
        style="display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;background:rgba(0,0,0,0.45);backdrop-filter:blur(3px);"
        onclick="if(event.target===this)closeEmpHistAdminModal()">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;width:100%;max-width:720px;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg);position:relative;">

          <!-- Header -->
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:32px;height:32px;border-radius:8px;background:var(--warning-muted);display:flex;align-items:center;justify-content:center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div id="empHistAdminModalTitle" style="font-size:14px;font-weight:600;color:var(--text-primary);">HR Admin — Employment History Review</div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">Review and approve / reject employee's update request</div>
              </div>
            </div>
            <button onclick="closeEmpHistAdminModal()" style="width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:var(--bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--text-secondary);" aria-label="Close">✕</button>
          </div>

          <!-- Employee info strip -->
          <div style="padding:10px 14px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:16px;display:flex;align-items:center;gap:12px;">
            <div style="width:34px;height:34px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;">JD</div>
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">John Doe</div>
              <div style="font-size:11px;color:var(--text-tertiary);">EMP-10042 &bull; Senior Software Engineer &bull; Engineering</div>
            </div>
            <div style="margin-left:auto;text-align:right;">
              <div style="font-size:10px;color:var(--text-tertiary);font-weight:500;">Requested on</div>
              <div id="empHistAdminReqDate" style="font-size:12px;font-weight:600;color:var(--text-primary);font-family:var(--mono);"></div>
            </div>
          </div>

          <!-- Diff Table: Old vs Proposed -->
          <div style="font-size:11px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:10px;display:flex;align-items:center;gap:6px;">
            <span style="width:3px;height:14px;background:var(--warning);border-radius:2px;display:inline-block;"></span>
            Proposed Changes
          </div>
          <div style="overflow-x:auto;margin-bottom:18px;">
            <table style="width:100%;border-collapse:collapse;font-size:12.5px;">
              <thead>
                <tr style="background:var(--bg);">
                  <th style="padding:8px 12px;text-align:left;border:1px solid var(--border);font-size:11px;color:var(--text-secondary);font-weight:600;text-transform:uppercase;letter-spacing:0.4px;">#</th>
                  <th style="padding:8px 12px;text-align:left;border:1px solid var(--border);font-size:11px;color:var(--text-secondary);font-weight:600;text-transform:uppercase;letter-spacing:0.4px;">Field</th>
                  <th style="padding:8px 12px;text-align:left;border:1px solid var(--border);font-size:11px;color:var(--text-secondary);font-weight:600;text-transform:uppercase;letter-spacing:0.4px;">Current Value</th>
                  <th style="padding:8px 12px;text-align:left;border:1px solid var(--border);font-size:11px;color:var(--text-secondary);font-weight:600;text-transform:uppercase;letter-spacing:0.4px;">Proposed Value</th>
                </tr>
              </thead>
              <tbody id="empHistAdminDiffBody">
              </tbody>
            </table>
          </div>

          <!-- Rejection reason -->
          <div id="empHistAdminRejectReasonWrap" style="display:none;margin-bottom:14px;">
            <div class="form-label" style="margin-bottom:5px;">Rejection Reason <span style="color:var(--danger)">*</span></div>
            <textarea id="empHistAdminRejectReason" class="form-input" rows="2" placeholder="Provide a reason for rejection…" style="resize:vertical;min-height:52px;font-size:12.5px;"></textarea>
            <span id="empHistAdminRejectErr" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">Please enter a rejection reason.</span>
          </div>

          <!-- Actions -->
          <div style="display:flex;gap:8px;padding-top:12px;border-top:1px solid var(--border-subtle);">
            <button class="quick-btn primary" onclick="hrApproveEmpHist()" style="padding:7px 20px;font-size:12.5px;background:var(--success);border-color:var(--success);display:flex;align-items:center;gap:6px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Approve
            </button>
            <button class="quick-btn outline" onclick="toggleRejectReasonBox()" id="empHistAdminRejectToggleBtn" style="padding:7px 18px;font-size:12.5px;color:var(--danger);border-color:#FECACA;">
              Reject
            </button>
            <button id="empHistAdminConfirmRejectBtn" class="quick-btn" onclick="hrRejectEmpHist()" style="display:none;padding:7px 18px;font-size:12.5px;background:var(--danger);border-color:var(--danger);color:#fff;">
              Confirm Rejection
            </button>
            <button class="quick-btn outline" onclick="closeEmpHistAdminModal()" style="padding:7px 18px;font-size:12.5px;margin-left:auto;">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== ATTENDANCE PAGE ==================== -->
  <div class="page" id="page-attendance">

    <!-- ── Me / My Team filter — visible for Manager & HR only ── -->
    <div id="attendanceScopeTabs" style="display:none;margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div class="tabs" style="margin-bottom:0;">
          <div class="tab active" data-scope="me"   onclick="scopeSwitch('att','me',this)">Me</div>
          <div class="tab"        data-scope="team" onclick="scopeSwitch('att','team',this)">My Team</div>
        </div>
        <!-- Searchable person dropdown — shown only in My Team scope -->
        <div id="attTeamDropdownWrap" style="display:none;position:relative;">
          <input
            id="attPersonSearch"
            type="text"
            class="form-input"
            placeholder="Search employee…"
            autocomplete="off"
            oninput="filterTeamDropdown('att')"
            onfocus="openTeamDropdown('att')"
            style="width:220px;padding-right:28px;"
          >
          <span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--text-tertiary);">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          <div id="attPersonDropdown" style="display:none;position:absolute;top:calc(100% + 4px);left:0;min-width:220px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);box-shadow:var(--shadow-md);z-index:50;max-height:200px;overflow-y:auto;"></div>
        </div>
        <!-- Selected person chip -->
        <div id="attSelectedChip" style="display:none;align-items:center;gap:6px;padding:4px 10px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);font-size:12px;font-weight:500;color:var(--primary);">
          <span id="attSelectedName"></span>
          <span onclick="clearTeamSelection('att')" style="cursor:pointer;font-size:14px;line-height:1;color:var(--text-tertiary);">×</span>
        </div>
      </div>
    </div>

    <!-- ── ME VIEW: existing content untouched ── -->
    <div id="attendanceMeView">

    <!-- Change 2: Month & Year filter bar (default: January) -->
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <span style="font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:3px;vertical-align:middle;"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Period
      </span>
      <select id="attMonthFilter" class="form-input" style="width:auto;font-size:12px;padding:5px 10px;" onchange="applyAttMonthYearFilter()">
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
      <select id="attYearFilter" class="form-input" style="width:auto;font-size:12px;padding:5px 10px;" onchange="document.getElementById('attMonthFilter').value='0';applyAttMonthYearFilter()">
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
      <button class="btn-sm" onclick="resetAttMonthYearFilter()" style="font-size:11px;">Reset</button>
    </div>

    <!-- Compact stat cards matching leave panel style -->
    <div style="display:grid;grid-template-columns:repeat(3,auto) 1fr;gap:8px;margin-bottom:12px;align-items:center;flex-wrap:wrap;">
      <div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid #3B5BDB;border-radius:var(--radius);padding:10px 12px;display:flex;align-items:center;gap:10px;min-width:150px;transition:box-shadow 0.15s;" onmouseover="this.style.boxShadow='var(--shadow-sm)'" onmouseout="this.style.boxShadow='none'">
        <div style="width:32px;height:32px;border-radius:8px;background:#EDF2FF;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div style="min-width:0;">
          <div id="avgWorkHrsValue" style="font-size:17px;font-weight:700;color:#3B5BDB;letter-spacing:-0.5px;line-height:1;margin-bottom:2px;">—</div>
          <div style="font-size:10px;color:var(--text-secondary);font-weight:500;text-transform:uppercase;letter-spacing:0.5px;">Avg. Work Hrs</div>
          <span id="avgWorkHrsTag" style="font-size:9px;font-weight:600;padding:1px 5px;border-radius:3px;margin-top:3px;display:inline-block;background:#EEF2FF;color:#3B5BDB;">Calculating…</span>
        </div>
      </div>
      <div style="display:flex;align-items:flex-end;padding-bottom:2px;">
        <span style="font-size:12px;color:var(--primary);cursor:pointer;font-weight:400;">+3 INSIGHTS</span>
      </div>
      <!-- Change 2: Penalty Days now counts absent days -->
      <div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid #9BA3AF;border-radius:var(--radius);padding:10px 12px;display:flex;align-items:center;gap:10px;min-width:130px;transition:box-shadow 0.15s;" onmouseover="this.style.boxShadow='var(--shadow-sm)'" onmouseout="this.style.boxShadow='none'">
        <div style="width:32px;height:32px;border-radius:8px;background:#F8F9FB;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9BA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div style="min-width:0;">
          <div id="penaltyDaysValue" style="font-size:17px;font-weight:700;color:var(--text-primary);letter-spacing:-0.5px;line-height:1;margin-bottom:2px;">2</div>
          <div style="font-size:10px;color:var(--text-secondary);font-weight:500;text-transform:uppercase;letter-spacing:0.5px;">Penalty Days</div>
          <span id="penaltyDaysTag" style="font-size:9px;font-weight:600;padding:1px 5px;border-radius:3px;margin-top:3px;display:inline-block;background:#FFF0F0;color:#C92A2A;">2 Absent Days</span>
        </div>
      </div>
    </div>

    <!-- Calendar + Detail panel -->
    <div style="display:grid;grid-template-columns:1fr 360px;gap:14px;align-items:start;">

      <!-- Left: Calendar (greytHR style) -->
      <div style="background:white;border:1px solid var(--border);border-radius:6px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <button class="btn-sm" onclick="attChangeMonth(-1)" style="font-size:13px;color:var(--text-secondary);background:none;border:none;cursor:pointer;padding:4px 8px;">‹ Prev</button>
          <span id="attCalMonthLabel" >April 2026</span>
          <button class="btn-sm" onclick="attChangeMonth(1)" style="font-size:13px;color:var(--text-secondary);background:none;border:none;cursor:pointer;padding:4px 8px;">Next ›</button>
        </div>
        <!-- Day headers -->
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:4px;">
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Sun</div>
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Mon</div>
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Tue</div>
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Wed</div>
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Thu</div>
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Fri</div>
          <div style="text-align:center;font-size:11px;color:var(--text-tertiary);padding:4px 0;">Sat</div>
        </div>
        <!-- Calendar cells -->
        <div id="attCalDays" style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;"></div>
        <!-- Legend -->
        <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:14px;padding-top:12px;border-top:1px solid #F1F3F6;">
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:9px;height:9px;border-radius:50%;background:#2DB77B;display:inline-block;"></span>Present</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:9px;height:9px;border-radius:50%;background:#F59E0B;display:inline-block;"></span>Late</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:9px;height:9px;border-radius:50%;background:#F03E3E;display:inline-block;"></span>Absent</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:9px;height:9px;border-radius:50%;background:var(--primary);display:inline-block;"></span>On Leave</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:9px;height:9px;border-radius:3px;background:#E3E7EE;display:inline-block;"></span>Weekend</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="font-size:10px;">🅿</span>Public Holiday</div>
        </div>
      </div>

      <!-- Right: Day Detail (greytHR style) -->
      <div style="background:white;border:1px solid var(--border);border-radius:6px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);" id="attDayDetail">
        <div id="attDayDetailContent">
          <!-- Default: today's info -->
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border-subtle);">
            <div style="font-size:22px;font-weight:500;color:var(--text-primary);min-width:32px;">06</div>
            <div style="border-left:1px solid #E3E7EE;padding-left:12px;">
              <div style="font-size:12px;color:var(--text-primary);">10:00 To 19:00 (GEN)</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Shift : 10:00 to 19:00</div>
            </div>
            <div style="margin-left:auto;text-align:right;">
              <div style="font-size:12px;color:var(--text-primary);">10:00 to 19:00</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">Attendance Scheme</div>
            </div>
          </div>
          <div style="padding:12px 16px;border-bottom:1px solid var(--border-subtle);">
            <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:10px;">Processed on</div>
            <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;font-size:10px;color:var(--text-tertiary);margin-bottom:6px;">
              <div>First In</div><div>Last Out</div><div>Late In</div><div>Early Out</div><div>Total Work Hrs</div><div>Break Hrs</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;font-size:12px;color:var(--text-secondary);">
              <div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div>
            </div>
          </div>
          <div style="padding:12px 16px;border-bottom:1px solid var(--border-subtle);">
            <div style="font-size:12px;font-weight:500;color:var(--text-primary);margin-bottom:10px;">Status Details</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-tertiary);margin-bottom:6px;"><span>Status</span><span>Remarks</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-secondary);"><span>-</span><span>-</span></div>
          </div>
          <div style="padding:12px 16px;">
            <div style="font-size:12px;font-weight:500;color:var(--text-primary);margin-bottom:8px;">Session Details</div>
            <div style="font-size:11px;color:var(--text-tertiary);">No session data available</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Regularize Tab -->
    <div id="att-reg-tab" style="display:none;margin-top:16px;">
      <div class="card" style="max-width:600px">
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;">Attendance Regularization</div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div class="form-group"><div class="form-label">Date *</div><input class="form-input" type="date" value="2026-03-27"></div>
          <div class="form-grid">
            <div class="form-group"><div class="form-label">Actual Punch In</div><input class="form-input" type="time" value="09:15"></div>
            <div class="form-group"><div class="form-label">Actual Punch Out</div><input class="form-input" type="time" value="18:30"></div>
          </div>
          <div class="form-group"><div class="form-label">Reason *</div><textarea class="form-input" rows="3" placeholder="Please provide reason for regularization...">Was working from client office, biometric not available.</textarea></div>
          <div style="display:flex;gap:8px;">
            <button class="btn-sm primary" onclick="showToast('Regularization request submitted!','success')">Apply</button>
          <button class="btn-sm" onclick="showToast('Cancelled','info')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    </div><!-- /attendanceMeView -->

    <!-- ── TEAM VIEW: attendance data for selected person (2 blocks) ── -->
    <div id="attendanceTeamView" style="display:none;">
      <!-- Prompt shown before person is selected -->
      <div id="attTeamPrompt" style="padding:32px;text-align:center;color:var(--text-tertiary);font-size:13px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);">
        Select an employee from the dropdown above to view their attendance.
      </div>
      <!-- Two-block display for selected person -->
      <div id="attTeamBlocks" style="display:none;">

        <!-- ── Block 1: Today ── -->
        <div class="card" style="margin-bottom:12px;">
          <div class="section-header" style="margin-bottom:14px;">
            <div class="card-title" id="attTodayTitle">Today's Attendance</div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;" id="attTodayCards">
            <!-- Populated by renderAttTeamData() -->
          </div>
          <table>
            <thead><tr><th>Employee</th><th>Status</th><th>In Time</th><th>Out Time</th><th>Work Hrs</th></tr></thead>
            <tbody id="attTodayRow"><!-- Populated by renderAttTeamData() --></tbody>
          </table>
        </div>

        <!-- ── Block 2: Monthly View with Year/Month filters ── -->
        <div class="card">
          <div class="section-header" style="margin-bottom:14px;">
            <div class="card-title" id="attMonthlyTitle">Monthly Summary</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <select id="attTeamYear" class="form-input" style="width:90px;padding:5px 8px;" onchange="document.getElementById('attTeamMonth').value='0';renderAttTeamData()">
                <option value="2026" selected>2026</option>
                <option value="2025">2025</option>
              </select>
              <select id="attTeamMonth" class="form-input" style="width:110px;padding:5px 8px;" onchange="renderAttTeamData()">
                <option value="0" selected>January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
            </div>
          </div>
          <table>
            <thead><tr><th>Working Days</th><th>Present</th><th>Absent</th><th>Late</th><th>Avg Work Hrs</th><th>Attendance %</th></tr></thead>
            <tbody id="attMonthlyRow"><!-- Populated by renderAttTeamData() --></tbody>
          </table>
        </div>

      </div>
    </div><!-- /attendanceTeamView -->

  </div>

  <!-- ==================== LEAVE PAGE ==================== -->
  <div class="page" id="page-leave">

    <!-- ── Me / My Team filter — visible for Manager & HR only ── -->
    <div id="leaveScopeTabs" style="display:none;margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div class="tabs" style="margin-bottom:0;">
          <div class="tab active" data-scope="me"   onclick="scopeSwitch('leave','me',this)">Me</div>
          <div class="tab"        data-scope="team" onclick="scopeSwitch('leave','team',this)">My Team</div>
        </div>
        <!-- Searchable person dropdown — shown only in My Team scope -->
        <div id="leaveTeamDropdownWrap" style="display:none;position:relative;">
          <input
            id="leavePersonSearch"
            type="text"
            class="form-input"
            placeholder="Search employee…"
            autocomplete="off"
            oninput="filterTeamDropdown('leave')"
            onfocus="openTeamDropdown('leave')"
            style="width:220px;padding-right:28px;"
          >
          <span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--text-tertiary);">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          <div id="leavePersonDropdown" style="display:none;position:absolute;top:calc(100% + 4px);left:0;min-width:220px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);box-shadow:var(--shadow-md);z-index:50;max-height:200px;overflow-y:auto;"></div>
        </div>
        <!-- Selected person chip -->
        <div id="leaveSelectedChip" style="display:none;align-items:center;gap:6px;padding:4px 10px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);font-size:12px;font-weight:500;color:var(--primary);">
          <span id="leaveSelectedName"></span>
          <span onclick="clearTeamSelection('leave')" style="cursor:pointer;font-size:14px;line-height:1;color:var(--text-tertiary);">×</span>
        </div>
      </div>
    </div>

    <!-- ── ME VIEW: existing content untouched ── -->
    <div id="leaveMeView">
    <div class="leave-type-grid">
      <!-- Earned Leave -->
      <div class="leave-card" style="border-left:3px solid #0D9488;">
        <div class="leave-card-icon" style="background:#F0FDFA;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <div class="leave-card-body">
          <div class="leave-value" style="color:#0D9488;white-space:nowrap;">12<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/12</span></div>
          <div class="leave-label">Earned Leave</div>
        </div>
      </div>
      <!-- Sick Leave -->
      <div class="leave-card" style="border-left:3px solid #0EA5E9;">
        <div class="leave-card-icon" style="background:#F0F9FF;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="leave-card-body">
          <div class="leave-value" style="color:#0EA5E9;white-space:nowrap;">6<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/6</span></div>
          <div class="leave-label">Sick Leave</div>
        </div>
      </div>
      <!-- Casual Leave -->
      <div class="leave-card" style="border-left:3px solid #D97706;">
        <div class="leave-card-icon" style="background:#FFFBEB;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="leave-card-body">
          <div class="leave-value" style="color:#D97706;white-space:nowrap;">3<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/6</span></div>
          <div class="leave-label">Casual Leave</div>
        </div>
      </div>
      <!-- Comp-Off -->
      <div class="leave-card" style="border-left:3px solid #7C3AED;">
        <div class="leave-card-icon" style="background:#F5F3FF;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </div>
        <div class="leave-card-body">
          <div class="leave-value" style="color:#7C3AED;white-space:nowrap;">2<span style="font-size:0.72em;font-weight:600;letter-spacing:0;">/2</span></div>
          <div class="leave-label">Comp-Off</div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,'apply-tab')">Apply Leave</div>
      <div class="tab" onclick="switchTab(this,'my-leave-tab')">My Leaves</div>
      <div class="tab" id="holidaysTab" onclick="switchTab(this,'holidays-tab')">Holidays</div>
      <div class="tab" id="leaveApprovalTab" style="display:none;" onclick="switchTab(this,'leave-approval-tab')">Pending Approvals <span style="background:#B91C1C;color:white;font-size:10px;padding:1px 6px;border-radius:8px;margin-left:4px;font-weight:500;">3</span></div>
    </div>
    <div id="apply-tab">
      <div class="card" style="max-width:600px;">
        <div class="card-title" style="margin-bottom:8px;font-size:12px;">Apply for Leave</div>
        <div style="display:flex;flex-direction:column;gap:7px;">
          <div class="form-group" style="margin-bottom:0;"><div class="form-label" style="font-size:10px;margin-bottom:2px;">Leave Type *</div>
            <select class="form-input" style="font-size:11.5px;padding:4px 8px;height:28px;"><option>Earned Leave</option><option>Sick Leave</option><option>Casual Leave</option><option>Comp-Off</option><option>Maternity Leave</option><option>Paternity Leave</option><option>Request for Comp Off</option><option>Work From Home</option><option>Restricted Holiday</option></select></div>
          <div class="form-grid" style="gap:8px;">
            <div class="form-group" style="margin-bottom:0;">
              <div class="form-label" style="font-size:10px;margin-bottom:2px;">From Date *</div>
              <div style="position:relative;">
                <input class="form-input" id="leaveFromDate" type="text" value="2026-04-05" readonly placeholder="Select date" onclick="openLeaveCalendar('from')" onchange="checkSandwichLeave()" style="cursor:pointer;background:var(--surface);width:100%;padding-right:28px;font-size:11.5px;padding-top:4px;padding-bottom:4px;height:28px;">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);pointer-events:none;"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <div class="form-label" style="font-size:10px;margin-bottom:2px;">To Date *</div>
              <div style="position:relative;">
                <input class="form-input" id="leaveToDate" type="text" value="2026-04-07" readonly placeholder="Select date" onclick="openLeaveCalendar('to')" onchange="checkSandwichLeave()" style="cursor:pointer;background:var(--surface);width:100%;padding-right:28px;font-size:11.5px;padding-top:4px;padding-bottom:4px;height:28px;">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);pointer-events:none;"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
            </div>
          </div>
          <!-- Holiday Calendar Picker Popup -->
          <div id="leaveCalPopup" style="display:none;position:fixed;z-index:9000;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);padding:16px;width:320px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
              <button onclick="lvcalChangeMonth(-1)" style="width:26px;height:26px;border-radius:6px;border:1px solid var(--border);background:var(--bg);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">‹</button>
              <span id="lvcalMonthLabel" style="font-size:12.5px;font-weight:600;color:var(--text-primary);"></span>
              <button onclick="lvcalChangeMonth(1)" style="width:26px;height:26px;border-radius:6px;border:1px solid var(--border);background:var(--bg);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">›</button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:6px;">
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">S</div>
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">M</div>
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">T</div>
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">W</div>
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">T</div>
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">F</div>
              <div style="text-align:center;font-size:9.5px;font-weight:600;color:var(--text-tertiary);padding:3px 0;">S</div>
            </div>
            <div id="lvcalDays" style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;"></div>
            <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;padding-top:8px;border-top:1px solid var(--border-subtle);">
              <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:3px;background:#DCFCE7;border:1px solid #16A34A;display:inline-block;"></span>National Holiday</div>
              <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:3px;background:#EDE9FE;border:1px solid #7C3AED;display:inline-block;"></span>Regional</div>
              <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:3px;background:#F1F5F9;border:1px solid #CBD5E1;display:inline-block;"></span>Weekend</div>
            </div>
            <div style="display:flex;justify-content:flex-end;margin-top:10px;"><button onclick="closeLeaveCalendar()" style="font-size:11.5px;padding:4px 12px;border:1px solid var(--border);border-radius:5px;background:var(--bg);cursor:pointer;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">Close</button></div>
          </div>
          <!-- Sandwich Case warning -->
          <div id="sandwichWarning" style="display:none;background:#FFF7ED;border:1px solid #FED7AA;border-radius:var(--radius-sm);padding:6px 10px;font-size:11px;color:#92400E;">
            <div style="display:flex;align-items:flex-start;gap:6px;">
              <span style="font-size:13px;flex-shrink:0;">⚠️</span>
              <div>
                <div style="font-weight:600;margin-bottom:2px;">Sandwich Leave Policy Applies</div>
                <div>Your selected dates span across a weekend or holiday. Intervening days count as leave. 3 consecutive leaves require prior approval.</div>
              </div>
            </div>
          </div>
          <!-- Consecutive leave restriction notice -->
          <div id="consecutiveLeaveBlock" style="display:none;background:#FFF0F0;border:1px solid #FECACA;border-radius:var(--radius-sm);padding:6px 10px;font-size:11px;color:#991B1B;">
            <div style="display:flex;align-items:flex-start;gap:6px;">
              <span style="font-size:13px;flex-shrink:0;">🚫</span>
              <div>
                <div style="font-weight:600;margin-bottom:2px;">3 Consecutive Leaves Not Allowed</div>
                <div>Restricted under the Sandwich Case rule. Please adjust dates or contact HR.</div>
              </div>
            </div>
          </div>
          <div class="form-group" style="margin-bottom:0;"><div class="form-label" style="font-size:10px;margin-bottom:2px;">Reason *</div><textarea class="form-input" rows="2" maxlength="1000" placeholder="Please provide reason for leave... (max 1000 characters)" style="resize:vertical;min-height:44px;font-size:11.5px;padding:4px 8px;"></textarea></div>

          <!-- CC (Carbon Copy) -->
          <div class="form-group" style="margin-bottom:0;">
            <div class="form-label" style="font-size:10px;margin-bottom:2px;display:flex;align-items:center;gap:5px;">
              CC
              <span style="font-size:9.5px;font-weight:400;color:var(--text-tertiary);">(Notified only — no approval impact)</span>
            </div>
            <div id="lv_cc_wrap" style="border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);min-height:28px;padding:2px 7px;display:flex;flex-wrap:wrap;gap:3px;align-items:center;cursor:text;transition:var(--ease);" onclick="document.getElementById('lv_cc_input').focus()">
              <div id="lv_cc_tags" style="display:contents;"></div>
              <input type="text" id="lv_cc_input" list="lv_cc_options" placeholder="Add recipient…" style="border:none;outline:none;background:transparent;font-size:11.5px;font-family:var(--font);color:var(--text-primary);min-width:110px;flex:1;padding:2px 0;" onkeydown="lvCCKeydown(event)" oninput="lvCCInput(event)">
              <datalist id="lv_cc_options">
                <option value="Sarah Mitchell (Manager)">
                <option value="Amit Sharma (Manager)">
                <option value="Priya Nair (HR)">
                <option value="Rahul Singh">
                <option value="Meera Patel">
                <option value="Sunita HR Admin (HR)">
              </datalist>
            </div>
            <div style="font-size:9.5px;color:var(--text-tertiary);margin-top:2px;">Press <kbd style="font-family:var(--mono);background:var(--border-subtle);border:1px solid var(--border);border-radius:3px;padding:0 3px;font-size:9px;">Enter</kbd> or <kbd style="font-family:var(--mono);background:var(--border-subtle);border:1px solid var(--border);border-radius:3px;padding:0 3px;font-size:9px;">,</kbd> to add</div>
          </div>

          <div class="form-group" style="margin-bottom:0;">
            <div class="form-label" style="font-size:10px;margin-bottom:2px;">Attach Document</div>
            <label style="display:flex;align-items:center;gap:8px;padding:6px 10px;border:1.5px dashed var(--border);border-radius:7px;cursor:pointer;transition:var(--transition);background:var(--bg);" onmouseover="this.style.borderColor='var(--primary)';this.style.background='var(--primary-bg)'" onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--bg)'">
              <span style="font-size:16px;"></span>
              <div>
                <div style="font-size:11.5px;font-weight:600;color:var(--text);">Upload Document</div>
                <div style="font-size:10px;color:var(--text-muted);margin-top:1px;">PDF, JPG, PNG — max 5MB</div>
              </div>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="document.getElementById('attachedFileName').textContent=this.files[0]?'📄 '+this.files[0].name:'';showToast('Document attached successfully','success')">
            </label>
            <div id="attachedFileName" style="font-size:11px;color:var(--primary);margin-top:3px;font-weight:600;"></div>
          </div>
          <div style="background:var(--primary-muted);border-radius:var(--radius-sm);padding:6px 10px;font-size:11px;color:var(--primary-hover);">Leave will be routed to: <b>Sarah Mitchell (Manager)</b> for approval</div>
          <div style="display:flex;gap:8px;">
            <button class="btn-sm primary" onclick="submitLeaveWithSandwichCheck()">Apply</button>
            <button class="btn-sm" onclick="showToast('Leave request cancelled','info')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div id="my-leave-tab" style="display:none">
      <!-- Filter Bar — mirrors Expense Claim Panel -->
      <div id="myLeaveFilterWrap">
        <div class="lv-filter-left">
          <span class="lv-filter-label">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Show
          </span>
          <div id="myLeaveFilterSegment" role="group" aria-label="Leave status filter">
            <button class="task-seg-btn" data-value="all"      onclick="filterMyLeaves('all',this)">All      <span class="task-seg-count" id="myLeaveCount_all">3</span></button>
            <button class="task-seg-btn active"        data-value="pending"  onclick="filterMyLeaves('pending',this)">Pending  <span class="task-seg-count" id="myLeaveCount_pending">0</span></button>
            <button class="task-seg-btn"        data-value="approved" onclick="filterMyLeaves('approved',this)">Approved <span class="task-seg-count" id="myLeaveCount_approved">3</span></button>
          </div>
        </div>
        <!-- Date Range — compact icon trigger (matches Expense Claim) -->
        <div class="tf-dr-compact" id="myLeaveDRCompact">
          <button class="tf-dr-icon-btn" id="myLeaveDRTrigger" onclick="toggleMyLeaveDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="myLeaveDRPopover">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span id="myLeaveDRBtnLabel">Date Range</span>
            <span id="myLeaveDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
          </button>
          <button class="tf-dr-clear-icon" id="myLeaveDRClearBtn" onclick="clearMyLeaveDR()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div id="myLeaveDRPopover" role="dialog" aria-label="Date range filter">
            <div class="tf-pop-title">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Filter by Date Range
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="myLeaveDRFrom">From Date</label>
              <input type="date" id="myLeaveDRFrom" class="tf-pop-input" aria-label="From date">
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="myLeaveDRTo">To Date</label>
              <input type="date" id="myLeaveDRTo" class="tf-pop-input" aria-label="To date">
            </div>
            <div class="tf-pop-actions">
              <button class="tf-pop-apply" onclick="applyMyLeaveDRFromPopover()">Apply</button>
              <button class="tf-pop-reset" onclick="clearMyLeaveDR()">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <table>
          <thead><tr><th>Leave Type</th><th>From</th><th>To</th><th>Days</th><th>Apply Date</th><th>Approval Date</th><th>Status</th><th>Approved By</th></tr></thead>
          <tbody id="myLeaveTableBody">
            <tr data-leave-status="approved" data-leave-date="2026-03-20"><td>Earned Leave</td><td>Mar 20</td><td>Mar 21</td><td>2</td><td>Mar 18, 2026</td><td>Mar 19, 2026</td><td><span class="badge green">Approved</span></td><td>Sarah Mitchell</td></tr>
            <tr data-leave-status="approved" data-leave-date="2026-03-10"><td>Sick Leave</td><td>Mar 10</td><td>Mar 10</td><td>1</td><td>Mar 09, 2026</td><td>Mar 09, 2026</td><td><span class="badge green">Approved</span></td><td>Sarah Mitchell</td></tr>
            <tr data-leave-status="approved" data-leave-date="2026-02-14"><td>Earned Leave</td><td>Feb 14</td><td>Feb 15</td><td>2</td><td>Feb 12, 2026</td><td>Feb 13, 2026</td><td><span class="badge green">Approved</span></td><td>Sarah Mitchell</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="holidays-tab" style="display:none">
      <div class="card" style="padding:0;overflow:hidden;">

        <!-- Header bar -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--border);background:linear-gradient(135deg,#F0FDFA 0%,#F0F9FF 100%);">
          <div>
            <div style="font-size:13px;font-weight:600;color:var(--text-primary);letter-spacing:-0.2px;">Company Holiday Calendar</div>
            <div style="font-size:11px;color:var(--text-secondary);margin-top:1px;">2026 — Official Holidays</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <button onclick="changeCalMonth(-1)" style="width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:white;cursor:pointer;font-size:14px;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;transition:all 0.14s;" onmouseover="this.style.borderColor='var(--primary)';this.style.color='var(--primary)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-secondary)'">‹</button>
            <span id="calMonthLabel" style="font-size:12.5px;font-weight:600;min-width:108px;text-align:center;color:var(--text-primary);">April 2026</span>
            <button onclick="changeCalMonth(1)" style="width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:white;cursor:pointer;font-size:14px;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;transition:all 0.14s;" onmouseover="this.style.borderColor='var(--primary)';this.style.color='var(--primary)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-secondary)'">›</button>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 300px;gap:0;">

          <!-- Left: Calendar + Legend -->
          <div style="padding:16px 18px;border-right:1px solid var(--border);">

            <!-- Day headers -->
            <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:5px;">
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">SUN</div>
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">MON</div>
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">TUE</div>
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">WED</div>
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">THU</div>
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">FRI</div>
              <div style="text-align:center;font-size:10px;font-weight:600;color:var(--text-tertiary);padding:4px 0;letter-spacing:0.4px;">SAT</div>
            </div>

            <!-- Calendar cells rendered by JS -->
            <div id="calDays" style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;"></div>

            <!-- Legend -->
            <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:14px;padding-top:12px;border-top:1px solid var(--border-subtle);">
              <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--text-secondary);">
                <span style="width:10px;height:10px;border-radius:3px;background:#DCFCE7;border:1px solid #16A34A;display:inline-block;"></span>National Holiday
              </div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--text-secondary);">
                <span style="width:10px;height:10px;border-radius:3px;background:#EDE9FE;border:1px solid #7C3AED;display:inline-block;"></span>Regional / Other
              </div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--text-secondary);">
                <span style="width:10px;height:10px;border-radius:3px;background:#F1F5F9;border:1px solid #CBD5E1;display:inline-block;"></span>Weekend
              </div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--text-secondary);">
                <span style="width:10px;height:10px;border-radius:50%;background:var(--primary);display:inline-block;"></span>Today
              </div>
            </div>
          </div>

          <!-- Right: Holiday List -->
          <div style="padding:16px 18px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
              <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Holiday List</div>
              <span style="font-size:10px;font-weight:600;background:#F0FDFA;color:var(--primary);padding:2px 7px;border-radius:8px;border:1px solid var(--primary-border);">5 Holidays</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">

              <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F8FAFC;border-radius:7px;border:1px solid var(--border);transition:all 0.14s;cursor:default;" onmouseover="this.style.background='#F0FDFA';this.style.borderColor='var(--primary-border)'" onmouseout="this.style.background='#F8FAFC';this.style.borderColor='var(--border)'">
                <div style="width:34px;height:34px;border-radius:7px;background:#DCFCE7;border:1px solid #16A34A;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
                  <div style="font-size:13px;font-weight:700;color:#15803D;line-height:1;">26</div>
                  <div style="font-size:8px;font-weight:600;color:#16A34A;letter-spacing:0.3px;">JAN</div>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Republic Day</div>
                  <div style="font-size:10px;color:var(--text-tertiary);margin-top:1px;">Monday · Gazetted</div>
                </div>
                <span style="font-size:9px;font-weight:600;background:#DCFCE7;color:#15803D;padding:2px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0;">National</span>
              </div>

              <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F8FAFC;border-radius:7px;border:1px solid var(--border);transition:all 0.14s;cursor:default;" onmouseover="this.style.background='#F0FDFA';this.style.borderColor='var(--primary-border)'" onmouseout="this.style.background='#F8FAFC';this.style.borderColor='var(--border)'">
                <div style="width:34px;height:34px;border-radius:7px;background:#DCFCE7;border:1px solid #16A34A;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
                  <div style="font-size:13px;font-weight:700;color:#15803D;line-height:1;">14</div>
                  <div style="font-size:8px;font-weight:600;color:#16A34A;letter-spacing:0.3px;">APR</div>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Dr. Ambedkar Jayanti</div>
                  <div style="font-size:10px;color:var(--text-tertiary);margin-top:1px;">Tuesday · Gazetted</div>
                </div>
                <span style="font-size:9px;font-weight:600;background:#DCFCE7;color:#15803D;padding:2px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0;">National</span>
              </div>

              <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F8FAFC;border-radius:7px;border:1px solid var(--border);transition:all 0.14s;cursor:default;" onmouseover="this.style.background='#EDE9FE';this.style.borderColor='#C4B5FD'" onmouseout="this.style.background='#F8FAFC';this.style.borderColor='var(--border)'">
                <div style="width:34px;height:34px;border-radius:7px;background:#EDE9FE;border:1px solid #7C3AED;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
                  <div style="font-size:13px;font-weight:700;color:#5B21B6;line-height:1;">18</div>
                  <div style="font-size:8px;font-weight:600;color:#7C3AED;letter-spacing:0.3px;">APR</div>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Good Friday</div>
                  <div style="font-size:10px;color:var(--text-tertiary);margin-top:1px;">Friday · Gazetted</div>
                </div>
                <span style="font-size:9px;font-weight:600;background:#EDE9FE;color:#5B21B6;padding:2px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0;">Regional</span>
              </div>

              <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F8FAFC;border-radius:7px;border:1px solid var(--border);transition:all 0.14s;cursor:default;" onmouseover="this.style.background='#F0FDFA';this.style.borderColor='var(--primary-border)'" onmouseout="this.style.background='#F8FAFC';this.style.borderColor='var(--border)'">
                <div style="width:34px;height:34px;border-radius:7px;background:#DCFCE7;border:1px solid #16A34A;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
                  <div style="font-size:13px;font-weight:700;color:#15803D;line-height:1;">15</div>
                  <div style="font-size:8px;font-weight:600;color:#16A34A;letter-spacing:0.3px;">AUG</div>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Independence Day</div>
                  <div style="font-size:10px;color:var(--text-tertiary);margin-top:1px;">Saturday · Gazetted</div>
                </div>
                <span style="font-size:9px;font-weight:600;background:#DCFCE7;color:#15803D;padding:2px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0;">National</span>
              </div>

              <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F8FAFC;border-radius:7px;border:1px solid var(--border);transition:all 0.14s;cursor:default;" onmouseover="this.style.background='#F0FDFA';this.style.borderColor='var(--primary-border)'" onmouseout="this.style.background='#F8FAFC';this.style.borderColor='var(--border)'">
                <div style="width:34px;height:34px;border-radius:7px;background:#DCFCE7;border:1px solid #16A34A;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
                  <div style="font-size:13px;font-weight:700;color:#15803D;line-height:1;">02</div>
                  <div style="font-size:8px;font-weight:600;color:#16A34A;letter-spacing:0.3px;">OCT</div>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Gandhi Jayanti</div>
                  <div style="font-size:10px;color:var(--text-tertiary);margin-top:1px;">Friday · Gazetted</div>
                </div>
                <span style="font-size:9px;font-weight:600;background:#DCFCE7;color:#15803D;padding:2px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0;">National</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Leave Approval Tab — only visible to Manager & HR Admin -->
    <div id="leave-approval-tab" style="display:none">
      <!-- Filter Bar — identical to My Leaves -->
      <div id="leaveApprovalFilterWrap">
        <div class="lv-filter-left">
          <span class="lv-filter-label">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Show
          </span>
          <div id="leaveApprovalFilterSegment" role="group" aria-label="Leave approval status filter">
            <button class="task-seg-btn active" data-value="all"      onclick="filterLeaveApprovals('all',this)">All      <span class="task-seg-count" id="leaveApprovalCount_all">3</span></button>
            <button class="task-seg-btn"        data-value="pending"  onclick="filterLeaveApprovals('pending',this)">Pending  <span class="task-seg-count" id="leaveApprovalCount_pending">3</span></button>
            <button class="task-seg-btn"        data-value="approved" onclick="filterLeaveApprovals('approved',this)">Approved <span class="task-seg-count" id="leaveApprovalCount_approved">0</span></button>
          </div>
        </div>
        <!-- Date Range — compact icon trigger (matches My Leaves) -->
        <div class="tf-dr-compact" id="leaveApprovalDRCompact">
          <button class="tf-dr-icon-btn" id="leaveApprovalDRTrigger" onclick="toggleLeaveApprovalDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="leaveApprovalDRPopover">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span id="leaveApprovalDRBtnLabel">Date Range</span>
            <span id="leaveApprovalDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
          </button>
          <button class="tf-dr-clear-icon" id="leaveApprovalDRClearBtn" onclick="clearLeaveApprovalDR()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div id="leaveApprovalDRPopover" role="dialog" aria-label="Date range filter">
            <div class="tf-pop-title">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Filter by Date Range
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="leaveApprovalDRFrom">From Date</label>
              <input type="date" id="leaveApprovalDRFrom" class="tf-pop-input" aria-label="From date">
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="leaveApprovalDRTo">To Date</label>
              <input type="date" id="leaveApprovalDRTo" class="tf-pop-input" aria-label="To date">
            </div>
            <div class="tf-pop-actions">
              <button class="tf-pop-apply" onclick="applyLeaveApprovalDRFromPopover()">Apply</button>
              <button class="tf-pop-reset" onclick="clearLeaveApprovalDR()">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Approval Tasks data — Leave type only, My Leaves column layout + Employee Name -->
      <div class="card">
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Apply Date</th>
              <th>Approval Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="leaveApprovalTableBody">
            <tr data-la-status="pending" data-la-date="2026-04-05">
              <td><b>Amit Sharma</b></td>
              <td>Earned Leave</td>
              <td>Apr 5</td>
              <td>Apr 7</td>
              <td>3</td>
              <td>Apr 3, 2026</td>
              <td>—</td>
              <td><span class="badge amber">Pending</span></td>
              <td>
                <button class="approve-btn approve" onclick="showToast('Leave approved!','success')">Approve</button>
                <button class="approve-btn reject" onclick="showToast('Leave rejected','error')">Reject</button>
              </td>
            </tr>
            <tr data-la-status="pending" data-la-date="2026-04-02">
              <td><b>Priya Nair</b></td>
              <td>Travel Reimbursement</td>
              <td>Apr 2</td>
              <td>Apr 2</td>
              <td>1</td>
              <td>Apr 1, 2026</td>
              <td>—</td>
              <td><span class="badge amber">Pending</span></td>
              <td>
                <button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button>
                <button class="approve-btn reject" onclick="showToast('Rejected','error')">Reject</button>
              </td>
            </tr>
            <tr data-la-status="pending" data-la-date="2026-04-04">
              <td><b>Rahul Singh</b></td>
              <td>Work From Home</td>
              <td>Apr 4</td>
              <td>Apr 4</td>
              <td>1</td>
              <td>Apr 3, 2026</td>
              <td>—</td>
              <td><span class="badge amber">Pending</span></td>
              <td>
                <button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button>
                <button class="approve-btn reject" onclick="showToast('Rejected','error')">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div><!-- /leaveMeView -->

    <!-- ── TEAM VIEW: leave data for selected person ── -->
    <div id="leaveTeamView" style="display:none;">
      <!-- Prompt shown before person is selected -->
      <div id="leaveTeamPrompt" style="padding:32px;text-align:center;color:var(--text-tertiary);font-size:13px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);">
        Select an employee from the dropdown above to view their leave data.
      </div>
      <!-- Leave balance cards for selected person -->
      <div id="leaveTeamCards" style="display:none;">
        <div class="leave-type-grid" style="margin-bottom:12px;" id="leaveTeamBalanceCards">
          <!-- Populated by renderLeaveTeamData() -->
        </div>
        <div class="card">
          <div class="section-header" style="margin-bottom:12px;">
            <div class="card-title" id="leaveTeamTableTitle">Leave History</div>
          </div>
          <!-- Team Leave Filter Bar — mirrors Expense Claim Panel -->
          <div id="teamLeaveFilterWrap" style="margin-bottom:12px;">
            <div class="lv-filter-left">
              <span class="lv-filter-label">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                Show
              </span>
              <div id="teamLeaveFilterSegment" role="group" aria-label="Team leave status filter">
                <button class="task-seg-btn" data-value="all"      onclick="filterTeamLeaves('all',this)">All      <span class="task-seg-count" id="teamLeaveCount_all">—</span></button>
                <button class="task-seg-btn active"        data-value="pending"  onclick="filterTeamLeaves('pending',this)">Pending  <span class="task-seg-count" id="teamLeaveCount_pending">—</span></button>
                <button class="task-seg-btn"        data-value="approved" onclick="filterTeamLeaves('approved',this)">Approved <span class="task-seg-count" id="teamLeaveCount_approved">—</span></button>
              </div>
            </div>
            <!-- Date Range — compact icon trigger (matches Expense Claim) -->
            <div class="tf-dr-compact" id="teamLeaveDRCompact">
              <button class="tf-dr-icon-btn" id="teamLeaveDRTrigger" onclick="toggleTeamLeaveDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="teamLeaveDRPopover">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span id="teamLeaveDRBtnLabel">Date Range</span>
                <span id="teamLeaveDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
              </button>
              <button class="tf-dr-clear-icon" id="teamLeaveDRClearBtn" onclick="clearTeamLeaveDR()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <div id="teamLeaveDRPopover" role="dialog" aria-label="Date range filter">
                <div class="tf-pop-title">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Filter by Date Range
                </div>
                <div class="tf-pop-row">
                  <label class="tf-pop-label" for="teamLeaveDRFrom">From Date</label>
                  <input type="date" id="teamLeaveDRFrom" class="tf-pop-input" aria-label="From date">
                </div>
                <div class="tf-pop-row">
                  <label class="tf-pop-label" for="teamLeaveDRTo">To Date</label>
                  <input type="date" id="teamLeaveDRTo" class="tf-pop-input" aria-label="To date">
                </div>
                <div class="tf-pop-actions">
                  <button class="tf-pop-apply" onclick="applyTeamLeaveDRFromPopover()">Apply</button>
                  <button class="tf-pop-reset" onclick="clearTeamLeaveDR()">Reset</button>
                </div>
              </div>
            </div>
          </div>
          <table>
            <thead><tr><th>Leave Type</th><th>From</th><th>To</th><th>Days</th><th>Status</th><th>Action</th></tr></thead>
            <tbody id="leaveTeamTableBody"><!-- Populated by renderLeaveTeamData() --></tbody>
          </table>
        </div>
      </div>
    </div><!-- /leaveTeamView -->

  </div>

  <!-- ==================== PAYROLL PAGE ==================== -->
  <div class="page" id="page-payroll">
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,'payslip-tab')">Payslip</div>
      <div class="tab" onclick="switchTab(this,'salary-tab')">Salary Structure</div>
      <div class="tab" onclick="switchTab(this,'payroll-history-tab')">History</div>
      <div class="tab" onclick="switchTab(this,'bank-details-tab')">Bank Details</div>
    </div>

    <!-- ── Payslip Tab ── -->
    <div id="payslip-tab">
      <div class="grid-2-1">
        <div class="payslip-preview">
          <div class="payslip-header">
            <div><div class="payslip-title">PeopleFlow Technologies</div><div class="payslip-period">Payslip — March 2026</div></div>
            <div style="text-align:right"><div id="payslipEmpInfo" style="font-size:12px;color:var(--text-secondary)">EMP-10042 · John Doe</div><div id="payslipDesignation" style="font-size:12px;color:var(--text-secondary)">Senior Software Engineer</div></div>
          </div>
          <div class="payslip-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:12px;">
              <div>
                <div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:5px">Earnings</div>
                <div class="payslip-row"><span>Basic Salary</span><b>₹75,000</b></div>
                <div class="payslip-row"><span>HRA</span><b>₹30,000</b></div>
                <div class="payslip-row"><span>Conveyance Allowance</span><b>₹5,000</b></div>
                <div class="payslip-row"><span>Special Allowance</span><b>₹18,500</b></div>
                <div class="payslip-row" style="font-weight:500"><span>Gross Earnings</span><span style="color:var(--primary)">₹1,28,500</span></div>
              </div>
              <div>
                <div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.7px;margin-bottom:5px">Deductions</div>
                <div class="payslip-row"><span>Provident Fund</span><b style="color:var(--danger)">-₹9,000</b></div>
                <div class="payslip-row"><span>Professional Tax</span><b style="color:var(--danger)">-₹200</b></div>
                <div class="payslip-row"><span>TDS (Income Tax)</span><b style="color:var(--danger)">-₹14,200</b></div>
                <div class="payslip-row" style="font-weight:500"><span>Total Deductions</span><span style="color:var(--danger)">-₹23,400</span></div>
              </div>
            </div>
            <div class="payslip-total"><span>Net Take-Home Pay</span><span>₹1,05,100</span></div>
            <div style="margin-top:12px;display:flex;gap:10px;">
              <button class="quick-btn primary" onclick="showToast('Payslip downloaded!','success')">Download PDF</button>
              <button class="quick-btn outline">Email Payslip</button>
            </div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div class="card">
            <div class="card-title" style="margin-bottom:8px">Recent Payslips</div>
            <div class="doc-card compact" onclick="showToast('Opening March payslip','info')"><div class="doc-icon" style="background:var(--accent-light)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><div><div class="doc-name">March 2026</div></div><div class="doc-actions" style="display:flex;gap:5px;"><button class="btn-sm" style="font-size:10.5px;padding:3px 9px;" onclick="event.stopPropagation();showToast('Viewing March 2026 payslip...','info')">View</button><button class="btn-sm" style="font-size:10.5px;padding:3px 9px;" onclick="event.stopPropagation();showToast('Downloading March 2026 payslip...','info')">Download</button></div></div>
            <div class="doc-card compact"><div class="doc-icon" style="background:var(--info-light)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><div><div class="doc-name">February 2026</div></div><div class="doc-actions" style="display:flex;gap:5px;"><button class="btn-sm" style="font-size:10.5px;padding:3px 9px;" onclick="event.stopPropagation();showToast('Viewing February 2026 payslip...','info')">View</button><button class="btn-sm" style="font-size:10.5px;padding:3px 9px;" onclick="event.stopPropagation();showToast('Downloading February 2026 payslip...','info')">Download</button></div></div>
            <div class="doc-card compact"><div class="doc-icon" style="background:var(--info-light)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><div><div class="doc-name">January 2026</div></div><div class="doc-actions" style="display:flex;gap:5px;"><button class="btn-sm" style="font-size:10.5px;padding:3px 9px;" onclick="event.stopPropagation();showToast('Viewing January 2026 payslip...','info')">View</button><button class="btn-sm" style="font-size:10.5px;padding:3px 9px;" onclick="event.stopPropagation();showToast('Downloading January 2026 payslip...','info')">Download</button></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Salary Structure Tab ── -->
    <div id="salary-tab" style="display:none">
      <div class="card">
        <div class="section-header" style="margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
            <div class="card-title" style="margin:0;">💼 Salary Structure</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <label style="font-size:12px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.4px;">Year</label>
              <select id="salaryStructureYearSelect" class="form-input" style="width:110px;padding:7px 10px;font-size:13px;" onchange="renderSalaryStructure()">
                <option value="2026">2025–26</option>
                <option value="2025">2024–25</option>
                <option value="2024">2023–24</option>
                <option value="2023">2022–23</option>
              </select>
            </div>
          </div>
        </div>
        <div style="max-width:520px;">
          <div id="salaryStructureCtc" style="background:linear-gradient(135deg,#F0FDFA 0%,#F0F9FF 100%);border-bottom:1px solid var(--primary-border);padding:12px 18px;margin-bottom:16px;"><div style="font-size:10px;font-weight:600;color:var(--primary);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Annual CTC</div><div id="salaryStructureCtcValue" style="font-size:22px;font-weight:500;font-family:var(--mono);color:var(--text-primary);letter-spacing:1px;line-height:1;">₹18,00,000</div></div>
          <div id="salaryStructureTable"></div>
        </div>
      </div>
    </div>

    <!-- ── History Tab (year dropdown, no Status, download all) ── -->
    <div id="payroll-history-tab" style="display:none">
      <div class="card" style="overflow:visible;">
        <div class="section-header" style="margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
            <div class="card-title" style="margin:0;">Salary History</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <label style="font-size:12px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.4px;">Year</label>
              <select id="historyYearSelect" class="form-input" style="width:110px;padding:7px 10px;font-size:13px;" onchange="renderSalaryHistory()">
                <option value="2026">2025–26</option>
                <option value="2025">2024–25</option>
                <option value="2024">2023–24</option>
                <option value="2023">2022–23</option>
              </select>
            </div>
          </div>
          <button class="btn-sm" onclick="downloadAllHistory()">Download All</button>
        </div>
        <div id="salaryHistoryTable"></div>
      </div>
    </div>

    <!-- ── Bank Details Tab ── -->
    <div id="bank-details-tab" style="display:none">
      <div style="max-width:640px;">
        <!-- View Mode -->
        <div id="bankViewMode">
          <div class="card" style="margin-bottom:16px;">
            <div class="section-header" style="margin-bottom:18px;">
              <div class="card-title">Bank Details</div>
              <button class="btn-sm primary" onclick="toggleBankEdit(true)">Edit Details</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:12px 0;border-bottom:1px solid var(--border);"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Account Holder Name</div><div style="font-size:14px;font-weight:500;color:var(--text);">John Doe</div></div>
              <div style="padding:12px 0;border-bottom:1px solid var(--border);"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Bank Name</div><div style="font-size:14px;font-weight:500;color:var(--text);">HDFC Bank</div></div>
              <div style="padding:12px 0;border-bottom:1px solid var(--border);"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Account Number</div><div style="font-size:14px;font-weight:500;color:var(--text);font-family:var(--mono);">XXXX XXXX 4521</div></div>
              <div style="padding:12px 0;border-bottom:1px solid var(--border);"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Account Type</div><div style="font-size:14px;font-weight:500;color:var(--text);">Savings</div></div>
              <div style="padding:12px 0;border-bottom:1px solid var(--border);"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">IFSC Code</div><div style="font-size:14px;font-weight:500;color:var(--text);font-family:var(--mono);">HDFC0001234</div></div>
              <div style="padding:12px 0;border-bottom:1px solid var(--border);"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Branch</div><div style="font-size:14px;font-weight:500;color:var(--text);">Koramangala, Bangalore</div></div>
              <div style="padding:12px 0;"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">UPI ID (Optional)</div><div style="font-size:14px;font-weight:500;color:var(--text);">john.doe@hdfcbank</div></div>
              <div style="padding:12px 0;"><div style="font-size:11px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Salary Credit Mode</div><div style="font-size:14px;font-weight:500;color:var(--text);">NEFT</div></div>
            </div>
            <div style="margin-top:16px;background:var(--accent-light);border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;color:var(--primary);display:flex;align-items:center;gap:8px;">
              <span>Bank details verified and active. Last updated: <b>June 2021</b></span>
            </div>
          </div>
          <div style="background:var(--info-light);border-radius:var(--radius-sm);padding:12px 16px;font-size:12px;color:var(--primary);font-weight:500;">
            ℹ️ Any changes to bank details require HR approval before they take effect. Your current details remain active until the request is approved.
          </div>
        </div>

        <!-- Edit Mode -->
        <div id="bankEditMode" style="display:none;">
          <div class="card">
            <div class="section-header" style="margin-bottom:20px;">
              <div class="card-title">✏️ Edit Bank Details</div>
            </div>
            <div style="background:var(--warning-light);border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;color:#92400E;font-weight:600;margin-bottom:20px;display:flex;align-items:center;gap:8px;">
              Changes will be sent to HR for approval. Your existing details remain active until approved.
            </div>
            <div style="display:flex;flex-direction:column;gap:14px;">
              <div class="form-grid">
                <div class="form-group"><div class="form-label">Account Holder Name *</div><input id="bankName" class="form-input" value="John Doe"></div>
                <div class="form-group"><div class="form-label">Bank Name *</div>
                  <select id="bankBankName" class="form-input">
                    <option selected>HDFC Bank</option><option>State Bank of India</option><option>ICICI Bank</option><option>Axis Bank</option><option>Kotak Mahindra Bank</option><option>Punjab National Bank</option><option>Bank of Baroda</option><option>Canara Bank</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group"><div class="form-label">Account Number *</div><input id="bankAccNo" class="form-input" placeholder="Enter full account number" type="text" style="font-family:var(--mono);" value="XXXX XXXX 4521"></div>
                <div class="form-group"><div class="form-label">Confirm Account Number *</div><input id="bankAccNoConfirm" class="form-input" placeholder="Re-enter account number" type="text" style="font-family:var(--mono);"></div>
              </div>
              <div class="form-grid">
                <div class="form-group"><div class="form-label">IFSC Code *</div><input id="bankIfsc" class="form-input" value="HDFC0001234" style="font-family:var(--mono);" oninput="this.value=this.value.toUpperCase()"></div>
                <div class="form-group"><div class="form-label">Account Type *</div>
                  <select id="bankAccType" class="form-input"><option selected>Savings</option><option>Current</option></select>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group"><div class="form-label">Branch Name</div><input id="bankBranch" class="form-input" value="Koramangala, Bangalore"></div>
                <div class="form-group"><div class="form-label">UPI ID (Optional)</div><input id="bankUpi" class="form-input" value="john.doe@hdfcbank"></div>
              </div>
              <div class="form-group"><div class="form-label">Reason for Change *</div><textarea id="bankReason" class="form-input" rows="3" placeholder="Briefly describe why you are updating bank details (e.g., changed bank, new account opened)..."></textarea></div>
              <div class="form-group"><div class="form-label">Upload Supporting Document (Cancelled Cheque / Passbook)</div>
                <label style="display:flex;align-items:center;gap:10px;padding:10px 14px;border:1.5px dashed var(--border);border-radius:9px;cursor:pointer;background:var(--bg);" onmouseover="this.style.borderColor='var(--primary)';this.style.background='var(--primary-bg)'" onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--bg)'">
                  <span style="font-size:20px;"></span>
                  <div><div style="font-size:12.5px;font-weight:600;color:var(--text);">Attach document</div><div style="font-size:11px;color:var(--text-muted);">PDF, JPG, PNG — max 5MB</div></div>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="document.getElementById('bankDocName').textContent=this.files[0]?'📄 '+this.files[0].name:''">
                </label>
                <div id="bankDocName" style="font-size:12px;color:var(--primary);margin-top:4px;font-weight:600;"></div>
              </div>
              <div style="display:flex;gap:10px;margin-top:4px;">
                <button class="btn-sm primary" onclick="submitBankEdit()">Submit</button>
                <button class="btn-sm" onclick="toggleBankEdit(false)">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== TAX DOCUMENTS PAGE ==================== -->
  <div class="page" id="page-taxdocs">
    <div style="background:var(--warning-light,#FFFBEB);border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;color:#92400E;margin-bottom:14px;font-weight:600;display:flex;align-items:center;gap:8px;border:1px solid #FDE68A;">⚠️ Tax documents are confidential. Please do not share with unauthorised persons.</div>

    <!-- Top-level Tax Docs tabs -->
    <div class="tabs" style="margin-bottom:0;">
      <div class="tab active" onclick="switchTab(this,'taxdocs-main-tab')">All Documents</div>
      <div class="tab" onclick="switchTab(this,'taxdocs-itdecl-tab')">IT Declaration</div>
      <div class="tab" onclick="switchTab(this,'taxdocs-poi-tab')">Proof of Investment</div>
      <div class="tab" onclick="switchTab(this,'taxdocs-ytd-tab')">YTD Reports</div>
    </div>

    <!-- ── All Documents ── -->
    <div id="taxdocs-main-tab">
      <div class="card">
        <div class="section-header" style="margin-bottom:16px;">
          <div class="card-title" id="taxdocs-main-title">Tax Documents — FY 2025-26</div>
          <div style="display:flex;gap:8px;align-items:center;">
            <select class="form-input" id="taxdocs-fy-select" style="font-size:12px;padding:5px 10px;width:auto;" onchange="filterTaxDocsByFY(this.value)">
              <option value="2025-26">FY 2025-26</option>
              <option value="2024-25">FY 2024-25</option>
              <option value="2023-24">FY 2023-24</option>
            </select>
            <button class="btn-sm primary" onclick="showToast('All tax documents downloaded','info')">Download All</button>
          </div>
        </div>

        <!-- FY 2025-26 documents -->
        <div id="taxdocs-fy-2025-26">
          <div class="doc-card"><div class="doc-icon" style="background:#F0FDFA;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 12BB — FY 2025-26</div><div class="doc-meta">Investment Declaration · In Progress · Deadline: Mar 31, 2026</div></div><div class="doc-actions"><span class="badge amber">Pending</span><button class="btn-sm primary" onclick="showToast('Form 12BB opened for editing','info')">Submit</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#F5F3FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">PF Statement — FY 2025-26 <span style="font-size:10px;font-weight:500;color:var(--text-tertiary);background:var(--border-subtle);border:1px solid var(--border);border-radius:4px;padding:1px 6px;margin-left:5px;vertical-align:middle;">Optional</span></div><div class="doc-meta">EPFO · Last updated Jan 2026 · PDF · 215 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('PF Statement downloading...','info')">Download</button></div></div>
          <div style="padding:10px 14px;font-size:11.5px;color:var(--text-tertiary);background:var(--bg);border-radius:var(--radius-sm);border:1px dashed var(--border);text-align:center;">Form 16 for FY 2025-26 will be available after June 2026.</div>
        </div>

        <!-- FY 2024-25 documents -->
        <div id="taxdocs-fy-2024-25" style="display:none;">
          <div class="doc-card"><div class="doc-icon" style="background:#FFFBEB;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 16 — FY 2024-25</div><div class="doc-meta">TDS Certificate · Issued June 2025 · PDF · 340 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('Form 16 downloading...','info')">Download</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#F0FDFA;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 12BB — FY 2024-25</div><div class="doc-meta">Investment Declaration · Submitted Mar 28, 2025 · PDF · 190 KB</div></div><div class="doc-actions"><span class="badge green">Submitted</span><button class="btn-sm primary" onclick="showToast('Form 12BB downloading...','info')">Download</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#F5F3FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">PF Statement — FY 2024-25 <span style="font-size:10px;font-weight:500;color:var(--text-tertiary);background:var(--border-subtle);border:1px solid var(--border);border-radius:4px;padding:1px 6px;margin-left:5px;vertical-align:middle;">Optional</span></div><div class="doc-meta">EPFO · Last updated Jan 2025 · PDF · 210 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('PF Statement downloading...','info')">Download</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#EFF6FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 26AS — FY 2024-25</div><div class="doc-meta">Annual Tax Statement · Issued Sep 2025 · PDF · 180 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('Form 26AS downloading...','info')">Download</button></div></div>
        </div>

        <!-- FY 2023-24 documents -->
        <div id="taxdocs-fy-2023-24" style="display:none;">
          <div class="doc-card"><div class="doc-icon" style="background:#FFFBEB;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 16 — FY 2023-24</div><div class="doc-meta">TDS Certificate · Issued June 2024 · PDF · 325 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('Form 16 downloading...','info')">Download</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#F0FDFA;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 12BB — FY 2023-24</div><div class="doc-meta">Investment Declaration · Submitted Mar 25, 2024 · PDF · 175 KB</div></div><div class="doc-actions"><span class="badge green">Submitted</span><button class="btn-sm primary" onclick="showToast('Form 12BB downloading...','info')">Download</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#F5F3FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">PF Statement — FY 2023-24 <span style="font-size:10px;font-weight:500;color:var(--text-tertiary);background:var(--border-subtle);border:1px solid var(--border);border-radius:4px;padding:1px 6px;margin-left:5px;vertical-align:middle;">Optional</span></div><div class="doc-meta">EPFO · Last updated Jan 2024 · PDF · 198 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('PF Statement downloading...','info')">Download</button></div></div>
          <div class="doc-card"><div class="doc-icon" style="background:#EFF6FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Form 26AS — FY 2023-24</div><div class="doc-meta">Annual Tax Statement · Issued Sep 2024 · PDF · 165 KB</div></div><div class="doc-actions"><span class="badge green">Available</span><button class="btn-sm primary" onclick="showToast('Form 26AS downloading...','info')">Download</button></div></div>
        </div>

      </div>
    </div>

    <!-- ── IT Declaration ── -->
    <div id="taxdocs-itdecl-tab" style="display:none;">
      <div class="card" style="margin-bottom:16px;">
        <div class="section-header" style="margin-bottom:4px;">
          <div>
            <div class="card-title" id="itDeclCardTitle">IT Declaration — FY 2025-26</div>
            <div style="font-size:11.5px;color:var(--text-secondary);margin-top:3px;">Declare your estimated investments and exemptions for TDS computation. Submit before the deadline to avoid excess tax deduction.</div>
          </div>
          <!-- Year-wise FY filter — prominent, top-right -->
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
            <span class="badge amber" id="itDeclStatusBadge">Pending Submission</span>
            <div style="display:flex;align-items:center;gap:6px;margin-top:4px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:5px 10px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span style="font-size:10.5px;font-weight:600;color:var(--text-secondary);white-space:nowrap;">Financial Year</span>
              <select id="itDeclHeaderFY" class="form-input" style="width:auto;font-size:11.5px;padding:3px 8px;border:none;background:transparent;font-weight:600;color:var(--primary);cursor:pointer;" onchange="switchITDeclHeaderFY(this.value)">
                <option value="2025-26" selected>FY 2025-26 (Current)</option>
                <option value="2024-25">FY 2024-25</option>
                <option value="2023-24">FY 2023-24</option>
                <option value="2022-23">FY 2022-23</option>
                <option value="2021-22">FY 2021-22</option>
              </select>
            </div>
          </div>
        </div>
        <div style="display:flex;gap:10px;margin:14px 0 6px;flex-wrap:wrap;">
          <div style="flex:1;min-width:160px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Tax Regime</div>
            <select id="taxRegimeDropdown" class="form-input" style="margin-top:6px;font-size:12.5px;font-weight:600;color:var(--text-primary);padding:4px 8px;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--surface);cursor:pointer;" onchange="selectTaxRegime(this.value==='Old Regime'?'old':'new')">
              <option value="Old Regime" selected>Old Regime</option>
              <option value="New Regime">New Regime</option>
            </select>
          </div>
          <div style="flex:1;min-width:160px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Submission Deadline</div>
            <div style="font-size:13px;font-weight:700;color:var(--primary);margin-top:4px;">Mar 31, 2026</div>
          </div>
          <div style="flex:1;min-width:160px;background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Declaration Status</div>
            <div style="font-size:13px;font-weight:700;color:var(--warning);margin-top:4px;">Draft Saved</div>
          </div>
          <div style="flex:1;min-width:160px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Declared Amount</div>
            <div style="font-size:13px;font-weight:700;color:var(--text-primary);margin-top:4px;">₹1,25,000</div>
          </div>
        </div>
      </div>
      <div class="card" style="max-width:700px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
          <div class="card-title" style="margin:0;">Declaration Form (Form 12BB)</div>
          <!-- Change 5: View Previous Data filter -->
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:11px;color:var(--text-secondary);font-weight:500;">View:</span>
            <select id="itDeclFYSelect" class="form-input" style="width:auto;font-size:11.5px;padding:4px 10px;" onchange="switchITDeclFY(this.value)">
              <option value="current" selected>FY 2025-26</option>
              <option value="2024-25">FY 2024-25</option>
              <option value="2023-24">FY 2023-24</option>
              <option value="2022-23">FY 2022-23</option>
            </select>
          </div>
        </div>
        <!-- Previous data notice (hidden by default) -->
        <div id="itDeclPrevNotice" style="display:none;background:var(--accent-muted);border:1px solid var(--accent-border);border-radius:var(--radius-sm);padding:9px 12px;font-size:12px;color:#0369A1;margin-bottom:14px;">
          📂 Viewing <b id="itDeclPrevFYLabel">FY 2024-25</b> declaration data. This is <b>read-only</b>. Switch to Current FY to make changes.
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:13px 16px;">
            <div style="font-size:11px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Section 80C — Investments (Max ₹1,50,000)</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="form-group"><div class="form-label">PPF / EPF Contribution (₹)</div><input class="form-input" type="number" placeholder="0" value="72000"/></div>
              <div class="form-group"><div class="form-label">ELSS / Mutual Fund (₹)</div><input class="form-input" type="number" placeholder="0" value="30000"/></div>
              <div class="form-group"><div class="form-label">Life Insurance Premium (₹)</div><input class="form-input" type="number" placeholder="0" value="23000"/></div>
              <div class="form-group"><div class="form-label">NSC / Tax Saving FD (₹)</div><input class="form-input" type="number" placeholder="0"/></div>
            </div>
          </div>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:13px 16px;">
            <div style="font-size:11px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Section 80D — Health Insurance</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="form-group"><div class="form-label">Self / Family Premium (₹)</div><input class="form-input" type="number" placeholder="0" value="18000"/></div>
              <div class="form-group"><div class="form-label">Parents Premium (₹)</div><input class="form-input" type="number" placeholder="0"/></div>
            </div>
          </div>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:13px 16px;">
            <div style="font-size:11px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">HRA Exemption</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="form-group">
                <div class="form-label">Monthly Rent Paid (₹)</div>
                <input class="form-input" id="hra_monthlyRent" type="number" placeholder="0" value="25000" oninput="checkLandlordPANRequired()"/>
              </div>
              <div class="form-group">
                <div class="form-label" id="landlordPANLabel">Landlord PAN</div>
                <input class="form-input" id="hra_landlordPAN" type="text" placeholder="ABCDE1234F"/>
                <span id="landlordPANHint" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">⚠️ PAN is mandatory when annual rent exceeds ₹1,00,000</span>
              </div>
              <div class="form-group"><div class="form-label">City Type</div><select class="form-input"><option>Metro</option><option>Non-Metro</option></select></div>
            </div>
          </div>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:13px 16px;">
            <div style="font-size:11px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Other Declarations</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="form-group"><div class="form-label">Home Loan Interest — Sec 24(b) (₹)</div><input class="form-input" type="number" placeholder="0"/></div>
              <div class="form-group"><div class="form-label">NPS Contribution — Sec 80CCD(1B) (₹)</div><input class="form-input" type="number" placeholder="0"/></div>
              <div class="form-group"><div class="form-label">Education Loan Interest — Sec 80E (₹)</div><input class="form-input" type="number" placeholder="0"/></div>
              <div class="form-group"><div class="form-label">Donations — Sec 80G (₹)</div><input class="form-input" type="number" placeholder="0"/></div>
            </div>
          </div>
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
            <button class="btn-sm primary" onclick="submitITDeclaration()">Submit Declaration</button>
            <button class="btn-sm" onclick="showToast('Draft saved','info')">Save Draft</button>
            <button class="btn-sm" onclick="cancelITDeclaration()" style="color:var(--danger);border-color:var(--danger);">Cancel</button>
            <span style="font-size:11px;color:var(--text-tertiary);margin-left:4px;">Last saved: Today, 10:42 AM</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Proof of Investment ── -->
    <div id="taxdocs-poi-tab" style="display:none;">
      <div class="card" style="margin-bottom:16px;">
        <div class="section-header" style="margin-bottom:4px;">
          <div>
            <div class="card-title" id="poiCardTitle">Proof of Investment — FY 2025-26</div>
            <div style="font-size:11.5px;color:var(--text-secondary);margin-top:3px;">Upload supporting documents for investments declared in your IT Declaration. All proofs must be submitted before the final proof deadline.</div>
          </div>
          <!-- Year-wise FY filter — matches IT Declaration pattern -->
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
            <span class="badge red" id="poiStatusBadge">2 Pending</span>
            <div style="display:flex;align-items:center;gap:6px;margin-top:4px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:5px 10px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span style="font-size:10.5px;font-weight:600;color:var(--text-secondary);white-space:nowrap;">Financial Year</span>
              <select id="poiHeaderFY" class="form-input" style="width:auto;font-size:11.5px;padding:3px 8px;border:none;background:transparent;font-weight:600;color:var(--primary);cursor:pointer;" onchange="switchPOIHeaderFY(this.value)">
                <option value="2025-26" selected>FY 2025-26 (Current)</option>
                <option value="2024-25">FY 2024-25</option>
                <option value="2023-24">FY 2023-24</option>
                <option value="2022-23">FY 2022-23</option>
                <option value="2021-22">FY 2021-22</option>
              </select>
            </div>
          </div>
        </div>
        <div style="display:flex;gap:10px;margin:14px 0 6px;flex-wrap:wrap;">
          <div style="flex:1;min-width:140px;background:var(--success-muted);border:1px solid #6EE7B7;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Proofs Submitted</div>
            <div style="font-size:18px;font-weight:700;color:var(--success);margin-top:4px;">3 / 5</div>
          </div>
          <div style="flex:1;min-width:140px;background:var(--danger-muted);border:1px solid #FECACA;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Rejected</div>
            <div style="font-size:18px;font-weight:700;color:var(--danger);margin-top:4px;">0</div>
          </div>
          <div style="flex:1;min-width:140px;background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Final Deadline</div>
            <div style="font-size:13px;font-weight:700;color:var(--warning);margin-top:4px;">Feb 28, 2026</div>
          </div>
        </div>
      </div>
      <div class="card" style="margin-bottom:16px;">
        <div class="card-title" style="margin-bottom:14px;">Submitted Proofs</div>
        <div class="doc-card"><div class="doc-icon" style="background:#F0FDFA;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">LIC Premium Receipt — FY 2025-26</div><div class="doc-meta">80C · Uploaded Jan 12, 2026 · PDF · 145 KB · Declared: ₹23,000</div></div><div class="doc-actions"><span class="badge green">Approved</span><button class="btn-sm" onclick="showToast('Downloading...','info')">View</button></div></div>
        <div class="doc-card"><div class="doc-icon" style="background:#F0FDFA;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">ELSS Statement — FY 2025-26</div><div class="doc-meta">80C · Uploaded Jan 14, 2026 · PDF · 210 KB · Declared: ₹30,000</div></div><div class="doc-actions"><span class="badge green">Approved</span><button class="btn-sm" onclick="showToast('Downloading...','info')">View</button></div></div>
        <div class="doc-card"><div class="doc-icon" style="background:#F0F9FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Health Insurance Premium — FY 2025-26</div><div class="doc-meta">80D · Uploaded Jan 16, 2026 · PDF · 98 KB · Declared: ₹18,000</div></div><div class="doc-actions"><span class="badge green">Approved</span><button class="btn-sm" onclick="showToast('Downloading...','info')">View</button></div></div>
        <div class="doc-card" style="border-color:#FECACA;"><div class="doc-icon" style="background:#FFF5F5;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Rent Receipts — Q3 FY 2025-26</div><div class="doc-meta">HRA · Not yet uploaded · Declared: ₹75,000 (3 months)</div></div><div class="doc-actions"><span class="badge red">Pending</span><button class="btn-sm primary" onclick="showToast('File browser opened','info')">Upload</button></div></div>
        <div class="doc-card" style="border-color:#FECACA;"><div class="doc-icon" style="background:#FFF5F5;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">PPF Passbook — FY 2025-26</div><div class="doc-meta">80C · Not yet uploaded · Declared: ₹72,000</div></div><div class="doc-actions"><span class="badge red">Pending</span><button class="btn-sm primary" onclick="showToast('File browser opened','info')">Upload</button></div></div>
      </div>
      <div class="card" style="max-width:600px;">
        <div class="card-title" style="margin-bottom:14px;">Upload New Proof</div>
        <div class="dropzone" onclick="showToast('File browser opened','info')" style="padding:20px;">
          <div class="dropzone-icon" style="font-size:28px;">📎</div>
          <div class="dropzone-text">Drag & Drop investment proofs here</div>
          <div class="dropzone-sub">PDF / JPG / PNG · Max 5MB per file</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px;">
          <div class="form-group"><div class="form-label">Investment Category *</div>
            <select class="form-input"><option>80C — PPF / EPF</option><option>80C — ELSS / Mutual Fund</option><option>80C — Life Insurance</option><option>80C — NSC / Tax Saving FD</option><option>80D — Health Insurance (Self)</option><option>80D — Health Insurance (Parents)</option><option>HRA — Rent Receipts</option><option>Sec 24(b) — Home Loan Interest</option><option>80CCD(1B) — NPS</option><option>80E — Education Loan</option><option>80G — Donations</option></select></div>
          <div class="form-group"><div class="form-label">Declared Amount (₹) *</div><input class="form-input" type="number" placeholder="Enter declared amount"/></div>
          <div class="form-group"><div class="form-label">Remarks</div><input class="form-input" type="text" placeholder="Optional notes for payroll team"/></div>
          <button class="btn-sm primary" style="align-self:flex-start;" onclick="showToast('Proof uploaded successfully!','success')">Upload Proof</button>
        </div>
      </div>
    </div>

    <!-- ── YTD Reports ── -->
    <div id="taxdocs-ytd-tab" style="display:none;">
      <div class="card" style="margin-bottom:16px;">
        <div class="section-header" style="margin-bottom:4px;">
          <div>
            <div class="card-title">YTD Reports — FY 2025-26</div>
            <div style="font-size:11.5px;color:var(--text-secondary);margin-top:3px;">Year-to-date summary of your earnings, deductions, and tax liability. Updated automatically after each payroll run.</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            <select class="form-input" style="font-size:11.5px;padding:5px 9px;width:auto;"><option>FY 2025-26</option><option>FY 2024-25</option><option>FY 2023-24</option></select>
            <button class="btn-sm primary" onclick="showToast('YTD Report downloaded','info')">Download PDF</button>
          </div>
        </div>
        <div style="display:flex;gap:10px;margin:14px 0 6px;flex-wrap:wrap;">
          <div style="flex:1;min-width:140px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Gross Earnings YTD</div>
            <div style="font-size:16px;font-weight:700;color:var(--primary);margin-top:4px;">₹11,40,000</div>
            <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">Apr–Dec 2025 (9 months)</div>
          </div>
          <div style="flex:1;min-width:140px;background:var(--danger-muted);border:1px solid #FECACA;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Total Deductions YTD</div>
            <div style="font-size:16px;font-weight:700;color:var(--danger);margin-top:4px;">₹2,89,800</div>
            <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">PF + TDS + PT</div>
          </div>
          <div style="flex:1;min-width:140px;background:var(--success-muted);border:1px solid #6EE7B7;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Net Take-Home YTD</div>
            <div style="font-size:16px;font-weight:700;color:var(--success);margin-top:4px;">₹8,50,200</div>
            <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">After all deductions</div>
          </div>
          <div style="flex:1;min-width:140px;background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius-sm);padding:12px 14px;">
            <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">TDS Deducted YTD</div>
            <div style="font-size:16px;font-weight:700;color:var(--warning);margin-top:4px;">₹1,27,800</div>
            <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">Income Tax (TDS)</div>
          </div>
        </div>
      </div>
      <div class="card" style="margin-bottom:16px;">
        <div class="card-title" style="margin-bottom:14px;">Month-wise Breakup</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <thead>
              <tr>
                <th style="text-align:left;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">Month</th>
                <th style="text-align:right;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">Basic</th>
                <th style="text-align:right;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">HRA</th>
                <th style="text-align:right;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">Gross</th>
                <th style="text-align:right;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">PF</th>
                <th style="text-align:right;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">TDS</th>
                <th style="text-align:right;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);">Net Pay</th>
                <th style="text-align:center;padding:8px 10px;font-size:10.5px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);"></th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Apr 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">May 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Jun 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Jul 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Aug 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Sep 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Oct 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;border-bottom:1px solid var(--border-subtle);">Nov 2025</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹75,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);">₹25,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;border-bottom:1px solid var(--border-subtle);font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;border-bottom:1px solid var(--border-subtle);"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
              <tr><td style="padding:8px 10px;">Dec 2025</td><td style="text-align:right;padding:8px 10px;">₹75,000</td><td style="text-align:right;padding:8px 10px;">₹25,000</td><td style="text-align:right;padding:8px 10px;font-weight:600;">₹1,26,667</td><td style="text-align:right;padding:8px 10px;color:var(--danger);">-₹9,000</td><td style="text-align:right;padding:8px 10px;color:var(--danger);">-₹14,200</td><td style="text-align:right;padding:8px 10px;font-weight:600;color:var(--success);">₹94,467</td><td style="text-align:center;padding:8px 10px;"><button class="btn-sm" onclick="showToast('Opening payslip...','info')">View</button></td></tr>
            </tbody>
            <tfoot>
              <tr style="background:var(--primary-muted);">
                <td style="padding:9px 10px;font-weight:700;color:var(--primary);border-top:2px solid var(--primary-border);">YTD Total</td>
                <td style="text-align:right;padding:9px 10px;font-weight:700;color:var(--primary);border-top:2px solid var(--primary-border);">₹6,75,000</td>
                <td style="text-align:right;padding:9px 10px;font-weight:700;color:var(--primary);border-top:2px solid var(--primary-border);">₹2,25,000</td>
                <td style="text-align:right;padding:9px 10px;font-weight:700;color:var(--primary);border-top:2px solid var(--primary-border);">₹11,40,003</td>
                <td style="text-align:right;padding:9px 10px;font-weight:700;color:var(--danger);border-top:2px solid var(--primary-border);">-₹81,000</td>
                <td style="text-align:right;padding:9px 10px;font-weight:700;color:var(--danger);border-top:2px solid var(--primary-border);">-₹1,27,800</td>
                <td style="text-align:right;padding:9px 10px;font-weight:700;color:var(--success);border-top:2px solid var(--primary-border);">₹8,50,203</td>
                <td style="border-top:2px solid var(--primary-border);"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="card" style="max-width:500px;">
        <div class="card-title" style="margin-bottom:14px;">Projected Tax Liability — FY 2025-26</div>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
          <div style="display:flex;justify-content:space-between;padding:8px 12px;background:var(--bg);border-radius:var(--radius-sm);"><span style="color:var(--text-secondary);">Estimated Annual Gross</span><span style="font-weight:600;">₹15,20,004</span></div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px;background:var(--bg);border-radius:var(--radius-sm);"><span style="color:var(--text-secondary);">Less: Standard Deduction</span><span style="font-weight:600;color:var(--danger);">-₹50,000</span></div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px;background:var(--bg);border-radius:var(--radius-sm);"><span style="color:var(--text-secondary);">Less: Sec 80C Investments</span><span style="font-weight:600;color:var(--danger);">-₹1,25,000</span></div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px;background:var(--bg);border-radius:var(--radius-sm);"><span style="color:var(--text-secondary);">Less: HRA Exemption</span><span style="font-weight:600;color:var(--danger);">-₹1,80,000</span></div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px;background:var(--bg);border-radius:var(--radius-sm);"><span style="color:var(--text-secondary);">Less: Sec 80D (Health Ins.)</span><span style="font-weight:600;color:var(--danger);">-₹18,000</span></div>
          <div style="display:flex;justify-content:space-between;padding:9px 12px;background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);"><span style="font-weight:700;color:var(--primary);">Taxable Income</span><span style="font-weight:700;color:var(--primary);">₹11,47,004</span></div>
          <div style="display:flex;justify-content:space-between;padding:9px 12px;background:var(--warning-muted);border:1px solid #FDE68A;border-radius:var(--radius-sm);"><span style="font-weight:700;color:var(--warning);">Projected Total Tax</span><span style="font-weight:700;color:var(--warning);">₹1,70,400</span></div>
          <div style="display:flex;justify-content:space-between;padding:9px 12px;background:var(--success-muted);border:1px solid #6EE7B7;border-radius:var(--radius-sm);"><span style="font-weight:700;color:var(--success);">TDS Already Deducted</span><span style="font-weight:700;color:var(--success);">₹1,27,800</span></div>
          <div style="display:flex;justify-content:space-between;padding:9px 12px;background:var(--danger-muted);border:1px solid #FECACA;border-radius:var(--radius-sm);"><span style="font-weight:700;color:var(--danger);">Remaining Tax Payable (3 months)</span><span style="font-weight:700;color:var(--danger);">₹42,600</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== DOCUMENTS PAGE ==================== -->
  <div class="page" id="page-documents">
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,'my-docs-tab')">My Documents</div>
      <div class="tab" onclick="switchTab(this,'company-docs-tab')">Company Documents</div>
      <div class="tab" onclick="switchTab(this,'upload-tab')">Upload Document</div>
    </div>
    <div id="my-docs-tab">
      <div class="doc-card"><div class="doc-icon" style="background:#FFF1F2;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E11D48" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Offer Letter — June 2021</div><div class="doc-meta">PDF · 245 KB · Uploaded Jun 15, 2021</div></div><div class="doc-actions"><span class="badge blue">v1</span><button class="btn-sm primary" onclick="showToast('Downloading...','info')">Download</button></div></div>
      <div class="doc-card"><div class="doc-icon" style="background:#FFFBEB;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Increment Letter — Apr 2025</div><div class="doc-meta">PDF · 180 KB · Uploaded Apr 1, 2025</div></div><div class="doc-actions"><span class="badge green">v2</span><button class="btn-sm primary" onclick="showToast('Downloading...','info')">Download</button></div></div>
      <div class="doc-card"><div class="doc-icon" style="background:#F0FDFA;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div><div><div class="doc-name">Aadhar Card</div><div class="doc-meta">PDF · 420 KB · Uploaded Jun 20, 2021</div></div><div class="doc-actions"><span class="badge blue">v1</span><button class="btn-sm primary" onclick="showToast('Downloading Aadhar Card...','info')">Download</button></div></div>
      <div class="doc-card"><div class="doc-icon" style="background:#F5F3FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">PAN Card</div><div class="doc-meta">JPG · 210 KB · Uploaded Jun 20, 2021</div></div><div class="doc-actions"><span class="badge blue">v1</span><button class="btn-sm primary" onclick="showToast('Downloading PAN Card...','info')">Download</button></div></div>
    </div>
    <div id="company-docs-tab" style="display:none">
      <div class="doc-card"><div class="doc-icon" style="background:var(--primary-muted)"></div><div><div class="doc-name">Employee Handbook 2026</div><div class="doc-meta">PDF · 2.4 MB · Updated Jan 2026</div></div><div class="doc-actions"><button class="btn-sm primary" onclick="showToast('Downloading...','info')">Download</button></div></div>
      <div class="doc-card"><div class="doc-icon" style="background:#F5F3FF;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="doc-name">Leave Policy Document</div><div class="doc-meta">PDF · 480 KB · Updated Jan 2026</div></div><div class="doc-actions"><button class="btn-sm primary" onclick="showToast('Downloading...','info')">Download</button></div></div>
      <div class="doc-card"><div class="doc-icon" style="background:var(--warning-light)">💻</div><div><div class="doc-name">Work From Home Policy</div><div class="doc-meta">PDF · 320 KB · Updated Mar 2026</div></div><div class="doc-actions"><button class="btn-sm primary" onclick="showToast('Downloading...','info')">Download</button></div></div>
      <div class="doc-card"><div class="doc-icon" style="background:var(--info-light)">🛡️</div><div><div class="doc-name">Code of Conduct Policy</div><div class="doc-meta">PDF · 560 KB · Updated Jan 2026</div></div><div class="doc-actions"><button class="btn-sm primary" onclick="showToast('Downloading...','info')">Download</button></div></div>
    </div>
    <div id="upload-tab" style="display:none">
      <div class="card" style="max-width:600px">
        <div class="card-title" style="margin-bottom:16px">Upload Document</div>
        <div class="dropzone" onclick="showToast('File browser opened','info')">
          <div class="dropzone-icon">📁</div>
          <div class="dropzone-text">Drag & Drop files here</div>
          <div class="dropzone-sub">or click to browse · Max 10MB · PDF, JPG, PNG, DOC</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px;">
          <div class="form-group"><div class="form-label">Document Type *</div>
            <select class="form-input"><option>Identity Proof</option><option>Address Proof</option><option>Educational Certificate</option><option>Experience Letter</option><option>Bank Document</option></select></div>
          <div class="form-group"><div class="form-label">Document Name *</div><input class="form-input" placeholder="e.g., Aadhar Card, Degree Certificate"></div>
          <button class="btn-sm primary" style="align-self:flex-start;" onclick="showToast('Document uploaded successfully!','success')">Submit</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== PEOPLE PAGE ==================== -->
  <div class="page" id="page-people">
    <div class="tabs" id="peopleTabs">
      <div class="tab active" onclick="switchTab(this,'org-chart-tab')">Org Chart</div>
      <div class="tab" onclick="switchTab(this,'directory-tab')">Directory</div>
      <div class="tab" id="onboardingTabBtn" onclick="switchTab(this,'onboarding-tab')">Onboarding</div>
    </div>

    <!-- ORG CHART TAB — Premium tree layout -->
    <div id="org-chart-tab">
      <div class="card" style="padding:0;overflow:hidden;">

        <!-- Toolbar -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--border);background:var(--bg);">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:12px;font-weight:600;color:var(--text-primary);">Organisation Structure</span>
          </div>
          <div style="display:flex;gap:6px;">
            <button class="btn-sm" onclick="showToast('Downloading org chart...','info')">Export PDF</button>
            <button class="btn-sm" onclick="showToast('Sharing link copied','success')">Share</button>
          </div>
        </div>

        <!-- Org Tree -->
        <div style="padding:28px 20px;overflow-x:auto;background:#FAFBFC;">
          <div id="orgTreeWrap" style="min-width:860px;position:relative;">

            <!-- SVG connector layer (drawn by JS after layout) -->
            <svg id="orgConnectorSvg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;" xmlns="http://www.w3.org/2000/svg"></svg>

            <!-- Level 0: CEO -->
            <div style="display:flex;justify-content:center;margin-bottom:0;">
              <div id="orgNode_ceo" class="org-tree-node ceo-node" onclick="showToast('Rajesh Mehta · CEO','info')">
                <div class="org-tree-avatar" style="background:linear-gradient(135deg,#0F766E,#14B8A6);">RM</div>
                <div class="org-tree-name">Rajesh Mehta</div>
                <div class="org-tree-title">Chief Executive Officer</div>
                <div class="org-tree-dept ceo">Leadership</div>
              </div>
            </div>

            <!-- Spacer row CEO → VPs -->
            <div style="height:44px;"></div>

            <!-- Level 1: VP row -->
            <div style="display:flex;justify-content:center;gap:24px;padding:0 40px;margin-bottom:0;">
              <div id="orgNode_sm" class="org-tree-node vp-node" onclick="showToast('Sarah Mitchell · VP Engineering','info')">
                <div class="org-tree-avatar" style="background:linear-gradient(135deg,#059669,#10B981);">SM</div>
                <div class="org-tree-name">Sarah Mitchell</div>
                <div class="org-tree-title">VP Engineering</div>
                <div class="org-tree-dept eng">Engineering</div>
              </div>
              <div id="orgNode_ap" class="org-tree-node vp-node" onclick="showToast('Anita Patel · VP HR','info')">
                <div class="org-tree-avatar" style="background:linear-gradient(135deg,#D97706,#F59E0B);">AP</div>
                <div class="org-tree-name">Anita Patel</div>
                <div class="org-tree-title">VP Human Resources</div>
                <div class="org-tree-dept hr">HR</div>
              </div>
              <div id="orgNode_vr" class="org-tree-node vp-node" onclick="showToast('Vikram Rao · VP Finance','info')">
                <div class="org-tree-avatar" style="background:linear-gradient(135deg,#DC2626,#EF4444);">VR</div>
                <div class="org-tree-name">Vikram Rao</div>
                <div class="org-tree-title">VP Finance</div>
                <div class="org-tree-dept fin">Finance</div>
              </div>
            </div>

            <!-- Spacer row VPs → L2 -->
            <div style="height:44px;"></div>

            <!-- Level 2: Individual contributors -->
            <div style="display:flex;justify-content:center;gap:24px;padding:0 16px;">

              <!-- Engineering sub-column -->
              <div style="flex:1;display:flex;gap:10px;justify-content:center;flex-wrap:nowrap;">
                <div id="orgNode_jd" class="org-tree-node leaf-node me-node" onclick="showToast('John Doe · Sr. Engineer','info')">
                  <div class="org-tree-avatar sm-av" style="background:linear-gradient(135deg,#0D9488,#14B8A6);">JD</div>
                  <div class="org-tree-name sm-nm">John Doe</div>
                  <div class="org-tree-title sm-ttl">Sr. Software Eng.</div>
                </div>
                <div id="orgNode_as" class="org-tree-node leaf-node" onclick="showToast('Amit Sharma · Engineer','info')">
                  <div class="org-tree-avatar sm-av" style="background:linear-gradient(135deg,#0891B2,#06B6D4);">AS</div>
                  <div class="org-tree-name sm-nm">Amit Sharma</div>
                  <div class="org-tree-title sm-ttl">Software Engineer</div>
                </div>
                <div id="orgNode_pn" class="org-tree-node leaf-node" onclick="showToast('Priya Nair · Designer','info')">
                  <div class="org-tree-avatar sm-av" style="background:linear-gradient(135deg,#BE185D,#EC4899);">PN</div>
                  <div class="org-tree-name sm-nm">Priya Nair</div>
                  <div class="org-tree-title sm-ttl">UI/UX Designer</div>
                </div>
              </div>

              <!-- HR sub-column -->
              <div style="flex:1;display:flex;gap:10px;justify-content:center;">
                <div id="orgNode_nj" class="org-tree-node leaf-node" onclick="showToast('Neha Joshi · HR Exec.','info')">
                  <div class="org-tree-avatar sm-av" style="background:linear-gradient(135deg,#7C3AED,#8B5CF6);">NJ</div>
                  <div class="org-tree-name sm-nm">Neha Joshi</div>
                  <div class="org-tree-title sm-ttl">HR Executive</div>
                </div>
              </div>

              <!-- Finance sub-column -->
              <div style="flex:1;display:flex;gap:10px;justify-content:center;">
                <div id="orgNode_rs" class="org-tree-node leaf-node" onclick="showToast('Rahul Singh · Finance Mgr.','info')">
                  <div class="org-tree-avatar sm-av" style="background:linear-gradient(135deg,#B45309,#F59E0B);">RS</div>
                  <div class="org-tree-name sm-nm">Rahul Singh</div>
                  <div class="org-tree-title sm-ttl">Finance Manager</div>
                </div>
              </div>
            </div>

          </div><!-- /orgTreeWrap -->
        </div><!-- /org tree container -->

        

        <!-- Legend strip -->
        <div style="display:flex;gap:16px;flex-wrap:wrap;padding:10px 18px;border-top:1px solid var(--border);background:var(--bg);">
          <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:2px;background:#0D9488;display:inline-block;"></span>Leadership</span>
          <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:2px;background:#059669;display:inline-block;"></span>Engineering</span>
          <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:2px;background:#D97706;display:inline-block;"></span>HR</span>
          <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:2px;background:#DC2626;display:inline-block;"></span>Finance</span>
          <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-secondary);"><span style="width:10px;height:10px;border-radius:2px;background:#14B8A6;background:linear-gradient(135deg,#0D9488,#14B8A6);display:inline-block;border:2px solid #99F6E4;"></span>You</span>
        </div>
      </div>
    </div><!-- /org-chart-tab -->

    <!-- DIRECTORY TAB -->
    <div id="directory-tab" style="display:none">
      <div class="card">
        <div class="section-header" style="margin-bottom:14px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="card-title">Employee Directory</span>
          </div>
          <div style="display:flex;gap:8px;">
            <input id="dirSearchInput" class="form-input" placeholder="Search by first name..." style="width:200px;font-size:12px;" oninput="filterDirectory()">
            <select id="dirDeptFilter" class="form-input" style="width:150px;font-size:12px;" onchange="filterDirectory()"><option value="">All Departments</option><option>Engineering</option><option>Sales</option><option>HR</option><option>Finance</option><option>Product</option></select>
            <select id="dirStatusFilter" class="form-input" style="width:120px;font-size:12px;" onchange="filterDirectory()"><option value="">All Status</option><option value="Active">Active</option><option value="Inactive">Inactive</option></select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Employee ID</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Reporting To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="dirTableBody">
            <tr data-firstname="john" data-dept="engineering" data-status="active">
              <td>
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#0D9488,#14B8A6);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:white;flex-shrink:0;">JD</div>
                  <div>
                    <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);">John Doe</div>
                    <div style="font-size:11px;color:var(--text-tertiary);"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ec86838482c2888389ac8f83819c8d8295c28f8381">[email&#160;protected]</a></div>
                  </div>
                </div>
              </td>
              <td style="font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">EMP-10042</td>
              <td style="font-size:12.5px;">Sr. Software Engineer</td>
              <td><span class="badge blue">Engineering</span></td>
              <td style="font-size:12.5px;color:var(--text-secondary);">Sarah Mitchell</td>
              <td><span class="badge green">Active</span></td>
            </tr>
            <tr data-firstname="amit" data-dept="engineering" data-status="active">
              <td>
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#059669,#10B981);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:white;flex-shrink:0;">AS</div>
                  <div>
                    <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);">Amit Sharma</div>
                    <div style="font-size:11px;color:var(--text-tertiary);"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="187975716c366b70796a7579587b777568797661367b7775">[email&#160;protected]</a></div>
                  </div>
                </div>
              </td>
              <td style="font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">EMP-10043</td>
              <td style="font-size:12.5px;">Software Engineer</td>
              <td><span class="badge blue">Engineering</span></td>
              <td style="font-size:12.5px;color:var(--text-secondary);">Sarah Mitchell</td>
              <td><span class="badge green">Active</span></td>
            </tr>
            <tr data-firstname="priya" data-dept="engineering" data-status="active">
              <td>
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#BE185D,#EC4899);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:white;flex-shrink:0;">PN</div>
                  <div>
                    <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);">Priya Nair</div>
                    <div style="font-size:11px;color:var(--text-tertiary);"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0474766d7d652a6a656d7644676b6974656a7d2a676b69">[email&#160;protected]</a></div>
                  </div>
                </div>
              </td>
              <td style="font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">EMP-10044</td>
              <td style="font-size:12.5px;">UI/UX Designer</td>
              <td><span class="badge blue">Engineering</span></td>
              <td style="font-size:12.5px;color:var(--text-secondary);">Sarah Mitchell</td>
              <td><span class="badge green">Active</span></td>
            </tr>
            <tr data-firstname="rahul" data-dept="product" data-status="inactive">
              <td>
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#B45309,#F59E0B);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:white;flex-shrink:0;">RS</div>
                  <div>
                    <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);">Rahul Singh</div>
                    <div style="font-size:11px;color:var(--text-tertiary);"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d4a6b5bca1b8faa7bdbab3bc94b7bbb9a4b5baadfab7bbb9">[email&#160;protected]</a></div>
                  </div>
                </div>
              </td>
              <td style="font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">EMP-10045</td>
              <td style="font-size:12.5px;">Product Manager</td>
              <td><span class="badge purple">Product</span></td>
              <td style="font-size:12.5px;color:var(--text-secondary);">Vikram Rao</td>
              <td><span class="badge gray">Inactive</span></td>
            </tr>
            <tr data-firstname="neha" data-dept="hr" data-status="active">
              <td>
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#7C3AED,#8B5CF6);display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:600;color:white;flex-shrink:0;">NJ</div>
                  <div>
                    <div style="font-size:12.5px;font-weight:600;color:var(--text-primary);">Neha Joshi</div>
                    <div style="font-size:11px;color:var(--text-tertiary);"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0668636e67286c69756e6f4665696b7667687f2865696b">[email&#160;protected]</a></div>
                  </div>
                </div>
              </td>
              <td style="font-family:var(--mono);font-size:11px;color:var(--text-tertiary);">EMP-10046</td>
              <td style="font-size:12.5px;">HR Executive</td>
              <td><span class="badge gray">HR</span></td>
              <td style="font-size:12.5px;color:var(--text-secondary);">Anita Patel</td>
              <td><span class="badge green">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div><!-- /directory-tab -->

    <!-- ONBOARDING TAB -->
    <div id="onboarding-tab" style="display:none">
      <div id="onboardingAccessDenied" style="display:none;">
        <div class="card" style="text-align:center;padding:48px 24px;">
          <div style="width:52px;height:52px;border-radius:12px;background:var(--danger-muted);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          </div>
          <div style="font-size:15px;font-weight:600;color:var(--text-primary);margin-bottom:6px;">Access Restricted</div>
          <div style="font-size:12.5px;color:var(--text-secondary);max-width:280px;margin:0 auto;">The Onboarding section is only accessible to HR Administrators.</div>
        </div>
      </div>
      <div id="onboardingContent">
        <div class="card">
          <div class="section-header" style="margin-bottom:16px;">
            <div>
              <div class="card-title">Onboarding — Kavya Reddy</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">EMP-10080 · Joining April 10, 2026</div>
            </div>
            <span class="badge amber">In Progress · 60%</span>
          </div>
          <div style="margin-bottom:18px;">
            <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:500;margin-bottom:6px;color:var(--text-secondary);"><span>Overall Completion</span><span style="color:var(--primary);">60%</span></div>
            <div style="height:6px;background:var(--border-subtle);border-radius:3px;overflow:hidden;">
              <div style="width:60%;height:100%;background:linear-gradient(90deg,#0D9488,#10B981);border-radius:3px;"></div>
            </div>
          </div>
          <div class="checklist-item"><div class="check-icon done"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div><div class="check-title">Offer Letter & Acceptance</div><div class="check-sub">Completed March 25</div></div></div>
          <div class="checklist-item"><div class="check-icon done"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div><div class="check-title">System Access & Employee Account</div><div class="check-sub">Completed March 28</div></div></div>
          <div class="checklist-item"><div class="check-icon done"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div><div class="check-title">Laptop & Hardware Assignment</div><div class="check-sub">Completed March 30</div></div></div>
          <div class="checklist-item"><div class="check-icon inprogress"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="6" x2="12" y2="12"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg></div><div><div class="check-title">Document Collection <span class="badge amber" style="margin-left:6px;">2/5</span></div><div class="check-sub">PAN, Aadhar, Bank Details — 2 of 5 received</div></div></div>
          <div class="checklist-item"><div class="check-icon pending"></div><div><div class="check-title">Payroll Setup & Salary Mapping</div><div class="check-sub">Due April 5</div></div></div>
          <div class="checklist-item" style="border-bottom:none;"><div class="check-icon pending"></div><div><div class="check-title">Policy & Compliance Acknowledgement</div><div class="check-sub">Due April 7</div></div></div>
        </div>
      </div>
    </div><!-- /onboarding-tab -->

  </div><!-- /page-people -->

  <!-- ==================== HELPDESK PAGE ==================== -->
  <div class="page" id="page-helpdesk">
    <div class="tabs" id="helpdeskTabs">
      <div class="tab active" onclick="switchTab(this,'my-tickets-tab')">My Tickets (3)</div>
      <div class="tab" onclick="switchTab(this,'raise-ticket-tab')">Raise Ticket</div>
      <!-- Admin Queue tab only shown for IT Admin -->
      <div class="tab" id="adminQueueTab" style="display:none;" onclick="switchTab(this,'admin-queue-tab')">Admin Queue <span style="background:#B91C1C;color:white;font-size:10px;padding:1px 6px;border-radius:8px;margin-left:4px;font-weight:500;">2</span></div>
    </div>
    <div id="my-tickets-tab">
      <!-- Filter Bar — mirrors To Do panel -->
      <div id="hdFilterWrap">
        <div class="hd-filter-left">
          <span class="hd-filter-label">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Show
          </span>
          <div id="hdFilterSegment" role="group" aria-label="Ticket status filter">
            <button class="task-seg-btn"        data-hd-value="all"    onclick="segFilterHD('all',this)">All    <span class="task-seg-count" id="hdSegCount_all">3</span></button>
            <button class="task-seg-btn active" data-hd-value="open"   onclick="segFilterHD('open',this)">Open   <span class="task-seg-count" id="hdSegCount_open">2</span></button>
            <button class="task-seg-btn"        data-hd-value="closed" onclick="segFilterHD('closed',this)">Closed <span class="task-seg-count" id="hdSegCount_closed">1</span></button>
          </div>
          <span id="hdFilter-empty" style="display:none;font-size:12px;color:var(--text-tertiary);margin-left:4px;">No tickets found.</span>
        </div>
        <input type="date" id="hdDateFilter" title="Filter by raised date" onchange="filterHDByDate(this.value)" style="display:none;">
        <!-- Date Range — compact icon trigger (matches To Do Panel) -->
        <div class="tf-dr-compact" id="hdDRCompact">
          <button class="tf-dr-icon-btn" id="hdDRTrigger" onclick="toggleHDDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="hdDRPopover">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span id="hdDRBtnLabel">Date Range</span>
            <span id="hdDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
          </button>
          <button class="tf-dr-clear-icon" id="hdDRClearBtn" onclick="clearHDDateRange()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div id="hdDRPopover" role="dialog" aria-label="Date range filter">
            <div class="tf-pop-title">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Filter by Date Range
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="hdDRFrom">From Date</label>
              <input type="date" id="hdDRFrom" class="tf-pop-input" aria-label="From date">
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="hdDRTo">To Date</label>
              <input type="date" id="hdDRTo" class="tf-pop-input" aria-label="To date">
            </div>
            <div class="tf-pop-actions">
              <button class="tf-pop-apply" onclick="applyHDDateRangeFromPopover()">Apply</button>
              <button class="tf-pop-reset" onclick="clearHDDateRange()">Reset</button>
            </div>
          </div>
        </div>
      </div>

      <div class="ticket-card" data-hd-status="open" data-hd-raised="2026-03-30">
        <div style="flex:1">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:4px;">
            <div>
              <div class="ticket-num">#TKT-2604</div>
              <div class="ticket-title">Laptop keyboard not working properly</div>
              <div class="ticket-meta">Category: IT Support · Raised: Mar 30, 2026</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
              <span class="badge amber">In Progress</span>
              <button class="ticket-card-edit-btn" style="margin-top:0;" onclick="openEditHdModal('TKT-2604','IT Support','Medium','Laptop keyboard not working properly','Keyboard keys are unresponsive on left side. Tried restarting, issue persists.','2026-03-30','In Progress')">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Edit
              </button>
            </div>
          </div>
          <div class="workflow-steps" style="margin:10px 0 6px;">
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Submitted</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Assigned</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle active">3</div><div class="wf-label">In Progress</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">4</div><div class="wf-label">Resolved</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">5</div><div class="wf-label">Closed</div></div>
          </div>
        </div>
      </div>
      <div class="ticket-card" data-hd-status="open" data-hd-raised="2026-03-28">
        <div style="flex:1">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:4px;">
            <div>
              <div class="ticket-num">#TKT-2601</div>
              <div class="ticket-title">Payslip not accessible for February 2026</div>
              <div class="ticket-meta">Category: Payroll · Raised: Mar 28, 2026</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
              <span class="badge red">Escalated</span>
              <button class="ticket-card-edit-btn" style="margin-top:0;" onclick="openEditHdModal('TKT-2601','Payroll Issue','High','Payslip not accessible for February 2026','Unable to view or download payslip for Feb 2026 from the portal. Error 404 shown.','2026-03-28','Escalated')">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Edit
              </button>
            </div>
          </div>
          <div class="workflow-steps" style="margin:10px 0 6px;">
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Submitted</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Assigned</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle active">3</div><div class="wf-label">Escalated</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">4</div><div class="wf-label">Resolved</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">5</div><div class="wf-label">Closed</div></div>
          </div>
        </div>
      </div>
      <div class="ticket-card" data-hd-status="closed" data-hd-raised="2026-03-20" style="opacity:0.7">
        <div style="flex:1">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:4px;">
            <div>
              <div class="ticket-num">#TKT-2589</div>
              <div class="ticket-title">Leave balance discrepancy — January 2026</div>
              <div class="ticket-meta">Category: HR · Closed: Mar 20, 2026</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
              <span class="badge green">Closed</span>
              <button class="ticket-card-edit-btn" style="margin-top:0;" onclick="openEditHdModal('TKT-2589','HR Query','Low','Leave balance discrepancy — January 2026','Earned leave balance shows 8 days but should be 10 after approval of Jan leaves.','2026-03-20','Closed')">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Edit
              </button>
            </div>
          </div>
          <div class="workflow-steps" style="margin:10px 0 6px;">
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Submitted</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Assigned</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">In Progress</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Resolved</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Closed</div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="raise-ticket-tab" style="display:none">
      <div class="card" style="max-width:600px">
        <div class="card-title" style="margin-bottom:16px">🎫 Raise Support Ticket</div>
        <div style="background:var(--info-light);border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;color:var(--primary);margin-bottom:16px;font-weight:600;display:flex;align-items:center;gap:8px;">ℹ️ All tickets are reviewed and approved by the <b>IT Admin team</b></div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div class="form-group"><div class="form-label">Category *</div>
            <select class="form-input"><option>IT Support</option><option>HR Query</option><option>Payroll Issue</option><option>Attendance/Leave</option><option>Admin Request</option><option>Other</option></select></div>
          <div class="form-group"><div class="form-label">Priority *</div>
            <select class="form-input"><option>Medium</option><option>Low</option><option>High</option><option>Critical</option></select></div>
          <div class="form-group"><div class="form-label">Subject *</div><input class="form-input" placeholder="Brief description of the issue"></div>
          <div class="form-group"><div class="form-label">Description *</div><textarea class="form-input" rows="4" placeholder="Detailed description of the issue..."></textarea></div>
          <div class="form-group"><div class="form-label">Attachment (optional)</div><input class="form-input" type="file"></div>
          <div style="display:flex;gap:8px;">
            <button class="btn-sm primary" onclick="showToast('Ticket #TKT-2606 created! IT Admin will review shortly.','success')">Submit</button>
            <button class="btn-sm" onclick="showToast('Cancelled','info')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Admin Queue - Only visible to IT Admin -->
    <div id="admin-queue-tab" style="display:none">
      <div class="it-admin-notice">🖥️ IT Admin View — You can approve, assign, and resolve all helpdesk tickets</div>
      <div class="card">
        <div class="section-header"><div class="card-title">🎫 All Tickets — Admin Queue</div><div style="display:flex;gap:8px;"><span class="badge red">2 Open</span><span class="badge amber">3 In Progress</span><span class="badge green">12 Closed</span></div></div>
        <table>
          <thead><tr><th>Ticket #</th><th>Raised By</th><th>Category</th><th>Subject</th><th>Priority</th><th>SLA</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2605</span></td><td>Meera Patel</td><td>IT Support</td><td>VPN access issue</td><td><span class="priority-badge high">High</span></td><td style="color:#D97706">6h left</td><td><span class="badge amber">Open</span></td><td><button class="btn-sm success" onclick="showToast('Ticket approved & assigned to IT!','success')">Approve</button></td></tr>
            <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2604</span></td><td>John Doe</td><td>IT Support</td><td>Keyboard issue</td><td><span class="priority-badge medium">Medium</span></td><td style="color:#D97706">4h left</td><td><span class="badge amber">In Progress</span></td><td><button class="btn-sm" onclick="showToast('Ticket marked closed','success')">Close</button></td></tr>
            <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2601</span></td><td>John Doe</td><td>Payroll</td><td>Payslip not available</td><td><span class="priority-badge high">High</span></td><td style="color:var(--danger)">Breached</td><td><span class="badge red">Escalated</span></td><td><button class="btn-sm" onclick="showToast('Escalation resolved','info')">Resolve</button></td></tr>
            <tr><td><span style="font-family:var(--mono);font-size:11px">#TKT-2600</span></td><td>Rahul Singh</td><td>HR Query</td><td>Leave policy clarification</td><td><span class="priority-badge low">Low</span></td><td style="color:var(--primary)">22h left</td><td><span class="badge amber">Open</span></td><td><button class="btn-sm success" onclick="showToast('Approved & routed to HR','success')">Approve</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ==================== REQUESTS PAGE ==================== -->
  <div class="page" id="page-requests">
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,'my-requests-tab')">My Requests</div>
      <div class="tab" onclick="switchTab(this,'raise-request-tab')">Raise Claim Request</div>
      <div class="tab" id="approvalQueueTab" style="display:none;" onclick="switchTab(this,'approval-queue-tab')">Approval Queue</div>
    </div>

    <!-- ── My Requests Tab ── -->
    <div id="my-requests-tab">
      <!-- Filter Bar — mirrors To Do panel -->
      <div id="reqFilterWrap">
        <div class="req-filter-left">
          <span class="req-filter-label">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Show
          </span>
          <div id="reqFilterSegment" role="group" aria-label="Request status filter">
            <button class="task-seg-btn" data-value="all" onclick="filterMyRequests('all',this)">
              All <span class="task-seg-count" id="reqCount_all">2</span>
            </button>
            <button class="task-seg-btn active" data-value="pending" onclick="filterMyRequests('pending',this)">
              Pending <span class="task-seg-count" id="reqCount_pending">1</span>
            </button>
            <button class="task-seg-btn" data-value="approved" onclick="filterMyRequests('approved',this)">
              Approved <span class="task-seg-count" id="reqCount_approved">1</span>
            </button>
          </div>
        </div>
        <input type="date" id="reqDateFilter" title="Filter by raised date" onchange="filterReqByDate(this.value)" style="display:none;">
        <!-- Date Range — compact icon trigger (matches To Do Panel) -->
        <div class="tf-dr-compact" id="reqDRCompact">
          <button class="tf-dr-icon-btn" id="reqDRTrigger" onclick="toggleReqDRPopover(event)" title="Filter by date range" aria-label="Open date range filter" aria-expanded="false" aria-controls="reqDRPopover">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span id="reqDRBtnLabel">Date Range</span>
            <span id="reqDRActivePill" class="tf-dr-active-label" style="display:none;"></span>
          </button>
          <button class="tf-dr-clear-icon" id="reqDRClearBtn" onclick="clearReqDateRange()" title="Clear date filter" aria-label="Clear date range" style="display:none;">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div id="reqDRPopover" role="dialog" aria-label="Date range filter">
            <div class="tf-pop-title">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Filter by Date Range
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="reqDRFrom">From Date</label>
              <input type="date" id="reqDRFrom" class="tf-pop-input" aria-label="From date">
            </div>
            <div class="tf-pop-row">
              <label class="tf-pop-label" for="reqDRTo">To Date</label>
              <input type="date" id="reqDRTo" class="tf-pop-input" aria-label="To date">
            </div>
            <div class="tf-pop-actions">
              <button class="tf-pop-apply" onclick="applyReqDateRangeFromPopover()">Apply</button>
              <button class="tf-pop-reset" onclick="clearReqDateRange()">Reset</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Ticket Cards -->
      <div id="req-cards-wrap">
        <div class="card" style="margin-bottom:14px" data-req-status="pending" data-req-date="2026-03-28">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px">
            <div>
              <div class="ticket-num">REQ-1042</div>
              <div class="ticket-title">Travel Reimbursement — Client Visit Chennai</div>
              <div class="ticket-meta">Raised: Mar 28 · Amount: ₹4,200 · Category: Reimbursement</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
              <span class="badge amber">Pending</span>
              <!-- Change 7: Edit moved to top -->
              <button class="ticket-card-edit-btn" onclick="openEditReqModal('REQ-1042','Travel Reimbursement','Travel Reimbursement — Client Visit Chennai','4200','2026-03-28','Pending')">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Edit
              </button>
            </div>
          </div>
          <div class="workflow-steps">
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Submitted</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle active">2</div><div class="wf-label">Manager Review</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">3</div><div class="wf-label">HR</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">4</div><div class="wf-label">Finance</div></div>
            <div class="wf-line pending"></div>
            <div class="wf-step"><div class="wf-circle pending">5</div><div class="wf-label">Processed</div></div>
          </div>
        </div>

        <div class="card" data-req-status="approved" data-req-date="2026-03-15" style="opacity:0.85">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px">
            <div>
              <div class="ticket-num">REQ-1038</div>
              <div class="ticket-title">General Claim — Refreshment Exp</div>
              <div class="ticket-meta">Raised: Mar 15 · Category: General Claim</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
              <span class="badge green">Approved</span>
              <!-- Change 7: Edit moved to top -->
              <button class="ticket-card-edit-btn" onclick="openEditReqModal('REQ-1038','General Claim','General Claim — Refreshment Exp','','2026-03-15','Approved')">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Edit
              </button>
            </div>
          </div>
          <div class="workflow-steps">
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Submitted</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Manager</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">HR</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Finance</div></div>
            <div class="wf-line done"></div>
            <div class="wf-step"><div class="wf-circle done"></div><div class="wf-label">Processed</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Raise Request Tab ── -->
    <div id="raise-request-tab" style="display:none">

      <!-- ── Step 1: Type Selection Landing ── -->
      <div id="claimTypeSelectorPage">
        <div class="card" style="max-width:700px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
            <div>
              <div class="card-title" style="margin:0;">📝 Raise Claim Request</div>
              <div style="font-size:11.5px;color:var(--text-secondary);margin-top:3px;">Select claim type and fill in the details below.</div>
            </div>
            <span class="claim-num-badge" id="raiseClaimNumBadge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15" x2="13" y2="15"/></svg>
              <span id="raiseClaimNumText">CLM-1045</span>
            </span>
          </div>

          <!-- ── Claim Type Cards (3 types) ── -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;">
            <div id="claimCard_travel" onclick="selectClaimTypeCard('travel')" style="border:1.5px solid var(--border);border-radius:var(--radius);padding:14px 12px;cursor:pointer;transition:var(--ease);background:var(--surface);text-align:center;">
              <div style="font-size:20px;margin-bottom:6px;">✈️</div>
              <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Travel Claim</div>
              <div style="font-size:10.5px;color:var(--text-secondary);margin-top:2px;">Trips &amp; transport</div>
            </div>
            <div id="claimCard_general" onclick="selectClaimTypeCard('general')" style="border:1.5px solid var(--border);border-radius:var(--radius);padding:14px 12px;cursor:pointer;transition:var(--ease);background:var(--surface);text-align:center;">
              <div style="font-size:20px;margin-bottom:6px;">🧾</div>
              <div style="font-size:12px;font-weight:600;color:var(--text-primary);">General Claim</div>
              <div style="font-size:10.5px;color:var(--text-secondary);margin-top:2px;">Day-to-day expenses</div>
            </div>
            <div id="claimCard_misc" onclick="selectClaimTypeCard('misc')" style="border:1.5px solid var(--border);border-radius:var(--radius);padding:14px 12px;cursor:pointer;transition:var(--ease);background:var(--surface);text-align:center;">
              <div style="font-size:20px;margin-bottom:6px;">📋</div>
              <div style="font-size:12px;font-weight:600;color:var(--text-primary);">Miscellaneous Claim</div>
              <div style="font-size:10.5px;color:var(--text-secondary);margin-top:2px;">Other work expenses</div>
            </div>
          </div>

          <!-- ── Single / Multi toggle ── -->
          <div id="claimFormSection" style="display:none;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--border-subtle);">
              <span style="font-size:11.5px;font-weight:600;color:var(--text-secondary);">Claim Mode:</span>
              <div style="display:flex;border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden;">
                <button id="modeSingleBtn" onclick="setClaimMode('single')" style="padding:5px 14px;font-size:11.5px;font-weight:500;background:var(--primary);color:white;border:none;cursor:pointer;transition:var(--ease);">Single Claim</button>
                <button id="modeMultiBtn"  onclick="setClaimMode('multi')"  style="padding:5px 14px;font-size:11.5px;font-weight:500;background:var(--bg);color:var(--text-secondary);border:none;cursor:pointer;transition:var(--ease);">Multiple Claims</button>
              </div>
            </div>

            <!-- ══ SINGLE CLAIM FORM ══ -->
            <div id="singleClaimForm">
              <div style="display:flex;flex-direction:column;gap:11px;">

                <!-- Row 1: Subcategory (half-width) -->
                <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:10px;">
                  <div class="form-group">
                    <div class="form-label">Subcategory <span style="color:var(--danger)">*</span></div>
                    <select class="form-input" id="sc_subcategory" onchange="onSingleSubcategoryChange(this.value)">
                      <option value="">— Select Subcategory —</option>
                      <option value="Business Promotion">Business Promotion</option>
                      <option value="Conveyance Exp">Conveyance Exp</option>
                      <option value="Daily Allowance">Daily Allowance</option>
                      <option value="Fuel Exp">Fuel Exp</option>
                      <option value="Internet Exp">Internet Exp</option>
                      <option value="Others">Others</option>
                      <option value="Refreshment Exp">Refreshment Exp</option>
                      <option value="Telephone Exp">Telephone Exp</option>
                      <option value="Travelling Exp">Travelling Exp</option>
                    </select>
                  </div>
                  <div></div>
                </div>

                <!-- Row 2: Amount + Date -->
                <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:10px;">
                  <div class="form-group">
                    <div class="form-label">Amount (₹) <span style="color:var(--danger)">*</span></div>
                    <input class="form-input" id="sc_amount" type="number" min="0.01" step="0.01" placeholder="₹ 0.00">
                  </div>
                  <div class="form-group">
                    <div class="form-label">Claim Date <span style="color:var(--danger)">*</span></div>
                    <input class="form-input" id="sc_date" type="date">
                  </div>
                </div>

                <!-- Travel-specific fields (shown only for Travel Expense / Fuel / Other subcategories) -->
                <div id="sc_travelFields" style="display:none;">
                  <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:10px;">
                    <div class="form-group">
                      <div class="form-label">Travel From <span style="color:var(--danger)">*</span></div>
                      <input class="form-input" id="sc_from" type="text" placeholder="e.g. Bangalore">
                    </div>
                    <div class="form-group">
                      <div class="form-label">Travel To <span style="color:var(--danger)">*</span></div>
                      <input class="form-input" id="sc_to" type="text" placeholder="e.g. Mumbai">
                    </div>
                  </div>
                </div>

                <!-- Description -->
                <div class="form-group">
                  <div class="form-label">Description</div>
                  <textarea class="form-input" id="sc_description" rows="2" placeholder="Optional details about this expense…" style="resize:vertical;min-height:50px;"></textarea>
                </div>

                <!-- Receipt upload -->
                <div class="form-group">
                  <div class="form-label">Receipt / Attachment</div>
                  <label class="file-upload-label" for="sc_receipt">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    <span id="sc_receiptLabel">Upload receipt (PDF, JPG, PNG)</span>
                  </label>
                  <input type="file" id="sc_receipt" style="display:none" accept=".pdf,.jpg,.jpeg,.png" onchange="document.getElementById('sc_receiptLabel').textContent=this.files[0]?this.files[0].name:'Upload receipt (PDF, JPG, PNG)'">
                </div>

                <!-- Routing notice -->
                <div style="background:var(--primary-muted);border-radius:var(--radius-sm);padding:9px 11px;font-size:11px;color:var(--primary-hover);">
                  This request will be routed to: <b>Manager → HR → Finance</b> for approval
                </div>

                <!-- Action buttons -->
                <div style="display:flex;gap:7px;flex-wrap:wrap;">
                  <button class="btn-sm primary" onclick="submitSingleClaim()">Submit Claim</button>
                  <button class="btn-sm success" onclick="showToast('Draft saved — '+document.getElementById('raiseClaimNumText').textContent,'success')" style="background:var(--success);color:white;border-color:var(--success);">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:3px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                    Save Draft
                  </button>
                  <button class="btn-sm" onclick="resetClaimTypeSelector()">Cancel</button>
                </div>
              </div>
            </div>

            <!-- ══ MULTI CLAIM FORM ══ -->
            <div id="multiClaimForm" style="display:none;">
              <div id="multiClaimRows" style="display:flex;flex-direction:column;gap:12px;"></div>

              <!-- Add row + total -->
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;flex-wrap:wrap;gap:8px;">
                <button class="btn-sm" onclick="addMultiClaimRow()" style="display:inline-flex;align-items:center;gap:5px;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Add Claim Row
                </button>
                <div style="font-size:12px;font-weight:600;color:var(--text-primary);">
                  Total: <span style="color:var(--primary);font-size:13px;" id="multiClaimTotal">₹ 0.00</span>
                </div>
              </div>

              <!-- Routing + Submit -->
              <div style="margin-top:14px;display:flex;flex-direction:column;gap:10px;">
                <div style="background:var(--primary-muted);border-radius:var(--radius-sm);padding:9px 11px;font-size:11px;color:var(--primary-hover);">
                  This request will be routed to: <b>Manager → HR → Finance</b> for approval
                </div>
                <div style="display:flex;gap:7px;flex-wrap:wrap;">
                  <button class="btn-sm primary" onclick="submitMultiClaim()">Submit All Claims</button>
                  <button class="btn-sm success" onclick="showToast('Draft saved — '+document.getElementById('raiseClaimNumText').textContent,'success')" style="background:var(--success);color:white;border-color:var(--success);">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:3px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                    Save Draft
                  </button>
                  <button class="btn-sm" onclick="resetClaimTypeSelector()">Cancel</button>
                </div>
              </div>
            </div>
          </div><!-- /claimFormSection -->
        </div>
      </div>

    </div>

    <!-- ── Approval Queue Tab ── -->
    <div id="approval-queue-tab" style="display:none">
      <div class="card">
        <div class="section-header"><div class="card-title">Approval Queue</div><span class="badge red">3 Pending</span></div>
        <table>
          <thead><tr><th>Req #</th><th>Requested By</th><th>Type</th><th>Details</th><th>Date</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td><span style="font-family:var(--mono);font-size:11px">REQ-1042</span></td><td>John Doe</td><td><span class="badge purple">Reimbursement</span></td><td>Travel — ₹4,200</td><td>Mar 28</td><td><button class="approve-btn approve" onclick="showToast('Request approved!','success')">Approve</button> <button class="approve-btn reject" onclick="showToast('Request rejected','error')">Reject</button></td></tr>
            <tr><td><span style="font-family:var(--mono);font-size:11px">REQ-1043</span></td><td>Amit Sharma</td><td><span class="badge purple">General Claim</span></td><td>General Claim — Refreshment Exp ₹850</td><td>Mar 29</td><td><button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button> <button class="approve-btn reject">Reject</button></td></tr>
            <tr><td><span style="font-family:var(--mono);font-size:11px">REQ-1044</span></td><td>Priya Nair</td><td><span class="badge purple">Miscellaneous</span></td><td>Miscellaneous Claim — ₹1,200</td><td>Mar 31</td><td><button class="approve-btn approve" onclick="showToast('Approved!','success')">Approve</button> <button class="approve-btn reject">Reject</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ==================== EDIT REQUEST MODAL ==================== -->
  <div id="editReqModal" role="dialog" aria-modal="true" aria-labelledby="editReqModalTitle" onclick="if(event.target===this)closeEditReqModal()">
    <div id="editReqModalBox">
      <button class="req-edit-close" onclick="closeEditReqModal()" aria-label="Close">✕</button>
      <div class="req-edit-title" id="editReqModalTitle">✏️ Edit Request</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:11px;color:var(--text-tertiary);font-family:var(--mono)" id="editReqNum"></div>
        <div class="form-group">
          <div class="form-label">Request Type</div>
          <select class="form-input" id="editReqType">
            <option>Travel Claim</option>
            <option>General Claim</option>
            <option>Miscellaneous Claim</option>
          </select>
        </div>
        <div class="form-group">
          <div class="form-label">Title / Description</div>
          <input class="form-input" id="editReqTitle" type="text">
        </div>
        <div class="form-group">
          <div class="form-label">Amount (₹) *</div>
          <input class="form-input" id="editReqAmount" type="number" min="0" placeholder="₹ 0.00">
        </div>
        <div class="form-group">
          <div class="form-label">Raised Date</div>
          <input class="form-input" id="editReqDate" type="date">
        </div>
        <div class="form-group">
          <div class="form-label">Attachment *</div>
          <label class="file-upload-label" for="editReqAttachment">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span id="editReqAttachLabel">Upload Receipt or Invoice</span>
          </label>
          <input type="file" id="editReqAttachment" style="display:none" accept=".pdf,.jpg,.jpeg,.png" onchange="document.getElementById('editReqAttachLabel').textContent=this.files[0]?this.files[0].name:'Upload Receipt or Invoice'">
        </div>
        <div style="background:var(--primary-muted);border-radius:var(--radius-sm);padding:8px 10px;font-size:11.5px;color:var(--primary-hover);">
          Status: <span id="editReqStatus" style="font-weight:600;"></span>
        </div>
        <div style="display:flex;gap:8px;margin-top:4px;">
          <button class="btn-sm primary" onclick="saveEditReq()">Save Changes</button>
          <button class="btn-sm success" onclick="saveDraftEditReq()" style="background:var(--success);color:white;border-color:var(--success);">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:3px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            Save Draft
          </button>
          <button class="btn-sm" onclick="closeEditReqModal()">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== EDIT TICKET MODAL (Help Desk) ==================== -->
  <div id="editHdModal" role="dialog" aria-modal="true" aria-labelledby="editHdModalTitle" onclick="if(event.target===this)closeEditHdModal()">
    <div id="editHdModalBox">
      <button class="req-edit-close" onclick="closeEditHdModal()" aria-label="Close">✕</button>
      <div class="req-edit-title" id="editHdModalTitle">✏️ Edit Ticket</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:11px;color:var(--text-tertiary);font-family:var(--mono)" id="editHdNum"></div>
        <div class="form-group">
          <div class="form-label">Category</div>
          <select class="form-input" id="editHdCategory">
            <option>IT Support</option>
            <option>HR Query</option>
            <option>Payroll Issue</option>
            <option>Attendance/Leave</option>
            <option>Admin Request</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <div class="form-label">Priority</div>
          <select class="form-input" id="editHdPriority">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>
        <div class="form-group">
          <div class="form-label">Subject</div>
          <input class="form-input" id="editHdSubject" type="text">
        </div>
        <div class="form-group">
          <div class="form-label">Description</div>
          <textarea class="form-input" id="editHdDescription" rows="3" style="resize:vertical;"></textarea>
        </div>
        <div class="form-group">
          <div class="form-label">Raised Date</div>
          <input class="form-input" id="editHdDate" type="date">
        </div>
        <div class="form-group">
          <div class="form-label">Attachment (optional)</div>
          <label class="file-upload-label" for="editHdAttachment">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span id="editHdAttachLabel">Upload supporting document</span>
          </label>
          <input type="file" id="editHdAttachment" style="display:none" accept=".pdf,.jpg,.jpeg,.png" onchange="document.getElementById('editHdAttachLabel').textContent=this.files[0]?this.files[0].name:'Upload supporting document'">
        </div>
        <div style="background:var(--primary-muted);border-radius:var(--radius-sm);padding:8px 10px;font-size:11.5px;color:var(--primary-hover);">
          Status: <span id="editHdStatus" style="font-weight:600;"></span>
        </div>
        <div style="display:flex;gap:8px;margin-top:4px;">
          <button class="btn-sm primary" onclick="saveEditHd()">Save Changes</button>
          <button class="btn-sm" onclick="closeEditHdModal()">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== REPORTS PAGE ==================== -->
  <div class="page" id="page-reports">
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,'std-reports-tab')">Standard Reports</div>
      <div class="tab" onclick="switchTab(this,'custom-reports-tab')">Custom Report Builder</div>
    </div>
    <div id="std-reports-tab">
      <div class="kpi-row">
        <div class="kpi-item"><div class="kpi-value" style="color:var(--primary)">94.2%</div><div class="kpi-label">Avg Attendance</div></div>
        <div class="kpi-item"><div class="kpi-value" style="color:var(--primary)">₹43L</div><div class="kpi-label">Monthly Payroll</div></div>
        <div class="kpi-item"><div class="kpi-value" style="color:#D97706">8.1%</div><div class="kpi-label">Attrition Rate</div></div>
        <div class="kpi-item"><div class="kpi-value" style="color:var(--purple)">87%</div><div class="kpi-label">Ticket Resolution SLA</div></div>
      </div>
      <div class="grid-3" style="margin-bottom:12px;">
        <div class="card" style="cursor:pointer;padding:10px 12px;"><div style="font-size:20px;margin-bottom:5px"></div><div class="card-title" style="font-size:12.5px;">Attendance Report</div><div class="card-sub" style="font-size:11px;margin-top:2px;">Daily, weekly and monthly attendance data</div><div style="margin-top:8px;display:flex;gap:5px;"><button class="btn-sm" onclick="showToast('Downloading...','info')">Excel</button><button class="btn-sm">PDF</button></div></div>
        <div class="card" style="cursor:pointer;padding:10px 12px;"><div style="font-size:20px;margin-bottom:5px"></div><div class="card-title" style="font-size:12.5px;">Payroll Report</div><div class="card-sub" style="font-size:11px;margin-top:2px;">Salary, deductions and payment history</div><div style="margin-top:8px;display:flex;gap:5px;"><button class="btn-sm" onclick="showToast('Downloading...','info')">Excel</button><button class="btn-sm">PDF</button></div></div>
        <div class="card" id="employeeReportCard" style="cursor:pointer;padding:10px 12px;display:none;"><div style="font-size:20px;margin-bottom:5px"></div><div class="card-title" style="font-size:12.5px;">Employee Report</div><div class="card-sub" style="font-size:11px;margin-top:2px;">Headcount, new hires and attrition</div><div style="margin-top:8px;display:flex;gap:5px;"><button class="btn-sm" onclick="showToast('Downloading...','info')">Excel</button><button class="btn-sm">PDF</button></div></div>
      </div>
      <div class="card" style="padding:10px 14px;">
        <div class="section-header" style="margin-bottom:10px;"><div class="card-title" style="font-size:12.5px;">📊 Attendance Trend — Q1 2026</div><button class="btn-sm" onclick="showToast('Downloading chart data...','info')">Export</button></div>
        <div class="chart-bar" style="height:90px">
          <div class="chart-bar-item"><div class="chart-bar-fill" style="height:92%;background:linear-gradient(180deg,#3B5BDB,#3B5BDB);"></div><div class="chart-bar-label">Jan</div></div>
          <div class="chart-bar-item"><div class="chart-bar-fill" style="height:88%;background:linear-gradient(180deg,#3B5BDB,#3B5BDB);"></div><div class="chart-bar-label">Feb</div></div>
          <div class="chart-bar-item"><div class="chart-bar-fill" style="height:94%;background:linear-gradient(180deg,#10B981,#34D399);"></div><div class="chart-bar-label">Mar</div></div>
          <div class="chart-bar-item"><div class="chart-bar-fill" style="height:90%;background:linear-gradient(180deg,#3B5BDB,#3B5BDB);"></div><div class="chart-bar-label">Apr*</div></div>
        </div>
      </div>
    </div>
    <div id="custom-reports-tab" style="display:none">
      <div class="card">
        <div class="card-title" style="margin-bottom:16px">🔧 Custom Report Builder</div>
        <div class="form-grid">
          <div class="form-group"><div class="form-label">Report Type *</div>
            <select class="form-input"><option>Attendance</option><option>Leave</option><option>Payroll</option><option>Employee</option></select></div>
          <div class="form-group"><div class="form-label">Department</div>
            <select class="form-input"><option>All Departments</option><option>Engineering</option><option>Sales</option></select></div>
          <div class="form-group"><div class="form-label">From Date *</div><input class="form-input" type="date" value="2026-01-01"></div>
          <div class="form-group"><div class="form-label">To Date *</div><input class="form-input" type="date" value="2026-03-31"></div>
        </div>
        <div style="margin-top:16px;display:flex;gap:10px;">
          <button class="quick-btn primary" onclick="showToast('Generating custom report...','info')">Generate Report</button>
          <button class="quick-btn outline" onclick="showToast('Downloading Excel...','info')">Export Excel</button>
          <button class="quick-btn outline" onclick="showToast('Downloading PDF...','info')">Export PDF</button>
        </div>
      </div>
    </div>
  </div>

</div><!-- end main -->
</div><!-- end app -->

<!-- Notifications Panel -->
<div class="notif-panel" id="notifPanel">
  <div class="notif-header">
    <div class="notif-header-title">🔔 Notifications</div>
    <span style="font-size:11px;color:var(--primary);cursor:pointer">Mark all read</span>
  </div>
  <div class="notif-item unread"><div class="notif-dot2"></div><div><div class="notif-text"><b>March Payslip</b> is now available for download</div><div class="notif-time">Today, 9:00 AM</div></div></div>
  <div class="notif-item unread"><div class="notif-dot2"></div><div><div class="notif-text">Your leave request has been <b>approved</b> by Sarah Mitchell</div><div class="notif-time">Yesterday, 4:30 PM</div></div></div>
  <div class="notif-item"><div class="notif-dot2" style="background:transparent"></div><div><div class="notif-text">Ticket <b>#TKT-2601</b> has been escalated due to SLA breach</div><div class="notif-time">Mar 31, 2026</div></div></div>
  <div class="notif-item"><div class="notif-dot2" style="background:transparent"></div><div><div class="notif-text">Holiday reminder: <b>Good Friday</b> on April 18</div><div class="notif-time">Mar 30, 2026</div></div></div>
</div>

<!-- Toast Container -->
<div class="toast-container" id="toastContainer"></div>



<!-- ==================== EDIT TASK MODAL ==================== -->
<div id="editTaskModal" role="dialog" aria-modal="true" aria-labelledby="editTaskModalTitle" onclick="if(event.target===this)closeEditTaskModal()">
  <div id="editTaskModalBox">
    <button class="req-edit-close" onclick="closeEditTaskModal()" aria-label="Close">✕</button>

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <div class="req-edit-title" id="editTaskModalTitle" style="margin-bottom:0;">✏️ Edit Task</div>
      <span id="et_taskId" style="font-size:10.5px;font-weight:600;font-family:var(--mono);color:var(--text-tertiary);background:var(--border-subtle);border:1px solid var(--border);border-radius:4px;padding:2px 7px;"></span>
    </div>

    <div style="display:flex;flex-direction:column;gap:13px;">

      <!-- Task Name -->
      <div class="form-group">
        <div class="form-label">Task Name <span style="color:var(--danger)">*</span></div>
        <input type="text" id="et_taskName" class="form-input" placeholder="Enter task name" maxlength="200">
        <span id="et_err_taskName" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">Task name is required.</span>
      </div>

      <!-- Assignee + Due Date row -->
      <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:12px;">
        <div class="form-group">
          <div class="form-label">Assignee</div>
          <select id="et_assignee" class="form-input">
            <option value="me">Me (John Doe)</option>
            <option value="amit">Amit Sharma</option>
            <option value="priya">Priya Nair</option>
            <option value="rahul">Rahul Singh</option>
            <option value="meera">Meera Patel</option>
          </select>
        </div>
        <div class="form-group">
          <div class="form-label">Due Date</div>
          <input type="date" id="et_dueDate" class="form-input" style="cursor:pointer;">
        </div>
      </div>

      <!-- Priority -->
      <div class="form-group">
        <div class="form-label">Priority</div>
        <div style="display:flex;align-items:center;gap:14px;margin-top:6px;">
          <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;font-weight:500;color:var(--success);">
            <input type="radio" name="et_priority" value="low" style="accent-color:var(--success);width:13px;height:13px;cursor:pointer;margin:0;"> Low
          </label>
          <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;font-weight:500;color:var(--warning);">
            <input type="radio" name="et_priority" value="medium" style="accent-color:var(--warning);width:13px;height:13px;cursor:pointer;margin:0;"> Medium
          </label>
          <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;font-weight:500;color:var(--danger);">
            <input type="radio" name="et_priority" value="high" style="accent-color:var(--danger);width:13px;height:13px;cursor:pointer;margin:0;"> High
          </label>
        </div>
      </div>

      <!-- Description -->
      <div class="form-group">
        <div class="form-label">Description <span style="color:var(--danger)">*</span></div>
        <textarea id="et_description" class="form-input" rows="3" placeholder="Describe the task in detail…" style="resize:vertical;min-height:60px;"></textarea>
        <span id="et_err_desc" style="display:none;font-size:11px;color:var(--danger);margin-top:3px;">Description is required.</span>
      </div>

      <!-- Action buttons -->
      <div style="display:flex;gap:8px;padding-top:4px;border-top:1px solid var(--border-subtle);">
        <button class="quick-btn primary" onclick="saveEditTask()" style="padding:7px 18px;font-size:12.5px;">Save Changes</button>
        <button class="quick-btn outline" onclick="closeEditTaskModal()" style="padding:7px 18px;font-size:12.5px;">Cancel</button>
      </div>
    </div>
  </div>
</div>
<!-- ==================== FAMILY DETAILS MODAL ==================== -->
<div id="familyModal" role="dialog" aria-modal="true" aria-labelledby="familyModalTitle"
  style="display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;background:rgba(0,0,0,0.45);backdrop-filter:blur(3px);"
  onclick="if(event.target===this)closeFamilyModal()">
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;width:100%;max-width:640px;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg);position:relative;" id="familyModalBox">

    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:32px;height:32px;border-radius:8px;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div>
          <div id="familyModalTitle" style="font-size:14px;font-weight:600;color:var(--text-primary);">Family Details</div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">Spouse &amp; Children information</div>
        </div>
      </div>
      <button onclick="closeFamilyModal()" style="width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:var(--bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--text-secondary);" aria-label="Close">✕</button>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px;">

      <!-- ── Spouse Details ── -->
      <div>
        <div style="font-size:11px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:10px;display:flex;align-items:center;gap:6px;">
          <span style="width:3px;height:14px;background:var(--primary);border-radius:2px;display:inline-block;"></span>
          Spouse Details
        </div>
        <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;">
          <div class="form-group">
            <div class="form-label">First Name</div>
            <input id="fm_spouseFirstName" class="form-input" placeholder="Enter first name">
          </div>
          <div class="form-group">
            <div class="form-label">Last Name</div>
            <input id="fm_spouseLastName" class="form-input" placeholder="Enter last name">
          </div>
          <div class="form-group">
            <div class="form-label">Date of Birth</div>
            <input id="fm_spouseDob" class="form-input" type="date" style="cursor:pointer;">
          </div>
          <div class="form-group">
            <div class="form-label">Occupation</div>
            <input id="fm_spouseOccupation" class="form-input" placeholder="e.g. Engineer, Doctor">
          </div>
          <div class="form-group">
            <div class="form-label">Mobile Number</div>
            <input id="fm_spouseMobile" class="form-input" placeholder="Enter mobile number" inputmode="tel" maxlength="15">
          </div>
          <div class="form-group">
            <div class="form-label">Is Dependent?</div>
            <select id="fm_spouseDependent" class="form-input">
              <option value="">— Select —</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <!-- ── Children Details ── -->
      <div>
        <div style="font-size:11px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:10px;display:flex;align-items:center;gap:6px;">
          <span style="width:3px;height:14px;background:#1D4ED8;border-radius:2px;display:inline-block;"></span>
          Children Details
        </div>

        <!-- Child rows container -->
        <div id="familyModalChildrenRows" style="display:flex;flex-direction:column;gap:12px;"></div>

        <!-- Add child button -->
        <button class="btn-sm" style="margin-top:10px;font-size:11px;" onclick="addFamilyChildRow()">+ Add Child</button>
      </div>

      <!-- Action buttons -->
      <div style="display:flex;gap:8px;padding-top:12px;border-top:1px solid var(--border-subtle);">
        <button class="quick-btn primary" onclick="saveFamilyDetails()" style="padding:7px 20px;font-size:12.5px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Save Family Details
        </button>
        <button class="quick-btn outline" onclick="closeFamilyModal()" style="padding:7px 18px;font-size:12.5px;">Cancel</button>
      </div>
    </div>
  </div>
</div>`;let Ba=null;function _c(){return Ba||(Ba=new DOMParser().parseFromString(Lc,"text/html"),Ba)}function F(e){const t=_c().querySelector(e);return t?t.outerHTML:""}function zc(e){const t=_c().querySelector(e);return t?t.innerHTML:""}function Nv(e){const t={employee:"#dash-employee",manager:"#dash-manager",hr:"#dash-hr",payroll:"#dash-payroll",leadership:"#dash-leadership",itadmin:"#dash-itadmin"};return F(t[e]||t.employee)}function jv(e){return zc(`#page-${e}`)}function os(e){if(!e)return"";const t=e instanceof Date?e:new Date(e);let n=t.getHours();const a=String(t.getMinutes()).padStart(2,"0"),i=n>=12?"PM":"AM";return n=n%12||12,`${n}:${a} ${i}`}function Hv({role:e,currentTime:t,punchModel:n}){const a=k.useRef(null);return k.useEffect(()=>{const i=a.current;if(!i)return;i.innerHTML=Nv(e);const r=i.firstElementChild;r&&(r.style.display="block")},[e]),k.useEffect(()=>{const i=a.current;if(!i)return;const r=i.firstElementChild;r&&(r.style.display="block");const o=i.querySelector("#liveClock");if(o&&(o.textContent=t),e!=="employee")return;const l=i.querySelector("#punchBtn"),s=i.querySelector("#punchStatus");if(!l)return;const{punchState:c,punchDoneForToday:u,punchInTime:y,punchOutTime:m}=n||{};c==="in"?(l.textContent="Punch In",u?(l.style.background="#94A3B8",l.style.cursor="not-allowed",l.style.opacity="0.65",l.onmouseover=null,l.onmouseout=null):(l.style.background="#3B5BDB",l.style.cursor="pointer",l.style.opacity="1",l.onmouseover=function(){this.style.background="#0F766E"},l.onmouseout=function(){this.style.background="#3B5BDB"}),s&&(m?(s.textContent=`Punched out at ${os(m)}`,s.style.color="#C92A2A"):(s.textContent="",s.style.color=""))):(l.textContent="Punch Out",l.style.background="#2F9E44",l.style.cursor="pointer",l.style.opacity="1",l.onmouseover=function(){this.style.background="#1A6E34"},l.onmouseout=function(){this.style.background="#2F9E44"},s&&y&&(s.textContent=`Punched in at ${os(y)}`,s.style.color="#2F9E44"))},[n,t,e]),d.jsx("div",{ref:a})}function Nc(){window.__pfRoleAwareTeamOverridesApplied||!window.teamData||!window.panelCfg||(window.__pfRoleAwareTeamOverridesApplied=!0,window.renderDropdownList=function(t,n){var a=window.panelCfg[t],i=document.getElementById(a.dropdown);if(i){var r=window.__PF_CURRENT_ROLE||"employee",o=window.teamData&&window.teamData[r]||[],l=(n||"").toLowerCase(),s=o.filter(function(c){return!l||c.name.toLowerCase().indexOf(l)!==-1});if(s.length===0){i.innerHTML='<div style="padding:10px 12px;font-size:12px;color:var(--text-tertiary);">No results</div>';return}i.innerHTML=s.map(function(c){return`<div onclick="selectTeamPerson('`+t+"','"+c.id+"','"+c.name+`')" style="padding:8px 12px;font-size:12.5px;cursor:pointer;transition:background 0.1s;" onmouseover="this.style.background='var(--primary-muted)'" onmouseout="this.style.background=''"><div style="font-weight:500;color:var(--text-primary);">`+c.name+'</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">'+c.title+" · "+c.dept+"</div></div>"}).join("")}},window.renderAttTeamData=function(){var t=window.selectedPerson&&window.selectedPerson.att,n=t&&window.attPersonData?window.attPersonData[t]:null,a=document.getElementById("attTeamPrompt"),i=document.getElementById("attTeamBlocks");if(!n){a&&(a.style.display=""),i&&(i.style.display="none");return}a&&(a.style.display="none"),i&&(i.style.display="");var r=n.today,o=r.status==="Present"?"green":r.status==="On Leave"?"amber":"red",l=document.getElementById("attTodayCards");l&&(l.innerHTML='<div style="background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><div style="font-size:12px;font-weight:600;color:var(--primary);">'+r.in+'</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">In Time</div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><div style="font-size:12px;font-weight:600;color:var(--text-primary);">'+r.out+'</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Out Time</div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><div style="font-size:12px;font-weight:600;color:var(--text-primary);">'+r.hrs+'</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Work Hrs</div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><span class="badge '+o+'">'+r.status+'</span><div style="font-size:10px;color:var(--text-secondary);margin-top:4px;">Status</div></div>');var s=window.__PF_CURRENT_ROLE||"employee",c=window.teamData&&window.teamData[s]||[],u=c.find(function(h){return h.id===t})||{name:t},y=document.getElementById("attTodayRow");y&&(y.innerHTML="<tr><td><b>"+u.name+'</b></td><td><span class="badge '+o+'">'+r.status+"</span></td><td>"+r.in+"</td><td>"+r.out+"</td><td>"+r.hrs+"</td></tr>");var m=document.getElementById("attMonthlyRow");if(m){var g=n.monthly||{};Array.isArray(g)?m.innerHTML=g.map(function(h){var E=h.status==="Present"?"green":h.status==="On Leave"?"amber":"red";return"<tr><td>"+(h.date||"—")+'</td><td><span class="badge '+E+'">'+(h.status||"—")+"</span></td><td>"+(h.in||"—")+"</td><td>"+(h.out||"—")+"</td><td>"+(h.hrs||"—")+"</td></tr>"}).join(""):m.innerHTML="<tr><td>"+(g.wd||"—")+"</td><td>"+(g.present||"—")+"</td><td>"+(g.absent||"—")+"</td><td>"+(g.late||"—")+"</td><td>"+(g.avg||"—")+'</td><td><span class="badge '+(g.pctBadge||"gray")+'">'+(g.pct||"—")+"</span></td></tr>",m.style.display="",m.parentElement&&(m.parentElement.style.display="table-row-group")}})}function Ov(e){Nc();const t=e==="manager"||e==="hr",n=document.getElementById("attendanceScopeTabs");n&&(n.style.display=t?"block":"none");const a=document.getElementById("attMonthFilter"),i=document.getElementById("attYearFilter");if(typeof window.attCalMonth<"u"&&a?a.value=String(window.attCalMonth):a&&(window.attCalMonth=parseInt(a.value||"0",10)),typeof window.attCalYear<"u"&&i?i.value=String(window.attCalYear):i&&(window.attCalYear=parseInt(i.value||new Date().getFullYear(),10)),typeof window.populateTeamDropdowns=="function"&&window.populateTeamDropdowns(e),typeof window.scopeSwitch=="function"){const s=document.querySelector('#attendanceScopeTabs .tab[data-scope="me"]');s&&window.scopeSwitch("att","me",s)}typeof window.renderAttCalendar=="function"&&window.renderAttCalendar(),typeof window.updatePenaltyDaysCount=="function"&&window.updatePenaltyDaysCount(),typeof window.updateAvgWorkHours=="function"&&window.updateAvgWorkHours();const r=document.getElementById("attDayDetailContent"),o=new Date,l=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`;if(typeof window.showAttDayDetail=="function"&&typeof window.attCalMonth<"u"&&typeof window.attCalYear<"u"&&window.attCalMonth===o.getMonth()&&window.attCalYear===o.getFullYear()&&window.attData&&window.statusStyles&&Object.prototype.hasOwnProperty.call(window.attData,l)){const s=window.attData[l],c=window.statusStyles[s.status]||window.statusStyles.present;window.showAttDayDetail(l,s,c)}else r&&(r.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--text-tertiary);"><div style="font-size:13px;">Click a date to view details</div></div>')}function qv(e){Nc();const t=e==="manager"||e==="hr",n=document.getElementById("leaveScopeTabs");n&&(n.style.display=t?"block":"none");const a=document.getElementById("leaveApprovalTab");if(a&&(a.style.display=t?"block":"none"),typeof window.populateTeamDropdowns=="function"&&window.populateTeamDropdowns(e),typeof window.scopeSwitch=="function"){const i=document.querySelector('#leaveScopeTabs .tab[data-scope="me"]');i&&window.scopeSwitch("leave","me",i)}}function Vv(e){const t=e==="hr",n=e==="manager"||e==="hr",a=document.getElementById("approvalTasksTab");a&&(a.style.display=n?"block":"none");const i=document.getElementById("approval-tasks-content");i&&(i.style.display=n&&i.style.display||"none");const r=document.getElementById("hrChecklistTab");r&&(r.style.display=t?"block":"none");const o=document.getElementById("approvalAccessDenied"),l=document.getElementById("approvalTasksTable");if(o&&(o.style.display=n?"none":"block"),l&&(l.style.display=n?"block":"none"),!n){const c=document.getElementById("my-tasks-content");if(i&&i.style.display!=="none"){i.style.display="none",c&&(c.style.display="block");var s=document.querySelector('#page-tasks .tabs .tab[onclick*="my-tasks-content"]');s&&(document.querySelectorAll("#page-tasks .tabs .tab").forEach(function(u){u.classList.remove("active")}),s.classList.add("active"))}}}function Yv(e){const t=e==="hr";typeof window.drawOrgConnectors=="function"&&window.setTimeout(function(){try{window.drawOrgConnectors()}catch{}},120);const n=document.getElementById("dirStatusTh");n&&(n.style.display=t?"table-cell":"none"),document.querySelectorAll(".dir-status-cell").forEach(function(o){o.style.display=t?"table-cell":"none"});const a=document.getElementById("onboardingAccessDenied"),i=document.getElementById("onboardingContent");a&&(a.style.display=t?"none":"block"),i&&(i.style.display=t?"block":"none");const r=document.getElementById("onboardingTabBtn");if(r&&(r.style.display=t?"":"none"),!t){const o=document.getElementById("onboarding-tab"),l=document.getElementById("org-chart-tab"),s=document.getElementById("directory-tab");o&&(o.style.display="none");const c=r&&r.classList.contains("active"),u=document.querySelector('#peopleTabs .tab[onclick*="org-chart-tab"]');if(c&&u&&typeof window.switchTab=="function")window.switchTab(u,"org-chart-tab");else if(l&&s&&!c){const y=l.style.display!=="none",m=s.style.display!=="none";!y&&!m&&(l.style.display="block")}}}function Uv({pageId:e,currentRole:t}){return k.useEffect(()=>{let n=!1,a=0;function i(){if(!n&&!(e!=="attendance"&&e!=="leave"&&e!=="people"&&e!=="tasks")){if(e!=="people"&&e!=="tasks"&&typeof window.populateTeamDropdowns!="function"){a+=1,a<20&&window.setTimeout(i,100);return}try{e==="attendance"&&Ov(t),e==="leave"&&qv(t),e==="people"&&Yv(t),e==="tasks"&&Vv(t)}catch(o){console.error(e+" page init failed",o)}}}const r=window.setTimeout(i,60);return()=>{n=!0,window.clearTimeout(r)}},[e,t]),d.jsx("div",{className:"page active",id:`page-${e}`,dangerouslySetInnerHTML:{__html:jv(e)}})}function j({html:e,id:t,className:n,style:a}){return e?d.jsx("div",{id:t,className:n,style:a,dangerouslySetInnerHTML:{__html:e}}):null}const Qr=[{id:"personal-tab",label:"Personal Details"},{id:"family-tab",label:"Family Details"},{id:"job-tab",label:"Job Details"},{id:"history-tab",label:"Employment History"}];function Wv(e){return e?e.replace(/<div class="profile-section" style="margin-bottom:20px;">/,'<div class="profile-section" style="margin-bottom:20px;border-top:none;padding-top:0;margin-top:0;">'):""}function Kv({activeTab:e,onChange:t}){return d.jsx("div",{className:"tabs",children:Qr.map(n=>d.jsx("button",{type:"button",className:`tab ${e===n.id?"active":""}`,onClick:()=>t(n.id),children:n.label},n.id))})}function $v({activeTab:e}){const t=k.useMemo(()=>Object.fromEntries(Qr.map(n=>{const a=zc(`#page-profile #${n.id}`);return[n.id,n.id==="family-tab"?Wv(a):a]})),[]);return d.jsx(d.Fragment,{children:Qr.map(n=>d.jsx(j,{id:n.id,html:t[n.id],style:{display:e===n.id?"block":"none"}},n.id))})}function Gv(){const[e,t]=k.useState("personal-tab"),n=k.useMemo(()=>F("#page-profile .profile-header"),[]),a=k.useMemo(()=>F("#familyModal"),[]),i=k.useMemo(()=>F("#empHistAdminModal"),[]);return k.useEffect(()=>{if(typeof window.initPersonalTab=="function"){const r=window.setTimeout(()=>window.initPersonalTab(),0);return()=>window.clearTimeout(r)}},[e]),k.useEffect(()=>{window.__PF_PROFILE_SET_TAB=t;const r=window.setTimeout(()=>{if(typeof window.renderEmpHistTable=="function"&&e==="history-tab"&&window.renderEmpHistTable(),typeof window.saveFamilyDetails=="function"&&!window.__pfWrappedSaveFamilyDetails){const o=window.saveFamilyDetails;window.saveFamilyDetails=function(){const s=o.apply(this,arguments);return window.__PF_PROFILE_SET_TAB&&window.__PF_PROFILE_SET_TAB("family-tab"),s},window.__pfWrappedSaveFamilyDetails=!0}},0);return()=>{window.clearTimeout(r);try{delete window.__PF_PROFILE_SET_TAB}catch{}}},[e]),d.jsxs("div",{className:"page active",id:"page-profile",children:[d.jsx(j,{html:n}),d.jsxs("div",{className:"card employee-profile-card",children:[d.jsx(Kv,{activeTab:e,onChange:t}),d.jsx($v,{activeTab:e})]}),d.jsx(j,{html:a}),d.jsx(j,{html:i})]})}function jc(){window.__pfRoleAwareTeamOverridesApplied||!window.teamData||!window.panelCfg||(window.__pfRoleAwareTeamOverridesApplied=!0,window.renderDropdownList=function(t,n){var a=window.panelCfg[t],i=document.getElementById(a.dropdown);if(i){var r=window.__PF_CURRENT_ROLE||"employee",o=window.teamData&&window.teamData[r]||[],l=(n||"").toLowerCase(),s=o.filter(function(c){return!l||c.name.toLowerCase().indexOf(l)!==-1});if(s.length===0){i.innerHTML='<div style="padding:10px 12px;font-size:12px;color:var(--text-tertiary);">No results</div>';return}i.innerHTML=s.map(function(c){return`<div onclick="selectTeamPerson('`+t+"','"+c.id+"','"+c.name+`')" style="padding:8px 12px;font-size:12.5px;cursor:pointer;transition:background 0.1s;" onmouseover="this.style.background='var(--primary-muted)'" onmouseout="this.style.background=''"><div style="font-weight:500;color:var(--text-primary);">`+c.name+'</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:1px;">'+c.title+" · "+c.dept+"</div></div>"}).join("")}},window.renderAttTeamData=function(){var t=window.selectedPerson&&window.selectedPerson.att,n=t&&window.attPersonData?window.attPersonData[t]:null,a=document.getElementById("attTeamPrompt"),i=document.getElementById("attTeamBlocks");if(!n){a&&(a.style.display=""),i&&(i.style.display="none");return}a&&(a.style.display="none"),i&&(i.style.display="");var r=n.today,o=r.status==="Present"?"green":r.status==="On Leave"?"amber":"red",l=document.getElementById("attTodayCards");l&&(l.innerHTML='<div style="background:var(--primary-muted);border:1px solid var(--primary-border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><div style="font-size:12px;font-weight:600;color:var(--primary);">'+r.in+'</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">In Time</div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><div style="font-size:12px;font-weight:600;color:var(--text-primary);">'+r.out+'</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Out Time</div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><div style="font-size:12px;font-weight:600;color:var(--text-primary);">'+r.hrs+'</div><div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">Work Hrs</div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;text-align:center;"><span class="badge '+o+'">'+r.status+'</span><div style="font-size:10px;color:var(--text-secondary);margin-top:4px;">Status</div></div>');var s=window.__PF_CURRENT_ROLE||"employee",c=window.teamData&&window.teamData[s]||[],u=c.find(function(h){return h.id===t})||{name:t},y=document.getElementById("attTodayRow");y&&(y.innerHTML="<tr><td><b>"+u.name+'</b></td><td><span class="badge '+o+'">'+r.status+"</span></td><td>"+r.in+"</td><td>"+r.out+"</td><td>"+r.hrs+"</td></tr>");var m=document.getElementById("attMonthlyRow");if(m){var g=n.monthly||{};Array.isArray(g)?m.innerHTML=g.map(function(h){var E=h.status==="Present"?"green":h.status==="On Leave"?"amber":"red";return"<tr><td>"+(h.date||"—")+'</td><td><span class="badge '+E+'">'+(h.status||"—")+"</span></td><td>"+(h.in||"—")+"</td><td>"+(h.out||"—")+"</td><td>"+(h.hrs||"—")+"</td></tr>"}).join(""):m.innerHTML="<tr><td>"+(g.wd||"—")+"</td><td>"+(g.present||"—")+"</td><td>"+(g.absent||"—")+"</td><td>"+(g.late||"—")+"</td><td>"+(g.avg||"—")+'</td><td><span class="badge '+(g.pctBadge||"gray")+'">'+(g.pct||"—")+"</span></td></tr>"}})}function Jv(e){const t=e==="hr",n=e==="manager"||e==="hr",a=document.getElementById("approvalTasksTab");a&&(a.style.display=n?"block":"none");const i=document.getElementById("hrChecklistTab");i&&(i.style.display=t?"block":"none");const r=document.getElementById("approvalAccessDenied"),o=document.getElementById("approvalTasksTable");if(r&&(r.style.display=n?"none":"block"),o&&(o.style.display=n?"block":"none"),!n){const s=document.getElementById("approval-tasks-content"),c=document.getElementById("my-tasks-content");if(s&&s.style.display!=="none"){s.style.display="none",c&&(c.style.display="block");var l=document.querySelector('#page-tasks .tabs .tab[onclick*="my-tasks-content"]');l&&(document.querySelectorAll("#page-tasks .tabs .tab").forEach(function(u){u.classList.remove("active")}),l.classList.add("active"))}}}function Qv(e){jc();const t=e==="manager"||e==="hr",n=document.getElementById("attendanceScopeTabs");n&&(n.style.display=t?"block":"none");const a=document.getElementById("attMonthFilter"),i=document.getElementById("attYearFilter");typeof window.attCalMonth<"u"&&a?a.value=String(window.attCalMonth):a&&(window.attCalMonth=parseInt(a.value||"0",10)),typeof window.attCalYear<"u"&&i?i.value=String(window.attCalYear):i&&(window.attCalYear=parseInt(i.value||new Date().getFullYear(),10)),typeof window.populateTeamDropdowns=="function"&&window.populateTeamDropdowns(e),typeof window.renderAttCalendar=="function"&&window.renderAttCalendar(),typeof window.updatePenaltyDaysCount=="function"&&window.updatePenaltyDaysCount(),typeof window.updateAvgWorkHours=="function"&&window.updateAvgWorkHours();const r=document.getElementById("attDayDetailContent"),o=new Date,l=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`;if(typeof window.showAttDayDetail=="function"&&typeof window.attCalMonth<"u"&&typeof window.attCalYear<"u"&&window.attCalMonth===o.getMonth()&&window.attCalYear===o.getFullYear()&&window.attData&&window.statusStyles&&Object.prototype.hasOwnProperty.call(window.attData,l)){const s=window.attData[l],c=window.statusStyles[s.status]||window.statusStyles.present;window.showAttDayDetail(l,s,c)}else r&&(r.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--text-tertiary);"><div style="font-size:13px;">Click a date to view details</div></div>')}function Xv(e){jc();const t=e==="manager"||e==="hr",n=document.getElementById("leaveScopeTabs");n&&(n.style.display=t?"block":"none"),typeof window.populateTeamDropdowns=="function"&&window.populateTeamDropdowns(e)}function tr(e){return e?e.replace(/(<[^>]+\sid=["'](?:attendanceTeamView|attTeamDropdownWrap|attSelectedChip)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}function Zv({currentRole:e,scope:t,onChange:n,teamDropdownHtml:a,selectedChipHtml:i}){return["manager","hr"].includes(e)?d.jsx("div",{id:"attendanceScopeTabs",style:{marginBottom:14},children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[d.jsxs("div",{className:"tabs",style:{marginBottom:0},children:[d.jsx("button",{type:"button",className:`tab ${t==="me"?"active":""}`,"data-scope":"me",onClick:()=>n("me"),children:"Me"}),d.jsx("button",{type:"button",className:`tab ${t==="team"?"active":""}`,"data-scope":"team",onClick:()=>n("team"),children:"My Team"})]}),d.jsx(j,{html:a,style:{display:t==="team"?"block":"none"}}),d.jsx(j,{html:i,style:{display:t==="team"?"flex":"none"}})]})}):null}function em({currentRole:e}){const[t,n]=k.useState("me"),a=k.useMemo(()=>F("#page-attendance #attendanceMeView"),[]),i=k.useMemo(()=>tr(F("#page-attendance #attendanceTeamView")),[]),r=k.useMemo(()=>tr(F("#page-attendance #attTeamDropdownWrap")),[]),o=k.useMemo(()=>tr(F("#page-attendance #attSelectedChip")),[]);return k.useEffect(()=>{const l=window.setTimeout(()=>Qv(e),60);return()=>window.clearTimeout(l)},[e]),k.useEffect(()=>{const l=["manager","hr"].includes(e),s=document.getElementById("attendanceMeView"),c=document.getElementById("attendanceTeamView"),u=document.getElementById("attTeamDropdownWrap"),y=document.getElementById("attSelectedChip"),m=document.getElementById("attTeamPrompt"),g=document.getElementById("attTeamBlocks"),h=window.selectedPerson&&window.selectedPerson.att;if(!l){s&&(s.style.display=""),c&&(c.style.display="none"),u&&(u.style.display="none"),y&&(y.style.display="none");return}s&&(s.style.display=t==="me"?"":"none"),c&&(c.style.display=t==="team"?"":"none"),t==="team"?(u&&(u.style.display=h?"none":"block"),y&&(y.style.display=h?"inline-flex":"none"),h&&typeof window.renderAttTeamData=="function"?window.renderAttTeamData():(m&&(m.style.display=""),g&&(g.style.display="none"))):(u&&(u.style.display="none"),y&&(y.style.display="none"))},[t,e]),d.jsxs("div",{className:"page active",id:"page-attendance",children:[d.jsx(Zv,{currentRole:e,scope:t,onChange:n,teamDropdownHtml:r,selectedChipHtml:o}),d.jsx(j,{html:a,style:{display:t==="me"?"block":"none"}}),d.jsx(j,{html:i,style:{display:t==="team"?"block":"none"}})]})}function dn(e){return e?e.replace(/(<[^>]+\sid=["'](?:my-leave-tab|holidays-tab|leave-approval-tab|leaveTeamView|leaveTeamDropdownWrap|leaveSelectedChip)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}const ls=[{id:"apply-tab",label:"Apply Leave"},{id:"my-leave-tab",label:"My Leaves"},{id:"holidays-tab",label:"Holidays"}];function tm({currentRole:e,scope:t,onChange:n,teamDropdownHtml:a,selectedChipHtml:i}){return["manager","hr"].includes(e)?d.jsx("div",{id:"leaveScopeTabs",style:{marginBottom:14},children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[d.jsxs("div",{className:"tabs",style:{marginBottom:0},children:[d.jsx("button",{type:"button",className:`tab ${t==="me"?"active":""}`,"data-scope":"me",onClick:()=>n("me"),children:"Me"}),d.jsx("button",{type:"button",className:`tab ${t==="team"?"active":""}`,"data-scope":"team",onClick:()=>n("team"),children:"My Team"})]}),d.jsx(j,{html:a,style:{display:t==="team"?"block":"none"}}),d.jsx(j,{html:i,style:{display:t==="team"?"flex":"none"}})]})}):null}function nm({currentRole:e,activeTab:t,onChange:n}){const a=["manager","hr"].includes(e)?[...ls,{id:"leave-approval-tab",label:"Pending Approvals"}]:ls;return d.jsx("div",{className:"tabs",children:a.map(i=>d.jsxs("button",{type:"button",className:`tab ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:[i.label,i.id==="leave-approval-tab"?d.jsx("span",{style:{background:"#B91C1C",color:"white",fontSize:10,padding:"1px 6px",borderRadius:8,marginLeft:4,fontWeight:500},children:"3"}):null]},i.id))})}function am({currentRole:e}){const[t,n]=k.useState("apply-tab"),a=k.useMemo(()=>F("#page-leave #leaveMeView .leave-type-grid"),[]),i=k.useMemo(()=>F("#page-leave #apply-tab"),[]),r=k.useMemo(()=>dn(F("#page-leave #my-leave-tab")),[]),o=k.useMemo(()=>dn(F("#page-leave #holidays-tab")),[]),l=k.useMemo(()=>dn(F("#page-leave #leave-approval-tab")),[]);return d.jsxs("div",{id:"leaveMeView",children:[d.jsx(j,{html:a}),d.jsx(nm,{currentRole:e,activeTab:t,onChange:n}),d.jsx(j,{html:i,style:{display:t==="apply-tab"?"block":"none"}}),d.jsx(j,{html:r,style:{display:t==="my-leave-tab"?"block":"none"}}),d.jsx(j,{html:o,style:{display:t==="holidays-tab"?"block":"none"}}),["manager","hr"].includes(e)?d.jsx("div",{id:"leaveApprovalTab",style:{display:t==="leave-approval-tab"?"block":"none"},children:d.jsx(j,{html:l})}):null]})}function im({currentRole:e}){const[t,n]=k.useState("me"),a=k.useMemo(()=>dn(F("#page-leave #leaveTeamView")),[]),i=k.useMemo(()=>dn(F("#page-leave #leaveTeamDropdownWrap")),[]),r=k.useMemo(()=>dn(F("#page-leave #leaveSelectedChip")),[]);return k.useEffect(()=>{const o=window.setTimeout(()=>Xv(e),60);return()=>window.clearTimeout(o)},[e]),k.useEffect(()=>{const o=["manager","hr"].includes(e),l=document.getElementById("leaveMeView"),s=document.getElementById("leaveTeamView"),c=document.getElementById("leaveTeamDropdownWrap"),u=document.getElementById("leaveSelectedChip"),y=document.getElementById("leaveTeamPrompt"),m=document.getElementById("leaveTeamCards"),g=window.selectedPerson&&window.selectedPerson.leave;if(!o){l&&(l.style.display=""),s&&(s.style.display="none"),c&&(c.style.display="none"),u&&(u.style.display="none");return}l&&(l.style.display=t==="me"?"":"none"),s&&(s.style.display=t==="team"?"":"none"),t==="team"?(c&&(c.style.display=g?"none":"block"),u&&(u.style.display=g?"inline-flex":"none"),g&&typeof window.renderLeaveTeamData=="function"?window.renderLeaveTeamData():(y&&(y.style.display=""),m&&(m.style.display="none"))):(c&&(c.style.display="none"),u&&(u.style.display="none"))},[t,e]),d.jsxs("div",{className:"page active",id:"page-leave",children:[d.jsx(tm,{currentRole:e,scope:t,onChange:n,teamDropdownHtml:i,selectedChipHtml:r}),d.jsx("div",{style:{display:t==="me"?"block":"none"},children:d.jsx(am,{currentRole:e})}),d.jsx(j,{html:a,style:{display:t==="team"?"block":"none"}})]})}function Aa(e){return e?e.replace(/(<[^>]+\sid=["'](?:approval-tasks-content|hr-tasks-content|review-section-content|new-task-content)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}function rm(e){var o,l,s,c,u,y,m,g;const t=((l=(o=e.querySelector(".task-id-chip"))==null?void 0:o.textContent)==null?void 0:l.trim())||"RV-000",n=((c=(s=e.querySelector(".task-title"))==null?void 0:s.textContent)==null?void 0:c.trim())||"",a=((y=(u=e.querySelector(".task-due"))==null?void 0:u.textContent)==null?void 0:y.replace(/^Due:\s*/i,"").trim())||"",i=((g=(m=e.querySelector(".badge"))==null?void 0:m.textContent)==null?void 0:g.trim())||"",r=e.getAttribute("data-rv-type")||"performance";return{id:t,title:n,due:a,status:i,type:r}}function om({modal:e,onClose:t}){if(!e)return null;const n=e.mode==="view",a=n?"View Review":"Start Review";return d.jsx("div",{style:{display:"flex",position:"fixed",inset:0,zIndex:9999,alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(3px)"},onClick:i=>{i.target===i.currentTarget&&t()},children:d.jsxs("div",{style:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"var(--radius-lg)",padding:24,width:"100%",maxWidth:720,boxShadow:"var(--shadow-lg)",position:"relative"},children:[d.jsx("button",{className:"req-edit-close",onClick:t,"aria-label":"Close",children:"✕"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[d.jsxs("div",{className:"req-edit-title",style:{marginBottom:0},children:["📝 ",a]}),d.jsx("span",{style:{fontSize:10.5,fontWeight:600,fontFamily:"var(--mono)",color:"var(--text-tertiary)",background:"var(--border-subtle)",border:"1px solid var(--border)",borderRadius:4,padding:"2px 7px"},children:e.id})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[d.jsxs("div",{className:"form-group",style:{gridColumn:"1 / -1"},children:[d.jsx("div",{className:"form-label",children:"Review Title"}),d.jsx("input",{className:"form-input",readOnly:!0,value:e.title})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("div",{className:"form-label",children:"Review Type"}),d.jsx("input",{className:"form-input",readOnly:!0,value:e.type})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("div",{className:"form-label",children:n?"Submitted / Due Date":"Due Date"}),d.jsx("input",{className:"form-input",readOnly:!0,value:e.due||"—"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("div",{className:"form-label",children:"Status"}),d.jsx("input",{className:"form-input",readOnly:!0,value:e.status||(n?"Completed":"Pending")})]}),d.jsxs("div",{className:"form-group",style:{gridColumn:"1 / -1"},children:[d.jsx("div",{className:"form-label",children:n?"Reviewer Notes":"Review Notes"}),d.jsx("textarea",{className:"form-input",rows:"5",placeholder:n?"":"Add review comments",readOnly:n,defaultValue:n?"Review submitted successfully.":""})]})]}),d.jsx("div",{style:{display:"flex",gap:10,marginTop:18},children:n?d.jsx("button",{className:"btn-sm primary",onClick:t,children:"Close"}):d.jsxs(d.Fragment,{children:[d.jsx("button",{className:"btn-sm primary",onClick:()=>{var i;(i=window.showToast)==null||i.call(window,"Review submitted successfully!","success"),t()},children:"Submit Review"}),d.jsx("button",{className:"btn-sm success",onClick:()=>{var i;(i=window.showToast)==null||i.call(window,"Review draft saved.","success"),t()},children:"Save Draft"}),d.jsx("button",{className:"btn-sm",onClick:t,children:"Cancel"})]})})]})})}function lm({currentRole:e}){const t=e==="manager"||e==="hr",n=e==="hr",[a,i]=k.useState("my-tasks-content"),[r,o]=k.useState(null),l=k.useMemo(()=>({"my-tasks-content":F("#page-tasks #my-tasks-content"),"approval-tasks-content":Aa(F("#page-tasks #approval-tasks-content")),"hr-tasks-content":Aa(F("#page-tasks #hr-tasks-content")),"review-section-content":Aa(F("#page-tasks #review-section-content")),"new-task-content":Aa(F("#page-tasks #new-task-content"))}),[]),s=k.useMemo(()=>F("#editTaskModal"),[]),c=k.useMemo(()=>{const u=[{id:"my-tasks-content",label:"My Tasks (5)"}];return t&&u.push({id:"approval-tasks-content",label:"Approval Tasks (3)"}),n&&u.push({id:"hr-tasks-content",label:"HR Checklist"}),u.push({id:"review-section-content",label:"Review Section"}),u},[t,n]);return k.useEffect(()=>{const u=window.setTimeout(()=>Jv(e),60);return()=>window.clearTimeout(u)},[e]),k.useEffect(()=>{if(a==="approval-tasks-content"&&!t){i("my-tasks-content");return}a==="hr-tasks-content"&&!n&&i("my-tasks-content")},[a,t,n]),k.useEffect(()=>{const u=window.setTimeout(()=>{if(a==="my-tasks-content"&&typeof window.segFilterMyTasks=="function"){const y=document.querySelector('#taskFilterSegment .task-seg-btn[data-value="open"]');window.segFilterMyTasks("open",y)}if(a==="approval-tasks-content"&&typeof window.segFilterApprovals=="function"){const y=document.querySelector('#approvalFilterSegment .task-seg-btn[data-ap-value="pending"]');y&&window.segFilterApprovals("pending",y)}if(a==="review-section-content"&&typeof window.segFilterReviews=="function"){const y=document.querySelector('#reviewFilterSegment .task-seg-btn[data-rv-value="pending"]');y&&window.segFilterReviews("pending",y)}},80);return()=>window.clearTimeout(u)},[a]),k.useEffect(()=>{if(a!=="review-section-content")return;const u=window.setTimeout(()=>{Array.from(document.querySelectorAll("#review-section-content .task-edit-btn")).forEach(m=>{m.onclick=function(g){g.preventDefault(),g.stopPropagation();const h=m.closest(".task-card"),E=rm(h),_=/view/i.test(m.textContent||"")?"view":"start";return o({...E,mode:_}),!1}})},50);return()=>window.clearTimeout(u)},[a]),d.jsxs("div",{className:"page active",id:"page-tasks",children:[d.jsxs("div",{className:"tabs",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("div",{style:{display:"flex",alignItems:"center"},children:c.map(u=>d.jsx("button",{type:"button",id:u.id==="approval-tasks-content"?"approvalTasksTab":u.id==="hr-tasks-content"?"hrChecklistTab":u.id==="review-section-content"?"reviewSectionTab":void 0,className:`tab ${a===u.id?"active":""}`,onClick:()=>i(u.id),children:u.label},u.id))}),d.jsx("div",{id:"newTaskTab",style:{paddingRight:4},children:d.jsxs("button",{className:"btn-sm primary",onClick:()=>i("new-task-content"),style:{fontSize:12,padding:"5px 14px",display:"flex",alignItems:"center",gap:5},children:[d.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"New Task"]})})]}),["my-tasks-content","approval-tasks-content","hr-tasks-content","review-section-content","new-task-content"].map(u=>d.jsx(j,{html:l[u],style:{display:a===u?"block":"none"}},u)),d.jsx(j,{html:s}),d.jsx(om,{modal:r,onClose:()=>o(null)})]})}function nr(e){return e?e.replace(/(<[^>]+\sid=["'](?:salary-tab|payroll-history-tab|bank-details-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}const ss=[{id:"payslip-tab",label:"Payslip"},{id:"salary-tab",label:"Salary Structure"},{id:"payroll-history-tab",label:"History"},{id:"bank-details-tab",label:"Bank Details"}];function sm(){const[e,t]=k.useState("payslip-tab"),n=k.useMemo(()=>({"payslip-tab":F("#page-payroll #payslip-tab"),"salary-tab":nr(F("#page-payroll #salary-tab")),"payroll-history-tab":nr(F("#page-payroll #payroll-history-tab")),"bank-details-tab":nr(F("#page-payroll #bank-details-tab"))}),[]);return k.useEffect(()=>{const a=window.setTimeout(()=>{e==="salary-tab"&&typeof window.renderSalaryStructure=="function"&&window.renderSalaryStructure(),e==="payroll-history-tab"&&typeof window.renderSalaryHistory=="function"&&window.renderSalaryHistory()},60);return()=>window.clearTimeout(a)},[e]),d.jsxs("div",{className:"page active",id:"page-payroll",children:[d.jsx("div",{className:"tabs",children:ss.map(a=>d.jsx("button",{type:"button",className:`tab ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:a.label},a.id))}),ss.map(a=>d.jsx(j,{html:n[a.id],style:{display:e===a.id?"block":"none"}},a.id))]})}function ds(e){return e?e.replace(/(<[^>]+\sid=["'](?:company-docs-tab|upload-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}const cs=[{id:"my-docs-tab",label:"My Documents"},{id:"company-docs-tab",label:"Company Documents"},{id:"upload-tab",label:"Upload Document"}];function dm(){const[e,t]=k.useState("my-docs-tab"),n=k.useMemo(()=>({"my-docs-tab":F("#page-documents #my-docs-tab"),"company-docs-tab":ds(F("#page-documents #company-docs-tab")),"upload-tab":ds(F("#page-documents #upload-tab"))}),[]);return d.jsxs("div",{className:"page active",id:"page-documents",children:[d.jsx("div",{className:"tabs",children:cs.map(a=>d.jsx("button",{type:"button",className:`tab ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:a.label},a.id))}),cs.map(a=>d.jsx(j,{html:n[a.id],style:{display:e===a.id?"block":"none"}},a.id))]})}const Hc=[{id:"org-chart-tab",label:"Org Chart"},{id:"directory-tab",label:"Directory"},{id:"onboarding-tab",label:"Onboarding",hrOnly:!0}];function ps(e){return e?e.replace(/(<[^>]+\sid=["'](?:directory-tab|onboarding-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}function cm({currentRole:e,activeTab:t,onChange:n}){const a=Hc.filter(i=>!i.hrOnly||e==="hr");return d.jsx("div",{className:"tabs",id:"peopleTabs",children:a.map(i=>d.jsx("button",{type:"button",id:i.id==="onboarding-tab"?"onboardingTabBtn":void 0,className:`tab ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:i.label},i.id))})}function pm({currentRole:e}){var l;const[t,n]=k.useState("org-chart-tab"),a=e==="hr",i=k.useMemo(()=>({"org-chart-tab":F("#page-people #org-chart-tab"),"directory-tab":ps(F("#page-people #directory-tab")),"onboarding-tab":ps(F("#page-people #onboarding-tab"))}),[]),r=Hc.filter(s=>!s.hrOnly||a),o=r.some(s=>s.id===t)?t:((l=r[0])==null?void 0:l.id)||"org-chart-tab";return k.useEffect(()=>{const s=window.setTimeout(()=>{if(typeof window.drawOrgConnectors=="function"&&o==="org-chart-tab")try{window.drawOrgConnectors()}catch{}const c=document.getElementById("dirStatusTh");c&&(c.style.display=a?"table-cell":"none"),document.querySelectorAll(".dir-status-cell").forEach(m=>{m.style.display=a?"table-cell":"none"});const u=document.getElementById("onboardingAccessDenied"),y=document.getElementById("onboardingContent");u&&(u.style.display=a?"none":"block"),y&&(y.style.display=a?"block":"none")},80);return()=>window.clearTimeout(s)},[o,a]),d.jsxs("div",{className:"page active",id:"page-people",children:[d.jsx(cm,{currentRole:e,activeTab:o,onChange:n}),r.map(s=>d.jsx(j,{html:i[s.id],style:{display:o===s.id?"block":"none"}},s.id))]})}const Oc=[{id:"my-requests-tab",label:"My Requests"},{id:"raise-request-tab",label:"Raise Claim Request"},{id:"approval-queue-tab",label:"Approval Queue",hrOnly:!0}];function us(e){return e?e.replace(/(<[^>]+\sid=["'](?:raise-request-tab|approval-queue-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}function um({currentRole:e,activeTab:t,onChange:n}){const a=Oc.filter(i=>!i.hrOnly||e==="hr");return d.jsx("div",{className:"tabs",children:a.map(i=>d.jsx("button",{type:"button",id:i.id==="approval-queue-tab"?"approvalQueueTab":void 0,className:`tab ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:i.label},i.id))})}function vm({currentRole:e}){var l;const[t,n]=k.useState("my-requests-tab"),a=k.useMemo(()=>({"my-requests-tab":F("#page-requests #my-requests-tab"),"raise-request-tab":us(F("#page-requests #raise-request-tab")),"approval-queue-tab":us(F("#page-requests #approval-queue-tab"))}),[]),i=k.useMemo(()=>F("#editReqModal"),[]),r=Oc.filter(s=>!s.hrOnly||e==="hr"),o=r.some(s=>s.id===t)?t:((l=r[0])==null?void 0:l.id)||"my-requests-tab";return k.useEffect(()=>{const s=window.setTimeout(()=>{if(o==="my-requests-tab"&&typeof window.filterMyRequests=="function"){const c=document.querySelector('#reqFilterSegment .task-seg-btn[data-value="pending"]');window.filterMyRequests("pending",c)}},80);return()=>window.clearTimeout(s)},[o]),d.jsxs("div",{className:"page active",id:"page-requests",children:[d.jsx(um,{currentRole:e,activeTab:o,onChange:n}),r.map(s=>d.jsx(j,{html:a[s.id],style:{display:o===s.id?"block":"none"}},s.id)),d.jsx(j,{html:i})]})}const qc=[{id:"my-tickets-tab",label:"My Tickets (3)"},{id:"raise-ticket-tab",label:"Raise Ticket"},{id:"admin-queue-tab",label:"Admin Queue",itOnly:!0}];function vs(e){return e?e.replace(/(<[^>]+\sid=["'](?:raise-ticket-tab|admin-queue-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}function mm({currentRole:e,activeTab:t,onChange:n}){const a=qc.filter(i=>!i.itOnly||e==="itadmin");return d.jsx("div",{className:"tabs",id:"helpdeskTabs",children:a.map(i=>d.jsx("button",{type:"button",id:i.id==="admin-queue-tab"?"adminQueueTab":void 0,className:`tab ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:i.id==="admin-queue-tab"?d.jsxs(d.Fragment,{children:["Admin Queue"," ",d.jsx("span",{style:{background:"#B91C1C",color:"white",fontSize:10,padding:"1px 6px",borderRadius:8,marginLeft:4,fontWeight:500},children:"2"})]}):i.label},i.id))})}function fm({currentRole:e}){var l;const[t,n]=k.useState("my-tickets-tab"),a=k.useMemo(()=>({"my-tickets-tab":F("#page-helpdesk #my-tickets-tab"),"raise-ticket-tab":vs(F("#page-helpdesk #raise-ticket-tab")),"admin-queue-tab":vs(F("#page-helpdesk #admin-queue-tab"))}),[]),i=k.useMemo(()=>F("#editHdModal"),[]),r=qc.filter(s=>!s.itOnly||e==="itadmin"),o=r.some(s=>s.id===t)?t:((l=r[0])==null?void 0:l.id)||"my-tickets-tab";return k.useEffect(()=>{const s=window.setTimeout(()=>{if(o==="my-tickets-tab"&&typeof window.segFilterHD=="function"){const c=document.querySelector('#hdFilterSegment .task-seg-btn[data-hd-value="open"]');c&&window.segFilterHD("open",c)}},80);return()=>window.clearTimeout(s)},[o]),d.jsxs("div",{className:"page active",id:"page-helpdesk",children:[d.jsx(mm,{currentRole:e,activeTab:o,onChange:n}),r.map(s=>d.jsx(j,{html:a[s.id],style:{display:o===s.id?"block":"none"}},s.id)),d.jsx(j,{html:i})]})}function ar(e){return e?e.replace(/(<[^>]+\sid=["'](?:taxdocs-itdecl-tab|taxdocs-poi-tab|taxdocs-ytd-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}const ms=[{id:"taxdocs-main-tab",label:"All Documents"},{id:"taxdocs-itdecl-tab",label:"IT Declaration"},{id:"taxdocs-poi-tab",label:"Proof of Investment"},{id:"taxdocs-ytd-tab",label:"YTD Reports"}];function ym(){const[e,t]=k.useState("taxdocs-main-tab"),n=k.useMemo(()=>({"taxdocs-main-tab":F("#page-taxdocs #taxdocs-main-tab"),"taxdocs-itdecl-tab":ar(F("#page-taxdocs #taxdocs-itdecl-tab")),"taxdocs-poi-tab":ar(F("#page-taxdocs #taxdocs-poi-tab")),"taxdocs-ytd-tab":ar(F("#page-taxdocs #taxdocs-ytd-tab"))}),[]);return d.jsxs("div",{className:"page active",id:"page-taxdocs",children:[d.jsx("div",{className:"tabs",style:{marginBottom:0},children:ms.map(a=>d.jsx("button",{type:"button",className:`tab ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:a.label},a.id))}),ms.map(a=>d.jsx(j,{html:n[a.id],style:{display:e===a.id?"block":"none"}},a.id))]})}function gm(e){return e?e.replace(/(<[^>]+\sid=["'](?:custom-reports-tab)["'][^>]*?)\sstyle=["']([^"']*)["']/gi,function(t,n,a){const i=a.replace(/display\s*:\s*none\s*;?/gi,"").replace(/\s{2,}/g," ").trim();return i?`${n} style="${i}"`:n}):""}const fs=[{id:"std-reports-tab",label:"Standard Reports"},{id:"custom-reports-tab",label:"Custom Report Builder"}];function hm(){const[e,t]=k.useState("std-reports-tab"),n=k.useMemo(()=>({"std-reports-tab":F("#page-reports #std-reports-tab"),"custom-reports-tab":gm(F("#page-reports #custom-reports-tab"))}),[]);return d.jsxs("div",{className:"page active",id:"page-reports",children:[d.jsx("div",{className:"tabs",children:fs.map(a=>d.jsx("button",{type:"button",className:`tab ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:a.label},a.id))}),fs.map(a=>d.jsx(j,{html:n[a.id],style:{display:e===a.id?"block":"none"}},a.id))]})}function ys(e){e&&(e.innerHTML="",document.querySelectorAll('script[data-peopleflow-wireframe="true"]').forEach(t=>t.remove()))}function gs(e,t){const n=document.createElement("script");return n.type="text/javascript",n.dataset.peopleflowWireframe="true",n.dataset.scriptKey=t,n.text=e,document.body.appendChild(n),n}function xm(){const e=k.useRef(null);return k.useEffect(()=>{const t=e.current;if(t)return ys(t),t.innerHTML=Lc,gs(Ic,"wireframe-script-1"),gs(Mc,"wireframe-script-2"),document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0})),window.dispatchEvent(new Event("DOMContentLoaded")),window.dispatchEvent(new Event("load")),()=>ys(t)},[]),d.jsx("div",{id:"peopleflow-wireframe-root",ref:e})}const bm={success:"✅",error:"❌",info:"ℹ️",warning:"⚠️"},Vc="pf-punch-state",hs="pf-theme";function ui(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function xs(e){const t=e instanceof Date?e:new Date(e);let n=t.getHours();const a=String(t.getMinutes()).padStart(2,"0"),i=n>=12?"PM":"AM";return n=n%12||12,`${n}:${a} ${i}`}function wm(e,t){if(!e||!t)return"—";const n=new Date(t)-new Date(e);if(!Number.isFinite(n)||n<=0)return"—";const a=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4);return`${a}h ${String(i).padStart(2,"0")}m`}function Xr(){return{punchState:"in",punchDoneForToday:!1,punchInTime:null,punchOutTime:null,dayKey:ui()}}function km(){const e=Xr();try{const t=localStorage.getItem(Vc);if(!t)return e;const n=JSON.parse(t),a=ui();return!n||n.dayKey!==a?e:{...e,...n,dayKey:a}}catch{return e}}class Em extends op.Component{constructor(t){super(t),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(t){console.error("PeopleFlow safe decomposed runtime failed. Falling back to exact wireframe app.",t)}render(){return this.state.failed?d.jsx(xm,{}):this.props.children}}function Dm(){const[e,t]=k.useState("employee"),[n,a]=k.useState(Ve.employee.email),[i,r]=k.useState(Ve.employee.password),[o,l]=k.useState(!1),[s,c]=k.useState("employee"),[u,y]=k.useState("dashboard"),[m,g]=k.useState(!1),[h,E]=k.useState(!1),[_,v]=k.useState(()=>{try{return localStorage.getItem(hs)==="dark"}catch{return!1}}),[p,f]=k.useState([]),[b,C]=k.useState("09:15:32"),[S,B]=k.useState(()=>km()),R=Ve[s]||Ve.employee,Y=R.name.split(" ")[0],I=k.useMemo(()=>xv(u,s,Y),[u,s,Y]);k.useEffect(()=>(window.__PF_CURRENT_ROLE=s,window.__PF_CURRENT_PAGE=u,window.__PF_LOGGED_IN=o,()=>{try{delete window.__PF_CURRENT_ROLE}catch{}try{delete window.__PF_CURRENT_PAGE}catch{}try{delete window.__PF_LOGGED_IN}catch{}}),[s,u,o]),k.useEffect(()=>{const x=()=>{const A=new Date,P=String(A.getHours()).padStart(2,"0"),z=String(A.getMinutes()).padStart(2,"0"),Ot=String(A.getSeconds()).padStart(2,"0");C(`${P}:${z}:${Ot}`);const qe=ui(A);B(qt=>qt.dayKey===qe?qt:Xr())};x();const D=setInterval(x,1e3);return()=>clearInterval(D)},[]),k.useEffect(()=>{document.documentElement.classList.toggle("dark",_);try{localStorage.setItem(hs,_?"dark":"light")}catch{}},[_]),k.useEffect(()=>{try{localStorage.setItem(Vc,JSON.stringify(S))}catch{}},[S]);const O=k.useCallback((x,D="info")=>{const A=`${Date.now()}-${Math.random()}`;f(P=>[...P,{id:A,message:x,type:D,icon:bm[D]||"ℹ️"}]),window.setTimeout(()=>{f(P=>P.filter(z=>z.id!==A))},3500)},[]),wt=k.useCallback((x,D)=>{t(x),a(D.email),r(D.password)},[]),kt=k.useCallback(()=>{const x=n.trim().toLowerCase(),D=Object.entries(Ve).find(([,P])=>P.password===i.trim()&&(!x||P.email.toLowerCase()===x));if(!i.trim()){window.alert("Please enter your password.");return}if(!D){window.alert("Wrong password. Please try again.");return}const[A]=D;c(A),t(A),l(!0),y("dashboard"),g(!1),E(!1),O(`Welcome, ${Ve[A].name}!`,"success")},[n,i,O]),jt=k.useCallback(()=>{l(!1),c("employee"),t("employee"),a(Ve.employee.email),r(Ve.employee.password),y("dashboard"),g(!1),E(!1),O("Signed out successfully","info")},[O]),et=k.useCallback(x=>{if(x==="reports"&&!["hr","payroll","leadership"].includes(s)){O("Access denied — Reports are restricted to HR, Payroll & Leadership.","error");return}y(x),g(!1),E(!1)},[s,O]),Ht=k.useCallback(()=>{const x=new Date,D=ui(x);B(A=>{const P=A.dayKey===D?A:Xr();if(P.punchState==="in")return P.punchDoneForToday?(O("You have already completed your attendance for today.","info"),P):(O(`Punched in at ${xs(x)}`,"success"),{punchState:"out",punchDoneForToday:!1,punchInTime:x.toISOString(),punchOutTime:null,dayKey:D});const z=wm(P.punchInTime,x.toISOString());return O(`Punched out at ${xs(x)} — Total: ${z}. Punch-in disabled for today.`,"info"),{punchState:"in",punchDoneForToday:!0,punchInTime:P.punchInTime,punchOutTime:x.toISOString(),dayKey:D}})},[O]),Et=k.useCallback(()=>{v(x=>!x)},[]);return k.useEffect(()=>(["_applyApFilters","_applyRvFilters","_getApRows","_getDropdownValue","_getRvRows","addEmpHistRow","addFamilyChildRow","addMultiClaimRow","applyApprovalDRFromPopover","applyHDDateRange","applyHDDateRangeFromPopover","applyLeaveApprovalDR","applyLeaveApprovalDRFromPopover","applyMyLeaveDR","applyMyLeaveDRFromPopover","applyReqDateRange","applyReqDateRangeFromPopover","applyReviewDRFromPopover","applyTaskDateRange","applyTaskDateRangeFromPopover","applyTaskDropdownFilter","applyTaskPriorityFilter","applyTaskSort","applyTeamLeaveDR","applyTeamLeaveDRFromPopover","approvalTypeDropdownKeydown","attChangeTeamMonth","calcHrs","cancelEmpHistEdit","cancelITDeclaration","cancelPersonalEdit","changeCalMonth","checkLandlordPANRequired","checkSandwichLeave","clearApprovalDateRange","clearFieldError","clearHDDateRange","clearLeaveApprovalDR","clearMyLeaveDR","clearReqDateRange","clearReviewDateRange","clearTaskDateRange","clearTeamLeaveDR","clearTeamSelection","closeApprovalTypeDropdown","closeClaimTypePage","closeEditHdModal","closeEditReqModal","closeEditTaskModal","closeEmpHistAdminModal","closeFamilyModal","closeLeaveCalendar","closeReviewTypeDropdown","closeTaskDropdown","dismissRejectionBanner","downloadAllHistory","empCTCCellHtml","empCloneRecords","empFmtDate","empStatusBadge","enablePersonalEdit","enableRaiseClaimEdit","escHtml","filterApprovalTypeDropdownOptions","filterApprovalsByPriority","filterApprovalsByType","filterDirectory","filterHDByDate","filterHelpDeskTickets","filterLeaveApprovals","filterMyLeaves","filterMyRequests","filterMyTasks","filterMyTasksByDate","filterMyTasksBySearch","filterReqByDate","filterReviewTypeDropdownOptions","filterReviewsByPriority","filterReviewsByType","filterTaskDropdownOptions","filterTaxDocsByFY","filterTeamDropdown","filterTeamLeaves","formatTime12","generateClaimNumber","getCTCIcon","getTodayKey","getVal","handleCopyAddress","handleMaritalChange","handleReqAttach","hrApproveEmpHist","hrRejectEmpHist","initPersonalTab","lvAddCC","lvCCInput","lvCCKeydown","lvRemoveCC","lvRenderCCTags","lvcalChangeMonth","ntAddCC","ntCCInput","ntCCKeydown","ntCancel","ntClearFile","ntDescCount","ntDragLeave","ntDragOver","ntDrop","ntFileSelected","ntIsApprover","ntPrioChange","ntRemoveCC","ntRenderCCTags","ntReset","ntSave","ntShowFile","ntUpdateApprovalNotice","onMCSubChange","onSingleSubcategoryChange","openClaimTypePage","openEditHdModal","openEditReqModal","openEditTaskModal","openEmpHistAdminModal","openFamilyEditFromTab","openFamilyModal","openLeaveCalendar","openTeamDropdown","populateClaimSubCategory","populateTeamDropdowns","refreshAttendanceIfVisible","removeEmpHistRow","removeFamilyChildRow","removeMultiClaimRow","renderAttTeamData","renderDropdownList","renderEmpHistTable","renderHolidayCalendar","renderLeaveCalendar","renderLeaveTeamData","renderSalaryHistory","renderSalaryStructure","resetClaimTypeSelector","reviewTypeDropdownKeydown","saveDraftEditReq","saveEditHd","saveEditReq","saveEditTask","saveFamilyDetails","saveFamilyTabParents","savePersonalDetails","saveReqFormDraft","segFilterApprovals","segFilterHD","segFilterMyTasks","segFilterReviews","selectApprovalTypeDropdownOpt","selectClaimTypeCard","selectReviewTypeDropdownOpt","selectTaskDropdownOpt","selectTaxRegime","selectTeamPerson","setClaimMode","setVal","showFieldError","showHRAdminDemoNotice","sortApprovals","sortReviews","startEmpHistEdit","submitBankEdit","submitEmpHistForApproval","submitITDeclaration","submitLeaveWithSandwichCheck","submitMultiClaim","submitReqForm","submitSingleClaim","switchITDeclFY","switchITDeclHeaderFY","switchPOIHeaderFY","syncEmpHistField","taskDropdownKeydown","toggleApprovalDRPopover","toggleApprovalTypeDropdown","toggleBankEdit","toggleHDDRPopover","toggleLeaveApprovalDRPopover","toggleMyLeaveDRPopover","togglePermFields","toggleRejectReasonBox","toggleReqDRPopover","toggleReviewDRPopover","toggleReviewTypeDropdown","toggleRowCTC","toggleTaskDRPopover","toggleTaskDropdown","toggleTeamLeaveDRPopover","updateMultiClaimTotal","updateTeamLeaveFilterCounts","validateEmpHistRecords","validatePersonalDetails"].forEach(D=>{D in window||(window[D]=()=>{})}),window.navigate=D=>et(D),window.showToast=(D,A="info")=>O(D,A),window.doLogout=()=>jt(),window.toggleNotif=()=>g(D=>!D),window.toggleProfileDropdown=D=>E(A=>D?!1:!A),window.toggleDarkMode=()=>Et(),window.handlePunch=()=>Ht(),window.navigateToHolidays=()=>et("leave"),window.navigateToSalaryBankDetails=()=>et("payroll"),window.getFormattedDate=Pn,window.getGreeting=Pc,window.switchTab=(D,A)=>{D&&D.closest(".tabs")&&(D.closest(".tabs").querySelectorAll(".tab").forEach(z=>z.classList.remove("active")),D.classList.add("active"));const P=document.getElementById(A);P&&P.parentElement&&(Array.from(P.parentElement.children).forEach(z=>{z!==P&&z.classList&&!z.classList.contains("tabs")&&z.id&&(z.style.display="none")}),P.style.display="block")},()=>{["navigate","showToast","doLogout","toggleNotif","toggleProfileDropdown","toggleDarkMode","handlePunch","navigateToHolidays","navigateToSalaryBankDetails","getFormattedDate","getGreeting","switchTab"].forEach(D=>{try{delete window[D]}catch{}})}),[O,jt,et,Ht,Et]),o?d.jsxs(d.Fragment,{children:[d.jsx(rs,{}),d.jsxs("div",{className:"app",id:"mainApp",children:[d.jsx(Tv,{currentPage:u,currentRole:s,onNavigate:et}),d.jsxs("div",{className:"main",children:[d.jsx(Lv,{headerCopy:I,user:R,showNotif:m,onToggleNotif:()=>g(x=>!x),showProfile:h,onToggleProfile:()=>E(x=>!x),onLogout:jt,onToggleDarkMode:Et,darkMode:_,onNavigate:et,onShowToast:O,onCloseProfile:()=>E(!1)}),u==="dashboard"?d.jsx("div",{className:"page active",id:"page-dashboard",children:d.jsx(Hv,{role:s,currentTime:b,punchModel:S})}):u==="profile"?d.jsx(Gv,{}):u==="attendance"?d.jsx(em,{currentRole:s}):u==="leave"?d.jsx(im,{currentRole:s}):u==="tasks"?d.jsx(lm,{currentRole:s}):u==="payroll"?d.jsx(sm,{}):u==="documents"?d.jsx(dm,{}):u==="taxdocs"?d.jsx(ym,{}):u==="people"?d.jsx(pm,{currentRole:s}):u==="requests"?d.jsx(vm,{currentRole:s}):u==="helpdesk"?d.jsx(fm,{currentRole:s}):u==="reports"?d.jsx(hm,{}):d.jsx(Uv,{pageId:u,currentRole:s})]})]}),d.jsx(zv,{open:m}),d.jsx(as,{toasts:p})]}):d.jsxs(d.Fragment,{children:[d.jsx(rs,{}),d.jsx(kv,{selectedRole:e,email:n,password:i,onRoleChange:wt,onEmailChange:a,onPasswordChange:r,onLogin:kt,darkMode:_}),d.jsx(as,{toasts:p})]})}function Cm(){return d.jsx(Em,{children:d.jsx(Dm,{})})}ir.createRoot(document.getElementById("root")).render(d.jsx(Cm,{}));
