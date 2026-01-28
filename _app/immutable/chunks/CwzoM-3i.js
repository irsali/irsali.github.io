import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as p,k as e,l as o,j as r,m as c,o as l,n as i}from"./v0O3ks5t.js";import{h as u}from"./IeDmrjg6.js";const k={title:"Debugging in VS Code",date:"2017-11-19",desc:"Debugging in VS Code",keywords:"VS Code, debugging",categories:["others"],tags:["VS Code","Debugging"],readingTime:"1 min read"},{title:f,date:b,desc:_,keywords:C,categories:v,tags:S,readingTime:D}=k;var g=p(`<p>Open the Extensions view (Ctrl+Shift+X). When the extension list
appears, type \\‘chrome\\’ to filter the list and install the Debugger for
Chrome extension.</p> <p>Add a configuration file “launch.json” in .vs folder. You can use VS
Code menu bar -&gt; Debug -&gt; Add Configuration.</p> <p>launch.json should look like below at the minimmum.</p> <pre class="language-json"><!></pre> <p>Type and request should be as given. You can choose any name and webRoot should contain physical path</p>`,1);function V(a){var s=g(),n=e(o(s),6),t=c(n);u(t,()=>`<code class="language-json"><span class="token punctuation">&#123;</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span>
    <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
            <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"npm start"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Run npm start"</span><span class="token punctuation">,</span>
            <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node-terminal"</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Attach by Process ID"</span><span class="token punctuation">,</span>
            <span class="token property">"processId"</span><span class="token operator">:</span> <span class="token string">"$&#123;command:PickProcess&#125;"</span><span class="token punctuation">,</span>
            <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"attach"</span><span class="token punctuation">,</span>
            <span class="token property">"skipFiles"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"&lt;node_internals>/**"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),l(n),i(2),r(a,s)}export{V as default,k as metadata};
