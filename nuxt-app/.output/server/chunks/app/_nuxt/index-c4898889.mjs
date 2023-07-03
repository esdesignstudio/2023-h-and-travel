import { _ as __nuxt_component_0$1 } from './nuxt-link-660753fe.mjs';
import _sfc_main$2 from './nuxt-icon-503afd00.mjs';
import { ref, withAsyncContext, resolveDirective, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './index-3a78f033.mjs';
import { u as usePageLoaded, e as useAsyncData, f as useRuntimeConfig } from '../server.mjs';
import { u as useHead } from './composables-b942f3cc.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  __name: "roomCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "elements-room-card" }, _attrs))}><figure><img${ssrRenderAttr("src", (_b = (_a = __props.data.fields.key_visual) == null ? void 0 : _a.slider[0]) == null ? void 0 : _b.url)} alt=""></figure><div class="elements-room-card-info"><h3>${ssrInterpolate(__props.data.title)}</h3>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/room/" + __props.data.slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u770B\u623F\u578B `);
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" \u67E5\u770B\u623F\u578B "),
              createVNode(_component_nuxt_icon, { name: "arrow_right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/roomCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Object,
      default: {}
    }
  },
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let __temp, __restore;
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const roomType = ref("all");
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_cate",
      () => $fetch(useRuntimeConfig().apiUrl + "/get_rooms_by_cate", {
        method: "GET"
      })
    )), __temp = await __temp, __restore(), __temp);
    console.log("pageData", pageData.value);
    ref();
    ref();
    const twinsSwiperIndex = ref(0);
    ref([]);
    ref();
    const tripleSwiperIndex = ref(0);
    ref([]);
    ref();
    const quadrupleSwiperIndex = ref(0);
    useHead({
      title: (_b = (_a = pageData == null ? void 0 : pageData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.og_title,
      meta: [
        { property: "og:locale", content: "zh" },
        { name: "description", content: (_d = (_c = pageData == null ? void 0 : pageData.value) == null ? void 0 : _c.data) == null ? void 0 : _d.meta_description },
        { hid: "og:title", property: "og:title", content: (_f = (_e = pageData == null ? void 0 : pageData.value) == null ? void 0 : _e.data) == null ? void 0 : _f.og_title },
        { hid: "og:description", property: "og:description", content: (_h = (_g = pageData == null ? void 0 : pageData.value) == null ? void 0 : _g.data) == null ? void 0 : _h.meta_description },
        { hid: "og:image", property: "og:image", content: (_k = (_j = (_i = pageData == null ? void 0 : pageData.value) == null ? void 0 : _i.data) == null ? void 0 : _j.og_image) == null ? void 0 : _k.url },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa;
      const _component_ElementsRoomCard = __nuxt_component_0;
      const _component_nuxt_icon = _sfc_main$2;
      const _component_Footer = __nuxt_component_2;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-rooms" }, _attrs))}><div class="container"><div class="page-rooms__wrap"><div class="page-rooms__wrap-title"><h1>\u623F\u578B\u4E00\u89BD</h1><span>ROOMS</span></div><div class="page-rooms__wrap-cate"><div class="${ssrRenderClass([{ "-active": unref(roomType) === "all" }, "btn"])}"> \u6240\u6709\u623F\u578B </div>`);
      if ((_b2 = (_a2 = unref(pageData)) == null ? void 0 : _a2.twins) == null ? void 0 : _b2.title.title) {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === "twins" }, "btn"])}">${ssrInterpolate((_d2 = (_c2 = unref(pageData)) == null ? void 0 : _c2.twins) == null ? void 0 : _d2.title.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f2 = (_e2 = unref(pageData)) == null ? void 0 : _e2.triple) == null ? void 0 : _f2.title.title) {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === "triple" }, "btn"])}">${ssrInterpolate((_h2 = (_g2 = unref(pageData)) == null ? void 0 : _g2.triple) == null ? void 0 : _h2.title.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_j2 = (_i2 = unref(pageData)) == null ? void 0 : _i2.quadruple) == null ? void 0 : _j2.title.title) {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === "quadruple" }, "btn"])}">${ssrInterpolate((_l = (_k2 = unref(pageData)) == null ? void 0 : _k2.quadruple) == null ? void 0 : _l.title.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="page-rooms__wrap__room"><div class="container">`);
      if (((_n = (_m = unref(pageData)) == null ? void 0 : _m.twins) == null ? void 0 : _n.rooms.length) && unref(roomType) === "all" || unref(roomType) === "twins") {
        _push(`<div class="page-rooms__wrap__room__list"><div class="page-rooms__wrap__room__list-title">`);
        if ((_p = (_o = unref(pageData)) == null ? void 0 : _o.twins) == null ? void 0 : _p.title.deco_title) {
          _push(`<span class="-en">${ssrInterpolate((_r = (_q = unref(pageData)) == null ? void 0 : _q.twins) == null ? void 0 : _r.title.deco_title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_t = (_s = unref(pageData)) == null ? void 0 : _s.twins) == null ? void 0 : _t.title.title) {
          _push(`<h3>${ssrInterpolate((_v = (_u = unref(pageData)) == null ? void 0 : _u.twins) == null ? void 0 : _v.title.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="page-rooms__wrap__room__list-item"><!--[-->`);
        ssrRenderList((_x = (_w = unref(pageData)) == null ? void 0 : _w.twins) == null ? void 0 : _x.rooms, (room, key) => {
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
            key,
            data: room
          }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        });
        _push(`<!--]--></div><div class="page-rooms__wrap__swiper"><div class="page-rooms__wrap__swiper-wrapper swiper-wrapper"><!--[-->`);
        ssrRenderList((_z = (_y = unref(pageData)) == null ? void 0 : _y.twins) == null ? void 0 : _z.rooms, (room, key) => {
          _push(`<div class="page-rooms__wrap__swiper-slide swiper-slide">`);
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({ data: room }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="page-rooms__wrap__swiper-navigation"><div class="page-rooms__wrap__swiper-navigation-prev">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
        _push(`</div><div class="page-rooms__wrap__swiper-navigation-text"><span>${ssrInterpolate(unref(twinsSwiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate((_B = (_A = unref(pageData)) == null ? void 0 : _A.twins) == null ? void 0 : _B.rooms.length)}</span></div><div class="page-rooms__wrap__swiper-navigation-next">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_D = (_C = unref(pageData)) == null ? void 0 : _C.triple) == null ? void 0 : _D.rooms.length) && unref(roomType) === "all" || unref(roomType) === "triple") {
        _push(`<div class="page-rooms__wrap__room__list"><div class="page-rooms__wrap__room__list-title">`);
        if ((_F = (_E = unref(pageData)) == null ? void 0 : _E.triple) == null ? void 0 : _F.title.deco_title) {
          _push(`<span class="-en">${ssrInterpolate((_H = (_G = unref(pageData)) == null ? void 0 : _G.triple) == null ? void 0 : _H.title.deco_title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_J = (_I = unref(pageData)) == null ? void 0 : _I.triple) == null ? void 0 : _J.title.title) {
          _push(`<h3>${ssrInterpolate((_L = (_K = unref(pageData)) == null ? void 0 : _K.triple) == null ? void 0 : _L.title.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="page-rooms__wrap__room__list-item"><!--[-->`);
        ssrRenderList((_N = (_M = unref(pageData)) == null ? void 0 : _M.triple) == null ? void 0 : _N.rooms, (room, key) => {
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
            key,
            data: room
          }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        });
        _push(`<!--]--></div><div class="page-rooms__wrap__swiper"><div class="page-rooms__wrap__swiper-wrapper swiper-wrapper"><!--[-->`);
        ssrRenderList((_P = (_O = unref(pageData)) == null ? void 0 : _O.triple) == null ? void 0 : _P.rooms, (room, key) => {
          _push(`<div class="page-rooms__wrap__swiper-slide swiper-slide">`);
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({ data: room }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="page-rooms__wrap__swiper-navigation"><div class="page-rooms__wrap__swiper-navigation-prev">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
        _push(`</div><div class="page-rooms__wrap__swiper-navigation-text"><span>${ssrInterpolate(unref(tripleSwiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate((_R = (_Q = unref(pageData)) == null ? void 0 : _Q.triple) == null ? void 0 : _R.rooms.length)}</span></div><div class="page-rooms__wrap__swiper-navigation-next">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_T = (_S = unref(pageData)) == null ? void 0 : _S.quadruple) == null ? void 0 : _T.rooms.length) && unref(roomType) === "all" || unref(roomType) === "quad") {
        _push(`<div class="page-rooms__wrap__room__list"><div class="page-rooms__wrap__room__list-title">`);
        if ((_V = (_U = unref(pageData)) == null ? void 0 : _U.quadruple) == null ? void 0 : _V.title.deco_title) {
          _push(`<span class="-en">${ssrInterpolate((_X = (_W = unref(pageData)) == null ? void 0 : _W.quadruple) == null ? void 0 : _X.title.deco_title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_Z = (_Y = unref(pageData)) == null ? void 0 : _Y.quadruple) == null ? void 0 : _Z.title.title) {
          _push(`<h3>${ssrInterpolate((_$ = (__ = unref(pageData)) == null ? void 0 : __.quadruple) == null ? void 0 : _$.title.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="page-rooms__wrap__room__list-item"><!--[-->`);
        ssrRenderList((_ba = (_aa = unref(pageData)) == null ? void 0 : _aa.quadruple) == null ? void 0 : _ba.rooms, (room, key) => {
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
            key,
            data: room
          }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        });
        _push(`<!--]--></div><div class="page-rooms__wrap__swiper"><div class="page-rooms__wrap__swiper-wrapper swiper-wrapper"><!--[-->`);
        ssrRenderList((_da = (_ca = unref(pageData)) == null ? void 0 : _ca.quadruple) == null ? void 0 : _da.rooms, (room, key) => {
          _push(`<div class="page-rooms__wrap__swiper-slide swiper-slide">`);
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({ data: room }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="page-rooms__wrap__swiper-navigation"><div class="page-rooms__wrap__swiper-navigation-prev">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
        _push(`</div><div class="page-rooms__wrap__swiper-navigation-text"><span>${ssrInterpolate(unref(quadrupleSwiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate((_fa = (_ea = unref(pageData)) == null ? void 0 : _ea.quadruple) == null ? void 0 : _fa.rooms.length)}</span></div><div class="page-rooms__wrap__swiper-navigation-next">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c4898889.mjs.map
