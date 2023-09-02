var e,t;import{_ as o}from"./wu-loading-icon.f2e2e6ea.js";import{m as a,k as s,E as i,r,o as l,c as n,w as d,a as p,p as u,q as m,e as c,F as g,b as h,t as y,u as f,l as S,i as b,G as x,d as w}from"./index-11e68488.js";import{r as v}from"./uni-app.es.0596e349.js";import{_ as T}from"./wu-icon.d51d82ec.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";const C=z({name:"wu-button",mixins:[a,s,{props:{hairline:{type:Boolean,default:!0},type:{type:String,default:"info"},size:{type:String,default:"normal"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:[String,Number],default:""},loadingMode:{type:String,default:"spinner"},loadingSize:{type:[String,Number],default:14},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!0},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!0},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:0},hoverStartTime:{type:[String,Number],default:0},hoverStayTime:{type:[String,Number],default:200},text:{type:[String,Number],default:""},icon:{type:String,default:""},iconColor:{type:String,default:"#000000"},color:{type:String,default:""},customTextStyle:{type:[Object,String],default:()=>{}},...null==(t=null==(e=uni.$w)?void 0:e.props)?void 0:t.button}}],emits:["click"],data:()=>({}),computed:{bemClass(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor(){return this.plain?this.color?this.color:"#3c9cff":"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor(){let e={};return this.color&&(e.color=this.plain?this.color:"white",this.plain||(e["background-color"]=this.color),-1!==this.color.indexOf("gradient")?this.plain?(e.border="1px solid #000",e.color="#000"):(e.borderTopWidth="0",e.borderRightWidth="0",e.borderBottomWidth="0",e.borderLeftWidth="0",e.backgroundImage=this.color):(e.borderColor=this.color,e.borderWidth="1px",e.borderStyle="solid")),e},nvueTextStyle(){let e={};return"info"===this.type&&(e.color="#323233"),this.color&&(e.color=this.plain?this.color:"white"),e.fontSize=this.textSize+"px",e},textSize(){let e=14,{size:t}=this;return"large"===t&&(e=16),"normal"===t&&(e=14),"small"===t&&(e=12),"mini"===t&&(e=10),e}},methods:{clickHandler(){this.disabled||this.loading||i(()=>{this.$emit("click")},this.throttleTime)}}},[["render",function(e,t,a,s,i,z){const C=v(r("wu-loading-icon"),o),_=b,k=v(r("wu-icon"),T),M=x,N=w;return l(),n(N,{class:"wu-button-wrapper"},{default:d(()=>[p(M,{"hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.disabled||e.loading?"":"wu-button--active",class:u(["wu-button wu-reset-button",z.bemClass]),style:m([z.baseColor,e.$w.addStyle(e.customStyle)]),onClick:z.clickHandler},{default:d(()=>[e.loading?(l(),c(g,{key:0},[p(C,{mode:e.loadingMode,size:1.15*e.loadingSize,color:z.loadingColor},null,8,["mode","size","color"]),p(_,{class:"wu-button__loading-text",style:m([{fontSize:z.textSize+"px"},e.$w.addStyle(e.customTextStyle)])},{default:d(()=>[h(y(e.loadingText||e.text),1)]),_:1},8,["style"])],64)):(l(),c(g,{key:1},[e.icon?(l(),n(k,{key:0,name:e.icon,color:z.iconColorCom,size:1.35*z.textSize,customStyle:{marginRight:"2px"}},null,8,["name","color","size"])):f("",!0),S(e.$slots,"default",{},()=>[p(_,{class:"wu-button__text",style:m([{fontSize:z.textSize+"px"},e.$w.addStyle(e.customTextStyle)])},{default:d(()=>[h(y(e.text),1)]),_:1},8,["style"])],!0)],64))]),_:3},8,["hover-start-time","hover-stay-time","form-type","open-type","app-parameter","hover-stop-propagation","send-message-title","send-message-path","lang","data-name","session-from","send-message-img","show-message-card","hover-class","style","onClick","class"])]),_:3})}],["__scopeId","data-v-51c1312f"]]);export{C as _};