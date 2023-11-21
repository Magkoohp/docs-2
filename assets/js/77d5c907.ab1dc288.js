"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[3243],{1159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(1527),d=t(4089);const i={},r="Action payloads",c={id:"waas/implementation/payloads",title:"Action payloads",description:"Every Sequence WaaS action that involves a write operation makes use of a payload. Payloads are JSON objects that contain all information about the intent of the action, alongside with the signature of the user that is performing the action.",source:"@site/docs/10-waas/03-implementation/01-payloads.mdx",sourceDirName:"10-waas/03-implementation",slug:"/waas/implementation/payloads",permalink:"/waas/implementation/payloads",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/10-waas/03-implementation/01-payloads.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Transaction receipts",permalink:"/waas/waas-auth/transaction-receipts"},next:{title:"Response Payloads",permalink:"/waas/implementation/responses"}},l={},a=[{value:"Payload structure",id:"payload-structure",level:2},{value:"signature type",id:"signature-type",level:4},{value:"Open session payload",id:"open-session-payload",level:3},{value:"Sign message payload",id:"sign-message-payload",level:3},{value:"Send transaction payload",id:"send-transaction-payload",level:3},{value:"Raw transaction",id:"raw-transaction",level:4},{value:"sendERC20",id:"senderc20",level:4},{value:"sendERC721",id:"senderc721",level:4},{value:"sendERC1155",id:"senderc1155",level:4},{value:"delayedEncode",id:"delayedencode",level:4},{value:"Close session payload",id:"close-session-payload",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"action-payloads",children:"Action payloads"}),"\n",(0,s.jsx)(n.p,{children:"Every Sequence WaaS action that involves a write operation makes use of a payload. Payloads are JSON objects that contain all information about the intent of the action, alongside with the signature of the user that is performing the action."}),"\n",(0,s.jsx)(n.p,{children:"Payloads are generated on the WaaS SDK and should be sent to the WaaS API in order to complete the action."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Calls to the WaaS API are authenticated with the WaaS API key, including calls to the ",(0,s.jsx)(n.code,{children:"/sendPayload"})," endpoint."]}),(0,s.jsx)(n.p,{children:"The WaaS API key is a secret key that should be kept safe and should never be shared with anyone, nor stored in a client-side application."})]}),"\n",(0,s.jsx)(n.h2,{id:"payload-structure",children:"Payload structure"}),"\n",(0,s.jsxs)(n.p,{children:["It's important to notice that integrating WaaS ",(0,s.jsx)(n.strong,{children:"does not"})," require you to manually manipulate the contents of the payload; yet they are strictly defined, and you can use them if you need to."]}),"\n",(0,s.jsx)(n.p,{children:"The payload structure is as follows:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"version"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The version of the SDK that generated the payload"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"* packet"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Contents, defined by each payload type"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"signatures"}),(0,s.jsx)(n.td,{children:"signature[]"}),(0,s.jsx)(n.td,{children:"Payload signatures by existing sessions"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"packet.code"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Identifier of the payload type"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"packet.issued"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Timestamp of when the payload was issued, in seconds"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"packet.expires"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Timestamp of when the payload will expire, in seconds"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"* packet must be organized such that its fields (in JSON structure) appear alphabetically by name."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The wallet is optional when openning a new session"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"signature-type",children:"signature type"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"session"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Identifier of the signing session"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"* signature"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Signature of the session for the given payload"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["* signature should be an EIP-191 signature. See ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-191",children:"https://eips.ethereum.org/EIPS/eip-191"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.0.0",\n  "packet": {\n    "code": "signMessage",\n    "expires": 1600086400,\n    "issued": 1600000000,\n    "message": "Join game: #284892",\n    "network": "137",\n    "wallet": "0xBc5F07A5852fdF3DBd57A76835109220D0ADd8E8"\n  },\n  "signatures": [{\n    "session": "0xCF67BCbD9D5DFD373b03f4fc8143e1c6744B5696",\n    "signature": "0x4b0fc0c7d42566958d60f92115ab95167c837c891e2f4fa62a75bfed30d86af7291051fe5c88985269286548a42bed5b70bb16588e48998206a2e7a547f527d101"\n  }]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"open-session-payload",children:"Open session payload"}),"\n",(0,s.jsx)(n.p,{children:'This payload is generated when openning a new client-side session on the WaaS SDK. It contains the "proof" that will be used to authenticate the user, and the session data to associate to it.'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:['The "code" of the payload (',(0,s.jsx)(n.code,{children:"openSession"}),")."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"session"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The unique identifier for the session"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proof"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Contains authentication details like JWT and email"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proof.idToken"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"OAuth2 id token"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proof.email"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"User's email address"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Notice that either ",(0,s.jsx)(n.code,{children:"idToken"}),", ",(0,s.jsx)(n.code,{children:"email"})," or a valid signature ",(0,s.jsx)(n.em,{children:"MUST"})," be present. If ",(0,s.jsx)(n.code,{children:"email"})," is provided, WaaS will send an email on the user's first transaction with this session, asking them to confirm it."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"wallet"})," parameter is optional ",(0,s.jsx)(n.em,{children:"ONLY"})," for this payload. If passed it will enforce that the opened session matches the requested wallet."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.0.0",\n  "packet": {\n    "code": "openSession",\n    "expires": 1600086400,\n    "issued": 1600000000,\n    "proof": {\n      "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbXktZG9tYWluLmF1dGgwLmNvbSIsInN1YiI6ImF1dGgwfDEyMzQ1NiIsImF1ZCI6IjEyMzRhYmNkZWYiLCJleHAiOjEzMTEyODE5NzAsImlhdCI6MTMxMTI4MDk3MCwibmFtZSI6IkphbmUgRG9lIiwiZ2l2ZW5fbmFtZSI6IkphbmUiLCJmYW1pbHlfbmFtZSI6IkRvZSJ9.bql-jxlG9B_bielkqOnjTY9Di9FillFb6IMQINXoYsw",\n      "email": "user@email.com"\n    },\n    "session": "0xCF67BCbD9D5DFD373b03f4fc8143e1c6744B5696"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sign-message-payload",children:"Sign message payload"}),"\n",(0,s.jsxs)(n.p,{children:["This payload is generated when ",(0,s.jsx)(n.code,{children:"signMessage"})," is called on the SDK."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:['The "code" of the payload (',(0,s.jsx)(n.code,{children:"signMessage"}),")."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wallet"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Address of the wallet."}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"network"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Network on which to send the transactions."}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"message"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Message to be signed."}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.0.0",\n  "packet": {\n    "code": "signMessage",\n    "expires": 1600086400,\n    "issued": 1600000000,\n    "message": "Join game: #284892"\n    "network": "1",\n    "wallet": "0xBc5F07A5852fdF3DBd57A76835109220D0ADd8E8",\n  },\n  "signatures": [{\n    "session": "0xCF67BCbD9D5DFD373b03f4fc8143e1c6744B5696",\n    "signature": "0x4f9555c73908b6a5b61e0a744cb4e00fce7b20743d5799e4cb1774081bc6b2ec192c740e50f1adec84605636e09c9cdf4d2f6629f9ce64d8d0f3ae10305ef90400"\n  }]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"send-transaction-payload",children:"Send transaction payload"}),"\n",(0,s.jsxs)(n.p,{children:["This payload is generated when ",(0,s.jsx)(n.code,{children:"sendTransaction"})," is called on the SDK."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:['The "code" of the payload (',(0,s.jsx)(n.code,{children:"sendTransaction"}),")."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Unique identifier for the transaction"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wallet"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Address of the wallet."}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"network"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Network on which to send the transactions."}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"transactions"}),(0,s.jsx)(n.td,{children:"(transaction | erc20send | erc721send | erc1155send | delayedEncode)[]"}),(0,s.jsx)(n.td,{children:"Array of transaction objects."}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"raw-transaction",children:"Raw transaction"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'Transaction type, should be "transaction"'}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"to"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The recipient Ethereum address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The value to be transferred"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Additional data for the transaction"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Notice that transactions with ",(0,s.jsx)(n.code,{children:"to === wallet"})," are strictly forbidden, and will get rejected."]}),"\n",(0,s.jsx)(n.h4,{id:"senderc20",children:"sendERC20"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'Transaction type, should be "erc20send"'}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"token"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The ERC20 token contract address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"to"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The recipient Ethereum address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Amount of tokens to send"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"senderc721",children:"sendERC721"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'Transaction type, should be "erc721send"'}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"token"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The ERC721 token contract address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"to"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The recipient Ethereum address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Token ID to send"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"safe"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"Whether to use the safeTransferFrom function"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Additional data for the transaction"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Notice that ",(0,s.jsx)(n.code,{children:"data"})," can only be used if ",(0,s.jsx)(n.code,{children:"safe === true"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"senderc1155",children:"sendERC1155"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'Transaction type, should be "erc1155send"'}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"token"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The ERC1155 token contract address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"to"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The recipient Ethereum address"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vals"}),(0,s.jsx)(n.td,{children:"object[]"}),(0,s.jsx)(n.td,{children:"Array of objects with id and amount"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vals[].id"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The ID of the token"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vals[].amount"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Amount of tokens with this ID to send"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Additional data for the transaction"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"delayedencode",children:"delayedEncode"}),"\n",(0,s.jsx)(n.p,{children:"Delayed encode transactions have their payload data not encoded on the client, it instead is left to be encoded by the WaaS API. This reduces the burden on the client, and makes it easier to integrate in environments with limited libraries."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Data Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DelayedEncodeData"}),(0,s.jsx)(n.td,{children:"abi"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The ABI (Application Binary Interface) for the contract."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"func"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The function to call within the smart contract."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"args"}),(0,s.jsx)(n.td,{children:"(string | DelayedEncodeData)[] | { [key: string]: (string | DelayedEncodeData) }"}),(0,s.jsx)(n.td,{children:"The arguments to pass to the function. Can be an array or an object."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DelayedEncodeSubpacket"}),(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"'delayedEncode'"}),(0,s.jsxs)(n.td,{children:["The type of the subpacket, in this case, it's ",(0,s.jsx)(n.code,{children:"'delayedEncode'"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"to"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The address to which the transaction is sent."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The value being sent in the transaction, usually in Ether for Ethereum."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"data"}),(0,s.jsx)(n.td,{children:"DelayedEncodeData"}),(0,s.jsx)(n.td,{children:"The data payload, containing the ABI, function to call, and arguments."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Hope this helps!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.0.0",\n  "packet": {\n    "code": "sendTransaction",\n    "expires": 1600086400,\n    "identifier": "tx-id1-1600000000",\n    "issued": 1600000000,\n    "network": "137",\n    "transactions": [\n      {\n        "data": "0x3251ba32",\n        "to": "0x479F6a5b0C1728947318714963a583C56A78366A",\n        "type": "transaction",\n        "value": "39381"\n      },\n      {\n        "to": "0x7b1Bd3474D789e18e2E329E2c53F819B6E687b4A",\n        "token": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",\n        "type": "erc20send",\n        "value": "1000"\n      },\n      {\n        "data": "0x112233",\n        "id": "7",\n        "safe": true,\n        "to": "0x17fFA2d95b58228e1ECb0C6Ac25A6EfD20BA08E4",\n        "token": "0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d",\n        "type": "erc721send"\n      },\n      {\n        "data": "0x223344",\n        "to": "0x91E8aC543C5fEDf9F3Ef8b9dA1500dB84305681F",\n        "token": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n        "type": "erc1155send",\n        "vals": [{\n          "amount": "5",\n          "id": "2"\n        }, {\n          "amount": "1",\n          "id": "500"\n        }]\n      },\n\t\t\t{\n\t\t\t\t"data": {\n\t\t\t\t\t"abi": "[{\\"inputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"_orderId\\",\\"type\\":\\"bytes32\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_maxCost\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_fees\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"fillOrKillOrder\\",\\"outputs\\":[],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"otherMethods\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]",\n\t\t\t\t\t"args": [\n\t\t\t\t\t\t"0x6bd55a2877890bd58871eefe886770a7734077a74981910a75d7b1f044b5bf28",\n\t\t\t\t\t\t"1000000000000000000",\n\t\t\t\t\t\t"[\\"0x095aE61E8207C7856eA273235D6BAdb69d815F5e\\", \\"0xC9D9B33231d24dd8cC53fDD64F7ABdd156f2a7E2\\"]",\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"abi": "notExpired(uint256,string)",\n\t\t\t\t\t\t\t"args": [\n\t\t\t\t\t\t\t\t"1600000000",\n\t\t\t\t\t\t\t\t"Nov 1st, 2020"\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t"func": "notExpired"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t"func": "fillOrKillOrder"\n\t\t\t\t},\n        "to": "0x140d72763D1ce39Ad4E2e73EC6e8FC53E5b73B64",\n\t\t\t\t"type": "delayedEncode",\n        "value": "0"\n\t\t\t}\n    ],\n    "wallet": "0xBc5F07A5852fdF3DBd57A76835109220D0ADd8E8"\n  },\n  "signatures": [{\n    "session": "0xCF67BCbD9D5DFD373b03f4fc8143e1c6744B5696",\n    "signature": "0x4f9555c73908b6a5b61e0a744cb4e00fce7b20743d5799e4cb1774081bc6b2ec192c740e50f1adec84605636e09c9cdf4d2f6629f9ce64d8d0f3ae10305ef90400"\n  }]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"close-session-payload",children:"Close session payload"}),"\n",(0,s.jsxs)(n.p,{children:["This payload is generated when the client requests clossing a given session. Notice that the client ",(0,s.jsx)(n.em,{children:"MAY"})," close the current session, or some other session."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:['The "code" of the payload (',(0,s.jsx)(n.code,{children:"closeSession"}),")."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wallet"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Address of the wallet."}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"session"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Identifier for the session to be closed"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.0.0",\n  "packet": {\n    "code": "closeSession",\n    "expires": 1600086400,\n    "issued": 1600000000,\n    "session": "0xCF67BCbD9D5DFD373b03f4fc8143e1c6744B5696",\n    "wallet": "0xBc5F07A5852fdF3DBd57A76835109220D0ADd8E8"\n  },\n  "signatures": [{\n    "session": "0xCF67BCbD9D5DFD373b03f4fc8143e1c6744B5696",\n    "signature": "0x4f9555c73908b6a5b61e0a744cb4e00fce7b20743d5799e4cb1774081bc6b2ec192c740e50f1adec84605636e09c9cdf4d2f6629f9ce64d8d0f3ae10305ef90400"\n  }]\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4089:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(959);const d={},i=s.createContext(d);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);