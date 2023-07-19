import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const index_vue_vue_type_style_index_0_lang = "@font-face{font-family:Gambetta-Regular;src:url(" + buildAssetsURL("Gambetta-Regular.ad720b72.otf") + ")}.page-rooms__wrap{padding:5rem 0}@media (max-width:1023.98px){.page-rooms__wrap{margin-bottom:4rem;margin-top:6.4rem;overflow:hidden;padding:0}}.page-rooms__wrap-title{text-align:center}@media (max-width:1023.98px){.page-rooms__wrap-title{margin-bottom:4rem}}.page-rooms__wrap-title h1{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:3.2rem;font-weight:400;letter-spacing:.16rem;line-height:1.5;padding:0 0 1rem}.page-rooms__wrap-title h1.-en,body.language-en .page-rooms__wrap-title h1{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400;letter-spacing:normal;line-height:1.2}@media (max-width:1023.98px){.page-rooms__wrap-title h1{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2rem;font-weight:400;line-height:1.5}}.page-rooms__wrap-title span{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:14rem;font-weight:400;line-height:.9}@media (max-width:1023.98px){.page-rooms__wrap-title span{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:4.8rem;font-weight:400;line-height:.9}}.page-rooms__wrap-cate{display:flex;gap:2rem;justify-content:center;padding:5rem 0}@media (max-width:1023.98px){.page-rooms__wrap-cate{flex-wrap:wrap;padding:0}}.page-rooms__wrap-cate>.btn{border:1px solid #9b815a;border-radius:8rem;color:#9b815a;cursor:pointer;font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2rem;font-weight:400;line-height:1.5;padding:.8rem 3.2rem;transition:background-color .3s ease-in-out,color .3s ease-in-out}.page-rooms__wrap-cate>.btn.-active{background-color:#534a40;color:#fff}@media (min-width:1024px){.page-rooms__wrap-cate>.btn:hover{background-color:#9b815a;color:#fff}}@media (max-width:1023.98px){.page-rooms__wrap-cate>.btn{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}}@media (max-width:1023.98px) and (max-width:1023.98px){.page-rooms__wrap-cate>.btn{font-size:1.4rem}}.page-rooms__wrap__room{background-color:#fff}@media (max-width:1023.98px){.page-rooms__wrap__room{background-color:transparent;overflow:hidden}}.page-rooms__wrap__room__list{align-items:center;display:flex;flex-direction:column;padding:5rem 0}@media (max-width:1023.98px){.page-rooms__wrap__room__list{margin-bottom:8rem;padding:0}}.page-rooms__wrap__room__list-item{display:flex;flex:0 0 auto;flex-wrap:wrap;justify-content:center;width:calc(83.33333% - .4rem)}@media screen and (max-width:100%){.page-rooms__wrap__room__list-item{width:calc(83.33333vw - 133.33333px - .4rem)}}@media screen and (max-width:768px){.page-rooms__wrap__room__list-item{width:calc(83.33333vw - 33.33333px - .4rem)}}.page-rooms__wrap__room__list-item .elements-room-card:not(:last-child){margin-right:4rem}@media (max-width:1023.98px){.page-rooms__wrap__room__list-item{display:none}}.page-rooms__wrap__room__list-title{align-items:center;display:flex;gap:3rem;justify-content:center;padding:8rem 0}@media (max-width:1023.98px){.page-rooms__wrap__room__list-title{gap:1.2rem;margin-bottom:4.2rem;padding:0}}.page-rooms__wrap__room__list-title span{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:4.8rem;font-weight:400;line-height:.9}@media (max-width:1023.98px){.page-rooms__wrap__room__list-title span{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:3.2rem;font-weight:400;letter-spacing:.16rem;line-height:1.5}.page-rooms__wrap__room__list-title span.-en,body.language-en .page-rooms__wrap__room__list-title span{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400;letter-spacing:normal;line-height:1.2}}.page-rooms__wrap__room__list-title h3{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2rem;font-weight:400;line-height:1.5}@media (max-width:1023.98px){.page-rooms__wrap__room__list-title h3{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}}@media (max-width:1023.98px) and (max-width:1023.98px){.page-rooms__wrap__room__list-title h3{font-size:1.4rem}}.page-rooms__wrap__swiper{align-items:center;display:flex;flex-direction:column;height:auto;width:100%}@media (min-width:1024px){.page-rooms__wrap__swiper{display:none}}.page-rooms__wrap__swiper-wrapper{display:flex;height:auto;width:100%}.page-rooms__wrap__swiper-slide{flex:0 0 auto;width:calc(87.5% - .3rem)}@media screen and (max-width:100%){.page-rooms__wrap__swiper-slide{width:calc(87.5vw - 140px - .3rem)}}@media screen and (max-width:768px){.page-rooms__wrap__swiper-slide{width:calc(87.5vw - 35px - .3rem)}}.page-rooms__wrap__swiper-navigation{display:flex;margin-top:4.2rem}.page-rooms__wrap__swiper-navigation-prev{display:flex;height:auto;width:2.6rem}.page-rooms__wrap__swiper-navigation-prev>span{display:flex;height:auto;width:100%}.page-rooms__wrap__swiper-navigation-prev>span>svg{height:auto;transform:rotate(180deg);width:100%}.page-rooms__wrap__swiper-navigation-next{display:flex;height:auto;width:2.6rem}.page-rooms__wrap__swiper-navigation-next>span{display:flex;height:auto;width:100%}.page-rooms__wrap__swiper-navigation-next>span>svg{height:auto;width:100%}.page-rooms__wrap__swiper-navigation-text{align-items:baseline;display:flex;margin:0 3.2rem}.page-rooms__wrap__swiper-navigation-text>span{font-size:2.8rem;line-height:1.2}.page-rooms__wrap__swiper-navigation-text>span,.page-rooms__wrap__swiper-navigation-text>span:first-child{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}.page-rooms__wrap__swiper-navigation-text>span:first-child{font-size:4.8rem;line-height:.9}";

const indexStyles_df0da6de = [index_vue_vue_type_style_index_0_lang];

export { indexStyles_df0da6de as default };
//# sourceMappingURL=index-styles.df0da6de.mjs.map
