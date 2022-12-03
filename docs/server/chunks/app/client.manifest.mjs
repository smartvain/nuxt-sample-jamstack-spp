const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "resourceType": "script",
    "module": true,
    "file": "entry.8b2f93c2.js",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "virtual:nuxt:/Users/yule/develop/nuxt/nuxt-sample-jamstack-spp/.nuxt/error-component.mjs"
    ]
  },
  "virtual:nuxt:/Users/yule/develop/nuxt/nuxt-sample-jamstack-spp/.nuxt/error-component.mjs": {
    "resourceType": "script",
    "module": true,
    "file": "error-component.a73d47ce.js",
    "src": "virtual:nuxt:/Users/yule/develop/nuxt/nuxt-sample-jamstack-spp/.nuxt/error-component.mjs",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "dynamicImports": [
      "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue",
      "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"
    ]
  },
  "pages/[slug]/index.vue": {
    "resourceType": "script",
    "module": true,
    "file": "index.c0cc8917.js",
    "src": "pages/[slug]/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch.46222773.js"
    ],
    "css": []
  },
  "index.8158d4da.css": {
    "file": "index.8158d4da.css",
    "resourceType": "style"
  },
  "_fetch.46222773.js": {
    "resourceType": "script",
    "module": true,
    "file": "fetch.46222773.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "file": "index.7f6d5697.js",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch.46222773.js"
    ]
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": {
    "resourceType": "script",
    "module": true,
    "file": "error-404.2dd90696.js",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_composables.95327223.js"
    ],
    "css": []
  },
  "error-404.23f2309d.css": {
    "file": "error-404.23f2309d.css",
    "resourceType": "style"
  },
  "_composables.95327223.js": {
    "resourceType": "script",
    "module": true,
    "file": "composables.95327223.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": {
    "resourceType": "script",
    "module": true,
    "file": "error-500.d248c926.js",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue",
    "isDynamicEntry": true,
    "imports": [
      "_composables.95327223.js",
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "css": []
  },
  "error-500.aa16ed4d.css": {
    "file": "error-500.aa16ed4d.css",
    "resourceType": "style"
  },
  "pages/[slug]/index.css": {
    "resourceType": "style",
    "file": "index.8158d4da.css",
    "src": "pages/[slug]/index.css"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-404.css": {
    "resourceType": "style",
    "file": "error-404.23f2309d.css",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-404.css"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-500.css": {
    "resourceType": "style",
    "file": "error-500.aa16ed4d.css",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-500.css"
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
