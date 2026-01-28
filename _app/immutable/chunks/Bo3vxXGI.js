import"./Bzak7iHL.js";import{i as T}from"./BrF70vDP.js";import{T as U,l as j,j as i,G as z,i as f,L as G,m as c,M as $,u as m,k as M,o as r,t as w,O as l,P as C}from"./v0O3ks5t.js";import{a as L,s as I}from"./60fZWHp2.js";import{l as O,b as S,p as k,i as B}from"./BQogdhlO.js";import{I as q,e as N,i as P}from"./DJHFg8Rl.js";function Y(g,o){const d=O(o,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];q(g,S({name:"calendar-days"},()=>d,{get iconNode(){return n},children:(p,x)=>{var h=U(),_=j(h);L(_,o,"default",{}),i(p,h)},$$slots:{default:!0}}))}var A=f('<a class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors shadow-sm"> </a>'),D=f('<div class="flex flex-col items-start gap-2 w-full"><span class="font-semibold text-gray-700 mb-1">Categories</span> <div class="flex flex-wrap gap-2"></div></div>'),E=f('<a class="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-600 hover:bg-blue-200 transition-colors shadow-sm"> </a>'),F=f('<div class="flex flex-col items-start gap-2 w-full"><span class="font-semibold text-gray-700 mb-1">Tags</span> <div class="flex flex-wrap gap-2"></div></div>'),H=f('<div class="sidebar flex flex-col items-end space-y-4"><!> <!></div>');function Z(g,o){z(o,!1);let d=k(o,"categories",24,()=>[]),n=k(o,"tags",24,()=>[]);T();var p=H(),x=c(p);{var h=e=>{var t=D(),v=M(c(t),2);N(v,5,d,P,(u,s)=>{var a=A(),b=c(a,!0);r(a),w(y=>{I(a,"href",y),C(b,l(s))},[()=>(l(s),m(()=>`/blog/category/${encodeURIComponent(l(s))}`))]),i(u,a)}),r(v),r(t),i(e,t)};B(x,e=>{$(d()),m(()=>d().length)&&e(h)})}var _=M(x,2);{var R=e=>{var t=F(),v=M(c(t),2);N(v,5,n,P,(u,s)=>{var a=E(),b=c(a);r(a),w(y=>{I(a,"href",y),C(b,`#${l(s)??""}`)},[()=>(l(s),m(()=>`/blog/tag/${encodeURIComponent(l(s))}`))]),i(u,a)}),r(v),r(t),i(e,t)};B(_,e=>{$(n()),m(()=>n().length)&&e(R)})}r(p),i(g,p),G()}export{Z as B,Y as C};
