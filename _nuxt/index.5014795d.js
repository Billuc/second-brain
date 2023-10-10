import{g as y,o as b,c as w,a as h,t as A,b as u,h as t,i as Z,j as ee,k as oe,F as L,r as P,n as S,m as I,l as $,q as E,w as f,s as le,v as U,x as _,y as B,z as T,A as F,B as q,C as te,D as se,E as H,d as N,G as ae,H as ne,I as k,J,K as j,L as G,M as K,u as re,N as ie}from"./entry.3496b6f8.js";import{_ as Q}from"./Background.vue.3eb1229b.js";import{_ as D,a as ce,T as O,b as X}from"./SelectField.vue.b8eab1cb.js";import{u as R}from"./eventStore.4131307b.js";import{_ as ue,a as de,b as pe,c as z}from"./InputField.vue.345afeee.js";import{_ as Y}from"./FABButton.vue.1a04113a.js";import{_ as me}from"./Input.vue.5d00ab9b.js";import{u as V}from"./noteStore.04592578.js";import{P as ve}from"./PageHeading.84f38730.js";import"./index.f3feb017.js";const fe=["data-set-theme","data-theme"],_e={class:"my-1"},ge=y({__name:"ThemeDisplay",props:{themeName:{}},setup(g){const d=g;return(e,r)=>(b(),w("button",{"data-key":"theme","data-set-theme":d.themeName,"data-theme":d.themeName,"data-act-class":"outline",class:"rounded-box p-2 border-2 border-primary relative outline-offset-2"},[h("div",_e,A(d.themeName),1),u(Q,{icon:t(Z)},null,8,["icon"])],8,fe))}}),be=y({__name:"ThemeSelector",setup(g){const d=["light","dark","synthwave","valentine","cupcake"];return ee(()=>oe.themeChange(!1)),(e,r)=>(b(),w("div",{class:S(("mergeClasses"in e?e.mergeClasses:t(I))("grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-4","pl-4"))},[(b(),w(L,null,P(d,a=>u(ge,{"theme-name":a,key:"select-"+a},null,8,["theme-name"])),64))],2))}}),Ce=y({__name:"TagColorInput",props:{disabledColors:{},value:{},required:{type:Boolean}},emits:["update:value"],setup(g,{emit:d}){const e=g,r=$(()=>e.required?[l=>!!l,l=>!e.disabledColors.includes(l)]:[l=>!e.disabledColors.includes(l)]),a=$(()=>U(Object.values(O)).chain().difference(e.disabledColors).map(l=>({text:l,value:l})).value()),p=l=>d("update:value",l);return(l,o)=>(b(),E(ce,{label:"Tag Color",placeholder:"Choose a tag color",icon:t(le),value:e.value,options:t(a),"onUpdate:value":p,rules:t(r)},{selected:f(({selected:n})=>[u(D,{color:n.value,text:n.text,class:"w-full !btn-xs"},null,8,["color","text"])]),option:f(({option:n,onSelect:s})=>[u(D,{color:n.value,text:n.text,onClick:s,class:"w-full hover:scale-95"},null,8,["color","text","onClick"])]),_:1},8,["icon","value","options","rules"]))}}),he={class:"w-52"},xe={class:"my-autocomplete peer"},ke={class:"opacity-50"},$e=["onClick"],ye=y({__name:"AutocompleteDropdown",props:{value:{},placeholder:{},options:{},labelClass:{}},emits:["update:value","newOption"],setup(g,{emit:d}){const e=g,r=_(null),a=_(null),p=_(null),l=_(""),o=$(()=>e.options.find(m=>m.value===e.value)),n=$(()=>e.options.filter(m=>(m.text.toLowerCase()===l.value.toLowerCase()||l.value.length>=3)&&U.includes(m.text.toLowerCase(),l.value.toLowerCase()))),s=()=>{p.value.focus()},x=m=>{d("update:value",m.value),r.value.blur(),p.value.blur(),a.value.blur()},C=m=>d("newOption",m);return(m,c)=>(b(),w("div",he,[h("div",xe,[h("label",{ref_key:"label",ref:a,tabindex:"0",class:S(e.labelClass),onFocus:s},[t(o)?B(m.$slots,"selected",{key:0,selected:t(o)},()=>[h("span",null,A(t(o).text),1)]):B(m.$slots,"placeholder",{key:1,placeholder:e.placeholder},()=>[h("span",ke,A(e.placeholder),1)])],34),h("div",{ref_key:"dropdown",ref:r,tabindex:"0",class:S(("mergeClasses"in m?m.mergeClasses:t(I))("my-autocomplete-content","bg-base-200","min-w-full","rounded-box","text-center","md:text-end","fixed","md:absolute","bottom-0","left-0","md:bottom-auto","md:left-auto","max-h-56","overflow-y-auto","overflow-x-visible","shadow-xl","p-2"))},[u(me,{ref_key:"input",ref:p,value:t(l),"onUpdate:value":c[0]||(c[0]=i=>T(l)?l.value=i:null),"input-class":("mergeClasses"in m?m.mergeClasses:t(I))("focus:outline-none","bg-base-200","focus:bg-base-300","rounded-box","px-2","w-full","block","mb-2"),placeholder:"Search for icons...",clearable:"",onClear:c[1]||(c[1]=i=>l.value="")},null,8,["value","input-class"]),t(n).length>0?(b(!0),w(L,{key:0},P(t(n),(i,v)=>(b(),w("div",{key:"option-"+v},[B(m.$slots,"option",{option:i,onSelect:()=>x(i),selected:i.value===e.value},()=>[h("div",{onClick:()=>x(i),class:S(["px-2 rounded-box hover:bg-base-100",{"bg-base-100":i.value===e.value}])},A(i.text),11,$e)])]))),128)):B(m.$slots,"no-option",{key:1,createOption:C,search:t(l)},()=>[h("button",{onClick:c[2]||(c[2]=()=>C(t(l)))}," New option : "+A(t(l)),1)])],2)]),h("label",{tabindex:"0",class:S(("mergeClasses"in m?m.mergeClasses:t(I))("hidden","bg-black","opacity-0","peer-focus-within:block","peer-focus-within:opacity-20","md:peer-focus-within:hidden","fixed","bottom-0","left-0","right-0","h-screen","z-20"))},null,2)]))}});const we=y({__name:"AutocompleteField",props:{label:{},clearable:{type:Boolean},icon:{},options:{},value:{},placeholder:{},rules:{}},emits:["clear","update:value","newOption"],setup(g,{emit:d}){const e=g,r=()=>d("clear"),a=l=>d("update:value",l),p=l=>d("newOption",l);return(l,o)=>(b(),E(ue,{icon:e.icon,label:e.label,clearable:e.clearable,value:e.value,rules:e.rules,onClear:r,"onUpdate:value":a},{input:f(({value:n,onInput:s,inputClass:x})=>[u(ye,{class:"flex-shrink w-full",options:e.options,value:n,placeholder:e.placeholder,"label-class":x,"onUpdate:value":s,onNewOption:p},{selected:f(C=>[B(l.$slots,"selected",F(q(C)))]),placeholder:f(C=>[B(l.$slots,"placeholder",F(q(C)))]),option:f(C=>[B(l.$slots,"option",F(q(C)))]),"no-option":f(C=>[B(l.$slots,"no-option",F(q(C)))]),_:2},1032,["options","value","placeholder","label-class","onUpdate:value"])]),_:3},8,["icon","label","clearable","value","rules"]))}}),Te=["onClick"],Ne=h("div",{class:"text-sm italic font-light text-center"}," No icon found... ",-1),W="___",Ue=y({__name:"IconInput",props:{icon:{},clearable:{type:Boolean}},emits:["update:icon"],setup(g,{emit:d}){const e=g,r=o=>U.join(o,W),a=o=>U.split(o,W),p=U([...Object.values(te),...Object.values(se)]).chain().map(o=>({text:o.iconName,value:r([o.prefix,o.iconName])})).uniqBy(o=>o.value).value(),l=o=>d("update:icon",a(o));return(o,n)=>(b(),E(we,{label:"Icon",placeholder:"Search icons...",icon:t(ae),options:t(p),value:r(e.icon??[""]),"onUpdate:value":l,clearable:e.clearable},{selected:f(({selected:s})=>[h("div",null,[u(t(H),{icon:a(s.value)},null,8,["icon"]),N(" "+A(s.text),1)])]),option:f(({option:s,onSelect:x})=>[h("div",{onClick:x,class:"hover:bg-base-100 rounded-box px-2"},[u(t(H),{icon:a(s.value)},null,8,["icon"]),N(" "+A(s.text),1)],8,Te)]),"no-option":f(()=>[Ne]),_:1},8,["icon","options","value","clearable"]))}}),M=y({__name:"TagForm",props:{title:{},color:{},icon:{},disabledColors:{}},emits:["update:title","update:color","update:icon"],setup(g,{expose:d,emit:e}){const r=g,a=_(null),p=s=>e("update:title",s),l=s=>e("update:color",s),o=s=>e("update:icon",s);return d({validate:()=>{var s;return(s=a.value)==null?void 0:s.validate()}}),(s,x)=>(b(),E(pe,{ref_key:"form",ref:a},{default:f(()=>[u(de,{label:"Tag name",placeholder:"Enter name...",icon:t(ne),value:r.title,"onUpdate:value":p,rules:[C=>!!C]},null,8,["icon","value","rules"]),u(Ce,{"disabled-colors":r.disabledColors,value:r.color,"onUpdate:value":l,required:""},null,8,["disabled-colors","value"]),u(Ue,{icon:r.icon,"onUpdate:icon":o},null,8,["icon"])]),_:1},512))}}),Oe=y({__name:"CreateEventTag",props:{disabledColors:{}},setup(g){const d=g,e=R(),r=_(null),a=_(!1),p=_(""),l=_(O.red),o=_([k.prefix,k.iconName]),n=()=>a.value=!0,s=()=>a.value=!1,x=()=>{var m;(m=r.value)!=null&&m.validate()&&(e.newTag(p.value,l.value,o.value),s(),C())},C=()=>{p.value="",l.value=O.red,o.value=[k.prefix,k.iconName]};return(m,c)=>{const i=z;return b(),w("div",null,[u(Y,{onClick:n,icon:t(J),class:"-bottom-4 right-4"},null,8,["icon"]),u(i,{"is-opened":t(a),onClose:s},{title:f(()=>[N("Create a new tag")]),default:f(()=>[u(M,{title:t(p),"onUpdate:title":c[0]||(c[0]=v=>T(p)?p.value=v:null),color:t(l),"onUpdate:color":c[1]||(c[1]=v=>T(l)?l.value=v:null),icon:t(o),"onUpdate:icon":c[2]||(c[2]=v=>T(o)?o.value=v:null),"disabled-colors":d.disabledColors,ref_key:"form",ref:r},null,8,["title","color","icon","disabled-colors"])]),actions:f(()=>[u(j,{class:"btn-success",onClick:x},{default:f(()=>[N("Create")]),_:1})]),_:1},8,["is-opened"])])}}}),Ee=y({__name:"EditEventTag",props:{tag:{},disabledColors:{}},emits:["close"],setup(g,{emit:d}){const e=g,r=R(),a=_(null),p=$(()=>!!e.tag),l=_(""),o=_(O.red),n=_([k.prefix,k.iconName]),s=$(()=>e.disabledColors.filter(c=>{var i;return c!==((i=e.tag)==null?void 0:i.color)})),x=()=>d("close"),C=()=>{var c;e.tag&&(c=a.value)!=null&&c.validate()&&(r.editTag(e.tag.id,l.value,o.value,n.value),x())},m=()=>{e.tag&&(r.removeTag(e.tag.id),x())};return G(()=>{e.tag?(l.value=e.tag.title,o.value=e.tag.color,n.value=e.tag.icon):(l.value="",o.value=O.red,n.value=[k.prefix,k.iconName])}),(c,i)=>(b(),E(z,{"is-opened":t(p),onClose:x},{title:f(()=>{var v;return[N(" Edit tag '"+A((v=e.tag)==null?void 0:v.title)+"'",1)]}),default:f(()=>[u(M,{title:t(l),"onUpdate:title":i[0]||(i[0]=v=>T(l)?l.value=v:null),color:t(o),"onUpdate:color":i[1]||(i[1]=v=>T(o)?o.value=v:null),icon:t(n),"onUpdate:icon":i[2]||(i[2]=v=>T(n)?n.value=v:null),"disabled-colors":t(s),ref_key:"form",ref:a},null,8,["title","color","icon","disabled-colors"])]),actions:f(()=>[u(j,{class:"btn-error ml-2",onClick:m},{default:f(()=>[N("Remove")]),_:1}),u(j,{class:"btn-success ml-2",onClick:C},{default:f(()=>[N("Save")]),_:1})]),_:1},8,["is-opened"]))}}),Ae={class:"pl-4"},Be=h("h3",{class:"text-xl font-bold mb-4"},"Tags",-1),Se=y({__name:"EventsConfig",setup(g){const d=R(),e=_(null),r=$(()=>U.sortBy(d.tagArray,o=>X.get(o.color))),a=$(()=>U.uniq(r.value.map(o=>o.color))),p=$(()=>U.some(Object.values(O),o=>!a.value.includes(o))),l=o=>e.value=o;return(o,n)=>(b(),w("div",Ae,[Be,h("div",{class:S(("mergeClasses"in o?o.mergeClasses:t(I))("relative","grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-2"))},[(b(!0),w(L,null,P(t(r),s=>(b(),E(D,{color:s.color,icon:s.icon,text:s.title,onClick:()=>l(s)},null,8,["color","icon","text","onClick"]))),256)),t(p)?(b(),E(Oe,{key:0,"disabled-colors":t(a)},null,8,["disabled-colors"])):K("",!0),u(Ee,{tag:t(e),onClose:n[0]||(n[0]=s=>e.value=null),"disabled-colors":t(a)},null,8,["tag","disabled-colors"])],2)]))}}),Ie=y({__name:"CreateNoteTag",props:{disabledColors:{}},setup(g){const d=g,e=V(),r=_(null),a=_(!1),p=_(""),l=_(O.red),o=_([k.prefix,k.iconName]),n=()=>a.value=!0,s=()=>a.value=!1,x=()=>{var m;(m=r.value)!=null&&m.validate()&&(e.newTag(p.value,l.value,o.value),s(),C())},C=()=>{p.value="",l.value=O.red,o.value=[k.prefix,k.iconName]};return(m,c)=>{const i=z;return b(),w("div",null,[u(Y,{onClick:n,icon:t(J),class:"-bottom-4 right-4"},null,8,["icon"]),u(i,{"is-opened":t(a),onClose:s},{title:f(()=>[N("Create a new tag")]),default:f(()=>[u(M,{title:t(p),"onUpdate:title":c[0]||(c[0]=v=>T(p)?p.value=v:null),color:t(l),"onUpdate:color":c[1]||(c[1]=v=>T(l)?l.value=v:null),icon:t(o),"onUpdate:icon":c[2]||(c[2]=v=>T(o)?o.value=v:null),"disabled-colors":d.disabledColors,ref_key:"form",ref:r},null,8,["title","color","icon","disabled-colors"])]),actions:f(()=>[u(j,{class:"btn-success",onClick:x},{default:f(()=>[N("Create")]),_:1})]),_:1},8,["is-opened"])])}}}),je=y({__name:"EditNoteTag",props:{tag:{},disabledColors:{}},emits:["close"],setup(g,{emit:d}){const e=g,r=V(),a=_(null),p=$(()=>!!e.tag),l=_(""),o=_(O.red),n=_([k.prefix,k.iconName]),s=$(()=>e.disabledColors.filter(c=>{var i;return c!==((i=e.tag)==null?void 0:i.color)})),x=()=>d("close"),C=()=>{var c;e.tag&&(c=a.value)!=null&&c.validate()&&(r.editTag(e.tag.id,l.value,o.value,n.value),x())},m=()=>{e.tag&&(r.removeTag(e.tag.id),x())};return G(()=>{e.tag?(l.value=e.tag.title,o.value=e.tag.color,n.value=e.tag.icon):(l.value="",o.value=O.red,n.value=[k.prefix,k.iconName])}),(c,i)=>(b(),E(z,{"is-opened":t(p),onClose:x},{title:f(()=>{var v;return[N(" Edit tag '"+A((v=e.tag)==null?void 0:v.title)+"'",1)]}),default:f(()=>[u(M,{title:t(l),"onUpdate:title":i[0]||(i[0]=v=>T(l)?l.value=v:null),color:t(o),"onUpdate:color":i[1]||(i[1]=v=>T(o)?o.value=v:null),icon:t(n),"onUpdate:icon":i[2]||(i[2]=v=>T(n)?n.value=v:null),"disabled-colors":t(s),ref_key:"form",ref:a},null,8,["title","color","icon","disabled-colors"])]),actions:f(()=>[u(j,{class:"btn-error ml-2",onClick:m},{default:f(()=>[N("Remove")]),_:1}),u(j,{class:"btn-success ml-2",onClick:C},{default:f(()=>[N("Save")]),_:1})]),_:1},8,["is-opened"]))}}),Fe={class:"pl-4"},qe=h("h3",{class:"text-xl font-bold mb-4"},"Tags",-1),De=y({__name:"NotesConfig",setup(g){const d=V(),e=_(null),r=$(()=>U.sortBy(d.tagArray,o=>X.get(o.color))),a=$(()=>U.uniq(r.value.map(o=>o.color))),p=$(()=>U.some(Object.values(O),o=>!a.value.includes(o))),l=o=>e.value=o;return(o,n)=>(b(),w("div",Fe,[qe,h("div",{class:S(("mergeClasses"in o?o.mergeClasses:t(I))("relative","grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-2"))},[(b(!0),w(L,null,P(t(r),s=>(b(),E(D,{color:s.color,icon:s.icon,text:s.title,onClick:()=>l(s)},null,8,["color","icon","text","onClick"]))),256)),t(p)?(b(),E(Ie,{key:0,"disabled-colors":t(a)},null,8,["disabled-colors"])):K("",!0),u(je,{tag:t(e),onClose:n[0]||(n[0]=s=>e.value=null),"disabled-colors":t(a)},null,8,["tag","disabled-colors"])],2)]))}}),Le={class:"relative"},Pe=h("h2",{class:"text-2xl font-bold my-4"},"Theme",-1),ze=h("h2",{class:"text-2xl font-bold my-4"},"Events",-1),Me=h("h2",{class:"text-2xl font-bold my-4"},"Notes",-1),Ze=y({__name:"index",setup(g){return re({title:"Configuration"}),(d,e)=>(b(),w("div",null,[u(ve,null,{default:f(()=>[N("Configuration")]),_:1}),u(Q,{icon:t(ie)},null,8,["icon"]),h("div",Le,[Pe,u(be),ze,u(Se),Me,u(De)])]))}});export{Ze as default};
