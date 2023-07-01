import { defineComponent, ref, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: null,
    filled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const icon = ref("");
    watchEffect(async () => {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/arrow_down.svg": () => import('./arrow_down-28c7370b.mjs').then((m) => m["default"]),
          "/assets/icons/arrow_right.svg": () => import('./arrow_right-eb588e57.mjs').then((m) => m["default"]),
          "/assets/icons/close.svg": () => import('./close-7593ceb6.mjs').then((m) => m["default"]),
          "/assets/icons/comment.svg": () => import('./comment-26be9455.mjs').then((m) => m["default"]),
          "/assets/icons/heart.svg": () => import('./heart-c1cd0b7b.mjs').then((m) => m["default"]),
          "/assets/icons/logo.svg": () => import('./logo-d2eb9a6b.mjs').then((m) => m["default"]),
          "/assets/icons/reserve.svg": () => import('./reserve-3f41aa6d.mjs').then((m) => m["default"]),
          "/assets/icons/save.svg": () => import('./save-97a076cd.mjs').then((m) => m["default"]),
          "/assets/icons/share.svg": () => import('./share-37795721.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !__props.filled }]
      }, _attrs))}>${unref(icon)}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-503afd00.mjs.map
