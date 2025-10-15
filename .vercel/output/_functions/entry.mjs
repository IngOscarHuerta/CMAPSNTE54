import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DOfMhvJE.mjs';
import { manifest } from './manifest_Dn7LUG9d.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/acerca.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/documentos.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.1_@types+node@24_f130d5779d0ee02f6639042f445789f7/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/acerca.astro", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/documentos.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2d2dccb9-7e82-4003-ab06-bcf199fe2613",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
