"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[6901],{6785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(1527),c=n(7279);const r={slug:"/builder/deploy-an-item-collection-contract"},a="How to deploy an item collection contract",i={id:"builder/deploy-an-item-collection-contract",title:"How to deploy an item collection contract",description:"This guide walks through how to setup and deploy a contract on Builder. If you haven't yet done so, make sure you have signed up for Builder and created a Project.",source:"@site/docs/100-builder/200-deploy-an-item-collection-contract.mdx",sourceDirName:"100-builder",slug:"/builder/deploy-an-item-collection-contract",permalink:"/builder/deploy-an-item-collection-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/100-builder/200-deploy-an-item-collection-contract.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{slug:"/builder/deploy-an-item-collection-contract"},sidebar:"sidebar",previous:{title:"Getting Started: Signup and create a project in Builder",permalink:"/builder/signup-and-create-a-project"},next:{title:"How to sponsor gas for a contract in Builder",permalink:"/builder/sponsor-contract-gas-tank"}},l={},s=[{value:"Step 1: Go to the Contracts section",id:"step-1-go-to-the-contracts-section",level:2},{value:"Add a new contract",id:"add-a-new-contract",level:4},{value:"Step 2: Choose a contract for your item collection",id:"step-2-choose-a-contract-for-your-item-collection",level:2},{value:"Select a contract",id:"select-a-contract",level:4},{value:"Bring your own smart contract",id:"bring-your-own-smart-contract",level:4},{value:"Step 3: Deploy your smart contract",id:"step-3-deploy-your-smart-contract",level:2},{value:"Select/confirm the network",id:"selectconfirm-the-network",level:4},{value:"Provide a contract name and symbol",id:"provide-a-contract-name-and-symbol",level:4},{value:"Determine a contract owner",id:"determine-a-contract-owner",level:4},{value:"Step 4: Sign the transaction",id:"step-4-sign-the-transaction",level:2},{value:"Sequence wallet",id:"sequence-wallet",level:4},{value:"Signature modal",id:"signature-modal",level:4},{value:"Step 5: Collectible contract deployed",id:"step-5-collectible-contract-deployed",level:2},{value:"Linked contract in dashboard",id:"linked-contract-in-dashboard",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-deploy-an-item-collection-contract",children:"How to deploy an item collection contract"}),"\n",(0,o.jsxs)(t.p,{children:["This guide walks through how to setup and deploy a contract on Builder. If you haven't yet done so, make sure you have ",(0,o.jsx)(t.a,{href:"https://docs.sequence.xyz/signup-and-create-a-project",children:"signed up for Builder and created a Project"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"step-1-go-to-the-contracts-section",children:"Step 1: Go to the Contracts section"}),"\n",(0,o.jsxs)(t.p,{children:["In the project dashboard, find the ",(0,o.jsx)(t.code,{children:"Contracts"})," tab on the left side."]}),"\n",(0,o.jsx)(t.h4,{id:"add-a-new-contract",children:"Add a new contract"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have that open, click the ",(0,o.jsx)(t.code,{children:"+ New contract"})," button"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder new contract",src:n(3361).Z+"",width:"941",height:"400"})}),"\n",(0,o.jsx)(t.h2,{id:"step-2-choose-a-contract-for-your-item-collection",children:"Step 2: Choose a contract for your item collection"}),"\n",(0,o.jsx)(t.h4,{id:"select-a-contract",children:"Select a contract"}),"\n",(0,o.jsx)(t.p,{children:"You have a couple of different options to load your item collection with."}),"\n",(0,o.jsx)(t.p,{children:"We provide a few standard contracts to choose from, including an ERC1155, an ERC721, and an ERC20."}),"\n",(0,o.jsxs)(t.p,{children:["If you plan to use one of our standard contracts, skip ahead to ",(0,o.jsx)(t.strong,{children:"Step 3: Deploy your smart contract"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder select contract",src:n(5227).Z+"",width:"941",height:"630"})}),"\n",(0,o.jsx)(t.h4,{id:"bring-your-own-smart-contract",children:"Bring your own smart contract"}),"\n",(0,o.jsxs)(t.p,{children:["You can also click the ",(0,o.jsx)(t.code,{children:"+ View more contracts"})," button, which will open up a modal showing more standard contracts."]}),"\n",(0,o.jsxs)(t.p,{children:["At the bottom of this modal, click the ",(0,o.jsx)(t.code,{children:"+ Upload Source"})," button to deploy your own contract."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder more contracts",src:n(5764).Z+"",width:"2420",height:"1774"})}),"\n",(0,o.jsx)(t.h2,{id:"step-3-deploy-your-smart-contract",children:"Step 3: Deploy your smart contract"}),"\n",(0,o.jsx)(t.h4,{id:"selectconfirm-the-network",children:"Select/confirm the network"}),"\n",(0,o.jsx)(t.p,{children:"You may have already selected the network you want to deploy this contract too, so confirm that this is the right network."}),"\n",(0,o.jsx)(t.h4,{id:"provide-a-contract-name-and-symbol",children:"Provide a contract name and symbol"}),"\n",(0,o.jsx)(t.p,{children:"Give your smart contract a name. If your contract is an ERC20 or ERC721, then you will need to give it a token symbol as well."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Providing a token symbol at deployment is not necessary for ERC1155 as there will be several different tokens associated with this contract - token symbols are determined when a new token is created at minting."})}),"\n",(0,o.jsx)(t.h4,{id:"determine-a-contract-owner",children:"Determine a contract owner"}),"\n",(0,o.jsx)(t.p,{children:"Provide a wallet address for the contract owner. (This will likely be yourself)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder contract details",src:n(185).Z+"",width:"943",height:"505"})}),"\n",(0,o.jsx)(t.h2,{id:"step-4-sign-the-transaction",children:"Step 4: Sign the transaction"}),"\n",(0,o.jsx)(t.p,{children:"In order to complete the deployment of a smart contract, the contract deploy (that's you) will need to sign a transaction on the network that its being deployed to."}),"\n",(0,o.jsx)(t.p,{children:"You will use your Sequence wallet to sign the transaction."}),"\n",(0,o.jsx)(t.h4,{id:"sequence-wallet",children:"Sequence wallet"}),"\n",(0,o.jsx)(t.p,{children:"A Sequence wallet should have been created when you signed up for builder. You can confirm this by looking in the top right corner of then window anytime when you are in builder."}),"\n",(0,o.jsx)(t.p,{children:"If you do not see this, then you need to signup and create a wallet."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder see wallet",src:n(9858).Z+"",width:"942",height:"363"})}),"\n",(0,o.jsx)(t.h4,{id:"signature-modal",children:"Signature modal"}),"\n",(0,o.jsxs)(t.p,{children:["After you click the ",(0,o.jsx)(t.code,{children:"Deploy Contract"})," button, a modal will pop up - which is your sequence wallet. In your wallet you will see a request to sign a transaction. It will include transaction details along with network fee estimations."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"It costs a fee (called gas) to deploy on a network. Make sure you have some of the native network tokens in your wallet ahead of time to cover it."})}),"\n",(0,o.jsxs)(t.p,{children:["Once you've read the transaction details, execute the transaction by hitting ",(0,o.jsx)(t.code,{children:"confirm"})," on the signature."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder sign transaction",src:n(961).Z+"",width:"940",height:"926"})}),"\n",(0,o.jsx)(t.h2,{id:"step-5-collectible-contract-deployed",children:"Step 5: Collectible contract deployed"}),"\n",(0,o.jsx)(t.p,{children:"After you sign the transaction, the network will take a few seconds (maybe minutes depending on the network and other factors) to confirm your transaction."}),"\n",(0,o.jsx)(t.p,{children:"When the transaction is complete, the contract will be deployed."}),"\n",(0,o.jsx)(t.h4,{id:"linked-contract-in-dashboard",children:"Linked contract in dashboard"}),"\n",(0,o.jsxs)(t.p,{children:["Now that your smart contract is deployed, return to the ",(0,o.jsx)(t.code,{children:"Contracts"})," section of Builder. There you should see your newly deployed contract. You should also be able to see what kind of contract it is, along with any roles you have - like ",(0,o.jsx)(t.code,{children:"owner"})," for example."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence builder confirm deployment",src:n(1253).Z+"",width:"2422",height:"992"})})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1253:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_confirm_deployment_for_contract_deploy-a55502475b40f1ba1f028200a3b62093.png"},3361:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_create_new_contract_for_contract_deploy-61102db7bd3469e23eb01512cec1b1cd.png"},5764:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_more_contracts_for_contract_deploy-1ee61b3c7997f3815b3716bc7d2a7586.png"},185:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_provide_contract_details_for_contract_deploy-c7aaa62cda270b8bddd22351dba79fbe.png"},9858:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_see_wallet_for_contract_deploy-f5bc000a225dbebf6d0c9860e1ccb915.png"},5227:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_select_contract_for_contract_deploy-807e2eb786936ffb5d6c872c1774cefb.png"},961:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/builder_sign_transaction_for_contract_deploy-752ea3b0bfe8a521a0cd73986ca71b2c.png"},7279:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(959);const c={},r=o.createContext(c);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);