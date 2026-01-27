const n=`---
title:  "Debugging in VS Code"
date:   "2017-11-19"
desc: "Debugging in VS Code"
keywords: "VS Code, debugging"
categories: ["others"]
tags: ["VS Code", "Debugging"]
readingTime: "1 min read"
---

Open the Extensions view (Ctrl+Shift+X). When the extension list
appears, type \\'chrome\\' to filter the list and install the Debugger for
Chrome extension.

Add a configuration file "launch.json" in .vs folder. You can use VS
Code menu bar -\\> Debug -\\> Add Configuration.

launch.json should look like below at the minimmum.

\`\`\`json
{
    "version": "0.2.0",
    "configurations": [
        {
            "command": "npm start",
            "name": "Run npm start",
            "request": "launch",
            "type": "node-terminal"
        },
        {
            "name": "Attach by Process ID",
            "processId": "\${command:PickProcess}",
            "request": "attach",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        }
    ]
}
\`\`\`

Type and request should be as given. You can choose any name and webRoot should contain physical path
`;export{n as default};
