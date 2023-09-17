import{g as b,x as H,o as u,c as f,a as h,t as x,h as c,b as v,y as ne,z as B,A as ae,q as L,r as Y,B as M,w as g,d as S,s as k,v as E,C as se,D as G,E as w,G as le,H as J,I as oe,J as re,F as ie,S as ce,K as de,u as ue}from"./entry.416ca34c.js";import{P as ve}from"./PageHeading.1842734e.js";import{r as D,t as y,a as P,g as U,f as $,b as pe,p as Q,i as me}from"./isNaN.8d5077d2.js";import{d as fe,_ as X}from"./Input.vue.d1de34fc.js";import{_ as Z,a as ee}from"./TextInput.vue.29140d61.js";function j(n,e){D(2,arguments);var t=y(n),a=P(e);if(isNaN(a))return new Date(NaN);if(!a)return t;var r=t.getDate(),s=new Date(t.getTime());s.setMonth(t.getMonth()+a+1,0);var l=s.getDate();return r>=l?s:(t.setFullYear(s.getFullYear(),s.getMonth(),r),t)}function R(n,e){var t,a,r,s,l,i,o,d;D(1,arguments);var p=U(),_=P((t=(a=(r=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(l=e.locale)===null||l===void 0||(i=l.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&r!==void 0?r:p.weekStartsOn)!==null&&a!==void 0?a:(o=p.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&t!==void 0?t:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=y(n),C=m.getDay(),I=(C<_?7:0)+C-_;return m.setDate(m.getDate()-I),m.setHours(0,0,0,0),m}function A(n){D(1,arguments);var e=y(n);return e.setHours(0,0,0,0),e}function _e(n,e){D(2,arguments);var t=A(n),a=A(e);return t.getTime()===a.getTime()}function ge(n){D(1,arguments);var e=y(n);return e.setHours(23,59,59,999),e}function F(n,e){var t;D(1,arguments);var a=n||{},r=y(a.start),s=y(a.end),l=s.getTime();if(!(r.getTime()<=l))throw new RangeError("Invalid interval");var i=[],o=r;o.setHours(0,0,0,0);var d=Number((t=e==null?void 0:e.step)!==null&&t!==void 0?t:1);if(d<1||isNaN(d))throw new RangeError("`options.step` must be a number greater than 1");for(;o.getTime()<=l;)i.push(y(o)),o.setDate(o.getDate()+d),o.setHours(0,0,0,0);return i}function he(n){D(1,arguments);var e=y(n);return e.setDate(1),e.setHours(0,0,0,0),e}function ye(n){D(1,arguments);var e=y(n),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(0,0,0,0),e}function be(n,e){D(2,arguments);var t=y(n),a=y(e);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function we(n,e){var t,a,r,s,l,i,o,d;D(1,arguments);var p=U(),_=P((t=(a=(r=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(l=e.locale)===null||l===void 0||(i=l.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&r!==void 0?r:p.weekStartsOn)!==null&&a!==void 0?a:(o=p.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&t!==void 0?t:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var m=y(n),C=m.getDay(),I=(C<_?-7:0)+6-(C-_);return m.setHours(0,0,0,0),m.setDate(m.getDate()+I),m}const De={class:"px-4 flex items-center justify-between"},Ce={tabindex:"0",class:"text-base font-bold"},Ee={class:"flex items-center gap-x-2"},Oe=b({__name:"CalendarHeader",props:{date:{}},emits:["nextMonth","previousMonth"],setup(n,{emit:e}){const t=n,a=H(()=>$(t.date,"MMMM yyyy")),r=()=>e("nextMonth"),s=()=>e("previousMonth");return(l,i)=>(u(),f("div",De,[h("span",Ce,x(c(a)),1),h("div",Ee,[v(B,{icon:c(ne),onClick:s,class:"btn-circle btn-xs btn-primary"},null,8,["icon"]),v(B,{icon:c(ae),onClick:r,class:"btn-circle btn-xs btn-primary"},null,8,["icon"])])]))}}),ke={class:"text-base font-medium text-center"},xe=b({__name:"CalendarMonthView",props:{date:{}},emits:["selectDate"],setup(n,{emit:e}){const t=n,a=F({start:R(t.date,{weekStartsOn:1}),end:pe(R(t.date,{weekStartsOn:1}),6)}).map(l=>$(l,"EEE")),r=H(()=>F({start:R(he(t.date),{weekStartsOn:1}),end:we(ye(t.date),{weekStartsOn:1})})),s=l=>e("selectDate",l);return(l,i)=>(u(),f("div",{class:k(("mergeClasses"in l?l.mergeClasses:c(E))("grid","grid-cols-7","gap-y-1"))},[(u(!0),f(L,null,Y(c(a),o=>(u(),f("div",ke,x(o),1))),256)),(u(!0),f(L,null,Y(c(r),o=>(u(),M(B,{onClick:()=>s(o),class:k(("mergeClasses"in l?l.mergeClasses:c(E))("btn-circle",c(be)(o,t.date)?void 0:"opacity-50",c(_e)(o,t.date)?"bg-accent":"btn-ghost"))},{default:g(()=>[S(x(o.getDate()),1)]),_:2},1032,["onClick","class"]))),256))],2))}}),N=n=>$(n,"yyyy-MM-dd HH:mm"),T=n=>Q(n,"yyyy-MM-dd HH:mm",new Date),W=fe("events",{state:()=>({events:new Map,nextEventId:0}),actions:{getEventsOfDay(n){return[...this.events.values()].filter(e=>A(T(e.start))<=n&&ge(T(e.end??e.start))>=n).map(e=>({id:e.id,description:e.description,frequency:e.frequency,start:T(e.start),title:e.title,end:e.end?T(e.end):void 0}))},newEvent(n){const e={id:this.nextEventId,title:n.title,description:n.description,frequency:n.frequency,start:N(n.start),end:n.end?N(n.end):void 0};this.events.set(this.nextEventId,e),this.nextEventId++},editEvent(n,e){const t=this.events.get(n);if(!t)throw new Error(`[Events] Key ${n} not found`);const a={id:n,title:e.title??t.title,description:e.description??t.description,frequency:e.frequency??t.frequency,start:e.start?N(e.start):t.start,end:e.end?N(e.end):t.end};this.events.set(n,a)},removeEvent(n){if(!this.events.delete(n))throw new Error(`[Events] Key ${n} not found`)}}}),$e={class:"text-xs font-light leading-3"},Me={class:"focus:outline-none text-lg font-medium leading-5"},Se={key:0,class:"text-sm"},He=b({__name:"CalendarEvent",props:{start:{},end:{},title:{},description:{}},setup(n){const e=n,t=H(()=>{if(!e.start&&!e.end)return"Whole day";if(e.start&&!e.end)return $(e.start,"H:mm");if(e.start&&e.end)return`${$(e.start,"H:mm")} - ${$(e.end,"H:mm")}`});return(a,r)=>(u(),f("div",{class:k(("mergeClasses"in a?a.mergeClasses:c(E))("border-b","last-of-type:border-b-0","p-2","border-base-300","border-dashed","hover:bg-secondary-focus","cursor-pointer"))},[h("p",$e,x(c(t)),1),h("p",Me,x(e.title),1),e.description?(u(),f("p",Se,x(e.description),1)):se("",!0)],2))}});var z=(n=>(n[n.Once=0]="Once",n[n.Daily=1]="Daily",n[n.Weekly=2]="Weekly",n[n.Monthly=3]="Monthly",n[n.Yearly=4]="Yearly",n))(z||{});const V=b({__name:"DateTimeSelector",props:{value:{},label:{},clearable:{type:Boolean}},emits:["input"],setup(n,{emit:e}){const t=n,{value:a}=G(t),r=H(()=>a.value?$(a.value,"yyyy-MM-dd'T'HH:mm"):"");function s(i){var p;const o=(p=i.target)==null?void 0:p.value,d=Q(o,"yyyy-MM-dd'T'HH:mm",new Date);me(d.valueOf())||e("input",d)}const l=()=>e("input",null);return(i,o)=>(u(),M(X,{label:t.label,type:"datetime-local",pattern:"\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}",clearable:t.clearable,value:c(r),onChange:s,onClear:l},null,8,["label","clearable","value"]))}}),Ie=b({__name:"MultilineInput",props:{label:{},value:{},placeholder:{},class:{},clearable:{type:Boolean}},emits:["input"],setup(n,{emit:e}){const t=n,{value:a}=G(t),r=w(null),s=i=>e("input",i.target.value),l=i=>e("input",null);return le([a],()=>{let o=20+(a.value.match(/\n/g)||[]).length*20;const d=r.value;d.style.height=o+"px"}),(i,o)=>(u(),M(X,{class:k(("mergeClasses"in i?i.mergeClasses:c(E))("h-fit","min-h-[3rem]",t.class)),type:"text",label:t.label,clearable:t.clearable,placeholder:t.placeholder,value:t.value,onClear:l},{input:g(d=>[h("textarea",J(d,{class:("mergeClasses"in i?i.mergeClasses:c(E))("focus:outline-none","flex-grow","leading-5","resize-none","py-1","box-content"),onInput:s,rows:"1",ref_key:"textarea",ref:r}),null,16)]),_:1},8,["class","label","clearable","placeholder","value"]))}}),Be={class:"form-control my-4 gap-y-2"},Ne={class:"flex flex-nowrap gap-2"},Te=b({__name:"EditEvent",props:{event:{}},emits:["close"],setup(n,{emit:e}){const t=n,a=W(),r=H(()=>!!t.event),s=w(""),l=w(new Date),i=w(null),o=w(""),d=O=>s.value=O,p=O=>l.value=O,_=O=>i.value=O,m=O=>o.value=O??"",C=()=>e("close"),I=()=>{t.event&&(a.editEvent(t.event.id,{title:s.value,description:"",frequency:z.Once,start:l.value,end:void 0}),C())},te=()=>{t.event&&(a.removeEvent(t.event.id),C())};return oe(()=>{t.event?(s.value=t.event.title,l.value=t.event.start,i.value=t.event.end??null,o.value=t.event.description):(s.value="",l.value=new Date,i.value=new Date,o.value="")}),(O,qe)=>{const K=B;return u(),M(ee,{"is-opened":c(r),onClose:C},{title:g(()=>{var q;return[S("Update event '"+x((q=t.event)==null?void 0:q.title)+"'",1)]}),default:g(()=>[h("div",Be,[v(Z,{label:"Event name",placeholder:"Enter name...",value:c(s),onInput:d},null,8,["value"]),h("div",Ne,[v(V,{value:c(l),onInput:p,label:"Start of event"},null,8,["value"]),v(V,{value:c(i),onInput:_,label:"End of event",clearable:""},null,8,["value"])]),v(Ie,{label:"Description (optional)",placeholder:"Enter description... (optional)",value:c(o),onInput:m,clearable:""},null,8,["value"])])]),actions:g(()=>[v(K,{class:"btn-error ml-2",onClick:te},{default:g(()=>[S("Delete")]),_:1}),v(K,{class:"btn-success ml-2",onClick:I},{default:g(()=>[S("Save")]),_:1})]),_:1},8,["is-opened"])}}}),Le={key:1,class:"text-center font-light"},Re=b({__name:"CalendarEvents",props:{date:{}},setup(n){const e=n,t=W(),a=H(()=>re.sortBy(t.getEventsOfDay(e.date),l=>l.start)),r=w(null),s=l=>r.value=l;return(l,i)=>(u(),f("div",null,[c(a).length>0?(u(),f(L,{key:0},[(u(!0),f(L,null,Y(c(a),o=>(u(),M(He,J({key:"event-"+o.id},o,{onClick:d=>s(o)}),null,16,["onClick"]))),128)),v(Te,{event:c(r),onClose:i[0]||(i[0]=()=>s(null))},null,8,["event"])],64)):(u(),f("div",Le,"No event for this day..."))]))}}),Ye=["disabled"],Ae=b({__name:"FABButton",props:{disabled:{type:Boolean},loading:{type:Boolean},icon:{}},emits:["click"],setup(n,{emit:e}){const t=n;function a(){t.loading||t.disabled||e("click")}return(r,s)=>(u(),f("button",{onClick:a,class:k(("mergeClasses"in r?r.mergeClasses:c(E))("btn","btn-circle","absolute","transition-colors","duration-300")),disabled:t.disabled},[t.loading?(u(),M(ce,{key:0})):(u(),M(c(ie),{key:1,icon:t.icon},null,8,["icon"]))],10,Ye))}}),Ve={class:"form-control gap-y-2"},Pe=b({__name:"CreateEvent",setup(n){const e=W(),t=w(!1),a=w(""),r=w(new Date),s=()=>t.value=!0,l=()=>t.value=!1,i=p=>a.value=p,o=p=>r.value=p,d=()=>{e.newEvent({title:a.value,description:"",frequency:z.Once,start:r.value,end:void 0}),l()};return(p,_)=>{const m=B;return u(),f("div",null,[v(Ae,{icon:c(de),class:"absolute -bottom-4 right-4 shadow-md",onClick:s},null,8,["icon"]),v(ee,{"is-opened":c(t),onClose:l},{title:g(()=>[S("Create a new event")]),default:g(()=>[h("div",Ve,[v(Z,{label:"Event name",placeholder:"Enter name...",value:c(a),onInput:i},null,8,["value"]),v(V,{value:c(r),onInput:o,label:"Start of event"},null,8,["value"])])]),actions:g(()=>[v(m,{class:"btn-success",onClick:d},{default:g(()=>[S("Create")]),_:1})]),_:1},8,["is-opened"])])}}}),We={class:"px-4 py-4 md:px-8 md:py-6"},ze=b({__name:"Calendar",setup(n){const e=w(new Date),t=()=>e.value=j(e.value,-1),a=()=>e.value=j(e.value,1),r=s=>e.value=s;return(s,l)=>(u(),f("div",{class:k(("mergeClasses"in s?s.mergeClasses:c(E))("relative","max-w-sm","md:max-w-md"))},[h("div",{class:k(("mergeClasses"in s?s.mergeClasses:c(E))("card","bg-primary","text-primary-content","shadow-xl","overflow-hidden"))},[h("div",We,[v(Oe,{date:c(e),onPreviousMonth:t,onNextMonth:a,class:"px-4"},null,8,["date"]),v(xe,{date:c(e),class:"pt-4",onSelectDate:r},null,8,["date"])]),h("div",{class:k(("mergeClasses"in s?s.mergeClasses:c(E))("bg-secondary","text-secondary-content","px-6","py-4","md:px-14","md:py-6"))},[v(Re,{date:c(e)},null,8,["date"])],2)],2),v(Pe)],2))}}),Ke=h("span",{class:"text-primary"},"Events",-1),Qe=b({__name:"index",setup(n){return ue({title:"Events"}),(e,t)=>(u(),f("div",null,[v(ve,null,{default:g(()=>[Ke]),_:1}),v(ze,{class:"mx-auto"})]))}});export{Qe as default};
