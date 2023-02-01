"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7918],{2183:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(7462),n=a(7294),l=a(6010),c=a(3438),s=a(8596),o=a(9960),i=a(4996),m=a(5999);function d(e){let{children:t,href:a,isLast:r}=e;const c=(0,l.Z)("font-inter font-normal text-sm",r?"dark:text-white-80 text-black-80":"dark:text-white-50 text-black-50");return r?n.createElement("span",{className:c,itemProp:"name"},t):a?n.createElement(o.Z,{className:(0,l.Z)(c,"dark:hover:text-white-80 hover:text-black-80","hover:no-underline transition-none"),href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:c},t)}function u(e){let{children:t,active:a,index:l,addMicrodata:c}=e;return n.createElement("li",(0,r.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:a?"":"after:content-['>'] after:w-10 after:h-10 after:text-black-50 dark:after:text-white-50 after:mx-2"}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function h(){const e=(0,i.Z)("/");return n.createElement("li",{className:"after:content-['>'] after:w-10 after:h-10 after:text-black-50 dark:after:text-white-50 after:mx-2"},n.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"hover:no-underline",href:e},n.createElement("span",{className:"font-inter font-normal dark:text-white-50 text-black-50 dark:hover:text-white-80 hover:text-black-80"},"\u2302")))}function b(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?n.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"list-none flex flex-wrap p-0",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(h,null),e.map(((t,a)=>{const r=a===e.length-1;return n.createElement(u,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(d,{href:t.href,isLast:r},t.label))})))):null}},4567:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(7294),n=a(6010),l=a(7524),c=a(5130),s=a(2894),o=a(3120),i=a(4364),m=a(7887),d=a(6781),u=a(8832),h=a(1805),b=a(2183);function p(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=(0,c.k)(),a=(0,l.i)(),n=e.hide_table_of_contents,s=!n&&t.length>0;return{hidden:n,mobile:s?r.createElement(d.Z,null):void 0,desktop:!s||"desktop"!==a&&"ssr"!==a?void 0:r.createElement(u.Z,null)}}();return r.createElement("div",{className:"row"},r.createElement("div",{className:(0,n.Z)("col")},r.createElement(o.Z,null),r.createElement("div",{className:"w-full max-w-[580px] mx-auto"},r.createElement("article",null,r.createElement(b.Z,null),r.createElement(i.Z,null),a.mobile,r.createElement(h.Z,null,t),r.createElement(m.Z,null)),r.createElement(s.Z,null))),r.createElement("div",{className:"col col--3"},a.desktop))}},6609:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7462),n=a(7294),l=a(5999),c=a(6010),s=a(9960);function o(e){const{permalink:t,title:a,subLabel:r,isNext:l}=e;return n.createElement(s.Z,{className:(0,c.Z)("hover:no-underline group rounded-lg border border-solid p-4","dark:border-[rgba(255,255,255,0.5)] border-[rgba(0,0,0,0.5)]"),to:t},n.createElement("div",{className:(0,c.Z)("flex flex-col group-hover:opacity-50",l?"items-end":"items-start")},r&&n.createElement("div",{className:"dark:text-white-50 text-black-50 text-sm font-normal"},r),n.createElement("div",{className:"dark:text-white-80 text-black-80 text-sm font-bold mb-1"},a)))}function i(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"grid grid-cols-2 justify-items-stretch gap-x-2","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t?n.createElement(o,(0,r.Z)({},t,{subLabel:n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})):n.createElement("div",null),a&&n.createElement(o,(0,r.Z)({},a,{subLabel:n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}}}]);