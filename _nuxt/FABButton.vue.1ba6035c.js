import{g as l,o,c,l as s,h as a,B as d,n as m,m as p,c7 as b}from"./entry.5564aef3.js";const u=["disabled"],f=l({__name:"FABButton",props:{disabled:{type:Boolean},loading:{type:Boolean},icon:{}},emits:["click"],setup(r,{emit:t}){const e=r;function i(){e.loading||e.disabled||t("click")}return(n,g)=>(o(),c("button",{onClick:i,class:m(("mergeClasses"in n?n.mergeClasses:a(p))("btn","btn-circle","absolute","transition-transform","duration-300","hover:-rotate-90","bg-gradient-to-br","from-primary","to-secondary","border-0")),disabled:e.disabled},[e.loading?(o(),s(b,{key:0})):(o(),s(a(d),{key:1,icon:e.icon},null,8,["icon"]))],10,u))}});export{f as _};
