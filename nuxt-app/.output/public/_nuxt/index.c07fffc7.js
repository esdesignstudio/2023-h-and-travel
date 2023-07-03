import{_ as et}from"./nuxt-icon.vue.2437ad62.js";import{_ as st}from"./nuxt-link.f2afa4ed.js";import{o,f as i,i as s,v as _,h as p,A as ot,B as it,a as nt,t as c,w as rt,b as at,q as C,u as t,m as l,F as h,r as x,l as _t,x as De,y,c as b,p as lt}from"./entry.68636e19.js";import{_ as pt}from"./index.98beb8e9.js";import{u as dt}from"./composables.529037cf.js";import{S as B}from"./swiper.min.a0334f84.js";const ct={class:"elements-room-card"},ut=["src"],mt={class:"elements-room-card-info"},wt={__name:"roomCard",props:{data:{type:Object,default:{}}},setup(k){return(f,q)=>{var e,u;const $=et,a=st;return o(),i("div",ct,[s("figure",null,[s("img",{src:(u=(e=k.data.fields.key_visual)==null?void 0:e.slider[0])==null?void 0:u.url,alt:""},null,8,ut)]),s("div",mt,[s("h3",null,_(k.data.title),1),p(a,{to:"/room/"+k.data.slug},{default:ot(()=>[it(" 查看房型 "),p($,{name:"arrow_right"})]),_:1},8,["to"])])])}}};const vt={class:"page-rooms"},gt={class:"container"},ht={class:"page-rooms__wrap"},xt=s("div",{class:"page-rooms__wrap-title"},[s("h1",null,"房型一覽"),s("span",null,"ROOMS")],-1),yt={class:"page-rooms__wrap-cate"},ft={class:"page-rooms__wrap__room"},kt={class:"container"},Ct={key:0,class:"page-rooms__wrap__room__list"},qt={class:"page-rooms__wrap__room__list-title"},$t={key:0,class:"-en"},St={key:1},Rt={class:"page-rooms__wrap__room__list-item"},bt={class:"page-rooms__wrap__swiper-wrapper swiper-wrapper"},Bt={class:"page-rooms__wrap__swiper-navigation"},Nt={class:"page-rooms__wrap__swiper-navigation-text"},Pt=["textContent"],Vt=s("span",null,"/",-1),Et=["textContent"],It={key:1,class:"page-rooms__wrap__room__list"},Tt={class:"page-rooms__wrap__room__list-title"},Ot={key:0,class:"-en"},At={key:1},Ft={class:"page-rooms__wrap__room__list-item"},jt={class:"page-rooms__wrap__swiper-wrapper swiper-wrapper"},zt={class:"page-rooms__wrap__swiper-navigation"},Lt={class:"page-rooms__wrap__swiper-navigation-text"},Mt=["textContent"],Gt=s("span",null,"/",-1),Ht=["textContent"],Ut={key:2,class:"page-rooms__wrap__room__list"},Jt={class:"page-rooms__wrap__room__list-title"},Kt={key:0,class:"-en"},Qt={key:1},Wt={class:"page-rooms__wrap__room__list-item"},Xt={class:"page-rooms__wrap__swiper-wrapper swiper-wrapper"},Yt={class:"page-rooms__wrap__swiper-navigation"},Zt={class:"page-rooms__wrap__swiper-navigation-text"},Dt=["textContent"],es=s("span",null,"/",-1),ts=["textContent"],ls={__name:"index",props:{template:{type:Object,default:{}}},async setup(k){var O,A,F,j,z,L,M,G,H,U,J;let f,q;const $=nt();$.value=!0;const a=c("all"),{data:e}=([f,q]=rt(()=>_t("get_page_cate",()=>$fetch(lt().apiUrl+"/get_rooms_by_cate",{method:"GET"}))),f=await f,q(),f);console.log("pageData",e.value);const u=c(),N=c(),P=c(0),S=c([]),V=c(),E=c(0),R=c([]),I=c(),T=c(0);return at(()=>{u.value=new B(N.value,{slidesPerView:"auto",spaceBetween:20,on:{slideChangeTransitionEnd:function(){P.value=this.realIndex}}}),S.value=new B(V.value,{slidesPerView:"auto",spaceBetween:20,on:{slideChangeTransitionEnd:function(){E.value=this.realIndex}}}),R.value=new B(I.value,{slidesPerView:"auto",spaceBetween:20,on:{slideChangeTransitionEnd:function(){T.value=this.realIndex}}})}),dt({title:(A=(O=e==null?void 0:e.value)==null?void 0:O.data)==null?void 0:A.og_title,meta:[{property:"og:locale",content:"zh"},{name:"description",content:(j=(F=e==null?void 0:e.value)==null?void 0:F.data)==null?void 0:j.meta_description},{hid:"og:title",property:"og:title",content:(L=(z=e==null?void 0:e.value)==null?void 0:z.data)==null?void 0:L.og_title},{hid:"og:description",property:"og:description",content:(G=(M=e==null?void 0:e.value)==null?void 0:M.data)==null?void 0:G.meta_description},{hid:"og:image",property:"og:image",content:(J=(U=(H=e==null?void 0:e.value)==null?void 0:H.data)==null?void 0:U.og_image)==null?void 0:J.url},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"}]}),(ss,r)=>{var K,Q,W,X,Y,Z,D,ee,te,se,oe,ie,ne,re,ae,_e,le,pe,de,ce,ue,me,we,ve,ge,he,xe,ye,fe,ke,Ce,qe,$e,Se,Re,be,Be,Ne,Pe,Ve,Ee,Ie,Te,Oe,Ae,Fe,je,ze,Le,Me,Ge,He,Ue,Je,Ke,Qe,We,Xe,Ye,Ze;const m=wt,w=et,tt=pt,v=De("inview"),g=De("fade");return o(),i("div",vt,[s("div",gt,[s("div",ht,[xt,s("div",yt,[s("div",{class:C(["btn",{"-active":t(a)==="all"}]),onClick:r[0]||(r[0]=n=>a.value="all")}," 所有房型 ",2),(Q=(K=t(e))==null?void 0:K.twins)!=null&&Q.title.title?(o(),i("div",{key:0,class:C(["btn",{"-active":t(a)==="twins"}]),onClick:r[1]||(r[1]=n=>a.value="twins")},_((X=(W=t(e))==null?void 0:W.twins)==null?void 0:X.title.title),3)):l("",!0),(Z=(Y=t(e))==null?void 0:Y.triple)!=null&&Z.title.title?(o(),i("div",{key:1,class:C(["btn",{"-active":t(a)==="triple"}]),onClick:r[2]||(r[2]=n=>a.value="triple")},_((ee=(D=t(e))==null?void 0:D.triple)==null?void 0:ee.title.title),3)):l("",!0),(se=(te=t(e))==null?void 0:te.quadruple)!=null&&se.title.title?(o(),i("div",{key:2,class:C(["btn",{"-active":t(a)==="quadruple"}]),onClick:r[3]||(r[3]=n=>a.value="quadruple")},_((ie=(oe=t(e))==null?void 0:oe.quadruple)==null?void 0:ie.title.title),3)):l("",!0)])])]),s("div",ft,[s("div",kt,[(re=(ne=t(e))==null?void 0:ne.twins)!=null&&re.rooms.length&&t(a)==="all"||t(a)==="twins"?(o(),i("div",Ct,[s("div",qt,[(_e=(ae=t(e))==null?void 0:ae.twins)!=null&&_e.title.deco_title?(o(),i("span",$t,_((pe=(le=t(e))==null?void 0:le.twins)==null?void 0:pe.title.deco_title),1)):l("",!0),(ce=(de=t(e))==null?void 0:de.twins)!=null&&ce.title.title?(o(),i("h3",St,_((me=(ue=t(e))==null?void 0:ue.twins)==null?void 0:me.title.title),1)):l("",!0)]),s("div",Rt,[(o(!0),i(h,null,x((ve=(we=t(e))==null?void 0:we.twins)==null?void 0:ve.rooms,(n,d)=>y((o(),b(m,{key:d,data:n},null,8,["data"])),[[v],[g]])),128))]),s("div",{class:"page-rooms__wrap__swiper",ref_key:"twinsSwiperRef",ref:N},[s("div",bt,[(o(!0),i(h,null,x((he=(ge=t(e))==null?void 0:ge.twins)==null?void 0:he.rooms,(n,d)=>(o(),i("div",{class:"page-rooms__wrap__swiper-slide swiper-slide",key:d},[y(p(m,{data:n},null,8,["data"]),[[v],[g]])]))),128))]),s("div",Bt,[s("div",{class:"page-rooms__wrap__swiper-navigation-prev",onClick:r[4]||(r[4]=n=>t(u).slidePrev())},[p(w,{name:"arrow_right"})]),s("div",Nt,[s("span",{textContent:_(t(P)+1)},null,8,Pt),Vt,s("span",{textContent:_((ye=(xe=t(e))==null?void 0:xe.twins)==null?void 0:ye.rooms.length)},null,8,Et)]),s("div",{class:"page-rooms__wrap__swiper-navigation-next",onClick:r[5]||(r[5]=n=>t(u).slideNext())},[p(w,{name:"arrow_right"})])])],512)])):l("",!0),(ke=(fe=t(e))==null?void 0:fe.triple)!=null&&ke.rooms.length&&t(a)==="all"||t(a)==="triple"?(o(),i("div",It,[s("div",Tt,[(qe=(Ce=t(e))==null?void 0:Ce.triple)!=null&&qe.title.deco_title?(o(),i("span",Ot,_((Se=($e=t(e))==null?void 0:$e.triple)==null?void 0:Se.title.deco_title),1)):l("",!0),(be=(Re=t(e))==null?void 0:Re.triple)!=null&&be.title.title?(o(),i("h3",At,_((Ne=(Be=t(e))==null?void 0:Be.triple)==null?void 0:Ne.title.title),1)):l("",!0)]),s("div",Ft,[(o(!0),i(h,null,x((Ve=(Pe=t(e))==null?void 0:Pe.triple)==null?void 0:Ve.rooms,(n,d)=>y((o(),b(m,{key:d,data:n},null,8,["data"])),[[v],[g]])),128))]),s("div",{class:"page-rooms__wrap__swiper",ref_key:"tripleSwiperRef",ref:V},[s("div",jt,[(o(!0),i(h,null,x((Ie=(Ee=t(e))==null?void 0:Ee.triple)==null?void 0:Ie.rooms,(n,d)=>(o(),i("div",{class:"page-rooms__wrap__swiper-slide swiper-slide",key:d},[y(p(m,{data:n},null,8,["data"]),[[v],[g]])]))),128))]),s("div",zt,[s("div",{class:"page-rooms__wrap__swiper-navigation-prev",onClick:r[6]||(r[6]=n=>t(S).slidePrev())},[p(w,{name:"arrow_right"})]),s("div",Lt,[s("span",{textContent:_(t(E)+1)},null,8,Mt),Gt,s("span",{textContent:_((Oe=(Te=t(e))==null?void 0:Te.triple)==null?void 0:Oe.rooms.length)},null,8,Ht)]),s("div",{class:"page-rooms__wrap__swiper-navigation-next",onClick:r[7]||(r[7]=n=>t(S).slideNext())},[p(w,{name:"arrow_right"})])])],512)])):l("",!0),(Fe=(Ae=t(e))==null?void 0:Ae.quadruple)!=null&&Fe.rooms.length&&t(a)==="all"||t(a)==="quad"?(o(),i("div",Ut,[s("div",Jt,[(ze=(je=t(e))==null?void 0:je.quadruple)!=null&&ze.title.deco_title?(o(),i("span",Kt,_((Me=(Le=t(e))==null?void 0:Le.quadruple)==null?void 0:Me.title.deco_title),1)):l("",!0),(He=(Ge=t(e))==null?void 0:Ge.quadruple)!=null&&He.title.title?(o(),i("h3",Qt,_((Je=(Ue=t(e))==null?void 0:Ue.quadruple)==null?void 0:Je.title.title),1)):l("",!0)]),s("div",Wt,[(o(!0),i(h,null,x((Qe=(Ke=t(e))==null?void 0:Ke.quadruple)==null?void 0:Qe.rooms,(n,d)=>y((o(),b(m,{key:d,data:n},null,8,["data"])),[[v],[g]])),128))]),s("div",{class:"page-rooms__wrap__swiper",ref_key:"quadrupleSwiperRef",ref:I},[s("div",Xt,[(o(!0),i(h,null,x((Xe=(We=t(e))==null?void 0:We.quadruple)==null?void 0:Xe.rooms,(n,d)=>(o(),i("div",{class:"page-rooms__wrap__swiper-slide swiper-slide",key:d},[y(p(m,{data:n},null,8,["data"]),[[v],[g]])]))),128))]),s("div",Yt,[s("div",{class:"page-rooms__wrap__swiper-navigation-prev",onClick:r[8]||(r[8]=n=>t(R).slidePrev())},[p(w,{name:"arrow_right"})]),s("div",Zt,[s("span",{textContent:_(t(T)+1)},null,8,Dt),es,s("span",{textContent:_((Ze=(Ye=t(e))==null?void 0:Ye.quadruple)==null?void 0:Ze.rooms.length)},null,8,ts)]),s("div",{class:"page-rooms__wrap__swiper-navigation-next",onClick:r[9]||(r[9]=n=>t(R).slideNext())},[p(w,{name:"arrow_right"})])])],512)])):l("",!0)])]),p(tt)])}}};export{ls as default};
