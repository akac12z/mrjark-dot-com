import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_UZ5EhxzX.mjs';
import { manifest } from './manifest_C39Iv9Nu.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/book-notes/_slug_.astro.mjs');
const _page6 = () => import('./pages/book-notes.astro.mjs');
const _page7 = () => import('./pages/leaning.astro.mjs');
const _page8 = () => import('./pages/why.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/book-notes/[slug].astro", _page5],
    ["src/pages/book-notes/index.astro", _page6],
    ["src/pages/leaning/index.astro", _page7],
    ["src/pages/why/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5b7292f3-bf1f-4b6c-b1ea-2ddaae8103f8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
