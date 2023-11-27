"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[6306],{569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=t(1527),r=t(7279),s=(t(959),t(7288));function o(e){let{items:n}=e;return(0,i.jsx)(s.Z,{items:n,leftHeading:"Network",rightHeading:"Indexer Endpoint",renderLeftItem:e=>(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("img",{src:e.logo,className:"w-6 mr-2"}),(0,i.jsx)("span",{children:e.network})]}),renderRightItem:e=>(0,i.jsx)("span",{children:e.endpoint})})}const a={slug:"/indexer"},l="Indexer",d={id:"indexer/overview",title:"Indexer",description:"Our Indexer service is now managed through Sequence Builder. Sign up to grab your API access key.",source:"@site/docs/04-indexer/01-overview.mdx",sourceDirName:"04-indexer",slug:"/indexer",permalink:"/indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/indexer"},sidebar:"sidebar",previous:{title:"Contract Audits",permalink:"/wallet/wallet-contracts/contract-audits"},next:{title:"Installation",permalink:"/indexer/installation"}},c={},p=[{value:"Supported Networks &amp; Endpoints",id:"supported-networks--endpoints",level:2},{value:"Getting Started",id:"getting-started",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"indexer",children:"Indexer"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["INTRODUCING THE SEQUENCE BUILDER - ",(0,i.jsx)(n.a,{href:"https://sequence.build",children:"https://sequence.build"})]}),(0,i.jsxs)(n.p,{children:["Our ",(0,i.jsx)(n.strong,{children:"Indexer"})," service is now managed through ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://sequence.build",children:"Sequence Builder"})}),". Sign up to grab your API access key."]}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://sequence.build",children:["Get started with the ",(0,i.jsx)(n.strong,{children:"Sequence Builder"})," Free Plan today!"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["The Sequence Indexer is a modular web3 service that makes it easy to query blockchain token\nand NFT data from Ethereum-compatible networks. The Indexer ",(0,i.jsx)(n.strong,{children:"automatically indexes every\nERC20, ERC721 and ERC1155 token"})," from Ethereum-compatible chains."]}),"\n",(0,i.jsx)(n.p,{children:"In fact, the Sequence Wallet uses the Indexer behind the scenes so it can seamlessly\nrender all token information in any wallet. But of course, the Indexer is a modular piece\nof infrastructure, and you may use it directly from your dapp, game, or even from\na server."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Features:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Super-fast API to query all token balances, history, metadata and NFTs with multi-chain support"}),"\n",(0,i.jsx)(n.li,{children:"Real-time indexing of ERC20, ERC721 and ERC1155 transactions across EVM-compatible chains"}),"\n",(0,i.jsx)(n.li,{children:"Automatically detects all tokens on the chain, without the need for a contract registry"}),"\n",(0,i.jsx)(n.li,{children:"Resilient to node failures and chain re-organizations"}),"\n",(0,i.jsx)(n.li,{children:"Easily listen for specific events and transactions on-chain accurately with a simple API"}),"\n",(0,i.jsx)(n.li,{children:"Built-in token / nft metadata support to easily render tokens in your apps / games"}),"\n",(0,i.jsx)(n.li,{children:"High uptime and availability"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"supported-networks--endpoints",children:"Supported Networks & Endpoints"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Status:"})," ",(0,i.jsx)(n.a,{href:"https://status.sequence.info",children:"https://status.sequence.info"})]}),"\n","\n","\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mainnet networks:"})}),"\n",(0,i.jsx)(o,{items:[{network:"Ethereum",logo:"/img/networks/1.png",endpoint:"https://mainnet-indexer.sequence.app"},{network:"Polygon",logo:"/img/networks/137.png",endpoint:"https://polygon-indexer.sequence.app"},{network:"Polygon zkEVM",logo:"/img/networks/1101.png",endpoint:"https://polygon-zkevm-indexer.sequence.app"},{network:"Arbitrum One",logo:"/img/networks/42161.png",endpoint:"https://arbitrum-indexer.sequence.app"},{network:"Arbitrum Nova",logo:"/img/networks/42170.png",endpoint:"https://arbitrum-nova-indexer.sequence.app"},{network:"Optimism",logo:"/img/networks/10.png",endpoint:"https://optimism-indexer.sequence.app"},{network:"BSC",logo:"/img/networks/56.png",endpoint:"https://bsc-indexer.sequence.app"},{network:"Avalanche",logo:"/img/networks/43114.png",endpoint:"https://avalanche-indexer.sequence.app"},{network:"Gnosis",logo:"/img/networks/64.png",endpoint:"https://gnosis-indexer.sequence.app"},{network:"Base",logo:"/img/networks/8453.png",endpoint:"https://base-indexer.sequence.app"}]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Test networks:"})}),"\n",(0,i.jsx)(o,{items:[{network:"Ethereum Goerli",logo:"/img/networks/1.png",endpoint:"https://goerli-indexer.sequence.app"},{network:"Ethereum Sepolia",logo:"/img/networks/1.png",endpoint:"https://sepolia-indexer.sequence.app"},{network:"Polygon Mumbai",logo:"/img/networks/137.png",endpoint:"https://mumbai-indexer.sequence.app"},{network:"Arbitrum Goerli",logo:"/img/networks/42161.png",endpoint:"https://arbitrum-goerli-indexer.sequence.app"},{network:"BSC Testnet",logo:"/img/networks/56.png",endpoint:"https://bsc-testnet-indexer.sequence.app"},{network:"Base Goerli",logo:"/img/networks/8453.png",endpoint:"https://base-goerli-indexer.sequence.app"}]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.p,{children:"Here are a few example queries you can make to a blockchain from your dapp, game, or wallet:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/indexer/fetch-tokens",children:"Fetch all tokens & NFTS in any wallet including all metadata"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/indexer/transaction-history",children:"Fetch the transaction history for any wallet address"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/indexer/unique-tokens",children:"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/indexer/unique-tokens",children:"What is the total token supply of an ERC20 token? What is the total token supply of\nall the ERC1155 tokens in a particular contract?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/indexer/transation-history-token-contract",children:"Fetch the transaction history for any token contract address"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7288:(e,n,t)=>{t.d(n,{Z:()=>r});t(959);var i=t(1527);function r(e){let{items:n,leftHeading:t,rightHeading:r,renderLeftItem:s,renderRightItem:o}=e;return(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{align:"left",children:t}),(0,i.jsx)("th",{align:"left",children:r})]}),(0,i.jsx)("tbody",{children:n.map((function(e,n){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{align:"left",children:s(e)}),(0,i.jsx)("td",{align:"left",children:o(e)})]},n)}))})]})}},7279:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(959);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);