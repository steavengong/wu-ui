import{o as t,c as e,w as o,d as l,a as s,b as u,i as a,h as c}from"./index-11e68488.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const n=d({data:()=>({text1:"长按文本，上方提示",text2:"长按文本，下方提示",text3:"显示多个扩展按钮",text4:"自动调整气泡位置",text5:"长按文本，显示背景色",buttons1:["扩展"],buttons2:["扩展","搜索","翻译"],buttons3:["扩展","搜索","翻译"]}),onLoad(){},methods:{click(t){console.log("index",t)}}},[["render",function(d,n,_,b,x,m){const f=a,i=c("u-tooltip"),k=l;return t(),e(k,{class:"wu-page"},{default:o(()=>[s(k,{class:"wu-demo-block"},{default:o(()=>[s(f,{class:"wu-demo-block__title"},{default:o(()=>[u("基础使用")]),_:1}),s(k,{class:"wu-demo-block__content"},{default:o(()=>[s(i,{text:x.text1,overlay:""},null,8,["text"])]),_:1})]),_:1}),s(k,{class:"wu-demo-block"},{default:o(()=>[s(f,{class:"wu-demo-block__title"},{default:o(()=>[u("下方显示")]),_:1}),s(k,{class:"wu-demo-block__content",style:{"padding-bottom":"30px"}},{default:o(()=>[s(i,{text:x.text2,direction:"bottom"},null,8,["text"])]),_:1})]),_:1}),s(k,{class:"wu-demo-block"},{default:o(()=>[s(f,{class:"wu-demo-block__title"},{default:o(()=>[u("扩展按钮")]),_:1}),s(k,{class:"wu-demo-block__content"},{default:o(()=>[s(i,{text:x.text3,buttons:x.buttons1,onClick:m.click},null,8,["text","buttons","onClick"])]),_:1})]),_:1}),s(k,{class:"wu-demo-block"},{default:o(()=>[s(f,{class:"wu-demo-block__title"},{default:o(()=>[u("自动调整位置")]),_:1}),s(k,{class:"wu-demo-block__content"},{default:o(()=>[s(i,{text:x.text4,buttons:x.buttons2},null,8,["text","buttons"])]),_:1})]),_:1}),s(k,{class:"wu-demo-block"},{default:o(()=>[s(f,{class:"wu-demo-block__title"},{default:o(()=>[u("高亮选中文本背景色")]),_:1}),s(k,{class:"wu-demo-block__content"},{default:o(()=>[s(i,{text:x.text5,buttons:x.buttons3,bgColor:"#e3e4e6"},null,8,["text","buttons"])]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-a00ab8d7"]]);export{n as default};