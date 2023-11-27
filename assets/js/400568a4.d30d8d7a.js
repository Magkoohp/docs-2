"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[9522],{5177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(1527),r=n(7279);n(370),n(1804);const s={sidebar_label:"Installation"},l=void 0,o={id:"metadata/installation",title:"installation",description:"Web / node.js Installation",source:"@site/docs/05-metadata/02-installation.mdx",sourceDirName:"05-metadata",slug:"/metadata/installation",permalink:"/metadata/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/05-metadata/02-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation"},sidebar:"sidebar",previous:{title:"Metadata",permalink:"/metadata"},next:{title:"Token metadata",permalink:"/metadata/token-metadata"}},i={},u=[{value:"Web / node.js Installation",id:"web--nodejs-installation",level:3},{value:"Go Installation",id:"go-installation",level:3},{value:"Unity or Unreal Installation",id:"unity-or-unreal-installation",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"web--nodejs-installation",children:"Web / node.js Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install 0xsequence\n"})}),"\n",(0,a.jsx)(t.p,{children:"or"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install @0xsequence/metadata\n"})}),"\n",(0,a.jsxs)("strong",{style:{color:"#fff8e6",background:"#be8a05",fontSize:16},children:["This installation requires an API Access Key from ",(0,a.jsx)("a",{href:"https://sequence.build",style:{color:"#fff8e6",background:"#be8a05"},children:(0,a.jsx)("u",{children:(0,a.jsx)(t.strong,{children:"Sequence Builder"})})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["then in your app (using your ",(0,a.jsx)(t.code,{children:"API_Access_Key"}),"),"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { SequenceMetadata } from '@0xsequence/metadata'\n\nconst metadata = new SequenceMetadata('https://metadata.sequence.app', 'c3bgcU3LkFR9Bp9jFssLenPAAAAAAAAAA')\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"NOTE:"})," if you're using ",(0,a.jsx)(t.code,{children:"@0xsequence/metadata"})," from node.js, we recommend using node v18.x or newer."]}),"\n",(0,a.jsx)(t.h3,{id:"go-installation",children:"Go Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"go get -u github.com/0xsequence/go-sequence@latest\n"})}),"\n",(0,a.jsx)(t.p,{children:"then in your app,"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'import (\n\t"github.com/0xsequence/go-sequence/metadata"\n)\n\nseqMetadata := metadata.NewMetadata("c3bgcU3LkFR9Bp9jFssLenPAAAAAAAAAA")\n\ncontractInfo, err := seqMetadata.GetContractInfo(context.Background(), "polygon", "0x631998e91476DA5B870D741192fc5Cbc55F5a52E")\n'})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"unity-or-unreal-installation",children:"Unity or Unreal Installation"}),"\n",(0,a.jsxs)(t.p,{children:["The Sequence Metadata is integrated directly inside of the respective ",(0,a.jsx)(t.a,{href:"/games-sdk",children:"Sequence Web3 Unity"})," and ",(0,a.jsx)(t.a,{href:"/games-sdk",children:"Sequence Web3 Unreal"})," SDKs."]}),"\n",(0,a.jsx)("br",{})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1804:(e,t,n)=>{n.d(t,{Z:()=>l});n(959);var a=n(5924);const r={tabItem:"tabItem_l_5p"};var s=n(1527);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n,children:t})}},370:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(959),r=n(5924),s=n(74),l=n(8903),o=n(331),i=n(4053),u=n(3608),c=n(7979);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=p({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=u??b;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(9506);const g={tabList:"tabList_Pq82",tabItem:"tabItem_kpXA"};var x=n(1527);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function q(e){const t=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},7279:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var a=n(959);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);