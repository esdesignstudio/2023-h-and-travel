import{_ as D,a as N,b as S,c as T,d as V,e as x,f as A,g as L}from"./titleBigImg.e43aed39.js";import{_ as E,a as I}from"./titleDouble.69d733da.js";import{_ as P}from"./index.7951914b.js";import{w as R,a as H,k as K,f as s,i as O,h as d,u as r,F as U,r as j,l as q,o as e,c as t,m as _,p as z}from"./entry.e7f7e34d.js";import"./nuxt-icon.vue.5c22dab0.js";import"./nuxt-link.657e1729.js";const G={class:"page-index"},J={class:"page-index__kv"},_a={__name:"index",async setup(M){let o,c;const{data:n}=([o,c]=R(()=>q("get_page_home",()=>$fetch(z().apiUrl+"/get_page_custom",{method:"POST",body:{slug:"/"}}))),o=await o,c(),o);console.log("pageData",n.value);const p=H();return n.value?p.value=!0:K("/404"),(Q,W)=>{var l,i,u,m;const f=D,y=N,g=S,b=T,k=V,F=x,h=A,$=L,v=E,w=I,B=P;return e(),s("div",G,[O("div",J,[d(f,{data:(i=(l=r(n))==null?void 0:l.data)==null?void 0:i.key_visual},null,8,["data"])]),(e(!0),s(U,null,j((m=(u=r(n))==null?void 0:u.data)==null?void 0:m.flex,(a,C)=>(e(),s("section",{class:"page-index__flex",key:C},[a.acf_fc_layout==="full_cards"?(e(),t(y,{key:0,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="ani_number"?(e(),t(g,{key:1,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="ig_show"?(e(),t(b,{key:2,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="room_show"?(e(),t(k,{key:3,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="big_slider"?(e(),t(F,{key:4,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="half_layout"?(e(),t(h,{key:5,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="title_big_img"?(e(),t($,{key:6,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="full_bg"?(e(),t(v,{key:7,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="title_double"?(e(),t(w,{key:8,data:a},null,8,["data"])):_("",!0)]))),128)),d(B)])}}};export{_a as default};