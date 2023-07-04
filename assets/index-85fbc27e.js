(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Xe=(e,t)=>e===t,J=Symbol("solid-proxy"),Q={equals:Xe};let Ge=Te;const T=1,Y=2,Pe={owned:null,cleanups:null,context:null,owner:null};var m=null;let se=null,g=null,x=null,N=null,ee=0;function xe(e,t){const n=g,r=m,s=e.length===0,i=s?Pe:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=s?e:()=>e(()=>S(()=>ne(i)));m=i,g=null;try{return R(o,!0)}finally{g=n,m=r}}function q(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Oe(n,s));return[$e.bind(n),r]}function O(e,t,n){const r=Le(e,t,!1,T);te(r)}function P(e,t,n){n=n?Object.assign({},Q,n):Q;const r=Le(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,te(r),$e.bind(r)}function S(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function Se(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i){i=!1;return}const u=S(()=>t(l,s,o));return s=l,u}}function Ce(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function Je(){return m}function Qe(e,t){const n=m,r=g;m=e,g=null;try{return R(t,!0)}catch(s){ge(s)}finally{m=n,g=r}}function Ye(e){const t=g,n=m;return Promise.resolve().then(()=>{g=t,m=n;let r;return R(e,!1),g=m=null,r?r.done:void 0})}function Ee(e,t){const n=Symbol("context");return{id:n,Provider:tt(n),defaultValue:e}}function he(e){let t;return(t=je(m,e.id))!==void 0?t:e.defaultValue}function de(e){const t=P(e),n=P(()=>le(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function $e(){if(this.sources&&this.state)if(this.state===T)te(this);else{const e=x;x=null,R(()=>Z(this),!1),x=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&R(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=se&&se.running;o&&se.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?x.push(i):N.push(i),i.observers&&Re(i)),o||(i.state=T)}if(x.length>1e6)throw x=[],new Error},!1)),t}function te(e){if(!e.fn)return;ne(e);const t=m,n=g,r=ee;g=m=e,Ze(e,e.value,r),g=n,m=t}function Ze(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(ne),e.owned=null),e.updatedAt=n+1,ge(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function Le(e,t,n,r=T,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Pe&&(m.owned?m.owned.push(i):m.owned=[i]),i}function Ne(e){if(e.state===0)return;if(e.state===Y)return Z(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)te(e);else if(e.state===Y){const r=x;x=null,R(()=>Z(e,t[0]),!1),x=r}}function R(e,t){if(x)return e();let n=!1;t||(x=[]),N?n=!0:N=[],ee++;try{const r=e();return et(n),r}catch(r){n||(N=null),x=null,ge(r)}}function et(e){if(x&&(Te(x),x=null),e)return;const t=N;N=null,t.length&&R(()=>Ge(t),!1)}function Te(e){for(let t=0;t<e.length;t++)Ne(e[t])}function Z(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===T?r!==t&&(!r.updatedAt||r.updatedAt<ee)&&Ne(r):s===Y&&Z(r,t)}}}function Re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Y,n.pure?x.push(n):N.push(n),n.observers&&Re(n))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ge(e){throw e}function je(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:je(e.owner,t):void 0}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=le(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function tt(e,t){return function(r){let s;return O(()=>s=S(()=>(m.context={[e]:r.value},de(()=>r.children))),void 0),s}}function A(e,t){return S(()=>e(t||{}))}function X(){return!0}const ce={get(e,t,n){return t===J?n:e.get(t)},has(e,t){return t===J?!0:e.has(t)},set:X,deleteProperty:X,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:X,deleteProperty:X}},ownKeys(e){return e.keys()}};function ie(e){return(e=typeof e=="function"?e():e)?e:{}}function nt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ue(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&J in o,e[i]=typeof o=="function"?(t=!0,P(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=ie(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in ie(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(ie(e[o])));return[...new Set(i)]}},ce);const n={},r={};let s=!1;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);s=s||i!==0&&!!l.length;for(let u=0,f=l.length;u<f;u++){const c=l[u];if(!(c==="__proto__"||c==="constructor"))if(c in n){const a=r[c],h=Object.getOwnPropertyDescriptor(o,c);a?h.get?a.push(h.get.bind(o)):h.value!==void 0&&a.push(()=>h.value):n[c]===void 0&&(n[c]=h.value)}else{const a=Object.getOwnPropertyDescriptor(o,c);a.get?Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:nt.bind(r[c]=[a.get.bind(o)])}):n[c]=a.value}}}return n}function rt(e,...t){if(J in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},ce));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},ce)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,u=0;for(const f of t)f.includes(s)&&(l=!0,o?r[u][s]=i.value:Object.defineProperty(r[u],s,i)),++u;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}const st=e=>`Stale read from <${e}>.`;function _e(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return P(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?S(()=>s(t?r:()=>{if(!S(n))throw st("Show");return e.when})):s}return e.fallback},void 0,void 0)}const it=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ot=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...it]),lt=new Set(["innerHTML","textContent","innerText","children"]),ct=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ut=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function at(e,t){const n=ut[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ft=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ht={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function dt(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,u=t[s-1].nextSibling,f=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!f){f=new Map;let a=l;for(;a<i;)f.set(n[a],a++)}const c=f.get(t[o]);if(c!=null)if(l<c&&c<i){let a=o,h=1,w;for(;++a<s&&a<i&&!((w=f.get(t[a]))==null||w!==c+h);)h++;if(h>c-l){const b=t[o];for(;l<c;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const we="_$DX_DELEGATE";function gt(e,t,n,r={}){let s;return xe(i=>{s=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function K(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>S(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function ke(e,t=window.document){const n=t[we]||(t[we]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Pt))}}function ae(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function mt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Ie(e,t){t==null?e.removeAttribute("class"):e.className=t}function yt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function pt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(be(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(be(e,l,!0),n[l]=u)}return n}function wt(e,t,n){if(!t)return n?ae(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function bt(e,t={},n,r){const s={};return r||O(()=>s.children=I(e,t.children,s.children)),O(()=>t.ref&&t.ref(e)),O(()=>At(e,t,n,!0,s,!0)),s}function C(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return I(e,t,r,n);O(s=>I(e,t(),s,n),r)}function At(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Ae(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||I(e,t.children);continue}const l=t[o];s[o]=Ae(e,o,l,s[o],n,i)}}function vt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function be(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ae(e,t,n,r,s,i){let o,l,u,f,c;if(t==="style")return wt(e,n,r);if(t==="classList")return pt(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);r&&e.removeEventListener(a,r),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);r&&e.removeEventListener(a,r,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),h=ft.has(a);if(!h&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(a,w)}(h||n)&&(yt(e,a,n,h),h&&ke([a]))}else if(t.slice(0,5)==="attr:")ae(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(u=lt.has(t))||!s&&((f=at(t,e.tagName))||(l=ot.has(t)))||(o=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?Ie(e,n):o&&!l&&!u?e[vt(t)]=n:e[f||t]=n;else{const a=s&&t.indexOf(":")>-1&&ht[t.split(":")[0]];a?mt(e,a,t,n):ae(e,ct[t]||t,n)}return n}function Pt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function I(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=k(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=k(e,n,r);else{if(i==="function")return O(()=>{let l=t();for(;typeof l=="function";)l=l();n=I(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(fe(l,t,n,s))return O(()=>n=I(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=k(e,n,r),o)return n}else u?n.length===0?ve(e,l,r):dt(e,n,l):(n&&k(e),ve(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=k(e,n,r,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function fe(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[i],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=fe(e,l,u)||s;else if(f==="function")if(r){for(;typeof l=="function";)l=l();s=fe(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else e.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function ve(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function k(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Be=!1;const xt=K('<div class="logo">rambu<span class="logo--highlight">.&lt;/dev&gt;'),St=()=>xt(),Ct=K('<svg stroke-width="0"></svg>',2),Et=K("<title></title>",2);function me(e,t){const n=ue(e.a,t),[r,s]=rt(n,["src"]);return(()=>{const i=Ct.cloneNode(!0);return bt(i,ue({get stroke(){return e.a.stroke},get color(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},s,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},get innerHTML(){return e.c},xmlns:"http://www.w3.org/2000/svg"}),!0,!0),C(i,()=>Be,null),C(i,(()=>{const o=P(()=>!!t.title);return()=>o()&&(()=>{const l=Et.cloneNode(!0);return C(l,()=>t.title),l})()})(),null),i})()}function $t(e){return me({a:{viewBox:"0 0 24 24"},c:'<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'},e)}function Ot(e){return me({a:{viewBox:"0 0 24 24"},c:'<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>'},e)}function Lt(e){return me({a:{viewBox:"0 0 24 24"},c:'<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'},e)}const Nt=K(`<div><div class="site__header flex flex--justify-space-between flex--align-center"><div class="socials"><a class="btn btn--link" target="_blank" rel="nofollow" href="https://instagram.com/rambu.vn/" title="rambu's instagram"></a><a class="btn btn--link" target="_blank" rel="nofollow" href="https://github.com/rambuvn/" title="rambu's github"></a><a class="btn btn--link" target="_blank" rel="nofollow" href="https://www.linkedin.com/in/hưng-nguyễn-quang-788ba231/" title="rambu's linkedin"></a></div></div>`),Tt=({children:e,classes:t=""})=>(()=>{const n=Nt(),r=n.firstChild,s=r.firstChild,i=s.firstChild,o=i.nextSibling,l=o.nextSibling;return Ie(n,`site ${t}`),C(r,A(St,{}),s),C(i,A(Ot,{})),C(o,A($t,{})),C(l,A(Lt,{})),C(n,e,null),n})();const Rt=K('<div class="intro-paragraph"><h3>/a WEB Developer</h3><p>is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web (www) applications using a client-server model.'),jt=({title:e})=>A(Tt,{classes:"home flex flex--vertical flex--justify-space-between",get children(){return Rt()}});function _t(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function kt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function It(e){try{return document.querySelector(e)}catch{return null}}function Bt(e,t){const n=It(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Mt(e,t,n,r){let s=!1;const i=l=>typeof l=="string"?{value:l}:l,o=kt(q(i(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&t(l),l));return n&&Ce(n((l=e())=>{s=!0,o[1](i(l)),s=!1})),{signal:o,utils:r}}function Dt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:q({value:""})};return e}function qt(){return Mt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Bt(window.location.hash.slice(1),n)},e=>_t(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Ut(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:u=>{u&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const zt=/^(?:[a-z0-9]+:)?\/\//i,Kt=/^\/+|(\/)\/+$/g;function U(e,t=!1){const n=e.replace(Kt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function G(e,t,n){if(zt.test(t))return;const r=U(e),s=n&&U(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+U(t,!i)}function Ft(e,t){if(e==null)throw new Error(t);return e}function Me(e,t){return U(e).replace(/\/*(\*.*)?$/g,"")+U(t)}function Ht(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Vt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const u=l.split("/").filter(Boolean),f=u.length-o;if(f<0||f>0&&s===void 0&&!t)return null;const c={path:o?"":"/",params:{}},a=h=>n===void 0?void 0:n[h];for(let h=0;h<o;h++){const w=i[h],b=u[h],p=w[0]===":",L=p?w.slice(1):w;if(p&&oe(b,a(L)))c.params[L]=b;else if(p||!oe(b,w))return null;c.path+=`/${b}`}if(s){const h=f?u.slice(-f).join("/"):"";if(oe(h,a(s)))c.params[s]=h;else return null}return c}}function oe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Wt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function De(e){const t=new Map,n=Je();return new Proxy({},{get(r,s){return t.has(s)||Qe(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function qe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return qe(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const Xt=100,Ue=Ee(),re=Ee(),ze=()=>Ft(he(Ue),"Make sure your app is wrapped in a <Router />");let z;const Ke=()=>z||he(re)||ze().base;function Gt(e,t="",n){const{component:r,data:s,children:i}=e,o=!i||Array.isArray(i)&&!i.length,l={key:e,element:r?()=>A(r,{}):()=>{const{element:u}=e;return u===void 0&&n?A(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return Fe(e.path).reduce((u,f)=>{for(const c of qe(f)){const a=Me(t,c),h=o?a:a.split("/*",1)[0];u.push({...l,originalPath:c,pattern:h,matcher:Vt(h,!o,e.matchFilters)})}return u},[])}function Jt(e,t=0){return{routes:e,score:Wt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function Fe(e){return Array.isArray(e)?e:[e]}function He(e,t="",n,r=[],s=[]){const i=Fe(e);for(let o=0,l=i.length;o<l;o++){const u=i[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const f=Gt(u,t,n);for(const c of f){r.push(c);const a=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!a)He(u.children,c.pattern,n,r,s);else{const h=Jt([...r],s.length);s.push(h)}r.pop()}}}return r.length?s:s.sort((o,l)=>l.score-o.score)}function Qt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Yt(e,t){const n=new URL("http://sar"),r=P(u=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),u}},n,{equals:(u,f)=>u.href===f.href}),s=P(()=>r().pathname),i=P(()=>r().search,!0),o=P(()=>r().hash),l=P(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:De(Se(i,()=>Ht(r())))}}function Zt(e,t="",n,r){const{signal:[s,i],utils:o={}}=Dt(e),l=o.parsePath||(y=>y),u=o.renderPath||(y=>y),f=o.beforeLeave||Ut(),c=G("",t),a=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&i({value:c,replace:!0,scroll:!1});const[h,w]=q(!1),b=async y=>{w(!0);try{await Ye(y)}finally{w(!1)}},[p,L]=q(s().value),[j,F]=q(s().state),H=Yt(p,j),B=[],_={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(y){return G(c,y)}};if(n)try{z=_,_.data=n({data:void 0,params:{},location:H,navigate:pe(_)})}finally{z=void 0}function ye(y,d,v){S(()=>{if(typeof d=="number"){d&&(o.go?f.confirm(d,v)&&o.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:V,resolve:W,scroll:E,state:M}={replace:!1,resolve:!0,scroll:!0,...v},$=W?y.resolvePath(d):G("",d);if($===void 0)throw new Error(`Path '${d}' is not a routable path`);if(B.length>=Xt)throw new Error("Too many redirects");const D=p();if(($!==D||M!==j())&&!Be){if(f.confirm($,v)){const We=B.push({value:D,replace:V,scroll:E,state:j()});b(()=>{L($),F(M)}).then(()=>{B.length===We&&Ve({value:$,state:M})})}}})}function pe(y){return y=y||he(re)||_,(d,v)=>ye(y,d,v)}function Ve(y){const d=B[0];d&&((y.value!==d.value||y.state!==d.state)&&i({...y,replace:d.replace,scroll:d.scroll}),B.length=0)}O(()=>{const{value:y,state:d}=s();S(()=>{y!==p()&&b(()=>{L(y),F(d)})})});{let y=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const v=d.composedPath().find(D=>D instanceof Node&&D.nodeName.toUpperCase()==="A");if(!v||!v.hasAttribute("link"))return;const V=v.href;if(v.target||!V&&!v.hasAttribute("state"))return;const W=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||W&&W.includes("external"))return;const E=new URL(V);if(E.origin!==window.location.origin||c&&E.pathname&&!E.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const M=l(E.pathname+E.search+E.hash),$=v.getAttribute("state");d.preventDefault(),ye(_,M,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:$&&JSON.parse($)})};var cn=y;ke(["click"]),document.addEventListener("click",y),Ce(()=>document.removeEventListener("click",y))}return{base:_,out:a,location:H,isRouting:h,renderPath:u,parsePath:l,navigatorFactory:pe,beforeLeave:f}}function en(e,t,n,r,s){const{base:i,location:o,navigatorFactory:l}=e,{pattern:u,element:f,preload:c,data:a}=r().route,h=P(()=>r().path);c&&c();const w={parent:t,pattern:u,get child(){return n()},path:h,params:s,data:t.data,outlet:f,resolvePath(b){return G(i.path(),b,h())}};if(a)try{z=w,w.data=a({data:t.data,params:s,location:o,navigate:l(w)})}finally{z=void 0}return w}const tn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,o=t||qt(),l=Zt(o,r,s);return A(Ue.Provider,{value:l,get children(){return e.children}})},nn=e=>{const t=ze(),n=Ke(),r=de(()=>e.children),s=P(()=>He(r(),Me(n.pattern,e.base||""),sn)),i=P(()=>Qt(s(),t.location.pathname)),o=De(()=>{const c=i(),a={};for(let h=0;h<c.length;h++)Object.assign(a,c[h].params);return a});t.out&&t.out.matches.push(i().map(({route:c,path:a,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:a,params:h})));const l=[];let u;const f=P(Se(i,(c,a,h)=>{let w=a&&c.length===a.length;const b=[];for(let p=0,L=c.length;p<L;p++){const j=a&&a[p],F=c[p];h&&j&&F.route.key===j.route.key?b[p]=h[p]:(w=!1,l[p]&&l[p](),xe(H=>{l[p]=H,b[p]=en(t,b[p-1]||n,()=>f()[p+1],()=>i()[p],o)}))}return l.splice(c.length).forEach(p=>p()),h&&w?h:(u=b[0],b)}));return A(_e,{get when(){return f()&&u},keyed:!0,children:c=>A(re.Provider,{value:c,get children(){return c.outlet()}})})},rn=e=>{const t=de(()=>e.children);return ue(e,{get children(){return t()}})},sn=()=>{const e=Ke();return A(_e,{get when(){return e.child},keyed:!0,children:t=>A(re.Provider,{value:t,get children(){return t.outlet()}})})};const on=()=>A(tn,{get children(){return A(nn,{get children(){return A(rn,{path:"/",get element(){return A(jt,{})}})}})}}),ln=document.getElementById("root");gt(()=>A(on,{}),ln);