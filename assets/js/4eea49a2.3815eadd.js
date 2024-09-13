"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[8308],{4794:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(4848),o=r(8453);const i={sidebar_position:7},t="Merging",c={id:"resources/Git Version Control/Basics/Merging",title:"Merging",description:"Merging Branches",source:"@site/docs/resources/Git Version Control/Basics/Merging.md",sourceDirName:"resources/Git Version Control/Basics",slug:"/resources/Git Version Control/Basics/Merging",permalink:"/docs/resources/Git Version Control/Basics/Merging",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/resources/Git Version Control/Basics/Merging.md",tags:[],version:"current",lastUpdatedBy:"Gurpranked",lastUpdatedAt:1726251349e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"resourcesSidebar",previous:{title:"Branch",permalink:"/docs/resources/Git Version Control/Basics/Branch"},next:{title:"Merge Conflicts",permalink:"/docs/resources/Git Version Control/Basics/Merge Conflicts"}},a={},d=[{value:"Merging Branches",id:"merging-branches",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"merging",children:"Merging"})}),"\n",(0,s.jsx)(n.h2,{id:"merging-branches",children:"Merging Branches"}),"\n",(0,s.jsxs)(n.p,{children:["Branch ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#merge",children:"merging"})," allows the changes from one branch to be added to another, essentially combining the changes.A common scenario in industry is to use ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branches"})," to work of specific issues, features, or perform code maintainence. Once the edits are complete, the ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch's"})," edits are ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#merge",children:"merged"})," back into a ",(0,s.jsx)(n.code,{children:"master"})," or main branch which contains the code used in production."]}),"\n",(0,s.jsx)(n.p,{children:"Let's demonstrate how to merge branches alongside a bit of review!"}),"\n",(0,s.jsxs)(n.p,{children:["Let's create a ",(0,s.jsx)(n.em,{children:"new"})," branch called ",(0,s.jsx)(n.code,{children:"copyright-fix"})," from the ",(0,s.jsx)(n.code,{children:"master"})," branch which we will use to add a copyright message to the footer of our html page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git checkout -b copyright-fix\nSwitched to a new branch 'copyright-fix'\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Notice how the use of the ",(0,s.jsx)(n.code,{children:"-b"})," option to create and change to the new ",(0,s.jsx)(n.code,{children:"copyright-fix"})," branch in one command."]})}),"\n",(0,s.jsxs)(n.p,{children:["Now let's edit ",(0,s.jsx)(n.code,{children:"index.html"})," to add our copyright message by ",(0,s.jsx)(n.strong,{children:"replacing"}),' our previously added "new line" paragraph block:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>Hello World!</title>\n        <link rel="stylesheet" href="styles.css">\n    </head>\n\n    <body>\n        <h1>Hello world!</h1>\n        <div>\n            <img src="git.png" alt="Git Logo" style="width:100%;max-width:960px">\n        </div>\n        <p>This is the first file in my new Git Repo.</p>\n        <p>Copyright UML Cloud Computing Club &copy;</p>    \n    </body>\n</html>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Feel free to edit the copyright message to your liking! After all, it's ",(0,s.jsx)(n.strong,{children:"your"})," work!"]})}),"\n",(0,s.jsx)(n.p,{children:"Let's check the status of the branch to make sure our edits are recorded:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git status \nOn branch copyright-fix\nChanges not staged for commit:\n    (use "git add <file>..." to update what will be committed)\n    (use "git restore <file>..." to discard changes in working directory)\n        modified:   index.html\n\nno changes added to commit (use "git add" and/or "git commit -a")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Great! Now since our modifications are unstaged, let's go ahead and stage them and then commit them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git commit -a -m "chore: Added copyright to index.html"\n[copyright-fix a618dec] chore: added copyright to footer\n 1 file changed, 3 insertions(+)\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The command above used the ",(0,s.jsx)(n.code,{children:"-a"})," option to stage and commit all changes in one-step."]})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, now let's ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#merge",children:"merge"})," our changes back into the ",(0,s.jsx)(n.code,{children:"master"})," branch! ",(0,s.jsx)("br",{}),"\nFirst we need to ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#checkout",children:(0,s.jsx)(n.code,{children:"checkout"})})," to to the ",(0,s.jsx)(n.code,{children:"master"})," branch."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git checkout master\nSwitched to branch 'master'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Second, we can now merge ",(0,s.jsx)(n.code,{children:"master"})," with ",(0,s.jsx)(n.code,{children:"copyright-fix"})," to combine the changes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git merge copyright-fix\nUpdating 0f7809c..a618dec\nFast-forward\n index.html | 3 +++\n 1 file changed, 3 insertions(+)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Since we're done working on the ",(0,s.jsx)(n.code,{children:"copyright-fix"})," branch and it's no longer needed, let's go ahead and delete it using the ",(0,s.jsx)(n.code,{children:"-d"})," option on the ",(0,s.jsx)(n.code,{children:"git branch"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git branch -d copyright-fix\nDeleted branch copyright-fix (was 5be7c4a).\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Amazing! We successfully managed to add a new piece to our project using ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branches"})," and sucessfully ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#merge",children:"merged"})," the changes back to the ",(0,s.jsx)(n.code,{children:"master"})," ",(0,s.jsx)(n.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#branch",children:"branch"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(6540);const o={},i=s.createContext(o);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);