"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5513],{2985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(1527),s=a(7279);const i={},r="Getting Started",c={id:"waas/waas-auth/getting-started",title:"Getting Started",description:"SDK Installation",source:"@site/docs/400-waas/02-waas-auth/02-getting-started.mdx",sourceDirName:"400-waas/02-waas-auth",slug:"/waas/waas-auth/getting-started",permalink:"/waas/waas-auth/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/400-waas/02-waas-auth/02-getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Sequence - Wallet as a service",permalink:"/waas/intro/"},next:{title:"Session Management",permalink:"/waas/waas-auth/manage-sessions"}},o={},l=[{value:"SDK Installation",id:"sdk-installation",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Library Setup",id:"library-setup",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.h2,{id:"sdk-installation",children:"SDK Installation"}),"\n",(0,n.jsx)(t.p,{children:"We provide a TypeScript SDK for the Auth + WaaS system. You can install it with:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm install @0xsequence/waas\n"})}),"\n",(0,n.jsx)(t.h2,{id:"project-setup",children:"Project Setup"}),"\n",(0,n.jsx)(t.p,{children:"Sequence WaaS is currently only available as a closed beta. To start using the WaaS SDKs, you'll need to contact the Sequence team and acquire API credentials. Once this is done, you will be provided with two keys:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Project access key"}),"\n",(0,n.jsx)(t.li,{children:"WaaS configuration key"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"library-setup",children:"Library Setup"}),"\n",(0,n.jsxs)(t.p,{children:["To start using Sequence WaaS SDK, you'll need to create a new instance of the ",(0,n.jsx)(t.code,{children:"waas"})," class:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { SequenceWaaS } from '@0xsequence/waas'\n\nconst waas = new SequenceWaaS({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'mumbai'\n}, defaults.TEST)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that the library is operational, but it can't be used to interact with any wallet until you have authenticated ",(0,n.jsx)(t.strong,{children:"as a user"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7279:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var n=a(959);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);