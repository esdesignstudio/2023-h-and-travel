globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{"siteUrl":"http://handtravel.e-s.tw","apiUrl":"http://handtravel.e-s.tw/wp-json/api","siteName":"ES Design"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-vv81ShlV+41paSulxfh/zuaQPPQ\"",
    "mtime": "2023-06-29T11:02:39.398Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/hint.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"24-0IlX3cmi4aZKIHDDLXH2/ZqvrYo\"",
    "mtime": "2023-06-29T11:02:39.398Z",
    "size": 36,
    "path": "../public/hint.md"
  },
  "/icon.png": {
    "type": "image/png",
    "etag": "\"76b2-WGV4sRcai2E8SMOzWlyDUzIYlCM\"",
    "mtime": "2023-06-29T11:02:39.397Z",
    "size": 30386,
    "path": "../public/icon.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3b8-v51d67HhC+vexytanoJzO5NIBzY\"",
    "mtime": "2023-06-29T11:02:39.396Z",
    "size": 952,
    "path": "../public/robots.txt"
  },
  "/_nuxt/404.b16bad44.js": {
    "type": "application/javascript",
    "etag": "\"1fe-YyR4wsz4ulqQA5ZJBrK1DNmEDfU\"",
    "mtime": "2023-06-29T11:02:39.395Z",
    "size": 510,
    "path": "../public/_nuxt/404.b16bad44.js"
  },
  "/_nuxt/404.b7ab504f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"52-bFwXSPCheXdgv3ppGe62/WobLQo\"",
    "mtime": "2023-06-29T11:02:39.394Z",
    "size": 82,
    "path": "../public/_nuxt/404.b7ab504f.css"
  },
  "/_nuxt/Gambetta-Regular.ad720b72.otf": {
    "type": "font/otf",
    "etag": "\"ae64-9cB7oEL6tT+sFzlcy5wdpT8v6t8\"",
    "mtime": "2023-06-29T11:02:39.394Z",
    "size": 44644,
    "path": "../public/_nuxt/Gambetta-Regular.ad720b72.otf"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-06-29T11:02:39.394Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/_slug_.02b579a1.js": {
    "type": "application/javascript",
    "etag": "\"724-muQFhAKD8IseQSfR5EFKm4+uecA\"",
    "mtime": "2023-06-29T11:02:39.394Z",
    "size": 1828,
    "path": "../public/_nuxt/_slug_.02b579a1.js"
  },
  "/_nuxt/_slug_.8726fa6a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac-3Io9Ipsm8APvFsJa8nTqHDw+f2w\"",
    "mtime": "2023-06-29T11:02:39.393Z",
    "size": 172,
    "path": "../public/_nuxt/_slug_.8726fa6a.css"
  },
  "/_nuxt/_slug_.a211b1e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"167f-0ifRqqIDWHga0CZSNqCgNNn9VnE\"",
    "mtime": "2023-06-29T11:02:39.393Z",
    "size": 5759,
    "path": "../public/_nuxt/_slug_.a211b1e5.css"
  },
  "/_nuxt/_slug_.ea33b827.js": {
    "type": "application/javascript",
    "etag": "\"e9d-VvlF1UMY0F0hrUdopBJB4LjujO8\"",
    "mtime": "2023-06-29T11:02:39.393Z",
    "size": 3741,
    "path": "../public/_nuxt/_slug_.ea33b827.js"
  },
  "/_nuxt/arrow_down.e4cdc91a.js": {
    "type": "application/javascript",
    "etag": "\"ee-Su2ELTNNqOETJa5hg+ngyEFq7J0\"",
    "mtime": "2023-06-29T11:02:39.393Z",
    "size": 238,
    "path": "../public/_nuxt/arrow_down.e4cdc91a.js"
  },
  "/_nuxt/arrow_right.a062decf.js": {
    "type": "application/javascript",
    "etag": "\"14e-WEKwn7wyF8JEL1zlfnPPYCdVcXI\"",
    "mtime": "2023-06-29T11:02:39.393Z",
    "size": 334,
    "path": "../public/_nuxt/arrow_right.a062decf.js"
  },
  "/_nuxt/comment.8b229ad8.js": {
    "type": "application/javascript",
    "etag": "\"412-tawqVB11BgVFAEyxux1OcUw0kuc\"",
    "mtime": "2023-06-29T11:02:39.392Z",
    "size": 1042,
    "path": "../public/_nuxt/comment.8b229ad8.js"
  },
  "/_nuxt/composables.38164e2e.js": {
    "type": "application/javascript",
    "etag": "\"61-Al/DM02S4onFpEM7tHLN0XuCHiw\"",
    "mtime": "2023-06-29T11:02:39.392Z",
    "size": 97,
    "path": "../public/_nuxt/composables.38164e2e.js"
  },
  "/_nuxt/default.29ce2f35.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a4-yqgYgFeW0b3BbkbxGVYQjnJEG/U\"",
    "mtime": "2023-06-29T11:02:39.392Z",
    "size": 2212,
    "path": "../public/_nuxt/default.29ce2f35.css"
  },
  "/_nuxt/default.e2f8cba9.js": {
    "type": "application/javascript",
    "etag": "\"10a4-tWmi64z7ZQ1o/RHP71H1lmfdkaQ\"",
    "mtime": "2023-06-29T11:02:39.392Z",
    "size": 4260,
    "path": "../public/_nuxt/default.e2f8cba9.js"
  },
  "/_nuxt/entry.a0f4cbb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bcbd-y+YzadQbHzP69bi3AgCYF+JxwPE\"",
    "mtime": "2023-06-29T11:02:39.392Z",
    "size": 48317,
    "path": "../public/_nuxt/entry.a0f4cbb8.css"
  },
  "/_nuxt/entry.e7f7e34d.js": {
    "type": "application/javascript",
    "etag": "\"46acc-BiCXf/SZ+GBbZXPS9oCMQ/eYuMk\"",
    "mtime": "2023-06-29T11:02:39.391Z",
    "size": 289484,
    "path": "../public/_nuxt/entry.e7f7e34d.js"
  },
  "/_nuxt/error-404.1d9cbd0b.js": {
    "type": "application/javascript",
    "etag": "\"92e-dgcQkVZITdo8Q3WuP96O9CohCbg\"",
    "mtime": "2023-06-29T11:02:39.391Z",
    "size": 2350,
    "path": "../public/_nuxt/error-404.1d9cbd0b.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-06-29T11:02:39.391Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.79a2bab1.js": {
    "type": "application/javascript",
    "etag": "\"7b2-Gfd+jnIucQMbfoB/YuEb3zW2WGk\"",
    "mtime": "2023-06-29T11:02:39.391Z",
    "size": 1970,
    "path": "../public/_nuxt/error-500.79a2bab1.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-06-29T11:02:39.391Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.545931d8.js": {
    "type": "application/javascript",
    "etag": "\"504-kVju1TtUZmXLq/03K+0229hMWAk\"",
    "mtime": "2023-06-29T11:02:39.390Z",
    "size": 1284,
    "path": "../public/_nuxt/error-component.545931d8.js"
  },
  "/_nuxt/form.8e07aac5.js": {
    "type": "application/javascript",
    "etag": "\"82c-icLJ7gYQaqJhYtIIS4dyJp3q3bY\"",
    "mtime": "2023-06-29T11:02:39.390Z",
    "size": 2092,
    "path": "../public/_nuxt/form.8e07aac5.js"
  },
  "/_nuxt/form.8e131b35.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23a-e7nK7InwtFhb326vpXrwqq5O2lM\"",
    "mtime": "2023-06-29T11:02:39.390Z",
    "size": 570,
    "path": "../public/_nuxt/form.8e131b35.css"
  },
  "/_nuxt/heart.db3f5b18.js": {
    "type": "application/javascript",
    "etag": "\"449-mMw6FtrcYsVFzt4KqeHXcgT66bM\"",
    "mtime": "2023-06-29T11:02:39.390Z",
    "size": 1097,
    "path": "../public/_nuxt/heart.db3f5b18.js"
  },
  "/_nuxt/index.7951914b.js": {
    "type": "application/javascript",
    "etag": "\"119ae-OCpzB6DegPU10wwHS1aYnhF1EwI\"",
    "mtime": "2023-06-29T11:02:39.390Z",
    "size": 72110,
    "path": "../public/_nuxt/index.7951914b.js"
  },
  "/_nuxt/index.7d3f39af.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d94-lhXtao4SheHU3X13sq2w+vcBTLI\"",
    "mtime": "2023-06-29T11:02:39.389Z",
    "size": 3476,
    "path": "../public/_nuxt/index.7d3f39af.css"
  },
  "/_nuxt/index.84c9061c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1098-3fYnxT0aGMIwG8PeZ4rmABwMI8E\"",
    "mtime": "2023-06-29T11:02:39.389Z",
    "size": 4248,
    "path": "../public/_nuxt/index.84c9061c.css"
  },
  "/_nuxt/index.a0177249.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"132-8pOsArSV4arQakh8BYvIA97XpfU\"",
    "mtime": "2023-06-29T11:02:39.389Z",
    "size": 306,
    "path": "../public/_nuxt/index.a0177249.css"
  },
  "/_nuxt/index.b48b3bfc.js": {
    "type": "application/javascript",
    "etag": "\"70c-RSP6eC4ZuNf7L3Ia6xqIj6aG8U0\"",
    "mtime": "2023-06-29T11:02:39.388Z",
    "size": 1804,
    "path": "../public/_nuxt/index.b48b3bfc.js"
  },
  "/_nuxt/index.c815c5e3.js": {
    "type": "application/javascript",
    "etag": "\"1300-A7/AGih7GNAt2qMk2KlaQ5Vo3lM\"",
    "mtime": "2023-06-29T11:02:39.388Z",
    "size": 4864,
    "path": "../public/_nuxt/index.c815c5e3.js"
  },
  "/_nuxt/logo.a83acf98.js": {
    "type": "application/javascript",
    "etag": "\"2ca-f27S7GVfVM4ZBP0sqes2Gh7XvWM\"",
    "mtime": "2023-06-29T11:02:39.387Z",
    "size": 714,
    "path": "../public/_nuxt/logo.a83acf98.js"
  },
  "/_nuxt/nuxt-icon.2f1fba64.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a4-sWDBQZSmvHB2/Zs70D8cQGDErp0\"",
    "mtime": "2023-06-29T11:02:39.386Z",
    "size": 164,
    "path": "../public/_nuxt/nuxt-icon.2f1fba64.css"
  },
  "/_nuxt/nuxt-icon.c1d1c104.js": {
    "type": "application/javascript",
    "etag": "\"62-Cl8AV6SUzyEnedAFAp12bVVnG6I\"",
    "mtime": "2023-06-29T11:02:39.386Z",
    "size": 98,
    "path": "../public/_nuxt/nuxt-icon.c1d1c104.js"
  },
  "/_nuxt/nuxt-icon.vue.5c22dab0.js": {
    "type": "application/javascript",
    "etag": "\"56a-ELyZXYoNGQVWUDCU6gfHS56rXpw\"",
    "mtime": "2023-06-29T11:02:39.386Z",
    "size": 1386,
    "path": "../public/_nuxt/nuxt-icon.vue.5c22dab0.js"
  },
  "/_nuxt/nuxt-link.657e1729.js": {
    "type": "application/javascript",
    "etag": "\"f42-oIzL9MhxKyr5FwVLQo1kyDxoXDw\"",
    "mtime": "2023-06-29T11:02:39.385Z",
    "size": 3906,
    "path": "../public/_nuxt/nuxt-link.657e1729.js"
  },
  "/_nuxt/reserve.45ce84cf.js": {
    "type": "application/javascript",
    "etag": "\"16f-AK3fc5GFD8aP/Al6QMGE0ARkmXo\"",
    "mtime": "2023-06-29T11:02:39.385Z",
    "size": 367,
    "path": "../public/_nuxt/reserve.45ce84cf.js"
  },
  "/_nuxt/save.a3039a55.js": {
    "type": "application/javascript",
    "etag": "\"412-bTAcfgnI3EkzlKY1/FKn1WMGHmM\"",
    "mtime": "2023-06-29T11:02:39.385Z",
    "size": 1042,
    "path": "../public/_nuxt/save.a3039a55.js"
  },
  "/_nuxt/share.f0705b2c.js": {
    "type": "application/javascript",
    "etag": "\"40a-2lQGsWr0uTiLIuKgVM5WH3WHJ3I\"",
    "mtime": "2023-06-29T11:02:39.384Z",
    "size": 1034,
    "path": "../public/_nuxt/share.f0705b2c.js"
  },
  "/_nuxt/titleBigImg.38920d05.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"477c-EVUTFsTBAooRAwHXa5BHaw9+7hE\"",
    "mtime": "2023-06-29T11:02:39.384Z",
    "size": 18300,
    "path": "../public/_nuxt/titleBigImg.38920d05.css"
  },
  "/_nuxt/titleBigImg.e43aed39.js": {
    "type": "application/javascript",
    "etag": "\"cc9d-geDtbUkSP9knEDKCW7vqzzU/n4o\"",
    "mtime": "2023-06-29T11:02:39.384Z",
    "size": 52381,
    "path": "../public/_nuxt/titleBigImg.e43aed39.js"
  },
  "/_nuxt/titleDouble.69d733da.js": {
    "type": "application/javascript",
    "etag": "\"23b4d-l/aADUBfuSz7XRBt7I8NbipL6dg\"",
    "mtime": "2023-06-29T11:02:39.383Z",
    "size": 146253,
    "path": "../public/_nuxt/titleDouble.69d733da.js"
  },
  "/_nuxt/titleDouble.b29b1ab5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47c8-c4Slrd12v+Mgd6Xo62x3R0HItvI\"",
    "mtime": "2023-06-29T11:02:39.382Z",
    "size": 18376,
    "path": "../public/_nuxt/titleDouble.b29b1ab5.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_EM5B4c = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_EM5B4c, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_EM5B4c, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
