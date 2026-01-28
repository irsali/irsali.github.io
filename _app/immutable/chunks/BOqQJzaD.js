import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as r,k as s,l as d,j as g,m as o,o as e}from"./v0O3ks5t.js";import{h as c}from"./IeDmrjg6.js";const i={title:"Search string using regular expression in C#",date:"2016-09-25",description:"Search string using regular expression in C#",categories:["csharp"],tags:["String","Regex"],icon:"icon-csharp",readingTime:"2 min read"},{title:v,date:_,description:C,categories:S,tags:T,icon:b,readingTime:R}=i;var h=r('<h2>Preface</h2> <p>A little bit of intro and code to get started with Regular Expression.</p> <p>The System.Text.RegularExpressions.Regex class can be used to search strings. These searches can range in complexity from very simple to making full use of regular expressions.</p> <h2>Example</h2> <p>The following code is a console application that performs a simple case-insensitive search of the strings in an array. The static method Regex.IsMatch performs the search given the string to search and a string that contains the search pattern. In this case, a third argument is used to indicate that case should be ignored.</p> <pre class="language-csharp"><!></pre> <h2>Example</h2> <p></p> <pre class="language-csharp"><!></pre>',1);function m(u){var a=h(),n=s(d(a),10),l=o(n);c(l,()=>`<code class="language-csharp">
<span class="token keyword">class</span> <span class="token class-name">TestRegularExpressions</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> sentences <span class="token operator">=</span> 
        <span class="token punctuation">&#123;</span>
            <span class="token string">"C# code"</span><span class="token punctuation">,</span>
            <span class="token string">"Chapter 2: Writing Code"</span><span class="token punctuation">,</span>
            <span class="token string">"Unicode"</span><span class="token punctuation">,</span>
            <span class="token string">"no match here"</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">string</span></span> sPattern <span class="token operator">=</span> <span class="token string">"code"</span><span class="token punctuation">;</span>

        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> s <span class="token keyword">in</span> sentences<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">"&#123;0,24&#125;"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>RegularExpressions<span class="token punctuation">.</span>Regex<span class="token punctuation">.</span><span class="token function">IsMatch</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> sPattern<span class="token punctuation">,</span> System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>RegularExpressions<span class="token punctuation">.</span>RegexOptions<span class="token punctuation">.</span>IgnoreCase<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"  (match for '&#123;0&#125;' found)"</span><span class="token punctuation">,</span> sPattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">&#123;</span>
                System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token comment">// Keep the console window open in debug mode.</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Press any key to exit."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">/* Output:
           C# code  (match for 'code' found)
           Chapter 2: Writing Code  (match for 'code' found)
           Unicode  (match for 'code' found)
           no match here
*/</span>
</code>`),e(n);var t=s(n,4);t.textContent="The following code is a console application that uses regular expressions to validate the format of each string in an array. The validation requires that each string take the form of a telephone number in which three groups of digits are separated by dashes, the first two groups contain three digits, and the third group contains four digits. This is done by using the regular expression ^\\d3-\\d3-\\d4$.";var p=s(t,2),k=o(p);c(k,()=>`<code class="language-csharp">
<span class="token keyword">class</span> <span class="token class-name">TestRegularExpressionValidation</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers <span class="token operator">=</span> 
        <span class="token punctuation">&#123;</span>
            <span class="token string">"123-555-0190"</span><span class="token punctuation">,</span> 
            <span class="token string">"444-234-22450"</span><span class="token punctuation">,</span> 
            <span class="token string">"690-555-0178"</span><span class="token punctuation">,</span> 
            <span class="token string">"146-893-232"</span><span class="token punctuation">,</span>
            <span class="token string">"146-555-0122"</span><span class="token punctuation">,</span>
            <span class="token string">"4007-555-0111"</span><span class="token punctuation">,</span> 
            <span class="token string">"407-555-0111"</span><span class="token punctuation">,</span> 
            <span class="token string">"407-2-5555"</span><span class="token punctuation">,</span> 
        <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">string</span></span> sPattern <span class="token operator">=</span> <span class="token string">"^\\d&#123;3&#125;-\\d&#123;3&#125;-\\d&#123;4&#125;$"</span><span class="token punctuation">;</span>

        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> s <span class="token keyword">in</span> numbers<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">"&#123;0,14&#125;"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>RegularExpressions<span class="token punctuation">.</span>Regex<span class="token punctuation">.</span><span class="token function">IsMatch</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> sPattern<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">" - valid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">&#123;</span>
                System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">" - invalid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token comment">// Keep the console window open in debug mode.</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Press any key to exit."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">/* Output:
      123-555-0190 - valid
     444-234-22450 - invalid
      690-555-0178 - valid
       146-893-232 - invalid
      146-555-0122 - valid
     4007-555-0111 - invalid
      407-555-0111 - valid
        407-2-5555 - invalid
*/</span>
</code>`),e(p),g(u,a)}const W=Object.freeze(Object.defineProperty({__proto__:null,default:m,metadata:i},Symbol.toStringTag,{value:"Module"}));export{W as _};
