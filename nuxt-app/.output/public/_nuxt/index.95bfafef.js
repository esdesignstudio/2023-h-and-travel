import{_ as ft}from"./nuxt-icon.vue.edeae1aa.js";import{_ as xt}from"./nuxt-link.32e165f4.js";import{o as s,f as i,i as o,x as _,h as q,t as Ct,v as qt,a as $t,s as bt,w as Bt,E as p,u as t,m as l,F as k,r as f,l as Dt,B as yt,C as x,c as C,p as Et}from"./entry.70ffcf33.js";import{_ as Nt}from"./index.c4a94bad.js";const Ot={class:"elements-room-card"},Vt=["src"],Ft={class:"elements-room-card-info"},Pt={__name:"roomCard",props:{data:{type:Object,default:{}}},setup(u){return(c,m)=>{var e,g;const v=ft,a=xt;return s(),i("div",Ot,[o("figure",null,[o("img",{src:(g=(e=u.data.fields.key_visual)==null?void 0:e.slider[0])==null?void 0:g.url,alt:""},null,8,Vt)]),o("div",Ft,[o("h3",null,_(u.data.title),1),q(a,{to:"/room/"+u.data.slug},{default:Ct(()=>[qt(" 查看房型 "),q(v,{name:"arrow_right"})]),_:1},8,["to"])])])}}};const Rt={class:"page-rooms"},Tt={class:"container"},jt={class:"page-rooms__wrap"},At=o("div",{class:"page-rooms__wrap-title"},[o("h1",null,"房型一覽"),o("span",null,"ROOMS")],-1),Lt={class:"page-rooms__wrap-cate"},St={class:"page-rooms__wrap__room"},zt={class:"container"},Gt={key:0,class:"page-rooms__wrap__room__list"},Mt={class:"page-rooms__wrap__room__list-title"},Ut={key:0},Ht={key:1},It={class:"page-rooms__wrap__room__list-item"},Jt={key:1,class:"page-rooms__wrap__room__list"},Kt={class:"page-rooms__wrap__room__list-title"},Qt={key:0},Wt={key:1},Xt={class:"page-rooms__wrap__room__list-item"},Yt={key:2,class:"page-rooms__wrap__room__list"},Zt={class:"page-rooms__wrap__room__list-title"},te={key:0},ee={key:1},se={class:"page-rooms__wrap__room__list-item"},_e={__name:"index",props:{template:{type:Object,default:{}}},async setup(u){let c,m;const v=$t();v.value=!0;const a=bt("all"),{data:e}=([c,m]=Bt(()=>Dt("get_page_cate",()=>$fetch(Et().apiUrl+"/get_rooms_by_cate",{method:"GET"}))),c=await c,m(),c);return console.log("pagePage",e.value),(g,n)=>{var $,b,B,D,E,N,O,V,F,P,R,T,j,A,L,S,z,G,M,U,H,I,J,K,Q,W,X,Y,Z,tt,et,st,ot,it,at,lt,_t,rt,nt,ct,dt,ut,pt,mt,vt,gt,ht,wt;const h=Pt,kt=Nt,w=yt("inview"),y=yt("fade");return s(),i("div",Rt,[o("div",Tt,[o("div",jt,[At,o("div",Lt,[o("div",{class:p(["btn",{"-active":t(a)==="all"}]),onClick:n[0]||(n[0]=r=>a.value="all")}," 所有房型 ",2),(b=($=t(e))==null?void 0:$.twins)!=null&&b.title.title?(s(),i("div",{key:0,class:p(["btn",{"-active":t(a)==="twins"}]),onClick:n[1]||(n[1]=r=>a.value="twins")},_((D=(B=t(e))==null?void 0:B.twins)==null?void 0:D.title.title),3)):l("",!0),(N=(E=t(e))==null?void 0:E.triple)!=null&&N.title.title?(s(),i("div",{key:1,class:p(["btn",{"-active":t(a)==="triple"}]),onClick:n[2]||(n[2]=r=>a.value="triple")},_((V=(O=t(e))==null?void 0:O.triple)==null?void 0:V.title.title),3)):l("",!0),(P=(F=t(e))==null?void 0:F.quadruple)!=null&&P.title.title?(s(),i("div",{key:2,class:p(["btn",{"-active":t(a)==="quadruple"}]),onClick:n[3]||(n[3]=r=>a.value="quadruple")},_((T=(R=t(e))==null?void 0:R.quadruple)==null?void 0:T.title.title),3)):l("",!0)])])]),o("div",St,[o("div",zt,[(A=(j=t(e))==null?void 0:j.twins)!=null&&A.rooms.length&&t(a)==="all"||t(a)==="twins"?(s(),i("div",Gt,[o("div",Mt,[(S=(L=t(e))==null?void 0:L.twins)!=null&&S.title.deco_title?(s(),i("span",Ut,_((G=(z=t(e))==null?void 0:z.twins)==null?void 0:G.title.deco_title),1)):l("",!0),(U=(M=t(e))==null?void 0:M.twins)!=null&&U.title.title?(s(),i("h3",Ht,_((I=(H=t(e))==null?void 0:H.twins)==null?void 0:I.title.title),1)):l("",!0)]),o("div",It,[(s(!0),i(k,null,f((K=(J=t(e))==null?void 0:J.twins)==null?void 0:K.rooms,(r,d)=>x((s(),C(h,{key:d,data:r},null,8,["data"])),[[w],[y]])),128))])])):l("",!0),(W=(Q=t(e))==null?void 0:Q.triple)!=null&&W.rooms.length&&t(a)==="all"||t(a)==="triple"?(s(),i("div",Jt,[o("div",Kt,[(Y=(X=t(e))==null?void 0:X.triple)!=null&&Y.title.deco_title?(s(),i("span",Qt,_((tt=(Z=t(e))==null?void 0:Z.triple)==null?void 0:tt.title.deco_title),1)):l("",!0),(st=(et=t(e))==null?void 0:et.triple)!=null&&st.title.title?(s(),i("h3",Wt,_((it=(ot=t(e))==null?void 0:ot.triple)==null?void 0:it.title.title),1)):l("",!0)]),o("div",Xt,[(s(!0),i(k,null,f((lt=(at=t(e))==null?void 0:at.triple)==null?void 0:lt.rooms,(r,d)=>x((s(),C(h,{key:d,data:r},null,8,["data"])),[[w],[y]])),128))])])):l("",!0),(rt=(_t=t(e))==null?void 0:_t.quadruple)!=null&&rt.rooms.length&&t(a)==="all"||t(a)==="quad"?(s(),i("div",Yt,[o("div",Zt,[(ct=(nt=t(e))==null?void 0:nt.quadruple)!=null&&ct.title.deco_title?(s(),i("span",te,_((ut=(dt=t(e))==null?void 0:dt.quadruple)==null?void 0:ut.title.deco_title),1)):l("",!0),(mt=(pt=t(e))==null?void 0:pt.quadruple)!=null&&mt.title.title?(s(),i("h3",ee,_((gt=(vt=t(e))==null?void 0:vt.quadruple)==null?void 0:gt.title.title),1)):l("",!0)]),o("div",se,[(s(!0),i(k,null,f((wt=(ht=t(e))==null?void 0:ht.quadruple)==null?void 0:wt.rooms,(r,d)=>x((s(),C(h,{key:d,data:r},null,8,["data"])),[[w],[y]])),128))])])):l("",!0)])]),q(kt)])}}};export{_e as default};