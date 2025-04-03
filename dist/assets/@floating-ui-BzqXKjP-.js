import{r as S}from"./react-D4eHrszB.js";import{r as Nt}from"./react-dom-BnvxbSMe.js";const Vt=["top","right","bottom","left"],j=Math.min,D=Math.max,rt=Math.round,ot=Math.floor,I=t=>({x:t,y:t}),$t={left:"right",right:"left",bottom:"top",top:"bottom"},zt={start:"end",end:"start"};function ut(t,e,n){return D(t,j(e,n))}function $(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function mt(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(z(t))?"y":"x"}function ht(t){return mt(Q(t))}function _t(t,e,n){n===void 0&&(n=!1);const o=J(t),i=ht(t),r=gt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function jt(t){const e=st(t);return[dt(t),e,dt(e)]}function dt(t){return t.replace(/start|end/g,e=>zt[e])}function It(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Yt(t,e,n,o){const i=J(t);let r=It(z(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(dt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>$t[e])}function Xt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Pt(t){return typeof t!="number"?Xt(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function vt(t,e,n){let{reference:o,floating:i}=t;const r=Q(e),s=ht(e),l=gt(s),c=z(e),f=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let a;switch(c){case"top":a={x:d,y:o.y-i.height};break;case"bottom":a={x:d,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(J(e)){case"start":a[s]-=m*(n&&f?-1:1);break;case"end":a[s]+=m*(n&&f?-1:1);break}return a}const qt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=vt(f,o,c),m=o,a={},g=0;for(let h=0;h<l.length;h++){const{name:w,fn:p}=l[h],{x,y,data:v,reset:b}=await p({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...v}},b&&g<=50&&(g++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(f=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:d,y:u}=vt(f,m,c)),h=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:a}};async function tt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:a=0}=$(e,t),g=Pt(a),w=l[m?u==="floating"?"reference":"floating":u],p=ct(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),x=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),v=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},b=ct(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:y,strategy:c}):x);return{top:(p.top-b.top+g.top)/v.y,bottom:(b.bottom-p.bottom+g.bottom)/v.y,left:(p.left-b.left+g.left)/v.x,right:(b.right-p.right+g.right)/v.x}}const Ut=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=$(t,e)||{};if(f==null)return{};const u=Pt(d),m={x:n,y:o},a=ht(i),g=gt(a),h=await s.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",v=r.reference[g]+r.reference[a]-m[a]-r.floating[g],b=m[a]-r.reference[a],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let O=A?A[y]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=l.floating[y]||r.floating[g]);const P=v/2-b/2,F=O/2-h[g]/2-1,H=j(u[p],F),N=j(u[x],F),C=H,V=O-h[g]-N,L=O/2-h[g]/2+P,E=ut(C,L,V),T=!c.arrow&&J(i)!=null&&L!==E&&r.reference[g]/2-(L<C?H:N)-h[g]/2<0,R=T?L<C?L-C:L-V:0;return{[a]:m[a]+R,data:{[a]:E,centerOffset:L-E-R,...T&&{alignmentOffset:R}},reset:T}}}),Kt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=$(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=z(i),x=z(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(f.floating)),v=m||(x||!h?[st(l)]:jt(l));!m&&g!=="none"&&v.push(...Yt(l,h,g,y));const b=[l,...v],A=await tt(e,w),O=[];let P=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&O.push(A[p]),u){const C=_t(i,s,y);O.push(A[C[0]],A[C[1]])}if(P=[...P,{placement:i,overflows:O}],!O.every(C=>C<=0)){var F,H;const C=(((F=r.flip)==null?void 0:F.index)||0)+1,V=b[C];if(V)return{data:{index:C,overflows:P},reset:{placement:V}};let L=(H=P.filter(E=>E.overflows[0]<=0).sort((E,T)=>E.overflows[1]-T.overflows[1])[0])==null?void 0:H.placement;if(!L)switch(a){case"bestFit":{var N;const E=(N=P.map(T=>[T.placement,T.overflows.filter(R=>R>0).reduce((R,q)=>R+q,0)]).sort((T,R)=>T[1]-R[1])[0])==null?void 0:N[0];E&&(L=E);break}case"initialPlacement":L=l;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function bt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function At(t){return Vt.some(e=>t[e]>=0)}const Gt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=$(t,e);switch(o){case"referenceHidden":{const r=await tt(e,{...i,elementContext:"reference"}),s=bt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:At(s)}}}case"escaped":{const r=await tt(e,{...i,altBoundary:!0}),s=bt(r,n.floating);return{data:{escapedOffsets:s,escaped:At(s)}}}default:return{}}}}};async function Jt(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=z(n),l=J(n),c=Q(n)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=$(e,t);let{mainAxis:m,crossAxis:a,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof g=="number"&&(a=l==="end"?g*-1:g),c?{x:a*d,y:m*f}:{x:m*f,y:a*d}}const Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Jt(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Zt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...c}=$(t,e),f={x:n,y:o},d=await tt(e,c),u=Q(z(i)),m=mt(u);let a=f[m],g=f[u];if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=ut(x,a,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=g+d[w],y=g-d[p];g=ut(x,g,y)}const h=l.fn({...e,[m]:a,[u]:g});return{...h,data:{x:h.x-n,y:h.y-o}}}}},te=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=$(t,e),d={x:n,y:o},u=Q(i),m=mt(u);let a=d[m],g=d[u];const h=$(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const y=m==="y"?"height":"width",v=r.reference[m]-r.floating[y]+w.mainAxis,b=r.reference[m]+r.reference[y]-w.mainAxis;a<v?a=v:a>b&&(a=b)}if(f){var p,x;const y=m==="y"?"width":"height",v=["top","left"].includes(z(i)),b=r.reference[u]-r.floating[y]+(v&&((p=s.offset)==null?void 0:p[u])||0)+(v?0:w.crossAxis),A=r.reference[u]+r.reference[y]+(v?0:((x=s.offset)==null?void 0:x[u])||0)-(v?w.crossAxis:0);g<b?g=b:g>A&&(g=A)}return{[m]:a,[u]:g}}}},ee=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=$(t,e),c=await tt(e,l),f=z(n),d=J(n),u=Q(n)==="y",{width:m,height:a}=o.floating;let g,h;f==="top"||f==="bottom"?(g=f,h=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=f,g=d==="end"?"top":"bottom");const w=a-c[g],p=m-c[h],x=!e.middlewareData.shift;let y=w,v=p;if(u){const A=m-c.left-c.right;v=d||x?j(p,A):A}else{const A=a-c.top-c.bottom;y=d||x?j(w,A):A}if(x&&!d){const A=D(c.left,0),O=D(c.right,0),P=D(c.top,0),F=D(c.bottom,0);u?v=m-2*(A!==0||O!==0?A+O:D(c.left,c.right)):y=a-2*(P!==0||F!==0?P+F:D(c.top,c.bottom))}await s({...e,availableWidth:v,availableHeight:y});const b=await i.getDimensions(r.floating);return m!==b.width||a!==b.height?{reset:{rects:!0}}:{}}}};function Z(t){return Tt(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(Tt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tt(t){return t instanceof Node||t instanceof M(t).Node}function W(t){return t instanceof Element||t instanceof M(t).Element}function B(t){return t instanceof HTMLElement||t instanceof M(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ne(t){return["table","td","th"].includes(Z(t))}function pt(t){const e=wt(),n=k(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function oe(t){let e=Y(t);for(;B(e)&&!G(e);){if(pt(e))return e;e=Y(e)}return null}function wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(t){return["html","body","#document"].includes(Z(t))}function k(t){return M(t).getComputedStyle(t)}function ft(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(Z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||_(t);return Rt(e)?e.host:e}function Dt(t){const e=Y(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&nt(e)?e:Dt(e)}function et(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Dt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=M(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&n?et(s.frameElement):[]):e.concat(i,et(i,[],n))}function Mt(t){const e=k(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=rt(n)!==r||rt(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function xt(t){return W(t)?t:t.contextElement}function K(t){const e=xt(t);if(!B(e))return I(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Mt(e);let s=(r?rt(n.width):n.width)/o,l=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ie=I(0);function kt(t){const e=M(t);return!wt()||!e.visualViewport?ie:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function re(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==M(t)?!1:e}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=xt(t);let s=I(1);e&&(o?W(o)&&(s=K(o)):s=K(t));const l=re(r,n,o)?kt(r):I(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=M(r),a=o&&W(o)?M(o):o;let g=m,h=g.frameElement;for(;h&&o&&a!==g;){const w=K(h),p=h.getBoundingClientRect(),x=k(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,v=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;c*=w.x,f*=w.y,d*=w.x,u*=w.y,c+=y,f+=v,g=M(h),h=g.frameElement}}return ct({width:d,height:u,x:c,y:f})}const se=[":popover-open",":modal"];function yt(t){return se.some(e=>{try{return t.matches(e)}catch{return!1}})}function ce(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=_(o),l=e?yt(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},f=I(1);const d=I(0),u=B(o);if((u||!u&&!r)&&((Z(o)!=="body"||nt(s))&&(c=ft(o)),B(o))){const m=X(o);f=K(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+d.x,y:n.y*f.y-c.scrollTop*f.y+d.y}}function le(t){return Array.from(t.getClientRects())}function Ft(t){return X(_(t)).left+ft(t).scrollLeft}function fe(t){const e=_(t),n=ft(t),o=t.ownerDocument.body,i=D(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=D(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ft(t);const l=-n.scrollTop;return k(o).direction==="rtl"&&(s+=D(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function ae(t,e){const n=M(t),o=_(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=wt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function ue(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=B(t)?K(t):I(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=o*r.y;return{width:s,height:l,x:c,y:f}}function Ot(t,e,n){let o;if(e==="viewport")o=ae(t,n);else if(e==="document")o=fe(_(t));else if(W(e))o=ue(e,n);else{const i=kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ct(o)}function Wt(t,e){const n=Y(t);return n===e||!W(n)||G(n)?!1:k(n).position==="fixed"||Wt(n,e)}function de(t,e){const n=e.get(t);if(n)return n;let o=et(t,[],!1).filter(l=>W(l)&&Z(l)!=="body"),i=null;const r=k(t).position==="fixed";let s=r?Y(t):t;for(;W(s)&&!G(s);){const l=k(s),c=pt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!c&&Wt(t,s))?o=o.filter(d=>d!==s):i=l,s=Y(s)}return e.set(t,o),o}function me(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?yt(e)?[]:de(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,d)=>{const u=Ot(e,d,i);return f.top=D(u.top,f.top),f.right=j(u.right,f.right),f.bottom=j(u.bottom,f.bottom),f.left=D(u.left,f.left),f},Ot(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ge(t){const{width:e,height:n}=Mt(t);return{width:e,height:n}}function he(t,e,n){const o=B(e),i=_(e),r=n==="fixed",s=X(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=I(0);if(o||!o&&!r)if((Z(e)!=="body"||nt(i))&&(l=ft(e)),o){const u=X(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Ft(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function at(t){return k(t).position==="static"}function Ct(t,e){return!B(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function Bt(t,e){const n=M(t);if(yt(t))return n;if(!B(t)){let i=Y(t);for(;i&&!G(i);){if(W(i)&&!at(i))return i;i=Y(i)}return n}let o=Ct(t,e);for(;o&&ne(o)&&at(o);)o=Ct(o,e);return o&&G(o)&&at(o)&&!pt(o)?n:o||oe(t)||n}const pe=async function(t){const e=this.getOffsetParent||Bt,n=this.getDimensions,o=await n(t.floating);return{reference:he(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function we(t){return k(t).direction==="rtl"}const xe={convertOffsetParentRelativeRectToViewportRelativeRect:ce,getDocumentElement:_,getClippingRect:me,getOffsetParent:Bt,getElementRects:pe,getClientRects:le,getDimensions:ge,getScale:K,isElement:W,isRTL:we};function ye(t,e){let n=null,o;const i=_(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const a=ot(d),g=ot(i.clientWidth-(f+u)),h=ot(i.clientHeight-(d+m)),w=ot(f),x={rootMargin:-a+"px "+-g+"px "+-h+"px "+-w+"px",threshold:D(0,j(1,c))||1};let y=!0;function v(b){const A=b[0].intersectionRatio;if(A!==c){if(!y)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(v,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,x)}n.observe(t)}return s(!0),r}function Re(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=xt(t),d=i||r?[...f?et(f):[],...et(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=f&&l?ye(f,n):null;let m=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let g,h=c?X(t):null;c&&w();function w(){const p=X(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,g=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const Oe=Qt,Ce=Zt,Ee=Kt,Se=ee,Le=Gt,Et=Ut,Pe=te,ve=(t,e,n)=>{const o=new Map,i={platform:xe,...n},r={...i.platform,_c:o};return qt(t,e,{...i,platform:r})},Te=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Et({element:o.current,padding:i}).fn(n):{}:o?Et({element:o,padding:i}).fn(n):{}}}};var it=typeof document<"u"?S.useLayoutEffect:S.useEffect;function lt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!lt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!lt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Ht(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function St(t,e){const n=Ht(t);return Math.round(e*n)/n}function Lt(t){const e=S.useRef(t);return it(()=>{e.current=t}),e}function De(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=t,[d,u]=S.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,a]=S.useState(o);lt(m,o)||a(o);const[g,h]=S.useState(null),[w,p]=S.useState(null),x=S.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),y=S.useCallback(R=>{R!==O.current&&(O.current=R,p(R))},[]),v=r||g,b=s||w,A=S.useRef(null),O=S.useRef(null),P=S.useRef(d),F=c!=null,H=Lt(c),N=Lt(i),C=S.useCallback(()=>{if(!A.current||!O.current)return;const R={placement:e,strategy:n,middleware:m};N.current&&(R.platform=N.current),ve(A.current,O.current,R).then(q=>{const U={...q,isPositioned:!0};V.current&&!lt(P.current,U)&&(P.current=U,Nt.flushSync(()=>{u(U)}))})},[m,e,n,N]);it(()=>{f===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[f]);const V=S.useRef(!1);it(()=>(V.current=!0,()=>{V.current=!1}),[]),it(()=>{if(v&&(A.current=v),b&&(O.current=b),v&&b){if(H.current)return H.current(v,b,C);C()}},[v,b,C,H,F]);const L=S.useMemo(()=>({reference:A,floating:O,setReference:x,setFloating:y}),[x,y]),E=S.useMemo(()=>({reference:v,floating:b}),[v,b]),T=S.useMemo(()=>{const R={position:n,left:0,top:0};if(!E.floating)return R;const q=St(E.floating,d.x),U=St(E.floating,d.y);return l?{...R,transform:"translate("+q+"px, "+U+"px)",...Ht(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:q,top:U}},[n,l,E.floating,d.x,d.y]);return S.useMemo(()=>({...d,update:C,refs:L,elements:E,floatingStyles:T}),[d,C,L,E,T])}export{Se as a,Te as b,Re as c,ve as d,Et as e,Ee as f,Le as h,Pe as l,Oe as o,Ce as s,De as u};
