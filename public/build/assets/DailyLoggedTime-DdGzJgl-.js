import{q as y,x as d,j as e,G as j,a as T,B as k}from"./app-4a17Pub4.js";import{E as D}from"./EmptyWithIcon-C7lyvkIW.js";import{u as C,l as v}from"./useForm-D-7B7N6w.js";import{C as g}from"./ContainerBox-B9IAjQXZ.js";import{M as R}from"./MainLayout-D5A37fpr.js";import{e as S}from"./route-CLXYwALx.js";import{B as w}from"./Breadcrumbs-DnTwgQ8t.js";import{T as M}from"./Title-BSH3ecI3.js";import{M as x}from"./MultiSelect-Duq5FJlZ.js";import{D as B}from"./pick-calendar-levels-props-4bDM8Nej.js";import{D as O}from"./DatePickerInput-D72VMkjw.js";import{C as b}from"./Checkbox-CVY_-4jR.js";import{T as t}from"./Table-i9i1K4un.js";import{C as F}from"./Center-CanggSuC.js";import{I as E}from"./IconClock-UTkBgsFW.js";import"./Text-BR9LnClf.js";import"./index-B6r_j4C5.js";import"./FlashNotification-PDlnUjhs.js";import"./use-disclosure-CdCiEhD4.js";import"./IconInfoCircle-BfR0qsmf.js";import"./createReactComponent-BwHUzXp6.js";import"./IconCircleX-irk6tkAo.js";import"./useWebSockets-DKQQzHQQ.js";import"./index-C163xbN1.js";import"./useTaskGroupsStore-jTNmh8Xp.js";import"./reorder-DWLP_Jze.js";import"./_baseClone-DIFX3Exu.js";import"./useTasksStore-BPRaRGpQ.js";import"./use-computed-color-scheme-BjX3e8Yz.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-DQv7jdV4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./use-uncontrolled-BGuEEBtS.js";import"./Avatar-VVVl2UCZ.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DOxQUUDz.js";import"./IconUsers-ClcBakf5.js";import"./ScrollArea-BBLLgi1y.js";import"./datetime-DXAmRnuk.js";import"./IconMessage-DJLIo_Xo.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./ActionIcon-ni5mTX2i.js";import"./get-sorted-breakpoints-RaBjtxFS.js";import"./OptionsDropdown-B7k9BRCW.js";import"./CheckIcon-BVmRy-LG.js";import"./Combobox-Bd-ojIJS.js";import"./Input-B6kN7ymh.js";import"./create-optional-context-DejgPxvx.js";import"./InputBase-DVeQGwl5.js";import"./Pill-BLrl2ix2.js";import"./PillsInput-B9htvQA-.js";import"./AccordionChevron-CiAWs_wK.js";import"./clamp-DTmYCdls.js";const P=()=>{var c,h;let{items:s,users:a,dropdowns:n}=y().props;const o=S(),[i,f,m]=C("get",route("reports.logged-time.daily"),{projects:((c=o.projects)==null?void 0:c.map(String))||[],users:((h=o.users)==null?void 0:h.map(String))||[],dateRange:o.dateRange&&o.dateRange[0]&&o.dateRange[1]?[d(o.dateRange[0]).toDate(),d(o.dateRange[1]).toDate()]:[d().subtract(1,"week").toDate(),d().toDate()],completed:o.completed!==void 0?o.completed:!0,billable:o.billable!==void 0?o.billable:!0});return e.jsxs(e.Fragment,{children:[e.jsxs(w,{fz:14,mb:30,children:[e.jsx("div",{children:"Reports"}),e.jsx("div",{children:"Daily logged time"})]}),e.jsx(M,{order:1,mb:20,children:"Daily logged time"}),e.jsx(g,{px:35,py:25,children:e.jsx("form",{onSubmit:f,children:e.jsxs(j,{justify:"space-between",children:[e.jsxs(j,{gap:"xl",children:[e.jsx(x,{placeholder:i.data.projects.length?null:"Select projects",required:!0,w:220,value:i.data.projects,onChange:r=>m("projects",r),data:n.projects,error:i.errors.projects}),e.jsx(x,{placeholder:i.data.users.length?null:"Select users",required:!0,w:220,value:i.data.users,onChange:r=>m("users",r),data:n.users,error:i.errors.users}),e.jsx(B,{settings:{timezone:"utc"},children:e.jsx(O,{type:"range",valueFormat:"MMM D",placeholder:"Pick dates range",clearable:!0,allowSingleDateInRange:!0,miw:200,value:i.data.dateRange,onChange:r=>m("dateRange",r)})}),e.jsx(b,{label:"Billable",checked:i.data.billable,onChange:r=>m("billable",r.currentTarget.checked)}),e.jsx(b,{label:"Completed",checked:i.data.completed,onChange:r=>m("completed",r.currentTarget.checked)})]}),e.jsx(T,{type:"submit",disabled:i.processing,children:"Submit"})]})})}),e.jsx(k,{mt:"xl",children:Object.keys(s).length?e.jsx(g,{px:35,py:15,children:e.jsxs(t,{horizontalSpacing:"xl",verticalSpacing:"md",striped:!0,highlightOnHover:!0,children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"Date"}),Object.keys(a).map(r=>e.jsx(t.Th,{children:a[r].user_name},a[r].user_id))]})}),e.jsxs(t.Tbody,{children:[Object.keys(s).map(r=>e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:r}),Object.keys(a).map(l=>{var p;return e.jsxs(t.Td,{children:[v.round(((p=s[r][l])==null?void 0:p.total_hours)||0,2).toFixed(2)," h"]},`${r}-${l}`)})]},r)),e.jsxs(t.Tr,{fw:800,children:[e.jsx(t.Td,{align:"right",children:"SUM"}),Object.keys(a).map(r=>e.jsxs(t.Td,{children:[Object.keys(s).reduce((l,p)=>{var u;return l+Number(((u=s[p][r])==null?void 0:u.total_hours)||0)},0).toFixed(2)," ","h"]},r))]})]})]})}):e.jsx(F,{mih:300,children:e.jsx(D,{title:"No logged time found",subtitle:"Try changing selected filters",icon:E})})})]})};P.layout=s=>e.jsx(R,{title:"Logged time sum",children:s});export{P as default};
