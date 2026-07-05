import{r as e,t}from"./rolldown-runtime-CpWojdLp.js";import{$ as n,A as r,B as i,D as a,H as o,N as s,O as c,P as l,Q as u,St as d,Y as f,_ as p,mt as m,y as h,z as g}from"./vue.runtime.esm-bundler-CDOS7UwO.js";import{l as _}from"./app-Dkt8zQC6.js";import{$ as v,B as y,C as b,E as x,F as S,G as C,I as w,M as T,O as E,Ot as ee,P as te,Pt as ne,R as re,S as ie,U as ae,W as oe,X as se,Y as D,Z as O,_ as ce,b as le,bt as ue,c as de,d as k,dt as fe,et as pe,g as me,gt as A,ht as he,lt as j,m as M,mt as ge,pt as _e,rt as N,t as P,x as ve,y as ye}from"./dist-cJx8nSHz.js";import{i as be,n as xe,o as Se,r as Ce}from"./dist-BVjo6ozp.js";import{n as we}from"./dist-C0dB2VQJ.js";import{C as Te,S as Ee,_ as De,a as Oe,b as ke,c as Ae,d as je,f as Me,g as Ne,h as Pe,i as F,l as Fe,m as Ie,n as Le,o as Re,p as ze,r as Be,s as Ve,t as He,u as Ue,v as We,w as Ge,x as Ke,y as qe}from"./debounce--VJPoFOS.js";import{a as Je,c as Ye,d as Xe,i as Ze,l as Qe,m as $e,n as et,r as tt,t as nt,u as rt}from"./dist-w5Fo4Cas.js";import{t as it}from"./_plugin-vue_export-helper-CLgcYIH-.js";function at(e){return Array.isArray(e)}function ot(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function st(e){return e&&typeof e==`object`?e.op===`add`:!1}function ct(e){return e&&typeof e==`object`?e.op===`remove`:!1}function lt(e){return e&&typeof e==`object`?e.op===`replace`:!1}function ut(e){return e&&typeof e==`object`?e.op===`copy`:!1}function dt(e){return e&&typeof e==`object`?e.op===`move`:!1}function ft(e,t){return JSON.stringify(e)===JSON.stringify(t)}function pt(e,t){return e===t}function mt(e){return e.slice(0,e.length-1)}function ht(e){return e[e.length-1]}function gt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:pt;if(e.length<t.length)return!1;for(let r=0;r<t.length;r++)if(!n(e[r],t[r]))return!1;return!0}function _t(e){return typeof e==`object`&&!!e}function vt(e){if(at(e)){let t=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}if(ot(e)){let t={...e};return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}return e}function yt(e,t,n){if(e[t]===n)return e;let r=vt(e);return r[t]=n,r}function I(e,t){let n=e,r=0;for(;r<t.length;)n=ot(n)?n[t[r]]:at(n)?n[Number.parseInt(t[r])]:void 0,r++;return n}function bt(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return n;let i=t[0],a=bt(e?e[i]:void 0,t.slice(1),n,r);if(ot(e)||at(e))return yt(e,i,a);if(r){let e=xt.test(i)?[]:{};return e[i]=a,e}throw Error(`Path does not exist`)}var xt=/^\d+$/;function St(e,t,n){if(t.length===0)return n(e);if(!_t(e))throw Error(`Path doesn't exist`);let r=t[0];return yt(e,r,St(e[r],t.slice(1),n))}function Ct(e,t){if(t.length===0)return e;if(!_t(e))throw Error(`Path does not exist`);if(t.length===1){let n=t[0];if(!(n in e))return e;let r=vt(e);return at(r)&&r.splice(Number.parseInt(n),1),ot(r)&&delete r[n],r}let n=t[0];return yt(e,n,Ct(e[n],t.slice(1)))}function wt(e,t,n){let r=t.slice(0,t.length-1),i=t[t.length-1];return St(e,r,e=>{if(!Array.isArray(e))throw TypeError(`Array expected at path ${JSON.stringify(r)}`);let t=vt(e);return t.splice(Number.parseInt(i),0,n),t})}function Tt(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:Tt(e[t[0]],t.slice(1))}function Et(e){let t=e.split(`/`);return t.shift(),t.map(e=>e.replace(/~1/g,`/`).replace(/~0/g,`~`))}function Dt(e){return e.map(Ot).join(``)}function Ot(e){return`/${String(e).replace(/~/g,`~0`).replace(/\//g,`~1`)}`}function kt(e,t){return e+Ot(t)}function At(e,t,n){let r=e;for(let e=0;e<t.length;e++){zt(t[e]);let i=t[e];if(n?.before){let e=n.before(r,i);if(e!==void 0){if(e.document!==void 0&&(r=e.document),e.json!==void 0)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`);e.operation!==void 0&&(i=e.operation)}}let a=r,o=Bt(r,i.path);if(i.op===`add`)r=Nt(r,o,i.value);else if(i.op===`remove`)r=Mt(r,o);else if(i.op===`replace`)r=jt(r,o,i.value);else if(i.op===`copy`)r=Pt(r,o,Vt(i.from));else if(i.op===`move`)r=Ft(r,o,Vt(i.from));else if(i.op===`test`)It(r,o,i.value);else throw Error(`Unknown JSONPatch operation ${JSON.stringify(i)}`);if(n?.after){let e=n.after(r,i,a);e!==void 0&&(r=e)}}return r}function jt(e,t,n){return Tt(e,t)?bt(e,t,n):e}function Mt(e,t){return Ct(e,t)}function Nt(e,t,n){return Lt(e,t)?wt(e,t,n):bt(e,t,n)}function Pt(e,t,n){let r=I(e,n);return Lt(e,t)?wt(e,t,r):bt(e,t,r)}function Ft(e,t,n){let r=I(e,n),i=Ct(e,n);return Lt(i,t)?wt(i,t,r):bt(i,t,r)}function It(e,t,n){if(n===void 0)throw Error(`Test failed: no value provided (path: "${Dt(t)}")`);if(!Tt(e,t))throw Error(`Test failed: path not found (path: "${Dt(t)}")`);if(!ft(I(e,t),n))throw Error(`Test failed, value differs (path: "${Dt(t)}")`)}function Lt(e,t){if(t.length===0)return!1;let n=I(e,mt(t));return Array.isArray(n)}function Rt(e,t){if(ht(t)!==`-`)return t;let n=mt(t),r=I(e,n);return n.concat(r.length)}function zt(e){if(![`add`,`remove`,`replace`,`copy`,`move`,`test`].includes(e.op))throw Error(`Unknown JSONPatch op ${JSON.stringify(e.op)}`);if(typeof e.path!=`string`)throw Error(`Required property "path" missing or not a string in operation ${JSON.stringify(e)}`);if((e.op===`copy`||e.op===`move`)&&typeof e.from!=`string`)throw Error(`Required property "from" missing or not a string in operation ${JSON.stringify(e)}`)}function Bt(e,t){return Rt(e,Et(t))}function Vt(e){return Et(e)}function Ht(e,t,n){let r=[];return At(e,t,{before:(e,t)=>{let i,a=Bt(e,t.path);if(t.op===`add`)i=Gt(e,a);else if(t.op===`remove`)i=Wt(e,a);else if(t.op===`replace`)i=Ut(e,a);else if(t.op===`copy`)i=Kt(e,a);else if(t.op===`move`)i=qt(e,a,Vt(t.from));else if(t.op===`test`)i=[];else throw Error(`Unknown JSONPatch operation ${JSON.stringify(t)}`);let o;if(n?.before){let r=n.before(e,t,i);if(r?.revertOperations&&(i=r.revertOperations),r?.document&&(o=r.document),r?.json)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`)}if(r=i.concat(r),o!==void 0)return{document:o}}}),r}function Ut(e,t){return Tt(e,t)?[{op:`replace`,path:Dt(t),value:I(e,t)}]:[]}function Wt(e,t){return[{op:`add`,path:Dt(t),value:I(e,t)}]}function Gt(e,t){return Lt(e,t)||!Tt(e,t)?[{op:`remove`,path:Dt(t)}]:Ut(e,t)}function Kt(e,t){return Gt(e,t)}function qt(e,t,n){if(t.length<n.length&&gt(n,t))return[{op:`replace`,path:Dt(t),value:e}];let r={op:`move`,from:Dt(t),path:Dt(n)};return!Lt(e,t)&&Tt(e,t)?[r,...Wt(e,t)]:[r]}var Jt=t((e=>{var t={b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`,'"':`"`,"/":`/`,"\\":`\\`},n=97;e.parse=function(e,r,i){var o={},s=0,c=0,l=0,u=i&&i.bigint&&typeof BigInt<`u`;return{data:d(``,!0),pointers:o};function d(t,n){f();var r;S(t,`value`);var i=v();switch(i){case`t`:_(`rue`),r=!0;break;case`f`:_(`alse`),r=!1;break;case`n`:_(`ull`),r=null;break;case`"`:r=p();break;case`[`:r=h(t);break;case`{`:r=g(t);break;default:y(),`-0123456789`.indexOf(i)>=0?r=m():T()}return S(t,`valueEnd`),f(),n&&l<e.length&&T(),r}function f(){loop:for(;l<e.length;){switch(e[l]){case` `:c++;break;case`	`:c+=4;break;case`\r`:c=0;break;case`
`:c=0,s++;break;default:break loop}l++}}function p(){for(var e=``,n;n=v(),n!=`"`;)n==`\\`?(n=v(),n in t?e+=t[n]:n==`u`?e+=b():E()):e+=n;return e}function m(){var t=``,n=!0;e[l]==`-`&&(t+=v()),t+=e[l]==`0`?v():x(),e[l]==`.`&&(t+=v()+x(),n=!1),(e[l]==`e`||e[l]==`E`)&&(t+=v(),(e[l]==`+`||e[l]==`-`)&&(t+=v()),t+=x(),n=!1);var r=+t;return u&&n&&(r>2**53-1||r<-(2**53-1))?BigInt(t):r}function h(e){f();var t=[],n=0;if(v()==`]`)return t;for(y();;){var r=e+`/`+n;t.push(d(r)),f();var i=v();if(i==`]`)break;i!=`,`&&E(),f(),n++}return t}function g(e){f();var t={};if(v()==`}`)return t;for(y();;){var n=w();v()!=`"`&&E();var r=p(),i=e+`/`+a(r);C(i,`key`,n),S(i,`keyEnd`),f(),v()!=`:`&&E(),f(),t[r]=d(i),f();var o=v();if(o==`}`)break;o!=`,`&&E(),f()}return t}function _(e){for(var t=0;t<e.length;t++)v()!==e[t]&&E()}function v(){ee();var t=e[l];return l++,c++,t}function y(){l--,c--}function b(){for(var e=4,t=0;e--;){t<<=4;var r=v().toLowerCase();r>=`a`&&r<=`f`?t+=r.charCodeAt()-n+10:r>=`0`&&r<=`9`?t+=+r:E()}return String.fromCharCode(t)}function x(){for(var t=``;e[l]>=`0`&&e[l]<=`9`;)t+=v();if(t.length)return t;ee(),T()}function S(e,t){C(e,t,w())}function C(e,t,n){o[e]=o[e]||{},o[e][t]=n}function w(){return{line:s,column:c,pos:l}}function T(){throw SyntaxError(`Unexpected token `+e[l]+` in JSON at position `+l)}function E(){y(),T()}function ee(){if(l>=e.length)throw SyntaxError(`Unexpected end of JSON input`)}};var r=/~/g,i=/\//g;function a(e){return e.replace(r,`~0`).replace(i,`~1`)}})),Yt=class extends Error{constructor(e,t){super(`${e} at position ${t}`),this.position=t}},Xt=32,Zt=10,Qt=9,$t=13,en=160,tn=6158,nn=8192,rn=8203,an=8239,on=8287,sn=12288,cn=65279;function ln(e){return/^[0-9A-Fa-f]$/.test(e)}function un(e){return e>=`0`&&e<=`9`}function dn(e){return e>=` `}function fn(e){return`,:[]/{}()
+`.includes(e)}function pn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`}function mn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`||e>=`0`&&e<=`9`}var hn=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,gn=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function _n(e){return`,[]/{}
+`.includes(e)}function vn(e){return wn(e)||yn.test(e)}var yn=/^[[{\w-]$/;function bn(e){return e===`
`||e===`\r`||e===`	`||e===`\b`||e===`\f`}function xn(e,t){let n=e.charCodeAt(t);return n===Xt||n===Zt||n===Qt||n===$t}function Sn(e,t){let n=e.charCodeAt(t);return n===Xt||n===Qt||n===$t}function Cn(e,t){let n=e.charCodeAt(t);return n===en||n===tn||n>=nn&&n<=rn||n===an||n===on||n===sn||n===cn}function wn(e){return Tn(e)||Dn(e)}function Tn(e){return e===`"`||e===`“`||e===`”`}function En(e){return e===`"`}function Dn(e){return e===`'`||e===`‘`||e===`’`||e==="`"||e===`´`}function On(e){return e===`'`}function kn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=e.lastIndexOf(t);return r===-1?e:e.substring(0,r)+(n?``:e.substring(r+1))}function An(e,t){let n=e.length;if(!xn(e,n-1))return e+t;for(;xn(e,n-1);)n--;return e.substring(0,n)+t+e.substring(n)}function jn(e,t,n){return e.substring(0,t)+e.substring(t+n)}function Mn(e){return/[,\n][ \t\r]*$/.test(e)}var Nn={"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},Pn={'"':`"`,"\\":`\\`,"/":`/`,b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`};function Fn(e){let t=0,n=``;c(["```","[```","{```"]),i()||ne(),c(["```","```]","```}"]);let r=u(`,`);for(r&&a(),vn(e[t])&&Mn(n)?(r||(n=An(n,`,`)),g()):r&&(n=kn(n,`,`));e[t]===`}`||e[t]===`]`;)t++,a();if(t>=e.length)return n;te();function i(){a();let e=m()||h()||_()||y()||b()||S(!1)||C();return a(),e}function a(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=t,r=o(e);do r=s(),r&&=o(e);while(r);return t>n}function o(r){let i=r?xn:Sn,a=``;for(;;)if(i(e,t))a+=e[t],t++;else if(Cn(e,t))a+=` `,t++;else break;return a.length>0?(n+=a,!0):!1}function s(){if(e[t]===`/`&&e[t+1]===`*`){for(;t<e.length&&!In(e,t);)t++;return t+=2,!0}if(e[t]===`/`&&e[t+1]===`/`){for(;t<e.length&&e[t]!==`
`;)t++;return!0}return!1}function c(n){if(l(n)){if(pn(e[t]))for(;t<e.length&&mn(e[t]);)t++;return a(),!0}return!1}function l(n){o(!0);for(let r of n){let n=t+r.length;if(e.slice(t,n)===r)return t=n,!0}return!1}function u(r){return e[t]===r?(n+=e[t],t++,!0):!1}function d(n){return e[t]===n?(t++,!0):!1}function f(){return d(`\\`)}function p(){return a(),e[t]===`.`&&e[t+1]===`.`&&e[t+2]===`.`?(t+=3,a(),d(`,`),!0):!1}function m(){if(e[t]===`{`){n+=`{`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`}`;){let o;if(r?(o=!0,r=!1):(o=u(`,`),o||(n=An(n,`,`)),a()),p(),!(_()||S(!0))){e[t]===`}`||e[t]===`{`||e[t]===`]`||e[t]===`[`||e[t]===void 0?n=kn(n,`,`):re();break}a();let s=u(`:`),c=t>=e.length;s||(vn(e[t])||c?n=An(n,`:`):ie()),i()||(s||c?n+=`null`:ie())}return e[t]===`}`?(n+=`}`,t++):n=An(n,`}`),!0}return!1}function h(){if(e[t]===`[`){n+=`[`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`]`;)if(r?r=!1:u(`,`)||(n=An(n,`,`)),p(),!i()){n=kn(n,`,`);break}return e[t]===`]`?(n+=`]`,t++):n=An(n,`]`),!0}return!1}function g(){let e=!0,t=!0;for(;t;)e?e=!1:u(`,`)||(n=An(n,`,`)),t=i();t||(n=kn(n,`,`)),n=`[\n${n}\n]`}function _(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=e[t]===`\\`;if(o&&=(t++,!0),wn(e[t])){let s=En(e[t])?En:On(e[t])?On:Dn(e[t])?Dn:Tn,c=t,l=n.length,u=`"`;for(t++;;){if(t>=e.length){let i=w(t-1);return!r&&fn(e.charAt(i))?(t=c,n=n.substring(0,l),_(!0)):(u=An(u,`"`),n+=u,!0)}if(t===i)return u=An(u,`"`),n+=u,!0;if(s(e[t])){let i=t,o=u.length;if(u+=`"`,t++,n+=u,a(!1),r||t>=e.length||fn(e[t])||wn(e[t])||un(e[t]))return v(),!0;let s=w(i-1),d=e.charAt(s);if(d===`,`)return t=c,n=n.substring(0,l),_(!1,s);if(fn(d))return t=c,n=n.substring(0,l),_(!0);n=n.substring(0,l),t=i+1,u=`${u.substring(0,o)}\\${u.substring(o)}`}else if(r&&_n(e[t])){if(e[t-1]===`:`&&hn.test(e.substring(c+1,t+2)))for(;t<e.length&&gn.test(e[t]);)u+=e[t],t++;return u=An(u,`"`),n+=u,v(),!0}else if(e[t]===`\\`){let n=e.charAt(t+1);if(Pn[n]!==void 0)u+=e.slice(t,t+2),t+=2;else if(n===`u`){let n=2;for(;n<6&&ln(e[t+n]);)n++;n===6?(u+=e.slice(t,t+6),t+=6):t+n>=e.length?t=e.length:ae()}else n===`
`?(u+=`\\n`,t+=2):(u+=n,t+=2)}else{let n=e.charAt(t);n===`"`&&e[t-1]!==`\\`?(u+=`\\${n}`,t++):bn(n)?(u+=Nn[n],t++):(dn(n)||ee(n),u+=n,t++)}o&&f()}}return!1}function v(){let r=!1;for(a();e[t]===`+`;){r=!0,t++,a(),n=kn(n,`"`,!0);let e=n.length;n=_()?jn(n,e,1):An(n,`"`)}return r}function y(){let r=t;if(e[t]===`-`){if(t++,T())return E(r),!0;if(!un(e[t]))return t=r,!1}for(;un(e[t]);)t++;if(e[t]===`.`){if(t++,T())return E(r),!0;if(!un(e[t]))return t=r,!1;for(;un(e[t]);)t++}if(e[t]===`e`||e[t]===`E`){if(t++,(e[t]===`-`||e[t]===`+`)&&t++,T())return E(r),!0;if(!un(e[t]))return t=r,!1;for(;un(e[t]);)t++}if(!T())return t=r,!1;if(t>r){let i=e.slice(r,t),a=/^0\d/.test(i);return n+=a?`"${i}"`:i,!0}return!1}function b(){return x(`true`,`true`)||x(`false`,`false`)||x(`null`,`null`)||x(`True`,`true`)||x(`False`,`false`)||x(`None`,`null`)}function x(r,i){return e.slice(t,t+r.length)===r?(n+=i,t+=r.length,!0):!1}function S(r){let a=t;if(pn(e[t])){for(;t<e.length&&mn(e[t]);)t++;let n=t;for(;xn(e,n);)n++;if(e[n]===`(`)return t=n+1,i(),e[t]===`)`&&(t++,e[t]===`;`&&t++),!0}for(;t<e.length&&!_n(e[t])&&!wn(e[t])&&(!r||e[t]!==`:`);)t++;if(e[t-1]===`:`&&hn.test(e.substring(a,t+2)))for(;t<e.length&&gn.test(e[t]);)t++;if(t>a){for(;xn(e,t-1)&&t>0;)t--;let r=e.slice(a,t);return n+=r===`undefined`?`null`:JSON.stringify(r),e[t]===`"`&&t++,!0}}function C(){if(e[t]===`/`){let r=t;for(t++;t<e.length&&(e[t]!==`/`||e[t-1]===`\\`);)t++;return t++,n+=JSON.stringify(e.substring(r,t)),!0}}function w(t){let n=t;for(;n>0&&xn(e,n);)n--;return n}function T(){return t>=e.length||fn(e[t])||xn(e,t)}function E(r){n+=`${e.slice(r,t)}0`}function ee(e){throw new Yt(`Invalid character ${JSON.stringify(e)}`,t)}function te(){throw new Yt(`Unexpected character ${JSON.stringify(e[t])}`,t)}function ne(){throw new Yt(`Unexpected end of json string`,e.length)}function re(){throw new Yt(`Object key expected`,t)}function ie(){throw new Yt(`Colon expected`,t)}function ae(){throw new Yt(`Invalid unicode character "${e.slice(t,t+6)}"`,t)}}function In(e,t){return e[t]===`*`&&e[t+1]===`/`}var Ln=1/0,Rn=17976931348623157e292;function zn(e){return e?(e=Le(e),e===Ln||e===-Ln?(e<0?-1:1)*Rn:e===e?e:0):e===0?e:0}function Bn(e){var t=zn(e),n=t%1;return t===t?n?t-n:t:0}function Vn(e){return e}var Hn=ze(Ee,`WeakMap`),Un=Object.create,Wn=function(){function e(){}return function(t){if(!Ne(t))return{};if(Un)return Un(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Gn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Kn(){}function qn(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}var Jn=800,Yn=16,Xn=Date.now;function Zn(e){var t=0,n=0;return function(){var r=Xn(),i=Yn-(r-n);if(n=r,i>0){if(++t>=Jn)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Qn(e){return function(){return e}}var $n=function(){try{var e=ze(Object,`defineProperty`);return e({},``,{}),e}catch{}}(),er=Zn($n?function(e,t){return $n(e,`toString`,{configurable:!0,enumerable:!1,value:Qn(t),writable:!0})}:Vn);function tr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var nr=9007199254740991,rr=/^(?:0|[1-9]\d*)$/;function ir(e,t){var n=typeof e;return t??=nr,!!t&&(n==`number`||n!=`symbol`&&rr.test(e))&&e>-1&&e%1==0&&e<t}function ar(e,t,n){t==`__proto__`&&$n?$n(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var or=Object.prototype.hasOwnProperty;function sr(e,t,n){var r=e[t];(!(or.call(e,t)&&Me(r,n))||n===void 0&&!(t in e))&&ar(e,t,n)}function cr(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?ar(n,s,c):sr(n,s,c)}return n}var lr=Math.max;function ur(e,t,n){return t=lr(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=lr(r.length-t,0),o=Array(a);++i<a;)o[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(o),Gn(e,this,s)}}function dr(e,t){return er(ur(e,t,Vn),e+``)}var fr=9007199254740991;function pr(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=fr}function mr(e){return e!=null&&pr(e.length)&&!Pe(e)}function hr(e,t,n){if(!Ne(n))return!1;var r=typeof t;return(r==`number`?mr(n)&&ir(t,n.length):r==`string`&&t in n)?Me(n[t],e):!1}var gr=Object.prototype;function _r(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||gr)}function vr(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var yr=`[object Arguments]`;function br(e){return qe(e)&&ke(e)==yr}var xr=Object.prototype,Sr=xr.hasOwnProperty,Cr=xr.propertyIsEnumerable,wr=br(function(){return arguments}())?br:function(e){return qe(e)&&Sr.call(e,`callee`)&&!Cr.call(e,`callee`)};function Tr(){return!1}var Er=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Dr=Er&&typeof module==`object`&&module&&!module.nodeType&&module,Or=Dr&&Dr.exports===Er?Ee.Buffer:void 0,kr=(Or?Or.isBuffer:void 0)||Tr,Ar=`[object Arguments]`,jr=`[object Array]`,Mr=`[object Boolean]`,Nr=`[object Date]`,Pr=`[object Error]`,Fr=`[object Function]`,Ir=`[object Map]`,Lr=`[object Number]`,Rr=`[object Object]`,zr=`[object RegExp]`,Br=`[object Set]`,Vr=`[object String]`,Hr=`[object WeakMap]`,Ur=`[object ArrayBuffer]`,Wr=`[object DataView]`,Gr=`[object Float32Array]`,Kr=`[object Float64Array]`,qr=`[object Int8Array]`,Jr=`[object Int16Array]`,Yr=`[object Int32Array]`,Xr=`[object Uint8Array]`,Zr=`[object Uint8ClampedArray]`,Qr=`[object Uint16Array]`,$r=`[object Uint32Array]`,ei={};ei[Gr]=ei[Kr]=ei[qr]=ei[Jr]=ei[Yr]=ei[Xr]=ei[Zr]=ei[Qr]=ei[$r]=!0,ei[Ar]=ei[jr]=ei[Ur]=ei[Mr]=ei[Wr]=ei[Nr]=ei[Pr]=ei[Fr]=ei[Ir]=ei[Lr]=ei[Rr]=ei[zr]=ei[Br]=ei[Vr]=ei[Hr]=!1;function ti(e){return qe(e)&&pr(e.length)&&!!ei[ke(e)]}function ni(e){return function(t){return e(t)}}var ri=typeof exports==`object`&&exports&&!exports.nodeType&&exports,ii=ri&&typeof module==`object`&&module&&!module.nodeType&&module,ai=ii&&ii.exports===ri&&Te.process,oi=function(){try{return ii&&ii.require&&ii.require(`util`).types||ai&&ai.binding&&ai.binding(`util`)}catch{}}(),si=oi&&oi.isTypedArray,ci=si?ni(si):ti,li=Object.prototype.hasOwnProperty;function ui(e,t){var n=Ge(e),r=!n&&wr(e),i=!n&&!r&&kr(e),a=!n&&!r&&!i&&ci(e),o=n||r||i||a,s=o?vr(e.length,String):[],c=s.length;for(var l in e)(t||li.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||ir(l,c)))&&s.push(l);return s}function di(e,t){return function(n){return e(t(n))}}var fi=di(Object.keys,Object),pi=Object.prototype.hasOwnProperty;function mi(e){if(!_r(e))return fi(e);var t=[];for(var n in Object(e))pi.call(e,n)&&n!=`constructor`&&t.push(n);return t}function hi(e){return mr(e)?ui(e):mi(e)}function gi(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var _i=Object.prototype.hasOwnProperty;function vi(e){if(!Ne(e))return gi(e);var t=_r(e),n=[];for(var r in e)r==`constructor`&&(t||!_i.call(e,r))||n.push(r);return n}function yi(e){return mr(e)?ui(e,!0):vi(e)}function bi(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var xi=Ke?Ke.isConcatSpreadable:void 0;function Si(e){return Ge(e)||wr(e)||!!(xi&&e&&e[xi])}function Ci(e,t,n,r,i){var a=-1,o=e.length;for(n||=Si,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?Ci(s,t-1,n,r,i):bi(i,s):r||(i[i.length]=s)}return i}var wi=di(Object.getPrototypeOf,Object);function Ti(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}function Ei(){this.__data__=new je,this.size=0}function Di(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Oi(e){return this.__data__.get(e)}function ki(e){return this.__data__.has(e)}var Ai=200;function ji(e,t){var n=this.__data__;if(n instanceof je){var r=n.__data__;if(!Ue||r.length<Ai-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Fe(r)}return n.set(e,t),this.size=n.size,this}function Mi(e){var t=this.__data__=new je(e);this.size=t.size}Mi.prototype.clear=Ei,Mi.prototype.delete=Di,Mi.prototype.get=Oi,Mi.prototype.has=ki,Mi.prototype.set=ji;function Ni(e,t){return e&&cr(t,hi(t),e)}function Pi(e,t){return e&&cr(t,yi(t),e)}var Fi=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Ii=Fi&&typeof module==`object`&&module&&!module.nodeType&&module,Li=Ii&&Ii.exports===Fi?Ee.Buffer:void 0,Ri=Li?Li.allocUnsafe:void 0;function zi(e,t){if(t)return e.slice();var n=e.length,r=Ri?Ri(n):new e.constructor(n);return e.copy(r),r}function Bi(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function Vi(){return[]}var Hi=Object.prototype.propertyIsEnumerable,Ui=Object.getOwnPropertySymbols,Wi=Ui?function(e){return e==null?[]:(e=Object(e),Bi(Ui(e),function(t){return Hi.call(e,t)}))}:Vi;function Gi(e,t){return cr(e,Wi(e),t)}var Ki=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)bi(t,Wi(e)),e=wi(e);return t}:Vi;function qi(e,t){return cr(e,Ki(e),t)}function Ji(e,t,n){var r=t(e);return Ge(e)?r:bi(r,n(e))}function Yi(e){return Ji(e,hi,Wi)}function Xi(e){return Ji(e,yi,Ki)}var Zi=ze(Ee,`DataView`),Qi=ze(Ee,`Promise`),$i=ze(Ee,`Set`),ea=`[object Map]`,ta=`[object Object]`,na=`[object Promise]`,ra=`[object Set]`,ia=`[object WeakMap]`,aa=`[object DataView]`,oa=Ie(Zi),sa=Ie(Ue),ca=Ie(Qi),la=Ie($i),ua=Ie(Hn),da=ke;(Zi&&da(new Zi(new ArrayBuffer(1)))!=aa||Ue&&da(new Ue)!=ea||Qi&&da(Qi.resolve())!=na||$i&&da(new $i)!=ra||Hn&&da(new Hn)!=ia)&&(da=function(e){var t=ke(e),n=t==ta?e.constructor:void 0,r=n?Ie(n):``;if(r)switch(r){case oa:return aa;case sa:return ea;case ca:return na;case la:return ra;case ua:return ia}return t});var fa=da,pa=Object.prototype.hasOwnProperty;function ma(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&pa.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var ha=Ee.Uint8Array;function ga(e){var t=new e.constructor(e.byteLength);return new ha(t).set(new ha(e)),t}function _a(e,t){var n=t?ga(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var va=/\w*$/;function ya(e){var t=new e.constructor(e.source,va.exec(e));return t.lastIndex=e.lastIndex,t}var ba=Ke?Ke.prototype:void 0,xa=ba?ba.valueOf:void 0;function Sa(e){return xa?Object(xa.call(e)):{}}function Ca(e,t){var n=t?ga(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var wa=`[object Boolean]`,Ta=`[object Date]`,Ea=`[object Map]`,Da=`[object Number]`,Oa=`[object RegExp]`,ka=`[object Set]`,Aa=`[object String]`,ja=`[object Symbol]`,Ma=`[object ArrayBuffer]`,Na=`[object DataView]`,Pa=`[object Float32Array]`,Fa=`[object Float64Array]`,Ia=`[object Int8Array]`,La=`[object Int16Array]`,Ra=`[object Int32Array]`,za=`[object Uint8Array]`,Ba=`[object Uint8ClampedArray]`,Va=`[object Uint16Array]`,Ha=`[object Uint32Array]`;function Ua(e,t,n){var r=e.constructor;switch(t){case Ma:return ga(e);case wa:case Ta:return new r(+e);case Na:return _a(e,n);case Pa:case Fa:case Ia:case La:case Ra:case za:case Ba:case Va:case Ha:return Ca(e,n);case Ea:return new r;case Da:case Aa:return new r(e);case Oa:return ya(e);case ka:return new r;case ja:return Sa(e)}}function Wa(e){return typeof e.constructor==`function`&&!_r(e)?Wn(wi(e)):{}}var Ga=`[object Map]`;function Ka(e){return qe(e)&&fa(e)==Ga}var qa=oi&&oi.isMap,Ja=qa?ni(qa):Ka,Ya=`[object Set]`;function Xa(e){return qe(e)&&fa(e)==Ya}var Za=oi&&oi.isSet,Qa=Za?ni(Za):Xa,$a=1,eo=2,to=4,no=`[object Arguments]`,ro=`[object Array]`,io=`[object Boolean]`,ao=`[object Date]`,oo=`[object Error]`,so=`[object Function]`,co=`[object GeneratorFunction]`,lo=`[object Map]`,uo=`[object Number]`,fo=`[object Object]`,po=`[object RegExp]`,mo=`[object Set]`,ho=`[object String]`,go=`[object Symbol]`,_o=`[object WeakMap]`,vo=`[object ArrayBuffer]`,yo=`[object DataView]`,bo=`[object Float32Array]`,xo=`[object Float64Array]`,So=`[object Int8Array]`,Co=`[object Int16Array]`,wo=`[object Int32Array]`,To=`[object Uint8Array]`,Eo=`[object Uint8ClampedArray]`,Do=`[object Uint16Array]`,Oo=`[object Uint32Array]`,ko={};ko[no]=ko[ro]=ko[vo]=ko[yo]=ko[io]=ko[ao]=ko[bo]=ko[xo]=ko[So]=ko[Co]=ko[wo]=ko[lo]=ko[uo]=ko[fo]=ko[po]=ko[mo]=ko[ho]=ko[go]=ko[To]=ko[Eo]=ko[Do]=ko[Oo]=!0,ko[oo]=ko[so]=ko[_o]=!1;function Ao(e,t,n,r,i,a){var o,s=t&$a,c=t&eo,l=t&to;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!Ne(e))return e;var u=Ge(e);if(u){if(o=ma(e),!s)return qn(e,o)}else{var d=fa(e),f=d==so||d==co;if(kr(e))return zi(e,s);if(d==fo||d==no||f&&!i){if(o=c||f?{}:Wa(e),!s)return c?qi(e,Pi(o,e)):Gi(e,Ni(o,e))}else{if(!ko[d])return i?e:{};o=Ua(e,d,s)}}a||=new Mi;var p=a.get(e);if(p)return p;a.set(e,o),Qa(e)?e.forEach(function(r){o.add(Ao(r,t,n,r,e,a))}):Ja(e)&&e.forEach(function(r,i){o.set(i,Ao(r,t,n,i,e,a))});var m=u?void 0:(l?c?Xi:Yi:c?yi:hi)(e);return tr(m||e,function(r,i){m&&(i=r,r=e[i]),sr(o,i,Ao(r,t,n,i,e,a))}),o}var jo=1,Mo=4;function No(e){return Ao(e,jo|Mo)}var Po=1,Fo=4;function Io(e,t){return t=typeof t==`function`?t:void 0,Ao(e,Po|Fo,t)}var Lo=`__lodash_hash_undefined__`;function Ro(e){return this.__data__.set(e,Lo),this}function zo(e){return this.__data__.has(e)}function Bo(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Fe;++t<n;)this.add(e[t])}Bo.prototype.add=Bo.prototype.push=Ro,Bo.prototype.has=zo;function Vo(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Ho(e,t){return e.has(t)}var Uo=1,Wo=2;function Go(e,t,n,r,i,a){var o=n&Uo,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&Wo?new Bo:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!Vo(t,function(e,t){if(!Ho(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)})){f=!1;break}}else if(!(m===h||i(m,h,n,r,a))){f=!1;break}}return a.delete(e),a.delete(t),f}function Ko(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function qo(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var Jo=1,Yo=2,Xo=`[object Boolean]`,Zo=`[object Date]`,Qo=`[object Error]`,$o=`[object Map]`,es=`[object Number]`,ts=`[object RegExp]`,ns=`[object Set]`,rs=`[object String]`,is=`[object Symbol]`,as=`[object ArrayBuffer]`,os=`[object DataView]`,ss=Ke?Ke.prototype:void 0,cs=ss?ss.valueOf:void 0;function ls(e,t,n,r,i,a,o){switch(n){case os:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case as:return!(e.byteLength!=t.byteLength||!a(new ha(e),new ha(t)));case Xo:case Zo:case es:return Me(+e,+t);case Qo:return e.name==t.name&&e.message==t.message;case ts:case rs:return e==t+``;case $o:var s=Ko;case ns:var c=r&Jo;if(s||=qo,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=Yo,o.set(e,t);var u=Go(s(e),s(t),r,i,a,o);return o.delete(e),u;case is:if(cs)return cs.call(e)==cs.call(t)}return!1}var us=1,ds=Object.prototype.hasOwnProperty;function fs(e,t,n,r,i,a){var o=n&us,s=Yi(e),c=s.length;if(c!=Yi(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:ds.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){u=s[l];var h=e[u],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return a.delete(e),a.delete(t),p}var ps=1,ms=`[object Arguments]`,hs=`[object Array]`,gs=`[object Object]`,_s=Object.prototype.hasOwnProperty;function vs(e,t,n,r,i,a){var o=Ge(e),s=Ge(t),c=o?hs:fa(e),l=s?hs:fa(t);c=c==ms?gs:c,l=l==ms?gs:l;var u=c==gs,d=l==gs,f=c==l;if(f&&kr(e)){if(!kr(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new Mi,o||ci(e)?Go(e,t,n,r,i,a):ls(e,t,c,n,r,i,a);if(!(n&ps)){var p=u&&_s.call(e,`__wrapped__`),m=d&&_s.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new Mi,i(h,g,n,r,a)}}return f?(a||=new Mi,fs(e,t,n,r,i,a)):!1}function ys(e,t,n,r,i){return e===t?!0:e==null||t==null||!qe(e)&&!qe(t)?e!==e&&t!==t:vs(e,t,n,r,ys,i)}var bs=1,xs=2;function Ss(e,t,n,r){var i=n.length,a=i,o=!r;if(e==null)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){s=n[i];var c=s[0],l=e[c],u=s[1];if(o&&s[2]){if(l===void 0&&!(c in e))return!1}else{var d=new Mi;if(r)var f=r(l,u,c,e,t,d);if(!(f===void 0?ys(u,l,bs|xs,r,d):f))return!1}}return!0}function Cs(e){return e===e&&!Ne(e)}function ws(e){for(var t=hi(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Cs(i)]}return t}function Ts(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Es(e){var t=ws(e);return t.length==1&&t[0][2]?Ts(t[0][0],t[0][1]):function(n){return n===e||Ss(n,e,t)}}function Ds(e,t){return e!=null&&t in Object(e)}function Os(e,t,n){t=Re(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=Oe(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&pr(i)&&ir(o,i)&&(Ge(e)||wr(e)))}function ks(e,t){return e!=null&&Os(e,t,Ds)}var As=1,js=2;function Ms(e,t){return De(e)&&Cs(t)?Ts(Oe(e),t):function(n){var r=Be(n,e);return r===void 0&&r===t?ks(n,e):ys(t,r,As|js)}}function Ns(e){return function(t){return t?.[e]}}function Ps(e){return function(t){return F(t,e)}}function Fs(e){return De(e)?Ns(Oe(e)):Ps(e)}function Is(e){return typeof e==`function`?e:e==null?Vn:typeof e==`object`?Ge(e)?Ms(e[0],e[1]):Es(e):Fs(e)}function Ls(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Rs(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}var zs=Rs();function Bs(e,t){return e&&zs(e,t,hi)}function Vs(e,t){return function(n,r){if(n==null)return n;if(!mr(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}var Hs=Vs(Bs);function Us(e,t,n,r){return Hs(e,function(e,i,a){t(r,e,n(e),a)}),r}function Ws(e,t){return function(n,r){var i=Ge(n)?Ls:Us,a=t?t():{};return i(n,e,Is(r,2),a)}}function Gs(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function Ks(e){return typeof e==`function`?e:Vn}function qs(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}var Js=Rs(!0);function Ys(e,t){return e&&Js(e,t,hi)}var Xs=Vs(Ys,!0);function Zs(e,t){return(Ge(e)?qs:Xs)(e,Ks(t))}function Qs(e){return e&&e.length?e[0]:void 0}function $s(e,t){var n=-1,r=mr(e)?Array(e.length):[];return Hs(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function ec(e,t){return(Ge(e)?Ae:$s)(e,Is(t,3))}var tc=Object.prototype.hasOwnProperty,nc=Ws(function(e,t,n){tc.call(e,n)?e[n].push(t):ar(e,n,[t])});function rc(e){return e!=null&&e.length?Ti(e,0,-1):[]}var ic=`[object Map]`,ac=`[object Set]`,oc=Object.prototype.hasOwnProperty;function sc(e){if(e==null)return!0;if(mr(e)&&(Ge(e)||typeof e==`string`||typeof e.splice==`function`||kr(e)||ci(e)||wr(e)))return!e.length;var t=fa(e);if(t==ic||t==ac)return!e.size;if(_r(e))return!mi(e).length;for(var n in e)if(oc.call(e,n))return!1;return!0}function cc(e,t){return ys(e,t)}function lc(e,t){return e<t}function uc(e,t){var n={};return t=Is(t,3),Bs(e,function(e,r,i){ar(n,r,t(e,r,i))}),n}function dc(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(o!=null&&(s===void 0?o===o&&!We(o):n(o,s)))var s=o,c=a}return c}function fc(e,t){return e&&e.length?dc(e,Is(t,2),lc):void 0}function pc(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function mc(e,t){if(e!==t){var n=e!==void 0,r=e===null,i=e===e,a=We(e),o=t!==void 0,s=t===null,c=t===t,l=We(t);if(!s&&!l&&!a&&e>t||a&&o&&c&&!s&&!l||r&&o&&c||!n&&c||!i)return 1;if(!r&&!a&&!l&&e<t||l&&n&&i&&!r&&!a||s&&n&&i||!o&&i||!c)return-1}return 0}function hc(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=mc(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function gc(e,t,n){t=t.length?Ae(t,function(e){return Ge(e)?function(t){return F(t,e.length===1?e[0]:e)}:e}):[Vn];var r=-1;return t=Ae(t,ni(Is)),pc($s(e,function(e,n,i){return{criteria:Ae(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return hc(e,t,n)})}var _c=Ws(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]}),vc=Math.ceil,yc=Math.max;function bc(e,t,n,r){for(var i=-1,a=yc(vc((t-e)/(n||1)),0),o=Array(a);a--;)o[r?a:++i]=e,e+=n;return o}function xc(e){return function(t,n,r){return r&&typeof r!=`number`&&hr(t,n,r)&&(n=r=void 0),t=zn(t),n===void 0?(n=t,t=0):n=zn(n),r=r===void 0?t<n?1:-1:zn(r),bc(t,n,r,e)}}var Sc=xc(),Cc=dr(function(e,t){if(e==null)return[];var n=t.length;return n>1&&hr(e,t[0],t[1])?t=[]:n>2&&hr(t[0],t[1],t[2])&&(t=[t[0]]),gc(e,Ci(t,1),[])}),wc=9007199254740991,Tc=4294967295,Ec=Math.min;function Dc(e,t){if(e=Bn(e),e<1||e>wc)return[];var n=Tc,r=Ec(e,Tc);t=Ks(t),e-=Tc;for(var i=vr(r,t);++n<e;)t(n);return i}var Oc=0;function kc(e){var t=++Oc;return Ve(e)+t}var Ac=e(Jt(),1),jc=e=>Array.isArray(e),Mc=e=>typeof e==`object`&&!!e&&!jc(e),Nc=e=>typeof e==`string`,Pc=(e,t)=>e===t?!0:e!==null&&t!==null&&typeof e==`object`&&typeof t==`object`&&Object.keys(e).length===Object.keys(t).length&&Object.entries(e).every(([e,n])=>Pc(n,t[e])),Fc=(e,t)=>{let n=e?.[t];if(n!==void 0){if(!Object.hasOwn(e,t)||Array.isArray(e)&&!/^\d+$/.test(t)||typeof e!=`object`)throw TypeError(`Unsupported property "${t}"`);return n}};function Ic(e){return(...t)=>{let n=t.map(e=>Yc(e)),r=n[0],i=n[1];return n.length===1?t=>e(r(t)):n.length===2?t=>e(r(t),i(t)):t=>e(...n.map(e=>e(t)))}}var Lc={boolean:0,number:1,string:2},Rc=3,zc=(e,t)=>typeof e==typeof t&&typeof e in Lc?e>t:!1,Bc=(e,t)=>Pc(e,t)||zc(e,t),Vc=(e,t)=>typeof e==typeof t&&typeof e in Lc?e<t:!1,Hc={pipe:(...e)=>{let t=e.map(e=>Yc(e));return e=>t.reduce((e,t)=>t(e),e)},object:e=>{let t=Object.keys(e).map(t=>[t,Yc(e[t])]);return e=>{let n={};for(let[r,i]of t)n[r]=i(e);return n}},array:(...e)=>{let t=e.map(e=>Yc(e));return e=>t.map(t=>t(e))},get:(...e)=>{if(e.length===0)return e=>e??null;if(e.length===1){let t=e[0];return e=>Fc(e,t)??null}return t=>{let n=t;for(let t of e)n=Fc(n,t);return n??null}},map:e=>{let t=Yc(e);return e=>e.map(t)},mapObject:e=>{let t=Yc(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t({key:r,value:e[r]});n[i.key]=i.value}return n}},mapKeys:e=>{let t=Yc(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t(r);n[i]=e[r]}return n}},mapValues:e=>{let t=Yc(e);return e=>{let n={};for(let r of Object.keys(e))n[r]=t(e[r]);return n}},filter:e=>{let t=Yc(e);return e=>e.filter(e=>Uc(t(e)))},sort:(e=[`get`],t)=>{let n=Yc(e),r=t===`desc`?-1:1;function i(e,t){let i=n(e),a=n(t);if(typeof i!=typeof a){let e=Lc[typeof i]??Rc,t=Lc[typeof a]??Rc;return e>t?r:e<t?-r:0}return typeof i in Lc?i>a?r:i<a?-r:0:0}return e=>e.slice().sort(i)},reverse:()=>e=>e.toReversed(),pick:(...e)=>{let t=e.map(([e,...t])=>[t[t.length-1],Hc.get(...t)]),n=(e,t)=>{let n={};for(let[r,i]of t)n[r]=i(e);return n};return e=>jc(e)?e.map(e=>n(e,t)):n(e,t)},groupBy:e=>{let t=Yc(e);return e=>{let n={};for(let r of e){let e=t(r);n[e]?n[e].push(r):n[e]=[r]}return n}},keyBy:e=>{let t=Yc(e);return e=>{let n={};for(let r of e){let e=t(r);e in n||(n[e]=r)}return n}},flatten:()=>e=>e.flat(),join:(e=``)=>t=>t.join(e),split:Ic((e,t)=>t===void 0?e.trim().split(/\s+/):e.split(t)),substring:Ic((e,t,n)=>e.slice(Math.max(t,0),n)),uniq:()=>e=>{let t=[];for(let n of e)t.findIndex(e=>Pc(e,n))===-1&&t.push(n);return t},uniqBy:e=>t=>Object.values(Hc.keyBy(e)(t)),limit:e=>t=>t.slice(0,Math.max(e,0)),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>Wc(e,(e,t)=>e*t),sum:()=>e=>jc(e)?e.reduce((e,t)=>e+t,0):Kc(),average:()=>e=>jc(e)?e.length>0?e.reduce((e,t)=>e+t)/e.length:null:Kc(),min:()=>e=>Wc(e,(e,t)=>Math.min(e,t)),max:()=>e=>Wc(e,(e,t)=>Math.max(e,t)),and:Ic((...e)=>Wc(e,(e,t)=>!!(e&&t))),or:Ic((...e)=>Wc(e,(e,t)=>!!(e||t))),not:Ic(e=>!e),exists:e=>{let t=e.slice(1),n=t.pop(),r=Hc.get(...t);return e=>{let t=r(e);return!!t&&Object.hasOwnProperty.call(t,n)}},if:(e,t,n)=>{let r=Yc(e),i=Yc(t),a=Yc(n);return e=>Uc(r(e))?i(e):a(e)},in:(e,t)=>{let n=Yc(e),r=Yc(t);return e=>{let t=n(e);return r(e).findIndex(e=>Pc(e,t))!==-1}},"not in":(e,t)=>{let n=Hc.in(e,t);return e=>!n(e)},regex:(e,t,n)=>{let r=new RegExp(t,n),i=Yc(e);return e=>r.test(i(e))},match:(e,t,n)=>{let r=new RegExp(t,n),i=Yc(e);return e=>{let t=i(e).match(r);return t?Gc(t):null}},matchAll:(e,t,n)=>{let r=new RegExp(t,`${n??``}g`),i=Yc(e);return e=>Array.from(i(e).matchAll(r)).map(Gc)},eq:Ic(Pc),gt:Ic(zc),gte:Ic(Bc),lt:Ic(Vc),lte:Ic((e,t)=>Pc(e,t)||Vc(e,t)),ne:Ic((e,t)=>!Pc(e,t)),add:Ic((e,t)=>e+t),subtract:Ic((e,t)=>e-t),multiply:Ic((e,t)=>e*t),divide:Ic((e,t)=>e/t),mod:Ic((e,t)=>e%t),pow:Ic((e,t)=>e**t),abs:Ic(Math.abs),round:Ic((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`),number:Ic(e=>{let t=Number(e);return Number.isNaN(Number(e))?null:t}),string:Ic(String)},Uc=e=>e!==null&&e!==0&&e!==!1,Wc=(e,t)=>(jc(e)||Kc(),e.length===0?null:e.reduce(t)),Gc=e=>{let[t,...n]=e,r=e.groups;return n.length?r?{value:t,groups:n,namedGroups:r}:{value:t,groups:n}:{value:t}},Kc=()=>{qc(`Array expected`)},qc=e=>{throw TypeError(e)},Jc=[];function Yc(e,t){Jc.unshift({...Hc,...Jc[0],...t?.functions});try{let t=jc(e)?Xc(e,Jc[0]):Mc(e)?qc(`Function notation ["object", {...}] expected but got ${JSON.stringify(e)}`):()=>e;return n=>{try{return t(n)}catch(t){throw t.jsonquery=[{data:n,query:e},...t.jsonquery??[]],t}}}finally{Jc.shift()}}function Xc(e,t){let[n,...r]=e,i=t[n];return i||qc(`Unknown function '${n}'`),i(...r)}var Zc=[{pow:`^`},{multiply:`*`,divide:`/`,mod:`%`},{add:`+`,subtract:`-`},{gt:`>`,gte:`>=`,lt:`<`,lte:`<=`,in:`in`,"not in":`not in`},{eq:`==`,ne:`!=`},{and:`and`},{or:`or`},{pipe:`|`}],Qc=[`|`,`and`,`or`],$c=[`|`,`and`,`or`,`*`,`/`,`%`,`+`,`-`];function el(e,t){if(!jc(t))throw Error(`Invalid custom operators`);return t.reduce(tl,e)}function tl(e,{name:t,op:n,at:r,after:i,before:a}){if(r)return e.map(e=>Object.values(e).includes(r)?{...e,[t]:n}:e);let o=i??a,s=e.findIndex(e=>Object.values(e).includes(o));if(s!==-1)return e.toSpliced(s+ +!!i,0,{[t]:n});throw Error(`Invalid custom operator`)}var nl=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,rl=/^[a-zA-Z_$][a-zA-Z\d_$]*/,il=/^"(?:[^"\\]|\\.)*"/,al=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,ol=/^(0|[1-9][0-9]*)/,sl=/^(true|false|null)/,cl=/^[ \n\t\r]+/;function ll(e,t){let n=t?.operators??[],r=el(Zc,n),i=Object.assign({},...r),a=Qc.concat(n.filter(e=>e.vararg).map(e=>e.op)),o=$c.concat(n.filter(e=>e.leftAssociative).map(e=>e.op)),s=(t=r.length-1)=>{let n=r[t];if(!n)return l();let d=e[w]===`(`,f=s(t-1);for(;;){if(x(),e[w]===`.`&&`pipe`in n){let e=u();f=f[0]===`pipe`?[...f,e]:[`pipe`,f,e];continue}let r=w,l=c(n);if(!l)break;let p=s(t-1),m=l===f[0]&&!d;if(m&&!o.includes(i[l])){w=r;break}f=m&&a.includes(i[l])?[...f,p]:[l,f,p]}return f},c=t=>{let n=Object.keys(t).sort((e,t)=>t.length-e.length);for(let r of n){let n=t[r];if(e.substring(w,w+n.length)===n)return w+=n.length,x(),r}},l=()=>{if(x(),e[w]===`(`){w++;let e=s();return S(`)`),e}return u()},u=()=>{if(e[w]===`.`){let t=[];for(;e[w]===`.`;)w++,t.push(m()??h()??_()??C(`Property expected`)),x();return[`get`,...t]}return d()},d=()=>{let t=w,n=h();if(x(),!n||e[w]!==`(`)return w=t,f();w++,x();let r=e[w]===`)`?[]:[s()];for(;w<e.length&&e[w]!==`)`;)x(),S(`,`),r.push(s());return S(`)`),[n,...r]},f=()=>{if(e[w]===`{`){w++,x();let t={},n=!0;for(;w<e.length&&e[w]!==`}`;){n?n=!1:(S(`,`),x());let e=m()??h()??_()??C(`Key expected`);x(),S(`:`),t[e]=s()}return S(`}`),[`object`,t]}return p()},p=()=>{if(e[w]===`[`){w++,x();let t=[],n=!0;for(;w<e.length&&e[w]!==`]`;)n?n=!1:(S(`,`),x()),t.push(s());return S(`]`),[`array`,...t]}return m()??g()??v()},m=()=>b(il,JSON.parse),h=()=>b(rl,e=>e),g=()=>b(al,JSON.parse),_=()=>b(ol,JSON.parse),v=()=>{let e=b(sl,JSON.parse);if(e!==void 0)return e;C(`Value expected`)},y=()=>{x(),w<e.length&&C(`Unexpected part '${e.substring(w)}'`)},b=(t,n)=>{let r=e.substring(w).match(t);if(r)return w+=r[0].length,n(r[0])},x=()=>b(cl,e=>e),S=t=>{e[w]!==t&&C(`Character '${t}' expected`),w++},C=(e,t=w)=>{throw SyntaxError(`${e} (pos: ${t})`)},w=0,T=s();return y(),T}var ul=40,dl=`  `,fl=(e,t)=>{let n=t?.indentation??dl,r=t?.operators??[],i=el(Zc,r),a=Object.assign({},...i),o=$c.concat(r.filter(e=>e.leftAssociative).map(e=>e.op)),s=(e,t,n=!1)=>jc(e)?c(e,t,n):JSON.stringify(e),c=(e,t,r)=>{let[c,...d]=e;if(c===`get`&&d.length>0)return u(d);if(c===`object`)return l(d[0],t);if(c===`array`)return f(d.map(e=>s(e,t)),[`[`,`, `,`]`],[`[
${t+n}`,`,
${t+n}`,`
${t}]`]);let p=a[c];if(p){let e=r?`(`:``,a=r?`)`:``;return f(d.map((e,r)=>{let a=e?.[0],l=i.findIndex(e=>c in e),u=i.findIndex(e=>a in e),d=l<u||l===u&&r>0||c===a&&!o.includes(p);return s(e,t+n,d)}),[e,` ${p} `,a],[e,`
${t+n}${p} `,a])}let m=d.length===1?t:t+n;return f(d.map(e=>s(e,m)),[`${c}(`,`, `,`)`],d.length===1?[`${c}(`,`,
${t}`,`)`]:[`${c}(
${m}`,`,
${m}`,`
${t})`])},l=(e,t)=>{let r=t+n;return f(Object.entries(e).map(([e,t])=>`${d(e)}: ${s(t,r)}`),[`{ `,`, `,` }`],[`{
${r}`,`,
${r}`,`
${t}}`])},u=e=>e.map(e=>`.${d(e)}`).join(``),d=e=>nl.test(e)?e:JSON.stringify(e),f=(e,[n,r,i],[a,o,s])=>n.length+e.reduce((e,t)=>e+t.length+r.length,0)-r.length+i.length<=(t?.maxLineLength??ul)?n+e.join(r)+i:a+e.join(o)+s;return s(e,``)};function pl(e,t,n){return Yc(Nc(t)?ll(t,n):t,n)(e)}var ml={prefix:`far`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},hl={prefix:`far`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z`]},gl={prefix:`far`,iconName:`lightbulb`,icon:[384,512,[128161],`f0eb`,`M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z`]},_l={prefix:`far`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},vl={prefix:`fas`,iconName:`rotate`,icon:[512,512,[128260,`sync-alt`],`f2f1`,`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`]},yl={prefix:`fas`,iconName:`paste`,icon:[512,512,[`file-clipboard`],`f0ea`,`M64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l112 0 0-224c0-61.9 50.1-112 112-112l64 0 0-48c0-35.3-28.7-64-64-64L64 0zM248 112l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm40 48c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.3-18.7-45.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7L288 160z`]},bl={prefix:`fas`,iconName:`crop-simple`,icon:[512,512,[`crop-alt`],`f565`,`M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32-32 0C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l208 0 0-64-208 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64l-208 0 0 64 208 0 0 352z`]},xl={prefix:`fas`,iconName:`filter`,icon:[512,512,[],`f0b0`,`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`]},Sl={prefix:`fas`,iconName:`square-caret-down`,icon:[448,512,[`caret-square-down`],`f150`,`M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9S110.5 192 120 192l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z`]},Cl={prefix:`fas`,iconName:`caret-right`,icon:[256,512,[],`f0da`,`M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z`]},wl={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},Tl={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},El={prefix:`fas`,iconName:`caret-left`,icon:[256,512,[],`f0d9`,`M7.7 235.8c-10.3 12.6-9.5 31.1 2.2 42.8l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128-2.2 2.4z`]},Dl={prefix:`fas`,iconName:`chevron-up`,icon:[448,512,[],`f077`,`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`]},Ol={prefix:`fas`,iconName:`circle-notch`,icon:[512,512,[],`f1ce`,`M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8-79.3 23.6-137.1 97.1-137.1 184.1 0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256 512 397.4 397.4 512 256 512S0 397.4 0 256c0-116 77.1-213.9 182.9-245.4 16.9-5 34.8 4.6 39.8 21.5z`]},kl={prefix:`fas`,iconName:`ellipsis-vertical`,icon:[128,512,[`ellipsis-v`],`f142`,`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`]},Al={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},jl={prefix:`fas`,iconName:`clone`,icon:[512,512,[],`f24d`,`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`]},Ml={prefix:`fas`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Nl={prefix:`fas`,iconName:`square-caret-up`,icon:[448,512,[`caret-square-up`],`f151`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S337.5 320 328 320l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z`]},Pl={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Fl={prefix:`fas`,iconName:`angle-right`,icon:[256,512,[8250],`f105`,`M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z`]},Il={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},Ll={prefix:`fas`,iconName:`up-right-and-down-left-from-center`,icon:[512,512,[`expand-alt`],`f424`,`M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z`]},Rl={prefix:`fas`,iconName:`wrench`,icon:[576,512,[128295],`f0ad`,`M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z`]},zl={prefix:`fas`,iconName:`trash-can`,icon:[448,512,[61460,`trash-alt`],`f2ed`,`M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z`]},Bl={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},Vl={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},Hl=Vl,Ul=Vl,Wl={prefix:`fas`,iconName:`pen`,icon:[512,512,[128394],`f304`,`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`]},Gl={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},Kl={prefix:`fas`,iconName:`angle-down`,icon:[384,512,[8964],`f107`,`M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},ql={prefix:`fas`,iconName:`arrow-down-short-wide`,icon:[576,512,[`sort-amount-desc`,`sort-amount-down-alt`],`f884`,`M246.6 374.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`]},Jl={prefix:`fas`,iconName:`triangle-exclamation`,icon:[512,512,[9888,`exclamation-triangle`,`warning`],`f071`,`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},Yl={prefix:`fas`,iconName:`scissors`,icon:[512,512,[9984,9986,9988,`cut`],`f0c4`,`M192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L256 192 216.5 152.5c4.9-12.6 7.5-26.2 7.5-40.5 0-61.9-50.1-112-112-112S0 50.1 0 112 50.1 224 112 224c14.3 0 27.9-2.7 40.5-7.5L192 256zm97.9 97.9L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6l-145.3-145.3-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z`]},Xl={prefix:`fas`,iconName:`arrow-right-arrow-left`,icon:[512,512,[8644,`exchange`],`f0ec`,`M502.6 150.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 160 32 160c-17.7 0-32-14.3-32-32S14.3 96 32 96l370.7 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 352 480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z`]},Zl={prefix:`fas`,iconName:`caret-up`,icon:[320,512,[],`f0d8`,`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`]},Ql={prefix:`fas`,iconName:`down-left-and-up-right-to-center`,icon:[512,512,[`compress-alt`],`f422`,`M439.5 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S450.2 240 440.5 240l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87zM72.5 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S62.8 272 72.5 272z`]},$l={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]},eu={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]},tu={prefix:`fas`,iconName:`arrow-rotate-right`,icon:[512,512,[8635,`arrow-right-rotate`,`arrow-rotate-forward`,`redo`],`f01e`,`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`]},nu={prefix:`fas`,iconName:`caret-down`,icon:[320,512,[],`f0d7`,`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`]},ru={prefix:`fas`,iconName:`arrow-rotate-left`,icon:[512,512,[8634,`arrow-left-rotate`,`arrow-rotate-back`,`arrow-rotate-backward`,`undo`],`f0e2`,`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`]},iu={prefix:`fas`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z`]},au={prefix:`fas`,iconName:`arrow-down`,icon:[384,512,[8595],`f063`,`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},ou=e(t(((e,t)=>{var n=function(e,t){var n,r,i=1,a=0,o=0,s=String.alphabet;function c(e,t,r){if(r){for(n=t;r=c(e,n),r<76&&r>65;)++n;return+e.slice(t-1,n)}return r=s&&s.indexOf(e.charAt(t)),r>-1?r+76:(r=e.charCodeAt(t)||0,r<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63)}if((e+=``)!=(t+=``)){for(;i;)if(r=c(e,a++),i=c(t,o++),r<76&&i<76&&r>66&&i>66&&(r=c(e,a,a),i=c(t,o,a=n),o=n),r!=i)return r<i?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}}))(),1),su=Number.isNaN||function(e){return typeof e==`number`&&e!==e};function cu(e,t){return!!(e===t||su(e)&&su(t))}function lu(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!cu(e[n],t[n]))return!1;return!0}function uu(e,t){t===void 0&&(t=lu);var n=null;function r(){var r=[...arguments];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var i=e.apply(this,r);return n={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){n=null},r}t((e=>{(function(e){function t(e){return e===null?!1:Object.prototype.toString.call(e)===`[object Array]`}function n(e){return e===null?!1:Object.prototype.toString.call(e)===`[object Object]`}function r(e,i){if(e===i)return!0;if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(i))return!1;if(t(e)===!0){if(e.length!==i.length)return!1;for(var a=0;a<e.length;a++)if(r(e[a],i[a])===!1)return!1;return!0}if(n(e)===!0){var o={};for(var s in e)if(hasOwnProperty.call(e,s)){if(r(e[s],i[s])===!1)return!1;o[s]=!0}for(var c in i)if(hasOwnProperty.call(i,c)&&o[c]!==!0)return!1;return!0}return!1}function i(e){if(e===``||e===!1||e===null||t(e)&&e.length===0)return!0;if(n(e)){for(var r in e)if(e.hasOwnProperty(r))return!1;return!0}else return!1}function a(e){for(var t=Object.keys(e),n=[],r=0;r<t.length;r++)n.push(e[t[r]]);return n}var o=typeof String.prototype.trimLeft==`function`?function(e){return e.trimLeft()}:function(e){return e.match(/^\s*(.*)/)[1]},s=0,c=1,l=2,u=3,d=4,f=5,p=6,m=7,h=8,g=9,_={0:`number`,1:`any`,2:`string`,3:`array`,4:`object`,5:`boolean`,6:`expression`,7:`null`,8:`Array<number>`,9:`Array<string>`},v=`EOF`,y=`UnquotedIdentifier`,b=`QuotedIdentifier`,x=`Rbracket`,S=`Rparen`,C=`Comma`,w=`Colon`,T=`Rbrace`,E=`Number`,ee=`Current`,te=`Expref`,ne=`Pipe`,re=`Or`,ie=`And`,ae=`EQ`,oe=`GT`,se=`LT`,D=`GTE`,O=`LTE`,ce=`NE`,le=`Flatten`,ue=`Star`,de=`Filter`,k=`Dot`,fe=`Not`,pe=`Lbrace`,me=`Lbracket`,A=`Lparen`,he=`Literal`,j={".":k,"*":ue,",":C,":":w,"{":pe,"}":T,"]":x,"(":A,")":S,"@":ee},M={"<":!0,">":!0,"=":!0,"!":!0},ge={" ":!0,"	":!0,"\n":!0};function _e(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`}function N(e){return e>=`0`&&e<=`9`||e===`-`}function P(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`_`}function ve(){}ve.prototype={tokenize:function(e){var t=[];this._current=0;for(var n,r,i;this._current<e.length;)if(_e(e[this._current]))n=this._current,r=this._consumeUnquotedIdentifier(e),t.push({type:y,value:r,start:n});else if(j[e[this._current]]!==void 0)t.push({type:j[e[this._current]],value:e[this._current],start:this._current}),this._current++;else if(N(e[this._current]))i=this._consumeNumber(e),t.push(i);else if(e[this._current]===`[`)i=this._consumeLBracket(e),t.push(i);else if(e[this._current]===`"`)n=this._current,r=this._consumeQuotedIdentifier(e),t.push({type:b,value:r,start:n});else if(e[this._current]===`'`)n=this._current,r=this._consumeRawStringLiteral(e),t.push({type:he,value:r,start:n});else if(e[this._current]==="`"){n=this._current;var a=this._consumeLiteral(e);t.push({type:he,value:a,start:n})}else if(M[e[this._current]]!==void 0)t.push(this._consumeOperator(e));else if(ge[e[this._current]]!==void 0)this._current++;else if(e[this._current]===`&`)n=this._current,this._current++,e[this._current]===`&`?(this._current++,t.push({type:ie,value:`&&`,start:n})):t.push({type:te,value:`&`,start:n});else if(e[this._current]===`|`)n=this._current,this._current++,e[this._current]===`|`?(this._current++,t.push({type:re,value:`||`,start:n})):t.push({type:ne,value:`|`,start:n});else{var o=Error(`Unknown character:`+e[this._current]);throw o.name=`LexerError`,o}return t},_consumeUnquotedIdentifier:function(e){var t=this._current;for(this._current++;this._current<e.length&&P(e[this._current]);)this._current++;return e.slice(t,this._current)},_consumeQuotedIdentifier:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`"`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`"`)?r+=2:r++,this._current=r}return this._current++,JSON.parse(e.slice(t,this._current))},_consumeRawStringLiteral:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`'`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`'`)?r+=2:r++,this._current=r}return this._current++,e.slice(t+1,this._current-1).replace(`\\'`,`'`)},_consumeNumber:function(e){var t=this._current;this._current++;for(var n=e.length;N(e[this._current])&&this._current<n;)this._current++;return{type:E,value:parseInt(e.slice(t,this._current)),start:t}},_consumeLBracket:function(e){var t=this._current;return this._current++,e[this._current]===`?`?(this._current++,{type:de,value:`[?`,start:t}):e[this._current]===`]`?(this._current++,{type:le,value:`[]`,start:t}):{type:me,value:`[`,start:t}},_consumeOperator:function(e){var t=this._current,n=e[t];if(this._current++,n===`!`)return e[this._current]===`=`?(this._current++,{type:ce,value:`!=`,start:t}):{type:fe,value:`!`,start:t};if(n===`<`)return e[this._current]===`=`?(this._current++,{type:O,value:`<=`,start:t}):{type:se,value:`<`,start:t};if(n===`>`)return e[this._current]===`=`?(this._current++,{type:D,value:`>=`,start:t}):{type:oe,value:`>`,start:t};if(n===`=`&&e[this._current]===`=`)return this._current++,{type:ae,value:`==`,start:t}},_consumeLiteral:function(e){this._current++;for(var t=this._current,n=e.length,r;e[this._current]!=="`"&&this._current<n;){var i=this._current;e[i]===`\\`&&(e[i+1]===`\\`||e[i+1]==="`")?i+=2:i++,this._current=i}var a=o(e.slice(t,this._current));return a=a.replace("\\`","`"),r=this._looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"`+a+`"`),this._current++,r},_looksLikeJSON:function(e){var t=`[{"`,n=[`true`,`false`,`null`],r=`-0123456789`;if(e===``)return!1;if(t.indexOf(e[0])>=0||n.indexOf(e)>=0)return!0;if(r.indexOf(e[0])>=0)try{return JSON.parse(e),!0}catch{return!1}else return!1}};var ye={};ye[v]=0,ye[y]=0,ye[b]=0,ye[x]=0,ye[S]=0,ye[C]=0,ye[T]=0,ye[E]=0,ye[ee]=0,ye[te]=0,ye[ne]=1,ye[re]=2,ye[ie]=3,ye[ae]=5,ye[oe]=5,ye[se]=5,ye[D]=5,ye[O]=5,ye[ce]=5,ye[le]=9,ye[ue]=20,ye[de]=21,ye[k]=40,ye[fe]=45,ye[pe]=50,ye[me]=55,ye[A]=60;function be(){}be.prototype={parse:function(e){this._loadTokens(e),this.index=0;var t=this.expression(0);if(this._lookahead(0)!==v){var n=this._lookaheadToken(0),r=Error(`Unexpected token type: `+n.type+`, value: `+n.value);throw r.name=`ParserError`,r}return t},_loadTokens:function(e){var t=new ve().tokenize(e);t.push({type:v,value:``,start:e.length}),this.tokens=t},expression:function(e){var t=this._lookaheadToken(0);this._advance();for(var n=this.nud(t),r=this._lookahead(0);e<ye[r];)this._advance(),n=this.led(r,n),r=this._lookahead(0);return n},_lookahead:function(e){return this.tokens[this.index+e].type},_lookaheadToken:function(e){return this.tokens[this.index+e]},_advance:function(){this.index++},nud:function(e){var t,n,r;switch(e.type){case he:return{type:`Literal`,value:e.value};case y:return{type:`Field`,name:e.value};case b:var i={type:`Field`,name:e.value};if(this._lookahead(0)===A)throw Error(`Quoted identifier not allowed for function names.`);return i;case fe:return n=this.expression(ye.Not),{type:`NotExpression`,children:[n]};case ue:return t={type:`Identity`},n=null,n=this._lookahead(0)===x?{type:`Identity`}:this._parseProjectionRHS(ye.Star),{type:`ValueProjection`,children:[t,n]};case de:return this.led(e.type,{type:`Identity`});case pe:return this._parseMultiselectHash();case le:return t={type:le,children:[{type:`Identity`}]},n=this._parseProjectionRHS(ye.Flatten),{type:`Projection`,children:[t,n]};case me:return this._lookahead(0)===E||this._lookahead(0)===w?(n=this._parseIndexExpression(),this._projectIfSlice({type:`Identity`},n)):this._lookahead(0)===ue&&this._lookahead(1)===x?(this._advance(),this._advance(),n=this._parseProjectionRHS(ye.Star),{type:`Projection`,children:[{type:`Identity`},n]}):this._parseMultiselectList();case ee:return{type:ee};case te:return r=this.expression(ye.Expref),{type:`ExpressionReference`,children:[r]};case A:for(var a=[];this._lookahead(0)!==S;)this._lookahead(0)===ee?(r={type:ee},this._advance()):r=this.expression(0),a.push(r);return this._match(S),a[0];default:this._errorToken(e)}},led:function(e,t){var n;switch(e){case k:var r=ye.Dot;return this._lookahead(0)===ue?(this._advance(),n=this._parseProjectionRHS(r),{type:`ValueProjection`,children:[t,n]}):(n=this._parseDotRHS(r),{type:`Subexpression`,children:[t,n]});case ne:return n=this.expression(ye.Pipe),{type:ne,children:[t,n]};case re:return n=this.expression(ye.Or),{type:`OrExpression`,children:[t,n]};case ie:return n=this.expression(ye.And),{type:`AndExpression`,children:[t,n]};case A:for(var i=t.name,a=[],o,s;this._lookahead(0)!==S;)this._lookahead(0)===ee?(o={type:ee},this._advance()):o=this.expression(0),this._lookahead(0)===C&&this._match(C),a.push(o);return this._match(S),s={type:`Function`,name:i,children:a},s;case de:var c=this.expression(0);return this._match(x),n=this._lookahead(0)===le?{type:`Identity`}:this._parseProjectionRHS(ye.Filter),{type:`FilterProjection`,children:[t,n,c]};case le:return{type:`Projection`,children:[{type:le,children:[t]},this._parseProjectionRHS(ye.Flatten)]};case ae:case ce:case oe:case D:case se:case O:return this._parseComparator(t,e);case me:var l=this._lookaheadToken(0);return l.type===E||l.type===w?(n=this._parseIndexExpression(),this._projectIfSlice(t,n)):(this._match(ue),this._match(x),n=this._parseProjectionRHS(ye.Star),{type:`Projection`,children:[t,n]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(e){if(this._lookahead(0)===e)this._advance();else{var t=this._lookaheadToken(0),n=Error(`Expected `+e+`, got: `+t.type);throw n.name=`ParserError`,n}},_errorToken:function(e){var t=Error(`Invalid token (`+e.type+`): "`+e.value+`"`);throw t.name=`ParserError`,t},_parseIndexExpression:function(){if(this._lookahead(0)===w||this._lookahead(1)===w)return this._parseSliceExpression();var e={type:`Index`,value:this._lookaheadToken(0).value};return this._advance(),this._match(x),e},_projectIfSlice:function(e,t){var n={type:`IndexExpression`,children:[e,t]};return t.type===`Slice`?{type:`Projection`,children:[n,this._parseProjectionRHS(ye.Star)]}:n},_parseSliceExpression:function(){for(var e=[null,null,null],t=0,n=this._lookahead(0);n!==x&&t<3;){if(n===w)t++,this._advance();else if(n===E)e[t]=this._lookaheadToken(0).value,this._advance();else{var r=this._lookahead(0),i=Error(`Syntax error, unexpected token: `+r.value+`(`+r.type+`)`);throw i.name=`Parsererror`,i}n=this._lookahead(0)}return this._match(x),{type:`Slice`,children:e}},_parseComparator:function(e,t){return{type:`Comparator`,name:t,children:[e,this.expression(ye[t])]}},_parseDotRHS:function(e){var t=this._lookahead(0);if([y,b,ue].indexOf(t)>=0)return this.expression(e);if(t===me)return this._match(me),this._parseMultiselectList();if(t===pe)return this._match(pe),this._parseMultiselectHash()},_parseProjectionRHS:function(e){var t;if(ye[this._lookahead(0)]<10)t={type:`Identity`};else if(this._lookahead(0)===me)t=this.expression(e);else if(this._lookahead(0)===de)t=this.expression(e);else if(this._lookahead(0)===k)this._match(k),t=this._parseDotRHS(e);else{var n=this._lookaheadToken(0),r=Error(`Sytanx error, unexpected token: `+n.value+`(`+n.type+`)`);throw r.name=`ParserError`,r}return t},_parseMultiselectList:function(){for(var e=[];this._lookahead(0)!==x;){var t=this.expression(0);if(e.push(t),this._lookahead(0)===C&&(this._match(C),this._lookahead(0)===x))throw Error(`Unexpected token Rbracket`)}return this._match(x),{type:`MultiSelectList`,children:e}},_parseMultiselectHash:function(){for(var e=[],t=[y,b],n,r,i,a;;){if(n=this._lookaheadToken(0),t.indexOf(n.type)<0)throw Error(`Expecting an identifier token, got: `+n.type);if(r=n.value,this._advance(),this._match(w),i=this.expression(0),a={type:`KeyValuePair`,name:r,value:i},e.push(a),this._lookahead(0)===C)this._match(C);else if(this._lookahead(0)===T){this._match(T);break}}return{type:`MultiSelectHash`,children:e}}};function xe(e){this.runtime=e}xe.prototype={search:function(e,t){return this.visit(e,t)},visit:function(e,o){var s,c,l,u,d,f,p,m,h,g;switch(e.type){case`Field`:return o!==null&&n(o)?(f=o[e.name],f===void 0?null:f):null;case`Subexpression`:for(l=this.visit(e.children[0],o),g=1;g<e.children.length;g++)if(l=this.visit(e.children[1],l),l===null)return null;return l;case`IndexExpression`:return p=this.visit(e.children[0],o),m=this.visit(e.children[1],p),m;case`Index`:if(!t(o))return null;var _=e.value;return _<0&&(_=o.length+_),l=o[_],l===void 0&&(l=null),l;case`Slice`:if(!t(o))return null;var v=e.children.slice(0),y=this.computeSliceParams(o.length,v),b=y[0],x=y[1],S=y[2];if(l=[],S>0)for(g=b;g<x;g+=S)l.push(o[g]);else for(g=b;g>x;g+=S)l.push(o[g]);return l;case`Projection`:var C=this.visit(e.children[0],o);if(!t(C))return null;for(h=[],g=0;g<C.length;g++)c=this.visit(e.children[1],C[g]),c!==null&&h.push(c);return h;case`ValueProjection`:if(C=this.visit(e.children[0],o),!n(C))return null;h=[];var w=a(C);for(g=0;g<w.length;g++)c=this.visit(e.children[1],w[g]),c!==null&&h.push(c);return h;case`FilterProjection`:if(C=this.visit(e.children[0],o),!t(C))return null;var T=[],E=[];for(g=0;g<C.length;g++)s=this.visit(e.children[2],C[g]),i(s)||T.push(C[g]);for(var re=0;re<T.length;re++)c=this.visit(e.children[1],T[re]),c!==null&&E.push(c);return E;case`Comparator`:switch(u=this.visit(e.children[0],o),d=this.visit(e.children[1],o),e.name){case ae:l=r(u,d);break;case ce:l=!r(u,d);break;case oe:l=u>d;break;case D:l=u>=d;break;case se:l=u<d;break;case O:l=u<=d;break;default:throw Error(`Unknown comparator: `+e.name)}return l;case le:var ie=this.visit(e.children[0],o);if(!t(ie))return null;var ue=[];for(g=0;g<ie.length;g++)c=ie[g],t(c)?ue.push.apply(ue,c):ue.push(c);return ue;case`Identity`:return o;case`MultiSelectList`:if(o===null)return null;for(h=[],g=0;g<e.children.length;g++)h.push(this.visit(e.children[g],o));return h;case`MultiSelectHash`:if(o===null)return null;h={};var de;for(g=0;g<e.children.length;g++)de=e.children[g],h[de.name]=this.visit(de.value,o);return h;case`OrExpression`:return s=this.visit(e.children[0],o),i(s)&&(s=this.visit(e.children[1],o)),s;case`AndExpression`:return u=this.visit(e.children[0],o),i(u)===!0?u:this.visit(e.children[1],o);case`NotExpression`:return u=this.visit(e.children[0],o),i(u);case`Literal`:return e.value;case ne:return p=this.visit(e.children[0],o),this.visit(e.children[1],p);case ee:return o;case`Function`:var k=[];for(g=0;g<e.children.length;g++)k.push(this.visit(e.children[g],o));return this.runtime.callFunction(e.name,k);case`ExpressionReference`:var fe=e.children[0];return fe.jmespathType=te,fe;default:throw Error(`Unknown node type: `+e.type)}},computeSliceParams:function(e,t){var n=t[0],r=t[1],i=t[2],a=[null,null,null];if(i===null)i=1;else if(i===0){var o=Error(`Invalid slice, step cannot be 0`);throw o.name=`RuntimeError`,o}var s=i<0;return n=n===null?s?e-1:0:this.capSliceRange(e,n,i),r=r===null?s?-1:e:this.capSliceRange(e,r,i),a[0]=n,a[1]=r,a[2]=i,a},capSliceRange:function(e,t,n){return t<0?(t+=e,t<0&&(t=n<0?-1:0)):t>=e&&(t=n<0?e-1:e),t}};function Se(e){this._interpreter=e,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[s]}]},avg:{_func:this._functionAvg,_signature:[{types:[h]}]},ceil:{_func:this._functionCeil,_signature:[{types:[s]}]},contains:{_func:this._functionContains,_signature:[{types:[l,u]},{types:[c]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[l]},{types:[l]}]},floor:{_func:this._functionFloor,_signature:[{types:[s]}]},length:{_func:this._functionLength,_signature:[{types:[l,u,d]}]},map:{_func:this._functionMap,_signature:[{types:[p]},{types:[u]}]},max:{_func:this._functionMax,_signature:[{types:[h,g]}]},merge:{_func:this._functionMerge,_signature:[{types:[d],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[u]},{types:[p]}]},sum:{_func:this._functionSum,_signature:[{types:[h]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[l]},{types:[l]}]},min:{_func:this._functionMin,_signature:[{types:[h,g]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[u]},{types:[p]}]},type:{_func:this._functionType,_signature:[{types:[c]}]},keys:{_func:this._functionKeys,_signature:[{types:[d]}]},values:{_func:this._functionValues,_signature:[{types:[d]}]},sort:{_func:this._functionSort,_signature:[{types:[g,h]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[u]},{types:[p]}]},join:{_func:this._functionJoin,_signature:[{types:[l]},{types:[g]}]},reverse:{_func:this._functionReverse,_signature:[{types:[l,u]}]},to_array:{_func:this._functionToArray,_signature:[{types:[c]}]},to_string:{_func:this._functionToString,_signature:[{types:[c]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[c]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[c],variadic:!0}]}}}Se.prototype={callFunction:function(e,t){var n=this.functionTable[e];if(n===void 0)throw Error(`Unknown function: `+e+`()`);return this._validateArgs(e,t,n._signature),n._func.call(this,t)},_validateArgs:function(e,t,n){var r;if(n[n.length-1].variadic){if(t.length<n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes at least`+n.length+r+` but received `+t.length)}else if(t.length!==n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes `+n.length+r+` but received `+t.length);for(var i,a,o,s=0;s<n.length;s++){o=!1,i=n[s].types,a=this._getTypeName(t[s]);for(var c=0;c<i.length;c++)if(this._typeMatches(a,i[c],t[s])){o=!0;break}if(!o){var l=i.map(function(e){return _[e]}).join(`,`);throw Error(`TypeError: `+e+`() expected argument `+(s+1)+` to be type `+l+` but received type `+_[a]+` instead.`)}}},_typeMatches:function(e,t,n){if(t===c)return!0;if(t===g||t===h||t===u){if(t===u)return e===u;if(e===u){var r;t===h?r=s:t===g&&(r=l);for(var i=0;i<n.length;i++)if(!this._typeMatches(this._getTypeName(n[i]),r,n[i]))return!1;return!0}}else return e===t},_getTypeName:function(e){switch(Object.prototype.toString.call(e)){case`[object String]`:return l;case`[object Number]`:return s;case`[object Array]`:return u;case`[object Boolean]`:return f;case`[object Null]`:return m;case`[object Object]`:return e.jmespathType===te?p:d}},_functionStartsWith:function(e){return e[0].lastIndexOf(e[1])===0},_functionEndsWith:function(e){var t=e[0],n=e[1];return t.indexOf(n,t.length-n.length)!==-1},_functionReverse:function(e){if(this._getTypeName(e[0])===l){for(var t=e[0],n=``,r=t.length-1;r>=0;r--)n+=t[r];return n}else{var i=e[0].slice(0);return i.reverse(),i}},_functionAbs:function(e){return Math.abs(e[0])},_functionCeil:function(e){return Math.ceil(e[0])},_functionAvg:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t/n.length},_functionContains:function(e){return e[0].indexOf(e[1])>=0},_functionFloor:function(e){return Math.floor(e[0])},_functionLength:function(e){return n(e[0])?Object.keys(e[0]).length:e[0].length},_functionMap:function(e){for(var t=[],n=this._interpreter,r=e[0],i=e[1],a=0;a<i.length;a++)t.push(n.visit(r,i[a]));return t},_functionMerge:function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var i in r)t[i]=r[i]}return t},_functionMax:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.max.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)n.localeCompare(t[r])<0&&(n=t[r]);return n}else return null},_functionMin:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.min.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)t[r].localeCompare(n)<0&&(n=t[r]);return n}else return null},_functionSum:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t},_functionType:function(e){switch(this._getTypeName(e[0])){case s:return`number`;case l:return`string`;case u:return`array`;case d:return`object`;case f:return`boolean`;case p:return`expref`;case m:return`null`}},_functionKeys:function(e){return Object.keys(e[0])},_functionValues:function(e){for(var t=e[0],n=Object.keys(t),r=[],i=0;i<n.length;i++)r.push(t[n[i]]);return r},_functionJoin:function(e){var t=e[0];return e[1].join(t)},_functionToArray:function(e){return this._getTypeName(e[0])===u?e[0]:[e[0]]},_functionToString:function(e){return this._getTypeName(e[0])===l?e[0]:JSON.stringify(e[0])},_functionToNumber:function(e){var t=this._getTypeName(e[0]),n;return t===s?e[0]:t===l&&(n=+e[0],!isNaN(n))?n:null},_functionNotNull:function(e){for(var t=0;t<e.length;t++)if(this._getTypeName(e[t])!==m)return e[t];return null},_functionSort:function(e){var t=e[0].slice(0);return t.sort(),t},_functionSortBy:function(e){var t=e[0].slice(0);if(t.length===0)return t;var n=this._interpreter,r=e[1],i=this._getTypeName(n.visit(r,t[0]));if([s,l].indexOf(i)<0)throw Error(`TypeError`);for(var a=this,o=[],c=0;c<t.length;c++)o.push([c,t[c]]);o.sort(function(e,t){var o=n.visit(r,e[1]),s=n.visit(r,t[1]);if(a._getTypeName(o)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(o));if(a._getTypeName(s)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(s));return o>s?1:o<s?-1:e[0]-t[0]});for(var u=0;u<o.length;u++)t[u]=o[u][1];return t},_functionMaxBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=-1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o>i&&(i=o,a=n[c]);return a},_functionMinBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o<i&&(i=o,a=n[c]);return a},createKeyFunction:function(e,t){var n=this,r=this._interpreter;return function(i){var a=r.visit(e,i);if(t.indexOf(n._getTypeName(a))<0){var o=`TypeError: expected one of `+t+`, received `+n._getTypeName(a);throw Error(o)}return a}}};function Ce(e){return new be().parse(e)}function we(e){return new ve().tokenize(e)}function Te(e,t){var n=new be,r=new Se,i=new xe(r);r._interpreter=i;var a=n.parse(t);return i.search(a,e)}e.tokenize=we,e.compile=Ce,e.search=Te,e.strictDeepEqual=r})(e===void 0?e.jmespath={}:e)}))();var du=class{add(e,t,n){if(typeof arguments[0]!=`string`)for(let e in arguments[0])this.add(e,arguments[0][e],arguments[1]);else (Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},fu=class{constructor(e){this.jsep=e,this.registered={}}register(){[...arguments].forEach(e=>{if(typeof e!=`object`||!e.name||!e.init)throw Error(`Invalid JSEP plugin format`);this.registered[e.name]||(e.init(this.jsep),this.registered[e.name]=e)})}},pu=class e{static get version(){return`1.4.0`}static toString(){return`JavaScript Expression Parser (JSEP) v`+e.version}static addUnaryOp(t){return e.max_unop_len=Math.max(t.length,e.max_unop_len),e.unary_ops[t]=1,e}static addBinaryOp(t,n,r){return e.max_binop_len=Math.max(t.length,e.max_binop_len),e.binary_ops[t]=n,r?e.right_associative.add(t):e.right_associative.delete(t),e}static addIdentifierChar(t){return e.additional_identifier_chars.add(t),e}static addLiteral(t,n){return e.literals[t]=n,e}static removeUnaryOp(t){return delete e.unary_ops[t],t.length===e.max_unop_len&&(e.max_unop_len=e.getMaxKeyLen(e.unary_ops)),e}static removeAllUnaryOps(){return e.unary_ops={},e.max_unop_len=0,e}static removeIdentifierChar(t){return e.additional_identifier_chars.delete(t),e}static removeBinaryOp(t){return delete e.binary_ops[t],t.length===e.max_binop_len&&(e.max_binop_len=e.getMaxKeyLen(e.binary_ops)),e.right_associative.delete(t),e}static removeAllBinaryOps(){return e.binary_ops={},e.max_binop_len=0,e}static removeLiteral(t){return delete e.literals[t],e}static removeAllLiterals(){return e.literals={},e}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(e){this.expr=e,this.index=0}static parse(t){return new e(t).parse()}static getMaxKeyLen(e){return Math.max(0,...Object.keys(e).map(e=>e.length))}static isDecimalDigit(e){return e>=48&&e<=57}static binaryPrecedence(t){return e.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!e.binary_ops[String.fromCharCode(t)]||e.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return e.isIdentifierStart(t)||e.isDecimalDigit(t)}throwError(e){let t=Error(e+` at character `+this.index);throw t.index=this.index,t.description=e,t}runHook(t,n){if(e.hooks[t]){let r={context:this,node:n};return e.hooks.run(t,r),r.node}return n}searchHook(t){if(e.hooks[t]){let n={context:this};return e.hooks[t].find(function(e){return e.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let t=this.code;for(;t===e.SPACE_CODE||t===e.TAB_CODE||t===e.LF_CODE||t===e.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook(`gobble-spaces`)}parse(){this.runHook(`before-all`);let t=this.gobbleExpressions(),n=t.length===1?t[0]:{type:e.COMPOUND,body:t};return this.runHook(`after-all`,n)}gobbleExpressions(t){let n=[],r,i;for(;this.index<this.expr.length;)if(r=this.code,r===e.SEMCOL_CODE||r===e.COMMA_CODE)this.index++;else if(i=this.gobbleExpression())n.push(i);else if(this.index<this.expr.length){if(r===t)break;this.throwError(`Unexpected "`+this.char+`"`)}return n}gobbleExpression(){let e=this.searchHook(`gobble-expression`)||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook(`after-expression`,e)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,e.max_binop_len),n=t.length;for(;n>0;){if(e.binary_ops.hasOwnProperty(t)&&(!e.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=n,t;t=t.substr(0,--n)}return!1}gobbleBinaryExpression(){let t,n,r,i,a,o,s,c,l;if(o=this.gobbleToken(),!o||(n=this.gobbleBinaryOp(),!n))return o;for(a={value:n,prec:e.binaryPrecedence(n),right_a:e.right_associative.has(n)},s=this.gobbleToken(),s||this.throwError(`Expected expression after `+n),i=[o,a,s];n=this.gobbleBinaryOp();){if(r=e.binaryPrecedence(n),r===0){this.index-=n.length;break}a={value:n,prec:r,right_a:e.right_associative.has(n)},l=n;let c=e=>a.right_a&&e.right_a?r>e.prec:r<=e.prec;for(;i.length>2&&c(i[i.length-2]);)s=i.pop(),n=i.pop().value,o=i.pop(),t={type:e.BINARY_EXP,operator:n,left:o,right:s},i.push(t);t=this.gobbleToken(),t||this.throwError(`Expected expression after `+l),i.push(a,t)}for(c=i.length-1,t=i[c];c>1;)t={type:e.BINARY_EXP,operator:i[c-1].value,left:i[c-2],right:t},c-=2;return t}gobbleToken(){let t,n,r,i;if(this.gobbleSpaces(),i=this.searchHook(`gobble-token`),i)return this.runHook(`after-token`,i);if(t=this.code,e.isDecimalDigit(t)||t===e.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===e.SQUOTE_CODE||t===e.DQUOTE_CODE)i=this.gobbleStringLiteral();else if(t===e.OBRACK_CODE)i=this.gobbleArray();else{for(n=this.expr.substr(this.index,e.max_unop_len),r=n.length;r>0;){if(e.unary_ops.hasOwnProperty(n)&&(!e.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=r;let t=this.gobbleToken();return t||this.throwError(`missing unaryOp argument`),this.runHook(`after-token`,{type:e.UNARY_EXP,operator:n,argument:t,prefix:!0})}n=n.substr(0,--r)}e.isIdentifierStart(t)?(i=this.gobbleIdentifier(),e.literals.hasOwnProperty(i.name)?i={type:e.LITERAL,value:e.literals[i.name],raw:i.name}:i.name===e.this_str&&(i={type:e.THIS_EXP})):t===e.OPAREN_CODE&&(i=this.gobbleGroup())}return i?(i=this.gobbleTokenProperty(i),this.runHook(`after-token`,i)):this.runHook(`after-token`,!1)}gobbleTokenProperty(t){this.gobbleSpaces();let n=this.code;for(;n===e.PERIOD_CODE||n===e.OBRACK_CODE||n===e.OPAREN_CODE||n===e.QUMARK_CODE;){let r;if(n===e.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==e.PERIOD_CODE)break;r=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===e.OBRACK_CODE?(t={type:e.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError(`Unexpected "`+this.char+`"`),this.gobbleSpaces(),n=this.code,n!==e.CBRACK_CODE&&this.throwError(`Unclosed [`),this.index++):n===e.OPAREN_CODE?t={type:e.CALL_EXP,arguments:this.gobbleArguments(e.CPAREN_CODE),callee:t}:(n===e.PERIOD_CODE||r)&&(r&&this.index--,this.gobbleSpaces(),t={type:e.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),r&&(t.optional=!0),this.gobbleSpaces(),n=this.code}return t}gobbleNumericLiteral(){let t=``,n,r;for(;e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===e.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(n=this.char,n===`e`||n===`E`){for(t+=this.expr.charAt(this.index++),n=this.char,(n===`+`||n===`-`)&&(t+=this.expr.charAt(this.index++));e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError(`Expected exponent (`+t+this.char+`)`)}return r=this.code,e.isIdentifierStart(r)?this.throwError(`Variable names cannot start with a number (`+t+this.char+`)`):(r===e.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===e.PERIOD_CODE)&&this.throwError(`Unexpected period`),{type:e.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t=``,n=this.index,r=this.expr.charAt(this.index++),i=!1;for(;this.index<this.expr.length;){let e=this.expr.charAt(this.index++);if(e===r){i=!0;break}else if(e===`\\`)switch(e=this.expr.charAt(this.index++),e){case`n`:t+=`
`;break;case`r`:t+=`\r`;break;case`t`:t+=`	`;break;case`b`:t+=`\b`;break;case`f`:t+=`\f`;break;case`v`:t+=`\v`;break;default:t+=e}else t+=e}return i||this.throwError(`Unclosed quote after "`+t+`"`),{type:e.LITERAL,value:t,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let t=this.code,n=this.index;for(e.isIdentifierStart(t)?this.index++:this.throwError(`Unexpected `+this.char);this.index<this.expr.length&&(t=this.code,e.isIdentifierPart(t));)this.index++;return{type:e.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(t){let n=[],r=!1,i=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){r=!0,this.index++,t===e.CPAREN_CODE&&i&&i>=n.length&&this.throwError(`Unexpected token `+String.fromCharCode(t));break}else if(a===e.COMMA_CODE){if(this.index++,i++,i!==n.length){if(t===e.CPAREN_CODE)this.throwError(`Unexpected token ,`);else if(t===e.CBRACK_CODE)for(let e=n.length;e<i;e++)n.push(null)}}else if(n.length!==i&&i!==0)this.throwError(`Expected comma`);else{let t=this.gobbleExpression();(!t||t.type===e.COMPOUND)&&this.throwError(`Expected comma`),n.push(t)}}return r||this.throwError(`Expected `+String.fromCharCode(t)),n}gobbleGroup(){this.index++;let t=this.gobbleExpressions(e.CPAREN_CODE);if(this.code===e.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:e.SEQUENCE_EXP,expressions:t}:!1;this.throwError(`Unclosed (`)}gobbleArray(){return this.index++,{type:e.ARRAY_EXP,elements:this.gobbleArguments(e.CBRACK_CODE)}}},mu=new du;Object.assign(pu,{hooks:mu,plugins:new fu(pu),COMPOUND:`Compound`,SEQUENCE_EXP:`SequenceExpression`,IDENTIFIER:`Identifier`,MEMBER_EXP:`MemberExpression`,LITERAL:`Literal`,THIS_EXP:`ThisExpression`,CALL_EXP:`CallExpression`,UNARY_EXP:`UnaryExpression`,BINARY_EXP:`BinaryExpression`,ARRAY_EXP:`ArrayExpression`,TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set([`**`]),additional_identifier_chars:new Set([`$`,`_`]),literals:{true:!0,false:!1,null:null},this_str:`this`}),pu.max_unop_len=pu.getMaxKeyLen(pu.unary_ops),pu.max_binop_len=pu.getMaxKeyLen(pu.binary_ops);var hu=e=>new pu(e).parse(),gu=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(pu).filter(e=>!gu.includes(e)&&hu[e]===void 0).forEach(e=>{hu[e]=pu[e]}),hu.Jsep=pu;var _u=`ConditionalExpression`;hu.plugins.register({name:`ternary`,init(e){e.hooks.add(`after-expression`,function(t){if(t.node&&this.code===e.QUMARK_CODE){this.index++;let n=t.node,r=this.gobbleExpression();if(r||this.throwError(`Expected expression`),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError(`Expected expression`),t.node={type:_u,test:n,consequent:r,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let r=n;for(;r.right.operator&&e.binary_ops[r.right.operator]<=.9;)r=r.right;t.node.test=r.right,r.right=t.node,t.node=n}}else this.throwError(`Expected :`)}})}});var vu=47,yu=92,bu={name:`regex`,init(e){e.hooks.add(`gobble-token`,function(t){if(this.code===vu){let n=++this.index,r=!1;for(;this.index<this.expr.length;){if(this.code===vu&&!r){let r=this.expr.slice(n,this.index),i=``;for(;++this.index<this.expr.length;){let e=this.code;if(e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57)i+=this.char;else break}let a;try{a=new RegExp(r,i)}catch(e){this.throwError(e.message)}return t.node={type:e.LITERAL,value:a,raw:this.expr.slice(n-1,this.index)},t.node=this.gobbleTokenProperty(t.node),t.node}this.code===e.OBRACK_CODE?r=!0:r&&this.code===e.CBRACK_CODE&&(r=!1),this.index+=this.code===yu?2:1}this.throwError(`Unclosed Regex`)}})}},xu=43,Su={name:`assignment`,assignmentOperators:new Set([`=`,`*=`,`**=`,`/=`,`%=`,`+=`,`-=`,`<<=`,`>>=`,`>>>=`,`&=`,`^=`,`|=`,`||=`,`&&=`,`??=`]),updateOperators:[xu,45],assignmentPrecedence:.9,init(e){let t=[e.IDENTIFIER,e.MEMBER_EXP];Su.assignmentOperators.forEach(t=>e.addBinaryOp(t,Su.assignmentPrecedence,!0)),e.hooks.add(`gobble-token`,function(e){let n=this.code;Su.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(this.index+=2,e.node={type:`UpdateExpression`,operator:n===xu?`++`:`--`,argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!e.node.argument||!t.includes(e.node.argument.type))&&this.throwError(`Unexpected ${e.node.operator}`))}),e.hooks.add(`after-token`,function(e){if(e.node){let n=this.code;Su.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(t.includes(e.node.type)||this.throwError(`Unexpected ${e.node.operator}`),this.index+=2,e.node={type:`UpdateExpression`,operator:n===xu?`++`:`--`,argument:e.node,prefix:!1})}}),e.hooks.add(`after-expression`,function(e){e.node&&n(e.node)});function n(e){Su.assignmentOperators.has(e.operator)?(e.type=`AssignmentExpression`,n(e.left),n(e.right)):e.operator||Object.values(e).forEach(e=>{e&&typeof e==`object`&&n(e)})}}};hu.plugins.register(bu,Su),hu.addUnaryOp(`typeof`),hu.addUnaryOp(`void`),hu.addLiteral(`null`,null),hu.addLiteral(`undefined`,void 0);var Cu=new Set([`constructor`,`__proto__`,`__defineGetter__`,`__defineSetter__`,`__lookupGetter__`,`__lookupSetter__`]),wu={evalAst(e,t){switch(e.type){case`BinaryExpression`:case`LogicalExpression`:return wu.evalBinaryExpression(e,t);case`Compound`:return wu.evalCompound(e,t);case`ConditionalExpression`:return wu.evalConditionalExpression(e,t);case`Identifier`:return wu.evalIdentifier(e,t);case`Literal`:return wu.evalLiteral(e,t);case`MemberExpression`:return wu.evalMemberExpression(e,t);case`UnaryExpression`:return wu.evalUnaryExpression(e,t);case`ArrayExpression`:return wu.evalArrayExpression(e,t);case`CallExpression`:return wu.evalCallExpression(e,t);case`AssignmentExpression`:return wu.evalAssignmentExpression(e,t);default:throw SyntaxError(`Unexpected expression`,e)}},evalBinaryExpression(e,t){return{"||":(e,t)=>e||t(),"&&":(e,t)=>e&&t(),"|":(e,t)=>e|t(),"^":(e,t)=>e^t(),"&":(e,t)=>e&t(),"==":(e,t)=>e==t(),"!=":(e,t)=>e!=t(),"===":(e,t)=>e===t(),"!==":(e,t)=>e!==t(),"<":(e,t)=>e<t(),">":(e,t)=>e>t(),"<=":(e,t)=>e<=t(),">=":(e,t)=>e>=t(),"<<":(e,t)=>e<<t(),">>":(e,t)=>e>>t(),">>>":(e,t)=>e>>>t(),"+":(e,t)=>e+t(),"-":(e,t)=>e-t(),"*":(e,t)=>e*t(),"/":(e,t)=>e/t(),"%":(e,t)=>e%t()}[e.operator](wu.evalAst(e.left,t),()=>wu.evalAst(e.right,t))},evalCompound(e,t){let n;for(let r=0;r<e.body.length;r++){e.body[r].type===`Identifier`&&[`var`,`let`,`const`].includes(e.body[r].name)&&e.body[r+1]&&e.body[r+1].type===`AssignmentExpression`&&(r+=1);let i=e.body[r];n=wu.evalAst(i,t)}return n},evalConditionalExpression(e,t){return wu.evalAst(e.test,t)?wu.evalAst(e.consequent,t):wu.evalAst(e.alternate,t)},evalIdentifier(e,t){if(Object.hasOwn(t,e.name))return t[e.name];throw ReferenceError(`${e.name} is not defined`)},evalLiteral(e){return e.value},evalMemberExpression(e,t){let n=String(e.computed?wu.evalAst(e.property):e.property.name),r=wu.evalAst(e.object,t);if(r==null||!Object.hasOwn(r,n)&&Cu.has(n))throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);let i=r[n];return typeof i==`function`?i.bind(r):i},evalUnaryExpression(e,t){return{"-":e=>-wu.evalAst(e,t),"!":e=>!wu.evalAst(e,t),"~":e=>~wu.evalAst(e,t),"+":e=>+wu.evalAst(e,t),typeof:e=>typeof wu.evalAst(e,t),void:e=>void wu.evalAst(e,t)}[e.operator](e.argument)},evalArrayExpression(e,t){return e.elements.map(e=>wu.evalAst(e,t))},evalCallExpression(e,t){let n=e.arguments.map(e=>wu.evalAst(e,t)),r=wu.evalAst(e.callee,t);if(r===Function)throw Error(`Function constructor is disabled`);return r(...n)},evalAssignmentExpression(e,t){if(e.left.type!==`Identifier`)throw SyntaxError(`Invalid left-hand side in assignment`);let n=e.left.name;return t[n]=wu.evalAst(e.right,t),t[n]}},Tu=class{constructor(e){this.code=e,this.ast=hu(this.code)}runInNewContext(e){let t=Object.assign(Object.create(null),e);return wu.evalAst(this.ast,t)}};function Eu(e,t){return e=e.slice(),e.push(t),e}function Du(e,t){return t=t.slice(),t.unshift(e),t}var Ou=class extends Error{constructor(e){super(`JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)`),this.avoidNew=!0,this.value=e,this.name=`NewError`}};function ku(e,t,n,r,i){if(!(this instanceof ku))try{return new ku(e,t,n,r,i)}catch(e){if(!e.avoidNew)throw e;return e.value}typeof e==`string`&&(i=r,r=n,n=t,t=e,e=null);let a=e&&typeof e==`object`;if(e||={},this.json=e.json||n,this.path=e.path||t,this.resultType=e.resultType||`value`,this.flatten=e.flatten||!1,this.wrap=Object.hasOwn(e,`wrap`)?e.wrap:!0,this.sandbox=e.sandbox||{},this.eval=e.eval===void 0?`safe`:e.eval,this.ignoreEvalErrors=e.ignoreEvalErrors===void 0?!1:e.ignoreEvalErrors,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||r||null,this.otherTypeCallback=e.otherTypeCallback||i||function(){throw TypeError(`You must supply an otherTypeCallback callback option with the @other() operator.`)},e.autostart!==!1){let r={path:a?e.path:t};a?`json`in e&&(r.json=e.json):r.json=n;let i=this.evaluate(r);if(!i||typeof i!=`object`)throw new Ou(i);return i}}ku.prototype.evaluate=function(e,t,n,r){let i=this.parent,a=this.parentProperty,{flatten:o,wrap:s}=this;if(this.currResultType=this.resultType,this.currEval=this.eval,this.currSandbox=this.sandbox,n||=this.callback,this.currOtherTypeCallback=r||this.otherTypeCallback,t||=this.json,e||=this.path,e&&typeof e==`object`&&!Array.isArray(e)){if(!e.path&&e.path!==``)throw TypeError(`You must supply a "path" property when providing an object argument to JSONPath.evaluate().`);if(!Object.hasOwn(e,`json`))throw TypeError(`You must supply a "json" property when providing an object argument to JSONPath.evaluate().`);({json:t}=e),o=Object.hasOwn(e,`flatten`)?e.flatten:o,this.currResultType=Object.hasOwn(e,`resultType`)?e.resultType:this.currResultType,this.currSandbox=Object.hasOwn(e,`sandbox`)?e.sandbox:this.currSandbox,s=Object.hasOwn(e,`wrap`)?e.wrap:s,this.currEval=Object.hasOwn(e,`eval`)?e.eval:this.currEval,n=Object.hasOwn(e,`callback`)?e.callback:n,this.currOtherTypeCallback=Object.hasOwn(e,`otherTypeCallback`)?e.otherTypeCallback:this.currOtherTypeCallback,i=Object.hasOwn(e,`parent`)?e.parent:i,a=Object.hasOwn(e,`parentProperty`)?e.parentProperty:a,e=e.path}if(i||=null,a||=null,Array.isArray(e)&&(e=ku.toPathString(e)),!e&&e!==``||!t)return;let c=ku.toPathArray(e);c[0]===`$`&&c.length>1&&c.shift(),this._hasParentSelector=null;let l=this._trace(c,t,[`$`],i,a,n).filter(function(e){return e&&!e.isParentSelector});return l.length?!s&&l.length===1&&!l[0].hasArrExpr?this._getPreferredOutput(l[0]):l.reduce((e,t)=>{let n=this._getPreferredOutput(t);return o&&Array.isArray(n)?e=e.concat(n):e.push(n),e},[]):s?[]:void 0},ku.prototype._getPreferredOutput=function(e){let t=this.currResultType;switch(t){case`all`:{let t=Array.isArray(e.path)?e.path:ku.toPathArray(e.path);return e.pointer=ku.toPointer(t),e.path=typeof e.path==`string`?e.path:ku.toPathString(e.path),e}case`value`:case`parent`:case`parentProperty`:return e[t];case`path`:return ku.toPathString(e[t]);case`pointer`:return ku.toPointer(e.path);default:throw TypeError(`Unknown result type`)}},ku.prototype._handleCallback=function(e,t,n){if(t){let r=this._getPreferredOutput(e);e.path=typeof e.path==`string`?e.path:ku.toPathString(e.path),t(r,n,e)}},ku.prototype._trace=function(e,t,n,r,i,a,o,s){let c;if(!e.length)return c={path:n,value:t,parent:r,parentProperty:i,hasArrExpr:o},this._handleCallback(c,a,`value`),c;let l=e[0],u=e.slice(1),d=[];function f(e){Array.isArray(e)?e.forEach(e=>{d.push(e)}):d.push(e)}if((typeof l!=`string`||s)&&t&&Object.hasOwn(t,l))f(this._trace(u,t[l],Eu(n,l),t,l,a,o));else if(l===`*`)this._walk(t,e=>{f(this._trace(u,t[e],Eu(n,e),t,e,a,!0,!0))});else if(l===`..`)f(this._trace(u,t,n,r,i,a,o)),this._walk(t,r=>{typeof t[r]==`object`&&f(this._trace(e.slice(),t[r],Eu(n,r),t,r,a,!0))});else if(l===`^`)return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:u,isParentSelector:!0};else if(l===`~`)return c={path:Eu(n,l),value:i,parent:r,parentProperty:null},this._handleCallback(c,a,`property`),c;else if(l===`$`)f(this._trace(u,t,n,null,null,a,o));else if(/^(-?\d*):(-?\d*):?(\d*)$/u.test(l))f(this._slice(l,u,t,n,r,i,a));else if(l.indexOf(`?(`)===0){if(this.currEval===!1)throw Error(`Eval [?(expr)] prevented in JSONPath expression.`);let e=l.replace(/^\?\((.*?)\)$/u,`$1`),o=/@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(e);o?this._walk(t,e=>{let s=[o[2]],c=o[1]?t[e][o[1]]:t[e];this._trace(s,c,n,r,i,a,!0).length>0&&f(this._trace(u,t[e],Eu(n,e),t,e,a,!0))}):this._walk(t,o=>{this._eval(e,t[o],o,n,r,i)&&f(this._trace(u,t[o],Eu(n,o),t,o,a,!0))})}else if(l[0]===`(`){if(this.currEval===!1)throw Error(`Eval [(expr)] prevented in JSONPath expression.`);f(this._trace(Du(this._eval(l,t,n.at(-1),n.slice(0,-1),r,i),u),t,n,r,i,a,o))}else if(l[0]===`@`){let e=!1,o=l.slice(1,-2);switch(o){case`scalar`:(!t||![`object`,`function`].includes(typeof t))&&(e=!0);break;case`boolean`:case`string`:case`undefined`:case`function`:typeof t===o&&(e=!0);break;case`integer`:Number.isFinite(t)&&!(t%1)&&(e=!0);break;case`number`:Number.isFinite(t)&&(e=!0);break;case`nonFinite`:typeof t==`number`&&!Number.isFinite(t)&&(e=!0);break;case`object`:t&&typeof t===o&&(e=!0);break;case`array`:Array.isArray(t)&&(e=!0);break;case`other`:e=this.currOtherTypeCallback(t,n,r,i);break;case`null`:t===null&&(e=!0);break;default:throw TypeError(`Unknown value type `+o)}if(e)return c={path:n,value:t,parent:r,parentProperty:i},this._handleCallback(c,a,`value`),c}else if(l[0]==="`"&&t&&Object.hasOwn(t,l.slice(1))){let e=l.slice(1);f(this._trace(u,t[e],Eu(n,e),t,e,a,o,!0))}else if(l.includes(`,`)){let e=l.split(`,`);for(let o of e)f(this._trace(Du(o,u),t,n,r,i,a,!0))}else !s&&t&&Object.hasOwn(t,l)&&f(this._trace(u,t[l],Eu(n,l),t,l,a,o,!0));if(this._hasParentSelector)for(let e=0;e<d.length;e++){let n=d[e];if(n&&n.isParentSelector){let s=this._trace(n.expr,t,n.path,r,i,a,o);if(Array.isArray(s)){d[e]=s[0];let t=s.length;for(let n=1;n<t;n++)e++,d.splice(e,0,s[n])}else d[e]=s}}return d},ku.prototype._walk=function(e,t){if(Array.isArray(e)){let n=e.length;for(let e=0;e<n;e++)t(e)}else e&&typeof e==`object`&&Object.keys(e).forEach(e=>{t(e)})},ku.prototype._slice=function(e,t,n,r,i,a,o){if(!Array.isArray(n))return;let s=n.length,c=e.split(`:`),l=c[2]&&Number.parseInt(c[2])||1,u=c[0]&&Number.parseInt(c[0])||0,d=c[1]&&Number.parseInt(c[1])||s;u=u<0?Math.max(0,u+s):Math.min(s,u),d=d<0?Math.max(0,d+s):Math.min(s,d);let f=[];for(let e=u;e<d;e+=l)this._trace(Du(e,t),n,r,i,a,o,!0).forEach(e=>{f.push(e)});return f},ku.prototype._eval=function(e,t,n,r,i,a){this.currSandbox._$_parentProperty=a,this.currSandbox._$_parent=i,this.currSandbox._$_property=n,this.currSandbox._$_root=this.json,this.currSandbox._$_v=t;let o=e.includes(`@path`);o&&(this.currSandbox._$_path=ku.toPathString(r.concat([n])));let s=this.currEval+`Script:`+e;if(!ku.cache[s]){let t=e.replaceAll(`@parentProperty`,`_$_parentProperty`).replaceAll(`@parent`,`_$_parent`).replaceAll(`@property`,`_$_property`).replaceAll(`@root`,`_$_root`).replaceAll(/@([.\s)[])/gu,`_$_v$1`);if(o&&(t=t.replaceAll(`@path`,`_$_path`)),this.currEval===`safe`||this.currEval===!0||this.currEval===void 0)ku.cache[s]=new this.safeVm.Script(t);else if(this.currEval===`native`)ku.cache[s]=new this.vm.Script(t);else if(typeof this.currEval==`function`&&this.currEval.prototype&&Object.hasOwn(this.currEval.prototype,`runInNewContext`)){let e=this.currEval;ku.cache[s]=new e(t)}else if(typeof this.currEval==`function`)ku.cache[s]={runInNewContext:e=>this.currEval(t,e)};else throw TypeError(`Unknown "eval" property "${this.currEval}"`)}try{return ku.cache[s].runInNewContext(this.currSandbox)}catch(t){if(this.ignoreEvalErrors)return!1;throw Error(`jsonPath: `+t.message+`: `+e)}},ku.cache={},ku.toPathString=function(e){let t=e,n=t.length,r=`$`;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=/^[0-9*]+$/u.test(t[e])?`[`+t[e]+`]`:`['`+t[e]+`']`);return r},ku.toPointer=function(e){let t=e,n=t.length,r=``;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=`/`+t[e].toString().replaceAll(`~`,`~0`).replaceAll(`/`,`~1`));return r},ku.toPathArray=function(e){let{cache:t}=ku;if(t[e])return t[e].concat();let n=[];return t[e]=e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu,`;$&;`).replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu,function(e,t){return`[#`+(n.push(t)-1)+`]`}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu,function(e,t){return`['`+t.replaceAll(`.`,`%@%`).replaceAll(`~`,`%%@@%%`)+`']`}).replaceAll(`~`,`;~;`).replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu,`;`).replaceAll(`%@%`,`.`).replaceAll(`%%@@%%`,`~`).replaceAll(/(?:;)?(\^+)(?:;)?/gu,function(e,t){return`;`+t.split(``).join(`;`)+`;`}).replaceAll(/;;;|;;/gu,`;..;`).replaceAll(/;$|'?\]|'$/gu,``).split(`;`).map(function(e){let t=e.match(/#(\d+)/u);return!t||!t[1]?e:n[t[1]]}),t[e].concat()},ku.prototype.safeVm={Script:Tu};var Au=function(e,t,n){let r=e.length;for(let i=0;i<r;i++){let r=e[i];n(r)&&t.push(e.splice(i--,1)[0])}},ju=class{constructor(e){this.code=e}runInNewContext(e){let t=this.code,n=Object.keys(e),r=[];Au(n,r,t=>typeof e[t]==`function`);let i=n.map(t=>e[t]);t=r.reduce((t,n)=>{let r=e[n].toString();return/function/u.test(r)||(r=`function `+r),`var `+n+`=`+r+`;`+t},``)+t,!/(['"])use strict\1/u.test(t)&&!n.includes(`arguments`)&&(t=`var arguments = undefined;`+t),t=t.replace(/;\s*$/u,``);let a=t.lastIndexOf(`;`),o=a===-1?` return `+t:t.slice(0,a+1)+` return `+t.slice(a+1);return Function(...n,o)(...i)}};ku.prototype.vm={Script:ju};function Mu(e,t=e.state){let n=new Set;for(let{from:r,to:i}of e.visibleRanges){let e=r;for(;e<=i;){let r=t.doc.lineAt(e);n.has(r)||n.add(r),e=r.to+1}}return n}function Nu(e){let t=e.selection.main.head;return e.doc.lineAt(t)}function Pu(e,t){let n=0;loop:for(let r=0;r<e.length;r++)switch(e[r]){case` `:case`\xA0`:n+=1;continue loop;case`	`:n+=t-n%t;continue loop;case`\r`:continue loop;default:break loop}return n}var Fu=A.define({combine(e){return ee(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:`fullScope`,thickness:1})}}),Iu=class{constructor(e,t,n,r){this.lines=e,this.state=t,this.map=new Map,this.unitWidth=n,this.markerType=r;for(let e of this.lines)this.add(e);this.state.facet(Fu).highlightActiveBlock&&this.findAndSetActiveLines()}has(e){return this.map.has(typeof e==`number`?e:e.number)}get(e){let t=this.map.get(typeof e==`number`?e:e.number);if(!t)throw Error(`Line not found in indentation map`);return t}set(e,t,n){let r={line:e,col:t,level:n,empty:!e.text.trim().length};return this.map.set(r.line.number,r),r}add(e){if(this.has(e))return this.get(e);if(!e.length||!e.text.trim().length){if(e.number===1)return this.set(e,0,0);if(e.number===this.state.doc.lines){let t=this.closestNonEmpty(e,-1);return this.set(e,0,t.level)}let t=this.closestNonEmpty(e,-1),n=this.closestNonEmpty(e,1);return t.level>=n.level&&this.markerType!==`codeOnly`?this.set(e,0,t.level):t.empty&&t.level===0&&n.level!==0?this.set(e,0,0):n.level>t.level?this.set(e,0,t.level+1):this.set(e,0,n.level)}let t=Pu(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}closestNonEmpty(e,t){let n=e.number+t;for(;t===-1?n>=1:n<=this.state.doc.lines;){if(this.has(n)){let e=this.get(n);if(!e.empty)return e}let e=this.state.doc.line(n);if(e.text.trim().length){let t=Pu(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}n+=t}let r=this.state.doc.line(t===-1?1:this.state.doc.lines);return this.set(r,0,0)}findAndSetActiveLines(){let e=Nu(this.state);if(!this.has(e))return;let t=this.get(e);if(this.has(t.line.number+1)){let e=this.get(t.line.number+1);e.level>t.level&&(t=e)}if(this.has(t.line.number-1)){let e=this.get(t.line.number-1);e.level>t.level&&(t=e)}if(t.level===0)return;t.active=t.level;let n,r;for(n=t.line.number;n>1;n--){if(!this.has(n-1))continue;let e=this.get(n-1);if(e.level<t.level)break;e.active=t.level}for(r=t.line.number;r<this.state.doc.lines;r++){if(!this.has(r+1))continue;let e=this.get(r+1);if(e.level<t.level)break;e.active=t.level}}};function Lu(e){let t={light:`#F0F1F2`,dark:`#2B3245`,activeLight:`#E4E5E6`,activeDark:`#3C445C`},n=t;return e&&(n=Object.assign(Object.assign({},t),e)),re.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:`relative`},".cm-indent-markers::before":{content:`""`,position:`absolute`,top:0,left:`2px`,right:0,bottom:0,background:`var(--indent-markers)`,pointerEvents:`none`,zIndex:`-1`}})}function Ru(e,t,n,r,i){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${n}ch)`} ${r*n}.5ch/calc(${n*i}ch - 1px) no-repeat`}function zu(e,t,n,r,i){let{level:a,active:o}=e;if(i??=r,n&&a===0)return[];let s=+!!n,c=[];if(o!==void 0){let e=o-s-1;e>0&&c.push(Ru(`--indent-marker-bg-color`,r,t,s,e)),c.push(Ru(`--indent-marker-active-bg-color`,i,t,o-1,1)),o!==a&&c.push(Ru(`--indent-marker-bg-color`,r,t,o,a-o))}else c.push(Ru(`--indent-marker-bg-color`,r,t,s,a-s));return c.join(`,`)}var Bu=class{constructor(e){this.view=e,this.unitWidth=b(e.state),this.currentLineNumber=Nu(e.state).number,this.generate(e.state)}update(e){let t=b(e.state),n=t!==this.unitWidth;n&&(this.unitWidth=t);let r=Nu(e.state).number,i=r!==this.currentLineNumber;this.currentLineNumber=r;let a=e.state.facet(Fu).highlightActiveBlock&&i;(e.docChanged||e.viewportChanged||n||a)&&this.generate(e.state)}generate(e){let t=new ue,n=Mu(this.view,e),{hideFirstIndent:r,markerType:i,thickness:a,activeThickness:o}=e.facet(Fu),s=new Iu(n,e,this.unitWidth,i);for(let e of n){let n=s.get(e.number);if(!n?.level)continue;let i=zu(n,this.unitWidth,r,a,o);t.add(e.from,e.from,w.line({class:`cm-indent-markers`,attributes:{style:`--indent-markers: ${i}`}}))}this.decorations=t.finish()}};function Vu(e={}){return[Fu.of(e),Lu(e.colors),y.fromClass(Bu,{decorations:e=>e.decorations})]}var Hu,Uu,Wu,Gu=[`mainAxis`,`crossAxis`,`fallbackPlacements`,`fallbackStrategy`,`fallbackAxisSideDirection`,`flipAlignment`],Ku=[`mainAxis`,`crossAxis`,`limiter`];function qu(e,t){if(e==null)return{};var n,r,i=function(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ju(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ju(Object(n),!0).forEach(function(t){nd(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ju(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yu(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Xu(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Yu(a,r,i,o,s,`next`,e)}function s(e){Yu(a,r,i,o,s,`throw`,e)}o(void 0)})}}function Zu(e,t){$u(e,t),t.add(e)}function Qu(e,t,n){$u(e,t),t.set(e,n)}function $u(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function ed(e,t,n){return e.set(td(e,t),n),n}function R(e,t){return e.get(td(e,t))}function td(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function nd(e,t,n){return(t=function(e){var t=function(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}(e,`string`);return typeof t==`symbol`?t:t+``}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var rd,id;typeof window<`u`&&((rd=(id=window).__svelte??(id.__svelte={})).v??(rd.v=new Set)).add(`5`);var ad=!1;ad=!0;var od=Symbol(),sd=`http://www.w3.org/1999/xhtml`,cd=Array.isArray,ld=Array.prototype.indexOf,ud=Array.prototype.includes,dd=Array.from,fd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,md=Object.getOwnPropertyDescriptors,hd=Object.prototype,gd=Array.prototype,_d=Object.getPrototypeOf,vd=Object.isExtensible;function yd(e){return typeof e==`function`}var bd=()=>{};function xd(e){return e()}function Sd(e){for(var t=0;t<e.length;t++)e[t]()}function Cd(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var wd=1<<24,Td=16,Ed=32,Dd=64,Od=512,kd=1024,Ad=2048,jd=4096,Md=8192,Nd=16384,Pd=32768,Fd=1<<25,Id=65536,Ld=1<<17,Rd=1<<19,zd=1<<25,Bd=65536,Vd=1<<21,Hd=1<<23,Ud=Symbol(`$state`),Wd=Symbol(`legacy props`),Gd=Symbol(``),Kd=new class extends Error{constructor(){super(...arguments),nd(this,`name`,`StaleReactionError`),nd(this,`message`,"The reaction that called `getAbortSignal()` was re-run or destroyed")}},qd=!((Hu=globalThis.document)==null||!Hu.contentType)&&globalThis.document.contentType.includes(`xml`);function Jd(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function Yd(e){return e===this.v}function Xd(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Zd(e){return!Xd(e,this.v)}var Qd=null;function $d(e){Qd=e}function ef(e){return af().get(e)}function tf(e){Qd={p:Qd,i:!1,c:null,e:null,s:e,x:null,r:jm,l:ad&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function nf(e){var t=Qd,n=t.e;if(n!==null)for(var r of(t.e=null,n))cm(r);return e!==void 0&&(t.x=e),t.i=!0,Qd=t.p,e??{}}function rf(){return!ad||Qd!==null&&Qd.l===null}function af(e){var t;return Qd===null&&Jd(),(t=Qd).c??(t.c=new Map(function(e){for(var t=e.p;t!==null;){var n=t.c;if(n!==null)return n;t=t.p}return null}(Qd)||void 0))}var of=[];function sf(){var e=of;of=[],Sd(e)}function cf(e){if(of.length===0&&!Sf){var t=of;queueMicrotask(()=>{t===of&&sf()})}of.push(e)}function lf(){for(;of.length>0;)sf()}function uf(e){var t=jm;if(t===null)return Om.f|=Hd,e;if((t.f&Pd)===0&&!(4&t.f))throw e;df(e,t)}function df(e,t){for(;t!==null;){if(128&t.f){if((t.f&Pd)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var ff=-7169;function pf(e,t){e.f=e.f&ff|t}function mf(e){(e.f&Od)!==0||e.deps===null?pf(e,kd):pf(e,jd)}function hf(e){if(e!==null)for(var t of e)2&t.f&&(t.f&Bd)!==0&&(t.f^=Bd,hf(t.deps))}function gf(e,t,n){(e.f&Ad)===0?(e.f&jd)!==0&&n.add(e):t.add(e),hf(e.deps),pf(e,kd)}var _f=!1,vf=new Set,yf=null,bf=null,xf=null,Sf=!1,Cf=!1,wf=null,Tf=null,Ef=0,Df=1,Of=new WeakMap,kf=new WeakMap,Af=new WeakMap,jf=new WeakMap,Mf=new WeakMap,Nf=new WeakMap,Pf=new WeakMap,Ff=new WeakMap,If=new WeakMap,Lf=new WeakMap,Rf=new WeakMap,zf=new WeakMap,Bf=new WeakSet,Vf=class e{constructor(){Zu(this,Bf),nd(this,`id`,Df++),nd(this,`current`,new Map),nd(this,`previous`,new Map),Qu(this,Of,new Set),Qu(this,kf,new Set),Qu(this,Af,new Map),Qu(this,jf,new Map),Qu(this,Mf,null),Qu(this,Nf,[]),Qu(this,Pf,[]),Qu(this,Ff,new Set),Qu(this,If,new Set),Qu(this,Lf,new Map),nd(this,`is_fork`,!1),Qu(this,Rf,!1),Qu(this,zf,new Set)}skip_effect(e){R(Lf,this).has(e)||R(Lf,this).set(e,{d:[],m:[]})}unskip_effect(e){var t=R(Lf,this).get(e);if(t){for(var n of(R(Lf,this).delete(e),t.d))pf(n,Ad),this.schedule(n);for(n of t.m)pf(n,jd),this.schedule(n)}}capture(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];(t===od||this.previous.has(e)||this.previous.set(e,t),(e.f&Hd)===0)&&(this.current.set(e,[e.v,r]),(n=bf)==null||n.set(e,e.v))}activate(){yf=this}deactivate(){yf=null,bf=null}flush(){try{Cf=!0,yf=this,td(Bf,this,Wf).call(this)}finally{Ef=0,xf=null,wf=null,Tf=null,Cf=!1,yf=null,bf=null,Lp.clear()}}discard(){for(var e of R(kf,this))e(this);R(kf,this).clear(),vf.delete(this)}register_created_effect(e){R(Pf,this).push(e)}increment(e,t){var n=R(Af,this).get(t)??0;if(R(Af,this).set(t,n+1),e){var r=R(jf,this).get(t)??0;R(jf,this).set(t,r+1)}}decrement(e,t,n){var r=R(Af,this).get(t)??0;if(r===1?R(Af,this).delete(t):R(Af,this).set(t,r-1),e){var i=R(jf,this).get(t)??0;i===1?R(jf,this).delete(t):R(jf,this).set(t,i-1)}R(Rf,this)||n||(ed(Rf,this,!0),cf(()=>{ed(Rf,this,!1),this.flush()}))}transfer_effects(e,t){for(var n of e)R(Ff,this).add(n);for(var r of t)R(If,this).add(r);e.clear(),t.clear()}oncommit(e){R(Of,this).add(e)}ondiscard(e){R(kf,this).add(e)}settled(){return(R(Mf,this)??ed(Mf,this,Cd())).promise}static ensure(){if(yf===null){var t=yf=new e;Cf||(vf.add(yf),Sf||cf(()=>{yf===t&&t.flush()}))}return yf}apply(){bf=null}schedule(e){var t;if(xf=e,(t=e.b)!=null&&t.is_pending&&16777228&e.f&&(e.f&Pd)===0)e.b.defer_effect(e);else{for(var n=e;n.parent!==null;){var r=(n=n.parent).f;if(!(wf===null||n!==jm||Om!==null&&2&Om.f))return;if(96&r){if((r&kd)===0)return;n.f^=kd}}R(Nf,this).push(n)}}};function Hf(){return this.is_fork||R(jf,this).size>0}function Uf(){for(var e of R(zf,this))for(var t of R(jf,e).keys()){for(var n=!1,r=t;r.parent!==null;){if(R(Lf,this).has(r)){n=!0;break}r=r.parent}if(!n)return!0}return!1}function Wf(){if(Ef++>1e3&&(vf.delete(this),function(){try{(function(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)})()}catch(e){df(e,xf)}}()),!td(Bf,this,Hf).call(this)){for(var e of R(Ff,this))R(If,this).delete(e),pf(e,Ad),this.schedule(e);for(var t of R(If,this))pf(t,jd),this.schedule(t)}var n=R(Nf,this);ed(Nf,this,[]),this.apply();var r=wf=[],i=[],a=Tf=[];for(var o of n)try{td(Bf,this,Gf).call(this,o,r,i)}catch(e){throw tp(o),e}if(yf=null,a.length>0){var s=Uu.ensure();for(var c of a)s.schedule(c)}if(wf=null,Tf=null,td(Bf,this,Hf).call(this)||td(Bf,this,Uf).call(this))for(var[l,u]of(td(Bf,this,Kf).call(this,i),td(Bf,this,Kf).call(this,r),R(Lf,this)))ep(l,u);else{var d;for(var f of(R(Af,this).size===0&&vf.delete(this),R(Ff,this).clear(),R(If,this).clear(),R(Of,this)))f(this);R(Of,this).clear(),Xf(i),Xf(r),(d=R(Mf,this))==null||d.resolve()}var p,m=yf;if(R(Nf,this).length>0){var h=m??=this;R(Nf,h).push(...R(Nf,this).filter(e=>!R(Nf,h).includes(e)))}m!==null&&(vf.add(m),td(Bf,p=m,Wf).call(p)),vf.has(this)||td(Bf,this,qf).call(this)}function Gf(e,t,n){e.f^=kd;for(var r=e.first;r!==null;){var i=r.f,a=!!(96&i);if(!(a&&(i&kd)!==0||(i&Md)!==0||R(Lf,this).has(r))&&r.fn!==null){a?r.f^=kd:4&i?t.push(r):Um(r)&&((i&Td)!==0&&R(If,this).add(r),Jm(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}function Kf(e){for(var t=0;t<e.length;t+=1)gf(e[t],R(Ff,this),R(If,this))}function qf(){for(var e of vf){var t=e.id<this.id,n=[];for(var[r,[i,a]]of this.current){if(e.current.has(r)){var o=e.current.get(r)[0];if(!t||i===o)continue;e.current.set(r,[i,a])}n.push(r)}var s=[...e.current.keys()].filter(e=>!this.current.has(e));if(s.length===0)t&&e.discard();else if(n.length>0){e.activate();var c=new Set,l=new Map;for(var u of n)Zf(u,s,c,l);l=new Map;var d=[...e.current.keys()].filter(e=>!this.current.has(e)||this.current.get(e)[0]!==e);for(var f of R(Pf,this))155648&f.f||!Qf(f,d,l)||(4194320&f.f?(pf(f,Ad),e.schedule(f)):R(Ff,e).add(f));if(R(Nf,e).length>0){for(var p of(e.apply(),R(Nf,e)))td(Bf,e,Gf).call(e,p,[],[]);ed(Nf,e,[])}e.deactivate()}}for(var m of vf)R(zf,m).has(this)&&(R(zf,m).delete(this),R(zf,m).size!==0||td(Bf,m,Hf).call(m)||(m.activate(),td(Bf,m,Wf).call(m)))}function Jf(e){var t=Sf;Sf=!0;try{for(;;){if(lf(),yf===null)return;yf.flush()}}finally{Sf=t}}Uu=Vf;var Yf=null;function Xf(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(24576&r.f)&&Um(r)&&(Yf=new Set,Jm(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ym(r),Yf?.size>0)){for(var i of(Lp.clear(),Yf))if(!(24576&i.f)){for(var a=[i],o=i.parent;o!==null;)Yf.has(o)&&(Yf.delete(o),a.push(o)),o=o.parent;for(var s=a.length-1;s>=0;s--){var c=a[s];24576&c.f||Jm(c)}}Yf.clear()}}Yf=null}}function Zf(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(var i of e.reactions){var a=i.f;2&a?Zf(i,t,n,r):4194320&a&&(a&Ad)===0&&Qf(i,t,r)&&(pf(i,Ad),$f(i))}}function Qf(e,t,n){var r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(var i of e.deps){if(ud.call(t,i))return!0;if(2&i.f&&Qf(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function $f(e){yf.schedule(e)}function ep(e,t){if((e.f&Ed)===0||(e.f&kd)===0){(e.f&Ad)===0?(e.f&jd)!==0&&t.m.push(e):t.d.push(e),pf(e,kd);for(var n=e.first;n!==null;)ep(n,t),n=n.next}}function tp(e){pf(e,kd);for(var t=e.first;t!==null;)tp(t),t=t.next}var np=new WeakMap,rp=new WeakMap,ip=new WeakMap,ap=new WeakMap,op=new WeakMap,sp=new WeakMap,cp=new WeakMap,lp=new WeakMap,up=new WeakMap,dp=new WeakMap,fp=new WeakMap,pp=new WeakMap,mp=new WeakMap,hp=new WeakMap,gp=new WeakMap,_p=new WeakMap,vp=new WeakSet,yp=class{constructor(e,t,n,r){var i,a,o,s;Zu(this,vp),nd(this,`parent`,void 0),nd(this,`is_pending`,!1),nd(this,`transform_error`,void 0),Qu(this,np,void 0),Qu(this,rp,null),Qu(this,ip,void 0),Qu(this,ap,void 0),Qu(this,op,void 0),Qu(this,sp,null),Qu(this,cp,null),Qu(this,lp,null),Qu(this,up,null),Qu(this,dp,0),Qu(this,fp,0),Qu(this,pp,!1),Qu(this,mp,new Set),Qu(this,hp,new Set),Qu(this,gp,null),Qu(this,_p,(i=()=>(ed(gp,this,zp(R(dp,this))),()=>{ed(gp,this,null)}),o=0,s=zp(0),()=>{am()&&(K(s),dm(()=>(o===0&&(a=q(()=>i(()=>Wp(s)))),o+=1,()=>{cf(()=>{var e;--o==0&&((e=a)==null||e(),a=void 0,Wp(s))})})))})),ed(np,this,e),ed(ip,this,t),ed(ap,this,e=>{var t=jm;t.b=this,t.f|=128,n(e)}),this.parent=jm.b,this.transform_error=r??this.parent?.transform_error??(e=>e),ed(op,this,fm(()=>{td(vp,this,bp).call(this)},589824))}defer_effect(e){gf(e,R(mp,this),R(hp,this))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!R(ip,this).pending}update_pending_count(e,t){td(vp,this,Cp).call(this,e,t),ed(dp,this,R(dp,this)+e),R(gp,this)&&!R(pp,this)&&(ed(pp,this,!0),cf(()=>{ed(pp,this,!1),R(gp,this)&&Hp(R(gp,this),R(dp,this))}))}get_effect_pending(){return R(_p,this).call(this),K(R(gp,this))}error(e){var t=R(ip,this).onerror,n=R(ip,this).failed;if(!t&&!n)throw e;R(sp,this)&&(_m(R(sp,this)),ed(sp,this,null)),R(cp,this)&&(_m(R(cp,this)),ed(cp,this,null)),R(lp,this)&&(_m(R(lp,this)),ed(lp,this,null));var r=!1,i=!1,a=()=>{r?console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`):(r=!0,i&&function(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}(),R(lp,this)!==null&&bm(R(lp,this),()=>{ed(lp,this,null)}),td(vp,this,Sp).call(this,()=>{td(vp,this,bp).call(this)}))},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){df(e,R(op,this)&&R(op,this).parent)}n&&ed(lp,this,td(vp,this,Sp).call(this,()=>{try{return mm(()=>{var t=jm;t.b=this,t.f|=128,n(R(np,this),()=>e,()=>a)})}catch(e){return df(e,R(op,this).parent),null}}))};cf(()=>{var t;try{t=this.transform_error(e)}catch(e){df(e,R(op,this)&&R(op,this).parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>df(e,R(op,this)&&R(op,this).parent)):o(t)})}};function bp(){try{if(this.is_pending=this.has_pending_snippet(),ed(fp,this,0),ed(dp,this,0),ed(sp,this,mm(()=>{R(ap,this).call(this,R(np,this))})),R(fp,this)>0){var e=ed(up,this,document.createDocumentFragment());wm(R(sp,this),e);var t=R(ip,this).pending;ed(cp,this,mm(()=>t(R(np,this))))}else td(vp,this,xp).call(this,yf)}catch(e){this.error(e)}}function xp(e){this.is_pending=!1,e.transfer_effects(R(mp,this),R(hp,this))}function Sp(e){var t=jm,n=Om,r=Qd;Mm(R(op,this)),Am(R(op,this)),$d(R(op,this).ctx);try{return Vf.ensure(),e()}catch(e){return uf(e),null}finally{Mm(t),Am(n),$d(r)}}function Cp(e,t){var n;this.has_pending_snippet()?(ed(fp,this,R(fp,this)+e),R(fp,this)===0&&(td(vp,this,xp).call(this,t),R(cp,this)&&bm(R(cp,this),()=>{ed(cp,this,null)}),R(up,this)&&(R(np,this).before(R(up,this)),ed(up,this,null)))):this.parent&&td(vp,n=this.parent,Cp).call(n,e,t)}function wp(e,t,n,r){var i=rf()?Dp:z,a=e.filter(e=>!e.settled);if(n.length!==0||a.length!==0){var o,s,c,l,u=jm,d=(o=jm,s=Om,c=Qd,l=yf,function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];Mm(o),Am(s),$d(c),e&&(o.f&Nd)===0&&(l?.activate(),l?.apply())}),f=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;if(n.length!==0){var p=Ep();f?f.then(()=>{d(),h(),Tp()}):h()}else f.then(()=>m(t.map(i)))}else r(t.map(i));function m(e){d();try{r(e)}catch(e){(u.f&Nd)===0&&df(e,u)}Tp()}function h(){Promise.all(n.map(e=>function(e){var t=jm;t===null&&function(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}();var n=void 0,r=zp(od),i=!Om,a=new Map;return function(e){im(4718592,e)}(()=>{var o=jm,s=Cd();n=s.promise;try{Promise.resolve(e()).then(s.resolve,s.reject).finally(Tp)}catch(e){s.reject(e),Tp()}var c=yf;if(i){if((o.f&Pd)!==0)var l=Ep();if(t.b.is_rendered()){var u;(u=a.get(c))==null||u.reject(Kd),a.delete(c)}else{for(var d of a.values())d.reject(Kd);a.clear()}a.set(c,s)}var f=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(l&&l(t===Kd),t!==Kd&&(o.f&Nd)===0){if(c.activate(),t)r.f|=Hd,Hp(r,t);else for(var[n,i]of((r.f&Hd)!==0&&(r.f^=Hd),Hp(r,e),a)){if(a.delete(n),n===c)break;i.reject(Kd)}c.deactivate()}};s.promise.then(f,e=>f(null,e||`unknown`))}),om(()=>{for(var e of a.values())e.reject(Kd)}),new Promise(e=>{function t(i){function a(){i===n?e(r):t(n)}i.then(a,a)}t(n)})}(e))).then(e=>m([...t.map(i),...e])).catch(e=>df(e,u)).finally(()=>p())}}function Tp(){var e,t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];Mm(null),Am(null),$d(null),t&&((e=yf)==null||e.deactivate())}function Ep(){var e=jm,t=e.b,n=yf,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0];t.update_pending_count(-1,n),n.decrement(r,e,i)}}function Dp(e){var t=Om!==null&&2&Om.f?Om:null;return jm!==null&&(jm.f|=Rd),{ctx:Qd,deps:null,effects:null,equals:Yd,f:2050,fn:e,reactions:null,rv:0,v:od,wv:0,parent:t??jm,ac:null}}function Op(e){var t=Dp(e);return Pm(t),t}function z(e){var t=Dp(e);return t.equals=Zd,t}function kp(e){var t,n=jm;Mm(function(e){for(var t=e.parent;t!==null;){if(!(2&t.f))return(t.f&Nd)===0?t:null;t=t.parent}return null}(e));try{e.f&=-65537,function(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)_m(t[n])}}(e),t=Gm(e)}finally{Mm(n)}return t}function Ap(e){var t,n,r,i=e.v,a=kp(e);if(!e.equals(a)&&(e.wv=Hm(),!((t=yf)!=null&&t.is_fork&&e.deps!==null||(e.v=a,(n=yf)==null||n.capture(e,i,!0),e.deps!==null))))return void pf(e,kd);Em||(bf===null?mf(e):(am()||(r=yf)!=null&&r.is_fork)&&bf.set(e,a))}function jp(e){if(e.effects!==null)for(var t of e.effects)t.teardown&&Jm(t)}var Mp,Np,Pp,Fp,Ip=new Set,Lp=new Map,Rp=!1;function zp(e,t){return{f:0,v:e,reactions:null,equals:Yd,rv:0,wv:0}}function Bp(e,t){var n=zp(e);return Pm(n),n}function B(e){var t,n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=zp(e);return(n||(i.equals=Zd),ad&&r&&Qd!==null&&Qd.l!==null)&&((t=Qd.l).s??(t.s=[])).push(i),i}function Vp(e,t){return V(e,q(()=>K(e))),t}function V(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Om===null||km&&(Om.f&Ld)===0||!rf()||!(4325394&Om.f)||Nm!==null&&ud.call(Nm,e)||function(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}(),Hp(e,n?Kp(t):t,Tf)}function Hp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.equals(t)){var r=e.v;Em?Lp.set(e,t):Lp.set(e,r),e.v=t;var i=Vf.ensure();if(i.capture(e,r),2&e.f){var a=e;(e.f&Ad)!==0&&kp(a),bf===null&&mf(a)}e.wv=Hm(),Gp(e,Ad,n),!rf()||jm===null||(jm.f&kd)===0||96&jm.f||(Lm===null?function(e){Lm=e}([e]):Lm.push(e)),!i.is_fork&&Ip.size>0&&!Rp&&function(){for(var e of(Rp=!1,Ip))(e.f&kd)!==0&&pf(e,jd),Um(e)&&Jm(e);Ip.clear()}()}return t}function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=K(e),r=t===1?n++:n--;return V(e,n),r}function Wp(e){V(e,e.v+1)}function Gp(e,t,n){var r=e.reactions;if(r!==null)for(var i=rf(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==jm){var l=(c&Ad)===0;if(l&&pf(s,t),2&c){var u,d=s;(u=bf)==null||u.delete(d),(c&Bd)===0&&(c&Od&&(s.f|=Bd),Gp(d,jd,n))}else if(l){var f=s;(c&Td)!==0&&Yf!==null&&Yf.add(f),n===null?$f(f):n.push(f)}}}}function Kp(e){if(typeof e!=`object`||!e||Ud in e)return e;var t=_d(e);if(t!==hd&&t!==gd)return e;var n=new Map,r=cd(e),i=Bp(0),a=Bm,o=e=>{if(Bm===a)return e();var t=Om,n=Bm;Am(null),Vm(a);var r=e();return Am(t),Vm(n),r};return r&&n.set(`length`,Bp(e.length)),new Proxy(e,{defineProperty(e,t,r){`value`in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}();var i=n.get(t);return i===void 0?o(()=>{var e=Bp(r.value);return n.set(t,e),e}):V(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t);if(r===void 0){if(t in e){var a=o(()=>Bp(od));n.set(t,a),Wp(i)}}else V(r,od),Wp(i);return!0},get(t,r,i){var a;if(r===Ud)return e;var s=n.get(r),c=r in t;if(s===void 0&&(!c||(a=pd(t,r))!=null&&a.writable)&&(s=o(()=>Bp(Kp(c?t[r]:od))),n.set(r,s)),s!==void 0){var l=K(s);return l===od?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&`value`in r){var i=n.get(t);i&&(r.value=K(i))}else if(r===void 0){var a=n.get(t),o=a?.v;if(a!==void 0&&o!==od)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){var r;if(t===Ud)return!0;var i=n.get(t),a=i!==void 0&&i.v!==od||Reflect.has(e,t);return(i!==void 0||jm!==null&&(!a||(r=pd(e,t))!=null&&r.writable))&&(i===void 0&&(i=o(()=>Bp(a?Kp(e[t]):od)),n.set(t,i)),K(i)===od)?!1:a},set(e,t,a,s){var c,l=n.get(t),u=t in e;if(r&&t===`length`)for(var d=a;d<l.v;d+=1){var f=n.get(d+``);f===void 0?d in e&&(f=o(()=>Bp(od)),n.set(d+``,f)):V(f,od)}l===void 0?(!u||(c=pd(e,t))!=null&&c.writable)&&(V(l=o(()=>Bp(void 0)),Kp(a)),n.set(t,l)):(u=l.v!==od,V(l,o(()=>Kp(a))));var p=Reflect.getOwnPropertyDescriptor(e,t);if(p!=null&&p.set&&p.set.call(s,a),!u){if(r&&typeof t==`string`){var m=n.get(`length`),h=Number(t);Number.isInteger(h)&&h>=m.v&&V(m,h+1)}Wp(i)}return!0},ownKeys(e){K(i);var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e);return t===void 0||t.v!==od});for(var[r,a]of n)a.v===od||r in e||t.push(r);return t},setPrototypeOf(){(function(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)})()}})}function qp(e){try{if(typeof e==`object`&&e&&Ud in e)return e[Ud]}catch{}return e}function Jp(e,t){return Object.is(qp(e),qp(t))}function Yp(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:``;return document.createTextNode(e)}function Xp(e){return Pp.call(e)}function Zp(e){return Fp.call(e)}function H(e,t){return Xp(e)}function Qp(e){var t=Xp(e);return t instanceof Comment&&t.data===``?Zp(t):t}function U(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;t--;)n=Zp(n);return n}function $p(e,t,n){return document.createElementNS(t??sd,e,void 0)}var em=!1;function tm(e){var t=Om,n=jm;Am(null),Mm(null);try{return e()}finally{Am(t),Mm(n)}}function nm(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(t,()=>tm(n));var i=e.__on_r;e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),em||(em=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(var t of e.target.elements){var n;(n=t.__on_r)==null||n.call(t)}})},{capture:!0}))}function rm(e){jm===null&&(Om===null&&function(){throw Error(`https://svelte.dev/e/effect_orphan`)}(),function(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}()),Em&&function(){throw Error(`https://svelte.dev/e/effect_in_teardown`)}()}function im(e,t){var n,r=jm;r!==null&&(r.f&Md)!==0&&(e|=Md);var i={ctx:Qd,deps:null,nodes:null,f:e|Ad|Od,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};(n=yf)==null||n.register_created_effect(i);var a=i;if(4&e)wf===null?Vf.ensure().schedule(i):wf.push(i);else if(t!==null){try{Jm(i)}catch(e){throw _m(i),e}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Rd)===0&&(a=a.first,(e&Td)!==0&&(e&Id)!==0&&a!==null&&(a.f|=Id))}if(a!==null&&(a.parent=r,r!==null&&function(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(a,r),Om!==null&&2&Om.f&&(e&Dd)===0)){var o=Om;(o.effects??=[]).push(a)}return i}function am(){return Om!==null&&!km}function om(e){var t=im(8,null);return pf(t,kd),t.teardown=e,t}function sm(e){rm();var t=jm.f;if(!(!Om&&(t&Ed)!==0&&(t&Pd)===0))return cm(e);var n=Qd;(n.e??=[]).push(e)}function cm(e){return im(1048580,e)}function lm(e){return im(4,e)}function W(e,t){var n={effect:null,ran:!1,deps:e};Qd.l.$.push(n),n.effect=dm(()=>{if(e(),!n.ran){n.ran=!0;var r=jm;try{Mm(r.parent),q(t)}finally{Mm(r)}}})}function um(){var e=Qd;dm(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&kd)!==0&&n.deps!==null&&pf(n,jd),Um(n)&&Jm(n),t.ran=!1}})}function dm(e){return im(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function G(e){wp(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{im(8,()=>e(...t.map(K)))})}function fm(e){return im(Td|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function pm(e){return im(wd|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function mm(e){return im(524320,e)}function hm(e){var t=e.teardown;if(t!==null){var n=Em,r=Om;Dm(!0),Am(null);try{t.call(null)}finally{Dm(n),Am(r)}}}function gm(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var r,i=function(){var e=n.ac;e!==null&&tm(()=>{e.abort(Kd)}),r=n.next,(n.f&Dd)===0?_m(n,t):n.parent=null,n=r};n!==null;)i()}function _m(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;(t||262144&e.f)&&e.nodes!==null&&e.nodes.end!==null&&(vm(e.nodes.start,e.nodes.end),n=!0),pf(e,Fd),gm(e,t&&!n),qm(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)i.stop();hm(e),e.f^=Fd,e.f|=Nd;var a=e.parent;a!==null&&a.first!==null&&ym(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function vm(e,t){for(;e!==null;){var n=e===t?null:Zp(e);e.remove(),e=n}}function ym(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function bm(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];xm(e,r,!0);var i=()=>{n&&_m(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function xm(e,t,n){if((e.f&Md)===0){e.f^=Md;var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)(i.is_global||n)&&t.push(i);for(var a=e.first;a!==null;){var o=a.next;xm(a,t,((a.f&Id)!==0||(a.f&Ed)!==0&&(e.f&Td)!==0)&&n),a=o}}}function Sm(e){Cm(e,!0)}function Cm(e,t){if((e.f&Md)!==0){e.f^=Md,(e.f&kd)===0&&(pf(e,Ad),Vf.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next;Cm(n,((n.f&Id)!==0||(n.f&Ed)!==0)&&t),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(var a of i)(a.is_global||t)&&a.in()}}function wm(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Zp(n);t.append(n),n=i}}var Tm=!1,Em=!1;function Dm(e){Em=e}var Om=null,km=!1;function Am(e){Om=e}var jm=null;function Mm(e){jm=e}var Nm=null;function Pm(e){Om!==null&&(Nm===null?Nm=[e]:Nm.push(e))}var Fm=null,Im=0,Lm=null,Rm=1,zm=0,Bm=zm;function Vm(e){Bm=e}function Hm(){return++Rm}function Um(e){var t=e.f;if((t&Ad)!==0)return!0;if(2&t&&(e.f&=-65537),(t&jd)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Um(a)&&Ap(a),a.wv>e.wv)return!0}(t&Od)!==0&&bf===null&&pf(e,kd)}return!1}function Wm(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=e.reactions;if(r!==null&&(Nm===null||!ud.call(Nm,e)))for(var i=0;i<r.length;i++){var a=r[i];2&a.f?Wm(a,t,!1):t===a&&(n?pf(a,Ad):(a.f&kd)!==0&&pf(a,jd),$f(a))}}function Gm(e){var t=Fm,n=Im,r=Lm,i=Om,a=Nm,o=Qd,s=km,c=Bm,l=e.f;Fm=null,Im=0,Lm=null,Om=96&l?null:e,Nm=null,$d(e.ctx),km=!1,Bm=++zm,e.ac!==null&&(tm(()=>{e.ac.abort(Kd)}),e.ac=null);try{e.f|=Vd;var u=(0,e.fn)();e.f|=Pd;var d=e.deps,f=yf?.is_fork;if(Fm!==null){var p;if(f||qm(e,Im),d!==null&&Im>0)for(d.length=Im+Fm.length,p=0;p<Fm.length;p++)d[Im+p]=Fm[p];else e.deps=d=Fm;if(am()&&(e.f&Od)!==0)for(p=Im;p<d.length;p++){var m;((m=d[p]).reactions??(m.reactions=[])).push(e)}}else !f&&d!==null&&Im<d.length&&(qm(e,Im),d.length=Im);if(rf()&&Lm!==null&&!km&&d!==null&&!(6146&e.f))for(p=0;p<Lm.length;p++)Wm(Lm[p],e);if(i!==null&&i!==e){if(zm++,i.deps!==null)for(var h=0;h<n;h+=1)i.deps[h].rv=zm;if(t!==null)for(var g of t)g.rv=zm;Lm!==null&&(r===null?r=Lm:r.push(...Lm))}return(e.f&Hd)!==0&&(e.f^=Hd),u}catch(e){return uf(e)}finally{e.f^=Vd,Fm=t,Im=n,Lm=r,Om=i,Nm=a,$d(o),km=s,Bm=c}}function Km(e,t){var n=t.reactions;if(n!==null){var r=ld.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&2&t.f&&(Fm===null||!ud.call(Fm,t))){var a=t;(a.f&Od)!==0&&(a.f^=Od,a.f&=-65537),mf(a),function(e){if(e.effects!==null)for(var t of e.effects){var n,r;(t.teardown||t.ac)&&((n=t.teardown)==null||n.call(t),(r=t.ac)==null||r.abort(Kd),t.teardown=bd,t.ac=null,qm(t,0),gm(t))}}(a),qm(a,0)}}function qm(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Km(e,n[r])}function Jm(e){var t=e.f;if((t&Nd)===0){pf(e,kd);var n=jm,r=Tm;jm=e,Tm=!0;try{16777232&t?function(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ed)===0&&_m(t),t=n}}(e):gm(e),hm(e);var i=Gm(e);e.teardown=typeof i==`function`?i:null,e.wv=Rm}finally{Tm=r,jm=n}}}function Ym(){return Xm.apply(this,arguments)}function Xm(){return(Xm=Xu(function*(){yield Promise.resolve(),Jf()})).apply(this,arguments)}function K(e){var t,n=!!(2&e.f);if(Om!==null&&!km&&!(jm!==null&&(jm.f&Nd)!==0||Nm!==null&&ud.call(Nm,e))){var r=Om.deps;if((Om.f&Vd)!==0)e.rv<zm&&(e.rv=zm,Fm===null&&r!==null&&r[Im]===e?Im++:Fm===null?Fm=[e]:Fm.push(e));else{var i;((i=Om).deps??(i.deps=[])).push(e);var a=e.reactions;a===null?e.reactions=[Om]:ud.call(a,Om)||a.push(Om)}}if(Em&&Lp.has(e))return Lp.get(e);if(n){var o=e;if(Em){var s=o.v;return((o.f&kd)===0&&o.reactions!==null||Qm(o))&&(s=kp(o)),Lp.set(o,s),s}var c=(o.f&Od)===0&&!km&&Om!==null&&(Tm||(Om.f&Od)!==0),l=(o.f&Pd)===0;Um(o)&&(c&&(o.f|=Od),Ap(o)),c&&!l&&(jp(o),Zm(o))}if((t=bf)!=null&&t.has(e))return bf.get(e);if((e.f&Hd)!==0)throw e.v;return e.v}function Zm(e){if(e.f|=Od,e.deps!==null)for(var t of e.deps)(t.reactions??=[]).push(e),2&t.f&&(t.f&Od)===0&&(jp(t),Zm(t))}function Qm(e){if(e.v===od)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(Lp.has(t)||2&t.f&&Qm(t))return!0;return!1}function q(e){var t=km;try{return km=!0,e()}finally{km=t}}function J(e){if(typeof e==`object`&&e&&!(e instanceof EventTarget)){if(Ud in e)$m(e);else if(!Array.isArray(e))for(var t in e){var n=e[t];typeof n==`object`&&n&&Ud in n&&$m(n)}}}function $m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!=`object`||!e||e instanceof EventTarget||t.has(e))){for(var n in t.add(e),e instanceof Date&&e.getTime(),e)try{$m(e[n],t)}catch{}var r=_d(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){var i=md(r);for(var a in i){var o=i[a].get;if(o)try{o.call(e)}catch{}}}}}var eh=Symbol(`events`),th=new Set,nh=new Set;function rh(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function i(e){if(r.capture||oh.call(t,e),!e.cancelBubble)return tm(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?cf(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function Y(e,t,n,r,i){var a={capture:r,passive:i},o=rh(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&om(()=>{t.removeEventListener(e,o,a)})}function ih(e,t,n){(t[eh]??(t[eh]={}))[e]=n}function ah(e){for(var t=0;t<e.length;t++)th.add(e[t]);for(var n of nh)n(e)}function oh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.call(e)||[],a=i[0]||e.target,o=0,s=e===e&&e[eh];if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window))return void(e[eh]=t);var l=i.indexOf(t);if(l===-1)return;c<=l&&(o=c)}if((a=i[o]||e.target)!==t){fd(e,`currentTarget`,{configurable:!0,get:()=>a||n});var u=Om,d=jm;Am(null),Mm(null);try{for(var f,p=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var h=a[eh]?.[r];h==null||a.disabled&&e.target!==a||h.call(a,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||m===t||m===null)break;a=m}if(f){var g=function(e){queueMicrotask(()=>{throw e})};for(var _ of p)g(_);throw f}}finally{e[eh]=t,delete e.currentTarget,Am(u),Mm(d)}}}var sh=(globalThis==null||(Wu=globalThis.window)==null?void 0:Wu.trustedTypes)&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function ch(e){var t=$p(`template`);return t.innerHTML=function(e){return sh?.createHTML(e)??e}(e.replaceAll(`<!>`,`<!---->`)),t.content}function lh(e,t){var n=jm;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function X(e,t){var n,r=!!(1&t),i=!!(2&t),a=!e.startsWith(`<!>`);return()=>{n===void 0&&(n=ch(a?e:`<!>`+e),r||(n=Xp(n)));var t=i||Np?document.importNode(n,!0):n.cloneNode(!0);return r?lh(Xp(t),t.lastChild):lh(t,t),t}}function uh(e,t){return function(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`svg`,i=!e.startsWith(`<!>`),a=!!(1&t),o=`<${r}>${i?e:`<!>`+e}</${r}>`;return()=>{if(!n){var e=Xp(ch(o));if(a)for(n=document.createDocumentFragment();Xp(e);)n.appendChild(Xp(e));else n=Xp(e)}var t=n.cloneNode(!0);return a?lh(Xp(t),t.lastChild):lh(t,t),t}}(e,t,`svg`)}function dh(){var e=Yp((arguments.length>0&&arguments[0]!==void 0?arguments[0]:``)+``);return lh(e,e),e}function fh(){var e=document.createDocumentFragment(),t=document.createComment(``),n=Yp();return e.append(t,n),lh(t,n),e}function Z(e,t){e!==null&&e.before(t)}var ph=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`],mh={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`},hh=[`touchstart`,`touchmove`];function gh(e){return hh.includes(e)}function _h(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function vh(e,t){return function(e,t){var{target:n,anchor:r,props:i={},events:a,context:o,intro:s=!0,transformError:c}=t;(function(){if(Mp===void 0){Mp=window,Np=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Pp=pd(t,`firstChild`).get,Fp=pd(t,`nextSibling`).get,vd(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vd(n)&&(n.__t=void 0)}})();var l=void 0,u=function(e){Vf.ensure();var t=im(524352,e);return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(n=>{e.outro?bm(t,()=>{_m(t),n(void 0)}):(_m(t),n(void 0))})}}(()=>{var t=r??n.appendChild(Yp());(function(e,t,n,r){new yp(e,t,n,r)})(t,{pending:()=>{}},t=>{tf({}),o&&(Qd.c=o),a&&(i.$$events=a),l=e(t,i)||{},nf()},c);var s=new Set,u=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!s.has(r)){s.add(r);var i=gh(r);for(var a of[n,document]){var o=yh.get(a);o===void 0&&(o=new Map,yh.set(a,o));var c=o.get(r);c===void 0?(a.addEventListener(r,oh,{passive:i}),o.set(r,1)):o.set(r,c+1)}}}};return u(dd(th)),nh.add(u),()=>{for(var e of s)for(var i of[n,document]){var a=yh.get(i),o=a.get(e);--o==0?(i.removeEventListener(e,oh),a.delete(e),a.size===0&&yh.delete(i)):a.set(e,o)}var c;(nh.delete(u),t!==r)&&((c=t.parentNode)==null||c.removeChild(t))}});return bh.set(l,u),l}(e,t)}var yh=new Map,bh=new WeakMap,xh=new WeakMap,Sh=new WeakMap,Ch=new WeakMap,wh=new WeakMap,Th=new WeakMap,Eh=new WeakMap,Dh=new WeakMap,Oh=class{constructor(e){var t=this,n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];nd(this,`anchor`,void 0),Qu(this,xh,new Map),Qu(this,Sh,new Map),Qu(this,Ch,new Map),Qu(this,wh,new Set),Qu(this,Th,!0),Qu(this,Eh,e=>{if(R(xh,this).has(e)){var n=R(xh,this).get(e),r=R(Sh,this).get(n);if(r)Sm(r),R(wh,this).delete(n);else{var i=R(Ch,this).get(n);i&&(R(Sh,this).set(n,i.effect),R(Ch,this).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(var[a,o]of R(xh,this)){if(R(xh,this).delete(a),a===e)break;var s=R(Ch,this).get(o);s&&(_m(s.effect),R(Ch,this).delete(o))}var c=function(e,i){if(e===n||R(wh,t).has(e))return 1;var a=()=>{if(Array.from(R(xh,t).values()).includes(e)){var n=document.createDocumentFragment();wm(i,n),n.append(Yp()),R(Ch,t).set(e,{effect:i,fragment:n})}else _m(i);R(wh,t).delete(e),R(Sh,t).delete(e)};R(Th,t)||!r?(R(wh,t).add(e),bm(i,a,!1)):a()};for(var[l,u]of R(Sh,this))c(l,u)}}),Qu(this,Dh,e=>{R(xh,this).delete(e);var t=Array.from(R(xh,this).values());for(var[n,r]of R(Ch,this))t.includes(n)||(_m(r.effect),R(Ch,this).delete(n))}),this.anchor=e,ed(Th,this,n)}ensure(e,t){var n=yf;!t||R(Sh,this).has(e)||R(Ch,this).has(e)||R(Sh,this).set(e,mm(()=>t(this.anchor))),R(xh,this).set(n,e),R(Eh,this).call(this,n)}};function kh(e){Qd===null&&Jd(),ad&&Qd.l!==null?Nh(Qd).m.push(e):sm(()=>{var t=q(e);if(typeof t==`function`)return t})}function Ah(e){Qd===null&&Jd(),kh(()=>()=>q(e))}function jh(){var e=Qd;return e===null&&Jd(),(t,n,r)=>{var i=e.s.$$events?.[t];if(i){var a=cd(i)?i.slice():[i],o=function(e,t){var{bubbles:n=!1,cancelable:r=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}(t,n,r);for(var s of a)s.call(e.x,o);return!o.defaultPrevented}return!0}}function Mh(e){Qd===null&&Jd(),Qd.l===null&&function(){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}(),Nh(Qd).b.push(e)}function Nh(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}function Q(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=new Oh(e);function i(e,t){r.ensure(e,t)}fm(()=>{var e=!1;t(function(t){e=!0,i(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t)}),e||i(-1,null)},n?Id:0)}var Ph,Fh=Symbol(`NaN`);function Ih(e,t,n){var r=new Oh(e),i=!rf();fm(()=>{var e=t();e!=e&&(e=Fh),i&&typeof e==`object`&&e&&(e={}),r.ensure(e,n)})}function Lh(e,t){return t}function Rh(e,t){var n,r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(e.pending.size>0)for(var i of(n=new Set,e.pending.values()))for(var a of i)n.add(e.items.get(a).e);for(var o=0;o<t.length;o++){var s,c=t[o];(s=n)!=null&&s.has(c)?(c.f|=zd,wm(c,document.createDocumentFragment())):_m(t[o],r)}}function zh(e,t,n,r,i){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=e,s=new Map;!(4&t)||(o=e.appendChild(Yp()));var c,l=null,u=z(()=>{var e=n();return cd(e)?e:e==null?[]:dd(e)}),d=new Map,f=!0;function p(e){(m.effect.f&Nd)===0&&(m.pending.delete(e),m.fallback=l,function(e,t,n,r,i){var a,o,s,c,l,u=!!(8&r),d=t.length,f=e.items,p=Bh(e.effect.first),m=null,h=[],g=[];if(u)for(l=0;l<d;l+=1){var _;s=i(t[l],l),((c=f.get(s).e).f&zd)===0&&((_=c.nodes)==null||(_=_.a)==null||_.measure(),(o??=new Set).add(c))}for(l=0;l<d;l+=1){if(s=i(t[l],l),c=f.get(s).e,e.outrogroups!==null)for(var v of e.outrogroups)v.pending.delete(c),v.done.delete(c);var y;if((c.f&Md)!==0&&(Sm(c),u&&((y=c.nodes)==null||(y=y.a)==null||y.unfix(),(o??=new Set).delete(c))),(c.f&zd)!==0){if(c.f^=zd,c!==p){var b=m?m.next:p;c===e.effect.last&&(e.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),Uh(e,m,c),Uh(e,c,b),Hh(c,b,n),h=[],g=[],p=Bh((m=c).next);continue}Hh(c,null,n)}if(c!==p){if(a!==void 0&&a.has(c)){if(h.length<g.length){var x,S=g[0];m=S.prev;var C=h[0],w=h[h.length-1];for(x=0;x<h.length;x+=1)Hh(h[x],S,n);for(x=0;x<g.length;x+=1)a.delete(g[x]);Uh(e,C.prev,w.next),Uh(e,m,C),Uh(e,w,S),p=S,m=w,--l,h=[],g=[]}else a.delete(c),Hh(c,p,n),Uh(e,c.prev,c.next),Uh(e,c,m===null?e.effect.first:m.next),Uh(e,m,c),m=c;continue}for(h=[],g=[];p!==null&&p!==c;)(a??=new Set).add(p),g.push(p),p=Bh(p.next);if(p===null)continue}(c.f&zd)===0&&h.push(c),m=c,p=Bh(c.next)}if(e.outrogroups!==null){for(var T of e.outrogroups){var E;T.pending.size===0&&(Rh(e,dd(T.done)),(E=e.outrogroups)==null||E.delete(T))}e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||a!==void 0){var ee=[];if(a!==void 0)for(c of a)(c.f&Md)===0&&ee.push(c);for(;p!==null;)(p.f&Md)===0&&p!==e.fallback&&ee.push(p),p=Bh(p.next);var te=ee.length;if(te>0){var ne=4&r&&d===0?n:null;if(u){for(l=0;l<te;l+=1){var re;(re=ee[l].nodes)==null||(re=re.a)==null||re.measure()}for(l=0;l<te;l+=1){var ie;(ie=ee[l].nodes)==null||(ie=ie.a)==null||ie.fix()}}(function(e,t,n){for(var r,i=t.length,a=t.length,o=function(){var n=t[s];bm(n,()=>{if(r){if(r.pending.delete(n),r.done.add(n),r.pending.size===0){var t=e.outrogroups;Rh(e,dd(r.done)),t.delete(r),t.size===0&&(e.outrogroups=null)}}else --a},!1)},s=0;s<i;s++)o();if(a===0){var c=n!==null;if(c){var l=n,u=l.parentNode;u.textContent=``,u.append(l),e.items.clear()}Rh(e,t,!c)}else r={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(r)})(e,ee,ne)}}u&&cf(()=>{if(o!==void 0)for(c of o){var e;(e=c.nodes)==null||(e=e.a)==null||e.apply()}})}(m,c,o,t,r),l!==null&&(c.length===0?(l.f&zd)===0?Sm(l):(l.f^=zd,Hh(l,null,o)):bm(l,()=>{l=null})))}var m={effect:fm(()=>{for(var e=(c=K(u)).length,m=new Set,h=yf,g=0;g<e;g+=1){var _=c[g],v=r(_,g),y=f?null:s.get(v);y?(y.v&&Hp(y.v,_),y.i&&Hp(y.i,g)):(y=Vh(s,f?o:Ph??=Yp(),_,v,g,i,t,n),f||(y.e.f|=zd),s.set(v,y)),m.add(v)}(e===0&&a&&!l&&(f?l=mm(()=>a(o)):(l=mm(()=>a(Ph??=Yp()))).f|=zd),e>m.size&&function(){throw Error(`https://svelte.dev/e/each_key_duplicate`)}(),f)||(d.set(h,m),p(h)),K(u)}),items:s,pending:d,outrogroups:null,fallback:l};f=!1}function Bh(e){for(;e!==null&&(e.f&Ed)===0;)e=e.next;return e}function Vh(e,t,n,r,i,a,o,s){var c=1&o?16&o?zp(n):B(n,!1,!1):null,l=2&o?zp(i):null;return{v:c,i:l,e:mm(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Hh(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&(t.f&zd)===0?t.nodes.start:n;r!==null;){var o=Zp(r);if(a.before(r),r===i)return;r=o}}function Uh(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Wh(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=arguments.length>4&&arguments[4]!==void 0&&arguments[4],a=e,o=``;if(n)var s=e;G(()=>{var e=jm;if(o!==(o=t()??``)){if(n)return e.nodes=null,s.innerHTML=o,void(o!==``&&lh(Xp(s),s.lastChild));if(e.nodes!==null&&(vm(e.nodes.start,e.nodes.end),e.nodes=null),o!==``){var c=$p(r?`svg`:i?`math`:`template`,r?`http://www.w3.org/2000/svg`:i?`http://www.w3.org/1998/Math/MathML`:void 0);c.innerHTML=o;var l=r||i?c:c.content;if(lh(Xp(l),l.lastChild),r||i)for(;Xp(l);)a.before(Xp(l));else a.before(l)}}})}function Gh(e,t,n,r,i){var a=t.$$slots?.[n],o=!1;!0===a&&(a=t[n===`default`?`children`:n],o=!0),a===void 0?i!==null&&i(e):a(e,o?()=>r:r)}function Kh(e,t,n){var r=new Oh(e);fm(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},Id)}function qh(e,t,n){lm(()=>{var r=q(()=>t(e,n?.())||{});if(n&&r!=null&&r.update){var i=!1,a={};dm(()=>{var e=n();J(e),i&&Xd(a,e)&&(a=e,r.update(e))}),i=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function Jh(e,t){var n,r=void 0;pm(()=>{r!==(r=t())&&(n&&=(_m(n),null),r&&(n=mm(()=>{lm(()=>r(e))})))})}function Yh(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Yh(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Xh(e){return typeof e==`object`?function(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Yh(e))&&(r&&(r+=` `),r+=t);return r}(e):e??``}var Zh=[...` 	
\r\f\xA0\v﻿`];function Qh(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?` !important;`:`;`,n=``;for(var r of Object.keys(e)){var i=e[r];i!=null&&i!==``&&(n+=` `+r+`: `+i+t)}return n}function $h(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function eg(e,t,n,r,i,a){var o=e.__className;if(o!==n||o===void 0){var s=function(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;o!==0&&!Zh.includes(r[o-1])||s!==r.length&&!Zh.includes(r[s])?o=s:r=(o===0?``:r.substring(0,o))+r.substring(s+1)}}return r===``?null:r}(n,r,a);s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];i!=null&&l===!!i[c]||e.classList.toggle(c,l)}return a}function tg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function ng(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=``;if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];n&&c.push(...Object.keys(n).map($h)),r&&c.push(...Object.keys(r).map($h));for(var l=0,u=-1,d=e.length,f=0;f<d;f++){var p=e[f];if(s?p===`/`&&e[f-1]===`*`&&(s=!1):a?a===p&&(a=!1):p===`/`&&e[f+1]===`*`?s=!0:p===`"`||p===`'`?a=p:p===`(`?o++:p===`)`&&o--,!s&&!1===a&&o===0){if(p===`:`&&u===-1)u=f;else if(p===`;`||f===d-1){if(u!==-1){var m=$h(e.substring(l,u).trim());c.includes(m)||(p!==`;`&&f++,i+=` `+e.substring(l,f).trim()+`;`)}l=f+1,u=-1}}}}return n&&(i+=Qh(n)),r&&(i+=Qh(r,!0)),(i=i.trim())===``?null:i}return e==null?null:String(e)}(t,r);i==null?e.removeAttribute(`style`):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(tg(e,n?.[0],r[0]),tg(e,n?.[1],r[1],`important`)):tg(e,n,r));return r}function rg(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!cd(t))return void console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);for(var r of e.options)r.selected=t.includes(ag(r))}else{for(r of e.options)if(Jp(ag(r),t))return void(r.selected=!0);n&&t===void 0||(e.selectedIndex=-1)}}function ig(e){var t=new MutationObserver(()=>{rg(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),om(()=>{t.disconnect()})}function ag(e){return`__value`in e?e.__value:e.value}var og=Symbol(`class`),sg=Symbol(`style`),cg=Symbol(`is custom element`),lg=Symbol(`is html`),ug=qd?`option`:`OPTION`,dg=qd?`select`:`SELECT`,fg=qd?`progress`:`PROGRESS`;function pg(e,t){var n=_g(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===fg)&&(e.value=t??``)}function mg(e,t,n,r){var i=_g(e);i[t]!==(i[t]=n)&&(t===`loading`&&(e[Gd]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&yg(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function hg(e,t,n,r){var i=_g(e),a=i[cg],o=!i[lg],s=t||{},c=e.nodeName===ug;for(var l in t)l in n||(n[l]=null);(n.class?n.class=Xh(n.class):(r||n[og])&&(n.class=null),n[sg])&&(n.style??=null);var u,d,f,p,m,h,g=yg(e),_=function(l){var _=n[l];if(c&&l===`value`&&_==null)return e.value=e.__value=``,s[l]=_,0;if(l===`class`)return u=e.namespaceURI===`http://www.w3.org/1999/xhtml`,eg(e,u,_,r,t?.[og],n[og]),s[l]=_,s[og]=n[og],0;if(l===`style`)return ng(e,_,t?.[sg],n[sg]),s[l]=_,s[sg]=n[sg],0;if(_===(d=s[l])&&(_!==void 0||!e.hasAttribute(l))||(s[l]=_,(f=l[0]+l[1])===`$$`))return 0;if(f===`on`){var v={},y=`$$`+l,b=l.slice(2);if(p=function(e){return ph.includes(e)}(b),function(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}(b)&&(b=b.slice(0,-7),v.capture=!0),!p&&d){if(_!=null)return 0;e.removeEventListener(b,s[y],v),s[y]=null}if(p)ih(b,e,_),ah([b]);else if(_!=null){function t(e){s[l].call(this,e)}s[y]=rh(b,e,t,v)}}else if(l===`style`)mg(e,l,_);else if(l===`autofocus`)(function(e,t){if(t){var n=document.body;e.autofocus=!0,cf(()=>{document.activeElement===n&&e.focus()})}})(e,!!_);else if(a||l!==`__value`&&(l!==`value`||_==null))if(l===`selected`&&c)(function(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)})(e,_);else if(m=l,o||(m=function(e){return e=e.toLowerCase(),mh[e]??e}(m)),h=m===`defaultValue`||m===`defaultChecked`,_!=null||a||h)h||g.includes(m)&&(a||typeof _!=`string`)?(e[m]=_,m in i&&(i[m]=od)):typeof _!=`function`&&mg(e,m,_);else if(i[l]=null,m===`value`||m===`checked`){var x=e,S=t===void 0;if(m===`value`){var C=x.defaultValue;x.removeAttribute(m),x.defaultValue=C,x.value=x.__value=S?C:null}else{var w=x.defaultChecked;x.removeAttribute(m),x.defaultChecked=w,x.checked=!!S&&w}}else e.removeAttribute(l);else e.value=e.__value=_};for(var v in n)_(v);return s}function gg(e,t){var n=arguments.length>5?arguments[5]:void 0,r=arguments.length>6&&arguments[6]!==void 0&&arguments[6],i=arguments.length>7&&arguments[7]!==void 0&&arguments[7];wp(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var o=void 0,s={},c=e.nodeName===dg,l=!1;if(pm(()=>{var u=t(...a.map(K)),d=hg(e,o,u,n,r,i);for(var f of(l&&c&&`value`in u&&rg(e,u.value),Object.getOwnPropertySymbols(s)))u[f]||_m(s[f]);for(var p of Object.getOwnPropertySymbols(u)){var m=u[p];p.description!==`@attach`||o&&m===o[p]||(s[p]&&_m(s[p]),s[p]=mm(()=>Jh(e,()=>m))),d[p]=m}o=d}),c){var u=e;lm(()=>{rg(u,o.value,!0),ig(u)})}l=!0})}function _g(e){return e.__attributes??={[cg]:e.nodeName.includes(`-`),[lg]:e.namespaceURI===sd}}var vg=new Map;function yg(e){var t,n=e.getAttribute(`is`)||e.nodeName,r=vg.get(n);if(r)return r;vg.set(n,r=[]);for(var i=e,a=Element.prototype;a!==i;){for(var o in t=md(i))t[o].set&&r.push(o);i=_d(i)}return r}function bg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,r=new WeakSet;nm(e,`input`,function(){var i=Xu(function*(i){var a=i?e.defaultValue:e.value;if(a=xg(e)?Sg(a):a,n(a),yf!==null&&r.add(yf),yield Ym(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}});return function(e){return i.apply(this,arguments)}}()),q(t)==null&&e.value&&(n(xg(e)?Sg(e.value):e.value),yf!==null&&r.add(yf)),dm(()=>{var n=t();if(e===document.activeElement){var i=yf;if(r.has(i))return}xg(e)&&n===Sg(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function xg(e){var t=e.type;return t===`number`||t===`range`}function Sg(e){return e===``?null:+e}function Cg(e,t,n){var r=pd(e,t);r&&r.set&&(e[t]=n,om(()=>{e[t]=null}))}function wg(e,t){return e===t||e?.[Ud]===t}function Tg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=Qd.r,i=jm;return lm(()=>{var a,o;return dm(()=>{a=o,o=[],q(()=>{e!==n(...o)&&(t(e,...o),a&&wg(n(...a),e)&&t(null,...a))})}),()=>{for(var a=i;a!==r&&a.parent!==null&&a.parent.f&Fd;)a=a.parent;var s=a.teardown;a.teardown=()=>{o&&wg(n(...o),e)&&t(null,...o),s?.()}}}),e}function Eg(e){return function(){var t=[...arguments];return t[0].stopPropagation(),e?.apply(this,t)}}function Dg(e){return function(){var t=[...arguments];return t[0].preventDefault(),e?.apply(this,t)}}function Og(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Qd,n=t.l.u;if(n){var r,i=()=>J(t.s);if(e){var a=0,o={},s=Dp(()=>{var e=!1,n=t.s;for(var r in n)n[r]!==o[r]&&(o[r]=n[r],e=!0);return e&&a++,a});i=()=>K(s)}n.b.length&&(r=()=>{kg(t,i),Sd(n.b)},rm(),im(1048584,r)),sm(()=>{var e=q(()=>n.m.map(xd));return()=>{for(var t of e)typeof t==`function`&&t()}}),n.a.length&&sm(()=>{kg(t,i),Sd(n.a)})}}function kg(e,t){if(e.l.s)for(var n of e.l.s)K(n);t()}function Ag(e){var t=zp(0);return function(){return arguments.length===1?(V(t,K(t)+1),arguments[0]):(K(t),e())}}function jg(e,t){var n=e.$$events?.[t.type];for(var r of cd(n)?n.slice():n==null?[]:[n])r.call(this,t)}var Mg={get(e,t){if(!e.exclude.includes(t))return K(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=jm;try{Mm(e.parent_effect),e.special[t]=$({get[t](){return e.props[t]}},t,4)}finally{Mm(r)}}return e.special[t](n),Up(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Up(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function Ng(e,t){return new Proxy({props:e,exclude:t,special:{},version:zp(0),parent_effect:jm},Mg)}var Pg={get(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(yd(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){for(var r=e.props.length;r--;){var i=e.props[r];yd(i)&&(i=i());var a=pd(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(yd(r)&&(r=r()),typeof r==`object`&&r&&t in r){var i=pd(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Ud||t===Wd)return!1;for(var n of e.props)if(yd(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){var t=[];for(var n of e.props)if(yd(n)&&(n=n()),n){for(var r in n)t.includes(r)||t.push(r);for(var i of Object.getOwnPropertySymbols(n))t.includes(i)||t.push(i)}return t}};function Fg(){return new Proxy({props:[...arguments]},Pg)}function $(e,t,n,r){var i,a,o=!ad||!!(2&n),s=!!(8&n),c=!!(16&n),l=r,u=!0,d=()=>(u&&(u=!1,l=c?q(r):r),l);if(s){var f=Ud in e||Wd in e;i=pd(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;if(s?[a,m]=function(e){var t=_f;try{return _f=!1,[e(),_f]}finally{_f=t}}(()=>e[t]):a=e[t],a===void 0&&r!==void 0&&(a=d(),i&&(o&&function(){throw Error(`https://svelte.dev/e/props_invalid_value`)}(),i(a))),p=o?()=>{var n=e[t];return n===void 0?d():(u=!0,n)}:()=>{var n=e[t];return n!==void 0&&(l=void 0),n===void 0?l:n},o&&!(4&n))return p;if(i){var h=e.$$legacy;return function(e,t){return arguments.length>0?(o&&t&&!h&&!m||i(t?p():e),e):p()}}var g=!1,_=(1&n?Dp:z)(()=>(g=!1,p()));s&&K(_);var v=jm;return function(e,t){if(arguments.length>0){var n=t?K(_):o&&s?Kp(e):e;return V(_,n),g=!0,l!==void 0&&(l=n),e}return Em&&g||(v.f&Nd)!==0?_.v:K(_)}}function Ig(e){if(!(arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(e){var t=function(e){try{if(typeof window<`u`&&window.localStorage!==void 0)return window.localStorage[e]}catch{}}(`debug`);return t!=null&&t.endsWith(`*`)?e.startsWith(t.slice(0,-1)):e===t}(e)))return Lg;var t=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Rg[Math.abs(t)%Rg.length]}(e);return function(){var n=[...arguments];console.log(`%c${e}`,`color:${t}`,...n)}}function Lg(){}var Rg=[`#0000CC`,`#0099FF`,`#009400`,`#8dd200`,`#CCCC00`,`#CC9933`,`#ae04e7`,`#ff35d7`,`#FF3333`,`#FF6600`,`#FF9933`,`#FFCC33`],zg=0;function Bg(){return++zg}function Vg(e){return parseInt(e,10)}function Hg(e){return Ug.test(e)}var Ug=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function Wg(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function Gg(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`||e.constructor.name===`Array`)}function Kg(e){return!0===e||!1===e}function qg(e){if(typeof e==`number`)return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e==`bigint`)return qg(Number(e));try{var t=e&&e.valueOf();if(t!==e)return qg(t)}catch{return!1}return!1}function Jg(e){(Yg||=window.document.createElement(`div`)).style.color=``,Yg.style.color=e;var t=Yg.style.color;return t===``?void 0:t.replace(/\s+/g,``).toLowerCase()}var Yg=void 0;function Xg(e){return typeof e==`string`&&e.length<99&&!!Jg(e)}function Zg(e,t){if(typeof e==`number`||typeof e==`string`||typeof e==`boolean`||e===void 0)return typeof e;if(typeof e==`bigint`)return`number`;if(e===null)return`null`;if(Array.isArray(e))return`array`;if(Wg(e))return`object`;var n=t.stringify(e);return n&&Hg(n)?`number`:n===`true`||n===`false`?`boolean`:n===`null`?`null`:`unknown`}var Qg=/^https?:\/\/\S+$/;function $g(e){return typeof e==`string`&&Qg.test(e)}function e_(e,t){if(e===``)return``;var n=e.trim();return n===`null`?null:n===`true`||n!==`false`&&(Hg(n)?t.parse(n):e)}var t_=[];function n_(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function r_(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw TypeError(`Array expected`);function r(e,i){(!Array.isArray(e)&&!Wg(e)||t&&i.length>0)&&(n[Dt(i)]=!0),Wg(e)&&Object.keys(e).forEach(t=>{r(e[t],i.concat(t))})}for(var i=Math.min(e.length,1e4),a=0;a<i;a++)r(e[a],t_);return Object.keys(n).sort().map(Et)}function i_(e,t,n){if(!(t<=e))for(var r=e;r<t;r++)n(r)}function a_(e,t){return e.length>t?e.slice(0,t):e}function o_(e){return L({},e)}function s_(e){return Object.values(e)}function c_(e,t,n,r){var i=e.slice(0),a=i.splice(t,n);return i.splice.apply(i,[t+r,0,...a]),i}function l_(e,t,n){return e.slice(0,t).concat(n).concat(e.slice(t))}function u_(e,t){try{return t.parse(e)}catch{return t.parse(Fn(e))}}function d_(e,t){try{return u_(e,t)}catch{return}}function f_(e,t){e=e.replace(m_,``);try{return t(e)}catch{}try{return t(`{`+e+`}`)}catch{}try{return t(`[`+e+`]`)}catch{}throw Error(`Failed to parse partial JSON`)}function p_(e){e=e.replace(m_,``);try{return Fn(e)}catch{}try{var t=Fn(`[`+e+`]`);return t.substring(1,t.length-1)}catch{}try{var n=Fn(`{`+e+`}`);return n.substring(1,n.length-1)}catch{}throw Error(`Failed to repair partial JSON`)}var m_=/,\s*$/;function h_(e,t){var n=T_.exec(t);if(n){var r=Vg(n[2]),i=function(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.length,i=0,a=n;a<r;a++)e.charAt(a)===t&&i++;return i}(e,`
`,0,r),a=r-e.lastIndexOf(`
`,r)-1;return{position:r,line:i,column:a,message:t.replace(T_,()=>`line ${i+1} column ${a+1}`)}}var o=E_.exec(t),s=o?Vg(o[1]):void 0,c=s===void 0?void 0:s-1,l=D_.exec(t),u=l?Vg(l[1]):void 0,d=u===void 0?void 0:u-1;return{position:c!==void 0&&d!==void 0?function(e,t,n){for(var r=e.indexOf(`
`),i=1;i<t&&r!==-1;)r=e.indexOf(`
`,r+1),i++;return r===-1?void 0:r+n+1}(e,c,d):void 0,line:c,column:d,message:t.replace(/^JSON.parse: /,``).replace(/ of the JSON data$/,``)}}function g_(e,t){try{var n=Ac.parse(e),r=Dt(t),i=n.pointers[r];if(i)return{path:t,line:i.key?i.key.line:i.value?i.value.line:0,column:i.key?i.key.column:i.value?i.value.column:0,from:i.key?i.key.pos:i.value?i.value.pos:0,to:i.keyEnd?i.keyEnd.pos:i.valueEnd?i.valueEnd.pos:0}}catch(e){console.error(e)}return{path:t,line:0,column:0,from:0,to:0}}function __(e){return Wg(e)?e.json===void 0?e.text===void 0?`Content must contain either a property "json" or a property "text"`:typeof e.text==`string`?void 0:`Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?`:e.text===void 0?void 0:`Content must contain either a property "json" or a property "text" but not both`:`Content must be an object`}function v_(e){return Wg(e)&&typeof e.text==`string`}function y_(e){return Wg(e)&&e.json!==void 0}function b_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return v_(e)?e:{text:n.stringify(e.json,null,t)}}function x_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return y_(e)?e:{json:t.parse(e.text)}}function S_(e,t,n){return b_(e,t,n).text}function C_(e,t){return w_(e,t)>t}function w_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(v_(e))return e.text.length;var n=e.json,r=0;return function e(n){if(Array.isArray(n)){if((r+=n.length-1+2)>t)return;for(var i=0;i<n.length;i++)if(e(n[i]),r>t)return}else if(Wg(n)){var a=Object.keys(n);r+=2+a.length+(a.length-1);for(var o=0;o<a.length;o++){var s=a[o],c=n[s];r+=s.length+2,e(c)}}else r+=typeof n==`string`?n.length+2:String(n).length}(n),r}var T_=/(position|char) (\d+)/,E_=/line (\d+)/,D_=/column (\d+)/;function O_(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function k_(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&L_.test(t)}var A_,j_,M_,N_,P_,F_,I_,L_=/[,:]\S/;function R_(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:n}=e;return t?n?z_:B_:n?V_:H_}(function(e){e.text=`text`,e.tree=`tree`,e.table=`table`})(A_||={}),function(e){e.after=`after`,e.inside=`inside`,e.key=`key`,e.value=`value`,e.multi=`multi`,e.text=`text`}(j_||={}),function(e){e.after=`after`,e.key=`key`,e.value=`value`,e.inside=`inside`}(M_||={}),function(e){e.info=`info`,e.warning=`warning`,e.error=`error`}(N_||={}),function(e){e.key=`key`,e.value=`value`}(P_||={}),function(e){e.asc=`asc`,e.desc=`desc`}(F_||={}),function(e){e.no=`no`,e.self=`self`,e.nextInside=`nextInside`}(I_||={});var z_={escapeValue:e=>U_(q_(String(e))),unescapeValue:e=>J_(W_(e))},B_={escapeValue:e=>q_(String(e)),unescapeValue:e=>J_(e)},V_={escapeValue:e=>U_(String(e)),unescapeValue:e=>W_(e)},H_={escapeValue:e=>String(e),unescapeValue:e=>e};function U_(e){return e.replace(/[^\x20-\x7F]/g,e=>e===`\b`||e===`\f`||e===`
`||e===`\r`||e===`	`?e:`\\u`+(`000`+e.codePointAt(0)?.toString(16)).slice(-4))}function W_(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,e=>{try{var t=JSON.parse(`"`+e+`"`);return G_[t]||t}catch{return e}})}var G_={'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},K_={'\\"':`"`,"\\\\":`\\`,"\\/":`/`,"\\b":`\b`,"\\f":`\f`,"\\n":`
`,"\\r":`\r`,"\\t":`	`};function q_(e){return e.replace(/["\b\f\n\r\t\\]/g,e=>G_[e]||e)}function J_(e){return e.replace(/\\["bfnrt\\]/g,e=>K_[e]||e)}function Y_(e){return typeof e==`string`?e.endsWith(`
`)?e+`
`:e:String(e)}function X_(e,t){return Q_(e,e=>e.nodeName.toUpperCase()===t.toUpperCase())}function Z_(e,t,n){return Q_(e,e=>function(e,t,n){return typeof e.getAttribute==`function`&&e.getAttribute(t)===n}(e,t,n))}function Q_(e,t){return!!$_(e,t)}function $_(e,t){for(var n=e;n&&!t(n);)n=n.parentNode;return n}function ev(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)??void 0}function tv(e){var t=ev(e)?.document.activeElement;return!!t&&Q_(t,t=>t===e)}function nv(e,t){return $_(e,e=>e.nodeName===t)}function rv(e){return Z_(e,`data-type`,`selectable-key`)?j_.key:Z_(e,`data-type`,`selectable-value`)?j_.value:Z_(e,`data-type`,`insert-selection-area-inside`)?j_.inside:Z_(e,`data-type`,`insert-selection-area-after`)?j_.after:j_.multi}function iv(e){return encodeURIComponent(Dt(e))}function av(e){var t=$_(e,e=>!(e==null||!e.hasAttribute)&&e.hasAttribute(`data-path`))?.getAttribute(`data-path`)??void 0;return t?Et(decodeURIComponent(t)):void 0}function ov(e){var{allElements:t,currentElement:n,direction:r,hasPrio:i=()=>!0,margin:a=10}=e,o=ec(t.filter(function(e){var t=e.getBoundingClientRect();return t.width>0&&t.height>0}),c),s=c(n);function c(e){var t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2,rect:t,element:e}}function l(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e.x-t.x,i=(e.y-t.y)*n;return Math.sqrt(r*r+i*i)}var u=e=>l(e,s);if(r===`Left`||r===`Right`){var d=r===`Left`?o.filter(e=>{return t=s,e.rect.left+a<t.rect.left;var t}):o.filter(e=>{return t=s,e.rect.right>t.rect.right+a;var t});return(fc(d.filter(e=>{return t=e,n=s,Math.abs(t.y-n.y)<a;var t,n}),u)||fc(d,e=>l(e,s,10)))?.element}if(r===`Up`||r===`Down`){var f=r===`Up`?o.filter(e=>{return t=s,e.y+a<t.y;var t}):o.filter(e=>{return t=s,e.y>t.y+a;var t});return(fc(f.filter(e=>i(e.element)),u)||fc(f,u))?.element}}function sv(){var e,t,n;return typeof navigator<`u`&&(e=((t=navigator)==null||(t=t.platform)==null?void 0:t.toUpperCase().includes(`MAC`))??((n=navigator)==null||(n=n.userAgentData)==null||(n=n.platform)==null?void 0:n.toUpperCase().includes(`MAC`)))!=null&&e}function cv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`+`,n=[];lv(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:sv)&&n.push(`Ctrl`),e.altKey&&n.push(`Alt`),e.shiftKey&&n.push(`Shift`);var r=e.key.length===1?e.key.toUpperCase():e.key;return r in uv||n.push(r),n.join(t)}function lv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sv;return e.ctrlKey||e.metaKey&&t()}var uv={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function dv(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}dv(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var fv=X(`<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>`),pv=X(`<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>`);function mv(e,t){tf(t,!1);var n=$(t,`popup`,8),r=$(t,`closeAbsolutePopup`,8),i=B(),a=B();function o(e){n().options&&n().options.closeOnOuterClick&&!Q_(e.target,e=>e===K(i))&&r()(n().id)}function s(e){cv(e)===`Escape`&&(e.preventDefault(),e.stopPropagation(),r()(n().id))}kh(function(){K(a)&&K(a).focus()}),Og();var c=pv();Y(`mousedown`,Mp,function(e){o(e)},!0),Y(`keydown`,Mp,s,!0),Y(`wheel`,Mp,function(e){o(e)},!0);var l=H(c),u=e=>{var t=fv(),r=H(t);Tg(r,e=>V(a,e),()=>K(a)),Kh(U(r,2),()=>n().component,(e,t)=>{t(e,Fg(()=>n().props))}),G(e=>ng(t,e),[()=>(K(i),J(n()),q(()=>function(e,t){var n=e.getBoundingClientRect(),{left:r,top:i,positionAbove:a,positionLeft:o}=function(){if(t.anchor){var{anchor:e,width:n=0,height:r=0,offsetTop:i=0,offsetLeft:a=0,position:o}=t,{left:s,top:c,bottom:l,right:u}=e.getBoundingClientRect(),d=o===`top`||c+r>window.innerHeight&&c>r,f=o===`left`||s+n>window.innerWidth&&s>n;return{left:f?u-a:s+a,top:d?c-i:l+i,positionAbove:d,positionLeft:f}}if(typeof t.left==`number`&&typeof t.top==`number`){var{left:p,top:m,width:h=0,height:g=0}=t;return{left:p,top:m,positionAbove:m+g>window.innerHeight&&m>g,positionLeft:p+h>window.innerWidth&&p>h}}throw Error(`Invalid config: pass either "left" and "top", or pass "anchor"`)}();return(a?`bottom: ${n.top-i}px;`:`top: ${i-n.top}px;`)+(o?`right: ${n.left-r}px;`:`left: ${r-n.left}px;`)}(K(i),n().options)))]),Z(e,t)};Q(l,e=>{K(i)&&e(u)}),Tg(c,e=>V(i,e),()=>K(i)),Y(`mousedown`,c,function(e){e.stopPropagation()}),Y(`keydown`,c,s),Z(e,c),nf()}var hv=X(`<!> <!>`,1);function gv(e,t){tf(t,!1);var n=Ig(`jsoneditor:AbsolutePopup`),r=B([],!0);function i(e){var t=K(r).findIndex(t=>t.id===e);if(t!==-1){var n=K(r)[t];n.options.onClose&&n.options.onClose(),V(r,K(r).filter(t=>t.id!==e))}}(function(e,t){af().set(e,t)})(`absolute-popup`,{openAbsolutePopup:function(e,t,i){n(`open...`,t,i);var a={id:Bg(),component:e,props:t||{},options:i||{}};return V(r,[...K(r),a]),a.id},closeAbsolutePopup:i}),W(()=>K(r),()=>{n(`popups`,K(r))}),um(),Og(!0);var a=hv(),o=Qp(a);zh(o,1,()=>K(r),Lh,(e,t)=>{mv(e,{get popup(){return K(t)},closeAbsolutePopup:i})}),Gh(U(o,2),t,`default`,{},null),Z(e,a),nf()}function _v(e,t){for(var n=new Set(t),r=e.replace(/ \(copy( \d+)?\)$/,``),i=e,a=1;n.has(i);)i=`${r} (${`copy`+(a>1?` `+a:``)})`,a++;return i}function vv(e,t){var n=t-3;return e.length>t?e.substring(0,n)+`...`:e}function yv(e){if(e===``)return``;var t=e.toLowerCase();if(t===`null`)return null;if(t===`true`)return!0;if(t===`false`)return!1;if(t!==`undefined`){var n=Number(e);return isNaN(n)||isNaN(parseFloat(e))?e:n}}var bv={id:`jsonquery`,name:`JSONQuery`,description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:n,sort:r,projection:i}=t,a=[];n&&n.path&&n.relation&&n.value&&a.push([`filter`,[(o=n.relation,ll(`1 ${o} 1`)[0]),xv(n.path),yv(n.value)]]);var o;return r&&r.path&&r.direction&&a.push([`sort`,xv(r.path),r.direction===`desc`?`desc`:`asc`]),i&&i.paths&&(i.paths.length>1?a.push([`pick`,...i.paths.map(xv)]):a.push([`map`,xv(i.paths[0])])),fl([`pipe`,...a])},executeQuery:function(e,t,n){var r=O_(n,JSON)?e:function(e){var t=n.stringify(e);return t===void 0?void 0:JSON.parse(t)}(e);return t.trim()===``?r:pl(r,t)}};function xv(e){return[`get`,...e]}var Sv=uh(`<g></g>`);function Cv(e,t){tf(t,!1);var n=870711,r=B(``),i=$(t,`data`,8);function a(e){if(!e||!e.raw)return``;var t=e.raw,r={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(e,t)=>{var i=`fa-${(n+=1).toString(16)}`;return r[t]=i,` id="${i}"`}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(e,t,n,i)=>{var a=t||i;return a&&r[a]?`#${r[a]}`:e}),t}W(()=>J(i()),()=>{V(r,a(i()))}),um();var o=Sv();Wh(o,()=>K(r),!0),Z(e,o),nf()}dv(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var wv=uh(`<svg><!></svg>`),Tv=uh(`<path></path>`),Ev=uh(`<polygon></polygon>`),Dv=uh(`<!><!><!>`,1);function Ov(e,t){var n=Ng(Ng(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`data`,`scale`,`spin`,`inverse`,`pulse`,`flip`,`label`,`style`]);tf(t,!1);var r=$(t,`class`,8,``),i=$(t,`data`,8),a=B(),o=$(t,`scale`,8,1),s=$(t,`spin`,8,!1),c=$(t,`inverse`,8,!1),l=$(t,`pulse`,8,!1),u=$(t,`flip`,8,void 0),d=$(t,`label`,8,``),f=$(t,`style`,8,``),p=B(10),m=B(10),h=B(),g=B();function _(){var e=1;return o()!==void 0&&(e=Number(o())),isNaN(e)||e<=0?(console.warn(`Invalid prop: prop "scale" should be a number over 0.`),1):1*e}function v(){return K(a)?Math.max(K(a).width,K(a).height)/16:1}W(()=>(J(i()),J(f()),J(o())),()=>{V(a,function(e){var t;if(e){if(!(`definition`in e)){if(`iconName`in e&&`icon`in e){e.iconName;var[n,r,,,i]=e.icon;t={width:n,height:r,paths:(Array.isArray(i)?i:[i]).map(e=>({d:e}))}}else t=e[Object.keys(e)[0]];return t}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(i())),f(),o(),V(p,K(a)?K(a).width/v()*_():0),V(m,K(a)?K(a).height/v()*_():0),V(h,function(){var e=``;f()!==null&&(e+=f());var t=_();return t===1?e.length===0?``:e:(e===``||e.endsWith(`;`)||(e+=`; `),`${e}font-size: ${t}em`)}()),V(g,K(a)?`0 0 ${K(a).width} ${K(a).height}`:`0 0 ${K(p)} ${K(m)}`)}),um(),Og(),function(e,t){var n=Ng(Ng(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`width`,`height`,`box`,`spin`,`inverse`,`pulse`,`flip`,`style`,`label`]),r=$(t,`class`,8,``),i=$(t,`width`,8),a=$(t,`height`,8),o=$(t,`box`,8,`0 0 0 0`),s=$(t,`spin`,8,!1),c=$(t,`inverse`,8,!1),l=$(t,`pulse`,8,!1),u=$(t,`flip`,8,`none`),d=$(t,`style`,8,``),f=$(t,`label`,8,``),p=wv();gg(p,()=>L(L({version:`1.1`,class:`fa-icon ${r()??``}`,width:i(),height:a(),"aria-label":f(),role:f()?`img`:`presentation`,viewBox:o(),style:d()},n),{},{[og]:{"fa-spin":s(),"fa-pulse":l(),"fa-inverse":c(),"fa-flip-horizontal":u()===`horizontal`,"fa-flip-vertical":u()===`vertical`}}),void 0,void 0,void 0,`svelte-v67cny`),Gh(H(p),t,`default`,{},null),Z(e,p)}(e,Fg({get label(){return d()},get width(){return K(p)},get height(){return K(m)},get box(){return K(g)},get style(){return K(h)},get spin(){return s()},get flip(){return u()},get inverse(){return c()},get pulse(){return l()},get class(){return r()}},()=>n,{children:(e,n)=>{var r=fh();Gh(Qp(r),t,`default`,{},e=>{var t=Dv(),n=Qp(t);zh(n,1,()=>(K(a),q(()=>K(a)?.paths||[])),Lh,(e,t)=>{var n=Tv();gg(n,()=>L({},K(t))),Z(e,n)});var r=U(n);zh(r,1,()=>(K(a),q(()=>K(a)?.polygons||[])),Lh,(e,t)=>{var n=Ev();gg(n,()=>L({},K(t))),Z(e,n)});var i=U(r),o=e=>{Cv(e,{get data(){return K(a)},set data(e){V(a,e)},$$legacy:!0})};Q(i,e=>{K(a),q(()=>K(a)?.raw)&&e(o)}),Z(e,t)}),Z(e,r)},$$slots:{default:!0}})),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var kv=X(`<div role="checkbox" tabindex="-1"><!></div>`);function Av(e,t){tf(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`readOnly`,9),a=$(t,`onPatch`,9),o=$(t,`focus`,9);Og(!0);var s,c=kv(),l=H(c),u=z(()=>!0===r()?hl:_l);Ov(l,{get data(){return K(u)}}),G(()=>{mg(c,`aria-checked`,!0===r()),s=eg(c,1,`jse-boolean-toggle svelte-eli4ob`,null,s,{"jse-readonly":i()}),mg(c,`title`,i()?`Boolean value ${r()}`:`Click to toggle this boolean value`)}),Y(`mousedown`,c,function(e){e.stopPropagation(),i()||(a()([{op:`replace`,path:Dt(n()),value:!r()}]),o()())}),Z(e,c),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var jv=X(`<div class="jse-color-picker-popup svelte-v77py2"></div>`);function Mv(e,t){tf(t,!1);var n=$(t,`color`,8),r=$(t,`onChange`,8),i=$(t,`showOnTop`,8),a=B(),o=()=>{};kh(Xu(function*(){var e=new((yield _(()=>import(`./vanilla-picker-5r_6Lll_.js`),[]))?.default)({parent:K(a),color:n(),popup:i()?`top`:`bottom`,onDone(e){var t=e.rgba[3]===1?e.hex.substring(0,7):e.hex;r()(t)}});e.show(),o=()=>{e.destroy()}})),Ah(()=>{o()}),Og();var s=jv();Tg(s,e=>V(a,e),()=>K(a)),Z(e,s),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var Nv=X(`<button type="button"></button>`);function Pv(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),{openAbsolutePopup:i}=ef(`absolute-popup`),a=$(t,`path`,9),o=$(t,`value`,9),s=$(t,`readOnly`,9),c=$(t,`onPatch`,9),l=$(t,`focus`,9);function u(e){c()([{op:`replace`,path:Dt(a()),value:e}]),d()}function d(){l()()}W(()=>J(o()),()=>{V(n,Jg(o()))}),W(()=>(J(s()),J(o())),()=>{V(r,s()?`Color ${o()}`:`Click to open a color picker`)}),um(),Og(!0);var f,p=Nv();G(()=>{f=eg(p,1,`jse-color-picker-button svelte-13mgyo6`,null,f,{"jse-readonly":s()}),ng(p,`background: ${K(n)??``}`),mg(p,`title`,K(r)),mg(p,`aria-label`,K(r))}),Y(`click`,p,function(e){if(!s()){var t=e.target,n=t.getBoundingClientRect().top,r=(ev(t)?.innerHeight??0)-n<300&&n>300;i(Mv,{color:o(),onChange:u,showOnTop:r},{anchor:t,closeOnOuterClick:!0,onClose:d,offsetTop:18,offsetLeft:-8,height:300})}}),Z(e,p),nf()}var Fv=1e3,Iv=100,Lv=100,Rv=2e4,zv=[{start:0,end:Iv}],Bv=1048576,Vv=1048576,Hv=`Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value`,Uv=`Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)`,Wv=`hover-insert-inside`,Gv=`hover-insert-after`,Kv=`hover-collection`,qv=`valid`,Jv=`repairable`,Yv=336,Xv=260,Zv=100,Qv={[F_.asc]:`ascending`,[F_.desc]:`descending`};function $v(e){for(var t=Cc(e,e=>e.start),n=[t[0]],r=0;r<t.length;r++){var i=n.length-1,a=n[i],o=t[r];o.start<=a.end?n[i]={start:Math.min(a.start,o.start),end:Math.max(a.end,o.end)}:n.push(o)}return n}function ey(e){return ty(e)+Iv}function ty(e){return Math.floor(e/Iv)*Iv}function ny(e){return!!e&&(e.type===`space`||!0===e.space)}function ry(e){return!!e&&(e.type===`separator`||!0===e.separator)}function iy(e){return!!e&&e.type===`label`&&typeof e.text==`string`}function ay(e){return!!e&&typeof e.onClick==`function`}function oy(e){return!!e&&e.type===`dropdown-button`&&ay(e.main)&&Array.isArray(e.items)}function sy(e){return!!e&&e.type===`row`&&Array.isArray(e.items)}function cy(e){return!!e&&e.type===`column`&&Array.isArray(e.items)}function ly(e){return Wg(e)&&Wg(e.parseError)}function uy(e){return Wg(e)&&Array.isArray(e.validationErrors)}function dy(e){return Wg(e)&&Array.isArray(e.path)&&typeof e.message==`string`&&`severity`in e}function fy(e){return Wg(e)&&dy(e)&&typeof e.isChildError==`boolean`}function py(e){return Wg(e)&&typeof e.action==`function`&&Wg(e.props)}function my(e){return e!==void 0&&e.type===`object`}function hy(e){return e!==void 0&&e.type===`array`}function gy(e){return e!==void 0&&e.type===`value`}function _y(e){return my(e)||hy(e)}function vy(e){return e!==void 0&&Array.isArray(e.searchResults)}function yy(e){return!!e&&e.type===`tree`}function by(e){return!!e&&e.type===`text`}function xy(e){return!!e&&e.type===`mode`}function Sy(e){var{json:t,expand:n}=e,r=function(e){var{json:t,factory:n}=e;return Array.isArray(t)?n.createArrayDocumentState():Wg(t)?n.createObjectDocumentState():t===void 0?void 0:n.createValueDocumentState()}({json:t,factory:Ty});return n&&r?jy(t,r,[],n):r}function Cy(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:`array`,expanded:e,visibleSections:zv,items:[]}}function wy(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:`object`,expanded:e,properties:{}}}var Ty={createObjectDocumentState:wy,createArrayDocumentState:Cy,createValueDocumentState:function(){return{type:`value`}}};function Ey(e,t,n,r){var{createObjectDocumentState:i,createArrayDocumentState:a,createValueDocumentState:o}=r;return function e(t,n,r){if(Array.isArray(t)){var s=hy(n)?n:a();if(r.length===0)return s;var c=Vg(r[0]),l=e(t[c],s.items[c],r.slice(1));return bt(s,[`items`,r[0]],l)}if(Wg(t)){var u=my(n)?n:i();if(r.length===0)return u;var d=r[0],f=e(t[d],u.properties[d],r.slice(1));return bt(u,[`properties`,d],f)}return gy(n)?n:o()}(e,t,n)}function Dy(e,t){return Oy(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(e,t)=>{if(e!==void 0&&t!==void 0)return Array.isArray(e)?hy(t)?t:Cy({expanded:!!_y(t)&&t.expanded}):Wg(e)?my(t)?t:wy({expanded:!!_y(t)&&t.expanded}):gy(t)?t:void 0},()=>!0)}function Oy(e,t,n,r,i){var a=r(e,t,n);if(Array.isArray(e)&&hy(a)&&i(a)){var o=[];return ky(e,a.visibleSections,t=>{var s=n.concat(String(t)),c=Oy(e[t],a.items[t],s,r,i);c!==void 0&&(o[t]=c)}),n_(o,a.items)?a:L(L({},a),{},{items:o})}if(Wg(e)&&my(a)&&i(a)){var s={};return Object.keys(e).forEach(t=>{var o=n.concat(t),c=Oy(e[t],a.properties[t],o,r,i);c!==void 0&&(s[t]=c)}),n_(Object.values(s),Object.values(a.properties))?a:L(L({},a),{},{properties:s})}return a}function ky(e,t,n){t.forEach(t=>{var{start:r,end:i}=t;i_(r,Math.min(e.length,i),n)})}function Ay(e,t){for(var n=e,r=[],i=0;i<t.length;){if(Array.isArray(n)){var a=t[i];r.push(`items`,a),n=n[Vg(a)]}else{if(!Wg(n))throw Error(`Cannot convert path: Object or Array expected at index ${i}`);var o=t[i];r.push(`properties`,o),n=n[o]}i++}return r}function jy(e,t,n,r){for(var i=t,a=function(t){var r=n.slice(0,t);i=zy(e,i,r,(e,r)=>{var i=_y(r)&&!r.expanded?L(L({},r),{},{expanded:!0}):r;return hy(i)?function(e,t){if(function(e,t){return e.some(e=>t>=e.start&&t<e.end)}(e.visibleSections,t))return e;var n=ty(t),r={start:n,end:ey(n)};return L(L({},e),{},{visibleSections:$v(e.visibleSections.concat(r))})}(i,Vg(n[t])):i})},o=0;o<n.length;o++)a(o);return zy(e,i,n,(e,t)=>function(e,t,n,r){return Oy(e,t,n,(e,t,n)=>Array.isArray(e)&&r(n)?hy(t)?t.expanded?t:L(L({},t),{},{expanded:!0}):Cy({expanded:!0}):Wg(e)&&r(n)?my(t)?t.expanded?t:L(L({},t),{},{expanded:!0}):wy({expanded:!0}):t,e=>_y(e)&&e.expanded)}(e,t,[],r))}function My(e,t,n,r){return zy(e,t,n,(e,t)=>r?function(e,t,n){return Oy(e,t,n,(e,t)=>Ny(t),()=>!0)}(e,t,n):Ny(t))}function Ny(e){return hy(e)&&e.expanded?L(L({},e),{},{expanded:!1,visibleSections:zv}):my(e)&&e.expanded?L(L({},e),{},{expanded:!1}):e}function Py(e,t,n){var r={json:e,documentState:t},i=n.reduce((e,t)=>({json:At(e.json,[t]),documentState:Fy(e.json,e.documentState,t)}),r);return{json:i.json,documentState:Dy(i.json,i.documentState)}}function Fy(e,t,n){if(st(n))return By(e,t,n,void 0);if(ct(n))return Vy(e,t,n);if(lt(n)){var r=Bt(e,n.path),i=Uy(e,t,r);return i?Ry(e,t,r,{type:`value`,enforceString:i}):t}return ut(n)||dt(n)?function(e,t,n){if(dt(n)&&n.from===n.path)return t;var r=t,i=Bt(e,n.from),a=Iy(e,r,i);return dt(n)&&(r=Vy(e,r,{path:n.from})),r=By(e,r,{path:n.path},a),r}(e,t,n):t}function Iy(e,t,n){try{return I(t,Ay(e,n))}catch{return}}function Ly(e,t,n,r,i){return St(Ey(e,t,n,i),Ay(e,n),t=>r(I(e,n),t))}function Ry(e,t,n,r){return function(e,t,n,r,i){return bt(Ey(e,t,n,i),Ay(e,n),r)}(e,t,n,r,Ty)}function zy(e,t,n,r){return Ly(e,t,n,r,Ty)}function By(e,t,n,r){var i=Bt(e,n.path),a=t;return a=zy(e,a,rc(i),(e,t)=>{if(!hy(t))return t;var n=Vg(Gs(i)),{items:a,visibleSections:o}=t;return L(L({},t),{},{items:n<a.length?l_(a,n,r===void 0?[,]:[r]):a,visibleSections:Hy(o,n,1)})}),Ry(e,a,i,r)}function Vy(e,t,n){var r=Bt(e,n.path),i=rc(r),a=I(e,i);return Array.isArray(a)?zy(e,t,i,(e,t)=>{if(!hy(t))return t;var n=Vg(Gs(r)),{items:i,visibleSections:a}=t;return L(L({},t),{},{items:i.slice(0,n).concat(i.slice(n+1)),visibleSections:Hy(a,n,-1)})}):function(e,t,n){return Tt(t,Ay(e,n))?Ct(t,Ay(e,n)):t}(e,t,r)}function Hy(e,t,n){return function(e){for(var t=e.slice(0),n=1;n<t.length;)t[n-1].end===t[n].start&&(t[n-1]={start:t[n-1].start,end:t[n].end},t.splice(n)),n++;return t}(e.map(e=>({start:e.start>t?e.start+n:e.start,end:e.end>t?e.end+n:e.end})))}function Uy(e,t,n){var r,i=I(e,n),a=Iy(e,t,n),o=gy(a)?a.enforceString:void 0;return typeof o==`boolean`?o:typeof(r=i)==`string`&&typeof e_(r,JSON)!=`string`}function Wy(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=e.indexOf(t);return r===-1?[]:n?e.slice(r):e.slice(r+1)}function Gy(e,t){var n=[];return function e(t,r,i){n.push(i),at(t)&&hy(r)&&r.expanded&&ky(t,r.visibleSections,n=>{e(t[n],r.items[n],i.concat(String(n)))}),ot(t)&&my(r)&&r.expanded&&Object.keys(t).forEach(n=>{e(t[n],r.properties[n],i.concat(n))})}(e,t,[]),n}function Ky(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];return function i(a,o){r.push({path:o,type:M_.value});var s=Iy(e,t,o);a&&_y(s)&&s.expanded&&(n&&r.push({path:o,type:M_.inside}),at(a)&&ky(a,hy(s)?s.visibleSections:zv,e=>{var t=o.concat(String(e));i(a[e],t),n&&r.push({path:t,type:M_.after})}),ot(a)&&Object.keys(a).forEach(e=>{var t=o.concat(e);r.push({path:t,type:M_.key}),i(a[e],t),n&&r.push({path:t,type:M_.after})}))}(e,[]),r}function qy(e,t,n){var r=Gy(e,t),i=r.map(Dt).indexOf(Dt(n));if(i!==-1&&i<r.length-1)return r[i+1]}function Jy(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return jy(e,t,n,C_({json:I(e,n)},r)?Xy:Qy)}function Yy(e,t,n){var r=Iy(e,t,n);return _y(r)&&r.expanded?t:Jy(e,t,n)}function Xy(e){return e.length===0||e.length===1&&e[0]===`0`}function Zy(e){return e.length===0}function Qy(){return!0}function $y(){return!1}function eb(e){return e&&e.type===j_.after||!1}function tb(e){return e&&e.type===j_.inside||!1}function nb(e){return e&&e.type===j_.key||!1}function rb(e){return e&&e.type===j_.value||!1}function ib(e){return e&&e.type===j_.multi||!1}function ab(e){return ib(e)&&cc(e.focusPath,e.anchorPath)}function ob(e){return ib(e)||eb(e)||tb(e)||nb(e)||rb(e)}function sb(e){return e&&e.type===j_.text||!1}function cb(e,t){var n=[];return function(e,t,n){if(t){var r=Rb(t),i=Lb(t);if(cc(r,i))return n(r);if(e!==void 0){var a=gb(r,i);if(r.length===a.length||i.length===a.length)return n(a);var o=Db(r,i),s=ub(e,o),c=db(e,o),l=Ib(e,o,s),u=Ib(e,o,c);if(!(l===-1||u===-1)){var d=I(e,a);if(ot(d)){for(var f=Object.keys(d),p=l;p<=u;p++){var m=n(a.concat(f[p]));if(m!==void 0)return m}return}if(at(d)){for(var h=l;h<=u;h++){var g=n(a.concat(String(h)));if(g!==void 0)return g}return}throw Error(`Failed to create selection`)}}}}(e,t,e=>{n.push(e)}),n}function lb(e){return tb(e)?e.path:rc(Lb(e))}function ub(e,t){if(!ib(t))return t.path;var n=Ib(e,t,t.anchorPath);return Ib(e,t,t.focusPath)<n?t.focusPath:t.anchorPath}function db(e,t){if(!ib(t))return t.path;var n=Ib(e,t,t.anchorPath);return Ib(e,t,t.focusPath)>n?t.focusPath:t.anchorPath}function fb(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?Lb(n):ub(e,n),a=function(e,t,n){var r=Gy(e,t),i=r.map(Dt),a=Dt(n),o=i.indexOf(a);if(o!==-1&&o>0)return r[o-1]}(e,t,i);if(r)return tb(n)||eb(n)?a===void 0?void 0:Db(i,i):a===void 0?void 0:Db(Rb(n),a);if(eb(n)||tb(n))return Cb(i);if(nb(n)){if(a===void 0||a.length===0)return;var o=I(e,rc(a));return Array.isArray(o)||sc(a)?Cb(a):xb(a)}return rb(n),a===void 0?void 0:Cb(a)}}function pb(e,t,n,r){if(!n)return{caret:void 0,previous:void 0,next:void 0};var i=Ky(e,t,r),a=i.findIndex(e=>cc(e.path,Lb(n))&&String(e.type)===String(n.type));return{caret:a===-1?void 0:i[a],previous:a!==-1&&a>0?i[a-1]:void 0,next:a!==-1&&a<i.length-1?i[a+1]:void 0}}function mb(e,t){for(var n=Gy(e,t),r=0;r<n.length-1&&n[r+1].length>n[r].length;)r++;var i=n[r];return i===void 0||i.length===0||Array.isArray(I(e,rc(i)))?Cb(i):xb(i)}function hb(e,t){if(t.length===1){var n=Qs(t);if(n.op===`replace`)return Cb(Bt(e,n.path))}if(!sc(t)&&t.every(e=>e.op===`move`)){var r=Qs(t),i=t.slice(1);if((ut(r)||dt(r))&&r.from!==r.path&&i.every(e=>(ut(e)||dt(e))&&e.from===e.path))return xb(Bt(e,r.path))}var a=t.filter(e=>e.op!==`test`&&e.op!==`remove`&&(e.op!==`move`||e.from!==e.path)&&typeof e.path==`string`).map(t=>Bt(e,t.path));if(!sc(a))return{type:j_.multi,anchorPath:Qs(a),focusPath:Gs(a)}}function gb(e,t){for(var n=0;n<e.length&&n<t.length&&e[n]===t[n];)n++;return e.slice(0,n)}function _b(e){return nb(e)||rb(e)||ab(e)}function vb(e,t){return _b(t)&&Gg(I(e,Lb(t)))?Lb(t):rc(Lb(t))}function yb(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function bb(e){if(kb(e)){var{type:t,path:n}=e;return{type:t,path:n}}return e}function xb(e){return{type:j_.key,path:e}}function Sb(e,t){return{type:j_.key,path:e,edit:!0,initialValue:t}}function Cb(e){return{type:j_.value,path:e}}function wb(e,t){return{type:j_.value,path:e,edit:!0,initialValue:t}}function Tb(e){return{type:j_.inside,path:e}}function Eb(e){return{type:j_.after,path:e}}function Db(e,t){var n=gb(e,t),r=e.length>n.length&&t.length>n.length;return{type:j_.multi,anchorPath:r?n.concat(e[n.length]):n,focusPath:r?n.concat(t[n.length]):n}}function Ob(e,t,n,r){if(nb(t))return String(Gs(t.path));if(rb(t)){var i=I(e,t.path);return typeof i==`string`?i:r.stringify(i,null,n)}if(ib(t)){if(sc(t.focusPath))return r.stringify(e,null,n);var a=I(e,lb(t));if(Array.isArray(a)){if(ab(t)){var o=I(e,t.focusPath);return r.stringify(o,null,n)}return cb(e,t).map(t=>{var i=I(e,t);return`${r.stringify(i,null,n)},`}).join(`
`)}return cb(e,t).map(t=>{var i=Gs(t),a=I(e,t);return`${r.stringify(i)}: ${r.stringify(a,null,n)},`}).join(`
`)}}function kb(e){return(nb(e)||rb(e))&&!0===e.edit}function Ab(e){return nb(e)||rb(e)||ib(e)}function jb(e){return nb(e)||rb(e)||ab(e)}function Mb(e){switch(e.type){case M_.key:return xb(e.path);case M_.value:return Cb(e.path);case M_.after:return Eb(e.path);case M_.inside:return Tb(e.path)}}function Nb(e,t){switch(e){case j_.key:return xb(t);case j_.value:return Cb(t);case j_.after:return Eb(t);case j_.inside:return Tb(t);case j_.multi:case j_.text:return Db(t,t)}}function Pb(e,t,n){if(t)return Fb(e,t,n)||yb(ib(t)?rc(t.focusPath):t.path,n)?t:void 0}function Fb(e,t,n){if(e===void 0||!t)return!1;if(nb(t)||tb(t)||eb(t))return cc(t.path,n);if(rb(t))return yb(n,t.path);if(ib(t)){var r=ub(e,t),i=db(e,t),a=rc(t.focusPath);if(!yb(n,a)||n.length<=a.length)return!1;var o=Ib(e,t,r),s=Ib(e,t,i),c=Ib(e,t,n);return c!==-1&&c>=o&&c<=s}return!1}function Ib(e,t,n){var r=rc(t.focusPath);if(!yb(n,r)||n.length<=r.length)return-1;var i=n[r.length],a=I(e,r);if(ot(a))return Object.keys(a).indexOf(i);if(at(a)){var o=Vg(i);if(o<a.length)return o}return-1}function Lb(e){return ib(e)?e.focusPath:e.path}function Rb(e){return ib(e)?e.anchorPath:e.path}function zb(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i of n)if(typeof i==`string`&&e.push(i),i&&typeof i==`object`)for(var a in i)Object.hasOwnProperty.call(i,a)&&i[a]&&e.push(a);return e.join(` `)}function Bb(e,t,n){return zb(`jse-value`,`jse-`+Zg(e,n),{"jse-url":$g(e),"jse-empty":typeof e==`string`&&e.length===0,"jse-table-cell":t===A_.table})}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var Vb=X(`<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>`);function Hb(e,t){tf(t,!1);var n=Ig(`jsoneditor:EditableDiv`),r=$(t,`value`,9),i=$(t,`initialValue`,9),a=$(t,`shortText`,9,!1),o=$(t,`label`,9),s=$(t,`onChange`,9),c=$(t,`onCancel`,9),l=$(t,`onFind`,9),u=$(t,`onPaste`,9,Kn),d=$(t,`onValueClass`,9,()=>``),f=B(void 0,!0),p=B(void 0,!0),m=!1;function h(){return K(f)?function(e){return e.replace(/\n$/,``)}(K(f).innerText):``}function g(e){K(f)&&Vp(f,K(f).innerText=Y_(e))}kh(()=>{n(`onMount`,{value:r(),initialValue:i()}),g(i()===void 0?r():i()),K(f)&&function(e){if(e.firstChild!=null){var t=document.createRange(),n=window.getSelection();t.setStart(e,1),t.collapse(!0),n?.removeAllRanges(),n?.addRange(t)}else e.focus()}(K(f))}),Ah(()=>{var e=h();n(`onDestroy`,{closed:m,value:r(),newValue:e}),m||e===r()||s()(e,I_.no)}),W(()=>(J(d()),J(r())),()=>{V(p,d()(r()))}),um(),Og(!0);var _=Vb();Tg(_,e=>V(f,e),()=>K(f)),G(e=>{mg(_,`aria-label`,o()),eg(_,1,e,`svelte-1r0oryi`)},[()=>Xh((J(zb),K(p),J(a()),q(()=>zb(`jse-editable-div`,K(p),{"jse-short-text":a()}))))]),Y(`input`,_,function(){var e=h();e===``&&g(``),V(p,d()(e))}),Y(`keydown`,_,function(e){e.stopPropagation();var t=cv(e);if(t===`Escape`&&(e.preventDefault(),m=!0,c()()),t===`Enter`||t===`Tab`){e.preventDefault(),m=!0;var n=h();s()(n,I_.nextInside)}t===`Ctrl+F`&&(e.preventDefault(),l()(!1)),t===`Ctrl+H`&&(e.preventDefault(),l()(!0))}),Y(`paste`,_,function(e){if(e.stopPropagation(),u()&&e.clipboardData){var t=e.clipboardData.getData(`text/plain`);u()(t)}}),Y(`blur`,_,function(){var e=document.hasFocus(),t=h();n(`handleBlur`,{hasFocus:e,closed:m,value:r(),newValue:t}),document.hasFocus()&&!m&&(m=!0,t!==r()&&s()(t,I_.self))}),Z(e,_),nf()}function Ub(e,t){tf(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`selection`,9),a=$(t,`mode`,9),o=$(t,`parser`,9),s=$(t,`normalization`,9),c=$(t,`enforceString`,9),l=$(t,`onPatch`,9),u=$(t,`onPasteJson`,9),d=$(t,`onSelect`,9),f=$(t,`onFind`,9),p=$(t,`focus`,9),m=$(t,`findNextInside`,9);function h(e){return c()?e:e_(e,o())}function g(){d()(Cb(n())),p()()}Og(!0);var _=z(()=>(J(s()),J(r()),q(()=>s().escapeValue(r())))),v=z(()=>(J(kb),J(i()),q(()=>kb(i())?i().initialValue:void 0)));Hb(e,{get value(){return K(_)},get initialValue(){return K(v)},label:`Edit value`,onChange:function(e,t){l()([{op:`replace`,path:Dt(n()),value:h(s().unescapeValue(e))}],(e,r,i)=>{if(!i||cc(n(),Lb(i)))return{state:r,selection:t===I_.nextInside?m()(n()):Cb(n())}}),p()()},onCancel:g,onPaste:function(e){try{var t=o().parse(e);Gg(t)&&u()({path:n(),contents:t,onPasteAsJson:()=>{g();var e=[{op:`replace`,path:Dt(n()),value:t}];l()(e,(e,t)=>({state:Jy(e,t,n())}))}})}catch{}},get onFind(){return f()},onValueClass:function(e){return Bb(h(s().unescapeValue(e)),a(),o())}}),nf()}function Wb(e,t,n){var r=rc(t),i=I(e,r);if(at(i)){var a=Vg(Gs(t));return n.map((e,t)=>({op:`add`,path:Dt(r.concat(String(a+t))),value:e.value}))}if(ot(i)){var o=Gs(t),s=Object.keys(i),c=o===void 0?[]:Wy(s,o,!0);return[...n.map(e=>{var t=_v(e.key,s);return{op:`add`,path:Dt(r.concat(t)),value:e.value}}),...c.map(e=>Zb(r,e))]}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}function Gb(e,t,n){var r=I(e,t);if(Array.isArray(r)){var i=r.length;return n.map((e,n)=>({op:`add`,path:Dt(t.concat(String(i+n))),value:e.value}))}return n.map(e=>{var n=_v(e.key,Object.keys(r));return{op:`add`,path:Dt(t.concat(n)),value:e.value}})}function Kb(e,t,n,r){var i=_v(r,t.filter(e=>e!==n)),a=Wy(t,n,!1);return[{op:`move`,from:Dt(e.concat(n)),path:Dt(e.concat(i))},...a.map(t=>Zb(e,t))]}function qb(e,t){var n=Gs(t);if(sc(n))throw Error(`Cannot duplicate root object`);var r=rc(n),i=Gs(n),a=I(e,r);if(at(a)){var o=Gs(t),s=o?Vg(Gs(o))+1:0;return[...t.map((e,t)=>({op:`copy`,from:Dt(e),path:Dt(r.concat(String(t+s)))}))]}if(ot(a)){var c=Object.keys(a),l=i===void 0?[]:Wy(c,i,!1);return[...t.map(e=>{var t=_v(Gs(e),c);return{op:`copy`,from:Dt(e),path:Dt(r.concat(t))}}),...l.map(e=>Zb(r,e))]}throw Error(`Cannot create duplicate operations: parent must be an Object or Array`)}function Jb(e,t){if(rb(t))return[{op:`move`,from:Dt(t.path),path:``}];if(!ib(t))throw Error(`Cannot create extract operations: parent must be an Object or Array`);var n=I(e,rc(t.focusPath));if(at(n))return[{op:`replace`,path:``,value:cb(e,t).map(e=>n[Vg(Gs(e))])}];if(ot(n)){var r={};return cb(e,t).forEach(e=>{var t=String(Gs(e));r[t]=n[t]}),[{op:`replace`,path:``,value:r}]}throw Error(`Cannot extract: unsupported type of selection `+JSON.stringify(t))}function Yb(e,t,n,r){if(nb(t)){var i=d_(n,r),a=rc(t.path),o=I(e,a);return Kb(a,Object.keys(o),Gs(t.path),typeof i==`string`?i:n)}if(rb(t)||ib(t)&&sc(t.focusPath))try{return[{op:`replace`,path:Dt(Lb(t)),value:f_(n,e=>u_(e,r))}]}catch{return[{op:`replace`,path:Dt(Lb(t)),value:n}]}if(ib(t)){var s=Qb(n,r);return function(e,t,n){var r=rc(Qs(t)),i=I(e,r);if(at(i)){var a=Qs(t),o=a?Vg(Gs(a)):0;return[...Xb(t),...n.map((e,t)=>({op:`add`,path:Dt(r.concat(String(t+o))),value:e.value}))]}if(ot(i)){var s=Gs(t),c=rc(s),l=Gs(s),u=Object.keys(i),d=l===void 0?[]:Wy(u,l,!1),f=new Set(t.map(e=>Gs(e))),p=u.filter(e=>!f.has(e));return[...Xb(t),...n.map(e=>{var t=_v(e.key,p);return{op:`add`,path:Dt(c.concat(t)),value:e.value}}),...d.map(e=>Zb(c,e))]}throw Error(`Cannot create replace operations: parent must be an Object or Array`)}(e,cb(e,t),s)}if(eb(t)){var c=Qb(n,r),l=t.path,u=rc(l),d=I(e,u);if(at(d)){var f=Vg(Gs(l));return Wb(e,u.concat(String(f+1)),c)}if(ot(d)){var p=String(Gs(l)),m=Object.keys(d);if(sc(m)||Gs(m)===p)return Gb(e,u,c);var h=m[m.indexOf(p)+1];return Wb(e,u.concat(h),c)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}if(tb(t)){var g=Qb(n,r),_=t.path,v=I(e,_);if(at(v))return Wb(e,_.concat(`0`),g);if(ot(v)){var y=Object.keys(v);if(sc(y))return Gb(e,_,g);var b=Qs(y);return Wb(e,_.concat(b),g)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}throw Error(`Cannot insert: unsupported type of selection `+JSON.stringify(t))}function Xb(e){return e.map(e=>({op:`remove`,path:Dt(e)})).reverse()}function Zb(e,t){return{op:`move`,from:Dt(e.concat(t)),path:Dt(e.concat(t))}}function Qb(e,t){var n=/^\s*{/.test(e),r=/^\s*\[/.test(e),i=d_(e,t),a=i===void 0?f_(e,e=>u_(e,t)):i;return n&&Wg(a)||r&&Array.isArray(a)?[{key:`New item`,value:a}]:Array.isArray(a)?a.map((e,t)=>({key:`New item `+t,value:e})):Wg(a)?Object.keys(a).map(e=>({key:e,value:a[e]})):[{key:`New item`,value:a}]}function $b(e,t){if(nb(t)){var n=rc(t.path),r=I(e,n),i=Kb(n,Object.keys(r),Gs(t.path),``);return{operations:i,newSelection:hb(e,i)}}if(rb(t))return{operations:[{op:`replace`,path:Dt(t.path),value:``}],newSelection:t};if(ib(t)){var a=cb(e,t),o=Xb(a),s=Gs(a);if(sc(s))return{operations:[{op:`replace`,path:``,value:``}],newSelection:Cb([])};var c=rc(s),l=I(e,c);if(at(l)){var u=Vg(Gs(Qs(a)));return{operations:o,newSelection:u===0?Tb(c):Eb(c.concat(String(u-1)))}}if(ot(l)){var d=Object.keys(l),f=Gs(Qs(a)),p=d.indexOf(f),m=d[p-1];return{operations:o,newSelection:p===0?Tb(c):Eb(c.concat(m))}}throw Error(`Cannot create remove operations: parent must be an Object or Array`)}throw Error(`Cannot remove: unsupported type of selection `+JSON.stringify(t))}function ex(e,t){return Ht(e,function(e,t){if(sc(t)||!t.every(dt))return t;var n=[];for(var r of t){var i=tx(Et(r.from)),a=tx(Et(r.path));if(!i||!a)return t;n.push({from:i,path:a,operation:r})}var o=n[0].path.parent;if(!ot(I(e,o))||!n.every(e=>function(e,t){return cc(e.from.parent,t)&&cc(e.path.parent,t)}(e,o)))return t;var s=function(e,t){var n=Object.keys(t),r=n.slice();for(var i of e){var a=r.indexOf(i.from.key);a!==-1&&(r.splice(a,1),r.push(i.path.key))}for(var o=0;o<n.length&&n[o]===r[o];)o++;return r[o]}(n,e),c=e=>e.operation,l=n.filter(e=>e.operation.from!==e.operation.path);return l.some(e=>e.path.key===s)?l.map(c):[Zb(o,s),...l.map(c)]}(e,t),{before:(e,t,n)=>{if(ct(t)){var r=Et(t.path);return{revertOperations:[...n,...nx(e,r)]}}if(dt(t)){var i=Et(t.from);return{revertOperations:t.from===t.path?[t,...nx(e,i)]:[...n,...nx(e,i)]}}return{document:e}}})}function tx(e){return e.length>0?{parent:rc(e),key:Gs(e)}:void 0}function nx(e,t){var n=rc(t),r=Gs(t),i=I(e,n);return ot(i)?Wy(Object.keys(i),r,!1).map(e=>Zb(n,e)):[]}function rx(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[t],r=e.items.map((e,n)=>L(L({},e),{},{active:n===t}));return L(L({},e),{},{items:r,activeItem:n,activeIndex:t})}function ix(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.toLowerCase(),i=n?.maxResults??1/0,a=n?.columns,o=[],s=[];function c(e){o.length>=i||o.push(e)}function l(e,t){if(at(t)){var n=s.length;s.push(`0`);for(var r=0;r<t.length;r++)if(s[n]=String(r),l(e,t[r]),o.length>=i)return;s.pop()}else if(ot(t)){var a=Object.keys(t),u=s.length;for(var d of(s.push(``),a))if(s[u]=d,ax(d,e,s,P_.key,c),l(e,t[d]),o.length>=i)return;s.pop()}else ax(String(t),e,s,P_.value,c)}if(e===``)return[];if(a){if(!Array.isArray(t))throw Error(`json must be an Array when option columns is defined`);for(var u=0;u<t.length;u++){s[0]=String(u);for(var d=t[u],f=0;f<a.length;f++){var p=a[f];if(p.length===1)s[1]=p[0];else for(var m=0;m<p.length;m++)s[m+1]=p[m];for(;s.length>p.length+1;)s.pop();l(r,I(d,p))}if(o.length>=i)break}return o}return l(r,t),o}function ax(e,t,n,r,i){var a=e.toLowerCase(),o=0,s=-1,c=-1;do(c=a.indexOf(t,s))!==-1&&(s=c+t.length,i({path:n.slice(0),field:r,fieldIndex:o,start:c,end:s}),o++);while(c!==-1)}function ox(e,t,n,r){return e.substring(0,n)+t+e.substring(r)}function sx(e,t,n){var r=e;return Zs(n,e=>{r=ox(r,t,e.start,e.end)}),r}function cx(e,t,n,r,i){var{field:a,path:o,start:s,end:c}=r;if(a===P_.key){var l=rc(o),u=I(e,l),d=Gs(o),f=Kb(l,Object.keys(u),d,ox(d,n,s,c));return{newSelection:hb(e,f),operations:f}}if(a===P_.value){var p=I(e,o);if(p===void 0)throw Error(`Cannot replace: path not found ${Dt(o)}`);var m=typeof p==`string`?p:String(p),h=Uy(e,t,o),g=ox(m,n,s,c),_=[{op:`replace`,path:Dt(o),value:h?g:e_(g,i)}];return{newSelection:hb(e,_),operations:_}}throw Error(`Cannot replace: unknown type of search result field ${a}`)}function lx(e){return e.path.concat(e.field,String(e.fieldIndex))}function ux(e){var t=vy(e)?e.searchResults.filter(e=>e.field===P_.key):void 0;return t&&t.length>0?t:void 0}function dx(e){var t=vy(e)?e.searchResults.filter(e=>e.field===P_.value):void 0;return t&&t.length>0?t:void 0}var fx={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function px(e,t){return t.reduce((t,n)=>function(e,t,n,r){return Ly(e,t,n,r,fx)}(e,t,n.path,(e,t)=>L(L({},t),{},{searchResults:t.searchResults?t.searchResults.concat(n):[n]})),void 0)}function mx(e){var t=e?.searchResults??[],n=my(e)?Object.values(e.properties).flatMap(mx):hy(e)?e.items.flatMap(mx):[];return t.concat(n)}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var hx=X(`<span> </span>`);function gx(e,t){tf(t,!1);var n=B(),r=$(t,`text`,8),i=$(t,`searchResultItems`,8);W(()=>(J(r()),J(i())),()=>{V(n,function(e,t){var n=[],r=0;for(var i of t){var a=e.slice(r,i.start);a!==``&&n.push({resultIndex:void 0,type:`normal`,text:a,active:!1});var o=e.slice(i.start,i.end);n.push({resultIndex:i.resultIndex,type:`highlight`,text:o,active:i.active}),r=i.end}var s=Gs(t);return s&&s.end<e.length&&n.push({type:`normal`,text:e.slice(s.end),resultIndex:void 0,active:!1}),n}(String(r()),i()))}),um(),Og();var a=fh();zh(Qp(a),1,()=>K(n),Lh,(e,t)=>{var n=fh(),r=Qp(n),i=e=>{var n=dh();G(()=>_h(n,(K(t),q(()=>K(t).text)))),Z(e,n)},a=e=>{var n,r=hx(),i=H(r);G((e,a)=>{n=eg(r,1,`jse-highlight svelte-19qyvy6`,null,n,{"jse-active":K(t).active}),mg(r,`data-search-result-index`,e),_h(i,a)},[()=>(K(t),q(()=>String(K(t).resultIndex))),()=>(J(Y_),K(t),q(()=>Y_(K(t).text)))]),Z(e,r)};Q(r,e=>{K(t),q(()=>K(t).type===`normal`)?e(i):e(a,-1)}),Z(e,n)}),Z(e,a),nf()}function _x(e){var t=1e3;if(e<900)return e.toFixed()+` B`;var n=e/t;if(n<900)return n.toFixed(1)+` KB`;var r=n/t;if(r<900)return r.toFixed(1)+` MB`;var i=r/t;return i<900?i.toFixed(1)+` GB`:(i/t).toFixed(1)+` TB`}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var vx=X(`<button type="button"><!></button>`);function yx(e,t){tf(t,!0);var n,r=Op(()=>t.onclick?e=>{e.preventDefault(),e.stopPropagation(),t.onclick()}:void 0),i=vx();(function(e,t){var n=[...arguments].slice(2),r=new Oh(e);fm(()=>{var e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},Id)})(H(i),()=>t.children??bd),G(()=>n=eg(i,1,`jse-tag svelte-ubve9r`,null,n,{disabled:!t.onclick})),ih(`click`,i,function(){for(var e,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=K(r))==null||e.apply(this,n)}),Z(e,i),nf()}ah([`click`]),dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var bx=X(`<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>`);function xx(e,t){tf(t,!0);var n=Bp(!0),r=Op(()=>K(n)&&typeof t.value==`string`&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(e=>e.active&&e.end>t.truncateTextSize))),i=Op(()=>K(r)&&typeof t.value==`string`?t.value.substring(0,t.truncateTextSize).trim():t.value),a=Op(()=>$g(t.value));function o(){V(n,!1)}var s=bx(),c=H(s),l=e=>{var n=Op(()=>t.normalization.escapeValue(K(i)));gx(e,{get text(){return K(n)},get searchResultItems(){return t.searchResultItems}})},u=e=>{var n=dh();G(e=>_h(n,e),[()=>Y_(t.normalization.escapeValue(K(i)))]),Z(e,n)};Q(c,e=>{t.searchResultItems?e(l):e(u,-1)});var d=U(c,2),f=e=>{yx(e,{onclick:o,children:(e,n)=>{var r=dh();G(e=>_h(r,`Show more (${e??``})`),[()=>_x(t.value.length)]),Z(e,r)},$$slots:{default:!0}})};Q(d,e=>{K(r)&&typeof t.value==`string`&&e(f)}),G(e=>{eg(s,1,e,`svelte-1saqp8c`),mg(s,`title`,K(a)?`Ctrl+Click or Ctrl+Enter to open url in new window`:void 0)},[()=>Xh(Bb(t.value,t.mode,t.parser))]),ih(`click`,s,function(e){typeof t.value==`string`&&K(a)&&lv(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,`_blank`))}),ih(`dblclick`,s,function(e){t.readOnly||(e.preventDefault(),t.onSelect(wb(t.path)))}),Z(e,s),nf()}ah([`click`,`dblclick`]),dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var Sx=X(`<div class="jse-tooltip svelte-brt1mq"> </div>`);function Cx(e,t){var n=$(t,`text`,8),r=Sx(),i=H(r);G(()=>_h(i,n())),Z(e,r)}function wx(e,t){var n,{text:r,openAbsolutePopup:i,closeAbsolutePopup:a}=t;function o(){n=i(Cx,{text:r},{position:`top`,width:10*r.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function s(){a(n)}return e.addEventListener(`mouseenter`,o),e.addEventListener(`mouseleave`,s),{destroy(){e.removeEventListener(`mouseenter`,o),e.removeEventListener(`mouseleave`,s)}}}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var Tx=X(`<div class="jse-timestamp svelte-1jcpman"><!></div>`);function Ex(e,t){tf(t,!1);var n=B(void 0,!0),r=ef(`absolute-popup`),i=$(t,`value`,9);W(()=>J(i()),()=>{V(n,`Time: ${new Date(i()).toString()}`)}),um(),Og(!0);var a=Tx();Ov(H(a),{get data(){return ml}}),qh(a,(e,t)=>wx?.(e,t),()=>L({text:K(n)},r)),Z(e,a),nf()}function Dx(e){var t=[];return!e.isEditing&&Kg(e.value)&&t.push({component:Av,props:e}),!e.isEditing&&Xg(e.value)&&t.push({component:Pv,props:e}),e.isEditing&&t.push({component:Ub,props:e}),e.isEditing||t.push({component:xx,props:e}),!e.isEditing&&qg(e.value)&&t.push({component:Ex,props:e}),t}function Ox(e){return e.map((e,t)=>jx.test(e)?`[`+e+`]`:/[.[\]]/.test(e)||e===``?`["`+function(e){return e.replace(/"/g,`\\"`)}(e)+`"]`:(t>0?`.`:``)+e).join(``)}function kx(e){for(var t=[],n=0;n<e.length;)e[n]===`.`&&n++,e[n]===`[`?(n++,e[n]===`"`?(n++,t.push(r(e=>e===`"`,!0)),i(`"`)):t.push(r(e=>e===`]`)),i(`]`)):t.push(r(e=>e===`.`||e===`[`));function r(t){for(var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],i=``;n<e.length&&!t(e[n]);)r&&e[n]===`\\`&&e[n+1]===`"`?(i+=`"`,n+=2):(i+=e[n],n++);return i}function i(t){if(e[n]!==t)throw SyntaxError(`Invalid JSON path: ${t} expected at position ${n}`);n++}return t}function Ax(e){return{value:e,label:sc(e)?`(item root)`:Ox(e)}}var jx=/^\d+$/,Mx={},Nx={showWizard:!0,showOriginal:!0},Px=Math.min,Fx=Math.max,Ix=Math.round,Lx=Math.floor,Rx=e=>({x:e,y:e}),zx={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Bx(e,t,n){return Fx(e,Px(t,n))}function Vx(e,t){return typeof e==`function`?e(t):e}function Hx(e){return e.split(`-`)[0]}function Ux(e){return e.split(`-`)[1]}function Wx(e){return e===`x`?`y`:`x`}function Gx(e){return e===`y`?`height`:`width`}function Kx(e){var t=e[0];return t===`t`||t===`b`?`y`:`x`}function qx(e){return Wx(Kx(e))}function Jx(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Yx=[`left`,`right`],Xx=[`right`,`left`],Zx=[`top`,`bottom`],Qx=[`bottom`,`top`];function $x(e,t,n,r){var i=Ux(e),a=function(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Xx:Yx:t?Yx:Xx;case`left`:case`right`:return t?Zx:Qx;default:return[]}}(Hx(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Jx)))),a}function eS(e){var t=Hx(e);return zx[t]+e.slice(t.length)}function tS(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:function(e){return L({top:0,right:0,bottom:0,left:0},e)}(e)}function nS(e){var{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function rS(e,t,n){var r,{reference:i,floating:a}=e,o=Kx(t),s=qx(t),c=Gx(s),l=Hx(t),u=o===`y`,d=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2,p=i[c]/2-a[c]/2;switch(l){case`top`:r={x:d,y:i.y-a.height};break;case`bottom`:r={x:d,y:i.y+i.height};break;case`right`:r={x:i.x+i.width,y:f};break;case`left`:r={x:i.x-a.width,y:f};break;default:r={x:i.x,y:i.y}}switch(Ux(t)){case`start`:r[s]-=p*(n&&u?-1:1);break;case`end`:r[s]+=p*(n&&u?-1:1)}return r}function iS(e,t){return aS.apply(this,arguments)}function aS(){return aS=Xu(function*(e,t){var n;t===void 0&&(t={});var{x:r,y:i,platform:a,rects:o,elements:s,strategy:c}=e,{boundary:l=`clippingAncestors`,rootBoundary:u=`viewport`,elementContext:d=`floating`,altBoundary:f=!1,padding:p=0}=Vx(t,e),m=tS(p),h=s[f?d===`floating`?`reference`:`floating`:d],g=nS(yield a.getClippingRect({element:(n=yield a.isElement==null?void 0:a.isElement(h))==null||n?h:h.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:l,rootBoundary:u,strategy:c})),_=d===`floating`?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=yield a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating),y=(yield a.isElement==null?void 0:a.isElement(v))&&(yield a.getScale==null?void 0:a.getScale(v))||{x:1,y:1},b=nS(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:_,offsetParent:v,strategy:c}):_);return{top:(g.top-b.top+m.top)/y.y,bottom:(b.bottom-g.bottom+m.bottom)/y.y,left:(g.left-b.left+m.left)/y.x,right:(b.right-g.right+m.right)/y.x}}),aS.apply(this,arguments)}var oS=function(){var e=Xu(function*(e,t,n){for(var{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:L(L({},o),{},{detectOverflow:iS}),c=yield o.isRTL==null?void 0:o.isRTL(t),l=yield o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=rS(l,r,c),f=r,p=0,m={},h=0;h<a.length;h++){var g=a[h];if(g){var{name:_,fn:v}=g,{x:y,y:b,data:x,reset:S}=yield v({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=y??u,d=b??d,m[_]=L(L({},m[_]),x),S&&p<50&&(p++,typeof S==`object`&&(S.placement&&(f=S.placement),S.rects&&(l=!0===S.rects?yield o.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:u,y:d}=rS(l,f,c)),h=-1)}}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}});return function(t,n,r){return e.apply(this,arguments)}}(),sS=new Set([`left`,`top`]);function cS(){return cS=Xu(function*(e,t){var{placement:n,platform:r,elements:i}=e,a=yield r.isRTL==null?void 0:r.isRTL(i.floating),o=Hx(n),s=Ux(n),c=Kx(n)===`y`,l=sS.has(o)?-1:1,u=a&&c?-1:1,d=Vx(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?-1*m:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}),cS.apply(this,arguments)}function lS(){return typeof window<`u`}function uS(e){return pS(e)?(e.nodeName||``).toLowerCase():`#document`}function dS(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function fS(e){return((pS(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function pS(e){return!!lS()&&(e instanceof Node||e instanceof dS(e).Node)}function mS(e){return!!lS()&&(e instanceof Element||e instanceof dS(e).Element)}function hS(e){return!!lS()&&(e instanceof HTMLElement||e instanceof dS(e).HTMLElement)}function gS(e){return!(!lS()||typeof ShadowRoot>`u`)&&(e instanceof ShadowRoot||e instanceof dS(e).ShadowRoot)}function _S(e){var{overflow:t,overflowX:n,overflowY:r,display:i}=DS(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function vS(e){return/^(table|td|th)$/.test(uS(e))}function yS(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var bS,xS=/transform|translate|scale|rotate|perspective|filter/,SS=/paint|layout|strict|content/,CS=e=>!!e&&e!==`none`;function wS(e){var t=mS(e)?DS(e):e;return CS(t.transform)||CS(t.translate)||CS(t.scale)||CS(t.rotate)||CS(t.perspective)||!TS()&&(CS(t.backdropFilter)||CS(t.filter))||xS.test(t.willChange||``)||SS.test(t.contain||``)}function TS(){return bS??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),bS}function ES(e){return/^(html|body|#document)$/.test(uS(e))}function DS(e){return dS(e).getComputedStyle(e)}function OS(e){return mS(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function kS(e){if(uS(e)===`html`)return e;var t=e.assignedSlot||e.parentNode||gS(e)&&e.host||fS(e);return gS(t)?t.host:t}function AS(e){var t=kS(e);return ES(t)?e.ownerDocument?e.ownerDocument.body:e.body:hS(t)&&_S(t)?t:AS(t)}function jS(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);var r=AS(e),i=r===e.ownerDocument?.body,a=dS(r);if(i){var o=MS(a);return t.concat(a,a.visualViewport||[],_S(r)?r:[],o&&n?jS(o):[])}return t.concat(r,jS(r,[],n))}function MS(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function NS(e){var t=DS(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=hS(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Ix(n)!==a||Ix(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function PS(e){return mS(e)?e:e.contextElement}function FS(e){var t=PS(e);if(!hS(t))return Rx(1);var n=t.getBoundingClientRect(),{width:r,height:i,$:a}=NS(t),o=(a?Ix(n.width):n.width)/r,s=(a?Ix(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var IS=Rx(0);function LS(e){var t=dS(e);return TS()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:IS}function RS(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),a=PS(e),o=Rx(1);t&&(r?mS(r)&&(o=FS(r)):o=FS(e));var s=function(e,t,n){return t===void 0&&(t=!1),!(!n||t&&n!==dS(e))&&t}(a,n,r)?LS(a):Rx(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a)for(var f=dS(a),p=r&&mS(r)?dS(r):r,m=f,h=MS(m);h&&r&&p!==m;){var g=FS(h),_=h.getBoundingClientRect(),v=DS(h),y=_.left+(h.clientLeft+parseFloat(v.paddingLeft))*g.x,b=_.top+(h.clientTop+parseFloat(v.paddingTop))*g.y;c*=g.x,l*=g.y,u*=g.x,d*=g.y,c+=y,l+=b,h=MS(m=dS(h))}return nS({width:u,height:d,x:c,y:l})}function zS(e,t){var n=OS(e).scrollLeft;return t?t.left+n:RS(fS(e)).left+n}function BS(e,t){var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-zS(e,n),y:n.top+t.scrollTop}}function VS(e,t,n){var r;if(t===`viewport`)r=function(e,t){var n=dS(e),r=fS(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=TS();(!l||l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}var u=zS(r);if(u<=0){var d=r.ownerDocument,f=d.body,p=getComputedStyle(f),m=d.compatMode===`CSS1Compat`&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,h=Math.abs(r.clientWidth-f.clientWidth-m);h<=25&&(a-=h)}else u<=25&&(a+=u);return{width:a,height:o,x:s,y:c}}(e,n);else if(t===`document`)r=function(e){var t=fS(e),n=OS(e),r=e.ownerDocument.body,i=Fx(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Fx(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+zS(e),s=-n.scrollTop;return DS(r).direction===`rtl`&&(o+=Fx(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}(fS(e));else if(mS(t))r=function(e,t){var n=RS(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=hS(e)?FS(e):Rx(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}(t,n);else{var i=LS(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return nS(r)}function HS(e,t){var n=kS(e);return!(n===t||!mS(n)||ES(n))&&(DS(n).position===`fixed`||HS(n,t))}function US(e,t,n){var r=hS(t),i=fS(t),a=n===`fixed`,o=RS(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Rx(0);function l(){c.x=zS(i)}if(r||!r&&!a)if((uS(t)!==`body`||_S(i))&&(s=OS(t)),r){var u=RS(t,!0,a,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else i&&l();a&&!r&&i&&l();var d=!i||r||a?Rx(0):BS(i,s);return{x:o.left+s.scrollLeft-c.x-d.x,y:o.top+s.scrollTop-c.y-d.y,width:o.width,height:o.height}}function WS(e){return DS(e).position===`static`}function GS(e,t){if(!hS(e)||DS(e).position===`fixed`)return null;if(t)return t(e);var n=e.offsetParent;return fS(e)===n&&(n=n.ownerDocument.body),n}function KS(e,t){var n=dS(e);if(yS(e))return n;if(!hS(e)){for(var r=kS(e);r&&!ES(r);){if(mS(r)&&!WS(r))return r;r=kS(r)}return n}for(var i=GS(e,t);i&&vS(i)&&WS(i);)i=GS(i,t);return i&&ES(i)&&WS(i)&&!wS(i)?n:i||function(e){for(var t=kS(e);hS(t)&&!ES(t);){if(wS(t))return t;if(yS(t))return null;t=kS(t)}return null}(e)||n}var qS={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=fS(r),s=!!t&&yS(t.floating);if(r===o||s&&a)return n;var c={scrollLeft:0,scrollTop:0},l=Rx(1),u=Rx(0),d=hS(r);if((d||!d&&!a)&&((uS(r)!==`body`||_S(o))&&(c=OS(r)),d)){var f=RS(r);l=FS(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}var p=!o||d||a?Rx(0):BS(o,c);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+p.x,y:n.y*l.y-c.scrollTop*l.y+u.y+p.y}},getDocumentElement:fS,getClippingRect:function(e){for(var{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?yS(t)?[]:function(e,t){var n=t.get(e);if(n)return n;for(var r=jS(e,[],!1).filter(e=>mS(e)&&uS(e)!==`body`),i=null,a=DS(e).position===`fixed`,o=a?kS(e):e;mS(o)&&!ES(o);){var s=DS(o),c=wS(o);c||s.position!==`fixed`||(i=null),(a?!c&&!i:!c&&s.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||_S(o)&&!c&&HS(e,o))?r=r.filter(e=>e!==o):i=s,o=kS(o)}return t.set(e,r),r}(t,this._c):[].concat(n),r],o=VS(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left,d=1;d<a.length;d++){var f=VS(t,a[d],i);s=Fx(f.top,s),c=Px(f.right,c),l=Px(f.bottom,l),u=Fx(f.left,u)}return{width:c-u,height:l-s,x:u,y:s}},getOffsetParent:KS,getElementRects:function(){var e=Xu(function*(e){var t=this.getOffsetParent||KS,n=this.getDimensions,r=yield n(e.floating);return{reference:US(e.reference,yield t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:n}=NS(e);return{width:t,height:n}},getScale:FS,isElement:mS,isRTL:function(e){return DS(e).direction===`rtl`}};function JS(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function YS(e,t,n,r){r===void 0&&(r={});var{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=PS(e),u=i||a?[...l?jS(l):[],...t?jS(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});var d,f=l&&s?function(e,t){var n,r=null,i=fS(e);function a(){var e;clearTimeout(n),(e=r)==null||e.disconnect(),r=null}return function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();var l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),f&&p){var m={rootMargin:-Lx(d)+`px `+-Lx(i.clientWidth-(u+f))+`px `+-Lx(i.clientHeight-(d+p))+`px `+-Lx(u)+`px`,threshold:Fx(0,Px(1,c))||1},h=!0;try{r=new IntersectionObserver(g,L(L({},m),{},{root:i.ownerDocument}))}catch{r=new IntersectionObserver(g,m)}r.observe(e)}function g(t){var r=t[0].intersectionRatio;if(r!==c){if(!h)return o();r?o(!1,r):n=setTimeout(()=>{o(!1,1e-7)},1e3)}r!==1||JS(l,e.getBoundingClientRect())||o(),h=!1}}(!0),a}(l,n):null,p=-1,m=null;o&&(m=new ResizeObserver(e=>{var[r]=e;r&&r.target===l&&m&&t&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;(e=m)==null||e.observe(t)})),n()}),l&&!c&&m.observe(l),t&&m.observe(t));var h=c?RS(e):null;return c&&function t(){var r=RS(e);h&&!JS(h,r)&&n(),h=r,d=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),f?.(),(e=m)==null||e.disconnect(),m=null,c&&cancelAnimationFrame(d)}}var XS=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,fn:t=>Xu(function*(){var n,{x:r,y:i,placement:a,middlewareData:o}=t,s=yield function(e,t){return cS.apply(this,arguments)}(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:L(L({},s),{},{placement:a})}})()}},ZS=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,fn:t=>Xu(function*(){var{x:n,y:r,placement:i,platform:a}=t,o=Vx(e,t),{mainAxis:s=!0,crossAxis:c=!1,limiter:l={fn:e=>{var{x:t,y:n}=e;return{x:t,y:n}}}}=o,u=qu(o,Ku),d={x:n,y:r},f=yield a.detectOverflow(t,u),p=Kx(Hx(i)),m=Wx(p),h=d[m],g=d[p];if(s){var _=m===`y`?`bottom`:`right`;h=Bx(h+f[m===`y`?`top`:`left`],h,h-f[_])}if(c){var v=p===`y`?`bottom`:`right`;g=Bx(g+f[p===`y`?`top`:`left`],g,g-f[v])}var y=l.fn(L(L({},t),{},{[m]:h,[p]:g}));return L(L({},y),{},{data:{x:y.x-n,y:y.y-r,enabled:{[m]:s,[p]:c}}})})()}},QS=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,fn:t=>Xu(function*(){var n,{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,l=Vx(e,t),{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p=`bestFit`,fallbackAxisSideDirection:m=`none`,flipAlignment:h=!0}=l,g=qu(l,Gu);if((n=i.arrow)!=null&&n.alignmentOffset)return{};var _=Hx(r),v=Kx(o),y=Hx(o)===o,b=yield s.isRTL==null?void 0:s.isRTL(c.floating),x=f||(y||!h?[eS(o)]:function(e){var t=eS(e);return[Jx(e),t,Jx(t)]}(o)),S=m!==`none`;!f&&S&&x.push(...$x(o,h,m,b));var C=[o,...x],w=yield s.detectOverflow(t,g),T=[],E=i.flip?.overflows||[];if(u&&T.push(w[_]),d){var ee=function(e,t,n){n===void 0&&(n=!1);var r=Ux(e),i=qx(e),a=Gx(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=eS(o)),[o,eS(o)]}(r,a,b);T.push(w[ee[0]],w[ee[1]])}if(E=[...E,{placement:r,overflows:T}],!T.every(e=>e<=0)){var te=(i.flip?.index||0)+1,ne=C[te];if(ne&&(!(d===`alignment`&&v!==Kx(ne))||E.every(e=>Kx(e.placement)!==v||e.overflows[0]>0)))return{data:{index:te,overflows:E},reset:{placement:ne}};var re=E.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!re)switch(p){case`bestFit`:var ie=E.filter(e=>{if(S){var t=Kx(e.placement);return t===v||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];ie&&(re=ie);break;case`initialPlacement`:re=o}if(r!==re)return{reset:{placement:re}}}return{}})()}};function $S(e){var t,n,r={autoUpdate:!0},i=e,a=t=>L(L(L({},r),e||{}),t||{}),o=e=>{t&&n&&(i=a(e),((e,t,n)=>{var r=new Map,i=L({platform:qS},n),a=L(L({},i.platform),{},{_c:r});return oS(e,t,L(L({},i),{},{platform:a}))})(t,n,i).then(e=>{var t;Object.assign(n.style,{position:e.strategy,left:`${e.x}px`,top:`${e.y}px`}),(t=i)!=null&&t.onComputed&&i.onComputed(e)}))},s=e=>{Ah(e.subscribe(e=>{t===void 0?(t=e,o()):(Object.assign(t,e),o())}))};return[e=>{if(`subscribe`in e)return s(e),{};t=e,o()},(e,r)=>{var s;n=e,i=a(r),setTimeout(()=>o(r),0),o(r);var c=()=>{s&&=(s(),void 0)},l=function(){var{autoUpdate:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i||{};c(),!1!==e&&Ym().then(()=>YS(t,n,()=>o(i),!0===e?{}:e))};return s=l(),{update(e){o(e),s=l(e)},destroy(){c()}}},o]}function eC(e){var{loadOptions:t,filterText:n,items:r,multiple:i,value:a,itemId:o,groupBy:s,filterSelectedItems:c,itemFilter:l,convertStringItemsToObjects:u,filterGroupedItems:d,label:f}=e;if(r&&t)return r;if(!r)return[];r&&r.length>0&&typeof r[0]!=`object`&&(r=u(r));var p=r.filter(e=>{var t=l(e[f],n,e);return t&&i&&a!=null&&a.length&&(t=!a.some(t=>!!c&&t[o]===e[o])),t});return s&&(p=d(p)),p}function tC(e){return nC.apply(this,arguments)}function nC(){return(nC=Xu(function*(e){var{dispatch:t,loadOptions:n,convertStringItemsToObjects:r,filterText:i}=e,a=yield n(i).catch(e=>{console.warn(`svelte-select loadOptions error :>> `,e),t(`error`,{type:`loadOptions`,details:e})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!=`object`&&(a=r(a)),t(`loaded`,{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}dv(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var rC=uh(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);dv(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var iC=uh(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function aC(e){Z(e,iC())}dv(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var oC=uh(`<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`);dv(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var sC=X(`<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>`),cC=X(`<div class="empty svelte-1ul7oo4">No options</div>`),lC=X(`<div role="none"><!> <!> <!></div>`),uC=X(`<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>`,1),dC=X(`<div class="multi-item-clear svelte-1ul7oo4"><!></div>`),fC=X(`<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>`),pC=X(`<div><!></div>`),mC=X(`<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>`),hC=X(`<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>`),gC=X(`<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>`),_C=X(`<input type="hidden" class="svelte-1ul7oo4"/>`),vC=X(`<select class="required svelte-1ul7oo4" required="" tabindex="-1" aria-hidden="true"></select>`),yC=X(`<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>`);function bC(e,t){var n=function(e){var t={};for(var n in e.children&&(t.default=!0),e.$$slots)t[n]=!0;return t}(t);tf(t,!1);var r,i=B(),a=B(),o=B(),s=B(),c=B(),l=B(),u=B(),d=B(),f=B(),p=jh(),m=$(t,`justValue`,12,null),h=$(t,`filter`,8,eC),g=$(t,`getItems`,8,tC),_=$(t,`id`,8,null),v=$(t,`name`,8,null),y=$(t,`container`,12,void 0),b=$(t,`input`,12,void 0),x=$(t,`multiple`,8,!1),S=$(t,`multiFullItemClearable`,8,!1),C=$(t,`disabled`,8,!1),w=$(t,`focused`,12,!1),T=$(t,`value`,12,null),E=$(t,`filterText`,12,``),ee=$(t,`placeholder`,8,`Please select`),te=$(t,`placeholderAlwaysShow`,8,!1),ne=$(t,`items`,12,null),re=$(t,`label`,8,`label`),ie=$(t,`itemFilter`,8,(e,t,n)=>`${e}`.toLowerCase().includes(t.toLowerCase())),ae=$(t,`groupBy`,8,void 0),oe=$(t,`groupFilter`,8,e=>e),se=$(t,`groupHeaderSelectable`,8,!1),D=$(t,`itemId`,8,`value`),O=$(t,`loadOptions`,8,void 0),ce=$(t,`containerStyles`,8,``),le=$(t,`hasError`,8,!1),ue=$(t,`filterSelectedItems`,8,!0),de=$(t,`required`,8,!1),k=$(t,`closeListOnChange`,8,!0),fe=$(t,`clearFilterTextOnBlur`,8,!0),pe=$(t,`createGroupHeaderItem`,8,(e,t)=>({value:e,[re()]:e})),me=()=>K(u),A=$(t,`searchable`,8,!0),he=$(t,`inputStyles`,8,``),j=$(t,`clearable`,8,!0),M=$(t,`loading`,12,!1),ge=$(t,`listOpen`,12,!1),_e=$(t,`debounce`,8,function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(r),r=setTimeout(e,t)}),N=$(t,`debounceWait`,8,300),P=$(t,`hideEmptyState`,8,!1),ve=$(t,`inputAttributes`,24,()=>({})),ye=$(t,`listAutoWidth`,8,!0),be=$(t,`showChevron`,8,!1),xe=$(t,`listOffset`,8,5),Se=$(t,`hoverItemIndex`,12,0),Ce=$(t,`floatingConfig`,24,()=>({})),we=$(t,`class`,8,``),Te=B(),Ee=B(),De=B(),Oe=B(),ke=B();function Ae(e){return e.map((e,t)=>({index:t,value:e,label:`${e}`}))}function je(e){var t=[],n={};e.forEach(e=>{var r=ae()(e);t.includes(r)||(t.push(r),n[r]=[],r&&n[r].push(Object.assign(pe()(r,e),{id:r,groupHeader:!0,selectable:se()}))),n[r].push(Object.assign({groupItem:!!r},e))});var r=[];return oe()(t).forEach(e=>{n[e]&&r.push(...n[e])}),r}function Me(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;Se(e<0?0:e),!t&&ae()&&K(u)[Se()]&&!K(u)[Se()].selectable&&Qe(1)}function Ne(){var e=!0;if(T()){var t=[],n=[];T().forEach(r=>{t.includes(r[D()])?e=!1:(t.push(r[D()]),n.push(r))}),e||T(n)}return e}function Pe(e){var t=e?e[D()]:T()[D()];return ne().find(e=>e[D()]===t)}function F(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Xu(function*(e){var t=T()[e];T().length===1?T(void 0):T(T().filter(e=>e!==t)),p(`clear`,t)})).apply(this,arguments)}function Ie(e){if(w())switch(e.stopPropagation(),e.key){case`Escape`:e.preventDefault(),He();break;case`Enter`:if(e.preventDefault(),ge()){if(K(u).length===0)break;var t=K(u)[Se()];if(T()&&!x()&&T()[D()]===t[D()]){He();break}Xe(K(u)[Se()])}break;case`ArrowDown`:e.preventDefault(),ge()?Qe(1):(ge(!0),V(Te,void 0));break;case`ArrowUp`:e.preventDefault(),ge()?Qe(-1):(ge(!0),V(Te,void 0));break;case`Tab`:if(ge()&&w()){if(K(u).length===0||T()&&T()[D()]===K(u)[Se()][D()])return He();e.preventDefault(),Xe(K(u)[Se()]),He()}break;case`Backspace`:if(!x()||E().length>0)return;if(x()&&T()&&T().length>0){if(F(K(Te)===void 0?T().length-1:K(Te)),K(Te)===0||K(Te)===void 0)break;V(Te,T().length>K(Te)?K(Te)-1:void 0)}break;case`ArrowLeft`:if(!T()||!x()||E().length>0)return;K(Te)===void 0?V(Te,T().length-1):T().length>K(Te)&&K(Te)!==0&&V(Te,K(Te)-1);break;case`ArrowRight`:if(!T()||!x()||E().length>0||K(Te)===void 0)return;K(Te)===T().length-1?V(Te,void 0):K(Te)<T().length-1&&V(Te,K(Te)+1)}}function Le(e){var t;w()&&b()===document?.activeElement||(e&&p(`focus`,e),(t=b())==null||t.focus(),w(!0))}function Re(e){return ze.apply(this,arguments)}function ze(){return(ze=Xu(function*(e){var t;Ye||(ge()||w())&&(p(`blur`,e),He(),w(!1),V(Te,void 0),(t=b())==null||t.blur())})).apply(this,arguments)}function Be(){if(!C())return E().length>0?ge(!0):void ge(!ge())}function Ve(){p(`clear`,T()),T(void 0),He(),Le()}function He(){fe()&&E(``),ge(!1)}Mh(Xu(function*(){V(Ee,T()),V(De,E()),V(Oe,x())})),kh(()=>{ge()&&w(!0),w()&&b()&&b().focus()});var Ue=$(t,`ariaValues`,8,e=>`Option ${e}, selected.`),We=$(t,`ariaListOpen`,8,(e,t)=>`You are currently focused on option ${e}. There are ${t} results available.`),Ge=$(t,`ariaFocused`,8,()=>`Select is focused, type to refine list, press down to open the menu.`),Ke,qe=B(null);function Je(){clearTimeout(Ke),Ke=setTimeout(()=>{Ye=!1},100)}Ah(()=>{var e;(e=K(qe))==null||e.remove()});var Ye=!1;function Xe(e){e&&!1!==e.selectable&&function(e){if(e){E(``);var t=Object.assign({},e);if(t.groupHeader&&!t.selectable)return;T(x()?T()?T().concat([t]):[t]:T(t)),setTimeout(()=>{k()&&He(),V(Te,void 0),p(`change`,T()),p(`select`,e)})}}(e)}function Ze(e){Ye||Se(e)}function Qe(e){if(K(u).filter(e=>!Object.hasOwn(e,`selectable`)||!0===e.selectable).length===0)return Se(0);e>0&&Se()===K(u).length-1?Se(0):e<0&&Se()===0?Se(K(u).length-1):Se(Se()+e);var t=K(u)[Se()];t&&!1===t.selectable&&(e!==1&&e!==-1||Qe(e))}function $e(e,t,n){if(!x())return t&&t[n]===e[n]}var et=nt,tt=nt;function nt(e){return{update(t){t.scroll&&(Je(),e.scrollIntoView({behavior:`auto`,block:`nearest`}))}}}var rt=B({strategy:`absolute`,placement:`bottom-start`,middleware:[XS(xe()),QS(),ZS()],autoUpdate:!1}),[it,at,ot]=$S(K(rt)),st=B(!0);W(()=>(J(ne()),J(T())),()=>{ne(),T()&&function(){typeof T()==`string`?T((ne()||[]).find(e=>e[D()]===T())||{[D()]:T(),label:T()}):x()&&Array.isArray(T())&&T().length>0&&T(T().map(e=>typeof e==`string`?{value:e,label:e}:e))}()}),W(()=>(J(ve()),J(A())),()=>{!ve()&&A()||(V(ke,Object.assign({autocapitalize:`none`,autocomplete:`off`,autocorrect:`off`,spellcheck:!1,tabindex:0,type:`text`,"aria-autocomplete":`list`},ve())),_()&&Vp(ke,K(ke).id=_()),A()||Vp(ke,K(ke).readonly=!0))}),W(()=>J(x()),()=>{x()&&T()&&(Array.isArray(T())?T([...T()]):T([T()]))}),W(()=>(K(Oe),J(x())),()=>{K(Oe)&&!x()&&T()&&T(null)}),W(()=>(J(x()),J(T())),()=>{x()&&T()&&T().length>1&&Ne()}),W(()=>J(T()),()=>{T()&&(x()?JSON.stringify(T())!==JSON.stringify(K(Ee))&&Ne()&&p(`input`,T()):K(Ee)&&JSON.stringify(T()[D()])===JSON.stringify(K(Ee)[D()])||p(`input`,T()))}),W(()=>(J(T()),J(x()),K(Ee)),()=>{!T()&&x()&&K(Ee)&&p(`input`,T())}),W(()=>(J(w()),J(b())),()=>{!w()&&b()&&He()}),W(()=>(J(E()),K(De)),()=>{E()!==K(De)&&(O()||E().length!==0)&&(O()?_e()(Xu(function*(){M(!0);var e=yield g()({dispatch:p,loadOptions:O(),convertStringItemsToObjects:Ae,filterText:E()});e?(M(e.loading),ge(ge()?e.listOpen:E().length>0),w(ge()&&e.focused),ne(ae()?je(e.filteredItems):e.filteredItems)):(M(!1),w(!0),ge(!0))}),N()):(ge(!0),x()&&V(Te,void 0)))}),W(()=>(J(h()),J(O()),J(E()),J(ne()),J(x()),J(T()),J(D()),J(ae()),J(re()),J(ue()),J(ie())),()=>{V(u,h()({loadOptions:O(),filterText:E(),items:ne(),multiple:x(),value:T(),itemId:D(),groupBy:ae(),label:re(),filterSelectedItems:ue(),itemFilter:ie(),convertStringItemsToObjects:Ae,filterGroupedItems:je}))}),W(()=>(J(x()),J(ge()),J(T()),K(u)),()=>{!x()&&ge()&&T()&&K(u)&&Me(K(u).findIndex(e=>e[D()]===T()[D()]),!0)}),W(()=>(J(ge()),J(x())),()=>{ge()&&x()&&Se(0)}),W(()=>J(E()),()=>{E()&&Se(0)}),W(()=>J(Se()),()=>{p(`hoverItem`,Se())}),W(()=>(J(x()),J(T())),()=>{V(i,x()?T()&&T().length>0:T())}),W(()=>(K(i),J(E())),()=>{V(a,K(i)&&E().length>0)}),W(()=>(K(i),J(j()),J(C()),J(M())),()=>{V(o,K(i)&&j()&&!C()&&!M())}),W(()=>(J(te()),J(x()),J(ee()),J(T())),()=>{V(s,te()&&x()||x()&&T()?.length===0?ee():T()?``:ee())}),W(()=>(J(T()),J(x())),()=>{var e,t;V(c,T()?(e=x(),t=void 0,t=e&&T().length>0?T().map(e=>e[re()]).join(`, `):T()[re()],Ue()(t)):``)}),W(()=>(K(u),J(Se()),J(w()),J(ge())),()=>{V(l,function(){if(!K(u)||K(u).length===0)return``;var e=K(u)[Se()];if(ge()&&e){var t=K(u)?K(u).length:0;return We()(e[re()],t)}return Ge()()}((K(u),Se(),w(),ge())))}),W(()=>J(ne()),()=>{(function(e){e&&e.length!==0&&!e.some(e=>typeof e!=`object`)&&T()&&(x()?!T().some(e=>!e||!e[D()]):T()[D()])&&(Array.isArray(T())?T(T().map(e=>Pe(e)||e)):T(Pe()||T()))})(ne())}),W(()=>(J(x()),J(T()),J(D())),()=>{m((x(),T(),D(),x()?T()?T().map(e=>e[D()]):null:T()?T()[D()]:T()))}),W(()=>(J(x()),K(Ee),J(T())),()=>{x()||!K(Ee)||T()||p(`input`,T())}),W(()=>(J(ge()),K(u),J(x()),J(T())),()=>{ge()&&K(u)&&!x()&&!T()&&Me()}),W(()=>K(u),()=>{(function(e){ge()&&p(`filter`,e)})(K(u))}),W(()=>(J(y()),J(Ce()),K(rt)),()=>{y()&&Ce()&&ot(Object.assign(K(rt),Ce()))}),W(()=>K(qe),()=>{V(d,!!K(qe))}),W(()=>(K(qe),J(ge())),()=>{(function(e,t){if(!e||!t)return V(st,!0);setTimeout(()=>{V(st,!1)},0)})(K(qe),ge())}),W(()=>(J(ge()),J(y()),K(qe)),()=>{ge()&&y()&&K(qe)&&function(){var{width:e}=y().getBoundingClientRect();Vp(qe,K(qe).style.width=ye()?e+`px`:`auto`)}()}),W(()=>J(Se()),()=>{V(f,Se())}),W(()=>(J(b()),J(ge()),J(w())),()=>{b()&&ge()&&!w()&&Le()}),W(()=>(J(y()),J(Ce())),()=>{y()&&Ce()?.autoUpdate===void 0&&Vp(rt,K(rt).autoUpdate=!0)}),um();var ct={getFilteredItems:me,handleClear:Ve};Og();var lt,ut=yC();Y(`click`,Mp,function(e){var t;ge()||w()||!y()||y().contains(e.target)||(t=K(qe))!=null&&t.contains(e.target)||Re()}),Y(`keydown`,Mp,Ie);var dt=H(ut),ft=e=>{var r,i=lC(),a=H(i),o=e=>{var n=fh();Gh(Qp(n),t,`list-prepend`,{},null),Z(e,n)};Q(a,e=>{q(()=>n[`list-prepend`])&&e(o)});var s=U(a,2),c=e=>{var n=fh();Gh(Qp(n),t,`list`,{get filteredItems(){return K(u)}},null),Z(e,n)},l=e=>{var n=fh();zh(Qp(n),1,()=>K(u),Lh,(e,n,r)=>{var i,a=sC(),o=H(a);Gh(H(o),t,`item`,{get item(){return K(n)},index:r},e=>{var t=dh();G(()=>_h(t,(K(n),J(re()),q(()=>K(n)?.[re()])))),Z(e,t)}),qh(o,(e,t)=>et?.(e),()=>({scroll:$e(K(n),T(),D()),listDom:K(d)})),qh(o,(e,t)=>tt?.(e),()=>({scroll:K(f)===r,listDom:K(d)})),G(e=>i=eg(o,1,`item svelte-1ul7oo4`,null,i,e),[()=>{var e;return{"list-group-title":K(n).groupHeader,active:$e(K(n),T(),D()),first:(e=r,e===0),hover:Se()===r,"group-item":K(n).groupItem,"not-selectable":!1===K(n)?.selectable}}]),Y(`mouseover`,a,()=>Ze(r)),Y(`focus`,a,()=>Ze(r)),Y(`click`,a,Eg(()=>function(e){var{item:t,i:n}=e;if(!1!==t?.selectable)return T()&&!x()&&T()[D()]===t[D()]?He():void(function(e){return e.groupHeader&&e.selectable||e.selectable||!e.hasOwnProperty(`selectable`)}(t)&&(Se(n),Xe(t)))}({item:K(n),i:r}))),Y(`keydown`,a,Dg(Eg(function(e){jg.call(this,t,e)}))),Z(e,a)}),Z(e,n)},p=e=>{var n=fh();Gh(Qp(n),t,`empty`,{},e=>{Z(e,cC())}),Z(e,n)};Q(s,e=>{q(()=>n.list)?e(c):(K(u),q(()=>K(u).length>0)?e(l,1):P()||e(p,2))});var m=U(s,2),h=e=>{var n=fh();Gh(Qp(n),t,`list-append`,{},null),Z(e,n)};Q(m,e=>{q(()=>n[`list-append`])&&e(h)}),qh(i,e=>at?.(e)),Tg(i,e=>V(qe,e),()=>K(qe)),lm(()=>Y(`scroll`,i,Je)),lm(()=>Y(`pointerup`,i,Dg(Eg(function(e){jg.call(this,t,e)})))),lm(()=>Y(`mousedown`,i,Dg(Eg(function(e){jg.call(this,t,e)})))),G(()=>r=eg(i,1,`svelte-select-list svelte-1ul7oo4`,null,r,{prefloat:K(st)})),Z(e,i)};Q(dt,e=>{ge()&&e(ft)});var pt=U(dt,2),mt=H(pt),ht=e=>{var t=uC(),n=Qp(t),r=H(n),i=H(U(n,2));G(()=>{_h(r,K(c)),_h(i,K(l))}),Z(e,t)};Q(mt,e=>{w()&&e(ht)});var gt=U(pt,2);Gh(H(gt),t,`prepend`,{},null);var _t=U(gt,2),vt=H(_t),yt=e=>{var n=fh(),r=Qp(n),i=e=>{var n=fh();zh(Qp(n),1,T,Lh,(e,n,r)=>{var i,a=fC(),o=H(a);Gh(H(o),t,`selection`,{get selection(){return K(n)},index:r},e=>{var t=dh();G(()=>_h(t,(K(n),J(re()),q(()=>K(n)[re()])))),Z(e,t)});var s=U(o,2),c=e=>{var n=dC();Gh(H(n),t,`multi-clear-icon`,{},e=>{aC(e)}),Y(`pointerup`,n,Dg(Eg(()=>F(r)))),Z(e,n)};Q(s,e=>{C()||S()||!aC||e(c)}),G(()=>i=eg(a,1,`multi-item svelte-1ul7oo4`,null,i,{active:K(Te)===r,disabled:C()})),Y(`click`,a,Dg(()=>S()?F(r):{})),Y(`keydown`,a,Dg(Eg(function(e){jg.call(this,t,e)}))),Z(e,a)}),Z(e,n)},o=e=>{var n,r=pC();Gh(H(r),t,`selection`,{get selection(){return T()}},e=>{var t=dh();G(()=>_h(t,(J(T()),J(re()),q(()=>T()[re()])))),Z(e,t)}),G(()=>n=eg(r,1,`selected-item svelte-1ul7oo4`,null,n,{"hide-selected-item":K(a)})),Z(e,r)};Q(r,e=>{x()?e(i):e(o,-1)}),Z(e,n)};Q(vt,e=>{K(i)&&e(yt)});var I=U(vt,2);gg(I,()=>L(L({readOnly:!A()},K(ke)),{},{placeholder:K(s),style:he(),disabled:C()}),void 0,void 0,void 0,`svelte-1ul7oo4`,!0),Tg(I,e=>b(e),()=>b());var bt=U(_t,2),xt=H(bt),St=e=>{var n=mC();Gh(H(n),t,`loading-icon`,{},e=>{(function(e){Z(e,oC())})(e)}),Z(e,n)};Q(xt,e=>{M()&&e(St)});var Ct=U(xt,2),wt=e=>{var n=hC();Gh(H(n),t,`clear-icon`,{},e=>{aC(e)}),Y(`click`,n,Ve),Z(e,n)};Q(Ct,e=>{K(o)&&e(wt)});var Tt=U(Ct,2),Et=e=>{var n=gC();Gh(H(n),t,`chevron-icon`,{get listOpen(){return ge()}},e=>{(function(e){Z(e,rC())})(e)}),Z(e,n)};Q(Tt,e=>{be()&&e(Et)});var Dt=U(bt,2);Gh(Dt,t,`input-hidden`,{get value(){return T()}},e=>{var t=_C();G(e=>{mg(t,`name`,v()),pg(t,e)},[()=>(J(T()),q(()=>T()?JSON.stringify(T()):null))]),Z(e,t)});var Ot=U(Dt,2),kt=e=>{var n=fh();Gh(Qp(n),t,`required`,{get value(){return T()}},e=>{Z(e,vC())}),Z(e,n)};return Q(Ot,e=>{J(de()),J(T()),q(()=>de()&&(!T()||T().length===0))&&e(kt)}),lm(()=>Y(`pointerup`,ut,Dg(Be))),Tg(ut,e=>y(e),()=>y()),qh(ut,e=>it?.(e)),G(()=>{lt=eg(ut,1,`svelte-select ${we()??``}`,`svelte-1ul7oo4`,lt,{multi:x(),disabled:C(),focused:w(),"list-open":ge(),"show-chevron":be(),error:le()}),ng(ut,ce())}),Y(`keydown`,I,Ie),Y(`blur`,I,Re),Y(`focus`,I,Le),bg(I,E),Z(e,ut),Cg(t,`getFilteredItems`,me),Cg(t,`handleClear`,Ve),nf(ct)}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var xC=X(`<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>`);function SC(e,t){var n,r,i;tf(t,!1);var a=B(void 0,!0),o=B(void 0,!0),s=B(void 0,!0),c=B(void 0,!0),l=B(void 0,!0),u=B(void 0,!0),d=Ig(`jsoneditor:TransformWizard`),f=$(t,`json`,9),p=$(t,`queryOptions`,29,()=>({})),m=$(t,`onChange`,9),h=[`==`,`!=`,`<`,`<=`,`>`,`>=`].map(e=>({value:e,label:e})),g=[{value:`asc`,label:`ascending`},{value:`desc`,label:`descending`}],_=B((n=p())!=null&&(n=n.filter)!=null&&n.path?Ax(p().filter.path):void 0,!0),v=B(h.find(e=>e.value===p().filter?.relation)??h[0],!0),y=B(((r=p())==null||(r=r.filter)==null?void 0:r.value)||``,!0),b=B((i=p())!=null&&(i=i.sort)!=null&&i.path?Ax(p().sort.path):void 0,!0),x=B(g.find(e=>e.value===p().sort?.direction)??g[0],!0);W(()=>J(f()),()=>{V(a,Array.isArray(f()))}),W(()=>(K(a),J(f())),()=>{V(o,K(a)?r_(f()):[])}),W(()=>(K(a),J(f())),()=>{V(s,K(a)?r_(f(),!0):[])}),W(()=>(K(o),Ax),()=>{V(c,K(o).map(Ax))}),W(()=>(K(s),Ax),()=>{V(l,K(s)?K(s).map(Ax):[])}),W(()=>(J(p()),K(l),cc),()=>{var e;V(u,(e=p())!=null&&(e=e.projection)!=null&&e.paths&&K(l)?p().projection.paths.map(e=>K(l).find(t=>cc(t.value,e))).filter(e=>!!e):void 0)}),W(()=>K(_),()=>{var e=K(_)?.value,t;cc((t=p())==null||(t=t.filter)==null?void 0:t.path,e)||(d(`changeFilterPath`,e),p(bt(p(),[`filter`,`path`],e,!0)),m()(p()))}),W(()=>K(v),()=>{var e=K(v)?.value,t;cc((t=p())==null||(t=t.filter)==null?void 0:t.relation,e)||(d(`changeFilterRelation`,e),p(bt(p(),[`filter`,`relation`],e,!0)),m()(p()))}),W(()=>K(y),()=>{var e=K(y),t;cc((t=p())==null||(t=t.filter)==null?void 0:t.value,e)||(d(`changeFilterValue`,e),p(bt(p(),[`filter`,`value`],e,!0)),m()(p()))}),W(()=>K(b),()=>{var e=K(b)?.value,t;cc((t=p())==null||(t=t.sort)==null?void 0:t.path,e)||(d(`changeSortPath`,e),p(bt(p(),[`sort`,`path`],e,!0)),m()(p()))}),W(()=>K(x),()=>{var e=K(x)?.value,t;cc((t=p())==null||(t=t.sort)==null?void 0:t.direction,e)||(d(`changeSortDirection`,e),p(bt(p(),[`sort`,`direction`],e,!0)),m()(p()))}),W(()=>K(u),()=>{(function(e){var t;cc((t=p())==null||(t=t.projection)==null?void 0:t.paths,e)||(d(`changeProjectionPaths`,e),p(bt(p(),[`projection`,`paths`],e,!0)),m()(p()))})(K(u)?K(u).map(e=>e.value):void 0)}),um(),Og(!0);var S=xC(),C=H(H(S)),w=H(H(U(H(C))));bC(w,{class:`jse-filter-path`,showChevron:!0,get items(){return K(c)},get value(){return K(_)},set value(e){V(_,e)},$$legacy:!0});var T=U(w,2);bC(T,{class:`jse-filter-relation`,showChevron:!0,clearable:!1,get items(){return h},get value(){return K(v)},set value(e){V(v,e)},$$legacy:!0});var E=U(T,2),ee=U(C),te=H(H(U(H(ee))));bC(te,{class:`jse-sort-path`,showChevron:!0,get items(){return K(c)},get value(){return K(b)},set value(e){V(b,e)},$$legacy:!0}),bC(U(te,2),{class:`jse-sort-direction`,showChevron:!0,clearable:!1,get items(){return g},get value(){return K(x)},set value(e){V(x,e)},$$legacy:!0}),bC(H(H(U(H(U(ee))))),{class:`jse-projection-paths`,multiple:!0,showChevron:!0,get items(){return K(l)},get value(){return K(u)},set value(e){V(u,e)},$$legacy:!0}),bg(E,()=>K(y),e=>V(y,e)),Z(e,S),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var CC=X(`<button type="button"><!> </button>`),wC=X(`<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>`);function TC(e,t){tf(t,!1);var n=$(t,`queryLanguages`,8),r=$(t,`queryLanguageId`,12),i=$(t,`onChangeQueryLanguage`,8);Og();var a=wC();zh(H(a),5,n,Lh,(e,t)=>{var n,a=CC(),o=H(a),s=e=>{Ov(e,{get data(){return hl}})},c=e=>{Ov(e,{get data(){return _l}})};Q(o,e=>{K(t),J(r()),q(()=>K(t).id===r())?e(s):e(c,-1)});var l=U(o);G(()=>{var e;n=eg(a,1,`jse-query-language svelte-jrd4q2`,null,n,{selected:K(t).id===r()}),mg(a,`title`,(K(t),q(()=>`Select ${K(t).name} as query language`))),_h(l,` ${(K(t),e=q(()=>K(t).name))!==null&&e!==void 0?e:``}`)}),Y(`click`,a,()=>{e=K(t).id,r(e),i()(e);return;var e}),Z(e,a)}),Z(e,a),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var EC=X(`<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>`),DC=X(`<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>`);function OC(e,t){tf(t,!1);var n=$(t,`title`,9,`Modal`),r=$(t,`fullScreenButton`,9,!1),i=$(t,`fullscreen`,13,!1),a=$(t,`onClose`,9,void 0);Og(!0);var o=DC(),s=H(o),c=H(s),l=U(s,2);Gh(l,t,`actions`,{},null);var u=U(l,2),d=e=>{var t=EC(),n=H(t),r=z(()=>i()?Ql:Ll);Ov(n,{get data(){return K(r)}}),Y(`click`,t,()=>i(!i())),Z(e,t)};Q(u,e=>{r()&&e(d)});var f=U(u,2);Ov(H(f),{get data(){return Ul}}),G(()=>_h(c,n())),Y(`click`,f,()=>a()?.()),Z(e,o),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var kC=X(`<button slot="actions" type="button" title="Select a query language"><!></button>`),AC=Ig(`jsoneditor:AutoScrollHandler`);function jC(e){var t,n;function r(e){return e<20?200:e<50?400:1200}function i(){if(e){var n=.05*(t||0);e.scrollTop+=n}}function a(e){n&&e===t||(o(),AC(`startAutoScroll`,e),t=e,n=setInterval(i,50))}function o(){n&&(AC(`stopAutoScroll`),clearInterval(n),n=void 0,t=void 0)}return AC(`createAutoScrollHandler`,e),{onDrag:function(t){if(e){var n=t.clientY,{top:i,bottom:s}=e.getBoundingClientRect();n<i?a(-r(i-n)):n>s?a(r(n-s)):o()}},onDragEnd:function(){o()}}}var MC=(e,t,n,r)=>(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t,NC=()=>{var e,t,n,r,i,a,o,s,c,l,u,d,f;function p(t){return t.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function m(t){e.scrollTo?e.scrollTo(e.scrollLeft,t):e.scrollTop=t}function h(e){l||=e,m(a(u=e-l,n,s,c)),f=!0,u<c?requestAnimationFrame(h):function(){m(n+s),t&&o&&(t.setAttribute(`tabindex`,`-1`),t.focus()),typeof d==`function`&&d(),l=0,f=!1}()}return function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,i=m.offset||0,d=m.callback,a=m.easing||MC,o=m.a11y||!1,typeof m.container){case`object`:e=m.container;break;case`string`:e=document.querySelector(m.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof u){case`number`:t=void 0,o=!1,r=n+u;break;case`object`:r=p(t=u);break;case`string`:t=document.querySelector(u),r=p(t)}switch(s=r-n+i,typeof m.duration){case`number`:c=m.duration;break;case`function`:c=m.duration(s)}f?l=0:requestAnimationFrame(h)}};function PC(e,t){var n=Date.now(),r=e();return t(Date.now()-n),r}var FC=Ig(`validation`),IC={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function LC(e,t,n,r){return Ly(e,t,n,r,IC)}function RC(e,t,n,r){if(FC(`validateJSON`),!t)return[];if(n!==r){var i=n.stringify(e);return t(i===void 0?void 0:r.parse(i))}return t(e)}function zC(e,t,n,r){if(FC(`validateText`),e.length>104857600)return{validationErrors:[{path:[],message:`Validation turned off: the document is too large`,severity:N_.info}]};if(e.length!==0)try{var i=PC(()=>n.parse(e),e=>FC(`validate: parsed json in ${e} ms`));if(!t)return;var a=n===r?i:PC(()=>r.parse(e),e=>FC(`validate: parsed json with the validationParser in ${e} ms`)),o=PC(()=>t(a),e=>FC(`validate: validated json in ${e} ms`));return sc(o)?void 0:{validationErrors:o}}catch(t){var s=PC(()=>function(e,t){if(e.length>Bv)return!1;try{return t.parse(Fn(e)),!0}catch{return!1}}(e,n),e=>FC(`validate: checked whether repairable in ${e} ms`));return{parseError:h_(e,t.message||t.toString()),isRepairable:s}}}var BC=Ig(`jsoneditor:FocusTracker`);function VC(e){var t,{onMount:n,onDestroy:r,getWindow:i,hasFocus:a,onFocus:o,onBlur:s}=e,c=!1;function l(){var e=a();e&&(clearTimeout(t),c||=(BC(`focus`),o(),e))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(BC(`blur`),c=!1,s())}))}n(()=>{BC(`mount FocusTracker`);var e=i();e&&(e.addEventListener(`focusin`,l,!0),e.addEventListener(`focusout`,u,!0))}),r(()=>{BC(`destroy FocusTracker`);var e=i();e&&(e.removeEventListener(`focusin`,l,!0),e.removeEventListener(`focusout`,u,!0))})}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var HC=X(`<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>`),UC=X(`<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>`);function WC(e,t){tf(t,!1);var n=$(t,`type`,9,`success`),r=$(t,`icon`,9,void 0),i=$(t,`message`,9,void 0),a=$(t,`actions`,25,()=>[]),o=$(t,`onClick`,9,void 0),s=$(t,`onClose`,9,void 0);s()&&Ah(s()),Og(!0);var c,l=UC(),u=H(l),d=H(H(u)),f=e=>{Ov(e,{get data(){return r()}})};Q(d,e=>{r()&&e(f)});var p=U(d);zh(U(u,2),5,a,Lh,(e,t)=>{var n=HC(),r=H(n),i=e=>{Ov(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(r,e=>{K(t),q(()=>K(t).icon)&&e(i)});var a=U(r);G(()=>{var e;mg(n,`title`,(K(t),q(()=>K(t).title))),n.disabled=(K(t),q(()=>K(t).disabled)),_h(a,` ${(K(t),e=q(()=>K(t).text))!==null&&e!==void 0?e:``}`)}),Y(`click`,n,()=>{K(t).onClick&&K(t).onClick()}),Y(`mousedown`,n,()=>{K(t).onMouseDown&&K(t).onMouseDown()}),Z(e,n)}),G(()=>{eg(l,1,`jse-message jse-${n()??``}`,`svelte-cbvd26`),c=eg(u,1,`jse-text svelte-cbvd26`,null,c,{"jse-clickable":!!o()}),_h(p,` ${i()??``}`)}),Y(`click`,u,function(){o()&&o()()}),Z(e,l),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var GC=X(`<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>`),KC=X(`<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>`),qC=X(`<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>`),JC=X(`<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>`),YC=X(`<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>`),XC=X(`<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>`);function ZC(e,t){tf(t,!1);var n=B(void 0,!0),r=$(t,`validationErrors`,9),i=$(t,`selectError`,9),a=B(!0,!0);function o(){V(a,!1)}function s(){V(a,!0)}W(()=>J(r()),()=>{V(n,r().length)}),um(),Og(!0);var c=fh(),l=Qp(c),u=e=>{var t=XC(),c=H(t),l=e=>{var t=JC(),a=H(H(t));zh(a,1,()=>(J(a_),J(r()),J(Lv),q(()=>a_(r(),Lv))),Lh,(e,t,n)=>{var a=KC(),s=H(a);Ov(H(s),{get data(){return Jl}});var c=U(s),l=H(c),u=U(c),d=H(u),f=H(U(u)),p=e=>{var t=GC();Ov(H(t),{get data(){return Kl}}),Y(`click`,t,Eg(o)),Z(e,t)};Q(f,e=>{J(r()),q(()=>n===0&&r().length>1)&&e(p)}),G(e=>{var n;eg(a,1,`jse-validation-${(K(t),n=q(()=>K(t).severity))!==null&&n!==void 0?n:``}`,`svelte-1342rh4`),_h(l,e),_h(d,(K(t),q(()=>K(t).message)))},[()=>(J(Ox),K(t),q(()=>Ox(K(t).path)))]),Y(`click`,a,()=>{setTimeout(()=>i()(K(t)))}),Z(e,a)});var s=U(a),c=e=>{var t=qC(),r=H(U(H(t),2));G(()=>_h(r,`(and ${K(n)-Lv} more errors)`)),Z(e,t)};Q(s,e=>{K(n)>Lv&&e(c)}),Z(e,t)},u=e=>{var t=YC(),i=H(H(t)),a=H(i);Ov(H(a),{get data(){return Jl}});var o=H(U(a));Ov(H(U(o)),{get data(){return Fl}}),G(e=>{eg(i,1,`jse-validation-${e??``}`,`svelte-1342rh4`),_h(o,`${K(n)??``} validation errors `)},[()=>(J(r()),q(()=>{return e=r(),[N_.error,N_.warning,N_.info].find(t=>e.some(e=>e.severity===t));var e}))]),Y(`click`,i,s),Z(e,t)};Q(c,e=>{K(a)||K(n)===1?e(l):e(u,-1)}),Z(e,t)},d=Op(()=>(J(sc),J(r()),q(()=>!sc(r()))));Q(l,e=>{K(d)&&e(u)}),Z(e,c),nf()}function QC(e,t){if(e)return e.addEventListener(`keydown`,n),{destroy(){e.removeEventListener(`keydown`,n)}};function n(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),t())}}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var $C=X(`<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>`);function ew(e,t){tf(t,!1);var n=$(t,`className`,8,void 0),r=$(t,`fullscreen`,8,!1),i=$(t,`onClose`,8),a=B();function o(){i()()}kh(()=>K(a).showModal()),Ah(()=>K(a).close()),Og();var s,c=$C();Gh(H(H(c)),t,`default`,{},null),Tg(c,e=>V(a,e),()=>K(a)),lm(()=>Y(`close`,c,o)),lm(()=>{return Y(`pointerdown`,c,(e=o,function(){var t=[...arguments];t[0].target===this&&e?.apply(this,t)}));var e}),lm(()=>Y(`cancel`,c,Dg(function(e){jg.call(this,t,e)}))),qh(c,(e,t)=>QC?.(e,t),()=>o),G(e=>s=eg(c,1,e,`svelte-2aoco4`,s,{"jse-fullscreen":r()}),[()=>Xh((J(zb),J(n()),q(()=>zb(`jse-modal`,n()))))]),Z(e,c),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var tw=X(`<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>`,1);function nw(e,t){tf(t,!1);var n=$(t,`onClose`,9),r=sv()?`⌘`:`Ctrl`;Og(!0),ew(e,{get onClose(){return n()},className:`jse-copy-paste`,children:(e,t)=>{var i=tw(),a=Qp(i);OC(a,{title:`Copying and pasting`,get onClose(){return n()}});var o=U(H(U(a,2)),2),s=H(o),c=H(H(s)),l=U(s,2),u=H(H(l)),d=H(H(U(l,2))),f=H(U(o,2));G(()=>{_h(c,`${r}+C`),_h(u,`${r}+X`),_h(d,`${r}+V`)}),Y(`click`,f,function(){for(var e,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];(e=n())==null||e.apply(this,r)}),Z(e,i)},$$slots:{default:!0}}),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var rw=X(`<div class="jse-separator svelte-3erbu0"></div>`),iw=X(`<div class="jse-space svelte-3erbu0"></div>`),aw=X(`<button type="button"><!> <!></button>`),ow=X(`<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>`);function sw(e,t){tf(t,!1);var n=$(t,`items`,25,()=>[]);Og(!0);var r=ow(),i=H(r);Gh(i,t,`left`,{},null);var a=U(i,2);zh(a,1,n,Lh,(e,t)=>{var n=fh(),r=Qp(n),i=e=>{Z(e,rw())},a=Op(()=>(J(ry),K(t),q(()=>ry(K(t))))),o=e=>{Z(e,iw())},s=Op(()=>(J(ny),K(t),q(()=>ny(K(t))))),c=e=>{var n=aw(),r=H(n),i=e=>{Ov(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(r,e=>{K(t),q(()=>K(t).icon)&&e(i)});var a=U(r,2),o=e=>{var n=dh();G(()=>_h(n,(K(t),q(()=>K(t).text)))),Z(e,n)};Q(a,e=>{K(t),q(()=>K(t).text)&&e(o)}),G(()=>{var e;eg(n,1,`jse-button ${(K(t),e=q(()=>K(t).className))!==null&&e!==void 0?e:``}`,`svelte-3erbu0`),mg(n,`title`,(K(t),q(()=>K(t).title))),n.disabled=(K(t),q(()=>K(t).disabled||!1))}),Y(`click`,n,function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=K(t).onClick)==null||e.apply(this,r)}),Z(e,n)},l=Op(()=>(J(ay),K(t),q(()=>ay(K(t))))),u=e=>{var n=dh();G(e=>_h(n,e),[()=>(K(t),q(()=>function(e){return console.error(`Unknown type of menu item`,e),`???`}(K(t))))]),Z(e,n)};Q(r,e=>{K(a)?e(i):K(s)?e(o,1):K(l)?e(c,2):e(u,-1)}),Z(e,n)}),Gh(U(a,2),t,`right`,{},null),Z(e,r),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var cw=X(`<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>`),lw=X(`<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>`);function uw(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=B(void 0,!0),s=B(void 0,!0),c=$(t,`text`,13,``),l=$(t,`readOnly`,9,!1),u=$(t,`onParse`,9),d=$(t,`onRepair`,9),f=$(t,`onChange`,9,void 0),p=$(t,`onApply`,9),m=$(t,`onCancel`,9),h=Ig(`jsoneditor:JSONRepair`),g=B(void 0,!0);function _(){if(K(g)&&K(n)){var e=K(n).position===void 0?0:K(n).position;K(g).setSelectionRange(e,e),K(g).focus()}}function v(){p()(c())}function y(){try{c(d()(c())),f()&&f()(c())}catch{}}var b=B(void 0,!0);W(()=>J(c()),()=>{V(n,function(e){try{u()(e);return}catch(t){return h_(e,t.message)}}(c()))}),W(()=>J(c()),()=>{V(r,function(e){try{return d()(e),!0}catch{return!1}}(c()))}),W(()=>K(n),()=>{h(`error`,K(n))}),W(()=>J(m()),()=>{V(b,[{type:`space`},{type:`button`,icon:Ul,title:`Cancel repair`,className:`jse-cancel`,onClick:m()}])}),W(()=>au,()=>{V(i,{icon:au,text:`Show me`,title:`Scroll to the error location`,onClick:_})}),W(()=>Rl,()=>{V(a,{icon:Rl,text:`Auto repair`,title:`Automatically repair JSON`,onClick:y})}),W(()=>(K(r),K(i),K(a)),()=>{V(o,K(r)?[K(i),K(a)]:[K(i)])}),W(()=>J(l()),()=>{V(s,[{icon:Bl,text:`Apply`,title:`Apply fixed JSON`,disabled:l(),onClick:v}])}),um(),Og(!0);var x=lw(),S=H(x);sw(S,{get items(){return K(b)},$$slots:{left:(e,t)=>{Z(e,cw())}}});var C=U(S,2),w=e=>{var t=z(()=>(K(n),q(()=>`Cannot parse JSON: ${K(n).message}`)));WC(e,{type:`error`,get icon(){return Jl},get message(){return K(t)},get actions(){return K(o)}})},T=e=>{WC(e,{type:`success`,message:`JSON is valid now and can be parsed.`,get actions(){return K(s)}})};Q(C,e=>{K(n)?e(w):e(T,-1)});var E=U(C,2);Tg(E,e=>V(g,e),()=>K(g)),G(()=>{E.readOnly=l(),pg(E,c())}),Y(`input`,E,function(e){h(`handleChange`);var t=e.target.value;c()!==t&&(c(t),f()&&f()(c()))}),Z(e,x),nf()}function dw(e,t){tf(t,!1);var n=$(t,`text`,13),r=$(t,`onParse`,9),i=$(t,`onRepair`,9),a=$(t,`onApply`,9),o=$(t,`onClose`,9);function s(e){a()(e),o()()}function c(){o()()}Og(!0),ew(e,{get onClose(){return o()},className:`jse-repair-modal`,children:(e,t)=>{uw(e,{get onParse(){return r()},get onRepair(){return i()},onApply:s,onCancel:c,get text(){return n()},set text(e){n(e)},$$legacy:!0})},$$slots:{default:!0}}),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var fw=X(`<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>`),pw=X(`<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>`);function mw(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=B(void 0,!0),s=$(t,`visibleSections`,9),c=$(t,`sectionIndex`,9),l=$(t,`total`,9),u=$(t,`path`,9),d=$(t,`selection`,9),f=$(t,`onExpandSection`,9),p=$(t,`context`,9);W(()=>(J(s()),J(c())),()=>{V(n,s()[c()])}),W(()=>K(n),()=>{V(r,K(n).end)}),W(()=>(J(s()),J(c()),J(l())),()=>{V(i,s()[c()+1]?s()[c()+1].start:l())}),W(()=>(J(p()),J(d()),J(u()),K(r)),()=>{V(a,Fb(p().getJson(),d(),u().concat(String(K(r)))))}),W(()=>(K(r),K(i)),()=>{V(o,function(e,t){var n={start:e,end:Math.min(ey(e),t)},r=Math.max(ty((e+t)/2),e),i={start:r,end:Math.min(ey(r),t)},a=ty(t),o=a===t?a-Iv:a,s={start:Math.max(o,e),end:t},c=[n],l=i.start>=n.end&&i.end<=s.start;return l&&c.push(i),s.start>=(l?i.end:n.end)&&c.push(s),c}(K(r),K(i)))}),um(),Og(!0);var m,h,g=pw(),_=H(H(g)),v=H(_);zh(U(_,2),1,()=>K(o),Lh,(e,t)=>{var n=fw(),r=H(n);G(()=>{var e,n;return _h(r,`show ${(K(t),e=q(()=>K(t).start))!==null&&e!==void 0?e:``}-${(K(t),n=q(()=>K(t).end))!==null&&n!==void 0?n:``}`)}),Y(`click`,n,()=>f()(u(),K(t))),Z(e,n)}),G(()=>{m=eg(g,1,`jse-collapsed-items svelte-1v6dhm4`,null,m,{"jse-selected":K(a)}),h=ng(g,``,h,{"--level":(J(u()),q(()=>u().length+2))}),_h(v,`Items ${K(r)??``}-${K(i)??``}`)}),Y(`mousemove`,g,function(e){e.stopPropagation()}),Z(e,g),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var hw=X(`<button type="button"><!></button>`);function gw(e,t){tf(t,!1);var n=$(t,`root`,9,!1),r=$(t,`insert`,9,!1),i=$(t,`selected`,9),a=$(t,`onContextMenu`,9);Og(!0);var o,s=hw();Ov(H(s),{get data(){return nu}}),G(()=>{o=eg(s,1,`jse-context-menu-pointer svelte-10ijtzr`,null,o,{"jse-root":n(),"jse-insert":r(),"jse-selected":i()}),mg(s,`title`,Uv)}),Y(`click`,s,function(e){for(var t=e.target;t&&t.nodeName!==`BUTTON`;)t=t.parentNode;t&&a()({anchor:t,left:0,top:0,width:Xv,height:Yv,offsetTop:2,offsetLeft:0,showTip:!0})}),Z(e,s),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var _w=X(`<div role="none" data-type="selectable-key"><!></div>`),vw=X(`<!> <!>`,1),yw=X(`<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>`);function bw(e,t){tf(t,!0);var n=Op(()=>rb(t.selection)&&kb(t.selection)),r=Op(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:K(n),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),i=fh();zh(Qp(i),17,()=>K(r),Lh,(e,t)=>{var n=fh(),r=Qp(n),i=e=>{var n=Op(()=>K(t).action),r=yw();qh(r,(e,t)=>K(n)?.(e,t),()=>K(t).props),Z(e,r)},a=Op(()=>py(K(t))),o=e=>{var n=Op(()=>K(t).component),r=fh();Kh(Qp(r),()=>K(n),(e,n)=>{n(e,Fg(()=>K(t).props))}),Z(e,r)};Q(r,e=>{K(a)?e(i):e(o,-1)}),Z(e,n)}),Z(e,i),nf()}var xw={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function Sw(e){var{json:t,selection:n,deltaY:r,items:i}=e;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var a=r<0?function(e){for(var{json:t,items:n,selection:r,deltaY:i}=e,a=ub(t,r),o=n.findIndex(e=>cc(e.path,a)),s=()=>n[c-1]?.height,c=o,l=0;s()!==void 0&&Math.abs(i)>l+s()/2;)l+=s(),--c;var u=n[c].path,d=c-o;return c!==o&&n[c]!==void 0?{beforePath:u,offset:d}:void 0}({json:t,selection:n,deltaY:r,items:i}):function(e){for(var{json:t,items:n,selection:r,deltaY:i}=e,a=db(t,r),o=n.findIndex(e=>cc(e.path,a)),s=0,c=o,l=()=>n[c+1]?.height;l()!==void 0&&Math.abs(i)>s+l()/2;)s+=l(),c+=1;var u=I(t,rc(a)),d=n[Array.isArray(u)?c:c+1]?.path,f=c-o;return d?{beforePath:d,offset:f}:{append:!0,offset:f}}({json:t,selection:n,deltaY:r,items:i});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var o=function(e,t,n){if(!t)return[];var r=`beforePath`in n?n.beforePath:void 0,i=`append`in n?n.append:void 0,a=rc(Lb(t)),o=I(e,a);if(!(i||r&&yb(r,a)&&r.length>a.length))return[];var s=ub(e,t),c=db(e,t),l=Gs(s),u=Gs(c),d=r?r[a.length]:void 0;if(!ot(o)){if(at(o)){var f=Vg(l),p=Vg(u),m=d===void 0?o.length:Vg(d);return Dc(p-f+1,m<f?e=>({op:`move`,from:Dt(a.concat(String(f+e))),path:Dt(a.concat(String(m+e)))}):()=>({op:`move`,from:Dt(a.concat(String(f))),path:Dt(a.concat(String(m)))}))}throw Error(`Cannot create move operations: parent must be an Object or Array`)}var h=Object.keys(o),g=h.indexOf(l),_=h.indexOf(u),v=i?h.length:d===void 0?-1:h.indexOf(d);return g!==-1&&_!==-1&&v!==-1?v>g?[...h.slice(g,_+1),...h.slice(v,h.length)].map(e=>Zb(a,e)):[...h.slice(v,g),...h.slice(_+1,h.length)].map(e=>Zb(a,e)):[]}(t,n,a),s=I(t,rc(ub(t,n)));return Array.isArray(s)?{operations:o,updatedSelection:function(e){var{items:t,json:n,selection:r,offset:i}=e,a=ub(n,r),o=db(n,r),s=t.findIndex(e=>cc(e.path,a)),c=t.findIndex(e=>cc(e.path,o));return Db(t[s+i]?.path,t[c+i]?.path)}({items:i,json:t,selection:n,offset:a.offset}),offset:a.offset}:{operations:o,updatedSelection:void 0,offset:a.offset}}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var Cw=X(`<button type="button"><!></button>`);function ww(e,t){tf(t,!1);var n=B(),r=ef(`absolute-popup`),i=$(t,`validationError`,8),a=$(t,`onExpand`,8);W(()=>J(i()),()=>{V(n,fy(i())&&i().isChildError?`Contains invalid data`:i().message)}),um(),Og();var o=Cw();Ov(H(o),{get data(){return Jl}}),lm(()=>Y(`click`,o,function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=a())==null||e.apply(this,n)})),qh(o,(e,t)=>wx?.(e,t),()=>L({text:K(n)},r)),G(()=>{var e;return eg(o,1,`jse-validation-${(J(i()),e=q(()=>i().severity))!==null&&e!==void 0?e:``}`,`svelte-q6a061`)}),Z(e,o),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Tw=Ag(()=>xw),Ew=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),Dw=X(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;`,1),Ow=X(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>`,1),kw=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Aw=X(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),jw=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Mw=X(`<div data-type="insert-selection-area-inside"><!></div>`),Nw=X(`<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>`),Pw=X(`<!> <!>`,1),Fw=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Iw=X(`<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>`,1),Lw=X(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>`,1),Rw=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),zw=X(`<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>`),Bw=X(`<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>`,1),Vw=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Hw=X(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),Uw=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Ww=X(`<div data-type="insert-selection-area-inside"><!></div>`),Gw=X(`<div slot="identifier"><!></div>`),Kw=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),qw=X(`<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>`,1),Jw=X(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>`,1),Yw=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),Xw=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Zw=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Qw=X(`<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>`),$w=X(`<div data-type="insert-selection-area-after"><!></div>`),eT=X(`<div role="treeitem" tabindex="-1"><!> <!></div>`);function tT(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`pointer`,9),a=$(t,`value`,9),o=$(t,`state`,9),s=$(t,`validationErrors`,9),c=$(t,`searchResults`,9),l=$(t,`selection`,9),u=$(t,`context`,9),d=$(t,`onDragSelectionStart`,9),f=Ig(`jsoneditor:JSONNode`),p=B(void 0,!0),m=void 0,h=B(void 0,!0),g=B(void 0,!0),_=B(void 0,!0),v=B(void 0,!0),y=B(void 0,!0),b=B(void 0,!0),x=B(void 0,!0);function S(e){e.stopPropagation();var t=lv(e);u().onExpand(K(g),!K(_),t)}function C(){u().onExpand(K(g),!0)}function w(e,t){var n=Kb(K(g),Object.keys(a()),e,t);return u().onPatch(n),Gs(Et(n[0].path))}function T(e){u().onDrag(e)}function E(e){Tw().selecting&&(Tw(Tw().selecting=!1),e.stopPropagation()),u().onDragEnd(),document.removeEventListener(`mousemove`,T,!0),document.removeEventListener(`mouseup`,E)}function ee(){var e;return((e=u().findElement([]))==null||(e=e.getBoundingClientRect())==null?void 0:e.top)||0}function te(e,t){var n=ee()-e.initialContentTop;return t.clientY-e.initialClientY-n}function ne(e){if(!u().readOnly&&l()){var t=rc(Lb(l()));if(cc(K(g),t)){var n=function(e,t){var n=[];function r(e){var t=K(g).concat(e),r=u().findElement(t);r!==void 0&&n.push({path:t,height:r.clientHeight})}if(Array.isArray(a())){var i=u().getJson();if(i===void 0)return;var o=ub(i,e),s=db(i,e),c=parseInt(Gs(o),10),l=parseInt(Gs(s),10),d=t.find(e=>c>=e.start&&l<=e.end);if(!d)return;var{start:f,end:p}=d;i_(f,Math.min(a().length,p),e=>r(String(e)))}else Object.keys(a()).forEach(r);return n}(l(),K(y)||zv);if(f(`dragSelectionStart`,{selection:l(),items:n}),n){var r=u().getJson();if(r!==void 0){var i=ub(r,l()),o=n.findIndex(e=>cc(e.path,i)),{offset:s}=Sw({json:r,selection:u().getSelection(),deltaY:0,items:n});V(h,{initialTarget:e.target,initialClientY:e.clientY,initialContentTop:ee(),selectionStartIndex:o,selectionItemsCount:cb(r,l()).length,items:n,offset:s,didMoveItems:!1}),Tw(Tw().dragging=!0),document.addEventListener(`mousemove`,re,!0),document.addEventListener(`mouseup`,ie)}}else f(`Cannot drag the current selection (probably spread over multiple sections)`)}else d()(e)}}function re(e){if(K(h)){var t=u().getJson();if(t===void 0)return;var n=te(K(h),e),{offset:r}=Sw({json:t,selection:u().getSelection(),deltaY:n,items:K(h).items});r!==K(h).offset&&(f(`drag selection`,r,n),V(h,L(L({},K(h)),{},{offset:r,didMoveItems:!0})))}}function ie(e){if(K(h)){var t=u().getJson();if(t===void 0)return;var n=te(K(h),e),{operations:r,updatedSelection:i}=Sw({json:t,selection:u().getSelection(),deltaY:n,items:K(h).items});if(r)u().onPatch(r,(e,t)=>({state:t,selection:i??l()}));else if(e.target===K(h).initialTarget&&!K(h).didMoveItems){var a=rv(e.target),o=av(e.target);o&&u().onSelect(Nb(a,o))}V(h,void 0),Tw(Tw().dragging=!1),document.removeEventListener(`mousemove`,re,!0),document.removeEventListener(`mouseup`,ie)}}function ae(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),u().onSelect(Tb(K(g))))}function oe(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),u().onSelect(Eb(K(g))))}function se(e){u().onSelect(Tb(K(g))),Jf(),u().onContextMenu(e)}function D(e){u().onSelect(Eb(K(g))),Jf(),u().onContextMenu(e)}W(()=>J(i()),()=>{V(g,Et(i()))}),W(()=>J(i()),()=>{V(n,encodeURIComponent(i()))}),W(()=>J(o()),()=>{V(_,!!_y(o())&&o().expanded)}),W(()=>(J(a()),J(o())),()=>{V(v,Uy(a(),o(),[]))}),W(()=>J(o()),()=>{V(y,hy(o())?o().visibleSections:void 0)}),W(()=>J(s()),()=>{V(b,s()?.validationError)}),W(()=>(J(u()),J(l()),K(g)),()=>{V(x,Fb(u().getJson(),l(),K(g)))}),W(()=>K(g),()=>{V(r,K(g).length===0)}),um(),Og(!0);var O,ce,le=eT(),ue=H(le),de=e=>{var n=Lw(),d=Qp(n),f=H(d),m=H(f),v=H(m),w=e=>{Ov(e,{get data(){return nu}})},T=e=>{Ov(e,{get data(){return Cl}})};Q(v,e=>{K(_)?e(w):e(T,-1)});var E=U(m,2);Gh(E,t,`identifier`,{},null);var ee=U(E,2),te=e=>{Z(e,Ew())};Q(ee,e=>{K(r)||e(te)});var re=U(ee,2),ie=H(H(re)),D=e=>{var t=Dw();yx(U(Qp(t),2),{children:(e,t)=>{var n=dh();G(()=>{var e,t;return _h(n,`${(J(a()),e=q(()=>a().length))!==null&&e!==void 0?e:``}
                ${(J(a()),t=q(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),Z(e,n)},$$slots:{default:!0}}),Z(e,t)},O=e=>{var t=Ow();yx(U(Qp(t),2),{onclick:C,children:(e,t)=>{var n=dh();G(()=>{var e,t;return _h(n,`${(J(a()),e=q(()=>a().length))!==null&&e!==void 0?e:``}
                ${(J(a()),t=q(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),Z(e,n)},$$slots:{default:!0}}),Z(e,t)};Q(ie,e=>{K(_)?e(D):e(O,-1)});var ce=U(re,2),le=e=>{var t=kw();gw(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(u()),q(()=>u().onContextMenu)}}),Z(e,t)},ue=Op(()=>(J(u()),K(x),J(l()),J(rb),J(ib),J(kb),J(cc),J(Lb),K(g),q(()=>!u().readOnly&&K(x)&&l()&&(rb(l())||ib(l()))&&!kb(l())&&cc(Lb(l()),K(g)))));Q(ce,e=>{K(ue)&&e(le)});var de=U(f,2),k=e=>{ww(e,{get validationError(){return K(b)},onExpand:C})};Q(de,e=>{K(b),K(_),q(()=>K(b)&&(!K(_)||!K(b).isChildError))&&e(k)});var fe=U(de,2),pe=e=>{var t=Aw();Y(`click`,t,ae),Z(e,t)},me=e=>{var t=jw();Y(`click`,t,oe),Z(e,t)};Q(fe,e=>{K(_)?e(pe):e(me,-1)});var A=U(d,2),he=e=>{var t=Iw(),n=Qp(t),d=H(n),f=e=>{var t,n,r=Mw(),i=H(r),a=z(()=>(K(x),J(tb),J(l()),q(()=>K(x)&&tb(l()))));gw(i,{insert:!0,get selected(){return K(a)},onContextMenu:se}),G(e=>{t=eg(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),mg(r,`title`,Hv),n=ng(r,``,n,{"--level":(K(g),q(()=>K(g).length+1))})},[()=>({"jse-hovered":K(p)===Wv,"jse-selected":K(x)&&tb(l())})]),Z(e,r)},m=Op(()=>(J(u()),K(p),J(Wv),K(x),J(tb),J(l()),q(()=>!u().readOnly&&(K(p)===Wv||K(x)&&tb(l())))));Q(d,e=>{K(m)&&e(f)}),zh(U(d,2),1,()=>K(y)||zv,Lh,(e,t,n)=>{var r=Pw(),d=Qp(r);zh(d,1,()=>(J(a()),K(t),K(h),q(()=>function(e,t,n){var r=t.start,i=Sc(r,Math.min(t.end,e.length));return n&&n.offset!==0?c_(i,n.selectionStartIndex,n.selectionItemsCount,n.offset).map((e,t)=>({index:e,gutterIndex:t})):i.map(e=>({index:e,gutterIndex:e}))}(a(),K(t),K(h)))),e=>e.index,(e,t)=>{var n=z(()=>(J(hy),J(s()),K(t),q(()=>hy(s())?s().items[K(t).index]:void 0))),r=z(()=>(J(Pb),J(u()),J(l()),K(g),K(t),q(()=>Pb(u().getJson(),l(),K(g).concat(String(K(t).index)))))),d=fh(),f=Qp(d),p=z(()=>(J(kt),J(i()),K(t),q(()=>kt(i(),K(t).index)))),m=z(()=>(J(hy),J(o()),K(t),q(()=>hy(o())?o().items[K(t).index]:void 0))),h=z(()=>(J(hy),J(c()),K(t),q(()=>hy(c())?c().items[K(t).index]:void 0)));tT(f,{get value(){return J(a()),K(t),q(()=>a()[K(t).index])},get pointer(){return K(p)},get state(){return K(m)},get validationErrors(){return K(n)},get searchResults(){return K(h)},get selection(){return K(r)},get context(){return u()},onDragSelectionStart:ne,$$slots:{identifier:(e,n)=>{var r=Nw(),i=H(H(r));G(()=>_h(i,(K(t),q(()=>K(t).gutterIndex)))),Z(e,r)}}}),Z(e,d)});var f=U(d,2),p=e=>{var t=z(()=>K(y)||zv);mw(e,{get visibleSections(){return K(t)},sectionIndex:n,get total(){return J(a()),q(()=>a().length)},get path(){return K(g)},get onExpandSection(){return J(u()),q(()=>u().onExpandSection)},get selection(){return l()},get context(){return u()}})};Q(f,e=>{K(t),J(a()),q(()=>K(t).end<a().length)&&e(p)}),Z(e,r)});var _=U(H(U(n,2)),2),v=e=>{var t=Fw();Y(`click`,t,oe),Z(e,t)};Q(_,e=>{K(r)||e(v)}),Z(e,t)};Q(A,e=>{K(_)&&e(he)}),Y(`click`,m,S),Z(e,n)},k=Op(()=>(J(a()),q(()=>Array.isArray(a())))),fe=e=>{var n=Jw(),d=Qp(n),f=H(d),m=H(f),v=H(m),y=e=>{Ov(e,{get data(){return nu}})},T=e=>{Ov(e,{get data(){return Cl}})};Q(v,e=>{K(_)?e(y):e(T,-1)});var E=U(m,2);Gh(E,t,`identifier`,{},null);var ee=U(E,2),te=e=>{Z(e,Rw())};Q(ee,e=>{K(r)||e(te)});var re=U(ee,2),ie=H(H(re)),D=e=>{Z(e,zw())},O=e=>{var t=Bw();yx(U(Qp(t),2),{onclick:C,children:(e,t)=>{var n=dh();G((e,t)=>_h(n,`${e??``}
                ${t??``}`),[()=>(J(a()),q(()=>Object.keys(a()).length)),()=>(J(a()),q(()=>Object.keys(a()).length===1?`prop`:`props`))]),Z(e,n)},$$slots:{default:!0}}),Z(e,t)};Q(ie,e=>{K(_)?e(D):e(O,-1)});var ce=U(re,2),le=e=>{var t=Vw();gw(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(u()),q(()=>u().onContextMenu)}}),Z(e,t)},ue=Op(()=>(J(u()),K(x),J(l()),J(rb),J(ib),J(kb),J(cc),J(Lb),K(g),q(()=>!u().readOnly&&K(x)&&l()&&(rb(l())||ib(l()))&&!kb(l())&&cc(Lb(l()),K(g)))));Q(ce,e=>{K(ue)&&e(le)});var de=U(f,2),k=e=>{ww(e,{get validationError(){return K(b)},onExpand:C})};Q(de,e=>{K(b),K(_),q(()=>K(b)&&(!K(_)||!K(b).isChildError))&&e(k)});var fe=U(de,2),pe=e=>{var t=Hw();Y(`click`,t,ae),Z(e,t)},me=e=>{var t=Uw();Y(`click`,t,oe),Z(e,t)};Q(fe,e=>{K(_)?e(pe):K(r)||e(me,1)});var A=U(d,2),he=e=>{var t=qw(),n=Qp(t),d=H(n),f=e=>{var t,n,r=Ww(),i=H(r),a=z(()=>(K(x),J(tb),J(l()),q(()=>K(x)&&tb(l()))));gw(i,{insert:!0,get selected(){return K(a)},onContextMenu:se}),G(e=>{t=eg(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),mg(r,`title`,Hv),n=ng(r,``,n,{"--level":(K(g),q(()=>K(g).length+1))})},[()=>({"jse-hovered":K(p)===Wv,"jse-selected":K(x)&&tb(l())})]),Z(e,r)},m=Op(()=>(J(u()),K(p),J(Wv),K(x),J(tb),J(l()),q(()=>!u().readOnly&&(K(p)===Wv||K(x)&&tb(l())))));Q(d,e=>{K(m)&&e(f)}),zh(U(d,2),1,()=>(J(a()),K(h),q(()=>function(e,t){var n=Object.keys(e);return t&&t.offset!==0?c_(n,t.selectionStartIndex,t.selectionItemsCount,t.offset):n}(a(),K(h)))),Lh,(e,t)=>{var n=z(()=>(J(kt),J(i()),K(t),q(()=>kt(i(),K(t))))),r=z(()=>(J(my),J(c()),K(t),q(()=>my(c())?c().properties[K(t)]:void 0))),d=z(()=>(J(my),J(s()),K(t),q(()=>my(s())?s().properties[K(t)]:void 0))),f=z(()=>(K(g),K(t),q(()=>K(g).concat(K(t))))),p=z(()=>(J(Pb),J(u()),J(l()),J(K(f)),q(()=>Pb(u().getJson(),l(),K(f))))),m=fh(),h=Qp(m),_=z(()=>(J(my),J(o()),K(t),q(()=>my(o())?o().properties[K(t)]:void 0)));tT(h,{get value(){return J(a()),K(t),q(()=>a()[K(t)])},get pointer(){return K(n)},get state(){return K(_)},get validationErrors(){return K(d)},get searchResults(){return K(r)},get selection(){return K(p)},get context(){return u()},onDragSelectionStart:ne,$$slots:{identifier:(e,i)=>{var a,o=Gw(),s=H(o),c=z(()=>(J(ux),J(K(r)),q(()=>ux(K(r)))));(function(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`pointer`,9),a=$(t,`key`,9),o=$(t,`selection`,9),s=$(t,`searchResultItems`,9),c=$(t,`onUpdateKey`,9),l=$(t,`context`,9),u=B(void 0,!0);function d(e){K(r)||l().readOnly||(e.preventDefault(),l().onSelect(Sb(K(u))))}function f(e,t){var n=c()(a(),l().normalization.unescapeValue(e)),r=rc(K(u)).concat(n);l().onSelect(t===I_.nextInside?Cb(r):xb(r)),t!==I_.self&&l().focus()}function p(){l().onSelect(xb(K(u))),l().focus()}W(()=>J(i()),()=>{V(u,Et(i()))}),W(()=>(J(o()),K(u)),()=>{V(n,nb(o())&&cc(o().path,K(u)))}),W(()=>(K(n),J(o())),()=>{V(r,K(n)&&kb(o()))}),um(),Og(!0);var m=vw(),h=Qp(m),g=e=>{var t=z(()=>(J(l()),J(a()),q(()=>l().normalization.escapeValue(a())))),n=z(()=>(J(kb),J(o()),q(()=>kb(o())?o().initialValue:void 0)));Hb(e,{get value(){return K(t)},get initialValue(){return K(n)},label:`Edit key`,shortText:!0,onChange:f,onCancel:p,get onFind(){return J(l()),q(()=>l().onFind)}})},_=e=>{var t,n=_w(),r=H(n),i=e=>{var t=z(()=>(J(l()),J(a()),q(()=>l().normalization.escapeValue(a()))));gx(e,{get text(){return K(t)},get searchResultItems(){return s()}})},o=e=>{var t=dh();G(e=>_h(t,e),[()=>(J(Y_),J(l()),J(a()),q(()=>Y_(l().normalization.escapeValue(a()))))]),Z(e,t)};Q(r,e=>{s()?e(i):e(o,-1)}),G(()=>t=eg(n,1,`jse-key svelte-1n4cez4`,null,t,{"jse-empty":a()===``})),Y(`dblclick`,n,d),Z(e,n)};Q(h,e=>{J(l()),K(r),q(()=>!l().readOnly&&K(r))?e(g):e(_,-1)});var v=U(h,2),y=e=>{gw(e,{selected:!0,get onContextMenu(){return J(l()),q(()=>l().onContextMenu)}})};Q(v,e=>{J(l()),K(n),K(r),q(()=>!l().readOnly&&K(n)&&!K(r))&&e(y)}),Z(e,m),nf()})(s,{get pointer(){return K(n)},get key(){return K(t)},get selection(){return K(p)},get searchResultItems(){return K(c)},get context(){return u()},onUpdateKey:w}),G(e=>a=eg(o,1,`jse-key-outer svelte-1qi6rc1`,null,a,e),[()=>({"jse-selected-key":nb(K(p))&&cc(K(p).path,K(f))})]),Z(e,o)}}}),Z(e,m)});var _=U(H(U(n,2)),2),v=e=>{var t=Kw();Y(`click`,t,oe),Z(e,t)};Q(_,e=>{K(r)||e(v)}),Z(e,t)};Q(A,e=>{K(_)&&e(he)}),Y(`click`,m,S),Z(e,n)},pe=Op(()=>(J(Wg),J(a()),q(()=>Wg(a())))),me=e=>{var n=Qw(),i=H(n),o=H(i);Gh(o,t,`identifier`,{},null);var s=U(o,2),d=e=>{Z(e,Yw())};Q(s,e=>{K(r)||e(d)});var f=U(s,2),p=H(f),m=z(()=>K(x)?l():void 0),h=z(()=>(J(dx),J(c()),q(()=>dx(c()))));bw(p,{get path(){return K(g)},get value(){return a()},get enforceString(){return K(v)},get selection(){return K(m)},get searchResultItems(){return K(h)},get context(){return u()}});var _=U(f,2),y=e=>{var t=Xw();gw(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(u()),q(()=>u().onContextMenu)}}),Z(e,t)},S=Op(()=>(J(u()),K(x),J(l()),J(rb),J(ib),J(kb),J(cc),J(Lb),K(g),q(()=>!u().readOnly&&K(x)&&l()&&(rb(l())||ib(l()))&&!kb(l())&&cc(Lb(l()),K(g)))));Q(_,e=>{K(S)&&e(y)});var w=U(i,2),T=e=>{ww(e,{get validationError(){return K(b)},onExpand:C})};Q(w,e=>{K(b)&&e(T)});var E=U(w,2),ee=e=>{var t=Zw();Y(`click`,t,oe),Z(e,t)};Q(E,e=>{K(r)||e(ee)}),Z(e,n)};Q(ue,e=>{K(k)?e(de):K(pe)?e(fe,1):e(me,-1)});var A=U(ue,2),he=e=>{var t,n=$w(),r=H(n),i=z(()=>(K(x),J(eb),J(l()),q(()=>K(x)&&eb(l()))));gw(r,{insert:!0,get selected(){return K(i)},onContextMenu:D}),G(e=>{t=eg(n,1,`jse-insert-area jse-after svelte-1qi6rc1`,null,t,e),mg(n,`title`,Hv)},[()=>({"jse-hovered":K(p)===Gv,"jse-selected":K(x)&&eb(l())})]),Z(e,n)},j=Op(()=>(J(u()),K(p),J(Gv),K(x),J(eb),J(l()),q(()=>!u().readOnly&&(K(p)===Gv||K(x)&&eb(l())))));Q(A,e=>{K(j)&&e(he)}),G((e,t)=>{O=eg(le,1,e,`svelte-1qi6rc1`,O,t),mg(le,`data-path`,K(n)),mg(le,`aria-selected`,K(x)),ce=ng(le,``,ce,{"--level":(K(g),q(()=>K(g).length))})},[()=>Xh((J(zb),K(_),J(u()),K(g),J(a()),q(()=>zb(`jse-json-node`,{"jse-expanded":K(_)},u().onClassName(K(g),a()))))),()=>({"jse-root":K(r),"jse-selected":K(x)&&ib(l()),"jse-selected-value":K(x)&&rb(l()),"jse-readonly":u().readOnly,"jse-hovered":K(p)===Kv})]),Y(`mousedown`,le,function(e){if((e.buttons===1||e.buttons===2)&&!((t=e.target).nodeName===`DIV`&&t.contentEditable===`true`||e.buttons===1&&X_(e.target,`BUTTON`))){var t;e.stopPropagation(),e.preventDefault(),u().focus(),document.addEventListener(`mousemove`,T,!0),document.addEventListener(`mouseup`,E);var n=rv(e.target),i=u().getJson(),o=u().getDocumentState();if(!l()||n===j_.after||n===j_.inside||l().type!==n&&l().type!==j_.multi||!Fb(i,l(),K(g)))if(Tw(Tw().selecting=!0),Tw(Tw().selectionAnchor=K(g)),Tw(Tw().selectionAnchorType=n),Tw(Tw().selectionFocus=K(g)),e.shiftKey){var s=u().getSelection();s&&u().onSelect(Db(Rb(s),K(g)))}else if(n===j_.multi)if(K(r)&&e.target.hasAttribute(`data-path`)){var c=Gs(Ky(a(),o));u().onSelect(Mb(c))}else u().onSelect(Db(K(g),K(g)));else i!==void 0&&u().onSelect(Nb(n,K(g)));else e.button===0&&d()(e)}}),Y(`mousemove`,le,function(e){if(Tw().selecting){e.preventDefault(),e.stopPropagation(),Tw().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var t=rv(e.target);cc(K(g),Tw().selectionFocus)&&t===Tw().selectionAnchorType||(Tw(Tw().selectionFocus=K(g)),Tw(Tw().selectionAnchorType=t),u().onSelect(Db(Tw().selectionAnchor||Tw().selectionFocus,Tw().selectionFocus)))}}),Y(`mouseover`,le,function(e){Tw().selecting||Tw().dragging||(e.stopPropagation(),Z_(e.target,`data-type`,`selectable-value`)?V(p,Kv):Z_(e.target,`data-type`,`selectable-key`)?V(p,void 0):Z_(e.target,`data-type`,`insert-selection-area-inside`)?V(p,Wv):Z_(e.target,`data-type`,`insert-selection-area-after`)&&V(p,Gv),clearTimeout(m))}),Y(`mouseout`,le,function(e){e.stopPropagation(),m=window.setTimeout(()=>V(p,void 0))}),Z(e,le),nf()}var nT={prefix:`fas`,iconName:`jsoneditor-expand`,icon:[512,512,[],``,`M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z`]},rT={prefix:`fas`,iconName:`jsoneditor-collapse`,icon:[512,512,[],``,`m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z`]},iT={prefix:`fas`,iconName:`jsoneditor-format`,icon:[512,512,[],``,`M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z`]},aT={prefix:`fas`,iconName:`jsoneditor-compact`,icon:[512,512,[],``,`M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z`]};dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var oT=X(`<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>`,1),sT=X(`<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>`);function cT(e,t){return(0,ou.default)(typeof e==`string`?e.toLowerCase():e,typeof t==`string`?t.toLowerCase():t)}function lT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=I(e,t);if(at(i)){if(n===void 0)throw Error(`Cannot sort: no property selected by which to sort the array`);return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=function(e,t){var n={boolean:0,number:1,string:2,undefined:4},r=3;return function(i,a){var o=I(i,e),s=I(a,e);if(typeof o!=typeof s){var c=n[typeof o]??r,l=n[typeof s]??r;return c>l?t:c<l?-t:0}return typeof o==`number`||typeof o==`boolean`?o>s?t:o<s?-t:0:Gg(o)?0:t*cT(o,s)}}(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:1),r=I(e,t);return[{op:`replace`,path:Dt(t),value:r.slice(0).sort(n)}]}(e,t,n,r)}if(Wg(i))return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=I(e,t),i=Object.keys(r).slice();i.sort((e,t)=>n*cT(e,t));var a={};return i.forEach(e=>a[e]=r[e]),[{op:`replace`,path:Dt(t),value:a}]}(e,t,r);throw Error(`Cannot sort: no array or object`)}ah([`click`]),dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var uT=X(`<button type="button"> </button>`),dT=X(`<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>`),fT=X(`<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>`);function pT(e,t){tf(t,!1);var n=$(t,`items`,9),r=$(t,`selectedItem`,9),i=$(t,`onSelect`,9);Og(!0);var a=fT(),o=H(a);zh(o,1,()=>(J(a_),J(n()),q(()=>a_(n(),100))),e=>e,(e,t)=>{var n,a=uT(),o=H(a);G((e,i)=>{n=eg(a,1,`jse-navigation-bar-dropdown-item svelte-1k47orx`,null,n,{"jse-selected":K(t)===r()}),mg(a,`title`,e),_h(o,i)},[()=>(K(t),q(()=>K(t).toString())),()=>(J(vv),K(t),q(()=>vv(K(t).toString(),30)))]),Y(`click`,a,Eg(()=>i()(K(t)))),Z(e,a)});var s=U(o,2),c=e=>{var t=dT();mg(t,`title`,`Limited to 100 items`),Z(e,t)};Q(s,e=>{J(n()),q(()=>n().length>100)&&e(c)}),Z(e,a),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var mT=X(`<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>`),hT=X(`<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>`);function gT(e,t){tf(t,!1);var n,r=B(void 0,!0),i=B(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:o}=ef(`absolute-popup`),s=$(t,`path`,9),c=$(t,`index`,9),l=$(t,`onSelect`,9),u=$(t,`getItems`,9),d=B(void 0,!0),f=B(!1,!0);function p(e){o(n),l()(K(r).concat(e))}W(()=>(J(s()),J(c())),()=>{V(r,s().slice(0,c()))}),W(()=>(J(s()),J(c())),()=>{V(i,s()[c()])}),um(),Og(!0);var m,h=hT(),g=H(h);Ov(H(g),{get data(){return Fl}});var _=U(g,2),v=e=>{var t=mT(),n=H(t);G(()=>_h(n,K(i))),Y(`click`,t,()=>p(K(i))),Z(e,t)};Q(_,e=>{K(i)!==void 0&&e(v)}),Tg(h,e=>V(d,e),()=>K(d)),G(()=>m=eg(g,1,`jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb`,null,m,{"jse-open":K(f)})),Y(`click`,g,function(){K(d)&&(V(f,!0),n=a(pT,{items:u()(K(r)),selectedItem:K(i),onSelect:p},{anchor:K(d),closeOnOuterClick:!0,onClose:()=>{V(f,!1)}}))}),Z(e,h),nf()}function _T(e){var t,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(n=document).queryCommandSupported)!=null&&t.call(n,`copy`)){var r=document.createElement(`textarea`);r.value=e,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{document.execCommand(`copy`)}catch(e){console.error(e)}finally{document.body.removeChild(r)}return Promise.resolve()}return console.error(`Copy failed.`),Promise.resolve()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var vT=X(`<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>`),yT=X(`<div class="jse-copied-text svelte-uyexy4">Copied!</div>`),bT=X(`<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>`);function xT(e,t){tf(t,!1);var n=B(),r=ef(`absolute-popup`),i=$(t,`path`,8),a=$(t,`pathParser`,8),o=$(t,`onChange`,8),s=$(t,`onClose`,8),c=$(t,`onError`,8),l=$(t,`pathExists`,8),u=B(),d=B(),f=B(!1),p=void 0,m=B(!1);function h(){K(u).focus()}function g(e){try{var t=a().parse(e);return function(e){if(!l()(e))throw Error(`Path does not exist in current document`)}(t),{path:t,error:void 0}}catch(e){return{path:void 0,error:e}}}kh(()=>{h()}),Ah(()=>{clearTimeout(p)}),W(()=>(J(a()),J(i())),()=>{V(d,a().stringify(i()))}),W(()=>(K(f),K(d)),()=>{V(n,K(f)?g(K(d)).error:void 0)}),um(),Og();var _,v=bT(),y=H(v);Tg(y,e=>V(u,e),()=>K(u));var b=U(y,2),x=e=>{var t=vT();Ov(H(t),{get data(){return Jl}}),qh(t,(e,t)=>wx?.(e,t),()=>L({text:String(K(n)||``)},r)),Z(e,t)};Q(b,e=>{K(n)&&e(x)});var S=U(b,2),C=e=>{Z(e,yT())};Q(S,e=>{K(m)&&e(C)});var w,T=U(S,2);Ov(H(T),{get data(){return eu}}),G(()=>{_=eg(v,1,`jse-navigation-bar-path-editor svelte-uyexy4`,null,_,{error:K(n)}),pg(y,K(d)),w=eg(T,1,`jse-navigation-bar-copy svelte-uyexy4`,null,w,{copied:K(m)})}),Y(`keydown`,y,Eg(function(e){var t=cv(e);if(t===`Escape`&&(e.preventDefault(),s()()),t===`Enter`){e.preventDefault(),V(f,!0);var n=g(K(d));n.path===void 0?c()(n.error):o()(n.path)}})),Y(`input`,y,function(e){V(d,e.currentTarget.value)}),Y(`click`,T,function(){_T(K(d)),V(m,!0),p=window.setTimeout(()=>V(m,!1),1e3),h()}),Z(e,v),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var ST=X(`<!> <!>`,1),CT=X(`<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>`);function wT(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=Ig(`jsoneditor:NavigationBar`),a=$(t,`json`,9),o=$(t,`selection`,9),s=$(t,`onSelect`,9),c=$(t,`onError`,9),l=$(t,`pathParser`,9),u=B(void 0,!0),d=B(!1,!0);function f(e){i(`get items for path`,e);var t=I(a(),e);if(Array.isArray(t))return Sc(0,t.length).map(String);if(Wg(t)){var n=Object.keys(t).slice(0);return n.sort(cT),n}return[]}function p(e){return Tt(a(),e)}function m(e){i(`select path`,JSON.stringify(e)),s()(Db(e,e))}function h(){V(d,!1)}function g(e){h(),m(e)}W(()=>(J(o()),Lb),()=>{V(n,o()?Lb(o()):[])}),W(()=>(J(a()),K(n)),()=>{V(r,Gg(I(a(),K(n))))}),W(()=>K(n),()=>{K(n),setTimeout(()=>{if(K(u)&&K(u).scrollTo){var e=K(u).scrollWidth-K(u).clientWidth;e>0&&(i(`scrollTo `,e),K(u).scrollTo({left:e,behavior:`smooth`}))}})}),um(),Og(!0);var _=CT(),v=H(_),y=e=>{var t=ST(),i=Qp(t);zh(i,1,()=>K(n),Lh,(e,t,r)=>{gT(e,{getItems:f,get path(){return K(n)},index:r,onSelect:m})});var a=U(i,2),o=e=>{gT(e,{getItems:f,get path(){return K(n)},get index(){return K(n),q(()=>K(n).length)},onSelect:m})};Q(a,e=>{K(r)&&e(o)}),Z(e,t)},b=e=>{xT(e,{get path(){return K(n)},onClose:h,onChange:g,get onError(){return c()},pathExists:p,get pathParser(){return l()}})};Q(v,e=>{K(d)?e(b,-1):e(y)});var x,S=U(v,2),C=H(S),w=H(C),T=U(C,2),E=z(()=>K(d)?Hl:Al);Ov(T,{get data(){return K(E)}}),Tg(_,e=>V(u,e),()=>K(u)),G(e=>{x=eg(S,1,`jse-navigation-bar-edit svelte-hjhal6`,null,x,{flex:!K(d),editing:K(d)}),mg(S,`title`,K(d)?`Cancel editing the selected path`:`Edit the selected path`),_h(w,e)},[()=>(J(Gg),J(a()),K(d),q(()=>Gg(a())||K(d)?`\xA0`:`Navigation bar`))]),Y(`click`,S,function(){V(d,!K(d))}),Z(e,_),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var TT=X(`<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>`),ET=X(`<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>`),DT=X(`<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>`);function OT(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=Ig(`jsoneditor:SearchBox`),o=$(t,`json`,9),s=$(t,`documentState`,9),c=$(t,`parser`,9),l=$(t,`showSearch`,9),u=$(t,`showReplace`,13),d=$(t,`readOnly`,9),f=$(t,`columns`,9),p=$(t,`onSearch`,9),m=$(t,`onFocus`,9),h=$(t,`onPatch`,9),g=$(t,`onClose`,9),_=B(``,!0),v=``,y=B(``,!0),b=B(!1,!0),x=B(void 0,!0),S=He(function(e){return k.apply(this,arguments)},300),C=He(function(e){return fe.apply(this,arguments)},300);function w(){u(!u()&&!d())}function T(e){e.stopPropagation();var t=cv(e);t===`Enter`&&(e.preventDefault(),K(_)===v?se():S.flush()),t===`Shift+Enter`&&(e.preventDefault(),O()),t===`Ctrl+Enter`&&(e.preventDefault(),u()?ne():se()),t===`Ctrl+H`&&(e.preventDefault(),w()),t===`Escape`&&(e.preventDefault(),A())}function E(e){cv(e)===`Enter`&&(e.preventDefault(),e.stopPropagation(),ne())}function ee(){return te.apply(this,arguments)}function te(){return(te=Xu(function*(){Jf(),yield S.flush()})).apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return(re=Xu(function*(){if(!d()){var e=K(x)?.activeItem;if(a(`handleReplace`,{replaceText:K(y),activeItem:e}),K(x)&&e&&o()!==void 0){V(x,L(L({},rx(K(x))),{},{activeIndex:K(r)}));var{operations:t,newSelection:n}=cx(o(),s(),K(y),e,c());h()(t,(e,t)=>({state:t,selection:n})),Jf(),yield C.flush(),yield le()}}})).apply(this,arguments)}function ie(){return ae.apply(this,arguments)}function ae(){return(ae=Xu(function*(){if(!d()){a(`handleReplaceAll`,{text:K(_),replaceText:K(y)});var{operations:e,newSelection:t}=function(e,t,n,r,i){for(var a=ix(n,e,{maxResults:1/0}),o=[],s=0;s<a.length;s++){var c=a[s-1],l=a[s];s!==0&&l.field===c.field&&cc(l.path,c.path)?Gs(o).items.push(l):o.push({path:l.path,field:l.field,items:[l]})}o.sort((e,t)=>e.field===t.field?t.path.length-e.path.length:e.field===P_.key?1:-1);var u,d=[];return o.forEach(n=>{var{field:a,path:o,items:s}=n;if(a===P_.key){var c=rc(o),l=I(e,c),f=Gs(o),p=Kb(c,Object.keys(l),f,sx(f,r,s));d=d.concat(p),u=hb(e,p)}else{if(a!==P_.value)throw Error(`Cannot replace: unknown type of search result field ${a}`);var m=I(e,o);if(m===void 0)throw Error(`Cannot replace: path not found ${Dt(o)}`);var h=typeof m==`string`?m:String(m),g=Uy(e,t,o),_=sx(h,r,s),v=[{op:`replace`,path:Dt(o),value:g?_:e_(_,i)}];d=d.concat(v),u=hb(e,v)}}),{operations:d,newSelection:u}}(o(),s(),K(_),K(y),c());h()(e,(e,n)=>({state:n,selection:t})),yield le()}})).apply(this,arguments)}function oe(e){e.select()}function se(){return D.apply(this,arguments)}function D(){return(D=Xu(function*(){V(x,K(x)?rx(K(x)):void 0),yield le()})).apply(this,arguments)}function O(){return ce.apply(this,arguments)}function ce(){return ce=Xu(function*(){V(x,K(x)?function(e){var t=e.activeIndex>0?e.activeIndex-1:e.items.length-1,n=e.items[t],r=e.items.map((e,n)=>L(L({},e),{},{active:n===t}));return L(L({},e),{},{items:r,activeItem:n,activeIndex:t})}(K(x)):void 0),yield le()}),ce.apply(this,arguments)}function le(){return ue.apply(this,arguments)}function ue(){return(ue=Xu(function*(){a(`handleFocus`,K(x));var e=K(x)?.activeItem;e&&o()!==void 0&&(yield m()(e.path,e.resultIndex))})).apply(this,arguments)}function de(){return de=Xu(function*(e){yield pe(e,K(_),o())}),de.apply(this,arguments)}function k(){return k=Xu(function*(e){yield pe(l(),e,o()),yield le()}),k.apply(this,arguments)}function fe(){return fe=Xu(function*(e){yield pe(l(),K(_),e)}),fe.apply(this,arguments)}function pe(e,t,n){return me.apply(this,arguments)}function me(){return me=Xu(function*(e,t,n){return e?(a(`applySearch`,{showSearch:e,text:t}),t===``?(a(`clearing search result`),K(x)!==void 0&&V(x,void 0),Promise.resolve()):(v=t,V(b,!0),new Promise(e=>{setTimeout(()=>{V(x,function(e,t){var n=t!=null&&t.activeItem?lx(t.activeItem):void 0,r=e.findIndex(e=>cc(n,lx(e))),i=r===-1?t?.activeIndex!==void 0&&t?.activeIndex<e.length?t?.activeIndex:e.length>0?0:-1:r,a=e.map((e,t)=>L(L({resultIndex:t},e),{},{active:t===i}));return{items:a,activeItem:a[i],activeIndex:i}}(ix(t,n,{maxResults:Fv,columns:f()}),K(x))),V(b,!1),e()})}))):(K(x)&&V(x,void 0),Promise.resolve())}),me.apply(this,arguments)}function A(){a(`handleClose`),S.cancel(),C.cancel(),pe(!1,K(_),o()),g()()}W(()=>K(x),()=>{var e;V(n,((e=K(x))==null||(e=e.items)==null?void 0:e.length)||0)}),W(()=>K(x),()=>{V(r,K(x)?.activeIndex||0)}),W(()=>(K(n),Fv),()=>{V(i,K(n)>=Fv?`999+`:String(K(n)))}),W(()=>(J(p()),K(x)),()=>{p()(K(x))}),W(()=>J(l()),()=>{(function(e){de.apply(this,arguments)})(l())}),W(()=>K(_),()=>{S(K(_))}),W(()=>J(o()),()=>{C(o())}),um(),Og(!0);var he=fh(),j=Qp(he),M=e=>{var t=DT(),a=H(t),o=H(a),s=e=>{var t=TT(),n=H(t),r=z(()=>u()?nu:Cl);Ov(n,{get data(){return K(r)}}),Y(`click`,t,w),Z(e,t)};Q(o,e=>{d()||e(s)});var c=H(U(o,2)),l=H(c),f=H(l),p=e=>{Ov(e,{get data(){return Ol},spin:!0})},m=e=>{Ov(e,{get data(){return wl}})};Q(f,e=>{K(b)?e(p):e(m,-1)});var h=U(l,2),g=H(h);lm(()=>bg(g,()=>K(_),e=>V(_,e))),qh(g,e=>oe?.(e)),lm(()=>Y(`paste`,g,ee));var v,x=U(h,2),S=H(x),C=U(x,2);Ov(H(C),{get data(){return Gl}});var te=U(C,2);Ov(H(te),{get data(){return Dl}});var re=U(te,2);Ov(H(re),{get data(){return Ul}});var ae=U(c,2),D=e=>{var t=ET(),n=H(t),r=U(n,2),i=U(r,2);bg(n,()=>K(y),e=>V(y,e)),Y(`keydown`,n,E),Y(`click`,r,ne),Y(`click`,i,ie),Z(e,t)};Q(ae,e=>{u()&&!d()&&e(D)}),G(()=>{v=eg(x,1,`jse-search-count svelte-1x1x8q0`,null,v,{"jse-visible":K(_)!==``}),_h(S,`${K(r)!==-1&&K(r)<K(n)?`${K(r)+1}/`:``}${K(i)??``}`)}),Y(`click`,C,se),Y(`click`,te,O),Y(`click`,re,A),Y(`keydown`,a,T),Z(e,t)};Q(j,e=>{l()&&e(M)}),Z(e,he),nf()}var kT=Symbol(`path`);function AT(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,r={};Array.isArray(e)&&function(e,t,n){if(e.length<t)e.forEach(n);else for(var r=t>1?(e.length-1)/(t-1):e.length,i=0;i<t;i++){var a=Math.floor(i*r);n(e[a],a,e)}}(e,n,e=>{Wg(e)?jT(e,r,t):r[kT]=!0});var i=[];return kT in r&&i.push([]),MT(r,[],i,t),i}function jT(e,t,n){for(var r in e){var i=e[r],a=t[r]||(t[r]={});Wg(i)&&n?jT(i,a,n):a[kT]===void 0&&(a[kT]=!0)}}function MT(e,t,n,r){for(var i in e){var a=t.concat(i),o=e[i];o&&!0===o[kT]&&n.push(a),ot(o)&&r&&MT(o,a,n,r)}}function NT(e,t,n,r,i,a){for(var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,s=at(n)?n.length:0,c=function(e,t){var n=Object.values(e);return sc(n)?t:n.reduce((e,t)=>e+t)/n.length}(r,i),l=e-o,u=t+2*o,d=e=>r[e]||i,f=0,p=a;p<l&&f<s;)p+=d(f),f++;f>0&&(p-=d(--f));for(var m=f,h=0;h<u&&m<s;)h+=d(m),m++;for(var g=0,_=m;_<s;_++)g+=d(_);return{startIndex:f,endIndex:m,startHeight:p,endHeight:g,averageItemHeight:c,visibleHeight:h,visibleItems:at(n)?n.slice(f,m):[]}}function PT(e,t,n,r){for(var{rowIndex:i}=FT(e,t),a=0,o=0;o<i;o++)a+=n[o]||r;return a}function FT(e,t){var[n,...r]=e,i=parseInt(n,10);return{rowIndex:isNaN(i)?-1:i,columnIndex:t.findIndex(e=>yb(r,e))}}function IT(e,t){var{rowIndex:n,columnIndex:r}=e;return[String(n),...t[r]]}function LT(e,t){var[n,r]=_c(e,e=>Hg(e.path[0]));return{root:r,rows:uc(nc(n,zT),e=>{var n={row:[],columns:{}};return e.forEach(e=>{var r=function(e,t){var n=FT(e.path,t);return n.columnIndex===-1?-1:n.columnIndex}(e,t);r===-1?n.row.push(e):(n.columns[r]===void 0&&(n.columns[r]=[]),n.columns[r].push(e))}),n})}}function RT(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:`Multiple validation issues: `+t.map(e=>Ox(e.path)+` `+e.message).join(`, `),severity:N_.warning}}function zT(e){return parseInt(e.path[0],10)}function BT(e,t,n){return t.some(t=>function(e,t,n){if(!e)return!1;if(t.op===`replace`){var{rowIndex:r,columnIndex:i}=FT(Et(t.path),n),a=n.findIndex(t=>cc(t,e.path));if(r!==-1&&i!==-1&&i!==a)return!1}return!0}(e,t,n))?void 0:e}var VT=Ig(`jsoneditor:actions`);function HT(e){return UT.apply(this,arguments)}function UT(){return UT=Xu(function*(e){var{json:t,selection:n,indentation:r,readOnly:i,parser:a,onPatch:o}=e;if(!i&&t!==void 0&&n&&Ab(n)){var s=Ob(t,n,r,a);if(s!==void 0){VT(`cut`,{selection:n,clipboard:s,indentation:r}),yield _T(s);var{operations:c,newSelection:l}=$b(t,n);o(c,(e,t)=>({state:t,selection:l}))}}}),UT.apply(this,arguments)}function WT(e){return GT.apply(this,arguments)}function GT(){return GT=Xu(function*(e){var{json:t,selection:n,indentation:r,parser:i}=e,a=Ob(t,n,r,i);a!==void 0&&(VT(`copy`,{clipboard:a,indentation:r}),yield _T(a))}),GT.apply(this,arguments)}function KT(e){var{clipboardText:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onChangeText:s,onPasteMultilineText:c,openRepairModal:l}=e;if(!i)try{u(t)}catch{l(t,e=>{VT(`repaired pasted text: `,e),u(e)})}function u(e){if(n!==void 0){var i=r||Cb([]),l=Yb(n,i,e,a),u=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Vv;if(e.length>r||!/\n/.test(e))return!1;var i=t.some(e=>e.op===`replace`&&Array.isArray(e.value)),a=t.filter(e=>e.op===`add`).length>1;if(!i&&!a)return!1;try{return f_(e,n.parse),!1}catch{return!0}}(t,l,a);VT(`paste`,{pastedText:e,operations:l,ensureSelection:i,pasteMultilineText:u}),o(l,(e,t)=>{var r=t;return l.filter(e=>(st(e)||lt(e))&&Gg(e.value)).forEach(t=>{var i=Bt(n,t.path);r=Jy(e,r,i)}),{state:r}}),u&&c(e)}else VT(`paste text`,{pastedText:e}),s(t,(e,t)=>{if(e)return{state:Jy(e,t,[])}})}}function qT(e){var{json:t,text:n,selection:r,keepSelection:i,readOnly:a,onChange:o,onPatch:s}=e;if(!a&&r){var c=t!==void 0&&(nb(r)||rb(r))?Db(r.path,r.path):r;if(sc(Lb(r)))VT(`remove root`,{selection:r}),o&&o({text:``,json:void 0},t===void 0?{text:n||``,json:t}:{text:void 0,json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:l,newSelection:u}=$b(t,c);VT(`remove`,{operations:l,selection:r,newSelection:u}),s(l,(e,t)=>({state:t,selection:i?r:u}))}}}function JT(e){var{insertType:t,selectInside:n,initialValue:r,json:i,selection:a,readOnly:o,parser:s,onPatch:c,onReplaceJson:l}=e;if(!o){var u=function(e,t,n){if(n===`object`)return{};if(n===`array`)return[];if(n===`structure`&&e!==void 0){var r=I(e,t?lb(t):[]);if(Array.isArray(r)&&!sc(r)){var i=Qs(r);return Gg(i)?Io(i,e=>Array.isArray(e)?[]:Wg(e)?void 0:``):``}}return``}(i,a,t);if(i!==void 0){var d=s.stringify(u),f=Yb(i,a,d,s);VT(`onInsert`,{insertType:t,operations:f,newValue:u,data:d});var p=Gs(f.filter(e=>e.op===`add`||e.op===`replace`));c(f,(e,t,i)=>{if(p){var a=Bt(e,p.path);if(Gg(u))return{state:jy(e,t,a,Qy),selection:n?Tb(a):i};if(u===``){var o=sc(a)?void 0:I(e,rc(a));return{state:jy(e,t,a,$y),selection:Wg(o)?Sb(a,r):wb(a,r)}}}}),VT(`after patch`)}else{VT(`onInsert`,{insertType:t,newValue:u});var m=[];l(u,(e,t)=>({state:Jy(e,t,m),selection:Gg(u)?Tb(m):wb(m)}))}}}function YT(e){return XT.apply(this,arguments)}function XT(){return XT=Xu(function*(e){var{char:t,selectInside:n,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c,onSelect:l}=e;a||(nb(i)?l(L(L({},i),{},{edit:!0,initialValue:t})):t===`{`?JT({insertType:`object`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):t===`[`?JT({insertType:`array`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):rb(i)&&r!==void 0?Gg(I(r,i.path))||l(L(L({},i),{},{edit:!0,initialValue:t})):(VT(`onInsertValueWithCharacter`,{char:t}),yield function(e){return ZT.apply(this,arguments)}({char:t,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c})))}),XT.apply(this,arguments)}function ZT(){return ZT=Xu(function*(e){var{char:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s}=e;i||JT({insertType:`value`,selectInside:!1,initialValue:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s})}),ZT.apply(this,arguments)}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var QT=X(`<div class="jse-json-preview svelte-25xmyd"> </div>`);function $T(e,t){tf(t,!1);var n=B(),r=B(),i=$(t,`text`,8),a=$(t,`json`,8),o=$(t,`indentation`,8),s=$(t,`parser`,8);W(()=>(J(a()),J(i())),()=>{V(n,a()===void 0?{text:i()||``}:{json:a()})}),W(()=>(K(n),J(o()),J(s()),Rv),()=>{V(r,vv(S_(K(n),o(),s()),Rv))}),um(),Og();var c=QT(),l=H(c);G(()=>_h(l,K(r))),Z(e,c),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var eE=X(`<button type="button"><!> <!></button>`);function tE(e,t){tf(t,!1);var n=$(t,`item`,8),r=$(t,`className`,8,void 0),i=$(t,`onRequestClose`,8);Og();var a=eE(),o=H(a),s=e=>{Ov(e,{get data(){return J(n()),q(()=>n().icon)}})};Q(o,e=>{J(n()),q(()=>n().icon)&&e(s)});var c=U(o,2),l=e=>{var t=dh();G(()=>_h(t,(J(n()),q(()=>n().text)))),Z(e,t)};Q(c,e=>{J(n()),q(()=>n().text)&&e(l)}),G(e=>{eg(a,1,e,`svelte-16jz6ui`),mg(a,`title`,(J(n()),q(()=>n().title))),a.disabled=(J(n()),q(()=>n().disabled||!1))},[()=>Xh((J(zb),J(r()),J(n()),q(()=>zb(`jse-context-menu-button`,r(),n().className))))]),Y(`click`,a,e=>{i()(),n().onClick(e)}),Z(e,a),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var nE=X(`<li class="svelte-bov1j6"><button type="button"><!> </button></li>`),rE=X(`<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>`);dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var iE=X(`<button type="button" slot="defaultItem"><!> </button>`);function aE(e,t){tf(t,!1);var n=B(),r=$(t,`item`,8),i=$(t,`className`,8,void 0),a=$(t,`onRequestClose`,8);W(()=>(J(r()),J(a())),()=>{V(n,r().items.map(e=>L(L({},e),{},{onClick:t=>{a()(),e.onClick(t)}})))}),um(),Og(),function(e,t){tf(t,!1);var n=B(void 0,!0),r=$(t,`items`,25,()=>[]),i=$(t,`title`,9,void 0),a=$(t,`width`,9,`120px`),o=B(!1,!0);function s(){V(o,!1)}function c(e){cv(e)===`Escape`&&(e.preventDefault(),V(o,!1))}kh(()=>{document.addEventListener(`click`,s),document.addEventListener(`keydown`,c)}),Ah(()=>{document.removeEventListener(`click`,s),document.removeEventListener(`keydown`,c)}),W(()=>J(r()),()=>{V(n,r().every(e=>!0===e.disabled))}),um(),Og(!0);var l=rE(),u=H(l);Gh(u,t,`defaultItem`,{},null);var d,f=U(u,2);Ov(H(f),{get data(){return nu}});var p,m=U(f,2);zh(H(m),5,r,Lh,(e,t)=>{var n=nE(),r=H(n),i=H(r),a=e=>{Ov(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(i,e=>{K(t),q(()=>K(t).icon)&&e(a)});var o=U(i);G(()=>{var e;mg(r,`title`,(K(t),q(()=>K(t).title))),r.disabled=(K(t),q(()=>K(t).disabled)),eg(r,1,Xh((K(t),q(()=>K(t).className))),`svelte-bov1j6`),_h(o,` ${(K(t),e=q(()=>K(t).text))!==null&&e!==void 0?e:``}`)}),Y(`click`,r,e=>K(t).onClick(e)),Z(e,n)}),G(()=>{mg(l,`title`,i()),d=eg(f,1,`jse-open-dropdown svelte-bov1j6`,null,d,{"jse-visible":K(o)}),f.disabled=K(n),p=eg(m,1,`jse-dropdown-items svelte-bov1j6`,null,p,{"jse-visible":K(o)}),ng(m,`width: ${a()??``};`)}),Y(`click`,f,function(){var e=K(o);setTimeout(()=>V(o,!e))}),Y(`click`,l,s),Z(e,l),nf()}(e,{get width(){return J(r()),q(()=>r().width)},get items(){return K(n)},$$slots:{defaultItem:(e,t)=>{var n=iE(),o=H(n),s=e=>{Ov(e,{get data(){return J(r()),q(()=>r().main.icon)}})};Q(o,e=>{J(r()),q(()=>r().main.icon)&&e(s)});var c=U(o);G(e=>{var t;eg(n,1,e,`svelte-1y5l9l1`),mg(n,`title`,(J(r()),q(()=>r().main.title))),n.disabled=(J(r()),q(()=>r().main.disabled||!1)),_h(c,` ${(J(r()),t=q(()=>r().main.text))!==null&&t!==void 0?t:``}`)},[()=>Xh((J(zb),J(i()),J(r()),q(()=>zb(`jse-context-menu-button`,i(),r().main.className))))]),Y(`click`,n,e=>{a()(),r().main.onClick(e)}),Z(e,n)}}}),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var oE=X(`<div class="jse-separator svelte-1shjn02"></div>`),sE=X(`<div class="jse-label svelte-1shjn02"> </div>`),cE=X(`<div class="jse-column svelte-1shjn02"></div>`),lE=X(`<div class="jse-separator svelte-1shjn02"></div>`),uE=X(`<div class="jse-row svelte-1shjn02"></div>`),dE=X(`<div class="jse-separator svelte-1shjn02"></div>`),fE=X(`<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>`),pE=X(`<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>`);function mE(e,t){tf(t,!1);var n=$(t,`items`,9),r=$(t,`onRequestClose`,9),i=$(t,`tip`,9),a=B(void 0,!0);kh(()=>{var e=Array.from(K(a).querySelectorAll(`button`)).find(e=>!e.disabled);e&&e.focus()});var o={ArrowUp:`Up`,ArrowDown:`Down`,ArrowLeft:`Left`,ArrowRight:`Right`};function s(e){return console.error(`Unknown type of context menu item`,e),`???`}Og(!0);var c=pE(),l=H(c);zh(l,1,n,Lh,(e,t)=>{var n=fh(),i=Qp(n),a=e=>{tE(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=Op(()=>(J(ay),K(t),q(()=>ay(K(t))))),c=e=>{aE(e,{get item(){return K(t)},get onRequestClose(){return r()}})},l=Op(()=>(J(oy),K(t),q(()=>oy(K(t))))),u=e=>{var n=uE();zh(n,5,()=>(K(t),q(()=>K(t).items)),Lh,(e,t)=>{var n=fh(),i=Qp(n),a=e=>{tE(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=Op(()=>(J(ay),K(t),q(()=>ay(K(t))))),c=e=>{aE(e,{get item(){return K(t)},get onRequestClose(){return r()}})},l=Op(()=>(J(oy),K(t),q(()=>oy(K(t))))),u=e=>{var n=cE();zh(n,5,()=>(K(t),q(()=>K(t).items)),Lh,(e,t)=>{var n=fh(),i=Qp(n),a=e=>{tE(e,{className:`left`,get item(){return K(t)},get onRequestClose(){return r()}})},o=Op(()=>(J(ay),K(t),q(()=>ay(K(t))))),c=e=>{aE(e,{className:`left`,get item(){return K(t)},get onRequestClose(){return r()}})},l=Op(()=>(J(oy),K(t),q(()=>oy(K(t))))),u=e=>{Z(e,oE())},d=Op(()=>(J(ry),K(t),q(()=>ry(K(t))))),f=e=>{var n=sE(),r=H(n);G(()=>_h(r,(K(t),q(()=>K(t).text)))),Z(e,n)},p=Op(()=>(J(iy),K(t),q(()=>iy(K(t))))),m=e=>{var n=dh();G(e=>_h(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(i,e=>{K(o)?e(a):K(l)?e(c,1):K(d)?e(u,2):K(p)?e(f,3):e(m,-1)}),Z(e,n)}),Z(e,n)},d=Op(()=>(J(cy),K(t),q(()=>cy(K(t))))),f=e=>{Z(e,lE())},p=Op(()=>(J(ry),K(t),q(()=>ry(K(t))))),m=e=>{var n=dh();G(e=>_h(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(i,e=>{K(o)?e(a):K(l)?e(c,1):K(d)?e(u,2):K(p)?e(f,3):e(m,-1)}),Z(e,n)}),Z(e,n)},d=Op(()=>(J(sy),K(t),q(()=>sy(K(t))))),f=e=>{Z(e,dE())},p=Op(()=>(J(ry),K(t),q(()=>ry(K(t))))),m=e=>{var n=dh();G(e=>_h(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(i,e=>{K(o)?e(a):K(l)?e(c,1):K(d)?e(u,2):K(p)?e(f,3):e(m,-1)}),Z(e,n)});var u=U(l,2),d=e=>{var t=fE(),n=H(H(t));Ov(H(n),{get data(){return gl}});var r=H(U(n,2));G(()=>_h(r,i())),Z(e,t)};Q(u,e=>{i()&&e(d)}),Tg(c,e=>V(a,e),()=>K(a)),Y(`keydown`,c,function(e){var t=o[cv(e)];if(t&&e.target){e.preventDefault();var n=ov({allElements:Array.from(K(a).querySelectorAll(`button:not([disabled])`)),currentElement:e.target,direction:t,hasPrio:e=>e.getAttribute(`data-type`)!==`jse-open-dropdown`});n&&n.focus()}}),Z(e,c),nf()}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`),X(`<option> </option>`),X(`<select></select>`);var hE,gE;function _E(e,t){return hE||=(gE=new WeakMap,new ResizeObserver(e=>{for(var t of e){var n=gE.get(t.target);n&&n(t.target)}})),gE.set(e,t),hE.observe(e),{destroy:()=>{gE.delete(e),hE.unobserve(e)}}}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var vE=X(`<!> <!>`,1),yE=X(`<div class="jse-search-box-background svelte-10mlrw4"></div>`),bE=X(`<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>`,1),xE=X(`<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>`,1),SE=X(`<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>`),CE=X(`<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>`,1);function wE(e,t){tf(t,!1);var n=B(void 0,!0),r=Ig(`jsoneditor:TreeMode`),i=typeof window>`u`;r(`isSSR:`,i);var a=kc(),o=kc(),{openAbsolutePopup:s,closeAbsolutePopup:c}=ef(`absolute-popup`),l=B(void 0,!0),u=B(void 0,!0),d=B(void 0,!0),f=!1,p=NC(),m=$(t,`readOnly`,9),h=$(t,`externalContent`,9),g=$(t,`externalSelection`,9),_=$(t,`history`,9),v=$(t,`truncateTextSize`,9),y=$(t,`mainMenuBar`,9),b=$(t,`navigationBar`,9),x=$(t,`escapeControlCharacters`,9),S=$(t,`escapeUnicodeCharacters`,9),C=$(t,`parser`,9),w=$(t,`parseMemoizeOne`,9),T=$(t,`validator`,9),E=$(t,`validationParser`,9),ee=$(t,`pathParser`,9),te=$(t,`indentation`,9),ne=$(t,`onError`,9),re=$(t,`onChange`,9),ie=$(t,`onChangeMode`,9),ae=$(t,`onSelect`,9),oe=$(t,`onUndo`,9),se=$(t,`onRedo`,9),D=$(t,`onRenderValue`,9),O=$(t,`onRenderMenu`,9),ce=$(t,`onRenderContextMenu`,9),le=$(t,`onClassName`,9),ue=$(t,`onFocus`,9),de=$(t,`onBlur`,9),k=$(t,`onSortModal`,9),fe=$(t,`onTransformModal`,9),pe=$(t,`onJSONEditorModal`,9),me=!1,A=B(!1,!0),he=B(void 0,!0);VC({onMount:kh,onDestroy:Ah,getWindow:()=>ev(K(d)),hasFocus:()=>me&&document.hasFocus()||tv(K(d)),onFocus:()=>{f=!0,ue()&&ue()()},onBlur:()=>{f=!1,de()&&de()()}});var j=B(void 0,!0),M=B(void 0,!0),ge=void 0,_e=!1,N=B(Sy({json:K(j)}),!0),P=B(ob(g())?g():void 0,!0);function ve(e){V(P,e)}kh(()=>{if(K(P)){var e=Lb(K(P));V(N,jy(K(j),K(N),e,$y)),setTimeout(()=>kt(e))}});var ye,be=B(void 0,!0),xe=B(void 0,!0),Se=B(void 0,!0),Ce=B(void 0,!0),we=B(!1,!0),Te=B(!1,!0);function Ee(e){V(Ce,(ye=e)?px(K(j),ye.items):void 0)}function De(e,t){return Oe.apply(this,arguments)}function Oe(){return(Oe=Xu(function*(e,t){V(N,jy(K(j),K(N),e,$y)),yield Ct(e,{element:Ot(t)})})).apply(this,arguments)}function ke(){V(we,!1),V(Te,!1),$t()}function Ae(e){r(`select validation error`,e),V(P,Cb(e.path)),Ct(e.path)}function je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zy;r(`expand`),V(N,jy(K(j),K(N),e,t))}function Me(e,t){V(N,My(K(j),K(N),e,t)),K(P)&&function(e,t){return yb(Lb(e),t)&&(Lb(e).length>t.length||tb(e))}(K(P),e)&&V(P,void 0)}var Ne=B(!1,!0),Pe=B([],!0),F=B(void 0,!0),Fe=uu(RC);function Ie(e,t,n,i){PC(()=>{var a;try{a=Fe(e,t,n,i)}catch(e){a=[{path:[],message:`Failed to validate: `+e.message,severity:N_.warning}]}cc(a,K(Pe))||(r(`validationErrors changed:`,a),V(Pe,a),V(F,function(e,t){var n;return t.forEach(t=>{n=LC(e,n,t.path,(e,n)=>L(L({},n),{},{validationError:t}))}),t.forEach(t=>{for(var r=t.path;r.length>0;)r=rc(r),n=LC(e,n,r,(e,t)=>t.validationError?t:L(L({},t),{},{validationError:{isChildError:!0,path:r,message:`Contains invalid data`,severity:N_.warning}}))}),n}(e,K(Pe))))},e=>r(`validationErrors updated in ${e} ms`))}function Le(){return r(`validate`),ge?{parseError:ge,isRepairable:!1}:(Ie(K(j),T(),C(),E()),sc(K(Pe))?void 0:{validationErrors:K(Pe)})}function Re(){return K(j)}function ze(){return K(N)}function Be(){return K(P)}function Ve(e){r(`applyExternalContent`,{updatedContent:e}),y_(e)?function(e){if(e!==void 0){var t=!cc(K(j),e);if(r(`update external json`,{isChanged:t,currentlyText:K(j)===void 0}),t){var n={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ne)};V(j,e),V(N,Dy(e,K(N))),He(K(j)),V(M,void 0),V(Ne,!1),ge=void 0,Ue(K(j)),We(n)}}}(e.json):v_(e)&&function(e){if(!(e===void 0||y_(h()))){var t=e!==K(M);if(r(`update external text`,{isChanged:t}),t){var n={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ne)};try{V(j,w()(e)),V(N,Dy(K(j),K(N))),He(K(j)),V(M,e),V(Ne,!1),ge=void 0}catch(t){try{V(j,w()(Fn(e))),V(N,Dy(K(j),K(N))),He(K(j)),V(M,e),V(Ne,!0),ge=void 0,Ue(K(j))}catch{V(j,void 0),V(N,void 0),V(M,h().text),V(Ne,!1),ge=K(M)!==void 0&&K(M)!==``?h_(K(M),t.message||String(t)):void 0}}Ue(K(j)),We(n)}}}(e.text)}function He(e){_e||(_e=!0,V(N,Jy(e,K(N),[])))}function Ue(e){K(P)&&(Tt(e,Rb(K(P)))&&Tt(e,Lb(K(P)))||(r(`clearing selection: path does not exist anymore`,K(P)),V(P,mb(e,K(N)))))}function We(e){if(e.json!==void 0||e.text!==void 0){var t=K(j)!==void 0&&e.json!==void 0;_().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:bb(e.selection),sortedColumn:void 0},redo:{patch:t?[{op:`replace`,path:``,value:K(j)}]:void 0,json:K(j),text:K(M),documentState:K(N),textIsRepaired:K(Ne),selection:bb(K(P)),sortedColumn:void 0}})}}function Ge(e,t){if(r(`patch`,e,t),K(j)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=K(j),i={json:void 0,text:K(M),documentState:K(N),selection:bb(K(P)),textIsRepaired:K(Ne),sortedColumn:void 0},a=ex(K(j),e),o=Py(K(j),K(N),e),s=hb(K(j),e)??K(P),c=typeof t==`function`?t(o.json,o.documentState,s):void 0;return V(j,c?.json===void 0?o.json:c.json),V(N,c?.state===void 0?o.documentState:c.state),V(P,c?.selection===void 0?s:c.selection),V(M,void 0),V(Ne,!1),V(xe,void 0),V(Se,void 0),ge=void 0,Ue(K(j)),_().add({type:`tree`,undo:L({patch:a},i),redo:{patch:e,json:void 0,text:K(M),documentState:K(N),selection:bb(K(P)),sortedColumn:void 0,textIsRepaired:K(Ne)}}),{json:K(j),previousJson:n,undo:a,redo:e}}function Ke(){!m()&&K(P)&&V(P,Sb(Lb(K(P))))}function qe(){if(!m()&&K(P)){var e=Lb(K(P)),t=I(K(j),e);Gg(t)?function(e,t){r(`openJSONEditorModal`,{path:e,value:t}),me=!0,pe()({content:{json:t},path:e,onPatch:K(rn).onPatch,onClose:()=>{me=!1,setTimeout($t)}})}(e,t):V(P,wb(e))}}function Je(){if(!m()&&rb(K(P))){var e=Lb(K(P)),t=Dt(e),n=I(K(j),e),i=!Uy(K(j),K(N),e),a=i?String(n):e_(String(n),C());r(`handleToggleEnforceString`,{enforceString:i,value:n,updatedValue:a}),Mt([{op:`replace`,path:t,value:a}],(t,n)=>({state:Ry(K(j),n,e,{type:`value`,enforceString:i})}))}}function Ye(){return K(Ne)&&K(j)!==void 0&&Nt(K(j)),K(j)===void 0?{text:K(M)||``}:{json:K(j)}}function Xe(){return Ze.apply(this,arguments)}function Ze(){return Ze=Xu(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield HT({json:K(j),selection:K(P),indentation:e?te():void 0,readOnly:m(),parser:C(),onPatch:Mt})}),Ze.apply(this,arguments)}function Qe(){return $e.apply(this,arguments)}function $e(){return $e=Xu(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];K(j)!==void 0&&(yield WT({json:K(j),selection:K(P),indentation:e?te():void 0,parser:C()}))}),$e.apply(this,arguments)}function et(e){e.preventDefault(),rt(e.clipboardData?.getData(`text/plain`))}function tt(){return nt.apply(this,arguments)}function nt(){return(nt=Xu(function*(){try{rt(yield navigator.clipboard.readText())}catch(e){console.error(e),V(A,!0)}})).apply(this,arguments)}function rt(e){e!==void 0&&KT({clipboardText:e,json:K(j),selection:K(P),readOnly:m(),parser:C(),onPatch:Mt,onChangeText:Pt,onPasteMultilineText:Vt,openRepairModal:it})}function it(e,t){V(he,{text:e,onParse:e=>f_(e,e=>u_(e,C())),onRepair:p_,onApply:t,onClose:$t})}function at(){qT({json:K(j),text:K(M),selection:K(P),keepSelection:!1,readOnly:m(),onChange:re(),onPatch:Mt})}function ot(){!m()&&K(j)!==void 0&&K(P)&&Ab&&!sc(Lb(K(P)))&&(r(`duplicate`,{selection:K(P)}),Mt(qb(K(j),cb(K(j),K(P)))))}function st(){m()||!K(P)||!ib(K(P))&&!rb(K(P))||sc(Lb(K(P)))||(r(`extract`,{selection:K(P)}),Mt(Jb(K(j),K(P)),(e,t)=>{if(Gg(e))return{state:Yy(e,t,[])}}))}function ct(e){JT({insertType:e,selectInside:!0,initialValue:void 0,json:K(j),selection:K(P),readOnly:m(),parser:C(),onPatch:Mt,onReplaceJson:Nt})}function lt(e){nb(K(P))&&V(P,Cb(K(P).path)),K(P)||V(P,mb(K(j),K(N))),ct(e)}function ut(e){if(!m()&&K(P))if(jb(K(P)))try{var t=Rb(K(P)),n=I(K(j),t),i=function(e,t,n){if(t===`array`){if(Array.isArray(e))return e;if(Wg(e))return s_(e);if(typeof e==`string`)try{var r=n.parse(e);if(Array.isArray(r))return r;if(Wg(r))return s_(r)}catch{return[e]}return[e]}if(t===`object`){if(Array.isArray(e))return o_(e);if(Wg(e))return e;if(typeof e==`string`)try{var i=n.parse(e);if(Wg(i))return i;if(Array.isArray(i))return o_(i)}catch{return{value:e}}return{value:e}}if(t===`value`)return Gg(e)?n.stringify(e):e;throw Error(`Cannot convert ${Zg(e,n)} to ${t}`)}(n,e,C());if(i===n)return;var a=[{op:`replace`,path:Dt(t),value:i}];r(`handleConvert`,{selection:K(P),path:t,type:e,operations:a}),Mt(a,(e,t)=>({state:K(P)?Jy(e,t,Lb(K(P))):K(N)}))}catch(e){ne()(e)}else ne()(Error(`Cannot convert current selection to ${e}`))}function dt(){if(K(P)){var e=fb(K(j),K(N),K(P),!1),t=rc(Lb(K(P)));e&&!sc(Lb(e))&&cc(t,rc(Lb(e)))?V(P,Eb(Lb(e))):V(P,Tb(t)),r(`insert before`,{selection:K(P),selectionBefore:e,parentPath:t}),Jf(),Ut()}}function ft(){if(K(P)){var e=db(K(j),K(P));r(`insert after`,e),V(P,Eb(e)),Jf(),Ut()}}function pt(e){return mt.apply(this,arguments)}function mt(){return(mt=Xu(function*(e){yield YT({char:e,selectInside:!0,json:K(j),selection:K(P),readOnly:m(),parser:C(),onPatch:Mt,onReplaceJson:Nt,onSelect:ve})})).apply(this,arguments)}function ht(){if(!m()&&_().canUndo){var e=_().undo();if(yy(e)){var t={json:K(j),text:K(M)};V(j,e.undo.patch?At(K(j),e.undo.patch):e.undo.json),V(N,e.undo.documentState),V(P,e.undo.selection),V(M,e.undo.text),V(Ne,e.undo.textIsRepaired),ge=void 0,r(`undo`,{item:e,json:K(j),documentState:K(N),selection:K(P)}),jt(t,e.undo.patch&&e.redo.patch?{json:K(j),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),$t(),K(P)&&Ct(Lb(K(P)),{scrollToWhenVisible:!1})}else oe()(e)}}function gt(){if(!m()&&_().canRedo){var e=_().redo();if(yy(e)){var t={json:K(j),text:K(M)};V(j,e.redo.patch?At(K(j),e.redo.patch):e.redo.json),V(N,e.redo.documentState),V(P,e.redo.selection),V(M,e.redo.text),V(Ne,e.redo.textIsRepaired),ge=void 0,r(`redo`,{item:e,json:K(j),documentState:K(N),selection:K(P)}),jt(t,e.undo.patch&&e.redo.patch?{json:K(j),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),$t(),K(P)&&Ct(Lb(K(P)),{scrollToWhenVisible:!1})}else se()(e)}}function _t(e){var t;m()||K(j)===void 0||(me=!0,k()({id:a,json:K(j),rootPath:e,onSort:(t=Xu(function*(t){var{operations:n}=t;r(`onSort`,e,n),Mt(n,(t,n)=>({state:Yy(t,n,e),selection:Cb(e)}))}),function(e){return t.apply(this,arguments)}),onClose:()=>{me=!1,setTimeout($t)}}))}function vt(){K(P)&&_t(vb(K(j),K(P)))}function yt(){_t([])}function bt(e){if(K(j)!==void 0){var{id:t,onTransform:n,onClose:i}=e,a=e.rootPath||[];me=!0,fe()({id:t||o,json:K(j),rootPath:a,onTransform:e=>{n?n({operations:e,json:K(j),transformedJson:At(K(j),e)}):(r(`onTransform`,a,e),Mt(e,(e,t)=>({state:Yy(e,t,a),selection:Cb(a)})))},onClose:()=>{me=!1,setTimeout($t),i&&i()}})}}function xt(){K(P)&&bt({rootPath:vb(K(j),K(P))})}function St(){bt({rootPath:[]})}function Ct(e){return wt.apply(this,arguments)}function wt(){return wt=Xu(function*(e){var{scrollToWhenVisible:t=!0,element:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};V(N,jy(K(j),K(N),e,$y));var i=n??Et(e);if(r(`scrollTo`,{path:e,elem:i,refContents:K(l)}),!i||!K(l))return Promise.resolve();var a=K(l).getBoundingClientRect(),o=i.getBoundingClientRect();if(!t&&o.bottom>a.top&&o.top<a.bottom)return Promise.resolve();var s=-a.height/4;return new Promise(e=>{p(i,{container:K(l),offset:s,duration:300,callback:()=>e()})})}),wt.apply(this,arguments)}function Et(e){return Jf(),K(l)?.querySelector(`div[data-path="${iv(e)}"]`)??void 0}function Ot(e){return Jf(),K(l)?.querySelector(`span[data-search-result-index="${e}"]`)??void 0}function kt(e){var t=Et(e);if(t&&K(l)){var n=K(l).getBoundingClientRect(),r=t.getBoundingClientRect(),i=Gg(I(K(j),e))?20:r.height;r.top<n.top+20?p(t,{container:K(l),offset:-20,duration:0}):r.top+i>n.bottom-20&&p(t,{container:K(l),offset:-(n.height-i-20),duration:0})}}function jt(e,t){if(e.json!==void 0||e?.text!==void 0){if(K(M)!==void 0){var n,r={text:K(M),json:void 0};(n=re())==null||n(r,e,{contentErrors:Le(),patchResult:t})}else if(K(j)!==void 0){var i,a={text:void 0,json:K(j)};(i=re())==null||i(a,e,{contentErrors:Le(),patchResult:t})}}}function Mt(e,t){r(`handlePatch`,e,t);var n={json:K(j),text:K(M)},i=Ge(e,t);return jt(n,i),i}function Nt(e,t){var n={json:K(j),text:K(M)},r={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ne)},i=jy(K(j),Dy(e,K(N)),[],Xy),a=typeof t==`function`?t(e,i,K(P)):void 0;V(j,a?.json===void 0?e:a.json),V(N,a?.state===void 0?i:a.state),V(P,a?.selection===void 0?K(P):a.selection),V(M,void 0),V(Ne,!1),ge=void 0,Ue(K(j)),We(r),jt(n,void 0)}function Pt(e,t){r(`handleChangeText`);var n={json:K(j),text:K(M)},i={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ne)};try{V(j,w()(e)),V(N,jy(K(j),Dy(K(j),K(N)),[],Xy)),V(M,void 0),V(Ne,!1),ge=void 0}catch(t){try{V(j,w()(Fn(e))),V(N,jy(K(j),Dy(K(j),K(N)),[],Xy)),V(M,e),V(Ne,!0),ge=void 0}catch{V(j,void 0),V(N,Sy({json:K(j),expand:Xy})),V(M,e),V(Ne,!1),ge=K(M)===``?void 0:h_(K(M),t.message||String(t))}}if(typeof t==`function`){var a=t(K(j),K(N),K(P));V(j,a?.json===void 0?K(j):a.json),V(N,a?.state===void 0?K(N):a.state),V(P,a?.selection===void 0?K(P):a.selection)}Ue(K(j)),We(i),jt(n,void 0)}function Ft(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];r(`handleExpand`,{path:e,expanded:t,recursive:n}),t?je(e,n?Qy:Zy):Me(e,n),$t()}function It(){Ft([],!0,!0)}function Lt(){Ft([],!1,!0)}function Rt(e){r(`openFind`,{findAndReplace:e}),V(we,!1),V(Te,!1),Jf(),V(we,!0),V(Te,e)}function zt(e,t){r(`handleExpandSection`,e,t),V(N,function(e,t,n,r){return zy(e,t,n,(e,t)=>{if(!hy(t))return t;var n=$v(t.visibleSections.concat(r));return L(L({},t),{},{visibleSections:n})})}(K(j),K(N),e,t))}function Bt(e){r(`pasted json as text`,e),V(xe,e)}function Vt(e){r(`pasted multiline text`,{pastedText:e}),V(Se,e)}function Ht(e){var{anchor:t,left:n,top:r,width:i,height:a,offsetTop:o,offsetLeft:l,showTip:u}=e,d=function(e){var{json:t,documentState:n,selection:r,readOnly:i,onEditKey:a,onEditValue:o,onToggleEnforceString:s,onCut:c,onCopy:l,onPaste:u,onRemove:d,onDuplicate:f,onExtract:p,onInsertBefore:m,onInsert:h,onConvert:g,onInsertAfter:_,onSort:v,onTransform:y}=e,b=t!==void 0,x=!!r,S=!!r&&sc(Lb(r)),C=r?I(t,Lb(r)):void 0,w=Array.isArray(C)?`Edit array`:Wg(C)?`Edit object`:`Edit value`,T=b&&(ib(r)||nb(r)||rb(r)),E=r&&!S?I(t,rc(Lb(r))):void 0,ee=!i&&b&&_b(r)&&!S&&!Array.isArray(E),te=!i&&b&&r!==void 0&&_b(r),ne=te&&!Gg(C),re=!i&&T,ie=T,ae=!i&&x,oe=!i&&b&&T&&!S,se=!i&&b&&r!==void 0&&(ib(r)||rb(r))&&!S,D=T,O=D?`Convert to:`:`Insert:`,ce=!i&&(tb(r)&&Array.isArray(C)||eb(r)&&Array.isArray(E)),le=!i&&(D?jb(r)&&!Wg(C):x),ue=!i&&(D?jb(r)&&!Array.isArray(C):x),de=!i&&(D?jb(r)&&Gg(C):x),k=r!==void 0&&Uy(t,n,Lb(r));function fe(e){T?e!==`structure`&&g(e):h(e)}return[{type:`row`,items:[{type:`button`,onClick:()=>a(),icon:Wl,text:`Edit key`,title:`Edit the key (Double-click on the key)`,disabled:!ee},{type:`dropdown-button`,main:{type:`button`,onClick:()=>o(),icon:Wl,text:w,title:`Edit the value (Double-click on the value)`,disabled:!te},width:`11em`,items:[{type:`button`,icon:Wl,text:w,title:`Edit the value (Double-click on the value)`,onClick:()=>o(),disabled:!te},{type:`button`,icon:k?Ml:iu,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!ne}]}]},{type:`separator`},{type:`row`,items:[{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:Yl,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!re},width:`10em`,items:[{type:`button`,icon:Yl,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:!re},{type:`button`,icon:Yl,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:!re}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:eu,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!ie},width:`12em`,items:[{type:`button`,icon:eu,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!0),disabled:!ie},{type:`button`,icon:eu,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!ie}]},{type:`button`,onClick:()=>u(),icon:yl,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:!ae}]},{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`button`,onClick:()=>f(),icon:jl,text:`Duplicate`,title:`Duplicate selected contents (Ctrl+D)`,disabled:!oe},{type:`button`,onClick:()=>p(),icon:bl,text:`Extract`,title:`Extract selected contents`,disabled:!se},{type:`button`,onClick:()=>v(),icon:ql,text:`Sort`,title:`Sort array or object contents`,disabled:i||!T},{type:`button`,onClick:()=>y(),icon:xl,text:`Transform`,title:`Transform array or object contents (filter, sort, project)`,disabled:i||!T},{type:`button`,onClick:()=>d(),icon:zl,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!T}]},{type:`column`,items:[{type:`label`,text:O},{type:`button`,onClick:()=>fe(`structure`),icon:D?Xl:$l,text:`Structure`,title:O+` structure like the first item in the array`,disabled:!ce},{type:`button`,onClick:()=>fe(`object`),icon:D?Xl:$l,text:`Object`,title:O+` object`,disabled:!le},{type:`button`,onClick:()=>fe(`array`),icon:D?Xl:$l,text:`Array`,title:O+` array`,disabled:!ue},{type:`button`,onClick:()=>fe(`value`),icon:D?Xl:$l,text:`Value`,title:O+` value`,disabled:!de}]}]},{type:`separator`},{type:`row`,items:[{type:`button`,onClick:()=>m(),icon:Nl,text:`Insert before`,title:`Select area before current entry to insert or paste contents`,disabled:i||!T||S},{type:`button`,onClick:()=>_(),icon:Sl,text:`Insert after`,title:`Select area after current entry to insert or paste contents`,disabled:i||!T||S}]}]}({json:K(j),documentState:K(N),selection:K(P),readOnly:m(),onEditKey:Ke,onEditValue:qe,onToggleEnforceString:Je,onCut:Xe,onCopy:Qe,onPaste:tt,onRemove:at,onDuplicate:ot,onExtract:st,onInsertBefore:dt,onInsert:lt,onInsertAfter:ft,onConvert:ut,onSort:vt,onTransform:xt}),f=ce()(d)??d;if(!1!==f){var p={left:n,top:r,offsetTop:o,offsetLeft:l,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{me=!1,$t()}};me=!0;var h=s(mE,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:f,onRequestClose:()=>c(h)},p)}}function Ut(e){if(!kb(K(P)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==K(u))Ht({left:e.clientX,top:e.clientY,width:Xv,height:Yv,showTip:!1});else{var t=K(l)?.querySelector(`.jse-context-menu-pointer.jse-selected`);if(t)Ht({anchor:t,offsetTop:2,width:Xv,height:Yv,showTip:!1});else{var n=K(l)?.getBoundingClientRect();n&&Ht({top:n.top+2,left:n.left+2,width:Xv,height:Yv,showTip:!1})}}}function Wt(e){Ht({anchor:nv(e.target,`BUTTON`),offsetTop:0,width:Xv,height:Yv,showTip:!0})}function Gt(){return Kt.apply(this,arguments)}function Kt(){return(Kt=Xu(function*(){if(r(`apply pasted json`,K(xe)),K(xe)){var{onPasteAsJson:e}=K(xe);V(xe,void 0),e(),setTimeout($t)}})).apply(this,arguments)}function qt(){return Jt.apply(this,arguments)}function Jt(){return(Jt=Xu(function*(){r(`apply pasted multiline text`,K(Se)),K(Se)&&(rt(JSON.stringify(K(Se))),setTimeout($t))})).apply(this,arguments)}function Yt(){r(`clear pasted json`),V(xe,void 0),$t()}function Xt(){r(`clear pasted multiline text`),V(Se,void 0),$t()}function Zt(){ie()(A_.text)}function Qt(e){V(P,e),$t(),Ct(Lb(e))}function $t(){r(`focus`),K(u)&&(K(u).focus(),K(u).select())}function en(e){return function(e,t,n){var r=rc(n),i=[Gs(n)],a=I(e,r),o=a?qy(a,t,i):void 0;return o?Cb(r.concat(o)):Eb(n)}(K(j),K(N),e)}function tn(e){K(n)&&K(n).onDrag(e)}function nn(){K(n)&&K(n).onDragEnd()}var rn=B(void 0,!0);W(()=>K(P),()=>{var e=K(P);cc(e,g())||(r(`onSelect`,e),ae()(e))}),W(()=>(J(x()),J(S())),()=>{V(be,R_({escapeControlCharacters:x(),escapeUnicodeCharacters:S()}))}),W(()=>K(we),()=>{(function(e){K(l)&&e&&K(l).scrollTop===0&&(Vp(l,K(l).style.overflowAnchor=`none`),Vp(l,K(l).scrollTop+=Zv),setTimeout(()=>{K(l)&&Vp(l,K(l).style.overflowAnchor=``)}))})(K(we))}),W(()=>J(h()),()=>{Ve(h())}),W(()=>J(g()),()=>{(function(e){cc(K(P),e)||(r(`applyExternalSelection`,{selection:K(P),externalSelection:e}),ob(e)&&V(P,e))})(g())}),W(()=>(K(j),J(T()),J(C()),J(E())),()=>{Ie(K(j),T(),C(),E())}),W(()=>(K(l),jC),()=>{V(n,K(l)?jC(K(l)):void 0)}),W(()=>(J(m()),J(v()),J(C()),K(be),J(D()),J(le())),()=>{V(rn,{mode:A_.tree,readOnly:m(),truncateTextSize:v(),parser:C(),normalization:K(be),getJson:Re,getDocumentState:ze,getSelection:Be,findElement:Et,findNextInside:en,focus:$t,onPatch:Mt,onInsert:ct,onExpand:Ft,onSelect:ve,onFind:Rt,onExpandSection:zt,onPasteJson:Bt,onRenderValue:D(),onContextMenu:Ht,onClassName:le()||(()=>{}),onDrag:tn,onDragEnd:nn})}),W(()=>K(rn),()=>{r(`context changed`,K(rn))}),um();var an={expand:je,collapse:Me,validate:Le,getJson:Re,patch:Ge,acceptAutoRepair:Ye,openTransformModal:bt,scrollTo:Ct,findElement:Et,findSearchResult:Ot,focus:$t};Og(!0);var on=CE();Y(`mousedown`,Mp,function(e){!Q_(e.target,e=>e===K(d))&&kb(K(P))&&(r(`click outside the editor, exit edit mode`),V(P,bb(K(P))),f&&K(u)&&(K(u).focus(),K(u).blur()),r(`blur (outside editor)`),K(u)&&K(u).blur())});var sn,cn=Qp(on),ln=H(cn),un=e=>{(function(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=$(t,`json`,9),o=$(t,`selection`,9),s=$(t,`readOnly`,9),c=$(t,`showSearch`,13,!1),l=$(t,`history`,9),u=$(t,`onExpandAll`,9),d=$(t,`onCollapseAll`,9),f=$(t,`onUndo`,9),p=$(t,`onRedo`,9),m=$(t,`onSort`,9),h=$(t,`onTransform`,9),g=$(t,`onContextMenu`,9),_=$(t,`onCopy`,9),v=$(t,`onRenderMenu`,9);function y(){c(!c())}var b=B(void 0,!0),x=B(void 0,!0),S=B(void 0,!0),C=B(void 0,!0);W(()=>J(a()),()=>{V(n,a()!==void 0)}),W(()=>(K(n),J(o()),rb),()=>{V(r,K(n)&&(ib(o())||nb(o())||rb(o())))}),W(()=>(J(u()),J(a())),()=>{V(b,{type:`button`,icon:nT,title:`Expand all`,className:`jse-expand-all`,onClick:u(),disabled:!Gg(a())})}),W(()=>(J(d()),J(a())),()=>{V(x,{type:`button`,icon:rT,title:`Collapse all`,className:`jse-collapse-all`,onClick:d(),disabled:!Gg(a())})}),W(()=>J(a()),()=>{V(S,{type:`button`,icon:wl,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:y,disabled:a()===void 0})}),W(()=>(J(s()),K(b),K(x),J(m()),J(a()),J(h()),K(S),J(g()),J(f()),J(l()),J(p()),J(_()),K(r)),()=>{V(C,s()?[K(b),K(x),{type:`separator`},{type:`button`,icon:eu,title:`Copy (Ctrl+C)`,className:`jse-copy`,onClick:_(),disabled:!K(r)},{type:`separator`},K(S),{type:`space`}]:[K(b),K(x),{type:`separator`},{type:`button`,icon:ql,title:`Sort`,className:`jse-sort`,onClick:m(),disabled:s()||a()===void 0},{type:`button`,icon:xl,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:h(),disabled:s()||a()===void 0},K(S),{type:`button`,icon:kl,title:Uv,className:`jse-contextmenu`,onClick:g()},{type:`separator`},{type:`button`,icon:ru,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:f(),disabled:!l().canUndo},{type:`button`,icon:tu,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:p(),disabled:!l().canRedo},{type:`space`}])}),W(()=>(J(v()),K(C)),()=>{V(i,v()(K(C))||K(C))}),um(),Og(!0),sw(e,{get items(){return K(i)}}),nf()})(e,{get json(){return K(j)},get selection(){return K(P)},get readOnly(){return m()},get history(){return _()},onExpandAll:It,onCollapseAll:Lt,onUndo:ht,onRedo:gt,onSort:yt,onTransform:St,onContextMenu:Wt,onCopy:Qe,get onRenderMenu(){return O()},get showSearch(){return K(we)},set showSearch(e){V(we,e)},$$legacy:!0})};Q(ln,e=>{y()&&e(un)});var dn=U(ln,2),fn=e=>{wT(e,{get json(){return K(j)},get selection(){return K(P)},onSelect:Qt,get onError(){return ne()},get pathParser(){return ee()}})};Q(dn,e=>{b()&&e(fn)});var pn=U(dn,2),mn=e=>{var t=xE(),n=Qp(t),r=H(n);r.readOnly=!0,Tg(r,e=>V(u,e),()=>K(u));var i=U(n,2),a=e=>{var t=fh(),n=Qp(t),r=e=>{(function(e,t){function n(e){e.stopPropagation(),t.onCreateObject()}function r(e){e.stopPropagation(),t.onCreateArray()}tf(t,!0);var i=sT(),a=U(H(U(H(i),2)),2),o=e=>{var t=oT(),i=U(Qp(t),2);mg(i,`title`,`Create an empty JSON object (press '{')`);var a=U(i,2);mg(a,`title`,`Create an empty JSON array (press '[')`),ih(`click`,i,n),ih(`click`,a,r),Z(e,t)};Q(a,e=>{t.readOnly||e(o)}),ih(`click`,i,()=>t.onClick()),Z(e,i),nf()})(e,{get readOnly(){return m()},onCreateObject:()=>{$t(),pt(`{`)},onCreateArray:()=>{$t(),pt(`[`)},onClick:()=>{$t()}})},i=e=>{var t=vE(),n=Qp(t),r=z(()=>m()?[]:[{icon:Pl,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:Zt}]);WC(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return K(r)}}),$T(U(n,2),{get text(){return K(M)},get json(){return K(j)},get indentation(){return te()},get parser(){return C()}}),Z(e,t)};Q(n,e=>{K(M)===``||K(M)===void 0?e(r):e(i,-1)}),Z(e,t)},o=e=>{var t=bE(),n=Qp(t);OT(H(n),{get json(){return K(j)},get documentState(){return K(N)},get parser(){return C()},get showSearch(){return K(we)},get showReplace(){return K(Te)},get readOnly(){return m()},columns:void 0,onSearch:Ee,onFocus:De,onPatch:Mt,onClose:ke});var r=U(n,2);mg(r,`data-jsoneditor-scrollable-contents`,!0);var i=H(r),a=e=>{Z(e,yE())};Q(i,e=>{K(we)&&e(a)}),tT(U(i,2),{get value(){return K(j)},pointer:``,get state(){return K(N)},get validationErrors(){return K(F)},get searchResults(){return K(Ce)},get selection(){return K(P)},get context(){return K(rn)},get onDragSelectionStart(){return Kn}}),Tg(r,e=>V(l,e),()=>K(l));var o=U(r,2),s=e=>{var t=z(()=>(K(xe),q(()=>`You pasted a JSON ${Array.isArray(K(xe).contents)?`array`:`object`} as text`))),n=z(()=>[{icon:Rl,text:`Paste as JSON instead`,title:`Replace the value with the pasted JSON`,onMouseDown:Gt},{text:`Leave as is`,title:`Keep the JSON embedded in the value`,onClick:Yt}]);WC(e,{type:`info`,get message(){return K(t)},get actions(){return K(n)}})};Q(o,e=>{K(xe)&&e(s)});var c=U(o,2),u=e=>{var t=z(()=>[{icon:Rl,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:qt},{text:`Leave as is`,title:`Keep the pasted array`,onClick:Xt}]);WC(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return K(t)}})};Q(c,e=>{K(Se)&&e(u)});var d=U(c,2),f=e=>{var t=z(()=>m()?[]:[{icon:Bl,text:`Ok`,title:`Accept the repaired document`,onClick:Ye},{icon:Pl,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:Zt}]);WC(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return K(t)},onClose:$t})};Q(d,e=>{K(Ne)&&e(f)}),ZC(U(d,2),{get validationErrors(){return K(Pe)},selectError:Ae}),Z(e,t)};Q(i,e=>{K(j)===void 0?e(a):e(o,-1)}),Y(`paste`,r,et),Z(e,t)},hn=e=>{Z(e,SE())};Q(pn,e=>{i?e(hn,-1):e(mn)}),Tg(cn,e=>V(d,e),()=>K(d));var gn=U(cn,2),_n=e=>{nw(e,{onClose:()=>V(A,!1)})};Q(gn,e=>{K(A)&&e(_n)});var vn=U(gn,2),yn=e=>{dw(e,Fg(()=>K(he),{onClose:()=>{var e;(e=K(he))==null||e.onClose(),V(he,void 0)}}))};return Q(vn,e=>{K(he)&&e(yn)}),G(()=>sn=eg(cn,1,`jse-tree-mode svelte-10mlrw4`,null,sn,{"no-main-menu":!y()})),Y(`keydown`,cn,function(e){var t=cv(e),n=e.shiftKey;if(r(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),Xe(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),Xe(!1)),t===`Ctrl+C`&&(e.preventDefault(),Qe(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),Qe(!1)),t===`Ctrl+D`&&(e.preventDefault(),ot()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),at()),t===`Insert`&&(e.preventDefault(),ct(`structure`)),t===`Ctrl+A`&&(e.preventDefault(),V(P,Cb([]))),t===`Ctrl+Q`&&Ut(e),t===`ArrowUp`||t===`Shift+ArrowUp`){e.preventDefault();var i=K(P)?fb(K(j),K(N),K(P),n)||K(P):mb(K(j),K(N));V(P,i),kt(Lb(i))}if(t===`ArrowDown`||t===`Shift+ArrowDown`){e.preventDefault();var a=K(P)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?Lb(n):db(e,n),a=Gg(I(e,i))?My(e,t,i,!0):t,o=qy(e,t,i),s=qy(e,a,i);if(r)return tb(n)?o===void 0?void 0:Db(o,o):eb(n)?s===void 0?void 0:Db(s,s):s===void 0?void 0:Db(Rb(n),s);if(eb(n))return s===void 0?void 0:Cb(s);if(tb(n)||rb(n))return o===void 0?void 0:Cb(o);if(nb(n)){if(o===void 0||o.length===0)return;var c=I(e,rc(o));return Array.isArray(c)?Cb(o):xb(o)}return ib(n)?s===void 0?o===void 0?void 0:Cb(o):Cb(s):void 0}}(K(j),K(N),K(P),n)||K(P):mb(K(j),K(N));V(P,a),kt(Lb(a))}if(t===`ArrowLeft`||t===`Shift+ArrowLeft`){e.preventDefault();var o=K(P)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(n){var{caret:a,previous:o}=pb(e,t,n,i);if(r)return ib(n)?void 0:Db(n.path,n.path);if(a&&o)return Mb(o);var s=I(e,rc(Lb(n)));return rb(n)&&Array.isArray(s)?Db(n.path,n.path):ib(n)&&!Array.isArray(s)?xb(n.focusPath):void 0}}(K(j),K(N),K(P),n,!m())||K(P):mb(K(j),K(N));V(P,o),kt(Lb(o))}if(t===`ArrowRight`||t===`Shift+ArrowRight`){e.preventDefault();var s=K(P)&&K(j)!==void 0?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(n){var{caret:a,next:o}=pb(e,t,n,i);return r?ib(n)?void 0:Db(n.path,n.path):a&&o?Mb(o):ib(n)?Cb(n.focusPath):void 0}}(K(j),K(N),K(P),n,!m())||K(P):mb(K(j),K(N));V(P,s),kt(Lb(s))}if(t===`Enter`&&K(P)){if(ab(K(P))){var c=K(P).focusPath,l=I(K(j),rc(c));Array.isArray(l)&&(e.preventDefault(),V(P,Cb(c)))}nb(K(P))&&(e.preventDefault(),V(P,L(L({},K(P)),{},{edit:!0}))),rb(K(P))&&(e.preventDefault(),Gg(I(K(j),K(P).path))?Ft(K(P).path,!0):V(P,L(L({},K(P)),{},{edit:!0})))}if(t.replace(/^Shift\+/,``).length===1&&K(P))return e.preventDefault(),void pt(e.key);if(t===`Enter`&&(eb(K(P))||tb(K(P))))return e.preventDefault(),void pt(``);if(t===`Ctrl+Enter`&&rb(K(P))){var u=I(K(j),K(P).path);$g(u)&&window.open(String(u),`_blank`)}t===`Escape`&&K(P)&&(e.preventDefault(),V(P,void 0)),t===`Ctrl+F`&&(e.preventDefault(),Rt(!1)),t===`Ctrl+H`&&(e.preventDefault(),Rt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),ht()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),gt())}),Y(`mousedown`,cn,function(e){r(`handleMouseDown`,e);var t=e.target;X_(t,`BUTTON`)||t.isContentEditable||($t(),K(P)||K(j)!==void 0||K(M)!==``&&K(M)!==void 0||(r(`createDefaultSelection`),V(P,Cb([]))))}),Y(`contextmenu`,cn,Ut),Z(e,on),Cg(t,`expand`,je),Cg(t,`collapse`,Me),Cg(t,`validate`,Le),Cg(t,`getJson`,Re),Cg(t,`patch`,Ge),Cg(t,`acceptAutoRepair`,Ye),Cg(t,`openTransformModal`,bt),Cg(t,`scrollTo`,Ct),Cg(t,`findElement`,Et),Cg(t,`findSearchResult`,Ot),Cg(t,`focus`,$t),nf(an)}function TE(e){return typeof(t=e)!=`object`||t===null?e:new Proxy(e,{get:(e,t,n)=>TE(Reflect.get(e,t,n)),set:()=>!1,deleteProperty:()=>!1});var t}var EE=Ig(`jsoneditor:History`);function DE(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,n=[],r=0;function i(){return r<n.length}function a(){return r>0}function o(){return{canUndo:i(),canRedo:a(),items:()=>n.slice().reverse(),add:c,undo:u,redo:d,clear:l}}function s(){e.onChange&&e.onChange(o())}function c(e){EE(`add`,e),n=[e].concat(n.slice(r)).slice(0,t),r=0,s()}function l(){EE(`clear`),n=[],r=0,s()}function u(){if(i()){var e=n[r];return r+=1,EE(`undo`,e),s(),e}}function d(){if(a())return EE(`redo`,n[--r]),s(),n[r]}return{get:o}}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm),
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
    flex: unset;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var OE=Ag(()=>Mx),kE=Ag(()=>Nx),AE=X(`<div class="query-error svelte-lta8xm"> </div>`),jE=X(`<!> <!>`,1),ME=X(`<div class="jse-preview jse-error svelte-lta8xm"> </div>`),NE=X(`<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>`,1),PE=X(`<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>`);function FE(e,t){var n;tf(t,!1);var r=Ig(`jsoneditor:TransformModal`),i=$(t,`id`,25,()=>`transform-modal-`+Bg()),a=$(t,`json`,9),o=$(t,`rootPath`,25,()=>[]),s=$(t,`indentation`,9),c=$(t,`truncateTextSize`,9),l=$(t,`escapeControlCharacters`,9),u=$(t,`escapeUnicodeCharacters`,9),d=$(t,`parser`,9),f=$(t,`parseMemoizeOne`,9),p=$(t,`validationParser`,9),m=$(t,`pathParser`,9),h=$(t,`queryLanguages`,9),g=$(t,`queryLanguageId`,13),_=$(t,`onChangeQueryLanguage`,9),v=$(t,`onRenderValue`,9),y=$(t,`onRenderMenu`,9),b=$(t,`onRenderContextMenu`,9),x=$(t,`onClassName`,9),S=$(t,`onTransform`,9),C=$(t,`onClose`,9),w=B(void 0,!0),T=B(DE({onChange:e=>V(T,e)}).get(),!0),E=B(void 0,!0),ee=B(void 0,!0),te=B(!1,!0),ne=`${i()}:${Dt(o())}`,re=OE()[ne]??{},ie=B(!1!==kE().showWizard,!0),ae=B(!1!==kE().showOriginal,!0),oe=B(re.queryOptions??{},!0),se=B(g()===re.queryLanguageId&&re.query?re.query:``,!0),D=B((n=re.isManual)!=null&&n,!0),O=B(void 0,!0),ce=B(void 0,!0),le=B({text:``},!0);function ue(e){return h().find(t=>t.id===e)??h()[0]}function de(e){try{V(oe,e),V(se,ue(g()).createQuery(K(E),e)),V(O,void 0),V(D,!1),r(`updateQueryByWizard`,{queryOptions:K(oe),query:K(se),isManual:K(D)})}catch(e){V(O,String(e))}}function k(e){V(se,e.target.value),V(D,!0),r(`handleChangeQuery`,{query:K(se),isManual:K(D)})}K(D)||de(K(oe)),kh(()=>{var e;(e=K(w))==null||e.focus()});var fe=He(function(e,t){if(e===void 0)return V(le,{text:``}),void V(ce,`Error: No JSON`);if(t.trim()!==``)try{r(`previewTransform`,{query:t}),V(le,{json:ue(g()).executeQuery(e,t,d())}),V(ce,void 0)}catch(e){V(le,{text:``}),V(ce,String(e))}else V(le,{json:e})},300);function pe(){if(K(E)===void 0)return V(le,{text:``}),void V(ce,`Error: No JSON`);try{r(`handleTransform`,{query:K(se)});var e=ue(g()).executeQuery(K(E),K(se),d());S()([{op:`replace`,path:Dt(o()),value:e}]),C()()}catch(e){console.error(e),V(le,{text:``}),V(ce,String(e))}}function me(){V(ie,!K(ie)),kE(kE().showWizard=K(ie))}function A(){V(ae,!K(ae)),kE(kE().showOriginal=K(ae))}function he(e){e.focus()}function j(e){r(`handleChangeQueryLanguage`,e),g(e),_()(e),de(K(oe))}function M(){K(te)?V(te,!K(te)):C()()}W(()=>(J(a()),J(o())),()=>{V(E,TE(I(a(),o())))}),W(()=>K(E),()=>{V(ee,K(E)?{json:K(E)}:{text:``})}),W(()=>(K(E),K(se)),()=>{fe(K(E),K(se))}),W(()=>(OE(),K(oe),K(se),J(g()),K(D)),()=>{OE(OE()[ne]={queryOptions:K(oe),query:K(se),queryLanguageId:g(),isManual:K(D)}),r(`store state in memory`,ne,OE()[ne])}),um(),Og(!0),ew(e,{get onClose(){return C()},className:`jse-transform-modal`,get fullscreen(){return K(te)},children:(e,t)=>{var n=PE();gv(H(n),{children:(e,t)=>{var n=NE(),r=Qp(n);(function(e,t){tf(t,!1);var n,r=$(t,`queryLanguages`,9),i=$(t,`queryLanguageId`,9),a=$(t,`fullscreen`,13),o=$(t,`onChangeQueryLanguage`,9),s=$(t,`onClose`,9),c=B(void 0,!0),{openAbsolutePopup:l,closeAbsolutePopup:u}=ef(`absolute-popup`);function d(){n=l(TC,{queryLanguages:r(),queryLanguageId:i(),onChangeQueryLanguage:e=>{u(n),o()(e)}},{offsetTop:-2,offsetLeft:0,anchor:K(c),closeOnOuterClick:!0})}Og(!0),OC(e,{title:`Transform`,fullScreenButton:!0,get onClose(){return s()},get fullscreen(){return a()},set fullscreen(e){a(e)},$$slots:{actions:(e,t)=>{var n,i=kC();Ov(H(i),{get data(){return Il}}),Tg(i,e=>V(c,e),()=>K(c)),G(()=>n=eg(i,1,`jse-config svelte-5gkegr`,null,n,{hide:r().length<=1})),Y(`click`,i,d),Z(e,i)}},$$legacy:!0}),nf()})(r,{get queryLanguages(){return h()},get queryLanguageId(){return g()},onChangeQueryLanguage:j,get onClose(){return C()},get fullscreen(){return K(te)},set fullscreen(e){V(te,e)},$$legacy:!0});var i=H(U(r,2)),a=H(i),_=U(H(a),2);Wh(_,()=>(J(g()),q(()=>ue(g()).description)),!0);var S=U(_,4),ne=U(S,2),re=H(H(ne)),D=H(re),fe=z(()=>K(ie)?nu:Cl);Ov(D,{get data(){return K(fe)}});var M=U(ne,2),ge=e=>{var t=fh(),n=Qp(t),r=e=>{var t=jE(),n=Qp(t);SC(n,{get queryOptions(){return K(oe)},get json(){return K(E)},onChange:de});var r=U(n,2),i=e=>{var t=AE(),n=H(t);G(()=>_h(n,K(O))),Z(e,t)};Q(r,e=>{K(O)&&e(i)}),Z(e,t)},i=Op(()=>(K(E),q(()=>Array.isArray(K(E))))),a=e=>{Z(e,dh(`(Only available for arrays, not for objects)`))};Q(n,e=>{K(i)?e(r):e(a,-1)}),Z(e,t)};Q(M,e=>{K(ie)&&e(ge)});var _e=U(M,4);Tg(_e,e=>V(w,e),()=>K(w));var N,P,ve=U(a,2),ye=H(ve),be=H(ye),xe=H(H(be)),Se=H(xe),Ce=z(()=>K(ae)?nu:Cl);Ov(Se,{get data(){return K(Ce)}});var we=U(be,2),Te=e=>{wE(e,{get externalContent(){return K(ee)},externalSelection:void 0,get history(){return K(T)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return b()},onError:q(()=>console.error),get onChange(){return Kn},get onChangeMode(){return Kn},get onSelect(){return Kn},get onUndo(){return Kn},get onRedo(){return Kn},get onFocus(){return Kn},get onBlur(){return Kn},get onSortModal(){return Kn},get onTransformModal(){return Kn},get onJSONEditorModal(){return Kn},get onClassName(){return x()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})};Q(we,e=>{K(ae)&&e(Te)});var Ee=U(H(U(ye,2)),2),De=e=>{wE(e,{get externalContent(){return K(le)},externalSelection:void 0,get history(){return K(T)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return b()},onError:q(()=>console.error),get onChange(){return Kn},get onChangeMode(){return Kn},get onSelect(){return Kn},get onUndo(){return Kn},get onRedo(){return Kn},get onFocus(){return Kn},get onBlur(){return Kn},get onSortModal(){return Kn},get onTransformModal(){return Kn},get onJSONEditorModal(){return Kn},get onClassName(){return x()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})},Oe=e=>{var t=ME(),n=H(t);G(()=>_h(n,K(ce))),Z(e,t)};Q(Ee,e=>{K(ce)?e(Oe,-1):e(De)});var ke=H(U(i,2));lm(()=>Y(`click`,ke,pe)),qh(ke,e=>he?.(e)),G(e=>{pg(S,e),pg(_e,K(se)),N=eg(ve,1,`jse-data-contents svelte-lta8xm`,null,N,{"jse-hide-original-data":!K(ae)}),P=eg(ye,1,`jse-original-data svelte-lta8xm`,null,P,{"jse-hide":!K(ae)}),ke.disabled=!!K(ce)},[()=>(J(sc),J(o()),J(Ox),q(()=>sc(o())?`(document root)`:Ox(o())))]),Y(`click`,re,me),Y(`input`,_e,k),Y(`click`,xe,A),Z(e,n)},$$slots:{default:!0}}),qh(n,(e,t)=>QC?.(e,t),()=>M),Z(e,n)},$$slots:{default:!0}}),nf()}function IE(){}var LE=0,RE=class{constructor(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=LE++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=VE.match(e)),t=>{var n=e(t);return n===void 0?null:[this,n]}}};RE.closedBy=new RE({deserialize:e=>e.split(` `)}),RE.openedBy=new RE({deserialize:e=>e.split(` `)}),RE.group=new RE({deserialize:e=>e.split(` `)}),RE.isolate=new RE({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),RE.contextHash=new RE({perNode:!0}),RE.lookAhead=new RE({perNode:!0}),RE.mounted=new RE({perNode:!0});var zE,BE=Object.create(null),VE=class e{constructor(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){var n=t.props&&t.props.length?Object.create(null):BE,r=!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(i)),a){if(a[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[a[0].id]=a[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;var t=this.prop(RE.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){var t=Object.create(null);for(var n in e)for(var r of n.split(` `))t[r]=e[n];return e=>{for(var n=e.prop(RE.group),r=-1;r<(n?n.length:0);r++){var i=t[r<0?e.name:n[r]];if(i)return i}}}};VE.none=new VE(``,Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`}(zE||={}),new RE({perNode:!0}),dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var HE=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),UE=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),WE=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),GE=X(`<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>`),KE=P.define([{tag:ne.propertyName,color:`var(--internal-key-color)`},{tag:ne.number,color:`var(--internal-value-color-number)`},{tag:ne.bool,color:`var(--internal-value-color-boolean)`},{tag:ne.string,color:`var(--internal-value-color-string)`},{tag:ne.keyword,color:`var(--internal-value-color-null)`}]),qE=T(KE),JE=KE.style;KE.style=e=>JE(e||[]);var YE=[y.fromClass(class{constructor(e){this.view=e,this.indentUnit=b(e.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes(`Chrome`),this.generate(e.state)}update(e){var t=b(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new ue;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:e=>{var n=e.contentDOM.querySelector(`.cm-line`);n&&(this.initialPaddingLeft=window.getComputedStyle(n).getPropertyValue(`padding-left`),this.addStyleToBuilder(t,e.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,n){for(var r of this.getVisibleLines(t)){var{numColumns:i,containsTab:a}=this.numColumns(r.text,t.tabSize),o=`calc(${i+this.indentUnit}ch + ${n})`,s=this.isChrome?`calc(-${i+this.indentUnit}ch - ${+!!a}px)`:`-${i+this.indentUnit}ch`;e.add(r.from,r.from,w.line({attributes:{style:`padding-left: ${o}; text-indent: ${s};`}}))}}getVisibleLines(e){var t=new Set,n=null;for(var{from:r,to:i}of this.view.visibleRanges)for(var a=r;a<=i;){var o=e.doc.lineAt(a);n!==o&&(t.add(o),n=o),a=o.to+1}return t}numColumns(e,t){var n=0,r=!1;e:for(var i=0;i<e.length;i++)switch(e[i]){case` `:n+=1;continue e;case`	`:n+=t-n%t,r=!0;continue e;case`\r`:continue e;default:break e}return{numColumns:n,containsTab:r}}},{decorations:e=>e.decorations})];dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name='close'] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var XE=X(`<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>`),ZE=X(`<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>`,1),QE=X(`<!> <!> <!> <!>`,1),$E=X(`<div></div> <!> <!>`,1),eD=X(`<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>`),tD=X(`<div><!> <!> <!></div>`);function nD(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`readOnly`,9),a=$(t,`mainMenuBar`,9),o=$(t,`statusBar`,9),s=$(t,`askToFormat`,9),c=$(t,`externalContent`,9),l=$(t,`externalSelection`,9),u=$(t,`history`,9),d=$(t,`indentation`,9),f=$(t,`tabSize`,9),p=$(t,`escapeUnicodeCharacters`,9),m=$(t,`maxDocumentSize`,9),h=$(t,`parser`,9),g=$(t,`validator`,9),_=$(t,`validationParser`,9),y=$(t,`onChange`,9),b=$(t,`onChangeMode`,9),w=$(t,`onSelect`,9),ee=$(t,`onUndo`,9),ne=$(t,`onRedo`,9),ue=$(t,`onError`,9),A=$(t,`onFocus`,9),P=$(t,`onBlur`,9),Te=$(t,`onRenderMenu`,9),Ee=$(t,`onSortModal`,9),De=$(t,`onTransformModal`,9),Oe=Ig(`jsoneditor:TextMode`),ke={key:`Mod-i`,run:Ct,shift:wt,preventDefault:!0},Ae=typeof window>`u`;Oe(`isSSR:`,Ae);var je,Me=B(void 0,!0),Ne=B(void 0,!0),Pe=B(void 0,!0),F=B(!1,!0),Fe=B(s(),!0),Ie=B([],!0),Le=B(!1,!0),Re=B(0,!0),ze=B(0,!0),Be=null,Ve=new _e,Ue=new _e,We=new _e,Ge=new _e,Ke=new _e,qe=c(),it=B(S_(qe,d(),h()),!0),at=j.define(),ot=null;function st(){if(!ot||ot.length===0)return!1;var e=ot[0].startState,t=ot[ot.length-1].state,n=ot.map(e=>e.changes).reduce((e,t)=>e.compose(t)),r={type:`text`,undo:{changes:n.invert(e.doc).toJSON(),selection:nn(e.selection)},redo:{changes:n.toJSON(),selection:nn(t.selection)}};return Oe(`add history item`,r),u().add(r),ot=null,!0}var ct=B(p(),!0);kh(Xu(function*(){if(!Ae)try{je=function(e){var{target:t,initialText:n,readOnly:r,indentation:i}=e;Oe(`Create CodeMirror editor`,{readOnly:r,indentation:i});var a=function(e,t){return sb(e)?e.ranges.every(e=>e.anchor<t.length&&e.head<t.length):!1}(l(),n)?Kt(l()):void 0;return je=new re({state:he.create({doc:n,selection:a,extensions:[v.of([$e,ke]),Ve.of(zt()),Ye(),pe(),se(),O(),ce(),pt(),oe(),C(),he.allowMultipleSelections.of(!0),x(),T(k,{fallback:!0}),de(),Ce(),xe(),N(),ae(),D(),et(),v.of([...be,...Xe,...Je,{key:`Mod-z`,run:jt,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:Mt,preventDefault:!0},{key:`Ctrl-Shift-z`,run:Mt,preventDefault:!0},...ye,...Se,...Qe]),qE,Vu({hideFirstIndent:!0}),re.domEventHandlers({dblclick:Rt}),re.updateListener.of(e=>{(V(Pe,e.state),e.docChanged)&&(e.transactions.some(e=>!!e.annotation(at))||(ot=[...ot??[],e]),Qt()),e.selectionSet&&tn()}),we(),Ze({top:!0}),re.lineWrapping,Ue.of(he.readOnly.of(r)),Ge.of(he.tabSize.of(f())),We.of(Zt(i)),Ke.of(re.theme({},{dark:Bt()}))]}),parent:t}),a&&je.dispatch(je.state.update({selection:a.main,scrollIntoView:!0})),je}({target:K(Me),initialText:rn(K(it),m(),K(F))?``:K(n).escapeValue(K(it)),readOnly:i(),indentation:d()})}catch(e){console.error(e)}})),Ah(()=>{$t(),je&&(Oe(`Destroy CodeMirror editor`),je.destroy()),_t()});var lt=kc(),ut=kc();function dt(){je&&(Oe(`focus`),je.focus())}function ft(e,t){if(je)try{(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=je.state,i=r.doc.length,a=M(r,i,1/0);if(a){var o=[];if(e.length===0)o=ht(a,r,void 0,t);else{var{from:s}=g_(K(n).escapeValue(K(it)),e);s!==void 0&&s!==0&&(o=ht(a,r,s,t))}o.length>0&&function(e){gt.apply(this,arguments)}(o)}})(e,t)}catch(e){ue()(e)}}function pt(){return ve.of((e,t,n)=>{var r=M(e,e.doc.length,1/0);if(!r||r.length<n)return null;for(var i=null,a=r.resolveStack(n,1);a;a=a.next){var o=a.node;if(!(o.to<=n||o.from>n)){if(i&&o.from<t)break;var s=o.type.prop(le);if(s&&(o.to<r.length-50||r.length==e.doc.length||!mt(o))){var c=s(o,e);c&&c.from<=n&&c.from>=t&&c.to>n&&(i=c)}}}return i})}function mt(e){var t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function ht(e,t,n){var r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],i=[],a=new Set;return e.iterate({enter(e){if(n===void 0||e.from>=n){var o=ie(t,e.from,e.to);if(o){var s=`${o.from}-${o.to}`;a.has(s)||(r?(i.push({from:o.from,to:o.to}),a.add(s)):i.some(e=>e.from<=o.from&&e.to>=o.to)||(i.push({from:o.from,to:o.to}),a.add(s)))}}}}),i}function gt(){return gt=Xu(function*(e){if(e.length!==0){var t=e.length>5e3;t&&(V(Le,!0),V(Re,0),V(ze,e.length),Be=new AbortController);var n=r=>new Promise(i=>{var a;t&&(a=Be)!=null&&a.signal.aborted?i():requestAnimationFrame(()=>{var a=Math.min(r+100,e.length),o=e.slice(r,a);je.dispatch({effects:o.map(e=>me.of({from:e.from,to:e.to}))}),t&&V(Re,a),a<e.length?n(a).then(i):i()})});yield n(0),t&&(V(Le,!1),V(Re,0),V(ze,0),Be=null)}}),gt.apply(this,arguments)}function _t(){Be&&Be.abort()}function vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zy;if(je)try{if(e&&e.length>0){var{from:r}=g_(K(n).escapeValue(K(it)),e);r!==void 0&&(je.dispatch({selection:{anchor:r,head:r}}),S(je))}else te(je);t?.(e)}catch(e){ue()(e)}}function yt(){vt([],()=>!0)}function I(){ft([],!0)}var bt=!1;function xt(e){return St(e,!1)}function St(e,t){Oe(`handlePatch`,e,t);var n=h().parse(K(it)),r=At(n,e),i=Ht(n,e);return Gt({text:h().stringify(r,null,d())},t,!1),{json:r,previousJson:n,undo:i,redo:e}}function Ct(){if(Oe(`format`),i())return!1;try{var e=h().parse(K(it));return Gt({text:h().stringify(e,null,d())},!0,!1),V(Fe,s()),!0}catch(e){ue()(e)}return!1}function wt(){if(Oe(`compact`),i())return!1;try{var e=h().parse(K(it));return Gt({text:h().stringify(e)},!0,!1),V(Fe,!1),!0}catch(e){ue()(e)}return!1}function Tt(){if(Oe(`repair`),!i())try{Gt({text:Fn(K(it))},!0,!1),V(an,qv),V(on,void 0)}catch(e){ue()(e)}}function Et(){var e;if(!i())try{var t=h().parse(K(it));bt=!0,Ee()({id:lt,json:t,rootPath:[],onSort:(e=Xu(function*(e){var{operations:t}=e;Oe(`onSort`,t),St(t,!0)}),function(t){return e.apply(this,arguments)}),onClose:()=>{bt=!1,dt()}})}catch(e){ue()(e)}}function Dt(e){var{id:t,rootPath:n,onTransform:r,onClose:i}=e;try{var a=h().parse(K(it));bt=!0,De()({id:t||ut,json:a,rootPath:n||[],onTransform:e=>{r?r({operations:e,json:a,transformedJson:At(a,e)}):(Oe(`onTransform`,e),St(e,!0))},onClose:()=>{bt=!1,dt(),i&&i()}})}catch(e){ue()(e)}}function Ot(){i()||Dt({rootPath:[]})}function kt(){je&&(K(Me)&&K(Me).querySelector(`.cm-search`)?nt(je):tt(je))}function jt(){if(i())return!1;$t();var e=u().undo();return Oe(`undo`,e),by(e)?(je.dispatch({annotations:at.of(`undo`),changes:fe.fromJSON(e.undo.changes),selection:ge.fromJSON(e.undo.selection),scrollIntoView:!0}),!0):(ee()(e),!1)}function Mt(){if(i())return!1;$t();var e=u().redo();return Oe(`redo`,e),by(e)?(je.dispatch({annotations:at.of(`redo`),changes:fe.fromJSON(e.redo.changes),selection:ge.fromJSON(e.redo.selection),scrollIntoView:!0}),!0):(ne()(e),!1)}function Nt(){V(F,!0),Gt(c(),!0,!0)}function Pt(){b()(A_.tree)}function Ft(){Yt()}function It(e){Oe(`select validation error`,e);var{from:t,to:n}=Vt(e);t!==void 0&&n!==void 0&&(Lt(t,n),dt())}function Lt(e,t){Oe(`setSelection`,{anchor:e,head:t}),je&&je.dispatch(je.state.update({selection:{anchor:e,head:t},scrollIntoView:!0}))}function Rt(e,t){if(t.state.selection.ranges.length===1){var n=t.state.selection.ranges[0],r=K(it).slice(n.from,n.to);if(r===`{`||r===`[`){var i=Ac.parse(K(it)),a=Object.keys(i.pointers).find(e=>i.pointers[e].value?.pos===n.from),o=i.pointers[a];a&&o&&o.value&&o.valueEnd&&(Oe(`pointer found, selecting inner contents of path:`,a,o),Lt(o.value.pos+1,o.valueEnd.pos-1))}}}function zt(){return rt(sn,{delay:300})}function Bt(){return!!K(Me)&&getComputedStyle(K(Me)).getPropertyValue(`--jse-theme`).includes(`dark`)}function Vt(e){var{path:t,message:r,severity:i}=e,{line:a,column:o,from:s,to:c}=g_(K(n).escapeValue(K(it)),t);return{path:t,line:a,column:o,from:s,to:c,message:r,severity:i,actions:[]}}function Ut(e,t){var{line:n,column:r,position:a,message:o}=e;return{path:[],line:n,column:r,from:a,to:a,severity:N_.error,message:o,actions:t&&!i()?[{name:`Auto repair`,apply:()=>Tt()}]:void 0}}function Wt(e){return{from:e.from||0,to:e.to||0,message:e.message||``,actions:e.actions,severity:e.severity}}function Gt(e,t,r){var i=S_(e,d(),h()),a=!cc(e,qe),o=qe;Oe(`setCodeMirrorContent`,{isChanged:a,emitChange:t,forceUpdate:r}),je&&(a||r)&&(qe=e,V(it,i),rn(K(it),m(),K(F))||je.dispatch({changes:{from:0,to:je.state.doc.length,insert:K(n).escapeValue(K(it))}}),st(),a&&t&&en(qe,o))}function Kt(e){return sb(e)?ge.fromJSON(e):void 0}function qt(){return Jt.apply(this,arguments)}function Jt(){return Jt=Xu(function*(){Oe(`refresh`),yield function(){return Xt.apply(this,arguments)}()}),Jt.apply(this,arguments)}function Yt(){if(je){var e=je?K(n).unescapeValue(je.state.doc.toString()):``,t=e!==K(it);if(Oe(`onChangeCodeMirrorValue`,{isChanged:t}),t){var r=qe;V(it,e),qe={text:K(it)},st(),en(qe,r),Jf(),tn()}}}function Xt(){return(Xt=Xu(function*(){if(Jf(),je){var e=Bt();return Oe(`updateTheme`,{dark:e}),je.dispatch({effects:[Ke.reconfigure(re.theme({},{dark:e}))]}),new Promise(e=>setTimeout(e))}return Promise.resolve()})).apply(this,arguments)}function Zt(e){var t=E.of(typeof e==`number`?` `.repeat(e):e);return e===`	`?[t]:[t,YE]}VC({onMount:kh,onDestroy:Ah,getWindow:()=>ev(K(Ne)),hasFocus:()=>bt&&document.hasFocus()||tv(K(Ne)),onFocus:A(),onBlur:()=>{$t(),P()()}});var Qt=He(Yt,300);function $t(){Qt.flush()}function en(e,t){y()&&y()(e,t,{contentErrors:cn(),patchResult:void 0})}function tn(){w()(nn(K(Pe).selection))}function nn(e){return L({type:j_.text},e.toJSON())}function rn(e,t,n){return!!e&&e.length>t&&!n}var an=B(qv,!0),on=B(void 0,!0);function sn(){if(rn(K(it),m(),K(F)))return[];var e=cn();if(ly(e)){var{parseError:t,isRepairable:n}=e;return[Wt(Ut(t,n))]}return uy(e)?e.validationErrors.map(Vt).map(Wt):[]}function cn(){Oe(`validate:start`),$t();var e=ln(K(n).escapeValue(K(it)),g(),h(),_());return ly(e)?(V(an,e.isRepairable?Jv:`invalid`),V(on,e.parseError),V(Ie,[])):(V(an,qv),V(on,void 0),V(Ie,e?.validationErrors||[])),Oe(`validate:end`),e}var ln=uu(zC);function un(){K(on)&&function(e){Oe(`select parse error`,e);var t=Ut(e,!1);Lt(t.from==null?0:t.from,t.to==null?0:t.to),dt()}(K(on))}var dn={icon:Tl,text:`Show me`,title:`Move to the parse error location`,onClick:un};W(()=>J(p()),()=>{V(n,R_({escapeControlCharacters:!1,escapeUnicodeCharacters:p()}))}),W(()=>J(c()),()=>{Gt(c(),!1,!1)}),W(()=>J(l()),()=>{(function(e){if(sb(e)){var t=Kt(e);!je||!t||K(Pe)&&K(Pe).selection.eq(t)||(Oe(`applyExternalSelection`,t),je.dispatch({selection:t}))}})(l())}),W(()=>J(g()),()=>{(function(e){Oe(`updateLinter`,e),je&&je.dispatch({effects:Ve.reconfigure(zt())})})(g())}),W(()=>J(d()),()=>{(function(e){je&&(Oe(`updateIndentation`,e),je.dispatch({effects:We.reconfigure(Zt(e))}))})(d())}),W(()=>J(f()),()=>{(function(e){je&&(Oe(`updateTabSize`,e),je.dispatch({effects:Ge.reconfigure(he.tabSize.of(e))}))})(f())}),W(()=>J(i()),()=>{(function(e){je&&(Oe(`updateReadOnly`,e),je.dispatch({effects:[Ue.reconfigure(he.readOnly.of(e))]}))})(i())}),W(()=>(K(ct),J(p())),()=>{K(ct)!==p()&&(V(ct,p()),Oe(`forceUpdateText`,{escapeUnicodeCharacters:p()}),je&&je.dispatch({changes:{from:0,to:je.state.doc.length,insert:K(n).escapeValue(K(it))}}))}),W(()=>(K(an),J(i()),Rl),()=>{V(r,K(an)!==Jv||i()?[dn]:[{icon:Rl,text:`Auto repair`,title:`Automatically repair JSON`,onClick:Tt},dn])}),um();var fn={focus:dt,collapse:ft,expand:vt,patch:xt,handlePatch:St,openTransformModal:Dt,refresh:qt,flush:$t,validate:cn};Og(!0);var pn,mn=tD(),hn=H(mn),gn=e=>{var t=z(()=>(K(it),q(()=>K(it).length===0))),n=z(()=>!K(t)),r=z(()=>!K(t)),a=z(()=>!K(t)),o=z(()=>!K(t)),s=z(()=>!K(t)),c=z(()=>!K(t));(function(e,t){tf(t,!1);var n=B(void 0,!0),r=$(t,`readOnly`,9,!1),i=$(t,`onExpandAll`,9),a=$(t,`onCollapseAll`,9),o=$(t,`onFormat`,9),s=$(t,`onCompact`,9),c=$(t,`onSort`,9),l=$(t,`onTransform`,9),u=$(t,`onToggleSearch`,9),d=$(t,`onUndo`,9),f=$(t,`onRedo`,9),p=$(t,`canExpandAll`,9),m=$(t,`canCollapseAll`,9),h=$(t,`canUndo`,9),g=$(t,`canRedo`,9),_=$(t,`canFormat`,9),v=$(t,`canCompact`,9),y=$(t,`canSort`,9),b=$(t,`canTransform`,9),x=$(t,`onRenderMenu`,9),S=B(void 0,!0),C=B(void 0,!0),w={type:`button`,icon:wl,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:u()},T=B(void 0,!0);W(()=>(J(i()),J(p())),()=>{V(S,{type:`button`,icon:nT,title:`Expand all`,className:`jse-expand-all`,onClick:i(),disabled:!p()})}),W(()=>(J(a()),J(m())),()=>{V(C,{type:`button`,icon:rT,title:`Collapse all`,className:`jse-collapse-all`,onClick:a(),disabled:!m()})}),W(()=>(J(r()),K(S),K(C),J(o()),J(_()),J(s()),J(v()),J(c()),J(y()),J(l()),J(b()),J(d()),J(h()),J(f()),J(g())),()=>{V(T,r()?[K(S),K(C),{type:`separator`},w,{type:`space`}]:[K(S),K(C),{type:`separator`},{type:`button`,icon:iT,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,className:`jse-format`,onClick:o(),disabled:r()||!_()},{type:`button`,icon:aT,title:`Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)`,className:`jse-compact`,onClick:s(),disabled:r()||!v()},{type:`separator`},{type:`button`,icon:ql,title:`Sort`,className:`jse-sort`,onClick:c(),disabled:r()||!y()},{type:`button`,icon:xl,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:l(),disabled:r()||!b()},w,{type:`separator`},{type:`button`,icon:ru,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:d(),disabled:!h()},{type:`button`,icon:tu,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:f(),disabled:!g()},{type:`space`}])}),W(()=>(J(x()),K(T)),()=>{V(n,x()(K(T))||K(T))}),um(),Og(!0),sw(e,{get items(){return K(n)}}),nf()})(e,{get readOnly(){return i()},onExpandAll:yt,onCollapseAll:I,onFormat:Ct,onCompact:wt,onSort:Et,onTransform:Ot,onToggleSearch:kt,onUndo:jt,onRedo:Mt,get canExpandAll(){return K(n)},get canCollapseAll(){return K(r)},get canFormat(){return K(a)},get canCompact(){return K(o)},get canSort(){return K(s)},get canTransform(){return K(c)},get canUndo(){return J(u()),q(()=>u().canUndo)},get canRedo(){return J(u()),q(()=>u().canRedo)},get onRenderMenu(){return Te()}})};Q(hn,e=>{a()&&e(gn)});var _n=U(hn,2),vn=e=>{var t=XE(),n=U(H(t),2),r=H(n),i=U(n,2);G(()=>ng(r,`width: ${K(ze)>0?K(Re)/K(ze)*100:0}%`)),Y(`click`,i,_t),Z(e,t)};Q(_n,e=>{K(Le)&&e(vn)});var yn=U(_n,2),bn=e=>{var t,n=z(()=>(K(it),J(m()),K(F),q(()=>rn(K(it),m(),K(F))))),i=$E(),a=Qp(i);Tg(a,e=>V(Me,e),()=>K(Me));var s=U(a,2),c=e=>{var t=ZE(),n=Qp(t),r=z(()=>(J(_x),J(m()),K(it),q(()=>`The JSON document is larger than ${_x(m())}, and may crash your browser when loading it in text mode. Actual size: ${_x(K(it).length)}.`)));WC(n,{get icon(){return Jl},type:`error`,get message(){return K(r)},actions:[{text:`Open anyway`,title:`Open the document in text mode. This may freeze or crash your browser.`,onClick:Nt},{text:`Open in tree mode`,title:`Open the document in tree mode. Tree mode can handle large documents.`,onClick:Pt},{text:`Cancel`,title:`Cancel opening this large document.`,onClick:Ft}],onClose:dt});var i=H(U(n,2));G(e=>_h(i,e),[()=>(J(vv),K(it),J(Rv),q(()=>vv(K(it)||``,Rv)))]),Z(e,t)};Q(s,e=>{K(n)&&e(c)});var l=U(s,2),u=e=>{var t=QE(),n=Qp(t),i=e=>{(function(e,t){tf(t,!1);var n=$(t,`editorState`,8),r=B(),i=B(),a=B(),o=B(),s=B();W(()=>J(n()),()=>{var e;V(r,(e=n())==null||(e=e.selection)==null||(e=e.main)==null?void 0:e.head)}),W(()=>(K(r),J(n())),()=>{var e;V(i,K(r)===void 0||(e=n())==null||(e=e.doc)==null?void 0:e.lineAt(K(r)))}),W(()=>K(i),()=>{V(a,K(i)===void 0?void 0:K(i).number)}),W(()=>(K(i),K(r)),()=>{V(o,K(i)!==void 0&&K(r)!==void 0?K(r)-K(i).from+1:void 0)}),W(()=>J(n()),()=>{var e;V(s,(e=n())==null||(e=e.selection)==null||(e=e.ranges)==null?void 0:e.reduce((e,t)=>e+t.to-t.from,0))}),um(),Og();var c=GE(),l=H(c),u=e=>{var t=HE(),n=H(t);G(()=>_h(n,`Line: ${K(a)??``}`)),Z(e,t)};Q(l,e=>{K(a)!==void 0&&e(u)});var d=U(l,2),f=e=>{var t=UE(),n=H(t);G(()=>_h(n,`Column: ${K(o)??``}`)),Z(e,t)};Q(d,e=>{K(o)!==void 0&&e(f)});var p=U(d,2),m=e=>{var t=WE(),n=H(t);G(()=>_h(n,`Selection: ${K(s)??``} characters`)),Z(e,t)};Q(p,e=>{K(s)!==void 0&&K(s)>0&&e(m)}),Z(e,c),nf()})(e,{get editorState(){return K(Pe)}})};Q(n,e=>{o()&&e(i)});var a=U(n,2),s=e=>{WC(e,{type:`error`,get icon(){return Jl},get message(){return K(on),q(()=>K(on).message)},get actions(){return K(r)},onClick:un,onClose:dt})};Q(a,e=>{K(on)&&e(s)});var c=U(a,2),l=e=>{var t=z(()=>[{icon:iT,text:`Format`,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,onClick:Ct},{icon:Ul,text:`No thanks`,title:`Close this message`,onClick:()=>V(Fe,!1)}]);WC(e,{type:`success`,message:`Do you want to format the JSON?`,get actions(){return K(t)},onClose:dt})},u=Op(()=>(K(on),K(Fe),J(k_),K(it),q(()=>!K(on)&&K(Fe)&&k_(K(it)))));Q(c,e=>{K(u)&&e(l)}),ZC(U(c,2),{get validationErrors(){return K(Ie)},selectError:It}),Z(e,t)};Q(l,e=>{K(n)||e(u)}),G(()=>t=eg(a,1,`jse-contents svelte-k2b9e6`,null,t,{"jse-hidden":K(n)})),Z(e,i)},xn=e=>{Z(e,eD())};return Q(yn,e=>{Ae?e(xn,-1):e(bn)}),Tg(mn,e=>V(Ne,e),()=>K(Ne)),G(()=>pn=eg(mn,1,`jse-text-mode svelte-k2b9e6`,null,pn,{"no-main-menu":!a()})),Z(e,mn),Cg(t,`focus`,dt),Cg(t,`collapse`,ft),Cg(t,`expand`,vt),Cg(t,`patch`,xt),Cg(t,`handlePatch`,St),Cg(t,`openTransformModal`,Dt),Cg(t,`refresh`,qt),Cg(t,`flush`,$t),Cg(t,`validate`,cn),nf(fn)}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var rD=X(`<button type="button"> </button>`);dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var iD=X(`<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>`),aD=X(`<button type="button"><span class="jse-column-name"> </span> <!></button>`);dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var oD=X(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),sD=X(`<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>`),cD=X(`<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>`),lD=X(`<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>`);function uD(e,t){tf(t,!0);var n=Op(()=>t.json?function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=[];return function e(r,i){ot(r)&&i.length<t&&Object.keys(r).forEach(t=>{e(r[t],i.concat(t))}),at(r)&&n.push(i)}(e,[]),n}(t.json).slice(0,99).filter(e=>e.length>0):[]),r=Op(()=>!sc(K(n))),i=Op(()=>t.json===void 0&&(t.text===``||t.text===void 0)),a=Op(()=>K(r)?`Object with nested arrays`:K(i)?`An empty document`:ot(t.json)?`An object`:at(t.json)?`An empty array`:`A ${Zg(t.json,t.parser)}`),o=lD(),s=H(U(H(o),2)),c=H(s),l=U(s,2),u=H(l),d=e=>{Z(e,dh(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},f=e=>{Z(e,oD())},p=e=>{var t=dh();G(()=>_h(t,`${K(a)??``} cannot be opened in table mode. You can open the document in tree mode instead.`)),Z(e,t)};Q(u,e=>{K(r)?e(d):K(i)&&!t.readOnly?e(f,1):e(p,-1)});var m=U(l,2);zh(m,17,()=>K(n),Lh,(e,n)=>{var r=Op(()=>function(e){return I(t.json,e).length}(K(n))),i=cD(),a=H(i),o=H(a),s=H(U(o)),c=U(a,2),l=H(c),u=U(c,2),d=e=>{var r=sD();ih(`click`,r,()=>t.extractPath(K(n))),Z(e,r)};Q(u,e=>{t.readOnly||e(d)}),G(e=>{_h(o,`"${e??``}" `),_h(s,`(${K(r)??``} ${K(r)===1?`item`:`items`})`),_h(l,t.readOnly?`View`:`Edit`)},[()=>Ox(K(n))]),ih(`click`,c,()=>t.openJSONEditorModal(K(n))),Z(e,i)});var h=U(m,2);G(()=>_h(c,K(a))),ih(`click`,o,()=>t.onClick()),ih(`click`,h,()=>t.onChangeMode(A_.tree)),Z(e,o),nf()}ah([`click`]),dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var dD=X(`<button type="button"><!></button>`);dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var fD=X(`<div class="jse-table-root-error svelte-1p86y3c"><!></div>`),pD=X(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),mD=X(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),hD=X(`<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>`),gD=X(`<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>`),_D=X(`<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>`),vD=X(`<td class="jse-table-cell svelte-1p86y3c"></td>`),yD=X(`<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>`),bD=X(`<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>`,1),xD=X(`<!> <!>`,1),SD=X(`<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>`,1),CD=X(`<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>`),wD=X(`<div role="table"><!> <!></div> <!> <!>`,1);function TD(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=Ig(`jsoneditor:TableMode`),{openAbsolutePopup:o,closeAbsolutePopup:s}=ef(`absolute-popup`),c=NC(),l=kc(),u=kc(),d=typeof window>`u`;a(`isSSR:`,d);var f=$(t,`readOnly`,9),p=$(t,`externalContent`,9),m=$(t,`externalSelection`,9),h=$(t,`history`,9),g=$(t,`truncateTextSize`,9),_=$(t,`mainMenuBar`,9),v=$(t,`escapeControlCharacters`,9),y=$(t,`escapeUnicodeCharacters`,9),b=$(t,`flattenColumns`,9),x=$(t,`parser`,9),S=$(t,`parseMemoizeOne`,9),C=$(t,`validator`,9),w=$(t,`validationParser`,9),T=$(t,`indentation`,9),E=$(t,`onChange`,9),ee=$(t,`onChangeMode`,9),te=$(t,`onSelect`,9),ne=$(t,`onUndo`,9),re=$(t,`onRedo`,9),ie=$(t,`onRenderValue`,9),ae=$(t,`onRenderMenu`,9),oe=$(t,`onRenderContextMenu`,9),se=$(t,`onFocus`,9),D=$(t,`onBlur`,9),O=$(t,`onSortModal`,9),ce=$(t,`onTransformModal`,9),le=$(t,`onJSONEditorModal`,9),ue=B(void 0,!0),de=B(void 0,!0),k=B(void 0,!0),fe=B(void 0,!0),pe=B(void 0,!0);VC({onMount:kh,onDestroy:Ah,getWindow:()=>ev(K(de)),hasFocus:()=>Te&&document.hasFocus()||tv(K(de)),onFocus:()=>{Ee=!0,se()&&se()()},onBlur:()=>{Ee=!1,D()&&D()()}});var me,A=B(void 0,!0),he=B(void 0,!0),j=B(void 0,!0),M=B(void 0,!0),ge=B(void 0,!0),_e=B(void 0,!0),N=B(!1,!0),P=B(!1,!0);function ve(e){V(_e,(me=e)?px(K(A),me.items):void 0)}function ye(e){return be.apply(this,arguments)}function be(){return(be=Xu(function*(e){V(F,void 0),yield et(e)})).apply(this,arguments)}function xe(){V(N,!1),V(P,!1),Xe()}var Se=B(1e4,!0),Ce=B([],!0),we=B(void 0,!0),Te=!1,Ee=!1,De=B(!1,!0),Oe=B({},!0),ke=B(600,!0),Ae=B(0,!0),je=18;function Me(e){V(F,e)}function Ne(e){K(F)&&e!==void 0&&(Tt(e,Rb(K(F)))&&Tt(e,Lb(K(F)))||(a(`clearing selection: path does not exist anymore`,K(F)),V(F,void 0)))}var Pe=B(K(A)===void 0?void 0:Sy({json:K(A)}),!0),F=B(ob(m())?m():void 0,!0),Fe=B(void 0,!0),Ie=B(!1,!0);function Le(e){if(!f()){a(`onSortByHeader`,e);var t=e.sortDirection===F_.desc?-1:1;Ge(lT(K(A),[],e.path,t),(t,n)=>({state:n,sortedColumn:e}))}}kh(()=>{K(F)&&nt(Lb(K(F)))});var Re=B(void 0,!0);function ze(e){if(e.json!==void 0||e.text!==void 0){var t=K(A)!==void 0&&e.json!==void 0;h().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:bb(e.selection),sortedColumn:e.sortedColumn},redo:{patch:t?[{op:`replace`,path:``,value:K(A)}]:void 0,json:K(A),text:K(he),documentState:K(Pe),textIsRepaired:K(Ie),selection:bb(K(F)),sortedColumn:K(Fe)}})}}var Be=B([],!0),Ve=uu(RC);function He(e,t,n,r){PC(()=>{var i;try{i=Ve(e,t,n,r)}catch(e){i=[{path:[],message:`Failed to validate: `+e.message,severity:N_.warning}]}cc(i,K(Be))||(a(`validationErrors changed:`,i),V(Be,i))},e=>a(`validationErrors updated in ${e} ms`))}function Ue(){return a(`validate`),K(j)?{parseError:K(j),isRepairable:!1}:(He(K(A),C(),x(),w()),sc(K(Be))?void 0:{validationErrors:K(Be)})}function We(e,t){if(a(`patch`,e,t),K(A)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=K(A),r={json:void 0,text:K(he),documentState:K(Pe),selection:bb(K(F)),sortedColumn:K(Fe),textIsRepaired:K(Ie)},i=ex(K(A),e),o=Py(K(A),K(Pe),e),s=BT(K(Fe),e,K(Ce)),c=typeof t==`function`?t(o.json,o.documentState,K(F)):void 0;return V(A,c?.json===void 0?o.json:c.json),V(Pe,c?.state===void 0?o.documentState:c.state),V(F,c?.selection===void 0?K(F):c.selection),V(Fe,c?.sortedColumn===void 0?s:c.sortedColumn),V(he,void 0),V(Ie,!1),V(M,void 0),V(ge,void 0),V(j,void 0),h().add({type:`tree`,undo:L({patch:i},r),redo:{patch:e,json:void 0,text:void 0,documentState:K(Pe),selection:bb(K(F)),sortedColumn:K(Fe),textIsRepaired:K(Ie)}}),{json:K(A),previousJson:n,undo:i,redo:e}}function Ge(e,t){a(`handlePatch`,e,t);var n={json:K(A),text:K(he)},r=We(e,t);return Ke(n,r),r}function Ke(e,t){if((e.json!==void 0||e?.text!==void 0)&&E()){if(K(he)!==void 0){var n={text:K(he),json:void 0};E()(n,e,{contentErrors:Ue(),patchResult:t})}else if(K(A)!==void 0){var r={text:void 0,json:K(A)};E()(r,e,{contentErrors:Ue(),patchResult:t})}}}function qe(e){a(`pasted json as text`,e),V(M,e)}function Je(e){a(`pasted multiline text`,{pastedText:e}),V(ge,e)}function Ye(e){var t=parseInt(e[0],10),n=[String(t+1),...e.slice(1)];return Tt(K(A),n)?Cb(n):Cb(e)}function Xe(){a(`focus`),K(fe)&&(K(fe).focus(),K(fe).select())}function Ze(e){V(Ae,e.target.scrollTop)}function Qe(){K(F)||V(F,function(){if(at(K(A))&&!sc(K(A))&&!sc(K(Ce)))return Cb([`0`,...K(Ce)[0]])}())}function $e(){if(K(Ie)&&K(A)!==void 0){var e={json:K(A),text:K(he)},t={json:K(A),documentState:K(Pe),selection:K(F),sortedColumn:K(Fe),text:K(he),textIsRepaired:K(Ie)};V(he,void 0),V(Ie,!1),Ne(K(A)),ze(t),Ke(e,void 0)}return{json:K(A),text:K(he)}}function et(e){var{scrollToWhenVisible:t=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=K(N)?Zv:0,r=PT(e,K(Ce),Oe,je),i=r-K(Ae)+n+je,o=rt(e);if(a(`scrollTo`,{path:e,top:r,scrollTop:K(Ae),elem:o}),!K(k))return Promise.resolve();var s=K(k).getBoundingClientRect();if(o&&!t){var l=o.getBoundingClientRect();if(l.bottom>s.top&&l.top<s.bottom)return Promise.resolve()}var u=-Math.max(n+2*je,s.height/4);return new Promise(o?t=>{c(o,{container:K(k),offset:u,duration:300,callback:()=>{tt(e),t()}})}:t=>{c(i,{container:K(k),offset:u,duration:300,callback:()=>{Jf(),tt(e),t()}})})}function tt(e){var t=rt(e);if(t&&K(k)){var n=K(k).getBoundingClientRect(),r=t.getBoundingClientRect();if(r.right>n.right){var i=r.right-n.right;Vp(k,K(k).scrollLeft+=i)}if(r.left<n.left){var a=n.left-r.left;Vp(k,K(k).scrollLeft-=a)}}}function nt(e){(function(e){if(K(k)){var{rowIndex:t}=FT(e,K(Ce)),n=PT(e,K(Ce),Oe,je),r=n+(Oe[t]||je),i=je,a=K(k).getBoundingClientRect(),o=K(Ae),s=K(Ae)+a.height-i;if(r>s){var c=r-s;Vp(k,K(k).scrollTop+=c)}if(n<o){var l=o-n;Vp(k,K(k).scrollTop-=l)}}})(e),tt(e)}function rt(e){var t=K(Ce).find(t=>yb(e.slice(1),t)),n=t?e.slice(0,1).concat(t):e;return K(k)?.querySelector(`td[data-path="${iv(n)}"]`)??void 0}function it(e){var{anchor:t,left:n,top:r,width:i,height:a,offsetTop:c,offsetLeft:l,showTip:u}=e,d=function(e){var{json:t,documentState:n,selection:r,readOnly:i,onEditValue:a,onEditRow:o,onToggleEnforceString:s,onCut:c,onCopy:l,onPaste:u,onRemove:d,onDuplicateRow:f,onInsertBeforeRow:p,onInsertAfterRow:m,onRemoveRow:h}=e,g=t!==void 0,_=!!r,v=t!==void 0&&r?I(t,Lb(r)):void 0,y=g&&(ib(r)||nb(r)||rb(r)),b=!i&&g&&r!==void 0&&_b(r),x=b&&!Gg(v),S=!i&&y,C=r!==void 0&&Uy(t,n,Lb(r));return[{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`label`,text:`Table cell:`},{type:`dropdown-button`,main:{type:`button`,onClick:()=>a(),icon:Wl,text:`Edit`,title:`Edit the value (Double-click on the value)`,disabled:!b},width:`11em`,items:[{type:`button`,icon:Wl,text:`Edit`,title:`Edit the value (Double-click on the value)`,onClick:()=>a(),disabled:!b},{type:`button`,icon:C?Ml:iu,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!x}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:Yl,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!S},width:`10em`,items:[{type:`button`,icon:Yl,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:i||!y},{type:`button`,icon:Yl,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:i||!y}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:eu,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!y},width:`12em`,items:[{type:`button`,icon:eu,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!1),disabled:!y},{type:`button`,icon:eu,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!y}]},{type:`button`,onClick:()=>u(),icon:yl,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:i||!_},{type:`button`,onClick:()=>d(),icon:zl,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!y}]},{type:`column`,items:[{type:`label`,text:`Table row:`},{type:`button`,onClick:()=>o(),icon:Wl,text:`Edit row`,title:`Edit the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>f(),icon:jl,text:`Duplicate row`,title:`Duplicate the current row (Ctrl+D)`,disabled:i||!_||!g},{type:`button`,onClick:()=>p(),icon:$l,text:`Insert before`,title:`Insert a row before the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>m(),icon:$l,text:`Insert after`,title:`Insert a row after the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>h(),icon:zl,text:`Remove row`,title:`Remove current row`,disabled:i||!_||!g}]}]}]}({json:K(A),documentState:K(Pe),selection:K(F),readOnly:f(),onEditValue:ut,onEditRow:dt,onToggleEnforceString:ft,onCut:St,onCopy:wt,onPaste:ht,onRemove:kt,onDuplicateRow:Mt,onInsertBeforeRow:Nt,onInsertAfterRow:Pt,onRemoveRow:Ft}),p=oe()(d)??d;if(!1!==p){var m={left:n,top:r,offsetTop:c,offsetLeft:l,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{Te=!1,Xe()}};Te=!0;var h=o(mE,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:p,onRequestClose(){s(h),Xe()}},m)}}function st(e){if(!kb(K(F)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==K(fe))it({left:e.clientX,top:e.clientY,width:Xv,height:Yv,showTip:!1});else{var t=K(k)?.querySelector(`.jse-table-cell.jse-selected-value`);if(t)it({anchor:t,offsetTop:2,width:Xv,height:Yv,showTip:!1});else{var n=K(k)?.getBoundingClientRect();n&&it({top:n.top+2,left:n.left+2,width:Xv,height:Yv,showTip:!1})}}}function ct(e){it({anchor:nv(e.target,`BUTTON`),offsetTop:0,width:Xv,height:Yv,showTip:!0})}function ut(){if(!f()&&K(F)){var e=Lb(K(F));Gg(I(K(A),e))?Ut(e):V(F,Cb(e))}}function dt(){!f()&&K(F)&&Ut(Lb(K(F)).slice(0,1))}function ft(){if(!f()&&rb(K(F))){var e=K(F).path,t=Dt(e),n=I(K(A),e),r=!Uy(K(A),K(Pe),e),i=r?String(n):e_(String(n),x());a(`handleToggleEnforceString`,{enforceString:r,value:n,updatedValue:i}),Ge([{op:`replace`,path:t,value:i}],(t,n)=>({state:Ry(K(A),n,e,{type:`value`,enforceString:r})}))}}function pt(){return mt.apply(this,arguments)}function mt(){return(mt=Xu(function*(){if(a(`apply pasted json`,K(M)),K(M)){var{onPasteAsJson:e}=K(M);e(),setTimeout(Xe)}})).apply(this,arguments)}function ht(){return gt.apply(this,arguments)}function gt(){return(gt=Xu(function*(){try{Rt(yield navigator.clipboard.readText())}catch(e){console.error(e),V(De,!0)}})).apply(this,arguments)}function _t(){return vt.apply(this,arguments)}function vt(){return(vt=Xu(function*(){a(`apply pasted multiline text`,K(ge)),K(ge)&&(Rt(JSON.stringify(K(ge))),setTimeout(Xe))})).apply(this,arguments)}function yt(){a(`clear pasted json`),V(M,void 0),Xe()}function bt(){a(`clear pasted multiline text`),V(ge,void 0),Xe()}function xt(){ee()(A_.text)}function St(e){return Ct.apply(this,arguments)}function Ct(){return(Ct=Xu(function*(e){yield HT({json:K(A),selection:K(F),indentation:e?T():void 0,readOnly:f(),parser:x(),onPatch:Ge})})).apply(this,arguments)}function wt(){return Ot.apply(this,arguments)}function Ot(){return Ot=Xu(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];K(A)!==void 0&&(yield WT({json:K(A),selection:K(F),indentation:e?T():void 0,parser:x()}))}),Ot.apply(this,arguments)}function kt(){qT({json:K(A),text:K(he),selection:K(F),keepSelection:!0,readOnly:f(),onChange:E(),onPatch:Ge})}function jt(e){f()||(a(`extract`,{path:e}),Ge(Jb(K(A),Cb(e))))}function Mt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Ab(n)){var{rowIndex:o,columnIndex:s}=FT(Lb(n),r);VT(`duplicate row`,{rowIndex:o}),a(qb(t,[[String(o)]]),(e,n)=>({state:n,selection:Cb(IT({rowIndex:o<t.length?o+1:o,columnIndex:s},r))}))}})({json:K(A),selection:K(F),columns:K(Ce),readOnly:f(),onPatch:Ge})}function Nt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Ab(n)){var{rowIndex:o}=FT(Lb(n),r);VT(`insert before row`,{rowIndex:o}),a(Wb(t,[String(o)],[{key:``,value:ot(t[0])?{}:``}]))}})({json:K(A),selection:K(F),columns:K(Ce),readOnly:f(),onPatch:Ge})}function Pt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Ab(n)){var{rowIndex:o,columnIndex:s}=FT(Lb(n),r);VT(`insert after row`,{rowIndex:o});var c=o+1,l=[String(c)],u=[{key:``,value:ot(t[0])?{}:``}];a(c<t.length?Wb(t,l,u):Gb(t,[],u),(e,t)=>({state:t,selection:Cb(IT({rowIndex:c,columnIndex:s},r))}))}})({json:K(A),selection:K(F),columns:K(Ce),readOnly:f(),onPatch:Ge})}function Ft(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Ab(n)){var{rowIndex:o,columnIndex:s}=FT(Lb(n),r);VT(`remove row`,{rowIndex:o}),a(Xb([[String(o)]]),(e,t)=>{var n=o<e.length?o:o>0?o-1:void 0,i=n===void 0?void 0:Cb(IT({rowIndex:n,columnIndex:s},r));return VT(`remove row new selection`,{rowIndex:o,newRowIndex:n,newSelection:i}),{state:t,selection:i}})}})({json:K(A),selection:K(F),columns:K(Ce),readOnly:f(),onPatch:Ge})}function It(){return(It=Xu(function*(e){yield YT({char:e,selectInside:!1,json:K(A),selection:K(F),readOnly:f(),parser:x(),onPatch:Ge,onReplaceJson:zt,onSelect:Me})})).apply(this,arguments)}function Lt(e){e.preventDefault(),Rt(e.clipboardData?.getData(`text/plain`))}function Rt(e){e!==void 0&&KT({clipboardText:e,json:K(A),selection:K(F),readOnly:f(),parser:x(),onPatch:Ge,onChangeText:Bt,onPasteMultilineText:Je,openRepairModal:Wt})}function zt(e,t){var n={json:K(A),text:K(he)},r={json:K(A),documentState:K(Pe),selection:K(F),sortedColumn:K(Fe),text:K(he),textIsRepaired:K(Ie)},i=Dy(e,K(Pe)),a=typeof t==`function`?t(e,i,K(F)):void 0;V(A,a?.json===void 0?e:a.json),V(Pe,a?.state===void 0?i:a.state),V(F,a?.selection===void 0?K(F):a.selection),V(Fe,void 0),V(he,void 0),V(Ie,!1),V(j,void 0),Ne(K(A)),ze(r),Ke(n,void 0)}function Bt(e,t){a(`handleChangeText`);var n={json:K(A),text:K(he)},r={json:K(A),documentState:K(Pe),selection:K(F),sortedColumn:K(Fe),text:K(he),textIsRepaired:K(Ie)};try{V(A,S()(e)),V(Pe,Dy(K(A),K(Pe))),V(he,void 0),V(Ie,!1),V(j,void 0)}catch(t){try{V(A,S()(Fn(e))),V(Pe,Dy(K(A),K(Pe))),V(he,e),V(Ie,!0),V(j,void 0)}catch{V(A,void 0),V(Pe,void 0),V(he,e),V(Ie,!1),V(j,K(he)===``?void 0:h_(K(he),t.message||String(t)))}}if(typeof t==`function`){var i=t(K(A),K(Pe),K(F));V(A,i?.json===void 0?K(A):i.json),V(Pe,i?.state===void 0?K(Pe):i.state),V(F,i?.selection===void 0?K(F):i.selection)}Ne(K(A)),ze(r),Ke(n,void 0)}function Vt(e){a(`select validation error`,e),V(F,Cb(e.path)),et(e.path)}function Ht(e){if(K(A)!==void 0){var{id:t,onTransform:n,onClose:r}=e,i=e.rootPath||[];Te=!0,ce()({id:t||u,json:K(A),rootPath:i||[],onTransform:e=>{n?n({operations:e,json:K(A),transformedJson:At(K(A),e)}):(a(`onTransform`,i,e),Ge(e))},onClose:()=>{Te=!1,setTimeout(Xe),r&&r()}})}}function Ut(e){a(`openJSONEditorModal`,{path:e}),Te=!0,le()({content:{json:I(K(A),e)},path:e,onPatch:Ge,onClose:()=>{Te=!1,setTimeout(Xe)}})}function Wt(e,t){V(pe,{text:e,onParse:e=>f_(e,e=>u_(e,x())),onRepair:p_,onApply:t,onClose:Xe})}function Gt(){(function(e){f()||K(A)===void 0||(Te=!0,O()({id:l,json:K(A),rootPath:e,onSort:t=>{var{operations:n,itemPath:r,direction:i}=t;a(`onSort`,n,e,r,i),Ge(n,(e,t)=>({state:t,sortedColumn:{path:r,sortDirection:i===-1?F_.desc:F_.asc}}))},onClose:()=>{Te=!1,setTimeout(Xe)}}))})([])}function Kt(){Ht({rootPath:[]})}function qt(e){a(`openFind`,{findAndReplace:e}),V(N,!1),V(P,!1),Jf(),V(N,!0),V(P,e)}function Jt(){if(!f()&&h().canUndo){var e=h().undo();if(yy(e)){var t={json:K(A),text:K(he)};V(A,e.undo.patch?At(K(A),e.undo.patch):e.undo.json),V(Pe,e.undo.documentState),V(F,e.undo.selection),V(Fe,e.undo.sortedColumn),V(he,e.undo.text),V(Ie,e.undo.textIsRepaired),V(j,void 0),a(`undo`,{item:e,json:K(A)}),Ke(t,e.undo.patch&&e.redo.patch?{json:K(A),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),Xe(),K(F)&&et(Lb(K(F)),{scrollToWhenVisible:!1})}else ne()(e)}}function Yt(){if(!f()&&h().canRedo){var e=h().redo();if(yy(e)){var t={json:K(A),text:K(he)};V(A,e.redo.patch?At(K(A),e.redo.patch):e.redo.json),V(Pe,e.redo.documentState),V(F,e.redo.selection),V(Fe,e.redo.sortedColumn),V(he,e.redo.text),V(Ie,e.redo.textIsRepaired),V(j,void 0),a(`redo`,{item:e,json:K(A)}),Ke(t,e.undo.patch&&e.redo.patch?{json:K(A),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),Xe(),K(F)&&et(Lb(K(F)),{scrollToWhenVisible:!1})}else re()(e)}}function Xt(e){V(ke,e.getBoundingClientRect().height)}W(()=>(J(v()),J(y())),()=>{V(ue,R_({escapeControlCharacters:v(),escapeUnicodeCharacters:y()}))}),W(()=>K(N),()=>{(function(e){if(K(k)){var t=e?Zv:-100;K(k).scrollTo({top:Vp(k,K(k).scrollTop+=t),left:K(k).scrollLeft})}})(K(N))}),W(()=>J(p()),()=>{(function(e){var t={json:K(A)},n=v_(e)?e.text!==K(he):!cc(t.json,e.json);if(a(`update external content`,{isChanged:n}),n){var r={json:K(A),documentState:K(Pe),selection:K(F),sortedColumn:K(Fe),text:K(he),textIsRepaired:K(Ie)};if(v_(e))try{V(A,S()(e.text)),V(Pe,Dy(K(A),K(Pe))),V(he,e.text),V(Ie,!1),V(j,void 0)}catch(t){try{V(A,S()(Fn(e.text))),V(Pe,Dy(K(A),K(Pe))),V(he,e.text),V(Ie,!0),V(j,void 0)}catch{V(A,void 0),V(Pe,void 0),V(he,e.text),V(Ie,!1),V(j,K(he)===``?void 0:h_(K(he),t.message||String(t)))}}else V(A,e.json),V(Pe,Dy(K(A),K(Pe))),V(he,void 0),V(Ie,!1),V(j,void 0);Ne(K(A)),V(Fe,void 0),ze(r)}})(p())}),W(()=>J(m()),()=>{(function(e){cc(K(F),e)||(a(`applyExternalSelection`,{selection:K(F),externalSelection:e}),ob(e)&&V(F,e))})(m())}),W(()=>(K(Ce),K(A),J(b()),K(Se)),()=>{V(Ce,at(K(A))?function(e,t){var n=new Set(t.map(Dt)),r=new Set(e.map(Dt));for(var i of n)r.has(i)||n.delete(i);for(var a of r)n.has(a)||n.add(a);return[...n].map(Et)}(AT(K(A),b(),K(Se)),K(Ce)):[])}),W(()=>(K(A),K(Ce)),()=>{V(we,!(!K(A)||sc(K(Ce))))}),W(()=>(K(A),K(Se)),()=>{V(n,Array.isArray(K(A))&&K(A).length>K(Se))}),W(()=>(K(Ae),K(ke),K(A),K(N),Zv),()=>{V(r,NT(K(Ae),K(ke),K(A),Oe,je,K(N)?Zv:0))}),W(()=>K(A),()=>{K(A),K(k)&&K(k).scrollTo({top:K(k).scrollTop,left:K(k).scrollLeft})}),W(()=>K(F),()=>{var e=K(F);cc(e,m())||(a(`onSelect`,e),te()(e))}),W(()=>(J(f()),J(g()),J(x()),K(ue),K(A),K(Pe),J(ie())),()=>{V(Re,{mode:A_.table,readOnly:f(),truncateTextSize:g(),parser:x(),normalization:K(ue),getJson:()=>K(A),getDocumentState:()=>K(Pe),findElement:rt,findNextInside:Ye,focus:Xe,onPatch:(e,t)=>Ge(function(e,t){return e.flatMap(e=>{if(lt(e)){var n=Et(e.path);if(n.length>0){for(var r=[e],i=rc(n);i.length>0&&!Tt(t,i);)r.unshift({op:`add`,path:Dt(i),value:{}}),i=rc(i);return r}}return e})}(e,K(A)),t),onSelect:Me,onFind:qt,onPasteJson:qe,onRenderValue:ie()})}),W(()=>(K(A),J(C()),J(x()),J(w())),()=>{He(K(A),C(),x(),w())}),W(()=>(K(Be),K(Ce)),()=>{V(i,LT(K(Be),K(Ce)))}),um();var Zt={validate:Ue,patch:We,focus:Xe,acceptAutoRepair:$e,scrollTo:et,findElement:rt,openTransformModal:Ht};Og(!0);var Qt=wD();Y(`mousedown`,Mp,function(e){!Q_(e.target,e=>e===K(de))&&kb(K(F))&&(a(`click outside the editor, exit edit mode`),V(F,bb(K(F))),Ee&&K(fe)&&(K(fe).focus(),K(fe).blur()),a(`blur (outside editor)`),K(fe)&&K(fe).blur())});var $t,en=Qp(Qt),tn=H(en),nn=e=>{(function(e,t){tf(t,!1);var n=$(t,`containsValidArray`,9),r=$(t,`readOnly`,9),i=$(t,`showSearch`,13,!1),a=$(t,`history`,9),o=$(t,`onSort`,9),s=$(t,`onTransform`,9),c=$(t,`onContextMenu`,9),l=$(t,`onUndo`,9),u=$(t,`onRedo`,9),d=$(t,`onRenderMenu`,9);function f(){i(!i())}var p=B(void 0,!0),m=B(void 0,!0);W(()=>(J(r()),J(o()),J(n()),J(s()),J(c()),J(l()),J(a()),J(u())),()=>{V(p,r()?[{type:`space`}]:[{type:`button`,icon:ql,title:`Sort`,className:`jse-sort`,onClick:o(),disabled:r()||!n()},{type:`button`,icon:xl,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:s(),disabled:r()||!n()},{type:`button`,icon:wl,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:f,disabled:!n()},{type:`button`,icon:kl,title:Uv,className:`jse-contextmenu`,onClick:c()},{type:`separator`},{type:`button`,icon:ru,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:l(),disabled:!a().canUndo},{type:`button`,icon:tu,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:u(),disabled:!a().canRedo},{type:`space`}])}),W(()=>(J(d()),K(p)),()=>{V(m,d()(K(p))||K(p))}),um(),Og(!0),sw(e,{get items(){return K(m)}}),nf()})(e,{get containsValidArray(){return K(we)},get readOnly(){return f()},get history(){return h()},onSort:Gt,onTransform:Kt,onUndo:Jt,onRedo:Yt,onContextMenu:ct,get onRenderMenu(){return ae()},get showSearch(){return K(N)},set showSearch(e){V(N,e)},$$legacy:!0})};Q(tn,e=>{_()&&e(nn)});var rn=U(tn,2),an=e=>{var t=SD(),a=Qp(t),o=H(a);o.readOnly=!0,Tg(o,e=>V(fe,e),()=>K(fe));var s=U(a,2),c=e=>{var t=bD(),a=Qp(t);OT(H(a),{get json(){return K(A)},get documentState(){return K(Pe)},get parser(){return x()},get showSearch(){return K(N)},get showReplace(){return K(P)},get readOnly(){return f()},get columns(){return K(Ce)},onSearch:ve,onFocus:ye,onPatch:Ge,onClose:xe});var o=U(a,2),s=H(H(H(o))),c=H(s),l=H(c),u=e=>{var t=z(()=>(J(RT),K(i),q(()=>RT([],K(i)?.root)))),n=fh(),r=Qp(n),a=e=>{var n=fD();ww(H(n),{get validationError(){return K(t)},get onExpand(){return IE}}),Z(e,n)};Q(r,e=>{K(t)&&e(a)}),Z(e,n)},d=Op(()=>(J(sc),K(i),q(()=>!sc(K(i)?.root))));Q(l,e=>{K(d)&&e(u)});var p=U(c);zh(p,1,()=>K(Ce),Lh,(e,t)=>{var n=pD();(function(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=$(t,`path`,9),o=$(t,`sortedColumn`,9),s=$(t,`readOnly`,9),c=$(t,`onSort`,9);W(()=>(J(a()),Ox),()=>{V(n,sc(a())?`values`:Ox(a()))}),W(()=>(J(o()),J(a())),()=>{V(r,o()&&cc(a(),o()?.path)?o().sortDirection:void 0)}),W(()=>(K(r),Qv),()=>{V(i,K(r)?Qv[K(r)]:void 0)}),um(),Og(!0);var l,u=aD(),d=H(u),f=H(d),p=U(d,2),m=e=>{var t=iD(),n=H(t),a=z(()=>(K(r),J(F_),J(nu),J(Zl),q(()=>K(r)===F_.asc?nu:Zl)));Ov(n,{get data(){return K(a)}}),G(()=>mg(t,`title`,`Currently sorted in ${K(i)} order`)),Z(e,t)};Q(p,e=>{K(r)!==void 0&&e(m)}),G(e=>{l=eg(u,1,`jse-column-header svelte-5pxwfq`,null,l,{"jse-readonly":s()}),mg(u,`title`,s()?K(n):K(n)+` (Click to sort the data by this column)`),_h(f,e)},[()=>(J(vv),K(n),J(50),q(()=>vv(K(n),50)))]),Y(`click`,u,function(){s()||c()({path:a(),sortDirection:K(r)===F_.asc?F_.desc:F_.asc})}),Z(e,u),nf()})(H(n),{get path(){return K(t)},get sortedColumn(){return K(Fe)},get readOnly(){return f()},onSort:Le}),Z(e,n)});var m=U(p),h=e=>{var t=mD(),n=H(t),r=z(()=>(K(A),q(()=>Array.isArray(K(A))?K(A).length:0)));(function(e,t){tf(t,!1);var n=$(t,`count`,9),r=$(t,`maxSampleCount`,9),i=$(t,`readOnly`,9),a=$(t,`onRefresh`,9);Og(!0);var o,s=dD();Ov(H(s),{get data(){return vl}}),G(()=>{o=eg(s,1,`jse-column-header svelte-1wgrwv3`,null,o,{"jse-readonly":i()}),mg(s,`title`,`The Columns are created by sampling ${r()} items out of ${n()}. If you're missing a column, click here to sample all of the items instead of a subset. This is slower.`)}),Y(`click`,s,()=>a()()),Z(e,s),nf()})(n,{get count(){return K(r)},get maxSampleCount(){return K(Se)},get readOnly(){return f()},onRefresh:()=>V(Se,1/0)}),Z(e,t)};Q(m,e=>{K(n)&&e(h)});var g,_,v=U(s),y=H(v),b=U(v);zh(b,1,()=>(K(r),q(()=>K(r).visibleItems)),Lh,(e,t,a)=>{var o=z(()=>(K(r),q(()=>K(r).startIndex+a))),s=z(()=>(K(i),J(K(o)),q(()=>K(i).rows[K(o)]))),c=z(()=>(J(RT),J(K(o)),J(K(s)),q(()=>RT([String(K(o))],K(s)?.row)))),l=z(()=>(J(Iy),K(A),K(_e),J(K(o)),q(()=>Iy(K(A),K(_e),[String(K(o))])))),u=yD(),d=H(u);Ih(d,()=>K(o),e=>{var t=hD(),n=H(t),r=U(n),i=e=>{ww(e,{get validationError(){return K(c)},get onExpand(){return IE}})};Q(r,e=>{K(c)&&e(i)}),qh(t,(e,t)=>_E?.(e,t),()=>e=>function(e,t){Oe[t]=e.getBoundingClientRect().height}(e,K(o))),G(()=>_h(n,`${K(o)??``} `)),Z(e,t)});var p=U(d);zh(p,1,()=>K(Ce),Lh,(e,n,r,i)=>{var a,c=z(()=>(J(K(o)),K(n),q(()=>[String(K(o))].concat(K(n))))),u=z(()=>(J(I),K(t),K(n),q(()=>I(K(t),K(n))))),d=z(()=>(J(rb),K(F),J(yb),J(K(c)),q(()=>rb(K(F))&&yb(K(F).path,K(c))))),p=z(()=>(J(K(s)),q(()=>K(s)?.columns[r]))),m=z(()=>(J(RT),J(K(c)),J(K(p)),q(()=>RT(K(c),K(p))))),h=_D(),g=H(h),_=H(g),v=e=>{var r=z(()=>(J(mx),J(Iy),K(t),J(K(l)),K(n),q(()=>mx(Iy(K(t),K(l),K(n)))))),i=z(()=>(J(K(r)),q(()=>!!K(r)&&K(r).some(e=>e.active)))),a=z(()=>(J(sc),J(K(r)),q(()=>!sc(K(r)))));(function(e,t){tf(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`parser`,9),a=$(t,`isSelected`,9),o=$(t,`containsSearchResult`,9),s=$(t,`containsActiveSearchResult`,9),c=$(t,`onEdit`,9);Og(!0);var l,u=rD(),d=H(u);G(e=>{l=eg(u,1,`jse-inline-value svelte-1jv89ui`,null,l,{"jse-selected":a(),"jse-highlight":o(),"jse-active":s()}),_h(d,e)},[()=>(J(vv),J(i()),J(r()),J(50),q(()=>vv(i().stringify(r())??``,50)))]),Y(`dblclick`,u,()=>c()(n())),Z(e,u),nf()})(e,{get path(){return K(c)},get value(){return K(u)},get parser(){return x()},get isSelected(){return K(d)},get containsSearchResult(){return K(a)},get containsActiveSearchResult(){return K(i)},onEdit:Ut})},y=Op(()=>(J(Gg),J(K(u)),q(()=>Gg(K(u))))),b=e=>{var t=z(()=>(J(Iy),K(A),K(_e),J(K(c)),q(()=>Iy(K(A),K(_e),K(c))?.searchResults))),n=z(()=>K(u)===void 0?``:K(u)),r=z(()=>(J(Uy),K(A),K(Pe),J(K(c)),q(()=>Uy(K(A),K(Pe),K(c))))),i=z(()=>K(d)?K(F):void 0);bw(e,{get path(){return K(c)},get value(){return K(n)},get enforceString(){return K(r)},get selection(){return K(i)},get searchResultItems(){return K(t)},get context(){return K(Re)}})};Q(_,e=>{K(y)?e(v):e(b,-1)});var S=U(_),C=e=>{var t=gD();gw(H(t),{selected:!0,onContextMenu:it}),Z(e,t)},w=Op(()=>(J(f()),J(K(d)),J(kb),K(F),q(()=>!f()&&K(d)&&!kb(K(F)))));Q(S,e=>{K(w)&&e(C)});var T=U(g,2),E=e=>{ww(e,{get validationError(){return K(m)},get onExpand(){return IE}})};Q(T,e=>{K(m)&&e(E)}),G(e=>{mg(h,`data-path`,e),a=eg(g,1,`jse-value-outer svelte-1p86y3c`,null,a,{"jse-selected-value":K(d)})},[()=>(J(iv),J(K(c)),q(()=>iv(K(c))))]),Z(e,h)});var m=U(p),h=e=>{Z(e,vD())};Q(m,e=>{K(n)&&e(h)}),Z(e,u)});var S,C=H(U(b));Tg(o,e=>V(k,e),()=>K(k)),qh(o,(e,t)=>_E?.(e,t),()=>Xt),lm(()=>Y(`scroll`,o,Ze));var w=U(o,2),T=e=>{var t=z(()=>(K(M),q(()=>`You pasted a JSON ${Array.isArray(K(M).contents)?`array`:`object`} as text`))),n=z(()=>[{icon:Rl,text:`Paste as JSON instead`,title:`Paste the text as JSON instead of a single value`,onMouseDown:pt},{text:`Leave as is`,title:`Keep the pasted content as a single value`,onClick:yt}]);WC(e,{type:`info`,get message(){return K(t)},get actions(){return K(n)}})};Q(w,e=>{K(M)&&e(T)});var E=U(w,2),ee=e=>{var t=z(()=>[{icon:Rl,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:_t},{text:`Leave as is`,title:`Keep the pasted array`,onClick:bt}]);WC(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return K(t)}})};Q(E,e=>{K(ge)&&e(ee)});var te=U(E,2),ne=e=>{var t=z(()=>f()?[]:[{icon:Bl,text:`Ok`,title:`Accept the repaired document`,onClick:$e},{icon:Pl,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:xt}]);WC(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return K(t)},onClose:Xe})};Q(te,e=>{K(Ie)&&e(ne)}),ZC(U(te,2),{get validationErrors(){return K(Be)},selectError:Vt}),G(()=>{g=eg(v,1,`jse-table-invisible-start-section svelte-1p86y3c`,null,g,{"jse-search-box-background":K(N)}),mg(y,`colspan`,(K(Ce),q(()=>K(Ce).length))),_=ng(y,``,_,{height:(K(r),q(()=>K(r).startHeight+`px`))}),mg(C,`colspan`,(K(Ce),q(()=>K(Ce).length))),S=ng(C,``,S,{height:(K(r),q(()=>K(r).endHeight+`px`))})}),Z(e,t)},l=e=>{var t=xD(),n=Qp(t),r=z(()=>f()?[]:[{icon:Pl,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:xt}]);WC(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return K(r)}}),$T(U(n,2),{get text(){return K(he)},get json(){return K(A)},get indentation(){return T()},get parser(){return x()}}),Z(e,t)},u=e=>{uD(e,{get text(){return K(he)},get json(){return K(A)},get readOnly(){return f()},get parser(){return x()},openJSONEditorModal:Ut,extractPath:jt,get onChangeMode(){return ee()},onClick:()=>{Xe()}})};Q(s,e=>{K(we)?e(c):K(j)&&K(he)!==void 0&&K(he)!==``?e(l,1):e(u,-1)}),Y(`paste`,o,Lt),Z(e,t)},on=e=>{Z(e,CD())};Q(rn,e=>{d?e(on,-1):e(an)}),Tg(en,e=>V(de,e),()=>K(de));var sn=U(en,2),cn=e=>{nw(e,{onClose:()=>V(De,!1)})};Q(sn,e=>{K(De)&&e(cn)});var ln=U(sn,2),un=e=>{dw(e,Fg(()=>K(pe),{onClose:()=>{var e;(e=K(pe))==null||e.onClose(),V(pe,void 0)}}))};return Q(ln,e=>{K(pe)&&e(un)}),G(()=>$t=eg(en,1,`jse-table-mode svelte-1p86y3c`,null,$t,{"no-main-menu":!_()})),Y(`mousedown`,en,function(e){if(e.buttons===1||e.buttons===2){var t=e.target;t.isContentEditable||Xe();var n=av(t);if(n){if(kb(K(F))&&Fb(K(A),K(F),n))return;V(F,Cb(n)),e.preventDefault()}}}),Y(`keydown`,en,function(e){var t=cv(e);if(a(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),St(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),St(!1)),t===`Ctrl+C`&&(e.preventDefault(),wt(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),wt(!1)),t===`Ctrl+D`&&(e.preventDefault(),Mt()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),kt()),t===`Insert`&&e.preventDefault(),t===`Ctrl+A`&&e.preventDefault(),t===`Ctrl+Q`&&st(e),t===`ArrowLeft`&&(e.preventDefault(),Qe(),K(F))){var n=function(e,t){var{rowIndex:n,columnIndex:r}=FT(Lb(t),e);return r>0?Cb(IT({rowIndex:n,columnIndex:r-1},e)):t}(K(Ce),K(F));V(F,n),nt(Lb(n))}if(t===`ArrowRight`&&(e.preventDefault(),Qe(),K(F))){var r=function(e,t){var{rowIndex:n,columnIndex:r}=FT(Lb(t),e);return r<e.length-1?Cb(IT({rowIndex:n,columnIndex:r+1},e)):t}(K(Ce),K(F));V(F,r),nt(Lb(r))}if(t===`ArrowUp`&&(e.preventDefault(),Qe(),K(F))){var i=function(e,t){var{rowIndex:n,columnIndex:r}=FT(Lb(t),e);return n>0?Cb(IT({rowIndex:n-1,columnIndex:r},e)):t}(K(Ce),K(F));V(F,i),nt(Lb(i))}if(t===`ArrowDown`&&(e.preventDefault(),Qe(),K(F))){var o=function(e,t,n){var{rowIndex:r,columnIndex:i}=FT(Lb(n),t);return r<e.length-1?Cb(IT({rowIndex:r+1,columnIndex:i},t)):n}(K(A),K(Ce),K(F));V(F,o),nt(Lb(o))}if(t===`Enter`&&K(F)&&rb(K(F))){e.preventDefault();var s=K(F).path;Gg(I(K(A),s))?Ut(s):f()||V(F,L(L({},K(F)),{},{edit:!0}))}if(t.replace(/^Shift\+/,``).length===1&&K(F))return e.preventDefault(),void function(e){It.apply(this,arguments)}(e.key);if(t===`Ctrl+Enter`&&rb(K(F))){e.preventDefault();var c=I(K(A),K(F).path);$g(c)&&window.open(String(c),`_blank`)}t===`Escape`&&K(F)&&(e.preventDefault(),V(F,void 0)),t===`Ctrl+F`&&(e.preventDefault(),qt(!1)),t===`Ctrl+H`&&(e.preventDefault(),qt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),Jt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),Yt())}),Y(`contextmenu`,en,st),Z(e,Qt),Cg(t,`validate`,Ue),Cg(t,`patch`,We),Cg(t,`focus`,Xe),Cg(t,`acceptAutoRepair`,$e),Cg(t,`scrollTo`,et),Cg(t,`findElement`,rt),Cg(t,`openTransformModal`,Ht),nf(Zt)}function ED(e,t){tf(t,!1);var n=$(t,`content`,8),r=$(t,`selection`,12),i=$(t,`readOnly`,8),a=$(t,`indentation`,8),o=$(t,`tabSize`,8),s=$(t,`truncateTextSize`,8),c=$(t,`externalMode`,8),l=$(t,`mainMenuBar`,8),u=$(t,`navigationBar`,8),d=$(t,`statusBar`,8),f=$(t,`askToFormat`,8),p=$(t,`escapeControlCharacters`,8),m=$(t,`escapeUnicodeCharacters`,8),h=$(t,`maxDocumentSizeTextMode`,8),g=$(t,`flattenColumns`,8),_=$(t,`parser`,8),v=$(t,`parseMemoizeOne`,8),y=$(t,`validator`,8),b=$(t,`validationParser`,8),x=$(t,`pathParser`,8),S=$(t,`insideModal`,8),C=$(t,`onChange`,8),w=$(t,`onChangeMode`,8),T=$(t,`onSelect`,8),E=$(t,`onRenderValue`,8),ee=$(t,`onClassName`,8),te=$(t,`onRenderMenu`,8),ne=$(t,`onRenderContextMenu`,8),re=$(t,`onError`,8),ie=$(t,`onFocus`,8),ae=$(t,`onBlur`,8),oe=$(t,`onSortModal`,8),se=$(t,`onTransformModal`,8),D=$(t,`onJSONEditorModal`,8),O=B(),ce=B(),le=B(),ue=Ig(`jsoneditor:JSONEditorRoot`),de=B(DE({onChange:e=>V(de,e)}).get()),k=B(c());function fe(e){if(xy(e)){V(k,e.undo.mode);var t=K(de).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n-1];ue(`handleUndo`,{index:n,item:e,items:t,prevItem:i}),i&&r(i.redo.selection),w()(K(k))}}function pe(e){if(xy(e)){V(k,e.redo.mode);var t=K(de).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n+1];ue(`handleRedo`,{index:n,item:e,items:t,nextItem:i}),i&&r(i.undo.selection),w()(K(k))}}var me=B(),A={type:`separator`},he=B(),j=B();function M(e){if(K(O))return K(O).patch(e);if(K(ce))return K(ce).patch(e);if(K(le))return K(le).patch(e);throw Error(`Method patch is not available in mode "${K(k)}"`)}function ge(e,t){if(K(O))return K(O).expand(e,t);if(K(le))return K(le).expand(e,t);throw Error(`Method expand is not available in mode "${K(k)}"`)}function _e(e,t){if(K(O))return K(O).collapse(e,t);if(K(le))return K(le).collapse(e,t);throw Error(`Method collapse is not available in mode "${K(k)}"`)}function N(e){if(K(le))K(le).openTransformModal(e);else if(K(O))K(O).openTransformModal(e);else{if(!K(ce))throw Error(`Method transform is not available in mode "${K(k)}"`);K(ce).openTransformModal(e)}}function P(){if(K(le))return K(le).validate();if(K(O))return K(O).validate();if(K(ce))return K(ce).validate();throw Error(`Method validate is not available in mode "${K(k)}"`)}function ve(){return K(O)?K(O).acceptAutoRepair():n()}function ye(e){if(K(O))return K(O).scrollTo(e);if(K(ce))return K(ce).scrollTo(e);throw Error(`Method scrollTo is not available in mode "${K(k)}"`)}function be(e){if(K(O))return K(O).findElement(e);if(K(ce))return K(ce).findElement(e);throw Error(`Method findElement is not available in mode "${K(k)}"`)}function xe(){K(le)?K(le).focus():K(O)?K(O).focus():K(ce)&&K(ce).focus()}function Se(){return Ce.apply(this,arguments)}function Ce(){return(Ce=Xu(function*(){K(le)&&(yield K(le).refresh())})).apply(this,arguments)}W(()=>J(c()),()=>{(function(e){if(e!==K(k)){var t={type:`mode`,undo:{mode:K(k),selection:void 0},redo:{mode:e,selection:void 0}};K(k)===`text`&&K(le)&&K(le).flush(),ue(`add history item`,t),K(de).add(t),V(k,e)}})(c())}),W(()=>(K(k),J(w())),()=>{V(me,[{type:`button`,text:`text`,title:`Switch to text mode (current mode: ${K(k)})`,className:`jse-group-button jse-first`+(K(k)===A_.text?` jse-selected`:``),onClick:()=>w()(A_.text)},{type:`button`,text:`tree`,title:`Switch to tree mode (current mode: ${K(k)})`,className:`jse-group-button `+(K(k)===A_.tree?` jse-selected`:``),onClick:()=>w()(A_.tree)},{type:`button`,text:`table`,title:`Switch to table mode (current mode: ${K(k)})`,className:`jse-group-button jse-last`+(K(k)===A_.table?` jse-selected`:``),onClick:()=>w()(A_.table)}])}),W(()=>(K(me),J(te()),K(k),J(S()),J(i())),()=>{V(he,e=>{var t=ny(e[0])?K(me).concat(e):K(me).concat(A,e),n=No(t);return te()(t,{mode:K(k),modal:S(),readOnly:i()})||n})}),W(()=>(J(ne()),K(k),J(S()),J(i()),J(r())),()=>{V(j,e=>{var t=No(e);return ne()(e,{mode:K(k),modal:S(),readOnly:i(),selection:r()})??(!i()&&t)})}),um();var we={patch:M,expand:ge,collapse:_e,transform:N,validate:P,acceptAutoRepair:ve,scrollTo:ye,findElement:be,focus:xe,refresh:Se};Og();var Te=fh(),Ee=Qp(Te),De=e=>{Tg(nD(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(de)},get readOnly(){return i()},get indentation(){return a()},get tabSize(){return o()},get mainMenuBar(){return l()},get statusBar(){return d()},get askToFormat(){return f()},get escapeUnicodeCharacters(){return m()},get maxDocumentSize(){return h()},get parser(){return _()},get validator(){return y()},get validationParser(){return b()},get onChange(){return C()},get onChangeMode(){return w()},get onSelect(){return T()},onUndo:fe,onRedo:pe,get onError(){return re()},get onFocus(){return ie()},get onBlur(){return ae()},get onRenderMenu(){return K(he)},get onSortModal(){return oe()},get onTransformModal(){return se()},$$legacy:!0}),e=>V(le,e),()=>K(le))},Oe=Op(()=>(K(k),J(A_),q(()=>K(k)===A_.text||String(K(k))===`code`))),ke=e=>{Tg(TD(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(de)},get readOnly(){return i()},get truncateTextSize(){return s()},get mainMenuBar(){return l()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return g()},get parser(){return _()},get parseMemoizeOne(){return v()},get validator(){return y()},get validationParser(){return b()},get indentation(){return a()},get onChange(){return C()},get onChangeMode(){return w()},get onSelect(){return T()},onUndo:fe,onRedo:pe,get onRenderValue(){return E()},get onFocus(){return ie()},get onBlur(){return ae()},get onRenderMenu(){return K(he)},get onRenderContextMenu(){return K(j)},get onSortModal(){return oe()},get onTransformModal(){return se()},get onJSONEditorModal(){return D()},$$legacy:!0}),e=>V(ce,e),()=>K(ce))},Ae=e=>{Tg(wE(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(de)},get readOnly(){return i()},get indentation(){return a()},get truncateTextSize(){return s()},get mainMenuBar(){return l()},get navigationBar(){return u()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get parser(){return _()},get parseMemoizeOne(){return v()},get validator(){return y()},get validationParser(){return b()},get pathParser(){return x()},get onError(){return re()},get onChange(){return C()},get onChangeMode(){return w()},get onSelect(){return T()},onUndo:fe,onRedo:pe,get onRenderValue(){return E()},get onClassName(){return ee()},get onFocus(){return ie()},get onBlur(){return ae()},get onRenderMenu(){return K(he)},get onRenderContextMenu(){return K(j)},get onSortModal(){return oe()},get onTransformModal(){return se()},get onJSONEditorModal(){return D()},$$legacy:!0}),e=>V(O,e),()=>K(O))};return Q(Ee,e=>{K(Oe)?e(De):(K(k),J(A_),q(()=>K(k)===A_.table)?e(ke,1):e(Ae,-1))}),Z(e,Te),Cg(t,`patch`,M),Cg(t,`expand`,ge),Cg(t,`collapse`,_e),Cg(t,`transform`,N),Cg(t,`validate`,P),Cg(t,`acceptAutoRepair`,ve),Cg(t,`scrollTo`,ye),Cg(t,`findElement`,be),Cg(t,`focus`,xe),Cg(t,`refresh`,Se),nf(we)}dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var DD=X(`<div class="jse-error svelte-t4zsk3"> </div>`),OD=X(`<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>`),kD=X(`<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>`),AD=X(`<button type="button" class="jse-primary svelte-t4zsk3">Close</button>`),jD=X(`<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>`,1),MD=X(`<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>`),ND={};dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var PD=Ag(()=>ND),FD=X(`<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>`),ID=X(`<div class="jse-error svelte-lwzlls"> </div>`),LD=X(`<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>`,1);dv(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var RD=X(`<div role="none"><!></div> <!> <!> <!>`,1);function zD(e,t){tf(t,!1);var n=B(void 0,!0),r=Ig(`jsoneditor:JSONEditor`),i={text:``},a=void 0,o=!1,s=A_.tree,c=!0,l=!0,u=!0,d=!0,f=!1,p=!1,m=10485760,h=!0,g=JSON,_=void 0,v=JSON,y={parse:kx,stringify:Ox},b=[bv],x=b[0].id,S=IE,C=void 0,w=void 0,T=Dx,E=IE,ee=IE,te=IE,ne=IE,re=e=>{console.error(e),alert(e.toString())},ie=IE,ae=IE,oe=$(t,`content`,13,i),se=$(t,`selection`,13,a),D=$(t,`readOnly`,13,o),O=$(t,`indentation`,13,2),ce=$(t,`tabSize`,13,4),le=$(t,`truncateTextSize`,13,1e3),ue=$(t,`mode`,13,s),de=$(t,`mainMenuBar`,13,c),k=$(t,`navigationBar`,13,l),fe=$(t,`statusBar`,13,u),pe=$(t,`askToFormat`,13,d),me=$(t,`escapeControlCharacters`,13,f),A=$(t,`escapeUnicodeCharacters`,13,p),he=$(t,`maxDocumentSizeTextMode`,13,m),j=$(t,`flattenColumns`,13,h),M=$(t,`parser`,13,g),ge=$(t,`validator`,13,_),_e=$(t,`validationParser`,13,v),N=$(t,`pathParser`,13,y),P=$(t,`queryLanguages`,13,b),ve=$(t,`queryLanguageId`,13,x),ye=$(t,`onChangeQueryLanguage`,13,S),be=$(t,`onChange`,13,C),xe=$(t,`onSelect`,13,w),Se=$(t,`onRenderValue`,13,T),Ce=$(t,`onClassName`,13,E),we=$(t,`onRenderMenu`,13,ee),Te=$(t,`onRenderContextMenu`,13,te),Ee=$(t,`onChangeMode`,13,ne),De=$(t,`onError`,13,re),Oe=$(t,`onFocus`,13,ie),ke=$(t,`onBlur`,13,ae),Ae=B(Bg(),!0),je=B(!1,!0),Me=B(void 0,!0),Ne=B(void 0,!0),Pe=B(void 0,!0),F=B(void 0,!0),Fe=B(M(),!0);function Ie(){return oe()}function Le(e){r(`set`);var t=__(e);if(t)throw Error(t);V(Ae,Bg()),oe(e),Jf()}function Re(e){r(`update`);var t=__(e);if(t)throw Error(t);oe(e),Jf()}function ze(e){var t=K(Me).patch(e);return Jf(),t}function Be(e){se(e),Jf()}function Ve(e,t){K(Me).expand(e,t),Jf()}function He(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];K(Me).collapse(e,t),Jf()}function Ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};K(Me).transform(e),Jf()}function We(){return K(Me).validate()}function Ge(){var e=K(Me).acceptAutoRepair();return Jf(),e}function Ke(e){return qe.apply(this,arguments)}function qe(){return(qe=Xu(function*(e){yield K(Me).scrollTo(e)})).apply(this,arguments)}function Je(e){return K(Me).findElement(e)}function Ye(){K(Me).focus(),Jf()}function Xe(){return Ze.apply(this,arguments)}function Ze(){return(Ze=Xu(function*(){yield K(Me).refresh()})).apply(this,arguments)}function Qe(e){for(var t of Object.keys(e))switch(t){case`content`:oe(e[t]??i);break;case`selection`:se(e[t]??a);break;case`readOnly`:D(e[t]??o);break;case`indentation`:O(e[t]??2);break;case`tabSize`:ce(e[t]??4);break;case`truncateTextSize`:le(e[t]??1e3);break;case`mode`:ue(e[t]??s);break;case`mainMenuBar`:de(e[t]??c);break;case`navigationBar`:k(e[t]??l);break;case`statusBar`:fe(e[t]??u);break;case`askToFormat`:pe(e[t]??d);break;case`escapeControlCharacters`:me(e[t]??f);break;case`escapeUnicodeCharacters`:A(e[t]??p);break;case`maxDocumentSizeTextMode`:he(e[t]??m);break;case`flattenColumns`:j(e[t]??h);break;case`parser`:M(e[t]??g);break;case`validator`:ge(e[t]??_);break;case`validationParser`:_e(e[t]??v);break;case`pathParser`:N(e[t]??y);break;case`queryLanguages`:P(e[t]??b);break;case`queryLanguageId`:ve(e[t]??x);break;case`onChangeQueryLanguage`:ye(e[t]??S);break;case`onChange`:be(e[t]??C);break;case`onRenderValue`:Se(e[t]??T);break;case`onClassName`:Ce(e[t]??E);break;case`onRenderMenu`:we(e[t]??ee);break;case`onRenderContextMenu`:Te(e[t]??te);break;case`onChangeMode`:Ee(e[t]??ne);break;case`onSelect`:xe(e[t]??w);break;case`onError`:De(e[t]??re);break;case`onFocus`:Oe(e[t]??ie);break;case`onBlur`:ke(e[t]??ae);break;default:n(t)}function n(e){r(`Unknown property "${e}"`)}P().some(e=>e.id===ve())||ve(P()[0].id),Jf()}function $e(){return et.apply(this,arguments)}function et(){return(et=Xu(function*(){throw Error(`class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.`)})).apply(this,arguments)}function tt(e,t,n){oe(e),be()&&be()(e,t,n)}function nt(e){se(e),xe()&&xe()(No(e))}function rt(){V(je,!0),Oe()&&Oe()()}function it(){V(je,!1),ke()&&ke()()}function ot(e){return st.apply(this,arguments)}function st(){return(st=Xu(function*(e){ue()!==e&&(ue(e),Jf(),Ye(),Ee()(e))})).apply(this,arguments)}function ct(e){r(`handleChangeQueryLanguage`,e),ve(e),ye()(e)}function lt(e){var{id:t,json:r,rootPath:i,onTransform:a,onClose:o}=e;D()||V(F,{id:t,json:r,rootPath:i,indentation:O(),truncateTextSize:le(),escapeControlCharacters:me(),escapeUnicodeCharacters:A(),parser:M(),parseMemoizeOne:K(n),validationParser:_e(),pathParser:N(),queryLanguages:P(),queryLanguageId:ve(),onChangeQueryLanguage:ct,onRenderValue:Se(),onRenderMenu:e=>we()(e,{mode:ue(),modal:!0,readOnly:D()}),onRenderContextMenu:e=>Te()(e,{mode:ue(),modal:!0,readOnly:D(),selection:se()}),onClassName:Ce(),onTransform:a,onClose:o})}function ut(e){D()||V(Pe,e)}function dt(e){var{content:t,path:n,onPatch:i,onClose:a}=e;r(`onJSONEditorModal`,{content:t,path:n}),V(Ne,{content:t,path:n,onPatch:i,readOnly:D(),indentation:O(),tabSize:ce(),truncateTextSize:le(),mainMenuBar:de(),navigationBar:k(),statusBar:fe(),askToFormat:pe(),escapeControlCharacters:me(),escapeUnicodeCharacters:A(),maxDocumentSizeTextMode:he(),flattenColumns:j(),parser:M(),validator:void 0,validationParser:_e(),pathParser:N(),onRenderValue:Se(),onClassName:Ce(),onRenderMenu:we(),onRenderContextMenu:Te(),onSortModal:ut,onTransformModal:lt,onClose:a})}function ft(e){e.stopPropagation()}W(()=>(J(M()),K(Fe),J(oe()),Bg),()=>{if(!O_(M(),K(Fe))){if(r(`parser changed, recreate editor`),y_(oe())){var e=K(Fe).stringify(oe().json);oe({json:e===void 0?void 0:M().parse(e)})}V(Fe,M()),V(Ae,Bg())}}),W(()=>J(oe()),()=>{var e=__(oe());e&&console.error(`Error: `+e)}),W(()=>J(se()),()=>{se()===null&&console.warn(`selection is invalid: it is null but should be undefined`)}),W(()=>J(M()),()=>{V(n,uu(M().parse))}),W(()=>J(ue()),()=>{r(`mode changed to`,ue())}),um();var pt={get:Ie,set:Le,update:Re,patch:ze,select:Be,expand:Ve,collapse:He,transform:Ue,validate:We,acceptAutoRepair:Ge,scrollTo:Ke,findElement:Je,focus:Ye,refresh:Xe,updateProps:Qe,destroy:$e};return Og(!0),gv(e,{children:(e,t)=>{var r,i=RD(),a=Qp(i);Ih(H(a),()=>K(Ae),e=>{Tg(ED(e,{get externalMode(){return ue()},get content(){return oe()},get selection(){return se()},get readOnly(){return D()},get indentation(){return O()},get tabSize(){return ce()},get truncateTextSize(){return le()},get statusBar(){return fe()},get askToFormat(){return pe()},get mainMenuBar(){return de()},get navigationBar(){return k()},get maxDocumentSizeTextMode(){return he()},get escapeControlCharacters(){return me()},get escapeUnicodeCharacters(){return A()},get flattenColumns(){return j()},get parser(){return M()},get parseMemoizeOne(){return K(n)},get validator(){return ge()},get validationParser(){return _e()},get pathParser(){return N()},insideModal:!1,get onError(){return De()},onChange:tt,onChangeMode:ot,onSelect:nt,get onRenderValue(){return Se()},get onClassName(){return Ce()},onFocus:rt,onBlur:it,get onRenderMenu(){return we()},get onRenderContextMenu(){return Te()},onSortModal:ut,onTransformModal:lt,onJSONEditorModal:dt,$$legacy:!0}),e=>V(Me,e),()=>K(Me))});var o=U(a,2),s=e=>{(function(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=Ig(`jsoneditor:SortModal`),s=$(t,`id`,9),c=$(t,`json`,9),l=$(t,`rootPath`,9),u=$(t,`onSort`,9),d=$(t,`onClose`,9),f={value:1,label:`ascending`},p=[f,{value:-1,label:`descending`}],m=`${s()}:${Dt(l())}`,h=B(PD()[m]?.selectedProperty,!0),g=B(PD()[m]?.selectedDirection||f,!0),_=B(void 0,!0);function v(){try{var e;V(_,void 0);var t=K(h)?.value||((e=K(a))==null||(e=e[0])==null?void 0:e.value)||[],n=K(g)?.value,r=lT(c(),l(),t,n);u()!==void 0&&l()!==void 0&&u()({operations:r,rootPath:l(),itemPath:t,direction:n}),d()()}catch(e){V(_,String(e))}}function y(e){e.focus()}W(()=>(J(c()),J(l())),()=>{V(n,I(c(),l()))}),W(()=>K(n),()=>{V(r,Array.isArray(K(n)))}),W(()=>(K(r),K(n)),()=>{V(i,K(r)?r_(K(n)):void 0)}),W(()=>(K(i),Ax),()=>{V(a,K(i)?K(i).map(Ax):void 0)}),W(()=>(PD(),K(h),K(g)),()=>{PD(PD()[m]={selectedProperty:K(h),selectedDirection:K(g)}),o(`store state in memory`,m,PD()[m])}),um(),Og(!0),ew(e,{get onClose(){return d()},className:`jse-sort-modal`,children:(e,t)=>{var n=LD(),i=Qp(n),o=z(()=>K(r)?`Sort array items`:`Sort object keys`);OC(i,{get title(){return K(o)},get onClose(){return d()}});var s=H(U(i,2)),c=H(U(H(s))),u=H(U(H(c))),f=U(c),m=e=>{var t=FD();bC(H(U(H(t))),{showChevron:!0,get items(){return K(a)},get value(){return K(h)},set value(e){V(h,e)},$$legacy:!0}),Z(e,t)};Q(f,e=>{K(r),K(a),q(()=>K(r)&&K(a)&&K(a)?.length>1)&&e(m)}),bC(H(U(H(U(f)))),{showChevron:!0,clearable:!1,get items(){return p},get value(){return K(g)},set value(e){V(g,e)},$$legacy:!0});var b=U(s,2),x=H(b),S=e=>{var t=ID(),n=H(t);G(()=>_h(n,K(_))),Z(e,t)};Q(x,e=>{K(_)&&e(S)});var C=H(U(b,2));lm(()=>Y(`click`,C,v)),qh(C,e=>y?.(e)),G(e=>{pg(u,e),C.disabled=(K(r),K(a),K(h),q(()=>!!(K(r)&&K(a)&&K(a)?.length>1)&&!K(h)))},[()=>(J(l()),J(sc),J(Ox),q(()=>l()&&!sc(l())?Ox(l()):`(document root)`))]),Z(e,n)},$$slots:{default:!0}}),nf()})(e,Fg(()=>K(Pe),{onClose:()=>{var e;(e=K(Pe))==null||e.onClose(),V(Pe,void 0)}}))};Q(o,e=>{K(Pe)&&e(s)});var c=U(o,2),l=e=>{FE(e,Fg(()=>K(F),{onClose:()=>{var e;(e=K(F))==null||e.onClose(),V(F,void 0)}}))};Q(c,e=>{K(F)&&e(l)});var u=U(c,2),d=e=>{(function(e,t){tf(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=Ig(`jsoneditor:JSONEditorModal`),s=$(t,`content`,9),c=$(t,`path`,9),l=$(t,`onPatch`,9),u=$(t,`readOnly`,9),d=$(t,`indentation`,9),f=$(t,`tabSize`,9),p=$(t,`truncateTextSize`,9),m=$(t,`mainMenuBar`,9),h=$(t,`navigationBar`,9),g=$(t,`statusBar`,9),_=$(t,`askToFormat`,9),v=$(t,`escapeControlCharacters`,9),y=$(t,`escapeUnicodeCharacters`,9),b=$(t,`maxDocumentSizeTextMode`,9),x=$(t,`flattenColumns`,9),S=$(t,`parser`,9),C=$(t,`validator`,9),w=$(t,`validationParser`,9),T=$(t,`pathParser`,9),E=$(t,`onRenderValue`,9),ee=$(t,`onClassName`,9),te=$(t,`onRenderMenu`,9),ne=$(t,`onRenderContextMenu`,9),re=$(t,`onSortModal`,9),ie=$(t,`onTransformModal`,9),ae=$(t,`onClose`,9),oe=B(void 0,!0),se=B(void 0,!0),D={mode:le(s()),content:s(),selection:void 0,relativePath:c()},O=B([D],!0),ce=B(void 0,!0);function le(e){return y_(e)&&at(e.json)?A_.table:A_.tree}function ue(){var e=Gs(K(O))?.selection;ob(e)&&K(oe).scrollTo(Lb(e))}function de(){if(o(`handleApply`),!u())try{V(ce,void 0);var e=K(n).relativePath,t=K(n).content,r=[{op:`replace`,path:Dt(e),value:x_(t,S()).json}];if(K(O).length>1){var i=x_(K(O)[K(O).length-2].content,S()).json,a={json:At(i,r)},s=L(L({},K(O)[K(O).length-2]||D),{},{content:a});V(O,[...K(O).slice(0,K(O).length-2),s]),Jf(),ue()}else l()(r),ae()()}catch(e){V(ce,String(e))}}function k(){var e;o(`handleClose`),K(O).length>1?(V(O,rc(K(O))),Jf(),(e=K(oe))==null||e.focus(),ue(),V(ce,void 0)):ae()()}function fe(e){o(`handleChange`,e),A(t=>L(L({},t),{},{content:e}))}function pe(e){o(`handleChangeSelection`,e),A(t=>L(L({},t),{},{selection:e}))}function me(e){o(`handleChangeMode`,e),A(t=>L(L({},t),{},{mode:e}))}function A(e){var t=e(Gs(K(O)));V(O,[...rc(K(O)),t])}function he(e){V(ce,e.toString()),console.error(e)}function j(e){var t,{content:n,path:r}=e;o(`handleJSONEditorModal`,{content:n,path:r});var i={mode:le(n),content:n,selection:void 0,relativePath:r};V(O,[...K(O),i]),Jf(),(t=K(oe))==null||t.focus()}function M(e){e.focus()}kh(()=>{var e;(e=K(oe))==null||e.focus()}),W(()=>K(O),()=>{V(n,Gs(K(O))||D)}),W(()=>K(O),()=>{V(r,K(O).flatMap(e=>e.relativePath))}),W(()=>(K(r),Ox),()=>{V(i,sc(K(r))?`(document root)`:Ox(K(r)))}),W(()=>J(S()),()=>{V(a,uu(S().parse))}),um(),Og(!0),ew(e,{onClose:k,className:`jse-jsoneditor-modal`,get fullscreen(){return K(se)},children:(e,t)=>{var r=MD();gv(H(r),{children:(e,t)=>{var r=jD(),o=Qp(r),s=z(()=>(K(O),q(()=>K(O).length>1?` (${K(O).length})`:``)));OC(o,{get title(){return`Edit nested content ${K(s)??``}`},fullScreenButton:!0,onClose:k,get fullscreen(){return K(se)},set fullscreen(e){V(se,e)},$$legacy:!0});var c=U(H(U(o,2)),2),l=U(c,4);Tg(ED(H(l),{get externalMode(){return K(n),q(()=>K(n).mode)},get content(){return K(n),q(()=>K(n).content)},get selection(){return K(n),q(()=>K(n).selection)},get readOnly(){return u()},get indentation(){return d()},get tabSize(){return f()},get truncateTextSize(){return p()},get statusBar(){return g()},get askToFormat(){return _()},get mainMenuBar(){return m()},get navigationBar(){return h()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return y()},get maxDocumentSizeTextMode(){return b()},get flattenColumns(){return x()},get parser(){return S()},get parseMemoizeOne(){return K(a)},get validator(){return C()},get validationParser(){return w()},get pathParser(){return T()},insideModal:!0,onError:he,onChange:fe,onChangeMode:me,onSelect:pe,get onRenderValue(){return E()},get onClassName(){return ee()},get onFocus(){return IE},get onBlur(){return IE},get onRenderMenu(){return te()},get onRenderContextMenu(){return ne()},get onSortModal(){return re()},get onTransformModal(){return ie()},onJSONEditorModal:j,$$legacy:!0}),e=>V(oe,e),()=>K(oe));var ae=H(U(l,2)),D=e=>{var t=DD(),n=H(t);G(()=>_h(n,K(ce))),Z(e,t)};Q(ae,e=>{K(ce)&&e(D)});var le=U(ae,2),ue=e=>{var t=OD();Ov(H(t),{get data(){return El}}),Y(`click`,t,k),Z(e,t)};Q(le,e=>{K(O),q(()=>K(O).length>1)&&e(ue)});var A=U(le,2),ge=e=>{var t=kD();lm(()=>Y(`click`,t,de)),qh(t,e=>M?.(e)),Z(e,t)},_e=e=>{var t=AD();Y(`click`,t,k),Z(e,t)};Q(A,e=>{u()?e(_e,-1):e(ge)}),G(()=>pg(c,K(i))),Z(e,r)},$$slots:{default:!0}}),Z(e,r)},$$slots:{default:!0}}),nf()})(e,Fg(()=>K(Ne),{onClose:()=>{var e;(e=K(Ne))==null||e.onClose(),V(Ne,void 0)}}))};Q(u,e=>{K(Ne)&&e(d)}),G(()=>r=eg(a,1,`jse-main svelte-1l55585`,null,r,{"jse-focus":K(je)})),Y(`keydown`,a,ft),Z(e,i)},$$slots:{default:!0}}),Cg(t,`get`,Ie),Cg(t,`set`,Le),Cg(t,`update`,Re),Cg(t,`patch`,ze),Cg(t,`select`,Be),Cg(t,`expand`,Ve),Cg(t,`collapse`,He),Cg(t,`transform`,Ue),Cg(t,`validate`,We),Cg(t,`acceptAutoRepair`,Ge),Cg(t,`scrollTo`,Ke),Cg(t,`findElement`,Je),Cg(t,`focus`,Ye),Cg(t,`refresh`,Xe),Cg(t,`updateProps`,Qe),Cg(t,`destroy`,$e),nf(pt)}function BD(e){var{target:t,props:n}=e,r=vh(zD,{target:t,props:n});return r.destroy=Xu(function*(){return function(e,t){var n=bh.get(e);return n?(bh.delete(e),n(t)):Promise.resolve()}(r)}),Jf(),r}var VD=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,HD=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,UD=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function WD(e,t){if(e===`__proto__`||e===`constructor`&&t&&typeof t==`object`&&`prototype`in t){GD(e);return}return t}function GD(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function KD(e,t={}){if(typeof e!=`string`)return e;let n=e.trim();if(e[0]===`"`&&e.endsWith(`"`)&&!e.includes(`\\`))return n.slice(1,-1);if(n.length<=9){let e=n.toLowerCase();if(e===`true`)return!0;if(e===`false`)return!1;if(e===`undefined`)return;if(e===`null`)return null;if(e===`nan`)return NaN;if(e===`infinity`)return 1/0;if(e===`-infinity`)return-1/0}if(!UD.test(e)){if(t.strict)throw SyntaxError(`[destr] Invalid JSON`);return e}try{if(VD.test(e)||HD.test(e)){if(t.strict)throw Error(`[destr] Possible prototype pollution`);return JSON.parse(e,WD)}return JSON.parse(e)}catch(n){if(t.strict)throw n;return e}}function qD(e,t={}){return KD(e,{...t,strict:!0})}var JD=typeof global==`object`&&global&&global.Object===Object&&global,YD=typeof self==`object`&&self&&self.Object===Object&&self,XD=JD||YD||Function(`return this`)(),ZD=XD.Symbol,QD=Object.prototype,$D=QD.hasOwnProperty,eO=QD.toString,tO=ZD?ZD.toStringTag:void 0;function nO(e){var t=$D.call(e,tO),n=e[tO];try{e[tO]=void 0;var r=!0}catch{}var i=eO.call(e);return r&&(t?e[tO]=n:delete e[tO]),i}var rO=Object.prototype.toString;function iO(e){return rO.call(e)}var aO=`[object Null]`,oO=`[object Undefined]`,sO=ZD?ZD.toStringTag:void 0;function cO(e){return e==null?e===void 0?oO:aO:sO&&sO in Object(e)?nO(e):iO(e)}function lO(e){return typeof e==`object`&&!!e}var uO=`[object Symbol]`;function dO(e){return typeof e==`symbol`||lO(e)&&cO(e)==uO}var fO=/\s/;function pO(e){for(var t=e.length;t--&&fO.test(e.charAt(t)););return t}var mO=/^\s+/;function hO(e){return e&&e.slice(0,pO(e)+1).replace(mO,``)}function gO(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var _O=NaN,vO=/^[-+]0x[0-9a-f]+$/i,yO=/^0b[01]+$/i,bO=/^0o[0-7]+$/i,xO=parseInt;function SO(e){if(typeof e==`number`)return e;if(dO(e))return _O;if(gO(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=gO(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=hO(e);var n=yO.test(e);return n||bO.test(e)?xO(e.slice(2),n?2:8):vO.test(e)?_O:+e}var CO=function(){return XD.Date.now()},wO=`Expected a function`,TO=Math.max,EO=Math.min;function DO(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(wO);t=SO(t)||0,gO(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?TO(SO(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?EO(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=CO();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(CO())}function x(){var e=CO(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var OO=typeof global==`object`&&global&&global.Object===Object&&global,kO=typeof self==`object`&&self&&self.Object===Object&&self,AO=OO||kO||Function(`return this`)(),jO=AO.Symbol,MO=Object.prototype,NO=MO.hasOwnProperty,PO=MO.toString,FO=jO?jO.toStringTag:void 0;function IO(e){var t=NO.call(e,FO),n=e[FO];try{e[FO]=void 0;var r=!0}catch{}var i=PO.call(e);return r&&(t?e[FO]=n:delete e[FO]),i}var LO=Object.prototype.toString;function RO(e){return LO.call(e)}var zO=`[object Null]`,BO=`[object Undefined]`,VO=jO?jO.toStringTag:void 0;function HO(e){return e==null?e===void 0?BO:zO:VO&&VO in Object(e)?IO(e):RO(e)}function UO(e){return typeof e==`object`&&!!e}var WO=`[object Symbol]`;function GO(e){return typeof e==`symbol`||UO(e)&&HO(e)==WO}function KO(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var qO=Array.isArray,JO=jO?jO.prototype:void 0,YO=JO?JO.toString:void 0;function XO(e){if(typeof e==`string`)return e;if(qO(e))return KO(e,XO)+``;if(GO(e))return YO?YO.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function ZO(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function QO(e){return e}var $O=`[object AsyncFunction]`,ek=`[object Function]`,tk=`[object GeneratorFunction]`,nk=`[object Proxy]`;function rk(e){if(!ZO(e))return!1;var t=HO(e);return t==ek||t==tk||t==$O||t==nk}var ik=AO[`__core-js_shared__`],ak=function(){var e=/[^.]+$/.exec(ik&&ik.keys&&ik.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function ok(e){return!!ak&&ak in e}var sk=Function.prototype.toString;function ck(e){if(e!=null){try{return sk.call(e)}catch{}try{return e+``}catch{}}return``}var lk=/[\\^$.*+?()[\]{}|]/g,uk=/^\[object .+?Constructor\]$/,dk=Function.prototype,fk=Object.prototype,pk=dk.toString,mk=fk.hasOwnProperty,hk=RegExp(`^`+pk.call(mk).replace(lk,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function gk(e){return!ZO(e)||ok(e)?!1:(rk(e)?hk:uk).test(ck(e))}function _k(e,t){return e?.[t]}function vk(e,t){var n=_k(e,t);return gk(n)?n:void 0}var yk=vk(AO,`WeakMap`),bk=Object.create,xk=function(){function e(){}return function(t){if(!ZO(t))return{};if(bk)return bk(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Sk(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ck(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}var wk=800,Tk=16,Ek=Date.now;function Dk(e){var t=0,n=0;return function(){var r=Ek(),i=Tk-(r-n);if(n=r,i>0){if(++t>=wk)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Ok(e){return function(){return e}}var kk=function(){try{var e=vk(Object,`defineProperty`);return e({},``,{}),e}catch{}}(),Ak=Dk(kk?function(e,t){return kk(e,`toString`,{configurable:!0,enumerable:!1,value:Ok(t),writable:!0})}:QO);function jk(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Mk=9007199254740991,Nk=/^(?:0|[1-9]\d*)$/;function Pk(e,t){var n=typeof e;return t??=Mk,!!t&&(n==`number`||n!=`symbol`&&Nk.test(e))&&e>-1&&e%1==0&&e<t}function Fk(e,t,n){t==`__proto__`&&kk?kk(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Ik(e,t){return e===t||e!==e&&t!==t}var Lk=Object.prototype.hasOwnProperty;function Rk(e,t,n){var r=e[t];(!(Lk.call(e,t)&&Ik(r,n))||n===void 0&&!(t in e))&&Fk(e,t,n)}function zk(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?Fk(n,s,c):Rk(n,s,c)}return n}var Bk=Math.max;function Vk(e,t,n){return t=Bk(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=Bk(r.length-t,0),o=Array(a);++i<a;)o[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(o),Sk(e,this,s)}}function Hk(e,t){return Ak(Vk(e,t,QO),e+``)}var Uk=9007199254740991;function Wk(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=Uk}function Gk(e){return e!=null&&Wk(e.length)&&!rk(e)}function Kk(e,t,n){if(!ZO(n))return!1;var r=typeof t;return(r==`number`?Gk(n)&&Pk(t,n.length):r==`string`&&t in n)?Ik(n[t],e):!1}function qk(e){return Hk(function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(a=e.length>3&&typeof a==`function`?(i--,a):void 0,o&&Kk(n[0],n[1],o)&&(a=i<3?void 0:a,i=1),t=Object(t);++r<i;){var s=n[r];s&&e(t,s,r,a)}return t})}var Jk=Object.prototype;function Yk(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||Jk)}function Xk(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Zk=`[object Arguments]`;function Qk(e){return UO(e)&&HO(e)==Zk}var $k=Object.prototype,eA=$k.hasOwnProperty,tA=$k.propertyIsEnumerable,nA=Qk(function(){return arguments}())?Qk:function(e){return UO(e)&&eA.call(e,`callee`)&&!tA.call(e,`callee`)};function rA(){return!1}var iA=typeof exports==`object`&&exports&&!exports.nodeType&&exports,aA=iA&&typeof module==`object`&&module&&!module.nodeType&&module,oA=aA&&aA.exports===iA?AO.Buffer:void 0,sA=(oA?oA.isBuffer:void 0)||rA,cA=`[object Arguments]`,lA=`[object Array]`,uA=`[object Boolean]`,dA=`[object Date]`,fA=`[object Error]`,pA=`[object Function]`,mA=`[object Map]`,hA=`[object Number]`,gA=`[object Object]`,_A=`[object RegExp]`,vA=`[object Set]`,yA=`[object String]`,bA=`[object WeakMap]`,xA=`[object ArrayBuffer]`,SA=`[object DataView]`,CA=`[object Float32Array]`,wA=`[object Float64Array]`,TA=`[object Int8Array]`,EA=`[object Int16Array]`,DA=`[object Int32Array]`,OA=`[object Uint8Array]`,kA=`[object Uint8ClampedArray]`,AA=`[object Uint16Array]`,jA=`[object Uint32Array]`,MA={};MA[CA]=MA[wA]=MA[TA]=MA[EA]=MA[DA]=MA[OA]=MA[kA]=MA[AA]=MA[jA]=!0,MA[cA]=MA[lA]=MA[xA]=MA[uA]=MA[SA]=MA[dA]=MA[fA]=MA[pA]=MA[mA]=MA[hA]=MA[gA]=MA[_A]=MA[vA]=MA[yA]=MA[bA]=!1;function NA(e){return UO(e)&&Wk(e.length)&&!!MA[HO(e)]}function PA(e){return function(t){return e(t)}}var FA=typeof exports==`object`&&exports&&!exports.nodeType&&exports,IA=FA&&typeof module==`object`&&module&&!module.nodeType&&module,LA=IA&&IA.exports===FA&&OO.process,RA=function(){try{return IA&&IA.require&&IA.require(`util`).types||LA&&LA.binding&&LA.binding(`util`)}catch{}}(),zA=RA&&RA.isTypedArray,BA=zA?PA(zA):NA,VA=Object.prototype.hasOwnProperty;function HA(e,t){var n=qO(e),r=!n&&nA(e),i=!n&&!r&&sA(e),a=!n&&!r&&!i&&BA(e),o=n||r||i||a,s=o?Xk(e.length,String):[],c=s.length;for(var l in e)(t||VA.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Pk(l,c)))&&s.push(l);return s}function UA(e,t){return function(n){return e(t(n))}}var WA=UA(Object.keys,Object),GA=Object.prototype.hasOwnProperty;function KA(e){if(!Yk(e))return WA(e);var t=[];for(var n in Object(e))GA.call(e,n)&&n!=`constructor`&&t.push(n);return t}function qA(e){return Gk(e)?HA(e):KA(e)}function JA(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var YA=Object.prototype.hasOwnProperty;function XA(e){if(!ZO(e))return JA(e);var t=Yk(e),n=[];for(var r in e)r==`constructor`&&(t||!YA.call(e,r))||n.push(r);return n}function ZA(e){return Gk(e)?HA(e,!0):XA(e)}var QA=qk(function(e,t,n,r){zk(t,ZA(t),e,r)}),$A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ej=/^\w*$/;function tj(e,t){if(qO(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||GO(e)?!0:ej.test(e)||!$A.test(e)||t!=null&&e in Object(t)}var nj=vk(Object,`create`);function rj(){this.__data__=nj?nj(null):{},this.size=0}function ij(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var aj=`__lodash_hash_undefined__`,oj=Object.prototype.hasOwnProperty;function sj(e){var t=this.__data__;if(nj){var n=t[e];return n===aj?void 0:n}return oj.call(t,e)?t[e]:void 0}var cj=Object.prototype.hasOwnProperty;function lj(e){var t=this.__data__;return nj?t[e]!==void 0:cj.call(t,e)}var uj=`__lodash_hash_undefined__`;function dj(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=nj&&t===void 0?uj:t,this}function fj(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fj.prototype.clear=rj,fj.prototype.delete=ij,fj.prototype.get=sj,fj.prototype.has=lj,fj.prototype.set=dj;function pj(){this.__data__=[],this.size=0}function mj(e,t){for(var n=e.length;n--;)if(Ik(e[n][0],t))return n;return-1}var hj=Array.prototype.splice;function gj(e){var t=this.__data__,n=mj(t,e);return n<0?!1:(n==t.length-1?t.pop():hj.call(t,n,1),--this.size,!0)}function _j(e){var t=this.__data__,n=mj(t,e);return n<0?void 0:t[n][1]}function vj(e){return mj(this.__data__,e)>-1}function yj(e,t){var n=this.__data__,r=mj(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function bj(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bj.prototype.clear=pj,bj.prototype.delete=gj,bj.prototype.get=_j,bj.prototype.has=vj,bj.prototype.set=yj;var xj=vk(AO,`Map`);function Sj(){this.size=0,this.__data__={hash:new fj,map:new(xj||bj),string:new fj}}function Cj(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function wj(e,t){var n=e.__data__;return Cj(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Tj(e){var t=wj(this,e).delete(e);return this.size-=+!!t,t}function Ej(e){return wj(this,e).get(e)}function Dj(e){return wj(this,e).has(e)}function Oj(e,t){var n=wj(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function kj(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}kj.prototype.clear=Sj,kj.prototype.delete=Tj,kj.prototype.get=Ej,kj.prototype.has=Dj,kj.prototype.set=Oj;var Aj=`Expected a function`;function jj(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(Aj);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(jj.Cache||kj),n}jj.Cache=kj;var Mj=500;function Nj(e){var t=jj(e,function(e){return n.size===Mj&&n.clear(),e}),n=t.cache;return t}var Pj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fj=/\\(\\)?/g,Ij=Nj(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Pj,function(e,n,r,i){t.push(r?i.replace(Fj,`$1`):n||e)}),t});function Lj(e){return e==null?``:XO(e)}function Rj(e,t){return qO(e)?e:tj(e,t)?[e]:Ij(Lj(e))}function zj(e){if(typeof e==`string`||GO(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Bj(e,t){t=Rj(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[zj(t[n++])];return n&&n==r?e:void 0}function Vj(e,t,n){var r=e==null?void 0:Bj(e,t);return r===void 0?n:r}function Hj(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Uj=UA(Object.getPrototypeOf,Object),Wj=`[object Object]`,Gj=Function.prototype,Kj=Object.prototype,qj=Gj.toString,Jj=Kj.hasOwnProperty,Yj=qj.call(Object);function Xj(e){if(!UO(e)||HO(e)!=Wj)return!1;var t=Uj(e);if(t===null)return!0;var n=Jj.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&qj.call(n)==Yj}function Zj(){this.__data__=new bj,this.size=0}function Qj(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function $j(e){return this.__data__.get(e)}function eM(e){return this.__data__.has(e)}var tM=200;function nM(e,t){var n=this.__data__;if(n instanceof bj){var r=n.__data__;if(!xj||r.length<tM-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new kj(r)}return n.set(e,t),this.size=n.size,this}function rM(e){var t=this.__data__=new bj(e);this.size=t.size}rM.prototype.clear=Zj,rM.prototype.delete=Qj,rM.prototype.get=$j,rM.prototype.has=eM,rM.prototype.set=nM;var iM=typeof exports==`object`&&exports&&!exports.nodeType&&exports,aM=iM&&typeof module==`object`&&module&&!module.nodeType&&module,oM=aM&&aM.exports===iM?AO.Buffer:void 0,sM=oM?oM.allocUnsafe:void 0;function cM(e,t){if(t)return e.slice();var n=e.length,r=sM?sM(n):new e.constructor(n);return e.copy(r),r}function lM(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function uM(){return[]}var dM=Object.prototype.propertyIsEnumerable,fM=Object.getOwnPropertySymbols,pM=fM?function(e){return e==null?[]:(e=Object(e),lM(fM(e),function(t){return dM.call(e,t)}))}:uM;function mM(e,t,n){var r=t(e);return qO(e)?r:Hj(r,n(e))}function hM(e){return mM(e,qA,pM)}var gM=vk(AO,`DataView`),_M=vk(AO,`Promise`),vM=vk(AO,`Set`),yM=`[object Map]`,bM=`[object Object]`,xM=`[object Promise]`,SM=`[object Set]`,CM=`[object WeakMap]`,wM=`[object DataView]`,TM=ck(gM),EM=ck(xj),DM=ck(_M),OM=ck(vM),kM=ck(yk),AM=HO;(gM&&AM(new gM(new ArrayBuffer(1)))!=wM||xj&&AM(new xj)!=yM||_M&&AM(_M.resolve())!=xM||vM&&AM(new vM)!=SM||yk&&AM(new yk)!=CM)&&(AM=function(e){var t=HO(e),n=t==bM?e.constructor:void 0,r=n?ck(n):``;if(r)switch(r){case TM:return wM;case EM:return yM;case DM:return xM;case OM:return SM;case kM:return CM}return t});var jM=Object.prototype.hasOwnProperty;function MM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&jM.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var NM=AO.Uint8Array;function PM(e){var t=new e.constructor(e.byteLength);return new NM(t).set(new NM(e)),t}function FM(e,t){var n=PM(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var IM=/\w*$/;function LM(e){var t=new e.constructor(e.source,IM.exec(e));return t.lastIndex=e.lastIndex,t}var RM=jO?jO.prototype:void 0,zM=RM?RM.valueOf:void 0;function BM(e){return zM?Object(zM.call(e)):{}}function VM(e,t){var n=t?PM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var HM=`[object Boolean]`,UM=`[object Date]`,WM=`[object Map]`,GM=`[object Number]`,KM=`[object RegExp]`,qM=`[object Set]`,JM=`[object String]`,YM=`[object Symbol]`,XM=`[object ArrayBuffer]`,ZM=`[object DataView]`,QM=`[object Float32Array]`,$M=`[object Float64Array]`,eN=`[object Int8Array]`,tN=`[object Int16Array]`,nN=`[object Int32Array]`,rN=`[object Uint8Array]`,iN=`[object Uint8ClampedArray]`,aN=`[object Uint16Array]`,oN=`[object Uint32Array]`;function sN(e,t,n){var r=e.constructor;switch(t){case XM:return PM(e);case HM:case UM:return new r(+e);case ZM:return FM(e);case QM:case $M:case eN:case tN:case nN:case rN:case iN:case aN:case oN:return VM(e,n);case WM:return new r;case GM:case JM:return new r(e);case KM:return LM(e);case qM:return new r;case YM:return BM(e)}}function cN(e){return typeof e.constructor==`function`&&!Yk(e)?xk(Uj(e)):{}}var lN=`[object Map]`;function uN(e){return UO(e)&&AM(e)==lN}var dN=RA&&RA.isMap,fN=dN?PA(dN):uN,pN=`[object Set]`;function mN(e){return UO(e)&&AM(e)==pN}var hN=RA&&RA.isSet,gN=hN?PA(hN):mN,_N=1,vN=`[object Arguments]`,yN=`[object Array]`,bN=`[object Boolean]`,xN=`[object Date]`,SN=`[object Error]`,CN=`[object Function]`,wN=`[object GeneratorFunction]`,TN=`[object Map]`,EN=`[object Number]`,DN=`[object Object]`,ON=`[object RegExp]`,kN=`[object Set]`,AN=`[object String]`,jN=`[object Symbol]`,MN=`[object WeakMap]`,NN=`[object ArrayBuffer]`,PN=`[object DataView]`,FN=`[object Float32Array]`,IN=`[object Float64Array]`,LN=`[object Int8Array]`,RN=`[object Int16Array]`,zN=`[object Int32Array]`,BN=`[object Uint8Array]`,VN=`[object Uint8ClampedArray]`,HN=`[object Uint16Array]`,UN=`[object Uint32Array]`,WN={};WN[vN]=WN[yN]=WN[NN]=WN[PN]=WN[bN]=WN[xN]=WN[FN]=WN[IN]=WN[LN]=WN[RN]=WN[zN]=WN[TN]=WN[EN]=WN[DN]=WN[ON]=WN[kN]=WN[AN]=WN[jN]=WN[BN]=WN[VN]=WN[HN]=WN[UN]=!0,WN[SN]=WN[CN]=WN[MN]=!1;function GN(e,t,n,r,i,a){var o,s=t&_N;if(o!==void 0)return o;if(!ZO(e))return e;var c=qO(e);if(c)o=MM(e);else{var l=AM(e),u=l==CN||l==wN;if(sA(e))return cM(e,s);if(l==DN||l==vN||u&&!i)o=u?{}:cN(e);else{if(!WN[l])return i?e:{};o=sN(e,l,s)}}a||=new rM;var d=a.get(e);if(d)return d;a.set(e,o),gN(e)?e.forEach(function(r){o.add(GN(r,t,n,r,e,a))}):fN(e)&&e.forEach(function(r,i){o.set(i,GN(r,t,n,i,e,a))});var f=c?void 0:hM(e);return jk(f||e,function(r,i){f&&(i=r,r=e[i]),Rk(o,i,GN(r,t,n,i,e,a))}),o}var KN=1,qN=4;function JN(e){return GN(e,KN|qN)}var YN=`__lodash_hash_undefined__`;function XN(e){return this.__data__.set(e,YN),this}function ZN(e){return this.__data__.has(e)}function QN(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new kj;++t<n;)this.add(e[t])}QN.prototype.add=QN.prototype.push=XN,QN.prototype.has=ZN;function $N(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function eP(e,t){return e.has(t)}var tP=1,nP=2;function rP(e,t,n,r,i,a){var o=n&tP,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&nP?new QN:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!$N(t,function(e,t){if(!eP(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)})){f=!1;break}}else if(!(m===h||i(m,h,n,r,a))){f=!1;break}}return a.delete(e),a.delete(t),f}function iP(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function aP(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var oP=1,sP=2,cP=`[object Boolean]`,lP=`[object Date]`,uP=`[object Error]`,dP=`[object Map]`,fP=`[object Number]`,pP=`[object RegExp]`,mP=`[object Set]`,hP=`[object String]`,gP=`[object Symbol]`,_P=`[object ArrayBuffer]`,vP=`[object DataView]`,yP=jO?jO.prototype:void 0,bP=yP?yP.valueOf:void 0;function xP(e,t,n,r,i,a,o){switch(n){case vP:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _P:return!(e.byteLength!=t.byteLength||!a(new NM(e),new NM(t)));case cP:case lP:case fP:return Ik(+e,+t);case uP:return e.name==t.name&&e.message==t.message;case pP:case hP:return e==t+``;case dP:var s=iP;case mP:var c=r&oP;if(s||=aP,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=sP,o.set(e,t);var u=rP(s(e),s(t),r,i,a,o);return o.delete(e),u;case gP:if(bP)return bP.call(e)==bP.call(t)}return!1}var SP=1,CP=Object.prototype.hasOwnProperty;function wP(e,t,n,r,i,a){var o=n&SP,s=hM(e),c=s.length;if(c!=hM(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:CP.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){u=s[l];var h=e[u],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return a.delete(e),a.delete(t),p}var TP=1,EP=`[object Arguments]`,DP=`[object Array]`,OP=`[object Object]`,kP=Object.prototype.hasOwnProperty;function AP(e,t,n,r,i,a){var o=qO(e),s=qO(t),c=o?DP:AM(e),l=s?DP:AM(t);c=c==EP?OP:c,l=l==EP?OP:l;var u=c==OP,d=l==OP,f=c==l;if(f&&sA(e)){if(!sA(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new rM,o||BA(e)?rP(e,t,n,r,i,a):xP(e,t,c,n,r,i,a);if(!(n&TP)){var p=u&&kP.call(e,`__wrapped__`),m=d&&kP.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new rM,i(h,g,n,r,a)}}return f?(a||=new rM,wP(e,t,n,r,i,a)):!1}function jP(e,t,n,r,i){return e===t?!0:e==null||t==null||!UO(e)&&!UO(t)?e!==e&&t!==t:AP(e,t,n,r,jP,i)}var MP=1,NP=2;function PP(e,t,n,r){var i=n.length,a=i;if(e==null)return!a;for(e=Object(e);i--;){var o=n[i];if(o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){o=n[i];var s=o[0],c=e[s],l=o[1];if(o[2]){if(c===void 0&&!(s in e))return!1}else{var u=new rM,d;if(!(d===void 0?jP(l,c,MP|NP,r,u):d))return!1}}return!0}function FP(e){return e===e&&!ZO(e)}function IP(e){for(var t=qA(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,FP(i)]}return t}function LP(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function RP(e){var t=IP(e);return t.length==1&&t[0][2]?LP(t[0][0],t[0][1]):function(n){return n===e||PP(n,e,t)}}function zP(e,t){return e!=null&&t in Object(e)}function BP(e,t,n){t=Rj(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=zj(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&Wk(i)&&Pk(o,i)&&(qO(e)||nA(e)))}function VP(e,t){return e!=null&&BP(e,t,zP)}var HP=1,UP=2;function WP(e,t){return tj(e)&&FP(t)?LP(zj(e),t):function(n){var r=Vj(n,e);return r===void 0&&r===t?VP(n,e):jP(t,r,HP|UP)}}function GP(e){return function(t){return t?.[e]}}function KP(e){return function(t){return Bj(t,e)}}function qP(e){return tj(e)?GP(zj(e)):KP(e)}function JP(e){return typeof e==`function`?e:e==null?QO:typeof e==`object`?qO(e)?WP(e[0],e[1]):RP(e):qP(e)}function YP(e){return function(e,t,n){for(var r=-1,i=Object(e),a=n(e),o=a.length;o--;){var s=a[++r];if(t(i[s],s,i)===!1)break}return e}}var XP=YP();function ZP(e,t){return e&&XP(e,t,qA)}function QP(e,t,n){(n!==void 0&&!Ik(e[t],n)||n===void 0&&!(t in e))&&Fk(e,t,n)}function $P(e){return UO(e)&&Gk(e)}function eF(e,t){if(!(t===`constructor`&&typeof e[t]==`function`)&&t!=`__proto__`)return e[t]}function tF(e){return zk(e,ZA(e))}function nF(e,t,n,r,i,a,o){var s=eF(e,n),c=eF(t,n),l=o.get(c);if(l){QP(e,n,l);return}var u=a?a(s,c,n+``,e,t,o):void 0,d=u===void 0;if(d){var f=qO(c),p=!f&&sA(c),m=!f&&!p&&BA(c);u=c,f||p||m?qO(s)?u=s:$P(s)?u=Ck(s):p?(d=!1,u=cM(c,!0)):m?(d=!1,u=VM(c,!0)):u=[]:Xj(c)||nA(c)?(u=s,nA(s)?u=tF(s):(!ZO(s)||rk(s))&&(u=cN(c))):d=!1}d&&(o.set(c,u),i(u,c,r,a,o),o.delete(c)),QP(e,n,u)}function rF(e,t,n,r,i){e!==t&&XP(t,function(a,o){if(i||=new rM,ZO(a))nF(e,t,o,n,rF,r,i);else{var s=r?r(eF(e,o),a,o+``,e,t,i):void 0;s===void 0&&(s=a),QP(e,o,s)}},ZA)}var iF=qk(function(e,t,n,r){rF(e,t,n,r)});function aF(e,t){var n={};return t=JP(t),ZP(e,function(e,r,i){Fk(n,t(e,r,i),e)}),n}var oF=RegExp(`([\\p{Ll}\\d])(\\p{Lu})`,`gu`),sF=RegExp(`(\\p{Lu})([\\p{Lu}][\\p{Ll}])`,`gu`),cF=RegExp(`(\\d)\\p{Ll}|(\\p{L})\\d`,`u`),lF=/[^\p{L}\d]+/giu,uF=`$1\0$2`,dF=``;function fF(e){let t=e.trim();t=t.replace(oF,uF).replace(sF,uF),t=t.replace(lF,`\0`);let n=0,r=t.length;for(;t.charAt(n)===`\0`;)n++;if(n===r)return[];for(;t.charAt(r-1)===`\0`;)r--;return t.slice(n,r).split(/\0/g)}function pF(e){let t=fF(e);for(let e=0;e<t.length;e++){let n=t[e],r=cF.exec(n);if(r){let i=r.index+(r[1]??r[2]).length;t.splice(e,1,n.slice(0,i),n.slice(i))}}return t}function mF(e,t){let[n,r,i]=vF(e,t),a=hF(void 0),o=_F(a,gF(void 0));return n+r.map((e,t)=>t===0?a(e):o(e,t)).join(``)+i}function hF(e){return t=>t.toLocaleLowerCase(e)}function gF(e){return t=>t.toLocaleUpperCase(e)}function _F(e,t){return(n,r)=>{let i=n[0];return(r>0&&i>=`0`&&i<=`9`?`_`+i:t(i))+e(n.slice(1))}}function vF(e,t={}){let n=t.split??(t.separateNumbers?pF:fF),r=t.prefixCharacters??dF,i=t.suffixCharacters??dF,a=0,o=e.length;for(;a<e.length;){let t=e.charAt(a);if(!r.includes(t))break;a++}for(;o>a;){let t=o-1,n=e.charAt(t);if(!i.includes(n))break;o=t}return[e.slice(0,a),n(e.slice(a,o)),e.slice(o)]}var yF=e=>/.+-.+/.test(e)?mF(e):e,bF=e=>Object.prototype.toString.call(e).slice(8,-1)===`Object`;function xF(e,t){let n=Object.create(null),r=e.split(`,`);for(let e=0;e<r.length;e++)n[r[e]]=!0;return e=>!!n[e]}var SF=xF(`String,Number,Boolean,Function,Symbol,BigInt`);function CF(e){let t=e?.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?`null`:``}function wF(e,t){let n,r=CF(t);if(SF(r)){let i=typeof e;n=i===r.toLowerCase(),!n&&i===`object`&&(n=e instanceof t)}else n=r===`Object`?ZO(e):r===`Array`?Array.isArray(e):r===`null`?e===null:e instanceof t;return{valid:n,expectedType:r}}function TF({prop:e,type:t,validator:n}){if(![void 0,null].includes(e)&&t){let n=!1,r=Array.isArray(t)?t:[t],i=[];for(let t=0;t<r.length&&!n;t++){let{valid:a,expectedType:o}=wF(e,r[t]);i.push(o||``),n=a}if(!n)throw TypeError(`Invalid prop: type check failed, expecting [${i.join(`, `)}], receiving: ${e}`)}if(n&&!n(e))throw Error(`Invalid prop: validator check failed, receiving: ${e}`)}function EF(e,{mergeObject:t,mergeObjectCustomizer:n,mergeFunction:r}){let i=[];for(let t=e.length-1;t>=0;t--)i.push(e[t]);let a=n||(r?(e,t)=>typeof e==`function`&&typeof t==`function`?r?.(t,e):void 0:void 0);return t===`deep`?iF(...i,a):QA(...i,a)}function DF(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function OF(e,t={}){let{type:n,default:r,defaultIsDynamic:i=!1,required:a=!1,validator:o,camelizeObjectKeys:s=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:l=!0}=t,{mergeObject:u=`deep`,mergeObjectCustomizer:d,mergeFunction:f=!1}=t,p=[],m,h=!1,g=!1,_=e=>{if(e!==void 0){TF({type:n,prop:e,validator:o});let t=bF(e),r=typeof e==`function`;return h=t,g=r,t?(e=JN(e),s?aF(e,(e,t)=>yF(t)):e):e}};for(let t of e)p.push(_(t));if(!i)p.push(_(r));else if(typeof r!=`function`)throw TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${r}`);h||(u=!1,g||(f=!1));for(let e=0;e<p.length;e++){let t=p[e];if(t!==void 0){m=e===p.length-1?t:u?EF(c?[t,r]:p,{mergeObject:u,mergeObjectCustomizer:d,mergeFunction:f}):f?DF(l?[t,r]:p,{mergeFunction:f}):t;break}}if(a&&[void 0,null].includes(m))throw Error(`Missing required prop`);return i?OF(e,{...t,default:r(m),defaultIsDynamic:!1}):m}function kF(e){let t=Array.from(yF(e));return t[0]=t[0].toUpperCase(),t.unshift(`o`,`n`),t.join(``)}function AF(e,{props:t=[],camelizePropNames:n=!1}={}){let r={props:{},attrs:{},listeners:{},hooks:{},slots:{}},i;if(Array.isArray(t))i=n?t.map(e=>yF(e)):t;else if(n){i=[];for(let e in t)i.push(yF(e))}else i=Object.keys(t);for(let t in e)if(t.startsWith(`@`)){let n=t.substring(1);if(n.startsWith(`vue:`))r.hooks[kF(n.replace(`vue:`,`vnode-`))]=e[t];else{if(n.startsWith(`vnode`))throw Error(`@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.`);r.listeners[kF(n)]=e[t]}}else if(t.startsWith(`#`)){let n=t.substring(1);n&&(r.slots[n]=e[t])}else{let a=n?yF(t):t;i.includes(a)?r.props[a]=e[t]:r.attrs[t]=e[t]}return r}var jF=`JsonEditorVue`,MF=[`mainMenuBar`,`navigationBar`,`statusBar`,`askToFormat`,`readOnly`,`escapeControlCharacters`,`escapeUnicodeCharacters`,`flattenColumns`],NF={},PF={},FF=`modelValue`,IF=`update:modelValue`,LF={[FF]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(MF.map(e=>[e,{type:Boolean,default:void 0}]))},RF=a({name:jF,install(e,t){let n=AF(t||{},{props:LF});Object.assign(NF,n.props),Object.assign(PF,n.attrs),e.component(jF,this)},props:LF,emits:{[IF](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:a,expose:o}){let s=c()?.proxy,l=m(),f=m(!1),h=m();n(()=>{var t;h.value=OF([e.mode,NF.mode],{type:String}),(t=l.value)==null||t.updateProps({mode:h.value||A_.tree})});let _=e=>{a(`update:mode`,e)};NF.mode!==void 0&&e.mode===void 0&&_(NF.mode);let v=p(()=>OF([e.debounce,NF.debounce,300],{type:Number})),y=p(()=>OF([e.stringified,NF.stringified,!0],{type:Boolean})),b=KD,x=e=>{f.value=!0,!y.value&&e.text&&(l.value&&!l.value.validate()&&(e.json=b(e.text)),e.text=void 0),a(IF,e.text===void 0?e.json:e.text)},S=DO(x,v.value),C=e=>{h.value===`text`?S(e):x(e)},w=(e,t)=>(...n)=>{e(...n),t(...n)};return o?.({jsonEditor:l}),i(()=>{var e;(e=l.value)==null||e.destroy()}),g(()=>{let n=OF([e[FF],NF[FF]]),r=OF([Object.fromEntries(Array.from(MF,t=>[t,OF([e[t],NF[t]])]).filter(([,e])=>e!==void 0)),t,PF],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:e=>(b=e.parser?.parse||KD,{onChange:C,onChangeMode:_,mode:h.value,parser:{parse:qD,stringify:JSON.stringify},...n!==void 0&&{content:{[typeof n==`string`&&h.value===`text`&&y.value?`text`:`json`]:n}}}),mergeFunction:w,mergeObject:`shallow`,type:Object});l.value=BD({target:s?.$refs.jsonEditorRef,props:r}),u(()=>e[FF],e=>{if(f.value){f.value=!1;return}l.value&&l.value.set([void 0,``].includes(e)?{text:``}:{[typeof e==`string`&&h.value===`text`&&y.value?`text`:`json`]:e})},{deep:!0}),u(()=>Array.from(MF,t=>e[t]),e=>{var t;(t=l.value)==null||t.updateProps(Object.fromEntries(Array.from(e,(e,t)=>[MF[t],e]).filter(([,e])=>e!==void 0)))}),u(()=>t,e=>{var t;let n={};(e.onChange||e[`on-change`])&&(n.onChange=C),(e.onChangeMode||e[`on-change-mode`])&&(n.onChangeMode=_),b=e.parser?.parse||KD,(t=l.value)==null||t.updateProps(Object.getOwnPropertyNames(n).length>0?OF([e,n],{camelizeObjectKeys:!0,mergeFunction:w,mergeObject:`shallow`,type:Object}):e)},{deep:!0}),o||(o=e=>{for(let t in e)s[t]=d(e[t])},o({jsonEditor:l}))}),()=>r(`div`,{ref:`jsonEditorRef`})}}),zF=it(a({__name:`JsonField`,props:s({id:{},name:{},options:{},rtl:{type:Boolean},validation:{},invalid:{type:Boolean},errors:{},path:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=f(e,`modelValue`),r=p(()=>{let{readonly:e,mode:n,...r}=t.options;return{mode:n??`tree`,readOnly:e??!1,stringified:!1,mainMenuBar:!0,navigationBar:!1,askToFormat:!1,...r}});return(t,i)=>(o(),h(d(RF),l({id:e.id,name:e.name,modelValue:n.value,"onUpdate:modelValue":i[0]||=e=>n.value=e,dir:`ltr`,class:[`jse-field block w-full overflow-hidden rounded-md border shadow-xs sm:text-sm transition-colors duration-200`,e.invalid?`border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500`:`border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500`],"aria-invalid":e.invalid||void 0},r.value),null,16,[`id`,`name`,`modelValue`,`class`,`aria-invalid`]))}}),[[`__scopeId`,`data-v-f822bc85`]]);export{zF as default};