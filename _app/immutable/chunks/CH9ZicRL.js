import"./Bzak7iHL.js";import{i as U}from"./BIx9FNUU.js";import{G,H,m as i,i as P,k as f,n as S,v as c,C as $,u as m,w as M,z as r,t as w,o as l,B as C}from"./Bby5WbAi.js";import{a as T,s as I}from"./BSlJg8PE.js";import{l as j,b as q,p as k,i as B}from"./DXk6krQO.js";import{I as A,e as z,i as N}from"./DsuFQ1Ac.js";function Y(g,o){const d=j(o,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];A(g,q({name:"calendar-days"},()=>d,{get iconNode(){return n},children:(p,x)=>{var h=G(),_=H(h);T(_,o,"default",{}),i(p,h)},$$slots:{default:!0}}))}var D=f('<a class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors shadow-sm"> </a>'),E=f('<div class="flex flex-col items-start gap-2 w-full"><span class="font-semibold text-gray-700 mb-1">Categories</span> <div class="flex flex-wrap gap-2"></div></div>'),F=f('<a class="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-600 hover:bg-blue-200 transition-colors shadow-sm"> </a>'),J=f('<div class="flex flex-col items-start gap-2 w-full"><span class="font-semibold text-gray-700 mb-1">Tags</span> <div class="flex flex-wrap gap-2"></div></div>'),K=f('<div class="sidebar flex flex-col items-end space-y-4"><!> <!></div>');function Z(g,o){P(o,!1);let d=k(o,"categories",24,()=>[]),n=k(o,"tags",24,()=>[]);U();var p=K(),x=c(p);{var h=e=>{var t=E(),v=M(c(t),2);z(v,5,d,N,(u,s)=>{var a=D(),b=c(a,!0);r(a),w(y=>{I(a,"href",y),C(b,l(s))},[()=>(l(s),m(()=>`/blog/category/${encodeURIComponent(l(s))}`))]),i(u,a)}),r(v),r(t),i(e,t)};B(x,e=>{$(d()),m(()=>d().length)&&e(h)})}var _=M(x,2);{var R=e=>{var t=J(),v=M(c(t),2);z(v,5,n,N,(u,s)=>{var a=F(),b=c(a);r(a),w(y=>{I(a,"href",y),C(b,`#${l(s)??""}`)},[()=>(l(s),m(()=>`/blog/tag/${encodeURIComponent(l(s))}`))]),i(u,a)}),r(v),r(t),i(e,t)};B(_,e=>{$(n()),m(()=>n().length)&&e(R)})}r(p),i(g,p),S()}export{Z as B,Y as C};
