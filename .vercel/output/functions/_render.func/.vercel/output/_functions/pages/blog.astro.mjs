/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BHbJegfd.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "mrjark | blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hola mundo</h1> ` })}`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/blog/index.astro", void 0);

const $$file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
