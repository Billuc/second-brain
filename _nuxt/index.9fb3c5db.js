import{g as c,o as l,c as m,b as n,a as s,h as p,d as i,t as r,j as t,w as u,n as x,m as f,u as h}from"./entry.8d6e511b.js";import{_ as v}from"./EntryList.vue.2d8eaeb3.js";import{u as y}from"./eventStore.756cdc1d.js";import{c as g}from"./CalendarEvents.vue.007e8a82.js";import{f as _}from"./index.b79af48e.js";import"./v4.4a60fe23.js";import"./MultilineInput.vue.092be7e4.js";import"./Tag.b6d74425.js";import"./InputField.vue.12b1e093.js";import"./index.6f6f0be5.js";import"./TagSelecter.vue.e982363f.js";const b={class:"card shadow-lg p-1 bg-base-200 min-h-[192px] max-md:max-h-[192px]"},$=s("div",{class:"text-xl font-semibold text-center mb-2"},"Journal",-1),w=c({__name:"HomeJournal",props:{date:{}},setup(a){const e=a;return(o,d)=>(l(),m("div",b,[$,n(v,{date:e.date,class:"overflow-y-auto"},null,8,["date"])]))}}),E={class:"flex-grow p-1 overflow-hidden min-h-[192px] max-md:max-h-[192px]"},C={class:"text-xl font-semibold text-center mb-2"},H={class:"text-primary text-2xl font-bold"},D=c({__name:"HomeEvents",props:{date:{}},setup(a){const e=a,o=y(),d=p(()=>o.getEventsOfDay(e.date).length);return(O,S)=>(l(),m("div",E,[s("div",C,[i(" You have "),s("span",H,r(t(d)),1),i(" event"+r(t(d)<=1?"":"s")+" today ",1)]),n(g,{day:e.date,class:"overflow-y-auto"},{"no-event":u(()=>[i(r(""))]),_:1},8,["day"])]))}}),M={class:"text-center"},V={class:"text-2xl text-secondary font-bold"},B={class:"text-5xl text-secondary font-bold"},N={class:"text-semibold"},j=c({__name:"HomeDateDisplay",props:{date:{}},setup(a){const e=a;return(o,d)=>(l(),m("div",M,[s("div",V,r(t(_)(e.date,"EEEE")),1),s("div",B,r(t(_)(e.date,"do")),1),s("div",N,r(t(_)(e.date,"MMMM yyyy")),1)]))}}),k={class:"flex justify-evenly mb-6"},J=c({__name:"HomeVue",setup(a){const e=new Date;return(o,d)=>(l(),m("div",null,[s("div",k,[n(j,{date:t(e)},null,8,["date"])]),s("div",{class:x(("mergeClasses"in o?o.mergeClasses:t(f))("relative","grid","grid-cols-1","md:grid-cols-3","w-full","mt-4","gap-3","md:min-h-[384px]"))},[n(w,{date:t(e)},null,8,["date"]),n(D,{date:t(e),class:"md:col-span-2"},null,8,["date"])],2)]))}}),Q=c({__name:"index",setup(a){return h({title:"Home"}),(e,o)=>(l(),m("div",null,[n(J)]))}});export{Q as default};
