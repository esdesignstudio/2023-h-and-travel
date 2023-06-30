import { c as __nuxt_component_0, a as __nuxt_component_3, _ as __nuxt_component_4, b as __nuxt_component_0$1$1 } from './titleDouble-f28e0c7d.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-660753fe.mjs';
import { withAsyncContext, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './index-b1379b8a.mjs';
import { d as useRoute, e as useAsyncData, f as useRuntimeConfig, u as usePageLoaded, n as navigateTo } from '../server.mjs';
import 'ufo';
import './nuxt-icon-e392c362.mjs';
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
  __name: "roomFacilities",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-room-facilities" }, _attrs))}><div class="flexible-room-facilities__wrap container"><div class="flexible-room-facilities__wrap-title">`);
      if ((_a = __props.data) == null ? void 0 : _a.title) {
        _push(`<h3>${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ElementsDecoTitle, {
        class: "-en",
        data: (_c = __props.data) == null ? void 0 : _c.deco_title
      }, null, _parent));
      _push(`</div>`);
      if (((_d = __props.data) == null ? void 0 : _d.icons.length) > 0) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flexible-room-facilities__wrap-icons" }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}><!--[-->`);
        ssrRenderList((_e = __props.data) == null ? void 0 : _e.icons, (icon, iconindex) => {
          _push(`<li><figure><img${ssrRenderAttr("src", icon.icon.url)}${ssrRenderAttr("alt", icon.text)}></figure><span>${ssrInterpolate(icon.text)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (((_f = __props.data) == null ? void 0 : _f.setting_imgs.length) > 0) {
        _push(`<ul class="flexible-room-facilities__wrap-imgs"><!--[-->`);
        ssrRenderList((_g = __props.data) == null ? void 0 : _g.setting_imgs, (img, imgindex) => {
          _push(`<li><figure><img${ssrRenderAttr("src", img.image.url)}${ssrRenderAttr("alt", img.text)}></figure><span${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(img.text)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/roomFacilities.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Object,
      default: {}
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_rooms_slug" + route.params.slug,
      () => $fetch(useRuntimeConfig().apiUrl + "/get_single_room", {
        method: "POST",
        body: {
          slug: route.params.slug
        }
      }),
      "$ho5jeR3aRp"
    )), __temp = await __temp, __restore(), __temp);
    const pageloaded = usePageLoaded();
    if (pageData.value) {
      pageloaded.value = true;
    } else {
      navigateTo("/404");
    }
    console.log("pageData", pageData.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
      const _component_ElementsCarousel = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_FlexibleRoomFacilities = __nuxt_component_2;
      const _component_FlexibleTitleDouble = __nuxt_component_3;
      const _component_FlexibleFullBg = __nuxt_component_4;
      const _component_Footer = __nuxt_component_1;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rooms-sigle" }, _attrs))}><div class="rooms-sigle__wrap"><div class="rooms-sigle__wrap-title container">`);
      if ((_b = (_a = unref(pageData).data) == null ? void 0 : _a.post) == null ? void 0 : _b.post_title) {
        _push(`<h1>${ssrInterpolate((_d = (_c = unref(pageData).data) == null ? void 0 : _c.post) == null ? void 0 : _d.post_title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = unref(pageData).data) == null ? void 0 : _e.key_visual) == null ? void 0 : _f.deco_title) {
        _push(`<span class="deco -en">${ssrInterpolate((_h = (_g = unref(pageData).data) == null ? void 0 : _g.key_visual) == null ? void 0 : _h.deco_title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((_j = (_i = unref(pageData).data) == null ? void 0 : _i.key_visual) == null ? void 0 : _j.slider) {
        _push(ssrRenderComponent(_component_ElementsCarousel, {
          data: (_l = (_k = unref(pageData).data) == null ? void 0 : _k.key_visual) == null ? void 0 : _l.slider
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="rooms-sigle__wrap__hero">`);
      if ((_n = (_m = unref(pageData).data) == null ? void 0 : _m.key_visual) == null ? void 0 : _n.description) {
        _push(`<div${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${(_p = (_o = unref(pageData).data) == null ? void 0 : _o.key_visual) == null ? void 0 : _p.description}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_r = (_q = unref(pageData).data) == null ? void 0 : _q.key_visual) == null ? void 0 : _r.link) {
        _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
          class: "rooms-sigle__wrap__hero__btn",
          to: (_t = (_s = unref(pageData).data) == null ? void 0 : _s.key_visual) == null ? void 0 : _t.link.url,
          target: (_v = (_u = unref(pageData).data) == null ? void 0 : _u.key_visual) == null ? void 0 : _v.link.target
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(`${ssrInterpolate((_b2 = (_a2 = unref(pageData).data) == null ? void 0 : _a2.key_visual) == null ? void 0 : _b2.link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_d2 = (_c2 = unref(pageData).data) == null ? void 0 : _c2.key_visual) == null ? void 0 : _d2.link.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_FlexibleRoomFacilities, {
        data: (_w = unref(pageData).data) == null ? void 0 : _w.room_settings
      }, null, _parent));
      _push(ssrRenderComponent(_component_FlexibleTitleDouble, {
        data: (_x = unref(pageData).data) == null ? void 0 : _x.checkin_list
      }, null, _parent));
      _push(ssrRenderComponent(_component_FlexibleFullBg, {
        data: (_y = unref(pageData).data) == null ? void 0 : _y.more_rooms
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-7477a131.mjs.map
