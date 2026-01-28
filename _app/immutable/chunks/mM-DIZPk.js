import"./Bzak7iHL.js";import"./BrF70vDP.js";import{i as o,j as i,n}from"./v0O3ks5t.js";const p={title:"Setup Angular project in Visual Studio",date:"2016-10-23",description:"angular2, setup, visual studio",categories:["others"],tags:["angular"],icon:"icon-angular",readingTime:"4 min read"},{title:u,date:h,description:c,categories:d,tags:g,icon:f,readingTime:m}=p;var a=o(`<h1>Setup Angular2 Project in Visual Studio</h1> <p>The steps for setting up a project with an ASP.NET 4.x project in Visual
Studio 2015 are as follows:</p> <p><strong>Prerequisite:</strong></p> <ul><li><p>Install Node.js</p></li> <li><p>Set up Visual Studio for TypeScript</p></li></ul> <p><strong>Steps</strong></p> <ul><li><p>Create the Visual Studio ASP.NET project</p></li> <li><p>Create configuration files in project root folder package.json,
tsconfig.json, typings.json, system.config.js</p></li> <li><p>Install required packages</p></li> <li><p>Create your application (App module)</p></li> <li><p>Create a Component and add to your application</p></li> <li><p>Create a bootstrap for your application</p></li> <li><p>Create the web page that hosts the application</p></li> <li><p>Edit the TypeScript configuration file</p></li> <li><p>Build and run the app</p></li></ul> <h2>Install Node.js</h2> <p>Download and install node.js from (<a href="https://nodejs.org/en/" rel="nofollow">https://nodejs.org/en/</a>) if not
already present in your system.</p> <p><strong>Verify that you are running node version</strong> 4.4.x <strong>-</strong> 5.x.x<strong>, and
npm</strong> 3.x.x by running node -v and npm -v in a terminal/console window.
Older versions produce errors.</p> <h1>Set up Visual Studio for TypeScript</h1> <p> Open Visual Studio and install the latest set of TypeScript tools as
follows:</p> <ul><li><p>Open Tools | Extensions and Updates.</p></li> <li><p>Select Online in the tree on the left.</p></li> <li><p>Search for TypeScript using the search box in the upper right.</p></li> <li><p>Select the most current available TypeScript version.</p></li> <li><p>Download and install the package.</p></li></ul> <p>Now tell the visual studio to use external tool (such as npm) found in
your path before using its own version of the external tools.</p> <ul><li><p>Tools | Options to open the Options dialog.</p></li> <li><p>In the tree on the left, select Projects and Solutions | External
Web Tools.</p></li> <li><p>On the right, move the \\$(PATH) entry above the \\$(DevEnvDir)
entries. This tells Visual Studio to use the external tools (such
as npm) found in your path before using its own version of the
external tools.</p></li> <li><p>Click OK to close the dialog.</p></li> <li><p>Restart Visual Studio for this change to take effect.</p></li></ul> <h2>Create the Visual Studio ASP.NET project</h2> <p>The project structure should be like below:</p> <h1>Create configuration files in project root folder package.json, tsconfig.json, typings.json, system.config.js</h1> <h2>Install required packages</h2> <p>Restore the packages required for an Angular application as follows:</p> <ul><li><p>Right-click on the package.json file in Solution Explorer and
select Restore Packages.
This uses npm to install all of the packages defined
in the package.json file. It may take some time.</p></li> <li><p>If desired, open the Output window (View | Output) to watch the npm
commands execute.</p></li> <li><p>Ignore the warnings.</p></li> <li><p>When the restore is finished, a message should say: npm command
completed with exit code 0.</p></li> <li><p>Click the Refresh icon in Solution Explorer.</p></li> <li><p><strong>Do not</strong> include the node_modules folder in the project. Let it
be a hidden project folder.</p></li></ul> <h2>Create your application (App module)</h2> <p>You compose Angular applications into closely related blocks of
functionality with NgModules. Angular itself is split into separate
Angular Modules. This makes it possible for you to keep payload size
small by only importing the parts of Angular that your application
needs.</p> <p>Every Angular application has at least one module: the <em>root module</em>,
named AppModule here.</p> <p><strong>Create an app subfolder</strong> off the project root directory:</p> <h2>Create a Component and add to your application</h2> <p>Every Angular application has at least one component: the <em>root
component</em>, named AppComponent here.</p> <p>Components are the basic building blocks of Angular applications. A
component controls a portion of the screen—a <em>view</em>—through its
associated template.</p> <p><strong>Create the component file</strong> app/app.component.ts with the following
content:</p> <h2>Create a bootstrap for your application</h2> <p>Now you need to tell Angular to start up your application.</p> <p>Create the file app/main.ts with the following content:</p> <h2>Create the web page that hosts the application</h2> <p>In the <em>project root</em> folder, create an index.html file and paste the
following lines into it:</p> <h2>Build and run the app</h2> <p>To set index.html as start page, right-click index.html in Solution
Explorer and select option Set As Start Page.</p> <p>Click the Run button or press F5 to build and run the application.</p> <p>This launches the default browser and runs the QuickStart sample
application.</p> <p>Try editing any of the project files. <em>Save</em> and refresh the browser to
see the changes.</p>`,1);function y(e){var t=a();n(74),i(e,t)}export{y as default,p as metadata};
