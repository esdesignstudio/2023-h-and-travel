import{_ as b}from"./nuxt-link.657e1729.js";import{_ as f}from"./index.7951914b.js";import{a as g,q as h,s as y,f as x,i as t,h as e,t as d,u as l,v as m,x as p,y as V,z as w,o as k}from"./entry.e7f7e34d.js";import"./nuxt-icon.vue.5c22dab0.js";const N={class:"display-form"},q={class:"container"},B=t("h1",null,"表格展示",-1),C={class:"display-form__content"},F=t("h2",null,"登入表格範例",-1),S={class:"member-login__password"},z={class:"member-login__form-button"},D=t("h2",null,"客製化功能範例",-1),A={__name:"form",setup(H){const u=g();u.value=!0;const s=h({selected:[],options:[{label:"選項1",value:"option1"},{label:"選項2",value:"option2"},{label:"選項3",value:"option3"},{label:"選項4",value:"option4"},{label:"選項5",value:"option5"},{label:"選項6",value:"option6"}]}),n=y(),_=i=>{console.log("submitHandler",i)};return(i,a)=>{const o=w("FormKit"),c=b,v=f;return k(),x("div",N,[t("div",q,[B,t("div",C,[t("div",null,[F,e(o,{type:"form",id:"login-submit","incomplete-message":"請填寫以上欄位",actions:!1,onSubmit:_,"submit-attrs":{wrapperClass:"es-button"}},{default:d(()=>[e(o,{label:"電子郵件",type:"text",name:"username",autocomplete:"",validation:"required|email",placeholder:"請輸入電子郵件"}),t("div",S,[e(o,{type:"password",name:"password",label:"密碼",autocomplete:"",validation:"required|length:6|matches:/[^a-zA-Z]/","validation-visibility":"live"}),e(c,{to:"/forgotpass"},{default:d(()=>[m(p(i.$t("member.forgot_pass")),1)]),_:1})]),e(o,{type:"checkbox",label:"記得我",name:"remember",value:!0}),t("div",z,[e(o,{type:"submit",label:"登入"})])]),_:1})]),t("div",null,[D,e(o,{type:"taglist",title:"分類",cleartext:"不限制",modelValue:l(s).selected,"onUpdate:modelValue":a[0]||(a[0]=r=>l(s).selected=r),options:l(s).options},null,8,["modelValue","options"]),m(" "+p(l(s).selected)+" ",1),e(o,{type:"dropdown",title:"下拉選單",cleartext:"不限制",modelValue:l(n),"onUpdate:modelValue":a[1]||(a[1]=r=>V(n)?n.value=r:null),options:l(s).options},null,8,["modelValue","options"])])])]),e(v)])}}};export{A as default};