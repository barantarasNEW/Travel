"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[771],{1395:function(e,s,a){var t=a(3935),n=a(5893);s.Z=()=>(0,n.jsx)(n.Fragment,{children:(0,t.createPortal)((0,n.jsxs)("div",{className:"lds-roller",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}),document.getElementById("portal-root"))})},2177:function(e,s,a){a.d(s,{db:function(){return l},l:function(){return r}});var t=a(3977),n=a(294);const r=(0,t.ZF)({apiKey:"AIzaSyDn-uSjoBt9Xb3MsYRb_nY2o0PuEXqSRcc",authDomain:"travel-auth-7b217.firebaseapp.com",projectId:"travel-auth-7b217",storageBucket:"travel-auth-7b217.appspot.com",messagingSenderId:"304864174974",appId:"1:304864174974:web:d2d7b0bbc5a99349bc492f"}),l=(0,n.ad)(r)},4873:function(e,s,a){a.d(s,{C:function(){return r},T:function(){return n}});var t=a(5998);const n=t.I0,r=t.v9},9771:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var t=a(7294),n=a(9250),r=a(9005),l=a(4873),i=a(1088),c=a(294),u=a(2177),d=a(1395),o=a(5893),m=()=>{const e=(0,l.C)((e=>e.user.user)),s=(0,l.T)(),[a,m]=(0,t.useState)(e.firstName),[p,b]=(0,t.useState)(e.lastName),[v,x]=(0,t.useState)(e.email),[j,h]=(0,t.useState)(e.password),[N,g]=(0,t.useState)(!1),[_,f]=(0,t.useState)(!1),w=(0,r.v0)(),C=(0,n.s0)(),S=()=>{f(!0),(0,r.w7)(w).then((()=>{s((0,i.a)({firstName:"",lastName:"",password:"",email:""})),C("/signIn")})).catch((e=>console.log(e))).finally((()=>f(!1)))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("section",{className:"user",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"user__wrapper",children:[(0,o.jsx)("button",{className:"user__sign-out",onClick:S,children:(0,o.jsx)("img",{className:"user__icon",src:"./img/svg/exit.svg",alt:"icon"})}),(0,o.jsxs)("div",{className:"user__input-wrapper",children:[(0,o.jsxs)("label",{className:"user__label",children:["First name",(0,o.jsx)("input",{className:"input",type:"text",value:a,onChange:e=>m(e.target.value),disabled:!N})]}),(0,o.jsxs)("label",{className:"user__label",children:["Last name",(0,o.jsx)("input",{className:"input",type:"text",value:p,onChange:e=>b(e.target.value),disabled:!N})]}),(0,o.jsxs)("label",{className:"user__label",children:["Email",(0,o.jsx)("input",{className:"input",type:"email",value:v,onChange:e=>x(e.target.value),disabled:!N})]}),(0,o.jsxs)("label",{className:"user__label",children:["Password",(0,o.jsx)("input",{className:"input",type:"password",value:j,onChange:e=>h(e.target.value),disabled:!N})]})]}),(0,o.jsxs)("div",{className:"user__btns",children:[N&&(0,o.jsx)("button",{className:"btn",onClick:async()=>{if(f(!0),w.currentUser){let s;v!==e.email&&(s=!0),j!==e.password&&(s=!0),e.firstName===a&&e.lastName===p&&j===e.password||await(async(e,s)=>{const a=(0,c.JU)(u.db,"users",e);await(0,c.r7)(a,{...s})})(w.currentUser.uid,{firstName:a,lastName:p,password:j}),s&&(await(0,r.s)(w.currentUser,v),await(0,r.gQ)(w.currentUser,j),S())}g(!1),f(!1)},children:"Save"}),(0,o.jsx)("button",{className:"btn",onClick:()=>g(!0),disabled:N,children:"Change"})]})]})})}),_&&(0,o.jsx)(d.Z,{})]})}}}]);