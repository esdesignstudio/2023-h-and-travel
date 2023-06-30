import { _ as __nuxt_component_0$1 } from './nuxt-link-660753fe.mjs';
import _sfc_main$2 from './nuxt-icon-e392c362.mjs';
import { ref, withAsyncContext, resolveDirective, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './index-44cd04c9.mjs';
import { u as usePageLoaded, e as useAsyncData, f as useRuntimeConfig } from '../server.mjs';
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
    let __temp, __restore;
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const roomType = ref("all");
    const { data: pagePage } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_cate",
      () => $fetch(useRuntimeConfig().apiUrl + "/get_rooms_by_cate", {
        method: "GET"
      })
    )), __temp = await __temp, __restore(), __temp);
    console.log("pagePage", pagePage.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V;
      const _component_ElementsRoomCard = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-rooms" }, _attrs))}><div class="container"><div class="page-rooms__wrap"><div class="page-rooms__wrap-title"><h1>\u623F\u578B\u4E00\u89BD</h1><span>ROOMS</span></div><div class="page-rooms__wrap-cate"><div class="${ssrRenderClass([{ "-active": unref(roomType) === "all" }, "btn"])}"> \u6240\u6709\u623F\u578B </div>`);
      if ((_b = (_a = unref(pagePage)) == null ? void 0 : _a.twins) == null ? void 0 : _b.title.title) {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === "twins" }, "btn"])}">${ssrInterpolate((_d = (_c = unref(pagePage)) == null ? void 0 : _c.twins) == null ? void 0 : _d.title.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = unref(pagePage)) == null ? void 0 : _e.triple) == null ? void 0 : _f.title.title) {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === "triple" }, "btn"])}">${ssrInterpolate((_h = (_g = unref(pagePage)) == null ? void 0 : _g.triple) == null ? void 0 : _h.title.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_j = (_i = unref(pagePage)) == null ? void 0 : _i.quadruple) == null ? void 0 : _j.title.title) {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === "quadruple" }, "btn"])}">${ssrInterpolate((_l = (_k = unref(pagePage)) == null ? void 0 : _k.quadruple) == null ? void 0 : _l.title.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="page-rooms__wrap__room"><div class="container">`);
      if (((_n = (_m = unref(pagePage)) == null ? void 0 : _m.twins) == null ? void 0 : _n.rooms.length) && unref(roomType) === "all" || unref(roomType) === "twins") {
        _push(`<div class="page-rooms__wrap__room__list"><div class="page-rooms__wrap__room__list-title">`);
        if ((_p = (_o = unref(pagePage)) == null ? void 0 : _o.twins) == null ? void 0 : _p.title.deco_title) {
          _push(`<span>${ssrInterpolate((_r = (_q = unref(pagePage)) == null ? void 0 : _q.twins) == null ? void 0 : _r.title.deco_title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_t = (_s = unref(pagePage)) == null ? void 0 : _s.twins) == null ? void 0 : _t.title.title) {
          _push(`<h3>${ssrInterpolate((_v = (_u = unref(pagePage)) == null ? void 0 : _u.twins) == null ? void 0 : _v.title.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="page-rooms__wrap__room__list-item"><!--[-->`);
        ssrRenderList((_x = (_w = unref(pagePage)) == null ? void 0 : _w.twins) == null ? void 0 : _x.rooms, (room, key) => {
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
            key,
            data: room
          }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_z = (_y = unref(pagePage)) == null ? void 0 : _y.triple) == null ? void 0 : _z.rooms.length) && unref(roomType) === "all" || unref(roomType) === "triple") {
        _push(`<div class="page-rooms__wrap__room__list"><div class="page-rooms__wrap__room__list-title">`);
        if ((_B = (_A = unref(pagePage)) == null ? void 0 : _A.triple) == null ? void 0 : _B.title.deco_title) {
          _push(`<span>${ssrInterpolate((_D = (_C = unref(pagePage)) == null ? void 0 : _C.triple) == null ? void 0 : _D.title.deco_title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_F = (_E = unref(pagePage)) == null ? void 0 : _E.triple) == null ? void 0 : _F.title.title) {
          _push(`<h3>${ssrInterpolate((_H = (_G = unref(pagePage)) == null ? void 0 : _G.triple) == null ? void 0 : _H.title.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="page-rooms__wrap__room__list-item"><!--[-->`);
        ssrRenderList((_J = (_I = unref(pagePage)) == null ? void 0 : _I.triple) == null ? void 0 : _J.rooms, (room, key) => {
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
            key,
            data: room
          }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_L = (_K = unref(pagePage)) == null ? void 0 : _K.quadruple) == null ? void 0 : _L.rooms.length) && unref(roomType) === "all" || unref(roomType) === "quad") {
        _push(`<div class="page-rooms__wrap__room__list"><div class="page-rooms__wrap__room__list-title">`);
        if ((_N = (_M = unref(pagePage)) == null ? void 0 : _M.quadruple) == null ? void 0 : _N.title.deco_title) {
          _push(`<span>${ssrInterpolate((_P = (_O = unref(pagePage)) == null ? void 0 : _O.quadruple) == null ? void 0 : _P.title.deco_title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_R = (_Q = unref(pagePage)) == null ? void 0 : _Q.quadruple) == null ? void 0 : _R.title.title) {
          _push(`<h3>${ssrInterpolate((_T = (_S = unref(pagePage)) == null ? void 0 : _S.quadruple) == null ? void 0 : _T.title.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="page-rooms__wrap__room__list-item"><!--[-->`);
        ssrRenderList((_V = (_U = unref(pagePage)) == null ? void 0 : _U.quadruple) == null ? void 0 : _V.rooms, (room, key) => {
          _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
            key,
            data: room
          }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        });
        _push(`<!--]--></div></div>`);
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
//# sourceMappingURL=index-ad66f8b8.mjs.map
