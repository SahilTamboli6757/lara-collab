import{b as s,j as t,G as l,y as p,a as n}from"./app-DqrfRhpM.js";import{C as u}from"./ContainerBox-CHOBSWIE.js";import{G as c}from"./GuestLayout-D5MVutqa.js";import{u as d}from"./index-C-k28gMc.js";import f from"./LoginNotification-BM5CzT6t.js";import{T as x}from"./Title-THazo1f7.js";import{T as h}from"./Text-CYeE7gwI.js";import{D as b}from"./Divider-BAaangJA.js";import{T as g}from"./TextInput-M8gLVz6c.js";import{P as j}from"./PasswordInput-CP6nNOky.js";import{C as w}from"./Checkbox-DS6HM0Bj.js";import{A as y}from"./Anchor-Cy1yqVMs.js";import"./FlashNotification-Dhx-yOKq.js";import"./use-disclosure-haR9m_kv.js";import"./IconInfoCircle-Cp0OyaUW.js";import"./createReactComponent-Bf3XXu9m.js";import"./IconCircleX-DzY00Cme.js";import"./Container-h5qD1MOw.js";import"./InputBase-BmxmUY5v.js";import"./Input-W4_Gi7np.js";import"./create-optional-context-BmY0azF0.js";import"./use-resolved-styles-api-C6QyS_sL.js";import"./ActionIcon-DGaUhv5Z.js";import"./use-uncontrolled-9qUADOgH.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./CheckIcon-DegAeyIK.js";const v="_title_p6opv_1",C={title:v},T=({notify:o})=>{var i;s.useState(!1);const a=s.useRef(null),e=d("post",route("auth.login.attempt"),{email:((i=route().params)==null?void 0:i.email)||"",password:"",remember:!1});s.useEffect(()=>{var r;return((r=route().params)==null?void 0:r.email)&&a.current.focus()},[]);const m=r=>{r.preventDefault(),e.submit({preserveScroll:!0})};return t.jsxs(t.Fragment,{children:[t.jsx(x,{ta:"center",className:C.title,children:"Welcome back!"}),t.jsx(h,{c:"dimmed",size:"sm",ta:"center",mt:5,children:"You may login to your account below"}),t.jsx(f,{notify:o}),t.jsx("form",{onSubmit:m,children:t.jsxs(u,{shadow:"md",p:30,mt:30,radius:"md",children:[t.jsx(b,{label:"Or continue with email",labelPosition:"center",my:"lg"}),t.jsx(g,{label:"Email",placeholder:"Your email",required:!0,value:e.data.email,onChange:r=>e.setData("email",r.target.value),onBlur:()=>e.validate("email"),error:e.errors.email}),t.jsx(j,{ref:a,label:"Password",placeholder:"Your password",required:!0,mt:"md",value:e.data.password,onChange:r=>e.setData("password",r.target.value)}),t.jsxs(l,{justify:"space-between",mt:"lg",children:[t.jsx(w,{label:"Remember me"}),t.jsx(y,{type:"button",size:"sm",onClick:()=>p.get(route("auth.forgotPassword.form")),children:"Forgot password?"})]}),t.jsx(n,{type:"submit",fullWidth:!0,mt:"xl",disabled:e.processing,children:"Sign in"})]})})]})};T.layout=o=>t.jsx(c,{title:"Login",children:o});export{T as default};
