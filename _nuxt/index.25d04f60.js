import{g as b,D as w,x as D,B as L,h as f,o as p,c as g,q as j,r as U,a as _,t as M,s as H,v as K,b as v,u as q,E as z,w as G}from"./entry.86fd7d37.js";import{_ as X,d as Q}from"./Input.vue.e6e4e005.js";import{c as Y,d as Z,e as ee,p as te,i as ne,f as $,b as re}from"./isNaN.8d5077d2.js";import{_ as se}from"./MultilineField.vue.225d9f8a.js";import{P as ae}from"./PageHeading.6605ef2f.js";var ie="[object Symbol]";function oe(e){return typeof e=="symbol"||Y(e)&&Z(e)==ie}var ue=/\s/;function ce(e){for(var t=e.length;t--&&ue.test(e.charAt(t)););return t}var le=/^\s+/;function fe(e){return e&&e.slice(0,ce(e)+1).replace(le,"")}function C(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var B=0/0,de=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,ye=parseInt;function N(e){if(typeof e=="number")return e;if(oe(e))return B;if(C(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=C(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=fe(e);var n=me.test(e);return n||pe.test(e)?ye(e.slice(2),n?2:8):de.test(e)?B:+e}var _e=function(){return ee.Date.now()};const S=_e;var ve="Expected a function",ge=Math.max,he=Math.min;function be(e,t,n){var s,o,u,c,r,a,l=0,d=!1,y=!1,I=!0;if(typeof e!="function")throw new TypeError(ve);t=N(t)||0,C(n)&&(d=!!n.leading,y="maxWait"in n,u=y?ge(N(n.maxWait)||0,t):u,I="trailing"in n?!!n.trailing:I);function T(i){var m=s,h=o;return s=o=void 0,l=i,c=e.apply(h,m),c}function F(i){return l=i,r=setTimeout(E,t),d?T(i):c}function P(i){var m=i-a,h=i-l,A=t-m;return y?he(A,u-h):A}function W(i){var m=i-a,h=i-l;return a===void 0||m>=t||m<0||y&&h>=u}function E(){var i=S();if(W(i))return O(i);r=setTimeout(E,P(i))}function O(i){return r=void 0,I&&s?T(i):(s=o=void 0,c)}function R(){r!==void 0&&clearTimeout(r),l=0,s=a=o=r=void 0}function V(){return r===void 0?c:O(S())}function k(){var i=S(),m=W(i);if(s=arguments,o=this,a=i,m){if(r===void 0)return F(a);if(y)return clearTimeout(r),r=setTimeout(E,t),T(a)}return r===void 0&&(r=setTimeout(E,t)),c}return k.cancel=R,k.flush=V,k}const Ee=b({__name:"DateSelector",props:{value:{},label:{}},emits:["input"],setup(e,{emit:t}){const n=e,{value:s}=w(n),o=D(()=>$(s.value,"yyyy-MM-dd"));function u(c){var l;const r=(l=c.target)==null?void 0:l.value,a=te(r,"yyyy-MM-dd",new Date);ne(a.valueOf())||t("input",a)}return(c,r)=>(p(),L(X,{label:n.label,type:"date",pattern:"\\d{4}-\\d{2}-\\d{2}",onChange:u,value:f(o)},null,8,["label","value"]))}}),xe=["onClick"],$e=b({__name:"DayOfWeekSelector",props:{value:{}},emits:["input"],setup(e,{emit:t}){const n=e,s=["M","T","W","T","F","S","S"],{value:o}=w(n),u=D(()=>(o.value.getDay()+6)%7);function c(r){const a=re(o.value,r-u.value);t("input",a)}return(r,a)=>(p(),g("div",null,[(p(),g(j,null,U(s,(l,d)=>_("button",{class:H(("mergeClasses"in r?r.mergeClasses:f(K))("btn","btn-circle","btn-outline","btn-sm","btn-primary","mx-1",d==f(u)?"btn-active":void 0)),onClick:()=>c(d)},M(l),11,xe)),64))]))}}),x=e=>$(e,"yyyy-MM-dd"),we=Q("journal",{state:()=>({entries:new Map}),actions:{getEntries(e){return this.entries.get(x(e))},newEntry(e,t){const n=x(e);this.entries.has(n)||this.entries.set(n,[]),this.entries.get(n).push(t)},editEntry(e,t,n){const s=this.entries.get(x(e));if(!s)throw new Error(`[Journal] Key ${e} not found`);if(s[t]===void 0)throw new Error(`[Journal] Index ${t} out of range for key ${e}`);s.splice(t,1,n)},removeEntry(e,t){const n=this.entries.get(x(e));if(!n)throw new Error(`[Journal] Key ${e} not found`);if(n[t]===void 0)throw new Error(`[Journal] Index ${t} out of range for key ${e}`);n.splice(t,1)}}}),Ie={class:"m-0"},J=b({__name:"Entry",props:{entry:{}},emits:["update:entry"],setup(e,{emit:t}){const n=e,{entry:s}=w(n),o=be(u=>{t("update:entry",u.trim())},2e3);return(u,c)=>(p(),g("li",Ie,[v(se,{value:f(s),placeholder:"Write here...",onInput:f(o),class:"w-full"},null,8,["value","onInput"])]))}}),Te={class:"list-disc marker:text-primary-focus pl-8"},ke=b({__name:"EntryList",props:{date:{}},setup(e){const t=e,{date:n}=w(t),s=we(),o=D(()=>s.getEntries(n.value));function u(r,a){a?s.editEntry(n.value,r,a):s.removeEntry(n.value,r)}function c(r){r&&s.newEntry(n.value,r)}return(r,a)=>(p(),g("ul",Te,[(p(!0),g(j,null,U(f(o),(l,d)=>(p(),L(J,{entry:l,"onUpdate:entry":y=>u(d,y),key:`entry-${d}`},null,8,["entry","onUpdate:entry"]))),128)),v(J,{entry:"","onUpdate:entry":a[0]||(a[0]=l=>c(l))})]))}}),Se=_("span",{class:"text-primary-focus"},"Journal",-1),Me={class:"flex flex-wrap justify-center my-4 gap-2"},Ce={class:"text-primary-focus text-xl font-bold"},De={class:"text-primary-focus text-2xl font-extrabold"},Je=b({__name:"index",setup(e){q({title:"Journal"});const t=z(new Date);function n(s){t.value=s}return(s,o)=>(p(),g("div",null,[v(ae,null,{default:G(()=>[Se]),_:1}),_("div",Me,[_("div",null,[v(Ee,{value:f(t),onInput:n,class:"input-primary input-sm"},null,8,["value"])]),v($e,{value:f(t),onInput:n},null,8,["value"])]),_("h3",Ce,M(f($)(f(t),"MMM d")),1),_("h2",De,M(f($)(f(t),"EEEE")),1),v(ke,{date:f(t),class:"mt-4"},null,8,["date"])]))}});export{Je as default};
