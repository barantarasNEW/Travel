"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[218],{3727:function(e,t,n){n.d(t,{r:function(){return s}});const s=e=>(300,new Promise((e=>setTimeout(e,300)))).then((()=>fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,region,flags,independent,currencies,languages,maps`))).then((e=>e.json())).then((e=>({...e[0],name:e[0].name.common,flag:e[0].flags.png,currencies:Object.values(e[0].currencies),languages:Object.values(e[0].languages),map:e[0].maps.googleMaps})))},1395:function(e,t,n){var s=n(3935),a=n(5893);t.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,s.createPortal)((0,a.jsxs)("div",{className:"lds-roller",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),document.getElementById("portal-root"))})},1985:function(e,t,n){n.r(t);var s=n(7294),a=n(9250),i=n(3727),c=n(1395),l=n(9655),r=n(5893);t.default=()=>{const[e,t]=(0,s.useState)(null),[n,o]=(0,s.useState)(!1),{id:u}=(0,a.UO)(),d=[{title:"Capital:",text:e?.capital},{title:"Region:",text:e?.region},{title:"Population:",text:e?.population},{title:"Independent:",text:e?.independent?"Yes":"No"},{title:"Currencies:",text:e?.currencies.map((e=>e.name)).join(" , ")},{title:"Languages:",text:e?.languages.join(" , ")}];return(0,s.useEffect)((()=>{u&&(o(!0),(0,i.r)(u).then((e=>t(e))).catch((e=>console.log(e))).finally((()=>o(!1))))}),[u]),n?(0,r.jsx)(c.Z,{}):e?(0,r.jsx)("section",{className:"country",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"country__wrapper",children:[(0,r.jsx)("img",{className:"country__img",src:e.flag,alt:"flag"}),(0,r.jsx)("h2",{className:"country__name",children:e.name}),(0,r.jsx)("ul",{className:"country__descriptions",children:d.map((e=>{let{title:t,text:n}=e;return(0,r.jsxs)("li",{className:"country__description",children:[(0,r.jsx)("p",{className:"country__description__title",children:t}),(0,r.jsx)("p",{className:"country__description__text",children:n})]},t)}))}),(0,r.jsx)(l.rU,{className:"btn",to:e.map,target:"_blank",children:"Go to the map"})]})})}):(0,r.jsx)("p",{children:"Not found"})}}}]);