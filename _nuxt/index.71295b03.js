import{g as _,x as y,A as N,c as f,b as o,h as s,D as i,w as u,o as v,E as I,d as g,t as k,G as w,a as m,y as E,H as M,s as x,v as C,I as B,u as D}from"./entry.d1dc53c0.js";import{u as b}from"./noteStore.043d75fc.js";import{_ as $,a as R}from"./TextInput.vue.9fe363c9.js";import{_ as S}from"./MultilineInput.vue.f0619dc1.js";const T={class:"inline-block"},V=_({__name:"DeleteNote",props:{note:{}},setup(r){const n=r,a=b(),l=y(),e=N(!1),c=()=>e.value=!0,t=()=>e.value=!1;function d(){a.removeNote(n.note.id),l.push({path:"/notes"}),t()}return(p,h)=>(v(),f("div",T,[o(i,{icon:s(I),onClick:c,class:"text-error btn-ghost"},null,8,["icon"]),o($,{"is-opened":s(e),onClose:t},{title:u(()=>[g(' Are you sure you want to remove note "'+k(n.note.title)+'" ? ',1)]),actions:u(()=>[o(i,{class:"btn-error",label:"No",onClick:t}),o(i,{class:"btn-success ml-2",label:"Yes",onClick:d})]),_:1},8,["is-opened"])]))}}),A={class:"inline-block"},H=_({__name:"EditNote",props:{note:{}},setup(r){const n=r,a=b(),l=N(!1),e=N(n.note.title),c=()=>l.value=!0,t=()=>l.value=!1,d=h=>e.value=h;function p(){a.editNote(n.note.id,e.value,n.note.text),t()}return(h,P)=>(v(),f("div",A,[o(i,{icon:s(w),onClick:c,class:"text-info btn-ghost"},null,8,["icon"]),o($,{"is-opened":s(l),onClose:t},{title:u(()=>[g('Edit note "'+k(n.note.title)+'"',1)]),default:u(()=>[m("div",null,[o(R,{label:"Note name",value:s(e),placeholder:"Enter name...","input-class":"border-neutral",onInput:d},null,8,["value"])])]),actions:u(()=>[o(i,{class:"btn-success",label:"Save",onClick:p})]),_:1},8,["is-opened"])]))}}),O=_({__name:"Note",props:{note:{}},setup(r){const n=r,{note:a}=E(n),l=b();function e(t){console.log(t),l.editNote(a.value.id,a.value.title,t)}const c=M.debounce(e,2e3);return(t,d)=>{const p=S;return v(),f("div",{class:x(("mergeClasses"in t?t.mergeClasses:s(C))("flex","flex-col","flex-nowrap","gap-y-2"))},[g(" tags "),o(p,{value:s(a).text,placeholder:"Write here...",onInput:s(c),class:x(("mergeClasses"in t?t.mergeClasses:s(C))("textarea","textarea-md","bg-base-200","shadow-md"))},null,8,["value","onInput","class"])],2)}}}),j={class:"prose mx-auto"},z={class:"text-center text-neutral-focus mb-0 mr-2"},G={class:"inline-block ml-2"},F=_({__name:"index",setup(r){const n=B(),a=b(),l=Number(n.params.id),e=a.getNote(l);return D({title:`Notes - ${e.title}`}),(c,t)=>(v(),f("div",j,[m("div",{class:x(("mergeClasses"in c?c.mergeClasses:s(C))("flex","flex-wrap","justify-center","items-center","mb-6"))},[m("h1",z,k(s(e).title),1),m("div",G,[o(H,{note:s(e)},null,8,["note"]),o(V,{note:s(e)},null,8,["note"])])],2),o(O,{note:s(e)},null,8,["note"])]))}});export{F as default};
