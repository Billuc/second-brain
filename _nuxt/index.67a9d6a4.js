import{g as r,o as c,c as i,a,t as h,b as t,h as e,i as u,F as o,j as _,k as p,l as x,m as g,n as f,q as b,r as C,s as k,v as y,u as v}from"./entry.d1dc53c0.js";const j=["data-set-theme","data-theme"],N={class:"my-1"},z={class:"join"},$=r({__name:"ThemeDisplay",props:{themeName:{}},setup(l){const s=l;return(n,d)=>(c(),i("button",{"data-key":"theme","data-set-theme":s.themeName,"data-theme":s.themeName,"data-act-class":"outline",class:"rounded-md p-2"},[a("div",N,h(s.themeName),1),a("div",z,[t(e(o),{icon:e(u),class:"btn btn-xs text-primary join-item",size:"xs"},null,8,["icon"]),t(e(o),{icon:e(_),class:"btn btn-xs text-secondary join-item",size:"xs"},null,8,["icon"]),t(e(o),{icon:e(p),class:"btn btn-xs text-accent join-item",size:"xs"},null,8,["icon"]),t(e(o),{icon:e(x),class:"btn btn-xs text-neutral join-item",size:"xs"},null,8,["icon"])])],8,j))}}),B=a("h2",null,"Theme",-1),F=r({__name:"ThemeSelector",setup(l){const s=["light","dark","synthwave","pastel","retro","cyberpunk","valentine","cupcake"];return g(()=>f.themeChange(!1)),(n,d)=>(c(),i("div",null,[B,a("div",{class:k(("mergeClasses"in n?n.mergeClasses:e(y))("grid","grid-cols-2","md:grid-cols-3","gap-2"))},[(c(),i(b,null,C(s,m=>t($,{"theme-name":m,key:"select-"+m},null,8,["theme-name"])),64))],2)]))}}),S={class:"prose mx-auto"},T=a("h1",{class:"text-center"},"Configuration",-1),w=r({__name:"index",setup(l){return v({title:"Configuration"}),(s,n)=>(c(),i("div",S,[T,t(F)]))}});export{w as default};
