import{q as u,j as r,G as a}from"./app-DqrfRhpM.js";import{A as x}from"./ActionButton-BDypQawQ.js";import{B as j}from"./BackButton-DjP6LSjI.js";import{u as f}from"./useForm-BxKe-dtK.js";import{C as h}from"./ContainerBox-CHOBSWIE.js";import{M as g}from"./MainLayout-lPtpGlP1.js";import{a as b}from"./route-BEAlbOk0.js";import{B as C}from"./Breadcrumbs-BrBR0nUz.js";import{A as B}from"./Anchor-Cy1yqVMs.js";import{G as s}from"./Grid-CyaOi6SW.js";import{T as n}from"./Title-THazo1f7.js";import{T as y}from"./TextInput-M8gLVz6c.js";import{F as G}from"./Fieldset-CQjSwTit.js";import{C as l}from"./Chip-212bZpQZ.js";import"./createReactComponent-Bf3XXu9m.js";import"./index-C-k28gMc.js";import"./FlashNotification-Dhx-yOKq.js";import"./use-disclosure-haR9m_kv.js";import"./IconInfoCircle-Cp0OyaUW.js";import"./IconCircleX-DzY00Cme.js";import"./useWebSockets-COLGQxjL.js";import"./index-CMBmH9qu.js";import"./useTaskGroupsStore-BVWSNT7C.js";import"./reorder-CdfroKv2.js";import"./_baseClone-Dm2q0I1Z.js";import"./useTasksStore-sUhWzd7G.js";import"./use-computed-color-scheme-CHy8HJhK.js";import"./Center-DGTxU_Us.js";import"./Text-CYeE7gwI.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-26IFPoWO.js";import"./use-resolved-styles-api-C6QyS_sL.js";import"./Popover-CrJS6_Dl.js";import"./DirectionProvider-Cj8DwV0F.js";import"./use-floating-auto-update-BRfn-mwN.js";import"./use-uncontrolled-9qUADOgH.js";import"./Avatar-8ZiBPAlR.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DXOmDI-U.js";import"./IconUsers-BtAw4hN8.js";import"./ScrollArea-Cs_gMCmF.js";import"./EmptyWithIcon-CsgDlGXA.js";import"./datetime-DPmTjIyX.js";import"./IconMessage-B7uSsIkT.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./ActionIcon-DGaUhv5Z.js";import"./get-sorted-breakpoints-CNZc6oJ9.js";import"./get-base-value-JqT_q0U7.js";import"./InputBase-BmxmUY5v.js";import"./Input-W4_Gi7np.js";import"./create-optional-context-BmY0azF0.js";import"./CheckIcon-DegAeyIK.js";const k=()=>{const{item:e,allPermissionsGrouped:p}=u().props,[t,d,m]=f("post",route("settings.roles.update",e.id),{_method:"put",name:e.name,permissions:e.permissions}),c=i=>{t.data.permissions.includes(i)?m("permissions",t.data.permissions.filter(o=>o!==i)):m("permissions",[...t.data.permissions,i])};return r.jsxs(r.Fragment,{children:[r.jsxs(C,{fz:14,mb:30,children:[r.jsx(B,{href:"#",onClick:()=>b("settings.roles.index"),fz:14,children:"Roles"}),r.jsx("div",{children:"Edit"})]}),r.jsxs(s,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(s.Col,{span:"auto",children:r.jsx(n,{order:1,children:"Edit role"})}),r.jsx(s.Col,{span:"content"})]}),r.jsx(h,{maw:700,children:r.jsxs("form",{onSubmit:d,children:[t.data.name!=="client"&&r.jsx(y,{label:"Name",placeholder:"Role name",required:!0,value:t.data.name,onChange:i=>m("name",i.target.value),error:t.errors.name}),r.jsx(n,{order:3,mt:t.data.name!=="client"?"xl":"",children:"Permissions"}),Object.keys(p).map(i=>r.jsx(G,{legend:i,tt:"capitalize",mt:"sm",children:r.jsx(l.Group,{multiple:!0,children:r.jsx(a,{justify:"start",gap:"sm",children:p[i].map(o=>r.jsx(l,{radius:"sm",checked:t.data.permissions.includes(o),onClick:()=>c(o),children:o},o))})})},i)),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(j,{route:"settings.roles.index"}),r.jsx(x,{loading:t.processing,children:"Update"})]})]})})]})};k.layout=e=>r.jsx(g,{title:"Edit role",children:e});export{k as default};
