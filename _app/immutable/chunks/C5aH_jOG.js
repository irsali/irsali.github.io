import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as a,j as n,n as i}from"./v0O3ks5t.js";const e={title:"Caliburn Micro",date:"2017-09-07",description:"Caliburn Micro",categories:["others"],tags:["Caliburn Micro","Caliburn"],readingTime:"2 min read"},{title:p,date:m,description:u,categories:h,tags:g,readingTime:f}=e;var r=a(`<h1>Features</h1> <ol><li><p>Bind view model properties to your view based on convention</p></li> <li><p>Apply methods between your view and view model automatically with
parameters and guard methods</p></li> <li><p>Decouple view models with built in composition patterns and event
aggregation</p></li></ol> <h1>Getting Started</h1> <p>Install-Package Caliburn.Micro -Version 3.1.0</p> <p>Or</p> <p>dotnet add package Caliburn.Micro --version 3.1.0</p> <h1>Superb Action conventions</h1> <p>\\$source -&gt; for self xaml element.</p> <p>cal:Message.Attach="" -&gt; for binding method, or property.</p> <p>These conventions are based on x:Name. So, if you have a method called
“Save” on your ViewModel and a Button named “Save” in your UI, we will
automatically create an EventTrigger for the “Click” event and assign an
ActionMessage for the “Save” method. Furthermore, we will inspect the
method’s signature and properly construct the ActionMessage parameters.
This mechanism can be turned off or customized. You can even change or
add conventions for different controls. For example, you could make the
convention event for Button “MouseMove” instead of “Click” if you really
wanted.</p> <p>Note: ViewModel method automatically binds to view control with same
name. For calling a method from different control, you may use
cal:Message.Attach="" -&gt; for binding method, or property.</p> <p>Can prefix on MethodName -&gt; will disable/enable control that calls
Method.</p>`,1);function l(o){var t=r();i(22),n(o,t)}const v=Object.freeze(Object.defineProperty({__proto__:null,default:l,metadata:e},Symbol.toStringTag,{value:"Module"}));export{v as _};
