import{_ as f,o as _,h as r,i as s,s as a,b as e,d as u,r as i,a as d,w as t,t as p,p as v,k as $}from"./index-a11568b2.js";const S={},g={class:"slot-child-page"},b={class:"red bold"};function x(o,l){return _(),r("div",g,[s("header",null,[a(o.$slots,"header"),e(" 子组件 具名插槽 childHeader ")]),s("div",b,[a(o.$slots,"default"),e(" 子组件 #name === v-slot:name ")]),s("footer",null,[a(o.$slots,"footer"),e(" 子组件 具名插槽 childFooter ")])])}const y=f(S,[["render",x]]),C={class:"slot-child-page"},I={class:"red bold"},k=19,w="男",B=u({__name:"SlotScope",setup(o){return(l,h)=>(_(),r("div",C,[s("header",null,[a(l.$slots,"header",{age:k})]),s("div",I,[a(l.$slots,"default"),e(" 子组件 #name === v-slot:name ")]),s("footer",null,[a(l.$slots,"footer",{sex:w})])]))}}),N=o=>(v("data-v-6284b929"),o=o(),$(),o),V={class:"slot-page"},H=N(()=>s("div",null,"父组件内的内容被移到子组件slot标签这个位置了",-1)),T=u({__name:"Slot",setup(o){return(l,h)=>{const c=i("a-card"),m=i("a-flex");return _(),r("div",V,[d(m,{gap:"middle"},{default:t(()=>[d(c,{title:"具名插槽与默认插槽"},{default:t(()=>[d(y,null,{header:t(()=>[e("父组件具名插槽header ==> ")]),footer:t(()=>[e("父组件具名插槽footer ==>")]),default:t(()=>[H,e(" 父组件默认插槽default ==> ")]),_:1})]),_:1}),d(c,{title:"作用域插槽"},{default:t(()=>[d(B,null,{header:t(({age:n})=>[e(" >父组件作用域插槽Header需要用到子组件的age: "+p(n),1)]),footer:t(({sex:n})=>[e(" >父组件具名插槽footer 访问子组件的性别为："+p(n),1)]),default:t(()=>[e(' 注意Ts类型 #header="slotProps: any" ')]),_:1})]),_:1})]),_:1})])}}});const E=f(T,[["__scopeId","data-v-6284b929"]]);export{E as default};
