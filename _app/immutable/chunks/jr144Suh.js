import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as e,k as p,l as o,j as c,m as l,o as u,n as r}from"./v0O3ks5t.js";import{h as i}from"./IeDmrjg6.js";const k={title:"Aurelia Breeze Server Startup",date:"2017-10-06",description:"aurelia, breeze",categories:["others"],tags:["Aurelia"],icon:"icon-aurelia",readingTime:"1 min read"},{title:v,date:y,description:f,categories:x,tags:z,icon:w,readingTime:_}=k;var d=e('<h1>Getting Started</h1> <h2>Pre Requisites</h2> <p>Web API 2.x Project</p> <h2>Install packages</h2> <ol><li><p>Breeze.Server.ContextProvider.EF6</p></li> <li><p>Breeze.Server.WebApi2</p></li></ol> <h2>Breeze controller example</h2> <pre class="language-cs"><!></pre> <h1>References</h1> <ol><li><a href="http://breeze.github.io/doc-net/nuget-packages.html" rel="nofollow">http://breeze.github.io/doc-net/nuget-packages.html</a></li></ol>',1);function C(a){var n=d(),s=p(o(n),12),t=l(s);i(t,()=>`<code class="language-cs"><span class="token comment">/// &lt;summary></span>

<span class="token comment">/// Api that exposes data from breeze client</span>

<span class="token comment">/// &lt;/summary></span>

<span class="token punctuation">[</span>BreezeController<span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"breeze/[controller]"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TodoesController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Controller</span></span>

<span class="token punctuation">&#123;</span>

<span class="token keyword">readonly</span> <span class="token class-name">EFContextProvider<span class="token punctuation">&lt;</span>MyDbContext<span class="token punctuation">></span></span> _contextProvider <span class="token operator">=</span>

<span class="token keyword">new</span> <span class="token constructor-invocation class-name">EFContextProvider<span class="token punctuation">&lt;</span>MyDbContext<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ~/breeze/todoes/Metadata</span>

<span class="token punctuation">[</span>HttpGet<span class="token punctuation">]</span>

<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Metadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">&#123;</span>

<span class="token keyword">return</span> _contextProvider<span class="token punctuation">.</span><span class="token function">Metadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span>

<span class="token comment">// ~/breeze/todoes/Todoes</span>

<span class="token comment">// ~/breeze/todoes/Todoes?$filter=IsArchived eq</span>
<span class="token boolean">false</span><span class="token operator">&amp;</span>$<span class="token keyword">orderby</span><span class="token operator">=</span>CreatedAt

<span class="token punctuation">[</span>HttpGet<span class="token punctuation">]</span>

<span class="token keyword">public</span> <span class="token return-type class-name">IQueryable<span class="token punctuation">&lt;</span>TodoItem<span class="token punctuation">></span></span> <span class="token function">Todoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">&#123;</span>

<span class="token keyword">return</span> _contextProvider<span class="token punctuation">.</span>Context<span class="token punctuation">.</span>TodoItems<span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span>

<span class="token comment">// ~/breeze/todoes/SaveChanges</span>

<span class="token punctuation">[</span>HttpPost<span class="token punctuation">]</span>

<span class="token keyword">public</span> <span class="token return-type class-name">SaveResult</span> <span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token class-name">JObject</span> saveBundle<span class="token punctuation">)</span>

<span class="token punctuation">&#123;</span>

<span class="token keyword">return</span> _contextProvider<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span>saveBundle<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span></code>`),u(s),r(4),c(a,n)}export{C as default,k as metadata};
