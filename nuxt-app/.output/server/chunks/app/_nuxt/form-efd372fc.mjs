import { _ as __nuxt_component_0 } from './nuxt-link-660753fe.mjs';
import { _ as __nuxt_component_1 } from './index-b1379b8a.mjs';
import { u as usePageLoaded } from '../server.mjs';
import { reactive, ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const taglistData = reactive({
      selected: [],
      options: [
        {
          label: "\u9078\u98051",
          value: "option1"
        },
        {
          label: "\u9078\u98052",
          value: "option2"
        },
        {
          label: "\u9078\u98053",
          value: "option3"
        },
        {
          label: "\u9078\u98054",
          value: "option4"
        },
        {
          label: "\u9078\u98055",
          value: "option5"
        },
        {
          label: "\u9078\u98056",
          value: "option6"
        }
      ]
    });
    const dropdownSelected = ref();
    const submitHandler = (data) => {
      console.log("submitHandler", data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "display-form" }, _attrs))}><div class="container"><h1>\u8868\u683C\u5C55\u793A</h1><div class="display-form__content"><div><h2>\u767B\u5165\u8868\u683C\u7BC4\u4F8B</h2>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        id: "login-submit",
        "incomplete-message": "\u8ACB\u586B\u5BEB\u4EE5\u4E0A\u6B04\u4F4D",
        actions: false,
        onSubmit: submitHandler,
        "submit-attrs": { wrapperClass: "es-button" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "\u96FB\u5B50\u90F5\u4EF6",
              type: "text",
              name: "username",
              autocomplete: "",
              validation: "required|email",
              placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u90F5\u4EF6"
            }, null, _parent2, _scopeId));
            _push2(`<div class="member-login__password"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "password",
              name: "password",
              label: "\u5BC6\u78BC",
              autocomplete: "",
              validation: "required|length:6|matches:/[^a-zA-Z]/",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/forgotpass" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("member.forgot_pass"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("member.forgot_pass")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "\u8A18\u5F97\u6211",
              name: "remember",
              value: true
            }, null, _parent2, _scopeId));
            _push2(`<div class="member-login__form-button"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "submit",
              label: "\u767B\u5165"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_FormKit, {
                label: "\u96FB\u5B50\u90F5\u4EF6",
                type: "text",
                name: "username",
                autocomplete: "",
                validation: "required|email",
                placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u90F5\u4EF6"
              }),
              createVNode("div", { class: "member-login__password" }, [
                createVNode(_component_FormKit, {
                  type: "password",
                  name: "password",
                  label: "\u5BC6\u78BC",
                  autocomplete: "",
                  validation: "required|length:6|matches:/[^a-zA-Z]/",
                  "validation-visibility": "live"
                }),
                createVNode(_component_NuxtLink, { to: "/forgotpass" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("member.forgot_pass")), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "\u8A18\u5F97\u6211",
                name: "remember",
                value: true
              }),
              createVNode("div", { class: "member-login__form-button" }, [
                createVNode(_component_FormKit, {
                  type: "submit",
                  label: "\u767B\u5165"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h2>\u5BA2\u88FD\u5316\u529F\u80FD\u7BC4\u4F8B</h2>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "taglist",
        title: "\u5206\u985E",
        cleartext: "\u4E0D\u9650\u5236",
        modelValue: unref(taglistData).selected,
        "onUpdate:modelValue": ($event) => unref(taglistData).selected = $event,
        options: unref(taglistData).options
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(taglistData).selected)} `);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "dropdown",
        title: "\u4E0B\u62C9\u9078\u55AE",
        cleartext: "\u4E0D\u9650\u5236",
        modelValue: unref(dropdownSelected),
        "onUpdate:modelValue": ($event) => isRef(dropdownSelected) ? dropdownSelected.value = $event : null,
        options: unref(taglistData).options
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-efd372fc.mjs.map
