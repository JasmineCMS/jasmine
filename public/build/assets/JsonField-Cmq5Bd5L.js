import{r as e,t}from"./rolldown-runtime-QTnfLwEv.js";import{$ as n,B as r,Ft as i,Ht as a,L as o,On as s,Ut as c,ct as l,et as u,ft as d,g as f,k as p,mt as m,v as h,vn as g}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{u as _}from"./app-D5K1mvEU.js";import{$ as v,B as y,C as b,Et as x,F as S,H as C,K as w,L as T,M as E,Q as ee,R as te,St as ne,U as re,V as ie,W as ae,X as oe,_ as se,_t as D,a as O,at as ce,b as le,bt as ue,c as de,ct as fe,d as pe,et as me,ft as he,g as ge,gt as _e,ht as k,i as ve,it as A,k as j,l as ye,lt as be,m as M,mt as N,n as xe,nt as Se,ot as Ce,pt as we,q as Te,r as Ee,rt as De,st as Oe,t as ke,tt as Ae,u as je,ut as Me,v as Ne,vt as Pe}from"./dist-ZiobKlkL.js";import{n as Fe}from"./dist-Blcxdfiw.js";import{C as Ie,S as Le,_ as P,a as Re,b as ze,c as Be,d as Ve,f as He,g as Ue,h as We,i as Ge,l as Ke,m as qe,n as Je,o as Ye,p as Xe,r as Ze,s as Qe,t as $e,u as et,v as tt,w as nt,x as rt,y as it}from"./debounce-Bx4cnwDp.js";import{t as at}from"./_plugin-vue_export-helper-BDNMzG2s.js";function ot(e){return Array.isArray(e)}function st(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function ct(e){return e&&typeof e==`object`?e.op===`add`:!1}function lt(e){return e&&typeof e==`object`?e.op===`remove`:!1}function ut(e){return e&&typeof e==`object`?e.op===`replace`:!1}function dt(e){return e&&typeof e==`object`?e.op===`copy`:!1}function ft(e){return e&&typeof e==`object`?e.op===`move`:!1}function pt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function mt(e,t){return e===t}function ht(e){return e.slice(0,e.length-1)}function gt(e){return e[e.length-1]}function _t(e,t,n=mt){if(e.length<t.length)return!1;for(let r=0;r<t.length;r++)if(!n(e[r],t[r]))return!1;return!0}function vt(e){return typeof e==`object`&&!!e}function yt(e){if(ot(e)){let t=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}if(st(e)){let t={...e};return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}return e}function bt(e,t,n){if(e[t]===n)return e;let r=yt(e);return r[t]=n,r}function F(e,t){let n=e,r=0;for(;r<t.length;)n=st(n)?n[t[r]]:ot(n)?n[Number.parseInt(t[r],10)]:void 0,r++;return n}function xt(e,t,n,r=!1){if(t.length===0)return n;let i=t[0],a=xt(e?e[i]:void 0,t.slice(1),n,r);if(st(e)||ot(e))return bt(e,i,a);if(r){let e=St.test(i)?[]:{};return e[i]=a,e}throw Error(`Path does not exist`)}var St=/^\d+$/;function Ct(e,t,n){if(t.length===0)return n(e);if(!vt(e))throw Error(`Path doesn't exist`);let r=t[0];return bt(e,r,Ct(e[r],t.slice(1),n))}function wt(e,t){if(t.length===0)return e;if(!vt(e))throw Error(`Path does not exist`);if(t.length===1){let n=t[0];if(!(n in e))return e;let r=yt(e);return ot(r)&&r.splice(Number.parseInt(n,10),1),st(r)&&delete r[n],r}let n=t[0];return bt(e,n,wt(e[n],t.slice(1)))}function Tt(e,t,n){let r=t.slice(0,t.length-1),i=t[t.length-1];return Ct(e,r,e=>{if(!Array.isArray(e))throw TypeError(`Array expected at path ${JSON.stringify(r)}`);let t=yt(e);return t.splice(Number.parseInt(i,10),0,n),t})}function Et(e,t){return e===void 0?!1:t.length===0||e!==null&&Et(e[t[0]],t.slice(1))}function Dt(e){let t=e.split(`/`);return t.shift(),t.map(e=>e.replace(/~1/g,`/`).replace(/~0/g,`~`))}function Ot(e){return e.map(kt).join(``)}function kt(e){return`/${String(e).replace(/~/g,`~0`).replace(/\//g,`~1`)}`}function At(e,t){return e+kt(t)}function jt(e,t,n){let r=e;for(let e=0;e<t.length;e++){Bt(t[e]);let i=t[e];if(n?.before){let e=n.before(r,i);if(e!==void 0){if(e.document!==void 0&&(r=e.document),e.json!==void 0)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`);e.operation!==void 0&&(i=e.operation)}}let a=r,o=Vt(r,i.path);if(i.op===`add`)r=Pt(r,o,i.value);else if(i.op===`remove`)r=Nt(r,o);else if(i.op===`replace`)r=Mt(r,o,i.value);else if(i.op===`copy`)r=Ft(r,o,Ht(i.from));else if(i.op===`move`)r=It(r,o,Ht(i.from));else if(i.op===`test`)Lt(r,o,i.value);else throw Error(`Unknown JSONPatch operation ${JSON.stringify(i)}`);if(n?.after){let e=n.after(r,i,a);e!==void 0&&(r=e)}}return r}function Mt(e,t,n){return Et(e,t)?xt(e,t,n):e}function Nt(e,t){return wt(e,t)}function Pt(e,t,n){return Rt(e,t)?Tt(e,t,n):xt(e,t,n)}function Ft(e,t,n){let r=F(e,n);return Rt(e,t)?Tt(e,t,r):xt(e,t,r)}function It(e,t,n){let r=F(e,n),i=wt(e,n);return Rt(i,t)?Tt(i,t,r):xt(i,t,r)}function Lt(e,t,n){if(n===void 0)throw Error(`Test failed: no value provided (path: "${Ot(t)}")`);if(!Et(e,t))throw Error(`Test failed: path not found (path: "${Ot(t)}")`);if(!pt(F(e,t),n))throw Error(`Test failed, value differs (path: "${Ot(t)}")`)}function Rt(e,t){if(t.length===0)return!1;let n=F(e,ht(t));return Array.isArray(n)}function zt(e,t){if(gt(t)!==`-`)return t;let n=ht(t),r=F(e,n);return n.concat(r.length)}function Bt(e){if(![`add`,`remove`,`replace`,`copy`,`move`,`test`].includes(e.op))throw Error(`Unknown JSONPatch op ${JSON.stringify(e.op)}`);if(typeof e.path!=`string`)throw Error(`Required property "path" missing or not a string in operation ${JSON.stringify(e)}`);if((e.op===`copy`||e.op===`move`)&&typeof e.from!=`string`)throw Error(`Required property "from" missing or not a string in operation ${JSON.stringify(e)}`)}function Vt(e,t){return zt(e,Dt(t))}function Ht(e){return Dt(e)}function Ut(e,t,n){let r=[];return jt(e,t,{before:(e,t)=>{let i,a=Vt(e,t.path);if(t.op===`add`)i=Kt(e,a);else if(t.op===`remove`)i=Gt(e,a);else if(t.op===`replace`)i=Wt(e,a);else if(t.op===`copy`)i=qt(e,a);else if(t.op===`move`)i=Jt(e,a,Ht(t.from));else if(t.op===`test`)i=[];else throw Error(`Unknown JSONPatch operation ${JSON.stringify(t)}`);let o;if(n?.before){let r=n.before(e,t,i);if(r?.revertOperations&&(i=r.revertOperations),r?.document&&(o=r.document),r?.json)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`)}return r=i.concat(r),o===void 0?{}:{document:o}}}),r}function Wt(e,t){return Et(e,t)?[{op:`replace`,path:Ot(t),value:F(e,t)}]:[]}function Gt(e,t){return[{op:`add`,path:Ot(t),value:F(e,t)}]}function Kt(e,t){return Rt(e,t)||!Et(e,t)?[{op:`remove`,path:Ot(t)}]:Wt(e,t)}function qt(e,t){return Kt(e,t)}function Jt(e,t,n){if(t.length<n.length&&_t(n,t))return[{op:`replace`,path:Ot(t),value:e}];let r={op:`move`,from:Ot(t),path:Ot(n)};return!Rt(e,t)&&Et(e,t)?[r,...Gt(e,t)]:[r]}var Yt=t((e=>{var t={b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`,'"':`"`,"/":`/`,"\\":`\\`},n=97;e.parse=function(e,r,i){var o={},s=0,c=0,l=0,u=i&&i.bigint&&typeof BigInt<`u`;return{data:d(``,!0),pointers:o};function d(t,n){f();var r;S(t,`value`);var i=v();switch(i){case`t`:_(`rue`),r=!0;break;case`f`:_(`alse`),r=!1;break;case`n`:_(`ull`),r=null;break;case`"`:r=p();break;case`[`:r=h(t);break;case`{`:r=g(t);break;default:y(),`-0123456789`.indexOf(i)>=0?r=m():T()}return S(t,`valueEnd`),f(),n&&l<e.length&&T(),r}function f(){loop:for(;l<e.length;){switch(e[l]){case` `:c++;break;case`	`:c+=4;break;case`\r`:c=0;break;case`
`:c=0,s++;break;default:break loop}l++}}function p(){for(var e=``,n;n=v(),n!=`"`;)n==`\\`?(n=v(),n in t?e+=t[n]:n==`u`?e+=b():E()):e+=n;return e}function m(){var t=``,n=!0;e[l]==`-`&&(t+=v()),t+=e[l]==`0`?v():x(),e[l]==`.`&&(t+=v()+x(),n=!1),(e[l]==`e`||e[l]==`E`)&&(t+=v(),(e[l]==`+`||e[l]==`-`)&&(t+=v()),t+=x(),n=!1);var r=+t;return u&&n&&(r>2**53-1||r<-(2**53-1))?BigInt(t):r}function h(e){f();var t=[],n=0;if(v()==`]`)return t;for(y();;){var r=e+`/`+n;t.push(d(r)),f();var i=v();if(i==`]`)break;i!=`,`&&E(),f(),n++}return t}function g(e){f();var t={};if(v()==`}`)return t;for(y();;){var n=w();v()!=`"`&&E();var r=p(),i=e+`/`+a(r);C(i,`key`,n),S(i,`keyEnd`),f(),v()!=`:`&&E(),f(),t[r]=d(i),f();var o=v();if(o==`}`)break;o!=`,`&&E(),f()}return t}function _(e){for(var t=0;t<e.length;t++)v()!==e[t]&&E()}function v(){ee();var t=e[l];return l++,c++,t}function y(){l--,c--}function b(){for(var e=4,t=0;e--;){t<<=4;var r=v().toLowerCase();r>=`a`&&r<=`f`?t+=r.charCodeAt()-n+10:r>=`0`&&r<=`9`?t+=+r:E()}return String.fromCharCode(t)}function x(){for(var t=``;e[l]>=`0`&&e[l]<=`9`;)t+=v();if(t.length)return t;ee(),T()}function S(e,t){C(e,t,w())}function C(e,t,n){o[e]=o[e]||{},o[e][t]=n}function w(){return{line:s,column:c,pos:l}}function T(){throw SyntaxError(`Unexpected token `+e[l]+` in JSON at position `+l)}function E(){y(),T()}function ee(){if(l>=e.length)throw SyntaxError(`Unexpected end of JSON input`)}};var r=/~/g,i=/\//g;function a(e){return e.replace(r,`~0`).replace(i,`~1`)}})),Xt=class extends Error{constructor(e,t){super(`${e} at position ${t}`),this.position=t}},Zt=32,Qt=10,$t=9,en=13,tn=160,nn=6158,rn=8192,an=8203,on=8239,sn=8287,cn=12288,ln=65279;function un(e){return/^[0-9A-Fa-f]$/.test(e)}function dn(e){return e>=`0`&&e<=`9`}function fn(e){return e>=` `}function pn(e){return`,:[]/{}()
+`.includes(e)}function mn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`}function hn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`||e>=`0`&&e<=`9`}var gn=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,_n=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function vn(e){return`,[]/{}
+`.includes(e)}function yn(e){return Tn(e)||bn.test(e)}var bn=/^[[{\w-]$/;function xn(e){return e===`
`||e===`\r`||e===`	`||e===`\b`||e===`\f`}function Sn(e,t){let n=e.charCodeAt(t);return n===Zt||n===Qt||n===$t||n===en}function Cn(e,t){let n=e.charCodeAt(t);return n===Zt||n===$t||n===en}function wn(e,t){let n=e.charCodeAt(t);return n===tn||n===nn||n>=rn&&n<=an||n===on||n===sn||n===cn||n===ln}function Tn(e){return En(e)||On(e)}function En(e){return e===`"`||e===`“`||e===`”`}function Dn(e){return e===`"`}function On(e){return e===`'`||e===`‘`||e===`’`||e==="`"||e===`´`}function kn(e){return e===`'`}function An(e,t){let n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=e.lastIndexOf(t);return r===-1?e:e.substring(0,r)+(n?``:e.substring(r+1))}function jn(e,t){let n=e.length;if(!Sn(e,n-1))return e+t;for(;Sn(e,n-1);)n--;return e.substring(0,n)+t+e.substring(n)}function Mn(e,t,n){return e.substring(0,t)+e.substring(t+n)}function Nn(e){return/[,\n][ \t\r]*$/.test(e)}var Pn={"&quot;":`"`,"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&apos;":`'`};function Fn(e){if(e.charAt(0)!==`&`)return null;let t=e.indexOf(`;`);if(t===-1)return null;let n=e.substring(0,t+1),r=Pn[n];if(r!==void 0)return{char:r,length:n.length};if(e.charAt(1)===`#`){let r=e.substring(2,t),i=r.charAt(0)===`x`||r.charAt(0)===`X`,a=i?r.substring(1):r;if(a.length>0){let e=Number.parseInt(a,i?16:10);if(!Number.isNaN(e)&&e>=0&&e<=1114111)return{char:String.fromCodePoint(e),length:n.length}}}return null}function In(e){return e!==null&&e.char===`"`}function Ln(e){return e!==null&&e.char===`'`}function Rn(e,t){let n=0;for(let r=0;r<e.length;r++)e.charAt(r)===t&&n++;return n}function zn(e,t){switch(t){case`)`:return Rn(e,`(`)>Rn(e,`)`);case`]`:return Rn(e,`[`)>Rn(e,`]`);case`}`:return Rn(e,`{`)>Rn(e,`}`);default:return!1}}var Bn={"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},Vn={'"':`"`,"\\":`\\`,"/":`/`,b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`};function Hn(e){let t=0,n=``;c(["```","[```","{```"]),i()||ne(),c(["```","```]","```}"]);let r=u(`,`);for(r&&a(),yn(e[t])&&Nn(n)?(r||(n=jn(n,`,`)),g()):r&&(n=An(n,`,`));e[t]===`}`||e[t]===`]`;)t++,a();if(t>=e.length)return n;te();function i(){a();let e=m()||h()||_()||y()||b()||S(!1)||C();return a(),e}function a(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=t,r=o(e);do r=s(),r&&=o(e);while(r);return t>n}function o(r){let i=r?Sn:Cn,a=``;for(;;)if(i(e,t))a+=e[t],t++;else if(wn(e,t))a+=` `,t++;else break;return a.length>0?(n+=a,!0):!1}function s(){if(e[t]===`/`&&e[t+1]===`*`){for(;t<e.length&&!Un(e,t);)t++;return t+=2,!0}if(e[t]===`/`&&e[t+1]===`/`){for(;t<e.length&&e[t]!==`
`;)t++;return!0}return!1}function c(n){if(l(n)){if(mn(e[t]))for(;t<e.length&&hn(e[t]);)t++;return a(),!0}return!1}function l(n){o(!0);for(let r of n){let n=t+r.length;if(e.slice(t,n)===r)return t=n,!0}return!1}function u(r){return e[t]===r?(n+=e[t],t++,!0):!1}function d(n){return e[t]===n?(t++,!0):!1}function f(){return d(`\\`)}function p(){return a(),e[t]===`.`&&e[t+1]===`.`&&e[t+2]===`.`?(t+=3,a(),d(`,`),!0):!1}function m(){if(e[t]===`{`){n+=`{`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`}`;){let o;if(r?o=!0:(o=u(`,`),o||(n=jn(n,`,`)),a()),p(),!(_()||S(!0))){e[t]===`}`||e[t]===`{`||e[t]===`]`||e[t]===`[`||e[t]===void 0?r||(n=An(n,`,`)):re();break}a();let s=u(`:`),c=t>=e.length;s||(yn(e[t])||c?n=jn(n,`:`):ie()),i()||(s||c?n+=`null`:ie()),r=!1}return e[t]===`}`?(n+=`}`,t++):n=jn(n,`}`),!0}return!1}function h(){if(e[t]===`[`){n+=`[`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`]`;){if(r||u(`,`)||(n=jn(n,`,`)),p(),!i()){r||(n=An(n,`,`));break}r=!1}return e[t]===`]`?(n+=`]`,t++):n=jn(n,`]`),!0}return!1}function g(){let e=!0,t=!0;for(;t;)e?e=!1:u(`,`)||(n=jn(n,`,`)),t=i();t||(n=An(n,`,`)),n=`[\n${n}\n]`}function _(){let r=arguments.length>0&&arguments[0]!==void 0&&arguments[0],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=e[t]===`\\`;o&&(t++,Tn(e[t])||te());let s=e[t]===`&`?Fn(e.slice(t,t+12)):null,c=In(s)||Ln(s);if(Tn(e[t])||c){let l=Dn(e[t])?Dn:kn(e[t])?kn:On(e[t])?On:En,u=t,d=n.length,p=`"`;for(t+=c&&s?s.length:1;;){if(t>=e.length){let i=w(t-1);return!r&&pn(e.charAt(i))?(t=u,n=n.substring(0,d),_(!0)):(p=jn(p,`"`),n+=p,!0)}if(t===i)return p=jn(p,`"`),n+=p,!0;let m=c&&e[t]===`&`?Fn(e.slice(t,t+12)):null;if(m&&s?m.char===s.char:l(e[t])){let i=t,o=p.length;if(p+=`"`,t+=m?m.length:1,n+=p,a(!1),r||t>=e.length||pn(e[t])&&!zn(p,e[t])||Tn(e[t])&&!T(t)||dn(e[t]))return v(),!0;e[t]===`\\`&&te();let s=w(i-1),c=e.charAt(s);if(c===`,`)return t=u,n=n.substring(0,d),_(!1,s);if(pn(c))return t=u,n=n.substring(0,d),_(!0);n=n.substring(0,d),t=i+(m?m.length:1),p=`${p.substring(0,o)}\\${p.substring(o)}`}else if(r&&vn(e[t])){if(e[t-1]===`:`&&gn.test(e.substring(u+1,t+2)))for(;t<e.length&&_n.test(e[t]);)p+=e[t],t++;return p=jn(p,`"`),n+=p,v(),!0}else if(m){let e=m.char;e===`"`?p+=`\\"`:xn(e)?p+=Bn[e]:p+=e,t+=m.length}else if(e[t]===`\\`){let n=e.charAt(t+1);if(Vn[n]!==void 0)p+=e.slice(t,t+2),t+=2;else if(n===`u`){let n=2;for(;n<6&&un(e[t+n]);)n++;n===6?(p+=e.slice(t,t+6),t+=6):t+n>=e.length?t=e.length:ae()}else n===`
`?(p+=`\\n`,t+=2):(p+=n,t+=2)}else{let n=e.charAt(t);n===`"`&&e[t-1]!==`\\`?(p+=`\\${n}`,t++):xn(n)?(p+=Bn[n],t++):(fn(n)||ee(n),p+=n,t++)}o&&f()}}return!1}function v(){let r=!1;for(a();e[t]===`+`;){r=!0,t++,a(),n=An(n,`"`,!0);let e=n.length;n=_()?Mn(n,e,1):jn(n,`"`)}return r}function y(){let r=t,i=``,a=!1;for(e[t]===`-`&&(i+=e[t],t++,!dn(e[t])&&E()&&(i+=`0`)),e[t]===`0`&&dn(e[t+1])&&(a=!0);dn(e[t]);)i+=e[t],t++;if(e[t]===`.`)for((i===``||i===`-`)&&(i+=`0`),i+=e[t],t++,dn(e[t])||(i+=`0`);dn(e[t]);)i+=e[t],t++;if(t>r){if(e[t]===`e`||e[t]===`E`)for(i===`-`&&(a=!0),i+=e[t],t++,(e[t]===`-`||e[t]===`+`)&&(i+=e[t],t++),dn(e[t])||(i+=`0`);dn(e[t]);)i+=e[t],t++;return E()?(n+=a?`"${e.substring(r,t)}"`:i,!0):(t=r,!1)}return!1}function b(){return x(`true`,`true`)||x(`false`,`false`)||x(`null`,`null`)||x(`True`,`true`)||x(`False`,`false`)||x(`None`,`null`)}function x(r,i){return e.slice(t,t+r.length)===r&&!hn(e[t+r.length])?(n+=i,t+=r.length,!0):!1}function S(r){let a=t;if(mn(e[t])){for(;t<e.length&&hn(e[t]);)t++;let n=t;for(;Sn(e,n);)n++;if(e[n]===`(`)return t=n+1,i(),e[t]===`)`&&(t++,e[t]===`;`&&t++),!0}for(;t<e.length&&!vn(e[t])&&!Tn(e[t])&&(!r||e[t]!==`:`);)t++;if(e[t-1]===`:`&&gn.test(e.substring(a,t+2)))for(;t<e.length&&_n.test(e[t]);)t++;if(t>a){for(;Sn(e,t-1)&&t>0;)t--;let r=e.slice(a,t);return n+=r===`undefined`?`null`:JSON.stringify(r),e[t]===`"`&&t++,!0}}function C(){if(e[t]===`/`){let r=t;for(t++;t<e.length&&(e[t]!==`/`||e[t-1]===`\\`);)t++;return t++,n+=JSON.stringify(e.substring(r,t)),!0}}function w(t){let n=t;for(;n>0&&Sn(e,n);)n--;return n}function T(t){let n=t+1;for(;n<e.length&&Sn(e,n);)n++;return n>=e.length||pn(e[n])}function E(){return t>=e.length||pn(e[t])||Sn(e,t)}function ee(e){throw new Xt(`Invalid character ${JSON.stringify(e)}`,t)}function te(){throw new Xt(`Unexpected character ${JSON.stringify(e[t])}`,t)}function ne(){throw new Xt(`Unexpected end of json string`,e.length)}function re(){throw new Xt(`Object key expected`,t)}function ie(){throw new Xt(`Colon expected`,t)}function ae(){throw new Xt(`Invalid unicode character "${e.slice(t,t+6)}"`,t)}}function Un(e,t){return e[t]===`*`&&e[t+1]===`/`}var Wn=1/0,Gn=17976931348623157e292;function Kn(e){return e?(e=Je(e),e===Wn||e===-Wn?(e<0?-1:1)*Gn:e===e?e:0):e===0?e:0}function qn(e){var t=Kn(e),n=t%1;return t===t?n?t-n:t:0}function Jn(e){return e}var Yn=Xe(Le,`WeakMap`),Xn=Object.create,Zn=function(){function e(){}return function(t){if(!Ue(t))return{};if(Xn)return Xn(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Qn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function $n(){}function er(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}var tr=800,nr=16,rr=Date.now;function ir(e){var t=0,n=0;return function(){var r=rr(),i=nr-(r-n);if(n=r,i>0){if(++t>=tr)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function ar(e){return function(){return e}}var or=function(){try{var e=Xe(Object,`defineProperty`);return e({},``,{}),e}catch{}}(),sr=ir(or?function(e,t){return or(e,`toString`,{configurable:!0,enumerable:!1,value:ar(t),writable:!0})}:Jn);function cr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var lr=9007199254740991,ur=/^(?:0|[1-9]\d*)$/;function dr(e,t){var n=typeof e;return t??=lr,!!t&&(n==`number`||n!=`symbol`&&ur.test(e))&&e>-1&&e%1==0&&e<t}function fr(e,t,n){t==`__proto__`&&or?or(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var pr=Object.prototype.hasOwnProperty;function mr(e,t,n){var r=e[t];(!(pr.call(e,t)&&He(r,n))||n===void 0&&!(t in e))&&fr(e,t,n)}function hr(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?fr(n,s,c):mr(n,s,c)}return n}var gr=Math.max;function _r(e,t,n){return t=gr(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=gr(r.length-t,0),o=Array(a);++i<a;)o[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(o),Qn(e,this,s)}}function vr(e,t){return sr(_r(e,t,Jn),e+``)}var yr=9007199254740991;function br(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=yr}function xr(e){return e!=null&&br(e.length)&&!We(e)}function Sr(e,t,n){if(!Ue(n))return!1;var r=typeof t;return(r==`number`?xr(n)&&dr(t,n.length):r==`string`&&t in n)?He(n[t],e):!1}var Cr=Object.prototype;function wr(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||Cr)}function Tr(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Er=`[object Arguments]`;function Dr(e){return it(e)&&ze(e)==Er}var Or=Object.prototype,kr=Or.hasOwnProperty,Ar=Or.propertyIsEnumerable,jr=Dr(function(){return arguments}())?Dr:function(e){return it(e)&&kr.call(e,`callee`)&&!Ar.call(e,`callee`)};function Mr(){return!1}var Nr=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Pr=Nr&&typeof module==`object`&&module&&!module.nodeType&&module,Fr=Pr&&Pr.exports===Nr?Le.Buffer:void 0,Ir=(Fr?Fr.isBuffer:void 0)||Mr,Lr=`[object Arguments]`,Rr=`[object Array]`,zr=`[object Boolean]`,Br=`[object Date]`,Vr=`[object Error]`,Hr=`[object Function]`,Ur=`[object Map]`,Wr=`[object Number]`,Gr=`[object Object]`,Kr=`[object RegExp]`,qr=`[object Set]`,Jr=`[object String]`,Yr=`[object WeakMap]`,Xr=`[object ArrayBuffer]`,Zr=`[object DataView]`,Qr=`[object Float32Array]`,$r=`[object Float64Array]`,ei=`[object Int8Array]`,ti=`[object Int16Array]`,ni=`[object Int32Array]`,ri=`[object Uint8Array]`,ii=`[object Uint8ClampedArray]`,ai=`[object Uint16Array]`,oi=`[object Uint32Array]`,si={};si[Qr]=si[$r]=si[ei]=si[ti]=si[ni]=si[ri]=si[ii]=si[ai]=si[oi]=!0,si[Lr]=si[Rr]=si[Xr]=si[zr]=si[Zr]=si[Br]=si[Vr]=si[Hr]=si[Ur]=si[Wr]=si[Gr]=si[Kr]=si[qr]=si[Jr]=si[Yr]=!1;function ci(e){return it(e)&&br(e.length)&&!!si[ze(e)]}function li(e){return function(t){return e(t)}}var ui=typeof exports==`object`&&exports&&!exports.nodeType&&exports,di=ui&&typeof module==`object`&&module&&!module.nodeType&&module,fi=di&&di.exports===ui&&Ie.process,pi=function(){try{return di&&di.require&&di.require(`util`).types||fi&&fi.binding&&fi.binding(`util`)}catch{}}(),mi=pi&&pi.isTypedArray,hi=mi?li(mi):ci,gi=Object.prototype.hasOwnProperty;function _i(e,t){var n=nt(e),r=!n&&jr(e),i=!n&&!r&&Ir(e),a=!n&&!r&&!i&&hi(e),o=n||r||i||a,s=o?Tr(e.length,String):[],c=s.length;for(var l in e)(t||gi.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||dr(l,c)))&&s.push(l);return s}function vi(e,t){return function(n){return e(t(n))}}var yi=vi(Object.keys,Object),bi=Object.prototype.hasOwnProperty;function xi(e){if(!wr(e))return yi(e);var t=[];for(var n in Object(e))bi.call(e,n)&&n!=`constructor`&&t.push(n);return t}function Si(e){return xr(e)?_i(e):xi(e)}function Ci(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var wi=Object.prototype.hasOwnProperty;function Ti(e){if(!Ue(e))return Ci(e);var t=wr(e),n=[];for(var r in e)r==`constructor`&&(t||!wi.call(e,r))||n.push(r);return n}function Ei(e){return xr(e)?_i(e,!0):Ti(e)}function Di(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Oi=rt?rt.isConcatSpreadable:void 0;function ki(e){return nt(e)||jr(e)||!!(Oi&&e&&e[Oi])}function Ai(e,t,n,r,i){var a=-1,o=e.length;for(n||=ki,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?Ai(s,t-1,n,r,i):Di(i,s):r||(i[i.length]=s)}return i}var ji=vi(Object.getPrototypeOf,Object);function Mi(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}function Ni(){this.__data__=new Ve,this.size=0}function Pi(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Fi(e){return this.__data__.get(e)}function Ii(e){return this.__data__.has(e)}var Li=200;function Ri(e,t){var n=this.__data__;if(n instanceof Ve){var r=n.__data__;if(!et||r.length<Li-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ke(r)}return n.set(e,t),this.size=n.size,this}function zi(e){var t=this.__data__=new Ve(e);this.size=t.size}zi.prototype.clear=Ni,zi.prototype.delete=Pi,zi.prototype.get=Fi,zi.prototype.has=Ii,zi.prototype.set=Ri;function Bi(e,t){return e&&hr(t,Si(t),e)}function Vi(e,t){return e&&hr(t,Ei(t),e)}var Hi=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Ui=Hi&&typeof module==`object`&&module&&!module.nodeType&&module,Wi=Ui&&Ui.exports===Hi?Le.Buffer:void 0,Gi=Wi?Wi.allocUnsafe:void 0;function Ki(e,t){if(t)return e.slice();var n=e.length,r=Gi?Gi(n):new e.constructor(n);return e.copy(r),r}function qi(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function Ji(){return[]}var Yi=Object.prototype.propertyIsEnumerable,Xi=Object.getOwnPropertySymbols,Zi=Xi?function(e){return e==null?[]:(e=Object(e),qi(Xi(e),function(t){return Yi.call(e,t)}))}:Ji;function Qi(e,t){return hr(e,Zi(e),t)}var $i=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Di(t,Zi(e)),e=ji(e);return t}:Ji;function ea(e,t){return hr(e,$i(e),t)}function ta(e,t,n){var r=t(e);return nt(e)?r:Di(r,n(e))}function na(e){return ta(e,Si,Zi)}function ra(e){return ta(e,Ei,$i)}var ia=Xe(Le,`DataView`),aa=Xe(Le,`Promise`),oa=Xe(Le,`Set`),sa=`[object Map]`,ca=`[object Object]`,la=`[object Promise]`,ua=`[object Set]`,da=`[object WeakMap]`,fa=`[object DataView]`,pa=qe(ia),ma=qe(et),ha=qe(aa),ga=qe(oa),_a=qe(Yn),va=ze;(ia&&va(new ia(new ArrayBuffer(1)))!=fa||et&&va(new et)!=sa||aa&&va(aa.resolve())!=la||oa&&va(new oa)!=ua||Yn&&va(new Yn)!=da)&&(va=function(e){var t=ze(e),n=t==ca?e.constructor:void 0,r=n?qe(n):``;if(r)switch(r){case pa:return fa;case ma:return sa;case ha:return la;case ga:return ua;case _a:return da}return t});var ya=va,ba=Object.prototype.hasOwnProperty;function xa(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&ba.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var Sa=Le.Uint8Array;function Ca(e){var t=new e.constructor(e.byteLength);return new Sa(t).set(new Sa(e)),t}function wa(e,t){var n=t?Ca(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Ta=/\w*$/;function Ea(e){var t=new e.constructor(e.source,Ta.exec(e));return t.lastIndex=e.lastIndex,t}var Da=rt?rt.prototype:void 0,Oa=Da?Da.valueOf:void 0;function ka(e){return Oa?Object(Oa.call(e)):{}}function Aa(e,t){var n=t?Ca(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var ja=`[object Boolean]`,Ma=`[object Date]`,Na=`[object Map]`,Pa=`[object Number]`,Fa=`[object RegExp]`,Ia=`[object Set]`,La=`[object String]`,Ra=`[object Symbol]`,za=`[object ArrayBuffer]`,Ba=`[object DataView]`,Va=`[object Float32Array]`,Ha=`[object Float64Array]`,Ua=`[object Int8Array]`,Wa=`[object Int16Array]`,Ga=`[object Int32Array]`,Ka=`[object Uint8Array]`,qa=`[object Uint8ClampedArray]`,Ja=`[object Uint16Array]`,Ya=`[object Uint32Array]`;function Xa(e,t,n){var r=e.constructor;switch(t){case za:return Ca(e);case ja:case Ma:return new r(+e);case Ba:return wa(e,n);case Va:case Ha:case Ua:case Wa:case Ga:case Ka:case qa:case Ja:case Ya:return Aa(e,n);case Na:return new r;case Pa:case La:return new r(e);case Fa:return Ea(e);case Ia:return new r;case Ra:return ka(e)}}function Za(e){return typeof e.constructor==`function`&&!wr(e)?Zn(ji(e)):{}}var Qa=`[object Map]`;function $a(e){return it(e)&&ya(e)==Qa}var eo=pi&&pi.isMap,to=eo?li(eo):$a,no=`[object Set]`;function ro(e){return it(e)&&ya(e)==no}var io=pi&&pi.isSet,ao=io?li(io):ro,oo=1,so=2,co=4,lo=`[object Arguments]`,uo=`[object Array]`,fo=`[object Boolean]`,po=`[object Date]`,mo=`[object Error]`,ho=`[object Function]`,go=`[object GeneratorFunction]`,_o=`[object Map]`,vo=`[object Number]`,yo=`[object Object]`,bo=`[object RegExp]`,xo=`[object Set]`,So=`[object String]`,Co=`[object Symbol]`,wo=`[object WeakMap]`,To=`[object ArrayBuffer]`,Eo=`[object DataView]`,Do=`[object Float32Array]`,Oo=`[object Float64Array]`,ko=`[object Int8Array]`,Ao=`[object Int16Array]`,jo=`[object Int32Array]`,Mo=`[object Uint8Array]`,No=`[object Uint8ClampedArray]`,Po=`[object Uint16Array]`,Fo=`[object Uint32Array]`,Io={};Io[lo]=Io[uo]=Io[To]=Io[Eo]=Io[fo]=Io[po]=Io[Do]=Io[Oo]=Io[ko]=Io[Ao]=Io[jo]=Io[_o]=Io[vo]=Io[yo]=Io[bo]=Io[xo]=Io[So]=Io[Co]=Io[Mo]=Io[No]=Io[Po]=Io[Fo]=!0,Io[mo]=Io[ho]=Io[wo]=!1;function Lo(e,t,n,r,i,a){var o,s=t&oo,c=t&so,l=t&co;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!Ue(e))return e;var u=nt(e);if(u){if(o=xa(e),!s)return er(e,o)}else{var d=ya(e),f=d==ho||d==go;if(Ir(e))return Ki(e,s);if(d==yo||d==lo||f&&!i){if(o=c||f?{}:Za(e),!s)return c?ea(e,Vi(o,e)):Qi(e,Bi(o,e))}else{if(!Io[d])return i?e:{};o=Xa(e,d,s)}}a||=new zi;var p=a.get(e);if(p)return p;a.set(e,o),ao(e)?e.forEach(function(r){o.add(Lo(r,t,n,r,e,a))}):to(e)&&e.forEach(function(r,i){o.set(i,Lo(r,t,n,i,e,a))});var m=u?void 0:(l?c?ra:na:c?Ei:Si)(e);return cr(m||e,function(r,i){m&&(i=r,r=e[i]),mr(o,i,Lo(r,t,n,i,e,a))}),o}var Ro=1,zo=4;function Bo(e){return Lo(e,Ro|zo)}var Vo=1,Ho=4;function Uo(e,t){return t=typeof t==`function`?t:void 0,Lo(e,Vo|Ho,t)}var Wo=`__lodash_hash_undefined__`;function Go(e){return this.__data__.set(e,Wo),this}function Ko(e){return this.__data__.has(e)}function qo(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ke;++t<n;)this.add(e[t])}qo.prototype.add=qo.prototype.push=Go,qo.prototype.has=Ko;function Jo(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Yo(e,t){return e.has(t)}var Xo=1,Zo=2;function Qo(e,t,n,r,i,a){var o=n&Xo,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&Zo?new qo:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!Jo(t,function(e,t){if(!Yo(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)})){f=!1;break}}else if(!(m===h||i(m,h,n,r,a))){f=!1;break}}return a.delete(e),a.delete(t),f}function $o(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function es(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var ts=1,ns=2,rs=`[object Boolean]`,is=`[object Date]`,as=`[object Error]`,os=`[object Map]`,ss=`[object Number]`,cs=`[object RegExp]`,ls=`[object Set]`,us=`[object String]`,ds=`[object Symbol]`,fs=`[object ArrayBuffer]`,ps=`[object DataView]`,ms=rt?rt.prototype:void 0,hs=ms?ms.valueOf:void 0;function gs(e,t,n,r,i,a,o){switch(n){case ps:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case fs:return!(e.byteLength!=t.byteLength||!a(new Sa(e),new Sa(t)));case rs:case is:case ss:return He(+e,+t);case as:return e.name==t.name&&e.message==t.message;case cs:case us:return e==t+``;case os:var s=$o;case ls:var c=r&ts;if(s||=es,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=ns,o.set(e,t);var u=Qo(s(e),s(t),r,i,a,o);return o.delete(e),u;case ds:if(hs)return hs.call(e)==hs.call(t)}return!1}var _s=1,vs=Object.prototype.hasOwnProperty;function ys(e,t,n,r,i,a){var o=n&_s,s=na(e),c=s.length;if(c!=na(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:vs.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){u=s[l];var h=e[u],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return a.delete(e),a.delete(t),p}var bs=1,xs=`[object Arguments]`,Ss=`[object Array]`,Cs=`[object Object]`,ws=Object.prototype.hasOwnProperty;function Ts(e,t,n,r,i,a){var o=nt(e),s=nt(t),c=o?Ss:ya(e),l=s?Ss:ya(t);c=c==xs?Cs:c,l=l==xs?Cs:l;var u=c==Cs,d=l==Cs,f=c==l;if(f&&Ir(e)){if(!Ir(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new zi,o||hi(e)?Qo(e,t,n,r,i,a):gs(e,t,c,n,r,i,a);if(!(n&bs)){var p=u&&ws.call(e,`__wrapped__`),m=d&&ws.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new zi,i(h,g,n,r,a)}}return f?(a||=new zi,ys(e,t,n,r,i,a)):!1}function Es(e,t,n,r,i){return e===t?!0:e==null||t==null||!it(e)&&!it(t)?e!==e&&t!==t:Ts(e,t,n,r,Es,i)}var Ds=1,Os=2;function ks(e,t,n,r){var i=n.length,a=i,o=!r;if(e==null)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){s=n[i];var c=s[0],l=e[c],u=s[1];if(o&&s[2]){if(l===void 0&&!(c in e))return!1}else{var d=new zi;if(r)var f=r(l,u,c,e,t,d);if(!(f===void 0?Es(u,l,Ds|Os,r,d):f))return!1}}return!0}function As(e){return e===e&&!Ue(e)}function js(e){for(var t=Si(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,As(i)]}return t}function Ms(e,t){return function(n){return n!=null&&n[e]===t&&(t!==void 0||e in Object(n))}}function Ns(e){var t=js(e);return t.length==1&&t[0][2]?Ms(t[0][0],t[0][1]):function(n){return n===e||ks(n,e,t)}}function Ps(e,t){return e!=null&&t in Object(e)}function Fs(e,t,n){t=Ye(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=Re(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&br(i)&&dr(o,i)&&(nt(e)||jr(e)))}function Is(e,t){return e!=null&&Fs(e,t,Ps)}var Ls=1,Rs=2;function zs(e,t){return P(e)&&As(t)?Ms(Re(e),t):function(n){var r=Ze(n,e);return r===void 0&&r===t?Is(n,e):Es(t,r,Ls|Rs)}}function Bs(e){return function(t){return t?.[e]}}function Vs(e){return function(t){return Ge(t,e)}}function Hs(e){return P(e)?Bs(Re(e)):Vs(e)}function Us(e){return typeof e==`function`?e:e==null?Jn:typeof e==`object`?nt(e)?zs(e[0],e[1]):Ns(e):Hs(e)}function Ws(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Gs(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}var Ks=Gs();function qs(e,t){return e&&Ks(e,t,Si)}function Js(e,t){return function(n,r){if(n==null)return n;if(!xr(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}var Ys=Js(qs);function Xs(e,t,n,r){return Ys(e,function(e,i,a){t(r,e,n(e),a)}),r}function Zs(e,t){return function(n,r){var i=nt(n)?Ws:Xs,a=t?t():{};return i(n,e,Us(r,2),a)}}function Qs(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function $s(e){return typeof e==`function`?e:Jn}function ec(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}var tc=Gs(!0);function nc(e,t){return e&&tc(e,t,Si)}var rc=Js(nc,!0);function ic(e,t){return(nt(e)?ec:rc)(e,$s(t))}function ac(e){return e&&e.length?e[0]:void 0}function oc(e,t){var n=-1,r=xr(e)?Array(e.length):[];return Ys(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function sc(e,t){return(nt(e)?Be:oc)(e,Us(t,3))}var cc=Object.prototype.hasOwnProperty,lc=Zs(function(e,t,n){cc.call(e,n)?e[n].push(t):fr(e,n,[t])});function uc(e){return e!=null&&e.length?Mi(e,0,-1):[]}var dc=`[object Map]`,fc=`[object Set]`,pc=Object.prototype.hasOwnProperty;function mc(e){if(e==null)return!0;if(xr(e)&&(nt(e)||typeof e==`string`||typeof e.splice==`function`||Ir(e)||hi(e)||jr(e)))return!e.length;var t=ya(e);if(t==dc||t==fc)return!e.size;if(wr(e))return!xi(e).length;for(var n in e)if(pc.call(e,n))return!1;return!0}function hc(e,t){return Es(e,t)}function gc(e,t){return e<t}function _c(e,t){var n={};return t=Us(t,3),qs(e,function(e,r,i){fr(n,r,t(e,r,i))}),n}function vc(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(o!=null&&(s===void 0?o===o&&!tt(o):n(o,s)))var s=o,c=a}return c}function yc(e,t){return e&&e.length?vc(e,Us(t,2),gc):void 0}function bc(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function xc(e,t){if(e!==t){var n=e!==void 0,r=e===null,i=e===e,a=tt(e),o=t!==void 0,s=t===null,c=t===t,l=tt(t);if(!s&&!l&&!a&&e>t||a&&o&&c&&!s&&!l||r&&o&&c||!n&&c||!i)return 1;if(!r&&!a&&!l&&e<t||l&&n&&i&&!r&&!a||s&&n&&i||!o&&i||!c)return-1}return 0}function Sc(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=xc(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Cc(e,t,n){t=t.length?Be(t,function(e){return nt(e)?function(t){return Ge(t,e.length===1?e[0]:e)}:e}):[Jn];var r=-1;return t=Be(t,li(Us)),bc(oc(e,function(e,n,i){return{criteria:Be(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Sc(e,t,n)})}var wc=Zs(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]}),Tc=Math.ceil,Ec=Math.max;function Dc(e,t,n,r){for(var i=-1,a=Ec(Tc((t-e)/(n||1)),0),o=Array(a);a--;)o[r?a:++i]=e,e+=n;return o}function Oc(e){return function(t,n,r){return r&&typeof r!=`number`&&Sr(t,n,r)&&(n=r=void 0),t=Kn(t),n===void 0?(n=t,t=0):n=Kn(n),r=r===void 0?t<n?1:-1:Kn(r),Dc(t,n,r,e)}}var kc=Oc(),Ac=vr(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Sr(e,t[0],t[1])?t=[]:n>2&&Sr(t[0],t[1],t[2])&&(t=[t[0]]),Cc(e,Ai(t,1),[])}),jc=9007199254740991,Mc=4294967295,Nc=Math.min;function Pc(e,t){if(e=qn(e),e<1||e>jc)return[];var n=Mc,r=Nc(e,Mc);t=$s(t),e-=Mc;for(var i=Tr(r,t);++n<e;)t(n);return i}var Fc=0;function Ic(e){var t=++Fc;return Qe(e)+t}var Lc=e(Yt(),1),Rc=e=>Array.isArray(e),zc=e=>typeof e==`object`&&!!e&&!Rc(e),Bc=e=>typeof e==`string`,Vc=(e,t)=>e===t||e!==null&&t!==null&&typeof e==`object`&&typeof t==`object`&&Object.keys(e).length===Object.keys(t).length&&Object.entries(e).every(([e,n])=>Vc(n,t[e])),Hc=(e,t)=>{let n=e?.[t];if(n!==void 0){if(!Object.hasOwn(e,t)||Array.isArray(e)&&!/^\d+$/.test(t)||typeof e!=`object`)throw TypeError(`Unsupported property "${t}"`);return n}};function Uc(e){return(...t)=>{let n=t.map(e=>nl(e)),r=n[0],i=n[1];return n.length===1?t=>e(r(t)):n.length===2?t=>e(r(t),i(t)):t=>e(...n.map(e=>e(t)))}}var Wc={boolean:0,number:1,string:2},Gc=3,Kc=(e,t)=>typeof e==typeof t&&typeof e in Wc&&e>t,qc=(e,t)=>Vc(e,t)||Kc(e,t),Jc=(e,t)=>typeof e==typeof t&&typeof e in Wc&&e<t,Yc={pipe:(...e)=>{let t=e.map(e=>nl(e));return e=>t.reduce((e,t)=>t(e),e)},object:e=>{let t=Object.keys(e).map(t=>[t,nl(e[t])]);return e=>{let n={};for(let[r,i]of t)n[r]=i(e);return n}},array:(...e)=>{let t=e.map(e=>nl(e));return e=>t.map(t=>t(e))},get:(...e)=>{if(e.length===0)return e=>e??null;if(e.length===1){let t=e[0];return e=>Hc(e,t)??null}return t=>{let n=t;for(let t of e)n=Hc(n,t);return n??null}},map:e=>{let t=nl(e);return e=>e.map(t)},mapObject:e=>{let t=nl(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t({key:r,value:e[r]});n[i.key]=i.value}return n}},mapKeys:e=>{let t=nl(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t(r);n[i]=e[r]}return n}},mapValues:e=>{let t=nl(e);return e=>{let n={};for(let r of Object.keys(e))n[r]=t(e[r]);return n}},filter:e=>{let t=nl(e);return e=>e.filter(e=>Xc(t(e)))},sort:(e=[`get`],t)=>{let n=nl(e),r=t===`desc`?-1:1;function i(e,t){let i=n(e),a=n(t);if(typeof i!=typeof a){let e=Wc[typeof i]??Gc,t=Wc[typeof a]??Gc;return e>t?r:e<t?-r:0}return typeof i in Wc?i>a?r:i<a?-r:0:0}return e=>e.slice().sort(i)},reverse:()=>e=>e.toReversed(),pick:(...e)=>{let t=e.map(([e,...t])=>[t[t.length-1],Yc.get(...t)]),n=(e,t)=>{let n={};for(let[r,i]of t)n[r]=i(e);return n};return e=>Rc(e)?e.map(e=>n(e,t)):n(e,t)},groupBy:e=>{let t=nl(e);return e=>{let n={};for(let r of e){let e=t(r);n[e]?n[e].push(r):n[e]=[r]}return n}},keyBy:e=>{let t=nl(e);return e=>{let n={};for(let r of e){let e=t(r);e in n||(n[e]=r)}return n}},flatten:()=>e=>e.flat(),join:(e=``)=>t=>t.join(e),split:Uc((e,t)=>t===void 0?e.trim().split(/\s+/):e.split(t)),substring:Uc((e,t,n)=>e.slice(Math.max(t,0),n)),uniq:()=>e=>{let t=[];for(let n of e)t.findIndex(e=>Vc(e,n))===-1&&t.push(n);return t},uniqBy:e=>t=>Object.values(Yc.keyBy(e)(t)),limit:e=>t=>t.slice(0,Math.max(e,0)),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>Zc(e,(e,t)=>e*t),sum:()=>e=>Rc(e)?e.reduce((e,t)=>e+t,0):$c(),average:()=>e=>Rc(e)?e.length>0?e.reduce((e,t)=>e+t)/e.length:null:$c(),min:()=>e=>Zc(e,(e,t)=>Math.min(e,t)),max:()=>e=>Zc(e,(e,t)=>Math.max(e,t)),and:Uc((...e)=>Zc(e,(e,t)=>!!(e&&t))),or:Uc((...e)=>Zc(e,(e,t)=>!!(e||t))),not:Uc(e=>!e),exists:e=>{let t=e.slice(1),n=t.pop(),r=Yc.get(...t);return e=>{let t=r(e);return!!t&&Object.hasOwnProperty.call(t,n)}},if:(e,t,n)=>{let r=nl(e),i=nl(t),a=nl(n);return e=>Xc(r(e))?i(e):a(e)},in:(e,t)=>{let n=nl(e),r=nl(t);return e=>{let t=n(e);return r(e).findIndex(e=>Vc(e,t))!==-1}},"not in":(e,t)=>{let n=Yc.in(e,t);return e=>!n(e)},regex:(e,t,n)=>{let r=new RegExp(t,n),i=nl(e);return e=>r.test(i(e))},match:(e,t,n)=>{let r=new RegExp(t,n),i=nl(e);return e=>{let t=i(e).match(r);return t?Qc(t):null}},matchAll:(e,t,n)=>{let r=new RegExp(t,`${n??``}g`),i=nl(e);return e=>Array.from(i(e).matchAll(r)).map(Qc)},eq:Uc(Vc),gt:Uc(Kc),gte:Uc(qc),lt:Uc(Jc),lte:Uc((e,t)=>Vc(e,t)||Jc(e,t)),ne:Uc((e,t)=>!Vc(e,t)),add:Uc((e,t)=>e+t),subtract:Uc((e,t)=>e-t),multiply:Uc((e,t)=>e*t),divide:Uc((e,t)=>e/t),mod:Uc((e,t)=>e%t),pow:Uc((e,t)=>e**t),abs:Uc(Math.abs),round:Uc((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`),number:Uc(e=>{let t=Number(e);return Number.isNaN(Number(e))?null:t}),string:Uc(String)},Xc=e=>e!==null&&e!==0&&e!==!1,Zc=(e,t)=>(Rc(e)||$c(),e.length===0?null:e.reduce(t)),Qc=e=>{let[t,...n]=e,r=e.groups;return n.length?r?{value:t,groups:n,namedGroups:r}:{value:t,groups:n}:{value:t}},$c=()=>{el(`Array expected`)},el=e=>{throw TypeError(e)},tl=[];function nl(e,t){tl.unshift({...Yc,...tl[0],...t?.functions});try{let t=Rc(e)?rl(e,tl[0]):zc(e)?el(`Function notation ["object", {...}] expected but got ${JSON.stringify(e)}`):()=>e;return n=>{try{return t(n)}catch(t){throw t.jsonquery=[{data:n,query:e},...t.jsonquery??[]],t}}}finally{tl.shift()}}function rl(e,t){let[n,...r]=e,i=t[n];return i||el(`Unknown function '${n}'`),i(...r)}var il=[{pow:`^`},{multiply:`*`,divide:`/`,mod:`%`},{add:`+`,subtract:`-`},{gt:`>`,gte:`>=`,lt:`<`,lte:`<=`,in:`in`,"not in":`not in`},{eq:`==`,ne:`!=`},{and:`and`},{or:`or`},{pipe:`|`}],al=[`|`,`and`,`or`],ol=[`|`,`and`,`or`,`*`,`/`,`%`,`+`,`-`];function sl(e,t){if(!Rc(t))throw Error(`Invalid custom operators`);return t.reduce(cl,e)}function cl(e,{name:t,op:n,at:r,after:i,before:a}){if(r)return e.map(e=>Object.values(e).includes(r)?{...e,[t]:n}:e);let o=i??a,s=e.findIndex(e=>Object.values(e).includes(o));if(s!==-1)return e.toSpliced(s+ +!!i,0,{[t]:n});throw Error(`Invalid custom operator`)}var ll=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,ul=/^[a-zA-Z_$][a-zA-Z\d_$]*/,dl=/^"(?:[^"\\]|\\.)*"/,fl=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,pl=/^(0|[1-9][0-9]*)/,ml=/^(true|false|null)/,hl=/^[ \n\t\r]+/;function gl(e,t){let n=t?.operators??[],r=sl(il,n),i=Object.assign({},...r),a=al.concat(n.filter(e=>e.vararg).map(e=>e.op)),o=ol.concat(n.filter(e=>e.leftAssociative).map(e=>e.op)),s=(t=r.length-1)=>{let n=r[t];if(!n)return l();let d=e[w]===`(`,f=s(t-1);for(;;){if(x(),e[w]===`.`&&`pipe`in n){let e=u();f=f[0]===`pipe`?[...f,e]:[`pipe`,f,e];continue}let r=w,l=c(n);if(!l)break;let p=s(t-1),m=l===f[0]&&!d;if(m&&!o.includes(i[l])){w=r;break}f=m&&a.includes(i[l])?[...f,p]:[l,f,p]}return f},c=t=>{let n=Object.keys(t).sort((e,t)=>t.length-e.length);for(let r of n){let n=t[r];if(e.substring(w,w+n.length)===n)return w+=n.length,x(),r}},l=()=>{if(x(),e[w]===`(`){w++;let e=s();return S(`)`),e}return u()},u=()=>{if(e[w]===`.`){let t=[];for(;e[w]===`.`;)w++,t.push(m()??h()??_()??C(`Property expected`)),x();return[`get`,...t]}return d()},d=()=>{let t=w,n=h();if(x(),!n||e[w]!==`(`)return w=t,f();w++,x();let r=e[w]===`)`?[]:[s()];for(;w<e.length&&e[w]!==`)`;)x(),S(`,`),r.push(s());return S(`)`),[n,...r]},f=()=>{if(e[w]===`{`){w++,x();let t={},n=!0;for(;w<e.length&&e[w]!==`}`;){n?n=!1:(S(`,`),x());let e=m()??h()??_()??C(`Key expected`);x(),S(`:`),t[e]=s()}return S(`}`),[`object`,t]}return p()},p=()=>{if(e[w]===`[`){w++,x();let t=[],n=!0;for(;w<e.length&&e[w]!==`]`;)n?n=!1:(S(`,`),x()),t.push(s());return S(`]`),[`array`,...t]}return m()??g()??v()},m=()=>b(dl,JSON.parse),h=()=>b(ul,e=>e),g=()=>b(fl,JSON.parse),_=()=>b(pl,JSON.parse),v=()=>{let e=b(ml,JSON.parse);if(e!==void 0)return e;C(`Value expected`)},y=()=>{x(),w<e.length&&C(`Unexpected part '${e.substring(w)}'`)},b=(t,n)=>{let r=e.substring(w).match(t);if(r)return w+=r[0].length,n(r[0])},x=()=>b(hl,e=>e),S=t=>{e[w]!==t&&C(`Character '${t}' expected`),w++},C=(e,t=w)=>{throw SyntaxError(`${e} (pos: ${t})`)},w=0,T=s();return y(),T}var _l=40,vl=`  `,yl=(e,t)=>{let n=t?.indentation??vl,r=t?.operators??[],i=sl(il,r),a=Object.assign({},...i),o=ol.concat(r.filter(e=>e.leftAssociative).map(e=>e.op)),s=(e,t,n=!1)=>Rc(e)?c(e,t,n):JSON.stringify(e),c=(e,t,r)=>{let[c,...d]=e;if(c===`get`&&d.length>0)return u(d);if(c===`object`)return l(d[0],t);if(c===`array`){let e=d.map(e=>s(e,t));return f(e,[`[`,`, `,`]`],[`[
${t+n}`,`,
${t+n}`,`
${t}]`])}let p=a[c];if(p){let e=r?`(`:``,a=r?`)`:``,l=d.map((e,r)=>{let a=e?.[0],l=i.findIndex(e=>c in e),u=i.findIndex(e=>a in e),d=l<u||l===u&&r>0||c===a&&!o.includes(p);return s(e,t+n,d)});return f(l,[e,` ${p} `,a],[e,`
${t+n}${p} `,a])}let m=d.length===1?t:t+n,h=d.map(e=>s(e,m));return f(h,[`${c}(`,`, `,`)`],d.length===1?[`${c}(`,`,
${t}`,`)`]:[`${c}(
${m}`,`,
${m}`,`
${t})`])},l=(e,t)=>{let r=t+n,i=Object.entries(e).map(([e,t])=>`${d(e)}: ${s(t,r)}`);return f(i,[`{ `,`, `,` }`],[`{
${r}`,`,
${r}`,`
${t}}`])},u=e=>e.map(e=>`.${d(e)}`).join(``),d=e=>ll.test(e)?e:JSON.stringify(e),f=(e,[n,r,i],[a,o,s])=>n.length+e.reduce((e,t)=>e+t.length+r.length,0)-r.length+i.length<=(t?.maxLineLength??_l)?n+e.join(r)+i:a+e.join(o)+s;return s(e,``)};function bl(e,t,n){return nl(Bc(t)?gl(t,n):t,n)(e)}var xl={prefix:`far`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},Sl={prefix:`far`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z`]},Cl={prefix:`far`,iconName:`lightbulb`,icon:[384,512,[128161],`f0eb`,`M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z`]},wl={prefix:`far`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},Tl={prefix:`fas`,iconName:`rotate`,icon:[512,512,[128260,`sync-alt`],`f2f1`,`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`]},El={prefix:`fas`,iconName:`paste`,icon:[512,512,[`file-clipboard`],`f0ea`,`M64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l112 0 0-224c0-61.9 50.1-112 112-112l64 0 0-48c0-35.3-28.7-64-64-64L64 0zM248 112l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm40 48c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.3-18.7-45.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7L288 160z`]},Dl={prefix:`fas`,iconName:`crop-simple`,icon:[512,512,[`crop-alt`],`f565`,`M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32-32 0C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l208 0 0-64-208 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64l-208 0 0 64 208 0 0 352z`]},Ol={prefix:`fas`,iconName:`filter`,icon:[512,512,[],`f0b0`,`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`]},kl={prefix:`fas`,iconName:`square-caret-down`,icon:[448,512,[`caret-square-down`],`f150`,`M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9S110.5 192 120 192l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z`]},Al={prefix:`fas`,iconName:`caret-right`,icon:[256,512,[],`f0da`,`M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z`]},jl={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},Ml={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},Nl={prefix:`fas`,iconName:`caret-left`,icon:[256,512,[],`f0d9`,`M7.7 235.8c-10.3 12.6-9.5 31.1 2.2 42.8l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128-2.2 2.4z`]},Pl={prefix:`fas`,iconName:`chevron-up`,icon:[448,512,[],`f077`,`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`]},Fl={prefix:`fas`,iconName:`circle-notch`,icon:[512,512,[],`f1ce`,`M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8-79.3 23.6-137.1 97.1-137.1 184.1 0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256 512 397.4 397.4 512 256 512S0 397.4 0 256c0-116 77.1-213.9 182.9-245.4 16.9-5 34.8 4.6 39.8 21.5z`]},Il={prefix:`fas`,iconName:`ellipsis-vertical`,icon:[128,512,[`ellipsis-v`],`f142`,`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`]},Ll={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},Rl={prefix:`fas`,iconName:`clone`,icon:[512,512,[],`f24d`,`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`]},zl={prefix:`fas`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Bl={prefix:`fas`,iconName:`square-caret-up`,icon:[448,512,[`caret-square-up`],`f151`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S337.5 320 328 320l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z`]},Vl={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Hl={prefix:`fas`,iconName:`angle-right`,icon:[256,512,[8250],`f105`,`M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z`]},Ul={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},Wl={prefix:`fas`,iconName:`up-right-and-down-left-from-center`,icon:[512,512,[`expand-alt`],`f424`,`M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z`]},Gl={prefix:`fas`,iconName:`wrench`,icon:[576,512,[128295],`f0ad`,`M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z`]},Kl={prefix:`fas`,iconName:`trash-can`,icon:[448,512,[61460,`trash-alt`],`f2ed`,`M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z`]},ql={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},Jl={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},Yl=Jl,Xl=Jl,Zl={prefix:`fas`,iconName:`pen`,icon:[512,512,[128394],`f304`,`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`]},Ql={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},$l={prefix:`fas`,iconName:`angle-down`,icon:[384,512,[8964],`f107`,`M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},eu={prefix:`fas`,iconName:`arrow-down-short-wide`,icon:[576,512,[`sort-amount-desc`,`sort-amount-down-alt`],`f884`,`M246.6 374.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`]},tu={prefix:`fas`,iconName:`triangle-exclamation`,icon:[512,512,[9888,`exclamation-triangle`,`warning`],`f071`,`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},nu={prefix:`fas`,iconName:`scissors`,icon:[512,512,[9984,9986,9988,`cut`],`f0c4`,`M192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L256 192 216.5 152.5c4.9-12.6 7.5-26.2 7.5-40.5 0-61.9-50.1-112-112-112S0 50.1 0 112 50.1 224 112 224c14.3 0 27.9-2.7 40.5-7.5L192 256zm97.9 97.9L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6l-145.3-145.3-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z`]},ru={prefix:`fas`,iconName:`arrow-right-arrow-left`,icon:[512,512,[8644,`exchange`],`f0ec`,`M502.6 150.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 160 32 160c-17.7 0-32-14.3-32-32S14.3 96 32 96l370.7 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 352 480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z`]},iu={prefix:`fas`,iconName:`caret-up`,icon:[320,512,[],`f0d8`,`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`]},au={prefix:`fas`,iconName:`down-left-and-up-right-to-center`,icon:[512,512,[`compress-alt`],`f422`,`M439.5 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S450.2 240 440.5 240l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87zM72.5 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S62.8 272 72.5 272z`]},ou={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]},su={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]},cu={prefix:`fas`,iconName:`arrow-rotate-right`,icon:[512,512,[8635,`arrow-right-rotate`,`arrow-rotate-forward`,`redo`],`f01e`,`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`]},lu={prefix:`fas`,iconName:`caret-down`,icon:[320,512,[],`f0d7`,`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`]},uu={prefix:`fas`,iconName:`arrow-rotate-left`,icon:[512,512,[8634,`arrow-left-rotate`,`arrow-rotate-back`,`arrow-rotate-backward`,`undo`],`f0e2`,`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`]},du={prefix:`fas`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z`]},fu={prefix:`fas`,iconName:`arrow-down`,icon:[384,512,[8595],`f063`,`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},pu=e(t(((e,t)=>{var n=function(e,t){var n,r,i=1,a=0,o=0,s=String.alphabet;function c(e,t,r){if(r){for(n=t;r=c(e,n),r<76&&r>65;)++n;return+e.slice(t-1,n)}return r=s&&s.indexOf(e.charAt(t)),r>-1?r+76:(r=e.charCodeAt(t)||0,r<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63)}if((e+=``)!=(t+=``)){for(;i;)if(r=c(e,a++),i=c(t,o++),r<76&&i<76&&r>66&&i>66&&(r=c(e,a,a),i=c(t,o,a=n),o=n),r!=i)return r<i?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}}))(),1),mu=Number.isNaN||function(e){return typeof e==`number`&&e!==e};function hu(e,t){return!!(e===t||mu(e)&&mu(t))}function gu(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!hu(e[n],t[n]))return!1;return!0}function _u(e,t){t===void 0&&(t=gu);var n=null;function r(){var r=[...arguments];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var i=e.apply(this,r);return n={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){n=null},r}t((e=>{(function(e){function t(e){return e!==null&&Object.prototype.toString.call(e)===`[object Array]`}function n(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function r(e,i){if(e===i)return!0;if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(i))return!1;if(t(e)===!0){if(e.length!==i.length)return!1;for(var a=0;a<e.length;a++)if(r(e[a],i[a])===!1)return!1;return!0}if(n(e)===!0){var o={};for(var s in e)if(hasOwnProperty.call(e,s)){if(r(e[s],i[s])===!1)return!1;o[s]=!0}for(var c in i)if(hasOwnProperty.call(i,c)&&o[c]!==!0)return!1;return!0}return!1}function i(e){if(e===``||e===!1||e===null||t(e)&&e.length===0)return!0;if(n(e)){for(var r in e)if(e.hasOwnProperty(r))return!1;return!0}else return!1}function a(e){for(var t=Object.keys(e),n=[],r=0;r<t.length;r++)n.push(e[t[r]]);return n}var o=typeof String.prototype.trimLeft==`function`?function(e){return e.trimLeft()}:function(e){return e.match(/^\s*(.*)/)[1]},s=0,c=1,l=2,u=3,d=4,f=5,p=6,m=7,h=8,g=9,_={0:`number`,1:`any`,2:`string`,3:`array`,4:`object`,5:`boolean`,6:`expression`,7:`null`,8:`Array<number>`,9:`Array<string>`},v=`EOF`,y=`UnquotedIdentifier`,b=`QuotedIdentifier`,x=`Rbracket`,S=`Rparen`,C=`Comma`,w=`Colon`,T=`Rbrace`,E=`Number`,ee=`Current`,te=`Expref`,ne=`Pipe`,re=`Or`,ie=`And`,ae=`EQ`,oe=`GT`,se=`LT`,D=`GTE`,O=`LTE`,ce=`NE`,le=`Flatten`,ue=`Star`,de=`Filter`,fe=`Dot`,pe=`Not`,me=`Lbrace`,he=`Lbracket`,ge=`Lparen`,_e=`Literal`,k={".":fe,"*":ue,",":C,":":w,"{":me,"}":T,"]":x,"(":ge,")":S,"@":ee},ve={"<":!0,">":!0,"=":!0,"!":!0},A={" ":!0,"	":!0,"\n":!0};function j(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`}function ye(e){return e>=`0`&&e<=`9`||e===`-`}function be(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`_`}function M(){}M.prototype={tokenize:function(e){var t=[];this._current=0;for(var n,r,i;this._current<e.length;)if(j(e[this._current]))n=this._current,r=this._consumeUnquotedIdentifier(e),t.push({type:y,value:r,start:n});else if(k[e[this._current]]!==void 0)t.push({type:k[e[this._current]],value:e[this._current],start:this._current}),this._current++;else if(ye(e[this._current]))i=this._consumeNumber(e),t.push(i);else if(e[this._current]===`[`)i=this._consumeLBracket(e),t.push(i);else if(e[this._current]===`"`)n=this._current,r=this._consumeQuotedIdentifier(e),t.push({type:b,value:r,start:n});else if(e[this._current]===`'`)n=this._current,r=this._consumeRawStringLiteral(e),t.push({type:_e,value:r,start:n});else if(e[this._current]==="`"){n=this._current;var a=this._consumeLiteral(e);t.push({type:_e,value:a,start:n})}else if(ve[e[this._current]]!==void 0)t.push(this._consumeOperator(e));else if(A[e[this._current]]!==void 0)this._current++;else if(e[this._current]===`&`)n=this._current,this._current++,e[this._current]===`&`?(this._current++,t.push({type:ie,value:`&&`,start:n})):t.push({type:te,value:`&`,start:n});else if(e[this._current]===`|`)n=this._current,this._current++,e[this._current]===`|`?(this._current++,t.push({type:re,value:`||`,start:n})):t.push({type:ne,value:`|`,start:n});else{var o=Error(`Unknown character:`+e[this._current]);throw o.name=`LexerError`,o}return t},_consumeUnquotedIdentifier:function(e){var t=this._current;for(this._current++;this._current<e.length&&be(e[this._current]);)this._current++;return e.slice(t,this._current)},_consumeQuotedIdentifier:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`"`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`"`)?r+=2:r++,this._current=r}return this._current++,JSON.parse(e.slice(t,this._current))},_consumeRawStringLiteral:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`'`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`'`)?r+=2:r++,this._current=r}return this._current++,e.slice(t+1,this._current-1).replace(`\\'`,`'`)},_consumeNumber:function(e){var t=this._current;this._current++;for(var n=e.length;ye(e[this._current])&&this._current<n;)this._current++;return{type:E,value:parseInt(e.slice(t,this._current)),start:t}},_consumeLBracket:function(e){var t=this._current;return this._current++,e[this._current]===`?`?(this._current++,{type:de,value:`[?`,start:t}):e[this._current]===`]`?(this._current++,{type:le,value:`[]`,start:t}):{type:he,value:`[`,start:t}},_consumeOperator:function(e){var t=this._current,n=e[t];if(this._current++,n===`!`)return e[this._current]===`=`?(this._current++,{type:ce,value:`!=`,start:t}):{type:pe,value:`!`,start:t};if(n===`<`)return e[this._current]===`=`?(this._current++,{type:O,value:`<=`,start:t}):{type:se,value:`<`,start:t};if(n===`>`)return e[this._current]===`=`?(this._current++,{type:D,value:`>=`,start:t}):{type:oe,value:`>`,start:t};if(n===`=`&&e[this._current]===`=`)return this._current++,{type:ae,value:`==`,start:t}},_consumeLiteral:function(e){this._current++;for(var t=this._current,n=e.length,r;e[this._current]!=="`"&&this._current<n;){var i=this._current;e[i]===`\\`&&(e[i+1]===`\\`||e[i+1]==="`")?i+=2:i++,this._current=i}var a=o(e.slice(t,this._current));return a=a.replace("\\`","`"),r=this._looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"`+a+`"`),this._current++,r},_looksLikeJSON:function(e){var t=`[{"`,n=[`true`,`false`,`null`],r=`-0123456789`;if(e===``)return!1;if(t.indexOf(e[0])>=0||n.indexOf(e)>=0)return!0;if(r.indexOf(e[0])>=0)try{return JSON.parse(e),!0}catch{return!1}else return!1}};var N={};N[v]=0,N[y]=0,N[b]=0,N[x]=0,N[S]=0,N[C]=0,N[T]=0,N[E]=0,N[ee]=0,N[te]=0,N[ne]=1,N[re]=2,N[ie]=3,N[ae]=5,N[oe]=5,N[se]=5,N[D]=5,N[O]=5,N[ce]=5,N[le]=9,N[ue]=20,N[de]=21,N[fe]=40,N[pe]=45,N[me]=50,N[he]=55,N[ge]=60;function xe(){}xe.prototype={parse:function(e){this._loadTokens(e),this.index=0;var t=this.expression(0);if(this._lookahead(0)!==v){var n=this._lookaheadToken(0),r=Error(`Unexpected token type: `+n.type+`, value: `+n.value);throw r.name=`ParserError`,r}return t},_loadTokens:function(e){var t=new M().tokenize(e);t.push({type:v,value:``,start:e.length}),this.tokens=t},expression:function(e){var t=this._lookaheadToken(0);this._advance();for(var n=this.nud(t),r=this._lookahead(0);e<N[r];)this._advance(),n=this.led(r,n),r=this._lookahead(0);return n},_lookahead:function(e){return this.tokens[this.index+e].type},_lookaheadToken:function(e){return this.tokens[this.index+e]},_advance:function(){this.index++},nud:function(e){var t,n,r;switch(e.type){case _e:return{type:`Literal`,value:e.value};case y:return{type:`Field`,name:e.value};case b:var i={type:`Field`,name:e.value};if(this._lookahead(0)===ge)throw Error(`Quoted identifier not allowed for function names.`);return i;case pe:return n=this.expression(N.Not),{type:`NotExpression`,children:[n]};case ue:return t={type:`Identity`},n=null,n=this._lookahead(0)===x?{type:`Identity`}:this._parseProjectionRHS(N.Star),{type:`ValueProjection`,children:[t,n]};case de:return this.led(e.type,{type:`Identity`});case me:return this._parseMultiselectHash();case le:return t={type:le,children:[{type:`Identity`}]},n=this._parseProjectionRHS(N.Flatten),{type:`Projection`,children:[t,n]};case he:return this._lookahead(0)===E||this._lookahead(0)===w?(n=this._parseIndexExpression(),this._projectIfSlice({type:`Identity`},n)):this._lookahead(0)===ue&&this._lookahead(1)===x?(this._advance(),this._advance(),n=this._parseProjectionRHS(N.Star),{type:`Projection`,children:[{type:`Identity`},n]}):this._parseMultiselectList();case ee:return{type:ee};case te:return r=this.expression(N.Expref),{type:`ExpressionReference`,children:[r]};case ge:for(var a=[];this._lookahead(0)!==S;)this._lookahead(0)===ee?(r={type:ee},this._advance()):r=this.expression(0),a.push(r);return this._match(S),a[0];default:this._errorToken(e)}},led:function(e,t){var n;switch(e){case fe:var r=N.Dot;return this._lookahead(0)===ue?(this._advance(),n=this._parseProjectionRHS(r),{type:`ValueProjection`,children:[t,n]}):(n=this._parseDotRHS(r),{type:`Subexpression`,children:[t,n]});case ne:return n=this.expression(N.Pipe),{type:ne,children:[t,n]};case re:return n=this.expression(N.Or),{type:`OrExpression`,children:[t,n]};case ie:return n=this.expression(N.And),{type:`AndExpression`,children:[t,n]};case ge:for(var i=t.name,a=[],o,s;this._lookahead(0)!==S;)this._lookahead(0)===ee?(o={type:ee},this._advance()):o=this.expression(0),this._lookahead(0)===C&&this._match(C),a.push(o);return this._match(S),s={type:`Function`,name:i,children:a},s;case de:var c=this.expression(0);return this._match(x),n=this._lookahead(0)===le?{type:`Identity`}:this._parseProjectionRHS(N.Filter),{type:`FilterProjection`,children:[t,n,c]};case le:return{type:`Projection`,children:[{type:le,children:[t]},this._parseProjectionRHS(N.Flatten)]};case ae:case ce:case oe:case D:case se:case O:return this._parseComparator(t,e);case he:var l=this._lookaheadToken(0);return l.type===E||l.type===w?(n=this._parseIndexExpression(),this._projectIfSlice(t,n)):(this._match(ue),this._match(x),n=this._parseProjectionRHS(N.Star),{type:`Projection`,children:[t,n]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(e){if(this._lookahead(0)===e)this._advance();else{var t=this._lookaheadToken(0),n=Error(`Expected `+e+`, got: `+t.type);throw n.name=`ParserError`,n}},_errorToken:function(e){var t=Error(`Invalid token (`+e.type+`): "`+e.value+`"`);throw t.name=`ParserError`,t},_parseIndexExpression:function(){if(this._lookahead(0)===w||this._lookahead(1)===w)return this._parseSliceExpression();var e={type:`Index`,value:this._lookaheadToken(0).value};return this._advance(),this._match(x),e},_projectIfSlice:function(e,t){var n={type:`IndexExpression`,children:[e,t]};return t.type===`Slice`?{type:`Projection`,children:[n,this._parseProjectionRHS(N.Star)]}:n},_parseSliceExpression:function(){for(var e=[null,null,null],t=0,n=this._lookahead(0);n!==x&&t<3;){if(n===w)t++,this._advance();else if(n===E)e[t]=this._lookaheadToken(0).value,this._advance();else{var r=this._lookahead(0),i=Error(`Syntax error, unexpected token: `+r.value+`(`+r.type+`)`);throw i.name=`Parsererror`,i}n=this._lookahead(0)}return this._match(x),{type:`Slice`,children:e}},_parseComparator:function(e,t){return{type:`Comparator`,name:t,children:[e,this.expression(N[t])]}},_parseDotRHS:function(e){var t=this._lookahead(0);if([y,b,ue].indexOf(t)>=0)return this.expression(e);if(t===he)return this._match(he),this._parseMultiselectList();if(t===me)return this._match(me),this._parseMultiselectHash()},_parseProjectionRHS:function(e){var t;if(N[this._lookahead(0)]<10)t={type:`Identity`};else if(this._lookahead(0)===he)t=this.expression(e);else if(this._lookahead(0)===de)t=this.expression(e);else if(this._lookahead(0)===fe)this._match(fe),t=this._parseDotRHS(e);else{var n=this._lookaheadToken(0),r=Error(`Sytanx error, unexpected token: `+n.value+`(`+n.type+`)`);throw r.name=`ParserError`,r}return t},_parseMultiselectList:function(){for(var e=[];this._lookahead(0)!==x;){var t=this.expression(0);if(e.push(t),this._lookahead(0)===C&&(this._match(C),this._lookahead(0)===x))throw Error(`Unexpected token Rbracket`)}return this._match(x),{type:`MultiSelectList`,children:e}},_parseMultiselectHash:function(){for(var e=[],t=[y,b],n,r,i,a;;){if(n=this._lookaheadToken(0),t.indexOf(n.type)<0)throw Error(`Expecting an identifier token, got: `+n.type);if(r=n.value,this._advance(),this._match(w),i=this.expression(0),a={type:`KeyValuePair`,name:r,value:i},e.push(a),this._lookahead(0)===C)this._match(C);else if(this._lookahead(0)===T){this._match(T);break}}return{type:`MultiSelectHash`,children:e}}};function Se(e){this.runtime=e}Se.prototype={search:function(e,t){return this.visit(e,t)},visit:function(e,o){var s,c,l,u,d,f,p,m,h,g;switch(e.type){case`Field`:return o!==null&&n(o)?(f=o[e.name],f===void 0?null:f):null;case`Subexpression`:for(l=this.visit(e.children[0],o),g=1;g<e.children.length;g++)if(l=this.visit(e.children[1],l),l===null)return null;return l;case`IndexExpression`:return p=this.visit(e.children[0],o),m=this.visit(e.children[1],p),m;case`Index`:if(!t(o))return null;var _=e.value;return _<0&&(_=o.length+_),l=o[_],l===void 0&&(l=null),l;case`Slice`:if(!t(o))return null;var v=e.children.slice(0),y=this.computeSliceParams(o.length,v),b=y[0],x=y[1],S=y[2];if(l=[],S>0)for(g=b;g<x;g+=S)l.push(o[g]);else for(g=b;g>x;g+=S)l.push(o[g]);return l;case`Projection`:var C=this.visit(e.children[0],o);if(!t(C))return null;for(h=[],g=0;g<C.length;g++)c=this.visit(e.children[1],C[g]),c!==null&&h.push(c);return h;case`ValueProjection`:if(C=this.visit(e.children[0],o),!n(C))return null;h=[];var w=a(C);for(g=0;g<w.length;g++)c=this.visit(e.children[1],w[g]),c!==null&&h.push(c);return h;case`FilterProjection`:if(C=this.visit(e.children[0],o),!t(C))return null;var T=[],E=[];for(g=0;g<C.length;g++)s=this.visit(e.children[2],C[g]),i(s)||T.push(C[g]);for(var re=0;re<T.length;re++)c=this.visit(e.children[1],T[re]),c!==null&&E.push(c);return E;case`Comparator`:switch(u=this.visit(e.children[0],o),d=this.visit(e.children[1],o),e.name){case ae:l=r(u,d);break;case ce:l=!r(u,d);break;case oe:l=u>d;break;case D:l=u>=d;break;case se:l=u<d;break;case O:l=u<=d;break;default:throw Error(`Unknown comparator: `+e.name)}return l;case le:var ie=this.visit(e.children[0],o);if(!t(ie))return null;var ue=[];for(g=0;g<ie.length;g++)c=ie[g],t(c)?ue.push.apply(ue,c):ue.push(c);return ue;case`Identity`:return o;case`MultiSelectList`:if(o===null)return null;for(h=[],g=0;g<e.children.length;g++)h.push(this.visit(e.children[g],o));return h;case`MultiSelectHash`:if(o===null)return null;h={};var de;for(g=0;g<e.children.length;g++)de=e.children[g],h[de.name]=this.visit(de.value,o);return h;case`OrExpression`:return s=this.visit(e.children[0],o),i(s)&&(s=this.visit(e.children[1],o)),s;case`AndExpression`:return u=this.visit(e.children[0],o),i(u)===!0?u:this.visit(e.children[1],o);case`NotExpression`:return u=this.visit(e.children[0],o),i(u);case`Literal`:return e.value;case ne:return p=this.visit(e.children[0],o),this.visit(e.children[1],p);case ee:return o;case`Function`:var fe=[];for(g=0;g<e.children.length;g++)fe.push(this.visit(e.children[g],o));return this.runtime.callFunction(e.name,fe);case`ExpressionReference`:var pe=e.children[0];return pe.jmespathType=te,pe;default:throw Error(`Unknown node type: `+e.type)}},computeSliceParams:function(e,t){var n=t[0],r=t[1],i=t[2],a=[null,null,null];if(i===null)i=1;else if(i===0){var o=Error(`Invalid slice, step cannot be 0`);throw o.name=`RuntimeError`,o}var s=i<0;return n=n===null?s?e-1:0:this.capSliceRange(e,n,i),r=r===null?s?-1:e:this.capSliceRange(e,r,i),a[0]=n,a[1]=r,a[2]=i,a},capSliceRange:function(e,t,n){return t<0?(t+=e,t<0&&(t=n<0?-1:0)):t>=e&&(t=n<0?e-1:e),t}};function Ce(e){this._interpreter=e,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[s]}]},avg:{_func:this._functionAvg,_signature:[{types:[h]}]},ceil:{_func:this._functionCeil,_signature:[{types:[s]}]},contains:{_func:this._functionContains,_signature:[{types:[l,u]},{types:[c]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[l]},{types:[l]}]},floor:{_func:this._functionFloor,_signature:[{types:[s]}]},length:{_func:this._functionLength,_signature:[{types:[l,u,d]}]},map:{_func:this._functionMap,_signature:[{types:[p]},{types:[u]}]},max:{_func:this._functionMax,_signature:[{types:[h,g]}]},merge:{_func:this._functionMerge,_signature:[{types:[d],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[u]},{types:[p]}]},sum:{_func:this._functionSum,_signature:[{types:[h]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[l]},{types:[l]}]},min:{_func:this._functionMin,_signature:[{types:[h,g]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[u]},{types:[p]}]},type:{_func:this._functionType,_signature:[{types:[c]}]},keys:{_func:this._functionKeys,_signature:[{types:[d]}]},values:{_func:this._functionValues,_signature:[{types:[d]}]},sort:{_func:this._functionSort,_signature:[{types:[g,h]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[u]},{types:[p]}]},join:{_func:this._functionJoin,_signature:[{types:[l]},{types:[g]}]},reverse:{_func:this._functionReverse,_signature:[{types:[l,u]}]},to_array:{_func:this._functionToArray,_signature:[{types:[c]}]},to_string:{_func:this._functionToString,_signature:[{types:[c]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[c]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[c],variadic:!0}]}}}Ce.prototype={callFunction:function(e,t){var n=this.functionTable[e];if(n===void 0)throw Error(`Unknown function: `+e+`()`);return this._validateArgs(e,t,n._signature),n._func.call(this,t)},_validateArgs:function(e,t,n){var r;if(n[n.length-1].variadic){if(t.length<n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes at least`+n.length+r+` but received `+t.length)}else if(t.length!==n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes `+n.length+r+` but received `+t.length);for(var i,a,o,s=0;s<n.length;s++){o=!1,i=n[s].types,a=this._getTypeName(t[s]);for(var c=0;c<i.length;c++)if(this._typeMatches(a,i[c],t[s])){o=!0;break}if(!o){var l=i.map(function(e){return _[e]}).join(`,`);throw Error(`TypeError: `+e+`() expected argument `+(s+1)+` to be type `+l+` but received type `+_[a]+` instead.`)}}},_typeMatches:function(e,t,n){if(t===c)return!0;if(t===g||t===h||t===u){if(t===u)return e===u;if(e===u){var r;t===h?r=s:t===g&&(r=l);for(var i=0;i<n.length;i++)if(!this._typeMatches(this._getTypeName(n[i]),r,n[i]))return!1;return!0}}else return e===t},_getTypeName:function(e){switch(Object.prototype.toString.call(e)){case`[object String]`:return l;case`[object Number]`:return s;case`[object Array]`:return u;case`[object Boolean]`:return f;case`[object Null]`:return m;case`[object Object]`:return e.jmespathType===te?p:d}},_functionStartsWith:function(e){return e[0].lastIndexOf(e[1])===0},_functionEndsWith:function(e){var t=e[0],n=e[1];return t.indexOf(n,t.length-n.length)!==-1},_functionReverse:function(e){if(this._getTypeName(e[0])===l){for(var t=e[0],n=``,r=t.length-1;r>=0;r--)n+=t[r];return n}else{var i=e[0].slice(0);return i.reverse(),i}},_functionAbs:function(e){return Math.abs(e[0])},_functionCeil:function(e){return Math.ceil(e[0])},_functionAvg:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t/n.length},_functionContains:function(e){return e[0].indexOf(e[1])>=0},_functionFloor:function(e){return Math.floor(e[0])},_functionLength:function(e){return n(e[0])?Object.keys(e[0]).length:e[0].length},_functionMap:function(e){for(var t=[],n=this._interpreter,r=e[0],i=e[1],a=0;a<i.length;a++)t.push(n.visit(r,i[a]));return t},_functionMerge:function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var i in r)t[i]=r[i]}return t},_functionMax:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.max.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)n.localeCompare(t[r])<0&&(n=t[r]);return n}else return null},_functionMin:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.min.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)t[r].localeCompare(n)<0&&(n=t[r]);return n}else return null},_functionSum:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t},_functionType:function(e){switch(this._getTypeName(e[0])){case s:return`number`;case l:return`string`;case u:return`array`;case d:return`object`;case f:return`boolean`;case p:return`expref`;case m:return`null`}},_functionKeys:function(e){return Object.keys(e[0])},_functionValues:function(e){for(var t=e[0],n=Object.keys(t),r=[],i=0;i<n.length;i++)r.push(t[n[i]]);return r},_functionJoin:function(e){var t=e[0];return e[1].join(t)},_functionToArray:function(e){return this._getTypeName(e[0])===u?e[0]:[e[0]]},_functionToString:function(e){return this._getTypeName(e[0])===l?e[0]:JSON.stringify(e[0])},_functionToNumber:function(e){var t=this._getTypeName(e[0]),n;return t===s?e[0]:t===l&&(n=+e[0],!isNaN(n))?n:null},_functionNotNull:function(e){for(var t=0;t<e.length;t++)if(this._getTypeName(e[t])!==m)return e[t];return null},_functionSort:function(e){var t=e[0].slice(0);return t.sort(),t},_functionSortBy:function(e){var t=e[0].slice(0);if(t.length===0)return t;var n=this._interpreter,r=e[1],i=this._getTypeName(n.visit(r,t[0]));if([s,l].indexOf(i)<0)throw Error(`TypeError`);for(var a=this,o=[],c=0;c<t.length;c++)o.push([c,t[c]]);o.sort(function(e,t){var o=n.visit(r,e[1]),s=n.visit(r,t[1]);if(a._getTypeName(o)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(o));if(a._getTypeName(s)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(s));return o>s?1:o<s?-1:e[0]-t[0]});for(var u=0;u<o.length;u++)t[u]=o[u][1];return t},_functionMaxBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=-1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o>i&&(i=o,a=n[c]);return a},_functionMinBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o<i&&(i=o,a=n[c]);return a},createKeyFunction:function(e,t){var n=this,r=this._interpreter;return function(i){var a=r.visit(e,i);if(t.indexOf(n._getTypeName(a))<0){var o=`TypeError: expected one of `+t+`, received `+n._getTypeName(a);throw Error(o)}return a}}};function we(e){return new xe().parse(e)}function Te(e){return new M().tokenize(e)}function Ee(e,t){var n=new xe,r=new Ce,i=new Se(r);r._interpreter=i;var a=n.parse(t);return i.search(a,e)}e.tokenize=Te,e.compile=we,e.search=Ee,e.strictDeepEqual=r})(e===void 0?e.jmespath={}:e)}))();var vu=class{add(e,t,n){if(typeof arguments[0]!=`string`)for(let e in arguments[0])this.add(e,arguments[0][e],arguments[1]);else(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},yu=class{constructor(e){this.jsep=e,this.registered={}}register(){[...arguments].forEach(e=>{if(typeof e!=`object`||!e.name||!e.init)throw Error(`Invalid JSEP plugin format`);this.registered[e.name]||(e.init(this.jsep),this.registered[e.name]=e)})}},bu=class e{static get version(){return`1.4.0`}static toString(){return`JavaScript Expression Parser (JSEP) v`+e.version}static addUnaryOp(t){return e.max_unop_len=Math.max(t.length,e.max_unop_len),e.unary_ops[t]=1,e}static addBinaryOp(t,n,r){return e.max_binop_len=Math.max(t.length,e.max_binop_len),e.binary_ops[t]=n,r?e.right_associative.add(t):e.right_associative.delete(t),e}static addIdentifierChar(t){return e.additional_identifier_chars.add(t),e}static addLiteral(t,n){return e.literals[t]=n,e}static removeUnaryOp(t){return delete e.unary_ops[t],t.length===e.max_unop_len&&(e.max_unop_len=e.getMaxKeyLen(e.unary_ops)),e}static removeAllUnaryOps(){return e.unary_ops={},e.max_unop_len=0,e}static removeIdentifierChar(t){return e.additional_identifier_chars.delete(t),e}static removeBinaryOp(t){return delete e.binary_ops[t],t.length===e.max_binop_len&&(e.max_binop_len=e.getMaxKeyLen(e.binary_ops)),e.right_associative.delete(t),e}static removeAllBinaryOps(){return e.binary_ops={},e.max_binop_len=0,e}static removeLiteral(t){return delete e.literals[t],e}static removeAllLiterals(){return e.literals={},e}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(e){this.expr=e,this.index=0}static parse(t){return new e(t).parse()}static getMaxKeyLen(e){return Math.max(0,...Object.keys(e).map(e=>e.length))}static isDecimalDigit(e){return e>=48&&e<=57}static binaryPrecedence(t){return e.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!e.binary_ops[String.fromCharCode(t)]||e.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return e.isIdentifierStart(t)||e.isDecimalDigit(t)}throwError(e){let t=Error(e+` at character `+this.index);throw t.index=this.index,t.description=e,t}runHook(t,n){if(e.hooks[t]){let r={context:this,node:n};return e.hooks.run(t,r),r.node}return n}searchHook(t){if(e.hooks[t]){let n={context:this};return e.hooks[t].find(function(e){return e.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let t=this.code;for(;t===e.SPACE_CODE||t===e.TAB_CODE||t===e.LF_CODE||t===e.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook(`gobble-spaces`)}parse(){this.runHook(`before-all`);let t=this.gobbleExpressions(),n=t.length===1?t[0]:{type:e.COMPOUND,body:t};return this.runHook(`after-all`,n)}gobbleExpressions(t){let n=[],r,i;for(;this.index<this.expr.length;)if(r=this.code,r===e.SEMCOL_CODE||r===e.COMMA_CODE)this.index++;else if(i=this.gobbleExpression())n.push(i);else if(this.index<this.expr.length){if(r===t)break;this.throwError(`Unexpected "`+this.char+`"`)}return n}gobbleExpression(){let e=this.searchHook(`gobble-expression`)||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook(`after-expression`,e)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,e.max_binop_len),n=t.length;for(;n>0;){if(e.binary_ops.hasOwnProperty(t)&&(!e.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=n,t;t=t.substr(0,--n)}return!1}gobbleBinaryExpression(){let t,n,r,i,a,o,s,c,l;if(o=this.gobbleToken(),!o||(n=this.gobbleBinaryOp(),!n))return o;for(a={value:n,prec:e.binaryPrecedence(n),right_a:e.right_associative.has(n)},s=this.gobbleToken(),s||this.throwError(`Expected expression after `+n),i=[o,a,s];n=this.gobbleBinaryOp();){if(r=e.binaryPrecedence(n),r===0){this.index-=n.length;break}a={value:n,prec:r,right_a:e.right_associative.has(n)},l=n;let c=e=>a.right_a&&e.right_a?r>e.prec:r<=e.prec;for(;i.length>2&&c(i[i.length-2]);)s=i.pop(),n=i.pop().value,o=i.pop(),t={type:e.BINARY_EXP,operator:n,left:o,right:s},i.push(t);t=this.gobbleToken(),t||this.throwError(`Expected expression after `+l),i.push(a,t)}for(c=i.length-1,t=i[c];c>1;)t={type:e.BINARY_EXP,operator:i[c-1].value,left:i[c-2],right:t},c-=2;return t}gobbleToken(){let t,n,r,i;if(this.gobbleSpaces(),i=this.searchHook(`gobble-token`),i)return this.runHook(`after-token`,i);if(t=this.code,e.isDecimalDigit(t)||t===e.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===e.SQUOTE_CODE||t===e.DQUOTE_CODE)i=this.gobbleStringLiteral();else if(t===e.OBRACK_CODE)i=this.gobbleArray();else{for(n=this.expr.substr(this.index,e.max_unop_len),r=n.length;r>0;){if(e.unary_ops.hasOwnProperty(n)&&(!e.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=r;let t=this.gobbleToken();return t||this.throwError(`missing unaryOp argument`),this.runHook(`after-token`,{type:e.UNARY_EXP,operator:n,argument:t,prefix:!0})}n=n.substr(0,--r)}e.isIdentifierStart(t)?(i=this.gobbleIdentifier(),e.literals.hasOwnProperty(i.name)?i={type:e.LITERAL,value:e.literals[i.name],raw:i.name}:i.name===e.this_str&&(i={type:e.THIS_EXP})):t===e.OPAREN_CODE&&(i=this.gobbleGroup())}return i?(i=this.gobbleTokenProperty(i),this.runHook(`after-token`,i)):this.runHook(`after-token`,!1)}gobbleTokenProperty(t){this.gobbleSpaces();let n=this.code;for(;n===e.PERIOD_CODE||n===e.OBRACK_CODE||n===e.OPAREN_CODE||n===e.QUMARK_CODE;){let r;if(n===e.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==e.PERIOD_CODE)break;r=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===e.OBRACK_CODE?(t={type:e.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError(`Unexpected "`+this.char+`"`),this.gobbleSpaces(),n=this.code,n!==e.CBRACK_CODE&&this.throwError(`Unclosed [`),this.index++):n===e.OPAREN_CODE?t={type:e.CALL_EXP,arguments:this.gobbleArguments(e.CPAREN_CODE),callee:t}:(n===e.PERIOD_CODE||r)&&(r&&this.index--,this.gobbleSpaces(),t={type:e.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),r&&(t.optional=!0),this.gobbleSpaces(),n=this.code}return t}gobbleNumericLiteral(){let t=``,n,r;for(;e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===e.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(n=this.char,n===`e`||n===`E`){for(t+=this.expr.charAt(this.index++),n=this.char,(n===`+`||n===`-`)&&(t+=this.expr.charAt(this.index++));e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError(`Expected exponent (`+t+this.char+`)`)}return r=this.code,e.isIdentifierStart(r)?this.throwError(`Variable names cannot start with a number (`+t+this.char+`)`):(r===e.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===e.PERIOD_CODE)&&this.throwError(`Unexpected period`),{type:e.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t=``,n=this.index,r=this.expr.charAt(this.index++),i=!1;for(;this.index<this.expr.length;){let e=this.expr.charAt(this.index++);if(e===r){i=!0;break}else if(e===`\\`)switch(e=this.expr.charAt(this.index++),e){case`n`:t+=`
`;break;case`r`:t+=`\r`;break;case`t`:t+=`	`;break;case`b`:t+=`\b`;break;case`f`:t+=`\f`;break;case`v`:t+=`\v`;break;default:t+=e}else t+=e}return i||this.throwError(`Unclosed quote after "`+t+`"`),{type:e.LITERAL,value:t,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let t=this.code,n=this.index;for(e.isIdentifierStart(t)?this.index++:this.throwError(`Unexpected `+this.char);this.index<this.expr.length&&(t=this.code,e.isIdentifierPart(t));)this.index++;return{type:e.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(t){let n=[],r=!1,i=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){r=!0,this.index++,t===e.CPAREN_CODE&&i&&i>=n.length&&this.throwError(`Unexpected token `+String.fromCharCode(t));break}else if(a===e.COMMA_CODE){if(this.index++,i++,i!==n.length){if(t===e.CPAREN_CODE)this.throwError(`Unexpected token ,`);else if(t===e.CBRACK_CODE)for(let e=n.length;e<i;e++)n.push(null)}}else if(n.length!==i&&i!==0)this.throwError(`Expected comma`);else{let t=this.gobbleExpression();(!t||t.type===e.COMPOUND)&&this.throwError(`Expected comma`),n.push(t)}}return r||this.throwError(`Expected `+String.fromCharCode(t)),n}gobbleGroup(){this.index++;let t=this.gobbleExpressions(e.CPAREN_CODE);if(this.code===e.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:e.SEQUENCE_EXP,expressions:t}:!1;this.throwError(`Unclosed (`)}gobbleArray(){return this.index++,{type:e.ARRAY_EXP,elements:this.gobbleArguments(e.CBRACK_CODE)}}},xu=new vu;Object.assign(bu,{hooks:xu,plugins:new yu(bu),COMPOUND:`Compound`,SEQUENCE_EXP:`SequenceExpression`,IDENTIFIER:`Identifier`,MEMBER_EXP:`MemberExpression`,LITERAL:`Literal`,THIS_EXP:`ThisExpression`,CALL_EXP:`CallExpression`,UNARY_EXP:`UnaryExpression`,BINARY_EXP:`BinaryExpression`,ARRAY_EXP:`ArrayExpression`,TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set([`**`]),additional_identifier_chars:new Set([`$`,`_`]),literals:{true:!0,false:!1,null:null},this_str:`this`}),bu.max_unop_len=bu.getMaxKeyLen(bu.unary_ops),bu.max_binop_len=bu.getMaxKeyLen(bu.binary_ops);var Su=e=>new bu(e).parse(),Cu=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(bu).filter(e=>!Cu.includes(e)&&Su[e]===void 0).forEach(e=>{Su[e]=bu[e]}),Su.Jsep=bu;var wu=`ConditionalExpression`;Su.plugins.register({name:`ternary`,init(e){e.hooks.add(`after-expression`,function(t){if(t.node&&this.code===e.QUMARK_CODE){this.index++;let n=t.node,r=this.gobbleExpression();if(r||this.throwError(`Expected expression`),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError(`Expected expression`),t.node={type:wu,test:n,consequent:r,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let r=n;for(;r.right.operator&&e.binary_ops[r.right.operator]<=.9;)r=r.right;t.node.test=r.right,r.right=t.node,t.node=n}}else this.throwError(`Expected :`)}})}});var Tu=47,Eu=92,Du={name:`regex`,init(e){e.hooks.add(`gobble-token`,function(t){if(this.code===Tu){let n=++this.index,r=!1;for(;this.index<this.expr.length;){if(this.code===Tu&&!r){let r=this.expr.slice(n,this.index),i=``;for(;++this.index<this.expr.length;){let e=this.code;if(e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57)i+=this.char;else break}let a;try{a=new RegExp(r,i)}catch(e){this.throwError(e.message)}return t.node={type:e.LITERAL,value:a,raw:this.expr.slice(n-1,this.index)},t.node=this.gobbleTokenProperty(t.node),t.node}this.code===e.OBRACK_CODE?r=!0:r&&this.code===e.CBRACK_CODE&&(r=!1),this.index+=this.code===Eu?2:1}this.throwError(`Unclosed Regex`)}})}},Ou=43,ku={name:`assignment`,assignmentOperators:new Set([`=`,`*=`,`**=`,`/=`,`%=`,`+=`,`-=`,`<<=`,`>>=`,`>>>=`,`&=`,`^=`,`|=`,`||=`,`&&=`,`??=`]),updateOperators:[Ou,45],assignmentPrecedence:.9,init(e){let t=[e.IDENTIFIER,e.MEMBER_EXP];ku.assignmentOperators.forEach(t=>e.addBinaryOp(t,ku.assignmentPrecedence,!0)),e.hooks.add(`gobble-token`,function(e){let n=this.code;ku.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(this.index+=2,e.node={type:`UpdateExpression`,operator:n===Ou?`++`:`--`,argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!e.node.argument||!t.includes(e.node.argument.type))&&this.throwError(`Unexpected ${e.node.operator}`))}),e.hooks.add(`after-token`,function(e){if(e.node){let n=this.code;ku.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(t.includes(e.node.type)||this.throwError(`Unexpected ${e.node.operator}`),this.index+=2,e.node={type:`UpdateExpression`,operator:n===Ou?`++`:`--`,argument:e.node,prefix:!1})}}),e.hooks.add(`after-expression`,function(e){e.node&&n(e.node)});function n(e){ku.assignmentOperators.has(e.operator)?(e.type=`AssignmentExpression`,n(e.left),n(e.right)):e.operator||Object.values(e).forEach(e=>{e&&typeof e==`object`&&n(e)})}}};Su.plugins.register(Du,ku),Su.addUnaryOp(`typeof`),Su.addUnaryOp(`void`),Su.addLiteral(`null`,null),Su.addLiteral(`undefined`,void 0);var Au=new Set([`constructor`,`__proto__`,`__defineGetter__`,`__defineSetter__`,`__lookupGetter__`,`__lookupSetter__`]),ju={evalAst(e,t){switch(e.type){case`BinaryExpression`:case`LogicalExpression`:return ju.evalBinaryExpression(e,t);case`Compound`:return ju.evalCompound(e,t);case`ConditionalExpression`:return ju.evalConditionalExpression(e,t);case`Identifier`:return ju.evalIdentifier(e,t);case`Literal`:return ju.evalLiteral(e,t);case`MemberExpression`:return ju.evalMemberExpression(e,t);case`UnaryExpression`:return ju.evalUnaryExpression(e,t);case`ArrayExpression`:return ju.evalArrayExpression(e,t);case`CallExpression`:return ju.evalCallExpression(e,t);case`AssignmentExpression`:return ju.evalAssignmentExpression(e,t);default:throw SyntaxError(`Unexpected expression`,e)}},evalBinaryExpression(e,t){return{"||":(e,t)=>e||t(),"&&":(e,t)=>e&&t(),"|":(e,t)=>e|t(),"^":(e,t)=>e^t(),"&":(e,t)=>e&t(),"==":(e,t)=>e==t(),"!=":(e,t)=>e!=t(),"===":(e,t)=>e===t(),"!==":(e,t)=>e!==t(),"<":(e,t)=>e<t(),">":(e,t)=>e>t(),"<=":(e,t)=>e<=t(),">=":(e,t)=>e>=t(),"<<":(e,t)=>e<<t(),">>":(e,t)=>e>>t(),">>>":(e,t)=>e>>>t(),"+":(e,t)=>e+t(),"-":(e,t)=>e-t(),"*":(e,t)=>e*t(),"/":(e,t)=>e/t(),"%":(e,t)=>e%t()}[e.operator](ju.evalAst(e.left,t),()=>ju.evalAst(e.right,t))},evalCompound(e,t){let n;for(let r=0;r<e.body.length;r++){e.body[r].type===`Identifier`&&[`var`,`let`,`const`].includes(e.body[r].name)&&e.body[r+1]&&e.body[r+1].type===`AssignmentExpression`&&(r+=1);let i=e.body[r];n=ju.evalAst(i,t)}return n},evalConditionalExpression(e,t){return ju.evalAst(e.test,t)?ju.evalAst(e.consequent,t):ju.evalAst(e.alternate,t)},evalIdentifier(e,t){if(Object.hasOwn(t,e.name))return t[e.name];throw ReferenceError(`${e.name} is not defined`)},evalLiteral(e){return e.value},evalMemberExpression(e,t){let n=String(e.computed?ju.evalAst(e.property):e.property.name),r=ju.evalAst(e.object,t);if(r==null||!Object.hasOwn(r,n)&&Au.has(n))throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);let i=r[n];return typeof i==`function`?i.bind(r):i},evalUnaryExpression(e,t){return{"-":e=>-ju.evalAst(e,t),"!":e=>!ju.evalAst(e,t),"~":e=>~ju.evalAst(e,t),"+":e=>+ju.evalAst(e,t),typeof:e=>typeof ju.evalAst(e,t),void:e=>void ju.evalAst(e,t)}[e.operator](e.argument)},evalArrayExpression(e,t){return e.elements.map(e=>ju.evalAst(e,t))},evalCallExpression(e,t){let n=e.arguments.map(e=>ju.evalAst(e,t)),r=ju.evalAst(e.callee,t);if(r===Function)throw Error(`Function constructor is disabled`);return r(...n)},evalAssignmentExpression(e,t){if(e.left.type!==`Identifier`)throw SyntaxError(`Invalid left-hand side in assignment`);let n=e.left.name;return t[n]=ju.evalAst(e.right,t),t[n]}},Mu=class{constructor(e){this.code=e,this.ast=Su(this.code)}runInNewContext(e){let t=Object.assign(Object.create(null),e);return ju.evalAst(this.ast,t)}};function Nu(e,t){return e=e.slice(),e.push(t),e}function Pu(e,t){return t=t.slice(),t.unshift(e),t}var Fu=class extends Error{constructor(e){super(`JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)`),this.avoidNew=!0,this.value=e,this.name=`NewError`}};function Iu(e,t,n,r,i){if(!(this instanceof Iu))try{return new Iu(e,t,n,r,i)}catch(e){if(!e.avoidNew)throw e;return e.value}typeof e==`string`&&(i=r,r=n,n=t,t=e,e=null);let a=e&&typeof e==`object`;if(e||={},this.json=e.json||n,this.path=e.path||t,this.resultType=e.resultType||`value`,this.flatten=e.flatten||!1,this.wrap=!Object.hasOwn(e,`wrap`)||e.wrap,this.sandbox=e.sandbox||{},this.eval=e.eval===void 0?`safe`:e.eval,this.ignoreEvalErrors=e.ignoreEvalErrors!==void 0&&e.ignoreEvalErrors,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||r||null,this.otherTypeCallback=e.otherTypeCallback||i||function(){throw TypeError(`You must supply an otherTypeCallback callback option with the @other() operator.`)},e.autostart!==!1){let r={path:a?e.path:t};a?`json`in e&&(r.json=e.json):r.json=n;let i=this.evaluate(r);if(!i||typeof i!=`object`)throw new Fu(i);return i}}Iu.prototype.evaluate=function(e,t,n,r){let i=this.parent,a=this.parentProperty,{flatten:o,wrap:s}=this;if(this.currResultType=this.resultType,this.currEval=this.eval,this.currSandbox=this.sandbox,n||=this.callback,this.currOtherTypeCallback=r||this.otherTypeCallback,t||=this.json,e||=this.path,e&&typeof e==`object`&&!Array.isArray(e)){if(!e.path&&e.path!==``)throw TypeError(`You must supply a "path" property when providing an object argument to JSONPath.evaluate().`);if(!Object.hasOwn(e,`json`))throw TypeError(`You must supply a "json" property when providing an object argument to JSONPath.evaluate().`);({json:t}=e),o=Object.hasOwn(e,`flatten`)?e.flatten:o,this.currResultType=Object.hasOwn(e,`resultType`)?e.resultType:this.currResultType,this.currSandbox=Object.hasOwn(e,`sandbox`)?e.sandbox:this.currSandbox,s=Object.hasOwn(e,`wrap`)?e.wrap:s,this.currEval=Object.hasOwn(e,`eval`)?e.eval:this.currEval,n=Object.hasOwn(e,`callback`)?e.callback:n,this.currOtherTypeCallback=Object.hasOwn(e,`otherTypeCallback`)?e.otherTypeCallback:this.currOtherTypeCallback,i=Object.hasOwn(e,`parent`)?e.parent:i,a=Object.hasOwn(e,`parentProperty`)?e.parentProperty:a,e=e.path}if(i||=null,a||=null,Array.isArray(e)&&(e=Iu.toPathString(e)),!e&&e!==``||!t)return;let c=Iu.toPathArray(e);c[0]===`$`&&c.length>1&&c.shift(),this._hasParentSelector=null;let l=this._trace(c,t,[`$`],i,a,n).filter(function(e){return e&&!e.isParentSelector});return l.length?!s&&l.length===1&&!l[0].hasArrExpr?this._getPreferredOutput(l[0]):l.reduce((e,t)=>{let n=this._getPreferredOutput(t);return o&&Array.isArray(n)?e=e.concat(n):e.push(n),e},[]):s?[]:void 0},Iu.prototype._getPreferredOutput=function(e){let t=this.currResultType;switch(t){case`all`:{let t=Array.isArray(e.path)?e.path:Iu.toPathArray(e.path);return e.pointer=Iu.toPointer(t),e.path=typeof e.path==`string`?e.path:Iu.toPathString(e.path),e}case`value`:case`parent`:case`parentProperty`:return e[t];case`path`:return Iu.toPathString(e[t]);case`pointer`:return Iu.toPointer(e.path);default:throw TypeError(`Unknown result type`)}},Iu.prototype._handleCallback=function(e,t,n){if(t){let r=this._getPreferredOutput(e);e.path=typeof e.path==`string`?e.path:Iu.toPathString(e.path),t(r,n,e)}},Iu.prototype._trace=function(e,t,n,r,i,a,o,s){let c;if(!e.length)return c={path:n,value:t,parent:r,parentProperty:i,hasArrExpr:o},this._handleCallback(c,a,`value`),c;let l=e[0],u=e.slice(1),d=[];function f(e){Array.isArray(e)?e.forEach(e=>{d.push(e)}):d.push(e)}if((typeof l!=`string`||s)&&t&&Object.hasOwn(t,l))f(this._trace(u,t[l],Nu(n,l),t,l,a,o));else if(l===`*`)this._walk(t,e=>{f(this._trace(u,t[e],Nu(n,e),t,e,a,!0,!0))});else if(l===`..`)f(this._trace(u,t,n,r,i,a,o)),this._walk(t,r=>{typeof t[r]==`object`&&f(this._trace(e.slice(),t[r],Nu(n,r),t,r,a,!0))});else if(l===`^`)return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:u,isParentSelector:!0};else if(l===`~`)return c={path:Nu(n,l),value:i,parent:r,parentProperty:null},this._handleCallback(c,a,`property`),c;else if(l===`$`)f(this._trace(u,t,n,null,null,a,o));else if(/^(-?\d*):(-?\d*):?(\d*)$/u.test(l))f(this._slice(l,u,t,n,r,i,a));else if(l.indexOf(`?(`)===0){if(this.currEval===!1)throw Error(`Eval [?(expr)] prevented in JSONPath expression.`);let e=l.replace(/^\?\((.*?)\)$/u,`$1`),o=/@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(e);o?this._walk(t,e=>{let s=[o[2]],c=o[1]?t[e][o[1]]:t[e];this._trace(s,c,n,r,i,a,!0).length>0&&f(this._trace(u,t[e],Nu(n,e),t,e,a,!0))}):this._walk(t,o=>{this._eval(e,t[o],o,n,r,i)&&f(this._trace(u,t[o],Nu(n,o),t,o,a,!0))})}else if(l[0]===`(`){if(this.currEval===!1)throw Error(`Eval [(expr)] prevented in JSONPath expression.`);f(this._trace(Pu(this._eval(l,t,n.at(-1),n.slice(0,-1),r,i),u),t,n,r,i,a,o))}else if(l[0]===`@`){let e=!1,o=l.slice(1,-2);switch(o){case`scalar`:(!t||![`object`,`function`].includes(typeof t))&&(e=!0);break;case`boolean`:case`string`:case`undefined`:case`function`:typeof t===o&&(e=!0);break;case`integer`:Number.isFinite(t)&&!(t%1)&&(e=!0);break;case`number`:Number.isFinite(t)&&(e=!0);break;case`nonFinite`:typeof t==`number`&&!Number.isFinite(t)&&(e=!0);break;case`object`:t&&typeof t===o&&(e=!0);break;case`array`:Array.isArray(t)&&(e=!0);break;case`other`:e=this.currOtherTypeCallback(t,n,r,i);break;case`null`:t===null&&(e=!0);break;default:throw TypeError(`Unknown value type `+o)}if(e)return c={path:n,value:t,parent:r,parentProperty:i},this._handleCallback(c,a,`value`),c}else if(l[0]==="`"&&t&&Object.hasOwn(t,l.slice(1))){let e=l.slice(1);f(this._trace(u,t[e],Nu(n,e),t,e,a,o,!0))}else if(l.includes(`,`)){let e=l.split(`,`);for(let o of e)f(this._trace(Pu(o,u),t,n,r,i,a,!0))}else!s&&t&&Object.hasOwn(t,l)&&f(this._trace(u,t[l],Nu(n,l),t,l,a,o,!0));if(this._hasParentSelector)for(let e=0;e<d.length;e++){let n=d[e];if(n&&n.isParentSelector){let s=this._trace(n.expr,t,n.path,r,i,a,o);if(Array.isArray(s)){d[e]=s[0];let t=s.length;for(let n=1;n<t;n++)e++,d.splice(e,0,s[n])}else d[e]=s}}return d},Iu.prototype._walk=function(e,t){if(Array.isArray(e)){let n=e.length;for(let e=0;e<n;e++)t(e)}else e&&typeof e==`object`&&Object.keys(e).forEach(e=>{t(e)})},Iu.prototype._slice=function(e,t,n,r,i,a,o){if(!Array.isArray(n))return;let s=n.length,c=e.split(`:`),l=c[2]&&Number.parseInt(c[2])||1,u=c[0]&&Number.parseInt(c[0])||0,d=c[1]&&Number.parseInt(c[1])||s;u=u<0?Math.max(0,u+s):Math.min(s,u),d=d<0?Math.max(0,d+s):Math.min(s,d);let f=[];for(let e=u;e<d;e+=l)this._trace(Pu(e,t),n,r,i,a,o,!0).forEach(e=>{f.push(e)});return f},Iu.prototype._eval=function(e,t,n,r,i,a){this.currSandbox._$_parentProperty=a,this.currSandbox._$_parent=i,this.currSandbox._$_property=n,this.currSandbox._$_root=this.json,this.currSandbox._$_v=t;let o=e.includes(`@path`);o&&(this.currSandbox._$_path=Iu.toPathString(r.concat([n])));let s=this.currEval+`Script:`+e;if(!Iu.cache[s]){let t=e.replaceAll(`@parentProperty`,`_$_parentProperty`).replaceAll(`@parent`,`_$_parent`).replaceAll(`@property`,`_$_property`).replaceAll(`@root`,`_$_root`).replaceAll(/@([.\s)[])/gu,`_$_v$1`);if(o&&(t=t.replaceAll(`@path`,`_$_path`)),this.currEval===`safe`||this.currEval===!0||this.currEval===void 0)Iu.cache[s]=new this.safeVm.Script(t);else if(this.currEval===`native`)Iu.cache[s]=new this.vm.Script(t);else if(typeof this.currEval==`function`&&this.currEval.prototype&&Object.hasOwn(this.currEval.prototype,`runInNewContext`)){let e=this.currEval;Iu.cache[s]=new e(t)}else if(typeof this.currEval==`function`)Iu.cache[s]={runInNewContext:e=>this.currEval(t,e)};else throw TypeError(`Unknown "eval" property "${this.currEval}"`)}try{return Iu.cache[s].runInNewContext(this.currSandbox)}catch(t){if(this.ignoreEvalErrors)return!1;throw Error(`jsonPath: `+t.message+`: `+e)}},Iu.cache={},Iu.toPathString=function(e){let t=e,n=t.length,r=`$`;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=/^[0-9*]+$/u.test(t[e])?`[`+t[e]+`]`:`['`+t[e]+`']`);return r},Iu.toPointer=function(e){let t=e,n=t.length,r=``;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=`/`+t[e].toString().replaceAll(`~`,`~0`).replaceAll(`/`,`~1`));return r},Iu.toPathArray=function(e){let{cache:t}=Iu;if(t[e])return t[e].concat();let n=[];return t[e]=e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu,`;$&;`).replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu,function(e,t){return`[#`+(n.push(t)-1)+`]`}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu,function(e,t){return`['`+t.replaceAll(`.`,`%@%`).replaceAll(`~`,`%%@@%%`)+`']`}).replaceAll(`~`,`;~;`).replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu,`;`).replaceAll(`%@%`,`.`).replaceAll(`%%@@%%`,`~`).replaceAll(/(?:;)?(\^+)(?:;)?/gu,function(e,t){return`;`+t.split(``).join(`;`)+`;`}).replaceAll(/;;;|;;/gu,`;..;`).replaceAll(/;$|'?\]|'$/gu,``).split(`;`).map(function(e){let t=e.match(/#(\d+)/u);return!t||!t[1]?e:n[t[1]]}),t[e].concat()},Iu.prototype.safeVm={Script:Mu};var Lu=function(e,t,n){let r=e.length;for(let i=0;i<r;i++){let r=e[i];n(r)&&t.push(e.splice(i--,1)[0])}},Ru=class{constructor(e){this.code=e}runInNewContext(e){let t=this.code,n=Object.keys(e),r=[];Lu(n,r,t=>typeof e[t]==`function`);let i=n.map(t=>e[t]);t=r.reduce((t,n)=>{let r=e[n].toString();return/function/u.test(r)||(r=`function `+r),`var `+n+`=`+r+`;`+t},``)+t,!/(['"])use strict\1/u.test(t)&&!n.includes(`arguments`)&&(t=`var arguments = undefined;`+t),t=t.replace(/;\s*$/u,``);let a=t.lastIndexOf(`;`),o=a===-1?` return `+t:t.slice(0,a+1)+` return `+t.slice(a+1);return Function(...n,o)(...i)}};Iu.prototype.vm={Script:Ru};function zu(e,t=e.state){let n=new Set;for(let{from:r,to:i}of e.visibleRanges){let e=r;for(;e<=i;){let r=t.doc.lineAt(e);n.has(r)||n.add(r),e=r.to+1}}return n}function Bu(e){let t=e.selection.main.head;return e.doc.lineAt(t)}function Vu(e,t){let n=0;loop:for(let r=0;r<e.length;r++)switch(e[r]){case` `:case`\xA0`:n+=1;continue loop;case`	`:n+=t-n%t;continue loop;case`\r`:continue loop;default:break loop}return n}var Hu=Pe.define({combine(e){return ne(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:`fullScope`,thickness:1})}}),Uu=class{constructor(e,t,n,r){this.lines=e,this.state=t,this.map=new Map,this.unitWidth=n,this.markerType=r;for(let e of this.lines)this.add(e);this.state.facet(Hu).highlightActiveBlock&&this.findAndSetActiveLines()}has(e){return this.map.has(typeof e==`number`?e:e.number)}get(e){let t=this.map.get(typeof e==`number`?e:e.number);if(!t)throw Error(`Line not found in indentation map`);return t}set(e,t,n){let r={line:e,col:t,level:n,empty:!e.text.trim().length};return this.map.set(r.line.number,r),r}add(e){if(this.has(e))return this.get(e);if(!e.length||!e.text.trim().length){if(e.number===1)return this.set(e,0,0);if(e.number===this.state.doc.lines){let t=this.closestNonEmpty(e,-1);return this.set(e,0,t.level)}let t=this.closestNonEmpty(e,-1),n=this.closestNonEmpty(e,1);return t.level>=n.level&&this.markerType!==`codeOnly`?this.set(e,0,t.level):t.empty&&t.level===0&&n.level!==0?this.set(e,0,0):n.level>t.level?this.set(e,0,t.level+1):this.set(e,0,n.level)}let t=Vu(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}closestNonEmpty(e,t){let n=e.number+t;for(;t===-1?n>=1:n<=this.state.doc.lines;){if(this.has(n)){let e=this.get(n);if(!e.empty)return e}let e=this.state.doc.line(n);if(e.text.trim().length){let t=Vu(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}n+=t}let r=this.state.doc.line(t===-1?1:this.state.doc.lines);return this.set(r,0,0)}findAndSetActiveLines(){let e=Bu(this.state);if(!this.has(e))return;let t=this.get(e);if(this.has(t.line.number+1)){let e=this.get(t.line.number+1);e.level>t.level&&(t=e)}if(this.has(t.line.number-1)){let e=this.get(t.line.number-1);e.level>t.level&&(t=e)}if(t.level===0)return;t.active=t.level;let n,r;for(n=t.line.number;n>1;n--){if(!this.has(n-1))continue;let e=this.get(n-1);if(e.level<t.level)break;e.active=t.level}for(r=t.line.number;r<this.state.doc.lines;r++){if(!this.has(r+1))continue;let e=this.get(r+1);if(e.level<t.level)break;e.active=t.level}}};function Wu(e){let t={light:`#F0F1F2`,dark:`#2B3245`,activeLight:`#E4E5E6`,activeDark:`#3C445C`},n=t;return e&&(n=Object.assign(Object.assign({},t),e)),Ae.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:`relative`},".cm-indent-markers::before":{content:`""`,position:`absolute`,top:0,left:`2px`,right:0,bottom:0,background:`var(--indent-markers)`,pointerEvents:`none`,zIndex:`-1`}})}function Gu(e,t,n,r,i){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${n}ch)`} ${r*n}.5ch/calc(${n*i}ch - 1px) no-repeat`}function Ku(e,t,n,r,i){let{level:a,active:o}=e;if(i??=r,n&&a===0)return[];let s=+!!n,c=[];if(o!==void 0){let e=o-s-1;e>0&&c.push(Gu(`--indent-marker-bg-color`,r,t,s,e)),c.push(Gu(`--indent-marker-active-bg-color`,i,t,o-1,1)),o!==a&&c.push(Gu(`--indent-marker-bg-color`,r,t,o,a-o))}else c.push(Gu(`--indent-marker-bg-color`,r,t,s,a-s));return c.join(`,`)}var qu=class{constructor(e){this.view=e,this.unitWidth=ae(e.state),this.currentLineNumber=Bu(e.state).number,this.generate(e.state)}update(e){let t=ae(e.state),n=t!==this.unitWidth;n&&(this.unitWidth=t);let r=Bu(e.state).number,i=r!==this.currentLineNumber;this.currentLineNumber=r;let a=e.state.facet(Hu).highlightActiveBlock&&i;(e.docChanged||e.viewportChanged||n||a)&&this.generate(e.state)}generate(e){let t=new ue,n=zu(this.view,e),{hideFirstIndent:r,markerType:i,thickness:a,activeThickness:o}=e.facet(Hu),s=new Uu(n,e,this.unitWidth,i);for(let e of n){let n=s.get(e.number);if(!n?.level)continue;let i=Ku(n,this.unitWidth,r,a,o);t.add(e.from,e.from,me.line({class:`cm-indent-markers`,attributes:{style:`--indent-markers: ${i}`}}))}this.decorations=t.finish()}};function Ju(e={}){return[Hu.of(e),Wu(e.colors),Se.fromClass(qu,{decorations:e=>e.decorations})]}var Yu,Xu,Zu,Qu=[`mainAxis`,`crossAxis`,`fallbackPlacements`,`fallbackStrategy`,`fallbackAxisSideDirection`,`flipAlignment`],$u=[`mainAxis`,`crossAxis`,`limiter`];function ed(e){return ld(e)||function(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}(e)||sd(e)||od()}function td(e,t){if(e==null)return{};var n,r,i=function(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nd(Object(n),!0).forEach(function(t){hd(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nd(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function rd(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function id(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){rd(a,r,i,o,s,`next`,e)}function s(e){rd(a,r,i,o,s,`throw`,e)}o(void 0)})}}function ad(e,t){return ld(e)||function(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}(e,t)||sd(e,t)||od()}function od(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sd(e,t){if(e){if(typeof e==`string`)return cd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cd(e,t):void 0}}function cd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ld(e){if(Array.isArray(e))return e}function ud(e,t){fd(e,t),t.add(e)}function dd(e,t,n){fd(e,t),t.set(e,n)}function fd(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function L(e,t){return e.get(md(e,t))}function pd(e,t,n){return e.set(md(e,t),n),n}function md(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function hd(e,t,n){return(t=function(e){var t=function(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}(e,`string`);return typeof t==`symbol`?t:t+``}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gd,_d;typeof window<`u`&&((gd=(_d=window).__svelte??(_d.__svelte={})).v??(gd.v=new Set)).add(`5`);var vd=!1;vd=!0;var yd=Symbol(`uninitialized`),bd=`http://www.w3.org/1999/xhtml`,xd=Array.isArray,Sd=Array.prototype.indexOf,Cd=Array.prototype.includes,wd=Array.from,Td=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Dd=Object.getOwnPropertyDescriptors,Od=Object.prototype,kd=Array.prototype,Ad=Object.getPrototypeOf,jd=Object.isExtensible;function Md(e){return typeof e==`function`}var Nd=()=>{};function Pd(e){return e()}function Fd(e){for(var t=0;t<e.length;t++)e[t]()}function Id(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var Ld=1<<24,Rd=16,zd=32,Bd=64,Vd=512,Hd=1024,Ud=2048,Wd=4096,Gd=8192,Kd=16384,qd=32768,Jd=1<<25,Yd=65536,Xd=1<<17,Zd=1<<19,Qd=1<<25,$d=65536,ef=1<<21,tf=1<<23,nf=Symbol(`$state`),rf=Symbol(`legacy props`),af=Symbol(``),of=Symbol(`attributes`),sf=Symbol(`class`),cf=Symbol(`style`),lf=Symbol(`text`),uf=Symbol(`form reset`),df=new class extends Error{constructor(){super(...arguments),hd(this,`name`,`StaleReactionError`),hd(this,`message`,"The reaction that called `getAbortSignal()` was re-run or destroyed")}},ff=!((Yu=globalThis.document)==null||!Yu.contentType)&&globalThis.document.contentType.includes(`xml`);function pf(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function mf(e){return e===this.v}function hf(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function gf(e){return!hf(e,this.v)}var _f=null;function vf(e){_f=e}function yf(e){return Cf().get(e)}function bf(e){_f={p:_f,i:!1,c:null,e:null,s:e,x:null,r:eh,l:vd&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function xf(e){var t=_f,n=t.e;if(n!==null)for(var r of(t.e=null,n))jm(r);return e!==void 0&&(t.x=e),t.i=!0,_f=t.p,e??{}}function Sf(){return!vd||_f!==null&&_f.l===null}function Cf(e){var t;return _f===null&&pf(),(t=_f).c??(t.c=new Map(function(e){for(var t=e.p;t!==null;){var n=t.c;if(n!==null)return n;t=t.p}return null}(_f)||void 0))}var wf=[];function Tf(){var e=wf;wf=[],Fd(e)}function Ef(e){if(wf.length===0&&!Sp){var t=wf;queueMicrotask(()=>{t===wf&&Tf()})}wf.push(e)}function Df(){for(;wf.length>0;)Tf()}function Of(e){var t=eh;if(t===null)return Zm.f|=tf,e;if((t.f&qd)===0&&!(4&t.f))throw e;kf(e,t)}function kf(e,t){if(t===null||(t.f&Kd)===0){for(;t!==null;){if(128&t.f){if((t.f&qd)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var Af=-7169;function jf(e,t){e.f=e.f&Af|t}function Mf(e){(e.f&Vd)!==0||e.deps===null?jf(e,Hd):jf(e,Wd)}function Nf(e){if(e!==null)for(var t of e)2&t.f&&(t.f&$d)!==0&&(t.f^=$d,Nf(t.deps))}function Pf(e,t,n){(e.f&Ud)===0?(e.f&Wd)!==0&&n.add(e):t.add(e),Nf(e.deps),jf(e,Hd)}var Ff=!1,If=!1;function Lf(e){var t=Zm,n=eh;$m(null),th(null);try{return e()}finally{$m(t),th(n)}}function Rf(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(t,()=>Lf(n));var i=e[uf];e[uf]=i?()=>{i(),r(!0)}:()=>r(!0),If||(If=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(var t of e.target.elements){var n;(n=t[uf])==null||n.call(t)}})},{capture:!0}))}var zf=new WeakMap,Bf=new WeakMap,Vf=new WeakMap,Hf=new WeakMap,Uf=new WeakMap,Wf=new WeakMap,Gf=new WeakMap,Kf=new WeakMap,qf=new WeakMap,Jf=new WeakMap,Yf=new WeakMap,Xf=new WeakMap,Zf=new WeakMap,Qf=new WeakMap,$f=new WeakMap,ep=new WeakMap,tp=new WeakSet,np=class{constructor(e,t,n,r){var i,a,o,s;ud(this,tp),hd(this,`parent`,void 0),hd(this,`is_pending`,!1),hd(this,`transform_error`,void 0),dd(this,zf,void 0),dd(this,Bf,null),dd(this,Vf,void 0),dd(this,Hf,void 0),dd(this,Uf,void 0),dd(this,Wf,null),dd(this,Gf,null),dd(this,Kf,null),dd(this,qf,null),dd(this,Jf,0),dd(this,Yf,0),dd(this,Xf,!1),dd(this,Zf,new Set),dd(this,Qf,new Set),dd(this,$f,null),dd(this,ep,(i=()=>(pd($f,this,dm(L(Jf,this))),()=>{pd($f,this,null)}),o=0,s=dm(0),()=>{Om()&&(G(s),Pm(()=>(o===0&&(a=K(()=>i(()=>gm(s)))),o+=1,()=>{Ef(()=>{var e;--o==0&&((e=a)==null||e(),a=void 0,gm(s))})})))})),pd(zf,this,e),pd(Vf,this,t),pd(Hf,this,e=>{var t=eh;t.b=this,t.f|=128,n(e)}),this.parent=eh.b,this.transform_error=r??this.parent?.transform_error??(e=>e),pd(Uf,this,Fm(()=>{md(tp,this,rp).call(this)},589824))}defer_effect(e){Pf(e,L(Zf,this),L(Qf,this))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!L(Vf,this).pending}update_pending_count(e,t){md(tp,this,op).call(this,e,t),pd(Jf,this,L(Jf,this)+e),L($f,this)&&!L(Xf,this)&&(pd(Xf,this,!0),Ef(()=>{pd(Xf,this,!1),L($f,this)&&mm(L($f,this),L(Jf,this))}))}get_effect_pending(){return L(ep,this).call(this),G(L($f,this))}error(e){var t;if(!L(Vf,this).onerror&&!L(Vf,this).failed)throw e;(t=vp)!=null&&t.is_fork?(L(Wf,this)&&vp.skip_effect(L(Wf,this)),L(Gf,this)&&vp.skip_effect(L(Gf,this)),L(Kf,this)&&vp.skip_effect(L(Kf,this)),vp.oncommit(()=>{md(tp,this,sp).call(this,e)})):md(tp,this,sp).call(this,e)}};function rp(){try{if(this.is_pending=this.has_pending_snippet(),pd(Yf,this,0),pd(Jf,this,0),pd(Wf,this,Lm(()=>{L(Hf,this).call(this,L(zf,this))})),L(Yf,this)>0){var e=pd(qf,this,document.createDocumentFragment());qm(L(Wf,this),e);var t=L(Vf,this).pending;pd(Gf,this,Lm(()=>t(L(zf,this))))}else md(tp,this,ip).call(this,vp)}catch(e){this.error(e)}}function ip(e){this.is_pending=!1,e.transfer_effects(L(Zf,this),L(Qf,this))}function ap(e){var t=eh,n=Zm,r=_f;th(L(Uf,this)),$m(L(Uf,this)),vf(L(Uf,this).ctx);try{return Wp.ensure(),e()}catch(e){return Of(e),null}finally{th(t),$m(n),vf(r)}}function op(e,t){var n;this.has_pending_snippet()?(pd(Yf,this,L(Yf,this)+e),L(Yf,this)===0&&(md(tp,this,ip).call(this,t),L(Gf,this)&&Um(L(Gf,this),()=>{pd(Gf,this,null)}),L(qf,this)&&(L(zf,this).before(L(qf,this)),pd(qf,this,null)))):this.parent&&md(tp,n=this.parent,op).call(n,e,t)}function sp(e){L(Wf,this)&&(Bm(L(Wf,this)),pd(Wf,this,null)),L(Gf,this)&&(Bm(L(Gf,this)),pd(Gf,this,null)),L(Kf,this)&&(Bm(L(Kf,this)),pd(Kf,this,null));var t=L(Vf,this).onerror,n=L(Vf,this).failed,r=!1,i=!1,a=()=>{r?console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`):(r=!0,i&&function(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}(),L(Kf,this)!==null&&Um(L(Kf,this),()=>{pd(Kf,this,null)}),md(tp,this,ap).call(this,()=>{md(tp,this,rp).call(this)}))},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){kf(e,L(Uf,this)&&L(Uf,this).parent)}n&&pd(Kf,this,md(tp,this,ap).call(this,()=>{try{return Lm(()=>{var t=eh;t.b=this,t.f|=128,n(L(zf,this),()=>e,()=>a)})}catch(e){return kf(e,L(Uf,this).parent),null}}))};Ef(()=>{var t;try{t=this.transform_error(e)}catch(e){kf(e,L(Uf,this)&&L(Uf,this).parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>kf(e,L(Uf,this)&&L(Uf,this).parent)):o(t)})}function cp(e,t,n,r){var i=Sf()?dp:R,a=e.filter(e=>!e.settled),o=t.map(i);if(n.length!==0||a.length!==0){var s=eh,c=function(){var e=eh,t=Zm,n=_f,r=vp;return function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];th(e),$m(t),vf(n),i&&(e.f&Kd)===0&&(r?.activate(),r?.apply())}}(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null,u=up();n.length===0?l.then(()=>d([])).finally(u):l?l.then(()=>{c(),f(),lp()}):f()}else r(o);function d(e){if((s.f&Kd)===0){c();try{r([...o,...e])}catch(e){kf(e,s)}lp()}}function f(){Promise.all(n.map(e=>function(e){var t=eh;t===null&&function(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}();var n=void 0,r=dm(yd),i=!Zm,a=new Set;return function(e){Dm(4718592,e)}(()=>{var o=eh,s=Id();n=s.promise;try{Promise.resolve(e()).then(s.resolve,e=>{e!==df&&s.reject(e)}).finally(lp)}catch(e){s.reject(e),lp()}var c=vp;if(i){var l,u;if((o.f&qd)!==0)var d=up();if((l=t.b)!=null&&l.is_rendered())(u=c.async_deriveds.get(o))==null||u.reject(fp);else for(var f of a.values())f.reject(fp);a.add(s),c.async_deriveds.set(o,s)}var p=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;d?.(),a.delete(s),t!==fp&&(c.activate(),t?(r.f|=tf,mm(r,t)):((r.f&tf)!==0&&(r.f^=tf),mm(r,e)),c.deactivate())};s.promise.then(p,e=>p(null,e||`unknown`))}),km(()=>{for(var e of a)e.reject(fp)}),new Promise(e=>{function t(i){function a(){i===n?e(r):t(n)}i.then(a,a)}t(n)})}(e))).then(d).catch(e=>kf(e,s)).finally(u)}}function lp(){var e,t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];th(null),$m(null),vf(null),t&&((e=vp)==null||e.deactivate())}function up(){var e=eh,t=e.b,n=vp,r=!(t==null||!t.is_rendered());return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function dp(e){return eh!==null&&(eh.f|=Zd),{ctx:_f,deps:null,effects:null,equals:mf,f:2050,fn:e,reactions:null,rv:0,v:yd,wv:0,parent:eh,ac:null}}var fp=Symbol(`obsolete`);function pp(e){var t=dp(e);return rh(t),t}function R(e){var t=dp(e);return t.equals=gf,t}function mp(e){var t,n=eh,r=e.parent;if(!Ym&&r!==null&&e.v!==yd&&24576&r.f)return console.warn(`https://svelte.dev/e/derived_inert`),e.v;th(r);try{e.f&=-65537,function(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Bm(t[n])}}(e),t=mh(e)}finally{th(n)}return t}function hp(e){var t,n,r=mp(e);if(!e.equals(r)&&(e.wv=dh(),(t=vp)==null||!t.is_fork||e.deps===null)){var i;if(vp===null?e.v=r:(vp.capture(e,r,!0),(i=yp)==null||i.capture(e,r,!0)),e.deps===null)return void jf(e,Hd)}Ym||(bp===null?Mf(e):(Om()||(n=vp)!=null&&n.is_fork)&&bp.set(e,r))}function gp(e){if(e.effects!==null)for(var t of e.effects)t.teardown&&t.fn!==null&&_h(t)}var _p=null,vp=null,yp=null,bp=null,xp=null,Sp=!1,Cp=!1,wp=null,Tp=null,Ep=0,Dp=1,Op=new WeakMap,kp=new WeakMap,Ap=new WeakMap,jp=new WeakMap,Mp=new WeakMap,Np=new WeakMap,Pp=new WeakMap,Fp=new WeakMap,Ip=new WeakMap,Lp=new WeakMap,Rp=new WeakMap,zp=new WeakMap,Bp=new WeakMap,Vp=new WeakMap,Hp=new WeakMap,Up=new WeakSet,Wp=class e{constructor(){ud(this,Up),hd(this,`id`,Dp++),dd(this,Op,!1),hd(this,`linked`,!0),dd(this,kp,null),dd(this,Ap,null),hd(this,`async_deriveds`,new Map),hd(this,`current`,new Map),hd(this,`previous`,new Map),dd(this,jp,new Set),dd(this,Mp,new Set),dd(this,Np,0),dd(this,Pp,new Map),dd(this,Fp,null),dd(this,Ip,[]),dd(this,Lp,[]),dd(this,Rp,new Set),dd(this,zp,new Set),dd(this,Bp,new Map),dd(this,Vp,new Set),hd(this,`is_fork`,!1),dd(this,Hp,!1),_p===null?_p=this:(pd(Ap,_p,this),pd(kp,this,_p)),_p=this}skip_effect(e){L(Bp,this).has(e)||L(Bp,this).set(e,{d:[],m:[]}),L(Vp,this).delete(e)}unskip_effect(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e=>this.schedule(e),n=L(Bp,this).get(e);if(n){for(var r of(L(Bp,this).delete(e),n.d))jf(r,Ud),t(r);for(r of n.m)jf(r,Wd),t(r)}L(Vp,this).add(e)}capture(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];(e.v===yd||this.previous.has(e)||this.previous.set(e,e.v),(e.f&tf)===0)&&(this.current.set(e,[t,r]),(n=bp)==null||n.set(e,t)),this.is_fork||(e.v=t)}activate(){vp=this}deactivate(){vp=null,bp=null}flush(){try{Cp=!0,vp=this,md(Up,this,Kp).call(this)}finally{Ep=0,xp=null,wp=null,Tp=null,Cp=!1,vp=null,bp=null,lm.clear()}}discard(){var e;for(var t of L(Mp,this))t(this);for(var n of(L(Mp,this).clear(),this.async_deriveds.values()))n.reject(fp);md(Up,this,Zp).call(this),(e=L(Fp,this))==null||e.resolve()}register_created_effect(e){L(Lp,this).push(e)}increment(e,t){if(pd(Np,this,L(Np,this)+1),e){var n=L(Pp,this).get(t)??0;L(Pp,this).set(t,n+1)}}decrement(e,t){if(pd(Np,this,L(Np,this)-1),e){var n=L(Pp,this).get(t)??0;n===1?L(Pp,this).delete(t):L(Pp,this).set(t,n-1)}L(Hp,this)||(pd(Hp,this,!0),Ef(()=>{pd(Hp,this,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(var n of e)L(Rp,this).add(n);for(var r of t)L(zp,this).add(r);e.clear(),t.clear()}oncommit(e){L(jp,this).add(e)}ondiscard(e){L(Mp,this).add(e)}settled(){return(L(Fp,this)??pd(Fp,this,Id())).promise}static ensure(){if(vp===null){var t=vp=new e;Cp||Sp||Ef(()=>{L(Op,t)||t.flush()})}return vp}apply(){bp=null}schedule(e){var t;if(xp=e,(t=e.b)!=null&&t.is_pending&&16777228&e.f&&(e.f&qd)===0)e.b.defer_effect(e);else{for(var n=e;n.parent!==null;){var r=(n=n.parent).f;if(!(wp===null||n!==eh||Zm!==null&&2&Zm.f))return;if(96&r){if((r&Hd)===0)return;n.f^=Hd}}L(Ip,this).push(n)}}};function Gp(){if(this.is_fork)return!0;for(var e of L(Pp,this).keys()){for(var t=e,n=!1;t.parent!==null;){if(L(Bp,this).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1}function Kp(){var e;for(var t of(pd(Op,this,!0),Ep++>1e3&&(md(Up,this,Zp).call(this),function(){try{(function(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)})()}catch(e){kf(e,xp)}}()),L(Rp,this)))L(zp,this).delete(t),jf(t,Ud),this.schedule(t);for(var n of L(zp,this))jf(n,Wd),this.schedule(n);var r=L(Ip,this);pd(Ip,this,[]),this.apply();var i=wp=[],a=[],o=Tp=[];for(var s of r)try{md(Up,this,qp).call(this,s,i,a)}catch(e){throw rm(s),md(Up,this,Gp).call(this)||this.discard(),e}if(vp=null,o.length>0){var c=Xu.ensure();for(var l of o)c.schedule(l)}if(wp=null,Tp=null,md(Up,this,Gp).call(this)){for(var u of(md(Up,this,Xp).call(this,a),md(Up,this,Xp).call(this,i),L(Bp,this))){var d=ad(u,2);nm(d[0],d[1])}var f;o.length>0&&md(Up,f=vp,Kp).call(f)}else{var p=md(Up,this,Jp).call(this);if(p)return md(Up,this,Xp).call(this,a),md(Up,this,Xp).call(this,i),void md(Up,p,Yp).call(p,this);for(var m of(L(Rp,this).clear(),L(zp,this).clear(),L(jp,this)))m(this);L(jp,this).clear(),yp=this,em(a),em(i),yp=null,(e=L(Fp,this))==null||e.resolve();var h,g=vp;if(L(Np,this)!==0||L(Ip,this).length!==0&&g===null||md(Up,this,Zp).call(this),L(Ip,this).length>0)if(g!==null){var _=g;L(Ip,_).push(...L(Ip,this).filter(e=>!L(Ip,_).includes(e)))}else g=this;g!==null&&md(Up,h=g,Kp).call(h)}}function qp(e,t,n){e.f^=Hd;for(var r=e.first;r!==null;){var i=r.f,a=!!(96&i);if(!(a&&(i&Hd)!==0||(i&Gd)!==0||L(Bp,this).has(r))&&r.fn!==null){a?r.f^=Hd:4&i?t.push(r):fh(r)&&((i&Rd)!==0&&L(zp,this).add(r),_h(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}function Jp(){for(var e=L(kp,this);e!==null;){if(!e.is_fork)for(var t of this.current){var n=ad(t,2),r=n[0],i=ad(n[1],2)[1];if(e.current.has(r)&&!i)return e}e=L(kp,e)}return null}function Yp(e){for(var t of e.current){var n=ad(t,2),r=n[0],i=n[1];!this.previous.has(r)&&e.previous.has(r)&&this.previous.set(r,e.previous.get(r)),this.current.set(r,i)}for(var a of e.async_deriveds){var o=ad(a,2),s=o[0],c=o[1],l=this.async_deriveds.get(s);l&&c.promise.then(l.resolve).catch(l.reject)}e.async_deriveds.clear(),this.transfer_effects(L(Rp,e),L(zp,e));var u=e=>{var t=e.reactions;if(t!==null&&(!(2&e.f)||6144&e.f))for(var n of t){var r=n.f;if(2&r)u(n);else{var i=n;4194320&r&&!this.async_deriveds.has(i)&&(L(zp,this).delete(i),jf(i,Ud),this.schedule(i))}}};for(var d of this.current.keys())u(d);this.oncommit(()=>e.discard()),md(Up,e,Zp).call(e),vp=this,md(Up,this,Kp).call(this)}function Xp(e){for(var t=0;t<e.length;t+=1)Pf(e[t],L(Rp,this),L(zp,this))}function Zp(){if(this.linked){var e=L(kp,this),t=L(Ap,this);e===null||pd(Ap,e,t),t===null?_p=e:pd(kp,t,e),this.linked=!1}}function Qp(e){var t=Sp;Sp=!0;try{for(;;){if(Df(),vp===null)return;vp.flush()}}finally{Sp=t}}Xu=Wp;var $p=null;function em(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(24576&r.f)&&fh(r)&&($p=new Set,_h(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Hm(r),$p?.size>0)){for(var i of(lm.clear(),$p))if(!(24576&i.f)){for(var a=[i],o=i.parent;o!==null;)$p.has(o)&&($p.delete(o),a.push(o)),o=o.parent;for(var s=a.length-1;s>=0;s--){var c=a[s];24576&c.f||_h(c)}}$p.clear()}}$p=null}}function tm(e){vp.schedule(e)}function nm(e,t){if((e.f&zd)===0||(e.f&Hd)===0){(e.f&Ud)===0?(e.f&Wd)!==0&&t.m.push(e):t.d.push(e),jf(e,Hd);for(var n=e.first;n!==null;)nm(n,t),n=n.next}}function rm(e){jf(e,Hd);for(var t=e.first;t!==null;)rm(t),t=t.next}var im,am,om,sm,cm=new Set,lm=new Map,um=!1;function dm(e,t){return{f:0,v:e,reactions:null,equals:mf,rv:0,wv:0}}function fm(e,t){var n=dm(e);return rh(n),n}function z(e){var t,n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=dm(e);return(n||(i.equals=gf),vd&&r&&_f!==null&&_f.l!==null)&&((t=_f.l).s??(t.s=[])).push(i),i}function pm(e,t){return B(e,K(()=>G(e))),t}function B(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Zm===null||Qm&&(Zm.f&Xd)===0||!Sf()||!(4325394&Zm.f)||nh!==null&&nh.has(e)||function(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}(),mm(e,n?vm(t):t,Tp)}function mm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.equals(t)){lm.set(e,Ym?t:e.v);var r=Wp.ensure();if(r.capture(e,t),2&e.f){var i=e;(e.f&Ud)!==0&&mp(i),bp===null&&Mf(i)}e.wv=dh(),_m(e,Ud,n),!Sf()||eh===null||(eh.f&Hd)===0||96&eh.f||(oh===null?function(e){oh=e}([e]):oh.push(e)),!r.is_fork&&cm.size>0&&!um&&function(){for(var e of(um=!1,cm)){(e.f&Hd)!==0&&jf(e,Wd);var t=void 0;try{t=fh(e)}catch{t=!0}t&&_h(e)}cm.clear()}()}return t}function hm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=G(e),r=t===1?n++:n--;return B(e,n),r}function gm(e){B(e,e.v+1)}function _m(e,t,n){var r=e.reactions;if(r!==null)for(var i=Sf(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==eh){var l=(c&Ud)===0;if(l&&jf(s,t),(c&Xd)!==0)cm.add(s);else if(2&c){var u,d=s;(u=bp)==null||u.delete(d),(c&$d)===0&&(c&Vd&&(eh===null||(eh.f&ef)===0)&&(s.f|=$d),_m(d,Wd,n))}else if(l){var f=s;(c&Rd)!==0&&$p!==null&&$p.add(f),n===null?tm(f):n.push(f)}}}}function vm(e){if(typeof e!=`object`||!e||nf in e)return e;var t=Ad(e);if(t!==Od&&t!==kd)return e;var n=new Map,r=xd(e),i=fm(0),a=lh,o=e=>{if(lh===a)return e();var t=Zm,n=lh;$m(null),uh(a);var r=e();return $m(t),uh(n),r};return r&&n.set(`length`,fm(e.length)),new Proxy(e,{defineProperty(e,t,r){`value`in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}();var i=n.get(t);return i===void 0?o(()=>{var e=fm(r.value);return n.set(t,e),e}):B(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t);if(r===void 0){if(t in e){var a=o(()=>fm(yd));n.set(t,a),gm(i)}}else B(r,yd),gm(i);return!0},get(t,r,i){var a;if(r===nf)return e;var s=n.get(r),c=r in t;if(s===void 0&&(!c||(a=Ed(t,r))!=null&&a.writable)&&(s=o(()=>fm(vm(c?t[r]:yd))),n.set(r,s)),s!==void 0){var l=G(s);return l===yd?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&`value`in r){var i=n.get(t);i&&(r.value=G(i))}else if(r===void 0){var a=n.get(t),o=a?.v;if(a!==void 0&&o!==yd)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){var r;if(t===nf)return!0;var i=n.get(t),a=i!==void 0&&i.v!==yd||Reflect.has(e,t);return(i!==void 0||eh!==null&&(!a||(r=Ed(e,t))!=null&&r.writable))&&(i===void 0&&(i=o(()=>fm(a?vm(e[t]):yd)),n.set(t,i)),G(i)===yd)?!1:a},set(e,t,a,s){var c,l=n.get(t),u=t in e;if(r&&t===`length`)for(var d=a;d<l.v;d+=1){var f=n.get(d+``);f===void 0?d in e&&(f=o(()=>fm(yd)),n.set(d+``,f)):B(f,yd)}l===void 0?(!u||(c=Ed(e,t))!=null&&c.writable)&&(B(l=o(()=>fm(void 0)),vm(a)),n.set(t,l)):(u=l.v!==yd,B(l,o(()=>vm(a))));var p=Reflect.getOwnPropertyDescriptor(e,t);if(p!=null&&p.set&&p.set.call(s,a),!u){if(r&&typeof t==`string`){var m=n.get(`length`),h=Number(t);Number.isInteger(h)&&h>=m.v&&B(m,h+1)}gm(i)}return!0},ownKeys(e){G(i);var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e);return t===void 0||t.v!==yd});for(var r of n){var a=ad(r,2),o=a[0];a[1].v===yd||o in e||t.push(o)}return t},setPrototypeOf(){(function(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)})()}})}function ym(e){try{if(typeof e==`object`&&e&&nf in e)return e[nf]}catch{}return e}function bm(e,t){return Object.is(ym(e),ym(t))}function xm(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:``;return document.createTextNode(e)}function Sm(e){return om.call(e)}function Cm(e){return sm.call(e)}function V(e,t){return Sm(e)}function wm(e){var t=Sm(e);return t instanceof Comment&&t.data===``?Cm(t):t}function H(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;t--;)n=Cm(n);return n}function Tm(e,t,n){return t==null||t===bd?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Em(e){eh===null&&(Zm===null&&function(){throw Error(`https://svelte.dev/e/effect_orphan`)}(),function(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}()),Ym&&function(){throw Error(`https://svelte.dev/e/effect_in_teardown`)}()}function Dm(e,t){var n,r=eh;r!==null&&(r.f&Gd)!==0&&(e|=Gd);var i={ctx:_f,deps:null,nodes:null,f:e|Ud|Vd,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};(n=vp)==null||n.register_created_effect(i);var a=i;if(4&e)wp===null?Wp.ensure().schedule(i):wp.push(i);else if(t!==null){try{_h(i)}catch(e){throw Bm(i),e}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Zd)===0&&(a=a.first,(e&Rd)!==0&&(e&Yd)!==0&&a!==null&&(a.f|=Yd))}if(a!==null&&(a.parent=r,r!==null&&function(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(a,r),Zm!==null&&2&Zm.f&&(e&Bd)===0)){var o=Zm;(o.effects??=[]).push(a)}return i}function Om(){return Zm!==null&&!Qm}function km(e){var t=Dm(8,null);return jf(t,Hd),t.teardown=e,t}function Am(e){Em();var t=eh.f;if(!(!Zm&&(t&zd)!==0&&_f!==null&&!_f.i))return jm(e);var n=_f;(n.e??=[]).push(e)}function jm(e){return Dm(1048580,e)}function Mm(e){return Dm(4,e)}function U(e,t){var n={effect:null,ran:!1,deps:e};_f.l.$.push(n),n.effect=Pm(()=>{if(e(),!n.ran){n.ran=!0;var r=eh;try{th(r.parent),K(t)}finally{th(r)}}})}function Nm(){var e=_f;Pm(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&Hd)!==0&&n.deps!==null&&jf(n,Wd),fh(n)&&_h(n),t.ran=!1}})}function Pm(e){return Dm(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function W(e){cp(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{Dm(8,()=>{e(...t.map(G))})})}function Fm(e){return Dm(Rd|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function Im(e){return Dm(Ld|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function Lm(e){return Dm(524320,e)}function Rm(e){var t=e.teardown;if(t!==null){var n=Ym,r=Zm;Xm(!0),$m(null);try{t.call(null)}finally{Xm(n),$m(r)}}}function zm(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var r,i=function(){var e=n.ac;e!==null&&Lf(()=>{e.abort(df)}),r=n.next,(n.f&Bd)===0?Bm(n,t):n.parent=null,n=r};n!==null;)i()}function Bm(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;(t||262144&e.f)&&e.nodes!==null&&e.nodes.end!==null&&(Vm(e.nodes.start,e.nodes.end),n=!0),e.f|=Jd,zm(e,t&&!n),gh(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)i.stop();Rm(e),e.f^=Jd,e.f|=Kd;var a=e.parent;a!==null&&a.first!==null&&Hm(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Vm(e,t){for(;e!==null;){var n=e===t?null:Cm(e);e.remove(),e=n}}function Hm(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Um(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];Wm(e,r,!0);var i=()=>{n&&Bm(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Wm(e,t,n){if((e.f&Gd)===0){e.f^=Gd;var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)(i.is_global||n)&&t.push(i);for(var a=e.first;a!==null;){var o=a.next;(a.f&Bd)===0&&Wm(a,t,((a.f&Yd)!==0||(a.f&zd)!==0&&(e.f&Rd)!==0)&&n),a=o}}}function Gm(e){Km(e,!0)}function Km(e,t){if((e.f&Gd)!==0){e.f^=Gd,(e.f&Hd)===0&&(jf(e,Ud),Wp.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next;Km(n,((n.f&Yd)!==0||(n.f&zd)!==0)&&t),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(var a of i)(a.is_global||t)&&a.in()}}function qm(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Cm(n);t.append(n),n=i}}var Jm=!1,Ym=!1;function Xm(e){Ym=e}var Zm=null,Qm=!1;function $m(e){Zm=e}var eh=null;function th(e){eh=e}var nh=null;function rh(e){Zm!==null&&(nh??=new Set).add(e)}var ih=null,ah=0,oh=null,sh=1,ch=0,lh=ch;function uh(e){lh=e}function dh(){return++sh}function fh(e){var t=e.f;if((t&Ud)!==0)return!0;if(2&t&&(e.f&=-65537),(t&Wd)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(fh(a)&&hp(a),a.wv>e.wv)return!0}(t&Vd)!==0&&bp===null&&jf(e,Hd)}return!1}function ph(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=e.reactions;if(r!==null&&(nh===null||!nh.has(e)))for(var i=0;i<r.length;i++){var a=r[i];2&a.f?ph(a,t,!1):t===a&&(n?jf(a,Ud):(a.f&Hd)!==0&&jf(a,Wd),tm(a))}}function mh(e){var t=ih,n=ah,r=oh,i=Zm,a=nh,o=_f,s=Qm,c=lh,l=e.f;ih=null,ah=0,oh=null,Zm=96&l?null:e,nh=null,vf(e.ctx),Qm=!1,lh=++ch,e.ac!==null&&(Lf(()=>{e.ac.abort(df)}),e.ac=null);try{e.f|=ef;var u=(0,e.fn)();e.f|=qd;var d=e.deps,f=vp?.is_fork;if(ih!==null){var p;if(f||gh(e,ah),d!==null&&ah>0)for(d.length=ah+ih.length,p=0;p<ih.length;p++)d[ah+p]=ih[p];else e.deps=d=ih;if(Om()&&(e.f&Vd)!==0)for(p=ah;p<d.length;p++){var m;((m=d[p]).reactions??(m.reactions=[])).push(e)}}else!f&&d!==null&&ah<d.length&&(gh(e,ah),d.length=ah);if(Sf()&&oh!==null&&!Qm&&d!==null&&!(6146&e.f))for(p=0;p<oh.length;p++)ph(oh[p],e);if(i!==null&&i!==e){if(ch++,i.deps!==null)for(var h=0;h<n;h+=1)i.deps[h].rv=ch;if(t!==null)for(var g of t)g.rv=ch;oh!==null&&(r===null?r=oh:r.push(...oh))}return(e.f&tf)!==0&&(e.f^=tf),u}catch(e){return Of(e)}finally{e.f^=ef,ih=t,ah=n,oh=r,Zm=i,nh=a,vf(o),Qm=s,lh=c}}function hh(e,t){var n=t.reactions;if(n!==null){var r=Sd.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&2&t.f&&(ih===null||!Cd.call(ih,t))){var a=t;(a.f&Vd)!==0&&(a.f^=Vd,a.f&=-65537),a.v!==yd&&Mf(a),a.ac!==null&&Lf(()=>{a.ac.abort(df),a.ac=null,jf(a,Ud)}),function(e){if(e.effects!==null){var t=function(e){var t;(e.teardown||e.ac)&&((t=e.teardown)==null||t.call(e),e.ac!==null&&Lf(()=>{e.ac.abort(df),e.ac=null}),e.fn!==null&&(e.teardown=Nd),gh(e,0),zm(e))};for(var n of e.effects)t(n)}}(a),gh(a,0)}}function gh(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)hh(e,n[r])}function _h(e){var t=e.f;if((t&Kd)===0){jf(e,Hd);var n=eh,r=Jm;eh=e,Jm=!(96&t);try{16777232&t?function(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&zd)===0&&Bm(t),t=n}}(e):zm(e),Rm(e);var i=mh(e);e.teardown=typeof i==`function`?i:null,e.wv=sh}finally{Jm=r,eh=n}}}function vh(){return yh.apply(this,arguments)}function yh(){return(yh=id(function*(){yield Promise.resolve(),Qp()})).apply(this,arguments)}function G(e){var t,n=!!(2&e.f);if(Zm!==null&&!Qm&&!(eh!==null&&(eh.f&Kd)!==0||nh!==null&&nh.has(e))){var r=Zm.deps;if((Zm.f&ef)!==0)e.rv<ch&&(e.rv=ch,ih===null&&r!==null&&r[ah]===e?ah++:ih===null?ih=[e]:ih.push(e));else{var i;(i=Zm).deps??(i.deps=[]),Cd.call(Zm.deps,e)||Zm.deps.push(e);var a=e.reactions;a===null?e.reactions=[Zm]:Cd.call(a,Zm)||a.push(Zm)}}if(Ym&&lm.has(e))return lm.get(e);if(n){var o=e;if(Ym){var s=o.v;return((o.f&Hd)===0&&o.reactions!==null||xh(o))&&(s=mp(o)),lm.set(o,s),s}var c=(o.f&Vd)===0&&!Qm&&Zm!==null&&(Jm||(Zm.f&Vd)!==0),l=(o.f&qd)===0;fh(o)&&(c&&(o.f|=Vd),hp(o)),c&&!l&&(gp(o),bh(o))}if((t=bp)!=null&&t.has(e))return bp.get(e);if((e.f&tf)!==0)throw e.v;return e.v}function bh(e){if(e.f|=Vd,e.deps!==null)for(var t of e.deps)(t.reactions??=[]).push(e),2&t.f&&(t.f&Vd)===0&&(gp(t),bh(t))}function xh(e){if(e.v===yd)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(lm.has(t)||2&t.f&&xh(t))return!0;return!1}function K(e){var t=Qm;try{return Qm=!0,e()}finally{Qm=t}}function q(e){if(typeof e==`object`&&e&&!(e instanceof EventTarget)){if(nf in e)Sh(e);else if(!Array.isArray(e))for(var t in e){var n=e[t];typeof n==`object`&&n&&nf in n&&Sh(n)}}}function Sh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!=`object`||!e||e instanceof EventTarget||t.has(e))){for(var n in t.add(e),e instanceof Date&&e.getTime(),e)try{Sh(e[n],t)}catch{}var r=Ad(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){var i=Dd(r);for(var a in i){var o=i[a].get;if(o)try{o.call(e)}catch{}}}}}var Ch=Symbol(`events`),wh=new Set,Th=new Set;function Eh(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function i(e){if(r.capture||kh.call(t,e),!e.cancelBubble)return Lf(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ef(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function J(e,t,n,r,i){var a={capture:r,passive:i},o=Eh(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&km(()=>{t.removeEventListener(e,o,a)})}function Dh(e,t,n){(t[Ch]??(t[Ch]={}))[e]=n}function Oh(e){for(var t=0;t<e.length;t++)wh.add(e[t]);for(var n of Th)n(e)}function kh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.call(e)||[],a=i[0]||e.target,o=0,s=e===e&&e[Ch];if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window))return void(e[Ch]=t);var l=i.indexOf(t);if(l===-1)return;c<=l&&(o=c)}if((a=i[o]||e.target)!==t){Td(e,`currentTarget`,{configurable:!0,get:()=>a||n});var u=Zm,d=eh;$m(null),th(null);try{for(var f,p=[];a!==null&&a!==t;){try{var m=a[Ch]?.[r];m==null||a.disabled&&e.target!==a||m.call(a,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble)break;o++,a=o<i.length?i[o]:null}if(f){var h=function(e){queueMicrotask(()=>{throw e})};for(var g of p)h(g);throw f}}finally{e[Ch]=t,delete e.currentTarget,$m(u),th(d)}}}var Ah=(globalThis==null||(Zu=globalThis.window)==null?void 0:Zu.trustedTypes)&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function jh(e){var t=Tm(`template`);return t.innerHTML=function(e){return Ah?.createHTML(e)??e}(e.replaceAll(`<!>`,`<!---->`)),t.content}function Mh(e,t){var n=eh;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Y(e,t){var n,r=!!(1&t),i=!!(2&t),a=!e.startsWith(`<!>`);return()=>{n===void 0&&(n=jh(a?e:`<!>`+e),r||(n=Sm(n)));var t=i||am?document.importNode(n,!0):n.cloneNode(!0);return r?Mh(Sm(t),t.lastChild):Mh(t,t),t}}function Nh(e,t){return function(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`svg`,i=!e.startsWith(`<!>`),a=!!(1&t),o=`<${r}>${i?e:`<!>`+e}</${r}>`;return()=>{if(!n){var e=Sm(jh(o));if(a)for(n=document.createDocumentFragment();Sm(e);)n.appendChild(Sm(e));else n=Sm(e)}var t=n.cloneNode(!0);return a?Mh(Sm(t),t.lastChild):Mh(t,t),t}}(e,t,`svg`)}function Ph(){var e=xm((arguments.length>0&&arguments[0]!==void 0?arguments[0]:``)+``);return Mh(e,e),e}function Fh(){var e=document.createDocumentFragment(),t=document.createComment(``),n=xm();return e.append(t,n),Mh(t,n),e}function X(e,t){e!==null&&e.before(t)}var Ih=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`],Lh={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`},Rh=[`touchstart`,`touchmove`];function zh(e){return Rh.includes(e)}function Bh(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[lf]??(e[lf]=e.nodeValue))&&(e[lf]=n,e.nodeValue=`${n}`)}function Vh(e,t){return function(e,t){var n=t.target,r=t.anchor,i=t.props,a=i===void 0?{}:i,o=t.events,s=t.context,c=(t.intro,t.transformError);(function(){if(im===void 0){im=window,am=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;om=Ed(t,`firstChild`).get,sm=Ed(t,`nextSibling`).get,jd(e)&&(e[sf]=void 0,e[of]=null,e[cf]=void 0,e.__e=void 0),jd(n)&&(n[lf]=void 0)}})();var l=void 0,u=function(e){Wp.ensure();var t=Dm(524352,e);return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(n=>{e.outro?Um(t,()=>{Bm(t),n(void 0)}):(Bm(t),n(void 0))})}}(()=>{var t=r??n.appendChild(xm());(function(e,t,n,r){new np(e,t,n,r)})(t,{pending:()=>{}},t=>{bf({}),s&&(_f.c=s),o&&(a.$$events=o),l=e(t,a)||{},xf()},c);var i=new Set,u=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!i.has(r)){i.add(r);var a=zh(r);for(var o of[n,document]){var s=Hh.get(o);s===void 0&&(s=new Map,Hh.set(o,s));var c=s.get(r);c===void 0?(o.addEventListener(r,kh,{passive:a}),s.set(r,1)):s.set(r,c+1)}}}};return u(wd(wh)),Th.add(u),()=>{for(var e of i)for(var a of[n,document]){var o=Hh.get(a),s=o.get(e);--s==0?(a.removeEventListener(e,kh),o.delete(e),o.size===0&&Hh.delete(a)):o.set(e,s)}var c;(Th.delete(u),t!==r)&&((c=t.parentNode)==null||c.removeChild(t))}});return Uh.set(l,u),l}(e,t)}var Hh=new Map,Uh=new WeakMap,Wh=new WeakMap,Gh=new WeakMap,Kh=new WeakMap,qh=new WeakMap,Jh=new WeakMap,Yh=new WeakMap,Xh=new WeakMap,Zh=class{constructor(e){var t=this,n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];hd(this,`anchor`,void 0),dd(this,Wh,new Map),dd(this,Gh,new Map),dd(this,Kh,new Map),dd(this,qh,new Set),dd(this,Jh,!0),dd(this,Yh,e=>{if(L(Wh,this).has(e)){var n=L(Wh,this).get(e),r=L(Gh,this).get(n);if(r)Gm(r),L(qh,this).delete(n);else{var i=L(Kh,this).get(n);i&&(Gm(i.effect),L(Gh,this).set(n,i.effect),L(Kh,this).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(var a of L(Wh,this)){var o=ad(a,2),s=o[0],c=o[1];if(L(Wh,this).delete(s),s===e)break;var l=L(Kh,this).get(c);l&&(Bm(l.effect),L(Kh,this).delete(c))}var u,d=function(){var e=(u=ad(f,2))[0],i=u[1];if(e===n||L(qh,t).has(e))return 1;var a=()=>{if(Array.from(L(Wh,t).values()).includes(e)){var n=document.createDocumentFragment();qm(i,n),n.append(xm()),L(Kh,t).set(e,{effect:i,fragment:n})}else Bm(i);L(qh,t).delete(e),L(Gh,t).delete(e)};L(Jh,t)||!r?(L(qh,t).add(e),Um(i,a,!1)):a()};for(var f of L(Gh,this))d()}}),dd(this,Xh,e=>{L(Wh,this).delete(e);var t=Array.from(L(Wh,this).values());for(var n of L(Kh,this)){var r=ad(n,2),i=r[0],a=r[1];t.includes(i)||(Bm(a.effect),L(Kh,this).delete(i))}}),this.anchor=e,pd(Jh,this,n)}ensure(e,t){var n=vp;!t||L(Gh,this).has(e)||L(Kh,this).has(e)||L(Gh,this).set(e,Lm(()=>t(this.anchor))),L(Wh,this).set(n,e),L(Yh,this).call(this,n)}};function Qh(e){_f===null&&pf(),vd&&_f.l!==null?ng(_f).m.push(e):Am(()=>{var t=K(e);if(typeof t==`function`)return t})}function $h(e){_f===null&&pf(),Qh(()=>()=>K(e))}function eg(){var e=_f;return e===null&&pf(),(t,n,r)=>{var i=e.s.$$events?.[t];if(i){var a=xd(i)?i.slice():[i],o=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.bubbles,i=r!==void 0&&r,a=n.cancelable;return new CustomEvent(e,{detail:t,bubbles:i,cancelable:a!==void 0&&a})}(t,n,r);for(var s of a)s.call(e.x,o);return!o.defaultPrevented}return!0}}function tg(e){_f===null&&pf(),_f.l===null&&function(){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}(),ng(_f).b.push(e)}function ng(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}function Z(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=new Zh(e);function i(e,t){r.ensure(e,t)}Fm(()=>{var e=!1;t(function(t){e=!0,i(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t)}),e||i(-1,null)},n?Yd:0)}var rg,ig=Symbol(`NaN`);function ag(e,t,n){var r=new Zh(e),i=!Sf();Fm(()=>{var e=t();e!=e&&(e=ig),i&&typeof e==`object`&&e&&(e={}),r.ensure(e,n)})}function og(e,t){return t}function sg(e,t){var n,r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(e.pending.size>0)for(var i of(n=new Set,e.pending.values()))for(var a of i)n.add(e.items.get(a).e);for(var o=0;o<t.length;o++){var s,c=t[o];(s=n)!=null&&s.has(c)?(c.f|=Qd,qm(c,document.createDocumentFragment())):Bm(t[o],r)}}function cg(e,t,n,r,i){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=e,s=new Map;!(4&t)||(o=e.appendChild(xm()));var c,l=null,u=R(()=>{var e=n();return xd(e)?e:e==null?[]:wd(e)}),d=new Map,f=!0;function p(e){(m.effect.f&Kd)===0&&(m.pending.delete(e),m.fallback=l,function(e,t,n,r,i){var a,o,s,c,l,u=!!(8&r),d=t.length,f=e.items,p=lg(e.effect.first),m=null,h=[],g=[];if(u)for(l=0;l<d;l+=1){var _;s=i(t[l],l),((c=f.get(s).e).f&Qd)===0&&((_=c.nodes)==null||(_=_.a)==null||_.measure(),(o??=new Set).add(c))}for(l=0;l<d;l+=1){if(s=i(t[l],l),c=f.get(s).e,e.outrogroups!==null)for(var v of e.outrogroups)v.pending.delete(c),v.done.delete(c);var y;if((c.f&Gd)!==0&&(Gm(c),u&&((y=c.nodes)==null||(y=y.a)==null||y.unfix(),(o??=new Set).delete(c))),(c.f&Qd)!==0){if(c.f^=Qd,c!==p){var b=m?m.next:p;c===e.effect.last&&(e.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),fg(e,m,c),fg(e,c,b),dg(c,b,n),h=[],g=[],p=lg((m=c).next);continue}dg(c,null,n)}if(c!==p){if(a!==void 0&&a.has(c)){if(h.length<g.length){var x,S=g[0];m=S.prev;var C=h[0],w=h[h.length-1];for(x=0;x<h.length;x+=1)dg(h[x],S,n);for(x=0;x<g.length;x+=1)a.delete(g[x]);fg(e,C.prev,w.next),fg(e,m,C),fg(e,w,S),p=S,m=w,--l,h=[],g=[]}else a.delete(c),dg(c,p,n),fg(e,c.prev,c.next),fg(e,c,m===null?e.effect.first:m.next),fg(e,m,c),m=c;continue}for(h=[],g=[];p!==null&&p!==c;)(a??=new Set).add(p),g.push(p),p=lg(p.next);if(p===null)continue}(c.f&Qd)===0&&h.push(c),m=c,p=lg(c.next)}if(e.outrogroups!==null){for(var T of e.outrogroups){var E;T.pending.size===0&&(sg(e,wd(T.done)),(E=e.outrogroups)==null||E.delete(T))}e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||a!==void 0){var ee=[];if(a!==void 0)for(c of a)(c.f&Gd)===0&&ee.push(c);for(;p!==null;)(p.f&Gd)===0&&p!==e.fallback&&ee.push(p),p=lg(p.next);var te=ee.length;if(te>0){var ne=4&r&&d===0?n:null;if(u){for(l=0;l<te;l+=1){var re;(re=ee[l].nodes)==null||(re=re.a)==null||re.measure()}for(l=0;l<te;l+=1){var ie;(ie=ee[l].nodes)==null||(ie=ie.a)==null||ie.fix()}}(function(e,t,n){for(var r,i=t.length,a=t.length,o=function(){var n=t[s];Um(n,()=>{if(r){if(r.pending.delete(n),r.done.add(n),r.pending.size===0){var t=e.outrogroups;sg(e,wd(r.done)),t.delete(r),t.size===0&&(e.outrogroups=null)}}else--a},!1)},s=0;s<i;s++)o();if(a===0){var c=n!==null;if(c){var l=n,u=l.parentNode;u.textContent=``,u.append(l),e.items.clear()}sg(e,t,!c)}else r={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(r)})(e,ee,ne)}}u&&Ef(()=>{if(o!==void 0)for(c of o){var e;(e=c.nodes)==null||(e=e.a)==null||e.apply()}})}(m,c,o,t,r),l!==null&&(c.length===0?(l.f&Qd)===0?Gm(l):(l.f^=Qd,dg(l,null,o)):Um(l,()=>{l=null})))}var m={effect:Fm(()=>{for(var e=(c=G(u)).length,m=new Set,h=vp,g=0;g<e;g+=1){var _=c[g],v=r(_,g),y=f?null:s.get(v);y?(y.v&&mm(y.v,_),y.i&&mm(y.i,g)):(y=ug(s,f?o:rg??=xm(),_,v,g,i,t,n),f||(y.e.f|=Qd),s.set(v,y)),m.add(v)}(e===0&&a&&!l&&(f?l=Lm(()=>a(o)):(l=Lm(()=>a(rg??=xm()))).f|=Qd),e>m.size&&function(){throw Error(`https://svelte.dev/e/each_key_duplicate`)}(),f)||(d.set(h,m),p(h)),G(u)}),items:s,pending:d,outrogroups:null,fallback:l};f=!1}function lg(e){for(;e!==null&&(e.f&zd)===0;)e=e.next;return e}function ug(e,t,n,r,i,a,o,s){var c=1&o?16&o?dm(n):z(n,!1,!1):null,l=2&o?dm(i):null;return{v:c,i:l,e:Lm(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function dg(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Qd)===0?t.nodes.start:n;r!==null;){var o=Cm(r);if(a.before(r),r===i)return;r=o}}function fg(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function pg(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=arguments.length>4&&arguments[4]!==void 0&&arguments[4],a=e,o=``;if(n)var s=e;W(()=>{var e=eh;if(o!==(o=t()??``)){if(n)return e.nodes=null,s.innerHTML=o,void(o!==``&&Mh(Sm(s),s.lastChild));if(e.nodes!==null&&(Vm(e.nodes.start,e.nodes.end),e.nodes=null),o!==``){var c=Tm(r?`svg`:i?`math`:`template`,r?`http://www.w3.org/2000/svg`:i?`http://www.w3.org/1998/Math/MathML`:void 0);c.innerHTML=o;var l=r||i?c:c.content;if(Mh(Sm(l),l.lastChild),r||i)for(;Sm(l);)a.before(Sm(l));else a.before(l)}}})}function mg(e,t,n,r,i){var a=t.$$slots?.[n],o=!1;!0===a&&(a=t[n==="default"?`children`:n],o=!0),a===void 0?i!==null&&i(e):a(e,o?()=>r:r)}function hg(e,t,n){var r=new Zh(e);Fm(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},Yd)}function gg(e,t,n){Mm(()=>{var r=K(()=>t(e,n?.())||{});if(n&&r!=null&&r.update){var i=!1,a={};Pm(()=>{var e=n();q(e),i&&hf(a,e)&&(a=e,r.update(e))}),i=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function _g(e,t){var n,r=void 0;Im(()=>{r!==(r=t())&&(n&&=(Bm(n),null),r&&(n=Lm(()=>{Mm(()=>r(e))})))})}function vg(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=vg(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function yg(e){return typeof e==`object`?function(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=vg(e))&&(r&&(r+=` `),r+=t);return r}(e):e??``}var bg=[...` 	
\r\f\xA0\v﻿`];function xg(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?` !important;`:`;`,n=``;for(var r of Object.keys(e)){var i=e[r];i!=null&&i!==``&&(n+=` `+r+`: `+i+t)}return n}function Sg(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Cg(e,t,n,r,i,a){var o=e[sf];if(o!==n||o===void 0){var s=function(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;o!==0&&!bg.includes(r[o-1])||s!==r.length&&!bg.includes(r[s])?o=s:r=(o===0?``:r.substring(0,o))+r.substring(s+1)}}return r===``?null:r}(n,r,a);s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s),e[sf]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];i!=null&&l===!!i[c]||e.classList.toggle(c,l)}return a}function wg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Tg(e,t,n,r){if(e[cf]!==t){var i=function(e,t){if(t){var n,r,i=``;if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];n&&c.push(...Object.keys(n).map(Sg)),r&&c.push(...Object.keys(r).map(Sg));for(var l=0,u=-1,d=e.length,f=0;f<d;f++){var p=e[f];if(s?p===`/`&&e[f-1]===`*`&&(s=!1):a?a===p&&(a=!1):p===`/`&&e[f+1]===`*`?s=!0:p===`"`||p===`'`?a=p:p===`(`?o++:p===`)`&&o--,!s&&!1===a&&o===0){if(p===`:`&&u===-1)u=f;else if(p===`;`||f===d-1){if(u!==-1){var m=Sg(e.substring(l,u).trim());c.includes(m)||(p!==`;`&&f++,i+=` `+e.substring(l,f).trim()+`;`)}l=f+1,u=-1}}}}return n&&(i+=xg(n)),r&&(i+=xg(r,!0)),(i=i.trim())===``?null:i}return e==null?null:String(e)}(t,r);i==null?e.removeAttribute(`style`):e.style.cssText=i,e[cf]=t}else r&&(Array.isArray(r)?(wg(e,n?.[0],r[0]),wg(e,n?.[1],r[1],`important`)):wg(e,n,r));return r}function Eg(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!xd(t))return void console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);for(var r of e.options)r.selected=t.includes(Og(r))}else{for(r of e.options)if(bm(Og(r),t))return void(r.selected=!0);n&&t===void 0||(e.selectedIndex=-1)}}function Dg(e){var t=new MutationObserver(()=>{Eg(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),km(()=>{t.disconnect()})}function Og(e){return`__value`in e?e.__value:e.value}var kg=Symbol(`class`),Ag=Symbol(`style`),jg=Symbol(`is custom element`),Mg=Symbol(`is html`),Ng=ff?`input`:`INPUT`,Pg=ff?`option`:`OPTION`,Fg=ff?`select`:`SELECT`,Ig=ff?`progress`:`PROGRESS`;function Lg(e,t){var n=Vg(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===Ig)&&(e.value=t??``)}function Rg(e,t,n,r){var i=Vg(e);i[t]!==(i[t]=n)&&(t===`loading`&&(e[af]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Ug(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zg(e,t,n,r){var i=Vg(e),a=i[jg],o=!i[Mg],s=t||{},c=e.nodeName===Pg;for(var l in t)l in n||(n[l]=null);(n.class?n.class=yg(n.class):(r||n[kg])&&(n.class=null),n[Ag])&&(n.style??=null);var u=Ug(e);if(e.nodeName===Ng&&`type`in n&&(`value`in n||`__value`in n)){var d=n.type;(d!==s.type||d===void 0&&e.hasAttribute(`type`))&&(s.type=d,Rg(e,`type`,d))}var f,p,m,h,g,_,v=function(l){var d=n[l];if(c&&l===`value`&&d==null)return e.value=e.__value=``,s[l]=d,0;if(l===`class`)return f=e.namespaceURI===`http://www.w3.org/1999/xhtml`,Cg(e,f,d,r,t?.[kg],n[kg]),s[l]=d,s[kg]=n[kg],0;if(l===`style`)return Tg(e,d,t?.[Ag],n[Ag]),s[l]=d,s[Ag]=n[Ag],0;if(d===(p=s[l])&&(d!==void 0||!e.hasAttribute(l))||(s[l]=d,(m=l[0]+l[1])===`$$`))return 0;if(m===`on`){var v={},y=`$$`+l,b=l.slice(2);if(h=function(e){return Ih.includes(e)}(b),function(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}(b)&&(b=b.slice(0,-7),v.capture=!0),!h&&p){if(d!=null)return 0;e.removeEventListener(b,s[y],v),s[y]=null}if(h)Dh(b,e,d),Oh([b]);else if(d!=null){function t(e){s[l].call(this,e)}s[y]=Eh(b,e,t,v)}}else if(l===`style`)Rg(e,l,d);else if(l===`autofocus`)(function(e,t){if(t){var n=document.body;e.autofocus=!0,Ef(()=>{document.activeElement===n&&e.focus()})}})(e,!!d);else if(a||l!==`__value`&&(l!==`value`||d==null))if(l===`selected`&&c)(function(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)})(e,d);else if(g=l,o||(g=function(e){return e=e.toLowerCase(),Lh[e]??e}(g)),_=g===`defaultValue`||g===`defaultChecked`,d!=null||a||_)_||u.includes(g)&&(a||typeof d!=`string`)?(e[g]=d,g in i&&(i[g]=yd)):typeof d!=`function`&&Rg(e,g,d);else if(i[l]=null,g===`value`||g===`checked`){var x=e,S=t===void 0;if(g===`value`){var C=x.defaultValue;x.removeAttribute(g),x.defaultValue=C,x.value=x.__value=S?C:null}else{var w=x.defaultChecked;x.removeAttribute(g),x.defaultChecked=w,x.checked=!!S&&w}}else e.removeAttribute(l);else e.value=e.__value=d};for(var y in n)v(y);return s}function Bg(e,t){var n=arguments.length>5?arguments[5]:void 0,r=arguments.length>6&&arguments[6]!==void 0&&arguments[6],i=arguments.length>7&&arguments[7]!==void 0&&arguments[7];cp(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var o=void 0,s={},c=e.nodeName===Fg,l=!1;if(Im(()=>{var u=t(...a.map(G)),d=zg(e,o,u,n,r,i);for(var f of(l&&c&&`value`in u&&Eg(e,u.value),Object.getOwnPropertySymbols(s)))u[f]||Bm(s[f]);for(var p of Object.getOwnPropertySymbols(u)){var m=u[p];p.description!==`@attach`||o&&m===o[p]||(s[p]&&Bm(s[p]),s[p]=Lm(()=>_g(e,()=>m))),d[p]=m}o=d}),c){var u=e;Mm(()=>{Eg(u,o.value,!0),Dg(u)})}l=!0})}function Vg(e){return e[of]??(e[of]={[jg]:e.nodeName.includes(`-`),[Mg]:e.namespaceURI===bd})}var Hg=new Map;function Ug(e){var t,n=e.getAttribute(`is`)||e.nodeName,r=Hg.get(n);if(r)return r;Hg.set(n,r=[]);for(var i=e,a=Element.prototype;a!==i;){for(var o in t=Dd(i))t[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&r.push(o);i=Ad(i)}return r}function Wg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,r=new WeakSet;Rf(e,`input`,function(){var i=id(function*(i){var a=i?e.defaultValue:e.value;if(a=Gg(e)?Kg(a):a,n(a),vp!==null&&r.add(vp),yield vh(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}});return function(e){return i.apply(this,arguments)}}()),K(t)==null&&e.value&&(n(Gg(e)?Kg(e.value):e.value),vp!==null&&r.add(vp)),Pm(()=>{var n=t();if(e===document.activeElement){var i=vp;if(r.has(i))return}Gg(e)&&n===Kg(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function Gg(e){var t=e.type;return t===`number`||t===`range`}function Kg(e){return e===``?null:+e}function qg(e,t,n){var r=Ed(e,t);r&&r.set&&(e[t]=n,km(()=>{e[t]=null}))}function Jg(e,t){return e===t||e?.[nf]===t}function Yg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=_f.r,i=eh;return Mm(()=>{var a,o;return Pm(()=>{a=o,o=[],K(()=>{Jg(n(...o),e)||(t(e,...o),a&&Jg(n(...a),e)&&t(null,...a))})}),()=>{for(var a=i;a!==r&&a.parent!==null&&a.parent.f&Jd;)a=a.parent;var s=a.teardown;a.teardown=()=>{o&&Jg(n(...o),e)&&t(null,...o),s?.()}}}),e}function Xg(e){return function(){var t=[...arguments];return t[0].stopPropagation(),e?.apply(this,t)}}function Zg(e){return function(){var t=[...arguments];return t[0].preventDefault(),e?.apply(this,t)}}function Qg(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=_f,n=t.l.u;if(n){var r,i=()=>q(t.s);if(e){var a=0,o={},s=dp(()=>{var e=!1,n=t.s;for(var r in n)n[r]!==o[r]&&(o[r]=n[r],e=!0);return e&&a++,a});i=()=>G(s)}n.b.length&&(r=()=>{$g(t,i),Fd(n.b)},Em(),Dm(1048584,r)),Am(()=>{var e=K(()=>n.m.map(Pd));return()=>{for(var t of e)typeof t==`function`&&t()}}),n.a.length&&Am(()=>{$g(t,i),Fd(n.a)})}}function $g(e,t){if(e.l.s)for(var n of e.l.s)G(n);t()}function e_(e){var t=dm(0);return function(){return arguments.length===1?(B(t,G(t)+1),arguments[0]):(G(t),e())}}function t_(e,t){var n=e.$$events?.[t.type];for(var r of xd(n)?n.slice():n==null?[]:[n])r.call(this,t)}var n_={get(e,t){if(!e.exclude.includes(t))return G(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=eh;try{th(e.parent_effect),e.special[t]=Q({get[t](){return e.props[t]}},t,4)}finally{th(r)}}return e.special[t](n),hm(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),hm(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function r_(e,t){return new Proxy({props:e,exclude:t,special:{},version:dm(0),parent_effect:eh},n_)}var i_={get(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(Md(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){for(var r=e.props.length;r--;){var i=e.props[r];Md(i)&&(i=i());var a=Ed(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(Md(r)&&(r=r()),typeof r==`object`&&r&&t in r){var i=Ed(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===nf||t===rf)return!1;for(var n of e.props)if(Md(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){var t=[];for(var n of e.props)if(Md(n)&&(n=n()),n){for(var r in n)t.includes(r)||t.push(r);for(var i of Object.getOwnPropertySymbols(n))t.includes(i)||t.push(i)}return t}};function a_(){return new Proxy({props:[...arguments]},i_)}function Q(e,t,n,r){var i,a,o=!vd||!!(2&n),s=!!(8&n),c=!!(16&n),l=r,u=!0,d=void 0,f=()=>c&&o?(d??=dp(r),G(d)):(u&&(u=!1,l=c?K(r):r),l);if(s){var p=nf in e||rf in e;i=Ed(e,t)?.set??(p&&t in e?n=>e[t]=n:void 0)}var m,h=!1;if(s){var g=ad(function(e){var t=Ff;try{return Ff=!1,[e(),Ff]}finally{Ff=t}}(()=>e[t]),2);a=g[0],h=g[1]}else a=e[t];if(a===void 0&&r!==void 0&&(a=f(),i&&(o&&function(){throw Error(`https://svelte.dev/e/props_invalid_value`)}(),i(a))),m=o?()=>{var n=e[t];return n===void 0?f():(u=!0,n)}:()=>{var n=e[t];return n!==void 0&&(l=void 0),n===void 0?l:n},o&&!(4&n))return m;if(i){var _=e.$$legacy;return function(e,t){return arguments.length>0?(o&&t&&!_&&!h||i(t?m():e),e):m()}}var v=!1,y=(1&n?dp:R)(()=>(v=!1,m()));s&&G(y);var b=eh;return function(e,t){if(arguments.length>0){var n=t?G(y):o&&s?vm(e):e;return B(y,n),v=!0,l!==void 0&&(l=n),e}return Ym&&v||(b.f&Kd)!==0?y.v:G(y)}}function o_(e){if(!(arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(e){var t=function(e){try{if(typeof window<`u`&&window.localStorage!==void 0)return window.localStorage[e]}catch{}}(`debug`);return t!=null&&t.endsWith(`*`)?e.startsWith(t.slice(0,-1)):e===t}(e)))return s_;var t=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return c_[Math.abs(t)%c_.length]}(e);return function(){var n=[...arguments];console.log(`%c${e}`,`color:${t}`,...n)}}function s_(){}var c_=[`#0000CC`,`#0099FF`,`#009400`,`#8dd200`,`#CCCC00`,`#CC9933`,`#ae04e7`,`#ff35d7`,`#FF3333`,`#FF6600`,`#FF9933`,`#FFCC33`],l_=0;function u_(){return++l_}function d_(e){return parseInt(e,10)}function f_(e){return p_.test(e)}var p_=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function m_(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function h_(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`||e.constructor.name===`Array`)}function g_(e){return!0===e||!1===e}function __(e){if(typeof e==`number`)return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e==`bigint`)return __(Number(e));try{var t=e&&e.valueOf();if(t!==e)return __(t)}catch{return!1}return!1}function v_(e){(y_||=window.document.createElement(`div`)).style.color=``,y_.style.color=e;var t=y_.style.color;return t===``?void 0:t.replace(/\s+/g,``).toLowerCase()}var y_=void 0;function b_(e){return typeof e==`string`&&e.length<99&&!!v_(e)}function x_(e,t){if(typeof e==`number`||typeof e==`string`||typeof e==`boolean`||e===void 0)return typeof e;if(typeof e==`bigint`)return`number`;if(e===null)return`null`;if(Array.isArray(e))return`array`;if(m_(e))return`object`;var n=t.stringify(e);return n&&f_(n)?`number`:n===`true`||n===`false`?`boolean`:n===`null`?`null`:`unknown`}var S_=/^https?:\/\/\S+$/;function C_(e){return typeof e==`string`&&S_.test(e)}function w_(e,t){if(e===``)return``;var n=e.trim();return n===`null`?null:n===`true`||n!==`false`&&(f_(n)?t.parse(n):e)}var T_=[];function E_(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function D_(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw TypeError(`Array expected`);function r(e,i){(!Array.isArray(e)&&!m_(e)||t&&i.length>0)&&(n[Ot(i)]=!0),m_(e)&&Object.keys(e).forEach(t=>{r(e[t],i.concat(t))})}for(var i=Math.min(e.length,1e4),a=0;a<i;a++)r(e[a],T_);return Object.keys(n).sort().map(Dt)}function O_(e,t,n){if(!(t<=e))for(var r=e;r<t;r++)n(r)}function k_(e,t){return e.length>t?e.slice(0,t):e}function A_(e){return I({},e)}function j_(e){return Object.values(e)}function M_(e,t,n,r){var i=e.slice(0),a=i.splice(t,n);return i.splice.apply(i,[t+r,0,...a]),i}function N_(e,t,n){return e.slice(0,t).concat(n).concat(e.slice(t))}function P_(e,t){try{return t.parse(e)}catch{return t.parse(Hn(e))}}function F_(e,t){try{return P_(e,t)}catch{return}}function I_(e,t){e=e.replace(R_,``);try{return t(e)}catch{}try{return t(`{`+e+`}`)}catch{}try{return t(`[`+e+`]`)}catch{}throw Error(`Failed to parse partial JSON`)}function L_(e){e=e.replace(R_,``);try{return Hn(e)}catch{}try{var t=Hn(`[`+e+`]`);return t.substring(1,t.length-1)}catch{}try{var n=Hn(`{`+e+`}`);return n.substring(1,n.length-1)}catch{}throw Error(`Failed to repair partial JSON`)}var R_=/,\s*$/;function z_(e,t){var n=Y_.exec(t);if(n){var r=d_(n[2]),i=function(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.length,i=0,a=n;a<r;a++)e.charAt(a)===t&&i++;return i}(e,`
`,0,r),a=r-e.lastIndexOf(`
`,r)-1;return{position:r,line:i,column:a,message:t.replace(Y_,()=>`line ${i+1} column ${a+1}`)}}var o=X_.exec(t),s=o?d_(o[1]):void 0,c=s===void 0?void 0:s-1,l=Z_.exec(t),u=l?d_(l[1]):void 0,d=u===void 0?void 0:u-1;return{position:c!==void 0&&d!==void 0?function(e,t,n){for(var r=e.indexOf(`
`),i=1;i<t&&r!==-1;)r=e.indexOf(`
`,r+1),i++;return r===-1?void 0:r+n+1}(e,c,d):void 0,line:c,column:d,message:t.replace(/^JSON.parse: /,``).replace(/ of the JSON data$/,``)}}function B_(e,t){try{var n=Lc.parse(e),r=Ot(t),i=n.pointers[r];if(i)return{path:t,line:i.key?i.key.line:i.value?i.value.line:0,column:i.key?i.key.column:i.value?i.value.column:0,from:i.key?i.key.pos:i.value?i.value.pos:0,to:i.keyEnd?i.keyEnd.pos:i.valueEnd?i.valueEnd.pos:0}}catch(e){console.error(e)}return{path:t,line:0,column:0,from:0,to:0}}function V_(e){return m_(e)?e.json===void 0?e.text===void 0?`Content must contain either a property "json" or a property "text"`:typeof e.text==`string`?void 0:`Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?`:e.text===void 0?void 0:`Content must contain either a property "json" or a property "text" but not both`:`Content must be an object`}function H_(e){return m_(e)&&typeof e.text==`string`}function U_(e){return m_(e)&&e.json!==void 0}function W_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return H_(e)?e:{text:n.stringify(e.json,null,t)}}function G_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return U_(e)?e:{json:t.parse(e.text)}}function K_(e,t,n){return W_(e,t,n).text}function q_(e,t){return J_(e,t)>t}function J_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(H_(e))return e.text.length;var n=e.json,r=0;return function e(n){if(Array.isArray(n)){if((r+=n.length-1+2)>t)return;for(var i=0;i<n.length;i++)if(e(n[i]),r>t)return}else if(m_(n)){var a=Object.keys(n);r+=2+a.length+(a.length-1);for(var o=0;o<a.length;o++){var s=a[o],c=n[s];r+=s.length+2,e(c)}}else r+=typeof n==`string`?n.length+2:String(n).length}(n),r}var Y_=/(position|char) (\d+)/,X_=/line (\d+)/,Z_=/column (\d+)/;function Q_(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function $_(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&sv.test(t)}var ev,tv,nv,rv,iv,av,ov,sv=/[,:]\S/;function cv(e){var t=e.escapeControlCharacters,n=e.escapeUnicodeCharacters;return t?n?lv:uv:n?dv:fv}(function(e){e.text=`text`,e.tree=`tree`,e.table=`table`})(ev||={}),function(e){e.after=`after`,e.inside=`inside`,e.key=`key`,e.value=`value`,e.multi=`multi`,e.text=`text`}(tv||={}),function(e){e.after=`after`,e.key=`key`,e.value=`value`,e.inside=`inside`}(nv||={}),function(e){e.info=`info`,e.warning=`warning`,e.error=`error`}(rv||={}),function(e){e.key=`key`,e.value=`value`}(iv||={}),function(e){e.asc=`asc`,e.desc=`desc`}(av||={}),function(e){e.no=`no`,e.self=`self`,e.nextInside=`nextInside`}(ov||={});var lv={escapeValue:e=>pv(_v(String(e))),unescapeValue:e=>vv(mv(e))},uv={escapeValue:e=>_v(String(e)),unescapeValue:e=>vv(e)},dv={escapeValue:e=>pv(String(e)),unescapeValue:e=>mv(e)},fv={escapeValue:e=>String(e),unescapeValue:e=>e};function pv(e){return e.replace(/[^\x20-\x7F]/g,e=>e===`\b`||e===`\f`||e===`
`||e===`\r`||e===`	`?e:`\\u`+(`000`+e.codePointAt(0)?.toString(16)).slice(-4))}function mv(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,e=>{try{var t=JSON.parse(`"`+e+`"`);return hv[t]||t}catch{return e}})}var hv={'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},gv={'\\"':`"`,"\\\\":`\\`,"\\/":`/`,"\\b":`\b`,"\\f":`\f`,"\\n":`
`,"\\r":`\r`,"\\t":`	`};function _v(e){return e.replace(/["\b\f\n\r\t\\]/g,e=>hv[e]||e)}function vv(e){return e.replace(/\\["bfnrt\\]/g,e=>gv[e]||e)}function yv(e){return typeof e==`string`?e.endsWith(`
`)?e+`
`:e:String(e)}function bv(e,t){return Sv(e,e=>e.nodeName.toUpperCase()===t.toUpperCase())}function xv(e,t,n){return Sv(e,e=>function(e,t,n){return typeof e.getAttribute==`function`&&e.getAttribute(t)===n}(e,t,n))}function Sv(e,t){return!!Cv(e,t)}function Cv(e,t){for(var n=e;n&&!t(n);)n=n.parentNode;return n}function wv(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)??void 0}function Tv(e){var t=wv(e)?.document.activeElement;return!!t&&Sv(t,t=>t===e)}function Ev(e,t){return Cv(e,e=>e.nodeName===t)}function Dv(e){return xv(e,`data-type`,`selectable-key`)?tv.key:xv(e,`data-type`,`selectable-value`)?tv.value:xv(e,`data-type`,`insert-selection-area-inside`)?tv.inside:xv(e,`data-type`,`insert-selection-area-after`)?tv.after:tv.multi}function Ov(e){return encodeURIComponent(Ot(e))}function kv(e){var t=Cv(e,e=>!(e==null||!e.hasAttribute)&&e.hasAttribute(`data-path`))?.getAttribute(`data-path`)??void 0;return t?Dt(decodeURIComponent(t)):void 0}function Av(e){var t=e.allElements,n=e.currentElement,r=e.direction,i=e.hasPrio,a=i===void 0?()=>!0:i,o=e.margin,s=o===void 0?10:o,c=sc(t.filter(function(e){var t=e.getBoundingClientRect();return t.width>0&&t.height>0}),u),l=u(n);function u(e){var t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2,rect:t,element:e}}function d(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e.x-t.x,i=(e.y-t.y)*n;return Math.sqrt(r*r+i*i)}var f=e=>d(e,l);if(r===`Left`||r===`Right`){var p=r===`Left`?c.filter(e=>{return t=l,e.rect.left+s<t.rect.left;var t}):c.filter(e=>{return t=l,e.rect.right>t.rect.right+s;var t});return(yc(p.filter(e=>{return t=e,n=l,Math.abs(t.y-n.y)<s;var t,n}),f)||yc(p,e=>d(e,l,10)))?.element}if(r===`Up`||r===`Down`){var m=r===`Up`?c.filter(e=>{return t=l,e.y+s<t.y;var t}):c.filter(e=>{return t=l,e.y>t.y+s;var t});return(yc(m.filter(e=>a(e.element)),f)||yc(m,f))?.element}}function jv(){var e,t,n;return typeof navigator<`u`&&(e=((t=navigator)==null||(t=t.platform)==null?void 0:t.toUpperCase().includes(`MAC`))??((n=navigator)==null||(n=n.userAgentData)==null||(n=n.platform)==null?void 0:n.toUpperCase().includes(`MAC`)))!=null&&e}function Mv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`+`,n=[];Nv(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:jv)&&n.push(`Ctrl`),e.altKey&&n.push(`Alt`),e.shiftKey&&n.push(`Shift`);var r=e.key.length===1?e.key.toUpperCase():e.key;return r in Pv||n.push(r),n.join(t)}function Nv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:jv;return e.ctrlKey||e.metaKey&&t()}var Pv={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function Fv(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Fv(`.jse-absolute-popup.svelte-enkkpn {
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
}`);var Iv=Y(`<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>`),Lv=Y(`<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>`);function Rv(e,t){bf(t,!1);var n=Q(t,`popup`,8),r=Q(t,`closeAbsolutePopup`,8),i=z(),a=z();function o(e){n().options&&n().options.closeOnOuterClick&&!Sv(e.target,e=>e===G(i))&&r()(n().id)}function s(e){Mv(e)===`Escape`&&(e.preventDefault(),e.stopPropagation(),r()(n().id))}Qh(function(){G(a)&&G(a).focus({preventScroll:!0})}),Qg();var c=Lv();J(`mousedown`,im,function(e){o(e)},!0),J(`keydown`,im,s,!0),J(`wheel`,im,function(e){o(e)},!0);var l=V(c),u=e=>{var t=Iv(),r=V(t);Yg(r,e=>B(a,e),()=>G(a)),hg(H(r,2),()=>n().component,(e,t)=>{t(e,a_(()=>n().props))}),W(e=>Tg(t,e),[()=>(G(i),q(n()),K(()=>function(e,t){var n=e.getBoundingClientRect(),r=function(){if(t.anchor){var e=t.anchor,n=t.width,r=n===void 0?0:n,i=t.height,a=i===void 0?0:i,o=t.offsetTop,s=o===void 0?0:o,c=t.offsetLeft,l=c===void 0?0:c,u=t.position,d=e.getBoundingClientRect(),f=d.left,p=d.top,m=d.bottom,h=d.right,g=u===`top`||p+a>window.innerHeight&&p>a,_=u===`left`||f+r>window.innerWidth&&f>r;return{left:_?h-l:f+l,top:g?p-s:m+s,positionAbove:g,positionLeft:_}}if(typeof t.left==`number`&&typeof t.top==`number`){var v=t.left,y=t.top,b=t.width,x=b===void 0?0:b,S=t.height,C=S===void 0?0:S;return{left:v,top:y,positionAbove:y+C>window.innerHeight&&y>C,positionLeft:v+x>window.innerWidth&&v>x}}throw Error(`Invalid config: pass either "left" and "top", or pass "anchor"`)}(),i=r.left,a=r.top,o=r.positionAbove,s=r.positionLeft;return(o?`bottom: ${n.top-a}px;`:`top: ${a-n.top}px;`)+(s?`right: ${n.left-i}px;`:`left: ${i-n.left}px;`)}(G(i),n().options)))]),X(e,t)};Z(l,e=>{G(i)&&e(u)}),Yg(c,e=>B(i,e),()=>G(i)),J(`mousedown`,c,function(e){e.stopPropagation()}),J(`keydown`,c,s),X(e,c),xf()}var zv=Y(`<!> <!>`,1);function Bv(e,t){bf(t,!1);var n=o_(`jsoneditor:AbsolutePopup`),r=z([],!0);function i(e){var t=G(r).findIndex(t=>t.id===e);if(t!==-1){var n=G(r)[t];n.options.onClose&&n.options.onClose(),B(r,G(r).filter(t=>t.id!==e))}}(function(e,t){Cf().set(e,t)})(`absolute-popup`,{openAbsolutePopup:function(e,t,i){n(`open...`,t,i);var a={id:u_(),component:e,props:t||{},options:i||{}};return B(r,[...G(r),a]),a.id},closeAbsolutePopup:i}),U(()=>G(r),()=>{n(`popups`,G(r))}),Nm(),Qg(!0);var a=zv(),o=wm(a);cg(o,1,()=>G(r),og,(e,t)=>{Rv(e,{get popup(){return G(t)},closeAbsolutePopup:i})}),mg(H(o,2),t,`default`,{},null),X(e,a),xf()}function Vv(e,t){for(var n=new Set(t),r=e.replace(/ \(copy( \d+)?\)$/,``),i=e,a=1;n.has(i);)i=`${r} (${`copy`+(a>1?` `+a:``)})`,a++;return i}function Hv(e,t){var n=t-3;return e.length>t?e.substring(0,n)+`...`:e}function Uv(e){if(e===``)return``;var t=e.toLowerCase();if(t===`null`)return null;if(t===`true`)return!0;if(t===`false`)return!1;if(t!==`undefined`){var n=Number(e);return isNaN(n)||isNaN(parseFloat(e))?e:n}}var Wv={id:`jsonquery`,name:`JSONQuery`,description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var n=t.filter,r=t.sort,i=t.projection,a=[];n&&n.path&&n.relation&&n.value&&a.push([`filter`,[(o=n.relation,gl(`1 ${o} 1`)[0]),Gv(n.path),Uv(n.value)]]);var o;return r&&r.path&&r.direction&&a.push([`sort`,Gv(r.path),r.direction===`desc`?`desc`:`asc`]),i&&i.paths&&(i.paths.length>1?a.push([`pick`,...i.paths.map(Gv)]):a.push([`map`,Gv(i.paths[0])])),yl([`pipe`,...a])},executeQuery:function(e,t,n){var r=Q_(n,JSON)?e:function(e){var t=n.stringify(e);return t===void 0?void 0:JSON.parse(t)}(e);return t.trim()===``?r:bl(r,t)}};function Gv(e){return[`get`,...e]}var Kv=Nh(`<g></g>`);function qv(e,t){bf(t,!1);var n=870711,r=z(``),i=Q(t,`data`,8);function a(e){if(!e||!e.raw)return``;var t=e.raw,r={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(e,t)=>{var i=`fa-${(n+=1).toString(16)}`;return r[t]=i,` id="${i}"`}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(e,t,n,i)=>{var a=t||i;return a&&r[a]?`#${r[a]}`:e}),t}U(()=>q(i()),()=>{B(r,a(i()))}),Nm();var o=Kv();pg(o,()=>G(r),!0),X(e,o),xf()}Fv(`
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
`);var Jv=Nh(`<svg><!></svg>`),Yv=Nh(`<path></path>`),Xv=Nh(`<polygon></polygon>`),Zv=Nh(`<!><!><!>`,1);function Qv(e,t){var n=r_(r_(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`data`,`scale`,`spin`,`inverse`,`pulse`,`flip`,`label`,`style`]);bf(t,!1);var r=Q(t,`class`,8,``),i=Q(t,`data`,8),a=z(),o=Q(t,`scale`,8,1),s=Q(t,`spin`,8,!1),c=Q(t,`inverse`,8,!1),l=Q(t,`pulse`,8,!1),u=Q(t,`flip`,8,void 0),d=Q(t,`label`,8,``),f=Q(t,`style`,8,``),p=z(10),m=z(10),h=z(),g=z();function _(){var e=1;return o()!==void 0&&(e=Number(o())),isNaN(e)||e<=0?(console.warn(`Invalid prop: prop "scale" should be a number over 0.`),1):1*e}function v(){return G(a)?Math.max(G(a).width,G(a).height)/16:1}U(()=>(q(i()),q(f()),q(o())),()=>{B(a,function(e){var t;if(e){if(!(`definition`in e)){if(`iconName`in e&&`icon`in e){e.iconName;var n=ad(e.icon,5),r=n[0],i=n[1],a=n[4];t={width:r,height:i,paths:(Array.isArray(a)?a:[a]).map(e=>({d:e}))}}else t=e[Object.keys(e)[0]];return t}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(i())),f(),o(),B(p,G(a)?G(a).width/v()*_():0),B(m,G(a)?G(a).height/v()*_():0),B(h,function(){var e=``;f()!==null&&(e+=f());var t=_();return t===1?e.length===0?``:e:(e===``||e.endsWith(`;`)||(e+=`; `),`${e}font-size: ${t}em`)}()),B(g,G(a)?`0 0 ${G(a).width} ${G(a).height}`:`0 0 ${G(p)} ${G(m)}`)}),Nm(),Qg(),function(e,t){var n=r_(r_(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`width`,`height`,`box`,`spin`,`inverse`,`pulse`,`flip`,`style`,`label`]),r=Q(t,`class`,8,``),i=Q(t,`width`,8),a=Q(t,`height`,8),o=Q(t,`box`,8,`0 0 0 0`),s=Q(t,`spin`,8,!1),c=Q(t,`inverse`,8,!1),l=Q(t,`pulse`,8,!1),u=Q(t,`flip`,8,`none`),d=Q(t,`style`,8,``),f=Q(t,`label`,8,``),p=Jv();Bg(p,()=>I(I({version:`1.1`,class:`fa-icon ${r()??``}`,width:i(),height:a(),"aria-label":f(),role:f()?`img`:`presentation`,viewBox:o(),style:d()},n),{},{[kg]:{"fa-spin":s(),"fa-pulse":l(),"fa-inverse":c(),"fa-flip-horizontal":u()===`horizontal`,"fa-flip-vertical":u()===`vertical`}}),void 0,void 0,void 0,`svelte-v67cny`),mg(V(p),t,`default`,{},null),X(e,p)}(e,a_({get label(){return d()},get width(){return G(p)},get height(){return G(m)},get box(){return G(g)},get style(){return G(h)},get spin(){return s()},get flip(){return u()},get inverse(){return c()},get pulse(){return l()},get class(){return r()}},()=>n,{children:(e,n)=>{var r=Fh();mg(wm(r),t,`default`,{},e=>{var t=Zv(),n=wm(t);cg(n,1,()=>(G(a),K(()=>G(a)?.paths||[])),og,(e,t)=>{var n=Yv();Bg(n,()=>I({},G(t))),X(e,n)});var r=H(n);cg(r,1,()=>(G(a),K(()=>G(a)?.polygons||[])),og,(e,t)=>{var n=Xv();Bg(n,()=>I({},G(t))),X(e,n)});var i=H(r),o=e=>{qv(e,{get data(){return G(a)},set data(e){B(a,e)},$$legacy:!0})};Z(i,e=>{G(a),K(()=>G(a)?.raw)&&e(o)}),X(e,t)}),X(e,r)},$$slots:{default:!0}})),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var $v=Y(`<div role="checkbox" tabindex="-1"><!></div>`);function ey(e,t){bf(t,!1);var n=Q(t,`path`,9),r=Q(t,`value`,9),i=Q(t,`readOnly`,9),a=Q(t,`onPatch`,9),o=Q(t,`focus`,9);Qg(!0);var s,c=$v(),l=V(c),u=R(()=>!0===r()?Sl:wl);Qv(l,{get data(){return G(u)}}),W(()=>{Rg(c,`aria-checked`,!0===r()),s=Cg(c,1,`jse-boolean-toggle svelte-eli4ob`,null,s,{"jse-readonly":i()}),Rg(c,`title`,i()?`Boolean value ${r()}`:`Click to toggle this boolean value`)}),J(`mousedown`,c,function(e){e.stopPropagation(),i()||(a()([{op:`replace`,path:Ot(n()),value:!r()}]),o()())}),X(e,c),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var ty=Y(`<div class="jse-color-picker-popup svelte-v77py2"></div>`);function ny(e,t){bf(t,!1);var n=Q(t,`color`,8),r=Q(t,`onChange`,8),i=Q(t,`showOnTop`,8),a=z(),o=()=>{};Qh(id(function*(){var e=new((yield _(()=>import(`./vanilla-picker-CS30WHK1.js`),[]))?.default)({parent:G(a),color:n(),popup:i()?`top`:`bottom`,onDone(e){var t=e.rgba[3]===1?e.hex.substring(0,7):e.hex;r()(t)}});e.show(),o=()=>{e.destroy()}})),$h(()=>{o()}),Qg();var s=ty();Yg(s,e=>B(a,e),()=>G(a)),X(e,s),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var ry=Y(`<button type="button"></button>`);function iy(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=yf(`absolute-popup`).openAbsolutePopup,a=Q(t,`path`,9),o=Q(t,`value`,9),s=Q(t,`readOnly`,9),c=Q(t,`onPatch`,9),l=Q(t,`focus`,9);function u(e){c()([{op:`replace`,path:Ot(a()),value:e}]),d()}function d(){l()()}U(()=>q(o()),()=>{B(n,v_(o()))}),U(()=>(q(s()),q(o())),()=>{B(r,s()?`Color ${o()}`:`Click to open a color picker`)}),Nm(),Qg(!0);var f,p=ry();W(()=>{f=Cg(p,1,`jse-color-picker-button svelte-13mgyo6`,null,f,{"jse-readonly":s()}),Tg(p,`background: ${G(n)??``}`),Rg(p,`title`,G(r)),Rg(p,`aria-label`,G(r))}),J(`click`,p,function(e){if(!s()){var t=e.target,n=t.getBoundingClientRect().top,r=(wv(t)?.innerHeight??0)-n<300&&n>300;i(ny,{color:o(),onChange:u,showOnTop:r},{anchor:t,closeOnOuterClick:!0,onClose:d,offsetTop:18,offsetLeft:-8,height:300})}}),X(e,p),xf()}var ay=1e3,oy=100,sy=100,cy=2e4,ly=[{start:0,end:oy}],uy=1048576,dy=1048576,fy=`Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value`,py=`Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)`,my=`hover-insert-inside`,hy=`hover-insert-after`,gy=`hover-collection`,_y=`valid`,vy=`repairable`,yy=336,by=260,xy=100,Sy={[av.asc]:`ascending`,[av.desc]:`descending`};function Cy(e){for(var t=Ac(e,e=>e.start),n=[t[0]],r=0;r<t.length;r++){var i=n.length-1,a=n[i],o=t[r];o.start<=a.end?n[i]={start:Math.min(a.start,o.start),end:Math.max(a.end,o.end)}:n.push(o)}return n}function wy(e){return Ty(e)+oy}function Ty(e){return Math.floor(e/oy)*oy}function Ey(e){return!!e&&(e.type===`space`||!0===e.space)}function Dy(e){return!!e&&(e.type===`separator`||!0===e.separator)}function Oy(e){return!!e&&e.type===`label`&&typeof e.text==`string`}function ky(e){return!!e&&typeof e.onClick==`function`}function Ay(e){return!!e&&e.type===`dropdown-button`&&ky(e.main)&&Array.isArray(e.items)}function jy(e){return!!e&&e.type===`row`&&Array.isArray(e.items)}function My(e){return!!e&&e.type===`column`&&Array.isArray(e.items)}function Ny(e){return m_(e)&&m_(e.parseError)}function Py(e){return m_(e)&&Array.isArray(e.validationErrors)}function Fy(e){return m_(e)&&Array.isArray(e.path)&&typeof e.message==`string`&&`severity`in e}function Iy(e){return m_(e)&&Fy(e)&&typeof e.isChildError==`boolean`}function Ly(e){return m_(e)&&typeof e.action==`function`&&m_(e.props)}function Ry(e){return e!==void 0&&e.type===`object`}function zy(e){return e!==void 0&&e.type===`array`}function By(e){return e!==void 0&&e.type===`value`}function Vy(e){return Ry(e)||zy(e)}function Hy(e){return e!==void 0&&Array.isArray(e.searchResults)}function Uy(e){return!!e&&e.type===`tree`}function Wy(e){return!!e&&e.type===`text`}function Gy(e){return!!e&&e.type===`mode`}function Ky(e){var t=e.json,n=e.expand,r=function(e){var t=e.json,n=e.factory;return Array.isArray(t)?n.createArrayDocumentState():m_(t)?n.createObjectDocumentState():t===void 0?void 0:n.createValueDocumentState()}({json:t,factory:Yy});return n&&r?tb(t,r,[],n):r}function qy(){return{type:`array`,expanded:(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1}).expanded,visibleSections:ly,items:[]}}function Jy(){return{type:`object`,expanded:(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1}).expanded,properties:{}}}var Yy={createObjectDocumentState:Jy,createArrayDocumentState:qy,createValueDocumentState:function(){return{type:`value`}}};function Xy(e,t,n,r){var i=r.createObjectDocumentState,a=r.createArrayDocumentState,o=r.createValueDocumentState;return function e(t,n,r){if(Array.isArray(t)){var s=zy(n)?n:a();if(r.length===0)return s;var c=d_(r[0]),l=e(t[c],s.items[c],r.slice(1));return xt(s,[`items`,r[0]],l)}if(m_(t)){var u=Ry(n)?n:i();if(r.length===0)return u;var d=r[0],f=e(t[d],u.properties[d],r.slice(1));return xt(u,[`properties`,d],f)}return By(n)?n:o()}(e,t,n)}function Zy(e,t){return Qy(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(e,t)=>{if(e!==void 0&&t!==void 0)return Array.isArray(e)?zy(t)?t:qy({expanded:!!Vy(t)&&t.expanded}):m_(e)?Ry(t)?t:Jy({expanded:!!Vy(t)&&t.expanded}):By(t)?t:void 0},()=>!0)}function Qy(e,t,n,r,i){var a=r(e,t,n);if(Array.isArray(e)&&zy(a)&&i(a)){var o=[];return $y(e,a.visibleSections,t=>{var s=n.concat(String(t)),c=Qy(e[t],a.items[t],s,r,i);c!==void 0&&(o[t]=c)}),E_(o,a.items)?a:I(I({},a),{},{items:o})}if(m_(e)&&Ry(a)&&i(a)){var s={};return Object.keys(e).forEach(t=>{var o=n.concat(t),c=Qy(e[t],a.properties[t],o,r,i);c!==void 0&&(s[t]=c)}),E_(Object.values(s),Object.values(a.properties))?a:I(I({},a),{},{properties:s})}return a}function $y(e,t,n){t.forEach(t=>{var r=t.start,i=t.end;O_(r,Math.min(e.length,i),n)})}function eb(e,t){for(var n=e,r=[],i=0;i<t.length;){if(Array.isArray(n)){var a=t[i];r.push(`items`,a),n=n[d_(a)]}else{if(!m_(n))throw Error(`Cannot convert path: Object or Array expected at index ${i}`);var o=t[i];r.push(`properties`,o),n=n[o]}i++}return r}function tb(e,t,n,r){for(var i=t,a=function(t){var r=n.slice(0,t);i=lb(e,i,r,(e,r)=>{var i=Vy(r)&&!r.expanded?I(I({},r),{},{expanded:!0}):r;return zy(i)?function(e,t){if(function(e,t){return e.some(e=>t>=e.start&&t<e.end)}(e.visibleSections,t))return e;var n=Ty(t),r={start:n,end:wy(n)};return I(I({},e),{},{visibleSections:Cy(e.visibleSections.concat(r))})}(i,d_(n[t])):i})},o=0;o<n.length;o++)a(o);return lb(e,i,n,(e,t)=>function(e,t,n,r){return Qy(e,t,n,(e,t,n)=>Array.isArray(e)&&r(n)?zy(t)?t.expanded?t:I(I({},t),{},{expanded:!0}):qy({expanded:!0}):m_(e)&&r(n)?Ry(t)?t.expanded?t:I(I({},t),{},{expanded:!0}):Jy({expanded:!0}):t,e=>Vy(e)&&e.expanded)}(e,t,[],r))}function nb(e,t,n,r){return lb(e,t,n,(e,t)=>r?function(e,t,n){return Qy(e,t,n,(e,t)=>rb(t),()=>!0)}(e,t,n):rb(t))}function rb(e){return zy(e)&&e.expanded?I(I({},e),{},{expanded:!1,visibleSections:ly}):Ry(e)&&e.expanded?I(I({},e),{},{expanded:!1}):e}function ib(e,t,n){var r={json:e,documentState:t},i=n.reduce((e,t)=>({json:jt(e.json,[t]),documentState:ab(e.json,e.documentState,t)}),r);return{json:i.json,documentState:Zy(i.json,i.documentState)}}function ab(e,t,n){if(ct(n))return ub(e,t,n,void 0);if(lt(n))return db(e,t,n);if(ut(n)){var r=Vt(e,n.path),i=pb(e,t,r);return i?cb(e,t,r,{type:`value`,enforceString:i}):t}return dt(n)||ft(n)?function(e,t,n){if(ft(n)&&n.from===n.path)return t;var r=t,i=Vt(e,n.from),a=ob(e,r,i);return ft(n)&&(r=db(e,r,{path:n.from})),r=ub(e,r,{path:n.path},a),r}(e,t,n):t}function ob(e,t,n){try{return F(t,eb(e,n))}catch{return}}function sb(e,t,n,r,i){return Ct(Xy(e,t,n,i),eb(e,n),t=>r(F(e,n),t))}function cb(e,t,n,r){return function(e,t,n,r,i){return xt(Xy(e,t,n,i),eb(e,n),r)}(e,t,n,r,Yy)}function lb(e,t,n,r){return sb(e,t,n,r,Yy)}function ub(e,t,n,r){var i=Vt(e,n.path),a=t;return a=lb(e,a,uc(i),(e,t)=>{if(!zy(t))return t;var n=d_(Qs(i)),a=t.items,o=t.visibleSections;return I(I({},t),{},{items:n<a.length?N_(a,n,r===void 0?[,]:[r]):a,visibleSections:fb(o,n,1)})}),cb(e,a,i,r)}function db(e,t,n){var r=Vt(e,n.path),i=uc(r),a=F(e,i);return Array.isArray(a)?lb(e,t,i,(e,t)=>{if(!zy(t))return t;var n=d_(Qs(r)),i=t.items,a=t.visibleSections;return I(I({},t),{},{items:i.slice(0,n).concat(i.slice(n+1)),visibleSections:fb(a,n,-1)})}):function(e,t,n){return Et(t,eb(e,n))?wt(t,eb(e,n)):t}(e,t,r)}function fb(e,t,n){return function(e){for(var t=e.slice(0),n=1;n<t.length;)t[n-1].end===t[n].start&&(t[n-1]={start:t[n-1].start,end:t[n].end},t.splice(n)),n++;return t}(e.map(e=>({start:e.start>t?e.start+n:e.start,end:e.end>t?e.end+n:e.end})))}function pb(e,t,n){var r,i=F(e,n),a=ob(e,t,n),o=By(a)?a.enforceString:void 0;return typeof o==`boolean`?o:typeof(r=i)==`string`&&typeof w_(r,JSON)!=`string`}function mb(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=e.indexOf(t);return r===-1?[]:n?e.slice(r):e.slice(r+1)}function hb(e,t){var n=[];return function e(t,r,i){n.push(i),ot(t)&&zy(r)&&r.expanded&&$y(t,r.visibleSections,n=>{e(t[n],r.items[n],i.concat(String(n)))}),st(t)&&Ry(r)&&r.expanded&&Object.keys(t).forEach(n=>{e(t[n],r.properties[n],i.concat(n))})}(e,t,[]),n}function gb(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];return function i(a,o){r.push({path:o,type:nv.value});var s=ob(e,t,o);a&&Vy(s)&&s.expanded&&(n&&r.push({path:o,type:nv.inside}),ot(a)&&$y(a,zy(s)?s.visibleSections:ly,e=>{var t=o.concat(String(e));i(a[e],t),n&&r.push({path:t,type:nv.after})}),st(a)&&Object.keys(a).forEach(e=>{var t=o.concat(e);r.push({path:t,type:nv.key}),i(a[e],t),n&&r.push({path:t,type:nv.after})}))}(e,[]),r}function _b(e,t,n){var r=hb(e,t),i=r.map(Ot).indexOf(Ot(n));if(i!==-1&&i<r.length-1)return r[i+1]}function vb(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return tb(e,t,n,q_({json:F(e,n)},r)?bb:Sb)}function yb(e,t,n){var r=ob(e,t,n);return Vy(r)&&r.expanded?t:vb(e,t,n)}function bb(e){return e.length===0||e.length===1&&e[0]===`0`}function xb(e){return e.length===0}function Sb(){return!0}function Cb(){return!1}function wb(e){return e&&e.type===tv.after||!1}function Tb(e){return e&&e.type===tv.inside||!1}function Eb(e){return e&&e.type===tv.key||!1}function Db(e){return e&&e.type===tv.value||!1}function Ob(e){return e&&e.type===tv.multi||!1}function kb(e){return Ob(e)&&hc(e.focusPath,e.anchorPath)}function Ab(e){return Ob(e)||wb(e)||Tb(e)||Eb(e)||Db(e)}function jb(e){return e&&e.type===tv.text||!1}function Mb(e,t){var n=[];return function(e,t,n){if(t){var r=sx(t),i=$(t);if(hc(r,i))return n(r);if(e!==void 0){var a=Bb(r,i);if(r.length===a.length||i.length===a.length)return n(a);var o=Zb(r,i),s=Pb(e,o),c=Fb(e,o),l=ox(e,o,s),u=ox(e,o,c);if(!(l===-1||u===-1)){var d=F(e,a);if(st(d)){for(var f=Object.keys(d),p=l;p<=u;p++){var m=n(a.concat(f[p]));if(m!==void 0)return m}return}if(ot(d)){for(var h=l;h<=u;h++){var g=n(a.concat(String(h)));if(g!==void 0)return g}return}throw Error(`Failed to create selection`)}}}}(e,t,e=>{n.push(e)}),n}function Nb(e){return Tb(e)?e.path:uc($(e))}function Pb(e,t){if(!Ob(t))return t.path;var n=ox(e,t,t.anchorPath);return ox(e,t,t.focusPath)<n?t.focusPath:t.anchorPath}function Fb(e,t){if(!Ob(t))return t.path;var n=ox(e,t,t.anchorPath);return ox(e,t,t.focusPath)>n?t.focusPath:t.anchorPath}function Ib(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?$(n):Pb(e,n),a=function(e,t,n){var r=hb(e,t),i=r.map(Ot),a=Ot(n),o=i.indexOf(a);if(o!==-1&&o>0)return r[o-1]}(e,t,i);if(r)return Tb(n)||wb(n)?a===void 0?void 0:Zb(i,i):a===void 0?void 0:Zb(sx(n),a);if(wb(n)||Tb(n))return qb(i);if(Eb(n)){if(a===void 0||a.length===0)return;var o=F(e,uc(a));return Array.isArray(o)||mc(a)?qb(a):Gb(a)}return Db(n),a===void 0?void 0:qb(a)}}function Lb(e,t,n,r){if(!n)return{caret:void 0,previous:void 0,next:void 0};var i=gb(e,t,r),a=i.findIndex(e=>hc(e.path,$(n))&&String(e.type)===String(n.type));return{caret:a===-1?void 0:i[a],previous:a!==-1&&a>0?i[a-1]:void 0,next:a!==-1&&a<i.length-1?i[a+1]:void 0}}function Rb(e,t){for(var n=hb(e,t),r=0;r<n.length-1&&n[r+1].length>n[r].length;)r++;var i=n[r];return i===void 0||i.length===0||Array.isArray(F(e,uc(i)))?qb(i):Gb(i)}function zb(e,t){if(t.length===1){var n=ac(t);if(n.op===`replace`)return qb(Vt(e,n.path))}if(!mc(t)&&t.every(e=>e.op===`move`)){var r=ac(t),i=t.slice(1);if((dt(r)||ft(r))&&r.from!==r.path&&i.every(e=>(dt(e)||ft(e))&&e.from===e.path))return Gb(Vt(e,r.path))}var a=t.filter(e=>e.op!==`test`&&e.op!==`remove`&&(e.op!==`move`||e.from!==e.path)&&typeof e.path==`string`).map(t=>Vt(e,t.path));if(!mc(a))return{type:tv.multi,anchorPath:ac(a),focusPath:Qs(a)}}function Bb(e,t){for(var n=0;n<e.length&&n<t.length&&e[n]===t[n];)n++;return e.slice(0,n)}function Vb(e){return Eb(e)||Db(e)||kb(e)}function Hb(e,t){return Vb(t)&&h_(F(e,$(t)))?$(t):uc($(t))}function Ub(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function Wb(e){return $b(e)?{type:e.type,path:e.path}:e}function Gb(e){return{type:tv.key,path:e}}function Kb(e,t){return{type:tv.key,path:e,edit:!0,initialValue:t}}function qb(e){return{type:tv.value,path:e}}function Jb(e,t){return{type:tv.value,path:e,edit:!0,initialValue:t}}function Yb(e){return{type:tv.inside,path:e}}function Xb(e){return{type:tv.after,path:e}}function Zb(e,t){var n=Bb(e,t),r=e.length>n.length&&t.length>n.length;return{type:tv.multi,anchorPath:r?n.concat(e[n.length]):n,focusPath:r?n.concat(t[n.length]):n}}function Qb(e,t,n,r){if(Eb(t))return String(Qs(t.path));if(Db(t)){var i=F(e,t.path);return typeof i==`string`?i:r.stringify(i,null,n)}if(Ob(t)){if(mc(t.focusPath))return r.stringify(e,null,n);var a=F(e,Nb(t));if(Array.isArray(a)){if(kb(t)){var o=F(e,t.focusPath);return r.stringify(o,null,n)}return Mb(e,t).map(t=>{var i=F(e,t);return`${r.stringify(i,null,n)},`}).join(`
`)}return Mb(e,t).map(t=>{var i=Qs(t),a=F(e,t);return`${r.stringify(i)}: ${r.stringify(a,null,n)},`}).join(`
`)}}function $b(e){return(Eb(e)||Db(e))&&!0===e.edit}function ex(e){return Eb(e)||Db(e)||Ob(e)}function tx(e){return Eb(e)||Db(e)||kb(e)}function nx(e){switch(e.type){case nv.key:return Gb(e.path);case nv.value:return qb(e.path);case nv.after:return Xb(e.path);case nv.inside:return Yb(e.path)}}function rx(e,t){switch(e){case tv.key:return Gb(t);case tv.value:return qb(t);case tv.after:return Xb(t);case tv.inside:return Yb(t);case tv.multi:case tv.text:return Zb(t,t)}}function ix(e,t,n){if(t)return ax(e,t,n)||Ub(Ob(t)?uc(t.focusPath):t.path,n)?t:void 0}function ax(e,t,n){if(e===void 0||!t)return!1;if(Eb(t)||Tb(t)||wb(t))return hc(t.path,n);if(Db(t))return Ub(n,t.path);if(Ob(t)){var r=Pb(e,t),i=Fb(e,t),a=uc(t.focusPath);if(!Ub(n,a)||n.length<=a.length)return!1;var o=ox(e,t,r),s=ox(e,t,i),c=ox(e,t,n);return c!==-1&&c>=o&&c<=s}return!1}function ox(e,t,n){var r=uc(t.focusPath);if(!Ub(n,r)||n.length<=r.length)return-1;var i=n[r.length],a=F(e,r);if(st(a))return Object.keys(a).indexOf(i);if(ot(a)){var o=d_(i);if(o<a.length)return o}return-1}function $(e){return Ob(e)?e.focusPath:e.path}function sx(e){return Ob(e)?e.anchorPath:e.path}function cx(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i of n)if(typeof i==`string`&&e.push(i),i&&typeof i==`object`)for(var a in i)Object.hasOwnProperty.call(i,a)&&i[a]&&e.push(a);return e.join(` `)}function lx(e,t,n){return cx(`jse-value`,`jse-`+x_(e,n),{"jse-url":C_(e),"jse-empty":typeof e==`string`&&e.length===0,"jse-table-cell":t===ev.table})}Fv(`/* over all fonts, sizes, and colors */
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
}`);var ux=Y(`<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>`);function dx(e,t){bf(t,!1);var n=o_(`jsoneditor:EditableDiv`),r=Q(t,`value`,9),i=Q(t,`initialValue`,9),a=Q(t,`shortText`,9,!1),o=Q(t,`label`,9),s=Q(t,`onChange`,9),c=Q(t,`onCancel`,9),l=Q(t,`onFind`,9),u=Q(t,`onPaste`,9,$n),d=Q(t,`onValueClass`,9,()=>``),f=z(void 0,!0),p=z(void 0,!0),m=!1;function h(){return G(f)?function(e){return e.replace(/\n$/,``)}(G(f).innerText):``}function g(e){G(f)&&pm(f,G(f).innerText=yv(e))}Qh(()=>{n(`onMount`,{value:r(),initialValue:i()}),g(i()===void 0?r():i()),G(f)&&function(e){if(e.firstChild!=null){var t=document.createRange(),n=window.getSelection();t.setStart(e,1),t.collapse(!0),n?.removeAllRanges(),n?.addRange(t)}else e.focus()}(G(f))}),$h(()=>{var e=h();n(`onDestroy`,{closed:m,value:r(),newValue:e}),m||e===r()||s()(e,ov.no)}),U(()=>(q(d()),q(r())),()=>{B(p,d()(r()))}),Nm(),Qg(!0);var _=ux();Yg(_,e=>B(f,e),()=>G(f)),W(e=>{Rg(_,`aria-label`,o()),Cg(_,1,e,`svelte-1r0oryi`)},[()=>yg((q(cx),G(p),q(a()),K(()=>cx(`jse-editable-div`,G(p),{"jse-short-text":a()}))))]),J(`input`,_,function(){var e=h();e===``&&g(``),B(p,d()(e))}),J(`keydown`,_,function(e){e.stopPropagation();var t=Mv(e);if(t===`Escape`&&(e.preventDefault(),m=!0,c()()),t===`Enter`||t===`Tab`){e.preventDefault(),m=!0;var n=h();s()(n,ov.nextInside)}t===`Ctrl+F`&&(e.preventDefault(),l()(!1)),t===`Ctrl+H`&&(e.preventDefault(),l()(!0))}),J(`paste`,_,function(e){if(e.stopPropagation(),u()&&e.clipboardData){var t=e.clipboardData.getData(`text/plain`);u()(t)}}),J(`blur`,_,function(){var e=document.hasFocus(),t=h();n(`handleBlur`,{hasFocus:e,closed:m,value:r(),newValue:t}),document.hasFocus()&&!m&&(m=!0,t!==r()&&s()(t,ov.self))}),X(e,_),xf()}function fx(e,t){bf(t,!1);var n=Q(t,`path`,9),r=Q(t,`value`,9),i=Q(t,`selection`,9),a=Q(t,`mode`,9),o=Q(t,`parser`,9),s=Q(t,`normalization`,9),c=Q(t,`enforceString`,9),l=Q(t,`onPatch`,9),u=Q(t,`onPasteJson`,9),d=Q(t,`onSelect`,9),f=Q(t,`onFind`,9),p=Q(t,`focus`,9),m=Q(t,`findNextInside`,9);function h(e){return c()?e:w_(e,o())}function g(){d()(qb(n())),p()()}Qg(!0);var _=R(()=>(q(s()),q(r()),K(()=>s().escapeValue(r())))),v=R(()=>(q($b),q(i()),K(()=>$b(i())?i().initialValue:void 0)));dx(e,{get value(){return G(_)},get initialValue(){return G(v)},label:`Edit value`,onChange:function(e,t){l()([{op:`replace`,path:Ot(n()),value:h(s().unescapeValue(e))}],(e,r,i)=>{if(!i||hc(n(),$(i)))return{state:r,selection:t===ov.nextInside?m()(n()):qb(n())}}),p()()},onCancel:g,onPaste:function(e){try{var t=o().parse(e);h_(t)&&u()({path:n(),contents:t,onPasteAsJson:()=>{g();var e=[{op:`replace`,path:Ot(n()),value:t}];l()(e,(e,t)=>({state:vb(e,t,n())}))}})}catch{}},get onFind(){return f()},onValueClass:function(e){return lx(h(s().unescapeValue(e)),a(),o())}}),xf()}function px(e,t,n){var r=uc(t),i=F(e,r);if(ot(i)){var a=d_(Qs(t));return n.map((e,t)=>({op:`add`,path:Ot(r.concat(String(a+t))),value:e.value}))}if(st(i)){var o=Qs(t),s=Object.keys(i),c=o===void 0?[]:mb(s,o,!0);return[...n.map(e=>{var t=Vv(e.key,s);return{op:`add`,path:Ot(r.concat(t)),value:e.value}}),...c.map(e=>bx(r,e))]}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}function mx(e,t,n){var r=F(e,t);if(Array.isArray(r)){var i=r.length;return n.map((e,n)=>({op:`add`,path:Ot(t.concat(String(i+n))),value:e.value}))}return n.map(e=>{var n=Vv(e.key,Object.keys(r));return{op:`add`,path:Ot(t.concat(n)),value:e.value}})}function hx(e,t,n,r){var i=Vv(r,t.filter(e=>e!==n)),a=mb(t,n,!1);return[{op:`move`,from:Ot(e.concat(n)),path:Ot(e.concat(i))},...a.map(t=>bx(e,t))]}function gx(e,t){var n=Qs(t);if(mc(n))throw Error(`Cannot duplicate root object`);var r=uc(n),i=Qs(n),a=F(e,r);if(ot(a)){var o=Qs(t),s=o?d_(Qs(o))+1:0;return[...t.map((e,t)=>({op:`copy`,from:Ot(e),path:Ot(r.concat(String(t+s)))}))]}if(st(a)){var c=Object.keys(a),l=i===void 0?[]:mb(c,i,!1);return[...t.map(e=>{var t=Vv(Qs(e),c);return{op:`copy`,from:Ot(e),path:Ot(r.concat(t))}}),...l.map(e=>bx(r,e))]}throw Error(`Cannot create duplicate operations: parent must be an Object or Array`)}function _x(e,t){if(Db(t))return[{op:`move`,from:Ot(t.path),path:``}];if(!Ob(t))throw Error(`Cannot create extract operations: parent must be an Object or Array`);var n=F(e,uc(t.focusPath));if(ot(n))return[{op:`replace`,path:``,value:Mb(e,t).map(e=>n[d_(Qs(e))])}];if(st(n)){var r={};return Mb(e,t).forEach(e=>{var t=String(Qs(e));r[t]=n[t]}),[{op:`replace`,path:``,value:r}]}throw Error(`Cannot extract: unsupported type of selection `+JSON.stringify(t))}function vx(e,t,n,r){if(Eb(t)){var i=F_(n,r),a=uc(t.path),o=F(e,a);return hx(a,Object.keys(o),Qs(t.path),typeof i==`string`?i:n)}if(Db(t)||Ob(t)&&mc(t.focusPath))try{return[{op:`replace`,path:Ot($(t)),value:I_(n,e=>P_(e,r))}]}catch{return[{op:`replace`,path:Ot($(t)),value:n}]}if(Ob(t)){var s=xx(n,r);return function(e,t,n){var r=uc(ac(t)),i=F(e,r);if(ot(i)){var a=ac(t),o=a?d_(Qs(a)):0;return[...yx(t),...n.map((e,t)=>({op:`add`,path:Ot(r.concat(String(t+o))),value:e.value}))]}if(st(i)){var s=Qs(t),c=uc(s),l=Qs(s),u=Object.keys(i),d=l===void 0?[]:mb(u,l,!1),f=new Set(t.map(e=>Qs(e))),p=u.filter(e=>!f.has(e));return[...yx(t),...n.map(e=>{var t=Vv(e.key,p);return{op:`add`,path:Ot(c.concat(t)),value:e.value}}),...d.map(e=>bx(c,e))]}throw Error(`Cannot create replace operations: parent must be an Object or Array`)}(e,Mb(e,t),s)}if(wb(t)){var c=xx(n,r),l=t.path,u=uc(l),d=F(e,u);if(ot(d)){var f=d_(Qs(l));return px(e,u.concat(String(f+1)),c)}if(st(d)){var p=String(Qs(l)),m=Object.keys(d);if(mc(m)||Qs(m)===p)return mx(e,u,c);var h=m[m.indexOf(p)+1];return px(e,u.concat(h),c)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}if(Tb(t)){var g=xx(n,r),_=t.path,v=F(e,_);if(ot(v))return px(e,_.concat(`0`),g);if(st(v)){var y=Object.keys(v);if(mc(y))return mx(e,_,g);var b=ac(y);return px(e,_.concat(b),g)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}throw Error(`Cannot insert: unsupported type of selection `+JSON.stringify(t))}function yx(e){return e.map(e=>({op:`remove`,path:Ot(e)})).reverse()}function bx(e,t){return{op:`move`,from:Ot(e.concat(t)),path:Ot(e.concat(t))}}function xx(e,t){var n=/^\s*{/.test(e),r=/^\s*\[/.test(e),i=F_(e,t),a=i===void 0?I_(e,e=>P_(e,t)):i;return n&&m_(a)||r&&Array.isArray(a)?[{key:`New item`,value:a}]:Array.isArray(a)?a.map((e,t)=>({key:`New item `+t,value:e})):m_(a)?Object.keys(a).map(e=>({key:e,value:a[e]})):[{key:`New item`,value:a}]}function Sx(e,t){if(Eb(t)){var n=uc(t.path),r=F(e,n),i=hx(n,Object.keys(r),Qs(t.path),``);return{operations:i,newSelection:zb(e,i)}}if(Db(t))return{operations:[{op:`replace`,path:Ot(t.path),value:``}],newSelection:t};if(Ob(t)){var a=Mb(e,t),o=yx(a),s=Qs(a);if(mc(s))return{operations:[{op:`replace`,path:``,value:``}],newSelection:qb([])};var c=uc(s),l=F(e,c);if(ot(l)){var u=d_(Qs(ac(a)));return{operations:o,newSelection:u===0?Yb(c):Xb(c.concat(String(u-1)))}}if(st(l)){var d=Object.keys(l),f=Qs(ac(a)),p=d.indexOf(f),m=d[p-1];return{operations:o,newSelection:p===0?Yb(c):Xb(c.concat(m))}}throw Error(`Cannot create remove operations: parent must be an Object or Array`)}throw Error(`Cannot remove: unsupported type of selection `+JSON.stringify(t))}function Cx(e,t){return Ut(e,function(e,t){if(mc(t)||!t.every(ft))return t;var n=[];for(var r of t){var i=wx(Dt(r.from)),a=wx(Dt(r.path));if(!i||!a)return t;n.push({from:i,path:a,operation:r})}var o=n[0].path.parent;if(!st(F(e,o))||!n.every(e=>function(e,t){return hc(e.from.parent,t)&&hc(e.path.parent,t)}(e,o)))return t;var s=function(e,t){var n=Object.keys(t),r=n.slice();for(var i of e){var a=r.indexOf(i.from.key);a!==-1&&(r.splice(a,1),r.push(i.path.key))}for(var o=0;o<n.length&&n[o]===r[o];)o++;return r[o]}(n,e),c=e=>e.operation,l=n.filter(e=>e.operation.from!==e.operation.path);return l.some(e=>e.path.key===s)?l.map(c):[bx(o,s),...l.map(c)]}(e,t),{before:(e,t,n)=>{if(lt(t)){var r=Dt(t.path);return{revertOperations:[...n,...Tx(e,r)]}}if(ft(t)){var i=Dt(t.from);return{revertOperations:t.from===t.path?[t,...Tx(e,i)]:[...n,...Tx(e,i)]}}return{document:e}}})}function wx(e){return e.length>0?{parent:uc(e),key:Qs(e)}:void 0}function Tx(e,t){var n=uc(t),r=Qs(t),i=F(e,n);return st(i)?mb(Object.keys(i),r,!1).map(e=>bx(n,e)):[]}function Ex(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[t],r=e.items.map((e,n)=>I(I({},e),{},{active:n===t}));return I(I({},e),{},{items:r,activeItem:n,activeIndex:t})}function Dx(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.toLowerCase(),i=n?.maxResults??1/0,a=n?.columns,o=[],s=[];function c(e){o.length>=i||o.push(e)}function l(e,t){if(ot(t)){var n=s.length;s.push(`0`);for(var r=0;r<t.length;r++)if(s[n]=String(r),l(e,t[r]),o.length>=i)return;s.pop()}else if(st(t)){var a=Object.keys(t),u=s.length;for(var d of(s.push(``),a))if(s[u]=d,Ox(d,e,s,iv.key,c),l(e,t[d]),o.length>=i)return;s.pop()}else Ox(String(t),e,s,iv.value,c)}if(e===``)return[];if(a){if(!Array.isArray(t))throw Error(`json must be an Array when option columns is defined`);for(var u=0;u<t.length;u++){s[0]=String(u);for(var d=t[u],f=0;f<a.length;f++){var p=a[f];if(p.length===1)s[1]=p[0];else for(var m=0;m<p.length;m++)s[m+1]=p[m];for(;s.length>p.length+1;)s.pop();l(r,F(d,p))}if(o.length>=i)break}return o}return l(r,t),o}function Ox(e,t,n,r,i){var a=e.toLowerCase(),o=0,s=-1,c=-1;do(c=a.indexOf(t,s))!==-1&&(s=c+t.length,i({path:n.slice(0),field:r,fieldIndex:o,start:c,end:s}),o++);while(c!==-1)}function kx(e,t,n,r){return e.substring(0,n)+t+e.substring(r)}function Ax(e,t,n){var r=e;return ic(n,e=>{r=kx(r,t,e.start,e.end)}),r}function jx(e,t,n,r,i){var a=r.field,o=r.path,s=r.start,c=r.end;if(a===iv.key){var l=uc(o),u=F(e,l),d=Qs(o),f=hx(l,Object.keys(u),d,kx(d,n,s,c));return{newSelection:zb(e,f),operations:f}}if(a===iv.value){var p=F(e,o);if(p===void 0)throw Error(`Cannot replace: path not found ${Ot(o)}`);var m=typeof p==`string`?p:String(p),h=pb(e,t,o),g=kx(m,n,s,c),_=[{op:`replace`,path:Ot(o),value:h?g:w_(g,i)}];return{newSelection:zb(e,_),operations:_}}throw Error(`Cannot replace: unknown type of search result field ${a}`)}function Mx(e){return e.path.concat(e.field,String(e.fieldIndex))}function Nx(e){var t=Hy(e)?e.searchResults.filter(e=>e.field===iv.key):void 0;return t&&t.length>0?t:void 0}function Px(e){var t=Hy(e)?e.searchResults.filter(e=>e.field===iv.value):void 0;return t&&t.length>0?t:void 0}var Fx={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function Ix(e,t){return t.reduce((t,n)=>function(e,t,n,r){return sb(e,t,n,r,Fx)}(e,t,n.path,(e,t)=>I(I({},t),{},{searchResults:t.searchResults?t.searchResults.concat(n):[n]})),void 0)}function Lx(e){var t=e?.searchResults??[],n=Ry(e)?Object.values(e.properties).flatMap(Lx):zy(e)?e.items.flatMap(Lx):[];return t.concat(n)}Fv(`/* over all fonts, sizes, and colors */
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
  outline: var(--jse-search-match-active-outline, var(--jse-search-match-outline, 2px solid #e0be00));
}`);var Rx=Y(`<span> </span>`);function zx(e,t){bf(t,!1);var n=z(),r=Q(t,`text`,8),i=Q(t,`searchResultItems`,8);U(()=>(q(r()),q(i())),()=>{B(n,function(e,t){var n=[],r=0;for(var i of t){var a=e.slice(r,i.start);a!==``&&n.push({resultIndex:void 0,type:`normal`,text:a,active:!1});var o=e.slice(i.start,i.end);n.push({resultIndex:i.resultIndex,type:`highlight`,text:o,active:i.active}),r=i.end}var s=Qs(t);return s&&s.end<e.length&&n.push({type:`normal`,text:e.slice(s.end),resultIndex:void 0,active:!1}),n}(String(r()),i()))}),Nm(),Qg();var a=Fh();cg(wm(a),1,()=>G(n),og,(e,t)=>{var n=Fh(),r=wm(n),i=e=>{var n=Ph();W(()=>Bh(n,(G(t),K(()=>G(t).text)))),X(e,n)},a=e=>{var n,r=Rx(),i=V(r);W((e,a)=>{n=Cg(r,1,`jse-highlight svelte-19qyvy6`,null,n,{"jse-active":G(t).active}),Rg(r,`data-search-result-index`,e),Bh(i,a)},[()=>(G(t),K(()=>String(G(t).resultIndex))),()=>(q(yv),G(t),K(()=>yv(G(t).text)))]),X(e,r)};Z(r,e=>{G(t),K(()=>G(t).type===`normal`)?e(i):e(a,-1)}),X(e,n)}),X(e,a),xf()}function Bx(e){var t=1e3;if(e<900)return e.toFixed()+` B`;var n=e/t;if(n<900)return n.toFixed(1)+` KB`;var r=n/t;if(r<900)return r.toFixed(1)+` MB`;var i=r/t;return i<900?i.toFixed(1)+` GB`:(i/t).toFixed(1)+` TB`}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Vx=Y(`<button type="button"><!></button>`);function Hx(e,t){bf(t,!0);var n,r=pp(()=>t.onclick?e=>{e.preventDefault(),e.stopPropagation(),t.onclick()}:void 0),i=Vx();(function(e,t){var n=[...arguments].slice(2),r=new Zh(e);Fm(()=>{var e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},Yd)})(V(i),()=>t.children??Nd),W(()=>n=Cg(i,1,`jse-tag svelte-ubve9r`,null,n,{disabled:!t.onclick})),Dh(`click`,i,function(){for(var e,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=G(r))==null||e.apply(this,n)}),X(e,i),xf()}Oh([`click`]),Fv(`/* over all fonts, sizes, and colors */
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
}`);var Ux=Y(`<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>`);function Wx(e,t){bf(t,!0);var n=fm(!0),r=pp(()=>G(n)&&typeof t.value==`string`&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(e=>e.active&&e.end>t.truncateTextSize))),i=pp(()=>G(r)&&typeof t.value==`string`?t.value.substring(0,t.truncateTextSize).trim():t.value),a=pp(()=>C_(t.value));function o(){B(n,!1)}var s=Ux(),c=V(s),l=e=>{var n=pp(()=>t.normalization.escapeValue(G(i)));zx(e,{get text(){return G(n)},get searchResultItems(){return t.searchResultItems}})},u=e=>{var n=Ph();W(e=>Bh(n,e),[()=>yv(t.normalization.escapeValue(G(i)))]),X(e,n)};Z(c,e=>{t.searchResultItems?e(l):e(u,-1)});var d=H(c,2),f=e=>{Hx(e,{onclick:o,children:(e,n)=>{var r=Ph();W(e=>Bh(r,`Show more (${e??``})`),[()=>Bx(t.value.length)]),X(e,r)},$$slots:{default:!0}})};Z(d,e=>{G(r)&&typeof t.value==`string`&&e(f)}),W(e=>{Cg(s,1,e,`svelte-1saqp8c`),Rg(s,`title`,G(a)?`Ctrl+Click or Ctrl+Enter to open url in new window`:void 0)},[()=>yg(lx(t.value,t.mode,t.parser))]),Dh(`click`,s,function(e){typeof t.value==`string`&&G(a)&&Nv(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,`_blank`))}),Dh(`dblclick`,s,function(e){t.readOnly||(e.preventDefault(),t.onSelect(Jb(t.path)))}),X(e,s),xf()}Oh([`click`,`dblclick`]),Fv(`/* over all fonts, sizes, and colors */
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
}`);var Gx=Y(`<div class="jse-tooltip svelte-brt1mq"> </div>`);function Kx(e,t){var n=Q(t,`text`,8),r=Gx(),i=V(r);W(()=>Bh(i,n())),X(e,r)}function qx(e,t){var n,r=t.text,i=t.openAbsolutePopup,a=t.closeAbsolutePopup;function o(){n=i(Kx,{text:r},{position:`top`,width:10*r.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function s(){a(n)}return e.addEventListener(`mouseenter`,o),e.addEventListener(`mouseleave`,s),{destroy(){e.removeEventListener(`mouseenter`,o),e.removeEventListener(`mouseleave`,s)}}}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Jx=Y(`<div class="jse-timestamp svelte-1jcpman"><!></div>`);function Yx(e,t){bf(t,!1);var n=z(void 0,!0),r=yf(`absolute-popup`),i=Q(t,`value`,9);U(()=>q(i()),()=>{B(n,`Time: ${new Date(i()).toString()}`)}),Nm(),Qg(!0);var a=Jx();Qv(V(a),{get data(){return xl}}),gg(a,(e,t)=>qx?.(e,t),()=>I({text:G(n)},r)),X(e,a),xf()}function Xx(e){var t=[];return!e.isEditing&&g_(e.value)&&t.push({component:ey,props:e}),!e.isEditing&&b_(e.value)&&t.push({component:iy,props:e}),e.isEditing&&t.push({component:fx,props:e}),e.isEditing||t.push({component:Wx,props:e}),!e.isEditing&&__(e.value)&&t.push({component:Yx,props:e}),t}function Zx(e){return e.map((e,t)=>eS.test(e)?`[`+e+`]`:/[.[\]]/.test(e)||e===``?`["`+function(e){return e.replace(/"/g,`\\"`)}(e)+`"]`:(t>0?`.`:``)+e).join(``)}function Qx(e){for(var t=[],n=0;n<e.length;)e[n]===`.`&&n++,e[n]===`[`?(n++,e[n]===`"`?(n++,t.push(r(e=>e===`"`,!0)),i(`"`)):t.push(r(e=>e===`]`)),i(`]`)):t.push(r(e=>e===`.`||e===`[`));function r(t){for(var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],i=``;n<e.length&&!t(e[n]);)r&&e[n]===`\\`&&e[n+1]===`"`?(i+=`"`,n+=2):(i+=e[n],n++);return i}function i(t){if(e[n]!==t)throw SyntaxError(`Invalid JSON path: ${t} expected at position ${n}`);n++}return t}function $x(e){return{value:e,label:mc(e)?`(item root)`:Zx(e)}}var eS=/^\d+$/,tS={},nS={showWizard:!0,showOriginal:!0},rS=Math.min,iS=Math.max,aS=Math.round,oS=Math.floor,sS=e=>({x:e,y:e}),cS={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function lS(e,t){return typeof e==`function`?e(t):e}function uS(e){return e.split(`-`)[0]}function dS(e){return e.split(`-`)[1]}function fS(e){return e===`x`?`y`:`x`}function pS(e){return e===`y`?`height`:`width`}function mS(e){var t=e[0];return t===`t`||t===`b`?`y`:`x`}function hS(e){return fS(mS(e))}function gS(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var _S=[`left`,`right`],vS=[`right`,`left`],yS=[`top`,`bottom`],bS=[`bottom`,`top`];function xS(e,t,n,r){var i=dS(e),a=function(e,t,n){switch(e){case`top`:case`bottom`:return n?t?vS:_S:t?_S:vS;case`left`:case`right`:return t?yS:bS;default:return[]}}(uS(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(gS)))),a}function SS(e){var t=uS(e);return cS[t]+e.slice(t.length)}function CS(e){var t=e.x,n=e.y,r=e.width,i=e.height;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function wS(e,t,n){var r,i=e.reference,a=e.floating,o=mS(t),s=hS(t),c=pS(s),l=uS(t),u=o===`y`,d=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2,p=i[c]/2-a[c]/2;switch(l){case`top`:r={x:d,y:i.y-a.height};break;case`bottom`:r={x:d,y:i.y+i.height};break;case`right`:r={x:i.x+i.width,y:f};break;case`left`:r={x:i.x-a.width,y:f};break;default:r={x:i.x,y:i.y}}var m=dS(t);return m&&(r[s]+=p*(m===`end`?1:-1)*(n&&u?-1:1)),r}function TS(e,t){return ES.apply(this,arguments)}function ES(){return ES=id(function*(e,t){var n;t===void 0&&(t={});var r=e.x,i=e.y,a=e.platform,o=e.rects,s=e.elements,c=e.strategy,l=lS(t,e),u=l.boundary,d=u===void 0?`clippingAncestors`:u,f=l.rootBoundary,p=f===void 0?`viewport`:f,m=l.elementContext,h=m===void 0?`floating`:m,g=l.altBoundary,_=g!==void 0&&g,v=l.padding,y=function(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:function(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}(e)}(v===void 0?0:v),b=s[_?h===`floating`?`reference`:`floating`:h],x=CS(yield a.getClippingRect({element:(n=yield a.isElement==null?void 0:a.isElement(b))==null||n?b:b.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:d,rootBoundary:p,strategy:c})),S=h===`floating`?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,C=yield a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating),w=(yield a.isElement==null?void 0:a.isElement(C))&&(yield a.getScale==null?void 0:a.getScale(C))||{x:1,y:1},T=CS(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:S,offsetParent:C,strategy:c}):S);return{top:(x.top-T.top+y.top)/w.y,bottom:(T.bottom-x.bottom+y.bottom)/w.y,left:(x.left-T.left+y.left)/w.x,right:(T.right-x.right+y.right)/w.x}}),ES.apply(this,arguments)}var DS=function(){var e=id(function*(e,t,n){for(var r=n.placement,i=r===void 0?`bottom`:r,a=n.strategy,o=a===void 0?`absolute`:a,s=n.middleware,c=s===void 0?[]:s,l=n.platform,u=l.detectOverflow?l:I(I({},l),{},{detectOverflow:TS}),d=yield l.isRTL==null?void 0:l.isRTL(t),f=yield l.getElementRects({reference:e,floating:t,strategy:o}),p=wS(f,i,d),m=p.x,h=p.y,g=i,_=0,v={},y=0;y<c.length;y++){var b=c[y];if(b){var x=b.name,S=b.fn,C=yield S({x:m,y:h,initialPlacement:i,placement:g,strategy:o,middlewareData:v,rects:f,platform:u,elements:{reference:e,floating:t}}),w=C.x,T=C.y,E=C.data,ee=C.reset;if(m=w??m,h=T??h,v[x]=I(I({},v[x]),E),ee&&_<50){if(_++,typeof ee==`object`){ee.placement&&(g=ee.placement),ee.rects&&(f=!0===ee.rects?yield l.getElementRects({reference:e,floating:t,strategy:o}):ee.rects);var te=wS(f,g,d);m=te.x,h=te.y}y=-1}}}return{x:m,y:h,placement:g,strategy:o,middlewareData:v}});return function(t,n,r){return e.apply(this,arguments)}}(),OS=new Set([`left`,`top`]);function kS(){return kS=id(function*(e,t){var n=e.placement,r=e.platform,i=e.elements,a=yield r.isRTL==null?void 0:r.isRTL(i.floating),o=uS(n),s=dS(n),c=mS(n)===`y`,l=OS.has(o)?-1:1,u=a&&c?-1:1,d=lS(t,e),f=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis},p=f.mainAxis,m=f.crossAxis,h=f.alignmentAxis;return s&&typeof h==`number`&&(m=s===`end`?-1*h:h),c?{x:m*u,y:p*l}:{x:p*l,y:m*u}}),kS.apply(this,arguments)}function AS(){return typeof window<`u`}function jS(e){return PS(e)?(e.nodeName||``).toLowerCase():`#document`}function MS(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function NS(e){return((PS(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function PS(e){return!!AS()&&(e instanceof Node||e instanceof MS(e).Node)}function FS(e){return!!AS()&&(e instanceof Element||e instanceof MS(e).Element)}function IS(e){return!!AS()&&(e instanceof HTMLElement||e instanceof MS(e).HTMLElement)}function LS(e){return!(!AS()||typeof ShadowRoot>`u`)&&(e instanceof ShadowRoot||e instanceof MS(e).ShadowRoot)}function RS(e){var t=JS(e),n=t.overflow,r=t.overflowX,i=t.overflowY,a=t.display;return/auto|scroll|overlay|hidden|clip/.test(n+i+r)&&a!==`inline`&&a!==`contents`}function zS(e){return/^(table|td|th)$/.test(jS(e))}function BS(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var VS,HS=/transform|translate|scale|rotate|perspective|filter/,US=/paint|layout|strict|content/,WS=e=>!!e&&e!==`none`;function GS(e){var t=FS(e)?JS(e):e;return WS(t.transform)||WS(t.translate)||WS(t.scale)||WS(t.rotate)||WS(t.perspective)||!KS()&&(WS(t.backdropFilter)||WS(t.filter))||HS.test(t.willChange||``)||US.test(t.contain||``)}function KS(){return VS??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),VS}function qS(e){return/^(html|body|#document)$/.test(jS(e))}function JS(e){return MS(e).getComputedStyle(e)}function YS(e){return FS(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function XS(e){if(jS(e)===`html`)return e;var t=e.assignedSlot||e.parentNode||LS(e)&&e.host||NS(e);return LS(t)?t.host:t}function ZS(e){var t=XS(e);return qS(t)?(e.ownerDocument||e).body:IS(t)&&RS(t)?t:ZS(t)}function QS(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);var r=ZS(e),i=r===e.ownerDocument?.body,a=MS(r);if(i){var o=$S(a);return t.concat(a,a.visualViewport||[],RS(r)?r:[],o&&n?QS(o):[])}return t.concat(r,QS(r,[],n))}function $S(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function eC(e){var t=JS(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=IS(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=aS(n)!==a||aS(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function tC(e){return FS(e)?e:e.contextElement}function nC(e){var t=tC(e);if(!IS(t))return sS(1);var n=t.getBoundingClientRect(),r=eC(t),i=r.width,a=r.height,o=r.$,s=(o?aS(n.width):n.width)/i,c=(o?aS(n.height):n.height)/a;return s&&Number.isFinite(s)||(s=1),c&&Number.isFinite(c)||(c=1),{x:s,y:c}}var rC=sS(0);function iC(e){var t=MS(e);return KS()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rC}function aC(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),a=tC(e),o=sS(1);t&&(r?FS(r)&&(o=nC(r)):o=nC(e));var s=function(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===MS(e)}(a,n,r)?iC(a):sS(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r)for(var f=MS(a),p=FS(r)?MS(r):r,m=f,h=$S(m);h&&p!==m;){var g=nC(h),_=h.getBoundingClientRect(),v=JS(h),y=_.left+(h.clientLeft+parseFloat(v.paddingLeft))*g.x,b=_.top+(h.clientTop+parseFloat(v.paddingTop))*g.y;c*=g.x,l*=g.y,u*=g.x,d*=g.y,c+=y,l+=b,h=$S(m=MS(h))}return CS({width:u,height:d,x:c,y:l})}function oC(e,t){var n=YS(e).scrollLeft;return t?t.left+n:aC(NS(e)).left+n}function sC(e,t){var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-oC(e,n),y:n.top+t.scrollTop}}function cC(e,t,n){var r;if(t===`viewport`||t===`layoutViewport`)r=function(e,t,n){n===void 0&&(n=`viewport`);var r=n===`layoutViewport`,i=MS(e),a=NS(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){var d=!KS()||t===`fixed`;r?d||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,d&&(l=o.offsetLeft,u=o.offsetTop))}if(oC(a)<=0){var f=a.ownerDocument,p=f.body,m=getComputedStyle(p),h=f.compatMode===`CSS1Compat`&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,g=Math.abs(a.clientWidth-p.clientWidth-h),_=getComputedStyle(a).scrollbarGutter===`stable both-edges`?g/2:g;_<=25&&(s-=_)}return{width:s,height:c,x:l,y:u}}(e,n,t);else if(t===`document`)r=function(e){var t=YS(e),n=e.ownerDocument.body,r=iS(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=iS(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+oC(e),o=-t.scrollTop;return JS(n).direction===`rtl`&&(a+=iS(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}(NS(e));else if(FS(t))r=function(e,t){var n=aC(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=nC(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}(t,n);else{var i=iC(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return CS(r)}function lC(e,t,n){var r=IS(t),i=NS(t),a=n===`fixed`,o=aC(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=sS(0);if((r||!a)&&((jS(t)!==`body`||RS(i))&&(s=YS(t)),r)){var l=aC(t,!0,a,t);c.x=l.x+t.clientLeft,c.y=l.y+t.clientTop}!r&&i&&(c.x=oC(i));var u=!i||r||a?sS(0):sC(i,s);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function uC(e){return JS(e).position===`static`}function dC(e,t){if(!IS(e)||JS(e).position===`fixed`)return null;if(t)return t(e);var n=e.offsetParent;return NS(e)===n&&(n=n.ownerDocument.body),n}function fC(e,t){var n=MS(e);if(BS(e))return n;if(!IS(e)){for(var r=XS(e);r&&!qS(r);){if(FS(r)&&!uC(r))return r;r=XS(r)}return n}for(var i=dC(e,t);i&&zS(i)&&uC(i);)i=dC(i,t);return i&&qS(i)&&uC(i)&&!GS(i)?n:i||function(e){for(var t=XS(e);IS(t)&&!qS(t);){if(GS(t))return t;if(BS(t))return null;t=XS(t)}return null}(e)||n}var pC={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var t=e.elements,n=e.rect,r=e.offsetParent,i=e.strategy===`fixed`,a=NS(r),o=!!t&&BS(t.floating);if(r===a||o&&i)return n;var s={scrollLeft:0,scrollTop:0},c=sS(1),l=sS(0),u=IS(r);if((u||!i)&&((jS(r)!==`body`||RS(a))&&(s=YS(r)),u)){var d=aC(r);c=nC(r),l.x=d.x+r.clientLeft,l.y=d.y+r.clientTop}var f=!a||u||i?sS(0):sC(a,s);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+l.x+f.x,y:n.y*c.y-s.scrollTop*c.y+l.y+f.y}},getDocumentElement:NS,getClippingRect:function(e){for(var t=e.element,n=e.boundary,r=e.rootBoundary,i=e.strategy,a=[...n===`clippingAncestors`?BS(t)?[]:function(e,t){var n=t.get(e);if(n)return n;for(var r=QS(e,[],!1).filter(e=>FS(e)&&jS(e)!==`body`),i=null,a=JS(e).position===`fixed`,o=a?XS(e):e;FS(o)&&!qS(o);){var s=JS(o),c=GS(o),l=i?i.position:a?`fixed`:``;c||l!==`fixed`&&(l!==`absolute`||s.position!==`static`)?i=s:r=r.filter(e=>e!==o),o=XS(o)}return t.set(e,r),r}(t,this._c):[].concat(n),r],o=cC(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left,d=1;d<a.length;d++){var f=cC(t,a[d],i);s=iS(f.top,s),c=rS(f.right,c),l=rS(f.bottom,l),u=iS(f.left,u)}return{width:c-u,height:l-s,x:u,y:s}},getOffsetParent:fC,getElementRects:function(){var e=id(function*(e){var t=this.getOffsetParent||fC,n=this.getDimensions,r=yield n(e.floating);return{reference:lC(e.reference,yield t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return e.getClientRects?Array.from(e.getClientRects()):[]},getDimensions:function(e){var t=eC(e);return{width:t.width,height:t.height}},getScale:nC,isElement:FS,isRTL:function(e){return JS(e).direction===`rtl`}};function mC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function hC(e,t,n,r){r===void 0&&(r={});var i=r,a=i.ancestorScroll,o=a===void 0||a,s=i.ancestorResize,c=s===void 0||s,l=i.elementResize,u=l===void 0?typeof ResizeObserver==`function`:l,d=i.layoutShift,f=d===void 0?typeof IntersectionObserver==`function`:d,p=i.animationFrame,m=p!==void 0&&p,h=tC(e),g=o||c?[...h?QS(h):[],...t?QS(t):[]]:[];g.forEach(e=>{o&&e.addEventListener(`scroll`,n),c&&e.addEventListener(`resize`,n)});var _,v=h&&f?function(e,t,n){var r,i=null,a=NS(e);function o(){var e;clearTimeout(r),(e=i)==null||e.disconnect(),i=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();var l=e.getBoundingClientRect(),u=l.left,d=l.top,f=l.width,p=l.height;if(n||t(),f&&p){var m={rootMargin:-oS(d)+`px `+-oS(a.clientWidth-(u+f))+`px `+-oS(a.clientHeight-(d+p))+`px `+-oS(u)+`px`,threshold:iS(0,rS(1,c))||1},h=!0;try{i=new IntersectionObserver(g,I(I({},m),{},{root:a.ownerDocument}))}catch{i=new IntersectionObserver(g,m)}i.observe(e)}function g(t){var n=t[0].intersectionRatio;if(!mC(l,e.getBoundingClientRect()))return s();if(n!==c){if(!h)return s();n?s(!1,n):r=setTimeout(()=>{s(!1,1e-7)},1e3)}h=!1}}var c=MS(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}(h,n,c):null,y=-1,b=null;u&&(b=new ResizeObserver(e=>{var r=ad(e,1)[0];r&&r.target===h&&b&&t&&(b.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var e;(e=b)==null||e.observe(t)})),n()}),h&&!m&&b.observe(h),t&&b.observe(t));var x=m?aC(e):null;return m&&function t(){var r=aC(e);x&&!mC(x,r)&&n(),x=r,_=requestAnimationFrame(t)}(),n(),()=>{var e;g.forEach(e=>{o&&e.removeEventListener(`scroll`,n),c&&e.removeEventListener(`resize`,n)}),v?.(),(e=b)==null||e.disconnect(),b=null,m&&cancelAnimationFrame(_)}}var gC=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,fn:t=>id(function*(){var n,r=t.x,i=t.y,a=t.placement,o=t.middlewareData,s=yield function(e,t){return kS.apply(this,arguments)}(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:I(I({},s),{},{placement:a})}})()}},_C=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,fn:t=>id(function*(){var n=t.x,r=t.y,i=t.placement,a=t.platform,o=lS(e,t),s=o.mainAxis,c=s===void 0||s,l=o.crossAxis,u=l!==void 0&&l,d=o.limiter,f=d===void 0?{fn:e=>({x:e.x,y:e.y})}:d,p=td(o,$u),m={x:n,y:r},h=yield a.detectOverflow(t,p),g=mS(i),_=fS(g),v=m[_],y=m[g],b=(e,t)=>{return n=t+h[e===`y`?`top`:`left`],r=t,i=t-h[e===`y`?`bottom`:`right`],iS(n,rS(r,i));var n,r,i};c&&(v=b(_,v)),u&&(y=b(g,y));var x=f.fn(I(I({},t),{},{[_]:v,[g]:y}));return I(I({},x),{},{data:{x:x.x-n,y:x.y-r,enabled:{[_]:c,[g]:u}}})})()}},vC=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,fn:t=>id(function*(){var n,r=t.placement,i=t.middlewareData,a=t.rects,o=t.initialPlacement,s=t.platform,c=t.elements,l=lS(e,t),u=l.mainAxis,d=u===void 0||u,f=l.crossAxis,p=f===void 0||f,m=l.fallbackPlacements,h=l.fallbackStrategy,g=h===void 0?`bestFit`:h,_=l.fallbackAxisSideDirection,v=_===void 0?`none`:_,y=l.flipAlignment,b=y===void 0||y,x=td(l,Qu);if((n=i.arrow)!=null&&n.alignmentOffset)return{};var S=uS(r),C=mS(o),w=uS(o)===o,T=yield s.isRTL==null?void 0:s.isRTL(c.floating),E=m||(w||!b?[SS(o)]:function(e){var t=SS(e);return[gS(e),t,gS(t)]}(o)),ee=v!==`none`;!m&&ee&&E.push(...xS(o,b,v,T));var te=[o,...E],ne=yield s.detectOverflow(t,x),re=[],ie=i.flip?.overflows||[];if(d&&re.push(ne[S]),p){var ae=function(e,t,n){n===void 0&&(n=!1);var r=dS(e),i=hS(e),a=pS(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=SS(o)),[o,SS(o)]}(r,a,T);re.push(ne[ae[0]],ne[ae[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){var oe=(i.flip?.index||0)+1,se=te[oe];if(se&&(!(p===`alignment`&&C!==mS(se))||ie.every(e=>mS(e.placement)!==C||e.overflows[0]>0)))return{data:{index:oe,overflows:ie},reset:{placement:se}};var D=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!D)switch(g){case`bestFit`:var O=ie.filter(e=>{if(ee){var t=mS(e.placement);return t===C||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];O&&(D=O);break;case`initialPlacement`:D=o}if(r!==D)return{reset:{placement:D}}}return{}})()}};function yC(e){var t,n,r={autoUpdate:!0},i=e,a=t=>I(I(I({},r),e||{}),t||{}),o=e=>{t&&n&&(i=a(e),((e,t,n)=>{var r=new Map,i=n??{},a=I(I(I({},pC),i.platform),{},{_c:r});return DS(e,t,I(I({},i),{},{platform:a}))})(t,n,i).then(e=>{var t;Object.assign(n.style,{position:e.strategy,left:`${e.x}px`,top:`${e.y}px`}),(t=i)!=null&&t.onComputed&&i.onComputed(e)}))},s=e=>{$h(e.subscribe(e=>{t===void 0?(t=e,o()):(Object.assign(t,e),o())}))};return[e=>{if(`subscribe`in e)return s(e),{};t=e,o()},(e,r)=>{var s;n=e,i=a(r),setTimeout(()=>o(r),0),o(r);var c=()=>{s&&=(s(),void 0)},l=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:i||{}).autoUpdate;c(),!1!==e&&vh().then(()=>hC(t,n,()=>o(i),!0===e?{}:e))};return s=l(),{update(e){o(e),s=l(e)},destroy(){c()}}},o]}function bC(e){var t=e.loadOptions,n=e.filterText,r=e.items,i=e.multiple,a=e.value,o=e.itemId,s=e.groupBy,c=e.filterSelectedItems,l=e.itemFilter,u=e.convertStringItemsToObjects,d=e.filterGroupedItems,f=e.label;if(r&&t)return r;if(!r)return[];r&&r.length>0&&typeof r[0]!=`object`&&(r=u(r));var p=r.filter(e=>{var t=l(e[f],n,e);return t&&i&&a!=null&&a.length&&(t=!a.some(t=>!!c&&t[o]===e[o])),t});return s&&(p=d(p)),p}function xC(e){return SC.apply(this,arguments)}function SC(){return(SC=id(function*(e){var t=e.dispatch,n=e.loadOptions,r=e.convertStringItemsToObjects,i=e.filterText,a=yield n(i).catch(e=>{console.warn(`svelte-select loadOptions error :>> `,e),t(`error`,{type:`loadOptions`,details:e})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!=`object`&&(a=r(a)),t(`loaded`,{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}Fv(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var CC=Nh(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);Fv(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var wC=Nh(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function TC(e){X(e,wC())}Fv(`
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
`);var EC=Nh(`<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`);Fv(`
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
`);var DC=Y(`<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>`),OC=Y(`<div class="empty svelte-1ul7oo4">No options</div>`),kC=Y(`<div role="none"><!> <!> <!></div>`),AC=Y(`<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>`,1),jC=Y(`<div class="multi-item-clear svelte-1ul7oo4"><!></div>`),MC=Y(`<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>`),NC=Y(`<div><!></div>`),PC=Y(`<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>`),FC=Y(`<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>`),IC=Y(`<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>`),LC=Y(`<input type="hidden" class="svelte-1ul7oo4"/>`),RC=Y(`<select class="required svelte-1ul7oo4" required="" tabindex="-1" aria-hidden="true"></select>`),zC=Y(`<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>`);function BC(e,t){var n=function(e){var t={};for(var n in e.children&&(t.default=!0),e.$$slots)t[n]=!0;return t}(t);bf(t,!1);var r,i=z(),a=z(),o=z(),s=z(),c=z(),l=z(),u=z(),d=z(),f=z(),p=eg(),m=Q(t,`justValue`,12,null),h=Q(t,`filter`,8,bC),g=Q(t,`getItems`,8,xC),_=Q(t,`id`,8,null),v=Q(t,`name`,8,null),y=Q(t,`container`,12,void 0),b=Q(t,`input`,12,void 0),x=Q(t,`multiple`,8,!1),S=Q(t,`multiFullItemClearable`,8,!1),C=Q(t,`disabled`,8,!1),w=Q(t,`focused`,12,!1),T=Q(t,`value`,12,null),E=Q(t,`filterText`,12,``),ee=Q(t,`placeholder`,8,`Please select`),te=Q(t,`placeholderAlwaysShow`,8,!1),ne=Q(t,`items`,12,null),re=Q(t,`label`,8,`label`),ie=Q(t,`itemFilter`,8,(e,t,n)=>`${e}`.toLowerCase().includes(t.toLowerCase())),ae=Q(t,`groupBy`,8,void 0),oe=Q(t,`groupFilter`,8,e=>e),se=Q(t,`groupHeaderSelectable`,8,!1),D=Q(t,`itemId`,8,`value`),O=Q(t,`loadOptions`,8,void 0),ce=Q(t,`containerStyles`,8,``),le=Q(t,`hasError`,8,!1),ue=Q(t,`filterSelectedItems`,8,!0),de=Q(t,`required`,8,!1),fe=Q(t,`closeListOnChange`,8,!0),pe=Q(t,`clearFilterTextOnBlur`,8,!0),me=Q(t,`createGroupHeaderItem`,8,(e,t)=>({value:e,[re()]:e})),he=()=>G(u),ge=Q(t,`searchable`,8,!0),_e=Q(t,`inputStyles`,8,``),k=Q(t,`clearable`,8,!0),ve=Q(t,`loading`,12,!1),A=Q(t,`listOpen`,12,!1),j=Q(t,`debounce`,8,function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(r),r=setTimeout(e,t)}),ye=Q(t,`debounceWait`,8,300),be=Q(t,`hideEmptyState`,8,!1),M=Q(t,`inputAttributes`,24,()=>({})),N=Q(t,`listAutoWidth`,8,!0),xe=Q(t,`showChevron`,8,!1),Se=Q(t,`listOffset`,8,5),Ce=Q(t,`hoverItemIndex`,12,0),we=Q(t,`floatingConfig`,24,()=>({})),Te=Q(t,`class`,8,``),Ee=z(),De=z(),Oe=z(),ke=z(),Ae=z();function je(e){return e.map((e,t)=>({index:t,value:e,label:`${e}`}))}function Me(e){var t=[],n={};e.forEach(e=>{var r=ae()(e);t.includes(r)||(t.push(r),n[r]=[],r&&n[r].push(Object.assign(me()(r,e),{id:r,groupHeader:!0,selectable:se()}))),n[r].push(Object.assign({groupItem:!!r},e))});var r=[];return oe()(t).forEach(e=>{n[e]&&r.push(...n[e])}),r}function Ne(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;Ce(e<0?0:e),!t&&ae()&&G(u)[Ce()]&&!G(u)[Ce()].selectable&&$e(1)}function Pe(){var e=!0;if(T()){var t=[],n=[];T().forEach(r=>{t.includes(r[D()])?e=!1:(t.push(r[D()]),n.push(r))}),e||T(n)}return e}function Fe(e){var t=e?e[D()]:T()[D()];return ne().find(e=>e[D()]===t)}function Ie(e){return Le.apply(this,arguments)}function Le(){return(Le=id(function*(e){var t=T()[e];T().length===1?T(void 0):T(T().filter(e=>e!==t)),p(`clear`,t)})).apply(this,arguments)}function P(e){if(w())switch(e.stopPropagation(),e.key){case`Escape`:e.preventDefault(),Ue();break;case`Enter`:if(e.preventDefault(),A()){if(G(u).length===0)break;var t=G(u)[Ce()];if(T()&&!x()&&T()[D()]===t[D()]){Ue();break}Ze(G(u)[Ce()])}break;case`ArrowDown`:e.preventDefault(),A()?$e(1):(A(!0),B(Ee,void 0));break;case`ArrowUp`:e.preventDefault(),A()?$e(-1):(A(!0),B(Ee,void 0));break;case`Tab`:if(A()&&w()){if(G(u).length===0||T()&&T()[D()]===G(u)[Ce()][D()])return Ue();e.preventDefault(),Ze(G(u)[Ce()]),Ue()}break;case`Backspace`:if(!x()||E().length>0)return;if(x()&&T()&&T().length>0){if(Ie(G(Ee)===void 0?T().length-1:G(Ee)),G(Ee)===0||G(Ee)===void 0)break;B(Ee,T().length>G(Ee)?G(Ee)-1:void 0)}break;case`ArrowLeft`:if(!T()||!x()||E().length>0)return;G(Ee)===void 0?B(Ee,T().length-1):T().length>G(Ee)&&G(Ee)!==0&&B(Ee,G(Ee)-1);break;case`ArrowRight`:if(!T()||!x()||E().length>0||G(Ee)===void 0)return;G(Ee)===T().length-1?B(Ee,void 0):G(Ee)<T().length-1&&B(Ee,G(Ee)+1)}}function Re(e){var t;w()&&b()===document?.activeElement||(e&&p(`focus`,e),(t=b())==null||t.focus(),w(!0))}function ze(e){return Be.apply(this,arguments)}function Be(){return(Be=id(function*(e){var t;Xe||(A()||w())&&(p(`blur`,e),Ue(),w(!1),B(Ee,void 0),(t=b())==null||t.blur())})).apply(this,arguments)}function Ve(){if(!C())return E().length>0?A(!0):void A(!A())}function He(){p(`clear`,T()),T(void 0),Ue(),Re()}function Ue(){pe()&&E(``),A(!1)}tg(id(function*(){B(De,T()),B(Oe,E()),B(ke,x())})),Qh(()=>{A()&&w(!0),w()&&b()&&b().focus()});var We=Q(t,`ariaValues`,8,e=>`Option ${e}, selected.`),Ge=Q(t,`ariaListOpen`,8,(e,t)=>`You are currently focused on option ${e}. There are ${t} results available.`),Ke=Q(t,`ariaFocused`,8,()=>`Select is focused, type to refine list, press down to open the menu.`),qe,Je=z(null);function Ye(){clearTimeout(qe),qe=setTimeout(()=>{Xe=!1},100)}$h(()=>{var e;(e=G(Je))==null||e.remove()});var Xe=!1;function Ze(e){e&&!1!==e.selectable&&function(e){if(e){E(``);var t=Object.assign({},e);if(t.groupHeader&&!t.selectable)return;T(x()?T()?T().concat([t]):[t]:T(t)),setTimeout(()=>{fe()&&Ue(),B(Ee,void 0),p(`change`,T()),p(`select`,e)})}}(e)}function Qe(e){Xe||Ce(e)}function $e(e){if(G(u).filter(e=>!Object.hasOwn(e,`selectable`)||!0===e.selectable).length===0)return Ce(0);e>0&&Ce()===G(u).length-1?Ce(0):e<0&&Ce()===0?Ce(G(u).length-1):Ce(Ce()+e);var t=G(u)[Ce()];t&&!1===t.selectable&&(e!==1&&e!==-1||$e(e))}function et(e,t,n){if(!x())return t&&t[n]===e[n]}var tt=rt,nt=rt;function rt(e){return{update(t){t.scroll&&(Ye(),e.scrollIntoView({behavior:`auto`,block:`nearest`}))}}}var it=z({strategy:`absolute`,placement:`bottom-start`,middleware:[gC(Se()),vC(),_C()],autoUpdate:!1}),at=ad(yC(G(it)),3),ot=at[0],st=at[1],ct=at[2],lt=z(!0);U(()=>(q(ne()),q(T())),()=>{ne(),T()&&function(){typeof T()==`string`?T((ne()||[]).find(e=>e[D()]===T())||{[D()]:T(),label:T()}):x()&&Array.isArray(T())&&T().length>0&&T(T().map(e=>typeof e==`string`?{value:e,label:e}:e))}()}),U(()=>(q(M()),q(ge())),()=>{!M()&&ge()||(B(Ae,Object.assign({autocapitalize:`none`,autocomplete:`off`,autocorrect:`off`,spellcheck:!1,tabindex:0,type:`text`,"aria-autocomplete":`list`},M())),_()&&pm(Ae,G(Ae).id=_()),ge()||pm(Ae,G(Ae).readonly=!0))}),U(()=>q(x()),()=>{x()&&T()&&(Array.isArray(T())?T([...T()]):T([T()]))}),U(()=>(G(ke),q(x())),()=>{G(ke)&&!x()&&T()&&T(null)}),U(()=>(q(x()),q(T())),()=>{x()&&T()&&T().length>1&&Pe()}),U(()=>q(T()),()=>{T()&&(x()?JSON.stringify(T())!==JSON.stringify(G(De))&&Pe()&&p(`input`,T()):G(De)&&JSON.stringify(T()[D()])===JSON.stringify(G(De)[D()])||p(`input`,T()))}),U(()=>(q(T()),q(x()),G(De)),()=>{!T()&&x()&&G(De)&&p(`input`,T())}),U(()=>(q(w()),q(b())),()=>{!w()&&b()&&Ue()}),U(()=>(q(E()),G(Oe)),()=>{E()!==G(Oe)&&(O()||E().length!==0)&&(O()?j()(id(function*(){ve(!0);var e=yield g()({dispatch:p,loadOptions:O(),convertStringItemsToObjects:je,filterText:E()});e?(ve(e.loading),A(A()?e.listOpen:E().length>0),w(A()&&e.focused),ne(ae()?Me(e.filteredItems):e.filteredItems)):(ve(!1),w(!0),A(!0))}),ye()):(A(!0),x()&&B(Ee,void 0)))}),U(()=>(q(h()),q(O()),q(E()),q(ne()),q(x()),q(T()),q(D()),q(ae()),q(re()),q(ue()),q(ie())),()=>{B(u,h()({loadOptions:O(),filterText:E(),items:ne(),multiple:x(),value:T(),itemId:D(),groupBy:ae(),label:re(),filterSelectedItems:ue(),itemFilter:ie(),convertStringItemsToObjects:je,filterGroupedItems:Me}))}),U(()=>(q(x()),q(A()),q(T()),G(u)),()=>{!x()&&A()&&T()&&G(u)&&Ne(G(u).findIndex(e=>e[D()]===T()[D()]),!0)}),U(()=>(q(A()),q(x())),()=>{A()&&x()&&Ce(0)}),U(()=>q(E()),()=>{E()&&Ce(0)}),U(()=>q(Ce()),()=>{p(`hoverItem`,Ce())}),U(()=>(q(x()),q(T())),()=>{B(i,x()?T()&&T().length>0:T())}),U(()=>(G(i),q(E())),()=>{B(a,G(i)&&E().length>0)}),U(()=>(G(i),q(k()),q(C()),q(ve())),()=>{B(o,G(i)&&k()&&!C()&&!ve())}),U(()=>(q(te()),q(x()),q(ee()),q(T())),()=>{B(s,te()&&x()||x()&&T()?.length===0?ee():T()?``:ee())}),U(()=>(q(T()),q(x())),()=>{var e,t;B(c,T()?(e=x(),t=void 0,t=e&&T().length>0?T().map(e=>e[re()]).join(`, `):T()[re()],We()(t)):``)}),U(()=>(G(u),q(Ce()),q(w()),q(A())),()=>{B(l,function(){if(!G(u)||G(u).length===0)return``;var e=G(u)[Ce()];if(A()&&e){var t=G(u)?G(u).length:0;return Ge()(e[re()],t)}return Ke()()}((G(u),Ce(),w(),A())))}),U(()=>q(ne()),()=>{(function(e){e&&e.length!==0&&!e.some(e=>typeof e!=`object`)&&T()&&(x()?!T().some(e=>!e||!e[D()]):T()[D()])&&(Array.isArray(T())?T(T().map(e=>Fe(e)||e)):T(Fe()||T()))})(ne())}),U(()=>(q(x()),q(T()),q(D())),()=>{m((x(),T(),D(),x()?T()?T().map(e=>e[D()]):null:T()?T()[D()]:T()))}),U(()=>(q(x()),G(De),q(T())),()=>{x()||!G(De)||T()||p(`input`,T())}),U(()=>(q(A()),G(u),q(x()),q(T())),()=>{A()&&G(u)&&!x()&&!T()&&Ne()}),U(()=>G(u),()=>{(function(e){A()&&p(`filter`,e)})(G(u))}),U(()=>(q(y()),q(we()),G(it)),()=>{y()&&we()&&ct(Object.assign(G(it),we()))}),U(()=>G(Je),()=>{B(d,!!G(Je))}),U(()=>(G(Je),q(A())),()=>{(function(e,t){if(!e||!t)return B(lt,!0);setTimeout(()=>{B(lt,!1)},0)})(G(Je),A())}),U(()=>(q(A()),q(y()),G(Je)),()=>{var e;A()&&y()&&G(Je)&&(e=y().getBoundingClientRect().width,pm(Je,G(Je).style.width=N()?e+`px`:`auto`))}),U(()=>q(Ce()),()=>{B(f,Ce())}),U(()=>(q(b()),q(A()),q(w())),()=>{b()&&A()&&!w()&&Re()}),U(()=>(q(y()),q(we())),()=>{y()&&we()?.autoUpdate===void 0&&pm(it,G(it).autoUpdate=!0)}),Nm();var ut={getFilteredItems:he,handleClear:He};Qg();var dt,ft=zC();J(`click`,im,function(e){var t;A()||w()||!y()||y().contains(e.target)||(t=G(Je))!=null&&t.contains(e.target)||ze()}),J(`keydown`,im,P);var pt=V(ft),mt=e=>{var r,i=kC(),a=V(i),o=e=>{var n=Fh();mg(wm(n),t,`list-prepend`,{},null),X(e,n)};Z(a,e=>{K(()=>n[`list-prepend`])&&e(o)});var s=H(a,2),c=e=>{var n=Fh();mg(wm(n),t,`list`,{get filteredItems(){return G(u)}},null),X(e,n)},l=e=>{var n=Fh();cg(wm(n),1,()=>G(u),og,(e,n,r)=>{var i,a=DC(),o=V(a);mg(V(o),t,`item`,{get item(){return G(n)},index:r},e=>{var t=Ph();W(()=>Bh(t,(G(n),q(re()),K(()=>G(n)?.[re()])))),X(e,t)}),gg(o,(e,t)=>tt?.(e),()=>({scroll:et(G(n),T(),D()),listDom:G(d)})),gg(o,(e,t)=>nt?.(e),()=>({scroll:G(f)===r,listDom:G(d)})),W(e=>i=Cg(o,1,`item svelte-1ul7oo4`,null,i,e),[()=>{var e;return{"list-group-title":G(n).groupHeader,active:et(G(n),T(),D()),first:(e=r,e===0),hover:Ce()===r,"group-item":G(n).groupItem,"not-selectable":!1===G(n)?.selectable}}]),J(`mouseover`,a,()=>Qe(r)),J(`focus`,a,()=>Qe(r)),J(`click`,a,Xg(()=>function(e){var t=e.item,n=e.i;if(!1!==t?.selectable)return T()&&!x()&&T()[D()]===t[D()]?Ue():void(function(e){return e.groupHeader&&e.selectable||e.selectable||!e.hasOwnProperty(`selectable`)}(t)&&(Ce(n),Ze(t)))}({item:G(n),i:r}))),J(`keydown`,a,Zg(Xg(function(e){t_.call(this,t,e)}))),X(e,a)}),X(e,n)},p=e=>{var n=Fh();mg(wm(n),t,`empty`,{},e=>{X(e,OC())}),X(e,n)};Z(s,e=>{K(()=>n.list)?e(c):(G(u),K(()=>G(u).length>0)?e(l,1):be()||e(p,2))});var m=H(s,2),h=e=>{var n=Fh();mg(wm(n),t,`list-append`,{},null),X(e,n)};Z(m,e=>{K(()=>n[`list-append`])&&e(h)}),gg(i,e=>st?.(e)),Yg(i,e=>B(Je,e),()=>G(Je)),Mm(()=>J(`scroll`,i,Ye)),Mm(()=>J(`pointerup`,i,Zg(Xg(function(e){t_.call(this,t,e)})))),Mm(()=>J(`mousedown`,i,Zg(Xg(function(e){t_.call(this,t,e)})))),W(()=>r=Cg(i,1,`svelte-select-list svelte-1ul7oo4`,null,r,{prefloat:G(lt)})),X(e,i)};Z(pt,e=>{A()&&e(mt)});var ht=H(pt,2),gt=V(ht),_t=e=>{var t=AC(),n=wm(t),r=V(n),i=V(H(n,2));W(()=>{Bh(r,G(c)),Bh(i,G(l))}),X(e,t)};Z(gt,e=>{w()&&e(_t)});var vt=H(ht,2);mg(V(vt),t,`prepend`,{},null);var yt=H(vt,2),bt=V(yt),F=e=>{var n=Fh(),r=wm(n),i=e=>{var n=Fh();cg(wm(n),1,T,og,(e,n,r)=>{var i,a=MC(),o=V(a);mg(V(o),t,`selection`,{get selection(){return G(n)},index:r},e=>{var t=Ph();W(()=>Bh(t,(G(n),q(re()),K(()=>G(n)[re()])))),X(e,t)});var s=H(o,2),c=e=>{var n=jC();mg(V(n),t,`multi-clear-icon`,{},e=>{TC(e)}),J(`pointerup`,n,Zg(Xg(()=>Ie(r)))),X(e,n)};Z(s,e=>{C()||S()||!TC||e(c)}),W(()=>i=Cg(a,1,`multi-item svelte-1ul7oo4`,null,i,{active:G(Ee)===r,disabled:C()})),J(`click`,a,Zg(()=>S()?Ie(r):{})),J(`keydown`,a,Zg(Xg(function(e){t_.call(this,t,e)}))),X(e,a)}),X(e,n)},o=e=>{var n,r=NC();mg(V(r),t,`selection`,{get selection(){return T()}},e=>{var t=Ph();W(()=>Bh(t,(q(T()),q(re()),K(()=>T()[re()])))),X(e,t)}),W(()=>n=Cg(r,1,`selected-item svelte-1ul7oo4`,null,n,{"hide-selected-item":G(a)})),X(e,r)};Z(r,e=>{x()?e(i):e(o,-1)}),X(e,n)};Z(bt,e=>{G(i)&&e(F)});var xt=H(bt,2);Bg(xt,()=>I(I({readOnly:!ge()},G(Ae)),{},{placeholder:G(s),style:_e(),disabled:C()}),void 0,void 0,void 0,`svelte-1ul7oo4`,!0),Yg(xt,e=>b(e),()=>b());var St=H(yt,2),Ct=V(St),wt=e=>{var n=PC();mg(V(n),t,`loading-icon`,{},e=>{(function(e){X(e,EC())})(e)}),X(e,n)};Z(Ct,e=>{ve()&&e(wt)});var Tt=H(Ct,2),Et=e=>{var n=FC();mg(V(n),t,`clear-icon`,{},e=>{TC(e)}),J(`click`,n,He),X(e,n)};Z(Tt,e=>{G(o)&&e(Et)});var Dt=H(Tt,2),Ot=e=>{var n=IC();mg(V(n),t,`chevron-icon`,{get listOpen(){return A()}},e=>{(function(e){X(e,CC())})(e)}),X(e,n)};Z(Dt,e=>{xe()&&e(Ot)});var kt=H(St,2);mg(kt,t,`input-hidden`,{get value(){return T()}},e=>{var t=LC();W(e=>{Rg(t,`name`,v()),Lg(t,e)},[()=>(q(T()),K(()=>T()?JSON.stringify(T()):null))]),X(e,t)});var At=H(kt,2),jt=e=>{var n=Fh();mg(wm(n),t,`required`,{get value(){return T()}},e=>{X(e,RC())}),X(e,n)};return Z(At,e=>{q(de()),q(T()),K(()=>de()&&(!T()||T().length===0))&&e(jt)}),Mm(()=>J(`pointerup`,ft,Zg(Ve))),Yg(ft,e=>y(e),()=>y()),gg(ft,e=>ot?.(e)),W(()=>{dt=Cg(ft,1,`svelte-select ${Te()??``}`,`svelte-1ul7oo4`,dt,{multi:x(),disabled:C(),focused:w(),"list-open":A(),"show-chevron":xe(),error:le()}),Tg(ft,ce())}),J(`keydown`,xt,P),J(`blur`,xt,ze),J(`focus`,xt,Re),Wg(xt,E),X(e,ft),qg(t,`getFilteredItems`,he),qg(t,`handleClear`,He),xf(ut)}Fv(`/* over all fonts, sizes, and colors */
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
}`);var VC=Y(`<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>`);function HC(e,t){var n,r,i;bf(t,!1);var a=z(void 0,!0),o=z(void 0,!0),s=z(void 0,!0),c=z(void 0,!0),l=z(void 0,!0),u=z(void 0,!0),d=o_(`jsoneditor:TransformWizard`),f=Q(t,`json`,9),p=Q(t,`queryOptions`,29,()=>({})),m=Q(t,`onChange`,9),h=[`==`,`!=`,`<`,`<=`,`>`,`>=`].map(e=>({value:e,label:e})),g=[{value:`asc`,label:`ascending`},{value:`desc`,label:`descending`}],_=z((n=p())!=null&&(n=n.filter)!=null&&n.path?$x(p().filter.path):void 0,!0),v=z(h.find(e=>e.value===p().filter?.relation)??h[0],!0),y=z(((r=p())==null||(r=r.filter)==null?void 0:r.value)||``,!0),b=z((i=p())!=null&&(i=i.sort)!=null&&i.path?$x(p().sort.path):void 0,!0),x=z(g.find(e=>e.value===p().sort?.direction)??g[0],!0);U(()=>q(f()),()=>{B(a,Array.isArray(f()))}),U(()=>(G(a),q(f())),()=>{B(o,G(a)?D_(f()):[])}),U(()=>(G(a),q(f())),()=>{B(s,G(a)?D_(f(),!0):[])}),U(()=>(G(o),$x),()=>{B(c,G(o).map($x))}),U(()=>(G(s),$x),()=>{B(l,G(s)?G(s).map($x):[])}),U(()=>(q(p()),G(l),hc),()=>{var e;B(u,(e=p())!=null&&(e=e.projection)!=null&&e.paths&&G(l)?p().projection.paths.map(e=>G(l).find(t=>hc(t.value,e))).filter(e=>!!e):void 0)}),U(()=>G(_),()=>{var e=G(_)?.value,t;hc((t=p())==null||(t=t.filter)==null?void 0:t.path,e)||(d(`changeFilterPath`,e),p(xt(p(),[`filter`,`path`],e,!0)),m()(p()))}),U(()=>G(v),()=>{var e=G(v)?.value,t;hc((t=p())==null||(t=t.filter)==null?void 0:t.relation,e)||(d(`changeFilterRelation`,e),p(xt(p(),[`filter`,`relation`],e,!0)),m()(p()))}),U(()=>G(y),()=>{var e=G(y),t;hc((t=p())==null||(t=t.filter)==null?void 0:t.value,e)||(d(`changeFilterValue`,e),p(xt(p(),[`filter`,`value`],e,!0)),m()(p()))}),U(()=>G(b),()=>{var e=G(b)?.value,t;hc((t=p())==null||(t=t.sort)==null?void 0:t.path,e)||(d(`changeSortPath`,e),p(xt(p(),[`sort`,`path`],e,!0)),m()(p()))}),U(()=>G(x),()=>{var e=G(x)?.value,t;hc((t=p())==null||(t=t.sort)==null?void 0:t.direction,e)||(d(`changeSortDirection`,e),p(xt(p(),[`sort`,`direction`],e,!0)),m()(p()))}),U(()=>G(u),()=>{(function(e){var t;hc((t=p())==null||(t=t.projection)==null?void 0:t.paths,e)||(d(`changeProjectionPaths`,e),p(xt(p(),[`projection`,`paths`],e,!0)),m()(p()))})(G(u)?G(u).map(e=>e.value):void 0)}),Nm(),Qg(!0);var S=VC(),C=V(V(S)),w=V(V(H(V(C))));BC(w,{class:`jse-filter-path`,showChevron:!0,get items(){return G(c)},get value(){return G(_)},set value(e){B(_,e)},$$legacy:!0});var T=H(w,2);BC(T,{class:`jse-filter-relation`,showChevron:!0,clearable:!1,get items(){return h},get value(){return G(v)},set value(e){B(v,e)},$$legacy:!0});var E=H(T,2),ee=H(C),te=V(V(H(V(ee))));BC(te,{class:`jse-sort-path`,showChevron:!0,get items(){return G(c)},get value(){return G(b)},set value(e){B(b,e)},$$legacy:!0}),BC(H(te,2),{class:`jse-sort-direction`,showChevron:!0,clearable:!1,get items(){return g},get value(){return G(x)},set value(e){B(x,e)},$$legacy:!0}),BC(V(V(H(V(H(ee))))),{class:`jse-projection-paths`,multiple:!0,showChevron:!0,get items(){return G(l)},get value(){return G(u)},set value(e){B(u,e)},$$legacy:!0}),Wg(E,()=>G(y),e=>B(y,e)),X(e,S),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var UC=Y(`<button type="button"><!> </button>`),WC=Y(`<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>`);function GC(e,t){bf(t,!1);var n=Q(t,`queryLanguages`,8),r=Q(t,`queryLanguageId`,12),i=Q(t,`onChangeQueryLanguage`,8);Qg();var a=WC();cg(V(a),5,n,og,(e,t)=>{var n,a=UC(),o=V(a),s=e=>{Qv(e,{get data(){return Sl}})},c=e=>{Qv(e,{get data(){return wl}})};Z(o,e=>{G(t),q(r()),K(()=>G(t).id===r())?e(s):e(c,-1)});var l=H(o);W(()=>{var e;n=Cg(a,1,`jse-query-language svelte-jrd4q2`,null,n,{selected:G(t).id===r()}),Rg(a,`title`,(G(t),K(()=>`Select ${G(t).name} as query language`))),Bh(l,` ${(G(t),e=K(()=>G(t).name))!==null&&e!==void 0?e:``}`)}),J(`click`,a,()=>{e=G(t).id,r(e),i()(e);return;var e}),X(e,a)}),X(e,a),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var KC=Y(`<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>`),qC=Y(`<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>`);function JC(e,t){bf(t,!1);var n=Q(t,`title`,9,`Modal`),r=Q(t,`fullScreenButton`,9,!1),i=Q(t,`fullscreen`,13,!1),a=Q(t,`onClose`,9,void 0);Qg(!0);var o=qC(),s=V(o),c=V(s),l=H(s,2);mg(l,t,`actions`,{},null);var u=H(l,2),d=e=>{var t=KC(),n=V(t),r=R(()=>i()?au:Wl);Qv(n,{get data(){return G(r)}}),J(`click`,t,()=>i(!i())),X(e,t)};Z(u,e=>{r()&&e(d)});var f=H(u,2);Qv(V(f),{get data(){return Xl}}),W(()=>Bh(c,n())),J(`click`,f,()=>a()?.()),X(e,o),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var YC=Y(`<button slot="actions" type="button" title="Select a query language"><!></button>`),XC=o_(`jsoneditor:AutoScrollHandler`);function ZC(e){var t,n;function r(e){return e<20?200:e<50?400:1200}function i(){if(e){var n=.05*(t||0);e.scrollTop+=n}}function a(e){n&&e===t||(o(),XC(`startAutoScroll`,e),t=e,n=setInterval(i,50))}function o(){n&&(XC(`stopAutoScroll`),clearInterval(n),n=void 0,t=void 0)}return XC(`createAutoScrollHandler`,e),{onDrag:function(t){if(e){var n=t.clientY,i=e.getBoundingClientRect(),s=i.top,c=i.bottom;n<s?a(-r(s-n)):n>c?a(r(n-c)):o()}},onDragEnd:function(){o()}}}var QC=(e,t,n,r)=>(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t,$C=()=>{var e,t,n,r,i,a,o,s,c,l,u,d,f;function p(t){return t.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function m(t){e.scrollTo?e.scrollTo(e.scrollLeft,t):e.scrollTop=t}function h(e){l||=e,m(a(u=e-l,n,s,c)),f=!0,u<c?requestAnimationFrame(h):function(){m(n+s),t&&o&&(t.setAttribute(`tabindex`,`-1`),t.focus()),typeof d==`function`&&d(),l=0,f=!1}()}return function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,i=m.offset||0,d=m.callback,a=m.easing||QC,o=m.a11y||!1,typeof m.container){case`object`:e=m.container;break;case`string`:e=document.querySelector(m.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof u){case`number`:t=void 0,o=!1,r=n+u;break;case`object`:r=p(t=u);break;case`string`:t=document.querySelector(u),r=p(t)}switch(s=r-n+i,typeof m.duration){case`number`:c=m.duration;break;case`function`:c=m.duration(s)}f?l=0:requestAnimationFrame(h)}};function ew(e,t){var n=Date.now(),r=e();return t(Date.now()-n),r}var tw=o_(`validation`),nw={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function rw(e,t,n,r){return sb(e,t,n,r,nw)}function iw(e,t,n,r){if(tw(`validateJSON`),!t)return[];if(n!==r){var i=n.stringify(e);return t(i===void 0?void 0:r.parse(i))}return t(e)}function aw(e,t,n,r){if(tw(`validateText`),e.length>104857600)return{validationErrors:[{path:[],message:`Validation turned off: the document is too large`,severity:rv.info}]};if(e.length!==0)try{var i=ew(()=>n.parse(e),e=>tw(`validate: parsed json in ${e} ms`));if(!t)return;var a=n===r?i:ew(()=>r.parse(e),e=>tw(`validate: parsed json with the validationParser in ${e} ms`)),o=ew(()=>t(a),e=>tw(`validate: validated json in ${e} ms`));return mc(o)?void 0:{validationErrors:o}}catch(t){var s=ew(()=>function(e,t){if(e.length>uy)return!1;try{return t.parse(Hn(e)),!0}catch{return!1}}(e,n),e=>tw(`validate: checked whether repairable in ${e} ms`));return{parseError:z_(e,t.message||t.toString()),isRepairable:s}}}var ow=o_(`jsoneditor:FocusTracker`);function sw(e){var t,n=e.onMount,r=e.onDestroy,i=e.getWindow,a=e.hasFocus,o=e.onFocus,s=e.onBlur,c=!1;function l(){var e=a();e&&(clearTimeout(t),c||=(ow(`focus`),o(),e))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(ow(`blur`),c=!1,s())}))}n(()=>{ow(`mount FocusTracker`);var e=i();e&&(e.addEventListener(`focusin`,l,!0),e.addEventListener(`focusout`,u,!0))}),r(()=>{ow(`destroy FocusTracker`);var e=i();e&&(e.removeEventListener(`focusin`,l,!0),e.removeEventListener(`focusout`,u,!0))})}Fv(`/* over all fonts, sizes, and colors */
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
  background: var(--jse-message-success-background, var(--message-success-background, #9ac45d));
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
}`);var cw=Y(`<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>`),lw=Y(`<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>`);function uw(e,t){bf(t,!1);var n=Q(t,`type`,9,`success`),r=Q(t,`icon`,9,void 0),i=Q(t,`message`,9,void 0),a=Q(t,`actions`,25,()=>[]),o=Q(t,`onClick`,9,void 0),s=Q(t,`onClose`,9,void 0);s()&&$h(s()),Qg(!0);var c,l=lw(),u=V(l),d=V(V(u)),f=e=>{Qv(e,{get data(){return r()}})};Z(d,e=>{r()&&e(f)});var p=H(d);cg(H(u,2),5,a,og,(e,t)=>{var n=cw(),r=V(n),i=e=>{Qv(e,{get data(){return G(t),K(()=>G(t).icon)}})};Z(r,e=>{G(t),K(()=>G(t).icon)&&e(i)});var a=H(r);W(()=>{var e;Rg(n,`title`,(G(t),K(()=>G(t).title))),n.disabled=(G(t),K(()=>G(t).disabled)),Bh(a,` ${(G(t),e=K(()=>G(t).text))!==null&&e!==void 0?e:``}`)}),J(`click`,n,()=>{G(t).onClick&&G(t).onClick()}),J(`mousedown`,n,()=>{G(t).onMouseDown&&G(t).onMouseDown()}),X(e,n)}),W(()=>{Cg(l,1,`jse-message jse-${n()??``}`,`svelte-cbvd26`),c=Cg(u,1,`jse-text svelte-cbvd26`,null,c,{"jse-clickable":!!o()}),Bh(p,` ${i()??``}`)}),J(`click`,u,function(){o()&&o()()}),X(e,l),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var dw=Y(`<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>`),fw=Y(`<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>`),pw=Y(`<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>`),mw=Y(`<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>`),hw=Y(`<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>`),gw=Y(`<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>`);function _w(e,t){bf(t,!1);var n=z(void 0,!0),r=Q(t,`validationErrors`,9),i=Q(t,`selectError`,9),a=z(!0,!0);function o(){B(a,!1)}function s(){B(a,!0)}U(()=>q(r()),()=>{B(n,r().length)}),Nm(),Qg(!0);var c=Fh(),l=wm(c),u=e=>{var t=gw(),c=V(t),l=e=>{var t=mw(),a=V(V(t));cg(a,1,()=>(q(k_),q(r()),q(sy),K(()=>k_(r(),sy))),og,(e,t,n)=>{var a=fw(),s=V(a);Qv(V(s),{get data(){return tu}});var c=H(s),l=V(c),u=H(c),d=V(u),f=V(H(u)),p=e=>{var t=dw();Qv(V(t),{get data(){return $l}}),J(`click`,t,Xg(o)),X(e,t)};Z(f,e=>{q(r()),K(()=>n===0&&r().length>1)&&e(p)}),W(e=>{var n;Cg(a,1,`jse-validation-${(G(t),n=K(()=>G(t).severity))!==null&&n!==void 0?n:``}`,`svelte-1342rh4`),Bh(l,e),Bh(d,(G(t),K(()=>G(t).message)))},[()=>(q(Zx),G(t),K(()=>Zx(G(t).path)))]),J(`click`,a,()=>{setTimeout(()=>i()(G(t)))}),X(e,a)});var s=H(a),c=e=>{var t=pw(),r=V(H(V(t),2));W(()=>Bh(r,`(and ${G(n)-sy} more errors)`)),X(e,t)};Z(s,e=>{G(n)>sy&&e(c)}),X(e,t)},u=e=>{var t=hw(),i=V(V(t)),a=V(i);Qv(V(a),{get data(){return tu}});var o=V(H(a));Qv(V(H(o)),{get data(){return Hl}}),W(e=>{Cg(i,1,`jse-validation-${e??``}`,`svelte-1342rh4`),Bh(o,`${G(n)??``} validation errors `)},[()=>(q(r()),K(()=>{return e=r(),[rv.error,rv.warning,rv.info].find(t=>e.some(e=>e.severity===t));var e}))]),J(`click`,i,s),X(e,t)};Z(c,e=>{G(a)||G(n)===1?e(l):e(u,-1)}),X(e,t)},d=pp(()=>(q(mc),q(r()),K(()=>!mc(r()))));Z(l,e=>{G(d)&&e(u)}),X(e,c),xf()}function vw(e,t){if(e)return e.addEventListener(`keydown`,n),{destroy(){e.removeEventListener(`keydown`,n)}};function n(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),t())}}Fv(`/* over all fonts, sizes, and colors */
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
}`);var yw=Y(`<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>`);function bw(e,t){bf(t,!1);var n=Q(t,`className`,8,void 0),r=Q(t,`fullscreen`,8,!1),i=Q(t,`onClose`,8),a=z();function o(){i()()}Qh(()=>G(a).showModal()),$h(()=>G(a).close()),Qg();var s,c=yw();mg(V(V(c)),t,`default`,{},null),Yg(c,e=>B(a,e),()=>G(a)),Mm(()=>J(`close`,c,o)),Mm(()=>{return J(`pointerdown`,c,(e=o,function(){var t=[...arguments];t[0].target===this&&e?.apply(this,t)}));var e}),Mm(()=>J(`cancel`,c,Zg(function(e){t_.call(this,t,e)}))),gg(c,(e,t)=>vw?.(e,t),()=>o),W(e=>s=Cg(c,1,e,`svelte-2aoco4`,s,{"jse-fullscreen":r()}),[()=>yg((q(cx),q(n()),K(()=>cx(`jse-modal`,n()))))]),X(e,c),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var xw=Y(`<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>`,1);function Sw(e,t){bf(t,!1);var n=Q(t,`onClose`,9),r=jv()?`⌘`:`Ctrl`;Qg(!0),bw(e,{get onClose(){return n()},className:`jse-copy-paste`,children:(e,t)=>{var i=xw(),a=wm(i);JC(a,{title:`Copying and pasting`,get onClose(){return n()}});var o=H(V(H(a,2)),2),s=V(o),c=V(V(s)),l=H(s,2),u=V(V(l)),d=V(V(H(l,2))),f=V(H(o,2));W(()=>{Bh(c,`${r}+C`),Bh(u,`${r}+X`),Bh(d,`${r}+V`)}),J(`click`,f,function(){for(var e,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];(e=n())==null||e.apply(this,r)}),X(e,i)},$$slots:{default:!0}}),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Cw=Y(`<div class="jse-separator svelte-3erbu0"></div>`),ww=Y(`<div class="jse-space svelte-3erbu0"></div>`),Tw=Y(`<button type="button"><!> <!></button>`),Ew=Y(`<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>`);function Dw(e,t){bf(t,!1);var n=Q(t,`items`,25,()=>[]);Qg(!0);var r=Ew(),i=V(r);mg(i,t,`left`,{},null);var a=H(i,2);cg(a,1,n,og,(e,t)=>{var n=Fh(),r=wm(n),i=e=>{X(e,Cw())},a=pp(()=>(q(Dy),G(t),K(()=>Dy(G(t))))),o=e=>{X(e,ww())},s=pp(()=>(q(Ey),G(t),K(()=>Ey(G(t))))),c=e=>{var n=Tw(),r=V(n),i=e=>{Qv(e,{get data(){return G(t),K(()=>G(t).icon)}})};Z(r,e=>{G(t),K(()=>G(t).icon)&&e(i)});var a=H(r,2),o=e=>{var n=Ph();W(()=>Bh(n,(G(t),K(()=>G(t).text)))),X(e,n)};Z(a,e=>{G(t),K(()=>G(t).text)&&e(o)}),W(()=>{var e;Cg(n,1,`jse-button ${(G(t),e=K(()=>G(t).className))!==null&&e!==void 0?e:``}`,`svelte-3erbu0`),Rg(n,`title`,(G(t),K(()=>G(t).title))),n.disabled=(G(t),K(()=>G(t).disabled||!1))}),J(`click`,n,function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=G(t).onClick)==null||e.apply(this,r)}),X(e,n)},l=pp(()=>(q(ky),G(t),K(()=>ky(G(t))))),u=e=>{var n=Ph();W(e=>Bh(n,e),[()=>(G(t),K(()=>function(e){return console.error(`Unknown type of menu item`,e),`???`}(G(t))))]),X(e,n)};Z(r,e=>{G(a)?e(i):G(s)?e(o,1):G(l)?e(c,2):e(u,-1)}),X(e,n)}),mg(H(a,2),t,`right`,{},null),X(e,r),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Ow=Y(`<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>`),kw=Y(`<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>`);function Aw(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=z(void 0,!0),o=z(void 0,!0),s=z(void 0,!0),c=Q(t,`text`,13,``),l=Q(t,`readOnly`,9,!1),u=Q(t,`onParse`,9),d=Q(t,`onRepair`,9),f=Q(t,`onChange`,9,void 0),p=Q(t,`onApply`,9),m=Q(t,`onCancel`,9),h=o_(`jsoneditor:JSONRepair`),g=z(void 0,!0);function _(){if(G(g)&&G(n)){var e=G(n).position===void 0?0:G(n).position;G(g).setSelectionRange(e,e),G(g).focus()}}function v(){p()(c())}function y(){try{c(d()(c())),f()&&f()(c())}catch{}}var b=z(void 0,!0);U(()=>q(c()),()=>{B(n,function(e){try{u()(e);return}catch(t){return z_(e,t.message)}}(c()))}),U(()=>q(c()),()=>{B(r,function(e){try{return d()(e),!0}catch{return!1}}(c()))}),U(()=>G(n),()=>{h(`error`,G(n))}),U(()=>q(m()),()=>{B(b,[{type:`space`},{type:`button`,icon:Xl,title:`Cancel repair`,className:`jse-cancel`,onClick:m()}])}),U(()=>fu,()=>{B(i,{icon:fu,text:`Show me`,title:`Scroll to the error location`,onClick:_})}),U(()=>Gl,()=>{B(a,{icon:Gl,text:`Auto repair`,title:`Automatically repair JSON`,onClick:y})}),U(()=>(G(r),G(i),G(a)),()=>{B(o,G(r)?[G(i),G(a)]:[G(i)])}),U(()=>q(l()),()=>{B(s,[{icon:ql,text:`Apply`,title:`Apply fixed JSON`,disabled:l(),onClick:v}])}),Nm(),Qg(!0);var x=kw(),S=V(x);Dw(S,{get items(){return G(b)},$$slots:{left:(e,t)=>{X(e,Ow())}}});var C=H(S,2),w=e=>{var t=R(()=>(G(n),K(()=>`Cannot parse JSON: ${G(n).message}`)));uw(e,{type:`error`,get icon(){return tu},get message(){return G(t)},get actions(){return G(o)}})},T=e=>{uw(e,{type:`success`,message:`JSON is valid now and can be parsed.`,get actions(){return G(s)}})};Z(C,e=>{G(n)?e(w):e(T,-1)});var E=H(C,2);Yg(E,e=>B(g,e),()=>G(g)),W(()=>{E.readOnly=l(),Lg(E,c())}),J(`input`,E,function(e){h(`handleChange`);var t=e.target.value;c()!==t&&(c(t),f()&&f()(c()))}),X(e,x),xf()}function jw(e,t){bf(t,!1);var n=Q(t,`text`,13),r=Q(t,`onParse`,9),i=Q(t,`onRepair`,9),a=Q(t,`onApply`,9),o=Q(t,`onClose`,9);function s(e){a()(e),o()()}function c(){o()()}Qg(!0),bw(e,{get onClose(){return o()},className:`jse-repair-modal`,children:(e,t)=>{Aw(e,{get onParse(){return r()},get onRepair(){return i()},onApply:s,onCancel:c,get text(){return n()},set text(e){n(e)},$$legacy:!0})},$$slots:{default:!0}}),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Mw=Y(`<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>`),Nw=Y(`<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>`);function Pw(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=z(void 0,!0),o=z(void 0,!0),s=Q(t,`visibleSections`,9),c=Q(t,`sectionIndex`,9),l=Q(t,`total`,9),u=Q(t,`path`,9),d=Q(t,`selection`,9),f=Q(t,`onExpandSection`,9),p=Q(t,`context`,9);U(()=>(q(s()),q(c())),()=>{B(n,s()[c()])}),U(()=>G(n),()=>{B(r,G(n).end)}),U(()=>(q(s()),q(c()),q(l())),()=>{B(i,s()[c()+1]?s()[c()+1].start:l())}),U(()=>(q(p()),q(d()),q(u()),G(r)),()=>{B(a,ax(p().getJson(),d(),u().concat(String(G(r)))))}),U(()=>(G(r),G(i)),()=>{B(o,function(e,t){var n={start:e,end:Math.min(wy(e),t)},r=Math.max(Ty((e+t)/2),e),i={start:r,end:Math.min(wy(r),t)},a=Ty(t),o=a===t?a-oy:a,s={start:Math.max(o,e),end:t},c=[n],l=i.start>=n.end&&i.end<=s.start;return l&&c.push(i),s.start>=(l?i.end:n.end)&&c.push(s),c}(G(r),G(i)))}),Nm(),Qg(!0);var m,h,g=Nw(),_=V(V(g)),v=V(_);cg(H(_,2),1,()=>G(o),og,(e,t)=>{var n=Mw(),r=V(n);W(()=>{var e,n;return Bh(r,`show ${(G(t),e=K(()=>G(t).start))!==null&&e!==void 0?e:``}-${(G(t),n=K(()=>G(t).end))!==null&&n!==void 0?n:``}`)}),J(`click`,n,()=>f()(u(),G(t))),X(e,n)}),W(()=>{m=Cg(g,1,`jse-collapsed-items svelte-1v6dhm4`,null,m,{"jse-selected":G(a)}),h=Tg(g,``,h,{"--level":(q(u()),K(()=>u().length+2))}),Bh(v,`Items ${G(r)??``}-${G(i)??``}`)}),J(`mousemove`,g,function(e){e.stopPropagation()}),X(e,g),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Fw=Y(`<button type="button"><!></button>`);function Iw(e,t){bf(t,!1);var n=Q(t,`root`,9,!1),r=Q(t,`insert`,9,!1),i=Q(t,`selected`,9),a=Q(t,`onContextMenu`,9);Qg(!0);var o,s=Fw();Qv(V(s),{get data(){return lu}}),W(()=>{o=Cg(s,1,`jse-context-menu-pointer svelte-10ijtzr`,null,o,{"jse-root":n(),"jse-insert":r(),"jse-selected":i()}),Rg(s,`title`,py)}),J(`click`,s,function(e){for(var t=e.target;t&&t.nodeName!==`BUTTON`;)t=t.parentNode;t&&a()({anchor:t,left:0,top:0,width:by,height:yy,offsetTop:2,offsetLeft:0,showTip:!0})}),X(e,s),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Lw=Y(`<div role="none" data-type="selectable-key"><!></div>`),Rw=Y(`<!> <!>`,1),zw=Y(`<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>`);function Bw(e,t){bf(t,!0);var n=pp(()=>Db(t.selection)&&$b(t.selection)),r=pp(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:G(n),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),i=Fh();cg(wm(i),17,()=>G(r),og,(e,t)=>{var n=Fh(),r=wm(n),i=e=>{var n=pp(()=>G(t).action),r=zw();gg(r,(e,t)=>G(n)?.(e,t),()=>G(t).props),X(e,r)},a=pp(()=>Ly(G(t))),o=e=>{var n=pp(()=>G(t).component),r=Fh();hg(wm(r),()=>G(n),(e,n)=>{n(e,a_(()=>G(t).props))}),X(e,r)};Z(r,e=>{G(a)?e(i):e(o,-1)}),X(e,n)}),X(e,i),xf()}var Vw={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function Hw(e){var t=e.json,n=e.selection,r=e.deltaY,i=e.items;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var a=r<0?function(e){for(var t=e.json,n=e.items,r=e.selection,i=e.deltaY,a=Pb(t,r),o=n.findIndex(e=>hc(e.path,a)),s=()=>n[c-1]?.height,c=o,l=0;s()!==void 0&&Math.abs(i)>l+s()/2;)l+=s(),--c;var u=n[c].path,d=c-o;return c!==o&&n[c]!==void 0?{beforePath:u,offset:d}:void 0}({json:t,selection:n,deltaY:r,items:i}):function(e){for(var t=e.json,n=e.items,r=e.selection,i=e.deltaY,a=Fb(t,r),o=n.findIndex(e=>hc(e.path,a)),s=0,c=o,l=()=>n[c+1]?.height;l()!==void 0&&Math.abs(i)>s+l()/2;)s+=l(),c+=1;var u=F(t,uc(a)),d=n[Array.isArray(u)?c:c+1]?.path,f=c-o;return d?{beforePath:d,offset:f}:{append:!0,offset:f}}({json:t,selection:n,deltaY:r,items:i});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var o=function(e,t,n){if(!t)return[];var r=`beforePath`in n?n.beforePath:void 0,i=`append`in n?n.append:void 0,a=uc($(t)),o=F(e,a);if(!(i||r&&Ub(r,a)&&r.length>a.length))return[];var s=Pb(e,t),c=Fb(e,t),l=Qs(s),u=Qs(c),d=r?r[a.length]:void 0;if(!st(o)){if(ot(o)){var f=d_(l),p=d_(u),m=d===void 0?o.length:d_(d);return Pc(p-f+1,m<f?e=>({op:`move`,from:Ot(a.concat(String(f+e))),path:Ot(a.concat(String(m+e)))}):()=>({op:`move`,from:Ot(a.concat(String(f))),path:Ot(a.concat(String(m)))}))}throw Error(`Cannot create move operations: parent must be an Object or Array`)}var h=Object.keys(o),g=h.indexOf(l),_=h.indexOf(u),v=i?h.length:d===void 0?-1:h.indexOf(d);return g!==-1&&_!==-1&&v!==-1?v>g?[...h.slice(g,_+1),...h.slice(v,h.length)].map(e=>bx(a,e)):[...h.slice(v,g),...h.slice(_+1,h.length)].map(e=>bx(a,e)):[]}(t,n,a),s=F(t,uc(Pb(t,n)));return Array.isArray(s)?{operations:o,updatedSelection:function(e){var t=e.items,n=e.json,r=e.selection,i=e.offset,a=Pb(n,r),o=Fb(n,r),s=t.findIndex(e=>hc(e.path,a)),c=t.findIndex(e=>hc(e.path,o));return Zb(t[s+i]?.path,t[c+i]?.path)}({items:i,json:t,selection:n,offset:a.offset}),offset:a.offset}:{operations:o,updatedSelection:void 0,offset:a.offset}}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Uw=Y(`<button type="button"><!></button>`);function Ww(e,t){bf(t,!1);var n=z(),r=yf(`absolute-popup`),i=Q(t,`validationError`,8),a=Q(t,`onExpand`,8);U(()=>q(i()),()=>{B(n,Iy(i())&&i().isChildError?`Contains invalid data`:i().message)}),Nm(),Qg();var o=Uw();Qv(V(o),{get data(){return tu}}),Mm(()=>J(`click`,o,function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=a())==null||e.apply(this,n)})),gg(o,(e,t)=>qx?.(e,t),()=>I({text:G(n)},r)),W(()=>{var e;return Cg(o,1,`jse-validation-${(q(i()),e=K(()=>i().severity))!==null&&e!==void 0?e:``}`,`svelte-q6a061`)}),X(e,o),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var Gw=e_(()=>Vw),Kw=Y(`<div class="jse-separator svelte-1qi6rc1">:</div>`),qw=Y(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;`,1),Jw=Y(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>`,1),Yw=Y(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Xw=Y(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),Zw=Y(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Qw=Y(`<div data-type="insert-selection-area-inside"><!></div>`),$w=Y(`<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>`),eT=Y(`<!> <!>`,1),tT=Y(`<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>`,1),nT=Y(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>`,1),rT=Y(`<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>`),iT=Y(`<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>`,1),aT=Y(`<div slot="identifier"><!></div>`),oT=Y(`<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>`,1),sT=Y(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>`,1),cT=Y(`<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>`),lT=Y(`<div data-type="insert-selection-area-after"><!></div>`),uT=Y(`<div role="treeitem" tabindex="-1"><!> <!></div>`);function dT(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=Q(t,`pointer`,9),a=Q(t,`value`,9),o=Q(t,`state`,9),s=Q(t,`validationErrors`,9),c=Q(t,`searchResults`,9),l=Q(t,`selection`,9),u=Q(t,`context`,9),d=Q(t,`onDragSelectionStart`,9),f=o_(`jsoneditor:JSONNode`),p=z(void 0,!0),m=void 0,h=z(void 0,!0),g=z(void 0,!0),_=z(void 0,!0),v=z(void 0,!0),y=z(void 0,!0),b=z(void 0,!0),x=z(void 0,!0);function S(e){e.stopPropagation();var t=Nv(e);u().onExpand(G(g),!G(_),t)}function C(){u().onExpand(G(g),!0)}function w(e,t){var n=hx(G(g),Object.keys(a()),e,t);return u().onPatch(n),Qs(Dt(n[0].path))}function T(e){u().onDrag(e)}function E(e){Gw().selecting&&(Gw(Gw().selecting=!1),e.stopPropagation()),u().onDragEnd(),document.removeEventListener(`mousemove`,T,!0),document.removeEventListener(`mouseup`,E)}function ee(){var e;return((e=u().findElement([]))==null||(e=e.getBoundingClientRect())==null?void 0:e.top)||0}function te(e,t){var n=ee()-e.initialContentTop;return t.clientY-e.initialClientY-n}function ne(e){if(!u().readOnly&&l()){var t=uc($(l()));if(hc(G(g),t)){var n=function(e,t){var n=[];function r(e){var t=G(g).concat(e),r=u().findElement(t);r!==void 0&&n.push({path:t,height:r.clientHeight})}if(Array.isArray(a())){var i=u().getJson();if(i===void 0)return;var o=Pb(i,e),s=Fb(i,e),c=parseInt(Qs(o),10),l=parseInt(Qs(s),10),d=t.find(e=>c>=e.start&&l<=e.end);if(!d)return;var f=d.start,p=d.end;O_(f,Math.min(a().length,p),e=>r(String(e)))}else Object.keys(a()).forEach(r);return n}(l(),G(y)||ly);if(f(`dragSelectionStart`,{selection:l(),items:n}),n){var r=u().getJson();if(r!==void 0){var i=Pb(r,l()),o=n.findIndex(e=>hc(e.path,i)),s=Hw({json:r,selection:u().getSelection(),deltaY:0,items:n}).offset;B(h,{initialTarget:e.target,initialClientY:e.clientY,initialContentTop:ee(),selectionStartIndex:o,selectionItemsCount:Mb(r,l()).length,items:n,offset:s,didMoveItems:!1}),Gw(Gw().dragging=!0),document.addEventListener(`mousemove`,re,!0),document.addEventListener(`mouseup`,ie)}}else f(`Cannot drag the current selection (probably spread over multiple sections)`)}else d()(e)}}function re(e){if(G(h)){var t=u().getJson();if(t===void 0)return;var n=te(G(h),e),r=Hw({json:t,selection:u().getSelection(),deltaY:n,items:G(h).items}).offset;r!==G(h).offset&&(f(`drag selection`,r,n),B(h,I(I({},G(h)),{},{offset:r,didMoveItems:!0})))}}function ie(e){if(G(h)){var t=u().getJson();if(t===void 0)return;var n=te(G(h),e),r=Hw({json:t,selection:u().getSelection(),deltaY:n,items:G(h).items}),i=r.operations,a=r.updatedSelection;if(i)u().onPatch(i,(e,t)=>({state:t,selection:a??l()}));else if(e.target===G(h).initialTarget&&!G(h).didMoveItems){var o=Dv(e.target),s=kv(e.target);s&&u().onSelect(rx(o,s))}B(h,void 0),Gw(Gw().dragging=!1),document.removeEventListener(`mousemove`,re,!0),document.removeEventListener(`mouseup`,ie)}}function ae(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),u().onSelect(Yb(G(g))))}function oe(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),u().onSelect(Xb(G(g))))}function se(e){u().onSelect(Yb(G(g))),Qp(),u().onContextMenu(e)}function D(e){u().onSelect(Xb(G(g))),Qp(),u().onContextMenu(e)}U(()=>q(i()),()=>{B(g,Dt(i()))}),U(()=>q(i()),()=>{B(n,encodeURIComponent(i()))}),U(()=>q(o()),()=>{B(_,!!Vy(o())&&o().expanded)}),U(()=>(q(a()),q(o())),()=>{B(v,pb(a(),o(),[]))}),U(()=>q(o()),()=>{B(y,zy(o())?o().visibleSections:void 0)}),U(()=>q(s()),()=>{B(b,s()?.validationError)}),U(()=>(q(u()),q(l()),G(g)),()=>{B(x,ax(u().getJson(),l(),G(g)))}),U(()=>G(g),()=>{B(r,G(g).length===0)}),Nm(),Qg(!0);var O,ce,le=uT(),ue=V(le),de=e=>{var n=nT(),d=wm(n),f=V(d),m=V(f),v=V(m),w=e=>{Qv(e,{get data(){return lu}})},T=e=>{Qv(e,{get data(){return Al}})};Z(v,e=>{G(_)?e(w):e(T,-1)});var E=H(m,2);mg(E,t,`identifier`,{},null);var ee=H(E,2),te=e=>{X(e,Kw())};Z(ee,e=>{G(r)||e(te)});var re=H(ee,2),ie=V(V(re)),D=e=>{var t=qw();Hx(H(wm(t),2),{children:(e,t)=>{var n=Ph();W(()=>{var e,t;return Bh(n,`${(q(a()),e=K(()=>a().length))!==null&&e!==void 0?e:``}
                ${(q(a()),t=K(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),X(e,n)},$$slots:{default:!0}}),X(e,t)},O=e=>{var t=Jw();Hx(H(wm(t),2),{onclick:C,children:(e,t)=>{var n=Ph();W(()=>{var e,t;return Bh(n,`${(q(a()),e=K(()=>a().length))!==null&&e!==void 0?e:``}
                ${(q(a()),t=K(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),X(e,n)},$$slots:{default:!0}}),X(e,t)};Z(ie,e=>{G(_)?e(D):e(O,-1)});var ce=H(re,2),le=e=>{var t=Yw();Iw(V(t),{get root(){return G(r)},selected:!0,get onContextMenu(){return q(u()),K(()=>u().onContextMenu)}}),X(e,t)},ue=pp(()=>(q(u()),G(x),q(l()),q(Db),q(Ob),q($b),q(hc),q($),G(g),K(()=>!u().readOnly&&G(x)&&l()&&(Db(l())||Ob(l()))&&!$b(l())&&hc($(l()),G(g)))));Z(ce,e=>{G(ue)&&e(le)});var de=H(f,2),fe=e=>{Ww(e,{get validationError(){return G(b)},onExpand:C})};Z(de,e=>{G(b),G(_),K(()=>G(b)&&(!G(_)||!G(b).isChildError))&&e(fe)});var pe=H(de,2),me=e=>{var t=Xw();J(`click`,t,ae),X(e,t)},he=e=>{var t=Zw();J(`click`,t,oe),X(e,t)};Z(pe,e=>{G(_)?e(me):e(he,-1)});var ge=H(d,2),_e=e=>{var t=tT(),n=wm(t),d=V(n),f=e=>{var t,n,r=Qw(),i=V(r),a=R(()=>(G(x),q(Tb),q(l()),K(()=>G(x)&&Tb(l()))));Iw(i,{insert:!0,get selected(){return G(a)},onContextMenu:se}),W(e=>{t=Cg(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),Rg(r,`title`,fy),n=Tg(r,``,n,{"--level":(G(g),K(()=>G(g).length+1))})},[()=>({"jse-hovered":G(p)===my,"jse-selected":G(x)&&Tb(l())})]),X(e,r)},m=pp(()=>(q(u()),G(p),q(my),G(x),q(Tb),q(l()),K(()=>!u().readOnly&&(G(p)===my||G(x)&&Tb(l())))));Z(d,e=>{G(m)&&e(f)}),cg(H(d,2),1,()=>G(y)||ly,og,(e,t,n)=>{var r=eT(),d=wm(r);cg(d,1,()=>(q(a()),G(t),G(h),K(()=>function(e,t,n){var r=t.start,i=kc(r,Math.min(t.end,e.length));return n&&n.offset!==0?M_(i,n.selectionStartIndex,n.selectionItemsCount,n.offset).map((e,t)=>({index:e,gutterIndex:t})):i.map(e=>({index:e,gutterIndex:e}))}(a(),G(t),G(h)))),e=>e.index,(e,t)=>{var n=R(()=>(q(zy),q(s()),G(t),K(()=>zy(s())?s().items[G(t).index]:void 0))),r=R(()=>(q(ix),q(u()),q(l()),G(g),G(t),K(()=>ix(u().getJson(),l(),G(g).concat(String(G(t).index)))))),d=Fh(),f=wm(d),p=R(()=>(q(At),q(i()),G(t),K(()=>At(i(),G(t).index)))),m=R(()=>(q(zy),q(o()),G(t),K(()=>zy(o())?o().items[G(t).index]:void 0))),h=R(()=>(q(zy),q(c()),G(t),K(()=>zy(c())?c().items[G(t).index]:void 0)));dT(f,{get value(){return q(a()),G(t),K(()=>a()[G(t).index])},get pointer(){return G(p)},get state(){return G(m)},get validationErrors(){return G(n)},get searchResults(){return G(h)},get selection(){return G(r)},get context(){return u()},onDragSelectionStart:ne,$$slots:{identifier:(e,n)=>{var r=$w(),i=V(V(r));W(()=>Bh(i,(G(t),K(()=>G(t).gutterIndex)))),X(e,r)}}}),X(e,d)});var f=H(d,2),p=e=>{var t=R(()=>G(y)||ly);Pw(e,{get visibleSections(){return G(t)},sectionIndex:n,get total(){return q(a()),K(()=>a().length)},get path(){return G(g)},get onExpandSection(){return q(u()),K(()=>u().onExpandSection)},get selection(){return l()},get context(){return u()}})};Z(f,e=>{G(t),q(a()),K(()=>G(t).end<a().length)&&e(p)}),X(e,r)});var _=H(V(H(n,2)),2),v=e=>{var t=Zw();J(`click`,t,oe),X(e,t)};Z(_,e=>{G(r)||e(v)}),X(e,t)};Z(ge,e=>{G(_)&&e(_e)}),J(`click`,m,S),X(e,n)},fe=pp(()=>(q(a()),K(()=>Array.isArray(a())))),pe=e=>{var n=sT(),d=wm(n),f=V(d),m=V(f),v=V(m),y=e=>{Qv(e,{get data(){return lu}})},T=e=>{Qv(e,{get data(){return Al}})};Z(v,e=>{G(_)?e(y):e(T,-1)});var E=H(m,2);mg(E,t,`identifier`,{},null);var ee=H(E,2),te=e=>{X(e,Kw())};Z(ee,e=>{G(r)||e(te)});var re=H(ee,2),ie=V(V(re)),D=e=>{X(e,rT())},O=e=>{var t=iT();Hx(H(wm(t),2),{onclick:C,children:(e,t)=>{var n=Ph();W((e,t)=>Bh(n,`${e??``}
                ${t??``}`),[()=>(q(a()),K(()=>Object.keys(a()).length)),()=>(q(a()),K(()=>Object.keys(a()).length===1?`prop`:`props`))]),X(e,n)},$$slots:{default:!0}}),X(e,t)};Z(ie,e=>{G(_)?e(D):e(O,-1)});var ce=H(re,2),le=e=>{var t=Yw();Iw(V(t),{get root(){return G(r)},selected:!0,get onContextMenu(){return q(u()),K(()=>u().onContextMenu)}}),X(e,t)},ue=pp(()=>(q(u()),G(x),q(l()),q(Db),q(Ob),q($b),q(hc),q($),G(g),K(()=>!u().readOnly&&G(x)&&l()&&(Db(l())||Ob(l()))&&!$b(l())&&hc($(l()),G(g)))));Z(ce,e=>{G(ue)&&e(le)});var de=H(f,2),fe=e=>{Ww(e,{get validationError(){return G(b)},onExpand:C})};Z(de,e=>{G(b),G(_),K(()=>G(b)&&(!G(_)||!G(b).isChildError))&&e(fe)});var pe=H(de,2),me=e=>{var t=Xw();J(`click`,t,ae),X(e,t)},he=e=>{var t=Zw();J(`click`,t,oe),X(e,t)};Z(pe,e=>{G(_)?e(me):G(r)||e(he,1)});var ge=H(d,2),_e=e=>{var t=oT(),n=wm(t),d=V(n),f=e=>{var t,n,r=Qw(),i=V(r),a=R(()=>(G(x),q(Tb),q(l()),K(()=>G(x)&&Tb(l()))));Iw(i,{insert:!0,get selected(){return G(a)},onContextMenu:se}),W(e=>{t=Cg(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),Rg(r,`title`,fy),n=Tg(r,``,n,{"--level":(G(g),K(()=>G(g).length+1))})},[()=>({"jse-hovered":G(p)===my,"jse-selected":G(x)&&Tb(l())})]),X(e,r)},m=pp(()=>(q(u()),G(p),q(my),G(x),q(Tb),q(l()),K(()=>!u().readOnly&&(G(p)===my||G(x)&&Tb(l())))));Z(d,e=>{G(m)&&e(f)}),cg(H(d,2),1,()=>(q(a()),G(h),K(()=>function(e,t){var n=Object.keys(e);return t&&t.offset!==0?M_(n,t.selectionStartIndex,t.selectionItemsCount,t.offset):n}(a(),G(h)))),og,(e,t)=>{var n=R(()=>(q(At),q(i()),G(t),K(()=>At(i(),G(t))))),r=R(()=>(q(Ry),q(c()),G(t),K(()=>Ry(c())?c().properties[G(t)]:void 0))),d=R(()=>(q(Ry),q(s()),G(t),K(()=>Ry(s())?s().properties[G(t)]:void 0))),f=R(()=>(G(g),G(t),K(()=>G(g).concat(G(t))))),p=R(()=>(q(ix),q(u()),q(l()),q(G(f)),K(()=>ix(u().getJson(),l(),G(f))))),m=Fh(),h=wm(m),_=R(()=>(q(Ry),q(o()),G(t),K(()=>Ry(o())?o().properties[G(t)]:void 0)));dT(h,{get value(){return q(a()),G(t),K(()=>a()[G(t)])},get pointer(){return G(n)},get state(){return G(_)},get validationErrors(){return G(d)},get searchResults(){return G(r)},get selection(){return G(p)},get context(){return u()},onDragSelectionStart:ne,$$slots:{identifier:(e,i)=>{var a,o=aT(),s=V(o),c=R(()=>(q(Nx),q(G(r)),K(()=>Nx(G(r)))));(function(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=Q(t,`pointer`,9),a=Q(t,`key`,9),o=Q(t,`selection`,9),s=Q(t,`searchResultItems`,9),c=Q(t,`onUpdateKey`,9),l=Q(t,`context`,9),u=z(void 0,!0);function d(e){G(r)||l().readOnly||(e.preventDefault(),l().onSelect(Kb(G(u))))}function f(e,t){var n=c()(a(),l().normalization.unescapeValue(e)),r=uc(G(u)).concat(n);l().onSelect(t===ov.nextInside?qb(r):Gb(r)),t!==ov.self&&l().focus()}function p(){l().onSelect(Gb(G(u))),l().focus()}U(()=>q(i()),()=>{B(u,Dt(i()))}),U(()=>(q(o()),G(u)),()=>{B(n,Eb(o())&&hc(o().path,G(u)))}),U(()=>(G(n),q(o())),()=>{B(r,G(n)&&$b(o()))}),Nm(),Qg(!0);var m=Rw(),h=wm(m),g=e=>{var t=R(()=>(q(l()),q(a()),K(()=>l().normalization.escapeValue(a())))),n=R(()=>(q($b),q(o()),K(()=>$b(o())?o().initialValue:void 0)));dx(e,{get value(){return G(t)},get initialValue(){return G(n)},label:`Edit key`,shortText:!0,onChange:f,onCancel:p,get onFind(){return q(l()),K(()=>l().onFind)}})},_=e=>{var t,n=Lw(),r=V(n),i=e=>{var t=R(()=>(q(l()),q(a()),K(()=>l().normalization.escapeValue(a()))));zx(e,{get text(){return G(t)},get searchResultItems(){return s()}})},o=e=>{var t=Ph();W(e=>Bh(t,e),[()=>(q(yv),q(l()),q(a()),K(()=>yv(l().normalization.escapeValue(a()))))]),X(e,t)};Z(r,e=>{s()?e(i):e(o,-1)}),W(()=>t=Cg(n,1,`jse-key svelte-1n4cez4`,null,t,{"jse-empty":a()===``})),J(`dblclick`,n,d),X(e,n)};Z(h,e=>{q(l()),G(r),K(()=>!l().readOnly&&G(r))?e(g):e(_,-1)});var v=H(h,2),y=e=>{Iw(e,{selected:!0,get onContextMenu(){return q(l()),K(()=>l().onContextMenu)}})};Z(v,e=>{q(l()),G(n),G(r),K(()=>!l().readOnly&&G(n)&&!G(r))&&e(y)}),X(e,m),xf()})(s,{get pointer(){return G(n)},get key(){return G(t)},get selection(){return G(p)},get searchResultItems(){return G(c)},get context(){return u()},onUpdateKey:w}),W(e=>a=Cg(o,1,`jse-key-outer svelte-1qi6rc1`,null,a,e),[()=>({"jse-selected-key":Eb(G(p))&&hc(G(p).path,G(f))})]),X(e,o)}}}),X(e,m)});var _=H(V(H(n,2)),2),v=e=>{var t=Zw();J(`click`,t,oe),X(e,t)};Z(_,e=>{G(r)||e(v)}),X(e,t)};Z(ge,e=>{G(_)&&e(_e)}),J(`click`,m,S),X(e,n)},me=pp(()=>(q(m_),q(a()),K(()=>m_(a())))),he=e=>{var n=cT(),i=V(n),o=V(i);mg(o,t,`identifier`,{},null);var s=H(o,2),d=e=>{X(e,Kw())};Z(s,e=>{G(r)||e(d)});var f=H(s,2),p=V(f),m=R(()=>G(x)?l():void 0),h=R(()=>(q(Px),q(c()),K(()=>Px(c()))));Bw(p,{get path(){return G(g)},get value(){return a()},get enforceString(){return G(v)},get selection(){return G(m)},get searchResultItems(){return G(h)},get context(){return u()}});var _=H(f,2),y=e=>{var t=Yw();Iw(V(t),{get root(){return G(r)},selected:!0,get onContextMenu(){return q(u()),K(()=>u().onContextMenu)}}),X(e,t)},S=pp(()=>(q(u()),G(x),q(l()),q(Db),q(Ob),q($b),q(hc),q($),G(g),K(()=>!u().readOnly&&G(x)&&l()&&(Db(l())||Ob(l()))&&!$b(l())&&hc($(l()),G(g)))));Z(_,e=>{G(S)&&e(y)});var w=H(i,2),T=e=>{Ww(e,{get validationError(){return G(b)},onExpand:C})};Z(w,e=>{G(b)&&e(T)});var E=H(w,2),ee=e=>{var t=Zw();J(`click`,t,oe),X(e,t)};Z(E,e=>{G(r)||e(ee)}),X(e,n)};Z(ue,e=>{G(fe)?e(de):G(me)?e(pe,1):e(he,-1)});var ge=H(ue,2),_e=e=>{var t,n=lT(),r=V(n),i=R(()=>(G(x),q(wb),q(l()),K(()=>G(x)&&wb(l()))));Iw(r,{insert:!0,get selected(){return G(i)},onContextMenu:D}),W(e=>{t=Cg(n,1,`jse-insert-area jse-after svelte-1qi6rc1`,null,t,e),Rg(n,`title`,fy)},[()=>({"jse-hovered":G(p)===hy,"jse-selected":G(x)&&wb(l())})]),X(e,n)},k=pp(()=>(q(u()),G(p),q(hy),G(x),q(wb),q(l()),K(()=>!u().readOnly&&(G(p)===hy||G(x)&&wb(l())))));Z(ge,e=>{G(k)&&e(_e)}),W((e,t)=>{O=Cg(le,1,e,`svelte-1qi6rc1`,O,t),Rg(le,`data-path`,G(n)),Rg(le,`aria-selected`,G(x)),ce=Tg(le,``,ce,{"--level":(G(g),K(()=>G(g).length))})},[()=>yg((q(cx),G(_),q(u()),G(g),q(a()),K(()=>cx(`jse-json-node`,{"jse-expanded":G(_)},u().onClassName(G(g),a()))))),()=>({"jse-root":G(r),"jse-selected":G(x)&&Ob(l()),"jse-selected-value":G(x)&&Db(l()),"jse-readonly":u().readOnly,"jse-hovered":G(p)===gy})]),J(`mousedown`,le,function(e){if((e.buttons===1||e.buttons===2)&&!((t=e.target).nodeName===`DIV`&&t.contentEditable===`true`||e.buttons===1&&bv(e.target,`BUTTON`))){var t;e.stopPropagation(),e.preventDefault(),u().focus(),document.addEventListener(`mousemove`,T,!0),document.addEventListener(`mouseup`,E);var n=Dv(e.target),i=u().getJson(),o=u().getDocumentState();if(!l()||n===tv.after||n===tv.inside||l().type!==n&&l().type!==tv.multi||!ax(i,l(),G(g)))if(Gw(Gw().selecting=!0),Gw(Gw().selectionAnchor=G(g)),Gw(Gw().selectionAnchorType=n),Gw(Gw().selectionFocus=G(g)),e.shiftKey){var s=u().getSelection();s&&u().onSelect(Zb(sx(s),G(g)))}else if(n===tv.multi)if(G(r)&&e.target.hasAttribute(`data-path`)){var c=Qs(gb(a(),o));u().onSelect(nx(c))}else u().onSelect(Zb(G(g),G(g)));else i!==void 0&&u().onSelect(rx(n,G(g)));else e.button===0&&d()(e)}}),J(`mousemove`,le,function(e){if(Gw().selecting){e.preventDefault(),e.stopPropagation(),Gw().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var t=Dv(e.target);hc(G(g),Gw().selectionFocus)&&t===Gw().selectionAnchorType||(Gw(Gw().selectionFocus=G(g)),Gw(Gw().selectionAnchorType=t),u().onSelect(Zb(Gw().selectionAnchor||Gw().selectionFocus,Gw().selectionFocus)))}}),J(`mouseover`,le,function(e){Gw().selecting||Gw().dragging||(e.stopPropagation(),xv(e.target,`data-type`,`selectable-value`)?B(p,gy):xv(e.target,`data-type`,`selectable-key`)?B(p,void 0):xv(e.target,`data-type`,`insert-selection-area-inside`)?B(p,my):xv(e.target,`data-type`,`insert-selection-area-after`)&&B(p,hy),clearTimeout(m))}),J(`mouseout`,le,function(e){e.stopPropagation(),m=window.setTimeout(()=>B(p,void 0))}),X(e,le),xf()}var fT={prefix:`fas`,iconName:`jsoneditor-expand`,icon:[512,512,[],``,`M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z`]},pT={prefix:`fas`,iconName:`jsoneditor-collapse`,icon:[512,512,[],``,`m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z`]},mT={prefix:`fas`,iconName:`jsoneditor-format`,icon:[512,512,[],``,`M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z`]},hT={prefix:`fas`,iconName:`jsoneditor-compact`,icon:[512,512,[],``,`M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z`]};Fv(`/* over all fonts, sizes, and colors */
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
}`);var gT=Y(`<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>`,1),_T=Y(`<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>`);function vT(e,t){return(0,pu.default)(typeof e==`string`?e.toLowerCase():e,typeof t==`string`?t.toLowerCase():t)}function yT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=F(e,t);if(ot(i)){if(n===void 0)throw Error(`Cannot sort: no property selected by which to sort the array`);return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=function(e,t){var n={boolean:0,number:1,string:2,undefined:4},r=3;return function(i,a){var o=F(i,e),s=F(a,e);if(typeof o!=typeof s){var c=n[typeof o]??r,l=n[typeof s]??r;return c>l?t:c<l?-t:0}return typeof o==`number`||typeof o==`boolean`?o>s?t:o<s?-t:0:h_(o)?0:t*vT(o,s)}}(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:1),r=F(e,t);return[{op:`replace`,path:Ot(t),value:r.slice(0).sort(n)}]}(e,t,n,r)}if(m_(i))return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=F(e,t),i=Object.keys(r).slice();i.sort((e,t)=>n*vT(e,t));var a={};return i.forEach(e=>a[e]=r[e]),[{op:`replace`,path:Ot(t),value:a}]}(e,t,r);throw Error(`Cannot sort: no array or object`)}Oh([`click`]),Fv(`/* over all fonts, sizes, and colors */
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
}`);var bT=Y(`<button type="button"> </button>`),xT=Y(`<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>`),ST=Y(`<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>`);function CT(e,t){bf(t,!1);var n=Q(t,`items`,9),r=Q(t,`selectedItem`,9),i=Q(t,`onSelect`,9);Qg(!0);var a=ST(),o=V(a);cg(o,1,()=>(q(k_),q(n()),K(()=>k_(n(),100))),e=>e,(e,t)=>{var n,a=bT(),o=V(a);W((e,i)=>{n=Cg(a,1,`jse-navigation-bar-dropdown-item svelte-1k47orx`,null,n,{"jse-selected":G(t)===r()}),Rg(a,`title`,e),Bh(o,i)},[()=>(G(t),K(()=>G(t).toString())),()=>(q(Hv),G(t),K(()=>Hv(G(t).toString(),30)))]),J(`click`,a,Xg(()=>i()(G(t)))),X(e,a)});var s=H(o,2),c=e=>{var t=xT();Rg(t,`title`,`Limited to 100 items`),X(e,t)};Z(s,e=>{q(n()),K(()=>n().length>100)&&e(c)}),X(e,a),xf()}Fv(`/* over all fonts, sizes, and colors */
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
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
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
}`);var wT=Y(`<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>`),TT=Y(`<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>`);function ET(e,t){bf(t,!1);var n,r=z(void 0,!0),i=z(void 0,!0),a=yf(`absolute-popup`),o=a.openAbsolutePopup,s=a.closeAbsolutePopup,c=Q(t,`path`,9),l=Q(t,`index`,9),u=Q(t,`onSelect`,9),d=Q(t,`getItems`,9),f=z(void 0,!0),p=z(!1,!0);function m(e){s(n),u()(G(r).concat(e))}U(()=>(q(c()),q(l())),()=>{B(r,c().slice(0,l()))}),U(()=>(q(c()),q(l())),()=>{B(i,c()[l()])}),Nm(),Qg(!0);var h,g=TT(),_=V(g);Qv(V(_),{get data(){return Hl}});var v=H(_,2),y=e=>{var t=wT(),n=V(t);W(()=>Bh(n,G(i))),J(`click`,t,()=>m(G(i))),X(e,t)};Z(v,e=>{G(i)!==void 0&&e(y)}),Yg(g,e=>B(f,e),()=>G(f)),W(()=>h=Cg(_,1,`jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb`,null,h,{"jse-open":G(p)})),J(`click`,_,function(){G(f)&&(B(p,!0),n=o(CT,{items:d()(G(r)),selectedItem:G(i),onSelect:m},{anchor:G(f),closeOnOuterClick:!0,onClose:()=>{B(p,!1)}}))}),X(e,g),xf()}function DT(e){var t,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(n=document).queryCommandSupported)!=null&&t.call(n,`copy`)){var r=document.createElement(`textarea`);r.value=e,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{document.execCommand(`copy`)}catch(e){console.error(e)}finally{document.body.removeChild(r)}return Promise.resolve()}return console.error(`Copy failed.`),Promise.resolve()}Fv(`/* over all fonts, sizes, and colors */
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
  color: var(--jse-message-success-background, var(--message-success-background, #9ac45d));
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
  background: var(--jse-message-success-background, var(--message-success-background, #9ac45d));
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var OT=Y(`<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>`),kT=Y(`<div class="jse-copied-text svelte-uyexy4">Copied!</div>`),AT=Y(`<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>`);function jT(e,t){bf(t,!1);var n=z(),r=yf(`absolute-popup`),i=Q(t,`path`,8),a=Q(t,`pathParser`,8),o=Q(t,`onChange`,8),s=Q(t,`onClose`,8),c=Q(t,`onError`,8),l=Q(t,`pathExists`,8),u=z(),d=z(),f=z(!1),p=void 0,m=z(!1);function h(){G(u).focus()}function g(e){try{var t=a().parse(e);return function(e){if(!l()(e))throw Error(`Path does not exist in current document`)}(t),{path:t,error:void 0}}catch(e){return{path:void 0,error:e}}}Qh(()=>{h()}),$h(()=>{clearTimeout(p)}),U(()=>(q(a()),q(i())),()=>{B(d,a().stringify(i()))}),U(()=>(G(f),G(d)),()=>{B(n,G(f)?g(G(d)).error:void 0)}),Nm(),Qg();var _,v=AT(),y=V(v);Yg(y,e=>B(u,e),()=>G(u));var b=H(y,2),x=e=>{var t=OT();Qv(V(t),{get data(){return tu}}),gg(t,(e,t)=>qx?.(e,t),()=>I({text:String(G(n)||``)},r)),X(e,t)};Z(b,e=>{G(n)&&e(x)});var S=H(b,2),C=e=>{X(e,kT())};Z(S,e=>{G(m)&&e(C)});var w,T=H(S,2);Qv(V(T),{get data(){return su}}),W(()=>{_=Cg(v,1,`jse-navigation-bar-path-editor svelte-uyexy4`,null,_,{error:G(n)}),Lg(y,G(d)),w=Cg(T,1,`jse-navigation-bar-copy svelte-uyexy4`,null,w,{copied:G(m)})}),J(`keydown`,y,Xg(function(e){var t=Mv(e);if(t===`Escape`&&(e.preventDefault(),s()()),t===`Enter`){e.preventDefault(),B(f,!0);var n=g(G(d));n.path===void 0?c()(n.error):o()(n.path)}})),J(`input`,y,function(e){B(d,e.currentTarget.value)}),J(`click`,T,function(){DT(G(d)),B(m,!0),p=window.setTimeout(()=>B(m,!1),1e3),h()}),X(e,v),xf()}Fv(`/* over all fonts, sizes, and colors */
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
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var MT=Y(`<!> <!>`,1),NT=Y(`<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>`);function PT(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=o_(`jsoneditor:NavigationBar`),a=Q(t,`json`,9),o=Q(t,`selection`,9),s=Q(t,`onSelect`,9),c=Q(t,`onError`,9),l=Q(t,`pathParser`,9),u=z(void 0,!0),d=z(!1,!0);function f(e){i(`get items for path`,e);var t=F(a(),e);if(Array.isArray(t))return kc(0,t.length).map(String);if(m_(t)){var n=Object.keys(t).slice(0);return n.sort(vT),n}return[]}function p(e){return Et(a(),e)}function m(e){i(`select path`,JSON.stringify(e)),s()(Zb(e,e))}function h(){B(d,!1)}function g(e){h(),m(e)}U(()=>(q(o()),$),()=>{B(n,o()?$(o()):[])}),U(()=>(q(a()),G(n)),()=>{B(r,h_(F(a(),G(n))))}),U(()=>G(n),()=>{G(n),setTimeout(()=>{if(G(u)&&G(u).scrollTo){var e=G(u).scrollWidth-G(u).clientWidth;e>0&&(i(`scrollTo `,e),G(u).scrollTo({left:e,behavior:`smooth`}))}})}),Nm(),Qg(!0);var _=NT(),v=V(_),y=e=>{var t=MT(),i=wm(t);cg(i,1,()=>G(n),og,(e,t,r)=>{ET(e,{getItems:f,get path(){return G(n)},index:r,onSelect:m})});var a=H(i,2),o=e=>{ET(e,{getItems:f,get path(){return G(n)},get index(){return G(n),K(()=>G(n).length)},onSelect:m})};Z(a,e=>{G(r)&&e(o)}),X(e,t)},b=e=>{jT(e,{get path(){return G(n)},onClose:h,onChange:g,get onError(){return c()},pathExists:p,get pathParser(){return l()}})};Z(v,e=>{G(d)?e(b,-1):e(y)});var x,S=H(v,2),C=V(S),w=V(C),T=H(C,2),E=R(()=>G(d)?Yl:Ll);Qv(T,{get data(){return G(E)}}),Yg(_,e=>B(u,e),()=>G(u)),W(e=>{x=Cg(S,1,`jse-navigation-bar-edit svelte-hjhal6`,null,x,{flex:!G(d),editing:G(d)}),Rg(S,`title`,G(d)?`Cancel editing the selected path`:`Edit the selected path`),Bh(w,e)},[()=>(q(h_),q(a()),G(d),K(()=>h_(a())||G(d)?`\xA0`:`Navigation bar`))]),J(`click`,S,function(){B(d,!G(d))}),X(e,_),xf()}Fv(`/* over all fonts, sizes, and colors */
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
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
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
}`);var FT=Y(`<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>`),IT=Y(`<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>`),LT=Y(`<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>`);function RT(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=o_(`jsoneditor:SearchBox`),o=Q(t,`json`,9),s=Q(t,`documentState`,9),c=Q(t,`parser`,9),l=Q(t,`showSearch`,9),u=Q(t,`showReplace`,13),d=Q(t,`readOnly`,9),f=Q(t,`columns`,9),p=Q(t,`onSearch`,9),m=Q(t,`onFocus`,9),h=Q(t,`onPatch`,9),g=Q(t,`onClose`,9),_=z(``,!0),v=``,y=z(``,!0),b=z(!1,!0),x=z(void 0,!0),S=$e(function(e){return fe.apply(this,arguments)},300),C=$e(function(e){return pe.apply(this,arguments)},300);function w(){u(!u()&&!d())}function T(e){e.stopPropagation();var t=Mv(e);t===`Enter`&&(e.preventDefault(),G(_)===v?se():S.flush()),t===`Shift+Enter`&&(e.preventDefault(),O()),t===`Ctrl+Enter`&&(e.preventDefault(),u()?ne():se()),t===`Ctrl+H`&&(e.preventDefault(),w()),t===`Escape`&&(e.preventDefault(),ge())}function E(e){Mv(e)===`Enter`&&(e.preventDefault(),e.stopPropagation(),ne())}function ee(){return te.apply(this,arguments)}function te(){return(te=id(function*(){Qp(),yield S.flush()})).apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return(re=id(function*(){if(!d()){var e=G(x)?.activeItem;if(a(`handleReplace`,{replaceText:G(y),activeItem:e}),G(x)&&e&&o()!==void 0){B(x,I(I({},Ex(G(x))),{},{activeIndex:G(r)}));var t=jx(o(),s(),G(y),e,c()),n=t.operations,i=t.newSelection;h()(n,(e,t)=>({state:t,selection:i})),Qp(),yield C.flush(),yield le()}}})).apply(this,arguments)}function ie(){return ae.apply(this,arguments)}function ae(){return(ae=id(function*(){if(!d()){a(`handleReplaceAll`,{text:G(_),replaceText:G(y)});var e=function(e,t,n,r,i){for(var a=Dx(n,e,{maxResults:1/0}),o=[],s=0;s<a.length;s++){var c=a[s-1],l=a[s];s!==0&&l.field===c.field&&hc(l.path,c.path)?Qs(o).items.push(l):o.push({path:l.path,field:l.field,items:[l]})}o.sort((e,t)=>e.field===t.field?t.path.length-e.path.length:e.field===iv.key?1:-1);var u,d=[];return o.forEach(n=>{var a=n.field,o=n.path,s=n.items;if(a===iv.key){var c=uc(o),l=F(e,c),f=Qs(o),p=hx(c,Object.keys(l),f,Ax(f,r,s));d=d.concat(p),u=zb(e,p)}else{if(a!==iv.value)throw Error(`Cannot replace: unknown type of search result field ${a}`);var m=F(e,o);if(m===void 0)throw Error(`Cannot replace: path not found ${Ot(o)}`);var h=typeof m==`string`?m:String(m),g=pb(e,t,o),_=Ax(h,r,s),v=[{op:`replace`,path:Ot(o),value:g?_:w_(_,i)}];d=d.concat(v),u=zb(e,v)}}),{operations:d,newSelection:u}}(o(),s(),G(_),G(y),c()),t=e.operations,n=e.newSelection;h()(t,(e,t)=>({state:t,selection:n})),yield le()}})).apply(this,arguments)}function oe(e){e.select()}function se(){return D.apply(this,arguments)}function D(){return(D=id(function*(){B(x,G(x)?Ex(G(x)):void 0),yield le()})).apply(this,arguments)}function O(){return ce.apply(this,arguments)}function ce(){return ce=id(function*(){B(x,G(x)?function(e){var t=e.activeIndex>0?e.activeIndex-1:e.items.length-1,n=e.items[t],r=e.items.map((e,n)=>I(I({},e),{},{active:n===t}));return I(I({},e),{},{items:r,activeItem:n,activeIndex:t})}(G(x)):void 0),yield le()}),ce.apply(this,arguments)}function le(){return ue.apply(this,arguments)}function ue(){return(ue=id(function*(){a(`handleFocus`,G(x));var e=G(x)?.activeItem;e&&o()!==void 0&&(yield m()(e.path,e.resultIndex))})).apply(this,arguments)}function de(){return de=id(function*(e){yield me(e,G(_),o())}),de.apply(this,arguments)}function fe(){return fe=id(function*(e){yield me(l(),e,o()),yield le()}),fe.apply(this,arguments)}function pe(){return pe=id(function*(e){yield me(l(),G(_),e)}),pe.apply(this,arguments)}function me(e,t,n){return he.apply(this,arguments)}function he(){return he=id(function*(e,t,n){return e?(a(`applySearch`,{showSearch:e,text:t}),t===``?(a(`clearing search result`),G(x)!==void 0&&B(x,void 0),Promise.resolve()):(v=t,B(b,!0),new Promise(e=>{setTimeout(()=>{B(x,function(e,t){var n=t!=null&&t.activeItem?Mx(t.activeItem):void 0,r=e.findIndex(e=>hc(n,Mx(e))),i=r===-1?t?.activeIndex!==void 0&&t?.activeIndex<e.length?t?.activeIndex:e.length>0?0:-1:r,a=e.map((e,t)=>I(I({resultIndex:t},e),{},{active:t===i}));return{items:a,activeItem:a[i],activeIndex:i}}(Dx(t,n,{maxResults:ay,columns:f()}),G(x))),B(b,!1),e()})}))):(G(x)&&B(x,void 0),Promise.resolve())}),he.apply(this,arguments)}function ge(){a(`handleClose`),S.cancel(),C.cancel(),me(!1,G(_),o()),g()()}U(()=>G(x),()=>{var e;B(n,((e=G(x))==null||(e=e.items)==null?void 0:e.length)||0)}),U(()=>G(x),()=>{B(r,G(x)?.activeIndex||0)}),U(()=>(G(n),ay),()=>{B(i,G(n)>=ay?`999+`:String(G(n)))}),U(()=>(q(p()),G(x)),()=>{p()(G(x))}),U(()=>q(l()),()=>{(function(e){de.apply(this,arguments)})(l())}),U(()=>G(_),()=>{S(G(_))}),U(()=>q(o()),()=>{C(o())}),Nm(),Qg(!0);var _e=Fh(),k=wm(_e),ve=e=>{var t=LT(),a=V(t),o=V(a),s=e=>{var t=FT(),n=V(t),r=R(()=>u()?lu:Al);Qv(n,{get data(){return G(r)}}),J(`click`,t,w),X(e,t)};Z(o,e=>{d()||e(s)});var c=V(H(o,2)),l=V(c),f=V(l),p=e=>{Qv(e,{get data(){return Fl},spin:!0})},m=e=>{Qv(e,{get data(){return jl}})};Z(f,e=>{G(b)?e(p):e(m,-1)});var h=H(l,2),g=V(h);Mm(()=>Wg(g,()=>G(_),e=>B(_,e))),gg(g,e=>oe?.(e)),Mm(()=>J(`paste`,g,ee));var v,x=H(h,2),S=V(x),C=H(x,2);Qv(V(C),{get data(){return Ql}});var te=H(C,2);Qv(V(te),{get data(){return Pl}});var re=H(te,2);Qv(V(re),{get data(){return Xl}});var ae=H(c,2),D=e=>{var t=IT(),n=V(t),r=H(n,2),i=H(r,2);Wg(n,()=>G(y),e=>B(y,e)),J(`keydown`,n,E),J(`click`,r,ne),J(`click`,i,ie),X(e,t)};Z(ae,e=>{u()&&!d()&&e(D)}),W(()=>{v=Cg(x,1,`jse-search-count svelte-1x1x8q0`,null,v,{"jse-visible":G(_)!==``}),Bh(S,`${G(r)!==-1&&G(r)<G(n)?`${G(r)+1}/`:``}${G(i)??``}`)}),J(`click`,C,se),J(`click`,te,O),J(`click`,re,ge),J(`keydown`,a,T),X(e,t)};Z(k,e=>{l()&&e(ve)}),X(e,_e),xf()}var zT=Symbol(`path`);function BT(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,r={};Array.isArray(e)&&function(e,t,n){if(e.length<t)e.forEach(n);else for(var r=t>1?(e.length-1)/(t-1):e.length,i=0;i<t;i++){var a=Math.floor(i*r);n(e[a],a,e)}}(e,n,e=>{m_(e)?VT(e,r,t):r[zT]=!0});var i=[];return zT in r&&i.push([]),HT(r,[],i,t),i}function VT(e,t,n){for(var r in e){var i=e[r],a=t[r]||(t[r]={});m_(i)&&n?VT(i,a,n):a[zT]===void 0&&(a[zT]=!0)}}function HT(e,t,n,r){for(var i in e){var a=t.concat(i),o=e[i];o&&!0===o[zT]&&n.push(a),st(o)&&r&&HT(o,a,n,r)}}function UT(e,t,n,r,i,a){for(var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,s=ot(n)?n.length:0,c=function(e,t){var n=Object.values(e);return mc(n)?t:n.reduce((e,t)=>e+t)/n.length}(r,i),l=e-o,u=t+2*o,d=e=>r[e]||i,f=0,p=a;p<l&&f<s;)p+=d(f),f++;f>0&&(p-=d(--f));for(var m=f,h=0;h<u&&m<s;)h+=d(m),m++;for(var g=0,_=m;_<s;_++)g+=d(_);return{startIndex:f,endIndex:m,startHeight:p,endHeight:g,averageItemHeight:c,visibleHeight:h,visibleItems:ot(n)?n.slice(f,m):[]}}function WT(e,t,n,r){for(var i=GT(e,t).rowIndex,a=0,o=0;o<i;o++)a+=n[o]||r;return a}function GT(e,t){var n=ed(e),r=n[0],i=cd(n).slice(1),a=parseInt(r,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(e=>Ub(i,e))}}function KT(e,t){var n=e.rowIndex,r=e.columnIndex;return[String(n),...t[r]]}function qT(e,t){var n=ad(wc(e,e=>f_(e.path[0])),2),r=n[0];return{root:n[1],rows:_c(lc(r,YT),e=>{var n={row:[],columns:{}};return e.forEach(e=>{var r=function(e,t){var n=GT(e.path,t);return n.columnIndex===-1?-1:n.columnIndex}(e,t);r===-1?n.row.push(e):(n.columns[r]===void 0&&(n.columns[r]=[]),n.columns[r].push(e))}),n})}}function JT(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:`Multiple validation issues: `+t.map(e=>Zx(e.path)+` `+e.message).join(`, `),severity:rv.warning}}function YT(e){return parseInt(e.path[0],10)}function XT(e,t,n){return t.some(t=>function(e,t,n){if(!e)return!1;if(t.op===`replace`){var r=GT(Dt(t.path),n),i=r.rowIndex,a=r.columnIndex,o=n.findIndex(t=>hc(t,e.path));if(i!==-1&&a!==-1&&a!==o)return!1}return!0}(e,t,n))?void 0:e}var ZT=o_(`jsoneditor:actions`);function QT(e){return $T.apply(this,arguments)}function $T(){return $T=id(function*(e){var t=e.json,n=e.selection,r=e.indentation,i=e.readOnly,a=e.parser,o=e.onPatch;if(!i&&t!==void 0&&n&&ex(n)){var s=Qb(t,n,r,a);if(s!==void 0){ZT(`cut`,{selection:n,clipboard:s,indentation:r}),yield DT(s);var c=Sx(t,n),l=c.operations,u=c.newSelection;o(l,(e,t)=>({state:t,selection:u}))}}}),$T.apply(this,arguments)}function eE(e){return tE.apply(this,arguments)}function tE(){return tE=id(function*(e){var t=e.json,n=e.selection,r=e.indentation,i=Qb(t,n,r,e.parser);i!==void 0&&(ZT(`copy`,{clipboard:i,indentation:r}),yield DT(i))}),tE.apply(this,arguments)}function nE(e){var t=e.clipboardText,n=e.json,r=e.selection,i=e.readOnly,a=e.parser,o=e.onPatch,s=e.onChangeText,c=e.onPasteMultilineText,l=e.openRepairModal;if(!i)try{u(t)}catch{l(t,e=>{ZT(`repaired pasted text: `,e),u(e)})}function u(e){if(n!==void 0){var i=r||qb([]),l=vx(n,i,e,a),u=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:dy;if(e.length>r||!/\n/.test(e))return!1;var i=t.some(e=>e.op===`replace`&&Array.isArray(e.value)),a=t.filter(e=>e.op===`add`).length>1;if(!i&&!a)return!1;try{return I_(e,n.parse),!1}catch{return!0}}(t,l,a);ZT(`paste`,{pastedText:e,operations:l,ensureSelection:i,pasteMultilineText:u}),o(l,(e,t)=>{var r=t;return l.filter(e=>(ct(e)||ut(e))&&h_(e.value)).forEach(t=>{var i=Vt(n,t.path);r=vb(e,r,i)}),{state:r}}),u&&c(e)}else ZT(`paste text`,{pastedText:e}),s(t,(e,t)=>{if(e)return{state:vb(e,t,[])}})}}function rE(e){var t=e.json,n=e.text,r=e.selection,i=e.keepSelection,a=e.readOnly,o=e.onChange,s=e.onPatch;if(!a&&r){var c=t!==void 0&&(Eb(r)||Db(r))?Zb(r.path,r.path):r;if(mc($(r)))ZT(`remove root`,{selection:r}),o&&o({text:``,json:void 0},t===void 0?{text:n||``,json:t}:{text:void 0,json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var l=Sx(t,c),u=l.operations,d=l.newSelection;ZT(`remove`,{operations:u,selection:r,newSelection:d}),s(u,(e,t)=>({state:t,selection:i?r:d}))}}}function iE(e){var t=e.insertType,n=e.selectInside,r=e.initialValue,i=e.json,a=e.selection,o=e.readOnly,s=e.parser,c=e.onPatch,l=e.onReplaceJson;if(!o){var u=function(e,t,n){if(n===`object`)return{};if(n===`array`)return[];if(n===`structure`&&e!==void 0){var r=F(e,t?Nb(t):[]);if(Array.isArray(r)&&!mc(r)){var i=ac(r);return h_(i)?Uo(i,e=>Array.isArray(e)?[]:m_(e)?void 0:``):``}}return``}(i,a,t);if(i!==void 0){var d=s.stringify(u),f=vx(i,a,d,s);ZT(`onInsert`,{insertType:t,operations:f,newValue:u,data:d});var p=Qs(f.filter(e=>e.op===`add`||e.op===`replace`));c(f,(e,t,i)=>{if(p){var a=Vt(e,p.path);if(h_(u))return{state:tb(e,t,a,Sb),selection:n?Yb(a):i};if(u===``){var o=mc(a)?void 0:F(e,uc(a));return{state:tb(e,t,a,Cb),selection:m_(o)?Kb(a,r):Jb(a,r)}}}}),ZT(`after patch`)}else{ZT(`onInsert`,{insertType:t,newValue:u});var m=[];l(u,(e,t)=>({state:vb(e,t,m),selection:h_(u)?Yb(m):Jb(m)}))}}}function aE(e){return oE.apply(this,arguments)}function oE(){return oE=id(function*(e){var t=e.char,n=e.selectInside,r=e.json,i=e.selection,a=e.readOnly,o=e.parser,s=e.onPatch,c=e.onReplaceJson,l=e.onSelect;a||(Eb(i)?l(I(I({},i),{},{edit:!0,initialValue:t})):t===`{`?iE({insertType:`object`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):t===`[`?iE({insertType:`array`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):Db(i)&&r!==void 0?h_(F(r,i.path))||l(I(I({},i),{},{edit:!0,initialValue:t})):(ZT(`onInsertValueWithCharacter`,{char:t}),yield function(e){return sE.apply(this,arguments)}({char:t,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c})))}),oE.apply(this,arguments)}function sE(){return sE=id(function*(e){var t=e.char,n=e.json,r=e.selection,i=e.readOnly,a=e.parser,o=e.onPatch,s=e.onReplaceJson;i||iE({insertType:`value`,selectInside:!1,initialValue:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s})}),sE.apply(this,arguments)}Fv(`/* over all fonts, sizes, and colors */
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
}`);var cE=Y(`<div class="jse-json-preview svelte-25xmyd"> </div>`);function lE(e,t){bf(t,!1);var n=z(),r=z(),i=Q(t,`text`,8),a=Q(t,`json`,8),o=Q(t,`indentation`,8),s=Q(t,`parser`,8);U(()=>(q(a()),q(i())),()=>{B(n,a()===void 0?{text:i()||``}:{json:a()})}),U(()=>(G(n),q(o()),q(s()),cy),()=>{B(r,Hv(K_(G(n),o(),s()),cy))}),Nm(),Qg();var c=cE(),l=V(c);W(()=>Bh(l,G(r))),X(e,c),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var uE=Y(`<button type="button"><!> <!></button>`);function dE(e,t){bf(t,!1);var n=Q(t,`item`,8),r=Q(t,`className`,8,void 0),i=Q(t,`onRequestClose`,8);Qg();var a=uE(),o=V(a),s=e=>{Qv(e,{get data(){return q(n()),K(()=>n().icon)}})};Z(o,e=>{q(n()),K(()=>n().icon)&&e(s)});var c=H(o,2),l=e=>{var t=Ph();W(()=>Bh(t,(q(n()),K(()=>n().text)))),X(e,t)};Z(c,e=>{q(n()),K(()=>n().text)&&e(l)}),W(e=>{Cg(a,1,e,`svelte-16jz6ui`),Rg(a,`title`,(q(n()),K(()=>n().title))),a.disabled=(q(n()),K(()=>n().disabled||!1))},[()=>yg((q(cx),q(r()),q(n()),K(()=>cx(`jse-context-menu-button`,r(),n().className))))]),J(`click`,a,e=>{i()(),n().onClick(e)}),X(e,a),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`);var fE=Y(`<li class="svelte-bov1j6"><button type="button"><!> </button></li>`),pE=Y(`<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>`);Fv(`/* over all fonts, sizes, and colors */
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
}`);var mE=Y(`<button type="button" slot="defaultItem"><!> </button>`);function hE(e,t){bf(t,!1);var n=z(),r=Q(t,`item`,8),i=Q(t,`className`,8,void 0),a=Q(t,`onRequestClose`,8);U(()=>(q(r()),q(a())),()=>{B(n,r().items.map(e=>I(I({},e),{},{onClick:t=>{a()(),e.onClick(t)}})))}),Nm(),Qg(),function(e,t){bf(t,!1);var n=z(void 0,!0),r=Q(t,`items`,25,()=>[]),i=Q(t,`title`,9,void 0),a=Q(t,`width`,9,`120px`),o=z(!1,!0);function s(){B(o,!1)}function c(e){Mv(e)===`Escape`&&(e.preventDefault(),B(o,!1))}Qh(()=>{document.addEventListener(`click`,s),document.addEventListener(`keydown`,c)}),$h(()=>{document.removeEventListener(`click`,s),document.removeEventListener(`keydown`,c)}),U(()=>q(r()),()=>{B(n,r().every(e=>!0===e.disabled))}),Nm(),Qg(!0);var l=pE(),u=V(l);mg(u,t,`defaultItem`,{},null);var d,f=H(u,2);Qv(V(f),{get data(){return lu}});var p,m=H(f,2);cg(V(m),5,r,og,(e,t)=>{var n=fE(),r=V(n),i=V(r),a=e=>{Qv(e,{get data(){return G(t),K(()=>G(t).icon)}})};Z(i,e=>{G(t),K(()=>G(t).icon)&&e(a)});var o=H(i);W(()=>{var e;Rg(r,`title`,(G(t),K(()=>G(t).title))),r.disabled=(G(t),K(()=>G(t).disabled)),Cg(r,1,yg((G(t),K(()=>G(t).className))),`svelte-bov1j6`),Bh(o,` ${(G(t),e=K(()=>G(t).text))!==null&&e!==void 0?e:``}`)}),J(`click`,r,e=>G(t).onClick(e)),X(e,n)}),W(()=>{Rg(l,`title`,i()),d=Cg(f,1,`jse-open-dropdown svelte-bov1j6`,null,d,{"jse-visible":G(o)}),f.disabled=G(n),p=Cg(m,1,`jse-dropdown-items svelte-bov1j6`,null,p,{"jse-visible":G(o)}),Tg(m,`width: ${a()??``};`)}),J(`click`,f,function(){var e=G(o);setTimeout(()=>B(o,!e))}),J(`click`,l,s),X(e,l),xf()}(e,{get width(){return q(r()),K(()=>r().width)},get items(){return G(n)},$$slots:{defaultItem:(e,t)=>{var n=mE(),o=V(n),s=e=>{Qv(e,{get data(){return q(r()),K(()=>r().main.icon)}})};Z(o,e=>{q(r()),K(()=>r().main.icon)&&e(s)});var c=H(o);W(e=>{var t;Cg(n,1,e,`svelte-1y5l9l1`),Rg(n,`title`,(q(r()),K(()=>r().main.title))),n.disabled=(q(r()),K(()=>r().main.disabled||!1)),Bh(c,` ${(q(r()),t=K(()=>r().main.text))!==null&&t!==void 0?t:``}`)},[()=>yg((q(cx),q(i()),q(r()),K(()=>cx(`jse-context-menu-button`,i(),r().main.className))))]),J(`click`,n,e=>{a()(),r().main.onClick(e)}),X(e,n)}}}),xf()}Fv(`/* over all fonts, sizes, and colors */
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
  color: var(--jse-context-menu-tip-color, var(--context-menu-tip-color, inherit));
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
}`);var gE=Y(`<div class="jse-separator svelte-1shjn02"></div>`),_E=Y(`<div class="jse-label svelte-1shjn02"> </div>`),vE=Y(`<div class="jse-column svelte-1shjn02"></div>`),yE=Y(`<div class="jse-row svelte-1shjn02"></div>`),bE=Y(`<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>`),xE=Y(`<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>`);function SE(e,t){bf(t,!1);var n=Q(t,`items`,9),r=Q(t,`onRequestClose`,9),i=Q(t,`tip`,9),a=z(void 0,!0);Qh(()=>{var e=Array.from(G(a).querySelectorAll(`button`)).find(e=>!e.disabled);e&&e.focus()});var o={ArrowUp:`Up`,ArrowDown:`Down`,ArrowLeft:`Left`,ArrowRight:`Right`};function s(e){return console.error(`Unknown type of context menu item`,e),`???`}Qg(!0);var c=xE(),l=V(c);cg(l,1,n,og,(e,t)=>{var n=Fh(),i=wm(n),a=e=>{dE(e,{get item(){return G(t)},get onRequestClose(){return r()}})},o=pp(()=>(q(ky),G(t),K(()=>ky(G(t))))),c=e=>{hE(e,{get item(){return G(t)},get onRequestClose(){return r()}})},l=pp(()=>(q(Ay),G(t),K(()=>Ay(G(t))))),u=e=>{var n=yE();cg(n,5,()=>(G(t),K(()=>G(t).items)),og,(e,t)=>{var n=Fh(),i=wm(n),a=e=>{dE(e,{get item(){return G(t)},get onRequestClose(){return r()}})},o=pp(()=>(q(ky),G(t),K(()=>ky(G(t))))),c=e=>{hE(e,{get item(){return G(t)},get onRequestClose(){return r()}})},l=pp(()=>(q(Ay),G(t),K(()=>Ay(G(t))))),u=e=>{var n=vE();cg(n,5,()=>(G(t),K(()=>G(t).items)),og,(e,t)=>{var n=Fh(),i=wm(n),a=e=>{dE(e,{className:`left`,get item(){return G(t)},get onRequestClose(){return r()}})},o=pp(()=>(q(ky),G(t),K(()=>ky(G(t))))),c=e=>{hE(e,{className:`left`,get item(){return G(t)},get onRequestClose(){return r()}})},l=pp(()=>(q(Ay),G(t),K(()=>Ay(G(t))))),u=e=>{X(e,gE())},d=pp(()=>(q(Dy),G(t),K(()=>Dy(G(t))))),f=e=>{var n=_E(),r=V(n);W(()=>Bh(r,(G(t),K(()=>G(t).text)))),X(e,n)},p=pp(()=>(q(Oy),G(t),K(()=>Oy(G(t))))),m=e=>{var n=Ph();W(e=>Bh(n,e),[()=>(G(t),K(()=>s(G(t))))]),X(e,n)};Z(i,e=>{G(o)?e(a):G(l)?e(c,1):G(d)?e(u,2):G(p)?e(f,3):e(m,-1)}),X(e,n)}),X(e,n)},d=pp(()=>(q(My),G(t),K(()=>My(G(t))))),f=e=>{X(e,gE())},p=pp(()=>(q(Dy),G(t),K(()=>Dy(G(t))))),m=e=>{var n=Ph();W(e=>Bh(n,e),[()=>(G(t),K(()=>s(G(t))))]),X(e,n)};Z(i,e=>{G(o)?e(a):G(l)?e(c,1):G(d)?e(u,2):G(p)?e(f,3):e(m,-1)}),X(e,n)}),X(e,n)},d=pp(()=>(q(jy),G(t),K(()=>jy(G(t))))),f=e=>{X(e,gE())},p=pp(()=>(q(Dy),G(t),K(()=>Dy(G(t))))),m=e=>{var n=Ph();W(e=>Bh(n,e),[()=>(G(t),K(()=>s(G(t))))]),X(e,n)};Z(i,e=>{G(o)?e(a):G(l)?e(c,1):G(d)?e(u,2):G(p)?e(f,3):e(m,-1)}),X(e,n)});var u=H(l,2),d=e=>{var t=bE(),n=V(V(t));Qv(V(n),{get data(){return Cl}});var r=V(H(n,2));W(()=>Bh(r,i())),X(e,t)};Z(u,e=>{i()&&e(d)}),Yg(c,e=>B(a,e),()=>G(a)),J(`keydown`,c,function(e){var t=o[Mv(e)];if(t&&e.target){e.preventDefault();var n=Av({allElements:Array.from(G(a).querySelectorAll(`button:not([disabled])`)),currentElement:e.target,direction:t,hasPrio:e=>e.getAttribute(`data-type`)!==`jse-open-dropdown`});n&&n.focus()}}),X(e,c),xf()}Fv(`/* over all fonts, sizes, and colors */
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
}`),Y(`<option> </option>`),Y(`<select></select>`);var CE,wE;function TE(e,t){return CE||=(wE=new WeakMap,new ResizeObserver(e=>{for(var t of e){var n=wE.get(t.target);n&&n(t.target)}})),wE.set(e,t),CE.observe(e),{destroy:()=>{wE.delete(e),CE.unobserve(e)}}}Fv(`/* over all fonts, sizes, and colors */
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
}`);var EE=Y(`<!> <!>`,1),DE=Y(`<div class="jse-search-box-background svelte-10mlrw4"></div>`),OE=Y(`<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>`,1),kE=Y(`<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" aria-hidden="true" class="jse-hidden-input svelte-10mlrw4"/></label> <!>`,1),AE=Y(`<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>`),jE=Y(`<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>`,1);function ME(e,t){bf(t,!1);var n=z(void 0,!0),r=o_(`jsoneditor:TreeMode`),i=typeof window>`u`;r(`isSSR:`,i);var a=Ic(),o=Ic(),s=yf(`absolute-popup`),c=s.openAbsolutePopup,l=s.closeAbsolutePopup,u=z(void 0,!0),d=z(void 0,!0),f=z(void 0,!0),p=!1,m=$C(),h=Q(t,`readOnly`,9),g=Q(t,`ariaLabel`,9,void 0),_=Q(t,`externalContent`,9),v=Q(t,`externalSelection`,9),y=Q(t,`history`,9),b=Q(t,`truncateTextSize`,9),x=Q(t,`mainMenuBar`,9),S=Q(t,`navigationBar`,9),C=Q(t,`escapeControlCharacters`,9),w=Q(t,`escapeUnicodeCharacters`,9),T=Q(t,`parser`,9),E=Q(t,`parseMemoizeOne`,9),ee=Q(t,`validator`,9),te=Q(t,`validationParser`,9),ne=Q(t,`pathParser`,9),re=Q(t,`indentation`,9),ie=Q(t,`onError`,9),ae=Q(t,`onChange`,9),oe=Q(t,`onChangeMode`,9),se=Q(t,`onSelect`,9),D=Q(t,`onUndo`,9),O=Q(t,`onRedo`,9),ce=Q(t,`onRenderValue`,9),le=Q(t,`onRenderMenu`,9),ue=Q(t,`onRenderContextMenu`,9),de=Q(t,`onClassName`,9),fe=Q(t,`onFocus`,9),pe=Q(t,`onBlur`,9),me=Q(t,`onSortModal`,9),he=Q(t,`onTransformModal`,9),ge=Q(t,`onJSONEditorModal`,9),_e=!1,k=z(!1,!0),ve=z(void 0,!0);sw({onMount:Qh,onDestroy:$h,getWindow:()=>wv(G(f)),hasFocus:()=>_e&&document.hasFocus()||Tv(G(f)),onFocus:()=>{p=!0,fe()&&fe()()},onBlur:()=>{p=!1,pe()&&pe()()}});var A=z(void 0,!0),j=z(void 0,!0),ye=void 0,be=!1,M=z(Ky({json:G(A)}),!0),N=z(Ab(v())?v():void 0,!0);function xe(e){B(N,e)}Qh(()=>{if(G(N)){var e=$(G(N));B(M,tb(G(A),G(M),e,Cb)),setTimeout(()=>Nt(e))}});var Se,Ce=z(void 0,!0),we=z(void 0,!0),Te=z(void 0,!0),Ee=z(void 0,!0),De=z(!1,!0),Oe=z(!1,!0);function ke(e){B(Ee,(Se=e)?Ix(G(A),Se.items):void 0)}function Ae(e,t){return je.apply(this,arguments)}function je(){return(je=id(function*(e,t){B(M,tb(G(A),G(M),e,Cb)),yield Dt(e,{element:Mt(t)})})).apply(this,arguments)}function Me(){B(De,!1),B(Oe,!1),nn()}function Ne(e){r(`select validation error`,e),B(N,qb(e.path)),Dt(e.path)}function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xb;r(`expand`),B(M,tb(G(A),G(M),e,t))}function Fe(e,t){B(M,nb(G(A),G(M),e,t)),G(N)&&function(e,t){return Ub($(e),t)&&($(e).length>t.length||Tb(e))}(G(N),e)&&B(N,void 0)}var Ie=z(!1,!0),Le=z([],!0),P=z(void 0,!0),Re=_u(iw);function ze(e,t,n,i){ew(()=>{var a;try{a=Re(e,t,n,i)}catch(e){a=[{path:[],message:`Failed to validate: `+e.message,severity:rv.warning}]}hc(a,G(Le))||(r(`validationErrors changed:`,a),B(Le,a),B(P,function(e,t){var n;return t.forEach(t=>{n=rw(e,n,t.path,(e,n)=>I(I({},n),{},{validationError:t}))}),t.forEach(t=>{for(var r=t.path;r.length>0;)r=uc(r),n=rw(e,n,r,(e,t)=>t.validationError?t:I(I({},t),{},{validationError:{isChildError:!0,path:r,message:`Contains invalid data`,severity:rv.warning}}))}),n}(e,G(Le))))},e=>r(`validationErrors updated in ${e} ms`))}function Be(){return r(`validate`),ye?{parseError:ye,isRepairable:!1}:(ze(G(A),ee(),T(),te()),mc(G(Le))?void 0:{validationErrors:G(Le)})}function Ve(){return G(A)}function He(){return G(M)}function Ue(){return G(N)}function We(e){r(`applyExternalContent`,{updatedContent:e}),U_(e)?function(e){if(e!==void 0){var t=!hc(G(A),e);if(r(`update external json`,{isChanged:t,currentlyText:G(A)===void 0}),t){var n={documentState:G(M),selection:G(N),json:G(A),text:G(j),textIsRepaired:G(Ie)};B(A,e),B(M,Zy(e,G(M))),Ge(G(A)),B(j,void 0),B(Ie,!1),ye=void 0,Ke(G(A)),qe(n)}}}(e.json):H_(e)&&function(e){if(!(e===void 0||U_(_()))){var t=e!==G(j);if(r(`update external text`,{isChanged:t}),t){var n={documentState:G(M),selection:G(N),json:G(A),text:G(j),textIsRepaired:G(Ie)};try{B(A,E()(e)),B(M,Zy(G(A),G(M))),Ge(G(A)),B(j,e),B(Ie,!1),ye=void 0}catch(t){try{B(A,E()(Hn(e))),B(M,Zy(G(A),G(M))),Ge(G(A)),B(j,e),B(Ie,!0),ye=void 0,Ke(G(A))}catch{B(A,void 0),B(M,void 0),B(j,_().text),B(Ie,!1),ye=G(j)!==void 0&&G(j)!==``?z_(G(j),t.message||String(t)):void 0}}Ke(G(A)),qe(n)}}}(e.text)}function Ge(e){be||(be=!0,B(M,vb(e,G(M),[])))}function Ke(e){G(N)&&(Et(e,sx(G(N)))&&Et(e,$(G(N)))||(r(`clearing selection: path does not exist anymore`,G(N)),B(N,Rb(e,G(M)))))}function qe(e){if(e.json!==void 0||e.text!==void 0){var t=G(A)!==void 0&&e.json!==void 0;y().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:Wb(e.selection),sortedColumn:void 0},redo:{patch:t?[{op:`replace`,path:``,value:G(A)}]:void 0,json:G(A),text:G(j),documentState:G(M),textIsRepaired:G(Ie),selection:Wb(G(N)),sortedColumn:void 0}})}}function Je(e,t){if(r(`patch`,e,t),G(A)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=G(A),i={json:void 0,text:G(j),documentState:G(M),selection:Wb(G(N)),textIsRepaired:G(Ie),sortedColumn:void 0},a=Cx(G(A),e),o=ib(G(A),G(M),e),s=zb(G(A),e)??G(N),c=typeof t==`function`?t(o.json,o.documentState,s):void 0;return B(A,c?.json===void 0?o.json:c.json),B(M,c?.state===void 0?o.documentState:c.state),B(N,c?.selection===void 0?s:c.selection),B(j,void 0),B(Ie,!1),B(we,void 0),B(Te,void 0),ye=void 0,Ke(G(A)),y().add({type:`tree`,undo:I({patch:a},i),redo:{patch:e,json:void 0,text:G(j),documentState:G(M),selection:Wb(G(N)),sortedColumn:void 0,textIsRepaired:G(Ie)}}),{json:G(A),previousJson:n,undo:a,redo:e}}function Ye(){!h()&&G(N)&&B(N,Kb($(G(N))))}function Xe(){if(!h()&&G(N)){var e=$(G(N)),t=F(G(A),e);h_(t)?function(e,t){r(`openJSONEditorModal`,{path:e,value:t}),_e=!0,ge()({content:{json:t},path:e,onPatch:G(sn).onPatch,onClose:()=>{_e=!1,setTimeout(nn)}})}(e,t):B(N,Jb(e))}}function Ze(){if(!h()&&Db(G(N))){var e=$(G(N)),t=Ot(e),n=F(G(A),e),i=!pb(G(A),G(M),e),a=i?String(n):w_(String(n),T());r(`handleToggleEnforceString`,{enforceString:i,value:n,updatedValue:a}),Ft([{op:`replace`,path:t,value:a}],(t,n)=>({state:cb(G(A),n,e,{type:`value`,enforceString:i})}))}}function Qe(){return G(Ie)&&G(A)!==void 0&&It(G(A)),G(A)===void 0?{text:G(j)||``}:{json:G(A)}}function $e(){return et.apply(this,arguments)}function et(){return et=id(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield QT({json:G(A),selection:G(N),indentation:e?re():void 0,readOnly:h(),parser:T(),onPatch:Ft})}),et.apply(this,arguments)}function tt(){return nt.apply(this,arguments)}function nt(){return nt=id(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];G(A)!==void 0&&(yield eE({json:G(A),selection:G(N),indentation:e?re():void 0,parser:T()}))}),nt.apply(this,arguments)}function rt(e){e.preventDefault(),ot(e.clipboardData?.getData(`text/plain`))}function it(){return at.apply(this,arguments)}function at(){return(at=id(function*(){try{ot(yield navigator.clipboard.readText())}catch(e){console.error(e),B(k,!0)}})).apply(this,arguments)}function ot(e){e!==void 0&&nE({clipboardText:e,json:G(A),selection:G(N),readOnly:h(),parser:T(),onPatch:Ft,onChangeText:Lt,onPasteMultilineText:Wt,openRepairModal:st})}function st(e,t){B(ve,{text:e,onParse:e=>I_(e,e=>P_(e,T())),onRepair:L_,onApply:t,onClose:nn})}function ct(){rE({json:G(A),text:G(j),selection:G(N),keepSelection:!1,readOnly:h(),onChange:ae(),onPatch:Ft})}function lt(){!h()&&G(A)!==void 0&&G(N)&&ex&&!mc($(G(N)))&&(r(`duplicate`,{selection:G(N)}),Ft(gx(G(A),Mb(G(A),G(N)))))}function ut(){h()||!G(N)||!Ob(G(N))&&!Db(G(N))||mc($(G(N)))||(r(`extract`,{selection:G(N)}),Ft(_x(G(A),G(N)),(e,t)=>{if(h_(e))return{state:yb(e,t,[])}}))}function dt(e){iE({insertType:e,selectInside:!0,initialValue:void 0,json:G(A),selection:G(N),readOnly:h(),parser:T(),onPatch:Ft,onReplaceJson:It})}function ft(e){Eb(G(N))&&B(N,qb(G(N).path)),G(N)||B(N,Rb(G(A),G(M))),dt(e)}function pt(e){if(!h()&&G(N))if(tx(G(N)))try{var t=sx(G(N)),n=F(G(A),t),i=function(e,t,n){if(t===`array`){if(Array.isArray(e))return e;if(m_(e))return j_(e);if(typeof e==`string`)try{var r=n.parse(e);if(Array.isArray(r))return r;if(m_(r))return j_(r)}catch{return[e]}return[e]}if(t===`object`){if(Array.isArray(e))return A_(e);if(m_(e))return e;if(typeof e==`string`)try{var i=n.parse(e);if(m_(i))return i;if(Array.isArray(i))return A_(i)}catch{return{value:e}}return{value:e}}if(t===`value`)return h_(e)?n.stringify(e):e;throw Error(`Cannot convert ${x_(e,n)} to ${t}`)}(n,e,T());if(i===n)return;var a=[{op:`replace`,path:Ot(t),value:i}];r(`handleConvert`,{selection:G(N),path:t,type:e,operations:a}),Ft(a,(e,t)=>({state:G(N)?vb(e,t,$(G(N))):G(M)}))}catch(e){ie()(e)}else ie()(Error(`Cannot convert current selection to ${e}`))}function mt(){if(G(N)){var e=Ib(G(A),G(M),G(N),!1),t=uc($(G(N)));e&&!mc($(e))&&hc(t,uc($(e)))?B(N,Xb($(e))):B(N,Yb(t)),r(`insert before`,{selection:G(N),selectionBefore:e,parentPath:t}),Qp(),Kt()}}function ht(){if(G(N)){var e=Fb(G(A),G(N));r(`insert after`,e),B(N,Xb(e)),Qp(),Kt()}}function gt(e){return _t.apply(this,arguments)}function _t(){return(_t=id(function*(e){yield aE({char:e,selectInside:!0,json:G(A),selection:G(N),readOnly:h(),parser:T(),onPatch:Ft,onReplaceJson:It,onSelect:xe})})).apply(this,arguments)}function vt(){if(!h()&&y().canUndo){var e=y().undo();if(Uy(e)){var t={json:G(A),text:G(j)};B(A,e.undo.patch?jt(G(A),e.undo.patch):e.undo.json),B(M,e.undo.documentState),B(N,e.undo.selection),B(j,e.undo.text),B(Ie,e.undo.textIsRepaired),ye=void 0,r(`undo`,{item:e,json:G(A),documentState:G(M),selection:G(N)}),Pt(t,e.undo.patch&&e.redo.patch?{json:G(A),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),nn(),G(N)&&Dt($(G(N)),{scrollToWhenVisible:!1})}else D()(e)}}function yt(){if(!h()&&y().canRedo){var e=y().redo();if(Uy(e)){var t={json:G(A),text:G(j)};B(A,e.redo.patch?jt(G(A),e.redo.patch):e.redo.json),B(M,e.redo.documentState),B(N,e.redo.selection),B(j,e.redo.text),B(Ie,e.redo.textIsRepaired),ye=void 0,r(`redo`,{item:e,json:G(A),documentState:G(M),selection:G(N)}),Pt(t,e.undo.patch&&e.redo.patch?{json:G(A),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),nn(),G(N)&&Dt($(G(N)),{scrollToWhenVisible:!1})}else O()(e)}}function bt(e){var t;h()||G(A)===void 0||(_e=!0,me()({id:a,json:G(A),rootPath:e,onSort:(t=id(function*(t){var n=t.operations;r(`onSort`,e,n),Ft(n,(t,n)=>({state:yb(t,n,e),selection:qb(e)}))}),function(e){return t.apply(this,arguments)}),onClose:()=>{_e=!1,setTimeout(nn)}}))}function xt(){G(N)&&bt(Hb(G(A),G(N)))}function St(){bt([])}function Ct(e){if(G(A)!==void 0){var t=e.id,n=e.onTransform,i=e.onClose,a=e.rootPath||[];_e=!0,he()({id:t||o,json:G(A),rootPath:a,onTransform:e=>{n?n({operations:e,json:G(A),transformedJson:jt(G(A),e)}):(r(`onTransform`,a,e),Ft(e,(e,t)=>({state:yb(e,t,a),selection:qb(a)})))},onClose:()=>{_e=!1,setTimeout(nn),i&&i()}})}}function wt(){G(N)&&Ct({rootPath:Hb(G(A),G(N))})}function Tt(){Ct({rootPath:[]})}function Dt(e){return kt.apply(this,arguments)}function kt(){return kt=id(function*(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.scrollToWhenVisible,i=n===void 0||n,a=t.element;B(M,tb(G(A),G(M),e,Cb));var o=a??At(e);if(r(`scrollTo`,{path:e,elem:o,refContents:G(u)}),!o||!G(u))return Promise.resolve();var s=G(u).getBoundingClientRect(),c=o.getBoundingClientRect();if(!i&&c.bottom>s.top&&c.top<s.bottom)return Promise.resolve();var l=-s.height/4;return new Promise(e=>{m(o,{container:G(u),offset:l,duration:300,callback:()=>e()})})}),kt.apply(this,arguments)}function At(e){return Qp(),G(u)?.querySelector(`div[data-path="${Ov(e)}"]`)??void 0}function Mt(e){return Qp(),G(u)?.querySelector(`span[data-search-result-index="${e}"]`)??void 0}function Nt(e){var t=At(e);if(t&&G(u)){var n=G(u).getBoundingClientRect(),r=t.getBoundingClientRect(),i=h_(F(G(A),e))?20:r.height;r.top<n.top+20?m(t,{container:G(u),offset:-20,duration:0}):r.top+i>n.bottom-20&&m(t,{container:G(u),offset:-(n.height-i-20),duration:0})}}function Pt(e,t){if(e.json!==void 0||e?.text!==void 0){if(G(j)!==void 0){var n,r={text:G(j),json:void 0};(n=ae())==null||n(r,e,{contentErrors:Be(),patchResult:t})}else if(G(A)!==void 0){var i,a={text:void 0,json:G(A)};(i=ae())==null||i(a,e,{contentErrors:Be(),patchResult:t})}}}function Ft(e,t){r(`handlePatch`,e,t);var n={json:G(A),text:G(j)},i=Je(e,t);return Pt(n,i),i}function It(e,t){var n={json:G(A),text:G(j)},r={documentState:G(M),selection:G(N),json:G(A),text:G(j),textIsRepaired:G(Ie)},i=tb(G(A),Zy(e,G(M)),[],bb),a=typeof t==`function`?t(e,i,G(N)):void 0;B(A,a?.json===void 0?e:a.json),B(M,a?.state===void 0?i:a.state),B(N,a?.selection===void 0?G(N):a.selection),B(j,void 0),B(Ie,!1),ye=void 0,Ke(G(A)),qe(r),Pt(n,void 0)}function Lt(e,t){r(`handleChangeText`);var n={json:G(A),text:G(j)},i={documentState:G(M),selection:G(N),json:G(A),text:G(j),textIsRepaired:G(Ie)};try{B(A,E()(e)),B(M,tb(G(A),Zy(G(A),G(M)),[],bb)),B(j,void 0),B(Ie,!1),ye=void 0}catch(t){try{B(A,E()(Hn(e))),B(M,tb(G(A),Zy(G(A),G(M)),[],bb)),B(j,e),B(Ie,!0),ye=void 0}catch{B(A,void 0),B(M,Ky({json:G(A),expand:bb})),B(j,e),B(Ie,!1),ye=G(j)===``?void 0:z_(G(j),t.message||String(t))}}if(typeof t==`function`){var a=t(G(A),G(M),G(N));B(A,a?.json===void 0?G(A):a.json),B(M,a?.state===void 0?G(M):a.state),B(N,a?.selection===void 0?G(N):a.selection)}Ke(G(A)),qe(i),Pt(n,void 0)}function Rt(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];r(`handleExpand`,{path:e,expanded:t,recursive:n}),t?Pe(e,n?Sb:xb):Fe(e,n),nn()}function zt(){Rt([],!0,!0)}function Bt(){Rt([],!1,!0)}function Vt(e){r(`openFind`,{findAndReplace:e}),B(De,!1),B(Oe,!1),Qp(),B(De,!0),B(Oe,e)}function Ht(e,t){r(`handleExpandSection`,e,t),B(M,function(e,t,n,r){return lb(e,t,n,(e,t)=>{if(!zy(t))return t;var n=Cy(t.visibleSections.concat(r));return I(I({},t),{},{visibleSections:n})})}(G(A),G(M),e,t))}function Ut(e){r(`pasted json as text`,e),B(we,e)}function Wt(e){r(`pasted multiline text`,{pastedText:e}),B(Te,e)}function Gt(e){var t=e.anchor,n=e.left,r=e.top,i=e.width,a=e.height,o=e.offsetTop,s=e.offsetLeft,u=e.showTip,d=function(e){var t=e.json,n=e.documentState,r=e.selection,i=e.readOnly,a=e.onEditKey,o=e.onEditValue,s=e.onToggleEnforceString,c=e.onCut,l=e.onCopy,u=e.onPaste,d=e.onRemove,f=e.onDuplicate,p=e.onExtract,m=e.onInsertBefore,h=e.onInsert,g=e.onConvert,_=e.onInsertAfter,v=e.onSort,y=e.onTransform,b=t!==void 0,x=!!r,S=!!r&&mc($(r)),C=r?F(t,$(r)):void 0,w=Array.isArray(C)?`Edit array`:m_(C)?`Edit object`:`Edit value`,T=b&&(Ob(r)||Eb(r)||Db(r)),E=r&&!S?F(t,uc($(r))):void 0,ee=!i&&b&&Vb(r)&&!S&&!Array.isArray(E),te=!i&&b&&r!==void 0&&Vb(r),ne=te&&!h_(C),re=!i&&T,ie=T,ae=!i&&x,oe=!i&&b&&T&&!S,se=!i&&b&&r!==void 0&&(Ob(r)||Db(r))&&!S,D=T,O=D?`Convert to:`:`Insert:`,ce=!i&&(Tb(r)&&Array.isArray(C)||wb(r)&&Array.isArray(E)),le=!i&&(D?tx(r)&&!m_(C):x),ue=!i&&(D?tx(r)&&!Array.isArray(C):x),de=!i&&(D?tx(r)&&h_(C):x),fe=r!==void 0&&pb(t,n,$(r));function pe(e){T?e!==`structure`&&g(e):h(e)}return[{type:`row`,items:[{type:`button`,onClick:()=>a(),icon:Zl,text:`Edit key`,title:`Edit the key (Double-click on the key)`,disabled:!ee},{type:`dropdown-button`,main:{type:`button`,onClick:()=>o(),icon:Zl,text:w,title:`Edit the value (Double-click on the value)`,disabled:!te},width:`11em`,items:[{type:`button`,icon:Zl,text:w,title:`Edit the value (Double-click on the value)`,onClick:()=>o(),disabled:!te},{type:`button`,icon:fe?zl:du,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!ne}]}]},{type:`separator`},{type:`row`,items:[{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:nu,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!re},width:`10em`,items:[{type:`button`,icon:nu,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:!re},{type:`button`,icon:nu,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:!re}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:su,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!ie},width:`12em`,items:[{type:`button`,icon:su,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!0),disabled:!ie},{type:`button`,icon:su,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!ie}]},{type:`button`,onClick:()=>u(),icon:El,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:!ae}]},{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`button`,onClick:()=>f(),icon:Rl,text:`Duplicate`,title:`Duplicate selected contents (Ctrl+D)`,disabled:!oe},{type:`button`,onClick:()=>p(),icon:Dl,text:`Extract`,title:`Extract selected contents`,disabled:!se},{type:`button`,onClick:()=>v(),icon:eu,text:`Sort`,title:`Sort array or object contents`,disabled:i||!T},{type:`button`,onClick:()=>y(),icon:Ol,text:`Transform`,title:`Transform array or object contents (filter, sort, project)`,disabled:i||!T},{type:`button`,onClick:()=>d(),icon:Kl,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!T}]},{type:`column`,items:[{type:`label`,text:O},{type:`button`,onClick:()=>pe(`structure`),icon:D?ru:ou,text:`Structure`,title:O+` structure like the first item in the array`,disabled:!ce},{type:`button`,onClick:()=>pe(`object`),icon:D?ru:ou,text:`Object`,title:O+` object`,disabled:!le},{type:`button`,onClick:()=>pe(`array`),icon:D?ru:ou,text:`Array`,title:O+` array`,disabled:!ue},{type:`button`,onClick:()=>pe(`value`),icon:D?ru:ou,text:`Value`,title:O+` value`,disabled:!de}]}]},{type:`separator`},{type:`row`,items:[{type:`button`,onClick:()=>m(),icon:Bl,text:`Insert before`,title:`Select area before current entry to insert or paste contents`,disabled:i||!T||S},{type:`button`,onClick:()=>_(),icon:kl,text:`Insert after`,title:`Select area after current entry to insert or paste contents`,disabled:i||!T||S}]}]}({json:G(A),documentState:G(M),selection:G(N),readOnly:h(),onEditKey:Ye,onEditValue:Xe,onToggleEnforceString:Ze,onCut:$e,onCopy:tt,onPaste:it,onRemove:ct,onDuplicate:lt,onExtract:ut,onInsertBefore:mt,onInsert:ft,onInsertAfter:ht,onConvert:pt,onSort:xt,onTransform:wt}),f=ue()(d)??d;if(!1!==f){var p={left:n,top:r,offsetTop:o,offsetLeft:s,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{_e=!1,nn()}};_e=!0;var m=c(SE,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:f,onRequestClose:()=>l(m)},p)}}function Kt(e){if(!$b(G(N)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==G(d))Gt({left:e.clientX,top:e.clientY,width:by,height:yy,showTip:!1});else{var t=G(u)?.querySelector(`.jse-context-menu-pointer.jse-selected`);if(t)Gt({anchor:t,offsetTop:2,width:by,height:yy,showTip:!1});else{var n=G(u)?.getBoundingClientRect();n&&Gt({top:n.top+2,left:n.left+2,width:by,height:yy,showTip:!1})}}}function qt(e){Gt({anchor:Ev(e.target,`BUTTON`),offsetTop:0,width:by,height:yy,showTip:!0})}function Jt(){return Yt.apply(this,arguments)}function Yt(){return(Yt=id(function*(){if(r(`apply pasted json`,G(we)),G(we)){var e=G(we).onPasteAsJson;B(we,void 0),e(),setTimeout(nn)}})).apply(this,arguments)}function Xt(){return Zt.apply(this,arguments)}function Zt(){return(Zt=id(function*(){r(`apply pasted multiline text`,G(Te)),G(Te)&&(ot(JSON.stringify(G(Te))),setTimeout(nn))})).apply(this,arguments)}function Qt(){r(`clear pasted json`),B(we,void 0),nn()}function $t(){r(`clear pasted multiline text`),B(Te,void 0),nn()}function en(){oe()(ev.text)}function tn(e){B(N,e),nn(),Dt($(e))}function nn(){r(`focus`),G(d)&&(G(d).focus({preventScroll:!0}),G(d).select())}function rn(e){return function(e,t,n){var r=uc(n),i=[Qs(n)],a=F(e,r),o=a?_b(a,t,i):void 0;return o?qb(r.concat(o)):Xb(n)}(G(A),G(M),e)}function an(e){G(n)&&G(n).onDrag(e)}function on(){G(n)&&G(n).onDragEnd()}var sn=z(void 0,!0);U(()=>G(N),()=>{var e=G(N);hc(e,v())||(r(`onSelect`,e),se()(e))}),U(()=>(q(C()),q(w())),()=>{B(Ce,cv({escapeControlCharacters:C(),escapeUnicodeCharacters:w()}))}),U(()=>G(De),()=>{(function(e){G(u)&&e&&G(u).scrollTop===0&&(pm(u,G(u).style.overflowAnchor=`none`),pm(u,G(u).scrollTop+=xy),setTimeout(()=>{G(u)&&pm(u,G(u).style.overflowAnchor=``)}))})(G(De))}),U(()=>q(_()),()=>{We(_())}),U(()=>q(v()),()=>{(function(e){hc(G(N),e)||(r(`applyExternalSelection`,{selection:G(N),externalSelection:e}),Ab(e)&&B(N,e))})(v())}),U(()=>(G(A),q(ee()),q(T()),q(te())),()=>{ze(G(A),ee(),T(),te())}),U(()=>(G(u),ZC),()=>{B(n,G(u)?ZC(G(u)):void 0)}),U(()=>(q(h()),q(b()),q(T()),G(Ce),q(ce()),q(de())),()=>{B(sn,{mode:ev.tree,readOnly:h(),truncateTextSize:b(),parser:T(),normalization:G(Ce),getJson:Ve,getDocumentState:He,getSelection:Ue,findElement:At,findNextInside:rn,focus:nn,onPatch:Ft,onInsert:dt,onExpand:Rt,onSelect:xe,onFind:Vt,onExpandSection:Ht,onPasteJson:Ut,onRenderValue:ce(),onContextMenu:Gt,onClassName:de()||(()=>{}),onDrag:an,onDragEnd:on})}),U(()=>G(sn),()=>{r(`context changed`,G(sn))}),Nm();var cn={expand:Pe,collapse:Fe,validate:Be,getJson:Ve,patch:Je,acceptAutoRepair:Qe,openTransformModal:Ct,scrollTo:Dt,findElement:At,findSearchResult:Mt,focus:nn};Qg(!0);var ln=jE();J(`mousedown`,im,function(e){!Sv(e.target,e=>e===G(f))&&$b(G(N))&&(r(`click outside the editor, exit edit mode`),B(N,Wb(G(N))),p&&G(d)&&(G(d).focus({preventScroll:!0}),G(d).blur()),r(`blur (outside editor)`),G(d)&&G(d).blur())});var un,dn=wm(ln),fn=V(dn),pn=e=>{(function(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=Q(t,`json`,9),o=Q(t,`selection`,9),s=Q(t,`readOnly`,9),c=Q(t,`showSearch`,13,!1),l=Q(t,`history`,9),u=Q(t,`onExpandAll`,9),d=Q(t,`onCollapseAll`,9),f=Q(t,`onUndo`,9),p=Q(t,`onRedo`,9),m=Q(t,`onSort`,9),h=Q(t,`onTransform`,9),g=Q(t,`onContextMenu`,9),_=Q(t,`onCopy`,9),v=Q(t,`onRenderMenu`,9);function y(){c(!c())}var b=z(void 0,!0),x=z(void 0,!0),S=z(void 0,!0),C=z(void 0,!0);U(()=>q(a()),()=>{B(n,a()!==void 0)}),U(()=>(G(n),q(o()),Db),()=>{B(r,G(n)&&(Ob(o())||Eb(o())||Db(o())))}),U(()=>(q(u()),q(a())),()=>{B(b,{type:`button`,icon:fT,title:`Expand all`,className:`jse-expand-all`,onClick:u(),disabled:!h_(a())})}),U(()=>(q(d()),q(a())),()=>{B(x,{type:`button`,icon:pT,title:`Collapse all`,className:`jse-collapse-all`,onClick:d(),disabled:!h_(a())})}),U(()=>q(a()),()=>{B(S,{type:`button`,icon:jl,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:y,disabled:a()===void 0})}),U(()=>(q(s()),G(b),G(x),q(m()),q(a()),q(h()),G(S),q(g()),q(f()),q(l()),q(p()),q(_()),G(r)),()=>{B(C,s()?[G(b),G(x),{type:`separator`},{type:`button`,icon:su,title:`Copy (Ctrl+C)`,className:`jse-copy`,onClick:_(),disabled:!G(r)},{type:`separator`},G(S),{type:`space`}]:[G(b),G(x),{type:`separator`},{type:`button`,icon:eu,title:`Sort`,className:`jse-sort`,onClick:m(),disabled:s()||a()===void 0},{type:`button`,icon:Ol,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:h(),disabled:s()||a()===void 0},G(S),{type:`button`,icon:Il,title:py,className:`jse-contextmenu`,onClick:g()},{type:`separator`},{type:`button`,icon:uu,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:f(),disabled:!l().canUndo},{type:`button`,icon:cu,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:p(),disabled:!l().canRedo},{type:`space`}])}),U(()=>(q(v()),G(C)),()=>{B(i,v()(G(C))||G(C))}),Nm(),Qg(!0),Dw(e,{get items(){return G(i)}}),xf()})(e,{get json(){return G(A)},get selection(){return G(N)},get readOnly(){return h()},get history(){return y()},onExpandAll:zt,onCollapseAll:Bt,onUndo:vt,onRedo:yt,onSort:St,onTransform:Tt,onContextMenu:qt,onCopy:tt,get onRenderMenu(){return le()},get showSearch(){return G(De)},set showSearch(e){B(De,e)},$$legacy:!0})};Z(fn,e=>{x()&&e(pn)});var mn=H(fn,2),hn=e=>{PT(e,{get json(){return G(A)},get selection(){return G(N)},onSelect:tn,get onError(){return ie()},get pathParser(){return ne()}})};Z(mn,e=>{S()&&e(hn)});var gn=H(mn,2),_n=e=>{var t=kE(),n=wm(t),r=V(n);r.readOnly=!0,Yg(r,e=>B(d,e),()=>G(d));var i=H(n,2),a=e=>{var t=Fh(),n=wm(t),r=e=>{(function(e,t){function n(e){e.stopPropagation(),t.onCreateObject()}function r(e){e.stopPropagation(),t.onCreateArray()}bf(t,!0);var i=_T(),a=H(V(H(V(i),2)),2),o=e=>{var t=gT(),i=H(wm(t),2);Rg(i,`title`,`Create an empty JSON object (press '{')`);var a=H(i,2);Rg(a,`title`,`Create an empty JSON array (press '[')`),Dh(`click`,i,n),Dh(`click`,a,r),X(e,t)};Z(a,e=>{t.readOnly||e(o)}),Dh(`click`,i,()=>t.onClick()),X(e,i),xf()})(e,{get readOnly(){return h()},onCreateObject:()=>{nn(),gt(`{`)},onCreateArray:()=>{nn(),gt(`[`)},onClick:()=>{nn()}})},i=e=>{var t=EE(),n=wm(t),r=R(()=>h()?[]:[{icon:Vl,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:en}]);uw(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return G(r)}}),lE(H(n,2),{get text(){return G(j)},get json(){return G(A)},get indentation(){return re()},get parser(){return T()}}),X(e,t)};Z(n,e=>{G(j)===``||G(j)===void 0?e(r):e(i,-1)}),X(e,t)},o=e=>{var t=OE(),n=wm(t);RT(V(n),{get json(){return G(A)},get documentState(){return G(M)},get parser(){return T()},get showSearch(){return G(De)},get showReplace(){return G(Oe)},get readOnly(){return h()},columns:void 0,onSearch:ke,onFocus:Ae,onPatch:Ft,onClose:Me});var r=H(n,2);Rg(r,`data-jsoneditor-scrollable-contents`,!0);var i=V(r),a=e=>{X(e,DE())};Z(i,e=>{G(De)&&e(a)}),dT(H(i,2),{get value(){return G(A)},pointer:``,get state(){return G(M)},get validationErrors(){return G(P)},get searchResults(){return G(Ee)},get selection(){return G(N)},get context(){return G(sn)},get onDragSelectionStart(){return $n}}),Yg(r,e=>B(u,e),()=>G(u));var o=H(r,2),s=e=>{var t=R(()=>(G(we),K(()=>`You pasted a JSON ${Array.isArray(G(we).contents)?`array`:`object`} as text`))),n=R(()=>[{icon:Gl,text:`Paste as JSON instead`,title:`Replace the value with the pasted JSON`,onMouseDown:Jt},{text:`Leave as is`,title:`Keep the JSON embedded in the value`,onClick:Qt}]);uw(e,{type:`info`,get message(){return G(t)},get actions(){return G(n)}})};Z(o,e=>{G(we)&&e(s)});var c=H(o,2),l=e=>{var t=R(()=>[{icon:Gl,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:Xt},{text:`Leave as is`,title:`Keep the pasted array`,onClick:$t}]);uw(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return G(t)}})};Z(c,e=>{G(Te)&&e(l)});var d=H(c,2),f=e=>{var t=R(()=>h()?[]:[{icon:ql,text:`Ok`,title:`Accept the repaired document`,onClick:Qe},{icon:Vl,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:en}]);uw(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return G(t)},onClose:nn})};Z(d,e=>{G(Ie)&&e(f)}),_w(H(d,2),{get validationErrors(){return G(Le)},selectError:Ne}),X(e,t)};Z(i,e=>{G(A)===void 0?e(a):e(o,-1)}),J(`paste`,r,rt),X(e,t)},vn=e=>{X(e,AE())};Z(gn,e=>{i?e(vn,-1):e(_n)}),Yg(dn,e=>B(f,e),()=>G(f));var yn=H(dn,2),bn=e=>{Sw(e,{onClose:()=>B(k,!1)})};Z(yn,e=>{G(k)&&e(bn)});var xn=H(yn,2),Sn=e=>{jw(e,a_(()=>G(ve),{onClose:()=>{var e;(e=G(ve))==null||e.onClose(),B(ve,void 0)}}))};return Z(xn,e=>{G(ve)&&e(Sn)}),W(()=>{Rg(dn,`aria-label`,g()),un=Cg(dn,1,`jse-tree-mode svelte-10mlrw4`,null,un,{"no-main-menu":!x()})}),J(`keydown`,dn,function(e){var t=Mv(e),n=e.shiftKey;if(r(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),$e(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),$e(!1)),t===`Ctrl+C`&&(e.preventDefault(),tt(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),tt(!1)),t===`Ctrl+D`&&(e.preventDefault(),lt()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),ct()),t===`Insert`&&(e.preventDefault(),dt(`structure`)),t===`Ctrl+A`&&(e.preventDefault(),B(N,qb([]))),t===`Ctrl+Q`&&Kt(e),t===`ArrowUp`||t===`Shift+ArrowUp`){e.preventDefault();var i=G(N)?Ib(G(A),G(M),G(N),n)||G(N):Rb(G(A),G(M));B(N,i),Nt($(i))}if(t===`ArrowDown`||t===`Shift+ArrowDown`){e.preventDefault();var a=G(N)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?$(n):Fb(e,n),a=h_(F(e,i))?nb(e,t,i,!0):t,o=_b(e,t,i),s=_b(e,a,i);if(r)return Tb(n)?o===void 0?void 0:Zb(o,o):wb(n)?s===void 0?void 0:Zb(s,s):s===void 0?void 0:Zb(sx(n),s);if(wb(n))return s===void 0?void 0:qb(s);if(Tb(n)||Db(n))return o===void 0?void 0:qb(o);if(Eb(n)){if(o===void 0||o.length===0)return;var c=F(e,uc(o));return Array.isArray(c)?qb(o):Gb(o)}return Ob(n)?s===void 0?o===void 0?void 0:qb(o):qb(s):void 0}}(G(A),G(M),G(N),n)||G(N):Rb(G(A),G(M));B(N,a),Nt($(a))}if(t===`ArrowLeft`||t===`Shift+ArrowLeft`){e.preventDefault();var o=G(N)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=Lb(e,t,n,!(arguments.length>4&&arguments[4]!==void 0)||arguments[4]),a=i.caret,o=i.previous;if(r)return Ob(n)?void 0:Zb(n.path,n.path);if(a&&o)return nx(o);var s=F(e,uc($(n)));return Db(n)&&Array.isArray(s)?Zb(n.path,n.path):Ob(n)&&!Array.isArray(s)?Gb(n.focusPath):void 0}}(G(A),G(M),G(N),n,!h())||G(N):Rb(G(A),G(M));B(N,o),Nt($(o))}if(t===`ArrowRight`||t===`Shift+ArrowRight`){e.preventDefault();var s=G(N)&&G(A)!==void 0?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=Lb(e,t,n,!(arguments.length>4&&arguments[4]!==void 0)||arguments[4]),a=i.caret,o=i.next;return r?Ob(n)?void 0:Zb(n.path,n.path):a&&o?nx(o):Ob(n)?qb(n.focusPath):void 0}}(G(A),G(M),G(N),n,!h())||G(N):Rb(G(A),G(M));B(N,s),Nt($(s))}if(t===`Enter`&&G(N)){if(kb(G(N))){var c=G(N).focusPath,l=F(G(A),uc(c));Array.isArray(l)&&(e.preventDefault(),B(N,qb(c)))}Eb(G(N))&&(e.preventDefault(),B(N,I(I({},G(N)),{},{edit:!0}))),Db(G(N))&&(e.preventDefault(),h_(F(G(A),G(N).path))?Rt(G(N).path,!0):B(N,I(I({},G(N)),{},{edit:!0})))}if(t.replace(/^Shift\+/,``).length===1&&G(N))return e.preventDefault(),void gt(e.key);if(t===`Enter`&&(wb(G(N))||Tb(G(N))))return e.preventDefault(),void gt(``);if(t===`Ctrl+Enter`&&Db(G(N))){var u=F(G(A),G(N).path);C_(u)&&window.open(String(u),`_blank`)}t===`Escape`&&G(N)&&(e.preventDefault(),B(N,void 0)),t===`Ctrl+F`&&(e.preventDefault(),Vt(!1)),t===`Ctrl+H`&&(e.preventDefault(),Vt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),vt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),yt())}),J(`mousedown`,dn,function(e){r(`handleMouseDown`,e);var t=e.target;bv(t,`BUTTON`)||t.isContentEditable||(nn(),G(N)||G(A)!==void 0||G(j)!==``&&G(j)!==void 0||(r(`createDefaultSelection`),B(N,qb([]))))}),J(`contextmenu`,dn,Kt),X(e,ln),qg(t,`expand`,Pe),qg(t,`collapse`,Fe),qg(t,`validate`,Be),qg(t,`getJson`,Ve),qg(t,`patch`,Je),qg(t,`acceptAutoRepair`,Qe),qg(t,`openTransformModal`,Ct),qg(t,`scrollTo`,Dt),qg(t,`findElement`,At),qg(t,`findSearchResult`,Mt),qg(t,`focus`,nn),xf(cn)}function NE(e){return typeof(t=e)!=`object`||t===null?e:new Proxy(e,{get:(e,t,n)=>NE(Reflect.get(e,t,n)),set:()=>!1,deleteProperty:()=>!1});var t}var PE=o_(`jsoneditor:History`);function FE(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,n=[],r=0;function i(){return r<n.length}function a(){return r>0}function o(){return{canUndo:i(),canRedo:a(),items:()=>n.slice().reverse(),add:c,undo:u,redo:d,clear:l}}function s(){e.onChange&&e.onChange(o())}function c(e){PE(`add`,e),n=[e].concat(n.slice(r)).slice(0,t),r=0,s()}function l(){PE(`clear`),n=[],r=0,s()}function u(){if(i()){var e=n[r];return r+=1,PE(`undo`,e),s(),e}}function d(){if(a())return PE(`redo`,n[--r]),s(),n[r]}return{get:o}}Fv(`/* over all fonts, sizes, and colors */
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
}`);var IE=e_(()=>tS),LE=e_(()=>nS),RE=Y(`<div class="query-error svelte-lta8xm"> </div>`),zE=Y(`<!> <!>`,1),BE=Y(`<div class="jse-preview jse-error svelte-lta8xm"> </div>`),VE=Y(`<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>`,1),HE=Y(`<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>`);function UE(e,t){var n;bf(t,!1);var r=o_(`jsoneditor:TransformModal`),i=Q(t,`id`,25,()=>`transform-modal-`+u_()),a=Q(t,`json`,9),o=Q(t,`rootPath`,25,()=>[]),s=Q(t,`indentation`,9),c=Q(t,`truncateTextSize`,9),l=Q(t,`escapeControlCharacters`,9),u=Q(t,`escapeUnicodeCharacters`,9),d=Q(t,`parser`,9),f=Q(t,`parseMemoizeOne`,9),p=Q(t,`validationParser`,9),m=Q(t,`pathParser`,9),h=Q(t,`queryLanguages`,9),g=Q(t,`queryLanguageId`,13),_=Q(t,`onChangeQueryLanguage`,9),v=Q(t,`onRenderValue`,9),y=Q(t,`onRenderMenu`,9),b=Q(t,`onRenderContextMenu`,9),x=Q(t,`onClassName`,9),S=Q(t,`onTransform`,9),C=Q(t,`onClose`,9),w=z(void 0,!0),T=z(FE({onChange:e=>B(T,e)}).get(),!0),E=z(void 0,!0),ee=z(void 0,!0),te=z(!1,!0),ne=`${i()}:${Ot(o())}`,re=IE()[ne]??{},ie=z(!1!==LE().showWizard,!0),ae=z(!1!==LE().showOriginal,!0),oe=z(re.queryOptions??{},!0),se=z(g()===re.queryLanguageId&&re.query?re.query:``,!0),D=z((n=re.isManual)!=null&&n,!0),O=z(void 0,!0),ce=z(void 0,!0),le=z({text:``},!0);function ue(e){return h().find(t=>t.id===e)??h()[0]}function de(e){try{B(oe,e),B(se,ue(g()).createQuery(G(E),e)),B(O,void 0),B(D,!1),r(`updateQueryByWizard`,{queryOptions:G(oe),query:G(se),isManual:G(D)})}catch(e){B(O,String(e))}}function fe(e){B(se,e.target.value),B(D,!0),r(`handleChangeQuery`,{query:G(se),isManual:G(D)})}G(D)||de(G(oe)),Qh(()=>{var e;(e=G(w))==null||e.focus()});var pe=$e(function(e,t){if(e===void 0)return B(le,{text:``}),void B(ce,`Error: No JSON`);if(t.trim()!==``)try{r(`previewTransform`,{query:t}),B(le,{json:ue(g()).executeQuery(e,t,d())}),B(ce,void 0)}catch(e){B(le,{text:``}),B(ce,String(e))}else B(le,{json:e})},300);function me(){if(G(E)===void 0)return B(le,{text:``}),void B(ce,`Error: No JSON`);try{r(`handleTransform`,{query:G(se)});var e=ue(g()).executeQuery(G(E),G(se),d());S()([{op:`replace`,path:Ot(o()),value:e}]),C()()}catch(e){console.error(e),B(le,{text:``}),B(ce,String(e))}}function he(){B(ie,!G(ie)),LE(LE().showWizard=G(ie))}function ge(){B(ae,!G(ae)),LE(LE().showOriginal=G(ae))}function _e(e){e.focus()}function k(e){r(`handleChangeQueryLanguage`,e),g(e),_()(e),de(G(oe))}function ve(){G(te)?B(te,!G(te)):C()()}U(()=>(q(a()),q(o())),()=>{B(E,NE(F(a(),o())))}),U(()=>G(E),()=>{B(ee,G(E)?{json:G(E)}:{text:``})}),U(()=>(G(E),G(se)),()=>{pe(G(E),G(se))}),U(()=>(IE(),G(oe),G(se),q(g()),G(D)),()=>{IE(IE()[ne]={queryOptions:G(oe),query:G(se),queryLanguageId:g(),isManual:G(D)}),r(`store state in memory`,ne,IE()[ne])}),Nm(),Qg(!0),bw(e,{get onClose(){return C()},className:`jse-transform-modal`,get fullscreen(){return G(te)},children:(e,t)=>{var n=HE();Bv(V(n),{children:(e,t)=>{var n=VE(),r=wm(n);(function(e,t){bf(t,!1);var n,r=Q(t,`queryLanguages`,9),i=Q(t,`queryLanguageId`,9),a=Q(t,`fullscreen`,13),o=Q(t,`onChangeQueryLanguage`,9),s=Q(t,`onClose`,9),c=z(void 0,!0),l=yf(`absolute-popup`),u=l.openAbsolutePopup,d=l.closeAbsolutePopup;function f(){n=u(GC,{queryLanguages:r(),queryLanguageId:i(),onChangeQueryLanguage:e=>{d(n),o()(e)}},{offsetTop:-2,offsetLeft:0,anchor:G(c),closeOnOuterClick:!0})}Qg(!0),JC(e,{title:`Transform`,fullScreenButton:!0,get onClose(){return s()},get fullscreen(){return a()},set fullscreen(e){a(e)},$$slots:{actions:(e,t)=>{var n,i=YC();Qv(V(i),{get data(){return Ul}}),Yg(i,e=>B(c,e),()=>G(c)),W(()=>n=Cg(i,1,`jse-config svelte-5gkegr`,null,n,{hide:r().length<=1})),J(`click`,i,f),X(e,i)}},$$legacy:!0}),xf()})(r,{get queryLanguages(){return h()},get queryLanguageId(){return g()},onChangeQueryLanguage:k,get onClose(){return C()},get fullscreen(){return G(te)},set fullscreen(e){B(te,e)},$$legacy:!0});var i=V(H(r,2)),a=V(i),_=H(V(a),2);pg(_,()=>(q(g()),K(()=>ue(g()).description)),!0);var S=H(_,4),ne=H(S,2),re=V(V(ne)),D=V(re),pe=R(()=>G(ie)?lu:Al);Qv(D,{get data(){return G(pe)}});var ve=H(ne,2),A=e=>{var t=Fh(),n=wm(t),r=e=>{var t=zE(),n=wm(t);HC(n,{get queryOptions(){return G(oe)},get json(){return G(E)},onChange:de});var r=H(n,2),i=e=>{var t=RE(),n=V(t);W(()=>Bh(n,G(O))),X(e,t)};Z(r,e=>{G(O)&&e(i)}),X(e,t)},i=pp(()=>(G(E),K(()=>Array.isArray(G(E))))),a=e=>{X(e,Ph(`(Only available for arrays, not for objects)`))};Z(n,e=>{G(i)?e(r):e(a,-1)}),X(e,t)};Z(ve,e=>{G(ie)&&e(A)});var j=H(ve,4);Yg(j,e=>B(w,e),()=>G(w));var ye,be,M=H(a,2),N=V(M),xe=V(N),Se=V(V(xe)),Ce=V(Se),we=R(()=>G(ae)?lu:Al);Qv(Ce,{get data(){return G(we)}});var Te=H(xe,2),Ee=e=>{ME(e,{get externalContent(){return G(ee)},externalSelection:void 0,get history(){return G(T)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return b()},onError:K(()=>console.error),get onChange(){return $n},get onChangeMode(){return $n},get onSelect(){return $n},get onUndo(){return $n},get onRedo(){return $n},get onFocus(){return $n},get onBlur(){return $n},get onSortModal(){return $n},get onTransformModal(){return $n},get onJSONEditorModal(){return $n},get onClassName(){return x()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})};Z(Te,e=>{G(ae)&&e(Ee)});var De=H(V(H(N,2)),2),Oe=e=>{ME(e,{get externalContent(){return G(le)},externalSelection:void 0,get history(){return G(T)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return b()},onError:K(()=>console.error),get onChange(){return $n},get onChangeMode(){return $n},get onSelect(){return $n},get onUndo(){return $n},get onRedo(){return $n},get onFocus(){return $n},get onBlur(){return $n},get onSortModal(){return $n},get onTransformModal(){return $n},get onJSONEditorModal(){return $n},get onClassName(){return x()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})},ke=e=>{var t=BE(),n=V(t);W(()=>Bh(n,G(ce))),X(e,t)};Z(De,e=>{G(ce)?e(ke,-1):e(Oe)});var Ae=V(H(i,2));Mm(()=>J(`click`,Ae,me)),gg(Ae,e=>_e?.(e)),W(e=>{Lg(S,e),Lg(j,G(se)),ye=Cg(M,1,`jse-data-contents svelte-lta8xm`,null,ye,{"jse-hide-original-data":!G(ae)}),be=Cg(N,1,`jse-original-data svelte-lta8xm`,null,be,{"jse-hide":!G(ae)}),Ae.disabled=!!G(ce)},[()=>(q(mc),q(o()),q(Zx),K(()=>mc(o())?`(document root)`:Zx(o())))]),J(`click`,re,he),J(`input`,j,fe),J(`click`,Se,ge),X(e,n)},$$slots:{default:!0}}),gg(n,(e,t)=>vw?.(e,t),()=>ve),X(e,n)},$$slots:{default:!0}}),xf()}function WE(){}var GE=0,KE=class{constructor(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=GE++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=YE.match(e)),t=>{var n=e(t);return n===void 0?null:[this,n]}}};KE.closedBy=new KE({deserialize:e=>e.split(` `)}),KE.openedBy=new KE({deserialize:e=>e.split(` `)}),KE.group=new KE({deserialize:e=>e.split(` `)}),KE.isolate=new KE({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),KE.contextHash=new KE({perNode:!0}),KE.lookAhead=new KE({perNode:!0}),KE.mounted=new KE({perNode:!0});var qE,JE=Object.create(null),YE=class e{constructor(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){var n=t.props&&t.props.length?Object.create(null):JE,r=!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(i)),a){if(a[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[a[0].id]=a[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;var t=this.prop(KE.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){var t=Object.create(null);for(var n in e)for(var r of n.split(` `))t[r]=e[n];return e=>{for(var n=e.prop(KE.group),r=-1;r<(n?n.length:0);r++){var i=t[r<0?e.name:n[r]];if(i)return i}}}};YE.none=new YE(``,Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`}(qE||={}),new KE({perNode:!0}),Fv(`/* over all fonts, sizes, and colors */
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
}`);var XE=Y(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),ZE=Y(`<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>`),QE=b.define([{tag:x.propertyName,color:`var(--internal-key-color)`},{tag:x.number,color:`var(--internal-value-color-number)`},{tag:x.bool,color:`var(--internal-value-color-boolean)`},{tag:x.string,color:`var(--internal-value-color-string)`},{tag:x.keyword,color:`var(--internal-value-color-null)`}]),$E=oe(QE),eD=QE.style;QE.style=e=>eD(e||[]);var tD=[Se.fromClass(class{constructor(e){this.view=e,this.indentUnit=ae(e.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes(`Chrome`),this.generate(e.state)}update(e){var t=ae(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new ue;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:e=>{var n=e.contentDOM.querySelector(`.cm-line`);n&&(this.initialPaddingLeft=window.getComputedStyle(n).getPropertyValue(`padding-left`),this.addStyleToBuilder(t,e.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,n){for(var r of this.getVisibleLines(t)){var i=this.numColumns(r.text,t.tabSize),a=i.numColumns,o=i.containsTab,s=`calc(${a+this.indentUnit}ch + ${n})`,c=this.isChrome?`calc(-${a+this.indentUnit}ch - ${+!!o}px)`:`-${a+this.indentUnit}ch`;e.add(r.from,r.from,me.line({attributes:{style:`padding-left: ${s}; text-indent: ${c};`}}))}}getVisibleLines(e){var t=new Set,n=null;for(var r of this.view.visibleRanges)for(var i=r.from,a=r.to,o=i;o<=a;){var s=e.doc.lineAt(o);n!==s&&(t.add(s),n=s),o=s.to+1}return t}numColumns(e,t){var n=0,r=!1;e:for(var i=0;i<e.length;i++)switch(e[i]){case` `:n+=1;continue e;case`	`:n+=t-n%t,r=!0;continue e;case`\r`:continue e;default:break e}return{numColumns:n,containsTab:r}}},{decorations:e=>e.decorations})];Fv(`/* over all fonts, sizes, and colors */
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
  outline: var(--jse-search-match-active-outline, var(--jse-search-match-outline, 2px solid #e0be00));
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
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
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
}`);var nD=Y(`<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>`),rD=Y(`<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>`,1),iD=Y(`<!> <!> <!> <!>`,1),aD=Y(`<div></div> <!> <!>`,1),oD=Y(`<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>`),sD=Y(`<div><!> <!> <!></div>`);function cD(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=Q(t,`readOnly`,9),a=Q(t,`ariaLabel`,9,void 0),o=Q(t,`mainMenuBar`,9),s=Q(t,`statusBar`,9),c=Q(t,`askToFormat`,9),l=Q(t,`externalContent`,9),u=Q(t,`externalSelection`,9),d=Q(t,`history`,9),f=Q(t,`indentation`,9),p=Q(t,`tabSize`,9),m=Q(t,`escapeUnicodeCharacters`,9),h=Q(t,`maxDocumentSize`,9),g=Q(t,`parser`,9),_=Q(t,`validator`,9),b=Q(t,`validationParser`,9),x=Q(t,`onChange`,9),ne=Q(t,`onChangeMode`,9),ae=Q(t,`onSelect`,9),ue=Q(t,`onUndo`,9),me=Q(t,`onRedo`,9),Se=Q(t,`onError`,9),Pe=Q(t,`onFocus`,9),Ie=Q(t,`onBlur`,9),Le=Q(t,`onRenderMenu`,9),P=Q(t,`onSortModal`,9),Re=Q(t,`onTransformModal`,9),ze=o_(`jsoneditor:TextMode`),Be={key:`Mod-i`,run:Et,shift:Dt,preventDefault:!0},Ve=typeof window>`u`;ze(`isSSR:`,Ve);var He,Ue=z(void 0,!0),We=z(void 0,!0),Ge=z(void 0,!0),Ke=z(!1,!0),qe=z(c(),!0),Je=z([],!0),Ye=z(!1,!0),Xe=z(0,!0),Ze=z(0,!0),Qe=null,et=new k,tt=new k,nt=new k,rt=new k,it=new k,at=new k,ot=l(),st=z(K_(ot,f(),g()),!0),ct=we.define(),lt=null;function ut(){if(!lt||lt.length===0)return!1;var e=lt[0].startState,t=lt[lt.length-1].state,n=lt.map(e=>e.changes).reduce((e,t)=>e.compose(t)),r={type:`text`,undo:{changes:n.invert(e.doc).toJSON(),selection:sn(e.selection)},redo:{changes:n.toJSON(),selection:sn(t.selection)}};return ze(`add history item`,r),d().add(r),lt=null,!0}var dt=z(m(),!0);Qh(id(function*(){if(!Ve)try{He=function(e){var t=e.target,n=e.initialText,r=e.readOnly,i=e.indentation;ze(`Create CodeMirror editor`,{readOnly:r,indentation:i});var o=function(e,t){return jb(e)?e.ranges.every(e=>e.anchor<t.length&&e.head<t.length):!1}(u(),n)?Yt(u()):void 0;return He=new Ae({state:D.create({doc:n,selection:o,extensions:[be.of([M,Be]),et.of(Ht()),de(),Me(),Oe(),fe(),te(),gt(),A(),ce(),D.allowMultipleSelections.of(!0),w(),oe(E,{fallback:!0}),j(),se(),ge(),he(),De(),Ce(),xe(),be.of([...Ne,...pe,...O,{key:`Mod-z`,run:Pt,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:Ft,preventDefault:!0},{key:`Ctrl-Shift-z`,run:Ft,preventDefault:!0},...y,...le,...ye]),$E,Ju({hideFirstIndent:!0}),Ae.domEventHandlers({dblclick:Vt}),Ae.updateListener.of(e=>{(B(Ge,e.state),e.docChanged)&&(e.transactions.some(e=>!!e.annotation(ct))||(lt=[...lt??[],e]),nn()),e.selectionSet&&on()}),Fe(),ve({top:!0}),Ae.lineWrapping,tt.of(D.readOnly.of(r)),rt.of(D.tabSize.of(p())),nt.of(tn(i)),it.of(Ae.theme({},{dark:Wt()})),at.of($t(a()))]}),parent:t}),o&&He.dispatch(He.state.update({selection:o.main,scrollIntoView:!0})),He}({target:G(Ue),initialText:cn(G(st),h(),G(Ke))?``:G(n).escapeValue(G(st)),readOnly:i(),indentation:f()})}catch(e){console.error(e)}})),$h(()=>{rn(),He&&(ze(`Destroy CodeMirror editor`),He.destroy()),bt()});var ft=Ic(),pt=Ic();function mt(){He&&(ze(`focus`),He.focus())}function ht(e,t){if(He)try{(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=He.state,i=r.doc.length,a=S(r,i,1/0);if(a){var o=[];if(e.length===0)o=vt(a,r,void 0,t);else{var s=B_(G(n).escapeValue(G(st)),e).from;s!==void 0&&s!==0&&(o=vt(a,r,s,t))}o.length>0&&function(e){yt.apply(this,arguments)}(o)}})(e,t)}catch(e){Se()(e)}}function gt(){return C.of((e,t,n)=>{var r=S(e,e.doc.length,1/0);if(!r||r.length<n)return null;for(var i=null,a=r.resolveStack(n,1);a;a=a.next){var o=a.node;if(!(o.to<=n||o.from>n)){if(i&&o.from<t)break;var s=o.type.prop(ie);if(s&&(o.to<r.length-50||r.length==e.doc.length||!_t(o))){var c=s(o,e);c&&c.from<=n&&c.from>=t&&c.to>n&&(i=c)}}}return i})}function _t(e){var t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function vt(e,t,n){var r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],i=[],a=new Set;return e.iterate({enter(e){if(n===void 0||e.from>=n){var o=re(t,e.from,e.to);if(o){var s=`${o.from}-${o.to}`;a.has(s)||(r?(i.push({from:o.from,to:o.to}),a.add(s)):i.some(e=>e.from<=o.from&&e.to>=o.to)||(i.push({from:o.from,to:o.to}),a.add(s)))}}}}),i}function yt(){return yt=id(function*(e){if(e.length!==0){var t=e.length>5e3;t&&(B(Ye,!0),B(Xe,0),B(Ze,e.length),Qe=new AbortController);var n=r=>new Promise(i=>{var a;t&&(a=Qe)!=null&&a.signal.aborted?i():requestAnimationFrame(()=>{var a=Math.min(r+100,e.length),o=e.slice(r,a);He.dispatch({effects:o.map(e=>T.of({from:e.from,to:e.to}))}),t&&B(Xe,a),a<e.length?n(a).then(i):i()})});yield n(0),t&&(B(Ye,!1),B(Xe,0),B(Ze,0),Qe=null)}}),yt.apply(this,arguments)}function bt(){Qe&&Qe.abort()}function F(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xb;if(He)try{if(e&&e.length>0){var r=B_(G(n).escapeValue(G(st)),e).from;r!==void 0&&(He.dispatch({selection:{anchor:r,head:r}}),v(He))}else ee(He);t?.(e)}catch(e){Se()(e)}}function xt(){F([],()=>!0)}function St(){ht([],!0)}var Ct=!1;function wt(e){return Tt(e,!1)}function Tt(e,t){ze(`handlePatch`,e,t);var n=g().parse(G(st)),r=jt(n,e),i=Ut(n,e);return Jt({text:g().stringify(r,null,f())},t,!1),{json:r,previousJson:n,undo:i,redo:e}}function Et(){if(ze(`format`),i())return!1;try{var e=g().parse(G(st));return Jt({text:g().stringify(e,null,f())},!0,!1),B(qe,c()),!0}catch(e){Se()(e)}return!1}function Dt(){if(ze(`compact`),i())return!1;try{var e=g().parse(G(st));return Jt({text:g().stringify(e)},!0,!1),B(qe,!1),!0}catch(e){Se()(e)}return!1}function Ot(){if(ze(`repair`),!i())try{Jt({text:Hn(G(st))},!0,!1),B(ln,_y),B(un,void 0)}catch(e){Se()(e)}}function kt(){var e;if(!i())try{var t=g().parse(G(st));Ct=!0,P()({id:ft,json:t,rootPath:[],onSort:(e=id(function*(e){var t=e.operations;ze(`onSort`,t),Tt(t,!0)}),function(t){return e.apply(this,arguments)}),onClose:()=>{Ct=!1,mt()}})}catch(e){Se()(e)}}function At(e){var t=e.id,n=e.rootPath,r=e.onTransform,i=e.onClose;try{var a=g().parse(G(st));Ct=!0,Re()({id:t||pt,json:a,rootPath:n||[],onTransform:e=>{r?r({operations:e,json:a,transformedJson:jt(a,e)}):(ze(`onTransform`,e),Tt(e,!0))},onClose:()=>{Ct=!1,mt(),i&&i()}})}catch(e){Se()(e)}}function Mt(){i()||At({rootPath:[]})}function Nt(){He&&(G(Ue)&&G(Ue).querySelector(`.cm-search`)?ke(He):Ee(He))}function Pt(){if(i())return!1;rn();var e=d().undo();return ze(`undo`,e),Wy(e)?(He.dispatch({annotations:ct.of(`undo`),changes:N.fromJSON(e.undo.changes),selection:_e.fromJSON(e.undo.selection),scrollIntoView:!0}),!0):(ue()(e),!1)}function Ft(){if(i())return!1;rn();var e=d().redo();return ze(`redo`,e),Wy(e)?(He.dispatch({annotations:ct.of(`redo`),changes:N.fromJSON(e.redo.changes),selection:_e.fromJSON(e.redo.selection),scrollIntoView:!0}),!0):(me()(e),!1)}function It(){B(Ke,!0),Jt(l(),!0,!0)}function Lt(){ne()(ev.tree)}function Rt(){Qt()}function zt(e){ze(`select validation error`,e);var t=Gt(e),n=t.from,r=t.to;n!==void 0&&r!==void 0&&(Bt(n,r),mt())}function Bt(e,t){ze(`setSelection`,{anchor:e,head:t}),He&&He.dispatch(He.state.update({selection:{anchor:e,head:t},scrollIntoView:!0}))}function Vt(e,t){if(t.state.selection.ranges.length===1){var n=t.state.selection.ranges[0],r=G(st).slice(n.from,n.to);if(r===`{`||r===`[`){var i=Lc.parse(G(st)),a=Object.keys(i.pointers).find(e=>i.pointers[e].value?.pos===n.from),o=i.pointers[a];a&&o&&o.value&&o.valueEnd&&(ze(`pointer found, selecting inner contents of path:`,a,o),Bt(o.value.pos+1,o.valueEnd.pos-1))}}}function Ht(){return je(dn,{delay:300})}function Wt(){return!!G(Ue)&&getComputedStyle(G(Ue)).getPropertyValue(`--jse-theme`).includes(`dark`)}function Gt(e){var t=e.path,r=e.message,i=e.severity,a=B_(G(n).escapeValue(G(st)),t);return{path:t,line:a.line,column:a.column,from:a.from,to:a.to,message:r,severity:i,actions:[]}}function Kt(e,t){var n=e.line,r=e.column,a=e.position,o=e.message;return{path:[],line:n,column:r,from:a,to:a,severity:rv.error,message:o,actions:t&&!i()?[{name:`Auto repair`,apply:()=>Ot()}]:void 0}}function qt(e){return{from:e.from||0,to:e.to||0,message:e.message||``,actions:e.actions,severity:e.severity}}function Jt(e,t,r){var i=K_(e,f(),g()),a=!hc(e,ot),o=ot;ze(`setCodeMirrorContent`,{isChanged:a,emitChange:t,forceUpdate:r}),He&&(a||r)&&(ot=e,B(st,i),cn(G(st),h(),G(Ke))||He.dispatch({changes:{from:0,to:He.state.doc.length,insert:G(n).escapeValue(G(st))}}),ut(),a&&t&&an(ot,o))}function Yt(e){return jb(e)?_e.fromJSON(e):void 0}function Xt(){return Zt.apply(this,arguments)}function Zt(){return Zt=id(function*(){ze(`refresh`),yield function(){return en.apply(this,arguments)}()}),Zt.apply(this,arguments)}function Qt(){if(He){var e=He?G(n).unescapeValue(He.state.doc.toString()):``,t=e!==G(st);if(ze(`onChangeCodeMirrorValue`,{isChanged:t}),t){var r=ot;B(st,e),ot={text:G(st)},ut(),an(ot,r),Qp(),on()}}}function $t(e){return Ae.contentAttributes.of(e?{"aria-label":e}:{})}function en(){return(en=id(function*(){if(Qp(),He){var e=Wt();return ze(`updateTheme`,{dark:e}),He.dispatch({effects:[it.reconfigure(Ae.theme({},{dark:e}))]}),new Promise(e=>setTimeout(e))}return Promise.resolve()})).apply(this,arguments)}function tn(e){var t=Te.of(typeof e==`number`?` `.repeat(e):e);return e===`	`?[t]:[t,tD]}sw({onMount:Qh,onDestroy:$h,getWindow:()=>wv(G(We)),hasFocus:()=>Ct&&document.hasFocus()||Tv(G(We)),onFocus:Pe(),onBlur:()=>{rn(),Ie()()}});var nn=$e(Qt,300);function rn(){nn.flush()}function an(e,t){x()&&x()(e,t,{contentErrors:fn(),patchResult:void 0})}function on(){ae()(sn(G(Ge).selection))}function sn(e){return I({type:tv.text},e.toJSON())}function cn(e,t,n){return!!e&&e.length>t&&!n}var ln=z(_y,!0),un=z(void 0,!0);function dn(){if(cn(G(st),h(),G(Ke)))return[];var e=fn();return Ny(e)?[qt(Kt(e.parseError,e.isRepairable))]:Py(e)?e.validationErrors.map(Gt).map(qt):[]}function fn(){ze(`validate:start`),rn();var e=pn(G(n).escapeValue(G(st)),_(),g(),b());return Ny(e)?(B(ln,e.isRepairable?vy:`invalid`),B(un,e.parseError),B(Je,[])):(B(ln,_y),B(un,void 0),B(Je,e?.validationErrors||[])),ze(`validate:end`),e}var pn=_u(aw);function mn(){G(un)&&function(e){ze(`select parse error`,e);var t=Kt(e,!1);Bt(t.from==null?0:t.from,t.to==null?0:t.to),mt()}(G(un))}var hn={icon:Ml,text:`Show me`,title:`Move to the parse error location`,onClick:mn};U(()=>q(m()),()=>{B(n,cv({escapeControlCharacters:!1,escapeUnicodeCharacters:m()}))}),U(()=>q(l()),()=>{Jt(l(),!1,!1)}),U(()=>q(u()),()=>{(function(e){if(jb(e)){var t=Yt(e);!He||!t||G(Ge)&&G(Ge).selection.eq(t)||(ze(`applyExternalSelection`,t),He.dispatch({selection:t}))}})(u())}),U(()=>q(_()),()=>{(function(e){ze(`updateLinter`,e),He&&He.dispatch({effects:et.reconfigure(Ht())})})(_())}),U(()=>q(f()),()=>{(function(e){He&&(ze(`updateIndentation`,e),He.dispatch({effects:nt.reconfigure(tn(e))}))})(f())}),U(()=>q(p()),()=>{(function(e){He&&(ze(`updateTabSize`,e),He.dispatch({effects:rt.reconfigure(D.tabSize.of(e))}))})(p())}),U(()=>q(i()),()=>{(function(e){He&&(ze(`updateReadOnly`,e),He.dispatch({effects:[tt.reconfigure(D.readOnly.of(e))]}))})(i())}),U(()=>q(a()),()=>{(function(e){He&&(ze(`updateAriaLabel`,e),He.dispatch({effects:[at.reconfigure($t(e))]}))})(a())}),U(()=>(G(dt),q(m())),()=>{G(dt)!==m()&&(B(dt,m()),ze(`forceUpdateText`,{escapeUnicodeCharacters:m()}),He&&He.dispatch({changes:{from:0,to:He.state.doc.length,insert:G(n).escapeValue(G(st))}}))}),U(()=>(G(ln),q(i()),Gl),()=>{B(r,G(ln)!==vy||i()?[hn]:[{icon:Gl,text:`Auto repair`,title:`Automatically repair JSON`,onClick:Ot},hn])}),Nm();var gn={focus:mt,collapse:ht,expand:F,patch:wt,handlePatch:Tt,openTransformModal:At,refresh:Xt,flush:rn,validate:fn};Qg(!0);var _n,vn=sD(),yn=V(vn),bn=e=>{var t=R(()=>(G(st),K(()=>G(st).length===0))),n=R(()=>!G(t)),r=R(()=>!G(t)),a=R(()=>!G(t)),o=R(()=>!G(t)),s=R(()=>!G(t)),c=R(()=>!G(t));(function(e,t){bf(t,!1);var n=z(void 0,!0),r=Q(t,`readOnly`,9,!1),i=Q(t,`onExpandAll`,9),a=Q(t,`onCollapseAll`,9),o=Q(t,`onFormat`,9),s=Q(t,`onCompact`,9),c=Q(t,`onSort`,9),l=Q(t,`onTransform`,9),u=Q(t,`onToggleSearch`,9),d=Q(t,`onUndo`,9),f=Q(t,`onRedo`,9),p=Q(t,`canExpandAll`,9),m=Q(t,`canCollapseAll`,9),h=Q(t,`canUndo`,9),g=Q(t,`canRedo`,9),_=Q(t,`canFormat`,9),v=Q(t,`canCompact`,9),y=Q(t,`canSort`,9),b=Q(t,`canTransform`,9),x=Q(t,`onRenderMenu`,9),S=z(void 0,!0),C=z(void 0,!0),w={type:`button`,icon:jl,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:u()},T=z(void 0,!0);U(()=>(q(i()),q(p())),()=>{B(S,{type:`button`,icon:fT,title:`Expand all`,className:`jse-expand-all`,onClick:i(),disabled:!p()})}),U(()=>(q(a()),q(m())),()=>{B(C,{type:`button`,icon:pT,title:`Collapse all`,className:`jse-collapse-all`,onClick:a(),disabled:!m()})}),U(()=>(q(r()),G(S),G(C),q(o()),q(_()),q(s()),q(v()),q(c()),q(y()),q(l()),q(b()),q(d()),q(h()),q(f()),q(g())),()=>{B(T,r()?[G(S),G(C),{type:`separator`},w,{type:`space`}]:[G(S),G(C),{type:`separator`},{type:`button`,icon:mT,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,className:`jse-format`,onClick:o(),disabled:r()||!_()},{type:`button`,icon:hT,title:`Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)`,className:`jse-compact`,onClick:s(),disabled:r()||!v()},{type:`separator`},{type:`button`,icon:eu,title:`Sort`,className:`jse-sort`,onClick:c(),disabled:r()||!y()},{type:`button`,icon:Ol,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:l(),disabled:r()||!b()},w,{type:`separator`},{type:`button`,icon:uu,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:d(),disabled:!h()},{type:`button`,icon:cu,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:f(),disabled:!g()},{type:`space`}])}),U(()=>(q(x()),G(T)),()=>{B(n,x()(G(T))||G(T))}),Nm(),Qg(!0),Dw(e,{get items(){return G(n)}}),xf()})(e,{get readOnly(){return i()},onExpandAll:xt,onCollapseAll:St,onFormat:Et,onCompact:Dt,onSort:kt,onTransform:Mt,onToggleSearch:Nt,onUndo:Pt,onRedo:Ft,get canExpandAll(){return G(n)},get canCollapseAll(){return G(r)},get canFormat(){return G(a)},get canCompact(){return G(o)},get canSort(){return G(s)},get canTransform(){return G(c)},get canUndo(){return q(d()),K(()=>d().canUndo)},get canRedo(){return q(d()),K(()=>d().canRedo)},get onRenderMenu(){return Le()}})};Z(yn,e=>{o()&&e(bn)});var xn=H(yn,2),Sn=e=>{var t=nD(),n=H(V(t),2),r=V(n),i=H(n,2);W(()=>Tg(r,`width: ${G(Ze)>0?G(Xe)/G(Ze)*100:0}%`)),J(`click`,i,bt),X(e,t)};Z(xn,e=>{G(Ye)&&e(Sn)});var Cn=H(xn,2),wn=e=>{var t,n=R(()=>(G(st),q(h()),G(Ke),K(()=>cn(G(st),h(),G(Ke))))),i=aD(),a=wm(i);Yg(a,e=>B(Ue,e),()=>G(Ue));var o=H(a,2),c=e=>{var t=rD(),n=wm(t),r=R(()=>(q(Bx),q(h()),G(st),K(()=>`The JSON document is larger than ${Bx(h())}, and may crash your browser when loading it in text mode. Actual size: ${Bx(G(st).length)}.`)));uw(n,{get icon(){return tu},type:`error`,get message(){return G(r)},actions:[{text:`Open anyway`,title:`Open the document in text mode. This may freeze or crash your browser.`,onClick:It},{text:`Open in tree mode`,title:`Open the document in tree mode. Tree mode can handle large documents.`,onClick:Lt},{text:`Cancel`,title:`Cancel opening this large document.`,onClick:Rt}],onClose:mt});var i=V(H(n,2));W(e=>Bh(i,e),[()=>(q(Hv),G(st),q(cy),K(()=>Hv(G(st)||``,cy)))]),X(e,t)};Z(o,e=>{G(n)&&e(c)});var l=H(o,2),u=e=>{var t=iD(),n=wm(t),i=e=>{(function(e,t){bf(t,!1);var n=Q(t,`editorState`,8),r=z(),i=z(),a=z(),o=z(),s=z();U(()=>q(n()),()=>{var e;B(r,(e=n())==null||(e=e.selection)==null||(e=e.main)==null?void 0:e.head)}),U(()=>(G(r),q(n())),()=>{var e;B(i,G(r)===void 0||(e=n())==null||(e=e.doc)==null?void 0:e.lineAt(G(r)))}),U(()=>G(i),()=>{B(a,G(i)===void 0?void 0:G(i).number)}),U(()=>(G(i),G(r)),()=>{B(o,G(i)!==void 0&&G(r)!==void 0?G(r)-G(i).from+1:void 0)}),U(()=>q(n()),()=>{var e;B(s,(e=n())==null||(e=e.selection)==null||(e=e.ranges)==null?void 0:e.reduce((e,t)=>e+t.to-t.from,0))}),Nm(),Qg();var c=ZE(),l=V(c),u=e=>{var t=XE(),n=V(t);W(()=>Bh(n,`Line: ${G(a)??``}`)),X(e,t)};Z(l,e=>{G(a)!==void 0&&e(u)});var d=H(l,2),f=e=>{var t=XE(),n=V(t);W(()=>Bh(n,`Column: ${G(o)??``}`)),X(e,t)};Z(d,e=>{G(o)!==void 0&&e(f)});var p=H(d,2),m=e=>{var t=XE(),n=V(t);W(()=>Bh(n,`Selection: ${G(s)??``} characters`)),X(e,t)};Z(p,e=>{G(s)!==void 0&&G(s)>0&&e(m)}),X(e,c),xf()})(e,{get editorState(){return G(Ge)}})};Z(n,e=>{s()&&e(i)});var a=H(n,2),o=e=>{uw(e,{type:`error`,get icon(){return tu},get message(){return G(un),K(()=>G(un).message)},get actions(){return G(r)},onClick:mn,onClose:mt})};Z(a,e=>{G(un)&&e(o)});var c=H(a,2),l=e=>{var t=R(()=>[{icon:mT,text:`Format`,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,onClick:Et},{icon:Xl,text:`No thanks`,title:`Close this message`,onClick:()=>B(qe,!1)}]);uw(e,{type:`success`,message:`Do you want to format the JSON?`,get actions(){return G(t)},onClose:mt})},u=pp(()=>(G(un),G(qe),q($_),G(st),K(()=>!G(un)&&G(qe)&&$_(G(st)))));Z(c,e=>{G(u)&&e(l)}),_w(H(c,2),{get validationErrors(){return G(Je)},selectError:zt}),X(e,t)};Z(l,e=>{G(n)||e(u)}),W(()=>t=Cg(a,1,`jse-contents svelte-k2b9e6`,null,t,{"jse-hidden":G(n)})),X(e,i)},Tn=e=>{X(e,oD())};return Z(Cn,e=>{Ve?e(Tn,-1):e(wn)}),Yg(vn,e=>B(We,e),()=>G(We)),W(()=>_n=Cg(vn,1,`jse-text-mode svelte-k2b9e6`,null,_n,{"no-main-menu":!o()})),X(e,vn),qg(t,`focus`,mt),qg(t,`collapse`,ht),qg(t,`expand`,F),qg(t,`patch`,wt),qg(t,`handlePatch`,Tt),qg(t,`openTransformModal`,At),qg(t,`refresh`,Xt),qg(t,`flush`,rn),qg(t,`validate`,fn),xf(gn)}Fv(`/* over all fonts, sizes, and colors */
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
  outline: var(--jse-search-match-active-outline, var(--jse-search-match-outline, 2px solid #e0be00));
}`);var lD=Y(`<button type="button"> </button>`);Fv(`/* over all fonts, sizes, and colors */
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
}`);var uD=Y(`<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>`),dD=Y(`<button type="button"><span class="jse-column-name"> </span> <!></button>`);Fv(`/* over all fonts, sizes, and colors */
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
}`);var fD=Y(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),pD=Y(`<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>`),mD=Y(`<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>`),hD=Y(`<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>`);function gD(e,t){bf(t,!0);var n=pp(()=>t.json?function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=[];return function e(r,i){st(r)&&i.length<t&&Object.keys(r).forEach(t=>{e(r[t],i.concat(t))}),ot(r)&&n.push(i)}(e,[]),n}(t.json).slice(0,99).filter(e=>e.length>0):[]),r=pp(()=>!mc(G(n))),i=pp(()=>t.json===void 0&&(t.text===``||t.text===void 0)),a=pp(()=>G(r)?`Object with nested arrays`:G(i)?`An empty document`:st(t.json)?`An object`:ot(t.json)?`An empty array`:`A ${x_(t.json,t.parser)}`),o=hD(),s=V(H(V(o),2)),c=V(s),l=H(s,2),u=V(l),d=e=>{X(e,Ph(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},f=e=>{X(e,fD())},p=e=>{var t=Ph();W(()=>Bh(t,`${G(a)??``} cannot be opened in table mode. You can open the document in tree mode instead.`)),X(e,t)};Z(u,e=>{G(r)?e(d):G(i)&&!t.readOnly?e(f,1):e(p,-1)});var m=H(l,2);cg(m,17,()=>G(n),og,(e,n)=>{var r=pp(()=>function(e){return F(t.json,e).length}(G(n))),i=mD(),a=V(i),o=V(a),s=V(H(o)),c=H(a,2),l=V(c),u=H(c,2),d=e=>{var r=pD();Dh(`click`,r,()=>t.extractPath(G(n))),X(e,r)};Z(u,e=>{t.readOnly||e(d)}),W(e=>{Bh(o,`"${e??``}" `),Bh(s,`(${G(r)??``} ${G(r)===1?`item`:`items`})`),Bh(l,t.readOnly?`View`:`Edit`)},[()=>Zx(G(n))]),Dh(`click`,c,()=>t.openJSONEditorModal(G(n))),X(e,i)});var h=H(m,2);W(()=>Bh(c,G(a))),Dh(`click`,o,()=>t.onClick()),Dh(`click`,h,()=>t.onChangeMode(ev.tree)),X(e,o),xf()}Oh([`click`]),Fv(`/* over all fonts, sizes, and colors */
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
}`);var _D=Y(`<button type="button"><!></button>`);Fv(`/* over all fonts, sizes, and colors */
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
}`);var vD=Y(`<div class="jse-table-root-error svelte-1p86y3c"><!></div>`),yD=Y(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),bD=Y(`<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>`),xD=Y(`<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>`),SD=Y(`<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>`),CD=Y(`<td class="jse-table-cell svelte-1p86y3c"></td>`),wD=Y(`<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>`),TD=Y(`<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>`,1),ED=Y(`<!> <!>`,1),DD=Y(`<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" aria-hidden="true" class="jse-hidden-input svelte-1p86y3c"/></label> <!>`,1),OD=Y(`<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>`),kD=Y(`<div role="table"><!> <!></div> <!> <!>`,1);function AD(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=o_(`jsoneditor:TableMode`),o=yf(`absolute-popup`),s=o.openAbsolutePopup,c=o.closeAbsolutePopup,l=$C(),u=Ic(),d=Ic(),f=typeof window>`u`;a(`isSSR:`,f);var p=Q(t,`readOnly`,9),m=Q(t,`ariaLabel`,9,void 0),h=Q(t,`externalContent`,9),g=Q(t,`externalSelection`,9),_=Q(t,`history`,9),v=Q(t,`truncateTextSize`,9),y=Q(t,`mainMenuBar`,9),b=Q(t,`escapeControlCharacters`,9),x=Q(t,`escapeUnicodeCharacters`,9),S=Q(t,`flattenColumns`,9),C=Q(t,`parser`,9),w=Q(t,`parseMemoizeOne`,9),T=Q(t,`validator`,9),E=Q(t,`validationParser`,9),ee=Q(t,`indentation`,9),te=Q(t,`onChange`,9),ne=Q(t,`onChangeMode`,9),re=Q(t,`onSelect`,9),ie=Q(t,`onUndo`,9),ae=Q(t,`onRedo`,9),oe=Q(t,`onRenderValue`,9),se=Q(t,`onRenderMenu`,9),D=Q(t,`onRenderContextMenu`,9),O=Q(t,`onFocus`,9),ce=Q(t,`onBlur`,9),le=Q(t,`onSortModal`,9),ue=Q(t,`onTransformModal`,9),de=Q(t,`onJSONEditorModal`,9),fe=z(void 0,!0),pe=z(void 0,!0),me=z(void 0,!0),he=z(void 0,!0),ge=z(void 0,!0);sw({onMount:Qh,onDestroy:$h,getWindow:()=>wv(G(pe)),hasFocus:()=>Oe&&document.hasFocus()||Tv(G(pe)),onFocus:()=>{ke=!0,O()&&O()()},onBlur:()=>{ke=!1,ce()&&ce()()}});var _e,k=z(void 0,!0),ve=z(void 0,!0),A=z(void 0,!0),j=z(void 0,!0),ye=z(void 0,!0),be=z(void 0,!0),M=z(!1,!0),N=z(!1,!0);function xe(e){B(be,(_e=e)?Ix(G(k),_e.items):void 0)}function Se(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=id(function*(e){B(P,void 0),yield rt(e)})).apply(this,arguments)}function we(){B(M,!1),B(N,!1),$e()}var Te=z(1e4,!0),Ee=z([],!0),De=z(void 0,!0),Oe=!1,ke=!1,Ae=z(!1,!0),je=z({},!0),Me=z(600,!0),Ne=z(0,!0),Pe=18;function Fe(e){B(P,e)}function Ie(e){G(P)&&e!==void 0&&(Et(e,sx(G(P)))&&Et(e,$(G(P)))||(a(`clearing selection: path does not exist anymore`,G(P)),B(P,void 0)))}var Le=z(G(k)===void 0?void 0:Ky({json:G(k)}),!0),P=z(Ab(g())?g():void 0,!0),Re=z(void 0,!0),ze=z(!1,!0);function Be(e){if(!p()){a(`onSortByHeader`,e);var t=e.sortDirection===av.desc?-1:1;Je(yT(G(k),[],e.path,t),(t,n)=>({state:n,sortedColumn:e}))}}Qh(()=>{G(P)&&at($(G(P)))});var Ve=z(void 0,!0);function He(e){if(e.json!==void 0||e.text!==void 0){var t=G(k)!==void 0&&e.json!==void 0;_().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:Wb(e.selection),sortedColumn:e.sortedColumn},redo:{patch:t?[{op:`replace`,path:``,value:G(k)}]:void 0,json:G(k),text:G(ve),documentState:G(Le),textIsRepaired:G(ze),selection:Wb(G(P)),sortedColumn:G(Re)}})}}var Ue=z([],!0),We=_u(iw);function Ge(e,t,n,r){ew(()=>{var i;try{i=We(e,t,n,r)}catch(e){i=[{path:[],message:`Failed to validate: `+e.message,severity:rv.warning}]}hc(i,G(Ue))||(a(`validationErrors changed:`,i),B(Ue,i))},e=>a(`validationErrors updated in ${e} ms`))}function Ke(){return a(`validate`),G(A)?{parseError:G(A),isRepairable:!1}:(Ge(G(k),T(),C(),E()),mc(G(Ue))?void 0:{validationErrors:G(Ue)})}function qe(e,t){if(a(`patch`,e,t),G(k)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=G(k),r={json:void 0,text:G(ve),documentState:G(Le),selection:Wb(G(P)),sortedColumn:G(Re),textIsRepaired:G(ze)},i=Cx(G(k),e),o=ib(G(k),G(Le),e),s=XT(G(Re),e,G(Ee)),c=typeof t==`function`?t(o.json,o.documentState,G(P)):void 0;return B(k,c?.json===void 0?o.json:c.json),B(Le,c?.state===void 0?o.documentState:c.state),B(P,c?.selection===void 0?G(P):c.selection),B(Re,c?.sortedColumn===void 0?s:c.sortedColumn),B(ve,void 0),B(ze,!1),B(j,void 0),B(ye,void 0),B(A,void 0),_().add({type:`tree`,undo:I({patch:i},r),redo:{patch:e,json:void 0,text:void 0,documentState:G(Le),selection:Wb(G(P)),sortedColumn:G(Re),textIsRepaired:G(ze)}}),{json:G(k),previousJson:n,undo:i,redo:e}}function Je(e,t){a(`handlePatch`,e,t);var n={json:G(k),text:G(ve)},r=qe(e,t);return Ye(n,r),r}function Ye(e,t){if((e.json!==void 0||e?.text!==void 0)&&te()){if(G(ve)!==void 0){var n={text:G(ve),json:void 0};te()(n,e,{contentErrors:Ke(),patchResult:t})}else if(G(k)!==void 0){var r={text:void 0,json:G(k)};te()(r,e,{contentErrors:Ke(),patchResult:t})}}}function Xe(e){a(`pasted json as text`,e),B(j,e)}function Ze(e){a(`pasted multiline text`,{pastedText:e}),B(ye,e)}function Qe(e){var t=parseInt(e[0],10),n=[String(t+1),...e.slice(1)];return Et(G(k),n)?qb(n):qb(e)}function $e(){a(`focus`),G(he)&&(G(he).focus({preventScroll:!0}),G(he).select())}function et(e){B(Ne,e.target.scrollTop)}function tt(){G(P)||B(P,function(){if(ot(G(k))&&!mc(G(k))&&!mc(G(Ee)))return qb([`0`,...G(Ee)[0]])}())}function nt(){if(G(ze)&&G(k)!==void 0){var e={json:G(k),text:G(ve)},t={json:G(k),documentState:G(Le),selection:G(P),sortedColumn:G(Re),text:G(ve),textIsRepaired:G(ze)};B(ve,void 0),B(ze,!1),Ie(G(k)),He(t),Ye(e,void 0)}return{json:G(k),text:G(ve)}}function rt(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).scrollToWhenVisible,n=t===void 0||t,r=G(M)?xy:0,i=WT(e,G(Ee),je,Pe),o=i-G(Ne)+r+Pe,s=ct(e);if(a(`scrollTo`,{path:e,top:i,scrollTop:G(Ne),elem:s}),!G(me))return Promise.resolve();var c=G(me).getBoundingClientRect();if(s&&!n){var u=s.getBoundingClientRect();if(u.bottom>c.top&&u.top<c.bottom)return Promise.resolve()}var d=-Math.max(r+2*Pe,c.height/4);return new Promise(s?t=>{l(s,{container:G(me),offset:d,duration:300,callback:()=>{it(e),t()}})}:t=>{l(o,{container:G(me),offset:d,duration:300,callback:()=>{Qp(),it(e),t()}})})}function it(e){var t=ct(e);if(t&&G(me)){var n=G(me).getBoundingClientRect(),r=t.getBoundingClientRect();if(r.right>n.right){var i=r.right-n.right;pm(me,G(me).scrollLeft+=i)}if(r.left<n.left){var a=n.left-r.left;pm(me,G(me).scrollLeft-=a)}}}function at(e){(function(e){if(G(me)){var t=GT(e,G(Ee)).rowIndex,n=WT(e,G(Ee),je,Pe),r=n+(je[t]||Pe),i=Pe,a=G(me).getBoundingClientRect(),o=G(Ne),s=G(Ne)+a.height-i;if(r>s){var c=r-s;pm(me,G(me).scrollTop+=c)}if(n<o){var l=o-n;pm(me,G(me).scrollTop-=l)}}})(e),it(e)}function ct(e){var t=G(Ee).find(t=>Ub(e.slice(1),t)),n=t?e.slice(0,1).concat(t):e;return G(me)?.querySelector(`td[data-path="${Ov(n)}"]`)??void 0}function lt(e){var t=e.anchor,n=e.left,r=e.top,i=e.width,a=e.height,o=e.offsetTop,l=e.offsetLeft,u=e.showTip,d=function(e){var t=e.json,n=e.documentState,r=e.selection,i=e.readOnly,a=e.onEditValue,o=e.onEditRow,s=e.onToggleEnforceString,c=e.onCut,l=e.onCopy,u=e.onPaste,d=e.onRemove,f=e.onDuplicateRow,p=e.onInsertBeforeRow,m=e.onInsertAfterRow,h=e.onRemoveRow,g=t!==void 0,_=!!r,v=t!==void 0&&r?F(t,$(r)):void 0,y=g&&(Ob(r)||Eb(r)||Db(r)),b=!i&&g&&r!==void 0&&Vb(r),x=b&&!h_(v),S=!i&&y,C=r!==void 0&&pb(t,n,$(r));return[{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`label`,text:`Table cell:`},{type:`dropdown-button`,main:{type:`button`,onClick:()=>a(),icon:Zl,text:`Edit`,title:`Edit the value (Double-click on the value)`,disabled:!b},width:`11em`,items:[{type:`button`,icon:Zl,text:`Edit`,title:`Edit the value (Double-click on the value)`,onClick:()=>a(),disabled:!b},{type:`button`,icon:C?zl:du,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!x}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:nu,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!S},width:`10em`,items:[{type:`button`,icon:nu,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:i||!y},{type:`button`,icon:nu,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:i||!y}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:su,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!y},width:`12em`,items:[{type:`button`,icon:su,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!1),disabled:!y},{type:`button`,icon:su,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!y}]},{type:`button`,onClick:()=>u(),icon:El,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:i||!_},{type:`button`,onClick:()=>d(),icon:Kl,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!y}]},{type:`column`,items:[{type:`label`,text:`Table row:`},{type:`button`,onClick:()=>o(),icon:Zl,text:`Edit row`,title:`Edit the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>f(),icon:Rl,text:`Duplicate row`,title:`Duplicate the current row (Ctrl+D)`,disabled:i||!_||!g},{type:`button`,onClick:()=>p(),icon:ou,text:`Insert before`,title:`Insert a row before the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>m(),icon:ou,text:`Insert after`,title:`Insert a row after the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>h(),icon:Kl,text:`Remove row`,title:`Remove current row`,disabled:i||!_||!g}]}]}]}({json:G(k),documentState:G(Le),selection:G(P),readOnly:p(),onEditValue:pt,onEditRow:mt,onToggleEnforceString:ht,onCut:Tt,onCopy:At,onPaste:vt,onRemove:Nt,onDuplicateRow:Ft,onInsertBeforeRow:It,onInsertAfterRow:Lt,onRemoveRow:Rt}),f=D()(d)??d;if(!1!==f){var m={left:n,top:r,offsetTop:o,offsetLeft:l,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{Oe=!1,$e()}};Oe=!0;var h=s(SE,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:f,onRequestClose(){c(h),$e()}},m)}}function dt(e){if(!$b(G(P)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==G(he))lt({left:e.clientX,top:e.clientY,width:by,height:yy,showTip:!1});else{var t=G(me)?.querySelector(`.jse-table-cell.jse-selected-value`);if(t)lt({anchor:t,offsetTop:2,width:by,height:yy,showTip:!1});else{var n=G(me)?.getBoundingClientRect();n&&lt({top:n.top+2,left:n.left+2,width:by,height:yy,showTip:!1})}}}function ft(e){lt({anchor:Ev(e.target,`BUTTON`),offsetTop:0,width:by,height:yy,showTip:!0})}function pt(){if(!p()&&G(P)){var e=$(G(P));h_(F(G(k),e))?Kt(e):B(P,qb(e))}}function mt(){!p()&&G(P)&&Kt($(G(P)).slice(0,1))}function ht(){if(!p()&&Db(G(P))){var e=G(P).path,t=Ot(e),n=F(G(k),e),r=!pb(G(k),G(Le),e),i=r?String(n):w_(String(n),C());a(`handleToggleEnforceString`,{enforceString:r,value:n,updatedValue:i}),Je([{op:`replace`,path:t,value:i}],(t,n)=>({state:cb(G(k),n,e,{type:`value`,enforceString:r})}))}}function gt(){return _t.apply(this,arguments)}function _t(){return(_t=id(function*(){(a(`apply pasted json`,G(j)),G(j))&&((0,G(j).onPasteAsJson)(),setTimeout($e))})).apply(this,arguments)}function vt(){return yt.apply(this,arguments)}function yt(){return(yt=id(function*(){try{Vt(yield navigator.clipboard.readText())}catch(e){console.error(e),B(Ae,!0)}})).apply(this,arguments)}function bt(){return xt.apply(this,arguments)}function xt(){return(xt=id(function*(){a(`apply pasted multiline text`,G(ye)),G(ye)&&(Vt(JSON.stringify(G(ye))),setTimeout($e))})).apply(this,arguments)}function St(){a(`clear pasted json`),B(j,void 0),$e()}function Ct(){a(`clear pasted multiline text`),B(ye,void 0),$e()}function wt(){ne()(ev.text)}function Tt(e){return kt.apply(this,arguments)}function kt(){return(kt=id(function*(e){yield QT({json:G(k),selection:G(P),indentation:e?ee():void 0,readOnly:p(),parser:C(),onPatch:Je})})).apply(this,arguments)}function At(){return Mt.apply(this,arguments)}function Mt(){return Mt=id(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];G(k)!==void 0&&(yield eE({json:G(k),selection:G(P),indentation:e?ee():void 0,parser:C()}))}),Mt.apply(this,arguments)}function Nt(){rE({json:G(k),text:G(ve),selection:G(P),keepSelection:!0,readOnly:p(),onChange:te(),onPatch:Je})}function Pt(e){p()||(a(`extract`,{path:e}),Je(_x(G(k),qb(e))))}function Ft(){(function(e){var t=e.json,n=e.selection,r=e.columns,i=e.readOnly,a=e.onPatch;if(!i&&t!==void 0&&n&&ex(n)){var o=GT($(n),r),s=o.rowIndex,c=o.columnIndex;ZT(`duplicate row`,{rowIndex:s}),a(gx(t,[[String(s)]]),(e,n)=>({state:n,selection:qb(KT({rowIndex:s<t.length?s+1:s,columnIndex:c},r))}))}})({json:G(k),selection:G(P),columns:G(Ee),readOnly:p(),onPatch:Je})}function It(){(function(e){var t=e.json,n=e.selection,r=e.columns,i=e.readOnly,a=e.onPatch;if(!i&&t!==void 0&&n&&ex(n)){var o=GT($(n),r).rowIndex;ZT(`insert before row`,{rowIndex:o}),a(px(t,[String(o)],[{key:``,value:st(t[0])?{}:``}]))}})({json:G(k),selection:G(P),columns:G(Ee),readOnly:p(),onPatch:Je})}function Lt(){(function(e){var t=e.json,n=e.selection,r=e.columns,i=e.readOnly,a=e.onPatch;if(!i&&t!==void 0&&n&&ex(n)){var o=GT($(n),r),s=o.rowIndex,c=o.columnIndex;ZT(`insert after row`,{rowIndex:s});var l=s+1,u=[String(l)],d=[{key:``,value:st(t[0])?{}:``}];a(l<t.length?px(t,u,d):mx(t,[],d),(e,t)=>({state:t,selection:qb(KT({rowIndex:l,columnIndex:c},r))}))}})({json:G(k),selection:G(P),columns:G(Ee),readOnly:p(),onPatch:Je})}function Rt(){(function(e){var t=e.json,n=e.selection,r=e.columns,i=e.readOnly,a=e.onPatch;if(!i&&t!==void 0&&n&&ex(n)){var o=GT($(n),r),s=o.rowIndex,c=o.columnIndex;ZT(`remove row`,{rowIndex:s}),a(yx([[String(s)]]),(e,t)=>{var n=s<e.length?s:s>0?s-1:void 0,i=n===void 0?void 0:qb(KT({rowIndex:n,columnIndex:c},r));return ZT(`remove row new selection`,{rowIndex:s,newRowIndex:n,newSelection:i}),{state:t,selection:i}})}})({json:G(k),selection:G(P),columns:G(Ee),readOnly:p(),onPatch:Je})}function zt(){return(zt=id(function*(e){yield aE({char:e,selectInside:!1,json:G(k),selection:G(P),readOnly:p(),parser:C(),onPatch:Je,onReplaceJson:Ht,onSelect:Fe})})).apply(this,arguments)}function Bt(e){e.preventDefault(),Vt(e.clipboardData?.getData(`text/plain`))}function Vt(e){e!==void 0&&nE({clipboardText:e,json:G(k),selection:G(P),readOnly:p(),parser:C(),onPatch:Je,onChangeText:Ut,onPasteMultilineText:Ze,openRepairModal:qt})}function Ht(e,t){var n={json:G(k),text:G(ve)},r={json:G(k),documentState:G(Le),selection:G(P),sortedColumn:G(Re),text:G(ve),textIsRepaired:G(ze)},i=Zy(e,G(Le)),a=typeof t==`function`?t(e,i,G(P)):void 0;B(k,a?.json===void 0?e:a.json),B(Le,a?.state===void 0?i:a.state),B(P,a?.selection===void 0?G(P):a.selection),B(Re,void 0),B(ve,void 0),B(ze,!1),B(A,void 0),Ie(G(k)),He(r),Ye(n,void 0)}function Ut(e,t){a(`handleChangeText`);var n={json:G(k),text:G(ve)},r={json:G(k),documentState:G(Le),selection:G(P),sortedColumn:G(Re),text:G(ve),textIsRepaired:G(ze)};try{B(k,w()(e)),B(Le,Zy(G(k),G(Le))),B(ve,void 0),B(ze,!1),B(A,void 0)}catch(t){try{B(k,w()(Hn(e))),B(Le,Zy(G(k),G(Le))),B(ve,e),B(ze,!0),B(A,void 0)}catch{B(k,void 0),B(Le,void 0),B(ve,e),B(ze,!1),B(A,G(ve)===``?void 0:z_(G(ve),t.message||String(t)))}}if(typeof t==`function`){var i=t(G(k),G(Le),G(P));B(k,i?.json===void 0?G(k):i.json),B(Le,i?.state===void 0?G(Le):i.state),B(P,i?.selection===void 0?G(P):i.selection)}Ie(G(k)),He(r),Ye(n,void 0)}function Wt(e){a(`select validation error`,e),B(P,qb(e.path)),rt(e.path)}function Gt(e){if(G(k)!==void 0){var t=e.id,n=e.onTransform,r=e.onClose,i=e.rootPath||[];Oe=!0,ue()({id:t||d,json:G(k),rootPath:i||[],onTransform:e=>{n?n({operations:e,json:G(k),transformedJson:jt(G(k),e)}):(a(`onTransform`,i,e),Je(e))},onClose:()=>{Oe=!1,setTimeout($e),r&&r()}})}}function Kt(e){a(`openJSONEditorModal`,{path:e}),Oe=!0,de()({content:{json:F(G(k),e)},path:e,onPatch:Je,onClose:()=>{Oe=!1,setTimeout($e)}})}function qt(e,t){B(ge,{text:e,onParse:e=>I_(e,e=>P_(e,C())),onRepair:L_,onApply:t,onClose:$e})}function Jt(){(function(e){p()||G(k)===void 0||(Oe=!0,le()({id:u,json:G(k),rootPath:e,onSort:t=>{var n=t.operations,r=t.itemPath,i=t.direction;a(`onSort`,n,e,r,i),Je(n,(e,t)=>({state:t,sortedColumn:{path:r,sortDirection:i===-1?av.desc:av.asc}}))},onClose:()=>{Oe=!1,setTimeout($e)}}))})([])}function Yt(){Gt({rootPath:[]})}function Xt(e){a(`openFind`,{findAndReplace:e}),B(M,!1),B(N,!1),Qp(),B(M,!0),B(N,e)}function Zt(){if(!p()&&_().canUndo){var e=_().undo();if(Uy(e)){var t={json:G(k),text:G(ve)};B(k,e.undo.patch?jt(G(k),e.undo.patch):e.undo.json),B(Le,e.undo.documentState),B(P,e.undo.selection),B(Re,e.undo.sortedColumn),B(ve,e.undo.text),B(ze,e.undo.textIsRepaired),B(A,void 0),a(`undo`,{item:e,json:G(k)}),Ye(t,e.undo.patch&&e.redo.patch?{json:G(k),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),$e(),G(P)&&rt($(G(P)),{scrollToWhenVisible:!1})}else ie()(e)}}function Qt(){if(!p()&&_().canRedo){var e=_().redo();if(Uy(e)){var t={json:G(k),text:G(ve)};B(k,e.redo.patch?jt(G(k),e.redo.patch):e.redo.json),B(Le,e.redo.documentState),B(P,e.redo.selection),B(Re,e.redo.sortedColumn),B(ve,e.redo.text),B(ze,e.redo.textIsRepaired),B(A,void 0),a(`redo`,{item:e,json:G(k)}),Ye(t,e.undo.patch&&e.redo.patch?{json:G(k),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),$e(),G(P)&&rt($(G(P)),{scrollToWhenVisible:!1})}else ae()(e)}}function $t(e){B(Me,e.getBoundingClientRect().height)}U(()=>(q(b()),q(x())),()=>{B(fe,cv({escapeControlCharacters:b(),escapeUnicodeCharacters:x()}))}),U(()=>G(M),()=>{(function(e){if(G(me)){var t=e?xy:-100;G(me).scrollTo({top:pm(me,G(me).scrollTop+=t),left:G(me).scrollLeft})}})(G(M))}),U(()=>q(h()),()=>{(function(e){var t={json:G(k)},n=H_(e)?e.text!==G(ve):!hc(t.json,e.json);if(a(`update external content`,{isChanged:n}),n){var r={json:G(k),documentState:G(Le),selection:G(P),sortedColumn:G(Re),text:G(ve),textIsRepaired:G(ze)};if(H_(e))try{B(k,w()(e.text)),B(Le,Zy(G(k),G(Le))),B(ve,e.text),B(ze,!1),B(A,void 0)}catch(t){try{B(k,w()(Hn(e.text))),B(Le,Zy(G(k),G(Le))),B(ve,e.text),B(ze,!0),B(A,void 0)}catch{B(k,void 0),B(Le,void 0),B(ve,e.text),B(ze,!1),B(A,G(ve)===``?void 0:z_(G(ve),t.message||String(t)))}}else B(k,e.json),B(Le,Zy(G(k),G(Le))),B(ve,void 0),B(ze,!1),B(A,void 0);Ie(G(k)),B(Re,void 0),He(r)}})(h())}),U(()=>q(g()),()=>{(function(e){hc(G(P),e)||(a(`applyExternalSelection`,{selection:G(P),externalSelection:e}),Ab(e)&&B(P,e))})(g())}),U(()=>(G(Ee),G(k),q(S()),G(Te)),()=>{B(Ee,ot(G(k))?function(e,t){var n=new Set(t.map(Ot)),r=new Set(e.map(Ot));for(var i of n)r.has(i)||n.delete(i);for(var a of r)n.has(a)||n.add(a);return[...n].map(Dt)}(BT(G(k),S(),G(Te)),G(Ee)):[])}),U(()=>(G(k),G(Ee)),()=>{B(De,!(!G(k)||mc(G(Ee))))}),U(()=>(G(k),G(Te)),()=>{B(n,Array.isArray(G(k))&&G(k).length>G(Te))}),U(()=>(G(Ne),G(Me),G(k),G(M),xy),()=>{B(r,UT(G(Ne),G(Me),G(k),je,Pe,G(M)?xy:0))}),U(()=>G(k),()=>{G(k),G(me)&&G(me).scrollTo({top:G(me).scrollTop,left:G(me).scrollLeft})}),U(()=>G(P),()=>{var e=G(P);hc(e,g())||(a(`onSelect`,e),re()(e))}),U(()=>(q(p()),q(v()),q(C()),G(fe),G(k),G(Le),q(oe())),()=>{B(Ve,{mode:ev.table,readOnly:p(),truncateTextSize:v(),parser:C(),normalization:G(fe),getJson:()=>G(k),getDocumentState:()=>G(Le),findElement:ct,findNextInside:Qe,focus:$e,onPatch:(e,t)=>Je(function(e,t){return e.flatMap(e=>{if(ut(e)){var n=Dt(e.path);if(n.length>0){for(var r=[e],i=uc(n);i.length>0&&!Et(t,i);)r.unshift({op:`add`,path:Ot(i),value:{}}),i=uc(i);return r}}return e})}(e,G(k)),t),onSelect:Fe,onFind:Xt,onPasteJson:Xe,onRenderValue:oe()})}),U(()=>(G(k),q(T()),q(C()),q(E())),()=>{Ge(G(k),T(),C(),E())}),U(()=>(G(Ue),G(Ee)),()=>{B(i,qT(G(Ue),G(Ee)))}),Nm();var en={validate:Ke,patch:qe,focus:$e,acceptAutoRepair:nt,scrollTo:rt,findElement:ct,openTransformModal:Gt};Qg(!0);var tn=kD();J(`mousedown`,im,function(e){!Sv(e.target,e=>e===G(pe))&&$b(G(P))&&(a(`click outside the editor, exit edit mode`),B(P,Wb(G(P))),ke&&G(he)&&(G(he).focus({preventScroll:!0}),G(he).blur()),a(`blur (outside editor)`),G(he)&&G(he).blur())});var nn,rn=wm(tn),an=V(rn),on=e=>{(function(e,t){bf(t,!1);var n=Q(t,`containsValidArray`,9),r=Q(t,`readOnly`,9),i=Q(t,`showSearch`,13,!1),a=Q(t,`history`,9),o=Q(t,`onSort`,9),s=Q(t,`onTransform`,9),c=Q(t,`onContextMenu`,9),l=Q(t,`onUndo`,9),u=Q(t,`onRedo`,9),d=Q(t,`onRenderMenu`,9);function f(){i(!i())}var p=z(void 0,!0),m=z(void 0,!0);U(()=>(q(r()),q(o()),q(n()),q(s()),q(c()),q(l()),q(a()),q(u())),()=>{B(p,r()?[{type:`space`}]:[{type:`button`,icon:eu,title:`Sort`,className:`jse-sort`,onClick:o(),disabled:r()||!n()},{type:`button`,icon:Ol,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:s(),disabled:r()||!n()},{type:`button`,icon:jl,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:f,disabled:!n()},{type:`button`,icon:Il,title:py,className:`jse-contextmenu`,onClick:c()},{type:`separator`},{type:`button`,icon:uu,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:l(),disabled:!a().canUndo},{type:`button`,icon:cu,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:u(),disabled:!a().canRedo},{type:`space`}])}),U(()=>(q(d()),G(p)),()=>{B(m,d()(G(p))||G(p))}),Nm(),Qg(!0),Dw(e,{get items(){return G(m)}}),xf()})(e,{get containsValidArray(){return G(De)},get readOnly(){return p()},get history(){return _()},onSort:Jt,onTransform:Yt,onUndo:Zt,onRedo:Qt,onContextMenu:ft,get onRenderMenu(){return se()},get showSearch(){return G(M)},set showSearch(e){B(M,e)},$$legacy:!0})};Z(an,e=>{y()&&e(on)});var sn=H(an,2),cn=e=>{var t=DD(),a=wm(t),o=V(a);o.readOnly=!0,Yg(o,e=>B(he,e),()=>G(he));var s=H(a,2),c=e=>{var t=TD(),a=wm(t);RT(V(a),{get json(){return G(k)},get documentState(){return G(Le)},get parser(){return C()},get showSearch(){return G(M)},get showReplace(){return G(N)},get readOnly(){return p()},get columns(){return G(Ee)},onSearch:xe,onFocus:Se,onPatch:Je,onClose:we});var o=H(a,2),s=V(V(V(o))),c=V(s),l=V(c),u=e=>{var t=R(()=>(q(JT),G(i),K(()=>JT([],G(i)?.root)))),n=Fh(),r=wm(n),a=e=>{var n=vD();Ww(V(n),{get validationError(){return G(t)},get onExpand(){return WE}}),X(e,n)};Z(r,e=>{G(t)&&e(a)}),X(e,n)},d=pp(()=>(q(mc),G(i),K(()=>!mc(G(i)?.root))));Z(l,e=>{G(d)&&e(u)});var f=H(c);cg(f,1,()=>G(Ee),og,(e,t)=>{var n=yD();(function(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=Q(t,`path`,9),o=Q(t,`sortedColumn`,9),s=Q(t,`readOnly`,9),c=Q(t,`onSort`,9);U(()=>(q(a()),Zx),()=>{B(n,mc(a())?`values`:Zx(a()))}),U(()=>(q(o()),q(a())),()=>{B(r,o()&&hc(a(),o()?.path)?o().sortDirection:void 0)}),U(()=>(G(r),Sy),()=>{B(i,G(r)?Sy[G(r)]:void 0)}),Nm(),Qg(!0);var l,u=dD(),d=V(u),f=V(d),p=H(d,2),m=e=>{var t=uD(),n=V(t),a=R(()=>(G(r),q(av),q(lu),q(iu),K(()=>G(r)===av.asc?lu:iu)));Qv(n,{get data(){return G(a)}}),W(()=>Rg(t,`title`,`Currently sorted in ${G(i)} order`)),X(e,t)};Z(p,e=>{G(r)!==void 0&&e(m)}),W(e=>{l=Cg(u,1,`jse-column-header svelte-5pxwfq`,null,l,{"jse-readonly":s()}),Rg(u,`title`,s()?G(n):G(n)+` (Click to sort the data by this column)`),Bh(f,e)},[()=>(q(Hv),G(n),q(50),K(()=>Hv(G(n),50)))]),J(`click`,u,function(){s()||c()({path:a(),sortDirection:G(r)===av.asc?av.desc:av.asc})}),X(e,u),xf()})(V(n),{get path(){return G(t)},get sortedColumn(){return G(Re)},get readOnly(){return p()},onSort:Be}),X(e,n)});var m=H(f),h=e=>{var t=yD(),n=V(t),r=R(()=>(G(k),K(()=>Array.isArray(G(k))?G(k).length:0)));(function(e,t){bf(t,!1);var n=Q(t,`count`,9),r=Q(t,`maxSampleCount`,9),i=Q(t,`readOnly`,9),a=Q(t,`onRefresh`,9);Qg(!0);var o,s=_D();Qv(V(s),{get data(){return Tl}}),W(()=>{o=Cg(s,1,`jse-column-header svelte-1wgrwv3`,null,o,{"jse-readonly":i()}),Rg(s,`title`,`The Columns are created by sampling ${r()} items out of ${n()}. If you're missing a column, click here to sample all of the items instead of a subset. This is slower.`)}),J(`click`,s,()=>a()()),X(e,s),xf()})(n,{get count(){return G(r)},get maxSampleCount(){return G(Te)},get readOnly(){return p()},onRefresh:()=>B(Te,1/0)}),X(e,t)};Z(m,e=>{G(n)&&e(h)});var g,_,v=H(s),y=V(v),b=H(v);cg(b,1,()=>(G(r),K(()=>G(r).visibleItems)),og,(e,t,a)=>{var o=R(()=>(G(r),K(()=>G(r).startIndex+a))),s=R(()=>(G(i),q(G(o)),K(()=>G(i).rows[G(o)]))),c=R(()=>(q(JT),q(G(o)),q(G(s)),K(()=>JT([String(G(o))],G(s)?.row)))),l=R(()=>(q(ob),G(k),G(be),q(G(o)),K(()=>ob(G(k),G(be),[String(G(o))])))),u=wD(),d=V(u);ag(d,()=>G(o),e=>{var t=bD(),n=V(t),r=H(n),i=e=>{Ww(e,{get validationError(){return G(c)},get onExpand(){return WE}})};Z(r,e=>{G(c)&&e(i)}),gg(t,(e,t)=>TE?.(e,t),()=>e=>function(e,t){je[t]=e.getBoundingClientRect().height}(e,G(o))),W(()=>Bh(n,`${G(o)??``} `)),X(e,t)});var f=H(d);cg(f,1,()=>G(Ee),og,(e,n,r,i)=>{var a,c=R(()=>(q(G(o)),G(n),K(()=>[String(G(o))].concat(G(n))))),u=R(()=>(q(F),G(t),G(n),K(()=>F(G(t),G(n))))),d=R(()=>(q(Db),G(P),q(Ub),q(G(c)),K(()=>Db(G(P))&&Ub(G(P).path,G(c))))),f=R(()=>(q(G(s)),K(()=>G(s)?.columns[r]))),m=R(()=>(q(JT),q(G(c)),q(G(f)),K(()=>JT(G(c),G(f))))),h=SD(),g=V(h),_=V(g),v=e=>{var r=R(()=>(q(Lx),q(ob),G(t),q(G(l)),G(n),K(()=>Lx(ob(G(t),G(l),G(n)))))),i=R(()=>(q(G(r)),K(()=>!!G(r)&&G(r).some(e=>e.active)))),a=R(()=>(q(mc),q(G(r)),K(()=>!mc(G(r)))));(function(e,t){bf(t,!1);var n=Q(t,`path`,9),r=Q(t,`value`,9),i=Q(t,`parser`,9),a=Q(t,`isSelected`,9),o=Q(t,`containsSearchResult`,9),s=Q(t,`containsActiveSearchResult`,9),c=Q(t,`onEdit`,9);Qg(!0);var l,u=lD(),d=V(u);W(e=>{l=Cg(u,1,`jse-inline-value svelte-1jv89ui`,null,l,{"jse-selected":a(),"jse-highlight":o(),"jse-active":s()}),Bh(d,e)},[()=>(q(Hv),q(i()),q(r()),q(50),K(()=>Hv(i().stringify(r())??``,50)))]),J(`dblclick`,u,()=>c()(n())),X(e,u),xf()})(e,{get path(){return G(c)},get value(){return G(u)},get parser(){return C()},get isSelected(){return G(d)},get containsSearchResult(){return G(a)},get containsActiveSearchResult(){return G(i)},onEdit:Kt})},y=pp(()=>(q(h_),q(G(u)),K(()=>h_(G(u))))),b=e=>{var t=R(()=>(q(ob),G(k),G(be),q(G(c)),K(()=>ob(G(k),G(be),G(c))?.searchResults))),n=R(()=>G(u)===void 0?``:G(u)),r=R(()=>(q(pb),G(k),G(Le),q(G(c)),K(()=>pb(G(k),G(Le),G(c))))),i=R(()=>G(d)?G(P):void 0);Bw(e,{get path(){return G(c)},get value(){return G(n)},get enforceString(){return G(r)},get selection(){return G(i)},get searchResultItems(){return G(t)},get context(){return G(Ve)}})};Z(_,e=>{G(y)?e(v):e(b,-1)});var x=H(_),S=e=>{var t=xD();Iw(V(t),{selected:!0,onContextMenu:lt}),X(e,t)},w=pp(()=>(q(p()),q(G(d)),q($b),G(P),K(()=>!p()&&G(d)&&!$b(G(P)))));Z(x,e=>{G(w)&&e(S)});var T=H(g,2),E=e=>{Ww(e,{get validationError(){return G(m)},get onExpand(){return WE}})};Z(T,e=>{G(m)&&e(E)}),W(e=>{Rg(h,`data-path`,e),a=Cg(g,1,`jse-value-outer svelte-1p86y3c`,null,a,{"jse-selected-value":G(d)})},[()=>(q(Ov),q(G(c)),K(()=>Ov(G(c))))]),X(e,h)});var m=H(f),h=e=>{X(e,CD())};Z(m,e=>{G(n)&&e(h)}),X(e,u)});var x,S=V(H(b));Yg(o,e=>B(me,e),()=>G(me)),gg(o,(e,t)=>TE?.(e,t),()=>$t),Mm(()=>J(`scroll`,o,et));var w=H(o,2),T=e=>{var t=R(()=>(G(j),K(()=>`You pasted a JSON ${Array.isArray(G(j).contents)?`array`:`object`} as text`))),n=R(()=>[{icon:Gl,text:`Paste as JSON instead`,title:`Paste the text as JSON instead of a single value`,onMouseDown:gt},{text:`Leave as is`,title:`Keep the pasted content as a single value`,onClick:St}]);uw(e,{type:`info`,get message(){return G(t)},get actions(){return G(n)}})};Z(w,e=>{G(j)&&e(T)});var E=H(w,2),ee=e=>{var t=R(()=>[{icon:Gl,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:bt},{text:`Leave as is`,title:`Keep the pasted array`,onClick:Ct}]);uw(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return G(t)}})};Z(E,e=>{G(ye)&&e(ee)});var te=H(E,2),ne=e=>{var t=R(()=>p()?[]:[{icon:ql,text:`Ok`,title:`Accept the repaired document`,onClick:nt},{icon:Vl,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:wt}]);uw(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return G(t)},onClose:$e})};Z(te,e=>{G(ze)&&e(ne)}),_w(H(te,2),{get validationErrors(){return G(Ue)},selectError:Wt}),W(()=>{g=Cg(v,1,`jse-table-invisible-start-section svelte-1p86y3c`,null,g,{"jse-search-box-background":G(M)}),Rg(y,`colspan`,(G(Ee),K(()=>G(Ee).length))),_=Tg(y,``,_,{height:(G(r),K(()=>G(r).startHeight+`px`))}),Rg(S,`colspan`,(G(Ee),K(()=>G(Ee).length))),x=Tg(S,``,x,{height:(G(r),K(()=>G(r).endHeight+`px`))})}),X(e,t)},l=e=>{var t=ED(),n=wm(t),r=R(()=>p()?[]:[{icon:Vl,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:wt}]);uw(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return G(r)}}),lE(H(n,2),{get text(){return G(ve)},get json(){return G(k)},get indentation(){return ee()},get parser(){return C()}}),X(e,t)},u=e=>{gD(e,{get text(){return G(ve)},get json(){return G(k)},get readOnly(){return p()},get parser(){return C()},openJSONEditorModal:Kt,extractPath:Pt,get onChangeMode(){return ne()},onClick:()=>{$e()}})};Z(s,e=>{G(De)?e(c):G(A)&&G(ve)!==void 0&&G(ve)!==``?e(l,1):e(u,-1)}),J(`paste`,o,Bt),X(e,t)},ln=e=>{X(e,OD())};Z(sn,e=>{f?e(ln,-1):e(cn)}),Yg(rn,e=>B(pe,e),()=>G(pe));var un=H(rn,2),dn=e=>{Sw(e,{onClose:()=>B(Ae,!1)})};Z(un,e=>{G(Ae)&&e(dn)});var fn=H(un,2),pn=e=>{jw(e,a_(()=>G(ge),{onClose:()=>{var e;(e=G(ge))==null||e.onClose(),B(ge,void 0)}}))};return Z(fn,e=>{G(ge)&&e(pn)}),W(()=>{Rg(rn,`aria-label`,m()),nn=Cg(rn,1,`jse-table-mode svelte-1p86y3c`,null,nn,{"no-main-menu":!y()})}),J(`mousedown`,rn,function(e){if(e.buttons===1||e.buttons===2){var t=e.target;t.isContentEditable||$e();var n=kv(t);if(n){if($b(G(P))&&ax(G(k),G(P),n))return;B(P,qb(n)),e.preventDefault()}}}),J(`keydown`,rn,function(e){var t=Mv(e);if(a(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),Tt(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),Tt(!1)),t===`Ctrl+C`&&(e.preventDefault(),At(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),At(!1)),t===`Ctrl+D`&&(e.preventDefault(),Ft()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),Nt()),t===`Insert`&&e.preventDefault(),t===`Ctrl+A`&&e.preventDefault(),t===`Ctrl+Q`&&dt(e),t===`ArrowLeft`&&(e.preventDefault(),tt(),G(P))){var n=function(e,t){var n=GT($(t),e),r=n.rowIndex,i=n.columnIndex;return i>0?qb(KT({rowIndex:r,columnIndex:i-1},e)):t}(G(Ee),G(P));B(P,n),at($(n))}if(t===`ArrowRight`&&(e.preventDefault(),tt(),G(P))){var r=function(e,t){var n=GT($(t),e),r=n.rowIndex,i=n.columnIndex;return i<e.length-1?qb(KT({rowIndex:r,columnIndex:i+1},e)):t}(G(Ee),G(P));B(P,r),at($(r))}if(t===`ArrowUp`&&(e.preventDefault(),tt(),G(P))){var i=function(e,t){var n=GT($(t),e),r=n.rowIndex,i=n.columnIndex;return r>0?qb(KT({rowIndex:r-1,columnIndex:i},e)):t}(G(Ee),G(P));B(P,i),at($(i))}if(t===`ArrowDown`&&(e.preventDefault(),tt(),G(P))){var o=function(e,t,n){var r=GT($(n),t),i=r.rowIndex,a=r.columnIndex;return i<e.length-1?qb(KT({rowIndex:i+1,columnIndex:a},t)):n}(G(k),G(Ee),G(P));B(P,o),at($(o))}if(t===`Enter`&&G(P)&&Db(G(P))){e.preventDefault();var s=G(P).path;h_(F(G(k),s))?Kt(s):p()||B(P,I(I({},G(P)),{},{edit:!0}))}if(t.replace(/^Shift\+/,``).length===1&&G(P))return e.preventDefault(),void function(e){zt.apply(this,arguments)}(e.key);if(t===`Ctrl+Enter`&&Db(G(P))){e.preventDefault();var c=F(G(k),G(P).path);C_(c)&&window.open(String(c),`_blank`)}t===`Escape`&&G(P)&&(e.preventDefault(),B(P,void 0)),t===`Ctrl+F`&&(e.preventDefault(),Xt(!1)),t===`Ctrl+H`&&(e.preventDefault(),Xt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),Zt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),Qt())}),J(`contextmenu`,rn,dt),X(e,tn),qg(t,`validate`,Ke),qg(t,`patch`,qe),qg(t,`focus`,$e),qg(t,`acceptAutoRepair`,nt),qg(t,`scrollTo`,rt),qg(t,`findElement`,ct),qg(t,`openTransformModal`,Gt),xf(en)}function jD(e,t){bf(t,!1);var n=Q(t,`content`,8),r=Q(t,`selection`,12),i=Q(t,`readOnly`,8),a=Q(t,`indentation`,8),o=Q(t,`tabSize`,8),s=Q(t,`truncateTextSize`,8),c=Q(t,`externalMode`,8),l=Q(t,`ariaLabel`,8,void 0),u=Q(t,`mainMenuBar`,8),d=Q(t,`navigationBar`,8),f=Q(t,`statusBar`,8),p=Q(t,`askToFormat`,8),m=Q(t,`escapeControlCharacters`,8),h=Q(t,`escapeUnicodeCharacters`,8),g=Q(t,`maxDocumentSizeTextMode`,8),_=Q(t,`flattenColumns`,8),v=Q(t,`parser`,8),y=Q(t,`parseMemoizeOne`,8),b=Q(t,`validator`,8),x=Q(t,`validationParser`,8),S=Q(t,`pathParser`,8),C=Q(t,`insideModal`,8),w=Q(t,`onChange`,8),T=Q(t,`onChangeMode`,8),E=Q(t,`onSelect`,8),ee=Q(t,`onRenderValue`,8),te=Q(t,`onClassName`,8),ne=Q(t,`onRenderMenu`,8),re=Q(t,`onRenderContextMenu`,8),ie=Q(t,`onError`,8),ae=Q(t,`onFocus`,8),oe=Q(t,`onBlur`,8),se=Q(t,`onSortModal`,8),D=Q(t,`onTransformModal`,8),O=Q(t,`onJSONEditorModal`,8),ce=z(),le=z(),ue=z(),de=o_(`jsoneditor:JSONEditorRoot`),fe=z(FE({onChange:e=>B(fe,e)}).get()),pe=z(c());function me(e){if(Gy(e)){B(pe,e.undo.mode);var t=G(fe).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n-1];de(`handleUndo`,{index:n,item:e,items:t,prevItem:i}),i&&r(i.redo.selection),T()(G(pe))}}function he(e){if(Gy(e)){B(pe,e.redo.mode);var t=G(fe).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n+1];de(`handleRedo`,{index:n,item:e,items:t,nextItem:i}),i&&r(i.undo.selection),T()(G(pe))}}var ge=z(),_e={type:`separator`},k=z(),ve=z();function A(e){if(G(ce))return G(ce).patch(e);if(G(le))return G(le).patch(e);if(G(ue))return G(ue).patch(e);throw Error(`Method patch is not available in mode "${G(pe)}"`)}function j(e,t){if(G(ce))return G(ce).expand(e,t);if(G(ue))return G(ue).expand(e,t);throw Error(`Method expand is not available in mode "${G(pe)}"`)}function ye(e,t){if(G(ce))return G(ce).collapse(e,t);if(G(ue))return G(ue).collapse(e,t);throw Error(`Method collapse is not available in mode "${G(pe)}"`)}function be(e){if(G(ue))G(ue).openTransformModal(e);else if(G(ce))G(ce).openTransformModal(e);else{if(!G(le))throw Error(`Method transform is not available in mode "${G(pe)}"`);G(le).openTransformModal(e)}}function M(){if(G(ue))return G(ue).validate();if(G(ce))return G(ce).validate();if(G(le))return G(le).validate();throw Error(`Method validate is not available in mode "${G(pe)}"`)}function N(){return G(ce)?G(ce).acceptAutoRepair():n()}function xe(e){if(G(ce))return G(ce).scrollTo(e);if(G(le))return G(le).scrollTo(e);throw Error(`Method scrollTo is not available in mode "${G(pe)}"`)}function Se(e){if(G(ce))return G(ce).findElement(e);if(G(le))return G(le).findElement(e);throw Error(`Method findElement is not available in mode "${G(pe)}"`)}function Ce(){G(ue)?G(ue).focus():G(ce)?G(ce).focus():G(le)&&G(le).focus()}function we(){return Te.apply(this,arguments)}function Te(){return(Te=id(function*(){G(ue)&&(yield G(ue).refresh())})).apply(this,arguments)}U(()=>q(c()),()=>{(function(e){if(e!==G(pe)){var t={type:`mode`,undo:{mode:G(pe),selection:void 0},redo:{mode:e,selection:void 0}};G(pe)===`text`&&G(ue)&&G(ue).flush(),de(`add history item`,t),G(fe).add(t),B(pe,e)}})(c())}),U(()=>(G(pe),q(T())),()=>{B(ge,[{type:`button`,text:`text`,title:`Switch to text mode (current mode: ${G(pe)})`,className:`jse-group-button jse-first`+(G(pe)===ev.text?` jse-selected`:``),onClick:()=>T()(ev.text)},{type:`button`,text:`tree`,title:`Switch to tree mode (current mode: ${G(pe)})`,className:`jse-group-button `+(G(pe)===ev.tree?` jse-selected`:``),onClick:()=>T()(ev.tree)},{type:`button`,text:`table`,title:`Switch to table mode (current mode: ${G(pe)})`,className:`jse-group-button jse-last`+(G(pe)===ev.table?` jse-selected`:``),onClick:()=>T()(ev.table)}])}),U(()=>(G(ge),q(ne()),G(pe),q(C()),q(i())),()=>{B(k,e=>{var t=Ey(e[0])?G(ge).concat(e):G(ge).concat(_e,e),n=Bo(t);return ne()(t,{mode:G(pe),modal:C(),readOnly:i()})||n})}),U(()=>(q(re()),G(pe),q(C()),q(i()),q(r())),()=>{B(ve,e=>{var t=Bo(e);return re()(e,{mode:G(pe),modal:C(),readOnly:i(),selection:r()})??(!i()&&t)})}),Nm();var Ee={patch:A,expand:j,collapse:ye,transform:be,validate:M,acceptAutoRepair:N,scrollTo:xe,findElement:Se,focus:Ce,refresh:we};Qg();var De=Fh(),Oe=wm(De),ke=e=>{Yg(cD(e,{get externalContent(){return n()},get externalSelection(){return r()},get ariaLabel(){return l()},get history(){return G(fe)},get readOnly(){return i()},get indentation(){return a()},get tabSize(){return o()},get mainMenuBar(){return u()},get statusBar(){return f()},get askToFormat(){return p()},get escapeUnicodeCharacters(){return h()},get maxDocumentSize(){return g()},get parser(){return v()},get validator(){return b()},get validationParser(){return x()},get onChange(){return w()},get onChangeMode(){return T()},get onSelect(){return E()},onUndo:me,onRedo:he,get onError(){return ie()},get onFocus(){return ae()},get onBlur(){return oe()},get onRenderMenu(){return G(k)},get onSortModal(){return se()},get onTransformModal(){return D()},$$legacy:!0}),e=>B(ue,e),()=>G(ue))},Ae=pp(()=>(G(pe),q(ev),K(()=>G(pe)===ev.text||String(G(pe))===`code`))),je=e=>{Yg(AD(e,{get externalContent(){return n()},get externalSelection(){return r()},get ariaLabel(){return l()},get history(){return G(fe)},get readOnly(){return i()},get truncateTextSize(){return s()},get mainMenuBar(){return u()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return h()},get flattenColumns(){return _()},get parser(){return v()},get parseMemoizeOne(){return y()},get validator(){return b()},get validationParser(){return x()},get indentation(){return a()},get onChange(){return w()},get onChangeMode(){return T()},get onSelect(){return E()},onUndo:me,onRedo:he,get onRenderValue(){return ee()},get onFocus(){return ae()},get onBlur(){return oe()},get onRenderMenu(){return G(k)},get onRenderContextMenu(){return G(ve)},get onSortModal(){return se()},get onTransformModal(){return D()},get onJSONEditorModal(){return O()},$$legacy:!0}),e=>B(le,e),()=>G(le))},Me=e=>{Yg(ME(e,{get externalContent(){return n()},get externalSelection(){return r()},get ariaLabel(){return l()},get history(){return G(fe)},get readOnly(){return i()},get indentation(){return a()},get truncateTextSize(){return s()},get mainMenuBar(){return u()},get navigationBar(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return h()},get parser(){return v()},get parseMemoizeOne(){return y()},get validator(){return b()},get validationParser(){return x()},get pathParser(){return S()},get onError(){return ie()},get onChange(){return w()},get onChangeMode(){return T()},get onSelect(){return E()},onUndo:me,onRedo:he,get onRenderValue(){return ee()},get onClassName(){return te()},get onFocus(){return ae()},get onBlur(){return oe()},get onRenderMenu(){return G(k)},get onRenderContextMenu(){return G(ve)},get onSortModal(){return se()},get onTransformModal(){return D()},get onJSONEditorModal(){return O()},$$legacy:!0}),e=>B(ce,e),()=>G(ce))};return Z(Oe,e=>{G(Ae)?e(ke):(G(pe),q(ev),K(()=>G(pe)===ev.table)?e(je,1):e(Me,-1))}),X(e,De),qg(t,`patch`,A),qg(t,`expand`,j),qg(t,`collapse`,ye),qg(t,`transform`,be),qg(t,`validate`,M),qg(t,`acceptAutoRepair`,N),qg(t,`scrollTo`,xe),qg(t,`findElement`,Se),qg(t,`focus`,Ce),qg(t,`refresh`,we),xf(Ee)}Fv(`/* over all fonts, sizes, and colors */
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
}`);var MD=Y(`<div class="jse-error svelte-t4zsk3"> </div>`),ND=Y(`<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>`),PD=Y(`<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>`),FD=Y(`<button type="button" class="jse-primary svelte-t4zsk3">Close</button>`),ID=Y(`<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>`,1),LD=Y(`<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>`),RD={};Fv(`/* over all fonts, sizes, and colors */
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
}`);var zD=e_(()=>RD),BD=Y(`<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>`),VD=Y(`<div class="jse-error svelte-lwzlls"> </div>`),HD=Y(`<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>`,1);Fv(`/* over all fonts, sizes, and colors */
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
}`);var UD=Y(`<div role="none"><!></div> <!> <!> <!>`,1);function WD(e,t){bf(t,!1);var n=z(void 0,!0),r=o_(`jsoneditor:JSONEditor`),i={text:``},a=void 0,o=!1,s=ev.tree,c=`JSON editor`,l=!0,u=!0,d=!0,f=!0,p=!1,m=!1,h=10485760,g=!0,_=JSON,v=void 0,y=JSON,b={parse:Qx,stringify:Zx},x=[Wv],S=x[0].id,C=WE,w=void 0,T=void 0,E=Xx,ee=WE,te=WE,ne=WE,re=WE,ie=e=>{console.error(e),alert(e.toString())},ae=WE,oe=WE,se=Q(t,`content`,13,i),D=Q(t,`selection`,13,a),O=Q(t,`readOnly`,13,o),ce=Q(t,`indentation`,13,2),le=Q(t,`tabSize`,13,4),ue=Q(t,`truncateTextSize`,13,1e3),de=Q(t,`mode`,13,s),fe=Q(t,`ariaLabel`,13,c),pe=Q(t,`mainMenuBar`,13,l),me=Q(t,`navigationBar`,13,u),he=Q(t,`statusBar`,13,d),ge=Q(t,`askToFormat`,13,f),_e=Q(t,`escapeControlCharacters`,13,p),k=Q(t,`escapeUnicodeCharacters`,13,m),ve=Q(t,`maxDocumentSizeTextMode`,13,h),A=Q(t,`flattenColumns`,13,g),j=Q(t,`parser`,13,_),ye=Q(t,`validator`,13,v),be=Q(t,`validationParser`,13,y),M=Q(t,`pathParser`,13,b),N=Q(t,`queryLanguages`,13,x),xe=Q(t,`queryLanguageId`,13,S),Se=Q(t,`onChangeQueryLanguage`,13,C),Ce=Q(t,`onChange`,13,w),we=Q(t,`onSelect`,13,T),Te=Q(t,`onRenderValue`,13,E),Ee=Q(t,`onClassName`,13,ee),De=Q(t,`onRenderMenu`,13,te),Oe=Q(t,`onRenderContextMenu`,13,ne),ke=Q(t,`onChangeMode`,13,re),Ae=Q(t,`onError`,13,ie),je=Q(t,`onFocus`,13,ae),Me=Q(t,`onBlur`,13,oe),Ne=z(u_(),!0),Pe=z(!1,!0),Fe=z(void 0,!0),Ie=z(void 0,!0),Le=z(void 0,!0),P=z(void 0,!0),Re=z(j(),!0);function ze(){return se()}function Be(e){r(`set`);var t=V_(e);if(t)throw Error(t);B(Ne,u_()),se(e),Qp()}function Ve(e){r(`update`);var t=V_(e);if(t)throw Error(t);se(e),Qp()}function He(e){var t=G(Fe).patch(e);return Qp(),t}function Ue(e){D(e),Qp()}function We(e,t){G(Fe).expand(e,t),Qp()}function Ge(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];G(Fe).collapse(e,t),Qp()}function Ke(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};G(Fe).transform(e),Qp()}function qe(){return G(Fe).validate()}function Je(){var e=G(Fe).acceptAutoRepair();return Qp(),e}function Ye(e){return Xe.apply(this,arguments)}function Xe(){return(Xe=id(function*(e){yield G(Fe).scrollTo(e)})).apply(this,arguments)}function Ze(e){return G(Fe).findElement(e)}function Qe(){G(Fe).focus(),Qp()}function $e(){return et.apply(this,arguments)}function et(){return(et=id(function*(){yield G(Fe).refresh()})).apply(this,arguments)}function tt(e){for(var t of Object.keys(e))switch(t){case`content`:se(e[t]??i);break;case`selection`:D(e[t]??a);break;case`readOnly`:O(e[t]??o);break;case`indentation`:ce(e[t]??2);break;case`tabSize`:le(e[t]??4);break;case`truncateTextSize`:ue(e[t]??1e3);break;case`mode`:de(e[t]??s);break;case`ariaLabel`:fe(e[t]??c);break;case`mainMenuBar`:pe(e[t]??l);break;case`navigationBar`:me(e[t]??u);break;case`statusBar`:he(e[t]??d);break;case`askToFormat`:ge(e[t]??f);break;case`escapeControlCharacters`:_e(e[t]??p);break;case`escapeUnicodeCharacters`:k(e[t]??m);break;case`maxDocumentSizeTextMode`:ve(e[t]??h);break;case`flattenColumns`:A(e[t]??g);break;case`parser`:j(e[t]??_);break;case`validator`:ye(e[t]??v);break;case`validationParser`:be(e[t]??y);break;case`pathParser`:M(e[t]??b);break;case`queryLanguages`:N(e[t]??x);break;case`queryLanguageId`:xe(e[t]??S);break;case`onChangeQueryLanguage`:Se(e[t]??C);break;case`onChange`:Ce(e[t]??w);break;case`onRenderValue`:Te(e[t]??E);break;case`onClassName`:Ee(e[t]??ee);break;case`onRenderMenu`:De(e[t]??te);break;case`onRenderContextMenu`:Oe(e[t]??ne);break;case`onChangeMode`:ke(e[t]??re);break;case`onSelect`:we(e[t]??T);break;case`onError`:Ae(e[t]??ie);break;case`onFocus`:je(e[t]??ae);break;case`onBlur`:Me(e[t]??oe);break;default:n(t)}function n(e){r(`Unknown property "${e}"`)}N().some(e=>e.id===xe())||xe(N()[0].id),Qp()}function nt(){return rt.apply(this,arguments)}function rt(){return(rt=id(function*(){throw Error(`class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.`)})).apply(this,arguments)}function it(e,t,n){se(e),Ce()&&Ce()(e,t,n)}function at(e){D(e),we()&&we()(Bo(e))}function st(){B(Pe,!0),je()&&je()()}function ct(){B(Pe,!1),Me()&&Me()()}function lt(e){return ut.apply(this,arguments)}function ut(){return(ut=id(function*(e){de()!==e&&(de(e),Qp(),Qe(),ke()(e))})).apply(this,arguments)}function dt(e){r(`handleChangeQueryLanguage`,e),xe(e),Se()(e)}function ft(e){var t=e.id,r=e.json,i=e.rootPath,a=e.onTransform,o=e.onClose;O()||B(P,{id:t,json:r,rootPath:i,indentation:ce(),truncateTextSize:ue(),escapeControlCharacters:_e(),escapeUnicodeCharacters:k(),parser:j(),parseMemoizeOne:G(n),validationParser:be(),pathParser:M(),queryLanguages:N(),queryLanguageId:xe(),onChangeQueryLanguage:dt,onRenderValue:Te(),onRenderMenu:e=>De()(e,{mode:de(),modal:!0,readOnly:O()}),onRenderContextMenu:e=>Oe()(e,{mode:de(),modal:!0,readOnly:O(),selection:D()}),onClassName:Ee(),onTransform:a,onClose:o})}function pt(e){O()||B(Le,e)}function mt(e){var t=e.content,n=e.path,i=e.onPatch,a=e.onClose;r(`onJSONEditorModal`,{content:t,path:n}),B(Ie,{content:t,path:n,onPatch:i,readOnly:O(),indentation:ce(),tabSize:le(),truncateTextSize:ue(),mainMenuBar:pe(),navigationBar:me(),statusBar:he(),askToFormat:ge(),escapeControlCharacters:_e(),escapeUnicodeCharacters:k(),maxDocumentSizeTextMode:ve(),flattenColumns:A(),parser:j(),validator:void 0,validationParser:be(),pathParser:M(),onRenderValue:Te(),onClassName:Ee(),onRenderMenu:De(),onRenderContextMenu:Oe(),onSortModal:pt,onTransformModal:ft,onClose:a})}function ht(e){e.stopPropagation()}U(()=>(q(j()),G(Re),q(se()),u_),()=>{if(!Q_(j(),G(Re))){if(r(`parser changed, recreate editor`),U_(se())){var e=G(Re).stringify(se().json);se({json:e===void 0?void 0:j().parse(e)})}B(Re,j()),B(Ne,u_())}}),U(()=>q(se()),()=>{var e=V_(se());e&&console.error(`Error: `+e)}),U(()=>q(D()),()=>{D()===null&&console.warn(`selection is invalid: it is null but should be undefined`)}),U(()=>q(j()),()=>{B(n,_u(j().parse))}),U(()=>q(de()),()=>{r(`mode changed to`,de())}),Nm();var gt={get:ze,set:Be,update:Ve,patch:He,select:Ue,expand:We,collapse:Ge,transform:Ke,validate:qe,acceptAutoRepair:Je,scrollTo:Ye,findElement:Ze,focus:Qe,refresh:$e,updateProps:tt,destroy:nt};return Qg(!0),Bv(e,{children:(e,t)=>{var r,i=UD(),a=wm(i);ag(V(a),()=>G(Ne),e=>{Yg(jD(e,{get externalMode(){return de()},get content(){return se()},get selection(){return D()},get readOnly(){return O()},get indentation(){return ce()},get tabSize(){return le()},get truncateTextSize(){return ue()},get ariaLabel(){return fe()},get statusBar(){return he()},get askToFormat(){return ge()},get mainMenuBar(){return pe()},get navigationBar(){return me()},get maxDocumentSizeTextMode(){return ve()},get escapeControlCharacters(){return _e()},get escapeUnicodeCharacters(){return k()},get flattenColumns(){return A()},get parser(){return j()},get parseMemoizeOne(){return G(n)},get validator(){return ye()},get validationParser(){return be()},get pathParser(){return M()},insideModal:!1,get onError(){return Ae()},onChange:it,onChangeMode:lt,onSelect:at,get onRenderValue(){return Te()},get onClassName(){return Ee()},onFocus:st,onBlur:ct,get onRenderMenu(){return De()},get onRenderContextMenu(){return Oe()},onSortModal:pt,onTransformModal:ft,onJSONEditorModal:mt,$$legacy:!0}),e=>B(Fe,e),()=>G(Fe))});var o=H(a,2),s=e=>{(function(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=z(void 0,!0),o=o_(`jsoneditor:SortModal`),s=Q(t,`id`,9),c=Q(t,`json`,9),l=Q(t,`rootPath`,9),u=Q(t,`onSort`,9),d=Q(t,`onClose`,9),f={value:1,label:`ascending`},p=[f,{value:-1,label:`descending`}],m=`${s()}:${Ot(l())}`,h=z(zD()[m]?.selectedProperty,!0),g=z(zD()[m]?.selectedDirection||f,!0),_=z(void 0,!0);function v(){try{var e;B(_,void 0);var t=G(h)?.value||((e=G(a))==null||(e=e[0])==null?void 0:e.value)||[],n=G(g)?.value,r=yT(c(),l(),t,n);u()!==void 0&&l()!==void 0&&u()({operations:r,rootPath:l(),itemPath:t,direction:n}),d()()}catch(e){B(_,String(e))}}function y(e){e.focus()}U(()=>(q(c()),q(l())),()=>{B(n,F(c(),l()))}),U(()=>G(n),()=>{B(r,Array.isArray(G(n)))}),U(()=>(G(r),G(n)),()=>{B(i,G(r)?D_(G(n)):void 0)}),U(()=>(G(i),$x),()=>{B(a,G(i)?G(i).map($x):void 0)}),U(()=>(zD(),G(h),G(g)),()=>{zD(zD()[m]={selectedProperty:G(h),selectedDirection:G(g)}),o(`store state in memory`,m,zD()[m])}),Nm(),Qg(!0),bw(e,{get onClose(){return d()},className:`jse-sort-modal`,children:(e,t)=>{var n=HD(),i=wm(n),o=R(()=>G(r)?`Sort array items`:`Sort object keys`);JC(i,{get title(){return G(o)},get onClose(){return d()}});var s=V(H(i,2)),c=V(H(V(s))),u=V(H(V(c))),f=H(c),m=e=>{var t=BD();BC(V(H(V(t))),{showChevron:!0,get items(){return G(a)},get value(){return G(h)},set value(e){B(h,e)},$$legacy:!0}),X(e,t)};Z(f,e=>{G(r),G(a),K(()=>G(r)&&G(a)&&G(a)?.length>1)&&e(m)}),BC(V(H(V(H(f)))),{showChevron:!0,clearable:!1,get items(){return p},get value(){return G(g)},set value(e){B(g,e)},$$legacy:!0});var b=H(s,2),x=V(b),S=e=>{var t=VD(),n=V(t);W(()=>Bh(n,G(_))),X(e,t)};Z(x,e=>{G(_)&&e(S)});var C=V(H(b,2));Mm(()=>J(`click`,C,v)),gg(C,e=>y?.(e)),W(e=>{Lg(u,e),C.disabled=(G(r),G(a),G(h),K(()=>!!(G(r)&&G(a)&&G(a)?.length>1)&&!G(h)))},[()=>(q(l()),q(mc),q(Zx),K(()=>l()&&!mc(l())?Zx(l()):`(document root)`))]),X(e,n)},$$slots:{default:!0}}),xf()})(e,a_(()=>G(Le),{onClose:()=>{var e;(e=G(Le))==null||e.onClose(),B(Le,void 0)}}))};Z(o,e=>{G(Le)&&e(s)});var c=H(o,2),l=e=>{UE(e,a_(()=>G(P),{onClose:()=>{var e;(e=G(P))==null||e.onClose(),B(P,void 0)}}))};Z(c,e=>{G(P)&&e(l)});var u=H(c,2),d=e=>{(function(e,t){bf(t,!1);var n=z(void 0,!0),r=z(void 0,!0),i=z(void 0,!0),a=z(void 0,!0),o=o_(`jsoneditor:JSONEditorModal`),s=Q(t,`content`,9),c=Q(t,`path`,9),l=Q(t,`onPatch`,9),u=Q(t,`readOnly`,9),d=Q(t,`indentation`,9),f=Q(t,`tabSize`,9),p=Q(t,`truncateTextSize`,9),m=Q(t,`mainMenuBar`,9),h=Q(t,`navigationBar`,9),g=Q(t,`statusBar`,9),_=Q(t,`askToFormat`,9),v=Q(t,`escapeControlCharacters`,9),y=Q(t,`escapeUnicodeCharacters`,9),b=Q(t,`maxDocumentSizeTextMode`,9),x=Q(t,`flattenColumns`,9),S=Q(t,`parser`,9),C=Q(t,`validator`,9),w=Q(t,`validationParser`,9),T=Q(t,`pathParser`,9),E=Q(t,`onRenderValue`,9),ee=Q(t,`onClassName`,9),te=Q(t,`onRenderMenu`,9),ne=Q(t,`onRenderContextMenu`,9),re=Q(t,`onSortModal`,9),ie=Q(t,`onTransformModal`,9),ae=Q(t,`onClose`,9),oe=z(void 0,!0),se=z(void 0,!0),D={mode:le(s()),content:s(),selection:void 0,relativePath:c()},O=z([D],!0),ce=z(void 0,!0);function le(e){return U_(e)&&ot(e.json)?ev.table:ev.tree}function ue(){var e=Qs(G(O))?.selection;Ab(e)&&G(oe).scrollTo($(e))}function de(){if(o(`handleApply`),!u())try{B(ce,void 0);var e=G(n).relativePath,t=G(n).content,r=[{op:`replace`,path:Ot(e),value:G_(t,S()).json}];if(G(O).length>1){var i=G_(G(O)[G(O).length-2].content,S()).json,a={json:jt(i,r)},s=I(I({},G(O)[G(O).length-2]||D),{},{content:a});B(O,[...G(O).slice(0,G(O).length-2),s]),Qp(),ue()}else l()(r),ae()()}catch(e){B(ce,String(e))}}function fe(){var e;o(`handleClose`),G(O).length>1?(B(O,uc(G(O))),Qp(),(e=G(oe))==null||e.focus(),ue(),B(ce,void 0)):ae()()}function pe(e){o(`handleChange`,e),ge(t=>I(I({},t),{},{content:e}))}function me(e){o(`handleChangeSelection`,e),ge(t=>I(I({},t),{},{selection:e}))}function he(e){o(`handleChangeMode`,e),ge(t=>I(I({},t),{},{mode:e}))}function ge(e){var t=e(Qs(G(O)));B(O,[...uc(G(O)),t])}function _e(e){B(ce,e.toString()),console.error(e)}function k(e){var t,n=e.content,r=e.path;o(`handleJSONEditorModal`,{content:n,path:r});var i={mode:le(n),content:n,selection:void 0,relativePath:r};B(O,[...G(O),i]),Qp(),(t=G(oe))==null||t.focus()}function ve(e){e.focus()}Qh(()=>{var e;(e=G(oe))==null||e.focus()}),U(()=>G(O),()=>{B(n,Qs(G(O))||D)}),U(()=>G(O),()=>{B(r,G(O).flatMap(e=>e.relativePath))}),U(()=>(G(r),Zx),()=>{B(i,mc(G(r))?`(document root)`:Zx(G(r)))}),U(()=>q(S()),()=>{B(a,_u(S().parse))}),Nm(),Qg(!0),bw(e,{onClose:fe,className:`jse-jsoneditor-modal`,get fullscreen(){return G(se)},children:(e,t)=>{var r=LD();Bv(V(r),{children:(e,t)=>{var r=ID(),o=wm(r),s=R(()=>(G(O),K(()=>G(O).length>1?` (${G(O).length})`:``)));JC(o,{get title(){return`Edit nested content ${G(s)??``}`},fullScreenButton:!0,onClose:fe,get fullscreen(){return G(se)},set fullscreen(e){B(se,e)},$$legacy:!0});var c=H(V(H(o,2)),2),l=H(c,4);Yg(jD(V(l),{get externalMode(){return G(n),K(()=>G(n).mode)},get content(){return G(n),K(()=>G(n).content)},get selection(){return G(n),K(()=>G(n).selection)},get readOnly(){return u()},get indentation(){return d()},get tabSize(){return f()},get truncateTextSize(){return p()},get statusBar(){return g()},get askToFormat(){return _()},get mainMenuBar(){return m()},get navigationBar(){return h()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return y()},get maxDocumentSizeTextMode(){return b()},get flattenColumns(){return x()},get parser(){return S()},get parseMemoizeOne(){return G(a)},get validator(){return C()},get validationParser(){return w()},get pathParser(){return T()},insideModal:!0,onError:_e,onChange:pe,onChangeMode:he,onSelect:me,get onRenderValue(){return E()},get onClassName(){return ee()},get onFocus(){return WE},get onBlur(){return WE},get onRenderMenu(){return te()},get onRenderContextMenu(){return ne()},get onSortModal(){return re()},get onTransformModal(){return ie()},onJSONEditorModal:k,$$legacy:!0}),e=>B(oe,e),()=>G(oe));var ae=V(H(l,2)),D=e=>{var t=MD(),n=V(t);W(()=>Bh(n,G(ce))),X(e,t)};Z(ae,e=>{G(ce)&&e(D)});var le=H(ae,2),ue=e=>{var t=ND();Qv(V(t),{get data(){return Nl}}),J(`click`,t,fe),X(e,t)};Z(le,e=>{G(O),K(()=>G(O).length>1)&&e(ue)});var ge=H(le,2),A=e=>{var t=PD();Mm(()=>J(`click`,t,de)),gg(t,e=>ve?.(e)),X(e,t)},j=e=>{var t=FD();J(`click`,t,fe),X(e,t)};Z(ge,e=>{u()?e(j,-1):e(A)}),W(()=>Lg(c,G(i))),X(e,r)},$$slots:{default:!0}}),X(e,r)},$$slots:{default:!0}}),xf()})(e,a_(()=>G(Ie),{onClose:()=>{var e;(e=G(Ie))==null||e.onClose(),B(Ie,void 0)}}))};Z(u,e=>{G(Ie)&&e(d)}),W(()=>r=Cg(a,1,`jse-main svelte-1l55585`,null,r,{"jse-focus":G(Pe)})),J(`keydown`,a,ht),X(e,i)},$$slots:{default:!0}}),qg(t,`get`,ze),qg(t,`set`,Be),qg(t,`update`,Ve),qg(t,`patch`,He),qg(t,`select`,Ue),qg(t,`expand`,We),qg(t,`collapse`,Ge),qg(t,`transform`,Ke),qg(t,`validate`,qe),qg(t,`acceptAutoRepair`,Je),qg(t,`scrollTo`,Ye),qg(t,`findElement`,Ze),qg(t,`focus`,Qe),qg(t,`refresh`,$e),qg(t,`updateProps`,tt),qg(t,`destroy`,nt),xf(gt)}function GD(e){var t=Vh(WD,{target:e.target,props:e.props});return t.destroy=id(function*(){return function(e,t){var n=Uh.get(e);return n?(Uh.delete(e),n(t)):Promise.resolve()}(t)}),Qp(),t}var KD=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,qD=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,JD=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function YD(e,t){if(e===`__proto__`||e===`constructor`&&t&&typeof t==`object`&&`prototype`in t){XD(e);return}return t}function XD(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function ZD(e,t={}){if(typeof e!=`string`)return e;let n=e.trim();if(e[0]===`"`&&e.endsWith(`"`)&&!e.includes(`\\`))return n.slice(1,-1);if(n.length<=9){let e=n.toLowerCase();if(e===`true`)return!0;if(e===`false`)return!1;if(e===`undefined`)return;if(e===`null`)return null;if(e===`nan`)return NaN;if(e===`infinity`)return 1/0;if(e===`-infinity`)return-1/0}if(!JD.test(e)){if(t.strict)throw SyntaxError(`[destr] Invalid JSON`);return e}try{if(KD.test(e)||qD.test(e)){if(t.strict)throw Error(`[destr] Possible prototype pollution`);return JSON.parse(e,YD)}return JSON.parse(e)}catch(n){if(t.strict)throw n;return e}}function QD(e,t={}){return ZD(e,{...t,strict:!0})}var $D=typeof global==`object`&&global&&global.Object===Object&&global,eO=typeof self==`object`&&self&&self.Object===Object&&self,tO=$D||eO||Function(`return this`)(),nO=tO.Symbol,rO=Object.prototype,iO=rO.hasOwnProperty,aO=rO.toString,oO=nO?nO.toStringTag:void 0;function sO(e){var t=iO.call(e,oO),n=e[oO];try{e[oO]=void 0;var r=!0}catch{}var i=aO.call(e);return r&&(t?e[oO]=n:delete e[oO]),i}var cO=Object.prototype.toString;function lO(e){return cO.call(e)}var uO=`[object Null]`,dO=`[object Undefined]`,fO=nO?nO.toStringTag:void 0;function pO(e){return e==null?e===void 0?dO:uO:fO&&fO in Object(e)?sO(e):lO(e)}function mO(e){return typeof e==`object`&&!!e}var hO=`[object Symbol]`;function gO(e){return typeof e==`symbol`||mO(e)&&pO(e)==hO}var _O=/\s/;function vO(e){for(var t=e.length;t--&&_O.test(e.charAt(t)););return t}var yO=/^\s+/;function bO(e){return e&&e.slice(0,vO(e)+1).replace(yO,``)}function xO(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var SO=NaN,CO=/^[-+]0x[0-9a-f]+$/i,wO=/^0b[01]+$/i,TO=/^0o[0-7]+$/i,EO=parseInt;function DO(e){if(typeof e==`number`)return e;if(gO(e))return SO;if(xO(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=xO(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=bO(e);var n=wO.test(e);return n||TO.test(e)?EO(e.slice(2),n?2:8):CO.test(e)?SO:+e}var OO=function(){return tO.Date.now()},kO=`Expected a function`,AO=Math.max,jO=Math.min;function MO(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(kO);t=DO(t)||0,xO(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?AO(DO(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?jO(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=OO();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(OO())}function x(){var e=OO(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var NO=typeof global==`object`&&global&&global.Object===Object&&global,PO=typeof self==`object`&&self&&self.Object===Object&&self,FO=NO||PO||Function(`return this`)(),IO=FO.Symbol,LO=Object.prototype,RO=LO.hasOwnProperty,zO=LO.toString,BO=IO?IO.toStringTag:void 0;function VO(e){var t=RO.call(e,BO),n=e[BO];try{e[BO]=void 0;var r=!0}catch{}var i=zO.call(e);return r&&(t?e[BO]=n:delete e[BO]),i}var HO=Object.prototype.toString;function UO(e){return HO.call(e)}var WO=`[object Null]`,GO=`[object Undefined]`,KO=IO?IO.toStringTag:void 0;function qO(e){return e==null?e===void 0?GO:WO:KO&&KO in Object(e)?VO(e):UO(e)}function JO(e){return typeof e==`object`&&!!e}var YO=`[object Symbol]`;function XO(e){return typeof e==`symbol`||JO(e)&&qO(e)==YO}function ZO(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var QO=Array.isArray,$O=IO?IO.prototype:void 0,ek=$O?$O.toString:void 0;function tk(e){if(typeof e==`string`)return e;if(QO(e))return ZO(e,tk)+``;if(XO(e))return ek?ek.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function nk(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function rk(e){return e}var ik=`[object AsyncFunction]`,ak=`[object Function]`,ok=`[object GeneratorFunction]`,sk=`[object Proxy]`;function ck(e){if(!nk(e))return!1;var t=qO(e);return t==ak||t==ok||t==ik||t==sk}var lk=FO[`__core-js_shared__`],uk=function(){var e=/[^.]+$/.exec(lk&&lk.keys&&lk.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function dk(e){return!!uk&&uk in e}var fk=Function.prototype.toString;function pk(e){if(e!=null){try{return fk.call(e)}catch{}try{return e+``}catch{}}return``}var mk=/[\\^$.*+?()[\]{}|]/g,hk=/^\[object .+?Constructor\]$/,gk=Function.prototype,_k=Object.prototype,vk=gk.toString,yk=_k.hasOwnProperty,bk=RegExp(`^`+vk.call(yk).replace(mk,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function xk(e){return!nk(e)||dk(e)?!1:(ck(e)?bk:hk).test(pk(e))}function Sk(e,t){return e?.[t]}function Ck(e,t){var n=Sk(e,t);return xk(n)?n:void 0}var wk=Ck(FO,`WeakMap`),Tk=Object.create,Ek=function(){function e(){}return function(t){if(!nk(t))return{};if(Tk)return Tk(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Dk(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ok(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}var kk=800,Ak=16,jk=Date.now;function Mk(e){var t=0,n=0;return function(){var r=jk(),i=Ak-(r-n);if(n=r,i>0){if(++t>=kk)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Nk(e){return function(){return e}}var Pk=function(){try{var e=Ck(Object,`defineProperty`);return e({},``,{}),e}catch{}}(),Fk=Mk(Pk?function(e,t){return Pk(e,`toString`,{configurable:!0,enumerable:!1,value:Nk(t),writable:!0})}:rk);function Ik(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Lk=9007199254740991,Rk=/^(?:0|[1-9]\d*)$/;function zk(e,t){var n=typeof e;return t??=Lk,!!t&&(n==`number`||n!=`symbol`&&Rk.test(e))&&e>-1&&e%1==0&&e<t}function Bk(e,t,n){t==`__proto__`&&Pk?Pk(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Vk(e,t){return e===t||e!==e&&t!==t}var Hk=Object.prototype.hasOwnProperty;function Uk(e,t,n){var r=e[t];(!(Hk.call(e,t)&&Vk(r,n))||n===void 0&&!(t in e))&&Bk(e,t,n)}function Wk(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?Bk(n,s,c):Uk(n,s,c)}return n}var Gk=Math.max;function Kk(e,t,n){return t=Gk(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=Gk(r.length-t,0),o=Array(a);++i<a;)o[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(o),Dk(e,this,s)}}function qk(e,t){return Fk(Kk(e,t,rk),e+``)}var Jk=9007199254740991;function Yk(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=Jk}function Xk(e){return e!=null&&Yk(e.length)&&!ck(e)}function Zk(e,t,n){if(!nk(n))return!1;var r=typeof t;return(r==`number`?Xk(n)&&zk(t,n.length):r==`string`&&t in n)?Vk(n[t],e):!1}function Qk(e){return qk(function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(a=e.length>3&&typeof a==`function`?(i--,a):void 0,o&&Zk(n[0],n[1],o)&&(a=i<3?void 0:a,i=1),t=Object(t);++r<i;){var s=n[r];s&&e(t,s,r,a)}return t})}var $k=Object.prototype;function eA(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||$k)}function tA(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var nA=`[object Arguments]`;function rA(e){return JO(e)&&qO(e)==nA}var iA=Object.prototype,aA=iA.hasOwnProperty,oA=iA.propertyIsEnumerable,sA=rA(function(){return arguments}())?rA:function(e){return JO(e)&&aA.call(e,`callee`)&&!oA.call(e,`callee`)};function cA(){return!1}var lA=typeof exports==`object`&&exports&&!exports.nodeType&&exports,uA=lA&&typeof module==`object`&&module&&!module.nodeType&&module,dA=uA&&uA.exports===lA?FO.Buffer:void 0,fA=(dA?dA.isBuffer:void 0)||cA,pA=`[object Arguments]`,mA=`[object Array]`,hA=`[object Boolean]`,gA=`[object Date]`,_A=`[object Error]`,vA=`[object Function]`,yA=`[object Map]`,bA=`[object Number]`,xA=`[object Object]`,SA=`[object RegExp]`,CA=`[object Set]`,wA=`[object String]`,TA=`[object WeakMap]`,EA=`[object ArrayBuffer]`,DA=`[object DataView]`,OA=`[object Float32Array]`,kA=`[object Float64Array]`,AA=`[object Int8Array]`,jA=`[object Int16Array]`,MA=`[object Int32Array]`,NA=`[object Uint8Array]`,PA=`[object Uint8ClampedArray]`,FA=`[object Uint16Array]`,IA=`[object Uint32Array]`,LA={};LA[OA]=LA[kA]=LA[AA]=LA[jA]=LA[MA]=LA[NA]=LA[PA]=LA[FA]=LA[IA]=!0,LA[pA]=LA[mA]=LA[EA]=LA[hA]=LA[DA]=LA[gA]=LA[_A]=LA[vA]=LA[yA]=LA[bA]=LA[xA]=LA[SA]=LA[CA]=LA[wA]=LA[TA]=!1;function RA(e){return JO(e)&&Yk(e.length)&&!!LA[qO(e)]}function zA(e){return function(t){return e(t)}}var BA=typeof exports==`object`&&exports&&!exports.nodeType&&exports,VA=BA&&typeof module==`object`&&module&&!module.nodeType&&module,HA=VA&&VA.exports===BA&&NO.process,UA=function(){try{return VA&&VA.require&&VA.require(`util`).types||HA&&HA.binding&&HA.binding(`util`)}catch{}}(),WA=UA&&UA.isTypedArray,GA=WA?zA(WA):RA,KA=Object.prototype.hasOwnProperty;function qA(e,t){var n=QO(e),r=!n&&sA(e),i=!n&&!r&&fA(e),a=!n&&!r&&!i&&GA(e),o=n||r||i||a,s=o?tA(e.length,String):[],c=s.length;for(var l in e)(t||KA.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||zk(l,c)))&&s.push(l);return s}function JA(e,t){return function(n){return e(t(n))}}var YA=JA(Object.keys,Object),XA=Object.prototype.hasOwnProperty;function ZA(e){if(!eA(e))return YA(e);var t=[];for(var n in Object(e))XA.call(e,n)&&n!=`constructor`&&t.push(n);return t}function QA(e){return Xk(e)?qA(e):ZA(e)}function $A(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var ej=Object.prototype.hasOwnProperty;function tj(e){if(!nk(e))return $A(e);var t=eA(e),n=[];for(var r in e)r==`constructor`&&(t||!ej.call(e,r))||n.push(r);return n}function nj(e){return Xk(e)?qA(e,!0):tj(e)}var rj=Qk(function(e,t,n,r){Wk(t,nj(t),e,r)}),ij=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,aj=/^\w*$/;function oj(e,t){if(QO(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||XO(e)?!0:aj.test(e)||!ij.test(e)||t!=null&&e in Object(t)}var sj=Ck(Object,`create`);function cj(){this.__data__=sj?sj(null):{},this.size=0}function lj(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var uj=`__lodash_hash_undefined__`,dj=Object.prototype.hasOwnProperty;function fj(e){var t=this.__data__;if(sj){var n=t[e];return n===uj?void 0:n}return dj.call(t,e)?t[e]:void 0}var pj=Object.prototype.hasOwnProperty;function mj(e){var t=this.__data__;return sj?t[e]!==void 0:pj.call(t,e)}var hj=`__lodash_hash_undefined__`;function gj(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=sj&&t===void 0?hj:t,this}function _j(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_j.prototype.clear=cj,_j.prototype.delete=lj,_j.prototype.get=fj,_j.prototype.has=mj,_j.prototype.set=gj;function vj(){this.__data__=[],this.size=0}function yj(e,t){for(var n=e.length;n--;)if(Vk(e[n][0],t))return n;return-1}var bj=Array.prototype.splice;function xj(e){var t=this.__data__,n=yj(t,e);return n<0?!1:(n==t.length-1?t.pop():bj.call(t,n,1),--this.size,!0)}function Sj(e){var t=this.__data__,n=yj(t,e);return n<0?void 0:t[n][1]}function Cj(e){return yj(this.__data__,e)>-1}function wj(e,t){var n=this.__data__,r=yj(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Tj(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Tj.prototype.clear=vj,Tj.prototype.delete=xj,Tj.prototype.get=Sj,Tj.prototype.has=Cj,Tj.prototype.set=wj;var Ej=Ck(FO,`Map`);function Dj(){this.size=0,this.__data__={hash:new _j,map:new(Ej||Tj),string:new _j}}function Oj(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function kj(e,t){var n=e.__data__;return Oj(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Aj(e){var t=kj(this,e).delete(e);return this.size-=+!!t,t}function jj(e){return kj(this,e).get(e)}function Mj(e){return kj(this,e).has(e)}function Nj(e,t){var n=kj(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Pj(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pj.prototype.clear=Dj,Pj.prototype.delete=Aj,Pj.prototype.get=jj,Pj.prototype.has=Mj,Pj.prototype.set=Nj;var Fj=`Expected a function`;function Ij(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(Fj);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ij.Cache||Pj),n}Ij.Cache=Pj;var Lj=500;function Rj(e){var t=Ij(e,function(e){return n.size===Lj&&n.clear(),e}),n=t.cache;return t}var zj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bj=/\\(\\)?/g,Vj=Rj(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(zj,function(e,n,r,i){t.push(r?i.replace(Bj,`$1`):n||e)}),t});function Hj(e){return e==null?``:tk(e)}function Uj(e,t){return QO(e)?e:oj(e,t)?[e]:Vj(Hj(e))}function Wj(e){if(typeof e==`string`||XO(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Gj(e,t){t=Uj(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Wj(t[n++])];return n&&n==r?e:void 0}function Kj(e,t,n){var r=e==null?void 0:Gj(e,t);return r===void 0?n:r}function qj(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Jj=JA(Object.getPrototypeOf,Object),Yj=`[object Object]`,Xj=Function.prototype,Zj=Object.prototype,Qj=Xj.toString,$j=Zj.hasOwnProperty,eM=Qj.call(Object);function tM(e){if(!JO(e)||qO(e)!=Yj)return!1;var t=Jj(e);if(t===null)return!0;var n=$j.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&Qj.call(n)==eM}function nM(){this.__data__=new Tj,this.size=0}function rM(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function iM(e){return this.__data__.get(e)}function aM(e){return this.__data__.has(e)}var oM=200;function sM(e,t){var n=this.__data__;if(n instanceof Tj){var r=n.__data__;if(!Ej||r.length<oM-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Pj(r)}return n.set(e,t),this.size=n.size,this}function cM(e){var t=this.__data__=new Tj(e);this.size=t.size}cM.prototype.clear=nM,cM.prototype.delete=rM,cM.prototype.get=iM,cM.prototype.has=aM,cM.prototype.set=sM;var lM=typeof exports==`object`&&exports&&!exports.nodeType&&exports,uM=lM&&typeof module==`object`&&module&&!module.nodeType&&module,dM=uM&&uM.exports===lM?FO.Buffer:void 0,fM=dM?dM.allocUnsafe:void 0;function pM(e,t){if(t)return e.slice();var n=e.length,r=fM?fM(n):new e.constructor(n);return e.copy(r),r}function mM(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function hM(){return[]}var gM=Object.prototype.propertyIsEnumerable,_M=Object.getOwnPropertySymbols,vM=_M?function(e){return e==null?[]:(e=Object(e),mM(_M(e),function(t){return gM.call(e,t)}))}:hM;function yM(e,t,n){var r=t(e);return QO(e)?r:qj(r,n(e))}function bM(e){return yM(e,QA,vM)}var xM=Ck(FO,`DataView`),SM=Ck(FO,`Promise`),CM=Ck(FO,`Set`),wM=`[object Map]`,TM=`[object Object]`,EM=`[object Promise]`,DM=`[object Set]`,OM=`[object WeakMap]`,kM=`[object DataView]`,AM=pk(xM),jM=pk(Ej),MM=pk(SM),NM=pk(CM),PM=pk(wk),FM=qO;(xM&&FM(new xM(new ArrayBuffer(1)))!=kM||Ej&&FM(new Ej)!=wM||SM&&FM(SM.resolve())!=EM||CM&&FM(new CM)!=DM||wk&&FM(new wk)!=OM)&&(FM=function(e){var t=qO(e),n=t==TM?e.constructor:void 0,r=n?pk(n):``;if(r)switch(r){case AM:return kM;case jM:return wM;case MM:return EM;case NM:return DM;case PM:return OM}return t});var IM=Object.prototype.hasOwnProperty;function LM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&IM.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var RM=FO.Uint8Array;function zM(e){var t=new e.constructor(e.byteLength);return new RM(t).set(new RM(e)),t}function BM(e,t){var n=zM(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var VM=/\w*$/;function HM(e){var t=new e.constructor(e.source,VM.exec(e));return t.lastIndex=e.lastIndex,t}var UM=IO?IO.prototype:void 0,WM=UM?UM.valueOf:void 0;function GM(e){return WM?Object(WM.call(e)):{}}function KM(e,t){var n=t?zM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var qM=`[object Boolean]`,JM=`[object Date]`,YM=`[object Map]`,XM=`[object Number]`,ZM=`[object RegExp]`,QM=`[object Set]`,$M=`[object String]`,eN=`[object Symbol]`,tN=`[object ArrayBuffer]`,nN=`[object DataView]`,rN=`[object Float32Array]`,iN=`[object Float64Array]`,aN=`[object Int8Array]`,oN=`[object Int16Array]`,sN=`[object Int32Array]`,cN=`[object Uint8Array]`,lN=`[object Uint8ClampedArray]`,uN=`[object Uint16Array]`,dN=`[object Uint32Array]`;function fN(e,t,n){var r=e.constructor;switch(t){case tN:return zM(e);case qM:case JM:return new r(+e);case nN:return BM(e);case rN:case iN:case aN:case oN:case sN:case cN:case lN:case uN:case dN:return KM(e,n);case YM:return new r;case XM:case $M:return new r(e);case ZM:return HM(e);case QM:return new r;case eN:return GM(e)}}function pN(e){return typeof e.constructor==`function`&&!eA(e)?Ek(Jj(e)):{}}var mN=`[object Map]`;function hN(e){return JO(e)&&FM(e)==mN}var gN=UA&&UA.isMap,_N=gN?zA(gN):hN,vN=`[object Set]`;function yN(e){return JO(e)&&FM(e)==vN}var bN=UA&&UA.isSet,xN=bN?zA(bN):yN,SN=1,CN=`[object Arguments]`,wN=`[object Array]`,TN=`[object Boolean]`,EN=`[object Date]`,DN=`[object Error]`,ON=`[object Function]`,kN=`[object GeneratorFunction]`,AN=`[object Map]`,jN=`[object Number]`,MN=`[object Object]`,NN=`[object RegExp]`,PN=`[object Set]`,FN=`[object String]`,IN=`[object Symbol]`,LN=`[object WeakMap]`,RN=`[object ArrayBuffer]`,zN=`[object DataView]`,BN=`[object Float32Array]`,VN=`[object Float64Array]`,HN=`[object Int8Array]`,UN=`[object Int16Array]`,WN=`[object Int32Array]`,GN=`[object Uint8Array]`,KN=`[object Uint8ClampedArray]`,qN=`[object Uint16Array]`,JN=`[object Uint32Array]`,YN={};YN[CN]=YN[wN]=YN[RN]=YN[zN]=YN[TN]=YN[EN]=YN[BN]=YN[VN]=YN[HN]=YN[UN]=YN[WN]=YN[AN]=YN[jN]=YN[MN]=YN[NN]=YN[PN]=YN[FN]=YN[IN]=YN[GN]=YN[KN]=YN[qN]=YN[JN]=!0,YN[DN]=YN[ON]=YN[LN]=!1;function XN(e,t,n,r,i,a){var o,s=t&SN;if(o!==void 0)return o;if(!nk(e))return e;var c=QO(e);if(c)o=LM(e);else{var l=FM(e),u=l==ON||l==kN;if(fA(e))return pM(e,s);if(l==MN||l==CN||u&&!i)o=u?{}:pN(e);else{if(!YN[l])return i?e:{};o=fN(e,l,s)}}a||=new cM;var d=a.get(e);if(d)return d;a.set(e,o),xN(e)?e.forEach(function(r){o.add(XN(r,t,n,r,e,a))}):_N(e)&&e.forEach(function(r,i){o.set(i,XN(r,t,n,i,e,a))});var f=c?void 0:bM(e);return Ik(f||e,function(r,i){f&&(i=r,r=e[i]),Uk(o,i,XN(r,t,n,i,e,a))}),o}var ZN=1,QN=4;function $N(e){return XN(e,ZN|QN)}var eP=`__lodash_hash_undefined__`;function tP(e){return this.__data__.set(e,eP),this}function nP(e){return this.__data__.has(e)}function rP(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Pj;++t<n;)this.add(e[t])}rP.prototype.add=rP.prototype.push=tP,rP.prototype.has=nP;function iP(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function aP(e,t){return e.has(t)}var oP=1,sP=2;function cP(e,t,n,r,i,a){var o=n&oP,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&sP?new rP:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!iP(t,function(e,t){if(!aP(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)})){f=!1;break}}else if(!(m===h||i(m,h,n,r,a))){f=!1;break}}return a.delete(e),a.delete(t),f}function lP(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function uP(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var dP=1,fP=2,pP=`[object Boolean]`,mP=`[object Date]`,hP=`[object Error]`,gP=`[object Map]`,_P=`[object Number]`,vP=`[object RegExp]`,yP=`[object Set]`,bP=`[object String]`,xP=`[object Symbol]`,SP=`[object ArrayBuffer]`,CP=`[object DataView]`,wP=IO?IO.prototype:void 0,TP=wP?wP.valueOf:void 0;function EP(e,t,n,r,i,a,o){switch(n){case CP:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case SP:return!(e.byteLength!=t.byteLength||!a(new RM(e),new RM(t)));case pP:case mP:case _P:return Vk(+e,+t);case hP:return e.name==t.name&&e.message==t.message;case vP:case bP:return e==t+``;case gP:var s=lP;case yP:var c=r&dP;if(s||=uP,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=fP,o.set(e,t);var u=cP(s(e),s(t),r,i,a,o);return o.delete(e),u;case xP:if(TP)return TP.call(e)==TP.call(t)}return!1}var DP=1,OP=Object.prototype.hasOwnProperty;function kP(e,t,n,r,i,a){var o=n&DP,s=bM(e),c=s.length;if(c!=bM(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:OP.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){u=s[l];var h=e[u],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return a.delete(e),a.delete(t),p}var AP=1,jP=`[object Arguments]`,MP=`[object Array]`,NP=`[object Object]`,PP=Object.prototype.hasOwnProperty;function FP(e,t,n,r,i,a){var o=QO(e),s=QO(t),c=o?MP:FM(e),l=s?MP:FM(t);c=c==jP?NP:c,l=l==jP?NP:l;var u=c==NP,d=l==NP,f=c==l;if(f&&fA(e)){if(!fA(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new cM,o||GA(e)?cP(e,t,n,r,i,a):EP(e,t,c,n,r,i,a);if(!(n&AP)){var p=u&&PP.call(e,`__wrapped__`),m=d&&PP.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new cM,i(h,g,n,r,a)}}return f?(a||=new cM,kP(e,t,n,r,i,a)):!1}function IP(e,t,n,r,i){return e===t?!0:e==null||t==null||!JO(e)&&!JO(t)?e!==e&&t!==t:FP(e,t,n,r,IP,i)}var LP=1,RP=2;function zP(e,t,n,r){var i=n.length,a=i;if(e==null)return!a;for(e=Object(e);i--;){var o=n[i];if(o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){o=n[i];var s=o[0],c=e[s],l=o[1];if(o[2]){if(c===void 0&&!(s in e))return!1}else{var u=new cM,d;if(!(d===void 0?IP(l,c,LP|RP,r,u):d))return!1}}return!0}function BP(e){return e===e&&!nk(e)}function VP(e){for(var t=QA(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,BP(i)]}return t}function HP(e,t){return function(n){return n!=null&&n[e]===t&&(t!==void 0||e in Object(n))}}function UP(e){var t=VP(e);return t.length==1&&t[0][2]?HP(t[0][0],t[0][1]):function(n){return n===e||zP(n,e,t)}}function WP(e,t){return e!=null&&t in Object(e)}function GP(e,t,n){t=Uj(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=Wj(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&Yk(i)&&zk(o,i)&&(QO(e)||sA(e)))}function KP(e,t){return e!=null&&GP(e,t,WP)}var qP=1,JP=2;function YP(e,t){return oj(e)&&BP(t)?HP(Wj(e),t):function(n){var r=Kj(n,e);return r===void 0&&r===t?KP(n,e):IP(t,r,qP|JP)}}function XP(e){return function(t){return t?.[e]}}function ZP(e){return function(t){return Gj(t,e)}}function QP(e){return oj(e)?XP(Wj(e)):ZP(e)}function $P(e){return typeof e==`function`?e:e==null?rk:typeof e==`object`?QO(e)?YP(e[0],e[1]):UP(e):QP(e)}function eF(e){return function(e,t,n){for(var r=-1,i=Object(e),a=n(e),o=a.length;o--;){var s=a[++r];if(t(i[s],s,i)===!1)break}return e}}var tF=eF();function nF(e,t){return e&&tF(e,t,QA)}function rF(e,t,n){(n!==void 0&&!Vk(e[t],n)||n===void 0&&!(t in e))&&Bk(e,t,n)}function iF(e){return JO(e)&&Xk(e)}function aF(e,t){if(!(t===`constructor`&&typeof e[t]==`function`)&&t!=`__proto__`)return e[t]}function oF(e){return Wk(e,nj(e))}function sF(e,t,n,r,i,a,o){var s=aF(e,n),c=aF(t,n),l=o.get(c);if(l){rF(e,n,l);return}var u=a?a(s,c,n+``,e,t,o):void 0,d=u===void 0;if(d){var f=QO(c),p=!f&&fA(c),m=!f&&!p&&GA(c);u=c,f||p||m?QO(s)?u=s:iF(s)?u=Ok(s):p?(d=!1,u=pM(c,!0)):m?(d=!1,u=KM(c,!0)):u=[]:tM(c)||sA(c)?(u=s,sA(s)?u=oF(s):(!nk(s)||ck(s))&&(u=pN(c))):d=!1}d&&(o.set(c,u),i(u,c,r,a,o),o.delete(c)),rF(e,n,u)}function cF(e,t,n,r,i){e!==t&&tF(t,function(a,o){if(i||=new cM,nk(a))sF(e,t,o,n,cF,r,i);else{var s=r?r(aF(e,o),a,o+``,e,t,i):void 0;s===void 0&&(s=a),rF(e,o,s)}},nj)}var lF=Qk(function(e,t,n,r){cF(e,t,n,r)});function uF(e,t){var n={};return t=$P(t),nF(e,function(e,r,i){Bk(n,t(e,r,i),e)}),n}var dF=RegExp(`([\\p{Ll}\\d])(\\p{Lu})`,`gu`),fF=RegExp(`(\\p{Lu})([\\p{Lu}][\\p{Ll}])`,`gu`),pF=RegExp(`(\\d)\\p{Ll}|(\\p{L})\\d`,`u`),mF=/[^\p{L}\d]+/giu,hF=`$1\0$2`,gF=``;function _F(e){let t=e.trim();t=t.replace(dF,hF).replace(fF,hF),t=t.replace(mF,`\0`);let n=0,r=t.length;for(;t.charAt(n)===`\0`;)n++;if(n===r)return[];for(;t.charAt(r-1)===`\0`;)r--;return t.slice(n,r).split(/\0/g)}function vF(e){let t=_F(e);for(let e=0;e<t.length;e++){let n=t[e],r=pF.exec(n);if(r){let i=r.index+(r[1]??r[2]).length;t.splice(e,1,n.slice(0,i),n.slice(i))}}return t}function yF(e,t){let[n,r,i]=CF(e,t),a=bF(void 0),o=SF(a,xF(void 0));return n+r.map((e,t)=>t===0?a(e):o(e,t)).join(``)+i}function bF(e){return t=>t.toLocaleLowerCase(e)}function xF(e){return t=>t.toLocaleUpperCase(e)}function SF(e,t){return(n,r)=>{let i=n[0];return(r>0&&i>=`0`&&i<=`9`?`_`+i:t(i))+e(n.slice(1))}}function CF(e,t={}){let n=t.split??(t.separateNumbers?vF:_F),r=t.prefixCharacters??gF,i=t.suffixCharacters??gF,a=0,o=e.length;for(;a<e.length;){let t=e.charAt(a);if(!r.includes(t))break;a++}for(;o>a;){let t=o-1,n=e.charAt(t);if(!i.includes(n))break;o=t}return[e.slice(0,a),n(e.slice(a,o)),e.slice(o)]}var wF=e=>/.+-.+/.test(e)?yF(e):e,TF=e=>Object.prototype.toString.call(e).slice(8,-1)===`Object`;function EF(e,t){let n=Object.create(null),r=e.split(`,`);for(let e=0;e<r.length;e++)n[r[e]]=!0;return e=>!!n[e]}var DF=EF(`String,Number,Boolean,Function,Symbol,BigInt`);function OF(e){let t=e?.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?`null`:``}function kF(e,t){let n,r=OF(t);if(DF(r)){let i=typeof e;n=i===r.toLowerCase(),!n&&i===`object`&&(n=e instanceof t)}else n=r===`Object`?nk(e):r===`Array`?Array.isArray(e):r===`null`?e===null:e instanceof t;return{valid:n,expectedType:r}}function AF({prop:e,type:t,validator:n}){if(![void 0,null].includes(e)&&t){let n=!1,r=Array.isArray(t)?t:[t],i=[];for(let t=0;t<r.length&&!n;t++){let{valid:a,expectedType:o}=kF(e,r[t]);i.push(o||``),n=a}if(!n)throw TypeError(`Invalid prop: type check failed, expecting [${i.join(`, `)}], receiving: ${e}`)}if(n&&!n(e))throw Error(`Invalid prop: validator check failed, receiving: ${e}`)}function jF(e,{mergeObject:t,mergeObjectCustomizer:n,mergeFunction:r}){let i=[];for(let t=e.length-1;t>=0;t--)i.push(e[t]);let a=n||(r?(e,t)=>typeof e==`function`&&typeof t==`function`?r?.(t,e):void 0:void 0);return t===`deep`?lF(...i,a):rj(...i,a)}function MF(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function NF(e,t={}){let{type:n,default:r,defaultIsDynamic:i=!1,required:a=!1,validator:o,camelizeObjectKeys:s=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:l=!0}=t,{mergeObject:u=`deep`,mergeObjectCustomizer:d,mergeFunction:f=!1}=t,p=[],m,h=!1,g=!1,_=e=>{if(e!==void 0){AF({type:n,prop:e,validator:o});let t=TF(e),r=typeof e==`function`;return h=t,g=r,t?(e=$N(e),s?uF(e,(e,t)=>wF(t)):e):e}};for(let t of e)p.push(_(t));if(!i)p.push(_(r));else if(typeof r!=`function`)throw TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${r}`);h||(u=!1,g||(f=!1));for(let e=0;e<p.length;e++){let t=p[e];if(t!==void 0){m=e===p.length-1?t:u?jF(c?[t,r]:p,{mergeObject:u,mergeObjectCustomizer:d,mergeFunction:f}):f?MF(l?[t,r]:p,{mergeFunction:f}):t;break}}if(a&&[void 0,null].includes(m))throw Error(`Missing required prop`);return i?NF(e,{...t,default:r(m),defaultIsDynamic:!1}):m}function PF(e){let t=Array.from(wF(e));return t[0]=t[0].toUpperCase(),t.unshift(`o`,`n`),t.join(``)}function FF(e,{props:t=[],camelizePropNames:n=!1}={}){let r={props:{},attrs:{},listeners:{},hooks:{},slots:{}},i;if(Array.isArray(t))i=n?t.map(e=>wF(e)):t;else if(n){i=[];for(let e in t)i.push(wF(e))}else i=Object.keys(t);for(let t in e)if(t.startsWith(`@`)){let n=t.substring(1);if(n.startsWith(`vue:`))r.hooks[PF(n.replace(`vue:`,`vnode-`))]=e[t];else{if(n.startsWith(`vnode`))throw Error(`@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.`);r.listeners[PF(n)]=e[t]}}else if(t.startsWith(`#`)){let n=t.substring(1);n&&(r.slots[n]=e[t])}else{let a=n?wF(t):t;i.includes(a)?r.props[a]=e[t]:r.attrs[t]=e[t]}return r}var IF=`JsonEditorVue`,LF=[`mainMenuBar`,`navigationBar`,`statusBar`,`askToFormat`,`readOnly`,`escapeControlCharacters`,`escapeUnicodeCharacters`,`flattenColumns`],RF={},zF={},BF=`modelValue`,VF=`update:modelValue`,HF={[BF]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(LF.map(e=>[e,{type:Boolean,default:void 0}]))},UF=p({name:IF,install(e,t){let n=FF(t||{},{props:HF});Object.assign(RF,n.props),Object.assign(zF,n.attrs),e.component(IF,this)},props:HF,emits:{[VF](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:n,expose:i}){let u=o()?.proxy,p=g(),m=g(!1),h=g();c(()=>{var t;h.value=NF([e.mode,RF.mode],{type:String}),(t=p.value)==null||t.updateProps({mode:h.value||ev.tree})});let _=e=>{n(`update:mode`,e)};RF.mode!==void 0&&e.mode===void 0&&_(RF.mode);let v=f(()=>NF([e.debounce,RF.debounce,300],{type:Number})),y=f(()=>NF([e.stringified,RF.stringified,!0],{type:Boolean})),b=ZD,x=e=>{m.value=!0,!y.value&&e.text&&(p.value&&!p.value.validate()&&(e.json=b(e.text)),e.text=void 0),n(VF,e.text===void 0?e.json:e.text)},S=MO(x,v.value),C=e=>{h.value===`text`?S(e):x(e)},w=(e,t)=>(...n)=>{e(...n),t(...n)};return i?.({jsonEditor:p}),d(()=>{var e;(e=p.value)==null||e.destroy()}),l(()=>{let n=NF([e[BF],RF[BF]]),r=NF([Object.fromEntries(Array.from(LF,t=>[t,NF([e[t],RF[t]])]).filter(([,e])=>e!==void 0)),t,zF],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:e=>(b=e.parser?.parse||ZD,{onChange:C,onChangeMode:_,mode:h.value,parser:{parse:QD,stringify:JSON.stringify},...n!==void 0&&{content:{[typeof n==`string`&&h.value===`text`&&y.value?`text`:`json`]:n}}}),mergeFunction:w,mergeObject:`shallow`,type:Object});p.value=GD({target:u?.$refs.jsonEditorRef,props:r}),a(()=>e[BF],e=>{if(m.value){m.value=!1;return}p.value&&p.value.set([void 0,``].includes(e)?{text:``}:{[typeof e==`string`&&h.value===`text`&&y.value?`text`:`json`]:e})},{deep:!0}),a(()=>Array.from(LF,t=>e[t]),e=>{var t;(t=p.value)==null||t.updateProps(Object.fromEntries(Array.from(e,(e,t)=>[LF[t],e]).filter(([,e])=>e!==void 0)))}),a(()=>t,e=>{var t;let n={};(e.onChange||e[`on-change`])&&(n.onChange=C),(e.onChangeMode||e[`on-change-mode`])&&(n.onChangeMode=_),b=e.parser?.parse||ZD,(t=p.value)==null||t.updateProps(Object.getOwnPropertyNames(n).length>0?NF([e,n],{camelizeObjectKeys:!0,mergeFunction:w,mergeObject:`shallow`,type:Object}):e)},{deep:!0}),i||(i=e=>{for(let t in e)u[t]=s(e[t])},i({jsonEditor:p}))}),()=>r(`div`,{ref:`jsonEditorRef`})}}),WF=at(p({__name:`JsonField`,props:n({id:{},name:{},options:{},rtl:{type:Boolean},validation:{},invalid:{type:Boolean},errors:{},path:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=i(e,`modelValue`),r=f(()=>{let{readonly:e,mode:n,...r}=t.options;return{mode:n??`tree`,readOnly:e??!1,stringified:!1,mainMenuBar:!0,navigationBar:!1,askToFormat:!1,...r}});return(t,i)=>(m(),h(s(UF),u({id:e.id,name:e.name,modelValue:n.value,"onUpdate:modelValue":i[0]||=e=>n.value=e,dir:`ltr`,class:[`jse-field block w-full overflow-hidden rounded-md border shadow-xs sm:text-sm transition-colors duration-200`,e.invalid?`border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500`:`border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500`],"aria-invalid":e.invalid||void 0},r.value),null,16,[`id`,`name`,`modelValue`,`class`,`aria-invalid`]))}}),[[`__scopeId`,`data-v-f822bc85`]]);export{WF as default};