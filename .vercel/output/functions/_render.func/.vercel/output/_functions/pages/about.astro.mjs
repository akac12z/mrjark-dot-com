/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as createAstro, a as renderComponent } from '../chunks/astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$MainLayout } from '../chunks/MainLayout_BHbJegfd.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const about = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/components/static/about/markdown/about.md": () => import('../chunks/about_BvA_kZ61.mjs')}), () => "@about/markdown/about.md");
  return renderTemplate`${maybeRenderHead()}<section class="max-h-screen prose prose-invert"> <!-- <Photo/> --> ${about.map(
    (h) => renderTemplate`<h1 class="text-3xl">${h.frontmatter.title}</h1>
    <p>${unescapeHTML(h.compiledContent())}</p>`
  )} </section>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/static/about/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "about mrjark a.k.a. chema" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", $$About, {})} ` })}`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/about/index.astro", void 0);

const $$file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
