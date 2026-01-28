import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as d,k as s,l as g,j as b,m as e,o as t,n as h}from"./v0O3ks5t.js";import{h as p}from"./IeDmrjg6.js";const l={title:"Aurelia Breeze Client Startup",date:"2017-10-06",description:"aurelia, breeze",categories:["others"],tags:["Aurelia"],icon:"icon-aurelia",readingTime:"1 min read"},{title:_,date:v,description:S,categories:A,tags:B,icon:x,readingTime:R}=l;var m=d(`<h1>Getting Started</h1> <h2>Pre Requisites</h2> <p>Aurelia Setup project</p> <h2>Dependencies</h2> <ul><li><p><a href="https://github.com/aurelia/binding" rel="nofollow">aurelia-binding</a></p></li> <li><p><a href="https://github.com/aurelia/dependency-injection" rel="nofollow">aurelia-dependency-injection</a></p></li> <li><p><a href="https://github.com/aurelia/fetch-client" rel="nofollow">aurelia-fetch-client</a></p></li> <li><p><a href="http://www.getbreezenow.com/breezejs" rel="nofollow">breeze</a></p></li></ul> <h2>Installs</h2> <pre class="language-node"><!></pre> <h2>Update aurelia.json for path of above installs</h2> <pre class="language-json"><!></pre> <h2>Register aurelia-breeze plugin with Aurelia</h2> <pre class="language-ts"><!></pre> <p>Bingo!!! You are ready to use breeze in your Aurelia application.</p> <h1>Error</h1> <p>If you will use breeze.debug.js. It contains all adapters and will give
you below error due to occurrence of multiple annonymous define.</p> <p>To reomove error use breeze.base.debug.js</p> <p><img src="/static/blog/Aurelia/aurelia-breeze-client-startup/1.png"/></p> <p>Now breeze.base.debug.js needs backingStore adapter and you will see
below error.</p> <p>Provide breeze-client/modelLibrary.backingStore.js via import in main.ts</p> <p><img src="/static/blog/Aurelia/aurelia-breeze-client-startup/2.png"/></p> <p>Voila, Errors are gone.</p> <h1>References</h1> <ul><li><p><a href="http://breeze.github.io/doc-js/" rel="nofollow">http://breeze.github.io/doc-js/</a></p></li> <li><p><a href="https://github.com/jdanyow/aurelia-breeze" rel="nofollow">https://github.com/jdanyow/aurelia-breeze</a></p></li> <li><p><a href="https://github.com/Breeze/breeze.bridge.angular/issues/6" rel="nofollow">https://github.com/Breeze/breeze.bridge.angular/issues/6</a></p></li></ul>`,1);function f(i){var o=m(),a=s(g(o),12),c=e(a);p(c,()=>`<code class="language-node">npm install aurelia-fetch-client --save

npm install aurelia-breeze --save</code>`),t(a);var n=s(a,4),u=e(n);p(u,()=>`<code class="language-json"><span class="token punctuation">&#123;</span>

<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"breeze-client"</span><span class="token punctuation">,</span>

<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"../node_modules/breeze-client"</span><span class="token punctuation">,</span>

<span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"breeze.base.debug.js"</span><span class="token punctuation">,</span>

<span class="token property">"exports"</span><span class="token operator">:</span> <span class="token string">"breeze"</span><span class="token punctuation">,</span>

<span class="token property">"resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span>

<span class="token string">"breeze.modelLibrary.backingStore.js"</span><span class="token punctuation">,</span>

<span class="token string">"breeze.dataService.webApi.js"</span><span class="token punctuation">,</span>

<span class="token string">"breeze.dataService.odata.js"</span><span class="token punctuation">,</span>

<span class="token string">"breeze.ajax.jQuery.js"</span><span class="token punctuation">,</span>

<span class="token string">"breeze.uriBuilder.json.js"</span><span class="token punctuation">,</span>

<span class="token string">"breeze.uriBuilder.odata.js"</span>

<span class="token punctuation">]</span>

<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

<span class="token punctuation">&#123;</span>

<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"aurelia-breeze"</span><span class="token punctuation">,</span>

<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"../node_modules/aurelia-breeze/dist/amd"</span><span class="token punctuation">,</span>

<span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index"</span>

<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

<span class="token punctuation">&#123;</span>

<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"aurelia-fetch-client"</span><span class="token punctuation">,</span>

<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"../node_modules/aurelia-fetch-client/dist/amd"</span><span class="token punctuation">,</span>

<span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"aurelia-fetch-client"</span>

<span class="token punctuation">&#125;</span></code>`),t(n);var r=s(n,4),k=e(r);p(k,()=>`<code class="language-ts"><span class="token keyword">import</span> <span class="token string">'breeze-client/breeze.modelLibrary.backingStore'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">'breeze-client/breeze.dataService.webApi'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">'breeze-client/breeze.uriBuilder.json'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">configure</span><span class="token punctuation">(</span>aurelia<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

aurelia<span class="token punctuation">.</span>use

<span class="token punctuation">.</span><span class="token function">standardConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'aurelia-breeze'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;--------&lt;&lt;</span>

aurelia<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>a <span class="token operator">=</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> a<span class="token punctuation">.</span><span class="token function">setRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span></code>`),t(r),h(22),b(i,o)}const T=Object.freeze(Object.defineProperty({__proto__:null,default:f,metadata:l},Symbol.toStringTag,{value:"Module"}));export{T as _};
