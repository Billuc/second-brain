import{g as C,o as a,c,b as u,w as h,d as y,t as k,s as _,h as s,v as f,e as D,B as N,F as K,K as V,a as g,L as B,M as G,C as T,x as $,q as I,r as O,N as H,O as L,z as J,u as P}from"./entry.67bee11c.js";import{P as j}from"./PageHeading.cd4206d4.js";import{u as S}from"./noteStore.7e873723.js";import{a as q,_ as W}from"./TextInput.vue.31a2e162.js";import"./persistedPinia.b9bd7008.js";const M=C({__name:"NotesGridElement",props:{label:{},href:{}},emits:["click"],setup(d,{emit:t}){const e=d;function o(n){e.href||(n.preventDefault(),t("click"))}return(n,v)=>{const p=D;return a(),c("li",{class:_(("mergeClasses"in n?n.mergeClasses:s(f))("btn","btn-neutral","list-none","-skew-y-3","my-0","w-full","h-full")),onClick:o},[u(p,{class:_(("mergeClasses"in n?n.mergeClasses:s(f))("w-full","h-full","flex","justify-center","items-center","m-0","no-underline","text-lg")),href:e.href},{default:h(()=>[y(k(e.label),1)]),_:1},8,["class","href"])],2)}}}),Q={class:"ml-1"},U=C({__name:"Tag",props:{color:{},icon:{},text:{}},setup(d){const t=d;return(e,o)=>(a(),c("div",{class:"badge",style:G({backgroundColor:t.color})},[t.icon?(a(),N(s(K),{key:0,icon:t.icon,size:"xs"},null,8,["icon"])):V("",!0),g("span",Q,k(t.text),1),B(e.$slots,"default")],4))}}),X={class:"label-text"},Y=["placeholder","value"],Z=["onClick"],ee={key:1},R=C({__name:"Autocomplete",props:{label:{},inputClass:{},placeholder:{},options:{},textKey:{},valueKey:{}},emits:["input","newOption"],setup(d,{emit:t}){const e=d,o=T(""),n=$(()=>e.options.filter(l=>(l[e.textKey??"text"]??"").toLowerCase().startsWith(o.value.toLowerCase()))),v=l=>o.value=l.target.value,p=l=>t("input",l[e.valueKey??"value"]),r=()=>t("newOption",o.value);return(l,m)=>(a(),c("div",{class:_(("mergeClasses"in l?l.mergeClasses:s(f))("w-full","dropdown"))},[e.label?(a(),c("label",{key:0,class:_(("mergeClasses"in l?l.mergeClasses:s(f))("label","badge","badge-ghost","relative","-mb-2","ml-4","z-[1]","px-2"))},[g("span",X,k(e.label),1)],2)):V("",!0),g("input",{type:"text",placeholder:e.placeholder,class:_(("mergeClasses"in l?l.mergeClasses:s(f))("input","input-bordered","w-full","hover:brightness-95","focus:brightness-100","transition-all","duration-200",e.inputClass)),value:s(o),onInput:v},null,42,Y),g("ul",{class:_(("mergeClasses"in l?l.mergeClasses:s(f))("dropdown-content","menu","border","z-10","p-2","shadow","bg-base-100","rounded-box","w-56","max-h-52"))},[s(n).length>0?(a(!0),c(I,{key:0},O(s(n),(b,x)=>(a(),c("li",{key:`autocomplete-option-${x}`},[g("button",{onClick:()=>p(b)},k(b[e.textKey??"text"]),9,Z)]))),128)):(a(),c("li",ee,[B(l.$slots,"no-option",{newOption:r,inputValue:s(o)},()=>[g("button",{onClick:r},"New option : "+k(s(o)),1)])]))],2)],2))}}),se={class:"dropdown"},te=C({__name:"TagInput",props:{tags:{},selectedTagIds:{}},emits:["newTag","removeTag","selectTag"],setup(d,{emit:t}){const e=d,o=$(()=>e.tags.filter(r=>e.selectedTagIds.includes(r.id))),n=r=>t("selectTag",r),v=r=>t("removeTag",r.id),p=r=>t("newTag",r);return(r,l)=>(a(),c("div",se,[u(R,{label:"Tag name",options:e.tags,onInput:n,onNewOption:p,"text-key":"title","value-key":"id"},null,8,["options"]),g("div",{class:_(("mergeClasses"in r?r.mergeClasses:s(f))("flex"))},[(a(!0),c(I,null,O(s(o),m=>(a(),N(U,{key:"tag-"+m.id,text:m.title,color:m.color,icon:m.icon},{default:h(()=>[u(s(K),{icon:s(H),size:"xs",class:"btn btn-circle btn-xs",onClick:b=>v(m)},null,8,["icon","onClick"])]),_:2},1032,["text","color","icon"]))),128))],2)]))}}),ne=C({__name:"CreateNote",setup(d){const t=S(),e=T(!1),o=T(""),n=T([]),{tags:v,nextTagId:p}=L(t),r=$(()=>[...v.value.values()]),l=()=>e.value=!0,m=()=>e.value=!1,b=i=>o.value=i,x=()=>{t.newNote(o.value,n.value),m()},A=i=>{const w=p.value;t.newTag(i),console.log(i,w),n.value.push(w)},E=i=>{n.value=n.value.filter(w=>w!==i)},F=i=>{n.value.includes(i)||n.value.push(i)},z=i=>{console.log(i)};return(i,w)=>(a(),c("div",null,[u(M,{label:"+",onClick:l}),u(W,{"is-opened":s(e),onClose:m},{title:h(()=>[y("Create a new note")]),default:h(()=>[g("div",null,[u(q,{label:"Note name",value:s(o),placeholder:"Enter name...","input-class":"border-neutral",onInput:b},null,8,["value"]),u(te,{tags:s(r),"selected-tag-ids":s(n),onNewTag:A,onRemoveTag:E,onSelectTag:F},null,8,["tags","selected-tag-ids"]),u(R,{label:"test",options:[{text:"John",value:0},{text:"Jean",value:1},{text:"Mike",value:3}],onInput:z,onNewOption:z})])]),actions:h(()=>[u(J,{class:"btn-success",onClick:x},{default:h(()=>[y("Create")]),_:1})]),_:1},8,["is-opened"])]))}}),oe={class:"py-2"},le=C({__name:"NotesGrid",setup(d){const t=S(),{notes:e}=L(t);return(o,n)=>(a(),c("div",oe,[g("ul",{class:_(("mergeClasses"in o?o.mergeClasses:s(f))("grid","grid-cols-1","md:grid-cols-2","gap-1","p-0"))},[(a(!0),c(I,null,O(s(e),([v,p])=>(a(),N(M,{key:`note-${p.id}`,label:p.title,href:`/notes/${p.id}`},null,8,["label","href"]))),128)),u(ne)],2)]))}}),ae=g("span",{class:"text-neutral"},"Notes",-1),de=C({__name:"index",setup(d){return P({title:"Notes"}),(t,e)=>(a(),c("div",null,[u(j,null,{default:h(()=>[ae]),_:1}),u(le)]))}});export{de as default};
