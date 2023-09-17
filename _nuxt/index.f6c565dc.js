import{g as d,o as r,c,b as a,w as o,d as _,t as w,s as p,h as i,v as f,e as y,E as h,a as C,z as L,W as T,q as $,r as x,B,u as N}from"./entry.416ca34c.js";import{P as E}from"./PageHeading.1842734e.js";import{u as k}from"./todoStore.db7a76b7.js";import{_ as V,a as z}from"./TextInput.vue.29140d61.js";import"./Input.vue.d1de34fc.js";const v=d({__name:"TodosGridElement",props:{label:{},href:{}},emits:["click"],setup(u,{emit:l}){const e=u;function t(s){e.href||(s.preventDefault(),l("click"))}return(s,m)=>{const n=y;return r(),c("li",{class:p(("mergeClasses"in s?s.mergeClasses:i(f))("btn","btn-primary","list-none","-skew-y-3","my-0","w-full","h-full")),onClick:t},[a(n,{class:p(("mergeClasses"in s?s.mergeClasses:i(f))("w-full","h-full","flex","justify-center","items-center","m-0","no-underline","text-lg")),href:e.href},{default:o(()=>[_(w(e.label),1)]),_:1},8,["class","href"])],2)}}}),D=d({__name:"CreateTodoList",setup(u){const l=k(),e=h(!1),t=h(""),s=()=>e.value=!0,m=()=>e.value=!1,n=g=>t.value=g;function b(){l.newList(t.value),m()}return(g,M)=>(r(),c("div",null,[a(v,{label:"+",onClick:s}),a(z,{"is-opened":i(e),onClose:m},{title:o(()=>[_("Create a new list")]),default:o(()=>[C("div",null,[a(V,{label:"Todolist name",value:i(t),placeholder:"Enter name...","input-class":"input-primary",onInput:n},null,8,["value"])])]),actions:o(()=>[a(L,{class:"btn-success",onClick:b},{default:o(()=>[_("Create")]),_:1})]),_:1},8,["is-opened"])]))}}),G=d({__name:"TodosGrid",setup(u){const l=k(),{todoLists:e}=T(l);return(t,s)=>(r(),c("ul",{class:p(("mergeClasses"in t?t.mergeClasses:i(f))("grid","grid-cols-1","md:grid-cols-2","gap-1","p-0"))},[(r(!0),c($,null,x(i(e),([m,n])=>(r(),B(v,{key:`todolist-${n.id}`,label:n.title,href:`/todos/${n.id}`},null,8,["label","href"]))),128)),a(D)],2))}}),H=C("span",{class:"text-primary"},"Lists",-1),I=d({__name:"index",setup(u){return N({title:"Lists"}),(l,e)=>(r(),c("div",null,[a(E,null,{default:o(()=>[H]),_:1}),a(G)]))}});export{I as default};
