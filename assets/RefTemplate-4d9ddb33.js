import{d as u,f as c,q as g,r as s,o as v,h,a as t,w as o,i as d,b as x,j as y,_ as R}from"./index-b23b64a1.js";const k={class:"ref-template-page"},C=u({__name:"RefTemplate",setup(b){const n=c(null);g(()=>{var e;console.log((e=n.value)==null?void 0:e.offsetHeight)});const a=c(90),f=e=>{console.log("dom更新触发",e==null?void 0:e.offsetHeight)},i=()=>{a.value=a.value===90?180:90};return(e,l)=>{const _=s("a-card"),r=s("a-button"),p=s("a-flex");return v(),h("div",k,[t(p,{gap:"middle"},{default:o(()=>[t(_,{title:"1、dom绑定"},{default:o(()=>[d("div",{ref_key:"getDivRef",ref:n,class:"dom1"},null,512)]),_:1}),t(_,{title:"2、dom更新会实时调绑定函数"},{default:o(()=>[d("div",{ref:m=>f(m),class:"dom2",style:y({height:a.value+"px"})},[t(r,{type:"primary",onClick:l[0]||(l[0]=()=>i())},{default:o(()=>[x("change height")]),_:1})],4)]),_:1})]),_:1})])}}});const B=R(C,[["__scopeId","data-v-7191614d"]]);export{B as default};