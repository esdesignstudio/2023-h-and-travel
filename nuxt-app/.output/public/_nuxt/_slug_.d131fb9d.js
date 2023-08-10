import{b as pe,c as fe,a as ve,_ as ge}from"./titleDouble.de626af4.js";import{_ as he}from"./nuxt-link.aff06f25.js";import{_ as xe}from"./nuxt-icon.vue.78cdef07.js";import{S as ye}from"./swiper.min.a0334f84.js";import{t as V,b as we,x as B,o as i,f as a,i as t,v as l,m as _,c as L,y as C,F as j,r as E,B as P,u as s,h as p,j as ke,w as be,a as $e,k as Ce,z as Fe,l as Te,p as Be}from"./entry.6ba90fa7.js";import{_ as Re}from"./index.2c99bb76.js";import{u as Ne}from"./composables.7e4843c3.js";const Ve={class:"flexible-room-facilities"},je={class:"flexible-room-facilities__wrap container"},Ee={class:"flexible-room-facilities__wrap-title"},Le={key:0},Pe={key:0,class:"flexible-room-facilities__wrap-icons"},Se=["src","alt"],He={key:1,class:"flexible-room-facilities__wrap-imgs"},Me=["src","alt"],Oe={class:"flexible-room-facilities__swiper-wrapper swiper-wrapper"},ze=["src","alt"],Ae={class:"flexible-room-facilities__swiper-navigation"},Ie={class:"flexible-room-facilities__swiper-navigation-text"},Ue=["textContent"],qe=t("span",null,"/",-1),Ge=["textContent"],Je={__name:"roomFacilities",props:{data:{type:Object,default:{}}},setup(n){const r=V(null),f=V(),v=V(0);return we(()=>{r.value=new ye(f.value,{slidesPerView:"auto",spaceBetween:20,on:{slideChangeTransitionEnd:function(){v.value=this.realIndex}}})}),(e,d)=>{var h,x,y,w,k,b,$,R,N,T;const F=pe,g=xe,u=B("inview"),m=B("fade");return i(),a("div",Ve,[t("div",je,[t("div",Ee,[(h=n.data)!=null&&h.title?(i(),a("h3",Le,l((x=n.data)==null?void 0:x.title),1)):_("",!0),(y=n.data)!=null&&y.deco_title?(i(),L(F,{key:1,class:"-en",data:(w=n.data)==null?void 0:w.deco_title},null,8,["data"])):_("",!0)]),((k=n.data)==null?void 0:k.icons.length)>0?C((i(),a("ul",Pe,[(i(!0),a(j,null,E((b=n.data)==null?void 0:b.icons,(o,c)=>(i(),a("li",{key:c},[t("figure",null,[t("img",{src:o.icon.url,alt:o.text},null,8,Se)]),t("span",null,l(o.text),1)]))),128))])),[[u],[m]]):_("",!0),(($=n.data)==null?void 0:$.setting_imgs.length)>0?(i(),a("ul",He,[(i(!0),a(j,null,E((R=n.data)==null?void 0:R.setting_imgs,(o,c)=>(i(),a("li",{key:c},[t("figure",null,[t("img",{src:o.image.url,alt:o.text},null,8,Me)]),C((i(),a("span",null,[P(l(o.text),1)])),[[u],[m]])]))),128))])):_("",!0),t("div",{class:"flexible-room-facilities__swiper",ref_key:"swiperRef",ref:f},[t("div",Oe,[(i(!0),a(j,null,E((N=n.data)==null?void 0:N.setting_imgs,(o,c)=>(i(),a("div",{class:"flexible-room-facilities__swiper-slide swiper-slide",key:c},[t("figure",null,[t("img",{src:o.image.url,alt:o.text},null,8,ze)]),C((i(),a("span",null,[P(l(o.text),1)])),[[u],[m]])]))),128))]),t("div",Ae,[t("div",{class:"flexible-room-facilities__swiper-navigation-prev",onClick:d[0]||(d[0]=o=>s(r).slidePrev())},[p(g,{name:"arrow_right"})]),t("div",Ie,[t("span",{textContent:l(s(v)+1)},null,8,Ue),qe,t("span",{textContent:l((T=n.data)==null?void 0:T.setting_imgs.length)},null,8,Ge)]),t("div",{class:"flexible-room-facilities__swiper-navigation-next",onClick:d[1]||(d[1]=o=>s(r).slideNext())},[p(g,{name:"arrow_right"})])])],512)])])}}};const Ke={class:"rooms-sigle"},Qe={class:"rooms-sigle__wrap"},We={class:"rooms-sigle__wrap-title container"},Xe={key:0},Ye={key:1,class:"deco -en"},Ze={class:"container"},De={class:"rooms-sigle__wrap__hero"},et=["innerHTML"],_t={__name:"[slug]",props:{template:{type:Object,default:{}}},async setup(n){var F,g,u,m,h,x,y,w,k,b,$;let r,f;const v=ke(),{data:e}=([r,f]=be(()=>Te("get_page_rooms_slug"+v.params.slug,()=>$fetch(Be().apiUrl+"/get_single_room",{method:"POST",body:{slug:v.params.slug}}),"$ho5jeR3aRp")),r=await r,f(),r),d=$e();return e.value?d.value=!0:Ce("/404"),Ne({title:(g=(F=e==null?void 0:e.value)==null?void 0:F.data)==null?void 0:g.og_title,meta:[{property:"og:locale",content:"zh"},{name:"description",content:(m=(u=e==null?void 0:e.value)==null?void 0:u.data)==null?void 0:m.meta_description},{hid:"og:title",property:"og:title",content:(x=(h=e==null?void 0:e.value)==null?void 0:h.data)==null?void 0:x.og_title},{hid:"og:description",property:"og:description",content:(w=(y=e==null?void 0:e.value)==null?void 0:y.data)==null?void 0:w.meta_description},{hid:"og:image",property:"og:image",content:($=(b=(k=e==null?void 0:e.value)==null?void 0:k.data)==null?void 0:b.og_image)==null?void 0:$.url},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"}]}),(R,N)=>{var M,O,z,A,I,U,q,G,J,K,Q,W,X,Y,Z,D,ee,te,ie,se,ae,oe,ne,le,_e;const T=fe,o=he,c=Je,de=ve,ue=ge,me=Re,S=B("inview"),H=B("fade");return i(),a("div",Ke,[t("div",Qe,[t("div",We,[(O=(M=s(e).data)==null?void 0:M.post)!=null&&O.post_title?(i(),a("h1",Xe,l((A=(z=s(e).data)==null?void 0:z.post)==null?void 0:A.post_title),1)):_("",!0),(U=(I=s(e).data)==null?void 0:I.key_visual)!=null&&U.deco_title?(i(),a("span",Ye,l((G=(q=s(e).data)==null?void 0:q.key_visual)==null?void 0:G.deco_title),1)):_("",!0)]),(K=(J=s(e).data)==null?void 0:J.key_visual)!=null&&K.slider?(i(),L(T,{key:0,data:(W=(Q=s(e).data)==null?void 0:Q.key_visual)==null?void 0:W.slider},null,8,["data"])):_("",!0),t("div",Ze,[t("div",De,[(Y=(X=s(e).data)==null?void 0:X.key_visual)!=null&&Y.description?C((i(),a("div",{key:0,innerHTML:(D=(Z=s(e).data)==null?void 0:Z.key_visual)==null?void 0:D.description},null,8,et)),[[S],[H]]):_("",!0),(te=(ee=s(e).data)==null?void 0:ee.key_visual)!=null&&te.link?C((i(),L(o,{key:1,class:"rooms-sigle__wrap__hero__btn",to:(se=(ie=s(e).data)==null?void 0:ie.key_visual)==null?void 0:se.link.url,target:(oe=(ae=s(e).data)==null?void 0:ae.key_visual)==null?void 0:oe.link.target},{default:Fe(()=>{var re,ce;return[P(l((ce=(re=s(e).data)==null?void 0:re.key_visual)==null?void 0:ce.link.title),1)]}),_:1},8,["to","target"])),[[S],[H]]):_("",!0)])]),p(c,{data:(ne=s(e).data)==null?void 0:ne.room_settings},null,8,["data"]),p(de,{data:(le=s(e).data)==null?void 0:le.checkin_list},null,8,["data"]),p(ue,{data:(_e=s(e).data)==null?void 0:_e.more_rooms},null,8,["data"])]),p(me)])}}};export{_t as default};
