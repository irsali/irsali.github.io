import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as r,k as t,l as k,j as m,m as p,o as e}from"./v0O3ks5t.js";import{h as o}from"./IeDmrjg6.js";const c={title:"String manipulation in C#",date:"2016-09-24",description:"string manipulation",categories:["csharp"],tags:["csharp"],icon:"icon-csharp",readingTime:"3 min read"},{title:b,date:v,description:x,categories:_,tags:S,icon:T,readingTime:R}=c;var h=r(`<h2>Preface</h2> <p>Some code help to search, replace, remove string.</p> <p>Strings are <em>immutable</em> in managed code, it is not possible (without using unsafe code) to modify the value of a string object after it has been
created. However, there are many ways to modify the value of a string and store the result in a new string object. The <em>System.String</em>class
provides methods that operate on an input string and return a new string object. In many cases, you can assign the new object to the variable
that held the original string.
The <em>System.Text.RegularExpressions.Regex</em> class provides additional methods that work in a similar manner.
The <em>System.Text.StringBuilder</em> class provides a character buffer that you can modify “in-place.” You call
the <em>StringBuilder.ToString</em> method to create a new string object that contains the current contents of the
buffer.</p> <h2>Example</h2> <p>The following example shows various ways to replace or remove substrings
in a specified string.</p> <pre class="language-csharp"><!></pre> <h1>Example</h1> <p>To access the individual characters in a string by using array notation, you can use the <em>StringBuilder</em> object, which overloads
the <strong>[]</strong> operator to provide access to its internal character buffer.
You can also convert the string to an array of chars by using the <em>ToCharArray</em> method. The following example uses <strong>ToCharArray</strong> to
create the array. Some elements of this array are then modified. A string constructor that takes a char array as an input parameter is then
called to create a new string.</p> <pre class="language-csharp"><!></pre>`,1);function d(l){var s=h(),n=t(k(s),10),u=p(n);o(u,()=>`<code class="language-csharp">
<span class="token keyword">class</span> <span class="token class-name">ReplaceSubstrings</span>
<span class="token punctuation">&#123;</span>
    <span class="token class-name"><span class="token keyword">string</span></span> searchFor<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">string</span></span> replaceWith<span class="token punctuation">;</span>
    
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name">ReplaceSubstrings</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReplaceSubstrings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">string</span></span> s <span class="token operator">=</span> <span class="token string">"The mountains are behind the clouds today."</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Replace one substring with another with String.Replace.</span>
        <span class="token comment">// Only exact matches are supported.</span>
        s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">"mountains"</span><span class="token punctuation">,</span> <span class="token string">"peaks"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Output: The peaks are behind the clouds today.</span>
        <span class="token comment">// Use Regex.Replace for more flexibility.</span>
        <span class="token comment">// Replace "the" or "The" with "many" or "Many".</span>
        <span class="token comment">// using System.Text.RegularExpressions</span>
        
        app<span class="token punctuation">.</span>searchFor <span class="token operator">=</span> <span class="token string">"the"</span><span class="token punctuation">;</span> <span class="token comment">// A very simple regular expression.</span>
        app<span class="token punctuation">.</span>replaceWith <span class="token operator">=</span> <span class="token string">"many"</span><span class="token punctuation">;</span>
        
        s <span class="token operator">=</span> Regex<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> app<span class="token punctuation">.</span>searchFor<span class="token punctuation">,</span> app<span class="token punctuation">.</span>ReplaceMatchCase<span class="token punctuation">,</span>
        RegexOptions<span class="token punctuation">.</span>IgnoreCase<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Output: Many peaks are behind many clouds today.</span>
        <span class="token comment">// Replace all occurrences of one char with another.</span>
        s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token char">' '</span><span class="token punctuation">,</span> <span class="token char">'_'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Output: Many_peaks_are_behind_many_clouds_today.</span>
        <span class="token comment">// Remove a substring from the middle of the string.</span>
        <span class="token class-name"><span class="token keyword">string</span></span> temp <span class="token operator">=</span> <span class="token string">"many_"</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">IndexOf</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Output: Many_peaks_are_behind_clouds_today.</span>
        <span class="token comment">// Remove trailing and leading whitespace.</span>
        <span class="token comment">// See also the TrimStart and TrimEnd methods.</span>
        <span class="token class-name"><span class="token keyword">string</span></span> s2 <span class="token operator">=</span> <span class="token string">" I'm wider than I need to be. "</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Store the results in a new string variable.</span>
        temp <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Output: I'm wider than I need to be.</span>
        <span class="token comment">// Keep the console window open in debug mode.</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Press any key to exit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// Custom match method called by Regex.Replace</span>
    <span class="token comment">// using System.Text.RegularExpressions</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ReplaceMatchCase</span><span class="token punctuation">(</span><span class="token class-name">Match</span> m<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// Test whether the match is capitalized</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Char<span class="token punctuation">.</span><span class="token function">IsUpper</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>Value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token comment">// Capitalize the replacement string</span>
            <span class="token comment">// using System.Text;</span>
            <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StringBuilder</span><span class="token punctuation">(</span>replaceWith<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>Char<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>sb<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> replaceWith<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`),e(n);var a=t(n,6),i=p(a);o(i,()=>`<code class="language-csharp">
<span class="token keyword">class</span> <span class="token class-name">ModifyStrings</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">string</span></span> str <span class="token operator">=</span> <span class="token string">"The quick brown fox jumped over the fence"</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> chars <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">ToCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> animalIndex <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">IndexOf</span><span class="token punctuation">(</span><span class="token string">"fox"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>animalIndex <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            chars<span class="token punctuation">[</span>animalIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'c'</span><span class="token punctuation">;</span>
            chars<span class="token punctuation">[</span>animalIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span>
            chars<span class="token punctuation">[</span>animalIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'t'</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        
        <span class="token class-name"><span class="token keyword">string</span></span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Keep the console window open in debug mode</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Press any key to exit."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Output:

The quick brown fox jumped over the fence

The quick brown cat jumped over the fence

*/</span>
</code>`),e(a),m(l,s)}const C=Object.freeze(Object.defineProperty({__proto__:null,default:d,metadata:c},Symbol.toStringTag,{value:"Module"}));export{C as _};
