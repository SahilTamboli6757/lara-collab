import{j as r,G as a}from"./app-4a17Pub4.js";import{u as n}from"./useRoles-BRqjONkt.js";import{B as l}from"./Badge-BrVN3kpH.js";import{T as m}from"./TableRowActions-F6jyE7-9.js";import{m as c}from"./currency-Ch0jvoq9.js";import{g as d}from"./user-IyQLa11_.js";import{T as s}from"./Table-i9i1K4un.js";import{A as u}from"./Avatar-VVVl2UCZ.js";import{T as i}from"./Text-BR9LnClf.js";import{F as p}from"./Flex-C4-MgrqI.js";import"./route-CLXYwALx.js";import"./_baseClone-DIFX3Exu.js";import"./index-B6r_j4C5.js";import"./ConfirmModal-gDH_QAL7.js";import"./ActionIcon-ni5mTX2i.js";import"./IconPencil-BwWUWQK_.js";import"./createReactComponent-BwHUzXp6.js";import"./Menu-DQv7jdV4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./use-uncontrolled-BGuEEBtS.js";import"./IconDots-BdfUKURJ.js";import"./IconArchive-Dz1DC0sm.js";import"./ScrollArea-BBLLgi1y.js";function h({role:e}){const{getColor:o}=n();return r.jsx(l,{color:o(e),variant:"light",children:e})}function J({item:e}){return r.jsxs(s.Tr,{children:[r.jsx(s.Td,{children:r.jsxs(a,{gap:"sm",children:[r.jsx(u,{src:e.avatar,size:40,radius:40,color:"blue",alt:e.name,children:d(e.name)}),r.jsxs("div",{children:[r.jsx(i,{fz:"sm",fw:500,children:e.name}),r.jsx(i,{fz:"xs",c:"dimmed",children:e.job_title})]})]})}),r.jsx(s.Td,{maw:200,children:r.jsx(p,{gap:"sm",align:"center",direction:"row",wrap:"wrap",children:e.roles.map((o,t)=>r.jsx(h,{role:o},`role-${t}-${e.id}`))})}),r.jsxs(s.Td,{children:[r.jsx(i,{fz:"sm",children:e.email}),r.jsx(i,{fz:"xs",c:"dimmed",children:"Email"})]}),can("view user rate")&&r.jsxs(s.Td,{children:[r.jsxs(i,{fz:"sm",children:[c(e.rate)," / hr"]}),r.jsx(i,{fz:"xs",c:"dimmed",children:"Rate"})]}),(can("edit user")||can("archive user")||can("restore user"))&&r.jsx(s.Td,{children:r.jsx(m,{item:e,editRoute:"users.edit",editPermission:"edit user",archivePermission:"archive user",restorePermission:"restore user",archive:{route:"users.destroy",title:"Archive user",content:`Are you sure you want to archive this user? This action will prevent
                the user from logging in, while all other aspects related to the
                user's actions will remain unaffected.`,confirmLabel:"Archive"},restore:{route:"users.restore",title:"Restore user",content:"Are you sure you want to restore this user? This action will allow the user to login.",confirmLabel:"Restore"}})})]},e.id)}export{J as default};
