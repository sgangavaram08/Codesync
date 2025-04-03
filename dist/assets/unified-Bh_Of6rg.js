import{b as E}from"./bail-FqpXQuLt.js";import{e as m}from"./extend-D1C0LVzC.js";import{t as O}from"./trough-B_b8ryxu.js";import{V as S}from"./vfile-tbz-BywF.js";function z(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}const j=function(t){const n=this.constructor.prototype,i=n[t],f=function(){return i.apply(f,arguments)};return Object.setPrototypeOf(f,n),f},C={}.hasOwnProperty;class x extends j{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=O()}copy(){const e=new x;let s=-1;for(;++s<this.attachers.length;){const n=this.attachers[s];e.use(...n)}return e.data(m(!0,{},this.namespace)),e}data(e,s){return typeof e=="string"?arguments.length===2?(b("data",this.frozen),this.namespace[e]=s,this):C.call(this.namespace,e)&&this.namespace[e]||void 0:e?(b("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[s,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);const i=s.call(e,...n);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const s=y(e),n=this.parser||this.Parser;return w("parse",n),n(String(s),s)}process(e,s){const n=this;return this.freeze(),w("process",this.parser||this.Parser),g("process",this.compiler||this.Compiler),s?i(void 0,s):new Promise(i);function i(f,h){const p=y(e),l=n.parse(p);n.run(l,p,function(o,c,a){if(o||!c||!a)return r(o);const u=c,d=n.stringify(u,a);F(d)?a.value=d:a.result=d,r(o,a)});function r(o,c){o||!c?h(o):f?f(c):s(void 0,c)}}}processSync(e){let s=!1,n;return this.freeze(),w("processSync",this.parser||this.Parser),g("processSync",this.compiler||this.Compiler),this.process(e,i),I("processSync","process",s),n;function i(f,h){s=!0,E(f),n=h}}run(e,s,n){T(e),this.freeze();const i=this.transformers;return!n&&typeof s=="function"&&(n=s,s=void 0),n?f(void 0,n):new Promise(f);function f(h,p){const l=y(s);i.run(e,l,r);function r(o,c,a){const u=c||e;o?p(o):h?h(u):n(void 0,u,a)}}}runSync(e,s){let n=!1,i;return this.run(e,s,f),I("runSync","run",n),i;function f(h,p){E(h),i=p,n=!0}}stringify(e,s){this.freeze();const n=y(s),i=this.compiler||this.Compiler;return g("stringify",i),T(e),i(e,n)}use(e,...s){const n=this.attachers,i=this.namespace;if(b("use",this.frozen),e!=null)if(typeof e=="function")l(e,s);else if(typeof e=="object")Array.isArray(e)?p(e):h(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function f(r){if(typeof r=="function")l(r,[]);else if(typeof r=="object")if(Array.isArray(r)){const[o,...c]=r;l(o,c)}else h(r);else throw new TypeError("Expected usable value, not `"+r+"`")}function h(r){if(!("plugins"in r)&&!("settings"in r))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(r.plugins),r.settings&&(i.settings=m(!0,i.settings,r.settings))}function p(r){let o=-1;if(r!=null)if(Array.isArray(r))for(;++o<r.length;){const c=r[o];f(c)}else throw new TypeError("Expected a list of plugins, not `"+r+"`")}function l(r,o){let c=-1,a=-1;for(;++c<n.length;)if(n[c][0]===r){a=c;break}if(a===-1)n.push([r,...o]);else if(o.length>0){let[u,...d]=o;const P=n[a][1];z(P)&&z(u)&&(u=m(!0,P,u)),n[a]=[r,u,...d]}}}}const B=new x().freeze();function w(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function g(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function b(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function T(t){if(!z(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function I(t,e,s){if(!s)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function y(t){return A(t)?t:new S(t)}function A(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function F(t){return typeof t=="string"||D(t)}function D(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}export{B as u};
