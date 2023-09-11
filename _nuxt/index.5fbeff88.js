import{g as d,o as l,c as i,b as n,w as c,d as m,t as b,s as f,h as r,v as p,e as x,A as C,a as g,D as w,J as y,q as $,r as L,C as N,u as B}from"./entry.d8fda07f.js";import{u as k}from"./todoStore.191c82db.js";import{a as D,_ as E}from"./TextInput.vue.90f81cb7.js";const v=d({__name:"TodosGridElement",props:{label:{},href:{}},emits:["click"],setup(u,{emit:o}){const e=u;function t(s){e.href||(s.preventDefault(),o("click"))}return(s,a)=>{const _=x;return l(),i("li",{class:f(("mergeClasses"in s?s.mergeClasses:r(p))("btn","btn-secondary","list-none","-skew-y-3","my-0","w-full","h-full")),onClick:t},[n(_,{class:f(("mergeClasses"in s?s.mergeClasses:r(p))("w-full","h-full","flex","justify-center","items-center","m-0","no-underline","text-lg")),href:e.href},{default:c(()=>[m(b(e.label),1)]),_:1},8,["class","href"])],2)}}}),V=d({__name:"CreateTodoList",setup(u){const o=k(),e=C(!1),t=C(""),s=()=>e.value=!0,a=()=>e.value=!1,_=h=>t.value=h;function T(){o.newList(t.value),a()}return(h,j)=>(l(),i("div",null,[n(v,{label:"+",onClick:s}),n(E,{"is-opened":r(e),onClose:a},{title:c(()=>[m("Create a new Todo list")]),default:c(()=>[g("div",null,[n(D,{label:"Todolist name",value:r(t),placeholder:"Enter name...","input-class":"input-secondary",onInput:_},null,8,["value"])])]),actions:c(()=>[n(w,{class:"btn-success",onClick:T},{default:c(()=>[m("Create")]),_:1})]),_:1},8,["is-opened"])]))}}),G=d({__name:"TodosGrid",setup(u){const o=k(),{todoLists:e}=y(o);return(t,s)=>(l(),i("ul",{class:f(("mergeClasses"in t?t.mergeClasses:r(p))("grid","grid-cols-1","md:grid-cols-2","gap-1","p-0"))},[(l(!0),i($,null,L(r(e),a=>(l(),N(v,{key:`todolist-${a.id}`,label:a.title,href:`/todos/${a.id}`},null,8,["label","href"]))),128)),n(V)],2))}}),M={class:"prose mx-auto"},S=g("h1",{class:"text-center text-secondary-focus"},"ToDos",-1),F=d({__name:"index",setup(u){return B({title:"Todos"}),(o,e)=>(l(),i("div",M,[S,n(G)]))}});export{F as default};
