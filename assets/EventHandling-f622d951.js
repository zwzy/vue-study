import{d as k,A as C,a as d,b as $,e as l,w as r,o as _,g as n,j as p,k as v,p as g,i as x,_ as y}from"./index-db4974e2.js";const u=a=>(g("data-v-fb4acf76"),a=a(),x(),a),S={class:"event-handling-page"},b=u(()=>n("div",{class:"inner scroll-inner"}," 内部 ",-1)),E=[b],I=u(()=>n("div",{class:"inner scroll-inner"}," 内部 ",-1)),A=[I],B=k({__name:"EventHandling",setup(a){const{message:w}=C.useApp(),t=o=>{w.success(o)},c=o=>{console.log("normal",o.target.scrollTop)},f=o=>{console.log("passive",o.target.scrollTop)};return(o,e)=>{const i=d("a-card"),m=d("a-flex");return _(),$("div",S,[l(m,{gap:"middle",wrap:"wrap"},{default:r(()=>[l(i,{title:"1、event normal"},{default:r(()=>[n("div",{onClick:e[1]||(e[1]=s=>t("wrap")),class:"wrapper"},[n("div",{onClick:e[0]||(e[0]=s=>t("inner")),class:"inner"}," 内部 ")])]),_:1}),l(i,{title:"2、event inner stop 防止冒泡触发父级事件"},{default:r(()=>[n("div",{onClick:e[3]||(e[3]=s=>t("wrap")),class:"wrapper"},[n("div",{onClick:e[2]||(e[2]=p(s=>t("inner"),["stop"])),class:"inner"}," 内部 ")])]),_:1}),l(i,{title:"3、event wrap self 本身事件才会触发，冒泡来的不触发"},{default:r(()=>[n("div",{onClick:e[5]||(e[5]=p(s=>t("wrap"),["self"])),class:"wrapper"},[n("div",{onClick:e[4]||(e[4]=s=>t("inner")),class:"inner"}," 内部 ")])]),_:1}),l(i,{title:"4、event inner once 只触发一次"},{default:r(()=>[n("div",{onClick:e[7]||(e[7]=s=>t("wrap")),class:"wrapper"},[n("div",{onClickOnce:e[6]||(e[6]=s=>t("inner")),class:"inner"}," 内部 ",32)])]),_:1}),l(i,{title:"5、event wrap capture 打乱冒泡顺序，先执行有capture的事件，都有从外到内事件执行"},{default:r(()=>[n("div",{onClickCapture:e[9]||(e[9]=s=>t("wrap")),class:"wrapper"},[n("div",{onClickCapture:e[8]||(e[8]=s=>t("inner")),class:"inner"}," 内部 ",32)],32)]),_:1}),l(i,{title:"6、event wrap normal"},{default:r(()=>[n("div",{onScroll:c,class:"wrapper scroll-wrapper"},E,32)]),_:1}),l(i,{title:"7、event wrap passive 没看出差别，据说在手机端性能比较好"},{default:r(()=>[n("div",{onScrollPassive:f,class:"wrapper scroll-wrapper"},A,32)]),_:1}),l(i,{title:"8、event inner keyup enter 键盘事件 只有在表单事件中才生效"},{default:r(()=>[n("div",{class:"wrapper",onClick:e[12]||(e[12]=s=>t("wrap"))},[n("input",{onKeyup:e[10]||(e[10]=v(s=>t("inner enter"),["enter"])),class:"inner"},null,32),n("div",{style:{"margin-left":"10px"},onKeyup:e[11]||(e[11]=v(s=>t("inner enter"),["enter"])),class:"inner"}," inner ",32)])]),_:1}),l(i,{title:"9、event inner click middle 鼠标事件 left right middle"},{default:r(()=>[n("div",{class:"wrapper",onClick:e[14]||(e[14]=s=>t("wrap"))},[n("div",{onMouseup:e[13]||(e[13]=p(s=>t("inner middle"),["middle"])),class:"inner"}," enter ",32)])]),_:1}),l(i,{title:"10、event inner click middle + ctrl 鼠标事件"},{default:r(()=>[n("div",{class:"wrapper",onClick:e[16]||(e[16]=s=>t("wrap"))},[n("div",{onMouseup:e[15]||(e[15]=p(s=>t("inner middle + ctrl"),["ctrl","middle"])),class:"inner"}," inner ",32)])]),_:1})]),_:1})])}}});const K=y(B,[["__scopeId","data-v-fb4acf76"]]);export{K as default};
