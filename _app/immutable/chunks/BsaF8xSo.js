import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as x,k as n,l as R,j as V,m as s,o as a,n as j}from"./v0O3ks5t.js";import{h as t}from"./IeDmrjg6.js";const d={title:"Aurelia Bootstrap Startup",date:"2017-10-06",description:"aurelia",categories:["others"],tags:["Aurelia"],icon:"icon-aurelia",readingTime:"3 min read"},{title:q,date:E,description:F,categories:T,tags:I,icon:O,readingTime:Y}=d;var A=x(`<h1>Getting Started</h1> <h2>Pre Requisites</h2> <p>Aurelia Setup project</p> <h3>Installs</h3> <pre class="language-bash"><!></pre> <h3>Update aurelia.json for path of above installs</h3> <pre class="language-json"><!></pre> <h3>Register bootstrap plugin with Aurelia</h3> <p>Aurelia-bootstrap supports both Bootstrap 3 and 4. to use the version 4.
You need to explicity say Aurelia to use bootstrap version 4 like below.</p> <pre class="language-ts"><!></pre> <p>Bingo!!! You are ready to use bootstrap in your Aurelia application.</p> <h2>Using Bootstrap Renderer for faciliating validation errors</h2> <p>Add BootstrapFormValidationRender in ValidationController and object to
validate. Then validate using validate method. Also, on html must
specify the field you want to validate.</p> <pre class="language-ts"><!></pre> <pre class="language-ts"><!></pre> <pre class="language-ts"><!></pre> <pre class="language-html"><!></pre> <p>Below is a BootstrapFormValidationRender a class.</p> <pre class="language-ts"><!></pre> <p>That’s it. You can run your project and enjoy client side validation.</p>`,1);function G(m){var k=A(),p=n(R(k),8),g=s(p);t(g,()=>`<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> bootstrap <span class="token parameter variable">--save</span>

<span class="token function">npm</span> <span class="token function">install</span> aurelia-bootstrap <span class="token parameter variable">--save</span>

<span class="token function">npm</span> <span class="token function">install</span> velocity-animate <span class="token parameter variable">--save</span>

<span class="token function">npm</span> <span class="token function">install</span> tether <span class="token parameter variable">--save</span></code>`),a(p);var o=n(p,4),f=s(o);t(f,()=>`<code class="language-json"><span class="token punctuation">[</span>
	<span class="token string">"velocity-animate"</span><span class="token punctuation">,</span>

	<span class="token string">"tether"</span><span class="token punctuation">,</span>

	<span class="token punctuation">&#123;</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"aurelia-bootstrap"</span><span class="token punctuation">,</span>

		<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"../node_modules/aurelia-bootstrap/dist/amd"</span><span class="token punctuation">,</span>

		<span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>

		<span class="token property">"resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/*.html"</span><span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

	<span class="token punctuation">&#123;</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"bootstrap"</span><span class="token punctuation">,</span>

		<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"../node_modules/bootstrap-v4-dev/dist/"</span><span class="token punctuation">,</span>

		<span class="token property">"main"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

		<span class="token property">"resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/*.css"</span><span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">]</span></code>`),a(o);var e=n(o,6),v=s(e);t(v,()=>`<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">configure</span><span class="token punctuation">(</span>aurelia<span class="token operator">:</span> Aurelia<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	aurelia<span class="token punctuation">.</span>use

		<span class="token punctuation">.</span><span class="token function">standardConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'aurelia-bootstrap'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>plugin<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>options<span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">feature</span><span class="token punctuation">(</span><span class="token string">'resources'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(e);var c=n(e,8),y=s(c);t(y,()=>`<code class="language-ts"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> controller<span class="token operator">:</span> ValidationController<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"constructor called"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>controller<span class="token punctuation">.</span><span class="token function">addRenderer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BootstrapFormValidationRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>controller<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span>objectToValidate<span class="token punctuation">,</span> <span class="token function">getValidationRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span></code>`),a(c);var u=n(c,2),h=s(u);t(h,()=>`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">getValidationRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> ValidationRules<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">ensure</span><span class="token generic class-name"><span class="token operator">&lt;</span>FormField<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>validation <span class="token operator">&amp;&amp;</span> x<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>required<span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>validation <span class="token operator">&amp;&amp;</span> x<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>email<span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>validation<span class="token punctuation">.</span>maxLength<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>validation <span class="token operator">&amp;&amp;</span> x<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>maxLength <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> x<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">'string'</span><span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>validation<span class="token punctuation">.</span>maxLength<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>validation <span class="token operator">&amp;&amp;</span> x<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>minLength <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> x<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">'string'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rules<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(u);var l=n(u,2),w=s(l);t(w,()=>`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>controller
		<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>valid<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(l);var i=n(l,2),b=s(i);t(b,()=>'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>”text”<span class="token punctuation">"</span></span> <span class="token attr-name">value.bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formField.value &amp; validate<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>'),a(i);var r=n(i,4),_=s(r);t(_,()=>`<code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ValidationRenderer<span class="token punctuation">,</span> RenderInstruction<span class="token punctuation">,</span> ValidateResult <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'aurelia-validation'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BootstrapFormValidationRenderer</span> <span class="token punctuation">&#123;</span>
	<span class="token function">render</span><span class="token punctuation">(</span>instruction<span class="token operator">:</span> RenderInstruction<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">&#123;</span> result<span class="token punctuation">,</span> elements <span class="token punctuation">&#125;</span> <span class="token keyword">of</span> instruction<span class="token punctuation">.</span>unrender<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> element <span class="token keyword">of</span> elements<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">&#123;</span> result<span class="token punctuation">,</span> elements <span class="token punctuation">&#125;</span> <span class="token keyword">of</span> instruction<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> element <span class="token keyword">of</span> elements<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token function">add</span><span class="token punctuation">(</span>element<span class="token operator">:</span> Element<span class="token punctuation">,</span> result<span class="token operator">:</span> ValidateResult<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>valid<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">const</span> formGroup <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">'.form-group'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formGroup<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>

		<span class="token comment">// add the has-danger class to the enclosing form-group div</span>

		formGroup<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'has-danger'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// add help-block</span>

		<span class="token keyword">const</span> message <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		message<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'form-control-feedback'</span><span class="token punctuation">;</span>

		message<span class="token punctuation">.</span>textContent <span class="token operator">=</span> result<span class="token punctuation">.</span>message<span class="token punctuation">;</span>

		message<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">'validation-message-$&#123;result.id&#125;'</span><span class="token punctuation">;</span>

		formGroup<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token function">remove</span><span class="token punctuation">(</span>element<span class="token operator">:</span> Element<span class="token punctuation">,</span> result<span class="token operator">:</span> ValidateResult<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>valid<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">const</span> formGroup <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">'.form-group'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formGroup<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>

		<span class="token comment">// remove help-block</span>

		<span class="token keyword">const</span> message <span class="token operator">=</span> formGroup<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#validation-message-$&#123;result.id&#125;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			formGroup<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// remove the has-danger class from the enclosing form-group div</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>formGroup<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.form-control-feedback'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
				formGroup<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'has-danger'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(r),j(2),V(m,k)}const P=Object.freeze(Object.defineProperty({__proto__:null,default:G,metadata:d},Symbol.toStringTag,{value:"Module"}));export{P as _};
