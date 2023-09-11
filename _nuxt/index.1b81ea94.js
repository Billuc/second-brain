import{g as d,o as l,c,b as n,w as u,d as C,t as T,s as m,h as r,v as f,e as x,A as h,a as g,D as w,J as y,q as $,r as L,C as N,u as B}from"./entry.d1dc53c0.js";import{u as b}from"./todoStore.4396c0cf.js";import{a as D,_ as E}from"./TextInput.vue.9fe363c9.js";const k=d({__name:"TodosGridElement",props:{label:{},href:{}},emits:["click"],setup(i,{emit:o}){const e=i;function t(s){e.href||(s.preventDefault(),o("click"))}return(s,a)=>{const _=x;return l(),c("li",{class:m(("mergeClasses"in s?s.mergeClasses:r(f))("btn","btn-secondary","list-none","-skew-y-3","my-0","w-full","h-full")),onClick:t},[n(_,{class:m(("mergeClasses"in s?s.mergeClasses:r(f))("w-full","h-full","flex","justify-center","items-center","m-0","no-underline","text-lg")),href:e.href},{default:u(()=>[C(T(e.label),1)]),_:1},8,["class","href"])],2)}}}),V=d({__name:"CreateTodoList",setup(i){const o=b(),e=h(!1),t=h(""),s=()=>e.value=!0,a=()=>e.value=!1,_=p=>t.value=p;function v(){o.newList(t.value),a()}return(p,j)=>(l(),c("div",null,[n(k,{label:"+",onClick:s}),n(E,{"is-opened":r(e),onClose:a},{title:u(()=>[C("Create a new Todo list")]),default:u(()=>[g("div",null,[n(D,{label:"Todolist name",value:r(t),placeholder:"Enter name...","input-class":"input-secondary",onInput:_},null,8,["value"])])]),actions:u(()=>[n(w,{class:"btn-success",label:"Create",onClick:v})]),_:1},8,["is-opened"])]))}}),G=d({__name:"TodosGrid",setup(i){const o=b(),{todoLists:e}=y(o);return(t,s)=>(l(),c("ul",{class:m(("mergeClasses"in t?t.mergeClasses:r(f))("grid","grid-cols-1","md:grid-cols-2","gap-1","p-0"))},[(l(!0),c($,null,L(r(e),a=>(l(),N(k,{key:`todolist-${a.id}`,label:a.title,href:`/todos/${a.id}`},null,8,["label","href"]))),128)),n(V)],2))}}),M={class:"prose mx-auto"},S=g("h1",{class:"text-center text-secondary-focus"},"ToDos",-1),F=d({__name:"index",setup(i){return B({title:"Todos"}),(o,e)=>(l(),c("div",M,[S,n(G)]))}});export{F as default};
