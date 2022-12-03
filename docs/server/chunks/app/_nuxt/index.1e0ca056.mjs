import { _ as _export_sfc, u as useRuntimeConfig, a as useRoute } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch.9059ff3e.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const client = {
      serviceDomain: config.serviceDomain,
      apiKey: config.apiKey
    };
    const route = useRoute();
    const slug = route.params.slug;
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/blogs/${slug}`, {
      baseURL: `https://${client.serviceDomain}.microcms.io/api/v1`,
      headers: {
        "X-MICROCMS-API-KEY": client.apiKey
      }
    }, "$9tVpyLHRAX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-8071cba1><h1 style="${ssrRenderStyle({ "margin-bottom": "20px" })}" data-v-8071cba1>${ssrInterpolate(unref(article).title)}</h1><p style="${ssrRenderStyle({ "margin-bottom": "40px" })}" data-v-8071cba1><time${ssrRenderAttr("datetime", unref(article).publishedAt)} data-v-8071cba1>${ssrInterpolate(unref(article).publishedAt)}</time></p><div class="post" data-v-8071cba1>${unref(article).content}</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8071cba1"]]);

export { index as default };
//# sourceMappingURL=index.1e0ca056.mjs.map
