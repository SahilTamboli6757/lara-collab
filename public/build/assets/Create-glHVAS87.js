import{q as c,j as r,G as p}from"./app-DqrfRhpM.js";import{A as u}from"./ActionButton-BDypQawQ.js";import{B as x}from"./BackButton-DjP6LSjI.js";import{u as j}from"./useForm-BxKe-dtK.js";import{C as f}from"./ContainerBox-CHOBSWIE.js";import{M as h}from"./MainLayout-lPtpGlP1.js";import{a as C}from"./route-BEAlbOk0.js";import{B as g}from"./Breadcrumbs-BrBR0nUz.js";import{A as b}from"./Anchor-Cy1yqVMs.js";import{G as m}from"./Grid-CyaOi6SW.js";import{T as a}from"./Title-THazo1f7.js";import{T as B}from"./TextInput-M8gLVz6c.js";import{F as y}from"./Fieldset-CQjSwTit.js";import{C as n}from"./Chip-212bZpQZ.js";import"./createReactComponent-Bf3XXu9m.js";import"./index-C-k28gMc.js";import"./FlashNotification-Dhx-yOKq.js";import"./use-disclosure-haR9m_kv.js";import"./IconInfoCircle-Cp0OyaUW.js";import"./IconCircleX-DzY00Cme.js";import"./useWebSockets-COLGQxjL.js";import"./index-CMBmH9qu.js";import"./useTaskGroupsStore-BVWSNT7C.js";import"./reorder-CdfroKv2.js";import"./_baseClone-Dm2q0I1Z.js";import"./useTasksStore-sUhWzd7G.js";import"./use-computed-color-scheme-CHy8HJhK.js";import"./Center-DGTxU_Us.js";import"./Text-CYeE7gwI.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-26IFPoWO.js";import"./use-resolved-styles-api-C6QyS_sL.js";import"./Popover-CrJS6_Dl.js";import"./DirectionProvider-Cj8DwV0F.js";import"./use-floating-auto-update-BRfn-mwN.js";import"./use-uncontrolled-9qUADOgH.js";import"./Avatar-8ZiBPAlR.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DXOmDI-U.js";import"./IconUsers-BtAw4hN8.js";import"./ScrollArea-Cs_gMCmF.js";import"./EmptyWithIcon-CsgDlGXA.js";import"./datetime-DPmTjIyX.js";import"./IconMessage-B7uSsIkT.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./ActionIcon-DGaUhv5Z.js";import"./get-sorted-breakpoints-CNZc6oJ9.js";import"./get-base-value-JqT_q0U7.js";import"./InputBase-BmxmUY5v.js";import"./Input-W4_Gi7np.js";import"./create-optional-context-BmY0azF0.js";import"./CheckIcon-DegAeyIK.js";const G=()=>{const{allPermissionsGrouped:i}=c().props,[o,l,s]=j("post",route("settings.roles.store"),{name:"",permissions:[]}),d=t=>{o.data.permissions.includes(t)?s("permissions",o.data.permissions.filter(e=>e!==t)):s("permissions",[...o.data.permissions,t])};return r.jsxs(r.Fragment,{children:[r.jsxs(g,{fz:14,mb:30,children:[r.jsx(b,{href:"#",onClick:()=>C("settings.roles.index"),fz:14,children:"Roles"}),r.jsx("div",{children:"Create"})]}),r.jsxs(m,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(m.Col,{span:"auto",children:r.jsx(a,{order:1,children:"Create role"})}),r.jsx(m.Col,{span:"content"})]}),r.jsx(f,{maw:700,children:r.jsxs("form",{onSubmit:l,children:[r.jsx(B,{label:"Name",placeholder:"Role name",required:!0,value:o.data.name,onChange:t=>s("name",t.target.value),error:o.errors.name}),r.jsx(a,{order:3,mt:"xl",children:"Permissions"}),Object.keys(i).map(t=>r.jsx(y,{legend:t,tt:"capitalize",mt:"sm",children:r.jsx(n.Group,{multiple:!0,children:r.jsx(p,{justify:"start",gap:"sm",children:i[t].map(e=>r.jsx(n,{radius:"sm",checked:o.data.permissions.includes(e),onClick:()=>d(e),children:e},e))})})},t)),r.jsxs(p,{justify:"space-between",mt:"xl",children:[r.jsx(x,{route:"settings.roles.index"}),r.jsx(u,{loading:o.processing,children:"Create"})]})]})})]})};G.layout=i=>r.jsx(h,{title:"Create role",children:i});export{G as default};
