import{g as f,x as y,A as x,c as v,b as o,h as s,D as d,w as r,o as h,E as I,d as u,t as k,G as w,a as _,y as E,H as M,s as C,v as g,I as B,u as D}from"./entry.d8fda07f.js";import{u as N}from"./noteStore.19f8a628.js";import{_ as $,a as R}from"./TextInput.vue.90f81cb7.js";import{_ as S}from"./MultilineInput.vue.14661b2b.js";const T={class:"inline-block"},V=f({__name:"DeleteNote",props:{note:{}},setup(i){const n=i,a=N(),l=y(),e=x(!1),c=()=>e.value=!0,t=()=>e.value=!1;function p(){a.removeNote(n.note.id),l.push({path:"/notes"}),t()}return(m,b)=>(h(),v("div",T,[o(d,{icon:s(I),onClick:c,class:"text-error btn-ghost"},null,8,["icon"]),o($,{"is-opened":s(e),onClose:t},{title:r(()=>[u(' Are you sure you want to remove note "'+k(n.note.title)+'" ? ',1)]),actions:r(()=>[o(d,{class:"btn-error",onClick:t},{default:r(()=>[u("No")]),_:1}),o(d,{class:"btn-success ml-2",onClick:p},{default:r(()=>[u("Yes")]),_:1})]),_:1},8,["is-opened"])]))}}),A={class:"inline-block"},H=f({__name:"EditNote",props:{note:{}},setup(i){const n=i,a=N(),l=x(!1),e=x(n.note.title),c=()=>l.value=!0,t=()=>l.value=!1,p=b=>e.value=b;function m(){a.editNote(n.note.id,e.value,n.note.text),t()}return(b,P)=>(h(),v("div",A,[o(d,{icon:s(w),onClick:c,class:"text-info btn-ghost"},null,8,["icon"]),o($,{"is-opened":s(l),onClose:t},{title:r(()=>[u('Edit note "'+k(n.note.title)+'"',1)]),default:r(()=>[_("div",null,[o(R,{label:"Note name",value:s(e),placeholder:"Enter name...","input-class":"border-neutral",onInput:p},null,8,["value"])])]),actions:r(()=>[o(d,{class:"btn-success",onClick:m},{default:r(()=>[u("Save")]),_:1})]),_:1},8,["is-opened"])]))}}),O=f({__name:"Note",props:{note:{}},setup(i){const n=i,{note:a}=E(n),l=N();function e(t){console.log(t),l.editNote(a.value.id,a.value.title,t)}const c=M.debounce(e,2e3);return(t,p)=>{const m=S;return h(),v("div",{class:C(("mergeClasses"in t?t.mergeClasses:s(g))("flex","flex-col","flex-nowrap","gap-y-2"))},[u(" tags "),o(m,{value:s(a).text,placeholder:"Write here...",onInput:s(c),class:C(("mergeClasses"in t?t.mergeClasses:s(g))("textarea","textarea-md","bg-base-200","shadow-md"))},null,8,["value","onInput","class"])],2)}}}),j={class:"prose mx-auto"},z={class:"text-center text-neutral-focus mb-0 mr-2"},G={class:"inline-block ml-2"},F=f({__name:"index",setup(i){const n=B(),a=N(),l=Number(n.params.id),e=a.getNote(l);return D({title:`Notes - ${e.title}`}),(c,t)=>(h(),v("div",j,[_("div",{class:C(("mergeClasses"in c?c.mergeClasses:s(g))("flex","flex-wrap","justify-center","items-center","mb-6"))},[_("h1",z,k(s(e).title),1),_("div",G,[o(H,{note:s(e)},null,8,["note"]),o(V,{note:s(e)},null,8,["note"])])],2),o(O,{note:s(e)},null,8,["note"])]))}});export{F as default};
