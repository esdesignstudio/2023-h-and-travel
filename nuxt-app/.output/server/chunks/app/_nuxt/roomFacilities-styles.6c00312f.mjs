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

const roomFacilities_vue_vue_type_style_index_0_lang = "@font-face{font-family:Gambetta-Regular;src:url(" + buildAssetsURL("Gambetta-Regular.ad720b72.otf") + ')}.flexible-room-facilities{background-color:#534a40;overflow:hidden;text-align:center}.flexible-room-facilities__wrap{align-items:center;color:#fff;display:flex;flex-direction:column;padding-bottom:8rem;padding-top:8rem}@media (max-width:1023.98px){.flexible-room-facilities__wrap-title{margin-bottom:4rem}}.flexible-room-facilities__wrap-title h3{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:3.2rem;font-weight:400;letter-spacing:.16rem;line-height:1.5;padding:0 0 3rem}.flexible-room-facilities__wrap-title h3.-en,body.language-en .flexible-room-facilities__wrap-title h3{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400;letter-spacing:normal;line-height:1.2}@media (max-width:1023.98px){.flexible-room-facilities__wrap-title h3{margin-bottom:1.2rem;padding:0}}.flexible-room-facilities__wrap-title span{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:8rem;font-weight:400;line-height:.9}@media (max-width:1023.98px){.flexible-room-facilities__wrap-title span{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:3.2rem;font-weight:400;letter-spacing:.16rem;line-height:1.5}.flexible-room-facilities__wrap-title span.-en,body.language-en .flexible-room-facilities__wrap-title span{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400;letter-spacing:normal;line-height:1.2}}.flexible-room-facilities__wrap-icons{align-items:center;display:flex;gap:3rem;justify-content:center;padding:8rem}@media (max-width:1023.98px){.flexible-room-facilities__wrap-icons{flex-wrap:wrap;gap:2.4rem;height:auto;margin-bottom:4rem;padding:2.2rem 0;width:65vw}}.flexible-room-facilities__wrap-icons li{align-items:center;display:flex;gap:1rem}@media (max-width:1023.98px){.flexible-room-facilities__wrap-icons li{height:auto;width:calc(50% - 1.2rem)}}.flexible-room-facilities__wrap-icons li figure{height:2rem;width:2rem}.flexible-room-facilities__wrap-icons li figure>img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.flexible-room-facilities__wrap-imgs{display:flex;flex:0 0 auto;flex-wrap:wrap;justify-content:space-between;width:calc(83.33333% - .4rem)}@media screen and (max-width:100%){.flexible-room-facilities__wrap-imgs{width:calc(83.33333vw - 133.33333px - .4rem)}}@media screen and (max-width:768px){.flexible-room-facilities__wrap-imgs{width:calc(83.33333vw - 33.33333px - .4rem)}}@media (max-width:1023.98px){.flexible-room-facilities__wrap-imgs{display:none}}.flexible-room-facilities__wrap-imgs li{flex:0 0 auto;margin-bottom:6.4rem;text-align:left;width:calc(30% + .72rem)}@media screen and (max-width:100%){.flexible-room-facilities__wrap-imgs li{width:calc(30vw - 48px + .72rem)}}@media screen and (max-width:768px){.flexible-room-facilities__wrap-imgs li{width:calc(30vw - 12px + .72rem)}}.flexible-room-facilities__wrap-imgs li figure{align-items:center;display:flex;height:auto;justify-content:center;margin-bottom:1.6rem;overflow:hidden;position:relative;width:100%}.flexible-room-facilities__wrap-imgs li figure:before{content:"";display:block;padding-bottom:100%}.flexible-room-facilities__wrap-imgs li figure>img{height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}.flexible-room-facilities__swiper{align-items:center;display:flex;flex-direction:column;height:auto;width:100%}@media (min-width:1024px){.flexible-room-facilities__swiper{display:none}}.flexible-room-facilities__swiper-wrapper{display:flex}.flexible-room-facilities__swiper-slide{align-items:flex-start;display:flex;flex:0 0 auto;flex-direction:column;width:calc(87.5% - .3rem)}@media screen and (max-width:100%){.flexible-room-facilities__swiper-slide{width:calc(87.5vw - 140px - .3rem)}}@media screen and (max-width:768px){.flexible-room-facilities__swiper-slide{width:calc(87.5vw - 35px - .3rem)}}.flexible-room-facilities__swiper-slide>figure{align-items:center;display:flex;height:auto;justify-content:center;margin-bottom:1.2rem;overflow:hidden;position:relative;width:100%}.flexible-room-facilities__swiper-slide>figure:before{content:"";display:block;padding-bottom:100%}.flexible-room-facilities__swiper-slide>figure>img{height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}.flexible-room-facilities__swiper-slide>p{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}@media (max-width:1023.98px){.flexible-room-facilities__swiper-slide>p{font-size:1.4rem}}.flexible-room-facilities__swiper-navigation{display:flex;margin-top:4rem}.flexible-room-facilities__swiper-navigation-prev{display:flex;height:auto;width:2.6rem}.flexible-room-facilities__swiper-navigation-prev>span{display:flex;height:auto;width:100%}.flexible-room-facilities__swiper-navigation-prev>span>svg{height:auto;transform:rotate(180deg);width:100%}.flexible-room-facilities__swiper-navigation-next{display:flex;height:auto;width:2.6rem}.flexible-room-facilities__swiper-navigation-next>span{display:flex;height:auto;width:100%}.flexible-room-facilities__swiper-navigation-next>span>svg{height:auto;width:100%}.flexible-room-facilities__swiper-navigation-text{align-items:baseline;display:flex;margin:0 3.2rem}.flexible-room-facilities__swiper-navigation-text>span{font-size:2.8rem;line-height:1.2}.flexible-room-facilities__swiper-navigation-text>span,.flexible-room-facilities__swiper-navigation-text>span:first-child{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}.flexible-room-facilities__swiper-navigation-text>span:first-child{font-size:4.8rem;line-height:.9}';

const roomFacilitiesStyles_6c00312f = [roomFacilities_vue_vue_type_style_index_0_lang];

export { roomFacilitiesStyles_6c00312f as default };
//# sourceMappingURL=roomFacilities-styles.6c00312f.mjs.map