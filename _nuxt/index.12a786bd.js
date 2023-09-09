import{k as C,g as d,o as l,c,b as r,w as u,d as p,t as $,q as h,j as i,s as m,e as T,r as g,a as N,v as b,F as k,m as D,n as I}from"./entry.cfc6213b.js";import{_ as y,a as E,b as B}from"./TextInput.vue.698585fb.js";const w=C("notes",{state:()=>({notes:{},tags:{},nextNoteId:0,nextTagId:0}),getters:{getNote:e=>t=>{if(e.notes[t]===void 0)throw new Error(`[Notes] Note with ID ${t} not found`);return e.notes[t]}},actions:{newNote(e,t){this.notes[this.nextNoteId]={id:this.nextNoteId,title:e,tagIds:t,text:""},this.nextNoteId++},editNote(e,t,s){this.getNote(e).title=t,this.getNote(e).text=s},removeNote(e){if(this.notes[e]===void 0)throw new Error(`[Notes] Note with ID ${e} not found`);delete this.notes[e]},newTag(e){this.tags[this.nextTagId]={id:this.nextTagId,title:e},this.nextTagId++},removeTag(e){delete this.tags[e]},addTagToNote(e,t){const s=this.getNote(e).tagIds;s.includes(t)?console.warn(`[Notes] Note with ID ${e} already has tag with ID ${t}`):s.push(t)},removeTagfromNote(e,t){const s=this.getNote(e).tagIds;s.includes(t)?this.getNote(e).tagIds=s.filter(n=>n!=t):console.warn(`[Notes] Note with ID ${e} doesn't have tag with ID ${t}`)}},persist:!0}),x=d({__name:"NotesGridElement",props:{label:{},href:{}},emits:["click"],setup(e,{emit:t}){const s=e;function n(o){s.href||(o.preventDefault(),t("click"))}return(o,a)=>{const f=T;return l(),c("li",{class:h(("mergeClasses"in o?o.mergeClasses:i(m))("btn","btn-neutral","list-none","-skew-y-3","my-0","w-full","h-full")),onClick:n},[r(f,{class:h(("mergeClasses"in o?o.mergeClasses:i(m))("w-full","h-full","flex","justify-center","items-center","m-0","no-underline","text-lg")),href:s.href},{default:u(()=>[p($(s.label),1)]),_:1},8,["class","href"])],2)}}}),S=d({__name:"CreateNote",setup(e){const t=w(),s=g(!1),n=g(""),o=()=>s.value=!0,a=()=>s.value=!1,f=_=>n.value=_;function v(){t.newNote(n.value,[]),a()}return(_,G)=>(l(),c("div",null,[r(x,{label:"+",onClick:o}),r(B,{"is-opened":i(s),onClose:a},{title:u(()=>[p("Create a new note")]),default:u(()=>[N("div",null,[r(y,{label:"Note name",value:i(n),placeholder:"Enter name...","input-class":"input-neutral",onInput:f},null,8,["value"])])]),actions:u(()=>[r(E,{class:"btn-success",label:"Create",onClick:v})]),_:1},8,["is-opened"])]))}}),V=d({__name:"NotesGrid",setup(e){const t=w(),{notes:s}=b(t);return(n,o)=>(l(),c("ul",{class:h(("mergeClasses"in n?n.mergeClasses:i(m))("grid","grid-cols-1","md:grid-cols-2","gap-1","p-0"))},[(l(!0),c(k,null,D(i(s),a=>(l(),I(x,{key:`note-${a.id}`,label:a.title,href:`/notes/${a.id}`},null,8,["label","href"]))),128)),r(S)],2))}}),j={class:"prose mx-auto"},F=N("h1",{class:"text-center text-neutral-focus"},"Notes",-1),q=d({__name:"index",setup(e){return(t,s)=>(l(),c("div",j,[F,r(V)]))}});export{q as default};
