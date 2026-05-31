import{r as a}from"./vendor-motion-Cbt0CTNW.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:s,iconNode:l,...i},m)=>a.createElement("svg",{ref:m,...w,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:n("lucide",c),...i},[...l.map(([d,u])=>a.createElement(d,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(r,e)=>{const t=a.forwardRef(({className:o,...c},s)=>a.createElement(C,{ref:s,iconNode:e,className:n(`lucide-${p(r)}`,o),...c}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=g("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),h="/assets/logo-rde-DekBNJbq.webp";export{f as C,g as c,h as l};
