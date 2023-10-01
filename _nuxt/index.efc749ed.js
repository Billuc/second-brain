import{g as $,o as f,c as h,a as _,t as O,b as d,h as t,i as Z,j as ee,k as oe,F,r as L,n as I,m as S,l as k,q as U,w as m,s as le,v as N,x as b,y as A,z as te,A as se,B as w,C as j,D,E as ne,G as ae,H as q,d as x,I as ce,J as re,K as C,L as W,M as B,N as J,O as G,u as ie,P as ue}from"./entry.fba0ea98.js";import{_ as K}from"./Background.vue.7bd083cd.js";import{_ as P,a as de,T,b as Q}from"./SelectAlt.vue.88259c7d.js";import{u as R}from"./eventStore.737d8aa7.js";import{_ as pe,a as me,b as M}from"./InputAlt.vue.c568be83.js";import{_ as X}from"./FABButton.vue.6f7ad212.js";import{u as V}from"./noteStore.2703e7dc.js";import{P as ve}from"./PageHeading.63e43538.js";import"./index.f3feb017.js";const ge=["data-set-theme","data-theme"],fe={class:"my-1"},_e=$({__name:"ThemeDisplay",props:{themeName:{}},setup(g){const r=g;return(e,i)=>(f(),h("button",{"data-key":"theme","data-set-theme":r.themeName,"data-theme":r.themeName,"data-act-class":"outline",class:"rounded-box p-2 border-2 border-primary relative outline-offset-2"},[_("div",fe,O(r.themeName),1),d(K,{icon:t(Z)},null,8,["icon"])],8,ge))}}),be=$({__name:"ThemeSelector",setup(g){const r=["light","dark","synthwave","valentine","cupcake"];return ee(()=>oe.themeChange(!1)),(e,i)=>(f(),h("div",{class:I(("mergeClasses"in e?e.mergeClasses:t(S))("grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-4","pl-4"))},[(f(),h(F,null,L(r,a=>d(_e,{"theme-name":a,key:"select-"+a},null,8,["theme-name"])),64))],2))}}),Ce=$({__name:"TagColorInput",props:{disabledColors:{},value:{}},emits:["input"],setup(g,{emit:r}){const e=g,i=k(()=>N(Object.values(T)).chain().difference(e.disabledColors).map(s=>({text:s,value:s})).value()),a=s=>{r("input",s)};return(s,l)=>(f(),U(de,{label:"Tag Color",placeholder:"Choose a tag color",icon:t(le),value:e.value,options:t(i),"onUpdate:value":a},{selected:m(({selected:o})=>[d(P,{color:o.value,text:o.text,class:"w-full !btn-xs"},null,8,["color","text"])]),option:m(({option:o,onSelect:p})=>[d(P,{color:o.value,text:o.text,onClick:p,class:"w-full hover:scale-95"},null,8,["color","text","onClick"])]),_:1},8,["icon","value","options"]))}}),he={class:"w-52"},xe={class:"my-autocomplete peer"},$e={class:"opacity-50"},ke=["onClick"],we=$({__name:"AutocompleteDropdown",props:{value:{},placeholder:{},options:{}},emits:["update:value","newOption"],setup(g,{emit:r}){const e=g,i=b(null),a=b(null),s=b(null),l=b(""),o=k(()=>e.options.find(n=>n.value===e.value)),p=k(()=>e.options.filter(n=>(n.text.toLowerCase()===l.value.toLowerCase()||l.value.length>=3)&&N.includes(n.text.toLowerCase(),l.value.toLowerCase()))),u=()=>{s.value.focus()},y=n=>{r("update:value",n.value),i.value.blur(),s.value.blur(),a.value.blur()},E=n=>r("newOption",n);return(n,v)=>(f(),h("div",he,[_("div",xe,[_("label",{ref_key:"label",ref:a,tabindex:"0",class:I(("mergeClasses"in n?n.mergeClasses:t(S))("focus:outline-none","bg-base-200","focus:bg-base-300","text-end","font-semibold","rounded-box","px-2","w-full","block")),onFocus:u},[t(o)?A(n.$slots,"selected",{key:0,selected:t(o)},()=>[_("span",null,O(t(o).text),1)]):A(n.$slots,"placeholder",{key:1,placeholder:e.placeholder},()=>[_("span",$e,O(e.placeholder),1)])],34),_("div",{ref_key:"dropdown",ref:i,tabindex:"0",class:I(("mergeClasses"in n?n.mergeClasses:t(S))("my-autocomplete-content","bg-base-200","min-w-full","rounded-box","text-center","md:text-end","fixed","md:absolute","bottom-0","left-0","md:bottom-auto","md:left-auto","max-h-56","overflow-y-auto","overflow-x-visible","shadow-xl","p-2"))},[te(_("input",{ref_key:"input",ref:s,"onUpdate:modelValue":v[0]||(v[0]=c=>w(l)?l.value=c:null),class:I(("mergeClasses"in n?n.mergeClasses:t(S))("focus:outline-none","bg-base-200","focus:bg-base-300","rounded-box","px-2","w-full","block","mb-2")),placeholder:"Search for icons..."},null,2),[[se,t(l)]]),t(p).length>0?(f(!0),h(F,{key:0},L(t(p),(c,Y)=>(f(),h("div",{key:"option-"+Y},[A(n.$slots,"option",{option:c,onSelect:()=>y(c),selected:c.value===e.value},()=>[_("div",{onClick:()=>y(c),class:I(["px-2 rounded-box hover:bg-base-100",{"bg-base-100":c.value===e.value}])},O(c.text),11,ke)])]))),128)):A(n.$slots,"no-option",{key:1,createOption:E,search:t(l)},()=>[_("button",{onClick:v[1]||(v[1]=()=>E(t(l)))}," New option : "+O(t(l)),1)])],2)]),_("label",{tabindex:"0",class:I(("mergeClasses"in n?n.mergeClasses:t(S))("hidden","bg-black","opacity-0","peer-focus-within:block","peer-focus-within:opacity-20","md:peer-focus-within:hidden","fixed","bottom-0","left-0","right-0","h-screen","z-20"))},null,2)]))}});const ye=$({__name:"AutocompleteAlt",props:{label:{},clearable:{type:Boolean},icon:{},options:{},value:{},placeholder:{}},emits:["clear","update:value","newOption"],setup(g,{emit:r}){const e=g,i=()=>r("clear"),a=l=>r("update:value",l),s=l=>r("newOption",l);return(l,o)=>(f(),U(pe,{icon:e.icon,label:e.label,clearable:e.clearable,onClear:i},{input:m(()=>[d(we,{class:"flex-shrink",options:e.options,value:e.value,placeholder:e.placeholder,"onUpdate:value":a,onNewOption:s},{selected:m(p=>[A(l.$slots,"selected",j(D(p)))]),placeholder:m(p=>[A(l.$slots,"placeholder",j(D(p)))]),option:m(p=>[A(l.$slots,"option",j(D(p)))]),"no-option":m(p=>[A(l.$slots,"no-option",j(D(p)))]),_:3},8,["options","value","placeholder"])]),_:3},8,["icon","label","clearable"]))}}),Te=["onClick"],H="___",Ne=$({__name:"IconInput",props:{icon:{},clearable:{type:Boolean}},emits:["input"],setup(g,{emit:r}){const e=g,i=o=>N.join(o,H),a=o=>N.split(o,H),s=[...Object.values(ne),...Object.values(ae)].map(o=>({text:o.iconName,value:i([o.prefix,o.iconName])})),l=o=>r("input",a(o));return(o,p)=>(f(),U(ye,{label:"Icon",placeholder:"Search icons...",icon:t(ce),options:t(s),value:i(e.icon??[""]),"onUpdate:value":l,clearable:e.clearable},{selected:m(({selected:u})=>[_("div",null,[d(t(q),{icon:a(u.value)},null,8,["icon"]),x(" "+O(u.text),1)])]),option:m(({option:u,onSelect:y})=>[_("div",{onClick:y,class:"hover:bg-base-100 rounded-box px-2"},[d(t(q),{icon:a(u.value)},null,8,["icon"]),x(" "+O(u.text),1)],8,Te)]),"no-option":m(()=>[x(" No icon found... ")]),_:1},8,["icon","options","value","clearable"]))}}),Oe={class:"form-control gap-y-2"},z=$({__name:"TagForm",props:{title:{},color:{},icon:{},disabledColors:{}},emits:["update:title","update:color","update:icon"],setup(g,{emit:r}){const e=g,i=l=>r("update:title",l),a=l=>r("update:color",l),s=l=>r("update:icon",l);return(l,o)=>(f(),h("div",Oe,[d(me,{label:"Tag name",placeholder:"Enter name...",icon:t(re),value:e.title,onInput:i},null,8,["icon","value"]),d(Ce,{"disabled-colors":e.disabledColors,value:e.color,onInput:a},null,8,["disabled-colors","value"]),d(Ne,{icon:e.icon,onInput:s},null,8,["icon"])]))}}),Ue=$({__name:"CreateEventTag",props:{disabledColors:{}},setup(g){const r=g,e=R(),i=b(!1),a=b(""),s=b(T.red),l=b([C.prefix,C.iconName]),o=()=>i.value=!0,p=()=>i.value=!1,u=()=>{e.newTag(a.value,s.value,l.value),p(),y()},y=()=>{a.value="",s.value=T.red,l.value=[C.prefix,C.iconName]};return(E,n)=>{const v=M;return f(),h("div",null,[d(X,{onClick:o,icon:t(W),class:"-bottom-4 right-4"},null,8,["icon"]),d(v,{"is-opened":t(i),onClose:p},{title:m(()=>[x("Create a new tag")]),default:m(()=>[d(z,{title:t(a),"onUpdate:title":n[0]||(n[0]=c=>w(a)?a.value=c:null),color:t(s),"onUpdate:color":n[1]||(n[1]=c=>w(s)?s.value=c:null),icon:t(l),"onUpdate:icon":n[2]||(n[2]=c=>w(l)?l.value=c:null),"disabled-colors":r.disabledColors},null,8,["title","color","icon","disabled-colors"])]),actions:m(()=>[d(B,{class:"btn-success",onClick:u},{default:m(()=>[x("Create")]),_:1})]),_:1},8,["is-opened"])])}}}),Ee=$({__name:"EditEventTag",props:{tag:{},disabledColors:{}},emits:["close"],setup(g,{emit:r}){const e=g,i=R(),a=k(()=>!!e.tag),s=b(""),l=b(T.red),o=b([C.prefix,C.iconName]),p=k(()=>e.disabledColors.filter(n=>{var v;return n!==((v=e.tag)==null?void 0:v.color)})),u=()=>r("close"),y=()=>{e.tag&&(i.editTag(e.tag.id,s.value,l.value,o.value),u())},E=()=>{e.tag&&(i.removeTag(e.tag.id),u())};return J(()=>{e.tag?(s.value=e.tag.title,l.value=e.tag.color,o.value=e.tag.icon):(s.value="",l.value=T.red,o.value=[C.prefix,C.iconName])}),(n,v)=>(f(),U(M,{"is-opened":t(a),onClose:u},{title:m(()=>{var c;return[x(" Edit tag '"+O((c=e.tag)==null?void 0:c.title)+"'",1)]}),default:m(()=>[d(z,{title:t(s),"onUpdate:title":v[0]||(v[0]=c=>w(s)?s.value=c:null),color:t(l),"onUpdate:color":v[1]||(v[1]=c=>w(l)?l.value=c:null),icon:t(o),"onUpdate:icon":v[2]||(v[2]=c=>w(o)?o.value=c:null),"disabled-colors":t(p)},null,8,["title","color","icon","disabled-colors"])]),actions:m(()=>[d(B,{class:"btn-error ml-2",onClick:E},{default:m(()=>[x("Remove")]),_:1}),d(B,{class:"btn-success ml-2",onClick:y},{default:m(()=>[x("Save")]),_:1})]),_:1},8,["is-opened"]))}}),Ie={class:"pl-4"},Ae=_("h3",{class:"text-xl font-bold mb-4"},"Tags",-1),Se=$({__name:"EventsConfig",setup(g){const r=R(),e=b(null),i=k(()=>N.sortBy(r.tagArray,o=>Q.get(o.color))),a=k(()=>N.uniq(i.value.map(o=>o.color))),s=k(()=>N.some(Object.values(T),o=>!a.value.includes(o))),l=o=>e.value=o;return(o,p)=>(f(),h("div",Ie,[Ae,_("div",{class:I(("mergeClasses"in o?o.mergeClasses:t(S))("relative","grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-2"))},[(f(!0),h(F,null,L(t(i),u=>(f(),U(P,{color:u.color,icon:u.icon,text:u.title,onClick:()=>l(u)},null,8,["color","icon","text","onClick"]))),256)),t(s)?(f(),U(Ue,{key:0,"disabled-colors":t(a)},null,8,["disabled-colors"])):G("",!0),d(Ee,{tag:t(e),onClose:p[0]||(p[0]=u=>e.value=null),"disabled-colors":t(a)},null,8,["tag","disabled-colors"])],2)]))}}),Be=$({__name:"CreateNoteTag",props:{disabledColors:{}},setup(g){const r=g,e=V(),i=b(!1),a=b(""),s=b(T.red),l=b([C.prefix,C.iconName]),o=()=>i.value=!0,p=()=>i.value=!1,u=()=>{e.newTag(a.value,s.value,l.value),p(),y()},y=()=>{a.value="",s.value=T.red,l.value=[C.prefix,C.iconName]};return(E,n)=>{const v=M;return f(),h("div",null,[d(X,{onClick:o,icon:t(W),class:"-bottom-4 right-4"},null,8,["icon"]),d(v,{"is-opened":t(i),onClose:p},{title:m(()=>[x("Create a new tag")]),default:m(()=>[d(z,{title:t(a),"onUpdate:title":n[0]||(n[0]=c=>w(a)?a.value=c:null),color:t(s),"onUpdate:color":n[1]||(n[1]=c=>w(s)?s.value=c:null),icon:t(l),"onUpdate:icon":n[2]||(n[2]=c=>w(l)?l.value=c:null),"disabled-colors":r.disabledColors},null,8,["title","color","icon","disabled-colors"])]),actions:m(()=>[d(B,{class:"btn-success",onClick:u},{default:m(()=>[x("Create")]),_:1})]),_:1},8,["is-opened"])])}}}),je=$({__name:"EditNoteTag",props:{tag:{},disabledColors:{}},emits:["close"],setup(g,{emit:r}){const e=g,i=V(),a=k(()=>!!e.tag),s=b(""),l=b(T.red),o=b([C.prefix,C.iconName]),p=k(()=>e.disabledColors.filter(n=>{var v;return n!==((v=e.tag)==null?void 0:v.color)})),u=()=>r("close"),y=()=>{e.tag&&(i.editTag(e.tag.id,s.value,l.value,o.value),u())},E=()=>{e.tag&&(i.removeTag(e.tag.id),u())};return J(()=>{e.tag?(s.value=e.tag.title,l.value=e.tag.color,o.value=e.tag.icon):(s.value="",l.value=T.red,o.value=[C.prefix,C.iconName])}),(n,v)=>(f(),U(M,{"is-opened":t(a),onClose:u},{title:m(()=>{var c;return[x(" Edit tag '"+O((c=e.tag)==null?void 0:c.title)+"'",1)]}),default:m(()=>[d(z,{title:t(s),"onUpdate:title":v[0]||(v[0]=c=>w(s)?s.value=c:null),color:t(l),"onUpdate:color":v[1]||(v[1]=c=>w(l)?l.value=c:null),icon:t(o),"onUpdate:icon":v[2]||(v[2]=c=>w(o)?o.value=c:null),"disabled-colors":t(p)},null,8,["title","color","icon","disabled-colors"])]),actions:m(()=>[d(B,{class:"btn-error ml-2",onClick:E},{default:m(()=>[x("Remove")]),_:1}),d(B,{class:"btn-success ml-2",onClick:y},{default:m(()=>[x("Save")]),_:1})]),_:1},8,["is-opened"]))}}),De={class:"pl-4"},Pe=_("h3",{class:"text-xl font-bold mb-4"},"Tags",-1),Fe=$({__name:"NotesConfig",setup(g){const r=V(),e=b(null),i=k(()=>N.sortBy(r.tagArray,o=>Q.get(o.color))),a=k(()=>N.uniq(i.value.map(o=>o.color))),s=k(()=>N.some(Object.values(T),o=>!a.value.includes(o))),l=o=>e.value=o;return(o,p)=>(f(),h("div",De,[Pe,_("div",{class:I(("mergeClasses"in o?o.mergeClasses:t(S))("relative","grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-2"))},[(f(!0),h(F,null,L(t(i),u=>(f(),U(P,{color:u.color,icon:u.icon,text:u.title,onClick:()=>l(u)},null,8,["color","icon","text","onClick"]))),256)),t(s)?(f(),U(Be,{key:0,"disabled-colors":t(a)},null,8,["disabled-colors"])):G("",!0),d(je,{tag:t(e),onClose:p[0]||(p[0]=u=>e.value=null),"disabled-colors":t(a)},null,8,["tag","disabled-colors"])],2)]))}}),Le={class:"relative"},Me=_("h2",{class:"text-2xl font-bold my-4"},"Theme",-1),ze=_("h2",{class:"text-2xl font-bold my-4"},"Events",-1),Re=_("h2",{class:"text-2xl font-bold my-4"},"Notes",-1),Ye=$({__name:"index",setup(g){return ie({title:"Configuration"}),(r,e)=>(f(),h("div",null,[d(ve,null,{default:m(()=>[x("Configuration")]),_:1}),d(K,{icon:t(ue)},null,8,["icon"]),_("div",Le,[Me,d(be),ze,d(Se),Re,d(Fe)])]))}});export{Ye as default};
