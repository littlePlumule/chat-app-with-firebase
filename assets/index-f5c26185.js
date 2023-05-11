(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function zo(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Qo(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=de(r)?hc(r):Qo(r);if(i)for(const o in i)t[o]=i[o]}return t}else{if(de(e))return e;if(ie(e))return e}}const uc=/;(?![^(]*\))/g,fc=/:([^]+)/,cc=/\/\*.*?\*\//gs;function hc(e){const t={};return e.replace(cc,"").split(uc).forEach(n=>{if(n){const r=n.split(fc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ui(e){let t="";if(de(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=ui(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pc=zo(dc);function Cl(e){return!!e||e===""}const zi=e=>de(e)?e:e==null?"":F(e)||ie(e)&&(e.toString===Sl||!U(e.toString))?JSON.stringify(e,wl,2):String(e),wl=(e,t)=>t&&t.__v_isRef?wl(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Il(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!F(t)&&!Rl(t)?String(t):t,te={},mn=[],Ze=()=>{},vc=()=>!1,_c=/^on[^a-z]/,fi=e=>_c.test(e),Go=e=>e.startsWith("onUpdate:"),Ce=Object.assign,$o=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gc=Object.prototype.hasOwnProperty,z=(e,t)=>gc.call(e,t),F=Array.isArray,yn=e=>ci(e)==="[object Map]",Il=e=>ci(e)==="[object Set]",U=e=>typeof e=="function",de=e=>typeof e=="string",Ko=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Tl=e=>ie(e)&&U(e.then)&&U(e.catch),Sl=Object.prototype.toString,ci=e=>Sl.call(e),mc=e=>ci(e).slice(8,-1),Rl=e=>ci(e)==="[object Object]",Yo=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fr=zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yc=/-(\w)/g,wn=hi(e=>e.replace(yc,(t,n)=>n?n.toUpperCase():"")),Ec=/\B([A-Z])/g,Pn=hi(e=>e.replace(Ec,"-$1").toLowerCase()),Al=hi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qi=hi(e=>e?`on${Al(e)}`:""),tr=(e,t)=>!Object.is(e,t),Br=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ea;const bc=()=>ea||(ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $e;class Cc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wc(e,t=$e){t&&t.active&&t.effects.push(e)}function Ic(){return $e}const qo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nl=e=>(e.w&Ot)>0,xl=e=>(e.n&Ot)>0,Tc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ot},Sc=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Nl(i)&&!xl(i)?i.delete(e):t[n++]=i,i.w&=~Ot,i.n&=~Ot}t.length=n}},lo=new WeakMap;let Gn=0,Ot=1;const uo=30;let qe;const tn=Symbol(""),fo=Symbol("");class Jo{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wc(this,r)}run(){if(!this.active)return this.fn();let t=qe,n=Rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=qe,qe=this,Rt=!0,Ot=1<<++Gn,Gn<=uo?Tc(this):ta(this),this.fn()}finally{Gn<=uo&&Sc(this),Ot=1<<--Gn,qe=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(ta(this),this.onStop&&this.onStop(),this.active=!1)}}function ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Rt=!0;const Ol=[];function kn(){Ol.push(Rt),Rt=!1}function Dn(){const e=Ol.pop();Rt=e===void 0?!0:e}function xe(e,t,n){if(Rt&&qe){let r=lo.get(e);r||lo.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=qo()),Pl(i)}}function Pl(e,t){let n=!1;Gn<=uo?xl(e)||(e.n|=Ot,n=!Nl(e)):n=!e.has(qe),n&&(e.add(qe),qe.deps.push(e))}function Et(e,t,n,r,i,o){const s=lo.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(n==="length"&&F(e)){const l=Number(r);s.forEach((u,f)=>{(f==="length"||f>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(s.get(n)),t){case"add":F(e)?Yo(n)&&a.push(s.get("length")):(a.push(s.get(tn)),yn(e)&&a.push(s.get(fo)));break;case"delete":F(e)||(a.push(s.get(tn)),yn(e)&&a.push(s.get(fo)));break;case"set":yn(e)&&a.push(s.get(tn));break}if(a.length===1)a[0]&&co(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);co(qo(l))}}function co(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&na(r);for(const r of n)r.computed||na(r)}function na(e,t){(e!==qe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Rc=zo("__proto__,__v_isRef,__isVue"),kl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ko)),Ac=Xo(),Nc=Xo(!1,!0),xc=Xo(!0),ra=Oc();function Oc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let o=0,s=this.length;o<s;o++)xe(r,"get",o+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kn();const r=G(this)[t].apply(this,n);return Dn(),r}}),e}function Pc(e){const t=G(this);return xe(t,"has",e),t.hasOwnProperty(e)}function Xo(e=!1,t=!1){return function(r,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?Kc:Bl:t?Fl:Ll).get(r))return r;const s=F(r);if(!e){if(s&&z(ra,i))return Reflect.get(ra,i,o);if(i==="hasOwnProperty")return Pc}const a=Reflect.get(r,i,o);return(Ko(i)?kl.has(i):Rc(i))||(e||xe(r,"get",i),t)?a:be(a)?s&&Yo(i)?a:a.value:ie(a)?e?Wl(a):pi(a):a}}const kc=Dl(),Dc=Dl(!0);function Dl(e=!1){return function(n,r,i,o){let s=n[r];if(In(s)&&be(s)&&!be(i))return!1;if(!e&&(!Qr(i)&&!In(i)&&(s=G(s),i=G(i)),!F(n)&&be(s)&&!be(i)))return s.value=i,!0;const a=F(n)&&Yo(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,i,o);return n===G(o)&&(a?tr(i,s)&&Et(n,"set",r,i):Et(n,"add",r,i)),l}}function Mc(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Et(e,"delete",t,void 0),r}function Lc(e,t){const n=Reflect.has(e,t);return(!Ko(t)||!kl.has(t))&&xe(e,"has",t),n}function Fc(e){return xe(e,"iterate",F(e)?"length":tn),Reflect.ownKeys(e)}const Ml={get:Ac,set:kc,deleteProperty:Mc,has:Lc,ownKeys:Fc},Bc={get:xc,set(e,t){return!0},deleteProperty(e,t){return!0}},Wc=Ce({},Ml,{get:Nc,set:Dc}),Zo=e=>e,di=e=>Reflect.getPrototypeOf(e);function Rr(e,t,n=!1,r=!1){e=e.__v_raw;const i=G(e),o=G(t);n||(t!==o&&xe(i,"get",t),xe(i,"get",o));const{has:s}=di(i),a=r?Zo:n?ns:nr;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function Ar(e,t=!1){const n=this.__v_raw,r=G(n),i=G(e);return t||(e!==i&&xe(r,"has",e),xe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Nr(e,t=!1){return e=e.__v_raw,!t&&xe(G(e),"iterate",tn),Reflect.get(e,"size",e)}function ia(e){e=G(e);const t=G(this);return di(t).has.call(t,e)||(t.add(e),Et(t,"add",e,e)),this}function oa(e,t){t=G(t);const n=G(this),{has:r,get:i}=di(n);let o=r.call(n,e);o||(e=G(e),o=r.call(n,e));const s=i.call(n,e);return n.set(e,t),o?tr(t,s)&&Et(n,"set",e,t):Et(n,"add",e,t),this}function sa(e){const t=G(this),{has:n,get:r}=di(t);let i=n.call(t,e);i||(e=G(e),i=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return i&&Et(t,"delete",e,void 0),o}function aa(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Et(e,"clear",void 0,void 0),n}function xr(e,t){return function(r,i){const o=this,s=o.__v_raw,a=G(s),l=t?Zo:e?ns:nr;return!e&&xe(a,"iterate",tn),s.forEach((u,f)=>r.call(i,l(u),l(f),o))}}function Or(e,t,n){return function(...r){const i=this.__v_raw,o=G(i),s=yn(o),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=i[e](...r),f=n?Zo:t?ns:nr;return!t&&xe(o,"iterate",l?fo:tn),{next(){const{value:c,done:h}=u.next();return h?{value:c,done:h}:{value:a?[f(c[0]),f(c[1])]:f(c),done:h}},[Symbol.iterator](){return this}}}}function wt(e){return function(...t){return e==="delete"?!1:this}}function Uc(){const e={get(o){return Rr(this,o)},get size(){return Nr(this)},has:Ar,add:ia,set:oa,delete:sa,clear:aa,forEach:xr(!1,!1)},t={get(o){return Rr(this,o,!1,!0)},get size(){return Nr(this)},has:Ar,add:ia,set:oa,delete:sa,clear:aa,forEach:xr(!1,!0)},n={get(o){return Rr(this,o,!0)},get size(){return Nr(this,!0)},has(o){return Ar.call(this,o,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:xr(!0,!1)},r={get(o){return Rr(this,o,!0,!0)},get size(){return Nr(this,!0)},has(o){return Ar.call(this,o,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Or(o,!1,!1),n[o]=Or(o,!0,!1),t[o]=Or(o,!1,!0),r[o]=Or(o,!0,!0)}),[e,n,t,r]}const[Hc,Vc,jc,zc]=Uc();function es(e,t){const n=t?e?zc:jc:e?Vc:Hc;return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(z(n,i)&&i in r?n:r,i,o)}const Qc={get:es(!1,!1)},Gc={get:es(!1,!0)},$c={get:es(!0,!1)},Ll=new WeakMap,Fl=new WeakMap,Bl=new WeakMap,Kc=new WeakMap;function Yc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(e){return e.__v_skip||!Object.isExtensible(e)?0:Yc(mc(e))}function pi(e){return In(e)?e:ts(e,!1,Ml,Qc,Ll)}function Jc(e){return ts(e,!1,Wc,Gc,Fl)}function Wl(e){return ts(e,!0,Bc,$c,Bl)}function ts(e,t,n,r,i){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=qc(e);if(s===0)return e;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function En(e){return In(e)?En(e.__v_raw):!!(e&&e.__v_isReactive)}function In(e){return!!(e&&e.__v_isReadonly)}function Qr(e){return!!(e&&e.__v_isShallow)}function Ul(e){return En(e)||In(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Hl(e){return zr(e,"__v_skip",!0),e}const nr=e=>ie(e)?pi(e):e,ns=e=>ie(e)?Wl(e):e;function Vl(e){Rt&&qe&&(e=G(e),Pl(e.dep||(e.dep=qo())))}function jl(e,t){e=G(e);const n=e.dep;n&&co(n)}function be(e){return!!(e&&e.__v_isRef===!0)}function Gi(e){return Xc(e,!1)}function Xc(e,t){return be(e)?e:new Zc(e,t)}class Zc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:nr(t)}get value(){return Vl(this),this._value}set value(t){const n=this.__v_isShallow||Qr(t)||In(t);t=n?t:G(t),tr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nr(t),jl(this))}}function eh(e){return be(e)?e.value:e}const th={get:(e,t,n)=>eh(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return be(i)&&!be(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function zl(e){return En(e)?e:new Proxy(e,th)}var Ql;class nh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ql]=!1,this._dirty=!0,this.effect=new Jo(t,()=>{this._dirty||(this._dirty=!0,jl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=G(this);return Vl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ql="__v_isReadonly";function rh(e,t,n=!1){let r,i;const o=U(e);return o?(r=e,i=Ze):(r=e.get,i=e.set),new nh(r,i,o||!i,n)}function At(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){vi(o,t,n)}return i}function He(e,t,n,r){if(U(e)){const o=At(e,t,n,r);return o&&Tl(o)&&o.catch(s=>{vi(s,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(He(e[o],t,n,r));return i}function vi(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,a=n;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,s,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){At(l,null,10,[e,s,a]);return}}ih(e,n,i,r)}function ih(e,t,n,r=!0){console.error(e)}let rr=!1,ho=!1;const Ee=[];let lt=0;const bn=[];let _t=null,Kt=0;const Gl=Promise.resolve();let rs=null;function $l(e){const t=rs||Gl;return e?t.then(this?e.bind(this):e):t}function oh(e){let t=lt+1,n=Ee.length;for(;t<n;){const r=t+n>>>1;ir(Ee[r])<e?t=r+1:n=r}return t}function is(e){(!Ee.length||!Ee.includes(e,rr&&e.allowRecurse?lt+1:lt))&&(e.id==null?Ee.push(e):Ee.splice(oh(e.id),0,e),Kl())}function Kl(){!rr&&!ho&&(ho=!0,rs=Gl.then(ql))}function sh(e){const t=Ee.indexOf(e);t>lt&&Ee.splice(t,1)}function ah(e){F(e)?bn.push(...e):(!_t||!_t.includes(e,e.allowRecurse?Kt+1:Kt))&&bn.push(e),Kl()}function la(e,t=rr?lt+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Yl(e){if(bn.length){const t=[...new Set(bn)];if(bn.length=0,_t){_t.push(...t);return}for(_t=t,_t.sort((n,r)=>ir(n)-ir(r)),Kt=0;Kt<_t.length;Kt++)_t[Kt]();_t=null,Kt=0}}const ir=e=>e.id==null?1/0:e.id,lh=(e,t)=>{const n=ir(e)-ir(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ql(e){ho=!1,rr=!0,Ee.sort(lh);const t=Ze;try{for(lt=0;lt<Ee.length;lt++){const n=Ee[lt];n&&n.active!==!1&&At(n,null,14)}}finally{lt=0,Ee.length=0,Yl(),rr=!1,rs=null,(Ee.length||bn.length)&&ql()}}function uh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let i=n;const o=t.startsWith("update:"),s=o&&t.slice(7);if(s&&s in r){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:c,trim:h}=r[f]||te;h&&(i=n.map(p=>de(p)?p.trim():p)),c&&(i=n.map(ao))}let a,l=r[a=Qi(t)]||r[a=Qi(wn(t))];!l&&o&&(l=r[a=Qi(Pn(t))]),l&&He(l,e,6,i);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,He(u,e,6,i)}}function Jl(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!U(e)){const l=u=>{const f=Jl(u,t,!0);f&&(a=!0,Ce(s,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(ie(e)&&r.set(e,null),null):(F(o)?o.forEach(l=>s[l]=null):Ce(s,o),ie(e)&&r.set(e,s),s)}function _i(e,t){return!e||!fi(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Pn(t))||z(e,t))}let Be=null,Xl=null;function Gr(e){const t=Be;return Be=e,Xl=e&&e.type.__scopeId||null,t}function fh(e,t=Be,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ma(-1);const o=Gr(t);let s;try{s=e(...i)}finally{Gr(o),r._d&&ma(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function $i(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:u,render:f,renderCache:c,data:h,setupState:p,ctx:_,inheritAttrs:m}=e;let C,S;const D=Gr(e);try{if(n.shapeFlag&4){const K=i||r;C=at(f.call(K,K,c,o,p,h,_)),S=l}else{const K=t;C=at(K.length>1?K(o,{attrs:l,slots:a,emit:u}):K(o,null)),S=t.props?l:ch(l)}}catch(K){Kn.length=0,vi(K,e,1),C=nn(mt)}let N=C;if(S&&m!==!1){const K=Object.keys(S),{shapeFlag:le}=N;K.length&&le&7&&(s&&K.some(Go)&&(S=hh(S,s)),N=Pt(N,S))}return n.dirs&&(N=Pt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),C=N,Gr(D),C}const ch=e=>{let t;for(const n in e)(n==="class"||n==="style"||fi(n))&&((t||(t={}))[n]=e[n]);return t},hh=(e,t)=>{const n={};for(const r in e)(!Go(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dh(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ua(r,s,u):!!s;if(l&8){const f=t.dynamicProps;for(let c=0;c<f.length;c++){const h=f[c];if(s[h]!==r[h]&&!_i(u,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?ua(r,s,u):!0:!!s;return!1}function ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!_i(n,o))return!0}return!1}function ph({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const vh=e=>e.__isSuspense;function _h(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ah(e)}function gh(e,t){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[e]=t}}function Wr(e,t,n=!1){const r=fe||Be;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Pr={};function Ur(e,t,n){return Zl(e,t,n)}function Zl(e,t,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:s}=te){const a=Ic()===(fe==null?void 0:fe.scope)?fe:null;let l,u=!1,f=!1;if(be(e)?(l=()=>e.value,u=Qr(e)):En(e)?(l=()=>e,r=!0):F(e)?(f=!0,u=e.some(N=>En(N)||Qr(N)),l=()=>e.map(N=>{if(be(N))return N.value;if(En(N))return Xt(N);if(U(N))return At(N,a,2)})):U(e)?t?l=()=>At(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return c&&c(),He(e,a,3,[h])}:l=Ze,t&&r){const N=l;l=()=>Xt(N())}let c,h=N=>{c=S.onStop=()=>{At(N,a,4)}},p;if(sr)if(h=Ze,t?n&&He(t,a,3,[l(),f?[]:void 0,h]):l(),i==="sync"){const N=vd();p=N.__watcherHandles||(N.__watcherHandles=[])}else return Ze;let _=f?new Array(e.length).fill(Pr):Pr;const m=()=>{if(S.active)if(t){const N=S.run();(r||u||(f?N.some((K,le)=>tr(K,_[le])):tr(N,_)))&&(c&&c(),He(t,a,3,[N,_===Pr?void 0:f&&_[0]===Pr?[]:_,h]),_=N)}else S.run()};m.allowRecurse=!!t;let C;i==="sync"?C=m:i==="post"?C=()=>Re(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),C=()=>is(m));const S=new Jo(l,C);t?n?m():_=S.run():i==="post"?Re(S.run.bind(S),a&&a.suspense):S.run();const D=()=>{S.stop(),a&&a.scope&&$o(a.scope.effects,S)};return p&&p.push(D),D}function mh(e,t,n){const r=this.proxy,i=de(e)?e.includes(".")?eu(r,e):()=>r[e]:e.bind(r,r);let o;U(t)?o=t:(o=t.handler,n=t);const s=fe;Tn(this);const a=Zl(i,o.bind(r),n);return s?Tn(s):rn(),a}function eu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Xt(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Xt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Xt(e[n],t);else if(Il(e)||yn(e))e.forEach(n=>{Xt(n,t)});else if(Rl(e))for(const n in e)Xt(e[n],t);return e}function yh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return os(()=>{e.isMounted=!0}),iu(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],Eh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(e,{slots:t}){const n=ad(),r=yh();let i;return()=>{const o=t.default&&nu(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const m of o)if(m.type!==mt){s=m;break}}const a=G(e),{mode:l}=a;if(r.isLeaving)return Ki(s);const u=fa(s);if(!u)return Ki(s);const f=po(u,a,r,n);vo(u,f);const c=n.subTree,h=c&&fa(c);let p=!1;const{getTransitionKey:_}=u.type;if(_){const m=_();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(h&&h.type!==mt&&(!Yt(u,h)||p)){const m=po(h,a,r,n);if(vo(h,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ki(s);l==="in-out"&&u.type!==mt&&(m.delayLeave=(C,S,D)=>{const N=tu(r,h);N[String(h.key)]=h,C._leaveCb=()=>{S(),C._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=D})}return s}}},bh=Eh;function tu(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function po(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:c,onLeave:h,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:m,onAppear:C,onAfterAppear:S,onAppearCancelled:D}=t,N=String(e.key),K=tu(n,e),le=(H,ve)=>{H&&He(H,r,9,ve)},tt=(H,ve)=>{const se=ve[1];le(H,ve),F(H)?H.every(Oe=>Oe.length<=1)&&se():H.length<=1&&se()},nt={mode:o,persisted:s,beforeEnter(H){let ve=a;if(!n.isMounted)if(i)ve=m||a;else return;H._leaveCb&&H._leaveCb(!0);const se=K[N];se&&Yt(e,se)&&se.el._leaveCb&&se.el._leaveCb(),le(ve,[H])},enter(H){let ve=l,se=u,Oe=f;if(!n.isMounted)if(i)ve=C||l,se=S||u,Oe=D||f;else return;let rt=!1;const pt=H._enterCb=Un=>{rt||(rt=!0,Un?le(Oe,[H]):le(se,[H]),nt.delayedLeave&&nt.delayedLeave(),H._enterCb=void 0)};ve?tt(ve,[H,pt]):pt()},leave(H,ve){const se=String(e.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return ve();le(c,[H]);let Oe=!1;const rt=H._leaveCb=pt=>{Oe||(Oe=!0,ve(),pt?le(_,[H]):le(p,[H]),H._leaveCb=void 0,K[se]===e&&delete K[se])};K[se]=e,h?tt(h,[H,rt]):rt()},clone(H){return po(H,t,n,r)}};return nt}function Ki(e){if(gi(e))return e=Pt(e),e.children=null,e}function fa(e){return gi(e)?e.children?e.children[0]:void 0:e}function vo(e,t){e.shapeFlag&6&&e.component?vo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function nu(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===Ye?(s.patchFlag&128&&i++,r=r.concat(nu(s.children,t,a))):(t||s.type!==mt)&&r.push(a!=null?Pt(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const Hr=e=>!!e.type.__asyncLoader,gi=e=>e.type.__isKeepAlive;function Ch(e,t){ru(e,"a",t)}function wh(e,t){ru(e,"da",t)}function ru(e,t,n=fe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(mi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)gi(i.parent.vnode)&&Ih(r,t,n,i),i=i.parent}}function Ih(e,t,n,r){const i=mi(t,e,r,!0);ou(()=>{$o(r[t],i)},n)}function mi(e,t,n=fe,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;kn(),Tn(n);const a=He(t,n,e,s);return rn(),Dn(),a});return r?i.unshift(o):i.push(o),o}}const Ct=e=>(t,n=fe)=>(!sr||e==="sp")&&mi(e,(...r)=>t(...r),n),Th=Ct("bm"),os=Ct("m"),Sh=Ct("bu"),Rh=Ct("u"),iu=Ct("bum"),ou=Ct("um"),Ah=Ct("sp"),Nh=Ct("rtg"),xh=Ct("rtc");function Oh(e,t=fe){mi("ec",e,t)}function ca(e,t){const n=Be;if(n===null)return e;const r=bi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,a,l,u=te]=t[o];s&&(U(s)&&(s={mounted:s,updated:s}),s.deep&&Xt(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function Vt(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(kn(),He(l,n,8,[e.el,a,e,t]),Dn())}}const Ph=Symbol();function kh(e,t,n,r){let i;const o=n&&n[r];if(F(e)||de(e)){i=new Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=t(e[s],s,void 0,o&&o[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,o&&o[s])}else if(ie(e))if(e[Symbol.iterator])i=Array.from(e,(s,a)=>t(s,a,void 0,o&&o[a]));else{const s=Object.keys(e);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const u=s[a];i[a]=t(e[u],u,a,o&&o[a])}}else i=[];return n&&(n[r]=i),i}const _o=e=>e?vu(e)?bi(e)||e.proxy:_o(e.parent):null,$n=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_o(e.parent),$root:e=>_o(e.root),$emit:e=>e.emit,$options:e=>ss(e),$forceUpdate:e=>e.f||(e.f=()=>is(e.update)),$nextTick:e=>e.n||(e.n=$l.bind(e.proxy)),$watch:e=>mh.bind(e)}),Yi=(e,t)=>e!==te&&!e.__isScriptSetup&&z(e,t),Dh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const p=s[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Yi(r,t))return s[t]=1,r[t];if(i!==te&&z(i,t))return s[t]=2,i[t];if((u=e.propsOptions[0])&&z(u,t))return s[t]=3,o[t];if(n!==te&&z(n,t))return s[t]=4,n[t];go&&(s[t]=0)}}const f=$n[t];let c,h;if(f)return t==="$attrs"&&xe(e,"get",t),f(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==te&&z(n,t))return s[t]=4,n[t];if(h=l.config.globalProperties,z(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return Yi(i,t)?(i[t]=n,!0):r!==te&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||e!==te&&z(e,s)||Yi(t,s)||(a=o[0])&&z(a,s)||z(r,s)||z($n,s)||z(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let go=!0;function Mh(e){const t=ss(e),n=e.proxy,r=e.ctx;go=!1,t.beforeCreate&&ha(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:u,created:f,beforeMount:c,mounted:h,beforeUpdate:p,updated:_,activated:m,deactivated:C,beforeDestroy:S,beforeUnmount:D,destroyed:N,unmounted:K,render:le,renderTracked:tt,renderTriggered:nt,errorCaptured:H,serverPrefetch:ve,expose:se,inheritAttrs:Oe,components:rt,directives:pt,filters:Un}=t;if(u&&Lh(u,r,null,e.appContext.config.unwrapInjectedRef),s)for(const ae in s){const X=s[ae];U(X)&&(r[ae]=X.bind(n))}if(i){const ae=i.call(n,n);ie(ae)&&(e.data=pi(ae))}if(go=!0,o)for(const ae in o){const X=o[ae],Ut=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Ze,Tr=!U(X)&&U(X.set)?X.set.bind(n):Ze,Ht=dd({get:Ut,set:Tr});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:it=>Ht.value=it})}if(a)for(const ae in a)su(a[ae],r,n,ae);if(l){const ae=U(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(X=>{gh(X,ae[X])})}f&&ha(f,e,"c");function we(ae,X){F(X)?X.forEach(Ut=>ae(Ut.bind(n))):X&&ae(X.bind(n))}if(we(Th,c),we(os,h),we(Sh,p),we(Rh,_),we(Ch,m),we(wh,C),we(Oh,H),we(xh,tt),we(Nh,nt),we(iu,D),we(ou,K),we(Ah,ve),F(se))if(se.length){const ae=e.exposed||(e.exposed={});se.forEach(X=>{Object.defineProperty(ae,X,{get:()=>n[X],set:Ut=>n[X]=Ut})})}else e.exposed||(e.exposed={});le&&e.render===Ze&&(e.render=le),Oe!=null&&(e.inheritAttrs=Oe),rt&&(e.components=rt),pt&&(e.directives=pt)}function Lh(e,t,n=Ze,r=!1){F(e)&&(e=mo(e));for(const i in e){const o=e[i];let s;ie(o)?"default"in o?s=Wr(o.from||i,o.default,!0):s=Wr(o.from||i):s=Wr(o),be(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function ha(e,t,n){He(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function su(e,t,n,r){const i=r.includes(".")?eu(n,r):()=>n[r];if(de(e)){const o=t[e];U(o)&&Ur(i,o)}else if(U(e))Ur(i,e.bind(n));else if(ie(e))if(F(e))e.forEach(o=>su(o,t,n,r));else{const o=U(e.handler)?e.handler.bind(n):t[e.handler];U(o)&&Ur(i,o,e)}}function ss(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(u=>$r(l,u,s,!0)),$r(l,t,s)),ie(t)&&o.set(t,l),l}function $r(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&$r(e,o,n,!0),i&&i.forEach(s=>$r(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const a=Fh[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const Fh={data:da,props:Qt,emits:Qt,methods:Qt,computed:Qt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Qt,directives:Qt,watch:Wh,provide:da,inject:Bh};function da(e,t){return t?e?function(){return Ce(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Bh(e,t){return Qt(mo(e),mo(t))}function mo(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?Ce(Ce(Object.create(null),e),t):t}function Wh(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Uh(e,t,n,r=!1){const i={},o={};zr(o,Ei,1),e.propsDefaults=Object.create(null),au(e,t,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:Jc(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Hh(e,t,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=G(i),[l]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let h=f[c];if(_i(e.emitsOptions,h))continue;const p=t[h];if(l)if(z(o,h))p!==o[h]&&(o[h]=p,u=!0);else{const _=wn(h);i[_]=yo(l,a,_,p,e,!1)}else p!==o[h]&&(o[h]=p,u=!0)}}}else{au(e,t,i,o)&&(u=!0);let f;for(const c in a)(!t||!z(t,c)&&((f=Pn(c))===c||!z(t,f)))&&(l?n&&(n[c]!==void 0||n[f]!==void 0)&&(i[c]=yo(l,a,c,void 0,e,!0)):delete i[c]);if(o!==a)for(const c in o)(!t||!z(t,c))&&(delete o[c],u=!0)}u&&Et(e,"set","$attrs")}function au(e,t,n,r){const[i,o]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(Fr(l))continue;const u=t[l];let f;i&&z(i,f=wn(l))?!o||!o.includes(f)?n[f]=u:(a||(a={}))[f]=u:_i(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(o){const l=G(n),u=a||te;for(let f=0;f<o.length;f++){const c=o[f];n[c]=yo(i,l,c,u[c],e,!z(u,c))}}return s}function yo(e,t,n,r,i,o){const s=e[n];if(s!=null){const a=z(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&U(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(Tn(i),r=u[n]=l.call(null,t),rn())}else r=l}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Pn(n))&&(r=!0))}return r}function lu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let l=!1;if(!U(e)){const f=c=>{l=!0;const[h,p]=lu(c,t,!0);Ce(s,h),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!l)return ie(e)&&r.set(e,mn),mn;if(F(o))for(let f=0;f<o.length;f++){const c=wn(o[f]);pa(c)&&(s[c]=te)}else if(o)for(const f in o){const c=wn(f);if(pa(c)){const h=o[f],p=s[c]=F(h)||U(h)?{type:h}:Object.assign({},h);if(p){const _=ga(Boolean,p.type),m=ga(String,p.type);p[0]=_>-1,p[1]=m<0||_<m,(_>-1||z(p,"default"))&&a.push(c)}}}const u=[s,a];return ie(e)&&r.set(e,u),u}function pa(e){return e[0]!=="$"}function va(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function _a(e,t){return va(e)===va(t)}function ga(e,t){return F(t)?t.findIndex(n=>_a(n,e)):U(t)&&_a(t,e)?0:-1}const uu=e=>e[0]==="_"||e==="$stable",as=e=>F(e)?e.map(at):[at(e)],Vh=(e,t,n)=>{if(t._n)return t;const r=fh((...i)=>as(t(...i)),n);return r._c=!1,r},fu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(uu(i))continue;const o=e[i];if(U(o))t[i]=Vh(i,o,r);else if(o!=null){const s=as(o);t[i]=()=>s}}},cu=(e,t)=>{const n=as(t);e.slots.default=()=>n},jh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),zr(t,"_",n)):fu(t,e.slots={})}else e.slots={},t&&cu(e,t);zr(e.slots,Ei,1)},zh=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,s=te;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(Ce(i,t),!n&&a===1&&delete i._):(o=!t.$stable,fu(t,i)),s=t}else t&&(cu(e,t),s={default:1});if(o)for(const a in i)!uu(a)&&!(a in s)&&delete i[a]};function hu(){return{app:null,config:{isNativeTag:vc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function Gh(e,t){return function(r,i=null){U(r)||(r=Object.assign({},r)),i!=null&&!ie(i)&&(i=null);const o=hu(),s=new Set;let a=!1;const l=o.app={_uid:Qh++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:_d,get config(){return o.config},set config(u){},use(u,...f){return s.has(u)||(u&&U(u.install)?(s.add(u),u.install(l,...f)):U(u)&&(s.add(u),u(l,...f))),l},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),l},component(u,f){return f?(o.components[u]=f,l):o.components[u]},directive(u,f){return f?(o.directives[u]=f,l):o.directives[u]},mount(u,f,c){if(!a){const h=nn(r,i);return h.appContext=o,f&&t?t(h,u):e(h,u,c),a=!0,l._container=u,u.__vue_app__=l,bi(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return o.provides[u]=f,l}};return l}}function Eo(e,t,n,r,i=!1){if(F(e)){e.forEach((h,p)=>Eo(h,t&&(F(t)?t[p]:t),n,r,i));return}if(Hr(r)&&!i)return;const o=r.shapeFlag&4?bi(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:l}=e,u=t&&t.r,f=a.refs===te?a.refs={}:a.refs,c=a.setupState;if(u!=null&&u!==l&&(de(u)?(f[u]=null,z(c,u)&&(c[u]=null)):be(u)&&(u.value=null)),U(l))At(l,a,12,[s,f]);else{const h=de(l),p=be(l);if(h||p){const _=()=>{if(e.f){const m=h?z(c,l)?c[l]:f[l]:l.value;i?F(m)&&$o(m,o):F(m)?m.includes(o)||m.push(o):h?(f[l]=[o],z(c,l)&&(c[l]=f[l])):(l.value=[o],e.k&&(f[e.k]=l.value))}else h?(f[l]=s,z(c,l)&&(c[l]=s)):p&&(l.value=s,e.k&&(f[e.k]=s))};s?(_.id=-1,Re(_,n)):_()}}}const Re=_h;function $h(e){return Kh(e)}function Kh(e,t){const n=bc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:f,parentNode:c,nextSibling:h,setScopeId:p=Ze,insertStaticContent:_}=e,m=(d,v,g,E=null,y=null,T=null,A=!1,I=null,R=!!v.dynamicChildren)=>{if(d===v)return;d&&!Yt(d,v)&&(E=Sr(d),it(d,y,T,!0),d=null),v.patchFlag===-2&&(R=!1,v.dynamicChildren=null);const{type:b,ref:O,shapeFlag:x}=v;switch(b){case yi:C(d,v,g,E);break;case mt:S(d,v,g,E);break;case qi:d==null&&D(v,g,E,A);break;case Ye:rt(d,v,g,E,y,T,A,I,R);break;default:x&1?le(d,v,g,E,y,T,A,I,R):x&6?pt(d,v,g,E,y,T,A,I,R):(x&64||x&128)&&b.process(d,v,g,E,y,T,A,I,R,dn)}O!=null&&y&&Eo(O,d&&d.ref,T,v||d,!v)},C=(d,v,g,E)=>{if(d==null)r(v.el=a(v.children),g,E);else{const y=v.el=d.el;v.children!==d.children&&u(y,v.children)}},S=(d,v,g,E)=>{d==null?r(v.el=l(v.children||""),g,E):v.el=d.el},D=(d,v,g,E)=>{[d.el,d.anchor]=_(d.children,v,g,E,d.el,d.anchor)},N=({el:d,anchor:v},g,E)=>{let y;for(;d&&d!==v;)y=h(d),r(d,g,E),d=y;r(v,g,E)},K=({el:d,anchor:v})=>{let g;for(;d&&d!==v;)g=h(d),i(d),d=g;i(v)},le=(d,v,g,E,y,T,A,I,R)=>{A=A||v.type==="svg",d==null?tt(v,g,E,y,T,A,I,R):ve(d,v,y,T,A,I,R)},tt=(d,v,g,E,y,T,A,I)=>{let R,b;const{type:O,props:x,shapeFlag:P,transition:M,dirs:V}=d;if(R=d.el=s(d.type,T,x&&x.is,x),P&8?f(R,d.children):P&16&&H(d.children,R,null,E,y,T&&O!=="foreignObject",A,I),V&&Vt(d,null,E,"created"),nt(R,d,d.scopeId,A,E),x){for(const Y in x)Y!=="value"&&!Fr(Y)&&o(R,Y,null,x[Y],T,d.children,E,y,vt);"value"in x&&o(R,"value",null,x.value),(b=x.onVnodeBeforeMount)&&st(b,E,d)}V&&Vt(d,null,E,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&M&&!M.persisted;Z&&M.beforeEnter(R),r(R,v,g),((b=x&&x.onVnodeMounted)||Z||V)&&Re(()=>{b&&st(b,E,d),Z&&M.enter(R),V&&Vt(d,null,E,"mounted")},y)},nt=(d,v,g,E,y)=>{if(g&&p(d,g),E)for(let T=0;T<E.length;T++)p(d,E[T]);if(y){let T=y.subTree;if(v===T){const A=y.vnode;nt(d,A,A.scopeId,A.slotScopeIds,y.parent)}}},H=(d,v,g,E,y,T,A,I,R=0)=>{for(let b=R;b<d.length;b++){const O=d[b]=I?Tt(d[b]):at(d[b]);m(null,O,v,g,E,y,T,A,I)}},ve=(d,v,g,E,y,T,A)=>{const I=v.el=d.el;let{patchFlag:R,dynamicChildren:b,dirs:O}=v;R|=d.patchFlag&16;const x=d.props||te,P=v.props||te;let M;g&&jt(g,!1),(M=P.onVnodeBeforeUpdate)&&st(M,g,v,d),O&&Vt(v,d,g,"beforeUpdate"),g&&jt(g,!0);const V=y&&v.type!=="foreignObject";if(b?se(d.dynamicChildren,b,I,g,E,V,T):A||X(d,v,I,null,g,E,V,T,!1),R>0){if(R&16)Oe(I,v,x,P,g,E,y);else if(R&2&&x.class!==P.class&&o(I,"class",null,P.class,y),R&4&&o(I,"style",x.style,P.style,y),R&8){const Z=v.dynamicProps;for(let Y=0;Y<Z.length;Y++){const ue=Z[Y],ze=x[ue],pn=P[ue];(pn!==ze||ue==="value")&&o(I,ue,ze,pn,y,d.children,g,E,vt)}}R&1&&d.children!==v.children&&f(I,v.children)}else!A&&b==null&&Oe(I,v,x,P,g,E,y);((M=P.onVnodeUpdated)||O)&&Re(()=>{M&&st(M,g,v,d),O&&Vt(v,d,g,"updated")},E)},se=(d,v,g,E,y,T,A)=>{for(let I=0;I<v.length;I++){const R=d[I],b=v[I],O=R.el&&(R.type===Ye||!Yt(R,b)||R.shapeFlag&70)?c(R.el):g;m(R,b,O,null,E,y,T,A,!0)}},Oe=(d,v,g,E,y,T,A)=>{if(g!==E){if(g!==te)for(const I in g)!Fr(I)&&!(I in E)&&o(d,I,g[I],null,A,v.children,y,T,vt);for(const I in E){if(Fr(I))continue;const R=E[I],b=g[I];R!==b&&I!=="value"&&o(d,I,b,R,A,v.children,y,T,vt)}"value"in E&&o(d,"value",g.value,E.value)}},rt=(d,v,g,E,y,T,A,I,R)=>{const b=v.el=d?d.el:a(""),O=v.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:P,slotScopeIds:M}=v;M&&(I=I?I.concat(M):M),d==null?(r(b,g,E),r(O,g,E),H(v.children,g,O,y,T,A,I,R)):x>0&&x&64&&P&&d.dynamicChildren?(se(d.dynamicChildren,P,g,y,T,A,I),(v.key!=null||y&&v===y.subTree)&&du(d,v,!0)):X(d,v,g,O,y,T,A,I,R)},pt=(d,v,g,E,y,T,A,I,R)=>{v.slotScopeIds=I,d==null?v.shapeFlag&512?y.ctx.activate(v,g,E,A,R):Un(v,g,E,y,T,A,R):Ks(d,v,R)},Un=(d,v,g,E,y,T,A)=>{const I=d.component=sd(d,E,y);if(gi(d)&&(I.ctx.renderer=dn),ld(I),I.asyncDep){if(y&&y.registerDep(I,we),!d.el){const R=I.subTree=nn(mt);S(null,R,v,g)}return}we(I,d,v,g,y,T,A)},Ks=(d,v,g)=>{const E=v.component=d.component;if(dh(d,v,g))if(E.asyncDep&&!E.asyncResolved){ae(E,v,g);return}else E.next=v,sh(E.update),E.update();else v.el=d.el,E.vnode=v},we=(d,v,g,E,y,T,A)=>{const I=()=>{if(d.isMounted){let{next:O,bu:x,u:P,parent:M,vnode:V}=d,Z=O,Y;jt(d,!1),O?(O.el=V.el,ae(d,O,A)):O=V,x&&Br(x),(Y=O.props&&O.props.onVnodeBeforeUpdate)&&st(Y,M,O,V),jt(d,!0);const ue=$i(d),ze=d.subTree;d.subTree=ue,m(ze,ue,c(ze.el),Sr(ze),d,y,T),O.el=ue.el,Z===null&&ph(d,ue.el),P&&Re(P,y),(Y=O.props&&O.props.onVnodeUpdated)&&Re(()=>st(Y,M,O,V),y)}else{let O;const{el:x,props:P}=v,{bm:M,m:V,parent:Z}=d,Y=Hr(v);if(jt(d,!1),M&&Br(M),!Y&&(O=P&&P.onVnodeBeforeMount)&&st(O,Z,v),jt(d,!0),x&&ji){const ue=()=>{d.subTree=$i(d),ji(x,d.subTree,d,y,null)};Y?v.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=$i(d);m(null,ue,g,E,d,y,T),v.el=ue.el}if(V&&Re(V,y),!Y&&(O=P&&P.onVnodeMounted)){const ue=v;Re(()=>st(O,Z,ue),y)}(v.shapeFlag&256||Z&&Hr(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Re(d.a,y),d.isMounted=!0,v=g=E=null}},R=d.effect=new Jo(I,()=>is(b),d.scope),b=d.update=()=>R.run();b.id=d.uid,jt(d,!0),b()},ae=(d,v,g)=>{v.component=d;const E=d.vnode.props;d.vnode=v,d.next=null,Hh(d,v.props,E,g),zh(d,v.children,g),kn(),la(),Dn()},X=(d,v,g,E,y,T,A,I,R=!1)=>{const b=d&&d.children,O=d?d.shapeFlag:0,x=v.children,{patchFlag:P,shapeFlag:M}=v;if(P>0){if(P&128){Tr(b,x,g,E,y,T,A,I,R);return}else if(P&256){Ut(b,x,g,E,y,T,A,I,R);return}}M&8?(O&16&&vt(b,y,T),x!==b&&f(g,x)):O&16?M&16?Tr(b,x,g,E,y,T,A,I,R):vt(b,y,T,!0):(O&8&&f(g,""),M&16&&H(x,g,E,y,T,A,I,R))},Ut=(d,v,g,E,y,T,A,I,R)=>{d=d||mn,v=v||mn;const b=d.length,O=v.length,x=Math.min(b,O);let P;for(P=0;P<x;P++){const M=v[P]=R?Tt(v[P]):at(v[P]);m(d[P],M,g,null,y,T,A,I,R)}b>O?vt(d,y,T,!0,!1,x):H(v,g,E,y,T,A,I,R,x)},Tr=(d,v,g,E,y,T,A,I,R)=>{let b=0;const O=v.length;let x=d.length-1,P=O-1;for(;b<=x&&b<=P;){const M=d[b],V=v[b]=R?Tt(v[b]):at(v[b]);if(Yt(M,V))m(M,V,g,null,y,T,A,I,R);else break;b++}for(;b<=x&&b<=P;){const M=d[x],V=v[P]=R?Tt(v[P]):at(v[P]);if(Yt(M,V))m(M,V,g,null,y,T,A,I,R);else break;x--,P--}if(b>x){if(b<=P){const M=P+1,V=M<O?v[M].el:E;for(;b<=P;)m(null,v[b]=R?Tt(v[b]):at(v[b]),g,V,y,T,A,I,R),b++}}else if(b>P)for(;b<=x;)it(d[b],y,T,!0),b++;else{const M=b,V=b,Z=new Map;for(b=V;b<=P;b++){const Pe=v[b]=R?Tt(v[b]):at(v[b]);Pe.key!=null&&Z.set(Pe.key,b)}let Y,ue=0;const ze=P-V+1;let pn=!1,Js=0;const Hn=new Array(ze);for(b=0;b<ze;b++)Hn[b]=0;for(b=M;b<=x;b++){const Pe=d[b];if(ue>=ze){it(Pe,y,T,!0);continue}let ot;if(Pe.key!=null)ot=Z.get(Pe.key);else for(Y=V;Y<=P;Y++)if(Hn[Y-V]===0&&Yt(Pe,v[Y])){ot=Y;break}ot===void 0?it(Pe,y,T,!0):(Hn[ot-V]=b+1,ot>=Js?Js=ot:pn=!0,m(Pe,v[ot],g,null,y,T,A,I,R),ue++)}const Xs=pn?Yh(Hn):mn;for(Y=Xs.length-1,b=ze-1;b>=0;b--){const Pe=V+b,ot=v[Pe],Zs=Pe+1<O?v[Pe+1].el:E;Hn[b]===0?m(null,ot,g,Zs,y,T,A,I,R):pn&&(Y<0||b!==Xs[Y]?Ht(ot,g,Zs,2):Y--)}}},Ht=(d,v,g,E,y=null)=>{const{el:T,type:A,transition:I,children:R,shapeFlag:b}=d;if(b&6){Ht(d.component.subTree,v,g,E);return}if(b&128){d.suspense.move(v,g,E);return}if(b&64){A.move(d,v,g,dn);return}if(A===Ye){r(T,v,g);for(let x=0;x<R.length;x++)Ht(R[x],v,g,E);r(d.anchor,v,g);return}if(A===qi){N(d,v,g);return}if(E!==2&&b&1&&I)if(E===0)I.beforeEnter(T),r(T,v,g),Re(()=>I.enter(T),y);else{const{leave:x,delayLeave:P,afterLeave:M}=I,V=()=>r(T,v,g),Z=()=>{x(T,()=>{V(),M&&M()})};P?P(T,V,Z):Z()}else r(T,v,g)},it=(d,v,g,E=!1,y=!1)=>{const{type:T,props:A,ref:I,children:R,dynamicChildren:b,shapeFlag:O,patchFlag:x,dirs:P}=d;if(I!=null&&Eo(I,null,g,d,!0),O&256){v.ctx.deactivate(d);return}const M=O&1&&P,V=!Hr(d);let Z;if(V&&(Z=A&&A.onVnodeBeforeUnmount)&&st(Z,v,d),O&6)lc(d.component,g,E);else{if(O&128){d.suspense.unmount(g,E);return}M&&Vt(d,null,v,"beforeUnmount"),O&64?d.type.remove(d,v,g,y,dn,E):b&&(T!==Ye||x>0&&x&64)?vt(b,v,g,!1,!0):(T===Ye&&x&384||!y&&O&16)&&vt(R,v,g),E&&Ys(d)}(V&&(Z=A&&A.onVnodeUnmounted)||M)&&Re(()=>{Z&&st(Z,v,d),M&&Vt(d,null,v,"unmounted")},g)},Ys=d=>{const{type:v,el:g,anchor:E,transition:y}=d;if(v===Ye){ac(g,E);return}if(v===qi){K(d);return}const T=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:I}=y,R=()=>A(g,T);I?I(d.el,T,R):R()}else T()},ac=(d,v)=>{let g;for(;d!==v;)g=h(d),i(d),d=g;i(v)},lc=(d,v,g)=>{const{bum:E,scope:y,update:T,subTree:A,um:I}=d;E&&Br(E),y.stop(),T&&(T.active=!1,it(A,d,v,g)),I&&Re(I,v),Re(()=>{d.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},vt=(d,v,g,E=!1,y=!1,T=0)=>{for(let A=T;A<d.length;A++)it(d[A],v,g,E,y)},Sr=d=>d.shapeFlag&6?Sr(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),qs=(d,v,g)=>{d==null?v._vnode&&it(v._vnode,null,null,!0):m(v._vnode||null,d,v,null,null,null,g),la(),Yl(),v._vnode=d},dn={p:m,um:it,m:Ht,r:Ys,mt:Un,mc:H,pc:X,pbc:se,n:Sr,o:e};let Vi,ji;return t&&([Vi,ji]=t(dn)),{render:qs,hydrate:Vi,createApp:Gh(qs,Vi)}}function jt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function du(e,t,n=!1){const r=e.children,i=t.children;if(F(r)&&F(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Tt(i[o]),a.el=s.el),n||du(s,a)),a.type===yi&&(a.el=s.el)}}function Yh(e){const t=e.slice(),n=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,e[n[a]]<u?o=a+1:s=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=t[s];return n}const qh=e=>e.__isTeleport,Ye=Symbol(void 0),yi=Symbol(void 0),mt=Symbol(void 0),qi=Symbol(void 0),Kn=[];let Je=null;function kr(e=!1){Kn.push(Je=e?null:[])}function Jh(){Kn.pop(),Je=Kn[Kn.length-1]||null}let or=1;function ma(e){or+=e}function Xh(e){return e.dynamicChildren=or>0?Je||mn:null,Jh(),or>0&&Je&&Je.push(e),e}function Dr(e,t,n,r,i,o){return Xh(ce(e,t,n,r,i,o,!0))}function Zh(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const Ei="__vInternal",pu=({key:e})=>e??null,Vr=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||be(e)||U(e)?{i:Be,r:e,k:t,f:!!n}:e:null;function ce(e,t=null,n=null,r=0,i=null,o=e===Ye?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pu(t),ref:t&&Vr(t),scopeId:Xl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return a?(ls(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),or>0&&!s&&Je&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Je.push(l),l}const nn=ed;function ed(e,t=null,n=null,r=0,i=null,o=!1){if((!e||e===Ph)&&(e=mt),Zh(e)){const a=Pt(e,t,!0);return n&&ls(a,n),or>0&&!o&&Je&&(a.shapeFlag&6?Je[Je.indexOf(e)]=a:Je.push(a)),a.patchFlag|=-2,a}if(hd(e)&&(e=e.__vccOpts),t){t=td(t);let{class:a,style:l}=t;a&&!de(a)&&(t.class=ui(a)),ie(l)&&(Ul(l)&&!F(l)&&(l=Ce({},l)),t.style=Qo(l))}const s=de(e)?1:vh(e)?128:qh(e)?64:ie(e)?4:U(e)?2:0;return ce(e,t,n,r,i,s,o,!0)}function td(e){return e?Ul(e)||Ei in e?Ce({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=e,a=t?rd(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&pu(a),ref:t&&t.ref?n&&i?F(i)?i.concat(Vr(t)):[i,Vr(t)]:Vr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function nd(e=" ",t=0){return nn(yi,null,e,t)}function at(e){return e==null||typeof e=="boolean"?nn(mt):F(e)?nn(Ye,null,e.slice()):typeof e=="object"?Tt(e):nn(yi,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function ls(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ls(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ei in t)?t._ctx=Be:i===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),r&64?(n=16,t=[nd(t)]):n=8);e.children=t,e.shapeFlag|=n}function rd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ui([t.class,r.class]));else if(i==="style")t.style=Qo([t.style,r.style]);else if(fi(i)){const o=t[i],s=r[i];s&&o!==s&&!(F(o)&&o.includes(s))&&(t[i]=o?[].concat(o,s):s)}else i!==""&&(t[i]=r[i])}return t}function st(e,t,n,r=null){He(e,t,7,[n,r])}const id=hu();let od=0;function sd(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||id,o={uid:od++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lu(r,i),emitsOptions:Jl(r,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=uh.bind(null,o),e.ce&&e.ce(o),o}let fe=null;const ad=()=>fe||Be,Tn=e=>{fe=e,e.scope.on()},rn=()=>{fe&&fe.scope.off(),fe=null};function vu(e){return e.vnode.shapeFlag&4}let sr=!1;function ld(e,t=!1){sr=t;const{props:n,children:r}=e.vnode,i=vu(e);Uh(e,n,i,t),jh(e,r);const o=i?ud(e,t):void 0;return sr=!1,o}function ud(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hl(new Proxy(e.ctx,Dh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?cd(e):null;Tn(e),kn();const o=At(r,e,0,[e.props,i]);if(Dn(),rn(),Tl(o)){if(o.then(rn,rn),t)return o.then(s=>{ya(e,s,t)}).catch(s=>{vi(s,e,0)});e.asyncDep=o}else ya(e,o,t)}else _u(e,t)}function ya(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=zl(t)),_u(e,n)}let Ea;function _u(e,t,n){const r=e.type;if(!e.render){if(!t&&Ea&&!r.render){const i=r.template||ss(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Ce(Ce({isCustomElement:o,delimiters:a},s),l);r.render=Ea(i,u)}}e.render=r.render||Ze}Tn(e),kn(),Mh(e),Dn(),rn()}function fd(e){return new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}})}function cd(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=fd(e))},slots:e.slots,emit:e.emit,expose:t}}function bi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zl(Hl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)},has(t,n){return n in t||n in $n}}))}function hd(e){return U(e)&&"__vccOpts"in e}const dd=(e,t)=>rh(e,t,sr),pd=Symbol(""),vd=()=>Wr(pd),_d="3.2.47",gd="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,ba=qt&&qt.createElement("template"),md={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?qt.createElementNS(gd,e):qt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>qt.createTextNode(e),createComment:e=>qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{ba.innerHTML=r?`<svg>${e}</svg>`:e;const a=ba.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yd(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ed(e,t,n){const r=e.style,i=de(n);if(n&&!i){if(t&&!de(t))for(const o in t)n[o]==null&&bo(r,o,"");for(const o in n)bo(r,o,n[o])}else{const o=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const Ca=/\s*!important$/;function bo(e,t,n){if(F(n))n.forEach(r=>bo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bd(e,t);Ca.test(n)?e.setProperty(Pn(r),n.replace(Ca,""),"important"):e[r]=n}}const wa=["Webkit","Moz","ms"],Ji={};function bd(e,t){const n=Ji[t];if(n)return n;let r=wn(t);if(r!=="filter"&&r in e)return Ji[t]=r;r=Al(r);for(let i=0;i<wa.length;i++){const o=wa[i]+r;if(o in e)return Ji[t]=o}return t}const Ia="http://www.w3.org/1999/xlink";function Cd(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ia,t.slice(6,t.length)):e.setAttributeNS(Ia,t,n);else{const o=pc(t);n==null||o&&!Cl(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function wd(e,t,n,r,i,o,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Cl(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function _n(e,t,n,r){e.addEventListener(t,n,r)}function Id(e,t,n,r){e.removeEventListener(t,n,r)}function Td(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[a,l]=Sd(t);if(r){const u=o[t]=Nd(r,i);_n(e,a,u,l)}else s&&(Id(e,a,s,l),o[t]=void 0)}}const Ta=/(?:Once|Passive|Capture)$/;function Sd(e){let t;if(Ta.test(e)){t={};let r;for(;r=e.match(Ta);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pn(e.slice(2)),t]}let Xi=0;const Rd=Promise.resolve(),Ad=()=>Xi||(Rd.then(()=>Xi=0),Xi=Date.now());function Nd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(xd(r,n.value),t,5,[r])};return n.value=e,n.attached=Ad(),n}function xd(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Sa=/^on[a-z]/,Od=(e,t,n,r,i=!1,o,s,a,l)=>{t==="class"?yd(e,r,i):t==="style"?Ed(e,n,r):fi(t)?Go(t)||Td(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pd(e,t,r,i))?wd(e,t,r,o,s,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Cd(e,t,r,i))};function Pd(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Sa.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Sa.test(t)&&de(n)?!1:t in e}const kd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bh.props;const Ra=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Br(t,n):t};function Dd(e){e.target.composing=!0}function Aa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Na={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Ra(i);const o=r||i.props&&i.props.type==="number";_n(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=ao(a)),e._assign(a)}),n&&_n(e,"change",()=>{e.value=e.value.trim()}),t||(_n(e,"compositionstart",Dd),_n(e,"compositionend",Aa),_n(e,"change",Aa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},o){if(e._assign=Ra(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&ao(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},Md=["ctrl","shift","alt","meta"],Ld={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Md.some(n=>e[`${n}Key`]&&!t.includes(n))},xa=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const o=Ld[t[i]];if(o&&o(n,t))return}return e(n,...r)},Fd=Ce({patchProp:Od},md);let Oa;function Bd(){return Oa||(Oa=$h(Fd))}const Wd=(...e)=>{const t=Bd().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Ud(r);if(!i)return;const o=t._component;!U(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Ud(e){return de(e)?document.querySelector(e):e}var Co=function(e,t){return Co=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Co(e,t)};function oe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Co(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var kt=function(){return kt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},kt.apply(this,arguments)};function gu(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(f){try{u(r.next(f))}catch(c){s(c)}}function l(f){try{u(r.throw(f))}catch(c){s(c)}}function u(f){f.done?o(f.value):i(f.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function mu(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function ke(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Te(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Dt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w=function(e,t){if(!e)throw Mn(t)},Mn=function(e){return new Error("Firebase Database ("+yu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eu=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Hd=function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{var o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,c=(o&3)<<4|a>>4,h=(a&15)<<2|u>>6,p=u&63;l||(p=64,s||(h=64)),r.push(n[f],n[c],n[h],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Eu(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Hd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;var l=i<e.length,u=l?n[e.charAt(i)]:64;++i;var f=i<e.length,c=f?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||c==null)throw Error();var h=o<<2|a>>4;if(r.push(h),u!==64){var p=a<<4&240|u>>2;if(r.push(p),c!==64){var _=u<<6&192|c;r.push(_)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},bu=function(e){var t=Eu(e);return us.encodeByteArray(t,!0)},Pa=function(e){return bu(e).replace(/\./g,"")},ka=function(e){try{return us.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e){return ar(void 0,e)}function ar(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)!t.hasOwnProperty(r)||!Vd(r)||(e[r]=ar(e[r],t[r]));return e}function Vd(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(){function e(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){t.resolve=n,t.reject=r})}return e.prototype.wrapCallback=function(t){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof t=="function"&&(n.promise.catch(function(){}),t.length===1?t(r):t(r,i))}},e}();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var s=kt({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Pa(JSON.stringify(n)),Pa(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zd())}function Qd(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gd(){return typeof self=="object"&&self.self===self}function $d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iu(){return yu.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kd="FirebaseError",Yd=function(e){oe(t,e);function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=Kd,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,fs.prototype.create),o}return t}(Error),fs=function(){function e(t,n,r){this.service=t,this.serviceName=n,this.errors=r}return e.prototype.create=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+t,s=this.errors[t],a=s?qd(s,i):"Error",l=this.serviceName+": "+a+" ("+o+").",u=new Yd(o,l,i);return u},e}();function qd(e,t){return e.replace(Jd,function(n,r){var i=t[r];return i!=null?String(i):"<"+r+"?>"})}var Jd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){return JSON.parse(e)}function he(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tu=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=lr(ka(o[0])||""),n=lr(ka(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Xd=function(e){var t=Tu(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Zd=function(e){var t=Tu(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function an(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function wo(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Kr(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e){for(var t=[],n=function(l,u){Array.isArray(u)?u.forEach(function(f){t.push(encodeURIComponent(l)+"="+encodeURIComponent(f))}):t.push(encodeURIComponent(l)+"="+encodeURIComponent(u))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tp=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(t,n){n||(n=0);var r=this.W_;if(typeof t=="string")for(var i=0;i<16;i++)r[i]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(var i=0;i<16;i++)r[i]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=(o<<1|o>>>31)&4294967295}for(var s=this.chain_[0],a=this.chain_[1],l=this.chain_[2],u=this.chain_[3],f=this.chain_[4],c,h,i=0;i<80;i++){i<40?i<20?(c=u^a&(l^u),h=1518500249):(c=a^l^u,h=1859775393):i<60?(c=a&l|u&(a|l),h=2400959708):(c=a^l^u,h=3395469782);var o=(s<<5|s>>>27)+c+f+h+r[i]&4294967295;f=u,u=l,l=(a<<30|a>>>2)&4294967295,a=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(t,n){if(t!=null){n===void 0&&(n=t.length);for(var r=n-this.blockSize,i=0,o=this.buf_,s=this.inbuf_;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}},e.prototype.digest=function(){var t=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);for(var i=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)t[i]=this.chain_[r]>>o&255,++i;return t},e}();function np(e,t){var n=new rp(e,t);return n.subscribe.bind(n)}var rp=function(){function e(t,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(r)}).catch(function(i){r.error(i)})}return e.prototype.next=function(t){this.forEachObserver(function(n){n.next(t)})},e.prototype.error=function(t){this.forEachObserver(function(n){n.error(t)}),this.close(t)},e.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},e.prototype.subscribe=function(t,n,r){var i=this,o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ip(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=Zi),o.error===void 0&&(o.error=Zi),o.complete===void 0&&(o.complete=Zi);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),s},e.prototype.unsubscribeOne=function(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},e.prototype.forEachObserver=function(t){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,t)},e.prototype.sendOne=function(t,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[t]!==void 0)try{n(r.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},e.prototype.close=function(t){var n=this;this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},e}();function ip(e,t){if(typeof e!="object"||e===null)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&typeof e[i]=="function")return!0}return!1}function Zi(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k=function(e,t,n,r){var i;if(r<t?i="at least "+t:r>n&&(i=n===0?"none":"no more than "+n),i){var o=e+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function Ne(e,t){return e+" failed: "+t+" argument "}function _e(e,t,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Ne(e,t)+"must be a valid function.")}function Da(e,t,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Ne(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var op=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,w(r<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ci=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){return e&&e._delegate?e._delegate:e}var pr=function(){function e(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Su=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var r=new Ae;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,r;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(ap(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}try{for(var i=ke(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=Te(o.value,2),a=s[0],l=s[1],u=this.normalizeInstanceIdentifier(a);try{var f=this.getOrInitializeService({instanceIdentifier:u});l.resolve(f)}catch{}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=Gt),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return gu(this,void 0,void 0,function(){var t;return mu(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Dt(Dt([],Te(t.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Te(t.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=Gt),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=Gt),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,r;t===void 0&&(t={});var i=t.options,o=i===void 0?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var l=ke(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var f=Te(u.value,2),c=f[0],h=f[1],p=this.normalizeInstanceIdentifier(c);s===p&&h.resolve(a)}}catch(_){n={error:_}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);var s=this.instances.get(i);return s&&t(s,i),function(){o.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var r,i,o=this.onInitCallbacks.get(n);if(o)try{for(var s=ke(o),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(t,n)}catch{}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,r=t.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:sp(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=Gt),this.component?this.component.multipleInstances?t:Gt:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function sp(e){return e===Gt?void 0:e}function ap(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ru=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new Su(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Ge(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,cs=[],q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));var Au={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},lp=q.INFO,up=(zt={},zt[q.DEBUG]="log",zt[q.VERBOSE]="log",zt[q.INFO]="info",zt[q.WARN]="warn",zt[q.ERROR]="error",zt),fp=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=new Date().toISOString(),o=up[t];if(o)console[o].apply(console,Ge(["["+i+"]  "+e.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}},Nu=function(){function e(t){this.name=t,this._logLevel=lp,this._logHandler=fp,this._userLogHandler=null,cs.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in q))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(t){this._logLevel=typeof t=="string"?Au[t]:t},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,q.DEBUG],t)),this._logHandler.apply(this,Ge([this,q.DEBUG],t))},e.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,q.VERBOSE],t)),this._logHandler.apply(this,Ge([this,q.VERBOSE],t))},e.prototype.info=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,q.INFO],t)),this._logHandler.apply(this,Ge([this,q.INFO],t))},e.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,q.WARN],t)),this._logHandler.apply(this,Ge([this,q.WARN],t))},e.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,q.ERROR],t)),this._logHandler.apply(this,Ge([this,q.ERROR],t))},e}();function cp(e){cs.forEach(function(t){t.setLogLevel(e)})}function hp(e,t){for(var n=function(s){var a=null;t&&t.level&&(a=Au[t.level]),e===null?s.userLogHandler=null:s.userLogHandler=function(l,u){for(var f=[],c=2;c<arguments.length;c++)f[c-2]=arguments[c];var h=f.map(function(p){if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(function(p){return p}).join(" ");u>=(a??l.logLevel)&&e({level:q[u].toLowerCase(),message:h,args:f,type:l.name})}},r=0,i=cs;r<i.length;r++){var o=i[r];n(o)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,dp=(It={},It["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",It["bad-app-name"]="Illegal App name: '{$appName}",It["duplicate-app"]="Firebase App named '{$appName}' already exists",It["app-deleted"]="Firebase App named '{$appName}' already deleted",It["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",It["invalid-log-argument"]="First argument to `onLog` must be null or a function.",It),gn=new fs("app","Firebase",dp),xu="@firebase/app",pp="0.6.30",vp="@firebase/analytics",_p="@firebase/app-check",gp="@firebase/auth",mp="@firebase/database",yp="@firebase/functions",Ep="@firebase/installations",bp="@firebase/messaging",Cp="@firebase/performance",wp="@firebase/remote-config",Ip="@firebase/storage",Tp="@firebase/firestore",Sp="firebase-wrapper";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Yr="[DEFAULT]",Rp=(ye={},ye[xu]="fire-core",ye[vp]="fire-analytics",ye[_p]="fire-app-check",ye[gp]="fire-auth",ye[mp]="fire-rtdb",ye[yp]="fire-fn",ye[Ep]="fire-iid",ye[bp]="fire-fcm",ye[Cp]="fire-perf",ye[wp]="fire-rc",ye[Ip]="fire-gcs",ye[Tp]="fire-fst",ye["fire-js"]="fire-js",ye[Sp]="fire-js-all",ye);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=new Nu("@firebase/app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jr=function(){function e(t,n,r){var i=this;this.firebase_=r,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=Cu(t),this.container=new Ru(n.name),this._addComponent(new pr("app",function(){return i},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return i._addComponent(o)})}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var t=this;return new Promise(function(n){t.checkDestroyed_(),n()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(n){return n.delete()}))}).then(function(){t.isDeleted_=!0})},e.prototype._getService=function(t,n){var r;n===void 0&&(n=Yr),this.checkDestroyed_();var i=this.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})},e.prototype._removeServiceInstance=function(t,n){n===void 0&&(n=Yr),this.container.getProvider(t).clearInstance(n)},e.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(n){Sn.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,n)}},e.prototype._addOrOverwriteComponent=function(t){this.container.addOrOverwriteComponent(t)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw gn.create("app-deleted",{appName:this.name_})},e}();jr.prototype.name&&jr.prototype.options||jr.prototype.delete||console.log("dc");var Ap="8.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(e){var t={},n=new Map,r={__esModule:!0,initializeApp:s,app:o,registerVersion:u,setLogLevel:cp,onLog:f,apps:null,SDK_VERSION:Ap,INTERNAL:{registerComponent:l,removeApp:i,components:n,useAsService:c}};r.default=r,Object.defineProperty(r,"apps",{get:a});function i(h){delete t[h]}function o(h){if(h=h||Yr,!De(t,h))throw gn.create("no-app",{appName:h});return t[h]}o.App=e;function s(h,p){if(p===void 0&&(p={}),typeof p!="object"||p===null){var _=p;p={name:_}}var m=p;m.name===void 0&&(m.name=Yr);var C=m.name;if(typeof C!="string"||!C)throw gn.create("bad-app-name",{appName:String(C)});if(De(t,C))throw gn.create("duplicate-app",{appName:C});var S=new e(h,m,r);return t[C]=S,S}function a(){return Object.keys(t).map(function(h){return t[h]})}function l(h){var p=h.name;if(n.has(p))return Sn.debug("There were multiple attempts to register component "+p+"."),h.type==="PUBLIC"?r[p]:null;if(n.set(p,h),h.type==="PUBLIC"){var _=function(D){if(D===void 0&&(D=o()),typeof D[p]!="function")throw gn.create("invalid-app-argument",{appName:p});return D[p]()};h.serviceProps!==void 0&&ar(_,h.serviceProps),r[p]=_,e.prototype[p]=function(){for(var D=[],N=0;N<arguments.length;N++)D[N]=arguments[N];var K=this._getService.bind(this,p);return K.apply(this,h.multipleInstances?D:[])}}for(var m=0,C=Object.keys(t);m<C.length;m++){var S=C[m];t[S]._addComponent(h)}return h.type==="PUBLIC"?r[p]:null}function u(h,p,_){var m,C=(m=Rp[h])!==null&&m!==void 0?m:h;_&&(C+="-"+_);var S=C.match(/\s|\//),D=p.match(/\s|\//);if(S||D){var N=['Unable to register library "'+C+'" with version "'+p+'":'];S&&N.push('library name "'+C+'" contains illegal characters (whitespace or "/")'),S&&D&&N.push("and"),D&&N.push('version name "'+p+'" contains illegal characters (whitespace or "/")'),Sn.warn(N.join(" "));return}l(new pr(C+"-version",function(){return{library:C,version:p}},"VERSION"))}function f(h,p){if(h!==null&&typeof h!="function")throw gn.create("invalid-log-argument");hp(h,p)}function c(h,p){if(p==="serverAuth")return null;var _=p;return _}return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(){var e=Np(jr);e.INTERNAL=kt(kt({},e.INTERNAL),{createFirebaseNamespace:Ou,extendNamespace:t,createSubscribe:np,ErrorFactory:fs,deepExtend:ar});function t(n){ar(e,n)}return e}var hs=Ou();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xp=function(){function e(t){this.container=t}return e.prototype.getPlatformInfoString=function(){var t=this.container.getProviders();return t.map(function(n){if(Op(n)){var r=n.getImmediate();return r.library+"/"+r.version}else return null}).filter(function(n){return n}).join(" ")},e}();function Op(e){var t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e,t){e.INTERNAL.registerComponent(new pr("platform-logger",function(n){return new xp(n)},"PRIVATE")),e.registerVersion(xu,pp,t),e.registerVersion("fire-js","")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Gd()&&self.firebase!==void 0){Sn.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var Ma=self.firebase.SDK_VERSION;Ma&&Ma.indexOf("LITE")>=0&&Sn.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var kp=hs.initializeApp;hs.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Qd()&&Sn.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),kp.apply(void 0,e)};var vr=hs;Pp(vr);var Dp="firebase",Pu="8.10.1";/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr.registerVersion(Dp,Pu,"app");vr.SDK_VERSION=Pu;var Mp="@firebase/database",Lp="0.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ku="";function Du(e){ku=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fp=function(){function e(t){this.domStorage_=t,this.prefix_="firebase:"}return e.prototype.set=function(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),he(n))},e.prototype.get=function(t){var n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:lr(n)},e.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},e.prototype.prefixedName_=function(t){return this.prefix_+t},e.prototype.toString=function(){return this.domStorage_.toString()},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bp=function(){function e(){this.cache_={},this.isInMemoryStorage=!0}return e.prototype.set=function(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n},e.prototype.get=function(t){return De(this.cache_,t)?this.cache_[t]:null},e.prototype.remove=function(t){delete this.cache_[t]},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mu=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Fp(t)}}catch{}return new Bp},Zt=Mu("localStorage"),Io=Mu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn=new Nu("@firebase/database"),Lu=function(){var e=1;return function(){return e++}}(),Fu=function(e){var t=op(e),n=new tp;n.update(t);var r=n.digest();return us.encodeByteArray(r)},_r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=_r.apply(null,i):typeof i=="object"?n+=he(i):n+=i,n+=" "}return n},on=null,La=!0,Bu=function(e,t){w(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Cn.logLevel=q.VERBOSE,on=Cn.log.bind(Cn),t&&Io.set("logging_enabled",!0)):typeof e=="function"?on=e:(on=null,Io.remove("logging_enabled"))},ge=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(La===!0&&(La=!1,on===null&&Io.get("logging_enabled")===!0&&Bu(!0)),on){var n=_r.apply(null,e);on(n)}},gr=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];ge.apply(void 0,Dt([e],Te(t)))}},To=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+_r.apply(void 0,Dt([],Te(e)));Cn.error(n)},ft=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+_r.apply(void 0,Dt([],Te(e)));throw Cn.error(n),new Error(n)},me=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+_r.apply(void 0,Dt([],Te(e)));Cn.warn(n)},Wp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wi=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Up=function(e){if(document.readyState==="complete")e();else{var t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bt="[MIN_NAME]",ct="[MAX_NAME]",fn=function(e,t){if(e===t)return 0;if(e===bt||t===ct)return-1;if(t===bt||e===ct)return 1;var n=qr(e),r=qr(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1},Hp=function(e,t){return e===t?0:e<t?-1:1},Vn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+he(t))},ds=function(e){if(typeof e!="object"||e===null)return he(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)i!==0&&(r+=","),r+=he(t[i]),r+=":",r+=ds(e[t[i]]);return r+="}",r},Wu=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function pe(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Uu=function(e){w(!wi(e),"Invalid JSON number");var t=11,n=52,r=(1<<t-1)-1,i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));var u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();var f=u.join(""),c="";for(l=0;l<64;l+=8){var h=parseInt(f.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},Vp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zp(e,t){var n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}var Qp=new RegExp("^-?(0*)\\d{1,10}$"),Hu=-2147483648,ps=2147483647,qr=function(e){if(Qp.test(e)){var t=Number(e);if(t>=Hu&&t<=ps)return t}return null},Ln=function(e){try{e()}catch(t){setTimeout(function(){var n=t.stack||"";throw me("Exception was thrown by user callback.",n),t},Math.floor(0))}},Gp=function(){var e=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yn=function(e,t){var n=setTimeout(e,t);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $p=function(){function e(t,n){var r=this;this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return e.prototype.getToken=function(t){var n=this;return this.appCheck?this.appCheck.getToken(t):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){me('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kp=function(){function e(t,n,r){var i=this;this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return e.prototype.getToken=function(t){var n=this;return this.auth_?this.auth_.getToken(t).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(t)})},e.prototype.removeTokenChangeListener=function(t){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',me(t)},e}(),qn=function(){function e(t){this.accessToken=t}return e.prototype.getToken=function(t){return Promise.resolve({accessToken:this.accessToken})},e.prototype.addTokenChangeListener=function(t){t(this.accessToken)},e.prototype.removeTokenChangeListener=function(t){},e.prototype.notifyForInvalidToken=function(){},e.OWNER="owner",e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vs="5",Vu="v",ju="s",zu="r",Qu="f",Gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$u="ls",Yp="p",So="ac",Ku="websocket",Yu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _s=function(){function e(t,n,r,i,o,s,a){o===void 0&&(o=!1),s===void 0&&(s=""),a===void 0&&(a=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+t)||this._host}return e.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},e.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),e.prototype.toString=function(){var t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},e.prototype.toURLString=function(){var t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+t+this.host+"/"+n},e}();function qp(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function qu(e,t,n){w(typeof t=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");var r;if(t===Ku)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Yu)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);qp(e)&&(n.ns=e.namespace);var i=[];return pe(n,function(o,s){i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jp=function(){function e(){this.counters_={}}return e.prototype.incrementCounter=function(t,n){n===void 0&&(n=1),De(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n},e.prototype.get=function(){return Cu(this.counters_)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo={},to={};function gs(e){var t=e.toString();return eo[t]||(eo[t]=new Jp),eo[t]}function Xp(e,t){var n=e.toString();return to[n]||(to[n]=t()),to[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zp=function(){function e(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e.prototype.closeAfter=function(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},e.prototype.handleResponse=function(t,n){var r=this;this.pendingResponses[t]=n;for(var i=function(){var a=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var l=function(f){a[f]&&Ln(function(){r.onMessage_(a[f])})},u=0;u<a.length;++u)l(u);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var s=i();if(s==="break")break}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fa="start",ev="close",tv="pLPCommand",nv="pRTLPCB",Ju="id",Xu="pw",Zu="ser",rv="cb",iv="seg",ov="ts",sv="d",av="dframe",ef=1870,tf=30,lv=ef-tf,uv=25e3,fv=3e4,ms=function(){function e(t,n,r,i,o,s,a){var l=this;this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gr(t),this.stats_=gs(n),this.urlFn=function(u){return l.appCheckToken&&(u[So]=l.appCheckToken),qu(n,Yu,u)}}return e.prototype.open=function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zp(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(fv)),Up(function(){if(!r.isClosed_){r.scriptTagHolder=new cv(function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=Te(s,5),u=l[0],f=l[1],c=l[2];if(l[3],l[4],r.incrementIncomingBytes_(s),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,u===Fa)r.id=f,r.password=c;else if(u===ev)f?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(f,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+u)},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=Te(s,2),u=l[0],f=l[1];r.incrementIncomingBytes_(s),r.myPacketOrderer.handleResponse(u,f)},function(){r.onClosed_()},r.urlFn);var i={};i[Fa]="t",i[Zu]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[rv]=r.scriptTagHolder.uniqueCallbackIdentifier),i[Vu]=vs,r.transportSessionId&&(i[ju]=r.transportSessionId),r.lastSessionId&&(i[$u]=r.lastSessionId),r.applicationId&&(i[Yp]=r.applicationId),r.appCheckToken&&(i[So]=r.appCheckToken),typeof location<"u"&&location.hostname&&Gu.test(location.hostname)&&(i[zu]=Qu);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},e.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.forceAllow_=!0},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){return e.forceAllow_?!0:!e.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vp()&&!jp()},e.prototype.markConnectionHealthy=function(){},e.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},e.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},e.prototype.send=function(t){var n=he(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=bu(n),i=Wu(r,lv),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},e.prototype.addDisconnectPingFrame=function(t,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[av]="t",r[Ju]=t,r[Xu]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},e.prototype.incrementIncomingBytes_=function(t){var n=he(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},e}(),cv=function(){function e(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lu(),window[tv+this.uniqueCallbackIdentifier]=t,window[nv+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}var a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){ge("frame writing exception"),l.stack&&ge(l.stack),ge(l)}}}return e.createIFrame_=function(){var t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{var n=t.contentWindow.document;n||ge("No IE domain setting required")}catch{var r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},e.prototype.close=function(){var t=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){t.myIFrame!==null&&(document.body.removeChild(t.myIFrame),t.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},e.prototype.startLongPoll=function(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););},e.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var t={};t[Ju]=this.myID,t[Xu]=this.myPW,t[Zu]=this.currentSerial;for(var n=this.urlFn(t),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+tf+r.length<=ef){var s=this.pendingSegs.shift();r=r+"&"+iv+i+"="+s.seg+"&"+ov+i+"="+s.ts+"&"+sv+i+"="+s.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},e.prototype.enqueueSegment=function(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()},e.prototype.addLongPollTag_=function(t,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(uv)),s=function(){clearTimeout(o),i()};this.addTag(t,s)},e.prototype.addTag=function(t,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){ge("Long-poll script failed to load: "+t),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hv=16384,dv=45e3,Jr=null;typeof MozWebSocket<"u"?Jr=MozWebSocket:typeof WebSocket<"u"&&(Jr=WebSocket);var Jt=function(){function e(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gr(this.connId),this.stats_=gs(n),this.connURL=e.connectionURL_(n,s,a,i),this.nodeAdmin=n.nodeAdmin}return e.connectionURL_=function(t,n,r,i){var o={};return o[Vu]=vs,typeof location<"u"&&location.hostname&&Gu.test(location.hostname)&&(o[zu]=Qu),n&&(o[ju]=n),r&&(o[$u]=r),i&&(o[So]=i),qu(t,Ku,o)},e.prototype.open=function(t,n){var r=this;this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{var i,o,s,a;if(!Iu()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Jr(this.connURL,[],o)}}catch(u){this.log_("Error instantiating WebSocket.");var l=u.message||u.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(u){r.handleIncomingFrame(u)},this.mySock.onerror=function(u){r.log_("WebSocket error.  Closing connection.");var f=u.message||u.data;f&&r.log_(f),r.onClosed_()}},e.prototype.start=function(){},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){var t=!1;if(typeof navigator<"u"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Jr!==null&&!e.forceDisallow_},e.previouslyFailed=function(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0},e.prototype.markConnectionHealthy=function(){Zt.remove("previous_websocket_failure")},e.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=lr(n);this.onMessage(r)}},e.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},e.prototype.extractFrameCount_=function(t){if(w(this.frames===null,"We already have a frame buffer"),t.length<=6){var n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t},e.prototype.handleIncomingFrame=function(t){if(this.mySock!==null){var n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},e.prototype.send=function(t){this.resetKeepAlive();var n=he(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=Wu(n,hv);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},e.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},e.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},e.prototype.resetKeepAlive=function(){var t=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(dv))},e.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},e.responsesRequiredToBeHealthy=2,e.healthyTimeout=3e4,e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pv=function(){function e(t){this.initTransports_(t)}return Object.defineProperty(e,"ALL_TRANSPORTS",{get:function(){return[ms,Jt]},enumerable:!1,configurable:!0}),e.prototype.initTransports_=function(t){var n,r,i=Jt&&Jt.isAvailable(),o=i&&!Jt.previouslyFailed();if(t.webSocketOnly&&(i||me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Jt];else{var s=this.transports_=[];try{for(var a=ke(e.ALL_TRANSPORTS),l=a.next();!l.done;l=a.next()){var u=l.value;u&&u.isAvailable()&&s.push(u)}}catch(f){n={error:f}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}},e.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},e.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vv=6e4,_v=5e3,gv=10*1024,mv=100*1024,no="t",Ba="d",yv="s",Wa="r",Ev="e",Ua="o",Ha="a",Va="n",ja="p",bv="h",nf=function(){function e(t,n,r,i,o,s,a,l,u,f){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gr("c:"+this.id+":"),this.transportManager_=new pv(n),this.log_("Connection created"),this.start_()}return e.prototype.start_=function(){var t=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=Yn(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>mv?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>gv?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(o)))},e.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},e.prototype.disconnReceiver_=function(t){var n=this;return function(r){t===n.conn_?n.onConnectionLost_(r):t===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},e.prototype.connReceiver_=function(t){var n=this;return function(r){n.state_!==2&&(t===n.rx_?n.onPrimaryMessageReceived_(r):t===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},e.prototype.sendRequest=function(t){var n={t:"d",d:t};this.sendData_(n)},e.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},e.prototype.onSecondaryControl_=function(t){if(no in t){var n=t[no];n===Ha?this.upgradeIfSecondaryHealthy_():n===Wa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ua&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},e.prototype.onSecondaryMessageReceived_=function(t){var n=Vn("t",t),r=Vn("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},e.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ja,d:{}}}))},e.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ha,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Va,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},e.prototype.onPrimaryMessageReceived_=function(t){var n=Vn("t",t),r=Vn("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},e.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},e.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},e.prototype.onControl_=function(t){var n=Vn(no,t);if(Ba in t){var r=t[Ba];if(n===bv)this.onHandshake_(r);else if(n===Va){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yv?this.onConnectionShutdown_(r):n===Wa?this.onReset_(r):n===Ev?To("Server Error: "+r):n===Ua?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):To("Unknown control packet command: "+n)}},e.prototype.onHandshake_=function(t){var n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vs!==r&&me("Protocol version mismatch detected"),this.tryStartUpgrade_())},e.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)},e.prototype.startUpgrade_=function(t){var n=this;this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),Yn(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(vv))},e.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())},e.prototype.onConnectionEstablished_=function(t,n){var r=this;this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yn(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(_v))},e.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ja,d:{}}}))},e.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()},e.prototype.onConnectionLost_=function(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},e.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},e.prototype.sendData_=function(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)},e.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},e.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rf=function(){function e(){}return e.prototype.put=function(t,n,r,i){},e.prototype.merge=function(t,n,r,i){},e.prototype.refreshAuthToken=function(t){},e.prototype.refreshAppCheckToken=function(t){},e.prototype.onDisconnectPut=function(t,n,r){},e.prototype.onDisconnectMerge=function(t,n,r){},e.prototype.onDisconnectCancel=function(t,n){},e.prototype.reportStats=function(t){},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var of=function(){function e(t){this.allowedEvents_=t,this.listeners_={},w(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return e.prototype.trigger=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[t]))for(var i=Dt([],Te(this.listeners_[t])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},e.prototype.on=function(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});var i=this.getInitialEvent(t);i&&n.apply(r,i)},e.prototype.off=function(t,n,r){this.validateEventType_(t);for(var i=this.listeners_[t]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},e.prototype.validateEventType_=function(t){w(this.allowedEvents_.find(function(n){return n===t}),"Unknown event: "+t)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var za=function(e){oe(t,e);function t(){var n=e.call(this,["online"])||this;return n.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wu()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return w(n==="online","Unknown event type: "+n),[this.online_]},t.prototype.currentlyOnline=function(){return this.online_},t}(of);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qa=32,Ga=768,$=function(){function e(t,n){if(n===void 0){this.pieces_=t.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}return e.prototype.toString=function(){for(var t="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"},e}();function Q(){return new $("")}function B(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Mt(e){return e.pieces_.length-e.pieceNum_}function J(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new $(e.pieces_,t)}function ys(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Cv(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ur(e,t){return t===void 0&&(t=0),e.pieces_.slice(e.pieceNum_+t)}function sf(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $(t,0)}function ne(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof $)for(var r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else for(var i=t.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new $(n,0)}function W(e){return e.pieceNum_>=e.pieces_.length}function Se(e,t){var n=B(e),r=B(t);if(n===null)return t;if(n===r)return Se(J(e),J(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wv(e,t){for(var n=ur(e,0),r=ur(t,0),i=0;i<n.length&&i<r.length;i++){var o=fn(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Es(e,t){if(Mt(e)!==Mt(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function We(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Mt(e)>Mt(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Iv=function(){function e(t,n){this.errorPrefix_=n,this.parts_=ur(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=Ci(this.parts_[r]);af(this)}return e}();function Tv(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ci(t),af(e)}function Sv(e){var t=e.parts_.pop();e.byteLength_-=Ci(t),e.parts_.length>0&&(e.byteLength_-=1)}function af(e){if(e.byteLength_>Ga)throw new Error(e.errorPrefix_+"has a key path longer than "+Ga+" bytes ("+e.byteLength_+").");if(e.parts_.length>Qa)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qa+") or object contains a cycle "+$t(e))}function $t(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rv=function(e){oe(t,e);function t(){var n=e.call(this,["visible"])||this,r,i;return typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",r="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return w(n==="visible","Unknown event type: "+n),[this.visible_]},t}(of);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn=1e3,Av=60*5*1e3,Nv=3*1e3,$a=30*1e3,xv=1.3,Ov=3e4,Pv="server_kill",Ka=3,sn=function(e){oe(t,e);function t(n,r,i,o,s,a,l,u){var f=e.call(this)||this;if(f.repoInfo_=n,f.applicationId_=r,f.onDataUpdate_=i,f.onConnectStatus_=o,f.onServerInfoUpdate_=s,f.authTokenProvider_=a,f.appCheckTokenProvider_=l,f.authOverride_=u,f.id=t.nextPersistentConnectionId_++,f.log_=gr("p:"+f.id+":"),f.interruptReasons_={},f.listens=new Map,f.outstandingPuts_=[],f.outstandingGets_=[],f.outstandingPutCount_=0,f.outstandingGetCount_=0,f.onDisconnectRequestQueue_=[],f.connected_=!1,f.reconnectDelay_=jn,f.maxReconnectDelay_=Av,f.securityDebugCallback_=null,f.lastSessionId=null,f.establishConnectionTimer_=null,f.visible_=!1,f.requestCBHash_={},f.requestNumber_=0,f.realtime_=null,f.authToken_=null,f.appCheckToken_=null,f.forceTokenRefresh_=!1,f.invalidAuthTokenCount_=0,f.invalidAppCheckTokenCount_=0,f.firstConnection_=!0,f.lastConnectionAttemptTime_=null,f.lastConnectionEstablishedTime_=null,u&&!Iu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Rv.getInstance().on("visible",f.onVisible_,f),n.host.indexOf("fblocal")===-1&&za.getInstance().on("online",f.onOnline_,f),f}return t.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,s={r:o,a:n,b:r};this.log_(he(s)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[o]=i)},t.prototype.get=function(n){var r=this;this.initConnection_();var i=new Ae,o={p:n._path.toString(),q:n._queryObject},s={action:"g",request:o,onComplete:function(l){var u=l.d;l.s==="ok"?(r.onDataUpdate_(o.p,u,!1,null),i.resolve(u)):i.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var l=r.outstandingGets_[a];l===void 0||s!==l||(delete r.outstandingGets_[a],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+a+" timed out on connection"),i.reject(new Error("Client is offline.")))},Nv),this.connected_&&this.sendGet_(a),i.promise},t.prototype.listen=function(n,r,i,o){this.initConnection_();var s=n._queryIdentifier,a=n._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),w(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");var l={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(a).set(s,l),this.connected_&&this.sendListen_(l)},t.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},t.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),s=i._queryIdentifier;this.log_("Listen on "+o+" for "+s);var a={p:o},l="q";n.tag&&(a.q=i._queryObject,a.t=n.tag),a.h=n.hashFn(),this.sendRequest(l,a,function(u){var f=u.d,c=u.s;t.warnOnListenWarnings_(f,i);var h=r.listens.get(o)&&r.listens.get(o).get(s);h===n&&(r.log_("listen response",u),c!=="ok"&&r.removeListen_(o,s),n.onComplete&&n.onComplete(c,f))})},t.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&De(n,"w")){var i=an(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',s=r._path.toString();me("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(s+" to your security rules for better performance."))}}},t.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},t.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||Zd(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$a)},t.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},t.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=Xd(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(s){var a=s.s,l=s.d||"error";n.authToken_===r&&(a==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(a,l))})}},t.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},t.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),w(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var s=this.removeListen_(i,o);s&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},t.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var s={p:n},a="n";o&&(s.q=i,s.t=o),this.sendRequest(a,s)},t.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},t.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},t.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},t.prototype.sendOnDisconnect_=function(n,r,i,o){var s={p:r,d:i};this.log_("onDisconnect "+n,s),this.sendRequest(n,s,function(a){o&&setTimeout(function(){o(a.s,a.d)},Math.floor(0))})},t.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},t.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},t.prototype.putInternal=function(n,r,i,o,s){this.initConnection_();var a={p:r,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:n,request:a,onComplete:o}),this.outstandingPutCount_++;var l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+r)},t.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,s=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(a){r.log_(i+" response",a),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),s&&s(a.s,a.d)})},t.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var s=o.s;if(s!=="ok"){var a=o.d;r.log_("reportStats","Error sending stats: "+a)}})}},t.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+he(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},t.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):To("Unrecognized action received from server: "+he(n)+`
Are you using the latest client?`)},t.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},t.prototype.scheduleConnect_=function(n){var r=this;w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},t.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},t.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},t.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},t.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>Ov&&(this.reconnectDelay_=jn),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xv)}this.onConnectStatus_(!1)},t.prototype.establishConnection_=function(){return gu(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,f,c,h,p,_,m,C=this;return mu(this,function(S){switch(S.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+t.nextConnectionId_++,s=this.lastSessionId,a=!1,l=null,u=function(){l?l.close():(a=!0,i())},f=function(D){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(D)},this.realtime_={close:u,sendRequest:f},c=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,S.label=1;case 1:return S.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)])];case 2:return h=Te.apply(void 0,[S.sent(),2]),p=h[0],_=h[1],a?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,l=new nf(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(D){me(D+" ("+C.repoInfo_.toString()+")"),C.interrupt(Pv)},s)),[3,4];case 3:return m=S.sent(),this.log_("Failed to get token: "+m),a||(this.repoInfo_.nodeAdmin&&me(m),u()),[3,4];case 4:return[2]}})})},t.prototype.interrupt=function(n){ge("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},t.prototype.resume=function(n){ge("Resuming connection for reason: "+n),delete this.interruptReasons_[n],wo(this.interruptReasons_)&&(this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0))},t.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},t.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},t.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(s){return ds(s)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},t.prototype.removeListen_=function(n,r){var i=new $(n).toString(),o;if(this.listens.has(i)){var s=this.listens.get(i);o=s.get(r),s.delete(r),s.size===0&&this.listens.delete(i)}else o=void 0;return o},t.prototype.onAuthRevoked_=function(n,r){ge("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ka&&(this.reconnectDelay_=$a,this.authTokenProvider_.notifyForInvalidToken()))},t.prototype.onAppCheckRevoked_=function(n,r){ge("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ka&&this.appCheckTokenProvider_.notifyForInvalidToken())},t.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},t.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var s=ke(this.listens.values()),a=s.next();!a.done;a=s.next()){var l=a.value;try{for(var u=(i=void 0,ke(l.values())),f=u.next();!f.done;f=u.next()){var c=f.value;this.sendListen_(c)}}catch(_){i={error:_}}finally{try{f&&!f.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}}catch(_){n={error:_}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var p=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(p.action,p.pathString,p.data,p.onComplete)}for(var h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},t.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+ku.replace(/\./g,"-")]=1,wu()?n["framework.cordova"]=1:$d()&&(n["framework.reactnative"]=1),this.reportStats(n)},t.prototype.shouldReconnect_=function(){var n=za.getInstance().currentlyOnline();return wo(this.interruptReasons_)&&n},t.nextPersistentConnectionId_=0,t.nextConnectionId_=0,t}(rf);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j=function(){function e(t,n){this.name=t,this.node=n}return e.Wrap=function(t,n){return new e(t,n)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii=function(){function e(){}return e.prototype.getCompare=function(){return this.compare.bind(this)},e.prototype.indexedValueChanged=function(t,n){var r=new j(bt,t),i=new j(bt,n);return this.compare(r,i)!==0},e.prototype.minPost=function(){return j.MIN},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr,lf=function(e){oe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t,"__EMPTY_NODE",{get:function(){return Mr},set:function(n){Mr=n},enumerable:!1,configurable:!0}),t.prototype.compare=function(n,r){return fn(n.name,r.name)},t.prototype.isDefinedOn=function(n){throw Mn("KeyIndex.isDefinedOn not expected to be called.")},t.prototype.indexedValueChanged=function(n,r){return!1},t.prototype.minPost=function(){return j.MIN},t.prototype.maxPost=function(){return new j(ct,Mr)},t.prototype.makePost=function(n,r){return w(typeof n=="string","KeyIndex indexValue must always be a string."),new j(n,Mr)},t.prototype.toString=function(){return".key"},t}(Ii),ut=new lf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr=function(){function e(t,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}return e.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n},e.prototype.hasNext=function(){return this.nodeStack_.length>0},e.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},e}(),Ke=function(){function e(t,n,r,i,o){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??gt.EMPTY_NODE,this.right=o??gt.EMPTY_NODE}return e.prototype.copy=function(t,n,r,i,o){return new e(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)},e.prototype.count=function(){return this.left.count()+1+this.right.count()},e.prototype.isEmpty=function(){return!1},e.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},e.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},e.prototype.minKey=function(){return this.min_().key},e.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},e.prototype.insert=function(t,n,r){var i=this,o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()},e.prototype.removeMin_=function(){if(this.left.isEmpty())return gt.EMPTY_NODE;var t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()},e.prototype.remove=function(t,n){var r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()},e.prototype.isRed_=function(){return this.color},e.prototype.fixUp_=function(){var t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t},e.prototype.moveRedLeft_=function(){var t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t},e.prototype.moveRedRight_=function(){var t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t},e.prototype.rotateLeft_=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},e.prototype.rotateRight_=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},e.prototype.colorFlip_=function(){var t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)},e.prototype.checkMaxDepth_=function(){var t=this.check_();return Math.pow(2,t)<=this.count()+1},e.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)},e.RED=!0,e.BLACK=!1,e}(),kv=function(){function e(){}return e.prototype.copy=function(t,n,r,i,o){return this},e.prototype.insert=function(t,n,r){return new Ke(t,n,null)},e.prototype.remove=function(t,n){return this},e.prototype.count=function(){return 0},e.prototype.isEmpty=function(){return!0},e.prototype.inorderTraversal=function(t){return!1},e.prototype.reverseTraversal=function(t){return!1},e.prototype.minKey=function(){return null},e.prototype.maxKey=function(){return null},e.prototype.check_=function(){return 0},e.prototype.isRed_=function(){return!1},e}(),gt=function(){function e(t,n){n===void 0&&(n=e.EMPTY_NODE),this.comparator_=t,this.root_=n}return e.prototype.insert=function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))},e.prototype.remove=function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ke.BLACK,null,null))},e.prototype.get=function(t){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},e.prototype.getPredecessorKey=function(t){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},e.prototype.isEmpty=function(){return this.root_.isEmpty()},e.prototype.count=function(){return this.root_.count()},e.prototype.minKey=function(){return this.root_.minKey()},e.prototype.maxKey=function(){return this.root_.maxKey()},e.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},e.prototype.getIterator=function(t){return new Lr(this.root_,null,this.comparator_,!1,t)},e.prototype.getIteratorFrom=function(t,n){return new Lr(this.root_,t,this.comparator_,!1,n)},e.prototype.getReverseIteratorFrom=function(t,n){return new Lr(this.root_,t,this.comparator_,!0,n)},e.prototype.getReverseIterator=function(t){return new Lr(this.root_,null,this.comparator_,!0,t)},e.EMPTY_NODE=new kv,e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(e,t){return fn(e.name,t.name)}function bs(e,t){return fn(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro;function Mv(e){Ro=e}var uf=function(e){return typeof e=="number"?"number:"+Uu(e):"string:"+e},ff=function(e){if(e.isLeafNode()){var t=e.val();w(typeof t=="string"||typeof t=="number"||typeof t=="object"&&De(t,".sv"),"Priority must be a string or number.")}else w(e===Ro||e.isEmpty(),"priority of unexpected type.");w(e===Ro||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ya,Rn=function(){function e(t,n){n===void 0&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ff(this.priorityNode_)}return Object.defineProperty(e,"__childrenNodeConstructor",{get:function(){return Ya},set:function(t){Ya=t},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!0},e.prototype.getPriority=function(){return this.priorityNode_},e.prototype.updatePriority=function(t){return new e(this.value_,t)},e.prototype.getImmediateChild=function(t){return t===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.getChild=function(t){return W(t)?this:B(t)===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.hasChild=function(){return!1},e.prototype.getPredecessorChildName=function(t,n){return null},e.prototype.updateImmediateChild=function(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)},e.prototype.updateChild=function(t,n){var r=B(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(w(r!==".priority"||Mt(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(t),n)))},e.prototype.isEmpty=function(){return!1},e.prototype.numChildren=function(){return 0},e.prototype.forEachChild=function(t,n){return!1},e.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+uf(this.priorityNode_.val())+":");var n=typeof this.value_;t+=n+":",n==="number"?t+=Uu(this.value_):t+=this.value_,this.lazyHash_=Fu(t)}return this.lazyHash_},e.prototype.getValue=function(){return this.value_},e.prototype.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(w(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},e.prototype.compareToLeafNode_=function(t){var n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),o=e.VALUE_TYPE_ORDER.indexOf(r);return w(i>=0,"Unknown leaf type: "+n),w(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i},e.prototype.withIndex=function(){return this},e.prototype.isIndexed=function(){return!0},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode()){var n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},e.VALUE_TYPE_ORDER=["object","boolean","number","string"],e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cf,hf;function Lv(e){cf=e}function Fv(e){hf=e}var Bv=function(e){oe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),s=i.compareTo(o);return s===0?fn(n.name,r.name):s},t.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},t.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},t.prototype.minPost=function(){return j.MIN},t.prototype.maxPost=function(){return new j(ct,new Rn("[PRIORITY-POST]",hf))},t.prototype.makePost=function(n,r){var i=cf(n);return new j(r,new Rn("[PRIORITY-POST]",i))},t.prototype.toString=function(){return".priority"},t}(Ii),ee=new Bv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wv=Math.log(2),Uv=function(){function e(t){var n=function(o){return parseInt(Math.log(o)/Wv,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(t+1),this.current_=this.count-1;var i=r(this.count);this.bits_=t+1&i}return e.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_);return this.current_--,t},e}(),Xr=function(e,t,n,r){e.sort(t);var i=function(l,u){var f=u-l,c,h;if(f===0)return null;if(f===1)return c=e[l],h=n?n(c):c,new Ke(h,c.node,Ke.BLACK,null,null);var p=parseInt(f/2,10)+l,_=i(l,p),m=i(p+1,u);return c=e[p],h=n?n(c):c,new Ke(h,c.node,Ke.BLACK,_,m)},o=function(l){for(var u=null,f=null,c=e.length,h=function(S,D){var N=c-S,K=c;c-=S;var le=i(N+1,K),tt=e[N],nt=n?n(tt):tt;p(new Ke(nt,tt.node,D,null,le))},p=function(S){u?(u.left=S,u=S):(f=S,u=S)},_=0;_<l.count;++_){var m=l.nextBitIsOne(),C=Math.pow(2,l.count-(_+1));m?h(C,Ke.BLACK):(h(C,Ke.BLACK),h(C,Ke.RED))}return f},s=new Uv(e.length),a=o(s);return new gt(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ro,vn={},Zr=function(){function e(t,n){this.indexes_=t,this.indexSet_=n}return Object.defineProperty(e,"Default",{get:function(){return w(vn&&ee,"ChildrenNode.ts has not been loaded"),ro=ro||new e({".priority":vn},{".priority":ee}),ro},enumerable:!1,configurable:!0}),e.prototype.get=function(t){var n=an(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof gt?n:null},e.prototype.hasIndex=function(t){return De(this.indexSet_,t.toString())},e.prototype.addIndex=function(t,n){w(t!==ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(j.Wrap),s=o.getNext();s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();var a;i?a=Xr(r,t.getCompare()):a=vn;var l=t.toString(),u=kt({},this.indexSet_);u[l]=t;var f=kt({},this.indexes_);return f[l]=a,new e(f,u)},e.prototype.addToIndexes=function(t,n){var r=this,i=Kr(this.indexes_,function(o,s){var a=an(r.indexSet_,s);if(w(a,"Missing index implementation for "+s),o===vn)if(a.isDefinedOn(t.node)){for(var l=[],u=n.getIterator(j.Wrap),f=u.getNext();f;)f.name!==t.name&&l.push(f),f=u.getNext();return l.push(t),Xr(l,a.getCompare())}else return vn;else{var c=n.get(t.name),h=o;return c&&(h=h.remove(new j(t.name,c))),h.insert(t,t.node)}});return new e(i,this.indexSet_)},e.prototype.removeFromIndexes=function(t,n){var r=Kr(this.indexes_,function(i){if(i===vn)return i;var o=n.get(t.name);return o?i.remove(new j(t.name,o)):i});return new e(r,this.indexSet_)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn,L=function(){function e(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ff(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(e,"EMPTY_NODE",{get:function(){return zn||(zn=new e(new gt(bs),null,Zr.Default))},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!1},e.prototype.getPriority=function(){return this.priorityNode_||zn},e.prototype.updatePriority=function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)},e.prototype.getImmediateChild=function(t){if(t===".priority")return this.getPriority();var n=this.children_.get(t);return n===null?zn:n},e.prototype.getChild=function(t){var n=B(t);return n===null?this:this.getImmediateChild(n).getChild(J(t))},e.prototype.hasChild=function(t){return this.children_.get(t)!==null},e.prototype.updateImmediateChild=function(t,n){if(w(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);var r=new j(t,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));var s=i.isEmpty()?zn:this.priorityNode_;return new e(i,s,o)},e.prototype.updateChild=function(t,n){var r=B(t);if(r===null)return n;w(B(t)!==".priority"||Mt(t)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(J(t),n);return this.updateImmediateChild(r,i)},e.prototype.isEmpty=function(){return this.children_.isEmpty()},e.prototype.numChildren=function(){return this.children_.count()},e.prototype.val=function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(ee,function(l,u){n[l]=u.val(t),r++,o&&e.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):o=!1}),!t&&o&&i<2*r){var s=[];for(var a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.getPriority().isEmpty()||(t+="priority:"+uf(this.getPriority().val())+":"),this.forEachChild(ee,function(n,r){var i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":Fu(t)}return this.lazyHash_},e.prototype.getPredecessorChildName=function(t,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new j(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)},e.prototype.getFirstChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},e.prototype.getFirstChild=function(t){var n=this.getFirstChildName(t);return n?new j(n,this.children_.get(n)):null},e.prototype.getLastChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},e.prototype.getLastChild=function(t){var n=this.getLastChildName(t);return n?new j(n,this.children_.get(n)):null},e.prototype.forEachChild=function(t,n){var r=this.resolveIndex_(t);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},e.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},e.prototype.getIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,function(s){return s});for(var i=this.children_.getIteratorFrom(t.name,j.Wrap),o=i.peek();o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i},e.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},e.prototype.getReverseIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,function(s){return s});for(var i=this.children_.getReverseIteratorFrom(t.name,j.Wrap),o=i.peek();o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i},e.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===mr?-1:0},e.prototype.withIndex=function(t){if(t===ut||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)},e.prototype.isIndexed=function(t){return t===ut||this.indexMap_.hasIndex(t)},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode())return!1;var n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(ee),i=n.getIterator(ee),o=r.getNext(),s=i.getNext();o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1},e.prototype.resolveIndex_=function(t){return t===ut?null:this.indexMap_.get(t.toString())},e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,e}(),Hv=function(e){oe(t,e);function t(){return e.call(this,new gt(bs),L.EMPTY_NODE,Zr.Default)||this}return t.prototype.compareTo=function(n){return n===this?0:1},t.prototype.equals=function(n){return n===this},t.prototype.getPriority=function(){return this},t.prototype.getImmediateChild=function(n){return L.EMPTY_NODE},t.prototype.isEmpty=function(){return!1},t}(L),mr=new Hv;Object.defineProperties(j,{MIN:{value:new j(bt,L.EMPTY_NODE)},MAX:{value:new j(ct,mr)}});lf.__EMPTY_NODE=L.EMPTY_NODE;Rn.__childrenNodeConstructor=L;Mv(mr);Fv(mr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vv=!0;function re(e,t){if(t===void 0&&(t=null),e===null)return L.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),w(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){var n=e;return new Rn(n,re(t))}if(!(e instanceof Array)&&Vv){var r=[],i=!1,o=e;if(pe(o,function(u,f){if(u.substring(0,1)!=="."){var c=re(f);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),r.push(new j(u,c)))}}),r.length===0)return L.EMPTY_NODE;var s=Xr(r,Dv,function(u){return u.name},bs);if(i){var a=Xr(r,ee.getCompare());return new L(s,re(t),new Zr({".priority":a},{".priority":ee}))}else return new L(s,re(t),Zr.Default)}else{var l=L.EMPTY_NODE;return pe(e,function(u,f){if(De(e,u)&&u.substring(0,1)!=="."){var c=re(f);(c.isLeafNode()||!c.isEmpty())&&(l=l.updateImmediateChild(u,c))}}),l.updatePriority(re(t))}}Lv(re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cs=function(e){oe(t,e);function t(n){var r=e.call(this)||this;return r.indexPath_=n,w(!W(n)&&B(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return t.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},t.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},t.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),s=i.compareTo(o);return s===0?fn(n.name,r.name):s},t.prototype.makePost=function(n,r){var i=re(n),o=L.EMPTY_NODE.updateChild(this.indexPath_,i);return new j(r,o)},t.prototype.maxPost=function(){var n=L.EMPTY_NODE.updateChild(this.indexPath_,mr);return new j(ct,n)},t.prototype.toString=function(){return ur(this.indexPath_,0).join("/")},t}(Ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jv=function(e){oe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?fn(n.name,r.name):i},t.prototype.isDefinedOn=function(n){return!0},t.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},t.prototype.minPost=function(){return j.MIN},t.prototype.maxPost=function(){return j.MAX},t.prototype.makePost=function(n,r){var i=re(n);return new j(r,i)},t.prototype.toString=function(){return".value"},t}(Ii),ws=new jv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ao="-",df="z",pf=786,zv=function(){var e=0,t=[];return function(n){var r=n===e;e=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=An.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");var s=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=An.charAt(t[i]);return w(s.length===20,"nextPushId: Length should be 20."),s}}(),qa=function(e){if(e===""+ps)return Ao;var t=qr(e);if(t!=null)return""+(t+1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);if(n.length<pf)return n.push(Ao),n.join("");for(var i=n.length-1;i>=0&&n[i]===df;)i--;if(i===-1)return ct;var o=n[i],s=An.charAt(An.indexOf(o)+1);return n[i]=s,n.slice(0,i+1).join("")},Ja=function(e){if(e===""+Hu)return bt;var t=qr(e);if(t!=null)return""+(t-1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===Ao?n.length===1?""+ps:(delete n[n.length-1],n.join("")):(n[n.length-1]=An.charAt(An.indexOf(n[n.length-1])-1),n.join("")+df.repeat(pf-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(e){return{type:"value",snapshotNode:e}}function Nn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function fr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function cr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Qv(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Is=function(){function e(t){this.index_=t}return e.prototype.updateChild=function(t,n,r,i,o,s){w(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(fr(n,a)):w(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Nn(n,r)):s.trackChildChange(cr(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)},e.prototype.updateFullNode=function(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(ee,function(i,o){n.hasChild(i)||r.trackChildChange(fr(i,o))}),n.isLeafNode()||n.forEachChild(ee,function(i,o){if(t.hasChild(i)){var s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(cr(i,o,s))}else r.trackChildChange(Nn(i,o))})),n.withIndex(this.index_)},e.prototype.updatePriority=function(t,n){return t.isEmpty()?L.EMPTY_NODE:t.updatePriority(n)},e.prototype.filtersNodes=function(){return!1},e.prototype.getIndexedFilter=function(){return this},e.prototype.getIndex=function(){return this.index_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _f=function(){function e(t){this.indexedFilter_=new Is(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t)}return e.prototype.getStartPost=function(){return this.startPost_},e.prototype.getEndPost=function(){return this.endPost_},e.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},e.prototype.updateChild=function(t,n,r,i,o,s){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)},e.prototype.updateFullNode=function(t,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);var o=this;return n.forEachChild(ee,function(s,a){o.matches(new j(s,a))||(i=i.updateImmediateChild(s,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.indexedFilter_},e.prototype.getIndex=function(){return this.index_},e.getStartPost_=function(t){if(t.hasStart()){var n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()},e.getEndPost_=function(t){if(t.hasEnd()){var n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gv=function(){function e(t){this.rangedFilter_=new _f(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return e.prototype.updateChild=function(t,n,r,i,o,s){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)},e.prototype.updateFullNode=function(t,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var s=0;o.hasNext()&&s<this.limit_;){var a=o.getNext(),l=void 0;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);var u=void 0,f=void 0,c=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),u=this.rangedFilter_.getEndPost(),f=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();c=function(C,S){return h(S,C)}}else o=i.getIterator(this.index_),u=this.rangedFilter_.getStartPost(),f=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();for(var s=0,p=!1;o.hasNext();){var a=o.getNext();!p&&c(u,a)<=0&&(p=!0);var l=p&&s<this.limit_&&c(a,f)<=0;l?s++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},e.prototype.getIndex=function(){return this.index_},e.prototype.fullLimitUpdateChild_=function(t,n,r,i,o){var s;if(this.reverse_){var a=this.index_.getCompare();s=function(D,N){return a(N,D)}}else s=this.index_.getCompare();var l=t;w(l.numChildren()===this.limit_,"");var u=new j(n,r),f=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(u);if(l.hasChild(n)){for(var h=l.getImmediateChild(n),p=i.getChildAfterChild(this.index_,f,this.reverse_);p!=null&&(p.name===n||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);var _=p==null?1:s(p,u),m=c&&!r.isEmpty()&&_>=0;if(m)return o!=null&&o.trackChildChange(cr(n,r,h)),l.updateImmediateChild(n,r);o!=null&&o.trackChildChange(fr(n,h));var C=l.updateImmediateChild(n,L.EMPTY_NODE),S=p!=null&&this.rangedFilter_.matches(p);return S?(o!=null&&o.trackChildChange(Nn(p.name,p.node)),C.updateImmediateChild(p.name,p.node)):C}else return r.isEmpty()?t:c&&s(f,u)>=0?(o!=null&&(o.trackChildChange(fr(f.name,f.node)),o.trackChildChange(Nn(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(f.name,L.EMPTY_NODE)):t},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gf=function(){function e(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}return e.prototype.hasStart=function(){return this.startSet_},e.prototype.hasStartAfter=function(){return this.startAfterSet_},e.prototype.hasEndBefore=function(){return this.endBeforeSet_},e.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},e.prototype.getIndexStartValue=function(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},e.prototype.getIndexStartName=function(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bt},e.prototype.hasEnd=function(){return this.endSet_},e.prototype.getIndexEndValue=function(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},e.prototype.getIndexEndName=function(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ct},e.prototype.hasLimit=function(){return this.limitSet_},e.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},e.prototype.getLimit=function(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_},e.prototype.getIndex=function(){return this.index_},e.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},e.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===ee},e.prototype.copy=function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},e}();function $v(e){return e.loadsAllData()?new Is(e.getIndex()):e.hasLimit()?new Gv(e):new _f(e)}function Kv(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Yv(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function No(e,t,n){var r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function qv(e,t,n){var r;if(e.index_===ut)typeof t=="string"&&(t=qa(t)),r=No(e,t,n);else{var i=void 0;n==null?i=ct:i=qa(n),r=No(e,t,i)}return r.startAfterSet_=!0,r}function xo(e,t,n){var r=e.copy();return r.endSet_=!0,t===void 0&&(t=null),r.indexEndValue_=t,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Jv(e,t,n){var r,i;return e.index_===ut?(typeof t=="string"&&(t=Ja(t)),i=xo(e,t,n)):(n==null?r=bt:r=Ja(n),i=xo(e,t,r)),i.endBeforeSet_=!0,i}function Ti(e,t){var n=e.copy();return n.index_=t,n}function Xa(e){var t={};if(e.isDefault())return t;var n;return e.index_===ee?n="$priority":e.index_===ws?n="$value":e.index_===ut?n="$key":(w(e.index_ instanceof Cs,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=he(n),e.startSet_&&(t.startAt=he(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+he(e.indexStartName_))),e.endSet_&&(t.endAt=he(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+he(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Za(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ee&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xv=function(e){oe(t,e);function t(n,r,i,o){var s=e.call(this)||this;return s.repoInfo_=n,s.onDataUpdate_=r,s.authTokenProvider_=i,s.appCheckTokenProvider_=o,s.log_=gr("p:rest:"),s.listens_={},s}return t.prototype.reportStats=function(n){throw new Error("Method not implemented.")},t.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(w(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},t.prototype.listen=function(n,r,i,o){var s=this,a=n._path.toString();this.log_("Listen called for "+a+" "+n._queryIdentifier);var l=t.getListenId_(n,i),u={};this.listens_[l]=u;var f=Xa(n._queryParams);this.restRequest_(a+".json",f,function(c,h){var p=h;if(c===404&&(p=null,c=null),c===null&&s.onDataUpdate_(a,p,!1,i),an(s.listens_,l)===u){var _;c?c===401?_="permission_denied":_="rest_error:"+c:_="ok",o(_,null)}})},t.prototype.unlisten=function(n,r){var i=t.getListenId_(n,r);delete this.listens_[i]},t.prototype.get=function(n){var r=this,i=Xa(n._queryParams),o=n._path.toString(),s=new Ae;return this.restRequest_(o+".json",i,function(a,l){var u=l;a===404&&(u=null,a=null),a===null?(r.onDataUpdate_(o,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise},t.prototype.refreshAuthToken=function(n){},t.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(s){var a=Te(s,2),l=a[0],u=a[1];l&&l.accessToken&&(r.auth=l.accessToken),u&&u.token&&(r.ac=u.token);var f=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+ep(r);o.log_("Sending REST request for "+f);var c=new XMLHttpRequest;c.onreadystatechange=function(){if(i&&c.readyState===4){o.log_("REST Response for "+f+" received. status:",c.status,"response:",c.responseText);var h=null;if(c.status>=200&&c.status<300){try{h=lr(c.responseText)}catch{me("Failed to parse JSON response for "+f+": "+c.responseText)}i(null,h)}else c.status!==401&&c.status!==404&&me("Got unsuccessful REST response for "+f+" Status: "+c.status),i(c.status);i=null}},c.open("GET",f,!0),c.send()})},t}(rf);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zv=function(){function e(){this.rootNode_=L.EMPTY_NODE}return e.prototype.getNode=function(t){return this.rootNode_.getChild(t)},e.prototype.updateSnapshot=function(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return{value:null,children:new Map}}function Fn(e,t,n){if(W(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{var r=B(t);e.children.has(r)||e.children.set(r,ei());var i=e.children.get(r);t=J(t),Fn(i,t,n)}}function Oo(e,t){if(W(t))return e.value=null,e.children.clear(),!0;if(e.value!==null){if(e.value.isLeafNode())return!1;var n=e.value;return e.value=null,n.forEachChild(ee,function(o,s){Fn(e,new $(o),s)}),Oo(e,t)}else if(e.children.size>0){var r=B(t);if(t=J(t),e.children.has(r)){var i=Oo(e.children.get(r),t);i&&e.children.delete(r)}return e.children.size===0}else return!0}function Po(e,t,n){e.value!==null?n(t,e.value):e_(e,function(r,i){var o=new $(t.toString()+"/"+r);Po(i,o,n)})}function e_(e,t){e.children.forEach(function(n,r){t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mf=function(){function e(t){this.collection_=t,this.last_=null}return e.prototype.get=function(){var t=this.collection_.get(),n=kt({},t);return this.last_&&pe(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=t,n},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var el=10*1e3,t_=30*1e3,n_=5*60*1e3,r_=function(){function e(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mf(t);var r=el+(t_-el)*Math.random();Yn(this.reportStats_.bind(this),Math.floor(r))}return e.prototype.reportStats_=function(){var t=this,n=this.statsListener_.get(),r={},i=!1;pe(n,function(o,s){s>0&&De(t.statsToReport_,o)&&(r[o]=s,i=!0)}),i&&this.server_.reportStats(r),Yn(this.reportStats_.bind(this),Math.floor(Math.random()*2*n_))},e}();function i_(e,t){e.statsToReport_[t]=!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Ts(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ss(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rs(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o_=function(){function e(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Xe.ACK_USER_WRITE,this.source=Ts()}return e.prototype.operationForChild=function(t){if(W(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new $(t));return new e(Q(),n,this.revert)}else return w(B(this.path)===t,"operationForChild called for unrelated child."),new e(J(this.path),this.affectedTree,this.revert)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yf=function(){function e(t,n){this.source=t,this.path=n,this.type=Xe.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return W(this.path)?new e(this.source,Q()):new e(this.source,J(this.path))},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si=function(){function e(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Xe.OVERWRITE}return e.prototype.operationForChild=function(t){return W(this.path)?new e(this.source,Q(),this.snap.getImmediateChild(t)):new e(this.source,J(this.path),this.snap)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var As=function(){function e(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Xe.MERGE}return e.prototype.operationForChild=function(t){if(W(this.path)){var n=this.children.subtree(new $(t));return n.isEmpty()?null:n.value?new Si(this.source,Q(),n.value):new e(this.source,Q(),n)}else return w(B(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,J(this.path),this.children)},e.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt=function(){function e(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}return e.prototype.isFullyInitialized=function(){return this.fullyInitialized_},e.prototype.isFiltered=function(){return this.filtered_},e.prototype.isCompleteForPath=function(t){if(W(t))return this.isFullyInitialized()&&!this.filtered_;var n=B(t);return this.isCompleteForChild(n)},e.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},e.prototype.getNode=function(){return this.node_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s_=function(){function e(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}return e}();function a_(e,t,n,r){var i=[],o=[];return t.forEach(function(s){s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(Qv(s.childName,s.snapshotNode))}),Qn(e,i,"child_removed",t,r,n),Qn(e,i,"child_added",t,r,n),Qn(e,i,"child_moved",o,r,n),Qn(e,i,"child_changed",t,r,n),Qn(e,i,"value",t,r,n),i}function Qn(e,t,n,r,i,o){var s=r.filter(function(a){return a.type===n});s.sort(function(a,l){return u_(e,a,l)}),s.forEach(function(a){var l=l_(e,a,o);i.forEach(function(u){u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function l_(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function u_(e,t,n){if(t.childName==null||n.childName==null)throw Mn("Should only compare child_ events.");var r=new j(t.childName,t.snapshotNode),i=new j(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e,t){return{eventCache:e,serverCache:t}}function Jn(e,t,n,r){return Ri(new Lt(t,n,r),e.serverCache)}function Ef(e,t,n,r){return Ri(e.eventCache,new Lt(t,n,r))}function ti(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ln(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io,f_=function(){return io||(io=new gt(Hp)),io},Me=function(){function e(t,n){n===void 0&&(n=f_()),this.value=t,this.children=n}return e.fromObject=function(t){var n=new e(null);return pe(t,function(r,i){n=n.set(new $(r),i)}),n},e.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},e.prototype.findRootMostMatchingPathAndValue=function(t,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(W(t))return null;var r=B(t),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(J(t),n);if(o!=null){var s=ne(new $(r),o.path);return{path:s,value:o.value}}else return null}else return null},e.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},e.prototype.subtree=function(t){if(W(t))return this;var n=B(t),r=this.children.get(n);return r!==null?r.subtree(J(t)):new e(null)},e.prototype.set=function(t,n){if(W(t))return new e(n,this.children);var r=B(t),i=this.children.get(r)||new e(null),o=i.set(J(t),n),s=this.children.insert(r,o);return new e(this.value,s)},e.prototype.remove=function(t){if(W(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=B(t),r=this.children.get(n);if(r){var i=r.remove(J(t)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new e(null):new e(this.value,o)}else return this},e.prototype.get=function(t){if(W(t))return this.value;var n=B(t),r=this.children.get(n);return r?r.get(J(t)):null},e.prototype.setTree=function(t,n){if(W(t))return n;var r=B(t),i=this.children.get(r)||new e(null),o=i.setTree(J(t),n),s=void 0;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new e(this.value,s)},e.prototype.fold=function(t){return this.fold_(Q(),t)},e.prototype.fold_=function(t,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(ne(t,i),n)}),n(t,this.value,r)},e.prototype.findOnPath=function(t,n){return this.findOnPath_(t,Q(),n)},e.prototype.findOnPath_=function(t,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(W(t))return null;var o=B(t),s=this.children.get(o);return s?s.findOnPath_(J(t),ne(n,o),r):null},e.prototype.foreachOnPath=function(t,n){return this.foreachOnPath_(t,Q(),n)},e.prototype.foreachOnPath_=function(t,n,r){if(W(t))return this;this.value&&r(n,this.value);var i=B(t),o=this.children.get(i);return o?o.foreachOnPath_(J(t),ne(n,i),r):new e(null)},e.prototype.foreach=function(t){this.foreach_(Q(),t)},e.prototype.foreach_=function(t,n){this.children.inorderTraversal(function(r,i){i.foreach_(ne(t,r),n)}),this.value&&n(t,this.value)},e.prototype.foreachChild=function(t){this.children.inorderTraversal(function(n,r){r.value&&t(n,r.value)})},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(){function e(t){this.writeTree_=t}return e.empty=function(){return new e(new Me(null))},e}();function Xn(e,t,n){if(W(t))return new yt(new Me(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){var i=r.path,o=r.value,s=Se(i,t);return o=o.updateChild(s,n),new yt(e.writeTree_.set(i,o))}else{var a=new Me(n),l=e.writeTree_.setTree(t,a);return new yt(l)}}function ko(e,t,n){var r=e;return pe(n,function(i,o){r=Xn(r,ne(t,i),o)}),r}function tl(e,t){if(W(t))return yt.empty();var n=e.writeTree_.setTree(t,new Me(null));return new yt(n)}function Do(e,t){return cn(e,t)!=null}function cn(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Se(n.path,t)):null}function nl(e){var t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,function(r,i){t.push(new j(r,i))}):e.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&t.push(new j(r,i.value))}),t}function Nt(e,t){if(W(t))return e;var n=cn(e,t);return n!=null?new yt(new Me(n)):new yt(e.writeTree_.subtree(t))}function Mo(e){return e.writeTree_.isEmpty()}function xn(e,t){return bf(Q(),e.writeTree_,t)}function bf(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal(function(i,o){i===".priority"?(w(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=bf(ne(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(ne(e,".priority"),r)),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t){return Tf(t,e)}function c_(e,t,n,r,i){w(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Xn(e.visibleWrites,t,n)),e.lastWriteId=r}function h_(e,t,n,r){w(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=ko(e.visibleWrites,t,n),e.lastWriteId=r}function d_(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function p_(e,t){var n=e.allWrites.findIndex(function(u){return u.writeId===t});w(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,s=e.allWrites.length-1;i&&s>=0;){var a=e.allWrites[s];a.visible&&(s>=n&&v_(a,r.path)?i=!1:We(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return __(e),!0;if(r.snap)e.visibleWrites=tl(e.visibleWrites,r.path);else{var l=r.children;pe(l,function(u){e.visibleWrites=tl(e.visibleWrites,ne(r.path,u))})}return!0}else return!1}function v_(e,t){if(e.snap)return We(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&We(ne(e.path,n),t))return!0;return!1}function __(e){e.visibleWrites=Cf(e.allWrites,g_,Q()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function g_(e){return e.visible}function Cf(e,t,n){for(var r=yt.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var s=o.path,a=void 0;if(o.snap)We(n,s)?(a=Se(n,s),r=Xn(r,a,o.snap)):We(s,n)&&(a=Se(s,n),r=Xn(r,Q(),o.snap.getChild(a)));else if(o.children){if(We(n,s))a=Se(n,s),r=ko(r,a,o.children);else if(We(s,n))if(a=Se(s,n),W(a))r=ko(r,Q(),o.children);else{var l=an(o.children,B(a));if(l){var u=l.getChild(J(a));r=Xn(r,Q(),u)}}}else throw Mn("WriteRecord should have .snap or .children")}}return r}function wf(e,t,n,r,i){if(!r&&!i){var o=cn(e.visibleWrites,t);if(o!=null)return o;var s=Nt(e.visibleWrites,t);if(Mo(s))return n;if(n==null&&!Do(s,Q()))return null;var a=n||L.EMPTY_NODE;return xn(s,a)}else{var l=Nt(e.visibleWrites,t);if(!i&&Mo(l))return n;if(!i&&n==null&&!Do(l,Q()))return null;var u=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(We(h.path,t)||We(t,h.path))},f=Cf(e.allWrites,u,t),a=n||L.EMPTY_NODE;return xn(f,a)}}function m_(e,t,n){var r=L.EMPTY_NODE,i=cn(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ee,function(a,l){r=r.updateImmediateChild(a,l)}),r;if(n){var o=Nt(e.visibleWrites,t);return n.forEachChild(ee,function(a,l){var u=xn(Nt(o,new $(a)),l);r=r.updateImmediateChild(a,u)}),nl(o).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}else{var s=Nt(e.visibleWrites,t);return nl(s).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}}function y_(e,t,n,r,i){w(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=ne(t,n);if(Do(e.visibleWrites,o))return null;var s=Nt(e.visibleWrites,o);return Mo(s)?i.getChild(n):xn(s,i.getChild(n))}function E_(e,t,n,r){var i=ne(t,n),o=cn(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var s=Nt(e.visibleWrites,i);return xn(s,r.getNode().getImmediateChild(n))}else return null}function b_(e,t){return cn(e.visibleWrites,t)}function C_(e,t,n,r,i,o,s){var a,l=Nt(e.visibleWrites,t),u=cn(l,Q());if(u!=null)a=u;else if(n!=null)a=xn(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){for(var f=[],c=s.getCompare(),h=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s),p=h.getNext();p&&f.length<i;)c(p,r)!==0&&f.push(p),p=h.getNext();return f}else return[]}function w_(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function ni(e,t,n,r){return wf(e.writeTree,e.treePath,t,n,r)}function Ns(e,t){return m_(e.writeTree,e.treePath,t)}function rl(e,t,n,r){return y_(e.writeTree,e.treePath,t,n,r)}function ri(e,t){return b_(e.writeTree,ne(e.treePath,t))}function I_(e,t,n,r,i,o){return C_(e.writeTree,e.treePath,t,n,r,i,o)}function xs(e,t,n){return E_(e.writeTree,e.treePath,t,n)}function If(e,t){return Tf(ne(e.treePath,t),e.writeTree)}function Tf(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T_=function(){function e(){this.changeMap=new Map}return e.prototype.trackChildChange=function(t){var n=t.type,r=t.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,cr(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,fr(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,Nn(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,cr(r,t.snapshotNode,i.oldSnap));else throw Mn("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)},e.prototype.getChanges=function(){return Array.from(this.changeMap.values())},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S_=function(){function e(){}return e.prototype.getCompleteChild=function(t){return null},e.prototype.getChildAfterChild=function(t,n,r){return null},e}(),Sf=new S_,Os=function(){function e(t,n,r){r===void 0&&(r=null),this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}return e.prototype.getCompleteChild=function(t){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);var r=this.optCompleteServerCache_!=null?new Lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xs(this.writes_,t,r)},e.prototype.getChildAfterChild=function(t,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ln(this.viewCache_),o=I_(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){return{filter:e}}function A_(e,t){w(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),w(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function N_(e,t,n,r,i){var o=new T_,s,a;if(n.type===Xe.OVERWRITE){var l=n;l.source.fromUser?s=Lo(e,t,l.path,l.snap,r,i,o):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!W(l.path),s=ii(e,t,l.path,l.snap,r,i,a,o))}else if(n.type===Xe.MERGE){var u=n;u.source.fromUser?s=O_(e,t,u.path,u.children,r,i,o):(w(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=Fo(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Xe.ACK_USER_WRITE){var f=n;f.revert?s=D_(e,t,f.path,r,i,o):s=P_(e,t,f.path,f.affectedTree,r,i,o)}else if(n.type===Xe.LISTEN_COMPLETE)s=k_(e,t,n.path,r,o);else throw Mn("Unknown operation type: "+n.type);var c=o.getChanges();return x_(t,s,c),{viewCache:s,changes:c}}function x_(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=ti(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(vf(ti(t)))}}function Rf(e,t,n,r,i,o){var s=t.eventCache;if(ri(r,n)!=null)return t;var a=void 0,l=void 0;if(W(n))if(w(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var u=ln(t),f=u instanceof L?u:L.EMPTY_NODE,c=Ns(r,f);a=e.filter.updateFullNode(t.eventCache.getNode(),c,o)}else{var h=ni(r,ln(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var p=B(n);if(p===".priority"){w(Mt(n)===1,"Can't have a priority with additional path components");var _=s.getNode();l=t.serverCache.getNode();var m=rl(r,n,_,l);m!=null?a=e.filter.updatePriority(_,m):a=s.getNode()}else{var C=J(n),S=void 0;if(s.isCompleteForChild(p)){l=t.serverCache.getNode();var D=rl(r,n,s.getNode(),l);D!=null?S=s.getNode().getImmediateChild(p).updateChild(C,D):S=s.getNode().getImmediateChild(p)}else S=xs(r,p,t.serverCache);S!=null?a=e.filter.updateChild(s.getNode(),p,S,C,i,o):a=s.getNode()}}return Jn(t,a,s.isFullyInitialized()||W(n),e.filter.filtersNodes())}function ii(e,t,n,r,i,o,s,a){var l=t.serverCache,u,f=s?e.filter:e.filter.getIndexedFilter();if(W(n))u=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){var c=l.getNode().updateChild(n,r);u=f.updateFullNode(l.getNode(),c,null)}else{var h=B(n);if(!l.isCompleteForPath(n)&&Mt(n)>1)return t;var p=J(n),_=l.getNode().getImmediateChild(h),m=_.updateChild(p,r);h===".priority"?u=f.updatePriority(l.getNode(),m):u=f.updateChild(l.getNode(),h,m,p,Sf,null)}var C=Ef(t,u,l.isFullyInitialized()||W(n),f.filtersNodes()),S=new Os(i,C,o);return Rf(e,C,n,i,S,a)}function Lo(e,t,n,r,i,o,s){var a=t.eventCache,l,u,f=new Os(i,t,o);if(W(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Jn(t,u,!0,e.filter.filtersNodes());else{var c=B(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Jn(t,u,a.isFullyInitialized(),a.isFiltered());else{var h=J(n),p=a.getNode().getImmediateChild(c),_=void 0;if(W(h))_=r;else{var m=f.getCompleteChild(c);m!=null?ys(h)===".priority"&&m.getChild(sf(h)).isEmpty()?_=m:_=m.updateChild(h,r):_=L.EMPTY_NODE}if(p.equals(_))l=t;else{var C=e.filter.updateChild(a.getNode(),c,_,h,f,s);l=Jn(t,C,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function il(e,t){return e.eventCache.isCompleteForChild(t)}function O_(e,t,n,r,i,o,s){var a=t;return r.foreach(function(l,u){var f=ne(n,l);il(t,B(f))&&(a=Lo(e,a,f,u,i,o,s))}),r.foreach(function(l,u){var f=ne(n,l);il(t,B(f))||(a=Lo(e,a,f,u,i,o,s))}),a}function ol(e,t,n){return n.foreach(function(r,i){t=t.updateChild(r,i)}),t}function Fo(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var l=t,u;W(n)?u=r:u=new Me(null).setTree(n,r);var f=t.serverCache.getNode();return u.children.inorderTraversal(function(c,h){if(f.hasChild(c)){var p=t.serverCache.getNode().getImmediateChild(c),_=ol(e,p,h);l=ii(e,l,new $(c),_,i,o,s,a)}}),u.children.inorderTraversal(function(c,h){var p=!t.serverCache.isCompleteForChild(c)&&h.value===void 0;if(!f.hasChild(c)&&!p){var _=t.serverCache.getNode().getImmediateChild(c),m=ol(e,_,h);l=ii(e,l,new $(c),m,i,o,s,a)}}),l}function P_(e,t,n,r,i,o,s){if(ri(i,n)!=null)return t;var a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ii(e,t,n,l.getNode().getChild(n),i,o,a,s);if(W(n)){var u=new Me(null);return l.getNode().forEachChild(ut,function(c,h){u=u.set(new $(c),h)}),Fo(e,t,n,u,i,o,a,s)}else return t}else{var f=new Me(null);return r.foreach(function(c,h){var p=ne(n,c);l.isCompleteForPath(p)&&(f=f.set(c,l.getNode().getChild(p)))}),Fo(e,t,n,f,i,o,a,s)}}function k_(e,t,n,r,i){var o=t.serverCache,s=Ef(t,o.getNode(),o.isFullyInitialized()||W(n),o.isFiltered());return Rf(e,s,n,r,Sf,i)}function D_(e,t,n,r,i,o){var s;if(ri(r,n)!=null)return t;var a=new Os(r,t,i),l=t.eventCache.getNode(),u=void 0;if(W(n)||B(n)===".priority"){var f=void 0;if(t.serverCache.isFullyInitialized())f=ni(r,ln(t));else{var c=t.serverCache.getNode();w(c instanceof L,"serverChildren would be complete if leaf node"),f=Ns(r,c)}f=f,u=e.filter.updateFullNode(l,f,o)}else{var h=B(n),p=xs(r,h,t.serverCache);p==null&&t.serverCache.isCompleteForChild(h)&&(p=l.getImmediateChild(h)),p!=null?u=e.filter.updateChild(l,h,p,J(n),a,o):t.eventCache.getNode().hasChild(h)?u=e.filter.updateChild(l,h,L.EMPTY_NODE,J(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=ni(r,ln(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||ri(r,Q())!=null,Jn(t,u,s,e.filter.filtersNodes())}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M_=function(){function e(t,n){this.query_=t,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new Is(r.getIndex()),o=$v(r);this.processor_=R_(o);var s=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(L.EMPTY_NODE,a.getNode(),null),f=new Lt(l,s.isFullyInitialized(),i.filtersNodes()),c=new Lt(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Ri(c,f),this.eventGenerator_=new s_(this.query_)}return Object.defineProperty(e.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),e}();function L_(e){return e.viewCache_.serverCache.getNode()}function F_(e){return ti(e.viewCache_)}function B_(e,t){var n=ln(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!W(t)&&!n.getImmediateChild(B(t)).isEmpty())?n.getChild(t):null}function sl(e){return e.eventRegistrations_.length===0}function W_(e,t){e.eventRegistrations_.push(t)}function al(e,t,n){var r=[];if(n){w(t==null,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach(function(l){var u=l.createCancelEvent(n,i);u&&r.push(u)})}if(t){for(var o=[],s=0;s<e.eventRegistrations_.length;++s){var a=e.eventRegistrations_[s];if(!a.matches(t))o.push(a);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function ll(e,t,n,r){t.type===Xe.MERGE&&t.source.queryId!==null&&(w(ln(e.viewCache_),"We should always have a full cache before handling merges"),w(ti(e.viewCache_),"Missing event cache, even though we have a server cache"));var i=e.viewCache_,o=N_(e.processor_,i,t,n,r);return A_(e.processor_,o.viewCache),w(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Af(e,o.changes,o.viewCache.eventCache.getNode(),null)}function U_(e,t){var n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(ee,function(o,s){r.push(Nn(o,s))})}return n.isFullyInitialized()&&r.push(vf(n.getNode())),Af(e,r,n.getNode(),t)}function Af(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return a_(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oi,Nf=function(){function e(){this.views=new Map}return e}();function H_(e){w(!oi,"__referenceConstructor has already been defined"),oi=e}function V_(){return w(oi,"Reference.ts has not been loaded"),oi}function j_(e){return e.views.size===0}function Ps(e,t,n,r){var i,o,s=t.source.queryId;if(s!==null){var a=e.views.get(s);return w(a!=null,"SyncTree gave us an op for an invalid query."),ll(a,t,n,r)}else{var l=[];try{for(var u=ke(e.views.values()),f=u.next();!f.done;f=u.next()){var a=f.value;l=l.concat(ll(a,t,n,r))}}catch(c){i={error:c}}finally{try{f&&!f.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}return l}}function xf(e,t,n,r,i){var o=t._queryIdentifier,s=e.views.get(o);if(!s){var a=ni(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=Ns(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);var u=Ri(new Lt(a,l,!1),new Lt(r,i,!1));return new M_(t,u)}return s}function z_(e,t,n,r,i,o){var s=xf(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),W_(s,n),U_(s,n)}function Q_(e,t,n,r){var i,o,s=t._queryIdentifier,a=[],l=[],u=Ft(e);if(s==="default")try{for(var f=ke(e.views.entries()),c=f.next();!c.done;c=f.next()){var h=Te(c.value,2),p=h[0],_=h[1];l=l.concat(al(_,n,r)),sl(_)&&(e.views.delete(p),_.query._queryParams.loadsAllData()||a.push(_.query))}}catch(m){i={error:m}}finally{try{c&&!c.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}else{var _=e.views.get(s);_&&(l=l.concat(al(_,n,r)),sl(_)&&(e.views.delete(s),_.query._queryParams.loadsAllData()||a.push(_.query)))}return u&&!Ft(e)&&a.push(new(V_())(t._repo,t._path)),{removed:a,events:l}}function Of(e){var t,n,r=[];try{for(var i=ke(e.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;s.query._queryParams.loadsAllData()||r.push(s)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}function xt(e,t){var n,r,i=null;try{for(var o=ke(e.views.values()),s=o.next();!s.done;s=o.next()){var a=s.value;i=i||B_(a,t)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function Pf(e,t){var n=t._queryParams;if(n.loadsAllData())return Ni(e);var r=t._queryIdentifier;return e.views.get(r)}function kf(e,t){return Pf(e,t)!=null}function Ft(e){return Ni(e)!=null}function Ni(e){var t,n;try{for(var r=ke(e.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var si;function G_(e){w(!si,"__referenceConstructor has already been defined"),si=e}function $_(){return w(si,"Reference.ts has not been loaded"),si}var K_=1,ul=function(){function e(t){this.listenProvider_=t,this.syncPointTree_=new Me(null),this.pendingWriteTree_=w_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return e}();function ks(e,t,n,r,i){return c_(e.pendingWriteTree_,t,n,r,i),i?Bn(e,new Si(Ts(),t,n)):[]}function Y_(e,t,n,r){h_(e.pendingWriteTree_,t,n,r);var i=Me.fromObject(n);return Bn(e,new As(Ts(),t,i))}function St(e,t,n){n===void 0&&(n=!1);var r=d_(e.pendingWriteTree_,t),i=p_(e.pendingWriteTree_,t);if(i){var o=new Me(null);return r.snap!=null?o=o.set(Q(),!0):pe(r.children,function(s){o=o.set(new $(s),!0)}),Bn(e,new o_(r.path,o,n))}else return[]}function yr(e,t,n){return Bn(e,new Si(Ss(),t,n))}function q_(e,t,n){var r=Me.fromObject(n);return Bn(e,new As(Ss(),t,r))}function J_(e,t){return Bn(e,new yf(Ss(),t))}function X_(e,t,n){var r=Ds(e,n);if(r){var i=Ms(r),o=i.path,s=i.queryId,a=Se(o,t),l=new yf(Rs(s),a);return Ls(e,o,l)}else return[]}function Bo(e,t,n,r){var i=t._path,o=e.syncPointTree_.get(i),s=[];if(o&&(t._queryIdentifier==="default"||kf(o,t))){var a=Q_(o,t,n,r);j_(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));var l=a.removed;s=a.events;var u=l.findIndex(function(D){return D._queryParams.loadsAllData()})!==-1,f=e.syncPointTree_.findOnPath(i,function(D,N){return Ft(N)});if(u&&!f){var c=e.syncPointTree_.subtree(i);if(!c.isEmpty())for(var h=ng(c),p=0;p<h.length;++p){var _=h[p],m=_.query,C=Lf(e,_);e.listenProvider_.startListening(Zn(m),ai(e,m),C.hashFn,C.onComplete)}}if(!f&&l.length>0&&!r)if(u){var S=null;e.listenProvider_.stopListening(Zn(t),S)}else l.forEach(function(D){var N=e.queryToTagMap.get(Oi(D));e.listenProvider_.stopListening(Zn(D),N)});rg(e,l)}return s}function Z_(e,t,n,r){var i=Ds(e,r);if(i!=null){var o=Ms(i),s=o.path,a=o.queryId,l=Se(s,t),u=new Si(Rs(a),l,n);return Ls(e,s,u)}else return[]}function eg(e,t,n,r){var i=Ds(e,r);if(i){var o=Ms(i),s=o.path,a=o.queryId,l=Se(s,t),u=Me.fromObject(n),f=new As(Rs(a),l,u);return Ls(e,s,f)}else return[]}function fl(e,t,n){var r=t._path,i=null,o=!1;e.syncPointTree_.foreachOnPath(r,function(m,C){var S=Se(m,r);i=i||xt(C,S),o=o||Ft(C)});var s=e.syncPointTree_.get(r);s?(o=o||Ft(s),i=i||xt(s,Q())):(s=new Nf,e.syncPointTree_=e.syncPointTree_.set(r,s));var a;if(i!=null)a=!0;else{a=!1,i=L.EMPTY_NODE;var l=e.syncPointTree_.subtree(r);l.foreachChild(function(m,C){var S=xt(C,Q());S&&(i=i.updateImmediateChild(m,S))})}var u=kf(s,t);if(!u&&!t._queryParams.loadsAllData()){var f=Oi(t);w(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");var c=ig();e.queryToTagMap.set(f,c),e.tagToQueryMap.set(c,f)}var h=Ai(e.pendingWriteTree_,r),p=z_(s,t,n,h,i,a);if(!u&&!o){var _=Pf(s,t);p=p.concat(og(e,t,_))}return p}function xi(e,t,n){var r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,function(s,a){var l=Se(s,t),u=xt(a,l);if(u)return u});return wf(i,t,o,n,r)}function tg(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,function(u,f){var c=Se(u,n);r=r||xt(f,c)});var i=e.syncPointTree_.get(n);i?r=r||xt(i,Q()):(i=new Nf,e.syncPointTree_=e.syncPointTree_.set(n,i));var o=r!=null,s=o?new Lt(r,!0,!1):null,a=Ai(e.pendingWriteTree_,t._path),l=xf(i,t,a,o?s.getNode():L.EMPTY_NODE,o);return F_(l)}function Bn(e,t){return Df(t,e.syncPointTree_,null,Ai(e.pendingWriteTree_,Q()))}function Df(e,t,n,r){if(W(e.path))return Mf(e,t,n,r);var i=t.get(Q());n==null&&i!=null&&(n=xt(i,Q()));var o=[],s=B(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){var u=n?n.getImmediateChild(s):null,f=If(r,s);o=o.concat(Df(a,l,u,f))}return i&&(o=o.concat(Ps(i,e,r,n))),o}function Mf(e,t,n,r){var i=t.get(Q());n==null&&i!=null&&(n=xt(i,Q()));var o=[];return t.children.inorderTraversal(function(s,a){var l=n?n.getImmediateChild(s):null,u=If(r,s),f=e.operationForChild(s);f&&(o=o.concat(Mf(f,a,l,u)))}),i&&(o=o.concat(Ps(i,e,r,n))),o}function Lf(e,t){var n=t.query,r=ai(e,n);return{hashFn:function(){var i=L_(t)||L.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?X_(e,n._path,r):J_(e,n._path);var o=zp(i,n);return Bo(e,n,null,o)}}}function ai(e,t){var n=Oi(t);return e.queryToTagMap.get(n)}function Oi(e){return e._path.toString()+"$"+e._queryIdentifier}function Ds(e,t){return e.tagToQueryMap.get(t)}function Ms(e){var t=e.indexOf("$");return w(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $(e.substr(0,t))}}function Ls(e,t,n){var r=e.syncPointTree_.get(t);w(r,"Missing sync point for query tag that we're tracking");var i=Ai(e.pendingWriteTree_,t);return Ps(r,n,i,null)}function ng(e){return e.fold(function(t,n,r){if(n&&Ft(n)){var i=Ni(n);return[i]}else{var o=[];return n&&(o=Of(n)),pe(r,function(s,a){o=o.concat(a)}),o}})}function Zn(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new($_())(e._repo,e._path):e}function rg(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=Oi(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function ig(){return K_++}function og(e,t,n){var r=t._path,i=ai(e,t),o=Lf(e,n),s=e.listenProvider_.startListening(Zn(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)w(!Ft(a.value),"If we're adding a query, it shouldn't be shadowed");else for(var l=a.fold(function(c,h,p){if(!W(c)&&h&&Ft(h))return[Ni(h).query];var _=[];return h&&(_=_.concat(Of(h).map(function(m){return m.query}))),pe(p,function(m,C){_=_.concat(C)}),_}),u=0;u<l.length;++u){var f=l[u];e.listenProvider_.stopListening(Zn(f),ai(e,f))}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sg=function(){function e(t){this.node_=t}return e.prototype.getImmediateChild=function(t){var n=this.node_.getImmediateChild(t);return new e(n)},e.prototype.node=function(){return this.node_},e}(),ag=function(){function e(t,n){this.syncTree_=t,this.path_=n}return e.prototype.getImmediateChild=function(t){var n=ne(this.path_,t);return new e(this.syncTree_,n)},e.prototype.node=function(){return xi(this.syncTree_,this.path_)},e}(),lg=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},cl=function(e,t,n){if(!e||typeof e!="object")return e;if(w(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return ug(e[".sv"],t,n);if(typeof e[".sv"]=="object")return fg(e[".sv"],t);w(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},ug=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+e)}},fg=function(e,t,n){e.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;typeof r!="number"&&w(!1,"Unexpected increment value: "+r);var i=t.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,s=o.getValue();return typeof s!="number"?r:s+r},Ff=function(e,t,n,r){return Bs(t,new ag(n,e),r)},Fs=function(e,t,n){return Bs(e,new sg(t),n)};function Bs(e,t,n){var r=e.getPriority().val(),i=cl(r,t.getImmediateChild(".priority"),n),o;if(e.isLeafNode()){var s=e,a=cl(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new Rn(a,re(i)):e}else{var l=e;return o=l,i!==l.getPriority().val()&&(o=o.updatePriority(new Rn(i))),l.forEachChild(ee,function(u,f){var c=Bs(f,t.getImmediateChild(u),n);c!==f&&(o=o.updateImmediateChild(u,c))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ws=function(){function e(t,n,r){t===void 0&&(t=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=t,this.parent=n,this.node=r}return e}();function Pi(e,t){for(var n=t instanceof $?t:new $(t),r=e,i=B(n);i!==null;){var o=an(r.node.children,i)||{children:{},childCount:0};r=new Ws(i,r,o),n=J(n),i=B(n)}return r}function hn(e){return e.node.value}function Us(e,t){e.node.value=t,Wo(e)}function Bf(e){return e.node.childCount>0}function cg(e){return hn(e)===void 0&&!Bf(e)}function ki(e,t){pe(e.node.children,function(n,r){t(new Ws(n,e,r))})}function Wf(e,t,n,r){n&&!r&&t(e),ki(e,function(i){Wf(i,t,!0,r)}),n&&r&&t(e)}function hg(e,t,n){for(var r=n?e:e.parent;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Er(e){return new $(e.parent===null?e.name:Er(e.parent)+"/"+e.name)}function Wo(e){e.parent!==null&&dg(e.parent,e.name,e)}function dg(e,t,n){var r=cg(n),i=De(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Wo(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Wo(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pg=/[\[\].#$\/\u0000-\u001F\u007F]/,vg=/[\[\].#$\u0000-\u001F\u007F]/,oo=10*1024*1024,Di=function(e){return typeof e=="string"&&e.length!==0&&!pg.test(e)},Uf=function(e){return typeof e=="string"&&e.length!==0&&!vg.test(e)},_g=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Uf(e)},hr=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!wi(e)||e&&typeof e=="object"&&De(e,".sv")},ht=function(e,t,n,r){r&&t===void 0||br(Ne(e,"value"),t,n)},br=function(e,t,n){var r=n instanceof $?new Iv(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+$t(r));if(typeof t=="function")throw new Error(e+"contains a function "+$t(r)+" with contents = "+t.toString());if(wi(t))throw new Error(e+"contains "+t.toString()+" "+$t(r));if(typeof t=="string"&&t.length>oo/3&&Ci(t)>oo)throw new Error(e+"contains a string greater than "+oo+" utf8 bytes "+$t(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){var i=!1,o=!1;if(pe(t,function(s,a){if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Di(s)))throw new Error(e+" contains an invalid key ("+s+") "+$t(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Tv(r,s),br(e,a,r),Sv(r)}),i&&o)throw new Error(e+' contains ".value" child '+$t(r)+" in addition to actual children.")}},gg=function(e,t){var n,r;for(n=0;n<t.length;n++){r=t[n];for(var i=ur(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Di(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(wv);var s=null;for(n=0;n<t.length;n++){if(r=t[n],s!==null&&We(s,r))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Hf=function(e,t,n,r){if(!(r&&t===void 0)){var i=Ne(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var o=[];pe(t,function(s,a){var l=new $(s);if(br(i,a,ne(n,l)),ys(l)===".priority"&&!hr(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),gg(i,o)}},Hs=function(e,t,n){if(!(n&&t===void 0)){if(wi(t))throw new Error(Ne(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!hr(t))throw new Error(Ne(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},mg=function(e,t,n){if(!(n&&t===void 0))switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Ne(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},Cr=function(e,t,n,r){if(!(r&&n===void 0)&&!Di(n))throw new Error(Ne(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},dr=function(e,t,n,r){if(!(r&&n===void 0)&&!Uf(n))throw new Error(Ne(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yg=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dr(e,t,n,r)},Ue=function(e,t){if(B(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},Vf=function(e,t){var n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Di(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_g(n))throw new Error(Ne(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},Eg=function(e,t,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Ne(e,t)+"must be a boolean.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bg=function(){function e(){this.eventLists_=[],this.recursionDepth_=0}return e}();function Mi(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();n!==null&&!Es(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Vs(e,t,n){Mi(e,n),jf(e,function(r){return Es(r,t)})}function Ve(e,t,n){Mi(e,n),jf(e,function(r){return We(r,t)||We(t,r)})}function jf(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i){var o=i.path;t(o)?(Cg(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cg(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(n!==null){e.events[t]=null;var r=n.getEventRunner();on&&ge("event: "+n.toString()),Ln(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zf="repo_interrupt",wg=25,Ig=function(){function e(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new Ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},e}();function Tg(e,t,n){if(e.stats_=gs(e.repoInfo_),e.forceRestClient_||Gp())e.server_=new Xv(e.repoInfo_,function(r,i,o,s){hl(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(function(){return dl(e,!0)},0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new sn(e.repoInfo_,t,function(r,i,o,s){hl(e,r,i,o,s)},function(r){dl(e,r)},function(r){Rg(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(function(r){e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(function(r){e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=Xp(e.repoInfo_,function(){return new r_(e.stats_,e.server_)}),e.infoData_=new Zv,e.infoSyncTree_=new ul({startListening:function(r,i,o,s){var a=[],l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=yr(e.infoSyncTree_,r._path,l),setTimeout(function(){s("ok")},0)),a},stopListening:function(){}}),js(e,"connected",!1),e.serverSyncTree_=new ul({startListening:function(r,i,o,s){return e.server_.listen(r,o,i,function(a,l){var u=s(a,l);Ve(e.eventQueue_,r._path,u)}),[]},stopListening:function(r,i){e.server_.unlisten(r,i)}})}function Qf(e){var t=e.infoData_.getNode(new $(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}function wr(e){return lg({timestamp:Qf(e)})}function hl(e,t,n,r,i){e.dataUpdateCount++;var o=new $(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var s=[];if(i)if(r){var a=Kr(n,function(h){return re(h)});s=eg(e.serverSyncTree_,o,a,i)}else{var l=re(n);s=Z_(e.serverSyncTree_,o,l,i)}else if(r){var u=Kr(n,function(h){return re(h)});s=q_(e.serverSyncTree_,o,u)}else{var f=re(n);s=yr(e.serverSyncTree_,o,f)}var c=o;s.length>0&&(c=On(e,o)),Ve(e.eventQueue_,c,s)}function Sg(e,t){e.interceptServerDataCallback_=t}function dl(e,t){js(e,"connected",t),t===!1&&xg(e)}function Rg(e,t){pe(t,function(n,r){js(e,n,r)})}function js(e,t,n){var r=new $("/.info/"+t),i=re(n);e.infoData_.updateSnapshot(r,i);var o=yr(e.infoSyncTree_,r,i);Ve(e.eventQueue_,r,o)}function Li(e){return e.nextWriteId_++}function Ag(e,t){var n=tg(e.serverSyncTree_,t);return n!=null?Promise.resolve(n):e.server_.get(t).then(function(r){var i=re(r).withIndex(t._queryParams.getIndex()),o=yr(e.serverSyncTree_,t._path,i);return Vs(e.eventQueue_,t._path,o),Promise.resolve(i)},function(r){return Wn(e,"get for query "+he(t)+" failed: "+r),Promise.reject(new Error(r))})}function zs(e,t,n,r,i){Wn(e,"set",{path:t.toString(),value:n,priority:r});var o=wr(e),s=re(n,r),a=xi(e.serverSyncTree_,t),l=Fs(s,a,o),u=Li(e),f=ks(e.serverSyncTree_,t,l,u,!0);Mi(e.eventQueue_,f),e.server_.put(t.toString(),s.val(!0),function(h,p){var _=h==="ok";_||me("set at "+t+" failed: "+h);var m=St(e.serverSyncTree_,u,!_);Ve(e.eventQueue_,t,m),Bt(e,i,h,p)});var c=Gs(e,t);On(e,c),Ve(e.eventQueue_,c,[])}function Ng(e,t,n,r){Wn(e,"update",{path:t.toString(),value:n});var i=!0,o=wr(e),s={};if(pe(n,function(u,f){i=!1,s[u]=Ff(ne(t,u),re(f),e.serverSyncTree_,o)}),i)ge("update() called with empty data.  Don't do anything."),Bt(e,r,"ok",void 0);else{var a=Li(e),l=Y_(e.serverSyncTree_,t,s,a);Mi(e.eventQueue_,l),e.server_.merge(t.toString(),n,function(u,f){var c=u==="ok";c||me("update at "+t+" failed: "+u);var h=St(e.serverSyncTree_,a,!c),p=h.length>0?On(e,t):t;Ve(e.eventQueue_,p,h),Bt(e,r,u,f)}),pe(n,function(u){var f=Gs(e,ne(t,u));On(e,f)}),Ve(e.eventQueue_,t,[])}}function xg(e){Wn(e,"onDisconnectEvents");var t=wr(e),n=ei();Po(e.onDisconnect_,Q(),function(i,o){var s=Ff(i,o,e.serverSyncTree_,t);Fn(n,i,s)});var r=[];Po(n,Q(),function(i,o){r=r.concat(yr(e.serverSyncTree_,i,o));var s=Gs(e,i);On(e,s)}),e.onDisconnect_=ei(),Ve(e.eventQueue_,Q(),r)}function Og(e,t,n){e.server_.onDisconnectCancel(t.toString(),function(r,i){r==="ok"&&Oo(e.onDisconnect_,t),Bt(e,n,r,i)})}function pl(e,t,n,r){var i=re(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),function(o,s){o==="ok"&&Fn(e.onDisconnect_,t,i),Bt(e,r,o,s)})}function Pg(e,t,n,r,i){var o=re(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),function(s,a){s==="ok"&&Fn(e.onDisconnect_,t,o),Bt(e,i,s,a)})}function kg(e,t,n,r){if(wo(n)){ge("onDisconnect().update() called with empty data.  Don't do anything."),Bt(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,function(i,o){i==="ok"&&pe(n,function(s,a){var l=re(a);Fn(e.onDisconnect_,ne(t,s),l)}),Bt(e,r,i,o)})}function Dg(e,t,n){var r;B(t._path)===".info"?r=fl(e.infoSyncTree_,t,n):r=fl(e.serverSyncTree_,t,n),Vs(e.eventQueue_,t._path,r)}function Uo(e,t,n){var r;B(t._path)===".info"?r=Bo(e.infoSyncTree_,t,n):r=Bo(e.serverSyncTree_,t,n),Vs(e.eventQueue_,t._path,r)}function Gf(e){e.persistentConnection_&&e.persistentConnection_.interrupt(zf)}function Mg(e){e.persistentConnection_&&e.persistentConnection_.resume(zf)}function Lg(e,t){if(t===void 0&&(t=!1),!(typeof console>"u")){var n;t?(e.statsListener_||(e.statsListener_=new mf(e.stats_)),n=e.statsListener_.get()):n=e.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);pe(n,function(i,o){for(var s=i,a=i.length;a<r+2;a++)s+=" ";console.log(s+o)})}}function Fg(e,t){e.stats_.incrementCounter(t),i_(e.statsReporter_,t)}function Wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r="";e.persistentConnection_&&(r=e.persistentConnection_.id+":"),ge.apply(void 0,Dt([r],Te(t)))}function Bt(e,t,n,r){t&&Ln(function(){if(n==="ok")t(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var s=new Error(o);s.code=i,t(s)}})}function Bg(e,t,n,r,i,o){Wn(e,"transaction on "+t);var s={path:t,update:n,onComplete:r,status:null,order:Lu(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Qs(e,t,void 0);s.currentInputSnapshot=a;var l=s.update(a.val());if(l===void 0)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{br("transaction failed: Data returned ",l,s.path),s.status=0;var u=Pi(e.transactionQueueTree_,t),f=hn(u)||[];f.push(s),Us(u,f);var c=void 0;if(typeof l=="object"&&l!==null&&De(l,".priority"))c=an(l,".priority"),w(hr(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var h=xi(e.serverSyncTree_,t)||L.EMPTY_NODE;c=h.getPriority().val()}var p=wr(e),_=re(l,c),m=Fs(_,a,p);s.currentOutputSnapshotRaw=_,s.currentOutputSnapshotResolved=m,s.currentWriteId=Li(e);var C=ks(e.serverSyncTree_,t,m,s.currentWriteId,s.applyLocally);Ve(e.eventQueue_,t,C),Fi(e,e.transactionQueueTree_)}}function Qs(e,t,n){return xi(e.serverSyncTree_,t,n)||L.EMPTY_NODE}function Fi(e,t){if(t===void 0&&(t=e.transactionQueueTree_),t||Bi(e,t),hn(t)){var n=Kf(e,t);w(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&Wg(e,Er(t),n)}else Bf(t)&&ki(t,function(i){Fi(e,i)})}function Wg(e,t,n){for(var r=n.map(function(h){return h.currentWriteId}),i=Qs(e,t,r),o=i,s=i.hash(),a=0;a<n.length;a++){var l=n[a];w(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;var u=Se(t,l.path);o=o.updateChild(u,l.currentOutputSnapshotRaw)}var f=o.val(!0),c=t;e.server_.put(c.toString(),f,function(h){Wn(e,"transaction put response",{path:c.toString(),status:h});var p=[];if(h==="ok"){for(var _=[],m=function(S){n[S].status=2,p=p.concat(St(e.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&_.push(function(){return n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)}),n[S].unwatcher()},C=0;C<n.length;C++)m(C);Bi(e,Pi(e.transactionQueueTree_,t)),Fi(e,e.transactionQueueTree_),Ve(e.eventQueue_,t,p);for(var C=0;C<_.length;C++)Ln(_[C])}else{if(h==="datastale")for(var C=0;C<n.length;C++)n[C].status===3?n[C].status=4:n[C].status=0;else{me("transaction at "+c.toString()+" failed: "+h);for(var C=0;C<n.length;C++)n[C].status=4,n[C].abortReason=h}On(e,t)}},s)}function On(e,t){var n=$f(e,t),r=Er(n),i=Kf(e,n);return Ug(e,i,r),r}function Ug(e,t,n){if(t.length!==0){for(var r=[],i=[],o=t.filter(function(u){return u.status===0}),s=o.map(function(u){return u.currentWriteId}),a=function(u){var f=t[u],c=Se(n,f.path),h=!1,p;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)h=!0,p=f.abortReason,i=i.concat(St(e.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=wg)h=!0,p="maxretry",i=i.concat(St(e.serverSyncTree_,f.currentWriteId,!0));else{var _=Qs(e,f.path,s);f.currentInputSnapshot=_;var m=t[u].update(_.val());if(m!==void 0){br("transaction failed: Data returned ",m,f.path);var C=re(m),S=typeof m=="object"&&m!=null&&De(m,".priority");S||(C=C.updatePriority(_.getPriority()));var D=f.currentWriteId,N=wr(e),K=Fs(C,_,N);f.currentOutputSnapshotRaw=C,f.currentOutputSnapshotResolved=K,f.currentWriteId=Li(e),s.splice(s.indexOf(D),1),i=i.concat(ks(e.serverSyncTree_,f.path,K,f.currentWriteId,f.applyLocally)),i=i.concat(St(e.serverSyncTree_,D,!0))}else h=!0,p="nodata",i=i.concat(St(e.serverSyncTree_,f.currentWriteId,!0))}Ve(e.eventQueue_,n,i),i=[],h&&(t[u].status=2,function(le){setTimeout(le,Math.floor(0))}(t[u].unwatcher),t[u].onComplete&&(p==="nodata"?r.push(function(){return t[u].onComplete(null,!1,t[u].currentInputSnapshot)}):r.push(function(){return t[u].onComplete(new Error(p),!1,null)})))},l=0;l<t.length;l++)a(l);Bi(e,e.transactionQueueTree_);for(var l=0;l<r.length;l++)Ln(r[l]);Fi(e,e.transactionQueueTree_)}}function $f(e,t){var n,r=e.transactionQueueTree_;for(n=B(t);n!==null&&hn(r)===void 0;)r=Pi(r,n),t=J(t),n=B(t);return r}function Kf(e,t){var n=[];return Yf(e,t,n),n.sort(function(r,i){return r.order-i.order}),n}function Yf(e,t,n){var r=hn(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);ki(t,function(o){Yf(e,o,n)})}function Bi(e,t){var n=hn(t);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Us(t,n.length>0?n:void 0)}ki(t,function(o){Bi(e,o)})}function Gs(e,t){var n=Er($f(e,t)),r=Pi(e.transactionQueueTree_,t);return hg(r,function(i){so(e,i)}),so(e,r),Wf(r,function(i){so(e,i)}),n}function so(e,t){var n=hn(t);if(n){for(var r=[],i=[],o=-1,s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(w(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(w(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(St(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Us(t,void 0):n.length=o+1,Ve(e.eventQueue_,Er(t),i);for(var s=0;s<r.length;s++)Ln(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Vg(e){var t,n,r={};e.charAt(0)==="?"&&(e=e.substring(1));try{for(var i=ke(e.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(s.length!==0){var a=s.split("=");a.length===2?r[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):me("Invalid query segment '"+s+"' in query '"+e+"'")}}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}var Ho=function(e,t){var n=jg(e),r=n.namespace;n.domain==="firebase.com"&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Wp();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _s(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new $(n.pathString)}},jg=function(e){var t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){var u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));var f=e.indexOf("/");f===-1&&(f=e.length);var c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(f,c)),f<c&&(i=Hg(e.substring(f,c)));var h=Vg(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;var p=t.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{var _=t.indexOf(".");r=t.substring(0,_).toLowerCase(),n=t.substring(_+1),o=r}"ns"in h&&(o=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qf=function(){function e(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return e.prototype.getPath=function(){var t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path},e.prototype.getEventType=function(){return this.eventType},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())},e}(),Jf=function(){function e(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}return e.prototype.getPath=function(){return this.path},e.prototype.getEventType=function(){return"cancel"},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.path.toString()+":cancel"},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xf=function(){function e(t,n){this.snapshotCallback=t,this.cancelCallback=n}return e.prototype.onValue=function(t,n){this.snapshotCallback.call(null,t,n)},e.prototype.onCancel=function(t){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)},Object.defineProperty(e.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),e.prototype.matches=function(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context},e}();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zg=function(){function e(t,n){this._repo=t,this._path=n}return e.prototype.cancel=function(){var t=new Ae;return Og(this._repo,this._path,t.wrapCallback(function(){})),t.promise},e.prototype.remove=function(){Ue("OnDisconnect.remove",this._path);var t=new Ae;return pl(this._repo,this._path,null,t.wrapCallback(function(){})),t.promise},e.prototype.set=function(t){Ue("OnDisconnect.set",this._path),ht("OnDisconnect.set",t,this._path,!1);var n=new Ae;return pl(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e.prototype.setWithPriority=function(t,n){Ue("OnDisconnect.setWithPriority",this._path),ht("OnDisconnect.setWithPriority",t,this._path,!1),Hs("OnDisconnect.setWithPriority",n,!1);var r=new Ae;return Pg(this._repo,this._path,t,n,r.wrapCallback(function(){})),r.promise},e.prototype.update=function(t){Ue("OnDisconnect.update",this._path),Hf("OnDisconnect.update",t,this._path,!1);var n=new Ae;return kg(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je=function(){function e(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(e.prototype,"key",{get:function(){return W(this._path)?null:ys(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ref",{get:function(){return new dt(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryIdentifier",{get:function(){var t=Za(this._queryParams),n=ds(t);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryObject",{get:function(){return Za(this._queryParams)},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){if(t=Le(t),!(t instanceof e))return!1;var n=this._repo===t._repo,r=Es(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i},e.prototype.toJSON=function(){return this.toString()},e.prototype.toString=function(){return this._repo.toString()+Cv(this._path)},e}();function Wi(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function Wt(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===ut){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){var o=e.getIndexStartName();if(o!==bt)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){var s=e.getIndexEndName();if(s!==ct)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===ee){if(t!=null&&!hr(t)||n!=null&&!hr(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(e.getIndex()instanceof Cs||e.getIndex()===ws,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ui(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var dt=function(e){oe(t,e);function t(n,r){return e.call(this,n,r,new gf,!1)||this}return Object.defineProperty(t.prototype,"parent",{get:function(){var n=sf(this._path);return n===null?null:new t(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),t}(je),Hi=function(){function e(t,n,r){this._node=t,this.ref=n,this._index=r}return Object.defineProperty(e.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),e.prototype.child=function(t){var n=new $(t),r=un(this.ref,t);return new e(this._node.getChild(n),r,ee)},e.prototype.exists=function(){return!this._node.isEmpty()},e.prototype.exportVal=function(){return this._node.val(!0)},e.prototype.forEach=function(t){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return t(new e(o,un(n.ref,i),ee))})},e.prototype.hasChild=function(t){var n=new $(t);return!this._node.getChild(n).isEmpty()},e.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},e.prototype.toJSON=function(){return this.exportVal()},e.prototype.val=function(){return this._node.val()},e}();function Zf(e,t){return e=Le(e),e._checkNotDeleted("ref"),t!==void 0?un(e._root,t):e._root}function vl(e,t){e=Le(e),e._checkNotDeleted("refFromURL");var n=Ho(t,e._repo.repoInfo_.nodeAdmin);Vf("refFromURL",n);var r=n.repoInfo;return!e._repo.repoInfo_.isCustomHost()&&r.host!==e._repo.repoInfo_.host&&ft("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Zf(e,n.path.toString())}function un(e,t){return e=Le(e),B(e._path)===null?yg("child","path",t,!1):dr("child","path",t,!1),new dt(e._repo,ne(e._path,t))}function Qg(e,t){e=Le(e),Ue("push",e._path),ht("push",t,e._path,!0);var n=Qf(e._repo),r=zv(n),i=un(e,r),o=un(e,r),s;return t!=null?s=$s(o,t).then(function(){return o}):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function Gg(e){return Ue("remove",e._path),$s(e,null)}function $s(e,t){e=Le(e),Ue("set",e._path),ht("set",t,e._path,!1);var n=new Ae;return zs(e._repo,e._path,t,null,n.wrapCallback(function(){})),n.promise}function $g(e,t){e=Le(e),Ue("setPriority",e._path),Hs("setPriority",t,!1);var n=new Ae;return zs(e._repo,ne(e._path,".priority"),t,null,n.wrapCallback(function(){})),n.promise}function Kg(e,t,n){if(Ue("setWithPriority",e._path),ht("setWithPriority",t,e._path,!1),Hs("setWithPriority",n,!1),e.key===".length"||e.key===".keys")throw"setWithPriority failed: "+e.key+" is a read-only object.";var r=new Ae;return zs(e._repo,e._path,t,n,r.wrapCallback(function(){})),r.promise}function Yg(e,t){Hf("update",t,e._path,!1);var n=new Ae;return Ng(e._repo,e._path,t,n.wrapCallback(function(){})),n.promise}function qg(e){return e=Le(e),Ag(e._repo,e).then(function(t){return new Hi(t,new dt(e._repo,e._path),e._queryParams.getIndex())})}var ec=function(){function e(t){this.callbackContext=t}return e.prototype.respondsTo=function(t){return t==="value"},e.prototype.createEvent=function(t,n){var r=n._queryParams.getIndex();return new qf("value",this,new Hi(t.snapshotNode,new dt(n._repo,n._path),r))},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,null)}},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new Jf(this,t,n):null},e.prototype.matches=function(t){return t instanceof e?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1},e.prototype.hasAnyCallback=function(){return this.callbackContext!==null},e}(),tc=function(){function e(t,n){this.eventType=t,this.callbackContext=n}return e.prototype.respondsTo=function(t){var n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new Jf(this,t,n):null},e.prototype.createEvent=function(t,n){w(t.childName!=null,"Child events should have a childName.");var r=un(new dt(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new qf(t.type,this,new Hi(t.snapshotNode,r,i),t.prevName)},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,t.prevName)}},e.prototype.matches=function(t){return t instanceof e?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1},e.prototype.hasAnyCallback=function(){return!!this.callbackContext},e}();function Ir(e,t,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var s=n,a=function(f,c){Uo(e._repo,e,u),s(f,c)};a.userCallback=n.userCallback,a.context=n.context,n=a}var l=new Xf(n,o||void 0),u=t==="value"?new ec(l):new tc(t,l);return Dg(e._repo,e,u),function(){return Uo(e._repo,e,u)}}function Vo(e,t,n,r){return Ir(e,"value",t,n,r)}function _l(e,t,n,r){return Ir(e,"child_added",t,n,r)}function gl(e,t,n,r){return Ir(e,"child_changed",t,n,r)}function ml(e,t,n,r){return Ir(e,"child_moved",t,n,r)}function yl(e,t,n,r){return Ir(e,"child_removed",t,n,r)}function El(e,t,n){var r=null,i=n?new Xf(n):null;t==="value"?r=new ec(i):t&&(r=new tc(t,i)),Uo(e._repo,e,r)}var et=function(){function e(){}return e}(),nc=function(e){oe(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){ht("endAt",this._value,n._path,!0);var r=xo(n._queryParams,this._value,this._key);if(Ui(r),Wt(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new je(n._repo,n._path,r,n._orderByCalled)},t}(et);function Jg(e,t){return Cr("endAt","key",t,!0),new nc(e,t)}var Xg=function(e){oe(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){ht("endBefore",this._value,n._path,!1);var r=Jv(n._queryParams,this._value,this._key);if(Ui(r),Wt(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new je(n._repo,n._path,r,n._orderByCalled)},t}(et);function Zg(e,t){return Cr("endBefore","key",t,!0),new Xg(e,t)}var rc=function(e){oe(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){ht("startAt",this._value,n._path,!0);var r=No(n._queryParams,this._value,this._key);if(Ui(r),Wt(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new je(n._repo,n._path,r,n._orderByCalled)},t}(et);function em(e,t){return e===void 0&&(e=null),Cr("startAt","key",t,!0),new rc(e,t)}var tm=function(e){oe(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){ht("startAfter",this._value,n._path,!1);var r=qv(n._queryParams,this._value,this._key);if(Ui(r),Wt(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new je(n._repo,n._path,r,n._orderByCalled)},t}(et);function nm(e,t){return Cr("startAfter","key",t,!0),new tm(e,t)}var rm=function(e){oe(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new je(n._repo,n._path,Kv(n._queryParams,this._limit),n._orderByCalled)},t}(et);function im(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new rm(e)}var om=function(e){oe(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new je(n._repo,n._path,Yv(n._queryParams,this._limit),n._orderByCalled)},t}(et);function sm(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new om(e)}var am=function(e){oe(t,e);function t(n){var r=e.call(this)||this;return r._path=n,r}return t.prototype._apply=function(n){Wi(n,"orderByChild");var r=new $(this._path);if(W(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new Cs(r),o=Ti(n._queryParams,i);return Wt(o),new je(n._repo,n._path,o,!0)},t}(et);function lm(e){if(e==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(e==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(e==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return dr("orderByChild","path",e,!1),new am(e)}var um=function(e){oe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Wi(n,"orderByKey");var r=Ti(n._queryParams,ut);return Wt(r),new je(n._repo,n._path,r,!0)},t}(et);function fm(){return new um}var cm=function(e){oe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Wi(n,"orderByPriority");var r=Ti(n._queryParams,ee);return Wt(r),new je(n._repo,n._path,r,!0)},t}(et);function hm(){return new cm}var dm=function(e){oe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Wi(n,"orderByValue");var r=Ti(n._queryParams,ws);return Wt(r),new je(n._repo,n._path,r,!0)},t}(et);function pm(){return new dm}var vm=function(e){oe(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){if(ht("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new nc(this._value,this._key)._apply(new rc(this._value,this._key)._apply(n))},t}(et);function _m(e,t){return Cr("equalTo","key",t,!0),new vm(e,t)}function Qe(e){for(var t,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=Le(e);try{for(var s=ke(r),a=s.next();!a.done;a=s.next()){var l=a.value;o=l._apply(o)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return o}H_(dt);G_(dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gm="FIREBASE_DATABASE_EMULATOR_HOST",jo={},ic=!1;function mm(e,t,n,r){e.repoInfo_=new _s(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function oc(e,t,n,r,i){var o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");var s=Ho(o,i),a=s.repoInfo,l,u=void 0;typeof process<"u"&&(u=process.env[gm]),u?(l=!0,o="http://"+u+"?ns="+a.namespace,s=Ho(o,i),a=s.repoInfo):l=!s.repoInfo.secure;var f=i&&l?new qn(qn.OWNER):new Kp(e.name,e.options,t);Vf("Invalid Firebase Database URL",s),W(s.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");var c=Em(a,e,f,new $p(e.name,n));return new Cm(c,e)}function ym(e,t){var n=jo[t];(!n||n[e.key]!==e)&&ft("Database "+t+"("+e.repoInfo_+") has already been deleted."),Gf(e),delete n[e.key]}function Em(e,t,n,r){var i=jo[t.name];i||(i={},jo[t.name]=i);var o=i[e.toURLString()];return o&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Ig(e,ic,n,r),i[e.toURLString()]=o,o}function bm(e){ic=e}var Cm=function(){function e(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(e.prototype,"_repo",{get:function(){return this._instanceStarted||(Tg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new dt(this._repo,Q())),this._rootInternal},enumerable:!1,configurable:!0}),e.prototype._delete=function(){return this._rootInternal!==null&&(ym(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},e.prototype._checkNotDeleted=function(t){this._rootInternal===null&&ft("Cannot call "+t+" on a deleted database.")},e}();function wm(e,t,n,r){r===void 0&&(r={}),e=Le(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ft("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new qn(qn.OWNER);else if(r.mockUserToken){var s=typeof r.mockUserToken=="string"?r.mockUserToken:jd(r.mockUserToken,e.app.options.projectId);o=new qn(s)}mm(i,t,n,o)}function Im(e){e=Le(e),e._checkNotDeleted("goOffline"),Gf(e._repo)}function Tm(e){e=Le(e),e._checkNotDeleted("goOnline"),Mg(e._repo)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sm={".sv":"timestamp"};function Rm(){return Sm}function Am(e){return{".sv":{increment:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nm=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();function xm(e,t,n){var r;if(e=Le(e),Ue("Reference.transaction",e._path),e.key===".length"||e.key===".keys")throw"Reference.transaction failed: "+e.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new Ae,s=function(l,u,f){var c=null;l?o.reject(l):(c=new Hi(f,new dt(e._repo,e._path),ee),o.resolve(new Nm(u,c)))},a=Vo(e,function(){});return Bg(e._repo,e._path,t,s,a,i),o.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Om=function(){function e(t){this._delegate=t}return e.prototype.cancel=function(t){k("OnDisconnect.cancel",0,1,arguments.length),_e("OnDisconnect.cancel","onComplete",t,!0);var n=this._delegate.cancel();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.remove=function(t){k("OnDisconnect.remove",0,1,arguments.length),_e("OnDisconnect.remove","onComplete",t,!0);var n=this._delegate.remove();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.set=function(t,n){k("OnDisconnect.set",1,2,arguments.length),_e("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(t);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.setWithPriority=function(t,n,r){k("OnDisconnect.setWithPriority",2,3,arguments.length),_e("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(t,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(t,n){if(k("OnDisconnect.update",1,2,arguments.length),Array.isArray(t)){for(var r={},i=0;i<t.length;++i)r[""+i]=t[i];t=r,me("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_e("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(t);return n&&o.then(function(){return n(null)},function(s){return n(s)}),o},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pm=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return k("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er=function(){function e(t,n){this._database=t,this._delegate=n}return e.prototype.val=function(){return k("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},e.prototype.exportVal=function(){return k("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},e.prototype.toJSON=function(){return k("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.exists=function(){return k("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},e.prototype.child=function(t){return k("DataSnapshot.child",0,1,arguments.length),t=String(t),dr("DataSnapshot.child","path",t,!1),new e(this._database,this._delegate.child(t))},e.prototype.hasChild=function(t){return k("DataSnapshot.hasChild",1,1,arguments.length),dr("DataSnapshot.hasChild","path",t,!1),this._delegate.hasChild(t)},e.prototype.getPriority=function(){return k("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},e.prototype.forEach=function(t){var n=this;return k("DataSnapshot.forEach",1,1,arguments.length),_e("DataSnapshot.forEach","action",t,!1),this._delegate.forEach(function(r){return t(new e(n._database,r))})},e.prototype.hasChildren=function(){return k("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(e.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),e.prototype.numChildren=function(){return k("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},e.prototype.getRef=function(){return k("DataSnapshot.ref",0,0,arguments.length),new en(this._database,this._delegate.ref)},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),e}(),sc=function(){function e(t,n){this.database=t,this._delegate=n}return e.prototype.on=function(t,n,r,i){var o=this,s;k("Query.on",2,4,arguments.length),_e("Query.on","callback",n,!1);var a=e.getCancelAndContextArgs_("Query.on",r,i),l=function(f,c){n.call(a.context,new er(o.database,f),c)};l.userCallback=n,l.context=a.context;var u=(s=a.cancel)===null||s===void 0?void 0:s.bind(a.context);switch(t){case"value":return Vo(this._delegate,l,u),n;case"child_added":return _l(this._delegate,l,u),n;case"child_removed":return yl(this._delegate,l,u),n;case"child_changed":return gl(this._delegate,l,u),n;case"child_moved":return ml(this._delegate,l,u),n;default:throw new Error(Ne("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},e.prototype.off=function(t,n,r){if(k("Query.off",0,3,arguments.length),mg("Query.off",t,!0),_e("Query.off","callback",n,!0),Da("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,El(this._delegate,t,i)}else El(this._delegate,t)},e.prototype.get=function(){var t=this;return qg(this._delegate).then(function(n){return new er(t.database,n)})},e.prototype.once=function(t,n,r,i){var o=this;k("Query.once",1,4,arguments.length),_e("Query.once","callback",n,!0);var s=e.getCancelAndContextArgs_("Query.once",r,i),a=new Ae,l=function(f,c){var h=new er(o.database,f);n&&n.call(s.context,h,c),a.resolve(h)};l.userCallback=n,l.context=s.context;var u=function(f){s.cancel&&s.cancel.call(s.context,f),a.reject(f)};switch(t){case"value":Vo(this._delegate,l,u,{onlyOnce:!0});break;case"child_added":_l(this._delegate,l,u,{onlyOnce:!0});break;case"child_removed":yl(this._delegate,l,u,{onlyOnce:!0});break;case"child_changed":gl(this._delegate,l,u,{onlyOnce:!0});break;case"child_moved":ml(this._delegate,l,u,{onlyOnce:!0});break;default:throw new Error(Ne("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise},e.prototype.limitToFirst=function(t){return k("Query.limitToFirst",1,1,arguments.length),new e(this.database,Qe(this._delegate,im(t)))},e.prototype.limitToLast=function(t){return k("Query.limitToLast",1,1,arguments.length),new e(this.database,Qe(this._delegate,sm(t)))},e.prototype.orderByChild=function(t){return k("Query.orderByChild",1,1,arguments.length),new e(this.database,Qe(this._delegate,lm(t)))},e.prototype.orderByKey=function(){return k("Query.orderByKey",0,0,arguments.length),new e(this.database,Qe(this._delegate,fm()))},e.prototype.orderByPriority=function(){return k("Query.orderByPriority",0,0,arguments.length),new e(this.database,Qe(this._delegate,hm()))},e.prototype.orderByValue=function(){return k("Query.orderByValue",0,0,arguments.length),new e(this.database,Qe(this._delegate,pm()))},e.prototype.startAt=function(t,n){return t===void 0&&(t=null),k("Query.startAt",0,2,arguments.length),new e(this.database,Qe(this._delegate,em(t,n)))},e.prototype.startAfter=function(t,n){return t===void 0&&(t=null),k("Query.startAfter",0,2,arguments.length),new e(this.database,Qe(this._delegate,nm(t,n)))},e.prototype.endAt=function(t,n){return t===void 0&&(t=null),k("Query.endAt",0,2,arguments.length),new e(this.database,Qe(this._delegate,Jg(t,n)))},e.prototype.endBefore=function(t,n){return t===void 0&&(t=null),k("Query.endBefore",0,2,arguments.length),new e(this.database,Qe(this._delegate,Zg(t,n)))},e.prototype.equalTo=function(t,n){return k("Query.equalTo",1,2,arguments.length),new e(this.database,Qe(this._delegate,_m(t,n)))},e.prototype.toString=function(){return k("Query.toString",0,0,arguments.length),this._delegate.toString()},e.prototype.toJSON=function(){return k("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.isEqual=function(t){if(k("Query.isEqual",1,1,arguments.length),!(t instanceof e)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(t._delegate)},e.getCancelAndContextArgs_=function(t,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,_e(t,"cancel",i.cancel,!0),i.context=r,Da(t,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Ne(t,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(e.prototype,"ref",{get:function(){return new en(this.database,new dt(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),e}(),en=function(e){oe(t,e);function t(n,r){var i=e.call(this,n,new je(r._repo,r._path,new gf,!1))||this;return i.database=n,i._delegate=r,i}return t.prototype.getKey=function(){return k("Reference.key",0,0,arguments.length),this._delegate.key},t.prototype.child=function(n){return k("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new t(this.database,un(this._delegate,n))},t.prototype.getParent=function(){k("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new t(this.database,n):null},t.prototype.getRoot=function(){return k("Reference.root",0,0,arguments.length),new t(this.database,this._delegate.root)},t.prototype.set=function(n,r){k("Reference.set",1,2,arguments.length),_e("Reference.set","onComplete",r,!0);var i=$s(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(n,r){if(k("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,me("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ue("Reference.update",this._delegate._path),_e("Reference.update","onComplete",r,!0);var s=Yg(this._delegate,n);return r&&s.then(function(){return r(null)},function(a){return r(a)}),s},t.prototype.setWithPriority=function(n,r,i){k("Reference.setWithPriority",2,3,arguments.length),_e("Reference.setWithPriority","onComplete",i,!0);var o=Kg(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(s){return i(s)}),o},t.prototype.remove=function(n){k("Reference.remove",0,1,arguments.length),_e("Reference.remove","onComplete",n,!0);var r=Gg(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.transaction=function(n,r,i){var o=this;k("Reference.transaction",1,3,arguments.length),_e("Reference.transaction","transactionUpdate",n,!1),_e("Reference.transaction","onComplete",r,!0),Eg("Reference.transaction","applyLocally",i,!0);var s=xm(this._delegate,n,{applyLocally:i}).then(function(a){return new Pm(a.committed,new er(o.database,a.snapshot))});return r&&s.then(function(a){return r(null,a.committed,a.snapshot)},function(a){return r(a,!1,null)}),s},t.prototype.setPriority=function(n,r){k("Reference.setPriority",1,2,arguments.length),_e("Reference.setPriority","onComplete",r,!0);var i=$g(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.push=function(n,r){var i=this;k("Reference.push",0,2,arguments.length),_e("Reference.push","onComplete",r,!0);var o=Qg(this._delegate,n),s=o.then(function(l){return new t(i.database,l)});r&&s.then(function(){return r(null)},function(l){return r(l)});var a=new t(this.database,o);return a.then=s.then.bind(s),a.catch=s.catch.bind(s,void 0),a},t.prototype.onDisconnect=function(){return Ue("Reference.onDisconnect",this._delegate._path),new Om(new zg(this._delegate._repo,this._delegate._path))},Object.defineProperty(t.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),t}(sc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li=function(){function e(t,n){var r=this;this._delegate=t,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return e.prototype.useEmulator=function(t,n,r){r===void 0&&(r={}),wm(this._delegate,t,n,r)},e.prototype.ref=function(t){if(k("database.ref",0,1,arguments.length),t instanceof en){var n=vl(this._delegate,t.toString());return new en(this,n)}else{var n=Zf(this._delegate,t);return new en(this,n)}},e.prototype.refFromURL=function(t){var n="database.refFromURL";k(n,1,1,arguments.length);var r=vl(this._delegate,t);return new en(this,r)},e.prototype.goOffline=function(){return k("database.goOffline",0,0,arguments.length),Im(this._delegate)},e.prototype.goOnline=function(){return k("database.goOnline",0,0,arguments.length),Tm(this._delegate)},e.ServerValue={TIMESTAMP:Rm(),increment:function(t){return Am(t)}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var km=function(){Jt.forceDisallow(),ms.forceAllow()},Dm=function(){ms.forceDisallow()},Mm=function(){return Jt.isAvailable()},Lm=function(e,t){var n=e._delegate._repo.persistentConnection_;n.securityDebugCallback_=t},Fm=function(e,t){Lg(e._delegate._repo,t)},Bm=function(e,t){Fg(e._delegate._repo,t)},Wm=function(e){return e._delegate._repo.dataUpdateCount},Um=function(e,t){return Sg(e._delegate._repo,t)};function Hm(e){var t=e.app,n=e.url,r=e.version,i=e.customAuthImpl,o=e.namespace,s=e.nodeAdmin,a=s===void 0?!1:s;Du(r);var l=new Su("auth-internal",new Ru("database-standalone"));return l.setComponent(new pr("auth-internal",function(){return i},"PRIVATE")),{instance:new li(oc(t,l,void 0,n,a),t),namespace:o}}var Vm=Object.freeze({__proto__:null,forceLongPolling:km,forceWebSockets:Dm,isWebSocketsAvailable:Mm,setSecurityDebugCallback:Lm,stats:Fm,statsIncrementCounter:Bm,dataUpdateCount:Wm,interceptServerData:Um,initStandalone:Hm});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jm=sn;sn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};sn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var zm=nf,Qm=function(e){var t=sn.prototype.put;return sn.prototype.put=function(n,r,i,o){o!==void 0&&(o=e()),t.call(this,n,r,i,o)},function(){sn.prototype.put=t}},Gm=_s,$m=function(e){return e._delegate._queryIdentifier},Km=function(e){bm(e)},Ym=Object.freeze({__proto__:null,DataConnection:jm,RealTimeConnection:zm,hijackHash:Qm,ConnectionTarget:Gm,queryIdentifier:$m,forceRestClient:Km});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qm=li.ServerValue;function Jm(e){Du(e.SDK_VERSION),e.INTERNAL.registerComponent(new pr("database",function(t,n){var r=n.instanceIdentifier,i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new li(oc(i,o,s,r),i)},"PUBLIC").setServiceProps({Reference:en,Query:sc,Database:li,DataSnapshot:er,enableLogging:Bu,INTERNAL:Vm,ServerValue:qm,TEST_ACCESS:Ym}).setMultipleInstances(!0)),e.registerVersion(Mp,Lp)}Jm(vr);const{VITE_FIREBASE_APIKEY:Xm,VITE_FIREBASE_AUTHDOMAIN:Zm,VITE_FIREBASE_PROJECTID:ey,VITE_FIREBASE_STORAGEBUCKET:ty,VITE_FIREBASE_MESSAGINGSENDERID:ny,VITE_FIREBASE_APPID:ry}={VITE_FIREBASE_APIKEY:"AIzaSyAkgyizGGqYkn0ZOxf5JWaCVF0hYkkk2pI",VITE_FIREBASE_AUTHDOMAIN:"chatapp-40c50.firebaseapp.com",VITE_FIREBASE_PROJECTID:"chatapp-40c50",VITE_FIREBASE_STORAGEBUCKET:"chatapp-40c50.appspot.com",VITE_FIREBASE_MESSAGINGSENDERID:"491691456013",VITE_FIREBASE_APPID:"1:491691456013:web:24acc5a070da39281f8744",BASE_URL:"/chat-app-with-firebase/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},iy={apikey:Xm,authDomain:Zm,projectId:ey,storageBucket:ty,messagingSenderId:ny,appId:ry},bl=vr.initializeApp(iy);const oy={key:0,class:"view login"},sy=["onSubmit"],ay={class:"form-inner"},ly=ce("h1",null,"login to ChatApp",-1),uy=ce("label",{for:"username"},"Username",-1),fy=ce("input",{type:"submit",value:"Login"},null,-1),cy={class:"chat-box"},hy={class:"message-inner"},dy={class:"username"},py={class:"content"},vy=["onSubmit"],_y=ce("input",{type:"submit",value:"Send"},null,-1),gy={__name:"App",setup(e){const t={mounted:f=>{f.focus()}},n=Gi(null),r=Gi(""),i=Gi(""),o=pi({username:"",messages:[]}),s=()=>{(r.value!=""||r.value!=null||r.value!==void 0)&&(o.username=r.value,r.value="")},a=()=>{o.username=""},l=()=>{const f=bl.database().ref("messages");if(i.value.trim()===""||i.value===null)return;const c={username:o.username,content:i.value.trim()};f.push(c),i.value="",$l(()=>{u()})},u=()=>{document.documentElement.scrollTop=document.documentElement.scrollHeight};return Ur(n,f=>{f!==null&&u()}),os(()=>{bl.database().ref("messages").on("value",c=>{const h=c.val();let p=[];Object.keys(h).forEach(_=>{p.push({id:_,username:h[_].username,content:h[_].content})}),o.messages=p})}),(f,c)=>o.username.trim()===""||o.username.trim()===null?(kr(),Dr("div",oy,[ce("form",{class:"login-form",onSubmit:xa(s,["prevent"])},[ce("div",ay,[ly,uy,ca(ce("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=h=>r.value=h),placeholder:"Please enter your username..."},null,512),[[Na,r.value],[t]]),fy])],40,sy)])):(kr(),Dr("div",{key:1,class:"view chat",ref_key:"chatContainer",ref:n},[ce("header",null,[ce("button",{class:"logout",onClick:a},"Logout"),ce("h1",null,"Welcome, "+zi(o.username),1)]),ce("section",cy,[(kr(!0),Dr(Ye,null,kh(o.messages,h=>(kr(),Dr("div",{key:h.key,class:ui(h.username==o.username?"message current-user":"message")},[ce("div",hy,[ce("div",dy,zi(h.username),1),ce("div",py,zi(h.content),1)])],2))),128))]),ce("footer",null,[ce("form",{onSubmit:xa(l,["prevent"])},[ca(ce("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=h=>i.value=h),placeholder:"Write a message..."},null,512),[[Na,i.value],[t]]),_y],40,vy)])],512))}};Wd(gy).mount("#app");
