import{g as v,bW as T,x as g,o as _,c as b,b as s,h as e,bX as w,E as m,w as c,d as p,t as x,bY as B,a as h,K as R,C as S,S as P,v as U,n as k,m as y,c3 as A,u as D,l as H,q as O,c6 as W}from"./entry.5564aef3.js";import{_ as Y}from"./Tag.4288d6f9.js";import{_ as q}from"./Background.vue.80994d97.js";import{P as z}from"./PageHeading.25c30acd.js";import{u as N}from"./noteStore.4eda29e2.js";import{_ as I}from"./Dialog.vue.f18504cd.js";import{_ as F}from"./InputAlt.vue.c3982aa6.js";import{_ as K}from"./TagSelecter.vue.6c69c335.js";import{_ as L}from"./TextInput.vue.a9b1644e.js";import{_ as X}from"./MultilineField.vue.5a4a5fae.js";import"./Input.vue.690f6cc6.js";const j={class:"inline-block"},G=v({__name:"DeleteNote",props:{note:{}},setup(i){const a=i,l=N(),r=T(),t=g(!1),n=()=>t.value=!0,o=()=>t.value=!1;function u(){l.removeNote(a.note.id),r.push({path:"/notes"}),o()}return(d,C)=>(_(),b("div",j,[s(m,{icon:e(w),onClick:n,class:"text-error btn-ghost"},null,8,["icon"]),s(I,{"is-opened":e(t),onClose:o},{title:c(()=>[p(' Are you sure you want to remove note "'+x(a.note.title)+'" ? ',1)]),actions:c(()=>[s(m,{class:"btn-error",onClick:o},{default:c(()=>[p("No")]),_:1}),s(m,{class:"btn-success ml-2",onClick:u},{default:c(()=>[p("Yes")]),_:1})]),_:1},8,["is-opened"])]))}}),J={class:"inline-block"},Q={class:"form-control gap-y-2"},Z=v({__name:"EditNote",props:{note:{}},setup(i){const a=i,l=N(),r=l.tagArray,t=g(!1),n=g(a.note.title),o=g(a.note.tagId),u=()=>t.value=!0,d=()=>t.value=!1,C=f=>n.value=f,V=f=>o.value=f;function E(){l.editNote(a.note.id,n.value,a.note.text,o.value),d()}return(f,$)=>(_(),b("div",J,[s(m,{icon:e(B),onClick:u,class:"text-info btn-ghost"},null,8,["icon"]),s(I,{"is-opened":e(t),onClose:d},{title:c(()=>[p('Edit note "'+x(a.note.title)+'"',1)]),default:c(()=>[h("div",Q,[s(F,{type:"text",label:"NoteName",placeholder:"Enter name...",modelValue:e(n),"onUpdate:modelValue":$[0]||($[0]=M=>R(n)?n.value=M:null),icon:e(S)},null,8,["modelValue","icon"]),s(L,{label:"Note name",value:e(n),placeholder:"Enter name...","input-class":"border-primary",onInput:C},null,8,["value"]),s(K,{tags:e(r),selected:e(o),"onUpdate:selected":V},null,8,["tags","selected"])])]),actions:c(()=>[s(m,{class:"btn-success",onClick:E},{default:c(()=>[p("Save")]),_:1})]),_:1},8,["is-opened"])]))}}),ee=v({__name:"Note",props:{note:{}},setup(i){const a=i,{note:l}=P(a),r=N();function t(o){console.log(o),r.editNote(l.value.id,l.value.title,o,l.value.tagId)}const n=U.debounce(t,2e3);return(o,u)=>{const d=X;return _(),b("div",{class:k(("mergeClasses"in o?o.mergeClasses:e(y))("flex","flex-col","flex-nowrap","gap-y-2"))},[s(d,{value:e(l).text,placeholder:"Write here...",onInput:e(n),class:k(("mergeClasses"in o?o.mergeClasses:e(y))("textarea","textarea-md","bg-base-200","shadow-md"))},null,8,["value","onInput","class"])],2)}}}),te={class:"mx-2"},oe={class:"inline-block"},_e=v({__name:"index",setup(i){const a=A(),l=N(),r=Number(a.params.id),t=l.getNote(r),n=l.tags.get(t.tagId);return D({title:`Notes - ${t.title}`}),(o,u)=>(_(),b("div",null,[s(z,null,{prepend:c(()=>[e(n)?(_(),H(Y,{key:0,text:e(n).title,color:e(n).color,icon:e(n).icon},null,8,["text","color","icon"])):O("",!0)]),append:c(()=>[h("div",oe,[s(Z,{note:e(t)},null,8,["note"]),s(G,{note:e(t)},null,8,["note"])])]),default:c(()=>[h("span",te,x(e(t).title),1)]),_:1}),s(q,{icon:e(W)},null,8,["icon"]),s(ee,{note:e(t)},null,8,["note"])]))}});export{_e as default};
